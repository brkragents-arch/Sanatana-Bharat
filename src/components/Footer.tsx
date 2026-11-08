import React from 'react';
import { ExternalLink, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC<{ onNavigateToSection: (mode: any) => void }> = ({ onNavigateToSection }) => {

  return (
    <footer className="bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDF] to-[#EAE0CB] border-t-2 border-[#D4AF37] pt-12 pb-8 px-4 text-[#2C1810]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About the Project */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪷</span>
              <h3 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                సనాతన భారత్: పౌరాణిక విజ్ఞానం & సమగ్ర చరిత్ర
              </h3>
            </div>
            <p className="text-xs text-[#5D4037] leading-relaxed">
              బమ్మెర పోతన తెలుగు భాగవత సృష్టి రహస్యాలు, బ్రహ్మ-దక్ష పౌరాణిక వంశవృక్షాలు, 
              ప్రాచీన భారతీయ విశ్వవిద్యాలయాలు, శాస్త్రవేత్తలు మరియు 5000 ఏళ్ల సమగ్ర భారతీయ 
              చారిత్రక ప్రస్థానాన్ని ఆధునిక ఇంటరాక్టివ్ రూపంలో అందించు సమగ్ర పరిశోధనా దర్శిని.
            </p>
            <div className="text-[11px] text-[#7B1113] font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
              <span>100% ప్రామాణిక పురాణ గ్రంథానుసారము</span>
            </div>
          </div>

          {/* Column 2: Core Sections Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider border-b border-[#D4AF37]/40 pb-1 font-telugu-serif">
              విషయ సూచిక
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5D4037]">
                            <li>
                <button 
                  onClick={() => onNavigateToSection('srushti_rahasyam')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5 font-bold text-[#D84315]"
                >
                  <span>✨</span> <span>సృష్టి రహస్యం (సంకల్పం నుండి మోక్షం వరకు)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('brahma_family')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5 font-bold text-[#7B1113]"
                >
                  <span>🪷</span> <span>బ్రహ్మ వంశము (Family of Brahma)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('tree')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>🌳</span> <span>సంపూర్ణ ప్రజాపతి వంశవృక్షము</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('mindmap')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>🧠</span> <span>బ్రహ్మ కేంద్రక మైండ్ మ్యాప్</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('sanatana_chronology')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>☸️</span> <span>సనాతన ధర్మ ఆవిర్భావము (13 సోపానాలు)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('indian_history')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5 font-bold text-[#7B1113]"
                >
                  <span>🏛️</span> <span>భారతీయ చరిత్ర కాలానుక్రమణిక (Indian History)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('jyotishya_shastram')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5 font-bold text-[#7B1113]"
                >
                  <span>🔮</span> <span>జ్యోతిష్య శాస్త్రము (12 గ్రహాలు • 4 చక్రాలు • 324 కర్మలు)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('flow')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>⏳</span> <span>దశవిధ సృష్టి క్రమ ప్రవాహము</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('daksha_vamsa')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>👑</span> <span>దక్ష – ప్రసూతి 16 మంది కన్యలు</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('scriptures')}
                  className="hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <span>📜</span> <span>పోతన భాగవత పద్య రత్నావళి</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Primary References */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider border-b border-[#D4AF37]/40 pb-1 font-telugu-serif">
              మూల గ్రంథ ఆధారాలు
            </h4>
            <ul className="space-y-2 text-xs text-[#5D4037]">
              <li>
                <a
                  href="https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B1113] hover:text-[#D84315] font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>telugubhagavatam.org అధికారిక వంశవృక్షం</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[11px] text-[#5D4037]/80 block">
                  దక్ష ప్రజాపతి - ప్రసూతి వంశవృక్ష విభాగాలు
                </span>
              </li>
              <li>
                <strong>బమ్మెర పోతన భాగవతము:</strong>
                <span className="block text-[11px] text-[#5D4037]">
                  • తృతీయ స్కంధము: సృష్టి ప్రకరణము, వేదోద్భవము
                </span>
                <span className="block text-[11px] text-[#5D4037]">
                  • చతుర్థ స్కంధము: దక్ష-ప్రసూతి వంశము & దక్షయజ్ఞము
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Devotional Note & Disclaimer */}
          <div className="space-y-2.5 bg-[#FFFFFF]/60 p-3.5 rounded-xl border border-[#D4AF37]/50 shadow-2xs">
            <h4 className="text-xs font-bold text-[#D84315] uppercase tracking-wider flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>సమాచార గమనిక & నిబద్ధత</span>
            </h4>
            <p className="text-[11px] text-[#5D4037] leading-relaxed">
              ఈ వెబ్‌సైట్ నందలి ప్రతి సంబంధము, వంశవృక్ష శాఖ మరియు పద్యాలు శ్రీమద్భాగవత మూల గ్రంథమును అనుసరించి పరిశోధనాత్మకంగా నిర్మించబడినవి. 
              ఏ సంబంధమూ కల్పితము కాదు.
            </p>
            <div className="pt-2 border-t border-[#E8DCC4] text-[10px] text-[#5D4037]">
              మూల సమాచారం కొరకు ఎల్లప్పుడూ పోతన తెలుగు భాగవతాన్ని దర్శించండి.
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5D4037]">
          <div>
            © {new Date().getFullYear()} సనాతన భారత్: పౌరాణిక విజ్ఞానం & సమగ్ర చరిత్ర • సర్వహక్కులు భగవదర్పణము.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>భక్తి శ్రద్ధలతో తీర్చిదిద్దబడిన డిజిటల్ విజ్ఞాన పీఠము</span>
            <span className="text-[#D84315]">🪷</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
