import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  SANATANA_CHRONOLOGY_STEPS, 
  CHRONOLOGICAL_SOURCES_LIST,
  SANATANA_CREATION_INTRODUCTION
} from '../../data/sanatanaChronologyData';
import { 
  Clock, 
  ArrowDown, 
  Sparkles, 
  BookOpen, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  GitFork,
  Compass,
  Users,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff
} from 'lucide-react';
import { HeroSection } from '../HeroSection';
import { DivineFamilySection } from './DivineFamilySection';
import { TrayastrimshatDevasSection } from './TrayastrimshatDevasSection';
import { TrimurthiNakshatraSection } from './TrimurthiNakshatraSection';

export const SanatanaChronologyView: React.FC = () => {
  const { language, selectCharacter, setViewMode } = useMythology();
  const [activeSubTab, setActiveSubTab] = useState<'lineage' | 'sources'>('lineage');
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [showSacredDarshan, setShowSacredDarshan] = useState<boolean>(false);
  const [showIntroExpanded, setShowIntroExpanded] = useState<boolean>(true);

  const isEn = language === 'en';
  const selectedStep = SANATANA_CHRONOLOGY_STEPS[selectedStepIndex];

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[750px]">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER */}
      {/* ============================================================ */}
      <div className="bg-[#FFFFFF] px-4 py-4 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37]">
            <Clock className="w-5 h-5 text-[#D84315]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                {isEn ? 'Home Page' : 'ప్రధాన హోమ్‌పేజీ'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Sanatana Dharma Emergence – Chronological Cosmic Order' : 'సనాతన ధర్మ ఆవిర్భావము – కాలానుక్రమణిక మూల క్రమము'}
              </h3>
            </div>
            <p className="text-xs text-[#5D4037] mt-0.5">
              {isEn 
                ? 'Chronological cosmic sequence from Sarveshvara to Chaturmukha Brahma, Prajapatis & Daksha'
                : 'సర్వేశ్వరుని అభివ్యక్తత నుండి చతుర్ముఖ బ్రహ్మ, ప్రజాపతులు మరియు దక్షుని వరకు కాలానుక్రమణిక ఆధారాలు'}
            </p>
          </div>
        </div>

        {/* Action Controls & Sub-tab Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Optional Devotional Art Toggle */}
          <button
            onClick={() => setShowSacredDarshan(!showSacredDarshan)}
            className="px-2.5 py-1.5 rounded-xl border border-[#D4AF37] bg-[#FFF9E6] hover:bg-[#FFE082] text-xs font-semibold text-[#7B1113] flex items-center gap-1.5 transition-colors cursor-pointer"
            title={isEn ? 'Toggle Devotional Painting' : 'దివ్య చిత్ర దర్శనం'}
          >
            {showSacredDarshan ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {showSacredDarshan 
                ? (isEn ? 'Hide Art' : 'చిత్రం దాచండి') 
                : (isEn ? 'View Sacred Art' : 'శ్రీహరి దర్శనం')}
            </span>
          </button>

          {/* Quick Jump to Divine Family Tree */}
          <button
            onClick={() => {
              const el = document.getElementById('divine-family-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1.5 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] hover:bg-[#FFE082] text-xs font-bold text-[#7B1113] flex items-center gap-1.5 transition-colors cursor-pointer"
            title={isEn ? 'Scroll to Divine Family Tree' : 'దివ్య వంశవృక్షమునకు వెళ్ళండి'}
          >
            <span>🪷</span>
            <span>{isEn ? 'Divine Lineage' : 'దివ్య వంశవృక్షము'}</span>
          </button>

          {/* Quick Jump to 33 Vedic Gods */}
          <button
            onClick={() => {
              const el = document.getElementById('trayastrimshat-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1.5 rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] text-xs font-bold text-[#7B1113] flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            title={isEn ? 'Scroll to 33 Vedic Gods' : '33 వైదిక దేవతల దర్శనానికి వెళ్ళండి'}
          >
            <span>🕉️</span>
            <span>{isEn ? '33 Vedic Gods' : '33 వైదిక దేవతలు'}</span>
          </button>

          {/* Quick Jump to Trimurthi Nakshatra Mandala */}
          <button
            onClick={() => {
              const el = document.getElementById('trimurthi-nakshatra-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1.5 rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] text-xs font-bold text-[#7B1113] flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            title={isEn ? 'Scroll to Trimurthi & 27 Nakshatras' : 'త్రిమూర్తులు & 27 నక్షత్రాల కాలచక్ర దర్శనం'}
          >
            <span>✨</span>
            <span>{isEn ? 'Trimurthi & 27 Nakshatras' : 'త్రిమూర్తులు & 27 నక్షత్రాలు'}</span>
          </button>

          {/* Sub-tab Switcher */}
          <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-xl border border-[#E8DCC4] text-xs font-bold">
            <button
              onClick={() => setActiveSubTab('lineage')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'lineage'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isEn ? '13 Cosmic Evolution Steps' : '13 సృష్టి క్రమ సోపానాలు'}</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sources')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'sources'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                  : 'text-[#5D4037] hover:bg-[#F4EEDF]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEn ? 'Chronological Scriptural Sources' : 'కాలానుక్రమణిక భాగవత ఆధారాలు'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. OPTIONAL EXPANDABLE DEVOTIONAL ARTWORK (HERO SECTION) */}
      {/* ============================================================ */}
      {showSacredDarshan && (
        <div className="border-b-2 border-[#D4AF37] bg-[#FFFDF7] transition-all">
          <HeroSection onExploreClick={() => setShowSacredDarshan(false)} />
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. PROMINENT NAVIGATION HUB TO ALL OTHER PAGES */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] px-4 py-3.5 border-b-2 border-[#D4AF37]/40 shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5 uppercase tracking-wide">
            <Compass className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? 'Explore Other Pages & Lineages from this Home Page:' : 'ఈ హోమ్‌పేజీ నుండి ఇతర ప్రధాన విభాగాల నావిగేషన్:'}</span>
          </span>
          <span className="text-[11px] text-[#5D4037] font-medium hidden md:inline">
            {isEn ? 'Click any card below to navigate directly' : 'సంబంధిత విభాగాన్ని తెరవడానికి క్రింది కార్డులపై క్లిక్ చేయండి'}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* Card 0: Family of Brahma */}
          <button
            onClick={() => {
              setViewMode('brahma_family');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="p-3 rounded-xl bg-gradient-to-br from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] border-2 border-[#D4AF37] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-base group-hover:scale-110 transition-transform">🪷</span>
                <span className="font-extrabold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Family of Brahma' : 'బ్రహ్మ వంశము'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? '5 Branches, 24 Daughters, 26 Kings & Kashyapa Progeny' : '5 శాఖలు, దక్షుని 24 కన్యలు, 26 తరాల రాజవంశం & కశ్యప సంతతి'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Card 1: Creation Flow */}
          <button
            onClick={() => setViewMode('flow')}
            className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF3E0] border-2 border-[#E8DCC4] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Clock className="w-4 h-4 text-[#D84315] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Creation Flow' : 'సృష్టి క్రమము'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? '10 Creation Stages from Ksheerasagara to 16 Daughters' : 'విష్ణు నాభి పద్మం నుండి 16 మంది కుమార్తెల వరకు 10 సృష్టి ఘట్టాలు'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Card 2: Interactive Family Tree */}
          <button
            onClick={() => setViewMode('tree')}
            className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF3E0] border-2 border-[#E8DCC4] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <GitFork className="w-4 h-4 text-[#D84315] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Family Tree' : 'సంపూర్ణ వంశవృక్షము'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? 'Interactive hierarchical lineage from Brahma to Daksha' : 'బ్రహ్మ, నవ ప్రజాపతులు, మనువు, దక్షుని ఇంటరాక్టివ్ ట్రీ'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Card 3: Mind Map */}
          <button
            onClick={() => setViewMode('mindmap')}
            className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF3E0] border-2 border-[#E8DCC4] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Compass className="w-4 h-4 text-[#D84315] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Mind Map' : 'మైండ్ మ్యాప్'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? 'Radial map of Brahma, 4 Vedas, Lokas & Directions' : 'బ్రహ్మ కేంద్రంగా 4 ముఖాలు, 4 వేదాలు, లోకాల వృత్తాకార పటం'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Card 4: Daksha-Prasuti 16 Daughters */}
          <button
            onClick={() => setViewMode('daksha_vamsa')}
            className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF3E0] border-2 border-[#E8DCC4] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Users className="w-4 h-4 text-[#D84315] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Daksha Lineage' : 'దక్ష-ప్రసూతి వంశము'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? '16 Daughters, Spouses, Descendants & Daksha Yajna' : '16 మంది కుమార్తెలు, వారి భర్తలు, సంతానం ప్రత్యేక వంశవృక్షం'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Card 5: Scriptures Library */}
          <button
            onClick={() => setViewMode('scriptures')}
            className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF3E0] border-2 border-[#E8DCC4] hover:border-[#D84315] transition-all text-left flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer col-span-2 md:col-span-1"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <BookOpen className="w-4 h-4 text-[#D84315] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-[#7B1113] group-hover:text-[#D84315]">
                  {isEn ? 'Scriptures' : 'భాగవత ఆధారాలు'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D4037] line-clamp-2">
                {isEn ? 'Pothana verses, word meanings & authentic citations' : 'పోతన భాగవత మూల పద్యాలు, ప్రతిపదార్థాలు, తాత్పర్యాలు'}
              </p>
            </div>
            <span className="mt-2 text-[10px] font-bold text-[#D84315] flex items-center gap-1">
              {isEn ? 'Open View' : 'విభాగం తెరవండి'} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. SUB-TAB 1: 13-STAGE SANATANA DHARMA CREATION LINEAGE */}
      {/* (Directly transcribed from user's uploaded manuscript image) */}
      {/* ============================================================ */}
      {activeSubTab === 'lineage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 p-4 sm:p-6 gap-6">
          
          {/* Left Column: 13 Stages Cards connected by downward flow */}
          <div className="lg:col-span-7 space-y-3 pr-1">
            
            {/* Intro Ribbon */}
            <div className="p-3 rounded-xl bg-[#FFF9E6] border border-[#D4AF37]/50 text-xs text-[#7B1113] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D84315] shrink-0" />
              <span>
                {isEn
                  ? 'Authenticated from Srimad Bhagavatam Canto 2 & 3: The precise ontological descent from Supreme Consciousness down to the physical cosmos.'
                  : 'పోతన తెలుగు భాగవతము ఆధారంగా: సర్వేశ్వరుని నుండి కాలము, ప్రకృతి, మహత్తత్త్వము, అహంకారము, పంచభూతములు, విరాట్పురుషుడు, బ్రహ్మ వరకు క్రమశిక్షణ.'}
              </span>
            </div>

            {/* ============================================================ */}
            {/* PRELUDE / INTRODUCTION BEFORE STEP 1 (సోపానం 1 కి ముందు ఉపోద్ఘాతము) */}
            {/* ============================================================ */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-2xl border-2 border-[#7B1113] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9E6] to-[#FFF3E0] shadow-md overflow-hidden">
                {/* Introduction Header Banner */}
                <div 
                  onClick={() => setShowIntroExpanded(!showIntroExpanded)}
                  className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-4 py-3.5 flex items-center justify-between gap-3 cursor-pointer border-b-2 border-[#D4AF37]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFE082] to-[#FF8F00] text-[#7B1113] flex items-center justify-center text-xl font-bold shadow-xs border border-[#FFF8E1] shrink-0">
                      📜
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#D84315] text-white text-[10px] font-extrabold uppercase tracking-wider mb-0.5">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.badgeEn : SANATANA_CREATION_INTRODUCTION.badgeTe}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-white font-telugu-serif leading-snug">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.mainTitleEn : SANATANA_CREATION_INTRODUCTION.mainTitleTe}
                      </h4>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-[#FFE082] text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <span>{showIntroExpanded ? (isEn ? 'Collapse' : 'కుదించు') : (isEn ? 'Read Full Intro' : 'పూర్తి పీఠిక')}</span>
                    {showIntroExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expandable Body of the Introduction before Step 1 */}
                {showIntroExpanded && (
                  <div className="p-4 sm:p-5 space-y-5 text-left">

                    {/* ============================================================ */}
                    {/* PART 0: WHY DID SARVESHVARA DESIRE TO CREATE? (సృష్టి ఎందుకు ప్రారంభమైంది?) */}
                    {/* ============================================================ */}
                    <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D84315] space-y-3.5 shadow-xs">
                      <div className="border-b border-[#E8DCC4] pb-2.5 space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D84315] text-white text-[10px] font-extrabold uppercase tracking-wider">
                          <span>🕉️</span>
                          <span>{isEn ? 'Foundational Vedantic Question' : 'వేదాంత మూల ప్రశ్న • సృష్టి ఆరంభ రహస్యం'}</span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.whyCreationSection.titleEn : SANATANA_CREATION_INTRODUCTION.whyCreationSection.titleTe}
                        </h5>
                        <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed font-medium font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.whyCreationSection.openingEn : SANATANA_CREATION_INTRODUCTION.whyCreationSection.openingTe}
                        </p>
                      </div>

                      {/* 4 Primary Reasons for Creation */}
                      <div className="space-y-3">
                        {SANATANA_CREATION_INTRODUCTION.whyCreationSection.fourReasons.map((item) => (
                          <div 
                            key={item.num}
                            className="bg-[#FFFDF7] p-3.5 rounded-xl border-l-4 border-[#7B1113] border border-[#E8DCC4] space-y-1.5"
                          >
                            <h6 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                              {isEn ? item.titleEn : item.titleTe}
                            </h6>
                            <p className="text-xs text-[#5D4037] leading-relaxed font-semibold">
                              {isEn ? item.introEn : item.introTe}
                            </p>
                            <ul className="space-y-1.5 pl-1 pt-0.5">
                              {(isEn ? item.bulletsEn : item.bulletsTe).map((b, bIdx) => (
                                <li key={bIdx} className="text-xs text-[#2C1810] flex items-start gap-2 leading-relaxed">
                                  <span className="text-[#D84315] font-extrabold mt-0.5">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Summary of Why Creation Began */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/50 to-[#FFF8E1] border border-[#D4AF37] text-xs text-[#2C1810] leading-relaxed">
                        <strong className="text-[#7B1113] font-extrabold">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.whyCreationSection.summaryLabelEn : SANATANA_CREATION_INTRODUCTION.whyCreationSection.summaryLabelTe}{' '}
                        </strong>
                        <span className="font-bold text-[#4A0012] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.whyCreationSection.summaryTextEn : SANATANA_CREATION_INTRODUCTION.whyCreationSection.summaryTextTe}
                        </span>
                      </div>
                    </div>

                    {/* ============================================================ */}
                    {/* PART 1: WHY TIME & SVABHAVA MANIFEST FROM DIVINE WILL */}
                    {/* ============================================================ */}
                    <div className="bg-[#FFFFFF] p-3.5 rounded-xl border-2 border-[#D4AF37] space-y-2 shadow-2xs">
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-1.5">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.mainTitleEn : SANATANA_CREATION_INTRODUCTION.mainTitleTe}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed font-medium font-telugu-serif">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.openingPara1En : SANATANA_CREATION_INTRODUCTION.openingPara1Te}
                      </p>
                      <p className="text-xs sm:text-sm text-[#7B1113] leading-relaxed font-bold font-telugu-serif">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.openingPara2En : SANATANA_CREATION_INTRODUCTION.openingPara2Te}
                      </p>
                    </div>

                    {/* Part 1: 3 Core Reasons (1. To Awaken Material Nature, 2. To Manifest Karma, 3. From One to Many) */}
                    <div className="space-y-3">
                      {SANATANA_CREATION_INTRODUCTION.threeReasons.map((reason) => (
                        <div 
                          key={reason.num}
                          className="bg-[#FFFFFF] p-3.5 sm:p-4 rounded-xl border-l-4 border-[#D84315] border border-[#E8DCC4] shadow-2xs space-y-2"
                        >
                          <h5 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                            {isEn ? reason.titleEn : reason.titleTe}
                          </h5>
                          <p className="text-xs text-[#5D4037] leading-relaxed font-medium">
                            {isEn ? reason.introEn : reason.introTe}
                          </p>
                          <ul className="space-y-1.5 pl-1 pt-1">
                            {(isEn ? reason.bulletsEn : reason.bulletsTe).map((b, bIdx) => (
                              <li key={bIdx} className="text-xs text-[#2C1810] flex items-start gap-2 leading-relaxed">
                                <span className="text-[#D84315] font-extrabold mt-0.5">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Scriptural Proof 1: Srimad Bhagavatam (3.26) — Kapila Maharshi to Devahuti */}
                    <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/40 to-[#FFF8E1] p-4 rounded-xl border-2 border-[#D4AF37] space-y-2.5 shadow-xs">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                        <span>📖</span>
                        <span>{isEn ? SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.headingEn : SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.headingTe}</span>
                      </div>
                      <p className="text-xs text-[#5D4037] font-semibold">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.sourceLineEn : SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.sourceLineTe}
                      </p>
                      <blockquote className="p-3 rounded-lg bg-[#FFFFFF] border-l-4 border-[#7B1113] text-xs sm:text-sm font-bold text-[#4A0012] font-telugu-serif italic leading-relaxed shadow-2xs">
                        {isEn ? SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.quoteEn : SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.quoteTe}
                      </blockquote>
                      <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/60 text-xs text-[#2C1810] leading-relaxed">
                        <strong className="text-[#D84315] font-extrabold">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.summaryLabelEn : SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.summaryLabelTe}{' '}
                        </strong>
                        <span className="font-semibold">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.summaryTextEn : SANATANA_CREATION_INTRODUCTION.bhagavatamPramanam.summaryTextTe}
                        </span>
                      </div>
                    </div>

                    {/* Part 2: Bhagavad Gita Pramana (Gita 11.32, 9.10 & 7.14) */}
                    <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#7B1113] space-y-4 shadow-xs">
                      <div className="border-b border-[#E8DCC4] pb-2.5 space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                          <span>🐚</span>
                          <span>{isEn ? 'Bhagavad Gita Pramana' : 'భగవద్గీత పరమ ప్రమాణాలు'}</span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.headingEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.headingTe}
                        </h5>
                        <p className="text-xs text-[#5D4037] leading-relaxed font-medium">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.introEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.introTe}
                        </p>
                      </div>

                      {/* 1. Kala Swaroopam (Gita 11.32) */}
                      <div className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#D4AF37] space-y-2">
                        <h6 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.titleEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.titleTe}
                        </h6>
                        <p className="text-xs text-[#5D4037] leading-relaxed">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.contextEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.contextTe}
                        </p>
                        <div className="p-3 rounded-lg bg-[#FFF8E1] border-l-4 border-[#D84315] text-center space-y-0.5">
                          <div className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                            {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.shlokaEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.shlokaTe}
                          </div>
                          <div className="text-[11px] font-semibold text-[#5D4037] italic">
                            {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.refEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.refTe}
                          </div>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#2C1810] pt-1">
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span className="font-semibold">{isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.bhavamEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.bhavamTe}</span>
                          </li>
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span>{isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.antararthamEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.kalaSection.antararthamTe}</span>
                          </li>
                        </ul>
                      </div>

                      {/* 2. Daivi Prakriti & Svabhava (Gita 9.10 & 7.14) */}
                      <div className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#D4AF37] space-y-3">
                        <h6 className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.prakritiSection.titleEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.prakritiSection.titleTe}
                        </h6>
                        <p className="text-xs text-[#5D4037] leading-relaxed">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.prakritiSection.introEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.prakritiSection.introTe}
                        </p>

                        <div className="space-y-3">
                          {SANATANA_CREATION_INTRODUCTION.gitaPramanam.prakritiSection.subSections.map((sub, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] space-y-2">
                              <div className="text-xs font-extrabold text-[#D84315] font-telugu-serif">
                                {isEn ? sub.headingEn : sub.headingTe}
                              </div>
                              <div className="p-2.5 rounded-lg bg-[#FFF8E1] border-l-4 border-[#7B1113] text-center space-y-0.5">
                                <div className="text-xs sm:text-sm font-extrabold text-[#7B1113] font-telugu-serif">
                                  {isEn ? sub.shlokaEn : sub.shlokaTe}
                                </div>
                                <div className="text-[11px] font-semibold text-[#5D4037] italic">
                                  {isEn ? sub.refEn : sub.refTe}
                                </div>
                              </div>
                              <ul className="space-y-1 text-xs text-[#2C1810]">
                                <li className="flex items-start gap-2 leading-relaxed font-semibold">
                                  <span className="text-[#D84315] font-bold">•</span>
                                  <span>{isEn ? sub.bhavamEn : sub.bhavamTe}</span>
                                </li>
                                <li className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-[#D84315] font-bold">•</span>
                                  <span>{isEn ? sub.noteEn : sub.noteTe}</span>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Synthesis / Samanvayam (1. Sarveshvara, 2. Kala, 3. Svabhava/Prakriti) */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border border-[#D4AF37] space-y-2">
                        <h6 className="text-xs sm:text-sm font-extrabold text-[#FFD54F] font-telugu-serif">
                          {isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.synthesis.headingEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.synthesis.headingTe}
                        </h6>
                        <ul className="space-y-1.5 text-xs text-white font-semibold">
                          {(isEn ? SANATANA_CREATION_INTRODUCTION.gitaPramanam.synthesis.pointsEn : SANATANA_CREATION_INTRODUCTION.gitaPramanam.synthesis.pointsTe).map((pt, pIdx) => (
                            <li key={pIdx} className="leading-relaxed">
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Downward Connector Arrow leading directly into సోపానం 1 */}
              <div className="my-1.5 flex flex-col items-center">
                <div className="w-0.5 h-3.5 bg-[#7B1113]" />
                <ArrowDown className="w-4 h-4 text-[#7B1113]" />
              </div>
            </div>

            {SANATANA_CHRONOLOGY_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;

              return (
                <div key={step.step} className="flex flex-col items-center">
                  <div
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`w-full p-4 rounded-xl transition-all duration-200 cursor-pointer shadow-xs border-2 text-left relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] border-[#D84315] ring-3 ring-[#D84315]/20 shadow-md scale-101'
                        : 'bg-[#FFFFFF] border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Step Badge */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-9 h-9 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] flex items-center justify-center text-lg shadow-2xs">
                          {step.icon}
                        </div>
                        <span className="text-[10px] font-bold text-[#7B1113] mt-1 bg-[#FAF7F0] px-1.5 py-0.2 rounded-full border border-[#E8DCC4]">
                          {isEn ? `Step ${step.step}` : `సోపానం ${step.step}`}
                        </span>
                      </div>

                      {/* Step Text (Matching user image format) */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif leading-snug">
                          {isEn ? step.sourceTextEn : step.sourceTextTe}
                        </h4>

                        <div className="mt-1 flex flex-col gap-1 text-xs">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#5D4037] font-medium">
                              <strong>{isEn ? 'Cause:' : 'కారణం:'}</strong> {isEn ? step.causeEn : step.causeTe}
                            </span>
                            <span className="text-[#D84315] font-bold">➔</span>
                            <span className="text-[#7B1113] font-semibold">
                              <strong>{isEn ? 'Effect:' : 'ఫలితం:'}</strong> {(isEn ? step.effectEn : step.effectTe).split('\n')[0]}
                            </span>
                          </div>
                          {(isEn ? step.effectEn : step.effectTe).split('\n').length > 1 && (
                            <div className="pl-2 sm:pl-3 py-1 border-l-2 border-[#D4AF37] bg-[#FFF8E1]/70 rounded-r-md text-[11px] text-[#7B1113] font-medium leading-relaxed font-telugu-serif">
                              {(isEn ? step.effectEn : step.effectTe).split('\n').slice(1).map((line, i) => (
                                <p key={i}>✦ {line}</p>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* In-Card Direct Quick Navigation Links */}
                        <div className="mt-2.5 pt-2 border-t border-[#E8DCC4]/60 flex items-center gap-2 flex-wrap text-[11px]">
                          {step.step <= 4 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewMode('flow');
                                }}
                                className="px-2 py-0.5 rounded bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                <Clock className="w-3 h-3 text-[#D84315]" />
                                <span>{isEn ? 'View in Creation Flow' : 'సృష్టి క్రమంలో చూడండి'}</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewMode('scriptures');
                                }}
                                className="px-2 py-0.5 rounded bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] font-medium flex items-center gap-1 cursor-pointer"
                              >
                                <BookOpen className="w-3 h-3" />
                                <span>{isEn ? 'Scripture Citations' : 'పురాణ ఆధారాలు'}</span>
                              </button>
                            </>
                          )}

                          {step.step >= 10 && step.step <= 12 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  selectCharacter('chaturmukha-brahma', true);
                                  setViewMode('tree');
                                }}
                                className="px-2 py-0.5 rounded bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <GitFork className="w-3 h-3 text-[#D84315]" />
                                <span>{isEn ? 'Open Family Tree' : 'వంశవృక్షం తెరవండి'}</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewMode('mindmap');
                                }}
                                className="px-2 py-0.5 rounded bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] font-medium flex items-center gap-1 cursor-pointer"
                              >
                                <Compass className="w-3 h-3" />
                                <span>{isEn ? 'Mind Map' : 'మైండ్ మ్యాప్'}</span>
                              </button>
                            </>
                          )}

                          {step.step === 13 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewMode('tree');
                                }}
                                className="px-2 py-0.5 rounded bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                              >
                                <GitFork className="w-3 h-3" />
                                <span>{isEn ? 'Full Family Tree' : 'సంపూర్ణ వంశవృక్షము'}</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewMode('daksha_vamsa');
                                }}
                                className="px-2 py-0.5 rounded bg-[#FFF8E1] hover:bg-[#FFE082] text-[#D84315] border border-[#D84315] font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <Users className="w-3 h-3" />
                                <span>{isEn ? 'Daksha Lineage' : 'దక్ష-ప్రసూతి వంశము'}</span>
                              </button>
                            </>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Downward Arrow */}
                  {idx < SANATANA_CHRONOLOGY_STEPS.length - 1 && (
                    <div className="my-1 flex flex-col items-center">
                      <div className="w-0.5 h-2.5 bg-[#D4AF37]" />
                      <ArrowDown className="w-3.5 h-3.5 text-[#D84315]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Step Explanation Inspector */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-5 shadow-md flex flex-col justify-between sticky top-4 max-h-[750px] overflow-y-auto">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#E8DCC4]">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8E1] border-2 border-[#D4AF37] flex items-center justify-center text-2xl shadow-xs">
                  {selectedStep.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider block">
                    {isEn ? `Step ${selectedStep.step} of 13` : `13 సోపానాలలో ${selectedStep.step}వ సోపానం`}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif leading-tight whitespace-pre-line">
                    {isEn ? selectedStep.effectEn : selectedStep.effectTe}
                  </h3>
                </div>
              </div>

              {/* Exact Inscription Formula */}
              <div className="p-3.5 rounded-xl bg-[#FAF7F0] border-l-4 border-[#7B1113] shadow-2xs">
                <span className="text-[10px] font-bold text-[#7B1113] uppercase block mb-0.5">
                  {isEn ? 'Cosmic Causal Formula (from Inscription):' : 'సనాతన ధర్మ మూల సృష్టి సూత్రము:'}
                </span>
                <p className="font-telugu-serif text-xs sm:text-sm font-bold text-[#4A0012]">
                  {isEn ? selectedStep.sourceTextEn : selectedStep.sourceTextTe}
                </p>
              </div>

              {/* Philosophical Explanation */}
              <div>
                <h4 className="text-xs font-bold text-[#7B1113] uppercase mb-1">
                  {isEn ? 'Cosmic Philosophical Significance:' : 'తత్త్వార్థ విశ్లేషణ:'}
                </h4>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed bg-[#FFFDF7] p-3 rounded-xl border border-[#E8DCC4]">
                  {isEn ? selectedStep.philosophicalDetailEn : selectedStep.philosophicalDetailTe}
                </p>
              </div>

              {/* Scriptural Authority Citation */}
              <div className="p-3 rounded-xl bg-[#FFF9E6] border border-[#D4AF37]/50 space-y-1 text-xs">
                <span className="font-bold text-[#7B1113] flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Scriptural Reference:' : 'పురాణ ప్రమాణము:'}</span>
                </span>
                <p className="text-[#5D4037] font-semibold">
                  {selectedStep.bhagavatamRef}
                </p>
              </div>
            </div>

            {/* Quick Action Navigation Buttons to Other Pages */}
            <div className="pt-4 border-t border-[#E8DCC4] mt-4 space-y-2">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wide block">
                {isEn ? 'Navigate from this Step:' : 'ఈ సోపానం నుండి ఇతర పుటలకు వెళ్ళండి:'}
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    if (selectedStep.step >= 12) {
                      selectCharacter('chaturmukha-brahma', true);
                    } else {
                      selectCharacter('sri-vishnu', true);
                    }
                    setViewMode('tree');
                  }}
                  className="px-3 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Family Tree' : 'వంశవృక్షము'}</span>
                </button>

                <button
                  onClick={() => setViewMode('flow')}
                  className="px-3 py-2 rounded-xl bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <Clock className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Creation Flow' : 'సృష్టి క్రమము'}</span>
                </button>
              </div>

              {selectedStep.step >= 12 && (
                <button
                  onClick={() => setViewMode('daksha_vamsa')}
                  className="w-full px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#D84315] to-[#BF360C] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Explore Daksha-Prasuti 16 Daughters Lineage' : 'దక్ష-ప్రసూతి 16 కుమార్తెల వంశవృక్షము చూడండి'}</span>
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 5. SUB-TAB 2: CHRONOLOGICAL SCRIPTURAL SOURCES */}
      {/* (Arranged in order: Canto 2 -> Canto 3 -> Canto 4 -> Canto 6) */}
      {/* ============================================================ */}
      {activeSubTab === 'sources' && (
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[750px] space-y-4">
          
          <div className="p-3.5 rounded-xl bg-[#FFF9E6] border border-[#D4AF37] flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="font-bold text-[#7B1113] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>
                {isEn 
                  ? 'All references verified in strict chronological sequence of Srimad Bhagavatam (Pothana Telugu & Original Sanskrit).'
                  : 'శ్రీమద్భాగవత పురాణ కాలక్రమముననుసరించి స్కంధములు మరియు అధ్యాయముల సంపూర్ణ క్రమానుగత జాబితా.'}
              </span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D4AF37] font-semibold text-[#5D4037]">
              {CHRONOLOGICAL_SOURCES_LIST.length} {isEn ? 'Sequential Cantos' : 'క్రమానుగత విభాగాలు'}
            </span>
          </div>

          <div className="space-y-4">
            {CHRONOLOGICAL_SOURCES_LIST.map((source) => (
              <div
                key={source.chronologicalOrder}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] p-5 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 border-b border-[#F0E6D2] pb-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold flex items-center justify-center shrink-0">
                      {source.chronologicalOrder}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
                          {isEn ? source.cantoEn : source.canto}
                        </span>
                        <span className="text-xs font-semibold text-[#5D4037]">
                          {isEn ? source.chapterEn : source.chapter}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif mt-1">
                        {isEn ? source.themeEn : source.themeTe}
                      </h4>
                    </div>
                  </div>

                  <a
                    href={source.teluguBhagavatamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isEn ? 'Verify at telugubhagavatam.org' : 'మూల పత్రం పరిశీలించండి'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
                  </a>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                  {isEn ? source.summaryEn : source.summaryTe}
                </p>

                {/* Key Passages */}
                <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] text-xs">
                  <span className="font-bold text-[#7B1113] block mb-0.5">
                    {isEn ? 'Primary Scriptural Quotation / Shloka:' : 'ముఖ్య శబ్ద ప్రమాణము:'}
                  </span>
                  <span className="font-telugu-serif text-[#4A0012] font-semibold italic">
                    {source.primaryPassages}
                  </span>
                </div>

                {/* Direct Cross-Navigation Buttons from this Chronological Source */}
                <div className="pt-2 border-t border-[#E8DCC4]/60 flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-[#5D4037] font-bold">
                    {isEn ? 'Explore Module:' : 'ఈ స్కంధ సంబంధిత విభాగం:'}
                  </span>

                  {source.chronologicalOrder === 1 && (
                    <>
                      <button
                        onClick={() => setViewMode('flow')}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#D84315]" />
                        <span>{isEn ? 'View Creation Flow' : 'సృష్టి క్రమము చూడండి'}</span>
                      </button>
                      <button
                        onClick={() => setViewMode('scriptures')}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Scripture Verses' : 'మూల పద్య నిధి'}</span>
                      </button>
                    </>
                  )}

                  {source.chronologicalOrder === 2 && (
                    <>
                      <button
                        onClick={() => {
                          selectCharacter('chaturmukha-brahma', true);
                          setViewMode('tree');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Family Tree' : 'సంపూర్ణ వంశవృక్షము'}</span>
                      </button>
                      <button
                        onClick={() => setViewMode('mindmap')}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Mind Map' : 'మైండ్ మ్యాప్'}</span>
                      </button>
                    </>
                  )}

                  {source.chronologicalOrder === 3 && (
                    <>
                      <button
                        onClick={() => setViewMode('daksha_vamsa')}
                        className="px-2.5 py-1 rounded-lg bg-[#D84315] hover:bg-[#BF360C] text-white font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Daksha 16 Daughters Lineage' : 'దక్ష-ప్రసూతి 16 కుమార్తెల వంశవృక్షము'}</span>
                      </button>
                      <button
                        onClick={() => setViewMode('tree')}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Family Tree' : 'వంశవృక్షము'}</span>
                      </button>
                    </>
                  )}

                  {source.chronologicalOrder >= 4 && (
                    <>
                      <button
                        onClick={() => setViewMode('tree')}
                        className="px-2.5 py-1 rounded-lg bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Family Tree' : 'వంశవృక్షము తెరవండి'}</span>
                      </button>
                      <button
                        onClick={() => setViewMode('scriptures')}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Scripture Library' : 'భాగవత గ్రంథాలయం'}</span>
                      </button>
                    </>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 4. THE DIVINE FAMILY TREE (దివ్య వంశవృక్షము - సకల దేవతా ఆవిర్భావ క్రమం) */}
      {/* ============================================================ */}
      <div id="divine-family-section" className="border-t-3 border-[#D4AF37] p-2 sm:p-4 bg-[#FAF7F0]">
        <DivineFamilySection 
          onSelectCharacterFromTree={(id) => {
            selectCharacter(id, true);
            setViewMode('tree');
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 5. 33 VEDIC GODS (33 వైదిక దేవతలు - త్రయస్త్రింశత్ దేవాః) */}
      {/* ============================================================ */}
      <div id="trayastrimshat-section" className="border-t-3 border-[#D4AF37] p-2 sm:p-4 bg-[#FAF7F0]">
        <TrayastrimshatDevasSection 
          onSelectCharacterFromTree={(id) => {
            selectCharacter(id, true);
            setViewMode('tree');
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 6. TRIMURTHI & 27 NAKSHATRAS MANDALA (త్రిమూర్తులు & 27 నక్షత్ర కాలచక్రము) */}
      {/* ============================================================ */}
      <div className="border-t-3 border-[#D4AF37] p-2 sm:p-4 bg-[#FAF7F0]">
        <TrimurthiNakshatraSection />
      </div>

    </div>
  );
};
