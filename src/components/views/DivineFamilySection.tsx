import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { DIVINE_FAMILY_TIERS } from '../../data/divineFamilyData';
import type { DivineDeity, DivineTier } from '../../data/divineFamilyData';
import { GuruParamparaSection } from './GuruParamparaSection';
import { 
  Sparkles, 
  Search, 
  X, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  Filter,
  Image as ImageIcon,
  Maximize2
} from 'lucide-react';

interface DivineFamilySectionProps {
  onSelectCharacterFromTree?: (id: string) => void;
}

export const DivineFamilySection: React.FC<DivineFamilySectionProps> = ({ onSelectCharacterFromTree }) => {
  const { language, selectCharacter, setViewMode } = useMythology();
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDeity, setSelectedDeity] = useState<DivineDeity | null>(null);
  const [activeTierFilter, setActiveTierFilter] = useState<number | 'all' | 'guru_parampara'>('all');
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [activeTier1Id, setActiveTier1Id] = useState<string>('parabrahma');
  const [tier1ViewMode, setTier1ViewMode] = useState<'single' | 'grid'>('single');
  const [infographicLightbox, setInfographicLightbox] = useState<{ src: string; title: string } | null>(null);

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  // Filtered tiers based on active tier & search query
  const filteredTiers = useMemo(() => {
    if (activeTierFilter === 'guru_parampara') return [];
    return DIVINE_FAMILY_TIERS.map(tier => {
      if (activeTierFilter !== 'all' && tier.tierNumber !== activeTierFilter) {
        return null;
      }
      if (!searchQuery.trim()) {
        return tier;
      }
      const q = searchQuery.toLowerCase().trim();
      const filteredDeities = tier.deities.filter(d => 
        d.nameTe.toLowerCase().includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        d.roleTe.toLowerCase().includes(q) ||
        d.roleEn.toLowerCase().includes(q) ||
        d.descTe.toLowerCase().includes(q) ||
        d.descEn.toLowerCase().includes(q)
      );
      if (filteredDeities.length === 0) return null;
      return {
        ...tier,
        deities: filteredDeities
      };
    }).filter((t): t is DivineTier => t !== null);
  }, [activeTierFilter, searchQuery]);

  // Sacred placeholder icons depending on deity category
  const getDeityCategoryIcon = (category: DivineDeity['category']) => {
    switch (category) {
      case 'supreme': return '🕉️';
      case 'trimurti': return '🔱';
      case 'rishi': return '🪷';
      case 'avatar': return '🏹';
      case 'shiva_family': return '🌙';
      case 'devi': return '✨';
      case 'vedic_god': return '☀️';
      default: return '🪔';
    }
  };

  const getTierBadgeColor = (tierNum: number) => {
    switch (tierNum) {
      case 1: return 'bg-[#4A0012] text-[#FFE082] border-[#D4AF37]';
      case 2: return 'bg-[#1565C0] text-white border-[#90CAF9]';
      case 3: return 'bg-[#E65100] text-white border-[#FFCC80]';
      case 4: return 'bg-[#6A1B9A] text-white border-[#CE93D8]';
      case 5: return 'bg-[#C2185B] text-white border-[#F48FB1]';
      case 6: return 'bg-[#AD1457] text-white border-[#F8BBD0]';
      case 7: return 'bg-[#BF360C] text-white border-[#FFAB91]';
      default: return 'bg-[#7B1113] text-[#FFE082] border-[#D4AF37]';
    }
  };

  return (
    <section className="mt-12 bg-gradient-to-b from-[#FFFDF7] via-[#FAF7F0] to-[#F5EEDC] rounded-3xl border-3 border-[#D4AF37] shadow-2xl p-4 sm:p-7 space-y-8 relative overflow-hidden">
      {/* Decorative Traditional Corner Florals */}
      <div className="absolute top-3 left-4 text-[#D4AF37]/25 text-5xl select-none pointer-events-none">⚜️</div>
      <div className="absolute top-3 right-4 text-[#D4AF37]/25 text-5xl select-none pointer-events-none">⚜️</div>

      {/* ============================================================ */}
      {/* 1. TOP HEADER & THE DIVINE FAMILY BANNER */}
      {/* ============================================================ */}
      <div className="text-center space-y-3 relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] border-2 border-[#D4AF37] text-[#7B1113] text-xs sm:text-sm font-bold shadow-xs">
          <span>🕉️</span>
          <span>{isEn ? 'Vedic Sanatana Dharma Hierarchy' : 'వైదిక సనాతన ధర్మ దేవతా వంశానుక్రమం'}</span>
          <span>🪷</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#7B1113] font-telugu-serif tracking-tight drop-shadow-xs">
          {isEn ? 'THE DIVINE FAMILY TREE' : 'దివ్య వంశవృక్షము (దేవతా పరివార క్రమం)'}
        </h2>

        <p className="text-base sm:text-xl font-bold text-[#D84315] font-telugu-serif">
          {isEn ? 'How all Gods & Goddesses came into existence' : 'సకల దైవ స్వరూపాలు, అవతారాలు, ఋషులు మరియు దేవతలు ఏ విధంగా ఆవిర్భవించారు?'}
        </p>

        {/* Golden Slogan Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border border-[#FFD54F] shadow-md text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-[#FFD54F]" />
          <span>
            {isEn 
              ? '“We are all one divinity • Ekam Sat Vipra Bahudha Vadanti” (Rigveda 1.164.46)' 
              : '“సర్వం ఖల్విదం బ్రహ్మ — మనమందరము ఆ ఏకైక పరమాత్మ దివ్య స్వరూపాలమే!” (ఋగ్వేదం 1.164.46)'}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4037] max-w-2xl mx-auto leading-relaxed pt-1">
          {isEn
            ? 'Transformed from classical chart representations into an authentic Vedic encyclopedia: featuring sacred icons, Rigvedic hymns, and detailed theological insights for each divine manifestation.'
            : 'భారతీయ సనాతన ధర్మ మూల సిద్ధాంతం ప్రకారం పరబ్రహ్మ నుండి త్రిమూర్తులు, సప్తర్షులు, విష్ణు దశావతారాలు, శివ పరివారం, ఆదిపరాశక్తి స్వరూపాలు మరియు ఋగ్వేద మూల దేవతల సమగ్ర ఆవిర్భావ దృశ్యమాలిక.'}
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. FILTER & SEARCH TOOLBAR */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF]/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#D4AF37] shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        
        {/* Tier Jump Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <span className="text-xs font-bold text-[#7B1113] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isEn ? 'Filter Tier:' : 'విభాగం:'}</span>
          </span>
          <button
            onClick={() => setActiveTierFilter('all')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTierFilter === 'all'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]'
            }`}
          >
            {isEn ? 'All Tiers (7)' : 'సమగ్ర దర్శనం (7)'}
          </button>
          <button
            onClick={() => setActiveTierFilter('guru_parampara')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTierFilter === 'guru_parampara'
                ? 'bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] shadow-md ring-2 ring-[#FFD54F]'
                : 'bg-[#FFF8E1] text-[#7B1113] hover:bg-[#FFE082] border border-[#D4AF37]'
            }`}
          >
            <span>🕉️</span>
            <span>{isEn ? 'Guru Parampara (31)' : 'గురు పరంపర (31)'}</span>
          </button>

          {[
            { id: 1, labelTe: '1. పరబ్రహ్మ', labelEn: '1. Parabrahma' },
            { id: 2, labelTe: '2. త్రిమూర్తులు', labelEn: '2. Trimurti' },
            { id: 3, labelTe: '3. ప్రజాపతులు', labelEn: '3. Prajapatis' },
            { id: 4, labelTe: '4. దశావతారాలు', labelEn: '4. Dashavatar' },
            { id: 5, labelTe: '5. శివ పరివారం', labelEn: '5. Shiva Parivaram' },
            { id: 6, labelTe: '6. ఆదిపరాశక్తి', labelEn: '6. Shakti Forms' },
            { id: 7, labelTe: '7. వైదిక దేవతలు', labelEn: '7. Vedic Gods' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTierFilter(t.id)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTierFilter === t.id
                  ? 'bg-[#D84315] text-white shadow-xs ring-1 ring-[#FFD54F]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]'
              }`}
            >
              {isEn ? t.labelEn : t.labelTe}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#7B1113] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? 'Search deities, avatars, rishis...' : 'దేవతలు, అవతారాలు, ఋషులను వెతకండి...'}
            className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#D4AF37] bg-[#FFFDF7] text-xs text-[#2C1810] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#D84315]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. TIERS CONTAINER */}
      {/* ============================================================ */}
      <div className="space-y-10 relative z-10">
        {filteredTiers.map((tier) => {
          return (
            <div 
              key={tier.tierNumber} 
              className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] shadow-md p-4 sm:p-6 space-y-4 hover:border-[#D4AF37] transition-colors"
            >
              {/* Tier Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#F0E6D2] pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-sm sm:text-base border-2 shadow-xs shrink-0 ${getTierBadgeColor(tier.tierNumber)}`}>
                    {tier.tierNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                        {isEn ? tier.titleEn : tier.titleTe}
                      </h3>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#FFF8E1] text-[#D84315] border border-[#FFE082] font-semibold">
                        {isEn ? tier.subtitleEn : tier.subtitleTe}
                      </span>
                    </div>
                    <p className="text-xs text-[#5D4037] mt-0.5">
                      {isEn ? tier.conceptEn : tier.conceptTe}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 hidden md:block">
                  <span className="text-xs font-semibold text-[#8D6E63]">
                    {isEn ? `${tier.deities.length} Sacred Forms` : `${tier.deities.length} దివ్య స్వరూపాలు`}
                  </span>
                </div>
              </div>

              {/* Tier 1 Special Layout for 3 Supreme Realities (Parabrahma, Atman, Maya) */}
              {tier.tierNumber === 1 && tier.deities.length > 0 && (() => {
                const activeDeity = tier.deities.find(d => d.id === activeTier1Id) || tier.deities[0];

                const renderSource4Card = (deity: DivineDeity) => (
                  <div
                    key={deity.id}
                    onClick={() => setSelectedDeity(deity)}
                    className="group cursor-pointer bg-gradient-to-b from-[#FFFDF7] to-[#FFF8E7] rounded-2xl border-2 border-[#D4AF37] shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 p-5 sm:p-6 text-center space-y-4 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top Right Badge (Source 4 exact style) */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold shadow-xs tracking-wide">
                        {isEn ? deity.badge : deity.badgeTe}
                      </span>
                    </div>

                    <div className="space-y-3.5 flex-1 pt-2">
                      {/* Sacred Image with Golden Double Ring (Source 4 exact style) */}
                      <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-xl bg-gradient-to-tr from-[#FFD54F] via-[#FF8F00] to-[#E65100] p-1 flex items-center justify-center relative">
                        {!imageErrorMap[deity.id] ? (
                          <img 
                            src={deity.image} 
                            alt={deity.nameEn}
                            onError={() => handleImageError(deity.id)}
                            className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7B1113] to-[#D84315] flex flex-col items-center justify-center text-white">
                            <span className="text-4xl">🕉️</span>
                            <span className="text-[10px] font-bold mt-1 text-[#FFE082]">{deity.nameTe}</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <h4 className="text-2xl sm:text-3xl font-black text-[#7B1113] font-telugu-serif group-hover:text-[#D84315] transition-colors">
                          {isEn ? deity.nameEn : deity.nameTe}
                        </h4>
                        <p className="text-xs sm:text-sm font-bold text-[#D84315]">
                          {isEn ? deity.roleEn : deity.roleTe}
                        </p>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed max-w-xl mx-auto">
                        {isEn ? deity.descEn : deity.descTe}
                      </p>

                      {/* Vedic Verse Ribbon (Source 4 thin gold border ribbon) */}
                      {deity.vedicVerse && (
                        <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#D4AF37] text-xs font-semibold text-[#7B1113] font-telugu-serif shadow-2xs">
                          {deity.vedicVerse}
                        </div>
                      )}

                      {/* Sacred Symbols Pills with Diamond Icon (Source 4 style) */}
                      <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                        {(isEn ? deity.symbolsEn : deity.symbolsTe)?.map((sym, idx) => (
                          <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E8DCC4] text-[#5D4037] shadow-2xs">
                            ✦ {sym}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Click for Details Prompt (Source 4 exact style) */}
                    <div className="pt-3 text-xs font-bold text-[#7B1113] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      <span>{isEn ? 'Click to explore theological depth' : 'విపుల వివరాలకై క్లిక్ చేయండి'}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D84315]" />
                    </div>
                  </div>
                );

                return (
                  <div className="space-y-3 my-2">
                    {/* View Controls: 3 Tabs Switcher + Grid Toggle */}
                    <div className="flex items-center justify-between flex-wrap gap-2 max-w-2xl mx-auto px-1">
                      {/* 3 Supreme Tattvas Tab Switcher */}
                      <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/60 shadow-2xs">
                        {tier.deities.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveTier1Id(item.id);
                              setTier1ViewMode('single');
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                              tier1ViewMode === 'single' && activeTier1Id === item.id
                                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                                : 'text-[#5D4037] hover:bg-[#F4EEDF]'
                            }`}
                          >
                            <span>{idx === 0 ? '✨' : idx === 1 ? '☀️' : '🌺'}</span>
                            <span>{isEn ? item.nameEn : item.nameTe}</span>
                          </button>
                        ))}
                      </div>

                      {/* View Mode Toggle: Single Box vs All 3 Grid */}
                      <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-xl border border-[#E8DCC4] text-[11px] font-bold">
                        <button
                          onClick={() => setTier1ViewMode('single')}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            tier1ViewMode === 'single'
                              ? 'bg-[#D84315] text-white shadow-2xs'
                              : 'text-[#5D4037] hover:bg-[#F4EEDF]'
                          }`}
                        >
                          {isEn ? 'Single Box' : 'ఏకైక బాక్స్'}
                        </button>
                        <button
                          onClick={() => setTier1ViewMode('grid')}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            tier1ViewMode === 'grid'
                              ? 'bg-[#D84315] text-white shadow-2xs'
                              : 'text-[#5D4037] hover:bg-[#F4EEDF]'
                          }`}
                        >
                          {isEn ? 'View 3 Items' : '3 తత్త్వాలు'}
                        </button>
                      </div>
                    </div>

                    {/* Mode A: Single Box (Exact Source 4 Format) */}
                    {tier1ViewMode === 'single' && (
                      <div className="max-w-2xl mx-auto">
                        {renderSource4Card(activeDeity)}
                      </div>
                    )}

                    {/* Mode B: 3 Items Side-by-Side (Each in Exact Source 4 Format) */}
                    {tier1ViewMode === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                        {tier.deities.map(deity => renderSource4Card(deity))}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tier 2: Trimurti 3 Prominent Columns */}
              {tier.tierNumber === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {tier.deities.map(deity => (
                    <div
                      key={deity.id}
                      onClick={() => setSelectedDeity(deity)}
                      className="group cursor-pointer bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] hover:border-[#7B1113] shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 p-4 flex flex-col justify-between space-y-3 relative overflow-hidden"
                    >
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                          {isEn ? deity.badge : deity.badgeTe}
                        </span>
                      </div>

                      {/* Deity Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden border border-[#D4AF37] bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] relative shadow-inner">
                        {!imageErrorMap[deity.id] ? (
                          <img 
                            src={deity.image} 
                            alt={deity.nameEn}
                            onError={() => handleImageError(deity.id)}
                            className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-gradient-to-b from-[#7B1113] to-[#4A0012] text-[#FFE082]">
                            <span className="text-4xl mb-1">{getDeityCategoryIcon(deity.category)}</span>
                            <span className="text-sm font-bold">{isEn ? deity.nameEn : deity.nameTe}</span>
                            <span className="text-[10px] text-[#FFD54F]">{isEn ? deity.roleEn : deity.roleTe}</span>
                          </div>
                        )}
                        <div className="absolute bottom-1 right-2 bg-black/60 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-md">
                          {isEn ? 'Vedic Art' : 'దివ్య వేద రూపం'}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif group-hover:text-[#D84315] transition-colors">
                          {isEn ? deity.nameEn : deity.nameTe}
                        </h4>
                        <p className="text-xs font-semibold text-[#D84315]">
                          {isEn ? deity.roleEn : deity.roleTe}
                        </p>
                        <p className="text-xs text-[#5D4037] line-clamp-3 mt-1.5 leading-relaxed">
                          {isEn ? deity.descEn : deity.descTe}
                        </p>
                      </div>

                      {deity.vedicVerse && (
                        <div className="p-2 rounded-lg bg-[#FFF8E1] border border-[#FFE082] text-[11px] font-medium text-[#7B1113] italic font-telugu-serif line-clamp-2">
                          {deity.vedicVerse}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs font-bold text-[#7B1113] pt-2 border-t border-[#F0E6D2]">
                        <span className="text-[11px] text-[#8D6E63]">
                          {isEn ? deity.symbolsEn?.[0] : deity.symbolsTe?.[0]}
                        </span>
                        <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#D84315]">
                          <span>{isEn ? 'Details' : 'వివరాలు'}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tiers 3, 4, 5, 6, 7 Grid Layout */}
              {tier.tierNumber > 2 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
                  {tier.deities.map(deity => (
                    <div
                      key={deity.id}
                      onClick={() => setSelectedDeity(deity)}
                      className="group cursor-pointer bg-[#FFFDF7] rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-lg transition-all transform hover:-translate-y-1 p-2.5 flex flex-col justify-between space-y-2"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-full aspect-square rounded-lg overflow-hidden border border-[#E8DCC4] bg-[#FAF7F0] relative group-hover:border-[#D4AF37]">
                        {!imageErrorMap[deity.id] ? (
                          <img 
                            src={deity.image} 
                            alt={deity.nameEn}
                            onError={() => handleImageError(deity.id)}
                            className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-300" 
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF8E1] to-[#FFE082] text-[#7B1113] p-1 text-center">
                            <span className="text-2xl">{getDeityCategoryIcon(deity.category)}</span>
                            <span className="text-[10px] font-bold line-clamp-1 mt-0.5">{isEn ? deity.nameEn : deity.nameTe}</span>
                          </div>
                        )}
                        <div className="absolute top-1 left-1">
                          <span className="text-xs drop-shadow-xs">{getDeityCategoryIcon(deity.category)}</span>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif line-clamp-1 group-hover:text-[#D84315] transition-colors">
                          {isEn ? deity.nameEn : deity.nameTe}
                        </h4>
                        <p className="text-[10px] text-[#D84315] font-semibold line-clamp-1">
                          {isEn ? deity.roleEn : deity.roleTe}
                        </p>
                        <p className="text-[10px] text-[#5D4037] line-clamp-2 leading-tight">
                          {isEn ? deity.descEn : deity.descTe}
                        </p>
                      </div>

                      <div className="pt-1 border-t border-[#F0E6D2] flex items-center justify-between text-[10px] font-bold text-[#7B1113]">
                        <span className="text-[9px] text-[#8D6E63] truncate">
                          {isEn ? deity.symbolsEn?.[0] : deity.symbolsTe?.[0]}
                        </span>
                        <ChevronRight className="w-3 h-3 text-[#D84315] group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>


      {/* ============================================================ */}
      {/* 3B. SANATANA GURU PARAMPARA (దివ్య గురుపరంపర - GRID FORM) */}
      {/* ============================================================ */}
      {(activeTierFilter === 'all' || activeTierFilter === 'guru_parampara') && (
        <div id="guru-parampara-section" className="scroll-mt-6">
          <GuruParamparaSection embedded={true} />
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. INTERACTIVE DEITY DETAIL MODAL */}
      {/* ============================================================ */}
      {selectedDeity && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#D4AF37] shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 relative space-y-5 animate-scaleUp">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedDeity(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] transition-colors cursor-pointer border border-[#D4AF37]"
              title={isEn ? 'Close' : 'మూసివేయండి'}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#FFF8E1] shrink-0">
                {!imageErrorMap[selectedDeity.id] ? (
                  <img 
                    src={selectedDeity.image} 
                    alt={selectedDeity.nameEn}
                    onError={() => handleImageError(selectedDeity.id)}
                    className="w-full h-full object-contain p-1" 
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#7B1113] to-[#D84315] text-[#FFE082]">
                    <span className="text-3xl">{getDeityCategoryIcon(selectedDeity.category)}</span>
                  </div>
                )}
              </div>

              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                  {isEn ? selectedDeity.roleEn : selectedDeity.roleTe}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#7B1113] font-telugu-serif mt-1">
                  {isEn ? selectedDeity.nameEn : selectedDeity.nameTe}
                </h3>
                <p className="text-xs text-[#5D4037] font-medium">
                  {isEn ? selectedDeity.nameTe : selectedDeity.nameEn}
                </p>
              </div>
            </div>

            {/* Narrative Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
                {isEn ? 'Theological & Mythological Narrative:' : 'భాగవత & పౌరాణిక తత్త్వ విశేషములు:'}
              </h4>
              <p className="text-sm text-[#2C1810] leading-relaxed bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4]">
                {isEn ? selectedDeity.descEn : selectedDeity.descTe}
              </p>
            </div>

            {/* Scriptural Infographic Poster (Source Reference) */}
            {selectedDeity.infographicImage && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082]/30 border border-[#D4AF37] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    <ImageIcon className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? 'Scriptural Infographic Reference (Original Source):' : 'ప్రామాణిక వేదాంత చిత్ర పటము (మూల ఆధార చిత్రం):'}</span>
                  </div>
                  <button
                    onClick={() => setInfographicLightbox({
                      src: selectedDeity.infographicImage!,
                      title: isEn ? selectedDeity.nameEn : selectedDeity.nameTe
                    })}
                    className="px-2.5 py-1 rounded-lg bg-[#7B1113] text-[#FFE082] text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:bg-[#D84315] transition-colors shadow-2xs"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>{isEn ? 'View Full Poster' : 'పూర్తి చిత్రం చూడండి'}</span>
                  </button>
                </div>

                <div 
                  onClick={() => setInfographicLightbox({
                    src: selectedDeity.infographicImage!,
                    title: isEn ? selectedDeity.nameEn : selectedDeity.nameTe
                  })}
                  className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/60 max-h-60 cursor-pointer group shadow-sm bg-black/5"
                >
                  <img
                    src={selectedDeity.infographicImage}
                    alt={selectedDeity.nameEn}
                    className="w-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/75 text-white text-xs font-bold backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                      <span>{isEn ? 'Click to Enlarge Full Poster' : 'చిత్రాన్ని పెద్దదిగా వీక్షించండి'}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Detailed Philosophical Points from Sources 1, 2, 3 */}
            {selectedDeity.detailedPoints && selectedDeity.detailedPoints.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
                  {isEn ? 'Key Vedanta Philosophical Teachings:' : 'వేదాంత మూల సూత్రాలు & సిద్ధాంత వివరణ:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDeity.detailedPoints.map((pt, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-xs space-y-1">
                      <h5 className="text-xs font-bold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-[#FFF8E1] text-[#D84315] text-[10px] flex items-center justify-center font-bold border border-[#D4AF37]">
                          {idx + 1}
                        </span>
                        <span>{isEn ? pt.headingEn : pt.headingTe}</span>
                      </h5>
                      <p className="text-[11px] text-[#5D4037] leading-relaxed">
                        {isEn ? pt.bodyEn : pt.bodyTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vedic Reference & Verse */}
            {selectedDeity.vedicVerse && (
              <div className="space-y-1.5 p-3.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082]/40 border border-[#D4AF37]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#D84315]">
                  <BookOpen className="w-4 h-4" />
                  <span>{isEn ? 'Vedic Hymn / Scripture Reference:' : 'మూల వేద సూక్తము / ప్రమాణ శ్లోకము:'}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif italic">
                  {selectedDeity.vedicVerse}
                </p>
                {selectedDeity.vedicRef && (
                  <p className="text-[11px] text-[#5D4037]">
                    ✦ {selectedDeity.vedicRef}
                  </p>
                )}
              </div>
            )}

            {/* Sacred Symbols & Weapons */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
                {isEn ? 'Divine Symbols, Attributes & Weapons:' : 'దివ్య చిహ్నాలు, ఆయుధాలు & వాహనములు:'}
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {(isEn ? selectedDeity.symbolsEn : selectedDeity.symbolsTe)?.map((sym, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-xl bg-[#FFF8E1] border border-[#D4AF37] text-xs font-bold text-[#7B1113]"
                  >
                    ✦ {sym}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedDeity(null);
                  if (onSelectCharacterFromTree) {
                    onSelectCharacterFromTree(selectedDeity.id);
                  } else {
                    selectCharacter(selectedDeity.id, true);
                    setViewMode('tree');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] text-xs font-bold hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-4 h-4 text-[#FFD54F]" />
                <span>{isEn ? 'Explore in Full Genealogy Tree' : 'సంపూర్ణ వంశవృక్షంలో వీక్షించండి'}</span>
              </button>

              <button
                onClick={() => setSelectedDeity(null)}
                className="px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] text-xs font-semibold border border-[#E8DCC4] transition-colors cursor-pointer"
              >
                {isEn ? 'Close' : 'ముగించు'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Footer Quote */}
      <div className="text-center pt-4 border-t border-[#D4AF37]/40 text-xs text-[#5D4037]">
        <p className="font-telugu-serif">
          {isEn
            ? '“From Parabrahma arises consciousness, from consciousness the energies, from energies all worlds and living souls.”'
            : '“ఏకం ఏవాద్వితీయం బ్రహ్మ — పరబ్రహ్మ నుండి చైతన్యము, చైతన్యము నుండి శక్తులు, శక్తుల నుండి సమస్త లోకాలు, జీవకోటి ఆవిర్భవించెను.”'}
        </p>
      </div>
      {/* Fullscreen Infographic Poster Lightbox */}
      {infographicLightbox && (
        <div 
          onClick={() => setInfographicLightbox(null)}
          className="fixed inset-0 z-60 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[94vh] w-full bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] p-3 sm:p-4 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E8DCC4]">
              <div className="flex items-center gap-2">
                <span className="text-xl">📜</span>
                <h4 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                  {infographicLightbox.title} — {isEn ? 'Scriptural Infographic' : 'మూల వేదాంత పత్రం'}
                </h4>
              </div>
              <button
                onClick={() => setInfographicLightbox(null)}
                className="p-1 rounded-full hover:bg-gray-200 text-[#7B1113] cursor-pointer"
                title={isEn ? 'Close' : 'ముగించు'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto mt-2 text-center p-1 bg-neutral-900/10 rounded-xl">
              <img
                src={infographicLightbox.src}
                alt={infographicLightbox.title}
                className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
