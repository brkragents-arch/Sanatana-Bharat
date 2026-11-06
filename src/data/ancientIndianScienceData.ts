// Comprehensive dataset for Ancient & Modern Indian Universities, Scientists, Mathematicians, and Acharya Pingala

export interface AncientUniversityData {
  id: string;
  nameEn: string;
  nameTe: string;
  periodEn: string;
  periodTe: string;
  founderEn: string;
  founderTe: string;
  locationEn: string;
  locationTe: string;
  locationDetails?: {
    modernRegionEn: string;
    modernRegionTe: string;
    ancientKingdomEn: string;
    ancientKingdomTe: string;
    geographicSignificanceEn: string;
    geographicSignificanceTe: string;
    coordinates: string;
    mapUrl: string;
  };
  icon: string;
  image: string;
  famousPersonalitiesEn: string[];
  famousPersonalitiesTe: string[];
  highlightsEn: string[];
  highlightsTe: string[];
  knownForEn: string[];
  knownForTe: string[];
  descriptionEn: string;
  descriptionTe: string;
}

export interface AncientScientistData {
  id: string;
  nameEn: string;
  nameTe: string;
  eraEn?: string;
  eraTe?: string;
  titleEn: string;
  titleTe: string;
  fieldEn: string;
  fieldTe: string;
  icon: string;
  image: string;
  majorWorksEn: string[];
  majorWorksTe: string[];
  keyDiscoveriesEn: string[];
  keyDiscoveriesTe: string[];
  quoteOrLegacyEn: string;
  quoteOrLegacyTe: string;
}

export interface MathematicianData {
  id: string;
  number: number;
  nameEn: string;
  nameTe: string;
  periodEn: string;
  periodTe: string;
  titleEn: string;
  titleTe: string;
  image: string;
  majorContributionEn: string;
  majorContributionTe: string;
  knownForEn: string[];
  knownForTe: string[];
  quoteEn?: string;
  quoteTe?: string;
  formulaOrDiagram?: string;
}

export interface ModernScientistData {
  id: string;
  number: number;
  nameEn: string;
  nameTe: string;
  lifespan: string;
  titleEn: string;
  titleTe: string;
  keyAchievementsEn: string[];
  keyAchievementsTe: string[];
  quoteEn?: string;
  quoteTe?: string;
  icon: string;
  image: string;
}

export interface AcharyaPingalaData {
  nameEn: string;
  nameTe: string;
  titleEn: string;
  titleTe: string;
  eraEn: string;
  eraTe: string;
  treatiseEn: string;
  treatiseTe: string;
  image: string;
  summaryEn: string;
  summaryTe: string;
  majorContributionsEn: Array<{ title: string; desc: string; icon: string }>;
  majorContributionsTe: Array<{ title: string; desc: string; icon: string }>;
  binaryTable: Array<{ decimal: number; laghuGuru: string; binary: string }>;
  significanceEn: string[];
  significanceTe: string[];
}

// 1. ANCIENT UNIVERSITIES OF BHARAT
export const ANCIENT_UNIVERSITIES_DATA: AncientUniversityData[] = [
  {
    id: 'nalanda',
    image: './images/indian_history/science_portraits/uni_nalanda.jpg',
    nameEn: 'Nalanda University',
    nameTe: 'నలందా విశ్వవిద్యాలయము',
    periodEn: 'Founded: 5th Century CE',
    periodTe: 'స్థాపన: క్రీ.శ. 5వ శతాబ్దము',
    founderEn: 'Gupta Emperor Kumaragupta I (Mahendraditya)',
    founderTe: 'గుప్త చక్రవర్తి మొదటి కుమారగుప్తుడు (మహేంద్రాదిత్య)',
    locationEn: 'Rajgir (near Patna), Bihar, India',
    locationTe: 'రాజ్‌గిర్ (పాట్నా సమీపంలో), బీహార్',
    locationDetails: {
      modernRegionEn: 'Nalanda District (near Rajgir & Patna), Bihar, India',
      modernRegionTe: 'నలంద జిల్లా (రాజ్‌గిర్ & పాట్నా సమీపంలో), బీహార్, భారతదేశం',
      ancientKingdomEn: 'Magadha Empire (Gupta Dynasty & King Harsha)',
      ancientKingdomTe: 'ప్రాచీన మగధ సామ్రాజ్యం (గుప్తులు & హర్షవర్ధనుని రాజధాని క్షేత్రం)',
      geographicSignificanceEn: 'Nestled near the scenic five hills of Rajagriha in the fertile Gangetic plain; key spiritual crossroads of ancient Magadha.',
      geographicSignificanceTe: 'రాజగృహ పర్వత లోయలు మరియు గంగా మైదాన సమీపంలో సురక్షితమైన ప్రశాంత విద్యా క్షేత్రం.',
      coordinates: '25.1357° N, 85.4452° E',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nalanda+University+Ruins+Bihar'
    },
    icon: '🪷',
    famousPersonalitiesEn: ['Xuanzang (Hiuen Tsang)', 'Yijing (I-Tsing)', 'Shilabhadra (Chancellor)', 'Dharmapala', 'Aryabhata (headed astronomy)'],
    famousPersonalitiesTe: ['యువాన్ చ్వాంగ్ (హుయాన్ త్సాంగ్)', 'ఐ-త్సింగ్ (చైనా యాత్రికుడు)', 'శీలభద్రుడు (కులపతి)', 'ధర్మపాలుడు', 'ఆర్యభట్ట'],
    highlightsEn: [
      '10,000+ Students from China, Korea, Japan, Tibet, Mongolia, Sri Lanka & Central Asia',
      '2,000+ Distinguished Teachers & Gurus',
      '9-Storey Monumental Library – "Ratnasagara" (Ocean of Jewels), Ratnodadhi & Ratnaranjaka',
      'World’s first fully residential international university with completely free tuition, food & lodging'
    ],
    highlightsTe: [
      'చైనా, కొరియా, జపాన్, టిబెట్, శ్రీలంక నుండి వచ్చిన 10,000+ అంతర్జాతీయ విద్యార్థులు',
      '2,000+ మహా పండితులు మరియు గురువులు',
      '9 అంతస్తుల భారీ గ్రంథాలయం – "రత్నసాగర", రత్నోదధి మరియు రత్నరంజక నిధులు',
      'ఉచిత వసతి, భోజనం మరియు విద్యను అందించిన ప్రపంచపు మొట్టమొదటి సంపూర్ణ రెసిడెన్షియల్ విశ్వవిద్యాలయం'
    ],
    knownForEn: ['Buddhism (Mahayana & Hinayana)', 'Philosophy & Logic (Hetuvidya)', 'Vedic Sciences', 'Medicine (Ayurveda)', 'Astronomy & Mathematics', 'Sanskrit Grammar'],
    knownForTe: ['బౌద్ధ ధర్మం (మహాయాన, హీనయాన)', 'దర్శన శాస్త్రం & తర్క విద్య', 'వేదాంగ విజ్ఞానం', 'ఆయుర్వేద వైద్యం', 'ఖగోళం & గణితం', 'సంస్కృత వ్యాకరణం'],
    descriptionEn: 'The intellectual beacon of ancient Asia, Nalanda was a magnificent monastic university complex that flourished for over 700 years under the patronages of Guptas, Harsha, and the Pala Empire.',
    descriptionTe: 'ప్రాచీన ఆసియా ఖండపు జ్ఞాన దీపశిఖ. గుప్తులు, హర్షవర్ధనుడు మరియు పాల రాజుల పోషణలో 700 సంవత్సరాలకు పైగా వెలుగొందిన జగత్ప్రసిద్ధ విద్యా కేంద్రం.'
  },
  {
    id: 'takshashila',
    image: './images/indian_history/science_portraits/uni_takshashila.jpg',
    nameEn: 'Takshashila University (Taxila)',
    nameTe: 'తక్షశిల విశ్వవిద్యాలయము',
    periodEn: 'Period: 6th Century BCE onwards',
    periodTe: 'కాలము: క్రీ.పూ. 6వ శతాబ్దం నుండి',
    founderEn: 'Ancient Gandhara Kingdom (Named after Prince Taksha, son of Bharata)',
    founderTe: 'ప్రాచీన గాంధార రాజ్యం (శ్రీరాముని తమ్ముడు భరతుని కుమారుడు తక్షుని పేరిట వెలసింది)',
    locationEn: 'Gandhara (Rawalpindi district, near Islamabad, modern Pakistan)',
    locationTe: 'గాంధార ప్రాంతం (ప్రస్తుత రావల్పిండి సమీపంలో)',
    locationDetails: {
      modernRegionEn: 'Rawalpindi District, Punjab Province, Pakistan (32 km NW of Islamabad)',
      modernRegionTe: 'రావల్పిండి జిల్లా, పంజాబ్ ప్రావిన్స్, పాకిస్తాన్ (ఇస్లామాబాద్‌కు 32 కి.మీ. వాయవ్యం)',
      ancientKingdomEn: 'Ancient Gandhara Kingdom (Northern Indian Subcontinent)',
      ancientKingdomTe: 'ప్రాచీన గాంధార రాజ్యం (ఉత్తర భారత ఉపఖండం)',
      geographicSignificanceEn: 'Historic gateway on the ancient Silk Route and Indus River basin, bridging the subcontinent with Persia and Central Asia.',
      geographicSignificanceTe: 'ప్రాచీన సిల్క్ రూట్ & సింధు నదీ లోయ కూడలి; పర్షియా, మధ్య ఆసియాలను కలిపే వ్యూహాత్మక ప్రవేశ ద్వారం.',
      coordinates: '33.7460° N, 72.8397° E',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taxila+Archaeological+Ruins+Pakistan'
    },
    icon: '🌳',
    famousPersonalitiesEn: ['Chanakya (Kautilya / Vishnugupta)', 'Panini (Father of Sanskrit Linguistics)', 'Jivaka (Royal Physician to Buddha & Bimbisara)', 'Charaka (Pioneer of Ayurveda)', 'King Porus (Purushottama)'],
    famousPersonalitiesTe: ['ఆచార్య చాణక్యుడు (కౌటిల్యుడు)', 'పాణిని (సంస్కృత అష్టాధ్యాయి కర్త)', 'జీవకుడు (బుద్ధుని మరియు బింబిసారుని రాజవైద్యుడు)', 'చరకుడు (ఆయుర్వేద సంహిత కర్త)', 'పురుషోత్తముడు (పోరస్ రాజు)'],
    highlightsEn: [
      'One of the earliest residential universities in recorded human history',
      'Renowned specialized faculties where students mastered 68 different disciplines',
      'Epicenter where Chanakya composed the masterwork "Arthashastra"',
      'Panini codified Sanskrit grammar into the ultimate formal linguistic system "Ashtadhyayi"'
    ],
    highlightsTe: [
      'మానవ చరిత్రలోనే అత్యంత ప్రాచీన రెసిడెన్షియల్ విశ్వవిద్యాలయాలలో అగ్రగణ్యమైనది',
      '68 వివిధ విద్యా విభాగాలు, యుద్ధ విద్యలు మరియు శాస్త్రాలలో ప్రపంచ ప్రఖ్యాత నిపుణత',
      'ఆచార్య చాణక్యుడు తన జగద్విఖ్యాత "అర్థశాస్త్రం"ను రచించిన పవిత్ర విద్యాపీఠం',
      'పాణిని మహర్షి ప్రపంచ తొలి శాస్త్రీయ భాషా నిఘంటువు "అష్టాధ్యాయి"ని సంకలనం చేసిన ప్రదేశం'
    ],
    knownForEn: ['Statecraft & Governance', 'Economics (Varta)', 'Ayurvedic Medicine & Surgery', 'Military Strategy & Archery (Dhanurveda)', 'Four Vedas & Upanishads', 'Linguistics & 18 Arts (Shilpas)'],
    knownForTe: ['రాజనీతి శాస్త్రం & పరిపాలన', 'అర్థశాస్త్రం (ఆర్థిక విధానాలు)', 'ఆయుర్వేద వైద్యం & శస్త్రచికిత్స', 'ధనుర్వేదం & సైనిక వ్యూహాలు', 'చతుర్వేదాలు & ఉపనిషత్తులు', 'వ్యాకరణం & 18 కళలు'],
    descriptionEn: 'The cradle of strategic thought and advanced sciences, Takshashila educated great emperors, strategists, and physicians across the ancient world.',
    descriptionTe: 'ప్రాచీన ప్రపంచానికి వ్యూహాత్మక పరిపాలన, వైద్యం, మరియు శాస్త్ర విజ్ఞానాన్ని అందించిన మహోన్నత విశ్వవిద్యాలయం.'
  },
  {
    id: 'vikramshila',
    image: './images/indian_history/science_portraits/uni_vikramshila.jpg',
    nameEn: 'Vikramshila University',
    nameTe: 'విక్రమశిల విశ్వవిద్యాలయము',
    periodEn: 'Founded: late 8th Century CE (c. 783–820 CE)',
    periodTe: 'స్థాపన: క్రీ.శ. 8వ శతాబ్దము',
    founderEn: 'Pala Emperor Dharmapala',
    founderTe: 'పాల వంశ చక్రవర్తి ధర్మపాలుడు',
    locationEn: 'Bhagalpur district, Bihar, India',
    locationTe: 'భాగల్పూర్ జిల్లా, బీహార్',
    locationDetails: {
      modernRegionEn: 'Antichak Village, Kahalgaon, Bhagalpur District, Bihar, India',
      modernRegionTe: 'అంతిచక్ గ్రామం, కహల్‌గావ్, భాగల్పూర్ జిల్లా, బీహార్, భారతదేశం',
      ancientKingdomEn: 'Anga-Magadha frontier, Pala Empire (Bengal & Bihar)',
      ancientKingdomTe: 'అంగ-మగధ సరిహద్దు, పాల సామ్రాజ్యం (బెంగాల్ & బీహార్)',
      geographicSignificanceEn: 'Perched on a scenic bluff overlooking the bend of the sacred River Ganga; natural fortified spiritual academic sanctuary.',
      geographicSignificanceTe: 'పవిత్ర గంగా నదీ ప్రవాహాన్ని వీక్షించే ఎత్తైన కొండపై సురక్షిత దుర్గంలా నిర్మితమైన ఆధ్యాత్మిక విద్యా నగరం.',
      coordinates: '25.3331° N, 87.2889° E',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vikramshila+Ruins+Antichak+Bhagalpur+Bihar'
    },
    icon: '☸️',
    famousPersonalitiesEn: ['Atisha Dipankara Srijnana (reformed Tibetan Buddhism)', 'Ratnakarashanti', 'Jnanashri Mitra', 'Abhayakaragupta', 'Vairotsana'],
    famousPersonalitiesTe: ['అతీశ దీపంకరుడు (టిబెట్ బౌద్ధ ధర్మ సంస్కర్త)', 'రత్నాకరశాంతి', 'జ్ఞానశ్రీ మిత్రుడు', 'అభయాకరగుప్తుడు'],
    highlightsEn: [
      'Formed a powerful intellectual triumvirate with Nalanda and Odantapuri',
      'Massive campus with 108 temples and a central grand Chaitya holding 54 rooms',
      'Global magnet attracting scholars specifically from Tibet, China, Korea & Southeast Asia',
      'World capital for translation of Sanskrit scientific, logical, and philosophical texts into Tibetan'
    ],
    highlightsTe: [
      'నలందా, ఓదంతపురిలతో కలిసి ప్రాచీన విద్యా త్రివేణీ సంగమంగా విలసిల్లింది',
      '108 మందిరాలతో కూడిన మహా నిర్మాణం, 54 గదుల కేంద్రీయ చైత్యము',
      'టిబెట్, కొరియా, చైనా, ఆగ్నేయాసియా విద్యార్థులకు ప్రధాన ఆకర్షణ',
      'సంస్కృత శాస్త్ర, తత్వ గ్రంథాలను టిబెటన్ భాషలోకి అనువదించిన ప్రపంచ అనువాద విజ్ఞాన కేంద్రం'
    ],
    knownForEn: ['Vajrayana Buddhism', 'Pramana (Buddhist Logic & Epistemology)', 'Sanskrit Grammar & Linguistics', 'Metaphysics & Tantric Philosophy', 'Astrology & Alchemy (Rasayana)'],
    knownForTe: ['వజ్రయాన బౌద్ధ ధర్మం', 'ప్రమాణ శాస్త్రం (తార్కిక విశ్లేషణ)', 'సంస్కృత వ్యాకరణం', 'రసాయన శాస్త్రం (ఆల్కెమీ)', 'జ్యోతిషం & తాత్త్విక అనువాదాలు'],
    descriptionEn: 'Established by King Dharmapala to serve as an elite sister institution to Nalanda, Vikramshila was internationally renowned for esoteric philosophy, rigorous logic, and foreign translations.',
    descriptionTe: 'నలందాకు దీటుగా ధర్మపాల చక్రవర్తి నిర్మించిన విక్రమశిల బౌద్ధ తార్కిక విజ్ఞానానికి, తాత్త్విక అనువాదాలకు ప్రపంచ రాజధానిగా నిలిచింది.'
  },
  {
    id: 'valabhi',
    image: './images/indian_history/science_portraits/uni_valabhi.jpg',
    nameEn: 'Valabhi University',
    nameTe: 'వల్లభి విశ్వవిద్యాలయము',
    periodEn: 'Period: 5th – 8th Century CE',
    periodTe: 'కాలము: క్రీ.శ. 5వ – 8వ శతాబ్దము',
    founderEn: 'Maitraka Dynasty of Saurashtra (Gujarat)',
    founderTe: 'మైత్రక వంశ రాజులు (సౌరాష్ట్ర, గుజరాత్)',
    locationEn: 'Vallabhipur, Bhavnagar district, Gujarat, India',
    locationTe: 'వల్లభిపురం, భావ్‌నగర్ జిల్లా, గుజరాత్',
    locationDetails: {
      modernRegionEn: 'Vallabhipur, Bhavnagar District, Saurashtra Peninsula, Gujarat, India',
      modernRegionTe: 'వల్లభిపురం, భావ్‌నగర్ జిల్లా, సౌరాష్ట్ర ద్వీపకల్పం, గుజరాత్, భారతదేశం',
      ancientKingdomEn: 'Maitraka Capital, Saurashtra Realm',
      ancientKingdomTe: 'మైత్రక రాజధాని నగరం, ప్రాచీన సౌరాష్ట్ర రాజ్యం',
      geographicSignificanceEn: 'Located near the Gulf of Khambhat on the Arabian Sea coast; premier international maritime trading gateway of ancient western India.',
      geographicSignificanceTe: 'ఖంభాత్ సింధుశాఖ & అరేబియా సముద్ర తీరాన విలసిల్లిన అంతర్జాతీయ నౌకా వాణిజ్య కేంద్రం & పరిపాలనా రాజధాని.',
      coordinates: '21.8845° N, 71.8797° E',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vallabhipur+Bhavnagar+Gujarat'
    },
    icon: '🪔',
    famousPersonalitiesEn: ['Hiuen Tsang (Xuanzang – visited & documented)', 'Yijing (praised equal to Nalanda)', 'Dandin (great literary scholar)', 'Bhatta Harishena', 'Gunamati & Sthiramati (famous Buddhist scholars)'],
    famousPersonalitiesTe: ['యువాన్ చ్వాంగ్ (హుయాన్ త్సాంగ్ - వివరాలు లిఖించాడు)', 'ఐ-త్సింగ్ (నలందాతో సమానమని కొనియాడాడు)', 'దండి (మహా సాహిత్యకారుడు)', 'గుణమతి & స్థిరమతి'],
    highlightsEn: [
      'Western India’s supreme centre of higher learning, equal in prestige to Nalanda in the east',
      'Graduates were directly selected for high administrative offices and courts across kingdoms',
      'Famous 100+ Buddhist monasteries housing over 6,000 scholar-monks',
      'Concurrently patronized Hinayana Buddhism, Vedic Brahmanism, and prosperous maritime trade guilds'
    ],
    highlightsTe: [
      'తూర్పున నలందాలాగా పశ్చిమ భారతదేశంలో అత్యున్నత విద్యా పీఠంగా ప్రసిద్ధి చెందింది',
      'ఇక్కడి గ్రాడ్యుయేట్లను వివిధ దేశాల రాజులు నేరుగా ఉన్నత న్యాయ, పరిపాలనా పదవులలో నియమించేవారు',
      '6,000+ విద్వాంసులు అధ్యయనం చేసిన 100కి పైగా విహారాలు',
      'హీనయాన బౌద్ధం, వైదిక ధర్మం మరియు అంతర్జాతీయ సముద్ర వాణిజ్య వర్తక శ్రేణుల సమన్వయం'
    ],
    knownForEn: ['Jurisprudence & Law (Dharmashastra)', 'Economics, Commerce & Maritime Trade', 'Public Administration & Statecraft', 'Medicine (Ayurveda)', 'Buddhist Hinayana Philosophy', 'Classical Literature & Grammar'],
    knownForTe: ['న్యాయశాస్త్రం & ధర్మశాస్త్రాలు', 'వాణిజ్యం, అర్థశాస్త్రం & సముద్ర వర్తకం', 'రాజ్య పరిపాలనా శాస్త్రం', 'ఆయుర్వేద వైద్యం', 'సాహిత్యం & వ్యాకరణం'],
    descriptionEn: 'Situated on the bustling Arabian Sea trade coast, Valabhi was famed for producing elite civil administrators, ambassadors, lawyers, and economists of ancient India.',
    descriptionTe: 'అరేబియా సముద్ర తీరాన విలసిల్లిన వల్లభి ప్రాచీన భారతదేశంలో అత్యుత్తమ పరిపాలనాధికారులు, న్యాయవాదులు మరియు వాణిజ్యవేత్తలను తీర్చిదిద్దిన విశ్వవిద్యాలయం.'
  }
];

// 2. ANCIENT INDIAN SCIENTISTS AND THEIR DISCOVERIES
export const ANCIENT_SCIENTISTS_DATA: AncientScientistData[] = [
  {
    id: 'charaka',
    image: './images/indian_history/science_portraits/ancient_charaka.jpg',
    nameEn: 'Maharshi Charaka',
    nameTe: 'మహర్షి చరకుడు',
    eraEn: 'c. 300 – 200 BCE',
    eraTe: 'క్రీ.పూ. 300 – 200 (3వ – 2వ శతాబ్దం)',
    titleEn: 'Father of Medicine',
    titleTe: 'భారతీయ వైద్య శాస్త్ర పితామహుడు',
    fieldEn: 'Ayurvedic Medicine, Holistic Health & Pharmacology',
    fieldTe: 'ఆయుర్వేద వైద్యం, సమగ్ర ఆరోగ్యం & ఔషధ విజ్ఞానం',
    icon: '🌿',
    majorWorksEn: ['Charaka Samhita (foundational encyclopedia of internal medicine)'],
    majorWorksTe: ['చరక సంహిత (ఆయుర్వేద కాయచికిత్స ప్రామాణిక మూలగ్రంథం)'],
    keyDiscoveriesEn: [
      'Holistic approach uniting body, mind, senses, and soul (Tridosha: Vata, Pitta, Kapha)',
      'Human anatomy, physiology, and circulation of fluids (Rasa/Rakta)',
      'Extensive pharmacology categorizing hundreds of medicinal herbs and formulations',
      'Prevention of illness through daily regimens (Dinacharya) and seasonal balance (Ritucharya)'
    ],
    keyDiscoveriesTe: [
      'శరీరం, మనస్సు, ఆత్మల సమగ్ర సమతుల్యత (వాత, పిత్త, కఫ త్రిదోష సిద్ధాంతం)',
      'శరీర నిర్మాణ శాస్త్రం మరియు జీవద్రవాల ప్రసరణ విశ్లేషణ',
      'వందలాది మూలికలు, రసాయనాల ఔషధ గుణాల వర్గీకరణ (ఫార్మకాలజీ)',
      'దినచర్య, ఋతుచర్యల ద్వారా వ్యాధి నివారణే పరమౌషధమనే సిద్ధాంతం'
    ],
    quoteOrLegacyEn: 'A physician who fails to enter the body of a patient with the lamp of knowledge and understanding can never treat diseases.',
    quoteOrLegacyTe: 'జ్ఞానమనే దీపాన్ని వెలిగించి రోగి అంతరంగాన్ని అర్థం చేసుకోలేని వైద్యుడు వ్యాధిని ఎన్నటికీ నయం చేయలేడు.'
  },
  {
    id: 'varahamihira',
    image: './images/indian_history/science_portraits/ancient_varahamihira.jpg',
    nameEn: 'Varahamihira',
    nameTe: 'వరాహమిహిరుడు',
    eraEn: '505 – 587 CE (6th c. CE)',
    eraTe: 'క్రీ.శ. 505 – 587 (6వ శతాబ్దం)',
    titleEn: 'Father of Astronomy',
    titleTe: 'ఖగోళ విజ్ఞాన పితామహుడు',
    fieldEn: 'Astronomy, Mathematics & Natural Sciences',
    fieldTe: 'ఖగోళ శాస్త్రం, గణితం & భౌతిక విజ్ఞానం',
    icon: '🪐',
    majorWorksEn: ['Panchasiddhantika (Synthesis of 5 Astronomical Treatises)', 'Brihat Samhita (Magnum Opus Encyclopedia)', 'Brihat Jataka'],
    majorWorksTe: ['పంచసిద్ధాంతిక (సూర్య, వసిష్ఠ, పౌలిశ, రోమక, పితామహ సిద్ధాంతాల సమాహారం)', 'బృహత్సంహిత (సమగ్ర విజ్ఞాన సర్వస్వం)', 'బృహజ్జాతకం'],
    keyDiscoveriesEn: [
      'Accurate calculation of planetary orbits, motions, and retrogrades',
      'Scientific explanation of Solar and Lunar eclipses caused by shadows of the Moon and Earth',
      'Discovery that the Moon and planets shine by reflected sunlight',
      'Precise calendrical computations, equinox shifts, and planetary conjunctions'
    ],
    keyDiscoveriesTe: [
      'గ్రహాల కక్ష్యలు, గమనాలు మరియు వక్రగతుల ఖచ్చితమైన గణన',
      'సూర్య, చంద్ర గ్రహణాలు ఛాయల వల్ల కలుగుతాయనే శాస్త్రీయ నిరూపణ',
      'చంద్రుడు, ఇతర గ్రహాలు సూర్యకాంతి ప్రతిఫలనం వల్లే ప్రకాశిస్తాయని స్పష్టీకరణ',
      'ఖచ్చితమైన పంచాంగ గణనాలు, విషువత్తులు, వాతావరణ అంచనాలు'
    ],
    quoteOrLegacyEn: 'The Moon shines through reflected sunlight; an eclipse occurs when the Moon enters the shadow of the Earth.',
    quoteOrLegacyTe: 'చంద్రుడు స్వయంప్రకాశకుడు కాడు, సూర్యుని కాంతి ప్రతిఫలనమే వెన్నెల; భూమి నీడ చంద్రునిపై పడినప్పుడే గ్రహణం ఏర్పడుతుంది.'
  },
  {
    id: 'bhaskara',
    image: './images/indian_history/science_portraits/ancient_bhaskara.jpg',
    nameEn: 'Bhaskara II (Bhaskaracharya)',
    nameTe: 'భాస్కరాచార్యుడు II',
    eraEn: '1114 – 1185 CE (12th c. CE)',
    eraTe: 'క్రీ.శ. 1114 – 1185 (12వ శతాబ్దం)',
    titleEn: 'Father of Gravity & Calculus Pioneer',
    titleTe: 'గురుత్వాకర్షణ & కలనగణిత మార్గదర్శకుడు',
    fieldEn: 'Gravity, Mathematics, Differential Calculus & Trigonometry',
    fieldTe: 'గురుత్వాకర్షణ, గణితం, కలన గణితం & త్రికోణమితి',
    icon: '🍎',
    majorWorksEn: ['Siddhanta Shiromani (comprising Lilavati, Bijaganita, Grahaganita, and Goladhyaya)', 'Karanakutuhala'],
    majorWorksTe: ['సిద్ధాంత శిరోమణి (లీలావతి, బీజగణితం, గ్రహగణితం, గోళాధ్యాయం)', 'కరణకుతూహలం'],
    keyDiscoveriesEn: [
      'Law of Gravity centuries before Newton: Earth naturally attracts celestial bodies by an innate force (Akrishta Shakti)',
      'Early Differential Calculus: concept of instantaneous motion (Tatkaliki Gati) and derivative d/dx',
      'Rigorous arithmetic of Infinity (Khahara): division of any quantity by zero yields infinity (a / 0 = ∞)',
      'Chakravala algorithm for solving cyclic indeterminate quadratic equations'
    ],
    keyDiscoveriesTe: [
      'న్యూటన్ కంటే 500 ఏళ్ల ముందే భూమికి సహజ ఆకర్షణ శక్తి (ఆకృష్ట శక్తి - గురుత్వాకర్షణ) ఉందని నిరూపణ',
      'డిఫరెన్షియల్ కాలిక్యులస్ సూత్రాలు: తక్షణ వేగం (తాత్కాలికీ గతి) మరియు d/dx భావన',
      'అనంతం (ఖహర) సిద్ధాంతం: ఏ సంఖ్యనైనా సున్నాతో భాగిస్తే అనంతం (∞) లభిస్తుందని వివరణ',
      'చక్రవాల పద్ధతి ద్వారా క్లిష్టమైన వర్గ సమీకరణాల సాధన'
    ],
    quoteOrLegacyEn: 'Objects fall on earth due to one force. The Earth possesses an inherent attractive power by which it draws all heavy things toward itself.',
    quoteOrLegacyTe: 'భూమికి ఒక స్వాభావిక ఆకర్షణ శక్తి ఉన్నది, దాని ప్రభావం చేతనే సమస్త వస్తువులు సహజంగా నేలపై పడతాయి.'
  },
  {
    id: 'kalidasa',
    image: './images/indian_history/science_portraits/ancient_kalidasa.jpg',
    nameEn: 'Mahakavi Kalidasa',
    nameTe: 'మహాకవి కాళిదాసు',
    eraEn: 'c. 4th – 5th Century CE (Gupta Era)',
    eraTe: 'క్రీ.శ. 4వ – 5వ శతాబ్దం (గుప్త స్వర్ణయుగం)',
    titleEn: 'Father of Classical Literature',
    titleTe: 'సంస్కృత సాహిత్య చక్రవర్తి',
    fieldEn: 'Classical Sanskrit Poetry, Dramaturgy & Aesthetics',
    fieldTe: 'సంస్కృత మహాకావ్యాలు, నాటకకళ & రస సిద్ధాంతం',
    icon: '🪶',
    majorWorksEn: ['Abhijnana Shakuntalam', 'Meghaduta (The Cloud Messenger)', 'Raghuvamsha', 'Kumarasambhava', 'Vikramorvashiyam', 'Malavikagnimitram'],
    majorWorksTe: ['అభిజ్ఞాన శాకుంతలము', 'మేఘదూతము (సందేశ కావ్యం)', 'రఘువంశము', 'కుమారసంభవము', 'విక్రమోర్వశీయము', 'మాళవికాగ్నిమిత్రము'],
    keyDiscoveriesEn: [
      'Immortal poetic imagery elevating Sanskrit kavya to global world-literature status',
      'Pioneered the "Sandesha Kavya" (Messenger Poetry) genre in Meghaduta, imitated across millennia',
      'Unsurpassed psychological depth and portrayal of nature, human emotions, and divine romance',
      'Celebrated as the Shakespeare of India by international luminaries including Goethe'
    ],
    keyDiscoveriesTe: [
      'సంస్కృత కావ్య శైలిని విశ్వ సాహిత్య శిఖరాలకు చేర్చిన అసమాన ఉపమాన సౌందర్యం ("ఉపమా కాళిదాసస్య")',
      'మేఘదూతం ద్వారా "సందేశ కావ్యం" అనే నూతన ప్రక్రియను ప్రపంచానికి పరిచయం చేసాడు',
      'ప్రకృతి, మానవ హృదయ భావోద్వేగాలు, మరియు శృంగార-కరుణ రసాల అద్భుత సమ్మేళనం',
      'జర్మన్ మహాకవి గేథేతో సహా ప్రపంచ పండితులచే కొనియాడబడిన జగద్విఖ్యాత నాటకకర్త'
    ],
    quoteOrLegacyEn: 'Kalidasa’s Shakuntala is the meeting point of earth and heaven; in it, innocence matures into sublime love.',
    quoteOrLegacyTe: 'భూలోకం స్వర్గలోకంతో సంగమించే దివ్య కావ్యం శాకుంతలం; నిర్మలమైన ప్రేమ పరిపక్వతకు కాళిదాసు రచనలే నిదర్శనం.'
  },
  {
    id: 'kanada',
    image: './images/indian_history/science_portraits/ancient_kanada.jpg',
    nameEn: 'Maharshi Kanada (Kashyapa / Uluka)',
    nameTe: 'మహర్షి కణాదుడు',
    eraEn: 'c. 600 – 200 BCE (6th – 2nd c. BCE)',
    eraTe: 'క్రీ.పూ. 6వ – 2వ శతాబ్దం (సుమారు క్రీ.పూ. 600 – 200)',
    titleEn: 'Father of Atomic Theory',
    titleTe: 'పరమాణు సిద్ధాంత పితామహుడు',
    fieldEn: 'Atomic Physics, Metaphysics & Logic (Vaisheshika Darshana)',
    fieldTe: 'పరమాణు భౌతికశాస్త్రం, తత్త్వశాస్త్రం (వైశేషిక దర్శనం)',
    icon: '⚛️',
    majorWorksEn: ['Vaisheshika Sutra (first systematic physical theory of matter)'],
    majorWorksTe: ['వైశేషిక సూత్రములు (పదార్థ భౌతిక విజ్ఞాన మూల సూత్రాలు)'],
    keyDiscoveriesEn: [
      'Theory of Atoms (Paramanu / Anu): matter cannot be divided infinitely; its indivisible indestructible fundamental unit is the atom',
      'Dvyanuka (diatomic) and Tryanuka (triatomic) molecules formed by chemical bonding',
      'Systematic classification of matter into 9 Dravyas (Substances), 24 Gunas (Qualities), and Karmas (Actions)',
      'Heat and light transformation causes physical and chemical changes (Pilupaka and Pitharapaka)'
    ],
    keyDiscoveriesTe: [
      'పరమాణు సిద్ధాంతం: పదార్థాన్ని విభజించుకుంటూ పోతే ఇక విభజించలేని అతిసూక్ష్మ, శాశ్వత రేణువే "పరమాణువు" (Anu)',
      'ద్వృణుక (రెండు పరమాణువులు), త్ర్యంశుక (మూడు పరమాణువులు) కలిసి రసాయన బంధాల ద్వారా అణువులు ఏర్పడతాయని సిద్ధాంతం',
      'సృష్టిలోని సమస్త పదార్థాలను 9 ద్రవ్యాలు, 24 గుణాలు, కర్మలుగా వర్గీకరణ',
      'తేజస్సు (వేడి/కాంతి) సంయోగం వల్ల పదార్థాలలో మార్పులు (రసాయన చర్యలు - పీలుపాక, పిఠరపాక) కలుగుతాయని నిరూపణ'
    ],
    quoteOrLegacyEn: 'Every object of creation is made up of atoms which in turn connect with each other to form molecules.',
    quoteOrLegacyTe: 'సృష్టిలోని ప్రతి వస్తువు పరమాణువులతో నిర్మితమైనది; ఆ పరమాణువులు పరస్పరం కలిసి అణువులుగా ఏర్పడతాయి.'
  },
  {
    id: 'aryabhatta',
    image: './images/indian_history/science_portraits/ancient_aryabhatta.jpg',
    nameEn: 'Aryabhata',
    nameTe: 'ఆర్యభట్టు',
    eraEn: '476 – 550 CE (5th – 6th c. CE)',
    eraTe: 'క్రీ.శ. 476 – 550 (5వ – 6వ శతాబ్దం)',
    titleEn: 'Father of Indian Mathematics & Zero',
    titleTe: 'భారతీయ గణిత & ఖగోళ పితామహుడు',
    fieldEn: 'Mathematics, Decimal Place-Value & Astronomy',
    fieldTe: 'గణితం, దశాంశ సంఖ్యా విధానం & ఖగోళ శాస్త్రం',
    icon: '0️⃣',
    majorWorksEn: ['Aryabhatiya (499 CE)', 'Arya-siddhanta'],
    majorWorksTe: ['ఆర్యభట్టీయం (క్రీ.శ. 499)', 'ఆర్యసిద్ధాంతం'],
    keyDiscoveriesEn: [
      'Formulated the decimal place-value system and zero as both a symbol and operational concept',
      'Calculated the value of Pi accurately to 4 decimal places: π ≈ 3.1416 (62832 / 20000)',
      'Asserted that the Earth is spherical and rotates daily on its own axis, explaining day and night',
      'Invented Trigonometric Sine (Jya) and Cosine (Kojya) tables, solving quadratic equations'
    ],
    keyDiscoveriesTe: [
      'దశాంశ స్థానవిలువ పద్ధతి మరియు సున్నా (0) భావనను ప్రపంచానికి అందించాడు',
      'పై (π) ఖచ్చిత విలువను 4 దశాంశ స్థానాల వరకు కనుగొన్నాడు: π ≈ 3.1416 (62832 / 20000)',
      'భూమి గోళాకారంగా ఉండి తన అక్షంపై తాను తిరుగుతుందని, దీనివల్లే రాత్రింబవళ్ళు ఏర్పడుతున్నాయని తొలిసారి చాటాడు',
      'త్రికోణమితిలో సైన్ (జ్య), కొసైన్ (కోజ్య) పట్టికలను ఆవిష్కరించి బీజగణిత సమీకరణాలను సాధించాడు'
    ],
    quoteOrLegacyEn: 'Just as a person in a moving boat sees stationary trees moving backward, so people on Earth see stationary stars moving westwards due to Earth’s rotation.',
    quoteOrLegacyTe: 'కదులుతున్న పడవలో ఉన్న వ్యక్తికి ఒడ్డున ఉన్న చెట్లు వెనుకకు వెళ్తున్నట్లు కనిపించినట్లే, భూమి భ్రమణం వల్ల స్థిరమైన నక్షత్రాలు పశ్చిమానికి కదులుతున్నట్లు కనిపిస్తాయి.'
  },
  {
    id: 'sushruta',
    image: './images/indian_history/science_portraits/ancient_sushruta.jpg',
    nameEn: 'Maharshi Sushruta',
    nameTe: 'మహర్షి సుశ్రుతుడు',
    eraEn: 'c. 1000 – 600 BCE (Vedic Period)',
    eraTe: 'క్రీ.పూ. 1000 – 600 (వేద కాలం)',
    titleEn: 'Father of Surgery & Plastic Surgery',
    titleTe: 'శస్త్రచికిత్స & ప్లాస్టిక్ సర్జరీ పితామహుడు',
    fieldEn: 'Surgery, Anatomy, Plastic Surgery & Surgical Instrumentation',
    fieldTe: 'శస్త్రచికిత్స, శారీరక నిర్మాణ శాస్త్రం & సర్జికల్ పరికరాలు',
    icon: '✂️',
    majorWorksEn: ['Sushruta Samhita (foundational master text of surgery)'],
    majorWorksTe: ['సుశ్రుత సంహిత (ప్రపంచ ప్రసిద్ధ శస్త్రచికిత్సా శాస్త్రం)'],
    keyDiscoveriesEn: [
      'Pioneered Rhinoplasty (reconstruction of amputated noses using forehead cheek flaps) – direct basis of modern plastic surgery',
      'Extracapsular Cataract Surgery (couching technique) using curved needles',
      'Designed and classified over 121 precise steel surgical instruments (Yantras & Shastras)',
      'Pioneered caesarean section, kidney stone removal, fracture setting, and sterile techniques'
    ],
    keyDiscoveriesTe: [
      'రైనోప్లాస్టీ (చెక్ ఫ్లాప్ ద్వారా ముక్కును పునర్నిర్మించే శస్త్రచికిత్స) – ఆధునిక ప్లాస్టిక్ సర్జరీకి ఇదే మూలపునాది',
      'కంటిశుక్లం (క్యాటరాక్ట్) శస్త్రచికిత్సను వక్ర సూది ద్వారా విజయవంతంగా నిర్వహించాడు',
      '121 కంటే ఎక్కువ ఉక్కు శస్త్రచికిత్సా పరికరాలను (యంత్రాలు, శస్త్రాలు) రూపొందించి వర్గీకరించాడు',
      'సిజేరియన్ కాన్పు, మూత్రపిండాల రాళ్లు తొలగింపు, ఎముకల కట్లు మరియు క్రిమిసంహారక పద్ధతుల ఆవిష్కరణ'
    ],
    quoteOrLegacyEn: 'Surgery is the first and highest division of the healing art, purest in itself, most esteemed, and eternal.',
    quoteOrLegacyTe: 'వైద్య కళలలో శస్త్రచికిత్స అత్యున్నతమైనది, ప్రాచీనమైనది మరియు తక్షణ ప్రాణరక్షణ కలిగించే పరమ పవిత్రమైన విద్య.'
  }
];

// 3. INDIAN MATHEMATICIANS EXPLAINED (10 LEGENDARY MINDS)
export const INDIAN_MATHEMATICIANS_DATA: MathematicianData[] = [
  {
    id: 'baudhayana',
    image: './images/indian_history/science_portraits/math_baudhayana.jpg',
    number: 1,
    nameEn: 'Baudhayana',
    nameTe: 'బౌధాయనుడు',
    periodEn: 'c. 800 – 500 BCE',
    periodTe: 'క్రీ.పూ. 800 – 500',
    titleEn: 'The Pioneer of Geometry',
    titleTe: 'క్షేత్రగణిత (జామెట్రీ) ఆద్యుడు',
    majorContributionEn: 'Authored the Sulba Sutras containing geometric constructions and the earliest statement of the Pythagorean Theorem.',
    majorContributionTe: 'శుల్బ సూత్రాల కర్త; పైథాగరస్ సిద్ధాంతాన్ని పైథాగరస్ కంటే శతాబ్దాల ముందే రేఖాగణిత రీతిలో నిరూపించాడు.',
    knownForEn: [
      'Baudhayana Theorem: "The diagonal of a rectangle produces by itself both the areas which produce the sides" (a² + b² = c²)',
      'Geometric quadrature of the circle and circling of the square',
      'Accurate approximation of √2 = 1 + 1/3 + 1/(3×4) - 1/(3×4×34) ≈ 1.4142156'
    ],
    knownForTe: [
      'బౌధాయన సిద్ధాంతం: దీర్ఘచతురస్ర కర్ణంపై నిర్మించిన చతురస్ర వైశాల్యం మిగిలిన రెండు భుజాల చతురస్రాల వైశాల్యాల మొత్తానికి సమానం (a² + b² = c²)',
      'యజ్ఞవేదికల కొలతల కొరకు వృత్త చతురస్రీకరణం మరియు చతురస్ర వృత్తీకరణం',
      '√2 (రెండు యొక్క వర్గమూలం) విలువను అత్యంత ఖచ్చితత్వంతో లెక్కించాడు (1.4142156)'
    ],
    quoteEn: 'Geometry was not just a subject, it was the foundation of every sacred construction.',
    quoteTe: 'రేఖాగణితం కేవలం పాఠం కాదు, అది సమస్త దివ్య నిర్మాణాలకు మూల పునాది.',
    formulaOrDiagram: 'a² + b² = c²'
  },
  {
    id: 'aryabhata_math',
    image: './images/indian_history/science_portraits/math_aryabhata_math.jpg',
    number: 2,
    nameEn: 'Aryabhata',
    nameTe: 'ఆర్యభట్టు',
    periodEn: '476 – 550 CE',
    periodTe: 'క్రీ.శ. 476 – 550',
    titleEn: 'The Father of Indian Mathematics',
    titleTe: 'భారతీయ గణితశాస్త్ర పితామహుడు',
    majorContributionEn: 'Author of Aryabhatiya – introduced zero, place value, decimal system, and precise value of Pi (π).',
    majorContributionTe: 'ఆర్యభట్టీయ కర్త – సున్నా, దశాంశ పద్ధతి, పై (π) ఖచ్చిత విలువ మరియు బీజగణిత ఆవిష్కరణలు.',
    knownForEn: [
      'Calculated π ≈ 3.1416 explicitly recognized as an approximation (Asanna)',
      'Algebraic summation formulas for sums of integers, squares, and cubes',
      'Table of Sines (Jya) in 24 equal steps of 3° 45′ each',
      'Proof that the Earth rotates on its own axis causing day and night'
    ],
    knownForTe: [
      'పై (π) విలువను 3.1416 గా లెక్కించి, అది "ఆసన్న" (సుమారు) విలువ అని స్పష్టపరిచాడు',
      'సంఖ్యలు, వర్గాలు, ఘనాల మొత్తాల కొరకు బీజగణిత సూత్రాలు',
      '3° 45′ అంతరాలతో 24 మెట్లతో కూడిన త్రికోణమితి సైన్ (జ్య) పట్టికలు',
      'భూమి తన అక్షంపై తాను తిరుగుతుందని శాస్త్రీయ నిరూపణ'
    ],
    quoteEn: 'The Earth rotates on its axis, causing day and night.',
    quoteTe: 'భూమి తన అక్షంపై తాను తిరుగుతూ ఉండడం వలనే అహోరాత్రములు (రాత్రింబవళ్ళు) ఏర్పడుతున్నాయి.',
    formulaOrDiagram: 'π ≈ 3.1416'
  },
  {
    id: 'brahmagupta',
    image: './images/indian_history/science_portraits/math_brahmagupta.jpg',
    number: 3,
    nameEn: 'Brahmagupta',
    nameTe: 'బ్రహ్మగుప్తుడు',
    periodEn: '598 – 668 CE',
    periodTe: 'క్రీ.శ. 598 – 668',
    titleEn: 'The Master of Zero',
    titleTe: 'సున్నా మరియు రుణసంఖ్యల సార్వభౌముడు',
    majorContributionEn: 'Author of Brahmasphutasiddhanta – established the world’s first formal mathematical rules for arithmetic operations with zero and negative numbers.',
    majorContributionTe: 'బ్రహ్మస్ఫుటసిద్ధాంత కర్త – సున్నా మరియు రుణ సంఖ్యల (నెగటివ్ నంబర్స్) గణిత నియమాలను ప్రపంచంలోనే మొట్టమొదట ప్రతిపాదించాడు.',
    knownForEn: [
      'Rules for operations with zero: 0 + a = a, 0 - a = -a, a × 0 = 0',
      'Rules for negative numbers: negative times negative equals positive (Fortune × Fortune, Debt × Debt)',
      'Brahmagupta’s Formula for the area of a cyclic quadrilateral: A = √[(s-a)(s-b)(s-c)(s-d)]',
      'Identity: a² - b² = (a - b)(a + b) and Brahmagupta-Fibonacci identity'
    ],
    knownForTe: [
      'సున్నా పరిక్రియల నియమాలు: 0 + a = a, 0 - a = -a, a × 0 = 0',
      'రుణ సంఖ్యల నియమాలు: రుణ సంఖ్యను రుణ సంఖ్యతో గుణిస్తే ధన సంఖ్య వస్తుంది (రుణం × రుణం = ధనం)',
      'చక్రీయ చతుర్భుజ వైశాల్య సూత్రం: A = √[(s-a)(s-b)(s-c)(s-d)]',
      'బీజగణిత సూత్రం: a² - b² = (a - b)(a + b)'
    ],
    quoteEn: 'Zero is a number, and numbers are not just positive.',
    quoteTe: 'సున్నా ఒక సంపూర్ణ సంఖ్య, సంఖ్యలు కేవలం ధనాత్మకమైనవి మాత్రమే కావు.',
    formulaOrDiagram: 'a² - b² = (a - b)(a + b)'
  },
  {
    id: 'bhaskara_ii',
    image: './images/indian_history/science_portraits/math_bhaskara_ii.jpg',
    number: 4,
    nameEn: 'Bhaskara II',
    nameTe: 'భాస్కరాచార్యుడు II',
    periodEn: '1114 – 1185 CE',
    periodTe: 'క్రీ.శ. 1114 – 1185',
    titleEn: 'The Great Mathematical Scholar',
    titleTe: 'మహా గణిత విద్వాంసుడు',
    majorContributionEn: 'Author of Siddhanta Shiromani – gave the Chakravala method for indeterminate equations, early concepts of calculus, and summation formulas.',
    majorContributionTe: 'సిద్ధాంత శిరోమణి కర్త – చక్రవాల పద్ధతి ద్వారా పెల్ సమీకరణాల సాధన, కలనగణిత బీజాలు, శ్రేణుల మొత్తాలు.',
    knownForEn: [
      'Chakravala method: cyclic algorithm to solve indeterminate quadratic equations like Nx² + 1 = y²',
      'Concept of differential coefficient: dy/dx = cos x dx for y = sin x',
      'Summation of natural numbers: ∑ k = n(n+1)/2 and infinite series foundations',
      'Proof of division by zero approaching infinity'
    ],
    knownForTe: [
      'చక్రవాల పద్ధతి: Nx² + 1 = y² వంటి క్లిష్ట సమీకరణాల సాధనకు సైక్లిక్ అల్గారిథమ్',
      'డిఫరెన్షియల్ కాలిక్యులస్ సూత్రం: y = sin x కి అవకలజం cos x',
      'సహజ సంఖ్యల మొత్తపు సూత్రం: ∑ k = n(n+1)/2',
      'సున్నాతో భాగిస్తే అనంతం లభిస్తుందనే రుజువు'
    ],
    quoteEn: 'A mathematician’s mind is a palace where numbers are the jewels.',
    quoteTe: 'గణితజ్ఞుని మేధస్సు ఒక రాజభవనం, అందులో సంఖ్యలే అమూల్యమైన రత్నాలు.',
    formulaOrDiagram: '∑ k = n(n+1)/2'
  },
  {
    id: 'mahavira',
    image: './images/indian_history/science_portraits/math_mahavira.jpg',
    number: 5,
    nameEn: 'Mahāvīra',
    nameTe: 'మహావీరాచార్యుడు',
    periodEn: '850 – 910 CE',
    periodTe: 'క్రీ.శ. 850 – 910',
    titleEn: 'The Genius of Jain Mathematics',
    titleTe: 'జైన గణిత మేధావి',
    majorContributionEn: 'Author of Ganita Sara Sangraha – the first standalone comprehensive textbook on mathematics in India separate from astronomy.',
    majorContributionTe: 'గణిత సార సంగ్రహ కర్త – ఖగోళంతో సంబంధం లేకుండా కేవలం గణిత శాస్త్రంపై వెలువడిన తొలి స్వతంత్ర గ్రంథం.',
    knownForEn: [
      'Permutations and combinations formula: nCr = [n(n-1)...(n-r+1)] / [r(r-1)...1]',
      'Formulas for arithmetic and geometric series, zero rules, and fractions',
      'Area and perimeter approximations for ellipses and geometric solids',
      'Indeterminate equations and unit fraction decompositions'
    ],
    knownForTe: [
      'సంయోగాలు మరియు క్రమచయాల సూత్రం: nCr గణన పద్ధతి',
      'అంకశ్రేఢి, గుణశ్రేఢి సూత్రాలు, భిన్నాల విభజన పద్ధతులు',
      'దీర్ఘవృత్త వైశాల్య గణన మరియు ఘనపరిమాణాల సూత్రాలు',
      'ఏక భిన్నాల విభజన మరియు ప్రత్యేక వర్గ సమీకరణాల సాధన'
    ],
    quoteEn: 'In numbers lies the beauty of patterns; in patterns lies the order of the universe.',
    quoteTe: 'సంఖ్యలలో క్రమబద్ధమైన సౌందర్యం ఉంటుంది; ఆ రూపాలలోనే విశ్వం యొక్క నియమం దాగి ఉన్నది.',
    formulaOrDiagram: 'nCr Combinatorics'
  },
  {
    id: 'nilakantha',
    image: './images/indian_history/science_portraits/math_nilakantha.jpg',
    number: 6,
    nameEn: 'Nilakantha Somayaji',
    nameTe: 'నీలకంఠ సోమయాజి',
    periodEn: '1444 – 1544 CE',
    periodTe: 'క్రీ.శ. 1444 – 1544',
    titleEn: 'The Pioneer of Infinite Calculus',
    titleTe: 'అనంత కలనగణిత అన్వేషకుడు',
    majorContributionEn: 'Author of Tantrasangraha and Aryabhatiyabhasya – gave fast-converging infinite series for Pi (π) and developed the planetary model centuries ahead of Tycho Brahe.',
    majorContributionTe: 'తంత్రసంగ్రహ కర్త – పై (π) కొరకు వేగంగా ఖచ్చితత్వాన్నిచ్చే అనంత శ్రేణులు మరియు టైకో బ్రాహే కంటే ముందే గ్రహగతుల సవరణ నమూనా.',
    knownForEn: [
      'Fast infinite series for Pi: π = 3 + 4/(2×3×4) - 4/(4×5×6) + 4/(6×7×8) - ...',
      'Calculated π ≈ 3.14159265358979... accurate to 17 decimal places',
      'Developed modified quasi-heliocentric planetary model where Mercury, Venus, Mars, Jupiter, Saturn orbit the Sun, which orbits Earth',
      'Anticipated Newton-Leibniz power series by centuries'
    ],
    knownForTe: [
      'పై (π) కొరకు వేగవంతమైన అనంత శ్రేణి: π = 3 + 4/(2×3×4) - 4/(4×5×6) + ...',
      'పై విలువను 17 దశాంశ స్థానాల వరకు ఖచ్చితంగా లెక్కించాడు (3.14159265358979...)',
      'బుధ, శుక్ర, కుజ, గురు, శనులు సూర్యుని చుట్టూ తిరుగుతారనే శాస్త్రీయ గ్రహ నమూనా',
      'యూరప్‌లో న్యూటన్ కంటే శతాబ్దాల ముందే అనంత శ్రేణుల ఆవిష్కరణ'
    ],
    quoteEn: 'The closer you look, the more infinite mathematics becomes.',
    quoteTe: 'లోతుగా పరిశీలించే కొద్దీ గణితం అనంత విస్తారంగా వికసిస్తుంది.',
    formulaOrDiagram: 'π ≈ 3.14159265359...'
  },
  {
    id: 'madhava',
    image: './images/indian_history/science_portraits/math_madhava.jpg',
    number: 7,
    nameEn: 'Madhava of Sangamagrama',
    nameTe: 'సంగమగ్రామ మాధవుడు',
    periodEn: '1340 – 1425 CE',
    periodTe: 'క్రీ.శ. 1340 – 1425',
    titleEn: 'The Founder of the Kerala School',
    titleTe: 'కేరళ గణిత పాఠశాల స్థాపకుడు',
    majorContributionEn: 'First mathematician in world history to develop infinite power series expansions for trigonometric functions: Sine, Cosine, and Arctangent (laying the true foundation of calculus).',
    majorContributionTe: 'ప్రపంచ చరిత్రలోనే మొట్టమొదటిసారిగా సైన్, కొసైన్, ఆర్క్‌టాంజెంట్‌ల కొరకు అనంత ఘాత శ్రేణులను (ఇన్ఫినిట్ సిరీస్) ఆవిష్కరించిన కలనగణిత జనకుడు.',
    knownForEn: [
      'Madhava-Leibniz Series: π/4 = 1 - 1/3 + 1/5 - 1/7 + ... (nearly 300 years before Leibniz)',
      'Madhava-Newton Series: sin x = x - x³/3! + x⁵/5! - x⁷/7! + ...',
      'Cosine series: cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ...',
      'Step-by-step passage from finite to infinite processes marking the transition to mathematical analysis'
    ],
    knownForTe: [
      'మాధవ-లీబ్నిజ్ శ్రేణి: π/4 = 1 - 1/3 + 1/5 - 1/7 + ... (లీబ్నిజ్ కంటే 300 ఏళ్ల ముందే)',
      'మాధవ-న్యూటన్ శ్రేణి: sin x = x - x³/3! + x⁵/5! - x⁷/7! + ...',
      'కొసైన్ శ్రేణి: cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ...',
      'పరిమిత సంఖ్యల నుండి అనంత ప్రక్రియలకు పరివర్తన చెందిన తొలి మేధావి'
    ],
    quoteEn: 'Infinity is not something we fear, but something we understand step by step.',
    quoteTe: 'అనంతం అనేది భయపడాల్సిన విషయం కాదు, అంచెలంచెలుగా గ్రహించాల్సిన సత్యం.',
    formulaOrDiagram: 'sin x = x - x³/3! + x⁵/5! - ...'
  },
  {
    id: 'ramanujan',
    image: './images/indian_history/science_portraits/math_ramanujan.jpg',
    number: 8,
    nameEn: 'Srinivasa Ramanujan',
    nameTe: 'శ్రీనివాస రామానుజన్',
    periodEn: '1887 – 1920',
    periodTe: '1887 – 1920',
    titleEn: 'The Man Who Knew Infinity',
    titleTe: 'అనంతాన్ని దర్శించిన అద్భుత మేధావి',
    majorContributionEn: 'Self-taught mathematical colossus who discovered nearly 3,900 groundbreaking theorems, identities, mock theta functions, and partition formulas.',
    majorContributionTe: 'స్వయంకృషితో దాదాపు 3,900 అద్భుతమైన సిద్ధాంతాలు, మాక్ తీటా ఫంక్షన్లు, మరియు సంఖ్యా విభజన సూత్రాలను కనుగొన్న విశ్వ మేధావి.',
    knownForEn: [
      'Ramanujan Partition Formula: asymptotic formula p(n) with G. H. Hardy',
      'Hardy-Ramanujan Number 1729: smallest number expressible as sum of two cubes in two different ways (1³ + 12³ = 9³ + 10³)',
      'Ultra-fast converging infinite series for 1/π used in modern supercomputers to calculate millions of digits of π',
      'Ramanujan Prime, Ramanujan Theta function, and Modular Forms'
    ],
    knownForTe: [
      'రామానుజన్ పార్టిషన్ సూత్రం: సంఖ్యల విభజన సిద్ధాంతంలో హార్డీ-రామానుజన్ ఫార్ములా',
      'హార్డీ-రామానుజన్ సంఖ్య 1729: రెండు వేర్వేరు విధాలుగా రెండు ఘనాల మొత్తంగా రాయగలిగే అత్యంత చిన్న సంఖ్య (1³ + 12³ = 9³ + 10³)',
      'సూపర్‌కంప్యూటర్లలో పై (π) విలువను లెక్కించడానికి ఇప్పటికీ ఉపయోగించే 1/π అద్భుత శ్రేణి',
      'మాక్ తీటా ప్రమేయాలు, రామానుజన్ ప్రైమ్స్, మరియు మోడ్యులర్ ఫార్మ్స్'
    ],
    quoteEn: 'An equation means nothing to me unless it expresses a thought of God.',
    quoteTe: 'ఈశ్వరుని ఆలోచనను వ్యక్తం చేయని ఏ సమీకరణమూ నాకు అర్థవంతమైనది కాదు.',
    formulaOrDiagram: '1729 = 1³ + 12³ = 9³ + 10³'
  },
  {
    id: 'kaprekar',
    image: './images/indian_history/science_portraits/math_kaprekar.jpg',
    number: 9,
    nameEn: 'D. R. Kaprekar',
    nameTe: 'డి. ఆర్. కాప్రేకర్',
    periodEn: '1905 – 1986',
    periodTe: '1905 – 1986',
    titleEn: 'The Magician of Numbers',
    titleTe: 'సంఖ్యా మాయాజాల విద్వాంసుడు',
    majorContributionEn: 'Discovered the world-famous Kaprekar Constant (6174), Kaprekar numbers, Harshad numbers, and self-numbers in recreational number theory.',
    majorContributionTe: 'ప్రపంచ ప్రసిద్ధ "కాప్రేకర్ స్థిరాంకం" (6174), కాప్రేకర్ సంఖ్యలు, హర్షద్ సంఖ్యలు మరియు సెల్ఫ్ నంబర్లను ఆవిష్కరించిన సంఖ్యా శాస్త్రవేత్త.',
    knownForEn: [
      'Kaprekar Constant 6174: take any 4-digit number (not all identical digits), arrange descending minus ascending, repeating yields 6174 within 7 steps',
      'Kaprekar Numbers: numbers whose square can be split into two parts that sum to the original number (e.g. 45² = 2025 → 20 + 25 = 45)',
      'Harshad (Joy-giver) numbers: divisible by the sum of their digits',
      'Self-numbers (Devlali numbers) which cannot be generated from any other number'
    ],
    knownForTe: [
      'కాప్రేకర్ స్థిరాంకం 6174: ఏవైనా 4 అంకెలను పెద్దది నుండి చిన్నది క్రమంలో రాసి, చిన్నది నుండి పెద్దది క్రమంతో తీసివేస్తే గరిష్టంగా 7 దశల్లో 6174 వస్తుంది',
      'కాప్రేకర్ సంఖ్యలు: వర్గం చేసిన సంఖ్యను రెండు భాగాలుగా చేసి కూడితే మళ్లీ అసలు సంఖ్య రావడం (ఉదా: 45² = 2025 → 20 + 25 = 45)',
      'హర్షద్ సంఖ్యలు: తమ అంకెల మొత్తంతో నిశ్శేషంగా భాగించబడే సంఖ్యలు',
      'దేవ్‌లాలీ సంఖ్యలు (సెల్ఫ్ నంబర్లు)'
    ],
    quoteEn: 'Mathematics is a game played according to simple rules with numbers.',
    quoteTe: 'సంఖ్యలతో సరళమైన నియమాల ప్రకారం ఆడే ఒక అద్భుతమైన క్రీడే గణితము.',
    formulaOrDiagram: 'Kaprekar Constant: 6174'
  },
  {
    id: 'deshpande',
    image: './images/indian_history/science_portraits/math_deshpande.jpg',
    number: 10,
    nameEn: 'Shantinātha Deshpande',
    nameTe: 'శాంతినాథ దేశ్‌పాండే',
    periodEn: '1924 – 2000',
    periodTe: '1924 – 2000',
    titleEn: 'The Logician and Thinker',
    titleTe: 'తార్కిక & తాత్త్విక గణితవేత్త',
    majorContributionEn: 'Pioneered Indian contributions to mathematical logic, formal set theory, and philosophical foundations of mathematical semantics.',
    majorContributionTe: 'గణిత తర్కశాస్త్రం, సమితి సిద్ధాంతం (సెట్ థియరీ), మరియు అర్థశాస్త్ర తాత్త్విక పునాదులలో విశేష పరిశోధనలు చేసాడు.',
    knownForEn: [
      'Formal mathematical logic synthesis combining ancient Nyaya epistemology with modern symbolic logic',
      'Contributions to axiomatic set theory and semantic paradoxes',
      'Mentored generations of Indian mathematicians, philosophers, and logicians',
      'Bridged Sanskrit formal linguistics and computational logical structures'
    ],
    knownForTe: [
      'ప్రాచీన న్యాయ శాస్త్ర తర్కాన్ని ఆధునిక సింబాలిక్ లాజిక్‌తో అనుసంధానించిన పరిశోధనలు',
      'స్వయంసిద్ధ సమితి సిద్ధాంతం (ఆక్సియోమాటిక్ సెట్ థియరీ) మరియు విరోధాభాసల పరిష్కారం',
      'భారతీయ గణితవేత్తలకు, తార్కికులకు దిశానిర్దేశం చేసిన గురుతుల్య విద్వాంసుడు',
      'సంస్కృత శాస్త్రీయ భాషకు మరియు కంప్యూటేషనల్ లాజిక్‌కు మధ్య వారధి నిర్మించాడు'
    ],
    quoteEn: 'Logic is the soul of mathematics; without it, nothing makes sense.',
    quoteTe: 'తర్కమే గణితానికి ఆత్మ; తర్కం లేని గణితానికి అర్థమే లేదు.',
    formulaOrDiagram: 'Mathematical Logic & Sets'
  }
];

// 4. ACHARYA PINGALA - BINARY CODE & PROSODY
export const ACHARYA_PINGALA_DATA: AcharyaPingalaData = {
  nameEn: 'Acharya Pingala',
  nameTe: 'ఆచార్య పింగళుడు',
  titleEn: 'The Great Sage of Indian Mathematics and Prosody',
  titleTe: 'భారతీయ గణితం & ఛందశ్శాస్త్ర పితామహుడు (బైనరీ కోడ్ సృష్టికర్త)',
  eraEn: 'c. 3rd – 2nd Century BCE',
  eraTe: 'క్రీ.పూ. 3వ – 2వ శతాబ్దము',
  treatiseEn: 'Chhandahshastra (The Science of Meters – approx. 600 Sutras)',
  treatiseTe: 'ఛందశ్శాస్త్రము (ఛందో విజ్ఞాన గ్రంథం – సుమారు 600 సూత్రాలు)',
  image: './images/indian_history/science_portraits/sage_acharya_pingala.jpg',
  summaryEn: 'Acharya Pingala was a towering ancient Indian mathematician, prosodist, and thinker. In his masterwork Chhandahshastra, he gave the earliest known systematic exposition of the Binary Number System (using Laghu 0 and Guru 1), combinatorial numbers (nCr), binomial coefficients (Meru Prastara / Pascal’s Triangle), and fibonacci sequences—laying the foundational logic of modern computer science over 2,200 years ago.',
  summaryTe: 'ఆచార్య పింగళుడు ప్రాచీన భారతదేశపు అత్యున్నత గణితవేత్త మరియు ఛందో విద్వాంసుడు. తన "ఛందశ్శాస్త్రం"లో లఘువు (0), గురువు (1)లను ఉపయోగించి ప్రపంచంలోనే మొట్టమొదటిసారిగా "బైనరీ సంఖ్యా విధానం", క్రమచయ-సంయోగాలు (nCr), ద్విపద గుణకాలు (మేరు ప్రస్తారం / పాస్కల్ ట్రయాంగిల్), మరియు విస్తార సంఖ్యా విశ్లేషణను ఆవిష్కరించాడు. ఇది నేటి కంప్యూటర్ సైన్స్ మరియు డిజిటల్ ఎలక్ట్రానిక్స్‌కు అసలైన మూల పునాది.',
  majorContributionsEn: [
    {
      title: 'Binary Number System (0 and 1)',
      desc: 'Systematized the representation of poetic syllables using two states: Laghu (short syllable = 0) and Guru (long syllable = 1). Proved that every syllable combination can be represented using 0 and 1.',
      icon: '01'
    },
    {
      title: 'Meru Prastara (Binomial Coefficients / Pascal’s Triangle)',
      desc: 'Described the Meru Prastara ("Staircase of Mount Meru") to compute binomial coefficients centuries before Blaise Pascal.',
      icon: '🔺'
    },
    {
      title: 'Combinatorics & Permutations (nCr)',
      desc: 'Formulated algorithmic rules to find combinations (Prastara), permutations, and determine the exact number of variations for n syllables (2^n combinations).',
      icon: 'nCr'
    },
    {
      title: 'Mātrāmeru (Precursor to Fibonacci Series)',
      desc: 'Explained counts of rhythmic morae giving rise to the famous integer sequence later called Fibonacci numbers by Virahanka and Hemachandra.',
      icon: '∑'
    }
  ],
  majorContributionsTe: [
    {
      title: 'బైనరీ సంఖ్యా విధానం (0 మరియు 1)',
      desc: 'ఛందస్సులోని అక్షరాలను రెండు విలువల ద్వారా క్రమబద్ధీకరించాడు: లఘువు (ᴗ = 0), గురువు (- = 1). దీని ద్వారా ప్రతి అక్షర రూపాన్ని 0 మరియు 1 లతో సూచించవచ్చని నిరూపించాడు.',
      icon: '01'
    },
    {
      title: 'మేరు ప్రస్తారము (పాస్కల్ ట్రయాంగిల్)',
      desc: 'ద్విపద గుణకాలను (బైనామియల్ కోఎఫిషియంట్స్) లెక్కించే పిరమిడ్ పద్ధతి "మేరు ప్రస్తారం"ను పాస్కల్ కంటే 1800 ఏళ్ల ముందే వివరించాడు.',
      icon: '🔺'
    },
    {
      title: 'క్రమచయాలు & సంయోగాలు (nCr)',
      desc: 'అక్షరాల అమరికలను లెక్కించడానికి ప్రస్తార, నష్ట, ఉద్దిష్ట పద్ధతుల ద్వారా 2^n రూపాలను నిర్ణయించే కచ్చితమైన అల్గారిథమ్‌లను రచించాడు.',
      icon: 'nCr'
    },
    {
      title: 'మాత్రామేరు (ఫిబోనాచీ శ్రేణికి మూలం)',
      desc: 'ఛందో మాత్రల క్రమాన్ని విశ్లేషిస్తూ విరహంకుడు, హేమచంద్రుల కంటే ముందే ఫిబోనాచీ సంఖ్యా క్రమానికి బీజాలు వేశాడు.',
      icon: '∑'
    }
  ],
  binaryTable: [
    { decimal: 1, laghuGuru: 'ᴗ ᴗ ᴗ', binary: '000' },
    { decimal: 2, laghuGuru: 'ᴗ ᴗ -', binary: '001' },
    { decimal: 3, laghuGuru: 'ᴗ - ᴗ', binary: '010' },
    { decimal: 4, laghuGuru: 'ᴗ - -', binary: '011' },
    { decimal: 5, laghuGuru: '- ᴗ ᴗ', binary: '100' },
    { decimal: 6, laghuGuru: '- ᴗ -', binary: '101' },
    { decimal: 7, laghuGuru: '- - ᴗ', binary: '110' },
    { decimal: 8, laghuGuru: '- - -', binary: '111' }
  ],
  significanceEn: [
    'The binary concept of Pingala is the absolute basis of modern computer science, silicon chips, and digital electronics.',
    'Demonstrates the astounding depth of mathematical and algorithmic thinking in ancient India.',
    'Pioneered the profound intersection of language, metrics, rhythm, and rigorous mathematical logic.',
    'His work proves that digital representation was known and systematically deployed in India thousands of years ago.'
  ],
  significanceTe: [
    'పింగళుని బైనరీ సూత్రమే నేటి కంప్యూటర్ సైన్స్, సిలికాన్ చిప్స్, మరియు డిజిటల్ ఎలక్ట్రానిక్స్ యొక్క ప్రాథమిక ఆధారము.',
    'ప్రాచీన భారతదేశంలో అల్గారిథమిక్ ఆలోచన ఎంత లోతుగా వికసించిందో నిరూపించే శాస్త్రీయ తార్కాణం.',
    'భాషా ఛందస్సు, లయ, మరియు కచ్చితమైన గణిత తర్కాలను అనుసంధానించిన యుగపురుషుడు.',
    'వేల సంవత్సరాల క్రితమే భారతదేశంలో డిజిటల్ బైనరీ కోడ్ వాడకంలో ఉందనడానికి ఇది తిరుగులేని నిదర్శనం.'
  ]
};

// 4B. ACHARYA CHANAKYA (KAUTILYA / VISHNUGUPTA) - BOOKS WRITTEN BY CHANAKYA
export interface ChanakyaBookItem {
  number: number;
  titleEn: string;
  titleTe: string;
  attributed?: boolean;
  descriptionEn: string;
  descriptionTe: string;
  iconImage: string;
}

export const ACHARYA_CHANAKYA_DATA = {
  id: 'acharya_chanakya',
  posterImage: './images/indian_history/chanakya_books_poster.jpg',
  portraitImage: './images/indian_history/chanakya_books/chanakya_portrait.jpg',
  slokaImage: './images/indian_history/chanakya_books/chanakya_sloka.jpg',
  manuscriptsImage: './images/indian_history/chanakya_books/chanakya_manuscripts.jpg',
  lampImage: './images/indian_history/chanakya_books/chanakya_lamp.jpg',
  nameEn: 'Acharya Chanakya (Kautilya / Vishnugupta)',
  nameTe: 'ఆచార్య చాణక్యుడు (కౌటిల్యుడు / విష్ణుగుప్తుడు)',
  headingEn: 'Books Written by Chanakya – The Timeless Wisdom of Acharya Chanakya',
  headingTe: 'ఆచార్య చాణక్యుడు రచించిన గ్రంథాలు – కాలాతీత రాజనీతి & ధర్మశాస్త్ర విజ్ఞానం',
  eraEn: 'c. 375 – 283 BCE (4th – 3rd Century BCE, Maurya Era)',
  eraTe: 'క్రీ.పూ. 375 – 283 (4వ – 3వ శతాబ్దం, మౌర్య యుగం)',
  titleEn: 'Father of Indian Political Science, Economics, Statecraft & Diplomacy',
  titleTe: 'భారతీయ అర్థశాస్త్ర, రాజనీతి, దౌత్య & పరిపాలనా శాస్త్ర పితామహుడు',
  summaryEn: 'Acharya Chanakya (also revered as Kautilya and Vishnugupta), a premier professor of political science and economics at Takshashila University and the chief architect of the Maurya Empire under Emperor Chandragupta Maurya, authored immortal treatises on statecraft, public administration, economics, law, military strategy, and practical ethics.',
  summaryTe: 'తక్షశిల విశ్వవిద్యాలయ రాజనీతి-అర్థశాస్త్ర ఆచార్యుడిగా, చంద్రగుప్త మౌర్యుని గురువుగా అఖండ మౌర్య సామ్రాజ్య స్థాపనకు మార్గదర్శనం చేసిన ఆచార్య చాణక్యుడు (కౌటిల్యుడు / విష్ణుగుప్తుడు) రాజ్యపాలన, ఆర్థిక విధానం, దౌత్యం, న్యాయశాస్త్రం మరియు మానవ జీవన నైతిక విలువలపై రచించిన 7 అమర గ్రంథాల సమగ్ర వివరాలు.',
  slokaSanskrit: [
    'विद्या मूलं सर्वधनं',
    'विद्या मित्रं प्रवीण्ये ।',
    'विद्या गुरूणां गुरुः',
    'विद्या परं दैवतम् ॥',
    '— चाणक्य'
  ],
  slokaTeluguScript: [
    'విద్యా మూలం సర్వధనం',
    'విద్యా మిత్రం ప్రవీణ్యే ।',
    'విద్యా గురూణాం గురుః',
    'విద్యా పరం దైవతమ్ ॥',
    '— చాణక్య'
  ],
  slokaMeaningEn: 'Knowledge is the root of all wealth; Knowledge is the true friend in skill and mastery; Knowledge is the Teacher of all teachers; Knowledge is the Supreme Deity.',
  slokaMeaningTe: 'విద్యయే సమస్త సంపదలకు మూలము; నైపుణ్యములో విద్యయే నిజమైన మిత్రుడు; విద్య గురువులకే గురువు; విద్యయే పరమ దైవము.',
  books: [
    {
      number: 1,
      titleEn: 'ARTHASHASTRA',
      titleTe: 'అర్థశాస్త్రము (Arthashastra)',
      descriptionEn: 'His most famous work on statecraft, governance, economics, diplomacy, military strategy, and law (15 Adhikaranas / Books, 150 Chapters, 6,000 Shlokas).',
      descriptionTe: 'రాజ్య పరిపాలన, అర్థశాస్త్రం, దౌత్యనీతి, సైనిక వ్యూహం, గూఢచర్యం మరియు న్యాయశాస్త్రాలపై ఆయన రచించిన జగద్విఖ్యాత మహాగ్రంథం (15 అధికరణాలు, 150 అధ్యాయాలు, 6,000 శ్లోకాలు).',
      iconImage: './images/indian_history/chanakya_books/book_1_arthashastra.jpg'
    },
    {
      number: 2,
      titleEn: 'NITISARA',
      titleTe: 'నీతిసారము (Nitisara)',
      descriptionEn: 'A compendium of practical wisdom on ethics, leadership, and good conduct.',
      descriptionTe: 'నైతిక విలువలు, సమర్థ నాయకత్వ లక్షణాలు మరియు సత్ప్రవర్తనపై ఆచరణాత్మక విజ్ఞాన సమాహారం.',
      iconImage: './images/indian_history/chanakya_books/book_2_nitisara.jpg'
    },
    {
      number: 3,
      titleEn: 'CHANAKYA NITI',
      titleTe: 'చాణక్య నీతి (Chanakya Niti - నీతి శాస్త్రం)',
      descriptionEn: 'Timeless aphorisms and teachings on life, success, morals, and human behavior.',
      descriptionTe: 'జీవిత సాఫల్యం, మానవ స్వభావం, ధర్మం, మిత్ర-శత్రు వివేచన మరియు నైతిక సూత్రాలపై కాలాతీత సుభాషితాల రత్నమాల.',
      iconImage: './images/indian_history/chanakya_books/book_3_chanakya_niti.jpg'
    },
    {
      number: 4,
      titleEn: 'RAJANEETI (or RAJNITI)',
      titleTe: 'రాజనీతి (Rajaneeti / Rajniti)',
      descriptionEn: 'Principles of politics and administration for effective rulers and leaders.',
      descriptionTe: 'ఆదర్శ పాలకులు మరియు నాయకులకు అవసరమైన రాజకీయ సూత్రాలు, సప్తాంగ రాజ్య సిద్ధాంతం మరియు ప్రజా సంక్షేమ పరిపాలనా నియమాలు.',
      iconImage: './images/indian_history/chanakya_books/book_4_rajaneeti.jpg'
    },
    {
      number: 5,
      titleEn: 'DANDANEETI',
      titleTe: 'దండనీతి (Dandaneeti)',
      descriptionEn: 'Treatise on law, punishment, justice, and maintaining order in the kingdom.',
      descriptionTe: 'రాజ్యంలో ధర్మ రక్షణ, న్యాయ విచారణ, నేర నియంత్రణ (దండన) మరియు శాంతిభద్రతల పరిరక్షణపై ప్రామాణిక గ్రంథం.',
      iconImage: './images/indian_history/chanakya_books/book_5_dandaneeti.jpg'
    },
    {
      number: 6,
      titleEn: 'YOGAVAASISHTHA (attributed)',
      titleTe: 'యోగవాసిష్ఠము (ఆపాదించబడిన శ్లోకాలు)',
      attributed: true,
      descriptionEn: 'Though authorship is debated, it is believed Chanakya contributed verses in this spiritual philosophical text.',
      descriptionTe: 'ఈ ఆధ్యాత్మిక వేదాంత గ్రంథ రచనా కర్తృత్వంపై భిన్నాభిప్రాయాలు ఉన్నప్పటికీ, ఇందులో ఆచార్య చాణక్యుడు కొన్ని తాత్త్విక శ్లోకాలను చేర్చారని విశ్వసిస్తారు.',
      iconImage: './images/indian_history/chanakya_books/book_6_yogavaasishtha.jpg'
    },
    {
      number: 7,
      titleEn: 'APTA PRASHNA (attributed)',
      titleTe: 'ఆప్త ప్రశ్న (Apta Prashna - ఆపాదించబడినది)',
      attributed: true,
      descriptionEn: 'A work on political ethics, governance, and righteous conduct.',
      descriptionTe: 'రాజకీయ నైతికత, ధర్మబద్ధమైన పరిపాలన మరియు సత్ప్రవర్తనపై ప్రశ్నోత్తర రూపంలో విశ్లేషించే రచన.',
      iconImage: './images/indian_history/chanakya_books/book_7_apta_prashna.jpg'
    }
  ] as ChanakyaBookItem[],
  legacyQuoteEn: 'Chanakya’s works continue to guide leaders, thinkers, and individuals even after thousands of years.',
  legacyQuoteTe: 'వేలాది సంవత్సరాల తర్వాత కూడా ఆచార్య చాణక్యుని రచనలు నాయకులకు, మేధావులకు మరియు సామాన్య వ్యక్తులకు నిరంతరం మార్గదర్శనం చేస్తూనే ఉన్నాయి.'
};

// 5. MODERN INDIAN SCIENTISTS WHO CHANGED THE WORLD
export const MODERN_SCIENTISTS_DATA: ModernScientistData[] = [
  {
    id: 'cv_raman',
    image: './images/indian_history/science_portraits/modern_cv_raman.jpg',
    number: 1,
    nameEn: 'Sir C. V. Raman',
    nameTe: 'సర్ సి. వి. రామన్',
    lifespan: '1888 – 1970',
    titleEn: 'The Nobel Laureate Who Revealed Light’s Secret',
    titleTe: 'కాంతి రహస్యాన్ని చేధించిన నోబెల్ పురస్కార గ్రహీత',
    keyAchievementsEn: [
      'Discovered the Raman Effect on February 28, 1928 (inelastic scattering of photon particles)',
      'Awarded the Nobel Prize in Physics in 1930 – the first Asian and non-white scientist to receive a Nobel Prize in any branch of science',
      'Established the Raman Research Institute (RRI) in Bengaluru; Bharat Ratna awardee (1954)'
    ],
    keyAchievementsTe: [
      '1928 ఫిబ్రవరి 28న "రామన్ ఎఫెక్ట్" (కాంతి విక్షేపణ చర్య) ఆవిష్కరణ (ఈ రోజే జాతీయ సైన్స్ దినోత్సవం)',
      '1930లో భౌతికశాస్త్రంలో నోబెల్ బహుమతి సాధించిన మొట్టమొదటి ఆసియా మరియు శ్వేతజాతీయేతర శాస్త్రవేత్త',
      'బెంగళూరులో రామన్ రీసెర్చ్ ఇన్‌స్టిట్యూట్ స్థాపన; 1954లో భారతరత్న పురస్కార గ్రహీత'
    ],
    quoteEn: 'Science is the search for truth.',
    quoteTe: 'నిజమైన సత్య శోధనే విజ్ఞాన శాస్త్రం.',
    icon: '💡'
  },
  {
    id: 'sn_bose',
    image: './images/indian_history/science_portraits/modern_sn_bose.jpg',
    number: 2,
    nameEn: 'Satyendra Nath Bose',
    nameTe: 'సత్యేంద్ర నాథ్ బోస్',
    lifespan: '1894 – 1974',
    titleEn: 'The Mind Behind Bose-Einstein Statistics',
    titleTe: 'బోస్-ఐన్‌స్టీన్ సాంఖ్యక శాస్త్ర రూపకర్త (బోసాన్ల ఆద్యుడు)',
    keyAchievementsEn: [
      'Developed Bose-Einstein Statistics and predicted the fifth state of matter: Bose-Einstein Condensate (BEC)',
      'Albert Einstein personally translated his paper into German and collaborated to transform quantum physics',
      'Fundamental subatomic particles with integer spin are forever named "Bosons" in his honour (e.g. Higgs Boson)'
    ],
    keyAchievementsTe: [
      'బోస్-ఐన్‌స్టీన్ స్టాటిస్టిక్స్ రూపకల్పన మరియు పదార్థ ఐదవ రూపమైన "బోస్-ఐన్‌స్టీన్ కండెన్సేట్" అంచనా',
      'ఆల్బర్ట్ ఐన్‌స్టీన్ స్వయంగా బోస్ పరిశోధనా పత్రాన్ని జర్మన్‌లోకి అనువదించి ఆయనను "నా సహచరుడు" అని గౌరవించాడు',
      'సృష్టిలోని ప్రాథమిక కణాలకు ఆయన గౌరవార్థం "బోసాన్లు" (హిగ్స్ బోసాన్ - గాడ్ పార్టికల్) అని నామకరణం'
    ],
    quoteEn: 'Think. Think and Think.',
    quoteTe: 'ఆలోచించు. లోతుగా ఆలోచించు, నిరంతరం ఆలోచించు.',
    icon: '⚛️'
  },
  {
    id: 's_chandrasekhar',
    image: './images/indian_history/science_portraits/modern_s_chandrasekhar.jpg',
    number: 3,
    nameEn: 'Subrahmanyan Chandrasekhar',
    nameTe: 'సుబ్రహ్మణ్యన్ చంద్రశేఖర్',
    lifespan: '1910 – 1995',
    titleEn: 'The Genius Who Explained the Fate of Stars',
    titleTe: 'నక్షత్రాల అంతిమ గమ్యాన్ని ఆవిష్కరించిన ఖగోళ మేధావి',
    keyAchievementsEn: [
      'Discovered the Chandrasekhar Limit (1.44 solar masses), determining whether a dying star becomes a white dwarf, neutron star, or black hole',
      'Awarded the Nobel Prize in Physics in 1983 for theoretical studies of the physical processes of the structure and evolution of the stars',
      'NASA named the flagship Chandra X-ray Observatory in space in his everlasting honour'
    ],
    keyAchievementsTe: [
      'చంద్రశేఖర్ పరిమితి (1.44 సౌర ద్రవ్యరాశి) ఆవిష్కరణ: నక్షత్రం శ్వేత వామనుడిగా మారుతుందా లేక కృష్ణబిలమవుతుందా అని నిర్ణయించే సూత్రం',
      'నక్షత్రాల పరిణామ క్రమంపై చేసిన పరిశోధనలకు గాను 1983లో భౌతికశాస్త్రంలో నోబెల్ బహుమతి',
      'నాసా తన అత్యున్నత అంతరిక్ష అబ్జర్వేటరీకి "చంద్ర ఎక్స్-రే అబ్జర్వేటరీ" అని గౌరవార్థం నామకరణం చేసింది'
    ],
    quoteEn: 'Dedication to science is dedication to humanity.',
    quoteTe: 'విజ్ఞాన శాస్త్రానికి అంకితం కావడమంటే యావత్ మానవాళి సేవకు అంకితం కావడమే.',
    icon: '🌌'
  },
  {
    id: 'ramanujan_modern',
    image: './images/indian_history/science_portraits/modern_ramanujan_modern.jpg',
    number: 4,
    nameEn: 'Srinivasa Ramanujan',
    nameTe: 'శ్రీనివాస రామానుజన్',
    lifespan: '1887 – 1920',
    titleEn: 'The Mathematical Genius Ahead of His Time',
    titleTe: 'కాలానికంటే ముందు నడిచిన గణిత విశ్వ మేధావి',
    keyAchievementsEn: [
      'Made monumental breakthroughs in number theory, infinite series, continued fractions, and elliptic functions without formal university training',
      'Elected Fellow of the Royal Society (FRS) in London at age 31',
      'His lost notebooks continue to inspire string theory, black hole thermodynamics, and modern computer cryptography'
    ],
    keyAchievementsTe: [
      'ఎటువంటి అధికారిక విశ్వవిద్యాలయ శిక్షణ లేకుండానే సంఖ్యా సిద్ధాంతం, అనంత శ్రేణులలో చారిత్రక విప్లవం సృష్టించాడు',
      'కేవలం 31 ఏళ్ల వయస్సులోనే లండన్ రాయల్ సొసైటీ ఫెలో (FRS) గా ఎన్నికైన అరుదైన ప్రతిభామూర్తి',
      'ఆయన నోట్‌బుక్కులలోని సూత్రాలు నేటికీ స్ట్రింగ్ థియరీ, బ్లాక్ హోల్స్ మరియు కంప్యూటర్ క్రిప్టోగ్రఫీలకు మార్గదర్శకాలు'
    ],
    quoteEn: 'An equation means nothing to me unless it expresses a thought of God.',
    quoteTe: 'ఈశ్వరుని ఆలోచనను వ్యక్తం చేయని ఏ సమీకరణమూ నాకు అర్థవంతమైనది కాదు.',
    icon: '♾️'
  },
  {
    id: 'abdul_kalam',
    image: './images/indian_history/science_portraits/modern_abdul_kalam.jpg',
    number: 5,
    nameEn: 'Dr. A. P. J. Abdul Kalam',
    nameTe: 'డాక్టర్ ఎ. పి. జె. అబ్దుల్ కలాం',
    lifespan: '1931 – 2015',
    titleEn: 'The People’s President and Missile Man of India',
    titleTe: 'ప్రజా రాష్ట్రపతి & భారత క్షిపణి పితామహుడు (మిస్సైల్ మ్యాన్)',
    keyAchievementsEn: [
      'Project Director of India’s first Satellite Launch Vehicle (SLV-III), deploying Rohini in orbit',
      'Chief architect of the Integrated Guided Missile Development Programme (IGMDP), developing Agni and Prithvi missiles',
      'Served as the beloved 11th President of India (2002–2007); inspired hundreds of millions of youth with his visionary books'
    ],
    keyAchievementsTe: [
      'భారత తొలి ఉపగ్రహ ప్రయోగ వాహక నౌక (SLV-III) ప్రాజెక్ట్ డైరెక్టర్‌గా రోహిణి ఉపగ్రహాన్ని కక్ష్యలోకి చేర్చాడు',
      'భారత క్షిపణి వ్యవస్థల రూపకర్తగా "అగ్ని", "పృథ్వి" క్షిపణులను దేశ రక్షణ రంగానికి అందించిన ధీశాలి',
      'భారతదేశ 11వ రాష్ట్రపతిగా (2002–2007) ప్రజల హృదయాలను గెలుచుకుని, లక్షలాది విద్యార్థులలో కలలు కనే స్ఫూర్తిని నింపాడు'
    ],
    quoteEn: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
    quoteTe: 'కలలు కనండి, కలలు కనండి, కలలు కనండి. కలలు ఆలోచనలుగా మారతాయి, ఆలోచనలు ఆచరణకు దారితీస్తాయి.',
    icon: '🚀'
  },
  {
    id: 'har_gobind_khorana',
    image: './images/indian_history/science_portraits/modern_har_gobind_khorana.jpg',
    number: 6,
    nameEn: 'Dr. Har Gobind Khorana',
    nameTe: 'డాక్టర్ హర్ గోవింద్ ఖొరానా',
    lifespan: '1922 – 2011',
    titleEn: 'The Pioneer of the Genetic Code',
    titleTe: 'జన్యు రహస్య కోడ్ విజేత & నోబెల్ పురస్కార గ్రహీత',
    keyAchievementsEn: [
      'Deciphered the genetic code and demonstrated how the order of nucleotides in nucleic acids controls protein synthesis in cells',
      'Awarded the Nobel Prize in Physiology or Medicine in 1968 alongside Marshall Nirenberg and Robert Holley',
      'Synthesized the first artificial gene in history (1972), founding modern genetic engineering and biotechnology'
    ],
    keyAchievementsTe: [
      'కణాలలోని జన్యు సంకేతాన్ని (జెనెటిక్ కోడ్) విశ్లేషించి, అది ప్రోటీన్ల సంశ్లేషణను ఎలా నియంత్రిస్తుందో నిరూపించాడు',
      'వైద్య మరియు శరీరధర్మ శాస్త్రంలో విశేష పరిశోధనలకు గాను 1968లో నోబెల్ బహుమతి సాధించాడు',
      'మానవ చరిత్రలోనే మొట్టమొదటిసారిగా కృత్రిమ జన్యువును (ఆర్టిఫిషియల్ జీన్) ప్రయోగశాలలో సంశ్లేషించి బయోటెక్నాలజీకి పునాది వేశాడు'
    ],
    quoteEn: 'In the face of difficulties, it is important to keep dreaming.',
    quoteTe: 'కష్టాలు ఎదురైనప్పటికీ, నిరంతరం ముందుకు సాగే కలలను సజీవంగా ఉంచుకోవడం ముఖ్యం.',
    icon: '🧬'
  },
  {
    id: 'vikram_sarabhai',
    image: './images/indian_history/science_portraits/modern_vikram_sarabhai.jpg',
    number: 7,
    nameEn: 'Dr. Vikram Sarabhai',
    nameTe: 'డాక్టర్ విక్రమ్ సారాభాయ్',
    lifespan: '1919 – 1971',
    titleEn: 'The Father of India’s Space Program',
    titleTe: 'భారత అంతరిక్ష పరిశోధనా పితామహుడు (ఇస్రో వ్యవస్థాపకుడు)',
    keyAchievementsEn: [
      'Founded the Indian Space Research Organisation (ISRO) and Thumba Equatorial Rocket Launching Station (TERLS)',
      'Pioneered satellite telecommunications, SITE educational television program, and established Physical Research Laboratory (PRL) & IIM Ahmedabad',
      'Led the creation of India’s first satellite, Aryabhata, launched in 1975'
    ],
    keyAchievementsTe: [
      'భారత అంతరిక్ష పరిశోధనా సంస్థ (ISRO) ను స్థాపించి, తుంబా రాకెట్ ప్రయోగ కేంద్రాన్ని నిర్మించాడు',
      'ఉపగ్రహాల ద్వారా సమాచార విప్లవాన్ని, గ్రామీణ విద్యా ప్రసారాలను (SITE) మరియు IIM అహ్మదాబాద్‌ను స్థాపించిన దార్శనికుడు',
      'భారత తొలి స్వదేశీ ఉపగ్రహం "ఆర్యభట్ట" (1975) రూపకల్పనకు నాయకత్వం వహించాడు'
    ],
    quoteEn: 'We must be second to none in the application of advanced technologies to the real problems of man and society.',
    quoteTe: 'మానవాళి మరియు సమాజ సమస్యల పరిష్కారానికి అత్యాధునిక సాంకేతికతను వినియోగించడంలో మనం ఎవరికీ తీసిపోకూడదు.',
    icon: '🛰️'
  },
  {
    id: 'ms_swaminathan',
    image: './images/indian_history/science_portraits/modern_ms_swaminathan.jpg',
    number: 8,
    nameEn: 'Dr. M. S. Swaminathan',
    nameTe: 'డాక్టర్ ఎం. ఎస్. స్వామినాథన్',
    lifespan: '1925 – 2023',
    titleEn: 'The Father of the Green Revolution in India',
    titleTe: 'భారత హరిత విప్లవ పితామహుడు (ఆహార భద్రతా రక్షకుడు)',
    keyAchievementsEn: [
      'Collaborated with Norman Borlaug to introduce high-yielding semi-dwarf wheat and rice varieties to India',
      'Transformed India from a famine-prone nation reliant on food aid to a self-sufficient global agricultural powerhouse',
      'First recipient of the World Food Prize (1987); posthumously awarded the Bharat Ratna (2024)'
    ],
    keyAchievementsTe: [
      'నార్మన్ బోర్లాగ్‌తో కలిసి అధిక దిగుబడినిచ్చే గోధుమ, వరి వంగడాలను ప్రవేశపెట్టి దేశంలో హరిత విప్లవాన్ని సృష్టించాడు',
      'కరువు కాటకాలతో బాధపడుతూ విదేశీ ఆహార సహాయంపై ఆధారపడిన భారతదేశాన్ని స్వయంసమృద్ధి గల అన్నపూర్ణగా మార్చాడు',
      'ప్రపంచ ఆహార బహుమతి (1987) తొలి గ్రహీత; 2024లో భారత ప్రభుత్వం భారతరత్నతో సత్కరించింది'
    ],
    quoteEn: 'The earth provides enough to satisfy every man’s needs, but not every man’s greed.',
    quoteTe: 'ప్రతి మనిషి అవసరాన్ని తీర్చడానికి భూమి సమృద్ధిని ఇస్తుంది, కానీ మనిషి దురాశను తీర్చడానికి కాదు.',
    icon: '🌾'
  },
  {
    id: 'homi_bhabha',
    image: './images/indian_history/science_portraits/modern_homi_bhabha.jpg',
    number: 9,
    nameEn: 'Dr. Homi J. Bhabha',
    nameTe: 'డాక్టర్ హోమీ జె. బాబా',
    lifespan: '1909 – 1966',
    titleEn: 'The Architect of India’s Nuclear Program',
    titleTe: 'భారత అణుశక్తి పితామహుడు & దార్శనిక శాస్త్రవేత్త',
    keyAchievementsEn: [
      'Devised India’s three-stage nuclear power programme to utilize abundant domestic Thorium reserves',
      'Founded the Tata Institute of Fundamental Research (TIFR) and Bhabha Atomic Research Centre (BARC) at Trombay',
      'Served as the first President of the United Nations Conference on the Peaceful Uses of Atomic Energy in Geneva (1955)'
    ],
    keyAchievementsTe: [
      'భారతదేశంలో అపారంగా ఉన్న థోరియం నిల్వలను వినియోగించుకునే 3-దశల అణుశక్తి ప్రణాళికను రూపొందించాడు',
      'టాటా ఇన్‌స్టిట్యూట్ ఆఫ్ ఫండమెంటల్ రీసెర్చ్ (TIFR) మరియు బాబా అటామిక్ రీసెర్చ్ సెంటర్ (BARC) ల వ్యవస్థాపకుడు',
      '1955లో జెనీవాలో జరిగిన ఐక్యరాజ్యసమితి శాంతియుత అణుశక్తి సదస్సుకు తొలి అధ్యక్షుడిగా ఎన్నికయ్యాడు'
    ],
    quoteEn: 'A country must be self-reliant in science and technology to maintain true sovereignty.',
    quoteTe: 'నిజమైన సార్వభౌమత్వాన్ని నిలబెట్టుకోవడానికి ఒక దేశం విజ్ఞాన మరియు సాంకేతిక రంగాలలో స్వయంసమృద్ధి సాధించాలి.',
    icon: '⚡'
  },
  {
    id: 'venki_ramakrishnan',
    image: './images/indian_history/science_portraits/modern_venki_ramakrishnan.jpg',
    number: 10,
    nameEn: 'Dr. Venkatraman Ramakrishnan (Venki)',
    nameTe: 'డాక్టర్ వెంకట్రామన్ రామకృష్ణన్',
    lifespan: '1952 – Present',
    titleEn: 'Decoding the Molecular Secrets of Life',
    titleTe: 'రైబోజోమ్ సూక్ష్మ రహస్యాలను ఛేదించిన రసాయన నోబెల్ విజేత',
    keyAchievementsEn: [
      'Determined the precise atomic-level 3D crystal structure of the ribosome (the cell’s protein synthesis factory)',
      'Awarded the Nobel Prize in Chemistry in 2009 for studies of the structure and function of the ribosome',
      'Served as President of the Royal Society of London (2015–2020); authored "Gene Machine"'
    ],
    keyAchievementsTe: [
      'కణాల ప్రోటీన్ కర్మాగారమైన "రైబోజోమ్" యొక్క అత్యంత సూక్ష్మ 3D అణు నిర్మాణాన్ని స్పటికీకరణ ద్వారా ఆవిష్కరించాడు',
      'రైబోజోమ్ నిర్మాణం మరియు పనితీరుపై చేసిన పరిశోధనలకు గాను 2009లో రసాయన శాస్త్రంలో నోబెల్ బహుమతి సాధించాడు',
      'ప్రతిష్టాత్మక లండన్ రాయల్ సొసైటీ అధ్యక్షుడిగా (2015–2020) సేవలందించిన విశిష్ట శాస్త్రవేత్త'
    ],
    quoteEn: 'Science is an international endeavor where discoveries build on the work of others.',
    quoteTe: 'విజ్ఞాన శాస్త్రం అనేది సరిహద్దులు లేని అంతర్జాతీయ ప్రయాణం, ప్రతి ఆవిష్కరణ మరొకరి శ్రమపై ఆధారపడి ముందుకు సాగుతుంది.',
    icon: '🔬'
  }
];

// Master Gallery Cards including the 5 new enhanced infographics
export const SCIENCE_GALLERY_INFOGRAPHICS = [
  {
    id: 'ancient_universities',
    titleEn: 'Ancient Universities of Bharat (Centres of Knowledge)',
    titleTe: 'భారతీయ ప్రాచీన విశ్వవిద్యాలయాలు (జ్ఞాన నిధులు)',
    subtitleEn: 'Nalanda, Takshashila, Vikramshila, and Valabhi Universities',
    subtitleTe: 'నలందా, తక్షశిల, విక్రమశిల, మరియు వల్లభి విద్యాపీఠాల సమగ్ర సమాచార చార్ట్',
    src: './images/indian_history/ancient_universities_bharat.jpg'
  },
  {
    id: 'ancient_scientists',
    titleEn: 'Ancient Indian Scientists and Their Discoveries',
    titleTe: 'ప్రాచీన భారతీయ శాస్త్రవేత్తలు మరియు వారి మహోన్నత ఆవిష్కరణలు',
    subtitleEn: 'Charaka, Varahamihira, Bhaskara, Kalidasa, Kanada, Aryabhatta, Sushruta',
    subtitleTe: 'చరకుడు, వరాహమిహిరుడు, భాస్కరాచార్యుడు, కాళిదాసు, కణాదుడు, ఆర్యభట్టు, సుశ్రుతుడు',
    src: './images/indian_history/ancient_indian_scientists.jpg'
  },
  {
    id: 'indian_mathematicians',
    titleEn: 'Indian Mathematicians Explained: Timeless Theories & Infinite Impact',
    titleTe: 'భారతీయ గణిత శాస్త్రవేత్తల సమగ్ర విశ్లేషణ: అనంత ప్రభావం',
    subtitleEn: 'Baudhayana, Aryabhata, Brahmagupta, Bhaskara II, Mahavira, Nilakantha, Madhava, Ramanujan, Kaprekar, Deshpande',
    subtitleTe: 'బౌధాయనుడు, ఆర్యభట్టు, బ్రహ్మగుప్తుడు, భాస్కరుడు, మహావీరుడు, నీలకంఠుడు, మాధవుడు, రామానుజన్, కాప్రేకర్, దేశ్‌పాండే',
    src: './images/indian_history/indian_mathematicians_explained.jpg'
  },
  {
    id: 'acharya_pingala',
    titleEn: 'Acharya Pingala: Binary Number System & Chhandahshastra',
    titleTe: 'ఆచార్య పింగళుడు: బైనరీ సంఖ్యా విధానం & ఛందశ్శాస్త్రం',
    subtitleEn: 'Father of Binary System (Laghu 0, Guru 1), Combinatorics, Meru Prastara',
    subtitleTe: 'లఘువు (0), గురువు (1) బైనరీ కోడ్, 2^3 కాంబినేషన్లు, మేరు ప్రస్తారం మరియు ఆధునిక కంప్యూటర్ సైన్స్ మూలాలు',
    src: './images/indian_history/acharya_pingala_binary.jpg'
  },
  {
    id: 'acharya_chanakya_books',
    titleEn: 'Books Written by Chanakya – The Timeless Wisdom of Acharya Chanakya',
    titleTe: 'ఆచార్య చాణక్యుడు రచించిన సప్త గ్రంథాలు – కాలాతీత రాజనీతి విజ్ఞానం',
    subtitleEn: 'Arthashastra, Nitisara, Chanakya Niti, Rajaneeti, Dandaneeti, Yogavaasishtha, Apta Prashna',
    subtitleTe: 'అర్థశాస్త్రము, నీతిసారము, చాణక్య నీతి, రాజనీతి, దండనీతి, యోగవాసిష్ఠము, ఆప్త ప్రశ్న',
    src: './images/indian_history/chanakya_books_poster.jpg'
  },
  {
    id: 'modern_scientists',
    titleEn: 'Indian Scientists Who Changed The World: Brilliant Minds & Discoveries',
    titleTe: 'ప్రపంచాన్ని మార్చిన భారతీయ ఆధునిక శాస్త్రవేత్తలు',
    subtitleEn: 'C. V. Raman, S. N. Bose, S. Chandrasekhar, Ramanujan, Abdul Kalam, Khorana, Sarabhai, Swaminathan, Bhabha, Venki Ramakrishnan',
    subtitleTe: 'సి. వి. రామన్, ఎస్. ఎన్. బోస్, ఎస్. చంద్రశేఖర్, రామానుజన్, అబ్దుల్ కలాం, ఖొరానా, సారాభాయ్, స్వామినాథన్, బాబా, వెంకీ రామకృష్ణన్',
    src: './images/indian_history/indian_scientists_changed_world.jpg'
  }
];
