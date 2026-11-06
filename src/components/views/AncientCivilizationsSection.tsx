import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import {
  ALL_CIVILIZATIONS_DATA,
  CIVILIZATIONS_COMPARISON_MATRIX,
  CIVILIZATION_GALLERY_INFOGRAPHICS,
  TEN_ANCIENT_CIVILIZATIONS_SUMMARY
} from '../../data/ancientCivilizationsData';
import {
  Search,
  Maximize2,
  Compass,
  Landmark,
  Scale,
  Sparkles,
  MapPin,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface Props {
  onOpenLightbox?: (img: { src: string; title: string; subtitle: string }) => void;
}

export const AncientCivilizationsSection: React.FC<Props> = ({ onOpenLightbox }) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  type CivTab =
    | 'all'
    | 'indus_valley'
    | 'mesopotamia'
    | 'egypt'
    | 'china'
    | 'china_shang'
    | 'greece'
    | 'rome'
    | 'persia'
    | 'maya'
    | 'inca'
    | 'indigenous_americas'
    | 'comparison';
  const [activeTab, setActiveTab] = useState<CivTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSiteModal, setSelectedSiteModal] = useState<{
    name: string;
    location: string;
    image: string;
    features: string[];
  } | null>(null);

  const handleOpenImage = (src: string, title: string, subtitle: string) => {
    if (onOpenLightbox) {
      onOpenLightbox({ src, title, subtitle });
    }
  };

  // Filtered Summary Cards for the Overview Grid
  const filteredSummaryCards = useMemo(() => {
    if (!searchQuery.trim()) return TEN_ANCIENT_CIVILIZATIONS_SUMMARY;
    const q = searchQuery.toLowerCase();
    return TEN_ANCIENT_CIVILIZATIONS_SUMMARY.filter(c =>
      c.nameEn.toLowerCase().includes(q) || c.nameTe.includes(q) ||
      c.subtitleEn.toLowerCase().includes(q) || c.subtitleTe.includes(q) ||
      c.summaryEn.toLowerCase().includes(q) || c.summaryTe.includes(q) ||
      c.knownForEn.some(k => k.toLowerCase().includes(q)) ||
      c.knownForTe.some(k => k.includes(q))
    );
  }, [searchQuery]);

  // Filtered Civilizations based on search
  const filteredCivilizations = useMemo(() => {
    let list = ALL_CIVILIZATIONS_DATA;
    if (activeTab !== 'all' && activeTab !== 'comparison') {
      list = list.filter(c => c.id === activeTab || (activeTab === 'china_shang' && c.id === 'china') || (activeTab === 'china' && c.id === 'china_shang'));
    }
    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list.filter(c =>
      c.nameEn.toLowerCase().includes(q) || c.nameTe.includes(q) ||
      c.riverEn.toLowerCase().includes(q) || c.riverTe.includes(q) ||
      c.geographyEn.toLowerCase().includes(q) || c.geographyTe.includes(q) ||
      c.overviewEn.toLowerCase().includes(q) || c.overviewTe.includes(q) ||
      c.majorSitesOrPlaces.some(s =>
        s.nameEn.toLowerCase().includes(q) || s.nameTe.includes(q) ||
        s.locationEn.toLowerCase().includes(q) || s.locationTe.includes(q)
      )
    );
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Hero */}
      <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FAF7F0] to-[#FFF8E1] border-2 border-[#D4AF37]/50 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B1113]/10 text-[#7B1113] text-xs font-bold border border-[#7B1113]/20">
              <Landmark className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'World Antiquity: 10 Great Civilizations' : 'ప్రపంచ ప్రాచీన 10 మహోన్నత నాగరికతలు'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#7B1113] font-telugu-serif">
              {isEn ? '10 Ancient Civilizations of the World' : 'ప్రపంచంలోని 10 మహోన్నత ప్రాచీన నాగరికతలు'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5D4037] max-w-3xl leading-relaxed">
              {isEn
                ? 'Explore the 10 timeless ancient civilizations from the foundational chart: Indus Valley, Mesopotamia, Egypt, China (Shang), Greece, Rome, Persia, Maya, Inca, and Indigenous Americas — unique people, magnificent innovations, and enduring legacies.'
                : 'ప్రాచీన మానవ వికాసానికి దిక్సూచిగా నిలిచిన 10 మహోన్నత నాగరికతలు: సింధు లోయ, మెసపటోమియా, ఈజిప్ట్, చైనా (షాంగ్), గ్రీస్, రోమ్, పర్షియా, మాయా, ఇంకా మరియు అమెరికా దేశీయ సంస్కృతుల సమగ్ర అధ్యయనం.'}
            </p>
          </div>

          {/* Quick Infographic Action Buttons */}
          <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
            {CIVILIZATION_GALLERY_INFOGRAPHICS.map((poster) => (
              <button
                key={poster.id}
                onClick={() => handleOpenImage(poster.image, isEn ? poster.titleEn : poster.titleTe, isEn ? poster.subtitleEn : poster.subtitleTe)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span className="truncate max-w-[190px]">
                  {poster.id.includes('world')
                    ? (isEn ? '🌍 10 Civilizations Poster' : '🌍 10 నాగరికతల చార్ట్')
                    : poster.id.includes('harappan')
                      ? (isEn ? '🏺 Harappan (2600-1900 BCE)' : '🏺 హరప్పా సమగ్ర పోస్టర్')
                      : poster.id.includes('indus') 
                        ? (isEn ? 'Indus Valley Poster' : 'సింధు చార్ట్') 
                        : poster.id.includes('meso') 
                          ? (isEn ? 'Mesopotamia Poster' : 'మెసపటోమియా చార్ట్') 
                          : (isEn ? 'Egypt Poster' : 'ఈజిప్ట్ చార్ట్')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Tabs Selector Pills & Search Bar */}
        <div className="mt-6 pt-4 border-t border-[#E8DCC4] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', labelEn: 'All 10 Civilizations (Cards)', labelTe: 'అన్ని 10 నాగరికతల కార్డులు', icon: '🌍' },
              { id: 'indus_valley', labelEn: 'Indus Valley', labelTe: 'సింధు లోయ', icon: '🏺' },
              { id: 'mesopotamia', labelEn: 'Mesopotamia', labelTe: 'మెసపటోమియా', icon: '🏛️' },
              { id: 'egypt', labelEn: 'Ancient Egypt', labelTe: 'ఈజిప్ట్', icon: '🔺' },
              { id: 'china', labelEn: 'China (Shang)', labelTe: 'చైనా (షాంగ్)', icon: '🐉' },
              { id: 'greece', labelEn: 'Ancient Greece', labelTe: 'గ్రీస్', icon: '🏺' },
              { id: 'rome', labelEn: 'Ancient Rome', labelTe: 'రోమ్ సామ్రాజ్యం', icon: '⚔️' },
              { id: 'persia', labelEn: 'Persian Empire', labelTe: 'పర్షియా (ఇరాన్)', icon: '🦅' },
              { id: 'maya', labelEn: 'Maya', labelTe: 'మాయా', icon: '🌞' },
              { id: 'inca', labelEn: 'Inca Empire', labelTe: 'ఇంకా సామ్రాజ్యం', icon: '⛰️' },
              { id: 'indigenous_americas', labelEn: 'Indigenous Americas', labelTe: 'అమెరికా తెగలు', icon: '🪶' },
              { id: 'comparison', labelEn: 'Comparative Matrix', labelTe: 'తులనాత్మక పట్టిక', icon: '⚖️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as CivTab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                  (activeTab === tab.id || (tab.id === 'china' && activeTab === 'china_shang'))
                    ? 'bg-[#7B1113] text-[#FFE082] border border-[#D4AF37]'
                    : 'bg-[#FFFFFF] text-[#5D4037] border border-[#E8DCC4] hover:bg-[#FFF8E1]'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{isEn ? tab.labelEn : tab.labelTe}</span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8D6E63]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search sites, rivers, arts, laws...' : 'స్థావరాలు, నదులు, కళలు, చట్టాలు శోధించండి...'}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white border border-[#E8DCC4] focus:outline-none focus:border-[#D4AF37] text-[#2C1810]"
            />
          </div>
        </div>
      </div>

      {/* 10 ANCIENT CIVILIZATIONS POSTER GRID (Always displayed on page) */}
      {activeTab !== 'comparison' && (
        <div className="bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-md p-4 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#D4AF37]/50 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7B1113]/10 text-[#7B1113] text-[11px] font-bold border border-[#7B1113]/20">
                <span>🌿</span>
                <span>{isEn ? '6th Grade History Poster Overview' : '6వ తరగతి ప్రాచీన నాగరికతల సమగ్ర చార్ట్'}</span>
                <span>🌿</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#7B1113] tracking-wide font-telugu-serif uppercase">
                {isEn ? 'ANCIENT CIVILIZATIONS' : 'ప్రాచీన నాగరికతలు'}
              </h3>
              <p className="text-xs sm:text-sm italic font-semibold text-[#5D4037]">
                {isEn 
                  ? 'Different places. Unique people. Timeless legacies. Click any card below to view that civilization’s full details directly underneath.' 
                  : 'విభిన్న ప్రదేశాలు • విశిష్ట ప్రజలు • కాలాతీత శాశ్వత వారసత్వాలు. సమగ్ర తవ్వకాలు, సాంకేతికతలు, వాస్తు వివరాల కోసం క్రింది కార్డులపై క్లిక్ చేయండి.'}
              </p>
            </div>

            <button
              onClick={() => handleOpenImage(
                './images/indian_history/ancient_civilizations_world.jpg',
                isEn ? 'Ancient Civilizations Poster (HD)' : 'ప్రాచీన నాగరికతల చార్ట్ (HD)',
                isEn ? 'Different places. Unique people. Timeless legacies.' : 'విభిన్న ప్రదేశాలు • విశిష్ట ప్రజలు • కాలాతీత వారసత్వాలు'
              )}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#5c0d0e] border border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all shrink-0"
            >
              <Maximize2 className="w-4 h-4 text-[#FFE082]" />
              <span>{isEn ? 'View Original Poster in HD' : 'మూల పోస్టర్ HD లో చూడండి'}</span>
            </button>
          </div>

          {/* 10 Visual Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredSummaryCards.map((civ) => {
              const isSelected = activeTab === civ.id || (civ.id === 'china' && activeTab === 'china_shang') || (civ.id === 'china_shang' && activeTab === 'china');
              return (
                <div
                  key={civ.id}
                  onClick={() => {
                    if (isSelected) {
                      setActiveTab('all');
                    } else {
                      setActiveTab((civ.id === 'china' ? 'china' : civ.id) as CivTab);
                      setTimeout(() => {
                        document.getElementById('civ-details-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className={`bg-[#FFFFFF] rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group hover:-translate-y-1 relative ${
                    isSelected 
                      ? 'ring-4 ring-[#D4AF37] border-2 border-[#7B1113] shadow-2xl scale-[1.02] bg-[#FFFDF7]' 
                      : 'border border-[#D4AF37]/70 hover:border-[#7B1113] hover:shadow-lg'
                  }`}
                >
                  {/* Selected Indicator Banner */}
                  {isSelected && (
                    <div className="bg-[#D4AF37] text-[#4A0012] text-[9.5px] font-black uppercase tracking-wider py-1 px-2 text-center shadow-xs flex items-center justify-center gap-1">
                      <span>✓</span>
                      <span>{isEn ? 'Viewing Below' : 'వివరాలు క్రింద చూడండి'}</span>
                    </div>
                  )}

                  {/* Ribbon Header */}
                  <div className={`${isSelected ? 'bg-[#5c0d0e]' : 'bg-[#7B1113]'} text-[#FFE082] px-2.5 py-1.5 text-center border-b border-[#D4AF37]/50`}>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider truncate">
                      {isEn ? civ.nameEn : civ.nameTe}
                    </h4>
                    <p className="text-[10px] text-[#FFE082]/90 italic truncate">
                      {isEn ? civ.subtitleEn : civ.subtitleTe}
                    </p>
                  </div>

                  {/* Landscape Image with Inset Artifact Badge */}
                  <div className="relative h-28 w-full bg-[#2C1810] overflow-hidden">
                    <img
                      src={civ.landscapeImage}
                      alt={isEn ? civ.nameEn : civ.nameTe}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Floating Inset Artifact Photo */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenImage(civ.artifactImage, (isEn ? civ.nameEn : civ.nameTe) + (isEn ? ' Artifact' : ' శిల్పం / అవశేషం'), isEn ? civ.subtitleEn : civ.subtitleTe);
                      }}
                      title={isEn ? 'Click to inspect artifact' : 'శిల్పం / అవశేషాన్ని చూడండి'}
                      className="absolute bottom-1.5 right-1.5 w-11 h-11 rounded-lg bg-black/60 border-2 border-[#D4AF37] overflow-hidden shadow-md cursor-pointer hover:scale-115 transition-transform"
                    >
                      <img
                        src={civ.artifactImage}
                        alt="Artifact"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <span className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white bg-black/70 px-1.5 py-0.5 rounded border border-white/20">
                      {civ.id === 'indus_valley' ? '🏺 Indus' : civ.id === 'mesopotamia' ? '🏛️ Meso' : civ.id === 'egypt' ? '🔺 Nile' : (civ.id === 'china' || civ.id === 'china_shang') ? '🐉 China' : civ.id === 'greece' ? '🏛️ Greece' : civ.id === 'rome' ? '⚔️ Rome' : civ.id === 'persia' ? '🦅 Persia' : civ.id === 'maya' ? '🌞 Maya' : civ.id === 'inca' ? '⛰️ Inca' : '🪶 Americas'}
                    </span>
                  </div>

                  {/* Narrative Summary */}
                  <div className="p-2.5 flex-1 flex flex-col justify-between space-y-2">
                    <p className="text-[11px] text-[#2C1810] leading-snug line-clamp-3">
                      {isEn ? civ.summaryEn : civ.summaryTe}
                    </p>

                    {/* Known For Bullets */}
                    <div className="bg-[#FAF7F0] p-2 rounded-lg border border-[#E8DCC4] space-y-1">
                      <span className="text-[9px] font-black uppercase text-[#7B1113] tracking-wider block">
                        {isEn ? 'KNOWN FOR:' : 'ప్రసిద్ధి చెందినవి:'}
                      </span>
                      <ul className="text-[10px] text-[#5D4037] space-y-0.5 font-medium">
                        {(isEn ? civ.knownForEn : civ.knownForTe).map((item, kIdx) => (
                          <li key={kIdx} className="flex items-center gap-1 truncate">
                            <span className="text-[#D84315] font-bold text-[8px]">•</span>
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deep dive click button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isSelected) {
                          setActiveTab('all');
                        } else {
                          setActiveTab((civ.id === 'china' ? 'china' : civ.id) as CivTab);
                          setTimeout(() => {
                            document.getElementById('civ-details-section')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                      className={`w-full py-1.5 text-[11px] font-bold rounded-md border text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs ${
                        isSelected
                          ? 'bg-[#7B1113] text-[#FFE082] border-[#D4AF37]'
                          : 'bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] hover:text-[#5c0d0e] border-[#D4AF37]/60'
                      }`}
                    >
                      <span>{isSelected ? (isEn ? 'Viewing Details Below ↓' : 'వివరాలు క్రింద చూడండి ↓') : (isEn ? 'Explore Deep Dive ➔' : 'సమగ్ర వివరాలు చూడండి ➔')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Poster Ribbon */}
          <div className="bg-[#7B1113] text-[#FFE082] py-2.5 px-4 rounded-xl border border-[#D4AF37] text-center shadow-inner flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase">
              🌿 {isEn ? 'LEARN FROM THE PAST. THINK BIG TODAY. SHAPE TOMORROW.' : 'గతం నుండి నేర్చుకోండి • నేడు ఉన్నతంగా ఆలోచించండి • రేపటిని నిర్మించండి'} 🌿
            </span>
            <span className="text-[10px] text-[#FFE082]/90 font-medium">
              {isEn ? 'Click any card above to view architectural, archaeological & timeline details' : 'పై కార్డులపై క్లిక్ చేసి సమగ్ర తవ్వకాలు, సాంకేతికతలు, వాస్తు వివరాలను వీక్షించండి'}
            </span>
          </div>
        </div>
      )}

      {/* COMPARATIVE MATRIX TAB VIEW */}
      {activeTab === 'comparison' && (
        <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37]/60 shadow-sm p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#D84315]" />
                <span>{isEn ? 'Comparative Matrix: Indus Valley vs Mesopotamia vs Egypt' : 'తులనాత్మక అధ్యయనం: సింధు లోయ vs మెసపటోమియా vs ఈజిప్ట్'}</span>
              </h3>
              <p className="text-xs text-[#5D4037]">
                {isEn ? 'Direct side-by-side comparison across 10 vital parameters of antiquity.' : 'ప్రాచీన నాగరికతల జీవన విధానం, వాస్తు, లిపి, విజ్ఞానం మరియు క్షీణతలపై సమగ్ర విశ్లేషణ.'}
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]">
              c. 3500 – 500 BCE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#7B1113] text-[#FFE082]">
                  <th className="p-3 font-bold border border-[#D4AF37]/40 w-1/5">{isEn ? 'Parameter / Aspect' : 'అంశం / విభాగం'}</th>
                  <th className="p-3 font-bold border border-[#D4AF37]/40 w-4/15 bg-[#5c0d0e]">🏺 {isEn ? 'Indus Valley (Harappa)' : 'సింధు లోయ (హరప్పా)'}</th>
                  <th className="p-3 font-bold border border-[#D4AF37]/40 w-4/15">🏛️ {isEn ? 'Mesopotamia' : 'మెసపటోమియా'}</th>
                  <th className="p-3 font-bold border border-[#D4AF37]/40 w-4/15 bg-[#5c0d0e]">🔺 {isEn ? 'Ancient Egypt' : 'ప్రాచీన ఈజిప్ట్'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DCC4]">
                {CIVILIZATIONS_COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFFDF7]' : 'bg-[#FAF7F0]'}>
                    <td className="p-3 font-bold text-[#7B1113] border border-[#E8DCC4] bg-[#FFF8E1]/60">
                      {isEn ? row.aspectEn : row.aspectTe}
                    </td>
                    <td className="p-3 text-[#2C1810] border border-[#E8DCC4] leading-relaxed">
                      {isEn ? row.indusEn : row.indusTe}
                    </td>
                    <td className="p-3 text-[#5D4037] border border-[#E8DCC4] leading-relaxed">
                      {isEn ? row.mesoEn : row.mesoTe}
                    </td>
                    <td className="p-3 text-[#2C1810] border border-[#E8DCC4] leading-relaxed">
                      {isEn ? row.egyptEn : row.egyptTe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CIVILIZATIONS DEEP DIVE CARDS: DISPLAY DIRECTLY BELOW THE 10 CARDS FOR THE SELECTED CIVILIZATION */}
      {activeTab !== 'all' && activeTab !== 'comparison' && (
        <div id="civ-details-section" className="space-y-10 scroll-mt-6 animate-fadeIn">
          {filteredCivilizations.map((civ) => (
            <div
              key={civ.id}
              className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37]/80 shadow-xl p-4 sm:p-6 space-y-6"
            >
              {/* Top Navigation Bar: Back to Cards Button & Current Selection Indicator */}
              <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#FAF7F0] via-[#FFFDF7] to-[#FFF8E1] p-3.5 rounded-xl border-2 border-[#D4AF37]/70 shadow-xs flex-wrap">
                <button
                  onClick={() => {
                    setActiveTab('all');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#5c0d0e] border border-[#D4AF37] flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FFE082]" />
                  <span>{isEn ? '← Close Details (Show Only Cards)' : '← వివరాలు మూసివేయండి (కేవలం కార్డులు మాత్రమే చూడండి)'}</span>
                </button>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-[#7B1113] bg-[#FFF8E1] px-3 py-1.5 rounded-full border border-[#D4AF37]/60 flex items-center gap-1.5 shadow-2xs">
                    <span className="text-base">{civ.id === 'indus_valley' ? '🏺' : civ.id === 'mesopotamia' ? '🏛️' : civ.id === 'egypt' ? '🔺' : (civ.id === 'china' || civ.id === 'china_shang') ? '🐉' : civ.id === 'greece' ? '🏛️' : civ.id === 'rome' ? '⚔️' : civ.id === 'persia' ? '🦅' : civ.id === 'maya' ? '🌞' : civ.id === 'inca' ? '⛰️' : '🪶'}</span>
                    <span>{isEn ? `Viewing Full Details: ${civ.nameEn}` : `సమగ్ర తవ్వకాలు, సాంకేతికతలు, వాస్తు వివరాలు: ${civ.nameTe}`}</span>
                  </span>
                </div>
              </div>
              {/* Header Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DCC4] pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                    <span className="text-2xl">
                      {civ.id === 'indus_valley' ? '🏺' : civ.id === 'mesopotamia' ? '🏛️' : civ.id === 'egypt' ? '🔺' : (civ.id === 'china' || civ.id === 'china_shang') ? '🐉' : civ.id === 'greece' ? '🏛️' : civ.id === 'rome' ? '⚔️' : civ.id === 'persia' ? '🦅' : civ.id === 'maya' ? '🌞' : civ.id === 'inca' ? '⛰️' : '🪶'}
                    </span>
                    <span>{isEn ? civ.nameEn : civ.nameTe}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#D84315]">
                    {isEn ? civ.subtitleEn : civ.subtitleTe}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/60">
                    {isEn ? civ.periodEn : civ.periodTe}
                  </span>
                </div>
              </div>

              {/* Top Visual Frame: Exactly Two Columns (Column 1: Landscape Photo, Column 2: Map of Location) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 p-3 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37]/50 shadow-xs">
                {/* Column 1: Civilization Landscape Photo */}
                <div 
                  onClick={() => handleOpenImage(civ.bannerImage, isEn ? civ.nameEn : civ.nameTe, isEn ? civ.periodEn : civ.periodTe)}
                  className="relative h-60 sm:h-72 w-full bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/70 flex flex-col justify-end"
                >
                  <img 
                    src={civ.bannerImage} 
                    alt={isEn ? civ.nameEn : civ.nameTe}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs p-2 text-center bg-black/40">
                    <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                    <span>{isEn ? 'Enlarge City Landscape' : 'నగర దృశ్యం పెద్దదిగా చూడండి'}</span>
                  </div>
                  <div className="relative m-2.5 px-2.5 py-1 rounded-md bg-black/80 text-[#FFE082] text-[10.5px] font-bold border border-[#D4AF37]/60 backdrop-blur-xs flex items-center gap-1.5 self-start shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE082]" />
                    <span>{isEn ? 'Civic Landscape Photo' : 'ప్రాచీన నగర దృశ్యం'}</span>
                  </div>
                </div>

                {/* Column 2: Map of Location & Territorial Extent */}
                <div 
                  onClick={() => handleOpenImage(civ.mapImage!, isEn ? `${civ.nameEn} Territorial Map` : `${civ.nameTe} భౌగోళిక మ్యాప్`, isEn ? civ.geographyEn : civ.geographyTe)}
                  className="relative h-60 sm:h-72 w-full bg-[#FFFDF7] rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/70 flex flex-col justify-end"
                >
                  <img 
                    src={civ.mapImage} 
                    alt={isEn ? `${civ.nameEn} Location Map` : `${civ.nameTe} ప్రాంత పటం`}
                    className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs p-2 text-center bg-black/40">
                    <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                    <span>{isEn ? 'Enlarge Territory Map' : 'భౌగోళిక మ్యాప్ పెద్దదిగా చూడండి'}</span>
                  </div>
                  <div className="relative m-2.5 px-2.5 py-1 rounded-md bg-[#7B1113]/90 text-[#FFE082] text-[10.5px] font-bold border border-[#D4AF37]/60 backdrop-blur-xs flex items-center gap-1.5 self-start shadow-xs">
                    <Compass className="w-3.5 h-3.5 text-[#FFE082]" />
                    <span>{isEn ? 'Map of Location & Extent' : 'భౌగోళిక ప్రాంతం & విస్తీర్ణ పటం'}</span>
                  </div>
                </div>
              </div>

              {/* Geographical Lifelines & Reach Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-[#FFFDF7] border border-[#E8DCC4] text-xs">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                    🌊 {isEn ? 'Lifeline River Basin / Coast:' : 'జీవనది & పరీవాహకం / తీరం:'}
                  </span>
                  <p className="text-xs font-bold text-[#2C1810] mt-0.5">
                    {isEn ? civ.riverEn : civ.riverTe}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                    📍 {isEn ? 'Geographical Reach:' : 'భౌగోళిక ప్రాంతం:'}
                  </span>
                  <p className="text-[11px] text-[#5D4037] leading-snug mt-0.5">
                    {isEn ? civ.geographyEn : civ.geographyTe}
                  </p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2">
                  <div className="p-2 rounded-lg bg-[#FFF8E1] border border-[#FFE082] text-[10.5px] text-[#7B1113] font-semibold w-full sm:w-auto text-center sm:text-right">
                    ⭐ {isEn ? 'Epoch: ' : 'యుగం: '}
                    <span className="font-bold">{isEn ? civ.periodEn : civ.periodTe}</span>
                  </div>
                </div>
              </div>

              {/* Overview Paragraph */}
              <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4]">
                {isEn ? civ.overviewEn : civ.overviewTe}
              </p>

              {/* TIMELINE PHASES */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Chronological Evolution & Major Epochs' : 'కాలక్రమానుసార చారిత్రక దశలు'}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {civ.timelinePhases.map((phase, pIdx) => (
                    <div 
                      key={pIdx}
                      className="bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs text-[#7B1113]">
                          {isEn ? phase.periodEn : phase.periodTe}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FAF7F0] text-[#D84315] border border-[#E8DCC4] inline-block">
                        {isEn ? phase.datesEn : phase.datesTe}
                      </span>
                      <p className="text-[11px] text-[#5D4037] leading-relaxed">
                        {isEn ? phase.descEn : phase.descTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* HARAPPAN CIVILIZATION HALLMARK PILLARS (2600 - 1900 BCE) */}
              {civ.id === 'indus_valley' && (
                <div className="bg-[#FFFDF7] p-4 rounded-xl border-2 border-[#D4AF37]/70 space-y-3.5 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DCC4] pb-2.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                        {isEn ? 'Harappan Civilization Hallmark Pillars (2600 – 1900 BCE)' : 'హరప్పా నాగరికత 4 ప్రధాన స్తంభాలు & జీవన విధానం (క్రీ.పూ. 2600 – 1900)'}
                      </h4>
                    </div>
                    <button
                      onClick={() => handleOpenImage(
                        './images/indian_history/harappan_civilization_poster.jpg',
                        isEn ? 'Harappan Civilization Master Infographic' : 'హరప్పా నాగరికత సమగ్ర ఇన్ఫోగ్రాఫిక్ పోస్టర్',
                        isEn ? '2600 BCE – 1900 BCE: One of the world\'s earliest urban civilizations' : 'క్రీ.పూ. 2600 – 1900: సింధు లోయలో వర్ధిల్లిన ప్రాచీన నగర నాగరికత'
                      )}
                      className="px-2.5 py-1 text-[11px] font-bold text-[#7B1113] bg-[#FAF7F0] hover:bg-[#FFE082] rounded-lg border border-[#D4AF37] flex items-center gap-1 cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? 'View Harappan Poster (HD)' : 'హరప్పా పోస్టర్ HD లో చూడండి'}</span>
                    </button>
                  </div>

                  {/* 4 Feature Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      {
                        titleEn: 'PLANNED CITIES',
                        titleTe: 'ప్రణాళికాబద్ధ నగరాలు',
                        descEn: 'Well-planned cities with grid pattern, baked brick houses, drainage system and public baths.',
                        descTe: 'గ్రిడ్ విధానంలో వీధులు, కాల్చిన ఇటుక గృహాలు, డ్రైనేజీ మరియు మహా స్నానవాటికలు.',
                        img: './images/indian_history/civilization_portraits/ivc_card_planned_cities.jpg'
                      },
                      {
                        titleEn: 'DRAINAGE SYSTEM',
                        titleTe: 'భూగర్భ డ్రైనేజీ',
                        descEn: 'Advanced drainage and sewage system, the most sophisticated of the ancient world.',
                        descTe: 'భూగర్భ మూతలు వేసిన మురుగు కాలువలు, శుభ్రపరిచే మ్యాన్‌హోల్స్ మరియు సోక్ పిట్స్.',
                        img: './images/indian_history/civilization_portraits/ivc_card_drainage.jpg'
                      },
                      {
                        titleEn: 'SEALS & SCRIPT',
                        titleTe: 'ముద్రికలు & లిపి',
                        descEn: 'Used steatite seals with animal motifs and an undeciphered pictographic script.',
                        descTe: 'పశుపతి, ఏకశృంగి (యూనికార్న్) జంతు ముద్రికలు మరియు అస్పష్ట బొమ్మల లిపి.',
                        img: './images/indian_history/civilization_portraits/ivc_card_seals.jpg'
                      },
                      {
                        titleEn: 'TRADE & ECONOMY',
                        titleTe: 'వాణిజ్యం & ఆర్థికం',
                        descEn: 'Engaged in agriculture, crafts, and trade within India and with distant lands like Mesopotamia.',
                        descTe: 'విస్తారమైన వ్యవసాయం, కార్నెలియన్ పూసలు మరియు మెసపటోమియాతో సముద్ర వాణిజ్యం.',
                        img: './images/indian_history/civilization_portraits/ivc_card_trade.jpg'
                      }
                    ].map((card, cIdx) => (
                      <div 
                        key={cIdx} 
                        onClick={() => handleOpenImage(card.img, isEn ? card.titleEn : card.titleTe, isEn ? card.descEn : card.descTe)}
                        className="bg-[#FAF7F0] rounded-xl border border-[#D4AF37]/60 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div className="h-28 w-full bg-[#2C1810] overflow-hidden relative">
                          <img 
                            src={card.img} 
                            alt={card.titleEn} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                            <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                          </div>
                        </div>
                        <div className="p-2 space-y-1">
                          <h5 className="font-bold text-[11px] text-[#7B1113] uppercase tracking-wide">
                            {isEn ? card.titleEn : card.titleTe}
                          </h5>
                          <p className="text-[10px] text-[#5D4037] leading-snug">
                            {isEn ? card.descEn : card.descTe}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Artisans Daily Life Banner */}
                  <div 
                    onClick={() => handleOpenImage(
                      './images/indian_history/civilization_portraits/ivc_daily_life_artisans.jpg',
                      isEn ? 'Harappan Artisans & Daily Life' : 'హరప్పా కళాకారులు & దైనందిన జీవనం',
                      isEn ? 'Pottery making on wheels, carnelian bead crafting, and brick masonry' : 'కుమ్మరి చక్రంపై కుండలు, పూసల తయారీ మరియు ఇటుక నిర్మాణ పనులు'
                    )}
                    className="relative h-36 sm:h-44 w-full bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/60 mt-3"
                  >
                    <img 
                      src="./images/indian_history/civilization_portraits/ivc_daily_life_artisans.jpg" 
                      alt="Harappan Daily Life" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold text-[#FFE082] block">
                          🏺 {isEn ? 'Harappan Artisans, Bead Makers & Potters at Work' : 'హరప్పా నగరంలో కుమ్మరులు, రత్న పూసల కళాకారులు & శ్రామికుల జీవనం'}
                        </span>
                        <span className="text-[10px] text-white/90">
                          {isEn ? 'Click to inspect daily urban craftsmanship in high resolution' : 'హై-రిజల్యూషన్‌లో వీక్షించడానికి క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 1: URBAN PLANNING & ARCHITECTURE (వాస్తు వివరాలు & నగర ప్రణాళిక) */}
              {civ.urbanPlanning && (
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#D4AF37]/50 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2 flex-wrap gap-2">
                    <h4 className="text-sm font-bold text-[#7B1113] flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? civ.urbanPlanning.titleEn : civ.urbanPlanning.titleTe}</span>
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]/50 shadow-2xs">
                      🏛️ {isEn ? 'Architecture & Town Planning (వాస్తు వివరాలు)' : 'వాస్తు వివరాలు & నగర నిర్మాణం'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {civ.urbanPlanning.image && (
                      <div 
                        onClick={() => handleOpenImage(civ.urbanPlanning!.image!, isEn ? civ.urbanPlanning!.titleEn : civ.urbanPlanning!.titleTe, isEn ? civ.nameEn : civ.nameTe)}
                        className="md:col-span-5 h-44 sm:h-52 bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-sm border border-[#D4AF37]/60 relative"
                      >
                        <img 
                          src={civ.urbanPlanning.image} 
                          alt="Urban Planning"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                          <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                          <span>{isEn ? 'Enlarge View' : 'చిత్రం పెద్దదిగా చూడండి'}</span>
                        </div>
                      </div>
                    )}
                    <div className={`${civ.urbanPlanning.image ? 'md:col-span-7' : 'md:col-span-12'} space-y-2`}>
                      <ul className="text-xs text-[#2C1810] space-y-1.5">
                        {(isEn ? civ.urbanPlanning.pointsEn : civ.urbanPlanning.pointsTe).map((pt, ptIdx) => (
                          <li key={ptIdx} className="flex items-start gap-2">
                            <span className="text-[#D84315] font-bold text-xs mt-0.5">✦</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: 3-COLUMN PILLARS (Society, Economy & Trade, Science & Inventions) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Pillar 1: Society & Culture */}
                <div className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#E8DCC4] space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    {civ.societyAndCulture.image && (
                      <div 
                        onClick={() => handleOpenImage(civ.societyAndCulture.image!, isEn ? civ.societyAndCulture.titleEn : civ.societyAndCulture.titleTe, isEn ? civ.nameEn : civ.nameTe)}
                        className="h-32 w-full bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-2xs border border-[#D4AF37]/50 relative"
                      >
                        <img 
                          src={civ.societyAndCulture.image} 
                          alt="Society" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                        </div>
                      </div>
                    )}
                    <h5 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                      👥 {isEn ? civ.societyAndCulture.titleEn : civ.societyAndCulture.titleTe}
                    </h5>
                    <ul className="text-[11px] text-[#5D4037] space-y-1.5">
                      {(isEn ? civ.societyAndCulture.pointsEn : civ.societyAndCulture.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pillar 2: Economy & Trade */}
                <div className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#E8DCC4] space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    {civ.economyAndTrade.image && (
                      <div 
                        onClick={() => handleOpenImage(civ.economyAndTrade.image!, isEn ? civ.economyAndTrade.titleEn : civ.economyAndTrade.titleTe, isEn ? civ.nameEn : civ.nameTe)}
                        className="h-32 w-full bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-2xs border border-[#D4AF37]/50 relative"
                      >
                        <img 
                          src={civ.economyAndTrade.image} 
                          alt="Economy and Trade" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                        </div>
                      </div>
                    )}
                    <h5 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                      🌾 {isEn ? civ.economyAndTrade.titleEn : civ.economyAndTrade.titleTe}
                    </h5>
                    <ul className="text-[11px] text-[#5D4037] space-y-1.5">
                      {(isEn ? civ.economyAndTrade.pointsEn : civ.economyAndTrade.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pillar 3: Science & Writing */}
                <div className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#E8DCC4] space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    {civ.scienceAndInventions.image && (
                      <div 
                        onClick={() => handleOpenImage(civ.scienceAndInventions.image!, isEn ? civ.scienceAndInventions.titleEn : civ.scienceAndInventions.titleTe, isEn ? civ.nameEn : civ.nameTe)}
                        className="h-32 w-full bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-2xs border border-[#D4AF37]/50 relative"
                      >
                        <img 
                          src={civ.scienceAndInventions.image} 
                          alt="Science and Inventions" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-1">
                      <h5 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                        ✍️ {isEn ? civ.scienceAndInventions.titleEn : civ.scienceAndInventions.titleTe}
                      </h5>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FFF8E1] text-[#D84315] border border-[#FFE082]">
                        ⚙️ {isEn ? 'Technologies' : 'సాంకేతికతలు'}
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#5D4037] space-y-1.5">
                      {(isEn ? civ.scienceAndInventions.pointsEn : civ.scienceAndInventions.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* RELIGION & BELIEFS ROW */}
              <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DCC4] space-y-2">
                <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                  <span>🪷</span>
                  <span>{isEn ? civ.religionAndBeliefs.titleEn : civ.religionAndBeliefs.titleTe}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                  {civ.religionAndBeliefs.image && (
                    <div 
                      onClick={() => handleOpenImage(civ.religionAndBeliefs.image!, isEn ? civ.religionAndBeliefs.titleEn : civ.religionAndBeliefs.titleTe, isEn ? civ.nameEn : civ.nameTe)}
                      className="md:col-span-4 h-36 bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-2xs border border-[#D4AF37]/50 relative"
                    >
                      <img 
                        src={civ.religionAndBeliefs.image} 
                        alt="Religion and Beliefs"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                      </div>
                    </div>
                  )}
                  <div className={`${civ.religionAndBeliefs.image ? 'md:col-span-8' : 'md:col-span-12'}`}>
                    <ul className="text-xs text-[#5D4037] space-y-1.5">
                      {(isEn ? civ.religionAndBeliefs.pointsEn : civ.religionAndBeliefs.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* MAJOR SITES / EXCAVATIONS GRID (సమగ్ర తవ్వకాలు) */}
              <div className="space-y-3 pt-2 border-t border-[#E8DCC4]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E8DCC4] pb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-bold text-[#7B1113] flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D84315]" />
                      <span>
                        {civ.id === 'indus_valley'
                          ? (isEn ? 'Major Excavated Harappan Sites' : 'ప్రముఖ సింధు లోయ తవ్వకాల క్షేత్రాలు')
                          : (isEn ? 'Major Archaeological Excavations & Historic Centers' : 'సమగ్ర తవ్వకాలు & ప్రముఖ చారిత్రక క్షేత్రాలు')}
                      </span>
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]/60 shadow-2xs">
                      ⛏️ {isEn ? 'Archaeological Excavations (సమగ్ర తవ్వకాలు)' : 'సమగ్ర తవ్వకాలు & పరిశోధనలు'}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8D6E63] font-semibold">
                    {civ.majorSitesOrPlaces.length} {isEn ? 'Key Excavated Sites' : 'ప్రధాన స్థావరాలు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {civ.majorSitesOrPlaces.map((site) => (
                    <div
                      key={site.id}
                      className="bg-[#FFFDF7] rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] p-3 space-y-2.5 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {/* Site Image */}
                        <div 
                          onClick={() => handleOpenImage(site.image, isEn ? site.nameEn : site.nameTe, isEn ? site.locationEn : site.locationTe)}
                          className="h-28 w-full bg-[#2C1810] rounded-lg overflow-hidden cursor-pointer group shadow-2xs border border-[#D4AF37]/50 relative"
                        >
                          <img 
                            src={site.image} 
                            alt={isEn ? site.nameEn : site.nameTe}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                            <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                          </div>
                        </div>

                        <div>
                          <h5 className="font-bold text-xs text-[#7B1113]">
                            {isEn ? site.nameEn : site.nameTe}
                          </h5>
                          <span className="text-[10px] text-[#8D6E63] block">
                            📍 {isEn ? site.locationEn : site.locationTe}
                          </span>
                        </div>

                        <ul className="text-[10.5px] text-[#5D4037] space-y-1 pt-1 border-t border-[#E8DCC4]">
                          {(isEn ? site.keyFeaturesEn : site.keyFeaturesTe).slice(0, 3).map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1">
                              <span className="text-[#D84315] font-bold">•</span>
                              <span className="line-clamp-1">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setSelectedSiteModal({
                          name: isEn ? site.nameEn : site.nameTe,
                          location: isEn ? site.locationEn : site.locationTe,
                          image: site.image,
                          features: isEn ? site.keyFeaturesEn : site.keyFeaturesTe
                        })}
                        className="mt-1 w-full py-1 text-[10px] font-bold rounded bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37]/60 text-center transition-colors"
                      >
                        {isEn ? 'View All Site Discoveries' : 'తవ్వకాల పూర్తి వివరాలు చూడండి'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* DECLINE & LASTING LEGACY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                  <span className="text-xs font-bold text-[#D84315] uppercase tracking-wider block">
                    ⚠️ {isEn ? 'Primary Causes of Decline:' : 'క్షీణతకు ప్రధాన కారణాలు:'}
                  </span>
                  <ul className="text-xs text-[#5D4037] space-y-1">
                    {(isEn ? civ.declineAndLegacy.declineEn : civ.declineAndLegacy.declineTe).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D84315] font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FAF7F0] p-3 rounded-xl border border-[#D4AF37]/40 space-y-1.5">
                  <span className="text-xs font-bold text-[#7B1113] uppercase tracking-wider block">
                    🌟 {isEn ? 'Lasting Global Legacy:' : 'మానవాళికి మిగిల్చిన శాశ్వత వారసత్వం:'}
                  </span>
                  <ul className="text-xs text-[#2C1810] space-y-1">
                    {(isEn ? civ.declineAndLegacy.legacyEn : civ.declineAndLegacy.legacyTe).map((l, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D84315] font-bold">✓</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* QUICK REVISION PILLS */}
              <div className="pt-2 border-t border-[#E8DCC4] flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B1113] mr-1">
                  ⚡ {isEn ? 'Quick Glance:' : 'సత్వర సమీక్ష:'}
                </span>
                {civ.quickRevision.map((q, qIdx) => (
                  <div key={qIdx} className="px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E8DCC4] text-[10px]">
                    <span className="text-[#8D6E63] font-semibold">{isEn ? q.labelEn : q.labelTe}: </span>
                    <strong className="text-[#7B1113]">{isEn ? q.valueEn : q.valueTe}</strong>
                  </div>
                ))}
              </div>

              {/* Bottom Back Button & Scroll Top */}
              <div className="pt-4 border-t border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
                <button
                  onClick={() => {
                    setActiveTab('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#5c0d0e] border border-[#D4AF37] flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FFE082]" />
                  <span>{isEn ? '← Back to All 10 Civilizations (Cards)' : '← అన్ని 10 ప్రాచీన నాగరికతల కార్డుల జాబితా'}</span>
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-all cursor-pointer shadow-2xs"
                >
                  ↑ {isEn ? 'Scroll to Top' : 'పైకి వెళ్ళండి'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL FOR FOCUSED SITE DETAILS */}
      {selectedSiteModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedSiteModal(null)}
        >
          <div 
            className="bg-[#FFFFFF] rounded-2xl max-w-lg w-full p-5 space-y-4 border-2 border-[#D4AF37] shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
              <div>
                <h4 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                  {selectedSiteModal.name}
                </h4>
                <span className="text-xs text-[#8D6E63]">
                  📍 {selectedSiteModal.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedSiteModal(null)}
                className="p-1 rounded-full hover:bg-neutral-100 text-[#5D4037] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="h-48 w-full bg-[#2C1810] rounded-xl overflow-hidden border border-[#D4AF37]/50">
              <img 
                src={selectedSiteModal.image} 
                alt={selectedSiteModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block">
                {isEn ? 'Key Excavations & Discoveries:' : 'ప్రధాన తవ్వకాలు & బయల్పడిన విశేషాలు:'}
              </span>
              <ul className="text-xs text-[#2C1810] space-y-1.5 pl-1">
                {selectedSiteModal.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-1.5">
                    <span className="text-[#D84315] font-bold">★</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedSiteModal(null)}
              className="w-full py-1.5 rounded-xl font-bold text-xs bg-[#7B1113] text-[#FFE082] hover:bg-[#5c0d0e] cursor-pointer transition-colors"
            >
              {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
