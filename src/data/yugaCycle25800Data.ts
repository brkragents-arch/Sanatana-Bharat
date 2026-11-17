// Complete Bilingual Dataset for the 25,800-Year Yuga Cycle (Precession of the Equinoxes)
// Transcribed directly from the user's uploaded master diagram

export interface YugaCycleSegment {
  id: string;
  order: number;
  nameTe: string;
  nameEn: string;
  durationYears: number;
  durationLabelTe: string;
  durationLabelEn: string;
  datesTe: string;
  datesEn: string;
  cycleType: 'descending' | 'ascending' | 'apex' | 'nadir';
  cycleNameTe: string;
  cycleNameEn: string;
  category: 'satya' | 'treta' | 'dwapara' | 'kali' | 'transition' | 'kataklysmos' | 'ekpyrosis';
  color: string;
  textColor: string;
  isSpecial?: boolean;
  isCurrentTime?: boolean;
  arcSpanDegrees: number;
  descriptionTe: string;
  descriptionEn: string;
  cosmicSignificanceTe: string;
  cosmicSignificanceEn: string;
  historicalParallelsTe: string[];
  historicalParallelsEn: string[];
}

export const YUGA_CYCLE_25800_SEGMENTS: YugaCycleSegment[] = [
  {
    id: 'kataklysmos',
    order: 1,
    nameTe: 'కటాక్లిస్మోస్ (జల ప్రళయం)',
    nameEn: 'Kataklysmos (Great Deluge)',
    durationYears: 1200,
    durationLabelTe: '1200 సంవత్సరాలు',
    durationLabelEn: '1200 years',
    datesTe: 'క్రీ.పూ. 10,876 – 9,676',
    datesEn: '10,876 BCE – 9,676 BCE',
    cycleType: 'apex',
    cycleNameTe: 'శిఖర పరివర్తన కాలం (Apex Transition)',
    cycleNameEn: 'Apex Cosmic Transition',
    category: 'kataklysmos',
    color: '#1565C0',
    textColor: '#1E88E5',
    isSpecial: true,
    arcSpanDegrees: 16.74,
    descriptionTe: 'భూమిపై సంభవించిన చారిత్రక మహా జలప్రళయం (Younger Dryas Boundary Cataclysm). గ్లేసియర్లు కరిగి సముద్ర మట్టాలు విపరీతంగా పెరిగిన కాలం.',
    descriptionEn: 'The global Younger Dryas cataclysm and colossal meltwater pulses. The Universal Flood recorded in Manu’s Matsya Avatar, Noah’s Ark, and Plato’s Atlantis submergence (~9600 BCE).',
    cosmicSignificanceTe: 'ఆరోహణ సత్యయుగ ముగింపు మరియు అవరోహణ త్రేతాయుగ ఆరంభానికి మధ్య సంభవించే బ్రహ్మాండ శుద్ధి చక్రం (Cosmic Cleansing).',
    cosmicSignificanceEn: 'Cosmic Water Cleansing bridging the peak of the Ascending Satya Yuga into the Descending Treta Yuga.',
    historicalParallelsTe: [
      'మనువు మత్స్యావతార నౌకా రక్షణ ఘట్టం',
      'ప్లేటో పేర్కొన్న అట్లాంటిస్ జలసమాధి (~9600 BCE)',
      'హిమయుగ ముగింపు మరియు విస్తార వరదలు'
    ],
    historicalParallelsEn: [
      'Matsya Avatar preserving the seeds of civilization and the Vedas in an ark',
      'Plato’s date for the sinking of Atlantis (~9,600 BCE)',
      'End of the Pleistocene Ice Age and global ocean level rises'
    ]
  },
  {
    id: 'treta_descending',
    order: 2,
    nameTe: 'అవరోహణ త్రేతాయుగం',
    nameEn: 'Descending Treta Yuga',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: 'క్రీ.పూ. 9,676 – 6,976',
    datesEn: '9,676 BCE – 6,976 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ చక్రం (Descending Cycle)',
    cycleNameEn: 'Descending Cycle',
    category: 'treta',
    color: '#D84315',
    textColor: '#BF360C',
    arcSpanDegrees: 37.67,
    descriptionTe: 'మానసిక శక్తి మరియు ధర్మం 3 పాదములతో నడిచిన కాలం. పవిత్ర యజ్ఞ క్రతువులు, తొలి వ్యవసాయ స్థిర సమాజాల ఆరంభం.',
    descriptionEn: 'Dharma stands on three legs. Intuitive comprehension begins subtle decline toward conceptual intellect; emergence of early agrarian and pastoral communities.',
    cosmicSignificanceTe: 'సత్యయుగ పూర్ణ దివ్య చైతన్యం నుండి మానవ మేధస్సు భౌతిక జగత్తు వైపు అవరోహణ చేయడం.',
    cosmicSignificanceEn: 'Descent of collective consciousness from supreme divine communion toward ritual harmony and mental power.',
    historicalParallelsTe: [
      'గోబెక్లీ తేపే (Göbekli Tepe) దేవాలయ నిర్మాణం (~9500 BCE)',
      'మెహర్‌గఢ్ నందు తొలి వ్యవసాయం (~7000 BCE)',
      'మానసిక తపశ్శక్తి మరియు యజ్ఞ సంప్రదాయాలు'
    ],
    historicalParallelsEn: [
      'Göbekli Tepe monumental stone sanctuary construction (~9500 BCE)',
      'Neolithic Mehrgarh agricultural settlement beginnings (~7000 BCE)',
      'Pre-eminence of mental prowess and fire sacrifices'
    ]
  },
  {
    id: 'trans_treta_dwapara_desc',
    order: 3,
    nameTe: 'సంధి కాలం (త్రేత – ద్వాపర)',
    nameEn: 'Transition Period (Treta to Dwapara)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: 'క్రీ.పూ. 6,976 – 6,676',
    datesEn: '6,976 BCE – 6,676 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ సంధి',
    cycleNameEn: 'Descending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'త్రేతాయుగం నుండి ద్వాపర యుగంలోకి ప్రవేశించే 300 సంవత్సరాల సంధికాలం.',
    descriptionEn: '300-year transitional bridge carrying humanity from Treta Yuga into Dwapara Yuga.',
    cosmicSignificanceTe: 'యుగాల మార్పిడి సంధి కాలంలో ప్రకృతి శక్తులు మరియు మానవ చైతన్యంలో తీవ్ర మార్పులు చోటుచేసుకుంటాయి.',
    cosmicSignificanceEn: 'A twilight sandhi phase recalibrating mental capacities into electrical/atomic comprehension.',
    historicalParallelsTe: ['ప్రపంచవ్యాప్తంగా నవీన శిలాయుగ వికాసం', 'కుమ్మరి చక్రం మరియు లోహ శోధన ప్రారంభం'],
    historicalParallelsEn: ['Spread of Neolithic pottery', 'Early smelting of native copper']
  },
  {
    id: 'dwapara_descending',
    order: 4,
    nameTe: 'అవరోహణ ద్వాపర యుగం',
    nameEn: 'Descending Dwapara Yuga',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: 'క్రీ.పూ. 6,676 – 3,976',
    datesEn: '6,676 BCE – 3,976 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ చక్రం (Descending Cycle)',
    cycleNameEn: 'Descending Cycle',
    category: 'dwapara',
    color: '#2E7D32',
    textColor: '#1B5E20',
    arcSpanDegrees: 37.67,
    descriptionTe: 'ధర్మం రెండు పాదాలపై నిలిచిన యుగం. విద్యుత్తు, అయస్కాంత, సూక్ష్మ ప్రాణ శక్తుల విజ్ఞానం మరియు అద్భుత మెగాలిథిక్ నిర్మాణాలు.',
    descriptionEn: 'Dharma stands on two legs. Age of subtle energies, electromagnetic comprehension, navigation, and majestic architectural stone alignments.',
    cosmicSignificanceTe: 'మానవుడు సూక్ష్మ విద్యుత్-ప్రాణ శక్తులను అర్థం చేసుకునే చివరి దశ; భౌతిక ప్రపంచం వైపు జారడం.',
    cosmicSignificanceEn: 'Consciousness comprehends electricity, magnetism, and atomic forces before descending into gross materialism.',
    historicalParallelsTe: [
      'సింధు-సరస్వతీ తొలి నాగరికత ఆవిర్భావం',
      'ఈజిప్ట్ మరియు సుమేరియా తొలి నాగరికతల పునాదులు',
      'కాంస్య యుగం మరియు ఖగోళ పరిశీలనా కేంద్రాలు'
    ],
    historicalParallelsEn: [
      'Early Indus-Saraswati urban foundations',
      'Predynastic Egypt and Sumerian foundational phases',
      'Bronze metallurgy and astronomical stone circles'
    ]
  },
  {
    id: 'trans_dwapara_kali_desc',
    order: 5,
    nameTe: 'సంధి కాలం (ద్వాపర – కలి)',
    nameEn: 'Transition Period (Dwapara to Kali)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: 'క్రీ.పూ. 3,976 – 3,676',
    datesEn: '3,976 BCE – 3,676 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ సంధి',
    cycleNameEn: 'Descending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'ద్వాపర యుగం నుండి కలియుగంలోకి ప్రవేశించే 300 సంవత్సరాల సంధికాలం.',
    descriptionEn: '300-year transition paving the descent from energy awareness into gross physical matter.',
    cosmicSignificanceTe: 'సూక్ష్మ శక్తుల విజ్ఞానం క్షీణించి భౌతిక దేహ మరియు ఇంద్రియ వాంఛలు ప్రబలే సంధికాలం.',
    cosmicSignificanceEn: 'Loss of subtle energetic vision, paving the way for the dark age of gross material strife.',
    historicalParallelsTe: ['లిఖిత లిపుల తొలి ఆవిష్కరణలు', 'రాజ్యాల సైనిక విస్తరణ'],
    historicalParallelsEn: ['Emergence of early cuneiform and pictographic writing', 'Expansion of fortified kingdoms']
  },
  {
    id: 'kali_descending_1',
    order: 6,
    nameTe: 'అవరోహణ కలియుగం (భాగం 1)',
    nameEn: 'Descending Kali Yuga (Part 1)',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: 'క్రీ.పూ. 3,676 – 976',
    datesEn: '3,676 BCE – 976 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ చక్రం (Descending Cycle)',
    cycleNameEn: 'Descending Cycle',
    category: 'kali',
    color: '#4A148C',
    textColor: '#311B92',
    arcSpanDegrees: 37.67,
    descriptionTe: 'ధర్మం ఒకే పాదముపై నిలిచిన యుగం. కురుక్షేత్ర మహాసంగ్రామం, శ్రీకృష్ణావతార పరిసమాప్తి మరియు ప్రాచీన సామ్రాజ్యాల సంక్షోభం.',
    descriptionEn: 'Dharma stands on one leg. The historic Kurukshetra War, departure of Bhagavan Sri Krishna (~3102 BCE), and widespread bronze/iron warfare.',
    cosmicSignificanceTe: 'మానవ మేధస్సు స్థూల భౌతిక వస్తువులు, ఆధిపత్యం మరియు యుద్ధాల చుట్టూ తిరిగే తొలి కలి దశ.',
    cosmicSignificanceEn: 'Intellect confined strictly to gross sensory evidence, material accumulation, and militarized territorial conquests.',
    historicalParallelsTe: [
      'మహాభారత యుద్ధం మరియు శ్రీకృష్ణ నిర్యాణం (3102 BCE)',
      'హరప్పా నాగరికత శిఖరాగ్రం & సరస్వతీ నది ఇంకిపోవుట',
      'ఈజిప్టు పిరమిడ్ల నిర్మాణం & కాంస్య యుగ పతనం'
    ],
    historicalParallelsEn: [
      'Traditional date for Mahabharata War and Kaliyuga start (3102 BCE)',
      'Mature Harappan phase and subsequent drying of the Saraswati River',
      'Construction of the Giza Pyramids and Late Bronze Age Collapse'
    ]
  },
  {
    id: 'trans_kali_desc',
    order: 7,
    nameTe: 'సంధి కాలం (కలి మధ్యమ సంధి)',
    nameEn: 'Transition Period (Mid-Kali Sandhi)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: 'క్రీ.పూ. 976 – 676',
    datesEn: '976 BCE – 676 BCE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ సంధి',
    cycleNameEn: 'Descending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'కలియుగ ప్రథమ భాగం నుండి ద్వితీయ భాగంలోకి ప్రవేశించిన 300 సంవత్సరాల సంధికాలం.',
    descriptionEn: '300-year transition deepening the darkness of the Kali cycle across Europe and Asia.',
    cosmicSignificanceTe: 'పురాతన పవిత్ర ఆలయ విజ్ఞానం మరుగునపడి ఇనుప యుగ కఠినత్వంలోకి జారడం.',
    cosmicSignificanceEn: 'The full onset of the Iron Age and the loss of ancient esoteric spiritual traditions.',
    historicalParallelsTe: ['భారతదేశంలో ఇనుప యుగం విస్తరణ', 'గ్రీక్ అంధకార యుగం ముగింపు'],
    historicalParallelsEn: ['Widespread adoption of iron implements in Gangetic plain', 'Greek Dark Ages transition']
  },
  {
    id: 'kali_descending_2',
    order: 8,
    nameTe: 'అవరోహణ కలియుగం (భాగం 2)',
    nameEn: 'Descending Kali Yuga (Part 2)',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: 'క్రీ.పూ. 676 – 2025 క్రీ.శ.',
    datesEn: '676 BCE – 2025 CE',
    cycleType: 'descending',
    cycleNameTe: 'అవరోహణ చక్రం (Descending Cycle)',
    cycleNameEn: 'Descending Cycle',
    category: 'kali',
    color: '#6A1B9A',
    textColor: '#4A148C',
    arcSpanDegrees: 37.67,
    descriptionTe: 'చరిత్రలోనే అత్యంత కఠినమైన భౌతిక అంధకార దశ. సామ్రాజ్య విస్తరణలు, వలస దోపిడీలు, రెండు ప్రపంచ యుద్ధాలు మరియు పారిశ్రామిక విప్లవం.',
    descriptionEn: 'The lowest ebb of human spiritual awareness. Imperialistic colonization, global industrial pollution, world wars, reaching the absolute bottom in 2025 CE.',
    cosmicSignificanceTe: 'మానవ చైతన్యం సంపూర్ణ అహంకార, స్థూల భౌతికత్వంలో కూరుకుపోయి 2025 నాటికి చివరి అంచును చేరడం.',
    cosmicSignificanceEn: 'Human consciousness reaches its densest material crystallization before the planetary turning point.',
    historicalParallelsTe: [
      'మౌర్య, రోమన్, ఇస్లామిక్ మరియు బ్రిటిష్ సామ్రాజ్యాలు',
      'రెండు ప్రపంచ యుద్ధాలు మరియు అణ్వస్త్రాల ఆవిష్కరణ',
      'సమాచార సాంకేతిక విప్లవం మరియు పర్యావరణ సంక్షోభం'
    ],
    historicalParallelsEn: [
      'Rise and fall of classical empires: Maurya, Rome, Islamic Caliphates, British Empire',
      'Industrial Revolution, World Wars I & II, atomic weaponry',
      'The Digital Revolution and unprecedented ecological tipping points'
    ]
  },
  {
    id: 'ekpyrosis',
    order: 9,
    nameTe: 'ఎక్పైరోసిస్ (అగ్ని పరివర్తన కాలం)',
    nameEn: 'Ekpyrosis (Great Conflagration / Shift)',
    durationYears: 1200,
    durationLabelTe: '1200 సంవత్సరాలు',
    durationLabelEn: '1200 years',
    datesTe: '2025 క్రీ.శ. – 3225 క్రీ.శ.',
    datesEn: '2025 CE – 3225 CE',
    cycleType: 'nadir',
    cycleNameTe: 'పాతాళ పరివర్తన కాలం (Nadir Turning Point)',
    cycleNameEn: 'Nadir Cosmic Turning Point',
    category: 'ekpyrosis',
    color: '#B71C1C',
    textColor: '#D32F2F',
    isSpecial: true,
    isCurrentTime: true,
    arcSpanDegrees: 16.74,
    descriptionTe: '🎯 ప్రస్తుత సమయం: 2025-2026 CE! అవరోహణ చక్రం ముగిసి ఆరోహణ చక్రం ప్రారంభమయ్యే చారిత్రక అగ్ని పరివర్తన దశ (Great Cosmic Turning Point).',
    descriptionEn: '🎯 MARKED AS THE PRESENT ERA (2025-2026 CE)! The momentous nadir where the 12,900-year Descending cycle ends and the Ascending cycle begins. A fiery purification and global spiritual reawakening.',
    cosmicSignificanceTe: 'గ్రీకు తత్వంలో ఎక్పైరోసిస్ (Ekpyrosis - అగ్నిచే విశ్వశుద్ధి) మరియు పురాణాలలో కలియుగాంత పరివర్తన సంకల్పం. వినాశనం కాక పునరుజ్జీవనం.',
    cosmicSignificanceEn: 'Stoic Ekpyrosis (cosmic fire rebirth) aligning with Puranic Kaliyuga transition. Cleansing of old paradigms to birth the ascending era.',
    historicalParallelsTe: [
      'నేడు మనం జీవిస్తున్న చారిత్రక క్షణం: 2026 క్రీ.శ. (కలియుగం 5127)',
      'కృత్రిమ మేధస్సు (AI), అంతరిక్ష ప్రయాణాలు, గ్రీన్ ఎనర్జీ విప్లవం',
      'భారతదేశం విశ్వగురువుగా మరియు ఆధ్యాత్మిక కేంద్రంగా పునరుత్థానం'
    ],
    historicalParallelsEn: [
      'The exact present epoch: 2026 CE (Kaliyuga year 5,127)',
      'Convergence of AI, space exploration, and planetary ecological crisis',
      'Renaissance of Sanatana Dharma, yoga, and global spiritual consciousness'
    ]
  },
  {
    id: 'dwapara_ascending',
    order: 10,
    nameTe: 'ఆరోహణ ద్వాపర యుగం',
    nameEn: 'Ascending Dwapara Yuga',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: '3225 క్రీ.శ. – 5925 క్రీ.శ.',
    datesEn: '3225 CE – 5925 CE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ చక్రం (Ascending Cycle)',
    cycleNameEn: 'Ascending Cycle',
    category: 'dwapara',
    color: '#2E7D32',
    textColor: '#388E3C',
    arcSpanDegrees: 37.67,
    descriptionTe: 'మానవ చైతన్యం పైకి ఎదుగుతూ సూక్ష్మ శక్తులు, క్వాంటమ్ ఎనర్జీ, అంతరిక్ష ప్రయాణాలను సంపూర్ణంగా అవగతం చేసుకునే యుగం.',
    descriptionEn: 'Consciousness ascends upward. Mastering electrical, atomic, and fine vibrational energies; planetary unity and interstellar horizons.',
    cosmicSignificanceTe: 'భౌతిక స్థూల బంధాల నుండి విముక్తమై శక్తి (Energy / Prana) ప్రాధాన్యతను గుర్తించే దశ.',
    cosmicSignificanceEn: 'Humanity awakens to subtle electro-etheric reality, dismantling material limitations.',
    historicalParallelsTe: [
      'ప్రాణాయామ, కుండలినీ మరియు సూక్ష్మశక్తి శాస్త్రాల విశ్వవ్యాప్త గుర్తింపు',
      'అంతరిక్ష కాలనీల స్థాపన మరియు కాలుష్య రహిత శక్తి విప్లవం'
    ],
    historicalParallelsEn: [
      'Global mastery of subtle bio-energies, telekinesis, and clean atomic power',
      'Harmonious planetary stewardship and interplanetary civilization'
    ]
  },
  {
    id: 'trans_dwapara_treta_asc',
    order: 11,
    nameTe: 'సంధి కాలం (ద్వాపర – త్రేత)',
    nameEn: 'Transition Period (Dwapara to Treta)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: '19,876 క్రీ.పూ. – 19,576 క్రీ.పూ.',
    datesEn: '19,876 BCE – 19,576 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ సంధి',
    cycleNameEn: 'Ascending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'ఆరోహణ ద్వాపర నుండి త్రేతాయుగంలోకి ప్రవేశించే 300 సంవత్సరాల దివ్య సంధికాలం.',
    descriptionEn: '300-year transition ascending from electrical energy mastery to direct mental/telepathic power.',
    cosmicSignificanceTe: 'శక్తి యుగం నుండి మానసిక-తాత్విక దివ్య యుగంలోకి పరివర్తన.',
    cosmicSignificanceEn: 'Elevation from machine-assisted energy to direct mind-consciousness capability.',
    historicalParallelsTe: ['పూర్వ చక్ర చారిత్రక సమాంతర యుగం', 'ఆదిమ ఉన్నత విజ్ఞాన అవశేషాలు'],
    historicalParallelsEn: ['Pre-historic cyclic civilizational markers in earlier cycle', 'Paleolithic high spiritual traces']
  },
  {
    id: 'treta_ascending',
    order: 12,
    nameTe: 'ఆరోహణ త్రేతాయుగం',
    nameEn: 'Ascending Treta Yuga',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: '19,576 క్రీ.పూ. – 16,876 క్రీ.పూ.',
    datesEn: '19,576 BCE – 16,876 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ చక్రం (Ascending Cycle)',
    cycleNameEn: 'Ascending Cycle',
    category: 'treta',
    color: '#F57C00',
    textColor: '#E65100',
    arcSpanDegrees: 37.67,
    descriptionTe: 'మానవుడు సంకల్ప శక్తి, టెలిపతి, అంతఃప్రేరణలతో విశ్వ రహస్యాలను నియంత్రించే ఉత్కృష్ట జ్ఞాన యుగం.',
    descriptionEn: 'Dharma flourishes on three legs. Mastery of mental force, telepathic communion, thought-creation, and deep harmonic resonance with nature.',
    cosmicSignificanceTe: 'బాహ్య యంత్రాల అవసరం లేకుండా మానసిక సంకల్పంతోనే ప్రకృతిని నడిపించే స్థాయి.',
    cosmicSignificanceEn: 'Direct intuitive telepathy and conscious manifestation replace technological crutches.',
    historicalParallelsTe: ['పూర్వ యుగ దివ్య నాగరికతల స్వర్ణ అధ్యాయం', 'రుషులు మరియు ప్రజాపతుల తపోశక్తి'],
    historicalParallelsEn: ['Cyclical echoes of primordial Golden civilizations', 'Veneration of divine sages and Tapas power']
  },
  {
    id: 'trans_treta_satya_asc',
    order: 13,
    nameTe: 'సంధి కాలం (త్రేత – సత్య)',
    nameEn: 'Transition Period (Treta to Satya)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: '16,876 క్రీ.పూ. – 16,576 క్రీ.పూ.',
    datesEn: '16,876 BCE – 16,576 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ సంధి',
    cycleNameEn: 'Ascending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'త్రేతాయుగం నుండి పరమోన్నత సత్యయుగంలోకి ఎదిగే 300 సంవత్సరాల మహా సంధికాలం.',
    descriptionEn: '300-year transition lifting human consciousness into total alignment with the Divine Spirit.',
    cosmicSignificanceTe: 'మానసిక జ్ఞానం నుండి సాక్షాత్ పరమాత్మ ఐక్యతా దివ్యత్వాన్ని పొందే సంధి.',
    cosmicSignificanceEn: 'Final threshold crossing from mental intuition to unitive non-dual Brahman realization.',
    historicalParallelsTe: ['పూర్వ యుగ సత్య సంధికాలం'],
    historicalParallelsEn: ['Pre-historic transition to primeval purity']
  },
  {
    id: 'satya_ascending_1',
    order: 14,
    nameTe: 'ఆరోహణ సత్యయుగం (భాగం 1)',
    nameEn: 'Ascending Satya Yuga (Part 1)',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: '16,576 క్రీ.పూ. – 13,876 క్రీ.పూ.',
    datesEn: '16,576 BCE – 13,876 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ చక్రం (Ascending Cycle)',
    cycleNameEn: 'Ascending Cycle',
    category: 'satya',
    color: '#FBC02D',
    textColor: '#F57F17',
    arcSpanDegrees: 37.67,
    descriptionTe: 'ధర్మం నాలుగు పాదములతో నడిచిన స్వర్ణ యుగం (కృతయుగం). సత్యం, కరుణ, తపస్సు, పవిత్రతలే సహజ జీవన సూత్రాలు.',
    descriptionEn: 'The Golden Age (Krita Yuga) where Dharma stands whole on four legs. Pure truth, divine intuition, and absence of deceit, greed, or suffering.',
    cosmicSignificanceTe: 'మానవుడు బ్రహ్మాండ చైతన్యంతో ప్రత్యక్ష అనుసంధానంలో జీవించే పరమోత్కృష్ట దశ.',
    cosmicSignificanceEn: 'Humanity lives in perpetual communion with Ishvara; complete realization of the unity of all life.',
    historicalParallelsTe: ['వైదిక కృతయుగ దివ్య గాథలు', 'ఆదిమ మానవుని నిర్మల సత్య స్వరూపం'],
    historicalParallelsEn: ['Vedic recollections of the primordial Golden Age', 'Spontaneous spiritual enlightenment']
  },
  {
    id: 'trans_satya_asc',
    order: 15,
    nameTe: 'సంధి కాలం (సత్య యుగ అంతర్గత సంధి)',
    nameEn: 'Transition Period (Satya Mid-Sandhi)',
    durationYears: 300,
    durationLabelTe: '300 సంవత్సరాలు',
    durationLabelEn: '300 years',
    datesTe: '13,876 క్రీ.పూ. – 13,576 క్రీ.పూ.',
    datesEn: '13,876 BCE – 13,576 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ సంధి',
    cycleNameEn: 'Ascending Transition',
    category: 'transition',
    color: '#8D6E63',
    textColor: '#5D4037',
    arcSpanDegrees: 4.19,
    descriptionTe: 'సత్యయుగ ప్రథమ మరియు ద్వితీయ భాగాల మధ్య 300 సంవత్సరాల సంధికాలం.',
    descriptionEn: '300-year transition carrying Satya Yuga to its absolute zenith.',
    cosmicSignificanceTe: 'చైతన్య శిఖరాగ్ర స్థాయికి చేరుకునే దివ్య ప్రకంపన.',
    cosmicSignificanceEn: 'Harmonic deepening of supreme spiritual realization.',
    historicalParallelsTe: ['బ్రహ్మర్షుల దివ్య తపస్సులు'],
    historicalParallelsEn: ['Apex of Brahmarishi consciousness']
  },
  {
    id: 'satya_ascending_2',
    order: 16,
    nameTe: 'ఆరోహణ సత్యయుగం (భాగం 2 - శిఖరాగ్రం)',
    nameEn: 'Ascending Satya Yuga (Part 2 - Zenith)',
    durationYears: 2700,
    durationLabelTe: '2700 సంవత్సరాలు',
    durationLabelEn: '2700 years',
    datesTe: '13,576 క్రీ.పూ. – 10,876 క్రీ.పూ.',
    datesEn: '13,576 BCE – 10,876 BCE',
    cycleType: 'ascending',
    cycleNameTe: 'ఆరోహణ చక్రం (Ascending Cycle)',
    cycleNameEn: 'Ascending Cycle',
    category: 'satya',
    color: '#FFF176',
    textColor: '#F57F17',
    arcSpanDegrees: 37.67,
    descriptionTe: '25,800 సంవత్సరాల కాలచక్రంలో అత్యున్నత శిఖరాగ్ర స్థితి. మానవుడు దేవతలతో సమానమైన దివ్య తేజస్సుతో విలసిల్లిన కాలం.',
    descriptionEn: 'The absolute zenith of the 25,800-year Great Year before the Kataklysmos deluge. Humanity walked with celestial beings in pure radiant harmony.',
    cosmicSignificanceTe: 'అత్యున్నత ఆధ్యాత్మిక శిఖరం; దీని తర్వాత కటాక్లిస్మోస్ (జల ప్రళయం) ద్వారా అవరోహణ చక్రం ప్రారంభమవుతుంది.',
    cosmicSignificanceEn: 'The peak of cosmic light before the Great Year tilts into the 1200-year Kataklysmos deluge and descending arc.',
    historicalParallelsTe: [
      'అట్లాంటిస్ మరియు సత్యయుగ మహోన్నత ప్రాచీన సంస్కృతులు',
      'భూమిపై దివ్య ఋషులు మరియు దేవతల ప్రత్యక్ష సంచారం'
    ],
    historicalParallelsEn: [
      'Antediluvian peak civilization remembered in global mythologies',
      'The era of primordial seers, rishis, and divine kings'
    ]
  }
];
