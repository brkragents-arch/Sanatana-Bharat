import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import type { MythologicalCharacter } from '../../types/mythology';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Sparkles,
  GitFork,
  Heart
} from 'lucide-react';
import { SrimadBhagavatamTreeSection } from './SrimadBhagavatamTreeSection';

export const FamilyTreeView: React.FC = () => {
  const { 
    characters, 
    selectedCharacterId, 
    selectCharacter, 
    highlightedNodeIds,
    language,
    setViewMode 
  } = useMythology();

  const isEn = language === 'en';
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [collapsedBranches, setCollapsedBranches] = useState<Record<string, boolean>>({
    'vedas': false,
    'sanaka': false,
    'prajapatis': false,
    'manu': false,
    'daksha_daughters': false,
    'descendants': false
  });

  const toggleBranch = (key: string) => {
    setCollapsedBranches(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    setCollapsedBranches({
      'vedas': false,
      'sanaka': false,
      'prajapatis': false,
      'manu': false,
      'daksha_daughters': false,
      'descendants': false
    });
  };

  const collapseAll = () => {
    setCollapsedBranches({
      'vedas': true,
      'sanaka': true,
      'prajapatis': true,
      'manu': true,
      'daksha_daughters': true,
      'descendants': true
    });
  };

  // Group characters by category/generation
  const charMap = useMemo(() => {
    const map = new Map<string, MythologicalCharacter>();
    characters.forEach(c => map.set(c.id, c));
    return map;
  }, [characters]);

  const vishnu = charMap.get('sri-vishnu');
  const brahma = charMap.get('chaturmukha-brahma');
  const manu = charMap.get('swayambhuva-manu');
  const shatarupa = charMap.get('shatarupa');
  const daksha = charMap.get('daksha-prajapati');
  const prasuti = charMap.get('prasuti');

  const vedas = useMemo(() => characters.filter(c => c.category === 'aspect'), [characters]);
  const prajapatis = useMemo(() => characters.filter(c => c.category === 'prajapati' && c.id !== 'daksha-prajapati'), [characters]);
  const rishis = useMemo(() => characters.filter(c => c.category === 'rishi'), [characters]);
  const daughters = useMemo(() => characters.filter(c => c.category === 'daughter'), [characters]);
  const descendants = useMemo(() => characters.filter(c => c.category === 'descendant'), [characters]);

  // Node Component
  const TreeNodeCard: React.FC<{
    char?: MythologicalCharacter;
    sublabel?: string;
    isPrimary?: boolean;
    isSpecial?: boolean;
  }> = ({ char, sublabel, isPrimary, isSpecial }) => {
    if (!char) return null;

    const isSelected = selectedCharacterId === char.id;
    const isHighlighted = highlightedNodeIds.has(char.id);
    const displayName = isEn ? (char.nameEn || char.name) : char.name;
    const displayTitle = sublabel || (isEn ? (char.titleEn || char.title) : char.title);
    const matchesFilter = filterQuery && (
      displayName.toLowerCase().includes(filterQuery.toLowerCase()) ||
      displayTitle.toLowerCase().includes(filterQuery.toLowerCase()) ||
      char.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          selectCharacter(char.id, true);
        }}
        className={`group relative rounded-xl p-2.5 sm:p-3 text-left transition-all duration-200 cursor-pointer shadow-xs ${
          isSelected
            ? 'bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] border-2 border-[#D84315] ring-3 ring-[#D84315]/30 scale-102 z-20 shadow-md'
            : isHighlighted
            ? 'bg-[#FFFDF7] border-2 border-[#C99700] ring-2 ring-[#C99700]/20'
            : isPrimary
            ? 'bg-[#FFFDF7] border-2 border-[#D4AF37] hover:border-[#D84315] hover:shadow-md'
            : 'bg-[#FFFFFF] border border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-md'
        } ${matchesFilter ? 'ring-3 ring-amber-500 bg-amber-50' : ''}`}
      >
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/50 flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
            {char.icon || '🪷'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 flex-wrap">
              <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] truncate font-telugu-serif">
                {displayName}
              </h4>
              {isSpecial && (
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#D84315] text-white font-bold">
                  {isEn ? '★ Avatar' : '★ అవతారం'}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#5D4037] truncate font-medium">
              {displayTitle}
            </p>
          </div>
        </div>

        {/* Highlight Indicator */}
        {isSelected && (
          <div className="absolute -top-2 right-2 text-[10px] bg-[#D84315] text-white px-1.5 py-0.2 rounded-full font-bold shadow-xs">
            {isEn ? 'Selected' : 'ఎంచుకున్నారు'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[750px]">
      {/* Top Toolbar */}
      <div className="bg-[#FFFFFF] px-4 py-3 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#FFF8E1] border border-[#D4AF37]">
            <GitFork className="w-4 h-4 text-[#7B1113]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
              సంపూర్ణ వంశవృక్షము (Hierarchical Genealogy Tree)
            </h3>
            <p className="text-[11px] text-[#5D4037]">
              తరాల వారీగా సృష్టిక్రమ మరియు దక్ష ప్రజాపతి సంతతి పరంపర
            </p>
          </div>
        </div>

        {/* Tree Search & Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Quick Filter */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#5D4037] absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="వృక్షంలో వెతకండి (ఉదా: సతీ, నారాయణ, మరీచి)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="pl-8 pr-3 py-1 text-xs rounded-full bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D84315] w-56 sm:w-64"
            />
          </div>

          {/* Quick Jump to Srimad Bhagavatam Tree */}
          <a
            href="#srimad-bhagavatam-tree"
            className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#7B1113] to-[#B71C1C] hover:from-[#8E1C1E] hover:to-[#C62828] text-[#FFE57F] font-bold shadow-xs transition-all hover:shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD54F]" />
            <span>శ్రీమద్భాగవత వంశవృక్షము</span>
          </a>

          {/* Expand/Collapse All */}
          <button
            onClick={expandAll}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] cursor-pointer"
          >
            అన్నీ విస్తరించు
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] cursor-pointer"
          >
            కుదించు
          </button>

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1 border-l border-[#E8DCC4] pl-2">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 1.4))}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title="జూమ్ ఇన్"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-semibold text-[#5D4037] w-10 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.7))}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title="జూమ్ అవుట్"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title="రీసెట్ (100%)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Switcher Banner to Brahma Family */}
      <div className="bg-[#FFFDF7] px-4 py-2 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2 text-[#5D4037]">
          <span className="text-base">🪷</span>
          <span>
            {isEn
              ? 'Looking for the complete 5-branch diagram with 24 Daughters, 8 Rudras, 26 Kings & Kashyapa Progeny?'
              : 'బ్రహ్మ 5 ప్రధాన శాఖలు, 24 కన్యలు, అష్ట రుద్రులు, 26 తరాల రాజవంశం & కశ్యప సంతతి పటాన్ని చూడాలనుకుంటున్నారా?'}
          </span>
        </div>
        <button
          onClick={() => {
            setViewMode('brahma_family');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] font-bold hover:shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>{isEn ? 'Open Family of Brahma (బ్రహ్మ వంశము)' : 'బ్రహ్మ వంశము (Family of Brahma) తెరవండి'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Hierarchical Tree Canvas */}
      <div className="flex-1 p-4 sm:p-6 overflow-auto bg-[radial-gradient(#E8DCC4_1px,transparent_1px)] [background-size:20px_20px]">
        <div 
          className="max-w-5xl mx-auto space-y-8 transition-transform duration-150 origin-top"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* ============================================================ */}
          {/* LEVEL 0: SUPREME ORIGIN (శ్రీమహావిష్ణువు) */}
          {/* ============================================================ */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#FFF8E1] border border-[#D4AF37] text-[11px] font-bold text-[#7B1113] mb-2 shadow-2xs">
              <span>సృష్టి మూలకారణం • తరము 0</span>
            </div>
            <div className="w-80 max-w-full">
              <TreeNodeCard char={vishnu} sublabel="క్షీరసాగర శేషశయన ఆదిపురుషుడు" isPrimary />
            </div>

            {/* Connecting Lotus Stem */}
            <div className="flex flex-col items-center my-1">
              <div className="w-0.5 h-5 bg-[#C99700]" />
              <div className="px-2 py-0.5 rounded-full bg-[#FFF9E6] border border-[#D4AF37] text-[10px] font-bold text-[#7B1113]">
                నాభీకమలము నుండి ఉద్భవము
              </div>
              <div className="w-0.5 h-5 bg-[#C99700]" />
            </div>
          </div>

          {/* ============================================================ */}
          {/* LEVEL 1: ROOT NODE (చతుర్ముఖ బ్రహ్మ) */}
          {/* ============================================================ */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold mb-2 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#FFD54F]" />
              <span>కేంద్ర మూల బిందువు (ROOT NODE) • తరము 1</span>
            </div>
            <div className="w-84 max-w-full">
              <TreeNodeCard char={brahma} sublabel="జగత్సృష్టికర్త • వేదపురుషుడు" isPrimary />
            </div>

            {/* Vedas Sub-Branch */}
            <div className="mt-3 w-full max-w-2xl bg-[#FFFDF7] p-3 rounded-xl border border-[#D4AF37]/50 shadow-2xs">
              <div 
                onClick={() => toggleBranch('vedas')}
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                  {collapsedBranches.vedas ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  <span>బ్రహ్మదేవుని నాలుగు ముఖాలు – చతుర్వేదములు ({vedas.length})</span>
                </div>
                <span className="text-[10px] text-[#5D4037] font-semibold">
                  {collapsedBranches.vedas ? 'విస్తరించు' : 'కుదించు'}
                </span>
              </div>

              {!collapsedBranches.vedas && (
                <div className="mt-2.5 pt-2 border-t border-[#E8DCC4] space-y-2">
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-[#7B1113] flex items-center justify-between flex-wrap gap-1 font-semibold">
                    <span className="flex items-center gap-1">
                      <span>📜</span>
                      <span>శ్రీ వేదవ్యాస విభజన: 1,180 శాఖలలో నేడు 10-15 మాత్రమే లభ్యం (~98% నష్టం)</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewMode('mindmap');
                      }}
                      className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-[10px] font-bold hover:bg-[#5C0D0E] cursor-pointer"
                    >
                      పూర్తి విశ్లేషణ
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {vedas.map(v => (
                      <TreeNodeCard key={v.id} char={v} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Connector to Generation 2 */}
            <div className="w-0.5 h-8 bg-[#C99700] my-1" />
          </div>

          {/* ============================================================ */}
          {/* LEVEL 2: BRAHMA'S CREATIONS & PRAJAPATIS */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="px-3 py-0.5 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-xs font-bold text-[#7B1113]">
                బ్రహ్మ మానస పుత్రులు, ప్రజాపతులు మరియు స్వాయంభువ మనువు • తరము 2
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Branch 2A: Nivrutti Margam (సనకాది మునులు) */}
              <div className="bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4] shadow-xs">
                <div 
                  onClick={() => toggleBranch('sanaka')}
                  className="flex items-center justify-between cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    {collapsedBranches.sanaka ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    <span>నివృత్తి సృష్టి (సనకాదులు)</span>
                  </div>
                  <span className="text-[10px] text-[#5D4037]">బ్రహ్మచర్యం</span>
                </div>
                {!collapsedBranches.sanaka && (
                  <div className="space-y-2">
                    {rishis.map(r => (
                      <TreeNodeCard key={r.id} char={r} />
                    ))}
                  </div>
                )}
              </div>

              {/* Branch 2B: Prajapatis (నవ ప్రజాపతులు) */}
              <div className="bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4] shadow-xs">
                <div 
                  onClick={() => toggleBranch('prajapatis')}
                  className="flex items-center justify-between cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    {collapsedBranches.prajapatis ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    <span>బ్రహ్మ అంగోద్భవ ప్రజాపతులు ({prajapatis.length})</span>
                  </div>
                  <span className="text-[10px] text-[#5D4037]">సృష్టి విస్తరణ</span>
                </div>
                {!collapsedBranches.prajapatis && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                    {prajapatis.map(p => (
                      <TreeNodeCard key={p.id} char={p} />
                    ))}
                  </div>
                )}
              </div>

              {/* Branch 2C: Swayambhuva Manu & Shatarupa (మానవ జాతి ఆద్యులు) */}
              <div className="bg-[#FFFDF7] p-3 rounded-xl border-2 border-[#D4AF37] shadow-xs">
                <div 
                  onClick={() => toggleBranch('manu')}
                  className="flex items-center justify-between cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    {collapsedBranches.manu ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    <span>స్వాయంభువ మనువు – శతరూప</span>
                  </div>
                  <span className="text-[10px] text-[#D84315] font-bold">ప్రసూతి తల్లిదండ్రులు</span>
                </div>
                {!collapsedBranches.manu && (
                  <div className="space-y-2">
                    <TreeNodeCard char={manu} sublabel="బ్రహ్మ దేహ దక్షిణాంశము • ప్రథమ పురుషుడు" />
                    <TreeNodeCard char={shatarupa} sublabel="బ్రహ్మ దేహ వామాంశము • ప్రథమ స్త్రీ" />
                    <div className="p-2 rounded-lg bg-[#FFF8E1] border border-[#D4AF37]/50 text-[11px] text-[#5D4037]">
                      <strong>సంతానము:</strong> ప్రియవ్రత, ఉత్తానపాదులు (పుత్రులు); ఆకూతి, దేవహూతి, <strong>ప్రసూతి</strong> (పుత్రికలు).
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* LEVEL 3: CENTRAL COUPLE: DAKSHA PRAJAPATI + PRASUTI */}
          {/* ============================================================ */}
          <div className="bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF7] to-[#FFF9E6] p-4 sm:p-6 rounded-2xl border-2 border-[#D84315] shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#D84315] text-white text-xs font-bold shadow-xs flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>కేంద్ర వైవాహిక దాంపత్యం • దక్ష ప్రజాపతి ➕ ప్రసూతి దేవి</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#7B1113]">వరుడు (బ్రహ్మ అంగుష్ఠోద్భవుడు):</span>
                <TreeNodeCard char={daksha} sublabel="సకల ప్రజాపతుల అధిపతి" isPrimary />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#7B1113]">వధువు (స్వాయంభువ మను పుత్రిక):</span>
                <TreeNodeCard char={prasuti} sublabel="స్వాయంభువ మనువు - శతరూపల మూడవ కుమార్తె" isPrimary />
              </div>
            </div>

            {/* Marriage significance info */}
            <div className="mt-4 pt-3 border-t border-[#D4AF37]/40 text-center">
              <p className="text-xs text-[#5D4037]">
                బ్రహ్మ కుడి బొటనవేలి నుండి ఉద్భవించిన <strong>దక్ష ప్రజాపతి</strong>, స్వాయంభువ మనువు కుమార్తెయైన <strong>ప్రసూతి</strong>ని వివాహమాడి 
                <strong> 16 మంది దివ్య పుత్రికల</strong>కు జన్మనిచ్చెను. వీరి ద్వారానే లోకములో ధర్మము, యజ్ఞము, పితృతర్పణము, భక్తి విస్తరించెను.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* LEVEL 4: 16 DAUGHTERS & SPOUSES */}
          {/* ============================================================ */}
          <div className="space-y-4">
            <div 
              onClick={() => toggleBranch('daksha_daughters')}
              className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#D4AF37] cursor-pointer shadow-xs"
            >
              <div className="flex items-center gap-2">
                {collapsedBranches.daksha_daughters ? <ChevronRight className="w-5 h-5 text-[#7B1113]" /> : <ChevronDown className="w-5 h-5 text-[#7B1113]" />}
                <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                  దక్ష-ప్రసూతుల 16 మంది దివ్య కుమార్తెలు & వివాహ సంబంధాలు
                </h3>
              </div>
              <span className="text-xs font-bold text-[#D84315]">
                {daughters.length} మంది కన్యలు
              </span>
            </div>

            {!collapsedBranches.daksha_daughters && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {daughters.map((d) => (
                  <TreeNodeCard 
                    key={d.id} 
                    char={d} 
                    isSpecial={d.id === 'sati-devi' || d.id === 'murti'} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* LEVEL 5: PROMINENT DESCENDANTS (శ్రీ నరనారాయణులు, పావకుడు etc.) */}
          {/* ============================================================ */}
          <div className="space-y-4">
            <div 
              onClick={() => toggleBranch('descendants')}
              className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#D4AF37] cursor-pointer shadow-xs"
            >
              <div className="flex items-center gap-2">
                {collapsedBranches.descendants ? <ChevronRight className="w-5 h-5 text-[#7B1113]" /> : <ChevronDown className="w-5 h-5 text-[#7B1113]" />}
                <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                  తదుపరి తరాల సంతతి & దివ్యావతారములు (తరము 4)
                </h3>
              </div>
              <span className="text-xs font-bold text-[#2E7D32]">
                అవతారాలు & సంతతి
              </span>
            </div>

            {!collapsedBranches.descendants && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {descendants.map((desc) => (
                  <TreeNodeCard 
                    key={desc.id} 
                    char={desc} 
                    isSpecial={desc.id === 'nara-narayana'} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* THE SRIMAD BHAGAVATAM FAMILY TREE (శ్రీమద్భాగవత దివ్య వంశవృక్షము) */}
          {/* ============================================================ */}
          <SrimadBhagavatamTreeSection />

        </div>
      </div>
    </div>
  );
};
