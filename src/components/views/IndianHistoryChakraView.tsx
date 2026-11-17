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
  Orbit,
  Scale,
  CheckCircle2
} from 'lucide-react';

// 4 Ascending Cosmic & Dharmic Epochs of Bharat for the Ascending Cycle (Left Arc: +90° to 270°/-90°)
export interface AscendingBharatEpoch {
  id: string;
  nameTe: string;
  nameEn: string;
  periodTe: string;
  periodEn: string;
  startDeg: number;
  endDeg: number;
  midDeg: number;
  spanDeg: number;
  yugaEquivalentTe: string;
  yugaEquivalentEn: string;
  icon: string;
  color: string;
  accentColor: string;
  descriptionTe: string;
  descriptionEn: string;
  significanceTe: string;
  significanceEn: string;
}

export const ASCENDING_BHARAT_EPOCHS: AscendingBharatEpoch[] = [
  {
    id: 'asc_epoch_space_energy',
    nameTe: 'ఆరోహణ రోదసి & విజ్ఞాన యుగం',
    nameEn: 'Ascending Space & Energy Era',
    periodTe: 'క్రీ.శ. 3225 – 5925',
    periodEn: '3,225 – 5,925 CE',
    startDeg: 90,
    endDeg: 135,
    midDeg: 112.5,
    spanDeg: 45,
    yugaEquivalentTe: 'ఆరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Ascending Dwapara Yuga',
    icon: '🚀',
    color: '#E0F7FA',
    accentColor: '#00838F',
    descriptionTe: 'శ్రీ యుక్తేశ్వర్ సిద్ధాంతం ప్రకారం విద్యుత్, పరమాణు, రోదసి మరియు సూక్ష్మ తరంగ శక్తుల సంపూర్ణ అవగాహన; నక్షత్రయానం మరియు మానవ చేతన ఉన్నతి.',
    descriptionEn: 'Mastery over electro-magnetic spectrum, fine energy matrices, interstellar spaceflight, and awakening of higher mental faculties.',
    significanceTe: 'భౌతిక వాదం నుండి సూక్ష్మ శక్తి విజ్ఞానం వైపు మానవాళి ప్రస్థానం.',
    significanceEn: 'Humanity\'s evolutionary transcendence from gross matter to subtle energy matrices.'
  },
  {
    id: 'asc_epoch_spiritual_harmony',
    nameTe: 'ఆరోహణ ఆధ్యాత్మిక సామరస్య యుగం',
    nameEn: 'Ascending Intuitive Harmony',
    periodTe: 'క్రీ.శ. 5925 – 8925',
    periodEn: '5,925 – 8,925 CE',
    startDeg: 135,
    endDeg: 180,
    midDeg: 157.5,
    spanDeg: 45,
    yugaEquivalentTe: 'ఆరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Ascending Treta Yuga',
    icon: '🧘',
    color: '#FFF3E0',
    accentColor: '#E65100',
    descriptionTe: 'టెలిపతి, అంతఃచేతనా వికాసం, ఆలోచనా తరంగాలతో వస్తు సృష్టి, సమాజంలో నేరాలు లేని పవిత్ర ధర్మపాలన మరియు ప్రకృతితో సామరస్యం.',
    descriptionEn: 'Universal direct intuition, telepathic communion, thought-materialization, supreme ethical governance, and deep harmony with nature.',
    significanceTe: 'మానవ మేధస్సు దివ్య ఆధ్యాత్మిక సంకల్ప శక్తిగా రూపాంతరం చెందడం.',
    significanceEn: 'The flowering of divine mental power and global righteousness.'
  },
  {
    id: 'asc_epoch_satya_golden',
    nameTe: 'ఆరోహణ సత్యయుగ స్వర్ణ శిఖరం',
    nameEn: 'Ascending Satya Golden Age',
    periodTe: 'క్రీ.శ. 8925 – 12,225',
    periodEn: '8,925 – 12,225 CE',
    startDeg: 180,
    endDeg: 225,
    midDeg: 202.5,
    spanDeg: 45,
    yugaEquivalentTe: 'ఆరోహణ సత్యయుగం (భాగం 1)',
    yugaEquivalentEn: 'Ascending Satya Yuga (Part 1)',
    icon: '🕉️',
    color: '#FFFDE7',
    accentColor: '#F57F17',
    descriptionTe: 'బ్రహ్మజ్ఞానం, సకల ప్రాణులలో భగవద్దర్శనం, మహర్షుల నిరంతర దివ్య తపస్సు, సత్యం మరియు ధర్మం నాలుగు పాదాలతో నడిచే పరిపూర్ణ స్వర్ణయుగం.',
    descriptionEn: 'Full spiritual liberation, omnipresent God-consciousness, Rishi tapasya, when Dharma stands whole upon all four pillars of truth.',
    significanceTe: 'సృష్టి కాలచక్రపు పరమ శిఖరం మరియు పునరావృత ఆది మూలం.',
    significanceEn: 'The supreme pinnacle of the 25,800-year Great Year.'
  },
  {
    id: 'asc_epoch_vedic_genesis',
    nameTe: 'ఆది వైదిక సృష్టి & మను ప్రళయ రక్షణ',
    nameEn: 'Vedic Genesis & Cosmic Renewal',
    periodTe: 'క్రీ.శ. 12,225 – 14,925 / 10,876 BCE',
    periodEn: '12,225 – 14,925 CE / 10,876 BCE',
    startDeg: 225,
    endDeg: 270,
    midDeg: 247.5,
    spanDeg: 45,
    yugaEquivalentTe: 'ఆరోహణ సత్యయుగం (శిఖరం) & మహా ప్రళయం',
    yugaEquivalentEn: 'Ascending Satya Zenith & Cosmic Renewal',
    icon: '🌊',
    color: '#E3F2FD',
    accentColor: '#0D47A1',
    descriptionTe: 'మత్స్యావతారం, వైవస్వత మను నావ రక్షణ, సప్తర్షుల వేద సంరక్షణ, కటాక్లిస్మోస్ మహా ప్రళయం అనంతరం సృష్టి పునఃప్రారంభం.',
    descriptionEn: 'Matsya Avatara, preservation of Manu\'s Ark, transmission of the eternal Vedas by Saptarshis, and cosmological genesis following the Great Deluge.',
    significanceTe: 'సృష్టి పునరావృత చక్రం - ప్రళయం నుండి నవ సృష్టి ఆరంభం.',
    significanceEn: 'The eternal cycle of dissolution and fresh cosmological genesis.'
  }
];

export type ScaleMode = 'chrono_24' | 'spoke_360';

export const getYugaTeluguDisplayName = (category: string): string => {
  switch (category) {
    case 'kataklysmos':
      return 'కటాక్లిస్మోస్';
    case 'ekpyrosis':
      return 'ఎక్పైరోసిస్';
    case 'satya':
      return 'సత్యయుగం';
    case 'treta':
      return 'త్రేతాయుగం';
    case 'dwapara':
      return 'ద్వాపరయుగం';
    case 'kali':
      return 'కలియుగం';
    case 'transition':
      return 'సంధి';
    default:
      return 'యుగచక్రం';
  }
};

export const getYugaEnglishDisplayName = (category: string): string => {
  switch (category) {
    case 'kataklysmos':
      return 'Kataklysmos';
    case 'ekpyrosis':
      return 'Ekpyrosis';
    case 'satya':
      return 'Satya Yuga';
    case 'treta':
      return 'Treta Yuga';
    case 'dwapara':
      return 'Dwapara Yuga';
    case 'kali':
      return 'Kali Yuga';
    case 'transition':
      return 'Sandhi';
    default:
      return 'Yuga';
  }
};

export type SelectedItemType = 
  | { kind: 'empire'; data: ChakraTimeEvent }
  | { kind: 'yuga'; data: YugaCycleSegment }
  | { kind: 'asc_epoch'; data: AscendingBharatEpoch };

export const IndianHistoryChakraView: React.FC = () => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Active Scale Mode:
  // 'chrono_24': 24 Dynasties mapped along the chronological historical arc (Top -90° to Bottom +90°) in exact sync with 25,800y Yuga cycle!
  // 'spoke_360': 24 Dynasties expanded across full 360 degrees (15° each) of the Inner Ring!
  const [scaleMode, setScaleMode] = useState<ScaleMode>('chrono_24');

  // Active selection: Defaults to Dynasty 24 (Amrit Kaal: India at 2026 CE / Present Time)
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    kind: 'empire',
    data: INDIAN_HISTORY_CHAKRA_EVENTS[23] // Amrit Kaal (2026 CE / Current time)
  });

  // Rotation angle of the wheel (in degrees)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Auto Tour mode
  const [isTourActive, setIsTourActive] = useState<boolean>(false);

  // Audio chime state
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

  // Live real-time clock state for "Current Time"
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Lightbox for thumbnail image
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Filter focus: 'all' | 'yuga' | 'empire'
  const [focusRing, setFocusRing] = useState<'all' | 'yuga' | 'empire'>('all');

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

  // Auto Tour Interval: steps through dynasties and yugas
  useEffect(() => {
    if (!isTourActive) return;

    let stepCounter = 0;
    const interval = setInterval(() => {
      stepCounter++;
      if (stepCounter % 2 === 0) {
        // Step in Empires
        const currEmpireIdx = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(
          e => selectedItem.kind === 'empire' && e.id === selectedItem.data.id
        );
        const nextIdx = (currEmpireIdx + 1) % INDIAN_HISTORY_CHAKRA_EVENTS.length;
        const nextEmpire = INDIAN_HISTORY_CHAKRA_EVENTS[nextIdx];
        setSelectedItem({ kind: 'empire', data: nextEmpire });
        playChime(nextEmpire.isCurrentTime ? 880 : 440 + nextIdx * 15);
      } else {
        // Step in Yugas
        const currYugaIdx = YUGA_CYCLE_25800_SEGMENTS.findIndex(
          s => selectedItem.kind === 'yuga' && s.id === selectedItem.data.id
        );
        const nextIdx = (currYugaIdx + 1) % YUGA_CYCLE_25800_SEGMENTS.length;
        const nextYuga = YUGA_CYCLE_25800_SEGMENTS[nextIdx];
        setSelectedItem({ kind: 'yuga', data: nextYuga });
        playChime(nextYuga.isCurrentTime ? 880 : 440 + nextIdx * 20);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTourActive, isAudioEnabled, selectedItem]);

  // Jump to Current Time (2026 CE)
  const handleJumpToCurrentTime = () => {
    setSelectedItem({
      kind: 'empire',
      data: INDIAN_HISTORY_CHAKRA_EVENTS[23] // Amrit Kaal India at 2026 CE
    });
    playChime(880);
  };

  // ============================================================
  // GEOMETRY CONSTANTS FOR EXACT SAME SCALE ARCHITECTURE
  // ============================================================
  const CX = 500;
  const CY = 500;

  // Outer Ring: 25,800-Year Yuga Cycle (Width = 485 - 375 = 110px)
  const R_YUGA_OUTER = 485;
  const R_YUGA_INNER = 375;

  // Inner Ring: 24 Indian Dynasties (Width = 365 - 255 = 110px)
  // EXACT SAME RADIAL WIDTH (110px vs 110px)
  const R_EMPIRES_OUTER = 365;
  const R_EMPIRES_INNER = 255;

  // Trajectory & Hub Rings
  const R_ARROW_BAND = 185;
  const R_HUB_OUTER = 160;
  const R_HUB_MID = 120;
  const R_HUB_INNER = 85;

  // Outer Ring Segments: 25,800 Yuga Cycle
  // Kataklysmos (1200 yrs) is centered at top (-90°)
  // Ekpyrosis (1200 yrs) is centered at bottom (+90°)
  const yugaAngleSegments = useMemo(() => {
    let currentAngle = -90 - (16.744 / 2);
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

  // MODE 1: 24 Dynasties mapped along the Historical Descending Arc (Top -90° to Bottom +90°)
  // In exact sync with 10,000 BCE at Top down to 2026 CE at Bottom!
  const chrono24Segments = useMemo(() => {
    const totalDynasties = INDIAN_HISTORY_CHAKRA_EVENTS.length; // 24
    const spanPerDynasty = 180 / totalDynasties; // 7.5° each
    return INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
      const startDeg = -90 + index * spanPerDynasty;
      const endDeg = startDeg + spanPerDynasty;
      const midDeg = startDeg + spanPerDynasty / 2;
      return {
        ...event,
        startDeg,
        endDeg,
        midDeg,
        spanDeg: spanPerDynasty
      };
    });
  }, []);

  // MODE 2: 24 Dynasties expanded across full 360° of the Inner Ring (15° each)
  // Spoke 1 starts at -90° (Top / 12 o'clock)
  const full360Segments = useMemo(() => {
    const span = 360 / 24; // 15°
    return INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
      const startDeg = -90 + index * span;
      const endDeg = startDeg + span;
      const midDeg = startDeg + span / 2;
      return {
        ...event,
        startDeg,
        endDeg,
        midDeg,
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

  // Formatted date and time
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
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-xl overflow-hidden min-h-[950px] mb-12">
      
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
                ☸️
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#2A0800] text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#2A0800]" />
                  {isEn ? '24 Dynasties Scaled on Inner Ring' : '24 మహా సామ్రాజ్యాలు లోపలి వలయంలో సమన్వయం'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#FFE082] text-xs font-bold border border-[#D4AF37]/50">
                  {isEn ? 'Outer: 25,800y Yuga Cycle • Inner: 24 Indian Dynasties' : 'బయటి: 25,800 ఏళ్ల యుగచక్రం • లోపలి: 24 భారత సామ్రాజ్యాలు'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/50 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isEn ? 'LIVE: 2026 CE Synchronized' : 'వర్తమానం: 2026 CE ఏకరీతిగా సమన్వయం'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFE082] font-telugu-serif tracking-tight mt-1.5 drop-shadow-sm">
                {isEn 
                  ? 'Unified Time Chakra: 24 Dynasties Scaled on the Inner Ring' 
                  : 'ఏకరీతి కాలచక్రం: లోపలి వలయంలో 24 భారతీయ మహా సామ్రాజ్యాలు'}
              </h1>
              <p className="text-xs sm:text-sm text-[#FFECE4] mt-1.5 max-w-3xl leading-relaxed font-medium">
                {isEn 
                  ? 'Outer Ring displays the 25,800-year Yuga Cycle with prominent Telugu Yuga names. Inner Ring displays all 24 Great Dynasties of Bharat (from Prehistoric Mehrgarh 10,000 BCE to Amrit Kaal 2026 CE) calibrated in exact chronological sync from Top to Bottom (110px equal radial width).'
                  : 'బయటి వలయం ప్రముఖ తెలుగు యుగ నామాలతో 25,800 ఏళ్ల యుగచక్రాన్ని సూచిస్తుంది. లోపలి వలయం భారతదేశపు 24 మహా సామ్రాజ్యాలను (క్రీ.పూ. 10,000 మెహర్‌గఢ్ నుండి నేటి 2026 అమృత కాలం వరకు) పైన నుండి కిందకు ఖచ్చితమైన కాలక్రమంలో ఏకీభవింపజేసి చూపిస్తుంది.'}
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
            <div className="text-xs text-[#FFE082]/90 font-medium">
              {formattedDate} • {isEn ? 'Kaliyuga 5127' : 'కలియుగం 5127'}
            </div>
            <button
              onClick={handleJumpToCurrentTime}
              className="mt-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer border border-cyan-300/40"
              title={isEn ? 'Jump to Current Time (2026 CE)' : 'చక్రంపై నేటి వర్తమాన సమయానికి వెళ్ళు'}
            >
              <Target className="w-4 h-4 text-cyan-200" />
              <span>{isEn ? 'Jump to Current Time (2026)' : 'ప్రస్తుత సమయానికి వెళ్ళు (2026)'}</span>
            </button>
          </div>
        </div>

        {/* Toolbar: Scale Mode Selector & Controls */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* SCALE MODE SELECTOR */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[#FFE082] uppercase tracking-wider mr-1 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#FFD54F]" />
              {isEn ? 'Inner Ring 24 Dynasties Scale:' : 'లోపలి 24 సామ్రాజ్యాల స్కేల్:'}
            </span>

            {/* Mode 1: Chronological Arc Scale (24 Dynasties from Top to Bottom) */}
            <button
              onClick={() => {
                setScaleMode('chrono_24');
                setSelectedItem({ kind: 'empire', data: INDIAN_HISTORY_CHAKRA_EVENTS[23] });
                playChime(580);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                scaleMode === 'chrono_24'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              title={isEn ? '24 Dynasties calibrated along the historical arc from 10,000 BCE at Top to 2026 CE at Bottom' : 'క్రీ.పూ. 10,000 (పైభాగం) నుండి 2026 CE (దిగువ భాగం) వరకు 24 సామ్రాజ్యాలు నిక్కచ్చిగా అమర్చబడ్డాయి'}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? '⚖️ Synchronized Yuga Scale (10,000 BCE to 2026 CE)' : '⚖️ యుగచక్ర సమన్వయ స్కేల్ (క్రీ.పూ. 10,000 నుండి 2026 వరకు)'}</span>
            </button>

            {/* Mode 2: Full 360° 24-Spoke Wheel */}
            <button
              onClick={() => {
                setScaleMode('spoke_360');
                setSelectedItem({ kind: 'empire', data: INDIAN_HISTORY_CHAKRA_EVENTS[23] });
                playChime(640);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                scaleMode === 'spoke_360'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              title={isEn ? 'All 24 Dynasties expanded across full 360 degrees (15° each) of the Inner Ring' : 'లోపలి వలయం చుట్టూ 24 సామ్రాజ్యాలు 360 డిగ్రీల అశోక చక్రంలా విస్తరించబడ్డాయి'}
            >
              <span>{isEn ? '☸️ Full 360° 24-Spoke Wheel' : '☸️ 360° 24 ఆకుల చక్రం (పూర్తి వృత్తం)'}</span>
            </button>
          </div>

          {/* Controls: Focus ring & wheel rotate */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Focus Ring Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setFocusRing('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'all' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? 'Both Rings' : 'రెండు వలయాలు'}
              </button>
              <button
                onClick={() => setFocusRing('yuga')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'yuga' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? 'Yuga' : 'యుగచక్రం'}
              </button>
              <button
                onClick={() => setFocusRing('empire')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'empire' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? '24 Dynasties' : '24 సామ్రాజ్యాలు'}
              </button>
            </div>

            {/* Tour & Audio buttons */}
            <button
              onClick={() => setIsTourActive(!isTourActive)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                isTourActive 
                  ? 'bg-amber-400 text-red-950 ring-2 ring-white animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40'
              }`}
            >
              {isTourActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTourActive ? (isEn ? 'Pause' : 'ఆపు') : (isEn ? 'Auto Tour' : 'ఆటో యాత్ర')}</span>
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev + 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Clockwise' : 'సవ్యదిశలో తిప్పు'}
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev - 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Anti-Clockwise' : 'అపసవ్యదిశలో తిప్పు'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className={`p-1.5 rounded-xl transition-all cursor-pointer border ${
                isAudioEnabled ? 'bg-amber-400/20 text-amber-300 border-amber-400/50' : 'bg-white/5 text-stone-400 border-white/20'
              }`}
              title={isAudioEnabled ? (isEn ? 'Mute' : 'మ్యూట్') : (isEn ? 'Unmute' : 'శబ్దం ఆన్')}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN WORKSPACE: UNIFIED CHAKRA WHEEL + DETAILS DOSSIER    */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE COMBINED ALL-IN-ONE CHAKRA SVG              */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center">
          
          <div className="w-full max-w-[720px] aspect-square relative select-none flex items-center justify-center p-2 sm:p-4 rounded-3xl bg-radial from-[#FFFDF8] via-[#FFF9EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-2xl">
            
            {/* Top Indicator Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-cyan-950/95 text-cyan-200 border border-cyan-400/60 px-3 py-1.5 rounded-full shadow-md text-xs font-black backdrop-blur-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{isEn ? '2026 CE Needle • Bottom of Chakra' : '2026 CE లైవ్ సూచిక • చక్రం దిగువన'}</span>
            </div>

            {/* View Original Yuga Diagram Button */}
            <button
              onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
              className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#7B1113]/90 hover:bg-[#7B1113] text-[#FFE082] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#D4AF37] cursor-pointer transition-all"
              title={isEn ? 'View Original Uploaded 25,800-Year Yuga Diagram' : 'మూల 25,800 ఏళ్ల యుగచక్ర పటం చూడండి'}
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>{isEn ? 'Source Poster' : 'మూల పటం (HD)'}</span>
            </button>

            {/* ============================================================ */}
            {/* THE MASTER UNIFIED SVG CHAKRA (ON THE EXACT SAME SCALE)      */}
            {/* ============================================================ */}
            <svg
              viewBox="0 0 1000 1000"
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
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#00838F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#006064" stopOpacity="0" />
                </radialGradient>

                <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#3E1004" />
                </marker>
              </defs>

              {/* ------------------------------------------------------------ */}
              {/* TIER 1: OUTER RING — 25,800-YEAR YUGA CYCLE (Thickness: 110px) */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_YUGA_OUTER + 3} fill="#2A0800" stroke="#D4AF37" strokeWidth="4" />
              <circle cx={CX} cy={CY} r={R_YUGA_INNER} fill="none" stroke="#3E1004" strokeWidth="3" />

              {/* 16 Yuga Cycle Sectors on the Outer Band */}
              {yugaAngleSegments.map(seg => {
                const isSelected = selectedItem.kind === 'yuga' && selectedItem.data.id === seg.id;
                const isCurr = seg.isCurrentTime;
                const path = describeArcSector(CX, CY, R_YUGA_INNER, R_YUGA_OUTER, seg.startAngleDeg, seg.endAngleDeg);

                return (
                  <g
                    key={`unified-yuga-${seg.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'yuga', data: seg });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'empire' ? 0.35 : 1}
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
                                  ? '#F0EDE6'
                                  : seg.category === 'satya'
                                    ? '#FFFDE7'
                                    : seg.category === 'treta'
                                      ? '#FFF3E0'
                                      : seg.category === 'dwapara'
                                        ? '#E8F5E9'
                                        : '#EDE7F6')
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#E53935' : '#3E1004')}
                      strokeWidth={isSelected ? 4 : (isCurr ? 3 : 2)}
                      className="transition-colors duration-200"
                    />

                    {/* ENLARGED FONT LABELS FOR YUGA SEGMENTS (WITH PROMINENT TELUGU YUGA NAMES) */}
                    {(() => {
                      const rad = (seg.midAngleDeg * Math.PI) / 180;
                      const rText = (R_YUGA_OUTER + R_YUGA_INNER) / 2;
                      const xT = CX + rText * Math.cos(rad);
                      const yT = CY + rText * Math.sin(rad);

                      let textRot = seg.midAngleDeg + 90;
                      if (seg.midAngleDeg > 0 && seg.midAngleDeg < 180) {
                        textRot += 180;
                      }

                      if (seg.category === 'transition') {
                        return (
                          <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                            <text
                              x={xT}
                              y={yT - 7}
                              textAnchor="middle"
                              dominantBaseline="central"
                              fontSize={11}
                              fontWeight="900"
                              fill={isSelected ? '#FFE082' : '#3E2723'}
                              className="font-telugu-serif"
                            >
                              సంధి
                            </text>
                            <text
                              x={xT}
                              y={yT + 7}
                              textAnchor="middle"
                              dominantBaseline="central"
                              fontSize={9}
                              fontWeight="bold"
                              fill={isSelected ? '#FFFFFF' : '#6D4C41'}
                              className="font-mono"
                            >
                              300y
                            </text>
                          </g>
                        );
                      }

                      const isKataklysmos = seg.category === 'kataklysmos';
                      const isEkpyrosis = seg.category === 'ekpyrosis';
                      const teluguYuga = getYugaTeluguDisplayName(seg.category);
                      const englishYuga = getYugaEnglishDisplayName(seg.category);

                      return (
                        <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                          {/* 1. TELUGU YUGA NAME (Bold & Prominent) */}
                          <text
                            x={xT}
                            y={yT - 18}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={isKataklysmos || isEkpyrosis ? 13 : 15}
                            fontWeight="900"
                            fill={
                              isSelected 
                                ? '#FFE082' 
                                : (isKataklysmos ? '#0D47A1' : isEkpyrosis ? '#B71C1C' : '#1A0500')
                            }
                            className="font-telugu-serif tracking-tight drop-shadow-2xs"
                          >
                            {teluguYuga}
                          </text>

                          {/* 2. ENGLISH YUGA SUBTITLE */}
                          <text
                            x={xT}
                            y={yT + 1}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={11}
                            fontWeight="bold"
                            fontStyle={isKataklysmos || isEkpyrosis ? 'italic' : 'normal'}
                            fill={
                              isSelected 
                                ? '#FFFFFF' 
                                : (isKataklysmos ? '#1565C0' : isEkpyrosis ? '#C62828' : '#3E2723')
                            }
                            className="font-serif tracking-wide"
                          >
                            {englishYuga}
                          </text>

                          {/* 3. DURATION / YEARS */}
                          <text
                            x={xT}
                            y={yT + 19}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={10}
                            fontWeight="bold"
                            fill={
                              isSelected 
                                ? '#FFD54F' 
                                : (isKataklysmos ? '#1976D2' : isEkpyrosis ? '#D32F2F' : '#616161')
                            }
                            className="font-mono"
                          >
                            {isEn ? seg.durationLabelEn : `${seg.durationYears} ఏళ్ళు`}
                          </text>
                        </g>
                      );
                    })()}
                  </g>
                );
              })}

              {/* Boundary Ticks & External Dates for 25,800 Yuga Cycle */}
              {yugaAngleSegments.map(seg => {
                const rad = (seg.startAngleDeg * Math.PI) / 180;
                const xInner = CX + R_YUGA_INNER * Math.cos(rad);
                const yInner = CY + R_YUGA_INNER * Math.sin(rad);
                const xOuter = CX + R_YUGA_OUTER * Math.cos(rad);
                const yOuter = CY + R_YUGA_OUTER * Math.sin(rad);

                const xDate = CX + (R_YUGA_OUTER + 20) * Math.cos(rad);
                const yDate = CY + (R_YUGA_OUTER + 20) * Math.sin(rad);

                let dateRot = seg.startAngleDeg + 90;
                if (seg.startAngleDeg > 0 && seg.startAngleDeg < 180) dateRot += 180;

                const dateText = isEn 
                  ? seg.datesEn.split('–')[0].trim() 
                  : seg.datesEn.split('–')[0].replace('BCE', 'క్రీ.పూ.').replace('CE', 'క్రీ.శ.').trim();

                return (
                  <g key={`yuga-border-tick-${seg.id}`} className="pointer-events-none" opacity={focusRing === 'empire' ? 0.35 : 1}>
                    <line
                      x1={xInner}
                      y1={yInner}
                      x2={xOuter + 8}
                      y2={yOuter + 8 * Math.sin(rad)}
                      stroke="#2C1810"
                      strokeWidth="2.5"
                    />
                    <text
                      x={xDate}
                      y={yDate}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={11}
                      fontWeight="900"
                      fill="#2A0800"
                      transform={`rotate(${dateRot}, ${xDate}, ${yDate})`}
                      className="font-mono tracking-tight"
                    >
                      {dateText}
                    </text>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 2: INNER RING — 24 DYNASTIES OF BHARAT (Thickness: 110px) */}
              {/* DIRECTLY RENDERED ON THE INNER RING ON EQUAL RADIAL SCALE    */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_EMPIRES_OUTER} fill="none" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx={CX} cy={CY} r={R_EMPIRES_INNER} fill="none" stroke="#3E1004" strokeWidth="3" />

              {/* MODE A: 24 DYNASTIES SCALED ALONG HISTORICAL ARC (Top -90° to Bottom +90°) */}
              {scaleMode === 'chrono_24' && (
                <>
                  {/* The 24 Dynasties along Right Arc (-90° to +90°) */}
                  {chrono24Segments.map(event => {
                    const isSelected = selectedItem.kind === 'empire' && selectedItem.data.id === event.id;
                    const isCurr = event.isCurrentTime;
                    const path = describeArcSector(CX, CY, R_EMPIRES_INNER, R_EMPIRES_OUTER, event.startDeg, event.endDeg);

                    const midRad = (event.midDeg * Math.PI) / 180;
                    const rMid = (R_EMPIRES_OUTER + R_EMPIRES_INNER) / 2;
                    const xM = CX + rMid * Math.cos(midRad);
                    const yM = CY + rMid * Math.sin(midRad);

                    let rot = event.midDeg + 90;
                    if (event.midDeg > 0 && event.midDeg < 180) rot += 180;

                    return (
                      <g
                        key={`chrono24-empire-${event.id}`}
                        className="cursor-pointer group"
                        onClick={() => {
                          setSelectedItem({ kind: 'empire', data: event });
                          playChime(isCurr ? 880 : 528);
                        }}
                        opacity={focusRing === 'yuga' ? 0.35 : 1}
                      >
                        <path
                          d={path}
                          fill={
                            isSelected
                              ? (isCurr ? '#006064' : '#7B1113')
                              : (isCurr ? '#004D40' : (event.order % 2 === 0 ? '#FFFDF8' : '#FAF2E6'))
                          }
                          stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#E8DCC4')}
                          strokeWidth={isSelected ? 4 : (isCurr ? 3 : 1.5)}
                          className="transition-colors duration-200"
                        />

                        {/* Dividing line */}
                        <line
                          x1={CX + R_EMPIRES_INNER * Math.cos((event.startDeg * Math.PI) / 180)}
                          y1={CY + R_EMPIRES_INNER * Math.sin((event.startDeg * Math.PI) / 180)}
                          x2={CX + R_EMPIRES_OUTER * Math.cos((event.startDeg * Math.PI) / 180)}
                          y2={CY + R_EMPIRES_OUTER * Math.sin((event.startDeg * Math.PI) / 180)}
                          stroke="#C59B27"
                          strokeWidth="1.5"
                        />

                        {/* Content inside wedge */}
                        <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                          <text
                            x={xM}
                            y={yM - 24}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={15}
                          >
                            {event.icon}
                          </text>

                          <text
                            x={xM}
                            y={yM}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={11}
                            fontWeight="900"
                            fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#4E342E')}
                            className="font-telugu-serif tracking-tight"
                          >
                            {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                          </text>

                          <text
                            x={xM}
                            y={yM + 22}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={9}
                            fontWeight="bold"
                            fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#8D6E63')}
                            className="font-mono"
                          >
                            #{event.order}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* The 4 Ascending Bharat Epochs along Left Arc (+90° to 270°/-90°) */}
                  {ASCENDING_BHARAT_EPOCHS.map(epoch => {
                    const isSelected = selectedItem.kind === 'asc_epoch' && selectedItem.data.id === epoch.id;
                    const path = describeArcSector(CX, CY, R_EMPIRES_INNER, R_EMPIRES_OUTER, epoch.startDeg, epoch.endDeg);

                    const midRad = (epoch.midDeg * Math.PI) / 180;
                    const rMid = (R_EMPIRES_OUTER + R_EMPIRES_INNER) / 2;
                    const xM = CX + rMid * Math.cos(midRad);
                    const yM = CY + rMid * Math.sin(midRad);

                    let rot = epoch.midDeg + 90;
                    if (epoch.midDeg > 0 && epoch.midDeg < 180) rot += 180;

                    return (
                      <g
                        key={`asc-epoch-${epoch.id}`}
                        className="cursor-pointer group"
                        onClick={() => {
                          setSelectedItem({ kind: 'asc_epoch', data: epoch });
                          playChime(620);
                        }}
                        opacity={focusRing === 'yuga' ? 0.35 : 1}
                      >
                        <path
                          d={path}
                          fill={isSelected ? '#7B1113' : epoch.color}
                          stroke={isSelected ? '#FFE082' : '#C59B27'}
                          strokeWidth={isSelected ? 4 : 1.5}
                          className="transition-colors duration-200"
                        />

                        {/* Dividing line */}
                        <line
                          x1={CX + R_EMPIRES_INNER * Math.cos((epoch.startDeg * Math.PI) / 180)}
                          y1={CY + R_EMPIRES_INNER * Math.sin((epoch.startDeg * Math.PI) / 180)}
                          x2={CX + R_EMPIRES_OUTER * Math.cos((epoch.startDeg * Math.PI) / 180)}
                          y2={CY + R_EMPIRES_OUTER * Math.sin((epoch.startDeg * Math.PI) / 180)}
                          stroke="#C59B27"
                          strokeWidth="1.5"
                        />

                        {/* Content inside arc */}
                        <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                          <text
                            x={xM}
                            y={yM - 24}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={20}
                          >
                            {epoch.icon}
                          </text>

                          <text
                            x={xM}
                            y={yM}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={12}
                            fontWeight="900"
                            fill={isSelected ? '#FFE082' : '#2C1810'}
                            className="font-telugu-serif tracking-tight"
                          >
                            {isEn ? epoch.nameEn.split(' ')[0] : epoch.nameTe.split(' ')[0]}
                          </text>

                          <text
                            x={xM}
                            y={yM + 22}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={10}
                            fontWeight="bold"
                            fill={isSelected ? '#FFFFFF' : '#5D4037'}
                            className="font-mono"
                          >
                            {isEn ? epoch.periodEn.split('–')[0].trim() : epoch.periodTe.split('–')[0].trim()}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </>
              )}

              {/* MODE B: 24 DYNASTIES EXPANDED ACROSS FULL 360° WHEEL (15° Each Spoke) */}
              {scaleMode === 'spoke_360' && full360Segments.map(event => {
                const isSelected = selectedItem.kind === 'empire' && selectedItem.data.id === event.id;
                const isCurr = event.isCurrentTime;
                const path = describeArcSector(CX, CY, R_EMPIRES_INNER, R_EMPIRES_OUTER, event.startDeg, event.endDeg);

                const midRad = (event.midDeg * Math.PI) / 180;
                const rMid = (R_EMPIRES_OUTER + R_EMPIRES_INNER) / 2;
                const xM = CX + rMid * Math.cos(midRad);
                const yM = CY + rMid * Math.sin(midRad);

                let rot = event.midDeg + 90;
                if (event.midDeg > 0 && event.midDeg < 180) rot += 180;

                return (
                  <g
                    key={`spoke360-empire-${event.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'empire', data: event });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'yuga' ? 0.35 : 1}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#006064' : '#7B1113')
                          : (isCurr ? '#004D40' : (event.order % 2 === 0 ? '#FFFDF8' : '#FAF2E6'))
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#E8DCC4')}
                      strokeWidth={isSelected ? 4 : (isCurr ? 3 : 1.5)}
                      className="transition-colors duration-200"
                    />

                    {/* Dividing line */}
                    <line
                      x1={CX + R_EMPIRES_INNER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y1={CY + R_EMPIRES_INNER * Math.sin((event.startDeg * Math.PI) / 180)}
                      x2={CX + R_EMPIRES_OUTER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y2={CY + R_EMPIRES_OUTER * Math.sin((event.startDeg * Math.PI) / 180)}
                      stroke="#C59B27"
                      strokeWidth="1.5"
                    />

                    {/* Content inside 15-degree wedge */}
                    <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                      <text
                        x={xM}
                        y={yM - 26}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={20}
                      >
                        {event.icon}
                      </text>

                      <text
                        x={xM}
                        y={yM}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={13}
                        fontWeight="900"
                        fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#4E342E')}
                        className="font-telugu-serif tracking-tight"
                      >
                        {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                      </text>

                      <text
                        x={xM}
                        y={yM + 22}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={10}
                        fontWeight="bold"
                        fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#8D6E63')}
                        className="font-mono"
                      >
                        #{event.order}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 3: COSMIC ASCENDING & DESCENDING TRAJECTORY ARROWS      */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_ARROW_BAND} fill="none" stroke="#2C1810" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />

              {/* Ascending Cycle (Left Arc) */}
              <path
                d={`M ${CX - 150} ${CY + 85} A ${R_ARROW_BAND} ${R_ARROW_BAND} 0 0 1 ${CX - 60} ${CY - 165}`}
                fill="none"
                stroke="#2C1810"
                strokeWidth="3"
                markerEnd="url(#arrowHead)"
              />
              <text
                x={CX - 100}
                y={CY - 110}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={15}
                fontWeight="900"
                fill="#2C1810"
                className="font-telugu-serif select-none pointer-events-none"
              >
                ఆరోహణ చక్రం
              </text>
              <text
                x={CX - 100}
                y={CY - 90}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
                fill="#5D4037"
                className="font-serif select-none pointer-events-none"
              >
                (Ascending Cycle)
              </text>

              {/* Descending Cycle (Right Arc) */}
              <path
                d={`M ${CX + 60} ${CY - 165} A ${R_ARROW_BAND} ${R_ARROW_BAND} 0 0 1 ${CX + 150} ${CY + 85}`}
                fill="none"
                stroke="#2C1810"
                strokeWidth="3"
                markerEnd="url(#arrowHead)"
              />
              <text
                x={CX + 100}
                y={CY + 95}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={15}
                fontWeight="900"
                fill="#2C1810"
                className="font-telugu-serif select-none pointer-events-none"
              >
                అవరోహణ చక్రం
              </text>
              <text
                x={CX + 100}
                y={CY + 115}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
                fill="#5D4037"
                className="font-serif select-none pointer-events-none"
              >
                (Descending Cycle)
              </text>

              {/* ------------------------------------------------------------ */}
              {/* TIER 4: CENTER HUB — ASHOKA DHARMA CHAKRA & SELECTION        */}
              {/* ------------------------------------------------------------ */}
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_OUTER}
                fill="#FAF7F0"
                stroke="#2C1810"
                strokeWidth="4"
              />
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_MID}
                fill="url(#hubGradient)"
                stroke="#FFE082"
                strokeWidth="3"
                className="shadow-inner"
              />

              {/* 24 Spokes of Ashoka Chakra */}
              {Array.from({ length: 24 }).map((_, i) => {
                const spRad = (i * 15 * Math.PI) / 180;
                return (
                  <line
                    key={`hub-spoke-${i}`}
                    x1={CX + R_HUB_INNER * Math.cos(spRad)}
                    y1={CY + R_HUB_INNER * Math.sin(spRad)}
                    x2={CX + (R_HUB_MID - 4) * Math.cos(spRad)}
                    y2={CY + (R_HUB_MID - 4) * Math.sin(spRad)}
                    stroke="#3E1004"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}

              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_INNER}
                fill="#FFFDF8"
                stroke="#7B1113"
                strokeWidth="3.5"
              />

              {/* Large Centered Emoji and Name in Hub */}
              <text
                x={CX}
                y={CY - 22}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={34}
                className="pointer-events-none select-none"
              >
                {selectedItem.kind === 'yuga'
                  ? (selectedItem.data.category === 'kataklysmos' ? '🌊' : selectedItem.data.category === 'ekpyrosis' ? '🔥' : '⏳')
                  : selectedItem.data.icon}
              </text>

              <text
                x={CX}
                y={CY + 18}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontWeight="900"
                fill="#2A0800"
                className="pointer-events-none select-none font-telugu-serif"
              >
                {isEn 
                  ? (selectedItem.kind === 'yuga' 
                      ? getYugaEnglishDisplayName(selectedItem.data.category) 
                      : selectedItem.kind === 'asc_epoch'
                        ? selectedItem.data.nameEn.split(' ')[0]
                        : selectedItem.data.titleEn.split(' ')[0])
                  : (selectedItem.kind === 'yuga' 
                      ? getYugaTeluguDisplayName(selectedItem.data.category) 
                      : selectedItem.kind === 'asc_epoch'
                        ? selectedItem.data.nameTe.split(' ')[0]
                        : selectedItem.data.titleTe.split(' ')[0])}
              </text>

              <text
                x={CX}
                y={CY + 38}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={10}
                fontWeight="bold"
                fill="#7B1113"
                className="pointer-events-none select-none font-mono"
              >
                {selectedItem.kind === 'yuga' 
                  ? selectedItem.data.durationLabelEn 
                  : selectedItem.kind === 'asc_epoch'
                    ? selectedItem.data.periodEn.split('–')[0].trim()
                    : `#${selectedItem.data.order} Empire`}
              </text>

              {/* ------------------------------------------------------------ */}
              {/* TIER 5: SYNCHRONIZED CURRENT TIME (2026 CE) NEEDLE AT BOTTOM */}
              {/* ------------------------------------------------------------ */}
              {(() => {
                const bottomRad = (90 * Math.PI) / 180;
                const xPoint = CX + R_YUGA_OUTER * Math.cos(bottomRad);
                const yPoint = CY + R_YUGA_OUTER * Math.sin(bottomRad);

                return (
                  <g className="pointer-events-none">
                    <circle
                      cx={xPoint}
                      cy={yPoint}
                      r={24}
                      fill="url(#currentTimeAura)"
                      className="animate-ping"
                    />
                    <circle
                      cx={xPoint}
                      cy={yPoint}
                      r={12}
                      fill="#E53935"
                      stroke="#FFE082"
                      strokeWidth="3"
                    />
                    {/* Synchronized Needle Arrow pointing at the bottom (6 o'clock) */}
                    <line
                      x1={xPoint}
                      y1={yPoint + 42}
                      x2={xPoint}
                      y2={yPoint + 14}
                      stroke="#E53935"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${xPoint},${yPoint + 12} ${xPoint - 6},${yPoint + 26} ${xPoint + 6},${yPoint + 26}`}
                      fill="#E53935"
                    />
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Quick instructions and reset button below wheel */}
          <div className="w-full max-w-[720px] mt-4 flex items-center justify-between text-xs text-[#5D4037] px-2 font-medium">
            <span className="flex items-center gap-1.5 font-bold text-sm text-[#7B1113]">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              {isEn 
                ? 'Outer: 25,800y Yuga Cycle • Inner: 24 Indian Dynasties (Equal Scale)' 
                : 'బయటి: 25,800 ఏళ్ల యుగచక్రం • లోపలి: 24 భారత మహా సామ్రాజ్యాలు (ఒకే స్కేల్)'}
            </span>
            <button
              onClick={() => setRotationAngle(0)}
              className="hover:text-[#7B1113] hover:underline cursor-pointer font-bold text-xs"
            >
              {isEn ? 'Reset Position' : 'యథాస్థితికి తీసుకురా'}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: RICH DOSSIER CARD (LARGE CRISP FONTS)         */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4">
          
          <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-300">
            
            {/* Top Banner */}
            <div 
              className="p-5 sm:p-6 text-white relative overflow-hidden"
              style={{
                background: selectedItem.kind === 'yuga'
                  ? (selectedItem.data.category === 'kataklysmos'
                      ? 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #1565C0 100%)'
                      : selectedItem.data.category === 'ekpyrosis'
                        ? 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #880E4F 100%)'
                        : selectedItem.data.category === 'satya'
                          ? 'linear-gradient(135deg, #F57F17 0%, #FBC02D 50%, #E65100 100%)'
                          : selectedItem.data.category === 'treta'
                            ? 'linear-gradient(135deg, #E65100 0%, #FB8C00 50%, #BF360C 100%)'
                            : selectedItem.data.category === 'dwapara'
                              ? 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #33691E 100%)'
                              : 'linear-gradient(135deg, #311B92 0%, #4A148C 50%, #1A237E 100%)')
                  : selectedItem.kind === 'asc_epoch'
                    ? `linear-gradient(135deg, #3E1004 0%, ${selectedItem.data.accentColor} 60%, #1A0500 100%)`
                    : (selectedItem.data.isCurrentTime
                        ? 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #006064 100%)'
                        : `linear-gradient(135deg, #3E1004 0%, ${selectedItem.data.color} 60%, #1A0500 100%)`)
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-[#FFE082] text-xs font-mono font-bold">
                      {selectedItem.kind === 'yuga' 
                        ? 'OUTER RING: YUGA CYCLE' 
                        : selectedItem.kind === 'asc_epoch'
                          ? 'INNER RING: ASCENDING EPOCH'
                          : `INNER RING: DYNASTY #${selectedItem.data.order}`}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/40 text-white text-xs font-bold border border-white/20">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.cycleNameEn : selectedItem.data.cycleNameTe)
                        : selectedItem.kind === 'asc_epoch'
                          ? (isEn ? selectedItem.data.yugaEquivalentEn : selectedItem.data.yugaEquivalentTe)
                          : (isEn ? selectedItem.data.categoryEn : selectedItem.data.categoryTe)}
                    </span>
                  </div>

                  {((selectedItem.kind === 'yuga' && selectedItem.data.isCurrentTime) ||
                    (selectedItem.kind === 'empire' && selectedItem.data.isCurrentTime)) && (
                    <span className="px-3.5 py-1 rounded-full bg-cyan-400 text-cyan-950 text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-cyan-950" />
                      {isEn ? 'LIVE PRESENT TIME (2026 CE)' : 'ప్రస్తుత సమయ సూచిక (2026)'}
                    </span>
                  )}
                </div>

                {/* Title & Icon with Increased Font */}
                <div className="flex items-start gap-3.5 mt-4">
                  <span className="text-4xl p-2.5 rounded-2xl bg-black/30 border border-white/20 shadow-md">
                    {selectedItem.kind === 'yuga'
                      ? (selectedItem.data.category === 'kataklysmos' ? '🌊' : selectedItem.data.category === 'ekpyrosis' ? '🔥' : '⏳')
                      : selectedItem.data.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-telugu-serif text-[#FFE082] leading-tight">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.nameEn : selectedItem.data.nameTe)
                        : selectedItem.kind === 'asc_epoch'
                          ? (isEn ? selectedItem.data.nameEn : selectedItem.data.nameTe)
                          : (isEn ? selectedItem.data.titleEn : selectedItem.data.titleTe)}
                    </h2>
                    <div className="text-sm sm:text-base font-bold text-white/95 mt-1 font-mono">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.datesEn : selectedItem.data.datesTe)
                        : selectedItem.kind === 'asc_epoch'
                          ? (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)
                          : (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)}
                    </div>
                  </div>
                </div>

                {/* Duration / Years Badge */}
                <div className="mt-4 inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs sm:text-sm font-mono font-bold text-amber-300">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>
                    {selectedItem.kind === 'yuga'
                      ? `${selectedItem.data.durationYears.toLocaleString()} ${isEn ? 'Years' : 'సంవత్సరాలు'}`
                      : selectedItem.kind === 'asc_epoch'
                        ? (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)
                        : (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)}
                  </span>
                </div>
              </div>
            </div>

            {/* Special Live Real-Time Box if Current Time is selected */}
            {((selectedItem.kind === 'yuga' && selectedItem.data.isCurrentTime) ||
              (selectedItem.kind === 'empire' && selectedItem.data.isCurrentTime)) && (
              <div className="mx-4 sm:mx-6 mt-4 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-rose-950 to-red-900 text-white border-2 border-red-400 shadow-md">
                <div className="flex items-center justify-between gap-3 flex-wrap border-b border-red-400/30 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-xs uppercase font-black text-amber-300 tracking-wider">
                        {isEn ? 'Universal Temporal Coordinate' : 'ప్రస్తుత కాలమాన కేంద్రం'}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {isEn ? 'You are viewing NOW: 2026 CE / Kaliyuga 5127' : 'నేడు మనం జీవిస్తున్న క్షణం: 2026 CE / కలియుగం 5127'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-xl font-black text-amber-300">{formattedTime}</div>
                    <div className="text-xs text-amber-200">{formattedDate}</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                  {isEn 
                    ? 'In the 25,800-year cycle, 2025 CE marks the end of the 12,900-year Descending Arc. We are living in 2026 CE at the dawn of the 1,200-year Ekpyrosis transition entering ascending light!'
                    : '25,800 ఏళ్ల చక్రంలో 2025 క్రీ.శ. నాటికి 12,900 ఏళ్ల అవరోహణ చక్రం ముగిసింది. నేడు 2026 క్రీ.శ.లో మనం ఎక్పైరోసిస్ అగ్ని పరివర్తన కాలంలోకి ప్రవేశించి ఆరోహణ యుగపు దివ్య చైతన్యం వైపు అడుగులేస్తున్నాం!'}
                </p>
              </div>
            )}

            {/* Body Content with Increased Font */}
            <div className="p-5 sm:p-6 space-y-4 text-stone-800">
              
              {/* CASE 1: YUGA SEGMENT */}
              {selectedItem.kind === 'yuga' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Yuga Dynamics & Characteristics' : 'యుగ లక్షణాలు & కాల వికాసం'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3.5 rounded-xl border border-[#E8DCC4]">
                      {isEn ? selectedItem.data.descriptionEn : selectedItem.data.descriptionTe}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#1565C0] tracking-wide flex items-center gap-2">
                      <Orbit className="w-4 h-4 text-[#1E88E5]" />
                      <span>{isEn ? 'Cosmic & Spiritual Significance' : 'బ్రహ్మాండ తాత్విక ప్రాధాన్యత'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#1A237E] leading-relaxed font-medium bg-blue-50/70 p-3.5 rounded-xl border border-blue-200">
                      {isEn ? selectedItem.data.cosmicSignificanceEn : selectedItem.data.cosmicSignificanceTe}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#2E7D32] tracking-wide flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#43A047]" />
                      <span>{isEn ? 'Historical & Archeological Parallels' : 'చారిత్రక & పురావస్తు ఆధారాలు'}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {(isEn ? selectedItem.data.historicalParallelsEn : selectedItem.data.historicalParallelsTe).map((par, i) => (
                        <li key={i} className="flex items-start gap-2.5 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E8DCC4]">
                          <span className="text-[#D84315] font-black text-base mt-0.5">•</span>
                          <span className="leading-snug">{par}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* CASE 2: ASCENDING BHARAT EPOCH */}
              {selectedItem.kind === 'asc_epoch' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Epoch Evolution & Consciousness' : 'యుగ పరిణామం & చైతన్య వికాసం'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3.5 rounded-xl border border-[#E8DCC4]">
                      {isEn ? selectedItem.data.descriptionEn : selectedItem.data.descriptionTe}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>{isEn ? 'Cosmic Significance:' : 'బ్రహ్మాండ ప్రాధాన్యత:'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4E342E] font-medium leading-relaxed">
                      {isEn ? selectedItem.data.significanceEn : selectedItem.data.significanceTe}
                    </p>
                  </div>
                </>
              )}

              {/* CASE 3: INDIVIDUAL HISTORICAL EMPIRE (THE 24 DYNASTIES) */}
              {selectedItem.kind === 'empire' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Crown className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Prominent Rulers & Personalities' : 'ప్రముఖ చక్రవర్తులు & పాలకులు'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(isEn ? selectedItem.data.rulersEn : selectedItem.data.rulersTe).map((r, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs sm:text-sm font-bold border border-[#D4AF37]/50 shadow-2xs">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C99700]" />
                      <span>{isEn ? 'Capitals & Historic Regions' : 'రాజధానులు & చారిత్రక ప్రాంతాలు'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(isEn ? selectedItem.data.capitalsEn : selectedItem.data.capitalsTe).map((c, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] text-[#5D4037] text-xs sm:text-sm font-semibold border border-[#E8DCC4]">
                          🏛️ {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Pivotal Milestones & Events' : 'కీలక మైలురాళ్ళు & పరిణామాలు'}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {(isEn ? selectedItem.data.keyEventsEn : selectedItem.data.keyEventsTe).map((ev, i) => (
                        <li key={i} className="flex items-start gap-2.5 bg-[#FFFDF8] p-2.5 rounded-xl border border-[#E8DCC4]">
                          <span className="text-[#D84315] font-black text-base mt-0.5">•</span>
                          <span className="leading-snug">{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>{isEn ? 'What Changed in Indian History?' : 'చరిత్రలో వచ్చిన కీలక మార్పు:'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4E342E] font-medium leading-relaxed">
                      {isEn ? selectedItem.data.whatChangedEn : selectedItem.data.whatChangedTe}
                    </p>
                  </div>
                </>
              )}

              {/* Master Reference Poster Button */}
              <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="./images/indian_history/yuga_cycle_25800.jpg"
                    alt="Yuga Cycle 25800 Years Master Diagram"
                    className="w-16 h-16 rounded-xl object-cover border border-[#D4AF37] shadow-sm cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#7B1113]">
                      {isEn ? 'Master Reference Infographic' : 'మూల యుగచక్ర ఇన్ఫోగ్రాఫిక్'}
                    </div>
                    <button
                      onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
                      className="text-xs text-[#D84315] hover:underline font-bold flex items-center gap-1 cursor-pointer mt-0.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Zoom Poster HD' : 'విస్తరించి వీక్షించండి (HD)'}</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (selectedItem.kind === 'yuga') {
                      setSelectedItem({ kind: 'empire', data: INDIAN_HISTORY_CHAKRA_EVENTS[6] }); // Maurya
                    } else {
                      setSelectedItem({ kind: 'yuga', data: YUGA_CYCLE_25800_SEGMENTS[0] }); // Kataklysmos
                    }
                    playChime(640);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs sm:text-sm font-black transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{selectedItem.kind === 'yuga' ? (isEn ? 'Select 24 Dynasties' : '24 సామ్రాజ్యాల వలయం') : (isEn ? 'Select Yuga Ring' : 'యుగాల వలయం')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. LIGHTBOX MODAL FOR SOURCE POSTER                          */}
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
