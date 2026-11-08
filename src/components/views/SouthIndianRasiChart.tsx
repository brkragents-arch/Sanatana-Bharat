import React, { useState, useMemo } from 'react';
import { 
  Calendar, Clock, RefreshCw, ArrowRight, Info, Layers,
  CheckCircle2, AlertCircle, Sparkles, ChevronDown, ChevronUp
} from 'lucide-react';
import { 
  calculateAllPlanets 
} from '../../utils/planetaryEngine';
import type { 
  PlanetKey, 
  CompletePlanetInfo, 
  RasiDef 
} from '../../utils/planetaryEngine';
import {
  calculateAllRasiPhalalu,
  type RasiPrediction
} from '../../utils/rasiPhalaluEngine';

export interface SouthIndianRasiChartProps {
  initialDate?: Date;
}

export const SouthIndianRasiChart: React.FC<SouthIndianRasiChartProps> = ({ 
  initialDate
}) => {
  // Current selected date state
  const [selectedDate, setSelectedDate] = useState<Date>(() => initialDate || new Date());
  const [selectedPlanetKey, setSelectedPlanetKey] = useState<PlanetKey | null>(null);
  const [selectedRasiIndex, setSelectedRasiIndex] = useState<number | null>(null);
  const [expandedPlanetKey, setExpandedPlanetKey] = useState<PlanetKey | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'slow' | 'fast'>('all');
  const [chartSize, setChartSize] = useState<'fit' | 'medium' | 'large'>('fit');
  const [predictionMode, setPredictionMode] = useState<'weekly' | 'daily'>('weekly');

  // Compute all astronomical planetary data and transitions for selected date
  const astroData = useMemo(() => {
    return calculateAllPlanets(selectedDate);
  }, [selectedDate]);

  // Selected week range (Monday - Sunday) for selected date
  const selectedWeekInfo = useMemo(() => {
    const d = new Date(selectedDate);
    const day = d.getDay(); // 0 is Sunday, 1 is Monday...
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const start = new Date(d);
    start.setDate(d.getDate() + diffToMonday);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    const sStr = start.toLocaleDateString('te-IN', { day: 'numeric', month: 'short' });
    const eStr = end.toLocaleDateString('te-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    return {
      start,
      end,
      labelTe: `${sStr} – ${eStr}`
    };
  }, [selectedDate]);

  // Combined planetary Rasi Phalalu for all 12 signs based on real-time planetary positions
  const rasiPredictions = useMemo(() => {
    return calculateAllRasiPhalalu(astroData.planets);
  }, [astroData.planets]);

  // 6 Rasis on the Left (మేషం - కన్య) and 6 on the Right (తుల - మీనం)
  const leftRasiPredictions = useMemo(() => rasiPredictions.slice(0, 6), [rasiPredictions]);
  const rightRasiPredictions = useMemo(() => rasiPredictions.slice(6, 12), [rasiPredictions]);

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

  const handleStepWeeks = (weeks: number) => {
    const next = new Date(selectedDate.getTime() + weeks * 7 * 86400000);
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

  // Renderer for each Rasi prediction box on the side panels
  const renderRasiPhalaluCard = (pred: RasiPrediction) => {
    const isSelected = selectedRasiIndex === pred.rasi.index;

    return (
      <div
        key={pred.rasi.index}
        id={`rasi-card-${pred.rasi.index}`}
        onClick={() => {
          setSelectedRasiIndex(isSelected ? null : pred.rasi.index);
        }}
        className={`rounded-xl border transition-all duration-200 cursor-pointer p-2 space-y-1.5 text-left select-none ${
          isSelected
            ? 'bg-[#FFF9C4] border-[#D84315] ring-2 ring-[#FFB300] shadow-md'
            : 'bg-white hover:bg-[#FFFDF7] border-[#E8DCC4] hover:border-[#D4AF37] shadow-2xs'
        }`}
      >
        {/* Card Header: Rasi name, symbol, lord & status badge */}
        <div className="flex items-center justify-between border-b border-[#E8DCC4]/80 pb-1">
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg">{pred.rasi.symbol}</span>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                  {pred.rasi.nameTe}
                </span>
                <span className="text-[10px] text-stone-500 font-sans">
                  ({pred.rasi.nameEn})
                </span>
              </div>
              <span className="text-[9px] text-stone-500 block leading-tight">
                అధిపతి: {pred.rasi.lordTe} • {pred.rasi.elementTe}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span
              className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold border inline-block whitespace-nowrap ${
                pred.favorabilityScore >= 80
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : pred.favorabilityScore >= 65
                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                  : pred.favorabilityScore >= 52
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-rose-50 text-rose-800 border-rose-300'
              }`}
            >
              {pred.statusBadgeTe} ({pred.favorabilityScore}%)
            </span>
          </div>
        </div>

        {/* 1. Positive (శుభ ఫలితాలు) */}
        <div className="p-1.5 rounded-lg bg-emerald-50/90 border border-emerald-200/80 text-[10px] leading-tight space-y-0.5">
          <div className="font-bold text-emerald-800 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>శుభ ఫలితాలు (Positive)</span>
          </div>
          <p className="text-emerald-950 font-medium pl-4 leading-snug">
            {pred.positiveTe}
          </p>
        </div>

        {/* 2. Precaution (జాగ్రత్తలు) */}
        <div className="p-1.5 rounded-lg bg-amber-50/90 border border-amber-200/80 text-[10px] leading-tight space-y-0.5">
          <div className="font-bold text-amber-800 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
            <span>జాగ్రత్తలు (Precaution)</span>
          </div>
          <p className="text-amber-950 font-medium pl-4 leading-snug">
            {pred.precautionTe}
          </p>
        </div>

        {/* 3. Remedies (పరిహారాలు) */}
        <div className="p-1.5 rounded-lg bg-purple-50/90 border border-purple-200/80 text-[10px] leading-tight space-y-0.5">
          <div className="font-bold text-purple-800 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-600 shrink-0" />
            <span>పరిహారము (Remedies)</span>
          </div>
          <p className="text-purple-950 font-medium pl-4 leading-snug">
            {pred.remedyTe}
          </p>
        </div>
      </div>
    );
  };

  // Shared inner chart content
  const chartBody = (
    <div className="space-y-6">
      {/* Date Selector & Step Controls */}
      <div className="rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF3E0] p-4 sm:p-5 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Date Picker Input & Selected Week Banner */}
          <div className="md:col-span-5 flex items-center gap-2.5 bg-white p-2.5 rounded-2xl border border-[#D4AF37]/50 shadow-xs">
            <Calendar className="w-5 h-5 text-[#D84315] shrink-0 ml-1" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold text-[#7B1113] uppercase tracking-wider">
                గోచార తేది &amp; వారం ఎంపిక (Date &amp; Week):
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
              <span className="text-[10.5px] text-[#D84315] font-bold block mt-0.5 truncate">
                📅 వారం: {selectedWeekInfo.labelTe}
              </span>
            </div>
            <div className="text-right shrink-0 border-l border-[#E8DCC4] pl-2.5">
              <span className="block text-[10px] text-[#5D4037]">లాహిరి అయనాంశ</span>
              <span className="text-xs font-bold text-[#D84315]">
                {astroData.ayanamsha.toFixed(2)}°
              </span>
            </div>
          </div>

          {/* Quick Step Buttons & Mode Toggle */}
          <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 justify-start md:justify-end text-xs">
            {/* View Mode Toggle: Weekly vs Daily */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#D4AF37]/50 mr-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setPredictionMode('weekly')}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  predictionMode === 'weekly'
                    ? 'bg-[#7B1113] text-[#FFE082]'
                    : 'text-[#5D4037] hover:bg-[#FFE082]/30'
                }`}
                title="ఎంపిక చేసిన వారం యొక్క సంయుక్త గ్రహ గోచార ఫలాలు"
              >
                📅 వార ఫలాలు
              </button>
              <button
                type="button"
                onClick={() => setPredictionMode('daily')}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  predictionMode === 'daily'
                    ? 'bg-[#7B1113] text-[#FFE082]'
                    : 'text-[#5D4037] hover:bg-[#FFE082]/30'
                }`}
                title="ఎంపిక చేసిన రోజు యొక్క దిన ఫలాలు"
              >
                ☀️ దిన ఫలాలు
              </button>
            </div>

            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5 hidden sm:block" />

            {/* Week Steppers */}
            <button
              onClick={() => handleStepWeeks(-1)}
              className="px-2 py-1.5 rounded-lg bg-[#FFF8E1] hover:bg-[#FFE082]/50 border border-[#D4AF37] text-[#7B1113] font-bold cursor-pointer transition-colors shadow-2xs text-[11px]"
              title="1 వారం వెనక్కి"
            >
              -1 వారం
            </button>
            <button
              onClick={() => handleStepWeeks(1)}
              className="px-2 py-1.5 rounded-lg bg-[#FFF8E1] hover:bg-[#FFE082]/50 border border-[#D4AF37] text-[#7B1113] font-bold cursor-pointer transition-colors shadow-2xs text-[11px]"
              title="1 వారం ముందుకు"
            >
              +1 వారం
            </button>

            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5" />
            
            {/* Day Steppers */}
            <button
              onClick={() => handleStepDays(-1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 రోజు వెనక్కి"
            >
              -1 రోజు
            </button>
            <button
              onClick={() => handleStepDays(1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 రోజు ముందుకు"
            >
              +1 రోజు
            </button>
            
            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5" />

            <button
              onClick={() => handleStepMonths(-1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 నెల వెనక్కి"
            >
              -1 నెల
            </button>
            <button
              onClick={() => handleStepMonths(1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 నెల ముందుకు"
            >
              +1 నెల
            </button>

            <div className="h-4 w-px bg-[#D4AF37]/40 mx-0.5" />

            <button
              onClick={() => handleStepYears(-1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 సంవత్సరం వెనక్కి"
            >
              -1 సం||
            </button>
            <button
              onClick={() => handleStepYears(1)}
              className="px-2 py-1.5 rounded-lg bg-white hover:bg-[#FFE082]/30 border border-[#D4AF37]/40 text-[#4A0012] font-semibold cursor-pointer transition-colors text-[11px]"
              title="1 సంవత్సరం ముందుకు"
            >
              +1 సం||
            </button>

            <button
              onClick={handleResetToday}
              className="px-2.5 py-1.5 rounded-lg bg-[#7B1113] hover:bg-[#8B1E0F] text-[#FFE082] font-semibold cursor-pointer transition-colors flex items-center gap-1 shadow-xs ml-0.5 text-[11px]"
              title="నేటి తేదికి రండి"
            >
              <RefreshCw className="w-3 h-3" />
              <span>నేడు</span>
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
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 bg-[#FFF8E1]/60 p-2.5 rounded-2xl border border-[#D4AF37]/40">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                దక్షిణ భారత జాతక చక్రం (12 స్థిర రాశులు &amp; ప్రత్యక్ష గ్రహ సంచారం)
              </h4>
              <span className="text-[10px] text-[#5D4037] block leading-tight">
                *ఏదైనా రాశి లేదా గ్రహంపై క్లిక్ చేసి సమగ్ర వివరాలు వీక్షించవచ్చు
              </span>
            </div>
          </div>

          {/* Size Preset Toggle */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#D4AF37]/60 text-[10px] sm:text-xs font-bold self-end sm:self-auto">
            <span className="text-[#5D4037] px-1 hidden md:inline">పరిమాణం:</span>
            <button
              type="button"
              onClick={() => setChartSize('fit')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                chartSize === 'fit'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/30'
              }`}
              title="ఒకే స్క్రీన్‌పై మొత్తం చక్రం కనిపించేలా అమరిక (Fit to Screen)"
            >
              🖥️ స్క్రీన్‌కు సరిపడేలా (Fit)
            </button>
            <button
              type="button"
              onClick={() => setChartSize('medium')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                chartSize === 'medium'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/30'
              }`}
              title="మధ్యస్థ పరిమాణం (Medium)"
            >
              🔍 మధ్యస్థం
            </button>
            <button
              type="button"
              onClick={() => setChartSize('large')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                chartSize === 'large'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/30'
              }`}
              title="పెద్ద పరిమాణం (Expanded Large)"
            >
              🔎 పెద్దది
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3-COLUMN BALANCED LAYOUT: LEFT RASIS (1-6) | RASI TABLE (EXACT UNTOUCHED SIZE) | RIGHT RASIS (7-12) */}
        {/* ========================================================================= */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-3.5 w-full">
          {/* LEFT COLUMN: 6 Rasi Phalalu Boxes (1. మేషం నుండి 6. కన్య వరకు) */}
          <div className="w-full xl:w-[285px] 2xl:w-[325px] shrink-0 flex flex-col space-y-2 max-h-[550px] overflow-y-auto pr-1.5 custom-scrollbar order-2 xl:order-1">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-2.5 py-1.5 rounded-xl border border-[#D4AF37]/60 shadow-xs flex items-center justify-between">
              <span className="text-[11px] font-bold font-telugu-serif flex items-center gap-1">
                <span>♈ 1. మేషం – ♍ 6. కన్య</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#FFE082]/20 rounded-md text-amber-200 font-mono font-bold">
                {predictionMode === 'weekly' ? 'వార ఫలాలు' : 'దిన ఫలాలు'}
              </span>
            </div>

            {leftRasiPredictions.map(pred => renderRasiPhalaluCard(pred))}
          </div>

          {/* CENTER COLUMN: The 4x4 Grid Container (EXACT UNCHANGED SIZE!) */}
          <div className={`w-full shrink-0 transition-all duration-300 mx-auto order-1 xl:order-2 ${
            chartSize === 'fit' ? 'max-w-[500px] sm:max-w-[550px]' : chartSize === 'medium' ? 'max-w-[660px]' : 'max-w-4xl'
          }`}>
            <div className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-[#2A0808] border-2 sm:border-3 border-[#D4AF37] shadow-xl w-full">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 sm:gap-1.5 aspect-square w-full">
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
                <div className={`col-span-2 row-span-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#1F0707] via-[#2A0808] to-[#140303] border-1.5 sm:border-2 border-[#D4AF37] flex flex-col justify-between items-center text-center shadow-inner relative overflow-hidden ${
                  chartSize === 'fit' ? 'p-2 sm:p-2.5' : 'p-3 sm:p-5'
                }`}>
                  {/* Background watermark */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <span className="text-7xl sm:text-9xl text-[#FFE082]">🕉️</span>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1 relative z-10 w-full">
                    <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#FFE082] border border-[#D4AF37]/50 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider inline-block">
                      దక్షిణ భారత రాశి చక్రం
                    </span>
                    <h5 className="text-xs sm:text-base font-bold text-[#FFE082] font-telugu-serif">
                      గోచార గ్రహ స్థితి
                    </h5>
                    <p className="text-[10px] sm:text-xs text-[#FFD54F] font-semibold">
                      {formatDateTe(selectedDate)}
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-stone-300">
                      {formatDateShort(selectedDate)} • లాహిరి నిరయన
                    </p>
                  </div>

                  {/* Center Quick Stats */}
                  <div className="grid grid-cols-2 gap-1 w-full my-1 relative z-10">
                    <div className="p-1 rounded-lg bg-white/5 border border-[#D4AF37]/30 text-left">
                      <span className="block text-[8px] text-stone-300">గ్రహాలు</span>
                      <span className="text-[10px] sm:text-xs font-bold text-[#FFE082]">9 నవగ్రహాలు</span>
                    </div>
                    <div className="p-1 rounded-lg bg-white/5 border border-[#D4AF37]/30 text-left">
                      <span className="block text-[8px] text-stone-300">వక్రించినవి</span>
                      <span className="text-[10px] sm:text-xs font-bold text-[#F87171]">
                        {astroData.planets.filter(p => p.isRetrograde && p.key !== 'rahu' && p.key !== 'ketu').length} (వ)
                      </span>
                    </div>
                  </div>

                  {/* Reset Button in Center */}
                  <button
                    onClick={handleResetToday}
                    className="relative z-10 px-2 py-0.5 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/60 text-[#FFE082] text-[9px] sm:text-[10px] font-semibold cursor-pointer transition-colors flex items-center gap-1"
                    title="నేటి తేదికి రండి"
                  >
                    <Clock className="w-2.5 h-2.5 text-[#FFD54F]" />
                    <span>నేడు (Today)</span>
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

          {/* RIGHT COLUMN: 6 Rasi Phalalu Boxes (7. తుల నుండి 12. మీనం వరకు) */}
          <div className="w-full xl:w-[285px] 2xl:w-[325px] shrink-0 flex flex-col space-y-2 max-h-[550px] overflow-y-auto pl-1.5 custom-scrollbar order-3">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-2.5 py-1.5 rounded-xl border border-[#D4AF37]/60 shadow-xs flex items-center justify-between">
              <span className="text-[11px] font-bold font-telugu-serif flex items-center gap-1">
                <span>♎ 7. తుల – ♓ 12. మీనం</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#FFE082]/20 rounded-md text-amber-200 font-mono font-bold">
                {predictionMode === 'weekly' ? 'వార ఫలాలు' : 'దిన ఫలాలు'}
              </span>
            </div>

            {rightRasiPredictions.map(pred => renderRasiPhalaluCard(pred))}
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

          {/* Detailed Effect of Planet in Current Rasi */}
          <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 space-y-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
              <h5 className="text-sm font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <span>✨</span>
                <span>{activePlanet.rasiNameTe} రాశిలో {activePlanet.meta.nameTe} గోచార ప్రభావము &amp; ఫలితాలు:</span>
              </h5>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold">
                {activePlanet.dignityLabelTe}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
              {activePlanet.effect.detailedTe}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
              {/* Positive */}
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
                <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>శుభ ఫలితాలు (Positive Gains)</span>
                </span>
                <p className="text-emerald-950 text-[11px] leading-relaxed">
                  {activePlanet.effect.positiveTe}
                </p>
              </div>

              {/* Challenges / Precautions */}
              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                <span className="font-bold text-amber-800 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>జాగ్రత్తలు (Precautions)</span>
                </span>
                <p className="text-amber-950 text-[11px] leading-relaxed">
                  {activePlanet.effect.challengesTe}
                </p>
              </div>

              {/* Remedy */}
              <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 space-y-1">
                <span className="font-bold text-purple-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>ఆధ్యాత్మిక పరిహారము / వేదాంత సాధన</span>
                </span>
                <p className="text-purple-950 text-[11px] leading-relaxed">
                  {activePlanet.effect.remedyTe}
                </p>
              </div>
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
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 min-w-[240px]">
                  ఈ రాశిలో సంచార ప్రభావము (Transit Effect)
                </th>
                <th className="p-3 font-bold">తదుపరి రాశి (Next Transition)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DCC4]">
              {displayedPlanets.map((p) => {
                const isSelected = selectedPlanetKey === p.key;
                const isExpanded = expandedPlanetKey === p.key;
                return (
                  <React.Fragment key={p.key}>
                    <tr
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

                      {/* Transit Effect in this Rasi Column */}
                      <td className="p-3 border-r border-[#E8DCC4] min-w-[240px]">
                        <div className="space-y-1.5">
                          <p className="text-[11px] font-semibold text-[#2C1810] leading-snug line-clamp-2">
                            {p.effect.summaryTe}
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedPlanetKey(isExpanded ? null : p.key);
                            }}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#D84315] hover:text-[#7B1113] bg-[#FFF8E1] hover:bg-[#FFE082]/40 px-2 py-0.5 rounded-md border border-[#D4AF37]/50 transition-colors cursor-pointer"
                          >
                            <span>{isExpanded ? 'వివరాలు దాచు' : 'సమగ్ర ఫలితాలు & పరిహారము'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>
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

                    {/* Expandable Inline Transit Effect Drawer */}
                    {isExpanded && (
                      <tr className="bg-[#FFFDF7] border-b-2 border-[#D4AF37]">
                        <td colSpan={9} className="p-4 sm:p-5">
                          <div className="rounded-2xl border-2 border-[#D4AF37]/60 bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF3E0] p-4 sm:p-5 space-y-3 shadow-inner">
                            <div className="flex flex-wrap items-center justify-between border-b border-[#E8DCC4] pb-2.5 gap-2">
                              <h5 className="font-bold text-[#7B1113] text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                                <span className="text-xl">{p.meta.symbol}</span>
                                <span>{p.rasiNameTe} రాశిలో {p.meta.nameTe} సమగ్ర సంచార ఫలితాలు &amp; ప్రభావ విశ్లేషణ</span>
                              </h5>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold">
                                  {p.dignityLabelTe}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setExpandedPlanetKey(null)}
                                  className="text-[11px] text-[#7B1113] font-semibold hover:underline cursor-pointer"
                                >
                                  ✕ తగ్గించు
                                </button>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
                              {p.effect.detailedTe}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
                              {/* Positive Gains */}
                              <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-300 space-y-1">
                                <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  <span>శుభ ఫలితాలు (Positive Influences)</span>
                                </span>
                                <p className="text-emerald-950 text-[11px] leading-relaxed">
                                  {p.effect.positiveTe}
                                </p>
                              </div>

                              {/* Precautions */}
                              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-300 space-y-1">
                                <span className="font-bold text-amber-800 flex items-center gap-1.5">
                                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                                  <span>అశుభాలు &amp; జాగ్రత్తలు (Precautions)</span>
                                </span>
                                <p className="text-amber-950 text-[11px] leading-relaxed">
                                  {p.effect.challengesTe}
                                </p>
                              </div>

                              {/* Spiritual Remedy */}
                              <div className="p-3 rounded-xl bg-purple-50/90 border border-purple-300 space-y-1">
                                <span className="font-bold text-purple-800 flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                                  <span>ఆధ్యాత్మిక పరిహారము &amp; వేదాంత సాధన</span>
                                </span>
                                <p className="text-purple-950 text-[11px] leading-relaxed">
                                  {p.effect.remedyTe}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
      </div>

      {chartBody}
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
        onClick={() => {
          const nextIndex = isRasiSelected ? null : rasi.index;
          setSelectedRasiIndex(nextIndex);
          if (nextIndex !== null) {
            const el = document.getElementById(`rasi-card-${nextIndex}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }}
        className={`rounded-xl sm:rounded-2xl flex flex-col justify-between border-1.5 sm:border-2 transition-all duration-300 cursor-pointer overflow-hidden relative group ${
          chartSize === 'fit' ? 'p-1 sm:p-1.5' : 'p-2 sm:p-2.5'
        } ${
          isRasiSelected
            ? 'border-[#FFD54F] bg-[#3E0C0C] ring-2 ring-[#FFD54F]/70 shadow-lg'
            : planetsInHouse.length > 0
            ? 'border-[#D4AF37] bg-[#1E0505] hover:border-[#FFE082] hover:bg-[#2E0909]'
            : 'border-[#D4AF37]/50 bg-[#160303] hover:border-[#D4AF37]'
        }`}
      >
        {/* Cell Header: Sign Name, Zodiac Symbol, Lord */}
        <div className="flex items-start justify-between gap-0.5 border-b border-white/10 pb-0.5 sm:pb-1">
          <div>
            <div className="flex items-center gap-1">
              <span className={`font-bold text-[#FFE082] font-telugu-serif ${
                chartSize === 'fit' ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'
              }`}>
                {rasi.nameTe}
              </span>
              <span className={`text-[#FFD54F] ${
                chartSize === 'fit' ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'
              }`}>
                {rasi.symbol}
              </span>
            </div>
            <span className={`text-stone-400 block leading-tight ${
              chartSize === 'fit' ? 'text-[7.5px] sm:text-[8.5px]' : 'text-[9px]'
            }`}>
              {rasi.nameEn} • {rasi.lordTe}
            </span>
          </div>

          <span className={`rounded-md border font-semibold ${elementBadgeColor} ${
            chartSize === 'fit' ? 'text-[7px] sm:text-[8px] px-1 py-0' : 'text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5'
          }`}>
            {rasi.elementTe}
          </span>
        </div>

        {/* Planets Inside This House */}
        <div className={`my-0.5 sm:my-1 space-y-0.5 sm:space-y-1 overflow-y-auto pr-0.5 custom-scrollbar ${
          chartSize === 'fit' ? 'max-h-[50px] sm:max-h-[64px]' : 'max-h-[85px] sm:max-h-[110px]'
        }`}>
          {planetsInHouse.length === 0 ? (
            <div className={`h-full flex items-center justify-center py-1 opacity-30 text-stone-400 italic ${
              chartSize === 'fit' ? 'text-[8px] sm:text-[9px]' : 'text-[10px]'
            }`}>
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
                  className={`rounded-md sm:rounded-lg border text-left transition-all ${
                    chartSize === 'fit' ? 'p-0.5 sm:p-1' : 'p-1 sm:p-1.5'
                  } ${
                    isPlanetSelected
                      ? 'bg-[#FFE082] text-[#4A0012] border-white font-bold ring-1 ring-white'
                      : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  }`}
                  title={`${p.meta.nameTe} (${p.degreeFormatted}) - ${p.nakshatraNameTe} ${p.nakshatraPada}వ పాదం`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className={`flex items-center gap-0.5 sm:gap-1 font-bold ${
                      chartSize === 'fit' ? 'text-[8.5px] sm:text-[10px]' : 'text-[10px] sm:text-xs'
                    }`}>
                      <span>{p.meta.symbol}</span>
                      <span className={isPlanetSelected ? 'text-[#4A0012]' : 'text-[#FFE082]'}>
                        {p.meta.nameTe.split(' ')[0]}
                      </span>
                      {p.isRetrograde && (
                        <span className="text-[7px] sm:text-[8px] text-red-400 font-extrabold">(వ)</span>
                      )}
                    </span>
                    <span className={`text-stone-300 font-mono ${
                      chartSize === 'fit' ? 'text-[7.5px] sm:text-[8.5px]' : 'text-[9px] sm:text-[10px]'
                    }`}>
                      {p.degreeFormatted}
                    </span>
                  </div>

                  <div className={`flex items-center justify-between text-stone-300 opacity-90 ${
                    chartSize === 'fit' ? 'text-[7px] sm:text-[8px] mt-0' : 'text-[8px] sm:text-[9px] mt-0.5'
                  }`}>
                    <span className="truncate max-w-[60px] sm:max-w-[75px]">{p.nakshatraNameTe} {p.nakshatraPada}</span>
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
        <div className={`pt-0.5 border-t border-white/5 flex items-center justify-between text-stone-400 ${
          chartSize === 'fit' ? 'text-[7px] sm:text-[8px]' : 'text-[8px]'
        }`}>
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
