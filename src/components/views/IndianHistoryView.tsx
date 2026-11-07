import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  INDIAN_HISTORY_PERIODS, 
  VEDIC_COMPARISON_DATA, 
  INDIAN_HISTORY_GALLERY_IMAGES,
  SIXTEEN_MAHAJANAPADAS_LIST,
  MEDIEVAL_INDIA_TIMELINE,
  MUGHAL_EMPIRE_TIMELINE,
  MUGHAL_REVISION_STRIP,
  GUPTA_EMPIRE_MANUSCRIPT_DETAILS,
  VIJAYANAGARA_EMPIRE_DETAILS,
  MAURYAN_DYNASTY_DETAILS,
  MAHAJANAPADA_ERA_DETAILS,
  EUROPEANS_ARRIVAL_DETAILS,
  BRITISH_CONSOLIDATION_DETAILS,
  MODERATE_PHASE_DETAILS,
  ASSERTIVE_PHASE_DETAILS,
  NATIONALISM_TIMELINE_DETAILS,
  CONSTITUTIONAL_EVOLUTION_DETAILS
} from '../../data/indianHistoryData';
import { SCIENCE_GALLERY_INFOGRAPHICS } from '../../data/ancientIndianScienceData';
import { CIVILIZATION_GALLERY_INFOGRAPHICS } from '../../data/ancientCivilizationsData';
import { IndianSciencesUniversitiesSection } from './IndianSciencesUniversitiesSection';
import { AncientCivilizationsSection } from './AncientCivilizationsSection';
import { IndianHistory5000YearsSection } from './IndianHistory5000YearsSection';
import { SouthIndianDynastiesModal } from './SouthIndianDynastiesModal';
import { LiteraryHeritageSection } from './LiteraryHeritageSection';
import { VedicItihasaChronologySection } from './VedicItihasaChronologySection';
import type { IndianHistoryPeriod } from '../../types/mythology';
import { 
  Clock, 
  Search, 
  Layers, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  ArrowDown, 
  Maximize2, 
  X, 
  Compass, 
  Users, 
  Wheat, 
  Flame, 
  CheckCircle2,
  GraduationCap,
  Landmark,
  Feather,
  ExternalLink
} from 'lucide-react';

// Exact crop percentages for illustrations from the uploaded Gupta Empire notebook infographic
const GUPTA_IMAGE_CROPS = {
  temple: { x: 3.6, y: 2.9, w: 32.2, h: 23.0 },
  buddha: { x: 68.2, y: 2.9, w: 29.6, h: 23.4 },
  rulers: { x: 3.6, y: 25.4, w: 36.0, h: 24.4 },
  governor: { x: 37.3, y: 46.4, w: 29.0, h: 21.0 },
  coins: { x: 65.0, y: 46.4, w: 32.2, h: 13.7 },
  nalanda: { x: 3.6, y: 60.5, w: 40.5, h: 14.6 },
  scholar: { x: 34.7, y: 71.3, w: 36.7, h: 26.4 },
  vishnu: { x: 64.4, y: 58.6, w: 32.8, h: 32.7 }
} as const;

type GuptaCropKey = keyof typeof GUPTA_IMAGE_CROPS;

interface ManuscriptCropProps {
  cropKey: GuptaCropKey;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

const ManuscriptCrop: React.FC<ManuscriptCropProps> = ({ 
  cropKey, 
  className = '', 
  alt = 'Gupta Empire Manuscript Illustration', 
  onClick 
}) => {
  const crop = GUPTA_IMAGE_CROPS[cropKey];
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-[#D4AF37] bg-[#FAF7F0] shadow-xs cursor-pointer group ${className}`}
      title={alt}
    >
      <div className="w-full h-full relative overflow-hidden pointer-events-none">
        <img
          src="./images/indian_history/gupta_empire_manuscript.jpg"
          alt={alt}
          className="absolute max-w-none transition-transform duration-300 group-hover:scale-108"
          style={{
            width: `${(100 / crop.w) * 100}%`,
            height: `${(100 / crop.h) * 100}%`,
            left: `-${(crop.x / crop.w) * 100}%`,
            top: `-${(crop.y / crop.h) * 100}%`,
          }}
          loading="lazy"
        />
      </div>
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded px-1 py-0.5 text-[9px] text-[#FFE082] font-semibold flex items-center gap-0.5 pointer-events-none">
        <Maximize2 className="w-2.5 h-2.5" />
      </div>
    </div>
  );
};

export const IndianHistoryView: React.FC = () => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Sub-tabs
  type ActiveTab = 'simplified' | 'flowchart' | 'sciences_universities' | 'ancient_civilizations' | 'vedic_deepdive' | 'literary_heritage' | 'gallery';
  const [activeTab, setActiveTab] = useState<ActiveTab>('simplified');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedPeriodId, setExpandedPeriodId] = useState<string | null>('vedic_period');

  // Lightbox modal for original uploaded infographic images
  const [lightboxImage, setLightboxImage] = useState<{ 
    src: string; 
    title: string; 
    subtitle: string;
    showMahajanapadasList?: boolean;
  } | null>(null);

  // Selected period for focused detailed modal
  const [focusedPeriod, setFocusedPeriod] = useState<IndianHistoryPeriod | null>(null);

  // Pop-up modal for Gupta Empire Illustrated Manuscript details
  const [isGuptaModalOpen, setIsGuptaModalOpen] = useState<boolean>(false);

  // Pop-up modal for Vijayanagara Empire Illustrated details
  const [isVijayanagaraModalOpen, setIsVijayanagaraModalOpen] = useState<boolean>(false);

  // Pop-up modal for South Indian Dynasties (Pallavas & Cholas)
  const [isSouthDynastiesModalOpen, setIsSouthDynastiesModalOpen] = useState<boolean>(false);
  const [selectedSouthTab, setSelectedSouthTab] = useState<'pallavas' | 'cholas'>('pallavas');

  // Pop-up modal for Mughal Empire Complete Timeline (1526–1857)
  const [isMughalModalOpen, setIsMughalModalOpen] = useState<boolean>(false);

  // Pop-up modal for Mauryan Dynasty (321–185 BCE)
  const [isMauryaModalOpen, setIsMauryaModalOpen] = useState<boolean>(false);

  // Pop-up modal for 16 Mahajanapadas Era (600–322 BCE)
  const [isMahajanapadaModalOpen, setIsMahajanapadaModalOpen] = useState<boolean>(false);

  // Pop-up modal for Europeans Arrive in India (1498–1815 CE)
  const [isEuropeansModalOpen, setIsEuropeansModalOpen] = useState<boolean>(false);

  // Pop-up modal for Consolidation of British Power in India (1757–1856 CE)
  const [isBritishModalOpen, setIsBritishModalOpen] = useState<boolean>(false);

  // Pop-up modal for Stone Age / Early Human Migration Map
  const [isStoneAgeModalOpen, setIsStoneAgeModalOpen] = useState<boolean>(false);

  // Pop-up modal for Revolt of 1857 (First War of Indian Independence)
  const [isRevolt1857ModalOpen, setIsRevolt1857ModalOpen] = useState<boolean>(false);

  // Pop-up modal for Freedom Movement: Moderate Phase (1885–1905)
  const [isModeratePhaseModalOpen, setIsModeratePhaseModalOpen] = useState<boolean>(false);

  // Pop-up modal for Second Phase of Indian National Movement: Assertive/Extremist Phase (1905–1916)
  const [isAssertivePhaseModalOpen, setIsAssertivePhaseModalOpen] = useState<boolean>(false);

  // Pop-up modal for Timeline: Nationalism in India (Gandhian Era: 1915–1942)
  const [isNationalismTimelineModalOpen, setIsNationalismTimelineModalOpen] = useState<boolean>(false);

  // Pop-up modal for Historical Evolution of British Constitutional Development in India (Phase 2: 1858–1947)
  const [isConstitutionalEvolutionModalOpen, setIsConstitutionalEvolutionModalOpen] = useState<boolean>(false);

  // Interactive zoom level inside the Lightbox modal
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  // Filter periods
  const filteredPeriods = useMemo(() => {
    return INDIAN_HISTORY_PERIODS.filter(period => {
      // Category filter
      if (selectedCategory !== 'all' && period.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = period.titleEn.toLowerCase().includes(q) || period.titleTe.includes(q);
      const inSub = period.subtitleEn.toLowerCase().includes(q) || period.subtitleTe.includes(q);
      const inSummary = period.summaryEn.toLowerCase().includes(q) || period.summaryTe.includes(q);
      const inFeatures = period.keyFeaturesEn.some(f => f.toLowerCase().includes(q)) || 
                         period.keyFeaturesTe.some(f => f.includes(q));
      const inSubdivisions = period.subDivisions?.some(s => 
        s.nameEn.toLowerCase().includes(q) || s.nameTe.includes(q) ||
        s.descriptionEn.toLowerCase().includes(q) || s.descriptionTe.includes(q)
      );
      return inTitle || inSub || inSummary || inFeatures || inSubdivisions;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[800px] mb-8">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFDF7] to-[#FFF9E6] px-4 sm:px-6 py-5 border-b-2 border-[#E8DCC4]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B1113] via-[#D84315] to-[#FF8F00] flex items-center justify-center text-2xl shadow-md border border-[#D4AF37] shrink-0 text-white">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {isEn ? 'Chronological Encyclopedia' : 'కాలక్రమానుసార చారిత్రక విజ్ఞాన దర్శిని'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[11px] font-bold border border-[#D4AF37]">
                  {isEn ? 'Pre-History to 647 CE' : 'క్రీ.పూ. ప్రాచీన యుగం నుండి క్రీ.శ. 647 వరకు'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#7B1113] font-telugu-serif tracking-tight mt-1">
                {isEn ? 'Indian History: Chronological Flow & Civilizations' : 'భారతీయ చరిత్ర: కాలానుక్రమణిక మరియు మహా సామ్రాజ్యాలు'}
              </h2>
              <p className="text-xs sm:text-sm text-[#5D4037] mt-1 max-w-3xl leading-relaxed">
                {isEn 
                  ? 'A simplified, step-by-step chronological roadmap of Ancient India: from Pre-History & the Indus Valley through the Vedic Foundations, Mahajanapadas, Magadha, Maurya, Gupta Golden Age, to Harsha & Southern Dynasties.'
                  : 'ప్రాచీన భారతదేశ చారిత్రక పరిణామ క్రమము: చరిత్రపూర్వ రాతియుగం, సింధు లోయ నాగరికత, తొలి-మలి వేద యుగాలు, 16 మహాజనపదాలు, మగధ, మౌర్య, గుప్త స్వర్ణయుగం నుండి హర్షవర్ధనుడు మరియు దక్షిణ భారత పల్లవ-చాళుక్యుల వరకు సరళీకృత క్రమం.'}
              </p>
            </div>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-2 self-start lg:self-center shrink-0 bg-[#FFFDF7] p-2 rounded-xl border border-[#D4AF37]/60 shadow-xs">
            <div className="text-center px-2.5 py-1 border-r border-[#E8DCC4]">
              <span className="text-base sm:text-lg font-extrabold text-[#7B1113] block leading-none">8</span>
              <span className="text-[10px] text-[#5D4037] font-semibold">{isEn ? 'Major Eras' : 'ప్రధాన యుగాలు'}</span>
            </div>
            <div className="text-center px-2.5 py-1 border-r border-[#E8DCC4]">
              <span className="text-base sm:text-lg font-extrabold text-[#D84315] block leading-none">4000+</span>
              <span className="text-[10px] text-[#5D4037] font-semibold">{isEn ? 'Years Span' : 'సంవత్సరాల చరిత్ర'}</span>
            </div>
            <div className="text-center px-2.5 py-1">
              <span className="text-base sm:text-lg font-extrabold text-[#C99700] block leading-none">15</span>
              <span className="text-[10px] text-[#5D4037] font-semibold">{isEn ? 'Infographics' : 'మూల చార్ట్‌లు'}</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* GLOBAL HISTORIC PERIODS TIMELINE (PREHISTORY & HISTORY)       */}
        {/* ============================================================ */}
        <div className="mt-4 pt-4 border-t border-[#E8DCC4] space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DC]/60 border-2 border-[#D4AF37] shadow-sm space-y-4">
            
            {/* Timeline Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-[#7B1113] text-[#FFE082] shadow-xs">⏳</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                      {isEn ? 'Global Timeline • 3 Million Years BC to Modern' : 'సమగ్ర కాలరేఖ • 30 లక్షల సంవత్సరాల నుండి నేటి వరకు'}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#7B1113]">
                      HISTORIC PERIODS TIMELINE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                    {isEn ? 'Historic Periods Timeline: Prehistory & History' : 'మానవ చరిత్ర యుగాల కాలానుక్రమణిక (చరిత్రపూర్వ & చారిత్రక యుగాలు)'}
                  </h3>
                  <p className="text-xs text-[#5D4037] font-medium">
                    {isEn 
                      ? 'Prehistory (Paleolithic & Neolithic) ➔ History (Ancient, Medieval, Modern & Contemporary Eras)' 
                      : 'చరిత్రపూర్వ రాతియుగం (ప్రాచీన & నవీన శిలాయుగం) ➔ చారిత్రక యుగం (ప్రాచీన, మధ్య, ఆధునిక & సమకాలీన యుగాలు)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Horizontal Interactive Timeline Bar */}
            <div className="overflow-x-auto pb-3 pt-1">
              <div className="min-w-[880px] p-3.5 bg-white rounded-2xl border border-amber-300/80 shadow-xs space-y-4">
                
                {/* 1. Grand Eras Bar (Prehistory vs History) */}
                <div className="grid grid-cols-12 gap-1.5 text-center font-bold text-xs">
                  {/* Prehistory (Columns 1 to 4) */}
                  <div className="col-span-4 p-2 rounded-xl bg-gradient-to-r from-[#81C784]/30 to-[#4CAF50]/30 border border-[#2E7D32]/40 text-[#1B5E20]">
                    <div className="text-xs sm:text-sm font-black font-telugu-serif">{isEn ? 'Prehistory' : 'చరిత్రపూర్వ యుగం (Prehistory)'}</div>
                    <div className="text-[10px] font-mono text-[#2E7D32]">{isEn ? '3 Million Years to 3000 BC' : '30 లక్షల సంవత్సరాల నుండి క్రీ.పూ. 3000 వరకు'}</div>
                  </div>

                  {/* History (Columns 5 to 12) */}
                  <div className="col-span-8 p-2 rounded-xl bg-gradient-to-r from-[#FFB74D]/30 via-[#FF8A65]/30 to-[#8D6E63]/30 border border-[#D84315]/40 text-[#7B1113]">
                    <div className="text-xs sm:text-sm font-black font-telugu-serif">{isEn ? 'History' : 'చారిత్రక యుగం (History)'}</div>
                    <div className="text-[10px] font-mono text-[#8B0000]">{isEn ? '3000 BC to Nowadays' : 'క్రీ.పూ. 3000 నుండి నేటి వరకు'}</div>
                  </div>
                </div>

                {/* 2. Six Epoch Colored Blocks (As in Source Image) */}
                <div className="grid grid-cols-12 gap-1 text-center text-white text-[10.5px] font-bold">
                  {/* Paleolithic */}
                  <div className="col-span-2.5 p-2 rounded-xl bg-[#8BC34A] shadow-2xs border border-[#689F38] text-stone-900 leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Paleolithic' : 'ప్రాచీన శిలాయుగం'}</span>
                    <span className="font-mono text-[10px]">3M - 10000 BC</span>
                  </div>

                  {/* Neolithic */}
                  <div className="col-span-1.5 p-2 rounded-xl bg-[#4CAF50] shadow-2xs border border-[#2E7D32] leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Neolithic' : 'నవీన శిలాయుగం'}</span>
                    <span className="font-mono text-[10px]">10000 BC</span>
                  </div>

                  {/* Ancient Age */}
                  <div className="col-span-2 p-2 rounded-xl bg-[#FF7043] shadow-2xs border border-[#D84315] leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Ancient Age' : 'ప్రాచీన యుగం'}</span>
                    <span className="font-mono text-[10px]">3000 BC - 476 AC</span>
                  </div>

                  {/* Medieval Age */}
                  <div className="col-span-2 p-2 rounded-xl bg-[#D84315] shadow-2xs border border-[#BF360C] leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Medieval Age' : 'మధ్యయుగం'}</span>
                    <span className="font-mono text-[10px]">476 - 1492 AC</span>
                  </div>

                  {/* Modern Age */}
                  <div className="col-span-2 p-2 rounded-xl bg-[#8D6E63] shadow-2xs border border-[#5D4037] leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Modern Age' : 'ఆధునిక యుగం'}</span>
                    <span className="font-mono text-[10px]">1492 - 1789 AC</span>
                  </div>

                  {/* Contemporary Age */}
                  <div className="col-span-2 p-2 rounded-xl bg-[#4E342E] shadow-2xs border border-[#271612] leading-tight">
                    <span className="block uppercase text-[9px] font-black">{isEn ? 'Contemporary' : 'సమకాలీన యుగం'}</span>
                    <span className="font-mono text-[10px]">1789 AC - Present</span>
                  </div>
                </div>

                {/* 3. The 7 Key Milestones with Extracted Pictures */}
                <div className="grid grid-cols-7 gap-2 pt-2 items-start">
                  
                  {/* Milestone 1: First Human Species */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/1_first_humans.jpg',
                        title: isEn ? 'First Human Species (2.5 Million Years BC)' : 'తొలి మానవ జాతుల ఆవిర్భావం (25 లక్షల సంవత్సరాల క్రితం)',
                        subtitle: isEn ? 'Dawn of Early Hominids in the Paleolithic Era' : 'ప్రాచీన శిలాయుగంలో హోమినిడ్ జాతుల పరిణామం'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#F1F8E9] border border-[#C5E1A5] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#33691E] uppercase">{isEn ? 'Paleolithic' : 'తొలి శిలాయుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#AED581] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/1_first_humans.jpg" 
                        alt="First human species" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#1B5E20] leading-tight">{isEn ? 'First Human Species' : 'తొలి మానవ జాతులు'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#D84315]">2.5 Million BC</div>
                  </div>

                  {/* Milestone 2: Use of Fire */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/2_use_of_fire.jpg',
                        title: isEn ? 'Use of Fire (1 Million Years BC)' : 'నిప్పును ఉపయోగించడం (10 లక్షల సంవత్సరాల క్రితం)',
                        subtitle: isEn ? 'Major technological breakthrough of early humans' : 'మానవ పరిణామంలో అగ్ని వినియోగం మహా మలుపు'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#F1F8E9] border border-[#C5E1A5] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#33691E] uppercase">{isEn ? 'Paleolithic' : 'శిలాయుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#AED581] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/2_use_of_fire.jpg" 
                        alt="Use of fire" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#1B5E20] leading-tight">{isEn ? 'Use of Fire' : 'నిప్పు వాడకం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#D84315]">1 Million BC</div>
                  </div>

                  {/* Milestone 3: Agriculture Begins */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/3_agriculture.jpg',
                        title: isEn ? 'Agriculture Begins (10,000 BC)' : 'వ్యవసాయం ప్రారంభం (క్రీ.పూ. 10,000)',
                        subtitle: isEn ? 'Neolithic Revolution: Settled communities & crop cultivation' : 'నవీన శిలాయుగ విప్లవం: స్థిర నివాసాలు & పంటల సాగు'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#1B5E20] uppercase">{isEn ? 'Neolithic' : 'నవీన శిలాయుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#81C784] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/3_agriculture.jpg" 
                        alt="Agriculture begins" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#1B5E20] leading-tight">{isEn ? 'Agriculture Begins' : 'వ్యవసాయం ప్రారంభం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#2E7D32]">10,000 BC</div>
                  </div>

                  {/* Milestone 4: Invention of Writing */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/4_writing.jpg',
                        title: isEn ? 'Invention of Writing (3,000 BC)' : 'లిపి / రచనల ఆవిర్భావం (క్రీ.పూ. 3,000)',
                        subtitle: isEn ? 'Transition from Prehistory to History: Written records emerge' : 'చరిత్రపూర్వ యుగం నుండి చారిత్రక యుగానికి మార్పు'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#FFF3E0] border border-[#FFCC80] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#E65100] uppercase">{isEn ? 'Ancient' : 'ప్రాచీన యుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#FFA726] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/4_writing.jpg" 
                        alt="Invention of writing" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#7B1113] leading-tight">{isEn ? 'Invention of Writing' : 'లిపి ఆవిర్భావం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#D84315]">3,000 BC</div>
                  </div>

                  {/* Milestone 5: Fall of Western Roman Empire */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/5_roman_fall.jpg',
                        title: isEn ? 'Fall of Western Roman Empire (476 AC)' : 'పశ్చిమ రోమన్ సామ్రాజ్య పతనం (క్రీ.శ. 476)',
                        subtitle: isEn ? 'Marks the transition from Antiquity into the Medieval Age' : 'ప్రాచీన యుగం ముగిసి మధ్యయుగం ఆరంభమైన చారిత్రక ఘట్టం'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#FBE9E7] border border-[#FFAB91] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#BF360C] uppercase">{isEn ? 'Medieval' : 'మధ్యయుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#FF8A65] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/5_roman_fall.jpg" 
                        alt="Fall of Western Roman Empire" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#7B1113] leading-tight">{isEn ? 'Fall of Roman Empire' : 'రోమన్ పతనం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#D84315]">476 AC</div>
                  </div>

                  {/* Milestone 6: Columbus Discovered America */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/6_columbus.jpg',
                        title: isEn ? 'Columbus Discovered America (1492 AC)' : 'కొలంబస్ సముద్రయానం (క్రీ.శ. 1492)',
                        subtitle: isEn ? 'Age of Exploration: Beginning of the Modern Age' : 'సముద్ర మార్గాల అన్వేషణ & ఆధునిక యుగారంభం'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#EFEBE9] border border-[#BCAAA4] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#4E342E] uppercase">{isEn ? 'Modern' : 'ఆధునిక యుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#A1887F] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/6_columbus.jpg" 
                        alt="Columbus discovered America" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#4E342E] leading-tight">{isEn ? 'Columbus Voyages' : 'కొలంబస్ ప్రయాణం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#5D4037]">1492 AC</div>
                  </div>

                  {/* Milestone 7: French Revolution */}
                  <div 
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/historic_periods/7_french_rev.jpg',
                        title: isEn ? 'French Revolution (1789 AC)' : 'ఫ్రెంచ్ విప్లవం (క్రీ.శ. 1789)',
                        subtitle: isEn ? 'Dawn of the Contemporary Age: Liberty, Equality & Fraternity' : 'స్వేచ్ఛ, సమానత్వం, సౌభ్రాతృత్వాలతో సమకాలీన యుగారంభం'
                      });
                    }}
                    className="p-2 rounded-xl bg-[#ECEFF1] border border-[#B0BEC5] text-center space-y-1.5 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-[9px] font-bold text-[#263238] uppercase">{isEn ? 'Contemporary' : 'సమకాలీన యుగం'}</div>
                    <div className="h-14 w-full rounded-lg overflow-hidden bg-white border border-[#90A4AE] p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
                      <img 
                        src="./images/indian_history/historic_periods/7_french_rev.jpg" 
                        alt="French Revolution" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#263238] leading-tight">{isEn ? 'French Revolution' : 'ఫ్రెంచ్ విప్లవం'}</div>
                    <div className="text-[10px] font-mono font-extrabold text-[#37474F]">1789 AC</div>
                  </div>

                </div>

                {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
                <div className="pt-2.5 mt-1 border-t border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <span className="font-bold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                    <span>🖼️</span>
                    <span>{isEn ? 'మూల సచిత్ర పటం:' : 'మూల సచిత్ర పటం:'}</span>
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/historic_periods_timeline.jpg',
                          title: isEn ? 'Historic Periods Timeline' : 'చారిత్రక కాలాల మూల కాలరేఖ (Historic Periods Timeline)',
                          subtitle: isEn 
                            ? 'Important Events in Ancient History Timeline: Prehistory (3M–3000 BC) & History (3000 BC to Present)'
                            : 'చరిత్రపూర్వ యుగం (30 లక్షల-3000 BC) & చారిత్రక యుగం (3000 BC నుండి నేటి వరకు)'
                        });
                      }}
                      className="text-[#7B1113] hover:text-[#D84315] font-bold underline flex items-center gap-1.5 cursor-pointer bg-amber-50/80 hover:bg-amber-100/80 px-3 py-1.5 rounded-xl border border-amber-300 shadow-2xs hover:shadow-xs transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? 'Historic Periods Timeline Original Chart (Click to View & Zoom)' : 'చారిత్రక కాలాల మూల కాలరేఖ పటం (వీక్షించండి)'}</span>
                    </button>
                    <a
                      href="./images/indian_history/historic_periods_timeline.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#7B1113] hover:text-[#D84315] font-bold flex items-center gap-1 text-[11px] border border-amber-300 shadow-2xs transition-all cursor-pointer"
                      title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* View Mode Sub-tabs */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E8DCC4] overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('simplified')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'simplified'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
          >
            <Clock className="w-4 h-4 text-[#FFD54F]" />
            <span>{isEn ? '1. Simplified Chronological View' : '1. సరళీకృత కాలక్రమం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('flowchart')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'flowchart'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#D84315]" />
            <span>{isEn ? '2. Visual Flowchart Map' : '2. ప్రవాహ వృక్ష చార్ట్'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sciences_universities')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'sciences_universities'
                ? 'bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-[#FFE082] shadow-md ring-2 ring-[#81C784]'
                : 'bg-[#FFFDF7] text-[#1B5E20] hover:bg-[#E8F5E9] hover:text-[#1B5E20] border border-[#A5D6A7]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#FFD54F]" />
            <span>{isEn ? '3. Ancient Universities & Scientists' : '3. విద్యాపీఠాలు & శాస్త్రవేత్తలు'}</span>
          </button>

          <button
            onClick={() => setActiveTab('ancient_civilizations')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'ancient_civilizations'
                ? 'bg-gradient-to-r from-[#B71C1C] via-[#C62828] to-[#880E4F] text-[#FFE082] shadow-md ring-2 ring-[#FF8A80]'
                : 'bg-[#FFFDF7] text-[#B71C1C] hover:bg-[#FFEBEE] hover:text-[#B71C1C] border border-[#FFCDD2]'
            }`}
          >
            <Landmark className="w-4 h-4 text-[#FFD54F]" />
            <span>{isEn ? '4. Ancient Civilizations (Indus, Meso, Egypt)' : '4. ప్రాచీన నాగరికతలు (సింధు, మెసపటోమియా, ఈజిప్ట్)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('vedic_deepdive')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'vedic_deepdive'
                ? 'bg-gradient-to-r from-[#D84315] to-[#7B1113] text-[#FFE082] shadow-md ring-2 ring-[#FFD54F]'
                : 'bg-[#FFFDF7] text-[#D84315] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#FFAB91] font-semibold'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#FFD54F]" />
            <span>{isEn ? '5. Vedic Age Deep-Dive & Comparison' : '5. వేద యుగ సమగ్ర అధ్యయనం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('literary_heritage')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'literary_heritage'
                ? 'bg-gradient-to-r from-[#5D198E] via-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-[#FFFDF7] text-[#5D198E] hover:bg-[#F3E5F5] hover:text-[#4A148C] border border-[#CE93D8] font-semibold'
            }`}
          >
            <Feather className="w-4 h-4 text-[#FFD54F]" />
            <span>{isEn ? '6. Literary Heritage of India' : '6. భారతీయ సాహిత్య వారసత్వం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-[#7B1113] to-[#4A0012] text-[#FFE082] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-[#FFFDF7] text-[#5D4037] hover:bg-[#FFF3E0] hover:text-[#7B1113] border border-[#E8DCC4]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C99700]" />
            <span>{isEn ? '7. Source Infographics (17 Charts)' : '7. మూల చిత్ర నిధి (17 పట్టికలు)'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SUB-TAB 1: SIMPLIFIED CHRONOLOGICAL VIEW */}
      {/* ============================================================ */}
      {activeTab === 'simplified' && (
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Master 5,000 Years Infographic Poster Blocks */}
          <IndianHistory5000YearsSection
            onOpenLightbox={(img) => setLightboxImage({ ...img, showMahajanapadasList: false })}
            onSelectPeriod={(periodId) => {
              setExpandedPeriodId(periodId);
              const el = document.getElementById(periodId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          />
          
          {/* Controls: Search and Era filter bar */}
          <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] shadow-xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#D84315] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isEn 
                  ? 'Search periods, rulers, Vedas, iron tools, cities (e.g., Harsha, Rigveda, Pataliputra)...'
                  : 'యుగాలు, రాజులు, వేదాలు, నగరాలు, ఇనుప పనిముట్లను శోధించండి (ఉదా: హర్ష, ఋగ్వేదం, పాటలీపుత్ర)...'}
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#7B1113]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[#5D4037] font-semibold whitespace-nowrap pl-1 mr-1">
                {isEn ? 'Filter Era:' : 'యుగము:'}
              </span>
              {[
                { id: 'all', labelEn: 'All Eras', labelTe: 'అన్ని యుగాలు' },
                { id: 'prehistory', labelEn: 'Pre-History', labelTe: 'చరిత్రపూర్వ' },
                { id: 'protohistory', labelEn: 'Indus Valley', labelTe: 'సింధు లోయ' },
                { id: 'vedic', labelEn: 'Vedic Age', labelTe: 'వేద యుగం' },
                { id: 'mahajanapadas', labelEn: 'Mahajanapadas', labelTe: 'మహాజనపదాలు' },
                { id: 'empires', labelEn: 'Empires', labelTe: 'సామ్రాజ్యాలు' },
                { id: 'classical', labelEn: 'Classical', labelTe: 'స్వర్ణయుగం' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                      : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFE082]/30 border border-[#E8DCC4]'
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelTe}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Notice about Simplified Flow */}
          <div className="bg-[#FFFDF7] p-3 rounded-xl border border-[#D4AF37]/40 text-xs text-[#5D4037] flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-base">📜</span>
              <span>
                {isEn 
                  ? 'Showing eras in strict chronological sequence. Click on any period card or "Detailed View" to expand its comprehensive socioeconomic, religious, and political facets.'
                  : 'చారిత్రక యుగాలు ఖచ్చితమైన కాలానుక్రమణికలో పొందుపరచబడినవి. పూర్తి వివరాలు, సమాజం, ఆర్థిక రంగం, మతం మరియు గ్రంథాల విశ్లేషణ కొరకు కార్డ్‌పై క్లిక్ చేయండి.'}
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#7B1113]">
              {filteredPeriods.length} {isEn ? 'Epochs Listed' : 'యుగాలు ప్రదర్శితం'}
            </span>
          </div>

          {/* Chronological Vertical Timeline Flow */}
          <div className="relative pl-4 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-[#7B1113] before:via-[#D84315] before:to-[#D4AF37]">
            {filteredPeriods.map((period, idx) => {
              const isExpanded = expandedPeriodId === period.id;

              return (
                <div key={period.id} id={period.id} className="relative group scroll-mt-24">
                  {/* Timeline Node Marker */}
                  <div className="absolute -left-4 sm:-left-8 top-5 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-[#7B1113] to-[#D84315] text-white flex items-center justify-center font-bold text-xs border-2 border-[#FFE082] shadow-md z-10">
                    {period.order}
                  </div>

                  {/* Period Card */}
                  <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] transition-all shadow-xs hover:shadow-md overflow-hidden">
                    
                    {/* Card Header */}
                    <div 
                      onClick={() => setExpandedPeriodId(isExpanded ? null : period.id)}
                      className="p-4 sm:p-5 cursor-pointer bg-gradient-to-r from-[#FFFFFF] via-[#FFFDF7] to-[#FAF7F0] hover:bg-[#FFF9E6] transition-colors flex items-start justify-between gap-3 flex-wrap"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37] flex items-center justify-center text-xl shrink-0 shadow-2xs">
                          {period.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                              {isEn ? `Stage ${period.order}` : `దశ ${period.order}`}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#D84315]/10 text-[#D84315] border border-[#D84315]/30 text-[11px] font-extrabold flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {isEn ? period.timelineEn : period.timelineTe}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif mt-1">
                            {isEn ? period.titleEn : period.titleTe}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#D84315] font-semibold mt-0.5">
                            {isEn ? period.subtitleEn : period.subtitleTe}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center ml-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFocusedPeriod(period);
                          }}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FFF9E6] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1 transition-colors cursor-pointer"
                          title={isEn ? 'Open full-screen modal' : 'పూర్తి సమాచార కిటికీ'}
                        >
                          <Maximize2 className="w-3 h-3 text-[#D84315]" />
                          <span className="hidden sm:inline">{isEn ? 'Deep Dive' : 'విస్తృత అధ్యయనం'}</span>
                        </button>

                        <div className="p-1 rounded-lg bg-[#FAF7F0] text-[#7B1113]">
                          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Summary Paragraph (Always visible in simplified view) */}
                    <div className="px-4 sm:px-5 pb-3 pt-1 border-t border-[#E8DCC4]/50">
                      <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                        {isEn ? period.summaryEn : period.summaryTe}
                      </p>
                    </div>

                    {/* Quick Bullet Highlights (Always visible in simplified view) */}
                    <div className="px-4 sm:px-5 pb-4">
                      <div className="bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                        <div className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D84315]" />
                          <span>{isEn ? 'Key Chronological Highlights & Turning Points:' : 'ముఖ్యాంశాలు & చారిత్రక పరిణామాలు:'}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-xs text-[#5D4037]">
                          {(isEn ? period.keyFeaturesEn : period.keyFeaturesTe).map((kf, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-[#D84315] font-bold">★</span>
                              <span className="leading-snug">{kf}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sub-divisions if present (e.g. Paleolithic/Mesolithic/Neolithic/Chalcolithic, Early Vedic vs Later Vedic) */}
                    {period.subDivisions && period.subDivisions.length > 0 && (
                      <div className="px-4 sm:px-5 pb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                          {period.subDivisions.map((sub, sIdx) => (
                            <div key={sIdx} className="bg-[#FFFDF7] p-3 rounded-xl border border-[#D4AF37]/50 shadow-2xs space-y-1.5 hover:border-[#D84315] transition-colors">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                                  {isEn ? sub.nameEn : sub.nameTe}
                                </span>
                              </div>
                              {sub.periodEn && (
                                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFE082]/60 text-[#7B1113]">
                                  {isEn ? sub.periodEn : sub.periodTe}
                                </span>
                              )}
                              <p className="text-[11px] text-[#5D4037] leading-relaxed">
                                {isEn ? sub.descriptionEn : sub.descriptionTe}
                              </p>
                              <div className="pt-1 border-t border-[#E8DCC4] space-y-0.5 text-[10px] text-[#7B1113] font-medium">
                                {(isEn ? sub.keyPointsEn : sub.keyPointsTe).map((kp, kpIdx) => (
                                  <div key={kpIdx} className="flex items-center gap-1">
                                    <span className="text-[#D84315]">•</span>
                                    <span>{kp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Collapsible Deep-Dive Details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-2 border-t-2 border-dashed border-[#D4AF37]/50 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] space-y-4">
                        
                        {/* 4-Pillar Grid: Sources, Society, Economy, Religion */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                          
                          {/* 1. Sources */}
                          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                              <BookOpen className="w-4 h-4 text-[#C99700]" />
                              <span>{isEn ? 'Primary Sources' : 'ఆధార గ్రంథాలు & తవ్వకాలు'}</span>
                            </div>
                            <ul className="space-y-1 text-xs text-[#5D4037]">
                              {(isEn ? period.sourcesEn : period.sourcesTe).map((item, idx2) => (
                                <li key={idx2} className="flex items-start gap-1 leading-snug">
                                  <span className="text-[#D84315] text-[10px]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 2. Society */}
                          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                              <Users className="w-4 h-4 text-[#D84315]" />
                              <span>{isEn ? 'Social Life & Structure' : 'సామాజిక జీవనం & వర్ణాలు'}</span>
                            </div>
                            <ul className="space-y-1 text-xs text-[#5D4037]">
                              {(isEn ? period.societyEn : period.societyTe).map((item, idx2) => (
                                <li key={idx2} className="flex items-start gap-1 leading-snug">
                                  <span className="text-[#D84315] text-[10px]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 3. Economy */}
                          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                              <Wheat className="w-4 h-4 text-[#C99700]" />
                              <span>{isEn ? 'Economy & Agriculture' : 'ఆర్థిక వ్యవస్థ & వ్యవసాయం'}</span>
                            </div>
                            <ul className="space-y-1 text-xs text-[#5D4037]">
                              {(isEn ? period.economyEn : period.economyTe).map((item, idx2) => (
                                <li key={idx2} className="flex items-start gap-1 leading-snug">
                                  <span className="text-[#D84315] text-[10px]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 4. Religion */}
                          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                              <Flame className="w-4 h-4 text-[#BF360C]" />
                              <span>{isEn ? 'Religion & Philosophy' : 'ధర్మం, యజ్ఞాలు & తత్త్వశాస్త్రం'}</span>
                            </div>
                            <ul className="space-y-1 text-xs text-[#5D4037]">
                              {(isEn ? period.religionEn : period.religionTe).map((item, idx2) => (
                                <li key={idx2} className="flex items-start gap-1 leading-snug">
                                  <span className="text-[#D84315] text-[10px]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* Legacy & Historical Impact Banner */}
                        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/40 to-[#FFF8E1] border border-[#D4AF37] flex items-center justify-between gap-3 flex-wrap">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block">
                              {isEn ? 'Civilizational Legacy & Influence' : 'శాశ్వత వారసత్వ ప్రభావము'}
                            </span>
                            <p className="text-xs text-[#5D4037] font-medium leading-relaxed italic">
                              "{isEn ? period.legacyEn : period.legacyTe}"
                            </p>
                          </div>

                          {period.infographicImage && (
                            <button
                              onClick={() => {
                                setLightboxImage({
                                  src: period.infographicImage!,
                                  title: isEn ? period.titleEn : period.titleTe,
                                  subtitle: isEn ? period.imageCaptionEn || '' : period.imageCaptionTe || '',
                                  showMahajanapadasList: period.id === 'mahajanapadas'
                                });
                              }}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
                            >
                              <span>🖼️</span>
                              <span>{isEn ? 'View Original Chart' : 'మూల చార్ట్ చూడండి'}</span>
                            </button>
                          )}
                        </div>

                      </div>
                    )}

                  </div>

                  {/* Embedded Vedic-Itihasa Chronology Timeline after Pre-History (Dr. P.V. Vartak Epochs) */}
                  {period.id === 'prehistory' && (
                    <div className="w-full my-6">
                      <VedicItihasaChronologySection
                        onOpenMasterChart={(src, title, subtitle) =>
                          setLightboxImage({ src, title, subtitle: subtitle || '' })
                        }
                      />
                    </div>
                  )}

                  {/* Flow Arrow to next era */}
                  {idx < filteredPeriods.length - 1 && (
                    <div className="flex items-center justify-center py-1">
                      <div className="p-1 rounded-full bg-[#FAF7F0] border border-[#D4AF37]/60 text-[#7B1113] shadow-xs">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 3. SUB-TAB 2: VISUAL FLOWCHART MAP (REPLICATING IMAGE 1) */}
      {/* ============================================================ */}
      {activeTab === 'flowchart' && (
        <div className="p-4 sm:p-6 space-y-6">

          {/* Time Line of Ancient Indian History Master Infographic Banner */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/30 border-2 border-[#D4AF37] shadow-sm space-y-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-[#7B1113] text-[#FFE082] shadow-xs">⏳</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                      {isEn ? 'Master Chronology • 5114 BCE – 325 BCE' : 'కాలరేఖ • క్రీ.పూ. 5114 – క్రీ.పూ. 325'}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#7B1113]">
                      TIME LINE OF ANCIENT INDIAN HISTORY
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                    {isEn ? 'Timeline of Ancient Indian History' : 'ప్రాచీన భారతదేశ చారిత్రక కాలరేఖ (Time Line of Ancient Indian History)'}
                  </h4>
                  <p className="text-xs text-[#5D4037] font-medium">
                    {isEn 
                      ? 'Rama (5114 BCE) • Vyasa (3141 BCE) • Krishna (3112 BCE) • Kaliyuga (3102 BCE) • Mahabharata War (3067 BCE) • Mahavira (1907 BCE) • Buddha (1887 BCE) • Adi Shankara (509 BCE) • Alexander (325 BCE)'
                      : 'శ్రీరాముడు (5114 BCE) • వేదవ్యాసుడు (3141-3129 BCE) • శ్రీకృష్ణుడు (3112 BCE) • కలియుగం (3102 BCE) • మహాభారత యుద్ధం (3067 BCE) • మహావీర జైన (1907 BCE) • గౌతమ బుద్ధుడు (1887 BCE) • ఆది శంకరాచార్యులు (509 BCE) • అలెగ్జాండర్ రాక (325 BCE)'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: './images/indian_history/timeline_ancient_indian_history.jpg',
                    title: isEn ? 'Timeline of Ancient Indian History' : 'ప్రాచీన భారతదేశ చారిత్రక కాలరేఖ (Time Line of Ancient Indian History)',
                    subtitle: isEn 
                      ? 'Chronological Landmarks from Rama (5114 BCE) to Alexander (325 BCE) • Bharath Gyan'
                      : 'క్రీ.పూ. 5114 నుండి క్రీ.పూ. 325 వరకు చారిత్రక మైలురాళ్లు • భరత్ జ్ఞాన్'
                  });
                }}
                className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Open Full-Screen Lightbox' : 'పూర్తి తెరపై జూమ్ చేయండి'}</span>
              </button>
            </div>

            {/* Extracted Picture Timeline (As in Source) */}
            <div className="p-3.5 sm:p-5 rounded-3xl bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DC]/60 border-2 border-[#D4AF37] space-y-3 shadow-inner">
              {/* Scrollable Timeline Canvas */}
              <div className="overflow-x-auto pb-3 pt-1">
                <div className="min-w-[940px] p-4 bg-[#FFFDF6] rounded-2xl border border-amber-300/80 shadow-xs space-y-2">
                  
                  {/* Top Row: 9 Extracted Milestone Pictures */}
                  <div className="grid grid-cols-9 gap-2 text-center items-end">
                    {/* 1. Rama */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/1_rama.jpg',
                          title: isEn ? 'Sri Rama (5114 BCE)' : 'శ్రీరాముడు (క్రీ.పూ. 5114)',
                          subtitle: isEn ? 'Planetarium planetary dating based on Valmiki Ramayana' : 'వాల్మీకి రామాయణ గ్రహస్థితుల ఖగోళ ఆధారిత కాల నిర్ణయం'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/1_rama.jpg" 
                          alt="Rama 5114 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 2. Vyasa */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/2_vyasa.jpg',
                          title: isEn ? 'Veda Vyasa (3141–3129 BCE)' : 'వేదవ్యాస మహర్షి (క్రీ.పూ. 3141-3129)',
                          subtitle: isEn ? 'Organiser of 4 Vedas & Composer of Mahabharata' : 'చతుర్వేద విభజనకర్త & మహాభారత కర్త'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/2_vyasa.jpg" 
                          alt="Vyasa 3141 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 3. Krishna */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/3_krishna.jpg',
                          title: isEn ? 'Sri Krishna (3112 BCE)' : 'శ్రీకృష్ణుడు (క్రీ.పూ. 3112)',
                          subtitle: isEn ? 'Janmashtami astronomical alignment & Dwaraka submerged city' : 'శ్రీకృష్ణ జన్మాష్టమి తిథి నక్షత్రాలు & మునిగిన ద్వారకా నగరం'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/3_krishna.jpg" 
                          alt="Krishna 3112 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 4. Kaliyuga */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/4_kaliyuga.jpg',
                          title: isEn ? 'Kaliyuga Alignment (3102 BCE)' : 'కలియుగారంభ గ్రహకూటమి (క్రీ.పూ. 3102)',
                          subtitle: isEn ? 'Planetary conjunction documented in Surya Siddhanta & Aihole inscription' : 'సూర్య సిద్ధాంతం & ఐహోల్ శాసనంలో ధ్రువీకరించబడిన గ్రహ సంయోగం'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/4_kaliyuga.jpg" 
                          alt="Kaliyuga 3102 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 5. Mahabharata */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/5_mahabharata.jpg',
                          title: isEn ? 'Mahabharata War (3067 BCE)' : 'కురుక్షేత్ర మహాభారత యుద్ధం (క్రీ.పూ. 3067)',
                          subtitle: isEn ? '18-day battle verified by retrograde Saturn-Jupiter and twin eclipses' : 'శని, గురు వక్రగతులు & 13 రోజుల వ్యవధిలోని గ్రహణాల ఖగోళ ఆధారాలు'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/5_mahabharata.jpg" 
                          alt="Mahabharata War 3067 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 6. Mahavira */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/6_mahavira.jpg',
                          title: isEn ? 'Mahaveera Jaina (1907 BCE)' : 'భగవాన్ మహావీరుడు (క్రీ.పూ. 1907)',
                          subtitle: isEn ? '24th Tirthankara of Jainism • Ancient Timeline' : 'జైన మత 24వ తీర్థంకరులు • ప్రాచీన కాలక్రమం'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/6_mahavira.jpg" 
                          alt="Mahaveera 1907 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 7. Buddha */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/7_buddha.jpg',
                          title: isEn ? 'Gautama Buddha (1887 BCE)' : 'గౌతమ బుద్ధుడు (క్రీ.పూ. 1887)',
                          subtitle: isEn ? 'Enlightened Sage • Puranic Dynastic Dating' : 'తథాగతుడు • పౌరాణిక రాజవంశాల ఆధారిత కాలరేఖ'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/7_buddha.jpg" 
                          alt="Buddha 1887 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 8. Adi Shankara */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/8_adi_shankara.jpg',
                          title: isEn ? 'Adi Shankara (509 BCE)' : 'జగద్గురు ఆది శంకరాచార్యులు (క్రీ.పూ. 509)',
                          subtitle: isEn ? 'Advaita Vedanta Master • Traditional Matha Records' : 'అద్వైత సిద్ధాంత స్థాపకులు • చతురామ్నాయ పీఠ రికార్డులు'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/8_adi_shankara.jpg" 
                          alt="Adi Shankara 509 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>

                    {/* 9. Alexander */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/9_alexander.jpg',
                          title: isEn ? "Alexander's visit to India (325 BCE)" : 'అలెగ్జాండర్ రాక (క్రీ.పూ. 325)',
                          subtitle: isEn ? 'Greek invasion & synchronistic benchmark of Indian history' : 'గ్రీకు చక్రవర్తి దండయాత్ర & ప్రాచీన కాలక్రమ మైలురాయి'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl bg-amber-50/80 border-2 border-amber-400 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-105 group-hover:border-[#7B1113] transition-all">
                        <img 
                          src="./images/indian_history/timeline_extracted/9_alexander.jpg" 
                          alt="Alexander 325 BCE"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-0.5 h-3 bg-[#5D4037]/70 mt-1"></div>
                    </div>
                  </div>

                  {/* Middle Row: Dashed Timeline Axis with Tick Marks & Horizontal Arrow */}
                  <div className="relative py-2 flex items-center my-1">
                    <span className="text-[#5D4037] font-black text-sm select-none pr-1">◀</span>
                    <div className="flex-1 relative">
                      <div className="w-full border-t-2 border-dashed border-[#5D4037]/80"></div>
                      {/* 9 Centered Tick Dots */}
                      <div className="grid grid-cols-9 w-full absolute -top-1.5 left-0">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="flex justify-center items-center">
                            <span className="w-3 h-3 rounded-full bg-[#7B1113] border-2 border-[#FFE082] shadow-2xs"></span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[#5D4037] font-black text-sm select-none pl-1">▶</span>
                  </div>

                  {/* Bottom Row 1: Names and Dates */}
                  <div className="grid grid-cols-9 gap-2 text-center pt-1 text-[11px] leading-tight">
                    {/* 1. Rama */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Rama' : 'శ్రీరాముడు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">5114 BCE</span>
                    </div>

                    {/* 2. Vyasa */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Vyasa of Veda' : 'వేదవ్యాసుడు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] text-[10px] block">3141-3129 BCE</span>
                    </div>

                    {/* 3. Krishna */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Krishna' : 'శ్రీకృష్ణుడు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">3112 BCE</span>
                    </div>

                    {/* 4. Kaliyuga */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Kaliyuga' : 'కలియుగం'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">3102 BCE</span>
                    </div>

                    {/* 5. Mahabharata */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Mahabharata' : 'కురుక్షేత్రం'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">3067 BCE</span>
                    </div>

                    {/* 6. Mahavira */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Mahaveera' : 'మహావీరుడు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">1907 BCE</span>
                    </div>

                    {/* 7. Buddha */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Buddha' : 'బుద్ధుడు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">1887 BCE</span>
                    </div>

                    {/* 8. Adi Shankara */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Adi Shankara' : 'శంకరులు'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">509 BCE</span>
                    </div>

                    {/* 9. Alexander */}
                    <div className="space-y-0.5">
                      <span className="block font-bold text-[#7B1113] font-telugu-serif">{isEn ? 'Alexander' : 'అలెగ్జాండర్'}</span>
                      <span className="font-mono font-extrabold text-[#D84315] block">325 BCE</span>
                    </div>
                  </div>

                  {/* Bottom Row 2: Research Books (Extracted) & Attribution Logos */}
                  <div className="grid grid-cols-9 gap-2 pt-3 border-t border-amber-200/80 items-start text-center">
                    {/* Book 1: Rama */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/book_rama.jpg',
                          title: isEn ? 'Book: Historical Rama' : 'గ్రంథం: హిస్టారికల్ రామ',
                          subtitle: isEn ? 'By D.K. Hari & Dr. D.K. Hema Hari (Bharath Gyan)' : 'రచయితలు: డి.కె. హరి & డా. డి.కె. హేమ హరి (భరత్ జ్ఞాన్)'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-14 h-20 sm:w-16 sm:h-24 rounded-lg overflow-hidden border border-amber-300 shadow-2xs group-hover:scale-105 transition-transform bg-white p-0.5">
                        <img 
                          src="./images/indian_history/timeline_extracted/book_rama.jpg" 
                          alt="Historical Rama Book" 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-[#7B1113] mt-1 line-clamp-1">Historical Rama</span>
                    </div>

                    {/* Empty placeholder 2 */}
                    <div></div>

                    {/* Book 2: Krishna */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/book_krishna.jpg',
                          title: isEn ? 'Book: Historical Krishna' : 'గ్రంథం: హిస్టారికల్ కృష్ణ',
                          subtitle: isEn ? 'Footprints of Krishna • Bharath Gyan' : 'కృష్ణ పాదముద్రలు • భరత్ జ్ఞాన్'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-14 h-20 sm:w-16 sm:h-24 rounded-lg overflow-hidden border border-amber-300 shadow-2xs group-hover:scale-105 transition-transform bg-white p-0.5">
                        <img 
                          src="./images/indian_history/timeline_extracted/book_krishna.jpg" 
                          alt="Historical Krishna Book" 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-[#7B1113] mt-1 line-clamp-1">Historical Krishna</span>
                    </div>

                    {/* Empty placeholder 4 */}
                    <div></div>

                    {/* Book 3: Eclipse / Mahabharata */}
                    <div 
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: './images/indian_history/timeline_extracted/book_eclipse.jpg',
                          title: isEn ? 'Book: Will History Repeat Itself? (Triple Eclipse)' : 'గ్రంథం: విల్ హిస్టరీ రిపీట్ ఇట్‌సెల్ఫ్? (గ్రహణ కూటమి)',
                          subtitle: isEn ? 'Astronomical Dating of Kurukshetra War' : 'కురుక్షేత్ర మహాభారత యుద్ధ ఖగోళ ఆధారాలు'
                        });
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-14 h-20 sm:w-16 sm:h-24 rounded-lg overflow-hidden border border-amber-300 shadow-2xs group-hover:scale-105 transition-transform bg-white p-0.5">
                        <img 
                          src="./images/indian_history/timeline_extracted/book_eclipse.jpg" 
                          alt="Triple Eclipse Book" 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-[#7B1113] mt-1 line-clamp-1">Triple Eclipse</span>
                    </div>

                    {/* Empty placeholders 6, 7 */}
                    <div></div>
                    <div></div>

                    {/* Logos: Art of Living & Bharath Gyan spanning cols 8-9 */}
                    <div className="col-span-2 flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2 pr-2">
                      <div className="h-8 rounded bg-white/80 p-0.5 border border-amber-200">
                        <img 
                          src="./images/indian_history/timeline_extracted/logo_art_of_living.jpg" 
                          alt="The Art of Living" 
                          className="h-full w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-9 rounded bg-white/80 p-0.5 border border-amber-200">
                        <img 
                          src="./images/indian_history/timeline_extracted/logo_bharath_gyan.jpg" 
                          alt="Bharath Gyan" 
                          className="h-full w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DCC4] flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Ancient India: Hierarchical Chronological Tree' : 'ప్రాచీన భారతదేశ కాలానుక్రమణిక ప్రవాహ వృక్షము'}
              </h3>
              <p className="text-xs text-[#5D4037] mt-0.5">
                {isEn 
                  ? 'Interactive digital reconstruction of the master parchment map flow (Image 1)'
                  : 'మొదటి సమాచార పత్రంలో గల పూర్తి ప్రవాహ చిత్ర డిజిటల్ ప్రతిరూపము'}
              </p>
            </div>
            <button
              onClick={() => {
                setLightboxImage({
                  src: './images/indian_history/ancient_india_flowchart.jpg',
                  title: isEn ? 'Original Master Flowchart' : 'మూల కాలానుక్రమణిక పటం',
                  subtitle: isEn ? 'As preserved in the ancient parchment map infographic' : 'పురాతన పత్ర ఆధారిత మూల ఇన్ఫోగ్రాఫిక్ చార్ట్'
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF9E6] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? 'Open Original Manuscript Image' : 'అసలు చిత్రం తెరవండి'}</span>
            </button>
          </div>

          {/* Interactive Flow Tree Diagram */}
          <div className="bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] p-6 rounded-2xl border-2 border-[#D4AF37] flex flex-col items-center space-y-6 shadow-sm overflow-x-auto">
            
            {/* LEVEL 1: Pre-History */}
            <div className="flex flex-col items-center w-full">
              {/* Pre-History Tile */}
              <div className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] shadow-md font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                <span>🪨</span>
                <span>{isEn ? 'Pre-History' : 'చరిత్రపూర్వ యుగము (Pre-History)'}</span>
              </div>

              {/* Downward Tree Connector to Stone Age & Chalcolithic Age Sub-cards */}
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />

              {/* Branching down to Stone Age & Chalcolithic Age (Tiles shown in user source picture) */}
              <div className="w-64 sm:w-80 h-0.5 bg-[#D4AF37]"></div>

              <div className="flex justify-between w-64 sm:w-80 pt-0">
                <div className="w-0.5 h-5 bg-[#D4AF37]"></div>
                <div className="w-0.5 h-5 bg-[#D4AF37]"></div>
              </div>

              <div className="flex gap-4 sm:gap-12 items-start">
                {/* Stone Age Sub-card (Clickable -> Early Human Migration Map Pop-up) */}
                <div 
                  onClick={() => setIsStoneAgeModalOpen(true)}
                  className="w-52 sm:w-64 p-3.5 rounded-xl bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE]/80 to-[#FEFCE8] border-2 border-[#0F2C59] hover:border-[#1D4ED8] shadow-md hover:shadow-xl text-center space-y-2 cursor-pointer ring-2 ring-[#0284C7] hover:ring-4 hover:ring-[#38BDF8] hover:scale-[1.03] transition-all group"
                  title={isEn ? 'Click to open Early Human Migration World Map & Stone Age details' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము & రాతి యుగ వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="px-2 py-0.5 rounded text-[9.5px] font-extrabold bg-[#0F2C59] text-[#FFE082] inline-block shadow-2xs">
                      {isEn ? 'PRE-HISTORY' : 'ఆదిమ యుగం'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#0369A1] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#0284C7] transition-colors">
                      <Sparkles className="w-2.5 h-2.5 text-[#FDE047] animate-pulse" />
                      <span>{isEn ? 'Pop Up Map' : 'సచిత్ర పటము'}</span>
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#0F2C59] via-[#1E3A8A] to-[#0F2C59] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-1.5 shadow-2xs border border-[#38BDF8]/50">
                    <span>🪨 {isEn ? 'Stone Age' : 'రాతి యుగము'}</span>
                    <Maximize2 className="w-3 h-3 text-[#FDE047] shrink-0" />
                  </div>

                  <div className="text-[11px] text-[#0F2C59] font-semibold space-y-1 text-left pl-2">
                    <div className="flex items-center gap-1">
                      <span className="text-[#D84315]">★</span>
                      <span>{isEn ? 'Paleolithic' : 'ప్రాచీన రాతియుగం'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#D84315]">★</span>
                      <span>{isEn ? 'Mesolithic' : 'మధ్య రాతియుగం'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#D84315]">★</span>
                      <span>{isEn ? 'Neolithic' : 'నవీన రాతియుగం'}</span>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-[#7DD3FC] flex items-center justify-between gap-1.5 bg-[#FFFFFF]/95 px-2 py-1.5 rounded-lg border border-[#38BDF8] shadow-2xs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <img 
                        src="./images/indian_history/early_human_migration_world_crop.jpg" 
                        alt="Early Human Migration Map Preview" 
                        className="w-7 h-7 rounded object-cover border border-[#0F2C59] shrink-0"
                      />
                      <span className="text-[10px] font-extrabold text-[#0F2C59] truncate leading-tight">
                        {isEn ? '🗺️ Human Migration Map' : '🗺️ ఆదిమ మానవ వలసల పటం'}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#0F2C59] group-hover:bg-[#1D4ED8] text-[#FEF08A] text-[10px] font-bold flex items-center gap-0.5 shrink-0 transition-colors">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* Chalcolithic Age Sub-card */}
                <div className="w-44 sm:w-56 p-3 rounded-xl bg-[#FFFFFF] border-2 border-[#BF360C] shadow-xs text-center space-y-1.5">
                  <span className="font-bold text-xs sm:text-sm text-[#BF360C] block border-b border-[#E8DCC4] pb-1">
                    {isEn ? 'Chalcolithic Age' : 'తామ్రశిలా యుగము'}
                  </span>
                  <p className="text-[10px] text-[#5D4037] italic">
                    {isEn ? '(Copper-Stone Age)' : '(రాగి-రాతి సాంకేతిక యుగం)'}
                  </p>
                  <p className="text-[11px] text-[#2C1810] leading-snug">
                    {isEn ? 'Early copper metallurgy & painted pottery' : 'తొలి తామ్ర పనిముట్లు & చిత్రిత మృణ్మయ పాత్రలు'}
                  </p>
                </div>
              </div>

              {/* Downward Tree Connector to Chronological Timeline Tiles */}
              <div className="w-0.5 h-6 bg-[#D4AF37] mt-4"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />

              {/* ============================================================ */}
              {/* CHRONOLOGICAL TIMELINE TILES IN TREE (Dr. P.V. Vartak Epochs) */}
              {/* ============================================================ */}
              <div className="w-full max-w-4xl my-2">
                <VedicItihasaChronologySection
                  onOpenMasterChart={(src, title, subtitle) =>
                    setLightboxImage({ src, title, subtitle: subtitle || '' })
                  }
                  defaultViewMode="tree"
                />
              </div>
            </div>

            {/* Convergence Arrow to Indus Valley */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 2: Indus Valley Civilization */}
            <div className="px-6 py-3 rounded-xl bg-[#FFFFFF] border-2 border-[#A1887F] shadow-sm text-center max-w-md w-full">
              <span className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider block">
                {isEn ? '3300 – 1300 BCE' : 'క్రీ.పూ. 3300 – 1300'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#4E342E] font-telugu-serif mt-0.5">
                {isEn ? 'Indus Valley Civilization (IVC)' : 'సింధు లోయ నాగరికత (హరప్పా సంస్కృతి)'}
              </h4>
              <p className="text-[11px] text-[#5D4037] mt-1">
                {isEn 
                  ? 'Grid towns • Covered drainage • Bronze metallurgy • Maritime dock at Lothal'
                  : 'గ్రిడ్ పట్టణ ప్రణాళిక • భూగర్భ మురుగునీరు • కంచు లోహశాస్త్రం • లోథాల్ ఓడరేవు'}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 3: Vedic Period */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/30 to-[#FFF8E1] border-2 border-[#D4AF37] shadow-sm text-center max-w-md w-full">
              <span className="text-xs font-bold text-[#D84315] uppercase tracking-wider block">
                {isEn ? '1500 – 500 BCE' : 'క్రీ.పూ. 1500 – 500'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif mt-0.5">
                {isEn ? 'Vedic Period' : 'వేద కాలము'}
              </h4>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs font-semibold text-[#7B1113]">
                <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D4AF37]">
                  {isEn ? 'Early Vedic (1500–1000 BCE)' : 'తొలి వేద కాలం'}
                </span>
                <span>➔</span>
                <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D4AF37]">
                  {isEn ? 'Later Vedic (1000–600 BCE)' : 'మలి వేద కాలం'}
                </span>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 4: Age of 16 Mahajanapadas - Interactive Clickable Box with Pop-up Modal */}
            <div 
              onClick={() => setIsMahajanapadaModalOpen(true)}
              className="p-5 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] border-2 border-[#C2185B] hover:border-[#880E4F] shadow-md hover:shadow-2xl transition-all text-center max-w-lg w-full space-y-2.5 cursor-pointer group hover:scale-[1.02] ring-2 ring-[#D4AF37] hover:ring-4 hover:ring-[#FFD54F]"
              title={isEn ? 'Click to pop up 16 Mahajanapadas Era complete details, maps & pictures' : '16 మహాజనపదాల యుగం సంపూర్ణ వివరాలు & పటాల పాప్-అప్ కొరకు క్లిక్ చేయండి'}
            >
              {/* Top Subtitle with Date and Pop-up Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-extrabold text-[#C2185B] uppercase tracking-wider block">
                  {isEn ? '600 – 322 BCE' : 'క్రీ.పూ. 600 – 322'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#880E4F] text-[#FFE082] flex items-center gap-1.5 shadow-sm group-hover:bg-[#AD1457] transition-colors">
                  <Sparkles className="w-3 h-3 text-[#FFD54F] animate-pulse" />
                  <span>{isEn ? 'Click to Pop Up Details & Pictures' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                </span>
              </div>

              {/* Main Pill Title */}
              <div className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#880E4F] via-[#AD1457] to-[#880E4F] text-[#FFE082] font-extrabold text-base sm:text-lg tracking-wider inline-block shadow-md group-hover:from-[#AD1457] group-hover:to-[#C2185B] transition-all border border-[#D4AF37]/40 font-telugu-serif">
                {isEn ? 'Age of 16 Mahajanapadas' : '16 మహాజనపదాల యుగము'}
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F5] border border-[#F48FB1] text-xs font-bold text-[#880E4F] shadow-2xs">
                  <span>☸️</span>
                  <span>{isEn ? 'Buddhism • Jainism • Urbanization • Punch-Marked Coins' : 'బౌద్ధ ధర్మము • జైన ధర్మము • పట్టణీకరణ • పంచ్-మార్క్ నాణేలు'}</span>
                </div>
              </div>

              {/* Map Preview & Interactive Click Callout */}
              <div className="mt-2 pt-2.5 border-t border-[#D4AF37]/50 flex items-center justify-between gap-3 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2.5 rounded-xl border border-[#D4AF37]/50 transition-all shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-lg bg-[#FCE4EC] border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-xs group-hover:scale-108 transition-transform flex items-center justify-center">
                    <img 
                      src="./images/indian_history/mahajanapadas_map.jpg" 
                      alt="16 Mahajanapadas Map Preview" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-extrabold text-[#880E4F] flex items-center gap-1 group-hover:text-[#C2185B]">
                      <span>🗺️</span>
                      <span>{isEn ? '16 Mahajanapadas Complete Details & Maps' : '16 మహాజనపదాల సమగ్ర వివరాలు & పటాలు'}</span>
                    </span>
                    <span className="text-[10px] text-[#AD1457] font-semibold block mt-0.5">
                      {isEn ? '16 Kingdoms • Capitals • Republics • Economy • Rulers' : '16 రాజ్యాలు • రాజధానులు • గణతంత్రాలు • ఆర్థిక వ్యవస్థ • పాలకులు'}
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] group-hover:bg-[#FFE082] text-[#880E4F] border border-[#D4AF37] text-xs font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                  <span>🔍</span>
                  <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 5: MAGADHA and its 3 Dynasties */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] border-2 border-[#FF7043] shadow-md max-w-md w-full text-center space-y-3">
              <div className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#BF360C] to-[#E65100] text-white font-extrabold text-sm sm:text-base tracking-wider inline-block">
                {isEn ? 'MAGADHA EMPIRE' : 'మగధ సామ్రాజ్యము'}
              </div>

              <div className="flex flex-col items-center space-y-1.5 pt-1">
                <div className="px-4 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#FFAB91] text-xs font-bold text-[#BF360C] w-48 shadow-2xs">
                  {isEn ? '1. Haryanka Dynasty' : '1. హర్యాంక వంశము'}
                </div>
                <div className="w-0.5 h-3 bg-[#FF7043]"></div>
                <div className="px-4 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#FFAB91] text-xs font-bold text-[#BF360C] w-48 shadow-2xs">
                  {isEn ? '2. Shishunaga Dynasty' : '2. శిశునాగ వంశము'}
                </div>
                <div className="w-0.5 h-3 bg-[#FF7043]"></div>
                <div className="px-4 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#FFAB91] text-xs font-bold text-[#BF360C] w-48 shadow-2xs">
                  {isEn ? '3. Nanda Dynasty' : '3. నంద వంశము'}
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* Box displaying HISTORY before Mauryan Empire */}
            <div className="px-7 py-2.5 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] shadow-lg font-bold text-sm tracking-wide flex items-center gap-2.5 ring-2 ring-[#D4AF37]/40">
              <span className="text-xl">🏛️</span>
              <span className="font-mono uppercase font-black text-white tracking-widest">HISTORY</span>
              <span className="text-[#FFE082]">•</span>
              <span className="font-telugu-serif">{isEn ? 'Recorded History Era' : 'చారిత్రక యుగము (HISTORY)'}</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-[#D4AF37]"></div>
              <ArrowDown className="w-4 h-4 text-[#7B1113]" />
            </div>

            {/* LEVEL 6: MAURYA & Post-Mauryan */}
            <div 
              onClick={() => setIsMauryaModalOpen(true)}
              className="p-5 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] border-2 border-[#FFA726] hover:border-[#D84315] shadow-md hover:shadow-2xl max-w-lg w-full text-center space-y-2.5 cursor-pointer transition-all hover:scale-[1.02] group ring-2 ring-[#D4AF37] hover:ring-4 hover:ring-[#FFD54F]"
              title={isEn ? 'Click to pop up Mauryan Dynasty illustrated details & pictures' : 'మౌర్య సామ్రాజ్య సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
            >
              {/* Top Subtitle with Date and Pop-up Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-extrabold text-[#BF360C] tracking-wider block">
                  {isEn ? '321 – 185 BCE' : 'క్రీ.పూ. 321 – 185'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#BF360C] text-[#FFE082] flex items-center gap-1.5 shadow-sm group-hover:bg-[#D84315] transition-colors">
                  <Sparkles className="w-3 h-3 text-[#FFD54F] animate-pulse" />
                  <span>{isEn ? 'Click to Pop Up Details & Pictures' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                </span>
              </div>

              <div className="px-5 py-1.5 rounded-xl bg-gradient-to-r from-[#E65100] to-[#BF360C] text-white font-extrabold text-sm sm:text-base tracking-wider inline-block group-hover:scale-105 transition-transform shadow-sm border border-[#FFD54F]/40">
                {isEn ? 'MAURYA EMPIRE (321–185 BCE)' : 'మౌర్య సామ్రాజ్యము (క్రీ.పూ. 321–185)'}
              </div>
              <p className="text-xs text-[#5D4037] font-semibold">
                {isEn 
                  ? 'Chandragupta Maurya • Acharya Chanakya • Emperor Ashoka the Great'
                  : 'చంద్రగుప్త మౌర్యుడు • ఆచార్య చాణక్యుడు • అశోక చక్రవర్తి (ధర్మ విజయము)'}
              </p>

              {/* Preview & Interactive Click Callout */}
              <div className="mt-1 pt-2 border-t border-[#D4AF37]/50 flex items-center justify-between gap-3 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-xl border border-[#D4AF37]/40 transition-all shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF8E1] border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-xs group-hover:scale-108 transition-transform flex items-center justify-center">
                    <img 
                      src="./images/indian_history/maurya_dynasty/ashokan_pillar.jpg" 
                      alt="Maurya Empire Preview" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-extrabold text-[#BF360C] flex items-center gap-1 group-hover:text-[#D84315]">
                      <span>🦁</span>
                      <span>{isEn ? 'Mauryan Dynasty Illustrated Notes & Map' : 'మౌర్య సామ్రాజ్య సచిత్ర వివరాలు & పటము'}</span>
                    </span>
                    <span className="text-[10px] text-[#5D4037] block font-medium">
                      {isEn ? 'Rulers • Arthashastra • Ashoka Dhamma • Sanchi & Pillars' : 'పాలకులు • అర్థశాస్త్రం • అశోకుని ధమ్మం • సాంచి స్తూపం & స్తంభాలు'}
                    </span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] group-hover:bg-[#FFE082] text-[#BF360C] border border-[#D4AF37] text-xs font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                  <span>🔍</span>
                  <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                </div>
              </div>

              <div className="w-0.5 h-2.5 bg-[#FFA726] mx-auto"></div>
              <div className="px-4 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#FFA726] text-xs font-bold text-[#E65100] inline-block shadow-2xs">
                {isEn ? 'Post-Mauryan Period (Shungas, Satavahanas, Kushans)' : 'మౌర్యోనంతర యుగము (శుంగులు, శాతవాహనులు, కుషాణులు)'}
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 7: GUPTA EMPIRE (Golden Age) - Clickable Pop-up Trigger */}
            <div 
              onClick={() => setIsGuptaModalOpen(true)}
              className="p-5 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] border-2 border-[#D4AF37] hover:border-[#7B1113] shadow-md hover:shadow-2xl transition-all max-w-lg w-full text-center space-y-2.5 cursor-pointer group hover:scale-[1.02] ring-2 ring-[#D4AF37] hover:ring-4 hover:ring-[#FFD54F]"
              title={isEn ? 'Click to pop up Gupta Empire illustrated details & pictures' : 'గుప్త సామ్రాజ్య స్వర్ణయుగ సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
            >
              {/* Top Subtitle with Date and Pop-up Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-extrabold text-[#7B1113] tracking-wider block">
                  {isEn ? '320 – 550 CE' : 'క్రీ.శ. 320 – 550'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7B1113] text-[#FFE082] flex items-center gap-1.5 shadow-sm group-hover:bg-[#991B1B] transition-colors">
                  <Sparkles className="w-3 h-3 text-[#FFD54F] animate-pulse" />
                  <span>{isEn ? 'Click to Pop Up Details & Pictures' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                </span>
              </div>

              {/* Main Pill Title matching Image 2 */}
              <div className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#5B0B14] via-[#7B1113] to-[#5B0B14] text-[#FFE082] font-extrabold text-base sm:text-lg tracking-wider inline-block shadow-md group-hover:from-[#7B1113] group-hover:to-[#991B1B] transition-all border border-[#D4AF37]/40">
                {isEn ? 'GUPTA EMPIRE (Golden Age of India)' : 'గుప్త సామ్రాజ్యము (భారత స్వర్ణయుగము)'}
              </div>

              {/* Tagline matching Image 2 */}
              <p className="text-xs sm:text-sm text-[#5D4037] font-semibold leading-relaxed px-2">
                {isEn 
                  ? 'Aryabhata • Kalidasa • Zero & Pi • Classical Temples • Ajanta Paintings'
                  : 'ఆర్యభట్టు • మహాకవి కాళిదాసు • సున్నా ఆవిష్కరణ • శాస్త్రీయ దేవాలయాలు • అజంతా చిత్రకళ'}
              </p>

              {/* Manuscript Preview & Interactive Click Callout */}
              <div className="mt-2 pt-2.5 border-t border-[#D4AF37]/50 flex items-center justify-between gap-3 bg-[#FFFFFF]/90 group-hover:bg-[#FFFFFF] p-2.5 rounded-xl border border-[#D4AF37]/40 transition-all shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF7F0] border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-xs group-hover:scale-108 transition-transform flex items-center justify-center">
                    <img 
                      src="./images/indian_history/gupta_empire_manuscript.jpg" 
                      alt="Gupta Empire Illustrated Manuscript" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-extrabold text-[#7B1113] flex items-center gap-1 group-hover:text-[#D84315]">
                      <span>🖼️</span>
                      <span>{isEn ? 'Pop-up Illustrated Manuscript & Pictures' : 'సచిత్ర నోట్స్ & చిత్రాల పాప్-అప్'}</span>
                    </span>
                    <span className="text-[10px] text-[#5D4037] block font-medium">
                      {isEn ? 'Rulers • Bhuktis • Dinaras • Nalanda • Navaratnas' : 'చక్రవర్తులు • భుక్తులు • దీనారాలు • నలందా • నవరత్నాలు'}
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] group-hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                  <span>🔍</span>
                  <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                </div>
              </div>
            </div>

            {/* Branching Down to North (Vardhan) & South (Pallava / Chalukya) */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <div className="w-64 sm:w-88 h-0.5 bg-[#D4AF37]"></div>

              <div className="flex justify-between w-64 sm:w-88 pt-0">
                <div className="w-0.5 h-5 bg-[#D4AF37]"></div>
                <div className="w-0.5 h-5 bg-[#D4AF37]"></div>
              </div>

              <div className="flex gap-4 sm:gap-10 items-start">
                
                {/* NORTH: Vardhan (Harsha) */}
                <div className="w-44 sm:w-56 p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#7B1113] shadow-xs text-center space-y-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#7B1113] text-[#FFE082] inline-block">
                    {isEn ? 'NORTH INDIA' : 'ఉత్తర భారతదేశము'}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                    {isEn ? 'Vardhan Dynasty' : 'వర్ధన వంశము'}
                  </h5>
                  <p className="text-[11px] text-[#5D4037] leading-snug">
                    {isEn ? 'Harsha Empire (606–647 CE) at Kannauj; patron of Nalanda' : 'హర్ష సామ్రాజ్యం (క్రీ.శ. 606–647); కనౌజ్ పాలన, నలందా పోషణ'}
                  </p>
                </div>

                {/* SOUTH: Pallava / Chalukya (Distinct Royal Violet / Amethyst Theme) */}
                <div 
                  onClick={() => {
                    setSelectedSouthTab('pallavas');
                    setIsSouthDynastiesModalOpen(true);
                  }}
                  className="w-48 sm:w-64 p-3.5 rounded-xl bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE]/85 to-[#FAF5FF] border-2 border-[#5B21B6] hover:border-[#7C3AED] shadow-md hover:shadow-xl text-center space-y-2 cursor-pointer ring-2 ring-[#8B5CF6] hover:ring-4 hover:ring-[#A78BFA] hover:scale-103 transition-all group relative"
                  title={isEn ? 'Click to pop up Pallava & Chola Dynasties illustrated details & pictures' : 'పల్లవ మరియు చోళ సామ్రాజ్యాల సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#6D28D9] text-white inline-block shadow-2xs">
                      {isEn ? 'SOUTH INDIA' : 'దక్షిణ భారతదేశము'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#4C1D95] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#6D28D9] transition-colors">
                      <Sparkles className="w-2.5 h-2.5 text-[#FDE047] animate-pulse" />
                      <span>{isEn ? 'Pop Up' : 'సచిత్ర వివరాలు'}</span>
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#3B0764] via-[#5B21B6] to-[#4C1D95] text-[#FEF08A] font-bold text-xs sm:text-sm font-telugu-serif shadow-2xs border border-[#C4B5FD]/60">
                    {isEn ? 'Pallava / Chalukya' : 'పల్లవ / బాదామి చాళుక్యులు'}
                  </div>
                  <p className="text-[11px] text-[#3B0764] font-medium leading-snug">
                    {isEn ? 'Rock-cut rathas at Mamallapuram; Pulakeshin II at Badami' : 'మహాబలిపురం ఏకశిలా రథాలు; బాదామిలో పులకేశి II ఆలయ వైభవం'}
                  </p>
                  <div className="pt-1.5 border-t border-[#C4B5FD] flex items-center justify-between gap-1 bg-[#FFFFFF]/95 px-2.5 py-1 rounded-lg border border-[#A78BFA]">
                    <span className="text-[10px] font-extrabold text-[#5B21B6]">
                      {isEn ? '🛕 Pallavas & Cholas' : '🛕 పల్లవులు & చోళులు'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#5B21B6] group-hover:bg-[#7C3AED] text-[#FEF08A] text-[10px] font-bold flex items-center gap-1 transition-colors">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Continuation Arrow Down into Medieval India */}
            <div className="flex flex-col items-center pt-2">
              <div className="w-64 sm:w-88 h-0.5 bg-[#D4AF37]"></div>
              <div className="w-0.5 h-6 bg-[#D4AF37]"></div>
              <ArrowDown className="w-5 h-5 text-[#7B1113]" />
            </div>

            {/* LEVEL 8: THE TIMELINE OF MEDIEVAL INDIA (6TH – 16TH CENTURY) */}
            <div className="w-full max-w-4xl p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#D4AF37] shadow-md space-y-5 text-center">
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold uppercase tracking-wider">
                    {isEn ? 'Medieval Indian Era' : 'మధ్యయుగ భారతదేశ చరిత్ర కాలక్రమ ప్రవాహము'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D84315] text-white text-[10px] font-bold">
                    {isEn ? '6th – 16th Century CE' : 'క్రీ.శ. 6వ – 16వ శతాబ్దము'}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold font-telugu-serif text-[#7B1113]">
                  {isEn ? 'The Timeline of Medieval India (6th – 16th Century)' : 'మధ్యయుగ భారతదేశ చారిత్రక పరిణామ క్రమము (6వ – 16వ శతాబ్దం)'}
                </h4>

                <p className="text-xs text-[#5D4037] max-w-2xl mx-auto leading-relaxed">
                  {isEn 
                    ? 'From the Fall of the Gupta Empire through the Chola Maritime Zenith, Invasions of Ghazni & Ghori, the Delhi Sultanate, to the Vijayanagara Empire and First Battle of Panipat.'
                    : 'గుప్త సామ్రాజ్య పతనం, అరబ్బులు & గజనీ దండయాత్రల నుండి చోళ నౌకాదళ వైభవం, ఢిల్లీ సల్తనత్, విజయనగర సామ్రాజ్యం మరియు మొదటి పానిపట్ యుద్ధం వరకు కాలక్రమ ప్రవాహం.'}
                </p>

                {/* Lightbox Trigger for Medieval Timeline Image */}
                <div className="pt-1">
                  <button
                    onClick={() => {
                      setLightboxImage({
                        src: './images/indian_history/medieval_india_timeline.jpg',
                        title: isEn ? 'The Timeline of Medieval India (6th – 16th Century)' : 'మధ్యయుగ భారతదేశ చరిత్ర కాలక్రమ పట్టిక (6వ – 16వ శతాబ్దం)',
                        subtitle: isEn 
                          ? 'From Fall of Guptas to Battle of Talikota (6th - 16th Century)' 
                          : 'గుప్తుల పతనం నుండి తళ్ళికోట యుద్ధం వరకు (6వ - 16వ శతాబ్దం)'
                      });
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#7B1113] hover:bg-[#4A0012] text-[#FFE082] inline-flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                    <span>{isEn ? 'View Original Medieval Chart' : 'మధ్యయుగ మూల చార్ట్ తెరవండి'}</span>
                  </button>
                </div>
              </div>

              {/* The Alternating Central Timeline (Matching Image 1) */}
              <div className="relative pt-4 pb-2">
                {/* Central Spine Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#7B1113] via-[#D84315] to-[#D4AF37] hidden md:block" />

                <div className="space-y-6 md:space-y-4">
                  {MEDIEVAL_INDIA_TIMELINE.map((item) => {
                    const isLeft = item.side === 'left';
                    const isChola = item.order === 3;
                    const isVijayanagara = item.order === 7;
                    const isClickable = isChola || isVijayanagara;

                    return (
                      <div 
                        key={item.order}
                        className={`relative flex flex-col md:flex-row items-center ${
                          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                        } gap-2 md:gap-6`}
                      >
                        {/* Event Card */}
                        <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <div 
                            onClick={
                              isVijayanagara 
                                ? () => setIsVijayanagaraModalOpen(true) 
                                : isChola 
                                ? () => { setSelectedSouthTab('cholas'); setIsSouthDynastiesModalOpen(true); } 
                                : undefined
                            }
                            className={`p-4 rounded-xl border-2 transition-all group text-left ${
                              isChola
                                ? 'cursor-pointer border-[#0F766E] hover:border-[#0D9488] ring-2 ring-[#14B8A6] hover:ring-4 hover:ring-[#2DD4BF] bg-gradient-to-br from-[#F0FDFA] via-[#CCFBF1]/80 to-[#ECFEFF] shadow-md hover:shadow-xl hover:scale-[1.03] space-y-2'
                                : isVijayanagara
                                ? 'cursor-pointer border-[#B45309] hover:border-[#D97706] ring-2 ring-[#F59E0B] hover:ring-4 hover:ring-[#FBBF24] bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7]/85 to-[#FFF7ED] shadow-md hover:shadow-xl hover:scale-[1.03] space-y-2' 
                                : 'bg-[#FFFFFF] shadow-xs hover:shadow-md hover:scale-101 space-y-1.5'
                            }`}
                            style={isClickable ? undefined : { borderColor: item.borderColor }}
                            title={
                              isVijayanagara 
                                ? (isEn ? 'Click to pop up Vijayanagara Empire illustrated details & pictures' : 'విజయనగర సామ్రాజ్య సచిత్ర వివరాల కొరకు క్లిక్ చేయండి') 
                                : isChola 
                                ? (isEn ? 'Click to pop up Chola Dynasty illustrated details & pictures' : 'చోళ సామ్రాజ్య సచిత్ర వివరాల కొరకు క్లిక్ చేయండి') 
                                : undefined
                            }
                          >
                            <div className="flex items-center justify-between gap-1 flex-wrap">
                              <span 
                                className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                                style={{ backgroundColor: item.color }}
                              >
                                {isEn ? item.yearEn : item.yearTe}
                              </span>
                              {isClickable ? (
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-xs transition-colors border ${
                                  isChola
                                    ? 'bg-[#115E59] text-[#FEF08A] group-hover:bg-[#0F766E] border-[#5EEAD4]/50'
                                    : 'bg-[#92400E] text-[#FEF08A] group-hover:bg-[#B45309] border-[#FDE68A]/60'
                                }`}>
                                  <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                                  <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                                </span>
                              ) : (
                                <span className="text-base">{item.icon}</span>
                              )}
                            </div>

                            {isClickable ? (
                              <div className={`px-3.5 py-1.5 rounded-lg text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border transition-all ${
                                isChola
                                  ? 'bg-gradient-to-r from-[#134E4A] via-[#0F766E] to-[#115E59] border-[#5EEAD4]/50 group-hover:from-[#0F766E] group-hover:to-[#0D9488]'
                                  : 'bg-gradient-to-r from-[#78350F] via-[#B45309] to-[#92400E] border-[#FCD34D]/60 group-hover:from-[#92400E] group-hover:to-[#D97706]'
                              }`}>
                                <span className="flex items-center gap-1.5">
                                  <span>{item.icon}</span>
                                  <span>{isEn ? item.titleEn : item.titleTe}</span>
                                </span>
                                <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                              </div>
                            ) : (
                              <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif group-hover:text-[#D84315] transition-colors flex items-center justify-between">
                                <span>{isEn ? item.titleEn : item.titleTe}</span>
                              </h5>
                            )}

                            <p className={`text-[11px] leading-relaxed ${isClickable ? 'text-[#1F2937] font-medium' : 'text-[#5D4037]'}`}>
                              <strong className={`font-semibold ${isChola ? 'text-[#0F766E]' : isVijayanagara ? 'text-[#92400E]' : 'text-[#7B1113]'}`}>{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                              {isEn ? item.detailEn : item.detailTe}
                            </p>

                            {/* Interactive Preview & Open Callout Bar for Clickable Cards */}
                            {isClickable && (
                              <div className={`pt-2 border-t flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border shadow-2xs transition-colors ${
                                isChola ? 'border-[#2DD4BF]' : 'border-[#F59E0B]'
                              }`}>
                                <div className="flex items-center gap-2">
                                  <div className={`w-9 h-9 rounded-md bg-[#2C1810] border overflow-hidden shrink-0 flex items-center justify-center ${
                                    isChola ? 'border-[#0F766E]' : 'border-[#B45309]'
                                  }`}>
                                    <img 
                                      src={isVijayanagara ? VIJAYANAGARA_EMPIRE_DETAILS.bannerImage : './images/indian_history/south_dynasties/chola_temple.jpg'} 
                                      alt={isEn ? item.titleEn : item.titleTe}
                                      className="w-full h-full object-cover"
                                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = './images/indian_history/medieval_india_timeline.jpg'; }}
                                    />
                                  </div>
                                  <div className="text-left">
                                    <span className={`text-[11px] font-extrabold block leading-tight ${
                                      isChola ? 'text-[#115E59] group-hover:text-[#0F766E]' : 'text-[#92400E] group-hover:text-[#B45309]'
                                    }`}>
                                      {isVijayanagara
                                        ? (isEn ? '🖼️ Hampi • Krishnadeva Raya • Maps' : '🖼️ హంపి • శ్రీకృష్ణదేవరాయలు • పటాలు')
                                        : (isEn ? '🖼️ Raja Raja Chola • Navy • Temples' : '🖼️ రాజరాజ చోళుడు • నౌకాదళం • ఆలయాలు')}
                                    </span>
                                    <span className="text-[9.5px] text-[#5D4037] font-semibold block">
                                      {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                                    </span>
                                  </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-md text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs ${
                                  isChola ? 'bg-[#0F766E] group-hover:bg-[#0D9488]' : 'bg-[#B45309] group-hover:bg-[#D97706]'
                                }`}>
                                  <span>🔍</span>
                                  <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Central Spine Connector Node */}
                        <div className={`relative z-10 w-7 h-7 rounded-full font-bold text-[10px] flex items-center justify-center shadow-xs shrink-0 hidden md:flex ${
                          isChola
                            ? 'bg-[#0F766E] text-[#FEF08A] border-2 border-[#5EEAD4] ring-2 ring-[#14B8A6]'
                            : isVijayanagara
                            ? 'bg-[#B45309] text-[#FEF08A] border-2 border-[#FDE68A] ring-2 ring-[#F59E0B]'
                            : 'bg-[#FFFFFF] border-2 border-[#7B1113] text-[#7B1113]'
                        }`}>
                          <ArrowDown className="w-3.5 h-3.5" />
                        </div>

                        {/* Spacer for other side */}
                        <div className="w-full md:w-[calc(50%-28px)] hidden md:block" />
                      </div>
                    );
                  })}
                </div>

                {/* Final Arrow pointing down at end of spine */}
                <div className="flex justify-center pt-4 hidden md:flex">
                  <div className="p-1 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#7B1113]">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>

            {/* Continuation Branch Down into Parallel Boxes: Mughal Empire (1526–1857) & Arrival of Europeans in India (1498–1763) */}
            <div className="flex flex-col items-center pt-2 w-full">
              <div className="w-0.5 h-6 bg-[#7B1113]"></div>
              <div className="w-64 sm:w-lg md:w-2xl h-0.5 bg-[#7B1113] hidden md:block"></div>
              <div className="justify-between w-64 sm:w-lg md:w-2xl hidden md:flex">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-[#7B1113]"></div>
                  <ArrowDown className="w-5 h-5 text-[#7B1113]" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-[#7B1113]"></div>
                  <ArrowDown className="w-5 h-5 text-[#7B1113]" />
                </div>
              </div>
              <div className="md:hidden flex flex-col items-center">
                <ArrowDown className="w-5 h-5 text-[#7B1113]" />
              </div>
            </div>

            {/* LEVEL 9: PARALLEL BOXES — (1) THE MUGHAL EMPIRE (1526–1857) & (2) EUROPEANS ARRIVE IN INDIA (1498–1763) + CONSOLIDATION OF BRITISH POWER (1757–1856) BELOW IT */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start pt-1">
              
              {/* PARALLEL BOX 1 (LEFT — ROYAL EMERALD & JADE-GOLD THEME): THE MUGHAL EMPIRE – COMPLETE TIMELINE (1526 – 1857 CE) */}
              <div 
                onClick={() => setIsMughalModalOpen(true)}
                className="w-full p-4 rounded-xl border-2 border-[#065F46] hover:border-[#047857] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#ECFDF5] via-[#D1FAE5]/80 to-[#F0FDF4] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#10B981] hover:ring-4 hover:ring-[#34D399] flex flex-col justify-between"
                title={isEn ? 'Click to open Complete Mughal Empire Timeline & Illustrated Details' : 'మొఘల్ సామ్రాజ్య సంపూర్ణ కాలక్రమం & సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span 
                      className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      {isEn ? '1526 – 1857 CE' : 'క్రీ.శ. 1526 – 1857'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#064E3B] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#047857] transition-colors border border-[#6EE7B7]/60">
                      <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                      <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                    </span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#022C22] via-[#065F46] to-[#064E3B] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#34D399]/50 group-hover:from-[#065F46] group-hover:to-[#047857] transition-all">
                    <span className="flex items-center gap-1.5">
                      <span>🛡️</span>
                      <span>{isEn ? 'The Mughal Empire — Complete Timeline (1526–1857)' : 'మొఘల్ సామ్రాజ్యము — సంపూర్ణ చారిత్రక కాలక్రమ ప్రవాహము (1526–1857)'}</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                  </div>

                  <p className="text-[11px] text-[#064E3B] font-medium leading-relaxed">
                    <strong className="text-[#047857] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                    {isEn 
                      ? 'Chronological flow from Babur (First Battle of Panipat, 1526), Humayun & Sher Shah Suri, Akbar, Jahangir, Shah Jahan, and Aurangzeb to the Later Mughals and the 1857 Uprising.'
                      : 'మొదటి పానిపట్ యుద్ధం (1526 - బాబర్) నుండి హుమాయూన్, షేర్ షా సూరి, అక్బర్, జహంగీర్, షాజహాన్, ఔరంగజేబు మరియు మలి మొఘలుల పాలన నుండి 1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం వరకు వరుస కాలక్రమం.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#34D399]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#10B981] shadow-2xs transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-md bg-[#064E3B] border border-[#10B981] overflow-hidden shrink-0 flex items-center justify-center">
                      <img 
                        src="./images/indian_history/mughal_timeline/portrait_akbar.jpg" 
                        alt="Mughal Empire Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-extrabold text-[#065F46] block leading-tight group-hover:text-[#047857]">
                        {isEn ? '👑 Emperors • Subas Map • Architecture • Revision Strip' : '👑 చక్రవర్తుల చిత్రాలు • సుబాల పటం • కట్టడాలు • రివిజన్ స్ట్రిప్'}
                      </span>
                      <span className="text-[9.5px] text-[#064E3B]/80 font-semibold block">
                        {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#065F46] group-hover:bg-[#047857] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                    <span>🔍</span>
                    <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                  </span>
                </div>
              </div>

              {/* PARALLEL COLUMN 2 (RIGHT): EUROPEANS ARRIVE IN INDIA (1498–1763) + CONSOLIDATION OF BRITISH POWER (1757–1856) BELOW IT */}
              <div className="w-full flex flex-col items-center">
                {/* BOX 2A (OCEAN SAPPHIRE-BLUE THEME): EUROPEANS ARRIVE IN INDIA (1498 – 1763 CE) */}
                <div 
                  onClick={() => setIsEuropeansModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#1E40AF] hover:border-[#2563EB] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE]/85 to-[#F0F9FF] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#3B82F6] hover:ring-4 hover:ring-[#60A5FA] flex flex-col justify-between"
                  title={isEn ? 'Click to open Europeans Arrive in India & French Advent Illustrated Details' : 'భారతదేశంలో యూరోపియన్ల రాక & ఫ్రెంచ్-కర్ణాటక యుద్ధాల సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#1E3A8A' }}
                      >
                        {isEn ? '1498 – 1763 CE' : 'క్రీ.శ. 1498 – 1763'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1E3A8A] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#1D4ED8] transition-colors border border-[#93C5FD]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#60A5FA]/50 group-hover:from-[#1E3A8A] group-hover:to-[#2563EB] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>⛵</span>
                        <span>{isEn ? 'Europeans Arrive in India — A New Era (1498–1763)' : 'భారతదేశంలో యూరోపియన్ల రాక — నూతన శకానికి నాంది (1498–1763)'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#1E3A8A] font-medium leading-relaxed">
                      <strong className="text-[#1D4ED8] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Arrival by sea route from Vasco da Gama (1498), Portuguese, British (1600), Dutch (1602), French (1664) & Danish (1731) companies, trading settlements, Carnatic Wars (1746–1763) and the foundation of colonial rule.'
                        : 'వాస్కోడిగామా (1498) సముద్ర మార్గం నుండి పోర్చుగీసు, బ్రిటిష్ (1600), డచ్ (1602), ఫ్రెంచ్ (1664), డేనిష్ (1731) కంపెనీల రాక, వర్తక స్థావరాలు, కర్ణాటక యుద్ధాలు (1746–1763) మరియు వలస పాలన ఆరంభం.'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#60A5FA]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#3B82F6] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#EFF6FF] border border-[#3B82F6] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={EUROPEANS_ARRIVAL_DETAILS.caravelShipImg} 
                          alt="Europeans Arrive in India Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#1E3A8A] block leading-tight group-hover:text-[#1D4ED8]">
                          {isEn ? '⛵ Sea Route Map • 5 Powers • Settlements • Carnatic Wars' : '⛵ సముద్ర మార్గ పటం • 5 కంపెనీలు • స్థావరాలు • కర్ణాటక యుద్ధాలు'}
                        </span>
                        <span className="text-[9.5px] text-[#1E3A8A]/80 font-semibold block">
                          {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#1E3A8A] group-hover:bg-[#1D4ED8] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* DOWNWARD CONNECTOR ARROW TO BRITISH CONSOLIDATION */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-5 bg-[#9F1239]"></div>
                  <ArrowDown className="w-5 h-5 text-[#9F1239]" />
                </div>

                {/* BOX 2B (BELOW EUROPEANS ARRIVE IN INDIA — IMPERIAL CRIMSON-ROSE THEME): CONSOLIDATION OF BRITISH POWER IN INDIA (1757 – 1856 CE) */}
                <div 
                  onClick={() => setIsBritishModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#9F1239] hover:border-[#BE123C] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#FFF1F2] via-[#FFE4E6]/85 to-[#FDF2F8] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#F43F5E] hover:ring-4 hover:ring-[#FB7185] flex flex-col justify-between"
                  title={isEn ? 'Click to open Consolidation of British Power in India (NCERT Summary) Illustrated Details' : 'భారతదేశంలో బ్రిటిష్ అధికారం సుస్థిరీకరణ (1757–1856) సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#9F1239' }}
                      >
                        {isEn ? '1757 – 1856 CE' : 'క్రీ.శ. 1757 – 1856'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#881337] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#BE123C] transition-colors border border-[#FDA4AF]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#4C0519] via-[#9F1239] to-[#881337] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#FB7185]/50 group-hover:from-[#881337] group-hover:to-[#BE123C] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>⚔️</span>
                        <span>{isEn ? 'Consolidation of British Power in India (1757–1856)' : 'భారతదేశంలో బ్రిటిష్ అధికారం సుస్థిరీకరణ (1757–1856)'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#4C0519] font-medium leading-relaxed">
                      <strong className="text-[#9F1239] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Battle of Plassey (1757) & Buxar (1764), Subsidiary Alliance (1798), Doctrine of Lapse (1848), Permanent Settlement (1793), Anglo-Mysore & Anglo-Maratha Wars, and 6 Governor-Generals.'
                        : 'ప్లాసీ యుద్ధం (1757), బక్సర్ యుద్ధం (1764), సైనిక సహకార పద్ధతి (1798), రాజ్య సంక్రమణ సిద్ధాంతం (1848), శాశ్వత భూమిశిస్తు (1793), ఆంగ్లో-మైసూర్ & ఆంగ్లో-మరాఠా యుద్ధాలు మరియు 6 ప్రముఖ గవర్నర్-జనరల్స్.'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#FB7185]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#F43F5E] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#FFF1F2] border border-[#F43F5E] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={BRITISH_CONSOLIDATION_DETAILS.battles[0].img} 
                          alt="Consolidation of British Power Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#881337] block leading-tight group-hover:text-[#BE123C]">
                          {isEn ? '⚔️ Plassey & Buxar • 3 Policies • 6 Governor-Generals' : '⚔️ ప్లాసీ & బక్సర్ • 3 విధానాలు • 6 గవర్నర్-జనరల్స్'}
                        </span>
                        <span className="text-[9.5px] text-[#881337]/80 font-semibold block">
                          {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#9F1239] group-hover:bg-[#BE123C] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* DOWNWARD CONNECTOR ARROW TO REVOLT OF 1857 */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-5 bg-[#C2410C]"></div>
                  <ArrowDown className="w-5 h-5 text-[#C2410C]" />
                </div>

                {/* BOX 2C (BELOW BRITISH CONSOLIDATION — FIERY SAFFRON-TERRACOTTA THEME): REVOLT OF 1857 (FIRST WAR OF INDIAN INDEPENDENCE) */}
                <div 
                  onClick={() => setIsRevolt1857ModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#C2410C] hover:border-[#EA580C] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5]/85 to-[#FEF2F2] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#F97316] hover:ring-4 hover:ring-[#FB923C] flex flex-col justify-between"
                  title={isEn ? 'Click to open Revolt of 1857 (First War of Indian Independence) Image & Details' : '1857 తిరుగుబాటు (ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం) చిత్రం & వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#C2410C' }}
                      >
                        {isEn ? '10 May 1857 CE' : 'క్రీ.శ. 1857 మే 10'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#9A3412] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#C2410C] transition-colors border border-[#FDBA74]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to View Image' : 'సచిత్ర పటము తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#9A3412] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#FB923C]/50 group-hover:from-[#9A3412] group-hover:to-[#EA580C] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>🔥</span>
                        <span>{isEn ? 'Revolt of 1857 — First War of Indian Independence' : '1857 తిరుగుబాటు — ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#7C2D12] font-medium leading-relaxed">
                      <strong className="text-[#C2410C] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Armed uprising against British rule starting at Meerut (10 May 1857) led by Mangal Pandey, Rani Lakshmibai, Bahadur Shah Zafar & Nana Sahib; ended East India Company rule (1858).'
                        : 'మీరట్‌లో (10 మే 1857) ప్రారంభమైన సాయుధ తిరుగుబాటు; మంగళ్ పాండే, రాణి లక్ష్మీబాయి, బహదూర్ షా జఫర్, నానా సాహెబ్ పోరాటం; ఈస్ట్ ఇండియా కంపెనీ పాలన అంతం (1858).'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#FB923C]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#F97316] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#FFF7ED] border border-[#F97316] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src="./images/indian_history/revolt_of_1857_artwork.jpg" 
                          alt="Revolt of 1857 Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#9A3412] block leading-tight group-hover:text-[#C2410C]">
                          {isEn ? '🖼️ Revolt of 1857 Illustrated Chart • Leaders & Map' : '🖼️ 1857 తిరుగుబాటు సచిత్ర పటం • నాయకులు & కేంద్రాలు'}
                        </span>
                        <span className="text-[9.5px] text-[#7C2D12]/80 font-semibold block">
                          {isEn ? 'Click box to view full image & details' : 'చిత్రం మరియు వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#C2410C] group-hover:bg-[#EA580C] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* DOWNWARD CONNECTOR ARROW TO FREEDOM MOVEMENT: MODERATE PHASE (1885–1905) */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-5 bg-[#3730A3]"></div>
                  <ArrowDown className="w-5 h-5 text-[#3730A3]" />
                </div>

                {/* BOX 2D (BELOW 1857 REVOLT — CONSTITUTIONAL INDIGO-PURPLE THEME): FREEDOM MOVEMENT: MODERATE PHASE (1885 – 1905 CE) */}
                <div 
                  onClick={() => setIsModeratePhaseModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#3730A3] hover:border-[#4F46E5] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF]/85 to-[#F5F3FF] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#6366F1] hover:ring-4 hover:ring-[#818CF8] flex flex-col justify-between"
                  title={isEn ? 'Click to open Freedom Movement: Moderate Phase (1885–1905) Illustrated Details' : 'భారత స్వాతంత్ర్య ఉద్యమం: మితవాద యుగము (1885–1905) సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#3730A3' }}
                      >
                        {isEn ? '1885 – 1905 CE' : 'క్రీ.శ. 1885 – 1905'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#312E81] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#4338CA] transition-colors border border-[#A5B4FC]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#1E1B4B] via-[#3730A3] to-[#312E81] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#818CF8]/50 group-hover:from-[#312E81] group-hover:to-[#4F46E5] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>📜</span>
                        <span>{isEn ? 'Freedom Movement: Moderate Phase (1885–1905)' : 'భారత స్వాతంత్ర్య ఉద్యమం: మితవాద యుగము (1885–1905)'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#1E1B4B] font-medium leading-relaxed">
                      <strong className="text-[#3730A3] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Early struggle through constitutional methods: Formation of INC (1885), Dadabhai Naoroji (Drain of Wealth), Gopal Krishna Gokhale, Surendranath Banerjee, Indian Councils Act (1892) & Partition of Bengal (1905).'
                        : 'రాజ్యాంగబద్ధ పద్ధతుల ద్వారా తొలి పోరాటం: భారత జాతీయ కాంగ్రెస్ స్థాపన (1885), దాదాభాయ్ నౌరోజీ (సంపద తరలింపు సిద్ధాంతం), గోపాలకృష్ణ గోఖలే, సురేంద్రనాథ్ బెనర్జీ, 1892 కౌన్సిళ్ల చట్టం & బెంగాల్ విభజన (1905).'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#818CF8]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#6366F1] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#EEF2FF] border border-[#6366F1] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={MODERATE_PHASE_DETAILS.keyLeaders[0].img} 
                          alt="Moderate Phase Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#312E81] block leading-tight group-hover:text-[#4338CA]">
                          {isEn ? '🏛️ INC (1885) • 3 Moderate Leaders • At a Glance Table' : '🏛️ కాంగ్రెస్ (1885) • 3 మితవాద నాయకులు • సమగ్ర పట్టిక'}
                        </span>
                        <span className="text-[9.5px] text-[#312E81]/80 font-semibold block">
                          {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#3730A3] group-hover:bg-[#4F46E5] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* DOWNWARD CONNECTOR ARROW TO SECOND PHASE OF INDIAN NATIONAL MOVEMENT (ASSERTIVE PHASE: 1905–1916) */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-5 bg-[#0F766E]"></div>
                  <ArrowDown className="w-5 h-5 text-[#0F766E]" />
                </div>

                {/* BOX 2E (BELOW MODERATE PHASE — SWADESHI TEAL-CYAN & GOLD THEME): SECOND PHASE OF THE INDIAN NATIONAL MOVEMENT (1905 – 1916 CE) */}
                <div 
                  onClick={() => setIsAssertivePhaseModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#0F766E] hover:border-[#0D9488] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#F0FDFA] via-[#CCFBF1]/85 to-[#FEFCE8] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#14B8A6] hover:ring-4 hover:ring-[#2DD4BF] flex flex-col justify-between"
                  title={isEn ? 'Click to open Second Phase of the Indian National Movement (Assertive Phase: 1905–1916) Illustrated Details' : 'భారత జాతీయోద్యమ రెండవ దశ: అతివాద యుగము (1905–1916) సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#0F766E' }}
                      >
                        {isEn ? '1905 – 1916 CE' : 'క్రీ.శ. 1905 – 1916'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#115E59] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#0F766E] transition-colors border border-[#5EEAD4]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#134E4A] via-[#0F766E] to-[#115E59] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#5EEAD4]/50 group-hover:from-[#0F766E] group-hover:to-[#0D9488] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>✊</span>
                        <span>{isEn ? 'Second Phase of National Movement: Assertive Phase (1905–1916)' : 'భారత జాతీయోద్యమ రెండవ దశ: అతివాద యుగము (1905–1916)'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#134E4A] font-medium leading-relaxed">
                      <strong className="text-[#0F766E] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Partition of Bengal (1905), Swadeshi & Boycott Movement, Rabindranath Tagore (Amar Sonar Bangla & Rakhi Unity), Surat Split (1907), and Assertive Nationalists (Lal-Bal-Pal Trio) demanding Swaraj.'
                        : 'బెంగాల్ విభజన (1905), స్వదేశీ & బహిష్కరణ ఉద్యమం, రవీంద్రనాథ్ ఠాగూర్ (అమర్ సోనార్ బంగ్లా & రాఖీ ఐక్యత), 1907 సూరత్ చీలిక మరియు సంపూర్ణ స్వరాజ్యం కోరిన అతివాద నాయకులు (లాల్-బాల్-పాల్ త్రయం).'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#5EEAD4]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#14B8A6] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#F0FDFA] border border-[#14B8A6] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={ASSERTIVE_PHASE_DETAILS.lalBalPalImg} 
                          alt="Assertive Phase Lal-Bal-Pal Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#115E59] block leading-tight group-hover:text-[#0F766E]">
                          {isEn ? '✊ Bengal Partition • Swadeshi • Surat Split • Lal-Bal-Pal' : '✊ బెంగాల్ విభజన • స్వదేశీ • సూరత్ చీలిక • లాల్-బాల్-పాల్'}
                        </span>
                        <span className="text-[9.5px] text-[#134E4A]/80 font-semibold block">
                          {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#0F766E] group-hover:bg-[#0D9488] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>

                {/* DOWNWARD CONNECTOR ARROW TO TIMELINE: NATIONALISM IN INDIA (1915–1942) */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-5 bg-[#15803D]"></div>
                  <ArrowDown className="w-5 h-5 text-[#15803D]" />
                </div>

                {/* BOX 2F (BELOW ASSERTIVE PHASE — TRICOLOUR SAFFRON-GREEN & GOLD THEME): TIMELINE: NATIONALISM IN INDIA (1915 – 1942 CE) */}
                <div 
                  onClick={() => setIsNationalismTimelineModalOpen(true)}
                  className="w-full p-4 rounded-xl border-2 border-[#15803D] hover:border-[#EA580C] transition-all hover:scale-[1.02] hover:shadow-xl shadow-md bg-gradient-to-br from-[#FFF7ED] via-[#FFFFFF] to-[#F0FDF4] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#22C55E] hover:ring-4 hover:ring-[#F97316] flex flex-col justify-between"
                  title={isEn ? 'Click to open Timeline: Nationalism in India (Gandhian Era: 1915–1942) Illustrated Details' : 'భారతదేశంలో జాతీయోద్యమ కాలక్రమం: గాంధీ శకము (1915–1942) సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span 
                        className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-white shadow-2xs"
                        style={{ backgroundColor: '#15803D' }}
                      >
                        {isEn ? '1915 – 1942 CE' : 'క్రీ.శ. 1915 – 1942'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EA580C] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#15803D] transition-colors border border-[#FDBA74]/60">
                        <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                        <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                      </span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#C2410C] via-[#15803D] to-[#14532D] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-xs border border-[#4ADE80]/50 group-hover:from-[#EA580C] group-hover:to-[#15803D] transition-all">
                      <span className="flex items-center gap-1.5">
                        <span>🇮🇳</span>
                        <span>{isEn ? 'Timeline: Nationalism in India — Gandhian Era (1915–1942)' : 'భారతదేశంలో జాతీయోద్యమ కాలక్రమం: గాంధీ శకము (1915–1942)'}</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#14532D] font-medium leading-relaxed">
                      <strong className="text-[#C2410C] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                      {isEn 
                        ? 'Gandhi Returns (1915), Jallianwala Bagh (1919), Non-Cooperation Movement (1920), Chauri Chaura (1922), Simon Commission (1928), Dandi Salt March (1930), Gandhi-Irwin Pact (1931) & Quit India ("Do or Die", 1942).'
                        : 'గాంధీజీ రాక (1915), జలియన్ వాలాబాగ్ (1919), సహాయ నిరాకరణ (1920), చౌరీ చౌరా (1922), సైమన్ కమిషన్ (1928), దండి ఉప్పు సత్యాగ్రహం (1930), గాంధీ-ఇర్విన్ ఒప్పందం (1931) & క్విట్ ఇండియా ఉద్యమం ("Do or Die", 1942).'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#4ADE80]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#15803D] shadow-2xs transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-[#F0FDF4] border border-[#15803D] overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={NATIONALISM_TIMELINE_DETAILS.events[0].img} 
                          alt="Nationalism in India Preview"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-extrabold text-[#14532D] block leading-tight group-hover:text-[#C2410C]">
                          {isEn ? '🇮🇳 8 Illustrated Milestones (1915–1942) • Dandi • Quit India' : '🇮🇳 8 సచిత్ర ఘట్టాలు (1915–1942) • దండి యాత్ర • క్విట్ ఇండియా'}
                        </span>
                        <span className="text-[9.5px] text-[#14532D]/80 font-semibold block">
                          {isEn ? 'Click box to open illustrated pop-up' : 'సచిత్ర పాప్-అప్ వివరాల కొరకు క్లిక్ చేయండి'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#15803D] group-hover:bg-[#EA580C] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs">
                      <span>🔍</span>
                      <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ============================================================ */}
            {/* LEVEL 10 (CENTERED AT THE END OF FLOWCHART): BRITISH CONSTITUTIONAL EVOLUTION (1858–1947) */}
            {/* ============================================================ */}
            <div className="flex flex-col items-center w-full">
              {/* Converging Connector Lines to Center */}
              <div className="w-1/2 h-4 border-b-2 border-l-2 border-r-2 border-[#D97706] rounded-b-lg"></div>
              <div className="w-0.5 h-5 bg-[#1E293B]"></div>
              <ArrowDown className="w-5 h-5 text-[#B45309] -mt-1 mb-1" />

              {/* CENTERED BOX: HISTORICAL EVOLUTION OF BRITISH CONSTITUTIONAL DEVELOPMENT IN INDIA (1858–1947) */}
              <div 
                onClick={() => setIsConstitutionalEvolutionModalOpen(true)}
                className="w-full max-w-xl mx-auto p-4 sm:p-5 rounded-xl border-2 border-[#1E293B] hover:border-[#B45309] transition-all hover:scale-[1.02] hover:shadow-2xl shadow-lg bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7]/70 to-[#F8FAFC] space-y-2.5 group text-left cursor-pointer ring-2 ring-[#F59E0B] hover:ring-4 hover:ring-[#D97706] flex flex-col justify-between"
                title={isEn ? 'Click to open Historical Evolution of British Constitutional Development in India (1858–1947) Illustrated Details' : 'భారతదేశంలో బ్రిటిష్ రాజ్యాంగ పరిణామ చరిత్ర (1858–1947) సచిత్ర వివరాల కొరకు క్లిక్ చేయండి'}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span 
                      className="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-[#FEF08A] shadow-2xs border border-[#F59E0B]"
                      style={{ backgroundColor: '#1E293B' }}
                    >
                      {isEn ? 'Phase 2: 1858 – 1947 CE' : '2వ దశ: క్రీ.శ. 1858 – 1947'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#B45309] text-[#FEF08A] flex items-center gap-1 shadow-xs group-hover:bg-[#1E293B] transition-colors border border-[#FCD34D]/60">
                      <Sparkles className="w-3 h-3 text-[#FDE047] animate-pulse" />
                      <span>{isEn ? 'Click to Pop Up Details' : 'సచిత్ర వివరాలు తెరవండి'}</span>
                    </span>
                  </div>

                  <div className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#78350F] text-[#FEF08A] font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2 shadow-sm border border-[#F59E0B]/70 group-hover:from-[#78350F] group-hover:to-[#0F172A] transition-all">
                    <span className="flex items-center gap-1.5">
                      <span>📜</span>
                      <span>{isEn ? 'British Constitutional Evolution in India — Crown Rule (1858–1947)' : 'భారతదేశంలో బ్రిటిష్ రాజ్యాంగ పరిణామ చరిత్ర — రాచరిక పాలన (1858–1947)'}</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                  </div>

                  <p className="text-[11px] text-[#1E293B] font-medium leading-relaxed">
                    <strong className="text-[#92400E] font-bold">{isEn ? 'Detail: ' : 'ముఖ్యాంశం: '}</strong>
                    {isEn 
                      ? 'Govt of India Act (1858), Indian Councils Acts (1861, 1892), Morley-Minto Reforms (1909), Montagu-Chelmsford Reforms / Dyarchy (1919), Govt of India Act / Provincial Autonomy (1935) & Indian Independence Act (1947).'
                      : 'భారత ప్రభుత్వ చట్టం (1858), కౌన్సిళ్ల చట్టాలు (1861, 1892), మార్లే-మింటో సంస్కరణలు (1909), మాంటేగు-చెమ్స్‌ఫర్డ్ / ద్వంద్వ పాలన (1919), 1935 భారత ప్రభుత్వ చట్టం (రాష్ట్ర స్వయంప్రతిపత్తి) & 1947 భారత స్వాతంత్ర్య చట్టం.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F59E0B]/60 flex items-center justify-between gap-2 bg-[#FFFFFF]/95 group-hover:bg-[#FFFFFF] p-2 rounded-lg border border-[#1E293B] shadow-2xs transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-md bg-[#FFFBEB] border border-[#D97706] overflow-hidden shrink-0 flex items-center justify-center">
                      <img 
                        src={CONSTITUTIONAL_EVOLUTION_DETAILS.acts[5].illustrationImg} 
                        alt="Constitutional Evolution Preview"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-extrabold text-[#1E293B] block leading-tight group-hover:text-[#B45309]">
                        {isEn ? '⚖️ 7 Landmark Acts (1858–1947) • 1935 Act • 1947 Independence' : '⚖️ 7 చారిత్రక చట్టాలు (1858–1947) • 1935 చట్టం • 1947 స్వాతంత్ర్య చట్టం'}
                      </span>
                      <span className="text-[9.5px] text-[#475569] font-semibold block">
                        {isEn ? 'Click box to open illustrated constitutional pop-up' : 'సచిత్ర రాజ్యాంగ పరిణామ పాప్-అప్ కొరకు క్లిక్ చేయండి'}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#1E293B] group-hover:bg-[#B45309] text-[#FEF08A] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-2xs border border-[#F59E0B]/50">
                    <span>🔍</span>
                    <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. SUB-TAB 3: ANCIENT UNIVERSITIES, SCIENTISTS & MATHEMATICIANS */}
      {/* ============================================================ */}
      {activeTab === 'sciences_universities' && (
        <IndianSciencesUniversitiesSection onOpenLightbox={setLightboxImage} />
      )}

      {/* ============================================================ */}
      {/* 4. SUB-TAB 4: ANCIENT CIVILIZATIONS (INDUS VALLEY, MESOPOTAMIA, EGYPT) */}
      {/* ============================================================ */}
      {activeTab === 'ancient_civilizations' && (
        <div className="p-4 sm:p-6 space-y-6">
          <AncientCivilizationsSection onOpenLightbox={setLightboxImage} />
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. SUB-TAB 5: VEDIC AGE DEEP-DIVE & COMPARATIVE MATRIX */}
      {/* ============================================================ */}
      {activeTab === 'vedic_deepdive' && (
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Header Banner for Vedic Deep-Dive */}
          <div className="bg-gradient-to-r from-[#7B1113] via-[#D84315] to-[#7B1113] text-[#FFE082] p-5 rounded-2xl border-2 border-[#D4AF37] shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[11px] font-bold uppercase tracking-wider">
                  {isEn ? 'Rigvedic vs Later Vedic Evolution' : 'ఋగ్వేద మరియు మలి వేద కాలాల సమగ్ర తులనాత్మక పరిశీలన'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-telugu-serif mt-1 text-[#FFFFFF]">
                  {isEn ? 'Vedic Period: From Rituals to Society, From Tribes to Kingdoms' : 'వేద కాలము: కర్మల నుండి సమాజం వరకు, తెగల నుండి రాజ్యాల వరకు'}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFE082]/90 mt-1 max-w-3xl leading-relaxed">
                  {isEn 
                    ? 'A side-by-side comparative examination of the Early Vedic (1500–1000 BCE) and Later Vedic (1000–600 BCE) ages, detailing how Indian civilization transitioned from pastoral clans into sophisticated urban kingdoms.'
                    : 'తొలి వేద యుగం మరియు మలి వేద యుగాల మధ్య గల సామాజిక, ఆర్థిక, మతపర, సాంకేతిక పరిణామాలను విశ్లేషించే సమగ్ర పోలిక పట్టిక.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLightboxImage({
                      src: './images/indian_history/vedic_period_overview.jpg',
                      title: isEn ? 'Vedic Period: Foundation of Indian Civilization' : 'వేద కాలము: భారతీయ సంస్కృతికి మూల పునాది',
                      subtitle: isEn ? 'Comprehensive summary infographic (Image 2)' : 'రెండవ మూల సమాచార పత్రం'
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFFFFF] text-[#7B1113] hover:bg-[#FFE082] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  {isEn ? 'Chart 1: Vedic Overview' : 'పటం 1: వేద దర్శిని'}
                </button>
                <button
                  onClick={() => {
                    setLightboxImage({
                      src: './images/indian_history/later_vedic_age.jpg',
                      title: isEn ? 'Later Vedic Age (1000–600 BCE)' : 'మలి వేద యుగము (క్రీ.పూ. 1000–600)',
                      subtitle: isEn ? 'Ganga-Yamuna settlements & social stratification (Image 3)' : 'మూడవ మూల సమాచార పత్రం'
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFE082] text-[#7B1113] hover:bg-[#FFF8E1] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  {isEn ? 'Chart 2: Later Vedic Age' : 'పటం 2: మలి వేద యుగం'}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Summary Cards for Both Eras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Early Vedic Highlights Card */}
            <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">☀️</span>
                  <div>
                    <h4 className="font-bold text-base text-[#7B1113] font-telugu-serif">
                      {isEn ? 'Early Vedic Period (Rigvedic)' : 'తొలి వేద కాలము (ఋగ్వేద యుగము)'}
                    </h4>
                    <span className="text-xs text-[#D84315] font-semibold">1500 BCE – 1000 BCE</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF9E6] text-[#7B1113] border border-[#D4AF37]">
                  {isEn ? 'Sapta Sindhu' : 'సప్తసింధు ప్రాంతం'}
                </span>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Pastoral, mobile society centered around cattle rearing. Nature gods (Indra, Agni, Varuna) worshipped with fire hymns. Women enjoyed equality, spiritual education, and assembly participation.'
                  : 'పశుపోషణ ఆధారిత జీవనం. ప్రకృతి శక్తులైన ఇంద్ర, అగ్ని, వరుణుల ఆరాధన. స్త్రీలకు వేదాధ్యయనం, సభలలో భాగస్వామ్యం మరియు ఉన్నత సామాజిక గౌరవం.'}
              </p>
              <div className="space-y-1 text-xs text-[#7B1113]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D84315] font-bold">✓</span>
                  <span>{isEn ? 'Rigveda: 1,028 hymns in praise of the Divine' : 'ఋగ్వేదం: 1,028 దివ్య సూక్తాల సంకలనం'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D84315] font-bold">✓</span>
                  <span>{isEn ? 'Cattle as prime measure of wealth (Gavisti)' : 'గోవులే ప్రధాన సంపద (గవిష్టి)'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D84315] font-bold">✓</span>
                  <span>{isEn ? 'Democratic assemblies: Sabha and Samiti' : 'సభ మరియు సమితి ద్వారా రాచరిక నియంత్రణ'}</span>
                </div>
              </div>
            </div>

            {/* Later Vedic Highlights Card */}
            <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#BF360C] shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <div>
                    <h4 className="font-bold text-base text-[#BF360C] font-telugu-serif">
                      {isEn ? 'Later Vedic Age (Brahmana Period)' : 'మలి వేద కాలము (బ్రాహ్మణ-ఉపనిషత్ యుగము)'}
                    </h4>
                    <span className="text-xs text-[#BF360C] font-semibold">1000 BCE – 600 BCE</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF3E0] text-[#BF360C] border border-[#FFAB91]">
                  {isEn ? 'Ganga-Yamuna' : 'గంగా-యమునా మైదానం'}
                </span>
              </div>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                {isEn 
                  ? 'Sedentary agricultural life revolutionized by iron tools. Large territorial kingdoms (Janapadas) with powerful monarchs emerged. Rise of four hereditary varnas alongside deep Upanishadic philosophy.'
                  : 'ఇనుము రాకతో వ్యవసాయ విప్లవం, స్థిర నివాసాలు. విశాల రాజ్యాలు (జనపదాలు), వంశపారంపర్య చక్రవర్తులు. నాలుగు కఠిన వర్ణాలతో పాటు బ్రహ్మ-ఆత్మ-మోక్ష ఉపనిషత్ జ్ఞానోదయం.'}
              </p>
              <div className="space-y-1 text-xs text-[#BF360C]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#BF360C] font-bold">✓</span>
                  <span>{isEn ? 'Composition of Sama, Yajur, Atharva & Upanishads' : 'సామ, యజుర్, అథర్వణ వేదాలు, బ్రాహ్మణాలు, ఉపనిషత్తులు'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#BF360C] font-bold">✓</span>
                  <span>{isEn ? 'Iron revolution (\'Shyama Ayas\') cleared rainforests' : 'ఇనుము (\'శ్యామ అయస్\') తో అడవుల నిర్మూలన, విస్తార వ్యవసాయం'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#BF360C] font-bold">✓</span>
                  <span>{isEn ? 'Upanishadic discovery of Brahman, Atman & Moksha' : 'ఉపనిషత్తుల బ్రహ్మ, ఆత్మ మరియు మోక్ష తత్త్వ దర్శనం'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Comparative Matrix Table */}
          <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] shadow-xs overflow-hidden">
            <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#FFFDF7] to-[#FAF7F0] border-b border-[#E8DCC4] flex items-center justify-between">
              <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D84315]" />
                <span>{isEn ? 'Dimension-by-Dimension Transition Matrix' : 'అంశాల వారీగా పరిణామ క్రమ పోలిక పట్టిక'}</span>
              </h4>
              <span className="text-[11px] text-[#5D4037] font-semibold">
                {VEDIC_COMPARISON_DATA.length} {isEn ? 'Facets Analyzed' : 'అంశాల విశ్లేషణ'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF7F0] border-b-2 border-[#D4AF37] text-[#7B1113]">
                    <th className="p-3 sm:p-4 font-bold w-1/4">
                      {isEn ? 'Dimension / Facet' : 'పరిశీలనాంశము'}
                    </th>
                    <th className="p-3 sm:p-4 font-bold w-3/8 bg-[#FFF9E6]/60">
                      {isEn ? 'Early Vedic Period (1500–1000 BCE)' : 'తొలి వేద కాలము (క్రీ.పూ. 1500–1000)'}
                    </th>
                    <th className="p-3 sm:p-4 font-bold w-3/8 bg-[#FFF3E0]/60">
                      {isEn ? 'Later Vedic Age (1000–600 BCE)' : 'మలి వేద కాలము (క్రీ.పూ. 1000–600)'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DCC4]">
                  {VEDIC_COMPARISON_DATA.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#FFFDF7] transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-[#7B1113] align-top bg-[#FAF7F0]/40">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{row.icon}</span>
                          <span>{isEn ? row.dimensionEn : row.dimensionTe}</span>
                        </div>
                      </td>
                      <td className="p-3 sm:p-4 text-[#5D4037] align-top leading-relaxed bg-[#FFF9E6]/20">
                        {isEn ? row.earlyVedicEn : row.earlyVedicTe}
                      </td>
                      <td className="p-3 sm:p-4 text-[#2C1810] align-top leading-relaxed bg-[#FFF3E0]/20 font-medium">
                        {isEn ? row.laterVedicEn : row.laterVedicTe}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 6. SUB-TAB 6: LITERARY HERITAGE OF INDIA */}
      {/* ============================================================ */}
      {activeTab === 'literary_heritage' && (
        <LiteraryHeritageSection
          isEn={isEn}
          onOpenLightbox={(img) => setLightboxImage({ ...img, showMahajanapadasList: false })}
        />
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: STONE AGE & EARLY HUMAN MIGRATION MAP */}
      {/* ============================================================ */}
      {isStoneAgeModalOpen && (
        <div
          onClick={() => setIsStoneAgeModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0F2C59] via-[#1E3A8A] to-[#0F2C59] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🗺️</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#0F2C59] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? 'Pre-History • Stone Age (~200,000 – 15,000 Years Ago)' : 'చరిత్రపూర్వ యుగము • రాతి యుగము (2,00,000 – 15,000 సం॥ క్రితం)'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? 'Paleolithic • Mesolithic • Neolithic' : 'ప్రాచీన • మధ్య • నవీన రాతియుగాలు'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn ? 'Stone Age & Early Human Migration World Map' : 'రాతి యుగము & ఆదిమ మానవ వలసల ప్రపంచ పటము'}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsStoneAgeModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">

          {/* POSTER / IMAGE-FORMAT RECREATION IN TELUGU & ENGLISH */}
          <div className="bg-[#FDFCF7] rounded-3xl border-[3px] border-[#0F2C59] p-4 sm:p-8 shadow-xl space-y-6 max-w-5xl mx-auto">

            {/* Poster Title with Navy Underline (Matching Source Image) */}
            <div className="text-center space-y-3">
              <div className="inline-block">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F2C59] font-telugu-serif tracking-tight">
                  {isEn ? 'Early Human Migration Map' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము'}
                </h3>
                <div className="h-1.5 w-full bg-[#0F2C59] rounded-full mt-1"></div>
              </div>

              {/* Framed Intro Subtitle Box (Matching Source Image) */}
              <div className="max-w-2xl mx-auto p-3.5 sm:p-4 rounded-xl border-2 border-[#0F2C59] bg-[#FFFFFF] shadow-xs">
                <p className="text-xs sm:text-base font-bold text-[#1E293B] leading-relaxed">
                  {isEn
                    ? 'Early humans began in Africa and traveled across the world in search of food, water, and new places to live.'
                    : 'ఆదిమ మానవులు ఆఫ్రికాలో ఆవిర్భవించి ఆహారం, నీరు మరియు నివాసయోగ్యమైన నూతన ప్రాంతాల అన్వేషణలో ప్రపంచవ్యాప్తంగా ప్రయాణించారు.'}
                </p>
              </div>
            </div>

            {/* Central World Migration Map Image with Interactive Zoom & Bilingual Route Strip */}
            <div className="space-y-4">
              <div
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: './images/indian_history/early_human_migration_map.jpg',
                    title: isEn ? 'Early Human Migration Map (~200,000 – 15,000 Years Ago)' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము (2,00,000 – 15,000 సం॥ క్రితం)',
                    subtitle: isEn
                      ? 'Out of Africa migration across Middle East, Europe, Asia, Australia & Bering Land Bridge to the Americas'
                      : 'ఆఫ్రికా నుండి మధ్యప్రాచ్యం, యూరప్, ఆసియా (భారత్), ఆస్ట్రేలియా మరియు బెరింగ్ భూ వంతెన మీదుగా అమెరికా ఖండాలకు వలస మార్గాలు'
                  });
                }}
                className="relative rounded-2xl border-2 border-[#0F2C59]/40 bg-[#FFFFFF] overflow-hidden shadow-md cursor-pointer group p-2"
                title={isEn ? 'Click map to zoom in full screen' : 'పటంపై క్లిక్ చేసి పూర్తి పరిమాణంలో జూమ్ చేయండి'}
              >
                <img
                  src="./images/indian_history/early_human_migration_world_crop.jpg"
                  alt="Early Human Migration World Map"
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0F2C59]/90 text-[#FFE082] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                  <span>{isEn ? 'Click Map to Zoom' : 'జూమ్ చేయుటకు క్లిక్ చేయండి'}</span>
                </div>
              </div>

              {/* Chronological Migration Stages Strip (Matching the 7 Map Regions & Dates) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  {
                    regionEn: '⭐ STARTING REGION: AFRICA',
                    regionTe: '⭐ ప్రారంభ ప్రాంతం: ఆఫ్రికా',
                    dateEn: '~200,000 years ago (or earlier)',
                    dateTe: 'సుమారు 2,00,000 సం॥ క్రితం (లేదా అంతకు ముందు)',
                    bg: '#FEF3C7',
                    border: '#D97706',
                    text: '#92400E'
                  },
                  {
                    regionEn: '➔ MIDDLE EAST',
                    regionTe: '➔ మధ్యప్రాచ్యం (Middle East)',
                    dateEn: '100,000 – 70,000 years ago',
                    dateTe: '1,00,000 – 70,000 సం॥ క్రితం',
                    bg: '#FFFBEB',
                    border: '#B45309',
                    text: '#991B1B'
                  },
                  {
                    regionEn: '➔ EUROPE',
                    regionTe: '➔ యూరప్ (Europe)',
                    dateEn: '70,000 – 50,000 years ago',
                    dateTe: '70,000 – 50,000 సం॥ క్రితం',
                    bg: '#ECFCCB',
                    border: '#4D7C0F',
                    text: '#991B1B'
                  },
                  {
                    regionEn: '➔ ASIA & INDIA',
                    regionTe: '➔ ఆసియా & భారత ఉపఖండం',
                    dateEn: '70,000 – 50,000 years ago',
                    dateTe: '70,000 – 50,000 సం॥ క్రితం',
                    bg: '#FEF9C3',
                    border: '#CA8A04',
                    text: '#991B1B'
                  },
                  {
                    regionEn: '➔ AUSTRALIA',
                    regionTe: '➔ ఆస్ట్రేలియా (Australia)',
                    dateEn: '50,000 – 40,000 years ago',
                    dateTe: '50,000 – 40,000 సం॥ క్రితం',
                    bg: '#F3E8FF',
                    border: '#7E22CE',
                    text: '#991B1B'
                  },
                  {
                    regionEn: '🌉 BERING LAND BRIDGE',
                    regionTe: '🌉 బెరింగ్ భూ వంతెన (Bering Land Bridge)',
                    dateEn: 'Exposed land during Ice Age',
                    dateTe: 'మంచు యుగంలో (Ice Age) బయటపడిన భూభాగం',
                    bg: '#FFEDD5',
                    border: '#C2410C',
                    text: '#7C2D12'
                  },
                  {
                    regionEn: '➔ NORTH AMERICA',
                    regionTe: '➔ ఉత్తర అమెరికా (North America)',
                    dateEn: '20,000 – 15,000 years ago',
                    dateTe: '20,000 – 15,000 సం॥ క్రితం',
                    bg: '#DCFCE7',
                    border: '#15803D',
                    text: '#991B1B'
                  },
                  {
                    regionEn: '➔ SOUTH AMERICA',
                    regionTe: '➔ దక్షిణ అమెరికా (South America)',
                    dateEn: '20,000 – 15,000 years ago',
                    dateTe: '20,000 – 15,000 సం॥ క్రితం',
                    bg: '#FFEDD5',
                    border: '#EA580C',
                    text: '#991B1B'
                  }
                ].map((st, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border-2 shadow-2xs space-y-1"
                    style={{ backgroundColor: st.bg, borderColor: st.border }}
                  >
                    <span className="font-extrabold text-xs text-[#0F2C59] block">
                      {isEn ? st.regionEn : st.regionTe}
                    </span>
                    <span className="font-bold text-xs block" style={{ color: st.text }}>
                      {isEn ? st.dateEn : st.dateTe}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row Matching the Poster Layout: LEGEND (Left) & KEY POINTS (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch pt-1">

              {/* LEGEND BOX (5 Cols - Matching Bottom-Left of Source Image) */}
              <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl border-2 border-[#0F2C59] bg-[#FFFFFF] shadow-xs space-y-3.5">
                <div className="text-center">
                  <span className="text-base sm:text-lg font-extrabold text-[#0F2C59] border-b-2 border-[#0F2C59] pb-0.5 px-2">
                    {isEn ? 'LEGEND' : 'సూచిక (LEGEND)'}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#1E293B]">
                  {/* 1. Red Arrow: Migration Route */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 shrink-0 flex items-center justify-center">
                      <svg width="52" height="20" viewBox="0 0 52 20" className="overflow-visible">
                        <line x1="2" y1="10" x2="42" y2="10" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
                        <polygon points="38,3 50,10 38,17" fill="#991B1B" />
                      </svg>
                    </div>
                    <span className="font-bold">
                      {isEn ? 'Migration Route (Approximate)' : 'వలస మార్గం (సుమారుగా)'}
                    </span>
                  </div>

                  {/* 2. Dashed Box: Land Bridge */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 shrink-0 flex items-center justify-center">
                      <div className="w-12 h-6 bg-[#F3D9B1] border-2 border-dashed border-[#4E342E] rounded-xs"></div>
                    </div>
                    <span className="font-bold leading-snug">
                      {isEn ? 'Land Bridge (Exposed land during Ice Age)' : 'భూ వంతెన (మంచు యుగంలో బయటపడిన భూభాగం)'}
                    </span>
                  </div>

                  {/* 3. Yellow Star: Starting Region */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 shrink-0 flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <span className="font-bold">
                      {isEn ? 'Starting Region (Africa)' : 'ప్రారంభ ప్రాంతం (ఆఫ్రికా)'}
                    </span>
                  </div>

                  {/* 4. Dates (years ago) */}
                  <div className="flex items-start gap-3 pt-1 border-t border-[#E2E8F0]">
                    <span className="font-extrabold text-[#991B1B] shrink-0">
                      {isEn ? 'Dates (years ago):' : 'తేదీలు (సం॥ క్రితం):'}
                    </span>
                    <span className="font-semibold text-[#334155]">
                      {isEn ? 'Approximate time of migration' : 'వలస జరిగిన సుమారు కాలం'}
                    </span>
                  </div>
                </div>
              </div>

              {/* KEY POINTS BOX (7 Cols - Matching Bottom-Center of Source Image) */}
              <div className="md:col-span-7 p-4 sm:p-5 rounded-2xl border-2 border-[#1B5E20] bg-[#FFFFFF] shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div>
                    <span className="text-base sm:text-lg font-extrabold text-[#1B5E20] border-b-2 border-[#1B5E20] pb-0.5">
                      {isEn ? 'KEY POINTS' : 'ముఖ్య అంశాలు (KEY POINTS)'}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-base font-bold text-[#1E293B]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#1B5E20] text-lg leading-none">●</span>
                      <span>
                        {isEn
                          ? 'Early humans began in Africa (~200,000 years ago or earlier).'
                          : 'ఆదిమ మానవులు ఆఫ్రికా ఖండంలో (సుమారు 2,00,000 సం॥ క్రితం) ఆవిర్భవించారు.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#1B5E20] text-lg leading-none">●</span>
                      <span>
                        {isEn
                          ? 'They moved in groups over thousands of years across continents.'
                          : 'వారు వేలాది సంవత్సరాల పాటు సమూహాలుగా (గుంపులుగా) ఖండాల మీదుగా ప్రయాణించారు.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#1B5E20] text-lg leading-none">●</span>
                      <span>
                        {isEn
                          ? 'They followed animal herds, good weather, and sea coasts (reaching India & South Asia ~70,000–50,000 years ago).'
                          : 'వారు జంతువుల మందలను, అనుకూల వాతావరణాన్ని మరియు సముద్ర తీరాలను అనుసరిస్తూ వలస వెళ్ళారు (సుమారు 70,000–50,000 సం॥ క్రితం భారత ఉపఖండానికి చేరుకున్నారు).'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs text-[#475569] font-semibold">
                    {isEn ? 'Full Original Poster Image Available Below & in Lightbox' : 'పూర్తి అసలు చిత్రం క్రింద మరియు జూమ్ వీక్షణలో అందుబాటులో ఉంది'}
                  </span>
                  <button
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/early_human_migration_map.jpg',
                        title: isEn ? 'Early Human Migration Map' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము',
                        subtitle: isEn ? 'Full High-Resolution Source Map' : 'పూర్తి పరిమాణపు మూల పటము'
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0F2C59] hover:bg-[#1E3A8A] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                    <span>{isEn ? 'Open Full Map in Lightbox Zoom' : 'పూర్తి పటాన్ని జూమ్‌లో తెరవండి'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* FULL ORIGINAL SOURCE IMAGE DISPLAY CARD */}
          <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-3xl border-2 border-[#D4AF37] p-4 sm:p-6 shadow-md space-y-3 text-center">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E8DCC4] pb-3">
              <div className="text-left">
                <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                  🖼️ {isEn ? 'Original Early Human Migration Map (Full Image View)' : 'ఆదిమ మానవ వలసల మూల చిత్ర పటము (Full Image Format)'}
                </h4>
                <p className="text-xs text-[#5D4037]">
                  {isEn ? 'Click anywhere on the image below to open interactive zoom (+ / −)' : 'క్రింది చిత్రంపై క్లిక్ చేసి జూమ్ (+ / −) చేసి చూడవచ్చు'}
                </p>
              </div>
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: './images/indian_history/early_human_migration_map.jpg',
                    title: isEn ? 'Early Human Migration Map' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము',
                    subtitle: isEn ? 'Click image or + Zoom button to magnify' : 'చిత్రంపై క్లిక్ చేసి జూమ్ చేయండి'
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#4A0012] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                <span>{isEn ? 'Zoom Full Screen' : 'పూర్తి స్క్రీన్‌లో జూమ్ చేయండి'}</span>
              </button>
            </div>

            <div
              onClick={() => {
                setLightboxZoom(1);
                setLightboxImage({
                  src: './images/indian_history/early_human_migration_map.jpg',
                  title: isEn ? 'Early Human Migration Map' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము',
                  subtitle: isEn ? 'Click image or + Zoom button to magnify' : 'చిత్రంపై క్లిక్ చేసి జూమ్ చేయండి'
                });
              }}
              className="rounded-2xl overflow-hidden border-2 border-[#E8DCC4] bg-[#FDFCF7] cursor-pointer group inline-block max-w-full"
            >
              <img
                src="./images/indian_history/early_human_migration_map.jpg"
                alt="Early Human Migration Map Full Poster"
                className="max-h-[720px] w-auto mx-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: './images/indian_history/early_human_migration_map.jpg',
                    title: isEn ? 'Early Human Migration Map' : 'ఆదిమ మానవ వలసల ప్రపంచ పటము',
                    subtitle: isEn ? 'Full High-Resolution Source Map' : 'పూర్తి పరిమాణపు మూల పటము'
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#0F2C59] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#0F2C59]" />
                <span>{isEn ? 'Open Full Map in Lightbox Zoom' : 'పూర్తి పటాన్ని జూమ్‌లో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsStoneAgeModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0F2C59] text-[#FFE082] hover:bg-[#1E3A8A] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 7. SUB-TAB 7: ORIGINAL SOURCE INFOGRAPHICS GALLERY */}
      {/* ============================================================ */}
      {activeTab === 'gallery' && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DCC4] flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Historical & Scientific Infographics Archive (15 Master Charts)' : 'మూల చారిత్రక & విజ్ఞాన సమాచార పట్టికల ప్రదర్శన (15 పటాలు)'}
              </h3>
              <p className="text-xs text-[#5D4037] mt-0.5">
                {isEn 
                  ? 'High-resolution digital archive of all 15 source charts: Civilizations (Indus, Mesopotamia, Egypt), Empires, Vedic, Medieval, Universities, Scientists & Mathematicians. Click on any card to view in full resolution.'
                  : 'సమగ్ర 15 పరిశోధనా చారిత్రక, నాగరికతల & శాస్త్రీయ పటాల గ్యాలరీ. పూర్తి పరిమాణంలో దర్శించుటకు ఏదైనా కార్డ్‌పై క్లిక్ చేయండి.'}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold shadow-2xs">
              15 {isEn ? 'Infographics' : 'పటాలు'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...INDIAN_HISTORY_GALLERY_IMAGES, ...SCIENCE_GALLERY_INFOGRAPHICS, ...CIVILIZATION_GALLERY_INFOGRAPHICS].map((img) => (
              <div 
                key={img.id}
                onClick={() => setLightboxImage({
                  src: img.src,
                  title: isEn ? img.titleEn : img.titleTe,
                  subtitle: isEn ? img.subtitleEn : img.subtitleTe
                })}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] hover:border-[#7B1113] shadow-xs hover:shadow-lg transition-all overflow-hidden cursor-pointer group flex flex-col"
              >
                {/* Image Preview Box */}
                <div className="relative bg-[#2C1810] h-64 sm:h-72 overflow-hidden flex items-center justify-center">
                  <img 
                    src={img.src} 
                    alt={isEn ? img.titleEn : img.titleTe}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm">
                    <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                    <span>{isEn ? 'Click to Enlarge Full Screen' : 'పూర్తి పరిమాణంలో దర్శించండి'}</span>
                  </div>
                </div>

                {/* Caption / Description Box */}
                <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif group-hover:text-[#D84315] transition-colors">
                      {isEn ? img.titleEn : img.titleTe}
                    </h4>
                    <p className="text-xs text-[#5D4037] mt-1 leading-snug">
                      {isEn ? img.subtitleEn : img.subtitleTe}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#E8DCC4] flex items-center justify-between text-xs font-semibold text-[#D84315] flex-wrap gap-2">
                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-[#7B1113] hover:text-[#D84315] hover:underline flex items-center gap-1 font-bold"
                      title={isEn ? "Open image in new tab" : "చిత్రాన్ని కొత్త ట్యాబ్‌లో తెరవండి"}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? 'Direct Picture Link' : 'చిత్రం లింక్ ↗'}</span>
                    </a>
                    <span className="flex items-center gap-1 group-hover:underline">
                      <span>{isEn ? 'View High-Res' : 'హై-రెస్ దర్శనం'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. MODAL: DETAILED FULL-SCREEN ERA DEEP DIVE */}
      {/* ============================================================ */}
      {focusedPeriod && (
        <div 
          onClick={() => setFocusedPeriod(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-10">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{focusedPeriod.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#7B1113] text-[10px] font-bold">
                      {isEn ? `Stage ${focusedPeriod.order} of 8` : `దశ ${focusedPeriod.order} / 8`}
                    </span>
                    <span className="text-xs text-[#FFE082] font-semibold">
                      {isEn ? focusedPeriod.timelineEn : focusedPeriod.timelineTe}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif text-white mt-1">
                    {isEn ? focusedPeriod.titleEn : focusedPeriod.titleTe}
                  </h3>
                  <p className="text-xs text-[#FFE082]/90 mt-0.5">
                    {isEn ? focusedPeriod.subtitleEn : focusedPeriod.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setFocusedPeriod(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 flex-1">
              {/* Comprehensive Summary */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DCC4] space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113]">
                  {isEn ? 'Overview & Historical Context' : 'స్థూల దృష్టి & చారిత్రక నేపథ్యము'}
                </h4>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                  {isEn ? focusedPeriod.summaryEn : focusedPeriod.summaryTe}
                </p>
              </div>

              {/* Sub-divisions if available */}
              {focusedPeriod.subDivisions && focusedPeriod.subDivisions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113]">
                    {isEn ? 'Internal Epochs & Sub-Phases' : 'అంతర్గత దశలు & యుగాలు'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {focusedPeriod.subDivisions.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D4AF37]/60 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                            {isEn ? sub.nameEn : sub.nameTe}
                          </h5>
                          {sub.periodEn && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF8E1] text-[#7B1113]">
                              {isEn ? sub.periodEn : sub.periodTe}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#5D4037] leading-relaxed">
                          {isEn ? sub.descriptionEn : sub.descriptionTe}
                        </p>
                        <div className="pt-2 border-t border-[#E8DCC4] space-y-1 text-xs text-[#7B1113]">
                          {(isEn ? sub.keyPointsEn : sub.keyPointsTe).map((kp, kpIdx) => (
                            <div key={kpIdx} className="flex items-start gap-1">
                              <span className="text-[#D84315]">•</span>
                              <span>{kp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    <BookOpen className="w-4 h-4 text-[#C99700]" />
                    <span>{isEn ? 'Primary Sources' : 'ఆధార గ్రంథాలు & తవ్వకాలు'}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#5D4037]">
                    {(isEn ? focusedPeriod.sourcesEn : focusedPeriod.sourcesTe).map((s, i) => (
                      <li key={i} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#D84315]">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    <Users className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? 'Society & Varna Order' : 'సమాజం & వర్ణ వ్యవస్థ'}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#5D4037]">
                    {(isEn ? focusedPeriod.societyEn : focusedPeriod.societyTe).map((s, i) => (
                      <li key={i} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#D84315]">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    <Wheat className="w-4 h-4 text-[#C99700]" />
                    <span>{isEn ? 'Economy & Metallurgy' : 'ఆర్థిక వ్యవస్థ & లోహ పరిజ్ఞానం'}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#5D4037]">
                    {(isEn ? focusedPeriod.economyEn : focusedPeriod.economyTe).map((s, i) => (
                      <li key={i} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#D84315]">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                    <Flame className="w-4 h-4 text-[#BF360C]" />
                    <span>{isEn ? 'Religion & Philosophy' : 'ధర్మం, యజ్ఞాలు & తత్త్వశాస్త్రం'}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#5D4037]">
                    {(isEn ? focusedPeriod.religionEn : focusedPeriod.religionTe).map((s, i) => (
                      <li key={i} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#D84315]">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legacy Quote */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082]/30 border border-[#D4AF37]">
                <span className="text-[10px] font-bold text-[#7B1113] uppercase tracking-wider block">
                  {isEn ? 'Civilizational Legacy' : 'శాశ్వత వారసత్వ ప్రభావం'}
                </span>
                <p className="text-xs sm:text-sm text-[#5D4037] italic mt-1 font-medium leading-relaxed">
                  "{isEn ? focusedPeriod.legacyEn : focusedPeriod.legacyTe}"
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex justify-end">
              <button
                onClick={() => setFocusedPeriod(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 8. DEDICATED POP-UP MODAL: GUPTA EMPIRE ILLUSTRATED DETAILS */}
      {/* ============================================================ */}
      {isGuptaModalOpen && (
        <div 
          onClick={() => setIsGuptaModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-10">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FFE082] to-[#FF8F00] flex items-center justify-center text-2xl shadow-md border border-[#D4AF37] shrink-0 text-[#7B1113]">
                  👑
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#7B1113] text-[10px] font-bold uppercase tracking-wider">
                      {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineTe}
                    </span>
                    <span className="text-xs text-[#FFE082] font-extrabold">
                      {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.periodEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.periodTe}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif text-white mt-1">
                    {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleTe}
                  </h3>
                  <p className="text-xs text-[#FFE082]/90 mt-0.5">
                    {isEn 
                      ? 'Emperors, Navaratnas, Nalanda University, Architecture & Administration'
                      : 'చక్రవర్తులు, నవరత్నాలు, నలందా విశ్వవిద్యాలయం, దేవాలయ శిల్పకళ & పరిపాలనా విశేషాలు'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsGuptaModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
              
              {/* TOP ROW: Full Manuscript Picture + Core Imperial Facts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Left: The Manuscript Picture Card with Click-to-Zoom & Hotspot Previews */}
                <div className="lg:col-span-5 bg-[#FFFFFF] p-3.5 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-3 sticky top-0">
                  <div 
                    onClick={() => {
                      setLightboxImage({
                        src: './images/indian_history/gupta_empire_manuscript.jpg',
                        title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleTe,
                        subtitle: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineTe
                      });
                    }}
                    className="relative bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center h-80 sm:h-96 shadow-inner"
                  >
                    <img 
                      src="./images/indian_history/gupta_empire_manuscript.jpg" 
                      alt="Gupta Empire Illustrated Manuscript" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white font-bold text-xs p-3 text-center">
                      <Maximize2 className="w-7 h-7 text-[#FFE082]" />
                      <span className="text-sm">{isEn ? 'Click to Enlarge Full Picture' : 'చిత్రాన్ని పెద్దదిగా దర్శించండి'}</span>
                      <span className="text-[10px] text-[#FFE082]">{isEn ? 'Ultra High-Definition Zoom' : 'అధిక స్పష్టతతో కూడిన వీక్షణ'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#5D4037] px-1">
                    <span className="font-bold flex items-center gap-1 text-[#7B1113]">
                      <span>📜</span>
                      <span>{isEn ? 'Original Illustrated Note' : 'సచిత్ర చారిత్రక నోట్స్'}</span>
                    </span>
                    <button
                      onClick={() => {
                        setLightboxImage({
                          src: './images/indian_history/gupta_empire_manuscript.jpg',
                          title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.titleTe,
                          subtitle: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.taglineTe
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? 'High-Res Zoom' : 'జూమ్ వ్యూ'}</span>
                    </button>
                  </div>

                  {/* Visual Hotspots Quick Strip */}
                  <div className="pt-2 border-t border-[#E8DCC4] space-y-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                      {isEn ? 'Illustrated Elements in Note (8 Pictures):' : 'నోట్స్‌లోని 8 సచిత్ర కళాఖండాలు:'}
                    </span>
                    <div className="grid grid-cols-4 gap-1.5">
                      <ManuscriptCrop cropKey="temple" className="h-12" alt="Temple" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Classical Temple Architecture' : 'శాస్త్రీయ ఆలయ శిల్పకళ', subtitle: 'Gupta Nagara Architecture' })} />
                      <ManuscriptCrop cropKey="buddha" className="h-12" alt="Buddha" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Lord Buddha' : 'భగవాన్ బుద్ధుడు', subtitle: 'Buddhist Masterpieces' })} />
                      <ManuscriptCrop cropKey="rulers" className="h-12" alt="Rulers" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Gupta Emperors' : 'గుప్త చక్రవర్తులు', subtitle: 'Steed of Kings' })} />
                      <ManuscriptCrop cropKey="governor" className="h-12" alt="Governor" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Administrative System' : 'పరిపాలనా వ్యవస్థ', subtitle: 'Bhuktis & Uparikas' })} />
                      <ManuscriptCrop cropKey="coins" className="h-12" alt="Coins" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Gupta Gold Coins' : 'గుప్త బంగారు దీనారాలు', subtitle: 'Pure Gold Dinaras' })} />
                      <ManuscriptCrop cropKey="nalanda" className="h-12" alt="Nalanda" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Nalanda University' : 'నలందా విశ్వవిద్యాలయం', subtitle: 'Global Learning Seat' })} />
                      <ManuscriptCrop cropKey="scholar" className="h-12" alt="Scholar" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Navaratna Scholar' : 'నవరత్న మేధావి', subtitle: 'Literature & Science' })} />
                      <ManuscriptCrop cropKey="vishnu" className="h-12" alt="Vishnu" onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Lord Vishnu' : 'శ్రీమహావిష్ణువు', subtitle: 'Supreme Imperial Deity' })} />
                    </div>
                  </div>
                </div>

                {/* Right: Key Facts & Pillars Grid directly matching manuscript */}
                <div className="lg:col-span-7 space-y-3.5">
                  
                  {/* Founder, Capital & Iron Pillar Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="bg-[#FFFFFF] p-3 rounded-xl border-2 border-[#D4AF37]/70 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                        <span>👑</span>
                        <span>{isEn ? 'Founder of the Empire' : 'సామ్రాజ్య స్థాపకుడు'}</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-[#D84315] font-telugu-serif">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.founderEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.founderTe}
                      </p>
                      <span className="text-[10px] text-[#5D4037] block font-medium">
                        {isEn ? 'Reign: c. 240 – 280 CE' : 'పాలనా కాలం: క్రీ.శ. 240 – 280'}
                      </span>
                    </div>

                    <div className="bg-[#FFFFFF] p-3 rounded-xl border-2 border-[#D4AF37]/70 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                        <span>🏛️</span>
                        <span>{isEn ? 'Imperial Capital' : 'సామ్రాజ్య రాజధాని'}</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.capitalEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.capitalTe}
                      </p>
                      <span className="text-[10px] text-[#5D4037] block font-medium">
                        {isEn ? 'Epicenter of Ancient Indian Civilization' : 'ప్రాచీన భారత రాజకీయ, సాంస్కృతిక కేంద్రం'}
                      </span>
                    </div>

                    <div className="bg-[#FFFFFF] p-3 rounded-xl border-2 border-[#D4AF37]/70 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                        <span>🪷</span>
                        <span>{isEn ? 'Supreme Deity & Faith' : 'ఆరాధ్య దైవం & మతము'}</span>
                      </div>
                      <p className="text-xs text-[#2C1810] font-semibold leading-snug">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.supremeDeityEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.supremeDeityTe}
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF] p-3 rounded-xl border-2 border-[#D4AF37]/70 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                        <span>⚙️</span>
                        <span>{isEn ? 'Mehrauli Iron Pillar' : 'మెహ్రౌలీ ఇనుప స్తంభం (ఢిల్లీ)'}</span>
                      </div>
                      <p className="text-xs text-[#2C1810] font-semibold leading-snug">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.ironPillarEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.ironPillarTe}
                      </p>
                    </div>
                  </div>

                  {/* SPIRITUAL & ARCHITECTURAL PILLARS (WITH PICTURES) */}
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-[#7B1113] uppercase tracking-wider block">
                      {isEn ? 'Classical Architecture & Religious Harmony (సచిత్ర కళలు & మతం):' : 'శాస్త్రీయ ఆలయ శిల్పకళ & అహింసా ధర్మాలు:'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      
                      {/* Temple Architecture Card with Picture */}
                      <div className="bg-[#FFFFFF] p-2.5 rounded-xl border border-[#D4AF37]/70 shadow-2xs flex flex-col gap-2">
                        <ManuscriptCrop 
                          cropKey="temple" 
                          className="w-full h-24" 
                          alt="Temple Architecture"
                          onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.titleEn || 'Temple' : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.titleTe || 'ఆలయ శిల్పకళ', subtitle: 'Classical Nagara Architecture' })}
                        />
                        <div>
                          <h5 className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                            {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.titleTe}
                          </h5>
                          <p className="text-[10px] text-[#5D4037] leading-snug mt-1">
                            {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.descEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.templeArchitecture?.descTe}
                          </p>
                        </div>
                      </div>

                      {/* Buddha Art Card with Picture */}
                      <div className="bg-[#FFFFFF] p-2.5 rounded-xl border border-[#D4AF37]/70 shadow-2xs flex flex-col gap-2">
                        <ManuscriptCrop 
                          cropKey="buddha" 
                          className="w-full h-24" 
                          alt="Lord Buddha"
                          onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.titleEn || 'Buddha' : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.titleTe || 'బుద్ధుడు', subtitle: 'Buddhist Masterpieces' })}
                        />
                        <div>
                          <h5 className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                            {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.titleTe}
                          </h5>
                          <p className="text-[10px] text-[#5D4037] leading-snug mt-1">
                            {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.descEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.buddhaArt?.descTe}
                          </p>
                        </div>
                      </div>

                      {/* Supreme Deity Lord Vishnu with Picture */}
                      <div className="bg-[#FFFFFF] p-2.5 rounded-xl border border-[#D4AF37]/70 shadow-2xs flex flex-col gap-2">
                        <ManuscriptCrop 
                          cropKey="vishnu" 
                          className="w-full h-24" 
                          alt="Lord Vishnu"
                          onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Supreme Deity: Lord Vishnu' : 'ఆరాధ్య దైవం: శ్రీమహావిష్ణువు', subtitle: 'Garuda Emblem & Parama Bhagavata' })}
                        />
                        <div>
                          <h5 className="font-bold text-xs text-[#7B1113] font-telugu-serif">
                            {isEn ? 'Deity: Lord Vishnu' : 'ఆరాధ్య దైవం: శ్రీమహావిష్ణువు'}
                          </h5>
                          <p className="text-[10px] text-[#5D4037] leading-snug mt-1">
                            {isEn 
                              ? 'Emperors bore the title Parama Bhagavata; four-armed Vishnu with Shankha, Chakra, Gada, Padma.' 
                              : 'గుప్త రాజులు "పరమ భాగవత" బిరుదు ధరించారు; శంఖ చక్ర గదా పద్మధారియైన శ్రీమహావిష్ణువు పూజలందుకున్నాడు.'}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Administrative System & Bhuktis (WITH PICTURE) */}
                  <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DCC4] shadow-2xs flex items-center gap-3">
                    <ManuscriptCrop 
                      cropKey="governor" 
                      className="w-20 h-20 shrink-0" 
                      alt="Governor"
                      onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Gupta Administrative System' : 'పరిపాలనా వ్యవస్థ & భుక్తులు', subtitle: 'Centralized Administration & Bhuktis' })}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base">📜</span>
                        <h4 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wider">
                          {isEn ? 'Administrative System (పరిపాలనా వ్యవస్థ)' : 'పరిపాలనా వ్యవస్థ & భుక్తులు'}
                        </h4>
                      </div>
                      <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span><strong>{isEn ? 'Centralized Administration: ' : 'కేంద్రీకృత పరిపాలన: '}</strong>{isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.administration.systemEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.administration.systemTe}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span><strong>{isEn ? 'Provinces: ' : 'రాష్ట్ర విభజన: '}</strong>{isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.administration.provincesEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.administration.provincesTe}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Gupta Gold Coins (Dinaras) & Nalanda University (WITH PICTURES) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    
                    {/* Gold Coins Card with Picture */}
                    <div className="bg-[#FFFDF7] p-3 rounded-xl border-2 border-[#FFE082] shadow-2xs flex gap-3">
                      <ManuscriptCrop 
                        cropKey="coins" 
                        className="w-16 h-16 shrink-0" 
                        alt="Gupta Coins"
                        onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.titleTe, subtitle: 'Pure Gold Dinaras' })}
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#B45309]">
                          <span>🪙</span>
                          <span>{isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.titleTe}</span>
                        </div>
                        <p className="text-[11px] text-[#5D4037] leading-relaxed">
                          {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.descEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.coins.descTe}
                        </p>
                      </div>
                    </div>

                    {/* Nalanda University Card with Picture */}
                    <div className="bg-[#FFFDF7] p-3 rounded-xl border-2 border-[#FFE082] shadow-2xs flex gap-3">
                      <ManuscriptCrop 
                        cropKey="nalanda" 
                        className="w-16 h-16 shrink-0" 
                        alt="Nalanda University"
                        onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.titleTe, subtitle: 'Famous Centre of Learning' })}
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113]">
                          <span>🏛️</span>
                          <span>{isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.titleEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.titleTe}</span>
                        </div>
                        <p className="text-[11px] text-[#5D4037] leading-relaxed">
                          {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.descEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.nalanda.descTe}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* IMPORTANT EMPERORS SECTION (WITH PICTURE OF RULERS ON HORSES) */}
              <div className="space-y-3 bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#E8DCC4] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DCC4] pb-3">
                  <div className="flex items-center gap-3">
                    <ManuscriptCrop 
                      cropKey="rulers" 
                      className="w-16 h-16 shrink-0" 
                      alt="Gupta Emperors on Horseback"
                      onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'Important Rulers on Royal Steeds' : 'అశ్వారూఢులైన గుప్త చక్రవర్తులు', subtitle: 'Chandragupta I, Samudragupta & Vikramaditya' })}
                    />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                        <span>⚔️</span>
                        <span>{isEn ? 'Important Rulers of the Gupta Empire' : 'గుప్త సామ్రాజ్య ప్రముఖ చక్రవర్తులు'}</span>
                      </h4>
                      <p className="text-xs text-[#5D4037]">
                        {isEn 
                          ? 'Chandragupta I, Samudragupta, Chandragupta II Vikramaditya, Kumaragupta I, and Skandagupta' 
                          : 'మొదటి చంద్రగుప్తుడు, సముద్రగుప్తుడు, రెండవ చంద్రగుప్తుడు (విక్రమాదిత్యుడు), మొదటి కుమారగుప్తుడు & స్కందగుప్తుడు'}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold shrink-0 self-start sm:self-auto">
                    {isEn ? '5 Great Epoch Rulers' : 'ఐదుగురు ప్రసిద్ధ చక్రవర్తులు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                  {GUPTA_EMPIRE_MANUSCRIPT_DETAILS.importantRulers.map((r, rIdx) => (
                    <div 
                      key={rIdx}
                      className="bg-[#FFFDF7] p-4 rounded-xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs space-y-2 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]">
                          {isEn ? r.periodEn : r.periodTe}
                        </span>
                        <span className="text-base">👑</span>
                      </div>

                      <div>
                        <h5 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif">
                          {isEn ? r.nameEn : r.nameTe}
                        </h5>
                        <span className="text-xs font-bold text-[#D84315] block mt-0.5">
                          "{isEn ? r.titleEn : r.titleTe}"
                        </span>
                      </div>

                      <p className="text-xs text-[#5D4037] leading-relaxed pt-1.5 border-t border-[#E8DCC4]">
                        {isEn ? r.descEn : r.descTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* THE NINE GEMS (NAVARATNAS) SECTION (WITH PICTURE OF SCHOLAR READING MANUSCRIPT) */}
              <div className="space-y-3 bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#E8DCC4] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DCC4] pb-3">
                  <div className="flex items-center gap-3">
                    <ManuscriptCrop 
                      cropKey="scholar" 
                      className="w-16 h-16 shrink-0" 
                      alt="Navaratna Scholar Reading Manuscript"
                      onClick={() => setLightboxImage({ src: './images/indian_history/gupta_empire_manuscript.jpg', title: isEn ? 'The Nine Gems (Navaratnas)' : 'విక్రమాదిత్యుని నవరత్నాలు', subtitle: 'Kalidasa, Aryabhata, Varahamihira, Amarasimha...' })}
                    />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                        <span>💎</span>
                        <span>{isEn ? 'The Nine Gems (Navaratnas) in Vikramaditya’s Court' : 'విక్రమాదిత్యుని దర్బారులోని నవరత్నాలు (Nine Gems)'}</span>
                      </h4>
                      <p className="text-[11px] text-[#5D4037]">
                        {isEn 
                          ? 'The intellectual summit of ancient India: Literature, Mathematics, Astronomy & Sciences' 
                          : 'ప్రాచీన భారత మేధో సంపత్తి శిఖరాగ్రం: సాహిత్యం, గణితం, ఖగోళం & విజ్ఞానశాస్త్రాలు'}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold shrink-0 self-start sm:self-auto">
                    9 {isEn ? 'Gems' : 'రత్నాలు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                  {GUPTA_EMPIRE_MANUSCRIPT_DETAILS.navaratnas.map((gem, gIdx) => (
                    <div 
                      key={gIdx}
                      className="bg-[#FFFDF7] p-3.5 rounded-xl border border-[#D4AF37]/60 shadow-2xs space-y-1.5 hover:border-[#D84315] hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                          {isEn ? gem.nameEn : gem.nameTe}
                        </span>
                        <span className="text-xs">✨</span>
                      </div>

                      <span className="text-[11px] font-semibold text-[#D84315] block">
                        {isEn ? gem.fieldEn : gem.fieldTe}
                      </span>

                      <p className="text-[11px] text-[#5D4037] leading-relaxed pt-1.5 border-t border-[#E8DCC4]">
                        <strong className="text-[#7B1113]">{isEn ? 'Major Works: ' : 'ప్రధాన రచనలు/ఆవిష్కరణలు: '}</strong>
                        {isEn ? gem.majorWorksEn : gem.majorWorksTe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ============================================================ */}
              {/* APPENDED SECTION: GUPTA EMPIRE - THE GOLDEN AGE OF INDIA */}
              {/* ============================================================ */}
              <div className="space-y-5 pt-2 border-t-2 border-[#D4AF37]">
                
                {/* Golden Age Hero Banner with Extracted Emperor Portrait & Temple */}
                <div className="bg-gradient-to-r from-[#1A365D] via-[#0F284E] to-[#1E3A8A] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 text-white shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Left: Extracted Gupta Emperor Portrait */}
                    <div className="md:col-span-3 flex justify-center">
                      <div 
                        onClick={() => setLightboxImage({
                          src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.emperorPortraitImage,
                          title: isEn ? 'Gupta Emperor – The Golden Age of India' : 'గుప్త చక్రవర్తి – భారత స్వర్ణయుగ వైభవం',
                          subtitle: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerTe
                        })}
                        className="w-32 h-36 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#FFE082] bg-[#2C1810] shadow-lg cursor-pointer group relative"
                        title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                      >
                        <img 
                          src={GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.emperorPortraitImage} 
                          alt="Gupta Emperor Portrait" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                        </div>
                      </div>
                    </div>

                    {/* Center: Title, Golden Age Subtitle & Full Poster Button */}
                    <div className="md:col-span-6 text-center space-y-2">
                      <span className="inline-block px-3 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                        {isEn ? 'The Golden Age of India (320 – 550 CE)' : 'భారతదేశ స్వర్ణయుగము (క్రీ.శ. 320 – 550)'}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-[#FFE082] font-telugu-serif">
                        {isEn ? 'Gupta Empire: Comprehensive Overview' : 'గుప్త సామ్రాజ్యము: సమగ్ర చారిత్రక దర్శిని'}
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-white/90 tracking-wide">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerTe}
                      </p>
                      <div className="pt-1 flex justify-center">
                        <button
                          onClick={() => setLightboxImage({
                            src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.posterImage,
                            title: isEn ? 'Gupta Empire – The Golden Age of India (Full Chart)' : 'గుప్త సామ్రాజ్యము – భారత స్వర్ణయుగం (మూల చార్ట్)',
                            subtitle: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.subtitleBannerTe
                          })}
                          className="px-3.5 py-1.5 rounded-xl bg-[#FFE082] hover:bg-white text-[#7B1113] font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                          <span>{isEn ? 'View Golden Age Source Chart in HD' : 'స్వర్ణయుగ మూల చార్ట్ HD లో చూడండి'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Extracted Gupta Shikhara Temple */}
                    <div className="md:col-span-3 flex justify-center">
                      <div 
                        onClick={() => setLightboxImage({
                          src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.headerTempleImage,
                          title: isEn ? 'Gupta Classical Shikhara Temple' : 'గుప్తుల కాలం నాటి నగర శైలి శిఖర దేవాలయం',
                          subtitle: isEn ? 'Golden Age Temple Architecture' : 'స్వర్ణయుగ ఆలయ వాస్తుశిల్పం'
                        })}
                        className="w-32 h-36 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#FFE082] bg-[#2C1810] shadow-lg cursor-pointer group relative"
                        title={isEn ? 'Click to enlarge temple' : 'ఆలయ చిత్రం పెద్దదిగా చూడండి'}
                      >
                        <img 
                          src={GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.headerTempleImage} 
                          alt="Gupta Shikhara Temple" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Row 1: Introduction & Extent of the Empire (With Extracted Map) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                  
                  {/* Introduction Card */}
                  <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border-2 border-[#1E3A8A]/40 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#1E3A8A] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🏛️</span>
                      <span>{isEn ? 'Introduction (Golden Age Overview)' : 'పరిచయం (స్వర్ణయుగ విశిష్టత)'}</span>
                    </div>
                    <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-center bg-[#FFFDF7]">
                      {(isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.introductionEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.introductionTe).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2C1810] leading-relaxed">
                          <span className="text-[#1E3A8A] font-extrabold mt-0.5">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extent of the Empire Map Card */}
                  <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border-2 border-[#7B1113]/50 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#7B1113] text-[#FFE082] px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{isEn ? 'Extent of the Gupta Empire (At Its Height)' : 'గుప్త సామ్రాజ్య విస్తరణ పటం (ఉచ్ఛస్థితిలో)'}</span>
                      </span>
                      <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-white">
                        {isEn ? 'Click map to zoom' : 'పటంపై క్లిక్ చేయండి'}
                      </span>
                    </div>
                    <div className="p-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center bg-[#FFFDF7] flex-1">
                      <div 
                        onClick={() => setLightboxImage({
                          src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.extentMapImage,
                          title: isEn ? 'Extent of the Gupta Empire (At Its Height)' : 'గుప్త సామ్రాజ్య విస్తరణ పటం',
                          subtitle: isEn ? 'Punjab, Ujjain, Magadha, Pataliputra – Arabian Sea to Bay of Bengal' : 'పంజాబ్, ఉజ్జయిని, మగధ, పాటలీపుత్రం – అరేబియా సముద్రం నుండి బంగాళాఖాతం వరకు'
                        })}
                        className="sm:col-span-7 h-52 rounded-xl overflow-hidden border-2 border-[#D4AF37] bg-[#FAF7F0] cursor-pointer group relative flex items-center justify-center p-1 shadow-xs"
                      >
                        <img 
                          src={GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.extentMapImage} 
                          alt="Extent of the Gupta Empire Map" 
                          className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                        </div>
                      </div>
                      <div className="sm:col-span-5 space-y-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                          {isEn ? 'Key Imperial Centres on Map:' : 'పటంలోని ప్రధాన కేంద్రాలు:'}
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#5D4037]">
                          {(isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.extentLocationsEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.extentLocationsTe).map((loc, idx) => (
                            <li key={idx} className="bg-[#FAF7F0] px-2.5 py-1.5 rounded-lg border border-[#E8DCC4] font-semibold text-[#2C1810] flex items-center gap-1.5">
                              <span className="text-[#D84315]">◈</span>
                              <span>{loc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Row 2: Administration, Achievements (5 Extracted Icons), and Culture & Society */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                  
                  {/* Administration */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#7B1113]/40 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#8B1E1E] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🏛️</span>
                      <span>{isEn ? 'Administration' : 'పరిపాలనా విధానం'}</span>
                    </div>
                    <div className="p-4 space-y-2 bg-[#FFF5F5]/40 flex-1">
                      {(isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.administrationPointsEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.administrationPointsTe).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C1810] leading-relaxed">
                          <span className="text-[#8B1E1E] font-extrabold">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5 Achievements with Extracted Circular Icons */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#4C1D95]/40 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#4C1D95] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🎓</span>
                      <span>{isEn ? 'Achievements (5 Golden Pillars)' : 'స్వర్ణయుగ విజయాలు (5 రంగాలు)'}</span>
                    </div>
                    <div className="p-3 space-y-2 bg-[#F5F3FF]/50 flex-1">
                      {GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.achievements.map((ach) => (
                        <div key={ach.id} className="flex items-start gap-2.5 bg-[#FFFFFF] p-2 rounded-xl border border-[#DDD6FE] shadow-2xs">
                          <div 
                            onClick={() => setLightboxImage({
                              src: ach.iconImage,
                              title: isEn ? ach.titleEn : ach.titleTe,
                              subtitle: isEn ? ach.descEn : ach.descTe
                            })}
                            className="w-9 h-9 rounded-full overflow-hidden border border-[#4C1D95] shrink-0 cursor-pointer"
                          >
                            <img src={ach.iconImage} alt={ach.titleEn} className="w-full h-full object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h6 className="font-bold text-xs text-[#4C1D95] font-telugu-serif">
                              {isEn ? ach.titleEn : ach.titleTe}
                            </h6>
                            <p className="text-[11px] text-[#4E342E] leading-snug">
                              {isEn ? ach.descEn : ach.descTe}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Culture & Society */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#0F5257]/40 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#0F5257] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🪶</span>
                      <span>{isEn ? 'Culture & Society' : 'సంస్కృతి & సమాజం'}</span>
                    </div>
                    <div className="p-4 space-y-2 bg-[#F0FDFA]/50 flex-1">
                      {(isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.cultureAndSocietyEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.cultureAndSocietyTe).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C1810] leading-relaxed">
                          <span className="text-[#0F5257] font-extrabold">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Row 3: Famous Gupta Coins + Kalidasa & Temple Illustration + Decline & Legacy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                  
                  {/* Left: Famous Gupta Coins with Extracted High-Res Coin Pair */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#8B1E1E]/50 overflow-hidden shadow-xs flex flex-col">
                    <div className="bg-[#7B1113] text-[#FFE082] px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🪙</span>
                      <span>{isEn ? 'Famous Gupta Coins' : 'ప్రసిద్ధ గుప్త స్వర్ణ నాణేలు'}</span>
                    </div>
                    <div className="p-3.5 space-y-3 bg-[#FFFDF7] flex-1 flex flex-col justify-between">
                      <div 
                        onClick={() => setLightboxImage({
                          src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.goldCoinsPairImage,
                          title: isEn ? 'Famous Gupta Gold Coins (Obverse & Reverse)' : 'ప్రసిద్ధ గుప్త స్వర్ణ నాణేలు (ధనుర్ధారి రాజు & లక్ష్మీదేవి)',
                          subtitle: isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.famousCoinsNoteEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.famousCoinsNoteTe
                        })}
                        className="h-36 rounded-xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFDF7] cursor-pointer group relative flex items-center justify-center p-1 shadow-xs"
                      >
                        <img 
                          src={GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.goldCoinsPairImage} 
                          alt="Famous Gupta Coins" 
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                        </div>
                      </div>
                      <p className="text-xs text-[#5D4037] italic text-center bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E8DCC4]">
                        {isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.famousCoinsNoteEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.famousCoinsNoteTe}
                      </p>
                    </div>
                  </div>

                  {/* Center: Extracted Kalidasa Books & Gupta Temple Illustration */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-xs flex flex-col">
                    <div 
                      onClick={() => setLightboxImage({
                        src: GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.kalidasaTempleImage,
                        title: isEn ? 'Kalidasa’s Immortal Works & Gupta Temple Architecture' : 'మహాకవి కాళిదాసు గ్రంథాలు & గుప్త దేవాలయ శిల్పకళ',
                        subtitle: isEn ? 'Harmony of Sanskrit Literature and Stone Architecture' : 'సంస్కృత కావ్య వైభవం మరియు రాతి ఆలయ శిల్పకళా సంగమం'
                      })}
                      className="h-56 sm:h-full min-h-[210px] w-full overflow-hidden bg-[#2C1810] cursor-pointer group relative flex items-center justify-center"
                    >
                      <img 
                        src={GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.kalidasaTempleImage} 
                        alt="Kalidasa Books and Gupta Temple" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-[#FFE082]" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 text-[#FFE082] text-[10px] font-bold text-center border border-[#D4AF37]/50 backdrop-blur-xs">
                        {isEn ? 'Kalidasa Classics & Gupta Temple' : 'కాళిదాసు మహాకావ్యాలు & గుప్త ఆలయం'}
                      </div>
                    </div>
                  </div>

                  {/* Right: Decline & Eternal Legacy */}
                  <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border-2 border-[#991B1B]/50 overflow-hidden shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="bg-[#991B1B] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                        <span>📉</span>
                        <span>{isEn ? 'Decline of the Empire' : 'సామ్రాజ్య క్షీణత'}</span>
                      </div>
                      <div className="p-3.5 space-y-2 bg-[#FEF2F2]/40">
                        {(isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.declinePointsEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.declinePointsTe).map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#2C1810] leading-relaxed">
                            <span className="text-[#991B1B] font-extrabold">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legacy Quote Banner */}
                    <div className="m-3 p-3 rounded-xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border border-[#D4AF37] text-center shadow-sm">
                      <p className="text-xs italic font-semibold leading-relaxed">
                        “{isEn ? GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.legacyQuoteEn : GUPTA_EMPIRE_MANUSCRIPT_DETAILS.goldenAgePoster.legacyQuoteTe}”
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between text-xs text-[#5D4037]">
              <span>
                {isEn 
                  ? 'Gupta Empire Golden Age Illustrated Archive (c. 320–550 CE)' 
                  : 'గుప్త సామ్రాజ్య స్వర్ణయుగ సచిత్ర చారిత్రక నిధి (క్రీ.శ. 320–550)'}
              </span>
              <button
                onClick={() => setIsGuptaModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'ముగించండి'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 8. POP-UP MODAL: VIJAYANAGARA EMPIRE ILLUSTRATED ARCHIVE */}
      {/* ============================================================ */}
      {isVijayanagaraModalOpen && (
        <div 
          onClick={() => setIsVijayanagaraModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#5B0B14] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-10">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FFE082] shrink-0 bg-[#2C1810] shadow-md">
                  <img 
                    src={VIJAYANAGARA_EMPIRE_DETAILS.bannerImage} 
                    alt="Emperor Krishnadeva Raya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                      {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.taglineEn : VIJAYANAGARA_EMPIRE_DETAILS.taglineTe}
                    </span>
                    <span className="text-xs text-[#FFE082] font-extrabold font-mono">
                      {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.periodEn : VIJAYANAGARA_EMPIRE_DETAILS.periodTe}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-telugu-serif text-white mt-1">
                    {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.titleTe}
                  </h3>
                  <p className="text-xs text-[#FFE082]/90 mt-0.5">
                    {isEn 
                      ? 'Hampi, Sri Krishnadeva Raya, Temples, Ashtadiggajas, International Trade & Talikota'
                      : 'హంపి, శ్రీకృష్ణదేవరాయలు, విరూపాక్షాలయం, అష్టదిగ్గజాలు, అంతర్జాతీయ వాణిజ్యం & తళ్ళికోట'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsVijayanagaraModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">

              {/* SECTION 1: TOP HERO BANNER & CORE EMPIRE FACTS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Left: Origin & Capital (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-3">
                  <div 
                    onClick={() => setLightboxImage({
                      src: VIJAYANAGARA_EMPIRE_DETAILS.hampiCapitalImage,
                      title: isEn ? 'Vijayanagara (Hampi) – Capital of the Empire' : 'విజయనగరము (హంపి) – సామ్రాజ్య రాజధాని',
                      subtitle: isEn ? 'Rocky citadel on the Tungabhadra river' : 'తుంగభద్ర నదీ తీరాన వెలసిన రక్షిత రాజధాని'
                    })}
                    className="relative bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group h-52 sm:h-60 border border-[#D4AF37]/60 shadow-xs"
                  >
                    <img 
                      src={VIJAYANAGARA_EMPIRE_DETAILS.hampiCapitalImage} 
                      alt="Hampi Capital"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Enlarge Capital View' : 'హంపి దృశ్యం పెద్దదిగా చూడండి'}</span>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 text-[#FFE082] text-[11px] font-bold border border-[#D4AF37]/50 backdrop-blur-xs">
                      🏛️ {isEn ? 'Vijayanagara (Hampi) Capital' : 'విజయనగరము (హంపి) రాజధాని'}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.originAndRise.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.originAndRise.titleTe}</span>
                    </h4>
                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.originAndRise.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.originAndRise.pointsTe).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">★</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Geographical Extent Map & Imperial Metrics (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-3">
                  <div 
                    onClick={() => setLightboxImage({
                      src: VIJAYANAGARA_EMPIRE_DETAILS.territoryMapImage,
                      title: isEn ? 'Geographical Extent of Vijayanagara Empire (At its Height)' : 'విజయనగర సామ్రాజ్య భౌగోళిక విస్తీర్ణ పటము',
                      subtitle: isEn ? 'Krishna river to Kanyakumari, Arabian Sea to Bay of Bengal' : 'కృష్ణా నది నుండి కన్యాకుమారి వరకు, అరేబియా సముద్రం నుండి బంగాళాఖాతం వరకు'
                    })}
                    className="relative bg-[#FFFDF7] rounded-xl overflow-hidden cursor-pointer group h-52 sm:h-60 border border-[#D4AF37]/60 shadow-xs flex items-center justify-center"
                  >
                    <img 
                      src={VIJAYANAGARA_EMPIRE_DETAILS.territoryMapImage} 
                      alt="Territory Map"
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Enlarge Territory Map' : 'సామ్రాజ్య పటం పెద్దదిగా చూడండి'}</span>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 text-[#FFE082] text-[11px] font-bold border border-[#D4AF37]/50 backdrop-blur-xs">
                      🗺️ {isEn ? 'Geographical Extent (At its Height)' : 'భౌగోళిక సరిహద్దులు (ఉచ్ఛదశలో)'}
                    </div>
                  </div>

                  {/* Imperial Metric Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#E8DCC4] space-y-0.5">
                      <span className="text-[10px] text-[#8D6E63] font-bold uppercase block">👑 {isEn ? 'Founders:' : 'స్థాపకులు:'}</span>
                      <span className="font-bold text-[#7B1113] block text-[11px] leading-tight">
                        {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.foundersEn : VIJAYANAGARA_EMPIRE_DETAILS.foundersTe}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#E8DCC4] space-y-0.5">
                      <span className="text-[10px] text-[#8D6E63] font-bold uppercase block">🏛️ {isEn ? 'Capital & River:' : 'రాజధాని & నది:'}</span>
                      <span className="font-bold text-[#7B1113] block text-[11px] leading-tight">
                        {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.capitalEn : VIJAYANAGARA_EMPIRE_DETAILS.capitalTe} ({isEn ? VIJAYANAGARA_EMPIRE_DETAILS.riverEn : VIJAYANAGARA_EMPIRE_DETAILS.riverTe})
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* SECTION 2: 6 IMPORTANT RULERS OF THE VIJAYANAGARA EMPIRE */}
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                  <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                    <span>👑</span>
                    <span>{isEn ? 'Important Rulers of the Vijayanagara Empire' : 'విజయనగర సామ్రాజ్య ప్రముఖ చక్రవర్తులు'}</span>
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]">
                    1336 – 1542 CE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {VIJAYANAGARA_EMPIRE_DETAILS.importantRulers.map((ruler, rIdx) => {
                    const isKrishnadeva = ruler.nameEn.includes('Krishnadeva');
                    return (
                      <div
                        key={rIdx}
                        className={`p-3 rounded-xl border transition-all flex items-start gap-3 ${
                          isKrishnadeva
                            ? 'bg-gradient-to-br from-[#FFF9E6] to-[#FFFDF7] border-[#D4AF37] ring-2 ring-[#FFD54F] shadow-sm'
                            : 'bg-[#FFFDF7] border-[#E8DCC4] hover:border-[#D4AF37]'
                        }`}
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-[#2C1810] shadow-xs">
                          <img 
                            src={ruler.image} 
                            alt={isEn ? ruler.nameEn : ruler.nameTe}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h5 className="font-bold text-xs text-[#7B1113]">
                              {isEn ? ruler.nameEn : ruler.nameTe}
                            </h5>
                            {isKrishnadeva && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#7B1113] text-[#FFE082]">
                                {isEn ? 'Zenith' : 'స్వర్ణయుగం'}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#D84315] block">
                            {isEn ? ruler.reignEn : ruler.reignTe}
                          </span>
                          <p className="text-[11px] text-[#5D4037] leading-snug">
                            {isEn ? ruler.achievementEn : ruler.achievementTe}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: ADMINISTRATION & GOVERNANCE VS ECONOMY & TRADE */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Administration */}
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113] flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-[#D84315]" />
                        <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.administration.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.administration.titleTe}</span>
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <div 
                        onClick={() => setLightboxImage({
                          src: VIJAYANAGARA_EMPIRE_DETAILS.administration.image,
                          title: isEn ? 'Royal Inscription (Vijayanagara Period)' : 'రాచరిక శాసనము (విజయనగర కాలం)',
                          subtitle: isEn ? 'Administrative and temple grant inscriptions' : 'పరిపాలన మరియు దేవాలయ దాన శాసనాలు'
                        })}
                        className="sm:col-span-4 h-40 bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/50 relative flex items-center justify-center"
                      >
                        <img 
                          src={VIJAYANAGARA_EMPIRE_DETAILS.administration.image} 
                          alt="Royal Inscription"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                        </div>
                      </div>

                      <div className="sm:col-span-8">
                        <ul className="text-xs text-[#5D4037] space-y-1.5 pl-1">
                          {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.administration.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.administration.pointsTe).slice(0, 4).map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#D84315] font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Economy & Trade */}
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113] flex items-center gap-1.5">
                        <Wheat className="w-3.5 h-3.5 text-[#D84315]" />
                        <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.titleTe}</span>
                      </h4>
                    </div>

                    <div 
                      onClick={() => setLightboxImage({
                        src: VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.image,
                        title: isEn ? 'Trade Goods & Horse Trade from West Asia' : 'సుగంధ ద్రవ్యాలు, వస్త్రాలు, వజ్రాలు & అశ్వాల వాణిజ్యం',
                        subtitle: isEn ? 'Bustling international maritime trade' : 'అంతర్జాతీయ సముద్ర వాణిజ్యం'
                      })}
                      className="h-28 w-full bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/50 relative flex items-center justify-center"
                    >
                      <img 
                        src={VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.image} 
                        alt="Economy and Trade"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.tradeGoods.map((g, gIdx) => (
                        <div key={gIdx} className="p-1.5 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] flex items-center gap-1.5 text-[10.5px]">
                          <span>{g.icon}</span>
                          <span className="font-semibold text-[#7B1113] truncate">{isEn ? g.nameEn : g.nameTe}</span>
                        </div>
                      ))}
                    </div>

                    <ul className="text-xs text-[#5D4037] space-y-1 pl-1 pt-1">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.economyAndTrade.pointsTe).slice(0, 3).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* SECTION 4: ART, ARCHITECTURE & HAMPI MONUMENTS */}
              <div className="bg-[#FAF7F0] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                  <h4 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-2">
                    <span>🛕</span>
                    <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.titleTe}</span>
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFFFFF] text-[#D84315] border border-[#E8DCC4]">
                    {isEn ? 'Dravidian Raya Gopurams' : 'రాయ గోపుర శైలి'}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div 
                    onClick={() => setLightboxImage({
                      src: VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.image,
                      title: isEn ? 'Virupaksha Temple (Hampi)' : 'విరూపాక్ష దేవాలయం (హంపి)',
                      subtitle: isEn ? 'Towering Raya Gopuram dedicated to Lord Shiva' : 'తుంగభద్ర తీరపు వైభవోపేత రాయగోపురం'
                    })}
                    className="lg:col-span-4 h-48 sm:h-56 bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/60 shadow-sm relative flex items-center justify-center"
                  >
                    <img 
                      src={VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.image} 
                      alt="Virupaksha Temple"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                      <span>{isEn ? 'Enlarge Temple View' : 'దేవాలయం పెద్దదిగా చూడండి'}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-2">
                    <ul className="text-xs text-[#2C1810] space-y-1.5">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.pointsTe).slice(0, 4).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold text-xs">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Famous Monuments Pills */}
                    <div className="pt-2 border-t border-[#E8DCC4]">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block mb-1">
                        🏛️ {isEn ? 'World Heritage Monuments in Hampi:' : 'హంపి ప్రపంచ వారసత్వ కట్టడాలు:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.famousMonumentsEn : VIJAYANAGARA_EMPIRE_DETAILS.artAndArchitecture.famousMonumentsTe).map((m, mIdx) => (
                          <span key={mIdx} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FFFFFF] text-[#7B1113] border border-[#D4AF37]/50 shadow-2xs">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5: LITERATURE & LEARNING (TELUGU GOLDEN AGE) VS FOREIGN ACCOUNTS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Literature & Ashtadiggajas */}
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.titleTe}</span>
                    </h4>
                  </div>

                  <div className="flex items-start gap-3">
                    <div 
                      onClick={() => setLightboxImage({
                        src: VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.image,
                        title: isEn ? 'Amuktamalyada by Krishnadeva Raya' : 'శ్రీకృష్ణదేవరాయల ఆముక్తమాల్యద',
                        subtitle: isEn ? 'Golden Age of Telugu Literature & Statecraft' : 'తెలుగు సాహిత్య స్వర్ణయుగం & రాజనీతి'
                      })}
                      className="w-24 h-28 bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/50 shrink-0 relative"
                    >
                      <img 
                        src={VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.image} 
                        alt="Amuktamalyada"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                        <Maximize2 className="w-3 h-3 text-[#FFE082]" />
                      </div>
                    </div>

                    <ul className="text-[11px] text-[#5D4037] space-y-1">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.pointsTe).slice(0, 3).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#E8DCC4]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block mb-1">
                      📜 {isEn ? 'The Ashtadiggajas (Eight Great Poets):' : 'భువన విజయ సభ – అష్టదిగ్గజాలు:'}
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-[10px] text-[#5D4037]">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.ashtadiggajasEn : VIJAYANAGARA_EMPIRE_DETAILS.literatureAndLearning.ashtadiggajasTe).map((poet, pIdx) => (
                        <div key={pIdx} className="p-1 rounded bg-[#FFFDF7] border border-[#E8DCC4] truncate">
                          ★ {poet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Foreign Accounts */}
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#7B1113] flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#D84315]" />
                      <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.titleTe}</span>
                    </h4>
                  </div>

                  <div className="flex items-start gap-3">
                    <div 
                      onClick={() => setLightboxImage({
                        src: VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.image,
                        title: isEn ? 'Domingo Paes (Portuguese Chronicler)' : 'డొమింగో పేస్ (పోర్చుగీస్ యాత్రికుడు)',
                        subtitle: isEn ? 'Eye-witness to Vijayanagara’s immense wealth and grandeur' : 'హంపి నగర సంపదను ప్రత్యక్షంగా వీక్షించిన యాత్రికుడు'
                      })}
                      className="w-24 h-28 bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/50 shrink-0 relative"
                    >
                      <img 
                        src={VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.image} 
                        alt="Domingo Paes"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                        <Maximize2 className="w-3 h-3 text-[#FFE082]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-[#7B1113] uppercase block">
                        🌍 {isEn ? 'Renowned Foreign Chroniclers:' : 'ప్రసిద్ధ విదేశీ యాత్రికులు:'}
                      </span>
                      <ul className="text-[11px] text-[#5D4037] space-y-1">
                        {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.travellersEn : VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.travellersTe).slice(0, 3).map((tr, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span>{tr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFF8E1] border border-[#FFE082] text-[11px] text-[#2C1810] italic leading-snug">
                    {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.highlightsEn : VIJAYANAGARA_EMPIRE_DETAILS.foreignAccounts.highlightsTe)[0]}
                  </div>
                </div>

              </div>

              {/* SECTION 6: DECLINE & BATTLE OF TALIKOTA (1565 CE) */}
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#E8DCC4] shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                  <h4 className="font-bold text-sm text-[#7B1113] flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#D84315]" />
                    <span>{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.decline.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.decline.titleTe}</span>
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFF8E1] text-[#D84315] border border-[#FFE082]">
                    {isEn ? VIJAYANAGARA_EMPIRE_DETAILS.decline.battleEn : VIJAYANAGARA_EMPIRE_DETAILS.decline.battleTe}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div 
                    onClick={() => setLightboxImage({
                      src: VIJAYANAGARA_EMPIRE_DETAILS.decline.image,
                      title: isEn ? VIJAYANAGARA_EMPIRE_DETAILS.decline.battleEn : VIJAYANAGARA_EMPIRE_DETAILS.decline.battleTe,
                      subtitle: isEn ? 'The fateful conflict leading to the destruction of Hampi' : 'హంపి విధ్వంసానికి దారితీసిన విషాద పోరు'
                    })}
                    className="sm:col-span-4 h-36 bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/50 relative flex items-center justify-center"
                  >
                    <img 
                      src={VIJAYANAGARA_EMPIRE_DETAILS.decline.image} 
                      alt="Battle of Talikota"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                    </div>
                  </div>

                  <div className="sm:col-span-8">
                    <ul className="text-xs text-[#5D4037] space-y-1.5 pl-1">
                      {(isEn ? VIJAYANAGARA_EMPIRE_DETAILS.decline.pointsEn : VIJAYANAGARA_EMPIRE_DETAILS.decline.pointsTe).slice(0, 4).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D84315] font-bold">⚠️</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION 7: STONE CHARIOT & ETERNAL LEGACY BANNER */}
              <div className="bg-[#FAF7F0] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-sm space-y-3">
                <div 
                  onClick={() => setLightboxImage({
                    src: VIJAYANAGARA_EMPIRE_DETAILS.stoneChariotImage,
                    title: isEn ? 'Vitthala Temple Stone Chariot (Hampi)' : 'హంపి విఠల దేవాలయ రాతి రథము',
                    subtitle: isEn ? 'Eternal icon of South Indian architecture & heritage' : 'దక్షిణ భారత వాస్తు శిల్ప కళా శిఖరం'
                  })}
                  className="h-44 sm:h-52 w-full bg-[#2C1810] rounded-xl overflow-hidden cursor-pointer group border border-[#D4AF37]/60 relative flex items-center justify-center shadow-inner"
                >
                  <img 
                    src={VIJAYANAGARA_EMPIRE_DETAILS.stoneChariotImage} 
                    alt="Stone Chariot Hampi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                    <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                    <span>{isEn ? 'Enlarge Stone Chariot' : 'రాతి రథం చిత్రం పెద్దదిగా చూడండి'}</span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 text-[#FFE082] text-[11px] font-bold border border-[#D4AF37]/50 backdrop-blur-xs">
                    🛕 {isEn ? 'Vitthala Temple Stone Chariot, Hampi' : 'హంపి విఠలాలయ రాతి రథము'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 text-center space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7B1113] block">
                    ✨ {isEn ? 'Eternal Legacy of Vijayanagara:' : 'విజయనగర సామ్రాజ్య శాశ్వత వారసత్వం:'}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#7B1113] italic font-telugu-serif">
                    "{isEn ? VIJAYANAGARA_EMPIRE_DETAILS.legacyQuoteEn : VIJAYANAGARA_EMPIRE_DETAILS.legacyQuoteTe}"
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => setLightboxImage({
                  src: './images/indian_history/vijayanagara_empire_infographic.jpg',
                  title: isEn ? VIJAYANAGARA_EMPIRE_DETAILS.titleEn : VIJAYANAGARA_EMPIRE_DETAILS.titleTe,
                  subtitle: isEn ? VIJAYANAGARA_EMPIRE_DETAILS.taglineEn : VIJAYANAGARA_EMPIRE_DETAILS.taglineTe
                })}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Full Infographic Poster' : 'మూల చార్ట్ పూర్తి పరిమాణంలో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsVijayanagaraModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 9. POP-UP MODAL: SOUTH INDIAN DYNASTIES (PALLAVAS & CHOLAS) */}
      {/* ============================================================ */}
      <SouthIndianDynastiesModal
        isOpen={isSouthDynastiesModalOpen}
        onClose={() => setIsSouthDynastiesModalOpen(false)}
        isEn={isEn}
        initialTab={selectedSouthTab}
        onOpenImage={(src, title, subtitle) => setLightboxImage({ src, title, subtitle })}
      />

      {/* ============================================================ */}
      {/* 10. POP-UP MODAL: THE MUGHAL EMPIRE COMPLETE TIMELINE (1526–1857) */}
      {/* ============================================================ */}
      {isMughalModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsMughalModalOpen(false)}
        >
          <div
            className="bg-[#FAF5E8] rounded-3xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#4A0B0D] via-[#6D1417] to-[#4A0B0D] p-4 sm:p-5 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-extrabold uppercase tracking-wider">
                    {isEn ? 'Early Modern & Imperial Era' : 'మధ్యయుగ మలిదశ & మొఘల్ సామ్రాజ్య కాలక్రమం'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold border border-[#D4AF37]/60">
                    {isEn ? '1526 – 1857 CE' : 'క్రీ.శ. 1526 – 1857'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFE082] font-telugu-serif">
                  {isEn ? 'THE MUGHAL EMPIRE — COMPLETE TIMELINE • 1526–1857' : 'మొఘల్ సామ్రాజ్యము — సంపూర్ణ చారిత్రక కాలక్రమ ప్రవాహము (1526–1857)'}
                </h3>
              </div>

              <button
                onClick={() => setIsMughalModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-[#FFE082] transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* Top Overview & Full Poster Button */}
              <div className="bg-[#FFFDF7] rounded-2xl border border-[#D4AF37] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed">
                  {isEn 
                    ? 'Chronological flow from Babur (First Battle of Panipat, 1526), Humayun & Sher Shah Suri, Akbar, Jahangir, Shah Jahan, and Aurangzeb to the Later Mughals and the 1857 Uprising.'
                    : 'మొదటి పానిపట్ యుద్ధం (1526 - బాబర్) నుండి హుమాయూన్, షేర్ షా సూరి, అక్బర్, జహంగీర్, షాజహాన్, ఔరంగజేబు మరియు మలి మొఘలుల పాలన నుండి 1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం వరకు వరుస కాలక్రమం.'}
                </p>
                <button
                  onClick={() => {
                    setLightboxImage({
                      src: './images/indian_history/mughal_empire_timeline_poster.jpg',
                      title: isEn ? 'The Mughal Empire – Complete Timeline (1526–1857)' : 'మొఘల్ సామ్రాజ్య సంపూర్ణ కాలక్రమ పట్టిక (1526–1857)',
                      subtitle: isEn 
                        ? 'Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb & Later Mughals' 
                        : 'బాబర్, హుమాయూన్, అక్బర్, జహంగీర్, షాజహాన్, ఔరంగజేబు & మలి మొఘలులు'
                    });
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] hover:bg-[#4A0B0D] text-[#FFE082] inline-flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors shrink-0 border border-[#D4AF37]"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                  <span>{isEn ? 'View Original Mughal Timeline Chart in HD' : 'మొఘల్ మూల కాలక్రమ చార్ట్ HD లో చూడండి'}</span>
                </button>
              </div>

              {/* Chronological Step-by-Step Era Cards (1 to 7) with Extracted & Enhanced Illustrations */}
              <div className="space-y-4">
                {MUGHAL_EMPIRE_TIMELINE.map((era, index) => (
                  <React.Fragment key={era.order}>
                    <div 
                      className="rounded-2xl border-2 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all space-y-4"
                      style={{ backgroundColor: era.bgColor, borderColor: era.borderColor }}
                    >
                      {/* Top Ribbon: Order Number, Emperor Portrait, Ruler Name & Reign */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DCC4] pb-3">
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-8 h-8 rounded-xl text-[#FFE082] font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0 border border-[#D4AF37]"
                            style={{ backgroundColor: era.badgeColor }}
                          >
                            {era.order}
                          </span>
                          {era.portrait && (
                            <div
                              onClick={() => setLightboxImage({
                                src: era.portrait!.src,
                                title: isEn ? era.portrait!.captionEn : era.portrait!.captionTe,
                                subtitle: isEn ? era.portrait!.tagEn : era.portrait!.tagTe
                              })}
                              className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-sm shrink-0 cursor-pointer group relative bg-[#FFFDF7]"
                              title={isEn ? 'Click to enlarge Emperor portrait' : 'చక్రవర్తి చిత్రపటాన్ని పెద్దదిగా చూడండి'}
                            >
                              <img
                                src={era.portrait.src}
                                alt={isEn ? era.portrait.captionEn : era.portrait.captionTe}
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div>
                            <h5 className="font-extrabold text-sm sm:text-base text-[#3E1305] font-telugu-serif">
                              {isEn ? era.rulerEn : era.rulerTe}
                            </h5>
                            {era.portrait && (
                              <span className="text-[11px] font-bold text-[#7B1113] block">
                                👑 {isEn ? era.portrait.tagEn : era.portrait.tagTe}
                              </span>
                            )}
                          </div>
                        </div>

                        <span 
                          className="px-3 py-1 rounded-full text-xs font-extrabold text-[#FFE082] border border-[#D4AF37] shadow-2xs self-start sm:self-auto flex items-center gap-1.5"
                          style={{ backgroundColor: era.badgeColor }}
                        >
                          <Clock className="w-3.5 h-3.5 text-[#FFE082]" />
                          <span>{isEn ? era.reignEn : era.reignTe}</span>
                        </span>
                      </div>

                      {/* Content Grid: Left = Chronological Events, Right = Extracted & Enhanced Illustrations */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                        
                        {/* Key Events Bullet List */}
                        <div className="lg:col-span-6 space-y-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B1113] block">
                            {isEn ? 'Chronological Milestones & Reforms:' : 'చారిత్రక సంఘటనలు, యుద్ధాలు & నిర్మాణాలు:'}
                          </span>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C1810]">
                            {(isEn ? era.eventsEn : era.eventsTe).map((ev, evIdx) => (
                              <li key={evIdx} className="flex items-start gap-2 leading-relaxed bg-[#FFFFFF]/80 p-2 rounded-xl border border-[#E8DCC4]">
                                <span className="text-[#D84315] font-extrabold mt-0.5">•</span>
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Extracted & Enhanced Source Illustrations */}
                        <div className={`lg:col-span-6 grid grid-cols-1 ${era.images.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-2.5`}>
                          {era.images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx}
                              onClick={() => setLightboxImage({
                                src: img.src,
                                title: isEn ? img.captionEn : img.captionTe,
                                subtitle: `${isEn ? era.rulerEn : era.rulerTe} (${isEn ? era.reignEn : era.reignTe})`
                              })}
                              className="bg-[#FFFFFF] rounded-xl border-2 border-[#D4AF37]/80 hover:border-[#7B1113] overflow-hidden shadow-xs cursor-pointer group flex flex-col justify-between transition-all"
                              title={isEn ? 'Click to enlarge illustration' : 'చిత్రం పెద్దదిగా చూడండి'}
                            >
                              <div className="h-28 sm:h-32 w-full bg-[#FFFDF7] p-1 flex items-center justify-center relative overflow-hidden">
                                <img 
                                  src={img.src} 
                                  alt={isEn ? img.captionEn : img.captionTe} 
                                  className="max-h-full max-w-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <Maximize2 className="w-4 h-4 text-[#FFE082]" />
                                </div>
                              </div>
                              <div className="px-2 py-1.5 bg-[#FAF5E8] border-t border-[#E8DCC4] text-center">
                                <span className="text-[10px] font-bold text-[#4E342E] leading-tight block">
                                  {isEn ? img.captionEn : img.captionTe}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Downward Flow Connector between Mughal Rulers */}
                    {index < MUGHAL_EMPIRE_TIMELINE.length - 1 && (
                      <div className="flex flex-col items-center -my-2">
                        <div className="w-0.5 h-4 bg-[#7B1113]"></div>
                        <ArrowDown className="w-4 h-4 text-[#7B1113]" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom Last-Minute Chronological Revision Strip (1526–1857) */}
              <div className="bg-gradient-to-r from-[#3E080A] via-[#5C1013] to-[#3E080A] rounded-2xl border-2 border-[#D4AF37] p-4 space-y-3 shadow-md">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#D4AF37]/40 pb-2">
                  <span className="text-xs sm:text-sm font-extrabold text-[#FFE082] uppercase tracking-wider flex items-center gap-2">
                    <span>⚡</span>
                    <span>{isEn ? 'Last-Minute Chronological Revision Strip (1526 – 1857)' : 'సత్వర కాలక్రమ పునశ్చరణ పట్టిక (1526 – 1857)'}</span>
                  </span>
                  <span className="text-[10px] text-white/80 font-semibold">
                    {isEn ? '11 Key Turning Points' : '11 ప్రధాన మైలురాళ్ళు'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {MUGHAL_REVISION_STRIP.map((m, idx) => (
                    <div 
                      key={idx}
                      className="bg-black/30 rounded-xl p-2.5 border border-[#D4AF37]/50 text-center space-y-1 hover:border-[#FFE082] transition-colors"
                    >
                      <span className="text-xs font-extrabold text-[#FFE082] block font-mono">
                        {m.year}
                      </span>
                      <span className="text-[10px] text-white/95 leading-snug block font-medium">
                        {isEn ? m.labelEn : m.labelTe}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appended Section: MUGHAL EMPIRE — PROVINCES (SUBAS) & CAPITALS MAP */}
              <div className="rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-b from-[#0E2229] via-[#132C35] to-[#0E2229] p-4 sm:p-6 space-y-5 shadow-xl text-white">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#0E2229] text-[10px] font-extrabold uppercase tracking-wider inline-block">
                      {isEn ? 'Imperial Administrative Geography' : 'మొఘల్ సామ్రాజ్య పరిపాలనా భూగోళం'}
                    </span>
                    <h4 className="text-base sm:text-xl font-extrabold text-[#FFE082] font-telugu-serif">
                      {isEn 
                        ? 'MUGHAL EMPIRE: PROVINCES (SUBAS) & CAPITALS — THE MIGHTY EMPIRE OF INDIA' 
                        : 'మొఘల్ సామ్రాజ్యము: ప్రావిన్సులు (సుబాలు) & రాజధానులు — విస్తార సామ్రాజ్య పటం'}
                    </h4>
                  </div>

                  <button
                    onClick={() => setLightboxImage({
                      src: './images/indian_history/mughal_timeline/mughal_provinces_capitals_map.jpg',
                      title: isEn ? 'Mughal Empire: Provinces (Subas) & Capitals' : 'మొఘల్ సామ్రాజ్యము: ప్రావిన్సులు (సుబాలు) & రాజధానుల పటం',
                      subtitle: isEn 
                        ? 'Imperial Boundaries, Subas, Capitals & Contemporary Deccan Sultanates' 
                        : 'సామ్రాజ్య సరిహద్దులు, సుబాలు, రాజధానులు మరియు సమకాలీన దక్కన్ సుల్తానులు & విజయనగర సామ్రాజ్యం'
                    })}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FFE082] hover:bg-white text-[#0E2229] inline-flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#7B1113]" />
                    <span>{isEn ? 'Enlarge Map in HD' : 'పటాన్ని పెద్దదిగా (HD) చూడండి'}</span>
                  </button>
                </div>

                {/* Main Content Grid: Left = High-Res Map Image, Right = Provinces, Capitals & At A Glance */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                  {/* Left Column: Full Map Poster */}
                  <div className="lg:col-span-6">
                    <div
                      onClick={() => setLightboxImage({
                        src: './images/indian_history/mughal_timeline/mughal_provinces_capitals_map.jpg',
                        title: isEn ? 'Mughal Empire: Provinces (Subas) & Capitals' : 'మొఘల్ సామ్రాజ్యము: ప్రావిన్సులు (సుబాలు) & రాజధానుల పటం',
                        subtitle: isEn 
                          ? 'Imperial Boundaries, Subas, Capitals & Contemporary Deccan Sultanates' 
                          : 'సామ్రాజ్య సరిహద్దులు, సుబాలు, రాజధానులు మరియు సమకాలీన దక్కన్ సుల్తానులు & విజయనగర సామ్రాజ్యం'
                      })}
                      className="rounded-2xl border-2 border-[#D4AF37] overflow-hidden bg-[#09171C] shadow-lg cursor-pointer group relative"
                      title={isEn ? 'Click to view full-screen map' : 'పూర్తి పటం చూడటానికి క్లిక్ చేయండి'}
                    >
                      <img
                        src="./images/indian_history/mughal_timeline/mughal_provinces_capitals_map.jpg"
                        alt={isEn ? 'Mughal Empire Provinces and Capitals Map' : 'మొఘల్ సామ్రాజ్య ప్రావిన్సులు మరియు రాజధానుల పటం'}
                        className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="p-2.5 bg-[#0A191F] border-t border-[#D4AF37]/40 flex items-center justify-between text-xs text-[#FFE082]">
                        <span className="font-bold">
                          🗺️ {isEn ? 'Mughal Empire – Provinces (Subas) & Capitals' : 'మొఘల్ సామ్రాజ్య సుబాలు & రాజధానుల చారిత్రక పటం'}
                        </span>
                        <span className="text-[10px] text-white/80 flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" />
                          {isEn ? 'Click to Zoom' : 'జూమ్ చేయండి'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Structured Provinces, Legend & At A Glance */}
                  <div className="lg:col-span-6 space-y-4">
                    {/* At A Glance Box */}
                    <div className="rounded-xl bg-[#16352B]/90 border border-[#D4AF37]/70 p-3.5 space-y-2">
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#FFE082] uppercase tracking-wider flex items-center gap-1.5">
                        <span>👑</span>
                        <span>{isEn ? 'At a Glance — The Mighty Empire' : 'ముఖ్య విశేషాలు (At a Glance)'}</span>
                      </h5>
                      <ul className="space-y-1.5 text-xs text-white/95 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <span className="text-[#FFE082] font-bold">•</span>
                          <span>
                            {isEn 
                              ? 'The Mughal Empire was one of the largest empires in Indian history.' 
                              : 'మొఘల్ సామ్రాజ్యం భారతదేశ చరిత్రలో అతిపెద్ద సామ్రాజ్యాలలో ఒకటి.'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#FFE082] font-bold">•</span>
                          <span>
                            {isEn 
                              ? 'It consisted of vast provinces (Subas) each governed from important strategic capitals.' 
                              : 'ఇది విస్తారమైన ప్రావిన్సులుగా (సుబాలు - Subas) విభజించబడి, కీలక రాజధానుల నుండి పాలించబడింది.'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#FFE082] font-bold">•</span>
                          <span>
                            {isEn 
                              ? 'The Deccan Sultanates (Ahmadnagar, Golconda, Bijapur, Bidar) and Vijayanagar were important contemporary powers.' 
                              : 'దక్కన్ సుల్తానులు (అహ్మద్‌నగర్, గోల్కొండ, బీజాపూర్, బీదర్) మరియు విజయనగర సామ్రాజ్యం సమకాలీన ప్రధాన శక్తులుగా ఉండేవి.'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#FFE082] font-bold">•</span>
                          <span>
                            {isEn 
                              ? 'Left behind a rich legacy of provincial administration (Subahdari system), culture, and architecture.' 
                              : 'సుబాదారీ పరిపాలనా వ్యవస్థ, సంస్కృతి మరియు వాస్తుశిల్పంలో గొప్ప వారసత్వాన్ని అందించింది.'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Major Mughal Subas & Their Capitals */}
                    <div className="rounded-xl bg-black/30 border border-[#D4AF37]/50 p-3.5 space-y-2.5">
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#FFE082] uppercase tracking-wider">
                        🏛️ {isEn ? 'Major Mughal Provinces (Subas) & Key Cities' : 'ప్రధాన మొఘల్ ప్రావిన్సులు (సుబాలు) & రాజధానులు'}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                          <strong className="text-[#FFE082] block">{isEn ? 'Northern & Core Subas:' : 'ఉత్తర & కేంద్ర సుబాలు:'}</strong>
                          <span className="text-white/90">
                            {isEn 
                              ? 'Delhi (Delhi, Panipat), Agra (Agra, Fatehpur), Lahore (Lahore), Kashmir (Srinagar), Awadh, Allahabad' 
                              : 'ఢిల్లీ (ఢిల్లీ, పానిపట్), ఆగ్రా (ఆగ్రా, ఫతేపూర్), లాహోర్, కాశ్మీర్ (శ్రీనగర్), అవధ్, అలహాబాద్'}
                          </span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                          <strong className="text-[#FFE082] block">{isEn ? 'North-Western Frontier:' : 'వాయువ్య సరిహద్దు సుబాలు:'}</strong>
                          <span className="text-white/90">
                            {isEn 
                              ? 'Kabul (Kabul, Ghazni), Qandahar (Qandahar), Multan (Multan), Thatta (Sindh)' 
                              : 'కాబూల్ (కాబూల్, గజనీ), కాందహార్, ముల్తాన్, థట్టా (సింధ్)'}
                          </span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                          <strong className="text-[#FFE082] block">{isEn ? 'Western & Central Subas:' : 'పశ్చిమ & మధ్య భారత సుబాలు:'}</strong>
                          <span className="text-white/90">
                            {isEn 
                              ? 'Ajmer (Ajmer, Ranthambhore), Gujarat (Ahmadabad, Cambay, Surat), Malwa (Ujjain, Mandu), Berar (Ellichpur)' 
                              : 'అజ్మీర్ (అజ్మీర్, రణథంబోర్), గుజరాత్ (అహ్మదాబాద్, సూరత్, కాంబే), మాల్వా (ఉజ్జయిని, మాండు), బేరార్ (ఎల్లిచ్‌పూర్)'}
                          </span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                          <strong className="text-[#FFE082] block">{isEn ? 'Eastern Subas:' : 'తూర్పు సుబాలు:'}</strong>
                          <span className="text-white/90">
                            {isEn 
                              ? 'Bihar (Patna), Bengal (Dacca, Tanda)' 
                              : 'బీహార్ (పాట్నా), బెంగాల్ (ఢాకా, తాండా)'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contemporary Southern & Neighboring Powers on the Map */}
                    <div className="rounded-xl bg-black/30 border border-[#D4AF37]/50 p-3.5 space-y-1.5 text-[11px]">
                      <h5 className="text-xs font-extrabold text-[#FFE082] uppercase tracking-wider">
                        🧭 {isEn ? 'Contemporary Deccan, Southern & Neighboring States' : 'సమకాలీన దక్కన్, దక్షిణ భారత & పొరుగు రాజ్యాలు'}
                      </h5>
                      <p className="text-white/90 leading-relaxed">
                        <strong className="text-[#FFE082]">{isEn ? 'Deccan Sultanates: ' : 'దక్కన్ సుల్తానులు: '}</strong>
                        {isEn 
                          ? 'Ahmadnagar (Daulatabad, Ahmadnagar), Bijapur (Bijapur), Golconda (Golkonda, Masulipatam).' 
                          : 'అహ్మద్‌నగర్ (దౌలతాబాద్, అహ్మద్‌నగర్), బీజాపూర్, గోల్కొండ (గోల్కొండ, మచిలీపట్నం).'}
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        <strong className="text-[#FFE082]">{isEn ? 'Southern & Neighboring Powers: ' : 'దక్షిణ భారత & పొరుగు శక్తులు: '}</strong>
                        {isEn 
                          ? 'Vijayanagar Empire (Vijayanagar, Penukonda, Calicut), Independent Chiefs (Gondwana, Cuttack), Uzbek Khanate (Balkh, Bukhara), Safavid Empire, and Portuguese ports (Goa, Diu, Daman).' 
                          : 'విజయనగర సామ్రాజ్యం (విజయనగరం, పెనుకొండ, కాలికట్), స్వతంత్ర సామంతులు (గోండ్వానా, కటక్), ఉజ్బెక్ ఖానేట్ (బల్ఖ్, బుఖారా), సఫావిద్ సామ్రాజ్యం మరియు పోర్చుగీసు స్థావరాలు (గోవా, డయ్యూ, డామన్).'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => setLightboxImage({
                  src: './images/indian_history/mughal_empire_timeline_poster.jpg',
                  title: isEn ? 'The Mughal Empire – Complete Timeline (1526–1857)' : 'మొఘల్ సామ్రాజ్య సంపూర్ణ కాలక్రమ పట్టిక (1526–1857)',
                  subtitle: isEn 
                    ? 'Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb & Later Mughals' 
                    : 'బాబర్, హుమాయూన్, అక్బర్, జహంగీర్, షాజహాన్, ఔరంగజేబు & మలి మొఘలులు'
                })}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Full Timeline Poster' : 'మూల కాలక్రమ చార్ట్ పూర్తి పరిమాణంలో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsMughalModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 11. POP-UP MODAL: THE MAURYAN DYNASTY (321–185 BCE) */}
      {/* ============================================================ */}
      {isMauryaModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsMauryaModalOpen(false)}
        >
          <div
            className="bg-[#FAF5E8] rounded-3xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#5D1906] via-[#8D280B] to-[#5D1906] p-4 sm:p-5 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#5D1906] text-[10px] font-extrabold uppercase tracking-wider">
                    {isEn ? 'First Pan-Indian Imperial Power' : 'తొలి అఖిల భారత సామ్రాజ్య శక్తి'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold border border-[#D4AF37]/60">
                    {isEn ? MAURYAN_DYNASTY_DETAILS.periodEn : MAURYAN_DYNASTY_DETAILS.periodTe}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFE082] font-telugu-serif">
                  {isEn ? MAURYAN_DYNASTY_DETAILS.titleEn : MAURYAN_DYNASTY_DETAILS.titleTe}
                </h3>
                <p className="text-xs text-white/90">
                  {isEn ? MAURYAN_DYNASTY_DETAILS.taglineEn : MAURYAN_DYNASTY_DETAILS.taglineTe}
                </p>
              </div>

              <button
                onClick={() => setIsMauryaModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-[#FFE082] transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* Top Quote & Full Poster Trigger */}
              <div className="bg-[#FFFDF7] rounded-2xl border border-[#D4AF37] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <p className="text-xs sm:text-sm font-semibold italic text-[#7B1113] font-telugu-serif leading-relaxed">
                  {isEn ? MAURYAN_DYNASTY_DETAILS.headerQuoteEn : MAURYAN_DYNASTY_DETAILS.headerQuoteTe}
                </p>
                <button
                  onClick={() => setLightboxImage({
                    src: MAURYAN_DYNASTY_DETAILS.posterSrc,
                    title: isEn ? MAURYAN_DYNASTY_DETAILS.titleEn : MAURYAN_DYNASTY_DETAILS.titleTe,
                    subtitle: isEn ? MAURYAN_DYNASTY_DETAILS.taglineEn : MAURYAN_DYNASTY_DETAILS.taglineTe
                  })}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] hover:bg-[#4A0B0D] text-[#FFE082] inline-flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors shrink-0 border border-[#D4AF37]"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                  <span>{isEn ? 'View Original Mauryan Dynasty Chart in HD' : 'మౌర్య సామ్రాజ్య మూల చార్ట్ HD లో చూడండి'}</span>
                </button>
              </div>

              {/* 1. KEY RULERS & STATESMEN (4 Portraits) + EXTENT OF THE EMPIRE MAP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Key Rulers (8 cols) */}
                <div className="lg:col-span-8 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2.5">
                    <h4 className="text-base sm:text-lg font-extrabold text-[#7B1113] font-telugu-serif flex items-center gap-2">
                      <span>👑</span>
                      <span>{isEn ? 'Key Rulers & Statesmen of the Mauryan Empire' : 'మౌర్య సామ్రాజ్య ప్రధాన పాలకులు & రాజనీతిజ్ఞులు'}</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {MAURYAN_DYNASTY_DETAILS.keyRulers.map((ruler, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-[#FAF5E8] border border-[#D4AF37]/80 p-3 flex flex-col gap-2.5 shadow-2xs hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            onClick={() => setLightboxImage({
                              src: ruler.image,
                              title: isEn ? ruler.nameEn : ruler.nameTe,
                              subtitle: isEn ? ruler.reignEn : ruler.reignTe
                            })}
                            className="w-16 h-20 rounded-xl overflow-hidden border-2 border-[#7B1113] shrink-0 cursor-pointer group relative bg-[#FFFDF7] shadow-xs"
                            title={isEn ? 'Click to enlarge portrait' : 'చిత్రం పెద్దదిగా చూడండి'}
                          >
                            <img
                              src={ruler.image}
                              alt={isEn ? ruler.nameEn : ruler.nameTe}
                              className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h5 className="font-extrabold text-xs sm:text-sm text-[#3E1305] font-telugu-serif">
                              {isEn ? ruler.nameEn : ruler.nameTe}
                            </h5>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">
                              {isEn ? ruler.reignEn : ruler.reignTe}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-1 text-[11px] sm:text-xs text-[#2C1810] border-t border-[#E8DCC4] pt-2">
                          {(isEn ? ruler.pointsEn : ruler.pointsTe).map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1.5 leading-snug">
                              <span className="text-[#D84315] font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extent of the Empire Map (4 cols) */}
                <div className="lg:col-span-4 bg-[#FFFDF7] rounded-2xl border-2 border-[#0F5257] p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="space-y-1 border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-base sm:text-lg font-extrabold text-[#0F5257] font-telugu-serif flex items-center gap-2">
                      <span>🗺️</span>
                      <span>{isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.titleEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.titleTe}</span>
                    </h4>
                    <p className="text-[11px] text-[#5D4037] font-semibold">
                      {isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.subtitleEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.subtitleTe}
                    </p>
                  </div>

                  <div
                    onClick={() => setLightboxImage({
                      src: MAURYAN_DYNASTY_DETAILS.extentOfEmpire.mapImage,
                      title: isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.titleEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.titleTe,
                      subtitle: isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.descriptionEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.descriptionTe
                    })}
                    className="rounded-xl border-2 border-[#D4AF37] overflow-hidden cursor-pointer group relative bg-[#FAF5E8] shadow-xs"
                    title={isEn ? 'Click to enlarge Mauryan Empire Map' : 'మౌర్య సామ్రాజ్య పటం పెద్దదిగా చూడండి'}
                  >
                    <img
                      src={MAURYAN_DYNASTY_DETAILS.extentOfEmpire.mapImage}
                      alt={isEn ? 'Extent of the Mauryan Empire' : 'మౌర్య సామ్రాజ్య విస్తరణ పటం'}
                      className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs text-[#2C1810] bg-[#FAF5E8] p-2.5 rounded-xl border border-[#E8DCC4] leading-relaxed">
                    {isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.descriptionEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.descriptionTe}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F5257] block">
                      {isEn ? 'Key Imperial Centres on Map:' : 'పటంలోని ప్రధాన కేంద్రాలు:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isEn ? MAURYAN_DYNASTY_DETAILS.extentOfEmpire.keyCentersEn : MAURYAN_DYNASTY_DETAILS.extentOfEmpire.keyCentersTe).map((center, cIdx) => (
                        <span key={cIdx} className="px-2 py-0.5 rounded-md bg-[#E0F2F1] text-[#0F5257] border border-[#0F5257]/30 text-[10px] font-bold">
                          {center}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ADMINISTRATION, ECONOMY & SOCIETY, AND ASHOKA'S DHAMMA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Administration */}
                <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#1E3A8A] p-4 sm:p-5 space-y-3 shadow-sm">
                  <div className="border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#1E3A8A] font-telugu-serif">
                      🏛️ {isEn ? MAURYAN_DYNASTY_DETAILS.administration.titleEn : MAURYAN_DYNASTY_DETAILS.administration.titleTe}
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {MAURYAN_DYNASTY_DETAILS.administration.items.map((item, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#CBD5E1] space-y-0.5">
                        <div className="flex items-center gap-1.5 font-extrabold text-xs text-[#1E3A8A]">
                          <span>{item.icon}</span>
                          <span>{isEn ? item.titleEn : item.titleTe}</span>
                        </div>
                        <p className="text-[11px] text-[#334155] leading-relaxed">
                          {isEn ? item.descEn : item.descTe}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Economy and Society */}
                <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#065F46] p-4 sm:p-5 space-y-3 shadow-sm">
                  <div className="border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#065F46] font-telugu-serif">
                      🌾 {isEn ? MAURYAN_DYNASTY_DETAILS.economyAndSociety.titleEn : MAURYAN_DYNASTY_DETAILS.economyAndSociety.titleTe}
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {MAURYAN_DYNASTY_DETAILS.economyAndSociety.items.map((item, idx) => (
                      <div key={idx} className="bg-[#ECFDF5]/60 p-2.5 rounded-xl border border-[#A7F3D0] space-y-0.5">
                        <div className="flex items-center gap-1.5 font-extrabold text-xs text-[#065F46]">
                          <span>{item.icon}</span>
                          <span>{isEn ? item.titleEn : item.titleTe}</span>
                        </div>
                        <p className="text-[11px] text-[#1E293B] leading-relaxed">
                          {isEn ? item.descEn : item.descTe}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ashoka's Dhamma */}
                <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#9A3412] p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="space-y-3">
                    <div className="border-b border-[#E8DCC4] pb-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#9A3412] font-telugu-serif flex items-center gap-2">
                        <span>☸️</span>
                        <span>{isEn ? MAURYAN_DYNASTY_DETAILS.ashokasDhamma.titleEn : MAURYAN_DYNASTY_DETAILS.ashokasDhamma.titleTe}</span>
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs text-[#2C1810]">
                      {(isEn ? MAURYAN_DYNASTY_DETAILS.ashokasDhamma.pointsEn : MAURYAN_DYNASTY_DETAILS.ashokasDhamma.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FFF7ED] p-2.5 rounded-xl border border-[#FED7AA] leading-relaxed">
                          <span className="text-[#D84315] font-extrabold">☸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#9A3412] text-[#FFE082] text-xs italic font-semibold text-center shadow-xs">
                    {isEn ? MAURYAN_DYNASTY_DETAILS.ashokasDhamma.quoteEn : MAURYAN_DYNASTY_DETAILS.ashokasDhamma.quoteTe}
                  </div>
                </div>
              </div>

              {/* 3. IMPORTANT SITES & MONUMENTS + LEGACY OF THE MAURYAS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Monuments (7 cols) */}
                <div className="lg:col-span-7 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 space-y-4 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      🗿 {isEn ? 'Important Sites and Monuments' : 'ముఖ్యమైన కట్టడాలు మరియు స్మారక చిహ్నాలు'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {MAURYAN_DYNASTY_DETAILS.monuments.map((mon, idx) => (
                        <div
                          key={idx}
                          onClick={() => setLightboxImage({
                            src: mon.image,
                            title: isEn ? mon.nameEn : mon.nameTe,
                            subtitle: isEn ? mon.captionEn : mon.captionTe
                          })}
                          className="rounded-xl border-2 border-[#D4AF37] overflow-hidden bg-[#FAF5E8] flex flex-col justify-between cursor-pointer group hover:border-[#7B1113] transition-all shadow-xs"
                          title={isEn ? 'Click to enlarge monument image' : 'చిత్రం పెద్దదిగా చూడండి'}
                        >
                          <div className="h-32 bg-[#FFFDF7] p-1.5 flex items-center justify-center overflow-hidden">
                            <img
                              src={mon.image}
                              alt={isEn ? mon.nameEn : mon.nameTe}
                              className="max-h-full max-w-full object-contain rounded group-hover:scale-108 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-2.5 border-t border-[#E8DCC4] text-center space-y-0.5">
                            <h5 className="font-extrabold text-xs text-[#7B1113] font-telugu-serif">
                              {isEn ? mon.nameEn : mon.nameTe}
                            </h5>
                            <p className="text-[10px] text-[#5D4037] leading-snug">
                              {isEn ? mon.captionEn : mon.captionTe}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pataliputra Panorama Banner */}
                  <div
                    onClick={() => setLightboxImage({
                      src: MAURYAN_DYNASTY_DETAILS.panoramaSrc,
                      title: isEn ? 'Grand Imperial Capital of Pataliputra' : 'మౌర్య సామ్రాజ్య రాజధాని పాటలీపుత్ర మహా నగర దృశ్యం',
                      subtitle: isEn ? MAURYAN_DYNASTY_DETAILS.legacy.closingQuoteEn : MAURYAN_DYNASTY_DETAILS.legacy.closingQuoteTe
                    })}
                    className="rounded-xl border-2 border-[#D4AF37] overflow-hidden cursor-pointer group bg-[#FAF5E8] shadow-xs"
                  >
                    <img
                      src={MAURYAN_DYNASTY_DETAILS.panoramaSrc}
                      alt={isEn ? 'Pataliputra Imperial Capital Panorama' : 'పాటలీపుత్ర మహా నగర దృశ్యం'}
                      className="w-full h-24 sm:h-28 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="px-3 py-1.5 bg-[#FFF8E1] border-t border-[#E8DCC4] text-center text-[11px] font-bold text-[#7B1113]">
                      🏰 {isEn ? 'Imperial Capital of Pataliputra along the Sacred Ganges' : 'గంగా నదీ తీరాన మౌర్య సామ్రాజ్య రాజధాని పాటలీపుత్ర మహా నగర వైభవం'}
                    </div>
                  </div>
                </div>

                {/* Legacy of the Mauryas (5 cols) */}
                <div className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl border-2 border-[#7B1113] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-sm">
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      ✨ {isEn ? MAURYAN_DYNASTY_DETAILS.legacy.titleEn : MAURYAN_DYNASTY_DETAILS.legacy.titleTe}
                    </h4>

                    <ul className="space-y-2 text-xs text-[#2C1810]">
                      {(isEn ? MAURYAN_DYNASTY_DETAILS.legacy.pointsEn : MAURYAN_DYNASTY_DETAILS.legacy.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FAF5E8] p-2.5 rounded-xl border border-[#E8DCC4] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#7B1113] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#5D1906] via-[#7B1113] to-[#5D1906] border border-[#D4AF37] text-center space-y-1 shadow-sm">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFE082]/90 block">
                      {isEn ? 'Enduring Historical Impact' : 'శాశ్వత చారిత్రక ప్రభావం'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#FFE082] italic font-telugu-serif">
                      {isEn ? MAURYAN_DYNASTY_DETAILS.legacy.closingQuoteEn : MAURYAN_DYNASTY_DETAILS.legacy.closingQuoteTe}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => setLightboxImage({
                  src: MAURYAN_DYNASTY_DETAILS.posterSrc,
                  title: isEn ? MAURYAN_DYNASTY_DETAILS.titleEn : MAURYAN_DYNASTY_DETAILS.titleTe,
                  subtitle: isEn ? MAURYAN_DYNASTY_DETAILS.taglineEn : MAURYAN_DYNASTY_DETAILS.taglineTe
                })}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Full Mauryan Dynasty Poster' : 'మూల మౌర్య సామ్రాజ్య చార్ట్ పూర్తి పరిమాణంలో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsMauryaModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 12. POP-UP MODAL: 16 MAHAJANAPADA ERA (c. 600 – 322 BCE) */}
      {/* ============================================================ */}
      {isMahajanapadaModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsMahajanapadaModalOpen(false)}
        >
          <div
            className="bg-[#FAF5E8] rounded-3xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Extracted Lion Chakra & Royal Chariot Illustrations */}
            <div className="bg-gradient-to-r from-[#4A0E2E] via-[#7B113A] to-[#4A0E2E] p-4 sm:p-5 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div
                  onClick={() => setLightboxImage({
                    src: MAHAJANAPADA_ERA_DETAILS.lionChakraImg,
                    title: isEn ? 'Ashokan Lion Capital & Dharma Chakra' : 'సింహ తలాటం & ధర్మచక్ర చిహ్నం',
                    subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.titleEn : MAHAJANAPADA_ERA_DETAILS.titleTe
                  })}
                  className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-[#FAF3E4] border-2 border-[#D4AF37] overflow-hidden shrink-0 cursor-pointer hidden sm:flex items-center justify-center p-0.5 shadow-sm"
                >
                  <img
                    src={MAHAJANAPADA_ERA_DETAILS.lionChakraImg}
                    alt="Lion Capital and Chakra"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#4A0E2E] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? 'Second Urbanization & 16 Great Realms' : 'రెండవ నగరీకరణ & 16 మహా రాజ్యాల యుగం'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold border border-[#D4AF37]/60">
                      {isEn ? MAHAJANAPADA_ERA_DETAILS.periodEn : MAHAJANAPADA_ERA_DETAILS.periodTe}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFE082] font-telugu-serif">
                    {isEn ? MAHAJANAPADA_ERA_DETAILS.titleEn : MAHAJANAPADA_ERA_DETAILS.titleTe}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div
                  onClick={() => setLightboxImage({
                    src: MAHAJANAPADA_ERA_DETAILS.chariotArmyImg,
                    title: isEn ? 'Mahajanapada Era Royal Chariot & Cavalry' : 'మహాజనపద యుగ రథసైన్యం & అశ్విక దళం',
                    subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.periodEn : MAHAJANAPADA_ERA_DETAILS.periodTe
                  })}
                  className="w-24 h-14 rounded-xl bg-[#FAF3E4] border-2 border-[#D4AF37] overflow-hidden shrink-0 cursor-pointer hidden md:flex items-center justify-center shadow-sm"
                >
                  <img
                    src={MAHAJANAPADA_ERA_DETAILS.chariotArmyImg}
                    alt="Royal Chariot"
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={() => setIsMahajanapadaModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-[#FFE082] transition-colors cursor-pointer shrink-0"
                  title={isEn ? 'Close' : 'మూసివేయండి'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* Top Overview & Poster Buttons */}
              <div className="bg-[#FFFDF7] rounded-2xl border border-[#D4AF37] p-4 flex flex-col lg:flex-row items-center justify-between gap-3 shadow-xs">
                <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed font-medium">
                  {isEn ? MAHAJANAPADA_ERA_DETAILS.overviewEn : MAHAJANAPADA_ERA_DETAILS.overviewTe}
                </p>
                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <button
                    onClick={() => setLightboxImage({
                      src: MAHAJANAPADA_ERA_DETAILS.posterSrc,
                      title: isEn ? MAHAJANAPADA_ERA_DETAILS.titleEn : MAHAJANAPADA_ERA_DETAILS.titleTe,
                      subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.periodEn : MAHAJANAPADA_ERA_DETAILS.periodTe
                    })}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] hover:bg-[#4A0B0D] text-[#FFE082] inline-flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors border border-[#D4AF37]"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFE082]" />
                    <span>{isEn ? 'View Mahajanapada Era Chart in HD' : 'మహాజనపద యుగ చార్ట్ HD లో చూడండి'}</span>
                  </button>
                </div>
              </div>

              {/* SECTION 1: WHAT IS A MAHAJANAPADA? + GEOGRAPHICAL DISTRIBUTION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* What is Mahajanapada (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFDF7] rounded-2xl border-2 border-[#880E4F] p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#880E4F] font-telugu-serif">
                        🏛️ {isEn ? MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.titleEn : MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.titleTe}
                      </h4>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#2C1810]">
                      {(isEn ? MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.pointsEn : MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FFF0F5]/60 p-2.5 rounded-xl border border-[#F48FB1]/50 leading-relaxed">
                          <span className="text-[#C2185B] font-extrabold">◆</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Punch-Marked Coin Callout */}
                  <div
                    onClick={() => setLightboxImage({
                      src: MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.coinImg,
                      title: isEn ? 'Ancient Punch-Marked Coin (Karshapana)' : 'ప్రాచీన ముద్రిత నాణెం (కర్షాపణ)',
                      subtitle: isEn ? 'Silver & Copper Coinage of the Mahajanapada Era' : 'మహాజనపద యుగం నాటి వెండి మరియు రాగి ముద్రిత నాణెం'
                    })}
                    className="flex items-center gap-3 bg-[#FAF5E8] p-2.5 rounded-xl border border-[#D4AF37] cursor-pointer hover:bg-[#FFF8E1] transition-colors"
                  >
                    <img
                      src={MAHAJANAPADA_ERA_DETAILS.whatIsMahajanapada.coinImg}
                      alt="Punch-Marked Coin"
                      className="w-12 h-12 rounded-lg object-contain border border-[#D4AF37] bg-white p-0.5 shrink-0"
                    />
                    <div className="text-xs text-[#4E342E]">
                      <strong className="text-[#7B1113] block">
                        🪙 {isEn ? 'Punch-Marked Coin (Karshapana)' : 'తొలి ముద్రిత నాణెం (కర్షాపణ - Karshapana)'}
                      </strong>
                      <span className="text-[11px]">
                        {isEn ? 'Click to enlarge silver punch-marked coin from the 6th Century BCE' : 'క్రీ.పూ. 6వ శతాబ్దం నాటి ముద్రిత నాణెం చిత్రం పెద్దదిగా చూడండి'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Geographical Distribution (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFDF7] rounded-2xl border-2 border-[#7B1113] p-4 sm:p-5 space-y-3 shadow-sm">
                  <div className="border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif">
                      🧭 {isEn ? MAHAJANAPADA_ERA_DETAILS.geographicalDistribution.titleEn : MAHAJANAPADA_ERA_DETAILS.geographicalDistribution.titleTe}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {MAHAJANAPADA_ERA_DETAILS.geographicalDistribution.regions.map((reg, idx) => (
                      <div key={idx} className="bg-[#FAF5E8] p-2.5 rounded-xl border border-[#E8DCC4] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-extrabold text-[#7B1113] shrink-0">
                          • {isEn ? reg.zoneEn : reg.zoneTe}:
                        </span>
                        <span className="text-xs font-semibold text-[#2C1810] sm:text-right">
                          {isEn ? reg.statesEn : reg.statesTe}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 2: DUAL MAPS OF 16 MAHAJANAPADAS + IMPORTANT FEATURES + POLITICAL SYSTEM */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Left: Maps of 16 Mahajanapadas (4 cols) */}
                <div className="lg:col-span-4 bg-[#FFFDF7] rounded-2xl border-2 border-[#065F46] p-4 space-y-3.5 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#065F46] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      🗺️ {isEn ? 'Maps of 16 Mahajanapadas' : '16 మహాజనపదాల భౌగోళిక పటాలు'}
                    </h4>

                    {/* Extracted Color Map from Picture 1 */}
                    <div
                      onClick={() => setLightboxImage({
                        src: MAHAJANAPADA_ERA_DETAILS.colorMapSrc,
                        title: isEn ? 'Map of 16 Mahajanapadas (Territorial Boundaries)' : '16 మహాజనపదాల భౌగోళిక సరిహద్దుల పటం',
                        subtitle: isEn ? 'Gandhara, Kamboja, Kuru, Panchala, Kosala, Vajji, Magadha, Avanti, Assaka' : 'గాంధార, కాంబోజ, కురు, పాంచాల, కోసల, వజ్జి, మగధ, అవంతి, అశ్మక'
                      })}
                      className="rounded-xl border-2 border-[#D4AF37] overflow-hidden cursor-pointer group bg-[#FAF5E8] shadow-xs"
                    >
                      <img
                        src={MAHAJANAPADA_ERA_DETAILS.colorMapSrc}
                        alt="Colored Map of 16 Mahajanapadas"
                        className="w-full h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="px-2.5 py-1.5 bg-[#ECFDF5] border-t border-[#A7F3D0] text-center text-[11px] font-bold text-[#065F46]">
                        {isEn ? '1. Regional Boundaries Map (Click to Zoom)' : '1. ప్రాంతీయ సరిహద్దుల పటం (జూమ్ చేయండి)'}
                      </div>
                    </div>

                    {/* Detailed Capitals Map */}
                    <div
                      onClick={() => setLightboxImage({
                        src: MAHAJANAPADA_ERA_DETAILS.originalMapSrc,
                        title: isEn ? '16 Ancient Mahajanapadas & Capitals Historical Map' : '16 ప్రాచీన మహాజనపదాలు & వాటి రాజధానుల చారిత్రక పటం',
                        subtitle: isEn ? 'Detailed Historical Map with Capitals & Rivers' : 'రాజధానులు మరియు నదులతో కూడిన వివరణాత్మక పటం'
                      })}
                      className="rounded-xl border-2 border-[#D4AF37] overflow-hidden cursor-pointer group bg-[#FAF5E8] shadow-xs"
                    >
                      <img
                        src={MAHAJANAPADA_ERA_DETAILS.originalMapSrc}
                        alt="16 Mahajanapadas Capitals Map"
                        className="w-full h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="px-2.5 py-1.5 bg-[#FFF8E1] border-t border-[#FFE082] text-center text-[11px] font-bold text-[#7B1113]">
                        {isEn ? '2. Mahajanapadas & Capitals Map (Click to Zoom)' : '2. మహాజనపదాలు & రాజధానుల పటం (జూమ్ చేయండి)'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle: Important Features (4 cols) */}
                <div className="lg:col-span-4 bg-[#FFFDF7] rounded-2xl border-2 border-[#1E3A8A] p-4 space-y-3 shadow-sm">
                  <h4 className="text-sm sm:text-base font-extrabold text-[#1E3A8A] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                    ✨ {isEn ? MAHAJANAPADA_ERA_DETAILS.importantFeatures.titleEn : MAHAJANAPADA_ERA_DETAILS.importantFeatures.titleTe}
                  </h4>

                  <div className="space-y-2">
                    {MAHAJANAPADA_ERA_DETAILS.importantFeatures.items.map((feat, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#CBD5E1] flex items-start gap-2 text-xs text-[#1E293B] leading-relaxed">
                        <span className="text-sm shrink-0">{feat.icon}</span>
                        <span>{isEn ? feat.en : feat.te}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Political System (4 cols) */}
                <div className="lg:col-span-4 bg-[#FFFDF7] rounded-2xl border-2 border-[#7B1113] p-4 space-y-3 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      ⚖️ {isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.titleEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.titleTe}
                    </h4>

                    <div className="bg-[#FFF8E1] p-3 rounded-xl border border-[#D4AF37] space-y-1">
                      <h5 className="font-extrabold text-xs text-[#7B1113]">
                        👑 {isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.monarchies.titleEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.monarchies.titleTe}
                      </h5>
                      <p className="text-xs text-[#4E342E] leading-relaxed">
                        {isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.monarchies.descEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.monarchies.descTe}
                      </p>
                    </div>

                    <div className="bg-[#FAF5E8] p-3 rounded-xl border border-[#D4AF37] space-y-1">
                      <h5 className="font-extrabold text-xs text-[#7B1113]">
                        🏛️ {isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.republics.titleEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.republics.titleTe}
                      </h5>
                      <p className="text-xs text-[#4E342E] leading-relaxed">
                        {isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.republics.descEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.republics.descTe}
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] space-y-1.5">
                      <span className="text-[11px] font-extrabold text-[#7B1113] uppercase tracking-wider block">
                        {isEn ? 'Republican Institutions (Santhagara):' : 'గణతంత్ర పాలనా సంస్థలు:'}
                      </span>
                      <ul className="space-y-1 text-xs text-[#2C1810]">
                        {(isEn ? MAHAJANAPADA_ERA_DETAILS.politicalSystem.institutionsEn : MAHAJANAPADA_ERA_DETAILS.politicalSystem.institutionsTe).map((inst, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: ECONOMY, SOCIETY, RELIGION & PHILOSOPHY, AND URBANIZATION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Economy & Society (4 cols) */}
                <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
                  {/* Economy */}
                  <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#9A3412] p-4 space-y-2.5 shadow-sm">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#9A3412] font-telugu-serif border-b border-[#E8DCC4] pb-1.5">
                      🌾 {isEn ? MAHAJANAPADA_ERA_DETAILS.economy.titleEn : MAHAJANAPADA_ERA_DETAILS.economy.titleTe}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#2C1810]">
                      {(isEn ? MAHAJANAPADA_ERA_DETAILS.economy.pointsEn : MAHAJANAPADA_ERA_DETAILS.economy.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Society */}
                  <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#065F46] p-4 space-y-2.5 shadow-sm">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#065F46] font-telugu-serif border-b border-[#E8DCC4] pb-1.5">
                      👥 {isEn ? MAHAJANAPADA_ERA_DETAILS.society.titleEn : MAHAJANAPADA_ERA_DETAILS.society.titleTe}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#2C1810]">
                      {(isEn ? MAHAJANAPADA_ERA_DETAILS.society.pointsEn : MAHAJANAPADA_ERA_DETAILS.society.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#065F46] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Religion and Philosophy with Meditating Buddha Image (5 cols) */}
                <div className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl border-2 border-[#4A0E2E] p-4 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#4A0E2E] font-telugu-serif">
                      ☸️ {isEn ? MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.titleEn : MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.titleTe}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#FAF5E8] p-3 rounded-xl border border-[#D4AF37]">
                    <img
                      src={MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.buddhaImg}
                      alt="Gautama Buddha"
                      onClick={() => setLightboxImage({
                        src: MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.buddhaImg,
                        title: isEn ? 'Gautama Buddha — Shramana Awakening' : 'గౌతమ బుద్ధుడు — శ్రమణ ధర్మ జాగృతి',
                        subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.titleEn : MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.titleTe
                      })}
                      className="w-20 h-28 object-contain rounded-lg border border-[#D4AF37] bg-white p-1 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1.5 text-xs text-[#2C1810]">
                      <span className="font-extrabold text-[#7B1113] block">
                        {isEn ? 'Rise of New Philosophical Ideas:' : 'కొత్త తాత్త్విక ఆలోచనల ఉదయం:'}
                      </span>
                      <ul className="space-y-1">
                        {(isEn ? MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.riseOfIdeasEn : MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.riseOfIdeasTe).map((idea, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-[#4A0E2E] block">
                      {isEn ? 'Major Religious & Philosophical Traditions:' : 'ప్రధాన మత & తాత్త్విక సంప్రదాయాలు:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#2C1810]">
                      {(isEn ? MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.majorTraditionsEn : MAHAJANAPADA_ERA_DETAILS.religionAndPhilosophy.majorTraditionsTe).map((trad, idx) => (
                        <li key={idx} className="bg-[#FAF5E8] p-2 rounded-lg border border-[#E8DCC4] flex items-start gap-1.5 leading-snug">
                          <span className="text-[#7B1113] font-bold">✦</span>
                          <span>{trad}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Urbanization with Fortified City Image (3 cols) */}
                <div className="lg:col-span-3 bg-[#FFFDF7] rounded-2xl border-2 border-[#7B1113] p-4 flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="space-y-2.5">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      🏰 {isEn ? MAHAJANAPADA_ERA_DETAILS.urbanization.titleEn : MAHAJANAPADA_ERA_DETAILS.urbanization.titleTe}
                    </h4>

                    <ul className="space-y-2 text-xs text-[#2C1810]">
                      {(isEn ? MAHAJANAPADA_ERA_DETAILS.urbanization.pointsEn : MAHAJANAPADA_ERA_DETAILS.urbanization.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 bg-[#FAF5E8] p-2 rounded-xl border border-[#E8DCC4] leading-relaxed">
                          <span className="text-[#D84315] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    onClick={() => setLightboxImage({
                      src: MAHAJANAPADA_ERA_DETAILS.urbanization.cityImg,
                      title: isEn ? 'Fortified Urban Centre of the Mahajanapada Era' : 'మహాజనపద యుగపు కోట నగర దృశ్యం',
                      subtitle: isEn ? 'Rajagriha, Vaishali, Ujjain, Taxila & Kashi' : 'రాజగృహ, వైశాలి, ఉజ్జయిని, తక్షశిల & కాశీ'
                    })}
                    className="rounded-xl border-2 border-[#D4AF37] overflow-hidden cursor-pointer group bg-[#FAF3E4]"
                  >
                    <img
                      src={MAHAJANAPADA_ERA_DETAILS.urbanization.cityImg}
                      alt="Fortified City"
                      className="w-full h-24 object-contain group-hover:scale-105 transition-transform"
                    />
                    <div className="px-2 py-1 bg-[#FFF8E1] border-t border-[#E8DCC4] text-center text-[10px] font-bold text-[#7B1113]">
                      {isEn ? 'Fortified Mahajanapada City' : 'మహాజనపద కోట నగర నిర్మాణం'}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 4: IMPORTANT RULERS + DECLINE OF MAHAJANAPADAS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Important Rulers (7 cols) */}
                <div className="lg:col-span-7 bg-[#FFFDF7] rounded-2xl border-2 border-[#1E3A8A] p-4 sm:p-5 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#1E3A8A] font-telugu-serif">
                      👑 {isEn ? MAHAJANAPADA_ERA_DETAILS.importantRulers.titleEn : MAHAJANAPADA_ERA_DETAILS.importantRulers.titleTe}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3.5 items-start">
                    <div className="space-y-2 flex-1">
                      {MAHAJANAPADA_ERA_DETAILS.importantRulers.rulers.map((r, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#CBD5E1] text-xs space-y-0.5">
                          <strong className="text-[#1E3A8A] block font-telugu-serif">
                            ★ {isEn ? r.nameEn : r.nameTe}
                          </strong>
                          <p className="text-[#334155] leading-relaxed">{isEn ? r.descEn : r.descTe}</p>
                        </div>
                      ))}
                    </div>

                    <div
                      onClick={() => setLightboxImage({
                        src: MAHAJANAPADA_ERA_DETAILS.importantRulers.rulerImg,
                        title: isEn ? 'Acharya Chanakya & Rise of Magadha' : 'ఆచార్య చాణక్యుడు & మగధ ఏకీకరణ',
                        subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.importantRulers.titleEn : MAHAJANAPADA_ERA_DETAILS.importantRulers.titleTe
                      })}
                      className="w-24 sm:w-28 rounded-xl border-2 border-[#D4AF37] overflow-hidden shrink-0 cursor-pointer bg-white shadow-xs self-center"
                    >
                      <img
                        src={MAHAJANAPADA_ERA_DETAILS.importantRulers.rulerImg}
                        alt="Acharya Chanakya"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Decline of Mahajanapadas (5 cols) */}
                <div className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl border-2 border-[#7B1113] p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#7B1113] font-telugu-serif border-b border-[#E8DCC4] pb-2">
                      ⚔️ {isEn ? MAHAJANAPADA_ERA_DETAILS.decline.titleEn : MAHAJANAPADA_ERA_DETAILS.decline.titleTe}
                    </h4>

                    <div className="flex gap-3 items-center">
                      <ul className="space-y-2 text-xs text-[#2C1810] flex-1">
                        {(isEn ? MAHAJANAPADA_ERA_DETAILS.decline.pointsEn : MAHAJANAPADA_ERA_DETAILS.decline.pointsTe).map((pt, idx) => (
                          <li key={idx} className="bg-[#FAF5E8] p-2.5 rounded-xl border border-[#E8DCC4] flex items-start gap-1.5 leading-relaxed">
                            <span className="text-[#D84315] font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        onClick={() => setLightboxImage({
                          src: MAHAJANAPADA_ERA_DETAILS.decline.warriorImg,
                          title: isEn ? 'Ancient Mahajanapada Warrior' : 'మహాజనపద యుగపు యోధుడు',
                          subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.decline.titleEn : MAHAJANAPADA_ERA_DETAILS.decline.titleTe
                        })}
                        className="w-20 sm:w-24 rounded-xl border-2 border-[#D4AF37] overflow-hidden shrink-0 cursor-pointer bg-white shadow-xs"
                      >
                        <img
                          src={MAHAJANAPADA_ERA_DETAILS.decline.warriorImg}
                          alt="Ancient Warrior"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5: COMPLETE LIST OF 16 MAHAJANAPADAS & THEIR CAPITALS */}
              <div className="bg-[#FFFDF7] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] space-y-4 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E8DCC4] pb-2.5">
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                      <span>📋</span>
                      <span>{isEn ? 'Complete List of the 16 Ancient Mahajanapadas & Their Capitals' : '16 ప్రాచీన మహాజనపదాలు మరియు వాటి రాజధానుల సంపూర్ణ జాబితా'}</span>
                    </h4>
                    <p className="text-xs text-[#5D4037] mt-0.5">
                      {isEn 
                        ? 'According to early Buddhist text Anguttara Nikaya and Jain text Bhagavati Sutra'
                        : 'బౌద్ధ గ్రంథం అంగుత్తర నికాయ మరియు జైన గ్రంథం భగవతీ సూత్రం ఆధారంగా'}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                    16 {isEn ? 'Mahajanapadas' : 'మహాజనపదాలు'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {SIXTEEN_MAHAJANAPADAS_LIST.map((m) => (
                    <div key={m.number} className="bg-[#FAF5E8] p-3 rounded-xl border border-[#E8DCC4] shadow-2xs space-y-1 hover:border-[#D4AF37] transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]/50">
                          #{m.number}
                        </span>
                        <span className="text-[10px] font-semibold text-[#880E4F]">
                          {isEn ? m.typeEn : m.typeTe}
                        </span>
                      </div>
                      <h6 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                        {isEn ? m.nameEn : m.nameTe}
                      </h6>
                      <div className="text-[11px] text-[#D84315] font-semibold">
                        <span className="text-[#5D4037] font-normal">{isEn ? 'Capital: ' : 'రాజధాని: '}</span>
                        {isEn ? m.capitalEn : m.capitalTe}
                      </div>
                      <div className="text-[10px] text-[#5D4037] leading-snug">
                        {isEn ? m.locationEn : m.locationTe}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => setLightboxImage({
                  src: MAHAJANAPADA_ERA_DETAILS.posterSrc,
                  title: isEn ? MAHAJANAPADA_ERA_DETAILS.titleEn : MAHAJANAPADA_ERA_DETAILS.titleTe,
                  subtitle: isEn ? MAHAJANAPADA_ERA_DETAILS.periodEn : MAHAJANAPADA_ERA_DETAILS.periodTe
                })}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'View Original Full Mahajanapada Era Chart' : 'మూల మహాజనపద యుగ చార్ట్ పూర్తి పరిమాణంలో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsMahajanapadaModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 13. POP-UP MODAL: EUROPEANS ARRIVE IN INDIA & FRENCH ADVENT (1498–1815 CE) */}
      {/* ============================================================ */}
      {isEuropeansModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsEuropeansModalOpen(false)}
        >
          <div
            className="bg-[#FAF5E8] rounded-3xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] via-[#5B0B14] to-[#7B1113] p-4 sm:p-5 border-b-2 border-[#D4AF37] flex items-center justify-between gap-3 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FFE082] bg-[#FFFDF7] shrink-0 shadow-md">
                  <img
                    src={EUROPEANS_ARRIVAL_DETAILS.caravelShipImg}
                    alt="Europeans Arrive in India"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? 'Maritime Trade & Colonial Foundations' : 'సముద్ర వాణిజ్యం & వలస పాలన ఆరంభం'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold border border-[#D4AF37]/60">
                      {isEn ? '1498 – 1815 CE' : 'క్రీ.శ. 1498 – 1815'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFE082] font-telugu-serif">
                    {isEn ? EUROPEANS_ARRIVAL_DETAILS.titleEn : EUROPEANS_ARRIVAL_DETAILS.titleTe}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsEuropeansModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-[#FFE082] transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">

              {/* HERO BANNER WITH CARAVEL SHIP, INTRO & COMPASS-INDIA MAP */}
              <div className="bg-gradient-to-r from-[#EFF6FF] via-[#FFFDF7] to-[#FFF8E1] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: Caravel Ship */}
                  <div className="md:col-span-3 flex justify-center">
                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.caravelShipImg,
                        title: isEn ? 'Portuguese Caravel Ship (1498)' : 'పోర్చుగీసు నౌక (వాస్కోడిగామా సముద్ర ప్రయాణం - 1498)',
                        subtitle: isEn ? EUROPEANS_ARRIVAL_DETAILS.subtitleEn : EUROPEANS_ARRIVAL_DETAILS.subtitleTe
                      }); }}
                      className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFFFF] shadow-sm cursor-pointer group relative p-1"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.caravelShipImg} alt="Caravel Ship" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                      </div>
                    </div>
                  </div>

                  {/* Center: Intro Text & Full Source Poster Buttons */}
                  <div className="md:col-span-6 text-center space-y-2">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                      {isEn ? EUROPEANS_ARRIVAL_DETAILS.subtitleEn : EUROPEANS_ARRIVAL_DETAILS.subtitleTe}
                    </span>
                    <p className="text-xs sm:text-sm text-[#2C1810] font-medium leading-relaxed bg-[#FFFFFF] p-3 rounded-xl border border-[#D4AF37]/60 shadow-2xs">
                      {isEn ? EUROPEANS_ARRIVAL_DETAILS.introEn : EUROPEANS_ARRIVAL_DETAILS.introTe}
                    </p>
                    <div className="pt-1 flex items-center justify-center gap-2 flex-wrap">
                      <button
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: EUROPEANS_ARRIVAL_DETAILS.posterImg,
                          title: isEn ? EUROPEANS_ARRIVAL_DETAILS.titleEn : EUROPEANS_ARRIVAL_DETAILS.titleTe,
                          subtitle: isEn ? EUROPEANS_ARRIVAL_DETAILS.subtitleEn : EUROPEANS_ARRIVAL_DETAILS.subtitleTe
                        }); }}
                        className="px-3 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#4A0012] text-[#FFE082] font-bold text-xs inline-flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                        <span>{isEn ? 'View Europeans Arrival Chart (HD)' : 'యూరోపియన్ల రాక మూల చార్ట్ (HD)'}</span>
                      </button>
                      <button
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.posterImg,
                          title: isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleTe,
                          subtitle: isEn ? '1664–1815 CE: Pondicherry, Carnatic Wars & Treaty of Paris' : 'క్రీ.శ. 1664–1815: పాండిచ్చేరి, కర్ణాటక యుద్ధాలు & పారిస్ ఒప్పందం'
                        }); }}
                        className="px-3 py-1.5 rounded-xl bg-[#1E3A8A] hover:bg-[#172554] text-[#FFE082] font-bold text-xs inline-flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
                        <span>{isEn ? 'View French Advent Chart (HD)' : 'ఫ్రెంచ్ వారి ఆగమనం మూల చార్ట్ (HD)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Compass & Map of India */}
                  <div className="md:col-span-3 flex justify-center">
                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.compassIndiaMapImg,
                        title: isEn ? 'Maritime Compass & Map of India' : 'నావికా దిక్సూచి & భారతదేశ పటం',
                        subtitle: isEn ? 'Discovery of Direct Sea Route to India (1498)' : 'భారతదేశానికి సముద్ర మార్గ ఆవిష్కరణ (1498)'
                      }); }}
                      className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFFFF] shadow-sm cursor-pointer group relative p-1"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.compassIndiaMapImg} alt="Compass and India Map" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-[#FFE082]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 1: IMPORTANT EUROPEANS & THEIR ARRIVAL (1498–1731) + REASONS & SEA ROUTE MAP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                {/* Left 6 Cols: Chronological Arrival of Europeans (1498–1731) */}
                <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-xs flex flex-col">
                  <div className="bg-[#AD1457] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center justify-between">
                    <span>⭐ {isEn ? 'Important Europeans & Their Arrival (1498–1731)' : 'ప్రముఖ యూరోపియన్లు & వారి రాక కాలక్రమం (1498–1731)'}</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-extrabold">6 {isEn ? 'Milestones' : 'ఘట్టాలు'}</span>
                  </div>
                  <div className="p-4 space-y-3 flex-1 bg-[#FFFDF7]">
                    {EUROPEANS_ARRIVAL_DETAILS.arrivalTimeline.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border-2 shadow-2xs space-y-1 transition-all hover:shadow-sm"
                        style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }}
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span
                            className="px-2.5 py-0.5 rounded-md text-white text-xs font-extrabold shadow-2xs"
                            style={{ backgroundColor: item.color }}
                          >
                            ★ {isEn ? item.year : item.yearTe}
                          </span>
                          <span className="text-base">{item.flag}</span>
                        </div>
                        <h5 className="font-bold text-xs sm:text-sm text-[#2C1810] font-telugu-serif">
                          {isEn ? item.nameEn : item.nameTe}
                        </h5>
                        <p className="text-xs text-[#4E342E] leading-relaxed">
                          {isEn ? item.descEn : item.descTe}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 6 Cols: Reasons for Europeans to Come to India + Route Taken by Europeans Map */}
                <div className="lg:col-span-6 flex flex-col gap-5">

                  {/* Card A: Reasons for Europeans to Come to India */}
                  <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-xs">
                    <div className="bg-[#B45309] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>🌶️</span>
                      <span>{isEn ? 'Reasons for Europeans to Come to India' : 'యూరోపియన్లు భారతదేశానికి రావడానికి ప్రధాన కారణాలు'}</span>
                    </div>
                    <div className="p-4 space-y-3 bg-[#FFFDF7]">
                      <ul className="space-y-1.5 text-xs text-[#2C1810]">
                        {(isEn ? EUROPEANS_ARRIVAL_DETAILS.reasonsEn : EUROPEANS_ARRIVAL_DETAILS.reasonsTe).map((r, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#D84315] font-extrabold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: EUROPEANS_ARRIVAL_DETAILS.spicesSilkCrossImg,
                          title: isEn ? 'Spices, Silk, Cotton Textiles & Spread of Christianity' : 'సుగంధ ద్రవ్యాలు, పట్టు-పత్తి వస్త్రాలు & క్రైస్తవ మత ప్రచారం',
                          subtitle: isEn ? 'Key motivations behind European maritime expeditions' : 'యూరోపియన్ సముద్ర యాత్రల వెనుక ప్రధాన ఆకర్షణలు'
                        }); }}
                        className="h-28 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group relative flex items-center justify-center p-1 shadow-2xs"
                      >
                        <img src={EUROPEANS_ARRIVAL_DETAILS.spicesSilkCrossImg} alt="Spices, Silk and Cross" className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform" />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-[#FFE082] text-[9.5px] font-bold px-2 py-0.5 rounded">
                          🔍 {isEn ? 'Zoom' : 'జూమ్'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card B: Route Taken by Europeans Map */}
                  <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#1E3A8A]/60 overflow-hidden shadow-xs flex-1 flex flex-col">
                    <div className="bg-[#1E3A8A] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center justify-between">
                      <span>🗺️ {isEn ? 'Sea Route Taken by Europeans (Cape of Good Hope → Calicut 1498)' : 'యూరోపియన్లు ప్రయాణించిన సముద్ర మార్గం పటం (కేప్ ఆఫ్ గుడ్ హోప్ → కాలికట్ 1498)'}</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">{isEn ? 'Click to Zoom' : 'జూమ్ చేయండి'}</span>
                    </div>
                    <div className="p-3 bg-[#FFFDF7] flex-1 flex flex-col justify-center">
                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: EUROPEANS_ARRIVAL_DETAILS.seaRouteMapImg,
                          title: isEn ? 'Route Taken by Europeans: Portugal → Cape of Good Hope → Calicut (1498)' : 'యూరోపియన్ల సముద్ర మార్గం: పోర్చుగల్ → ఆఫ్రికా (కేప్ ఆఫ్ గుడ్ హోప్) → కాలికట్ (1498)',
                          subtitle: isEn ? 'Vasco da Gama’s historic maritime voyage around Africa to India' : 'ఆఫ్రికా చుట్టూ ప్రయాణించి భారతదేశంలోని కాలికట్ చేరుకున్న వాస్కోడిగామా మార్గం'
                        }); }}
                        className="h-60 sm:h-68 rounded-xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group relative flex items-center justify-center p-1 shadow-xs"
                      >
                        <img src={EUROPEANS_ARRIVAL_DETAILS.seaRouteMapImg} alt="Route Taken by Europeans Map" className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-lg bg-[#7B1113] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 shadow-md">
                            <Maximize2 className="w-4 h-4" />
                            <span>{isEn ? 'Enlarge Sea Route Map' : 'సముద్ర మార్గ పటం పెద్దదిగా చూడండి'}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECTION 2: PLACES OF EUROPEAN SETTLEMENTS & IMPACT OF EUROPEANS' ARRIVAL */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                {/* Places of European Settlements (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl border-2 border-[#2E7D32]/50 overflow-hidden shadow-xs flex flex-col">
                  <div className="bg-[#2E7D32] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span>🏰</span>
                    <span>{isEn ? 'Places of European Settlements in India' : 'భారతదేశంలో యూరోపియన్ల ప్రధాన వర్తక స్థావరాలు'}</span>
                  </div>
                  <div className="p-4 space-y-2.5 bg-[#FFFDF7] flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      {EUROPEANS_ARRIVAL_DETAILS.settlements.map((s, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-[#F1F8E9] border border-[#A5D6A7] flex items-start gap-2.5 text-xs">
                          <span className="text-base shrink-0">{s.flag}</span>
                          <div>
                            <strong className="text-[#1B5E20] font-bold block">{isEn ? s.powerEn : s.powerTe}:</strong>
                            <span className="text-[#2C1810] font-medium">{isEn ? s.placesEn : s.placesTe}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.coastalSettlementsImg,
                        title: isEn ? 'European Coastal Trading Settlements & Fortified Factories' : 'యూరోపియన్ల తీరప్రాంత కోటలు & వర్తక స్థావరాలు',
                        subtitle: isEn ? 'Goa, Surat, Madras, Bombay, Calcutta, Pondicherry, Cochin & Tranquebar' : 'గోవా, సూరత్, మద్రాసు, బొంబాయి, కలకత్తా, పాండిచ్చేరి, కొచ్చిన్ & ట్రాంకెబార్'
                      }); }}
                      className="h-24 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group relative flex items-center justify-center p-1 shadow-2xs"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.coastalSettlementsImg} alt="European Coastal Settlements" className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Impact of Europeans' Arrival (6 cols) */}
                <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl border-2 border-[#6A1B9A]/50 overflow-hidden shadow-xs flex flex-col">
                  <div className="bg-[#6A1B9A] text-white px-4 py-2.5 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span>⚔️</span>
                    <span>{isEn ? 'Impact of Europeans’ Arrival on India' : 'భారతదేశంపై యూరోపియన్ల రాక ప్రభావం & పరిణామాలు'}</span>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#FFFDF7] flex-1">
                    <div className="sm:col-span-8 space-y-2">
                      {(isEn ? EUROPEANS_ARRIVAL_DETAILS.impactsEn : EUROPEANS_ARRIVAL_DETAILS.impactsTe).map((imp, iIdx) => (
                        <div key={iIdx} className="p-2.5 rounded-xl bg-[#F3E5F5]/60 border border-[#CE93D8] flex items-start gap-2 text-xs text-[#2C1810] leading-relaxed">
                          <span className="text-[#6A1B9A] font-extrabold">♥</span>
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="sm:col-span-4 flex justify-center">
                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: EUROPEANS_ARRIVAL_DETAILS.britishSoldierImg,
                          title: isEn ? 'British East India Company Soldier' : 'బ్రిటిష్ ఈస్టిండియా కంపెనీ సైనికుడు',
                          subtitle: isEn ? 'From traders to paramount rulers of India' : 'వర్తకుల నుండి భారతదేశ పాలకుల వరకు'
                        }); }}
                        className="w-36 h-60 rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group relative p-1 shadow-xs"
                      >
                        <img src={EUROPEANS_ARRIVAL_DETAILS.britishSoldierImg} alt="British Soldier" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* ============================================================ */}
              {/* SECTION 3: FRENCH – ADVENT OF EUROPEANS IN INDIA & CARNATIC WARS (FROM PICTURE 2) */}
              {/* ============================================================ */}
              <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#1E3A8A] overflow-hidden shadow-md space-y-4">
                <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#7B1113] text-white px-4 py-3 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇫🇷</span>
                    <h4 className="font-extrabold text-sm sm:text-base font-telugu-serif text-[#FFE082]">
                      {isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleTe}
                    </h4>
                  </div>
                  <button
                    onClick={() => { setLightboxZoom(1); setLightboxImage({
                      src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.posterImg,
                      title: isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleTe,
                      subtitle: isEn ? 'Arrival, Settlements, Carnatic Wars (1746–1763) & Treaty of Paris' : 'ఆగమనం, స్థావరాలు, కర్ణాటక యుద్ధాలు (1746–1763) & పారిస్ ఒప్పందం'
                    }); }}
                    className="px-3 py-1 rounded-lg bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                    <span>{isEn ? 'Full French Poster' : 'ఫ్రెంచ్ పూర్తి చార్ట్'}</span>
                  </button>
                </div>

                <div className="p-4 sm:p-5 space-y-5 bg-[#FFFDF7]">

                  {/* Row A: Arrival & Establishment (1664 & 1674) with French Ship & Pondicherry Port */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#FAF7F0] p-3.5 rounded-2xl border border-[#D4AF37]">
                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.frenchShipImg,
                        title: isEn ? 'French East India Company Fleet (1664)' : 'ఫ్రెంచ్ ఈస్టిండియా కంపెనీ నౌక (1664)',
                        subtitle: isEn ? 'Formation of the French East India Company' : '1664లో ఫ్రెంచ్ ఈస్టిండియా కంపెనీ స్థాపన'
                      }); }}
                      className="md:col-span-3 h-36 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group flex items-center justify-center"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.frenchShipImg} alt="French Ship" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="md:col-span-6 space-y-2">
                      <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] uppercase tracking-wider border-b border-[#D4AF37]/50 pb-1">
                        ⚓ {isEn ? 'Arrival & Establishment (1664 – 1674 CE)' : 'ఫ్రెంచ్ వారి రాక & స్థావరాల స్థాపన (క్రీ.శ. 1664 – 1674)'}
                      </h5>
                      <ul className="space-y-1.5 text-xs text-[#2C1810]">
                        {(isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.arrivalAndEstablishmentEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.arrivalAndEstablishmentTe).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#1E3A8A] font-extrabold">●</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.pondicherryPortImg,
                        title: isEn ? 'Establishment of Pondicherry (1674)' : 'పాండిచ్చేరి కోట & ఓడరేవు స్థాపన (1674)',
                        subtitle: isEn ? 'French headquarters on the Coromandel Coast' : 'కోరమాండల్ తీరాన ఫ్రెంచ్ ప్రధాన రాజధాని'
                      }); }}
                      className="md:col-span-3 h-36 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] cursor-pointer group flex items-center justify-center"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.pondicherryPortImg} alt="Pondicherry Port" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  </div>

                  {/* Row B: Key Aspects — (1) Trade & Commerce, (2) Major Settlements Map, (3) Political Ambitions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* 1. Trade & Commerce */}
                    <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D4AF37] shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h6 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                          📦 {isEn ? '1. Trade & Commerce' : '1. వర్తకం & వాణిజ్యం'}
                        </h6>
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.tradeGoodsImg,
                            title: isEn ? 'French Trade & Commerce: Spices, Silk, Ivory & Goods' : 'ఫ్రెంచ్ వాణిజ్యం: సుగంధ ద్రవ్యాలు, పట్టు, దంతం & ఇతర వస్తువులు',
                            subtitle: isEn ? 'Key Aspects of French East India Company' : 'ఫ్రెంచ్ ఈస్టిండియా కంపెనీ ముఖ్యాంశాలు'
                          }); }}
                          className="h-36 rounded-lg overflow-hidden border border-[#E8DCC4] cursor-pointer group"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.tradeGoodsImg} alt="Trade Goods" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                      </div>
                      <p className="text-xs text-[#4E342E] leading-relaxed">
                        {isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.tradeEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.tradeTe}
                      </p>
                    </div>

                    {/* 2. Major Settlements Map (Pondicherry, Mahe, Karaikal, Chandernagore) */}
                    <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D4AF37] shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h6 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                          📍 {isEn ? '2. Major French Settlements Map' : '2. ప్రధాన ఫ్రెంచ్ స్థావరాల పటం'}
                        </h6>
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.settlementsMapImg,
                            title: isEn ? 'Major French Settlements: Pondicherry, Mahe, Karaikal, Chandernagore' : 'ప్రధాన ఫ్రెంచ్ స్థావరాల పటం: పాండిచ్చేరి, మాహే, కారైకాల్, చందర్‌నగర్',
                            subtitle: isEn ? 'Click image to zoom' : 'చిత్రంపై క్లిక్ చేసి జూమ్ చేయండి'
                          }); }}
                          className="h-36 rounded-lg overflow-hidden border border-[#E8DCC4] cursor-pointer group bg-[#FAF7F0] flex items-center justify-center"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.settlementsMapImg} alt="French Settlements Map" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {(isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.settlementsListEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.settlementsListTe).map((pl, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1E3A8A] border border-[#93C5FD] text-[10.5px] font-bold">
                            {pl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3. Political Ambitions */}
                    <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D4AF37] shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h6 className="font-bold text-xs text-[#7B1113] uppercase tracking-wider">
                          ⚔️ {isEn ? '3. Political Ambitions' : '3. రాజకీయ ఆకాంక్షలు (డూప్లే తంత్రం)'}
                        </h6>
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.politicalAmbitionsImg,
                            title: isEn ? 'French Political Ambitions & Influence in Indian Politics' : 'భారతీయ రాజకీయాలలో ఫ్రెంచ్ జోక్యం & ఆధిపత్య ప్రయత్నాలు',
                            subtitle: isEn ? 'Governor Dupleix and Carnatic-Hyderabad succession politics' : 'గవర్నర్ డూప్లే మరియు కర్ణాటక-హైదరాబాద్ వారసత్వ రాజకీయాలు'
                          }); }}
                          className="h-36 rounded-lg overflow-hidden border border-[#E8DCC4] cursor-pointer group"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.politicalAmbitionsImg} alt="Political Ambitions" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                      </div>
                      <p className="text-xs text-[#4E342E] leading-relaxed">
                        {isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.politicalEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.keyAspects.politicalTe}
                      </p>
                    </div>
                  </div>

                  {/* Row C: Major Battles & Wars — Carnatic Wars (1746–1763) & Decline & End (1763–1815) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                    {/* Carnatic Wars (7 cols) */}
                    <div className="lg:col-span-7 bg-[#FAF7F0] p-4 rounded-2xl border-2 border-[#7B1113]/50 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#D4AF37]/50 pb-2">
                        <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                          🔥 {isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.majorBattles.subtitleEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.majorBattles.subtitleTe}
                        </h5>
                        <span className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">1746 – 1763 CE</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.carnaticBattle1Img,
                            title: isEn ? 'Carnatic Wars (1746–1763) – Battle of Ambur (1749)' : 'కర్ణాటక యుద్ధాలు (1746–1763) – అంబూర్ యుద్ధం (1749)',
                            subtitle: isEn ? 'Anglo-French military conflict in South India' : 'దక్షిణ భారతదేశంలో ఆంగ్లో-ఫ్రెంచ్ సైనిక పోరు'
                          }); }}
                          className="h-28 rounded-xl overflow-hidden border border-[#D4AF37] cursor-pointer group"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.carnaticBattle1Img} alt="Carnatic Battle 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.carnaticBattle2Img,
                            title: isEn ? 'Battle of Wandiwash (1760) – Decisive Third Carnatic War' : 'వందవాసి యుద్ధం (1760) – నిర్ణయాత్మక మూడవ కర్ణాటక యుద్ధం',
                            subtitle: isEn ? 'Sir Eyre Coote defeats Count de Lally' : 'కౌంట్ డి లాలీని ఓడించిన బ్రిటిష్ సేనాని సర్ ఐర్ కూట్'
                          }); }}
                          className="h-28 rounded-xl overflow-hidden border border-[#D4AF37] cursor-pointer group"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.carnaticBattle2Img} alt="Carnatic Battle 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        {EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.majorBattles.battles.map((b, bIdx) => (
                          <div key={bIdx} className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] space-y-0.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-[#7B1113]">{isEn ? b.nameEn : b.nameTe}</span>
                              <span className="px-2 py-0.5 rounded bg-[#FFF8E1] text-[#D84315] text-[10px] font-extrabold border border-[#D4AF37]/50">{isEn ? b.year : b.yearTe}</span>
                            </div>
                            <p className="text-[11px] text-[#4E342E] leading-relaxed">{isEn ? b.descEn : b.descTe}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decline & End (5 cols) */}
                    <div className="lg:col-span-5 bg-[#FAF7F0] p-4 rounded-2xl border-2 border-[#7B1113]/50 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <h5 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif border-b border-[#D4AF37]/50 pb-2">
                          📉 {isEn ? 'Decline & End of French Power (1763 – 1815 CE)' : 'ఫ్రెంచ్ ఆధిపత్య పతనం & ముగింపు (క్రీ.శ. 1763 – 1815)'}
                        </h5>
                        <div
                          onClick={() => { setLightboxZoom(1); setLightboxImage({
                            src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.declineFortImg,
                            title: isEn ? 'Treaty of Paris (1763) & British Occupation (1795–1815)' : 'పారిస్ ఒప్పందం (1763) & ఫ్రెంచ్ కోటల ఆక్రమణ (1795–1815)',
                            subtitle: isEn ? 'End of French political ambitions in India' : 'భారతదేశంలో ఫ్రెంచ్ రాజకీయ ఆధిపత్య ముగింపు'
                          }); }}
                          className="h-36 rounded-xl overflow-hidden border border-[#D4AF37] cursor-pointer group"
                        >
                          <img src={EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.declineFortImg} alt="Decline Fort" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <ul className="space-y-2 text-xs text-[#2C1810]">
                          {(isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.declineAndEndEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.declineAndEndTe).map((pt, idx) => (
                            <li key={idx} className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E8DCC4] flex items-start gap-1.5 leading-relaxed">
                              <span className="text-[#D84315] font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECTION 4: IMPORTANT POINTS TO REMEMBER (WITH GLOBE & TREASURE CHEST ILLUSTRATIONS) */}
              <div className="bg-gradient-to-r from-[#FFF8E1] via-[#FFFDF7] to-[#FFF8E1] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: Globe on Books */}
                  <div className="md:col-span-2 flex justify-center">
                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.globeAndBooksImg,
                        title: isEn ? 'Global Maritime Exploration & History' : 'ప్రపంచ సముద్ర అన్వేషణ & చరిత్ర',
                        subtitle: isEn ? 'Important Points to Remember' : 'గుర్తుంచుకోవలసిన ముఖ్య అంశాలు'
                      }); }}
                      className="w-24 h-24 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] p-1 cursor-pointer hover:scale-105 transition-transform"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.globeAndBooksImg} alt="Globe and Books" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Center: Important Points to Remember & Quote */}
                  <div className="md:col-span-8 space-y-2.5">
                    <div className="text-center">
                      <span className="px-4 py-1 rounded-full bg-[#F59E0B] text-[#2C1810] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                        ⭐ {isEn ? 'Important Points to Remember' : 'గుర్తుంచుకోవలసిన ముఖ్య అంశాలు'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(isEn ? EUROPEANS_ARRIVAL_DETAILS.pointsToRememberEn : EUROPEANS_ARRIVAL_DETAILS.pointsToRememberTe).map((pt, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/60 text-xs text-[#2C1810] font-semibold flex items-start gap-1.5 shadow-2xs">
                          <span className="text-[#D84315]">★</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold italic text-[#AD1457] pt-1">
                      “{isEn ? EUROPEANS_ARRIVAL_DETAILS.footerQuoteEn : EUROPEANS_ARRIVAL_DETAILS.footerQuoteTe}”
                    </p>
                  </div>

                  {/* Right: Treasure Chest */}
                  <div className="md:col-span-2 flex justify-center">
                    <div
                      onClick={() => { setLightboxZoom(1); setLightboxImage({
                        src: EUROPEANS_ARRIVAL_DETAILS.treasureChestImg,
                        title: isEn ? 'Quest for Indian Wealth, Spices & Gems' : 'భారతదేశ సంపద, సుగంధ ద్రవ్యాలు & రత్నాల అన్వేషణ',
                        subtitle: isEn ? 'Trade first, then political dominance' : 'మొదట వ్యాపారం, ఆపై రాజకీయ ఆధిపత్యం'
                      }); }}
                      className="w-24 h-24 rounded-xl overflow-hidden border border-[#D4AF37] bg-[#FFFFFF] p-1 cursor-pointer hover:scale-105 transition-transform"
                    >
                      <img src={EUROPEANS_ARRIVAL_DETAILS.treasureChestImg} alt="Treasure Chest" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => { setLightboxZoom(1); setLightboxImage({
                    src: EUROPEANS_ARRIVAL_DETAILS.posterImg,
                    title: isEn ? EUROPEANS_ARRIVAL_DETAILS.titleEn : EUROPEANS_ARRIVAL_DETAILS.titleTe,
                    subtitle: isEn ? EUROPEANS_ARRIVAL_DETAILS.subtitleEn : EUROPEANS_ARRIVAL_DETAILS.subtitleTe
                  }); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Original Europeans Arrival Poster' : 'యూరోపియన్ల రాక మూల చార్ట్'}</span>
                </button>
                <button
                  onClick={() => { setLightboxZoom(1); setLightboxImage({
                    src: EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.posterImg,
                    title: isEn ? EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleEn : EUROPEANS_ARRIVAL_DETAILS.frenchAdvent.titleTe,
                    subtitle: isEn ? '1664–1815 CE' : 'క్రీ.శ. 1664–1815'
                  }); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#1E3A8A] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span>{isEn ? 'Original French Advent Poster' : 'ఫ్రెంచ్ ఆగమనం మూల చార్ట్'}</span>
                </button>
              </div>

              <button
                onClick={() => setIsEuropeansModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: CONSOLIDATION OF BRITISH POWER IN INDIA (1757 – 1856 CE) */}
      {/* ============================================================ */}
      {isBritishModalOpen && (
        <div
          onClick={() => setIsBritishModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] via-[#7B1113] to-[#1E3A8A] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">⚔️</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#7B1113] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? '1757 – 1856 CE • NCERT Summary' : 'క్రీ.శ. 1757 – 1856 • NCERT సారాంశం'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? 'Plassey • Buxar • Alliances • 6 Governor-Generals' : 'ప్లాసీ • బక్సర్ • విధానాలు • 6 గవర్నర్-జనరల్స్'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn ? BRITISH_CONSOLIDATION_DETAILS.titleEn : BRITISH_CONSOLIDATION_DETAILS.titleTe}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsBritishModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* TOP HERO BANNER WITH COLONIAL PALACE & ARTILLERY ILLUSTRATIONS */}
              <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E1] to-[#FFFDF7] p-4 rounded-2xl border-2 border-[#D4AF37] shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: Colonial Palace */}
                  <div
                    onClick={() => { setLightboxZoom(1); setLightboxImage({
                      src: BRITISH_CONSOLIDATION_DETAILS.headerPalaceImg,
                      title: isEn ? 'British Colonial Residency & Flag' : 'బ్రిటిష్ వలస పాలనా భవనం',
                      subtitle: isEn ? 'Symbol of East India Company political rule' : 'ఈస్ట్ ఇండియా కంపెనీ రాజకీయ ఆధిపత్య చిహ్నం'
                    }); }}
                    className="md:col-span-3 h-28 bg-white rounded-xl overflow-hidden border border-[#D4AF37] cursor-pointer group flex items-center justify-center p-1.5 shadow-2xs"
                  >
                    <img
                      src={BRITISH_CONSOLIDATION_DETAILS.headerPalaceImg}
                      alt="Colonial Palace"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Center: Intro Text & Full Poster Button */}
                  <div className="md:col-span-6 space-y-2 text-center md:text-left">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-extrabold uppercase tracking-wider inline-block">
                      ⭐ {isEn ? BRITISH_CONSOLIDATION_DETAILS.subtitleEn : BRITISH_CONSOLIDATION_DETAILS.subtitleTe}
                    </span>
                    <p className="text-xs sm:text-sm text-[#3E2723] leading-relaxed font-medium">
                      {isEn ? BRITISH_CONSOLIDATION_DETAILS.introEn : BRITISH_CONSOLIDATION_DETAILS.introTe}
                    </p>
                    <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <button
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: BRITISH_CONSOLIDATION_DETAILS.posterImg,
                          title: isEn ? BRITISH_CONSOLIDATION_DETAILS.titleEn : BRITISH_CONSOLIDATION_DETAILS.titleTe,
                          subtitle: isEn ? BRITISH_CONSOLIDATION_DETAILS.subtitleEn : BRITISH_CONSOLIDATION_DETAILS.subtitleTe
                        }); }}
                        className="px-3 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#D84315] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'View Original Full Poster (Zoomable)' : 'పూర్తి మూల చార్ట్ చూడండి (జూమ్)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Artillery & India Map */}
                  <div
                    onClick={() => { setLightboxZoom(1); setLightboxImage({
                      src: BRITISH_CONSOLIDATION_DETAILS.headerArtilleryImg,
                      title: isEn ? 'British Artillery & Expansion Across India' : 'బ్రిటిష్ ఫిరంగి దళం & భారత విస్తరణ పటం',
                      subtitle: isEn ? 'Military superiority in 18th–19th century wars' : '18–19వ శతాబ్దపు యుద్ధాలలో సైనిక ఆధిపత్యం'
                    }); }}
                    className="md:col-span-3 h-28 bg-white rounded-xl overflow-hidden border border-[#D4AF37] cursor-pointer group flex items-center justify-center p-1.5 shadow-2xs"
                  >
                    <img
                      src={BRITISH_CONSOLIDATION_DETAILS.headerArtilleryImg}
                      alt="British Artillery & Map"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 1: BATTLE OF PLASSEY (1757) & BATTLE OF BUXAR (1764) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {BRITISH_CONSOLIDATION_DETAILS.battles.map((battle) => (
                  <div
                    key={battle.id}
                    className="bg-white rounded-2xl border-2 border-[#D4AF37] shadow-sm overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top Banner */}
                    <div
                      className="px-4 py-2.5 text-white font-extrabold text-sm sm:text-base font-telugu-serif flex items-center justify-between"
                      style={{ backgroundColor: battle.bannerColor }}
                    >
                      <span className="flex items-center gap-2">
                        <span>⚔️</span>
                        <span>{isEn ? battle.titleEn : battle.titleTe}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/20 text-[#FFE082] text-xs font-extrabold">
                        {isEn ? battle.year : battle.yearTe}
                      </span>
                    </div>

                    {/* Content + Circular Battle Image */}
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
                      <ul className="sm:col-span-7 space-y-2 text-xs sm:text-[13px] text-[#2C1810] font-medium">
                        {(isEn ? battle.pointsEn : battle.pointsTe).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span
                              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: battle.bannerColor }}
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: battle.img,
                          title: isEn ? battle.titleEn : battle.titleTe,
                          subtitle: isEn ? battle.year : battle.yearTe
                        }); }}
                        className="sm:col-span-5 flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#FAF7F0] p-1 group-hover:scale-105 transition-transform">
                          <img
                            src={battle.img}
                            alt={battle.titleEn}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[#7B1113] mt-1 group-hover:underline">
                          🔍 {isEn ? 'Click to Zoom' : 'పెద్దదిగా చూడండి'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SECTION 2: THREE PILLARS OF COLONIAL EXPANSION — SUBSIDIARY ALLIANCE (1798), DOCTRINE OF LAPSE (1848), PERMANENT SETTLEMENT (1793) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BRITISH_CONSOLIDATION_DETAILS.policies.map((pol) => (
                  <div
                    key={pol.id}
                    className="bg-white rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-xs overflow-hidden flex flex-col transition-colors"
                  >
                    <div
                      className="px-3.5 py-2 text-white font-bold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2"
                      style={{ backgroundColor: pol.headerColor }}
                    >
                      <span>{isEn ? pol.titleEn : pol.titleTe}</span>
                      <span className="px-2 py-0.5 rounded bg-white/20 text-[#FFE082] text-[10px] font-extrabold shrink-0">
                        {isEn ? pol.year : pol.yearTe}
                      </span>
                    </div>

                    <div className="p-3.5 flex flex-col sm:flex-row gap-3 items-center flex-1">
                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: pol.img,
                          title: isEn ? pol.titleEn : pol.titleTe,
                          subtitle: isEn ? pol.year : pol.yearTe
                        }); }}
                        className="w-20 h-28 shrink-0 bg-[#FAF7F0] rounded-xl border border-[#D4AF37]/60 p-1.5 flex items-center justify-center cursor-pointer group hover:scale-105 transition-transform"
                      >
                        <img
                          src={pol.img}
                          alt={pol.titleEn}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <ul className="space-y-1.5 text-[11.5px] text-[#3E2723] font-medium flex-1">
                        {(isEn ? pol.pointsEn : pol.pointsTe).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: pol.headerColor }}
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* SECTION 3: ANGLO-MYSORE WARS (1767–1799) & ANGLO-MARATHA WARS (1775–1818) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {BRITISH_CONSOLIDATION_DETAILS.regionalWars.map((war) => (
                  <div
                    key={war.id}
                    className="bg-white rounded-2xl border-2 border-[#D4AF37] shadow-xs overflow-hidden flex flex-col"
                  >
                    <div
                      className="px-4 py-2.5 text-white font-bold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2"
                      style={{ backgroundColor: war.headerColor }}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>⚔️</span>
                        <span>{isEn ? war.titleEn : war.titleTe}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/20 text-[#FFE082] text-[10px] font-extrabold shrink-0">
                        {isEn ? war.period : war.periodTe}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col sm:flex-row gap-4 items-center flex-1">
                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: war.img,
                          title: isEn ? war.captionEn : war.captionTe,
                          subtitle: isEn ? war.titleEn : war.titleTe
                        }); }}
                        className="w-28 h-28 rounded-xl bg-[#FAF7F0] border-2 border-[#D4AF37] p-1.5 shrink-0 flex flex-col items-center justify-center cursor-pointer group hover:scale-105 transition-transform shadow-2xs"
                      >
                        <img
                          src={war.img}
                          alt={war.captionEn}
                          className="max-h-20 max-w-full object-contain"
                        />
                        <span className="text-[9.5px] font-bold text-[#7B1113] text-center mt-1 leading-tight">
                          {isEn ? war.captionEn : war.captionTe}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-[#2C1810] font-medium flex-1">
                        {(isEn ? war.pointsEn : war.pointsTe).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span
                              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: war.headerColor }}
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* SECTION 4: IMPORTANT GOVERNOR-GENERALS AND THEIR CONTRIBUTIONS (6 PORTRAITS) */}
              <div className="bg-white rounded-2xl border-2 border-[#1E3A8A] shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#0F265C] via-[#1E3A8A] to-[#0F265C] px-4 py-2.5 text-center">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#FFE082] font-telugu-serif tracking-wide uppercase">
                    🏛️ {isEn ? 'Important Governor-Generals and Their Contributions (1772–1856)' : 'ప్రముఖ గవర్నర్-జనరల్స్ మరియు వారి సంస్కరణలు / సేవలు (1772–1856)'}
                  </h4>
                </div>

                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
                  {BRITISH_CONSOLIDATION_DETAILS.governorGenerals.map((gg, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF7F0] rounded-xl border border-[#D4AF37] p-3 flex flex-col items-center text-center shadow-2xs hover:shadow-md transition-shadow"
                    >
                      <h5
                        className="font-extrabold text-xs font-telugu-serif leading-tight"
                        style={{ color: gg.color }}
                      >
                        {isEn ? gg.nameEn : gg.nameTe}
                      </h5>
                      <span className="text-[10.5px] font-bold text-[#5D4037] mt-0.5 mb-2">
                        ({isEn ? gg.period : gg.periodTe})
                      </span>

                      <div
                        onClick={() => { setLightboxZoom(1); setLightboxImage({
                          src: gg.img,
                          title: isEn ? gg.nameEn : gg.nameTe,
                          subtitle: isEn ? gg.period : gg.periodTe
                        }); }}
                        className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-sm bg-white mb-2.5 cursor-pointer group"
                      >
                        <img
                          src={gg.img}
                          alt={gg.nameEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>

                      <ul className="text-left space-y-1.5 text-[11px] text-[#2C1810] font-medium w-full border-t border-[#E8DCC4] pt-2">
                        {(isEn ? gg.pointsEn : gg.pointsTe).map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 leading-snug">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: gg.color }}
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: IMPORTANT TIMELINE (1757–1856) & QUICK REVISION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Left 7 Cols: Important Timeline (10 Milestones) */}
                <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#1E3A8A] shadow-xs overflow-hidden flex flex-col">
                  <div className="bg-[#1E3A8A] px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span>📅 {isEn ? 'Important Timeline (1757 – 1856 CE)' : 'ముఖ్యమైన చారిత్రక కాలక్రమం (1757 – 1856)'}</span>
                    <span className="text-[10px] text-[#FFE082] font-bold">
                      10 {isEn ? 'Key Milestones' : 'మైలురాళ్ళు'}
                    </span>
                  </div>

                  <div className="p-4 grid grid-cols-2 sm:grid-cols-5 gap-3 flex-1 items-center">
                    {BRITISH_CONSOLIDATION_DETAILS.importantTimeline.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center bg-[#FAF7F0] p-2.5 rounded-xl border border-[#D4AF37]/60 shadow-2xs hover:border-[#7B1113] transition-colors"
                      >
                        <span
                          className="px-2.5 py-0.5 rounded-md text-white font-extrabold text-xs shadow-2xs mb-1.5"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.year}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-base shadow-2xs mb-1.5">
                          {item.icon}
                        </div>
                        <span className="text-[11px] font-bold text-[#2C1810] leading-tight">
                          {isEn ? item.labelEn : item.labelTe}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 Cols: Quick Revision Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#14532D] shadow-xs overflow-hidden flex flex-col">
                  <div className="bg-[#14532D] px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span>📖 {isEn ? 'Quick Revision (NCERT Summary)' : 'క్విక్ రివిజన్ (ముఖ్యాంశాల పునశ్చరణ)'}</span>
                    <span className="text-[10px] text-[#FFE082] font-bold">
                      ⚡ {isEn ? '5 Points' : '5 సూత్రాలు'}
                    </span>
                  </div>

                  <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-center">
                    {BRITISH_CONSOLIDATION_DETAILS.quickRevision.map((rev, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]"
                      >
                        <div className="w-7 h-7 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-2xs">
                          {rev.icon}
                        </div>
                        <div className="text-xs leading-snug">
                          <span className="font-extrabold text-[#7B1113]">
                            {isEn ? rev.termEn : rev.termTe}
                          </span>
                          <span className="text-[#D84315] font-bold mx-1">→</span>
                          <span className="text-[#2C1810] font-medium">
                            {isEn ? rev.descEn : rev.descTe}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => { setLightboxZoom(1); setLightboxImage({
                  src: BRITISH_CONSOLIDATION_DETAILS.posterImg,
                  title: isEn ? BRITISH_CONSOLIDATION_DETAILS.titleEn : BRITISH_CONSOLIDATION_DETAILS.titleTe,
                  subtitle: isEn ? BRITISH_CONSOLIDATION_DETAILS.subtitleEn : BRITISH_CONSOLIDATION_DETAILS.subtitleTe
                }); }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'Open Original British Consolidation Poster' : 'బ్రిటిష్ అధికారం సుస్థిరీకరణ మూల చార్ట్ తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsBritishModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: REVOLT OF 1857 (FIRST WAR OF INDIAN INDEPENDENCE) */}
      {/* ============================================================ */}
      {isRevolt1857ModalOpen && (
        <div
          onClick={() => setIsRevolt1857ModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#7C2D12] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">⚔️</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#7C2D12] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? '10 May 1857 • Meerut' : '10 మే 1857 • మీరట్'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? 'Armed Uprising Against British Rule' : 'బ్రిటిష్ పాలనపై సాయుధ తిరుగుబాటు'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn
                      ? 'Revolt of 1857 (First War of Indian Independence)'
                      : '1857 తిరుగుబాటు (ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం)'}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsRevolt1857ModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* FULL SOURCE IMAGE DISPLAY CARD (PRIMARY FOCUS) */}
              <div className="bg-[#FFFFFF] rounded-3xl border-2 border-[#C2410C] p-3 sm:p-5 shadow-md space-y-3 text-center">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E8DCC4] pb-2.5">
                  <div className="text-left">
                    <h4 className="font-extrabold text-sm sm:text-base text-[#7C2D12] font-telugu-serif flex items-center gap-1.5">
                      <span>🖼️</span>
                      <span>
                        {isEn
                          ? 'Revolt of 1857 — Illustrated Notebook Chart (Click Image to Zoom)'
                          : '1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం — సచిత్ర నోట్స్ పటము (జూమ్ చేయుటకు క్లిక్ చేయండి)'}
                      </span>
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: './images/indian_history/revolt_of_1857_poster.jpg',
                        title: isEn ? 'Revolt of 1857 (First War of Indian Independence)' : '1857 తిరుగుబాటు (ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం)',
                        subtitle: isEn ? 'Revolt Begins — Meerut, 10 May 1857' : 'ప్రారంభం: మీరట్, 10 మే 1857'
                      });
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#FDE047]" />
                    <span>{isEn ? 'Zoom Full Screen (+ / −)' : 'పూర్తి స్క్రీన్‌లో జూమ్ చేయండి (+ / −)'}</span>
                  </button>
                </div>

                <div
                  onClick={() => {
                    setLightboxZoom(1);
                    setLightboxImage({
                      src: './images/indian_history/revolt_of_1857_poster.jpg',
                      title: isEn ? 'Revolt of 1857 (First War of Indian Independence)' : '1857 తిరుగుబాటు (ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం)',
                      subtitle: isEn ? 'Revolt Begins — Meerut, 10 May 1857' : 'ప్రారంభం: మీరట్, 10 మే 1857'
                    });
                  }}
                  className="rounded-2xl overflow-hidden border-2 border-[#FED7AA] bg-[#FDFCF7] cursor-pointer group inline-block max-w-full shadow-sm"
                  title={isEn ? 'Click to open interactive zoom' : 'చిత్రంపై క్లిక్ చేసి జూమ్ చేయండి'}
                >
                  <img
                    src="./images/indian_history/revolt_of_1857_poster.jpg"
                    alt="Revolt of 1857 - First War of Indian Independence"
                    className="max-h-[680px] w-auto mx-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </div>

              {/* BILINGUAL SUMMARY OF THE CHART SECTIONS */}
              <div className="bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37] p-4 sm:p-5 space-y-4 shadow-xs">
                {/* Progression Flow Strip */}
                <div className="p-3 rounded-xl bg-[#FFF7ED] border border-[#F97316] text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#9A3412] font-telugu-serif">
                    {isEn
                      ? '↳ Cartridge Issue  →  Sepoy Revolt (Meerut, 10 May 1857)  →  Spread Across North India'
                      : '↳ తూటాల వివాదం (Cartridge Issue)  →  సిపాయిల తిరుగుబాటు (మీరట్, 10 మే 1857)  →  ఉత్తర భారతదేశమంతటా వ్యాప్తి'}
                  </span>
                </div>

                {/* Key Leaders & Major Centers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E8DCC4] space-y-2">
                    <h5 className="font-extrabold text-xs sm:text-sm text-[#7C2D12] border-b border-[#E8DCC4] pb-1">
                      👑 {isEn ? 'Key Leaders of the 1857 Revolt' : '1857 తిరుగుబాటు ప్రధాన నాయకులు'}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#2C1810] font-semibold">
                      <li>• {isEn ? 'Mangal Pandey (Barrackpore)' : 'మంగళ్ పాండే (బారక్‌పూర్ - తొలి తిరుగుబాటుదారుడు)'}</li>
                      <li>• {isEn ? 'Rani Lakshmibai (Jhansi)' : 'రాణి లక్ష్మీబాయి (ఝాన్సీ)'}</li>
                      <li>• {isEn ? 'Bahadur Shah Zafar (Delhi — Proclaimed Emperor)' : 'బహదూర్ షా జఫర్ (ఢిల్లీ — మొఘల్ చక్రవర్తి)'}</li>
                      <li>• {isEn ? 'Nana Sahib & Tatya Tope (Kanpur)' : 'నానా సాహెబ్ & తాంతియా తోపే (కాన్పూర్)'}</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E8DCC4] space-y-2">
                    <h5 className="font-extrabold text-xs sm:text-sm text-[#0F2C59] border-b border-[#E8DCC4] pb-1">
                      📍 {isEn ? 'Major Centers of Revolt (Map)' : 'తిరుగుబాటు ప్రధాన కేంద్రాలు (పటము)'}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#2C1810] font-semibold">
                      <li>• {isEn ? 'Meerut (Revolt began on 10 May 1857)' : 'మీరట్ (1857 మే 10న తిరుగుబాటు ప్రారంభం)'}</li>
                      <li>• {isEn ? 'Delhi (Political nerve center under Bahadur Shah Zafar)' : 'ఢిల్లీ (బహదూర్ షా జఫర్ నేతృత్వంలో ప్రధాన కేంద్రం)'}</li>
                      <li>• {isEn ? 'Kanpur (Led by Nana Sahib)' : 'కాన్పూర్ (నానా సాహెబ్ సారథ్యం)'}</li>
                      <li>• {isEn ? 'Jhansi (Heroic defense by Rani Lakshmibai)' : 'ఝాన్సీ (రాణి లక్ష్మీబాయి వీరోచిత పోరాటం)'}</li>
                    </ul>
                  </div>
                </div>

                {/* Causes & Course (Left) + Impact (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#C2410C]/50 space-y-2">
                    <h5 className="font-extrabold text-xs sm:text-sm text-[#C2410C] border-b border-[#E8DCC4] pb-1">
                      ⚡ {isEn ? 'Course of the Uprising' : 'తిరుగుబాటు గమనం & ముఖ్యాంశాలు'}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#2C1810] font-medium">
                      <li>• {isEn ? 'Immediate cause: Greased cartridges (Enfield rifles)' : 'తక్షణ కారణం: కొవ్వు పూసిన తూటాలు (ఎన్‌ఫీల్డ్ రైఫిల్స్ వివాదం)'}</li>
                      <li>• {isEn ? 'Spread rapidly across North and Central India' : 'ఉత్తర మరియు మధ్య భారతదేశంలో వేగంగా విస్తరించింది'}</li>
                      <li>• {isEn ? 'Suppressed by the British by 1858' : 'క్రీ.శ. 1858 నాటికి బ్రిటిష్ వారిచే అణచివేయబడింది'}</li>
                      <li>• {isEn ? 'Marked the end of East India Company rule' : 'ఈస్ట్ ఇండియా కంపెనీ పాలనకు ముగింపు పలికింది'}</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border-2 border-[#1B5E20]/60 space-y-2">
                    <h5 className="font-extrabold text-xs sm:text-sm text-[#1B5E20] border-b border-[#E8DCC4] pb-1">
                      🎯 {isEn ? 'Impact (Major Turning Point)' : 'ప్రభావం (భారత చరిత్రలో పెను మలుపు)'}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#2C1810] font-medium">
                      <li>• {isEn ? 'Beginning of organized resistance against colonial rule' : 'బ్రిటిష్ వలస పాలనపై సంఘటిత ప్రతిఘటనకు నాంది'}</li>
                      <li>• {isEn ? 'British Crown took direct control of India (Government of India Act, 1858)' : 'బ్రిటిష్ రాణి/కిరీటం (British Crown) నేరుగా భారత పాలనను చేపట్టింది (1858 చట్టం)'}</li>
                      <li>• {isEn ? 'Major turning point in modern Indian history' : 'ఆధునిక భారతదేశ చరిత్రలో అత్యంత కీలక మలుపు (Turning Point)'}</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: './images/indian_history/revolt_of_1857_poster.jpg',
                    title: isEn ? 'Revolt of 1857 (First War of Indian Independence)' : '1857 తిరుగుబాటు (ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం)',
                    subtitle: isEn ? 'Revolt Begins — Meerut, 10 May 1857' : 'ప్రారంభం: మీరట్, 10 మే 1857'
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7C2D12] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>{isEn ? 'Open Full Image in Lightbox Zoom' : 'పూర్తి చిత్రాన్ని జూమ్‌లో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsRevolt1857ModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7C2D12] text-[#FFE082] hover:bg-[#9A3412] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: FREEDOM MOVEMENT — MODERATE PHASE (1885 – 1905 CE) */}
      {/* ============================================================ */}
      {isModeratePhaseModalOpen && (
        <div
          onClick={() => setIsModeratePhaseModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E1B4B] via-[#3730A3] to-[#1E1B4B] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">📜</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#1E1B4B] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? '1885 – 1905 CE • INC Early Phase' : 'క్రీ.శ. 1885 – 1905 • భారత జాతీయ కాంగ్రెస్ తొలి దశ'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? MODERATE_PHASE_DETAILS.subtitleEn : MODERATE_PHASE_DETAILS.subtitleTe}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn ? MODERATE_PHASE_DETAILS.titleEn : MODERATE_PHASE_DETAILS.titleTe}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsModeratePhaseModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* TOP HERO BANNER WITH INC DELEGATES & PETITION/FLAG ILLUSTRATIONS */}
              <div className="bg-gradient-to-r from-[#EEF2FF] via-[#FFFFFF] to-[#EEF2FF] p-4 rounded-2xl border-2 border-[#6366F1] shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left: INC Building & Early Leaders */}
                  <div
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: MODERATE_PHASE_DETAILS.headerIncImg,
                        title: isEn ? 'Indian National Congress (1885)' : 'భారత జాతీయ కాంగ్రెస్ (1885)',
                        subtitle: isEn ? 'Early Moderate Leaders of the Freedom Movement' : 'భారత స్వాతంత్ర్య ఉద్యమ తొలి మితవాద నాయకులు'
                      });
                    }}
                    className="md:col-span-3 h-28 bg-white rounded-xl overflow-hidden border border-[#6366F1] cursor-pointer group flex items-center justify-center p-1.5 shadow-2xs"
                  >
                    <img
                      src={MODERATE_PHASE_DETAILS.headerIncImg}
                      alt="Indian National Congress"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Center: Subtitle & Full Poster Zoom Button */}
                  <div className="md:col-span-6 space-y-2 text-center md:text-left">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#3730A3] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider inline-block">
                      🏛️ {isEn ? MODERATE_PHASE_DETAILS.subtitleEn : MODERATE_PHASE_DETAILS.subtitleTe}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1E1B4B] leading-relaxed font-medium">
                      {isEn ? MODERATE_PHASE_DETAILS.introEn : MODERATE_PHASE_DETAILS.introTe}
                    </p>
                    <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <button
                        onClick={() => {
                          setLightboxZoom(1);
                          setLightboxImage({
                            src: MODERATE_PHASE_DETAILS.posterImg,
                            title: isEn ? MODERATE_PHASE_DETAILS.titleEn : MODERATE_PHASE_DETAILS.titleTe,
                            subtitle: isEn ? MODERATE_PHASE_DETAILS.subtitleEn : MODERATE_PHASE_DETAILS.subtitleTe
                          });
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#3730A3] hover:bg-[#4F46E5] text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'View Original Full Poster (Zoomable)' : 'పూర్తి మూల చార్ట్ చూడండి (జూమ్)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Petition, Quill & Flag */}
                  <div
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: MODERATE_PHASE_DETAILS.headerPetitionImg,
                        title: isEn ? 'Constitutional Methods: Petitions & Resolutions' : 'రాజ్యాంగబద్ధ పద్ధతులు: వినతిపత్రాలు & తీర్మానాలు',
                        subtitle: isEn ? 'Peaceful constitutional struggle (1885–1905)' : 'శాంతియుత రాజ్యాంగ పోరాటం (1885–1905)'
                      });
                    }}
                    className="md:col-span-3 h-28 bg-white rounded-xl overflow-hidden border border-[#6366F1] cursor-pointer group flex items-center justify-center p-1.5 shadow-2xs"
                  >
                    <img
                      src={MODERATE_PHASE_DETAILS.headerPetitionImg}
                      alt="Petition, Quill and Flag"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* MAIN 2-COLUMN BODY (MATCHING SOURCE LAYOUT): LEFT = KEY MODERATE LEADERS, RIGHT = MODERATE PHASE AT A GLANCE TABLE */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

                {/* LEFT 5 COLS: KEY MODERATE LEADERS (3 PORTRAITS) */}
                <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#14532D] shadow-sm overflow-hidden">
                  <div className="bg-[#14532D] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{isEn ? 'KEY MODERATE LEADERS' : 'ప్రముఖ మితవాద నాయకులు (KEY MODERATE LEADERS)'}</span>
                    </span>
                  </div>

                  <div className="p-4 divide-y divide-[#E8DCC4] space-y-4">
                    {MODERATE_PHASE_DETAILS.keyLeaders.map((leader, idx) => (
                      <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                        <div className="flex items-start gap-3.5">
                          <div
                            onClick={() => {
                              setLightboxZoom(1);
                              setLightboxImage({
                                src: leader.img,
                                title: isEn ? leader.nameEn : leader.nameTe,
                                subtitle: isEn ? 'Key Moderate Leader (1885–1905)' : 'ప్రముఖ మితవాద నాయకుడు (1885–1905)'
                              });
                            }}
                            className="w-20 h-26 rounded-xl overflow-hidden border-2 border-[#14532D] bg-[#FAF7F0] shrink-0 cursor-pointer group shadow-xs"
                          >
                            <img
                              src={leader.img}
                              alt={leader.nameEn}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>

                          <div className="space-y-1.5 flex-1">
                            <h5 className="font-extrabold text-xs sm:text-sm text-[#14532D] font-telugu-serif">
                              {isEn ? leader.nameEn : leader.nameTe}
                            </h5>
                            <ul className="space-y-1 text-[11.5px] text-[#1E293B] font-medium">
                              {(isEn ? leader.pointsEn : leader.pointsTe).map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-1.5 leading-snug">
                                  <span className="text-[#14532D] font-bold">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT 7 COLS: FREEDOM MOVEMENT: MODERATE PHASE AT A GLANCE (10-ROW TABLE) */}
                <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#1E3A8A] shadow-sm overflow-hidden">
                  <div className="bg-[#1E3A8A] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span>📋</span>
                      <span>
                        {isEn
                          ? 'FREEDOM MOVEMENT: MODERATE PHASE AT A GLANCE'
                          : 'మితవాద యుగము — సమగ్ర స్వరూపం (AT A GLANCE)'}
                      </span>
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#EFF6FF] border-b-2 border-[#1E3A8A] text-[#1E3A8A] font-extrabold">
                          <th className="p-2.5 sm:p-3 w-1/3 border-r border-[#BFDBFE]">
                            {isEn ? 'CATEGORY' : 'విభాగము (CATEGORY)'}
                          </th>
                          <th className="p-2.5 sm:p-3 w-2/3">
                            {isEn ? 'DETAILS' : 'వివరాలు (DETAILS)'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E8F0]">
                        {MODERATE_PHASE_DETAILS.atAGlance.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#F8FAFC] transition-colors">
                            <td className="p-2.5 sm:p-3 font-extrabold text-[#1E3A8A] align-top border-r border-[#E2E8F0] bg-[#F8FAFC]/60">
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{row.icon}</span>
                                <span>{isEn ? row.categoryEn : row.categoryTe}</span>
                              </div>
                            </td>
                            <td className="p-2.5 sm:p-3 text-[#1E293B] font-medium align-top whitespace-pre-line leading-relaxed">
                              {isEn ? row.detailsEn : row.detailsTe}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* BOTTOM 3 CARDS: (1) MAJOR EVENTS (1885 & 1905), (2) IMPORTANT DEVELOPMENT (INDIAN COUNCILS ACT, 1892), (3) MODERATES vs EXTREMISTS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                {/* Card 1 (4 Cols): MAJOR EVENTS (1885 & 1905) */}
                <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-[#1E3A8A] shadow-xs overflow-hidden flex flex-col">
                  <div className="bg-[#1E3A8A] px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                    <span>⭐</span>
                    <span>{isEn ? 'MAJOR EVENTS' : 'ముఖ్య ఘట్టాలు (MAJOR EVENTS)'}</span>
                  </div>

                  <div className="p-4 space-y-4 flex-1">
                    {MODERATE_PHASE_DETAILS.majorEventsBox.map((ev, idx) => (
                      <div key={idx} className="relative pl-4 border-l-2 border-[#1E3A8A] space-y-1">
                        <span className="px-2 py-0.5 rounded bg-[#1E3A8A] text-[#FEF08A] text-xs font-extrabold inline-block">
                          {ev.year}
                        </span>
                        <h6 className="font-extrabold text-xs sm:text-sm text-[#1E3A8A] font-telugu-serif">
                          {isEn ? ev.titleEn : ev.titleTe}
                        </h6>
                        <p className="text-[11.5px] text-[#334155] leading-relaxed font-medium">
                          {isEn ? ev.descEn : ev.descTe}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2 (4 Cols): IMPORTANT DEVELOPMENT — INDIAN COUNCILS ACT, 1892 */}
                <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-[#14532D] shadow-xs overflow-hidden flex flex-col">
                  <div className="bg-[#14532D] px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                    <span>🏛️</span>
                    <span>{isEn ? 'IMPORTANT DEVELOPMENT' : 'ముఖ్య పరిణామం (1892 చట్టం)'}</span>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    <h6 className="font-extrabold text-xs sm:text-sm text-[#14532D] font-telugu-serif border-b border-[#E8DCC4] pb-1.5">
                      {isEn ? MODERATE_PHASE_DETAILS.councilsAct1892.titleEn : MODERATE_PHASE_DETAILS.councilsAct1892.titleTe}
                    </h6>
                    <ul className="space-y-2 text-[11.5px] text-[#1E293B] font-medium">
                      {(isEn ? MODERATE_PHASE_DETAILS.councilsAct1892.pointsEn : MODERATE_PHASE_DETAILS.councilsAct1892.pointsTe).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card 3 (4 Cols): MODERATES vs EXTREMISTS */}
                <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-[#C2410C] shadow-xs overflow-hidden flex flex-col">
                  <div className="bg-[#C2410C] px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                    <span>⚔️</span>
                    <span>{isEn ? 'MODERATES vs EXTREMISTS' : 'మితవాదులు vs అతివాదులు'}</span>
                  </div>

                  <div className="p-3 overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-[#FFF7ED] border-b border-[#FDBA74] text-[#9A3412] font-extrabold">
                          <th className="p-2 w-1/2 border-r border-[#FED7AA]">
                            {isEn ? 'MODERATES' : 'మితవాదులు'}
                          </th>
                          <th className="p-2 w-1/2">
                            {isEn ? 'EXTREMISTS' : 'అతివాదులు'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#FFEDD5]">
                        {MODERATE_PHASE_DETAILS.moderatesVsExtremists.map((row, idx) => (
                          <tr key={idx}>
                            <td className="p-2 align-top border-r border-[#FFEDD5] text-[#1E293B] font-medium">
                              {isEn ? row.moderateEn : row.moderateTe}
                            </td>
                            <td className="p-2 align-top text-[#7C2D12] font-semibold">
                              <span className="mr-1">{row.icon}</span>
                              {isEn ? row.extremistEn : row.extremistTe}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: MODERATE_PHASE_DETAILS.posterImg,
                    title: isEn ? MODERATE_PHASE_DETAILS.titleEn : MODERATE_PHASE_DETAILS.titleTe,
                    subtitle: isEn ? MODERATE_PHASE_DETAILS.subtitleEn : MODERATE_PHASE_DETAILS.subtitleTe
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#3730A3] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#3730A3]" />
                <span>{isEn ? 'Open Original Moderate Phase Poster' : 'మితవాద యుగము మూల చార్ట్ తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsModeratePhaseModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#3730A3] text-[#FFE082] hover:bg-[#1E1B4B] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: SECOND PHASE OF THE INDIAN NATIONAL MOVEMENT — ASSERTIVE PHASE (1905 – 1916 CE) */}
      {/* ============================================================ */}
      {isAssertivePhaseModalOpen && (
        <div
          onClick={() => setIsAssertivePhaseModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#134E4A] via-[#0F766E] to-[#881337] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">✊</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#134E4A] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? '1905 – 1916 CE • Assertive / Extremist Phase' : 'క్రీ.శ. 1905 – 1916 • అతివాద జాతీయోద్యమ దశ'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? 'Swadeshi • Boycott • Surat Split • Lal-Bal-Pal' : 'స్వదేశీ • బహిష్కరణ • సూరత్ చీలిక • లాల్-బాల్-పాల్'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn ? ASSERTIVE_PHASE_DETAILS.titleEn : ASSERTIVE_PHASE_DETAILS.titleTe}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsAssertivePhaseModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* TOP HERO BANNER: INTRO + STICKY NOTE + PARTITION OF BENGAL (1905) MAP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Left 5 Cols: Intro & Sticky Note */}
                <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#0F766E] p-4 shadow-xs flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0F766E] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider">
                        🇮🇳 {isEn ? '1905 – 1916 CE' : 'క్రీ.శ. 1905 – 1916'}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#FEF08A] text-[#78350F] border border-[#F59E0B] text-[11px] font-extrabold shadow-2xs">
                        📌 {isEn ? 'A new spirit, A new assertive India! ⭐' : 'నూతన స్ఫూర్తి, నూతన భారతదేశం! ⭐'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1E293B] font-medium leading-relaxed">
                      {isEn ? ASSERTIVE_PHASE_DETAILS.introEn : ASSERTIVE_PHASE_DETAILS.introTe}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: ASSERTIVE_PHASE_DETAILS.posterImg,
                        title: isEn ? ASSERTIVE_PHASE_DETAILS.titleEn : ASSERTIVE_PHASE_DETAILS.titleTe,
                        subtitle: isEn ? ASSERTIVE_PHASE_DETAILS.subtitleEn : ASSERTIVE_PHASE_DETAILS.subtitleTe
                      });
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-[#FEF08A] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEn ? 'View Original Full Poster (Zoomable)' : 'పూర్తి మూల చార్ట్ చూడండి (జూమ్)'}</span>
                  </button>
                </div>

                {/* Right 7 Cols: Partition of Bengal (1905) Box + Map */}
                <div className="lg:col-span-7 bg-[#F0FDF4] rounded-2xl border-2 border-[#15803D] p-4 shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-7 space-y-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#15803D] text-white text-[11px] font-extrabold inline-block">
                      🗺️ {isEn ? 'Partition of Bengal in 1905' : '1905 బెంగాల్ విభజన (Partition of Bengal)'}
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#14532D] font-medium leading-relaxed">
                      {isEn ? ASSERTIVE_PHASE_DETAILS.partitionIntroEn : ASSERTIVE_PHASE_DETAILS.partitionIntroTe}
                    </p>
                  </div>

                  <div
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: ASSERTIVE_PHASE_DETAILS.bengalMapImg,
                        title: isEn ? 'Partition of Bengal (1905) Map' : '1905 బెంగాల్ విభజన పటము',
                        subtitle: isEn ? 'West Bengal (Hindu majority) & East Bengal (Muslim majority)' : 'పశ్చిమ బెంగాల్ (హిందూ మెజారిటీ) & తూర్పు బెంగాల్ (ముస్లిం మెజారిటీ)'
                      });
                    }}
                    className="sm:col-span-5 bg-white rounded-xl border-2 border-[#15803D]/50 p-2 cursor-pointer group flex flex-col items-center justify-center shadow-2xs"
                  >
                    <img
                      src={ASSERTIVE_PHASE_DETAILS.bengalMapImg}
                      alt="Bengal Partition Map 1905"
                      className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[10px] font-bold text-[#15803D] mt-1">
                      🔍 {isEn ? 'West vs East Bengal Map' : 'పశ్చిమ & తూర్పు బెంగాల్ పటం'}
                    </span>
                  </div>
                </div>
              </div>

              {/* MIDDLE 2-COLUMN SECTION: CAUSES OF THE PARTITION (1905) vs NATIONALIST PERSPECTIVE + TAGORE & RAKHI */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                {/* Left 5 Cols: CAUSES OF THE PARTITION (1905) */}
                <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#BE123C] shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-[#BE123C] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center gap-2">
                    <span>🚩</span>
                    <span>{isEn ? 'CAUSES OF THE PARTITION (1905)' : 'బెంగాల్ విభజనకు బ్రిటిష్ వారి కారణాలు (1905)'}</span>
                  </div>

                  <div className="p-4 space-y-3.5 flex-1">
                    {ASSERTIVE_PHASE_DETAILS.causesOfPartition.map((cause, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF1F2]/70 border border-[#FECDD3]">
                        <div className="w-9 h-9 rounded-xl bg-white border border-[#F43F5E] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                          {cause.icon}
                        </div>
                        <div className="space-y-1">
                          <h6 className="font-extrabold text-xs sm:text-sm text-[#9F1239] font-telugu-serif">
                            {isEn ? cause.titleEn : cause.titleTe}
                          </h6>
                          <p className="text-[11.5px] text-[#1E293B] font-medium leading-relaxed">
                            {isEn ? cause.descEn : cause.descTe}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 7 Cols: NATIONALIST PERSPECTIVE + RABINDRANATH TAGORE & RAKHI */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="bg-white rounded-2xl border-2 border-[#1D4ED8] shadow-sm overflow-hidden flex-1">
                    <div className="bg-[#1D4ED8] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span>🔥</span>
                        <span>{isEn ? 'NATIONALIST PERSPECTIVE (SWADESHI & BOYCOTT)' : 'జాతీయవాదుల దృక్పథం (స్వదేశీ & బహిష్కరణ ఉద్యమం)'}</span>
                      </span>
                    </div>

                    <div className="p-4 space-y-3">
                      {ASSERTIVE_PHASE_DETAILS.nationalistPerspective.map((np, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#EFF6FF]/60 border border-[#BFDBFE]">
                          <span className="text-base shrink-0 mt-0.5">{np.icon}</span>
                          <div className="space-y-0.5 flex-1">
                            <h6 className="font-extrabold text-xs sm:text-sm text-[#1E3A8A] font-telugu-serif">
                              {isEn ? np.titleEn : np.titleTe}
                            </h6>
                            <p className="text-[11.5px] text-[#1E293B] font-medium leading-relaxed">
                              {isEn ? np.descEn : np.descTe}
                            </p>
                          </div>
                          {idx === 2 && (
                            <div
                              onClick={() => {
                                setLightboxZoom(1);
                                setLightboxImage({
                                  src: ASSERTIVE_PHASE_DETAILS.swadeshiBonfireImg,
                                  title: isEn ? 'Swadeshi Movement: Bonfire of Foreign Goods' : 'స్వదేశీ ఉద్యమం: విదేశీ వస్త్రాల దహనం',
                                  subtitle: isEn ? 'Boycott of British textiles (1905)' : 'బ్రిటిష్ వస్తువుల బహిష్కరణ (1905)'
                                });
                              }}
                              className="w-16 h-16 rounded-xl bg-white border border-[#F97316] p-1 shrink-0 cursor-pointer group flex items-center justify-center"
                            >
                              <img
                                src={ASSERTIVE_PHASE_DETAILS.swadeshiBonfireImg}
                                alt="Swadeshi Bonfire"
                                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rabindranath Tagore & Rakhi Highlight Box */}
                  <div className="bg-gradient-to-r from-[#FEF9C3] via-[#FEF08A]/70 to-[#FEF9C3] rounded-2xl border-2 border-[#CA8A04] p-3.5 shadow-xs flex flex-col sm:flex-row items-center gap-4">
                    <div
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: ASSERTIVE_PHASE_DETAILS.tagorePortraitImg,
                          title: isEn ? 'Rabindranath Tagore (1905 Anti-Partition Protest)' : 'రవీంద్రనాథ్ ఠాగూర్ (1905 బెంగాల్ విభజన వ్యతిరేక ఉద్యమం)',
                          subtitle: isEn ? 'Composed "Amar Sonar Bangla" & led Raksha Bandhan unity' : '"అమర్ సోనార్ బంగ్లా" గీత రచన & రాఖీ ఐక్యతా వేడుక'
                        });
                      }}
                      className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#CA8A04] bg-white shrink-0 cursor-pointer group shadow-xs"
                    >
                      <img
                        src={ASSERTIVE_PHASE_DETAILS.tagorePortraitImg}
                        alt="Rabindranath Tagore"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="space-y-1 flex-1 text-center sm:text-left">
                      <h6 className="font-extrabold text-xs sm:text-sm text-[#854D0E] font-telugu-serif">
                        🎶 {isEn ? ASSERTIVE_PHASE_DETAILS.tagoreHighlight.titleEn : ASSERTIVE_PHASE_DETAILS.tagoreHighlight.titleTe}
                      </h6>
                      <p className="text-[11.5px] text-[#422006] font-semibold leading-relaxed">
                        {isEn ? ASSERTIVE_PHASE_DETAILS.tagoreHighlight.descEn : ASSERTIVE_PHASE_DETAILS.tagoreHighlight.descTe}
                      </p>
                    </div>

                    <div
                      onClick={() => {
                        setLightboxZoom(1);
                        setLightboxImage({
                          src: ASSERTIVE_PHASE_DETAILS.rakhiImg,
                          title: isEn ? 'Raksha Bandhan Symbol of Bengal Unity (1905)' : 'బెంగాల్ ఐక్యతకు చిహ్నంగా రాఖీ బంధం (1905)',
                          subtitle: isEn ? 'Tying rakhis to symbolize unbreakable unity' : 'హిందూ-ముస్లిం సోదరభావానికి ప్రతీక'
                        });
                      }}
                      className="w-24 h-16 rounded-xl overflow-hidden border border-[#CA8A04] bg-white p-1 shrink-0 cursor-pointer group flex items-center justify-center"
                    >
                      <img
                        src={ASSERTIVE_PHASE_DETAILS.rakhiImg}
                        alt="Rakhi Unity"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM 2-COLUMN SECTION: SURAT SPLIT OF 1907 (LEFT) & THE ASSERTIVE NATIONALISTS / LAL-BAL-PAL (RIGHT) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                {/* Left 5 Cols: SURAT SPLIT OF 1907 */}
                <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#15803D] shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-[#15803D] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span>🪧 {isEn ? ASSERTIVE_PHASE_DETAILS.suratSplit1907.titleEn : ASSERTIVE_PHASE_DETAILS.suratSplit1907.titleTe}</span>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="flex items-start gap-3">
                      <ul className="space-y-2 text-xs text-[#1E293B] font-medium flex-1">
                        {(isEn ? ASSERTIVE_PHASE_DETAILS.suratSplit1907.pointsEn : ASSERTIVE_PHASE_DETAILS.suratSplit1907.pointsTe).slice(0, 3).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-2 h-2 rounded-full bg-[#15803D] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        onClick={() => {
                          setLightboxZoom(1);
                          setLightboxImage({
                            src: ASSERTIVE_PHASE_DETAILS.suratSplitImg,
                            title: isEn ? 'Surat Split of 1907 (Unity vs Split)' : '1907 సూరత్ చీలిక (ఐక్యత vs చీలిక)',
                            subtitle: isEn ? 'Division between Moderates and Assertive Nationalists' : 'మితవాదులు మరియు అతివాదుల మధ్య చీలిక'
                          });
                        }}
                        className="w-20 h-28 rounded-xl bg-[#FAF7F0] border border-[#15803D]/50 p-1 shrink-0 cursor-pointer group flex items-center justify-center"
                      >
                        <img
                          src={ASSERTIVE_PHASE_DETAILS.suratSplitImg}
                          alt="Unity vs Split Signpost"
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FEF08A] border border-[#CA8A04] text-xs font-extrabold text-[#78350F] text-center">
                      {(isEn ? ASSERTIVE_PHASE_DETAILS.suratSplit1907.pointsEn : ASSERTIVE_PHASE_DETAILS.suratSplit1907.pointsTe)[3]}
                    </div>
                  </div>
                </div>

                {/* Right 7 Cols: THE ASSERTIVE NATIONALISTS (LAL-BAL-PAL TRIO) */}
                <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#6D28D9] shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#4C1D95] px-4 py-2.5 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between">
                    <span>🦁 {isEn ? ASSERTIVE_PHASE_DETAILS.assertiveNationalists.titleEn : ASSERTIVE_PHASE_DETAILS.assertiveNationalists.titleTe}</span>
                    <span className="px-2 py-0.5 rounded bg-white/20 text-[#FEF08A] text-[10px] font-extrabold">
                      Lal – Bal – Pal
                    </span>
                  </div>

                  <div className="p-4 space-y-3.5 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div
                        onClick={() => {
                          setLightboxZoom(1);
                          setLightboxImage({
                            src: ASSERTIVE_PHASE_DETAILS.lalBalPalImg,
                            title: isEn ? 'Lal–Bal–Pal Trio (Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal)' : 'లాల్–బాల్–పాల్ త్రయం (బాలగంగాధర తిలక్, లాలా లజపతిరాయ్, బిపిన్ చంద్ర పాల్)',
                            subtitle: isEn ? 'Leaders of the Assertive Nationalist Phase (1905–1916)' : 'అతివాద జాతీయోద్యమ అగ్రనాయకులు (1905–1916)'
                          });
                        }}
                        className="sm:col-span-5 bg-[#F5F3FF] rounded-2xl border-2 border-[#8B5CF6] p-2 cursor-pointer group flex flex-col items-center justify-center shadow-xs"
                      >
                        <img
                          src={ASSERTIVE_PHASE_DETAILS.lalBalPalImg}
                          alt="Lal Bal Pal Trio"
                          className="max-h-28 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <span className="text-[10px] font-extrabold text-[#5B21B6] mt-1">
                          🔍 {isEn ? 'Bal Gangadhar Tilak • Lala Lajpat Rai • Bipin Chandra Pal' : 'తిలక్ • లజపతిరాయ్ • బిపిన్ చంద్ర పాల్'}
                        </span>
                      </div>

                      <ul className="sm:col-span-7 space-y-2 text-xs text-[#1E293B] font-medium">
                        {(isEn ? ASSERTIVE_PHASE_DETAILS.assertiveNationalists.pointsEn : ASSERTIVE_PHASE_DETAILS.assertiveNationalists.pointsTe).map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-2 h-2 rounded-full bg-[#6D28D9] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FFF1F2] border-2 border-[#F43F5E] text-center">
                      <span className="text-xs sm:text-sm font-extrabold text-[#9F1239] font-telugu-serif">
                        🎯 {isEn ? ASSERTIVE_PHASE_DETAILS.assertiveNationalists.mainObjectiveEn : ASSERTIVE_PHASE_DETAILS.assertiveNationalists.mainObjectiveTe}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-[#EFF6FF] border border-[#3B82F6] text-center">
                      <span className="text-xs font-extrabold text-[#1E3A8A] italic">
                        {isEn ? ASSERTIVE_PHASE_DETAILS.assertiveNationalists.bottomQuoteEn : ASSERTIVE_PHASE_DETAILS.assertiveNationalists.bottomQuoteTe}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: ASSERTIVE_PHASE_DETAILS.posterImg,
                    title: isEn ? ASSERTIVE_PHASE_DETAILS.titleEn : ASSERTIVE_PHASE_DETAILS.titleTe,
                    subtitle: isEn ? ASSERTIVE_PHASE_DETAILS.subtitleEn : ASSERTIVE_PHASE_DETAILS.subtitleTe
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#0F766E] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>{isEn ? 'Open Original Assertive Phase Poster' : 'అతివాద యుగము మూల చార్ట్ తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsAssertivePhaseModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0F766E] text-[#FFE082] hover:bg-[#134E4A] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* POP-UP MODAL: TIMELINE — NATIONALISM IN INDIA (1915 – 1942 CE) */}
      {/* ============================================================ */}
      {isNationalismTimelineModalOpen && (
        <div
          onClick={() => setIsNationalismTimelineModalOpen(false)}
          className="fixed inset-0 z-80 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#C2410C] via-[#15803D] to-[#0F2C59] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-white border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🇮🇳</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FFE082] text-[#14532D] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? '1915 – 1942 CE • Gandhian Era' : 'క్రీ.శ. 1915 – 1942 • గాంధీ శకము'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/15 text-[#FFE082] text-[10px] font-semibold">
                      {isEn ? '8 Key Milestones of the Freedom Struggle' : 'స్వాతంత్ర్య పోరాటంలోని 8 చారిత్రక ఘట్టాలు'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl font-telugu-serif text-[#FFE082] mt-0.5">
                    {isEn ? NATIONALISM_TIMELINE_DETAILS.titleEn : NATIONALISM_TIMELINE_DETAILS.titleTe}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsNationalismTimelineModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* TOP INTRO BANNER + VIEW ORIGINAL TIMELINE POSTER BUTTON */}
              <div className="bg-gradient-to-r from-[#FFF7ED] via-[#FFFFFF] to-[#F0FDF4] p-4 rounded-2xl border-2 border-[#15803D] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1.5 text-center md:text-left flex-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#15803D] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider inline-block">
                    🕊️ {isEn ? NATIONALISM_TIMELINE_DETAILS.subtitleEn : NATIONALISM_TIMELINE_DETAILS.subtitleTe}
                  </span>
                  <p className="text-xs sm:text-sm text-[#1E293B] font-medium leading-relaxed">
                    {isEn ? NATIONALISM_TIMELINE_DETAILS.introEn : NATIONALISM_TIMELINE_DETAILS.introTe}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setLightboxZoom(1);
                    setLightboxImage({
                      src: NATIONALISM_TIMELINE_DETAILS.posterImg,
                      title: isEn ? NATIONALISM_TIMELINE_DETAILS.titleEn : NATIONALISM_TIMELINE_DETAILS.titleTe,
                      subtitle: isEn ? NATIONALISM_TIMELINE_DETAILS.subtitleEn : NATIONALISM_TIMELINE_DETAILS.subtitleTe
                    });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C2410C] to-[#15803D] hover:from-[#EA580C] hover:to-[#16A34A] text-[#FEF08A] text-xs font-extrabold flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>{isEn ? 'View Original Timeline Poster (Zoom)' : 'పూర్తి మూల కాలక్రమ చార్ట్ చూడండి (జూమ్)'}</span>
                </button>
              </div>

              {/* ALTERNATING WINDING TIMELINE OF THE 8 MILESTONES (1915 TO 1942) */}
              <div className="relative py-2">
                {/* Central Vertical Spine Line on Desktop */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0284C7] via-[#EA580C] to-[#15803D] rounded-full" />

                <div className="space-y-5">
                  {NATIONALISM_TIMELINE_DETAILS.events.map((ev) => {
                    const isLeft = ev.side === 'left';

                    return (
                      <div
                        key={ev.order}
                        className={`relative flex flex-col md:flex-row items-center ${
                          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                        } gap-3 md:gap-6`}
                      >
                        {/* Event Card */}
                        <div className="w-full md:w-[calc(50%-28px)]">
                          <div
                            className="bg-white rounded-2xl border-2 shadow-sm hover:shadow-md transition-all overflow-hidden"
                            style={{ borderColor: ev.borderColor }}
                          >
                            {/* Card Header */}
                            <div
                              className="px-4 py-2 text-white font-extrabold text-xs sm:text-sm font-telugu-serif flex items-center justify-between gap-2"
                              style={{ backgroundColor: ev.color }}
                            >
                              <span>{isEn ? ev.titleEn : ev.titleTe}</span>
                              <span className="px-2 py-0.5 rounded bg-white/20 text-[#FEF08A] text-[11px] font-extrabold shrink-0">
                                {isEn ? ev.year : ev.yearTe}
                              </span>
                            </div>

                            {/* Card Body: Illustration + Text */}
                            <div
                              className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center"
                              style={{ backgroundColor: ev.bgLight }}
                            >
                              <div
                                onClick={() => {
                                  setLightboxZoom(1);
                                  setLightboxImage({
                                    src: ev.img,
                                    title: isEn ? ev.titleEn : ev.titleTe,
                                    subtitle: isEn ? ev.summaryEn : ev.summaryTe
                                  });
                                }}
                                className="sm:col-span-5 bg-white rounded-xl border-2 p-2 flex flex-col items-center justify-center cursor-pointer group shadow-2xs"
                                style={{ borderColor: ev.borderColor }}
                              >
                                <img
                                  src={ev.img}
                                  alt={ev.titleEn}
                                  className="max-h-28 w-auto object-contain group-hover:scale-105 transition-transform"
                                />
                                <span
                                  className="text-[10px] font-extrabold mt-1 group-hover:underline"
                                  style={{ color: ev.color }}
                                >
                                  🔍 {isEn ? 'Click to Zoom' : 'పెద్దదిగా చూడండి'}
                                </span>
                              </div>

                              <div className="sm:col-span-7 space-y-2 text-left">
                                <p className="text-xs text-[#1E293B] font-semibold leading-relaxed">
                                  {isEn ? ev.summaryEn : ev.summaryTe}
                                </p>
                                <ul className="space-y-1 text-[11px] text-[#334155] font-medium border-t border-black/10 pt-1.5">
                                  {(isEn ? ev.highlightsEn : ev.highlightsTe).map((hl, hIdx) => (
                                    <li key={hIdx} className="flex items-start gap-1.5 leading-snug">
                                      <span
                                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                        style={{ backgroundColor: ev.color }}
                                      />
                                      <span>{hl}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Central Spine Arrow Circle */}
                        <div
                          className="hidden md:flex relative z-10 w-9 h-9 rounded-full text-white font-extrabold text-xs items-center justify-center shadow-md border-2 border-white shrink-0"
                          style={{ backgroundColor: ev.color }}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </div>

                        {/* Spacer for Opposite Column */}
                        <div className="hidden md:block w-full md:w-[calc(50%-28px)]" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FULL ORIGINAL POSTER IMAGE CARD AT BOTTOM */}
              <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-4 shadow-xs text-center space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E8DCC4] pb-2">
                  <span className="font-extrabold text-xs sm:text-sm text-[#14532D] font-telugu-serif">
                    🖼️ {isEn ? 'Complete Illustrated Timeline Chart (1915 – 1942)' : 'సంపూర్ణ సచిత్ర కాలక్రమ పటము (1915 – 1942)'}
                  </span>
                  <span className="text-[11px] text-[#5D4037] font-semibold">
                    {isEn ? 'Click image to zoom in full screen' : 'చిత్రంపై క్లిక్ చేసి పూర్తి పరిమాణంలో జూమ్ చేయండి'}
                  </span>
                </div>
                <div
                  onClick={() => {
                    setLightboxZoom(1);
                    setLightboxImage({
                      src: NATIONALISM_TIMELINE_DETAILS.posterImg,
                      title: isEn ? NATIONALISM_TIMELINE_DETAILS.titleEn : NATIONALISM_TIMELINE_DETAILS.titleTe,
                      subtitle: isEn ? NATIONALISM_TIMELINE_DETAILS.subtitleEn : NATIONALISM_TIMELINE_DETAILS.subtitleTe
                    });
                  }}
                  className="rounded-xl overflow-hidden border border-[#E8DCC4] bg-[#FDFCF7] cursor-pointer group inline-block max-w-full"
                >
                  <img
                    src={NATIONALISM_TIMELINE_DETAILS.posterImg}
                    alt="Timeline: Nationalism in India Full Poster"
                    className="max-h-[640px] w-auto mx-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: NATIONALISM_TIMELINE_DETAILS.posterImg,
                    title: isEn ? NATIONALISM_TIMELINE_DETAILS.titleEn : NATIONALISM_TIMELINE_DETAILS.titleTe,
                    subtitle: isEn ? NATIONALISM_TIMELINE_DETAILS.subtitleEn : NATIONALISM_TIMELINE_DETAILS.subtitleTe
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#15803D] border border-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#15803D]" />
                <span>{isEn ? 'Open Original Timeline Poster in Lightbox' : 'మూల కాలక్రమ చార్ట్ జూమ్‌లో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsNationalismTimelineModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#15803D] text-[#FFE082] hover:bg-[#14532D] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* DEDICATED POP-UP MODAL: HISTORICAL EVOLUTION OF BRITISH CONSTITUTIONAL DEVELOPMENT IN INDIA (1858–1947) */}
      {/* ============================================================ */}
      {isConstitutionalEvolutionModalOpen && (
        <div 
          onClick={() => setIsConstitutionalEvolutionModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D97706] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#78350F] text-[#FEF08A] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#F59E0B] sticky top-0 z-10">
              <div className="flex items-start gap-3">
                <div className="w-11 h-14 rounded-xl bg-[#FFFBEB] flex items-center justify-center p-1 shadow-md border-2 border-[#F59E0B] shrink-0 overflow-hidden">
                  <img 
                    src={CONSTITUTIONAL_EVOLUTION_DETAILS.crownEmblemImg} 
                    alt="British Crown Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded bg-[#F59E0B] text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider">
                      {isEn ? 'Phase 2: 1858 – 1947 CE' : '2వ దశ: క్రీ.శ. 1858 – 1947'}
                    </span>
                    <span className="text-xs text-[#FDE047] font-extrabold">
                      {isEn ? '7 Landmark Constitutional Acts' : '7 చారిత్రక రాజ్యాంగ చట్టాలు'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-telugu-serif text-white mt-1">
                    {isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.titleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.titleTe}
                  </h3>
                  <p className="text-xs text-[#FEF08A]/90 mt-0.5 font-semibold">
                    {isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsConstitutionalEvolutionModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFBEB] via-[#FAF7F0] to-[#FFFDF7]">

              {/* Top Banner: Phase 2 Crown Rule Overview */}
              <div className="bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1E293B] text-white p-4 rounded-xl border-2 border-[#D97706] shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👑</span>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-[#FEF08A] font-telugu-serif">
                      {isEn ? 'Phase 2: British Crown Rule (1858–1947)' : '2వ దశ: బ్రిటిష్ రాచరిక పాలన (1858–1947)'}
                    </h4>
                    <p className="text-xs text-white/90 mt-0.5">
                      {isEn 
                        ? 'Chronological evolution of legislative councils, communal & dyarchy reforms, federal autonomy, and Indian Independence.' 
                        : 'శాసన మండళ్ల ఆరంభం, ప్రాతినిధ్య సంస్కరణలు, ద్వంద్వ పాలన, రాష్ట్ర స్వయంప్రతిపత్తి మరియు 1947 భారత స్వాతంత్ర్య చట్టం.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setLightboxZoom(1);
                    setLightboxImage({
                      src: CONSTITUTIONAL_EVOLUTION_DETAILS.posterImg,
                      title: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.titleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.titleTe,
                      subtitle: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleTe
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] text-xs font-extrabold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Zoom Full Poster' : 'పూర్తి చార్ట్ జూమ్'}</span>
                </button>
              </div>

              {/* 7 Constitutional Acts Vertical Branching Timeline */}
              <div className="relative pl-4 sm:pl-8 border-l-4 border-[#B45309] space-y-5">
                {CONSTITUTIONAL_EVOLUTION_DETAILS.acts.map((act, idx) => (
                  <div 
                    key={act.id}
                    className="relative rounded-2xl border-2 p-4 sm:p-5 shadow-md hover:shadow-lg transition-all"
                    style={{
                      backgroundColor: act.bgLight,
                      borderColor: act.borderColor
                    }}
                  >
                    {/* Timeline Node Dot on Left Spine */}
                    <div 
                      className="absolute -left-[26px] sm:-left-[42px] top-6 w-5 h-5 rounded-full border-4 border-[#FAF7F0] shadow-sm"
                      style={{ backgroundColor: act.bannerColor }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                      {/* Left / Main Content Column */}
                      <div className={act.illustrationImg ? 'lg:col-span-8 space-y-3' : 'lg:col-span-12 space-y-3'}>
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span 
                              className="px-2.5 py-0.5 rounded-md text-xs font-extrabold text-[#FEF08A] shadow-2xs"
                              style={{ backgroundColor: act.bannerColor }}
                            >
                              #{idx + 1} • {isEn ? act.year : act.yearTe}
                            </span>
                            <span 
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-bold border"
                              style={{
                                borderColor: act.borderColor,
                                color: act.bannerColor,
                                backgroundColor: '#FFFFFF'
                              }}
                            >
                              {isEn ? act.categoryEn : act.categoryTe}
                            </span>
                          </div>

                          {act.isFocusPoint && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#B45309] text-[#FEF08A] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-2xs">
                              <span>⭐</span>
                              <span>{isEn ? 'Focus Point' : 'ప్రధాన ఘట్టం'}</span>
                            </span>
                          )}
                        </div>

                        {/* Ornamental Title Banner */}
                        <div className="flex items-center gap-3">
                          {act.focusBadgeImg && (
                            <div 
                              onClick={() => {
                                setLightboxZoom(1);
                                setLightboxImage({
                                  src: act.focusBadgeImg!,
                                  title: isEn ? act.titleEn : act.titleTe,
                                  subtitle: isEn ? act.categoryEn : act.categoryTe
                                });
                              }}
                              className="w-14 h-14 rounded-full border-2 border-[#D97706] bg-[#FFFBEB] overflow-hidden shrink-0 cursor-pointer shadow-xs hover:scale-105 transition-transform"
                              title={isEn ? 'Click to zoom Focus Point emblem' : 'ప్రధాన ఘట్టం చిహ్నాన్ని పెద్దదిగా చూడండి'}
                            >
                              <img 
                                src={act.focusBadgeImg} 
                                alt="Focus Point Badge"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <div 
                            className="flex-1 px-3.5 py-2 rounded-xl text-white font-bold text-sm sm:text-base font-telugu-serif shadow-xs border border-white/20"
                            style={{ backgroundColor: act.bannerColor }}
                          >
                            {isEn ? act.titleEn : act.titleTe}
                          </div>
                        </div>

                        {/* Key Provisions Bullet List */}
                        <ul className="space-y-2 pt-1">
                          {(isEn ? act.pointsEn : act.pointsTe).map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs sm:text-sm text-[#1E293B] flex items-start gap-2 leading-relaxed font-medium">
                              <span 
                                className="font-extrabold mt-0.5 shrink-0"
                                style={{ color: act.bannerColor }}
                              >
                                ❖
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column: Extracted Source Illustration (if present for this Act) */}
                      {act.illustrationImg && (
                        <div className="lg:col-span-4">
                          <div 
                            onClick={() => {
                              setLightboxZoom(1);
                              setLightboxImage({
                                src: act.illustrationImg!,
                                title: isEn ? act.titleEn : act.titleTe,
                                subtitle: isEn ? act.illustrationCaptionEn : act.illustrationCaptionTe
                              });
                            }}
                            className="bg-white rounded-xl border-2 p-2.5 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center"
                            style={{ borderColor: act.borderColor }}
                            title={isEn ? 'Click to enlarge illustration' : 'చిత్రాన్ని పెద్దదిగా చూడటానికి క్లిక్ చేయండి'}
                          >
                            <div className="relative w-full h-28 sm:h-32 rounded-lg overflow-hidden bg-[#FFFDF7] flex items-center justify-center">
                              <img 
                                src={act.illustrationImg} 
                                alt={act.titleEn}
                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-1.5 right-1.5 bg-black/60 text-[#FEF08A] rounded-md p-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-3 h-3" />
                              </div>
                            </div>
                            <span className="text-[10.5px] font-bold text-[#334155] mt-1.5 leading-snug">
                              {isEn ? act.illustrationCaptionEn : act.illustrationCaptionTe}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Concluding Constitutional Evolution Summary Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#78350F] text-[#FEF08A] border-2 border-[#F59E0B] shadow-lg space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FDE047]">
                  <span>⚖️</span>
                  <span>{isEn ? 'Constitutional Evolution Summary (1773 – 1947)' : 'భారత రాజ్యాంగ పరిణామ సారాంశం (1773 – 1947)'}</span>
                </div>
                <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed font-telugu-serif">
                  "{isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.summaryQuoteEn : CONSTITUTIONAL_EVOLUTION_DETAILS.summaryQuoteTe}"
                </p>
              </div>

              {/* Full Reference Infographic Poster at the Bottom */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#D97706] shadow-md space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-[#1E293B] font-telugu-serif flex items-center gap-2">
                    <span>🖼️</span>
                    <span>{isEn ? 'Complete Source Infographic: British Constitutional Development (1858–1947)' : 'పూర్తి సచిత్ర చార్ట్: బ్రిటిష్ రాజ్యాంగ పరిణామ చరిత్ర (1858–1947)'}</span>
                  </h4>
                  <button
                    onClick={() => {
                      setLightboxZoom(1);
                      setLightboxImage({
                        src: CONSTITUTIONAL_EVOLUTION_DETAILS.posterImg,
                        title: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.titleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.titleTe,
                        subtitle: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleTe
                      });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#1E293B] hover:bg-[#B45309] text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Full Screen Zoom' : 'పూర్తి స్క్రీన్ జూమ్'}</span>
                  </button>
                </div>

                <div 
                  onClick={() => {
                    setLightboxZoom(1);
                    setLightboxImage({
                      src: CONSTITUTIONAL_EVOLUTION_DETAILS.posterImg,
                      title: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.titleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.titleTe,
                      subtitle: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleTe
                    });
                  }}
                  className="bg-[#FAF7F0] rounded-xl p-3 border border-[#F59E0B] flex justify-center cursor-pointer group overflow-hidden"
                >
                  <img 
                    src={CONSTITUTIONAL_EVOLUTION_DETAILS.posterImg} 
                    alt="Historical Evolution of British Constitutional Development in India Poster"
                    className="max-h-[540px] w-auto object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t border-[#E8DCC4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#5D4037]">
              <button
                onClick={() => {
                  setLightboxZoom(1);
                  setLightboxImage({
                    src: CONSTITUTIONAL_EVOLUTION_DETAILS.posterImg,
                    title: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.titleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.titleTe,
                    subtitle: isEn ? CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleEn : CONSTITUTIONAL_EVOLUTION_DETAILS.subtitleTe
                  });
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FEF08A] text-[#1E293B] border border-[#D97706] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#B45309]" />
                <span>{isEn ? 'Open Original Constitutional Poster in Lightbox' : 'మూల రాజ్యాంగ పరిణామ చార్ట్ జూమ్‌లో తెరవండి'}</span>
              </button>

              <button
                onClick={() => setIsConstitutionalEvolutionModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#1E293B] text-[#FEF08A] hover:bg-[#0F172A] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Details' : 'వివరాలు మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TOP-LEVEL LIGHTBOX MODAL WITH INTERACTIVE ZOOM CONTROLS (z-100) */}
      {/* ============================================================ */}
      {lightboxImage && (
        <div 
          onClick={() => { setLightboxImage(null); setLightboxZoom(1); }}
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 overflow-y-auto"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#1A1A1A] rounded-2xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[94vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Lightbox Header with Zoom Controls */}
            <div className="bg-[#2C1810] px-4 py-3 border-b border-[#D4AF37]/50 flex items-center justify-between gap-3 flex-wrap text-white">
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-sm sm:text-base text-[#FFE082] font-telugu-serif truncate">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-white/70 mt-0.5 truncate">
                  {lightboxImage.subtitle}
                </p>
              </div>

              {/* Interactive Zoom Buttons */}
              <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                <a
                  href={lightboxImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer mr-1"
                  title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEn ? "Picture Link" : "చిత్రం లింక్"}</span>
                </a>
                <button
                  onClick={() => setLightboxZoom(z => Math.max(0.75, +(z - 0.5).toFixed(2)))}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/25 text-[#FFE082] text-xs font-extrabold border border-[#D4AF37]/50 cursor-pointer"
                  title={isEn ? 'Zoom Out' : 'జూమ్ తగ్గించండి'}
                >
                  −
                </button>
                <button
                  onClick={() => setLightboxZoom(1)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/25 text-white text-xs font-bold border border-[#D4AF37]/40 cursor-pointer min-w-[54px] text-center"
                  title={isEn ? 'Reset Zoom' : 'సాధారణ పరిమాణం'}
                >
                  {Math.round(lightboxZoom * 100)}%
                </button>
                <button
                  onClick={() => setLightboxZoom(z => Math.min(3.5, +(z + 0.5).toFixed(2)))}
                  className="px-2.5 py-1 rounded-lg bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-extrabold cursor-pointer"
                  title={isEn ? 'Zoom In' : 'జూమ్ పెంచండి'}
                >
                  + {isEn ? 'Zoom' : 'జూమ్'}
                </button>
                <button
                  onClick={() => { setLightboxImage(null); setLightboxZoom(1); }}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600/80 text-white transition-colors cursor-pointer ml-1"
                  title={isEn ? 'Close' : 'మూసివేయండి'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport & Optional Details */}
            <div className="flex-1 bg-black overflow-auto max-h-[80vh]">
              <div className="p-3 sm:p-6 flex items-center justify-center min-h-[55vh] bg-black overflow-auto">
                <img 
                  src={lightboxImage.src} 
                  alt={lightboxImage.title}
                  onClick={() => setLightboxZoom(z => (z >= 2.5 ? 1 : +(z + 0.75).toFixed(2)))}
                  style={{
                    transform: `scale(${lightboxZoom})`,
                    transformOrigin: 'top center'
                  }}
                  className={`max-h-[74vh] max-w-full object-contain rounded-lg shadow-lg transition-transform duration-200 ${
                    lightboxZoom < 2.5 ? 'cursor-zoom-in' : 'cursor-zoom-out'
                  }`}
                  title={isEn ? 'Click image to toggle zoom' : 'చిత్రంపై క్లిక్ చేసి జూమ్ చేయండి'}
                />
              </div>

              {/* If 16 Mahajanapadas, show comprehensive table & details in Telugu */}
              {lightboxImage.showMahajanapadasList && (
                <div className="bg-[#FAF7F0] p-4 sm:p-6 border-t-2 border-[#D4AF37] space-y-4 text-left">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h5 className="font-bold text-sm sm:text-base text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                        <span>🏛️</span>
                        <span>{isEn ? 'The 16 Ancient Mahajanapadas & Their Capitals' : '16 ప్రాచీన మహాజనపదాలు మరియు వాటి రాజధానుల వివరాలు'}</span>
                      </h5>
                      <p className="text-xs text-[#5D4037] mt-0.5">
                        {isEn 
                          ? 'According to early Buddhist text Anguttara Nikaya and Jain text Bhagavati Sutra'
                          : 'బౌద్ధ గ్రంథం అంగుత్తర నికాయ మరియు జైన గ్రంథం భగవతీ సూత్రం ఆధారంగా'}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#7B1113] text-[#FFE082] text-xs font-bold">
                      16 {isEn ? 'States' : 'జనపదాలు'}
                    </span>
                  </div>

                  {/* 16 Mahajanapadas Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {SIXTEEN_MAHAJANAPADAS_LIST.map((m) => (
                      <div key={m.number} className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DCC4] shadow-2xs space-y-1 hover:border-[#D4AF37] transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37]/50">
                            #{m.number}
                          </span>
                          <span className="text-[10px] font-semibold text-[#880E4F]">
                            {isEn ? m.typeEn : m.typeTe}
                          </span>
                        </div>
                        <h6 className="font-bold text-xs sm:text-sm text-[#7B1113] font-telugu-serif">
                          {isEn ? m.nameEn : m.nameTe}
                        </h6>
                        <div className="text-[11px] text-[#D84315] font-semibold">
                          <span className="text-[#5D4037] font-normal">{isEn ? 'Capital: ' : 'రాజధాని: '}</span>
                          {isEn ? m.capitalEn : m.capitalTe}
                        </div>
                        <div className="text-[10px] text-[#5D4037] leading-snug">
                          {isEn ? m.locationEn : m.locationTe}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Lightbox Footer */}
            <div className="px-4 py-2.5 bg-[#2C1810] border-t border-[#D4AF37]/50 flex items-center justify-between text-xs text-[#FFE082]/80">
              <span>
                {isEn 
                  ? 'Tip: Click directly on the image or use + / − buttons above to zoom in & out' 
                  : 'సూచన: చిత్రంపై నేరుగా క్లిక్ చేసి లేదా పైన ఉన్న + జూమ్ బటన్ ద్వారా పెద్దదిగా చూడవచ్చు'}
              </span>
              <button
                onClick={() => { setLightboxImage(null); setLightboxZoom(1); }}
                className="px-3.5 py-1 rounded-lg bg-[#FFE082] text-[#7B1113] font-bold hover:bg-[#FFF8E1] cursor-pointer"
              >
                {isEn ? 'Close' : 'ముగించండి'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
