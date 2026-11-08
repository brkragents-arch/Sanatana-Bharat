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

  const [selectedTopic, setSelectedTopic] = useState<'rigveda' | 'ramayana' | 'mahabharata' | 'sciences' | null>(null);

  const imageSrc = './images/indian_history/timeline_of_hindu_civilization.jpg';

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

  return (
    <div className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DC]/50 rounded-2xl border-2 border-[#D4AF37] shadow-sm p-4 sm:p-5 space-y-4 relative overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER & LIGHTBOX TRIGGER                             */}
      {/* ============================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl p-1.5 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-2xs">🕉️</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider shadow-2xs">
                {isEn ? 'Empirical Vedic Timeline' : 'సనాతన వైదిక కాలరేఖ'}
              </span>
              <span className="text-xs font-mono font-bold text-[#D84315]">
                22,000+ BCE ➔ TODAY
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
              {isEn ? 'Timeline of Hindu Civilization (Rigveda, Ramayana, Mahabharata)' : 'హిందూ నాగరికత కాలరేఖ (ఋగ్వేదం, రామాయణం, మహాభారతం)'}
            </h3>
            <p className="text-xs text-[#5D4037] font-medium">
              {isEn 
                ? 'Archaeo-astronomical & empirical dating based on 1000+ scientific evidences across 12+ disciplines of Hard Sciences'
                : '12+ ప్రాకృతిక విజ్ఞాన శాస్త్రాల నుండి 1000+ నిరూపిత ఆధారాలతో నిర్ధారించబడిన ఖగోళ-చారిత్రక కాలగణన'}
            </p>
          </div>
        </div>

        {/* View Original Poster Button */}
        <button
          type="button"
          onClick={handleOpenImage}
          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FFE082] text-[#7B1113] border-2 border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all cursor-pointer shrink-0 self-start sm:self-auto"
          title={isEn ? "View Original Infographic Poster" : "మూల చిత్ర పటాన్ని వీక్షించండి"}
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
          <span>{isEn ? 'View Original Chart' : 'మూల చిత్రం (Original Chart)'}</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* 2. RIGVEDA PERIOD BOX & YUGA DOGMA ANNOTATION                */}
      {/* ============================================================ */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center sm:text-left">
        
        {/* Rigveda Dotted Box (As in Source Image) */}
        <div 
          onClick={() => setSelectedTopic('rigveda')}
          className="cursor-pointer group px-4 py-2 rounded-2xl border-2 border-dashed border-[#7B1113] bg-white hover:bg-amber-50 shadow-2xs transition-all flex flex-col sm:flex-row items-center gap-2"
        >
          <span className="text-xs font-black uppercase text-[#7B1113] tracking-wide">
            {isEn ? 'RigVeda Epoch:' : 'ఋగ్వేద కాలపరిమితి:'}
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#D84315] group-hover:scale-102 transition-transform">
            22,000+ BCE through 6th millennium BCE
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-[#7B1113] font-bold">
            {isEn ? 'Click for Details' : 'వివరాలు'}
          </span>
        </div>

        {/* Yuga Dogma Annotation (As in Source Image) */}
        <div className="text-xs text-[#0288D1] font-medium space-y-0.5 text-center md:text-right">
          <div className="font-mono font-bold text-xs sm:text-sm text-[#0277BD]">
            1728K (Satya/Krita) – 1296K (Treta) – 864K (Dwapara) – 432K (Kali)
          </div>
          <div className="text-[10.5px] font-bold text-[#0288D1]/80">
            {isEn ? 'Yuga Dogma (Yuga Cycle Timeframes)' : 'యుగ పరిమాణ కొలమానం (సత్య, త్రేతా, ద్వాపర, కలి)'}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. HORIZONTAL TIMELINE BAR (FAITHFUL RECONSTRUCTION)        */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 bg-white rounded-2xl border border-amber-300/80 shadow-xs overflow-x-auto">
        <div className="min-w-[760px] max-w-5xl mx-auto space-y-3 select-none">
          
          {/* Top Labels (Treta, Dwapara, Kali) */}
          <div className="relative h-6 text-xs font-bold text-stone-800">
            {/* Treta above -10K */}
            <div className="absolute left-[45%] -translate-x-1/2 text-center">
              <span className="font-serif text-[#7B1113] tracking-wider">Treta</span>
            </div>

            {/* Dwapara & Kali above -5K */}
            <div className="absolute left-[69%] -translate-x-1/2 text-center flex items-center gap-2">
              <span className="font-serif text-[#7B1113] tracking-wider">Dwapara</span>
              <span className="font-serif text-[#C2185B] tracking-wider">Kali</span>
            </div>
          </div>

          {/* Scale Downward Arrow Markers (-20K, -15K, -10K, -5K, 0, TODAY) */}
          <div className="relative h-7 text-xs font-mono font-bold text-stone-900">
            <div className="absolute left-[18%] -translate-x-1/2 text-center">
              <span className="text-[11px] block">- 20K</span>
              <span className="text-xs text-black block leading-none">▼</span>
            </div>
            <div className="absolute left-[32%] -translate-x-1/2 text-center">
              <span className="text-[11px] block">- 15K</span>
              <span className="text-xs text-black block leading-none">▼</span>
            </div>
            <div className="absolute left-[47%] -translate-x-1/2 text-center">
              <span className="text-[11px] block">- 10K</span>
              <span className="text-xs text-black block leading-none">▼</span>
            </div>
            <div className="absolute left-[68%] -translate-x-1/2 text-center">
              <span className="text-[11px] block">- 5K</span>
              <span className="text-xs text-black block leading-none">▼</span>
            </div>
            <div className="absolute left-[83%] -translate-x-1/2 text-center">
              <span className="text-[11px] block">0</span>
              <span className="text-xs text-black block leading-none">▼</span>
            </div>
            <div className="absolute left-[90%] -translate-x-1/2 text-center">
              <span className="text-[10px] block font-black text-[#D84315]">TODAY</span>
              <span className="text-xs text-[#D84315] block leading-none">▼</span>
            </div>
          </div>

          {/* The Main Black Bar with Solid Segments & Arrows */}
          <div className="relative flex items-center h-8">
            {/* Left incoming grey arrow */}
            <div className="w-[18%] h-4 bg-gradient-to-r from-stone-300 to-stone-400 rounded-l-md flex items-center justify-end pr-1 text-[9px] font-mono text-stone-600 font-bold shrink-0">
              ← 22K+ BCE
            </div>

            {/* Black Segments */}
            <div className="flex-1 h-5.5 bg-black flex items-center">
              {/* Segment 1 (-20K to -15K) */}
              <div className="w-[17%] h-full border-r-2 border-white/90 bg-stone-950 hover:bg-stone-800 transition-colors" />

              {/* Segment 2 (-15K to -10K) */}
              <div className="w-[18%] h-full border-r-2 border-white/90 bg-stone-950 hover:bg-stone-800 transition-colors relative">
                {/* Ramayana Marker at ~12,209 BCE (approx middle of this block) */}
                <div 
                  onClick={() => setSelectedTopic('ramayana')}
                  className="absolute left-[54%] top-0 bottom-0 w-2 bg-[#D84315] hover:w-3 cursor-pointer transition-all shadow-xs" 
                  title="Ramayana 12209 BCE"
                />
              </div>

              {/* Segment 3 (-10K to -5K) */}
              <div className="w-[26%] h-full border-r-2 border-white/90 bg-stone-950 hover:bg-stone-800 transition-colors relative">
                {/* Mahabharata Marker at ~5,561 BCE (near the right border) */}
                <div 
                  onClick={() => setSelectedTopic('mahabharata')}
                  className="absolute right-[8%] top-0 bottom-0 w-2 bg-[#D4AF37] hover:w-3 cursor-pointer transition-all shadow-xs" 
                  title="Mahabharata 5561 BCE"
                />
              </div>

              {/* Segment 4 (-5K to 0) */}
              <div className="w-[19%] h-full border-r-2 border-white/90 bg-stone-950 hover:bg-stone-800 transition-colors" />

              {/* Segment 5 (0 to TODAY) */}
              <div className="w-[9%] h-full bg-stone-950 border-r-2 border-white/90 hover:bg-stone-800 transition-colors" />
            </div>

            {/* Right outgoing dashed arrow */}
            <div className="w-[11%] h-4 border-2 border-dashed border-stone-400 border-l-0 rounded-r-md flex items-center pl-1 text-[9px] font-mono text-stone-500 font-bold shrink-0">
              Future →
            </div>
          </div>

          {/* Bottom Markers: Ramayana (12209 BCE) and Mahabharata (5561 BCE) */}
          <div className="relative h-14 text-xs font-bold">
            {/* Ramayana (12209 BCE) */}
            <div 
              onClick={() => setSelectedTopic('ramayana')}
              className="absolute left-[41%] -translate-x-1/2 text-center cursor-pointer group p-1 rounded-xl hover:bg-amber-50 transition-colors"
            >
              <span className="text-xs text-[#D84315] block leading-none group-hover:scale-125 transition-transform">▲</span>
              <span className="font-mono font-black text-xs sm:text-sm text-[#D84315] block mt-0.5">12209 BCE</span>
              <span className="font-serif font-black text-xs sm:text-sm text-[#7B1113] block">
                {isEn ? 'Ramayana' : 'రామాయణం'}
              </span>
            </div>

            {/* Mahabharata (5561 BCE) */}
            <div 
              onClick={() => setSelectedTopic('mahabharata')}
              className="absolute left-[64%] -translate-x-1/2 text-center cursor-pointer group p-1 rounded-xl hover:bg-amber-50 transition-colors"
            >
              <span className="text-xs text-[#C99700] block leading-none group-hover:scale-125 transition-transform">▲</span>
              <span className="font-mono font-black text-xs sm:text-sm text-[#8D6E63] block mt-0.5">5561 BCE</span>
              <span className="font-serif font-black text-xs sm:text-sm text-[#7B1113] block">
                {isEn ? 'Mahabharata' : 'మహాభారతం'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM EVIDENCE BADGE (BLUE PILL AS IN SOURCE IMAGE)      */}
      {/* ============================================================ */}
      <div 
        onClick={() => setSelectedTopic('sciences')}
        className="cursor-pointer group max-w-2xl mx-auto p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#1976D2] via-[#1565C0] to-[#0D47A1] text-white shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
      >
        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFE082] shrink-0" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          {isEn
            ? '1000+ empirical, objectively testable evidence from 12+ disciplines of Hard sciences'
            : '12+ ప్రాకృతిక విజ్ఞాన శాస్త్రాల నుండి 1000+ నిరూపిత, ప్రత్యక్ష శాస్త్రీయ ఆధారాలు'}
        </span>
        <ChevronRight className="w-4 h-4 text-[#FFE082] group-hover:translate-x-1 transition-transform shrink-0" />
      </div>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE DETAIL DRAWER / MODAL                         */}
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
                  {selectedTopic === 'rigveda' ? '📜' : selectedTopic === 'ramayana' ? '🏹' : selectedTopic === 'mahabharata' ? '⚔️' : '🔬'}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                    {selectedTopic === 'rigveda' && (isEn ? 'RigVeda Epoch (22,000+ BCE - 6th Millennium BCE)' : 'ఋగ్వేద కాలగణన (క్రీ.పూ. 22,000+ నుండి 6వ సహస్రాబ్ది)')}
                    {selectedTopic === 'ramayana' && (isEn ? 'Ramayana Dating (12209 BCE)' : 'శ్రీమద్రామాయణ ఖగోళ కాలం (క్రీ.పూ. 12209)')}
                    {selectedTopic === 'mahabharata' && (isEn ? 'Mahabharata Dating (5561 BCE)' : 'మహాభారత కురుక్షేత్ర ఖగోళ కాలం (క్రీ.పూ. 5561)')}
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
