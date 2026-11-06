import React, { useState, useMemo } from 'react';
import { 
  TRAYASTRIMSHAT_GROUPS, 
  KOTI_PHILOSOPHY, 
  type VedicDeity, 
  type VedicCategory 
} from '../../data/trayastrimshatData';
import { useMythology } from '../../context/MythologyContext';
import { 
  Sparkles, 
  BookOpen, 
  Info, 
  X, 
  ChevronRight, 
  Compass,
  CheckCircle2
} from 'lucide-react';

interface TrayastrimshatDevasSectionProps {
  onSelectCharacterFromTree?: (id: string) => void;
}

export const TrayastrimshatDevasSection: React.FC<TrayastrimshatDevasSectionProps> = ({
  onSelectCharacterFromTree
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedDeity, setSelectedDeity] = useState<VedicDeity | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  // Flattened list of all deities
  const allDeities = useMemo(() => {
    return TRAYASTRIMSHAT_GROUPS.flatMap(group => group.deities);
  }, []);

  // Filtered deities based on active tab and search query
  const filteredDeities = useMemo(() => {
    let list = allDeities;

    if (activeTab !== 'all' && activeTab !== 'philosophy') {
      const targetGroup = TRAYASTRIMSHAT_GROUPS.find(g => g.id === activeTab);
      list = targetGroup ? targetGroup.deities : allDeities;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(d => 
        d.nameTe.toLowerCase().includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        d.titleTe.toLowerCase().includes(q) ||
        d.titleEn.toLowerCase().includes(q) ||
        d.elementTe.toLowerCase().includes(q) ||
        d.elementEn.toLowerCase().includes(q) ||
        d.roleTe.toLowerCase().includes(q) ||
        d.roleEn.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allDeities, activeTab, searchQuery]);

  const getCategoryBadgeColor = (category: VedicCategory) => {
    switch (category) {
      case 'vasu': return 'bg-[#E8F5E9] text-[#2E7D32] border-[#81C784]';
      case 'aditya': return 'bg-[#FFF8E1] text-[#E65100] border-[#FFB74D]';
      case 'rudra': return 'bg-[#E3F2FD] text-[#0D47A1] border-[#64B5F6]';
      case 'ashvin': return 'bg-[#FCE4EC] text-[#880E4F] border-[#F06292]';
      case 'supreme': return 'bg-[#F3E5F5] text-[#4A148C] border-[#BA68C8]';
      default: return 'bg-[#FAF7F0] text-[#7B1113] border-[#D4AF37]';
    }
  };

  const getCategoryIcon = (category: VedicCategory) => {
    switch (category) {
      case 'vasu': return '🌿';
      case 'aditya': return '☀️';
      case 'rudra': return '⚡';
      case 'ashvin': return '🐎';
      case 'supreme': return '👑';
      default: return '🕉️';
    }
  };

  return (
    <section id="trayastrimshat-section" className="space-y-6 pt-4 pb-10">
      
      {/* ---------------------------------------------------------------- */}
      {/* 1. SACRED HERO HEADER BANNER                                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2A0800] via-[#4A1208] to-[#1E0804] border-2 border-[#D4AF37] p-5 sm:p-8 text-center text-[#FFFDF7] shadow-2xl">
        <div className="absolute -top-16 -left-16 w-52 h-52 bg-[#FFD54F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[#FF8F00]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Floating Sacred OM Symbol */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF8E1] text-[#7B1113] shadow-lg mb-3 border-2 border-[#FFE082]">
          <span className="text-3xl sm:text-4xl font-serif font-black">🕉️</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black font-telugu-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#FFF8E1] to-[#FFD54F]">
          {isEn ? '33 VEDIC GODS (TRAYASTRIMSHAT DEVAH)' : '33 వైదిక దేవతలు (త్రయస్త్రింశత్ దేవాః)'}
        </h2>
        <p className="text-sm sm:text-base text-[#FFE082] font-semibold mt-1">
          {isEn 
            ? 'The 33 Primordial Divine Forces of the Universe • Cosmic Law, Prana & Nature'
            : 'విశ్వాన్ని శాసించే 33 ఆదిమ ప్రాకృతిక, నైతిక & ప్రాణ శక్తులు • వేద రహస్య తత్త్వ దర్శనం'}
        </p>

        {/* Vedic Scriptural Ribbon */}
        <div className="mt-4 max-w-3xl mx-auto p-3 rounded-xl bg-black/40 backdrop-blur-xs border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="text-center sm:text-left">
            <span className="text-[#FFD54F] font-bold block sm:inline mr-2">దేవో భాతి జగత్ సర్వం దేవైభ్యః జీవితం ధ్రువమ్</span>
            <span className="text-[#D8D2C2] text-[11px] block sm:inline">|| సమస్త జగత్తును ప్రకాశింపజేసే దివ్య శక్తులు ||</span>
          </div>
          <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-[#D4AF37]/30 pt-2 sm:pt-0 sm:pl-3">
            <span className="text-[#FFE082] font-bold font-telugu-serif block">"ఏకం సద్ విప్రా బహుధా వదంతి"</span>
            <span className="text-[11px] text-[#C5A059]">ఋగ్వేదము 1.164.46</span>
          </div>
        </div>

        {/* Five Cosmic Group Summary Badges */}
        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap text-xs font-bold">
          <span className="px-3 py-1 rounded-full bg-[#1B5E20]/80 border border-[#81C784] text-[#C8E6C9] flex items-center gap-1.5 shadow-xs">
            <span>🌿 8 వసువులు (8 Vasus)</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#E65100]/80 border border-[#FFB74D] text-[#FFE0B2] flex items-center gap-1.5 shadow-xs">
            <span>☀️ 12 ఆదిత్యులు (12 Adityas)</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0D47A1]/80 border border-[#64B5F6] text-[#BBDEFB] flex items-center gap-1.5 shadow-xs">
            <span>⚡ 11 రుద్రులు (11 Rudras)</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#4A148C]/80 border border-[#BA68C8] text-[#E1BEE7] flex items-center gap-1.5 shadow-xs">
            <span>🐎 2 అశ్వినులు / 1 ఇంద్రుడు + 1 ప్రజాపతి</span>
          </span>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 2. PHILOSOPHY HIGHLIGHT BOX ("33 KOTI" MEANING)                  */}
      {/* ---------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF7] to-[#FFF3CD] border-2 border-[#D4AF37] shadow-md space-y-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#7B1113] text-[#FFE082] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2 flex-wrap">
              <span>{isEn ? KOTI_PHILOSOPHY.titleEn : KOTI_PHILOSOPHY.titleTe}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D84315] text-white font-sans font-semibold">
                {isEn ? 'Vedic Sanskrit Clarification' : 'వైదిక సంస్కృత నిరూపణ'}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#7B1113] font-semibold">
              {isEn ? KOTI_PHILOSOPHY.subTitleEn : KOTI_PHILOSOPHY.subTitleTe}
            </p>
            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed pt-1">
              {isEn ? KOTI_PHILOSOPHY.sanskritMeaningEn : KOTI_PHILOSOPHY.sanskritMeaningTe}
            </p>
          </div>
        </div>

        {/* 4 Pillars of Vedic 33 Koti */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-[#E8DCC4]">
          {(isEn ? KOTI_PHILOSOPHY.pointsEn : KOTI_PHILOSOPHY.pointsTe).map((point, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-[#FFFFFF] p-2.5 rounded-xl border border-[#E8DCC4] text-xs text-[#2C1810] leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 3. CONTROLS: TABS & LIVE SEARCH                                   */}
      {/* ---------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#FFFDF7] p-3 rounded-2xl border border-[#E8DCC4] shadow-xs">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/40 border border-[#E8DCC4]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? 'All 33 Deities' : 'సకల 33 దేవతలు'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">{allDeities.length}</span>
          </button>

          {TRAYASTRIMSHAT_GROUPS.map(group => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === group.id
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/40 border border-[#E8DCC4]'
              }`}
            >
              <span>{isEn ? group.nameEn : group.nameTe}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">{group.deities.length}</span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? 'Search 33 Vedic Gods...' : 'దేవత పేరు లేదా తత్త్వం వెతకండి...'}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] focus:border-[#D4AF37] focus:outline-hidden text-xs text-[#2C1810]"
          />
          <Compass className="w-3.5 h-3.5 text-[#8D6E63] absolute left-2.5 top-2.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-[#8D6E63] hover:text-[#7B1113]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 4. VISUAL SHOWCASE PANELS: MATSYA PURANA SCULPTURE & ASHVINS     */}
      {/* ---------------------------------------------------------------- */}
      {(activeTab === 'all' || activeTab === 'rudras' || activeTab === 'ashvins_and_sovereigns') && !searchQuery && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Matsya Purana 11 Rudras Ancient Sculpture Feature Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0D47A1]/5 via-[#FFFFFF] to-[#E3F2FD]/40 border-2 border-[#1976D2]/40 shadow-sm flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-[#1976D2] shadow-md shrink-0 bg-[#0A192F]">
              <img 
                src="./images/divine/rudras_matsya_purana.jpg" 
                alt="11 Rudras Sculpture"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0D47A1] text-white text-[10px] font-bold">
                {isEn ? 'Ancient Matsya Puranam Iconography' : 'మత్స్య పురాణ ఏకాదశ రుద్ర దివ్య శిలా రూపం'}
              </span>
              <h4 className="text-base font-bold text-[#0D47A1] font-telugu-serif">
                {isEn ? 'Eleven Rudras (Storm & Prana Deities)' : 'ఏకాదశ రుద్రులు (ప్రాణ రక్షక శివ శక్తులు)'}
              </h4>
              <p className="text-xs text-[#37474F] leading-relaxed">
                {isEn 
                  ? 'Canonical Matsya Purana enumeration: Kapāli, Pingala, Bhīma, Virūpāksha, Vilohita, Ajaikapāda, Ahirbudhnya, Shāsta, Shambhu, Chanda, Bhava. They govern the 10 pranas and the inner soul.'
                  : 'మత్స్య పురాణ ప్రామాణిక నామావళి: కపాలి, పింగళుడు, భీముడు, విరూపాక్షుడు, విలోహితుడు, అజైకపాత్, అహిర్బుధ్న్య, శాస్త, శంభువు, చండుడు, భవుడు. శరీర ప్రాణవాయువులను రక్షించే లయకారక చైతన్యాలు.'}
              </p>
              <div className="pt-1 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#E3F2FD] border border-[#90CAF9] text-[#0D47A1] font-bold">
                  ✦ 10 ప్రాణాలు + 1 ఆత్మ
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#E3F2FD] border border-[#90CAF9] text-[#0D47A1] font-bold">
                  ✦ శతపథ బ్రాహ్మణ ప్రమాణం
                </span>
              </div>
            </div>
          </div>

          {/* Ashwini Kumaras Healing Mandapam Feature Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4A148C]/5 via-[#FFFFFF] to-[#F3E5F5]/40 border-2 border-[#7B1FA2]/40 shadow-sm flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-[#7B1FA2] shadow-md shrink-0 bg-[#FAF7F0]">
              <img 
                src="./images/divine/ashvins_twins.jpg" 
                alt="Two Ashvins Mandapam"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="px-2.5 py-0.5 rounded-full bg-[#4A148C] text-[#FFE082] text-[10px] font-bold">
                {isEn ? 'Divine Healers & Masters of Ayurveda' : 'దేవ వైద్యులు • ఆయుర్వేద రక్షకులు'}
              </span>
              <h4 className="text-base font-bold text-[#4A148C] font-telugu-serif">
                {isEn ? 'Two Ashvins (Nasatya & Dasra)' : 'అశ్విని కుమారులు (నాసత్యుడు & దస్రుడు)'}
              </h4>
              <p className="text-xs text-[#37474F] leading-relaxed">
                {isEn 
                  ? 'The twin horse-headed physicians of heaven who bring twilight illumination, heal afflictions, restore sight to the blind, and gifted youth to Sage Chyavana (origin of Chyavanaprash).'
                  : 'సూర్యుని పుత్రులైన అశ్వముఖ దేవ వైద్యులు. సంధ్యాకాంతికి, శస్త్రచికిత్సలకు, ఆయుర్వేదానికి అధిపతులు. వృద్ధుడైన చ్యవన మహర్షికి యౌవనాన్ని ప్రసాదించి చ్యవనప్రాశకు మూలకర్తలయ్యారు.'}
              </p>
              <div className="pt-1 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#F3E5F5] border border-[#CE93D8] text-[#4A148C] font-bold">
                  ✦ ఆయుర్వేద పీఠం
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#F3E5F5] border border-[#CE93D8] text-[#4A148C] font-bold">
                  ✦ ఋగ్వేద సంహిత 33వ స్థానం
                </span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 5. INTERACTIVE 33 DEITIES CARD GRID                               */}
      {/* ---------------------------------------------------------------- */}
      <div className="space-y-4">
        
        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-[#5D4037] border-b border-[#E8DCC4] pb-2 font-semibold">
          <span>
            {isEn 
              ? `Showing ${filteredDeities.length} of ${allDeities.length} Vedic Deities`
              : `మొత్తం ${allDeities.length} వైదిక దేవతలలో ${filteredDeities.length} దేవతలు దర్శనమిస్తున్నారు`}
          </span>
          {searchQuery && (
            <span className="text-[#D84315]">
              "{searchQuery}" అన్వేషణ ఫలితాలు
            </span>
          )}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredDeities.map(deity => (
            <div
              key={deity.id}
              onClick={() => setSelectedDeity(deity)}
              className="group cursor-pointer bg-[#FFFDF7] rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-lg transition-all transform hover:-translate-y-1 p-2.5 flex flex-col justify-between space-y-2 relative"
            >
              {/* Category Indicator Icon Badge */}
              <div className="absolute top-2 right-2 z-10">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${getCategoryBadgeColor(deity.category)}`}>
                  {getCategoryIcon(deity.category)} #{deity.number}
                </span>
              </div>

              {/* Deity Portrait Image Box */}
              <div className="w-full aspect-square rounded-lg overflow-hidden border border-[#E8DCC4] bg-[#FAF7F0] relative group-hover:border-[#D4AF37]">
                {!imageErrorMap[deity.id] ? (
                  <img 
                    src={deity.image} 
                    alt={deity.nameEn}
                    onError={() => handleImageError(deity.id)}
                    className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] text-[#7B1113] p-1 text-center">
                    <span className="text-3xl">{getCategoryIcon(deity.category)}</span>
                    <span className="text-[10px] font-bold line-clamp-1 mt-1">{isEn ? deity.nameEn : deity.nameTe}</span>
                  </div>
                )}
              </div>

              {/* Deity Name & Elemental Title */}
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif line-clamp-1 group-hover:text-[#D84315] transition-colors">
                  {isEn ? deity.nameEn : deity.nameTe}
                </h4>
                <p className="text-[10px] text-[#D84315] font-semibold line-clamp-1">
                  {isEn ? deity.titleEn : deity.titleTe}
                </p>
                <p className="text-[10px] text-[#5D4037] line-clamp-2 leading-tight">
                  {isEn ? deity.roleEn : deity.roleTe}
                </p>
              </div>

              {/* Footer Pill */}
              <div className="pt-1 border-t border-[#F0E6D2] flex items-center justify-between text-[10px] font-bold text-[#7B1113]">
                <span className="text-[9px] text-[#8D6E63] truncate">
                  {isEn ? deity.elementEn : deity.elementTe}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D84315] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 6. DEITY DETAIL MODAL SYSTEM                                      */}
      {/* ---------------------------------------------------------------- */}
      {selectedDeity && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={() => setSelectedDeity(null)}
        >
          <div 
            className="bg-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] max-w-xl w-full p-5 sm:p-7 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDeity(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#E8DCC4] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#FAF7F0] shrink-0">
                {!imageErrorMap[selectedDeity.id] ? (
                  <img 
                    src={selectedDeity.image} 
                    alt={selectedDeity.nameEn}
                    onError={() => handleImageError(selectedDeity.id)}
                    className="w-full h-full object-contain p-1" 
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#7B1113] to-[#D84315] text-[#FFE082]">
                    <span className="text-3xl">{getCategoryIcon(selectedDeity.category)}</span>
                  </div>
                )}
              </div>

              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryBadgeColor(selectedDeity.category)}`}>
                  {getCategoryIcon(selectedDeity.category)} #{selectedDeity.number} • {isEn ? selectedDeity.elementEn : selectedDeity.elementTe}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#7B1113] font-telugu-serif mt-1">
                  {isEn ? selectedDeity.nameEn : selectedDeity.nameTe}
                </h3>
                <p className="text-xs text-[#D84315] font-semibold">
                  {isEn ? selectedDeity.titleEn : selectedDeity.titleTe}
                </p>
              </div>
            </div>

            {/* Narrative Explanation */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
                {isEn ? 'Theological & Cosmic Narrative:' : 'వైదిక తత్త్వ విశ్లేషణ & బ్రహ్మాండ కార్యము:'}
              </h4>
              <p className="text-sm text-[#2C1810] leading-relaxed bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4]">
                {isEn ? selectedDeity.descEn : selectedDeity.descTe}
              </p>
            </div>

            {/* Vedic Significance */}
            <div className="p-3 rounded-xl bg-[#FFF8E1] border border-[#FFE082] space-y-1 text-xs">
              <span className="font-bold text-[#7B1113] block">
                {isEn ? 'Spiritual & Human Life Significance:' : 'ఆధ్యాత్మిక సాధన & మానవ జీవిత ప్రాముఖ్యత:'}
              </span>
              <p className="text-[#5D4037] leading-relaxed">
                {isEn ? selectedDeity.vedicSignificanceEn : selectedDeity.vedicSignificanceTe}
              </p>
            </div>

            {/* Vedic Verse & Scripture Reference */}
            {selectedDeity.vedicVerse && (
              <div className="space-y-1.5 p-3 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082]/40 border border-[#D4AF37]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#D84315]">
                  <BookOpen className="w-4 h-4" />
                  <span>{isEn ? 'Vedic Scripture Verse:' : 'మూల వేద ప్రమాణ శ్లోకము:'}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif italic">
                  {selectedDeity.vedicVerse}
                </p>
                {selectedDeity.vedicRef && (
                  <p className="text-[11px] text-[#5D4037]">
                    ✦ {selectedDeity.vedicRef}
                  </p>
                )}
              </div>
            )}

            {/* Sacred Symbols */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
                {isEn ? 'Divine Symbols & Attributes:' : 'దివ్య చిహ్నాలు & వాహనములు:'}
              </h4>
              <div className="flex items-center gap-1.5 flex-wrap">
                {(isEn ? selectedDeity.symbolsEn : selectedDeity.symbolsTe).map((sym, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] border border-[#D4AF37] text-xs font-bold text-[#7B1113]"
                  >
                    ✦ {sym}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedDeity(null);
                  if (onSelectCharacterFromTree) {
                    onSelectCharacterFromTree(selectedDeity.id);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{isEn ? 'Explore Character in Tree' : 'వంశవృక్షంలో ఈ దేవతను చూడండి'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedDeity(null)}
                className="px-3 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#E8DCC4] text-[#5D4037] text-xs font-semibold transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
