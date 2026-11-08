import React, { useState, useMemo } from 'react';
import {
  JYOTISHYA_BOOK_METADATA,
  FOUR_HEAD_CHAKRAS_DATA,
  TWELVE_GRAHAS_MASTER_DATA,
  TWELVE_KARMA_HOUSES_DATA,
  NAKSHATRA_THREE_ATMAS_GROUPING,
  KUNDALI_CASE_STUDIES,
  ALL_48_CHAPTERS_DATA,
  JYOTISHYA_34_QA_DATA,
  type GrahaMasterRecord,
  type KarmaHouseRecord
} from '../../data/jyotishyaData';
import { DEEP_KARMA_DOCTRINE_DATA } from '../../data/srushtiRahasyaData';
import {
  Sparkles,
  BookOpen,
  Search,
  Calculator,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Maximize2,
  X
} from 'lucide-react';

type ActiveSectionTab =
  | 'all'
  | 'foundations_chakras'
  | 'grahas_lagnas'
  | 'karma_houses'
  | 'attributes_matrix'
  | 'nakshatra_dashas'
  | 'case_studies'
  | 'chapters_qa';

export const JyotishyaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveSectionTab>('all');
  const [selectedLagnaNumber, setSelectedLagnaNumber] = useState<number>(1);
  const [selectedGraha, setSelectedGraha] = useState<GrahaMasterRecord>(TWELVE_GRAHAS_MASTER_DATA[0]);
  const [selectedHouse, setSelectedHouse] = useState<KarmaHouseRecord>(TWELVE_KARMA_HOUSES_DATA[0]);
  const [mahadashaGrahaId, setMahadashaGrahaId] = useState<string>('guru');
  const [antardashaGrahaId, setAntardashaGrahaId] = useState<string>('surya');
  const [pratyantardashaGrahaId, setPratyantardashaGrahaId] = useState<string>('kuja');
  const [sukshmadashaGrahaId, setSukshmadashaGrahaId] = useState<string>('sukra');
  const [pranadashaGrahaId, setPranadashaGrahaId] = useState<string>('budha');
  const [activeDashaSubTab, setActiveDashaSubTab] = useState<'antar' | 'pratyantar' | 'sukshma' | 'prana'>('antar');
  const [chapterCategoryFilter, setChapterCategoryFilter] = useState<string>('all');
  const [chapterSearch, setChapterSearch] = useState<string>('');
  const [qaSearch, setQaSearch] = useState<string>('');
  const [selectedChakraImage, setSelectedChakraImage] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);
  const [chakraImageSource, setChakraImageSource] = useState<'source' | 'art'>('source');

  // Selected Lagna Graha for 2:1 Friend/Enemy Calculator
  const selectedLagnaGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.lagnaNumber === selectedLagnaNumber) || TWELVE_GRAHAS_MASTER_DATA[0],
    [selectedLagnaNumber]
  );

  const friendlyGrahas = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.filter(g => g.party === selectedLagnaGraha.party),
    [selectedLagnaGraha]
  );

  const enemyGrahas = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.filter(g => g.party !== selectedLagnaGraha.party),
    [selectedLagnaGraha]
  );

  // Helper to reorder the 12 grahas cyclically starting from a given planet's order
  const getCyclicGrahas = (startGrahaId: string) => {
    const sorted = [...TWELVE_GRAHAS_MASTER_DATA].sort((a, b) => a.dashaOrder - b.dashaOrder);
    const startIdx = sorted.findIndex(g => g.id === startGrahaId);
    if (startIdx === -1) return sorted;
    return [...sorted.slice(startIdx), ...sorted.slice(0, startIdx)];
  };

  // Selected Grahas across all 5 Dasha levels
  const mahaGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.id === mahadashaGrahaId) || TWELVE_GRAHAS_MASTER_DATA[11],
    [mahadashaGrahaId]
  );
  const antarGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.id === antardashaGrahaId) || TWELVE_GRAHAS_MASTER_DATA[4],
    [antardashaGrahaId]
  );
  const pratyantaraGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.id === pratyantardashaGrahaId) || TWELVE_GRAHAS_MASTER_DATA[0],
    [pratyantardashaGrahaId]
  );
  const sukshmaGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.id === sukshmadashaGrahaId) || TWELVE_GRAHAS_MASTER_DATA[6],
    [sukshmadashaGrahaId]
  );
  const pranaGraha = useMemo(
    () => TWELVE_GRAHAS_MASTER_DATA.find(g => g.id === pranadashaGrahaId) || TWELVE_GRAHAS_MASTER_DATA[5],
    [pranadashaGrahaId]
  );

  // 1. Antardasha calculation: (M * A * 3) / 30 -> Quotient = months, Remainder = days
  const antardashaResult = useMemo(() => {
    const product = mahaGraha.dashaYears * antarGraha.dashaYears * 3;
    const months = Math.floor(product / 30);
    const days = product % 30;
    return { product, months, days, totalDays: product };
  }, [mahaGraha, antarGraha]);

  // 2. Pratyantardasha calculation: (M * A * P) / 40 days
  const pratyantaraResult = useMemo(() => {
    const totalDays = (mahaGraha.dashaYears * antarGraha.dashaYears * pratyantaraGraha.dashaYears) / 40;
    const days = Math.floor(totalDays);
    const remHoursTotal = (totalDays - days) * 24;
    const hours = Math.floor(remHoursTotal);
    const minutes = Math.round((remHoursTotal - hours) * 60);
    return { totalDays, days, hours, minutes };
  }, [mahaGraha, antarGraha, pratyantaraGraha]);

  // 3. Sukshma Dasha calculation: (M * A * P * S) / 200 hours
  const sukshmaResult = useMemo(() => {
    const totalHours = (mahaGraha.dashaYears * antarGraha.dashaYears * pratyantaraGraha.dashaYears * sukshmaGraha.dashaYears) / 200;
    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const remMinTotal = (totalHours - Math.floor(totalHours)) * 60;
    const minutes = Math.floor(remMinTotal);
    const seconds = Math.round((remMinTotal - minutes) * 60);
    return { totalHours, days, hours, minutes, seconds };
  }, [mahaGraha, antarGraha, pratyantaraGraha, sukshmaGraha]);

  // 4. Prana Dasha calculation: (M * A * P * S * Pr) / 400 minutes
  const pranaResult = useMemo(() => {
    const totalMinutes = (mahaGraha.dashaYears * antarGraha.dashaYears * pratyantaraGraha.dashaYears * sukshmaGraha.dashaYears * pranaGraha.dashaYears) / 400;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60);
    return { totalMinutes, hours, minutes, seconds };
  }, [mahaGraha, antarGraha, pratyantaraGraha, sukshmaGraha, pranaGraha]);

  // All 12 Antardashas for the selected Mahadasha
  const allAntardashasForMaha = useMemo(() => {
    return getCyclicGrahas(mahaGraha.id).map(ag => {
      const prod = mahaGraha.dashaYears * ag.dashaYears * 3;
      return {
        graha: ag,
        months: Math.floor(prod / 30),
        days: prod % 30,
        isFriendly: ag.party === mahaGraha.party
      };
    });
  }, [mahaGraha]);

  // All 12 Pratyantardashas for selected Antardasha
  const allPratyantardashasForAntar = useMemo(() => {
    return getCyclicGrahas(antarGraha.id).map(pg => {
      const totalDays = (mahaGraha.dashaYears * antarGraha.dashaYears * pg.dashaYears) / 40;
      const days = Math.floor(totalDays);
      const remH = (totalDays - days) * 24;
      const hours = Math.floor(remH);
      const minutes = Math.round((remH - hours) * 60);
      return {
        graha: pg,
        days,
        hours,
        minutes,
        isFriendly: pg.party === mahaGraha.party
      };
    });
  }, [mahaGraha, antarGraha]);

  // All 12 Sukshma Dashas for selected Pratyantardasha
  const allSukshmadashasForPratyantar = useMemo(() => {
    return getCyclicGrahas(pratyantaraGraha.id).map(sg => {
      const totalHours = (mahaGraha.dashaYears * antarGraha.dashaYears * pratyantaraGraha.dashaYears * sg.dashaYears) / 200;
      const days = Math.floor(totalHours / 24);
      const hours = Math.floor(totalHours % 24);
      const remM = (totalHours - Math.floor(totalHours)) * 60;
      const minutes = Math.floor(remM);
      const seconds = Math.round((remM - minutes) * 60);
      return {
        graha: sg,
        days,
        hours,
        minutes,
        seconds,
        isFriendly: sg.party === mahaGraha.party
      };
    });
  }, [mahaGraha, antarGraha, pratyantaraGraha]);

  // All 12 Prana Dashas for selected Sukshma Dasha
  const allPranadashasForSukshma = useMemo(() => {
    return getCyclicGrahas(sukshmaGraha.id).map(prg => {
      const totalMinutes = (mahaGraha.dashaYears * antarGraha.dashaYears * pratyantaraGraha.dashaYears * sukshmaGraha.dashaYears * prg.dashaYears) / 400;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.floor(totalMinutes % 60);
      const seconds = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60);
      return {
        graha: prg,
        hours,
        minutes,
        seconds,
        isFriendly: prg.party === mahaGraha.party
      };
    });
  }, [mahaGraha, antarGraha, pratyantaraGraha, sukshmaGraha]);

  const filteredChapters = useMemo(() => {
    return ALL_48_CHAPTERS_DATA.filter(ch => {
      const matchesCat = chapterCategoryFilter === 'all' || ch.categoryTe === chapterCategoryFilter;
      const matchesQuery =
        !chapterSearch ||
        ch.titleTe.toLowerCase().includes(chapterSearch.toLowerCase()) ||
        ch.summaryTe.toLowerCase().includes(chapterSearch.toLowerCase()) ||
        ch.keyTeachingsTe.some(k => k.toLowerCase().includes(chapterSearch.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [chapterCategoryFilter, chapterSearch]);

  const filteredQAs = useMemo(() => {
    return JYOTISHYA_34_QA_DATA.filter(qa => {
      if (!qaSearch) return true;
      const q = qaSearch.toLowerCase();
      return (
        qa.questionTe.toLowerCase().includes(q) ||
        qa.answerTe.toLowerCase().includes(q) ||
        qa.topicTagTe.toLowerCase().includes(q)
      );
    });
  }, [qaSearch]);

  const showSection = (sec: ActiveSectionTab) => activeTab === 'all' || activeTab === sec;

  return (
    <div className="space-y-8 pb-12">
      {/* =================================================================== */}
      {/* 1. HERO BANNER & BOOK OVERVIEW */}
      {/* =================================================================== */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#3A000C] via-[#5E0B15] to-[#240008] text-[#FFE082] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FFE082] text-[#4A0012] text-xs font-extrabold uppercase tracking-wider">
                🔮 షట్శాస్త్రములలో 2వ శాస్త్రము • సంపూర్ణ జ్యోతిష్య దర్శిని
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D84315] text-white text-xs font-bold border border-[#FFAB91]">
                48 అధ్యాయములు • 34 ప్రశ్నలు-జవాబులు • 12 గ్రహములు • 324 కర్మలు
              </span>
            </div>
            <span className="text-xs font-semibold text-[#FFE082]/90 bg-black/30 px-3 py-1 rounded-full border border-[#D4AF37]/40">
              {JYOTISHYA_BOOK_METADATA.publisherTe}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold font-telugu-serif text-white tracking-tight">
              {JYOTISHYA_BOOK_METADATA.titleTe}
            </h1>
            <p className="text-sm sm:text-base text-[#FFD54F] font-bold">
              గ్రంథకర్త: {JYOTISHYA_BOOK_METADATA.authorTitlesTe} — {JYOTISHYA_BOOK_METADATA.authorTe}
            </p>
          </div>

          {/* 4 Golden Maxims */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {JYOTISHYA_BOOK_METADATA.coreMaximsTe.map((maxim, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-black/35 border border-[#D4AF37]/50 text-xs sm:text-sm text-[#FFF8E1] font-medium leading-relaxed flex items-start gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-[#FFD54F] shrink-0 mt-0.5" />
                <span>{maxim}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. STICKY SECTION NAVIGATION TABS */}
      {/* =================================================================== */}
      <div className="sticky top-16 z-30 bg-[#FAF7F0]/95 backdrop-blur-md p-3 rounded-2xl border-2 border-[#D4AF37] shadow-md flex items-center gap-2 overflow-x-auto">
        {[
          { id: 'all', label: '🌟 సమగ్ర దర్శనం (అన్ని విభాగాలు)' },
          { id: 'foundations_chakras', label: '☸️ 1. 4 చక్రాలు & 324 కర్మలు' },
          { id: 'grahas_lagnas', label: '🪐 2. 12 గ్రహాలు & 2:1 మిత్ర-శత్రు గణని' },
          { id: 'karma_houses', label: '🏛️ 3. కర్మచక్ర 12 స్థానాలు (రాశులు)' },
          { id: 'attributes_matrix', label: '📊 4. 12 గ్రహాల 9 లక్షణ పట్టికలు' },
          { id: 'nakshatra_dashas', label: '⏳ 5. 27 నక్షత్రాలు & 120 ఏళ్ల దశ-అంతర్దశ గణని' },
          { id: 'case_studies', label: '📜 6. ప్రముఖుల జాతక విశ్లేషణలు' },
          { id: 'chapters_qa', label: '❓ 7. 48 అధ్యాయాలు & 34 ప్రశ్నలు-జవాబులు' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ActiveSectionTab)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-white text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =================================================================== */}
      {/* SECTION 1: FOUNDATIONS, 6 SHASTRAS, 3 EYES & 4 INTERNAL CHAKRAS */}
      {/* =================================================================== */}
      {showSection('foundations_chakras') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 1 • అధ్యాయములు 1 నుండి 9 &amp; 21 నుండి 24
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              జ్యోతిష్య మూల సిద్ధాంతము, షట్శాస్త్రములు &amp; తలలోని 4 చక్రములు (324 కర్మలు)
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              జ్యోతిష్యము యొక్క అసలు నిర్వచనం, 3 కాలాలను చూసే 3 నేత్రాలు, నుదుటిలోని 4 చక్రాలు మరియు 324 రకాల కర్మల ఉత్పత్తి రహస్యం
            </p>
          </div>

          {/* 4 Etymology Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JYOTISHYA_BOOK_METADATA.etymologyCards.map((card, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F0] border-2 border-[#E8DCC4] space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                  {card.termTe}
                </h3>
                <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
                  {card.meaningTe}
                </p>
              </div>
            ))}
          </div>

          {/* Shat-Shastras (6 Shastras) & 3 Eyes for 3 Times */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 p-5 rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-[#FFF8E1] border-2 border-[#D4AF37] space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D84315]" />
                <span>షట్శాస్త్రములు (6 ప్రామాణిక శాస్త్రములు — అధ్యాయము 2)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {JYOTISHYA_BOOK_METADATA.shatShastrasTe.map(sh => (
                  <div
                    key={sh.rank}
                    className={`p-3.5 rounded-xl border ${
                      sh.rank <= 2
                        ? 'bg-white border-2 border-[#7B1113] shadow-sm'
                        : 'bg-white/80 border-[#E8DCC4]'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-[#7B1113]">{sh.nameTe}</div>
                    <p className="text-xs text-[#5D4037] mt-1 leading-relaxed">{sh.descTe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#FAF7F0] border-2 border-[#E8DCC4] space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#D84315]" />
                  <span>3 కాలములు — 3 నేత్రములు (ఎవడు జ్యోతిష్యుడు? - అధ్యాయము 3)</span>
                </h3>
                <div className="space-y-2.5">
                  {JYOTISHYA_BOOK_METADATA.threeEyesForThreeTimesTe.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/60 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#7B1113]">{item.timeTe}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold">
                          {item.eyeTe}
                        </span>
                      </div>
                      <p className="text-xs text-[#5D4037] leading-relaxed">{item.descTe}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FFF8E1] border border-[#D4AF37] text-xs text-[#7B1113] font-semibold">
                💡 ఫోకస్ లైట్ (Focus Light) సూత్రము: కాలచక్రంలోని 12 గ్రహాలు ఫోకస్ లైట్ల వలె కిరణాలను ప్రసరింపజేస్తే, కర్మచక్రంలోని కర్మ (రంగు పేపరు) గుండా ఆ కర్మ ఛాయ గుణచక్రంపై పడి మనిషి చేత పాప-పుణ్యాలను అనుభవింపజేస్తుంది!
              </div>
            </div>
          </div>

          {/* The 4 Internal Chakras in the Forehead */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                  <span>☸️</span>
                  <span>మనిషి తలలోని (ఫాలభాగములోని) 4 చక్రములు &amp; “రాశి vs లగ్నము” భేదము</span>
                </h3>
                <p className="text-xs text-[#5D4037] mt-0.5">
                  ఆధార గ్రంథము: శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరుల “జ్యోతిష్య శాస్త్రము” (పుటలు 18–35)
                </p>
              </div>

              {/* Source vs Artistic Mode Toggle Switch */}
              <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                <div className="inline-flex p-1 rounded-2xl bg-[#FFF8E1] border-2 border-[#D4AF37] shadow-xs">
                  <button
                    type="button"
                    onClick={() => setChakraImageSource('source')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      chakraImageSource === 'source'
                        ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>📖 మూల గ్రంథ పటములు (Source)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setChakraImageSource('art')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      chakraImageSource === 'art'
                        ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>🎨 వర్ణ చిత్రకళ (Artistic)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Overview Hero Card: 4 Chakras in the Human Forehead Profile */}
            <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#2A0808] via-[#1A0505] to-[#2A0808] text-white p-5 sm:p-7 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5 flex justify-center">
                  <div
                    className={`relative rounded-2xl overflow-hidden border-2 border-[#FFE082]/70 shadow-2xl cursor-pointer group max-w-sm w-full transition-transform duration-300 hover:scale-[1.02] ${
                      chakraImageSource === 'source' ? 'bg-[#FFFDF7] p-2' : 'bg-black/50'
                    }`}
                    onClick={() => setSelectedChakraImage({
                      url: chakraImageSource === 'source'
                        ? './images/jyotishya/source_four_chakras_head_wide.png'
                        : './images/jyotishya/four_chakras_head_overview.jpg',
                      title: chakraImageSource === 'source'
                        ? 'గ్రంథ మూల పటము 2: బ్రహ్మ, కాల, కర్మ, గుణచక్రములు (పుట 21)'
                        : 'మనిషి తలలోని (ఫాలభాగములోని) 4 చక్రముల సమగ్ర చిత్రపటము',
                      subtitle: 'నుదుటిలోని బ్రహ్మనాడిపై నిలువుగా క్రమముగా అమరియున్న 1. బ్రహ్మచక్రము, 2. కాలచక్రము, 3. కర్మచక్రము, 4. గుణచక్రములు'
                    })}
                    title="క్లిక్ చేసి పెద్దదిగా వీక్షించండి"
                  >
                    <img
                      src={chakraImageSource === 'source'
                        ? './images/jyotishya/source_four_chakras_head_wide.png'
                        : './images/jyotishya/four_chakras_head_overview.jpg'
                      }
                      alt="మనిషి తలలోని 4 చక్రముల సమగ్ర చిత్రపటము"
                      className={`w-full h-64 transition-transform duration-500 group-hover:scale-105 ${
                        chakraImageSource === 'source'
                          ? 'object-contain rounded-xl'
                          : 'object-cover object-top rounded-xl'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3 pointer-events-none rounded-xl">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs text-[#FFE082] font-bold flex items-center gap-1.5 drop-shadow-md">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                          {chakraImageSource === 'source' ? 'మూల గ్రంథ పటము 2 (పుట 21)' : 'సంపూర్ణ తల చిత్రపటము'}
                        </span>
                        <span className="text-[10px] text-white/90 bg-black/60 px-2 py-0.5 rounded-full border border-white/20">
                          క్లిక్ చేయండి
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFE082] text-[#4A0012] text-xs font-bold uppercase tracking-wider">
                      🔮 జ్యోతిష్య మూల సిద్ధాంతం • బ్రహ్మనాడి నిలువు వరుస
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[#FFE082] border border-[#FFE082]/40 text-xs font-semibold">
                      {chakraImageSource === 'source' ? '📖 మూల గ్రంథం నుండి ప్రత్యక్ష ప్రదర్శన' : '🎨 ఆధునిక రంగుల చిత్రకళ'}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-2xl font-bold text-[#FFE082] font-telugu-serif">
                    నుదుటిలో నిలువుగా అమరియున్న 4 చక్రములు &amp; ఫోకస్ లైట్ సూత్రము
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                    మనిషి శరీరంలో వెన్నెముక అడుగున మూలాధారము నుండి శిరస్సు వరకు 6 చక్రాలు ఉంటే, శిరస్సులోని ఫాలభాగమున (నుదుటిలో) పరమ సూక్ష్మమైన <strong>4 చక్రాలు</strong> నిలువుగా అమరియున్నవి. కాలచక్రంలోని గ్రహాలు ఫోకస్ లైట్ల వలె కిరణాలను కర్మచక్రం (రంగు పేపరు) గుండా గుణచక్రంపై ప్రసరింపజేసి సుఖదుఃఖాలను అనుభవింపజేస్తాయి:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-[#D4AF37]/40 space-y-0.5">
                      <strong className="text-[#FFE082]">1. బ్రహ్మచక్రము (పుట 20-21):</strong>
                      <p className="text-stone-300 text-[11px]">అన్నింటికంటే పైన ఉండే దైవ చైతన్య సంధాన స్థానం (పరమాత్మ &amp; అక్షర ఆత్మ).</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 border border-[#2563EB]/40 space-y-0.5">
                      <strong className="text-[#93C5FD]">2. కాలచక్రము (పుట 21):</strong>
                      <p className="text-stone-300 text-[11px]">12 లగ్నాలు &amp; వాటిలో తిరిగే 12 ఫోకస్ లైట్ల గ్రహాలు (43.2 లక్షల సం||ల గమనం).</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 border border-[#DC2626]/40 space-y-0.5">
                      <strong className="text-[#FCA5A5]">3. కర్మచక్రము (పుట 23):</strong>
                      <p className="text-stone-300 text-[11px]">12 రాశుల కర్మల నిల్వ కుప్పలు (సంచిత-ప్రారబ్ధ కర్మ), మధ్యలో గురువు.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 border border-[#059669]/40 space-y-0.5">
                      <strong className="text-[#6EE7B7]">4. గుణచక్రము (పుట 32):</strong>
                      <p className="text-stone-300 text-[11px]">324 గుణములు (తామస, రాజస, సాత్త్విక) &amp; మధ్యలో జీవాత్మ ఉండే భోగ స్థానం.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Chakras Detailed Cards with Pictures */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FOUR_HEAD_CHAKRAS_DATA.map(ch => {
                const currentImgUrl = chakraImageSource === 'source' ? ch.sourceImageUrl : ch.imageUrl;
                return (
                  <div
                    key={ch.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border-2 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-md transition-shadow"
                    style={{ borderColor: ch.color }}
                  >
                    <div className="space-y-3">
                      {/* Visual Picture Thumbnail */}
                      <div
                        className={`relative w-full h-48 rounded-xl overflow-hidden border border-[#E8DCC4] shadow-inner cursor-pointer group ${
                          chakraImageSource === 'source' ? 'bg-[#FFFDF7] p-2 flex items-center justify-center' : 'bg-[#1A0B05]'
                        }`}
                        onClick={() => setSelectedChakraImage({
                          url: currentImgUrl,
                          title: `${ch.nameTe} (${chakraImageSource === 'source' ? ch.sourceFigNumberTe : 'వర్ణ చిత్రం'})`,
                          subtitle: chakraImageSource === 'source'
                            ? `ఆధారము: “జ్యోతిష్య శాస్త్రము” పుట ${ch.sourcePageNumber} • ${ch.tagTe}`
                            : ch.tagTe
                        })}
                        title="క్లిక్ చేసి పెద్దదిగా వీక్షించండి"
                      >
                        <img
                          src={currentImgUrl}
                          alt={ch.nameTe}
                          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                            chakraImageSource === 'source'
                              ? 'object-contain'
                              : 'object-cover'
                          }`}
                          loading="lazy"
                        />

                        {/* Top Badges */}
                        <span
                          className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-white text-[11px] font-bold shadow-md"
                          style={{ backgroundColor: ch.color }}
                        >
                          చక్రము {ch.order} / 4
                        </span>
                        <span className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>

                        {/* Bottom Source Citation Tag */}
                        <span className={`absolute bottom-2 left-2 right-2 px-2 py-0.5 rounded-lg text-xs font-bold truncate drop-shadow-sm ${
                          chakraImageSource === 'source'
                            ? 'bg-[#7B1113]/90 text-[#FFE082]'
                            : 'bg-black/70 text-[#FFE082]'
                        }`}>
                          {chakraImageSource === 'source'
                            ? `📖 ${ch.sourceFigNumberTe} • పుట ${ch.sourcePageNumber}`
                            : ch.tagTe
                          }
                        </span>
                      </div>

                      <h4 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                        {ch.nameTe}
                      </h4>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E8DCC4] text-xs font-bold text-[#2C1810]">
                        విభాగములు: {ch.divisionsTe}
                      </div>
                      <p className="text-xs text-[#5D4037] leading-relaxed">
                        {ch.roleTe}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FFF8E1] border border-[#D4AF37] text-[11px] font-semibold text-[#7B1113]">
                      📌 {ch.rashiVsLagnaNoteTe}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3 Karma Types (Agami, Sanchita, Prarabdha) & 324 Karmas Summary */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] border-2 border-[#D4AF37] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                ⚖️ త్రివిధ కర్మలు (ఆగామి • సంచిత • ప్రారబ్ధ) &amp; 324 రకముల కర్మల ఉత్పత్తి
              </h3>
              <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                ⏱️ 69 సం|| 5 నెలల 10 రోజులకు ఆగామి కర్మ సంచిత కర్మగా మారును!
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DEEP_KARMA_DOCTRINE_DATA.threeKarmaTypes.map(kt => (
                <div key={kt.id} className="p-4 rounded-xl bg-white border border-[#D4AF37] space-y-2">
                  <div className="font-bold text-sm text-[#7B1113]">{kt.nameTe}</div>
                  <div className="text-xs font-bold text-[#D84315]">{kt.conversionRuleTe}</div>
                  <p className="text-xs text-[#5D4037] leading-relaxed">{kt.descriptionTe}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 2: THE 12 GRAHAS, 12 LAGNAS & 2:1 FRIEND/ENEMY CALCULATOR */}
      {/* =================================================================== */}
      {showSection('grahas_lagnas') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 2 • అధ్యాయములు 10 నుండి 20, 29, 30, 32 &amp; 45
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              12 గ్రహములు (భూమి, మిత్ర, చిత్రలతో కలిపి), 12 లగ్నములు &amp; 2:1 మిత్ర-శత్రు గణని
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              గ్రహములు 9 కావు 12! ప్రతి లగ్నమునకు ఒకే స్వంత గ్రహము. ఉచ్చ-నీచలు లేవు; 30 గ్రాహిత చేతులు (9×2 + 3×4) మరియు గురు-శని వర్గాల శాశ్వత మైత్రి-వైరము.
            </p>
          </div>

          {/* Interactive Janma Lagna Friend/Enemy Calculator */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] border-2 border-[#7B1113] space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D84315]">
                  ఇంటరాక్టివ్ జన్మ లగ్న మిత్ర-శత్రు గణని (2:1 సరి-బేసి సూత్రము)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                  మీ జన్మ లగ్నమును ఎంచుకోండి — మీ శాశ్వత 6 మిత్ర గ్రహాలను &amp; 6 శత్రు గ్రహాలను చూడండి:
                </h3>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                ఎంచుకున్న లగ్నము: {selectedLagnaGraha.ownLagnaTe} ({selectedLagnaGraha.party})
              </span>
            </div>

            {/* 12 Lagna Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {TWELVE_GRAHAS_MASTER_DATA.map(g => {
                const isSelected = g.lagnaNumber === selectedLagnaNumber;
                return (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedLagnaNumber(g.lagnaNumber);
                      setSelectedGraha(g);
                    }}
                    className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#7B1113] text-[#FFE082] border-[#D4AF37] shadow-md scale-[1.02]'
                        : 'bg-white text-[#2C1810] border-[#E8DCC4] hover:border-[#7B1113]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>{g.ownLagnaTe}</span>
                      <span>{g.icon}</span>
                    </div>
                    <div className={`text-[11px] font-semibold mt-1 ${isSelected ? 'text-white' : 'text-[#D84315]'}`}>
                      అధిపతి: {g.nameTe.split(' ')[0]}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-[#FFE082]/90' : 'text-[#5D4037]'}`}>
                      {g.party}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Result of Selected Lagna: 6 Friends vs 6 Enemies + 1x7 Baddha Shatru */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Selected Lagna Ruler Card */}
              <div className="p-4 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2">
                <div className="text-xs font-bold text-[#D84315] uppercase">
                  ఎంచుకున్న జన్మ లగ్న వివరాలు
                </div>
                <div className="text-lg font-bold text-[#7B1113] font-telugu-serif">
                  {selectedLagnaGraha.ownLagnaTe} — అధిపతి: {selectedLagnaGraha.nameTe}
                </div>
                <div className="text-xs font-bold text-[#2C1810]">
                  • పార్టీ: <span className="text-[#7B1113]">{selectedLagnaGraha.party}</span> ({selectedLagnaGraha.pairCodeTe})
                </div>
                <div className="text-xs text-red-700 font-bold">
                  • 1×7 బద్ధశత్రువు: {selectedLagnaGraha.baddhaShatruLagnaTe}
                </div>
                <div className="text-xs text-[#5D4037]">
                  • గ్రాహిత చేతులు ({selectedLagnaGraha.handsCount}): {selectedLagnaGraha.handsExplanationTe}
                </div>
              </div>

              {/* 6 Friendly / Shubha / Punya Grahas */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-500/50 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>6 శాశ్వత మిత్రులు / శుభులు / పుణ్యులు / సౌమ్యులు ({selectedLagnaGraha.party})</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  ఈ 6 గ్రహాలు మీ జాతకంలో ఏ స్థానంలో ఉన్నా, వాటి దశ-అంతర్దశలలో పుణ్య ఫలితాన్ని (మంచిని) మాత్రమే ఇస్తాయి:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {friendlyGrahas.map(fg => (
                    <div key={fg.id} className="p-2 rounded-lg bg-white border border-emerald-300 text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>{fg.icon}</span>
                      <span>{fg.nameTe.split(' ')[0]} ({fg.ownLagnaTe.split(' ')[1]})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 Enemy / Ashubha / Papa Grahas */}
              <div className="p-4 rounded-2xl bg-red-50/80 border-2 border-red-500/50 space-y-2">
                <div className="flex items-center gap-1.5 text-red-900 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>6 శాశ్వత శత్రువులు / అశుభులు / పాపులు / క్రూరులు</span>
                </div>
                <p className="text-[11px] text-red-800">
                  ఈ 6 గ్రహాలు మీ జాతకంలో ఉన్న స్థానాలలో మరియు వాటి దశ-అంతర్దశలలో పాప ఫలితాన్ని (కష్టాలను) ఇస్తాయి:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {enemyGrahas.map(eg => (
                    <div key={eg.id} className="p-2 rounded-lg bg-white border border-red-300 text-xs font-bold text-red-950 flex items-center gap-1.5">
                      <span>{eg.icon}</span>
                      <span>{eg.nameTe.split(' ')[0]} ({eg.ownLagnaTe.split(' ')[1]})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Complete 12 Grahas Master Table */}
          <div className="space-y-3 overflow-x-auto">
            <h3 className="text-base sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
              📋 12 గ్రహముల సమగ్ర పట్టిక (స్వంత లగ్నము • వర్గము • వేగము • చేతులు • దశ సం|| • 1×7 బద్ధశత్రువు)
            </h3>
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#7B1113] text-[#FFE082]">
                  <th className="p-3 border border-[#D4AF37]/40">లగ్న సంఖ్య &amp; స్వంత ఇల్లు</th>
                  <th className="p-3 border border-[#D4AF37]/40">గ్రహము పేరు</th>
                  <th className="p-3 border border-[#D4AF37]/40">వర్గము (2:1 జత)</th>
                  <th className="p-3 border border-[#D4AF37]/40">వేగము (1 లగ్నం / 12 లగ్నాలు)</th>
                  <th className="p-3 border border-[#D4AF37]/40">చేతులు (గ్రాహిత శక్తి)</th>
                  <th className="p-3 border border-[#D4AF37]/40">దశ సం||</th>
                  <th className="p-3 border border-[#D4AF37]/40">1×7 బద్ధశత్రువు</th>
                </tr>
              </thead>
              <tbody>
                {TWELVE_GRAHAS_MASTER_DATA.map(g => (
                  <tr
                    key={g.id}
                    onClick={() => setSelectedGraha(g)}
                    className={`cursor-pointer transition-colors ${
                      selectedGraha.id === g.id
                        ? 'bg-[#FFF8E1] font-semibold'
                        : 'odd:bg-white even:bg-[#FAF7F0] hover:bg-[#FFF3E0]'
                    }`}
                  >
                    <td className="p-3 border border-[#E8DCC4] font-bold text-[#7B1113]">{g.ownLagnaTe}</td>
                    <td className="p-3 border border-[#E8DCC4] font-bold">
                      {g.icon} {g.nameTe}
                    </td>
                    <td className="p-3 border border-[#E8DCC4]">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          g.party === 'గురు వర్గము'
                            ? 'bg-amber-100 text-amber-900 border border-amber-400'
                            : 'bg-slate-200 text-slate-900 border border-slate-400'
                        }`}
                      >
                        {g.party}
                      </span>
                    </td>
                    <td className="p-3 border border-[#E8DCC4]">
                      {g.speedPerLagnaTe} / {g.speedFullCircleTe}
                    </td>
                    <td className="p-3 border border-[#E8DCC4] font-bold text-[#D84315]">
                      {g.handsCount} చేతులు ({g.handsHouses.join(', ')})
                    </td>
                    <td className="p-3 border border-[#E8DCC4] font-bold">{g.dashaYears} సం||</td>
                    <td className="p-3 border border-[#E8DCC4] text-red-700 font-semibold">{g.baddhaShatruTe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Focused Graha Deep-Dive Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8DCC4]">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{selectedGraha.icon}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                    {selectedGraha.nameTe} ({selectedGraha.nameEn}) — {selectedGraha.ownLagnaTe}
                  </h4>
                  <p className="text-xs font-bold text-[#D84315]">{selectedGraha.titleTe}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                గమనము: {selectedGraha.motionDirectionTe}
              </span>
            </div>

            {selectedGraha.specialDiscoveryNoteTe && (
              <div className="p-3.5 rounded-xl bg-[#FFF8E1] border-2 border-[#D84315] text-xs sm:text-sm text-[#7B1113] font-bold">
                🔬 బ్రహ్మనాడి పరిశోధనా విశేషం: {selectedGraha.specialDiscoveryNoteTe}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white border border-[#E8DCC4] space-y-1.5">
                <div><strong>అధికార పరిధి (Portfolio):</strong> {selectedGraha.portfolioTe}</div>
                <div><strong>గ్రాహిత చేతులు:</strong> {selectedGraha.handsExplanationTe}</div>
                <div><strong>దశ నక్షత్ర పాదాలు ({selectedGraha.dashaYears} సం||):</strong> {selectedGraha.dashaNakshatraPadasTe}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E8DCC4] space-y-1.5">
                <div><strong>కారకత్వము:</strong> {selectedGraha.karakatvamTe} | <strong>లింగము:</strong> {selectedGraha.genderTe}</div>
                <div><strong>రంగు:</strong> {selectedGraha.colorTe} | <strong>రుచి:</strong> {selectedGraha.tasteTe} | <strong>దిశ:</strong> {selectedGraha.directionTe}</div>
                <div><strong>రత్నము:</strong> {selectedGraha.gemstoneTe} | <strong>ధాన్యము:</strong> {selectedGraha.grainTe} | <strong>వారము:</strong> {selectedGraha.weekdayTe}</div>
                <div><strong>రోగములు:</strong> {selectedGraha.diseasesTe}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 3: THE 12 KARMA CHAKRA HOUSES (అంగీ-అర్ధాంగీ, 2 కేంద్రాలు, కోణాలు) */}
      {/* =================================================================== */}
      {showSection('karma_houses') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 3 • అధ్యాయములు 25, 26, 27, 28 &amp; 43
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              కర్మచక్రములోని 12 స్థానములు (రాశులు): అంగీ (1–6) • అర్ధాంగీ (7–12) • 2 కేంద్రములు • పుణ్య/పాప కోణములు
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              కేంద్రములు 4 కావు, 2 మాత్రమే (4వ స్థానము స్థూల ఆస్తి కేంద్రము, 10వ స్థానము సూక్ష్మ ఆస్తి/కీర్తి కేంద్రము). 1, 5, 9 పుణ్య కోణములు; 3, 7, 11 పాప కోణములు; సరి సంఖ్యలు మిశ్రమ స్థానములు.
            </p>
          </div>

          {/* Summary Badges of Karma Chakra Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-400 space-y-1">
              <div className="text-xs font-extrabold text-amber-900 uppercase">అంగీ vs అర్ధాంగీ</div>
              <div className="text-sm font-bold text-[#7B1113]">1–6 అంగీ • 7–12 అర్ధాంగీ</div>
              <p className="text-xs text-[#5D4037]">1–6 స్థానాలు స్వంత/అజ్ఞాన ప్రపంచ భాగం; 7–12 స్థానాలు భార్య (అర్ధాంగి) &amp; జ్ఞాన ప్రపంచ భాగం.</p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-400 space-y-1">
              <div className="text-xs font-extrabold text-blue-900 uppercase">2 శాస్త్రీయ కేంద్రములు</div>
              <div className="text-sm font-bold text-blue-950">4వ స్థానము &amp; 10వ స్థానము మాత్రమే!</div>
              <p className="text-xs text-[#5D4037]">2,3,[4],5,6 లకు 4వ స్థానం కేంద్రం (స్థూల ఆస్తి); 8,9,[10],11,12 లకు 10వ స్థానం కేంద్రం (కీర్తి/ఉద్యోగం).</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 space-y-1">
              <div className="text-xs font-extrabold text-emerald-900 uppercase">పుణ్య కోణములు (Pure Punya)</div>
              <div className="text-sm font-bold text-emerald-950">1, 5, 9 స్థానములు</div>
              <p className="text-xs text-[#5D4037]">ఈ మూడు బేసి కోణ స్థానములలో కేవలం పుణ్య కర్మ మాత్రమే నిల్వ ఉంటుంది.</p>
            </div>
            <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-400 space-y-1">
              <div className="text-xs font-extrabold text-red-900 uppercase">పాప కోణములు (Pure Papa)</div>
              <div className="text-sm font-bold text-red-950">3, 7, 11 స్థానములు</div>
              <p className="text-xs text-[#5D4037]">1,5,9 లకు ఎదురుగా (1×7) ఉండే 3, 7, 11 కోణాలలో కేవలం పాప కర్మ మాత్రమే నిల్వ ఉంటుంది.</p>
            </div>
          </div>

          {/* 12 Houses Interactive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TWELVE_KARMA_HOUSES_DATA.map(h => {
              const isSelected = selectedHouse.houseNumber === h.houseNumber;
              return (
                <button
                  key={h.houseNumber}
                  onClick={() => setSelectedHouse(h)}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#7B1113] text-[#FFE082] border-[#D4AF37] shadow-lg scale-[1.03]'
                      : 'bg-[#FAF7F0] text-[#2C1810] border-[#E8DCC4] hover:border-[#7B1113]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold">{h.houseNumber}వ స్థానము</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 font-bold">
                        1×7 ➔ {h.oppositeHouse}వ
                      </span>
                    </div>
                    <div className={`text-xs font-bold mt-1 ${isSelected ? 'text-white' : 'text-[#7B1113]'}`}>
                      {h.sanskritNameTe}
                    </div>
                  </div>
                  <div className={`text-[10px] mt-2 pt-1.5 border-t ${isSelected ? 'border-[#D4AF37]/40 text-[#FFE082]' : 'border-[#E8DCC4] text-[#D84315] font-semibold'}`}>
                    {h.konaStatusTe.split(' ')[0]} {h.konaStatusTe.split(' ')[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected House Detailed View */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] border-2 border-[#D4AF37] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8DCC4]">
              <div>
                <span className="text-xs font-bold text-[#D84315]">{selectedHouse.sectionTe}</span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#7B1113] font-telugu-serif">
                  {selectedHouse.houseNumber}వ స్థానము: {selectedHouse.sanskritNameTe} ({selectedHouse.popularNameTe})
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                  {selectedHouse.kendraStatusTe}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#7B1113] text-[#7B1113] text-xs font-bold">
                  {selectedHouse.konaStatusTe}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E8DCC4] space-y-2">
                <div className="text-xs font-bold uppercase text-[#7B1113]">ఈ స్థానము తెలుపు ముఖ్య ఫలితములు:</div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C1810]">
                  {selectedHouse.significationsTe.map((sig, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D84315] font-bold">•</span>
                      <span>{sig}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DCC4] space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-[#D84315]">ఎదురు స్థాన (1×7) సంబంధము:</div>
                  <p className="text-xs sm:text-sm font-semibold text-[#7B1113] mt-1">
                    {selectedHouse.oppositeRelationTe}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] text-xs text-[#5D4037] leading-relaxed">
                  <strong>తాత్త్విక రహస్యము:</strong> {selectedHouse.deepSecretTe}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 4: 9 ATTRIBUTES MATRIX OF ALL 12 GRAHAS */}
      {/* =================================================================== */}
      {showSection('attributes_matrix') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 4 • అధ్యాయములు 41 &amp; 42
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              12 గ్రహముల 9 గుణ-లక్షణ పట్టికలు (కులము/మతము • రంగు • రుచి • లింగము • కారకత్వము • రత్నము • దిశ • ధాన్యము • రోగములు)
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              ముఖ్య హెచ్చరిక: మీ జన్మ లగ్నమునకు శత్రువైన గ్రహము యొక్క రత్నమును (ఉంగరమును) ఎన్నడూ ధరించరాదు; కేవలం మిత్ర గ్రహ రత్నమునే ధరించాలి!
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#4A0012] text-[#FFE082]">
                  <th className="p-2.5 border border-[#D4AF37]/40">గ్రహము (స్వంత ఇల్లు)</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">1. కులము / మతము</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">2. రంగు</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">3. రుచి</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">4. లింగము</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">5. కారకత్వము</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">6. రత్నము (రాయి)</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">7. దిశ (10 దిశలు)</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">8. ధాన్యము &amp; వారము</th>
                  <th className="p-2.5 border border-[#D4AF37]/40">9. ప్రధాన రోగములు</th>
                </tr>
              </thead>
              <tbody>
                {TWELVE_GRAHAS_MASTER_DATA.map(g => (
                  <tr key={g.id} className="odd:bg-white even:bg-[#FAF7F0] hover:bg-[#FFF8E1]">
                    <td className="p-2.5 border border-[#E8DCC4] font-bold text-[#7B1113]">
                      {g.icon} {g.nameTe.split(' ')[0]} ({g.ownLagnaTe.split(' ')[1]})
                    </td>
                    <td className="p-2.5 border border-[#E8DCC4] font-semibold">{g.casteReligionTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4]">{g.colorTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4]">{g.tasteTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4] font-bold">{g.genderTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4] font-semibold text-[#D84315]">{g.karakatvamTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4] font-bold">{g.gemstoneTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4]">{g.directionTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4]">{g.grainTe} • {g.weekdayTe}</td>
                    <td className="p-2.5 border border-[#E8DCC4] text-[#5D4037]">{g.diseasesTe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 5: 27 NAKSHATRAS (3 ATMAS) & 120-YEAR DASHA / ANTARDASHA CALCULATOR */}
      {/* =================================================================== */}
      {showSection('nakshatra_dashas') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 5 • అధ్యాయములు 36 నుండి 40 &amp; 46
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              27 నక్షత్రములు (3 ఆత్మల విభజన) &amp; 120 సంవత్సరముల 12 దశలు — అంతర్దశ గణని
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              27 నక్షత్రాలు × 4 పాదాలు = 108 పాదాలు (ప్రతి లగ్నంలో 9 పాదాలు = 1 మహాదశ). మొత్తం 12 గ్రహాల దశలు = 120 సంవత్సరాలు.
            </p>
          </div>

          {/* 27 Nakshatras Divided into 3 Atmas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NAKSHATRA_THREE_ATMAS_GROUPING.map((grp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF7F0] border-2 space-y-3"
                style={{ borderColor: grp.color }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{ backgroundColor: grp.color }}
                >
                  {grp.groupCodeTe}
                </span>
                <h3 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                  {grp.groupNameTe}
                </h3>
                <ul className="space-y-1 text-xs text-[#2C1810]">
                  {grp.nakshatrasTe.map((nk, nIdx) => (
                    <li key={nIdx} className="p-1.5 rounded bg-white border border-[#E8DCC4] font-medium">
                      {nk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive 5-Tier Dasha Calculator (Maha, Antar, Pratyantar, Sukshma, Prana) */}
          <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] border-2 border-[#7B1113] space-y-6 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-4">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-6 h-6 text-[#D84315]" />
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#7B1113] font-telugu-serif">
                    ఇంటరాక్టివ్ పంచవిధ దశల గణని (మహాదశ • అంతర్దశ • ప్రత్యంతర్దశ • సూక్ష్మదశ • ప్రాణదశ)
                  </h3>
                  <p className="text-xs text-[#5D4037]">
                    120 సంవత్సరాల త్రైత జ్యోతిష్య కాల విభజన: సంవత్సరముల నుండి నిమిషాలు, సెకన్ల వరకు కచ్చితమైన కర్మ కాల గణన
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold shadow-xs">
                12 దశల సమగ్ర ఆయుర్ధాయము = 120 సంవత్సరములు
              </span>
            </div>

            {/* 5 Dropdown Selectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {/* 1. Mahadasha */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 shadow-xs">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                  స్థాయి 1 • సంవత్సరములు
                </span>
                <label className="block text-xs font-bold text-[#7B1113]">1. మహాదశ గ్రహము:</label>
                <select
                  value={mahadashaGrahaId}
                  onChange={e => setMahadashaGrahaId(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#7B1113]"
                >
                  {[...TWELVE_GRAHAS_MASTER_DATA]
                    .sort((a, b) => a.dashaOrder - b.dashaOrder)
                    .map(g => (
                      <option key={g.id} value={g.id}>
                        దశ {g.dashaOrder}: {g.nameTe.split(' ')[0]} ({g.dashaYears} సం||)
                      </option>
                    ))}
                </select>
                <div className="text-[10px] text-[#5D4037] truncate font-medium">
                  {mahaGraha.party} • {mahaGraha.dashaYears} సం||
                </div>
              </div>

              {/* 2. Antardasha */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 shadow-xs">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#2563EB] text-white text-[10px] font-bold">
                  స్థాయి 2 • నెలలు &amp; దినములు
                </span>
                <label className="block text-xs font-bold text-[#7B1113]">2. అంతర్దశ గ్రహము:</label>
                <select
                  value={antardashaGrahaId}
                  onChange={e => setAntardashaGrahaId(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#7B1113]"
                >
                  {[...TWELVE_GRAHAS_MASTER_DATA]
                    .sort((a, b) => a.dashaOrder - b.dashaOrder)
                    .map(g => (
                      <option key={g.id} value={g.id}>
                        {g.nameTe.split(' ')[0]} అంతర్దశ ({g.dashaYears} సం||)
                      </option>
                    ))}
                </select>
                <div className="text-[10px] text-[#5D4037] truncate font-medium">
                  గణన: ({mahaGraha.dashaYears}×{antarGraha.dashaYears}×3)÷30
                </div>
              </div>

              {/* 3. Pratyantardasha */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 shadow-xs">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#DC2626] text-white text-[10px] font-bold">
                  స్థాయి 3 • దినములు &amp; గంటలు
                </span>
                <label className="block text-xs font-bold text-[#7B1113]">3. ప్రత్యంతర్దశ గ్రహము:</label>
                <select
                  value={pratyantardashaGrahaId}
                  onChange={e => setPratyantardashaGrahaId(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#7B1113]"
                >
                  {[...TWELVE_GRAHAS_MASTER_DATA]
                    .sort((a, b) => a.dashaOrder - b.dashaOrder)
                    .map(g => (
                      <option key={g.id} value={g.id}>
                        {g.nameTe.split(' ')[0]} ప్రత్యంతర ({g.dashaYears} సం||)
                      </option>
                    ))}
                </select>
                <div className="text-[10px] text-[#5D4037] truncate font-medium">
                  గణన: (M×A×P)÷40 దినములు
                </div>
              </div>

              {/* 4. Sukshma Dasha */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 shadow-xs">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#059669] text-white text-[10px] font-bold">
                  స్థాయి 4 • గంటలు &amp; నిమిషాలు
                </span>
                <label className="block text-xs font-bold text-[#7B1113]">4. సూక్ష్మదశ గ్రహము:</label>
                <select
                  value={sukshmadashaGrahaId}
                  onChange={e => setSukshmadashaGrahaId(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#7B1113]"
                >
                  {[...TWELVE_GRAHAS_MASTER_DATA]
                    .sort((a, b) => a.dashaOrder - b.dashaOrder)
                    .map(g => (
                      <option key={g.id} value={g.id}>
                        {g.nameTe.split(' ')[0]} సూక్ష్మ ({g.dashaYears} సం||)
                      </option>
                    ))}
                </select>
                <div className="text-[10px] text-[#5D4037] truncate font-medium">
                  గణన: (M×A×P×S)÷200 గంటలు
                </div>
              </div>

              {/* 5. Prana Dasha */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 shadow-xs">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#7C3AED] text-white text-[10px] font-bold">
                  స్థాయి 5 • నిమిషాలు &amp; సెకన్లు
                </span>
                <label className="block text-xs font-bold text-[#7B1113]">5. ప్రాణదశ గ్రహము:</label>
                <select
                  value={pranadashaGrahaId}
                  onChange={e => setPranadashaGrahaId(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#7B1113]"
                >
                  {[...TWELVE_GRAHAS_MASTER_DATA]
                    .sort((a, b) => a.dashaOrder - b.dashaOrder)
                    .map(g => (
                      <option key={g.id} value={g.id}>
                        {g.nameTe.split(' ')[0]} ప్రాణ ({g.dashaYears} సం||)
                      </option>
                    ))}
                </select>
                <div className="text-[10px] text-[#5D4037] truncate font-medium">
                  గణన: (M×A×P×S×Pr)÷400 నిమిషాలు
                </div>
              </div>
            </div>

            {/* Hierarchical Result Display Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#2A0808] via-[#1A0505] to-[#3B0C10] text-white border-2 border-[#D4AF37] shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D4AF37]/30 pb-3">
                <div className="text-xs font-bold text-[#FFE082] uppercase tracking-wider flex items-center gap-2">
                  <span>⏱️</span>
                  <span>ఎంచుకున్న సంపూర్ణ పంచవిధ దశల కాలవ్యవధి (Dasha Periods Breakdown):</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFE082] text-[#4A0012]">
                  {mahaGraha.nameTe.split(' ')[0]} ➔ {antarGraha.nameTe.split(' ')[0]} ➔ {pratyantaraGraha.nameTe.split(' ')[0]} ➔ {sukshmaGraha.nameTe.split(' ')[0]} ➔ {pranaGraha.nameTe.split(' ')[0]}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
                {/* Maha */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-[#D4AF37]/40 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#FFE082]">1. మహాదశ (Maha)</span>
                  <div className="font-bold text-sm text-white truncate">
                    {mahaGraha.icon} {mahaGraha.nameTe.split(' ')[0]}
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#FFE082] font-telugu-serif">
                    {mahaGraha.dashaYears} సం||లు
                  </div>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-stone-200">
                    {mahaGraha.party}
                  </span>
                </div>

                {/* Antar */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-[#2563EB]/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#93C5FD]">2. అంతర్దశ (Antar)</span>
                  <div className="font-bold text-sm text-white truncate">
                    {antarGraha.icon} {antarGraha.nameTe.split(' ')[0]}
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#93C5FD] font-telugu-serif">
                    {antardashaResult.months} నెలల {antardashaResult.days} రోజులు
                  </div>
                  <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${
                    antarGraha.party === mahaGraha.party ? 'bg-emerald-900/60 text-emerald-200' : 'bg-red-900/60 text-red-200'
                  }`}>
                    {antarGraha.party === mahaGraha.party ? 'మిత్ర అంతర్దశ' : 'శత్రు అంతర్దశ'}
                  </span>
                </div>

                {/* Pratyantar */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-[#DC2626]/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#FCA5A5]">3. ప్రత్యంతర్దశ (Pratyantar)</span>
                  <div className="font-bold text-sm text-white truncate">
                    {pratyantaraGraha.icon} {pratyantaraGraha.nameTe.split(' ')[0]}
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#FCA5A5] font-telugu-serif">
                    {pratyantaraResult.days} రోజులు {pratyantaraResult.hours} గంటలు
                  </div>
                  <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${
                    pratyantaraGraha.party === mahaGraha.party ? 'bg-emerald-900/60 text-emerald-200' : 'bg-red-900/60 text-red-200'
                  }`}>
                    {pratyantaraResult.minutes > 0 ? `${pratyantaraResult.minutes} నిమిషాలు` : 'కచ్చిత గంటలు'}
                  </span>
                </div>

                {/* Sukshma */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-[#059669]/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#6EE7B7]">4. సూక్ష్మదశ (Sukshma)</span>
                  <div className="font-bold text-sm text-white truncate">
                    {sukshmaGraha.icon} {sukshmaGraha.nameTe.split(' ')[0]}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#6EE7B7] font-telugu-serif">
                    {sukshmaResult.days > 0 ? `${sukshmaResult.days} రో|| ` : ''}{sukshmaResult.hours} గం|| {sukshmaResult.minutes} ని||
                  </div>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-stone-200">
                    {sukshmaResult.seconds} సెకన్లు
                  </span>
                </div>

                {/* Prana */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-[#7C3AED]/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#C4B5FD]">5. ప్రాణదశ (Prana)</span>
                  <div className="font-bold text-sm text-white truncate">
                    {pranaGraha.icon} {pranaGraha.nameTe.split(' ')[0]}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#C4B5FD] font-telugu-serif">
                    {pranaResult.hours > 0 ? `${pranaResult.hours} గం|| ` : ''}{pranaResult.minutes} నిమిషాలు
                  </div>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-stone-200">
                    {pranaResult.seconds} సెకన్లు
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-Period Explorer Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#7B1113] uppercase tracking-wider">
                  ద్వాదశ ఉప-విభాగాల పట్టిక (12 Sub-Periods Grid — క్లిక్ చేసి ఎంచుకోండి):
                </span>
                <div className="inline-flex p-1 rounded-xl bg-white border border-[#D4AF37] shadow-xs">
                  <button
                    type="button"
                    onClick={() => setActiveDashaSubTab('antar')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeDashaSubTab === 'antar'
                        ? 'bg-[#7B1113] text-[#FFE082]'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    అంతర్దశలు ({mahaGraha.nameTe.split(' ')[0]}లో 12)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDashaSubTab('pratyantar')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeDashaSubTab === 'pratyantar'
                        ? 'bg-[#7B1113] text-[#FFE082]'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    ప్రత్యంతర్దశలు ({antarGraha.nameTe.split(' ')[0]}లో 12)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDashaSubTab('sukshma')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeDashaSubTab === 'sukshma'
                        ? 'bg-[#7B1113] text-[#FFE082]'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    సూక్ష్మదశలు ({pratyantaraGraha.nameTe.split(' ')[0]}లో 12)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDashaSubTab('prana')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeDashaSubTab === 'prana'
                        ? 'bg-[#7B1113] text-[#FFE082]'
                        : 'text-[#5D4037] hover:text-[#7B1113]'
                    }`}
                  >
                    ప్రాణదశలు ({sukshmaGraha.nameTe.split(' ')[0]}లో 12)
                  </button>
                </div>
              </div>

              {/* Grid 1: Antardashas */}
              {activeDashaSubTab === 'antar' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {allAntardashasForMaha.map((item, idx) => (
                    <div
                      key={item.graha.id}
                      onClick={() => setAntardashaGrahaId(item.graha.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        item.graha.id === antardashaGrahaId
                          ? 'bg-[#7B1113] text-[#FFE082] border-[#D4AF37] shadow'
                          : 'bg-white text-[#2C1810] border-[#E8DCC4] hover:border-[#7B1113]'
                      }`}
                    >
                      <div className="text-[10px] font-bold opacity-75">అంతర్దశ #{idx + 1}</div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {item.graha.icon} {item.graha.nameTe.split(' ')[0]}
                      </div>
                      <div className={`text-xs font-bold mt-1 ${item.graha.id === antardashaGrahaId ? 'text-white' : 'text-[#D84315]'}`}>
                        {item.months} నె|| {item.days} రో||
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Grid 2: Pratyantardashas */}
              {activeDashaSubTab === 'pratyantar' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {allPratyantardashasForAntar.map((item, idx) => (
                    <div
                      key={item.graha.id}
                      onClick={() => setPratyantardashaGrahaId(item.graha.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        item.graha.id === pratyantardashaGrahaId
                          ? 'bg-[#DC2626] text-white border-[#D4AF37] shadow'
                          : 'bg-white text-[#2C1810] border-[#E8DCC4] hover:border-[#DC2626]'
                      }`}
                    >
                      <div className="text-[10px] font-bold opacity-75">ప్రత్యంతర #{idx + 1}</div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {item.graha.icon} {item.graha.nameTe.split(' ')[0]}
                      </div>
                      <div className={`text-xs font-bold mt-1 ${item.graha.id === pratyantardashaGrahaId ? 'text-white' : 'text-[#D84315]'}`}>
                        {item.days} రో|| {item.hours} గం||
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Grid 3: Sukshma Dashas */}
              {activeDashaSubTab === 'sukshma' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {allSukshmadashasForPratyantar.map((item, idx) => (
                    <div
                      key={item.graha.id}
                      onClick={() => setSukshmadashaGrahaId(item.graha.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        item.graha.id === sukshmadashaGrahaId
                          ? 'bg-[#059669] text-white border-[#D4AF37] shadow'
                          : 'bg-white text-[#2C1810] border-[#E8DCC4] hover:border-[#059669]'
                      }`}
                    >
                      <div className="text-[10px] font-bold opacity-75">సూక్ష్మ #{idx + 1}</div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {item.graha.icon} {item.graha.nameTe.split(' ')[0]}
                      </div>
                      <div className={`text-xs font-bold mt-1 ${item.graha.id === sukshmadashaGrahaId ? 'text-white' : 'text-[#D84315]'}`}>
                        {item.days > 0 ? `${item.days}రో ` : ''}{item.hours}గం {item.minutes}ని
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Grid 4: Prana Dashas */}
              {activeDashaSubTab === 'prana' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {allPranadashasForSukshma.map((item, idx) => (
                    <div
                      key={item.graha.id}
                      onClick={() => setPranadashaGrahaId(item.graha.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        item.graha.id === pranadashaGrahaId
                          ? 'bg-[#7C3AED] text-white border-[#D4AF37] shadow'
                          : 'bg-white text-[#2C1810] border-[#E8DCC4] hover:border-[#7C3AED]'
                      }`}
                    >
                      <div className="text-[10px] font-bold opacity-75">ప్రాణ #{idx + 1}</div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {item.graha.icon} {item.graha.nameTe.split(' ')[0]}
                      </div>
                      <div className={`text-xs font-bold mt-1 ${item.graha.id === pranadashaGrahaId ? 'text-white' : 'text-[#D84315]'}`}>
                        {item.hours > 0 ? `${item.hours}గం ` : ''}{item.minutes}ని {item.seconds}సె
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Formulas Documentation Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#D4AF37] space-y-2 text-xs text-[#5D4037]">
              <div className="font-bold text-[#7B1113] flex items-center gap-1.5">
                <span>📐</span>
                <span>పంచవిధ దశల గణన సూత్రములు (120 సంవత్సరాల నిష్పత్తి ఆధారముగా):</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                  <strong className="text-[#7B1113]">1. అంతర్దశ:</strong>
                  <div><code>(M × A × 3) ÷ 30</code></div>
                  <p className="text-[10px] text-[#5D4037] mt-0.5">లభించిన భాగఫలము నెలలు, శేషము దినములు.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                  <strong className="text-[#2563EB]">2. ప్రత్యంతర్దశ:</strong>
                  <div><code>(M × A × P) ÷ 40</code></div>
                  <p className="text-[10px] text-[#5D4037] mt-0.5">లభించిన మొత్తం దినములు; శేషమును గంటలుగా మార్చబడును.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                  <strong className="text-[#059669]">3. సూక్ష్మదశ:</strong>
                  <div><code>(M × A × P × S) ÷ 200</code></div>
                  <p className="text-[10px] text-[#5D4037] mt-0.5">లభించిన మొత్తం గంటలు; రోజులు, గంటలు, నిమిషములు.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                  <strong className="text-[#7C3AED]">4. ప్రాణదశ:</strong>
                  <div><code>(M × A × P × S × Pr) ÷ 400</code></div>
                  <p className="text-[10px] text-[#5D4037] mt-0.5">లభించిన మొత్తం నిమిషములు; నిమిషాలు, సెకన్లు.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 6: HISTORICAL KUNDALI CASE STUDIES (Chapters 43, 46, 47) */}
      {/* =================================================================== */}
      {showSection('case_studies') && (
        <section className="space-y-6 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          <div className="border-b-2 border-[#E8DCC4] pb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
              విభాగం 6 • అధ్యాయములు 43, 46 &amp; 47
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
              ప్రముఖుల జాతక విశ్లేషణలు &amp; ఆయుష్షు / కర్మ దహన రహస్యములు
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
              మహాత్మా గాంధీ, ముహమ్మద్ ప్రవక్త, రాజీవ్ గాంధీ, వై.ఎస్. జగన్, వృశ్చిక లగ్న జడ్జి మరియు సత్యసాయిబాబా ఉదాహరణ విశ్లేషణలు
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {KUNDALI_CASE_STUDIES.map(cs => (
              <div
                key={cs.id}
                className="p-5 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37] flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                      {cs.nameTe}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                      {cs.janmaLagnaTe}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#D84315]">{cs.birthDetailsTe}</div>

                  <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
                    <div className="text-[11px] font-bold text-[#7B1113] uppercase">ముఖ్య గ్రహ స్థితిగతులు:</div>
                    <ul className="space-y-1 text-xs text-[#2C1810]">
                      {cs.keyPlacementsTe.map((kp, idx) => (
                        <li key={idx}>• {kp}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
                    <strong>విశ్లేషణ:</strong> {cs.analysisTe}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF8E1] border border-[#D4AF37] text-xs font-bold text-[#7B1113]">
                  💡 శాస్త్ర నిరూపణ: {cs.spiritualLessonTe}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECTION 7: ALL 48 CHAPTERS & 34 Q&As DIRECTORY */}
      {/* =================================================================== */}
      {showSection('chapters_qa') && (
        <section className="space-y-8 bg-[#FFFFFF] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-lg">
          {/* Part A: All 48 Chapters */}
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#E8DCC4] pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
                  విభాగం 7A • సంపూర్ణ 48 అధ్యాయముల దర్శిని
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2">
                  “జ్యోతిష్య శాస్త్రము” గ్రంథములోని మొత్తం 48 అధ్యాయముల సారాంశము
                </h2>
              </div>

              {/* SearchChapters */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#5D4037] absolute left-3 top-3" />
                <input
                  type="text"
                  value={chapterSearch}
                  onChange={e => setChapterSearch(e.target.value)}
                  placeholder="48 అధ్యాయాలలో వెతకండి..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] text-xs sm:text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                'all',
                'మూల సిద్ధాంతము',
                'చక్రములు & కర్మ రహస్యము',
                'ద్వాదశ గ్రహములు & వర్గములు',
                'రాశులు, లగ్నములు & దశలు',
                'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు'
              ].map(cat => (
                <button
                  key={cat}
                  onClick={() => setChapterCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                    chapterCategoryFilter === cat
                      ? 'bg-[#7B1113] text-[#FFE082]'
                      : 'bg-[#FAF7F0] text-[#5D4037] border border-[#E8DCC4] hover:border-[#7B1113]'
                  }`}
                >
                  {cat === 'all' ? 'అన్ని అధ్యాయములు (48)' : cat}
                </button>
              ))}
            </div>

            {/* 48 Chapters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[850px] overflow-y-auto pr-1">
              {filteredChapters.map(ch => (
                <div
                  key={ch.chapterNumber}
                  className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37] space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold">
                        అధ్యాయము {ch.chapterNumber}
                      </span>
                      <span className="text-[10px] font-bold text-[#D84315]">{ch.categoryTe}</span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                      {ch.titleTe}
                    </h4>
                    <p className="text-xs text-[#2C1810] font-medium leading-relaxed">
                      {ch.summaryTe}
                    </p>
                  </div>
                  <ul className="space-y-1 pt-2 border-t border-[#E8DCC4] text-[11px] text-[#5D4037]">
                    {ch.keyTeachingsTe.map((kt, idx) => (
                      <li key={idx}>• {kt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: All 34 Q&As */}
          <div className="space-y-5 pt-6 border-t-2 border-[#D4AF37]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
                  విభాగం 7B • 48వ అధ్యాయము: 34 ప్రశ్నలు - జవాబులు
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif mt-2 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#D84315]" />
                  <span>జ్యోతిష్యములో 34 ముఖ్య ప్రశ్నలు - శాస్త్రీయ జవాబులు</span>
                </h2>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#5D4037] absolute left-3 top-3" />
                <input
                  type="text"
                  value={qaSearch}
                  onChange={e => setQaSearch(e.target.value)}
                  placeholder="ప్రశ్నలలో వెతకండి (ఉదా: ముహూర్తం, వాస్తు, రత్నం)..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] text-xs sm:text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQAs.map(qa => (
                <div
                  key={qa.qNumber}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border-2 border-[#E8DCC4] hover:border-[#D4AF37] space-y-2 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold">
                      ప్రశ్న #{qa.qNumber}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8E1] text-[#D84315] border border-[#D4AF37] text-[11px] font-bold">
                      {qa.topicTagTe}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                    {qa.questionTe}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed bg-white p-3 rounded-xl border border-[#E8DCC4]">
                    <strong className="text-[#D84315]">జవాబు: </strong>
                    {qa.answerTe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chakra Image Lightbox / Modal */}
      {selectedChakraImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedChakraImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1A0505] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#D4AF37]/40 flex items-center justify-between gap-3 bg-gradient-to-r from-[#2A0808] to-[#1A0505] text-white">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#FFE082] font-telugu-serif">
                  {selectedChakraImage.title}
                </h3>
                <p className="text-xs text-stone-300 mt-0.5">
                  {selectedChakraImage.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedChakraImage(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className={`p-4 sm:p-6 flex-1 overflow-auto flex items-center justify-center ${
              selectedChakraImage.url.includes('source_') ? 'bg-[#FFFDF7]' : 'bg-black/60'
            }`}>
              <img
                src={selectedChakraImage.url}
                alt={selectedChakraImage.title}
                className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-[#D4AF37]/30"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-[#2A0808] border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-300">
              <span>🔯 తలలోని ఫాలభాగ చక్రముల రహస్యము (శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరులు)</span>
              <button
                type="button"
                onClick={() => setSelectedChakraImage(null)}
                className="px-4 py-1.5 rounded-xl bg-[#D4AF37] text-[#4A0012] font-bold hover:bg-[#FFE082] transition-colors cursor-pointer"
              >
                మూసివేయుము (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
