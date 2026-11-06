import React, { useState, useEffect } from 'react';
import { useMythology } from '../context/MythologyContext';
import {
  TWELVE_ADITYAS_LIST,
  ADITYAS_SIGNIFICANCE,
  ADITYAS_INTRO_TE,
  ADITYAS_INTRO_EN,
  ADITYAS_RAW_TELUGU_TEXT
} from '../data/adityasData';
import { X, Copy, Check, Sun, Sparkles, BookOpen } from 'lucide-react';

export const AdityasModal: React.FC = () => {
  const { isAdityasOpen, setIsAdityasOpen, language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'cards' | 'raw'>('cards');
  const [copied, setCopied] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAdityasOpen) {
        setIsAdityasOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdityasOpen, setIsAdityasOpen]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isAdityasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAdityasOpen]);

  if (!isAdityasOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(ADITYAS_RAW_TELUGU_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2C1810]/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsAdityasOpen(false);
      }}
    >
      <div
        className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#D4AF37] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh] my-auto transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* ============================================================ */}
        {/* 1. MODAL HEADER */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#5E0011] via-[#7B1113] to-[#8C1D24] text-[#FFFDF7] px-4 sm:px-6 py-4 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3 shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#FFE082] via-[#FFD54F] to-[#FF8F00] border-2 border-[#FFFFFF] flex items-center justify-center text-2xl sm:text-3xl shadow-md shrink-0">
              ☀️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#FFE082]/20 border border-[#FFD54F]/50 text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                  {isEn ? 'Vedic Solar Deities' : 'ద్వాదశ ఆదిత్యుల వైభవం'}
                </span>
                <span className="text-[10px] text-[#FFD54F] font-medium hidden sm:inline">
                  • {isEn ? 'Kashyapa & Aditi Lineage' : 'కశ్యప ప్రజాపతి – అదితి సంతతి'}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-[#FFE082] font-telugu-serif tracking-tight leading-tight mt-0.5">
                {isEn ? '12 Adityas (Dvadasha Adityas)' : '12 మంది ఆదిత్యులు (ద్వాదశ ఆదిత్యులు)'}
              </h2>
              <p className="text-[11px] sm:text-xs text-[#FFF8E1]/85 line-clamp-1">
                {isEn
                  ? 'The 12 Solar manifestations of Lord Surya governing the months & Cosmic Time Wheel'
                  : 'సూర్య భగవానుని 12 దివ్య రూపాలు, సంవత్సరంలోని 12 నెలలు & కాల చక్ర అధిపతులు'}
              </p>
            </div>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 rounded-xl bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] border border-[#FFE082]/40 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="పాఠాన్ని కాపీ చేయండి / Copy Full Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? (isEn ? 'Copied!' : 'కాపీ అయింది!') : (isEn ? 'Copy' : 'కాపీ')}</span>
            </button>
            <button
              onClick={() => setIsAdityasOpen(false)}
              className="w-9 h-9 rounded-full bg-[#FFFFFF]/15 hover:bg-[#FFFFFF]/30 text-[#FFFDF7] flex items-center justify-center border border-[#FFFFFF]/30 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. SUB-HEADER / VIEW SWITCHER TABS */}
        {/* ============================================================ */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#FAF7F0] border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FFFFFF] text-[#5D4037] hover:bg-[#FFF3E0] border border-[#E8DCC4]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{isEn ? 'Card Breakdown (12 Forms)' : '12 రూపాలు & ప్రాముఖ్యత (కార్డులు)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'raw'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FFFFFF] text-[#5D4037] hover:bg-[#FFF3E0] border border-[#E8DCC4]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEn ? 'Full Passage View' : 'సంపూర్ణ పాఠం (Full Text)'}</span>
            </button>
          </div>

          <div className="text-[11px] font-bold text-[#D84315] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>{isEn ? '12 Months • 12 Manifestations' : '12 నెలలు • 12 ఆదిత్యులు'}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. MODAL SCROLLABLE BODY */}
        {/* ============================================================ */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Top Decorative Introduction Banner */}
          <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFDE7] to-[#FFF3E0] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xs space-y-2 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-7xl opacity-15 pointer-events-none select-none">
              ☀️
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D84315] animate-ping" />
              <h3 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Origin of the Dvadasha Adityas' : 'ద్వాదశ ఆదిత్యుల ఆవిర్భావ రహస్యము'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed font-telugu-serif font-medium">
              {isEn ? ADITYAS_INTRO_EN : ADITYAS_INTRO_TE}
            </p>
          </div>

          {/* ============================================================ */}
          {/* TAB 1: STRUCTURED CARDS VIEW */}
          {/* ============================================================ */}
          {activeTab === 'cards' && (
            <div className="space-y-6">
              {/* Section Header: 12 రూపాలు మరియు వాటి ప్రాముఖ్యత */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b-2 border-[#D4AF37]">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-[#D84315]" />
                    <h4 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif">
                      {isEn ? '12 Solar Manifestations and Their Sacred Significance' : '12 రూపాలు మరియు వాటి ప్రాముఖ్యత'}
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#D84315] bg-[#FFF8E1] px-2.5 py-0.5 rounded-full border border-[#D4AF37]">
                    {isEn ? '12 Solar Months' : '12 సౌర మాసాలు'}
                  </span>
                </div>
                <p className="text-xs text-[#5D4037] font-medium mb-4">
                  {isEn
                    ? 'In each month of the year, a specific Aditya presides over creation and sustains the cosmic order:'
                    : 'సంవత్సరంలోని ఒక్కో నెలకు ఒక్కో ఆదిత్యుడు అధిపతిగా ఉంటూ ఈ సృష్టిని నడిపిస్తుంటాడు:'}
                </p>

                {/* 12 Adityas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {TWELVE_ADITYAS_LIST.map((aditya) => (
                    <div
                      key={aditya.id}
                      className="group bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] p-3.5 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
                    >
                      <div>
                        {/* Card Top: Number, Icon, Name, Month Pill */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/50 text-[#7B1113] text-xs font-black flex items-center justify-center shrink-0">
                              {aditya.id}
                            </span>
                            <span className="text-xl shrink-0 group-hover:scale-115 transition-transform">
                              {aditya.icon}
                            </span>
                            <div>
                              <h5 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif leading-tight">
                                {isEn ? aditya.nameEn : aditya.nameTe}
                              </h5>
                              {!isEn && (
                                <span className="text-[10px] text-[#8C1D24] font-medium">
                                  {aditya.nameEn}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#D84315] border border-[#FFE082] whitespace-nowrap shadow-2xs">
                            {isEn ? aditya.monthEn : aditya.monthTe}
                          </span>
                        </div>

                        {/* Card Body: Role description */}
                        <div className="bg-[#FAF7F0] rounded-xl p-2.5 border border-[#E8DCC4] text-xs text-[#2C1810] leading-snug">
                          <span className="text-[#D84315] font-bold mr-1">•</span>
                          <span className="font-medium font-telugu-serif">
                            {isEn ? aditya.roleEn : aditya.roleTe}
                          </span>
                          <span className="text-[11px] text-[#5D4037] font-semibold block mt-1">
                            ({isEn ? aditya.monthEn : aditya.monthTe})
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: ఆధ్యాత్మిక మరియు లౌకిక ప్రాముఖ్యత */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3 pb-1.5 border-b-2 border-[#D4AF37]">
                  <Sparkles className="w-5 h-5 text-[#D84315]" />
                  <h4 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif">
                    {isEn ? 'Spiritual and Mundane Significance' : 'ఆధ్యాత్మిక మరియు లౌకిక ప్రాముఖ్యత'}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {ADITYAS_SIGNIFICANCE.map((sig, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-[#FFFFFF] to-[#FFFDF7] p-4 rounded-2xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] shadow-xs space-y-2 transition-all hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{sig.icon}</span>
                        <h5 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                          {isEn ? sig.titleEn : sig.titleTe}
                        </h5>
                      </div>
                      <p className="text-xs text-[#2C1810] leading-relaxed font-telugu-serif font-medium">
                        • {isEn ? sig.descEn : sig.descTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 2: FULL RAW TEXT VIEW */}
          {/* ============================================================ */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#7B1113]">
                  {isEn ? 'Original Telugu Sacred Passage:' : 'మూల తెలుగు ప్రామాణిక పాఠ్యము:'}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 rounded-xl bg-[#7B1113] hover:bg-[#5E0011] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'కాపీ చేయబడింది!' : 'పాఠం కాపీ చేయండి'}</span>
                </button>
              </div>

              <div className="bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border-2 border-[#D4AF37] shadow-sm">
                <div className="text-sm sm:text-base text-[#2C1810] font-telugu-serif leading-relaxed whitespace-pre-line select-text">
                  {ADITYAS_RAW_TELUGU_TEXT}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* 4. MODAL FOOTER */}
        {/* ============================================================ */}
        <div className="bg-[#FAF7F0] px-4 sm:px-6 py-3 border-t border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#7B1113] font-bold font-telugu-serif">
            <span>☀️ ఓం సూర్యాయ నమః</span>
            <span className="text-[#D4AF37]">•</span>
            <span>ఓం ఆదిత్యాయ నమః</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAdityasOpen(false)}
              className="px-4 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#5E0011] text-[#FFE082] text-xs font-bold transition-all shadow-xs cursor-pointer border border-[#D4AF37]"
            >
              {isEn ? 'Close Window' : 'మూసివేయి (Close)'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
