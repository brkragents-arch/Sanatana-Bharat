import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  Clock, 
  ExternalLink, 
  ArrowRight
} from 'lucide-react';

interface BharatiyaKalagananaArticleViewProps {
  onBackToChakra?: () => void;
}

export const BharatiyaKalagananaArticleView: React.FC<BharatiyaKalagananaArticleViewProps> = ({
  onBackToChakra
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'article' | 'calculations' | 'where_we_are' | 'micro_units'>('article');

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fadeIn pb-12">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER                                         */}
      {/* ============================================================ */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#2B0608] via-[#4A0012] to-[#7B1113] p-6 sm:p-8 text-[#FFE082] shadow-2xl relative overflow-hidden">
        {/* Subtle decorative motif */}
        <div className="absolute -top-10 -right-10 text-9xl text-[#D4AF37]/10 select-none pointer-events-none font-serif">
          ☸️
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#2A0800] text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {isEn ? 'Vedic Astronomical Chronology' : 'భారతీయ ఖగోళ కాలగణన'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[#FFE082] text-xs font-bold border border-white/20">
                {isEn ? 'Time System Based on Astronomy' : 'ఖగోళ గణనలపై ఆధారపడిన కాల వ్యవస్థ'}
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-bold border border-cyan-400/40">
                {isEn ? '311.04 Trillion Years Cosmic Scale' : '311.04 ట్రిలియన్ ఏళ్ల విశ్వ ప్రమాణం'}
              </span>
            </div>

            {onBackToChakra && (
              <button
                onClick={onBackToChakra}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#FFE082] text-[#2A0800] font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>☸️</span>
                <span>{isEn ? 'Back to 3-Chakra Wheel' : 'త్రిచక్ర సమగ్ర దర్శినికి వెళ్ళు'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-telugu-serif text-[#FFE082] tracking-tight leading-tight">
              {isEn 
                ? 'Bharatiya Kalaganana – A Time System Based on Astronomical Calculations' 
                : 'భారతీయ కాలగణన – ఖగోళ గణనలపై ఆధారపడిన కాల వ్యవస్థ'}
            </h1>
            <p className="text-xs sm:text-sm text-[#FFE57F]/90 font-medium mt-1.5 max-w-4xl leading-relaxed">
              {isEn 
                ? 'Original Research Article by Dr. K. M. Rao • Published on kmrao.wordpress.com (24 January 2021)' 
                : 'డాక్టర్ కె. ఎం. రావు గారి పరిశోధనాత్మక రచన • ఆధార వెబ్‌సైట్: kmrao.wordpress.com (24 జనవరి 2021)'}
            </p>
          </div>

          {/* Gita Verse Highlight Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-[#D4AF37]/50 backdrop-blur-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FFD54F] tracking-wider">
              <span>🕉️</span>
              <span>శ్రీమద్భగవద్గీత (11.32) • శ్రీకృష్ణ పరమాత్మ వాక్కు:</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-[#FFE082] italic tracking-wide">
              "కాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో లోకాన్ సమాహర్తుమిహ ప్రవృత్తః ॥"
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8E1] leading-relaxed">
              {isEn 
                ? 'Krishna proclaims: "I am Time, the cosmic transformer and devourer of worlds. Perpetually creating and dissolving, moving unceasingly, infolding and unfolding the universe. As time, I dissolve outworn structures and raise mighty, splendid kingdoms (rajyam samruddham)."' 
                : 'శ్రీకృష్ణ పరమాత్ముడు అర్జునునికి స్వయంగా తెలియజేస్తున్నాడు: "నేను సమస్త లోకాలను నశింపజేసే ప్రవృద్ధుడైన కాలాన్ని. నేనే నిరంతరం సృష్టిస్తూ, లయం చేస్తూ, అప్రతిహతంగా ప్రవహించే విశ్వ కాలస్వరూపాన్ని. కాలాన్నై నేనే పాత వ్యవస్థలను లయం చేసి, నూతన, వైభవోపేతమైన సుసంపన్న రాజ్యాలను (\'రాజ్యం సమృద్ధం\') స్థాపిస్తాను."'}
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SUB-NAVIGATION TABS                                        */}
      {/* ============================================================ */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#FAF7F0] p-2.5 rounded-2xl border-2 border-[#D4AF37]/50 shadow-sm">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveTab('article')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'article'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>📜</span>
            <span>{isEn ? 'Full Article (సమగ్ర వ్యాసం)' : 'సమగ్ర వ్యాసం (చరిత్ర & ఆర్యభట్టు)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('calculations')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calculations'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>🔢</span>
            <span>{isEn ? 'Time Calculations (యుగాలు & కల్పాలు)' : 'యుగాలు, మహాయుగాలు & కల్పాల గణితం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('where_we_are')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'where_we_are'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>📍</span>
            <span>{isEn ? 'Where Are We Today? (నేడు మనం ఎక్కడ ఉన్నాము?)' : 'నేడు మనం ఎక్కడ ఉన్నాము? (సంకల్ప పాఠం)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('micro_units')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'micro_units'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>⏱️</span>
            <span>{isEn ? 'Micro Time Units (త్రుటి నుండి సంవత్సరం)' : 'సూక్ష్మ కాల ప్రమాణాలు (త్రుటి నుండి ఘడియ)'}</span>
          </button>
        </div>

        <a
          href="https://kmrao.wordpress.com/2021/01/24/bharatiya-kalaganana-a-time-system-based-on-astronomical-calculations/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-xl bg-white border border-[#D4AF37] hover:bg-amber-50 text-[#7B1113] text-xs font-bold flex items-center gap-1.5 shadow-2xs"
          title="Open original WordPress blog post by Dr. K. M. Rao"
        >
          <span>🌐 {isEn ? 'Source Blog Post' : 'మూల బ్లాగ్ లింక్'}</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
        </a>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: FULL NARRATIVE ARTICLE (చరిత్ర & ఆర్యభట్టు)              */}
      {/* ============================================================ */}
      {activeTab === 'article' && (
        <div className="space-y-6">
          
          {/* Section 1: Intro Questions */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#D4AF37]/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-xl shadow-xs">❓</span>
              <h2 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113]">
                {isEn ? 'How Do We Measure Time and History?' : 'మనం కాలాన్ని ఎలా కొలుస్తాము? చరిత్రను ఎలా లెక్కిస్తాము?'}
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-[#4E342E] leading-relaxed">
              {isEn 
                ? 'How do we measure time? How do we measure history? Is our history intrinsically linked to astronomy? Do we measure our history more in accordance with astronomical evidence than archaeological evidence?'
                : 'మనం కాలాన్ని ఎలా కొలుస్తాము? చరిత్రను ఎలా లెక్కిస్తాము? మన చరిత్ర ఖగోళ విజ్ఞానంతో ముడిపడి ఉందా? పురావస్తు త్రవ్వకాల ఆధారాల కంటే ఎక్కువగా మనం మన చరిత్రను ఖగోళ ఆధారాలతో కొలుస్తున్నామా? భారతీయ సంస్కృతిలో చరిత్ర అనేది కేవలం రాళ్ళు, ఇటుకలతో కూడిన భౌతిక అవశేషాలకే పరిమితం కాదు; అది ఆకాశంలో అప్రతిహతంగా తిరిగే సూర్య, చంద్ర, నక్షత్ర, గ్రహాల గమనాలతో ముడిపడిన శాశ్వత ఖగోళ సత్యం.'}
            </p>
          </div>

          {/* Section 2: Uniqueness of Bharatiya History */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EE] to-[#FFF4DE] border-2 border-[#D4AF37] shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#D84315] text-[#FFE082] text-xl shadow-xs">🌟</span>
              <div>
                <span className="text-[10px] font-black uppercase text-[#D84315] tracking-widest bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  UNIQUENESS OF BHARATIYA HISTORY
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  భారతీయ చరిత్ర విశిష్టత & ఖగోళ ఆధారిత కాల వ్యవస్థ
                </h3>
              </div>
            </div>

            <div className="text-sm sm:text-base text-[#3E2723] leading-relaxed space-y-3">
              <p>
                భారతీయ చరిత్ర అనేది ప్రపంచంలోని ఇతర దేశాల వలె ఏదో ఒక సామ్రాజ్యం ఏర్పడటంతోనో, లేదా ఏదైనా ఒక కొత్త మతం ఆవిర్భవించడంతోనో ప్రారంభం కాదు!
              </p>
              <p>
                ఇది కాలం ప్రారంభమైన క్షణం నుండి – అంటే <strong>సృష్టి ఆది (The Beginning of Creation)</strong> నుండి నిరంతరాయంగా సాగుతున్న ఒక అఖండ జీవన తరంగం, అనంత ప్రవాహం. మానవాళి ఉనికిలోని అత్యంత సుదూర యుగాలను సైతం స్పృశించే ఏకైక వ్యవస్థ <strong>"భారతీయ కాలగణన" (Bharatiya Kalaganana)</strong> – ఇది సంపూర్ణంగా శాస్త్రీయ ఖగోళ గణనలపై ఆధారపడి రూపుదిద్దుకుంది.
              </p>
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-300 shadow-2xs space-y-2">
                <div className="text-xs font-black text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span>
                  <span>సూక్ష్మాతి సూక్ష్మ ప్రమాణం నుండి అనంత విశ్వాయువు వరకు:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4E342E]">
                  భారతీయ కాలగణన అత్యంత సూక్ష్మమైన కాల ప్రమాణమైన <strong>"త్రుటి" (Thruti - సెకనులో 33,750వ వంతు)</strong> లో జరిగే సంఘటనల నుండి మొదలుకొని, సమస్త విశ్వం యొక్క సృష్టి చక్రం పూర్తయ్యే <strong>"బ్రహ్మాయువు లేదా మహాకల్పం" (Brahmayu / Mahakalpa - 311.04 ట్రిలియన్ మానవ సంవత్సరాలు)</strong> వరకు గల అత్యంత దీర్ఘకాలిక ఘటనలను సైతం నిర్దిష్టంగా లెక్కించే అద్భుత ఖగోళ సామర్థ్యాన్ని కలిగి ఉంది.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Time Dimension & Aryabhatta */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#D4AF37]/70 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-xl shadow-xs">🔭</span>
              <div>
                <span className="text-[10px] font-black uppercase text-[#7B1113] tracking-widest bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  TIME DIMENSION & ARYABHATA
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  ఆర్యభట్టు ఖగోళ దర్శనం & అశ్వినీ నక్షత్ర సంయోగం
                </h3>
              </div>
            </div>

            <div className="text-sm sm:text-base text-[#3E2723] leading-relaxed space-y-3">
              <p>
                క్రీస్తుశకం 5వ శతాబ్దంలో జీవించిన <strong>మహర్షి ఆర్యభట్టు (Aryabhata)</strong> ప్రాచీన భారతదేశపు మహోన్నత ఖగోళ శాస్త్రవేత్త. ఆయన రచించిన <em>'ఆర్యభటీయం' (Aryabhatiyam)</em> నేటికీ ప్రపంచంలోనే అత్యంత ప్రాచీన, ప్రామాణిక ఖగోళ రిఫరెన్స్ గ్రంథాలలో ఒకటి. తరువాతి కాలంలో ప్రఖ్యాత ఖగోళవేత్తలు, జ్యోతిష్యులు దీనిని <strong>"ఆర్య సిద్ధాంతం" (Arya Siddhanta)</strong> గా గుర్తించి అనుసరించారు.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-[#7B1113] font-bold space-y-1">
                <span className="text-[#D84315] uppercase tracking-wider text-[11px] block">☀️ కోపర్నికస్ కంటే ముందే సూర్యకేంద్రక సిద్ధాంతం:</span>
                <p className="text-[#3E2723] font-normal">
                  పాశ్చాత్య శాస్త్రవేత్త కోపర్నికస్ కంటే అనేక శతాబ్దాల ముందే – సూర్యుడు భూమి చుట్టూ తిరగడం లేదని, భూమే తన అక్షంపై తాను తిరుగుతూ సూర్యుని చుట్టూ పరిభ్రమిస్తోందని ఆర్యభట్టు శాస్త్రీయంగా ప్రతిపాదించారు.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-black text-[#7B1113] uppercase tracking-wide flex items-center gap-1.5">
                  <span>🪐</span>
                  <span>1.97 బిలియన్ ఏళ్ల క్రితం గ్రహ సంయోగం (Conjunction with Ashwini Constellation):</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                  ఆర్యభట్టు ఖగోళ శాస్త్ర గణనల ప్రకారం: సరిగ్గా <strong>1.97 బిలియన్ (197 కోట్ల) సంవత్సరాల క్రితం</strong> సమస్త గ్రహాలు ఆకాశంలో <strong>అశ్వినీ నక్షత్ర రాశితో (Ashwini Constellation)</strong> ఒకే రేఖలో సంయోగం చెందాయి. ఆ తర్వాత ప్రతి <strong>4,32,000 సంవత్సరాలకు ఒకసారి</strong> ఇవే గ్రహాలు అశ్వినీ నక్షత్రంతో తిరిగి సంయోగం చెందుతాయి.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-white border border-red-200 text-center">
                    <span className="text-[10px] text-stone-500 font-bold block">1 సంయోగం (1 Conjunction)</span>
                    <span className="text-xs font-black text-[#7B1113]">కలియుగం</span>
                    <span className="text-[11px] text-[#B71C1C] font-mono block">4,32,000 ఏళ్ళు</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-center">
                    <span className="text-[10px] text-stone-500 font-bold block">2 సంయోగాలు (2 Conjunctions)</span>
                    <span className="text-xs font-black text-[#7B1113]">ద్వాపర యుగం</span>
                    <span className="text-[11px] text-[#B71C1C] font-mono block">8,64,000 ఏళ్ళు</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-center">
                    <span className="text-[10px] text-stone-500 font-bold block">3 సంయోగాలు (3 Conjunctions)</span>
                    <span className="text-xs font-black text-[#7B1113]">త్రేతా యుగం</span>
                    <span className="text-[11px] text-[#B71C1C] font-mono block">12,96,000 ఏళ్ళు</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200 text-center">
                    <span className="text-[10px] text-stone-500 font-bold block">4 సంయోగాలు (4 Conjunctions)</span>
                    <span className="text-xs font-black text-[#7B1113]">సత్య / కృతయుగం</span>
                    <span className="text-[11px] text-[#B71C1C] font-mono block">17,28,000 ఏళ్ళు</span>
                  </div>
                </div>
                <p className="text-xs text-[#5D4037] pt-1 italic font-medium">
                  ఈ నాలుగు యుగాలు కలిస్తే ఒక <strong>మహాయుగం లేదా చతుర్యుగం (43,20,000 మానవ సంవత్సరాలు)</strong> అవుతుంది.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: What is Kalpa & Manvantara */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#D4AF37]/70 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-xl shadow-xs">🌌</span>
              <div>
                <span className="text-[10px] font-black uppercase text-[#7B1113] tracking-widest bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  WHAT IS KALPA & MANVANTARA?
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  మన్వంతరం మరియు కల్పం అంటే ఏమిటి?
                </h3>
              </div>
            </div>

            <div className="text-sm sm:text-base text-[#3E2723] leading-relaxed space-y-3">
              <p>
                <strong>మన్వంతరం (Manvantara - Period of Manu):</strong> 71 మహాయుగాలు మరియు ఒక సత్యయుగ కాలం (17,28,000 ఏళ్ళు) కలిస్తే ఒక మన్వంతరం అవుతుంది. ఈ గణనలో ఆ సత్యయుగ కాలాన్ని సంధికాలం (Twilight Period) లేదా <strong>'మనుసంధి'</strong> అంటారు.
              </p>
              <p>
                <strong>కల్పం (Kalpa):</strong> కాలగణనలోని తర్వాతి ఉన్నత స్థాయి ప్రమాణమే 'కల్పం'. ఒక కల్పంలో <strong>14 మన్వంతరాలు</strong> మరియు అదనంగా ఒక సత్యయుగ సంధికాలం ఉంటాయి.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 space-y-2">
                <div className="text-xs font-black text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                  <span>👑</span>
                  <span>బ్రహ్మదేవుని ఒక పగలు = ఒక కల్పం:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4E342E]">
                  ఒక కల్పం అంటే బ్రహ్మదేవునికి <strong>ఒక పగలు (1 Day of Brahma)</strong>. 360 పగళ్ళు, 360 రాత్రులు కలిస్తే బ్రహ్మకు ఒక సంవత్సరం అవుతుంది. బ్రహ్మదేవుని ఆయుష్షు మొత్తం 100 సంవత్సరాలు (బ్రహ్మాయువు). దీనినే సమస్త సృష్టి ఆయుష్షుగా పరిగణిస్తారు. మొదటి 50 బ్రహ్మ సంవత్సరాలను <strong>'పూర్వార్ధం' (Purvardha)</strong> అని, తర్వాతి 50 బ్రహ్మ సంవత్సరాలను <strong>'పరార్థం' (Parardha)</strong> అని పిలుస్తారు.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: MATHEMATICAL CALCULATIONS (యుగాలు, కల్పాల గణితం)        */}
      {/* ============================================================ */}
      {activeTab === 'calculations' && (
        <div className="space-y-6">
          
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EE] to-[#FFE082]/30 border-2 border-[#D4AF37] shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-2xl shadow-xs">🔢</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113]">
                  {isEn ? 'Bharatiya Kalaganana Mathematical Formulae' : 'భారతీయ కాలగణన గణిత సూత్రాలు & విస్తరణ'}
                </h3>
                <p className="text-xs text-[#5D4037] font-medium">
                  దివ్య సంవత్సరాలు (Divine Years) మరియు మానవ సంవత్సరాల (Human Years) ఖగోళ సంబంధం
                </p>
              </div>
            </div>

            {/* Calculations Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-[#7B1113] text-xs font-black">
                    1. కలియుగం (Kaliyuga)
                  </span>
                  <span className="text-xs font-bold text-stone-500">1 Conjunction</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#7B1113]">
                  1,200 దివ్య సంవత్సరాలు = 1,200 × 360
                </div>
                <div className="text-lg font-black text-[#B71C1C]">
                  = 4,32,000 మానవ సంవత్సరాలు
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-xs font-black">
                    2. ద్వాపర యుగం (Dwapara Yuga)
                  </span>
                  <span className="text-xs font-bold text-stone-500">2 Conjunctions</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#7B1113]">
                  2,400 దివ్య సంవత్సరాలు = 2,400 × 360
                </div>
                <div className="text-lg font-black text-[#B71C1C]">
                  = 8,64,000 మానవ సంవత్సరాలు
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#7B1113] text-xs font-black">
                    3. త్రేతా యుగం (Treta Yuga)
                  </span>
                  <span className="text-xs font-bold text-stone-500">3 Conjunctions</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#7B1113]">
                  3,600 దివ్య సంవత్సరాలు = 3,600 × 360
                </div>
                <div className="text-lg font-black text-[#B71C1C]">
                  = 12,96,000 మానవ సంవత్సరాలు
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#7B1113] text-xs font-black">
                    4. సత్య / కృతయుగం (Satya Yuga)
                  </span>
                  <span className="text-xs font-bold text-stone-500">4 Conjunctions</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#7B1113]">
                  4,800 దివ్య సంవత్సరాలు = 4,800 × 360
                </div>
                <div className="text-lg font-black text-[#B71C1C]">
                  = 17,28,000 మానవ సంవత్సరాలు
                </div>
              </div>
            </div>

            {/* Mahayuga & Kalpa Total Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-white space-y-3 shadow-md mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/20 pb-2">
                <span className="text-sm font-black text-[#FFE082] uppercase tracking-wider">
                  ఒక మహాయుగం (చతుర్యుగం) మొత్తం = 4 యుగాల మొత్తం
                </span>
                <span className="text-base font-black text-[#FFE082] font-mono">
                  12,000 దివ్య ఏళ్ళు = 43,20,000 మానవ ఏళ్ళు
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-white/90">
                <div className="font-bold text-[#FFE57F]">
                  ఒక కల్పం (బ్రహ్మదేవుని 1 పగలు) = (14 మన్వంతరాలు) + ఒక సత్యయుగ సంధి
                </div>
                <div className="font-mono text-sm text-cyan-200">
                  = 14 × 30,84,48,000 + 1 × 17,28,000 + 4,32,00,00,000
                </div>
                <div className="text-base sm:text-lg font-black text-[#FFE082]">
                  = 432,00,00,000 (4.32 బిలియన్) మానవ సంవత్సరాలు!
                </div>
              </div>
            </div>

            {/* Total Cosmic Age of Creation */}
            <div className="p-5 rounded-2xl bg-white border-2 border-[#D4AF37] space-y-2 text-center">
              <span className="text-xs font-black uppercase tracking-wider text-[#D84315] block">
                సమగ్ర సృష్టి చక్రం • బ్రహ్మాయువు (ONE FULL CYCLE OF CREATION)
              </span>
              <div className="text-2xl sm:text-4xl font-black font-mono text-[#7B1113]">
                311.040 Trillion Human Years
              </div>
              <p className="text-xs text-[#5D4037] font-medium max-w-2xl mx-auto">
                (311,040,000,000,000 మానవ సంవత్సరాలు = బ్రహ్మదేవుని 100 సంవత్సరాల సంపూర్ణ ఆయుర్దాయం!)
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: WHERE ARE WE TODAY? (సంకల్ప పాఠం & వర్తమాన స్థానం)        */}
      {/* ============================================================ */}
      {activeTab === 'where_we_are' && (
        <div className="space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#D4AF37] shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#D84315] text-[#FFE082] text-2xl shadow-xs">📍</span>
              <div>
                <span className="text-[10px] font-black uppercase text-[#D84315] tracking-widest bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  WHERE ARE WE TODAY?
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-0.5">
                  నేడు మనం ఎక్కడ ఉన్నాము? • నిత్య సంకల్ప పాఠ సమన్వయం
                </h3>
              </div>
            </div>

            {/* Traditional Vedic Sankalpa Patha */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 space-y-2">
              <div className="text-xs font-black uppercase text-[#7B1113] tracking-wider flex items-center gap-1.5">
                <span>📿</span>
                <span>భారతీయ నిత్య సంకల్ప మంత్రం:</span>
              </div>
              <div className="text-sm sm:text-base font-bold font-telugu-serif text-[#7B1113] leading-relaxed">
                "...శ్రీమన్మహావిష్ణోరాజ్ఞయా ప్రవర్తమానస్య ఆద్య బ్రహ్మణః ద్వితీయ పరార్థే, శ్వేతవరాహ కల్పే, వైవస్వత మన్వంతరే, అష్టావింశతితమే కలియుగే, ప్రథమ పాదే, జంబూద్వీపే, భరతవర్షే, భరతఖండే..."
              </div>
            </div>

            {/* Step-by-step Cosmic Position breakdown */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] font-black flex items-center justify-center shrink-0 text-sm">
                  1
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#7B1113]">
                    ద్వితీయ పరార్థం (Second Parardha - 51st Year of Brahma)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                    సంకల్ప పాఠం ప్రకారం, బ్రహ్మాయువులోని మొదటి 50 సంవత్సరాలు (ప్రథమ పూర్వార్ధం) ఇప్పటికే ముగిశాయి. అంటే ప్రస్తుత సృష్టి చక్రంలో <strong>155.52 ట్రిలియన్ సంవత్సరాలు</strong> గడిచాయి. ప్రస్తుతం మనం రెండవ పరార్థంలోని మొదటి సంవత్సరంలో (51వ బ్రహ్మ సంవత్సరం) ఉన్నాము. మన విశ్వానికి ఇంకా దాదాపు 155.52 ట్రిలియన్ ఏళ్ళ ఆయుష్షు మిగిలి ఉంది.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] font-black flex items-center justify-center shrink-0 text-sm">
                  2
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#7B1113]">
                    శ్వేతవరాహ కల్పం (Swetha Varaha Kalpa)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                    ఈ 51వ సంవత్సరంలో ప్రస్తుతం మొదటి కల్పమైన <strong>'శ్వేతవరాహ కల్పం'</strong> నడుస్తోంది. ఒక కల్పంలోని మొత్తం 14 మన్వంతరాలలో ఇప్పటికే 6 మన్వంతరాలు (స్వాయంభువ, స్వారోచిష, ఉత్తమ, తామస, రైవత, చాక్షుష) గడిచిపోయాయి.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] font-black flex items-center justify-center shrink-0 text-sm">
                  3
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#7B1113]">
                    వైవస్వత మన్వంతరం (Vaivaswatha Manvantara - 7th Manu)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                    ప్రస్తుతం మనం <strong>7వ మన్వంతరమైన 'వైవస్వత మన్వంతరం'</strong> లో ఉన్నాము. ఈ మన్వంతరంలోని మొత్తం 71 మహాయుగాలలో 27 మహాయుగాలు ముగిశాయి. ప్రస్తుతం <strong>28వ మహాయుగం</strong> నడుస్తోంది.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] font-black flex items-center justify-center shrink-0 text-sm">
                  4
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#7B1113]">
                    28వ మహాయుగంలోని కలియుగం (Kaliyuga of 28th Mahayuga)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                    ఈ 28వ మహాయుగంలో కూడా కృత, త్రేతా మరియు ద్వాపర యుగాలు ముగిసిపోయాయి. ప్రస్తుతం మనం 28వ మహాయుగానికి చెందిన <strong>కలియుగ ప్రథమ పాదంలో</strong> జీవిస్తున్నాము.
                  </p>
                </div>
              </div>
            </div>

            {/* Kaliyuga Starting Exact Astronomical Timestamp */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950 via-[#7B1113] to-red-950 text-[#FFE082] border-2 border-[#D4AF37] space-y-2 shadow-md">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FFD54F] tracking-wider">
                <span>⏱️</span>
                <span>ఖగోళ శాస్త్ర రీత్యా కలియుగ ప్రారంభ ఖచ్చిత సమయం:</span>
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                18th / 20th February, 3102 BCE (క్రీ.పూ. 3102)
              </div>
              <div className="text-sm font-bold text-[#FFE57F]">
                సమయం: రాత్రి 2 గంటల 27 నిమిషాల 30 సెకన్లు (2 hrs, 27 min, 30 sec)
              </div>
              <p className="text-xs text-[#FFF8E1] leading-relaxed pt-1 border-t border-white/20">
                శ్రీకృష్ణ నిర్యాణానంతరం కలియుగం ప్రారంభమైంది. నేటికి (2026 CE నాటికి) కలియుగంలో సుమారు <strong>5,127 సంవత్సరాలు</strong> ముగిశాయి. కలియుగ మొత్తం ఆయుష్షు 4,32,000 సంవత్సరాలలో ఇంకా 4,26,873 సంవత్సరాలు మిగిలి ఉన్నాయి!
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 4: MICRO TIME UNITS (త్రుటి నుండి సంవత్సరం వరకు)          */}
      {/* ============================================================ */}
      {activeTab === 'micro_units' && (
        <div className="space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#D4AF37] shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-2xl shadow-xs">⏱️</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-telugu-serif text-[#7B1113]">
                  {isEn ? 'Micro-Units of Time in Bharatiya System' : 'భారతీయ సూక్ష్మ కాల ప్రమాణాలు (త్రుటి నుండి సంవత్సరం)'}
                </h3>
                <p className="text-xs text-[#5D4037] font-medium">
                  సూర్య సిద్ధాంతం మరియు శ్రీమద్భాగవతం (3వ స్కంధం) లో పేర్కొనబడిన కాలగణన
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">1. త్రుటి (Thruti)</span>
                <span className="text-sm font-black text-[#7B1113]">1/33,750 సెకను</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">కంటి రెప్ప వెండ్రుక కదిలే సూక్ష్మ కాలం.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">2. వేధ (Vedha)</span>
                <span className="text-sm font-black text-[#7B1113]">100 త్రుటులు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">సుమారు 1/337.5 సెకను.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">3. లవము (Lava)</span>
                <span className="text-sm font-black text-[#7B1113]">3 వేధలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">సుమారు 1/112.5 సెకను.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">4. నిమేషము (Nimesha)</span>
                <span className="text-sm font-black text-[#7B1113]">3 లవాలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">కనురెప్ప వేసి తెరిచే సాధారణ కాలం (1/37.5 సెకను).</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">5. కాష్ఠ (Kashtha)</span>
                <span className="text-sm font-black text-[#7B1113]">15 నిమేషాలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">సుమారు 0.4 సెకన్లు (క్షణ కాలం).</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">6. లఘు (Laghu)</span>
                <span className="text-sm font-black text-[#7B1113]">15 కాష్ఠలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">సుమారు 6 సెకన్లు.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">7. దండ / ఘడియ (Ghadia)</span>
                <span className="text-sm font-black text-[#7B1113]">15 లఘువులు = 24 నిమిషాలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">భారతీయ సాంప్రదాయ ప్రామాణిక కాల యూనిట్.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">8. ముహూర్తము (Muhurtha)</span>
                <span className="text-sm font-black text-[#7B1113]">2 ఘడియలు = 48 నిమిషాలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">శుభకార్యాలు, పూజలకు ప్రామాణికం.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">9. అహోరాత్రము (Ahoratra - Day)</span>
                <span className="text-sm font-black text-[#7B1113]">30 ముహూర్తాలు = 60 ఘడియలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">ఒక పూర్తి పగలు మరియు రాత్రి (24 గంటలు).</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">10. పక్షము (Paksha)</span>
                <span className="text-sm font-black text-[#7B1113]">15 తిథులు (15 రోజులు)</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">శుక్ల పక్షం (చంద్రవృద్ధి) మరియు కృష్ణ పక్షం (చంద్రక్షయం).</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">11. మాసము (Masa - Month)</span>
                <span className="text-sm font-black text-[#7B1113]">2 పక్షాలు = 30 రోజులు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">పితృదేవతలకు ఒక పగలు మరియు రాత్రి.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">12. సంవత్సరం (Year)</span>
                <span className="text-sm font-black text-[#7B1113]">2 ఆయనాలు = 12 మాసాలు</span>
                <p className="text-[11px] text-[#5D4037] mt-0.5">దేవతలకు ఒక దివ్య అహోరాత్రము (ఉత్తరాయణం పగలు, దక్షిణాయనం రాత్రి).</p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 5. FOOTER: SOURCE ATTRIBUTION & 3-CHAKRA INTEGRATION          */}
      {/* ============================================================ */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#D4AF37] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#7B1113]">📚 మూల వ్యాస మూలం & రిఫరెన్స్:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10.5px] font-bold border border-amber-300">
              Dr. K. M. Rao
            </span>
          </div>
          <div className="text-xs sm:text-sm text-[#4E342E]">
            "BHARATIYA KALAGANANA – A TIME SYSTEM BASED ON ASTRONOMICAL CALCULATIONS"
          </div>
          <div className="text-xs text-[#8D6E63] font-mono">
            https://kmrao.wordpress.com/2021/01/24/bharatiya-kalaganana-a-time-system-based-on-astronomical-calculations/
          </div>
        </div>

        {onBackToChakra && (
          <button
            onClick={onBackToChakra}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#B71C1C] hover:from-[#4A0012] hover:to-[#7B1113] text-[#FFE082] text-xs sm:text-sm font-black transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>☸️</span>
            <span>{isEn ? 'Return to 3-Chakra Interactive View' : 'త్రిచక్ర సమగ్ర దర్శినికి తిరిగి వెళ్ళండి'}</span>
          </button>
        )}
      </div>

    </div>
  );
};
