import React, { useState, useMemo } from 'react';
import { 
  Calendar, Clock, RefreshCw, ArrowRight, Info, Layers
} from 'lucide-react';
import { 
  calculateAllPlanets 
} from '../../utils/planetaryEngine';
import type { 
  PlanetKey, 
  CompletePlanetInfo, 
  RasiDef 
} from '../../utils/planetaryEngine';

interface SouthIndianRasiChartProps {
  initialDate?: Date;
}

export const SouthIndianRasiChart: React.FC<SouthIndianRasiChartProps> = ({ initialDate }) => {
  // Current selected date state
  const [selectedDate, setSelectedDate] = useState<Date>(() => initialDate || new Date());
  const [selectedPlanetKey, setSelectedPlanetKey] = useState<PlanetKey | null>(null);
  const [selectedRasiIndex, setSelectedRasiIndex] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'slow' | 'fast'>('all');

  // Compute all astronomical planetary data and transitions for selected date
  const astroData = useMemo(() => {
    return calculateAllPlanets(selectedDate);
  }, [selectedDate]);

  // Format date helper
  const formatDateTe = (date: Date): string => {
    return date.toLocaleDateString('te-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateShort = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Date manipulation helpers
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const handleStepDays = (days: number) => {
    const next = new Date(selectedDate.getTime() + days * 86400000);
    setSelectedDate(next);
  };

  const handleStepMonths = (months: number) => {
    const next = new Date(selectedDate);
    next.setMonth(next.getMonth() + months);
    setSelectedDate(next);
  };

  const handleStepYears = (years: number) => {
    const next = new Date(selectedDate);
    next.setFullYear(next.getFullYear() + years);
    setSelectedDate(next);
  };

  const handleResetToday = () => {
    setSelectedDate(new Date());
  };

  // Filtered planets for table
  const displayedPlanets = useMemo(() => {
    if (filterType === 'slow') {
      return astroData.planets.filter(p => ['saturn', 'jupiter', 'rahu', 'ketu'].includes(p.key));
    }
    if (filterType === 'fast') {
      return astroData.planets.filter(p => ['sun', 'moon', 'mars', 'mercury', 'venus'].includes(p.key));
    }
    return astroData.planets;
  }, [astroData.planets, filterType]);

  // Selected planet details
  const activePlanet = useMemo(() => {
    if (!selectedPlanetKey) return null;
    return astroData.planets.find(p => p.key === selectedPlanetKey) || null;
  }, [selectedPlanetKey, astroData.planets]);

  // Selected rasi details
  const activeRasi = useMemo(() => {
    if (selectedRasiIndex === null) return null;
    return astroData.houses.find(h => h.rasi.index === selectedRasiIndex) || null;
  }, [selectedRasiIndex, astroData.houses]);

  // Map each box in the 4x4 South Indian grid:
  // South Indian canonical layout:
  // Row 1: [11 (మీనం), 0 (మేషం), 1 (వృషభం), 2 (మిథునం)]
  // Row 2: [10 (కుంభం), center, center, 3 (కర్కాటకం)]
  // Row 3: [9 (మకరం), center, center, 4 (సింహం)]
  // Row 4: [8 (ధనుస్సు), 7 (వృశ్చికం), 6 (తుల), 5 (కన్య)]
  const getHouseByRowCol = (row: number, col: number) => {
    return astroData.houses.find(h => h.rasi.southGridRow === row && h.rasi.southGridCol === col);
  };

  return (
    <div className="space-y-8 text-[#2C1810]">
      {/* Header & Philosophical Context */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF3E0] p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪐</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#7B1113] font-telugu-serif tracking-tight">
                దక్షిణ భారత రాశి చక్రం &amp; సజీవ గ్రహ గోచార సంచార దర్శిని
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5D4037] max-w-3xl leading-relaxed">
              జ్యోతిష్య శాస్త్రంలో కాలచక్రంలోని 12 గ్రహాలు (ఫోకస్ లైట్లు) ప్రస్తుతం ఏ రాశుల్లో సంచరిస్తున్నాయో, వాటి ప్రవేశ-నిష్క్రమణ తేదీలు (Start &amp; End Dates) మరియు సంక్రమణ వ్యవధిని క్రింది దక్షిణ భారత చక్రంలో ప్రత్యక్షంగా వీక్షించవచ్చు.
            </p>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            <button
              onClick={handleResetToday}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#D84315] text-[#FFE082] text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
              title="నేటి గోచారానికి పునరుద్ధరించు"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>నేటి గోచారం (Live Today)</span>
            </button>
          </div>
        </div>

        {/* Date Selector & Step Controls */}
        <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Date Picker Input */}
          <div className="md:col-span-5 flex items-center gap-2.5 bg-white p-2.5 rounded-2xl border border-[#D4AF37]/50 shadow-xs">
            <Calendar className="w-5 h-5 text-[#D84315] shrink-0 ml-1" />
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-[#7B1113] uppercase tracking-wider">
                గోచార తేది ఎంపిక (Select Date):
              </label>
              <input
                type="date"
                value={selectedDate.toISOString().slice(0, 10)}
                onChange={(e) => {
                  if (e.target.value) {
                    const [y, m, d] = e.target.value.split('-').map(Number);
                    handleDateChange(new Date(y, m - 1, d, 12, 0, 0));
                  }
                }}
                className="w-full text-xs sm:text-sm font-bold text-[#2C1810] outline-hidden cursor-pointer bg-transparent"
              />
            </div>
            <div className="text-right shrink-0 border-l border-[#E8DCC4] pl-2.5">
              <span className="block text-[10px] text-[#5D4037]">లాహిరి అయనాంశ</span>
              <span className="text-xs font-bold text-[#D84315]">
                {astroData.ayanamsha.toFixed(2)}°
              </span>
            </div>
          </div>

          {/* Quick Step Buttons */}
          <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 justify-start md:justify-end text-xs">
            <span className="text-[11px] font-semibold text-[#5D4037] mr-1 hidden sm:inline">తేదీ మార్పు:</span>
            
            <button
              onClick={() => handleStepDays(-1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 రోజు వెనక్కి"
            >
              -1 రోజు
            </button>
            <button
              onClick={() => handleStepDays(1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 రోజు ముందుకు"
            >
              +1 రోజు
            </button>
            
            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5" />

            <button
              onClick={() => handleStepMonths(-1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 నెల వెనక్కి"
            >
              -1 నెల
            </button>
            <button
              onClick={() => handleStepMonths(1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 నెల ముందుకు"
            >
              +1 నెల
            </button>

            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5" />

            <button
              onClick={() => handleStepYears(-1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 సంవత్సరం వెనక్కి"
            >
              -1 సం||
            </button>
            <button
              onClick={() => handleStepYears(1)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors"
              title="1 సంవత్సరం ముందుకు"
            >
              +1 సం||
            </button>
          </div>
        </div>

        {/* Next Upcoming Major Transition Notification Bar */}
        {astroData.nextMajorTransition && (
          <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-[#FFF3E0] to-[#FFE082]/40 border border-[#FFB74D] flex items-center justify-between gap-3 text-xs flex-wrap">
            <div className="flex items-center gap-2 text-[#7B1113] font-semibold">
              <span className="text-base animate-pulse">🔔</span>
              <span>
                <strong>తదుపరి రాశి సంక్రమణం:</strong> {astroData.nextMajorTransition.planetNameTe} త్వరలో 
                <strong className="text-[#D84315]"> {astroData.nextMajorTransition.nextRasiNameTe} </strong> 
                రాశిలోకి ప్రవేశించును.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full bg-white text-[#7B1113] border border-[#D4AF37]/50 font-bold text-[11px]">
                తేదీ: {formatDateShort(astroData.nextMajorTransition.date)}
              </span>
              <span className="text-[#C62828] font-bold">
                (ఇంకా {Math.ceil(astroData.nextMajorTransition.daysRemaining)} రోజులు)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* South Indian 4x4 Rasi Grid Chart */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h4 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
              దక్షిణ భారత జాతక చక్రం (12 స్థిర రాశులు &amp; ప్రత్యక్ష గ్రహ సంచారం)
            </h4>
          </div>
          <span className="text-xs text-[#5D4037] italic">
            *ఏదైనా రాశి లేదా గ్రహంపై క్లిక్ చేసి సమగ్ర వివరాలను పరిశీలించండి
          </span>
        </div>

        {/* The 4x4 Grid Container */}
        <div className="p-3 sm:p-5 rounded-3xl bg-[#2A0808] border-3 border-[#D4AF37] shadow-2xl">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 aspect-square max-w-4xl mx-auto">
            {/* Row 1: [1,1] Meena, [1,2] Mesha, [1,3] Vrishabha, [1,4] Mithuna */}
            {/* Box 1 (1,1): 11. మీనం */}
            {renderRasiCell(getHouseByRowCol(1, 1)!)}
            {/* Box 2 (1,2): 0. మేషం */}
            {renderRasiCell(getHouseByRowCol(1, 2)!)}
            {/* Box 3 (1,3): 1. వృషభం */}
            {renderRasiCell(getHouseByRowCol(1, 3)!)}
            {/* Box 4 (1,4): 2. మిథునం */}
            {renderRasiCell(getHouseByRowCol(1, 4)!)}

            {/* Row 2: [2,1] Kumbha, [2,2 - 3,3] CENTER HERO, [2,4] Karkataka */}
            {/* Box 5 (2,1): 10. కుంభం */}
            {renderRasiCell(getHouseByRowCol(2, 1)!)}

            {/* CENTER BOX: Spans 2 Rows and 2 Cols (Row 2-3, Col 2-3) */}
            <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-b from-[#1F0707] via-[#2A0808] to-[#140303] border-2 border-[#D4AF37] p-3 sm:p-6 flex flex-col justify-between items-center text-center shadow-inner relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <span className="text-9xl text-[#FFE082]">🕉️</span>
              </div>

              <div className="space-y-1 relative z-10 w-full">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#FFE082] border border-[#D4AF37]/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block">
                  దక్షిణ భారత రాశి చక్రం
                </span>
                <h5 className="text-base sm:text-xl font-bold text-[#FFE082] font-telugu-serif mt-1">
                  గోచార గ్రహ స్థితి
                </h5>
                <p className="text-xs sm:text-sm text-[#FFD54F] font-semibold">
                  {formatDateTe(selectedDate)}
                </p>
                <p className="text-[10px] sm:text-xs text-stone-300">
                  {formatDateShort(selectedDate)} • లాహిరి నిరయన పద్ధతి
                </p>
              </div>

              {/* Center Quick Stats */}
              <div className="grid grid-cols-2 gap-2 w-full my-2 relative z-10">
                <div className="p-2 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-left">
                  <span className="block text-[9px] sm:text-[10px] text-stone-300">మొత్తం గ్రహాలు</span>
                  <span className="text-xs sm:text-sm font-bold text-[#FFE082]">9 నవగ్రహాలు</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-left">
                  <span className="block text-[9px] sm:text-[10px] text-stone-300">వక్రించిన గ్రహాలు</span>
                  <span className="text-xs sm:text-sm font-bold text-[#F87171]">
                    {astroData.planets.filter(p => p.isRetrograde && p.key !== 'rahu' && p.key !== 'ketu').length} గ్రహాలు (వ)
                  </span>
                </div>
              </div>

              {/* Reset Button in Center */}
              <button
                onClick={handleResetToday}
                className="relative z-10 px-3 py-1 rounded-xl bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/60 text-[#FFE082] text-[10px] sm:text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5"
              >
                <Clock className="w-3 h-3 text-[#FFD54F]" />
                <span>వర్తమాన తేదికి రండి (Today)</span>
              </button>
            </div>

            {/* Box 6 (2,4): 3. కర్కాటకం */}
            {renderRasiCell(getHouseByRowCol(2, 4)!)}

            {/* Row 3: [3,1] Makara, [3,4] Simha */}
            {/* Box 7 (3,1): 9. మకరం */}
            {renderRasiCell(getHouseByRowCol(3, 1)!)}
            {/* Box 8 (3,4): 4. సింహం */}
            {renderRasiCell(getHouseByRowCol(3, 4)!)}

            {/* Row 4: [4,1] Dhanus, [4,2] Vrischika, [4,3] Tula, [4,4] Kanya */}
            {/* Box 9 (4,1): 8. ధనుస్సు */}
            {renderRasiCell(getHouseByRowCol(4, 1)!)}
            {/* Box 10 (4,2): 7. వృశ్చికం */}
            {renderRasiCell(getHouseByRowCol(4, 2)!)}
            {/* Box 11 (4,3): 6. తుల */}
            {renderRasiCell(getHouseByRowCol(4, 3)!)}
            {/* Box 12 (4,4): 5. కన్య */}
            {renderRasiCell(getHouseByRowCol(4, 4)!)}
          </div>
        </div>
      </div>

      {/* Selected Planet or Rasi Quick Card */}
      {activePlanet && (
        <div className="rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFF8E1] to-[#FFFDF7] p-5 shadow-lg space-y-4">
          <div className="flex items-start justify-between gap-3 border-b border-[#D4AF37]/30 pb-3 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activePlanet.meta.symbol}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-[#7B1113] font-telugu-serif">
                    {activePlanet.meta.nameTe}
                  </h4>
                  <span className="text-xs text-[#5D4037]">({activePlanet.meta.nameEn})</span>
                  {activePlanet.isRetrograde && (
                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-300 text-[10px] font-bold">
                      వక్రం (Retrograde)
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-[10px] font-bold">
                    {activePlanet.dignityLabelTe}
                  </span>
                </div>
                <p className="text-xs text-[#5D4037]">{activePlanet.meta.natureTe}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedPlanetKey(null)}
              className="text-xs text-[#7B1113] hover:underline font-semibold cursor-pointer"
            >
              ✕ మూసివేయి
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
              <span className="text-[#5D4037] block">ప్రస్తుత రాశి &amp; డిగ్రీ:</span>
              <strong className="text-sm text-[#7B1113]">
                {activePlanet.rasiNameTe} ({activePlanet.degreeFormatted})
              </strong>
              <p className="text-[11px] text-[#5D4037]">నక్షత్రం: {activePlanet.nakshatraNameTe} {activePlanet.nakshatraPada}వ పాదం</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
              <span className="text-[#5D4037] block">ఈ రాశి ప్రవేశ తేదీ (Start Date):</span>
              <strong className="text-sm text-[#059669]">
                {formatDateShort(activePlanet.entryDate)}
              </strong>
              <p className="text-[11px] text-[#5D4037]">గడచిన కాలం: {Math.floor(activePlanet.daysElapsed)} రోజులు</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
              <span className="text-[#5D4037] block">ఈ రాశి నిష్క్రమణ (End Date):</span>
              <strong className="text-sm text-[#DC2626]">
                {formatDateShort(activePlanet.exitDate)}
              </strong>
              <p className="text-[11px] text-[#5D4037]">మిగిలిన రోజులు: {Math.ceil(activePlanet.daysRemaining)} రోజులు</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
              <span className="text-[#5D4037] block">మొత్తం వ్యవధి &amp; తదుపరి రాశి:</span>
              <strong className="text-sm text-[#7B1113]">
                {activePlanet.durationDays} రోజులు
              </strong>
              <p className="text-[11px] text-[#D84315] font-semibold">
                తదుపరి: {activePlanet.nextRasiNameTe} రాశి
              </p>
            </div>
          </div>

          {/* Progress Bar of Current Transit */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-[#5D4037]">
              <span>సంచార పురోగతి (Transit Progress): {activePlanet.progressPercent}%</span>
              <span>{Math.floor(activePlanet.daysElapsed)} / {activePlanet.durationDays} రోజులు</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#E8DCC4] overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#D84315] transition-all duration-500"
                style={{ width: `${activePlanet.progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Selected Rasi Quick Card */}
      {activeRasi && (
        <div className="rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFFDF7] to-[#FAF7F0] p-5 shadow-lg space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-[#D4AF37]/30 pb-3 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeRasi.rasi.symbol}</span>
              <div>
                <h4 className="text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                  <span>{activeRasi.rasi.nameTe} రాశి ({activeRasi.rasi.nameEn})</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold">
                    అధిపతి: {activeRasi.rasi.lordTe}
                  </span>
                </h4>
                <p className="text-xs text-[#5D4037]">
                  తత్వం: {activeRasi.rasi.elementTe} • స్వభావం: {activeRasi.rasi.qualityTe} • స్థానం: {activeRasi.rasi.index + 1}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedRasiIndex(null)}
              className="text-xs text-[#7B1113] hover:underline font-semibold cursor-pointer"
            >
              ✕ మూసివేయి
            </button>
          </div>

          <div className="text-xs space-y-2">
            <span className="font-bold text-[#7B1113]">ప్రస్తుతం ఈ రాశిలో సంచరిస్తున్న గ్రహాలు ({activeRasi.planets.length}):</span>
            {activeRasi.planets.length === 0 ? (
              <p className="text-stone-500 italic">ప్రస్తుతం ఈ రాశిలో ఏ గ్రహాలూ సంచరించడం లేదు (ఖాళీ రాశి).</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {activeRasi.planets.map(p => (
                  <div key={p.key} className="p-2.5 rounded-xl bg-white border border-[#E8DCC4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{p.meta.symbol}</span>
                      <div>
                        <strong className="text-[#7B1113] block">{p.meta.nameTe}</strong>
                        <span className="text-[10px] text-stone-500">{p.nakshatraNameTe} {p.nakshatraPada}వ పాదం</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#D84315] block">{p.degreeFormatted}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold">{p.dignityLabelTe}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Comprehensive Transition Start & End Dates Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-[#D4AF37]/40 pb-3">
          <div className="space-y-0.5">
            <h4 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D84315]" />
              <span>సమగ్ర గ్రహ గోచార సంచార కాలములు &amp; సంక్రమణ వివరాల పట్టిక</span>
            </h4>
            <p className="text-xs text-[#5D4037]">
              ప్రతి గ్రహం ప్రస్తుత రాశిలోకి ప్రవేశించిన తేదీ (Start Date), నిష్క్రమించే తేదీ (End Date), మొత్తం వ్యవధి మరియు తదుపరి రాశి.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 bg-[#FFF8E1] p-1 rounded-xl border border-[#D4AF37]/50 self-stretch sm:self-auto justify-center">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/40'
              }`}
            >
              అన్నీ (9 గ్రహాలు)
            </button>
            <button
              onClick={() => setFilterType('slow')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'slow'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/40'
              }`}
            >
              నెమ్మదిగా తిరిగేవి (శని, గురు, రాహు, కేతు)
            </button>
            <button
              onClick={() => setFilterType('fast')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'fast'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/40'
              }`}
            >
              శీఘ్ర గ్రహాలు
            </button>
          </div>
        </div>

        {/* The Transition Table */}
        <div className="overflow-x-auto rounded-2xl border-2 border-[#D4AF37] shadow-md bg-white">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082]">
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">గ్రహం (Planet)</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">ప్రస్తుత రాశి &amp; డిగ్రీ</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">నక్షత్రము &amp; పాదం</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 text-emerald-300">
                  రాశి ప్రవేశం (Start Date)
                </th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 text-rose-300">
                  రాశి నిష్క్రమణ (End Date)
                </th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">మొత్తం వ్యవధి</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">సంచార పురోగతి</th>
                <th className="p-3 font-bold">తదుపరి రాశి (Next Transition)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DCC4]">
              {displayedPlanets.map((p) => {
                const isSelected = selectedPlanetKey === p.key;
                return (
                  <tr
                    key={p.key}
                    onClick={() => setSelectedPlanetKey(isSelected ? null : p.key)}
                    className={`transition-colors cursor-pointer hover:bg-[#FFF8E1] ${
                      isSelected ? 'bg-[#FFF3E0] ring-1 ring-[#D84315]' : ''
                    }`}
                  >
                    {/* Planet info */}
                    <td className="p-3 border-r border-[#E8DCC4]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{p.meta.symbol}</span>
                        <div>
                          <div className="font-bold text-[#7B1113] flex items-center gap-1">
                            <span>{p.meta.nameTe}</span>
                            {p.isRetrograde && (
                              <span className="px-1.5 py-0.2 rounded-full bg-red-100 text-red-700 text-[9px] font-bold">
                                వ
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#5D4037]">{p.meta.nameEn}</span>
                        </div>
                      </div>
                    </td>

                    {/* Current Rasi & Degree */}
                    <td className="p-3 border-r border-[#E8DCC4]">
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#2C1810] block">{p.rasiNameTe} రాశి</span>
                        <span className="text-[11px] text-[#D84315] font-semibold block">{p.degreeFormatted}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#FAF7F0] border border-[#D4AF37]/40 text-[#7B1113] inline-block">
                          {p.dignityLabelTe}
                        </span>
                      </div>
                    </td>

                    {/* Nakshatra & Pada */}
                    <td className="p-3 border-r border-[#E8DCC4]">
                      <div className="space-y-0.5">
                        <span className="font-semibold text-[#2C1810] block">{p.nakshatraNameTe}</span>
                        <span className="text-[10px] text-[#5D4037] block">{p.nakshatraPada}వ పాదం</span>
                      </div>
                    </td>

                    {/* Transition Start Date */}
                    <td className="p-3 border-r border-[#E8DCC4] bg-emerald-50/40">
                      <div className="space-y-0.5">
                        <span className="font-bold text-emerald-800 block">
                          {formatDateShort(p.entryDate)}
                        </span>
                        <span className="text-[10px] text-emerald-700 block">
                          {Math.floor(p.daysElapsed)} రోజుల క్రితం
                        </span>
                      </div>
                    </td>

                    {/* Transition End Date */}
                    <td className="p-3 border-r border-[#E8DCC4] bg-rose-50/40">
                      <div className="space-y-0.5">
                        <span className="font-bold text-rose-800 block">
                          {formatDateShort(p.exitDate)}
                        </span>
                        <span className="text-[10px] text-rose-700 font-semibold block">
                          ఇంకా {Math.ceil(p.daysRemaining)} రోజులు
                        </span>
                      </div>
                    </td>

                    {/* Total Duration */}
                    <td className="p-3 border-r border-[#E8DCC4]">
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#7B1113] block">
                          {p.durationDays} రోజులు
                        </span>
                        <span className="text-[10px] text-[#5D4037] block">
                          {formatDurationHuman(p.durationDays)}
                        </span>
                      </div>
                    </td>

                    {/* Progress Bar */}
                    <td className="p-3 border-r border-[#E8DCC4] min-w-[120px]">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-semibold text-[#5D4037]">
                          <span>{p.progressPercent}%</span>
                          <span>{Math.ceil(p.daysRemaining)}d left</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#E8DCC4] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#D84315]"
                            style={{ width: `${p.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Next Sign */}
                    <td className="p-3">
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#D84315] flex items-center gap-1">
                          <span>{p.nextRasiNameTe} రాశి</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <span className="text-[10px] text-[#5D4037] block">
                          తేదీ: {formatDateShort(p.exitDate)}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sri Prabodhananda Yogeeshwarulu Teachings Integration Note */}
      <div className="rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#FFFDF7] to-[#FAF7F0] p-5 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-[#7B1113] font-bold font-telugu-serif text-sm">
          <Info className="w-4 h-4 text-[#D84315]" />
          <span>శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరుల “జ్యోతిష్య శాస్త్రము” ఆధారిత గోచార జ్ఞానం:</span>
        </div>
        <p className="text-xs text-[#5D4037] leading-relaxed">
          సాధారణ జ్యోతిష్యులు రాశి చక్రంలో గ్రహాల మార్పులను బాహ్య భవిష్యత్తుగా చూస్తారు. కానీ నిజమైన ఆధ్యాత్మిక జ్యోతిష్య రహస్యం ప్రకారం: 
          మనిషి తలలోని <strong>కాలచక్రము (2వ చక్రము)</strong> లో 12 లగ్నాలు మరియు వాటిలో తిరిగే 12 గ్రహాలు ఉంటాయి. అవి ఫోకస్ లైట్ల వలె కిరణాలను క్రింది <strong>కర్మచక్రము (3వ చక్రము - 12 రాశులు)</strong> గుండా ప్రసరింపజేసి, సంచిత-ప్రారబ్ధ కర్మలను గుణచక్రంపై తెరపై వలె చూపిస్తాయి. గ్రహ సంచారాల వలన కలిగే శుభాశుభాలను ఆత్మజ్ఞానముతో తెలుసుకొని, కర్మల చక్రం నుండి మోక్షమును పొందడమే జ్యోతిష్య శాస్త్ర పరమావధి.
        </p>
      </div>
    </div>
  );

  // Helper renderer for each cell in the 4x4 South Indian Grid
  function renderRasiCell(house: { rasi: RasiDef; planets: CompletePlanetInfo[] }) {
    if (!house) return <div key={Math.random()} />;
    const rasi = house.rasi;
    const planetsInHouse = house.planets;
    const isRasiSelected = selectedRasiIndex === rasi.index;

    // Element styling
    let elementBadgeColor = 'bg-stone-200 text-stone-800';
    if (rasi.elementTe === 'అగ్ని') elementBadgeColor = 'bg-red-500/20 text-red-300 border-red-500/40';
    else if (rasi.elementTe === 'పృథ్వి') elementBadgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    else if (rasi.elementTe === 'వాయు') elementBadgeColor = 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    else if (rasi.elementTe === 'జల') elementBadgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

    return (
      <div
        key={rasi.index}
        onClick={() => setSelectedRasiIndex(isRasiSelected ? null : rasi.index)}
        className={`rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col justify-between border-2 transition-all duration-300 cursor-pointer overflow-hidden relative group ${
          isRasiSelected
            ? 'border-[#FFD54F] bg-[#3E0C0C] ring-2 ring-[#FFD54F]/70 shadow-lg'
            : planetsInHouse.length > 0
            ? 'border-[#D4AF37] bg-[#1E0505] hover:border-[#FFE082] hover:bg-[#2E0909]'
            : 'border-[#D4AF37]/50 bg-[#160303] hover:border-[#D4AF37]'
        }`}
      >
        {/* Cell Header: Sign Name, Zodiac Symbol, Lord */}
        <div className="flex items-start justify-between gap-1 border-b border-white/10 pb-1">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-bold text-[#FFE082] font-telugu-serif">
                {rasi.nameTe}
              </span>
              <span className="text-xs sm:text-sm text-[#FFD54F]">{rasi.symbol}</span>
            </div>
            <span className="text-[9px] text-stone-400 block leading-tight">
              {rasi.nameEn} • {rasi.lordTe}
            </span>
          </div>

          <span className={`text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded-md border font-semibold ${elementBadgeColor}`}>
            {rasi.elementTe}
          </span>
        </div>

        {/* Planets Inside This House */}
        <div className="my-1.5 space-y-1 overflow-y-auto max-h-[85px] sm:max-h-[110px] pr-0.5 custom-scrollbar">
          {planetsInHouse.length === 0 ? (
            <div className="h-full flex items-center justify-center py-2 opacity-30 text-[10px] text-stone-400 italic">
              గ్రహాలు లేవు
            </div>
          ) : (
            planetsInHouse.map(p => {
              const isPlanetSelected = selectedPlanetKey === p.key;
              return (
                <div
                  key={p.key}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanetKey(isPlanetSelected ? null : p.key);
                  }}
                  className={`p-1 sm:p-1.5 rounded-lg border text-left transition-all ${
                    isPlanetSelected
                      ? 'bg-[#FFE082] text-[#4A0012] border-white font-bold ring-1 ring-white'
                      : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  }`}
                  title={`${p.meta.nameTe} (${p.degreeFormatted}) - ${p.nakshatraNameTe} ${p.nakshatraPada}వ పాదం`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1 font-bold text-[10px] sm:text-xs">
                      <span>{p.meta.symbol}</span>
                      <span className={isPlanetSelected ? 'text-[#4A0012]' : 'text-[#FFE082]'}>
                        {p.meta.nameTe.split(' ')[0]}
                      </span>
                      {p.isRetrograde && (
                        <span className="text-[8px] text-red-400 font-extrabold">(వ)</span>
                      )}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-stone-300 font-mono">
                      {p.degreeFormatted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-stone-300 opacity-90 mt-0.5">
                    <span className="truncate max-w-[70px]">{p.nakshatraNameTe} {p.nakshatraPada}</span>
                    {p.dignity === 'exalted' && <span className="text-emerald-400 font-bold">ఉచ్ఛ</span>}
                    {p.dignity === 'own' && <span className="text-amber-300 font-bold">స్వ</span>}
                    {p.dignity === 'debilitated' && <span className="text-rose-400 font-bold">నీచ</span>}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer of cell: Planet count indicator */}
        <div className="pt-0.5 border-t border-white/5 flex items-center justify-between text-[8px] text-stone-400">
          <span>స్థానం: {rasi.index + 1}</span>
          {planetsInHouse.length > 0 && (
            <span className="text-[#FFD54F] font-bold">
              {planetsInHouse.length} {planetsInHouse.length === 1 ? 'గ్రహం' : 'గ్రహాలు'}
            </span>
          )}
        </div>
      </div>
    );
  }
};

// Helper for readable duration in Telugu
function formatDurationHuman(days: number): string {
  if (days >= 365) {
    const years = (days / 365.25).toFixed(1);
    return `సుమారు ${years} సం||లు`;
  }
  if (days >= 60) {
    const months = (days / 30.4).toFixed(1);
    return `సుమారు ${months} నెలలు`;
  }
  return `${days} రోజులు`;
}
