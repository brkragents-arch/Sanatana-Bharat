import React from 'react';
import { useMythology } from '../../context/MythologyContext';
import { HeroSection } from '../HeroSection';
import { DashboardCards } from '../DashboardCards';
import { DivineFamilySection } from './DivineFamilySection';
import { TrimurthiNakshatraSection } from './TrimurthiNakshatraSection';
import { Sparkles, BookOpen, Clock, GitFork } from 'lucide-react';

export const IntroductionView: React.FC = () => {
  const { language, setViewMode, setIsAdityasOpen } = useMythology();
  const isEn = language === 'en';

  return (
    <div className="space-y-6">
      {/* Top Welcome Ribbon */}
      <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37] flex items-center justify-center text-xl shadow-2xs">
            🪷
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
              {isEn ? 'Introduction: Pothana Bhagavatam Creation Encyclopedia' : 'పరిచయము: పోతన తెలుగు భాగవత సృష్టి రహస్యాల విజ్ఞాన పీఠము'}
            </h2>
            <p className="text-xs text-[#5D4037]">
              {isEn 
                ? 'Comprehensive overview of Chaturmukha Brahma, Cosmic Creation, and Daksha Prajapati genealogy'
                : 'చతుర్ముఖ బ్రహ్మ ఆవిర్భావము, సృష్టి క్రమము మరియు దక్ష ప్రజాపతి – ప్రసూతి సంపూర్ణ వంశపరంపర పరిచయం'}
            </p>
          </div>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setIsAdityasOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] text-[#7B1113] border-2 border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:scale-102"
            title={isEn ? '12 Adityas Pop-up Window' : '12 మంది ఆదిత్యుల పాప్-అప్ విండో తెరవండి'}
          >
            <span>☀️</span>
            <span>{isEn ? '12 Adityas' : '12 మంది ఆదిత్యులు'}</span>
            <span className="text-[10px] bg-[#7B1113] text-[#FFE082] px-1.5 py-0.2 rounded-sm font-semibold">Pop-up</span>
          </button>
          <button
            onClick={() => setViewMode('brahma_family')}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] border-2 border-[#FFD54F] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <span>🪷</span>
            <span>{isEn ? 'Family of Brahma' : 'బ్రహ్మ వంశము'}</span>
          </button>
          <button
            onClick={() => setViewMode('sanatana_chronology')}
            className="px-3 py-1.5 rounded-xl bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Home: 13 Cosmic Steps' : 'హోమ్: 13 సోపానాలు'}</span>
          </button>
          <button
            onClick={() => setViewMode('flow')}
            className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Creation Flow' : 'సృష్టి క్రమము'}</span>
          </button>
          <button
            onClick={() => setViewMode('tree')}
            className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FFE082] text-[#5D4037] border border-[#E8DCC4] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <GitFork className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'Family Tree' : 'వంశవృక్షము'}</span>
          </button>
        </div>
      </div>

      {/* Devotional Hero Section (Vishnu, Shesha Shayana, Navel Lotus & Brahma) */}
      <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#FFFDF7]">
        <HeroSection onExploreClick={() => setViewMode('sanatana_chronology')} />
      </div>

      {/* 10 Visual Section Navigation Cards */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-2">
          <BookOpen className="w-4 h-4 text-[#D84315]" />
          <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
            {isEn ? '11 Core Bhagavatam Educational Modules' : 'భాగవత పురాణ 11 ప్రధాన విభాగాలు (Clickable Modules)'}
          </h3>
        </div>
        <DashboardCards />
      </div>

      {/* Bottom Callout Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] shadow-md flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <h4 className="text-base font-bold font-telugu-serif">
            {isEn ? 'Ready to explore the Cosmic Lineage?' : 'సంపూర్ణ సృష్టి వంశపరంపరను అన్వేషించడానికి సిద్ధమా?'}
          </h4>
          <p className="text-xs text-[#FFF8E1]/90">
            {isEn 
              ? 'Navigate through the interactive family trees, mind maps, and scriptural verses.'
              : 'ఇంటరాక్టివ్ వంశవృక్షం, మైండ్ మ్యాప్ లేదా దక్ష ప్రజాపతి 16 మంది కుమార్తెల శాఖలను వీక్షించండి.'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setViewMode('sanatana_chronology')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF8F00] to-[#E65100] text-white text-xs font-bold hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEn ? 'Go to Sanatana Home' : 'హోమ్ పేజీకి వెళ్ళండి'}</span>
          </button>
          <button
            onClick={() => setViewMode('tree')}
            className="px-4 py-2 rounded-xl bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
          >
            <GitFork className="w-4 h-4" />
            <span>{isEn ? 'Open Family Tree' : 'వంశవృక్షము'}</span>
          </button>
        </div>
      </div>

      {/* The Divine Family Tree Section (దివ్య వంశవృక్షము) */}
      <DivineFamilySection />

      {/* Trimurthi & 27 Nakshatras Cosmic Mandala Section */}
      <TrimurthiNakshatraSection />
    </div>
  );
};
