import React, { useState, useEffect, useRef } from 'react';
import {
  SRUSHTI_BRANDING,
  CREATION_REASONS,
  CREATION_FLOW_STEPS,
  THREE_GUNAS_DATA,
  KALA_SVABHAVA_ANALOGY,
  GITA_CREATION_VERSES,
  KARMA_CYCLE_STEPS,
  FOUR_MOKSHA_PATHS,
  DAILY_SADHANA_PRACTICES,
  VEDANTIC_GLOSSARY,
  JAPA_MANTRAS,
  type CreationReason,
  type CreationFlowStep,
  type GitaVerseItem,
  type MokshaPath,
  type VedanticGlossaryItem
} from '../../data/srushtiRahasyaData';
import { SrushtiKnowledgeTree } from './SrushtiKnowledgeTree';
import {
  Sparkles,
  BookOpen,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Bookmark,
  BookmarkCheck,
  Search,
  Check,
  Play,
  Pause,
  RotateCcw,
  Heart,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export const SrushtiRahasyaView: React.FC = () => {
  // Theme & Reading settings
  const [isParchmentMode, setIsParchmentMode] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('normal');

  // Navigation tab
  const [activeTab, setActiveTab] = useState<string>('home');

  // Module state
  const [selectedReason, setSelectedReason] = useState<CreationReason>(CREATION_REASONS[0]);
  const [selectedStep, setSelectedStep] = useState<CreationFlowStep>(CREATION_FLOW_STEPS[0]);
  const [selectedGunaId, setSelectedGunaId] = useState<'satva' | 'rajas' | 'tamas'>('satva');
  const [isGunaEquilibrium, setIsGunaEquilibrium] = useState<boolean>(false);
  const [selectedVerse, setSelectedVerse] = useState<GitaVerseItem>(GITA_CREATION_VERSES[0]);
  const [selectedMokshaPath, setSelectedMokshaPath] = useState<MokshaPath>(FOUR_MOKSHA_PATHS[0]);
  const [activeKarmaStepId, setActiveKarmaStepId] = useState<string>(KARMA_CYCLE_STEPS[0].id);

  // Interactive Tools state
  // 1. Sadhana Checklist & Streak
  const [completedPractices, setCompletedPractices] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('srushti_daily_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [streakCount, setStreakCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('srushti_daily_streak');
      return saved ? parseInt(saved, 10) : 3;
    } catch {
      return 3;
    }
  });

  // 2. Japa Counter
  const [japaCount, setJapaCount] = useState<number>(0);
  const [completedMalas, setCompletedMalas] = useState<number>(0);
  const [selectedMantra, setSelectedMantra] = useState<string>(JAPA_MANTRAS[0].nameTe);

  // 3. Meditation Timer
  const [meditationTimeRemaining, setMeditationTimeRemaining] = useState<number>(300); // 5 mins
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  // 4. Spiritual Reflection Notes
  const [reflectionNote, setReflectionNote] = useState<string>(() => {
    return localStorage.getItem('srushti_reflection_note') || '';
  });
  const [noteSavedMessage, setNoteSavedMessage] = useState<boolean>(false);

  // 5. Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('srushti_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 6. Search & Glossary Drawer
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);

  // 7. TTS Audio Reader
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Audio Gong generator using Web Audio API
  const playGongSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(432, audioCtx.currentTime); // 432 Hz healing cosmic pitch
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 3);
    } catch (e) {
      console.log('Web Audio not supported or restricted', e);
    }
  };

  // Meditation timer effect
  useEffect(() => {
    if (isTimerRunning && meditationTimeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setMeditationTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            playGongSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, meditationTimeRemaining]);

  // Handle Practice Checklist Toggle
  const togglePractice = (id: string) => {
    const updated = completedPractices.includes(id)
      ? completedPractices.filter(item => item !== id)
      : [...completedPractices, id];
    setCompletedPractices(updated);
    try {
      localStorage.setItem('srushti_daily_completed', JSON.stringify(updated));
      if (updated.length === DAILY_SADHANA_PRACTICES.length) {
        setStreakCount(prev => {
          const next = prev + 1;
          localStorage.setItem('srushti_daily_streak', next.toString());
          return next;
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Handle Japa Click
  const incrementJapa = () => {
    setJapaCount(prev => {
      const next = prev + 1;
      if (next >= 108) {
        setCompletedMalas(m => m + 1);
        playGongSound();
        return 0;
      }
      return next;
    });
  };

  // Handle Reflection Note Save
  const saveReflectionNote = () => {
    try {
      localStorage.setItem('srushti_reflection_note', reflectionNote);
      setNoteSavedMessage(true);
      setTimeout(() => setNoteSavedMessage(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  // Handle Bookmark Toggle
  const toggleBookmark = (title: string) => {
    const next = bookmarks.includes(title)
      ? bookmarks.filter(b => b !== title)
      : [...bookmarks, title];
    setBookmarks(next);
    try {
      localStorage.setItem('srushti_bookmarks', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  // Web Speech Audio recitation
  const handleReadAloud = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('ఈ బ్రౌజర్‌లో ఆడియో ఉచ్ఛారణ సౌలభ్యం అందుబాటులో లేదు.');
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'te-IN'; // Telugu voice preference
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Font size multiplier class
  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-lg leading-relaxed';
    if (fontSize === 'huge') return 'text-xl leading-loose';
    return 'text-base leading-relaxed';
  };

  const navItems = [
    { id: 'home', label: 'హోమ్' },
    { id: 'reasons', label: 'సృష్టి ఎందుకు?' },
    { id: 'flowchart', label: 'సృష్టి ఎలా జరిగింది?' },
    { id: 'gunas', label: 'ప్రకృతి & త్రిగుణాలు' },
    { id: 'kala-svabhava', label: 'కాలం మరియు స్వభావం' },
    { id: 'gita-verses', label: 'భగవద్గీతలో సృష్టి తత్వం' },
    { id: 'karma', label: 'కర్మ సిద్ధాంతం' },
    { id: 'moksha', label: 'మోక్ష మార్గాలు' },
    { id: 'sadhana', label: 'ఆచరణాత్మక సాధన' },
    { id: 'tree', label: 'జ్ఞాన వృక్షం' }
  ];

  // Filtered glossary for search
  const filteredGlossary = VEDANTIC_GLOSSARY.filter((item: VedanticGlossaryItem) =>
    item.termTe.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.shortDefTe.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.sanskritRoot && item.sanskritRoot.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedGuna = THREE_GUNAS_DATA.find(g => g.id === selectedGunaId) || THREE_GUNAS_DATA[0];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-amber-400 selection:text-stone-900 ${
        isParchmentMode
          ? 'bg-[#FAF7F0] text-stone-900'
          : 'bg-[#090d16] text-slate-100'
      }`}
    >
      {/* Top Utility Ribbon */}
      <div className={`border-b backdrop-blur-md px-4 py-2 sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 text-xs ${
        isParchmentMode
          ? 'bg-[#fcf8ee]/85 border-[#d4af37]/40 text-stone-800'
          : 'bg-[#090d16]/90 border-amber-500/20 text-slate-300'
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            సనాతన భారత్ • వేదాంత సృష్టి విజ్ఞానం
          </span>
          <span className="hidden md:inline-block opacity-40">|</span>
          <span className="hidden md:inline-block text-stone-600 dark:text-slate-400">
            ఉపనిషత్తులు, శ్రీమద్భాగవతం & భగవద్గీత ఆధారిత ప్రామాణిక గ్రంథం
          </span>
        </div>

        {/* Controls: Mode Toggle, Text Size, Audio, Glossary Search */}
        <div className="flex items-center gap-2">
          {/* Text Size Control */}
          <div className="flex items-center rounded-lg border border-amber-600/30 overflow-hidden bg-amber-500/10">
            <button
              onClick={() => setFontSize(prev => prev === 'huge' ? 'large' : 'normal')}
              className="px-2 py-1 hover:bg-amber-500/20 font-bold"
              title="అక్షర పరిమాణం తగ్గించు"
            >
              A-
            </button>
            <span className="px-1.5 py-1 text-[11px] font-mono border-x border-amber-600/20">
              {fontSize === 'normal' ? 'సాధారణం' : fontSize === 'large' ? 'మధ్యస్థం' : 'పెద్దది'}
            </span>
            <button
              onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'huge')}
              className="px-2 py-1 hover:bg-amber-500/20 font-bold"
              title="అక్షర పరిమాణం పెంచు"
            >
              A+
            </button>
          </div>

          {/* Theme Mode Toggle (Parchment vs Cosmic Dark) */}
          <button
            onClick={() => setIsParchmentMode(prev => !prev)}
            className={`px-3 py-1 rounded-lg border font-medium flex items-center gap-1.5 transition ${
              isParchmentMode
                ? 'bg-amber-950 text-amber-100 border-amber-900 hover:bg-amber-900'
                : 'bg-amber-100 text-stone-900 border-amber-300 hover:bg-white'
            }`}
          >
            {isParchmentMode ? (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>కాస్మిక్ డార్క్</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>తాళపత్ర శైలి</span>
              </>
            )}
          </button>

          {/* Audio Reader Toggle */}
          <button
            onClick={() => handleReadAloud("సృష్టి రహస్యం. సర్వేశ్వరుడు అసలు సృష్టిని ఎందుకు ప్రారంభించాలనుకున్నాడు? పరమాత్మ సంకల్పం నుండి కాలం, స్వభావం, ప్రకృతి, కర్మ మరియు మోక్షం వరకు సమగ్ర వేదాంత ప్రయాణం.")}
            className={`p-1.5 rounded-lg border transition ${
              isSpeaking
                ? 'bg-red-500 text-white border-red-600 animate-pulse'
                : 'border-amber-600/30 hover:bg-amber-500/10 text-amber-700 dark:text-amber-400'
            }`}
            title={isSpeaking ? 'చదవడం ఆపివేయండి' : 'శీర్షికను వినండి'}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Glossary Search Trigger */}
          <button
            onClick={() => setIsGlossaryOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-amber-600/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 transition"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">వేదాంత నిఘంటువు</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Navigation Bar for 9 Modules */}
      <nav className={`sticky top-[41px] z-30 border-b backdrop-blur-md overflow-x-auto ${
        isParchmentMode
          ? 'bg-[#fcf5e5]/95 border-[#d4af37]/30 shadow-sm'
          : 'bg-[#0b101c]/95 border-slate-800 shadow-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 py-2 min-w-max">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === item.id
                  ? isParchmentMode
                    ? 'bg-amber-700 text-amber-50 shadow-md ring-1 ring-amber-800'
                    : 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 ring-1 ring-amber-300'
                  : isParchmentMode
                    ? 'text-stone-700 hover:bg-amber-200/50 hover:text-amber-900'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-amber-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-20">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (హోమ్) */}
        {/* ========================================================================= */}
        <section id="home" className="relative pt-6 pb-12">
          {/* Decorative Corner Filigree (Source 1 Manuscript style) */}
          <div className="relative rounded-3xl border-2 border-[#d4af37]/60 p-6 md:p-12 overflow-hidden shadow-2xl backdrop-blur-sm bg-gradient-to-b from-amber-500/5 via-amber-700/5 to-transparent">
            {/* Top Ornamental Label */}
            <div className="text-center mb-6">
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${
                isParchmentMode
                  ? 'bg-[#faebd7] border-[#d4af37] text-amber-900'
                  : 'bg-amber-950/80 border-amber-500 text-amber-300'
              }`}>
                ॥ ఓం తత్సత్ • సృష్టి రహస్య దర్శనం ॥
              </span>
            </div>

            {/* Main Headline & Subtitle */}
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <h1 className={`text-4xl md:text-6xl font-bold font-serif tracking-tight ${
                isParchmentMode ? 'text-[#3e2723]' : 'text-amber-200'
              }`}>
                {SRUSHTI_BRANDING.mainTitleTe}
              </h1>

              <h2 className="text-xl md:text-2xl font-serif text-amber-700 dark:text-amber-400 font-semibold">
                {SRUSHTI_BRANDING.subtitleTe}
              </h2>

              <p className={`text-base md:text-xl font-medium italic ${
                isParchmentMode ? 'text-stone-700' : 'text-slate-300'
              }`}>
                &ldquo;{SRUSHTI_BRANDING.taglineTe}&rdquo;
              </p>

              {/* Nine-stage journey badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {SRUSHTI_BRANDING.cosmicJourneySteps.map((s, idx) => (
                  <React.Fragment key={s.label}>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                      isParchmentMode ? 'bg-amber-100/70 border-amber-300 text-amber-950' : 'bg-slate-800 border-slate-700 text-amber-300'
                    }`}>
                      {s.label}
                    </span>
                    {idx < SRUSHTI_BRANDING.cosmicJourneySteps.length - 1 && (
                      <span className="text-amber-600 text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-6"></div>

              <div className={`p-4 md:p-6 rounded-2xl border ${
                isParchmentMode
                  ? 'bg-[#fffaf0]/80 border-amber-300/60 text-stone-800'
                  : 'bg-slate-900/60 border-amber-500/30 text-slate-200'
              }`}>
                <h3 className="text-lg md:text-xl font-bold font-serif text-amber-800 dark:text-amber-300 mb-2">
                  {SRUSHTI_BRANDING.heroHeadlineTe}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${getFontSizeClass()}`}>
                  {SRUSHTI_BRANDING.heroSupportingTextTe}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => {
                    setActiveTab('reasons');
                    document.getElementById('reasons')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-2xl font-bold text-base transition-all shadow-lg flex items-center gap-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white shadow-amber-900/30 hover:scale-105 active:scale-95"
                >
                  <span>సృష్టి రహస్యాన్ని తెలుసుకోండి</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    setActiveTab('tree');
                    document.getElementById('tree')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-6 py-3.5 rounded-2xl font-bold text-base border transition-all flex items-center gap-2 ${
                    isParchmentMode
                      ? 'border-amber-700/50 text-amber-900 hover:bg-amber-100/70'
                      : 'border-amber-400/50 text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>జ్ఞాన వృక్ష దర్శనం</span>
                </button>
              </div>
            </div>

            {/* 5 Interactive Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 pt-8 border-t border-amber-500/20">
              {SRUSHTI_BRANDING.heroHighlights.map(hl => (
                <button
                  key={hl.id}
                  onClick={() => {
                    const sectionMap: Record<string, string> = {
                      'module-why': 'reasons',
                      'module-how': 'flowchart',
                      'module-time-nature': 'kala-svabhava',
                      'module-karma': 'karma',
                      'module-moksha': 'moksha'
                    };
                    const target = sectionMap[hl.targetSection] || 'reasons';
                    setActiveTab(target);
                    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group p-4 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02] ${
                    isParchmentMode
                      ? 'bg-amber-50/70 border-amber-300/50 hover:bg-amber-100/80 hover:border-amber-600'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/80 hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{hl.icon}</span>
                    <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold font-serif text-sm text-amber-800 dark:text-amber-300 group-hover:text-amber-600">
                    {hl.titleTe}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {hl.descTe}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 1 – సృష్టి ఎందుకు ప్రారంభమైంది? (4 REASONS) */}
        {/* ========================================================================= */}
        <section id="reasons" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 1"
            title="సృష్టి ఎందుకు ప్రారంభమైంది? (నాలుగు దివ్య కారణాలు)"
            subtitle="సర్వేశ్వరునికి కోరికలు లేనప్పటికీ సృష్టి సంకల్పం ఎందుకు కలిగింది? వేదాంత దృక్కోణం"
            isParchmentMode={isParchmentMode}
          />

          {/* PDF Slide 2 – మౌలిక ప్రశ్న: భగవంతునికి ఏ లోటూ లేనప్పుడు సృష్టి ఎందుకు? */}
          <div className={`p-6 md:p-8 rounded-3xl border ${
            isParchmentMode
              ? 'bg-[#fffaf0]/90 border-[#d4af37]/50 shadow-lg'
              : 'bg-slate-900/80 border-amber-500/30 shadow-xl'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-amber-500/20 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  వేదాంత మౌలిక ప్రశ్న • PDF ఆధారం (Slide 2)
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-amber-950 dark:text-amber-200 mt-0.5">
                  భగవంతునికి ఏ లోటూ లేనప్పుడు సృష్టి ఎందుకు? (Why did the Supreme Divine desire to create?)
                </h3>
              </div>
              <span className="text-xs font-serif font-bold px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                &ldquo;పూర్ణమదః పూర్ణమిదం పూర్ణాత్ పూర్ణముదచ్యతే&rdquo; — ఈశావాస్య ఉపనిషత్తు
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: పరమాత్మ పూర్ణత్వ లక్షణాలు */}
              <div className={`p-5 rounded-2xl border space-y-3 ${
                isParchmentMode ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <h4 className="font-bold font-serif text-base text-amber-900 dark:text-amber-200 flex items-center gap-2">
                  <span>✧</span>
                  <span>పరమాత్మ పూర్ణత్వ లక్షణాలు (Attributes of Divine Completeness)</span>
                </h4>
                <div className="space-y-2.5 text-xs md:text-sm">
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-amber-800 dark:text-amber-300">• అవాప్త సమస్త కాముడు: </span>
                    <span className="text-stone-700 dark:text-slate-300">పరమాత్మ తనలో తాను పరిపూర్ణుడు; ఆయనకు తీరని కోరికలు కానీ, పొందవలసిన కొత్త వస్తువులు కానీ ఏవీ లేవు.</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-amber-800 dark:text-amber-300">• నిరపేక్ష పూర్ణుడు: </span>
                    <span className="text-stone-700 dark:text-slate-300">ఆయన ఉనికికి, ఆనందానికి బాహ్యమైన ఏ వస్తువు లేదా జీవిపైనా ఆధారపడవలసిన అవసరం లేదు.</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-amber-800 dark:text-amber-300">• శూన్యం లేని పూర్ణత్వం: </span>
                    <span className="text-stone-700 dark:text-slate-300">ఆయనలో ఎలాంటి వెలితి, అసంతృప్తి లేదా కొరత అనేవి లేశమాత్రమైనా లేవు.</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-amber-800 dark:text-amber-300">• లాభనష్టాలు లేని స్థితి: </span>
                    <span className="text-stone-700 dark:text-slate-300">సృష్టి చేయడం వల్ల ఆయనకు వచ్చే లాభం కానీ, చేయకపోతే వచ్చే నష్టం కానీ ఏమీ లేదు (భగవద్గీత 3.22).</span>
                  </div>
                </div>
              </div>

              {/* Right Column: తాత్విక అన్వేషణ & వేదాంత సమాధానం */}
              <div className={`p-5 rounded-2xl border space-y-3 ${
                isParchmentMode ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <h4 className="font-bold font-serif text-base text-amber-900 dark:text-amber-200 flex items-center gap-2">
                  <span>✦</span>
                  <span>తాత్విక అన్వేషణ & వేదాంత సమాధానం</span>
                </h4>
                <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed">
                  <strong>మౌలిక ప్రశ్న:</strong> సాధారణంగా లోకంలో ఏదైనా పని చేయాలంటే ఒక ప్రయోజనం లేదా కొరత ఉండాలి. మరి సర్వసంపూర్ణుడైన భగవంతుడు ఈ అనంత విశ్వాన్ని ఎందుకు సృష్టించాడు?
                </p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">1. ఆనందోల్లాస ప్రవాహం: </span>
                    <span className="text-stone-700 dark:text-slate-300">సృష్టి అనేది భగవంతునిలోని వెలితి నుండి పుట్టలేదు; అది ఆయనలోని నిరతిశయ ఆనందం యొక్క సహజ ప్రవాహం (Overflow of Infinite Bliss).</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">2. సహజ స్వభావం: </span>
                    <span className="text-stone-700 dark:text-slate-300">సూర్యుడు ప్రకాశించడం, పువ్వు సువాసన వెదజల్లడం ఎలాగైతే వాటి సహజ లక్షణమో, పరమాత్మ తన శక్తిని సృష్టిగా వ్యక్తపరచడం ఆయన సహజ లీల.</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/70' : 'bg-slate-900/60 border-slate-700'}`}>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">3. కరుణాపూరిత వేదిక: </span>
                    <span className="text-stone-700 dark:text-slate-300">అనాదిగా నిద్రాణమై ఉన్న జీవులకు తమ కర్మలను క్షయింపజేసుకుని, పరమానందాన్ని పొందే అవకాశం కల్పించడమే సృష్టి వెనుక ఉన్న పరమ రహస్యం.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 4 Reasons Selector */}
            <div className="lg:col-span-4 space-y-3">
              {CREATION_REASONS.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setSelectedReason(reason)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    selectedReason.id === reason.id
                      ? isParchmentMode
                        ? 'bg-amber-100/90 border-amber-700 shadow-md ring-2 ring-amber-600/30'
                        : 'bg-amber-950/40 border-amber-400 shadow-lg ring-2 ring-amber-400/30'
                      : isParchmentMode
                        ? 'bg-[#fffdf7] border-[#d4af37]/30 hover:border-amber-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className={`p-2 rounded-xl text-lg font-bold font-serif ${
                    selectedReason.id === reason.id
                      ? 'bg-amber-600 text-white'
                      : isParchmentMode ? 'bg-amber-100 text-amber-800' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {reason.code}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-200">
                      {reason.titleTe}
                    </h4>
                    <p className="text-xs text-amber-700 dark:text-amber-400 font-mono mt-0.5">
                      &ldquo;{reason.sanskritQuote}&rdquo;
                    </p>
                    <p className="text-xs text-stone-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {reason.summaryTe}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Reason Deep Dive Panel */}
            <div className={`lg:col-span-8 rounded-3xl border p-6 md:p-8 backdrop-blur-sm ${
              isParchmentMode
                ? 'bg-[#fffaf0]/90 border-[#d4af37]/50 shadow-xl'
                : 'bg-slate-900/80 border-amber-500/30 shadow-2xl'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-amber-500/20 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    దివ్య కారణం {selectedReason.code}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-amber-950 dark:text-amber-200">
                    {selectedReason.titleTe} ({selectedReason.titleEn})
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleBookmark(selectedReason.titleTe)}
                    className={`p-2 rounded-lg border transition ${
                      bookmarks.includes(selectedReason.titleTe)
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'border-amber-500/30 text-amber-600 hover:bg-amber-500/10'
                    }`}
                    title="బుక్‌మార్క్ చేయండి"
                  >
                    {bookmarks.includes(selectedReason.titleTe) ? (
                      <BookmarkCheck className="w-4 h-4" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => handleReadAloud(`${selectedReason.titleTe}. సూత్రం: ${selectedReason.sanskritQuote}. ${selectedReason.philosophicalDepthTe}`)}
                    className="p-2 rounded-lg border border-amber-500/30 text-amber-600 hover:bg-amber-500/10 transition"
                    title="వినండి"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Key Scripture Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent border border-amber-500/30 mb-6 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest">
                    వేదాంత సూత్రం / మంత్రం
                  </span>
                  <div className="text-xl md:text-2xl font-bold font-serif text-amber-900 dark:text-amber-100 mt-0.5">
                    &ldquo;{selectedReason.sanskritQuote}&rdquo;
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
                  {selectedReason.sanskritQuoteDevanagari}
                </span>
              </div>

              {/* Main Detailed Explanation */}
              <p className={`text-base leading-relaxed mb-6 ${getFontSizeClass()} ${
                isParchmentMode ? 'text-stone-800' : 'text-slate-200'
              }`}>
                {selectedReason.summaryTe}
              </p>

              {/* Core Points */}
              <div className="space-y-2 mb-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  ముఖ్య భావనలు:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedReason.keyPointsTe.map((pt, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                        isParchmentMode
                          ? 'bg-amber-50/60 border-amber-200/70 text-stone-700'
                          : 'bg-slate-800/50 border-slate-700 text-slate-300'
                      }`}
                    >
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophical Depth & Analogy */}
              <div className="space-y-3 mb-6">
                <div className={`p-4 rounded-xl border ${
                  isParchmentMode ? 'bg-[#fffdf7] border-amber-300/40' : 'bg-slate-800/60 border-slate-700'
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                    తాత్త్విక అంతరార్థం:
                  </span>
                  <p className="text-xs md:text-sm leading-relaxed">{selectedReason.philosophicalDepthTe}</p>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  isParchmentMode ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-850 border-slate-750'
                }`}>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 block mb-0.5">ఉపమానం (Analogy):</span>
                  <p className="text-xs italic">{selectedReason.analogyTe}</p>
                </div>
              </div>

              {/* Scriptural Authority Reference */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isParchmentMode ? 'bg-[#faecd4]/60 border-amber-300/50' : 'bg-slate-800/80 border-slate-700'
              }`}>
                <BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-amber-800 dark:text-amber-300">ప్రామాణిక శాస్త్ర ఆధారాలు: </span>
                  <span className="text-stone-600 dark:text-slate-400">{selectedReason.sourceScripture}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 2 – సృష్టి ఎలా ప్రారంభమవుతుంది? (7-STAGE FLOWCHART) */}
        {/* ========================================================================= */}
        <section id="flowchart" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 2"
            title="సృష్టి క్రమం: సంకల్పం నుండి వైవిధ్య సృష్టి వరకు"
            subtitle="శ్రీమద్భాగవత తృతీయ స్కంధం మరియు ఉపనిషత్తుల ప్రకారం సృష్టి ఆవిర్భవించే 7 దివ్య దశలు"
            isParchmentMode={isParchmentMode}
          />

          {/* Interactive Flowchart Horizontal / Responsive Grid */}
          <div className={`rounded-3xl border p-6 md:p-8 backdrop-blur-sm ${
            isParchmentMode
              ? 'bg-[#fffaf2]/90 border-[#d4af37]/50 shadow-xl'
              : 'bg-slate-900/80 border-amber-500/30 shadow-2xl'
          }`}>
            <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                దశను క్లిక్ చేసి సమగ్ర తత్వాన్ని తెలుసుకోండి (1 నుండి 7 వరకు)
              </span>
              <span className="text-xs text-stone-500 dark:text-slate-400">
                ప్రస్తుత దశ: {selectedStep.stepNumber} / 7
              </span>
            </div>

            {/* Stage Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {CREATION_FLOW_STEPS.map(step => (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step)}
                  className={`p-3 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between min-h-[110px] ${
                    selectedStep.id === step.id
                      ? isParchmentMode
                        ? 'bg-amber-600 text-white border-amber-700 shadow-md ring-2 ring-amber-400/50 scale-105'
                        : 'bg-amber-500 text-stone-950 border-amber-300 shadow-lg ring-2 ring-amber-300/50 scale-105'
                      : isParchmentMode
                        ? 'bg-[#fffbf0] border-amber-300/60 hover:bg-amber-100/70 text-stone-800'
                        : 'bg-slate-800/70 border-slate-700 hover:bg-slate-750 text-slate-300'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedStep.id === step.id
                      ? isParchmentMode ? 'bg-amber-800 text-white' : 'bg-stone-900 text-amber-300'
                      : isParchmentMode ? 'bg-amber-200 text-amber-900' : 'bg-slate-700 text-slate-200'
                  }`}>
                    {step.stepNumber}
                  </div>
                  <div className="font-bold text-xs font-serif mt-1 leading-tight">
                    {step.titleTe}
                  </div>
                  <div className="text-[10px] opacity-75 font-mono">
                    {step.stageTe}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Stage Detail Display */}
            <div className={`p-6 md:p-8 rounded-2xl border ${
              isParchmentMode
                ? 'bg-amber-50/70 border-amber-300/60 text-stone-800'
                : 'bg-slate-850 border-slate-700 text-slate-200'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white font-serif font-bold text-xl flex items-center justify-center shadow">
                    {selectedStep.stepNumber}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-amber-900 dark:text-amber-200">
                      {selectedStep.titleTe}
                    </h4>
                    <div className="text-xs font-mono text-stone-500 dark:text-slate-400">
                      {selectedStep.titleEn} • {selectedStep.stageTe}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                  {selectedStep.scriptureReference}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                      దశ వివరణ & తాత్త్విక ప్రక్రియ:
                    </h5>
                    <p className={`text-base leading-relaxed ${getFontSizeClass()}`}>
                      {selectedStep.explanationTe}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    isParchmentMode ? 'bg-amber-100/50 border-amber-200' : 'bg-slate-900/50 border-slate-800'
                  }`}>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      కీలక తాత్త్విక సూత్రం:
                    </span>
                    <div className="text-sm font-semibold italic text-stone-800 dark:text-amber-200 mt-1">
                      {selectedStep.keyConceptTe}
                    </div>
                  </div>

                  {selectedStep.scriptureVerseSanskrit && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                      <div className="font-bold text-amber-800 dark:text-amber-300 font-serif">
                        {selectedStep.scriptureVerseSanskrit}
                      </div>
                      {selectedStep.scriptureVerseMeaningTe && (
                        <div className="text-stone-600 dark:text-slate-400">
                          {selectedStep.scriptureVerseMeaningTe}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Next / Previous Quick Jump */}
                <div className="space-y-3 flex flex-col justify-center">
                  {selectedStep.stepNumber > 1 && (
                    <button
                      onClick={() => setSelectedStep(CREATION_FLOW_STEPS[selectedStep.stepNumber - 2])}
                      className="p-3 rounded-xl border border-amber-500/30 text-xs font-medium text-left hover:bg-amber-500/10 transition"
                    >
                      <span className="text-stone-500 dark:text-slate-400 block text-[10px]">← మునుపటి దశ:</span>
                      <span className="font-bold text-amber-700 dark:text-amber-300">
                        {CREATION_FLOW_STEPS[selectedStep.stepNumber - 2].titleTe}
                      </span>
                    </button>
                  )}
                  {selectedStep.stepNumber < 7 && (
                    <button
                      onClick={() => setSelectedStep(CREATION_FLOW_STEPS[selectedStep.stepNumber])}
                      className="p-3 rounded-xl border border-amber-500/30 text-xs font-medium text-left hover:bg-amber-500/10 transition"
                    >
                      <span className="text-stone-500 dark:text-slate-400 block text-[10px]">తదుపరి దశ →:</span>
                      <span className="font-bold text-amber-700 dark:text-amber-300">
                        {CREATION_FLOW_STEPS[selectedStep.stepNumber].titleTe}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 3 – ప్రకృతి మరియు త్రిగుణాలు (TRIGUNAS & TRIANGLE) */}
        {/* ========================================================================= */}
        <section id="gunas" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 3"
            title="ప్రకృతి మరియు త్రిగుణాలు (సామ్యావస్థ నుండి వైవిధ్య సృష్టి)"
            subtitle="సత్వ, రజో, తమో గుణాల సమతుల్యత మరియు ప్రక్షుబ్ధత వల్ల విశ్వం ఎలా రూపుదిద్దుకుంది?"
            isParchmentMode={isParchmentMode}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Triangular Interactive Diagram */}
            <div className={`lg:col-span-5 rounded-3xl border p-6 flex flex-col items-center justify-between text-center ${
              isParchmentMode
                ? 'bg-[#fffaf0]/90 border-[#d4af37]/50 shadow-xl'
                : 'bg-slate-900/80 border-amber-500/30 shadow-2xl'
            }`}>
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  త్రిగుణాత్మక త్రికోణ చక్రం
                </span>
                <button
                  onClick={() => setIsGunaEquilibrium(prev => !prev)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                    isGunaEquilibrium
                      ? 'bg-emerald-600 text-white border-emerald-700'
                      : 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30'
                  }`}
                >
                  స్థితి: {isGunaEquilibrium ? 'సామ్యావస్థ (సృష్టికి పూర్వం)' : 'ప్రక్షుబ్ధావస్థ (సృష్టి వ్యక్తమవుతున్నప్పుడు)'}
                </button>
              </div>

              {/* SVG Triangular Graphic */}
              <div className="relative w-64 h-64 my-4 flex items-center justify-center">
                <svg viewBox="0 0 300 280" className="w-full h-full filter drop-shadow-md">
                  {/* Outer connecting triangle */}
                  <polygon
                    points="150,25 35,240 265,240"
                    fill="none"
                    stroke={isGunaEquilibrium ? '#10b981' : '#d97706'}
                    strokeWidth="3"
                    strokeDasharray={isGunaEquilibrium ? '4 2' : 'none'}
                    className={isGunaEquilibrium ? '' : 'animate-pulse'}
                  />

                  {/* Center Core: Mula Prakriti */}
                  <circle cx="150" cy="160" r="32" fill="#78350f" fillOpacity="0.2" stroke="#d4af37" strokeWidth="2" />
                  <text x="150" y="158" textAnchor="middle" fill="#d4af37" fontSize="11" fontWeight="bold">మూల ప్రకృతి</text>
                  <text x="150" y="172" textAnchor="middle" fill="#f59e0b" fontSize="8">
                    {isGunaEquilibrium ? 'సామ్యావస్థ' : 'స్పందన'}
                  </text>

                  {/* Top Node: Satva */}
                  <g onClick={() => setSelectedGunaId('satva')} className="cursor-pointer hover:opacity-80">
                    <circle cx="150" cy="30" r="26" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                    <text x="150" y="34" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">సత్వ</text>
                  </g>

                  {/* Bottom Left Node: Tamas */}
                  <g onClick={() => setSelectedGunaId('tamas')} className="cursor-pointer hover:opacity-80">
                    <circle cx="45" cy="235" r="26" fill="#334155" stroke="#64748b" strokeWidth="2.5" />
                    <text x="45" y="239" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">తమస్సు</text>
                  </g>

                  {/* Bottom Right Node: Rajas */}
                  <g onClick={() => setSelectedGunaId('rajas')} className="cursor-pointer hover:opacity-80">
                    <circle cx="255" cy="235" r="26" fill="#fca5a5" stroke="#dc2626" strokeWidth="2.5" />
                    <text x="255" y="239" textAnchor="middle" fill="#7f1d1d" fontSize="11" fontWeight="bold">రజస్సు</text>
                  </g>
                </svg>
              </div>

              <p className="text-xs text-stone-600 dark:text-slate-400 mt-2 italic">
                {isGunaEquilibrium
                  ? 'ప్రళయ సమయంలో మూడు గుణాలు సమాన స్థితిలో ఉండి నిశ్చలంగా ఉంటాయి. సృష్టి సాధ్యం కాదు.'
                  : 'భగవత్ సంకల్పంతో త్రిగుణాల సమతౌల్యం చెదిరినప్పుడు సృష్టి వైవిధ్యం ఆరంభమవుతుంది.'}
              </p>
            </div>

            {/* Right: Detailed 3 Guna Cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex gap-2 border-b border-amber-500/20 pb-3">
                {THREE_GUNAS_DATA.map(g => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGunaId(g.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs md:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                      selectedGunaId === g.id
                        ? isParchmentMode
                          ? 'bg-amber-700 text-white shadow-md'
                          : 'bg-amber-500 text-stone-950 shadow-md'
                        : isParchmentMode
                          ? 'bg-amber-100/70 text-stone-700 hover:bg-amber-200'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{g.nameTe}</span>
                  </button>
                ))}
              </div>

              {/* Active Guna Details */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                isParchmentMode
                  ? 'bg-[#fffdf7] border-[#d4af37]/40 shadow-sm'
                  : 'bg-slate-900 border-slate-700'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-amber-900 dark:text-amber-200">
                      {selectedGuna.nameTe} ({selectedGuna.nameEn})
                    </h4>
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                      లక్షణాలు: {selectedGuna.elementAssociation}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2" style={{ backgroundColor: selectedGuna.color }} />
                </div>

                <p className={`text-base leading-relaxed ${getFontSizeClass()}`}>
                  {selectedGuna.cosmicRoleTe}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span className="text-xs font-bold text-amber-600 block mb-1">ప్రధాన గుణాలు:</span>
                    <ul className="text-xs space-y-1">
                      {selectedGuna.characteristicsTe.map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                    <div>
                      <span className="text-xs font-bold text-amber-600 block mb-0.5">సృష్టి పూర్వ సామ్యావస్థ:</span>
                      <p className="text-xs">{selectedGuna.equilibriumStateTe}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 block mb-0.5">మోక్ష సాధనలో పాత్ర:</span>
                      <p className="text-xs">{selectedGuna.spiritualOutcomeTe}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 4 – కాలం మరియు స్వభావం (ROYAL ANALOGY & EXAMPLES) */}
        {/* ========================================================================= */}
        <section id="kala-svabhava" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 4"
            title="కాలం మరియు స్వభావం (రాజ రూపక తాత్త్వికత & కపిల సాంఖ్య దర్శనం)"
            subtitle="కాలం కర్మలను ఎలా పక్వానికి తెస్తుంది? స్వభావం జీవుడిని ఎలా నడిపిస్తుంది? (PDF Slides 10–13, 17)"
            isParchmentMode={isParchmentMode}
          />

          {/* Royal Analogy Banner */}
          <div className="p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-600/15 via-amber-700/10 to-indigo-900/20 backdrop-blur-md shadow-xl">
            <h4 className="text-xl md:text-2xl font-bold font-serif text-amber-900 dark:text-amber-200 text-center mb-6">
              {KALA_SVABHAVA_ANALOGY.titleTe}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {KALA_SVABHAVA_ANALOGY.analogyParts.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border text-center space-y-2 ${
                    isParchmentMode
                      ? 'bg-[#fffaf0]/90 border-amber-300 shadow-md'
                      : 'bg-slate-900/90 border-slate-700 shadow-xl'
                  }`}
                >
                  <div className="text-3xl mb-1">
                    {item.symbol}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {item.analogyRoleTe}
                  </div>
                  <div className="text-xl font-bold font-serif text-amber-900 dark:text-amber-100">
                    {item.roleTe}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                    {item.descTe}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs md:text-sm text-stone-700 dark:text-slate-300 mt-6 max-w-3xl mx-auto italic">
              {KALA_SVABHAVA_ANALOGY.deepInsightTe}
            </p>
          </div>

          {/* PDF Slides 10 & 11: కాలం పాత్ర మరియు స్వభావం ప్రత్యేకత */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PDF Slide 10: కాలం పాత్ర */}
            <div className={`p-6 rounded-3xl border space-y-4 ${
              isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-lg' : 'bg-slate-900/80 border-slate-700 shadow-xl'
            }`}>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">PDF Slide 10 • కాల శక్తి</span>
                  <h4 className="text-xl font-bold font-serif text-amber-900 dark:text-amber-200">
                    ⏳ కాలం పాత్ర – జడ ప్రకృతిని కదిలించే శక్తి
                  </h4>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300">
                  &ldquo;కాలోఽస్మి లోకక్షయకృత్&rdquo; (గీత 11.32)
                </span>
              </div>
              <div className="space-y-2.5 text-xs md:text-sm">
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-amber-800 dark:text-amber-300">1. ప్రళయానంతర మేల్కొలుపు: </span>
                  <span className="text-stone-700 dark:text-slate-300">సృష్టికి ముందు ప్రకృతి, జీవులు భగవంతునిలో లీనమై నిద్రాణ స్థితిలో ఉంటాయి. భగవంతుని సంకల్పం కలగగానే మొదట <strong>&lsquo;కాలం&rsquo;</strong> మేల్కొంటుంది.</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-amber-800 dark:text-amber-300">2. గుణ సామ్యావస్థను చెదరగొట్టడం (Catalyst): </span>
                  <span className="text-stone-700 dark:text-slate-300">సమాన స్థితిలో నిశ్చలంగా ఉన్న సత్వ, రజో, తమో గుణాలలో మొదటి కదలిక (క్షోభం) కలిగించేది కాలమే.</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-amber-800 dark:text-amber-300">3. కర్మ పరిపాకం (Ripening of Karma): </span>
                  <span className="text-stone-700 dark:text-slate-300">జీవుల పూర్వజన్మ కర్మలు ఏ సమయంలో ఫలించాలో, ఎప్పుడు జన్మించాలో నిర్ణయించేది కాలశక్తి.</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-amber-800 dark:text-amber-300">4. పరిణామ చక్రం: </span>
                  <span className="text-stone-700 dark:text-slate-300">ఉత్పత్తి (పుట్టుక) → స్థితి (పెరుగుదల) → పరిణామం (మార్పు) → క్షయం (తరుగుదల) → లయం (నాశనం) అనే పంచ దశలను కాలం శాసిస్తుంది.</span>
                </div>
              </div>
            </div>

            {/* PDF Slide 11: స్వభావం ప్రత్యేకత */}
            <div className={`p-6 rounded-3xl border space-y-4 ${
              isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-lg' : 'bg-slate-900/80 border-slate-700 shadow-xl'
            }`}>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">PDF Slide 11 • స్వభావ శక్తి</span>
                  <h4 className="text-xl font-bold font-serif text-amber-900 dark:text-amber-200">
                    🌱 స్వభావం ప్రత్యేకత – వైవిధ్యాన్ని నిర్ణయించే అంతర్గత శక్తి
                  </h4>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300">
                  &ldquo;స్వభావస్తు ప్రవర్తతే&rdquo; (గీత 5.14)
                </span>
              </div>
              <div className="space-y-2.5 text-xs md:text-sm">
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">1. సహజ లక్షణాల మూలం: </span>
                  <span className="text-stone-700 dark:text-slate-300">సృష్టిలో ప్రతి పదార్థానికి, ప్రతి జీవికి ఒక నిర్దిష్టమైన సహజ గుణం (Inherent Nature) ఉండేలా చేసేదే స్వభావం.</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">2. పంచభూతాల ధర్మాలు: </span>
                  <span className="text-stone-700 dark:text-slate-300">🔥 అగ్ని కాల్చడం, 💧 నీరు చల్లబరచడం, 🌬️ వాయువు వీచడం, 🌍 భూమి భరించడం — ఇవన్నీ భగవత్ సంకల్పం చేత నిర్ణయించబడిన స్వభావ నియమాలే.</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">3. జీవుల సంస్కార ముద్రలు: </span>
                  <span className="text-stone-700 dark:text-slate-300">గత జన్మల కర్మ వాసనలు సూక్ష్మ శరీరంలో <strong>&lsquo;స్వభావం&rsquo;</strong>గా నిక్షిప్తమై ఉండి, కొత్త జన్మలో జీవి యొక్క అభిరుచులను, ఆలోచనలను నడిపిస్తాయి (గీత 18.60).</span>
                </div>
                <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-white border-amber-200/80' : 'bg-slate-800/60 border-slate-700'}`}>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">4. విత్తన ఉపమానం: </span>
                  <span className="text-stone-700 dark:text-slate-300">వర్షపు నీరు (కాలం) ఒక్కటే అయినా, వేప విత్తనం చేదుగాను, మామిడి విత్తనం తీయగాను మారడానికి కారణం ఆ విత్తనాలలో దాగి ఉన్న <strong>&lsquo;స్వభావమే&rsquo;</strong>!</span>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Slides 12 & 13: సమన్వయ సూత్రం & కపిల మహర్షి సాంఖ్య వేదాంత దర్శనం */}
          <div className={`p-6 md:p-8 rounded-3xl border ${
            isParchmentMode ? 'bg-[#fffaf0]/95 border-[#d4af37]/50 shadow-lg' : 'bg-slate-900/90 border-amber-500/30 shadow-xl'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  PDF Slide 12 • సమన్వయ సూత్రం (Synthesis Formula)
                </span>
                <h4 className="text-xl font-bold font-serif text-amber-950 dark:text-amber-200">
                  కాలం, స్వభావం, కర్మల సమగ్ర సమన్వయం
                </h4>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-amber-50 border-amber-200' : 'bg-slate-800 border-slate-700'}`}>
                    <strong>• కాలం లేకపోతే:</strong> సృష్టిలో కదలిక (Motion) ఉండదు; ప్రకృతి నిశ్చలంగా ఉండిపోతుంది.
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-amber-50 border-amber-200' : 'bg-slate-800 border-slate-700'}`}>
                    <strong>• స్వభావం లేకపోతే:</strong> సృష్టిలో వైవిధ్యం (Diversity) ఉండదు; అన్నీ ఒకేలా జడంగా ఉంటాయి.
                  </div>
                  <div className={`p-3 rounded-xl border ${isParchmentMode ? 'bg-amber-50 border-amber-200' : 'bg-slate-800 border-slate-700'}`}>
                    <strong>• కర్మ లేకపోతే:</strong> జీవుల జన్మలలో న్యాయం (Cosmic Justice) మరియు పరిణామ క్రమం ఉండవు.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    PDF Slide 13 • శ్రీమద్భాగవతం 3వ స్కంధం, 26వ అధ్యాయం (కపిల గీత)
                  </span>
                  <span className="text-xs font-serif font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200">
                    కపిల మహర్షి – దేవహూతి సంవాదం
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                  <p className="text-sm md:text-base font-serif font-bold text-amber-950 dark:text-amber-100">
                    &ldquo;దైవాత్ క్షుభితధర్మిణ్యాం స్వస్యాం యోనౌ పరః పుమాన్ । ఆధత్త వీర్యం సాఽసూత మహత్తత్త్వం హిరణ్మయమ్ ॥&rdquo; (భాగవతం 3.26.19)
                  </p>
                  <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed">
                    <strong>తాత్పర్యం:</strong> భగవంతుని అవతారమైన కపిల మహర్షి తల్లి దేవహూతికి ఉపదేశిస్తూ — పరమపురుషుడు జీవుల అదృష్ట (కర్మ) వశాత్తు క్షోభించిన ప్రకృతి యందు తన కాల-స్వభావాత్మక చైతన్య వీర్యాన్ని (ఈక్షణ శక్తిని) ప్రవేశపెట్టగా, ఆ మూలప్రకృతి నుండి మొట్టమొదట విశ్వవ్యాప్త బుద్ధి రూపమైన <strong>&lsquo;హిరణ్మయ మహత్తత్త్వము&rsquo;</strong>, ఆపై అహంకారం, పంచ తన్మాత్రలు, ఇంద్రియాలు మరియు పంచ మహాభూతాలతో కూడిన <strong>24 తత్త్వాల విశ్వ నిర్మాణం</strong> ఆవిర్భవించింది.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 5 – భగవద్గీతలో సృష్టి రహస్యం (SANSKRIT VERSES & INTERPRETATION) */}
        {/* ========================================================================= */}
        <section id="gita-verses" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 5"
            title="భగవద్గీతలో సృష్టి తత్వం (మూల సంస్కృత శ్లోకాలు)"
            subtitle="శ్రీకృష్ణ పరమాత్మ స్వయంగా వెల్లడించిన సృష్టి, కాలం మరియు మాయా రహస్యాలు"
            isParchmentMode={isParchmentMode}
          />

          {/* Verse Selector Tabs */}
          <div className="flex flex-wrap gap-3">
            {GITA_CREATION_VERSES.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedVerse(v)}
                className={`px-4 py-2.5 rounded-2xl border text-sm font-bold transition flex items-center gap-2 ${
                  selectedVerse.id === v.id
                    ? isParchmentMode
                      ? 'bg-amber-700 text-white border-amber-800 shadow-md'
                      : 'bg-amber-500 text-stone-950 border-amber-300 shadow-md'
                    : isParchmentMode
                      ? 'bg-[#fffaf0] border-amber-300 text-stone-700 hover:bg-amber-100'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{v.chapterVerse}</span>
                <span className="text-xs opacity-75 font-normal">({v.topicTe})</span>
              </button>
            ))}
          </div>

          {/* Illuminated Verse Card */}
          <div className={`rounded-3xl border-2 p-6 md:p-10 backdrop-blur-md shadow-2xl relative ${
            isParchmentMode
              ? 'bg-[#fffaf2]/95 border-[#d4af37]/70 text-stone-900 shadow-amber-900/10'
              : 'bg-slate-900/90 border-amber-500/40 text-slate-100 shadow-indigo-950/80'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  శ్రీమద్భగవద్గీత • {selectedVerse.chapterVerse}
                </span>
                <h3 className="text-2xl font-bold font-serif text-amber-900 dark:text-amber-200">
                  {selectedVerse.topicTe}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleReadAloud(`${selectedVerse.verseSanskrit}. దీని అర్థం: ${selectedVerse.simpleMeaningTe}`)}
                  className="px-3 py-1.5 rounded-xl border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition flex items-center gap-1.5 text-xs font-medium"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>శ్లోక ఉచ్ఛారణ</span>
                </button>
              </div>
            </div>

            {/* Original Sanskrit (Devanagari) */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center my-6 space-y-3">
              <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest font-sans">
                మూల సంస్కృత శ్లోకం (దేవనాగరి లిపి)
              </div>
              <div className="text-xl md:text-2xl font-serif text-amber-950 dark:text-amber-100 leading-relaxed font-semibold whitespace-pre-line">
                {selectedVerse.verseSanskrit}
              </div>
              <div className="text-sm font-serif italic text-amber-800 dark:text-amber-300 pt-2 border-t border-amber-500/20 whitespace-pre-line">
                తెలుగు లిప్యంతరీకరణ: {selectedVerse.verseTeluguTransliteration}
              </div>
            </div>

            {/* Word by Word Meanings */}
            <div className="mb-6 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                పదచ్ఛేదం & ప్రతిపదార్థం:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {selectedVerse.wordMeaningTe.map((wbw, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-xs flex justify-between ${
                      isParchmentMode ? 'bg-amber-50/60 border-amber-200' : 'bg-slate-800/60 border-slate-700'
                    }`}
                  >
                    <span className="font-bold font-serif text-amber-800 dark:text-amber-300">{wbw.word}</span>
                    <span className="text-stone-600 dark:text-slate-400">{wbw.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Telugu Meaning */}
            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                సులభ శ్లోక తాత్పర్యం:
              </h5>
              <p className={`text-base font-medium leading-relaxed ${getFontSizeClass()} ${
                isParchmentMode ? 'text-stone-800' : 'text-slate-200'
              }`}>
                {selectedVerse.simpleMeaningTe}
              </p>
            </div>

            {/* In-depth Philosophical Meaning */}
            <div className={`p-4 rounded-2xl border ${
              isParchmentMode ? 'bg-amber-100/40 border-amber-300/60' : 'bg-slate-800/50 border-slate-700'
            }`}>
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                వేదాంత రహస్య విశ్లేషణ:
              </h5>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-slate-300">
                {selectedVerse.philosophicalInterpretationTe}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 6 – కర్మ సిద్ధాంతం (KARMA CYCLE & GITA 4.37 FIRE) */}
        {/* ========================================================================= */}
        <section id="karma" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 6"
            title="కర్మ సిద్ధాంతం మరియు జన్మ చక్రం"
            subtitle="సంచిత, ప్రారబ్ధ, ఆగామి కర్మల పనితీరు మరియు జ్ఞానాగ్ని ద్వారా కర్మల దగ్ధం"
            isParchmentMode={isParchmentMode}
          />

          {/* Gita 4.37 Jnana Agni Banner */}
          <div className="p-6 rounded-3xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-600/20 via-amber-700/10 to-transparent backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-2xl bg-amber-600 text-white text-3xl shadow-lg">
                🔥
              </div>
              <div className="space-y-2 text-center md:text-left flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  భగవద్గీత 4.37 • జ్ఞానాగ్నిః సర్వకర్మాణి భస్మసాత్కురుతే తథా
                </span>
                <h4 className="text-xl md:text-2xl font-bold font-serif text-amber-900 dark:text-amber-200">
                  మండే అగ్ని కట్టెలన్నింటినీ బూడిద చేసినట్లే, ఆత్మజ్ఞానమనే అగ్ని సమస్త కర్మలను దగ్ధం చేస్తుంది!
                </h4>
                <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300">
                  జీవుడు ఎన్ని జన్మల కర్మల మూటను మోస్తున్నప్పటికీ, పరమాత్మ తత్వాన్ని తెలుసుకున్న మరుక్షణమే సంచిత, ఆగామి కర్మలన్నీ భస్మమై మోక్షం సిద్ధిస్తుంది.
                </p>
              </div>
            </div>
          </div>

          {/* Karma Reincarnation Flow Cycle (6 steps) */}
          <div className={`p-6 md:p-8 rounded-3xl border space-y-6 ${
            isParchmentMode ? 'bg-[#fffaf0]/90 border-amber-300 shadow-lg' : 'bg-slate-900/80 border-slate-800 shadow-xl'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h5 className="text-sm md:text-base font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                సంసార చక్రం: కర్మ నుండి మోక్షం వరకు 6 ముఖ్య సోపానాలు (సోపానాన్ని క్లిక్ చేసి పూర్తి PDF వివరాలను చూడండి)
              </h5>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300">
                ప్రస్తుత సోపానం: {(KARMA_CYCLE_STEPS.find(s => s.id === activeKarmaStepId) || KARMA_CYCLE_STEPS[0]).order} / 6
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
              {KARMA_CYCLE_STEPS.map((st) => {
                const isActive = activeKarmaStepId === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setActiveKarmaStepId(st.id)}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-start ${
                      isActive
                        ? isParchmentMode
                          ? 'bg-amber-100/95 border-amber-600 shadow-md ring-2 ring-amber-500 scale-[1.02]'
                          : 'bg-slate-800 border-amber-400 shadow-lg ring-2 ring-amber-400/50 scale-[1.02]'
                        : isParchmentMode
                          ? 'bg-white border-amber-200 hover:bg-amber-50/80 hover:border-amber-400'
                          : 'bg-slate-850 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shadow-sm ${
                        isActive ? 'bg-amber-700 text-white' : 'bg-amber-600 text-white'
                      }`}>
                        {st.order}
                      </div>
                      <span className="text-lg">{st.icon}</span>
                    </div>
                    <div className="font-bold text-xs md:text-sm font-serif text-amber-900 dark:text-amber-200 leading-snug">
                      {st.nameTe}
                    </div>
                    <div className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 mt-0.5">
                      {st.subtitleTe}
                    </div>
                    <p className="text-[11px] text-stone-700 dark:text-slate-300 mt-2 leading-relaxed">
                      {st.descriptionTe}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Karma Step Detailed View (from PDF Source) */}
            {(() => {
              const activeKarmaStep = KARMA_CYCLE_STEPS.find(s => s.id === activeKarmaStepId) || KARMA_CYCLE_STEPS[0];
              const currentIndex = KARMA_CYCLE_STEPS.findIndex(s => s.id === activeKarmaStep.id);
              return (
                <div className={`p-6 md:p-8 rounded-2xl border-2 transition-all space-y-6 ${
                  isParchmentMode
                    ? 'bg-[#fffdf7] border-amber-500/60 shadow-md'
                    : 'bg-slate-900 border-amber-500/40 shadow-xl'
                }`}>
                  {/* Step Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-amber-500/20">
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white font-serif font-bold text-2xl flex items-center justify-center shadow-md flex-shrink-0">
                        {activeKarmaStep.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-600 text-white">
                            సోపానం {activeKarmaStep.order} / 6
                          </span>
                          <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                            {activeKarmaStep.pdfSlideRefTe}
                          </span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold font-serif text-amber-950 dark:text-amber-100 mt-1">
                          {activeKarmaStep.nameTe} ({activeKarmaStep.nameEn})
                        </h4>
                        <p className="text-xs md:text-sm font-semibold text-amber-800 dark:text-amber-300 mt-0.5">
                          {activeKarmaStep.subtitleTe} • {activeKarmaStep.subtitleEn}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleBookmark(activeKarmaStep.nameTe)}
                        className={`p-2 rounded-lg border transition ${
                          bookmarks.includes(activeKarmaStep.nameTe)
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'border-amber-500/30 text-amber-600 hover:bg-amber-500/10'
                        }`}
                        title="బుక్‌మార్క్ చేయండి"
                      >
                        {bookmarks.includes(activeKarmaStep.nameTe) ? (
                          <BookmarkCheck className="w-4 h-4" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleReadAloud(`${activeKarmaStep.nameTe}. ${activeKarmaStep.descriptionTe} ${activeKarmaStep.philosophicalDepthTe}`)}
                        className="px-3 py-1.5 rounded-xl border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition flex items-center gap-1.5 text-xs font-medium"
                        title="వినండి"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>వినండి</span>
                      </button>
                    </div>
                  </div>

                  {/* Sanskrit Shloka & Meaning Banner */}
                  <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent border border-amber-500/30 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                      ప్రామాణిక వేదాంత / గీతా శ్లోక సూత్రం
                    </div>
                    <div className="text-base md:text-lg font-bold font-serif text-amber-950 dark:text-amber-100">
                      &ldquo;{activeKarmaStep.sanskritShlokaTe}&rdquo;
                    </div>
                    <div className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed">
                      <strong>తాత్పర్యం:</strong> {activeKarmaStep.shlokaMeaningTe}
                    </div>
                  </div>

                  {/* Complete Overview Paragraph */}
                  <div>
                    <h6 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                      సమగ్ర వివరణ (Complete Explanation):
                    </h6>
                    <p className={`text-base leading-relaxed ${getFontSizeClass()} ${
                      isParchmentMode ? 'text-stone-800' : 'text-slate-200'
                    }`}>
                      {activeKarmaStep.descriptionTe}
                    </p>
                  </div>

                  {/* 4 Key Points from PDF Source */}
                  <div className="space-y-3">
                    <h6 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      PDF ఆధారిత ముఖ్య అంశాలు (Detailed Key Points from PDF Source):
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {activeKarmaStep.keyPointsTe.map((pt, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border space-y-1.5 ${
                            isParchmentMode
                              ? 'bg-amber-50/70 border-amber-200 text-stone-800'
                              : 'bg-slate-800/70 border-slate-700 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="font-bold font-serif text-sm md:text-base text-amber-900 dark:text-amber-200">
                              {pt.heading}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed pl-7">
                            {pt.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Philosophical Depth & Analogy Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border space-y-1.5 ${
                      isParchmentMode ? 'bg-white border-amber-300/60' : 'bg-slate-800/60 border-slate-700'
                    }`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                        తాత్త్విక లోతు & వేదాంత రహస్యం (Philosophical Depth):
                      </span>
                      <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed">
                        {activeKarmaStep.philosophicalDepthTe}
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border space-y-1.5 ${
                      isParchmentMode ? 'bg-amber-50/80 border-amber-300/60' : 'bg-slate-800/60 border-slate-700'
                    }`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                        సులభ ఉపమానం (Vedic Analogy):
                      </span>
                      <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed italic">
                        {activeKarmaStep.analogyTe}
                      </p>
                    </div>
                  </div>

                  {/* Footer: Scriptural Source + Prev/Next Step Navigation */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-500/20">
                    <div className="flex items-center gap-2 text-xs">
                      <BookOpen className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="font-bold text-amber-800 dark:text-amber-300">శాస్త్ర ప్రమాణం:</span>
                      <span className="text-stone-600 dark:text-slate-400">{activeKarmaStep.sourceNoteTe}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {currentIndex > 0 && (
                        <button
                          onClick={() => setActiveKarmaStepId(KARMA_CYCLE_STEPS[currentIndex - 1].id)}
                          className="px-3.5 py-1.5 rounded-xl border border-amber-500/40 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-500/15 transition"
                        >
                          ← సోపానం {KARMA_CYCLE_STEPS[currentIndex - 1].order}: {KARMA_CYCLE_STEPS[currentIndex - 1].nameTe}
                        </button>
                      )}
                      {currentIndex < KARMA_CYCLE_STEPS.length - 1 && (
                        <button
                          onClick={() => setActiveKarmaStepId(KARMA_CYCLE_STEPS[currentIndex + 1].id)}
                          className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow"
                        >
                          సోపానం {KARMA_CYCLE_STEPS[currentIndex + 1].order}: {KARMA_CYCLE_STEPS[currentIndex + 1].nameTe} →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 7 – మోక్ష మార్గాలు (4 YOGAS & RAJA YOGA 8 LIMBS) */}
        {/* ========================================================================= */}
        <section id="moksha" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 7"
            title="మోక్షానికి నాలుగు మార్గాలు (చతుర్విధ యోగాలు)"
            subtitle="జ్ఞాన, భక్తి, కర్మ మరియు రాజ యోగాల సమగ్ర తాత్త్విక మార్గదర్శనం (PDF Slides 18–23)"
            isParchmentMode={isParchmentMode}
          />

          {/* PDF Slide 18: మోక్షం అంటే ఏమిటి? – బంధం vs మోక్షం */}
          <div className={`p-6 md:p-8 rounded-3xl border space-y-5 ${
            isParchmentMode ? 'bg-[#fffaf0]/95 border-[#d4af37]/50 shadow-lg' : 'bg-slate-900/80 border-amber-500/30 shadow-xl'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  PDF Slide 18 • మోక్ష తత్వ నిర్వచనం
                </span>
                <h4 className="text-xl md:text-2xl font-bold font-serif text-amber-950 dark:text-amber-200">
                  మోక్షం అంటే ఏమిటి? — జనన మరణ చక్రం నుండి శాశ్వత విముక్తి
                </h4>
              </div>
              <span className="text-xs font-serif font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                &ldquo;న స పునరావర్తతే&rdquo; — ఛాందోగ్య ఉపనిషత్తు 8.15.1
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* బంధం (Bondage) */}
              <div className={`p-5 rounded-2xl border space-y-2.5 ${
                isParchmentMode ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-800/40'
              }`}>
                <h5 className="font-bold font-serif text-base text-red-900 dark:text-red-300">
                  ⛓️ సంసార బంధం (Bondage – Samsara)
                </h5>
                <ul className="text-xs md:text-sm space-y-1.5 text-stone-700 dark:text-slate-300">
                  <li><strong>• అవిద్య (అజ్ఞానం):</strong> నిత్యమైన ఆత్మను మర్చిపోయి, నశించే దేహమే &lsquo;నేను&rsquo; అని భ్రమపడటం.</li>
                  <li><strong>• త్రిగుణ బంధం:</strong> సత్వ, రజో, తమో గుణాల ప్రవాహంలో కొట్టుకుపోతూ కామ-క్రోధాలకు బానిస కావడం.</li>
                  <li><strong>• కర్తృత్వ అహంకారం:</strong> &ldquo;ఈ పనులన్నీ నేనే చేస్తున్నాను, ఫలితాలన్నీ నాకే కావాలి&rdquo; అనే అహంకార మమకారాలు.</li>
                  <li><strong>• పునర్జన్మ చక్రం:</strong> కర్మఫలాలను అనుభవించడానికి మళ్లీ మళ్లీ గర్భవాసం, జన్మ, జరామరణ దుఃఖాలను పొందడం.</li>
                </ul>
              </div>

              {/* మోక్షం (Liberation) */}
              <div className={`p-5 rounded-2xl border space-y-2.5 ${
                isParchmentMode ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800/40'
              }`}>
                <h5 className="font-bold font-serif text-base text-emerald-900 dark:text-emerald-300">
                  🕊️ మోక్ష స్థితి (Liberation – Moksha)
                </h5>
                <ul className="text-xs md:text-sm space-y-1.5 text-stone-700 dark:text-slate-300">
                  <li><strong>• ఆత్మ సాక్షాత్కారం:</strong> &ldquo;నేను శరీరాన్ని కాదు, పరమాత్మతో ఏకమైన సచ్చిదానంద ఆత్మను&rdquo; అనే అపరోక్ష జ్ఞానం.</li>
                  <li><strong>• త్రిగుణాతీత స్థితి:</strong> మూడు గుణాల ఆటుపోట్లకు అతీతమై, సుఖదుఃఖాలలో నిశ్చలమైన సమత్వ బుద్ధిని కలిగి ఉండటం.</li>
                  <li><strong>• కర్మక్షయం:</strong> జ్ఞానాగ్ని చేత మరియు భగవత్ కృప చేత సంచిత, ఆగామి కర్మలన్నీ పూర్తిగా దగ్ధం కావడం.</li>
                  <li><strong>• పునరావృత్తి రహిత శాశ్వత ఆనందం:</strong> మళ్లీ ఈ భౌతిక సంసారంలోకి తిరిగి రాని శాశ్వత పరమానంద స్థితి (గీత 8.15, 15.6).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4 Yogas Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FOUR_MOKSHA_PATHS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedMokshaPath(p)}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  selectedMokshaPath.id === p.id
                    ? isParchmentMode
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md ring-2 ring-amber-400/40'
                      : 'bg-amber-500 text-stone-950 border-amber-300 shadow-lg ring-2 ring-amber-300/40'
                    : isParchmentMode
                      ? 'bg-[#fffdf7] border-amber-300 text-stone-800 hover:bg-amber-100'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                <div className="font-bold text-base font-serif">{p.nameTe}</div>
                <div className="text-xs opacity-75">{p.nameEn}</div>
              </button>
            ))}
          </div>

          {/* Selected Yoga Deep Dive */}
          <div className={`p-6 md:p-8 rounded-3xl border ${
            isParchmentMode ? 'bg-[#fffaf2] border-[#d4af37]/50 shadow-xl' : 'bg-slate-900 border-slate-700 shadow-2xl'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-500/20 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  యోగాభ్యాస మార్గం
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-amber-900 dark:text-amber-200">
                  {selectedMokshaPath.nameTe} ({selectedMokshaPath.nameEn})
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
                ప్రధాన ప్రశ్న: {selectedMokshaPath.coreQuestionTe}
              </span>
            </div>

            <p className={`text-base leading-relaxed mb-6 ${getFontSizeClass()} ${
              isParchmentMode ? 'text-stone-800' : 'text-slate-200'
            }`}>
              {selectedMokshaPath.philosophyTe}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-xl border ${
                isParchmentMode ? 'bg-amber-50/60 border-amber-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <h5 className="text-xs font-bold uppercase text-amber-600 tracking-wider mb-2">సాధనా సూత్రాలు:</h5>
                <ul className="text-xs space-y-1.5">
                  {selectedMokshaPath.keyConceptsTe.map((cp, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-xl border ${
                isParchmentMode ? 'bg-amber-50/60 border-amber-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <h5 className="text-xs font-bold uppercase text-emerald-600 tracking-wider mb-2">ఆచరణ & గీతా సూత్రం:</h5>
                <p className="text-xs mb-3">{selectedMokshaPath.practiceMethodTe}</p>
                <div className="text-xs pt-2 border-t border-amber-500/20">
                  <span className="font-bold text-stone-700 dark:text-slate-400">ఆధార గ్రంథం: </span>
                  <span className="font-medium text-amber-700 dark:text-amber-300">{selectedMokshaPath.gitaReference}</span>
                </div>
              </div>
            </div>

            {/* Sub-module Limbs if available (Navavidha Bhakti 9 limbs OR Raja Yoga Ashtanga 8 limbs) */}
            {selectedMokshaPath.limbsTe && (
              <div className="mt-8 pt-6 border-t border-amber-500/20">
                <h4 className="text-lg font-bold font-serif text-amber-800 dark:text-amber-300 mb-4 text-center">
                  {selectedMokshaPath.id === 'bhakti-marga'
                    ? 'ప్రహ్లాదుడు ఉపదేశించిన నవవిధ భక్తి మార్గాలు & ఆదర్శ భక్తులు (భాగవతం 7.5.23 • PDF Slide 20)'
                    : 'పాతంజల అష్టాంగ యోగం — ఎనిమిది అంగాలు (PDF Slide 22)'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedMokshaPath.limbsTe.map((limb, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs md:text-sm ${
                        isParchmentMode ? 'bg-white border-amber-200 shadow-sm' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      <span className="font-medium leading-relaxed">{limb}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* PDF Slide 23: నాలుగు మోక్ష మార్గాల తులనాత్మక పట్టిక (Comparative Matrix) */}
          <div className={`p-6 md:p-8 rounded-3xl border overflow-x-auto ${
            isParchmentMode ? 'bg-[#fffaf0]/90 border-[#d4af37]/50 shadow-lg' : 'bg-slate-900/80 border-slate-700 shadow-xl'
          }`}>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                PDF Slide 23 • సమగ్ర తులనాత్మక పట్టిక (Comparative Matrix)
              </span>
              <h4 className="text-xl font-bold font-serif text-amber-950 dark:text-amber-200">
                నాలుగు మోక్ష మార్గాల తులనాత్మక విశ్లేషణ (4 Paths to Liberation Compared)
              </h4>
            </div>
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className={`border-b-2 ${isParchmentMode ? 'border-amber-300 bg-amber-100/70 text-amber-950' : 'border-slate-700 bg-slate-800 text-amber-200'}`}>
                  <th className="p-3 font-serif font-bold">విభాగం</th>
                  <th className="p-3 font-serif font-bold">1. జ్ఞాన మార్గం (Jnana)</th>
                  <th className="p-3 font-serif font-bold">2. భక్తి మార్గం (Bhakti)</th>
                  <th className="p-3 font-serif font-bold">3. కర్మ మార్గం (Karma)</th>
                  <th className="p-3 font-serif font-bold">4. రాజ యోగం (Dhyana)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/20">
                <tr>
                  <td className="p-3 font-bold text-amber-800 dark:text-amber-300">ప్రధాన సాధనం</td>
                  <td className="p-3">బుద్ధి & ఆత్మ విచారణ</td>
                  <td className="p-3">హృదయం, ప్రేమ & శరణాగతి</td>
                  <td className="p-3">నిష్కామ కర్తవ్య ఆచరణ</td>
                  <td className="p-3">మనస్సు నియంత్రణ & ధ్యానం</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-800 dark:text-amber-300">మూల సూత్రం</td>
                  <td className="p-3">&ldquo;నేను ఎవరిని?&rdquo; (ఆత్మ-అనాత్మ వివేకం)</td>
                  <td className="p-3">&ldquo;దాసోఽహమ్ / సర్వం శ్రీకృష్ణార్పణం&rdquo;</td>
                  <td className="p-3">&ldquo;కర్మణ్యేవాధికారస్తే&rdquo; (ఫలాపేక్ష త్యాగం)</td>
                  <td className="p-3">&ldquo;యోగశ్చిత్తవృత్తి నిరోధః&rdquo;</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-800 dark:text-amber-300">ప్రధాన ప్రక్రియ</td>
                  <td className="p-3">శ్రవణం, మననం, నిదిధ్యాసనం</td>
                  <td className="p-3">నవవిధ భక్తి & నామస్మరణ</td>
                  <td className="p-3">ఈశ్వరార్పణ బుద్ధితో లోకసేవ</td>
                  <td className="p-3">అష్టాంగ యోగం (యమ నుండి సమాధి)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-800 dark:text-amber-300">శాస్త్ర ప్రమాణం</td>
                  <td className="p-3">ఉపనిషత్తులు, భగవద్గీత 2 & 4 అధ్యాయాలు</td>
                  <td className="p-3">శ్రీమద్భాగవతం, గీత 9, 12, 18.66</td>
                  <td className="p-3">భగవద్గీత 3వ & 5వ అధ్యాయాలు</td>
                  <td className="p-3">పతంజలి యోగ సూత్రాలు, గీత 6వ అధ్యాయం</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-800 dark:text-amber-300">అంతిమ ఫలితం</td>
                  <td className="p-3">అవిద్యా నాశనం & బ్రహ్మైక్య అనుభూతి</td>
                  <td className="p-3">భగవత్ కృప చేత సంసార తరణం</td>
                  <td className="p-3">చిత్తశుద్ధి ద్వారా జ్ఞాన/మోక్ష ప్రాప్తి</td>
                  <td className="p-3">నిర్వికల్ప సమాధి & ఆత్మ దర్శనం</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 8 – ఆచరణాత్మక ఆధ్యాత్మికత (DAILY SADHANA TOOLKIT) */}
        {/* ========================================================================= */}
        <section id="sadhana" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 8"
            title="ఆధునిక జీవితంలో ఆధ్యాత్మిక సాధన (నిత్య సాధనా వేదిక)"
            subtitle="ఈశ్వరార్పణం, సమత్వ బుద్ధి, నామస్మరణ మరియు సాక్షి భావం ద్వారా నిత్య జీవితంలో ముక్తి అనుభూతి (PDF Slides 24–26)"
            isParchmentMode={isParchmentMode}
          />

          {/* PDF Slide 24: భక్తి + నిష్కామ కర్మ సమన్వయం */}
          <div className="p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-600/15 via-amber-500/10 to-emerald-600/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                  PDF Slide 24 • ఆధునిక మానవునికి అత్యుత్తమ సమన్వయ మార్గం
                </span>
                <h4 className="text-xl md:text-2xl font-bold font-serif text-amber-950 dark:text-amber-100">
                  భక్తి + నిష్కామ కర్మ సమన్వయం: &ldquo;చేతులు పనిలో — మనస్సు దేవునిలో!&rdquo;
                </h4>
              </div>
              <span className="text-xs font-serif font-bold px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-200">
                &ldquo;మామనుస్మర యుధ్య చ&rdquo; (భగవద్గీత 8.7)
              </span>
            </div>
            <p className="text-xs md:text-sm text-stone-700 dark:text-slate-300 leading-relaxed">
              మోక్షం కోసం సంసారాన్ని, కుటుంబాన్ని వదిలి అడవులకు వెళ్లవలసిన అవసరం లేదు. శ్రీకృష్ణ పరమాత్మ భగవద్గీతలో అర్జునుడికి ఉపదేశించినట్లు — లోకంలో మన కర్తవ్యాన్ని (ఉద్యోగం, వ్యాపారం, కుటుంబ బాధ్యతలు) అత్యంత నిষ্ঠతో చేస్తూనే, ఫలితాన్ని భగవంతునికి అర్పించి (<strong>నిష్కామ కర్మ</strong>), అంతరంగంలో నిరంతరం భగవన్నామ స్మరణ మరియు ప్రేమను (<strong>భక్తి</strong>) నిలుపుకోవడమే కలియుగంలో అత్యంత సులభమైన రాజమార్గం.
            </p>
          </div>

          {/* 4 Daily Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DAILY_SADHANA_PRACTICES.map(p => (
              <div
                key={p.id}
                className={`p-5 rounded-2xl border space-y-3 ${
                  isParchmentMode ? 'bg-[#fffdf7] border-[#d4af37]/40 shadow-sm' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-serif text-base text-amber-900 dark:text-amber-200">
                    {p.titleTe}
                  </h4>
                  <span className="text-xl">{p.icon}</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-slate-400">{p.practiceRuleTe}</p>
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                  <span className="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">లభించే ప్రయోజనం:</span>
                  <span>{p.benefitTe}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Sadhana Toolkit: 3 Tools (Checklist, Japa, Meditation Timer) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Tool 1: Daily Tracker & Streak */}
            <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
              isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-md' : 'bg-slate-900 border-slate-700 shadow-xl'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    దినచర్య సాధనా చెక్‌లిస్ట్
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold">
                    <span>🔥 {streakCount} రోజుల దీక్ష</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {DAILY_SADHANA_PRACTICES.map(p => {
                    const isDone = completedPractices.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        onClick={() => togglePractice(p.id)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition ${
                          isDone
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-800 dark:text-emerald-200'
                            : isParchmentMode ? 'bg-white border-amber-200 hover:bg-amber-100/50' : 'bg-slate-800 border-slate-700'
                        }`}
                      >
                        <span>{p.titleTe}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-400'
                        }`}>
                          {isDone && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-[11px] text-stone-500 dark:text-slate-400 text-center pt-2 border-t border-amber-500/20">
                పూర్తయినవి: {completedPractices.length} / {DAILY_SADHANA_PRACTICES.length}
              </div>
            </div>

            {/* Tool 2: Digital Japa Counter (108 Target) */}
            <div className={`p-6 rounded-3xl border flex flex-col items-center justify-between text-center ${
              isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-md' : 'bg-slate-900 border-slate-700 shadow-xl'
            }`}>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  డిజిటల్ నామ జప మాల
                </span>
                <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                  లక్ష్యం: 108
                </span>
              </div>

              {/* Mantra Selector */}
              <div className="w-full mb-2">
                <select
                  value={selectedMantra}
                  onChange={e => setSelectedMantra(e.target.value)}
                  className={`w-full p-1.5 text-xs rounded-lg border font-serif ${
                    isParchmentMode ? 'bg-white border-amber-300 text-stone-800' : 'bg-slate-800 border-slate-700 text-slate-200'
                  }`}
                >
                  {JAPA_MANTRAS.map((m, idx) => (
                    <option key={idx} value={m.nameTe}>{m.nameTe}</option>
                  ))}
                </select>
              </div>

              <div className="my-2">
                <button
                  onClick={incrementJapa}
                  className="w-24 h-24 rounded-full border-4 border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-xl hover:scale-105 active:scale-95 transition flex flex-col items-center justify-center group"
                >
                  <span className="text-[10px] tracking-wider opacity-80 uppercase">జపం చేయండి</span>
                  <span className="text-2xl font-bold font-mono">{japaCount}</span>
                  <span className="text-[9px] opacity-75">/ 108</span>
                </button>
              </div>

              <div className="w-full flex items-center justify-between text-xs pt-3 border-t border-amber-500/20">
                <span className="font-bold text-amber-700 dark:text-amber-300">
                  పూర్తయిన మాలలు: {completedMalas}
                </span>
                <button
                  onClick={() => { setJapaCount(0); setCompletedMalas(0); }}
                  className="text-stone-500 hover:text-stone-700 text-xs flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> రీసెట్
                </button>
              </div>
            </div>

            {/* Tool 3: Meditation Timer with 432Hz Sound */}
            <div className={`p-6 rounded-3xl border flex flex-col items-center justify-between text-center ${
              isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-md' : 'bg-slate-900 border-slate-700 shadow-xl'
            }`}>
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  ధ్యాన సమయ పాలన (432Hz నాదం)
                </span>
                <span className="text-xs text-stone-500 dark:text-slate-400">సాక్షి భావం</span>
              </div>

              <div className="my-4">
                <div className="text-4xl font-mono font-bold text-amber-900 dark:text-amber-200">
                  {Math.floor(meditationTimeRemaining / 60).toString().padStart(2, '0')}:
                  {(meditationTimeRemaining % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-stone-500 dark:text-slate-400 mt-1">
                  నిశ్శబ్ద ఆత్మ ధ్యానం
                </div>
              </div>

              <div className="flex items-center gap-3 w-full justify-center">
                <button
                  onClick={() => setIsTimerRunning(prev => !prev)}
                  className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
                    isTimerRunning
                      ? 'bg-amber-600 text-white'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isTimerRunning ? 'విరామం' : 'ప్రారంభించు'}</span>
                </button>
                <button
                  onClick={() => { setIsTimerRunning(false); setMeditationTimeRemaining(300); }}
                  className="p-2 rounded-xl border border-stone-300 dark:border-slate-700 hover:bg-stone-200/50 text-xs"
                  title="5 నిమిషాలకు రీసెట్"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Spiritual Reflection Journal (Saved in LocalStorage) */}
          <div className={`p-6 rounded-3xl border ${
            isParchmentMode ? 'bg-[#fffaf0] border-[#d4af37]/50 shadow-md' : 'bg-slate-900 border-slate-700 shadow-xl'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-amber-600" />
                ఆధ్యాత్మిక ఆత్మపరిశీలన డైరీ (Spiritual Reflection Journal)
              </span>
              {noteSavedMessage && (
                <span className="text-xs font-bold text-emerald-600 animate-fadeIn">
                  ✓ భద్రపరచబడింది (Saved)
                </span>
              )}
            </div>
            <textarea
              value={reflectionNote}
              onChange={e => setReflectionNote(e.target.value)}
              placeholder="ఈ రోజు మీ మనస్సులో కలిగిన తాత్త్విక ఆలోచనలు, భగవత్ భావనలు మరియు సాధనా అనుభవాలను ఇక్కడ రాసుకోండి..."
              className={`w-full p-4 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-y min-h-[90px] ${
                isParchmentMode ? 'bg-white border-amber-200 text-stone-900' : 'bg-slate-800 border-slate-700 text-slate-100'
              }`}
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={saveReflectionNote}
                className="px-5 py-2 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white transition shadow"
              >
                ఆలోచనలను భద్రపరచండి
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODULE 9 – జ్ఞాన వృక్షం (INTERACTIVE VEDANTA KNOWLEDGE TREE) */}
        {/* ========================================================================= */}
        <section id="tree" className="space-y-6 pt-8">
          <SectionHeader
            badge="మాడ్యూల్ 9"
            title="ఆధ్యాత్మిక జ్ఞాన వృక్షం (వేదాంత క్రమ దర్శనం)"
            subtitle="పరమాత్మ నుండి మోక్షం వరకు గల 10 ముఖ్య దశల ఇంటరాక్టివ్ మైండ్‌మ్యాప్"
            isParchmentMode={isParchmentMode}
          />

          <SrushtiKnowledgeTree isParchmentMode={isParchmentMode} />
        </section>
      </main>

      {/* ========================================================================= */}
      {/* VEDANTIC GLOSSARY DRAWER / MODAL */}
      {/* ========================================================================= */}
      {isGlossaryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-3xl w-full rounded-3xl border shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[85vh] ${
            isParchmentMode ? 'bg-[#fffaf2] border-amber-600/40 text-stone-900' : 'bg-slate-900 border-amber-500/40 text-slate-100'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  పారిభాషిక నిఘంటువు
                </span>
                <h3 className="text-2xl font-bold font-serif text-amber-700 dark:text-amber-300">
                  వేదాంత సృష్టి పారిభాషిక పదకోశం
                </h3>
              </div>
              <button
                onClick={() => setIsGlossaryOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Search Input inside Glossary */}
            <div className="relative mb-6">
              <Search className="w-4 h-4 absolute left-3 top-3.5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="పదాన్ని శోధించండి (ఉదా: ప్రకృతి, కాలం, సంకల్పం, మోక్షం)..."
                className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isParchmentMode ? 'bg-white border-amber-200' : 'bg-slate-800 border-slate-700'
                }`}
              />
            </div>

            {/* Glossary Term Cards */}
            <div className="space-y-3">
              {filteredGlossary.map((term: VedanticGlossaryItem) => (
                <div
                  key={term.id}
                  className={`p-4 rounded-2xl border transition ${
                    isParchmentMode ? 'bg-amber-50/50 border-amber-200/70' : 'bg-slate-800/60 border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold font-serif text-base text-amber-900 dark:text-amber-200">
                      {term.termTe}
                    </h5>
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                      {term.sanskritRoot ? `${term.sanskritRoot} • ` : ''}{term.termEn}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-700 dark:text-slate-300 mb-2">
                    {term.shortDefTe}
                  </p>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 italic">
                    శాస్త్ర విభాగం: {term.scriptureCategory}
                  </div>
                </div>
              ))}
              {filteredGlossary.length === 0 && (
                <div className="text-center py-8 text-stone-500 text-sm">
                  ఏ పారిభాషిక పదం లభించలేదు.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Subpage Footer */}
      <footer className={`border-t py-8 px-4 mt-16 text-center text-xs ${
        isParchmentMode
          ? 'bg-[#fcf5e5]/90 border-amber-300 text-stone-700'
          : 'bg-[#060810] border-slate-800 text-slate-400'
      }`}>
        <p className="font-serif font-bold text-sm text-amber-800 dark:text-amber-300 mb-1">
          సనాతన భారత్: పౌరాణిక విజ్ఞానం & సమగ్ర చరిత్ర • సృష్టి రహస్య దర్శనం
        </p>
        <p className="max-w-xl mx-auto leading-relaxed">
          ఈ వెబ్‌సైట్ ఉపనిషత్తులు, శ్రీమద్భాగవత పురాణం మరియు శ్రీమద్భగవద్గీతల ప్రామాణిక వేదాంత మూలాలను ఆధునిక తెలుగు సమాజానికి సులభంగా అందించే పరిశోధనాత్మక డిజిటల్ జ్ఞాన వేదిక.
        </p>
      </footer>
    </div>
  );
};

// Reusable Section Header Component
interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  isParchmentMode: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle, isParchmentMode }) => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-2">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
        isParchmentMode
          ? 'bg-amber-100 border-amber-300 text-amber-800'
          : 'bg-amber-950/80 border-amber-500/40 text-amber-300'
      }`}>
        {badge}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold font-serif ${
        isParchmentMode ? 'text-stone-900' : 'text-amber-100'
      }`}>
        {title}
      </h2>
      <p className={`text-sm md:text-base ${
        isParchmentMode ? 'text-stone-600' : 'text-slate-400'
      }`}>
        {subtitle}
      </p>
      <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-2"></div>
    </div>
  );
};
