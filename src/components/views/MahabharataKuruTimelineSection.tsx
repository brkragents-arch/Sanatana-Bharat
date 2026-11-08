import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  KURU_TIMELINE_EVENTS, 
  KURU_TIMELINE_METADATA, 
  type KuruTimelineEvent 
} from '../../data/kuruTimelineData';
import { 
  Search, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Filter, 
  ChevronRight,
  Clock
} from 'lucide-react';

interface MahabharataKuruTimelineSectionProps {
  onOpenChartModal?: (img: { src: string; title: string; subtitle?: string }) => void;
}

export const MahabharataKuruTimelineSection: React.FC<MahabharataKuruTimelineSectionProps> = ({ 
  onOpenChartModal 
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEvent, setSelectedEvent] = useState<KuruTimelineEvent | null>(null);
  const [viewStyle, setViewStyle] = useState<'spine' | 'grid'>('spine');
  const [isChartModalOpen, setIsChartModalOpen] = useState<boolean>(false);
  const [chartZoom, setChartZoom] = useState<number>(1);

  // Filter events
  const filteredEvents = useMemo(() => {
    return KURU_TIMELINE_EVENTS.filter(ev => {
      if (activeCategory !== 'all') {
        if (activeCategory === 'birth' && ev.category !== 'birth') return false;
        if (activeCategory === 'milestone' && (ev.category !== 'milestone' && ev.category !== 'coronation')) return false;
        if (activeCategory === 'war_climax' && (ev.category !== 'war' && ev.category !== 'exile' && ev.category !== 'niryana')) return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        ev.titleEn.toLowerCase().includes(q) ||
        ev.titleTe.toLowerCase().includes(q) ||
        ev.yearDisplay.toLowerCase().includes(q) ||
        ev.descriptionEn.toLowerCase().includes(q) ||
        ev.descriptionTe.toLowerCase().includes(q) ||
        ev.characters.some(c => c.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  const handleOpenSource = () => {
    if (onOpenChartModal) {
      onOpenChartModal({
        src: KURU_TIMELINE_METADATA.imageSrc,
        title: isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe,
        subtitle: isEn ? KURU_TIMELINE_METADATA.subtitleEn : KURU_TIMELINE_METADATA.subtitleTe
      });
    } else {
      setChartZoom(1);
      setIsChartModalOpen(true);
    }
  };

  return (
    <div className="w-full mt-6 space-y-6">
      
      {/* ============================================================ */}
      {/* 1. HEADER & ASTRONOMICAL DATING BANNER */}
      {/* ============================================================ */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/30 p-5 sm:p-6 shadow-md relative overflow-hidden">
        {/* Subtle Decorative Background Motif */}
        <div className="absolute -top-6 -right-6 text-7xl text-[#D4AF37]/15 select-none pointer-events-none font-serif">🏹</div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D4AF37]/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B1113] to-[#B71C1C] text-[#FFE082] flex items-center justify-center text-2xl shadow-sm border border-[#D4AF37]">
              📜
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider shadow-2xs">
                  {isEn ? 'Astronomical Historical Chronology' : 'ఖగోళ చారిత్రక కాలగణన'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-amber-100 text-[#7B1113] border border-amber-300">
                  {isEn ? KURU_TIMELINE_METADATA.spanEn : KURU_TIMELINE_METADATA.spanTe}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-1">
                {isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4037] font-medium mt-0.5">
                {isEn ? KURU_TIMELINE_METADATA.subtitleEn : KURU_TIMELINE_METADATA.subtitleTe}
              </p>
            </div>
          </div>

          {/* View Original Chart Lightbox Trigger Button */}
          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
            <button
              type="button"
              onClick={handleOpenSource}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:bg-[#FFD54F] text-[#7B1113] border-2 border-[#D4AF37] text-xs font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer"
              title={isEn ? "View Original Timeline Chart (Full Zoom)" : "మూల కాలరేఖ చిత్ర పటం చూడండి"}
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'View Original Chart' : 'మూల కాలరేఖ పటం (Original Chart)'}</span>
            </button>
          </div>
        </div>

        {/* Informational Sub-strip */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#5D4037] flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D84315]" />
            <span className="italic">
              {isEn 
                ? 'Timeline points reconstructed from traditional planetary alignments, Aihole inscription & Puranic genealogies.' 
                : 'గ్రహ స్థానాలు, మహాభారత ఖగోళ ఆధారాలు మరియు పురాణ వంశ క్రమం ఆధారంగా నిర్ధారించబడిన కాలరేఖ.'}
            </span>
          </div>
          <span className="font-mono font-bold text-[#7B1113] bg-white/80 px-2 py-0.5 rounded-md border border-[#D4AF37]/40 text-[11px]">
            BCE 3329 ➔ BCE 3102
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FILTER TOOLBAR & VIEW MODE SWITCHER */}
      {/* ============================================================ */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/60 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <span className="text-xs font-bold text-[#7B1113] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isEn ? 'Category:' : 'వర్గం:'}</span>
          </span>

          {[
            { id: 'all', labelTe: 'అన్ని ఘట్టాలు (19)', labelEn: 'All Events (19)' },
            { id: 'birth', labelTe: '👶 జననాలు (10)', labelEn: '👶 Births (10)' },
            { id: 'milestone', labelTe: '🏛️ కీలక మలుపులు (5)', labelEn: '🏛️ Milestones (5)' },
            { id: 'war_climax', labelTe: '⚔️ వనవాసం, యుద్ధం & ముగింపు (4)', labelEn: '⚔️ War & Inception (4)' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082] border border-[#E8DCC4]'
              }`}
            >
              {isEn ? cat.labelEn : cat.labelTe}
            </button>
          ))}
        </div>

        {/* Right side: View mode toggle & Search */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          {/* View mode toggle */}
          <div className="flex items-center bg-[#FAF7F0] p-0.5 rounded-xl border border-[#D4AF37]/50 text-xs font-bold">
            <button
              onClick={() => setViewStyle('spine')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                viewStyle === 'spine'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
              title={isEn ? 'Spine Branching View (Original Chart style)' : 'మూల పట శైలి (స్పైన్ వ్యూ)'}
            >
              {isEn ? 'Tree Spine' : 'మూల రేఖ'}
            </button>
            <button
              onClick={() => setViewStyle('grid')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                viewStyle === 'grid'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
              title={isEn ? 'Chronological Grid Cards' : 'కాల క్రమ కార్డులు'}
            >
              {isEn ? 'Cards' : 'కార్డులు'}
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 md:w-60">
            <Search className="w-3.5 h-3.5 text-[#7B1113] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? "Search event or person..." : "ఘట్టం లేదా వ్యక్తిని వెతకండి..."}
              className="w-full pl-8 pr-7 py-1 text-xs rounded-xl bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#7B1113] text-[#2C1810]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3A. SPINE BRANCHING VIEW (AUTHENTIC RECONSTRUCTION OF SOURCE) */}
      {/* ============================================================ */}
      {viewStyle === 'spine' && (
        <div className="p-4 sm:p-8 rounded-3xl bg-[#FAF7F0] border-2 border-[#D4AF37] shadow-inner relative overflow-hidden">
          {/* Subtle Vintage Texture Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

          {/* START PIN */}
          <div className="flex flex-col items-center mb-6 relative z-10">
            <div className="px-5 py-1.5 rounded-full bg-[#7B1113] text-[#FFE082] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#D4AF37] shadow-md flex items-center gap-1.5">
              <span>●</span>
              <span>START (కురువంశ మహాభారత కాలరేఖ ప్రారంభం)</span>
              <span>●</span>
            </div>
            <div className="w-1 h-6 bg-[#7B1113]/70" />
          </div>

          {/* Central Timeline Spine Container */}
          <div className="relative max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* The Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7B1113] via-[#D84315] to-[#7B1113] -translate-x-1/2 rounded-full hidden sm:block" />

            {filteredEvents.map((ev) => {
              const isRight = ev.side === 'right';

              return (
                <div 
                  key={ev.id}
                  className={`flex flex-col sm:flex-row items-center sm:gap-6 relative z-10 ${
                    isRight ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Event Card on the specified side */}
                  <div className="w-full sm:w-[46%]">
                    <div
                      onClick={() => setSelectedEvent(ev)}
                      className={`group p-3 sm:p-4 rounded-2xl bg-white border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer text-left relative overflow-hidden ${
                        isRight ? 'sm:text-left' : 'sm:text-right'
                      }`}
                    >
                      {/* Top Ribbon with Year & Category */}
                      <div className={`flex items-center gap-2 flex-wrap mb-1.5 ${
                        isRight ? 'sm:justify-start' : 'sm:justify-end'
                      }`}>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black font-mono shadow-2xs">
                          {ev.yearDisplay}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FFF8E1] text-[#D84315] border border-[#FFE082]">
                          {ev.category === 'birth' ? '👶 జననం' : ev.category === 'war' ? '⚔️ యుద్ధం' : ev.category === 'exile' ? '🌲 వనవాసం' : '🏛️ ఘట్టం'}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-black text-[#7B1113] font-telugu-serif group-hover:text-[#D84315] transition-colors leading-snug">
                        {isEn ? ev.titleEn : ev.titleTe}
                      </h4>

                      {/* Brief Explanation */}
                      <p className="text-[11px] sm:text-xs text-[#5D4037] mt-1 leading-relaxed line-clamp-2">
                        {isEn ? ev.descriptionEn : ev.descriptionTe}
                      </p>

                      {/* Characters involved pills */}
                      <div className={`mt-2 flex items-center gap-1 flex-wrap pt-1.5 border-t border-[#F4EEDF] ${
                        isRight ? 'sm:justify-start' : 'sm:justify-end'
                      }`}>
                        {ev.characters.map((char, ci) => (
                          <span key={ci} className="text-[9.5px] px-1.5 py-0.2 rounded-md bg-[#FAF7F0] text-[#7B1113] font-semibold border border-[#E8DCC4]">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Dot on Spine */}
                  <div className="w-7 h-7 rounded-full bg-[#FFF8E1] border-3 border-[#7B1113] shadow-md flex items-center justify-center text-xs font-bold text-[#7B1113] shrink-0 my-2 sm:my-0 group-hover:scale-125 transition-transform">
                    <span>{ev.icon}</span>
                  </div>

                  {/* Empty Spacer opposite to Card to keep center aligned */}
                  <div className="hidden sm:block sm:w-[46%]" />
                </div>
              );
            })}
          </div>

          {/* END PIN */}
          <div className="flex flex-col items-center mt-6 relative z-10">
            <div className="w-1 h-6 bg-[#7B1113]/70" />
            <div className="px-5 py-1.5 rounded-full bg-[#7B1113] text-[#FFE082] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#D4AF37] shadow-md flex items-center gap-1.5">
              <span>●</span>
              <span>END (కలియుగ ప్రవేశం & మహాప్రస్థాన ముగింపు)</span>
              <span>●</span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3B. CARD GRID VIEW */}
      {/* ============================================================ */}
      {viewStyle === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredEvents.map((ev, index) => (
            <div
              key={ev.id}
              onClick={() => setSelectedEvent(ev)}
              className="bg-white rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] p-4 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-2 group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{ev.icon}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black font-mono">
                      {ev.yearDisplay}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#8D6E63] uppercase">
                    #{index + 1}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif mt-2 group-hover:text-[#D84315] transition-colors leading-snug">
                  {isEn ? ev.titleEn : ev.titleTe}
                </h4>

                <p className="text-xs text-[#5D4037] mt-1 line-clamp-3 leading-relaxed">
                  {isEn ? ev.descriptionEn : ev.descriptionTe}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F4EEDF] flex items-center justify-between text-xs text-[#8D6E63]">
                <div className="flex items-center gap-1 truncate">
                  <span className="text-[10px] text-[#D84315] font-semibold truncate">
                    {ev.characters.slice(0, 2).join(', ')}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. EVENT DETAIL MODAL */}
      {/* ============================================================ */}
      {selectedEvent && (
        <div 
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-60 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-3xl border-3 border-[#D4AF37] max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/50 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{selectedEvent.icon}</span>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black font-mono">
                    {selectedEvent.yearDisplay}
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                    {isEn ? selectedEvent.titleEn : selectedEvent.titleTe}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-1 rounded-full hover:bg-stone-200 text-[#7B1113] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-3 text-xs sm:text-sm text-[#2C1810] leading-relaxed">
              <div className="bg-white p-3.5 rounded-xl border border-[#E8DCC4]">
                <h5 className="font-bold text-[#7B1113] mb-1">
                  {isEn ? 'Historical Event Narrative:' : 'చారిత్రక ఘట్ట విశేషం:'}
                </h5>
                <p>{isEn ? selectedEvent.descriptionEn : selectedEvent.descriptionTe}</p>
              </div>

              <div className="bg-[#FFF8E1] p-3 rounded-xl border border-amber-300">
                <h5 className="font-bold text-[#7B1113] mb-1">
                  {isEn ? 'Key Figures Involved:' : 'సంబంధిత ముఖ్య వ్యక్తులు:'}
                </h5>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedEvent.characters.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-white text-[#7B1113] font-bold border border-[#D4AF37]/50 text-xs shadow-2xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-[#E8DCC4] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-1.5 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] cursor-pointer"
              >
                {isEn ? 'Close' : 'ముగించు'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. ORIGINAL TIMELINE CHART ZOOMABLE MODAL */}
      {/* ============================================================ */}
      {isChartModalOpen && (
        <div 
          onClick={() => setIsChartModalOpen(false)}
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
                    {isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe}
                  </h3>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    {isEn ? 'Original Astronomical Dating Parchment Chart' : 'మూల ఖగోళ కాలగణన చిత్ర పటం'}
                  </span>
                </div>
              </div>

              {/* Zoom and close buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setChartZoom(prev => Math.min(prev + 0.25, 2.8))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setChartZoom(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setChartZoom(1)}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsChartModalOpen(false)}
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
                  transform: `scale(${chartZoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-out'
                }}
                className="shadow-2xl rounded-xl overflow-hidden max-w-2xl"
              >
                <img
                  src={KURU_TIMELINE_METADATA.imageSrc}
                  alt="Mahabharata Timeline Chart"
                  className="w-full h-auto block select-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsChartModalOpen(false)}
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
