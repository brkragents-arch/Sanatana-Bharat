import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  GURU_PARAMPARA_DATA, 
  GURU_PARAMPARA_SHLOKA, 
  type GuruParamparaItem 
} from '../../data/guruParamparaData';
import { 
  Sparkles, 
  Search, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Filter,
  Eye,
  ChevronRight
} from 'lucide-react';

interface GuruParamparaSectionProps {
  embedded?: boolean;
}

export const GuruParamparaSection: React.FC<GuruParamparaSectionProps> = ({ embedded = false }) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSectionFilter, setActiveSectionFilter] = useState<'all' | 'sadashiva' | 'shankaracharya' | 'asmadacharya'>('all');
  const [selectedGuru, setSelectedGuru] = useState<GuruParamparaItem | null>(null);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState<boolean>(false);
  const [posterZoom, setPosterZoom] = useState<number>(1);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const resolveImgUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('data:')) return url;
    if (url.startsWith('./')) return url;
    if (url.startsWith('/')) return '.' + url;
    return './' + url;
  };

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  // Filtered Gurus based on section & search query
  const filteredGurus = useMemo(() => {
    return GURU_PARAMPARA_DATA.filter(guru => {
      if (activeSectionFilter !== 'all' && guru.section !== activeSectionFilter) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        guru.nameTe.toLowerCase().includes(q) ||
        guru.nameEn.toLowerCase().includes(q) ||
        guru.titleTe.toLowerCase().includes(q) ||
        guru.titleEn.toLowerCase().includes(q) ||
        guru.sectionTe.toLowerCase().includes(q) ||
        guru.sectionEn.toLowerCase().includes(q)
      );
    });
  }, [activeSectionFilter, searchQuery]);

  return (
    <div className={`w-full ${embedded ? 'mt-8' : 'mt-12'} space-y-6 relative`}>
      
      {/* ============================================================ */}
      {/* 1. GURU PARAMPARA GRAND HEADER & SHLOKA BANNER */}
      {/* ============================================================ */}
      <div className="rounded-3xl border-3 border-[#D4AF37] bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#FAF7F0] p-5 sm:p-8 shadow-xl relative overflow-hidden text-center space-y-4">
        {/* Subtle Decorative Background Mandala Accents */}
        <div className="absolute -top-10 -left-10 text-[#D4AF37]/15 text-9xl select-none pointer-events-none font-serif">🕉️</div>
        <div className="absolute -bottom-10 -right-10 text-[#D4AF37]/15 text-9xl select-none pointer-events-none font-serif">🪷</div>

        {/* Top Badges */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE082]" />
            <span>{isEn ? 'Sanatana Lineage of Spiritual Masters' : 'సనాతన ధర్మ గురు పరంపర'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D84315] text-white text-xs font-bold shadow-xs">
            <span>31 దివ్య గురు స్వరూపాలు</span>
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#7B1113] font-telugu-serif tracking-tight drop-shadow-xs">
            {isEn ? 'GURU PARAMPARA' : 'గురు పరంపర (GURU PARAMPARA)'}
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#D84315] font-telugu-serif">
            {isEn 
              ? 'Sadashiva Samarambham Shankaracharya Madhyamam Asmadacharya Paryantam Vande Guru Paramparam'
              : 'సదాశివ సమారంభాం శంకరాచార్య మధ్యమాం అస్మదాచార్య పర్యంతాం వందే గురుపరంపరామ్'}
          </p>
        </div>

        {/* Sacred Golden Shloka Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 border-2 border-[#FFD54F] shadow-lg relative">
          <div className="text-base sm:text-xl font-bold font-telugu-serif tracking-wide leading-relaxed">
            {isEn ? GURU_PARAMPARA_SHLOKA.english : GURU_PARAMPARA_SHLOKA.telugu}
          </div>
          <div className="mt-2 pt-2 border-t border-[#FFD54F]/40 text-xs sm:text-sm text-[#FFE57F]/95 italic leading-relaxed">
            {isEn ? GURU_PARAMPARA_SHLOKA.meaningEn : GURU_PARAMPARA_SHLOKA.meaningTe}
          </div>
        </div>

        {/* Action Controls & Original Poster Trigger */}
        <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
          <button
            type="button"
            onClick={() => {
              setPosterZoom(1);
              setIsPosterModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:bg-[#FFD54F] text-[#7B1113] border-2 border-[#D4AF37] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm cursor-pointer transition-all hover:scale-102"
            title={isEn ? 'View Original Source Infographic Poster' : 'మూల గురుపరంపర పోస్టర్ చూడండి'}
          >
            <Maximize2 className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'View Original Source Poster (పూర్తి పోస్టర్)' : 'మూల గురుపరంపర చిత్ర పటం (View Poster)'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FILTER TABS & SEARCH BAR */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF] p-3 sm:p-4 rounded-2xl border-2 border-[#D4AF37]/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Section Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <span className="text-xs font-bold text-[#7B1113] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isEn ? 'Phase:' : 'దశ:'}</span>
          </span>

          {[
            { id: 'all', labelTe: 'అన్ని గురు స్వరూపాలు (31)', labelEn: 'All Gurus (31)' },
            { id: 'sadashiva', labelTe: '1. సదాశివ సమారంభాం', labelEn: '1. Sadashiva Samarambham' },
            { id: 'shankaracharya', labelTe: '2. శంకరాచార్య మధ్యమాం', labelEn: '2. Shankaracharya Madhyamam' },
            { id: 'asmadacharya', labelTe: '3. అస్మదాచార్య పర్యంతాం', labelEn: '3. Asmadacharya Paryantam' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSectionFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSectionFilter === tab.id
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082] hover:text-[#7B1113] border border-[#E8DCC4]'
              }`}
            >
              {isEn ? tab.labelEn : tab.labelTe}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#7B1113] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "Search Guru (e.g. Ramana, Shankara)..." : "గురువు పేరు వెతకండి (రమణ, వివేకానంద)..."}
            className="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#7B1113] text-[#2C1810]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. GURU PARAMPARA RESPONSIVE GRID (EXACT SOURCE ORDER) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {filteredGurus.map((guru) => (
          <div
            key={guru.id}
            onClick={() => setSelectedGuru(guru)}
            className="group relative bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            {/* Top Order Pill & Section Indicator */}
            <div className="px-2.5 py-1 bg-gradient-to-r from-[#FAF7F0] to-[#FFF8E1] border-b border-[#E8DCC4] flex items-center justify-between text-[10px]">
              <span className="font-extrabold text-[#7B1113] px-1.5 py-0.2 rounded-md bg-[#FFE082]/70 border border-[#D4AF37]/40">
                #{guru.order}
              </span>
              <span className="text-[#8D6E63] font-bold truncate max-w-[90px]">
                {guru.section === 'sadashiva' ? 'సదాశివ' : guru.section === 'shankaracharya' ? 'శంకర' : 'అస్మదాచార్య'}
              </span>
            </div>

            {/* Extracted Picture as it is from Source with Vintage Framing */}
            <div className="relative p-2.5 bg-gradient-to-b from-[#FAF7F0] to-[#F5EEDC] flex items-center justify-center min-h-[140px] max-h-[170px] overflow-hidden group-hover:bg-[#FFFDF7] transition-colors">
              {!failedImages[guru.id] ? (
                <img
                  src={resolveImgUrl(guru.imageSrc)}
                  alt={isEn ? guru.nameEn : guru.nameTe}
                  onError={() => handleImageError(guru.id)}
                  className="max-h-[135px] w-auto object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300 rounded-md"
                  loading="lazy"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#7B1113] to-[#D84315] flex flex-col items-center justify-center text-[#FFE082] shadow-md border-2 border-[#D4AF37]">
                  <span className="text-2xl">🕉️</span>
                  <span className="text-[10px] font-bold mt-0.5">#{guru.order}</span>
                </div>
              )}

              {/* Quick Preview Hover Overlay */}
              <div className="absolute inset-0 bg-[#7B1113]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2 py-1 rounded-lg bg-[#FAF7F0] text-[#7B1113] text-[10px] font-bold shadow-md flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{isEn ? 'View' : 'వివరాలు'}</span>
                </span>
              </div>
            </div>

            {/* Content & Name Card */}
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between bg-[#FFFFFF] space-y-1">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif leading-snug line-clamp-2 group-hover:text-[#D84315] transition-colors">
                  {isEn ? guru.nameEn : guru.nameTe}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#5D4037] line-clamp-2 mt-0.5 leading-tight">
                  {isEn ? guru.titleEn : guru.titleTe}
                </p>
              </div>

              <div className="pt-1.5 flex items-center justify-between border-t border-[#F4EEDF] text-[10px] text-[#8D6E63]">
                <span className="text-[#D84315] font-semibold">{isEn ? 'Guru Parampara' : 'దివ్య గురువు'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGurus.length === 0 && (
        <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-[#D4AF37] text-stone-500 text-sm">
          {isEn ? 'No Guru found matching your search.' : 'మీరు వెతికిన పదానికి సరిపోలు గురు రూపాలు లభించలేదు.'}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. DETAIL MODAL FOR CLICKED GURU */}
      {/* ============================================================ */}
      {selectedGuru && (
        <div 
          onClick={() => setSelectedGuru(null)}
          className="fixed inset-0 z-60 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-3xl border-3 border-[#D4AF37] max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-4 bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] flex items-center justify-between border-b border-[#D4AF37]">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🕉️</span>
                <div>
                  <h3 className="font-bold text-base sm:text-lg font-telugu-serif leading-tight">
                    {isEn ? selectedGuru.nameEn : selectedGuru.nameTe}
                  </h3>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    #{selectedGuru.order} • {isEn ? selectedGuru.sectionEn : selectedGuru.sectionTe}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedGuru(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-[#FFE082] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              {/* Centered High-Res Guru Image Frame */}
              <div className="p-4 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-inner">
                <img
                  src={resolveImgUrl(selectedGuru.imageSrc)}
                  alt={isEn ? selectedGuru.nameEn : selectedGuru.nameTe}
                  className="max-h-56 w-auto object-contain drop-shadow-xl rounded-lg"
                />
                <span className="mt-2 text-[11px] text-[#8D6E63] italic">
                  {isEn ? 'Extracted directly from authentic source chart' : 'మూల పటం నుండి వెలికితీసిన యథాతథ దివ్య చిత్రం'}
                </span>
              </div>

              {/* Name & Attributes */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DCC4] space-y-2">
                <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Spiritual Title & Significance' : 'దివ్య బిరుదు & ప్రాశస్త్యము'}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed font-medium">
                  {isEn ? selectedGuru.titleEn : selectedGuru.titleTe}
                </p>
              </div>

              {/* Shloka Context */}
              <div className="bg-[#FFF8E1] p-3.5 rounded-2xl border border-[#D4AF37]/50 text-xs text-[#5D4037] space-y-1">
                <div className="font-bold text-[#7B1113]">
                  {isEn ? 'Parampara Position:' : 'గురుపరంపరలో స్థానము:'}
                </div>
                <p>
                  {selectedGuru.section === 'sadashiva' && (
                    isEn
                      ? 'Belongs to "Sadashiva Samarambham" — The Primordial Vedic and Puranic foundation.'
                      : '“సదాశివ సమారంభాం” విభాగం — సనాతన వేద, పౌరాణిక జ్ఞానానికి మూల స్తంభాలు.'
                  )}
                  {selectedGuru.section === 'shankaracharya' && (
                    isEn
                      ? 'Belongs to "Shankaracharya Madhyamam" — Classical Vedantic Acharyas and medieval Bhakti Saints.'
                      : '“శంకరాచార్య మధ్యమాం” విభాగం — వేదాంత దర్శనాలు, అద్వైత-విశిష్టాద్వైత ఆచార్యులు మరియు భక్తి ఉద్యమ స్రష్టలు.'
                  )}
                  {selectedGuru.section === 'asmadacharya' && (
                    isEn
                      ? 'Belongs to "Asmadacharya Paryantam" — Divine Masters leading up to the modern era.'
                      : '“అస్మదాచార్య పర్యంతాం” విభాగం — ఆధునిక యుగంలో సనాతన ధర్మ జ్యోతిని ప్రసరింపజేసిన మహనీయులు.'
                  )}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedGuru(null)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. ORIGINAL POSTER FULL-SCREEN LIGHTBOX MODAL */}
      {/* ============================================================ */}
      {isPosterModalOpen && (
        <div 
          onClick={() => setIsPosterModalOpen(false)}
          className="fixed inset-0 z-70 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-3xl border-3 border-[#D4AF37] max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] flex items-center justify-between border-b border-[#D4AF37]">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">📜</span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base font-telugu-serif">
                    {isEn ? 'Original Source Infographic: Guru Parampara' : 'మూల గురుపరంపర సంపూర్ణ చిత్ర పటం'}
                  </h3>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    సదాశివ సమారంభాం శంకరాచార్య మధ్యమాం అస్మదాచార్య పర్యంతాం వందే గురుపరంపరామ్
                  </span>
                </div>
              </div>

              {/* Zoom and close buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPosterZoom(prev => Math.min(prev + 0.25, 2.8))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title={isEn ? 'Zoom In' : 'జూమ్ ఇన్'}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setPosterZoom(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title={isEn ? 'Zoom Out' : 'జూమ్ అవుట్'}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setPosterZoom(1)}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title={isEn ? 'Reset Zoom' : 'రీసెట్'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(false)}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors ml-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-900">
              <div
                style={{
                  transform: `scale(${posterZoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-out'
                }}
                className="shadow-2xl rounded-xl overflow-hidden max-w-2xl"
              >
                <img
                  src={resolveImgUrl(GURU_PARAMPARA_SHLOKA.sourcePosterSrc)}
                  alt="Guru Parampara Source Poster"
                  className="w-full h-auto block select-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPosterModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] transition-colors cursor-pointer"
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
