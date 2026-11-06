import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { VEDIC_INDIAN_SCRIPTURES_DATA } from '../../data/vedasData';
import { 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Layers, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Flame,
  Maximize2
} from 'lucide-react';
import { BhagavadGitaTimelineModal } from './BhagavadGitaTimelineModal';

interface VedicScripturesHierarchyProps {
  onSelectVeda?: (vedaId: string) => void;
  defaultExpanded?: boolean;
}

export const VedicScripturesHierarchy: React.FC<VedicScripturesHierarchyProps> = ({
  onSelectVeda,
  defaultExpanded = true
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [isGitaModalOpen, setIsGitaModalOpen] = useState<boolean>(false);
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [activeBranch, setActiveBranch] = useState<'all' | 'shruti' | 'smriti'>('all');

  const data = VEDIC_INDIAN_SCRIPTURES_DATA;

  return (
    <div className="w-full bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#FAF7F0] border-b-2 border-[#D4AF37] shadow-sm relative overflow-hidden transition-all duration-300">
      
      {/* Decorative Vintage Manuscript Header Bar */}
      <div className="px-4 py-3 bg-[#FFFFFF] border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37] flex items-center justify-center text-lg shadow-2xs">
            📜
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif leading-tight">
                {isEn ? data.titleEn : data.titleTe}
              </h2>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] tracking-wider">
                {isEn ? "Shruti & Smriti" : "శ్రుతి & స్మృతి వృక్షం"}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#5D4037]">
              {isEn ? data.subtitleEn : data.subtitleTe}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Branch filter pills */}
          <div className="hidden md:flex items-center bg-[#FAF7F0] p-0.5 rounded-lg border border-[#E8DCC4] text-[11px] font-bold">
            <button
              onClick={() => setActiveBranch('all')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeBranch === 'all'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? 'All' : 'అన్నీ'}
            </button>
            <button
              onClick={() => setActiveBranch('shruti')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeBranch === 'shruti'
                  ? 'bg-[#D84315] text-[#FFFFFF] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? "Shruti's" : 'శ్రుతి'}
            </button>
            <button
              onClick={() => setActiveBranch('smriti')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeBranch === 'smriti'
                  ? 'bg-[#C2185B] text-[#FFFFFF] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? "Smriti's" : 'స్మృతి'}
            </button>
          </div>

          {/* View Original Infographic Image Button */}
          <button
            onClick={() => {
              setIsImageModalOpen(true);
              setImageZoom(1);
            }}
            className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
            title={isEn ? "View Original Manuscript Chart" : "మూల చిత్ర పటాన్ని చూడండి"}
          >
            <span>🖼️</span>
            <span className="hidden sm:inline">{isEn ? "Original Chart" : "మూల పటం"}</span>
          </button>

          {/* Collapse / Expand Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4] font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
          >
            <span>{isExpanded ? (isEn ? "Hide" : "కుదించండి") : (isEn ? "Show Tree" : "విస్తరించండి")}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Content Area */}
      {isExpanded && (
        <div className="p-3.5 sm:p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300 max-h-[58vh] overflow-y-auto">
          
          {/* Main Visual Hierarchy: Two Primary Pillars (Shruti & Smriti) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* =============================================================== */}
            {/* 1. SHRUTI'S (శ్రుతి) - THAT WHICH WAS HEARD */}
            {/* =============================================================== */}
            {(activeBranch === 'all' || activeBranch === 'shruti') && (
              <div className="rounded-2xl border-2 border-[#D84315]/40 bg-[#FFFFFF] shadow-xs overflow-hidden flex flex-col">
                
                {/* Pillar Header */}
                <div className="bg-gradient-to-r from-[#D84315] to-[#BF360C] text-[#FFFFFF] p-3 sm:p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📜</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold font-telugu-serif">
                          {isEn ? data.shruti.titleEn : data.shruti.titleTe}
                        </h3>
                        <span className="text-[11px] px-2 py-0.2 rounded-full bg-[#FFFFFF]/20 font-semibold">
                          ({data.shruti.sanskritName})
                        </span>
                      </div>
                      <span className="text-[10px] text-[#FFE082] font-semibold block">
                        {isEn ? data.shruti.meaningEn : data.shruti.meaningTe}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFFFFF] text-[#D84315] font-extrabold shadow-2xs">
                    {isEn ? 'Apaurusheya (Authorless)' : 'అపౌరుషేయం'}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 space-y-4 flex-1 bg-[#FFFDFB]">
                  
                  {/* --- 4 VEDAS --- */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                        <Flame className="w-3.5 h-3.5 text-[#D84315]" />
                        <span>{isEn ? '4 VEDAS (చతుర్వేదములు)' : 'చతుర్వేదములు (4 Vedas)'}</span>
                      </span>
                      <span className="text-[10px] text-[#5D4037] italic">
                        {isEn ? 'Foundation of all Sanatana Dharma' : 'సకల సనాతన ధర్మ మూల నిధి'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {data.shruti.fourVedas.map(v => (
                        <div
                          key={v.id}
                          onClick={() => onSelectVeda && onSelectVeda(v.id)}
                          className="p-2.5 rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] bg-[#FAF7F0] hover:bg-[#FFF8E1] transition-all cursor-pointer group shadow-2xs"
                          style={{ borderLeftColor: v.color, borderLeftWidth: '3.5px' }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{v.icon}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#FFFFFF] border border-[#E8DCC4] text-[#5D4037] font-semibold">
                              {v.sanskrit}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-[#7B1113] mt-1 font-telugu-serif group-hover:text-[#D84315] transition-colors">
                            {isEn ? v.nameEn : v.nameTe}
                          </h4>
                          <p className="text-[9.5px] text-[#5D4037] line-clamp-1 leading-snug mt-0.5">
                            {isEn ? v.summaryEn : v.summaryTe}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* --- SECTION OF VEDAS --- */}
                  <div className="p-3 rounded-xl bg-[#FFF9EE] border border-[#D4AF37]/40 space-y-2">
                    <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block font-telugu-serif">
                      🏛️ {isEn ? 'Section of Vedas (వేద చతుర్విధ అంతర్భాగాలు)' : 'వేద విభాగాలు (Section of Vedas)'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {data.shruti.sectionsOfVedas.map((s, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-xs">{s.icon}</span>
                            <h5 className="text-[11px] font-bold text-[#7B1113] font-telugu-serif">
                              {isEn ? s.nameEn : s.nameTe}
                            </h5>
                          </div>
                          <p className="text-[9.5px] text-[#5D4037] leading-tight line-clamp-2">
                            {isEn ? s.roleEn : s.roleTe}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* --- VEDANGA & UPAVEDA DUAL ROW --- */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Vedanga (6) */}
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-1">
                        <span className="text-[11px] font-bold text-[#D84315] uppercase tracking-wider font-telugu-serif flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" />
                          <span>{isEn ? 'Vedanga (6 Limbs)' : 'వేదాంగములు (6 షడంగాలు)'}</span>
                        </span>
                        <span className="text-[9px] px-1.5 rounded bg-[#FFF8E1] text-[#7B1113] font-bold border border-[#D4AF37]">
                          6
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                        {data.shruti.vedanga.map((item, idx) => (
                          <div key={idx} className="p-1.5 rounded-md bg-[#FAF7F0] border border-[#F0E6D2]">
                            <span className="font-bold text-[#7B1113] block font-telugu-serif truncate">
                              {item.icon} {isEn ? item.nameEn : item.nameTe}
                            </span>
                            <span className="text-[9px] text-[#5D4037] truncate block">
                              {isEn ? item.meaningEn.split('(')[0] : item.meaningTe.split('(')[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* UpaVeda (4) */}
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-1">
                        <span className="text-[11px] font-bold text-[#2E7D32] uppercase tracking-wider font-telugu-serif flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{isEn ? 'UpaVeda (4 Applied)' : 'ఉపవేదములు (4 ఉపవేదాలు)'}</span>
                        </span>
                        <span className="text-[9px] px-1.5 rounded bg-[#E8F5E9] text-[#2E7D32] font-bold border border-[#A5D6A7]">
                          4
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        {data.shruti.upaveda.map((u, idx) => (
                          <div key={idx} className="p-1.5 rounded-md bg-[#FAF7F0] border border-[#F0E6D2] flex items-center justify-between gap-1">
                            <div>
                              <span className="font-bold text-[#2E7D32] block font-telugu-serif">
                                {u.icon} {isEn ? u.nameEn : u.nameTe}
                              </span>
                              <span className="text-[9px] text-[#5D4037] block">
                                {isEn ? u.subjectEn.split(',')[0] : u.subjectTe.split(',')[0]}
                              </span>
                            </div>
                            <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-[#FFFFFF] border border-[#E8DCC4] text-[#7B1113] font-semibold whitespace-nowrap">
                              {isEn ? u.associatedVedaEn.replace('Attached to ', '') : u.associatedVedaTe.replace(' అనుబంధము', '')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* =============================================================== */}
            {/* 2. SMRITI'S (స్మృతి) - THAT WHICH IS REMEMBERED */}
            {/* =============================================================== */}
            {(activeBranch === 'all' || activeBranch === 'smriti') && (
              <div className="rounded-2xl border-2 border-[#C2185B]/40 bg-[#FFFFFF] shadow-xs overflow-hidden flex flex-col">
                
                {/* Pillar Header */}
                <div className="bg-gradient-to-r from-[#C2185B] to-[#880E4F] text-[#FFFFFF] p-3 sm:p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🪔</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold font-telugu-serif">
                          {isEn ? data.smriti.titleEn : data.smriti.titleTe}
                        </h3>
                        <span className="text-[11px] px-2 py-0.2 rounded-full bg-[#FFFFFF]/20 font-semibold">
                          ({data.smriti.sanskritName})
                        </span>
                      </div>
                      <span className="text-[10px] text-[#FFE082] font-semibold block">
                        {isEn ? data.smriti.meaningEn : data.smriti.meaningTe}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFFFFF] text-[#C2185B] font-extrabold shadow-2xs">
                    {isEn ? 'Paurusheya (Sage Authored)' : 'పౌరుషేయం'}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 space-y-3 flex-1 bg-[#FFFDFB]">
                  
                  {/* Grid of Smriti Branches */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.smriti.branches.map(branch => {
                      const isGita = branch.id === 'gita';
                      return (
                        <div
                          key={branch.id}
                          onClick={() => {
                            if (isGita) setIsGitaModalOpen(true);
                          }}
                          className={`p-2.5 rounded-xl border transition-all text-left shadow-2xs ${
                            isGita ? 'cursor-pointer hover:shadow-md hover:scale-[1.01]' : ''
                          } ${
                            branch.isHighlighted
                              ? 'border-[#D4AF37] bg-gradient-to-tr from-[#FFF8E1] to-[#FFFDF7] ring-2 ring-[#D4AF37]/40 sm:col-span-2'
                              : 'border-[#E8DCC4] bg-[#FAF7F0] hover:bg-[#FFF8E1]'
                          }`}
                          style={{ borderLeftColor: branch.color, borderLeftWidth: '3.5px' }}
                          title={isGita ? (isEn ? 'Click to open 120M Year Bhagavad Gita Timeline' : 'భగవద్గీత కాలక్రమ కాలరేఖ పాప్-అప్ కొరకు క్లిక్ చేయండి') : undefined}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm">{branch.icon}</span>
                              <h4 className="text-xs font-bold text-[#7B1113] font-telugu-serif">
                                {isEn ? branch.titleEn : branch.titleTe}
                              </h4>
                            </div>
                            <div className="flex items-center gap-1.5">
                              {isGita && (
                                <span className="text-[9.5px] px-2.5 py-0.5 rounded-full bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE082] font-black uppercase flex items-center gap-1 shadow-xs animate-pulse">
                                  <Maximize2 className="w-2.5 h-2.5" />
                                  <span>{isEn ? 'Timeline Popup' : 'కాలక్రమ కాలరేఖ'}</span>
                                </span>
                              )}
                              {branch.isHighlighted && (
                                <span className="text-[9px] px-2 py-0.2 rounded-full bg-[#7B1113] text-[#FFE082] font-extrabold uppercase">
                                  {isEn ? 'Essence of Vedas' : 'గీతోపనిషత్'}
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-[10px] text-[#5D4037] line-clamp-2 leading-snug">
                            {isEn ? branch.descriptionEn : branch.descriptionTe}
                          </p>

                          <div className="mt-1.5 pt-1 border-t border-[#E8DCC4]/60 flex items-center justify-between gap-2">
                            <div className="space-y-0.5 text-[9px] text-[#7B1113] font-medium flex-1 min-w-0">
                              {(isEn ? branch.itemsEn : branch.itemsTe).slice(0, 2).map((it, i) => (
                                <div key={i} className="flex items-start gap-1 truncate">
                                  <span>•</span>
                                  <span className="truncate">{it}</span>
                                </div>
                              ))}
                            </div>
                            {isGita && (
                              <span className="text-[10px] text-[#D84315] font-black flex items-center gap-0.5 shrink-0 bg-white/90 px-2 py-0.5 rounded border border-amber-300 shadow-2xs hover:bg-amber-50">
                                <span>🔍 {isEn ? 'View 120M Year Timeline' : '12 కోట్ల సం. కాలక్రమం'}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Bottom Sages and Seers Banner Tribute (from Image footer) */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFFFF] to-[#FFF8E1] border border-[#D4AF37] flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧘‍♂️</span>
              <p className="text-[#5D4037] font-telugu-serif font-medium">
                <strong>{isEn ? 'Venerable Seers & Acharyas:' : 'పూజ్య మహర్షులు & ఆచార్య పరంపర:'}</strong>{' '}
                {isEn 
                  ? 'Sage Veda Vyasa, Valmiki, Vashistha, Agastya, Adi Shankaracharya, Ramanujacharya, Madhvacharya, and Saint Poets preserved this eternal nectar.'
                  : 'వేదవ్యాస, వాల్మీకి, వశిష్ఠ, అగస్త్య, ఆదిశంకర, రామానుజ, మధ్వ మరియు భక్త కవులు అందించిన అక్షయ జ్ఞాన భాండాగారము.'}
              </p>
            </div>
            <button
              onClick={() => {
                setIsImageModalOpen(true);
                setImageZoom(1);
              }}
              className="text-[#D84315] font-bold hover:underline flex items-center gap-1 text-[11px] cursor-pointer whitespace-nowrap ml-auto"
            >
              <span>{isEn ? 'Inspect Chart Manuscript' : 'మూల పట పరిశీలన'}</span>
              <span>➔</span>
            </button>
          </div>

        </div>
      )}

      {/* =================================================================== */}
      {/* ORIGINAL INFOGRAPHIC MANUSCRIPT MODAL (FULL RESOLUTION ZOOMABLE) */}
      {/* =================================================================== */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div 
            className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#7B1113] text-[#FFE082] px-4 py-3 flex items-center justify-between border-b border-[#C99700]">
              <div className="flex items-center gap-2">
                <span className="text-xl">📜</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-telugu-serif">
                    {isEn ? 'Vedic Indian Scriptures — Original Manuscript Chart' : 'భారతీయ వైదిక వాఙ్మయ మూల చిత్ర పటము (Vedic Indian Scriptures)'}
                  </h3>
                  <p className="text-[11px] text-[#FFE082]/80">
                    {isEn ? 'Authentic hierarchical classification: Shruti & Smriti' : 'శ్రుతి & స్మృతి మూల వర్గీకరణ పటము'}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setImageZoom(prev => Math.min(prev + 0.25, 2.5))}
                  className="p-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] cursor-pointer"
                  title={isEn ? "Zoom In" : "జూమ్ ఇన్"}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold w-12 text-center text-[#FFE082]">
                  {Math.round(imageZoom * 100)}%
                </span>
                <button
                  onClick={() => setImageZoom(prev => Math.max(prev - 0.25, 0.6))}
                  className="p-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] cursor-pointer"
                  title={isEn ? "Zoom Out" : "జూమ్ అవుట్"}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setImageZoom(1)}
                  className="p-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] cursor-pointer"
                  title={isEn ? "Reset Zoom" : "రీసెట్"}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#C62828] text-[#FFFFFF] cursor-pointer ml-2"
                  title={isEn ? "Close" : "మూసివేయి"}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-auto bg-[#2C1810] p-4 flex items-center justify-center min-h-[500px]">
              <div 
                className="transition-transform duration-150 origin-center max-w-full"
                style={{ transform: `scale(${imageZoom})` }}
              >
                <img
                  src={data.imageSrc}
                  alt={isEn ? data.titleEn : data.titleTe}
                  className="max-h-[75vh] w-auto rounded-lg shadow-2xl border-2 border-[#D4AF37] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAF7F0] px-4 py-2 border-t border-[#E8DCC4] flex items-center justify-between text-xs text-[#5D4037]">
              <span>
                {isEn ? 'Scroll to inspect branches: 4 Vedas, Vedanga, Upaveda, Puranas, Itihasa, Gita.' : 'నాలుగు వేదాలు, వేదాంగాలు, ఉపవేదాలు, పురాణాలు, ఇతిహాసాలు & గీత సమగ్ర వర్గీకరణ.'}
              </span>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="px-3 py-1 rounded-lg bg-[#7B1113] text-[#FFE082] font-bold text-xs cursor-pointer hover:bg-[#5B0E10]"
              >
                {isEn ? 'Close' : 'ముగించు'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bhagavad Gita Chronological Timeline Modal */}
      <BhagavadGitaTimelineModal 
        isOpen={isGitaModalOpen} 
        onClose={() => setIsGitaModalOpen(false)} 
      />

    </div>
  );
};
