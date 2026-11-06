import React, { useState } from 'react';
import { 
  X, 
  Landmark, 
  MapPin, 
  Crown, 
  Maximize2, 
  Sparkles, 
  Ship, 
  ScrollText, 
  ShieldCheck, 
  Coins 
} from 'lucide-react';
import { 
  PALLAVA_DYNASTY_DATA, 
  CHOLA_DYNASTY_DATA 
} from '../../data/southIndianDynastiesData';

interface SouthIndianDynastiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEn: boolean;
  initialTab?: 'pallavas' | 'cholas';
  onOpenImage?: (src: string, title: string, subtitle: string) => void;
}

export const SouthIndianDynastiesModal: React.FC<SouthIndianDynastiesModalProps> = ({
  isOpen,
  onClose,
  isEn,
  initialTab = 'pallavas',
  onOpenImage
}) => {
  const [activeTab, setActiveTab] = useState<'pallavas' | 'cholas'>(initialTab);

  if (!isOpen) return null;

  const handleImageClick = (src: string, title: string, subtitle: string) => {
    if (onOpenImage) {
      onOpenImage(src, title, subtitle);
    }
  };

  const pData = PALLAVA_DYNASTY_DATA;
  const cData = CHOLA_DYNASTY_DATA;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto animate-fadeIn"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[94vh] overflow-hidden flex flex-col shadow-2xl my-auto"
      >
        {/* ============================================================ */}
        {/* MODAL TOP HEADER */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#5B0B14] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-20">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FFE082] shrink-0 bg-[#2C1810] shadow-md flex items-center justify-center">
              {activeTab === 'pallavas' ? (
                <img 
                  src={pData.headerSculptureImage} 
                  alt="Pallava Royalty" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={cData.tigerBannerImage} 
                  alt="Chola Tiger Banner" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-black uppercase tracking-wider shadow-2xs">
                  {isEn ? 'GLORIOUS SOUTH INDIAN DYNASTIES' : 'దక్షిణ భారత మహోన్నత సామ్రాజ్యాలు'}
                </span>
                <span className="text-xs text-[#FFE082] font-extrabold font-mono">
                  {activeTab === 'pallavas' 
                    ? (isEn ? pData.periodEn : pData.periodTe) 
                    : (isEn ? cData.periodEn : cData.periodTe)}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-telugu-serif text-white mt-1">
                {activeTab === 'pallavas' 
                  ? (isEn ? pData.titleEn : pData.titleTe) 
                  : (isEn ? cData.titleEn : cData.titleTe)}
              </h3>
              <p className="text-xs text-[#FFE082]/90 mt-0.5">
                {activeTab === 'pallavas'
                  ? (isEn ? 'Shore Temple, Mamallapuram Pancha Rathas, Kailasanatha Temple & Maritime Glory' : 'మహాబలిపురం ఏకశిలా రథాలు, తీర దేవాలయం, కాంచీపుర కైలాసనాథాలయం & వాస్తు వైభవం')
                  : (isEn ? 'Brihadisvara Big Temple, Powerful Navy, Democratic Kudavolai System & Nataraja Bronze' : 'తంజావూరు బృహదీశ్వరాలయం, నౌకాదళ ఆధిపత్యం, కుడవోలై ప్రజాస్వామిక ఎన్నికలు & నటరాజ కాంస్య శిల్పం')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Original Poster Button */}
            <button
              onClick={() => {
                if (activeTab === 'pallavas') {
                  handleImageClick(
                    './images/indian_history/pallava_dynasty_infographic.jpg',
                    isEn ? 'Pallava Dynasty Infographic Poster' : 'పల్లవ రాజవంశం సమగ్ర మూల చార్ట్',
                    isEn ? 'Builders of a Glorious South India (c. 275 CE – 897 CE)' : 'దక్షిణ భారతదేశంలో పల్లవుల కళ, వాస్తు మరియు శాసనాలు'
                  );
                } else {
                  handleImageClick(
                    './images/indian_history/chola_dynasty_infographic.jpg',
                    isEn ? 'Chola Dynasty Infographic Poster' : 'చోళ సామ్రాజ్యం సమగ్ర మూల చార్ట్',
                    isEn ? 'Architects of a Golden South (9th – 13th Century CE)' : 'తంజావూరు చోళుల పరిపాలన, నౌకాదళం మరియు ఆలయాలు'
                  );
                }
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFE082] text-[#7B1113] hover:bg-white transition-colors cursor-pointer shadow-xs"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'View Original Poster' : 'మూల పోస్టర్ చూడండి'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title={isEn ? 'Close' : 'మూసివేయండి'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DYNASTY TAB SELECTOR BAR */}
        {/* ============================================================ */}
        <div className="bg-[#FFF8E1] border-b-2 border-[#D4AF37]/50 p-2 sm:px-6 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            {/* Tab 1: Pallavas */}
            <button
              onClick={() => setActiveTab('pallavas')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'pallavas'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                  : 'bg-white text-[#7B1113] hover:bg-[#FFE082]/40 border border-[#E8DCC4]'
              }`}
            >
              <span>🏛️</span>
              <span>{isEn ? 'Pallava Dynasty' : 'పల్లవ రాజవంశము'}</span>
              <span className="text-[10px] opacity-80 font-mono">(c. 275–897 CE)</span>
            </button>

            {/* Tab 2: Cholas */}
            <button
              onClick={() => setActiveTab('cholas')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'cholas'
                  ? 'bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                  : 'bg-white text-[#7B1113] hover:bg-[#FFE082]/40 border border-[#E8DCC4]'
              }`}
            >
              <span>🐅</span>
              <span>{isEn ? 'Chola Dynasty' : 'మహోన్నత చోళులు'}</span>
              <span className="text-[10px] opacity-80 font-mono">(9th–13th Cent.)</span>
            </button>
          </div>

          <span className="text-[11px] font-semibold text-[#8D6E63] hidden md:inline-block">
            {isEn ? 'Click on any photo or map to enlarge view' : 'ఏ చిత్రంపైనైనా క్లిక్ చేసి పెద్దదిగా వీక్షించండి'}
          </span>
        </div>

        {/* ============================================================ */}
        {/* MODAL BODY (SCROLLABLE) */}
        {/* ============================================================ */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
          
          {/* ========================================================== */}
          {/* TAB 1: PALLAVA DYNASTY */}
          {/* ========================================================== */}
          {activeTab === 'pallavas' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Quote Banner with Stone Lion */}
              <div className="bg-gradient-to-r from-[#7B1113] via-[#8B1A1C] to-[#5C0D0E] text-[#FFE082] rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37] shadow-md flex flex-col sm:flex-row items-center gap-4">
                <div 
                  onClick={() => handleImageClick(pData.lionSculptureImage, isEn ? 'Pallava Carved Stone Lion' : 'పల్లవ ఏకశిలా సింహం', isEn ? 'Mamallapuram rock-cut poetry' : 'మహాబలిపురంలో శిలను కావ్యంగా మలచిన శిల్పకళ')}
                  className="w-28 h-20 rounded-xl overflow-hidden border-2 border-[#FFE082] shrink-0 bg-black/40 cursor-pointer shadow-md group relative"
                  title={isEn ? 'Click to inspect lion sculpture' : 'శిల్పాన్ని చూడండి'}
                >
                  <img 
                    src={pData.lionSculptureImage} 
                    alt="Pallava Stone Lion" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <p className="text-sm sm:text-base font-bold italic tracking-wide text-white font-serif">
                    {isEn ? pData.quoteEn : pData.quoteTe}
                  </p>
                  <span className="text-[11px] text-[#FFE082]/90 font-medium block">
                    — {isEn ? pData.quoteAuthorEn : pData.quoteAuthorTe}
                  </span>
                </div>
              </div>

              {/* OVERVIEW & MAP 2-COLUMN SECTION */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                
                {/* Column 1: Overview Details */}
                <div className="md:col-span-7 bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-3.5 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
                      <Landmark className="w-5 h-5 text-[#7B1113]" />
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113] uppercase tracking-wide">
                        {isEn ? 'Overview & Realm' : 'సామ్రాజ్య స్థూల పరిశీలన'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                        <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">{isEn ? 'Period:' : 'పాలనా కాలం:'}</span>
                        <strong className="text-[#7B1113] text-xs">{isEn ? pData.periodEn : pData.periodTe}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                        <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">{isEn ? 'Capital City:' : 'రాజధాని నగరం:'}</span>
                        <strong className="text-[#7B1113] text-xs">{isEn ? pData.capitalEn : pData.capitalTe}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] sm:col-span-2">
                        <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">{isEn ? 'Geographical Region:' : 'భౌగోళిక ప్రాంతం:'}</span>
                        <span className="text-[#2C1810] font-medium">{isEn ? pData.regionEn : pData.regionTe}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] sm:col-span-2">
                        <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">{isEn ? 'Contemporary Empires:' : 'సమకాలీన రాజవంశాలు:'}</span>
                        <span className="text-[#2C1810] font-medium">{isEn ? pData.contemporariesEn : pData.contemporariesTe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFF8E1] p-3 rounded-xl border border-[#D4AF37]/50 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B1113] block">
                      {isEn ? 'Known For & Hallmarks:' : 'పల్లవ వైభవ ముఖ్య విశేషాలు:'}
                    </span>
                    <ul className="text-xs text-[#5D4037] space-y-1">
                      {(isEn ? pData.knownForEn : pData.knownForTe).map((kf, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Map of Pallava Kingdom */}
                <div className="md:col-span-5 bg-[#FFFFFF] rounded-2xl p-4 border-2 border-[#E8DCC4] shadow-xs flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D84315]" />
                      <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wide">
                        {isEn ? 'Map of Pallava Kingdom' : 'పల్లవ సామ్రాజ్య భౌగోళిక పటము'}
                      </h4>
                    </div>
                    <span className="text-[10px] font-semibold text-[#8D6E63]">{isEn ? 'Click to Enlarge' : 'పెద్దదిగా చూడండి'}</span>
                  </div>

                  <div 
                    onClick={() => handleImageClick(pData.mapImage, isEn ? 'Map of Pallava Kingdom' : 'పల్లవ సామ్రాజ్య సరిహద్దుల పటం', isEn ? 'Northern Tamil Nadu, Andhra, Kanchipuram, Mamallapuram' : 'కాంచీపురం, మహాబలిపురం, బంగాళాఖాత తీర ప్రాంతాలు')}
                    className="h-60 w-full rounded-xl overflow-hidden border-2 border-[#D4AF37]/60 bg-[#FAF7F0] cursor-pointer group relative shadow-2xs"
                  >
                    <img 
                      src={pData.mapImage} 
                      alt="Map of Pallava Kingdom" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Inspect Map' : 'మ్యాప్ పరిశీలించండి'}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5D4037] text-center italic">
                    {isEn 
                      ? 'Capital Kanchipuram & International Port of Mamallapuram facing the Bay of Bengal.' 
                      : 'రాజధాని కాంచీపురం మరియు బంగాళాఖాత తీరాన అంతర్జాతీయ నౌకాశ్రయం మహాబలిపురం.'}
                  </p>
                </div>

              </div>

              {/* IMPORTANT RULERS SECTION */}
              <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-[#D84315]" />
                    <h4 className="font-bold text-sm sm:text-base text-[#7B1113]">
                      {isEn ? 'Important Rulers of the Pallava Dynasty' : 'పల్లవ సామ్రాజ్య ప్రముఖ చక్రవర్తులు'}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]/50">
                    {isEn ? '5 Visionary Monarchs' : '5గురు దిగ్గజ రాజులు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {pData.rulers.map((ruler, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#FAF7F0] rounded-xl p-3 border border-[#E8DCC4] hover:border-[#D4AF37] transition-all flex flex-col items-center text-center space-y-2 group shadow-2xs hover:shadow-xs"
                    >
                      <div 
                        onClick={() => handleImageClick(ruler.portrait, isEn ? ruler.nameEn : ruler.nameTe, isEn ? ruler.reignEn : ruler.reignTe)}
                        className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] bg-[#2C1810] shadow-sm cursor-pointer group-hover:scale-105 transition-transform"
                        title={isEn ? 'Click to inspect portrait' : 'చిత్రం చూడండి'}
                      >
                        <img 
                          src={ruler.portrait} 
                          alt={isEn ? ruler.nameEn : ruler.nameTe} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                          {isEn ? ruler.nameEn : ruler.nameTe}
                        </h5>
                        <span className="text-[10px] font-mono text-[#D84315] block font-semibold">
                          {isEn ? ruler.reignEn : ruler.reignTe}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#5D4037] leading-tight">
                        {isEn ? ruler.highlightsEn : ruler.highlightsTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAMOUS MONUMENTS (4 CARDS) */}
              <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37]/70 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🛕</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113]">
                        {isEn ? 'Famous Monuments of Pallava Architecture' : 'పల్లవుల ప్రపంచ ప్రసిద్ధ కట్టడాలు & ఆలయాలు'}
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn 
                          ? 'UNESCO World Heritage rock-cut mandapas, monolithic rathas & sandstone structural temples' 
                          : 'యునెస్కో వారసత్వ ఏకశిలా రథాలు, గుహాలయాలు మరియు తొలి రాతి దేవాలయాలు'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#7B1113] text-[#FFE082]">
                    {isEn ? 'UNESCO World Heritage' : 'యునెస్కో ప్రపంచ వారసత్వ సంపద'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {pData.monuments.map((mon, mIdx) => (
                    <div 
                      key={mIdx}
                      className="bg-[#FFFDF7] rounded-xl border border-[#E8DCC4] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div 
                          onClick={() => handleImageClick(mon.image, isEn ? mon.nameEn : mon.nameTe, `${isEn ? mon.locationEn : mon.locationTe} • ${mon.builderEn ? (isEn ? mon.builderEn : mon.builderTe) : ''}`)}
                          className="h-32 w-full bg-[#2C1810] overflow-hidden cursor-pointer group relative"
                          title={isEn ? 'Click to inspect monument' : 'కట్టడాన్ని చూడండి'}
                        >
                          <img 
                            src={mon.image} 
                            alt={isEn ? mon.nameEn : mon.nameTe} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                          </div>
                          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/70 text-white border border-white/20">
                            {isEn ? mon.locationEn : mon.locationTe}
                          </span>
                        </div>

                        <div className="p-3 space-y-1.5">
                          <h5 className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                            {isEn ? mon.nameEn : mon.nameTe}
                          </h5>
                          {mon.builderEn && (
                            <span className="text-[10px] text-[#D84315] font-semibold block">
                              👑 {isEn ? mon.builderEn : mon.builderTe}
                            </span>
                          )}
                          <p className="text-[11px] text-[#5D4037] leading-relaxed line-clamp-4">
                            {isEn ? mon.descriptionEn : mon.descriptionTe}
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 pt-0">
                        <button
                          onClick={() => handleImageClick(mon.image, isEn ? mon.nameEn : mon.nameTe, isEn ? mon.locationEn : mon.locationTe)}
                          className="w-full py-1 text-center text-[10px] font-bold bg-[#FAF7F0] hover:bg-[#FFE082]/50 text-[#7B1113] rounded border border-[#E8DCC4] transition-colors cursor-pointer"
                        >
                          {isEn ? 'View Photo in HD' : 'చిత్రం పెద్దదిగా చూడండి'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CULTURE, LITERATURE & DECLINE GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Culture & Literature */}
                <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
                    <ScrollText className="w-4 h-4 text-[#7B1113]" />
                    <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wide">
                      {isEn ? 'Culture, Religion & Literature' : 'సంస్కృతి, మతం మరియు సాహిత్యం'}
                    </h4>
                  </div>
                  <ul className="text-xs text-[#5D4037] space-y-2">
                    {(isEn ? pData.cultureAndLiteratureEn : pData.cultureAndLiteratureTe).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D84315] font-bold">✦</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decline & Eternal Legacy */}
                <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
                      <ShieldCheck className="w-4 h-4 text-[#D84315]" />
                      <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wide">
                        {isEn ? 'Decline & Eternal Legacy' : 'పతనం మరియు శాశ్వత వారసత్వం'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <div 
                        onClick={() => handleImageClick(pData.legacyImage, isEn ? 'Pancha Rathas & Monolithic Elephant' : 'పంచ రథాలు మరియు ఏకశిలా గజ శిల్పం', isEn ? 'Timeless Legacy of the Pallavas' : 'మహాబలిపురంలో పల్లవుల అమర కీర్తి')}
                        className="sm:col-span-4 h-28 rounded-xl overflow-hidden bg-[#2C1810] border border-[#D4AF37] cursor-pointer group relative shadow-2xs"
                        title={isEn ? 'Click to inspect legacy image' : 'చిత్రం చూడండి'}
                      >
                        <img 
                          src={pData.legacyImage} 
                          alt="Pallava Legacy" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                        </div>
                      </div>

                      <div className="sm:col-span-8 space-y-1.5">
                        <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">
                          {isEn ? 'End of the Dynasty (c. 897 CE):' : 'రాజవంశ సమాప్తి (క్రీ.శ. 897):'}
                        </span>
                        <p className="text-xs text-[#5D4037] leading-relaxed">
                          {isEn ? pData.declineEn[2] : pData.declineTe[2]}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4]">
                      <strong className="text-[10px] font-bold text-[#7B1113] uppercase block mb-1">
                        {isEn ? 'The Pallava Heritage:' : 'పల్లవుల వారసత్వ సందేశం:'}
                      </strong>
                      <p className="text-xs text-[#2C1810] leading-relaxed">
                        {isEn ? pData.legacyEn[0] : pData.legacyTe[0]}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================== */}
          {/* TAB 2: CHOLA DYNASTY */}
          {/* ========================================================== */}
          {activeTab === 'cholas' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Top Banner: Big Temple & Naval Supremacy */}
              <div className="bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#7B1113] text-[#FFE082] rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37] shadow-md flex flex-col sm:flex-row items-center gap-4">
                <div 
                  onClick={() => handleImageClick(cData.brihadisvaraHeaderImage, isEn ? 'Brihadisvara Temple Vimana' : 'తంజావూరు బృహదీశ్వరాలయ విమాన గోపురం', isEn ? 'The Pinnacle of Dravidian Architecture (1010 CE)' : 'రాజరాజ చోళుని గ్రానైట్ కళాఖండం')}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#FFE082] shrink-0 bg-black/40 cursor-pointer shadow-md group relative"
                  title={isEn ? 'Click to inspect Brihadisvara Vimana' : 'బృహదీశ్వరాలయ విమానాన్ని చూడండి'}
                >
                  <img 
                    src={cData.brihadisvaraHeaderImage} 
                    alt="Brihadisvara Temple" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/30 border border-[#FFE082]/40 text-[10px] font-bold text-[#FFE082]">
                    <Sparkles className="w-3 h-3 text-[#FFE082]" />
                    <span>{isEn ? 'THE ARCHITECTS OF A GOLDEN SOUTH' : 'స్వర్ణ దక్షిణ భారత శిల్పులు'}</span>
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white font-telugu-serif">
                    {isEn ? 'Imperial Chola Golden Age (9th – 13th Century CE)' : 'మహోన్నత సామ్రాజ్య చోళుల స్వర్ణయుగం (9వ – 13వ శతాబ్దం)'}
                  </h4>
                  <p className="text-xs text-[#FFE082]/95 leading-relaxed">
                    {isEn ? cData.overviewEn : cData.overviewTe}
                  </p>
                </div>
              </div>

              {/* GREAT CHOLA RULERS (2 COLUMNS: RAJARAJA I & RAJENDRA I) */}
              <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-[#B45309]" />
                    <h4 className="font-bold text-sm sm:text-base text-[#7B1113]">
                      {isEn ? 'Great Chola Emperors & World Conquerors' : 'ప్రపంచ ఖ్యాతి గడించిన చోళ మహాచక్రవర్తులు'}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFFBEB] text-[#B45309] border border-[#FCD34D]">
                    {isEn ? 'Father & Son Era (985 – 1044 CE)' : 'తండ్రీకొడుకుల దిగ్విజయ స్వర్ణయుగం'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cData.rulers.map((ruler, rIdx) => (
                    <div 
                      key={rIdx}
                      className="bg-[#FAF7F0] rounded-xl p-4 border border-[#E8DCC4] hover:border-[#D4AF37] transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 border-b border-[#E8DCC4] pb-2.5">
                          <div 
                            onClick={() => handleImageClick(ruler.portrait, isEn ? ruler.nameEn : ruler.nameTe, isEn ? ruler.reignEn : ruler.reignTe)}
                            className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#D4AF37] bg-[#2C1810] shadow-sm cursor-pointer hover:scale-105 transition-transform shrink-0"
                            title={isEn ? 'Click to inspect portrait' : 'చిత్రం చూడండి'}
                          >
                            <img 
                              src={ruler.portrait} 
                              alt={isEn ? ruler.nameEn : ruler.nameTe} 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <h5 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif truncate">
                              {isEn ? ruler.nameEn : ruler.nameTe}
                            </h5>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#7B1113] text-[#FFE082] inline-block font-mono mt-0.5">
                              {isEn ? ruler.reignEn : ruler.reignTe}
                            </span>
                          </div>
                        </div>

                        <ul className="text-xs text-[#5D4037] space-y-1.5">
                          {(isEn ? ruler.highlightsEn : ruler.highlightsTe).map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
                              <span className="text-[#B45309] font-bold">✔</span>
                              <span className="leading-snug">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {rIdx === 1 && (
                        <div 
                          onClick={() => handleImageClick(cData.navalShipImage, isEn ? 'Chola Warship & Trans-Oceanic Navy' : 'చోళుల యుద్ధ నౌక & సముద్ర నౌకాదళం', isEn ? 'Expedition to Srivijaya (1025 CE)' : 'ఆగ్నేయాసియాపై రాజేంద్రుని నౌకాదళ దిగ్విజయం')}
                          className="p-2 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-between gap-2 cursor-pointer hover:bg-[#E0F2FE] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Ship className="w-4 h-4 text-[#0284C7]" />
                            <span className="text-[11px] font-bold text-[#0369A1]">
                              {isEn ? 'Naval Expedition to Srivijaya (1025 CE)' : 'శ్రీవిజయ నౌకాదళ దండయాత్ర (క్రీ.శ. 1025)'}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#0284C7] font-semibold">{isEn ? 'View Warship' : 'నౌకను చూడండి'}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ADMINISTRATION & KUDAVOLAI DEMOCRATIC SYSTEM */}
              <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <ScrollText className="w-5 h-5 text-[#7B1113]" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113]">
                        {isEn ? cData.localSelfGovernment.titleEn : cData.localSelfGovernment.titleTe}
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn ? cData.localSelfGovernment.inscriptionsEn : cData.localSelfGovernment.inscriptionsTe}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]">
                    📜 {isEn ? 'Uttaramerur Constitutional Inscription' : 'ఉత్తరమేరూరు రాజ్యాంగ శాసనము'}
                  </span>
                </div>

                {/* 3 Assemblies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {cData.localSelfGovernment.assemblies.map((ass, aIdx) => (
                    <div 
                      key={aIdx} 
                      className="bg-[#FAF7F0] rounded-xl p-3.5 border border-[#E8DCC4] space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{ass.icon}</span>
                        <h5 className="font-bold text-xs sm:text-sm text-[#7B1113]">
                          {isEn ? ass.nameEn : ass.nameTe}
                        </h5>
                      </div>
                      <p className="text-[11px] text-[#5D4037] leading-relaxed">
                        {isEn ? ass.descriptionEn : ass.descriptionTe}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Kudavolai Pot Lottery Box */}
                <div className="bg-[#FEF3C7]/60 p-3.5 rounded-xl border border-[#F59E0B]/50 flex flex-col sm:flex-row items-center gap-3">
                  <span className="text-3xl">🏺</span>
                  <div className="text-xs text-[#92400E] leading-relaxed">
                    <strong>{isEn ? 'Kudavolai Pot Lottery Mechanism: ' : 'కుడవోలై కుండ లాటరీ పద్ధతి: '}</strong>
                    {isEn ? cData.localSelfGovernment.kudavolaiEn : cData.localSelfGovernment.kudavolaiTe}
                  </div>
                </div>

                {/* Administrative Hierarchy Flow */}
                <div className="space-y-1.5 pt-2 border-t border-[#E8DCC4]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8D6E63] block">
                    {isEn ? 'Administrative Hierarchy of the Chola Empire:' : 'చోళ సామ్రాజ్య పరిపాలనా సోపాన క్రమము:'}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-center text-xs">
                    {cData.administrationHierarchy.map((h, hIdx) => (
                      <div key={hIdx} className="p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4]">
                        <span className="text-[10px] font-bold text-[#B45309] block">
                          Level {hIdx + 1}
                        </span>
                        <strong className="text-[#7B1113] text-[11px] block truncate">
                          {isEn ? h.levelEn : h.levelTe}
                        </strong>
                        <span className="text-[10px] text-[#5D4037] line-clamp-2">
                          {isEn ? h.descriptionEn : h.descriptionTe}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* THREE GREAT LIVING CHOLA TEMPLES & NATARAJA BRONZE */}
              <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37]/70 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🕉️</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113]">
                        {isEn ? 'Great Living Chola Temples & Nataraja Bronze Sculpture' : 'మహోన్నత ఆలయాలు & నటరాజ కాంస్య శిల్పకళ'}
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn ? 'UNESCO World Heritage Living Temples & Lost-Wax Bronze Casting Mastery' : 'యునెస్కో ప్రపంచ వారసత్వ కట్టడాలు & కాంస్య పోత శిల్పకళా వైభవం'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#B45309] text-white">
                    {isEn ? 'World Art Icon' : 'విశ్వవిఖ్యాత కళాఖండాలు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                  
                  {/* Nataraja Bronze Card */}
                  <div className="md:col-span-4 bg-[#FAF7F0] rounded-xl p-3.5 border-2 border-[#D4AF37] flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div 
                        onClick={() => handleImageClick(cData.natarajaImage, isEn ? 'Chola Bronze Nataraja' : 'చోళ కాంస్య నటరాజ స్వామి', isEn ? 'The Cosmic Dance of Shiva (Ananda Tandava)' : 'విశ్వసృష్టి, స్థితి, లయ కారక దివ్య నృత్యం')}
                        className="h-48 sm:h-52 w-full bg-[#FFFDF7] rounded-xl overflow-hidden cursor-pointer group relative shadow-inner border border-[#D4AF37]/50 p-2 flex items-center justify-center"
                        title={isEn ? 'Click to inspect Nataraja sculpture' : 'నటరాజ శిల్పాన్ని చూడండి'}
                      >
                        <img 
                          src={cData.natarajaImage} 
                          alt="Nataraja Bronze Sculpture" 
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                        </div>
                      </div>

                      <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] text-center font-telugu-serif">
                        {isEn ? 'Famous Bronze Sculpture: Nataraja' : 'ప్రపంచ ప్రసిద్ధ కాంస్య శిల్పం: నటరాజు'}
                      </h5>
                      <p className="text-[11px] text-[#5D4037] leading-relaxed text-center">
                        {isEn 
                          ? 'Perfection of lost-wax (Cire-Perdue) casting depicting Lord Shiva in the cosmic dance (Ananda Tandava).'
                          : 'లయకారుడైన శివుని ఆనంద తాండవ దివ్య రూపం; లాస్ట్-వ్యాక్స్ కాంస్య పోత సాంకేతికతలో ప్రపంచ వింత.'}
                      </p>
                    </div>

                    <button
                      onClick={() => handleImageClick(cData.natarajaImage, isEn ? 'Chola Bronze Nataraja' : 'చోళ కాంస్య నటరాజ స్వామి', isEn ? 'Lost-Wax Bronze Sculpture' : 'కాంస్య శిల్పం')}
                      className="w-full py-1 text-center text-[10px] font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] rounded border border-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {isEn ? 'Enlarge Sculpture View' : 'శిల్పం పెద్దదిగా చూడండి'}
                    </button>
                  </div>

                  {/* 3 Great Living Temples */}
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cData.greatTemples.map((temple, tIdx) => (
                      <div 
                        key={tIdx}
                        className="bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                      >
                        <div>
                          <div 
                            onClick={() => handleImageClick(temple.image, isEn ? temple.nameEn : temple.nameTe, `${isEn ? temple.locationEn : temple.locationTe} • ${temple.builderEn ? (isEn ? temple.builderEn : temple.builderTe) : ''}`)}
                            className="h-36 sm:h-40 w-full bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] overflow-hidden cursor-pointer group relative p-1.5 flex items-center justify-center border-b border-[#E8DCC4]"
                            title={isEn ? 'Click to inspect temple' : 'ఆలయాన్ని చూడండి'}
                          >
                            <img 
                              src={temple.image} 
                              alt={isEn ? temple.nameEn : temple.nameTe} 
                              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                            </div>
                          </div>

                          <div className="p-2.5 space-y-1">
                            <h6 className="font-bold text-[11.5px] text-[#7B1113] font-telugu-serif leading-tight">
                              {isEn ? temple.nameEn : temple.nameTe}
                            </h6>
                            {temple.builderEn && (
                              <span className="text-[9.5px] text-[#B45309] font-bold block">
                                👑 {isEn ? temple.builderEn : temple.builderTe}
                              </span>
                            )}
                            <p className="text-[10.5px] text-[#5D4037] leading-relaxed line-clamp-4">
                              {isEn ? temple.descriptionEn : temple.descriptionTe}
                            </p>
                          </div>
                        </div>

                        <div className="p-2 pt-0">
                          <button
                            onClick={() => handleImageClick(temple.image, isEn ? temple.nameEn : temple.nameTe, isEn ? temple.locationEn : temple.locationTe)}
                            className="w-full py-0.5 text-center text-[9.5px] font-bold bg-[#FFFFFF] hover:bg-[#FFE082]/40 text-[#7B1113] rounded border border-[#E8DCC4] transition-colors cursor-pointer"
                          >
                            {isEn ? 'View HD Temple' : 'ఆలయం పెద్దదిగా'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* ECONOMY, MARITIME TRADE & KEY POINTS */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Economy & Maritime Trade with Map */}
                <div className="md:col-span-7 bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
                    <Coins className="w-4 h-4 text-[#B45309]" />
                    <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wide">
                      {isEn ? 'Economy, Agriculture & Maritime Trade' : 'ఆర్థిక వ్యవస్థ, కావేరి వ్యవసాయం & సముద్ర వాణిజ్యం'}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div 
                      onClick={() => handleImageClick(cData.maritimeMapImage, isEn ? 'Chola Maritime Trade Route & Ship' : 'చోళుల సముద్ర వాణిజ్య మార్గం & నౌక', isEn ? 'Maritime trade routes connecting South India, Sri Lanka & Southeast Asia' : 'శ్రీలంక, మలయా, సుమత్రా మరియు చైనాతో సముద్ర వాణిజ్య మార్గాలు')}
                      className="sm:col-span-5 h-36 sm:h-40 rounded-xl overflow-hidden bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] border border-[#D4AF37] cursor-pointer group relative shadow-2xs p-1.5 flex items-center justify-center"
                      title={isEn ? 'Click to inspect maritime trade route' : 'సముద్ర వాణిజ్య మార్గాన్ని చూడండి'}
                    >
                      <img 
                        src={cData.maritimeMapImage} 
                        alt="Maritime Trade Map" 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      </div>
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-black/75 text-[#FFE082] border border-[#D4AF37]/50 shadow-xs backdrop-blur-xs">
                        ⛵ {isEn ? 'Trade Route' : 'వాణిజ్య మార్గం'}
                      </span>
                    </div>

                    <div className="sm:col-span-7 space-y-1.5">
                      <span className="text-[10px] font-bold text-[#8D6E63] uppercase block">
                        {isEn ? 'Merchant Guilds & Kaveri Delta:' : 'వర్తక సంఘాలు & కావేరి డెల్టా:'}
                      </span>
                      <ul className="text-xs text-[#5D4037] space-y-1">
                        {(isEn ? cData.economyAndTradeEn : cData.economyAndTradeTe).map((ec, ecIdx) => (
                          <li key={ecIdx} className="flex items-start gap-1">
                            <span className="text-[#B45309] font-bold">•</span>
                            <span className="leading-snug">{ec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Points Summary Checklist */}
                <div className="md:col-span-5 bg-[#FFFBEB] rounded-2xl p-4 sm:p-5 border-2 border-[#FCD34D] shadow-xs space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-[#FDE68A] pb-2">
                      <Sparkles className="w-4 h-4 text-[#B45309]" />
                      <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wide">
                        {isEn ? 'Key Points & Enduring Impact' : 'చోళుల ప్రధాన ముఖ్యాంశాలు'}
                      </h4>
                    </div>

                    <ul className="text-xs text-[#78350F] space-y-2 pt-2">
                      {(isEn ? cData.keyPointsEn : cData.keyPointsTe).map((kp, kpIdx) => (
                        <li key={kpIdx} className="flex items-start gap-1.5">
                          <span className="text-[#B45309] font-bold">★</span>
                          <span className="leading-snug">{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[11px] text-[#92400E] italic text-center pt-2 border-t border-[#FDE68A]">
                    {isEn 
                      ? '“The Cholas left behind a legacy of power, culture and governance that continues to inspire even today.”'
                      : '“పాలన, కళ, వాస్తు, సంస్కృతి రంగాలలో చోళులు అందించిన శాశ్వత వారసత్వం నేటికీ స్ఫూర్తిదాయకం.”'}
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* MODAL BOTTOM BAR */}
        {/* ============================================================ */}
        <div className="bg-[#FFF8E1] border-t-2 border-[#D4AF37]/50 p-3 sm:px-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (activeTab === 'pallavas') {
                  handleImageClick(
                    './images/indian_history/pallava_dynasty_infographic.jpg',
                    isEn ? 'Pallava Dynasty Infographic Poster' : 'పల్లవ రాజవంశం సమగ్ర మూల చార్ట్',
                    isEn ? 'Builders of a Glorious South India (c. 275 CE – 897 CE)' : 'దక్షిణ భారతదేశంలో పల్లవుల కళ, వాస్తు మరియు శాసనాలు'
                  );
                } else {
                  handleImageClick(
                    './images/indian_history/chola_dynasty_infographic.jpg',
                    isEn ? 'Chola Dynasty Infographic Poster' : 'చోళ సామ్రాజ్యం సమగ్ర మూల చార్ట్',
                    isEn ? 'Architects of a Golden South (9th – 13th Century CE)' : 'తంజావూరు చోళుల పరిపాలన, నౌకాదళం మరియు ఆలయాలు'
                  );
                }
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#5C0D0E] flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
              <span>{isEn ? 'Inspect Full HD Infographic' : 'మూల ఇన్ఫోగ్రాఫిక్ చార్ట్ చూడండి'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-[#4A0012] cursor-pointer shadow-sm transition-colors"
          >
            {isEn ? 'Close Window (వివరాలు మూసివేయండి)' : 'వివరాలు మూసివేయండి (Close)'}
          </button>
        </div>

      </div>
    </div>
  );
};
