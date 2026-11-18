import React, { useState, useEffect, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  INDIAN_HISTORY_CHAKRA_EVENTS, 
  type ChakraTimeEvent 
} from '../../data/indianHistoryChakraData';
import { 
  YUGA_CYCLE_25800_SEGMENTS, 
  type YugaCycleSegment 
} from '../../data/yugaCycle25800Data';
import { 
  Compass, 
  Play, 
  Pause, 
  RotateCw, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Crown, 
  Sparkles, 
  Landmark, 
  Target, 
  Maximize2,
  Orbit,
  Layers,
  CheckCircle2,
  Dna,
  ExternalLink,
  ScrollText,
  X
} from 'lucide-react';
import { MahabharataKuruTimelineSection } from './MahabharataKuruTimelineSection';
import { RamayanaTretaTimelineSection } from './RamayanaTretaTimelineSection';
import { KURU_TIMELINE_METADATA } from '../../data/kuruTimelineData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// ============================================================
// 1. DATASET FOR MIDDLE RING: లోపలి భారతీయ కాలక్రమం (CIVILIZATIONAL EPOCHS)
// Scaled along the 25,800-year chronological timeline
// ============================================================
export interface BharatCivilizationEpoch {
  id: string;
  order: number;
  nameTe: string;
  nameEn: string;
  periodTe: string;
  periodEn: string;
  durationLabelTe: string;
  durationLabelEn: string;
  startAngleDeg: number;
  endAngleDeg: number;
  midAngleDeg: number;
  spanDeg: number;
  yugaEquivalentTe: string;
  yugaEquivalentEn: string;
  icon: string;
  color: string;
  accentColor: string;
  isCurrentTime?: boolean;
  dynastiesIncludedCount: number;
  dynastiesIncludedIds: string[];
  descriptionTe: string;
  descriptionEn: string;
  achievementsTe: string[];
  achievementsEn: string[];
  significanceTe: string;
  significanceEn: string;
}

export const BHARAT_CIVILIZATION_EPOCHS: BharatCivilizationEpoch[] = [
  {
    id: 'epoch_prehistory_mehrgarh',
    order: 1,
    nameTe: 'చరిత్రపూర్వ & మెహర్‌గఢ్ ఉషస్సు',
    nameEn: 'Prehistoric Stone Age & Mehrgarh',
    periodTe: 'క్రీ.పూ. 10,876 – 8,000',
    periodEn: '10,876 – 8,000 BCE',
    durationLabelTe: '2,876 ఏళ్ళు',
    durationLabelEn: '2,876 Years',
    startAngleDeg: -98.37,
    endAngleDeg: -68.00,
    midAngleDeg: -83.19,
    spanDeg: 30.37,
    yugaEquivalentTe: 'కటాక్లిస్మోస్ & తొలి త్రేతా',
    yugaEquivalentEn: 'Kataklysmos & Early Treta',
    icon: '🪨',
    color: '#EFEBE9',
    accentColor: '#5D4037',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['prehistory_stone_age'],
    descriptionTe: 'హిమయుగ ముగింపు, భీంబేట్కా శైల చిత్రలేఖనాలు, దక్షిణాసియాలోనే ప్రథమ మెహర్‌గఢ్ వ్యవసాయం మరియు ఆదిమ గ్రామీణ ఆవాసాలు.',
    descriptionEn: 'Post-glacial Holocene transition, Bhimbetka rock paintings, and South Asia\'s earliest agriculture and pastoral settlements at Mehrgarh.',
    achievementsTe: ['రాతి గొడ్డళ్ళు & తొలి సూక్ష్మరాతి పరికరాలు', 'మెహర్‌గఢ్ వద్ద ప్రథమ గోధుమ, బార్లీ సాగు (క్రీ.పూ. 7000)', 'మట్టి ఇటుకలతో స్థిర నివాసాల నిర్మాణం'],
    achievementsEn: ['Microlithic tools and rock shelters', 'Earliest barley & wheat farming at Mehrgarh (7000 BCE)', 'Mud-brick communal dwellings'],
    significanceTe: 'భారత ఉపఖండంలో ఆహార సేకరణ నుండి ఆహార ఉత్పత్తి వైపు మారిన చారిత్రక పరిణామం.',
    significanceEn: 'The monumental revolution from hunter-gatherers to agrarian civilization in Bharat.'
  },
  {
    id: 'epoch_ramayana_era',
    order: 2,
    nameTe: '🏹 రామాయణ యుగం (సూర్యవంశం)',
    nameEn: 'Ramayana Era (Ikshvaku Dynasty)',
    periodTe: 'త్రేతాయుగం (~క్రీ.పూ. 7500 – 6000)',
    periodEn: 'Treta Yuga (~7500 – 6000 BCE)',
    durationLabelTe: '1,500 ఏళ్ళు',
    durationLabelEn: '1,500 Years',
    startAngleDeg: -68.00,
    endAngleDeg: -43.95,
    midAngleDeg: -55.98,
    spanDeg: 24.05,
    yugaEquivalentTe: 'అవరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Descending Treta Yuga',
    icon: '🏹',
    color: '#FFF3E0',
    accentColor: '#D84315',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['ramayana_ikshvaku_empire'],
    descriptionTe: 'మర్యాదా పురుషోత్తముడు శ్రీరామచంద్రుని ధర్మపాలన, సత్యనిష్ఠ, ఏకపత్నీవ్రతం, పితృవాక్య పరిపాలన, వాల్మీకి రామాయణ ఆవిర్భావం మరియు రామరాజ్య స్వర్ణయుగం.',
    descriptionEn: 'Dharmic rule of Bhagavan Sri Ramachandra, embodiment of truth, filial piety, Ramayana revelation by Sage Valmiki, and the pinnacle of Treta Yuga righteousness.',
    achievementsTe: ['వాల్మీకి రామాయణ రచన (ఆది కావ్యం - 24,000 శ్లోకాలు)', 'అయోధ్య కేంద్రంగా ఆదర్శవంతమైన రామరాజ్య పరిపాలన', 'సేతుబంధనం (రామసేతు నిర్మాణం) & అధర్మ నిర్మూలన'],
    achievementsEn: ['Composition of Valmiki Ramayana (Adi Kavya, 24,000 verses)', 'Exemplary dharmic governance of Ramarajya centered in Ayodhya', 'Construction of Ram Setu and triumph over adharma'],
    significanceTe: 'సనాతన ధర్మ నైతిక జీవన విధానానికి మరియు ఆదర్శ పాలనకు శాశ్వత దిక్సూచి.',
    significanceEn: 'The supreme moral and spiritual standard for righteous human civilization.'
  },
  {
    id: 'epoch_early_saraswati_sindhu',
    order: 3,
    nameTe: 'సింధు-సరస్వతి నాగరికత',
    nameEn: 'Indus-Saraswati Civilization',
    periodTe: 'క్రీ.పూ. 6,676 – 3,976',
    periodEn: '6,676 – 3,976 BCE',
    durationLabelTe: '2,700 ఏళ్ళు',
    durationLabelEn: '2,700 Years',
    startAngleDeg: -43.95,
    endAngleDeg: -2.09,
    midAngleDeg: -23.02,
    spanDeg: 41.86,
    yugaEquivalentTe: 'అవరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Descending Dwapara Yuga',
    icon: '🏺',
    color: '#E8F5E9',
    accentColor: '#1B5E20',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['indus_saraswati_civilization'],
    descriptionTe: 'రాఖీగఢీ, హరప్పా, మొహెంజొదారో, లోథాల్, ధోలవీర నగర నాగరికత, కాంస్య యుగ ప్రవేశం, సరస్వతీ నదీ తీరంలో బ్రహ్మాండ నివాసాల వికాసం.',
    descriptionEn: 'Early bronze metallurgy, planned grid cities at Harappa and Mohenjo-daro, maritime docks at Lothal along the Vedic Saraswati River.',
    achievementsTe: ['భూగర్భ మురుగునీటి పారుదల వ్యవస్థ & ధోలవీర జలాశయాలు', 'లోథాల్ టైడల్ ఓడరేవు & అంతర్జాతీయ సముద్ర వాణిజ్యం', 'ప్రామాణిక తూనికలు మరియు కొలతల విధానం'],
    achievementsEn: ['Subterranean drainage & stone reservoirs of Dholavira', 'World\'s first tidal dockyard at Lothal', 'Standardized weights and measures'],
    significanceTe: 'సరస్వతీ నదీ పరీవాహక ప్రాంతంలో ప్రపంచంలోనే అత్యున్నత నగర ప్రణాళికకు వేసిన పునాది.',
    significanceEn: 'The foundational bedrock of urban civilization along the Saraswati-Sindhu basin.'
  },
  {
    id: 'epoch_mahabharata_sandhi',
    order: 4,
    nameTe: '🕉️ మహాభారత యుగం (కురుక్షేత్రం & గీత)',
    nameEn: 'Mahabharata Era (Kurukshetra & Gita)',
    periodTe: 'ద్వాపర-కలి సంధి (క్రీ.పూ. 3102 కలి ప్రవేశం)',
    periodEn: 'Dwapara-Kali Sandhi (3102 BCE Kali Onset)',
    durationLabelTe: '300 ఏళ్ళు',
    durationLabelEn: '300 Years',
    startAngleDeg: -2.09,
    endAngleDeg: 8.00,
    midAngleDeg: 2.95,
    spanDeg: 10.09,
    yugaEquivalentTe: 'ద్వాపర-కలి సంధికాలం (క్రీ.పూ. 3102)',
    yugaEquivalentEn: 'Dwapara-Kali Transition (3102 BCE Kali Onset)',
    icon: '🕉️',
    color: '#FFF3E0',
    accentColor: '#BF360C',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['mahabharata_kuru_empire'],
    descriptionTe: 'కురుక్షేత్ర మహాభారత ధర్మయుద్ధం, శ్రీకృష్ణ పరమాత్మ గీతోపదేశం, ధర్మ సంస్థాపన, ద్వాపర యుగ ముగింపు మరియు కలియుగ ప్రవేశ సంధికాలం (క్రీ.పూ. 3102).',
    descriptionEn: 'The monumental Kurukshetra War, revelation of the Bhagavad Gita by Sri Krishna, re-establishment of Dharma, departure of Sri Krishna and astronomical commencement of Kali Yuga (3102 BCE).',
    achievementsTe: ['శ్రీమద్భగవద్గీత దివ్యోపదేశం (700 శ్లోకాలు - సర్వోపనిషత్ సారం)', 'మహర్షి వేదవ్యాస ప్రణీత లక్ష శ్లోకాల మహాభారతం', 'భీష్మ పితామహుని రాజధర్మ బోధన & శ్రీ విష్ణు సహస్రనామ స్తోత్రం'],
    achievementsEn: ['Revelation of the Bhagavad Gita (supreme essence of the Upanishads)', 'Maharshi Veda Vyasa’s monumental Mahabharata epic', 'Bhishma’s ethical discourse & Vishnu Sahasranama Stotram'],
    significanceTe: 'శ్రీకృష్ణ భగవానుని నిర్యాణం మరియు మానవాళికి గీతామృతాన్ని ప్రసాదించిన యుగ సంధి ఘట్టం.',
    significanceEn: 'The supreme celestial turning point: Departure of Sri Krishna and eternal revelation of the Bhagavad Gita.'
  },
  {
    id: 'epoch_vedic_civilization',
    order: 5,
    nameTe: 'వైదిక నాగరికత & వేద సంహితలు',
    nameEn: 'Vedic Civilization & Upanishads',
    periodTe: 'క్రీ.పూ. 3,676 – 976',
    periodEn: '3,676 – 976 BCE',
    durationLabelTe: '2,700 ఏళ్ళు',
    durationLabelEn: '2,700 Years',
    startAngleDeg: 8.00,
    endAngleDeg: 39.77,
    midAngleDeg: 23.88,
    spanDeg: 31.77,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 1)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 1)',
    icon: '📜',
    color: '#EDE7F6',
    accentColor: '#4A148C',
    dynastiesIncludedCount: 2,
    dynastiesIncludedIds: ['early_vedic_period', 'later_vedic_upanishads'],
    descriptionTe: 'చతుర్వేదాల (ఋగ్, యజుర్, సామ, అథర్వణ) మంత్ర సంహితలు, ఉపనిషత్తుల అద్వైత తాత్విక దర్శనాలు, సప్తసింధు నుండి గంగా పరీవాహక ప్రాంతానికి వైదిక విస్తరణ.',
    descriptionEn: 'Codification of the 4 Vedas (Rig, Yajur, Sama, Atharva), pristine Upanishadic Vedanta philosophy, and the dawn of Aryan civic order.',
    achievementsTe: ['సప్తర్షి జ్ఞాన సంప్రదాయం & వేద మంత్ర శాస్త్రం', 'ఉపనిషత్తుల బ్రహ్మ విచారణ (తత్త్వమసి, అహం బ్రహ్మాస్మి)', 'సభా, సమితి ప్రజాస్వామ్య వేదికలు'],
    achievementsEn: ['Vedic oral transmission (oral UNESCO heritage)', 'Sublime Upanishadic metaphysics', 'Sabha and Samiti early representative assemblies'],
    significanceTe: 'సనాతన ధర్మ తాత్విక పునాదులు మరియు ఆధ్యాత్మిక విజ్ఞాన శిఖరం.',
    significanceEn: 'The eternal intellectual and metaphysical core of Sanatana Dharma.'
  },
  {
    id: 'epoch_mahajanapadas_transition',
    order: 6,
    nameTe: '16 మహాజనపదాలు & యుగ సంధి',
    nameEn: '16 Mahajanapadas & Mid-Kali Sandhi',
    periodTe: 'క్రీ.పూ. 976 – 676',
    periodEn: '976 – 676 BCE',
    durationLabelTe: '300 ఏళ్ళు',
    durationLabelEn: '300 Years',
    startAngleDeg: 39.77,
    endAngleDeg: 43.95,
    midAngleDeg: 41.86,
    spanDeg: 4.18,
    yugaEquivalentTe: 'కలియుగ మధ్యంతర సంధికాలం',
    yugaEquivalentEn: 'Mid-Kali Transition Period',
    icon: '🏛️',
    color: '#FFF8E1',
    accentColor: '#C59B27',
    dynastiesIncludedCount: 2,
    dynastiesIncludedIds: ['mahajanapadas_shramana', 'magadha_dynasties'],
    descriptionTe: 'ఇనుప యుగ విప్లవం, గంగా మైదానంలో 16 మహాజనపదాల ఆవిర్భావం, నాణేల ముద్రణ, మగధ సామ్రాజ్య ఉషస్సు మరియు శ్రమణ తాత్విక ఉద్యమాలు.',
    descriptionEn: 'Second Urbanization, Iron Age metallurgy, formation of the 16 Mahajanapadas, early punch-marked coinage, and the rise of Magadha.',
    achievementsTe: ['ఇనుముతో వ్యవసాయ, రక్షణ పరికరాల ఆధునీకరణ', 'పంచ్-మార్క్డ్ వెండి నాణేల చలామణి', 'గణతంత్రాలు (లిచ్ఛవి) మరియు రాజరిక వ్యవస్థల స్థాపన'],
    achievementsEn: ['Iron ploughshares and military armaments', 'First silver punch-marked coinage', 'Early republics (Vajji, Licchavi) and statecraft'],
    significanceTe: 'భారతదేశంలో రెండవ పట్టణ విప్లవం మరియు భౌగోళిక సామ్రాజ్యాల ఆవిర్భావం.',
    significanceEn: 'Second Urbanization and dawn of pan-Indian geopolitical statecraft.'
  },
  {
    id: 'epoch_imperial_dynasties',
    order: 7,
    nameTe: 'భారతీయ మహా సామ్రాజ్యాల స్వర్ణయుగం',
    nameEn: 'The Imperial Dynasties of Bharat',
    periodTe: 'క్రీ.పూ. 676 – క్రీ.శ. 2025',
    periodEn: '676 BCE – 2025 CE',
    durationLabelTe: '2,701 ఏళ్ళు',
    durationLabelEn: '2,701 Years',
    startAngleDeg: 43.95,
    endAngleDeg: 81.63,
    midAngleDeg: 62.79,
    spanDeg: 37.68,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2: చారిత్రక సామ్రాజ్యాలు)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2: Classical Dynasties)',
    icon: '👑',
    color: '#FBE9E7',
    accentColor: '#D84315',
    dynastiesIncludedCount: 17,
    dynastiesIncludedIds: [
      'maurya_empire', 'shunga_kanva_revival', 'satavahana_empire', 'kushan_silk_road', 'sangam_era_chola_cheras_pandyas',
      'gupta_golden_age', 'harsha_chalukya_pallava', 'tripartite_rashtrakuta_pala',
      'imperial_chola_navy', 'delhi_sultanate_kakatiyas', 'vijayanagara_empire',
      'mughal_empire', 'maratha_empire', 'british_rule_1857',
      'national_freedom_struggle', 'independent_republic', 'digital_economic_rise'
    ],
    descriptionTe: 'మౌర్య, గుప్త, శాతవాహన, చోళ, చాళుక్య, విజయనగర, మరాఠా మహా సామ్రాజ్యాలు, ప్రపంచ ప్రసిద్ధ దేవాలయ శిల్పకళ, నలంద-తక్షశిల విశ్వవిద్యాలయాలు మరియు స్వాతంత్ర్య సంగ్రామం.',
    descriptionEn: 'The golden zenith of Indian statecraft: Maurya, Gupta, Satavahana, Imperial Chola, Vijayanagara, Maratha Swarajya, and the epic National Freedom Struggle.',
    achievementsTe: ['కౌటిల్యుని అర్థశాస్త్రం & అశోకుని ధర్మ శాసనాలు', 'గుప్తుల స్వర్ణయుగం: ఆర్యభట్ట సున్నా & బీజగణితం', 'చోళుల నౌకాదళం & విజయనగర హంపి శిల్పకళా వైభవం'],
    achievementsEn: ['Kautilya\'s Arthashastra & Ashokan rock edicts', 'Gupta Golden Age: Aryabhata\'s zero & trigonometry', 'Chola maritime supremacy & Vijayanagara architecture'],
    significanceTe: 'ప్రపంచ సంపదలో 27-33% జీడీపీతో ప్రపంచ వాణిజ్య మరియు విద్యా కేంద్రంగా వెలిగిన భారతదేశం.',
    significanceEn: 'When Bharat commanded 33% of global GDP as the world\'s paramount economic & spiritual beacon.'
  },
  {
    id: 'epoch_amrit_kaal_2026',
    order: 8,
    nameTe: 'వర్తమానం: అమృత కాలం (2026 CE)',
    nameEn: 'Present: Amrit Kaal (2026 CE)',
    periodTe: 'క్రీ.శ. 2025 – 3225',
    periodEn: '2025 – 3225 CE',
    durationLabelTe: '1,200 ఏళ్ళు',
    durationLabelEn: '1,200 Years',
    startAngleDeg: 81.63,
    endAngleDeg: 98.37,
    midAngleDeg: 90,
    spanDeg: 16.74,
    yugaEquivalentTe: 'ఎక్పైరోసిస్ (మహా పరివర్తనా సంధి) • వర్తమాన క్షణం',
    yugaEquivalentEn: 'Ekpyrosis (Nadir Cosmic Turning Point) • PRESENT NOW',
    icon: '🇮🇳',
    color: '#FFEBEE',
    accentColor: '#C62828',
    isCurrentTime: true,
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['current_time_bharat'],
    descriptionTe: 'నేటి వర్తమాన క్షణం (2026 CE): చంద్రయాన్, ఆదిత్య L-1 రోదసి విజయాలు, 5 ట్రిలియన్ డాలర్ల ఆర్థిక శక్తిగా ఎదుగుదల, డిజిటల్ భారత్ మరియు విశ్వగురు హోదా వైపు ప్రస్థానం.',
    descriptionEn: 'The present moment (2026 CE): Chandrayaan-3 lunar landing, Aditya-L1 solar observatory, 5-trillion economy trajectory, and the dawn of the Ascending Cosmic Arc.',
    achievementsTe: ['చంద్రుని దక్షిణ ధ్రువంపై కాలుమోపిన తొలి దేశం (చంద్రయాన్-3)', 'యూపీఐ (UPI) డిజిటల్ విప్లవం & ఆధునిక మౌలిక వసతులు', 'ఆయుష్, యోగా మరియు ప్రాచీన విజ్ఞాన పునరుజ్జీవనం'],
    achievementsEn: ['First nation to land on the Lunar South Pole (Chandrayaan-3)', 'World\'s largest real-time payment ecosystem (UPI)', 'Global resurgence of Yoga, Ayurveda, and Dharmic ethos'],
    significanceTe: '12,900 ఏళ్ళ అవరోహణ చక్రం ముగిసి, నవ చైతన్య ఆరోహణ యుగంలోకి ప్రవేశిస్తున్న సంధికాల మలుపు.',
    significanceEn: 'The exact turning point from the 12,900-year descent into the ascending cycle of light.'
  },
  {
    id: 'epoch_ascending_science_era',
    order: 9,
    nameTe: 'ఆరోహణ రోదసి & విజ్ఞాన యుగం',
    nameEn: 'Ascending Space & Energy Era',
    periodTe: 'క్రీ.శ. 3225 – 5925',
    periodEn: '3,225 – 5,925 CE',
    durationLabelTe: '2,700 ఏళ్ళు',
    durationLabelEn: '2,700 Years',
    startAngleDeg: 98.37,
    endAngleDeg: 140.23,
    midAngleDeg: 119.30,
    spanDeg: 41.86,
    yugaEquivalentTe: 'ఆరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Ascending Dwapara Yuga',
    icon: '🚀',
    color: '#E0F7FA',
    accentColor: '#00838F',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['ascending_science_space'],
    descriptionTe: 'శ్రీ యుక్తేశ్వర్ సిద్ధాంతం ప్రకారం విద్యుత్, పరమాణు, రోదసి మరియు సూక్ష్మ తరంగ శక్తుల సంపూర్ణ అవగాహన; అంతరిక్ష యానం.',
    descriptionEn: 'Mastery over electro-magnetic spectrum, fine energy matrices, and awakening of higher mental faculties.',
    achievementsTe: ['శూన్య శక్తి (Zero Point Energy) & నక్షత్రయానం', 'శరీర-మనస్సుల ఏకీకృత స్వస్థత విజ్ఞానం', 'సకల ప్రాణుల పట్ల అహింస, పరస్పర సహకార వ్యవస్థ'],
    achievementsEn: ['Zero-point energy & interstellar exploration', 'Holistic bio-resonance healing sciences', 'Universal compassion and planetary stewardship'],
    significanceTe: 'భౌతిక వాదం నుండి సూక్ష్మ శక్తి విజ్ఞానం వైపు మానవాళి ప్రస్థానం.',
    significanceEn: 'Humanity\'s evolutionary transcendence from gross matter to subtle energy matrices.'
  },
  {
    id: 'epoch_ascending_mental_harmony',
    order: 10,
    nameTe: 'ఆరోహణ మనోశక్తి & రామరాజ్య యుగం',
    nameEn: 'Ascending Intuition & Ramarajya',
    periodTe: 'క్రీ.శ. 5925 – 8925',
    periodEn: '5,925 – 8,925 CE',
    durationLabelTe: '3,000 ఏళ్ళు',
    durationLabelEn: '3,000 Years',
    startAngleDeg: 140.23,
    endAngleDeg: 182.09,
    midAngleDeg: 161.16,
    spanDeg: 41.86,
    yugaEquivalentTe: 'ఆరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Ascending Treta Yuga',
    icon: '🧘',
    color: '#FFF3E0',
    accentColor: '#E65100',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['ascending_mental_ramarajya'],
    descriptionTe: 'టెలిపతి, అంతఃచేతనా వికాసం, ఆలోచనా తరంగాలతో వస్తు సృష్టి, సమాజంలో నేరాలు లేని పవిత్ర ధర్మపాలన మరియు ప్రకృతితో సామరస్యం.',
    descriptionEn: 'Universal direct intuition, telepathic communion, thought-materialization, supreme ethical governance, and deep harmony with nature.',
    achievementsTe: ['మానసిక సంభాషణ (Telepathy) & దివ్య దృష్టి', 'రామరాజ్య ధర్మపాలన & కరుణామయ జీవనం', 'ప్రకృతి శక్తులపై స్వచ్ఛంద ఆధిపత్యం'],
    achievementsEn: ['Direct mental telepathy & clairvoyance', 'Dharmic equitable stewardship of civilization', 'Harmonic resonance with planetary ecology'],
    significanceTe: 'మానవ మేధస్సు దివ్య ఆధ్యాత్మిక సంకల్ప శక్తిగా రూపాంతరం చెందడం.',
    significanceEn: 'The flowering of divine mental power and global righteousness.'
  },
  {
    id: 'epoch_ascending_satya_apex',
    order: 11,
    nameTe: 'ఆరోహణ సత్యయుగ స్వర్ణ శిఖరం',
    nameEn: 'Ascending Satya Golden Age',
    periodTe: 'క్రీ.శ. 8925 – 14,625 / 10,876 BCE',
    periodEn: '8,925 – 14,625 CE / 10,876 BCE',
    durationLabelTe: '5,700 ఏళ్ళు',
    durationLabelEn: '5,700 Years',
    startAngleDeg: 182.09,
    endAngleDeg: 261.63,
    midAngleDeg: 221.86,
    spanDeg: 79.54,
    yugaEquivalentTe: 'ఆరోహణ సత్యయుగం & పరమ వైదిక సృష్టి మూలాలు',
    yugaEquivalentEn: 'Ascending Satya Yuga & Cosmic Genesis',
    icon: '🪷',
    color: '#FFFDE7',
    accentColor: '#F57F17',
    dynastiesIncludedCount: 1,
    dynastiesIncludedIds: ['ascending_satya_apex'],
    descriptionTe: 'బ్రహ్మజ్ఞానం, సకల ప్రాణులలో భగవద్దర్శనం, మహర్షుల నిరంతర దివ్య తపస్సు, సత్యం మరియు ధర్మం నాలుగు పాదాలతో నడిచే పరిపూర్ణ స్వర్ణయుగం.',
    descriptionEn: 'Full spiritual liberation, omnipresent God-consciousness, Rishi tapasya, when Dharma stands whole upon all four pillars of truth.',
    achievementsTe: ['జీవన్ముక్తి & దివ్య బ్రహ్మ సాక్షాత్కారం', 'సత్యం, తపస్సు, దయ, దానం పరిపూర్ణత', 'భౌతిక, సూక్ష్మ, కారణ లోకాల సమన్వయం'],
    achievementsEn: ['Jivanmukti (living liberation) and supreme enlightenment', 'Complete embodiment of Satya, Tapas, Daya, and Dana', 'Seamless unity of physical and transcendental planes'],
    significanceTe: 'సృష్టి కాలచక్రపు పరమ శిఖరం మరియు పునరావృత ఆది మూలం.',
    significanceEn: 'The supreme pinnacle of the 25,800-year Great Year.'
  }
];

// Helper functions for Yuga names
export const getYugaTeluguDisplayName = (category: string): string => {
  switch (category) {
    case 'kataklysmos':
      return 'కటాక్లిస్మోస్';
    case 'ekpyrosis':
      return 'ఎక్పైరోసిస్';
    case 'satya':
      return 'సత్యయుగం';
    case 'treta':
      return 'త్రేతాయుగం';
    case 'dwapara':
      return 'ద్వాపరయుగం';
    case 'kali':
      return 'కలియుగం';
    case 'transition':
      return 'సంధి';
    default:
      return 'యుగచక్రం';
  }
};

export const getYugaEnglishDisplayName = (category: string): string => {
  switch (category) {
    case 'kataklysmos':
      return 'Kataklysmos';
    case 'ekpyrosis':
      return 'Ekpyrosis';
    case 'satya':
      return 'Satya Yuga';
    case 'treta':
      return 'Treta Yuga';
    case 'dwapara':
      return 'Dwapara Yuga';
    case 'kali':
      return 'Kali Yuga';
    case 'transition':
      return 'Sandhi';
    default:
      return 'Yuga';
  }
};

export const getEpochShortDisplayName = (epoch: BharatCivilizationEpoch, isEn: boolean): string => {
  if (isEn) {
    switch (epoch.id) {
      case 'epoch_prehistory_mehrgarh':
        return 'Mehrgarh & Stone Age';
      case 'epoch_ramayana_era':
        return 'Ramayana Era';
      case 'epoch_early_saraswati_sindhu':
        return 'Indus-Saraswati';
      case 'epoch_mahabharata_sandhi':
        return 'Mahabharata (Gita)';
      case 'epoch_vedic_civilization':
        return 'Vedic Civilization';
      case 'epoch_mahajanapadas_transition':
        return '16 Mahajanapadas';
      case 'epoch_imperial_dynasties':
        return 'Imperial Dynasties';
      case 'epoch_amrit_kaal_2026':
        return 'Amrit Kaal (2026)';
      case 'epoch_ascending_science_era':
        return 'Space & Energy Era';
      case 'epoch_ascending_mental_harmony':
        return 'Intuition & Dharma';
      case 'epoch_ascending_satya_apex':
        return 'Ascending Satya';
      default:
        return epoch.nameEn.split('(')[0].trim();
    }
  } else {
    switch (epoch.id) {
      case 'epoch_prehistory_mehrgarh':
        return 'మెహర్‌గఢ్ & శిలా యుగం';
      case 'epoch_ramayana_era':
        return 'రామాయణ యుగం';
      case 'epoch_early_saraswati_sindhu':
        return 'సింధు-సరస్వతి నాగరికత';
      case 'epoch_mahabharata_sandhi':
        return 'మహాభారతం (గీత)';
      case 'epoch_vedic_civilization':
        return 'వైదిక నాగరికత';
      case 'epoch_mahajanapadas_transition':
        return '16 మహాజనపదాలు';
      case 'epoch_imperial_dynasties':
        return 'భారతీయ సామ్రాజ్యాలు';
      case 'epoch_amrit_kaal_2026':
        return 'అమృత కాలం (2026)';
      case 'epoch_ascending_science_era':
        return 'రోదసి & విజ్ఞాన యుగం';
      case 'epoch_ascending_mental_harmony':
        return 'మనోశక్తి & రామరాజ్యం';
      case 'epoch_ascending_satya_apex':
        return 'ఆరోహణ సత్యయుగం';
      default:
        return epoch.nameTe.split('(')[0].replace(/[🏹🕉️🪨🏺📜🏛️👑🇮🇳🚀🧘🪷]/g, '').trim();
    }
  }
};

export type SelectedItemType = 
  | { kind: 'empire'; data: ChakraTimeEvent }
  | { kind: 'epoch'; data: BharatCivilizationEpoch }
  | { kind: 'yuga'; data: YugaCycleSegment };

export const IndianHistoryChakraView: React.FC = () => {
  const { language, setViewMode } = useMythology();
  const isEn = language === 'en';

  // Active selection: Defaults to Amrit Kaal (2026 CE / Present Time)
  const defaultEvent = useMemo(() => {
    return INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.isCurrentTime) || INDIAN_HISTORY_CHAKRA_EVENTS[0];
  }, []);

  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    kind: 'empire',
    data: defaultEvent
  });

  // Rotation angle of the wheel (in degrees)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Auto Tour mode
  const [isTourActive, setIsTourActive] = useState<boolean>(false);

  // Audio chime state
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

  // Live real-time clock state for "Current Time"
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Lightbox for thumbnail image
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  // Pop-up modal for Dravidian & South Indian Heritage deep dive
  const [isDravidianModalOpen, setIsDravidianModalOpen] = useState<boolean>(false);

  // Pop-up modal for కురువంశ మహాభారత కాలరేఖ (Kuru Mahabharata Timeline) Window
  const [isKuruTimelineModalOpen, setIsKuruTimelineModalOpen] = useState<boolean>(false);

  // Pop-up modal for రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు (Ramayana Era & Treta Dynasties) Window
  const [isRamayanaTimelineModalOpen, setIsRamayanaTimelineModalOpen] = useState<boolean>(false);

  // Filter focus: 'all' | 'outer_yuga' | 'middle_epoch' | 'inner_dynasties'
  const [focusRing, setFocusRing] = useState<'all' | 'outer_yuga' | 'middle_epoch' | 'inner_dynasties'>('all');

  // Sound generator using Web Audio API
  const playChime = (freq = 528) => {
    if (!isAudioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio autoplay policy or unavailable
    }
  };

  // Clock tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto Tour Interval: steps through dynasties, epochs, and yugas
  useEffect(() => {
    if (!isTourActive) return;

    let stepCounter = 0;
    const interval = setInterval(() => {
      stepCounter++;
      const mod = stepCounter % 3;
      if (mod === 0) {
        // Step in Empires
        const currEmpireIdx = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(
          e => selectedItem.kind === 'empire' && e.id === selectedItem.data.id
        );
        const nextIdx = (currEmpireIdx + 1) % INDIAN_HISTORY_CHAKRA_EVENTS.length;
        const nextEmpire = INDIAN_HISTORY_CHAKRA_EVENTS[nextIdx];
        setSelectedItem({ kind: 'empire', data: nextEmpire });
        playChime(nextEmpire.isCurrentTime ? 880 : 440 + nextIdx * 15);
      } else if (mod === 1) {
        // Step in Epochs
        const currEpochIdx = BHARAT_CIVILIZATION_EPOCHS.findIndex(
          ep => selectedItem.kind === 'epoch' && ep.id === selectedItem.data.id
        );
        const nextIdx = (currEpochIdx + 1) % BHARAT_CIVILIZATION_EPOCHS.length;
        const nextEpoch = BHARAT_CIVILIZATION_EPOCHS[nextIdx];
        setSelectedItem({ kind: 'epoch', data: nextEpoch });
        playChime(nextEpoch.isCurrentTime ? 880 : 500 + nextIdx * 20);
      } else {
        // Step in Yugas
        const currYugaIdx = YUGA_CYCLE_25800_SEGMENTS.findIndex(
          s => selectedItem.kind === 'yuga' && s.id === selectedItem.data.id
        );
        const nextIdx = (currYugaIdx + 1) % YUGA_CYCLE_25800_SEGMENTS.length;
        const nextYuga = YUGA_CYCLE_25800_SEGMENTS[nextIdx];
        setSelectedItem({ kind: 'yuga', data: nextYuga });
        playChime(nextYuga.isCurrentTime ? 880 : 440 + nextIdx * 20);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTourActive, isAudioEnabled, selectedItem]);

  // Jump to Current Time (2026 CE)
  const handleJumpToCurrentTime = () => {
    const curr = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.isCurrentTime) || INDIAN_HISTORY_CHAKRA_EVENTS[0];
    setSelectedItem({
      kind: 'empire',
      data: curr
    });
    playChime(880);
  };

  // Jump to Year 0 (0 CE / క్రీ.శ. 0)
  const handleJumpToYearZero = () => {
    const zeroEvent = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.id === 'satavahana_empire') || INDIAN_HISTORY_CHAKRA_EVENTS[10];
    setSelectedItem({
      kind: 'empire',
      data: zeroEvent
    });
    playChime(784);
  };

  // ============================================================
  // 3-TIER CONCENTRIC CHAKRA GEOMETRY CONSTANTS
  // All 3 Chakras in ONE Single Master Circle
  // ============================================================
  const CX = 500;
  const CY = 500;

  // 1. OUTER RING (Ring 1): 25,800 ఏళ్ల యుగచక్రం (Yuga Cycle)
  // Radius: 490px to 405px (Width: 85px)
  const R_RING1_OUTER = 490;
  const R_RING1_INNER = 405;

  // 2. MIDDLE RING (Ring 2): లోపలి భారతీయ కాలక్రమం (Civilizational Epochs)
  // Radius: 400px to 315px (Width: 85px)
  const R_RING2_OUTER = 400;
  const R_RING2_INNER = 315;

  // 3. INNER CHAKRA (Ring 3): భారతీయ సామ్రాజ్యాలు & ఇతిహాసాలు (All Dynasties & Epics)
  // Radius: 310px to 210px (Width: 100px)
  const R_RING3_OUTER = 310;
  const R_RING3_INNER = 210;

  // Center Hub & Trajectory
  const R_ARROW_BAND = 160;
  const R_HUB_OUTER = 145;
  const R_HUB_MID = 105;
  const R_HUB_INNER = 72;

  // Outer Ring Segments: 25,800 Yuga Cycle
  const yugaAngleSegments = useMemo(() => {
    let currentAngle = -90 - (16.744 / 2);
    return YUGA_CYCLE_25800_SEGMENTS.map(seg => {
      const span = (seg.durationYears / 25800) * 360;
      const start = currentAngle;
      const end = currentAngle + span;
      const mid = start + span / 2;
      currentAngle = end;
      return {
        ...seg,
        startAngleDeg: start,
        endAngleDeg: end,
        midAngleDeg: mid,
        spanDeg: span
      };
    });
  }, []);

  // Inner Chakra: All Dynasties & Eras scaled directly along the 25,800-year cycle
  // Every spoke matches the era time scale and outer ring!
  const dynastySegments = useMemo(() => {
    return INDIAN_HISTORY_CHAKRA_EVENTS.map(event => ({
      ...event,
      startDeg: event.startAngleDeg,
      endDeg: event.endAngleDeg,
      midDeg: event.midAngleDeg,
      spanDeg: event.spanDeg
    }));
  }, []);

  // Helper for SVG Arc path
  const describeArcSector = (cx: number, cy: number, rInner: number, rOuter: number, startAngleDeg: number, endAngleDeg: number) => {
    const startRad = (startAngleDeg * Math.PI) / 180;
    const endRad = (endAngleDeg * Math.PI) / 180;

    const x1 = cx + rOuter * Math.cos(startRad);
    const y1 = cy + rOuter * Math.sin(startRad);
    const x2 = cx + rOuter * Math.cos(endRad);
    const y2 = cy + rOuter * Math.sin(endRad);

    const x3 = cx + rInner * Math.cos(endRad);
    const y3 = cy + rInner * Math.sin(endRad);
    const x4 = cx + rInner * Math.cos(startRad);
    const y4 = cy + rInner * Math.sin(startRad);

    const largeArc = (endAngleDeg - startAngleDeg) > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  // Formatted date and time
  const formattedDate = currentTime.toLocaleDateString(isEn ? 'en-US' : 'te-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString(isEn ? 'en-US' : 'te-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-xl overflow-hidden min-h-[950px] mb-12">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER BANNER                                         */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-[#2A0800] via-[#5C1D06] to-[#7B1113] px-4 sm:px-8 py-6 text-white border-b-4 border-[#D4AF37] relative overflow-hidden shadow-md">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#FFD54F] to-[#FFF8E1] p-0.5 shadow-xl shrink-0 flex items-center justify-center border border-[#FFE082]">
              <div className="w-full h-full rounded-2xl bg-[#3E1004] flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                ☸️
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#2A0800] text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#2A0800]" />
                  {isEn ? 'All 3 Chakras Concentric In One' : '3 చక్రాల ఏకరీతి సమగ్ర దర్శిని'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#FFE082] text-xs font-bold border border-[#D4AF37]/50">
                  {isEn ? '1. Yuga Cycle • 2. Ramayana & Mahabharata Eras • 3. Dynasties Scaled' : '1. 25,800y యుగచక్రం • 2. రామాయణ & మహాభారత కాలక్రమం • 3. మహా సామ్రాజ్యాలు'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/50 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isEn ? 'LIVE: 2026 CE Synchronized' : 'వర్తమానం: 2026 CE ఏకరీతిగా సమన్వయం'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFE082] font-telugu-serif tracking-tight mt-1.5 drop-shadow-sm">
                {isEn 
                  ? 'The Tri-Chakra: Yuga Cycle, Ramayana & Mahabharata Eras & Imperial Dynasties' 
                  : 'త్రిచక్ర సమగ్ర దర్శిని: 25,800 ఏళ్ల యుగచక్రం, రామాయణ-మహాభారత యుగాలు & భారతీయ మహా సామ్రాజ్యాలు'}
              </h1>
              <p className="text-xs sm:text-sm text-[#FFECE4] mt-1.5 max-w-3xl leading-relaxed font-medium">
                {isEn 
                  ? 'All 3 Chakras unified in one majestic circle: (1) Outer Ring: 25,800-year Yuga Cycle with Telugu Yuga names; (2) Middle Ring: Indian Civilizational Chronology featuring Ramayana & Mahabharata eras; (3) Inner Chakra: Dynasties and epics precisely scaled along the chronological arc. All 3 rings perfectly aligned with the 2026 CE live needle at bottom.'
                  : 'ఒకే బ్రహ్మాండ వృత్తంలో 3 వలయాల సమాహారం: (1) బయటి వలయం: 25,800 ఏళ్ల మహా యుగచక్రం (తెలుగు పేర్లతో); (2) మధ్య వలయం: రామాయణ మరియు మహాభారత యుగాలతో కూడిన భారతీయ కాలక్రమం; (3) లోపలి చక్రం: కాలచక్ర ప్రమాణంలో సరిగ్గా అమర్చబడిన భారతీయ మహా సామ్రాజ్యాలు. సరిగ్గా చక్రం దిగువన (6 o\'clock) 2026 CE లైవ్ సూచికతో మూడు చక్రాలూ పరిపూర్ణంగా సమన్వయం చేయబడ్డాయి.'}
              </p>
            </div>
          </div>

          {/* Current Live Time Badge */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF37]/50 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFE082]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{isEn ? 'Present Live Clock (IST)' : 'ప్రత్యక్ష వర్తమాన కాలం'}</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-black text-cyan-300 tracking-wider">
              {formattedTime}
            </div>
            <div className="text-xs text-[#FFE082]/90 font-medium">
              {formattedDate} • {isEn ? 'Kaliyuga 5127' : 'కలియుగం 5127'}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={handleJumpToCurrentTime}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer border border-cyan-300/40"
                title={isEn ? 'Jump to Current Time (2026 CE)' : 'చక్రంపై నేటి వర్తమాన సమయానికి వెళ్ళు (2026 CE)'}
              >
                <Target className="w-3.5 h-3.5 text-cyan-200" />
                <span>{isEn ? '2026 CE' : '2026 వర్తమానం'}</span>
              </button>
              <button
                onClick={handleJumpToYearZero}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-700 to-red-800 hover:from-rose-600 hover:to-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer border border-rose-300/40"
                title={isEn ? 'Jump to Year 0 (0 CE / 1 BCE)' : 'క్రీ.శ. 0 (0 CE) స్థానానికి వెళ్ళు'}
              >
                <MapPin className="w-3.5 h-3.5 text-rose-200" />
                <span>{isEn ? '0 CE Pin' : 'క్రీ.శ. 0 పిన్'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Toolbar: Ring Focus Filter & Controls */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Ring Focus Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[#FFE082] uppercase tracking-wider mr-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#FFD54F]" />
              {isEn ? 'Highlight Chakra Layer:' : 'చక్రాల లేయర్ హైలైట్:'}
            </span>

            <button
              onClick={() => setFocusRing('all')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                focusRing === 'all'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? '🌟 All 3 Chakras (Tri-Chakra)' : '🌟 మూడు చక్రాలు (ఒకే వృత్తంలో)'}</span>
            </button>

            <button
              onClick={() => setFocusRing('outer_yuga')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                focusRing === 'outer_yuga'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{isEn ? '🌌 Outer Ring: Yuga Cycle' : '🌌 1. బయటి యుగచక్రం (25,800y)'}</span>
            </button>

            <button
              onClick={() => setFocusRing('middle_epoch')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                focusRing === 'middle_epoch'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{isEn ? '🏛️ Middle Ring: Bharat Chronology (Ramayana & Mahabharata)' : '🏛️ 2. మధ్య భారత కాలక్రమం (రామాయణ, మహాభారతం)'}</span>
            </button>

            <button
              onClick={() => setFocusRing('inner_dynasties')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                focusRing === 'inner_dynasties'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{isEn ? '👑 Inner Chakra: Scaled Dynasties' : '👑 3. లోపలి మహా సామ్రాజ్యాలు & ఇతిహాసాలు'}</span>
            </button>
          </div>

          {/* Tour & Audio buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsTourActive(!isTourActive)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                isTourActive 
                  ? 'bg-amber-400 text-red-950 ring-2 ring-white animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40'
              }`}
            >
              {isTourActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTourActive ? (isEn ? 'Pause' : 'ఆపు') : (isEn ? 'Auto Tour' : 'ఆటో యాత్ర')}</span>
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev + 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Clockwise' : 'సవ్యదిశలో తిప్పు'}
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setRotationAngle(prev => prev - 15)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] border border-[#D4AF37]/40 cursor-pointer"
              title={isEn ? 'Rotate Anti-Clockwise' : 'అపసవ్యదిశలో తిప్పు'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className={`p-1.5 rounded-xl transition-all cursor-pointer border ${
                isAudioEnabled ? 'bg-amber-400/20 text-amber-300 border-amber-400/50' : 'bg-white/5 text-stone-400 border-white/20'
              }`}
              title={isAudioEnabled ? (isEn ? 'Mute' : 'మ్యూట్') : (isEn ? 'Unmute' : 'శబ్దం ఆన్')}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN WORKSPACE: THE 3-TIER CONCENTRIC CHAKRA + DOSSIER    */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE MASTER 3-TIER CONCENTRIC SVG CHAKRA         */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center">
          
          <div className="w-full max-w-[740px] aspect-square relative select-none flex items-center justify-center p-2 sm:p-4 rounded-3xl bg-radial from-[#FFFDF8] via-[#FFF9EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-2xl">
            
            {/* Top Indicator Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="flex items-center gap-1.5 bg-cyan-950/95 text-cyan-200 border border-cyan-400/60 px-3 py-1.5 rounded-full shadow-md text-xs font-black backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>{isEn ? '2026 CE Live Needle' : '2026 CE లైవ్ సూచిక'}</span>
              </div>

              <button
                onClick={handleJumpToYearZero}
                className="flex items-center gap-1.5 bg-rose-950/95 hover:bg-rose-900 text-rose-200 border border-rose-400/60 px-3 py-1.5 rounded-full shadow-md text-xs font-black backdrop-blur-xs cursor-pointer transition-all"
                title={isEn ? 'Focus Year 0 Pin (0 CE)' : 'క్రీ.శ. 0 పిన్ వద్దకు వెళ్ళు'}
              >
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{isEn ? '📍 0 CE Pin (క్రీ.శ. 0)' : '📍 క్రీ.శ. 0 పిన్ (0 CE)'}</span>
              </button>
            </div>

            {/* View Original Yuga Diagram Button */}
            <button
              onClick={() => setPreviewImage({
                src: './images/indian_history/yuga_cycle_25800.jpg',
                title: isEn ? 'Master Reference: Yuga Cycle 25,800 Years' : 'మూల పటం: 25,800 ఏళ్ల యుగచక్రం (Ascending & Descending)'
              })}
              className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#7B1113]/90 hover:bg-[#7B1113] text-[#FFE082] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#D4AF37] cursor-pointer transition-all"
              title={isEn ? 'View Original Uploaded 25,800-Year Yuga Diagram' : 'మూల 25,800 ఏళ్ల యుగచక్ర పటం చూడండి'}
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>{isEn ? 'Source Poster' : 'మూల పటం (HD)'}</span>
            </button>

            {/* ============================================================ */}
            {/* THE MASTER 3-TIER CONCENTRIC SVG CHAKRA                      */}
            {/* ============================================================ */}
            <svg
              viewBox="-90 -90 1180 1180"
              className="w-full h-full drop-shadow-2xl transition-transform duration-700 ease-out"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transformOrigin: `${CX}px ${CY}px`
              }}
            >
              <defs>
                <radialGradient id="chakraGoldGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF8E1" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#7B1113" />
                </radialGradient>

                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#FFF9E6" />
                  <stop offset="100%" stopColor="#FFE082" />
                </radialGradient>

                <radialGradient id="currentTimeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#00838F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#006064" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="yearZeroAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#DC2626" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="pinGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F87171" />
                  <stop offset="40%" stopColor="#EF4444" />
                  <stop offset="80%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>

                <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7B1113" floodOpacity="0.5" />
                </filter>

                <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#3E1004" />
                </marker>
              </defs>

              {/* ------------------------------------------------------------ */}
              {/* TIER 1: OUTER RING — 25,800-YEAR YUGA CYCLE (r=490 to 405)   */}
              {/* Bright, radiant parchment foundation (No dark center circle)  */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_RING1_OUTER + 2} fill="#FFFDF8" stroke="#D4AF37" strokeWidth="4" />
              <circle cx={CX} cy={CY} r={R_RING1_INNER} fill="none" stroke="#D4AF37" strokeWidth="2.5" />

              {/* 16 Yuga Cycle Sectors */}
              {yugaAngleSegments.map(seg => {
                const isSelected = selectedItem.kind === 'yuga' && selectedItem.data.id === seg.id;
                const isCurr = seg.isCurrentTime;
                const path = describeArcSector(CX, CY, R_RING1_INNER, R_RING1_OUTER, seg.startAngleDeg, seg.endAngleDeg);

                const rad = (seg.midAngleDeg * Math.PI) / 180;
                const rText = (R_RING1_OUTER + R_RING1_INNER) / 2;
                const xT = CX + rText * Math.cos(rad);
                const yT = CY + rText * Math.sin(rad);

                let textRot = seg.midAngleDeg + 90;
                if (seg.midAngleDeg > 0 && seg.midAngleDeg < 180) {
                  textRot += 180;
                }

                const isKataklysmos = seg.category === 'kataklysmos';
                const isEkpyrosis = seg.category === 'ekpyrosis';
                const teluguYuga = getYugaTeluguDisplayName(seg.category);
                const englishYuga = getYugaEnglishDisplayName(seg.category);

                return (
                  <g
                    key={`ring1-yuga-${seg.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'yuga', data: seg });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'all' || focusRing === 'outer_yuga' ? 1 : 0.25}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#B71C1C' : seg.color)
                          : (seg.category === 'kataklysmos'
                              ? '#E3F2FD'
                              : seg.category === 'ekpyrosis'
                                ? '#FFEBEE'
                                : seg.category === 'transition'
                                  ? '#F0EDE6'
                                  : seg.category === 'satya'
                                    ? '#FFFDE7'
                                    : seg.category === 'treta'
                                      ? '#FFF3E0'
                                      : seg.category === 'dwapara'
                                        ? '#E8F5E9'
                                        : '#EDE7F6')
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#E53935' : '#3E1004')}
                      strokeWidth={isSelected ? 3.5 : (isCurr ? 2.5 : 1.5)}
                      className="transition-colors duration-200"
                    />

                    {/* Sector Content */}
                    {seg.category === 'transition' ? (
                      <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                        <text
                          x={xT}
                          y={yT - 10}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={16}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : '#3E2723'}
                          className="font-telugu-serif"
                        >
                          సంధి
                        </text>
                        <text
                          x={xT}
                          y={yT + 12}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={12.5}
                          fontWeight="bold"
                          fill={isSelected ? '#FFFFFF' : '#6D4C41'}
                          className="font-mono"
                        >
                          300y
                        </text>
                      </g>
                    ) : (
                      <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                        {/* Telugu Yuga Name */}
                        <text
                          x={xT}
                          y={yT - 20}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={isKataklysmos || isEkpyrosis ? 20 : 23}
                          fontWeight="900"
                          fill={
                            isSelected 
                              ? '#FFE082' 
                              : (isKataklysmos ? '#0D47A1' : isEkpyrosis ? '#B71C1C' : '#1A0500')
                          }
                          className="font-telugu-serif tracking-tight"
                        >
                          {teluguYuga}
                        </text>

                        {/* English Subtitle */}
                        <text
                          x={xT}
                          y={yT + 3}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={15}
                          fontWeight="bold"
                          fontStyle={isKataklysmos || isEkpyrosis ? 'italic' : 'normal'}
                          fill={
                            isSelected 
                              ? '#FFFFFF' 
                              : (isKataklysmos ? '#1565C0' : isEkpyrosis ? '#C62828' : '#4E342E')
                          }
                          className="font-serif tracking-wide"
                        >
                          {englishYuga}
                        </text>

                        {/* Duration */}
                        <text
                          x={xT}
                          y={yT + 24}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={13}
                          fontWeight="bold"
                          fill={
                            isSelected 
                              ? '#FFD54F' 
                              : (isKataklysmos ? '#1976D2' : isEkpyrosis ? '#D32F2F' : '#616161')
                          }
                          className="font-mono"
                        >
                          {isEn ? seg.durationLabelEn : `${seg.durationYears} ఏళ్ళు`}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Boundary Ticks & External Dates (Staggered on 2 radial tracks to prevent overlap & clearly display BCE / CE) */}
              {yugaAngleSegments.map((seg, idx, arr) => {
                const rad = (seg.startAngleDeg * Math.PI) / 180;
                const isSandhiStart = seg.category === 'transition';
                const prevSeg = idx > 0 ? arr[idx - 1] : arr[arr.length - 1];
                const isSandhiEnd = prevSeg && prevSeg.category === 'transition';

                // Generous stagger distance: Sandhi start = 20px, Sandhi end = 50px, standard = 26px
                const rOffset = isSandhiEnd ? 50 : (isSandhiStart ? 20 : 26);
                const tickLen = isSandhiEnd ? 40 : (isSandhiStart ? 10 : 16);

                const xInner = CX + R_RING1_INNER * Math.cos(rad);
                const yInner = CY + R_RING1_INNER * Math.sin(rad);
                const xTickEnd = CX + (R_RING1_OUTER + tickLen) * Math.cos(rad);
                const yTickEnd = CY + (R_RING1_OUTER + tickLen) * Math.sin(rad);

                const xDate = CX + (R_RING1_OUTER + rOffset) * Math.cos(rad);
                const yDate = CY + (R_RING1_OUTER + rOffset) * Math.sin(rad);

                let dateRot = seg.startAngleDeg + 90;
                if (seg.startAngleDeg > 0 && seg.startAngleDeg < 180) dateRot += 180;

                const rawDate = seg.datesEn.split('–')[0].trim();
                const isBce = rawDate.includes('BCE');
                const yearNum = rawDate.replace(/[^0-9,]/g, '');

                return (
                  <g key={`ring1-border-tick-${seg.id}`} className="pointer-events-none select-none" opacity={focusRing === 'all' || focusRing === 'outer_yuga' ? 1 : 0.25}>
                    <line
                      x1={xInner}
                      y1={yInner}
                      x2={xTickEnd}
                      y2={yTickEnd}
                      stroke="#8D6E63"
                      strokeWidth={isSandhiStart || isSandhiEnd ? "1.5" : "2"}
                    />
                    <text
                      x={xDate}
                      y={yDate}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isSandhiStart || isSandhiEnd ? 13.5 : 15}
                      fontWeight="900"
                      transform={`rotate(${dateRot}, ${xDate}, ${yDate})`}
                      className="font-mono tracking-tight"
                    >
                      <tspan fill="#2A0800">{yearNum}</tspan>
                      <tspan dx={4} fontSize={isSandhiStart || isSandhiEnd ? 12 : 13.5} fontWeight="900" fill={isBce ? "#C62828" : "#0277BD"}>
                        {isBce ? 'BCE' : 'CE'}
                      </tspan>
                    </text>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 2: MIDDLE RING — భారతీయ కాలక్రమం (r=400 to 315)          */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_RING2_OUTER} fill="none" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx={CX} cy={CY} r={R_RING2_INNER} fill="none" stroke="#3E1004" strokeWidth="2" />

              {/* 10 Civilizational Epochs of Bharat */}
              {BHARAT_CIVILIZATION_EPOCHS.map(epoch => {
                const isSelected = selectedItem.kind === 'epoch' && selectedItem.data.id === epoch.id;
                const isCurr = epoch.isCurrentTime;
                const path = describeArcSector(CX, CY, R_RING2_INNER, R_RING2_OUTER, epoch.startAngleDeg, epoch.endAngleDeg);

                const rad = (epoch.midAngleDeg * Math.PI) / 180;
                const rMid = (R_RING2_OUTER + R_RING2_INNER) / 2;
                const xM = CX + rMid * Math.cos(rad);
                const yM = CY + rMid * Math.sin(rad);

                let rot = epoch.midAngleDeg + 90;
                if (epoch.midAngleDeg > 0 && epoch.midAngleDeg < 180) rot += 180;

                return (
                  <g
                    key={`ring2-epoch-${epoch.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'epoch', data: epoch });
                      playChime(isCurr ? 880 : 540);
                    }}
                    opacity={focusRing === 'all' || focusRing === 'middle_epoch' ? 1 : 0.25}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#006064' : '#7B1113')
                          : (isCurr ? '#004D40' : epoch.color)
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#C59B27')}
                      strokeWidth={isSelected ? 3.5 : (isCurr ? 2.5 : 1.5)}
                      className="transition-colors duration-200"
                    />

                    {/* Radial dividing spoke */}
                    <line
                      x1={CX + R_RING2_INNER * Math.cos((epoch.startAngleDeg * Math.PI) / 180)}
                      y1={CY + R_RING2_INNER * Math.sin((epoch.startAngleDeg * Math.PI) / 180)}
                      x2={CX + R_RING2_OUTER * Math.cos((epoch.startAngleDeg * Math.PI) / 180)}
                      y2={CY + R_RING2_OUTER * Math.sin((epoch.startAngleDeg * Math.PI) / 180)}
                      stroke="#C59B27"
                      strokeWidth="1.5"
                    />

                    {/* Content inside Middle Ring */}
                    {epoch.spanDeg >= 14 ? (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM - 22}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={24}
                        >
                          {epoch.icon}
                        </text>

                        <text
                          x={xM}
                          y={yM + 3}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={16}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#2C1810')}
                          className="font-telugu-serif tracking-tight"
                        >
                          {getEpochShortDisplayName(epoch, isEn)}
                        </text>

                        <text
                          x={xM}
                          y={yM + 24}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={12}
                          fontWeight="bold"
                          fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#5D4037')}
                          className="font-mono"
                        >
                          {isEn ? epoch.durationLabelEn : epoch.durationLabelTe}
                        </text>
                      </g>
                    ) : epoch.spanDeg >= 8 ? (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM - 14}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={20}
                        >
                          {epoch.icon}
                        </text>

                        <text
                          x={xM}
                          y={yM + 12}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={13.5}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#2C1810')}
                          className="font-telugu-serif tracking-tight"
                        >
                          {getEpochShortDisplayName(epoch, isEn)}
                        </text>
                      </g>
                    ) : (
                      // Very Short Transition Epoch
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={17}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : '#7B1113'}
                        >
                          {epoch.icon}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 3: INNER CHAKRA — భారతీయ సామ్రాజ్యాలు & ఇతిహాసాలు (r=310 to 210) */}
              {/* Scaled proportionally along the 25,800-year cycle             */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_RING3_OUTER} fill="none" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx={CX} cy={CY} r={R_RING3_INNER} fill="none" stroke="#3E1004" strokeWidth="3" />

              {/* All Dynasties & Great Epics of Bharat (Ramayana, Mahabharata, Imperial Dynasties) */}
              {dynastySegments.map(event => {
                const isSelected = selectedItem.kind === 'empire' && selectedItem.data.id === event.id;
                const isCurr = event.isCurrentTime;
                const path = describeArcSector(CX, CY, R_RING3_INNER, R_RING3_OUTER, event.startDeg, event.endDeg);

                const midRad = (event.midDeg * Math.PI) / 180;
                const rMid = (R_RING3_OUTER + R_RING3_INNER) / 2;
                const xM = CX + rMid * Math.cos(midRad);
                const yM = CY + rMid * Math.sin(midRad);

                let rot = event.midDeg + 90;
                if (event.midDeg > 0 && event.midDeg < 180) rot += 180;

                const hasAmpleSpan = event.spanDeg >= 5.0;
                const hasMidSpan = event.spanDeg >= 2.5 && event.spanDeg < 5.0;

                return (
                  <g
                    key={`ring3-empire-${event.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'empire', data: event });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'all' || focusRing === 'inner_dynasties' ? 1 : 0.25}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#B71C1C' : event.color || '#7B1113')
                          : (isCurr ? '#004D40' : (event.order % 2 === 0 ? '#FFFDF8' : '#FAF2E6'))
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#E8DCC4')}
                      strokeWidth={isSelected ? 3.5 : (isCurr ? 2.5 : 1)}
                      className="transition-colors duration-200"
                    />

                    {/* Radial dividing line */}
                    <line
                      x1={CX + R_RING3_INNER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y1={CY + R_RING3_INNER * Math.sin((event.startDeg * Math.PI) / 180)}
                      x2={CX + R_RING3_OUTER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y2={CY + R_RING3_OUTER * Math.sin((event.startDeg * Math.PI) / 180)}
                      stroke="#C59B27"
                      strokeWidth="1.2"
                    />

                    {/* Content inside Inner Chakra Spoke */}
                    {hasAmpleSpan ? (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM - 24}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={20}
                        >
                          {event.icon}
                        </text>

                        <text
                          x={xM}
                          y={yM}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={13.5}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#3E2723')}
                          className="font-telugu-serif tracking-tight"
                        >
                          {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                        </text>

                        <text
                          x={xM}
                          y={yM + 22}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={11.5}
                          fontWeight="bold"
                          fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#8D6E63')}
                          className="font-mono"
                        >
                          #{event.order}
                        </text>
                      </g>
                    ) : hasMidSpan ? (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM - 14}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={16}
                        >
                          {event.icon}
                        </text>
                        <text
                          x={xM}
                          y={yM + 14}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={10.5}
                          fontWeight="bold"
                          fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#5D4037')}
                          className="font-mono"
                        >
                          #{event.order}
                        </text>
                      </g>
                    ) : (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={13}
                        >
                          {event.icon}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 4: CENTER HUB — ASHOKA DHARMA CHAKRA & SELECTION        */}
              {/* Radiant White & Gold Luminous Hub (No dark center circle)   */}
              {/* ------------------------------------------------------------ */}
              {/* Base inner parchment circle to guarantee bright luminous center */}
              <circle cx={CX} cy={CY} r={R_RING3_INNER} fill="#FFFDF8" stroke="#D4AF37" strokeWidth="2.5" />

              {/* Cycle indicator ring and labels in inner band */}
              <circle cx={CX} cy={CY} r={R_ARROW_BAND} fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />

              {/* Ascending Cycle indicator (Left hemisphere) */}
              <g className="pointer-events-none select-none">
                <text
                  x={CX - 175}
                  y={CY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={11.5}
                  fontWeight="bold"
                  fill="#795548"
                  transform={`rotate(-90, ${CX - 175}, ${CY})`}
                  className="font-telugu-serif tracking-widest uppercase"
                >
                  {isEn ? '↑ Ascending Cycle' : '↑ ఆరోహణ కాలచక్రం'}
                </text>
              </g>

              {/* Descending Cycle indicator (Right hemisphere) */}
              <g className="pointer-events-none select-none">
                <text
                  x={CX + 175}
                  y={CY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={11.5}
                  fontWeight="bold"
                  fill="#795548"
                  transform={`rotate(90, ${CX + 175}, ${CY})`}
                  className="font-telugu-serif tracking-widest uppercase"
                >
                  {isEn ? '↓ Descending Cycle' : '↓ అవరోహణ కాలచక్రం'}
                </text>
              </g>

              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_OUTER}
                fill="#FFFDF8"
                stroke="#D4AF37"
                strokeWidth="3"
              />
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_MID}
                fill="url(#hubGradient)"
                stroke="#C59B27"
                strokeWidth="2"
                className="shadow-sm"
              />

              {/* 24 Spokes of Ashoka Chakra in dignified Navy Blue / Gold */}
              {Array.from({ length: 24 }).map((_, i) => {
                const spRad = (i * 15 * Math.PI) / 180;
                return (
                  <line
                    key={`hub-spoke-${i}`}
                    x1={CX + R_HUB_INNER * Math.cos(spRad)}
                    y1={CY + R_HUB_INNER * Math.sin(spRad)}
                    x2={CX + (R_HUB_MID - 3) * Math.cos(spRad)}
                    y2={CY + (R_HUB_MID - 3) * Math.sin(spRad)}
                    stroke="#1E40AF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                );
              })}

              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_INNER}
                fill="#FFFFFF"
                stroke="#1E40AF"
                strokeWidth="2.5"
              />

              {/* Large Centered Emoji and Name in Hub */}
              <text
                x={CX}
                y={CY - 22}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={36}
                className="pointer-events-none select-none"
              >
                {selectedItem.kind === 'yuga'
                  ? (selectedItem.data.category === 'kataklysmos' ? '🌊' : selectedItem.data.category === 'ekpyrosis' ? '🔥' : '⏳')
                  : selectedItem.data.icon}
              </text>

              <text
                x={CX}
                y={CY + 16}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={15}
                fontWeight="900"
                fill="#1E293B"
                className="pointer-events-none select-none font-telugu-serif"
              >
                {isEn 
                  ? (selectedItem.kind === 'yuga' 
                      ? getYugaEnglishDisplayName(selectedItem.data.category) 
                      : selectedItem.kind === 'epoch'
                        ? selectedItem.data.nameEn.split(' ')[0]
                        : selectedItem.data.titleEn.split(' ')[0])
                  : (selectedItem.kind === 'yuga' 
                      ? getYugaTeluguDisplayName(selectedItem.data.category) 
                      : selectedItem.kind === 'epoch'
                        ? selectedItem.data.nameTe.split(' ')[0]
                        : selectedItem.data.titleTe.split(' ')[0])}
              </text>

              <text
                x={CX}
                y={CY + 36}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11}
                fontWeight="bold"
                fill="#B45309"
                className="pointer-events-none select-none font-mono"
              >
                {selectedItem.kind === 'yuga' 
                  ? selectedItem.data.durationLabelEn 
                  : selectedItem.kind === 'epoch'
                    ? selectedItem.data.durationLabelEn
                    : `#${selectedItem.data.order} Dynasty`}
              </text>

              {/* ------------------------------------------------------------ */}
              {/* TIER 5: SYNCHRONIZED CURRENT TIME (2026 CE) BEACON AT BOTTOM */}
              {/* Passes through all 3 Rings at 6 o'clock                      */}
              {/* ------------------------------------------------------------ */}
              {(() => {
                const bottomRad = (90 * Math.PI) / 180;
                const xPoint = CX + R_RING1_OUTER * Math.cos(bottomRad);
                const yPoint = CY + R_RING1_OUTER * Math.sin(bottomRad);

                return (
                  <g className="pointer-events-none">
                    <circle
                      cx={xPoint}
                      cy={yPoint}
                      r={24}
                      fill="url(#currentTimeAura)"
                      className="animate-ping"
                    />
                    <circle
                      cx={xPoint}
                      cy={yPoint}
                      r={12}
                      fill="#E53935"
                      stroke="#FFE082"
                      strokeWidth="3"
                    />
                    {/* Synchronized Needle Arrow pointing through all 3 rings */}
                    <line
                      x1={xPoint}
                      y1={yPoint + 42}
                      x2={xPoint}
                      y2={yPoint + 14}
                      stroke="#E53935"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${xPoint},${yPoint + 12} ${xPoint - 6},${yPoint + 26} ${xPoint + 6},${yPoint + 26}`}
                      fill="#E53935"
                    />
                  </g>
                );
              })()}

              {/* ------------------------------------------------------------ */}
              {/* YEAR 0 (0 CE / క్రీ.శ. 0) PLACEHOLDER PIN & CHRONOLOGY DIVIDE */}
              {/* Angle: 53.39° (SE Quadrant, between Satavahana & Kushan)     */}
              {/* ------------------------------------------------------------ */}
              {(() => {
                const zeroDeg = 53.39;
                const zeroRad = (zeroDeg * Math.PI) / 180;
                const cosZero = Math.cos(zeroRad);
                const sinZero = Math.sin(zeroRad);

                // Coordinates across the rings
                const xRing2Inner = CX + R_RING2_INNER * cosZero;
                const yRing2Inner = CY + R_RING2_INNER * sinZero;
                const xRing2Outer = CX + R_RING2_OUTER * cosZero;
                const yRing2Outer = CY + R_RING2_OUTER * sinZero;
                const xRing1Inner = CX + R_RING1_INNER * cosZero;
                const yRing1Inner = CY + R_RING1_INNER * sinZero;
                const xOuter = CX + R_RING1_OUTER * cosZero;
                const yOuter = CY + R_RING1_OUTER * sinZero;

                // Pin Tip and Head Positions
                const pinRotation = zeroDeg + 90; // Tip points inward towards center
                const labelRadius = R_RING1_OUTER + 68;
                const xLabel = CX + labelRadius * cosZero;
                const yLabel = CY + labelRadius * sinZero;

                // Comfortable reading angle along wheel rim
                const labelTextRot = zeroDeg - 90;

                return (
                  <g
                    id="year-zero-pin-group"
                    className="cursor-pointer group"
                    onClick={handleJumpToYearZero}
                  >
                    {/* Radial Dividers Across Rings indicating Year 0 BCE/CE Boundary */}
                    <line
                      x1={xRing1Inner}
                      y1={yRing1Inner}
                      x2={xOuter}
                      y2={yOuter}
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                      opacity="0.9"
                    />
                    <line
                      x1={xRing2Inner}
                      y1={yRing2Inner}
                      x2={xRing2Outer}
                      y2={yRing2Outer}
                      stroke="#DC2626"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                      opacity="0.75"
                    />

                    {/* Ring Contact Indicator Dot with Pulse */}
                    <circle
                      cx={xOuter}
                      cy={yOuter}
                      r={14}
                      fill="url(#yearZeroAura)"
                      className="animate-ping"
                    />
                    <circle
                      cx={xOuter}
                      cy={yOuter}
                      r={6}
                      fill="#DC2626"
                      stroke="#FFE082"
                      strokeWidth="2"
                    />

                    {/* The Classic Teardrop Placeholder Map Pin */}
                    <g transform={`translate(${xOuter}, ${yOuter}) rotate(${pinRotation})`}>
                      {/* Map Pin Body (Tip at (0, 0), Head at (0, -36)) */}
                      <path
                        d="M 0 0 C -12 -14, -18 -24, -18 -36 A 18 18 0 1 1 18 -36 C 18 -24, 12 -14, 0 0 Z"
                        fill="url(#pinGradientRed)"
                        stroke="#FFF8E1"
                        strokeWidth="2.5"
                        filter="url(#pinShadow)"
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      {/* Inner Circular Eye of Map Pin */}
                      <circle cx="0" cy="-36" r="7.5" fill="#FFFFFF" />
                      <circle cx="0" cy="-36" r="3.5" fill="#DC2626" />
                    </g>

                    {/* Prominent Floating Pill Badge for 'క్రీ.శ. 0' */}
                    <g transform={`rotate(${labelTextRot}, ${xLabel}, ${yLabel})`} className="select-none">
                      {/* Badge Background Pill */}
                      <rect
                        x={xLabel - 56}
                        y={yLabel - 18}
                        width={112}
                        height={36}
                        rx={18}
                        fill="#7B1113"
                        stroke="#FFE082"
                        strokeWidth="2.5"
                        className="drop-shadow-xl transition-all duration-200 group-hover:fill-[#991B1B]"
                      />
                      {/* Main Year 0 Label */}
                      <text
                        x={xLabel}
                        y={yLabel - 2}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={16}
                        fontWeight="900"
                        fill="#FFE082"
                        className="font-telugu-serif tracking-wide drop-shadow-sm"
                      >
                        {isEn ? '0 CE' : 'క్రీ.శ. 0'}
                      </text>

                      {/* Sub-label under badge: (BCE / CE Divide) */}
                      <text
                        x={xLabel}
                        y={yLabel + 27}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={11.5}
                        fontWeight="900"
                        fill="#DC2626"
                        className="font-mono tracking-tight"
                      >
                        {isEn ? '0 CE (క్రీ.శ. 0)' : '0 CE • యుగ విభజన'}
                      </text>
                    </g>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Quick instructions below wheel */}
          <div className="w-full max-w-[740px] mt-4 flex items-center justify-between text-xs text-[#5D4037] px-2 font-medium">
            <span className="flex items-center gap-1.5 font-bold text-sm text-[#7B1113]">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              {isEn 
                ? 'Outer: 25,800y Yuga Cycle • Middle: Bharat Chronology (Ramayana & Mahabharata) • Inner: Dynasties Scaled' 
                : '1. బయటి: 25,800 ఏళ్ల యుగచక్రం • 2. మధ్య: భారత కాలక్రమం (రామాయణ, మహాభారత యుగాలు) • 3. లోపలి: మహా సామ్రాజ్యాలు'}
            </span>
            <button
              onClick={() => setRotationAngle(0)}
              className="hover:text-[#7B1113] hover:underline cursor-pointer font-bold text-xs"
            >
              {isEn ? 'Reset Position' : 'యథాస్థితికి తీసుకురా'}
            </button>
          </div>

          {/* Spoke / Dynasty Ribbon Carousel */}
          <div className="w-full max-w-[740px] mt-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-[#D4AF37]/50 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-2 px-1">
              <span className="text-xs font-black text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                {isEn ? 'All Eras & Dynasties of Bharat (Click to Inspect):' : 'భారతీయ యుగాలు & సామ్రాజ్యాల క్రమ దర్శిని (క్లిక్ చేయండి):'}
              </span>
              <span className="text-[11px] font-mono font-bold text-[#8D6E63]">
                {INDIAN_HISTORY_CHAKRA_EVENTS.length} {isEn ? 'Spokes' : 'ఆకులు'}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-amber-300">
              {INDIAN_HISTORY_CHAKRA_EVENTS.map(event => {
                const isSelected = selectedItem.kind === 'empire' && selectedItem.data.id === event.id;
                const isCurr = event.isCurrentTime;

                return (
                  <button
                    key={`ribbon-spoke-${event.id}`}
                    onClick={() => {
                      setSelectedItem({ kind: 'empire', data: event });
                      playChime(isCurr ? 880 : 528);
                    }}
                    className={`shrink-0 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                      isSelected
                        ? (isCurr
                            ? 'bg-red-700 text-white ring-2 ring-red-400 font-black shadow-md'
                            : 'bg-amber-400 text-stone-950 ring-2 ring-amber-200 font-black shadow-md')
                        : (isCurr
                            ? 'bg-red-100 text-red-900 border border-red-300 hover:bg-red-200'
                            : 'bg-stone-100 text-stone-800 border border-stone-200 hover:bg-stone-200')
                    }`}
                    title={isEn ? `${event.order}. ${event.titleEn} (${event.periodEn})` : `${event.order}. ${event.titleTe} (${event.periodTe})`}
                  >
                    <span className="font-mono text-[10px] opacity-75">#{event.order}</span>
                    <span>{event.icon}</span>
                    <span className="font-telugu-serif whitespace-nowrap">
                      {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                    </span>
                    {isCurr && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: RICH DOSSIER CARD (LARGE CRISP FONTS)         */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4">
          
          <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-300">
            
            {/* Top Banner */}
            <div 
              className="p-5 sm:p-6 text-white relative overflow-hidden"
              style={{
                background: selectedItem.kind === 'yuga'
                  ? (selectedItem.data.category === 'kataklysmos'
                      ? 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #1565C0 100%)'
                      : selectedItem.data.category === 'ekpyrosis'
                        ? 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #880E4F 100%)'
                        : selectedItem.data.category === 'satya'
                          ? 'linear-gradient(135deg, #F57F17 0%, #FBC02D 50%, #E65100 100%)'
                          : selectedItem.data.category === 'treta'
                            ? 'linear-gradient(135deg, #E65100 0%, #FB8C00 50%, #BF360C 100%)'
                            : selectedItem.data.category === 'dwapara'
                              ? 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #33691E 100%)'
                              : 'linear-gradient(135deg, #311B92 0%, #4A148C 50%, #1A237E 100%)')
                  : selectedItem.kind === 'epoch'
                    ? (selectedItem.data.isCurrentTime
                        ? 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #006064 100%)'
                        : `linear-gradient(135deg, #3E1004 0%, ${selectedItem.data.accentColor} 60%, #1A0500 100%)`)
                    : (selectedItem.data.isCurrentTime
                        ? 'linear-gradient(135deg, #004D40 0%, #00838F 50%, #006064 100%)'
                        : `linear-gradient(135deg, #3E1004 0%, ${selectedItem.data.color} 60%, #1A0500 100%)`)
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-[#FFE082] text-xs font-mono font-bold">
                      {selectedItem.kind === 'yuga' 
                        ? 'TIER 1: OUTER YUGA RING' 
                        : selectedItem.kind === 'epoch'
                          ? `TIER 2: MIDDLE EPOCH #${selectedItem.data.order}`
                          : `TIER 3: INNER DYNASTY #${selectedItem.data.order}`}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/40 text-white text-xs font-bold border border-white/20">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.cycleNameEn : selectedItem.data.cycleNameTe)
                        : selectedItem.kind === 'epoch'
                          ? (isEn ? selectedItem.data.yugaEquivalentEn : selectedItem.data.yugaEquivalentTe)
                          : (isEn ? selectedItem.data.categoryEn : selectedItem.data.categoryTe)}
                    </span>
                  </div>

                  {((selectedItem.kind === 'yuga' && selectedItem.data.isCurrentTime) ||
                    (selectedItem.kind === 'epoch' && selectedItem.data.isCurrentTime) ||
                    (selectedItem.kind === 'empire' && selectedItem.data.isCurrentTime)) && (
                    <span className="px-3.5 py-1 rounded-full bg-cyan-400 text-cyan-950 text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-cyan-950" />
                      {isEn ? 'LIVE PRESENT TIME (2026 CE)' : 'ప్రస్తుత సమయ సూచిక (2026)'}
                    </span>
                  )}
                </div>

                {/* Title & Icon with Increased Font */}
                <div className="flex items-start gap-3.5 mt-4">
                  <span className="text-4xl p-2.5 rounded-2xl bg-black/30 border border-white/20 shadow-md">
                    {selectedItem.kind === 'yuga'
                      ? (selectedItem.data.category === 'kataklysmos' ? '🌊' : selectedItem.data.category === 'ekpyrosis' ? '🔥' : '⏳')
                      : selectedItem.data.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-telugu-serif text-[#FFE082] leading-tight">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.nameEn : selectedItem.data.nameTe)
                        : selectedItem.kind === 'epoch'
                          ? (isEn ? selectedItem.data.nameEn : selectedItem.data.nameTe)
                          : (isEn ? selectedItem.data.titleEn : selectedItem.data.titleTe)}
                    </h2>
                    <div className="text-sm sm:text-base font-bold text-white/95 mt-1 font-mono">
                      {selectedItem.kind === 'yuga'
                        ? (isEn ? selectedItem.data.datesEn : selectedItem.data.datesTe)
                        : selectedItem.kind === 'epoch'
                          ? (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)
                          : (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)}
                    </div>
                  </div>
                </div>

                {/* Duration / Years Badge */}
                <div className="mt-4 inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs sm:text-sm font-mono font-bold text-amber-300">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>
                    {selectedItem.kind === 'yuga'
                      ? `${selectedItem.data.durationYears.toLocaleString()} ${isEn ? 'Years' : 'సంవత్సరాలు'}`
                      : selectedItem.kind === 'epoch'
                        ? (isEn ? selectedItem.data.durationLabelEn : selectedItem.data.durationLabelTe)
                        : (isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe)}
                  </span>
                </div>
              </div>
            </div>

            {/* Special Live Real-Time Box if Current Time is selected */}
            {((selectedItem.kind === 'yuga' && selectedItem.data.isCurrentTime) ||
              (selectedItem.kind === 'epoch' && selectedItem.data.isCurrentTime) ||
              (selectedItem.kind === 'empire' && selectedItem.data.isCurrentTime)) && (
              <div className="mx-4 sm:mx-6 mt-4 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-rose-950 to-red-900 text-white border-2 border-red-400 shadow-md">
                <div className="flex items-center justify-between gap-3 flex-wrap border-b border-red-400/30 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-xs uppercase font-black text-amber-300 tracking-wider">
                        {isEn ? 'Universal Temporal Coordinate' : 'ప్రస్తుత కాలమాన కేంద్రం'}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {isEn ? 'You are viewing NOW: 2026 CE / Kaliyuga 5127' : 'నేడు మనం జీవిస్తున్న క్షణం: 2026 CE / కలియుగం 5127'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-xl font-black text-amber-300">{formattedTime}</div>
                    <div className="text-xs text-amber-200">{formattedDate}</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                  {isEn 
                    ? 'In the 25,800-year cycle, 2025 CE marks the end of the 12,900-year Descending Arc. We are living in 2026 CE at the dawn of the 1,200-year Ekpyrosis transition entering ascending light!'
                    : '25,800 ఏళ్ల చక్రంలో 2025 క్రీ.శ. నాటికి 12,900 ఏళ్ల అవరోహణ చక్రం ముగిసింది. నేడు 2026 క్రీ.శ.లో మనం ఎక్పైరోసిస్ అగ్ని పరివర్తన కాలంలోకి ప్రవేశించి ఆరోహణ యుగపు దివ్య చైతన్యం వైపు అడుగులేస్తున్నాం!'}
                </p>
              </div>
            )}

            {/* Body Content with Increased Font */}
            <div className="p-5 sm:p-6 space-y-4 text-stone-800">
              
              {/* CASE 1: YUGA SEGMENT (TIER 1) */}
              {selectedItem.kind === 'yuga' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Yuga Dynamics & Characteristics' : 'యుగ లక్షణాలు & కాల వికాసం'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3.5 rounded-xl border border-[#E8DCC4]">
                      {isEn ? selectedItem.data.descriptionEn : selectedItem.data.descriptionTe}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#1565C0] tracking-wide flex items-center gap-2">
                      <Orbit className="w-4 h-4 text-[#1E88E5]" />
                      <span>{isEn ? 'Cosmic & Spiritual Significance' : 'బ్రహ్మాండ తాత్విక ప్రాధాన్యత'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#1A237E] leading-relaxed font-medium bg-blue-50/70 p-3.5 rounded-xl border border-blue-200">
                      {isEn ? selectedItem.data.cosmicSignificanceEn : selectedItem.data.cosmicSignificanceTe}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#2E7D32] tracking-wide flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#43A047]" />
                      <span>{isEn ? 'Historical & Archeological Parallels' : 'చారిత్రక & పురావస్తు ఆధారాలు'}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {(isEn ? selectedItem.data.historicalParallelsEn : selectedItem.data.historicalParallelsTe).map((par, i) => (
                        <li key={i} className="flex items-start gap-2.5 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E8DCC4]">
                          <span className="text-[#D84315] font-black text-base mt-0.5">•</span>
                          <span className="leading-snug">{par}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* CASE 2: MIDDLE RING EPOCH (TIER 2) */}
              {selectedItem.kind === 'epoch' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Civilizational Scope & Epoch Evolution' : 'నాగరికతా యుగ వికాసం & చరిత్ర'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3.5 rounded-xl border border-[#E8DCC4]">
                      {isEn ? selectedItem.data.descriptionEn : selectedItem.data.descriptionTe}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#2E7D32] tracking-wide flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#43A047]" />
                      <span>{isEn ? 'Pivotal Milestones & Discoveries' : 'కీలక మైలురాళ్ళు & ఆవిష్కరణలు'}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {(isEn ? selectedItem.data.achievementsEn : selectedItem.data.achievementsTe).map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E8DCC4]">
                          <span className="text-[#D84315] font-black text-base mt-0.5">•</span>
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Dynasties buttons */}
                  {selectedItem.data.dynastiesIncludedIds && selectedItem.data.dynastiesIncludedIds.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#E8DCC4]">
                      <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Crown className="w-4 h-4 text-[#D84315]" />
                          <span>{isEn ? 'Dynasties in this Epoch (Click to view):' : 'ఈ యుగంలోని మహా సామ్రాజ్యాలు:'}</span>
                        </span>
                        <span className="text-xs font-mono font-bold text-[#D84315]">
                          {selectedItem.data.dynastiesIncludedIds.length} {isEn ? 'Dynasties' : 'సామ్రాజ్యాలు'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {selectedItem.data.dynastiesIncludedIds.map(empId => {
                          const empireObj = INDIAN_HISTORY_CHAKRA_EVENTS.find(e => e.id === empId);
                          if (!empireObj) return null;
                          return (
                            <button
                              key={`epoch-dynasty-btn-${empId}`}
                              onClick={() => {
                                setSelectedItem({ kind: 'empire', data: empireObj });
                                playChime(660);
                              }}
                              className="p-2 rounded-xl bg-[#FFF8E1] hover:bg-[#FFE082] text-left border border-[#D4AF37]/50 shadow-2xs transition-all cursor-pointer flex flex-col gap-0.5 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-lg">{empireObj.icon}</span>
                                <span className="text-[10px] font-mono font-bold text-amber-900">#{empireObj.order}</span>
                              </div>
                              <span className="text-xs font-black text-[#7B1113] truncate font-telugu-serif group-hover:text-red-950">
                                {isEn ? empireObj.titleEn.split(' ')[0] : empireObj.titleTe.split(' ')[0]}
                              </span>
                              <span className="text-[10px] text-stone-600 truncate font-mono">
                                {isEn ? empireObj.periodEn.split('–')[0].trim() : empireObj.periodTe.split('–')[0].trim()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>{isEn ? 'Civilizational Significance:' : 'నాగరికతా ప్రాధాన్యత:'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4E342E] font-medium leading-relaxed">
                      {isEn ? selectedItem.data.significanceEn : selectedItem.data.significanceTe}
                    </p>
                  </div>

                  {/* RAMAYANA TIMELINE LINK FOR RAMAYANA EPOCH */}
                  {selectedItem.data.id === 'epoch_ramayana_era' && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF5F0] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#D84315] flex items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-gradient-to-br from-[#D84315] to-[#7B1113] text-white shadow-2xs">
                          <ScrollText className="w-4 h-4 text-[#FFE082]" />
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-black text-[#7B1113]">
                            {isEn ? 'Ramayana Era & Treta Yuga Dynasties' : 'రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు'}
                          </div>
                          <div className="text-[11px] text-[#5D4037] font-medium">
                            {isEn ? '11 Celestial Milestones • 4 Lineages Family Tree • Ramarajya' : '11 ఖగోళ ఘట్టాలు • సంపూర్ణ వంశవృక్షం • రామరాజ్య పాలన'}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsRamayanaTimelineModalOpen(true)}
                        className="px-3.5 py-2 rounded-xl bg-[#D84315] hover:bg-[#BF360C] text-[#FFE082] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs hover:scale-105"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Timeline Window' : 'కాలరేఖ విండో'}</span>
                      </button>
                    </div>
                  )}

                  {/* KURU TIMELINE LINK FOR MAHABHARATA EPOCH */}
                  {selectedItem.data.id === 'epoch_mahabharata_sandhi' && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF5F5] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#B71C1C] flex items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-gradient-to-br from-[#B71C1C] to-[#7B1113] text-white shadow-2xs">
                          <ScrollText className="w-4 h-4 text-[#FFE082]" />
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-black text-[#7B1113]">
                            {isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe}
                          </div>
                          <div className="text-[11px] text-[#5D4037] font-medium">
                            {isEn ? '227 Years Astronomical Chronology (3329–3102 BCE)' : 'క్రీ.పూ. 3329 నుండి 3102 వరకు సమగ్ర ఖగోళ కాలగణన'}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsKuruTimelineModalOpen(true)}
                        className="px-3.5 py-2 rounded-xl bg-[#B71C1C] hover:bg-[#880E4F] text-[#FFE082] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs hover:scale-105"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Open Timeline Window' : 'కాలరేఖ విండో'}</span>
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* CASE 3: INDIVIDUAL HISTORICAL EMPIRE (TIER 3: 24 DYNASTIES) */}
              {selectedItem.kind === 'empire' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Crown className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Prominent Rulers & Personalities' : 'ప్రముఖ చక్రవర్తులు & పాలకులు'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(isEn ? selectedItem.data.rulersEn : selectedItem.data.rulersTe).map((r, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-[#FFF8E1] text-[#7B1113] text-xs sm:text-sm font-bold border border-[#D4AF37]/50 shadow-2xs">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C99700]" />
                      <span>{isEn ? 'Capitals & Historic Regions' : 'రాజధానులు & చారిత్రక ప్రాంతాలు'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(isEn ? selectedItem.data.capitalsEn : selectedItem.data.capitalsTe).map((c, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] text-[#5D4037] text-xs sm:text-sm font-semibold border border-[#E8DCC4]">
                          🏛️ {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Pivotal Milestones & Events' : 'కీలక మైలురాళ్ళు & పరిణామాలు'}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {(isEn ? selectedItem.data.keyEventsEn : selectedItem.data.keyEventsTe).map((ev, i) => (
                        <li key={i} className="flex items-start gap-2.5 bg-[#FFFDF8] p-2.5 rounded-xl border border-[#E8DCC4]">
                          <span className="text-[#D84315] font-black text-base mt-0.5">•</span>
                          <span className="leading-snug">{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>{isEn ? 'What Changed in Indian History?' : 'చరిత్రలో వచ్చిన కీలక మార్పు:'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4E342E] font-medium leading-relaxed">
                      {isEn ? selectedItem.data.whatChangedEn : selectedItem.data.whatChangedTe}
                    </p>
                  </div>

                  {/* SPECIAL DOSSIER: DRAVIDIANS & SOUTH INDIAN POPULATION DEEP-DIVE */}
                  {selectedItem.data.southIndianConnection && (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFFBEB] via-[#FAF7F0] to-[#FFF8E1] border-2 border-[#D4AF37] shadow-md space-y-4">
                      {/* Section Header */}
                      <div className="flex items-start justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
                        <div className="flex items-start gap-2.5">
                          <span className="p-2 rounded-xl bg-gradient-to-br from-[#B7791F] to-[#7B1113] text-white shadow-xs">
                            <Dna className="w-5 h-5" />
                          </span>
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10px] font-black uppercase tracking-wider inline-block">
                              {isEn ? 'Dravidian & South Indian Heritage' : 'ద్రావిడ & దక్షిణ భారత ప్రజల చరిత్ర'}
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif mt-1">
                              {isEn ? selectedItem.data.southIndianConnection.titleEn : selectedItem.data.southIndianConnection.titleTe}
                            </h3>
                            <p className="text-xs text-[#8D6E63] font-medium mt-0.5">
                              {isEn ? selectedItem.data.southIndianConnection.subtitleEn : selectedItem.data.southIndianConnection.subtitleTe}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsDravidianModalOpen(true)}
                          className="px-2.5 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#5A0A0E] text-[#FFE082] text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shrink-0 shadow-xs"
                          title={isEn ? 'Open Detailed Window' : 'విస్తృత విండోలో చూడండి'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isEn ? 'Full Window' : 'పూర్తి విండో'}</span>
                        </button>
                      </div>

                      {/* Intro text */}
                      <div className="p-3 bg-white/90 rounded-xl border border-[#E8DCC4] text-xs sm:text-sm text-[#3E2723] leading-relaxed font-medium">
                        {isEn ? selectedItem.data.southIndianConnection.introEn : selectedItem.data.southIndianConnection.introTe}
                      </div>

                      {/* Key Aspects */}
                      <div className="space-y-3">
                        {/* 1. Waves of Migration */}
                        <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/50 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B7791F]">
                            <span className="w-2 h-2 rounded-full bg-[#B7791F]" />
                            <span>{isEn ? '1. Two Great Waves of Human Migration (50,000 BCE – IVC)' : '1. రెండు మహోన్నత మానవ వలస ప్రవాహాలు & AASI మూలాలు'}</span>
                          </div>
                          <div className="space-y-1.5 text-xs text-[#5D4037] leading-relaxed">
                            <p className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DCC4]">
                              <strong className="text-[#7B1113]">{isEn ? 'Wave 1 (AASI ~50,000 BCE): ' : 'తొలి వలస (AASI ~50,000 ఏళ్ళు): '}</strong>
                              {isEn ? selectedItem.data.southIndianConnection.firstMigrationEn : selectedItem.data.southIndianConnection.firstMigrationTe}
                            </p>
                            <p className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DCC4]">
                              <strong className="text-[#7B1113]">{isEn ? 'Wave 2 (Iran Farmers + Indigenous Mix): ' : 'రెండవ వలస (ఇరాన్ రైతులు + తొలి భారతీయుల కలయిక): '}</strong>
                              {isEn ? selectedItem.data.southIndianConnection.secondMigrationEn : selectedItem.data.southIndianConnection.secondMigrationTe}
                            </p>
                          </div>
                        </div>

                        {/* 2. Urban Planning, Language & Brahui Connection */}
                        <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/50 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B7791F]">
                            <span className="w-2 h-2 rounded-full bg-[#B7791F]" />
                            <span>{isEn ? '2. Harappan Script & Brahui Language Connection' : '2. హరప్పా నగరాలు, ద్రావిడ భాషా చర్చ & బ్రాహుయీ సంబంధం'}</span>
                          </div>
                          <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DCC4]">
                            {isEn ? selectedItem.data.southIndianConnection.urbanCivilizationEn : selectedItem.data.southIndianConnection.urbanCivilizationTe}
                          </p>
                          <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DCC4]">
                            <strong className="text-[#7B1113]">{isEn ? 'Brahui in Pakistan: ' : 'బలూచిస్తాన్‌లో బ్రాహుయీ భాష: '}</strong>
                            {isEn ? selectedItem.data.southIndianConnection.languageDebateEn : selectedItem.data.southIndianConnection.languageDebateTe}
                          </p>
                          <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FFF8E1] p-2 rounded-lg border border-[#D4AF37]/40">
                            <strong className="text-[#7B1113]">{isEn ? 'Southward Integration: ' : 'దక్షిణాదికి విస్తరణ: '}</strong>
                            {isEn ? selectedItem.data.southIndianConnection.southwardExpansionEn : selectedItem.data.southIndianConnection.southwardExpansionTe}
                          </p>
                        </div>

                        {/* 3. Cultural Evolution in South India */}
                        <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/50 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B7791F]">
                            <span className="w-2 h-2 rounded-full bg-[#B7791F]" />
                            <span>{isEn ? '3. Cultural Evolution in South India' : '3. దక్షిణ భారతదేశంలో ద్రావిడ సంస్కృతి వికాసం'}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2 text-xs text-[#5D4037]">
                            <div className="p-2.5 bg-[#FAF7F0] rounded-lg border border-[#E8DCC4]">
                              <span className="font-bold text-[#7B1113]">{isEn ? 'Ash Mounds (బూడిద దిబ్బలు): ' : 'బూడిద దిబ్బలు (Ash Mounds): '}</span>
                              {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.ashMoundsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.ashMoundsTe}
                            </div>
                            <div className="p-2.5 bg-[#FAF7F0] rounded-lg border border-[#E8DCC4]">
                              <span className="font-bold text-[#7B1113]">{isEn ? 'Megalithic Burials (మెగాలిథిక్ సమాధులు): ' : 'మెగాలిథిక్ సమాధులు (Megaliths): '}</span>
                              {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.megalithsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.megalithsTe}
                            </div>
                            <div className="p-2.5 bg-[#FAF7F0] rounded-lg border border-[#E8DCC4]">
                              <span className="font-bold text-[#7B1113]">{isEn ? 'Keeladi & Adichanallur (కీలడి & ఆదిచనల్లూరు): ' : 'కీలడి & ఆదిచనల్లూరు పురావస్తు తవ్వకాలు: '}</span>
                              {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.excavationsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.excavationsTe}
                            </div>
                          </div>
                        </div>

                        {/* 4. Spiritual Beliefs & Deity Worship */}
                        <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/50 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B7791F]">
                            <span className="w-2 h-2 rounded-full bg-[#B7791F]" />
                            <span>{isEn ? '4. Spiritual Beliefs & Indigenous Deities' : '4. ద్రావిడుల ఆధ్యాత్మిక విశ్వాసాలు, దేవతా ఆరాధన'}</span>
                          </div>
                          <p className="text-xs text-[#5D4037] italic">
                            {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.introEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.introTe}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                            {(isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.deitiesEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.deitiesTe).map((d: any, i: number) => (
                              <div key={i} className="p-2 bg-[#FFF8E1] rounded-lg border border-[#D4AF37]/40">
                                <span className="font-bold text-[#7B1113] block">{isEn ? d.nameEn : d.nameTe}</span>
                                <span className="text-[11px] text-[#5D4037]">{isEn ? d.descEn : d.descTe}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-2 rounded-lg border border-[#E8DCC4]">
                            {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.syncretismEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.syncretismTe}
                          </p>
                          <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-2 rounded-lg border border-[#E8DCC4]">
                            <strong className="text-[#7B1113]">{isEn ? 'Temple Architecture & Chola Bronzes: ' : 'ఆలయ వాస్తుశిల్పం & చోళ కాంస్య కళలు: '}</strong>
                            {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.architectureEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.architectureTe}
                          </p>
                        </div>

                        {/* 5. Genetic Roots */}
                        <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/50 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#B7791F]">
                            <Dna className="w-3.5 h-3.5 text-[#D84315]" />
                            <span>{isEn ? '5. Archaeogenetic Ancestry Roots' : '5. ద్రావిడుల జన్యు మూలాలు'}</span>
                          </div>
                          <p className="text-xs text-[#5D4037]">
                            {isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.introEn : selectedItem.data.southIndianConnection.geneticOriginsTe.introTe}
                          </p>
                          <ul className="space-y-1 text-xs">
                            {(isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.componentsEn : selectedItem.data.southIndianConnection.geneticOriginsTe.componentsTe).map((comp: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-1.5 p-1.5 bg-[#FAF7F0] rounded-md border border-[#E8DCC4]">
                                <span className="text-[#D84315] font-bold">{idx + 1}.</span>
                                <span className="font-semibold text-[#7B1113]">{comp}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-[#5D4037] italic">
                            {isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.summaryEn : selectedItem.data.southIndianConnection.geneticOriginsTe.summaryTe}
                          </p>
                        </div>

                        {/* 6. Conclusion */}
                        <div className="p-3.5 bg-gradient-to-r from-[#FFF8E1] to-[#FFE082]/40 rounded-xl border border-[#D4AF37] text-xs text-[#5D4037] leading-relaxed">
                          <strong className="text-[#7B1113] block mb-1">
                            {isEn ? 'Concluding Perspective: ' : 'ముగింపు భావన: '}
                          </strong>
                          {isEn ? selectedItem.data.southIndianConnection.conclusionEn : selectedItem.data.southIndianConnection.conclusionTe}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SPECIAL DOSSIER: RAMAYANA & TRETA YUGA EMPERORS LINK FOR RAMAYANA SPOKE */}
                  {selectedItem.data.id === 'ramayana_ikshvaku_empire' && (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F0] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#D84315] shadow-md space-y-4">
                      <div className="flex items-start justify-between gap-3 border-b border-[#D84315]/30 pb-3">
                        <div className="flex items-start gap-2.5">
                          <span className="p-2.5 rounded-2xl bg-gradient-to-br from-[#D84315] to-[#7B1113] text-white shadow-xs text-xl">
                            🏹
                          </span>
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#D84315] text-[#FFE082] text-[10px] font-black uppercase tracking-wider inline-block">
                                {isEn ? 'Treta Yuga • Astronomical Chronology' : 'త్రేతాయుగం • ఖగోళ కాలగణన'}
                              </span>
                              <span className="text-xs font-mono font-bold text-[#7B1113]">
                                !! तन्नो रामः प्रचोदयात् !!
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif mt-1">
                              {isEn ? 'Ramayana Era & Treta Yuga Dynasties' : 'రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు'}
                            </h3>
                            <p className="text-xs text-[#8D6E63] font-medium mt-0.5">
                              {isEn 
                                ? 'Lord Sri Ramachandra • Sita Devi • Lava-Kusha • Taxila Founded by Taksha • Suryavansha Line'
                                : 'శ్రీరామచంద్రుడు • సీతాదేవి • లవ-కుశులు • తక్షశిల నిర్మాణం • వానర సైన్యం • ఇక్ష్వాకు రఘువంశ పరంపర'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsRamayanaTimelineModalOpen(true)}
                          className="px-3 py-1.5 rounded-xl bg-[#D84315] hover:bg-[#BF360C] text-[#FFE082] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs hover:scale-105"
                          title={isEn ? 'Open Ramayana Timeline Window' : 'రామాయణ కాలరేఖ విండో తెరవండి'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isEn ? 'Full Window' : 'పూర్తి విండో'}</span>
                        </button>
                      </div>

                      {/* 4 Astronomical Milestones */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 bg-white/95 rounded-xl border border-orange-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-orange-900 block font-mono">12,240 BCE</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">శ్రీరామ జన్మదినం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-amber-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-amber-900 block font-mono">12,223 BCE</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">సీతారామ కల్యాణం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-red-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-red-900 block font-mono">12,208 BCE</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">రామసేతు & లంకావిజయం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-emerald-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-emerald-900 block font-mono">12,208 BCE</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">రామరాజ్య స్థాపన</span>
                        </div>
                      </div>

                      {/* Key features pills */}
                      <div className="flex items-center gap-1.5 flex-wrap text-[11px] font-bold text-[#7B1113]">
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 shadow-2xs">
                          ✨ {isEn ? '11 Celestial Milestones' : '11 ఖగోళ ఘట్టాలు'}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 shadow-2xs">
                          🌳 {isEn ? '4 Lineages Family Tree' : '4 వంశాల వంశవృక్షం'}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 shadow-2xs">
                          📿 {isEn ? 'Rama Shloka Secret (7 Callers)' : 'శ్లోక రహస్యం (7 సంబోధనలు)'}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 shadow-2xs">
                          👑 {isEn ? '12 Solar Monarchs' : '12 సూర్యవంశ చక్రవర్తులు'}
                        </span>
                      </div>

                      <p className="text-xs text-[#5D4037] leading-relaxed bg-white/80 p-3 rounded-xl border border-[#E8DCC4]">
                        {isEn
                          ? 'Vedic astronomical planetary calculations from Valmiki Ramayana corroborated with marine geological carbon dating of Ram Setu and archaeological findings in the Sarayu-Ayodhya basin.'
                          : 'వాల్మీకి రామాయణంలోని గ్రహ సంయోగాలు, నక్షత్ర తిథుల ఖగోళ గణనలు, రామసేతు సముద్ర గర్భ జియోలాజికల్ పరిశోధనలు మరియు సరయూ-అయోధ్య పురావస్తు ఆధారాలతో స్థిరపడిన సమగ్ర చారిత్రక కాలరేఖ.'}
                      </p>

                      {/* Big Action Button to open the window */}
                      <button
                        onClick={() => setIsRamayanaTimelineModalOpen(true)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D84315] via-[#E64A19] to-[#7B1113] hover:from-[#BF360C] hover:to-[#D84315] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:shadow-lg group"
                      >
                        <ScrollText className="w-4 h-4 text-[#FFE082] group-hover:scale-110 transition-transform" />
                        <span>
                          {isEn 
                            ? '🏹 Open Ramayana Era & Treta Dynasties Timeline Window' 
                            : '🏹 రామాయణ యుగము & త్రేతాయుగ చక్రవర్తుల సమగ్ర కాలరేఖ విండోను తెరవండి'}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#FFE082] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* SPECIAL DOSSIER: KURU TIMELINE LINK FOR MAHABHARATA SPOKE */}
                  {selectedItem.data.id === 'mahabharata_kuru_empire' && (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F5] via-[#FFF8E1] to-[#FFFDF7] border-2 border-[#B71C1C] shadow-md space-y-4">
                      <div className="flex items-start justify-between gap-3 border-b border-[#B71C1C]/30 pb-3">
                        <div className="flex items-start gap-2.5">
                          <span className="p-2.5 rounded-2xl bg-gradient-to-br from-[#B71C1C] to-[#7B1113] text-white shadow-xs text-xl">
                            🏹
                          </span>
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#B71C1C] text-[#FFE082] text-[10px] font-black uppercase tracking-wider inline-block">
                              {isEn ? 'Astronomical Chronology' : 'కురువంశ ఖగోళ కాలగణన'}
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif mt-1">
                              {isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe}
                            </h3>
                            <p className="text-xs text-[#8D6E63] font-medium mt-0.5">
                              {isEn ? KURU_TIMELINE_METADATA.subtitleEn : KURU_TIMELINE_METADATA.subtitleTe}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsKuruTimelineModalOpen(true)}
                          className="px-3 py-1.5 rounded-xl bg-[#B71C1C] hover:bg-[#880E4F] text-[#FFE082] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs hover:scale-105"
                          title={isEn ? 'Open Kuru Timeline Window' : 'కురువంశ కాలరేఖ విండో తెరవండి'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isEn ? 'Full Window' : 'పూర్తి విండో'}</span>
                        </button>
                      </div>

                      {/* Highlights Banner */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 bg-white/95 rounded-xl border border-red-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-red-900 block font-mono">క్రీ.పూ. 3329</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">భీష్ముని జననం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-amber-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-amber-900 block font-mono">క్రీ.పూ. 3228</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">శ్రీకృష్ణ జననం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-red-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-red-900 block font-mono">క్రీ.పూ. 3138</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">కురుక్షేత్ర యుద్ధం</span>
                        </div>
                        <div className="p-2.5 bg-white/95 rounded-xl border border-purple-200 shadow-2xs">
                          <span className="text-[10px] uppercase font-bold text-purple-900 block font-mono">క్రీ.పూ. 3102</span>
                          <span className="font-extrabold text-[#7B1113] text-xs">కలియుగారంభం</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#5D4037] leading-relaxed bg-white/80 p-3 rounded-xl border border-[#E8DCC4]">
                        {isEn
                          ? 'A 227-year historical sequence precisely dated through astronomical planetary configurations (Graha Samyogas), solar and lunar eclipses recorded in Maharshi Vyasa’s Mahabharata.'
                          : 'మహర్షి వేదవ్యాస మహాభారతంలోని గ్రహ సంయోగాలు, సూర్య-చంద్ర గ్రహణాలు మరియు ఖగోళ స్థితిగతుల ఆధారంగా ఖచ్చితంగా నిర్ణయించబడిన 227 సంవత్సరాల సమగ్ర కాల ప్రవాహం.'}
                      </p>

                      {/* Big Action Button to open the window */}
                      <button
                        onClick={() => setIsKuruTimelineModalOpen(true)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#B71C1C] via-[#D32F2F] to-[#7B1113] hover:from-[#880E4F] hover:to-[#B71C1C] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:shadow-lg group"
                      >
                        <ScrollText className="w-4 h-4 text-[#FFE082] group-hover:scale-110 transition-transform" />
                        <span>
                          {isEn 
                            ? '📜 Open Complete Kuru Dynasty Timeline Window (3329 – 3102 BCE)' 
                            : '📜 కురువంశ మహాభారత సమగ్ర కాలరేఖ విండోను తెరవండి (క్రీ.పూ. 3329 – 3102)'}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#FFE082] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* WINDOW FOOTER: REFERENCE LINK */}
              {selectedItem.kind === 'empire' && selectedItem.data.referenceLink && (
                <div className="pt-3.5 border-t-2 border-[#D4AF37]/50">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs shrink-0">
                        <InstagramIcon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-wider text-rose-900">
                          {isEn ? 'Window Footer Reference Link' : 'విండో పాదపీఠ మూల రిఫరెన్స్ (Reference Link)'}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#7B1113] truncate">
                          {isEn ? selectedItem.data.referenceLink.labelEn : selectedItem.data.referenceLink.labelTe}
                        </div>
                        <div className="text-[11px] text-[#8D6E63] font-mono truncate max-w-full mt-0.5">
                          {selectedItem.data.referenceLink.url}
                        </div>
                      </div>
                    </div>
                    <a
                      href={selectedItem.data.referenceLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white text-xs font-black flex items-center gap-1.5 transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
                    >
                      <span>{isEn ? 'Watch on Instagram' : 'ఇన్‌స్టాగ్రామ్‌లో చూడండి'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Master Reference Poster Button */}
              <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="./images/indian_history/yuga_cycle_25800.jpg"
                    alt="Yuga Cycle 25800 Years Master Diagram"
                    className="w-16 h-16 rounded-xl object-cover border border-[#D4AF37] shadow-sm cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setPreviewImage({
                      src: './images/indian_history/yuga_cycle_25800.jpg',
                      title: isEn ? 'Master Reference: Yuga Cycle 25,800 Years (Ascending & Descending)' : 'మూల పటం: 25,800 ఏళ్ల యుగచక్రం (Ascending & Descending)',
                      subtitle: isEn ? 'Comprehensive 25,800-Year Precession of Equinoxes Timeline' : 'సమగ్ర 25,800 ఏళ్ల సంపూర్ణ యుగ పరిభ్రమణ కాలరేఖ'
                    })}
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#7B1113]">
                      {isEn ? 'Master Reference Infographic' : 'మూల యుగచక్ర ఇన్ఫోగ్రాఫిక్'}
                    </div>
                    <button
                      onClick={() => setPreviewImage({
                        src: './images/indian_history/yuga_cycle_25800.jpg',
                        title: isEn ? 'Master Reference: Yuga Cycle 25,800 Years (Ascending & Descending)' : 'మూల పటం: 25,800 ఏళ్ల యుగచక్రం (Ascending & Descending)',
                        subtitle: isEn ? 'Comprehensive 25,800-Year Precession of Equinoxes Timeline' : 'సమగ్ర 25,800 ఏళ్ల సంపూర్ణ యుగ పరిభ్రమణ కాలరేఖ'
                      })}
                      className="text-xs text-[#D84315] hover:underline font-bold flex items-center gap-1 cursor-pointer mt-0.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Zoom Poster HD' : 'విస్తరించి వీక్షించండి (HD)'}</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (selectedItem.kind === 'yuga') {
                      setSelectedItem({ kind: 'epoch', data: BHARAT_CIVILIZATION_EPOCHS[5] });
                    } else if (selectedItem.kind === 'epoch') {
                      setSelectedItem({ kind: 'empire', data: INDIAN_HISTORY_CHAKRA_EVENTS[6] }); // Maurya
                    } else {
                      setSelectedItem({ kind: 'yuga', data: YUGA_CYCLE_25800_SEGMENTS[0] }); // Kataklysmos
                    }
                    playChime(640);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs sm:text-sm font-black transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {selectedItem.kind === 'yuga' 
                      ? (isEn ? 'View Middle Ring' : 'మధ్య వలయం') 
                      : selectedItem.kind === 'epoch'
                        ? (isEn ? 'View 24 Dynasties' : '24 సామ్రాజ్యాలు')
                        : (isEn ? 'View Yuga Ring' : 'యుగాల వలయం')}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. LIGHTBOX MODAL FOR SOURCE POSTER / TIMELINE CHART         */}
      {/* ============================================================ */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[94vh] bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl flex flex-col p-2" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-2 text-white border-b border-stone-700 mb-2">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#FFE082] flex items-center gap-1.5">
                  <Maximize2 className="w-4 h-4 text-[#FFD54F]" />
                  {previewImage.title}
                </span>
                {previewImage.subtitle && (
                  <span className="text-xs text-stone-300 mt-0.5">{previewImage.subtitle}</span>
                )}
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-red-700 transition-colors font-bold cursor-pointer shrink-0 ml-2"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center p-1 bg-black/40 rounded-xl">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. POP-UP WINDOW MODAL: DRAVIDIANS & SOUTH INDIAN HERITAGE   */}
      {/* ============================================================ */}
      {isDravidianModalOpen && selectedItem.kind === 'empire' && selectedItem.data.southIndianConnection && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto"
          onClick={() => setIsDravidianModalOpen(false)}
        >
          <div
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl my-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#5B0B14] via-[#7B1113] to-[#4A0012] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-20">
              <div className="flex items-start gap-3">
                <span className="p-2.5 rounded-xl bg-white/10 text-2xl border border-white/20">
                  🧬
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-black uppercase tracking-wider">
                      {isEn ? 'Indus Valley & South India Connection' : 'సింధు-సరస్వతీ & దక్షిణ భారత అనుసంధానం'}
                    </span>
                    <span className="text-xs text-[#FFE082] font-mono font-bold">
                      {isEn ? selectedItem.data.periodEn : selectedItem.data.periodTe}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black font-telugu-serif text-[#FFE082] mt-1">
                    {isEn ? selectedItem.data.southIndianConnection.titleEn : selectedItem.data.southIndianConnection.titleTe}
                  </h2>
                  <p className="text-xs text-white/90 font-medium">
                    {isEn ? selectedItem.data.southIndianConnection.subtitleEn : selectedItem.data.southIndianConnection.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDravidianModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close' : 'మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFBEB] via-[#FAF7F0] to-[#FFFDF7]">
              {/* Introduction */}
              <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/50 shadow-xs space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#7B1113] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Who are the Dravidians? Foundational Overview' : 'ద్రావిడులు ఎవరు? – ప్రాథమిక పరిచయం'}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#3E2723] leading-relaxed font-medium">
                  {isEn ? selectedItem.data.southIndianConnection.introEn : selectedItem.data.southIndianConnection.introTe}
                </p>
              </div>

              {/* 1. Waves of Migration */}
              <div className="bg-white p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#B7791F] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B7791F]" />
                  <span>{isEn ? '1. Two Great Waves of Human Migration (50,000 BCE – Indus Valley)' : '1. రెండు మహోన్నత మానవ వలస ప్రవాహాలు & AASI మూలాలు'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] space-y-1">
                    <strong className="text-[#7B1113] block font-bold">
                      {isEn ? 'Wave 1: Out of Africa & AASI (~50,000 BCE)' : 'తొలి వలస: ఆఫ్రికా నుండి AASI రాక (~50,000 ఏళ్ళు)'}
                    </strong>
                    <p className="text-[#5D4037] leading-relaxed">
                      {isEn ? selectedItem.data.southIndianConnection.firstMigrationEn : selectedItem.data.southIndianConnection.firstMigrationTe}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] space-y-1">
                    <strong className="text-[#7B1113] block font-bold">
                      {isEn ? 'Wave 2: Iranian Hunter-Farmers & Indus Genesis' : 'రెండవ వలస: ఇరాన్ వేటగాళ్ళు/రైతులు & సింధు నాగరికత ఆవిర్భావం'}
                    </strong>
                    <p className="text-[#5D4037] leading-relaxed">
                      {isEn ? selectedItem.data.southIndianConnection.secondMigrationEn : selectedItem.data.southIndianConnection.secondMigrationTe}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Urban Planning, Language Debate & Brahui */}
              <div className="bg-white p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#B7791F] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B7791F]" />
                  <span>{isEn ? '2. Indus Planning, Language Debate & Brahui Connection' : '2. సింధు నగరాల ప్రణాళిక, ద్రావిడ భాషా చర్చ & బ్రాహుయీ సంబంధం'}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4]">
                  {isEn ? selectedItem.data.southIndianConnection.urbanCivilizationEn : selectedItem.data.southIndianConnection.urbanCivilizationTe}
                </p>
                <div className="p-3 bg-[#FFF8E1] rounded-xl border border-[#D4AF37]/50 space-y-1 text-xs">
                  <strong className="text-[#7B1113] block font-bold">
                    {isEn ? 'Did Harappans Speak Dravidian? The Brahui Evidence' : 'హరప్పా ప్రజలు ద్రావిడ భాష మాట్లాడేవారా? పాకిస్తాన్‌లో బ్రాహుయీ భాష'}
                  </strong>
                  <p className="text-[#5D4037] leading-relaxed">
                    {isEn ? selectedItem.data.southIndianConnection.languageDebateEn : selectedItem.data.southIndianConnection.languageDebateTe}
                  </p>
                </div>
                <p className="text-xs text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4]">
                  <strong className="text-[#7B1113]">{isEn ? 'Southward & Eastward Dispersion: ' : 'దక్షిణ, తూర్పు ప్రాంతాలకు విస్తరణ: '}</strong>
                  {isEn ? selectedItem.data.southIndianConnection.southwardExpansionEn : selectedItem.data.southIndianConnection.southwardExpansionTe}
                </p>
              </div>

              {/* 3. South Indian Cultural Evolution */}
              <div className="bg-white p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#B7791F] flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#43A047]" />
                  <span>{isEn ? '3. Evolution of Dravidian Culture in South India' : '3. దక్షిణ భారతదేశంలో ద్రావిడ సంస్కృతి వికాసం'}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#5D4037]">
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] space-y-1">
                    <span className="font-bold text-[#7B1113] block">
                      {isEn ? 'Deccan Ash Mounds (బూడిద దిబ్బలు)' : 'బూడిద దిబ్బలు (Ash Mounds)'}
                    </span>
                    <p className="leading-relaxed">
                      {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.ashMoundsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.ashMoundsTe}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] space-y-1">
                    <span className="font-bold text-[#7B1113] block">
                      {isEn ? 'Megalithic Burials (మెగాలిథిక్ సమాధులు)' : 'మెగాలిథిక్ సమాధులు (Megaliths)'}
                    </span>
                    <p className="leading-relaxed">
                      {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.megalithsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.megalithsTe}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] space-y-1">
                    <span className="font-bold text-[#7B1113] block">
                      {isEn ? 'Keeladi & Adichanallur (కీలడి & ఆదిచనల్లూరు)' : 'కీలడి & ఆదిచనల్లూరు తవ్వకాలు'}
                    </span>
                    <p className="leading-relaxed">
                      {isEn ? selectedItem.data.southIndianConnection.southCultureEvolutionEn.excavationsEn : selectedItem.data.southIndianConnection.southCultureEvolutionTe.excavationsTe}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Spiritual Beliefs & Deity Worship */}
              <div className="bg-white p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#B7791F] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? '4. Spiritual Beliefs & Indigenous Deities' : '4. ద్రావిడుల ఆధ్యాత్మిక విశ్వాసాలు, దేవతా ఆరాధన'}</span>
                </h4>
                <p className="text-xs text-[#5D4037] italic">
                  {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.introEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.introTe}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  {(isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.deitiesEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.deitiesTe).map((d: any, i: number) => (
                    <div key={i} className="p-2.5 bg-[#FFF8E1] rounded-xl border border-[#D4AF37]/50">
                      <span className="font-bold text-[#7B1113] block text-sm">{isEn ? d.nameEn : d.nameTe}</span>
                      <span className="text-[11px] text-[#5D4037] mt-0.5 block">{isEn ? d.descEn : d.descTe}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-xs text-[#5D4037]">
                  <p className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] leading-relaxed">
                    {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.syncretismEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.syncretismTe}
                  </p>
                  <p className="p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] leading-relaxed">
                    <strong className="text-[#7B1113]">{isEn ? 'Grand Temple Culture & Bronze Statues: ' : 'అద్భుత దేవాలయ సంస్కృతి & నటరాజ కాంస్య విగ్రహాలు: '}</strong>
                    {isEn ? selectedItem.data.southIndianConnection.spiritualBeliefsEn.architectureEn : selectedItem.data.southIndianConnection.spiritualBeliefsTe.architectureTe}
                  </p>
                </div>
              </div>

              {/* 5. Genetic Roots */}
              <div className="bg-white p-4 rounded-xl border border-[#E8DCC4] shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#B7791F] flex items-center gap-2">
                  <Dna className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? '5. Archaeogenetic Ancestry Roots' : '5. ద్రావిడుల జన్యు మూలాలు'}</span>
                </h4>
                <p className="text-xs text-[#5D4037]">
                  {isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.introEn : selectedItem.data.southIndianConnection.geneticOriginsTe.introTe}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.componentsEn : selectedItem.data.southIndianConnection.geneticOriginsTe.componentsTe).map((comp: string, idx: number) => (
                    <div key={idx} className="p-2.5 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4] flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-[#7B1113]">{comp}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5D4037] italic bg-[#FFF8E1] p-2.5 rounded-xl border border-[#D4AF37]/40">
                  {isEn ? selectedItem.data.southIndianConnection.geneticOriginsEn.summaryEn : selectedItem.data.southIndianConnection.geneticOriginsTe.summaryTe}
                </p>
              </div>

              {/* 6. Conclusion */}
              <div className="p-4 bg-gradient-to-r from-[#FFF8E1] via-[#FFE082]/30 to-[#FFF8E1] rounded-2xl border-2 border-[#D4AF37] text-xs sm:text-sm text-[#4E342E] leading-relaxed shadow-xs">
                <strong className="text-[#7B1113] block mb-1 text-sm sm:text-base font-bold font-telugu-serif">
                  {isEn ? 'Concluding Core Insight: ' : 'ముగింపు భావన: '}
                </strong>
                {isEn ? selectedItem.data.southIndianConnection.conclusionEn : selectedItem.data.southIndianConnection.conclusionTe}
              </div>
            </div>

            {/* Modal Footer with the Reference Link at the footer of the window */}
            <div className="p-4 bg-[#FFFDF7] border-t-2 border-[#E8DCC4] flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
                  <InstagramIcon className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-rose-900">
                    {isEn ? 'Window Footer Reference Link' : 'విండో పాదపీఠ మూల రిఫరెన్స్ (Reference Link)'}
                  </div>
                  <a
                    href={selectedItem.data.referenceLink?.url || "https://www.instagram.com/reel/Df4WxdeR9Rf/?utm_source=ig_web_copy_link&jplx=NTc4MTIwNjQ2YQ=="}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-rose-800 hover:text-rose-950 hover:underline flex items-center gap-1.5"
                  >
                    <span>{isEn ? (selectedItem.data.referenceLink?.labelEn || 'Watch Instagram Reel') : (selectedItem.data.referenceLink?.labelTe || 'ఇన్‌స్టాగ్రామ్‌లో రీల్ వీక్షించండి')}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-600" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => setIsDravidianModalOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#5B0B14] transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Close Window' : 'విండో మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. POP-UP WINDOW MODAL: కురువంశ మహాభారత కాలరేఖ WINDOW         */}
      {/* ============================================================ */}
      {isKuruTimelineModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsKuruTimelineModalOpen(false)}
        >
          <div
            className="bg-[#FAF7F0] rounded-3xl border-2 border-[#D4AF37] max-w-6xl w-full max-h-[94vh] overflow-hidden flex flex-col shadow-2xl my-auto animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#B71C1C] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-20">
              <div className="flex items-start gap-3">
                <span className="p-2.5 rounded-2xl bg-white/10 text-2xl border border-white/20 shadow-xs">
                  📜
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-black uppercase tracking-wider">
                      {isEn ? 'Spoke #4 Linked Window • Mahabharata Era' : 'ఆకు #4 అనుసంధాన విండో • మహాభారత యుగం'}
                    </span>
                    <span className="text-xs text-[#FFE082] font-mono font-bold bg-black/30 px-2.5 py-0.5 rounded-full border border-white/20">
                      {isEn ? '3329 – 3102 BCE (227 Years)' : 'క్రీ.పూ. 3329 – 3102 (227 సంవత్సరాలు)'}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black font-telugu-serif text-[#FFE082] mt-1">
                    {isEn ? KURU_TIMELINE_METADATA.titleEn : KURU_TIMELINE_METADATA.titleTe}
                  </h2>
                  <p className="text-xs text-white/90 font-medium">
                    {isEn ? KURU_TIMELINE_METADATA.subtitleEn : KURU_TIMELINE_METADATA.subtitleTe}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsKuruTimelineModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close Window' : 'విండో మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body: Houses the entire interactive MahabharataKuruTimelineSection */}
            <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFBEB] via-[#FAF7F0] to-[#FFFDF7]">
              <MahabharataKuruTimelineSection 
                onOpenChartModal={(img) => setPreviewImage({
                  src: img.src,
                  title: img.title || (isEn ? 'Original Mahabharata Kuru Timeline Chart' : 'కురువంశ మహాభారత మూల చార్ట్'),
                  subtitle: img.subtitle
                })} 
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t-2 border-[#E8DCC4] flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-[#5D4037]">
                <span className="font-bold text-[#7B1113]">🔗 అనుసంధానం:</span>
                <span>{isEn ? 'Linked to Spoke #4: Mahabharata Era – Kuru Dynasty & Dharma Yuddha' : 'ఆకు #4 కు అనుసంధానించబడింది: మహాభారత యుగం – కురు వంశం & ధర్మయుద్ధం'}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsKuruTimelineModalOpen(false);
                    setViewMode('sanatana_chronology');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
                  title={isEn ? 'View in Full Vedic Chronology Tree' : 'సంపూర్ణ వైదిక వంశవృక్షంలో వీక్షించండి'}
                >
                  <span>🌳 {isEn ? 'View Kuru Family Tree' : 'కురు వంశవృక్షం చూడండి'}</span>
                </button>

                <button
                  onClick={() => setIsKuruTimelineModalOpen(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer shadow-xs"
                >
                  {isEn ? 'Close Window' : 'విండో మూసివేయండి'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. POP-UP WINDOW MODAL: RAMAYANA & TRETA YUGA EMPERORS       */}
      {/* ============================================================ */}
      {isRamayanaTimelineModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsRamayanaTimelineModalOpen(false)}
        >
          <div
            className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-5xl w-full max-h-[94vh] overflow-hidden flex flex-col shadow-2xl my-auto animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#D84315] text-[#FFE082] p-4 sm:p-5 flex items-start justify-between gap-3 border-b-2 border-[#D4AF37] sticky top-0 z-20">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 p-1 border border-white/20 shadow-xs shrink-0 overflow-hidden flex items-center justify-center">
                  <img 
                    src="./images/indian_history/sita_rama_lakshmana_square_icon.jpg" 
                    alt="Sri Sita Rama Lakshmana"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE082] text-[#7B1113] text-[10px] font-black uppercase tracking-wider">
                      {isEn ? 'Spoke #2 Linked Window • Ramayana Era' : 'ఆకు #2 అనుసంధాన విండో • రామాయణ యుగం'}
                    </span>
                    <span className="text-xs text-[#FFE082] font-mono font-bold bg-black/30 px-2.5 py-0.5 rounded-full border border-white/20">
                      {isEn ? 'Treta Yuga (~7500 – 6000 BCE)' : 'త్రేతాయుగం (~క్రీ.పూ. 7500 – 6000)'}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#FFE57F] hidden sm:inline">
                      !! तन्नो रामः प्रचोदयात् !!
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black font-telugu-serif text-[#FFE082] mt-1">
                    {isEn ? 'Ramayana Era, Sri Rama & Treta Yuga Dynasties' : 'రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు'}
                  </h2>
                  <p className="text-xs text-white/90 font-medium">
                    {isEn 
                      ? 'Lord Sri Ramachandra • Sita Devi • Lava-Kusha • Taxila Founded by Taksha • Suryavansha Line'
                      : 'శ్రీరామచంద్రుడు • సీతాదేవి • లవ-కుశులు • తక్షశిల నిర్మాణం • వానర సైన్యం • ఇక్ష్వాకు రఘువంశ పరంపర'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsRamayanaTimelineModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shrink-0"
                title={isEn ? 'Close Window' : 'విండో మూసివేయండి'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body: Houses the entire interactive RamayanaTretaTimelineSection */}
            <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-gradient-to-b from-[#FFFBEB] via-[#FAF7F0] to-[#FFFDF7]">
              <RamayanaTretaTimelineSection 
                onOpenChartModal={(img) => setPreviewImage({
                  src: img.src,
                  title: img.title || (isEn ? 'Original Ramayana Timeline Chart' : 'రామాయణ మూల కాలరేఖ పటం'),
                  subtitle: img.subtitle
                })} 
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF7] border-t-2 border-[#E8DCC4] flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-[#5D4037]">
                <span className="font-bold text-[#7B1113]">🔗 అనుసంధానం:</span>
                <span>{isEn ? 'Linked to Spoke #2: Ramayana Era – Suryavansha (Ikshvaku Empire)' : 'ఆకు #2 కు అనుసంధానించబడింది: రామాయణ యుగం – సూర్యవంశం (ఇక్ష్వాకు సామ్రాజ్యం)'}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsRamayanaTimelineModalOpen(false);
                    setViewMode('sanatana_chronology');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
                  title={isEn ? 'View in Full Vedic Chronology Tree' : 'సంపూర్ణ వైదిక వంశవృక్షంలో వీక్షించండి'}
                >
                  <span>🌳 {isEn ? 'View Vedic Chronology Tree' : 'వైదిక వంశవృక్షం చూడండి'}</span>
                </button>

                <button
                  onClick={() => setIsRamayanaTimelineModalOpen(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#7B1113] text-[#FFE082] hover:bg-[#4A0012] transition-colors cursor-pointer shadow-xs"
                >
                  {isEn ? 'Close Window' : 'విండో మూసివేయండి'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
