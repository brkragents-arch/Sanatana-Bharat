import React, { useState, useEffect, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  INDIAN_HISTORY_CHAKRA_EVENTS, 
  type ChakraTimeEvent 
} from '../../data/indianHistoryChakraData';
import { 
  YUGA_CYCLE_25800_SEGMENTS, 
  type YugaCycleSegment 
} from '../../data/yugaCycle25800Data';
import { 
  Compass, 
  Play, 
  Pause, 
  RotateCw, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Crown, 
  Sparkles, 
  Landmark, 
  Target, 
  Maximize2,
  Orbit
} from 'lucide-react';

export type ChakraDisplayMode = 'yuga_25800' | 'historical_empires' | 'unified_concentric';

export const IndianHistoryChakraView: React.FC = () => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Display Mode: 25,800-year Yuga Cycle vs 24 Historical Empires vs Unified
  const [displayMode, setDisplayMode] = useState<ChakraDisplayMode>('yuga_25800');

  // Selected time event for 24 Historical Empires
  const [selectedEventId, setSelectedEventId] = useState<string>('current_time_bharat');

  // Selected segment for 25,800-Year Yuga Cycle (defaults to Ekpyrosis 2025-3225 CE)
  const [selectedYugaId, setSelectedYugaId] = useState<string>('ekpyrosis');

  // Chakra rotation angle (in degrees)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Auto Tour mode
  const [isTourActive, setIsTourActive] = useState<boolean>(false);

  // Audio chime state
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

  // Live real-time clock state for "Current Time"
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Lightbox for thumbnail image
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Sound generator using Web Audio API
  const playChime = (freq = 528) => {
    if (!isAudioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio autoplay policy or unavailable
    }
  };

  // Clock tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto Tour Interval
  useEffect(() => {
    if (!isTourActive) return;

    const interval = setInterval(() => {
      if (displayMode === 'yuga_25800') {
        setSelectedYugaId(prevId => {
          const currentIndex = YUGA_CYCLE_25800_SEGMENTS.findIndex(s => s.id === prevId);
          const nextIndex = (currentIndex + 1) % YUGA_CYCLE_25800_SEGMENTS.length;
          const nextSeg = YUGA_CYCLE_25800_SEGMENTS[nextIndex];
          playChime(nextSeg.isCurrentTime ? 880 : 440 + nextIndex * 20);
          return nextSeg.id;
        });
      } else {
        setSelectedEventId(prevId => {
          const currentIndex = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(e => e.id === prevId);
          const nextIndex = (currentIndex + 1) % INDIAN_HISTORY_CHAKRA_EVENTS.length;
          const nextEvent = INDIAN_HISTORY_CHAKRA_EVENTS[nextIndex];
          playChime(nextEvent.isCurrentTime ? 880 : 440 + nextIndex * 15);
          return nextEvent.id;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTourActive, isAudioEnabled, displayMode]);

  // Current selected historical event
  const currentEvent: ChakraTimeEvent = useMemo(() => {
    const found = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.id === selectedEventId);
    return found || INDIAN_HISTORY_CHAKRA_EVENTS[INDIAN_HISTORY_CHAKRA_EVENTS.length - 1];
  }, [selectedEventId]);

  // Current selected Yuga segment
  const currentYuga: YugaCycleSegment = useMemo(() => {
    const found = YUGA_CYCLE_25800_SEGMENTS.find(s => s.id === selectedYugaId);
    return found || YUGA_CYCLE_25800_SEGMENTS[8]; // Ekpyrosis
  }, [selectedYugaId]);

  // Geometry Constants
  const CX = 450;
  const CY = 450;

  // Geometry for 24 Historical Empires Chakra
  const R_OUTER_RIM = 425;
  const R_DEGREE_TICKS = 405;
  const R_SECTORS_OUTER = 385;
  const R_NODES = 330;
  const R_SECTORS_INNER = 160;
  const R_HUB_OUTER = 145;
  const R_HUB_MID = 110;
  const R_HUB_INNER = 75;

  const TOTAL_SPOKES = 24;
  const ANGLE_STEP = 360 / TOTAL_SPOKES;

  // Geometry for 25,800-Year Yuga Cycle Chakra
  const YUGA_R_OUTER = 395;
  const YUGA_R_INNER = 220;
  const YUGA_R_ARROW = 185;
  const YUGA_R_HUB = 140;

  // Calculate angle boundaries for 25,800 Yuga Cycle segments
  // In the uploaded image, Kataklysmos (1200 yrs) is centered at the top (-90 degrees)
  const yugaAngleSegments = useMemo(() => {
    let currentAngle = -90 - (16.744 / 2); // Start angle for Kataklysmos
    return YUGA_CYCLE_25800_SEGMENTS.map(seg => {
      const span = (seg.durationYears / 25800) * 360;
      const start = currentAngle;
      const end = currentAngle + span;
      const mid = start + span / 2;
      currentAngle = end;
      return {
        ...seg,
        startAngleDeg: start,
        endAngleDeg: end,
        midAngleDeg: mid,
        spanDeg: span
      };
    });
  }, []);

  // Helper for SVG Arc path
  const describeArcSector = (cx: number, cy: number, rInner: number, rOuter: number, startAngleDeg: number, endAngleDeg: number) => {
    const startRad = (startAngleDeg * Math.PI) / 180;
    const endRad = (endAngleDeg * Math.PI) / 180;

    const x1 = cx + rOuter * Math.cos(startRad);
    const y1 = cy + rOuter * Math.sin(startRad);
    const x2 = cx + rOuter * Math.cos(endRad);
    const y2 = cy + rOuter * Math.sin(endRad);

    const x3 = cx + rInner * Math.cos(endRad);
    const y3 = cy + rInner * Math.sin(endRad);
    const x4 = cx + rInner * Math.cos(startRad);
    const y4 = cy + rInner * Math.sin(startRad);

    const largeArc = (endAngleDeg - startAngleDeg) > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  const getHistoricalSectorPath = (index: number) => {
    const startAngle = (index * ANGLE_STEP - ANGLE_STEP / 2) * (Math.PI / 180);
    const endAngle = (index * ANGLE_STEP + ANGLE_STEP / 2) * (Math.PI / 180);

    const x1 = CX + R_SECTORS_OUTER * Math.cos(startAngle);
    const y1 = CY + R_SECTORS_OUTER * Math.sin(startAngle);
    const x2 = CX + R_SECTORS_OUTER * Math.cos(endAngle);
    const y2 = CY + R_SECTORS_OUTER * Math.sin(endAngle);

    const x3 = CX + R_SECTORS_INNER * Math.cos(endAngle);
    const y3 = CY + R_SECTORS_INNER * Math.sin(endAngle);
    const x4 = CX + R_SECTORS_INNER * Math.cos(startAngle);
    const y4 = CY + R_SECTORS_INNER * Math.sin(startAngle);

    return `M ${x1} ${y1} A ${R_SECTORS_OUTER} ${R_SECTORS_OUTER} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${R_SECTORS_INNER} ${R_SECTORS_INNER} 0 0 0 ${x4} ${y4} Z`;
  };

  // Select handlers
  const handleSelectHistoricalEvent = (event: ChakraTimeEvent) => {
    setSelectedEventId(event.id);
    playChime(event.isCurrentTime ? 880 : 528);
  };

  const handleSelectYugaSegment = (seg: YugaCycleSegment) => {
    setSelectedYugaId(seg.id);
    playChime(seg.isCurrentTime ? 880 : (seg.category === 'kataklysmos' ? 700 : 528));
  };

  const handleJumpToCurrentTime = () => {
    if (displayMode === 'yuga_25800') {
      setSelectedYugaId('ekpyrosis');
    } else {
      setSelectedEventId('current_time_bharat');
    }
    playChime(880);
  };

  const formattedDate = currentTime.toLocaleDateString(isEn ? 'en-US' : 'te-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString(isEn ? 'en-US' : 'te-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-xl overflow-hidden min-h-[900px] mb-12">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER                                         */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#2A0800] via-[#5C1D06] to-[#7B1113] px-4 sm:px-8 py-6 text-white border-b-4 border-[#D4AF37] relative overflow-hidden shadow-md">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#FFD54F] to-[#FFF8E1] p-0.5 shadow-xl shrink-0 flex items-center justify-center border border-[#FFE082]">
              <div className="w-full h-full rounded-2xl bg-[#3E1004] flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                {displayMode === 'yuga_25800' ? '🌌' : '🎡'}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#2A0800] text-xs font-black uppercase tracking-wider shadow-sm">
                  {isEn ? 'Universal Time Chakra' : 'సశరీర చారిత్రక & యుగ కాలచక్ర దర్శిని'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#FFE082] text-xs font-bold border border-[#D4AF37]/50">
                  {displayMode === 'yuga_25800' 
                    ? (isEn ? '25,800-Year Precessional Cycle' : '25,800 ఏళ్ల అయనాంశ యుగచక్రం') 
                    : (isEn ? '24 Spokes • Indian Empires' : '24 ఆకుల చక్రం • భారతీయ సామ్రాజ్యాలు')}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/50 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isEn ? 'LIVE: 2026 CE Marked' : 'వర్తమానం: 2026 గుర్తించబడింది'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFE082] font-telugu-serif tracking-tight mt-1.5 drop-shadow-sm">
                {displayMode === 'yuga_25800'
                  ? (isEn ? 'Yuga Cycle 25,800 Years — Precession & Great Ages' : 'మహా యుగ చక్రం (25,800 సంవత్సరాల అయనాంశ కాలచక్రం)')
                  : (isEn ? 'Indian History: Chronological Flow & Great Empires' : 'భారతీయ చరిత్ర: కాలానుక్రమణిక మరియు మహా సామ్రాజ్యాలు')}
              </h1>
              <p className="text-xs sm:text-sm text-[#FFECE4] mt-1.5 max-w-3xl leading-relaxed">
                {displayMode === 'yuga_25800'
                  ? (isEn 
                      ? 'The 25,800-year Great Year (Precession of Equinoxes) with Ascending and Descending cycles of Satya, Treta, Dwapara, Kali, Kataklysmos (10,876 BCE), and Ekpyrosis (2025–3225 CE marked as present time).'
                      : '25,800 సంవత్సరాల మహా యుగ చక్రం: సత్య, త్రేతా, ద్వాపర, కలి యుగాల ఆరోహణ & అవరోహణ చక్రాలు, కటాక్లిస్మోస్ (10,876 క్రీ.పూ. జలప్రళయం) మరియు ప్రస్తుత ఎక్పైరోసిస్ (2025-3225 క్రీ.శ. అగ్ని పరివర్తన కాలం).')
                  : (isEn 
                      ? 'Click anywhere on the sacred 24-spoked Dharma Chakra to explore pivotal epochs, legendary dynasties, and turning points of Bharat with live current time needle pointer.'
                      : '24 ఆకుల పవిత్ర ధర్మచక్రంపై ఏ బిందువును తాకినా ఆ కాలపు సమగ్ర చరిత్ర, సామ్రాజ్యాలు, చక్రవర్తులు, విశేషాలు ప్రత్యక్షమవుతాయి. ప్రకాశించే పల్సింగ్ సూచిక నేటి వర్తమాన కాలాన్ని (2026 క్రీ.శ.) సూచిస్తుంది.')}
              </p>
            </div>
          </div>

          {/* Current Live Time Badge */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF37]/50 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFE082]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{isEn ? 'Present Live Clock (IST)' : 'ప్రత్యక్ష వర్తమాన కాలం'}</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-black text-cyan-300 tracking-wider">
              {formattedTime}
            </div>
            <div className="text-[11px] text-[#FFE082]/90 font-medium">
              {formattedDate} • {isEn ? 'Kaliyuga 5127' : 'కలియుగం 5127'}
            </div>
            <button
              onClick={handleJumpToCurrentTime}
              className="mt-1 px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer border border-cyan-300/40"
              title={isEn ? 'Jump needle to current time' : 'చక్రంపై నేటి వర్తమాన సమయానికి వెళ్ళు'}
            >
              <Target className="w-3.5 h-3.5 text-cyan-200" />
              <span>{isEn ? 'Jump to Current Time (2026)' : 'ప్రస్తుత సమయానికి వెళ్ళు (2026)'}</span>
            </button>
          </div>
        </div>

        {/* PRIMARY CHAKRA MODE SWITCHER TABS */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#FFE082] uppercase tracking-wider mr-1">
              {isEn ? 'Chakra System:' : 'కాలచక్ర విధానం:'}
            </span>

            {/* Mode 1: 25,800-Year Yuga Cycle */}
            <button
              onClick={() => {
                setDisplayMode('yuga_25800');
                playChime(640);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                displayMode === 'yuga_25800'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 text-stone-950 ring-2 ring-white scale-102 font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/50'
              }`}
            >
              <span className="text-base">🌌</span>
              <span>{isEn ? 'Yuga Cycle (25,800 Years)' : '25,800 ఏళ్ల యుగచక్రం (Yuga Cycle)'}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-red-700 text-white text-[9px] font-black uppercase">NEW</span>
            </button>

            {/* Mode 2: 24 Historical Empires */}
            <button
              onClick={() => {
                setDisplayMode('historical_empires');
                playChime(528);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                displayMode === 'historical_empires'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 text-stone-950 ring-2 ring-white scale-102 font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/50'
              }`}
            >
              <span className="text-base">🏛️</span>
              <span>{isEn ? 'Indian Empires (24 Spokes)' : 'భారతీయ మహా సామ్రాజ్యాలు (24 ఆకులు)'}</span>
            </button>

            {/* Mode 3: Unified Concentric Wheel */}
            <button
              onClick={() => {
                setDisplayMode('unified_concentric');
                playChime(768);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                displayMode === 'unified_concentric'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 text-stone-950 ring-2 ring-white scale-102 font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/50'
              }`}
            >
              <span className="text-base">☸️</span>
              <span>{isEn ? 'Unified Dual Chakra (Both Synced)' : 'సంపూర్ణ సమన్వయ చక్రం (Dual Chakra)'}</span>
            </button>
          </div>

          {/* Quick controls toolbar */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <button
              onClick={() => setIsTourActive(!isTourActive)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                isTourActive 
                  ? 'bg-amber-400 text-red-950 ring-2 ring-white animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40'
              }`}
            >
              {isTourActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTourActive ? (isEn ? 'Pause Tour' : 'యాత్రను ఆపు') : (isEn ? 'Auto Tour' : 'ఆటో యాత్ర')}</span>
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev + 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Clockwise' : 'సవ్యదిశలో తిప్పు'}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev - 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Anti-Clockwise' : 'అపసవ్యదిశలో తిప్పు'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className={`p-1.5 rounded-xl transition-all cursor-pointer border ${
                isAudioEnabled 
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50' 
                  : 'bg-white/5 text-stone-400 border-white/20'
              }`}
              title={isAudioEnabled ? (isEn ? 'Mute' : 'మ్యూట్') : (isEn ? 'Unmute' : 'శబ్దం ఆన్')}
            >
              {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN WORKSPACE: CIRCULAR CHAKRA + DOSSIER                 */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE CLICKABLE CIRCULAR CHAKRA SVG CANVAS        */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center">
          
          <div className="w-full max-w-[620px] aspect-square relative select-none flex items-center justify-center p-2 sm:p-4 rounded-3xl bg-radial from-[#FFFDF8] via-[#FFF9EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-xl">
            
            {/* Top Indicator Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-cyan-950/90 text-cyan-200 border border-cyan-400/60 px-3 py-1 rounded-full shadow-md text-[11px] font-bold backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>
                {displayMode === 'yuga_25800' 
                  ? (isEn ? 'Ekpyrosis (2025–3225 CE) = LIVE NOW' : 'ఎక్పైరోసిస్ (2025-3225 CE) = వర్తమానం') 
                  : (isEn ? 'Spoke #24 = Current Time 2026' : 'ఆకు #24 = ప్రస్తుత సమయం 2026')}
              </span>
            </div>

            {/* View Original Master Image Button in Top Right */}
            <button
              onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
              className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-[#7B1113]/90 hover:bg-[#7B1113] text-[#FFE082] px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs border border-[#D4AF37] cursor-pointer transition-all"
              title={isEn ? 'View Original Uploaded Yuga Cycle Chart' : 'మూల యుగచక్ర పటాన్ని చూడండి'}
            >
              <Maximize2 className="w-3 h-3 text-[#FFD54F]" />
              <span>{isEn ? 'Source Poster (HD)' : 'మూల పటం (HD)'}</span>
            </button>

            {/* MASTER SVG CHAKRA RENDERING */}
            <svg
              viewBox="0 0 900 900"
              className="w-full h-full drop-shadow-2xl transition-transform duration-700 ease-out"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transformOrigin: `${CX}px ${CY}px`
              }}
            >
              <defs>
                <radialGradient id="chakraGoldGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF8E1" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#7B1113" />
                </radialGradient>

                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="50%" stopColor="#FFD54F" />
                  <stop offset="85%" stopColor="#C59B27" />
                  <stop offset="100%" stopColor="#3E1004" />
                </radialGradient>

                <radialGradient id="currentTimeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#00838F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#006064" stopOpacity="0" />
                </radialGradient>

                {/* Marker for Ascending & Descending Curved Arrows */}
                <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#2C1810" />
                </marker>
              </defs>

              {/* ------------------------------------------------------------ */}
              {/* MODE A: 25,800-YEAR YUGA CYCLE (AS IN UPLOADED IMAGE)        */}
              {/* ------------------------------------------------------------ */}
              {(displayMode === 'yuga_25800' || displayMode === 'unified_concentric') && (
                <g id="yuga-cycle-layer">
                  {/* Outer & Inner Concentric Circular Borders */}
                  <circle cx={CX} cy={CY} r={YUGA_R_OUTER + 2} fill="#2A0800" stroke="#D4AF37" strokeWidth="3" />
                  <circle cx={CX} cy={CY} r={YUGA_R_INNER} fill="none" stroke="#2C1810" strokeWidth="2.5" />

                  {/* Yuga Cycle Arc Sectors */}
                  {yugaAngleSegments.map(seg => {
                    const isSelected = seg.id === selectedYugaId;
                    const path = describeArcSector(CX, CY, YUGA_R_INNER, YUGA_R_OUTER, seg.startAngleDeg, seg.endAngleDeg);
                    const isCurr = seg.isCurrentTime;

                    return (
                      <g
                        key={`yuga-seg-${seg.id}`}
                        className="cursor-pointer group"
                        onClick={() => handleSelectYugaSegment(seg)}
                      >
                        <path
                          d={path}
                          fill={
                            isSelected
                              ? (isCurr ? '#B71C1C' : seg.color)
                              : (seg.category === 'kataklysmos'
                                  ? '#E3F2FD'
                                  : seg.category === 'ekpyrosis'
                                    ? '#FFEBEE'
                                    : seg.category === 'transition'
                                      ? '#F5F5F5'
                                      : seg.category === 'satya'
                                        ? '#FFFDE7'
                                        : seg.category === 'treta'
                                          ? '#FFF3E0'
                                          : seg.category === 'dwapara'
                                            ? '#E8F5E9'
                                            : '#EDE7F6')
                          }
                          stroke={
                            isSelected 
                              ? '#FFE082' 
                              : (isCurr ? '#E53935' : '#2C1810')
                          }
                          strokeWidth={isSelected ? 4 : (isCurr ? 2.5 : 1.5)}
                          className="transition-colors duration-200"
                        />

                        {/* Mid-radius Text for Yuga Name & Duration */}
                        {(() => {
                          const rad = (seg.midAngleDeg * Math.PI) / 180;
                          const rText = (YUGA_R_OUTER + YUGA_R_INNER) / 2;
                          const xT = CX + rText * Math.cos(rad);
                          const yT = CY + rText * Math.sin(rad);

                          let textRot = seg.midAngleDeg + 90;
                          if (seg.midAngleDeg > 0 && seg.midAngleDeg < 180) {
                            textRot += 180;
                          }

                          if (seg.category === 'transition') {
                            return (
                              <text
                                x={xT}
                                y={yT}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={8}
                                fontWeight="bold"
                                fill={isSelected ? '#FFE082' : '#424242'}
                                transform={`rotate(${textRot}, ${xT}, ${yT})`}
                                className="pointer-events-none select-none font-sans"
                              >
                                300 yrs
                              </text>
                            );
                          }

                          const isKataklysmos = seg.category === 'kataklysmos';
                          const isEkpyrosis = seg.category === 'ekpyrosis';

                          return (
                            <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                              <text
                                x={xT}
                                y={yT - 8}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={isKataklysmos || isEkpyrosis ? 13 : 14}
                                fontWeight="900"
                                fontStyle={isKataklysmos || isEkpyrosis ? 'italic' : 'normal'}
                                fill={
                                  isSelected 
                                    ? '#FFE082' 
                                    : (isKataklysmos ? '#1565C0' : isEkpyrosis ? '#C62828' : '#212121')
                                }
                                className="font-serif"
                              >
                                {seg.nameEn.split(' ')[0]}
                              </text>
                              <text
                                x={xT}
                                y={yT + 9}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={10}
                                fontWeight="bold"
                                fontStyle={isKataklysmos || isEkpyrosis ? 'italic' : 'normal'}
                                fill={
                                  isSelected 
                                    ? '#FFFFFF' 
                                    : (isKataklysmos ? '#1976D2' : isEkpyrosis ? '#D32F2F' : '#555555')
                                }
                              >
                                {seg.durationLabelEn}
                              </text>
                            </g>
                          );
                        })()}
                      </g>
                    );
                  })}

                  {/* Outer Radial Boundary Tick Marks & BCE/CE Dates */}
                  {yugaAngleSegments.map(seg => {
                    const rad = (seg.startAngleDeg * Math.PI) / 180;
                    const xInner = CX + YUGA_R_INNER * Math.cos(rad);
                    const yInner = CY + YUGA_R_INNER * Math.sin(rad);
                    const xOuter = CX + YUGA_R_OUTER * Math.cos(rad);
                    const yOuter = CY + YUGA_R_OUTER * Math.sin(rad);

                    const xDate = CX + (YUGA_R_OUTER + 18) * Math.cos(rad);
                    const yDate = CY + (YUGA_R_OUTER + 18) * Math.sin(rad);

                    let dateRot = seg.startAngleDeg + 90;
                    if (seg.startAngleDeg > 0 && seg.startAngleDeg < 180) dateRot += 180;

                    const dateText = seg.datesEn.split('–')[0].trim();

                    return (
                      <g key={`yuga-boundary-${seg.id}`} className="pointer-events-none">
                        <line
                          x1={xInner}
                          y1={yInner}
                          x2={xOuter + 8}
                          y2={yOuter + 8 * Math.sin(rad)}
                          stroke="#2C1810"
                          strokeWidth="2"
                        />
                        <text
                          x={xDate}
                          y={yDate}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={9}
                          fontWeight="bold"
                          fill="#3E2723"
                          transform={`rotate(${dateRot}, ${xDate}, ${yDate})`}
                          className="font-mono"
                        >
                          {dateText}
                        </text>
                      </g>
                    );
                  })}

                  {/* Inner Ring with Ascending & Descending Cycle Arrows */}
                  <circle cx={CX} cy={CY} r={YUGA_R_ARROW} fill="none" stroke="#2C1810" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />
                  
                  {/* Ascending Cycle Label & Arrow */}
                  <path
                    d={`M ${CX - 130} ${CY + 80} A ${YUGA_R_ARROW} ${YUGA_R_ARROW} 0 0 1 ${CX - 50} ${CY - 145}`}
                    fill="none"
                    stroke="#2C1810"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowHead)"
                  />
                  <text
                    x={CX - 85}
                    y={CY - 100}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight="bold"
                    fill="#2C1810"
                    className="font-serif select-none pointer-events-none"
                  >
                    Ascending
                  </text>
                  <text
                    x={CX - 85}
                    y={CY - 82}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight="bold"
                    fill="#2C1810"
                    className="font-serif select-none pointer-events-none"
                  >
                    Cycle
                  </text>

                  {/* Descending Cycle Label & Arrow */}
                  <path
                    d={`M ${CX + 50} ${CY - 145} A ${YUGA_R_ARROW} ${YUGA_R_ARROW} 0 0 1 ${CX + 130} ${CY + 80}`}
                    fill="none"
                    stroke="#2C1810"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowHead)"
                  />
                  <text
                    x={CX + 85}
                    y={CY + 85}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight="bold"
                    fill="#2C1810"
                    className="font-serif select-none pointer-events-none"
                  >
                    Descending
                  </text>
                  <text
                    x={CX + 85}
                    y={CY + 103}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight="bold"
                    fill="#2C1810"
                    className="font-serif select-none pointer-events-none"
                  >
                    Cycle
                  </text>

                  {/* 2025-2026 CE Live Needle Pointer at the bottom */}
                  {(() => {
                    const ekpyrosisRad = (90 * Math.PI) / 180;
                    const xPoint = CX + YUGA_R_OUTER * Math.cos(ekpyrosisRad);
                    const yPoint = CY + YUGA_R_OUTER * Math.sin(ekpyrosisRad);

                    return (
                      <g className="pointer-events-none">
                        <circle
                          cx={xPoint}
                          cy={yPoint}
                          r={18}
                          fill="url(#currentTimeAura)"
                          className="animate-ping"
                        />
                        <circle
                          cx={xPoint}
                          cy={yPoint}
                          r={10}
                          fill="#E53935"
                          stroke="#FFE082"
                          strokeWidth="2.5"
                        />
                        <line
                          x1={xPoint}
                          y1={yPoint + 35}
                          x2={xPoint}
                          y2={yPoint + 12}
                          stroke="#E53935"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })()}

                  {/* Center Circle with "Yuga Cycle 25,800 Years" */}
                  <circle cx={CX} cy={CY} r={YUGA_R_HUB} fill="url(#hubGradient)" stroke="#3E1004" strokeWidth="3" />
                  <text
                    x={CX}
                    y={CY - 16}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={22}
                    fontWeight="900"
                    fill="#2A0800"
                    className="font-serif select-none pointer-events-none tracking-wide"
                  >
                    Yuga Cycle
                  </text>
                  <text
                    x={CX}
                    y={CY + 14}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={18}
                    fontWeight="900"
                    fill="#7B1113"
                    className="font-sans select-none pointer-events-none font-mono"
                  >
                    25,800 Years
                  </text>
                  <text
                    x={CX}
                    y={CY + 36}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={10}
                    fontWeight="bold"
                    fill="#3E2723"
                    className="font-telugu-serif select-none pointer-events-none"
                  >
                    {isEn ? 'Precession of Equinoxes' : 'అయనాంశ మహా కాలచక్రం'}
                  </text>
                </g>
              )}

              {/* ------------------------------------------------------------ */}
              {/* MODE B: 24 HISTORICAL EMPIRES OF BHARAT                      */}
              {/* ------------------------------------------------------------ */}
              {displayMode === 'historical_empires' && (
                <g id="historical-empires-layer">
                  <circle cx={CX} cy={CY} r={R_OUTER_RIM} fill="#2A0800" stroke="#D4AF37" strokeWidth="4" />
                  <circle cx={CX} cy={CY} r={R_DEGREE_TICKS} fill="#3E1004" stroke="#D4AF37" strokeWidth="2" />

                  {Array.from({ length: 72 }).map((_, i) => {
                    const tickAngle = (i * 5) * (Math.PI / 180);
                    const isMajor = i % 3 === 0;
                    const r1 = R_DEGREE_TICKS;
                    const r2 = isMajor ? R_DEGREE_TICKS - 14 : R_DEGREE_TICKS - 7;
                    return (
                      <line
                        key={`tick-${i}`}
                        x1={CX + r1 * Math.cos(tickAngle)}
                        y1={CY + r1 * Math.sin(tickAngle)}
                        x2={CX + r2 * Math.cos(tickAngle)}
                        y2={CY + r2 * Math.sin(tickAngle)}
                        stroke={isMajor ? '#FFE082' : '#D4AF37'}
                        strokeWidth={isMajor ? 2.5 : 1}
                        opacity={isMajor ? 0.9 : 0.4}
                      />
                    );
                  })}

                  {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                    const isSelected = event.id === selectedEventId;
                    const isCurr = event.isCurrentTime;
                    const path = getHistoricalSectorPath(index);

                    return (
                      <g key={`sector-g-${event.id}`} className="cursor-pointer" onClick={() => handleSelectHistoricalEvent(event)}>
                        <path
                          d={path}
                          fill={
                            isSelected 
                              ? (isCurr ? '#006064' : '#7B1113') 
                              : (isCurr ? '#004D40' : (index % 2 === 0 ? '#FFFDF8' : '#F7F0E3'))
                          }
                          stroke={
                            isSelected 
                              ? (isCurr ? '#00E5FF' : '#FFD54F') 
                              : (isCurr ? '#26A69A' : '#E8DCC4')
                          }
                          strokeWidth={isSelected ? 4 : (isCurr ? 2.5 : 1)}
                          className="transition-all duration-300 hover:fill-amber-100/80"
                        />
                      </g>
                    );
                  })}

                  {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                    const angle = (index * ANGLE_STEP) * (Math.PI / 180);
                    const isSelected = event.id === selectedEventId;
                    const isCurr = event.isCurrentTime;

                    return (
                      <line
                        key={`spoke-line-${event.id}`}
                        x1={CX + R_HUB_OUTER * Math.cos(angle)}
                        y1={CY + R_HUB_OUTER * Math.sin(angle)}
                        x2={CX + (R_SECTORS_OUTER - 5) * Math.cos(angle)}
                        y2={CY + (R_SECTORS_OUTER - 5) * Math.sin(angle)}
                        stroke={isSelected ? (isCurr ? '#00E5FF' : '#FFD54F') : (isCurr ? '#00BCD4' : '#D4AF37')}
                        strokeWidth={isSelected ? 3.5 : (isCurr ? 2.5 : 1.5)}
                        className="pointer-events-none"
                      />
                    );
                  })}

                  {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                    const angle = (index * ANGLE_STEP) * (Math.PI / 180);
                    const xNode = CX + R_NODES * Math.cos(angle);
                    const yNode = CY + R_NODES * Math.sin(angle);
                    const isSelected = event.id === selectedEventId;
                    const isCurr = event.isCurrentTime;

                    return (
                      <g key={`node-${event.id}`} className="cursor-pointer group" onClick={() => handleSelectHistoricalEvent(event)}>
                        {isCurr && (
                          <circle cx={xNode} cy={yNode} r={36} fill="url(#currentTimeAura)" className="animate-ping" />
                        )}
                        <circle
                          cx={xNode}
                          cy={yNode}
                          r={isCurr ? 24 : 20}
                          fill={isSelected ? (isCurr ? '#00838F' : '#7B1113') : (isCurr ? '#006064' : '#FAF7F0')}
                          stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#D4AF37')}
                          strokeWidth={isSelected ? 3 : (isCurr ? 2.5 : 1.5)}
                        />
                        <text x={xNode} y={yNode - 2} textAnchor="middle" dominantBaseline="central" fontSize={isCurr ? 15 : 12}>
                          {event.icon}
                        </text>
                        <text x={xNode} y={yNode + 11} textAnchor="middle" dominantBaseline="central" fontSize={8} fontWeight="bold" fill={isSelected || isCurr ? '#FFE082' : '#5D4037'} className="font-mono">
                          {event.order}
                        </text>
                      </g>
                    );
                  })}

                  <circle cx={CX} cy={CY} r={R_HUB_OUTER} fill="url(#chakraGoldGradient)" stroke="#FFE082" strokeWidth="3" />
                  <circle cx={CX} cy={CY} r={R_HUB_MID} fill="#3E1004" stroke="#D4AF37" strokeWidth="2" />
                  <circle cx={CX} cy={CY} r={R_HUB_INNER} fill="url(#hubGradient)" stroke="#3E1004" strokeWidth="2.5" />
                  <text x={CX} y={CY - 16} textAnchor="middle" dominantBaseline="central" fontSize={32}>
                    {currentEvent.icon}
                  </text>
                  <text x={CX} y={CY + 18} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="900" fill="#2A0800" className="font-mono">
                    {isEn ? `SPOKE ${currentEvent.order} OF 24` : `ఆకు ${currentEvent.order} / 24`}
                  </text>
                  <text x={CX} y={CY + 34} textAnchor="middle" dominantBaseline="central" fontSize={9} fontWeight="bold" fill={currentEvent.isCurrentTime ? '#006064' : '#7B1113'}>
                    {currentEvent.isCurrentTime ? 'LIVE • 2026' : 'కాలచక్రం'}
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="w-full max-w-[620px] mt-4 flex items-center justify-between text-xs text-[#5D4037] px-2">
            <span className="flex items-center gap-1 font-medium">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              {displayMode === 'yuga_25800' 
                ? (isEn ? 'Click any Yuga segment to view duration & turning points' : 'వివరాలు వీక్షించడానికి ఏ యుగ భాగాన్నైనా క్లిక్ చేయండి') 
                : (isEn ? '24 spokes represent 24 cosmic hours of history' : '24 ఆకులు బ్రహ్మాండ కాలచక్ర పరిభ్రమణాన్ని సూచిస్తాయి')}
            </span>
            <button
              onClick={() => setRotationAngle(0)}
              className="hover:text-[#7B1113] hover:underline cursor-pointer font-bold text-[11px]"
            >
              {isEn ? 'Reset Position' : 'యథాస్థితికి తీసుకురా'}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: DETAILED DOSSIER CARD                          */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-4">
          
          {/* DOSSIER FOR 25,800-YEAR YUGA CYCLE */}
          {displayMode === 'yuga_25800' ? (
            <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-300">
              
              <div 
                className="p-5 sm:p-6 text-white relative overflow-hidden"
                style={{
                  background: currentYuga.category === 'kataklysmos'
                    ? 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #1565C0 100%)'
                    : currentYuga.category === 'ekpyrosis'
                      ? 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #880E4F 100%)'
                      : currentYuga.category === 'satya'
                        ? 'linear-gradient(135deg, #F57F17 0%, #FBC02D 50%, #E65100 100%)'
                        : currentYuga.category === 'treta'
                          ? 'linear-gradient(135deg, #E65100 0%, #FB8C00 50%, #BF360C 100%)'
                          : currentYuga.category === 'dwapara'
                            ? 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #33691E 100%)'
                            : 'linear-gradient(135deg, #311B92 0%, #4A148C 50%, #1A237E 100%)'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[#FFE082] text-xs font-mono font-bold">
                        {isEn ? `Segment #${currentYuga.order}` : `యుగ భాగం #${currentYuga.order}`}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-white text-xs font-bold border border-white/20">
                        {isEn ? currentYuga.cycleNameEn : currentYuga.cycleNameTe}
                      </span>
                    </div>

                    {currentYuga.isCurrentTime ? (
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-cyan-950 text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-cyan-950" />
                        {isEn ? 'LIVE PRESENT AGE (2025–3225 CE)' : 'ప్రస్తుత సమయ యుగం (2025-3225)'}
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-300/40 font-mono">
                        {isEn ? currentYuga.durationLabelEn : currentYuga.durationLabelTe}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mt-3">
                    <span className="text-4xl p-2 rounded-2xl bg-black/30 border border-white/20 shadow-md">
                      {currentYuga.category === 'kataklysmos' ? '🌊' : currentYuga.category === 'ekpyrosis' ? '🔥' : '⏳'}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#FFE082] leading-tight">
                        {isEn ? currentYuga.nameEn : currentYuga.nameTe}
                      </h2>
                      <div className="text-sm font-semibold text-white/90 mt-0.5 font-mono">
                        {isEn ? currentYuga.datesEn : currentYuga.datesTe}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Live Real-Time Box if Ekpyrosis */}
              {currentYuga.isCurrentTime && (
                <div className="mx-4 sm:mx-6 mt-4 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-rose-950 to-red-900 text-white border-2 border-red-400 shadow-md">
                  <div className="flex items-center justify-between gap-3 flex-wrap border-b border-red-400/30 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <div className="text-xs uppercase font-black text-amber-300 tracking-wider">
                          {isEn ? 'Great Epochal Turning Point (2025 CE)' : 'మహా యుగ పరివర్తన సంధి (2025 CE)'}
                        </div>
                        <div className="text-sm font-bold text-white">
                          {isEn ? 'Descending Kali ends ➔ Ascending Cycle Awakens' : 'అవరోహణ కలి ముగిసి ఆరోహణ యుగ ద్వారం తెరుచుకుంటోంది'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-black text-amber-300">
                        {formattedTime}
                      </div>
                      <div className="text-[11px] text-amber-200">
                        {formattedDate}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-white/95 leading-relaxed">
                    {isEn 
                      ? 'According to the 25,800-year precessional cycle, humanity reached the absolute bottom (nadir) in 2025 CE. We are currently living in 2026 CE at the dawn of the 1,200-year Ekpyrosis transition into ascending Dwapara!'
                      : '25,800 సంవత్సరాల అయనాంశ చక్రం ప్రకారం, 2025 క్రీ.శ. నాటికి మానవాళి అవరోహణ పాతాళ బిందువును చేరింది. నేడు 2026 క్రీ.శ.లో మనం 1,200 ఏళ్ళ ఎక్పైరోసిస్ అగ్ని పరివర్తన కాలంలోకి ప్రవేశించి ఆరోహణ యుగం వైపు అడుగులేస్తున్నాం!'}
                  </p>
                </div>
              )}

              {/* Body Content */}
              <div className="p-5 sm:p-6 space-y-4 text-stone-800">
                <div className="space-y-1">
                  <div className="text-xs font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? 'Description & Temporal Dynamics' : 'యుగ లక్షణాలు & కాల వికాసం'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3 rounded-xl border border-[#E8DCC4]">
                    {isEn ? currentYuga.descriptionEn : currentYuga.descriptionTe}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-black uppercase text-[#1565C0] tracking-wide flex items-center gap-1.5">
                    <Orbit className="w-4 h-4 text-[#1E88E5]" />
                    <span>{isEn ? 'Cosmic & Spiritual Significance' : 'బ్రహ్మాండ తాత్విక ప్రాధాన్యత'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A237E] leading-relaxed font-medium bg-blue-50/60 p-3 rounded-xl border border-blue-200">
                    {isEn ? currentYuga.cosmicSignificanceEn : currentYuga.cosmicSignificanceTe}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-black uppercase text-[#2E7D32] tracking-wide flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-[#43A047]" />
                    <span>{isEn ? 'Historical & Archeological Parallels' : 'చారిత్రక & పురావస్తు ఆధారాలు'}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-[13px]">
                    {(isEn ? currentYuga.historicalParallelsEn : currentYuga.historicalParallelsTe).map((par, i) => (
                      <li key={i} className="flex items-start gap-2 bg-[#FAF7F0] p-2 rounded-xl border border-[#E8DCC4]">
                        <span className="text-[#D84315] font-bold">•</span>
                        <span>{par}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reference Master Poster Thumbnail */}
                <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="./images/indian_history/yuga_cycle_25800.jpg"
                      alt="Yuga Cycle 25800 Years Chart"
                      className="w-14 h-14 rounded-xl object-cover border border-[#D4AF37] shadow-xs cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
                    />
                    <div>
                      <div className="text-xs font-bold text-[#7B1113]">
                        {isEn ? 'Original Uploaded Master Chart' : 'మూల యుగచక్ర ఇన్ఫోగ్రాఫిక్'}
                      </div>
                      <button
                        onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
                        className="text-[11px] text-[#D84315] hover:underline font-semibold flex items-center gap-0.5 cursor-pointer mt-0.5"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>{isEn ? 'Click to View Full Poster' : 'పూర్తి పటం చూడండి (Zoom)'}</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setDisplayMode('historical_empires')}
                    className="px-3 py-1.5 rounded-xl bg-[#FFFDF7] hover:bg-[#FFF3E0] text-[#7B1113] border border-[#D4AF37] text-xs font-bold transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isEn ? 'View Dynasties Chakra' : 'సామ్రాజ్యాల చక్రం చూడండి'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* DOSSIER FOR 24 HISTORICAL EMPIRES */
            <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-300">
              
              <div 
                className="p-5 sm:p-6 text-white relative overflow-hidden"
                style={{
                  background: currentEvent.isCurrentTime 
                    ? 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #006064 100%)'
                    : `linear-gradient(135deg, #3E1004 0%, ${currentEvent.color} 60%, #1A0500 100%)`
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[#FFE082] text-xs font-mono font-bold">
                        {isEn ? `Spoke #${currentEvent.spokeNumber}` : `కాలచక్ర ఆకు #${currentEvent.spokeNumber}`}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-white text-xs font-bold border border-white/20">
                        {isEn ? currentEvent.categoryEn : currentEvent.categoryTe}
                      </span>
                    </div>

                    {currentEvent.isCurrentTime && (
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-cyan-950 text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-cyan-950" />
                        {isEn ? 'CURRENT TIME MARKER' : 'ప్రస్తుత సమయ సూచిక'}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mt-3">
                    <span className="text-4xl p-2 rounded-2xl bg-black/30 border border-white/20 shadow-md">
                      {currentEvent.icon}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#FFE082] leading-tight">
                        {isEn ? currentEvent.titleEn : currentEvent.titleTe}
                      </h2>
                      <div className="text-sm font-semibold text-white/90 mt-0.5">
                        {isEn ? currentEvent.titleTe : currentEvent.titleEn}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3.5 inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-mono font-bold text-amber-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isEn ? currentEvent.periodEn : currentEvent.periodTe}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4 text-stone-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                    <Crown className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? 'Prominent Rulers & Personalities' : 'ప్రముఖ చక్రవర్తులు & పాలకులు'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(isEn ? currentEvent.rulersEn : currentEvent.rulersTe).map((r, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs font-bold border border-[#D4AF37]/50">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                    <MapPin className="w-4 h-4 text-[#C99700]" />
                    <span>{isEn ? 'Capitals & Geography' : 'రాజధానులు & చారిత్రక ప్రాంతాలు'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(isEn ? currentEvent.capitalsEn : currentEvent.capitalsTe).map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-xl bg-[#FAF7F0] text-[#5D4037] text-xs font-semibold border border-[#E8DCC4]">
                        🏛️ {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                    <Sparkles className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? 'Pivotal Milestones' : 'కీలక మైలురాళ్ళు & పరిణామాలు'}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-[13px]">
                    {(isEn ? currentEvent.keyEventsEn : currentEvent.keyEventsTe).map((ev, i) => (
                      <li key={i} className="flex items-start gap-2 bg-[#FFFDF8] p-2 rounded-xl border border-[#E8DCC4]">
                        <span className="text-[#D84315] font-bold">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1">
                  <div className="text-[11px] font-black uppercase text-[#7B1113] flex items-center gap-1">
                    <span>⚡</span>
                    <span>{isEn ? 'What Changed in Indian History?' : 'చరిత్రలో వచ్చిన కీలక మార్పు:'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4E342E] font-medium leading-relaxed">
                    {isEn ? currentEvent.whatChangedEn : currentEvent.whatChangedTe}
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. BOTTOM QUICK TIMELINE STRIP FOR ALL 16 YUGA SEGMENTS     */}
      {/* ============================================================ */}
      {displayMode === 'yuga_25800' && (
        <div className="bg-[#FFFDF7] border-t-2 border-[#D4AF37] p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌌</span>
              <h3 className="text-sm sm:text-base font-black font-telugu-serif text-[#7B1113]">
                {isEn ? '25,800-Year Yuga Cycle Segments (Clockwise from Kataklysmos)' : '25,800 ఏళ్ల యుగచక్ర విభాగాలు (కటాక్లిస్మోస్ నుండి సవ్యదిశలో)'}
              </h3>
            </div>
            <span className="text-xs text-[#8D6E63] font-medium hidden sm:inline">
              {isEn ? 'Click any segment to center on Chakra' : 'చక్రంపై పరిశీలించడానికి ఏ విభాగాన్నైనా తాకండి'}
            </span>
          </div>

          <div className="flex items-stretch gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin">
            {YUGA_CYCLE_25800_SEGMENTS.map(seg => {
              const isSelected = seg.id === selectedYugaId;
              const isCurr = seg.isCurrentTime;

              return (
                <div
                  key={`yuga-strip-${seg.id}`}
                  onClick={() => handleSelectYugaSegment(seg)}
                  className={`min-w-[160px] max-w-[170px] p-2.5 rounded-2xl border transition-all cursor-pointer shrink-0 flex flex-col justify-between ${
                    isSelected
                      ? (isCurr
                          ? 'bg-red-900 text-amber-100 border-red-400 ring-2 ring-amber-300 shadow-md scale-102'
                          : 'bg-[#7B1113] text-[#FFE082] border-[#FFD54F] ring-2 ring-[#FFD54F] shadow-md scale-102')
                      : (isCurr
                          ? 'bg-red-50 text-red-950 border-red-400 hover:bg-red-100'
                          : 'bg-white text-stone-800 border-[#E8DCC4] hover:bg-[#FFF9EE]')
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-sm">
                        {seg.category === 'kataklysmos' ? '🌊' : seg.category === 'ekpyrosis' ? '🔥' : '⏳'}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md bg-black/10">
                        {seg.durationLabelEn}
                      </span>
                    </div>

                    <div className="text-xs font-bold font-telugu-serif line-clamp-2 leading-tight">
                      {isEn ? seg.nameEn : seg.nameTe}
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] font-mono font-semibold pt-1 border-t border-stone-200">
                    {isEn ? seg.datesEn : seg.datesTe}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. LIGHTBOX MODAL FOR SOURCE POSTER                          */}
      {/* ============================================================ */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[92vh] bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl p-2" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-2 text-white border-b border-stone-700 mb-2">
              <span className="text-sm font-bold text-[#FFE082] flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4" />
                {isEn ? 'Master Reference: Yuga Cycle 25,800 Years' : 'మూల పటం: 25,800 ఏళ్ల యుగచక్రం (Ascending & Descending)'}
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-red-700 transition-colors font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <img
              src={previewImage}
              alt="Yuga Cycle 25800 Years Chart"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
