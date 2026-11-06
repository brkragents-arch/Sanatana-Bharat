import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import {
  VAIVASVATA_SAPTARISHIS_DATA,
  MANASA_PUTRA_SAPTARISHIS,
  SAPTARISHI_SOURCE_POSTERS
} from '../../data/saptarishiData';
import type { SaptarishiCouple, ManasaPutraRishi } from '../../data/saptarishiData';
import {
  Sparkles,
  BookOpen,
  Users,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Maximize2,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface SaptarishiSubViewProps {
  onBackToChart?: () => void;
  onBackToBranches?: () => void;
}

export const SaptarishiSubView: React.FC<SaptarishiSubViewProps> = ({
  onBackToChart,
  onBackToBranches
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Sub-tabs within Saptarishis page
  const [subTab, setSubTab] = useState<'couples' | 'manasa_putras' | 'posters'>('couples');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCouple, setSelectedCouple] = useState<SaptarishiCouple | null>(null);
  const [selectedManasa, setSelectedManasa] = useState<ManasaPutraRishi | null>(null);
  const [activePosterKey, setActivePosterKey] = useState<'source1' | 'source2' | 'source3'>('source2');
  const [posterZoom, setPosterZoom] = useState<number>(1);

  // Filter couples
  const filteredCouples = VAIVASVATA_SAPTARISHIS_DATA.filter(c => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.rishiNameTe.toLowerCase().includes(q) ||
      c.rishiNameEn.toLowerCase().includes(q) ||
      c.wivesTe.toLowerCase().includes(q) ||
      c.wivesEn.toLowerCase().includes(q) ||
      c.rishiTitleTe.toLowerCase().includes(q) ||
      c.rishiTitleEn.toLowerCase().includes(q)
    );
  });

  // Filter manasa putras
  const filteredManasa = MANASA_PUTRA_SAPTARISHIS.filter(m => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.nameTe.toLowerCase().includes(q) ||
      m.nameEn.toLowerCase().includes(q) ||
      m.brahmaOriginTe.toLowerCase().includes(q) ||
      m.brahmaOriginEn.toLowerCase().includes(q) ||
      m.gotraTe.toLowerCase().includes(q) ||
      m.gotraEn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* ============================================================ */}
      {/* 1. SUB-PAGE HEADER & BREADCRUMB */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E7] to-[#FFFDF7] border-2 border-[#D4AF37]/60 rounded-3xl p-5 sm:p-7 shadow-sm">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8B0000] mb-3 flex-wrap">
          <button
            onClick={onBackToChart}
            className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1 text-[#5D4037]"
          >
            <span>🪷</span>
            <span>{isEn ? 'Family of Brahma' : 'బ్రహ్మ వంశము'}</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold">
            {isEn ? 'Sub-Page: Saptarishis & Wives' : 'ఉప-పుట: సప్తర్షులు & పత్నులు'}
          </span>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#7B1113] font-telugu-serif flex items-center gap-2.5">
              <span>🕉️</span>
              <span>
                {isEn ? 'Sapta Rishis: The Eternal Seers & Cosmic Scientists' : 'సప్తర్షులు: వేద ద్రష్టలు & పత్నులు సమేత దివ్య చరిత్ర'}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1.5 leading-relaxed max-w-4xl">
              {isEn
                ? 'Comprehensive analytical sub-page detailing the 7 mind-born Prajapati Rishis of Lord Brahma (Source 1), the Vaivasvata Manvantara Saptarishi couples with their consecrated wives (Source 2), and their monumental scientific and Vedic contributions (Source 3).'
                : 'చతుర్ముఖ బ్రహ్మ మానసపుత్రులైన సప్తర్షులు (మూలం 1), ప్రస్తుత వైవస్వత మన్వంతర సప్తర్షులు వారి పత్నుల సమేత కుటుంబ రూపం (మూలం 2) మరియు వారి వేద, గోత్ర, ఖగోళ వైజ్ఞానిక సేవలను (మూలం 3) సమగ్రంగా వివరించే అధికారిక ఉప-పుట.'}
            </p>
          </div>

          {/* Quick Back Action */}
          <div className="flex items-center gap-2 shrink-0">
            {onBackToChart && (
              <button
                onClick={onBackToChart}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFF3E0] border border-[#D4AF37] text-xs font-bold text-[#7B1113] shadow-xs cursor-pointer flex items-center gap-1.5 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isEn ? 'Tree Chart' : 'వంశవృక్షం'}</span>
              </button>
            )}
            {onBackToBranches && (
              <button
                onClick={onBackToBranches}
                className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5C0D0E] text-xs font-bold text-[#FFE082] shadow-xs cursor-pointer flex items-center gap-1.5 transition-all"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{isEn ? '5 Branches' : '5 శాఖలు'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Sub-Tabs Selector */}
        <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center bg-[#FAF7F0] p-1 rounded-2xl border border-[#D4AF37]/50 shadow-inner text-xs font-bold flex-wrap gap-1">
            <button
              onClick={() => setSubTab('couples')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                subTab === 'couples'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] shadow-md font-black'
                  : 'text-[#5D4037] hover:bg-white/80'
              }`}
            >
              <Users className="w-4 h-4 text-[#FFD54F]" />
              <span>{isEn ? 'Sapta Rishis with Wives (Source 2 & 3)' : 'సప్త ఋషులు పత్నులు సమేత (మూలం 2 & 3)'}</span>
            </button>

            <button
              onClick={() => setSubTab('manasa_putras')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                subTab === 'manasa_putras'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] shadow-md font-black'
                  : 'text-[#5D4037] hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFD54F]" />
              <span>{isEn ? 'Brahma Mind-Born Rishis (Source 1)' : 'బ్రహ్మ మానసపుత్రులు (మూలం 1)'}</span>
            </button>

            <button
              onClick={() => setSubTab('posters')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                subTab === 'posters'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] shadow-md font-black'
                  : 'text-[#5D4037] hover:bg-white/80'
              }`}
            >
              <span>🖼️</span>
              <span>{isEn ? 'Original Posters (Zoomable)' : 'మూల సచిత్ర పటాలు (జూమ్)'}</span>
            </button>
          </div>

          {/* Search Box */}
          {subTab !== 'posters' && (
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#5D4037] absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder={isEn ? 'Filter by Rishi, Wife, or Gotra...' : 'ఋషి, పత్ని లేదా గోత్రం ద్వారా వెతకండి...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-full bg-white border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#7B1113] w-64 shadow-2xs"
              />
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SUB-TAB CONTENT: COUPLES (SOURCE 2 & SOURCE 3) */}
      {/* ============================================================ */}
      {subTab === 'couples' && (
        <div className="space-y-6">
          {/* Informational Callout */}
          <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-[#3E0A0C] text-xs leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#D84315] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#7B1113]">
                {isEn ? 'The 7th (Vaivasvata) Manvantara Saptarshis with Dharmapatnis: ' : 'ప్రస్తుత 7వ వైవస్వత మన్వంతర సప్తర్షులు & పత్నులు: '}
              </span>
              {isEn
                ? 'These 7 illustrious sages alongside their consecrated wives are the spiritual custodians of the present era. They author major Rigvedic mandalas, guide royal dynasties, founded Gotras, and harmonized profound cosmic and medical sciences.'
                : 'ఈ ఏడుగురు మహర్షులు తమ పవిత్ర ధర్మపత్నులతో కలసి ప్రస్తుత మన్వంతరాన్ని నడిపిస్తున్నారు. వీరు ఋగ్వేద మండలాల ద్రష్టలు, వంశగోత్ర ప్రవర్తకులు, ఆయుర్వేద-ఖగోళ-న్యాయ దర్శనాల కర్తలు. మూల చిత్రం 2లోని చిత్రాలు మరియు మూల చిత్రం 3లోని విశేషాలన్నీ ఇక్కడ పొందుపరచబడ్డాయి.'}
            </div>
          </div>

          {/* Grid of 7 Couples Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCouples.map((couple) => (
              <div
                key={couple.id}
                className="bg-white rounded-3xl border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group hover:border-[#D4AF37]"
              >
                {/* Image Container with Framing */}
                <div 
                  onClick={() => setSelectedCouple(couple)}
                  className="relative aspect-4/3 bg-stone-900 cursor-pointer overflow-hidden flex items-center justify-center p-1.5"
                >
                  <img
                    src={couple.imageSrc}
                    alt={isEn ? couple.rishiNameEn : couple.rishiNameTe}
                    className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#7B1113]/90 text-[#FFE082] text-xs font-black shadow-md border border-[#D4AF37]/60">
                    #{couple.order}
                  </div>
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-[#FFE082] text-[11px] font-bold flex items-center gap-1 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Zoom' : 'జూమ్'}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-gradient-to-b from-white to-[#FFFDF9]">
                  <div>
                    {/* Names Header */}
                    <div className="border-b border-[#E8DCC4] pb-2.5">
                      <h3 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif">
                        {isEn ? couple.rishiNameEn : couple.rishiNameTe}
                      </h3>
                      <div className="text-xs font-bold text-[#B71C1C] flex items-center gap-1 mt-0.5">
                        <span>👩‍❤️‍👨</span>
                        <span>{isEn ? `Wife: ${couple.wivesEn}` : `భార్య: ${couple.wivesTe}`}</span>
                      </div>
                      <div className="text-[11px] text-[#5D4037] font-semibold mt-1">
                        {isEn ? couple.rishiTitleEn : couple.rishiTitleTe}
                      </div>
                    </div>

                    {/* Vedic & Scientific Highlights (Source 3) */}
                    <div className="pt-2 space-y-1.5">
                      <div className="text-[10px] uppercase font-black tracking-wider text-[#8B0000] flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-[#D84315]" />
                        <span>{isEn ? 'Vedic Feats & Original Scientific Role:' : 'వేద ప్రాముఖ్యత & శాస్త్రీయ విశేషాలు:'}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-[#2C1810]">
                        {(isEn ? couple.keyContributionsEn : couple.keyContributionsTe).slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#D84315] font-bold text-xs mt-0.5">★</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-2 border-t border-[#E8DCC4]/60 flex items-center justify-between">
                    <span className="text-[10.5px] text-[#8C6D46] font-medium truncate max-w-[160px]">
                      {isEn ? couple.scientificAndSpiritualEssenceEn : couple.scientificAndSpiritualEssenceTe}
                    </span>
                    <button
                      onClick={() => setSelectedCouple(couple)}
                      className="px-3 py-1 rounded-xl bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] font-bold text-xs border border-[#D4AF37]/60 cursor-pointer transition-colors shadow-2xs shrink-0"
                    >
                      {isEn ? 'Full Details' : 'పూర్తి వివరాలు'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. SUB-TAB CONTENT: MANASA PUTRAS (SOURCE 1) */}
      {/* ============================================================ */}
      {subTab === 'manasa_putras' && (
        <div className="space-y-6">
          {/* Informational Callout */}
          <div className="p-4 rounded-2xl bg-[#F0F7F4] border border-[#A5D6A7] text-[#1B5E20] text-xs leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#1B5E20]">
                {isEn ? 'Brahma’s 7 Mind-Born Prajapatis (1st Manvantara Saptarishis): ' : 'చతుర్ముఖ బ్రహ్మ మానసపుత్రులైన ప్రథమ సప్తర్షులు: '}
              </span>
              {isEn
                ? 'Directly emerged from Lord Brahma’s divine limbs (mind, eyes, mouth, ears, navel, hands, and vital breath). They initiated universal cosmic creation and are immortalized in the Saptarishi constellation (Ursa Major).'
                : 'బ్రహ్మదేవుని దివ్య అంగములైన మనస్సు, నేత్రములు, ముఖము, కర్ణములు, నాభి, చేతులు, ప్రాణవాయువు నుండి ఆవిర్భవించిన ఋషులు. మూల చిత్రం 1లోని చిత్రాలు శుద్ధి చేయబడి ఇక్కడ అమర్చబడ్డాయి.'}
            </div>
          </div>

          {/* Grid of 7 Mind-born Rishis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredManasa.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-3xl border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group hover:border-[#2E7D32]"
              >
                {/* Image Container with Sage Green Background */}
                <div 
                  onClick={() => setSelectedManasa(m)}
                  className="relative aspect-square bg-[#DFECE5] cursor-pointer overflow-hidden flex items-center justify-center p-2"
                >
                  <img
                    src={m.imageSrc}
                    alt={isEn ? m.nameEn : m.nameTe}
                    className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1B5E20] text-[#E8F5E9] text-xs font-black shadow-md border border-[#A5D6A7]">
                    #{m.order}
                  </div>
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/50 text-[#E8F5E9] text-[10.5px] font-bold flex items-center gap-1 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEn ? 'View' : 'చూడండి'}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <h3 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                      {isEn ? m.nameEn : m.nameTe}
                    </h3>

                    {/* Origin from Brahma */}
                    <div className="mt-1 px-2 py-1 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-bold text-[#B71C1C]">
                      ✨ {isEn ? m.brahmaOriginEn : m.brahmaOriginTe}
                    </div>

                    <p className="text-xs text-[#4E342E] leading-relaxed mt-2">
                      {isEn ? m.roleEn : m.roleTe}
                    </p>

                    <div className="mt-2 text-[11px] font-bold text-[#2E7D32]">
                      🧬 {isEn ? m.gotraEn : m.gotraTe}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedManasa(m)}
                    className="w-full py-1.5 rounded-xl bg-stone-100 hover:bg-[#7B1113] hover:text-[#FFE082] text-xs font-bold text-[#5D4037] border border-stone-200 transition-colors cursor-pointer text-center"
                  >
                    {isEn ? 'Legends & Constellation' : 'పురాణ గాథలు & విశేషాలు'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. SUB-TAB CONTENT: POSTERS LIGHTBOX VIEWER */}
      {/* ============================================================ */}
      {subTab === 'posters' && (
        <div className="space-y-4">
          {/* Poster Selector Buttons */}
          <div className="flex items-center justify-between flex-wrap gap-2 p-3 bg-white rounded-2xl border border-[#D4AF37]/50">
            <div className="flex items-center gap-2 flex-wrap text-xs font-bold">
              <button
                onClick={() => { setActivePosterKey('source2'); setPosterZoom(1); }}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activePosterKey === 'source2'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-stone-100 text-[#5D4037] hover:bg-stone-200'
                }`}
              >
                <span>👨‍👩‍👧‍👦</span>
                <span>{isEn ? 'Source 2: Sapta Rishis with Wives' : 'మూలం 2: సప్త ఋషులు పత్నులు సమేత'}</span>
              </button>

              <button
                onClick={() => { setActivePosterKey('source1'); setPosterZoom(1); }}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activePosterKey === 'source1'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-stone-100 text-[#5D4037] hover:bg-stone-200'
                }`}
              >
                <span>🧘</span>
                <span>{isEn ? 'Source 1: Mind-Born Rishis' : 'మూలం 1: బ్రహ్మ మానసపుత్రులు'}</span>
              </button>

              <button
                onClick={() => { setActivePosterKey('source3'); setPosterZoom(1); }}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activePosterKey === 'source3'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-stone-100 text-[#5D4037] hover:bg-stone-200'
                }`}
              >
                <span>📜</span>
                <span>{isEn ? 'Source 3: Original Seekers Chart' : 'మూలం 3: వేద విజ్ఞాన చార్ట్'}</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPosterZoom(prev => Math.min(prev + 0.25, 3))}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113]"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPosterZoom(prev => Math.max(prev - 0.25, 0.5))}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113]"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPosterZoom(1)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113]"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-[#5D4037] px-2">
                {Math.round(posterZoom * 100)}%
              </span>
            </div>
          </div>

          {/* Active Poster Info Banner */}
          <div className="px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-[#5D4037] flex items-center justify-between">
            <div>
              <span className="font-bold text-[#7B1113]">
                {isEn ? SAPTARISHI_SOURCE_POSTERS[activePosterKey].titleEn : SAPTARISHI_SOURCE_POSTERS[activePosterKey].titleTe}:
              </span>{' '}
              {isEn ? SAPTARISHI_SOURCE_POSTERS[activePosterKey].descriptionEn : SAPTARISHI_SOURCE_POSTERS[activePosterKey].descriptionTe}
            </div>
          </div>

          {/* Zoomable Canvas */}
          <div className="w-full min-h-[500px] max-h-[750px] overflow-auto bg-stone-900 rounded-3xl border-2 border-[#D4AF37] p-4 flex items-center justify-center">
            <div
              style={{
                transform: `scale(${posterZoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out'
              }}
              className="shadow-2xl rounded-2xl overflow-hidden max-w-4xl"
            >
              <img
                src={SAPTARISHI_SOURCE_POSTERS[activePosterKey].path}
                alt={isEn ? SAPTARISHI_SOURCE_POSTERS[activePosterKey].titleEn : SAPTARISHI_SOURCE_POSTERS[activePosterKey].titleTe}
                className="w-full h-auto block select-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. MODAL: DETAILED COUPLE POPUP */}
      {/* ============================================================ */}
      {selectedCouple && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-[#FAF7F0] border-2 border-[#D4AF37] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#7B1113] via-[#8B0000] to-[#5C0D0E] text-[#FFE082] p-4 sm:p-5 flex items-center justify-between sticky top-0 z-10 border-b border-[#D4AF37]/50">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FFE082] text-[#7B1113] text-xs font-black shadow-xs">
                  #{selectedCouple.order}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif">
                    {isEn ? selectedCouple.rishiNameEn : selectedCouple.rishiNameTe}
                  </h3>
                  <div className="text-xs text-[#FFE57F]/90 font-medium">
                    {isEn ? `Wife: ${selectedCouple.wivesEn}` : `పత్ని: ${selectedCouple.wivesTe}`}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCouple(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Image & Key Attributes Row */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <div className="w-64 sm:w-72 aspect-4/3 rounded-2xl bg-black border-2 border-[#D4AF37] overflow-hidden shadow-md shrink-0">
                  <img
                    src={selectedCouple.imageSrc}
                    alt={isEn ? selectedCouple.rishiNameEn : selectedCouple.rishiNameTe}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[11px] font-bold text-[#8B0000] uppercase tracking-wider block">
                      {isEn ? 'Vedic Title & Sacred Status' : 'వైదిక బిరుదు & దివ్య స్థానం'}
                    </span>
                    <p className="text-sm font-bold text-[#7B1113] font-telugu-serif mt-0.5">
                      {isEn ? selectedCouple.rishiTitleEn : selectedCouple.rishiTitleTe}
                    </p>
                    <p className="text-xs text-[#4E342E] mt-1 leading-relaxed">
                      {isEn ? selectedCouple.vedicRoleEn : selectedCouple.vedicRoleTe}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#D4AF37]/40 space-y-1">
                    <span className="text-[11px] font-bold text-[#8B0000] uppercase tracking-wider block">
                      {isEn ? 'Lineage & Divine Progeny' : 'వంశము మరియు దివ్య సంతతి'}
                    </span>
                    <p className="text-xs text-[#2C1810] leading-relaxed">
                      {isEn ? selectedCouple.lineageAndProgenyEn : selectedCouple.lineageAndProgenyTe}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vedic & Scientific Highlights (Source 3) */}
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/50 space-y-2">
                <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <BookOpen className="w-4 h-4 text-[#D84315]" />
                  {isEn ? 'Vedic Contributions, Inventions & Discoveries (Source 3):' : 'వేద విజ్ఞానం, ఆవిష్కరణలు & సేవలు (మూలం 3):'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#2C1810]">
                  {(isEn ? selectedCouple.keyContributionsEn : selectedCouple.keyContributionsTe).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#FAF7F0] p-2 rounded-xl border border-black/5">
                      <span className="text-[#D84315] font-black">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scientific & Spiritual Significance */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 space-y-1.5">
                <h4 className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  {isEn ? 'Scientific & Spiritual Legacy:' : 'శాస్త్రీయ మరియు తాత్విక విశేషం:'}
                </h4>
                <p className="text-xs text-[#4E342E] leading-relaxed">
                  {isEn ? selectedCouple.scientificAndSpiritualEssenceEn : selectedCouple.scientificAndSpiritualEssenceTe}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedCouple(null)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. MODAL: DETAILED MANASA PUTRA POPUP */}
      {/* ============================================================ */}
      {selectedManasa && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-[#FAF7F0] border-2 border-[#A5D6A7] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-[#E8F5E9] p-4 sm:p-5 flex items-center justify-between sticky top-0 z-10 border-b border-[#A5D6A7]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-xs font-black shadow-xs">
                  #{selectedManasa.order}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif">
                    {isEn ? selectedManasa.nameEn : selectedManasa.nameTe}
                  </h3>
                  <div className="text-xs text-[#C8E6C9] font-medium">
                    {isEn ? 'Mind-Born Son of Lord Brahma' : 'చతుర్ముఖ బ్రహ్మ మానసపుత్రుడు'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedManasa(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-48 aspect-square rounded-2xl bg-[#DFECE5] border-2 border-[#2E7D32] overflow-hidden p-2 shrink-0">
                  <img
                    src={selectedManasa.imageSrc}
                    alt={isEn ? selectedManasa.nameEn : selectedManasa.nameTe}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[11px] font-bold text-[#1B5E20] uppercase block">
                      {isEn ? 'Creation Origin' : 'సృష్టి మూలం'}
                    </span>
                    <p className="text-xs font-bold text-[#2E7D32] mt-0.5">
                      ✨ {isEn ? selectedManasa.brahmaOriginEn : selectedManasa.brahmaOriginTe}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                    <span className="text-[11px] font-bold text-[#5D4037] uppercase block">
                      {isEn ? 'Gotra & Lineage Root' : 'గోత్రం & వంశ మూలం'}
                    </span>
                    <p className="text-xs text-[#2C1810] font-semibold mt-0.5">
                      🧬 {isEn ? selectedManasa.gotraEn : selectedManasa.gotraTe}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role & Legends */}
              <div className="p-4 rounded-2xl bg-white border border-[#A5D6A7] space-y-2">
                <h4 className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <Sparkles className="w-4 h-4 text-[#2E7D32]" />
                  {isEn ? 'Cosmic Role & Sacred Feats' : 'విశ్వ సృష్టి కర్తవ్యం & విశేష గాథలు'}
                </h4>
                <p className="text-xs text-[#4E342E] leading-relaxed">
                  {isEn ? selectedManasa.roleEn : selectedManasa.roleTe}
                </p>
                <ul className="space-y-1.5 pt-2 text-xs text-[#2C1810]">
                  {(isEn ? selectedManasa.keyLegendsEn : selectedManasa.keyLegendsTe).map((legend, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#F0F7F4] p-2 rounded-xl border border-black/5">
                      <span className="text-[#2E7D32] font-black">★</span>
                      <span>{legend}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedManasa(null)}
                className="px-5 py-2 rounded-xl bg-[#1B5E20] text-white text-xs font-bold hover:bg-[#2E7D32] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
