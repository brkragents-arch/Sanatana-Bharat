import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import {
  ANCIENT_UNIVERSITIES_DATA,
  ANCIENT_SCIENTISTS_DATA,
  INDIAN_MATHEMATICIANS_DATA,
  ACHARYA_PINGALA_DATA,
  ACHARYA_CHANAKYA_DATA,
  MODERN_SCIENTISTS_DATA
} from '../../data/ancientIndianScienceData';
import {
  Search,
  Maximize2,
  MapPin,
  Compass,
  ExternalLink,
  Clock
} from 'lucide-react';

interface Props {
  onOpenLightbox?: (img: { src: string; title: string; subtitle: string }) => void;
}

export const IndianSciencesUniversitiesSection: React.FC<Props> = ({ onOpenLightbox }) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  type SectionFilter = 'all' | 'universities' | 'ancient_scientists' | 'mathematicians' | 'pingala' | 'chanakya' | 'modern_scientists';
  const [activeSection, setActiveSection] = useState<SectionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered lists
  const filteredUniversities = useMemo(() => {
    if (!searchQuery.trim()) return ANCIENT_UNIVERSITIES_DATA;
    const q = searchQuery.toLowerCase();
    return ANCIENT_UNIVERSITIES_DATA.filter(u =>
      u.nameEn.toLowerCase().includes(q) || u.nameTe.includes(q) ||
      u.founderEn.toLowerCase().includes(q) || u.founderTe.includes(q) ||
      u.locationEn.toLowerCase().includes(q) || u.locationTe.includes(q) ||
      u.knownForEn.some(k => k.toLowerCase().includes(q)) ||
      u.knownForTe.some(k => k.includes(q))
    );
  }, [searchQuery]);

  const filteredAncientScientists = useMemo(() => {
    if (!searchQuery.trim()) return ANCIENT_SCIENTISTS_DATA;
    const q = searchQuery.toLowerCase();
    return ANCIENT_SCIENTISTS_DATA.filter(s =>
      s.nameEn.toLowerCase().includes(q) || s.nameTe.includes(q) ||
      s.titleEn.toLowerCase().includes(q) || s.titleTe.includes(q) ||
      s.fieldEn.toLowerCase().includes(q) || s.fieldTe.includes(q) ||
      (s.eraEn && s.eraEn.toLowerCase().includes(q)) ||
      (s.eraTe && s.eraTe.includes(q)) ||
      s.keyDiscoveriesEn.some(d => d.toLowerCase().includes(q)) ||
      s.keyDiscoveriesTe.some(d => d.includes(q))
    );
  }, [searchQuery]);

  const filteredMathematicians = useMemo(() => {
    if (!searchQuery.trim()) return INDIAN_MATHEMATICIANS_DATA;
    const q = searchQuery.toLowerCase();
    return INDIAN_MATHEMATICIANS_DATA.filter(m =>
      m.nameEn.toLowerCase().includes(q) || m.nameTe.includes(q) ||
      m.titleEn.toLowerCase().includes(q) || m.titleTe.includes(q) ||
      m.majorContributionEn.toLowerCase().includes(q) || m.majorContributionTe.includes(q) ||
      m.knownForEn.some(k => k.toLowerCase().includes(q)) ||
      m.knownForTe.some(k => k.includes(q))
    );
  }, [searchQuery]);

  const filteredModernScientists = useMemo(() => {
    if (!searchQuery.trim()) return MODERN_SCIENTISTS_DATA;
    const q = searchQuery.toLowerCase();
    return MODERN_SCIENTISTS_DATA.filter(s =>
      s.nameEn.toLowerCase().includes(q) || s.nameTe.includes(q) ||
      s.titleEn.toLowerCase().includes(q) || s.titleTe.includes(q) ||
      s.keyAchievementsEn.some(a => a.toLowerCase().includes(q)) ||
      s.keyAchievementsTe.some(a => a.includes(q))
    );
  }, [searchQuery]);

  const handleOpenImage = (src: string, title: string, subtitle: string) => {
    if (onOpenLightbox) {
      onOpenLightbox({ src, title, subtitle });
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-8 bg-gradient-to-b from-[#FFFDF7] via-[#FAF7F0] to-[#FFFDF7]">
      
      {/* 1. SECTION BANNER & CONTROLS */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#5B0B14] p-5 sm:p-7 rounded-2xl border-2 border-[#D4AF37] text-[#FFE082] shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10 pointer-events-none flex items-center justify-center text-9xl">
          🏛️
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#FFE082] text-[#7B1113] text-xs font-extrabold uppercase tracking-wider shadow-sm">
              {isEn ? 'Knowledge Capitals & Scientific Genius of Bharat' : 'భారతీయ విజ్ఞాన, శాస్త్ర & విద్యా వైభవ నిధి'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold">
              {isEn ? 'Vedas to Quantum Era' : 'వేద కాలం నుండి క్వాంటమ్ యుగం వరకు'}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold font-telugu-serif text-white tracking-tight">
            {isEn ? 'Ancient Universities, Scientists & Mathematicians of Bharat' : 'ప్రాచీన విద్యాపీఠాలు, గణిత మేధావులు & యుగపురుషులైన శాస్త్రవేత్తలు'}
          </h2>

          <p className="text-xs sm:text-sm text-[#FFE082]/90 max-w-4xl leading-relaxed">
            {isEn 
              ? 'Centres of Knowledge, Legacy for Millennia: Explore Nalanda, Takshashila, Vikramshila & Valabhi universities, along with pioneering sages like Charaka, Sushruta, Kanada, Aryabhata, Acharya Pingala (creator of Binary code), Kerala School calculus giants, and modern world-changers like C. V. Raman and Kalam.'
              : 'వేల ఏళ్ల జ్ఞాన వారసత్వం: నలందా, తక్షశిల, విక్రమశిల, వల్లభి విశ్వవిద్యాలయాలు, చరకుడు, సుశ్రుతుడు, కణాదుడు, ఆర్యభట్టు, బైనరీ కోడ్ సృష్టికర్త ఆచార్య పింగళుడు, కేరళ గణిత పాఠశాల మేధావులు మరియు సి.వి. రామన్, అబ్దుల్ కలాం వంటి ఆధునిక నోబెల్ విజేతల సమగ్ర సమాచార వేదిక.'}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
            <div className="bg-black/25 p-2 rounded-xl border border-[#D4AF37]/50 text-center">
              <span className="text-lg sm:text-xl font-extrabold text-[#FFE082] block leading-none">4</span>
              <span className="text-[10px] text-white/90 font-medium">{isEn ? 'Ancient Universities' : 'మహా విద్యాపీఠాలు'}</span>
            </div>
            <div className="bg-black/25 p-2 rounded-xl border border-[#D4AF37]/50 text-center">
              <span className="text-lg sm:text-xl font-extrabold text-[#FFE082] block leading-none">7</span>
              <span className="text-[10px] text-white/90 font-medium">{isEn ? 'Ancient Scientists' : 'ప్రాచీన శాస్త్రవేత్తలు'}</span>
            </div>
            <div className="bg-black/25 p-2 rounded-xl border border-[#D4AF37]/50 text-center">
              <span className="text-lg sm:text-xl font-extrabold text-[#FFE082] block leading-none">10</span>
              <span className="text-[10px] text-white/90 font-medium">{isEn ? 'Mathematicians' : 'గణిత మేధావులు'}</span>
            </div>
            <div className="bg-black/25 p-2 rounded-xl border border-[#D4AF37]/50 text-center">
              <span className="text-lg sm:text-xl font-extrabold text-[#FFE082] block leading-none">Binary</span>
              <span className="text-[10px] text-white/90 font-medium">{isEn ? 'Pingala (0 & 1)' : 'పింగళుని బైనరీ కోడ్'}</span>
            </div>
            <div className="bg-black/25 p-2 rounded-xl border border-[#D4AF37]/50 text-center col-span-2 sm:col-span-1">
              <span className="text-lg sm:text-xl font-extrabold text-[#FFE082] block leading-none">10</span>
              <span className="text-[10px] text-white/90 font-medium">{isEn ? 'Modern Pioneers' : 'ఆధునిక శాస్త్రవేత్తలు'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUB-SECTION FILTER BUTTONS & SEARCH */}
      <div className="bg-[#FFFFFF] p-3.5 sm:p-4 rounded-2xl border border-[#E8DCC4] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeSection === 'all'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            {isEn ? 'All Sections' : 'అన్ని విభాగాలు'}
          </button>

          <button
            onClick={() => setActiveSection('universities')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'universities'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>🏛️</span>
            <span>{isEn ? 'Ancient Universities' : 'విశ్వవిద్యాలయాలు'}</span>
          </button>

          <button
            onClick={() => setActiveSection('ancient_scientists')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'ancient_scientists'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>🔬</span>
            <span>{isEn ? 'Ancient Scientists' : 'ప్రాచీన శాస్త్రవేత్తలు'}</span>
          </button>

          <button
            onClick={() => setActiveSection('mathematicians')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'mathematicians'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>🔢</span>
            <span>{isEn ? 'Mathematicians' : 'గణిత మేధావులు'}</span>
          </button>

          <button
            onClick={() => setActiveSection('pingala')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'pingala'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>💻</span>
            <span>{isEn ? 'Acharya Pingala & Binary' : 'పింగళుని బైనరీ కోడ్'}</span>
          </button>

          <button
            onClick={() => setActiveSection('chanakya')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'chanakya'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>📜</span>
            <span>{isEn ? 'Books by Chanakya' : 'చాణక్యుని గ్రంథాలు'}</span>
          </button>

          <button
            onClick={() => setActiveSection('modern_scientists')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'modern_scientists'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30'
            }`}
          >
            <span>🚀</span>
            <span>{isEn ? 'Modern Pioneers' : 'ఆధునిక శాస్త్రవేత్తలు'}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-[#8D6E63] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={isEn ? 'Search scientists, math, discoveries...' : 'శాస్త్రవేత్తలు, విద్యాపీఠాలు, ఆవిష్కరణల అన్వేషణ...'}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-[#FAF7F0] border border-[#D4AF37]/60 focus:outline-none focus:ring-2 focus:ring-[#7B1113]"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. SECTION 1: ANCIENT UNIVERSITIES OF BHARAT */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'universities') && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🏛️</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Ancient Universities of Bharat (Centres of Knowledge)' : 'భారతీయ ప్రాచీన విశ్వవిద్యాలయాలు (జ్ఞాన నిధులు)'}
                </h3>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'World-class residential learning hubs with well-planned campuses, vast multi-storey libraries, and global students' 
                    : 'ప్రపంచ ప్రసిద్ధ రెసిడెన్షియల్ ప్రాంగణాలు, 9 అంతస్తుల గ్రంథాలయాలు మరియు అంతర్జాతీయ విద్యార్థులకు నిలయం'}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/ancient_universities_bharat.jpg',
                isEn ? 'Ancient Universities of Bharat' : 'భారతీయ ప్రాచీన విశ్వవిద్యాలయాలు',
                isEn ? 'Nalanda, Takshashila, Vikramshila & Valabhi' : 'నలందా, తక్షశిల, విక్రమశిల, వల్లభి మూల సమాచార పటం'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredUniversities.map((uni) => (
              <div
                key={uni.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all p-4 sm:p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  
                  {/* Divided Frame: Two Columns (1: Campus Photo, 2: University Location) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2.5 rounded-xl bg-[#FAF7F0] border-2 border-[#D4AF37]/50 shadow-xs">
                    {/* Column 1: University Photo */}
                    <div 
                      onClick={() => handleOpenImage(uni.image, isEn ? uni.nameEn : uni.nameTe, isEn ? uni.founderEn : uni.founderTe)}
                      className="relative h-48 sm:h-56 w-full bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/70 flex flex-col justify-end"
                    >
                      <img 
                        src={uni.image} 
                        alt={isEn ? uni.nameEn : uni.nameTe} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs p-2 text-center bg-black/40">
                        <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                        <span>{isEn ? 'Enlarge Photo' : 'చిత్రం పెద్దదిగా చూడండి'}</span>
                      </div>
                      <div className="relative m-2 px-2 py-1 rounded bg-black/80 text-[#FFE082] text-[10px] font-bold border border-[#D4AF37]/60 backdrop-blur-xs flex items-center gap-1.5 self-start">
                        <span>{uni.icon}</span>
                        <span>{isEn ? 'Campus View' : 'విశ్వవిద్యాలయ ప్రాంగణం'}</span>
                      </div>
                    </div>

                    {/* Column 2: University Location & Geographic Setting */}
                    <div className="h-48 sm:h-56 w-full bg-[#FFFDF7] rounded-lg p-2.5 sm:p-3 border border-[#E8DCC4] flex flex-col justify-between overflow-y-auto shadow-2xs">
                      <div className="space-y-1.5">
                        {/* Header with coordinates */}
                        <div className="flex items-center justify-between gap-1 border-b border-[#E8DCC4] pb-1.5">
                          <div className="flex items-center gap-1.5 text-[#7B1113] font-bold text-xs">
                            <span className="p-1 rounded bg-[#FFF8E1] text-[#D84315] border border-[#FFE082]">
                              <MapPin className="w-3.5 h-3.5" />
                            </span>
                            <span>{isEn ? 'Location & Geography' : 'భౌగోళిక స్థానం'}</span>
                          </div>
                          {uni.locationDetails?.coordinates && (
                            <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#FAF7F0] text-[#5D4037] border border-[#E8DCC4]">
                              {uni.locationDetails.coordinates}
                            </span>
                          )}
                        </div>

                        {/* Modern Location */}
                        <div className="text-[11px] leading-snug">
                          <span className="font-extrabold text-[#7B1113] block text-[9.5px] uppercase tracking-wider">
                            {isEn ? '📍 Modern Region:' : '📍 ప్రస్తుత ప్రదేశం:'}
                          </span>
                          <span className="text-[#2C1810] font-semibold">
                            {isEn ? (uni.locationDetails?.modernRegionEn || uni.locationEn) : (uni.locationDetails?.modernRegionTe || uni.locationTe)}
                          </span>
                        </div>

                        {/* Ancient Realm */}
                        {uni.locationDetails?.ancientKingdomEn && (
                          <div className="text-[11px] leading-snug">
                            <span className="font-extrabold text-[#7B1113] block text-[9.5px] uppercase tracking-wider">
                              {isEn ? '🏛️ Ancient Realm / Kingdom:' : '🏛️ ప్రాచీన సామ్రాజ్యం / రాజ్యం:'}
                            </span>
                            <span className="text-[#5D4037]">
                              {isEn ? uni.locationDetails.ancientKingdomEn : uni.locationDetails.ancientKingdomTe}
                            </span>
                          </div>
                        )}

                        {/* Terrain / Route Significance */}
                        {uni.locationDetails?.geographicSignificanceEn && (
                          <div className="text-[10px] leading-tight text-[#5D4037] bg-[#FFF8E1]/80 p-1.5 rounded border border-[#FFE082]/70">
                            <strong className="text-[#D84315] block text-[9px] uppercase tracking-wider">
                              {isEn ? '🧭 Terrain & Strategic Route:' : '🧭 భౌగోళిక విశేషం & కూడలి:'}
                            </strong>
                            <span>
                              {isEn ? uni.locationDetails.geographicSignificanceEn : uni.locationDetails.geographicSignificanceTe}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* View on Map Link */}
                      {uni.locationDetails?.mapUrl && (
                        <a
                          href={uni.locationDetails.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 w-full py-1 px-2 rounded-md bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs group"
                        >
                          <Compass className="w-3 h-3 text-[#D84315] group-hover:rotate-45 transition-transform" />
                          <span>{isEn ? 'View on Google Maps' : 'గూగుల్ మ్యాప్స్‌లో చూడండి'}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-[#5D4037]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-2 pt-1">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-[#7B1113] font-telugu-serif">
                        {isEn ? uni.nameEn : uni.nameTe}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#D84315] block">
                        {isEn ? uni.periodEn : uni.periodTe}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/60 shrink-0">
                      {isEn ? uni.locationEn.split(',')[0] : uni.locationTe.split(',')[0]}
                    </span>
                  </div>

                  {/* Founder & Royal Patronage */}
                  <div className="text-xs text-[#5D4037] bg-[#FFFDF7] p-2 rounded-xl border border-[#E8DCC4] space-y-1">
                    <div>
                      <strong className="text-[#7B1113]">{isEn ? 'Founder / Royal Patronage: ' : 'స్థాపన / రాజ పోషణ: '}</strong>
                      <span>{isEn ? uni.founderEn : uni.founderTe}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#2C1810] leading-relaxed">
                    {isEn ? uni.descriptionEn : uni.descriptionTe}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                      {isEn ? 'Campus Highlights & Architecture:' : 'ప్రధాన విశేషాలు & ప్రాంగణ ఘనత:'}
                    </span>
                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                      {(isEn ? uni.highlightsEn : uni.highlightsTe).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold text-xs">★</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Famous Personalities */}
                  <div className="pt-2 border-t border-[#E8DCC4]">
                    <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block mb-1">
                      {isEn ? 'Famous Personalities & Gurus:' : 'ప్రముఖ ఆచార్యులు & విద్వాంసులు:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isEn ? uni.famousPersonalitiesEn : uni.famousPersonalitiesTe).map((p, pIdx) => (
                        <span key={pIdx} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]/50">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Known For Footer Badges */}
                <div className="pt-2.5 border-t border-[#E8DCC4] flex flex-wrap gap-1 items-center">
                  <span className="text-[10px] font-bold text-[#5D4037] mr-1">
                    {isEn ? 'Key Disciplines:' : 'ప్రధాన విభాగాలు:'}
                  </span>
                  {(isEn ? uni.knownForEn : uni.knownForTe).map((k, kIdx) => (
                    <span key={kIdx} className="px-1.5 py-0.5 rounded text-[10px] bg-[#FAF7F0] text-[#D84315] border border-[#E8DCC4]">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. SECTION 2: ANCIENT INDIAN SCIENTISTS & DISCOVERIES */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'ancient_scientists') && (
        <div className="space-y-4 pt-4 border-t-2 border-[#E8DCC4]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Ancient Indian Scientists and Their Discoveries' : 'ప్రాచీన భారతీయ శాస్త్రవేత్తలు మరియు వారి మహోన్నత ఆవిష్కరణలు'}
                </h3>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'Founders of Medicine, Surgery, Gravity, Atomic Theory, Astronomy, and the concept of Zero' 
                    : 'వైద్యం, శస్త్రచికిత్స, గురుత్వాకర్షణ, పరమాణు సిద్ధాంతం, ఖగోళం మరియు సున్నాలకు మూలపురుషులు'}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/ancient_indian_scientists.jpg',
                isEn ? 'Ancient Indian Scientists and Their Discoveries' : 'ప్రాచీన భారతీయ శాస్త్రవేత్తలు & ఆవిష్కరణలు',
                isEn ? 'Charaka, Varahamihira, Bhaskara, Kalidasa, Kanada, Aryabhatta, Sushruta' : 'చరకుడు, వరాహమిహిరుడు, భాస్కరుడు, కాళిదాసు, కణాదుడు, ఆర్యభట్టు, సుశ్రుతుడు'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAncientScientists.map((sc) => (
              <div
                key={sc.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all p-4 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  
                  {/* Portrait Photo */}
                  <div 
                    onClick={() => handleOpenImage(
                      sc.image, 
                      isEn ? sc.nameEn : sc.nameTe, 
                      `${isEn ? sc.titleEn : sc.titleTe}${sc.eraEn ? ` (${isEn ? sc.eraEn : sc.eraTe})` : ''}`
                    )}
                    className="relative h-44 w-full bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/60"
                  >
                    <img 
                      src={sc.image} 
                      alt={isEn ? sc.nameEn : sc.nameTe} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Click to Enlarge Portrait' : 'చిత్రం పెద్దదిగా చూడండి'}</span>
                    </div>
                    {/* Top Right: Title badge */}
                    <div 
                      title={isEn ? sc.titleEn : sc.titleTe}
                      className="absolute top-2 right-2 max-w-[85%] truncate px-2 py-0.5 rounded text-[10px] font-bold bg-[#7B1113]/95 text-[#FFE082] border border-[#D4AF37] shadow-xs backdrop-blur-xs z-10"
                    >
                      {isEn ? sc.titleEn : sc.titleTe}
                    </div>

                    {/* Bottom Left: Era badge (Separated to bottom to completely prevent any overlapping) */}
                    {sc.eraEn && (
                      <div 
                        title={isEn ? sc.eraEn : sc.eraTe}
                        className="absolute bottom-2 left-2 max-w-[85%] truncate px-2 py-0.5 rounded text-[10px] font-bold bg-[#0F284E]/95 text-[#FFE082] border border-[#64B5F6]/70 shadow-xs flex items-center gap-1 backdrop-blur-xs z-10"
                      >
                        <Clock className="w-3 h-3 text-[#FFE082] shrink-0" />
                        <span className="truncate">{isEn ? sc.eraEn : sc.eraTe}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                          {isEn ? sc.nameEn : sc.nameTe}
                        </h4>
                        {sc.eraEn && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1 shadow-2xs">
                            <Clock className="w-2.5 h-2.5 text-[#D84315]" />
                            <span>{isEn ? sc.eraEn : sc.eraTe}</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-[#D84315] block">
                        {isEn ? sc.fieldEn : sc.fieldTe}
                      </span>
                    </div>
                    <span className="text-2xl shrink-0">{sc.icon}</span>
                  </div>

                  {/* Major Works */}
                  <div className="bg-[#FAF7F0] p-2 rounded-xl border border-[#E8DCC4] text-xs">
                    <strong className="text-[#7B1113] block text-[10px] uppercase tracking-wider mb-0.5">
                      {isEn ? 'Major Treatises / Works:' : 'ప్రధాన గ్రంథ రచనలు:'}
                    </strong>
                    <span className="text-[#5D4037] font-medium">
                      {(isEn ? sc.majorWorksEn : sc.majorWorksTe).join(', ')}
                    </span>
                  </div>

                  {/* Key Discoveries */}
                  <div className="space-y-1">
                    <strong className="text-[#7B1113] block text-[10px] uppercase tracking-wider">
                      {isEn ? 'Key Discoveries & Theorems:' : 'ప్రధాన ఆవిష్కరణలు & సిద్ధాంతాలు:'}
                    </strong>
                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                      {(isEn ? sc.keyDiscoveriesEn : sc.keyDiscoveriesTe).map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quote / Legacy */}
                <div className="pt-2 border-t border-[#E8DCC4] text-[11px] text-[#5D4037] italic bg-[#FFFDF7] p-2 rounded-lg">
                  "{isEn ? sc.quoteOrLegacyEn : sc.quoteOrLegacyTe}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. SECTION 3: INDIAN MATHEMATICIANS EXPLAINED (10 MINDS) */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'mathematicians') && (
        <div className="space-y-4 pt-4 border-t-2 border-[#E8DCC4]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🔢</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Indian Mathematicians Explained (Brilliant Minds, Timeless Theories)' : 'భారతీయ గణిత శాస్త్రవేత్తల సమగ్ర విశ్లేషణ (కాలాతీత సిద్ధాంతాలు)'}
                </h3>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'From Baudhayana and Brahmagupta to Madhava of Kerala and Ramanujan: The pioneers who solved problems shaping world science' 
                    : 'బౌధాయనుడు, బ్రహ్మగుప్తుడు నుండి కేరళ మాధవుడు, రామానుజన్ వరకు: ప్రపంచ గణిత గతిని మార్చిన 10 మంది దిగ్గజాలు'}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/indian_mathematicians_explained.jpg',
                isEn ? 'Indian Mathematicians Explained' : 'భారతీయ గణిత శాస్త్రవేత్తల సమగ్ర చార్ట్',
                isEn ? 'Baudhayana, Aryabhata, Brahmagupta, Bhaskara, Mahavira, Nilakantha, Madhava, Ramanujan, Kaprekar, Deshpande' : '10 మంది ప్రఖ్యాత భారతీయ గణితవేత్తల సిద్ధాంతాల పటం'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredMathematicians.map((m) => (
              <div
                key={m.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all p-4 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 border-b border-[#E8DCC4] pb-2">
                    <div 
                      onClick={() => handleOpenImage(m.image, isEn ? m.nameEn : m.nameTe, isEn ? m.titleEn : m.titleTe)}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#2C1810] overflow-hidden shrink-0 border-2 border-[#D4AF37] cursor-pointer group relative shadow-xs"
                      title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img 
                        src={m.image} 
                        alt={isEn ? m.nameEn : m.nameTe} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                      </div>
                      <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] font-bold text-[10px] flex items-center justify-center shadow-xs">
                        {m.number}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif truncate">
                          {isEn ? m.nameEn : m.nameTe}
                        </h4>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#FAF7F0] text-[#D84315] border border-[#E8DCC4] shrink-0">
                          {isEn ? m.periodEn : m.periodTe}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#D84315] block mt-0.5">
                        {isEn ? m.titleEn : m.titleTe}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FFFDF7] p-2 rounded-xl border border-[#E8DCC4]">
                    {isEn ? m.majorContributionEn : m.majorContributionTe}
                  </p>

                  {/* Known For */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                      {isEn ? 'Breakthroughs & Formulas:' : 'ప్రధాన సూత్రాలు & ఆవిష్కరణలు:'}
                    </span>
                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                      {(isEn ? m.knownForEn : m.knownForTe).map((k, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Formula Highlight Pill & Quote */}
                <div className="pt-2 border-t border-[#E8DCC4] space-y-1.5">
                  {m.formulaOrDiagram && (
                    <div className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] border border-[#D4AF37] text-center font-mono font-bold text-xs text-[#7B1113] shadow-2xs">
                      {m.formulaOrDiagram}
                    </div>
                  )}
                  {m.quoteEn && (
                    <p className="text-[10px] text-[#5D4037] italic text-center">
                      "{isEn ? m.quoteEn : m.quoteTe}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. SECTION 4: ACHARYA PINGALA - BINARY CODE & CHHANDAS */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'pingala') && (
        <div className="space-y-4 pt-4 border-t-2 border-[#E8DCC4]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">💻</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? ACHARYA_PINGALA_DATA.nameEn : ACHARYA_PINGALA_DATA.nameTe} – {isEn ? 'The Binary System & Chhandahshastra' : 'బైనరీ సంఖ్యా విధానం & ఛందశ్శాస్త్రం'}
                </h3>
                <p className="text-xs text-[#5D4037]">
                  {isEn ? ACHARYA_PINGALA_DATA.titleEn : ACHARYA_PINGALA_DATA.titleTe} ({isEn ? ACHARYA_PINGALA_DATA.eraEn : ACHARYA_PINGALA_DATA.eraTe})
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/acharya_pingala_binary.jpg',
                isEn ? 'Acharya Pingala: The Great Sage of Indian Mathematics and Prosody' : 'ఆచార్య పింగళుడు: బైనరీ సంఖ్యా విధానం & ఛందశ్శాస్త్రం',
                isEn ? 'Chhandahshastra, Binary Counting Table (0 & 1), Meru Prastara (Pascal Triangle)' : 'లఘువు (0), గురువు (1) బైనరీ కోడ్ మరియు ఆధునిక కంప్యూటర్ సైన్స్ మూలాలు'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Left: Pingala Overview & Major Contributions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xs flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div 
                  onClick={() => handleOpenImage(ACHARYA_PINGALA_DATA.image, isEn ? ACHARYA_PINGALA_DATA.nameEn : ACHARYA_PINGALA_DATA.nameTe, isEn ? ACHARYA_PINGALA_DATA.titleEn : ACHARYA_PINGALA_DATA.titleTe)}
                  className="relative w-44 sm:w-52 h-56 sm:h-64 bg-[#2C1810] rounded-2xl overflow-hidden cursor-pointer group shadow-md border-2 border-[#D4AF37] shrink-0"
                  title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                >
                  <img 
                    src={ACHARYA_PINGALA_DATA.image} 
                    alt={isEn ? ACHARYA_PINGALA_DATA.nameEn : ACHARYA_PINGALA_DATA.nameTe} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                    <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                    <span>{isEn ? 'Enlarge Portrait' : 'చిత్రం పెద్దదిగా'}</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[#FFE082] text-[10px] font-bold text-center border border-[#D4AF37]/40 backdrop-blur-xs">
                    {isEn ? 'Acharya Pingala' : 'ఆచార్య పింగళుడు'}
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#7B1113]">
                    <span>📜</span>
                    <span>{isEn ? ACHARYA_PINGALA_DATA.treatiseEn : ACHARYA_PINGALA_DATA.treatiseTe}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
                    {isEn ? ACHARYA_PINGALA_DATA.summaryEn : ACHARYA_PINGALA_DATA.summaryTe}
                  </p>
                </div>
              </div>

              {/* Major Contributions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(isEn ? ACHARYA_PINGALA_DATA.majorContributionsEn : ACHARYA_PINGALA_DATA.majorContributionsTe).map((c, cIdx) => (
                  <div key={cIdx} className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] shadow-2xs space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                      <span className="w-6 h-6 rounded-md bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] flex items-center justify-center font-mono text-xs shrink-0">
                        {c.icon}
                      </span>
                      <span>{c.title}</span>
                    </div>
                    <p className="text-[11px] text-[#5D4037] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Binary Counting Table & Significance */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Interactive Binary Table (0 and 1) */}
              <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#1B5E20] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1B5E20] font-telugu-serif flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>{isEn ? 'Binary Counting System in Chhandahshastra' : 'పింగళుని బైనరీ సంఖ్యా పట్టిక'}</span>
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F5E9] text-[#1B5E20]">
                    2³ = 8 {isEn ? 'States' : 'రూపాలు'}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className="bg-[#E8F5E9] text-[#1B5E20] border-b border-[#A5D6A7]">
                        <th className="py-1.5 px-2">{isEn ? 'Decimal' : 'సంఖ్య'}</th>
                        <th className="py-1.5 px-2">{isEn ? 'Laghu (0) / Guru (1)' : 'లఘు-గురు రూపం'}</th>
                        <th className="py-1.5 px-2 font-mono">{isEn ? 'Binary Code' : 'బైనరీ కోడ్'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DCC4]">
                      {ACHARYA_PINGALA_DATA.binaryTable.map((row) => (
                        <tr key={row.decimal} className="hover:bg-[#F1F8E9]">
                          <td className="py-1.5 px-2 font-bold text-[#7B1113]">{row.decimal}</td>
                          <td className="py-1.5 px-2 text-[#5D4037] font-semibold">{row.laghuGuru}</td>
                          <td className="py-1.5 px-2 font-mono font-bold text-[#1B5E20] bg-[#F9FBE7]">{row.binary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F1F8E9] p-2.5 rounded-xl border border-[#C8E6C9] text-[11px] text-[#2E7D32] leading-snug">
                  <strong>{isEn ? 'Exact Match to Modern Computer Science: ' : 'ఆధునిక కంప్యూటర్ల బైనరీ కోడ్‌తో పూర్తి సమానం: '}</strong>
                  {isEn 
                    ? 'Laghu (ᴗ) = 0 and Guru (-) = 1 forms the foundational 3-bit logic used in microprocessors today.' 
                    : 'లఘువు = 0, గురువు = 1 అనేది నేటి మైక్రోప్రాసెసర్‌లలో వాడే 3-బిట్ లాజిక్‌కు ఖచ్చితమైన రూపం.'}
                </div>
              </div>

              {/* Significance Cards */}
              <div className="bg-[#FFFDF7] p-3.5 rounded-2xl border border-[#D4AF37]/70 shadow-2xs space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                  {isEn ? 'Significance for Modern Technology:' : 'ఆధునిక ప్రపంచానికి మార్గదర్శనం:'}
                </span>
                <ul className="text-xs text-[#5D4037] space-y-1.5 pl-1">
                  {(isEn ? ACHARYA_PINGALA_DATA.significanceEn : ACHARYA_PINGALA_DATA.significanceTe).map((s, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5">
                      <span className="text-[#1B5E20] font-bold">✔</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6B. SECTION 4B: BOOKS WRITTEN BY ACHARYA CHANAKYA */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'chanakya') && (
        <div className="space-y-5 pt-4 border-t-2 border-[#E8DCC4]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">📜</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                    {isEn ? ACHARYA_CHANAKYA_DATA.headingEn : ACHARYA_CHANAKYA_DATA.headingTe}
                  </h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#0F284E] text-[#FFE082] border border-[#64B5F6]/70 flex items-center gap-1 shadow-2xs">
                    <Clock className="w-3 h-3 text-[#FFE082]" />
                    <span>{isEn ? ACHARYA_CHANAKYA_DATA.eraEn : ACHARYA_CHANAKYA_DATA.eraTe}</span>
                  </span>
                </div>
                <p className="text-xs text-[#5D4037] mt-0.5">
                  {isEn ? ACHARYA_CHANAKYA_DATA.titleEn : ACHARYA_CHANAKYA_DATA.titleTe}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                ACHARYA_CHANAKYA_DATA.posterImage,
                isEn ? ACHARYA_CHANAKYA_DATA.headingEn : ACHARYA_CHANAKYA_DATA.headingTe,
                isEn ? '7 Classic Treatises of Acharya Chanakya (Kautilya)' : 'ఆచార్య చాణక్యుడు రచించిన 7 ప్రసిద్ధ గ్రంథాల మూల సమాచార పటం'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Left Column (5 cols): Chanakya Portrait, Sanskrit Subhashita & Palm-Leaf Manuscripts */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Chanakya Portrait & Bio Card */}
              <div className="bg-gradient-to-b from-[#FFFDF7] to-[#FAF3E0] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div 
                    onClick={() => handleOpenImage(
                      ACHARYA_CHANAKYA_DATA.portraitImage,
                      isEn ? ACHARYA_CHANAKYA_DATA.nameEn : ACHARYA_CHANAKYA_DATA.nameTe,
                      isEn ? ACHARYA_CHANAKYA_DATA.titleEn : ACHARYA_CHANAKYA_DATA.titleTe
                    )}
                    className="relative w-44 sm:w-44 h-60 bg-[#2C1810] rounded-2xl overflow-hidden cursor-pointer group shadow-md border-2 border-[#D4AF37] shrink-0"
                    title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                  >
                    <img 
                      src={ACHARYA_CHANAKYA_DATA.portraitImage} 
                      alt={isEn ? ACHARYA_CHANAKYA_DATA.nameEn : ACHARYA_CHANAKYA_DATA.nameTe} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Enlarge Portrait' : 'చిత్రం పెద్దదిగా'}</span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[#FFE082] text-[10px] font-bold text-center border border-[#D4AF37]/50 backdrop-blur-xs">
                      {isEn ? 'Acharya Chanakya' : 'ఆచార్య చాణక్యుడు'}
                    </div>
                  </div>

                  <div className="space-y-2.5 flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                      {isEn ? 'Takshashila Acharya & Kingmaker' : 'తక్షశిల ఆచార్యుడు & మౌర్య సామ్రాజ్య నిర్మాత'}
                    </span>
                    <h4 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                      {isEn ? ACHARYA_CHANAKYA_DATA.nameEn : ACHARYA_CHANAKYA_DATA.nameTe}
                    </h4>
                    <p className="text-xs text-[#2C1810] leading-relaxed">
                      {isEn ? ACHARYA_CHANAKYA_DATA.summaryEn : ACHARYA_CHANAKYA_DATA.summaryTe}
                    </p>
                  </div>
                </div>
              </div>

              {/* Famous Sanskrit Subhashita on Vidya (Extracted Parchment + Translation) */}
              <div className="bg-gradient-to-r from-[#FFF8E7] via-[#FFFDF7] to-[#FFF3D6] p-4 rounded-2xl border-2 border-[#C99700] shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                  <span className="text-xs font-extrabold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                    <span>🪶</span>
                    <span>{isEn ? 'Chanakya’s Immortal Verse on Knowledge (Vidya)' : 'విద్యా వైభవంపై ఆచార్య చాణక్యుని అమర శ్లోకం'}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* Extracted Sloka Parchment Image */}
                  <div 
                    onClick={() => handleOpenImage(
                      ACHARYA_CHANAKYA_DATA.slokaImage,
                      isEn ? 'Vidya Mulam Sarvadhanam – Chanakya Subhashita' : 'విద్యా మూలం సర్వధనం – చాణక్య సుభాషితం',
                      isEn ? ACHARYA_CHANAKYA_DATA.slokaMeaningEn : ACHARYA_CHANAKYA_DATA.slokaMeaningTe
                    )}
                    className="sm:col-span-5 h-36 rounded-xl overflow-hidden border-2 border-[#D4AF37] bg-[#2C1810] cursor-pointer group relative shadow-xs flex items-center justify-center p-1"
                  >
                    <img 
                      src={ACHARYA_CHANAKYA_DATA.slokaImage} 
                      alt="Chanakya Sanskrit Sloka" 
                      className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                    </div>
                  </div>

                  {/* Shloka Text in Sanskrit & Telugu */}
                  <div className="sm:col-span-7 space-y-2">
                    <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-[#D4AF37]/60 text-xs font-bold text-[#7B1113] leading-relaxed font-telugu-serif">
                      {(isEn ? ACHARYA_CHANAKYA_DATA.slokaSanskrit : ACHARYA_CHANAKYA_DATA.slokaTeluguScript).map((line, idx) => (
                        <div key={idx} className={idx === 4 ? 'text-right text-[#D84315] text-[11px] mt-1' : ''}>
                          {line}
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#5D4037] italic leading-snug bg-[#FAF7F0] p-2 rounded-lg border border-[#E8DCC4]">
                      <strong>{isEn ? 'Meaning: ' : 'తాత్పర్యం: '}</strong>
                      {isEn ? ACHARYA_CHANAKYA_DATA.slokaMeaningEn : ACHARYA_CHANAKYA_DATA.slokaMeaningTe}
                    </p>
                  </div>
                </div>

                {/* Ancient Palm-Leaf Manuscript Bundles Illustration */}
                <div className="flex items-center gap-3 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E8DCC4]">
                  <div 
                    onClick={() => handleOpenImage(
                      ACHARYA_CHANAKYA_DATA.manuscriptsImage,
                      isEn ? 'Ancient Palm-Leaf Manuscripts (Tala-Patra Granthas)' : 'ప్రాచీన తాళపత్ర గ్రంథ సంపుటాలు',
                      isEn ? 'Preserving Chanakya’s treatises across millennia' : 'వేల ఏళ్లుగా భద్రపరచబడిన చాణక్య తాళపత్ర గ్రంథాలు'
                    )}
                    className="w-24 h-16 rounded-lg overflow-hidden border border-[#D4AF37] bg-[#2C1810] shrink-0 cursor-pointer group relative"
                  >
                    <img 
                      src={ACHARYA_CHANAKYA_DATA.manuscriptsImage} 
                      alt="Palm Leaf Manuscripts" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-[#5D4037] leading-snug">
                    {isEn 
                      ? 'Preserved on palm-leaf manuscripts (Tala-patra), Chanakya’s Arthashastra was rediscovered in 1905 by Rudrapatna Shamasastry at the Oriental Research Institute, Mysuru.'
                      : 'తాళపత్ర గ్రంథాలపై భద్రపరచబడిన కౌటిల్యుని "అర్థశాస్త్రము" సా.శ. 1905లో మైసూరు ఓరియంటల్ రీసెర్చ్ ఇన్‌స్టిట్యూట్‌లో పండిత రుద్రపట్న శ్యామశాస్త్రి గారిచే పునరావిష్కరించబడి ప్రపంచ ప్రసిద్ధి చెందింది.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): The 7 Books Written by Chanakya */}
            <div className="lg:col-span-7 space-y-3">
              <div className="bg-[#7B1113] text-[#FFE082] px-4 py-2.5 rounded-xl border border-[#D4AF37] flex items-center justify-between shadow-xs">
                <span className="font-bold text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                  <span>📚</span>
                  <span>{isEn ? '7 Immortal Treatises Written / Attributed to Acharya Chanakya' : 'ఆచార్య చాణక్యుడు రచించిన 7 ప్రసిద్ధ గ్రంథాలు'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-extrabold">
                  7 {isEn ? 'Works' : 'గ్రంథాలు'}
                </span>
              </div>

              <div className="space-y-2.5">
                {ACHARYA_CHANAKYA_DATA.books.map((book) => (
                  <div 
                    key={book.number}
                    className="bg-gradient-to-r from-[#FFFDF7] via-[#FAF5E8] to-[#F5EBD6] rounded-xl border-2 border-[#D4AF37]/80 hover:border-[#7B1113] p-3 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-3"
                  >
                    {/* Left: Number Badge + Title + Description */}
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#6D2812] to-[#3E1305] text-[#FFE082] border-2 border-[#D4AF37] font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        {book.number}
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="font-extrabold text-sm sm:text-base text-[#3E1305] font-telugu-serif">
                            {isEn ? book.titleEn : book.titleTe}
                          </h5>
                          {book.attributed && (
                            <span className="px-2 py-0.5 rounded-full bg-[#FFF3E0] text-[#D84315] border border-[#FFAB91] text-[10px] font-bold">
                              {isEn ? 'Attributed' : 'ఆపాదించబడినది'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#4E342E] leading-relaxed">
                          {isEn ? book.descriptionEn : book.descriptionTe}
                        </p>
                      </div>
                    </div>

                    {/* Right: Extracted & Enhanced Book Emblem from Source Poster */}
                    <div 
                      onClick={() => handleOpenImage(
                        book.iconImage,
                        isEn ? `${book.number}. ${book.titleEn}` : `${book.number}. ${book.titleTe}`,
                        isEn ? book.descriptionEn : book.descriptionTe
                      )}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 border-[#C99700] bg-[#EEDBB3] shrink-0 cursor-pointer group relative shadow-xs flex items-center justify-center p-0.5"
                      title={isEn ? 'Click to enlarge emblem' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img 
                        src={book.iconImage} 
                        alt={isEn ? book.titleEn : book.titleTe} 
                        className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Legacy Banner with Extracted Glowing Lamp */}
              <div className="bg-gradient-to-r from-[#3E1305] via-[#5D1E0A] to-[#3E1305] rounded-2xl border-2 border-[#D4AF37] p-3.5 text-[#FFE082] flex items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-xl shrink-0">⚜️</span>
                  <p className="text-xs sm:text-sm font-semibold italic leading-relaxed">
                    “{isEn ? ACHARYA_CHANAKYA_DATA.legacyQuoteEn : ACHARYA_CHANAKYA_DATA.legacyQuoteTe}”
                  </p>
                </div>
                <div 
                  onClick={() => handleOpenImage(
                    ACHARYA_CHANAKYA_DATA.lampImage,
                    isEn ? 'Lamp of Eternal Wisdom' : 'శాశ్వత జ్ఞాన జ్యోతి',
                    isEn ? ACHARYA_CHANAKYA_DATA.legacyQuoteEn : ACHARYA_CHANAKYA_DATA.legacyQuoteTe
                  )}
                  className="w-16 h-14 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#2C1810] shrink-0 cursor-pointer group relative"
                >
                  <img 
                    src={ACHARYA_CHANAKYA_DATA.lampImage} 
                    alt="Sacred Oil Lamp" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 7. SECTION 5: MODERN INDIAN SCIENTISTS WHO CHANGED THE WORLD */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'modern_scientists') && (
        <div className="space-y-4 pt-4 border-t-2 border-[#E8DCC4]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#D4AF37] pb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Indian Scientists Who Changed The World' : 'ప్రపంచాన్ని మార్చిన భారతీయ ఆధునిక శాస్త్రవేత్తలు'}
                </h3>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'Brilliant Minds, Groundbreaking Discoveries, Timeless Impact – From laboratories to launchpads' 
                    : 'ప్రయోగశాలల నుండి రాకెట్ లాంచ్‌ప్యాడ్ల వరకు: ప్రపంచ విజ్ఞానాన్ని శాసించిన భారతీయ రత్నాలు'}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/indian_scientists_changed_world.jpg',
                isEn ? 'Indian Scientists Who Changed The World' : 'ప్రపంచాన్ని మార్చిన భారతీయ శాస్త్రవేత్తలు',
                isEn ? 'C. V. Raman, S. N. Bose, Chandrasekhar, Ramanujan, Kalam, Khorana, Sarabhai, Swaminathan, Bhabha, Venki Ramakrishnan' : 'భారతీయ ఆధునిక శాస్త్రవేత్తల సమగ్ర పటం'
              )}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Enhanced Infographic' : 'మూల చార్ట్ తెరవండి'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredModernScientists.map((sc) => (
              <div
                key={sc.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#1B5E20] shadow-xs hover:shadow-md transition-all p-4 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 border-b border-[#E8DCC4] pb-2">
                    <div 
                      onClick={() => handleOpenImage(
                        sc.image, 
                        isEn ? sc.nameEn : sc.nameTe, 
                        `${isEn ? sc.titleEn : sc.titleTe} (${sc.lifespan})`
                      )}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#2C1810] overflow-hidden shrink-0 border-2 border-[#1B5E20] cursor-pointer group relative shadow-xs"
                      title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img 
                        src={sc.image} 
                        alt={isEn ? sc.nameEn : sc.nameTe} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                      </div>
                      <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-[#1B5E20] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                        {sc.number}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif truncate">
                          {isEn ? sc.nameEn : sc.nameTe}
                        </h4>
                        <span className="text-base">{sc.icon}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D84315] block mt-0.5 truncate">
                        {isEn ? sc.titleEn : sc.titleTe}
                      </span>
                      <span className="text-[10px] text-[#5D4037] font-semibold block">
                        {sc.lifespan}
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                      {isEn ? 'Groundbreaking Milestones:' : 'ప్రధాన మైలురాళ్లు & ఆవిష్కరణలు:'}
                    </span>
                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                      {(isEn ? sc.keyAchievementsTe && !isEn ? sc.keyAchievementsTe : sc.keyAchievementsEn : sc.keyAchievementsEn).map((a, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-1.5">
                          <span className="text-[#1B5E20] font-bold">•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quote */}
                {sc.quoteEn && (
                  <div className="pt-2 border-t border-[#E8DCC4] text-[11px] text-[#5D4037] italic bg-[#FFFDF7] p-2 rounded-lg text-center">
                    "{isEn ? sc.quoteEn : sc.quoteTe}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. MASTER BOTTOM CALLOUT: VISHWAGURU BHARAT */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/40 to-[#FFF8E1] border-2 border-[#D4AF37] text-center space-y-2 shadow-sm">
        <span className="text-xs font-bold text-[#7B1113] uppercase tracking-wider block">
          {isEn ? 'The Eternal Genius of Bharat Continues to Inspire the World' : 'భారతీయ విజ్ఞాన శాస్త్ర సార్వభౌమత్వము – జగతికి నిరంతర స్ఫూర్తి'}
        </span>
        <p className="text-xs sm:text-sm text-[#5D4037] max-w-3xl mx-auto italic leading-relaxed">
          "{isEn 
            ? 'From zero, infinity, and atomic philosophy to geometry, surgery, binary algorithms, and deep space exploration—Bharat has continuously illuminated the intellectual horizons of humanity.' 
            : 'సున్నా, అనంతం, పరమాణు తత్త్వం నుండి రేఖాగణితం, శస్త్రచికిత్స, బైనరీ కోడ్ మరియు రోదసి పరిశోధనల వరకు — భారతదేశం నిరంతరం ప్రపంచ మానవాళి జ్ఞాన దీప్తిని వెలిగిస్తూనే ఉన్నది.'}"
        </p>
        <div className="flex items-center justify-center gap-2 pt-1 font-bold text-xs text-[#7B1113]">
          <span>🇮🇳</span>
          <span>{isEn ? 'Proud of Our Past • Inspired for Our Future' : 'గౌరవప్రదమైన గతం • ఉజ్వలమైన భవిష్యత్తు'}</span>
          <span>🇮🇳</span>
        </div>
      </div>

    </div>
  );
};
