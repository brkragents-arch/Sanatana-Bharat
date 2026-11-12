import React, { useState } from 'react';
import { 
  SHAT_CHAKRAS_RIPU_GUNA_DATA, 
  type ShatChakraRipuRecord 
} from '../../data/jyotishyaData';
import { 
  Sparkles, Layers, ArrowUp, ArrowDown, BookOpen, 
  CheckCircle2, ShieldCheck, Eye, Compass, 
  ChevronRight
} from 'lucide-react';

interface ShatChakrasRipuViewProps {
  onBackToSections?: () => void;
}

export const ShatChakrasRipuView: React.FC<ShatChakrasRipuViewProps> = ({ onBackToSections }) => {
  const [selectedChakraId, setSelectedChakraId] = useState<string>('muladhara');
  const [viewMode, setViewMode] = useState<'interactive' | 'annotated'>('interactive');

  const selectedChakra: ShatChakraRipuRecord = 
    SHAT_CHAKRAS_RIPU_GUNA_DATA.find(c => c.id === selectedChakraId) || SHAT_CHAKRAS_RIPU_GUNA_DATA[0];

  return (
    <div className="space-y-8 text-[#2C1810]">
      {/* Breadcrumbs & Header Banner */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF3E0] p-6 sm:p-8 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/30 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7B1113]">
            {onBackToSections && (
              <>
                <button
                  type="button"
                  onClick={onBackToSections}
                  className="hover:underline flex items-center gap-1 text-[#D84315] cursor-pointer"
                >
                  <span>జ్యోతిష్య శాస్త్రము</span>
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px]">
              ఉప-పుట (Dedicated Sub-Page)
            </span>
            <span className="text-stone-600">షట్చక్రములు &amp; గుణ పరివర్తన</span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#D4AF37]/60 text-xs font-bold shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/30'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>సజీవ చక్ర దర్శిని (Interactive)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('annotated')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'annotated'
                  ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#FFE082]/30'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>మూల చిత్ర పటము (Annotated Chart)</span>
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">🧘‍♂️</span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif tracking-tight">
              షట్చక్రములు &amp; షడ్రిపు-సద్గుణ పరివర్తన రహస్యం
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5D4037] max-w-4xl leading-relaxed">
            మానవ శరీరంలో వెన్నుపాము వెంబడి ఉండే 6 చక్రాలు (సహస్రారంతో కలిపి 7 కేంద్రాలు) క్రింది నుండి పైకి (Bottom to Top) జాగృతమైనప్పుడు, 
            <strong> 6 చెడు గుణాలు (షడ్రిపులు: లోభ, కామ, క్రోధ, మోహ, మద, మాత్సర్యములు)</strong> శుద్ధి చెంది 
            <strong> 6 మంచి గుణాలుగా (సద్గుణాలు: దాన, ప్రేమ, దయ, ఔదార్య, వినయ, వైరాగ్యములు)</strong> రూపాంతరం చెందే సత్య సిద్ధాంతము.
          </p>
        </div>

        {/* Energy Flow Direction Indicator Bar */}
        <div className="p-3.5 rounded-2xl bg-[#1E0505] border-2 border-[#D4AF37] text-white space-y-2 shadow-inner">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 text-xs font-bold">
            <span className="text-[#FFE082] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FFD54F]" />
              <span>కుండలినీ ప్రాణశక్తి ప్రవాహ దిశ &amp; గుణ పరివర్తన (Energy Transmutation):</span>
            </span>
            <span className="text-[11px] text-stone-300">క్రింది నుండి పైకి (Bottom to Top)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 flex items-start gap-2">
              <ArrowDown className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-300 block text-[11px] uppercase tracking-wider">
                  అధోముఖ ప్రవాహంలో (క్రిందికి / అజ్ఞానము): 6 చెడు గుణాలు (షడ్రిపులు)
                </strong>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  లోభము ➔ కామము ➔ క్రోధము ➔ మోహము ➔ మదము ➔ మాత్సర్యము (సంసార బంధాలు)
                </p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-start gap-2">
              <ArrowUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-300 block text-[11px] uppercase tracking-wider">
                  ఊర్ధ్వముఖ ప్రవాహంలో (పైకి / సాధన): 6 మంచి గుణాలు (సద్గుణాలు)
                </strong>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  దానము ➔ ప్రేమ ➔ దయ ➔ ఔదార్యము ➔ వినయము ➔ వైరాగ్యము ➔ సహస్రార మోక్షము!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visual Display: Interactive Explorer OR Annotated Chart */}
      {viewMode === 'annotated' ? (
        <div className="p-4 sm:p-6 rounded-3xl bg-white border-2 border-[#D4AF37] shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-3 flex-wrap gap-2">
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#D84315]" />
              <span>7 చక్రముల పటము &amp; షడ్రిపు-సద్గుణ పరివర్తన సమగ్ర చిత్రము</span>
            </h3>
            <span className="text-xs text-[#5D4037] bg-[#FFF8E1] px-3 py-1 rounded-full border border-[#D4AF37]/50">
              📖 మూల గ్రంథ పటము &amp; తెలుగు వివరణ
            </span>
          </div>

          <div className="rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-inner bg-[#1A0505] flex justify-center p-2">
            <img
              src="./images/jyotishya/seven_chakras_annotated.png"
              alt="7 Chakras and 6 Ripus Transformation Chart"
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
          </div>

          <p className="text-xs text-[#5D4037] text-center italic">
            *పై చిత్రంలో ఎడమవైపు మూల 7 చక్రాల చార్ట్, కుడివైపు ప్రతి చక్రానికి సంబంధించిన చెడు గుణం ➔ మంచి గుణం పరివర్తన వివరాలు పొందుపరచబడ్డాయి.
          </p>
        </div>
      ) : (
        /* Interactive Explorer View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Silhouette with Pulsing Chakra Nodes */}
          <div className="lg:col-span-5 p-4 sm:p-5 rounded-3xl bg-[#FFFFFF] border-2 border-[#D4AF37] shadow-lg space-y-4 flex flex-col justify-between">
            <div className="border-b border-[#E8DCC4] pb-2 flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <span>🧘</span>
                <span>చక్రమును ఎంచుకోండి (Click Chakra):</span>
              </h4>
              <span className="text-[10px] text-stone-500 font-semibold">1 (అడుగున) నుండి 7 (పైకి)</span>
            </div>

            {/* Silhouette Container with Overlay Pins */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-md bg-stone-100 flex justify-center">
              <img
                src="./images/jyotishya/seven_chakras_chart.jpg"
                alt="7 Chakras Chart"
                className="w-full h-auto object-cover select-none pointer-events-none"
              />

              {/* Pulsing Interactive Click Nodes on the Silhouette */}
              {SHAT_CHAKRAS_RIPU_GUNA_DATA.map((ch) => {
                const isSelected = selectedChakraId === ch.id;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setSelectedChakraId(ch.id)}
                    style={{
                      top: `${ch.markerTopPercent}%`,
                      left: '26%' // Positioned directly over the human spine on the silhouette
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all cursor-pointer z-20 ${
                      isSelected
                        ? 'w-9 h-9 ring-4 ring-[#FFE082] shadow-2xl scale-125'
                        : 'w-6 h-6 hover:scale-110 opacity-90 ring-2 ring-white/80'
                    }`}
                    title={`${ch.nameTe} - క్లిక్ చేసి సమగ్ర వివరాలు చూడండి`}
                  >
                    <span 
                      className="w-full h-full rounded-full flex items-center justify-center text-white text-[10px] font-extrabold shadow-md"
                      style={{ backgroundColor: ch.colorHex }}
                    >
                      {ch.order}
                    </span>
                    {isSelected && (
                      <span 
                        className="absolute inset-0 rounded-full animate-ping opacity-75"
                        style={{ backgroundColor: ch.colorHex }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Chakra Buttons Strip (1 to 7 from bottom to top) */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-bold text-[#5D4037] uppercase tracking-wider block">
                చక్రాల వరుస క్రమము (Bottom to Top):
              </span>
              <div className="grid grid-cols-7 gap-1">
                {[...SHAT_CHAKRAS_RIPU_GUNA_DATA].reverse().map((ch) => {
                  const isSelected = selectedChakraId === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setSelectedChakraId(ch.id)}
                      className={`py-1.5 px-0.5 rounded-lg text-center text-xs font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? 'text-white shadow-md ring-2 ring-[#FFE082]'
                          : 'bg-white text-stone-700 hover:bg-stone-100 border-[#E8DCC4]'
                      }`}
                      style={{
                        backgroundColor: isSelected ? ch.colorHex : undefined,
                        borderColor: isSelected ? ch.colorHex : undefined
                      }}
                      title={ch.nameTe}
                    >
                      <span className="block text-[11px]">{ch.order}</span>
                      <span className="block text-[8px] truncate">{ch.id.slice(0, 4)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Active Chakra Hero Card */}
          <div className="lg:col-span-7 space-y-4">
            <div 
              className="p-5 sm:p-6 rounded-3xl bg-white border-3 shadow-xl space-y-4 transition-all duration-300"
              style={{ borderColor: selectedChakra.colorHex }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[#E8DCC4] pb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0"
                    style={{ backgroundColor: selectedChakra.colorHex }}
                  >
                    {selectedChakra.order}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                        {selectedChakra.nameTe}
                      </h3>
                      <span className="text-xs text-stone-500 font-semibold">({selectedChakra.sanskritName})</span>
                      <span 
                        className="text-[10px] px-2 py-0.5 rounded-full text-white font-bold"
                        style={{ backgroundColor: selectedChakra.colorHex }}
                      >
                        {selectedChakra.elementTe}
                      </span>
                    </div>
                    <p className="text-xs text-[#5D4037]">{selectedChakra.locationTe}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="block text-[10px] text-stone-500">బీజాక్షరం / దళాలు</span>
                  <strong className="text-xs text-[#7B1113] block font-mono">
                    {selectedChakra.seedMantra} • {selectedChakra.petalsCount} దళాలు
                  </strong>
                </div>
              </div>

              {/* Bad Guna (Ripu) vs Good Guna (Sadguna) Transmutation Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Bad Guna Card */}
                <div className="p-4 rounded-2xl bg-rose-50/80 border-2 border-rose-200 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider">
                    <ArrowDown className="w-4 h-4 text-rose-600" />
                    <span>క్రింది స్థితి (అధోముఖం): చెడు గుణము</span>
                  </div>
                  <strong className="text-sm sm:text-base text-rose-950 block font-telugu-serif">
                    {selectedChakra.badGunaTe}
                  </strong>
                  <span className="text-[11px] text-rose-800 font-semibold block">
                    ({selectedChakra.badGunaEn})
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedChakra.badGunaDescTe}
                  </p>
                </div>

                {/* Good Guna Card */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <ArrowUp className="w-4 h-4 text-emerald-600" />
                    <span>జాగరణ స్థితి (ఊర్ధ్వముఖం): మంచి గుణము</span>
                  </div>
                  <strong className="text-sm sm:text-base text-emerald-950 block font-telugu-serif">
                    {selectedChakra.goodGunaTe}
                  </strong>
                  <span className="text-[11px] text-emerald-800 font-semibold block">
                    ({selectedChakra.goodGunaEn})
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedChakra.goodGunaDescTe}
                  </p>
                </div>
              </div>

              {/* Transformation Mechanism */}
              <div className="p-3.5 rounded-2xl bg-[#FFF8E1] border border-[#D4AF37] space-y-1 text-xs">
                <span className="font-bold text-[#7B1113] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  <span>గుణ పరివర్తన ప్రక్రియ (Transmutation Mechanism):</span>
                </span>
                <p className="text-[#2C1810] leading-relaxed">
                  {selectedChakra.transformationTe}
                </p>
              </div>

              {/* Spiritual & Psychological Results */}
              <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#E8DCC4] space-y-1 text-xs">
                <span className="font-bold text-[#059669] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>చక్రోత్తేజన సాధనా ఫలితము (Spiritual &amp; Life Results):</span>
                </span>
                <p className="text-[#2C1810] leading-relaxed">
                  {selectedChakra.spiritualResultTe}
                </p>
              </div>

              {/* Deity & Details Footer */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 border-t border-[#E8DCC4] pt-2">
                <span>అధిష్టాన దైవం: <strong>{selectedChakra.deityTe}</strong></span>
                <span>వర్ణము: <strong>{selectedChakra.colorTe}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Complete Sequence: All 7 Chakras Deep Dive Cards */}
      <div className="space-y-4">
        <div className="border-b-2 border-[#D4AF37]/40 pb-3 flex items-center justify-between flex-wrap gap-2">
          <div className="space-y-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D84315]" />
              <span>షట్చక్రముల ఆరోహణ క్రమం (క్రింది నుండి పైకి - 1 నుండి 7 వరకు)</span>
            </h3>
            <p className="text-xs text-[#5D4037]">
              వెన్నెముక మూలమైన మూలాధారము నుండి శిరస్సు పైభాగమైన సహస్రారము వరకు గల 7 చక్రాల సమగ్ర విశ్లేషణ.
            </p>
          </div>
          <span className="text-xs text-[#7B1113] font-bold bg-[#FFF8E1] px-3 py-1 rounded-full border border-[#D4AF37]">
            7 దివ్య కేంద్రములు
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHAT_CHAKRAS_RIPU_GUNA_DATA.map((ch) => (
            <div
              key={ch.id}
              onClick={() => {
                setSelectedChakraId(ch.id);
                setViewMode('interactive');
              }}
              className="p-5 rounded-2xl bg-white border-2 hover:shadow-lg transition-all cursor-pointer space-y-3 flex flex-col justify-between group"
              style={{ borderColor: `${ch.colorHex}60` }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-[#E8DCC4] pb-2">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: ch.colorHex }}
                    >
                      {ch.order}
                    </span>
                    <div>
                      <strong className="text-sm text-[#7B1113] font-telugu-serif block leading-tight">
                        {ch.nameTe}
                      </strong>
                      <span className="text-[10px] text-stone-500">{ch.nameEn}</span>
                    </div>
                  </div>
                  <span 
                    className="text-[9px] px-2 py-0.5 rounded-full text-white font-bold"
                    style={{ backgroundColor: ch.colorHex }}
                  >
                    {ch.elementTe.split(' ')[0]}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-200">
                    <span className="text-[10px] font-bold text-rose-800 block">క్రింది గుణం (షడ్రిపు):</span>
                    <strong className="text-rose-950 text-xs">{ch.badGunaTe}</strong>
                  </div>

                  <div className="flex justify-center text-[#D84315] text-xs font-bold">
                    ⬇️ పరివర్తన ⬆️
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-800 block">పై గుణం (సద్గుణం):</span>
                    <strong className="text-emerald-950 text-xs">{ch.goodGunaTe}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8DCC4] flex items-center justify-between text-[11px] text-[#5D4037]">
                <span>మంత్రం: <strong>{ch.seedMantra}</strong></span>
                <span className="text-[#D84315] font-semibold group-hover:underline">వివరాలు ➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Summary Table */}
      <div className="space-y-3 rounded-3xl bg-white p-5 sm:p-7 border-2 border-[#D4AF37] shadow-lg">
        <div className="border-b border-[#E8DCC4] pb-3 flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-base sm:text-xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#D84315]" />
            <span>షట్చక్రములు &amp; గుణ పరివర్తన సమగ్ర తులనాత్మక పట్టిక</span>
          </h3>
          <span className="text-xs text-[#5D4037] bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#E8DCC4]">
            సర్వ చక్రాల సమగ్ర దర్శనం
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border-2 border-[#D4AF37] shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] text-[11px] sm:text-xs font-telugu-serif">
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 text-center w-12">క్రమం</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">చక్రము &amp; స్థానము</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">తత్త్వము &amp; రంగు</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 text-rose-300">క్రింది గుణం (షడ్రిపు)</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30 text-emerald-300">పై గుణం (సద్గుణం)</th>
                <th className="p-3 font-bold border-r border-[#D4AF37]/30">పరివర్తన విధానం</th>
                <th className="p-3 font-bold">సాధనా ఫలితము</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DCC4]">
              {SHAT_CHAKRAS_RIPU_GUNA_DATA.map((ch, idx) => (
                <tr key={ch.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F0]'}>
                  <td className="p-3 font-bold text-center border-r border-[#E8DCC4]">
                    <span 
                      className="w-6 h-6 rounded-full inline-flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ backgroundColor: ch.colorHex }}
                    >
                      {ch.order}
                    </span>
                  </td>

                  <td className="p-3 border-r border-[#E8DCC4]">
                    <strong className="text-[#7B1113] block font-telugu-serif text-xs sm:text-sm">
                      {ch.nameTe}
                    </strong>
                    <span className="text-[10px] text-stone-500 block">{ch.locationTe}</span>
                  </td>

                  <td className="p-3 border-r border-[#E8DCC4]">
                    <strong className="text-[#2C1810] block text-xs">{ch.elementTe}</strong>
                    <span className="text-[10px] text-stone-500">{ch.colorTe}</span>
                  </td>

                  <td className="p-3 border-r border-[#E8DCC4] bg-rose-50/50">
                    <strong className="text-rose-900 block text-xs">{ch.badGunaTe}</strong>
                    <span className="text-[10px] text-rose-700">{ch.badGunaEn}</span>
                  </td>

                  <td className="p-3 border-r border-[#E8DCC4] bg-emerald-50/50">
                    <strong className="text-emerald-900 block text-xs">{ch.goodGunaTe}</strong>
                    <span className="text-[10px] text-emerald-700">{ch.goodGunaEn}</span>
                  </td>

                  <td className="p-3 border-r border-[#E8DCC4] text-[#5D4037] text-[11px] leading-relaxed max-w-xs">
                    {ch.transformationTe}
                  </td>

                  <td className="p-3 text-[#2C1810] text-[11px] leading-relaxed max-w-xs font-medium">
                    {ch.spiritualResultTe}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Spiritual Integration Note (Sri Prabodhananda Yogeeshwarulu Teachings) */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFFDF7] to-[#FAF7F0] p-6 space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-[#7B1113] font-bold font-telugu-serif text-base">
          <ShieldCheck className="w-5 h-5 text-[#059669]" />
          <span>శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరుల “జ్యోతిష్య శాస్త్రము” &amp; కర్మ రహస్య సమన్వయం:</span>
        </div>
        <div className="space-y-2 text-xs sm:text-sm text-[#5D4037] leading-relaxed">
          <p>
            శరీరంలోని ఈ 6 చక్రాలు ప్రాణశక్తి యొక్క ఆరోహణ-అవరోహణ మార్గాలు కాగా, మనిషి తలలోని <strong>కాలచక్రము (2వ చక్రము)</strong> లో తిరిగే 12 గ్రహాల ఫోకస్ లైట్లు కర్మచక్రం (12 రాశులు) గుండా ప్రసరించి, క్రింది <strong>గుణచక్రము (4వ చక్రము)</strong> పై పడినప్పుడు—ఈ 6 చెడు గుణాలు × 9 పరిమాణాలు = 54 పాప గుణాలుగా, 6 మంచి గుణాలు × 9 పరిమాణాలు = 54 పుణ్య గుణాలుగా విస్తరిస్తాయి.
          </p>
          <p>
            సాధకుడు యోగ సాధన ద్వారా వెన్నెముకలోని షట్చక్ర భేదనము చేసి సహస్రారమును చేరినప్పుడు, తలలోని గుణచక్రం (324 కర్మల చక్రం) నుండి కూడా విముక్తుడై మధ్యలో ఉన్న <strong>&quot;ఆత్మ భాగము (బ్రహ్మయోగ స్థానము)&quot;</strong> లో ప్రవేశిస్తాడు. అక్కడ ఏ కర్మలూ ఉండవు; అదే భగవద్గీతలో చెప్పబడిన సర్వ కర్మ సంన్యాసము, జీవన్ముక్తి (మోక్షము)!
          </p>
        </div>
      </div>
    </div>
  );
};
