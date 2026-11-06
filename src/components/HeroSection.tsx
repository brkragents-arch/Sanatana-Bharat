import React from 'react';
import { useMythology } from '../context/MythologyContext';
import { GitFork, Compass, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';

export const HeroSection: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  const { setViewMode, selectCharacter, language } = useMythology();
  const isEn = language === 'en';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FAF7F0] to-[#F5EEDC] border-b-2 border-[#D4AF37]/50 pt-8 pb-12 px-4">
      {/* Subtle traditional background motifs */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#7B1113_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative Traditional Corner Florals */}
      <div className="absolute top-2 left-3 text-[#D4AF37]/30 text-4xl select-none">⚜️</div>
      <div className="absolute top-2 right-3 text-[#D4AF37]/30 text-4xl select-none">⚜️</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E1] border border-[#D4AF37] text-[#7B1113] text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D84315]" />
              <span>
                {isEn 
                  ? 'Srimad Bhagavata Purana • Cantos 2, 3 & 4'
                  : 'శ్రీమద్భాగవత పురాణ తృతీయ & చతుర్థ స్కంధాలు'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#7B1113] font-telugu-serif tracking-tight leading-[1.25]">
              {isEn ? 'Emergence of Chaturmukha Brahma' : 'చతుర్ముఖ బ్రహ్మ ఆవిర్భావము'}
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-[#D84315] font-telugu-serif">
              {isEn 
                ? 'A Visual Journey from the Dawn of Cosmic Creation to the Prajapati Lineages'
                : 'సృష్టి ఆరంభము నుండి ప్రజాపతుల వంశపరంపర వరకు ఒక సమగ్ర దృశ్య ప్రయాణము'}
            </p>

            <p className="text-sm sm:text-base text-[#5D4037] leading-relaxed max-w-2xl font-normal">
              {isEn
                ? 'Based on Bammera Pothana Telugu Bhagavatam and classical scriptures: Explore the emergence of Brahma upon Lord Vishnu’s golden lotus, the revelation of the 4 Vedas, the 10 creation stages, the mind-born Prajapatis, and the comprehensive genealogy of Daksha Prajapati, Prasuti, and their 16 divine daughters.'
                : 'బమ్మెర పోతన తెలుగు భాగవతము ఆధారంగా శ్రీమహావిష్ణువు నాభీకమలమున బ్రహ్మదేవుని ఆవిర్భావము, నాలుగు వేదముల ప్రకటన, దశవిధ సృష్టి క్రమము, బ్రహ్మ అంగోద్భవ ప్రజాపతులు, మరియు దక్ష ప్రజాపతి – ప్రసూతి దంపతుల పదహారు మంది దివ్య పుత్రికల సమగ్ర వంశవృక్షాన్ని ఇంటరాక్టివ్ రూపంలో అన్వేషించండి.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => {
                  setViewMode('brahma_family');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  onExploreClick();
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D84315] via-[#BF360C] to-[#8C1619] text-[#FFE082] hover:text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border-2 border-[#FFD54F]"
              >
                <span className="text-lg">🪷</span>
                <span>{isEn ? 'Family of Brahma' : 'బ్రహ్మ వంశము (Family of Brahma)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setViewMode('tree');
                  selectCharacter('chaturmukha-brahma', true);
                  onExploreClick();
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7B1113] via-[#8C1619] to-[#5B0E10] text-[#FFE082] hover:text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
              >
                <GitFork className="w-5 h-5 text-[#FFE082]" />
                <span>{isEn ? 'Explore Family Tree' : 'వంశవృక్షాన్ని అన్వేషించండి'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setViewMode('sanatana_chronology');
                  onExploreClick();
                }}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:bg-[#FFE082] text-[#7B1113] font-bold text-base shadow-md hover:shadow-lg transition-all border-2 border-[#D4AF37] flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-5 h-5 text-[#D84315]" />
                <span>{isEn ? 'Cosmic Chronology (13 Steps)' : 'సనాతన ధర్మ ఆవిర్భావము'}</span>
              </button>

              <button
                onClick={() => {
                  setViewMode('mindmap');
                  onExploreClick();
                }}
                className="px-5 py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF8E1] text-[#7B1113] font-bold text-base shadow-md hover:shadow-lg transition-all border-2 border-[#D4AF37] flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-[#D84315]" />
                <span>{isEn ? 'Mind Map View' : 'మైండ్ మ్యాప్ దర్శనం'}</span>
              </button>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#D4AF37]/30 max-w-2xl">
              <div className="bg-[#FFFFFF]/90 p-2.5 rounded-lg border border-[#D4AF37]/40 text-center shadow-xs">
                <div className="text-xl font-extrabold text-[#7B1113]">10</div>
                <div className="text-xs font-semibold text-[#5D4037]">{isEn ? 'Prajapatis' : 'ప్రజాపతులు'}</div>
              </div>
              <div className="bg-[#FFFFFF]/90 p-2.5 rounded-lg border border-[#D4AF37]/40 text-center shadow-xs">
                <div className="text-xl font-extrabold text-[#D84315]">16</div>
                <div className="text-xs font-semibold text-[#5D4037]">{isEn ? 'Daughters' : 'దివ్య కన్యలు'}</div>
              </div>
              <div className="bg-[#FFFFFF]/90 p-2.5 rounded-lg border border-[#D4AF37]/40 text-center shadow-xs">
                <div className="text-xl font-extrabold text-[#C99700]">4</div>
                <div className="text-xs font-semibold text-[#5D4037]">{isEn ? 'Chaturvedas' : 'చతుర్వేదాలు'}</div>
              </div>
              <div className="bg-[#FFFFFF]/90 p-2.5 rounded-lg border border-[#D4AF37]/40 text-center shadow-xs">
                <div className="text-xl font-extrabold text-[#2C1810]">13</div>
                <div className="text-xs font-semibold text-[#5D4037]">{isEn ? 'Cosmic Steps' : 'సృష్టి సోపానాలు'}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Devotional Illustration Art (Vishnu & Brahma on Golden Lotus) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#FFFDF7] to-[#FAF2DE] p-6 rounded-3xl border-2 border-[#D4AF37] shadow-xl">
              
              {/* Outer Golden Aura Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#D4AF37]/20 via-[#FF8F00]/10 to-[#D4AF37]/20 blur-sm -z-10" />

              {/* Devotional SVG Iconography: Vishnu Nabhi Padma & Chaturmukha Brahma */}
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-[#FFF9E6] to-[#F5EACB] p-4 flex flex-col items-center justify-between border border-[#D4AF37]/60 overflow-hidden shadow-inner">
                
                {/* Sunburst / Divine Halo */}
                <div className="absolute top-8 w-44 h-44 rounded-full bg-radial from-[#FFE082]/80 via-[#FFB300]/30 to-transparent blur-md -z-0" />

                {/* Top: Chaturmukha Brahma Icon Seated on Lotus */}
                <div className="relative z-10 flex flex-col items-center text-center mt-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFB300] via-[#FFE082] to-[#FFF8E1] border-3 border-[#7B1113] shadow-md flex items-center justify-center text-3xl">
                    🪷
                  </div>
                  <div className="mt-2 bg-[#7B1113] text-[#FFE082] px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
                    {isEn ? 'Chaturmukha Brahma' : 'చతుర్ముఖ బ్రహ్మ'}
                  </div>
                  <span className="text-[11px] text-[#5D4037] font-semibold mt-0.5">
                    {isEn ? 'Four Faces • Four Vedas' : 'నాలుగు ముఖాలు • నాలుగు వేదాలు'}
                  </span>
                </div>

                {/* Connecting Golden Stem (కమల నాళము) */}
                <div className="relative z-10 flex flex-col items-center my-1">
                  <div className="w-1.5 h-12 bg-gradient-to-b from-[#2E7D32] via-[#C99700] to-[#7B1113] rounded-full shadow-xs" />
                  <span className="text-[10px] bg-[#FFF8E1] px-2 py-0.5 rounded-full border border-[#D4AF37] text-[#7B1113] font-bold shadow-xs">
                    {isEn ? 'Golden Lotus Stalk' : 'నాభీకమల నాళము'}
                  </span>
                  <div className="w-1.5 h-6 bg-[#2E7D32] rounded-full shadow-xs" />
                </div>

                {/* Bottom: Sri Maha Vishnu on Ananta Shesha in Ksheerasagara */}
                <div className="relative z-10 flex flex-col items-center text-center w-full bg-[#FFFFFF]/80 backdrop-blur-xs p-3 rounded-xl border border-[#D4AF37]/50 shadow-xs">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl">🌊</span>
                    <span className="text-lg">🐍</span>
                    <span className="text-xl">✨</span>
                  </div>
                  <h2 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                    {isEn ? 'Lord Sri Maha Vishnu (Sheshashayana)' : 'శ్రీమహావిష్ణువు (క్షీరసాగర శేషశయనుడు)'}
                  </h2>
                  <p className="text-[11px] text-[#5D4037] mt-0.5">
                    {isEn 
                      ? 'The thousand-petaled lotus manifests from the navel of the Lord in Yoga-Nidra'
                      : 'యోగనిద్రలో ఉన్న ఆదిపురుషుని నాభి నుండి సహస్రదళ హిరణ్మయ పద్మోద్భవము'}
                  </p>
                </div>

                {/* Sacred Bottom Badge */}
                <div className="mt-2 text-center text-[10px] text-[#7B1113] font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>
                    {isEn ? 'Srimad Bhagavatam Canto 3 Chapter 8' : 'పోతన భాగవత తృతీయ స్కంధము 8వ అధ్యాయము'}
                  </span>
                </div>

              </div>

              {/* Devotional Quote at bottom of card */}
              <div className="mt-3 text-center text-xs text-[#5D4037] italic font-telugu-serif">
                {isEn 
                  ? '"O Lotus-Born! You have appeared within the sacred lotus... Manifest the cosmos with supreme divine energy."'
                  : '"కమలభవ! నీవు పుట్టితి కమలమందు... సమస్త లోకములన్ సృజింపుము"'}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
