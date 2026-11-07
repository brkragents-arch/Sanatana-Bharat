import React, { useState, useRef, useEffect } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { CREATION_STAGES } from '../../data/creationStagesData';
import type { CreationMilestone } from '../../types/mythology';
import { 
  ArrowDown, 
  Sparkles, 
  BookOpen, 
  ChevronRight,
  GitFork,
  Compass,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';

export const ChronologyFlowView: React.FC = () => {
  const { 
    selectCharacter, 
    setViewMode, 
    language 
  } = useMythology();

  const isEn = language === 'en';
  const [selectedMilestone, setSelectedMilestone] = useState<CreationMilestone>(CREATION_STAGES[0]);
  const [clickTrigger, setClickTrigger] = useState<number>(0);
  const [inspectorTop, setInspectorTop] = useState<number>(0);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updatePosition = () => {
      const idx = CREATION_STAGES.findIndex(s => s.step === selectedMilestone.step);
      const stepEl = stageRefs.current[idx];
      const leftEl = leftColRef.current;
      const rightEl = rightCardRef.current;
      if (stepEl && leftEl) {
        const leftRect = leftEl.getBoundingClientRect();
        const stepRect = stepEl.getBoundingClientRect();
        const leftHeight = leftEl.offsetHeight;
        const rightHeight = rightEl ? rightEl.offsetHeight : 440;

        let viewportTop = stepRect.top;
        const margin = 16;

        if (viewportTop + rightHeight > window.innerHeight - margin) {
          viewportTop = window.innerHeight - margin - rightHeight;
        }
        if (viewportTop < margin) {
          viewportTop = margin;
        }

        const rawTop = viewportTop - leftRect.top;
        const maxAllowedTop = Math.max(0, leftHeight - rightHeight);
        setInspectorTop(Math.max(0, Math.min(rawTop, maxAllowedTop)));
      }
    };
    updatePosition();
    const rafId = window.requestAnimationFrame(updatePosition);
    const timer = window.setTimeout(updatePosition, 60);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [selectedMilestone, clickTrigger, language]);

  // Specific routing targets for each creation step to navigate to particular items
  const getStepNavActions = (step: number) => {
    switch (step) {
      case 1: // ప్రళయం & యోగనిద్ర (శ్రీమహావిష్ణువు)
        return {
          charId: 'sri-vishnu',
          treeTarget: 'sri-vishnu',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'శ్రీమహావిష్ణువు మూలము',
          labelEn: 'Sri Maha Vishnu Origin'
        };
      case 2: // నాభీకమల ఆవిర్భావము
        return {
          charId: 'sri-vishnu',
          treeTarget: 'sri-vishnu',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'నాభీకమల దర్శనము',
          labelEn: 'Navel Lotus Vision'
        };
      case 3: // చతుర్ముఖ బ్రహ్మ ఆవిర్భావము & తపస్సు
        return {
          charId: 'chaturmukha-brahma',
          treeTarget: 'chaturmukha-brahma',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'చతుర్ముఖ బ్రహ్మ కేంద్రము',
          labelEn: 'Chaturmukha Brahma Center'
        };
      case 4: // శ్రీహరి సాక్షాత్కారము & వేదోపదేశము
        return {
          charId: 'brahma-rigveda',
          treeTarget: 'brahma-rigveda',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'చతుర్వేదముల శాఖలు',
          labelEn: 'Four Vedas Branches'
        };
      case 5: // ప్రాకృత దశవిధ సృష్టి
      case 6: // వైకృత సృష్టి & భువనాలు
        return {
          charId: 'chaturmukha-brahma',
          treeTarget: 'chaturmukha-brahma',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'సృష్టి క్రమ సూత్రాలు',
          labelEn: 'Cosmic Principles'
        };
      case 7: // కౌమార సృష్టి (సనకాది మునులు)
        return {
          charId: 'sanaka-adi',
          treeTarget: 'sanaka-adi',
          hasDakshaLink: false,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: false,
          labelTe: 'సనకాది నివృత్తి వంశము',
          labelEn: 'Sanaka Renunciation Line'
        };
      case 8: // బ్రహ్మ అంగోద్భవ ప్రజాపతులు & దక్షుడు
        return {
          charId: 'daksha-prajapati',
          treeTarget: 'daksha-prajapati',
          hasDakshaLink: true,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'దక్ష ప్రజాపతి & ప్రజాపతులు',
          labelEn: 'Daksha & Prajapatis'
        };
      case 9: // స్వాయంభువ మనువు – శతరూప విభజన
        return {
          charId: 'swayambhuva-manu',
          treeTarget: 'swayambhuva-manu',
          hasDakshaLink: true,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: 'మను వంశము & ప్రసూతి జనకులు',
          labelEn: 'Manu & Prasuti Parents'
        };
      case 10: // దక్ష-ప్రసూతి వివాహము & 16 కన్యల సంతతి
      default:
        return {
          charId: 'daksha-prajapati',
          treeTarget: 'daksha-prajapati',
          hasDakshaLink: true,
          hasScriptureLink: true,
          hasMindMapLink: true,
          hasCosmicLink: true,
          labelTe: '16 మంది దివ్య పుత్రికల వంశము',
          labelEn: '16 Daughters Lineage'
        };
    }
  };

  const navMeta = getStepNavActions(selectedMilestone.step);

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-xl min-h-[800px]">
      
      {/* ============================================================ */}
      {/* MASTER HOME HEADER: CREATION PROCESS (సృష్టి క్రమము) */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-5 py-4 border-b-2 border-[#C99700]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FFE082] to-[#FF8F00] text-[#7B1113] flex items-center justify-center text-2xl shadow-md border border-[#FFF8E1]">
              ⏳
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#D84315] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {isEn ? 'Primary Home Portal' : 'ప్రధాన ముఖద్వారము (HOME)'}
                </span>
                <span className="text-xs text-[#FFE082]/80">
                  {isEn ? 'Chronological Genesis' : 'జగదుద్భవ దర్శిని'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-telugu-serif text-[#FFF8E1] mt-0.5">
                {isEn ? 'Cosmic Creation Sequence (Srushti Kramamu)' : 'సృష్టి క్రమము – జగదుద్భవ మహా ప్రవాహము'}
              </h2>
            </div>
          </div>

          <p className="text-xs text-[#FFE082]/90 max-w-md leading-relaxed hidden sm:block">
            {isEn 
              ? 'Start here to explore the cosmic unfolding of creation. Click on any stage below to jump directly into the Family Tree, Mind Map, or Daksha Lineage.'
              : 'సృష్టి ఆరంభం నుండి క్రమానుగతంగా అన్వేషించండి. ప్రతి దశలోని లింకుల ద్వారా వంశవృక్షం, మైండ్ మ్యాప్ లేదా దక్ష-ప్రసూతి వంశానికి నేరుగా ప్రయాణించవచ్చు.'}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DIRECT PAGE NAVIGATION GATEWAYS (త్వరిత పేజీల మార్గదర్శిని) */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF] px-4 py-3 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs font-bold text-[#7B1113] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
          <span>{isEn ? 'Quick Page Gateways:' : 'ఈ పేజీ నుండి ఇతర ప్రధాన పేజీల లింకులు:'}</span>
        </span>

        <div className="flex items-center gap-2 flex-wrap text-xs font-bold">
          <button
            onClick={() => {
              setViewMode('tree');
              selectCharacter(navMeta.charId, true);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <GitFork className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Family Tree Page' : '🌳 వంశవృక్షము పేజీ'}</span>
          </button>

          <button
            onClick={() => {
              setViewMode('mindmap');
              selectCharacter(navMeta.charId, true);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Compass className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Mind Map Page' : '🧠 మైండ్ మ్యాప్ పేజీ'}</span>
          </button>

          <button
            onClick={() => {
              setViewMode('sanatana_chronology');
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FFF8E1] hover:bg-[#FFD54F] text-[#D84315] border border-[#D84315]/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isEn ? '13 Cosmic Steps' : '🌌 13 సృష్టి సోపానాలు'}</span>
          </button>

          <button
            onClick={() => {
              setViewMode('daksha_vamsa');
              selectCharacter('daksha-prajapati', true);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Users className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Daksha Lineage Page' : '👑 దక్ష-ప్రసూతి వంశము'}</span>
          </button>

          <button
            onClick={() => {
              setViewMode('scriptures');
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C99700]" />
            <span>{isEn ? 'Scriptures Page' : '📜 భాగవత ఆధారాలు'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN TWO-COLUMN STAGE AREA */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start flex-1 p-4 sm:p-6 gap-6">
        
        {/* Left Column: Interactive Stages with Distinct Direct Gateway Links */}
        <div ref={leftColRef} className="lg:col-span-7 space-y-4 pr-1 relative">
          
          <div className="p-3 rounded-xl bg-[#FFF9E6] border border-[#D4AF37]/50 text-xs text-[#7B1113] font-semibold flex items-center gap-2">
            <Info className="w-4 h-4 text-[#D84315] shrink-0" />
            <span>
              {isEn 
                ? 'Each stage below features direct navigation buttons to jump to that particular character in the Family Tree, Mind Map, or Daksha section.'
                : 'దిగువన ఉన్న ప్రతి సృష్టి ఘట్టములో సంబంధిత వ్యక్తిని వంశవృక్షంలో, మైండ్ మ్యాప్‌లో లేదా దక్ష వంశంలో నేరుగా చూసే లింకులు ఏర్పాటు చేయబడ్డాయి.'}
            </span>
          </div>

          {CREATION_STAGES.map((milestone, idx) => {
            const isSelected = selectedMilestone.step === milestone.step;
            const actions = getStepNavActions(milestone.step);

            return (
              <div key={milestone.step} ref={(el) => { stageRefs.current[idx] = el; }} className="flex flex-col items-center">
                <div
                  onClick={() => setSelectedMilestone(milestone)}
                  className={`w-full p-4 rounded-xl transition-all duration-200 cursor-pointer shadow-xs border-2 text-left relative ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF7] to-[#FFE082] border-[#D84315] ring-3 ring-[#D84315]/25 shadow-md scale-101'
                      : 'bg-[#FFFFFF] border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Step Badge */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border-2 border-[#D4AF37] flex items-center justify-center text-2xl shadow-2xs">
                        {milestone.icon}
                      </div>
                      <span className="text-[10px] font-bold text-[#7B1113] mt-1 bg-[#FAF7F0] px-2 py-0.5 rounded-full border border-[#E8DCC4]">
                        {isEn ? `Stage ${milestone.step}` : `దశ ${milestone.step}`}
                      </span>
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                          {isEn ? (milestone.titleEn || milestone.title) : milestone.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF7F0] text-[#D84315] border border-[#D84315]/30">
                          {isEn ? (milestone.categoryEn || milestone.category) : milestone.category}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-[#D84315] mt-0.5">
                        {isEn ? (milestone.sanskritNameEn || milestone.sanskritName) : milestone.sanskritName}
                      </div>

                      <p className="text-xs text-[#5D4037] mt-1.5 leading-relaxed">
                        {isEn ? (milestone.descriptionEn || milestone.description) : milestone.description}
                      </p>

                      {/* Element Pills */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {milestone.elements.map((elem, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFFDF7] text-[#5D4037] border border-[#E8DCC4]"
                          >
                            • {elem}
                          </span>
                        ))}
                      </div>

                      {/* ARRANGED DIRECT LINKS TO REMAINING PAGES FOR THIS PARTICULAR ITEM */}
                      <div className="mt-3 pt-2.5 border-t border-[#F0E6D2] flex items-center gap-2 flex-wrap text-xs">
                        <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block mr-1">
                          {isEn ? 'Navigate to:' : 'లింకులు:'}
                        </span>

                        {/* Link 1: View this character in Family Tree */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCharacter(actions.charId, true);
                            setViewMode('tree');
                          }}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                          title={isEn ? 'View in Family Tree' : 'వంశవృక్షంలో చూడండి'}
                        >
                          <GitFork className="w-3 h-3 text-[#D84315]" />
                          <span>{isEn ? 'Family Tree' : 'వంశవృక్షం'}</span>
                        </button>

                        {/* Link 2: View in Mind Map */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCharacter(actions.charId, true);
                            setViewMode('mindmap');
                          }}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                          title={isEn ? 'View in Mind Map' : 'మైండ్ మ్యాప్‌లో చూడండి'}
                        >
                          <Compass className="w-3 h-3 text-[#D84315]" />
                          <span>{isEn ? 'Mind Map' : 'మైండ్ మ్యాప్'}</span>
                        </button>

                        {/* Link 3: If relevant, View in Daksha-Prasuti dedicated section */}
                        {actions.hasDakshaLink && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              selectCharacter('daksha-prajapati', true);
                              setViewMode('daksha_vamsa');
                            }}
                            className="px-2 py-0.5 rounded-md bg-[#FFF8E1] hover:bg-[#FFD54F] text-[#D84315] border border-[#D84315]/40 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                            title={isEn ? 'Daksha-Prasuti 16 Daughters' : 'దక్ష-ప్రసూతి వంశము'}
                          >
                            <Users className="w-3 h-3" />
                            <span>{isEn ? 'Daksha Lineage' : 'దక్ష వంశం'}</span>
                          </button>
                        )}

                        {/* Link 4: Read Full Story Drawer */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCharacter(actions.charId, true);
                          }}
                          className="px-2 py-0.5 rounded-md bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-semibold flex items-center gap-1 cursor-pointer ml-auto"
                        >
                          <span>{isEn ? 'Full Story' : 'కథ & వివరాలు'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Downward Connecting Flow Arrow */}
                {idx < CREATION_STAGES.length - 1 && (
                  <div className="my-1.5 flex flex-col items-center">
                    <div className="w-0.5 h-3 bg-[#D4AF37]" />
                    <ArrowDown className="w-4 h-4 text-[#D84315]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Stage Inspector with Cross-Navigation Gateways */}
        <div ref={rightCardRef} style={{ marginTop: `${inspectorTop}px` }} className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border-2 border-[#D84315] p-5 shadow-xl flex flex-col gap-4 self-start transition-all duration-200 ring-2 ring-[#FFE082]">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-[#E8DCC4] pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{selectedMilestone.icon}</span>
                <div>
                  <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">
                    {isEn ? `Stage ${selectedMilestone.step} Details` : `దశ ${selectedMilestone.step} సమగ్ర వివరాలు`}
                  </span>
                  <h3 className="text-base font-bold text-[#7B1113] font-telugu-serif leading-tight">
                    {isEn ? (selectedMilestone.titleEn || selectedMilestone.title) : selectedMilestone.title}
                  </h3>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] font-bold">
                {isEn ? (selectedMilestone.categoryEn || selectedMilestone.category) : selectedMilestone.category}
              </span>
            </div>

            {/* Stage Description */}
            <div className="space-y-4 text-xs sm:text-sm text-[#2C1810]">
              <div>
                <h4 className="text-xs font-bold text-[#7B1113] uppercase mb-1">
                  {isEn ? 'Puranic Narrative:' : 'పౌరాణిక ఘట్ట వివరణ:'}
                </h4>
                <p className="leading-relaxed text-[#5D4037]">
                  {isEn ? (selectedMilestone.descriptionEn || selectedMilestone.description) : selectedMilestone.description}
                </p>
              </div>

              {/* Philosophical Context */}
              <div className="p-3 rounded-xl bg-[#FFF9E6] border border-[#D4AF37]/50">
                <h4 className="text-xs font-bold text-[#D84315] flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Philosophical Significance:' : 'తత్త్వ రహస్యము & ప్రాముఖ్యత:'}</span>
                </h4>
                <p className="text-xs text-[#5D4037] leading-relaxed">
                  {isEn ? (selectedMilestone.philosophicalMeaningEn || selectedMilestone.philosophicalMeaning) : selectedMilestone.philosophicalMeaning}
                </p>
              </div>

              {/* Pothana Verse Snippet */}
              <div className="p-3 rounded-xl bg-[#FAF7F0] border-l-4 border-[#7B1113] space-y-1">
                <div className="text-[11px] font-bold text-[#7B1113] flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Pothana Bhagavatam Scriptural Verse:' : 'పోతన భాగవత శబ్ద ప్రమాణం:'}</span>
                </div>
                <p className="text-xs font-telugu-serif italic text-[#7B1113] leading-relaxed">
                  "{selectedMilestone.pothanaVerseSnippet}"
                </p>
                <div className="text-[10px] text-[#5D4037] pt-1 border-t border-[#E8DCC4]">
                  {isEn ? 'Source Citation:' : 'మూల సూచన:'} <strong>{selectedMilestone.scriptureCitation}</strong>
                </div>
              </div>

              {/* CROSS-PAGE NAVIGATION DIRECT PORTALS */}
              <div className="p-3 rounded-xl bg-[#FFFDF7] border-2 border-[#D4AF37] space-y-2">
                <h4 className="text-xs font-bold text-[#7B1113] uppercase flex items-center gap-1">
                  <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Direct Gateways for this Stage:' : 'ఈ దశకు సంబంధించిన ఇతర పేజీల గేట్‌వేలు:'}</span>
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      selectCharacter(navMeta.charId, true);
                      setViewMode('tree');
                    }}
                    className="p-2 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] border border-[#D4AF37] text-left transition-all cursor-pointer"
                  >
                    <span className="font-bold text-[#7B1113] block">🌳 {isEn ? 'Family Tree' : 'వంశవృక్షము'}</span>
                    <span className="text-[10px] text-[#5D4037]">{isEn ? 'Highlight lineage' : 'తరాల వారీ సంబంధం'}</span>
                  </button>

                  <button
                    onClick={() => {
                      selectCharacter(navMeta.charId, true);
                      setViewMode('mindmap');
                    }}
                    className="p-2 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] border border-[#D4AF37] text-left transition-all cursor-pointer"
                  >
                    <span className="font-bold text-[#7B1113] block">🧠 {isEn ? 'Mind Map' : 'మైండ్ మ్యాప్'}</span>
                    <span className="text-[10px] text-[#5D4037]">{isEn ? 'Radial orbit' : 'బ్రహ్మ కేంద్రక వలయం'}</span>
                  </button>

                  {navMeta.hasDakshaLink && (
                    <button
                      onClick={() => {
                        selectCharacter('daksha-prajapati', true);
                        setViewMode('daksha_vamsa');
                      }}
                      className="p-2 rounded-lg bg-[#FFF8E1] hover:bg-[#FFD54F] border border-[#D84315] text-left transition-all cursor-pointer col-span-2"
                    >
                      <span className="font-bold text-[#D84315] block">👑 {isEn ? 'Daksha-Prasuti 16 Daughters Page' : 'దక్ష ప్రజాపతి – ప్రసూతి 16 కన్యల పేజీ'}</span>
                      <span className="text-[10px] text-[#5D4037]">{isEn ? 'Marriages to Dharma, Agni, Pitrus & Shiva' : 'ధర్మ, అగ్ని, పితృ, శివ దాంపత్య సంబంధాలు'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setViewMode('sanatana_chronology');
                    }}
                    className="p-2 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] border border-[#D4AF37] text-left transition-all cursor-pointer col-span-2"
                  >
                    <span className="font-bold text-[#E65100] block">🌌 {isEn ? '13 Cosmic Evolution Steps' : 'సనాతన ధర్మ 13 సృష్టి సోపానాలు'}</span>
                    <span className="text-[10px] text-[#5D4037]">{isEn ? 'From Supreme Being to physical cosmos' : 'సర్వేశ్వరుని నుండి విరాట్పురుషుడు, బ్రహ్మ వరకు'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-4 border-t border-[#E8DCC4] mt-4 flex items-center justify-between">
            <span className="text-xs text-[#5D4037]">
              {isEn ? 'Read Complete Character Biography' : 'సంపూర్ణ కథ చదవండి'}
            </span>
            <button
              onClick={() => {
                selectCharacter(navMeta.charId, true);
              }}
              className="px-4 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <span>{isEn ? 'Open Character Panel' : 'పాత్ర వివరాలు తెరవండి'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
