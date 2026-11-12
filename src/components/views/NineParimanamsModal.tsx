import React, { useEffect } from 'react';
import { 
  X, Sparkles, BookOpen, Layers, Compass, 
  HelpCircle, ShieldCheck 
} from 'lucide-react';

interface NineParimanamsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NineParimanamsModal: React.FC<NineParimanamsModalProps> = ({ isOpen, onClose }) => {
  // ESC key listener and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FAF7F0] border-2 sm:border-3 border-[#D4AF37] shadow-2xl overflow-hidden">
        {/* Sticky Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#7B1113] via-[#8B1E0F] to-[#5C0A0A] p-4 sm:p-5 border-b-2 border-[#D4AF37] text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">✨</span>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-[#FFE082] font-telugu-serif flex items-center gap-2">
                <span>9 పరిమాణములు &amp; 324 కర్మల గణిత రహస్యం</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFE082]/20 text-[#FFE082] border border-[#FFE082]/40 hidden md:inline">
                  గుణచక్ర రహస్యము
                </span>
              </h3>
              <p className="text-[10px] sm:text-xs text-stone-200">
                శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరుల “జ్యోతిష్య శాస్త్రము” (అధ్యాయములు 8 &amp; 21)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5"
            title="మూసివేయి (ESC)"
          >
            <X className="w-4 h-4 text-[#FFE082]" />
            <span className="hidden sm:inline">మూసివేయి</span>
            <kbd className="hidden md:inline text-[9px] bg-black/40 px-1 py-0.5 rounded text-stone-300">ESC</kbd>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar text-[#2C1810]">
          {/* Quick Summary Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF3E0] border border-[#D4AF37] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#7B1113] font-bold text-sm">
              <HelpCircle className="w-4 h-4 text-[#D84315] shrink-0" />
              <span>ప్రశ్న: గుణచక్రములో “9 పరిమాణములు” ఎలా వచ్చాయి?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
              జ్యోతిష్య శాస్త్రంలో ప్రతి రాశి యొక్క కాల విస్తీర్ణం ఖచ్చితంగా <strong>9 నక్షత్ర పాదాలు</strong>. కాలచక్రంలోని గ్రహాల ఫోకస్ లైట్లు కర్మచక్రం (12 రాశులు) లోని ఈ 9 పాదాల గుండా ప్రసరించి గుణచక్రంపై పడినప్పుడు, ఆ 9 కంపన ప్రమాణాలే ప్రతి గుణమునకు <strong>9 తీవ్రతా పరిమాణములుగా (9 Degrees of Intensity)</strong> వ్యక్తమవుతాయి!
            </p>
          </div>

          {/* Section 1: Astronomical & Astrological Derivation */}
          <div className="space-y-3 rounded-2xl bg-white p-4 sm:p-5 border border-[#D4AF37]/50 shadow-xs">
            <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
              <Compass className="w-4 h-4 text-[#D84315]" />
              <span>1. ఖగోళ &amp; జ్యోతిష్య మూలము (నక్షత్ర పాదాల సమన్వయము)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                <span className="block text-xs text-[#5D4037]">మొత్తం నక్షత్రాలు</span>
                <strong className="text-base text-[#7B1113]">27 నక్షత్రాలు</strong>
                <span className="block text-[10px] text-stone-500">ఒక్కో నక్షత్రానికి 4 పాదాలు</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                <span className="block text-xs text-[#5D4037]">మొత్తం నక్షత్ర పాదాలు</span>
                <strong className="text-base text-[#D84315]">27 × 4 = 108 పాదాలు</strong>
                <span className="block text-[10px] text-stone-500">సృష్టి పవిత్ర సంఖ్య</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8E1] border-2 border-[#D4AF37]">
                <span className="block text-xs text-[#5D4037]">ప్రతి రాశి / లగ్నమునకు</span>
                <strong className="text-base text-[#059669]">108 ÷ 12 = 9 పాదములు</strong>
                <span className="block text-[10px] text-emerald-800 font-bold">ఇవే 9 పరిమాణములు!</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] text-xs space-y-1.5 text-[#5D4037]">
              <strong className="text-[#7B1113] block">రాశులలో 9 పాదముల విభజన ఉదాహరణ:</strong>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li><strong>మేష రాశి:</strong> అశ్విని (4 పాదాలు) + భరణి (4 పాదాలు) + కృత్తిక (1వ పాదం) = <strong>9 పాదాలు</strong></li>
                <li><strong>వృషభ రాశి:</strong> కృత్తిక (2,3,4 పాదాలు) + రోహిణి (4 పాదాలు) + మృగశిర (1,2 పాదాలు) = <strong>9 పాదాలు</strong></li>
                <li><strong>మిథున రాశి:</strong> మృగశిర (3,4 పాదాలు) + ఆరుద్ర (4 పాదాలు) + పునర్వసు (1,2,3 పాదాలు) = <strong>9 పాదాలు</strong></li>
              </ul>
              <p className="text-[11px] text-stone-600 italic pt-1">
                ఈ విధంగా 12 రాశులలో ప్రతి ఒక్కదానికీ ఖచ్చితంగా 9 నక్షత్ర పాదాల కొలత ఉంటుంది. ఈ 9 పాదాల విస్తీర్ణమే గుణచక్రములో 9 పరిమాణములుగా లెక్కించబడింది.
              </p>
            </div>
          </div>

          {/* Section 2: The 9 Degrees of Intensity Table */}
          <div className="space-y-3 rounded-2xl bg-white p-4 sm:p-5 border border-[#D4AF37]/50 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
              <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D84315]" />
                <span>2. గుణ తీవ్రతా స్థాయులు (9 Degrees of Intensity Table)</span>
              </h4>
              <span className="text-[11px] text-[#5D4037]">సూక్ష్మ ఆలోచన నుండి పరాకాష్ట వరకు</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#D4AF37]/40 shadow-xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] text-[11px] sm:text-xs font-telugu-serif">
                    <th className="p-2.5 font-bold border-r border-[#D4AF37]/30 text-center w-12">పరిమాణం</th>
                    <th className="p-2.5 font-bold border-r border-[#D4AF37]/30">స్థాయి (Degree)</th>
                    <th className="p-2.5 font-bold border-r border-[#D4AF37]/30">అనుభవ రూపం</th>
                    <th className="p-2.5 font-bold border-r border-[#D4AF37]/30 text-rose-300">ఉదా: క్రోధము (కోపం)</th>
                    <th className="p-2.5 font-bold text-emerald-300">ఉదా: దానము (త్యాగం)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DCC4]">
                  {[
                    { num: '1', deg: 'అతి సూక్ష్మము', expr: 'మనసులోనే పుట్టి క్షణంలో సమసిపోవుట', bad: 'చిన్నపాటి అసంతృప్తి ఆలోచన', good: 'పైసా ఇవ్వాలనే ఆలోచన రావడం' },
                    { num: '2', deg: 'సూక్ష్మము', expr: 'అంతర్గత భావోద్వేగంగా మారుట', bad: 'లోలోపల చిరాకు పడుట', good: 'సహాయం చేయాలనే ఆర్తి కలుగుట' },
                    { num: '3', deg: 'అల్పము', expr: 'ముఖ కవళికలలో బయటపడుట', bad: 'కనుబొమ్మలు ముడచుట, మూతి తిప్పుట', good: 'చిరునవ్వుతో చిన్నపాటి చేయూత' },
                    { num: '4', deg: 'మితము', expr: 'చిన్న మాటల రూపంలోకి వచ్చుట', bad: 'విసుగ్గా మాట్లాడి నిష్టూరమాడుట', good: 'తీపి మాటతో పాటు వస్తు రూప సహాయం' },
                    { num: '5', deg: 'మధ్యమము', expr: 'సాధారణ చేష్టగా మారుట', bad: 'ఎదుటివారిపై అరచుట, తిట్టుట', good: 'ఒక పూట ఆకలి తీర్చి భోజనం పెట్టుట' },
                    { num: '6', deg: 'అధికము', expr: 'భౌతిక చర్యగా మారడం', bad: 'కోపంతో వస్తువులు విసిరేయుట', good: 'పెద్దమొత్తంలో విరాళం ప్రకటించుట' },
                    { num: '7', deg: 'ప్రబలము', expr: 'ఇతరులపై తీవ్ర ప్రభావం చూపుట', bad: 'చేయి చేసుకోవడం, కొట్టుట', good: 'ఆస్తిలో కొంత భాగం ధారపోయుట' },
                    { num: '8', deg: 'మహా ప్రబలము', expr: 'నియంత్రణ కోల్పోయిన రూపం', bad: 'ప్రాణాంతక ఆయుధంతో దాడి చేయుట', good: 'సర్వస్వము త్యజించి అర్పించుట' },
                    { num: '9', deg: 'పరాకాష్ట / చరమ', expr: 'పరమోన్నత చరమ స్థాయి', bad: 'ఉన్మాదంతో హత్య చేయుట / నాశనం', good: 'పరుల ప్రాణ రక్షణకై ప్రాణత్యాగం చేయుట' }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F0]'}>
                      <td className="p-2.5 font-bold text-center border-r border-[#E8DCC4] text-[#7B1113]">{row.num}</td>
                      <td className="p-2.5 font-semibold border-r border-[#E8DCC4]">{row.deg}</td>
                      <td className="p-2.5 border-r border-[#E8DCC4] text-[#5D4037]">{row.expr}</td>
                      <td className="p-2.5 border-r border-[#E8DCC4] text-rose-900 bg-rose-50/40">{row.bad}</td>
                      <td className="p-2.5 text-emerald-900 bg-emerald-50/40">{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: The 324 Karmas Formula */}
          <div className="space-y-3 rounded-2xl bg-white p-4 sm:p-5 border border-[#D4AF37]/50 shadow-xs">
            <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
              <Sparkles className="w-4 h-4 text-[#D84315]" />
              <span>3. గుణచక్ర గణిత సూత్రం (The 324 Karmas Formula)</span>
            </h4>

            <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFFDF7] border border-[#D4AF37] space-y-2 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white border border-[#E8DCC4] space-y-1">
                  <strong className="text-rose-800 block">6 చెడు గుణములు (షడ్రిపులు):</strong>
                  <p className="text-[#5D4037]">కామము, క్రోధము, లోభము, మోహము, మదము, మాత్సర్యము</p>
                  <span className="block text-xs font-bold text-[#7B1113] pt-1">
                    6 × 9 పరిమాణములు = 54 పాప గుణములు
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E8DCC4] space-y-1">
                  <strong className="text-emerald-800 block">6 మంచి గుణములు (షట్ సద్గుణాలు):</strong>
                  <p className="text-[#5D4037]">దానము, దయ, ఔదార్యము, వైరాగ్యము, వినయము, ప్రేమ</p>
                  <span className="block text-xs font-bold text-[#059669] pt-1">
                    6 × 9 పరిమాణములు = 54 పుణ్య గుణములు
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/60 text-center text-xs font-bold text-[#7B1113]">
                54 పాప గుణములు + 54 పుణ్య గుణములు = 108 గుణములు (దీనినే భగవద్గీతలో &quot;మాయ&quot; అంటారు)
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                <strong className="block text-[#7B1113]">1. తామస భాగము</strong>
                <span className="text-xs text-rose-800 font-bold">108 గుణములు</span>
                <span className="block text-[10px] text-stone-500">54 పాప + 54 పుణ్య</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                <strong className="block text-[#7B1113]">2. రాజస భాగము</strong>
                <span className="text-xs text-amber-800 font-bold">108 గుణములు</span>
                <span className="block text-[10px] text-stone-500">54 పాప + 54 పుణ్య</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <strong className="block text-[#7B1113]">3. సాత్త్విక భాగము</strong>
                <span className="text-xs text-emerald-800 font-bold">108 గుణములు</span>
                <span className="block text-[10px] text-stone-500">54 పాప + 54 పుణ్య</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#7B1113] text-[#FFE082] text-center space-y-1">
              <span className="block text-xs font-bold uppercase tracking-wider">మొత్తం కర్మల సంఖ్య</span>
              <div className="text-xl sm:text-2xl font-bold font-telugu-serif">
                108 × 3 = 324 గుణములు (324 రకాల కర్మలు)
              </div>
              <p className="text-[11px] text-stone-200">
                162 పాప కర్మలు + 162 పుణ్య కర్మలు • మధ్యలో ఉన్న 4వ ఆత్మ భాగము (బ్రహ్మయోగ స్థానము) నందు కర్మ రహితము!
              </p>
            </div>
          </div>

          {/* Section 4: Divine Code 9-6-3 */}
          <div className="space-y-3 rounded-2xl bg-gradient-to-r from-[#FFFDF7] to-[#FAF7F0] p-4 sm:p-5 border border-[#D4AF37]/50 shadow-xs">
            <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2 border-b border-[#E8DCC4] pb-2">
              <BookOpen className="w-4 h-4 text-[#D84315]" />
              <span>4. దైవ సంఖ్యా రహస్యం (The Divine Code 9 - 6 - 3)</span>
            </h4>

            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
              భగవద్గీత 15వ అధ్యాయం (16, 17 శ్లోకాలు) లోని త్రైత సిద్ధాంతం ప్రకారం సృష్టి సంఖ్యా నియమం <strong>9 - 6 - 3</strong> క్రమంలో నడుస్తుంది:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
                <strong className="text-[#D84315] block">3 = త్రైతము / త్రిగుణములు</strong>
                <p className="text-stone-600">క్షర (జీవుడు), అక్షర (ఆత్మ), ఉత్తమ పురుష (పరమాత్మ) / తామస, రాజస, సాత్విక.</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
                <strong className="text-[#D84315] block">6 = గుణ వర్గాలు</strong>
                <p className="text-stone-600">6 మంచి గుణాలు + 6 చెడు గుణాలు / షట్శాస్త్రాలు / షట్ చక్రాలు.</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8DCC4] space-y-1">
                <strong className="text-[#D84315] block">9 = పూర్ణ పరిమాణ సంఖ్య</strong>
                <p className="text-stone-600">9 నక్షత్ర పాదాలు / 9 తీవ్రతా పరిమాణములు / నవగ్రహాలు.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FFF8E1] border border-[#D4AF37] text-xs text-[#7B1113] font-semibold flex items-center justify-between flex-wrap gap-2">
              <span>సంఖ్యా శాస్త్ర అద్భుతం (అంకెల మొత్తం ఎల్లప్పుడూ 9):</span>
              <span className="font-mono font-bold text-sm text-[#D84315]">
                108 (1+0+8 = 9) • 54 (5+4 = 9) • 162 (1+6+2 = 9) • 324 (3+2+4 = 9)
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F0] p-3.5 sm:p-4 border-t border-[#E8DCC4] flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
          <span className="text-[#5D4037] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>ఆధార గ్రంథం: శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరుల “జ్యోతిష్య శాస్త్రము”</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#D84315] text-[#FFE082] font-bold hover:brightness-110 transition-all cursor-pointer shadow-xs"
          >
            తెలుసుకున్నాను (సరే)
          </button>
        </div>
      </div>
    </div>
  );
};
