import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useMythology } from '../../context/MythologyContext';
import { 
  VEDIC_CHRONOLOGY_TIMELINES, 
  RAMAYANA_ASTRONOMICAL_TIMELINE,
  RAMA_SHLOKA_ORIGIN_DATA,
  RAMAYANA_FAMILY_TREE_DATA,
  type VedicTimelineEra 
} from '../../data/vedicChronologyTimelineData';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  BookOpen, 
  Calendar, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Move,
  Target,
  Shield,
  CheckCircle2,
  ChevronRight,
  Info,
  ArrowDown
} from 'lucide-react';
import { BhagavadGitaTimelineModal } from './BhagavadGitaTimelineModal';

interface VedicItihasaChronologySectionProps {
  onOpenMasterChart?: (src: string, title: string, subtitle?: string) => void;
  defaultViewMode?: 'tree' | 'grid';
}

export const VedicItihasaChronologySection: React.FC<VedicItihasaChronologySectionProps> = ({
  onOpenMasterChart,
  defaultViewMode = 'tree'
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [viewMode, setViewMode] = useState<'tree' | 'grid'>(defaultViewMode);
  const [selectedEra, setSelectedEra] = useState<VedicTimelineEra | null>(null);
  const [isChartModalOpen, setIsChartModalOpen] = useState<boolean>(false);
  const [chartZoom, setChartZoom] = useState<number>(1);
  const [isRamayanaTimelineModalOpen, setIsRamayanaTimelineModalOpen] = useState<boolean>(false);
  const [ramayanaModalTab, setRamayanaModalTab] = useState<'events' | 'shloka' | 'familyTree' | 'poster'>('events');
  const [ramayanaPosterZoom, setRamayanaPosterZoom] = useState<number>(1);
  const [activeFamilyBranch, setActiveFamilyBranch] = useState<string>('all');
  const [familyTreeZoom, setFamilyTreeZoom] = useState<number>(0.95);
  const [treeViewStyle, setTreeViewStyle] = useState<'tree' | 'cards'>('tree');
  const [treePan, setTreePan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeKuruBranch, setActiveKuruBranch] = useState<string>('all');
  const [mahabharataMapFilter, setMahabharataMapFilter] = useState<'all' | 'pandavas' | 'kauravas' | 'neutral' | 'yadavas'>('all');
  const [selectedKingdomId, setSelectedKingdomId] = useState<string | null>(null);
  const [isGitaTimelineModalOpen, setIsGitaTimelineModalOpen] = useState<boolean>(false);
  const [kuruTreeZoom, setKuruTreeZoom] = useState<number>(0.85);
  const [kuruTreePan, setKuruTreePan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isKuruDragging, setIsKuruDragging] = useState<boolean>(false);
  const kuruDragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const kuruPanStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const kuruViewportRef = useRef<HTMLDivElement | null>(null);

  // Center and fit complete Kuru tree into container
  const handleFitKuruTreeToCenter = useCallback(() => {
    if (kuruViewportRef.current) {
      const containerWidth = kuruViewportRef.current.clientWidth;
      const fitScale = Math.min(0.95, Math.max(0.42, parseFloat(((containerWidth - 32) / 1020).toFixed(2))));
      setKuruTreeZoom(fitScale);
      setKuruTreePan({ x: 0, y: 0 });
    } else {
      setKuruTreeZoom(0.85);
      setKuruTreePan({ x: 0, y: 0 });
    }
  }, []);

  const handleKuruMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsKuruDragging(true);
    kuruDragStartRef.current = { x: e.clientX, y: e.clientY };
    kuruPanStartRef.current = { ...kuruTreePan };
  };

  const handleKuruMouseMove = (e: React.MouseEvent) => {
    if (!isKuruDragging) return;
    const dx = e.clientX - kuruDragStartRef.current.x;
    const dy = e.clientY - kuruDragStartRef.current.y;
    setKuruTreePan({
      x: kuruPanStartRef.current.x + dx,
      y: kuruPanStartRef.current.y + dy
    });
  };

  const handleKuruMouseUp = () => {
    setIsKuruDragging(false);
  };

  // Attach non-passive wheel event listener for Kuru Tree
  useEffect(() => {
    const el = kuruViewportRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      setKuruTreeZoom(prev => {
        const next = parseFloat((prev * zoomFactor).toFixed(2));
        return Math.min(2.2, Math.max(0.4, next));
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [selectedEra]);

  // Center Kuru tree when Era 4 opens
  useEffect(() => {
    if (selectedEra?.id === 'era_5000_3100_bc') {
      const timer = setTimeout(() => {
        handleFitKuruTreeToCenter();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedEra, handleFitKuruTreeToCenter]);
  const [isTreeDragging, setIsTreeDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const treeViewportRef = useRef<HTMLDivElement | null>(null);
  const touchDistRef = useRef<number>(0);

  // Center and fit complete tree into container
  const handleFitTreeToCenter = useCallback(() => {
    if (treeViewportRef.current) {
      const containerWidth = treeViewportRef.current.clientWidth;
      // Tree natural width is ~960px. Compute scale to display full tree centered.
      const fitScale = Math.min(0.95, Math.max(0.45, parseFloat(((containerWidth - 32) / 980).toFixed(2))));
      setFamilyTreeZoom(fitScale);
      setTreePan({ x: 0, y: 0 });
    } else {
      setFamilyTreeZoom(0.85);
      setTreePan({ x: 0, y: 0 });
    }
  }, []);

  // Mouse pan handlers
  const handleTreeMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsTreeDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...treePan };
  };

  const handleTreeMouseMove = (e: React.MouseEvent) => {
    if (!isTreeDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setTreePan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy
    });
  };

  const handleTreeMouseUp = () => {
    setIsTreeDragging(false);
  };

  // Touch pan & pinch zoom handlers
  const handleTreeTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsTreeDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      panStartRef.current = { ...treePan };
    } else if (e.touches.length === 2) {
      setIsTreeDragging(false);
      touchDistRef.current = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  };

  const handleTreeTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isTreeDragging) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      setTreePan({
        x: panStartRef.current.x + dx,
        y: panStartRef.current.y + dy
      });
    } else if (e.touches.length === 2) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchDistRef.current > 0) {
        const factor = newDist / touchDistRef.current;
        setFamilyTreeZoom(prev => Math.min(2.2, Math.max(0.4, parseFloat((prev * factor).toFixed(2)))));
        touchDistRef.current = newDist;
      }
    }
  };

  const handleTreeTouchEnd = () => {
    setIsTreeDragging(false);
    touchDistRef.current = 0;
  };

  // Attach non-passive wheel event listener for smooth zooming without page scroll
  useEffect(() => {
    const el = treeViewportRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      setFamilyTreeZoom(prev => {
        const next = parseFloat((prev * zoomFactor).toFixed(2));
        return Math.min(2.2, Math.max(0.4, next));
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [treeViewStyle]);

  // Center tree whenever active branch or modal opens
  useEffect(() => {
    const timer = setTimeout(() => {
      handleFitTreeToCenter();
    }, 150);
    return () => clearTimeout(timer);
  }, [activeFamilyBranch, isRamayanaTimelineModalOpen, selectedEra, handleFitTreeToCenter]);
  const [enlargedPoster, setEnlargedPoster] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [enlargedPosterZoom, setEnlargedPosterZoom] = useState<number>(1);

  
  // ==========================================================================
  // RAMAYANA FAMILY TREE (వంశవృక్ష పట రూపం - TRUE HIERARCHICAL TREE FORM)
  // 4 Major Lineages: Ikshvaku/Raghu & Nimi, Kishkindha Vanara, Lanka Paulastya
  // ==========================================================================
  const renderRamayanaTreeDiagram = () => {
    return (
      <div className="space-y-4">
        {/* Family Tree Header Banner */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-xs">🌳</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                    {isEn ? 'Genealogical Tree • 4 Lineages' : 'వంశవృక్ష పట రూపం • 4 ప్రధాన శాఖలు'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7B1113]">
                    !! ఇక్ష్వాకు - రఘు - నిమి - వానర - పౌలస్త్య వంశాలు !!
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  {isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe}
                </h4>
                <p className="text-xs text-[#5D4037] font-medium">
                  {isEn ? RAMAYANA_FAMILY_TREE_DATA.subtitleEn : RAMAYANA_FAMILY_TREE_DATA.subtitleTe}
                </p>
              </div>
            </div>

            <button
              onClick={() => setEnlargedPoster({
                src: RAMAYANA_FAMILY_TREE_DATA.imageSrc,
                title: isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe,
                subtitle: isEn ? 'Original Visual Family Tree Chart (Ramayana)' : 'మూల సచిత్ర వంశవృక్ష పటం (జూమ్ చేసి చూడండి)'
              })}
              className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'View Original Poster' : 'మూల పటం చూడండి'}</span>
            </button>
          </div>

          {/* Visual Source Chart Preview Strip */}
          <div 
            onClick={() => setEnlargedPoster({
              src: RAMAYANA_FAMILY_TREE_DATA.imageSrc,
              title: isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe,
              subtitle: isEn ? 'Click to inspect high-resolution family tree chart' : 'పూర్తి వంశవృక్ష పటాన్ని పెద్దదిగా పరిశీలించండి'
            })}
            className="p-3 rounded-2xl bg-white border border-[#D4AF37]/70 hover:border-[#7B1113] cursor-pointer transition-all flex flex-col sm:flex-row items-center gap-3.5 group shadow-xs"
          >
            <div className="w-full sm:w-56 h-32 rounded-xl overflow-hidden border border-amber-300 bg-amber-50/50 flex items-center justify-center shrink-0">
              <img 
                src={RAMAYANA_FAMILY_TREE_DATA.imageSrc} 
                alt="Ramayana Family Tree Chart" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif group-hover:underline">
                  {isEn ? 'Original Visual Chart: "Ramayana Family Tree"' : 'మూల సచిత్ర పటం: "Ramayana Family Tree"'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10px] font-black border border-amber-300">
                  🔍 జూమ్ చేయండి
                </span>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn ? RAMAYANA_FAMILY_TREE_DATA.descriptionEn : RAMAYANA_FAMILY_TREE_DATA.descriptionTe}
              </p>
              <div className="text-[11px] text-[#8B0000] font-semibold pt-0.5 flex items-center justify-center sm:justify-start gap-1">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isEn ? 'Click anywhere on this card to zoom the high-resolution source poster' : 'పూర్తి స్క్రీన్‌పై మూల పటాన్ని జూమ్ చేసి చూడటానికి ఇక్కడ క్లిక్ చేయండి'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tree Control Bar: Branch Filters + Zoom & Style Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 p-3 rounded-2xl border border-[#D4AF37]/60 shadow-xs">
          {/* Branch Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActiveFamilyBranch('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFamilyBranch === 'all'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#7B1113] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🌟</span>
              <span>{isEn ? 'All 4 Lineages (సమగ్రం)' : 'అన్ని 4 వంశాలు (సమగ్రం)'}</span>
            </button>
            <button
              onClick={() => setActiveFamilyBranch('raghu_ayodhya')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFamilyBranch === 'raghu_ayodhya'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>☀️</span>
              <span>{isEn ? 'Ayodhya Raghu' : 'రఘు వంశం (అయోధ్య)'}</span>
            </button>
            <button
              onClick={() => setActiveFamilyBranch('nimi_mithila')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFamilyBranch === 'nimi_mithila'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🌾</span>
              <span>{isEn ? 'Mithila Janaka' : 'నిమి వంశం (మిథిల)'}</span>
            </button>
            <button
              onClick={() => setActiveFamilyBranch('vanara_kishkindha')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFamilyBranch === 'vanara_kishkindha'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🐒</span>
              <span>{isEn ? 'Kishkindha Vanara' : 'కిష్కింధా వానర'}</span>
            </button>
            <button
              onClick={() => setActiveFamilyBranch('rakshasa_lanka')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFamilyBranch === 'rakshasa_lanka'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🔱</span>
              <span>{isEn ? 'Lanka Paulastya' : 'లంకా పౌలస్త్య'}</span>
            </button>
          </div>

          {/* Right Toolbar: View Mode Toggle & Zoom Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* View Style Switcher */}
            <div className="flex items-center bg-amber-100/70 p-0.5 rounded-xl border border-amber-300 text-xs">
              <button
                onClick={() => setTreeViewStyle('tree')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  treeViewStyle === 'tree'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'text-[#5D4037] hover:bg-amber-200/60'
                }`}
              >
                <span>🌳</span>
                <span>{isEn ? 'Tree View' : 'వంశవృక్ష పటం'}</span>
              </button>
              <button
                onClick={() => setTreeViewStyle('cards')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  treeViewStyle === 'cards'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'text-[#5D4037] hover:bg-amber-200/60'
                }`}
              >
                <span>📑</span>
                <span>{isEn ? 'Cards View' : 'వివరాల పట్టిక'}</span>
              </button>
            </div>

            {/* Tree Zoom Controls */}
            {treeViewStyle === 'tree' && (
              <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-xl border border-amber-200">
                <span className="text-[11px] font-bold text-[#7B1113] mr-1 min-w-[36px] text-center font-mono">
                  {Math.round(familyTreeZoom * 100)}%
                </span>
                <button
                  onClick={() => setFamilyTreeZoom(prev => Math.max(0.4, parseFloat((prev - 0.1).toFixed(2))))}
                  className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
                  title={isEn ? "Zoom Out (-)" : "జూమ్ తగ్గించండి (-)"}
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleFitTreeToCenter}
                  className="px-2 py-0.5 rounded-lg bg-[#7B1113] text-[#FFE082] text-[10.5px] font-bold transition-all cursor-pointer flex items-center gap-1 hover:bg-[#8E1C1E] shadow-2xs"
                  title={isEn ? "Fit & Center Tree" : "మొత్తం వృక్షాన్ని మధ్యలోకి తీసుకురండి"}
                >
                  <Target className="w-3 h-3" />
                  <span>{isEn ? "Center" : "కేంద్రీకరించు"}</span>
                </button>
                <button
                  onClick={() => {
                    setFamilyTreeZoom(1);
                    setTreePan({ x: 0, y: 0 });
                  }}
                  className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
                  title={isEn ? "Reset 100%" : "సాధారణ పరిమాణం (100%)"}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setFamilyTreeZoom(prev => Math.min(2.2, parseFloat((prev + 0.1).toFixed(2))))}
                  className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
                  title={isEn ? "Zoom In (+)" : "జూమ్ పెంచండి (+)"}
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tree Notice / Scroll hint */}
        {treeViewStyle === 'tree' && (
          <div className="flex items-center justify-between text-[11px] text-[#8B0000] font-medium px-2 flex-wrap gap-1.5 bg-amber-50/70 p-2 rounded-xl border border-amber-200/80">
            <span className="flex items-center gap-1.5 font-bold text-[#7B1113]">
              <Move className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'Mouse Controls:' : 'మౌస్ నియంత్రణలు:'}</span>
              <span className="font-normal text-[#5D4037]">
                {isEn 
                  ? '🖱️ Click & Drag to Pan • 🔄 Mouse Wheel to Zoom in/out • 🎯 Double click or click "Center" to center the full tree'
                  : '🖱️ మౌస్ పట్టుకుని లాగండి (Pan) • 🔄 వీల్ తిప్పితే జూమ్ (Zoom) • 🎯 డబుల్ క్లిక్ లేదా "కేంద్రీకరించు" బటన్ నొక్కితే మొత్తం వృక్షం మధ్యలోకి వస్తుంది'}
              </span>
            </span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {isEn ? 'Fully Centered at Open' : 'ప్రారంభంలోనే మధ్యలో అమర్చబడింది'}
            </span>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 1: TRUE HIERARCHICAL TREE CANVAS (వంశవృక్ష పట రూపం) */}
        {/* ======================================================== */}
        {treeViewStyle === 'tree' && (
          <div 
            ref={treeViewportRef}
            onMouseDown={handleTreeMouseDown}
            onMouseMove={handleTreeMouseMove}
            onMouseUp={handleTreeMouseUp}
            onMouseLeave={handleTreeMouseUp}
            onTouchStart={handleTreeTouchStart}
            onTouchMove={handleTreeTouchMove}
            onTouchEnd={handleTreeTouchEnd}
            onDoubleClick={handleFitTreeToCenter}
            className={`relative w-full h-[660px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFF3DC]/50 border-2 border-[#D4AF37] shadow-inner select-none flex items-center justify-center ${
              isTreeDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            title={isEn ? "Drag with mouse to pan, scroll wheel to zoom, double-click to center" : "మౌస్‌తో లాగి ప్యాన్ చేయండి, చక్రంతో జూమ్ చేయండి, డబుల్ క్లిక్ చేసి కేంద్రీకరించండి"}
          >
            {/* Draggable & Zoomable Canvas Content */}
            <div 
              className="absolute will-change-transform transition-transform duration-75"
              style={{ 
                transform: `translate(${treePan.x}px, ${treePan.y}px) scale(${familyTreeZoom})`, 
                transformOrigin: 'center center' 
              }}
            >
              <div className="w-[960px] p-6 space-y-10">
              {/* ---------------- SAKHA 1 & 2: SOLAR DYNASTY (ఇక్ష్వాకు వంశం) ---------------- */}
              {(activeFamilyBranch === 'all' || activeFamilyBranch === 'raghu_ayodhya' || activeFamilyBranch === 'nimi_mithila') && (
                <div className="space-y-6">
                  {/* Tree Section Heading */}
                  <div className="flex items-center justify-center gap-2 pb-1">
                    <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
                    <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black tracking-wide inline-flex items-center gap-1.5 shadow-xs">
                      <span>☀️</span>
                      <span>{isEn ? 'Solar Dynasty: Ikshvaku ➔ Raghu (Ayodhya) & Nimi (Mithila)' : 'సూర్యవంశం: ఇక్ష్వాకు మూలపురుషుడు ➔ రఘు (అయోధ్య) & నిమి (మిథిల) శాఖలు'}</span>
                    </span>
                    <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
                  </div>

                  {/* Level 0: Root Patriarch Ikshvaku */}
                  <div className="flex flex-col items-center">
                    <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#7B1113] via-[#A0181A] to-[#7B1113] text-[#FFE082] shadow-md border-2 border-[#D4AF37] text-center min-w-[260px]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                        {isEn ? 'Progenitor of Solar Dynasty' : 'సూర్యవంశ మూలపురుషుడు'}
                      </div>
                      <div className="text-base font-black font-telugu-serif flex items-center justify-center gap-1.5 text-white">
                        <span>☀️</span>
                        <span>{isEn ? 'King Ikshvaku' : 'ఇక్ష్వాకు చక్రవర్తి'}</span>
                      </div>
                      <div className="text-[10px] text-amber-100">
                        {isEn ? 'Son of Vaivasvata Manu • Ayodhya & Mithila Line Origin' : 'వైవస్వత మనువు పుత్రుడు • అయోధ్య & మిథిల రాజవంశ మూలం'}
                      </div>
                    </div>

                    {/* Vertical Stem dropping from Ikshvaku */}
                    <div className="w-0.5 h-6 bg-[#D4AF37]"></div>

                    {/* Horizontal Branch Bar splitting to Nimi and Raghu */}
                    <div className="relative w-3/4 max-w-2xl border-t-2 border-[#D4AF37]">
                      <div className="absolute -left-[1px] top-0 w-0.5 h-6 bg-[#D4AF37]"></div>
                      <div className="absolute -right-[1px] top-0 w-0.5 h-6 bg-[#D4AF37]"></div>
                    </div>
                  </div>

                  {/* Level 1: Two Major Branches (Nimi vs Raghu) */}
                  <div className="grid grid-cols-2 gap-8 pt-2">
                    {/* LEFT BRANCH: Nimi (Mithila) */}
                    <div className="flex flex-col items-center space-y-4">
                      {/* Nimi Node */}
                      <div className="px-4 py-2 rounded-xl bg-amber-100/90 border-2 border-amber-600 text-center min-w-[200px] shadow-xs">
                        <span className="text-[9.5px] font-bold text-amber-900 uppercase block">{isEn ? 'Mithila Lineage' : 'మిథిలా శాఖ'}</span>
                        <span className="text-sm font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'King Nimi' : 'నిమి చక్రవర్తి'}</span>
                        <span className="text-[9.5px] text-[#5D4037] block">{isEn ? 'Founder of Mithila Dynasty' : 'మిథిలా రాజ్య మూలపురుషుడు'}</span>
                      </div>

                      <div className="w-0.5 h-5 bg-[#D4AF37]"></div>

                      {/* Two Kings: Janaka & Kushadhwaja */}
                      <div className="relative w-full border-t-2 border-[#D4AF37] pt-4">
                        <div className="absolute left-1/4 top-0 w-0.5 h-4 bg-[#D4AF37]"></div>
                        <div className="absolute right-1/4 top-0 w-0.5 h-4 bg-[#D4AF37]"></div>

                        <div className="grid grid-cols-2 gap-3">
                          {/* King Janaka & Sunaina */}
                          <div className="p-3 rounded-xl bg-white border border-amber-300 shadow-2xs text-center space-y-1">
                            <div className="text-xs font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'King Janaka' : 'జనక మహారాజు (సీరధ్వజుడు)'}</div>
                            <div className="text-[10px] text-pink-700 font-semibold flex items-center justify-center gap-1">
                              <span>⚭</span>
                              <span>{isEn ? 'Queen Sunaina' : 'సునయనా దేవి'}</span>
                            </div>
                            <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                            <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200 space-y-1">
                              <div className="text-[9px] font-bold text-amber-800 uppercase">{isEn ? 'Daughters' : 'పుత్రికలు'}</div>
                              <div className="text-[11px] font-bold text-[#7B1113]">👑 {isEn ? 'Sita Devi (Janaki)' : 'సీతాదేవి (జానకి)'}</div>
                              <div className="text-[10.5px] text-[#5D4037]">🌸 {isEn ? 'Urmila Devi' : 'ఊర్మిళా దేవి'}</div>
                            </div>
                          </div>

                          {/* King Kushadhwaja & Chandrabhaga */}
                          <div className="p-3 rounded-xl bg-white border border-amber-300 shadow-2xs text-center space-y-1">
                            <div className="text-xs font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'King Kushadhwaja' : 'కుశధ్వజ మహారాజు'}</div>
                            <div className="text-[10px] text-pink-700 font-semibold flex items-center justify-center gap-1">
                              <span>⚭</span>
                              <span>{isEn ? 'Chandrabhaga' : 'చంద్రాభాగ దేవి'}</span>
                            </div>
                            <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                            <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200 space-y-1">
                              <div className="text-[9px] font-bold text-amber-800 uppercase">{isEn ? 'Daughters' : 'పుత్రికలు'}</div>
                              <div className="text-[10.5px] font-bold text-[#7B1113]">🌸 {isEn ? 'Mandavi Devi' : 'మాండవీ దేవి'}</div>
                              <div className="text-[10.5px] text-[#5D4037]">🌸 {isEn ? 'Shrutakirti Devi' : 'శ్రుతకీర్తి దేవి'}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT BRANCH: Raghu (Ayodhya) */}
                    <div className="flex flex-col items-center space-y-4">
                      {/* Raghu Node */}
                      <div className="px-4 py-2 rounded-xl bg-amber-100/90 border-2 border-amber-600 text-center min-w-[200px] shadow-xs">
                        <span className="text-[9.5px] font-bold text-amber-900 uppercase block">{isEn ? 'Ayodhya Lineage' : 'అయోధ్యా శాఖ'}</span>
                        <span className="text-sm font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'King Raghu' : 'రఘు చక్రవర్తి'}</span>
                        <span className="text-[9.5px] text-[#5D4037] block">{isEn ? 'Digvijaya Emperor of Ayodhya' : 'రఘువంశ కీర్తి ప్రతిష్టాపకుడు'}</span>
                      </div>

                      <div className="w-0.5 h-5 bg-[#D4AF37]"></div>

                      {/* King Dasharatha & 3 Queens */}
                      <div className="w-full max-w-sm p-3 rounded-xl bg-white border border-amber-300 shadow-2xs text-center space-y-1.5">
                        <div className="text-xs font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'King Dasharatha' : 'దశరథ మహారాజు (అయోధ్య)'}</div>
                        <div className="text-[10px] text-pink-700 font-semibold flex items-center justify-center gap-1 flex-wrap">
                          <span>⚭</span>
                          <span>{isEn ? 'Queens: Kausalya • Kaikeyi • Sumitra' : 'రాణులు: కౌసల్య • కైకేయి • సుమిత్ర'}</span>
                        </div>
                        <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                        <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200">
                          <div className="text-[9px] font-bold text-amber-800 uppercase mb-1">{isEn ? 'Four Sons (Rama, Bharata, Lakshmana, Shatrughna)' : 'చతుర్విధ పుత్రులు (రామ, భరత, లక్ష్మణ, శత్రుఘ్నులు)'}</div>
                          <div className="grid grid-cols-2 gap-1.5 text-[10.5px]">
                            <div className="bg-white p-1 rounded border border-amber-100 font-bold text-[#7B1113]">👑 {isEn ? 'Sri Rama (Kausalya)' : 'శ్రీరాముడు (కౌసల్య)'}</div>
                            <div className="bg-white p-1 rounded border border-amber-100 font-medium text-[#7B1113]">⚖️ {isEn ? 'Bharata (Kaikeyi)' : 'భరతుడు (కైకేయి)'}</div>
                            <div className="bg-white p-1 rounded border border-amber-100 font-medium text-[#7B1113]">🏹 {isEn ? 'Lakshmana (Sumitra)' : 'లక్ష్మణుడు (సుమిత్ర)'}</div>
                            <div className="bg-white p-1 rounded border border-amber-100 font-medium text-[#7B1113]">🗡️ {isEn ? 'Shatrughna (Sumitra)' : 'శత్రుఘ్నుడు (సుమిత్ర)'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Level 2: The 4 Divine Marriages & Descendant Sons */}
                  <div className="mt-8 pt-4 border-t-2 border-[#D4AF37]/50">
                    <div className="text-center mb-4">
                      <span className="px-3.5 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black tracking-wide inline-flex items-center gap-1.5 shadow-xs">
                        <span>💍</span>
                        <span>{isEn ? 'The 4 Epic Marriages & Descendant Sons (మిథిల - అయోధ్య సంయోగం)' : 'చతుర్విధ దివ్య వివాహాలు & భావి సంతానం (మిథిల - అయోధ్య సంయోగం)'}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                      {/* Union 1: Rama & Sita */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50/95 to-yellow-100/70 border-2 border-amber-400 shadow-xs space-y-2 text-center">
                        <div className="text-xs font-black text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                          <span>👑</span>
                          <span>{isEn ? 'Sri Rama ⚭ Sita Devi' : 'శ్రీరాముడు ⚭ సీతాదేవి'}</span>
                        </div>
                        <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                        <div className="bg-white/90 p-2 rounded-xl border border-amber-200 space-y-1">
                          <div className="text-[9.5px] font-bold text-emerald-800 uppercase">{isEn ? 'Sons / Descendants' : 'పుత్ర సంతానం'}</div>
                          <div className="flex justify-around items-center text-xs font-bold text-[#7B1113]">
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🏹 {isEn ? 'Kusha' : 'కుశుడు'}</span>
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🏹 {isEn ? 'Lava' : 'లవుడు'}</span>
                          </div>
                          <div className="text-[9.5px] text-[#555] italic pt-0.5">{isEn ? 'Rulers of Kushavati & Shravasti' : 'కుశావతి, శ్రావస్తి రాజ్యాల పాలకులు'}</div>
                        </div>
                      </div>

                      {/* Union 2: Bharata & Mandavi */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50/95 to-yellow-100/70 border border-amber-300 shadow-xs space-y-2 text-center">
                        <div className="text-xs font-bold text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                          <span>⚖️</span>
                          <span>{isEn ? 'Bharata ⚭ Mandavi' : 'భరతుడు ⚭ మాండవీ దేవి'}</span>
                        </div>
                        <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                        <div className="bg-white/90 p-2 rounded-xl border border-amber-200 space-y-1">
                          <div className="text-[9.5px] font-bold text-emerald-800 uppercase">{isEn ? 'Sons / Descendants' : 'పుత్ర సంతానం'}</div>
                          <div className="flex justify-around items-center text-xs font-bold text-[#7B1113]">
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🏛️ {isEn ? 'Taksha' : 'తక్షుడు'}</span>
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🏛️ {isEn ? 'Pushkala' : 'పుష్కలుడు'}</span>
                          </div>
                          <div className="text-[9.5px] text-[#555] italic pt-0.5">{isEn ? 'Founders of Takshashila & Pushkalavati' : 'తక్షశిల, పుష్కలావతి నగరాల స్థాపకులు'}</div>
                        </div>
                      </div>

                      {/* Union 3: Lakshmana & Urmila */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50/95 to-yellow-100/70 border border-amber-300 shadow-xs space-y-2 text-center">
                        <div className="text-xs font-bold text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                          <span>🏹</span>
                          <span>{isEn ? 'Lakshmana ⚭ Urmila' : 'లక్ష్మణుడు ⚭ ఊర్మిళా దేవి'}</span>
                        </div>
                        <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                        <div className="bg-white/90 p-2 rounded-xl border border-amber-200 space-y-1">
                          <div className="text-[9.5px] font-bold text-emerald-800 uppercase">{isEn ? 'Sons / Descendants' : 'పుత్ర సంతానం'}</div>
                          <div className="flex justify-around items-center text-xs font-bold text-[#7B1113]">
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🛡️ {isEn ? 'Angada' : 'అంగదుడు'}</span>
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">🛡️ {isEn ? 'Chandraketu' : 'చంద్రకేతు'}</span>
                          </div>
                          <div className="text-[9.5px] text-[#555] italic pt-0.5">{isEn ? 'Rulers of Angadiya & Karupatha' : 'కారూపథ, అంగదీయ రాజ్యాల పాలకులు'}</div>
                        </div>
                      </div>

                      {/* Union 4: Shatrughna & Shrutakirti */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50/95 to-yellow-100/70 border border-amber-300 shadow-xs space-y-2 text-center">
                        <div className="text-xs font-bold text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                          <span>🗡️</span>
                          <span>{isEn ? 'Shatrughna ⚭ Shrutakirti' : 'శత్రుఘ్నుడు ⚭ శ్రుతకీర్తి'}</span>
                        </div>
                        <div className="w-0.5 h-3 bg-amber-400 mx-auto"></div>
                        <div className="bg-white/90 p-2 rounded-xl border border-amber-200 space-y-1">
                          <div className="text-[9.5px] font-bold text-emerald-800 uppercase">{isEn ? 'Sons / Descendants' : 'పుత్ర సంతానం'}</div>
                          <div className="flex justify-around items-center text-xs font-bold text-[#7B1113]">
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">⚔️ {isEn ? 'Subahu' : 'సుబాహు'}</span>
                            <span className="bg-amber-100/70 px-2 py-0.5 rounded-md">⚔️ {isEn ? 'Shatrughati' : 'శత్రుఘాతి'}</span>
                          </div>
                          <div className="text-[9.5px] text-[#555] italic pt-0.5">{isEn ? 'Rulers of Mathura & Vidisha' : 'మధుర, విదిశ రాజ్యాల పాలకులు'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- SAKHA 3: KISHKINDHA VANARA LINEAGE ---------------- */}
              {(activeFamilyBranch === 'all' || activeFamilyBranch === 'vanara_kishkindha') && (
                <div className="mt-8 pt-6 border-t-2 border-[#D4AF37]/60 space-y-5">
                  <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl p-1.5 rounded-xl bg-[#1B5E20] text-[#FFE082]">🐒</span>
                      <div>
                        <h5 className="text-sm font-bold text-[#1B5E20] font-telugu-serif">
                          {isEn ? 'Kishkindha Vanara Lineage (కిష్కింధా వానర వంశం)' : 'కిష్కింధా వానర వంశం (Kishkindha Vanara Lineage)'}
                        </h5>
                        <p className="text-[10px] text-[#5D4037]">
                          {isEn ? 'Ancestry: Riksharajas & Kesari-Anjana' : 'వంశ మూలం: ఋక్షరజస్సు & కేసరి-అంజనాదేవి'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10.5px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {isEn ? 'Vanara Dynasty' : 'వానర శ్రేష్ఠుల వంశ క్రమం'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: Riksharajas ➔ Vali & Sugriva */}
                    <div className="flex flex-col items-center space-y-3 p-3.5 rounded-2xl bg-white border border-emerald-300 shadow-2xs">
                      <div className="px-4 py-1.5 rounded-xl bg-emerald-100/80 border border-emerald-500 text-center min-w-[190px]">
                        <span className="text-[9px] font-bold text-emerald-900 uppercase block">{isEn ? 'Vanara King Ancestor' : 'వానర వంశ మూలకర్త'}</span>
                        <span className="text-xs font-bold text-[#1B5E20] font-telugu-serif">{isEn ? 'King Riksharajas' : 'ఋక్షరజస్సు మహారాజు'}</span>
                      </div>

                      <div className="w-0.5 h-4 bg-emerald-400"></div>

                      <div className="relative w-full border-t-2 border-emerald-300 pt-3">
                        <div className="absolute left-1/4 top-0 w-0.5 h-3 bg-emerald-400"></div>
                        <div className="absolute right-1/4 top-0 w-0.5 h-3 bg-emerald-400"></div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          {/* Vali & Tara */}
                          <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                            <div className="text-xs font-bold text-[#1B5E20]">{isEn ? 'Vali' : 'వాలి (కిష్కింధా రాజు)'}</div>
                            <div className="text-[10px] text-pink-700 font-semibold">⚭ {isEn ? 'Tara' : 'తార'}</div>
                            <div className="w-0.5 h-2.5 bg-emerald-300 mx-auto"></div>
                            <div className="bg-white p-1 rounded border border-emerald-200 text-[10.5px] font-bold text-[#1B5E20]">
                              👑 {isEn ? 'Prince Angada' : 'యువరాజు అంగదుడు'}
                            </div>
                          </div>

                          {/* Sugriva & Ruma */}
                          <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                            <div className="text-xs font-bold text-[#1B5E20]">{isEn ? 'Sugriva' : 'సుగ్రీవుడు (కిష్కింధా రాజు)'}</div>
                            <div className="text-[10px] text-pink-700 font-semibold">⚭ {isEn ? 'Ruma' : 'రుమ'}</div>
                            <div className="text-[9.5px] text-[#555] italic pt-2">
                              {isEn ? 'Allied with Rama, Crowned King' : 'శ్రీరామ మిత్రుడు, ధర్మపాలకుడు'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Kesari & Anjana ➔ Lord Hanuman */}
                    <div className="flex flex-col items-center justify-between p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-300 shadow-2xs space-y-3">
                      <div className="text-center">
                        <span className="text-[9px] font-bold text-amber-900 uppercase block">{isEn ? 'Divine Parents' : 'దివ్య తల్లిదండ్రులు'}</span>
                        <div className="px-4 py-1.5 rounded-xl bg-white border border-amber-400 text-xs font-bold text-[#7B1113] shadow-2xs mt-1">
                          {isEn ? 'Kesari ⚭ Anjana Devi' : 'కేసరి ⚭ అంజనాదేవి'}
                        </div>
                        <span className="text-[9.5px] text-[#5D4037] block mt-0.5">{isEn ? 'Blessed by Vayu Deva & Lord Shiva' : 'వాయుదేవుడు, పరమశివుని దివ్యానుగ్రహం'}</span>
                      </div>

                      <div className="w-0.5 h-4 bg-amber-400"></div>

                      <div className="w-full p-2.5 rounded-xl bg-gradient-to-r from-[#7B1113] via-[#A0181A] to-[#7B1113] text-[#FFE082] text-center shadow-xs border border-[#D4AF37]">
                        <div className="text-xs font-black font-telugu-serif flex items-center justify-center gap-1.5 text-white">
                          <span>🚩</span>
                          <span>{isEn ? 'Lord Hanuman (Sri Anjaneya)' : 'శ్రీ ఆంజనేయుడు (హనుమంతుడు)'}</span>
                        </div>
                        <div className="text-[10px] text-amber-200 font-medium">
                          {isEn ? 'Rudra Avatar • Chiranjeevi • Parama Rama Bhakta' : 'రుద్రావతారం • చిరంజీవి • రామభక్తాగ్రేసరుడు'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- SAKHA 4: LANKA PAULASTYA LINEAGE ---------------- */}
              {(activeFamilyBranch === 'all' || activeFamilyBranch === 'rakshasa_lanka') && (
                <div className="mt-8 pt-6 border-t-2 border-[#D4AF37]/60 space-y-5">
                  <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl p-1.5 rounded-xl bg-[#4A148C] text-[#FFE082]">🔱</span>
                      <div>
                        <h5 className="text-sm font-bold text-[#4A148C] font-telugu-serif">
                          {isEn ? 'Lanka Paulastya Lineage (లంకా పౌలస్త్య రాక్షస వంశం)' : 'లంకా పౌలస్త్య రాక్షస వంశం (Lanka Paulastya Lineage)'}
                        </h5>
                        <p className="text-[10px] text-[#5D4037]">
                          {isEn ? 'Descendants of Sage Vishrava (Pulastya Gotra) & Queen Kaikesi' : 'బ్రహ్మ మానసపుత్ర పులస్త్య మహర్షి వంశజుడైన విశ్రవస మహర్షి & కైకసి సంతానం'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10.5px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-0.5 rounded-full">
                      {isEn ? 'Paulastya Dynasty' : 'పౌలస్త్య వంశ క్రమం'}
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    {/* Root: Vishrava & Kaikesi */}
                    <div className="px-5 py-2 rounded-xl bg-purple-50 border-2 border-purple-400 text-center shadow-xs min-w-[240px]">
                      <span className="text-[9px] font-bold text-purple-900 uppercase block">{isEn ? 'Patriarch & Matriarch' : 'మూల దంపతులు'}</span>
                      <span className="text-xs font-bold text-[#4A148C] font-telugu-serif">
                        {isEn ? 'Sage Vishrava ⚭ Kaikesi' : 'విశ్రవస మహర్షి ⚭ కైకసి'}
                      </span>
                      <span className="text-[9.5px] text-[#5D4037] block">{isEn ? 'Father of Ravana, Kumbhakarna, Vibhishana, Shurpanakha' : 'రావణ, కుంభకర్ణ, విభీషణ, శూర్పణఖల జనకులు'}</span>
                    </div>

                    <div className="w-0.5 h-4 bg-purple-400"></div>

                    {/* Sibling Branches */}
                    <div className="relative w-full border-t-2 border-purple-300 pt-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                        {/* Ravana & Mandodari */}
                        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-300 shadow-2xs space-y-1.5">
                          <div className="text-xs font-bold text-[#4A148C]">{isEn ? 'King Ravana' : 'రావణాసురుడు (లంకాపతి)'}</div>
                          <div className="text-[10px] text-pink-700 font-semibold">⚭ {isEn ? 'Mandodari' : 'మండోదరి'}</div>
                          <div className="w-0.5 h-2 bg-purple-300 mx-auto"></div>
                          <div className="bg-white p-1.5 rounded-lg border border-purple-200 space-y-0.5">
                            <div className="text-[9px] font-bold text-purple-900 uppercase">{isEn ? 'Sons' : 'పుత్రులు'}</div>
                            <div className="text-[10.5px] font-bold text-[#4A148C]">⚡ {isEn ? 'Meghanada (Indrajit)' : 'మేఘనాథుడు (ఇంద్రజిత్తు)'}</div>
                            <div className="text-[10px] text-[#5D4037]">⚔️ {isEn ? 'Akshayakumara' : 'అక్షయకుమారుడు'}</div>
                          </div>
                        </div>

                        {/* Vibhishana */}
                        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-300 shadow-2xs space-y-1.5">
                          <div className="text-xs font-bold text-[#4A148C]">{isEn ? 'Vibhishana' : 'విభీషణుడు'}</div>
                          <div className="text-[10px] text-emerald-700 font-semibold">{isEn ? 'Dharma Parayana' : 'ధర్మపరుడు • శరణాగతుడు'}</div>
                          <div className="bg-white p-1.5 rounded-lg border border-purple-200 text-[10px] text-[#555] italic">
                            {isEn ? 'Crowned King of Lanka by Sri Rama' : 'శ్రీరామునిచే లంకా సామ్రాజ్యానికి పట్టాభిషిక్తుడు'}
                          </div>
                        </div>

                        {/* Kumbhakarna */}
                        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-300 shadow-2xs space-y-1.5">
                          <div className="text-xs font-bold text-[#4A148C]">{isEn ? 'Kumbhakarna' : 'కుంభకర్ణుడు'}</div>
                          <div className="text-[10px] text-amber-700 font-semibold">{isEn ? 'Colossal Warrior' : 'మహాకాయ వీరుడు'}</div>
                          <div className="bg-white p-1.5 rounded-lg border border-purple-200 text-[10px] text-[#555] italic">
                            {isEn ? 'Immense strength, 6-month slumber boons' : 'సాటిలేని భుజబలం, ఆరు నెలల నిద్రా వరం'}
                          </div>
                        </div>

                        {/* Shurpanakha */}
                        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-300 shadow-2xs space-y-1.5">
                          <div className="text-xs font-bold text-[#4A148C]">{isEn ? 'Shurpanakha' : 'శూర్పణఖ'}</div>
                          <div className="text-[10px] text-rose-700 font-semibold">{isEn ? 'Sister of Ravana' : 'రావణుని సోదరి'}</div>
                          <div className="bg-white p-1.5 rounded-lg border border-purple-200 text-[10px] text-[#555] italic">
                            {isEn ? 'Instigated Panchavati conflict & abduction' : 'పంచవటి ఘటన & యుద్ధానికి కారణభూతురాలు'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>

            {/* Floating Navigation Controls Overlay */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#D4AF37] shadow-md z-10 text-xs">
              <button
                onClick={() => setFamilyTreeZoom(prev => Math.max(0.4, parseFloat((prev - 0.1).toFixed(2))))}
                className="p-1.5 rounded-xl hover:bg-amber-100 text-[#7B1113] transition-colors cursor-pointer"
                title={isEn ? "Zoom Out (-)" : "జూమ్ తగ్గించండి (-)"}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono font-bold text-[#7B1113] text-[11px] px-1">
                {Math.round(familyTreeZoom * 100)}%
              </span>
              <button
                onClick={() => setFamilyTreeZoom(prev => Math.min(2.2, parseFloat((prev + 0.1).toFixed(2))))}
                className="p-1.5 rounded-xl hover:bg-amber-100 text-[#7B1113] transition-colors cursor-pointer"
                title={isEn ? "Zoom In (+)" : "జూమ్ పెంచండి (+)"}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleFitTreeToCenter}
                className="ml-1 px-2.5 py-1 rounded-xl bg-[#7B1113] text-[#FFE082] text-[10.5px] font-bold hover:bg-[#8E1C1E] transition-colors cursor-pointer flex items-center gap-1"
                title={isEn ? "Fit Whole Tree to Center" : "మొత్తం వంశవృక్షాన్ని మధ్యలోకి అమర్చండి"}
              >
                <Target className="w-3 h-3" />
                <span>{isEn ? "Fit to Center" : "కేంద్రీకరించు"}</span>
              </button>
            </div>

            {/* Top-left Quick Pan Pill Hint */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-sm text-white/90 text-[10.5px] font-semibold flex items-center gap-1.5 pointer-events-none z-10 border border-white/20 shadow-xs">
              <Move className="w-3 h-3 text-[#FFE082]" />
              <span>{isEn ? "Drag to Pan • Wheel to Zoom" : "లాగి తరలించండి (Pan) • చక్రంతో జూమ్"}</span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: OPTIONAL DETAIL CARDS REGISTRY */}
        {/* ======================================================== */}
        {treeViewStyle === 'cards' && (
          <div className="space-y-3.5">
            {RAMAYANA_FAMILY_TREE_DATA.branches
              .filter(b => activeFamilyBranch === 'all' || activeFamilyBranch === b.branchId)
              .map((branch) => (
                <div 
                  key={branch.branchId} 
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-amber-100 pb-2 flex-wrap">
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#7B1113]"></span>
                        {isEn ? branch.branchTitleEn : branch.branchTitleTe}
                      </h5>
                      <span className="text-[11px] text-[#5D4037] font-medium">
                        {isEn ? branch.originEn : branch.originTe}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#7B1113] text-[10.5px] font-bold border border-amber-200">
                      {branch.members.length} {isEn ? 'Key Unions / Nodes' : 'ముఖ్య సంబంధాలు'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {branch.members.map((member, mIdx) => (
                      <div 
                        key={mIdx} 
                        className="p-3 rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/40 border border-amber-200/80 space-y-2 hover:border-[#D4AF37] transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl p-1.5 rounded-lg bg-white shadow-2xs border border-amber-200">
                              {member.avatarIcon || '👑'}
                            </span>
                            <div>
                              <h6 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                                {isEn ? member.nameEn : member.nameTe}
                              </h6>
                              <p className="text-[10.5px] text-[#8B0000] font-medium">
                                {isEn ? member.roleEn : member.roleTe}
                              </p>
                            </div>
                          </div>
                        </div>

                        {member.spouseTe && (
                          <div className="text-[11px] text-[#2C1810] bg-white/80 p-2 rounded-lg border border-amber-100">
                            <span className="font-bold text-[#7B1113]">
                              {isEn ? 'Spouse: ' : 'ధర్మపత్ని: '}
                            </span>
                            {isEn ? member.spouseEn : member.spouseTe}
                          </div>
                        )}

                        {member.childrenTe && member.childrenTe.length > 0 && (
                          <div className="text-[11px] text-[#2C1810] bg-white/80 p-2 rounded-lg border border-amber-100 space-y-1">
                            <span className="font-bold text-[#15803D] block">
                              {isEn ? 'Children (Sons / Descendants):' : 'సంతానం (కుమారులు / వంశీయులు):'}
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-1">
                              {(isEn ? member.childrenEn : member.childrenTe)?.map((child, cIdx) => (
                                <li key={cIdx} className="flex items-center gap-1.5 text-[10.5px] font-medium text-[#3E0A0C]">
                                  <span className="text-[#D84315] font-black">•</span>
                                  <span>{child}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {member.notesTe && (
                          <p className="text-[10.5px] text-[#555] italic bg-white/50 p-1.5 rounded-md">
                            {isEn ? member.notesEn : member.notesTe}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };


  
  // ==========================================================================
  // MAHABHARATA KURU FAMILY TREE (కురువంశ సంపూర్ణ వంశవృక్ష ప్రవాహ పటం)
  // Reconstructing "FAMILY TREE OF THE KURU DYNASTY" in Flow Chart format
  // ==========================================================================
  const renderMahabharataKuruTreeDiagram = () => {
    return (
      <div className="space-y-4">
        {/* Header Banner */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-xs">🏹</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                    {isEn ? 'Kuru Family Tree Flow Chart' : 'కురువంశ ప్రవాహ వంశవృక్షం'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7B1113]">
                    !! కురు - శంతను - భీష్మ - వ్యాస - పాండవ - కౌరవ వంశ క్రమం !!
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  {isEn ? 'Family Tree of the Kuru Dynasty' : 'కురువంశ సంపూర్ణ వంశవృక్షం (Family Tree of the Kuru Dynasty)'}
                </h4>
                <p className="text-xs text-[#5D4037] font-medium">
                  {isEn 
                    ? 'Complete genealogical lineage of the Mahabharata Era: from King Kuru, Shantanu, Bhishma, Vyasa, Pandu, Dhritarashtra to Pandavas, Kauravas & successors'
                    : 'మహాభారత యుగ సమగ్ర వంశ క్రమం: కురు మహారాజు నుండి శంతనుడు, భీష్ముడు, వేదవ్యాసుడు, పాండురాజు, ధృతరాష్ట్రుడు, పాండవులు, కౌరవులు మరియు పరీక్షిత్తు-జనమేజయుల వరకు'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setEnlargedPoster({
                src: './images/indian_history/mahabharata_kuru_family_tree.png',
                title: isEn ? 'Family Tree of the Kuru Dynasty' : 'కురువంశ సంపూర్ణ వంశవృక్ష పటం',
                subtitle: isEn ? 'Original Visual Chart of Kuru Lineage' : 'మూల సచిత్ర వంశవృక్ష పటం (జూమ్ చేసి చూడండి)'
              })}
              className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'View Original Poster' : 'మూల పటం చూడండి'}</span>
            </button>
          </div>

          {/* Visual Source Chart Preview Strip */}
          <div 
            onClick={() => setEnlargedPoster({
              src: './images/indian_history/mahabharata_kuru_family_tree.png',
              title: isEn ? 'Family Tree of the Kuru Dynasty' : 'కురువంశ సంపూర్ణ వంశవృక్ష పటం',
              subtitle: isEn ? 'Click to inspect high-resolution Kuru family tree chart' : 'పూర్తి వంశవృక్ష పటాన్ని పెద్దదిగా పరిశీలించండి'
            })}
            className="p-3 rounded-2xl bg-white border border-[#D4AF37]/70 hover:border-[#7B1113] cursor-pointer transition-all flex flex-col sm:flex-row items-center gap-3.5 group shadow-xs"
          >
            <div className="w-full sm:w-56 h-32 rounded-xl overflow-hidden border border-amber-300 bg-amber-50/50 flex items-center justify-center shrink-0">
              <img 
                src="./images/indian_history/mahabharata_kuru_family_tree.png" 
                alt="Family Tree of the Kuru Dynasty" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif group-hover:underline">
                  {isEn ? 'Original Chart: "Family Tree of the Kuru Dynasty"' : 'మూల సచిత్ర పటం: "Family Tree of the Kuru Dynasty"'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10px] font-black border border-amber-300">
                  🔍 జూమ్ చేయండి
                </span>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Comprehensive genealogical flow chart illustrating the ancestry of Shantanu, the Niyoga lineages through Sage Vyasa, the 100 Kauravas, the 5 Pandavas with their divine parentage, marriages with Draupadi, Subhadra, Hidimbi, and the succession to Parikshit and Janamejaya.'
                  : 'శంతనుని పూర్వీకత, వేదవ్యాస మహర్షి నియోగ వంశం, 100 మంది కౌరవులు, దైవాంశ సంభూతులైన పంచపాండవులు, ద్రౌపది, సుభద్ర, హిడింబిలతో వారి వివాహాలు, ఉపపాండవులు మరియు అభిమన్యు-పరీక్షిత్-జనమేజయుల రాజవంశ వారసత్వాన్ని తెలిపే సంపూర్ణ వంశవృక్ష ప్రవాహ పటం.'}
              </p>
              <div className="text-[11px] text-[#8B0000] font-semibold pt-0.5 flex items-center justify-center sm:justify-start gap-1">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isEn ? 'Click anywhere on this card to zoom the high-resolution source poster' : 'పూర్తి స్క్రీన్‌పై మూల పటాన్ని జూమ్ చేసి చూడటానికి ఇక్కడ క్లిక్ చేయండి'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tree Control Toolbar: Branch Filter + Zoom & Pan Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 p-3 rounded-2xl border border-[#D4AF37]/60 shadow-xs">
          {/* Branch Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActiveKuruBranch('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeKuruBranch === 'all'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#7B1113] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🌟</span>
              <span>{isEn ? 'All Branches (సమగ్రం)' : 'అన్ని శాఖలు (సమగ్రం)'}</span>
            </button>
            <button
              onClick={() => setActiveKuruBranch('pandavas')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeKuruBranch === 'pandavas'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🏹</span>
              <span>{isEn ? 'The Pandavas' : 'పాండవ శాఖ (5గురు పాండవులు)'}</span>
            </button>
            <button
              onClick={() => setActiveKuruBranch('kauravas')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeKuruBranch === 'kauravas'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>👑</span>
              <span>{isEn ? 'The Kauravas' : 'కౌరవ శాఖ (100 మంది సోదరులు)'}</span>
            </button>
            <button
              onClick={() => setActiveKuruBranch('pre_kuru')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeKuruBranch === 'pre_kuru'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>📜</span>
              <span>{isEn ? 'Pre-Kuru Ancestry' : 'పూర్వ కురు శాఖ (శంతను, వ్యాస)'}</span>
            </button>
            <button
              onClick={() => setActiveKuruBranch('yadava')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeKuruBranch === 'yadava'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
              }`}
            >
              <span>🦚</span>
              <span>{isEn ? 'Yadava-Krishna Link' : 'యాదవ-కృష్ణ బంధుత్వం'}</span>
            </button>
          </div>

          {/* Zoom Controls & Centering */}
          <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-xl border border-amber-200">
            <span className="text-[11px] font-bold text-[#7B1113] mr-1 min-w-[36px] text-center font-mono">
              {Math.round(kuruTreeZoom * 100)}%
            </span>
            <button
              onClick={() => setKuruTreeZoom(prev => Math.max(0.4, parseFloat((prev - 0.1).toFixed(2))))}
              className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleFitKuruTreeToCenter}
              className="px-2 py-0.5 rounded-lg bg-[#7B1113] text-[#FFE082] text-[10.5px] font-bold transition-all cursor-pointer flex items-center gap-1 hover:bg-[#8E1C1E] shadow-2xs"
              title="Fit & Center"
            >
              <Target className="w-3 h-3" />
              <span>{isEn ? "Center" : "కేంద్రీకరించు"}</span>
            </button>
            <button
              onClick={() => {
                setKuruTreeZoom(1);
                setKuruTreePan({ x: 0, y: 0 });
              }}
              className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
              title="Reset 100%"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setKuruTreeZoom(prev => Math.min(2.2, parseFloat((prev + 0.1).toFixed(2))))}
              className="p-1 rounded-lg hover:bg-white text-[#7B1113] transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pan & Zoom Hint */}
        <div className="flex items-center justify-between text-[11px] text-[#8B0000] font-medium px-2 flex-wrap gap-1.5 bg-amber-50/70 p-2 rounded-xl border border-amber-200/80">
          <span className="flex items-center gap-1.5 font-bold text-[#7B1113]">
            <Move className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Mouse Controls:' : 'మౌస్ నియంత్రణలు:'}</span>
            <span className="font-normal text-[#5D4037]">
              {isEn 
                ? '🖱️ Click & Drag to Pan • 🔄 Mouse Wheel to Zoom in/out • 🎯 Double click or click "Center" to center the whole tree'
                : '🖱️ మౌస్ పట్టుకుని లాగండి (Pan) • 🔄 వీల్ తిప్పితే జూమ్ (Zoom) • 🎯 డబుల్ క్లిక్ లేదా "కేంద్రీకరించు" బటన్ నొక్కితే మొత్తం వంశవృక్షం మధ్యలోకి వస్తుంది'}
            </span>
          </span>
          <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            {isEn ? 'Kuru Dynasty Flow Tree' : 'కురువంశ ప్రవాహ పటం'}
          </span>
        </div>

        {/* ======================================================== */}
        {/* TRUE HIERARCHICAL KURU TREE FLOW CHART CANVAS             */}
        {/* ======================================================== */}
        <div 
          ref={kuruViewportRef}
          onMouseDown={handleKuruMouseDown}
          onMouseMove={handleKuruMouseMove}
          onMouseUp={handleKuruMouseUp}
          onMouseLeave={handleKuruMouseUp}
          onDoubleClick={handleFitKuruTreeToCenter}
          className={`relative w-full h-[680px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFF3DC]/50 border-2 border-[#D4AF37] shadow-inner select-none flex items-center justify-center ${
            isKuruDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          title={isEn ? "Drag with mouse to pan, scroll wheel to zoom, double-click to center" : "మౌస్‌తో లాగి ప్యాన్ చేయండి, చక్రంతో జూమ్ చేయండి, డబుల్ క్లిక్ చేసి కేంద్రీకరించండి"}
        >
          {/* Draggable & Zoomable Canvas Content */}
          <div 
            className="absolute will-change-transform transition-transform duration-75"
            style={{ 
              transform: `translate(${kuruTreePan.x}px, ${kuruTreePan.y}px) scale(${kuruTreeZoom})`, 
              transformOrigin: 'center center' 
            }}
          >
            <div className="w-[1020px] p-6 space-y-6">

              {/* LEVEL 0: Progenitor - King Kuru */}
              <div className="flex flex-col items-center">
                <div className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#7B1113] via-[#991B1B] to-[#7B1113] text-[#FFE082] shadow-md border-2 border-[#D4AF37] text-center min-w-[240px]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                    {isEn ? 'Patriarch of Kuru Dynasty' : 'కురువంశ మూలకర్త'}
                  </div>
                  <div className="text-base font-black font-telugu-serif text-white flex items-center justify-center gap-1.5">
                    <span>👑</span>
                    <span>{isEn ? 'King Kuru' : 'కురు మహారాజు (Kuru)'}</span>
                  </div>
                  <div className="text-[10px] text-amber-100">
                    {isEn ? 'Dynastic Ancestor of Kauravas & Pandavas' : 'కురుక్షేత్ర పుణ్యభూమి స్థాపకుడు'}
                  </div>
                </div>

                {/* Vertical Stem down to Shantanu */}
                <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
                <span className="text-[10px] text-[#7B1113] font-bold">▼</span>
              </div>

              {/* LEVEL 1: Shantanu, Ganga, Satyavati & Parashara */}
              <div className="p-4 rounded-2xl bg-white/90 border-2 border-amber-300 shadow-2xs space-y-3">
                <div className="text-center">
                  <span className="px-3 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10.5px] font-black border border-amber-300 uppercase tracking-wide">
                    {isEn ? 'Ancestral Unions & Lineages' : 'పూర్వీకుల వివాహ సంబంధాలు & వ్యాస ఆవిర్భావం'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center items-center">
                  {/* Left: Parashara × Satyavati ➔ Vyasa */}
                  <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-300 space-y-1.5">
                    <div className="text-[10px] font-bold text-orange-900 uppercase">{isEn ? 'Sage Union' : 'ఋషి సంయోగం'}</div>
                    <div className="text-xs font-bold text-[#7B1113]">
                      <span>{isEn ? 'Parashara' : 'పరాశర మహర్షి'}</span>
                      <span className="text-pink-600 font-bold px-1.5">×</span>
                      <span>{isEn ? 'Satyavati' : 'సత్యవతి'}</span>
                    </div>
                    <div className="w-0.5 h-3 bg-orange-400 mx-auto"></div>
                    <div className="p-2 rounded-lg bg-white border border-orange-300 shadow-2xs">
                      <div className="text-xs font-black text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                        <span>📜</span>
                        <span>{isEn ? 'Vyaasa (Krishna Dvaipayana)' : 'వేదవ్యాస మహర్షి (Vyaasa)'}</span>
                      </div>
                      <span className="text-[9.5px] text-[#5D4037] block mt-0.5">{isEn ? 'Compiler of Vedas & Mahabharata' : 'చతుర్వేద విభజనకర్త, నియోగ కర్త'}</span>
                    </div>
                  </div>

                  {/* Middle: Shantanu × Satyavati ➔ Vichitravirya */}
                  <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-400 space-y-1.5">
                    <div className="text-[10px] font-bold text-amber-900 uppercase">{isEn ? 'Kuru Throne' : 'హస్తినాపుర సింహాసనం'}</div>
                    <div className="text-xs font-bold text-[#7B1113]">
                      <span>{isEn ? 'Satyavati' : 'సత్యవతి'}</span>
                      <span className="text-pink-600 font-bold px-1.5">×</span>
                      <span className="font-black">{isEn ? 'Shantanu' : 'శంతనుడు (Shantanu)'}</span>
                    </div>
                    <div className="w-0.5 h-3 bg-amber-500 mx-auto"></div>
                    <div className="p-2 rounded-lg bg-white border border-amber-300 shadow-2xs">
                      <div className="text-xs font-black text-[#7B1113] font-telugu-serif">
                        {isEn ? 'Vichitravirya' : 'విచిత్రవీర్యుడు (Vichitravirya)'}
                      </div>
                      <span className="text-[9.5px] text-[#8B0000] block mt-0.5">{isEn ? 'Married Ambika & Ambalika (Died Childless)' : 'అంబిక, అంబాలికలను వివాహమాడి అకాల మరణం'}</span>
                    </div>
                  </div>

                  {/* Right: Shantanu × Ganga ➔ Bheeshma */}
                  <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-300 space-y-1.5">
                    <div className="text-[10px] font-bold text-blue-900 uppercase">{isEn ? 'Divine Union' : 'దేవ గంగా సంయోగం'}</div>
                    <div className="text-xs font-bold text-[#7B1113]">
                      <span className="font-black">{isEn ? 'Shantanu' : 'శంతనుడు'}</span>
                      <span className="text-pink-600 font-bold px-1.5">×</span>
                      <span>{isEn ? 'Ganga' : 'గంగాదేవి'}</span>
                    </div>
                    <div className="w-0.5 h-3 bg-blue-400 mx-auto"></div>
                    <div className="p-2 rounded-lg bg-white border border-blue-300 shadow-2xs">
                      <div className="text-xs font-black text-[#1E3A8A] font-telugu-serif flex items-center justify-center gap-1">
                        <span>🛡️</span>
                        <span>{isEn ? 'Bheeshma (Devavrata)' : 'భీష్ముడు (Bheeshma)'}</span>
                      </div>
                      <span className="text-[9.5px] text-[#5D4037] block mt-0.5">{isEn ? 'Lifelong Celibacy & Protector of Throne' : 'నైష్ఠిక బ్రహ్మచర్యం, కురువంశ రక్షకుడు'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEVEL 2: Niyoga of Sage Vyasa ➔ Dhritarashtra, Pandu, Vidura */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/60 via-orange-100/50 to-amber-100/60 border-2 border-amber-400 shadow-xs space-y-3">
                <div className="text-center space-y-0.5">
                  <span className="px-3.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-black uppercase tracking-wider">
                    {isEn ? 'Lineage via Niyoga by Sage Vyaasa' : 'సత్యవతి ఆదేశం: వేదవ్యాస మహర్షి నియోగ వంశోద్ధరణ'}
                  </span>
                  <p className="text-[10px] text-[#5D4037]">
                    {isEn ? 'Vyaasa × Ambika, Ambalika (widows of Vichitravirya) & Poorna (Maid)' : 'విచిత్రవీర్యుని భార్యలైన అంబిక, అంబాలికలు & పరిశ్రమి దాసి పూర్ణలతో వ్యాసుని నియోగం'}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {/* Dhritarashtra */}
                  <div className="p-3 rounded-xl bg-white border border-rose-300 shadow-2xs space-y-1">
                    <span className="text-[9px] font-bold text-rose-800 uppercase block">{isEn ? 'Vyaasa × Ambika' : 'వ్యాసుడు × అంబిక'}</span>
                    <div className="text-xs font-black text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                      <span>👑</span>
                      <span>{isEn ? 'Dhritarashtra' : 'ధృతరాష్ట్రుడు (Dhritarashtra)'}</span>
                    </div>
                    <div className="text-[10px] text-pink-700 font-bold">
                      <span>× {isEn ? 'Gandhari' : 'గాంధారి'}</span>
                      <span className="text-[9px] text-[#555] font-normal block">{isEn ? '(Brother: Shakuni)' : '(సోదరుడు: శకుని)'}</span>
                    </div>
                  </div>

                  {/* Pandu */}
                  <div className="p-3 rounded-xl bg-white border border-amber-300 shadow-2xs space-y-1">
                    <span className="text-[9px] font-bold text-amber-800 uppercase block">{isEn ? 'Vyaasa × Ambalika' : 'వ్యాసుడు × అంబాలిక'}</span>
                    <div className="text-xs font-black text-[#7B1113] font-telugu-serif flex items-center justify-center gap-1">
                      <span>🏹</span>
                      <span>{isEn ? 'Pandu' : 'పాండురాజు (Pandu)'}</span>
                    </div>
                    <div className="text-[10px] text-pink-700 font-bold">
                      <span>× {isEn ? 'Madri & Kunti' : 'మాద్రి & కుంతీదేవి'}</span>
                      <span className="text-[9px] text-[#555] font-normal block">{isEn ? '(Kunti brother: Vasudeva)' : '(కుంతి సోదరుడు: వసుదేవుడు)'}</span>
                    </div>
                  </div>

                  {/* Vidura */}
                  <div className="p-3 rounded-xl bg-white border border-emerald-300 shadow-2xs space-y-1">
                    <span className="text-[9px] font-bold text-emerald-800 uppercase block">{isEn ? 'Vyaasa × Poorna' : 'వ్యాసుడు × పూర్ణ (దాసి)'}</span>
                    <div className="text-xs font-black text-[#15803D] font-telugu-serif flex items-center justify-center gap-1">
                      <span>⚖️</span>
                      <span>{isEn ? 'Vidura' : 'మహాత్మా విదురుడు (Vidura)'}</span>
                    </div>
                    <span className="text-[9.5px] text-[#5D4037] block italic">{isEn ? 'Dharma Incarnate • Prime Minister' : 'యమధర్మరాజాంశ • నీతికోవిదుడు, ప్రధాని'}</span>
                  </div>
                </div>
              </div>

              {/* LEVEL 3: The Kauravas, The Pandavas & Yadava Connection */}
              <div className="grid grid-cols-12 gap-3 pt-2">
                
                {/* LEFT: Kauravas (Cols 1 to 4) */}
                <div className="col-span-4 p-3.5 rounded-2xl bg-rose-50/80 border-2 border-rose-300 shadow-xs space-y-2 text-center">
                  <div className="text-[10px] font-bold text-rose-900 uppercase">{isEn ? 'Kaurava Branch' : 'కౌరవ వంశ శాఖ'}</div>
                  <div className="text-xs font-black text-[#880E4F] font-telugu-serif">
                    {isEn ? 'Kauravas (100 Brothers) & Dusshala' : 'కౌరవులు: 100 మంది సోదరులు & దుశ్శల'}
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-rose-200 text-[10.5px] text-[#4A0012] space-y-1 text-left">
                    <div className="font-bold text-[#880E4F]">• {isEn ? 'Led by Duryodhana & Dussasana' : 'దుర్యోధనుడు, దుశ్శాసనాది నూరుగురు'}</div>
                    <div className="text-[10px] text-[#555]">• {isEn ? 'One Sister: Dusshala (married Jayadratha)' : 'ఏకైక సోదరి: దుశ్శల (సింధురాజు జయద్రథుని భార్య)'}</div>
                    <div className="text-[9.5px] text-rose-700 italic">• {isEn ? 'Guided by maternal uncle Shakuni' : 'మేనమామ శకుని మార్గదర్శకత్వం'}</div>
                  </div>
                </div>

                {/* RIGHT: Yadava Link & The 5 Pandavas + Karna (Cols 5 to 12) */}
                <div className="col-span-8 space-y-3">
                  {/* Yadava Connection Strip */}
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-300 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">🦚</span>
                      <div>
                        <span className="font-bold text-[#1E3A8A] font-telugu-serif">
                          {isEn ? 'Yadava Connection:' : 'యాదవ-కురు బంధుత్వం:'}
                        </span>
                        <span className="text-[10.5px] text-[#334155] ml-1">
                          {isEn 
                            ? 'Kunti brother Vasudeva × Devaki ➔ Lord Krishna & Subhadra' 
                            : 'కుంతి సోదరుడైన వసుదేవుడు × దేవకి ➔ శ్రీకృష్ణ పరమాత్మ & సుభద్ర'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1E3A8A] text-[9.5px] font-bold shrink-0">
                      శ్రీకృష్ణావతారం
                    </span>
                  </div>

                  {/* Karna Node */}
                  <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-bold text-amber-900 uppercase block">{isEn ? 'Before Marriage: Kunti × Surya' : 'వివాహపూర్వ వరం: కుంతి × సూర్య భగవానుడు'}</span>
                      <span className="text-xs font-black text-[#B45309] font-telugu-serif">☀️ {isEn ? 'Karna' : 'కర్ణుడు (Karna)'}</span>
                      <span className="text-[10px] text-[#5D4037] ml-2">× {isEn ? 'Vrishali ➔ Nine Sons' : 'వృషాలి ➔ తొమ్మిది మంది కుమారులు'}</span>
                    </div>
                    <span className="text-[9.5px] text-[#78350F] italic bg-white px-2 py-0.5 rounded border border-amber-200">
                      దానవీరశూర కర్ణుడు
                    </span>
                  </div>

                  {/* The 5 Pandavas Banner & Invocations */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-b from-emerald-50/90 to-teal-50/80 border-2 border-emerald-400 space-y-2.5 text-center">
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5 flex-wrap gap-1">
                      <div className="text-xs font-black text-[#15803D] font-telugu-serif flex items-center gap-1.5">
                        <span>🏹</span>
                        <span>{isEn ? 'The Five Pandavas (పంచపాండవులు) & Descendants' : 'పంచపాండవులు (The Pandavas) & ఉపపాండవ సంతానం'}</span>
                      </div>
                      <span className="text-[9.5px] font-bold text-[#15803D] bg-white px-2 py-0.5 rounded-full border border-emerald-300">
                        ధర్మ, వాయు, ఇంద్ర, అశ్విని దేవాంశ సంభూతులు
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-center text-xs">
                      {/* 1. Yudhishthira */}
                      <div className="p-2 rounded-xl bg-white border border-emerald-300 space-y-1 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase block">{isEn ? 'Kunti × Dharma' : 'కుంతి × యమధర్మ'}</span>
                        <div className="font-bold text-[#15803D] text-[11px] font-telugu-serif">{isEn ? 'Yudhishthira' : 'యుధిష్ఠిరుడు'}</div>
                        <div className="text-[9.5px] text-[#555]">× {isEn ? 'Draupadi' : 'ద్రౌపది'}</div>
                        <div className="w-0.5 h-2 bg-emerald-400 mx-auto"></div>
                        <div className="text-[9px] font-bold text-[#7B1113] bg-amber-50 p-1 rounded border border-amber-100">
                          {isEn ? 'Prativindhya' : 'ప్రతివింధ్యుడు'}
                        </div>
                      </div>

                      {/* 2. Bhima */}
                      <div className="p-2 rounded-xl bg-white border border-emerald-300 space-y-1 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase block">{isEn ? 'Kunti × Vayu' : 'కుంతి × వాయు'}</span>
                        <div className="font-bold text-[#15803D] text-[11px] font-telugu-serif">{isEn ? 'Bhima' : 'భీముడు'}</div>
                        <div className="text-[9.5px] text-[#555]">× {isEn ? 'Draupadi & Hidimbi' : 'ద్రౌపది & హిడింబి'}</div>
                        <div className="w-0.5 h-2 bg-emerald-400 mx-auto"></div>
                        <div className="text-[9px] font-bold text-[#7B1113] bg-amber-50 p-1 rounded border border-amber-100 space-y-0.5">
                          <div>{isEn ? 'Sutasoma' : 'సుతసోముడు'}</div>
                          <div className="text-emerald-800">{isEn ? 'Ghatotkacha' : 'ఘటోత్కచుడు'}</div>
                        </div>
                      </div>

                      {/* 3. Arjuna */}
                      <div className="p-2 rounded-xl bg-white border-2 border-emerald-500 space-y-1 shadow-xs">
                        <span className="text-[9px] font-bold text-emerald-900 uppercase block">{isEn ? 'Kunti × Indra' : 'కుంతి × ఇంద్ర'}</span>
                        <div className="font-black text-[#15803D] text-xs font-telugu-serif">🏹 {isEn ? 'Arjuna' : 'అర్జునుడు'}</div>
                        <div className="text-[9px] text-[#555]">× Draupadi, Subhadra, Ulupi, Chitrangada</div>
                        <div className="w-0.5 h-2 bg-emerald-400 mx-auto"></div>
                        <div className="text-[8.5px] font-bold text-[#7B1113] bg-amber-50 p-1 rounded border border-amber-100 space-y-0.5 text-left">
                          <div>• {isEn ? 'Srutakarman' : 'శ్రుతకర్ముడు'}</div>
                          <div className="font-black text-[#B71C1C]">• {isEn ? 'Abhimanyu' : 'అభిమన్యుడు'}</div>
                          <div>• {isEn ? 'Iravan' : 'ఇరావాన్'}</div>
                          <div>• {isEn ? 'Babhruvahana' : 'బభ్రువాహనుడు'}</div>
                        </div>
                      </div>

                      {/* 4. Nakula */}
                      <div className="p-2 rounded-xl bg-white border border-emerald-300 space-y-1 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase block">{isEn ? 'Madri × Ashwin' : 'మాద్రి × అశ్విని'}</span>
                        <div className="font-bold text-[#15803D] text-[11px] font-telugu-serif">{isEn ? 'Nakula' : 'నకులుడు'}</div>
                        <div className="text-[9.5px] text-[#555]">× {isEn ? 'Draupadi' : 'ద్రౌపది'}</div>
                        <div className="w-0.5 h-2 bg-emerald-400 mx-auto"></div>
                        <div className="text-[9px] font-bold text-[#7B1113] bg-amber-50 p-1 rounded border border-amber-100">
                          {isEn ? 'Satanika' : 'శతానీకుడు'}
                        </div>
                      </div>

                      {/* 5. Sahadeva */}
                      <div className="p-2 rounded-xl bg-white border border-emerald-300 space-y-1 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase block">{isEn ? 'Madri × Ashwin' : 'మాద్రి × అశ్విని'}</span>
                        <div className="font-bold text-[#15803D] text-[11px] font-telugu-serif">{isEn ? 'Sahadeva' : 'సహదేవుడు'}</div>
                        <div className="text-[9.5px] text-[#555]">× {isEn ? 'Draupadi' : 'ద్రౌపది'}</div>
                        <div className="w-0.5 h-2 bg-emerald-400 mx-auto"></div>
                        <div className="text-[9px] font-bold text-[#7B1113] bg-amber-50 p-1 rounded border border-amber-100">
                          {isEn ? 'Srutasena' : 'శ్రుతసేనుడు'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEVEL 4: Succession to Throne (Abhimanyu ➔ Parikshit ➔ Janamejaya) */}
              <div className="pt-2 border-t-2 border-[#D4AF37]/50 flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="px-3.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-black uppercase tracking-wider shadow-xs">
                    {isEn ? 'Succession to Kuru Imperial Throne' : 'హస్తినాపుర కురువంశ సింహాసన వారసత్వ పరంపర'}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center text-center">
                  {/* Node 1: Abhimanyu × Uttaraa */}
                  <div className="p-3 rounded-2xl bg-white border-2 border-amber-400 shadow-2xs space-y-1 min-w-[200px]">
                    <span className="text-[9px] font-bold text-amber-900 uppercase block">{isEn ? 'Martyred Hero' : 'వీర తిలకం'}</span>
                    <div className="text-xs font-black text-[#7B1113] font-telugu-serif">
                      <span>🏹 {isEn ? 'Abhimanyu' : 'అభిమన్యుడు'}</span>
                      <span className="text-pink-600 font-bold px-1.5">×</span>
                      <span>{isEn ? 'Uttaraa' : 'ఉత్తర (విరాట పుత్రి)'}</span>
                    </div>
                  </div>

                  <div className="text-[#D4AF37] font-black text-xl">➔</div>

                  {/* Node 2: Parikshit */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-100 border-2 border-[#7B1113] shadow-xs space-y-1 min-w-[200px]">
                    <span className="text-[9px] font-bold text-[#7B1113] uppercase block">{isEn ? 'Emperor of Kaliyuga Dawn' : 'కలియుగ తొలి చక్రవర్తి'}</span>
                    <div className="text-xs font-black text-[#7B1113] font-telugu-serif">
                      👑 {isEn ? 'King Parikshit' : 'పరీక్షిత్ మహారాజు (Parikshit)'}
                    </div>
                    <span className="text-[9.5px] text-[#5D4037] block">{isEn ? 'Saved in womb by Sri Krishna' : 'గర్భంలోనే శ్రీకృష్ణునిచే రక్షించబడినవాడు'}</span>
                  </div>

                  <div className="text-[#D4AF37] font-black text-xl">➔</div>

                  {/* Node 3: Janamejaya */}
                  <div className="p-3 rounded-2xl bg-white border-2 border-amber-400 shadow-2xs space-y-1 min-w-[200px]">
                    <span className="text-[9px] font-bold text-amber-900 uppercase block">{isEn ? 'Sarpa Satra Performer' : 'సర్పయాగ చక్రవర్తి'}</span>
                    <div className="text-xs font-black text-[#7B1113] font-telugu-serif">
                      👑 {isEn ? 'King Janamejaya' : 'జనమేజయ మహారాజు (Janamejaya)'}
                    </div>
                    <span className="text-[9.5px] text-[#5D4037] block">{isEn ? 'Heard Mahabharata from Vaisampayana' : 'వైశంపాయనుని నుండి మహాభారత శ్రవణం'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Navigation Controls Overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#D4AF37] shadow-md z-10 text-xs">
            <button
              onClick={() => setKuruTreeZoom(prev => Math.max(0.4, parseFloat((prev - 0.1).toFixed(2))))}
              className="p-1.5 rounded-xl hover:bg-amber-100 text-[#7B1113] transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono font-bold text-[#7B1113] text-[11px] px-1">
              {Math.round(kuruTreeZoom * 100)}%
            </span>
            <button
              onClick={() => setKuruTreeZoom(prev => Math.min(2.2, parseFloat((prev + 0.1).toFixed(2))))}
              className="p-1.5 rounded-xl hover:bg-amber-100 text-[#7B1113] transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleFitKuruTreeToCenter}
              className="ml-1 px-2.5 py-1 rounded-xl bg-[#7B1113] text-[#FFE082] text-[10.5px] font-bold hover:bg-[#8E1C1E] transition-colors cursor-pointer flex items-center gap-1"
              title="Fit to Center"
            >
              <Target className="w-3 h-3" />
              <span>{isEn ? "Center" : "కేంద్రీకరించు"}</span>
            </button>
          </div>

          {/* Top-left Quick Pan Pill Hint */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-sm text-white/90 text-[10.5px] font-semibold flex items-center gap-1.5 pointer-events-none z-10 border border-white/20 shadow-xs">
            <Move className="w-3 h-3 text-[#FFE082]" />
            <span>{isEn ? "Drag to Pan • Wheel to Zoom" : "లాగి తరలించండి (Pan) • చక్రంతో జూమ్"}</span>
          </div>
        </div>
      </div>
    );
  };


  
  // ==========================================================================
  // MAHABHARATA ERA MAP & ANCIENT KINGDOMS SECTION (Extract from Uploaded Map)
  // "India during Mahabharat times."
  // ==========================================================================
  const renderMahabharataMapSection = () => {
    const kingdomsData = [
      {
        id: 'kuru',
        nameTe: 'కురు రాజ్యము',
        nameEn: 'Kuru Kingdom',
        rulerTe: 'కౌరవులు (దుర్యోధనుడు, ధృతరాష్ట్రుడు)',
        rulerEn: 'Kauravas (Duryodhana, Dhritarashtra)',
        citiesTe: 'హస్తినాపురం (రాజధాని), కురుక్షేత్రం (రణరంగం)',
        citiesEn: 'Hastinapur (Capital), Kurukshetra (Battlefield)',
        regionTe: 'గంగా-యమునా దోఆబ్, హర్యానా & పశ్చిమ ఉత్తరప్రదేశ్',
        regionEn: 'Upper Ganga-Yamuna Doab (Haryana & Western UP)',
        mapHatchTe: 'ఊదా రంగు వాలు గీతలు & రాజధాని చుక్కలు',
        mapHatchEn: 'Purple diagonal hatching with city dots',
        allegiance: 'kauravas',
        allegianceLabelTe: 'కౌరవ పక్షం',
        allegianceLabelEn: 'Kaurava Bloc',
        badgeColor: 'bg-red-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF5F5] to-[#FFEBEE]',
        border: 'border-red-400',
        dotColor: 'bg-red-700',
        summaryTe: 'మహాభారత మూల రాజ్యం. హస్తినాపుర రాజధాని నుంచి పాలించబడింది. 18 రోజుల భీకర కురుక్షేత్ర సంగ్రామం ఇక్కడే జరిగింది.',
        summaryEn: 'Epicentre of Mahabharata. Ruled from Hastinapur; venue of the catastrophic 18-day Kurukshetra War.'
      },
      {
        id: 'indraprastha',
        nameTe: 'ఇంద్రప్రస్థము',
        nameEn: 'Indraprastha',
        rulerTe: 'పాండవులు (ధర్మరాజు, భీమార్జున నకుల సహదేవులు)',
        rulerEn: 'Pandavas (Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva)',
        citiesTe: 'ఇంద్రప్రస్థం (మాయాసభ రాజధాని)',
        citiesEn: 'Indraprastha (Maya Sabha Capital, modern Delhi)',
        regionTe: 'యమునా నదీ తీర ఖాండవప్రస్థ భూమి (ఢిల్లీ ప్రాంతం)',
        regionEn: 'Banks of Yamuna (Ancient Khandavaprastha, modern Delhi)',
        mapHatchTe: 'యమునా తీర ప్రత్యేక నగర చుక్క (Point on Yamuna)',
        mapHatchEn: 'Distinct urban point marked on Yamuna river',
        allegiance: 'pandavas',
        allegianceLabelTe: 'పాండవ పక్షం',
        allegianceLabelEn: 'Pandava Capital',
        badgeColor: 'bg-blue-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]',
        border: 'border-blue-400',
        dotColor: 'bg-blue-700',
        summaryTe: 'మయదానవుడు నిర్మించిన అద్భుత సభా భవనం. పాండవుల సార్వభౌమాధికారానికి ప్రతీకగా రాజసూయ యాగం నిర్వహించిన దివ్య నగరం.',
        summaryEn: 'Magnificent architectural wonder built by Maya Danava. Capital of the Pandavas where Rajasuya Yajna was performed.'
      },
      {
        id: 'dwaraka',
        nameTe: 'ద్వారక',
        nameEn: 'Dwaraka',
        rulerTe: 'శ్రీకృష్ణ భగవానుడు, బలరాముడు',
        rulerEn: 'Bhagavan Sri Krishna, Balarama & Vrishni Yadavas',
        citiesTe: 'ద్వారకాపురి (సువర్ణ సముద్ర నగరము)',
        citiesEn: 'Dwaraka City (Golden Submerged Marine Metropolis)',
        regionTe: 'పశ్చిమ తీరం, సౌరాష్ట్ర / గుజరాత్ సముద్ర తీరం',
        regionEn: 'Western Coast, Saurashtra / Gujarat (Arabian Sea)',
        mapHatchTe: 'పశ్చిమ తీర గులాబీ/ఊదా రంగు చుక్క',
        mapHatchEn: 'Coastal pink/purple marker dot on western tip',
        allegiance: 'yadavas',
        allegianceLabelTe: 'శ్రీకృష్ణుని దివ్య నగరం',
        allegianceLabelEn: 'Divine Capital of Krishna',
        badgeColor: 'bg-amber-700 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFFDF0] to-[#FFF8E1]',
        border: 'border-amber-400',
        dotColor: 'bg-amber-600',
        summaryTe: 'జరాసంధుని దాడుల అనంతరం సముద్ర గర్భంలో శ్రీకృష్ణుడు విశ్వకర్మ ద్వారా నిర్మింపజేసిన సువర్ణ కోట నగరం. మహాభారత దివ్య ఆధ్యాత్మిక కేంద్రం.',
        summaryEn: 'Impregnable golden ocean city founded by Sri Krishna after migrating from Mathura; spiritual heart of the epic.'
      },
      {
        id: 'panchal',
        nameTe: 'పాంచాల రాజ్యము',
        nameEn: 'Panchala Kingdom',
        rulerTe: 'ద్రుపద మహారాజు, ధృష్టద్యుమ్నుడు, శిఖండి',
        rulerEn: 'King Drupada, Dhrishtadyumna, Shikhandi',
        citiesTe: 'కాంపిల్య (దక్షిణ), అహిచ్ఛత్ర (ఉత్తర పాంచాల)',
        citiesEn: 'Kampilya (South), Ahichchhatra (North)',
        regionTe: 'మధ్య గంగా మైదానాలు, పశ్చిమ ఉత్తరప్రదేశ్',
        regionEn: 'Central Ganga Basin (Western UP)',
        mapHatchTe: 'ఎరుపు/మెరూన్ నిలువు గీతల హ్యాచింగ్',
        mapHatchEn: 'Red / Maroon vertical hatch lines',
        allegiance: 'pandavas',
        allegianceLabelTe: 'పాండవ మిత్రులు',
        allegianceLabelEn: 'Pandava Allies',
        badgeColor: 'bg-emerald-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]',
        border: 'border-emerald-400',
        dotColor: 'bg-emerald-700',
        summaryTe: 'ద్రౌపది (పాంచాలి) జన్మభూమి. పాండవులకు అత్యంత సన్నిహిత బంధు మిత్రరాజ్యం; ధృష్టద్యుమ్నుడు పాండవ సైన్యాధ్యక్షుడిగా ద్రోణుని వధించాడు.',
        summaryEn: 'Homeland of Draupadi (Panchali). Chief Pandava ally; Dhrishtadyumna served as Commander-in-Chief of Pandava forces.'
      },
      {
        id: 'gandhar',
        nameTe: 'గాంధార రాజ్యము',
        nameEn: 'Gandhara Kingdom',
        rulerTe: 'శకుని, సుబలుడు',
        rulerEn: 'Shakuni, King Subala',
        citiesTe: 'పురుషపురం / తక్షశిల',
        citiesEn: 'Purushapura (Peshawar), Takshashila',
        regionTe: 'వాయవ్య సరిహద్దు, కాబూల్-సింధు లోయ (ఆఫ్ఘనిస్తాన్-పాకిస్తాన్)',
        regionEn: 'North-West Frontier, Kabul-Indus valley',
        mapHatchTe: 'ఊదా రంగు నిలువు గీతల హ్యాచింగ్',
        mapHatchEn: 'Purple vertical hatch lines',
        allegiance: 'kauravas',
        allegianceLabelTe: 'కౌరవ పక్షం',
        allegianceLabelEn: 'Kaurava Bloc',
        badgeColor: 'bg-red-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF5F5] to-[#FFEBEE]',
        border: 'border-red-400',
        dotColor: 'bg-red-700',
        summaryTe: 'గాంధారి జన్మభూమి. శకుని పాచికల మాయతో పాండవులను వనవాసానికి పంపి, కౌరవులను సమూలంగా నాశనం చేసిన రాజకీయ సూత్రధారి.',
        summaryEn: 'Homeland of Queen Gandhari. Shakuni masterminded the fateful game of dice and led the Gandhara forces in war.'
      },
      {
        id: 'anga',
        nameTe: 'అంగ రాజ్యము',
        nameEn: 'Anga Kingdom',
        rulerTe: 'దానవీర కర్ణుడు',
        rulerEn: 'Danaveera Karna (King of Anga)',
        citiesTe: 'చంపా నగరం (చంపాపురి)',
        citiesEn: 'Champapuri (Modern Bhagalpur, Bihar)',
        regionTe: 'తూర్పు భారతదేశం, బీహార్-బెంగాల్ సరిహద్దు',
        regionEn: 'Eastern India, Ganga Basin (Bihar & Bengal)',
        mapHatchTe: 'నీలిరంగు చెకర్డ్ / గ్రిడ్ హ్యాచింగ్ గీతలు',
        mapHatchEn: 'Blue checkered grid hatch lines',
        allegiance: 'kauravas',
        allegianceLabelTe: 'కౌరవ మిత్రులు',
        allegianceLabelEn: 'Kaurava Allies',
        badgeColor: 'bg-orange-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]',
        border: 'border-orange-400',
        dotColor: 'bg-orange-700',
        summaryTe: 'సూతపుత్రుడని అవమానించబడిన కర్ణునికి దుర్యోధనుడు కిరీటం తొడిగి ఇచ్చిన రాజ్యం. కర్ణుడు ఇక్కడి నుంచే ప్రపంచ ప్రసిద్ధ దానధర్మాలు చేశాడు.',
        summaryEn: 'Kingdom crowned to Karna by Duryodhana, sealing their unbreakable bond. Seat of Karna’s legendary charity and Digvijaya.'
      },
      {
        id: 'mathura',
        nameTe: 'మథుర (శూరసేన)',
        nameEn: 'Mathura (Surasena)',
        rulerTe: 'ఉగ్రసేనుడు, కంసుడు, వృష్ణి యాదవులు',
        rulerEn: 'Ugrasena, Kamsa, Vrishni Yadavas',
        citiesTe: 'మథురా నగరం',
        citiesEn: 'Mathura City (Yamuna Banks)',
        regionTe: 'యమునా నదీ తీర శూరసేన ప్రాంతం, ఉత్తరప్రదేశ్',
        regionEn: 'Braj region, Yamuna river basin (UP)',
        mapHatchTe: 'ఇంద్రప్రస్థం క్రింది ప్రత్యేక నగర గుర్తు',
        mapHatchEn: 'Specific city dot south of Indraprastha',
        allegiance: 'yadavas',
        allegianceLabelTe: 'శ్రీకృష్ణుని జన్మస్థలం',
        allegianceLabelEn: 'Birthplace of Krishna',
        badgeColor: 'bg-purple-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF]',
        border: 'border-purple-400',
        dotColor: 'bg-purple-700',
        summaryTe: 'శ్రీకృష్ణ పరమాత్మ జన్మస్థలం. దుష్ట కంస వధ జరిగిన క్షేత్రం; యాదవుల పూర్వ రాజధాని.',
        summaryEn: 'Sacred birthplace of Sri Krishna where tyrant Kamsa was slain; original ancestral seat of the Yadavas.'
      },
      {
        id: 'jayadratha',
        nameTe: 'సింధు-సౌవీర రాజ్యము',
        nameEn: 'Sindhu-Sauvira Kingdom',
        rulerTe: 'జయద్రథుడు (ధృతరాష్ట్రుని అల్లుడు)',
        rulerEn: 'King Jayadratha (Son-in-law of Dhritarashtra)',
        citiesTe: 'సింధు / సౌవీర రాజధానులు',
        citiesEn: 'Sindhu & Sauvira capitals',
        regionTe: 'దిగువ సింధు నదీ లోయ, దక్షిణ పాకిస్తాన్ / కచ్ తీరం',
        regionEn: 'Lower Indus Valley (Sindh & Rann of Kutch)',
        mapHatchTe: 'నిలువు నల్లని హ్యాచింగ్ గీతలు',
        mapHatchEn: 'Vertical black hatch lines',
        allegiance: 'kauravas',
        allegianceLabelTe: 'కౌరవ పక్షం',
        allegianceLabelEn: 'Kaurava Bloc',
        badgeColor: 'bg-red-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF5F5] to-[#FFEBEE]',
        border: 'border-red-400',
        dotColor: 'bg-red-700',
        summaryTe: 'దుశ్శల భర్త జయద్రథుని రాజ్యం. పరమశివుని వరంతో 13వ రోజు చక్రవ్యూహంలో పాండవులను అడ్డుకున్నాడు; 14వ రోజు అర్జునుని చేతిలో సంహరించబడ్డాడు.',
        summaryEn: 'Ruled by Jayadratha (Dusshala’s husband). Held off the 4 Pandavas at the Chakravyuha entrance; slain by Arjuna at sunset.'
      },
      {
        id: 'chedi',
        nameTe: 'చేది రాజ్యము',
        nameEn: 'Chedi Kingdom',
        rulerTe: 'శిశుపాలుడు (తర్వాత కుమారుడు ధృష్టకేతు)',
        rulerEn: 'Shishupala (later his son Dhrishtaketu)',
        citiesTe: 'శుక్తిమతి నగరం',
        citiesEn: 'Suktimati (Ken River)',
        regionTe: 'మధ్య భారతదేశం, బుందేల్‌ఖండ్ ప్రాంతం',
        regionEn: 'Central India, Bundelkhand (Betwa/Ken rivers)',
        mapHatchTe: 'నిలువు హ్యాచింగ్ గీతలు',
        mapHatchEn: 'Vertical hatch lines',
        allegiance: 'kauravas',
        allegianceLabelTe: 'శిశుపాలుడు (విరోధి)',
        allegianceLabelEn: 'Shishupala (Antagonist)',
        badgeColor: 'bg-rose-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6]',
        border: 'border-rose-400',
        dotColor: 'bg-rose-700',
        summaryTe: 'శ్రీకృష్ణుని మేనత్త కుమారుడైన శిశుపాలుని రాజ్యం. రాజసూయ యాగంలో శ్రీకృష్ణుని 100 అపరాధాల అనంతరం సుదర్శన చక్రంతో వధించబడ్డాడు.',
        summaryEn: 'Ruled by Shishupala, who committed 100 blasphemies at the Rajasuya Sabha and was beheaded by Krishna’s Sudarshana Chakra.'
      },
      {
        id: 'vidarbha',
        nameTe: 'విదర్భ రాజ్యము',
        nameEn: 'Vidarbha Kingdom',
        rulerTe: 'భీష్మక మహారాజు, రుక్మి',
        rulerEn: 'King Bhishmaka, Prince Rukmi',
        citiesTe: 'కుండినపురం',
        citiesEn: 'Kundinapuri (Vidarbha)',
        regionTe: 'మధ్య దక్కన్, మహారాష్ట్ర ప్రాంతం',
        regionEn: 'Deccan Plateau, Maharashtra',
        mapHatchTe: 'గోధుమ/ఆరెంజ్ రంగు నిలువు గీతలు',
        mapHatchEn: 'Brown / Orange vertical hatch lines',
        allegiance: 'neutral',
        allegianceLabelTe: 'తటస్థ రాజ్యం',
        allegianceLabelEn: 'Neutral Kingdom',
        badgeColor: 'bg-stone-700 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FAFAF9] to-[#F5F5F4]',
        border: 'border-stone-400',
        dotColor: 'bg-stone-600',
        summaryTe: 'రుక్మిణీ దేవి జన్మభూమి. రుక్మి తన అహంకారంతో పాండవులు, కౌరవులిద్దరి చేత తిరస్కరించబడి కురుక్షేత్ర యుద్ధంలో తటస్థంగా ఉండిపోయాడు.',
        summaryEn: 'Homeland of Queen Rukmini. Prince Rukmi was rejected by both Pandavas and Kauravas due to boastful arrogance, remaining neutral.'
      },
      {
        id: 'kosal',
        nameTe: 'కోసల రాజ్యము',
        nameEn: 'Kosala Kingdom',
        rulerTe: 'బృహద్బలుడు (ఇక్ష్వాకు వంశం)',
        rulerEn: 'King Brihadbala (Ikshvaku Dynasty)',
        citiesTe: 'అయోధ్య / శ్రావస్తి',
        citiesEn: 'Ayodhya / Sravasti',
        regionTe: 'సరయూ నదీ తీరం, తూర్పు ఉత్తరప్రదేశ్',
        regionEn: 'Sarayu river basin (Central-Eastern UP)',
        mapHatchTe: 'నలుపు క్షితిజ సమాంతర గీతలు (Horizontal)',
        mapHatchEn: 'Horizontal black hatch lines',
        allegiance: 'kauravas',
        allegianceLabelTe: 'కౌరవ మిత్రులు',
        allegianceLabelEn: 'Kaurava Allies',
        badgeColor: 'bg-red-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#FFF5F5] to-[#FFEBEE]',
        border: 'border-red-400',
        dotColor: 'bg-red-700',
        summaryTe: 'శ్రీరాముని ఇక్ష్వాకు వంశపు ప్రాచీన సామ్రాజ్యం. కురుక్షేత్ర యుద్ధంలో కౌరవ పక్షాన నిలిచి అభిమన్యుని చేతిలో వీరమరణం పొందాడు.',
        summaryEn: 'Ancient solar dynasty of Sri Rama. In the war, King Brihadbala fought on the Kaurava side and was felled by Abhimanyu.'
      },
      {
        id: 'kashi',
        nameTe: 'కాశీ రాజ్యము',
        nameEn: 'Kashi Kingdom',
        rulerTe: 'కాశీరాజు',
        rulerEn: 'King of Kashi',
        citiesTe: 'వారణాసి (గంగా తీర పవిత్ర క్షేత్రం)',
        citiesEn: 'Varanasi (Sacred Ganga Banks)',
        regionTe: 'తూర్పు ఉత్తరప్రదేశ్, గంగా నదీ తీరం',
        regionEn: 'Eastern UP, sacred Ganga River banks',
        mapHatchTe: 'ఊదా రంగు నిలువు గీతల హ్యాచింగ్',
        mapHatchEn: 'Purple vertical hatch lines',
        allegiance: 'pandavas',
        allegianceLabelTe: 'పాండవ మిత్రులు',
        allegianceLabelEn: 'Pandava Allies',
        badgeColor: 'bg-emerald-800 text-[#FFE082]',
        cardBg: 'bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]',
        border: 'border-emerald-400',
        dotColor: 'bg-emerald-700',
        summaryTe: 'అంబ, అంబిక, అంబాలికల స్వయంవరం జరిగిన పవిత్ర క్షేత్రం. కురుక్షేత్ర మహాభారత సంగ్రామంలో కాశీరాజు పాండవుల పక్షాన పోరాడాడు.',
        summaryEn: 'Holy kingdom where Amba, Ambika, and Ambalika were won by Bhishma. During the war, the King of Kashi fought with the Pandavas.'
      }
    ];

    const filteredKingdoms = kingdomsData.filter(k => {
      if (mahabharataMapFilter === 'all') return true;
      if (mahabharataMapFilter === 'pandavas') return k.allegiance === 'pandavas';
      if (mahabharataMapFilter === 'kauravas') return k.allegiance === 'kauravas';
      if (mahabharataMapFilter === 'yadavas') return k.allegiance === 'yadavas';
      if (mahabharataMapFilter === 'neutral') return k.allegiance === 'neutral';
      return true;
    });

    return (
      <div className="space-y-4">
        {/* Main Header Banner */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-2xl bg-[#7B1113] text-[#FFE082] shadow-xs">🗺️</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                    {isEn ? 'ANCIENT GEOGRAPHY & KINGDOMS' : 'ప్రాచీన భౌగోళిక శాస్త్రం & మహా సామ్రాజ్యాలు'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7B1113]">
                    INDIA DURING MAHABHARAT TIMES
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  {isEn ? 'India during Mahabharat times: Historical Map & 12 Kingdoms' : 'మహాభారత యుగ భారతదేశం: ప్రాచీన పటం & 12 మహా రాజ్యాల విశ్లేషణ'}
                </h4>
                <p className="text-xs text-[#5D4037] font-medium">
                  {isEn 
                    ? 'Extracted kingdom territories, rulers, alliances, and sacred river basins from original cartographic chart' 
                    : 'మూల చారిత్రక పటం నుండి సంగ్రహించిన రాజ్యాల సరిహద్దులు, పాలకులు, రణరంగ మిత్రులు & నదీ పరీవాహక ప్రాంతాలు'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setEnlargedPoster({
                src: './images/indian_history/india_during_mahabharata_times_map.jpg',
                title: isEn ? 'India during Mahabharat times' : 'మహాభారత యుగ భారతదేశ పటము (India during Mahabharat times)',
                subtitle: isEn 
                  ? 'Original Cartographic Map: Kingdoms, Rulers & Sacred Rivers (Map not to scale)' 
                  : 'మూల చారిత్రక పటం: రాజ్యాలు, పాలకులు, పవిత్ర నదులు & సరిహద్దులు'
              })}
              className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Enlarge Original Map' : 'మూల పటం జూమ్ చేయండి'}</span>
            </button>
          </div>

          {/* Responsive Two-Column Grid: Map Picture on Left, Interactive Explorer on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
            
            {/* LEFT: Picture Display Card */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              <div 
                onClick={() => setEnlargedPoster({
                  src: './images/indian_history/india_during_mahabharata_times_map.jpg',
                  title: isEn ? 'India during Mahabharat times' : 'మహాభారత యుగ భారతదేశ పటము',
                  subtitle: isEn ? 'Click to inspect high-resolution map with zoom controls' : 'హై-రెజల్యూషన్ పటాన్ని జూమ్ చేసి చూడటానికి క్లిక్ చేయండి'
                })}
                className="group relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-white p-2.5 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center"
              >
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-amber-50/50 flex items-center justify-center relative">
                  <img 
                    src="./images/indian_history/india_during_mahabharata_times_map.jpg" 
                    alt="India during Mahabharat times map" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Subtle Floating Zoom Pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-sm text-[#FFE082] text-[10.5px] font-bold flex items-center gap-1.5 shadow-sm group-hover:bg-[#7B1113] transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Click to Zoom' : 'జూమ్ కొరకు క్లిక్ చేయండి'}</span>
                  </div>
                </div>

                <div className="w-full pt-2.5 px-1 flex items-center justify-between text-xs text-[#5D4037]">
                  <span className="font-bold font-mono text-[11px] text-[#7B1113]">📍 Map not to scale</span>
                  <span className="text-[10.5px] italic">{isEn ? 'Source: Historical Cartography' : 'మూల పటం: మహాభారత కాలపు చారిత్రక నక్షా'}</span>
                </div>
              </div>

              {/* Map Hatching Legend Guide */}
              <div className="p-3 rounded-2xl bg-white/90 border border-amber-200 text-xs space-y-1.5 shadow-xs">
                <span className="font-bold text-[#7B1113] block text-[11px] uppercase tracking-wider">
                  {isEn ? '🗺️ Cartographic Legend (పటపు సంకేతాలు):' : '🗺️ పటపు సంకేతాల వివరణ:'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-[10.5px] text-[#4E342E]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-purple-200 border border-purple-500 shrink-0"></span>
                    <span>{isEn ? 'Hatched lines = Kingdom core' : 'గీతల ప్రాంతం = రాజ్యపు సరిహద్దు'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>{isEn ? 'Dots = Forts / Capitals' : 'చుక్కలు = రాజధానులు / కోటలు'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-blue-600 font-bold">〰️</span>
                    <span>{isEn ? 'Blue lines = Ganga, Yamuna, Indus' : 'నీలి గీతలు = గంగ, యమున, సింధు నదులు'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-600 font-bold">★</span>
                    <span>{isEn ? 'Kurukshetra = Epic Battlefield' : 'కురుక్షేత్రం = 18 రోజుల రణక్షేత్రం'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Extracted Information Explorer */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              {/* Category Filter Pills */}
              <div className="flex items-center justify-between gap-2 flex-wrap bg-white/90 p-2 rounded-2xl border border-amber-200 shadow-2xs">
                <span className="text-xs font-bold text-[#7B1113] pl-1 font-telugu-serif">
                  {isEn ? 'Filter Kingdoms:' : 'రాజ్యాల విభాగం:'}
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'all', labelTe: 'అన్నీ (12)', labelEn: 'All (12)' },
                    { id: 'pandavas', labelTe: 'పాండవ పక్షం (3)', labelEn: 'Pandavas (3)' },
                    { id: 'kauravas', labelTe: 'కౌరవ పక్షం (5)', labelEn: 'Kauravas (5)' },
                    { id: 'yadavas', labelTe: 'యాదవులు (2)', labelEn: 'Yadavas (2)' },
                    { id: 'neutral', labelTe: 'తటస్థ (1)', labelEn: 'Neutral (1)' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setMahabharataMapFilter(f.id as any)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        mahabharataMapFilter === f.id
                          ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                          : 'bg-amber-50 text-[#5D4037] hover:bg-amber-100'
                      }`}
                    >
                      {isEn ? f.labelEn : f.labelTe}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Kingdoms List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[480px] overflow-y-auto pr-1">
                {filteredKingdoms.map(k => (
                  <div
                    key={k.id}
                    onClick={() => setSelectedKingdomId(selectedKingdomId === k.id ? null : k.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer ${k.cardBg} ${k.border} ${
                      selectedKingdomId === k.id ? 'ring-2 ring-[#7B1113] shadow-md scale-[1.01]' : 'shadow-2xs hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5 pb-1 border-b border-black/10">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${k.dotColor}`}></span>
                        <h5 className="font-extrabold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                          {isEn ? k.nameEn : k.nameTe}
                        </h5>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-black uppercase ${k.badgeColor}`}>
                        {isEn ? k.allegianceLabelEn : k.allegianceLabelTe}
                      </span>
                    </div>

                    <div className="pt-1.5 space-y-1 text-xs">
                      <div className="text-[11px] font-bold text-[#8B0000]">
                        <span className="text-[#5D4037] font-semibold">{isEn ? 'Ruler: ' : 'పాలకుడు: '}</span>
                        {isEn ? k.rulerEn : k.rulerTe}
                      </div>

                      <div className="text-[10.5px] text-[#4E342E]">
                        <span className="text-[#5D4037] font-semibold">{isEn ? 'Capital / City: ' : 'రాజధాని / నగరాలు: '}</span>
                        {isEn ? k.citiesEn : k.citiesTe}
                      </div>

                      <div className="text-[10px] text-stone-600 bg-white/70 px-2 py-0.5 rounded border border-black/5">
                        <span className="font-semibold text-stone-800">{isEn ? 'Map location: ' : 'పటంలో గుర్తు: '}</span>
                        {isEn ? k.mapHatchEn : k.mapHatchTe}
                      </div>

                      <p className="text-[10.5px] text-[#3E2723] leading-relaxed pt-1 border-t border-black/5">
                        {isEn ? k.summaryEn : k.summaryTe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  };



  // ==========================================================================
  // MAHABHARATA WAR & BHISHMA NIRVANA ASTRONOMICAL TIMELINE (3162 – 3161 BCE)
  // Extracted from original 10-row astronomical chronology chart
  // ==========================================================================
  const renderMahabharataWarTimelineSection = () => {
    const warEvents = [
      {
        order: 1,
        bceDate: '24th / 25th Oct 3162 BCE',
        panchangaTe: 'కార్తీక చతుర్దశి / అమావాస్య',
        panchangaEn: 'Karttika Chaturdasi or Amavasya',
        titleTe: 'కురుక్షేత్ర మహాసంగ్రామ ప్రథమ దినం (రణారంభం)',
        titleEn: 'The First Day of Mahabharata War (War Commences)',
        descriptionTe: 'ధర్మక్షేత్రమైన కురుక్షేత్రంలో 18 అక్షౌహిణుల సైన్యంతో మహాసంగ్రామం ప్రారంభమైంది. భీష్ముడు కౌరవ సైన్యాధ్యక్షుడిగా శంఖారావం పూరించగా, శ్రీకృష్ణార్జునులు పాంచజన్యం, దేవదత్తం మ్రోగించి భగవద్గీతా ప్రబోధంతో యుద్ధాన్ని ఆరంభించారు.',
        descriptionEn: 'The colossal 18-Akshauhini war began in Kurukshetra. Bhishma blew his conch as Kaurava Commander; Sri Krishna revealed Srimad Bhagavad Gita to Arjuna before the clash.',
        tagTe: 'రణారంభం',
        tagEn: 'War Begins',
        badgeColor: 'bg-red-800 text-[#FFE082]',
        icon: '⚔️'
      },
      {
        order: 2,
        bceDate: '2nd / 3rd Nov 3162 BCE',
        panchangaTe: 'మార్గశిర అష్టమి / నవమి (10వ రోజు)',
        panchangaEn: 'Margashirsha Ashtami or Navami (10th Day of War)',
        titleTe: 'భీష్మ పితామహుని పతనం - అంపశయ్య (10వ రోజు)',
        titleEn: 'The Fall of Bhishma (10th Day - Bed of Arrows)',
        descriptionTe: 'యుద్ధం 10వ రోజున అర్జునుడు శిఖండిని ముందుంచి బాణవర్షం కురిపించగా భీష్ముడు రథం నుండి నేలకొరిగి అంపశయ్యపై శయనించాడు. ఇచ్ఛామరణ వరమున్న పితామహుడు ఉత్తరాయణం వచ్చేవరకు ప్రాణాలు నిలుపుకోవాలని సంకల్పించాడు.',
        descriptionEn: 'On the 10th day, Arjuna positioned Shikhandi ahead and felled Bhishma with countless arrows. Bhishma collapsed upon a bed of arrows (Sharatalpa), invoking his Iccha-Mrityu boon to await Uttarayana.',
        tagTe: 'అంపశయ్య',
        tagEn: 'Fall of Bhishma',
        badgeColor: 'bg-amber-800 text-[#FFE082]',
        icon: '🏹'
      },
      {
        order: 3,
        bceDate: '10th / 11th Nov 3162 BCE',
        panchangaTe: 'మార్గశిర కృష్ణ పాడ్యమి / విదియ (18వ రోజు)',
        panchangaEn: 'Margashirsha Krishna Pratipada / Dvitiya (18th Day of War)',
        titleTe: 'మహాభారత సంగ్రామ ముగింపు - దుర్యోధన వధ (18వ రోజు)',
        titleEn: 'The Conclusion of the 18-Day War (Duryodhana Slain)',
        descriptionTe: 'ద్వైపాయన సరస్సు వద్ద భీముడు దుర్యోధనుడితో గదాయుద్ధం చేసి తొడలను విరగ్గొట్టడంతో 18 రోజుల భీకర సంగ్రామం ముగిసింది. అధర్మం నశించి పాండవులకు ధర్మ విజయం చేకూరింది.',
        descriptionEn: 'The war lasted 18 days and concluded with the legendary mace duel between Bhima and Duryodhana at Dvaipayana Lake. The Kaurava host fell, establishing the victory of Dharma.',
        tagTe: 'ధర్మ విజయం',
        tagEn: 'War Ends',
        badgeColor: 'bg-emerald-800 text-[#FFE082]',
        icon: '🏆'
      },
      {
        order: 4,
        bceDate: '8th Dec 3162 BCE',
        panchangaTe: 'పుష్య పూర్ణిమ (యుద్ధం ముగిసిన 28వ రోజు / ఒక నెల తర్వాత)',
        panchangaEn: 'Pausha Purnima (28th day / 1 month after MB war)',
        titleTe: 'యుధిష్ఠిర శక ఆరంభం - హస్తినాపుర పట్టాభిషేకం',
        titleEn: 'Epoch of Yudhishthira Era - Coronation in Hastinapur',
        descriptionTe: 'రణరంగంలో మరణించిన బంధుమిత్రులకు తర్పణాలు సమర్పించిన అనంతరం, పుష్య పౌర్ణమి పుణ్య ఘడియల్లో హస్తినాపుర సింహాసనంపై యుధిష్ఠిరుడు పట్టాభిషిక్తుడయ్యాడు. దీనితో యుధిష్ఠిర శకం ప్రారంభమైంది.',
        descriptionEn: 'Following the 1-month mourning and shraddha rites, Yudhishthira was crowned Emperor of Hastinapur on Pausha Purnima, formally beginning the Yudhishthira Era (Saka).',
        tagTe: 'పట్టాభిషేకం',
        tagEn: 'Coronation',
        badgeColor: 'bg-purple-800 text-[#FFE082]',
        icon: '👑'
      },
      {
        order: 5,
        bceDate: '9th Dec 3162 BCE',
        panchangaTe: 'పుష్య కృష్ణ పాడ్యమి',
        panchangaEn: 'Pausha Krishna Pratipada',
        titleTe: 'శ్రీకృష్ణుడు & పాండవులు భీష్ముని దర్శించుట (రాజధర్మ బోధ)',
        titleEn: 'Yudhishthira and Sri Krishna Meet Bhishma on Arrow Bed',
        descriptionTe: 'పట్టాభిషేకం మరుసటి రోజున శ్రీకృష్ణునితో కలిసి ధర్మరాజు అంపశయ్యపైనున్న భీష్ముని వద్దకు వెళ్ళాడు. కృష్ణుని దివ్య ప్రేరణతో భీష్ముడు శాంతి, అనుశాసన పర్వాలలో రాజధర్మం, మోక్షధర్మం మరియు విష్ణు సహస్రనామాలను ఉపదేశించాడు.',
        descriptionEn: 'The day after coronation, Yudhishthira and Sri Krishna visited Bhishma. Blessed by Krishna, the patriarch expounded Rajadharma, Mokshadharma, and revealed the divine Sri Vishnu Sahasranama Stotram.',
        tagTe: 'విష్ణు సహస్రనామం',
        tagEn: 'Vishnu Sahasranama',
        badgeColor: 'bg-blue-800 text-[#FFE082]',
        icon: '📜'
      },
      {
        order: 6,
        bceDate: '15th Jan 3161 BCE & 22nd Jan 3161 BCE',
        panchangaTe: 'ఉత్తరాయణ పుణ్యకాల ప్రవేశం & మాఘ శుక్ల పాడ్యమి',
        panchangaEn: 'Uttarayana Occurred (15 Jan) & Magha Sukla Pratipada (22 Jan)',
        titleTe: 'ఖగోళ ఉత్తరాయణ ప్రవేశం & మాఘ శుక్ల పాడ్యమి',
        titleEn: 'Astronomical Uttarayana Solstice & Advent of Magha Month',
        descriptionTe: 'సూర్యుడు మకర రాశిలోకి ప్రవేశించి దివ్య ఉత్తరాయణ పుణ్యకాలం 15 జనవరి 3161 BCEన సంభవించింది. అనంతరం 22 జనవరి 3161 BCEన మాఘ శుక్ల పాడ్యమి తిథి ప్రారంభమైంది.',
        descriptionEn: 'The astronomical winter solstice (Uttarayana) occurred on 15th Jan 3161 BCE, followed by the auspicious Magha Sukla Pratipada on 22nd Jan 3161 BCE.',
        tagTe: 'ఉత్తరాయణం',
        tagEn: 'Uttarayana',
        badgeColor: 'bg-amber-700 text-[#FFE082]',
        icon: '☀️'
      },
      {
        order: 7,
        bceDate: '27th Jan 3161 BCE',
        panchangaTe: 'మాఘ శుక్ల షష్ఠి (హస్తినాపురంలో 50 రోజుల తర్వాత - 51వ రోజు)',
        panchangaEn: 'Magha Sukla Shashthi (51st day after coronation)',
        titleTe: 'ధర్మరాజు భీష్ముని తుది దర్శనానికి తరలివెళ్ళుట',
        titleEn: 'Yudhishthira Visits Bhishma on 51st Day (Magha Shashthi)',
        descriptionTe: 'హస్తినాపురంలో 50 రోజులు రాజ్యపాలన గావించిన ధర్మరాజు, 51వ రోజైన మాఘ శుక్ల షష్ఠినాడు తన సోదరులు, మంత్రులతో కలిసి కురుక్షేత్రానికి తరలివెళ్ళి భీష్మ పితామహునికి తుది ప్రణామం చేశాడు.',
        descriptionEn: 'Having lived 50 days in Hastinapur, Yudhishthira journeyed back to Kurukshetra on the 51st day (Magha Sukla Shashthi) to offer his final reverence to Bhishma.',
        tagTe: 'తుది దర్శనం',
        tagEn: 'Final Visit',
        badgeColor: 'bg-stone-700 text-[#FFE082]',
        icon: '🚶'
      },
      {
        order: 8,
        bceDate: '29th Jan 3161 BCE',
        panchangaTe: 'మాఘ శుక్ల అష్టమి, రోహిణీ నక్షత్రం (భీష్మాష్టమి)',
        panchangaEn: 'Magha Shukla Ashtami, Rohini Nakshatra (Bhishma Ashtami)',
        titleTe: 'భీష్ముడు సమాధి స్థితిలోకి ప్రవేశించుట (భీష్మాష్టమి)',
        titleEn: 'Bhishma Enters Transcendental Samadhi State',
        descriptionTe: 'రోహిణీ నక్షత్ర యుక్త మాఘ శుక్ల అష్టమి పవిత్ర దినాన భీష్ముడు బాహ్యేంద్రియాలను ఉపసంహరించి, ప్రాణవాయువులను నిరోధించి పరబ్రహ్మ ధ్యానంలో సమాధి స్థితిలోకి ప్రవేశించాడు. ఈ రోజునే భారతావనిలో "భీష్మాష్టమి"గా జరుపుకుంటారు.',
        descriptionEn: 'On Magha Shukla Ashtami with Rohini Nakshatra, Bhishma absorbed his prana and entered profound yogic Samadhi. Celebrated throughout India to this day as Bhishma Ashtami.',
        tagTe: 'సమాధి స్థితి',
        tagEn: 'Bhishma Ashtami',
        badgeColor: 'bg-indigo-800 text-[#FFE082]',
        icon: '🧘'
      },
      {
        order: 9,
        bceDate: '2nd Feb 3161 BCE',
        panchangaTe: 'మాఘ శుక్ల ద్వాదశి (యుద్ధం 10వ రోజు నుంచి సరిగ్గా 92వ రోజు)',
        panchangaEn: 'Magha Sukla Dvadashi (92nd day from 10th day of MB War)',
        titleTe: 'భీష్మ నిర్యాణం - బ్రహ్మైక్యం / మోక్ష ప్రాప్తి',
        titleEn: 'The Date of Bhishma Nirvana (Attainment of Moksha)',
        descriptionTe: 'అంపశయ్యపై 92 రోజులు యోగనిష్ఠలో ఉన్న భీష్ముడు మాఘ శుక్ల ద్వాదశి నాడు బ్రహ్మరంధ్రం ద్వారా ప్రాణాలను విసర్జించి పరమపదాన్ని అధిరోహించాడు. దేవతలు పుష్పవృష్టి కురిపించారు.',
        descriptionEn: 'After remaining 92 days upon the arrow bed, Grandfather Bhishma cast off his mortal frame through the crown of his head on Magha Sukla Dvadashi, attaining supreme Liberation (Moksha).',
        tagTe: 'భీష్మ నిర్యాణం',
        tagEn: 'Bhishma Nirvana',
        badgeColor: 'bg-[#7B1113] text-[#FFE082]',
        icon: '✨'
      },
      {
        order: 10,
        bceDate: '29th Jan 3161 BCE to 2nd Feb 3161 BCE',
        panchangaTe: 'మాఘ శుక్ల అష్టమి నుండి మాఘ శుక్ల ద్వాదశి వరకు (5 దివ్య దినాలు)',
        panchangaEn: 'Magha Sukla Ashtami to Magha Sukla Dvadashi (5 Days)',
        titleTe: 'భీష్మ పంచకం - పంచదిన నిశ్చల సమాధి పుణ్యకాలం',
        titleEn: 'Bhishma Panchakam: 5-Day Sacred Samadhi Period',
        descriptionTe: 'మాఘ శుక్ల అష్టమి నుండి ద్వాదశి వరకు ఐదు రోజుల పాటు భీష్ముడు నిశ్చల సమాధి స్థితిలో ఉన్నాడు. ఈ పవిత్ర ఐదు రోజులను "భీష్మ పంచకం" అంటారు; ఈ దినాలలో భీష్మ తర్పణం చేయడం విశేష పుణ్యప్రదమని పద్మపురాణం చెబుతోంది.',
        descriptionEn: 'For 5 sacred days from Ashtami to Dvadashi, Bhishma abided in continuous Samadhi. Known as Bhishma Panchakam, offering prayers and water libations during these 5 days confers divine blessings.',
        tagTe: 'భీష్మ పంచకం',
        tagEn: 'Bhishma Panchakam',
        badgeColor: 'bg-amber-900 text-[#FFE082]',
        icon: '🕉️'
      }
    ];

    return (
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-4 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-2xl bg-[#7B1113] text-[#FFE082] shadow-xs">🗓️</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                  {isEn ? 'ASTRONOMICAL CHRONOLOGY • 3162 – 3161 BCE' : 'ఖగోళ & తిథి కాలరేఖ • క్రీ.పూ. 3162 – 3161'}
                </span>
                <span className="text-xs font-mono font-bold text-[#7B1113]">
                  MAHABHARATA WAR & BHISHMA NIRVANA
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                {isEn 
                  ? 'Mahabharata War & Bhishma Nirvana Astronomical Chronology (10 Landmarks)' 
                  : 'మహాభారత సంగ్రామము & భీష్మ నిర్యాణ ఖగోళ కాలరేఖ (10 ప్రధాన మైలురాళ్లు)'}
              </h4>
              <p className="text-xs text-[#5D4037] font-medium">
                {isEn 
                  ? 'Astronomical dating from War commencement (24 Oct 3162 BCE) to Bhishma Nirvana (2 Feb 3161 BCE)' 
                  : 'రణారంభం (24 అక్టోబర్ 3162 BCE) నుండి భీష్మ నిర్యాణం (2 ఫిబ్రవరి 3161 BCE) వరకు తిథి-నక్షత్ర-ఖగోళ ఆధారిత కాల నిర్ణయం'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setEnlargedPoster({
              src: './images/indian_history/mahabharata_war_astronomical_timeline_table.jpg',
              title: isEn ? 'Mahabharata War & Bhishma Nirvana Timeline' : 'మహాభారత సంగ్రామ & భీష్మ నిర్యాణ మూల కాలరేఖ పట్టిక',
              subtitle: isEn 
                ? 'Original Astronomical Table: 10 Events from War Start to Bhishma Panchakam (3162–3161 BCE)' 
                : '10 ఖగోళ మైలురాళ్ల మూల పట్టిక: రణారంభం నుండి భీష్మ పంచకం వరకు (క్రీ.పూ. 3162–3161)'
            })}
            className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isEn ? 'View Original Table' : 'మూల పట్టిక చూడండి'}</span>
          </button>
        </div>

        {/* Responsive Layout: Original Table Strip on Top, 10 Interactive Events Below */}
        <div 
          onClick={() => setEnlargedPoster({
            src: './images/indian_history/mahabharata_war_astronomical_timeline_table.jpg',
            title: isEn ? 'Mahabharata War & Bhishma Nirvana Timeline' : 'మహాభారత సంగ్రామ & భీష్మ నిర్యాణ మూల కాలరేఖ పట్టిక',
            subtitle: isEn ? 'Click to inspect high-resolution chart table' : 'పూర్తి పట్టికను పెద్దదిగా జూమ్ చేసి చూడటానికి క్లిక్ చేయండి'
          })}
          className="p-3 rounded-2xl bg-white border border-[#D4AF37]/70 hover:border-[#7B1113] cursor-pointer transition-all flex flex-col sm:flex-row items-center gap-3.5 group shadow-xs"
        >
          <div className="w-full sm:w-64 h-28 rounded-xl overflow-hidden border border-amber-300 bg-amber-50/50 flex items-center justify-center shrink-0">
            <img 
              src="./images/indian_history/mahabharata_war_astronomical_timeline_table.jpg" 
              alt="Mahabharata War Astronomical Timeline Table" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-[#7B1113] font-telugu-serif group-hover:underline">
              {isEn ? 'Source Chart: 10 Chronological Landmarks with Tithis & BCE Dates' : 'మూల చార్ట్: తిథులు & క్రీ.పూ. తేదీలతో కూడిన 10 ఖగోళ మైలురాళ్లు'}
            </div>
            <div className="text-[11px] text-[#5D4037] mt-0.5">
              {isEn 
                ? 'Karttika Chaturdasi / Amavasya ➔ Margashirsha Ashtami ➔ Pausha Purnima ➔ Uttarayana (15 Jan) ➔ Bhishma Ashtami (Rohini) ➔ Bhishma Nirvana (Magha Dvadashi)' 
                : 'కార్తీక చతుర్దశి ➔ మార్గశిర అష్టమి ➔ పుష్య పూర్ణిమ ➔ ఉత్తరాయణం (15 జనవరి) ➔ భీష్మాష్టమి (రోహిణి) ➔ భీష్మ నిర్యాణం (మాఘ ద్వాదశి)'}
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 text-[#7B1113] text-xs font-bold group-hover:bg-[#7B1113] group-hover:text-[#FFE082] transition-colors">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{isEn ? 'Enlarge Original Table Poster' : 'మూల చార్ట్‌ను పెద్దదిగా జూమ్ చేయండి'}</span>
            </div>
          </div>
        </div>

        {/* 10 Landmark Chronological Cards */}
        <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
          {warEvents.map(ev => (
            <div 
              key={ev.order} 
              className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-2xs hover:shadow-sm transition-shadow flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-lg shrink-0 shadow-2xs">
                <span>{ev.icon}</span>
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10.5px] font-black flex items-center justify-center shrink-0">
                      {ev.order}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                      {isEn ? ev.titleEn : ev.titleTe}
                    </h5>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-black uppercase ${ev.badgeColor}`}>
                      {isEn ? ev.tagEn : ev.tagTe}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113]/10 text-[#7B1113] text-[11px] font-black border border-[#7B1113]/20 font-mono">
                      🗓️ {ev.bceDate}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-[#8B0000] bg-amber-50/80 px-2 py-0.5 rounded-md border border-amber-100 flex items-center gap-1.5">
                  <span>🪐</span>
                  <span className="truncate">
                    {isEn ? `Panchanga: ${ev.panchangaEn}` : `పంచాంగ తిథి: ${ev.panchangaTe}`}
                  </span>
                </div>

                <p className="text-xs text-[#4E342E] leading-relaxed pt-0.5">
                  {isEn ? ev.descriptionEn : ev.descriptionTe}
                </p>

                {/* If Event 1 (First Day of War): Embedded Bhagavad Gita Kurukshetra Revelation Block */}
                {ev.order === 1 && (
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsGitaTimelineModalOpen(true);
                    }}
                    className="mt-3 p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF8] border-2 border-amber-300/80 hover:border-[#7B1113] shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2 group/gita"
                    title={isEn ? 'Click to open complete 120M Year Bhagavad Gita Timeline Popup' : '12 కోట్ల సంవత్సరాల సంపూర్ణ భగవద్గీత కాలక్రమ కాలరేఖ పాప్-అప్ తెరవండి'}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-100/90 border border-amber-300 flex items-center justify-center text-lg shadow-2xs shrink-0 group-hover/gita:scale-110 transition-transform">
                          🪷
                        </div>
                        <h6 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif group-hover/gita:text-[#A91D22] transition-colors">
                          {isEn 
                            ? 'Lord Krishna re-speaks Bhagavad Gita to Arjuna at Kurukshetra' 
                            : 'కురుక్షేత్ర రణరంగంలో శ్రీకృష్ణుడు అర్జునునికి పునఃప్రబోధం చేయుట'}
                        </h6>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[10.5px] font-extrabold bg-[#7B1113] text-[#FFE082] shadow-2xs self-start sm:self-auto shrink-0 flex items-center gap-1">
                        <span>⏳</span>
                        <span>{isEn ? '~5,000 years ago (Kurukshetra)' : '~5,000 సంవత్సరాల క్రితం (కురుక్షేత్ర రణరంగం)'}</span>
                      </span>
                    </div>

                    <p className="text-xs text-[#3E2723] leading-relaxed pt-0.5">
                      {isEn 
                        ? 'Dispersing Arjuna’s grief, on the war chariot Sri Krishna revealed 18 chapters and 700 verses of the celestial Srimad Bhagavad Gita, the universal beacon of wisdom.' 
                        : 'అర్జునుని విషాదాన్ని హరిస్తూ, రథంపై శ్రీకృష్ణుడు ఉపదేశించిన 18 అధ్యాయాలు, 700 శ్లోకాల దివ్య గీతామృతం నేటికీ జగతికి విశ్వమార్గదర్శిగా ప్రకాశిస్తోంది.'}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                      <div className="text-[10.5px] font-mono font-medium text-[#8B0000] bg-[#FFFDE7] px-2.5 py-1 rounded-xl border border-amber-200/70 inline-flex items-center gap-1.5 shadow-2xs">
                        <span>📖</span>
                        <span>BG 4.3: स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः (స ఏవాయం మయా తేऽద్య యోగః ప్రోక్తః పురాతనః)</span>
                      </div>

                      <span className="text-[10.5px] font-bold text-[#7B1113] group-hover/gita:text-[#D84315] flex items-center gap-1 shrink-0 self-end sm:self-auto">
                        <Maximize2 className="w-3 h-3" />
                        <span>{isEn ? 'View 120M Yr Timeline Popup ➔' : '12 కోట్ల సం. గీతా కాలరేఖ పాప్-అప్ ➔'}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  const handleOpenMasterChart = () => {
    if (onOpenMasterChart) {
      onOpenMasterChart(
        './images/indian_history/vedic_ramayana_vartak_timeline.jpg',
        isEn ? 'Vedic & Itihasa Chronological Master Chart (Dr. P.V. Vartak)' : 'వైదిక & ఇతిహాస కాలక్రమ మూల పటం (డా. పి.వి. వర్తక్ పరిశోధన)',
        isEn ? 'Astronomical & Archaeological Dating from 10,000 BC to 330 BC' : 'క్రీ.పూ. 10,000 నుండి క్రీ.పూ. 330 వరకు ఖగోళ, పురావస్తు ఆధారిత కాలరేఖ'
      );
    } else {
      setChartZoom(1);
      setIsChartModalOpen(true);
    }
  };

  return (
    <div id="vedic-itihasa-chronology" className="my-8 w-full space-y-6">
      
      {/* ============================================================ */}
      {/* 1. SECTION HERO BANNER */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E0804] via-[#3E0A0C] to-[#2B0608] border-2 border-[#D4AF37] p-5 sm:p-7 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFE57F] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>
                {isEn 
                  ? 'Astronomical & Archaeological Timeline • 10,000 BC to 3,100 BC' 
                  : 'ఖగోళ & పురావస్తు ఆధారిత కాలగణన • క్రీ.పూ. 10,000 నుండి 3,100 వరకు'}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-telugu-serif text-[#FFF8E7] tracking-tight">
              {isEn 
                ? 'Vedic & Itihasa Chronological Timeline' 
                : 'వైదిక & ఇతిహాస చారిత్రక కాలక్రమ దర్శిని'}
            </h3>
            
            <p className="text-xs sm:text-sm text-[#FFE082] max-w-3xl leading-relaxed">
              {isEn
                ? 'Comprehensive historical dating established through planetary alignments, Taittiriya Samhita, Rigveda, and Mehrgarh excavations (8,000 BC). Click on each timeline box to view deep historical facts, dynasties, and scriptural evidences.'
                : 'తైత్తిరీయ సంహిత, ఋగ్వేద ఖగోళ స్థితులు, మెహర్‌గఢ్ పురావస్తు ఆధారాలు (8,000 BC), మరియు శ్రీరామ-శ్రీకృష్ణ ఇతిహాస యుగాలతో కూడిన సంపూర్ణ కాలరేఖ. ప్రతి కాలరేఖ బాక్స్‌పై క్లిక్ చేసి సంపూర్ణ వివరాలను పాప్-అప్ విండోలో వీక్షించండి.'}
            </p>
          </div>

          {/* Master Chart Lightbox Trigger Button */}
          <button
            onClick={handleOpenMasterChart}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFF9C4] text-[#3E0A0C] font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            <Maximize2 className="w-4 h-4 text-[#7B1113]" />
            <span>{isEn ? 'View Master Chart in HD' : 'మూల కాలరేఖ పటం (HD)'}</span>
          </button>
        </div>

        {/* Quick Nav Badges & View Mode Switcher */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#FFE082] font-semibold mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {isEn ? '4 Epochs:' : '4 ప్రధాన కాలఘట్టాలు:'}
            </span>
            {VEDIC_CHRONOLOGY_TIMELINES.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era)}
                className="px-2.5 py-1 rounded-lg bg-black/40 hover:bg-[#D4AF37]/30 text-[#FFE57F] text-[11px] font-bold border border-[#D4AF37]/40 transition-colors cursor-pointer"
              >
                {era.dateRange}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-black/40 rounded-xl border border-white/20">
            <button
              onClick={() => setViewMode('tree')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'tree' ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              <span>🌳</span>
              <span>{isEn ? 'Tree Flow' : 'వృక్ష క్రమం (Tree)'}</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              <span>🗂️</span>
              <span>{isEn ? 'Grid Cards' : 'గ్రిడ్ (Grid)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE 7 TIMELINE BOXES (Tree Spine or Multi-column Grid)   */}
      {/* ============================================================ */}
      {viewMode === 'tree' ? (
        /* Chronological Tree Spine Mode */
        <div className="flex flex-col items-center w-full">
          {VEDIC_CHRONOLOGY_TIMELINES.map((era, index) => (
            <React.Fragment key={era.id}>
              {/* Box displaying HISTORY before Era 7 (మౌర్య సామ్రాజ్యం, గ్రీకు దండయాత్రలు, చాణక్యుడు & అశోక చక్రవర్తి) */}
              {era.id === 'era_330_232_bc' && (
                <div className="flex flex-col items-center my-3 w-full max-w-2xl">
                  {/* Transition Stem */}
                  <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
                  <ArrowDown className="w-4 h-4 text-[#7B1113]" />

                  {/* The HISTORY Box */}
                  <div className="my-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] shadow-xl text-center flex flex-col items-center gap-1.5 ring-4 ring-[#D4AF37]/35 w-full transform hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">🏛️</span>
                      <h3 className="text-lg sm:text-xl font-black tracking-widest font-mono uppercase text-white drop-shadow-sm">
                        HISTORY
                      </h3>
                      <span className="text-2xl">📜</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#FFE082] font-telugu-serif">
                      {isEn ? 'Recorded History Era • Continuous Historical Epigraphs' : 'చారిత్రక యుగము (HISTORY) • లిఖితపూర్వక సమగ్ర సామ్రాజ్య కాలం'}
                    </div>
                    <div className="text-[11px] text-amber-200 font-medium max-w-lg">
                      {isEn 
                        ? 'Beginning of continuous recorded history in India • Rock Edicts, Epigraphy, Coins & Greek Accounts' 
                        : 'భారతదేశంలో నిరంతర లిఖితపూర్వక చారిత్రక యుగారంభం • అశోకుని శిలా శాసనాలు, బ్రాహ్మీ లిపి & సమకాలీన గ్రీకు ఆధారాలు'}
                    </div>
                  </div>

                  {/* Stem into Era 7 */}
                  <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
                  <ArrowDown className="w-4 h-4 text-[#7B1113]" />
                </div>
              )}

              {/* Individual Tree Era Node */}
              <div
                onClick={() => setSelectedEra(era)}
                className={`group relative w-full max-w-2xl cursor-pointer rounded-2xl border-2 ${era.borderColor} bg-gradient-to-r ${era.bgGradient} p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.015] ring-2 ring-[#D4AF37]/40 hover:ring-3 hover:ring-[#D4AF37]`}
                title={isEn ? `Click to pop up full ${era.dateRange} details` : `${era.dateRange} సంపూర్ణ వివరాల కొరకు క్లిక్ చేయండి`}
              >
                {/* Header Row: Order badge, Date range badge, Pop-up badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-lg text-xs font-black text-white shadow-2xs"
                      style={{ backgroundColor: era.accentColor }}
                    >
                      #{era.order} • {era.dateRange}
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#7B1113] border border-[#D4AF37]/40">
                      {isEn ? era.badgeEn : era.badgeTe}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7B1113] text-[#FFE082] flex items-center gap-1.5 shadow-2xs group-hover:bg-[#8E1C1E] transition-colors">
                    <Sparkles className="w-3 h-3 text-[#FFD54F] animate-pulse" />
                    <span>{isEn ? 'Click to Pop Up' : 'వివరాలు తెరవండి'}</span>
                  </span>
                </div>

                {/* Title & Icon */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/95 shadow-xs border-2 border-[#D4AF37]/50 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                    {era.iconImage ? (
                      <img 
                        src={era.iconImage} 
                        alt={isEn ? era.titleEn : era.titleTe}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl p-1">{era.icon}</span>
                    )}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg font-telugu-serif text-[#3E0A0C] group-hover:text-[#B71C1C] transition-colors leading-snug">
                      {isEn ? era.titleEn : era.titleTe}
                    </h4>
                    <p className="text-xs font-semibold text-[#8B0000] line-clamp-1">
                      {isEn ? era.subtitleEn : era.subtitleTe}
                    </p>
                  </div>
                </div>

                {/* Short Summary Description */}
                <p className="text-xs text-[#4E342E] leading-relaxed bg-white/80 p-2.5 rounded-xl border border-black/5 mt-2.5">
                  {isEn ? era.shortSummaryEn : era.shortSummaryTe}
                </p>

                {/* Precise Chronological Milestones (From TIMELINES Source) */}
                {era.timelineMilestones && era.timelineMilestones.length > 0 && (
                  <div className="mt-2.5 p-2 rounded-xl bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7]/90 to-[#FFFBEB] border border-[#D97706]/60 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span className="text-[10px] font-extrabold text-[#78350F] uppercase tracking-wider flex items-center gap-1 font-telugu-serif">
                        <Calendar className="w-3 h-3 text-[#D97706]" />
                        <span>{isEn ? 'Timelines & Key Historical Dates:' : 'చారిత్రక కాలరేఖ మైలురాళ్లు (TIMELINES):'}</span>
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#78350F] text-[#FEF08A]">
                        {era.timelineMilestones.length} {isEn ? 'Events' : 'ఘట్టాలు'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {era.timelineMilestones.map((m, mi) => (
                        <span 
                          key={mi}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10.5px] font-bold bg-white text-[#78350F] border border-[#F59E0B]/50 shadow-2xs"
                        >
                          <span className="text-xs">{m.icon}</span>
                          <span className="font-black text-[#B45309] font-mono">{m.yearBCE}</span>
                          <span className="text-[#D97706]">•</span>
                          <span className="font-semibold text-[#1E293B]">{isEn ? m.eventEn : m.eventTe}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Clickable Callout for Ramayana Era (Era 3) */}
                {era.id === 'era_7000_4500_bc' && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsRamayanaTimelineModalOpen(true);
                    }}
                    className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#8E1C1E] text-white border-2 border-[#FFD54F] hover:border-white shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-2.5 cursor-pointer group/rama hover:scale-[1.01]"
                    title={isEn ? 'Click to pop up Ramayana Astronomical Timeline (12240–12208 BCE)' : 'రామాయణ ఖగోళ కాలరేఖ (క్రీ.పూ. 12240–12208) పాప్-అప్ కొరకు క్లిక్ చేయండి'}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex items-center -space-x-2 shrink-0">
                        {RAMAYANA_ASTRONOMICAL_TIMELINE.events.slice(0, 4).map((ev) => (
                          <div key={ev.order} className="w-8 h-8 rounded-full bg-white p-0.5 border border-[#FFD54F] shadow-xs overflow-hidden">
                            <img src={ev.imageSrc} alt="" className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs sm:text-sm font-black text-[#FFE082] tracking-wide">
                            {isEn ? '📜 Ramayana Astronomical Timeline' : '📜 వాల్మీకి రామాయణ ఖగోళ కాలరేఖ'}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#FFD54F] text-[#4A0012] uppercase tracking-wider animate-pulse">
                            12240 – 12208 BCE
                          </span>
                        </div>
                        <p className="text-[10.5px] text-[#FFE57F]/95 truncate mt-0.5 font-medium">
                          {isEn 
                            ? '11 Celestial Milestones with Tithi, Nakshatra & Planetary Dates • Click for Pop-up'
                            : 'శ్రీరామ జననం నుండి పట్టాభిషేకం వరకు 11 ఖగోళ ఘట్టాలు • తిథి, నక్షత్ర వివరాల పాప్-అప్'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FFD54F] group-hover/rama:bg-white text-[#4A0012] text-xs font-black shadow-sm shrink-0 transition-colors">
                      <span>🔍</span>
                      <span className="hidden sm:inline">{isEn ? 'Open Pop-up' : 'పాప్-అప్ తెరవండి'}</span>
                      <span className="sm:hidden">{isEn ? 'View' : 'తెరవండి'}</span>
                    </div>
                  </div>
                )}

                {/* Key Figures Snippet */}
                <div className="mt-2.5 pt-2 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-[#7B1113]">
                      {isEn ? 'Key Figures:' : 'ముఖ్యాంశాలు:'}
                    </span>
                    {(isEn ? era.keyFiguresEn.slice(0, 4) : era.keyFiguresTe.slice(0, 4)).map((fig, fi) => (
                      <span key={fi} className="px-1.5 py-0.5 rounded bg-white/90 text-[10.5px] font-semibold text-[#5D4037] border border-[#D4AF37]/30">
                        {fig}
                      </span>
                    ))}
                    {(isEn ? era.keyFiguresEn : era.keyFiguresTe).length > 4 && (
                      <span className="text-[10px] text-[#7B1113] font-bold">+{(isEn ? era.keyFiguresEn : era.keyFiguresTe).length - 4}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#D84315] group-hover:translate-x-0.5 transition-transform ml-auto">
                    <span>{isEn ? 'Full Evidence' : 'పూర్తి ఆధారాలు'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Downward Tree Connector between era nodes */}
              {index < VEDIC_CHRONOLOGY_TIMELINES.length - 1 && (
                <div className="flex flex-col items-center my-1.5">
                  <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
                  <ArrowDown className="w-4 h-4 text-[#7B1113]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        /* Grid Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {VEDIC_CHRONOLOGY_TIMELINES.map((era) => {
            return (
              <React.Fragment key={era.id}>
                {era.id === 'era_330_232_bc' && (
                  <div className="col-span-full my-1 p-3.5 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] shadow-md flex items-center justify-between gap-3 flex-wrap ring-2 ring-[#D4AF37]/40">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">🏛️</span>
                      <div>
                        <span className="text-base sm:text-lg font-black font-mono tracking-widest text-white uppercase block">
                          HISTORY
                        </span>
                        <span className="text-xs font-bold text-[#FFE082] font-telugu-serif">
                          {isEn ? 'Recorded History Era • Continuous Historical Epigraphs' : 'చారిత్రక యుగము (HISTORY) • లిఖితపూర్వక సమగ్ర సామ్రాజ్య కాలం'}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black/40 text-amber-200 border border-amber-300/40">
                      ~330 BC Onwards
                    </span>
                  </div>
                )}

                <div
                  onClick={() => setSelectedEra(era)}
                  className={`group relative cursor-pointer rounded-2xl border-2 ${era.borderColor} bg-gradient-to-br ${era.bgGradient} p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-4 overflow-hidden`}
                >
                {/* Top Accent Stripe & Order Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black shadow-xs tracking-wider text-white" style={{ backgroundColor: era.accentColor }}>
                    #{era.order} • {era.dateRange}
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-[#3E0A0C] border border-[#D4AF37]/50 flex items-center gap-1 group-hover:bg-[#FFE57F] transition-colors">
                    <Sparkles className="w-3 h-3 text-[#D84315] animate-pulse" />
                    <span>{isEn ? 'Click to View' : 'వివరాలు తెరవండి'}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 shadow-xs border border-[#D4AF37]/40 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                      {era.iconImage ? (
                        <img 
                          src={era.iconImage} 
                          alt={isEn ? era.titleEn : era.titleTe}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xl sm:text-2xl">{era.icon}</span>
                      )}
                    </div>
                    <h4 className="font-bold text-base sm:text-lg font-telugu-serif text-[#3E0A0C] group-hover:text-[#B71C1C] transition-colors leading-tight">
                      {isEn ? era.titleEn : era.titleTe}
                    </h4>
                  </div>

                  <p className="text-xs font-semibold text-[#8B0000] line-clamp-1">
                    {isEn ? era.subtitleEn : era.subtitleTe}
                  </p>

                  <p className="text-xs text-[#4E342E] leading-relaxed line-clamp-3 bg-white/70 p-2.5 rounded-xl border border-black/5 mt-2">
                    {isEn ? era.shortSummaryEn : era.shortSummaryTe}
                  </p>

                  {/* Precise Chronological Milestones Pills in Grid Card */}
                  {era.timelineMilestones && era.timelineMilestones.length > 0 && (
                    <div className="mt-2 p-2 rounded-xl bg-gradient-to-r from-[#FFFBEB] to-[#FEF3C7] border border-[#D97706]/50 space-y-1">
                      <div className="flex items-center gap-1 text-[9.5px] font-extrabold text-[#78350F] uppercase">
                        <Calendar className="w-2.5 h-2.5 text-[#D97706]" />
                        <span>{isEn ? 'Milestone Dates:' : 'ముఖ్య కాలరేఖ తేదీలు:'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {era.timelineMilestones.slice(0, 3).map((m, mi) => (
                          <span 
                            key={mi}
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-white text-[#78350F] border border-[#F59E0B]/40 shadow-2xs"
                          >
                            <span className="font-black text-[#B45309] font-mono">{m.yearBCE}</span>
                          </span>
                        ))}
                        {era.timelineMilestones.length > 3 && (
                          <span className="text-[9.5px] font-bold text-[#78350F] self-center">
                            +{era.timelineMilestones.length - 3} {isEn ? 'more' : 'ఇతర'}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Special Ramayana Timeline Link for Era 3 */}
                  {era.id === 'era_7000_4500_bc' && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsRamayanaTimelineModalOpen(true);
                      }}
                      className="mt-2 p-2 rounded-xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#8E1C1E] text-white border border-[#FFD54F] hover:border-white shadow-xs flex items-center justify-between gap-1.5 cursor-pointer"
                      title={isEn ? 'Click to pop up Ramayana Astronomical Timeline' : 'రామాయణ ఖగోళ కాలరేఖ పాప్-అప్ తెరవండి'}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-lg">🏹</span>
                        <div className="min-w-0">
                          <span className="text-[11px] font-black text-[#FFE082] block truncate">
                            {isEn ? '📜 Ramayana Timeline (12240–12208 BCE)' : '📜 రామాయణ కాలరేఖ (12240–12208 BCE)'}
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-[#FFD54F] text-[#4A0012] text-[9.5px] font-black shrink-0">
                        {isEn ? 'Pop-up' : 'పాప్-అప్'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Key Figures Snippet */}
                <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs font-bold text-[#7B1113]">
                  <span className="truncate max-w-[220px] text-[11px] text-[#5D4037]">
                    {isEn ? era.keyFiguresEn.slice(0, 2).join(', ') : era.keyFiguresTe.slice(0, 2).join(', ')}...
                  </span>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#D84315] group-hover:translate-x-0.5 transition-transform">
                    <span>{isEn ? 'Details' : 'పూర్తి వివరాలు'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. DEDICATED POP-UP MODAL WINDOW FOR EACH TIMELINE           */}
      {/* ============================================================ */}
      {selectedEra && createPortal(
        <div 
          onClick={() => setSelectedEra(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#FFFDF7] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150"
          >
            {/* Modal Header */}
            <div 
              className="p-5 sm:p-6 text-white relative shrink-0"
              style={{ backgroundColor: selectedEra.accentColor }}
            >
              <button
                onClick={() => setSelectedEra(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3.5 pr-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 border-2 border-white/40 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  {selectedEra.iconImage ? (
                    <img 
                      src={selectedEra.iconImage} 
                      alt={isEn ? selectedEra.titleEn : selectedEra.titleTe}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="text-3xl sm:text-4xl">{selectedEra.icon}</span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="inline-block px-3 py-0.5 rounded-full bg-white/25 text-[#FFF9C4] text-[11px] font-black uppercase tracking-wider mb-1 border border-white/30">
                    {selectedEra.dateRange} • {isEn ? selectedEra.badgeEn : selectedEra.badgeTe}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-white leading-tight">
                    {isEn ? selectedEra.titleEn : selectedEra.titleTe}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 font-medium">
                    {isEn ? selectedEra.subtitleEn : selectedEra.subtitleTe}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-[#3E0A0C]">
              
              {/* Summary Callout */}
              <div className="p-4 rounded-2xl bg-[#FFF8E7] border border-[#D4AF37]/50 shadow-xs space-y-1">
                <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <Info className="w-3.5 h-3.5 text-[#D84315]" />
                  {isEn ? 'Executive Epoch Summary' : 'యుగ సంక్షిప్త పరిచయం'}
                </h4>
                <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                  {isEn ? selectedEra.shortSummaryEn : selectedEra.shortSummaryTe}
                </p>
              </div>

              {/* Chronological Milestones Section (From Uploaded TIMELINES Slide) */}
              {selectedEra.timelineMilestones && selectedEra.timelineMilestones.length > 0 && (
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7] to-[#FFFBEB] border-2 border-[#D97706] shadow-md space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#D97706]/30 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-xl bg-[#78350F] text-[#FEF08A] shadow-xs">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full text-[9.5px] font-black bg-[#78350F] text-[#FEF08A] uppercase tracking-wider">
                            TIMELINES
                          </span>
                          <span className="text-xs font-bold text-[#92400E]">
                            {selectedEra.timelineMilestones.length} {isEn ? 'Key Epoch Milestones' : 'చారిత్రక ఘట్టాలు'}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-black text-[#78350F] font-telugu-serif mt-0.5">
                          {isEn ? 'Chronological Dating & Milestone Events' : 'నిర్దిష్ట కాలక్రమ మైలురాళ్లు & సంఘటనలు'}
                        </h4>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenMasterChart) {
                          onOpenMasterChart(
                            './images/indian_history/indian_history_precise_timelines.jpg',
                            isEn ? 'Indian History Timelines (From Slide)' : 'భారతీయ చారిత్రక కాలరేఖ (మూల స్లైడ్)',
                            isEn ? 'Rig Veda (< 1500 BCE) to Adi Shankara (788 CE)' : 'ఋగ్వేదం (< 1500 BCE) నుండి ఆది శంకరాచార్యుల (788 CE) వరకు'
                          );
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#78350F] hover:bg-[#92400E] text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{isEn ? 'View Source Slide' : 'మూల స్లైడ్ చూడండి'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                    {selectedEra.timelineMilestones.map((m, mi) => (
                      <div 
                        key={mi} 
                        className="p-3 rounded-2xl bg-white border border-[#F59E0B]/60 shadow-2xs flex items-start gap-3 hover:border-[#D97706] transition-colors"
                      >
                        <span className="text-xl p-2 rounded-xl bg-amber-50 border border-amber-200 shrink-0 shadow-2xs">
                          {m.icon}
                        </span>
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded-md text-xs font-black bg-[#78350F] text-[#FEF08A] font-mono shadow-2xs">
                              {m.yearBCE}
                            </span>
                            <span className="text-[10px] font-bold text-[#92400E] bg-amber-100/80 px-2 py-0.5 rounded-full">
                              {m.yearTe}
                            </span>
                          </div>

                          <h5 className="font-bold text-xs sm:text-sm text-[#78350F] font-telugu-serif leading-snug">
                            {isEn ? m.eventEn : m.eventTe}
                          </h5>

                          {(m.detailsEn || m.detailsTe) && (
                            <p className="text-[11px] text-[#4E342E] leading-relaxed pt-0.5">
                              {isEn ? m.detailsEn : m.detailsTe}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid 1: Astronomical & Archaeological Evidence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Astronomical Evidence */}
                <div className="p-4 rounded-2xl bg-white border border-[#E0D7C6] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] font-telugu-serif">
                    <span className="text-lg">🔭</span>
                    <span>{isEn ? 'Astronomical Dating Data' : 'ఖగోళ శాస్త్ర ఆధారాలు (Dating)'}</span>
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {isEn ? selectedEra.astronomicalDatingEn : selectedEra.astronomicalDatingTe}
                  </p>
                </div>

                {/* Archaeological Evidence */}
                <div className="p-4 rounded-2xl bg-white border border-[#E0D7C6] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#15803D] font-telugu-serif">
                    <span className="text-lg">⛏️</span>
                    <span>{isEn ? 'Archaeological Artifacts & Excavations' : 'పురావస్తు త్రవ్వకాల నిరూపణలు'}</span>
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {isEn ? selectedEra.archaeologicalEvidenceEn : selectedEra.archaeologicalEvidenceTe}
                  </p>
                </div>
              </div>

              {/* Special Ramayana Shloka Origin & 7 Callers Breakdown inside Era 3 Modal */}
              {selectedEra.id === 'era_7000_4500_bc' && (
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF9ED] to-[#FFECB3]/35 border-2 border-[#D4AF37] space-y-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2 rounded-2xl bg-[#7B1113] text-[#FFE082] shadow-xs">📿</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                            శ్లోక రహస్యం • Divine Shloka Origin
                          </span>
                          <span className="text-xs font-mono font-bold text-[#7B1113]">
                            !! रामाय रामभद्राय रामचंद्राय वेधसे !!
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                          {isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe}
                        </h4>
                        <p className="text-xs text-[#5D4037] font-medium">
                          {isEn ? RAMA_SHLOKA_ORIGIN_DATA.subtitleEn : RAMA_SHLOKA_ORIGIN_DATA.subtitleTe}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setEnlargedPoster({
                        src: RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc,
                        title: isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe,
                        subtitle: isEn ? 'How Rama is called by each one (Original Visual Chart)' : 'మూల సచిత్ర పటం (జూమ్ చేసి చూడండి)'
                      })}
                      className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isEn ? 'View Original Poster' : 'మూల చార్ట్ చూడండి'}</span>
                    </button>
                  </div>

                  {/* Sacred Shloka Parchment Display */}
                  <div className="p-4 rounded-2xl bg-[#FFFDF0] border-2 border-[#D4AF37]/70 shadow-xs space-y-2.5">
                    <div className="text-center space-y-1.5 py-1">
                      <div className="text-sm sm:text-base font-bold font-mono text-[#7B1113] tracking-wide whitespace-pre-line">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaSanskrit}
                      </div>
                      <div className="text-sm sm:text-base font-bold font-telugu-serif text-[#8B0000] whitespace-pre-line">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaTelugu}
                      </div>
                      <div className="text-xs font-mono text-stone-600 italic whitespace-pre-line">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaIAST}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-[#3E0A0C] leading-relaxed">
                      <span className="font-bold text-[#7B1113]">
                        {isEn ? 'Universal Meaning: ' : 'సమగ్ర భావార్థం: '}
                      </span>
                      {isEn ? RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningEn : RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningTe}
                    </div>

                    <div className="text-[11px] text-[#5D4037] bg-white p-2.5 rounded-lg border border-amber-100 flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-[#D84315] shrink-0 mt-0.5" />
                      <span>
                        {isEn 
                          ? 'Grammatical Secret: The suffix "-āya" (चतुर्थी विभक्ति / Dative Case) signifies salutation and offering ("for/unto Sri Rama"). Each relationship below addressed Rama with their own deepest love, which sage Valmiki united into this single eternal shloka!'
                          : 'వ్యాకరణ రహస్యం: శ్లోకంలో ప్రతి పదానికి చేరిన "-ఆయ" (చతుర్థీ విభక్తి) అనేది "శ్రీరాముని కొరకు / ప్రణామం" అని సూచిస్తుంది. ఏడుగురు ఆత్మీయులు రాముని సంబోధించిన అమృత నామాలకు చివర "నమః" చేరి ఈ దివ్య శ్లోకం ఆవిర్భవించింది!'}
                      </span>
                    </div>
                  </div>

                  {/* 7 Callers Grid + Concluding Namaḥ */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                      <span>👑</span>
                      <span>{isEn ? '7 Divine Callers & Their Names for Rama (From Source Chart)' : 'మూల చార్ట్ ఆధారంగా 7 దివ్య సంబోధనల వివరణ'}</span>
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {RAMA_SHLOKA_ORIGIN_DATA.callers.map((caller) => (
                        <div 
                          key={caller.order} 
                          className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-3"
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-50 border-2 border-[#D4AF37]/60 p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                            <img 
                              src={caller.avatarSrc} 
                              alt={isEn ? caller.callerEn : caller.callerTe}
                              className="w-full h-full object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>

                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center justify-between gap-1 flex-wrap">
                              <span className="text-xs font-bold text-[#7B1113] font-telugu-serif">
                                {isEn ? caller.callerEn : caller.callerTe}
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10px] font-bold border border-amber-300">
                                #{caller.order} {caller.shlokaWord}
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-[#7B1113] to-[#A91D22] text-[#FFE082] shadow-2xs">
                              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-85">
                                {isEn ? 'Called:' : 'పిలిచింది:'}
                              </span>
                              <span className="text-xs sm:text-sm font-black font-mono tracking-wide">
                                {caller.calledName}
                              </span>
                              <span className="text-[11px] font-bold text-white">
                                ({isEn ? caller.shlokaWord : caller.shlokaWordTelugu})
                              </span>
                            </div>

                            <p className="text-[11px] text-[#5D4037] font-medium leading-tight">
                              {isEn ? caller.relationshipEn : caller.relationshipTe}
                            </p>

                            <p className="text-xs text-[#2C1810] leading-relaxed pt-0.5 border-t border-amber-100/70">
                              <span className="font-semibold text-[#8B0000]">
                                {isEn ? 'Meaning: ' : 'అర్థం: '}
                              </span>
                              {isEn ? caller.meaningEn : caller.meaningTe}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* 8th Card: Namaḥ */}
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FFF8E1] to-[#FFE082]/40 border-2 border-[#D4AF37] shadow-2xs flex items-start gap-3">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#7B1113] text-[#FFE082] border-2 border-[#D4AF37] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                          🙏
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="text-xs font-black text-[#7B1113] font-telugu-serif">
                              {isEn ? 'All Devotees & Humanity' : 'సమస్త భక్తకోటి & సమస్త లోకాలు'}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                              నమః (नमः)
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#7B1113] text-[#FFE082] shadow-2xs">
                            <span className="text-xs sm:text-sm font-black font-mono tracking-wide">
                              NAMAḤ (నమః)
                            </span>
                            <span className="text-[11px] text-white/90">
                              {isEn ? 'Universal Surrender' : 'సాష్టాంగ శరణాగతి'}
                            </span>
                          </div>

                          <p className="text-xs text-[#3E0A0C] leading-relaxed pt-0.5">
                            {isEn ? RAMA_SHLOKA_ORIGIN_DATA.concludingSignificanceEn : RAMA_SHLOKA_ORIGIN_DATA.concludingSignificanceTe}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Source Thumbnail Strip */}
                  <div 
                    onClick={() => setEnlargedPoster({
                      src: RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc,
                      title: isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe,
                      subtitle: isEn ? 'Click to inspect high-resolution infographic' : 'మూల చార్ట్‌ను పెద్దదిగా పరిశీలించండి'
                    })}
                    className="p-2.5 rounded-2xl bg-white border border-[#D4AF37]/60 hover:border-[#D4AF37] cursor-pointer transition-all flex items-center justify-between gap-3 group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 rounded-lg overflow-hidden border border-amber-300 shrink-0">
                        <img 
                          src={RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc} 
                          alt="Poster preview" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#7B1113] font-telugu-serif group-hover:underline">
                          {isEn ? 'Source Poster: "How Rama is called by each one"' : 'మూల సచిత్ర పటం: "How Rama is called by each one"'}
                        </div>
                        <div className="text-[11px] text-[#5D4037]">
                          {isEn ? 'Click to view and zoom the full original infographic poster' : 'పూర్తి సచిత్ర పోస్టర్‌ను పెద్దదిగా చూసి జూమ్ చేయడానికి క్లిక్ చేయండి'}
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-[#7B1113] text-xs font-bold flex items-center gap-1 group-hover:bg-[#7B1113] group-hover:text-[#FFE082] transition-colors shrink-0">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Enlarge' : 'జూమ్'}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Special Ramayana Family Tree Section inside Era 3 Modal */}
              {selectedEra.id === 'era_7000_4500_bc' && (
                renderRamayanaTreeDiagram()
              )}
              {/* Special Ramayana Astronomical Timeline Section inside Era 3 Modal */}
              {selectedEra.id === 'era_7000_4500_bc' && (
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/30 border-2 border-[#D4AF37] space-y-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#7B1113] border-2 border-[#D4AF37] p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                        <img 
                          src="./images/indian_history/sita_rama_lakshmana_square_icon.jpg" 
                          alt="Sri Sita Rama Lakshmana"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                            Ramayana Timeline
                          </span>
                          <span className="text-xs font-mono font-bold text-[#7B1113]">
                            !! तन्नो रामः प्रचोदयात् !!
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                          {isEn ? 'Valmiki Ramayana Astronomical Timeline (12,240 – 12,208 BCE)' : 'వాల్మీకి రామాయణ ఖగోళ కాలరేఖ (క్రీ.పూ. 12,240 – 12,208)'}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsRamayanaTimelineModalOpen(true)}
                      className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Open Full-Screen Pop-up' : 'ప్రత్యేక పాప్-అప్ తెరవండి'}</span>
                    </button>
                  </div>

                  {/* Narrative Intro */}
                  <p className="text-xs text-[#5D4037] leading-relaxed italic bg-white/80 p-3 rounded-xl border border-amber-200">
                    {isEn ? RAMAYANA_ASTRONOMICAL_TIMELINE.introEn : RAMAYANA_ASTRONOMICAL_TIMELINE.introTe}
                  </p>

                  {/* 11 Events Quick Preview */}
                  <div className="space-y-2.5 max-h-84 overflow-y-auto pr-1">
                    {RAMAYANA_ASTRONOMICAL_TIMELINE.events.map((ev) => (
                      <div key={ev.order} className="p-3 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-2xs flex items-start gap-3">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-50/70 border-2 border-amber-200/90 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                          <img 
                            src={ev.imageSrc} 
                            alt={isEn ? ev.titleEn : ev.titleTe}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10.5px] font-black flex items-center justify-center shrink-0">
                                {ev.order}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                                {isEn ? ev.titleEn : ev.titleTe}
                              </span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113]/10 text-[#7B1113] text-[11px] font-black border border-[#7B1113]/20">
                              🗓️ {ev.gregorianDate}
                            </span>
                          </div>

                          <div className="text-[11px] font-bold text-[#8B0000] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 flex items-center gap-1.5">
                            <span>🪐</span>
                            <span className="truncate">{isEn ? ev.panchangaDetailsEn : ev.panchangaDetailsTe}</span>
                          </div>

                          <p className="text-xs text-[#4E342E] leading-relaxed pt-0.5">
                            {isEn ? ev.descriptionEn : ev.descriptionTe}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Mahabharata Kuru Family Tree Flow Chart Section inside Era 4 Modal */}
              {selectedEra.id === 'era_5000_3100_bc' && (
                renderMahabharataKuruTreeDiagram()
              )}

              {/* Special Mahabharata Map & Kingdoms Section inside Era 4 Modal */}
              {selectedEra.id === 'era_5000_3100_bc' && (
                renderMahabharataMapSection()
              )}

              {/* Special Mahabharata War Astronomical Timeline Section inside Era 4 Modal */}
              {selectedEra.id === 'era_5000_3100_bc' && (
                renderMahabharataWarTimelineSection()
              )}

              {/* Special Bhagavad Gita Timeline Callout inside Era 4 Modal */}
              {selectedEra.id === 'era_5000_3100_bc' && (
                <div 
                  onClick={() => setIsGitaTimelineModalOpen(true)}
                  className="p-4 rounded-3xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] hover:border-white shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37]/50 flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      🪷
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#FFE082] text-[#7B1113] uppercase tracking-wider">
                          {isEn ? 'GITA TIMELINE POPUP' : 'శ్రీమద్భగవద్గీత (గీతామృతం) కాలక్రమం'}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#FFE57F]">
                          120,400,000 Yrs to 5,000 Yrs Ago
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black font-telugu-serif text-white mt-0.5 group-hover:text-[#FFE082] transition-colors">
                        {isEn ? 'Timeline of the Bhagavad Gita: From Sun-God Vivasvan to Arjuna' : 'వివస్వంతుని నుండి అర్జునుని వరకు భగవద్గీత కాలక్రమ ప్రస్థానం (8 యుగాలు)'}
                      </h4>
                      <p className="text-xs text-amber-200/90 font-medium">
                        {isEn 
                          ? 'Click to pop up the complete 120-million-year chronological descent of Srimad Bhagavad Gita' 
                          : 'సూర్యుని నుండి కురుక్షేత్రం వరకు 12 కోట్ల సంవత్సరాల గీతా ప్రస్థానాన్ని ప్రత్యేక కాలక్రమ పాప్-అప్‌లో చూడండి'}
                      </p>
                    </div>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-black flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-xs group-hover:scale-105 transition-all cursor-pointer">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Open Timeline Popup' : 'కాలక్రమ పాప్-అప్ తెరవండి'}</span>
                  </button>
                </div>
              )}

              {/* Key Figures & Dynasties */}
              <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/40 space-y-2">
                <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <Shield className="w-3.5 h-3.5 text-[#D84315]" />
                  {isEn ? 'Key Rulers, Rishis & Lineages (From Chart)' : 'ఈ యుగపు ముఖ్య పాలకులు, ఋషులు & వంశాలు'}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E0A0C]">
                  {(isEn ? selectedEra.keyFiguresEn : selectedEra.keyFiguresTe).map((fig, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/5">
                      <span className="text-[#D84315] font-bold">★</span>
                      <span className="font-medium">{fig}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Milestone Historic Events */}
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/40 space-y-2">
                <h4 className="text-xs font-bold text-[#8E24AA] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <Sparkles className="w-3.5 h-3.5 text-[#8E24AA]" />
                  {isEn ? 'Milestone Historic Events & Feats' : 'చారిత్రక మైలురాళ్లు & ముఖ్య సంఘటనలు'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4E342E]">
                  {(isEn ? selectedEra.milestoneEventsEn : selectedEra.milestoneEventsTe).map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#FFFDF7] p-2 rounded-xl border border-[#E8DFC8]">
                      <span className="text-[#8E24AA] font-bold text-sm leading-none">•</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Societal & Cultural Norms */}
              <div className="p-4 rounded-2xl bg-[#FFF8E7] border border-[#D4AF37]/40 space-y-2">
                <h4 className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider flex items-center gap-1.5 font-telugu-serif">
                  <BookOpen className="w-3.5 h-3.5 text-[#B71C1C]" />
                  {isEn ? 'Society, Status of Women & Cultural Norms' : 'సామాజిక వికాసం, మహిళా స్థానం & వర్ణ వ్యవస్థ'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4E342E]">
                  {(isEn ? selectedEra.societalNormsEn : selectedEra.societalNormsTe).map((norm, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-black/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                      <span>{norm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scriptural Sources & Research Reference */}
              <div className="p-3.5 rounded-xl bg-stone-100 text-[11px] text-[#5D4037] flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-stone-200">
                <div>
                  <span className="font-bold text-[#3E0A0C]">
                    {isEn ? 'Primary Scriptural Sources:' : 'మూల ఆధార గ్రంథాలు:'}
                  </span>{' '}
                  {(isEn ? selectedEra.scripturalReferencesEn : selectedEra.scripturalReferencesTe).join(' • ')}
                </div>
                <div className="text-[10px] text-stone-500 italic shrink-0">
                  {selectedEra.sourceReference}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF7F0] border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <button
                onClick={handleOpenMasterChart}
                className="px-4 py-2 rounded-xl bg-[#FFFDF7] hover:bg-[#FFE57F] text-[#7B1113] border border-[#D4AF37] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Inspect in Master Poster' : 'మూల పోస్టర్‌లో చూడండి'}</span>
              </button>

              <button
                onClick={() => setSelectedEra(null)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Close Details' : 'వివరాలు ముగించు (Close)'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ============================================================ */}
      {/* 4. MASTER CHART LIGHTBOX MODAL                               */}
      {/* ============================================================ */}
      {isChartModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2B0608] to-[#120203] border-b border-[#D4AF37]/50 text-white shrink-0">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FFD54F]" />
              <div>
                <h3 className="font-bold text-sm sm:text-base font-telugu-serif text-[#FFE57F]">
                  {isEn ? 'Vedic & Itihasa Chronological Master Chart' : 'వైదిక & ఇతిహాస కాలక్రమ మూల పటం'}
                </h3>
                <p className="text-[11px] text-white/70">
                  Source: &apos;Vedic-Ramayan&apos; by Dr. P.V. Vartak • 10,000 BC to 330 BC
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setChartZoom(prev => Math.min(prev + 0.25, 3))}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setChartZoom(prev => Math.max(prev - 0.25, 0.5))}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => setChartZoom(1)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#FFE57F] px-2">
                {Math.round(chartZoom * 100)}%
              </span>
              <button
                onClick={() => setIsChartModalOpen(false)}
                className="p-2 ml-2 rounded-lg bg-[#B71C1C] hover:bg-[#D32F2F] text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
            <div 
              style={{ transform: `scale(${chartZoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
              className="max-w-4xl shadow-2xl rounded-xl overflow-hidden border-2 border-[#D4AF37]"
            >
              <img 
                src="./images/indian_history/vedic_ramayana_vartak_timeline.jpg" 
                alt="Vedic-Ramayan Timeline Chart by Dr. Vartak"
                className="w-full h-auto block select-none"
              />
            </div>
          </div>

          <div className="p-2 bg-black/80 text-center text-[11px] text-[#FFE57F]/80 border-t border-white/10">
            {isEn 
              ? 'Tip: Use the Zoom In (+) button to inspect individual king lineages, dates, and historical annotations.'
              : 'సూచన: ప్రతి వంశవృక్ష శాఖ, కాలరేఖ తేదీలు మరియు వివరణలను స్పష్టంగా చదవడానికి జూమ్ (+) బటన్ ఉపయోగించండి.'}
          </div>
        </div>,
        document.body
      )}

      {/* ============================================================ */}
      {/* 5. DEDICATED RAMAYANA ASTRONOMICAL TIMELINE POP-UP MODAL      */}
      {/* ============================================================ */}
      {isRamayanaTimelineModalOpen && createPortal(
        <div 
          onClick={() => setIsRamayanaTimelineModalOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#FFFDF7] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-150"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2B0608] via-[#7B1113] to-[#4A0012] text-white relative shrink-0 border-b border-[#D4AF37]/40">
              <button
                onClick={() => setIsRamayanaTimelineModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 pr-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 border-2 border-white/30 p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  <img 
                    src="./images/indian_history/sita_rama_lakshmana_square_icon.jpg" 
                    alt="Sri Sita Rama Lakshmana"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFD54F] text-[#3E0A0C] text-[10px] font-black uppercase tracking-wider">
                      RAMAYANA TIMELINE
                    </span>
                    <span className="text-xs font-mono font-bold text-[#FFE57F]">
                      !! तन्नो रामः प्रचोदयात् !!
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-[#FFF9C4] text-[10px] font-bold border border-white/30">
                      12,240 BCE – 12,208 BCE
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black font-telugu-serif text-white leading-tight">
                    {isEn 
                      ? 'Valmiki Ramayana Astronomical Timeline' 
                      : 'వాల్మీకి రామాయణ ఖగోళ కాలరేఖ (శ్రీరామ చారిత్రక కాలక్రమం)'}
                  </h3>
                  <p className="text-xs text-[#FFE082] mt-0.5">
                    {isEn 
                      ? '11 Celestial Milestones • Tithi, Nakshatra, Sharada Ritu & Planetary Computations'
                      : 'ఖగోళ గ్రహ స్థితులు, తిథులు, నక్షత్రాలు మరియు ఋతువుల శాస్త్రీయ కాలగణన'}
                  </p>
                </div>
              </div>

              {/* Sub-Tabs: 11 Events vs Rama Shloka vs Original Visual Posters */}
              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setRamayanaModalTab('events')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      ramayanaModalTab === 'events' 
                        ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>📋</span>
                    <span>{isEn ? '11 Milestone Events' : '11 దివ్య ఘట్టాల కాలరేఖ'}</span>
                  </button>

                  <button
                    onClick={() => setRamayanaModalTab('familyTree')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      ramayanaModalTab === 'familyTree' 
                        ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>🌳</span>
                    <span>{isEn ? 'Family Tree' : 'రామాయణ వంశవృక్షం'}</span>
                  </button>

                  <button
                    onClick={() => setRamayanaModalTab('shloka')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      ramayanaModalTab === 'shloka' 
                        ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>📿</span>
                    <span>{isEn ? 'Rama Shloka Secret' : 'రామాయ రామభద్రాయ శ్లోక రహస్యం'}</span>
                  </button>

                  <button
                    onClick={() => setRamayanaModalTab('poster')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      ramayanaModalTab === 'poster' 
                        ? 'bg-[#FFE082] text-[#3E0A0C] shadow-sm' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>🖼️</span>
                    <span>{isEn ? 'Original Posters' : 'మూల సచిత్ర పోస్టర్లు'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-[#FFE57F] font-medium hidden sm:block">
                  {isEn ? 'Source: Computerized Planetarium Almanac & Scriptural Epics' : 'ఆధారం: ప్లానిటోరియం సాఫ్ట్‌వేర్ & వాల్మీకి రామాయణ ఆధారాలు'}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {ramayanaModalTab === 'events' && (
                <>
                  {/* Intro Banner */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-[#2C1810] text-xs leading-relaxed flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#D84315] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#7B1113]">
                        {isEn ? 'Astronomical & Epigraphical Synchronism: ' : 'ఖగోళ మరియు శాస్త్రీయ కాలగణన: '}
                      </span>
                      {isEn ? RAMAYANA_ASTRONOMICAL_TIMELINE.introEn : RAMAYANA_ASTRONOMICAL_TIMELINE.introTe}
                    </div>
                  </div>

                  {/* 11 Events Vertical Timeline */}
                  <div className="space-y-3 pt-2">
                    {RAMAYANA_ASTRONOMICAL_TIMELINE.events.map((ev, idx) => (
                      <React.Fragment key={ev.order}>
                        <div className="p-4 rounded-2xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
                            {/* Enhanced Illustration from original source */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#D4AF37]/70 p-1 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                              <img 
                                src={ev.imageSrc} 
                                alt={isEn ? ev.titleEn : ev.titleTe}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>

                            {/* Details */}
                            <div className="flex-1 min-w-0 w-full space-y-2">
                              {/* Row 1: Order, Title, Gregorian Date */}
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-black">
                                      #{ev.order}
                                    </span>
                                    <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                                      {isEn ? ev.titleEn : ev.titleTe}
                                    </h4>
                                  </div>
                                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-[#5D4037] text-[10px] font-bold mt-1 inline-block">
                                    {isEn ? ev.phaseBadgeEn : ev.phaseBadgeTe}
                                  </span>
                                </div>

                                <span className="px-3 py-1 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs font-black border border-[#D4AF37]/60 shadow-2xs">
                                  🗓️ {ev.gregorianDate}
                                </span>
                              </div>

                              {/* Row 2: Panchanga / Planetary details */}
                              <div className="p-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 text-[11.5px] font-bold text-[#8B0000] flex items-center gap-2">
                                <span>🪐</span>
                                <span>{isEn ? ev.panchangaDetailsEn : ev.panchangaDetailsTe}</span>
                              </div>

                              {/* Row 3: Narrative description */}
                              <p className="text-xs text-[#4E342E] leading-relaxed pt-0.5 pl-0.5">
                                {isEn ? ev.descriptionEn : ev.descriptionTe}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Connector arrow between events */}
                        {idx < RAMAYANA_ASTRONOMICAL_TIMELINE.events.length - 1 && (
                          <div className="flex flex-col items-center my-0.5">
                            <div className="w-0.5 h-4 bg-[#D4AF37]"></div>
                            <ArrowDown className="w-3.5 h-3.5 text-[#7B1113]" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </>
              )}

              {ramayanaModalTab === 'familyTree' && (
                renderRamayanaTreeDiagram()
              )}

              {ramayanaModalTab === 'shloka' && (
                <div className="space-y-4">
                  {/* Parchment Shloka Banner */}
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF9ED] to-[#FFECB3]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
                    <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082]">📿</span>
                        <div>
                          <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                            {isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe}
                          </h4>
                          <p className="text-xs text-[#5D4037]">
                            {isEn ? RAMA_SHLOKA_ORIGIN_DATA.subtitleEn : RAMA_SHLOKA_ORIGIN_DATA.subtitleTe}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setEnlargedPoster({
                          src: RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc,
                          title: isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe,
                          subtitle: isEn ? 'Original Visual Chart' : 'మూల సచిత్ర పటం'
                        })}
                        className="px-3.5 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Zoom Chart' : 'మూల చార్ట్ జూమ్'}</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDF0] border-2 border-[#D4AF37]/70 text-center space-y-2 shadow-inner">
                      <div className="text-base sm:text-lg font-bold font-mono text-[#7B1113] whitespace-pre-line tracking-wide">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaSanskrit}
                      </div>
                      <div className="text-base sm:text-lg font-bold font-telugu-serif text-[#8B0000] whitespace-pre-line">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaTelugu}
                      </div>
                      <div className="text-xs font-mono text-stone-600 italic whitespace-pre-line">
                        {RAMA_SHLOKA_ORIGIN_DATA.shlokaIAST}
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50 text-xs text-[#3E0A0C] text-left border border-amber-200 mt-2">
                        <span className="font-bold text-[#7B1113]">
                          {isEn ? 'Universal Meaning: ' : 'సమగ్ర భావార్థం: '}
                        </span>
                        {isEn ? RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningEn : RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningTe}
                      </div>
                    </div>
                  </div>

                  {/* 7 Callers Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {RAMA_SHLOKA_ORIGIN_DATA.callers.map((caller) => (
                      <div 
                        key={caller.order} 
                        className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-50 border-2 border-[#D4AF37]/70 p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                          <img 
                            src={caller.avatarSrc} 
                            alt={isEn ? caller.callerEn : caller.callerTe}
                            className="w-full h-full object-cover rounded-xl"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                              {isEn ? caller.callerEn : caller.callerTe}
                            </h5>
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10px] font-bold border border-amber-300">
                              #{caller.order} {caller.shlokaWord}
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#A91D22] text-[#FFE082] shadow-xs">
                            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-85">
                              {isEn ? 'Called:' : 'పిలిచింది:'}
                            </span>
                            <span className="text-sm sm:text-base font-black font-mono tracking-wide">
                              {caller.calledName}
                            </span>
                            <span className="text-xs font-bold text-white">
                              ({isEn ? caller.shlokaWord : caller.shlokaWordTelugu})
                            </span>
                          </div>

                          <p className="text-[11px] text-[#5D4037] font-medium leading-tight">
                            {isEn ? caller.relationshipEn : caller.relationshipTe}
                          </p>

                          <p className="text-xs text-[#2C1810] leading-relaxed pt-1 border-t border-amber-100/80">
                            <span className="font-semibold text-[#8B0000]">
                              {isEn ? 'Meaning: ' : 'అర్థం: '}
                            </span>
                            {isEn ? caller.meaningEn : caller.meaningTe}
                          </p>

                          <p className="text-[11px] text-[#555] italic">
                            {isEn ? caller.spiritualSignificanceEn : caller.spiritualSignificanceTe}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* 8th Card: Namaḥ */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFF8E1] to-[#FFE082]/40 border-2 border-[#D4AF37] shadow-xs flex items-start gap-3.5">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#7B1113] text-[#FFE082] border-2 border-[#D4AF37] flex items-center justify-center text-3xl shrink-0 shadow-xs">
                        🙏
                      </div>
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center justify-between gap-1 flex-wrap">
                          <h5 className="text-xs sm:text-sm font-black text-[#7B1113] font-telugu-serif">
                            {isEn ? 'All Devotees & Humanity' : 'సమస్త భక్తకోటి & సమస్త లోకాలు'}
                          </h5>
                          <span className="px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                            నమః (नमः)
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-xs">
                          <span className="text-sm sm:text-base font-black font-mono tracking-wide">
                            NAMAḤ (నమః)
                          </span>
                          <span className="text-xs text-white/90">
                            {isEn ? 'Universal Surrender' : 'సాష్టాంగ శరణాగతి'}
                          </span>
                        </div>

                        <p className="text-xs text-[#3E0A0C] leading-relaxed pt-1">
                          {isEn ? RAMA_SHLOKA_ORIGIN_DATA.concludingSignificanceEn : RAMA_SHLOKA_ORIGIN_DATA.concludingSignificanceTe}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {ramayanaModalTab === 'poster' && (
                <div className="space-y-6">
                  {/* Poster 1: Ramayana Family Tree */}
                  <div className="p-4 rounded-3xl bg-white border-2 border-[#D4AF37]/50 shadow-sm space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5 font-telugu-serif">
                        <span className="text-base">🌳</span>
                        <span>{isEn ? 'Poster 1: Ramayana Family Tree (Ayodhya, Mithila, Kishkindha, Lanka)' : 'పోస్టర్ 1: రామాయణ సంపూర్ణ వంశవృక్షం (అయోధ్య, మిథిల, కిష్కింధ, లంక)'}</span>
                      </div>

                      <button
                        onClick={() => setEnlargedPoster({
                          src: RAMAYANA_FAMILY_TREE_DATA.imageSrc,
                          title: isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe,
                          subtitle: isEn ? 'High Resolution Visual Poster' : 'అధిక స్పష్టత మూల పటం'
                        })}
                        className="px-3 py-1.5 rounded-xl bg-[#7B1113] text-[#FFE57F] text-xs font-bold hover:bg-[#8E1C1E] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Full-Screen Lightbox' : 'పూర్తి తెరపై చూడండి'}</span>
                      </button>
                    </div>

                    <div className="w-full flex items-center justify-center p-2 bg-stone-900/5 rounded-2xl border border-stone-200">
                      <img 
                        src={RAMAYANA_FAMILY_TREE_DATA.imageSrc} 
                        alt="Ramayana Family Tree Poster" 
                        className="max-h-[55vh] w-auto object-contain rounded-xl shadow-md border border-amber-300"
                      />
                    </div>
                  </div>

                  {/* Poster 2: Rama Shloka Callers Poster */}
                  <div className="p-4 rounded-3xl bg-white border-2 border-[#D4AF37]/50 shadow-sm space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5 font-telugu-serif">
                        <span className="text-base">📿</span>
                        <span>{isEn ? 'Poster 2: "How Rama is called by each one" (Shloka Origin)' : 'పోస్టర్ 2: "How Rama is called by each one" (శ్లోక ఆవిర్భావ పటం)'}</span>
                      </div>

                      <button
                        onClick={() => setEnlargedPoster({
                          src: RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc,
                          title: isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe,
                          subtitle: isEn ? 'High Resolution Visual Poster' : 'అధిక స్పష్టత మూల పటం'
                        })}
                        className="px-3 py-1.5 rounded-xl bg-[#7B1113] text-[#FFE57F] text-xs font-bold hover:bg-[#8E1C1E] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Full-Screen Lightbox' : 'పూర్తి తెరపై చూడండి'}</span>
                      </button>
                    </div>

                    <div className="w-full flex items-center justify-center p-2 bg-stone-900/5 rounded-2xl border border-stone-200">
                      <img 
                        src={RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc} 
                        alt="Rama Shloka Poster" 
                        className="max-h-[55vh] w-auto object-contain rounded-xl shadow-md border border-amber-300"
                      />
                    </div>
                  </div>

                  {/* Poster 3: Ramayana Astronomical Timeline Infographic */}
                  <div className="p-4 rounded-3xl bg-white border-2 border-[#D4AF37]/50 shadow-sm space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5 font-telugu-serif">
                        <span className="text-base">🏹</span>
                        <span>{isEn ? 'Poster 3: Valmiki Ramayana Astronomical Timeline (12,240 – 12,208 BCE)' : 'పోస్టర్ 3: వాల్మీకి రామాయణ ఖగోళ కాలరేఖ ఇన్ఫోగ్రాఫిక్'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setRamayanaPosterZoom(prev => Math.min(prev + 0.25, 3))}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113] border border-stone-300 transition-colors"
                          title="Zoom In"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setRamayanaPosterZoom(prev => Math.max(prev - 0.25, 0.5))}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113] border border-stone-300 transition-colors"
                          title="Zoom Out"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setRamayanaPosterZoom(1)}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#7B1113] border border-stone-300 transition-colors"
                          title="Reset"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono font-bold text-[#7B1113] px-1">
                          {Math.round(ramayanaPosterZoom * 100)}%
                        </span>
                      </div>
                    </div>

                    <div className="w-full overflow-auto max-h-[55vh] flex items-center justify-center p-2 bg-stone-900/5 rounded-2xl border border-stone-200">
                      <div 
                        style={{ transform: `scale(${ramayanaPosterZoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
                        className="max-w-md shadow-xl rounded-xl overflow-hidden border border-[#D4AF37]"
                      >
                        <img 
                          src="./images/indian_history/ramayana_astronomical_timeline.jpg" 
                          alt="Ramayana Astronomical Timeline Infographic" 
                          className="w-full h-auto block select-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF7F0] border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setRamayanaModalTab('events')}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    ramayanaModalTab === 'events'
                      ? 'bg-[#7B1113] text-[#FFE082] border-[#7B1113]'
                      : 'bg-white hover:bg-amber-50 text-[#7B1113] border-[#D4AF37]'
                  }`}
                >
                  <span>📋 11 ఘట్టాలు</span>
                </button>

                <button
                  onClick={() => setRamayanaModalTab('familyTree')}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    ramayanaModalTab === 'familyTree'
                      ? 'bg-[#7B1113] text-[#FFE082] border-[#7B1113]'
                      : 'bg-white hover:bg-amber-50 text-[#7B1113] border-[#D4AF37]'
                  }`}
                >
                  <span>🌳 వంశవృక్షం</span>
                </button>

                <button
                  onClick={() => setRamayanaModalTab('shloka')}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    ramayanaModalTab === 'shloka'
                      ? 'bg-[#7B1113] text-[#FFE082] border-[#7B1113]'
                      : 'bg-white hover:bg-amber-50 text-[#7B1113] border-[#D4AF37]'
                  }`}
                >
                  <span>📿 శ్లోక రహస్యం</span>
                </button>

                <button
                  onClick={() => setRamayanaModalTab('poster')}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    ramayanaModalTab === 'poster'
                      ? 'bg-[#7B1113] text-[#FFE082] border-[#7B1113]'
                      : 'bg-white hover:bg-amber-50 text-[#7B1113] border-[#D4AF37]'
                  }`}
                >
                  <span>🖼️ మూల పోస్టర్లు</span>
                </button>
              </div>

              <button
                onClick={() => setIsRamayanaTimelineModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి (Close)'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ============================================================ */}
      {/* 6. UNIVERSAL ENLARGED POSTER LIGHTBOX POPUP                  */}
      {/* ============================================================ */}
      {enlargedPoster && createPortal(
        <div 
          onClick={() => setEnlargedPoster(null)}
          className="fixed inset-0 z-[10000] flex flex-col bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
        >
          <div className="flex items-center justify-between p-3 sm:p-4 bg-stone-900/90 text-white border-b border-white/10 shrink-0">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#FFE57F] font-telugu-serif">
                {enlargedPoster.title}
              </h3>
              {enlargedPoster.subtitle && (
                <p className="text-xs text-stone-300">{enlargedPoster.subtitle}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); setEnlargedPosterZoom(prev => Math.min(prev + 0.25, 3)); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setEnlargedPosterZoom(prev => Math.max(prev - 0.25, 0.5)); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setEnlargedPosterZoom(1); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-xs font-mono text-[#FFE57F] px-1">
                {Math.round(enlargedPosterZoom * 100)}%
              </span>
              <button
                onClick={() => setEnlargedPoster(null)}
                className="p-2 ml-2 rounded-lg bg-[#B71C1C] hover:bg-[#D32F2F] text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="flex-1 overflow-auto p-4 flex items-center justify-center"
          >
            <div 
              style={{ transform: `scale(${enlargedPosterZoom})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
              className="max-w-2xl shadow-2xl rounded-2xl overflow-hidden border-2 border-[#D4AF37]"
            >
              <img 
                src={enlargedPoster.src} 
                alt={enlargedPoster.title}
                className="w-full h-auto block select-none"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Bhagavad Gita Chronological Timeline Modal */}
      <BhagavadGitaTimelineModal 
        isOpen={isGitaTimelineModalOpen}
        onClose={() => setIsGitaTimelineModalOpen(false)}
      />

    </div>
  );
};
