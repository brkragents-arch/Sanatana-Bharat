import React, { useState, useEffect, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  INDIAN_HISTORY_CHAKRA_EVENTS, 
  CHAKRA_CATEGORIES, 
  type ChakraTimeEvent 
} from '../../data/indianHistoryChakraData';
import { 
  Compass, 
  Play, 
  Pause, 
  RotateCw, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Crown, 
  Sparkles, 
  BookOpen, 
  Landmark, 
  ExternalLink, 
  Target, 
  ChevronRight, 
  Info 
} from 'lucide-react';

export const IndianHistoryChakraView: React.FC = () => {
  const { language, setViewMode } = useMythology();
  const isEn = language === 'en';

  // Selected time event (defaults to spoke 24: Current Time or spoke 7: Maurya)
  const [selectedEventId, setSelectedEventId] = useState<string>('current_time_bharat');
  
  // Category filter and search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Chakra rotation angle (in degrees)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Auto Tour mode (automatically rotates through history epochs)
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
      // Gentle temple bell harmonic
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
      setSelectedEventId(prevId => {
        const currentIndex = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(e => e.id === prevId);
        const nextIndex = (currentIndex + 1) % INDIAN_HISTORY_CHAKRA_EVENTS.length;
        const nextEvent = INDIAN_HISTORY_CHAKRA_EVENTS[nextIndex];
        
        // Gentle chime for each epoch step
        playChime(nextEvent.isCurrentTime ? 880 : 440 + nextIndex * 15);
        return nextEvent.id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isTourActive, isAudioEnabled]);

  // Find currently selected event object
  const currentEvent: ChakraTimeEvent = useMemo(() => {
    const found = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.id === selectedEventId);
    return found || INDIAN_HISTORY_CHAKRA_EVENTS[INDIAN_HISTORY_CHAKRA_EVENTS.length - 1];
  }, [selectedEventId]);

  // Filtered events based on search or category
  const filteredEvents = useMemo(() => {
    return INDIAN_HISTORY_CHAKRA_EVENTS.filter(event => {
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = event.titleTe.toLowerCase().includes(q) || event.titleEn.toLowerCase().includes(q);
      const inPeriod = event.periodTe.toLowerCase().includes(q) || event.periodEn.toLowerCase().includes(q);
      const inRulers = event.rulersTe.some(r => r.toLowerCase().includes(q)) || event.rulersEn.some(r => r.toLowerCase().includes(q));
      const inCapitals = event.capitalsTe.some(c => c.toLowerCase().includes(q)) || event.capitalsEn.some(c => c.toLowerCase().includes(q));
      const inEvents = event.keyEventsTe.some(k => k.toLowerCase().includes(q)) || event.keyEventsEn.some(k => k.toLowerCase().includes(q));
      return inTitle || inPeriod || inRulers || inCapitals || inEvents;
    });
  }, [selectedCategory, searchQuery]);

  // Select event handler
  const handleSelectEvent = (event: ChakraTimeEvent) => {
    setSelectedEventId(event.id);
    playChime(event.isCurrentTime ? 880 : 528);
  };

  // Jump to Current Time
  const handleJumpToCurrentTime = () => {
    const currentTimeEvent = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.isCurrentTime);
    if (currentTimeEvent) {
      setSelectedEventId(currentTimeEvent.id);
      playChime(880);
    }
  };

  // Next / Previous Navigation
  const handleStep = (direction: 'next' | 'prev') => {
    const currentIndex = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(e => e.id === selectedEventId);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = INDIAN_HISTORY_CHAKRA_EVENTS.length - 1;
    if (nextIndex >= INDIAN_HISTORY_CHAKRA_EVENTS.length) nextIndex = 0;
    const nextEvent = INDIAN_HISTORY_CHAKRA_EVENTS[nextIndex];
    setSelectedEventId(nextEvent.id);
    playChime(nextEvent.isCurrentTime ? 880 : 528);
  };

  // Geometry Constants for the Chakra Wheel
  const CX = 450;
  const CY = 450;
  const R_OUTER_RIM = 425;
  const R_DEGREE_TICKS = 405;
  const R_SECTORS_OUTER = 385;
  const R_NODES = 330;
  const R_SECTORS_INNER = 160;
  const R_HUB_OUTER = 145;
  const R_HUB_MID = 110;
  const R_HUB_INNER = 75;

  const TOTAL_SPOKES = 24;
  const ANGLE_STEP = 360 / TOTAL_SPOKES; // 15 degrees per spoke

  // Generate SVG path for a circular sector wedge
  const getSectorPath = (index: number) => {
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

  // Formatted date & time strings for Current Time
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
        {/* Subtle background glow effect */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#FFD54F] to-[#FFF8E1] p-0.5 shadow-xl shrink-0 flex items-center justify-center border border-[#FFE082]">
              <div className="w-full h-full rounded-2xl bg-[#3E1004] flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                🎡
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#2A0800] text-xs font-black uppercase tracking-wider shadow-sm">
                  {isEn ? 'Interactive Circular Timeline' : 'సశరీర చారిత్రక కాలచక్ర దర్శిని'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#FFE082] text-xs font-bold border border-[#D4AF37]/50">
                  {isEn ? '24 Spokes • 5,000+ Years to 2026 CE' : '24 ఆకుల చక్రం • ప్రాచీనం నుండి నేటి వరకు'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/50 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isEn ? 'LIVE: 2026 CE Marked' : 'వర్తమానం: 2026 గుర్తించబడింది'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFE082] font-telugu-serif tracking-tight mt-1.5 drop-shadow-sm">
                {isEn 
                  ? 'Indian History: Chronological Flow & Great Empires — Time Chakra' 
                  : 'భారతీయ చరిత్ర: కాలానుక్రమణిక మరియు మహా సామ్రాజ్యాలు — కాలచక్రం'}
              </h1>
              <p className="text-xs sm:text-sm text-[#FFECE4] mt-1.5 max-w-3xl leading-relaxed">
                {isEn 
                  ? 'Click anywhere on the sacred 24-spoked Dharma Chakra to explore pivotal epochs, legendary dynasties, and turning points of Bharat. The glowing beacon marks the present time (2026 CE / Kaliyuga 5127).'
                  : '24 ఆకుల పవిత్ర కాలచక్రంపై ఏ బిందువును తాకినా ఆ కాలపు సమగ్ర చరిత్ర, సామ్రాజ్యాలు, చక్రవర్తులు, విశేషాలు ప్రత్యక్షమవుతాయి. ప్రకాశించే పల్సింగ్ సూచిక నేటి వర్తమాన కాలాన్ని (2026 క్రీ.శ. / కలియుగాబ్దం 5127) సూచిస్తుంది.'}
              </p>
            </div>
          </div>

          {/* Current Live Time Badge in Top Right */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF37]/50 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFE082]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{isEn ? 'Present Live Clock (IST)' : 'ప్రత్యక్ష వర్తమాన కాలం (భారత కాలమానం)'}</span>
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
              title={isEn ? 'Jump needle to current time on chakra' : 'కాలచక్రంపై నేటి వర్తమాన సమయానికి వెళ్ళు'}
            >
              <Target className="w-3.5 h-3.5 text-cyan-200" />
              <span>{isEn ? 'Jump to Current Time (2026)' : 'ప్రస్తుత సమయానికి వెళ్ళు (2026)'}</span>
            </button>
          </div>
        </div>

        {/* Quick Toolbar below header */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Audio & Tour Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsTourActive(!isTourActive)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                isTourActive 
                  ? 'bg-amber-400 text-red-950 ring-2 ring-white animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40'
              }`}
            >
              {isTourActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTourActive ? (isEn ? 'Pause Tour' : 'యాత్రను ఆపు') : (isEn ? 'Auto Tour (360°)' : 'కాలభ్రమణ యాత్ర (ఆటో)')}</span>
            </button>

            <button
              onClick={() => handleStep('prev')}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 font-semibold flex items-center gap-1 cursor-pointer transition-all"
              title={isEn ? 'Previous epoch' : 'పూర్వ యుగం'}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEn ? 'Prev' : 'వెనుకకు'}</span>
            </button>

            <button
              onClick={() => handleStep('next')}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 font-semibold flex items-center gap-1 cursor-pointer transition-all"
              title={isEn ? 'Next epoch' : 'తర్వాతి యుగం'}
            >
              <span className="hidden sm:inline">{isEn ? 'Next' : 'ముందుకు'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev + 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Chakra clockwise' : 'చక్రాన్ని సవ్యదిశలో తిప్పు'}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev - 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Chakra anti-clockwise' : 'చక్రాన్ని అపసవ్యదిశలో తిప్పు'}
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
              title={isAudioEnabled ? (isEn ? 'Mute Chimes' : 'గంటల శబ్దం ఆపు') : (isEn ? 'Enable Chimes' : 'గంటల శబ్దం పెట్టు')}
            >
              {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick link to detailed full-page reading */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setViewMode('indian_history');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#FFD54F] hover:from-[#C59B27] hover:to-[#FFCA28] text-[#2A0800] font-black shadow-sm flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEn ? 'View Detailed Articles & Maps' : 'సమగ్ర వ్యాసాల పేజీకి వెళ్ళు (Indian History)'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. CATEGORY FILTERS & SEARCH BAR                             */}
      {/* ============================================================ */}
      <div className="bg-[#FFFDF7] px-4 sm:px-6 py-3 border-b border-[#E8DCC4] flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
        {/* Categories Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
          {CHAKRA_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
              }`}
            >
              {isEn ? cat.labelEn : cat.labelTe}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative shrink-0 w-full md:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8D6E63]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={isEn ? 'Search dynasty, ruler, year...' : 'యుగం, చక్రవర్తి, సంవత్సరం శోధించండి...'}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white border border-[#D4AF37]/60 focus:outline-hidden focus:ring-2 focus:ring-[#7B1113] text-[#2C1810] placeholder-[#8D6E63]"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MAIN WORKSPACE: CIRCULAR CHAKRA + EVENT DETAILS PANEL      */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE CLICKABLE CIRCULAR CHAKRA (SVG CANVAS)      */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center">
          
          <div className="w-full max-w-[620px] aspect-square relative select-none flex items-center justify-center p-2 sm:p-4 rounded-3xl bg-radial from-[#FFFDF8] via-[#FFF9EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-xl">
            
            {/* Live Current Time Floating Radar Indicator Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-cyan-950/90 text-cyan-200 border border-cyan-400/60 px-3 py-1 rounded-full shadow-md text-[11px] font-bold backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{isEn ? 'Spoke #24 = Current Time 2026' : 'ఆకు #24 = ప్రస్తుత సమయం 2026'}</span>
            </div>

            {/* Instruction tooltip in top right */}
            <div className="absolute top-3 right-3 z-20 hidden sm:flex items-center gap-1 bg-[#7B1113]/85 text-[#FFE082] px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-xs">
              <Info className="w-3 h-3 text-[#FFD54F]" />
              <span>{isEn ? 'Click any point or spoke' : 'ఏ బిందువునైనా క్లిక్ చేయండి'}</span>
            </div>

            {/* THE MASTER INTERACTIVE SVG CHAKRA */}
            <svg
              viewBox="0 0 900 900"
              className="w-full h-full drop-shadow-2xl transition-transform duration-700 ease-out"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transformOrigin: `${CX}px ${CY}px`
              }}
            >
              <defs>
                {/* Golden Radial Gradient for Chakra Rims */}
                <radialGradient id="chakraGoldGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF8E1" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#7B1113" />
                </radialGradient>

                {/* Hub Metallic Gradient */}
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="50%" stopColor="#FFD54F" />
                  <stop offset="85%" stopColor="#C59B27" />
                  <stop offset="100%" stopColor="#3E1004" />
                </radialGradient>

                {/* Active Pulsing Cyan for Current Time */}
                <radialGradient id="currentTimeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#00838F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#006064" stopOpacity="0" />
                </radialGradient>

                {/* Filter for glowing dropshadow */}
                <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. OUTER DECORATIVE GEOMETRY RIMS */}
              <circle cx={CX} cy={CY} r={R_OUTER_RIM} fill="#2A0800" stroke="#D4AF37" strokeWidth="4" />
              <circle cx={CX} cy={CY} r={R_OUTER_RIM - 8} fill="none" stroke="#FFE082" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <circle cx={CX} cy={CY} r={R_DEGREE_TICKS} fill="#3E1004" stroke="#D4AF37" strokeWidth="2" />

              {/* Outer Rim 72 Ornamental Tick Marks */}
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

              {/* 2. THE 24 SECTOR WEDGES (BACKGROUND SLICES) */}
              {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                const isSelected = event.id === selectedEventId;
                const isCurr = event.isCurrentTime;
                const path = getSectorPath(index);

                return (
                  <g key={`sector-g-${event.id}`} className="cursor-pointer" onClick={() => handleSelectEvent(event)}>
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
                      opacity={isSelected ? 1 : (isCurr ? 0.95 : 0.85)}
                    />
                  </g>
                );
              })}

              {/* 3. INNER SPOKE LINES RADIATING FROM HUB TO NODES */}
              {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                const angle = (index * ANGLE_STEP) * (Math.PI / 180);
                const isSelected = event.id === selectedEventId;
                const isCurr = event.isCurrentTime;

                const xInner = CX + R_HUB_OUTER * Math.cos(angle);
                const yInner = CY + R_HUB_OUTER * Math.sin(angle);
                const xOuter = CX + (R_SECTORS_OUTER - 5) * Math.cos(angle);
                const yOuter = CY + (R_SECTORS_OUTER - 5) * Math.sin(angle);

                return (
                  <line
                    key={`spoke-line-${event.id}`}
                    x1={xInner}
                    y1={yInner}
                    x2={xOuter}
                    y2={yOuter}
                    stroke={
                      isSelected 
                        ? (isCurr ? '#00E5FF' : '#FFD54F') 
                        : (isCurr ? '#00BCD4' : '#D4AF37')
                    }
                    strokeWidth={isSelected ? 3.5 : (isCurr ? 2.5 : 1.5)}
                    strokeDasharray={isCurr ? 'none' : 'none'}
                    className="pointer-events-none transition-all"
                  />
                );
              })}

              {/* 4. THE 24 SPOKE NODES (CLICKABLE CIRCLES ALONG THE CHAKRA) */}
              {INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
                const angle = (index * ANGLE_STEP) * (Math.PI / 180);
                const xNode = CX + R_NODES * Math.cos(angle);
                const yNode = CY + R_NODES * Math.sin(angle);
                const isSelected = event.id === selectedEventId;
                const isCurr = event.isCurrentTime;

                return (
                  <g
                    key={`node-${event.id}`}
                    className="cursor-pointer group"
                    onClick={() => handleSelectEvent(event)}
                  >
                    {/* Pulsing Beacon Rings on Current Time (Spoke 24) */}
                    {isCurr && (
                      <>
                        <circle
                          cx={xNode}
                          cy={yNode}
                          r={38}
                          fill="url(#currentTimeAura)"
                          className="animate-ping"
                          style={{ transformOrigin: `${xNode}px ${yNode}px` }}
                        />
                        <circle
                          cx={xNode}
                          cy={yNode}
                          r={32}
                          fill="none"
                          stroke="#00E5FF"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="animate-spin"
                          style={{ transformOrigin: `${xNode}px ${yNode}px`, animationDuration: '6s' }}
                        />
                      </>
                    )}

                    {/* Active Selection Glow Ring */}
                    {isSelected && (
                      <circle
                        cx={xNode}
                        cy={yNode}
                        r={isCurr ? 30 : 27}
                        fill="none"
                        stroke={isCurr ? '#00E5FF' : '#FFD54F'}
                        strokeWidth="4"
                        filter="url(#glowFilter)"
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      cx={xNode}
                      cy={yNode}
                      r={isCurr ? 24 : 20}
                      fill={
                        isSelected 
                          ? (isCurr ? '#00838F' : '#7B1113') 
                          : (isCurr ? '#006064' : '#FAF7F0')
                      }
                      stroke={
                        isSelected 
                          ? '#FFE082' 
                          : (isCurr ? '#00E5FF' : '#D4AF37')
                      }
                      strokeWidth={isSelected ? 3 : (isCurr ? 2.5 : 1.5)}
                      className="transition-transform duration-300 group-hover:scale-115"
                    />

                    {/* Node Emoji Icon */}
                    <text
                      x={xNode}
                      y={yNode - 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isCurr ? 15 : 12}
                      className="pointer-events-none select-none"
                    >
                      {event.icon}
                    </text>

                    {/* Spoke Order Number Badge */}
                    <text
                      x={xNode}
                      y={yNode + 11}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={8}
                      fontWeight="bold"
                      fill={isSelected || isCurr ? '#FFE082' : '#5D4037'}
                      className="pointer-events-none select-none font-mono"
                    >
                      {event.order}
                    </text>

                    {/* Label along the spoke edge */}
                    <text
                      x={CX + (R_SECTORS_OUTER - 18) * Math.cos(angle)}
                      y={CY + (R_SECTORS_OUTER - 18) * Math.sin(angle)}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isCurr ? 9 : 7.5}
                      fontWeight={isSelected || isCurr ? '900' : '600'}
                      fill={
                        isSelected 
                          ? (isCurr ? '#00E5FF' : '#FFD54F') 
                          : (isCurr ? '#80DEEA' : '#4E342E')
                      }
                      className="pointer-events-none select-none font-telugu-serif"
                      transform={`rotate(${index * ANGLE_STEP + (index * ANGLE_STEP > 90 && index * ANGLE_STEP < 270 ? 180 : 0)}, ${CX + (R_SECTORS_OUTER - 18) * Math.cos(angle)}, ${CY + (R_SECTORS_OUTER - 18) * Math.sin(angle)})`}
                    >
                      {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* 5. POINTER NEEDLE FOR CURRENT TIME (PINPOINTING SPOKE 24) */}
              {(() => {
                const currIdx = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(e => e.isCurrentTime);
                if (currIdx === -1) return null;
                const angle = (currIdx * ANGLE_STEP) * (Math.PI / 180);
                const xTip = CX + (R_NODES + 26) * Math.cos(angle);
                const yTip = CY + (R_NODES + 26) * Math.sin(angle);
                const xBase = CX + (R_OUTER_RIM - 5) * Math.cos(angle);
                const yBase = CY + (R_OUTER_RIM - 5) * Math.sin(angle);

                return (
                  <g className="pointer-events-none">
                    {/* Glowing golden-cyan beacon arrow */}
                    <line
                      x1={xBase}
                      y1={yBase}
                      x2={xTip}
                      y2={yTip}
                      stroke="#00E5FF"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`
                        ${xTip},${yTip} 
                        ${xTip + 12 * Math.cos(angle + 2.5)},${yTip + 12 * Math.sin(angle + 2.5)} 
                        ${xTip + 12 * Math.cos(angle - 2.5)},${yTip + 12 * Math.sin(angle - 2.5)}
                      `}
                      fill="#00E5FF"
                    />
                    <circle cx={xBase} cy={yBase} r={5} fill="#00E5FF" />
                  </g>
                );
              })()}

              {/* 6. CENTER HUB (ASHOKA DHARMACHAKRA MOTIF) */}
              <circle cx={CX} cy={CY} r={R_HUB_OUTER} fill="url(#chakraGoldGradient)" stroke="#FFE082" strokeWidth="3" />
              <circle cx={CX} cy={CY} r={R_HUB_MID} fill="#3E1004" stroke="#D4AF37" strokeWidth="2" />
              
              {/* 24 Mini Spokes inside Hub */}
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i * 15) * (Math.PI / 180);
                return (
                  <line
                    key={`hub-mini-spoke-${i}`}
                    x1={CX + R_HUB_INNER * Math.cos(a)}
                    y1={CY + R_HUB_INNER * Math.sin(a)}
                    x2={CX + (R_HUB_MID - 2) * Math.cos(a)}
                    y2={CY + (R_HUB_MID - 2) * Math.sin(a)}
                    stroke="#FFD54F"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                );
              })}

              {/* Center Core Circle with Selected Event Summary Icon */}
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_INNER}
                fill="url(#hubGradient)"
                stroke="#3E1004"
                strokeWidth="2.5"
                className="cursor-pointer"
                onClick={() => setIsTourActive(!isTourActive)}
              />

              {/* Selected Event Icon in the very center */}
              <text
                x={CX}
                y={CY - 16}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={32}
                className="pointer-events-none select-none"
              >
                {currentEvent.icon}
              </text>

              {/* Spoke number label */}
              <text
                x={CX}
                y={CY + 18}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="900"
                fill="#2A0800"
                className="pointer-events-none select-none font-mono"
              >
                {isEn ? `SPOKE ${currentEvent.order} OF 24` : `ఆకు ${currentEvent.order} / 24`}
              </text>

              <text
                x={CX}
                y={CY + 34}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={9}
                fontWeight="bold"
                fill={currentEvent.isCurrentTime ? '#006064' : '#7B1113'}
                className="pointer-events-none select-none font-telugu-serif"
              >
                {currentEvent.isCurrentTime 
                  ? (isEn ? 'LIVE • 2026' : 'ప్రస్తుత సమయం') 
                  : (isEn ? 'Dharma Chakra' : 'కాలచక్రం')}
              </text>
            </svg>
          </div>

          {/* Quick instructions and chakra controls under wheel */}
          <div className="w-full max-w-[620px] mt-4 flex items-center justify-between text-xs text-[#5D4037] px-2">
            <span className="flex items-center gap-1 font-medium">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              {isEn ? '24 spokes represent 24 hours of cosmic time' : '24 ఆకులు బ్రహ్మాండ కాలచక్ర పరిభ్రమణాన్ని సూచిస్తాయి'}
            </span>
            <button
              onClick={() => setRotationAngle(0)}
              className="hover:text-[#7B1113] hover:underline cursor-pointer font-bold text-[11px]"
            >
              {isEn ? 'Reset Wheel Position' : 'యథాస్థితికి తీసుకురా'}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: DETAILED EVENT DOSSIER (CLICKABLE DISPLAY)     */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-4">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-300">
            
            {/* Top Event Banner */}
            <div 
              className="p-5 sm:p-6 text-white relative overflow-hidden"
              style={{
                background: currentEvent.isCurrentTime 
                  ? 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #006064 100%)'
                  : `linear-gradient(135deg, #3E1004 0%, ${currentEvent.color} 60%, #1A0500 100%)`
              }}
            >
              {/* Background accent light */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

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

                  {/* Highlight for Current Time */}
                  {currentEvent.isCurrentTime ? (
                    <span className="px-3 py-1 rounded-full bg-cyan-400 text-cyan-950 text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-cyan-950" />
                      {isEn ? 'CURRENT TIME MARKER' : 'ప్రస్తుత సమయ సూచిక'}
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-300/40">
                      {isEn ? currentEvent.tagEn : currentEvent.tagTe}
                    </span>
                  )}
                </div>

                {/* Title */}
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

                {/* Timeline Range Badge */}
                <div className="mt-3.5 inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-mono font-bold text-amber-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEn ? currentEvent.periodEn : currentEvent.periodTe}</span>
                </div>
              </div>
            </div>

            {/* If Current Time: Special Live Real-time Infographic Box */}
            {currentEvent.isCurrentTime && (
              <div className="mx-4 sm:mx-6 mt-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-900 text-white border-2 border-cyan-400 shadow-md">
                <div className="flex items-center justify-between gap-3 flex-wrap border-b border-cyan-400/30 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-xs uppercase font-black text-cyan-300 tracking-wider">
                        {isEn ? 'Current Temporal Coordinate' : 'ప్రస్తుత కాలమాన కేంద్రం'}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {isEn ? 'You are existing in this time point right now' : 'కాలచక్రంలో నేడు మనం జీవిస్తున్న క్షణం ఇది'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono font-black text-cyan-200">
                      {formattedTime}
                    </div>
                    <div className="text-[11px] text-cyan-300">
                      {formattedDate}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-black/30 border border-cyan-400/30">
                    <span className="font-bold text-cyan-300 block">{isEn ? 'Kaliyuga Elapsed:' : 'కలియుగ సంవత్సరం:'}</span>
                    <span className="text-white font-mono font-semibold">5,127 {isEn ? 'Years' : 'సంవత్సరాలు'} (3102 BCE start)</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/30 border border-cyan-400/30">
                    <span className="font-bold text-cyan-300 block">{isEn ? 'Shalivahana Shaka:' : 'శాలివాహన శకము:'}</span>
                    <span className="text-white font-mono font-semibold">1948 {isEn ? 'Year' : 'సంవత్సరం'} (78 CE start)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Dossier Body Content */}
            <div className="p-5 sm:p-6 space-y-5 text-stone-800">
              
              {/* 1. Rulers & Personalities */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                  <Crown className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Prominent Rulers & Personalities' : 'ప్రముఖ చక్రవర్తులు / పాలకులు / మహనీయులు'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(isEn ? currentEvent.rulersEn : currentEvent.rulersTe).map((r, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs font-bold border border-[#D4AF37]/50 shadow-2xs"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Capitals & Geographic Reach */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                  <MapPin className="w-4 h-4 text-[#C99700]" />
                  <span>{isEn ? 'Capitals & Major Historical Regions' : 'రాజధానులు & ప్రధాన చారిత్రక నగరాలు'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(isEn ? currentEvent.capitalsEn : currentEvent.capitalsTe).map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl bg-[#FAF7F0] text-[#5D4037] text-xs font-semibold border border-[#E8DCC4]"
                    >
                      🏛️ {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Key Milestones / Turning Events */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Pivotal Milestones & Events' : 'కీలక మైలురాళ్ళు & పరిణామాలు'}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed">
                  {(isEn ? currentEvent.keyEventsEn : currentEvent.keyEventsTe).map((ev, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#FFFDF8] p-2 rounded-xl border border-[#E8DCC4]/80">
                      <span className="text-[#D84315] font-bold mt-0.5">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Culture, Science & Achievements */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#7B1113] tracking-wide">
                  <Landmark className="w-4 h-4 text-[#B7791F]" />
                  <span>{isEn ? 'Culture, Sciences & Inventions' : 'సంస్కృతి, శాస్త్రం & విశేషాలు'}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed">
                  {(isEn ? currentEvent.cultureAchievementsEn : currentEvent.cultureAchievementsTe).map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#FAF7F0] p-2 rounded-xl border border-[#E8DCC4]/80">
                      <span className="text-[#2B6CB0] font-bold mt-0.5">✓</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. What Changed (Historical Transformation) */}
              <div className="p-3.5 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1">
                <div className="text-[11px] font-black uppercase text-[#7B1113] flex items-center gap-1">
                  <span>⚡</span>
                  <span>{isEn ? 'What Changed in Indian History?' : 'చరిత్రలో వచ్చిన కీలక మార్పు:'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4E342E] font-medium leading-relaxed">
                  {isEn ? currentEvent.whatChangedEn : currentEvent.whatChangedTe}
                </p>
              </div>

              {/* 6. Civilizational Significance */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF7F0] to-[#F5ECE0] border border-[#D4AF37]/50 space-y-1">
                <div className="text-[11px] font-black uppercase text-[#5D4037] flex items-center gap-1">
                  <span>🌟</span>
                  <span>{isEn ? 'Civilizational Significance & Legacy:' : 'భారతీయ నాగరికతా ప్రాధాన్యత & విశిష్టత:'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2C1810] font-medium leading-relaxed italic">
                  "{isEn ? currentEvent.significanceEn : currentEvent.significanceTe}"
                </p>
              </div>

              {/* Related Infographic Thumbnail Preview if present */}
              {currentEvent.relatedImage && (
                <div className="pt-2 border-t border-[#E8DCC4] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={currentEvent.relatedImage}
                      alt={isEn ? currentEvent.titleEn : currentEvent.titleTe}
                      className="w-14 h-14 rounded-xl object-cover border border-[#D4AF37] shadow-xs cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setPreviewImage(currentEvent.relatedImage || null)}
                    />
                    <div>
                      <div className="text-xs font-bold text-[#7B1113]">
                        {isEn ? 'Original Master Infographic' : 'మూల చారిత్రక పటం & ఇన్ఫోగ్రాఫిక్'}
                      </div>
                      <button
                        onClick={() => setPreviewImage(currentEvent.relatedImage || null)}
                        className="text-[11px] text-[#D84315] hover:underline font-semibold flex items-center gap-0.5 cursor-pointer mt-0.5"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{isEn ? 'Click to Zoom & View' : 'విస్తరించి వీక్షించండి'}</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setViewMode('indian_history');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#FFFDF7] hover:bg-[#FFF3E0] text-[#7B1113] border border-[#D4AF37] text-xs font-bold transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isEn ? 'Read Full Era Dossier' : 'పూర్తి వివరాలు చదవండి'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Quick Epoch Selector Bar (Bottom of dossier for easy jumping) */}
          <div className="p-3 bg-[#FFFDF7] rounded-2xl border border-[#D4AF37]/60 shadow-xs flex items-center justify-between gap-2">
            <button
              onClick={() => handleStep('prev')}
              className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FFF3E0] text-[#7B1113] border border-[#E8DCC4] text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEn ? 'Previous Epoch' : 'పూర్వ యుగం'}</span>
            </button>

            <span className="text-xs font-mono font-bold text-[#8D6E63]">
              {currentEvent.order} / {TOTAL_SPOKES}
            </span>

            <button
              onClick={() => handleStep('next')}
              className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FFF3E0] text-[#7B1113] border border-[#E8DCC4] text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
            >
              <span>{isEn ? 'Next Epoch' : 'తర్వాతి యుగం'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM 24-EPOCH QUICK HORIZONTAL STRIP                    */}
      {/* ============================================================ */}
      <div className="bg-[#FFFDF7] border-t-2 border-[#D4AF37] p-4 sm:p-6 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">📜</span>
            <h3 className="text-sm sm:text-base font-black font-telugu-serif text-[#7B1113]">
              {isEn ? '24 Great Epochs & Empires Quick Timeline Strip' : '24 మహా యుగాలు & సామ్రాజ్యాల క్విక్ టైమ్‌లైన్ స్ట్రిప్'}
            </h3>
          </div>
          <span className="text-xs text-[#8D6E63] font-medium hidden sm:inline">
            {isEn ? 'Click any card to focus on Chakra' : 'చక్రంపై కేంద్రీకరించడానికి ఏ కార్డునైనా తాకండి'}
          </span>
        </div>

        <div className="flex items-stretch gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin">
          {filteredEvents.map(event => {
            const isSelected = event.id === selectedEventId;
            const isCurr = event.isCurrentTime;

            return (
              <div
                key={`strip-${event.id}`}
                onClick={() => handleSelectEvent(event)}
                className={`min-w-[155px] max-w-[165px] p-2.5 rounded-2xl border transition-all cursor-pointer shrink-0 flex flex-col justify-between ${
                  isSelected
                    ? (isCurr 
                        ? 'bg-cyan-900 text-cyan-100 border-cyan-400 ring-2 ring-cyan-300 shadow-md scale-102' 
                        : 'bg-[#7B1113] text-[#FFE082] border-[#FFD54F] ring-2 ring-[#FFD54F] shadow-md scale-102')
                    : (isCurr 
                        ? 'bg-cyan-950/20 text-cyan-950 border-cyan-500 hover:bg-cyan-100/60' 
                        : 'bg-white text-stone-800 border-[#E8DCC4] hover:bg-[#FFF9EE] hover:border-[#D4AF37]')
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-base">{event.icon}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${
                      isSelected || isCurr ? 'bg-black/30 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      #{event.order}
                    </span>
                  </div>

                  <div className="text-xs font-bold font-telugu-serif line-clamp-2 leading-tight">
                    {isEn ? event.titleEn : event.titleTe}
                  </div>
                </div>

                <div className={`mt-2 text-[10px] font-mono font-semibold pt-1 border-t ${
                  isSelected ? 'border-white/20 text-white/90' : 'border-stone-200 text-[#8D6E63]'
                }`}>
                  {isEn ? event.periodEn : event.periodTe}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. IMAGE LIGHTBOX MODAL                                      */}
      {/* ============================================================ */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-700 transition-colors font-bold cursor-pointer"
            >
              ✕
            </button>
            <img
              src={previewImage}
              alt="Historical Infographic"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

    </div>
  );
};
