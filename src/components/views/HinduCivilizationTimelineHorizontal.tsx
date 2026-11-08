import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  Sparkles, 
  Maximize2, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

interface HinduCivilizationTimelineHorizontalProps {
  onOpenLightbox?: (img: { src: string; title: string; subtitle: string }) => void;
}

export const HinduCivilizationTimelineHorizontal: React.FC<HinduCivilizationTimelineHorizontalProps> = ({
  onOpenLightbox
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'svg' | 'ramayana_mahabharata' | 'details' | 'disciplines'>('svg');
  const [selectedTopic, setSelectedTopic] = useState<'rigveda' | 'ramayana' | 'mahabharata' | 'yugas' | 'sciences' | null>(null);

  const imageSrc = './images/indian_history/timeline_of_hindu_civilization.jpg';
  const ramayanaMahabharataImageSrc = './images/indian_history/time_between_ramayana_and_mahabharata.png';

  const handleOpenImage = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: imageSrc,
        title: isEn ? 'Timeline of Hindu Civilization' : 'హిందూ నాగరికత కాలరేఖ (ఋగ్వేదం, రామాయణం, మహాభారతం)',
        subtitle: isEn 
          ? 'Rigveda, Ramayana (12209 BCE), Mahabharata (5561 BCE) & 12+ Hard Sciences' 
          : 'ఋగ్వేదం, రామాయణం (క్రీ.పూ. 12209), మహాభారతం (క్రీ.పూ. 5561) & 12+ ప్రాకృతిక విజ్ఞాన శాస్త్రాల ఆధారాలు'
      });
    }
  };

  const handleOpenRamayanaMahabharataImage = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: ramayanaMahabharataImageSrc,
        title: isEn ? 'Time between Ramayana & Mahabharata' : 'రామాయణం & మహాభారతం మధ్య కాల వ్యవధి',
        subtitle: isEn 
          ? 'End of 24th Treta-Yuga (1331 BC) to End of 28th Dwapara-Yuga (827 BC) • 42x = 504 Years (TheScienceOfTime.com)' 
          : '24వ త్రేతాయుగం (క్రీ.పూ. 1331) నుండి 28వ ద్వాపరయుగం (క్రీ.పూ. 827) • 42x = 504 సంవత్సరాలు, 16 తరాలు'
      });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DC]/60 rounded-3xl border-2 border-[#D4AF37] shadow-md p-4 sm:p-6 space-y-5 relative overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER & MULTI-CONTROL TOOLBAR                        */}
      {/* ============================================================ */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B1113] to-[#B71C1C] text-[#FFE082] flex items-center justify-center text-2xl shadow-sm border border-[#D4AF37] shrink-0">
            🕉️
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider shadow-2xs">
                {isEn ? 'Archaeo-Astronomy & Empirical Timeline' : 'ఖగోళ విజ్ఞాన & నిరూపిత చారిత్రక కాలరేఖ'}
              </span>
              <span className="text-xs font-mono font-bold text-[#D84315] bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-300">
                22,000+ BCE ➔ TODAY
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black font-telugu-serif text-[#7B1113] mt-1">
              {isEn ? 'Timeline of Hindu Civilization (Rigveda, Ramayana, Mahabharata)' : 'హిందూ నాగరికత కాలరేఖ (ఋగ్వేదం, రామాయణం, మహాభారతం)'}
            </h3>
            <p className="text-xs text-[#5D4037] font-medium">
              {isEn 
                ? 'Empirical dating synthesized from 1000+ testable evidences across 12+ disciplines of Hard Sciences'
                : '12+ ప్రాకృతిక విజ్ఞాన శాస్త్రాల నుండి 1000+ ప్రత్యక్ష శాస్త్రీయ ఆధారాలతో కూడిన ఖగోళ-చారిత్రక కాలరేఖ'}
            </p>
          </div>
        </div>

        {/* Action Buttons: View Modes & Original Chart Lightbox */}
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          <div className="flex items-center bg-white p-0.5 rounded-xl border border-[#D4AF37]/50 text-xs font-bold shadow-2xs">
            <button
              onClick={() => setActiveTab('svg')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'svg'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? 'Civilization Timeline' : 'నాగరికత కాలరేఖ'}
            </button>
            <button
              onClick={() => setActiveTab('ramayana_mahabharata')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ramayana_mahabharata'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              <span>{isEn ? 'Ramayana ➔ Mahabharata (42x)' : 'రామాయణ-మహాభారత వ్యవధి (42x)'}</span>
              <span className="px-1.5 py-0.2 rounded-md bg-[#D84315] text-[10px] text-white font-mono font-bold">504y</span>
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? 'Era Details' : 'యుగ విశేషాలు'}
            </button>
            <button
              onClick={() => setActiveTab('disciplines')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'disciplines'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? '12 Sciences' : '12 శాస్త్రాలు'}
            </button>
          </div>

          <button
            type="button"
            onClick={handleOpenImage}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FFE082] text-[#7B1113] border-2 border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            title={isEn ? "View Original Infographic Poster" : "మూల చిత్ర పటాన్ని వీక్షించండి"}
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Original Chart' : 'మూల పటం (Zoom)'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. HIGH-CLARITY SVG VECTOR ILLUSTRATION OF THE TIMELINE       */}
      {/* ============================================================ */}
      {activeTab === 'svg' && (
        <div className="p-3 sm:p-5 bg-white rounded-3xl border-2 border-amber-300 shadow-sm overflow-x-auto">
          <div className="min-w-[860px] max-w-5xl mx-auto">
            
            <svg 
              viewBox="0 0 1000 370" 
              className="w-full h-auto drop-shadow-xs select-none"
              style={{ minHeight: '340px' }}
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C1917" />
                  <stop offset="100%" stopColor="#0C0A09" />
                </linearGradient>

                <linearGradient id="ramayanaGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5722" />
                  <stop offset="100%" stopColor="#D84315" />
                </linearGradient>

                <linearGradient id="mahabharataGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD54F" />
                  <stop offset="100%" stopColor="#FFA000" />
                </linearGradient>

                <linearGradient id="arrowLead" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D6D3D1" />
                  <stop offset="100%" stopColor="#78716C" />
                </linearGradient>

                <linearGradient id="blueBannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1565C0" />
                  <stop offset="50%" stopColor="#1976D2" />
                  <stop offset="100%" stopColor="#0D47A1" />
                </linearGradient>

                <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* -------------------------------------------------------- */}
              {/* TOP SECTION: TITLE, RIGVEDA BOX & YUGA DOGMA            */}
              {/* -------------------------------------------------------- */}
              {/* Grand Main Title Banner in Diagram */}
              <rect x="250" y="10" width="500" height="38" rx="8" fill="#FFFDF8" stroke="#7B1113" strokeWidth="1.5" />
              <text x="500" y="27" textAnchor="middle" fill="#7B1113" fontSize="14" fontWeight="900" fontFamily="serif">
                Timeline of Hindu civilization
              </text>
              <text x="500" y="42" textAnchor="middle" fill="#5D4037" fontSize="11" fontWeight="700">
                (Rigveda, Ramayana, Mahabharata)
              </text>

              {/* RigVeda Epoch Dotted Box */}
              <g 
                onClick={() => setSelectedTopic('rigveda')} 
                className="cursor-pointer"
              >
                <title>Click for Rigveda Details</title>
                <rect 
                  x="230" 
                  y="58" 
                  width="360" 
                  height="34" 
                  rx="10" 
                  fill="#FFF8E1" 
                  stroke="#7B1113" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                />
                <text x="410" y="73" textAnchor="middle" fill="#7B1113" fontSize="13" fontWeight="900">
                  RigVeda
                </text>
                <text x="410" y="87" textAnchor="middle" fill="#D84315" fontSize="11" fontWeight="800" fontFamily="monospace">
                  22,000+ BCE through 6th millennium BCE
                </text>
              </g>

              {/* Yuga Dogma Annotation */}
              <g onClick={() => setSelectedTopic('yugas')} className="cursor-pointer">
                <text x="960" y="90" textAnchor="end" fill="#0288D1" fontSize="14" fontWeight="900" fontFamily="serif">
                  Yuga
                </text>
                <text x="960" y="106" textAnchor="end" fill="#0288D1" fontSize="14" fontWeight="900" fontFamily="serif">
                  Dogma
                </text>
                <text x="580" y="112" textAnchor="middle" fill="#0277BD" fontSize="12" fontWeight="800" fontFamily="monospace">
                  1728K (Satya/Krita) – 1296K (Treta) – 864K (Dwapara) – 432K (Kali)
                </text>
              </g>

              {/* -------------------------------------------------------- */}
              {/* YUGA ERA LABELS ABOVE THE AXIS                           */}
              {/* -------------------------------------------------------- */}
              {/* Treta Label */}
              <text x="475" y="132" textAnchor="middle" fill="#7B1113" fontSize="14" fontWeight="800" fontFamily="serif">
                Treta (త్రేతాయుగం)
              </text>

              {/* Dwapara Label */}
              <text x="640" y="132" textAnchor="middle" fill="#7B1113" fontSize="14" fontWeight="800" fontFamily="serif">
                Dwapara (ద్వాపరం)
              </text>

              {/* Kali Label */}
              <text x="735" y="132" textAnchor="middle" fill="#C2185B" fontSize="14" fontWeight="900" fontFamily="serif">
                Kali (కలి)
              </text>

              {/* -------------------------------------------------------- */}
              {/* SCALE TICK MARKERS ABOVE THE BAR (-20K, -15K, -10K, -5K, 0, TODAY) */}
              {/* -------------------------------------------------------- */}
              {/* -20K Marker */}
              <g transform="translate(190, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800" fontFamily="monospace">- 20K</text>
                <polygon points="0,5 -5,12 5,12" fill="#1C1917" />
              </g>

              {/* -15K Marker */}
              <g transform="translate(340, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800" fontFamily="monospace">- 15K</text>
                <polygon points="0,5 -5,12 5,12" fill="#1C1917" />
              </g>

              {/* -10K Marker */}
              <g transform="translate(490, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800" fontFamily="monospace">- 10K</text>
                <polygon points="0,5 -5,12 5,12" fill="#1C1917" />
              </g>

              {/* -5K Marker */}
              <g transform="translate(650, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800" fontFamily="monospace">- 5K</text>
                <polygon points="0,5 -5,12 5,12" fill="#1C1917" />
              </g>

              {/* 0 (CE 1) Marker */}
              <g transform="translate(810, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800" fontFamily="monospace">0</text>
                <polygon points="0,5 -5,12 5,12" fill="#1C1917" />
              </g>

              {/* TODAY Marker */}
              <g transform="translate(875, 140)">
                <text x="0" y="0" textAnchor="middle" fill="#D84315" fontSize="11" fontWeight="900" fontFamily="monospace">TODAY</text>
                <polygon points="0,5 -5,12 5,12" fill="#D84315" />
              </g>

              {/* -------------------------------------------------------- */}
              {/* THE HORIZONTAL BAR (OBSIDIAN WITH WHITE DIVIDERS & GLOW)  */}
              {/* -------------------------------------------------------- */}
              {/* Left Incoming Arrow (from 22K+ BCE) */}
              <polygon points="40,165 175,165 185,173 175,181 40,181 50,173" fill="url(#arrowLead)" />
              <text x="110" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="monospace">
                ← 22K+ BCE
              </text>

              {/* Main Solid Black Bar Segments (Height 26px) */}
              <rect x="185" y="160" width="690" height="26" rx="3" fill="url(#barGradient)" />

              {/* White divider lines at 5K boundaries */}
              <line x1="340" y1="160" x2="340" y2="186" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="490" y1="160" x2="490" y2="186" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="650" y1="160" x2="650" y2="186" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="810" y1="160" x2="810" y2="186" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="875" y1="160" x2="875" y2="186" stroke="#D84315" strokeWidth="2.5" />

              {/* Ramayana Highlight Strip on the bar at X=425 */}
              <g onClick={() => setSelectedTopic('ramayana')} className="cursor-pointer">
                <rect x="423" y="157" width="8" height="32" rx="2" fill="url(#ramayanaGlow)" stroke="#FFFFFF" strokeWidth="1" />
              </g>

              {/* Mahabharata Highlight Strip on the bar at X=635 */}
              <g onClick={() => setSelectedTopic('mahabharata')} className="cursor-pointer">
                <rect x="633" y="157" width="8" height="32" rx="2" fill="url(#mahabharataGlow)" stroke="#FFFFFF" strokeWidth="1" />
              </g>

              {/* Right Outgoing Dashed Future Arrow */}
              <g transform="translate(880, 160)">
                <polygon 
                  points="0,0 80,0 95,13 80,26 0,26" 
                  fill="#FFFDF8" 
                  stroke="#78716C" 
                  strokeWidth="2" 
                  strokeDasharray="4 3" 
                />
                <text x="40" y="17" textAnchor="middle" fill="#78716C" fontSize="10" fontWeight="700" fontFamily="monospace">
                  Future →
                </text>
              </g>

              {/* -------------------------------------------------------- */}
              {/* BOTTOM SECTION: RAMAYANA (12209 BCE) & MAHABHARATA (5561 BCE) */}
              {/* -------------------------------------------------------- */}
              {/* RAMAYANA LANDMARK (X=427) */}
              <g 
                transform="translate(427, 192)" 
                onClick={() => setSelectedTopic('ramayana')}
                className="cursor-pointer group"
              >
                {/* Connecting arrow pointing up */}
                <polygon points="0,-4 -6,5 6,5" fill="#D84315" />
                <line x1="0" y1="5" x2="0" y2="14" stroke="#D84315" strokeWidth="2" />

                {/* Card Container */}
                <rect 
                  x="-95" 
                  y="14" 
                  width="190" 
                  height="72" 
                  rx="12" 
                  fill="#FFFDF8" 
                  stroke="#D84315" 
                  strokeWidth="2" 
                  filter="url(#cardShadow)" 
                />

                {/* Date Badge */}
                <rect x="-65" y="22" width="130" height="20" rx="6" fill="#D84315" />
                <text x="0" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="monospace">
                  ▲ 12209 BCE
                </text>

                {/* Titles */}
                <text x="0" y="58" textAnchor="middle" fill="#7B1113" fontSize="14" fontWeight="900" fontFamily="serif">
                  Ramayana (రామాయణం)
                </text>
                <text x="0" y="74" textAnchor="middle" fill="#5D4037" fontSize="9.5" fontWeight="700">
                  బ్రహ్మరాశి / అభిజిత్ ధ్రువతార • నిరూపిత ఖగోళ కాలం
                </text>
              </g>

              {/* MAHABHARATA LANDMARK (X=637) */}
              <g 
                transform="translate(637, 192)" 
                onClick={() => setSelectedTopic('mahabharata')}
                className="cursor-pointer group"
              >
                {/* Connecting arrow pointing up */}
                <polygon points="0,-4 -6,5 6,5" fill="#C99700" />
                <line x1="0" y1="5" x2="0" y2="14" stroke="#C99700" strokeWidth="2" />

                {/* Card Container */}
                <rect 
                  x="-95" 
                  y="14" 
                  width="190" 
                  height="72" 
                  rx="12" 
                  fill="#FFFDF8" 
                  stroke="#C99700" 
                  strokeWidth="2" 
                  filter="url(#cardShadow)" 
                />

                {/* Date Badge */}
                <rect x="-60" y="22" width="120" height="20" rx="6" fill="#7B1113" />
                <text x="0" y="36" textAnchor="middle" fill="#FFE082" fontSize="12" fontWeight="900" fontFamily="monospace">
                  ▲ 5561 BCE
                </text>

                {/* Titles */}
                <text x="0" y="58" textAnchor="middle" fill="#7B1113" fontSize="14" fontWeight="900" fontFamily="serif">
                  Mahabharata (మహాభారతం)
                </text>
                <text x="0" y="74" textAnchor="middle" fill="#5D4037" fontSize="9.5" fontWeight="700">
                  అరుంధతీ-వసిష్ఠ చలనం • 300+ ఖగోళ ఆధారాలు
                </text>
              </g>

              {/* -------------------------------------------------------- */}
              {/* BOTTOM SECTION: 12 HARD SCIENCES BLUE BANNER             */}
              {/* -------------------------------------------------------- */}
              <g 
                transform="translate(120, 310)" 
                onClick={() => setSelectedTopic('sciences')}
                className="cursor-pointer"
              >
                <rect 
                  x="0" 
                  y="0" 
                  width="760" 
                  height="36" 
                  rx="18" 
                  fill="url(#blueBannerGrad)" 
                  stroke="#FFD54F" 
                  strokeWidth="1.5" 
                  filter="url(#cardShadow)" 
                />
                <text x="380" y="23" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
                  ★ 1000+ empirical, objectively testable evidence from 12+ disciplines of Hard sciences ★
                </text>
              </g>

            </svg>

          </div>

          {/* Quick Teaser Link to Ramayana-Mahabharata 42x Analysis */}
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 rounded-2xl border-2 border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 rounded-xl bg-white shadow-2xs border border-amber-200 shrink-0">⏳</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#D84315] text-white uppercase tracking-wider">
                    {isEn ? 'Micro-Yuga Chronology' : 'సూక్ష్మ యుగ కాలగణన'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7B1113]">
                    1331 B.C. ➔ 827 B.C. (42x = 504 Years)
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#7B1113] mt-0.5">
                  {isEn ? 'Time between Ramayana & Mahabharata (24th Treta to 28th Dwapara)' : 'రామాయణం & మహాభారతం మధ్య కాల వ్యవధి (24వ త్రేతాయుగం నుండి 28వ ద్వాపరయుగం)'}
                </h4>
                <p className="text-[11px] text-[#5D4037]">
                  {isEn 
                    ? 'Explore 16 dynastic generations across 42x intervals (504 years) where 1 Mahayuga = 120 years.' 
                    : '1 మహాయుగం = 120 సం|| (10x) సూత్రంతో 5 యుగ చక్రాలు, 16 ఇక్ష్వాకు తరాల గణిత సమన్వయ పరిశీలన.'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('ramayana_mahabharata')}
              className="px-4 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer transition-all"
            >
              <span>{isEn ? 'Explore 42x Model' : '42x విశ్లేషణను చూడండి'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3A. RAMAYANA TO MAHABHARATA (42x = 504 YEARS) VIEW           */}
      {/* ============================================================ */}
      {activeTab === 'ramayana_mahabharata' && (
        <div className="space-y-4">
          {/* Main Vector Box */}
          <div className="p-3 sm:p-5 bg-white rounded-3xl border-2 border-amber-300 shadow-sm space-y-4 overflow-x-auto">
            
            {/* Top Toolbar for this view */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">⏳</span>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                    {isEn ? 'Time between Ramayana & Mahabharata' : 'రామాయణం & మహాభారతం మధ్య కాల వ్యవధి'}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#D84315] text-white">
                    42x = 504 Years
                  </span>
                </div>
                <p className="text-xs text-[#5D4037] mt-0.5">
                  {isEn 
                    ? 'Puranic genealogical chronology connecting End of 24th Treta-Yuga (1331 B.C.) to End of 28th Dwapara-Yuga (827 B.C.)'
                    : '24వ త్రేతాయుగం (క్రీ.పూ. 1331) నుండి 28వ ద్వాపరయుగం (క్రీ.పూ. 827) వరకు 16 తరాలు & 42x కాలగణన సూత్రం'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenRamayanaMahabharataImage}
                className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Diagram (Zoom)' : 'మూల పటం వీక్షించండి (Zoom)'}</span>
              </button>
            </div>

            {/* SVG Illustration of the 42x Striped Bar */}
            <div className="min-w-[880px] max-w-5xl mx-auto py-2">
              <svg 
                viewBox="0 0 1000 270" 
                className="w-full h-auto drop-shadow-xs select-none"
                style={{ minHeight: '260px' }}
              >
                {/* Title */}
                <text x="500" y="24" textAnchor="middle" fill="#0288D1" fontSize="18" fontWeight="900" fontFamily="serif">
                  Time between Ramayana &amp; Mahabharata
                </text>
                <text x="500" y="42" textAnchor="middle" fill="#4B5563" fontSize="11" fontWeight="700">
                  2016 © TheScienceOfTime.com
                </text>

                {/* -------------------------------------------------------- */}
                {/* LEFT MARKER: BIRTH OF RAMA (1331 B.C.)                   */}
                {/* -------------------------------------------------------- */}
                <g transform="translate(196, 0)">
                  <text x="0" y="65" textAnchor="middle" fill="#000000" fontSize="13.5" fontWeight="900">
                    Birth of Rama
                  </text>
                  <text x="0" y="80" textAnchor="middle" fill="#7B1113" fontSize="12" fontWeight="700" fontStyle="italic">
                    End of 24th Treta-Yuga
                  </text>
                  <text x="0" y="97" textAnchor="middle" fill="#0D47A1" fontSize="14" fontWeight="900" fontFamily="monospace">
                    1331 B.C.
                  </text>
                  <line x1="0" y1="102" x2="0" y2="180" stroke="#00BCD4" strokeWidth="2.5" />
                </g>

                {/* -------------------------------------------------------- */}
                {/* RIGHT MARKER: MAHABHARATA WAR (827 B.C.)                 */}
                {/* -------------------------------------------------------- */}
                <g transform="translate(868, 0)">
                  <text x="0" y="65" textAnchor="middle" fill="#000000" fontSize="13.5" fontWeight="900">
                    Mahabharata War
                  </text>
                  <text x="0" y="80" textAnchor="middle" fill="#7B1113" fontSize="12" fontWeight="700" fontStyle="italic">
                    End of 28th Dwapara-Yuga
                  </text>
                  <text x="0" y="97" textAnchor="middle" fill="#0D47A1" fontSize="14" fontWeight="900" fontFamily="monospace">
                    827 B.C.
                  </text>
                  <line x1="0" y1="102" x2="0" y2="180" stroke="#00BCD4" strokeWidth="2.5" />
                </g>

                {/* -------------------------------------------------------- */}
                {/* CENTRAL SPAN & INTERVAL LABELS                            */}
                {/* -------------------------------------------------------- */}
                <text x="532" y="108" textAnchor="middle" fill="#374151" fontSize="13.5" fontWeight="900" fontFamily="monospace">
                  42x, 504 years (1331-827)
                </text>

                {/* Unit breakdown above the bar */}
                <g fill="#4B5563" fontSize="13" fontWeight="800" textAnchor="middle">
                  <text x="220" y="128">3x</text>
                  <text x="324" y="128">10x</text>
                  <text x="484" y="128">10x</text>
                  <text x="644" y="128">10x</text>
                  <text x="796" y="128">9x</text>

                  {/* Partition lines between sub-intervals */}
                  <line x1="196" y1="116" x2="196" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                  <line x1="244" y1="116" x2="244" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                  <line x1="404" y1="116" x2="404" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                  <line x1="564" y1="116" x2="564" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                  <line x1="724" y1="116" x2="724" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                  <line x1="868" y1="116" x2="868" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                </g>

                {/* -------------------------------------------------------- */}
                {/* 5-CYCLE STRIPED TIMELINE BAR                             */}
                {/* -------------------------------------------------------- */}
                {/* Render the 50 units (each 16px wide, total 800px from X=84 to X=884) */}
                <g>
                  {[
                    // Cycle 24 (X=84 to 244)
                    { x: 84, w: 16, fill: '#FFFFFF' }, { x: 100, w: 16, fill: '#FFFFFF' }, { x: 116, w: 16, fill: '#FFFFFF' }, { x: 132, w: 16, fill: '#FFFFFF' },
                    { x: 148, w: 16, fill: '#FACC15' }, { x: 164, w: 16, fill: '#FACC15' }, { x: 180, w: 16, fill: '#FACC15' },
                    { x: 196, w: 16, fill: '#FB923C' }, { x: 212, w: 16, fill: '#FB923C' },
                    { x: 228, w: 16, fill: '#64748B' },

                    // Cycle 25 (X=244 to 404)
                    { x: 244, w: 16, fill: '#FFFFFF' }, { x: 260, w: 16, fill: '#FFFFFF' }, { x: 276, w: 16, fill: '#FFFFFF' }, { x: 292, w: 16, fill: '#FFFFFF' },
                    { x: 308, w: 16, fill: '#FACC15' }, { x: 324, w: 16, fill: '#FACC15' }, { x: 340, w: 16, fill: '#FACC15' },
                    { x: 356, w: 16, fill: '#FB923C' }, { x: 372, w: 16, fill: '#FB923C' },
                    { x: 388, w: 16, fill: '#64748B' },

                    // Cycle 26 (X=404 to 564)
                    { x: 404, w: 16, fill: '#FFFFFF' }, { x: 420, w: 16, fill: '#FFFFFF' }, { x: 436, w: 16, fill: '#FFFFFF' }, { x: 452, w: 16, fill: '#FFFFFF' },
                    { x: 468, w: 16, fill: '#FACC15' }, { x: 484, w: 16, fill: '#FACC15' }, { x: 500, w: 16, fill: '#FACC15' },
                    { x: 516, w: 16, fill: '#FB923C' }, { x: 532, w: 16, fill: '#FB923C' },
                    { x: 548, w: 16, fill: '#64748B' },

                    // Cycle 27 (X=564 to 724)
                    { x: 564, w: 16, fill: '#FFFFFF' }, { x: 580, w: 16, fill: '#FFFFFF' }, { x: 596, w: 16, fill: '#FFFFFF' }, { x: 612, w: 16, fill: '#FFFFFF' },
                    { x: 628, w: 16, fill: '#FACC15' }, { x: 644, w: 16, fill: '#FACC15' }, { x: 660, w: 16, fill: '#FACC15' },
                    { x: 676, w: 16, fill: '#FB923C' }, { x: 692, w: 16, fill: '#FB923C' },
                    { x: 708, w: 16, fill: '#64748B' },

                    // Cycle 28 (X=724 to 884)
                    { x: 724, w: 16, fill: '#FFFFFF' }, { x: 740, w: 16, fill: '#FFFFFF' }, { x: 756, w: 16, fill: '#FFFFFF' }, { x: 772, w: 16, fill: '#FFFFFF' },
                    { x: 788, w: 16, fill: '#FACC15' }, { x: 804, w: 16, fill: '#FACC15' }, { x: 820, w: 16, fill: '#FACC15' },
                    { x: 836, w: 16, fill: '#FB923C' }, { x: 852, w: 16, fill: '#FB923C' },
                    { x: 868, w: 16, fill: '#64748B' }
                  ].map((seg, idx) => (
                    <rect 
                      key={idx} 
                      x={seg.x} 
                      y={136} 
                      width={seg.w} 
                      height={36} 
                      fill={seg.fill} 
                      stroke="#475569" 
                      strokeWidth="0.8" 
                    />
                  ))}

                  {/* Outer border container */}
                  <rect x="84" y="136" width="800" height="36" fill="none" stroke="#7B1113" strokeWidth="2.5" />
                </g>

                {/* -------------------------------------------------------- */}
                {/* GREEN CYCLE MARKERS & TICKS (24, 25, 26, 27, 28)         */}
                {/* -------------------------------------------------------- */}
                <g stroke="#16A34A" strokeWidth="2.5">
                  <line x1="84" y1="172" x2="84" y2="216" />
                  <line x1="244" y1="172" x2="244" y2="216" />
                  <line x1="404" y1="172" x2="404" y2="216" />
                  <line x1="564" y1="172" x2="564" y2="216" />
                  <line x1="724" y1="172" x2="724" y2="216" />
                  <line x1="884" y1="172" x2="884" y2="216" />

                  {/* Baseline */}
                  <line x1="84" y1="216" x2="884" y2="216" />
                </g>

                {/* Big Green Cycle Numbers */}
                <g fill="#15803D" fontSize="26" fontWeight="900" fontFamily="sans-serif">
                  <text x="96" y="206">24</text>
                  <text x="256" y="206">25</text>
                  <text x="416" y="206">26</text>
                  <text x="576" y="206">27</text>
                  <text x="736" y="206">28</text>
                </g>

                {/* -------------------------------------------------------- */}
                {/* YUGA COLOR LEGEND                                        */}
                {/* -------------------------------------------------------- */}
                <g transform="translate(160, 246)" fontSize="11" fontWeight="700">
                  {/* Satya */}
                  <rect x="0" y="0" width="14" height="14" fill="#FFFFFF" stroke="#475569" strokeWidth="1" />
                  <text x="20" y="11" fill="#374151">Satya (4x)</text>

                  {/* Treta */}
                  <rect x="150" y="0" width="14" height="14" fill="#FACC15" stroke="#475569" strokeWidth="1" />
                  <text x="170" y="11" fill="#374151">Treta (3x)</text>

                  {/* Dwapara */}
                  <rect x="310" y="0" width="14" height="14" fill="#FB923C" stroke="#475569" strokeWidth="1" />
                  <text x="330" y="11" fill="#374151">Dwapara (2x)</text>

                  {/* Kali */}
                  <rect x="470" y="0" width="14" height="14" fill="#64748B" stroke="#475569" strokeWidth="1" />
                  <text x="490" y="11" fill="#374151">Kali (1x)</text>

                  {/* Total Mahayuga */}
                  <text x="590" y="11" fill="#7B1113" fontWeight="900">1 Mahayuga = 10x = 120y</text>
                </g>
              </svg>
            </div>

          </div>

          {/* 3 Detailed Explanatory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: Mathematical Formula & Yuga Subdivisions */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-300 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📐</span>
                  <h5 className="font-black text-[#7B1113] text-sm sm:text-base font-telugu-serif">
                    {isEn ? 'Mathematical Breakdown' : 'గణిత సూత్ర విశ్లేషణ'}
                  </h5>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-xs font-mono font-black">
                  42x = 504 ➔ x = 12
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 font-mono space-y-1">
                  <div className="flex justify-between items-center text-[#7B1113] font-bold text-sm">
                    <span>Maha-Yuga (10x):</span>
                    <span className="text-base text-[#D84315]">120 Years</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-700">
                    <span>• Satya-Yuga (4x):</span>
                    <span className="font-bold">48 Years</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-700">
                    <span>• Treta-Yuga (3x):</span>
                    <span className="font-bold">36 Years</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-700">
                    <span>• Dwapara-Yuga (2x):</span>
                    <span className="font-bold">24 Years</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-700">
                    <span>• Kali-Yuga (x):</span>
                    <span className="font-bold">12 Years</span>
                  </div>
                </div>

                <p className="text-[#5D4037] text-[11px] leading-relaxed">
                  {isEn 
                    ? 'Maintains the exact canonical 4:3:2:1 Vedic ratio. In human biological scale, 120 years corresponds to the Vedic Paramayus (human lifespan).' 
                    : 'వేద శాస్త్రోక్తమైన 4:3:2:1 నిష్పత్తిని ఇది ఖచ్చితంగా నిలుపుతుంది. మానవ జీవితంలో 120 సంవత్సరాలు వేదంలో పేర్కొన్న పూర్ణ ఆయుర్దాయం (శతాయుర్వై పురుషః).'}
                </p>
              </div>
            </div>

            {/* Card 2: Dynastic Generations & Modern Era */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-300 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">👑</span>
                  <h5 className="font-black text-[#1B5E20] text-sm sm:text-base font-telugu-serif">
                    {isEn ? '16 Generations Validation' : '16 తరాల వంశావళి నిరూపణ'}
                  </h5>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#1B5E20] text-white text-xs font-mono font-bold">
                  ~31.5 Yrs / Gen
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-800 leading-relaxed">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 font-medium">
                  <div className="flex items-center justify-between">
                    <span>{isEn ? 'Generations between Rama & Mahabharata:' : 'శ్రీరాముడు - మహాభారత కాలాల మధ్య తరాలు:'}</span>
                    <span className="font-bold text-emerald-800">16 Generations</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{isEn ? 'Total Dynastic Timespan:' : 'మొత్తం రాజవంశ కాలవ్యవధి:'}</span>
                    <span className="font-bold text-emerald-800">~ 504 Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{isEn ? 'Average Generation Span:' : 'సగటున ఒక్కో తరం కాలం:'}</span>
                    <span className="font-bold text-emerald-800">~ 31.5 Years</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-900 space-y-1">
                  <div>
                    <strong>{isEn ? 'Start of Present Era:' : 'ప్రస్తుత యుగ శకం ప్రారంభం:'}</strong> 4174 B.C. (7th Manvantara)
                  </div>
                  <div>
                    <strong>{isEn ? '2016 C.E. Position:' : '2016 నాటి స్థితి:'}</strong> 33rd Year of 52nd Treta-Yuga
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Synthesis of Two Perspectives */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-purple-300 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚖️</span>
                  <h5 className="font-black text-[#4A148C] text-sm sm:text-base font-telugu-serif">
                    {isEn ? 'Synthesis of Chronologies' : 'రెండు కాలగణనల సమన్వయం'}
                  </h5>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-[#4A148C] text-[10px] font-bold">
                  {isEn ? 'Comparative Study' : 'తులనాత్మక అధ్యయనం'}
                </span>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-[#2C1810]">
                <div className="p-2 rounded-xl bg-purple-50/70 border border-purple-200">
                  <div className="font-bold text-[#4A148C]">
                    {isEn ? '1. Deep Archaeo-Astronomy (Nilesh Oak):' : '1. ఖగోళ శాస్త్ర నిర్ధారణ (అభిజిత్, అరుంధతి):'}
                  </div>
                  <p className="text-[11px] text-stone-700 mt-0.5">
                    {isEn 
                      ? 'Ramayana: 12209 BCE & Mahabharata: 5561 BCE based directly on celestial observation logs in Valmiki and Vyasa epics.' 
                      : 'రామాయణంలో అభిజిత్ ధ్రువతార స్థానం (క్రీ.పూ. 12209), మహాభారతంలో అరుంధతీ-వసిష్ఠ సంయోగం (క్రీ.పూ. 5561) ఖగోళ దృశ్యాలను నిరూపిస్తాయి.'}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200">
                  <div className="font-bold text-[#B45309]">
                    {isEn ? '2. Puranic Micro-Yuga Chronology (1331-827 BC):' : '2. పురాణ సూక్ష్మ యుగ కాలగణన (క్రీ.పూ. 1331-827):'}
                  </div>
                  <p className="text-[11px] text-stone-700 mt-0.5">
                    {isEn 
                      ? 'Harmonizes the 16-generation king lists recorded in Matsya/Vayu Puranas using the 120-year Mahayuga human cycle across 24th to 28th Yugas.' 
                      : 'పురాణాల్లో పేర్కొన్న శ్రీరాముడు ➔ బృహద్బలుని మధ్యగల 16 తరాల ఇక్ష్వాకు వంశావళిని 120 ఏళ్ళ సూక్ష్మ మహాయుగంతో సమన్వయపరుస్తుంది.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3B. ERA DETAILS VIEW (INTERACTIVE CARDS)                     */}
      {/* ============================================================ */}
      {activeTab === 'details' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Rigveda Epoch */}
          <div 
            onClick={() => setSelectedTopic('rigveda')}
            className="p-4 rounded-2xl bg-white border-2 border-amber-300 hover:border-[#7B1113] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📜</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113]">
                  22,000+ BCE
                </span>
              </div>
              <h4 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Rigveda Epoch' : 'ఋగ్వేద కాలగణన'}
              </h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Astronomical equinoxes recorded in Mrigashira (Orion), Punarvasu, and Krittika. Perennial Saraswati river flow from mountain to ocean.'
                  : 'మృగశిర, పునర్వసు, కృత్తికలలో విషువత్తుల వర్ణనలు. హిమాలయాల నుండి సముద్రం వరకు నిండుగా ప్రవహించిన సరస్వతీ నది ఖగోళ, భూగర్భ ఆధారాలు.'}
              </p>
            </div>
            <div className="pt-3 border-t border-[#F4EEDF] flex items-center justify-between text-xs text-[#D84315] font-bold">
              <span>{isEn ? 'Archaeo-astronomy' : 'వివరాలు చూడండి'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Ramayana */}
          <div 
            onClick={() => setSelectedTopic('ramayana')}
            className="p-4 rounded-2xl bg-white border-2 border-[#D84315] hover:border-[#7B1113] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🏹</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#D84315] text-white">
                  12209 BCE
                </span>
              </div>
              <h4 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Ramayana Dating' : 'రామాయణ కాల నిర్ధారణ'}
              </h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Abhijit (Vega) as Pole Star, solar eclipses at Dandakaranya, planetary alignments on Chaitra Shukla Navami validated by Nilesh Oak.'
                  : 'అభిజిత్ నక్షత్రం ధ్రువతారగా ఉన్న కాలం, దండకారణ్యంలో సంభవించిన సూర్యగ్రహణాలు, శ్రీరామ జనన గ్రహస్థితుల ఖగోళ సాక్ష్యాలు.'}
              </p>
            </div>
            <div className="pt-3 border-t border-[#F4EEDF] flex items-center justify-between text-xs text-[#D84315] font-bold">
              <span>{isEn ? 'Treta Yuga Convergence' : 'వివరాలు చూడండి'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Mahabharata */}
          <div 
            onClick={() => setSelectedTopic('mahabharata')}
            className="p-4 rounded-2xl bg-white border-2 border-[#C99700] hover:border-[#7B1113] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">⚔️</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082]">
                  5561 BCE
                </span>
              </div>
              <h4 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Mahabharata Dating' : 'మహాభారత కాల నిర్ధారణ'}
              </h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Arundhati walking ahead of Vasistha (11091 BCE to 4508 BCE epoch), 300+ planetary records in Vyasa epic, Saturn at Rohini.'
                  : 'అరుంధతీ-వసిష్ఠ విచిత్ర చలనం, వ్యాస మహాభారతంలోని 300+ ఖగోళ శ్లోకాలు, కార్తీక అమావాస్య, రోహిణిలో శని మొదలైన తిరుగులేని ఆధారాలు.'}
              </p>
            </div>
            <div className="pt-3 border-t border-[#F4EEDF] flex items-center justify-between text-xs text-[#D84315] font-bold">
              <span>{isEn ? 'Dwapara-Kali Epoch' : 'వివరాలు చూడండి'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3C. 12 DISCIPLINES VIEW (SCIENTIFIC PROOF)                    */}
      {/* ============================================================ */}
      {activeTab === 'disciplines' && (
        <div className="p-4 sm:p-5 bg-white rounded-3xl border-2 border-blue-300 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-blue-100 pb-2.5">
            <ShieldCheck className="w-5 h-5 text-[#1565C0]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1565C0] font-telugu-serif">
              {isEn 
                ? '12+ Disciplines of Hard Sciences Validating Hindu Civilization Antiquity' 
                : 'హిందూ నాగరికత ప్రాచీనతను నిరూపిస్తున్న 12+ ప్రాకృతిక విజ్ఞాన శాస్త్ర విభాగాలు'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
            {[
              { num: '01', en: 'Astronomy & Celestial Mechanics', te: 'ఖగోళ విజ్ఞానం & గ్రహగతులు', icon: '🔭' },
              { num: '02', en: 'Oceanography & Marine Archaeology', te: 'సముద్ర గర్భ పరిశోధన (ద్వారక & కాంబే)', icon: '🌊' },
              { num: '03', en: 'Geology & Hydrology (Saraswati River)', te: 'భూగర్భ జల శాస్త్రం (సరస్వతీ నది బేసిన్)', icon: '⛰️' },
              { num: '04', en: 'Ancient Genetics (aDNA Continuity)', te: 'ప్రాచీన జన్యు విశ్లేషణ (రాఖీగర్హి aDNA)', icon: '🧬' },
              { num: '05', en: 'Climatology & Paleoclimate Monsoons', te: 'వాతావరణ & ప్రాచీన రుతుపవన శాస్త్రం', icon: '🌦️' },
              { num: '06', en: 'Field Archaeology (Sanauli, Lothal)', te: 'పురావస్తు త్రవ్వకాలు & రథాల పరిశోధన', icon: '🏺' },
              { num: '07', en: 'Dendrochronology (Tree-ring Dating)', te: 'వృక్ష వలయ కాలగణన పద్ధతులు', icon: '🌲' },
              { num: '08', en: 'Radiocarbon & OSL Luminescence', te: 'రేడియో కార్బన్ & OSL లూమినిసెన్స్', icon: '⚛️' },
              { num: '09', en: 'Bathymetry & Sea-level Shift Analysis', te: 'సముద్ర మట్టాల మార్పులు & బాతీమెట్రీ', icon: '🧭' },
              { num: '10', en: 'Archaeo-Metallurgy (Copper & Early Iron)', te: 'ప్రాచీన లోహ సంగ్రహణ & ఇనుప ఆయుధాలు', icon: '⚔️' },
              { num: '11', en: 'Paleobotany (Ancient Crop Domestication)', te: 'ప్రాచీన వృక్ష & ధాన్య సాగు శాస్త్రం', icon: '🌾' },
              { num: '12', en: 'Paleontology & Faunal Skeletal Analysis', te: 'ప్రాచీన జంతు అవశేష పరిశీలన (అశ్వం)', icon: '🐎' },
            ].map((d) => (
              <div 
                key={d.num} 
                className="p-2.5 rounded-xl bg-[#F0F7FF] border border-blue-200/80 flex items-center gap-2.5 hover:bg-blue-100 transition-colors"
              >
                <span className="text-lg shrink-0">{d.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono font-bold text-[#1565C0]">{d.num}</div>
                  <div className="text-xs font-bold text-[#0D47A1] leading-tight truncate">
                    {isEn ? d.en : d.te}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. TOPIC DETAIL MODAL                                        */}
      {/* ============================================================ */}
      {selectedTopic && (
        <div 
          onClick={() => setSelectedTopic(null)}
          className="fixed inset-0 z-60 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-3xl border-3 border-[#D4AF37] max-w-xl w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/50 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">
                  {selectedTopic === 'rigveda' ? '📜' : selectedTopic === 'ramayana' ? '🏹' : selectedTopic === 'mahabharata' ? '⚔️' : selectedTopic === 'yugas' ? '⏳' : '🔬'}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                    {selectedTopic === 'rigveda' && (isEn ? 'RigVeda Epoch (22,000+ BCE - 6th Millennium BCE)' : 'ఋగ్వేద కాలగణన (క్రీ.పూ. 22,000+ నుండి 6వ సహస్రాబ్ది)')}
                    {selectedTopic === 'ramayana' && (isEn ? 'Ramayana Dating: 12209 BCE' : 'శ్రీమద్రామాయణ ఖగోళ కాలం: క్రీ.పూ. 12209')}
                    {selectedTopic === 'mahabharata' && (isEn ? 'Mahabharata Dating: 5561 BCE' : 'మహాభారత కురుక్షేత్ర ఖగోళ కాలం: క్రీ.పూ. 5561')}
                    {selectedTopic === 'yugas' && (isEn ? 'Yuga Dogma & Vedic Cosmogony' : 'యుగ కాలపరిమాణం & వేద కాలగణన')}
                    {selectedTopic === 'sciences' && (isEn ? '12+ Disciplines of Hard Sciences Evidence' : '12+ ప్రాకృతిక విజ్ఞాన శాస్త్రాల నిరూపిత ఆధారాలు')}
                  </h4>
                  <span className="text-[11px] text-[#8D6E63] font-bold">
                    {isEn ? 'Archaeo-Astronomy & Empirical Proof' : 'ఖగోళ విజ్ఞానం & ప్రయోగాత్మక శాస్త్రీయ పరిశోధన'}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="p-1 rounded-full hover:bg-stone-200 text-[#7B1113] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-3 text-xs sm:text-sm text-[#2C1810] leading-relaxed">
              {selectedTopic === 'rigveda' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DCC4]">
                    <h5 className="font-bold text-[#7B1113] mb-1">
                      {isEn ? 'Rigveda Archaeo-Astronomy:' : 'ఋగ్వేదంలో ఖగోళ గ్రహస్థానాలు & రుజువులు:'}
                    </h5>
                    <p>
                      {isEn 
                        ? 'Rigvedic hymns describe equinoxes occurring in Mrigashira (Orion), Punarvasu, and Krittika (Pleiades), dating back to 22,000+ BCE. The descriptions of the mighty perennial Saraswati flowing from Himalayas to the Arabian Sea corroborate geological river-bed bathymetry before its tectonic disruption.'
                        : 'ఋగ్వేద ఋచలలో మృగశిర, పునర్వసు, కృత్తికా నక్షత్రాలలో సంభవించిన విషువత్తుల (Equinoxes) వర్ణనలు క్రీ.పూ. 22,000 నుండి క్రీ.పూ. 6000 వరకు వ్యాపించినట్లు ఖగోళ శాస్త్రం ధ్రువీకరిస్తుంది. హిమాలయాల నుండి సముద్రం వరకు ప్రవహించిన సరస్వతీ నది వర్ణనలు భూగర్భ ఉపగ్రహ ఛాయాచిత్రాలతో సంపూర్ణంగా సరిపోలుతున్నాయి.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTopic === 'ramayana' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DCC4]">
                    <h5 className="font-bold text-[#7B1113] mb-1">
                      {isEn ? 'Archaeo-Astronomy of Ramayana (12209 BCE):' : 'క్రీ.పూ. 12209 రామాయణ కాల నిర్ధారణ:'}
                    </h5>
                    <p>
                      {isEn 
                        ? 'Researched exhaustively by Nilesh Oak using Valmiki Ramayana astronomical observations: Brahmarashi / Pole Star alignment (Abhijit/Vega as pole star), solar eclipses at Dandakaranya, planetary positions during Sri Rama’s birth (Chaitra Shukla Navami) and Sugriva’s coronation independently converge on 12209 BCE.'
                        : 'వాల్మీకి రామాయణంలోని ఖగోళ గ్రహస్థానాలు, అభీజిత్ (వేగా) ధ్రువతారగా ఉన్న కాలావధి, దండకారణ్యంలో సంభవించిన సూర్యగ్రహణాలు, మరియు శ్రీరామ జనన కాల గ్రహస్థితులను పరిశీలించినప్పుడు క్రీ.పూ. 12209 సంవత్సరంలో ఈ అమరిక అద్భుతంగా సరిపోలుతున్నట్లు ఖగోళ గణనలు నిరూపిస్తున్నాయి.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTopic === 'mahabharata' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DCC4]">
                    <h5 className="font-bold text-[#7B1113] mb-1">
                      {isEn ? 'Archaeo-Astronomy of Mahabharata (5561 BCE):' : 'క్రీ.పూ. 5561 మహాభారత కాల నిర్ధారణ:'}
                    </h5>
                    <p>
                      {isEn 
                        ? 'Vyasa Mahabharata contains over 300+ planetary and astronomical observations, including the famous Arundhati-Vasistha observation where Arundhati (Alcor) walked ahead of Vasistha (Mizar), which occurred strictly between 11091 BCE and 4508 BCE. Combined with Saturn at Rohini and solar-lunar eclipses in 13 days, 5561 BCE emerges as the astronomically validated date for the Kurukshetra War.'
                        : 'మహాభారతంలో వేదవ్యాసుడు నమోదు చేసిన 300కు పైగా ఖగోళ ఆధారాలలో "అరుంధతీ-వసిష్ఠ" విచిత్ర నక్షత్ర చలనం అత్యంత ప్రామాణికమైనది. వసిష్ఠునికి ముందు అరుంధతి నడవడం క్రీ.పూ. 11091 నుండి క్రీ.పూ. 4508 మధ్య మాత్రమే సాధ్యమని నాసా నక్షత్ర కొలమానాలు చెబుతున్నాయి. కార్తీక అమావాస్య, రోహిణిలో శని మొదలైన ఆధారాలతో క్రీ.పూ. 5561 కురుక్షేత్ర యుద్ధ సంవత్సరంగా నిర్ధారించబడింది.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTopic === 'yugas' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DCC4]">
                    <h5 className="font-bold text-[#7B1113] mb-1">
                      {isEn ? 'Vedic Yuga Cycles & Celestial Proportion:' : 'వేద యుగ కాలగణన & దివ్య ప్రమాణాలు:'}
                    </h5>
                    <p>
                      {isEn
                        ? 'The 4:3:2:1 mathematical ratio dictates the Yuga lengths: Satya (1,728,000 years), Treta (1,296,000 years), Dwapara (864,000 years), and Kali (432,000 years), summing to one Mahayuga of 4.32 million solar years. Scientific research bridges these cosmic cycles with observable Earth epoch shifts.'
                        : '4:3:2:1 నిష్పత్తిలో యుగ కాలాలు: సత్యయుగం (17,28,000 ఏళ్ళు), త్రేతాయుగం (12,96,000 ఏళ్ళు), ద్వాపరయుగం (8,64,000 ఏళ్ళు), కలియుగం (4,32,000 ఏళ్ళు) కలిసి ఒక చతుర్యుగం (మహాయుగం = 43,20,000 సంవత్సరాలు) ఏర్పడును.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTopic === 'sciences' && (
                <div className="space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-[#E8DCC4]">
                    <h5 className="font-bold text-[#7B1113] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? '12+ Hard Sciences Disciplines:' : '12+ ప్రాకృతిక విజ్ఞాన శాస్త్ర విభాగాలు:'}</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { en: '1. Astronomy & Celestial Mechanics', te: '1. ఖగోళ విజ్ఞానం & గ్రహగతులు' },
                        { en: '2. Oceanography & Marine Archaeology', te: '2. సముద్ర గర్భ పరిశోధన (ద్వారక)' },
                        { en: '3. Geology & Hydrology (Saraswati Basin)', te: '3. భూగర్భ జల శాస్త్రం (సరస్వతి)' },
                        { en: '4. Ancient Genetics & Population Continuity', te: '4. ప్రాచీన జన్యు విశ్లేషణ (aDNA)' },
                        { en: '5. Climatology & Holocene Monsoons', te: '5. వాతావరణ & రుతుపవన శాస్త్రం' },
                        { en: '6. Field Archaeology (Rakhigarhi, Sanauli)', te: '6. పురావస్తు త్రవ్వకాలు (రాఖీగర్హి)' },
                        { en: '7. Dendrochronology (Tree-ring Dating)', te: '7. వృక్ష వలయ కాలగణన' },
                        { en: '8. Radiocarbon & OSL Luminescence', te: '8. రేడియో కార్బన్ & OSL డేటింగ్' },
                        { en: '9. Bathymetry & Sea-level Shifts', te: '9. సముద్ర మట్టాల మార్పులు' },
                        { en: '10. Archaeo-Metallurgy (Copper & Iron)', te: '10. ప్రాచీన లోహ సంగ్రహణ శాస్త్రం' },
                        { en: '11. Paleobotany (Domesticated Crops)', te: '11. ప్రాచీన వృక్ష & విత్తన శాస్త్రం' },
                        { en: '12. Paleontology & Faunal Analysis', te: '12. ప్రాచీన జంతు అవశేష పరిశీలన' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                          <span className="font-semibold text-stone-800">{isEn ? item.en : item.te}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-[#E8DCC4] flex items-center justify-between">
              <button
                type="button"
                onClick={handleOpenImage}
                className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Infographic' : 'మూల చార్ట్ చూడండి'}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-1.5 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] cursor-pointer"
              >
                {isEn ? 'Close' : 'ముగించు'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
