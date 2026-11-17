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
  Scale,
  CheckCircle2
} from 'lucide-react';

// Chronological Epoch of Bharat mapped on the EXACT SAME 25,800-year scale
export interface BharatChronoEpoch {
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
  dynastiesIncludedIds?: string[];
  descriptionTe: string;
  descriptionEn: string;
  achievementsTe: string[];
  achievementsEn: string[];
  significanceTe: string;
  significanceEn: string;
}

// 10 Chronological Epochs of Bharat on the EXACT SAME 25,800-year time scale
// 10,876 BCE at Top (-90°) -> 2026 CE at Bottom (+90°)
export const BHARAT_CHRONO_EPOCHS: BharatChronoEpoch[] = [
  {
    id: 'epoch_prehistory_mehrgarh',
    order: 1,
    nameTe: 'చరిత్రపూర్వ & మెహర్‌గఢ్ ఉషస్సు',
    nameEn: 'Prehistoric Stone Age & Mehrgarh Dawn',
    periodTe: 'క్రీ.పూ. 10,876 – 6,976',
    periodEn: '10,876 – 6,976 BCE',
    durationLabelTe: '3,900 ఏళ్ళు',
    durationLabelEn: '3,900 Years',
    startAngleDeg: -98.37,
    endAngleDeg: -43.95,
    midAngleDeg: -71.16,
    spanDeg: 54.42,
    yugaEquivalentTe: 'కటాక్లిస్మోస్ & అవరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Kataklysmos & Descending Treta Yuga',
    icon: '🪨',
    color: '#EFEBE9',
    accentColor: '#5D4037',
    dynastiesIncludedIds: ['prehistory_stone_age'],
    descriptionTe: 'హిమయుగ ముగింపు, భీంబేట్కా శైల చిత్రలేఖనాలు, దక్షిణాసియాలోనే ప్రథమ మెహర్‌గఢ్ గోధుమ-బార్లీ వ్యవసాయం మరియు గ్రామీణ ఆవాసాల ఉషస్సు.',
    descriptionEn: 'Post-glacial Holocene transition, Bhimbetka rock paintings, and South Asia\'s earliest agriculture and pastoral settlements at Mehrgarh.',
    achievementsTe: ['రాతి గొడ్డళ్ళు & తొలి సూక్ష్మరాతి పరికరాలు', 'మెహర్‌గఢ్ వద్ద ప్రథమ గోధుమ, బార్లీ సాగు (క్రీ.పూ. 7000)', 'మట్టి ఇటుకలతో స్థిర నివాసాల నిర్మాణం'],
    achievementsEn: ['Microlithic tools and rock shelters', 'Earliest barley & wheat farming at Mehrgarh (7000 BCE)', 'Mud-brick communal dwellings'],
    significanceTe: 'భారత ఉపఖండంలో ఆహార సేకరణ నుండి ఆహార ఉత్పత్తి వైపు మారిన చారిత్రక పరిణామం.',
    significanceEn: 'The monumental revolution from hunter-gatherers to agrarian civilization in Bharat.'
  },
  {
    id: 'epoch_early_saraswati_sindhu',
    order: 2,
    nameTe: 'తొలి సింధు-సరస్వతి నాగరికత',
    nameEn: 'Early Indus-Saraswati Era',
    periodTe: 'క్రీ.పూ. 6,976 – 3,976',
    periodEn: '6,976 – 3,976 BCE',
    durationLabelTe: '3,000 ఏళ్ళు',
    durationLabelEn: '3,000 Years',
    startAngleDeg: -43.95,
    endAngleDeg: -2.09,
    midAngleDeg: -23.02,
    spanDeg: 41.86,
    yugaEquivalentTe: 'అవరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Descending Dwapara Yuga',
    icon: '🏺',
    color: '#E8F5E9',
    accentColor: '#1B5E20',
    dynastiesIncludedIds: ['indus_saraswati'],
    descriptionTe: 'రాఖీగఢీ, హరప్పా పూర్వపు గ్రామీణ వర్తక వికాసం, కాంస్య యుగ ప్రవేశం, సరస్వతీ నదీ తీరంలో బ్రహ్మాండ నివాసాల వికాసం.',
    descriptionEn: 'Early bronze metallurgy, planned agrarian hamlets at Rakhigarhi, early Harappan craft specializations along the Vedic Saraswati River.',
    achievementsTe: ['రాగి, కాంస్య లోహశాస్త్రం', 'రాఖీగఢీ & కునాల్ వద్ద మట్టి కుండల కళాకృతులు', 'విస్తృత వర్తక మార్గాల ఆవిర్భావం'],
    achievementsEn: ['Early copper & bronze metallurgy', 'Pottery & terracotta arts at Rakhigarhi and Kunal', 'Trans-regional riverine trade networks'],
    significanceTe: 'సరస్వతీ నదీ పరీవాహక ప్రాంతంలో ప్రపంచంలోనే విస్తృతమైన నాగరికతకు వేసిన పునాది.',
    significanceEn: 'The foundational bedrock of urban civilization along the Saraswati-Sindhu basin.'
  },
  {
    id: 'epoch_mahabharata_sandhi',
    order: 3,
    nameTe: 'పరిపక్వ సింధు & మహాభారత యుగసంధి',
    nameEn: 'Mature Harappan & Mahabharata Sandhi',
    periodTe: 'క్రీ.పూ. 3,976 – 3,676',
    periodEn: '3,976 – 3,676 BCE',
    durationLabelTe: '300 ఏళ్ళు',
    durationLabelEn: '300 Years',
    startAngleDeg: -2.09,
    endAngleDeg: 2.09,
    midAngleDeg: 0,
    spanDeg: 4.18,
    yugaEquivalentTe: 'ద్వాపర-కలి సంధికాలం (క్రీ.పూ. 3102 కలి ఆరంభం)',
    yugaEquivalentEn: 'Dwapara-Kali Transition (3102 BCE Kali Onset)',
    icon: '🏹',
    color: '#FFF3E0',
    accentColor: '#BF360C',
    dynastiesIncludedIds: ['indus_saraswati'],
    descriptionTe: 'మోహెంజొదారో, ధోలవీర ప్రపంచ ప్రసిద్ధ పట్టణ ప్రణాళిక, మహాభారత ధర్మయుద్ధం, ద్వాపర యుగ ముగింపు మరియు కలియుగ ప్రవేశ సంధి కాలం (క్రీ.పూ. 3102).',
    descriptionEn: 'Peak urban planning at Mohenjo-daro & Dholavira, Kurukshetra Mahabharata War, and astronomical start of Kali Yuga in 3102 BCE.',
    achievementsTe: ['భూగర్భ మురుగునీటి పారుదల వ్యవస్థ & ధోలవీర జలాశయాలు', 'మహాభారత ఇతిహాస సంస్కృతి & భగవద్గీత బోధన', 'ప్రామాణిక కొలతలు మరియు తూనికల విధానం'],
    achievementsEn: ['Subterranean drainage & stone reservoirs of Dholavira', 'Kurukshetra War & eternal Bhagavad Gita revelation', 'Standardized weights and measures'],
    significanceTe: 'ద్వాపర యుగ శ్రీకృష్ణ నిర్యాణం మరియు కలియుగ ప్రవేశ సంధికాలం.',
    significanceEn: 'The supreme celestial turning point: Departure of Sri Krishna and commencement of Kali Yuga.'
  },
  {
    id: 'epoch_vedic_civilization',
    order: 4,
    nameTe: 'వైదిక నాగరికత & వేద సంహితలు',
    nameEn: 'Vedic Civilization & Upanishads',
    periodTe: 'క్రీ.పూ. 3,676 – 976',
    periodEn: '3,676 – 976 BCE',
    durationLabelTe: '2,700 ఏళ్ళు',
    durationLabelEn: '2,700 Years',
    startAngleDeg: 2.09,
    endAngleDeg: 39.77,
    midAngleDeg: 20.93,
    spanDeg: 37.68,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 1)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 1)',
    icon: '📜',
    color: '#EDE7F6',
    accentColor: '#4A148C',
    dynastiesIncludedIds: ['early_vedic_age', 'later_vedic_age'],
    descriptionTe: 'చతుర్వేదాల (ఋగ్, యజుర్, సామ, అథర్వణ) మంత్ర సంహితలు, ఉపనిషత్తుల అద్వైత తాత్విక దర్శనాలు, సప్తసింధు నుండి గంగా పరీవాహక ప్రాంతానికి వైదిక విస్తరణ.',
    descriptionEn: 'Codification of the 4 Vedas (Rig, Yajur, Sama, Atharva), pristine Upanishadic Vedanta philosophy, and the dawn of Aryan civic order.',
    achievementsTe: ['సప్తర్షి జ్ఞాన సంప్రదాయం & వేద మంత్ర శాస్త్రం', 'ఉపనిషత్తుల బ్రహ్మ విచారణ (తత్త్వమసి, అహం బ్రహ్మాస్మి)', 'వర్ణాశ్రమ ధర్మ వ్యవస్థ & సభా, సమితి ప్రజాస్వామ్య వేదికలు'],
    achievementsEn: ['Vedic oral transmission (oral UNESCO heritage)', 'Sublime Upanishadic metaphysics', 'Sabha and Samiti early representative assemblies'],
    significanceTe: 'సనాతన ధర్మ తాత్విక పునాదులు మరియు ఆధ్యాత్మిక విజ్ఞాన శిఖరం.',
    significanceEn: 'The eternal intellectual and metaphysical core of Sanatana Dharma.'
  },
  {
    id: 'epoch_mahajanapadas_transition',
    order: 5,
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
    icon: '🛡️',
    color: '#FFF8E1',
    accentColor: '#C59B27',
    dynastiesIncludedIds: ['mahajanapadas_shramana', 'magadha_rise'],
    descriptionTe: 'ఇనుప యుగ విప్లవం, గంగా మైదానంలో 16 మహాజనపదాల ఆవిర్భావం, నాణేల ముద్రణ, మగధ సామ్రాజ్య ఉషస్సు మరియు శ్రమణ తాత్విక ఉద్యమాలు.',
    descriptionEn: 'Second Urbanization, Iron Age metallurgy, formation of the 16 Mahajanapadas, early punch-marked coinage, and the rise of Magadha.',
    achievementsTe: ['ఇనుముతో వ్యవసాయ, రక్షణ పరికరాల ఆధునీకరణ', 'పంచ్-మార్క్డ్ వెండి నాణేల చలామణి', 'గణతంత్రాలు (లిచ్ఛవి) మరియు రాజరిక వ్యవస్థల స్థాపన'],
    achievementsEn: ['Iron ploughshares and military armaments', 'First silver punch-marked coinage', 'Early republics (Vajji, Licchavi) and statecraft'],
    significanceTe: 'భారతదేశంలో రెండవ పట్టణ విప్లవం మరియు భౌగోళిక సామ్రాజ్యాల ఆవిర్భావం.',
    significanceEn: 'Second Urbanization and dawn of pan-Indian geopolitical statecraft.'
  },
  {
    id: 'epoch_imperial_dynasties',
    order: 6,
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
    dynastiesIncludedIds: [
      'mauryan_empire', 'satavahana_empire', 'kushan_empire', 'sangam_era',
      'gupta_golden_age', 'harsha_chalukya_pallava', 'rashtrakuta_tripartite',
      'imperial_chola', 'delhi_sultanate_resistance', 'vijayanagara_empire',
      'mughal_empire', 'maratha_empire', 'british_colonial_era',
      'freedom_struggle', 'independent_india_constitution', 'digital_revolution_space'
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
    order: 7,
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
    dynastiesIncludedIds: ['amrit_kaal_2026'],
    descriptionTe: 'నేటి వర్తమాన క్షణం (2026 CE): చంద్రయాన్, ఆదిత్య L-1 రోదసి విజయాలు, 5 ట్రిలియన్ డాలర్ల ఆర్థిక శక్తిగా ఎదుగుదల, డిజిటల్ భారత్ మరియు విశ్వగురు హోదా వైపు ప్రస్థానం.',
    descriptionEn: 'The present moment (2026 CE): Chandrayaan-3 lunar landing, Aditya-L1 solar observatory, 5-trillion economy trajectory, and the dawn of the Ascending Cosmic Arc.',
    achievementsTe: ['చంద్రుని దక్షిణ ధ్రువంపై కాలుమోపిన తొలి దేశం (చంద్రయాన్-3)', 'యూపీఐ (UPI) డిజిటల్ విప్లవం & ఆధునిక మౌలిక వసతులు', 'ఆయుష్, యోగా మరియు ప్రాచీన విజ్ఞాన పునరుజ్జీవనం'],
    achievementsEn: ['First nation to land on the Lunar South Pole (Chandrayaan-3)', 'World\'s largest real-time payment ecosystem (UPI)', 'Global resurgence of Yoga, Ayurveda, and Dharmic ethos'],
    significanceTe: '12,900 ఏళ్ళ అవరోహణ చక్రం ముగిసి, నవ చైతన్య ఆరోహణ యుగంలోకి ప్రవేశిస్తున్న సంధికాల మలుపు.',
    significanceEn: 'The exact turning point from the 12,900-year descent into the ascending cycle of light.'
  },
  {
    id: 'epoch_ascending_science_era',
    order: 8,
    nameTe: 'ఆరోహణ విజ్ఞాన కాలం (భవిష్యత్)',
    nameEn: 'Ascending Dwapara: Space & Energy Era',
    periodTe: 'క్రీ.శ. 3225 – 5925',
    periodEn: '3,225 – 5,925 CE',
    durationLabelTe: '2,700 ఏళ్ళు',
    durationLabelEn: '2,700 Years',
    startAngleDeg: 98.37,
    endAngleDeg: 136.05,
    midAngleDeg: 117.21,
    spanDeg: 37.68,
    yugaEquivalentTe: 'ఆరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Ascending Dwapara Yuga',
    icon: '🚀',
    color: '#E0F7FA',
    accentColor: '#00838F',
    descriptionTe: 'శ్రీ యుక్తేశ్వర్ సిద్ధాంతం ప్రకారం విద్యుత్, పరమాణు, రోదసి మరియు సూక్ష్మ తరంగ శక్తుల సంపూర్ణ అవగాహన; మానవాళికి అంతరిక్ష నక్షత్ర మండలాలు అందుబాటులోకి రావడం.',
    descriptionEn: 'Mastery over electro-magnetic spectrum, fine energy matrices, interstellar spaceflight, and awakening of higher mental faculties.',
    achievementsTe: ['శూన్య శక్తి (Zero Point Energy) & నక్షత్రయానం', 'శరీర-మనస్సుల ఏకీకృత స్వస్థత విజ్ఞానం', 'సకల ప్రాణుల పట్ల అహింస, పరస్పర సహకార వ్యవస్థ'],
    achievementsEn: ['Zero-point energy & interstellar exploration', 'Holistic bio-resonance healing sciences', 'Universal compassion and planetary stewardship'],
    significanceTe: 'భౌతిక వాదం నుండి శక్తి విజ్ఞానం వైపు మానవాళి ప్రస్థానం.',
    significanceEn: 'Humanity\'s evolutionary transcendence from gross matter to subtle energy matrices.'
  },
  {
    id: 'epoch_ascending_mental_harmony',
    order: 9,
    nameTe: 'ఆరోహణ ఆధ్యాత్మిక సామరస్య యుగం',
    nameEn: 'Ascending Treta: Intuitive Mastery',
    periodTe: 'క్రీ.శ. 5925 – 8925',
    periodEn: '5,925 – 8,925 CE',
    durationLabelTe: '3,000 ఏళ్ళు',
    durationLabelEn: '3,000 Years',
    startAngleDeg: 136.05,
    endAngleDeg: 177.91,
    midAngleDeg: 156.98,
    spanDeg: 41.86,
    yugaEquivalentTe: 'ఆరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Ascending Treta Yuga',
    icon: '🧘',
    color: '#FFF3E0',
    accentColor: '#E65100',
    descriptionTe: 'టెలిపతి, అంతఃచేతనా వికాసం, ఆలోచనా తరంగాలతో వస్తు సృష్టి, సమాజంలో నేరాలు లేని పవిత్ర ధర్మపాలన, ప్రకృతితో సంపూర్ణ సమతుల్యత.',
    descriptionEn: 'Universal direct intuition, telepathic communion, thought-materialization, supreme ethical governance, and deep harmony with nature.',
    achievementsTe: ['మానసిక సంభాషణ (Telepathy) & దివ్య దృష్టి', 'రామరాజ్య ధర్మపాలన & కరుణామయ జీవనం', 'ప్రకృతి శక్తులపై స్వచ్ఛంద ఆధిపత్యం'],
    achievementsEn: ['Direct mental telepathy & clairvoyance', 'Dharmic equitable stewardship of civilization', 'Harmonic resonance with planetary ecology'],
    significanceTe: 'మానవ మేధస్సు దివ్య ఆధ్యాత్మిక సంకల్ప శక్తిగా రూపాంతరం చెందడం.',
    significanceEn: 'The flowering of divine mental power and global righteousness.'
  },
  {
    id: 'epoch_ascending_satya_apex',
    order: 10,
    nameTe: 'ఆరోహణ సత్యయుగ స్వర్ణ శిఖరం',
    nameEn: 'Ascending Satya: Divine Wisdom Zenith',
    periodTe: 'క్రీ.శ. 8925 – 14,625 / 10,876 BCE',
    periodEn: '8,925 – 14,625 CE / 10,876 BCE',
    durationLabelTe: '5,700 ఏళ్ళు',
    durationLabelEn: '5,700 Years',
    startAngleDeg: 177.91,
    endAngleDeg: 261.63,
    midAngleDeg: 219.77,
    spanDeg: 83.72,
    yugaEquivalentTe: 'ఆరోహణ సత్యయుగం & పరమ వైదిక సృష్టి మూలాలు',
    yugaEquivalentEn: 'Ascending Satya Yuga & Cosmic Genesis',
    icon: '🕉️',
    color: '#FFFDE7',
    accentColor: '#F57F17',
    descriptionTe: 'బ్రహ్మజ్ఞానం, సకల ప్రాణులలో భగవద్దర్శనం, మహర్షుల నిరంతర దివ్య తపస్సు, సత్యం మరియు ధర్మం నాలుగు పాదాలతో నడిచే పరిపూర్ణ స్వర్ణయుగం.',
    descriptionEn: 'Full spiritual liberation, omnipresent God-consciousness, Rishi tapasya, when Dharma stands whole upon all four pillars of truth.',
    achievementsTe: ['జీవన్ముక్తి & దివ్య బ్రహ్మ సాక్షాత్కారం', 'సత్యం, తపస్సు, దయ, దానం పరిపూర్ణత', 'భౌతిక, సూక్ష్మ, కారణ లోకాల సమన్వయం'],
    achievementsEn: ['Jivanmukti (living liberation) and supreme enlightenment', 'Complete embodiment of Satya, Tapas, Daya, and Dana', 'Seamless unity of physical and transcendental planes'],
    significanceTe: 'సృష్టి కాలచక్రపు పరమ శిఖరం మరియు పునరావృత ఆది మూలం.',
    significanceEn: 'The supreme pinnacle of the 25,800-year Great Year before the eternal cosmic renewal.'
  }
];

export type ScaleMode = 'exact_time' | 'aligned_24' | 'empire_zoom';

export type SelectedItemType = 
  | { kind: 'yuga'; data: YugaCycleSegment }
  | { kind: 'epoch'; data: BharatChronoEpoch }
  | { kind: 'empire'; data: ChakraTimeEvent };

export const IndianHistoryChakraView: React.FC = () => {
  const { language } = useMythology();
  const isEn = language === 'en';

  // Active Scale Mode:
  // 'exact_time': Both chakras locked to the EXACT SAME 25,800-year time scale (years = degrees)
  // 'aligned_24': 24 Indian empires mapped with equal spokes, aligned with 2026 CE at bottom 6 o'clock
  // 'empire_zoom': Zoom into the 676 BCE - 2026 CE classical dynastic arc across full circle
  const [scaleMode, setScaleMode] = useState<ScaleMode>('exact_time');

  // Active selection: can be a Yuga segment, an Epoch, or a specific Empire event
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    kind: 'epoch',
    data: BHARAT_CHRONO_EPOCHS[6] // Amrit Kaal (2025–3225 CE / Current time)
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Filter focus: 'all' | 'yuga' | 'empire'
  const [focusRing, setFocusRing] = useState<'all' | 'yuga' | 'empire'>('all');

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

  // Auto Tour Interval
  useEffect(() => {
    if (!isTourActive) return;

    let stepCounter = 0;
    const interval = setInterval(() => {
      stepCounter++;
      if (scaleMode === 'exact_time') {
        if (stepCounter % 2 === 0) {
          const currEpochIdx = BHARAT_CHRONO_EPOCHS.findIndex(
            e => selectedItem.kind === 'epoch' && e.id === selectedItem.data.id
          );
          const nextIdx = (currEpochIdx + 1) % BHARAT_CHRONO_EPOCHS.length;
          const nextEpoch = BHARAT_CHRONO_EPOCHS[nextIdx];
          setSelectedItem({ kind: 'epoch', data: nextEpoch });
          playChime(nextEpoch.isCurrentTime ? 880 : 440 + nextIdx * 25);
        } else {
          const currYugaIdx = YUGA_CYCLE_25800_SEGMENTS.findIndex(
            s => selectedItem.kind === 'yuga' && s.id === selectedItem.data.id
          );
          const nextIdx = (currYugaIdx + 1) % YUGA_CYCLE_25800_SEGMENTS.length;
          const nextYuga = YUGA_CYCLE_25800_SEGMENTS[nextIdx];
          setSelectedItem({ kind: 'yuga', data: nextYuga });
          playChime(nextYuga.isCurrentTime ? 880 : 440 + nextIdx * 20);
        }
      } else {
        const currEmpireIdx = INDIAN_HISTORY_CHAKRA_EVENTS.findIndex(
          e => selectedItem.kind === 'empire' && e.id === selectedItem.data.id
        );
        const nextIdx = (currEmpireIdx + 1) % INDIAN_HISTORY_CHAKRA_EVENTS.length;
        const nextEmpire = INDIAN_HISTORY_CHAKRA_EVENTS[nextIdx];
        setSelectedItem({ kind: 'empire', data: nextEmpire });
        playChime(nextEmpire.isCurrentTime ? 880 : 440 + nextIdx * 15);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTourActive, isAudioEnabled, selectedItem, scaleMode]);

  // Jump to Current Time (2026 CE / Ekpyrosis)
  const handleJumpToCurrentTime = () => {
    if (scaleMode === 'exact_time') {
      setSelectedItem({
        kind: 'epoch',
        data: BHARAT_CHRONO_EPOCHS[6] // Amrit Kaal 2026 CE
      });
    } else {
      setSelectedItem({
        kind: 'empire',
        data: INDIAN_HISTORY_CHAKRA_EVENTS[23] // Amrit Kaal India at 2026 CE
      });
    }
    playChime(880);
  };

  // ============================================================
  // GEOMETRY CONSTANTS FOR EXACT SAME SCALE ARCHITECTURE
  // ============================================================
  const CX = 500;
  const CY = 500;

  // Outer Ring: 25,800-Year Yuga Cycle (Width = 485 - 375 = 110px)
  const R_YUGA_OUTER = 485;
  const R_YUGA_INNER = 375;

  // Inner Ring: Indian History Epochs (Width = 365 - 255 = 110px)
  // EXACT SAME RADIAL WIDTH (110px vs 110px)
  const R_EMPIRES_OUTER = 365;
  const R_EMPIRES_INNER = 255;

  // Trajectory & Hub Rings
  const R_ARROW_BAND = 185;
  const R_HUB_OUTER = 160;
  const R_HUB_MID = 120;
  const R_HUB_INNER = 85;

  // 24 Spokes for Empire Aligned Scale
  const TOTAL_SPOKES = 24;
  const ANGLE_STEP = 360 / TOTAL_SPOKES;

  // Outer Ring Segments: 25,800 Yuga Cycle
  // Kataklysmos (1200 yrs) is centered at top (-90°)
  // Ekpyrosis (1200 yrs) is centered at bottom (+90°)
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

  // 24 Empire Spokes calibrated so that Spoke 24 (2026 CE) is at BOTTOM (+90°)
  // and Spoke 1 (Prehistory) is at TOP (-90°)
  const empire24AlignedSegments = useMemo(() => {
    return INDIAN_HISTORY_CHAKRA_EVENTS.map((event, index) => {
      // Offset so that index 23 (event 24, 2026 CE) lands centered at +90° (Bottom)
      const centerDeg = 90 - (23 - index) * ANGLE_STEP;
      const startDeg = centerDeg - ANGLE_STEP / 2;
      const endDeg = centerDeg + ANGLE_STEP / 2;
      return {
        ...event,
        startDeg,
        endDeg,
        midDeg: centerDeg
      };
    });
  }, [ANGLE_STEP]);

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
                  <Scale className="w-3.5 h-3.5 text-[#2A0800]" />
                  {isEn ? 'Synchronized Scale Time Chakra' : 'సమగ్ర సమతుల్య కాలచక్ర దర్శిని'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-[#FFE082] text-xs font-bold border border-[#D4AF37]/50">
                  {isEn ? 'Both Chakras Calibrated On The Same Scale' : 'రెండు చక్రాలు ఒకే ప్రమాణంలో సమన్వయం'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/50 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isEn ? 'LIVE: 2026 CE Synchronized' : 'వర్తమానం: 2026 CE ఏకరీతిగా సమన్వయం'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFE082] font-telugu-serif tracking-tight mt-1.5 drop-shadow-sm">
                {isEn 
                  ? 'Unified Time Chakra: Both Circles on the Same Scale' 
                  : 'ఏకరీతి సమగ్ర కాలచక్రం: ఒకే ప్రమాణంలో యుగచక్రం & భారత సామ్రాజ్యాలు'}
              </h1>
              <p className="text-xs sm:text-sm text-[#FFECE4] mt-1.5 max-w-3xl leading-relaxed font-medium">
                {isEn 
                  ? 'Outer Ring (25,800y Yuga Cycle) and Inner Ring (Indian History Chronology) are engineered on the exact same radial width (110px) and synchronized chronological scale. 10,876 BCE aligns at the Top (-90°), and 2026 CE aligns at the Bottom (+90°).'
                  : 'బయటి వలయం (25,800 ఏళ్ల యుగచక్రం) మరియు లోపలి వలయం (భారతీయ చారిత్రక యుగాలు) ఖచ్చితంగా ఒకే రేడియల్ వెడల్పు (110px) మరియు ఒకే కాల ప్రమాణంలో రూపొందించబడ్డాయి. క్రీ.పూ. 10,876 పైన (12 o\'clock) మరియు నేటి 2026 వర్తమానం సరిగ్గా క్రింద (6 o\'clock) ఏకీభవించాయి.'}
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
            <button
              onClick={handleJumpToCurrentTime}
              className="mt-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer border border-cyan-300/40"
              title={isEn ? 'Jump to Current Time (2026 CE)' : 'చక్రంపై నేటి వర్తమాన సమయానికి వెళ్ళు'}
            >
              <Target className="w-4 h-4 text-cyan-200" />
              <span>{isEn ? 'Jump to Current Time (2026)' : 'ప్రస్తుత సమయానికి వెళ్ళు (2026)'}</span>
            </button>
          </div>
        </div>

        {/* Toolbar: Scale Mode Selector & Controls */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* SCALE MODE SELECTOR (Fulfilling "both chakras must be on the same scale") */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[#FFE082] uppercase tracking-wider mr-1 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#FFD54F]" />
              {isEn ? 'Chakra Scale System:' : 'కాలచక్ర ప్రమాణ విధానం:'}
            </span>

            {/* Mode 1: Exact Same Chronological Scale */}
            <button
              onClick={() => {
                setScaleMode('exact_time');
                if (selectedItem.kind === 'empire') {
                  setSelectedItem({ kind: 'epoch', data: BHARAT_CHRONO_EPOCHS[6] });
                }
                playChime(580);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                scaleMode === 'exact_time'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              title={isEn ? 'Both rings share the exact same 25,800-year time scale and alignment' : 'రెండు వలయాలు ఖచ్చితమైన 25,800 ఏళ్ల కాల ప్రమాణంలో ఏకీభవిస్తాయి'}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? '⚖️ Same Chronological Scale (25,800y)' : '⚖️ ఖచ్చితమైన కాల ప్రమాణం (ఒకే స్కేల్)'}</span>
            </button>

            {/* Mode 2: Synchronized 24-Empire Aligned Scale */}
            <button
              onClick={() => {
                setScaleMode('aligned_24');
                setSelectedItem({ kind: 'empire', data: INDIAN_HISTORY_CHAKRA_EVENTS[23] });
                playChime(640);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                scaleMode === 'aligned_24'
                  ? 'bg-amber-400 text-stone-950 font-black ring-2 ring-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              title={isEn ? '24 Indian Empires aligned with 2026 CE needle at bottom' : '24 భారతీయ సామ్రాజ్యాలు 2026 వర్తమాన సూచికతో సమన్వయం చేయబడ్డాయి'}
            >
              <span>{isEn ? '🎡 24 Dynasties Aligned Scale' : '🎡 24 సామ్రాజ్యాల సమన్వయ స్కేల్'}</span>
            </button>
          </div>

          {/* Controls: Focus ring & wheel rotate */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Focus Ring Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setFocusRing('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'all' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? 'Both' : 'రెండు'}
              </button>
              <button
                onClick={() => setFocusRing('yuga')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'yuga' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? 'Yuga' : 'యుగచక్రం'}
              </button>
              <button
                onClick={() => setFocusRing('empire')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  focusRing === 'empire' ? 'bg-[#FFE082] text-stone-950 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                {isEn ? 'Bharat' : 'భారత్'}
              </button>
            </div>

            {/* Tour & Audio buttons */}
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
      {/* 2. MAIN WORKSPACE: UNIFIED CHAKRA WHEEL + DETAILS DOSSIER    */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE COMBINED ALL-IN-ONE CHAKRA SVG              */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center">
          
          <div className="w-full max-w-[720px] aspect-square relative select-none flex items-center justify-center p-2 sm:p-4 rounded-3xl bg-radial from-[#FFFDF8] via-[#FFF9EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-2xl">
            
            {/* Top Indicator Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-cyan-950/95 text-cyan-200 border border-cyan-400/60 px-3 py-1.5 rounded-full shadow-md text-xs font-black backdrop-blur-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{isEn ? '2026 CE Synchronized Needle • Bottom (6 o\'clock)' : '2026 CE లైవ్ సూచిక • చక్రం దిగువన (6 గంటల వద్ద)'}</span>
            </div>

            {/* View Original Yuga Diagram Button */}
            <button
              onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
              className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#7B1113]/90 hover:bg-[#7B1113] text-[#FFE082] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#D4AF37] cursor-pointer transition-all"
              title={isEn ? 'View Original Uploaded 25,800-Year Yuga Diagram' : 'మూల 25,800 ఏళ్ల యుగచక్ర పటం చూడండి'}
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>{isEn ? 'Source Poster' : 'మూల పటం (HD)'}</span>
            </button>

            {/* ============================================================ */}
            {/* THE MASTER UNIFIED SVG CHAKRA (ON THE EXACT SAME SCALE)      */}
            {/* ============================================================ */}
            <svg
              viewBox="0 0 1000 1000"
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
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="50%" stopColor="#FFD54F" />
                  <stop offset="85%" stopColor="#C59B27" />
                  <stop offset="100%" stopColor="#3E1004" />
                </radialGradient>

                <radialGradient id="currentTimeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#00838F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#006064" stopOpacity="0" />
                </radialGradient>

                <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#3E1004" />
                </marker>
              </defs>

              {/* ------------------------------------------------------------ */}
              {/* TIER 1: OUTER RING — 25,800-YEAR YUGA CYCLE (Thickness: 110px) */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_YUGA_OUTER + 3} fill="#2A0800" stroke="#D4AF37" strokeWidth="4" />
              <circle cx={CX} cy={CY} r={R_YUGA_INNER} fill="none" stroke="#3E1004" strokeWidth="3" />

              {/* 16 Yuga Cycle Sectors on the Outer Band */}
              {yugaAngleSegments.map(seg => {
                const isSelected = selectedItem.kind === 'yuga' && selectedItem.data.id === seg.id;
                const isCurr = seg.isCurrentTime;
                const path = describeArcSector(CX, CY, R_YUGA_INNER, R_YUGA_OUTER, seg.startAngleDeg, seg.endAngleDeg);

                return (
                  <g
                    key={`unified-yuga-${seg.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'yuga', data: seg });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'empire' ? 0.35 : 1}
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
                      strokeWidth={isSelected ? 4 : (isCurr ? 3 : 2)}
                      className="transition-colors duration-200"
                    />

                    {/* ENLARGED FONT LABELS FOR YUGA SEGMENTS */}
                    {(() => {
                      const rad = (seg.midAngleDeg * Math.PI) / 180;
                      const rText = (R_YUGA_OUTER + R_YUGA_INNER) / 2;
                      const xT = CX + rText * Math.cos(rad);
                      const yT = CY + rText * Math.sin(rad);

                      let textRot = seg.midAngleDeg + 90;
                      if (seg.midAngleDeg > 0 && seg.midAngleDeg < 180) {
                        textRot += 180;
                      }

                      if (seg.category === 'transition') {
                        return (
                          <text
                            x={xT}
                            y={yT}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={10}
                            fontWeight="bold"
                            fill={isSelected ? '#FFE082' : '#5D4037'}
                            transform={`rotate(${textRot}, ${xT}, ${yT})`}
                            className="pointer-events-none select-none font-mono"
                          >
                            300y
                          </text>
                        );
                      }

                      const isKataklysmos = seg.category === 'kataklysmos';
                      const isEkpyrosis = seg.category === 'ekpyrosis';

                      return (
                        <g transform={`rotate(${textRot}, ${xT}, ${yT})`} className="pointer-events-none select-none">
                          <text
                            x={xT}
                            y={yT - 10}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={isKataklysmos || isEkpyrosis ? 15 : 16}
                            fontWeight="900"
                            fontStyle={isKataklysmos || isEkpyrosis ? 'italic' : 'normal'}
                            fill={
                              isSelected 
                                ? '#FFE082' 
                                : (isKataklysmos ? '#1565C0' : isEkpyrosis ? '#C62828' : '#212121')
                            }
                            className="font-serif tracking-wide"
                          >
                            {seg.nameEn.split(' ')[0]}
                          </text>
                          <text
                            x={xT}
                            y={yT + 9}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={12}
                            fontWeight="bold"
                            fill={
                              isSelected 
                                ? '#FFFFFF' 
                                : (isKataklysmos ? '#1976D2' : isEkpyrosis ? '#D32F2F' : '#616161')
                            }
                            className="font-mono"
                          >
                            {seg.durationLabelEn}
                          </text>
                        </g>
                      );
                    })()}
                  </g>
                );
              })}

              {/* Boundary Ticks & External Dates for 25,800 Yuga Cycle */}
              {yugaAngleSegments.map(seg => {
                const rad = (seg.startAngleDeg * Math.PI) / 180;
                const xInner = CX + R_YUGA_INNER * Math.cos(rad);
                const yInner = CY + R_YUGA_INNER * Math.sin(rad);
                const xOuter = CX + R_YUGA_OUTER * Math.cos(rad);
                const yOuter = CY + R_YUGA_OUTER * Math.sin(rad);

                const xDate = CX + (R_YUGA_OUTER + 20) * Math.cos(rad);
                const yDate = CY + (R_YUGA_OUTER + 20) * Math.sin(rad);

                let dateRot = seg.startAngleDeg + 90;
                if (seg.startAngleDeg > 0 && seg.startAngleDeg < 180) dateRot += 180;

                const dateText = seg.datesEn.split('–')[0].trim();

                return (
                  <g key={`yuga-border-tick-${seg.id}`} className="pointer-events-none" opacity={focusRing === 'empire' ? 0.35 : 1}>
                    <line
                      x1={xInner}
                      y1={yInner}
                      x2={xOuter + 8}
                      y2={yOuter + 8 * Math.sin(rad)}
                      stroke="#2C1810"
                      strokeWidth="2.5"
                    />
                    <text
                      x={xDate}
                      y={yDate}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={11}
                      fontWeight="900"
                      fill="#2A0800"
                      transform={`rotate(${dateRot}, ${xDate}, ${yDate})`}
                      className="font-mono tracking-tight"
                    >
                      {dateText}
                    </text>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 2: INNER RING — INDIAN HISTORY (Thickness: 110px)       */}
              {/* EXACT SAME RADIAL WIDTH AS OUTER RING (110px vs 110px)       */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_EMPIRES_OUTER} fill="none" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx={CX} cy={CY} r={R_EMPIRES_INNER} fill="none" stroke="#3E1004" strokeWidth="3" />

              {/* MODE A: EXACT CHRONOLOGICAL SCALE (SAME AS OUTER RING) */}
              {scaleMode === 'exact_time' && BHARAT_CHRONO_EPOCHS.map(epoch => {
                const isSelected = selectedItem.kind === 'epoch' && selectedItem.data.id === epoch.id;
                const isCurr = epoch.isCurrentTime;
                const path = describeArcSector(CX, CY, R_EMPIRES_INNER, R_EMPIRES_OUTER, epoch.startAngleDeg, epoch.endAngleDeg);

                const rad = (epoch.midAngleDeg * Math.PI) / 180;
                const rMid = (R_EMPIRES_OUTER + R_EMPIRES_INNER) / 2;
                const xM = CX + rMid * Math.cos(rad);
                const yM = CY + rMid * Math.sin(rad);

                let rot = epoch.midAngleDeg + 90;
                if (epoch.midAngleDeg > 0 && epoch.midAngleDeg < 180) rot += 180;

                return (
                  <g
                    key={`exact-scale-epoch-${epoch.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'epoch', data: epoch });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'yuga' ? 0.35 : 1}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#006064' : '#7B1113')
                          : (isCurr ? '#004D40' : epoch.color)
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#C59B27')}
                      strokeWidth={isSelected ? 4 : (isCurr ? 3 : 1.5)}
                      className="transition-colors duration-200"
                    />

                    {/* Radial dividing line */}
                    <line
                      x1={CX + R_EMPIRES_INNER * Math.cos((epoch.startAngleDeg * Math.PI) / 180)}
                      y1={CY + R_EMPIRES_INNER * Math.sin((epoch.startAngleDeg * Math.PI) / 180)}
                      x2={CX + R_EMPIRES_OUTER * Math.cos((epoch.startAngleDeg * Math.PI) / 180)}
                      y2={CY + R_EMPIRES_OUTER * Math.sin((epoch.startAngleDeg * Math.PI) / 180)}
                      stroke="#C59B27"
                      strokeWidth="1.5"
                    />

                    {/* Content inside sector */}
                    {epoch.spanDeg >= 10 ? (
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM - 24}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={20}
                        >
                          {epoch.icon}
                        </text>

                        <text
                          x={xM}
                          y={yM}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={13}
                          fontWeight="900"
                          fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#3E2723')}
                          className="font-telugu-serif tracking-tight"
                        >
                          {isEn ? epoch.nameEn.split(' ')[0] : epoch.nameTe.split(' ')[0]}
                        </text>

                        <text
                          x={xM}
                          y={yM + 22}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={10}
                          fontWeight="bold"
                          fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#5D4037')}
                          className="font-mono"
                        >
                          {isEn ? epoch.durationLabelEn : epoch.durationLabelTe}
                        </text>
                      </g>
                    ) : (
                      // Transition / Short Epoch Label
                      <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                        <text
                          x={xM}
                          y={yM}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={11}
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

              {/* MODE B: 24 EMPIRES ALIGNED SCALE (ALIGNED WITH 2026 CE AT BOTTOM) */}
              {scaleMode === 'aligned_24' && empire24AlignedSegments.map(event => {
                const isSelected = selectedItem.kind === 'empire' && selectedItem.data.id === event.id;
                const isCurr = event.isCurrentTime;
                const path = describeArcSector(CX, CY, R_EMPIRES_INNER, R_EMPIRES_OUTER, event.startDeg, event.endDeg);

                const midRad = (event.midDeg * Math.PI) / 180;
                const rMid = (R_EMPIRES_OUTER + R_EMPIRES_INNER) / 2;
                const xM = CX + rMid * Math.cos(midRad);
                const yM = CY + rMid * Math.sin(midRad);

                let rot = event.midDeg + 90;
                if (event.midDeg > 0 && event.midDeg < 180) rot += 180;

                return (
                  <g
                    key={`aligned-empire-${event.id}`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedItem({ kind: 'empire', data: event });
                      playChime(isCurr ? 880 : 528);
                    }}
                    opacity={focusRing === 'yuga' ? 0.35 : 1}
                  >
                    <path
                      d={path}
                      fill={
                        isSelected
                          ? (isCurr ? '#006064' : '#7B1113')
                          : (isCurr ? '#004D40' : (event.order % 2 === 0 ? '#FFFDF8' : '#FAF2E6'))
                      }
                      stroke={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#E8DCC4')}
                      strokeWidth={isSelected ? 4 : (isCurr ? 3 : 1.5)}
                      className="transition-colors duration-200"
                    />

                    {/* Radial dividing line */}
                    <line
                      x1={CX + R_EMPIRES_INNER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y1={CY + R_EMPIRES_INNER * Math.sin((event.startDeg * Math.PI) / 180)}
                      x2={CX + R_EMPIRES_OUTER * Math.cos((event.startDeg * Math.PI) / 180)}
                      y2={CY + R_EMPIRES_OUTER * Math.sin((event.startDeg * Math.PI) / 180)}
                      stroke="#C59B27"
                      strokeWidth="1.5"
                    />

                    {/* Content inside sector */}
                    <g transform={`rotate(${rot}, ${xM}, ${yM})`} className="pointer-events-none select-none">
                      <text
                        x={xM}
                        y={yM - 26}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={19}
                      >
                        {event.icon}
                      </text>

                      <text
                        x={xM}
                        y={yM}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={13}
                        fontWeight="900"
                        fill={isSelected ? '#FFE082' : (isCurr ? '#00E5FF' : '#4E342E')}
                        className="font-telugu-serif tracking-tight"
                      >
                        {isEn ? event.titleEn.split(' ')[0] : event.titleTe.split(' ')[0]}
                      </text>

                      <text
                        x={xM}
                        y={yM + 22}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={10}
                        fontWeight="bold"
                        fill={isSelected ? '#FFFFFF' : (isCurr ? '#80DEEA' : '#8D6E63')}
                        className="font-mono"
                      >
                        #{event.order}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* ------------------------------------------------------------ */}
              {/* TIER 3: COSMIC ASCENDING & DESCENDING TRAJECTORY ARROWS      */}
              {/* ------------------------------------------------------------ */}
              <circle cx={CX} cy={CY} r={R_ARROW_BAND} fill="none" stroke="#2C1810" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />

              {/* Ascending Cycle (Left Arc) */}
              <path
                d={`M ${CX - 150} ${CY + 85} A ${R_ARROW_BAND} ${R_ARROW_BAND} 0 0 1 ${CX - 60} ${CY - 165}`}
                fill="none"
                stroke="#2C1810"
                strokeWidth="3"
                markerEnd="url(#arrowHead)"
              />
              <text
                x={CX - 100}
                y={CY - 110}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={15}
                fontWeight="900"
                fill="#2C1810"
                className="font-serif select-none pointer-events-none"
              >
                Ascending
              </text>
              <text
                x={CX - 100}
                y={CY - 90}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={13}
                fontWeight="bold"
                fill="#5D4037"
                className="font-serif select-none pointer-events-none"
              >
                (ఆరోహణ చక్రం)
              </text>

              {/* Descending Cycle (Right Arc) */}
              <path
                d={`M ${CX + 60} ${CY - 165} A ${R_ARROW_BAND} ${R_ARROW_BAND} 0 0 1 ${CX + 150} ${CY + 85}`}
                fill="none"
                stroke="#2C1810"
                strokeWidth="3"
                markerEnd="url(#arrowHead)"
              />
              <text
                x={CX + 100}
                y={CY + 95}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={15}
                fontWeight="900"
                fill="#2C1810"
                className="font-serif select-none pointer-events-none"
              >
                Descending
              </text>
              <text
                x={CX + 100}
                y={CY + 115}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={13}
                fontWeight="bold"
                fill="#5D4037"
                className="font-serif select-none pointer-events-none"
              >
                (అవరోహణ చక్రం)
              </text>

              {/* ------------------------------------------------------------ */}
              {/* TIER 4: CENTER HUB — ASHOKA DHARMA CHAKRA & SELECTION        */}
              {/* ------------------------------------------------------------ */}
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_OUTER}
                fill="#FAF7F0"
                stroke="#2C1810"
                strokeWidth="4"
              />
              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_MID}
                fill="url(#hubGradient)"
                stroke="#FFE082"
                strokeWidth="3"
                className="shadow-inner"
              />

              {/* 24 Spokes of Ashoka Chakra */}
              {Array.from({ length: 24 }).map((_, i) => {
                const spRad = (i * 15 * Math.PI) / 180;
                return (
                  <line
                    key={`hub-spoke-${i}`}
                    x1={CX + R_HUB_INNER * Math.cos(spRad)}
                    y1={CY + R_HUB_INNER * Math.sin(spRad)}
                    x2={CX + (R_HUB_MID - 4) * Math.cos(spRad)}
                    y2={CY + (R_HUB_MID - 4) * Math.sin(spRad)}
                    stroke="#3E1004"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}

              <circle
                cx={CX}
                cy={CY}
                r={R_HUB_INNER}
                fill="#FFFDF8"
                stroke="#7B1113"
                strokeWidth="3.5"
              />

              {/* Large Centered Emoji and Name in Hub */}
              <text
                x={CX}
                y={CY - 22}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={34}
                className="pointer-events-none select-none"
              >
                {selectedItem.kind === 'yuga'
                  ? (selectedItem.data.category === 'kataklysmos' ? '🌊' : selectedItem.data.category === 'ekpyrosis' ? '🔥' : '⏳')
                  : selectedItem.data.icon}
              </text>

              <text
                x={CX}
                y={CY + 18}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontWeight="900"
                fill="#2A0800"
                className="pointer-events-none select-none font-telugu-serif"
              >
                {isEn 
                  ? (selectedItem.kind === 'yuga' 
                      ? selectedItem.data.nameEn.split(' ')[0] 
                      : selectedItem.kind === 'epoch'
                        ? selectedItem.data.nameEn.split(' ')[0]
                        : selectedItem.data.titleEn.split(' ')[0])
                  : (selectedItem.kind === 'yuga' 
                      ? selectedItem.data.nameTe.split(' ')[0] 
                      : selectedItem.kind === 'epoch'
                        ? selectedItem.data.nameTe.split(' ')[0]
                        : selectedItem.data.titleTe.split(' ')[0])}
              </text>

              <text
                x={CX}
                y={CY + 38}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={10}
                fontWeight="bold"
                fill="#7B1113"
                className="pointer-events-none select-none font-mono"
              >
                {selectedItem.kind === 'yuga' 
                  ? selectedItem.data.durationLabelEn 
                  : selectedItem.kind === 'epoch'
                    ? selectedItem.data.durationLabelEn
                    : `#${selectedItem.data.order} Empire`}
              </text>

              {/* ------------------------------------------------------------ */}
              {/* TIER 5: SYNCHRONIZED CURRENT TIME (2026 CE) NEEDLE AT BOTTOM */}
              {/* ------------------------------------------------------------ */}
              {(() => {
                const bottomRad = (90 * Math.PI) / 180;
                const xPoint = CX + R_YUGA_OUTER * Math.cos(bottomRad);
                const yPoint = CY + R_YUGA_OUTER * Math.sin(bottomRad);

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
                    {/* Synchronized Needle Arrow pointing at the bottom (6 o'clock) */}
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
            </svg>
          </div>

          {/* Quick instructions and reset button below wheel */}
          <div className="w-full max-w-[720px] mt-4 flex items-center justify-between text-xs text-[#5D4037] px-2 font-medium">
            <span className="flex items-center gap-1.5 font-bold text-sm text-[#7B1113]">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              {isEn 
                ? 'Outer: 25,800y Yuga Cycle (110px) • Inner: Indian History (110px) [Equal Scale]' 
                : 'బయటి వలయం: 25,800 ఏళ్లు (110px) • లోపలి వలయం: భారత చరిత్ర (110px) [ఒకే స్కేల్]'}
            </span>
            <button
              onClick={() => setRotationAngle(0)}
              className="hover:text-[#7B1113] hover:underline cursor-pointer font-bold text-xs"
            >
              {isEn ? 'Reset Position' : 'యథాస్థితికి తీసుకురా'}
            </button>
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
                        ? 'OUTER RING: YUGA CYCLE' 
                        : selectedItem.kind === 'epoch'
                          ? `INNER RING: EPOCH #${selectedItem.data.order}`
                          : `INNER RING: SPOKE #${selectedItem.data.spokeNumber}`}
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
              
              {/* CASE 1: YUGA SEGMENT */}
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

              {/* CASE 2: BHARAT CHRONOLOGICAL EPOCH (SAME SCALE AS YUGA) */}
              {selectedItem.kind === 'epoch' && (
                <>
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D84315]" />
                      <span>{isEn ? 'Epoch Evolution & Civilizational Scope' : 'యుగ పరిణామం & నాగరికతా వికాసం'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-medium bg-[#FFFDF8] p-3.5 rounded-xl border border-[#E8DCC4]">
                      {isEn ? selectedItem.data.descriptionEn : selectedItem.data.descriptionTe}
                    </p>
                  </div>

                  {/* Key Achievements */}
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

                  {/* If Epoch 6 (Imperial Dynasties), display interactive gallery of included dynasties */}
                  {selectedItem.data.dynastiesIncludedIds && selectedItem.data.dynastiesIncludedIds.length > 1 && (
                    <div className="space-y-2 pt-2 border-t border-[#E8DCC4]">
                      <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] tracking-wide flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Crown className="w-4 h-4 text-[#D84315]" />
                          <span>{isEn ? 'Explore Included Dynasties (Click to view):' : 'ఈ యుగంలో విలసిల్లిన మహా సామ్రాజ్యాలు:'}</span>
                        </span>
                        <span className="text-xs font-mono font-bold text-[#D84315]">
                          {selectedItem.data.dynastiesIncludedIds.length} {isEn ? 'Empires' : 'సామ్రాజ్యాలు'}
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

                  {/* Significance */}
                  <div className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#D4AF37]/60 space-y-1.5">
                    <div className="text-xs sm:text-sm font-black uppercase text-[#7B1113] flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>{isEn ? 'Historical & Civilizational Significance:' : 'నాగరికతా ప్రాధాన్యత:'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4E342E] font-medium leading-relaxed">
                      {isEn ? selectedItem.data.significanceEn : selectedItem.data.significanceTe}
                    </p>
                  </div>
                </>
              )}

              {/* CASE 3: INDIVIDUAL HISTORICAL EMPIRE */}
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
                </>
              )}

              {/* Master Reference Poster Button */}
              <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="./images/indian_history/yuga_cycle_25800.jpg"
                    alt="Yuga Cycle 25800 Years Master Diagram"
                    className="w-16 h-16 rounded-xl object-cover border border-[#D4AF37] shadow-sm cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#7B1113]">
                      {isEn ? 'Master Reference Infographic' : 'మూల యుగచక్ర ఇన్ఫోగ్రాఫిక్'}
                    </div>
                    <button
                      onClick={() => setPreviewImage('./images/indian_history/yuga_cycle_25800.jpg')}
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
                      setSelectedItem({ kind: 'epoch', data: BHARAT_CHRONO_EPOCHS[5] }); // Imperial Dynasties
                    } else {
                      setSelectedItem({ kind: 'yuga', data: YUGA_CYCLE_25800_SEGMENTS[0] }); // Kataklysmos
                    }
                    playChime(640);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs sm:text-sm font-black transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{selectedItem.kind === 'yuga' ? (isEn ? 'Select Bharat Ring' : 'భారత వలయం') : (isEn ? 'Select Yuga Ring' : 'యుగాల వలయం')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. LIGHTBOX MODAL FOR SOURCE POSTER                          */}
      {/* ============================================================ */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[92vh] bg-stone-900 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl p-2" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-2 text-white border-b border-stone-700 mb-2">
              <span className="text-sm font-bold text-[#FFE082] flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4" />
                {isEn ? 'Master Reference: Yuga Cycle 25,800 Years' : 'మూల పటం: 25,800 ఏళ్ల యుగచక్రం (Ascending & Descending)'}
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-red-700 transition-colors font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <img
              src={previewImage}
              alt="Yuga Cycle 25800 Years Chart"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
