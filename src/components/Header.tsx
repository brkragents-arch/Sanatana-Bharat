import React, { useState, useEffect, useRef } from 'react';
import { useMythology } from '../context/MythologyContext';
import { 
  GitFork, 
  Compass, 
  Clock, 
  Users, 
  BookOpen, 
  Search, 
  Settings, 
  Volume2, 
  VolumeX, 
  Home, 
  ExternalLink,
  Languages,
  Landmark,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    viewMode, 
    setViewMode, 
    setIsSearchOpen, 
    setIsAdminOpen, 
    language, 
    toggleLanguage 
  } = useMythology();

  const [isPlayingOm, setIsPlayingOm] = useState(false);
  const isEn = language === 'en';
  
  // Web Audio Context for Cosmic OM (136.1 Hz Pranava Nada)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSacredOm = () => {
    if (isPlayingOm) {
      stopOm();
    } else {
      startOm();
    }
  };

  const startOm = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      gainNodeRef.current = masterGain;

      // 136.1 Hz - Cosmic Om / Earth Year frequency
      const fundamental = 136.1;

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(fundamental, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(fundamental * 2, ctx.currentTime);

      const osc3 = ctx.createOscillator();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(fundamental * 3, ctx.currentTime);

      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 2.5);

      osc1.connect(masterGain);
      osc2.connect(masterGain);
      osc3.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      oscillatorsRef.current = [osc1, osc2, osc3];
      setIsPlayingOm(true);
    } catch (e) {
      console.error('Audio initialization failed:', e);
    }
  };

  const stopOm = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        oscillatorsRef.current = [];
        try { ctx.close(); } catch {}
        setIsPlayingOm(false);
      }, 1300);
    } else {
      setIsPlayingOm(false);
    }
  };

  useEffect(() => {
    return () => {
      stopOm();
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b-2 border-[#D4AF37] shadow-sm">
      {/* Top Sacred Banner */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-4 py-1.5 text-xs sm:text-sm flex justify-between items-center flex-wrap gap-2 border-b border-[#C99700]">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-base">🕉️</span>
          <span className="font-medium tracking-wide">
            {isEn 
              ? 'Sanatana Bharat Knowledge Portal | Puranic Wisdom, Sciences & History'
              : 'సనాతన భారత్ జ్ఞాన దర్శిని | పౌరాణిక విజ్ఞానం, ప్రాచీన శాస్త్రాలు & సమగ్ర చరిత్ర | ప్రాథమిక ఆధారం:'}
          </span>
          <a
            href="https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFF8E1] underline hover:text-[#FFD54F] inline-flex items-center gap-1 font-semibold"
          >
            telugubhagavatam.org
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5 bg-[#FFF8E1] text-[#7B1113] hover:bg-[#FFE082] transition-all cursor-pointer shadow-xs border border-[#C99700]"
            title={isEn ? 'తెలుగులోకి మార్చండి' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'తెలుగు (Telugu)' : 'English (ఆంగ్లం)'}</span>
          </button>

          {/* Sacred Om Audio Generator */}
          <button
            onClick={toggleSacredOm}
            className={`px-3 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlayingOm
                ? 'bg-[#D84315] text-white animate-pulse shadow-md'
                : 'bg-[#FFE082]/20 hover:bg-[#FFE082]/30 text-[#FFE082] border border-[#C99700]'
            }`}
            title="ప్రణవ నాదము (136.1 Hz Cosmic Om)"
          >
            {isPlayingOm ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>
              {isPlayingOm 
                ? (isEn ? 'OM Playing' : 'ఓం నాదం మోగుతోంది') 
                : (isEn ? 'Cosmic OM' : 'ప్రణవ నాదం (ఓం)')}
            </span>
          </button>

          <span className="text-xs text-[#FFE082]/70 hidden md:inline">|</span>
          <span className="text-xs text-[#FFE082]/90 hidden md:inline">
            {isEn ? 'Canto 2, 3 & 4' : 'తృతీయ & చతుర్థ స్కంధములు'}
          </span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Title & Branding */}
        <div 
          onClick={() => setViewMode('sanatana_chronology')}
          className="flex items-center gap-3 cursor-pointer group"
          title={isEn ? 'Go to Home Page' : 'హోమ్ పేజీకి వెళ్ళండి'}
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#FFE082] to-[#FF8F00] p-0.5 shadow-md flex items-center justify-center border-2 border-[#7B1113] group-hover:scale-105 transition-transform">
            <span className="text-2xl">🪷</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#7B1113] font-telugu-serif tracking-tight leading-none group-hover:text-[#D84315] transition-colors">
              {isEn ? 'Sanatana Bharat: Wisdom & History' : 'సనాతన భారత్: పౌరాణిక విజ్ఞానం & సమగ్ర చరిత్ర'}
            </h1>
            <p className="text-xs text-[#5D4037] font-medium mt-0.5">
              {isEn 
                ? 'Cosmic Creation • Sacred Genealogies • Ancient Sciences & 5,000 Years of Civilizational History'
                : 'సృష్టి రహస్యాలు • పౌరాణిక వంశవృక్షాలు • ప్రాచీన విజ్ఞాన శాస్త్రాలు & 5,000 ఏళ్ల చారిత్రక ప్రస్థానం'}
            </p>
          </div>
        </div>

        {/* View Switchers & Navigation - Each is a dedicated separate page */}
        <nav className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          
          {/* 1. పరిచయం (Introduction Page) */}
          <button
            onClick={() => {
              setViewMode('intro');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'intro'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37] font-bold'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
            title={isEn ? 'Introduction & Overview' : 'పరిచయము మరియు స్థూల దృష్టి'}
          >
            <Home className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'Introduction' : 'పరిచయం'}</span>
          </button>

                    {/* SPECIAL FEATURED SUBPAGE: సృష్టి రహస్యం (Creation Secret) */}
          <button
            onClick={() => {
              setViewMode('srushti_rahasyam');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'srushti_rahasyam'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#FF8F00] to-[#7B1113] text-stone-950 font-bold shadow-lg ring-2 ring-[#FFD54F]'
                : 'bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] text-[#4A0012] hover:bg-[#FFE082] border-2 border-[#D4AF37] font-bold shadow-xs'
            }`}
            title={isEn ? 'Cosmic Creation Secret (Paramatma to Moksha)' : 'సృష్టి రహస్యం (సంకల్పం నుండి మోక్షం వరకు సమగ్ర వేదాంతం)'}
          >
            <Sparkles className="w-4 h-4 text-[#D84315] animate-pulse" />
            <span>{isEn ? 'Creation Secret' : 'సృష్టి రహస్యం'}</span>
          </button>

          {/* 2. సనాతన ధర్మ ఆవిర్భావము (Sanatana Chronology Page) */}
          <button
            onClick={() => {
              setViewMode('sanatana_chronology');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'sanatana_chronology'
                ? 'bg-gradient-to-r from-[#FF8F00] to-[#E65100] text-white shadow-md ring-2 ring-[#FFD54F] font-bold'
                : 'bg-[#FFFDF7] text-[#E65100] hover:bg-[#FFF3E0] border border-[#FF8F00]/50 font-semibold'
            }`}
            title={isEn ? 'Sanatana Dharma Cosmic Order (13 Steps)' : 'సనాతన ధర్మ ఆవిర్భావము (13 సోపానాలు)'}
          >
            <Clock className="w-4 h-4" />
            <span>{isEn ? 'Sanatana Chronology' : 'సనాతన ధర్మ ఆవిర్భావము'}</span>
          </button>

          {/* 3. సృష్టి క్రమము (Creation Flow Page) */}
          <button
            onClick={() => {
              setViewMode('flow');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'flow'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37] font-bold'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
            title={isEn ? 'Creation Chronology Flow' : 'సృష్టి క్రమము (10 ఘట్టాలు)'}
          >
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>{isEn ? 'Creation Flow' : 'సృష్టి క్రమము'}</span>
          </button>

          {/* 4. బ్రహ్మ వంశము (Family of Brahma Page) */}
          <button
            onClick={() => {
              setViewMode('brahma_family');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'brahma_family'
                ? 'bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] shadow-md ring-2 ring-[#FFD54F] font-bold'
                : 'bg-[#FFFDF7] text-[#D84315] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#FFAB91] font-bold'
            }`}
            title={isEn ? 'Family of Brahma (Complete Lineage)' : 'బ్రహ్మ వంశము (Family of Brahma - సంపూర్ణ వంశపరంపర)'}
          >
            <span className="text-sm">🪷</span>
            <span>{isEn ? 'Family of Brahma' : 'బ్రహ్మ వంశము'}</span>
          </button>

          {/* 5. వంశవృక్షము (Family Tree Page) */}
          <button
            onClick={() => {
              setViewMode('tree');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'tree'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37] font-bold'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
            title={isEn ? 'Interactive Family Tree' : 'సంపూర్ణ ఇంటరాక్టివ్ వంశవృక్షము'}
          >
            <GitFork className="w-4 h-4 text-[#D4AF37]" />
            <span>{isEn ? 'Family Tree' : 'వంశవృక్షము'}</span>
          </button>

          {/* 6. దక్ష-ప్రసూతి వంశము (Daksha-Prasuti 16 Daughters Page) */}
          <button
            onClick={() => {
              setViewMode('daksha_vamsa');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'daksha_vamsa'
                ? 'bg-gradient-to-r from-[#D84315] to-[#BF360C] text-white shadow-md ring-2 ring-[#FFD54F] font-bold'
                : 'bg-[#FFFDF7] text-[#D84315] hover:bg-[#FFECE4] border border-[#D84315]/40 font-semibold'
            }`}
            title={isEn ? 'Daksha-Prasuti 16 Daughters Lineage' : 'దక్ష ప్రజాపతి – ప్రసూతి 16 మంది కుమార్తెల వంశము'}
          >
            <Users className="w-4 h-4" />
            <span>{isEn ? 'Daksha Lineage' : 'దక్ష-ప్రసూతి వంశము'}</span>
          </button>

          {/* 7. మైండ్ మ్యాప్స్ (Mind Map Page) */}
          <button
            onClick={() => {
              setViewMode('mindmap');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'mindmap'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37] font-bold'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
            title={isEn ? 'Radial Mind Map' : 'చతుర్ముఖ బ్రహ్మ మైండ్ మ్యాప్'}
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>{isEn ? 'Mind Maps' : 'మైండ్ మ్యాప్స్'}</span>
          </button>

          {/* 8. భారతీయ చరిత్ర (Indian History Page) */}
          <button
            onClick={() => {
              setViewMode('indian_history');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'indian_history'
                ? 'bg-gradient-to-r from-[#7B1113] via-[#D84315] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#FFD54F] font-bold'
                : 'bg-[#FFFDF7] text-[#7B1113] hover:bg-[#FFF3E0] hover:text-[#D84315] border border-[#D4AF37]/60 font-bold'
            }`}
            title={isEn ? 'Indian History (Chronological Order)' : 'భారతీయ చరిత్ర (కాలానుక్రమణిక మరియు సామ్రాజ్యాలు)'}
          >
            <Landmark className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'Indian History' : 'భారతీయ చరిత్ర'}</span>
          </button>

          {/* 7. భాగవత ఆధారాలు (Scripture Library Page) */}
          <button
            onClick={() => {
              setViewMode('scriptures');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'scriptures'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37] font-bold'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
            title={isEn ? 'Bhagavatam Scripture Verses' : 'భాగవత పురాణ మూల పద్యాల నిధి'}
          >
            <BookOpen className="w-4 h-4 text-[#C99700]" />
            <span>{isEn ? 'Scriptures' : 'భాగవత ఆధారాలు'}</span>
          </button>

          <div className="h-5 w-px bg-[#D4AF37]/50 mx-1 hidden sm:block" />

          {/* 8. శోధన (Search Modal Trigger) */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[#FFFDF7] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#D4AF37] shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            title={isEn ? 'Search Genealogy & Verses' : 'శోధన (పేర్లు & పద్యాలు)'}
          >
            <Search className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'Search' : 'శోధన'}</span>
          </button>

          {/* Admin CMS Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] text-[#4A0012] hover:bg-[#FFE082] border border-[#C99700] shadow-xs flex items-center gap-1 cursor-pointer"
            title={isEn ? 'Admin CMS' : 'నిర్వాహణ'}
          >
            <Settings className="w-4 h-4 text-[#7B1113]" />
            <span className="hidden xl:inline">{isEn ? 'Admin' : 'నిర్వాహణ'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
