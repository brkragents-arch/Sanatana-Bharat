import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  TRIMURTHI_RULERS, 
  COSMIC_CYCLES_DATA, 
  NAKSHATRA_27_DATA,
  type NakshatraDetail 
} from '../../data/trimurthiNakshatraData';
import { 
  Maximize2, 
  X, 
  Compass 
} from 'lucide-react';

export const TrimurthiNakshatraSection: React.FC = () => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Active Cycle tab for immediate viewing (1, 2, 3 or 'all')
  const [selectedCycle, setSelectedCycle] = useState<1 | 2 | 3 | 'all'>(1);
  const [activeDeityFilter, setActiveDeityFilter] = useState<'all' | 'బ్రహ్మ' | 'విష్ణువు' | 'శివుడు'>('all');
  const [selectedNakshatra, setSelectedNakshatra] = useState<NakshatraDetail | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Filter nakshatras for the bottom directory
  const filteredNakshatras = NAKSHATRA_27_DATA.filter(nakshatra => {
    if (selectedCycle !== 'all' && nakshatra.cycle !== selectedCycle) return false;
    if (activeDeityFilter !== 'all' && nakshatra.deityTe !== activeDeityFilter) return false;
    return true;
  });

  // Active cycle object
  const currentCycleObj = COSMIC_CYCLES_DATA.find(c => c.cycle === selectedCycle) || COSMIC_CYCLES_DATA[0];
  const currentCycleNakshatras = selectedCycle === 'all' 
    ? NAKSHATRA_27_DATA 
    : NAKSHATRA_27_DATA.filter(n => n.cycle === selectedCycle);

  return (
    <div id="trimurthi-nakshatra-section" className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden my-8">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#2C1810] text-[#FFE082] p-5 sm:p-6 border-b-2 border-[#D4AF37]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[11px] font-bold uppercase tracking-wider">
                {isEn ? 'Cosmic Nakshatra Mandala' : 'సృష్టి-స్థితి-లయ త్రయము & 27 నక్షత్ర కాలచక్రము'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D84315] text-white text-[11px] font-bold border border-[#FFAB91]">
                {isEn ? 'Trimurthi & 9 Planets' : 'త్రిమూర్తులు & నవగ్రహ పాలన'}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-telugu-serif text-white tracking-tight">
              {isEn 
                ? 'Trimurthi Cosmic Mandala: Srishti, Sthiti & Samhara across 27 Nakshatras' 
                : 'త్రిమూర్తులు & 27 నక్షత్ర కాలచక్రము: సృష్టి, స్థితి, లయ పాలన'}
            </h3>
            
            <p className="text-xs sm:text-sm text-[#FFE082]/90 max-w-3xl leading-relaxed">
              {isEn 
                ? 'How Lord Brahma (Creation / Karma), Lord Vishnu (Preservation / Bhoga), and Lord Shiva (Dissolution / Moksha) govern the 27 Nakshatras and 9 Planets through three cosmic cycles of human evolution.'
                : 'చతుర్ముఖ బ్రహ్మ (సృష్టి - కర్మ), శ్రీమహావిష్ణువు (స్థితి - భోగము), మరియు పరమశివుడు (సంహారము/లయము - మోక్షము) నవగ్రహాల ద్వారా 27 నక్షత్రాలను, మానవ జీవన పరిణామపు 3 త్రిక్రమాలను ఎలా పాలిస్తున్నారో వివరించే దివ్య కాలచక్ర దర్శనం.'}
            </p>
          </div>

          {/* Quick Trigger Button for Enhanced Image Lightbox */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] text-[#4A0012] border-2 border-[#D4AF37] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all self-start lg:self-center shrink-0 hover:scale-102"
            title={isEn ? 'View enhanced high-resolution image' : 'హై-రిజల్యూషన్ చిత్ర దర్శనం'}
          >
            <Maximize2 className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'View High-Res Chart' : 'మూల చార్ట్ పెద్దదిగా చూడండి'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE 3 TRIMURTHI PILLARS (BRAHMA, VISHNU, SHIVA) */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] border-b-2 border-[#E8DCC4] space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
            <span>🕉️</span>
            <span>{isEn ? 'The Three Cosmic Deities & Ruling Planets' : 'త్రిమూర్తుల సృష్టి-స్థితి-లయ కార్యాచరణ & పాలిత గ్రహాలు'}</span>
          </h4>
          <span className="text-xs text-[#5D4037] font-semibold">
            {isEn ? 'Rules 9 Planets in Divine Triad' : 'నవగ్రహ విభజన త్రితత్వము'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRIMURTHI_RULERS.map((ruler) => (
            <div 
              key={ruler.id}
              className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all p-4 sm:p-5 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                {/* Deity Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{ruler.avatarIcon}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-white text-[11px] font-bold bg-gradient-to-r ${ruler.colorGradient} shadow-2xs`}>
                    {isEn ? ruler.roleEn : ruler.roleTe}
                  </span>
                </div>

                {/* Deity Name & Function */}
                <div>
                  <h5 className="font-bold text-base sm:text-lg text-[#7B1113] font-telugu-serif">
                    {isEn ? ruler.nameEn : ruler.nameTe}
                  </h5>
                  <span className="text-xs font-extrabold text-[#D84315] block mt-0.5">
                    {isEn ? ruler.functionKeyEn : ruler.functionKeyTe}
                  </span>
                </div>

                <p className="text-xs text-[#5D4037] leading-relaxed">
                  {isEn ? ruler.essenceEn : ruler.essenceTe}
                </p>

                <p className="text-[11px] text-[#2C1810]/80 italic border-l-2 border-[#D4AF37] pl-2 pt-0.5">
                  "{isEn ? ruler.descriptionEn : ruler.descriptionTe}"
                </p>
              </div>

              {/* Ruling Planets Box */}
              <div className="pt-2 border-t border-[#E8DCC4] space-y-1.5">
                <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block">
                  {isEn ? 'Rules Planets (పాలించు గ్రహాలు):' : 'పాలించు గ్రహాలు:'}
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {ruler.planets.map((p, pIdx) => (
                    <div 
                      key={pIdx}
                      className="p-1.5 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] text-center shadow-2xs"
                    >
                      <span className="text-base block">{p.icon}</span>
                      <span className="text-[10px] font-bold text-[#2C1810] block mt-0.5 truncate">
                        {isEn ? p.nameEn : p.nameTe}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. THE THREE EVOLUTION CYCLES (జీవన పరిణామ త్రిక్రమాలు) */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 bg-[#FFFFFF] border-b-2 border-[#E8DCC4] space-y-4">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
            <span>🔄</span>
            <span>{isEn ? 'Three Cycles of Soul Evolution (జీవ పరిణామ 3 చక్రాలు)' : 'జీవాత్మ పరిణామ క్రమము: 3 చక్రాధ్యాయాలు (గుణ త్రయము)'}</span>
          </h4>
          <p className="text-xs text-[#5D4037] mt-0.5">
            {isEn 
              ? 'The 27 Nakshatras are divided equally into 3 cycles of 9 Nakshatras, reflecting the soul’s progression from physical survival to material duties and ultimate spiritual liberation.'
              : '27 నక్షత్రాలు 9 చొప్పున 3 చక్రాలుగా విభజించబడ్డాయి. భౌతిక ప్రాణ రక్షణ (రజోగుణం) నుండి లౌకిక బాధ్యతలు (తమోగుణం), ఆధ్యాత్మిక మోక్షం (సత్త్వగుణం) వైపు జీవుని ప్రయాణం.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COSMIC_CYCLES_DATA.map((cycle) => {
            const isSelected = selectedCycle === cycle.cycle;

            return (
              <div 
                key={cycle.cycle}
                onClick={() => setSelectedCycle(cycle.cycle as 1 | 2 | 3)}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer shadow-xs hover:shadow-lg space-y-2.5 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#7B1113] ring-3 ring-[#D4AF37] bg-gradient-to-b from-[#FFF8E1] to-[#FFF3E0] scale-[1.02]'
                    : 'border-[#E8DCC4] bg-[#FFFDF7] hover:bg-[#FFF9E6] hover:border-[#D4AF37]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider text-white shadow-2xs" style={{ backgroundColor: cycle.color }}>
                      {isEn ? `Cycle ${cycle.cycle}` : `చక్రం ${cycle.cycle}`}
                    </span>
                    <span className="text-xs font-extrabold text-[#7B1113] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#E8DCC4]">
                      {isEn ? cycle.gunaEn : cycle.gunaTe}
                    </span>
                  </div>

                  <h5 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                    {isEn ? cycle.titleEn : cycle.titleTe}
                  </h5>

                  <span className="inline-block px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E8DCC4] text-[11px] font-bold text-[#D84315]">
                    {isEn ? cycle.spanEn : cycle.spanTe}
                  </span>

                  <p className="text-xs text-[#5D4037] leading-relaxed">
                    {isEn ? cycle.themeEn : cycle.themeTe}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#E8DCC4] flex items-center justify-between">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
                    isSelected 
                      ? 'bg-[#7B1113] text-[#FFE082]' 
                      : 'bg-[#FFF8E1] text-[#7B1113] hover:bg-[#FFE082]'
                  }`}>
                    <span>{isSelected ? '✓ 9 నక్షత్రాలు తెరిచి ఉన్నాయి' : '👁️ 9 నక్షత్రాలను చూడండి'}</span>
                  </span>
                  <span className="text-xs text-[#7B1113] font-extrabold">➔</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Immediate Interactive 9 Nakshatras Showcase for Selected Cycle */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] border-2 border-[#D4AF37] shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-[#E8DCC4]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                {isEn ? `Cycle ${currentCycleObj.cycle}` : `చక్రం ${currentCycleObj.cycle}`}
              </span>
              <h5 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                {isEn ? currentCycleObj.titleEn : currentCycleObj.titleTe} ({isEn ? currentCycleObj.gunaEn : currentCycleObj.gunaTe})
              </h5>
            </div>
            <span className="text-xs font-bold text-[#D84315]">
              {isEn ? currentCycleObj.spanEn : currentCycleObj.spanTe}
            </span>
          </div>

          <p className="text-xs text-[#5D4037] leading-relaxed">
            {isEn 
              ? 'Notice the perfect repeating sequence: Brahma (Creation / Karma) ➔ Vishnu (Preservation / Bhoga) ➔ Shiva (Dissolution / Moksha). Click any Nakshatra for details:'
              : 'ప్రతి 3 నక్షత్రాల సమూహములో త్రిమూర్తుల నిరంతర ఆవర్తనము: బ్రహ్మ (సృష్టి/కర్మ) ➔ విష్ణువు (స్థితి/భోగము) ➔ శివుడు (లయము/మోక్షము). వివరాల కొరకు నక్షత్రంపై క్లిక్ చేయండి:'}
          </p>

          {/* The 9 Nakshatras Cards in this Cycle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2">
            {currentCycleNakshatras.map((nak) => {
              const isSelected = selectedNakshatra?.number === nak.number;

              return (
                <div
                  key={nak.number}
                  onClick={() => setSelectedNakshatra(isSelected ? null : nak)}
                  className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer shadow-2xs flex flex-col justify-between space-y-1.5 hover:scale-105 ${
                    isSelected
                      ? 'border-[#7B1113] ring-2 ring-[#D4AF37] bg-[#FFE082]'
                      : 'border-[#E8DCC4] bg-[#FFFFFF] hover:bg-[#FFF9E6] hover:border-[#D4AF37]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/50">
                      #{nak.number}
                    </span>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded text-white ${
                      nak.deityTe === 'బ్రహ్మ' ? 'bg-[#FF8F00]' : nak.deityTe === 'విష్ణువు' ? 'bg-[#2563EB]' : 'bg-[#DC2626]'
                    }`}>
                      {isEn ? nak.deityEn : nak.deityTe}
                    </span>
                  </div>

                  <div>
                    <h6 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif truncate">
                      {isEn ? nak.nameEn : nak.nameTe}
                    </h6>
                    <span className="text-[10px] text-[#D84315] font-semibold block mt-0.5">
                      {isEn ? nak.planetEn : nak.planetTe}
                    </span>
                  </div>

                  <div className="pt-1 border-t border-[#E8DCC4] text-[9px] text-[#5D4037] leading-tight">
                    <span className="font-semibold block truncate">
                      {isEn ? nak.symbolEn : nak.symbolTe}
                    </span>
                    <span className="text-[#7B1113] block mt-0.5 truncate">
                      {isEn ? nak.rulingFunctionEn : nak.rulingFunctionTe}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Details Drawer if a Nakshatra in this Cycle is Clicked */}
          {selectedNakshatra && currentCycleNakshatras.some(n => n.number === selectedNakshatra.number) && (
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#D4AF37] flex items-start justify-between gap-3 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                    #{selectedNakshatra.number}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                    {isEn ? selectedNakshatra.nameEn : selectedNakshatra.nameTe} నక్షత్రము
                  </span>
                  <span className="text-xs text-[#D84315] font-extrabold">
                    • {isEn ? selectedNakshatra.deityEn : selectedNakshatra.deityTe} ({isEn ? selectedNakshatra.rulingFunctionEn : selectedNakshatra.rulingFunctionTe})
                  </span>
                </div>
                <div className="text-xs text-[#5D4037] grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  <div><strong>{isEn ? 'Planet:' : 'పాలక గ్రహం:'}</strong> {isEn ? selectedNakshatra.planetEn : selectedNakshatra.planetTe}</div>
                  <div><strong>{isEn ? 'Symbol:' : 'చిహ్నం:'}</strong> {isEn ? selectedNakshatra.symbolEn : selectedNakshatra.symbolTe}</div>
                  <div><strong>{isEn ? 'Guna:' : 'గుణం:'}</strong> {isEn ? selectedNakshatra.gunaEn : selectedNakshatra.gunaTe}</div>
                </div>
                <p className="text-xs text-[#7B1113] pt-1 italic font-medium">
                  {isEn ? `Meaning: ${selectedNakshatra.meaningEn}` : `అంతరార్థం & ప్రభావం: ${selectedNakshatra.meaningTe}`}
                </p>
              </div>

              <button
                onClick={() => setSelectedNakshatra(null)}
                className="px-2 py-1 rounded-lg text-xs font-bold bg-[#FAF7F0] text-[#7B1113] hover:bg-[#FFE082] border border-[#D4AF37] cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. ENHANCED IMAGE SHOWCASE & INTERACTIVE NAKSHATRA DIRECTORY */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Visual Showcase Card with High-Res Image Preview */}
        <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-2xl border-2 border-[#D4AF37] shadow-xs flex flex-col lg:flex-row items-center gap-6">
          
          {/* Enhanced Preview Image Box */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="w-full lg:w-96 h-80 rounded-2xl bg-[#2C1810] border-2 border-[#D4AF37] overflow-hidden flex items-center justify-center relative group cursor-pointer shadow-md shrink-0"
          >
            <img 
              src="./images/divine/trimurthi_nakshatra_mandala.jpg" 
              alt="Trimurthi Nakshatra Mandala" 
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
              <Maximize2 className="w-8 h-8 text-[#FFE082]" />
              <span className="font-bold text-xs sm:text-sm">
                {isEn ? 'Click for Fullscreen Ultra HD View' : 'పూర్తి స్క్రీన్‌లో హై-రిజల్యూషన్ చిత్ర దర్శనం'}
              </span>
              <span className="text-[11px] text-[#FFE082]">
                {isEn ? '27 Nakshatras • Trimurthi • Cosmic Zodiac' : '27 నక్షత్రాలు • త్రిమూర్తులు • కాలచక్రం'}
              </span>
            </div>
          </div>

          {/* Side Narrative & Sacred Context */}
          <div className="space-y-3.5 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                {isEn ? 'Sacred Zodiac Wheel' : 'దివ్య కాలచక్ర తత్త్వ రహస్యము'}
              </span>
              <span className="text-xs text-[#5D4037] font-semibold">
                {isEn ? 'Cycle repeats: Brahma ➔ Vishnu ➔ Shiva' : 'నిరంతర ఆవర్తనం: బ్రహ్మ ➔ విష్ణు ➔ శివ'}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
              {isEn 
                ? 'Cosmic Law of Triad: Srishti, Sthiti & Samhara Rhythm' 
                : 'సృష్టి, స్థితి, లయకారకుల త్రిమూర్తి ఆవర్తన నియమము'}
            </h4>

            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
              {isEn 
                ? 'Every set of 3 Nakshatras follows an eternal divine sequence: Brahma initiates through Karma, Vishnu preserves through Bhoga, and Shiva dissolves to grant spiritual liberation. This pattern repeats 3 times across the 9 Nakshatras of each cycle, perfectly harmonizing all 27 cosmic lunar mansions with the nine celestial planetary forces.'
                : 'ప్రతి మూడు నక్షత్రాల సమూహమూ ఒక పవిత్ర దైవ శ్రేణిని అనుసరిస్తుంది: బ్రహ్మ కర్మ ద్వారా ఆరంభింపజేస్తే, విష్ణువు భోగంతో పోషిస్తాడు, శివుడు లయము ద్వారా మోక్షాన్ని ప్రసాదిస్తాడు. ఈ అద్భుత క్రమము 3 చక్రాలలో 3 సార్లు పునరావృతమవుతూ 27 నక్షత్రాలను నవగ్రహ శక్తులతో సమన్వయం చేస్తుంది.'}
            </p>

            {/* Quick Summary Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-2 rounded-xl bg-[#FFF9E6] border border-[#FFE082] space-y-0.5">
                <span className="font-bold text-[#7B1113] block">🪷 {isEn ? 'Brahma (Creation)' : 'బ్రహ్మ (సృష్టి)'}</span>
                <span className="text-[11px] text-[#5D4037]">{isEn ? 'Jupiter, Moon, Ketu' : 'గురుడు, చంద్రుడు, కేతువు'}</span>
              </div>
              <div className="p-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-0.5">
                <span className="font-bold text-[#1D4ED8] block">🐚 {isEn ? 'Vishnu (Preservation)' : 'విష్ణువు (స్థితి)'}</span>
                <span className="text-[11px] text-[#5D4037]">{isEn ? 'Venus, Mars, Saturn' : 'శుక్రుడు, కుజుడు, శని'}</span>
              </div>
              <div className="p-2 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] space-y-0.5">
                <span className="font-bold text-[#BE123C] block">🔱 {isEn ? 'Shiva (Transformation)' : 'శివుడు (లయము)'}</span>
                <span className="text-[11px] text-[#5D4037]">{isEn ? 'Sun, Mercury, Rahu' : 'సూర్యుడు, బుధుడు, రాహువు'}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#4A0012] text-[#FFE082] font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
              >
                <span>🔍</span>
                <span>{isEn ? 'Examine Full Mandala Chart' : 'మండల చిత్రాన్ని వివరంగా చూడండి'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Interactive 27 Nakshatras Directory */}
        <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-2xl border-2 border-[#E8DCC4] space-y-4">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8DCC4]">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D84315]" />
                <span>{isEn ? 'Complete 27 Nakshatra Telugu Directory' : 'సంపూర్ణ 27 నక్షత్రాలు, పాలక త్రిమూర్తులు & నవగ్రహాల పట్టిక'}</span>
              </h4>
              <span className="text-xs text-[#5D4037]">
                {filteredNakshatras.length} {isEn ? 'Nakshatras displayed' : 'నక్షత్రాలు ప్రదర్శితం'}
              </span>
            </div>

            {/* Filter Pills: Both Cycle and Deity */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap text-xs">
              {/* Cycle Filter */}
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[#5D4037] font-semibold mr-0.5">{isEn ? 'Cycle:' : 'చక్రము:'}</span>
                {[
                  { id: 'all', labelEn: 'All (27)', labelTe: 'అన్నీ (27)' },
                  { id: 1, labelEn: 'C1: Physical (1-9)', labelTe: 'చక్రం 1 (1–9)' },
                  { id: 2, labelEn: 'C2: Material (10-18)', labelTe: 'చక్రం 2 (10–18)' },
                  { id: 3, labelEn: 'C3: Spiritual (19-27)', labelTe: 'చక్రం 3 (19–27)' },
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCycle(c.id as any)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedCycle === c.id
                        ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                        : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30 border border-[#E8DCC4]'
                    }`}
                  >
                    {isEn ? c.labelEn : c.labelTe}
                  </button>
                ))}
              </div>

              <div className="hidden sm:block h-4 w-px bg-[#E8DCC4]" />

              {/* Deity Filter */}
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[#5D4037] font-semibold mr-0.5">{isEn ? 'Deity:' : 'అధిదేవత:'}</span>
                {[
                  { id: 'all', labelEn: 'All', labelTe: 'అన్ని' },
                  { id: 'బ్రహ్మ', labelEn: 'Brahma (9)', labelTe: 'బ్రహ్మ (9)' },
                  { id: 'విష్ణువు', labelEn: 'Vishnu (9)', labelTe: 'విష్ణువు (9)' },
                  { id: 'శివుడు', labelEn: 'Shiva (9)', labelTe: 'శివుడు (9)' },
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDeityFilter(d.id as any)}
                    className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeDeityFilter === d.id
                        ? 'bg-[#D84315] text-white shadow-xs'
                        : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30 border border-[#E8DCC4]'
                    }`}
                  >
                    {isEn ? d.labelEn : d.labelTe}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 27 Nakshatras Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-2.5">
            {filteredNakshatras.map((nak) => {
              const isSelected = selectedNakshatra?.number === nak.number;

              return (
                <div
                  key={nak.number}
                  onClick={() => setSelectedNakshatra(isSelected ? null : nak)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-2xs flex flex-col justify-between space-y-1.5 hover:scale-102 ${
                    isSelected
                      ? 'border-[#7B1113] ring-2 ring-[#D4AF37] bg-[#FFF8E1]'
                      : 'border-[#E8DCC4] bg-[#FFFDF7] hover:bg-[#FFF9E6]'
                  }`}
                >
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/40">
                      #{nak.number}
                    </span>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded text-white ${
                      nak.deityTe === 'బ్రహ్మ' ? 'bg-[#FF8F00]' : nak.deityTe === 'విష్ణువు' ? 'bg-[#2563EB]' : 'bg-[#DC2626]'
                    }`}>
                      {isEn ? nak.deityEn : nak.deityTe}
                    </span>
                  </div>

                  {/* Nakshatra Name */}
                  <div>
                    <h6 className="font-bold text-xs text-[#7B1113] font-telugu-serif truncate">
                      {isEn ? nak.nameEn : nak.nameTe}
                    </h6>
                    <span className="text-[10px] text-[#D84315] font-semibold block">
                      {isEn ? `Planet: ${nak.planetEn}` : `గ్రహం: ${nak.planetTe}`}
                    </span>
                  </div>

                  {/* Symbol & Guna */}
                  <div className="pt-1 border-t border-[#E8DCC4] text-[9px] text-[#5D4037] leading-tight">
                    <span className="font-semibold block truncate">
                      {isEn ? nak.symbolEn : nak.symbolTe}
                    </span>
                    <span className="text-[#7B1113] block mt-0.5">
                      {isEn ? nak.gunaEn : nak.gunaTe}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Focused Nakshatra Details Box if clicked */}
          {selectedNakshatra && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFF9E6] to-[#FFF8E1] border-2 border-[#D4AF37] flex items-start justify-between gap-4 flex-wrap">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                    #{selectedNakshatra.number}
                  </span>
                  <h5 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                    {isEn ? selectedNakshatra.nameEn : selectedNakshatra.nameTe} నక్షత్రము
                  </h5>
                  <span className="text-xs text-[#D84315] font-bold">
                    ({isEn ? selectedNakshatra.deityEn : selectedNakshatra.deityTe} పాలిత - {isEn ? selectedNakshatra.rulingFunctionEn : selectedNakshatra.rulingFunctionTe})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs text-[#5D4037]">
                  <div><strong>{isEn ? 'Ruling Planet:' : 'పాలక గ్రహం:'}</strong> {isEn ? selectedNakshatra.planetEn : selectedNakshatra.planetTe}</div>
                  <div><strong>{isEn ? 'Symbol:' : 'చిహ్నం:'}</strong> {isEn ? selectedNakshatra.symbolEn : selectedNakshatra.symbolTe}</div>
                  <div><strong>{isEn ? 'Guna:' : 'గుణం:'}</strong> {isEn ? selectedNakshatra.gunaEn : selectedNakshatra.gunaTe}</div>
                  <div><strong>{isEn ? 'Cycle:' : 'చక్రం:'}</strong> {isEn ? selectedNakshatra.stageEn : selectedNakshatra.stageTe} (చక్రం {selectedNakshatra.cycle})</div>
                </div>

                <p className="text-xs text-[#7B1113] pt-1 italic font-medium">
                  {isEn ? `Spiritual Significance: ${selectedNakshatra.meaningEn}` : `లక్షణం & అంతరార్థం: ${selectedNakshatra.meaningTe}`}
                </p>
              </div>

              <button
                onClick={() => setSelectedNakshatra(null)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FFFFFF] hover:bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37] cursor-pointer"
              >
                {isEn ? 'Close Details' : 'మూసివేయండి'}
              </button>
            </div>
          )}

        </div>

      </div>

      {/* ============================================================ */}
      {/* 5. LIGHTBOX MODAL FOR ULTRA HIGH-RES IMAGE & TELUGU GUIDE */}
      {/* ============================================================ */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#1A1A1A] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Lightbox Header */}
            <div className="bg-[#2C1810] px-4 py-3 border-b border-[#D4AF37]/50 flex items-center justify-between text-white">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#FFE082] font-telugu-serif">
                  {isEn 
                    ? 'Trimurthi Cosmic Mandala & 27 Nakshatras (High Resolution)' 
                    : 'త్రిమూర్తులు & 27 నక్షత్ర కాలచక్రము (హై-రిజల్యూషన్ చిత్ర దర్శనం)'}
                </h4>
                <p className="text-xs text-white/70 mt-0.5">
                  {isEn 
                    ? 'Lord Brahma (Creation / Karma) • Lord Vishnu (Preservation / Bhoga) • Lord Shiva (Samhara / Moksha)' 
                    : 'బ్రహ్మ (సృష్టి/కర్మ) • విష్ణువు (స్థితి/భోగము) • శివుడు (లయము/మోక్షము) - నవగ్రహాలు & 27 నక్షత్రాల కాలచక్రం'}
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="flex-1 bg-black overflow-y-auto max-h-[75vh] p-3 sm:p-6 flex flex-col items-center">
              <img 
                src="./images/divine/trimurthi_nakshatra_mandala.jpg" 
                alt="Trimurthi Nakshatra High-Res" 
                className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Telugu Quick Reference Guide beneath image */}
              <div className="w-full mt-4 p-4 rounded-xl bg-[#FAF7F0] border-2 border-[#D4AF37] text-left text-xs space-y-3">
                <h5 className="font-bold text-sm text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Key Translation & Structural Guide (తెలుగు వివరణ):' : 'కాలచక్ర మూల తత్త్వ విశ్లేషణ (తెలుగు వివరణ):'}
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#FFB74D]">
                    <strong className="text-[#FF8F00] block text-xs">1. బ్రహ్మ (సృష్టి - Srishti):</strong>
                    <span className="text-[11px] text-[#5D4037] block mt-1">ఆరంభము, విజ్ఞానము, కర్మ (Karma / క్రియాశక్తి).</span>
                    <span className="text-[10px] text-[#7B1113] font-semibold block mt-1">పాలక గ్రహాలు: గురుడు, చంద్రుడు, కేతువు.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#93C5FD]">
                    <strong className="text-[#2563EB] block text-xs">2. విష్ణువు (స్థితి - Sthiti):</strong>
                    <span className="text-[11px] text-[#5D4037] block mt-1">పోషణ, సమృద్ధి, విస్తరణ, భోగము (Bhoga / స్థితిశక్తి).</span>
                    <span className="text-[10px] text-[#7B1113] font-semibold block mt-1">పాలక గ్రహాలు: శుక్రుడు, కుజుడు, శని.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#F43F5E]">
                    <strong className="text-[#DC2626] block text-xs">3. శివుడు (సంహారము / లయము - Samhara):</strong>
                    <span className="text-[11px] text-[#5D4037] block mt-1">లయము, అంతము, పరివర్తన, నాశము / మోక్షము (Moksha).</span>
                    <span className="text-[10px] text-[#7B1113] font-semibold block mt-1">పాలక గ్రహాలు: సూర్యుడు, బుధుడు, రాహువు.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="px-4 py-2.5 bg-[#2C1810] border-t border-[#D4AF37]/50 flex items-center justify-between text-xs text-[#FFE082]/80">
              <span>{isEn ? 'Enhanced Resolution Sacred Mandala' : 'సనాతన ధర్మ త్రిమూర్తి నక్షత్ర కాలచక్ర దర్శనము'}</span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-3.5 py-1 rounded-lg bg-[#FFE082] text-[#7B1113] font-bold hover:bg-[#FFF8E1] cursor-pointer"
              >
                {isEn ? 'Close' : 'ముగించండి'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
