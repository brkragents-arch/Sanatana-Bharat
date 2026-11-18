import React, { useState, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  RAMAYANA_ASTRONOMICAL_TIMELINE,
  RAMA_SHLOKA_ORIGIN_DATA,
  RAMAYANA_FAMILY_TREE_DATA
} from '../../data/vedicChronologyTimelineData';
import { 
  Search, 
  Maximize2, 
  X, 
  Sparkles, 
  ArrowDown, 
  Filter
} from 'lucide-react';

interface RamayanaTretaTimelineSectionProps {
  onOpenChartModal?: (img: { src: string; title: string; subtitle?: string }) => void;
  defaultTab?: 'events' | 'familyTree' | 'shloka' | 'emperors' | 'evidence';
}

// 12 Legendary Solar Emperors of Treta Yuga
interface SolarEmperor {
  order: number;
  nameTe: string;
  nameEn: string;
  epithetTe: string;
  epithetEn: string;
  reignHighlightsTe: string;
  reignHighlightsEn: string;
  achievementsTe: string[];
  achievementsEn: string[];
  icon: string;
}

const TRETA_SOLAR_EMPERORS: SolarEmperor[] = [
  {
    order: 1,
    nameTe: 'ఇక్ష్వాకు చక్రవర్తి',
    nameEn: 'Emperor Ikshvaku',
    epithetTe: 'సూర్యవంశ మూలపురుషుడు (Son of Vaivasvata Manu)',
    epithetEn: 'Founding Monarch of the Solar Dynasty',
    reignHighlightsTe: 'వైవస్వత మనువు జ్యేష్ఠ పుత్రుడు. అయోధ్యను రాజధానిగా చేసుకుని సూర్యవంశ సామ్రాజ్య స్థాపన చేశాడు.',
    reignHighlightsEn: 'Eldest son of Vaivasvata Manu who established Ayodhya as the capital and founded the Solar line.',
    achievementsTe: ['అయోధ్యా నగర స్థాపన', 'ధర్మశాస్త్రాల ఆధారిత రాజ్యపాలన ప్రారంభం'],
    achievementsEn: ['Foundation of Ayodhya', 'Instituted governance according to Dharmashastras'],
    icon: '☀️'
  },
  {
    order: 2,
    nameTe: 'మాంధాత చక్రవర్తి',
    nameEn: 'Emperor Mandhata',
    epithetTe: 'సప్తద్వీప సార్వభౌమ చక్రవర్తి',
    epithetEn: 'Sovereign Ruler of the Seven Continents',
    reignHighlightsTe: 'యువనాశ్వుని కుమారుడు. సూర్యుడు ఉదయించే చోటు నుండి అస్తమించే చోటు వరకు సమస్త భూమండలాన్ని ఏకఛత్రాధిపత్యంగా పాలించాడు.',
    reignHighlightsEn: 'Son of Yuvanashva who ruled the entire earth from sunrise to sunset in righteousness.',
    achievementsTe: ['శతాధిక అశ్వమేధ మరియు రాజసూయ యాగాలు', 'అసమాన దానశీలత & ధర్మసంస్థాపన'],
    achievementsEn: ['Performed over 100 Ashvamedha and Rajasuya yajnas', 'Unmatched charity and sovereignty'],
    icon: '👑'
  },
  {
    order: 3,
    nameTe: 'హరిశ్చంద్ర మహారాజు',
    nameEn: 'King Harishchandra',
    epithetTe: 'సత్యహరిశ్చంద్రుడు • సత్యనిష్ఠా శిఖామణి',
    epithetEn: 'The Immortal Paragon of Absolute Truth',
    reignHighlightsTe: 'విశ్వామిత్ర మహర్షి పెట్టిన కఠిన పరీక్షలలో రాజ్యసంపదలను, చివరకు భార్యాపుత్రులను కోల్పోయినా ఆడిన మాట తప్పని సత్యవ్రతుడు.',
    reignHighlightsEn: 'Sacrificed his kingdom, wealth, and family under Vishvamitra\'s trial yet never compromised truth.',
    achievementsTe: ['సత్యానికి కాలాతీత చిహ్నంగా నిలవడం', 'సర్వస్వ త్యాగంతో ధర్మ ప్రతిష్ఠాపన'],
    achievementsEn: ['Eternally venerated as the embodiment of Satya (Truth)', 'Supreme dharmic fortitude'],
    icon: '⚖️'
  },
  {
    order: 4,
    nameTe: 'సగర చక్రవర్తి',
    nameEn: 'Emperor Sagara',
    epithetTe: 'సాగర నామకారకుడు • అశ్వమేధ యాజి',
    epithetEn: 'The Ocean-Namer Monarch',
    reignHighlightsTe: 'బాహుకుని కుమారుడు. అశ్వమేధ యాగం నిర్వహించగా, యాగ అశ్వాన్ని వెతుకుతూ ఆయన 60,000 మంది కుమారులు భూమిని తవ్వి సముద్రానికి (సాగరం) కారణమయ్యారు.',
    reignHighlightsEn: 'Conquered hostile rivals and whose 60,000 sons excavated the ocean basin, giving it the name Sagara.',
    achievementsTe: ['అసమాన దిగ్విజయాలు', 'సముద్ర భౌగోళిక నామకరణం'],
    achievementsEn: ['Vast territorial consolidation', 'Etymological origin of Sagara (ocean)'],
    icon: '🌊'
  },
  {
    order: 5,
    nameTe: 'భగీరథ మహారాజు',
    nameEn: 'King Bhagiratha',
    epithetTe: 'గంగావతరణ శిల్పి • అపర తపోధనుడు',
    epithetEn: 'The Celestial Conduit who Brought Sacred Ganga to Earth',
    reignHighlightsTe: 'తన పూర్వీకులైన సగర పుత్రుల సద్గతికై శివుని, బ్రహ్మదేవుని మెప్పించి స్వర్గలోకం నుండి గంగను భూమికి, అక్కడి నుండి పాతాళానికి చేర్చిన అద్వితీయ తపోశాలి ("భగీరథ ప్రయత్నం").',
    reignHighlightsEn: 'Through unparalleled penance, brought celestial river Ganga down to purify his ancestors, establishing human prosperity.',
    achievementsTe: ['భూమిపైకి గంగా నదీ ప్రవాహం తెచ్చుట', 'ఉత్తర భారతదేశాన్ని సుభిక్షం చేయుట'],
    achievementsEn: ['Descent of river Ganga (Bhagirathi)', 'Fertilized the entire Gangetic plains'],
    icon: '💧'
  },
  {
    order: 6,
    nameTe: 'దిలీప మహారాజు',
    nameEn: 'King Dilipa',
    epithetTe: 'గోసేవా ధురంధరుడు • రఘుకుల పూర్వికుడు',
    epithetEn: 'The Exemplar of Cow Protection & Righteous Monarchy',
    reignHighlightsTe: 'వసిష్ఠ మహర్షి ఆశ్రమంలో కామధేనువు పుత్రిక నందినిని 21 రోజుల పాటు స్వయంగా సేవించి, సింహం నుండి కాపాడేందుకు తన దేహాన్ని అర్పించడానికి సిద్ధపడిన గోరక్షకుడు.',
    reignHighlightsEn: 'Served Nandini the sacred cow with complete humility, earning the blessing to bear world-renowned Raghu.',
    achievementsTe: ['నందినీ గోసేవా వ్రతం', 'సంతాన భాగ్య సిద్ధి & రఘు మహారాజు జననం'],
    achievementsEn: ['Embodiment of compassion towards creatures', 'Fathered world-conqueror Raghu'],
    icon: '🐄'
  },
  {
    order: 7,
    nameTe: 'రఘు మహారాజు',
    nameEn: 'Emperor Raghu',
    epithetTe: 'దిగ్విజయ చక్రవర్తి • రఘువంశ ప్రవర్తకుడు',
    epithetEn: 'The World-Conqueror & Namesake of Raghuvansha',
    reignHighlightsTe: 'చతుస్సముద్ర పర్యంతం సమస్త దిక్కులను జయించి విశ్వజిత్ యాగం నిర్వహించాడు. యాగం ముగింపులో తన సమస్త సంపదలను దానం చేసి మట్టి పాత్రలలో జీవించిన మహాత్యాగి.',
    reignHighlightsEn: 'Conquered all four corners of Bharat, performed Vishvajit yajna, and gave away all wealth in supreme charity.',
    achievementsTe: ['రఘువంశానికి జగత్ప్రసిద్ధి తేవడం', 'విశ్వజిత్ యాగంలో సర్వస్వ దానం'],
    achievementsEn: ['Dynasty forever named Raghuvansha after him', 'Pinnacle of chivalry and generosity'],
    icon: '🏹'
  },
  {
    order: 8,
    nameTe: 'అజ మహారాజు',
    nameEn: 'King Aja',
    epithetTe: 'ఇందుమతీ ప్రాణనాథుడు • రఘునందనుడు',
    epithetEn: 'Noble Monarch & Devoted Husband of Indumati',
    reignHighlightsTe: 'రఘు మహారాజు కుమారుడు. విదర్భ రాజకుమారి ఇందుమతి స్వయంవరంలో ఆమెను వరించి, ధర్మబద్ధమైన సుపరిపాలన అందించాడు. దశరథుని తండ్రి.',
    reignHighlightsEn: 'Beloved son of Raghu who won Indumati in svayamvara and ruled Ayodhya with gentleness and honor.',
    achievementsTe: ['సుక్షేమకర పరిపాలన', 'చక్రవర్తి దశరథునికి జన్మనిచ్చుట'],
    achievementsEn: ['Sustained golden peace across Kosala', 'Father of King Dasharatha'],
    icon: '🌸'
  },
  {
    order: 9,
    nameTe: 'దశరథ మహారాజు',
    nameEn: 'King Dasharatha',
    epithetTe: 'దశదిశల రథసంచారి • పుత్రకామేష్టి యాజి',
    epithetEn: 'The Ten-Chariot Sovereign & Father of Sri Rama',
    reignHighlightsTe: 'పది దిక్కులలో శత్రువులను జయించిన పరాక్రమశాలి. దేవతల పక్షాన రాక్షసులపై యుద్ధాలు చేశాడు. పుత్రకామేష్టి యాగం ద్వారా భగవాన్ శ్రీరామచంద్రుని తండ్రి అయ్యే భాగ్యం పొందాడు.',
    reignHighlightsEn: 'Allied with celestial Devas in cosmic battles; performed Putrakameshti yajna to welcome Bhagavan Vishnu\'s descent.',
    achievementsTe: ['పుత్రకామేష్టి యాగ నిర్వహణ', 'శ్రీరామ, లక్ష్మణ, భరత, శత్రుఘ్నుల పితామహత్వం'],
    achievementsEn: ['Performed sacred Putrakameshti sacrifice', 'Father of the four divine brothers'],
    icon: '🏰'
  },
  {
    order: 10,
    nameTe: 'భగవాన్ శ్రీరామచంద్రుడు',
    nameEn: 'Bhagavan Sri Ramachandra',
    epithetTe: 'మర్యాదా పురుషోత్తముడు • సకల ధర్మ స్వరూపుడు',
    epithetEn: 'The Supreme Exemplar of Righteous Human Character',
    reignHighlightsTe: 'విష్ణువు ఏడవ అవతారము. పితృవాక్య పరిపాలన, ఏకపత్నీవ్రతం, రావణ సంహారము, రామసేతు నిర్మాణం, మరియు 11,000 సంవత్సరాల ఆదర్శ రామరాజ్య సుపరిపాలన.',
    reignHighlightsEn: 'Seventh avatara of Vishnu, hero of the Ramayana, conqueror of Ravana, and creator of the immortal Ramarajya golden era.',
    achievementsTe: ['రావణ సంహారము & ధర్మసంస్థాపన', 'రామసేతు వారధి ఇంజనీరింగ్ అద్భుతం', 'రామరాజ్య సుపరిపాలన'],
    achievementsEn: ['Destruction of evil in Lanka', 'Marine engineering of Ram Setu', 'Timeless Ramarajya welfare state'],
    icon: '🕉️'
  },
  {
    order: 11,
    nameTe: 'లవుడు & కుశుడు',
    nameEn: 'Lava and Kusha',
    epithetTe: 'శ్రీరామ సుపుత్రులు • శ్రావస్తి, కుశావతి నగర నిర్మాతలు',
    epithetEn: 'Twin Sons of Rama & Builders of Shravasti & Kushavati',
    reignHighlightsTe: 'వాల్మీకి ఆశ్రమంలో జన్మించి రామాయణాన్ని గానం చేశారు. ఉత్తర కోసల రాజ్య భాగాలుగా శ్రావస్తి (లవుడు), కుశావతి (కుశుడు) నగరాలను స్థాపించి పాలించారు.',
    reignHighlightsEn: 'Born in Valmiki\'s hermitage; later governed North and South Kosala from the great twin capitals of Shravasti and Kushavati.',
    achievementsTe: ['రామాయణ ఆదిగానం ప్రచారం', 'శ్రావస్తి మరియు కుశావతి నగరాల నిర్మాణం'],
    achievementsEn: ['First reciters of Valmiki Ramayana', 'Founded prosperous capital metropolises'],
    icon: '🏹'
  },
  {
    order: 12,
    nameTe: 'తక్షుడు & పుష్కలుడు',
    nameEn: 'Taksha and Pushkala',
    epithetTe: 'భరత పుత్రులు • తక్షశిల (Taxila) & పుష్కలావతి నిర్మాతలు',
    epithetEn: 'Sons of Bharata & Founders of Takshashila (Taxila)',
    reignHighlightsTe: 'గాంధార ప్రాంతాన్ని జయించి ప్రపంచ ప్రసిద్ధ విశ్వవిద్యాలయ నగరమైన తక్షశిల (తక్షుడు) మరియు పుష్కలావతి (పుష్కలుడు) నగరాలను నిర్మించారు.',
    reignHighlightsEn: 'Sons of Bharata who established Takshashila (world\'s oldest university city Taxila) and Pushkalavati in Gandhara.',
    achievementsTe: ['తక్షశిల (ప్రపంచ తొలి విద్యాలయం) నిర్మాణం', 'పుష్కలావతి సాంస్కృతిక కేంద్ర స్థాపన'],
    achievementsEn: ['Founded Takshashila (Taxila) university city', 'Spread Vedic learning into northwestern frontiers'],
    icon: '🏛️'
  }
];

export const RamayanaTretaTimelineSection: React.FC<RamayanaTretaTimelineSectionProps> = ({
  onOpenChartModal,
  defaultTab = 'events'
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'events' | 'familyTree' | 'shloka' | 'emperors' | 'evidence'>(defaultTab);
  const [activeFamilyBranch, setActiveFamilyBranch] = useState<string>('all');
  const [treeViewStyle, setTreeViewStyle] = useState<'cards' | 'chart'>('cards');
  const [eventsFilter, setEventsFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [eventsViewMode, setEventsViewMode] = useState<'spine' | 'grid'>('spine');

  // Filtered 11 Astronomical Events
  const filteredEvents = useMemo(() => {
    return RAMAYANA_ASTRONOMICAL_TIMELINE.events.filter(ev => {
      if (eventsFilter !== 'all') {
        if (eventsFilter === 'early' && ev.order > 4) return false;
        if (eventsFilter === 'exile' && (ev.order < 4 || ev.order > 6)) return false;
        if (eventsFilter === 'war' && (ev.order < 7 || ev.order > 9)) return false;
        if (eventsFilter === 'coronation' && ev.order < 10) return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        ev.titleEn.toLowerCase().includes(q) ||
        ev.titleTe.toLowerCase().includes(q) ||
        ev.gregorianDate.toLowerCase().includes(q) ||
        ev.descriptionEn.toLowerCase().includes(q) ||
        ev.descriptionTe.toLowerCase().includes(q) ||
        ev.panchangaDetailsEn.toLowerCase().includes(q) ||
        ev.panchangaDetailsTe.toLowerCase().includes(q)
      );
    });
  }, [eventsFilter, searchQuery]);

  // Filtered family branches
  const filteredBranches = useMemo(() => {
    if (activeFamilyBranch === 'all') return RAMAYANA_FAMILY_TREE_DATA.branches;
    return RAMAYANA_FAMILY_TREE_DATA.branches.filter(b => b.branchId === activeFamilyBranch);
  }, [activeFamilyBranch]);

  const handleOpenSource = (img: { src: string; title: string; subtitle?: string }) => {
    if (onOpenChartModal) {
      onOpenChartModal(img);
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* ============================================================ */}
      {/* 1. HERO TOP BANNER WITH SCRIPTURAL & ASTRONOMICAL DATING     */}
      {/* ============================================================ */}
      <div className="rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/30 p-5 sm:p-6 shadow-md relative overflow-hidden">
        {/* Subtle Decorative Background Watermark */}
        <div className="absolute -top-6 -right-6 text-7xl text-[#D4AF37]/15 select-none pointer-events-none font-serif">🏹</div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D4AF37]/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7B1113] to-[#B71C1C] text-[#FFE082] flex items-center justify-center text-3xl shadow-sm border border-[#D4AF37] overflow-hidden p-0.5">
              <img 
                src="./images/indian_history/sita_rama_lakshmana_square_icon.jpg" 
                alt="Sri Sita Rama Lakshmana"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider shadow-2xs">
                  {isEn ? 'Treta Yuga • Vedic Itihasa' : 'త్రేతాయుగం • వైదిక ఇతిహాసం'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-amber-100 text-[#7B1113] border border-amber-300">
                  {isEn ? '7,000 – 4,500 BCE • Astronomical Span: 12,240 – 12,208 BCE' : 'క్రీ.పూ. 7,000 – 4,500 • ఖగోళ కాలగణన: 12,240 – 12,208 BCE'}
                </span>
                <span className="text-xs font-mono font-bold text-[#7B1113]">
                  !! तन्नो रामः प्रचोदयात् !!
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black font-telugu-serif text-[#7B1113] mt-1">
                {isEn ? 'Ramayana Era, Sri Rama & Treta Yuga Dynasties' : 'రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4037] font-medium mt-0.5">
                {isEn 
                  ? 'Lord Sri Ramachandra • Sita Devi • Lava-Kusha • Taxila Founded by Taksha • Suryavansha Line'
                  : 'శ్రీరామచంద్రుడు • సీతాదేవి • లవ-కుశులు • తక్షశిల నిర్మాణం • వానర సైన్యం • ఇక్ష్వాకు రఘువంశ పరంపర'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap self-end md:self-center">
            <button
              onClick={() => handleOpenSource({
                src: RAMAYANA_ASTRONOMICAL_TIMELINE.imageSrc,
                title: isEn ? RAMAYANA_ASTRONOMICAL_TIMELINE.titleEn : RAMAYANA_ASTRONOMICAL_TIMELINE.titleTe,
                subtitle: isEn ? 'Original Valmiki Ramayana Astronomical Timeline Chart' : 'వాల్మీకి రామాయణ మూల ఖగోళ కాలరేఖ పటం'
              })}
              className="px-3.5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              title={isEn ? 'View Original Visual Timeline Poster' : 'మూల ఖగోళ కాలరేఖ చార్ట్ చూడండి'}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Original Chart' : 'మూల కాలరేఖ పటం'}</span>
            </button>
          </div>
        </div>

        {/* Narrative Summary and Theological Anchors */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-2xl bg-white/90 border border-amber-200/80 shadow-2xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#7B1113] flex items-center gap-1 mb-1">
              <span>🪐</span>
              <span>{isEn ? 'Astronomical Dating' : 'ఖగోళ గ్రహ స్థితులు'}</span>
            </div>
            <p className="text-xs text-[#5D4037] leading-relaxed">
              {isEn 
                ? 'Valmiki Ramayana Balakanda records 5 planets in exaltation, Cancer ascendant, Punarvasu nakshatra matching planetary simulations.'
                : 'వాల్మీకి బాలకాండలోని 5 గ్రహాల ఉచ్ఛస్థితి, కర్కాటక లగ్నం, పునర్వసు నక్షత్ర స్థానాలను ప్లానిటోరియం సాఫ్ట్‌వేర్ ద్వారా నిరూపించారు.'}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-amber-200/80 shadow-2xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#7B1113] flex items-center gap-1 mb-1">
              <span>🌊</span>
              <span>{isEn ? 'Geological Evidence' : 'రామసేతు శాస్త్రీయ ఆధారం'}</span>
            </div>
            <p className="text-xs text-[#5D4037] leading-relaxed">
              {isEn 
                ? 'Carbon dating & core drilling of Ram Setu (Adam\'s Bridge) calcarenite shoals confirm man-made causeway engineering.'
                : 'రామసేతు (ఆడమ్స్ బ్రిడ్జ్) సున్నపురాయి దిబ్బల శాస్త్రీయ కార్బన్ డేటింగ్ సముద్ర వారధి మానవ నిర్మిత ఇంజనీరింగ్ అద్భుతమని ధృవీకరిస్తోంది.'}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-amber-200/80 shadow-2xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#7B1113] flex items-center gap-1 mb-1">
              <span>👑</span>
              <span>{isEn ? 'Ramarajya Standard' : 'ఆదర్శ రామరాజ్య పాలన'}</span>
            </div>
            <p className="text-xs text-[#5D4037] leading-relaxed">
              {isEn 
                ? 'Dharma as supreme statecraft: zero crime, zero hunger, full spiritual and educational dignity for all citizens.'
                : 'ధర్మమే సర్వోన్నత రాజనీతిగా ఆకలి, రోగాలు, నేరాలు, అకాల మరణాలు లేని సర్వజన సౌభాగ్య రామరాజ్య సుపరిపాలన.'}
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. NAVIGATION SUB-TABS                                        */}
      {/* ============================================================ */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#D4AF37]/50 pb-2 bg-[#FAF7F0] p-2 rounded-2xl">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'events'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>📜</span>
            <span>{isEn ? '11 Milestone Events' : '11 ఖగోళ ఘట్టాల కాలరేఖ'}</span>
          </button>

          <button
            onClick={() => setActiveTab('familyTree')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'familyTree'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>🌳</span>
            <span>{isEn ? 'Family Tree (4 Lineages)' : 'రామాయణ సంపూర్ణ వంశవృక్షం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('shloka')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'shloka'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>📿</span>
            <span>{isEn ? 'Rama Shloka Secret' : 'శ్లోక రహస్యం (7 సంబోధనలు)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('emperors')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'emperors'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>👑</span>
            <span>{isEn ? 'Treta Solar Emperors' : 'సూర్యవంశ చక్రవర్తులు & రామరాజ్యం'}</span>
          </button>

          <button
            onClick={() => setActiveTab('evidence')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'evidence'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-sm'
                : 'bg-white hover:bg-amber-100 text-[#7B1113] border border-[#D4AF37]/40'
            }`}
          >
            <span>🔍</span>
            <span>{isEn ? 'Scientific Evidence' : 'శాస్త్రీయ ఆధారాలు'}</span>
          </button>
        </div>

        <div className="text-xs text-[#5D4037] font-bold px-2 py-1 bg-amber-100 rounded-lg border border-amber-300">
          <span>🔗 {isEn ? 'Linked to Spoke #2: Ramayana Era' : 'ఆకు #2 కు అనుసంధానించబడింది'}</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: 11 MILESTONE ASTRONOMICAL EVENTS                       */}
      {/* ============================================================ */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          
          {/* Controls: Search, Phase Filter, View Mode */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs flex flex-wrap items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-4 h-4 text-[#7B1113] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isEn ? 'Search Ramayana events, dates, tithis...' : 'ఘట్టాలు, తిథులు, నక్షత్రాలు శోధించండి...'}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#7B1113] text-[#333]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Phase Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 sm:pb-0">
              <span className="text-[11px] font-bold text-[#5D4037] flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3 text-[#7B1113]" />
                {isEn ? 'Phase:' : 'దశ:'}
              </span>
              {[
                { id: 'all', labelTe: 'అన్ని 11 ఘట్టాలు', labelEn: 'All 11' },
                { id: 'early', labelTe: 'జననం & వివాహం', labelEn: 'Early & Marriage' },
                { id: 'exile', labelTe: 'వనవాసం & పాదుక', labelEn: 'Exile & Paduka' },
                { id: 'war', labelTe: 'లంకా సంగ్రామం', labelEn: 'Lanka War' },
                { id: 'coronation', labelTe: 'పట్టాభిషేకం', labelEn: 'Coronation' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setEventsFilter(f.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    eventsFilter === f.id
                      ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-[#5D4037]'
                  }`}
                >
                  {isEn ? f.labelEn : f.labelTe}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-xl border border-stone-200 text-xs">
              <button
                onClick={() => setEventsViewMode('spine')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  eventsViewMode === 'spine' ? 'bg-[#7B1113] text-[#FFE082]' : 'text-stone-600'
                }`}
              >
                {isEn ? 'Spine' : 'కాలరేఖ'}
              </button>
              <button
                onClick={() => setEventsViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  eventsViewMode === 'grid' ? 'bg-[#7B1113] text-[#FFE082]' : 'text-stone-600'
                }`}
              >
                {isEn ? 'Grid' : 'గ్రిడ్'}
              </button>
            </div>
          </div>

          {/* Intro Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-[#2C1810] text-xs leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D84315] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#7B1113]">
                {isEn ? 'Astronomical & Epigraphical Synchronism: ' : 'ఖగోళ మరియు శాస్త్రీయ కాలగణన: '}
              </span>
              {isEn ? RAMAYANA_ASTRONOMICAL_TIMELINE.introEn : RAMAYANA_ASTRONOMICAL_TIMELINE.introTe}
            </div>
          </div>

          {/* Events List / Timeline */}
          {eventsViewMode === 'spine' ? (
            <div className="space-y-3 pt-2">
              {filteredEvents.map((ev, idx) => (
                <React.Fragment key={ev.order}>
                  <div className="p-4 rounded-2xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
                      {/* Event Illustration */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#D4AF37]/70 p-1 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                        <img 
                          src={ev.imageSrc} 
                          alt={isEn ? ev.titleEn : ev.titleTe}
                          className="w-full h-full object-contain hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 w-full space-y-2">
                        {/* Row 1: Order, Title, Gregorian Date */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[10px] font-black">
                                #{ev.order}
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                                {isEn ? ev.titleEn : ev.titleTe}
                              </h4>
                              <span className="px-2 py-0.5 rounded-full bg-stone-100 text-[#5D4037] text-[10px] font-bold">
                                {isEn ? ev.phaseBadgeEn : ev.phaseBadgeTe}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#B71C1C] text-[11px] font-black font-mono border border-amber-300">
                              {ev.dateBCE}
                            </span>
                            <span className="px-3 py-1 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs font-black border border-[#D4AF37]/60 shadow-2xs">
                              🗓️ {ev.gregorianDate}
                            </span>
                          </div>
                        </div>

                        {/* Row 2: Panchanga / Planetary details */}
                        <div className="p-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 text-[11.5px] font-bold text-[#8B0000] flex items-center gap-2">
                          <span>🪐</span>
                          <span className="truncate">{isEn ? ev.panchangaDetailsEn : ev.panchangaDetailsTe}</span>
                        </div>

                        {/* Row 3: Narrative description */}
                        <p className="text-xs text-[#4E342E] leading-relaxed pt-0.5 pl-0.5">
                          {isEn ? ev.descriptionEn : ev.descriptionTe}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector arrow between events */}
                  {idx < filteredEvents.length - 1 && (
                    <div className="flex flex-col items-center my-0.5">
                      <div className="w-0.5 h-4 bg-[#D4AF37]"></div>
                      <ArrowDown className="w-3.5 h-3.5 text-[#7B1113]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {filteredEvents.map((ev) => (
                <div key={ev.order} className="p-4 rounded-2xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-xl bg-amber-50 border border-amber-300 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={ev.imageSrc} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-1.5 py-0.5 rounded-md bg-[#7B1113] text-[#FFE082] text-[9.5px] font-black">
                          #{ev.order}
                        </span>
                        <span className="text-xs text-[#B71C1C] font-black font-mono">
                          {ev.dateBCE}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif mt-1">
                        {isEn ? ev.titleEn : ev.titleTe}
                      </h4>
                      <div className="text-[10.5px] text-[#8B0000] font-bold mt-0.5 truncate">
                        🪐 {isEn ? ev.panchangaDetailsEn : ev.panchangaDetailsTe}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#4E342E] leading-relaxed mt-2.5 pt-2 border-t border-amber-100">
                    {isEn ? ev.descriptionEn : ev.descriptionTe}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: COMPREHENSIVE RAMAYANA FAMILY TREE (4 LINEAGES)        */}
      {/* ============================================================ */}
      {activeTab === 'familyTree' && (
        <div className="space-y-4">
          
          {/* Family Tree Header Banner */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-xs">🌳</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#7B1113] text-[#FFE082] uppercase tracking-wider">
                      {isEn ? 'Genealogical Tree • 4 Lineages' : 'వంశవృక్ష పట రూపం • 4 ప్రధాన శాఖలు'}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#7B1113]">
                      !! ఇక్ష్వాకు - రఘు - నిమి - వానర - పౌలస్త్య వంశాలు !!
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] mt-0.5">
                    {isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe}
                  </h4>
                  <p className="text-xs text-[#5D4037] font-medium">
                    {isEn ? RAMAYANA_FAMILY_TREE_DATA.subtitleEn : RAMAYANA_FAMILY_TREE_DATA.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenSource({
                  src: RAMAYANA_FAMILY_TREE_DATA.imageSrc,
                  title: isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe,
                  subtitle: isEn ? 'Comprehensive Ramayana Family Tree Visual Diagram' : 'రామాయణ సంపూర్ణ వంశవృక్ష మూల సచిత్ర పటం'
                })}
                className="px-3.5 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Zoom Tree Chart' : 'వంశవృక్ష చార్ట్ జూమ్'}</span>
              </button>
            </div>

            <p className="text-xs text-[#5D4037] leading-relaxed">
              {isEn ? RAMAYANA_FAMILY_TREE_DATA.descriptionEn : RAMAYANA_FAMILY_TREE_DATA.descriptionTe}
            </p>
          </div>

          {/* Lineage Branch Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-white/95 p-3 rounded-2xl border border-[#D4AF37]/60 shadow-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 sm:pb-0">
              <button
                onClick={() => setActiveFamilyBranch('all')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeFamilyBranch === 'all'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-white text-[#7B1113] border border-[#D4AF37]/50 hover:bg-amber-50'
                }`}
              >
                <span>🌟</span>
                <span>{isEn ? 'All 4 Lineages' : 'అన్ని 4 వంశాలు (సమగ్రం)'}</span>
              </button>
              <button
                onClick={() => setActiveFamilyBranch('raghu_ayodhya')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeFamilyBranch === 'raghu_ayodhya'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
                }`}
              >
                <span>☀️</span>
                <span>{isEn ? 'Ayodhya Raghu' : 'రఘు వంశం (అయోధ్య)'}</span>
              </button>
              <button
                onClick={() => setActiveFamilyBranch('nimi_mithila')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeFamilyBranch === 'nimi_mithila'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
                }`}
              >
                <span>🌾</span>
                <span>{isEn ? 'Mithila Janaka' : 'నిమి వంశం (మిథిల)'}</span>
              </button>
              <button
                onClick={() => setActiveFamilyBranch('vanara_kishkindha')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeFamilyBranch === 'vanara_kishkindha'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
                }`}
              >
                <span>🐒</span>
                <span>{isEn ? 'Kishkindha Vanara' : 'కిష్కింధా వానర'}</span>
              </button>
              <button
                onClick={() => setActiveFamilyBranch('rakshasa_lanka')}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeFamilyBranch === 'rakshasa_lanka'
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                    : 'bg-white text-[#5D4037] border border-[#D4AF37]/50 hover:bg-amber-50'
                }`}
              >
                <span>🔱</span>
                <span>{isEn ? 'Lanka Paulastya' : 'లంకా పౌలస్త్య'}</span>
              </button>
            </div>

            <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-xl border border-stone-200 text-xs">
              <button
                onClick={() => setTreeViewStyle('cards')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  treeViewStyle === 'cards' ? 'bg-[#7B1113] text-[#FFE082]' : 'text-stone-600'
                }`}
              >
                {isEn ? 'Cards View' : 'వివరాల పట్టిక'}
              </button>
              <button
                onClick={() => setTreeViewStyle('chart')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  treeViewStyle === 'chart' ? 'bg-[#7B1113] text-[#FFE082]' : 'text-stone-600'
                }`}
              >
                {isEn ? 'Chart Poster' : 'మూల పటం'}
              </button>
            </div>
          </div>

          {/* Branch Sections */}
          {treeViewStyle === 'cards' ? (
            <div className="space-y-6">
              {filteredBranches.map(branch => (
                <div key={branch.branchId} className="p-4 sm:p-5 rounded-3xl bg-white border-2 border-[#D4AF37]/60 shadow-sm space-y-4">
                  <div className="flex items-center justify-between gap-3 border-b border-amber-200/80 pb-2.5 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] text-sm font-black flex items-center justify-center">
                        {branch.branchId === 'raghu_ayodhya' ? '☀️' : branch.branchId === 'nimi_mithila' ? '🌾' : branch.branchId === 'vanara_kishkindha' ? '🐒' : '🔱'}
                      </span>
                      <div>
                        <h5 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                          {isEn ? branch.branchTitleEn : branch.branchTitleTe}
                        </h5>
                        <div className="text-[11px] text-[#5D4037] font-medium">
                          {isEn ? branch.originEn : branch.originTe}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#7B1113] text-[11px] font-bold border border-amber-200">
                      {branch.members.length} {isEn ? 'Prominent Figures' : 'ప్రముఖ వ్యక్తులు'}
                    </span>
                  </div>

                  {/* Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {branch.members.map((member, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-amber-50/50 border border-amber-200/80 shadow-2xs hover:shadow-xs transition-shadow space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl p-1.5 rounded-xl bg-white border border-amber-200 shadow-2xs">
                            {member.avatarIcon || '👑'}
                          </span>
                          <div className="min-w-0">
                            <h6 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif truncate">
                              {isEn ? member.nameEn : member.nameTe}
                            </h6>
                            <p className="text-[10.5px] text-[#5D4037] truncate">
                              {isEn ? member.roleEn : member.roleTe}
                            </p>
                          </div>
                        </div>

                        {member.spouseTe && (
                          <div className="text-[11px] text-[#2C1810] bg-white/80 p-2 rounded-xl border border-amber-100 space-y-1">
                            <div>
                              <span className="font-semibold text-[#8B0000]">{isEn ? 'Spouse: ' : 'ధర్మపత్ని: '}</span>
                              <span>{isEn ? member.spouseEn : member.spouseTe}</span>
                            </div>
                            {member.childrenTe && member.childrenTe.length > 0 && (
                              <div>
                                <span className="font-semibold text-[#8B0000]">{isEn ? 'Children: ' : 'సంతానం: '}</span>
                                <span className="font-medium">
                                  {isEn ? (member.childrenEn?.join(', ') || member.childrenTe.join(', ')) : member.childrenTe.join(', ')}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-3xl bg-white border-2 border-[#D4AF37] shadow-md flex flex-col items-center">
              <img 
                src={RAMAYANA_FAMILY_TREE_DATA.imageSrc} 
                alt="Ramayana Family Tree" 
                className="max-h-[70vh] w-auto object-contain rounded-xl border border-amber-200"
              />
              <button
                onClick={() => handleOpenSource({
                  src: RAMAYANA_FAMILY_TREE_DATA.imageSrc,
                  title: isEn ? RAMAYANA_FAMILY_TREE_DATA.titleEn : RAMAYANA_FAMILY_TREE_DATA.titleTe,
                  subtitle: isEn ? 'Comprehensive Ramayana Family Tree Visual Diagram' : 'రామాయణ సంపూర్ణ వంశవృక్ష మూల సచిత్ర పటం'
                })}
                className="mt-3 px-4 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#4A0012] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{isEn ? 'View High-Resolution Lightbox' : 'పూర్తి హై-రిజల్యూషన్ లైట్‌బాక్స్ లో వీక్షించండి'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: RAMA SHLOKA SECRET ("రామాయ రామభద్రాయ...")            */}
      {/* ============================================================ */}
      {activeTab === 'shloka' && (
        <div className="space-y-4">
          
          {/* Sacred Parchment Shloka Banner */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF9ED] to-[#FFECB3]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3 flex-wrap">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082]">📿</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                    {isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe}
                  </h4>
                  <p className="text-xs text-[#5D4037]">
                    {isEn ? RAMA_SHLOKA_ORIGIN_DATA.subtitleEn : RAMA_SHLOKA_ORIGIN_DATA.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenSource({
                  src: RAMA_SHLOKA_ORIGIN_DATA.posterImageSrc,
                  title: isEn ? RAMA_SHLOKA_ORIGIN_DATA.titleEn : RAMA_SHLOKA_ORIGIN_DATA.titleTe,
                  subtitle: isEn ? 'Original Visual Chart' : 'మూల సచిత్ర పటం'
                })}
                className="px-3.5 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Zoom Chart' : 'మూల చార్ట్ జూమ్'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF0] border-2 border-[#D4AF37]/70 text-center space-y-2 shadow-inner">
              <div className="text-base sm:text-lg font-bold font-mono text-[#7B1113] whitespace-pre-line tracking-wide">
                {RAMA_SHLOKA_ORIGIN_DATA.shlokaSanskrit}
              </div>
              <div className="text-base sm:text-lg font-bold font-telugu-serif text-[#8B0000] whitespace-pre-line">
                {RAMA_SHLOKA_ORIGIN_DATA.shlokaTelugu}
              </div>
              <div className="text-xs font-mono text-stone-600 italic whitespace-pre-line">
                {RAMA_SHLOKA_ORIGIN_DATA.shlokaIAST}
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50 text-xs text-[#3E0A0C] text-left border border-amber-200 mt-2">
                <span className="font-bold text-[#7B1113]">
                  {isEn ? 'Universal Meaning: ' : 'సమగ్ర భావార్థం: '}
                </span>
                {isEn ? RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningEn : RAMA_SHLOKA_ORIGIN_DATA.shlokaMeaningTe}
              </div>
            </div>
          </div>

          {/* 7 Callers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {RAMA_SHLOKA_ORIGIN_DATA.callers.map((caller) => (
              <div 
                key={caller.order} 
                className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-50 border-2 border-[#D4AF37]/70 p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                  <img 
                    src={caller.avatarSrc} 
                    alt={isEn ? caller.callerEn : caller.callerTe}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                      {isEn ? caller.callerEn : caller.callerTe}
                    </h5>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#7B1113] text-[10px] font-bold border border-amber-300">
                      #{caller.order} {caller.shlokaWord}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#A91D22] text-[#FFE082] shadow-xs">
                    <span className="text-[10px] uppercase tracking-wider font-semibold opacity-85">
                      {isEn ? 'Called:' : 'పిలిచింది:'}
                    </span>
                    <span className="text-sm sm:text-base font-black font-mono tracking-wide">
                      {caller.calledName}
                    </span>
                    <span className="text-xs font-bold text-white">
                      ({isEn ? caller.shlokaWord : caller.shlokaWordTelugu})
                    </span>
                  </div>

                  <p className="text-[11px] text-[#5D4037] font-medium leading-tight">
                    {isEn ? caller.relationshipEn : caller.relationshipTe}
                  </p>

                  <p className="text-xs text-[#2C1810] leading-relaxed pt-1 border-t border-amber-100/80">
                    <span className="font-semibold text-[#8B0000]">
                      {isEn ? 'Meaning: ' : 'అర్థం: '}
                    </span>
                    {isEn ? caller.meaningEn : caller.meaningTe}
                  </p>

                  <p className="text-[11px] text-[#555] italic">
                    {isEn ? caller.spiritualSignificanceEn : caller.spiritualSignificanceTe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 4: TRETA SOLAR EMPERORS & RAMARAJYA PRINCIPLES           */}
      {/* ============================================================ */}
      {activeTab === 'emperors' && (
        <div className="space-y-6">
          
          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-2 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082] shadow-xs">👑</span>
              <div>
                <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                  {isEn ? '12 Renowned Solar Lineage Monarchs of Treta Yuga' : 'త్రేతాయుగంలో సూర్యవంశ (ఇక్ష్వాకు-రఘు) చక్రవర్తుల పరంపర'}
                </h4>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'From founder Emperor Ikshvaku down to Bhagavan Sri Ramachandra, Lava-Kusha & Taksha'
                    : 'సూర్యవంశ మూలపురుషుడు ఇక్ష్వాకు నుండి మర్యాదా పురుషోత్తముడు శ్రీరాముడు, లవ-కుశులు, తక్షుని వరకు'}
                </p>
              </div>
            </div>
          </div>

          {/* Emperors 12 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {TRETA_SOLAR_EMPERORS.map((emp) => (
              <div 
                key={emp.order} 
                className="p-4 rounded-2xl bg-white border border-[#D4AF37]/60 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-[#7B1113] text-[#FFE082] text-sm font-black flex items-center justify-center">
                        {emp.icon}
                      </span>
                      <div>
                        <span className="text-[10px] font-black text-[#8B0000] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          #{emp.order}
                        </span>
                        <h5 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                          {isEn ? emp.nameEn : emp.nameTe}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-semibold text-[#8B0000]">
                    {isEn ? emp.epithetEn : emp.epithetTe}
                  </div>

                  <p className="text-xs text-[#4E342E] leading-relaxed">
                    {isEn ? emp.reignHighlightsEn : emp.reignHighlightsTe}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-amber-100 space-y-1">
                  <span className="text-[10.5px] font-bold text-[#5D4037] uppercase tracking-wider block">
                    {isEn ? 'Key Deeds:' : 'ప్రధాన ఘనతలు:'}
                  </span>
                  <ul className="space-y-1">
                    {(isEn ? emp.achievementsEn : emp.achievementsTe).map((ach, aIdx) => (
                      <li key={aIdx} className="text-[11.5px] text-[#2C1810] flex items-start gap-1.5">
                        <span className="text-[#D84315] font-bold">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Ramarajya Pillars */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#7B1113] space-y-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 rounded-xl bg-[#7B1113] text-[#FFE082]">⚖️</span>
              <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                {isEn ? 'The Four Immortal Pillars of Ramarajya' : 'ఆదర్శ రామరాజ్య పాలనా సూత్రాలు'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                <div className="text-xs font-black text-[#7B1113] mb-1">
                  1. సర్వోన్నత ధర్మం (Rule of Dharma)
                </div>
                <p className="text-[11.5px] text-[#5D4037] leading-relaxed">
                  {isEn ? 'Truth and righteousness as absolute law above power and lineage.' : 'రాజ్యాధికారం కంటే సత్యం, న్యాయం, ధర్మమే సర్వోన్నతమైనవిగా పాలన.'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                <div className="text-xs font-black text-[#7B1113] mb-1">
                  2. సర్వజన సౌభాగ్యం (Zero Poverty & Crime)
                </div>
                <p className="text-[11.5px] text-[#5D4037] leading-relaxed">
                  {isEn ? 'Universal welfare where no citizen suffered starvation, disease or premature demise.' : 'ఆకలి, వ్యాధులు, నేరాలు, అకాల మరణాలు లేని సంపూర్ణ శ్రేయస్సు.'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                <div className="text-xs font-black text-[#7B1113] mb-1">
                  3. మహిళా గౌరవం & వేద విజ్ఞానం (Gender Dignity)
                </div>
                <p className="text-[11.5px] text-[#5D4037] leading-relaxed">
                  {isEn ? 'Full spiritual autonomy, intellectual authority and Vedic rights for women.' : 'స్త్రీలకు సంపూర్ణ విద్యాధికారాలు, యజ్ఞ నిర్వహణ, ఆత్మీయ గౌరవం.'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                <div className="text-xs font-black text-[#7B1113] mb-1">
                  4. ప్రకృతి సమతుల్యత (Ecological Harmony)
                </div>
                <p className="text-[11.5px] text-[#5D4037] leading-relaxed">
                  {isEn ? 'Reverence for rivers, mountains, forests and all sentient animals.' : 'నదులు, పర్వతాలు, వృక్షాలు, జంతుజాలాల పట్ల పూజ్యభావం.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 5: ASTRONOMICAL, ARCHAEOLOGICAL & SCRIPTURAL EVIDENCE    */}
      {/* ============================================================ */}
      {activeTab === 'evidence' && (
        <div className="space-y-4">
          
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/35 border-2 border-[#D4AF37] space-y-3 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-2 rounded-xl bg-[#7B1113] text-[#FFE082]">🔍</span>
              <div>
                <h4 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113]">
                  {isEn ? 'Multidisciplinary Scientific Evidence for the Ramayana Era' : 'రామాయణ యుగ చారిత్రకతకు శాస్త్రీయ, ఖగోళ & పురావస్తు ఆధారాలు'}
                </h4>
                <p className="text-xs text-[#5D4037]">
                  {isEn 
                    ? 'Cross-verified through computer planetarium software, marine geological core-drilling, and archaeological excavations'
                    : 'ప్లానిటోరియం సాఫ్ట్‌వేర్, సముద్ర గర్భ జియోలాజికల్ పరిశోధనలు, పురావస్తు త్రవ్వకాల ద్వారా ధృవీకరించబడిన ఆధారాలు'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Planetarium Software */}
            <div className="p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-[#7B1113]">
                <span>🪐</span>
                <span>{isEn ? '1. Archaeo-Astronomical Alignment' : '1. ప్లానిటోరియం సాఫ్ట్‌వేర్ ఖగోళ విశ్లేషణ'}</span>
              </div>
              <p className="text-xs text-[#4E342E] leading-relaxed">
                {isEn 
                  ? 'Valmiki Ramayana contains 630+ astronomical references including exact tithis, lunar mansions (nakshatras), seasons (ritus), and planetary configurations. Computer simulations matching Sun in Aries, Moon in Punarvasu, five planets in exaltation, Jupiter and Moon together in Cancer ascendant prove historical synchronism.'
                  : 'వాల్మీకి రామాయణంలో 630కి పైగా ఖగోళ రిఫరెన్సులు (తిథి, నక్షత్ర, ఋతువు, గ్రహ స్థితులు) ఉన్నాయి. సూర్యుడు మేషంలో, చంద్రుడు పునర్వసులో, బృహస్పతి కర్కాటకంలో 5 గ్రహాల ఉచ్ఛస్థితిని ఆధునిక ఖగోళ సాఫ్ట్‌వేర్ కచ్చితమైన ఖగోళ అమరికతో నిర్ధారిస్తోంది.'}
              </p>
            </div>

            {/* 2. Ram Setu */}
            <div className="p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-[#7B1113]">
                <span>🌊</span>
                <span>{isEn ? '2. Ram Setu Marine Geo-Archaeology' : '2. రామసేతు సముద్ర గర్భ భూగర్భ పరిశోధనలు'}</span>
              </div>
              <p className="text-xs text-[#4E342E] leading-relaxed">
                {isEn 
                  ? 'Geological core-drilling by marine scientists across the 48 km limestone shoal chain reveals that calcarenite boulders rest upon a base of marine sand dunes. The boulders are 7,000+ years older than the sand beneath them, confirming they were manually placed by human engineering.'
                  : 'రామేశ్వరం నుండి తలైమన్నార్ (శ్రీలంక) వరకు 48 కి.మీ విస్తరించిన రామసేతు సున్నపురాళ్ళు క్రింది ఇసుక తిన్నెల కంటే వేల సంవత్సరాల ప్రాచీనమైనవి. ఇవి సహజసిద్ధంగా ఏర్పడినవి కాక, పైనుండి అమర్చిన మానవ ఇంజనీరింగ్ నిర్మాణమని జియోలాజికల్ పరీక్షలు నిరూపిస్తున్నాయి.'}
              </p>
            </div>

            {/* 3. Ayodhya Sarayu Excavations */}
            <div className="p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-[#7B1113]">
                <span>🏺</span>
                <span>{isEn ? '3. Ayodhya & Sarayu Basin Excavations' : '3. అయోధ్య-సరయూ పరివాహక పురావస్తు ఆధారాలు'}</span>
              </div>
              <p className="text-xs text-[#4E342E] leading-relaxed">
                {isEn 
                  ? 'Archaeological Survey of India (ASI) excavations along the Sarayu river basin and Ram Janmabhoomi unearthed multi-layered human habitation strata with Northern Black Polished Ware, terracotta artifacts, and municipal layouts conforming to Ramayana topography.'
                  : 'భారత పురావస్తు శాఖ (ASI) అయోధ్య, సరయూ తీరాల్లో నిర్వహించిన త్రవ్వకాలలో ప్రాచీన జనావాస అవశేషాలు, ప్రాచీన మట్టిపాత్రలు, శిల్ప సంపద లభించాయి, ఇవి రామాయణ వర్ణనలకు భౌతిక ఆధారాలుగా నిలుస్తున్నాయి.'}
              </p>
            </div>

            {/* 4. Takshashila & Dandakaranya */}
            <div className="p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-[#7B1113]">
                <span>🏛️</span>
                <span>{isEn ? '4. Takshashila & Geographical Continuity' : '4. తక్షశిల & భౌగోళిక సరిపోలికలు'}</span>
              </div>
              <p className="text-xs text-[#4E342E] leading-relaxed">
                {isEn 
                  ? 'The continuous historical existence of Takshashila (Taxila) founded by Bharata\'s son Taksha, Pushkalavati founded by Pushkala, Shravasti by Lava, and Kushavati by Kusha validates the geopolitical map recorded in the epic.'
                  : 'భరతుని కుమారుడు తక్షుడు నిర్మించిన తక్షశిల (ప్రపంచ ప్రసిద్ధ Taxila విశ్వవిద్యాలయ నగరం), పుష్కలావతి, లవ-కుశుల శ్రావస్తి, కుశావతి నగరాలు నేటికీ భౌగోళిక చారిత్రక సత్యాలుగా నిలిచాయి.'}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
