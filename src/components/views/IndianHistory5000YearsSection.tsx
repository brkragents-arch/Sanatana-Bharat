import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { INDIAN_HISTORY_5000_YEARS } from '../../data/indianHistory5000YearsData';
import {
  Maximize2,
  Sparkles,
  Calendar,
  Compass,
  Flame,
  Users,
  ExternalLink
} from 'lucide-react';

interface Props {
  onOpenLightbox?: (img: { src: string; title: string; subtitle: string }) => void;
  onSelectPeriod?: (periodId: string) => void;
}

export const IndianHistory5000YearsSection: React.FC<Props> = ({
  onOpenLightbox,
  onSelectPeriod
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';
  const data = INDIAN_HISTORY_5000_YEARS;

  const [timelineViewMode, setTimelineViewMode] = useState<'grid' | 'scroll'>('scroll');

  const handleOpenImage = (src: string, title: string, subtitle: string) => {
    if (onOpenLightbox) {
      onOpenLightbox({ src, title, subtitle });
    }
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-lg p-4 sm:p-6 space-y-8 animate-fadeIn mb-8">
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER (Faithful to poster top) */}
      {/* ============================================================ */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/70 bg-gradient-to-r from-[#FFFDF7] via-[#FAF7F0] to-[#FFF8E1] p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold tracking-widest uppercase shadow-xs">
              <span>🏛️</span>
              <span>{isEn ? data.header.superTitleEn : data.header.superTitleTe}</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#7B1113] font-telugu-serif tracking-tight leading-tight">
              {isEn ? data.header.titleEn : data.header.titleTe}
            </h2>

            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-medium">
              {isEn ? data.header.descriptionEn : data.header.descriptionTe}
            </p>
          </div>

          {/* Master Infographic Button */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenImage(
                  data.header.posterImage,
                  isEn ? 'Indian History: 5,000 Years Master Infographic (HD)' : 'భారతీయ చరిత్ర: 5,000 సంవత్సరాల సమగ్ర ఇన్ఫోగ్రాఫిక్ (HD)',
                  isEn ? data.header.descriptionEn : data.header.descriptionTe
                )}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-[#7B1113] text-[#FFE082] hover:bg-[#5c0d0e] border border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102 flex-1"
              >
                <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                <span>{isEn ? 'View Master Poster (HD)' : 'మూల సమగ్ర పోస్టర్ (HD)'}</span>
              </button>
              <a
                href={data.header.posterImage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] shadow-xs transition-colors flex items-center justify-center cursor-pointer"
                title={isEn ? "Open master poster directly in new tab" : "పోస్టర్‌ను నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/50 text-[11px] text-[#7B1113] font-bold">
              <span>{isEn ? '11 Historic Epochs' : '11 చారిత్రక యుగాలు'}</span>
              <span>•</span>
              <span>{isEn ? '3 Core Pillars' : '3 ప్రధాన విభాగాలు'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. BLOCK 1: THE GRAND TIMELINE (11 Epochs as shown in poster) */}
      {/* ============================================================ */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#D4AF37]/50 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="px-3 py-1 rounded-lg bg-[#0F284E] text-[#FFE082] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>{isEn ? 'THE GRAND TIMELINE' : 'మహా కాలక్రమ పట్టిక'}</span>
            </div>
            <span className="text-xs text-[#5D4037] font-semibold hidden md:inline">
              {isEn ? '(3300 BCE – Present: 11 Distinct Epochs)' : '(క్రీ.పూ. 3300 నుండి నేటి వరకు: 11 యుగాలు)'}
            </span>
          </div>

          {/* Toggle between Scroll View and Grid View */}
          <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-lg border border-[#E8DCC4] text-xs">
            <button
              onClick={() => setTimelineViewMode('scroll')}
              className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                timelineViewMode === 'scroll'
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'text-[#5D4037] hover:text-[#7B1113]'
              }`}
            >
              {isEn ? 'Table Flow View' : 'పట్టిక ప్రవాహం'}
            </button>
            <button
              onClick={() => setTimelineViewMode('grid')}
              className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                timelineViewMode === 'grid'
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'text-[#5D4037] hover:text-[#7B1113]'
              }`}
            >
              {isEn ? 'Cards Grid View' : 'కార్డుల గ్రిడ్'}
            </button>
          </div>
        </div>

        {/* 11 Epochs Rendered */}
        <div
          className={
            timelineViewMode === 'scroll'
              ? 'flex gap-3 overflow-x-auto pb-4 pt-1 snap-x'
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5'
          }
        >
          {data.timeline.map((epoch, idx) => (
            <div
              key={epoch.id}
              className={`bg-[#FAF7F0] rounded-xl border border-[#D4AF37]/70 hover:border-[#7B1113] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                timelineViewMode === 'scroll'
                  ? 'min-w-[210px] sm:min-w-[230px] max-w-[240px] shrink-0 snap-start'
                  : ''
              }`}
            >
              {/* Epoch Year Header Pill */}
              <div
                style={{ backgroundColor: epoch.headerBg }}
                className="text-white px-2.5 py-1.5 text-center shadow-xs"
              >
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase block">
                  {isEn ? epoch.yearsEn : epoch.yearsTe}
                </span>
                <h4 className="font-extrabold text-xs text-[#FFE082] leading-tight line-clamp-1 mt-0.5">
                  {isEn ? epoch.titleEn : epoch.titleTe}
                </h4>
              </div>

              {/* Picture of the Era */}
              <div
                onClick={() =>
                  handleOpenImage(
                    epoch.image,
                    isEn ? epoch.titleEn : epoch.titleTe,
                    isEn ? `${epoch.yearsEn}: ${epoch.keyFeaturesEn}` : `${epoch.yearsTe}: ${epoch.keyFeaturesTe}`
                  )
                }
                className="relative aspect-[16/9] w-full bg-stone-950 border-y border-[#D4AF37]/40 overflow-hidden cursor-pointer group shadow-inner"
              >
                <img
                  src={epoch.image}
                  alt={epoch.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="p-1.5 rounded-full bg-black/60 text-[#FFE082] backdrop-blur-xs shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/75 text-[#FFE082] text-[10px] font-mono font-bold shadow-xs">
                  #{idx + 1}
                </span>
                <a
                  href={epoch.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/75 hover:bg-[#FFE082] text-[#FFE082] hover:text-[#7B1113] transition-colors shadow-xs cursor-pointer"
                  title={isEn ? "Open picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Content Body: Key Features & What Changed */}
              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-2 bg-[#FFFDF7]">
                {/* KEY FEATURES */}
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase text-[#7B1113] tracking-wider block">
                    {isEn ? 'KEY FEATURES:' : 'ముఖ్య లక్షణాలు:'}
                  </span>
                  <p className="text-[11px] text-[#2C1810] leading-snug">
                    {isEn ? epoch.keyFeaturesEn : epoch.keyFeaturesTe}
                  </p>
                </div>

                {/* WHAT CHANGED */}
                <div className="bg-[#FFF8E1] p-2 rounded-lg border border-[#FFE082]/80 space-y-0.5">
                  <span className="text-[9px] font-black uppercase text-[#D84315] tracking-wider block">
                    {isEn ? 'WHAT CHANGED?' : 'వచ్చిన మార్పు:'}
                  </span>
                  <p className="text-[10px] font-semibold text-[#5D4037] leading-snug">
                    {isEn ? epoch.whatChangedEn : epoch.whatChangedTe}
                  </p>
                </div>

                {onSelectPeriod && (
                  <button
                    onClick={() => onSelectPeriod(epoch.id)}
                    className="w-full py-1 text-[10px] font-bold text-[#7B1113] hover:text-white hover:bg-[#7B1113] bg-[#FAF7F0] rounded border border-[#D4AF37]/50 text-center transition-colors cursor-pointer"
                  >
                    {isEn ? 'View Era Details ➔' : 'ఈ యుగం వివరాలు ➔'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. BLOCK 2: THREE CORE PANELS (Land Diversity, Soul of India, Road to Independence) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* PANEL 1: THE LAND & ITS DIVERSITY (3.5 Cols) */}
        <div className="lg:col-span-4 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37]/70 p-4 space-y-3.5 flex flex-col justify-between shadow-xs">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#2E7D32]" />
              <h3 className="font-extrabold text-xs sm:text-sm text-[#1B5E20] uppercase tracking-wider font-telugu-serif">
                {isEn ? data.landAndDiversity.titleEn : data.landAndDiversity.titleTe}
              </h3>
            </div>
            <span className="text-[10px] font-bold text-[#1B5E20] bg-[#E8F5E9] px-2 py-0.5 rounded border border-[#A5D6A7]">
              {isEn ? 'Geography' : 'భౌగోళికం'}
            </span>
          </div>

          {/* Map Image */}
          <div
            onClick={() =>
              handleOpenImage(
                data.landAndDiversity.mapImage,
                isEn ? 'The Land & Its Diversity Map' : 'భారతదేశ భౌగోళిక విస్తీర్ణం & నదుల పటం',
                isEn ? data.landAndDiversity.summaryEn : data.landAndDiversity.summaryTe
              )
            }
            className="relative h-56 sm:h-64 w-full bg-[#FAF7F0] rounded-xl overflow-hidden border border-[#D4AF37]/50 cursor-pointer group shadow-inner"
          >
            <img
              src={data.landAndDiversity.mapImage}
              alt="Land and Diversity Map"
              className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
              <span>{isEn ? 'Enlarge Map' : 'మ్యాప్ పెద్దదిగా చూడండి'}</span>
            </div>
          </div>

          {/* 5 Geographic Regions List */}
          <div className="space-y-2">
            {data.landAndDiversity.regions.map((reg, rIdx) => (
              <div
                key={rIdx}
                className="p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] flex items-start gap-2.5 text-xs"
              >
                <span className="text-base shrink-0 mt-0.5">{reg.icon}</span>
                <div className="space-y-0.5">
                  <h5 className="font-bold text-[#7B1113] text-[11px] uppercase tracking-wider">
                    {isEn ? reg.nameEn : reg.nameTe}
                  </h5>
                  <p className="text-[10px] text-[#5D4037] leading-snug">
                    {isEn ? reg.descEn : reg.descTe}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Quote */}
          <div className="p-2.5 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7] text-[11px] text-[#1B5E20] leading-snug font-medium italic">
            "{isEn ? data.landAndDiversity.summaryEn : data.landAndDiversity.summaryTe}"
          </div>
        </div>

        {/* PANEL 2: THE SOUL OF INDIA: CULTURE, IDEAS & ACHIEVEMENTS (4.5 Cols) */}
        <div className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37]/70 p-4 space-y-3.5 flex flex-col justify-between shadow-xs">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7B1113]" />
              <h3 className="font-extrabold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                {isEn ? data.soulOfIndia.titleEn : data.soulOfIndia.titleTe}
              </h3>
            </div>
            <span className="text-[10px] font-bold text-[#7B1113] bg-[#FFF8E1] px-2 py-0.5 rounded border border-[#D4AF37]">
              {isEn ? 'Culture & Heritage' : 'సంస్కృతి & వారసత్వం'}
            </span>
          </div>

          {/* 4 Cultural Quadrants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.soulOfIndia.quadrants.map((quad, qIdx) => (
              <div
                key={qIdx}
                className="bg-[#FAF7F0] p-2.5 rounded-xl border border-[#D4AF37]/50 space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs">{quad.symbols}</span>
                  </div>
                  <h5 className="font-extrabold text-[11px] text-[#7B1113] uppercase tracking-wider mt-1">
                    {isEn ? quad.titleEn : quad.titleTe}
                  </h5>
                  <p className="text-[10px] text-[#2C1810] leading-snug mt-1">
                    {isEn ? quad.descEn : quad.descTe}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Powers that Shaped India Over Time */}
          <div className="bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4] space-y-2">
            <span className="text-[10px] font-black uppercase text-[#7B1113] tracking-wider block">
              ⚡ {isEn ? 'POWERS THAT SHAPED INDIA OVER TIME:' : 'భారతావనిని మలిచిన ప్రధాన శక్తులు:'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.soulOfIndia.powers.map((pow, pIdx) => (
                <div key={pIdx} className="p-1.5 rounded-md bg-[#FFFDF7] border border-[#E8DCC4] text-[10px]">
                  <div className="flex items-center gap-1 font-bold text-[#7B1113]">
                    <span>{pow.icon}</span>
                    <span>{isEn ? pow.titleEn : pow.titleTe}</span>
                  </div>
                  <p className="text-[9px] text-[#5D4037] mt-0.5 leading-tight">
                    {isEn ? pow.descEn : pow.descTe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PANEL 3: THE ROAD TO INDEPENDENCE (1757–1947) (3.5 Cols) */}
        <div className="lg:col-span-3 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37]/70 p-4 space-y-3 shadow-xs flex flex-col justify-between">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#D84315]" />
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0F284E] uppercase tracking-wider font-telugu-serif">
                {isEn ? 'THE ROAD TO INDEPENDENCE' : 'స్వాతంత్ర్య సమర ప్రస్థానం'}
              </h3>
            </div>
            <span className="text-[10px] font-bold text-[#0F284E] bg-[#E3F2FD] px-2 py-0.5 rounded border border-[#90CAF9]">
              1757 – 1947
            </span>
          </div>

          {/* Milestones list with icons */}
          <div className="space-y-2 overflow-y-auto max-h-[500px] pr-1">
            {data.roadToIndependence.map((mile, mIdx) => (
              <div
                key={mIdx}
                className="p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] hover:border-[#D4AF37] transition-all flex items-start gap-2 text-xs"
              >
                <span className="text-sm shrink-0 mt-0.5">{mile.icon}</span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.2 rounded bg-[#0F284E] text-[#FFE082] text-[10px] font-mono font-bold">
                      {mile.year}
                    </span>
                    <span className="font-bold text-[#7B1113] text-[11px]">
                      {isEn ? mile.titleEn : mile.titleTe}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#5D4037] leading-snug">
                    {isEn ? mile.detailEn : mile.detailTe}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 rounded-lg bg-[#FFF8E1] border border-[#FFE082] text-center text-[10px] font-bold text-[#7B1113]">
            🇮🇳 {isEn ? '15 August 1947: Birth of a Sovereign Democracy' : '15 ఆగస్టు 1947: సార్వభౌమ స్వతంత్ర భారత ఆవిర్భావం'}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. BLOCK 3: BOTTOM TRIAD (Did You Know + Freedom Fighters + Modern India) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* LEFT: DID YOU KNOW? (3.5 Cols) */}
        <div className="md:col-span-3 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37]/60 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center gap-2">
            <span className="text-base">💡</span>
            <h4 className="font-black text-xs sm:text-sm text-[#7B1113] uppercase tracking-wider font-telugu-serif">
              {isEn ? data.didYouKnow.titleEn : data.didYouKnow.titleTe}
            </h4>
          </div>

          <ul className="space-y-2.5">
            {data.didYouKnow.facts.map((fact, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2 text-xs">
                <span className="text-[#D84315] font-bold text-sm shrink-0">✦</span>
                <span className="text-[11px] text-[#2C1810] leading-snug">
                  {isEn ? fact.factEn : fact.factTe}
                </span>
              </li>
            ))}
          </ul>

          <div className="p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] text-[10px] text-[#5D4037] text-center font-semibold">
            ✨ {isEn ? 'Timeless civilizational legacy' : '5 సహస్రాబ్దాల అవిచ్ఛిన్న వారసత్వం'}
          </div>
        </div>

        {/* CENTER: FREEDOM FIGHTERS WHO INSPIRED A NATION (5.5 Cols) */}
        <div className="md:col-span-6 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37]/70 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#7B1113]" />
              <h4 className="font-black text-xs sm:text-sm text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                {isEn ? data.freedomFighters.titleEn : data.freedomFighters.titleTe}
              </h4>
            </div>
            <button
              onClick={() =>
                handleOpenImage(
                  data.freedomFighters.bannerImage,
                  isEn ? data.freedomFighters.titleEn : data.freedomFighters.titleTe,
                  isEn ? data.freedomFighters.quoteEn : data.freedomFighters.quoteTe
                )
              }
              className="text-[10px] font-bold text-[#7B1113] hover:text-[#D84315] flex items-center gap-1 cursor-pointer"
            >
              <Maximize2 className="w-3 h-3" />
              <span>{isEn ? 'Enlarge' : 'పెద్దది'}</span>
            </button>
          </div>

          {/* 6 Freedom Fighters Portraits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {data.freedomFighters.fighters.map((fighter) => (
              <div
                key={fighter.id}
                onClick={() =>
                  handleOpenImage(
                    fighter.image,
                    isEn ? fighter.nameEn : fighter.nameTe,
                    isEn ? fighter.roleEn : fighter.roleTe
                  )
                }
                className="bg-[#FAF7F0] rounded-xl border border-[#D4AF37]/50 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center p-1.5"
              >
                <div className="w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden bg-[#FAF7F0] border border-[#D4AF37]/60 mb-1 flex items-center justify-center p-0.5">
                  <img
                    src={`${fighter.image}?v=2`}
                    alt={fighter.nameEn}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded"
                    loading="lazy"
                  />
                </div>
                <h6 className="font-extrabold text-[10.5px] sm:text-[11px] text-[#7B1113] leading-snug break-words">
                  {isEn ? fighter.nameEn : fighter.nameTe}
                </h6>
                <p className="text-[9px] sm:text-[9.5px] text-[#5D4037] font-medium leading-snug mt-1 break-words">
                  {isEn ? fighter.roleEn : fighter.roleTe}
                </p>
              </div>
            ))}
          </div>

          {/* Quote banner */}
          <div className="p-2 rounded-xl bg-[#FFF8E1] border border-[#FFE082] text-center">
            <p className="text-[11px] font-semibold text-[#7B1113] italic">
              "{isEn ? data.freedomFighters.quoteEn : data.freedomFighters.quoteTe}"
            </p>
          </div>
        </div>

        {/* RIGHT: MODERN INDIA: THE JOURNEY CONTINUES (3 Cols) */}
        <div className="md:col-span-3 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37]/60 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🇮🇳</span>
              <h4 className="font-black text-xs sm:text-sm text-[#0F284E] uppercase tracking-wider font-telugu-serif">
                {isEn ? 'MODERN INDIA' : 'ఆధునిక భారత్'}
              </h4>
            </div>
            <span className="text-[9px] font-bold text-white bg-[#0F284E] px-1.5 py-0.5 rounded">
              2026+
            </span>
          </div>

          <ul className="space-y-2">
            {data.modernIndia.points.map((pt, pIdx) => (
              <li key={pIdx} className="p-1.5 rounded-lg bg-white border border-[#E8DCC4] flex items-center gap-2 text-xs">
                <span className="text-sm shrink-0">{pt.icon}</span>
                <span className="text-[10px] font-bold text-[#2C1810]">
                  {isEn ? pt.titleEn : pt.titleTe}
                </span>
              </li>
            ))}
          </ul>

          <div className="p-2 rounded-xl bg-[#0F284E] text-[#FFE082] text-center text-[10px] font-bold">
            🌟 {isEn ? 'Vision: Viksit Bharat by 2047' : 'లక్ష్యం: వికసిత్ భారత్ 2047'}
          </div>
        </div>
      </div>

      {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
      <div className="pt-3 border-t-2 border-[#D4AF37]/50 flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="font-bold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
          <span>🖼️</span>
          <span>మూల సచిత్ర పటం:</span>
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => handleOpenImage(
              data.header.posterImage,
              isEn ? 'Indian History: 5,000 Years Master Infographic' : 'భారతీయ చరిత్ర: 5,000 సంవత్సరాల సమగ్ర ఇన్ఫోగ్రాఫిక్',
              isEn ? data.header.descriptionEn : data.header.descriptionTe
            )}
            className="text-[#7B1113] hover:text-[#D84315] font-bold underline flex items-center gap-1.5 cursor-pointer bg-amber-50/80 hover:bg-amber-100/80 px-3 py-1.5 rounded-xl border border-amber-300 shadow-2xs transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Indian History 5,000 Years Master Poster (Click to View & Zoom)' : 'భారతీయ చరిత్ర 5,000 సంవత్సరాల సమగ్ర పటం (వీక్షించండి)'}</span>
          </button>
          <a
            href={data.header.posterImage}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#7B1113] hover:text-[#D84315] font-bold flex items-center gap-1 text-[11px] border border-amber-300 shadow-2xs transition-all cursor-pointer"
            title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
