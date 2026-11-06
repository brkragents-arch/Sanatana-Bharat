import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  GraduationCap, 
  MapPin, 
  Feather, 
  CheckCircle2, 
  Search, 
  X,
  Globe,
  Award
} from 'lucide-react';
import { 
  LITERARY_HERITAGE_OVERVIEW, 
  LITERARY_HERITAGE_BRANCHES, 
  LITERARY_IMPORTANCE_PILLARS, 
  FAMOUS_CENTRES_OF_LEARNING, 
  LITERARY_KEY_POINTS 
} from '../../data/literaryHeritageData';

interface LiteraryHeritageSectionProps {
  isEn: boolean;
  onOpenLightbox: (img: { src: string; title: string; subtitle: string }) => void;
}

export const LiteraryHeritageSection: React.FC<LiteraryHeritageSectionProps> = ({
  isEn,
  onOpenLightbox
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleOpenImage = (src: string, title: string, subtitle: string) => {
    onOpenLightbox({ src, title, subtitle });
  };

  // Filter branches by search query & selected filter
  const filteredBranches = LITERARY_HERITAGE_BRANCHES.filter((branch) => {
    if (selectedFilter !== 'all' && selectedFilter !== branch.id) {
      // If filter is specifically centres or importance, hide branches unless 'all'
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const inTitle = branch.titleEn.toLowerCase().includes(q) || branch.titleTe.includes(q);
    const inSub = branch.subtitleEn.toLowerCase().includes(q) || branch.subtitleTe.includes(q);
    const inItems = branch.items.some(
      (it) =>
        it.titleEn.toLowerCase().includes(q) ||
        it.titleTe.includes(q) ||
        it.detailEn.toLowerCase().includes(q) ||
        it.detailTe.includes(q)
    );
    const inLangs = branch.languagesList?.some(
      (l) =>
        l.nameEn.toLowerCase().includes(q) ||
        l.nameTe.includes(q) ||
        l.highlightsEn.toLowerCase().includes(q) ||
        l.highlightsTe.includes(q)
    );
    return inTitle || inSub || inItems || inLangs;
  });

  const showImportance =
    selectedFilter === 'all' ||
    selectedFilter === 'importance' ||
    (searchQuery.trim() !== '' &&
      LITERARY_IMPORTANCE_PILLARS.some(
        (p) =>
          p.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.titleTe.includes(searchQuery) ||
          p.detailEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.detailTe.includes(searchQuery)
      ));

  const showCentres =
    selectedFilter === 'all' ||
    selectedFilter === 'centres_of_learning' ||
    (searchQuery.trim() !== '' &&
      FAMOUS_CENTRES_OF_LEARNING.some(
        (c) =>
          c.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.nameTe.includes(searchQuery) ||
          c.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.descriptionTe.includes(searchQuery)
      ));

  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fadeIn">
      
      {/* ============================================================ */}
      {/* 1. HERO HEADER BANNER (CENTRAL SCROLL & BOOKS + FULL POSTER) */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#5B0B14] via-[#7B1113] to-[#4A0012] rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-7 text-[#FFE082] shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left: Books & Quill + Central Scroll Preview */}
          <div className="lg:col-span-4 flex items-center justify-center gap-3">
            <div 
              onClick={() => handleOpenImage(
                LITERARY_HERITAGE_OVERVIEW.headerBooksImage,
                isEn ? 'Sacred Treasury of Indian Books & Quill' : 'భారతీయ గ్రంథ నిధి మరియు కలం',
                isEn ? 'Symbol of timeless literary wisdom' : 'సనాతన సాహిత్య విజ్ఞాన ప్రతీక'
              )}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFDF7] p-1.5 shadow-lg cursor-pointer group relative shrink-0 flex items-center justify-center"
              title={isEn ? 'Click to enlarge illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
            >
              <img 
                src={LITERARY_HERITAGE_OVERVIEW.headerBooksImage} 
                alt="Books and Quill" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-[#FFE082]" />
              </div>
            </div>

            <div 
              onClick={() => handleOpenImage(
                LITERARY_HERITAGE_OVERVIEW.centralScrollImage,
                isEn ? 'Literary Heritage of India – Royal Scroll' : 'భారతీయ సాహిత్య వారసత్వ రాజపత్రం',
                isEn ? LITERARY_HERITAGE_OVERVIEW.quoteEn : LITERARY_HERITAGE_OVERVIEW.quoteTe
              )}
              className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#FFE082] bg-[#FFFDF7] p-1 shadow-lg cursor-pointer group relative shrink-0 flex items-center justify-center"
              title={isEn ? 'Click to inspect central scroll' : 'రాజపత్రాన్ని చూడండి'}
            >
              <img 
                src={LITERARY_HERITAGE_OVERVIEW.centralScrollImage} 
                alt="Literary Heritage Scroll" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-[#FFE082]" />
              </div>
            </div>
          </div>

          {/* Right: Title, Quote, Badges & Full Poster Button */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE082] text-[#7B1113] text-[11px] font-black uppercase tracking-wider shadow-xs">
              <Feather className="w-3.5 h-3.5 text-[#7B1113]" />
              <span>{isEn ? LITERARY_HERITAGE_OVERVIEW.chapterBadgeEn : LITERARY_HERITAGE_OVERVIEW.chapterBadgeTe}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-telugu-serif tracking-wide">
              {isEn ? LITERARY_HERITAGE_OVERVIEW.titleEn : LITERARY_HERITAGE_OVERVIEW.titleTe}
            </h2>

            <div className="bg-black/30 border-l-4 border-[#FFE082] p-3 rounded-r-xl max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base font-bold italic text-[#FFE082] leading-relaxed">
                {isEn ? LITERARY_HERITAGE_OVERVIEW.quoteEn : LITERARY_HERITAGE_OVERVIEW.quoteTe}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#FFE082]/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isEn 
                ? 'Explore the 6 grand pillars of Indian literature — from the sacred Vedas, Upanishads, and Sanskrit classics of Kalidasa to Bhakti-Sufi poetry, regional literary treasures, nationalist works, and the 4 world-renowned ancient universities.'
                : 'చతుర్వేదాలు, ఉపనిషత్తులు, రామాయణ-మహాభారత ఇతిహాసాలు, కాళిదాసు సంస్కృత కావ్యాలు, భక్తి-సూఫీ తత్వ గీతాలు, ప్రాంతీయ భాషా వైభవం, స్వాతంత్ర్య ఉద్యమ ఆధునిక సాహిత్యం మరియు 4 ప్రాచీన విశ్వవిద్యాలయాల సమగ్ర సచిత్ర దర్శనం.'}
            </p>

            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <button
                onClick={() => handleOpenImage(
                  LITERARY_HERITAGE_OVERVIEW.fullPosterImage,
                  isEn ? 'Literary Heritage of India – Complete Master Infographic' : 'భారతీయ సాహిత్య వారసత్వం – సంపూర్ణ మూల చార్ట్',
                  isEn ? 'Ancient, Classical, Bhakti-Sufi, Regional, Modern Literature & Ancient Universities' : '6 సాహిత్య విభాగాలు మరియు 4 ప్రాచీన విద్యాపీఠాల సమగ్ర పటం'
                )}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#FFE082] hover:bg-white text-[#7B1113] flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
              >
                <Maximize2 className="w-4 h-4 text-[#D84315]" />
                <span>{isEn ? 'View Full Source Infographic in HD' : 'మూల పోస్టర్ పూర్తి పరిమాణంలో (HD) చూడండి'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FILTER PILLS & SEARCH BAR */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#D84315] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn 
                ? 'Search Vedas, Kalidasa, Kabir, Tagore, Telugu, Nalanda, Takshashila...' 
                : 'వేదాలు, కాళిదాసు, కబీర్, ఠాగూర్, తెలుగు, నలందా, తక్షశిల శోధించండి...'}
              className="w-full pl-10 pr-8 py-2 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#7B1113]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8D6E63] hover:text-[#7B1113] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <span className="text-[11px] font-bold text-[#8D6E63] shrink-0">
            {isEn ? 'Click any image to enlarge' : 'ఏ చిత్రంపైనైనా క్లిక్ చేసి పెద్దదిగా చూడండి'}
          </span>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-[#E8DCC4]">
          {[
            { id: 'all', labelEn: 'All Sections (6 Pillars + Universities)', labelTe: 'అన్ని విభాగాలు (సమగ్ర వీక్షణ)', icon: '📚' },
            { id: 'ancient_literature', labelEn: '1. Ancient Literature', labelTe: '1. ప్రాచీన సాహిత్యం', icon: '📜' },
            { id: 'classical_literature', labelEn: '2. Classical Literature', labelTe: '2. శాస్త్రీయ సాహిత్యం', icon: '🪶' },
            { id: 'bhakti_sufi_literature', labelEn: '3. Bhakti & Sufi', labelTe: '3. భక్తి & సూఫీ సాహిత్యం', icon: '🪕' },
            { id: 'regional_literature', labelEn: '4. Regional Literature', labelTe: '4. ప్రాంతీయ సాహిత్యం', icon: '💃' },
            { id: 'modern_literature', labelEn: '5. Modern Literature', labelTe: '5. ఆధునిక సాహిత్యం', icon: '🇮🇳' },
            { id: 'importance', labelEn: '6. Importance', labelTe: '6. సాహిత్య ప్రాముఖ్యత', icon: '💎' },
            { id: 'centres_of_learning', labelEn: 'Ancient Universities (4)', labelTe: 'ప్రాచీన విద్యాపీఠాలు (4)', icon: '🎓' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-sm ring-2 ring-[#D4AF37]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{isEn ? tab.labelEn : tab.labelTe}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. THE LITERARY BRANCHES (1 TO 5) WITH EXTRACTED PICTURES */}
      {/* ============================================================ */}
      {filteredBranches.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl border-2 shadow-md overflow-hidden flex flex-col justify-between transition-all hover:shadow-lg"
              style={{
                backgroundColor: branch.bgColor,
                borderColor: branch.borderColor
              }}
            >
              <div>
                {/* Branch Header Bar */}
                <div 
                  className="p-4 flex items-center justify-between gap-3 border-b-2 text-white"
                  style={{
                    backgroundColor: branch.color,
                    borderColor: branch.borderColor
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-9 h-9 rounded-full bg-white font-black text-base flex items-center justify-center shadow-sm shrink-0"
                      style={{ color: branch.color }}
                    >
                      {branch.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide font-telugu-serif">
                        {isEn ? branch.titleEn : branch.titleTe}
                      </h3>
                      <p className="text-[11px] text-white/90 font-medium">
                        {isEn ? branch.subtitleEn : branch.subtitleTe}
                      </p>
                    </div>
                  </div>

                  {/* Secondary Extracted Thumbnail in Header */}
                  {branch.secondaryImage && (
                    <div
                      onClick={() => handleOpenImage(
                        branch.secondaryImage!,
                        isEn ? (branch.secondaryImageCaptionEn || branch.titleEn) : (branch.secondaryImageCaptionTe || branch.titleTe),
                        isEn ? branch.titleEn : branch.titleTe
                      )}
                      className="w-12 h-12 rounded-xl bg-[#FFFDF7] p-1 border-2 border-white/80 shadow-sm cursor-pointer hover:scale-110 transition-transform shrink-0 flex items-center justify-center"
                      title={isEn ? 'Click to enlarge illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img
                        src={branch.secondaryImage}
                        alt={branch.titleEn}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Branch Body: Extracted Primary Illustration + Detailed Items */}
                <div className="p-4 sm:p-5 space-y-4">
                  
                  {/* Top Row: Extracted Primary Artwork & Highlight */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white/90 p-3.5 rounded-xl border border-black/10 shadow-2xs">
                    <div
                      onClick={() => handleOpenImage(
                        branch.primaryImage,
                        isEn ? branch.primaryImageCaptionEn : branch.primaryImageCaptionTe,
                        isEn ? branch.titleEn : branch.titleTe
                      )}
                      className="sm:col-span-4 h-36 w-full rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 p-2 flex items-center justify-center cursor-pointer group relative overflow-hidden shadow-2xs"
                      title={isEn ? 'Click to inspect extracted artwork' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img
                        src={branch.primaryImage}
                        alt={branch.primaryImageCaptionEn}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      </div>
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-black/70 text-[#FFE082]">
                        🔍 HD
                      </span>
                    </div>

                    <div className="sm:col-span-8 space-y-2">
                      <span 
                        className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block text-white"
                        style={{ backgroundColor: branch.badgeBg }}
                      >
                        {isEn ? `Pillar ${branch.number} Highlights` : `${branch.number}వ సాహిత్య విభాగం విశేషాలు`}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-[#2C1810]">
                        {isEn ? branch.primaryImageCaptionEn : branch.primaryImageCaptionTe}
                      </h4>
                      <p className="text-xs text-[#5D4037] leading-relaxed">
                        {isEn ? branch.items[0].detailEn : branch.items[0].detailTe}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Items List */}
                  <div className="space-y-2.5">
                    {branch.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/95 p-3 rounded-xl border border-black/10 hover:border-black/25 transition-all shadow-2xs flex items-start gap-2.5"
                      >
                        <span 
                          className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: branch.color }}
                        >
                          •
                        </span>
                        <div className="text-xs space-y-0.5">
                          <strong className="text-[#2C1810] font-bold text-xs sm:text-sm block font-telugu-serif">
                            {isEn ? item.titleEn : item.titleTe}
                          </strong>
                          <p className="text-[#5D4037] leading-relaxed">
                            {isEn ? item.detailEn : item.detailTe}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Regional Languages Grid (Specifically for Branch 4) */}
                  {branch.languagesList && (
                    <div className="bg-white/95 p-3.5 rounded-xl border-2 border-[#C084FC] space-y-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#7E22CE] uppercase tracking-wider">
                        <Globe className="w-4 h-4" />
                        <span>{isEn ? 'Important Regional Languages & Classics:' : 'ప్రముఖ ప్రాంతీయ భాషలు & మహాకావ్యాలు:'}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {branch.languagesList.map((lang, lIdx) => (
                          <div
                            key={lIdx}
                            className="p-2.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] space-y-0.5"
                          >
                            <strong className="text-xs font-bold text-[#6B21A8] flex items-center gap-1">
                              <span>✦</span>
                              <span>{isEn ? lang.nameEn : lang.nameTe}</span>
                            </strong>
                            <p className="text-[11px] text-[#581C87] leading-snug">
                              {isEn ? lang.highlightsEn : lang.highlightsTe}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Footer Message Banner (if present) */}
              {branch.footerNoteEn && (
                <div 
                  className="px-4 py-2.5 text-xs font-bold text-white flex items-center gap-2"
                  style={{ backgroundColor: branch.color }}
                >
                  <Sparkles className="w-4 h-4 text-[#FFE082] shrink-0" />
                  <span>{isEn ? branch.footerNoteEn : branch.footerNoteTe}</span>
                </div>
              )}
            </div>
          ))}

          {/* ========================================================== */}
          {/* BRANCH 6: IMPORTANCE OF LITERARY HERITAGE (WITH 5 ICONS) */}
          {/* ========================================================== */}
          {showImportance && (
            <div className="rounded-2xl border-2 border-[#2DD4BF] bg-[#F0FDFA] shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="p-4 bg-[#0F766E] text-white border-b-2 border-[#2DD4BF] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-white text-[#0F766E] font-black text-base flex items-center justify-center shadow-sm shrink-0">
                      6
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide font-telugu-serif">
                        {isEn ? 'Importance of Literary Heritage' : 'సాహిత్య వారసత్వ ప్రాముఖ్యత'}
                      </h3>
                      <p className="text-[11px] text-white/90 font-medium">
                        {isEn ? 'Why preserving and studying Indian literature matters' : 'భారతీయ సాహిత్య సంపద మనకు అందించే 5 మహోన్నత ప్రయోజనాలు'}
                      </p>
                    </div>
                  </div>
                  <Award className="w-7 h-7 text-[#99F6E4] shrink-0" />
                </div>

                {/* Body: 5 Pillars + Extracted Golden Quill in Inkwell */}
                <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-8 space-y-2.5">
                    {LITERARY_IMPORTANCE_PILLARS.map((pillar, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-white p-2.5 rounded-xl border border-[#99F6E4] shadow-2xs flex items-center gap-3 hover:border-[#0D9488] transition-all"
                      >
                        <div
                          onClick={() => handleOpenImage(
                            pillar.iconImage,
                            isEn ? pillar.titleEn : pillar.titleTe,
                            isEn ? pillar.detailEn : pillar.detailTe
                          )}
                          className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#0F766E] shrink-0 cursor-pointer hover:scale-110 transition-transform bg-[#FFFDF7]"
                        >
                          <img
                            src={pillar.iconImage}
                            alt={pillar.titleEn}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-bold text-xs sm:text-sm text-[#115E59] font-telugu-serif">
                            {isEn ? pillar.titleEn : pillar.titleTe}
                          </h5>
                          <p className="text-[11px] text-[#134E4A]/90 leading-snug">
                            {isEn ? pillar.detailEn : pillar.detailTe}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Extracted Large Feather Quill in Blue Inkpot */}
                  <div className="sm:col-span-4 flex flex-col items-center justify-center space-y-2">
                    <div
                      onClick={() => handleOpenImage(
                        './images/indian_history/literary_heritage/importance_quill.jpg',
                        isEn ? 'Golden Quill & Inkwell of Eternal Literature' : 'శాశ్వత సాహిత్య రచనా కలం మరియు సిరా బుడ్డి',
                        isEn ? 'Importance of Literary Heritage' : 'సాహిత్య వారసత్వ ప్రాముఖ్యత'
                      )}
                      className="h-64 w-full rounded-2xl bg-[#FFFDF7] border-2 border-[#0F766E]/40 p-2 flex items-center justify-center cursor-pointer group relative shadow-sm overflow-hidden"
                      title={isEn ? 'Click to enlarge Quill illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
                    >
                      <img
                        src="./images/indian_history/literary_heritage/importance_quill.jpg"
                        alt="Golden Quill in Inkwell"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#0F766E] text-center">
                      {isEn ? 'Symbol of Immortal Literary Creation' : 'అమర సాహిత్య సృష్టికి ప్రతీక'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2.5 bg-[#0F766E] text-white text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#99F6E4] shrink-0" />
                <span>
                  {isEn 
                    ? 'Literature binds India’s past, present, and future into one unbroken civilizational thread.' 
                    : 'సాహిత్యం భారతదేశ గతాన్ని, వర్తమానాన్ని మరియు భవిష్యత్తును ఒకే సాంస్కృతిక బంధంతో ముడివేస్తుంది.'}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. FAMOUS CENTRES OF LEARNING IN ANCIENT INDIA (4 UNIVERSITIES) */}
      {/* ============================================================ */}
      {showCentres && (
        <div className="bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] rounded-3xl border-2 border-[#7B1113] p-5 sm:p-6 shadow-lg space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#D4AF37] pb-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#7B1113] text-[#FFE082] flex items-center justify-center shadow-md shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#D84315] block">
                  {isEn ? 'ANCIENT BHARAT’S INTELLECTUAL CAPITALS' : 'ప్రాచీన భారత్ విశ్వవిద్యాలయాల వైభవం'}
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'Famous Centres of Learning in Ancient India' : 'ప్రాచీన భారతదేశంలోని ప్రముఖ విద్యాపీఠాలు'}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold self-start sm:self-auto">
              🎓 {isEn ? '4 World-Renowned Seats of Wisdom' : '4 ప్రపంచ ప్రసిద్ధ విద్యా కేంద్రాలు'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAMOUS_CENTRES_OF_LEARNING.map((centre) => (
              <div
                key={centre.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#7B1113] p-4 shadow-xs hover:shadow-md transition-all grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                {/* Extracted University Photo */}
                <div
                  onClick={() => handleOpenImage(
                    centre.image,
                    isEn ? centre.nameEn : centre.nameTe,
                    `${isEn ? centre.locationEn : centre.locationTe} — ${isEn ? centre.descriptionEn : centre.descriptionTe}`
                  )}
                  className="sm:col-span-4 h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-[#FAF7F0] border-2 border-[#D4AF37] cursor-pointer group relative shadow-sm p-1 flex items-center justify-center"
                  title={isEn ? 'Click to enlarge university photo' : 'విద్యాపీఠం చిత్రాన్ని పెద్దదిగా చూడండి'}
                >
                  <img
                    src={centre.image}
                    alt={centre.nameEn}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                  </div>
                </div>

                {/* Details */}
                <div className="sm:col-span-8 space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="font-extrabold text-base sm:text-lg text-[#7B1113] font-telugu-serif">
                        {isEn ? centre.nameEn : centre.nameTe}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#D84315] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{isEn ? centre.locationEn : centre.locationTe}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#2C1810] leading-relaxed">
                    {isEn ? centre.descriptionEn : centre.descriptionTe}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8D6E63] block">
                      {isEn ? 'Key Subjects Taught:' : 'బోధించిన ప్రధాన శాస్త్రాలు:'}
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {(isEn ? centre.subjectsEn : centre.subjectsTe).map((subj, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/50 text-[10.5px] font-bold"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. KEY POINTS TO REMEMBER BANNER (WITH BUDDHA & SCROLL BOOKS) */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-6 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <span className="px-4 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFE082]" />
            <span>{isEn ? 'Key Points to Remember' : 'గుర్తుంచుకోవలసిన ముఖ్యాంశాలు'}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Extracted Buddha with Sacred Book & Peacock Feather */}
          <div className="lg:col-span-3 flex flex-col items-center space-y-1.5">
            <div
              onClick={() => handleOpenImage(
                LITERARY_HERITAGE_OVERVIEW.bottomBuddhaImage,
                isEn ? 'Enlightened Wisdom & Sacred Scriptures' : 'బుద్ధుని జ్ఞాన బోధనలు & పవిత్ర గ్రంథం',
                isEn ? 'Key Points to Remember' : 'భారతీయ సాహిత్య వారసత్వ సారాంశం'
              )}
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-[#FFFDF7] border-2 border-[#D4AF37] p-2 shadow-sm cursor-pointer group relative flex items-center justify-center overflow-hidden"
              title={isEn ? 'Click to enlarge illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
            >
              <img
                src={LITERARY_HERITAGE_OVERVIEW.bottomBuddhaImage}
                alt="Buddha and Sacred Book"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-[#FFE082]" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#7B1113]">
              {isEn ? 'Spiritual & Philosophical Enlightenment' : 'ఆధ్యాత్మిక & తాత్విక జ్ఞాన జ్యోతి'}
            </span>
          </div>

          {/* Center: 5 Key Takeaways */}
          <div className="lg:col-span-6 space-y-2.5">
            {(isEn ? LITERARY_KEY_POINTS.pointsEn : LITERARY_KEY_POINTS.pointsTe).map((pt, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] shadow-2xs flex items-start gap-2.5"
              >
                <span className="text-[#7B1113] font-black text-sm mt-0.5">★</span>
                <p className="text-xs sm:text-sm font-semibold text-[#2C1810] leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Extracted Scroll & Stack of Books */}
          <div className="lg:col-span-3 flex flex-col items-center space-y-1.5">
            <div
              onClick={() => handleOpenImage(
                LITERARY_HERITAGE_OVERVIEW.bottomScrollBooksImage,
                isEn ? 'Timeless Scrolls & Classics of India' : 'భారతీయ ప్రాచీన తాళపత్రాలు & గ్రంథ నిధి',
                isEn ? 'Preserving our literary heritage' : 'తరతరాలకు అందించాల్సిన అమూల్య వారసత్వం'
              )}
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-[#FFFDF7] border-2 border-[#D4AF37] p-2 shadow-sm cursor-pointer group relative flex items-center justify-center overflow-hidden"
              title={isEn ? 'Click to enlarge illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
            >
              <img
                src={LITERARY_HERITAGE_OVERVIEW.bottomScrollBooksImage}
                alt="Scroll and Books"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-[#FFE082]" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#7B1113]">
              {isEn ? 'Treasure of Knowledge & Creativity' : 'జ్ఞానం & సృజనాత్మకతల అమూల్య నిధి'}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
