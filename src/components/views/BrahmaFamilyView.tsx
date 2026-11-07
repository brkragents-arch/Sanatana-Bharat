import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import {
  DAKSHA_24_DAUGHTERS,
  PRIYAVRATA_LINEAGE,
  UTTANAPADA_PRACHETASAS_LINEAGE,
  KASHYAPA_WIVES_AND_PROGENY,
  BRAHMA_8_RUDRAS,
  BRAHMA_4_KUMARAS,
  BRAHMARISHIS_LIST,
  KASHYAPA_CHILDREN_POSTER_DETAILS,
  KASHYAP_RISHI_KASHMIR_LEGEND
} from '../../data/brahmaFamilyData';
import { SaptarishiSubView } from './SaptarishiSubView';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Search,
  Sparkles,
  GitFork,
  Crown,
  Info,
  Maximize2,
  X,
  BookOpen,
  Mountain,
  ExternalLink
} from 'lucide-react';

interface BrahmaFamilyViewProps {
  initialTab?: 'chart' | 'branches' | 'kashyapa_detail' | 'saptarishis';
}

export const BrahmaFamilyView: React.FC<BrahmaFamilyViewProps> = ({ initialTab = 'chart' }) => {
  const { language, selectCharacter, setViewMode, setIsAdityasOpen } = useMythology();
  const isEn = language === 'en';

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'chart' | 'branches' | 'kashyapa_detail' | 'saptarishis'>(initialTab);
  const [isKashyapaChildrenModalOpen, setIsKashyapaChildrenModalOpen] = useState<boolean>(false);
  const [kashyapaModalTab, setKashyapaModalTab] = useState<'kashmir' | 'lineages' | 'posters'>('kashmir');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  const [collapsedBranches, setCollapsedBranches] = useState<Record<string, boolean>>({
    'rishis': false,
    'daksha_24': false,
    'rudras': false,
    'kumaras': false,
    'dharma': false,
    'manu': false,
    'uttanapada': false,
    'priyavrata': false,
    'kashyapa': false
  });

  const toggleBranch = (key: string) => {
    setCollapsedBranches(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    setCollapsedBranches({
      'rishis': false,
      'daksha_24': false,
      'rudras': false,
      'kumaras': false,
      'dharma': false,
      'manu': false,
      'uttanapada': false,
      'priyavrata': false,
      'kashyapa': false
    });
  };

  const collapseAll = () => {
    setCollapsedBranches({
      'rishis': true,
      'daksha_24': true,
      'rudras': true,
      'kumaras': true,
      'dharma': true,
      'manu': true,
      'uttanapada': true,
      'priyavrata': true,
      'kashyapa': true
    });
  };

  const matchesFilter = (nameTe: string, nameEn: string, extra?: string) => {
    if (!filterQuery.trim()) return false;
    const q = filterQuery.toLowerCase();
    return (
      nameTe.toLowerCase().includes(q) ||
      nameEn.toLowerCase().includes(q) ||
      (extra ? extra.toLowerCase().includes(q) : false)
    );
  };

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-xl overflow-hidden min-h-[800px]">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER & TOOLBAR */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF] px-4 py-3.5 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFE082] via-[#FFD54F] to-[#FF8F00] border-2 border-[#7B1113] flex items-center justify-center text-xl shadow-xs">
            🪷
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                {isEn ? 'Vedic Lineage' : 'ప్రామాణిక వంశపరంపర'}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Family of Brahma (Brahma Vamsam)' : 'బ్రహ్మ వంశము (Family of Brahma)'}
              </h2>
            </div>
            <p className="text-xs text-[#5D4037] mt-0.5">
              {isEn
                ? 'Complete genealogical descent from Lord Brahma: 5 Main Branches, 24 Daughters, 26 Solar/Lunar Monarchs & Kashyapa Progeny'
                : 'చతుర్ముఖ బ్రహ్మ నుండి ఉద్భవించిన 5 ప్రధాన శాఖలు, దక్షుని 24 మంది కన్యలు, ప్రియవ్రత-ఉత్తానపాదుల రాజవంశాలు & కశ్యప సంతతి'}
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#5D4037] absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder={isEn ? 'Search Brahma family (e.g. Rishabha, Aditi, Priyavrata)...' : 'బ్రహ్మ వంశంలో వెతకండి (ఉదా: ఋషభ, అదితి, ప్రియవ్రత)...'}
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs rounded-full bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D84315] w-56 sm:w-64"
            />
          </div>

          {/* View Switcher Tabs */}
          <div className="flex items-center bg-[#FAF7F0] p-1 rounded-xl border border-[#E8DCC4] text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'chart'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs font-bold'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? 'Family Tree Chart' : 'వంశవృక్ష పటము'}
            </button>
            <button
              onClick={() => setActiveTab('branches')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'branches'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs font-bold'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? '5 Core Branches' : '5 ప్రధాన శాఖలు'}
            </button>
            <button
              onClick={() => setActiveTab('kashyapa_detail')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'kashyapa_detail'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs font-bold'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              {isEn ? 'Kashyapa & Lineages' : 'కశ్యప సంతతి & వర్గాలు'}
            </button>
            <button
              onClick={() => setActiveTab('saptarishis')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'saptarishis'
                  ? 'bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] shadow-xs font-bold ring-1 ring-[#D4AF37]'
                  : 'text-[#7B1113] bg-[#FFF8E1] hover:bg-[#FFE082] border border-[#D4AF37]/50 font-bold'
              }`}
            >
              <span className="text-xs">🌟</span>
              <span>{isEn ? 'Saptarishis Sub-Page' : 'సప్తర్షులు & పత్నులు'}</span>
            </button>
          </div>

          {/* 12 Mandi Adityas Quick Pop-up Button */}
          <button
            onClick={() => setIsAdityasOpen(true)}
            className="px-3 py-1 text-xs font-bold rounded-lg bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] border-2 border-[#D4AF37] text-[#7B1113] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all hover:scale-102"
            title={isEn ? '12 Adityas Pop-up Window' : '12 మంది ఆదిత్యులు పాప్-అప్ విండో తెరవండి'}
          >
            <span className="text-sm">☀️</span>
            <span>{isEn ? '12 Adityas' : '12 మంది ఆదిత్యులు'}</span>
            <span className="text-[10px] bg-[#7B1113] text-[#FFE082] px-1 rounded-sm">Pop-up</span>
          </button>

          {/* Expand/Collapse */}
          <button
            onClick={expandAll}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] cursor-pointer"
          >
            {isEn ? 'Expand All' : 'అన్నీ చూపు'}
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] cursor-pointer"
          >
            {isEn ? 'Collapse' : 'కుదించు'}
          </button>

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1 border-l border-[#E8DCC4] pl-2">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 1.4))}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title={isEn ? 'Zoom In' : 'జూమ్ ఇన్'}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-bold text-[#5D4037] w-9 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.7))}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title={isEn ? 'Zoom Out' : 'జూమ్ అవుట్'}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
              title={isEn ? 'Reset' : 'రీసెట్'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. OVERVIEW NOTICE & QUICK STATS */}
      {/* ============================================================ */}
      <div className="bg-[#FFFDF7] px-4 py-2 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2 text-[#5D4037]">
          <Info className="w-4 h-4 text-[#D84315] shrink-0" />
          <span>
            {isEn
              ? 'This diagram faithfully maps the classical Family of Brahma manuscript chart with bilingual Telugu & English nomenclature.'
              : 'ఈ పటము బ్రహ్మ వంశవృక్ష చిత్రపటమును అక్షరాలా తెలుగు మరియు ఆంగ్ల నామములతో, 5 మూల శాఖలు మరియు వారి సమగ్ర సంతతితో ప్రదర్శిస్తున్నది.'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('tree')}
            className="text-[#7B1113] hover:text-[#D84315] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>{isEn ? 'Switch to Bhagavatam 16 Daughters Tree' : '16 కన్యల వంశవృక్షం'}</span>
          </button>
          <span className="text-[#D4AF37]">|</span>
          <button
            onClick={() => setViewMode('daksha_vamsa')}
            className="text-[#7B1113] hover:text-[#D84315] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>{isEn ? 'Daksha Lineage' : 'దక్ష-ప్రసూతి వంశం'}</span>
          </button>
          <span className="text-[#D4AF37]">|</span>
          <button
            onClick={() => setActiveTab('saptarishis')}
            className="text-[#7B1113] hover:text-[#D84315] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] px-2.5 py-0.5 rounded-full border border-[#D4AF37] shadow-2xs"
            title={isEn ? 'Open Saptarishis Sub-Page' : 'సప్తర్షులు & పత్నుల ప్రత్యేక ఉప-పుట'}
          >
            <span className="text-xs">🌟</span>
            <span>{isEn ? 'Saptarishis Sub-Page' : 'సప్తర్షులు & పత్నుల పుట'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MAIN TREE VIEW CANVAS (CHART TAB) */}
      {/* ============================================================ */}
      {activeTab === 'chart' && (
        <div className="flex-1 p-3 sm:p-6 overflow-auto bg-[radial-gradient(#E8DCC4_1px,transparent_1px)] [background-size:20px_20px]">
          <div
            className="min-w-[1100px] max-w-7xl mx-auto space-y-8 transition-transform duration-150 origin-top"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            
            {/* ---------------------------------------------------- */}
            {/* ROOT NODE: BRAHMA (బ్రహ్మ) */}
            {/* ---------------------------------------------------- */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold shadow-md mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD54F]" />
                <span>{isEn ? 'ROOT PROGENITOR OF THE UNIVERSE' : 'సకల సృష్టికి మూలపిత • ఆది కర్త'}</span>
              </div>

              <div 
                onClick={() => selectCharacter('chaturmukha-brahma', true)}
                className="w-72 bg-gradient-to-r from-[#FFF8E1] via-[#FFE082] to-[#FFF8E1] border-3 border-[#7B1113] rounded-2xl p-3.5 text-center shadow-lg hover:shadow-xl hover:scale-102 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] flex items-center justify-center text-2xl shadow-xs group-hover:rotate-12 transition-transform">
                  🪷
                </div>
                <h3 className="text-xl font-extrabold text-[#7B1113] font-telugu-serif mt-1">
                  {isEn ? 'Brahma' : 'చతుర్ముఖ బ్రహ్మ'}
                </h3>
                <p className="text-xs font-bold text-[#D84315]">
                  {isEn ? 'Chaturmukha Brahma • Creator' : 'జగత్సృష్టికర్త • వేదపురుషుడు'}
                </p>
                <div className="mt-2 text-[10px] bg-[#FFFFFF]/80 py-0.5 px-2 rounded-full border border-[#D4AF37] text-[#5D4037] font-semibold">
                  {isEn ? 'Click to view deep scripture profile' : 'వివరములకు క్లిక్ చేయండి'}
                </div>
              </div>

              {/* Connecting Tree Lines */}
              <div className="flex flex-col items-center w-full mt-3">
                <div className="w-1 h-6 bg-[#7B1113]" />
                {/* Horizontal branch line spanning 5 major columns */}
                <div className="w-[94%] h-1 bg-[#7B1113] rounded-full relative">
                  <div className="absolute left-0 top-0 w-1 h-4 bg-[#7B1113]" />
                  <div className="absolute left-[22%] top-0 w-1 h-4 bg-[#7B1113]" />
                  <div className="absolute left-[42%] top-0 w-1 h-4 bg-[#7B1113]" />
                  <div className="absolute left-[58%] top-0 w-1 h-4 bg-[#7B1113]" />
                  <div className="absolute right-0 top-0 w-1 h-4 bg-[#7B1113]" />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 5 MAIN PILLARS OF BRAHMA'S FAMILY */}
            {/* ---------------------------------------------------- */}
            <div className="grid grid-cols-5 gap-3 items-start">
              
              {/* ================================================== */}
              {/* COLUMN 1: BRAHMARISHIS (బ్రహ్మర్షులు) */}
              {/* ================================================== */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-3 shadow-md space-y-2">
                <div 
                  onClick={() => toggleBranch('rishis')}
                  className="flex items-center justify-between cursor-pointer pb-2 border-b border-[#E8DCC4]"
                >
                  <div>
                    <h4 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1">
                      <span>{isEn ? 'Brahmarishis' : 'బ్రహ్మర్షులు'}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#7B1113] text-[#FFE082]">11</span>
                    </h4>
                    <p className="text-[10px] text-[#5D4037]">
                      {isEn ? 'Mind-Born Vedic Seers' : 'బ్రహ్మ మానస పుత్రులు'}
                    </p>
                  </div>
                  {collapsedBranches.rishis ? <ChevronRight className="w-4 h-4 text-[#7B1113]" /> : <ChevronDown className="w-4 h-4 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.rishis && (
                  <div className="space-y-1.5 text-xs">
                    {BRAHMARISHIS_LIST.map((rishi) => {
                      const isHighlighted = matchesFilter(rishi.te, rishi.en);
                      const isDaksha = rishi.id === 'daksha';
                      const isMarichi = rishi.id === 'marichi';

                      return (
                        <div 
                          key={rishi.id}
                          className={`p-2 rounded-xl border transition-all ${
                            isDaksha
                              ? 'bg-[#FFF8E1] border-[#D84315] shadow-xs'
                              : isMarichi
                              ? 'bg-[#FFF9E6] border-[#FFB300]'
                              : 'bg-[#FAF7F0] border-[#E8DCC4] hover:border-[#D4AF37]'
                          } ${isHighlighted ? 'ring-2 ring-red-500 bg-amber-50' : ''}`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-bold text-[#7B1113]">
                                • {isEn ? rishi.en : rishi.te}
                              </div>
                              <div className="text-[10px] text-[#5D4037]">
                                {isEn ? rishi.originEn : rishi.originTe}
                              </div>
                            </div>
                            {isDaksha && (
                              <span className="text-[9px] font-bold px-1 rounded bg-[#D84315] text-white">
                                {isEn ? 'Prajapati' : 'అధిపతి'}
                              </span>
                            )}
                          </div>

                          {/* Sub-node for Marichi -> Kashyapa (Clickable -> Children of Kashyapa Prajapati Pop-up) */}
                          {isMarichi && (
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsKashyapaChildrenModalOpen(true);
                              }}
                              className="mt-1.5 p-2 pl-2.5 border-l-3 border-[#D84315] rounded-r-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/70 to-[#FFFDF7] hover:from-[#FFE082] hover:to-[#FFD54F] border border-[#D4AF37] hover:border-[#D84315] shadow-2xs hover:shadow-md transition-all cursor-pointer group space-y-1 ring-1 ring-[#D4AF37]/60 hover:ring-2 hover:ring-[#D84315]"
                              title={isEn ? 'Click to open Kashyapa Prajapati Pop-up (Kashmir Origin & 6 Lineages)' : 'కశ్యప ప్రజాపతి సచిత్ర పాప్-అప్ (కశ్మీర ఆవిర్భావ గాథ & 6 సంతాన వర్గాలు) కొరకు క్లిక్ చేయండి'}
                            >
                              <div className="flex items-center justify-between gap-1">
                                <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#D84315] group-hover:text-[#7B1113]">
                                  <span>↳</span>
                                  <span>{isEn ? 'Kashyapa Prajapati' : 'కశ్యప ప్రజాపతి'}</span>
                                </div>
                                <span className="px-1.5 py-0.2 rounded-full bg-[#7B1113] group-hover:bg-[#D84315] text-[#FFE082] text-[8.5px] font-bold flex items-center gap-0.5 shadow-2xs transition-colors">
                                  <Sparkles className="w-2.5 h-2.5 text-[#FFD54F]" />
                                  <span>{isEn ? 'Kashmir & Lineages' : 'కశ్మీర్ & వంశాలు'}</span>
                                </span>
                              </div>
                              <p className="text-[9.5px] text-[#5D4037] font-semibold leading-tight">
                                {isEn ? 'Founder of Kashmir & Universal Father' : 'కశ్మీర పౌరాణిక రూపకర్త • సకల ప్రాణుల పిత'}
                              </p>
                              <div className="pt-1 border-t border-[#D4AF37]/50 flex items-center justify-between gap-1">
                                <div className="flex items-center gap-1 min-w-0">
                                  <img 
                                    src={KASHYAP_RISHI_KASHMIR_LEGEND.seatedPortraitImg} 
                                    alt="Kashyapa Prajapati"
                                    className="w-5 h-5 rounded-full object-cover border border-[#7B1113] shrink-0"
                                  />
                                  <span className="text-[8.5px] font-bold text-[#7B1113] truncate">
                                    {isEn ? 'Kashmir Legend + 6 Lineages' : 'కశ్మీర గాథ + 6 దివ్య వంశాలు'}
                                  </span>
                                </div>
                                <Maximize2 className="w-2.5 h-2.5 text-[#D84315] shrink-0" />
                              </div>
                            </div>
                          )}

                          {/* Sub-node for Daksha -> 24 Daughters Accordion */}
                          {isDaksha && (
                            <div className="mt-2 pt-1.5 border-t border-[#D84315]/30">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleBranch('daksha_24');
                                }}
                                className="w-full text-left flex items-center justify-between text-[11px] font-bold text-[#D84315] hover:text-[#7B1113]"
                              >
                                <span>➤ {isEn ? '24 Daughters (Values)' : '24 మంది కుమార్తెలు (ధర్మ గుణాలు)'}</span>
                                {collapsedBranches.daksha_24 ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                              </button>

                              {!collapsedBranches.daksha_24 && (
                                <div className="mt-1.5 max-h-56 overflow-y-auto space-y-1 pr-1 bg-[#FFFFFF] p-1.5 rounded-lg border border-[#D4AF37]/40">
                                  {DAKSHA_24_DAUGHTERS.map((d, idx) => (
                                    <div key={idx} className="text-[10px] py-0.5 border-b border-gray-100 flex items-center justify-between">
                                      <span className="font-bold text-[#7B1113]">
                                        {idx + 1}. {isEn ? d.en : d.te}
                                      </span>
                                      <span className="text-[9px] text-[#5D4037] italic">
                                        ({isEn ? d.meaningEn : d.meaningTe})
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ================================================== */}
              {/* COLUMN 2: 8 RUDRAS (అష్ట రుద్రులు) */}
              {/* ================================================== */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-3 shadow-md space-y-2">
                <div 
                  onClick={() => toggleBranch('rudras')}
                  className="flex items-center justify-between cursor-pointer pb-2 border-b border-[#E8DCC4]"
                >
                  <div>
                    <h4 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1">
                      <span>{isEn ? '8 Rudras' : 'అష్ట రుద్రులు'}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#E65100] text-white">8</span>
                    </h4>
                    <p className="text-[10px] text-[#5D4037]">
                      {isEn ? 'Emergence from Brahma\'s Brow' : 'బ్రహ్మ భ్రూమధ్య ఉద్భవులు'}
                    </p>
                  </div>
                  {collapsedBranches.rudras ? <ChevronRight className="w-4 h-4 text-[#7B1113]" /> : <ChevronDown className="w-4 h-4 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.rudras && (
                  <div className="space-y-1.5 text-xs">
                    {BRAHMA_8_RUDRAS.map((rudra, idx) => {
                      const isHighlighted = matchesFilter(rudra.te, rudra.en);
                      return (
                        <div 
                          key={idx}
                          className={`p-2 rounded-xl bg-[#FFFDF7] border border-[#E8DCC4] hover:border-[#E65100] transition-colors ${
                            isHighlighted ? 'ring-2 ring-red-500 bg-amber-50' : ''
                          }`}
                        >
                          <div className="font-bold text-[#E65100] flex items-center gap-1">
                            <span>🔥</span>
                            <span>{isEn ? rudra.en : rudra.te}</span>
                          </div>
                          <div className="text-[10px] text-[#5D4037] mt-0.5 leading-tight">
                            {isEn ? rudra.meaningEn : rudra.meaningTe}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ================================================== */}
              {/* COLUMN 3: 4 KUMARAS (చతుఃకుమారులు) */}
              {/* ================================================== */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-3 shadow-md space-y-2">
                <div 
                  onClick={() => toggleBranch('kumaras')}
                  className="flex items-center justify-between cursor-pointer pb-2 border-b border-[#E8DCC4]"
                >
                  <div>
                    <h4 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1">
                      <span>{isEn ? '4 Kumaras' : 'చతుఃకుమారులు'}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#1976D2] text-white">4</span>
                    </h4>
                    <p className="text-[10px] text-[#5D4037]">
                      {isEn ? 'Ever-Pure Eternal Youths' : 'నివృత్తి మార్గ ప్రవర్తకులు'}
                    </p>
                  </div>
                  {collapsedBranches.kumaras ? <ChevronRight className="w-4 h-4 text-[#7B1113]" /> : <ChevronDown className="w-4 h-4 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.kumaras && (
                  <div className="space-y-1.5 text-xs">
                    {BRAHMA_4_KUMARAS.map((kumara, idx) => {
                      const isHighlighted = matchesFilter(kumara.te, kumara.en);
                      return (
                        <div 
                          key={idx}
                          className={`p-2 rounded-xl bg-[#F0F7FF] border border-[#BBDEFB] hover:border-[#1976D2] transition-colors ${
                            isHighlighted ? 'ring-2 ring-blue-500 bg-blue-100' : ''
                          }`}
                        >
                          <div className="font-bold text-[#0D47A1] flex items-center gap-1">
                            <span>🪷</span>
                            <span>{isEn ? kumara.en : kumara.te}</span>
                          </div>
                          <div className="text-[10px] text-[#5D4037] mt-0.5">
                            {isEn ? kumara.titleEn : kumara.titleTe}
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-2 rounded-lg bg-[#FFF8E1] border border-[#D4AF37]/50 text-[10px] text-[#5D4037] mt-2">
                      <strong>{isEn ? 'Spiritual Path:' : 'నివృత్తి సృష్టి:'}</strong> {isEn ? 'Chose supreme renunciation and celibacy (Nivritti Marga).' : 'సృష్టి విస్తరణను కాదని నిత్య హరిభక్తి నిమగ్నులైరి.'}
                    </div>
                  </div>
                )}
              </div>

              {/* ================================================== */}
              {/* COLUMN 4: DHARMA (ధర్మదేవుడు) */}
              {/* ================================================== */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-3 shadow-md space-y-2">
                <div className="pb-2 border-b border-[#E8DCC4]">
                  <h4 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1">
                    <span>{isEn ? 'Dharma' : 'ధర్మదేవుడు'}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#2E7D32] text-white">ధర్మము</span>
                  </h4>
                  <p className="text-[10px] text-[#5D4037]">
                    {isEn ? 'Cosmic Order & Virtue' : 'సకల సృష్టికి ధర్మ ఆధారం'}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F1F8E9] border border-[#C8E6C9]">
                    <div className="font-bold text-[#2E7D32] flex items-center gap-1.5">
                      <span>⚖️</span>
                      <span>{isEn ? 'Lord Dharma' : 'శ్రీ ధర్మదేవుడు'}</span>
                    </div>
                    <p className="text-[10px] text-[#5D4037] mt-1 leading-relaxed">
                      {isEn
                        ? 'Born directly from Brahma\'s heart / right breast. Wedded to 13 daughters of Daksha Prajapati.'
                        : 'బ్రహ్మదేవుని హృదయము/కుడి రొమ్ము నుండి సాక్షాత్ ధర్మ స్వరూపునిగా ఆవిర్భవించెను. దక్షుని 13 మంది పుత్రికలను పరిణయమాడెను.'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFF8E1] border border-[#D4AF37]/50 space-y-1">
                    <span className="text-[11px] font-bold text-[#7B1113] block">
                      {isEn ? 'Divine Offspring:' : 'ధర్మ సంతానము & అవతారములు:'}
                    </span>
                    <div className="text-[10px] text-[#5D4037] space-y-1">
                      <div className="font-semibold text-[#D84315]">
                        • {isEn ? 'Sri Nara-Narayana (through Murti Devi)' : 'మూర్తి దేవి యందు శ్రీ నరనారాయణులు'}
                      </div>
                      <div>
                        • {isEn ? 'Kama (through Shraddha)' : 'శ్రద్ధ యందు కాముడు'}
                      </div>
                      <div>
                        • {isEn ? 'Harsha (through Tushti)' : 'తుష్టి యందు హర్షుడు'}
                      </div>
                      <div>
                        • {isEn ? 'Prasada (through Shanti)' : 'శాంతి యందు ప్రసాదుడు'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================== */}
              {/* COLUMN 5: MANU SVAYAMBHUVA (స్వాయంభువ మనువు) */}
              {/* ================================================== */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-3 shadow-md space-y-2">
                <div 
                  onClick={() => toggleBranch('manu')}
                  className="flex items-center justify-between cursor-pointer pb-2 border-b border-[#E8DCC4]"
                >
                  <div>
                    <h4 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1">
                      <span>{isEn ? 'Manu Svayambhuva' : 'స్వాయంభువ మనువు'}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#D84315] text-white">మానవావతారం</span>
                    </h4>
                    <p className="text-[10px] text-[#5D4037]">
                      {isEn ? 'First Progenitor of Humans' : 'మానవ జాతి ప్రథమ పితామహుడు'}
                    </p>
                  </div>
                  {collapsedBranches.manu ? <ChevronRight className="w-4 h-4 text-[#7B1113]" /> : <ChevronDown className="w-4 h-4 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.manu && (
                  <div className="space-y-2 text-xs">
                    {/* 4 Children of Manu Banner */}
                    <div className="grid grid-cols-2 gap-1.5 text-center text-[10px] font-bold">
                      <div className="bg-[#FFF8E1] p-1.5 rounded-lg border border-[#D4AF37] text-[#7B1113]">
                        {isEn ? 'Uttanapada' : 'ఉత్తానపాదుడు (పుత్రుడు)'}
                      </div>
                      <div className="bg-[#FFF8E1] p-1.5 rounded-lg border border-[#D4AF37] text-[#7B1113]">
                        {isEn ? 'Priyavrata' : 'ప్రియవ్రతుడు (పుత్రుడు)'}
                      </div>
                      <div className="bg-[#FBE9E7] p-1.5 rounded-lg border border-[#FFAB91] text-[#D84315]">
                        {isEn ? 'Prasuti' : 'ప్రసూతి (కన్య)'}
                      </div>
                      <div className="bg-[#FBE9E7] p-1.5 rounded-lg border border-[#FFAB91] text-[#D84315]">
                        {isEn ? 'Akuti' : 'ఆకూతి (కన్య)'}
                      </div>
                    </div>

                    <div className="text-[10px] text-[#5D4037] bg-[#FAF7F0] p-1.5 rounded-lg border border-[#E8DCC4]">
                      {isEn
                        ? 'Wife: Shatarupa. Father of Uttanapada, Priyavrata, Prasuti (wedded to Daksha), and Akuti (wedded to Ruci).'
                        : 'ధర్మపత్ని: శతరూప. వీరి సంతతి ద్వారానే సమస్త రాజవంశాలు, ధ్రువ చరిత్ర, భరత వర్షము మరియు దక్ష పునర్జన్మ నడిచెను.'}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* ============================================================ */}
            {/* DEEP LINEAGES: UTTANAPADA & PRIYAVRATA BRANCHES */}
            {/* ============================================================ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* ---------------------------------------------------- */}
              {/* BRANCH 5A: UTTANAPADA TO PRACHETASAS & REBORN DAKSHA */}
              {/* ---------------------------------------------------- */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D84315] p-4 shadow-md space-y-3">
                <div 
                  onClick={() => toggleBranch('uttanapada')}
                  className="flex items-center justify-between cursor-pointer border-b border-[#E8DCC4] pb-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#D84315] flex items-center justify-center font-bold text-base text-[#D84315]">
                      👑
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif">
                        {isEn
                          ? 'Uttanapada Lineage ➔ Prithu ➔ Prachetasas ➔ Daksha Rebirth'
                          : 'ఉత్తానపాదుని వంశపరంపర ➔ పృథు ➔ ప్రచేతసులు ➔ దక్ష పునర్జన్మ'}
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn
                          ? 'Dhruva, King Vena, Avatar King Prithu, 10 Prachetasas & Daksha reborn'
                          : 'ధ్రువుడు, చక్రవర్తి పృథువు, 10 మంది ప్రచేతసులు మరియు దక్ష ప్రజాపతి పునర్జన్మ పరంపర'}
                      </p>
                    </div>
                  </div>
                  {collapsedBranches.uttanapada ? <ChevronRight className="w-5 h-5 text-[#7B1113]" /> : <ChevronDown className="w-5 h-5 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.uttanapada && (
                  <div className="space-y-1.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {UTTANAPADA_PRACHETASAS_LINEAGE.map((item, idx) => {
                        const isHighlighted = matchesFilter(item.nameTe, item.nameEn);
                        const isPrithu = item.nameEn.includes('Prithu');
                        const isDhruva = item.nameEn.includes('Dhruva');
                        const isDakshaRebirth = item.nameEn.includes('Daksha');

                        return (
                          <div
                            key={idx}
                            className={`p-2 rounded-xl border flex items-start gap-2 ${
                              isDakshaRebirth
                                ? 'bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] border-2 border-[#D84315] col-span-1 sm:col-span-2 shadow-xs'
                                : isPrithu || isDhruva
                                ? 'bg-[#FFF9E6] border-[#D4AF37]'
                                : 'bg-[#FAF7F0] border-[#E8DCC4]'
                            } ${isHighlighted ? 'ring-2 ring-red-500 bg-amber-50' : ''}`}
                          >
                            <span className="w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="font-bold text-[#7B1113] text-xs">
                                {isEn ? item.nameEn : item.nameTe}
                              </div>
                              {item.noteTe && (
                                <p className="text-[10px] text-[#5D4037] leading-tight">
                                  {isEn ? item.noteEn : item.noteTe}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------- */}
              {/* BRANCH 5B: PRIYAVRATA TO RISHABHA, BHARATA & 26 KINGS */}
              {/* ---------------------------------------------------- */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#C99700] p-4 shadow-md space-y-3">
                <div 
                  onClick={() => toggleBranch('priyavrata')}
                  className="flex items-center justify-between cursor-pointer border-b border-[#E8DCC4] pb-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#C99700] flex items-center justify-center font-bold text-base text-[#7B1113]">
                      🚩
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                        <span>{isEn ? 'Priyavrata Lineage (26 Monarchs)' : 'ప్రియవ్రతుని వంశపరంపర (26 తరాల రాజవంశం)'}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-bold">
                          {isEn ? 'Rishabha Highlight' : 'ఋషభదేవుడు'}
                        </span>
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn
                          ? 'Agnidhra ➔ Nabhi ➔ Rishabha (Avatar) ➔ Bharata ➔ ... ➔ Vishvagjyoti'
                          : 'అగ్నీధ్రుడు ➔ నాభి ➔ ఋషభదేవుడు ➔ భరతుడు (భారతవర్షం) ➔ ... ➔ విశ్వగ్జ్యోతి'}
                      </p>
                    </div>
                  </div>
                  {collapsedBranches.priyavrata ? <ChevronRight className="w-5 h-5 text-[#7B1113]" /> : <ChevronDown className="w-5 h-5 text-[#7B1113]" />}
                </div>

                {!collapsedBranches.priyavrata && (
                  <div className="space-y-1.5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs max-h-96 overflow-y-auto pr-1">
                      {PRIYAVRATA_LINEAGE.map((king, idx) => {
                        const isHighlighted = matchesFilter(king.nameTe, king.nameEn);
                        const isRishabha = king.isSpecial;
                        const isBharata = king.nameEn === 'Bharata';

                        return (
                          <div
                            key={idx}
                            className={`p-1.5 rounded-lg border text-left transition-colors ${
                              isRishabha
                                ? 'bg-red-50 border-2 border-red-600 text-red-900 ring-2 ring-red-300 font-extrabold shadow-xs'
                                : isBharata
                                ? 'bg-[#FFF8E1] border-2 border-[#D4AF37] text-[#7B1113] font-bold'
                                : 'bg-[#FAF7F0] border-[#E8DCC4] text-[#5D4037]'
                            } ${isHighlighted ? 'ring-2 ring-red-500 bg-amber-100' : ''}`}
                          >
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] font-bold text-gray-500 w-4 text-right">
                                {idx + 1}.
                              </span>
                              <span className={`text-xs ${isRishabha ? 'text-red-700 font-extrabold' : 'font-bold'}`}>
                                {isEn ? king.nameEn : king.nameTe}
                              </span>
                            </div>
                            {king.titleTe && (
                              <div className="text-[9px] text-gray-600 pl-5 leading-tight truncate">
                                {isEn ? king.titleEn : king.titleTe}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* ============================================================ */}
            {/* DAKSHA (REBORN) & KASHYAPA'S WIVES PROGENY (BOTTOM SECTION) */}
            {/* ============================================================ */}
            <div className="bg-[#FFFFFF] rounded-2xl border-3 border-[#7B1113] p-4 sm:p-6 shadow-xl space-y-4">
              <div 
                onClick={() => toggleBranch('kashyapa')}
                className="flex items-center justify-between cursor-pointer border-b-2 border-[#D4AF37] pb-3"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD54F]" />
                    <span>{isEn ? 'DAKSHA PRAJAPATI DAUGHTERS WEDDED TO KASHYAPA' : 'ప్రచేతస పుత్ర దక్ష ప్రజాపతి పుత్రికలు – కశ్యపుని సంతతి'}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#7B1113] font-telugu-serif">
                    {isEn
                      ? 'Aditi, Diti, Danu, Vinata, Kadru & 55 Other Daughters'
                      : 'అదితి, దితి, దనువు, వినత, కద్రువ మరియు ఇతర 55 మంది కన్యల సంతతి'}
                  </h3>
                  <p className="text-xs text-[#5D4037]">
                    {isEn
                      ? 'Descent of 12 Adityas (Vishnu, Indra), Daityas (Prahlada, Bali), Danavas, Garuda, and Cosmic Nagas'
                      : '12 ఆదిత్యులు (శ్రీ విష్ణువు, ఇంద్రుడు), దైత్యులు (ప్రహ్లాదుడు, బలి), దానవులు, గరుత్మంతుడు మరియు సకల నాగములు'}
                  </p>
                </div>
                {collapsedBranches.kashyapa ? <ChevronRight className="w-6 h-6 text-[#7B1113]" /> : <ChevronDown className="w-6 h-6 text-[#7B1113]" />}
              </div>

              {!collapsedBranches.kashyapa && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {KASHYAPA_WIVES_AND_PROGENY.map((group, idx) => {
                    const isHighlighted = matchesFilter(group.wifeTe, group.wifeEn);
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border-2 transition-all flex flex-col justify-between ${
                          group.badgeEn === '12 Adityas'
                            ? 'bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4] border-[#FBC02D] shadow-xs'
                            : group.badgeEn === 'Daityas'
                            ? 'bg-[#FFEBEE] border-[#EF5350]'
                            : group.badgeEn === 'Danavas'
                            ? 'bg-[#F3E5F5] border-[#AB47BC]'
                            : group.badgeEn === 'Celestial Birds'
                            ? 'bg-[#E0F2F1] border-[#26A69A]'
                            : group.badgeEn === 'Snakes & Nagas'
                            ? 'bg-[#E8F5E9] border-[#66BB6A]'
                            : 'bg-[#FFF8E1] border-[#D4AF37]'
                        } ${isHighlighted ? 'ring-3 ring-amber-500 scale-102' : ''}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xl">{group.icon}</span>
                              <h5 className="text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                                {isEn ? group.wifeEn : group.wifeTe}
                              </h5>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (group.badgeEn === '12 Adityas') {
                                  setIsAdityasOpen(true);
                                }
                              }}
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${
                                group.badgeEn === '12 Adityas'
                                  ? 'bg-[#FFD54F] hover:bg-[#FFC107] text-[#7B1113] border-2 border-[#D84315] shadow-xs cursor-pointer hover:scale-105 ring-2 ring-amber-300'
                                  : 'bg-[#FFFFFF]/90 text-[#7B1113] border border-current shadow-2xs'
                              }`}
                              title={group.badgeEn === '12 Adityas' ? (isEn ? 'Click to open 12 Adityas Pop-up Window' : '12 మంది ఆదిత్యుల పాప్-అప్ విండో చూడండి') : undefined}
                            >
                              {isEn ? group.badgeEn : group.badgeTe}
                            </button>
                          </div>

                          <p className="text-[10px] text-[#5D4037] font-medium mb-2 pb-1 border-b border-black/10">
                            {isEn ? group.titleEn : group.titleTe}
                          </p>

                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block">
                              {isEn ? 'Offspring / Beings:' : 'సంతతి / వంశం:'}
                            </span>
                            <ul className="text-[11px] text-[#2C1810] space-y-0.5 pl-3 list-disc">
                              {(isEn ? group.progenyEn : group.progenyTe).map((child, cIdx) => (
                                <li key={cIdx} className="leading-tight">
                                  {child}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 12 Mandi Adityas Dedicated Pop-up Button */}
                          {group.badgeEn === '12 Adityas' && (
                            <button
                              type="button"
                              onClick={() => setIsAdityasOpen(true)}
                              className="w-full mt-3 py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#D84315] via-[#B71C1C] to-[#7B1113] hover:from-[#BF360C] hover:to-[#5E0011] text-[#FFE082] hover:text-[#FFFFFF] text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-[#FFD54F] hover:scale-102"
                            >
                              <span className="text-sm">☀️</span>
                              <span>{isEn ? '12 Adityas' : '12 మంది ఆదిత్యులు'}</span>
                              <span className="text-[10px] bg-black/25 px-1.5 py-0.5 rounded text-[#FFF8E1]">
                                {isEn ? 'Pop-up' : 'పాప్-అప్'}
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. FIVE MAIN BRANCHES DETAILED BREAKDOWN (BRANCHES TAB) */}
      {/* ============================================================ */}
      {activeTab === 'branches' && (
        <div className="flex-1 p-4 sm:p-6 overflow-auto space-y-6">
          <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#D4AF37] shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif mb-1">
              {isEn ? 'The 5 Foundational Pillars Born from Lord Brahma' : 'చతుర్ముఖ బ్రహ్మదేవుని నుండి ఉద్భవించిన 5 మూలస్తంభాలు'}
            </h3>
            <p className="text-xs text-[#5D4037]">
              {isEn
                ? 'Deep ontological analysis of each branch in Vedic Cosmogenesis and Pothana Bhagavatam Canto 3 & 4.'
                : 'పోతన తెలుగు భాగవతము తృతీయ-చతుర్థ స్కంధాల ప్రకారం బ్రహ్మ సృష్టి విధానములోని 5 విభాగాలు.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Branch 1 */}
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧘‍♂️</span>
                <div>
                  <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    1. {isEn ? 'Brahmarishis & Prajapatis' : 'బ్రహ్మర్షులు & ప్రజాపతులు'}
                  </h4>
                  <span className="text-[10px] text-[#D84315] font-bold">
                    {isEn ? '11 Sages + 24 Virtues' : '11 మంది ఋషులు + 24 మంది కన్యలు'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn
                  ? 'Bhrigu, Pulastya, Pulaha, Kratu, Angiras, Marichi (father of Kashyapa), Atri, Vasishta, Narada, Ruci, and Daksha Prajapati.'
                  : 'భృగు, పులస్త్య, పులహ, క్రతు, అంగిరస, మరీచి (కశ్యప పిత), అత్రి, వసిష్ఠ, నారద, రుచి మరియు దక్ష ప్రజాపతి. వీరు జగత్తును జ్ఞానముతో, యజ్ఞములతో, వర్ణాశ్రమ ధర్మములతో నింపిరి.'}
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('saptarishis')}
                className="mt-2 w-full py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] border border-[#D4AF37] text-[#7B1113] text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <span>🌟</span>
                <span>{isEn ? 'Open Saptarishis & Wives Sub-Page' : 'సప్తర్షులు & పత్నుల సచిత్ర ఉప-పుట చూడండి'}</span>
              </button>
            </div>

            {/* Branch 2 */}
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E65100] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔱</span>
                <div>
                  <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    2. {isEn ? '8 Rudras' : 'అష్ట రుద్రులు'}
                  </h4>
                  <span className="text-[10px] text-[#E65100] font-bold">
                    {isEn ? 'Primal Cosmic Energies' : 'పంచభూత & తేజో తత్త్వాలు'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn
                  ? 'Rudra, Bhava, Sarva, Ishana, Pashupati, Bhima, Ugra, Mahadeva. Governing water, earth, ether, sun, air, moon and sacrifice.'
                  : 'రుద్ర, భవ, శర్వ, ఈశాన, పశుపతి, భీమ, ఉగ్ర, మహాదేవులు. వీరు సృష్టిలోని లయకారక మరియు ప్రాణ శక్తి తత్త్వములను నియంత్రించు అధిదేవతలు.'}
              </p>
            </div>

            {/* Branch 3 */}
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#1976D2] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪷</span>
                <div>
                  <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    3. {isEn ? '4 Kumaras' : 'చతుఃకుమారులు'}
                  </h4>
                  <span className="text-[10px] text-[#1976D2] font-bold">
                    {isEn ? 'Sanaka, Sanatana, Sanananda, Sanatkumara' : 'సనక, సనాతన, సనంద, సనత్కుమారులు'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn
                  ? 'The eternal celibates who refused physical worldly reproduction to uphold divine devotion, knowledge, and self-realization.'
                  : 'సంసార బంధాలకు అతీతంగా నిత్యం 5 ఏళ్ళ బాలుర రూపంలో ఉంటూ, శ్రీహరి భక్తిని, పరమహంస నివృత్తి మార్గాన్ని ప్రబోధించు దివ్య మునులు.'}
              </p>
            </div>

            {/* Branch 4 */}
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#2E7D32] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    4. {isEn ? 'Lord Dharma' : 'శ్రీ ధర్మదేవుడు'}
                  </h4>
                  <span className="text-[10px] text-[#2E7D32] font-bold">
                    {isEn ? 'Virtue & Moral Law' : 'ధర్మానికి మూలపురుషుడు'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn
                  ? 'Born from Brahma\'s heart. Father of Sri Nara-Narayana Avatars, foundational to spiritual austerity and protection of the cosmos.'
                  : 'బ్రహ్మ హృదయ సంభవుడు. దక్షుని 13 మంది కన్యల పతి. వీరి భార్యయైన మూర్తిదేవి గర్భమున శ్రీమహావిష్ణువు నరనారాయణ రూపమున అవతరించెను.'}
              </p>
            </div>

            {/* Branch 5 */}
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D84315] shadow-sm space-y-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👑</span>
                <div>
                  <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    5. {isEn ? 'Manu Svayambhuva & Royal Dynasties' : 'స్వాయంభువ మనువు & సూర్య-చంద్ర రాజవంశాలు'}
                  </h4>
                  <span className="text-[10px] text-[#D84315] font-bold">
                    {isEn ? 'Uttanapada, Priyavrata, Prasuti, Akuti' : 'ఉత్తానపాదుడు, ప్రియవ్రతుడు, ప్రసూతి, ఆకూతి'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn
                  ? 'The royal progenitor of humankind. His son Uttanapada begot Dhruva and King Prithu; his son Priyavrata established the 26-generation lineage featuring Lord Rishabha (Avatar) and King Bharata (who named Bharatavarsha); his daughter Prasuti married Daksha Prajapati.'
                  : 'మానవ జాతికి ఆద్యుడు. ఇతని కుమారుడైన ఉత్తానపాదుని వంశంలో ధ్రువుడు, చక్రవర్తి పృథువు, 10 మంది ప్రచేతసులు మరియు దక్ష పునర్జన్మ సంభవించెను. మరో కుమారుడైన ప్రియవ్రతుని వంశంలో శ్రీ ఋషభావతారము మరియు భరత చక్రవర్తి (భరతఖండ నామకారకుడు) వెలిసిరి.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. KASHYAPA & LINEAGES TAB */}
      {/* ============================================================ */}
      {activeTab === 'kashyapa_detail' && (
        <div className="flex-1 p-4 sm:p-6 overflow-auto space-y-4">
          <div className="bg-[#FFFDF7] p-4 rounded-xl border border-[#D4AF37]">
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
              {isEn ? 'Kashyapa Prajapati & Daksha\'s Daughters Genealogy' : 'కశ్యప ప్రజాపతి & దక్ష పుత్రికల సంతతి విస్తరణ'}
            </h3>
            <p className="text-xs text-[#5D4037] mt-1">
              {isEn
                ? 'Daksha Prajapati gave 13/17 of his daughters to Sage Kashyapa (son of Marichi), through whom all living beings in creation emerged.'
                : 'పునర్జన్మలో ప్రచేతసుల కుమారుడైన దక్ష ప్రజాపతి తన పుత్రికలను మరీచి కుమారుడైన కశ్యపునకు ఇచ్చెను. వీరి ద్వారానే సమస్త దేవ, దానవ, మానవ, పక్షి, సర్ప జంతుజాలములు ఉద్భవించెను.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KASHYAPA_WIVES_AND_PROGENY.map((w, idx) => (
              <div key={idx} className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-2">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{w.icon}</span>
                    <h4 className="text-sm font-bold text-[#7B1113]">
                      {isEn ? w.wifeEn : w.wifeTe}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (w.badgeEn === '12 Adityas') {
                        setIsAdityasOpen(true);
                      }
                    }}
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border transition-all ${
                      w.badgeEn === '12 Adityas'
                        ? 'bg-[#FFD54F] hover:bg-[#FFC107] text-[#7B1113] border-2 border-[#D84315] shadow-xs cursor-pointer hover:scale-105 ring-2 ring-amber-300'
                        : 'text-[#D84315] bg-[#FFF8E1] border-[#D4AF37]'
                    }`}
                    title={w.badgeEn === '12 Adityas' ? (isEn ? 'Click to open 12 Adityas Pop-up Window' : '12 మంది ఆదిత్యుల పాప్-అప్ విండో చూడండి') : undefined}
                  >
                    {isEn ? w.badgeEn : w.badgeTe}
                  </button>
                </div>
                <p className="text-xs text-[#5D4037]">
                  {isEn ? w.titleEn : w.titleTe}
                </p>
                <div className="bg-[#FAF7F0] p-2 rounded-lg border border-[#E8DCC4] text-xs space-y-1">
                  <span className="font-bold text-[#7B1113] block">
                    {isEn ? 'Key Progeny:' : 'ముఖ్య సంతతి:'}
                  </span>
                  <div className="space-y-0.5 text-[#2C1810]">
                    {(isEn ? w.progenyEn : w.progenyTe).map((item, cIdx) => (
                      <div key={cIdx} className="text-[11px]">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 12 Mandi Adityas Dedicated Pop-up Button */}
                {w.badgeEn === '12 Adityas' && (
                  <button
                    type="button"
                    onClick={() => setIsAdityasOpen(true)}
                    className="w-full mt-2 py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#D84315] via-[#B71C1C] to-[#7B1113] hover:from-[#BF360C] hover:to-[#5E0011] text-[#FFE082] hover:text-[#FFFFFF] text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-[#FFD54F] hover:scale-102"
                  >
                    <span className="text-sm">☀️</span>
                    <span>{isEn ? '12 Adityas Details' : '12 మంది ఆదిత్యులు (పాప్-అప్ విండో)'}</span>
                    <span className="text-[10px] bg-black/25 px-1.5 py-0.5 rounded text-[#FFF8E1]">
                      {isEn ? 'Pop-up' : 'పాప్-అప్'}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5B. SAPTARISHIS SUB-PAGE TAB */}
      {/* ============================================================ */}
      {activeTab === 'saptarishis' && (
        <div className="flex-1 p-4 sm:p-6 overflow-auto">
          <SaptarishiSubView 
            onBackToChart={() => setActiveTab('chart')}
            onBackToBranches={() => setActiveTab('branches')}
          />
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. BOTTOM BANNER & ACTION CALLOUT */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-4 py-3 border-t-2 border-[#D4AF37] flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FFD54F]" />
          <span>
            {isEn
              ? 'Family of Brahma: Connecting 5 generations of divine descent from Brahma to Daksha and Kashyapa'
              : 'బ్రహ్మ వంశము: చతుర్ముఖ బ్రహ్మ నుండి దక్ష ప్రజాపతి మరియు కశ్యప సంతతి వరకు 5 తరాల సృష్టి పరంపర'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setViewMode('sanatana_chronology');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1 rounded-lg bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] font-bold cursor-pointer transition-colors"
          >
            {isEn ? 'Go to Sanatana Chronology' : 'సనాతన ధర్మ ఆవిర్భావము'}
          </button>
          <button
            onClick={() => {
              setViewMode('tree');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1 rounded-lg bg-[#D84315] hover:bg-[#BF360C] text-white font-bold cursor-pointer transition-colors"
          >
            {isEn ? 'Explore Family Tree' : 'సంపూర్ణ వంశవృక్షము'}
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 7. DEDICATED POP-UP MODAL: KASHYAPA PRAJAPATI & KASHMIR LEGEND */}
      {/* (Opened by clicking "↳ కశ్యప ప్రజాపతి" inside Marichi Maharshi) */}
      {/* ============================================================ */}
      {isKashyapaChildrenModalOpen && (
        <div 
          onClick={() => setIsKashyapaChildrenModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#FEF08A] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#F59E0B] sticky top-0 z-10">
              <div className="flex items-start gap-3">
                <div 
                  onClick={() => setLightboxImg({
                    src: KASHYAP_RISHI_KASHMIR_LEGEND.seatedPortraitImg,
                    title: isEn ? 'Maharshi Kashyapa' : 'మహర్షి కశ్యప ప్రజాపతి',
                    subtitle: isEn ? 'Cosmic Prajapati & Legendary Founder of Kashmir' : 'సకల ప్రాణుల ఆవిర్భావ పిత & కశ్మీర పౌరాణిక రూపకర్త'
                  })}
                  className="w-13 h-15 sm:w-14 sm:h-16 rounded-xl bg-[#0F172A] border-2 border-[#F59E0B] overflow-hidden shrink-0 shadow-md cursor-pointer group hover:scale-105 transition-transform"
                  title={isEn ? 'Click to enlarge portrait' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                >
                  <img 
                    src={KASHYAP_RISHI_KASHMIR_LEGEND.seatedPortraitImg} 
                    alt="Kashyap Rishi"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded bg-[#F59E0B] text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? 'Son of Marichi • Prajapati & Saptarishi' : 'మరీచి మహర్షి పుత్రుడు • ప్రజాపతి & సప్తర్షి'}
                    </span>
                    <span className="text-xs text-[#FDE047] font-extrabold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{isEn ? 'Kashmir Founder Legend & 6 Cosmic Lineages' : 'కశ్మీర ఆవిర్భావ గాథ & 6 దివ్య సంతాన వర్గాలు'}</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif text-white mt-1">
                    {isEn ? 'Maharshi Kashyapa: Founder of Kashmir & Universal Father' : 'కశ్యప ప్రజాపతి: కశ్మీర ఆవిర్భావ చరిత్ర & సకల జీవ సంతానం'}
                  </h3>
                  <p className="text-xs text-[#FEF08A]/90 mt-0.5 font-semibold">
                    {isEn 
                      ? 'Nilamata Purana Legend of Lake Satisar • Creation of Kashmir Valley • All Living Lineages' 
                      : 'నీలమత పురాణం & రాజతరంగిణి ప్రమాణాలు • సతీసర విముక్తి • కశ్మీర నామోత్పత్తి • సకల ప్రాణుల ఆవిర్భావం'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsKashyapaChildrenModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tab Navigation Bar */}
            <div className="bg-[#1E293B] px-3 sm:px-5 py-2.5 border-b border-[#F59E0B]/50 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-thin">
              <button
                type="button"
                onClick={() => setKashyapaModalTab('kashmir')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  kashyapaModalTab === 'kashmir'
                    ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white border-2 border-[#FEF08A] shadow-md scale-[1.02]'
                    : 'bg-[#0F172A]/80 hover:bg-[#0F172A] text-[#FEF08A] border border-[#F59E0B]/40'
                }`}
              >
                <Mountain className="w-4 h-4 text-[#FEF08A]" />
                <span>{isEn ? 'Kashyap Rishi & Kashmir Legend' : 'కశ్యప మహర్షి & కశ్మీర ఆవిర్భావ గాథ'}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#FEF08A] text-[#0F172A]">
                  {isEn ? 'Nilamata Purana' : 'నీలమత పురాణం'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setKashyapaModalTab('lineages')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  kashyapaModalTab === 'lineages'
                    ? 'bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white border-2 border-[#FEF08A] shadow-md scale-[1.02]'
                    : 'bg-[#0F172A]/80 hover:bg-[#0F172A] text-[#FEF08A] border border-[#F59E0B]/40'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FEF08A]" />
                <span>{isEn ? '6 Cosmic Lineages (From Poster)' : 'సకల ప్రాణుల 6 సంతాన వర్గాలు'}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#7C3AED] text-[#FEF08A]">
                  {isEn ? '6 Lineages' : '6 వంశాలు'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setKashyapaModalTab('posters')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  kashyapaModalTab === 'posters'
                    ? 'bg-gradient-to-r from-[#0F766E] to-[#047857] text-white border-2 border-[#FEF08A] shadow-md scale-[1.02]'
                    : 'bg-[#0F172A]/80 hover:bg-[#0F172A] text-[#FEF08A] border border-[#F59E0B]/40'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#FEF08A]" />
                <span>{isEn ? 'Complete Source Posters (2)' : 'మూల సచిత్ర పటాలు (2)'}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#059669] text-white">
                  HD
                </span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">

              {/* ============================================================ */}
              {/* TAB 1: KASHMIR FOUNDER LEGEND (NEW SOURCE INFOGRAPHIC)       */}
              {/* ============================================================ */}
              {kashyapaModalTab === 'kashmir' && (
                <div className="space-y-6">

                  {/* 1.1 Hero Section: Seated Portrait + Nilamata Purana Context + Quick Highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-[#1E293B]/90 p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl">
                    {/* Seated Kashyap Rishi Portrait */}
                    <div className="lg:col-span-3 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => setLightboxImg({
                          src: KASHYAP_RISHI_KASHMIR_LEGEND.seatedPortraitImg,
                          title: isEn ? 'Kashyap Rishi: Legendary Founder of Kashmir' : 'కశ్యప మహర్షి: కశ్మీర పౌరాణిక రూపకర్త',
                          subtitle: isEn ? 'Seated in penance on Hari Parbat' : 'హరి పర్వతంపై తపస్సులో నిమగ్నమైన కశ్యపుడు'
                        })}
                        className="relative w-40 sm:w-48 rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-2xl cursor-pointer group bg-[#0F172A]"
                        title={isEn ? 'Click to enlarge portrait' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                      >
                        <img 
                          src={KASHYAP_RISHI_KASHMIR_LEGEND.seatedPortraitImg} 
                          alt="Kashyap Rishi Seated"
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-black/65 text-[#FEF08A] rounded-md p-1 shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-center">
                          <span className="text-[10px] font-extrabold text-[#FEF08A] uppercase tracking-wider block">
                            {isEn ? 'Maharshi Kashyapa' : 'మహర్షి కశ్యపుడు'}
                          </span>
                          <span className="text-[9px] text-white/90 font-medium">
                            {isEn ? 'Architect of Kashmir' : 'కశ్మీర పుణ్యభూమి రూపకర్త'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Textual & Scriptural Context */}
                    <div className="lg:col-span-6 bg-[#FFFBEB] p-4 sm:p-5 rounded-2xl border-2 border-[#D97706] shadow-md space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#78350F] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-[#F59E0B]" />
                          <span>{isEn ? 'According to Nilamata Purana & Rajatarangini' : 'నీలమత పురాణం & రాజతరంగిణి ప్రమాణాలు'}</span>
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#78350F] font-telugu-serif leading-snug">
                        {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.titleEn : KASHYAP_RISHI_KASHMIR_LEGEND.titleTe}
                      </h4>
                      <p className="text-xs text-[#1E293B] font-semibold leading-relaxed font-telugu-serif">
                        {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.sageBioEn : KASHYAP_RISHI_KASHMIR_LEGEND.sageBioTe}
                      </p>

                      {/* Scriptural Quote Box */}
                      <div className="p-3 rounded-xl bg-[#FEF3C7] border border-[#F59E0B] space-y-1">
                        <div className="text-[10px] font-extrabold text-[#92400E] uppercase tracking-wider flex items-center gap-1">
                          <span>📜</span>
                          <span>{isEn ? 'Nilamata Purana Testimony:' : 'నీలమత పురాణ శ్లోక తాత్పర్యం:'}</span>
                        </div>
                        <p className="text-xs font-bold text-[#78350F] italic font-telugu-serif">
                          “{isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.authorities[0].quoteEn : KASHYAP_RISHI_KASHMIR_LEGEND.authorities[0].quoteTe}”
                        </p>
                      </div>

                      {/* Ancient Proverb Callout */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-[#FEF08A] border border-[#F59E0B] flex items-center gap-2 text-xs font-bold">
                        <span className="text-base shrink-0">✨</span>
                        <div className="leading-snug">
                          <span className="text-[#FDE047] block text-[10px] uppercase font-extrabold">
                            {isEn ? 'Famous Ancient Proverb:' : 'ప్రసిద్ధ ప్రాచీన నానుడి:'}
                          </span>
                          <span>{isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.etymology.ancientSayingEn : KASHYAP_RISHI_KASHMIR_LEGEND.etymology.ancientSayingTe}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Legend Highlights Card */}
                    <div className="lg:col-span-3 space-y-2">
                      <div className="p-3.5 rounded-2xl bg-[#0F172A] border-2 border-[#F59E0B] text-white shadow-md space-y-2.5 text-xs">
                        <div className="text-[11px] font-extrabold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5 border-b border-[#F59E0B]/40 pb-1.5">
                          <span>⚡</span>
                          <span>{isEn ? 'Key Legend Facts' : 'ముఖ్య విశేషాలు'}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-sm shrink-0">🌊</span>
                            <div>
                              <span className="text-[10px] text-[#FEF08A] font-bold block">{isEn ? 'Ancient Lake:' : 'ప్రాచీన సరస్సు:'}</span>
                              <span className="font-extrabold text-white text-[11px]">{isEn ? 'Satisar (Lake of Sati)' : 'సతీసరము (సతీదేవి సరస్సు)'}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="text-sm shrink-0">👹</span>
                            <div>
                              <span className="text-[10px] text-[#FEF08A] font-bold block">{isEn ? 'Vanquished Demon:' : 'సంహరింపబడిన రాక్షసుడు:'}</span>
                              <span className="font-extrabold text-white text-[11px]">{isEn ? 'Jalodbhava (Water-born)' : 'జలోద్భవుడు'}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="text-sm shrink-0">🏔️</span>
                            <div>
                              <span className="text-[10px] text-[#FEF08A] font-bold block">{isEn ? 'Drainage Breach Point:' : 'పర్వత ఛేదన స్థలం:'}</span>
                              <span className="font-extrabold text-white text-[11px]">{isEn ? 'Baramulla (Varahamula)' : 'బారాముల్లా (వరాహమూల)'}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="text-sm shrink-0">🔬</span>
                            <div>
                              <span className="text-[10px] text-[#FEF08A] font-bold block">{isEn ? 'Geological Proof:' : 'భూగర్భ నిరూపణ:'}</span>
                              <span className="font-extrabold text-white text-[11px]">{isEn ? 'Karewa Lacustrine Beds' : 'కరేవా సరస్సు అవక్షేపాలు'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.2 The Legend: How Kashmir Was Born (5 Story Steps Matching Source Poster) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2 px-1">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                          {isEn ? 'Step-by-Step Epic Narrative' : 'సచిత్ర పౌరాణిక ఘట్టాలు'}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white font-telugu-serif flex items-center gap-2">
                          <span>🏞️</span>
                          <span>{isEn ? 'THE LEGEND: HOW KASHMIR WAS BORN' : 'కశ్మీర లోయ ఎలా ఆవిర్భవించింది? (5 దివ్య ఘట్టాలు)'}</span>
                        </h4>
                      </div>
                      <span className="text-xs text-[#FEF08A] bg-[#1E293B] px-3 py-1 rounded-full border border-[#F59E0B]/50 font-semibold">
                        {isEn ? '5 Sequential Chapters' : '5 క్రమానుగత అంచెలు'}
                      </span>
                    </div>

                    {/* Step Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {KASHYAP_RISHI_KASHMIR_LEGEND.steps.map((st) => (
                        <div 
                          key={st.id}
                          className={`rounded-2xl border-2 overflow-hidden shadow-xl flex flex-col justify-between transition-all hover:scale-[1.01] ${
                            st.stepNumber === 5 ? 'md:col-span-2 lg:col-span-2' : ''
                          }`}
                          style={{
                            backgroundColor: st.bgColor,
                            borderColor: st.borderColor
                          }}
                        >
                          <div>
                            {/* Step Header */}
                            <div 
                              className="text-white p-2.5 sm:p-3 text-center border-b-2 flex items-center justify-between gap-2"
                              style={{ 
                                backgroundColor: st.accentColor,
                                borderColor: st.borderColor 
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-white text-[#0F172A] font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                                  {st.stepNumber}
                                </span>
                                <h5 className="font-extrabold text-xs sm:text-sm text-white font-telugu-serif tracking-wide text-left">
                                  {isEn ? st.titleEn : st.titleTe}
                                </h5>
                              </div>
                              <span className="text-[10px] font-bold text-white/90 bg-black/25 px-2 py-0.5 rounded-full shrink-0">
                                {isEn ? st.subtitleEn : st.subtitleTe}
                              </span>
                            </div>

                            {/* Extracted Artwork Image */}
                            <div 
                              onClick={() => setLightboxImg({
                                src: st.img,
                                title: isEn ? st.titleEn : st.titleTe,
                                subtitle: isEn ? st.descEn : st.descTe
                              })}
                              className={`relative w-full bg-[#0F172A] overflow-hidden cursor-pointer group border-b ${
                                st.stepNumber === 5 ? 'h-52' : 'h-44'
                              }`}
                              style={{ borderColor: st.borderColor }}
                              title={isEn ? 'Click to enlarge artwork' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                            >
                              <img 
                                src={st.img} 
                                alt={st.titleEn}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-2 right-2 bg-black/65 text-[#FEF08A] rounded-md p-1 opacity-85 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-3.5 h-3.5" />
                              </div>
                              <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded bg-black/75 text-[#FEF08A] text-[10px] font-semibold">
                                {isEn ? `Chapter ${st.stepNumber}` : `ఘట్టం ${st.stepNumber}`}
                              </div>
                            </div>

                            {/* Description */}
                            <div className="p-3.5 space-y-2">
                              <p className="text-xs text-[#1E293B] font-medium leading-relaxed font-telugu-serif">
                                {isEn ? st.descEn : st.descTe}
                              </p>
                            </div>
                          </div>

                          {/* Footer Tag */}
                          <div className="p-3 pt-0">
                            <div 
                              className="px-2.5 py-1 rounded-xl bg-white border text-[10.5px] font-bold text-left flex items-center justify-between"
                              style={{ borderColor: st.borderColor, color: st.accentColor }}
                            >
                              <span>{isEn ? `Step ${st.stepNumber} of 5` : `దశ ${st.stepNumber} / 5`}</span>
                              <span className="text-[10px] text-[#475569]">
                                {isEn ? 'Nilamata Purana Legend' : 'నీలమత పురాణ గాథ'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Right of Step 5: Origin of Name Card */}
                      <div className="rounded-2xl border-2 border-[#D97706] bg-[#FFFBEB] p-4 shadow-xl flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#78350F] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider">
                            <span>🏛️</span>
                            <span>{isEn ? 'ETYMOLOGY' : 'నామోత్పత్తి విశేషం'}</span>
                          </div>

                          <h5 className="font-bold text-sm sm:text-base text-[#78350F] font-telugu-serif">
                            {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.etymology.titleEn : KASHYAP_RISHI_KASHMIR_LEGEND.etymology.titleTe}
                          </h5>

                          <div className="p-2.5 rounded-xl bg-white border border-[#D97706] space-y-1">
                            <span className="text-[11px] font-extrabold text-[#B45309] block">
                              {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.etymology.termsEn : KASHYAP_RISHI_KASHMIR_LEGEND.etymology.termsTe}
                            </span>
                            <p className="text-xs text-[#1E293B] font-medium leading-relaxed">
                              {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.etymology.meaningEn : KASHYAP_RISHI_KASHMIR_LEGEND.etymology.meaningTe}
                            </p>
                          </div>

                          {/* Sage Quote */}
                          <div className="p-3 rounded-xl bg-[#FEF3C7] border-l-3 border-[#D97706] space-y-1">
                            <p className="text-xs font-bold text-[#78350F] italic font-telugu-serif">
                              “{isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.etymology.quoteEn : KASHYAP_RISHI_KASHMIR_LEGEND.etymology.quoteTe}”
                            </p>
                          </div>
                        </div>

                        {/* Card Image Preview */}
                        <div 
                          onClick={() => setLightboxImg({
                            src: KASHYAP_RISHI_KASHMIR_LEGEND.originNameCardImg,
                            title: isEn ? 'Origin of the Name "Kashmir"' : '"కశ్మీర్" నామోత్పత్తి వివరాల కార్డు',
                            subtitle: isEn ? 'Kashyapa-Mira / Kashyapa-Mar' : 'కశ్యప-మీర లేదా కశ్యప-మరు'
                          })}
                          className="relative h-28 rounded-xl overflow-hidden border border-[#D97706] bg-[#0F172A] cursor-pointer group"
                        >
                          <img 
                            src={KASHYAP_RISHI_KASHMIR_LEGEND.originNameCardImg} 
                            alt="Origin of Name Kashmir"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute top-1.5 right-1.5 bg-black/60 text-[#FEF08A] rounded p-1">
                            <Maximize2 className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.3 The Journey of Kashmir — A Timeline (From Poster) */}
                  <div className="bg-[#1E293B] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-[#0F172A] border border-[#F59E0B] flex items-center justify-center text-base text-[#F59E0B]">
                          ⏳
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[#FEF08A] font-telugu-serif">
                            {isEn ? 'THE JOURNEY OF KASHMIR — A TIMELINE' : 'కశ్మీర ప్రస్థానం — కాలక్రమ పరిణామం (5 దశలు)'}
                          </h4>
                          <span className="text-xs text-white/80 font-medium">
                            {isEn ? 'From Prehistoric Glacial Lake to Spiritual Civilization' : 'హిమనీనద సతీసర సరస్సు నుండి వేద సంస్కృతి శారదా పీఠం వరకు'}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setLightboxImg({
                          src: KASHYAP_RISHI_KASHMIR_LEGEND.timelinePanelImg,
                          title: isEn ? 'The Journey of Kashmir - Timeline Panel' : 'కశ్మీర కాలక్రమ పటము',
                          subtitle: isEn ? 'Extracted timeline panel from source infographic' : 'మూల పోస్టర్ నుండి సేకరించిన కాలక్రమ పటం'
                        })}
                        className="px-3 py-1 rounded-lg bg-[#0F172A] hover:bg-black text-[#FEF08A] border border-[#F59E0B] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{isEn ? 'Enlarge Timeline Strip' : 'టైమ్‌లైన్ పటం జూమ్ చేయండి'}</span>
                      </button>
                    </div>

                    {/* Timeline Strip Image */}
                    <div 
                      onClick={() => setLightboxImg({
                        src: KASHYAP_RISHI_KASHMIR_LEGEND.timelinePanelImg,
                        title: isEn ? 'The Journey of Kashmir - Timeline Panel' : 'కశ్మీర కాలక్రమ పటము',
                        subtitle: isEn ? 'Extracted timeline panel from source infographic' : 'మూల పోస్టర్ నుండి సేకరించిన కాలక్రమ పటం'
                      })}
                      className="rounded-xl overflow-hidden border border-[#F59E0B]/50 bg-[#0F172A] p-2 flex justify-center cursor-pointer group"
                    >
                      <img 
                        src={KASHYAP_RISHI_KASHMIR_LEGEND.timelinePanelImg} 
                        alt="The Journey of Kashmir Timeline"
                        className="max-h-40 w-auto object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    {/* Interactive 5 Stage Timeline Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                      {KASHYAP_RISHI_KASHMIR_LEGEND.timeline.map((item) => (
                        <div 
                          key={item.id}
                          className="bg-[#0F172A] p-3 rounded-xl border border-[#F59E0B]/50 flex flex-col justify-between space-y-2 hover:border-[#F59E0B] transition-colors"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#0F172A] font-extrabold text-xs flex items-center justify-center">
                                {item.stage}
                              </span>
                              <span className="text-lg">{item.icon}</span>
                            </div>
                            <h6 className="text-xs font-bold text-[#FEF08A] font-telugu-serif">
                              {isEn ? item.titleEn : item.titleTe}
                            </h6>
                            <span className="text-[10px] text-[#FDE047] font-semibold block">
                              {isEn ? item.subtitleEn : item.subtitleTe}
                            </span>
                          </div>
                          <p className="text-[11px] text-white/90 font-medium leading-relaxed border-t border-white/10 pt-1.5 font-telugu-serif">
                            {isEn ? item.descEn : item.descTe}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 1.4 Historical & Modern Geological Importance Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-[#FFFBEB] p-4 sm:p-5 rounded-2xl border-2 border-[#D97706] shadow-xl">
                    <div className="lg:col-span-4 flex flex-col items-center">
                      <div 
                        onClick={() => setLightboxImg({
                          src: KASHYAP_RISHI_KASHMIR_LEGEND.historicalImportanceImg,
                          title: isEn ? 'Historical Importance of Kashyap Rishi' : 'కశ్యప మహర్షి చారిత్రక ప్రాధాన్యత',
                          subtitle: isEn ? 'Mythological founder & Geological validation' : 'పౌరాణిక వ్యవస్థాపకుడు & ఆధునిక భూగర్భ ఆధారాలు'
                        })}
                        className="relative w-full max-w-xs rounded-xl overflow-hidden border border-[#D97706] shadow-md bg-[#0F172A] cursor-pointer group"
                      >
                        <img 
                          src={KASHYAP_RISHI_KASHMIR_LEGEND.historicalImportanceImg} 
                          alt="Historical Importance"
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-1.5 right-1.5 bg-black/60 text-[#FEF08A] rounded p-1">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#78350F] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider">
                        <span>🏛️</span>
                        <span>{isEn ? 'HISTORICAL & GEOLOGICAL SIGNIFICANCE' : 'చారిత్రక & భూగర్భ శాస్త్ర నిరూపణ'}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#78350F] font-telugu-serif">
                        {isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.historicalImportance.titleEn : KASHYAP_RISHI_KASHMIR_LEGEND.historicalImportance.titleTe}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {KASHYAP_RISHI_KASHMIR_LEGEND.historicalImportance.points.map((pt, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white border border-[#D97706] space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base">{pt.icon}</span>
                              <h5 className="font-bold text-xs text-[#78350F] font-telugu-serif">
                                {isEn ? pt.titleEn : pt.titleTe}
                              </h5>
                            </div>
                            <p className="text-[11px] text-[#1E293B] font-medium leading-relaxed">
                              {isEn ? pt.descEn : pt.descTe}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 1.5 Heritage & Pride Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-2 border-[#F59E0B] text-center space-y-2 shadow-lg">
                    <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#F59E0B] text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider">
                      <span>👑</span>
                      <span>{isEn ? 'OUR HERITAGE • OUR PRIDE' : 'మన సనాతన సంస్కృతి • మన గౌరవం'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#FEF08A] font-semibold leading-relaxed font-telugu-serif max-w-3xl mx-auto">
                      “{isEn 
                        ? 'Kashyap Rishi\'s legacy is an integral part of the history, faith, and living culture of Jammu & Kashmir.' 
                        : 'కశ్యప మహర్షి యొక్క దివ్య చరిత్ర జమ్మూ కశ్మీర్ యొక్క చారిత్రక వారసత్వంలో, విశ్వాసంలో మరియు సనాతన జీవన సంస్కృతిలో అవిభాజ్యమైన భాగం.'}”
                    </p>
                    <div className="text-sm font-extrabold text-[#F59E0B] tracking-widest uppercase pt-1">
                      {isEn ? '“Kashmir Was Created by Kashyap Rishi”' : '“కశ్మీరాన్ని సృష్టించింది కశ్యప మహర్షి”'}
                    </div>
                  </div>

                  {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
                  <div className="pt-3 border-t-2 border-[#F59E0B]/50 flex items-center justify-between flex-wrap gap-2 text-xs bg-[#0F172A] p-3 rounded-2xl border border-[#F59E0B]/30">
                    <span className="font-bold text-[#FEF08A] font-telugu-serif flex items-center gap-1.5">
                      <span>🖼️</span>
                      <span>{isEn ? 'మూల సచిత్ర పటాలు (Source Illustrated Posters):' : 'మూల సచిత్ర పటాలు:'}</span>
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setLightboxImg({
                          src: KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg,
                          title: isEn ? 'Kashyap Rishi & Kashmir - Full Source Infographic' : 'కశ్యప మహర్షి & కశ్మీర్ - పూర్తి సచిత్ర పోస్టర్',
                          subtitle: isEn ? 'Original high-resolution poster' : 'మూల హై-రిజల్యూషన్ సచిత్ర పటం'
                        })}
                        className="text-[#FEF08A] hover:text-[#FBBF24] font-bold underline flex items-center gap-1.5 cursor-pointer bg-[#1E293B] px-3 py-1.5 rounded-xl border border-[#F59E0B]/50 shadow-2xs hover:shadow-xs transition-all"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{isEn ? 'Kashyap Rishi & Kashmir Legend Original Poster (Click to View & Zoom)' : 'కశ్యప మహర్షి & కశ్మీర్ ఆవిర్భావ మూల సచిత్ర పటం (వీక్షించండి)'}</span>
                      </button>
                      <a
                        href={KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold flex items-center gap-1 text-[11px] shadow-2xs transition-all cursor-pointer"
                        title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
                      </a>
                    </div>
                  </div>

                </div>
              )}

              {/* ============================================================ */}
              {/* TAB 2: 6 COSMIC LINEAGES (EXISTING DETAILED POSTER DATA)     */}
              {/* ============================================================ */}
              {kashyapaModalTab === 'lineages' && (
                <div className="space-y-6">

                  {/* Top Hero Section: Kashyapa Portrait + Intro Parchment Box + Diversity Divine Seal */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#1E293B]/90 p-4 rounded-2xl border-2 border-[#D4AF37] shadow-lg">
                    {/* Left: Kashyapa Rishi Portrait */}
                    <div className="md:col-span-3 flex justify-center">
                      <div 
                        onClick={() => setLightboxImg({
                          src: KASHYAPA_CHILDREN_POSTER_DETAILS.kashyapaPortraitImg,
                          title: isEn ? 'Maharshi Kashyapa Prajapati' : 'మహర్షి కశ్యప ప్రజాపతి',
                          subtitle: isEn ? 'Progenitor of All Living Beings' : 'సకల ప్రాణుల ఆవిర్భావ పిత'
                        })}
                        className="relative w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-xl cursor-pointer group"
                        title={isEn ? 'Click to enlarge portrait' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                      >
                        <img 
                          src={KASHYAPA_CHILDREN_POSTER_DETAILS.kashyapaPortraitImg} 
                          alt="Kashyapa Prajapati Portrait"
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-1.5 right-1.5 bg-black/60 text-[#FEF08A] rounded-md p-1">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Middle: Parchment Introduction Box */}
                    <div className="md:col-span-6 bg-[#FFFBEB] p-4 sm:p-5 rounded-2xl border-2 border-[#D97706] shadow-md space-y-2 text-center md:text-left">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#78350F] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider">
                        <span>🪷</span>
                        <span>{isEn ? 'Cosmic Progenitor (Prajapati)' : 'సృష్టి విస్తరణ కర్త • ప్రజాపతి'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1E293B] font-semibold leading-relaxed font-telugu-serif">
                        {isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.introEn : KASHYAPA_CHILDREN_POSTER_DETAILS.introTe}
                      </p>
                      <div className="pt-1 flex items-center justify-center md:justify-start gap-2 flex-wrap">
                        <button
                          onClick={() => setLightboxImg({
                            src: KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg,
                            title: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.titleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.titleTe,
                            subtitle: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleTe
                          })}
                          className="px-3 py-1 rounded-lg bg-[#78350F] hover:bg-[#92400E] text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{isEn ? 'View Full Source Poster' : 'మూల పోస్టర్ జూమ్ వ్యూ'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Diversity is the Design of the Divine Seal */}
                    <div className="md:col-span-3 flex flex-col items-center justify-center text-center space-y-2">
                      <div 
                        onClick={() => setLightboxImg({
                          src: KASHYAPA_CHILDREN_POSTER_DETAILS.sealImg,
                          title: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.sealQuoteEn : KASHYAPA_CHILDREN_POSTER_DETAILS.sealQuoteTe,
                          subtitle: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleTe
                        })}
                        className="w-28 h-28 rounded-full border-2 border-[#F59E0B] overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform bg-[#0F172A]"
                      >
                        <img 
                          src={KASHYAPA_CHILDREN_POSTER_DETAILS.sealImg} 
                          alt="Diversity is the Design of the Divine"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-extrabold text-[#FDE047] tracking-wide px-2">
                        {isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.sealQuoteEn : KASHYAPA_CHILDREN_POSTER_DETAILS.sealQuoteTe}
                      </span>
                    </div>
                  </div>

                  {/* 6 Illustrated Lineages Grid (Matching the 6 Cards in the Source Poster) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {KASHYAPA_CHILDREN_POSTER_DETAILS.lineages.map((lin) => (
                      <div 
                        key={lin.id}
                        className="rounded-2xl border-2 overflow-hidden shadow-xl flex flex-col justify-between transition-all hover:scale-[1.01]"
                        style={{
                          backgroundColor: lin.cardBg,
                          borderColor: lin.borderColor
                        }}
                      >
                        <div>
                          {/* Card Header Ribbon */}
                          <div className={`bg-gradient-to-r ${lin.bannerBg} text-white p-3 text-center border-b-2`} style={{ borderColor: lin.borderColor }}>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#FEF08A] font-telugu-serif tracking-wide">
                              {isEn ? lin.titleEn : lin.titleTe}
                            </h4>
                            <span className="text-[11px] text-white/90 font-bold block">
                              {isEn ? lin.subtitleEn : lin.subtitleTe}
                            </span>
                          </div>

                          {/* Extracted Artwork from Source */}
                          <div 
                            onClick={() => setLightboxImg({
                              src: lin.img,
                              title: isEn ? `${lin.titleEn} ${lin.subtitleEn}` : `${lin.titleTe} ${lin.subtitleTe}`,
                              subtitle: isEn ? lin.includesEn : lin.includesTe
                            })}
                            className="relative h-44 w-full bg-[#0F172A] overflow-hidden cursor-pointer group border-b"
                            style={{ borderColor: lin.borderColor }}
                            title={isEn ? 'Click to enlarge artwork' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                          >
                            <img 
                              src={lin.img} 
                              alt={lin.titleEn}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-black/65 text-[#FEF08A] rounded-md p-1 opacity-85 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </div>
                            <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded bg-black/70 text-[#FEF08A] text-[10px] font-semibold">
                              {isEn ? lin.motherEn : lin.motherTe}
                            </div>
                          </div>

                          {/* Description */}
                          <div className="p-3.5 space-y-2.5">
                            <p className="text-xs text-[#1E293B] font-medium leading-relaxed text-center font-telugu-serif">
                              {isEn ? lin.descEn : lin.descTe}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Includes Box */}
                        <div className="p-3 pt-0 space-y-2">
                          <div className="p-2.5 rounded-xl bg-white border flex items-start gap-2 shadow-2xs" style={{ borderColor: lin.borderColor }}>
                            <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-[#0F172A] text-[#FEF08A] border border-[#F59E0B]">
                              {lin.icon}
                            </span>
                            <div className="text-left min-w-0">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider block" style={{ color: lin.borderColor }}>
                                {isEn ? 'Includes:' : 'ప్రముఖులు:'}
                              </span>
                              <p className="text-[11px] font-bold text-[#1E293B] leading-snug font-telugu-serif">
                                {isEn ? lin.includesEn : lin.includesTe}
                              </p>
                            </div>
                          </div>

                          {lin.id === 'devas' && (
                            <button
                              type="button"
                              onClick={() => setIsAdityasOpen(true)}
                              className="w-full py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-[#D84315] to-[#7B1113] hover:from-[#BF360C] hover:to-[#4A0012] text-[#FFE082] text-[11px] font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all"
                            >
                              <span>☀️</span>
                              <span>{isEn ? 'Open 12 Adityas Detailed Pop-up' : '12 మంది ఆదిత్యుల సమగ్ర వివరాలు తెరవండి'}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Harmony Footer Quote Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-2 border-[#F59E0B] text-center space-y-2 shadow-lg">
                    <p className="text-xs sm:text-sm text-[#FEF08A] font-semibold leading-relaxed font-telugu-serif max-w-3xl mx-auto">
                      “{isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.footerQuoteEn : KASHYAPA_CHILDREN_POSTER_DETAILS.footerQuoteTe}”
                    </p>
                    <div className="text-sm sm:text-base font-extrabold text-[#F59E0B] tracking-widest uppercase pt-1">
                      {isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.harmonyBannerEn : KASHYAPA_CHILDREN_POSTER_DETAILS.harmonyBannerTe}
                    </div>
                  </div>

                  {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
                  <div className="pt-3 border-t-2 border-[#F59E0B]/50 flex items-center justify-between flex-wrap gap-2 text-xs bg-[#0F172A] p-3 rounded-2xl border border-[#F59E0B]/30">
                    <span className="font-bold text-[#FEF08A] font-telugu-serif flex items-center gap-1.5">
                      <span>🖼️</span>
                      <span>{isEn ? 'మూల సచిత్ర పటాలు (Source Illustrated Posters):' : 'మూల సచిత్ర పటాలు:'}</span>
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setLightboxImg({
                          src: KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg,
                          title: isEn ? 'Kashyapa Prajapati Descendants Infographic' : 'కశ్యప ప్రజాపతి సకల ప్రాణి సృష్టి మూల పటం',
                          subtitle: isEn ? '13 Wives & Lineages Poster' : '13 మంది భార్యలు & సమస్త ప్రాణిజాల మూల సచిత్ర పటం'
                        })}
                        className="text-[#FEF08A] hover:text-[#FBBF24] font-bold underline flex items-center gap-1.5 cursor-pointer bg-[#1E293B] px-3 py-1.5 rounded-xl border border-[#F59E0B]/50 shadow-2xs hover:shadow-xs transition-all"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{isEn ? 'Kashyapa Children Complete Poster (Click to View & Zoom)' : 'కశ్యప సంతతి సంపూర్ణ మూల సచిత్ర పటం (వీక్షించండి)'}</span>
                      </button>
                      <a
                        href={KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold flex items-center gap-1 text-[11px] shadow-2xs transition-all cursor-pointer"
                        title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
                      </a>
                    </div>
                  </div>

                </div>
              )}

              {/* ============================================================ */}
              {/* TAB 3: COMPLETE SOURCE POSTERS (BOTH INFOGRAPHICS)            */}
              {/* ============================================================ */}
              {kashyapaModalTab === 'posters' && (
                <div className="space-y-6">

                  {/* Poster 1: Kashyap Rishi and Jammu & Kashmir */}
                  <div className="bg-[#1E293B] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                          {isEn ? 'Source Poster 1' : 'మూల పోస్టర్ 1'}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-[#FEF08A] font-telugu-serif flex items-center gap-2">
                          <span>🏔️</span>
                          <span>{isEn ? 'Kashyap Rishi & Jammu & Kashmir — The Legendary Founder of Kashmir' : 'కశ్యప మహర్షి & జమ్మూ కశ్మీర్ — కశ్మీర పౌరాణిక వ్యవస్థాపకుడు'}</span>
                        </h4>
                      </div>

                      <button
                        onClick={() => setLightboxImg({
                          src: KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg,
                          title: isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.titleEn : KASHYAP_RISHI_KASHMIR_LEGEND.titleTe,
                          subtitle: isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.subtitleEn : KASHYAP_RISHI_KASHMIR_LEGEND.subtitleTe
                        })}
                        className="px-3.5 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Full Screen Zoom' : 'పూర్తి స్క్రీన్ జూమ్'}</span>
                      </button>
                    </div>

                    <div 
                      onClick={() => setLightboxImg({
                        src: KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg,
                        title: isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.titleEn : KASHYAP_RISHI_KASHMIR_LEGEND.titleTe,
                        subtitle: isEn ? KASHYAP_RISHI_KASHMIR_LEGEND.subtitleEn : KASHYAP_RISHI_KASHMIR_LEGEND.subtitleTe
                      })}
                      className="bg-[#0F172A] rounded-xl p-3 border border-[#F59E0B]/60 flex justify-center cursor-pointer group overflow-hidden"
                    >
                      <img 
                        src={KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg} 
                        alt="Kashyap Rishi and Jammu and Kashmir Full Poster"
                        className="max-h-[580px] w-auto object-contain rounded-lg shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Poster 2: Children of Kashyapa Prajapati */}
                  <div className="bg-[#1E293B] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                          {isEn ? 'Source Poster 2' : 'మూల పోస్టర్ 2'}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-[#FEF08A] font-telugu-serif flex items-center gap-2">
                          <span>🌟</span>
                          <span>{isEn ? 'Children of Kashyapa Prajapati — Diversity is the Design of the Divine' : 'కశ్యప ప్రజాపతి సంతానం — సకల జీవరాశుల ఆవిర్భావ దర్శనం'}</span>
                        </h4>
                      </div>

                      <button
                        onClick={() => setLightboxImg({
                          src: KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg,
                          title: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.titleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.titleTe,
                          subtitle: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleTe
                        })}
                        className="px-3.5 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Full Screen Zoom' : 'పూర్తి స్క్రీన్ జూమ్'}</span>
                      </button>
                    </div>

                    <div 
                      onClick={() => setLightboxImg({
                        src: KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg,
                        title: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.titleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.titleTe,
                        subtitle: isEn ? KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleEn : KASHYAPA_CHILDREN_POSTER_DETAILS.subtitleTe
                      })}
                      className="bg-[#0F172A] rounded-xl p-3 border border-[#F59E0B]/60 flex justify-center cursor-pointer group overflow-hidden"
                    >
                      <img 
                        src={KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg} 
                        alt="Children of Kashyapa Prajapati Full Poster"
                        className="max-h-[580px] w-auto object-contain rounded-lg shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-[#0F172A] border-t border-[#F59E0B]/60 flex items-center justify-between gap-2 flex-wrap text-xs text-[#FEF08A]">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setKashyapaModalTab(kashyapaModalTab === 'kashmir' ? 'lineages' : 'kashmir')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1E293B] hover:bg-[#334155] text-[#FEF08A] border border-[#F59E0B]/60 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>
                    {kashyapaModalTab === 'kashmir' 
                      ? (isEn ? 'Switch to: 6 Cosmic Lineages' : 'మార్చండి: 6 దివ్య సంతాన వర్గాలు')
                      : (isEn ? 'Switch to: Kashmir Origin Legend' : 'మార్చండి: కశ్మీర ఆవిర్భావ గాథ')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxImg({
                    src: kashyapaModalTab === 'kashmir' ? KASHYAP_RISHI_KASHMIR_LEGEND.fullPosterImg : KASHYAPA_CHILDREN_POSTER_DETAILS.posterImg,
                    title: isEn ? 'High Resolution Source Poster' : 'హై-రిజల్యూషన్ మూల పోస్టర్',
                    subtitle: isEn ? 'Click anywhere to close zoom lightbox' : 'జూమ్ వ్యూ మూసివేయడానికి ఎక్కడైనా క్లిక్ చేయండి'
                  })}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1E293B] hover:bg-[#334155] text-[#FEF08A] border border-[#F59E0B]/60 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{isEn ? 'Zoom Current Poster' : 'ప్రస్తుత పోస్టర్‌ను జూమ్ చేయండి'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsKashyapaChildrenModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-extrabold bg-[#F59E0B] text-[#0F172A] hover:bg-[#FBBF24] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 8. FULL-SCREEN LIGHTBOX FOR KASHYAPA ILLUSTRATIONS */}
      {/* ============================================================ */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#0F172A] rounded-2xl border-2 border-[#F59E0B] max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="px-4 py-3 bg-[#1E293B] border-b border-[#F59E0B]/50 flex items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#FEF08A] font-telugu-serif">
                  {lightboxImg.title}
                </h4>
                <p className="text-xs text-white/80">
                  {lightboxImg.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={lightboxImg.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-extrabold text-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                  title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEn ? "Picture Link" : "చిత్రం లింక్"}</span>
                </a>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600/80 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 bg-black flex-1 overflow-auto flex items-center justify-center">
              <img 
                src={lightboxImg.src} 
                alt={lightboxImg.title}
                className="max-h-[76vh] max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
