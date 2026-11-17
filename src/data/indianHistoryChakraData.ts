// Complete Bilingual Dataset for "భారతీయ చరిత్ర: కాలానుక్రమణిక మరియు మహా సామ్రాజ్యాలు కాలచక్రం"
// Scaled along the 25,800-Year Yuga Cycle from Prehistory to Present Day (2026 CE) & Beyond

export interface ChakraTimeEvent {
  id: string;
  order: number;
  spokeNumber: number;
  titleTe: string;
  titleEn: string;
  periodTe: string;
  periodEn: string;
  category: 'prehistory' | 'ancient' | 'vedic' | 'classical' | 'golden_age' | 'medieval' | 'empire' | 'modern' | 'contemporary' | 'present';
  categoryTe: string;
  categoryEn: string;
  icon: string;
  color: string;
  accentColor: string;
  isCurrentTime?: boolean;
  startAngleDeg: number;
  endAngleDeg: number;
  midAngleDeg: number;
  spanDeg: number;
  yugaEquivalentTe: string;
  yugaEquivalentEn: string;
  rulersTe: string[];
  rulersEn: string[];
  capitalsTe: string[];
  capitalsEn: string[];
  keyEventsTe: string[];
  keyEventsEn: string[];
  cultureAchievementsTe: string[];
  cultureAchievementsEn: string[];
  whatChangedTe: string;
  whatChangedEn: string;
  significanceTe: string;
  significanceEn: string;
  relatedImage?: string;
  tagTe: string;
  tagEn: string;
}

export const INDIAN_HISTORY_CHAKRA_EVENTS: ChakraTimeEvent[] = [
  {
    id: 'prehistory_stone_age',
    order: 1,
    spokeNumber: 1,
    titleTe: 'చరిత్రపూర్వ & శిలాయుగం',
    titleEn: 'Prehistoric Stone Age & Mehrgarh',
    periodTe: 'క్రీ.పూ. 20,00,000 – 3300',
    periodEn: '2,000,000 – 3300 BCE',
    category: 'prehistory',
    categoryTe: 'చరిత్రపూర్వ యుగం',
    categoryEn: 'Pre-Historic Age',
    icon: '🪨',
    color: '#5D4037',
    accentColor: '#8D6E63',
    startAngleDeg: -98.37,
    endAngleDeg: -72,
    midAngleDeg: -85.19,
    spanDeg: 26.37,
    yugaEquivalentTe: 'కటాక్లిస్మోస్ & తొలి త్రేతా',
    yugaEquivalentEn: 'Kataklysmos & Early Treta',
    tagTe: 'ఆదిమ మానవ వికాసం',
    tagEn: 'Early Human Evolution',
    rulersTe: ['ఆదిమ మానవ సమూహాలు (హోమో ఎరెక్టస్, హోమో సేపియన్స్ తెగలు)'],
    rulersEn: ['Early Hunter-Gatherer Bands (Homo erectus & Homo sapiens)'],
    capitalsTe: ['భీంబేట్కా (మధ్యప్రదేశ్)', 'మెహర్‌గఢ్ (బలూచిస్తాన్)', 'బూర్జహోమ్ (కాశ్మీర్)', 'హున్సగీ (కర్ణాటక)'],
    capitalsEn: ['Bhimbetka (MP)', 'Mehrgarh (Baluchistan)', 'Burzahom (Kashmir)', 'Hunsgi (Karnataka)'],
    keyEventsTe: [
      'రాతితో ముతక గొడ్డళ్ళు, చేతి పరికరాల రూపకల్పన',
      'నిప్పును నియంత్రించడం మరియు ఆహార సేకరణ',
      'మెహర్‌గఢ్ వద్ద దక్షిణాసియాలోనే తొలి బార్లీ, గోధుమ వ్యవసాయం (క్రీ.పూ. 7000)',
      'భీంబేట్కా గుహల్లో సహజ రంగులతో జంతువులు, వేట చిత్రలేఖనం'
    ],
    keyEventsEn: [
      'Fashioning of Acheulean handaxes and cleavers from quartzite',
      'Control of fire and transition from scavenger to skilled hunter',
      'Earliest settled farming of wheat & barley at Mehrgarh (~7000 BCE)',
      'Mesolithic rock paintings depicting wildlife and community rituals at Bhimbetka'
    ],
    cultureAchievementsTe: [
      'సూక్ష్మరాతి పనిముట్లు (మైక్రోలిత్స్ - 1 నుండి 5 సెం.మీ)',
      'చేతితో చేసిన మట్టిపాత్రలు మరియు రాతి గృహాలు',
      'గొర్రెలు, మేకలు, పెంపుడు కుక్కల తొలినాటి మచ్చిక'
    ],
    cultureAchievementsEn: [
      'Microlithic technology (fine arrowheads and geometric blades)',
      'Handmade terracotta pottery and mud-brick dwellings',
      'Early domestication of zebu cattle, sheep, and canines'
    ],
    whatChangedTe: 'నిరంతర సంచార వేట జీవనం నుండి క్రమంగా స్థిర నివాస వ్యవసాయ గ్రామ సంస్కృతికి నాంది పలికింది.',
    whatChangedEn: 'Shifted nomadic hunter-gatherer bands into permanent agricultural village settlements.',
    significanceTe: 'భారత ఉపఖండంలో 5,000 ఏళ్ళ నాగరికతకు ప్రాథమిక భౌతిక, సాంకేతిక పునాదులను నిర్మించిన తొలి యుగం.',
    significanceEn: 'Laid the biological, technological, and agricultural foundations of Indian civilization.',
    relatedImage: './images/indian_history/historic_periods/milestone_1_species.jpg'
  },
  {
    id: 'ramayana_ikshvaku_empire',
    order: 2,
    spokeNumber: 2,
    titleTe: 'రామాయణ యుగం – సూర్యవంశం (ఇక్ష్వాకు సామ్రాజ్యం)',
    titleEn: 'Ramayana Era – Ikshvaku Dynasty (Suryavansha)',
    periodTe: 'త్రేతాయుగం (~క్రీ.పూ. 7500 – 6000)',
    periodEn: 'Treta Yuga (~7500 – 6000 BCE)',
    category: 'ancient',
    categoryTe: 'ఇతిహాస యుగం (త్రేతా)',
    categoryEn: 'Epic Era (Treta Yuga)',
    icon: '🏹',
    color: '#D84315',
    accentColor: '#BF360C',
    tagTe: 'రామరాజ్యం & ధర్మపాలన',
    tagEn: 'Ramarajya & Supreme Dharma',
    startAngleDeg: -72.00,
    endAngleDeg: -46.00,
    midAngleDeg: -59.00,
    spanDeg: 26.00,
    yugaEquivalentTe: 'అవరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Descending Treta Yuga',
    rulersTe: ['శ్రీరామచంద్రుడు (మర్యాదా పురుషోత్తముడు)', 'దశరథ మహారాజు', 'రఘు మహారాజు', 'దిలీపుడు', 'ఇక్ష్వాకు చక్రవర్తి (సూర్యవంశ మూలపురుషుడు)', 'హరిశ్చంద్రుడు'],
    rulersEn: ['Bhagavan Sri Ramachandra (Maryada Purushottama)', 'King Dasharatha', 'King Raghu', 'King Dilipa', 'Emperor Ikshvaku (Founder of Solar Dynasty)', 'Harishchandra'],
    capitalsTe: ['అయోధ్య (కోసల రాజ్యం)', 'దండకారణ్యం', 'కిష్కింధ (వానర రాజ్యం)', 'లంక'],
    capitalsEn: ['Ayodhya (Kosala Kingdom)', 'Dandakaranya', 'Kishkindha', 'Lanka'],
    keyEventsTe: [
      'శ్రీరామావతారం మరియు విశ్వామిత్ర యాగ సంరక్షణ, తాటక సంహారం',
      'మిథిలలో శివధనుర్భంగం మరియు సీతా కల్యాణం',
      'పితృవాక్య పరిపాలనార్థం 14 సంవత్సరాల అరణ్యవాస ప్రస్థానం',
      'పంచవటి, లంకా దహనం, రామసేతు నిర్మాణం మరియు రావణ సంహారం',
      'అయోధ్యా నగరంలో శ్రీరామ పట్టాభిషేకం మరియు ఆదర్శ రామరాజ్య పాలన'
    ],
    keyEventsEn: [
      'Incarnation of Sri Rama, protection of Sage Vishvamitra’s Vedic yajna',
      'Breaking of Shiva’s Pinaka bow in Mithila and wedding with Devi Sita',
      '14-year exile to uphold truth and paternal pledge',
      'Construction of the historic Ram Setu (Adam\'s Bridge) across the ocean and destruction of Ravana',
      'Coronation of Sri Rama at Ayodhya establishing the timeless golden standard of Ramarajya'
    ],
    cultureAchievementsTe: [
      'మహర్షి వాల్మీకి విరచిత శ్రీమద్ రామాయణం (24,000 శ్లోకాలతో ప్రథమ సంస్కృత ‘ఆది కావ్యం’)',
      'ఏకపత్నీవ్రతం, సత్యపాలన, మాతాపితృ సేవ మరియు శరణాగత రక్షణ ధర్మం',
      'ప్రపంచంలోనే ప్రసిద్ధి చెందిన సముద్ర వారధి ‘రామసేతు’ ఇంజనీరింగ్ అద్భుతం',
      'రామరాజ్యం: ఆకలి, రోగాలు, నేరాలు, అకాల మరణాలు లేని సర్వజన సౌభాగ్య పాలన'
    ],
    cultureAchievementsEn: [
      'Composition of Valmiki Ramayana (the timeless Adi Kavya in 24,000 verses)',
      'Supreme ethical benchmarks: monogamous fidelity, unconditional filial devotion, truthfulness',
      'Historic marine civil engineering of Ram Setu connecting Rameshwaram to Sri Lanka',
      'Ramarajya governance model: zero poverty, zero crime, universal prosperity, ecological harmony'
    ],
    whatChangedTe: 'మానవ సమాజానికి ధర్మం, నైతికత, భ్రాతృప్రేమ మరియు ఆదర్శ రాజ్యపాలనకు అత్యున్నత ప్రమాణాన్ని అందించింది.',
    whatChangedEn: 'Gifted humanity the timeless ideal of ethical statecraft, righteous leadership, and filial devotion.',
    significanceTe: 'సనాతన ధర్మ సంస్కృతిలో శ్రీరామచంద్రుడు ఆదర్శ మానవుడిగా, రామరాజ్యం సర్వశ్రేష్ఠ సమాజానికి చిహ్నంగా నిలిచాయి.',
    significanceEn: 'The supreme moral compass and cultural bedrock of Bharat and Southeast Asian civilization.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  },
  {
    id: 'indus_saraswati_civilization',
    order: 3,
    spokeNumber: 3,
    titleTe: 'సింధు-సరస్వతీ లోయ నాగరికత',
    titleEn: 'Indus-Saraswati Civilization',
    periodTe: 'క్రీ.పూ. 3300 – 1300',
    periodEn: '3300 – 1300 BCE',
    category: 'ancient',
    categoryTe: 'తొలి నగర నాగరికత',
    categoryEn: 'First Urbanization',
    icon: '🏺',
    color: '#B7791F',
    accentColor: '#D69E2E',
    startAngleDeg: -46,
    endAngleDeg: -10,
    midAngleDeg: -28,
    spanDeg: 36,
    yugaEquivalentTe: 'అవరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Descending Dwapara Yuga',
    tagTe: 'గ్రిడ్ నగర విప్లవం',
    tagEn: 'Master Urban Planning',
    rulersTe: ['పురపాలక వర్తక మండలి / పూజారి-ప్రజాప్రతినిధులు (శాంతియుత సమాఖ్య)'],
    rulersEn: ['Merchant-Priest Councils & Civic Municipal Guilds (Egalitarian Governance)'],
    capitalsTe: ['హరప్పా', 'మొహెంజొదారో', 'ధోలవీర (కచ్)', 'లోథాల్ (ఓడరేవు)', 'రాఖీగఢీ (హర్యానా)', 'కాళీబంగన్'],
    capitalsEn: ['Harappa', 'Mohenjo-daro', 'Dholavira', 'Lothal Port', 'Rakhigarhi', 'Kalibangan'],
    keyEventsTe: [
      'కాల్చిన ఇటుకలతో అద్భుత గ్రిడ్ నగర నిర్మాణం మరియు సమకోణ వీధులు',
      'ప్రపంచంలోనే ప్రథమ భూగర్భ మురుగునీటి పారుదల వ్యవస్థ',
      'లోథాల్ వద్ద ప్రపంచంలోనే తొలి టైడల్ ఓడరేవు (డాక్‌యార్డ్) నిర్మాణం',
      'మెసొపొటేమియా (మెలుహా) మరియు ఈజిప్టులతో సుదూర సముద్ర వాణిజ్యం'
    ],
    keyEventsEn: [
      'Sophisticated cardinal grid street planning and baked brick multi-storey houses',
      'World-first covered underground covered drainage and domestic sanitation',
      'Construction of the world’s earliest tidal maritime dockyard at Lothal',
      'Extensive maritime trade with Mesopotamia (Meluhha) and Dilmun (Bahrain)'
    ],
    cultureAchievementsTe: [
      'కాంస్య నర్తకి విగ్రహం (లాస్ట్-వాక్స్ కాస్టింగ్ పద్ధతి)',
      'పశుపతి ముద్రిక (యోగి భంగిమలో శివుని ఆద్య రూపం)',
      'ప్రామాణిక బైనరీ మరియు దశాంశ తూనికలు-కొలతల వ్యవస్థ',
      'ధోలవీర వద్ద అద్భుతమైన రాతి నీటి రిజర్వాయర్లు మరియు సైన్‌బోర్డు'
    ],
    cultureAchievementsEn: [
      'Bronze Dancing Girl using lost-wax metallurgy technique',
      'Pashupati Seal (proto-Shiva in yogic meditation surrounded by animals)',
      'Binary-decimal weight standards accurate to microscopic fractions',
      'Dholavira colossal stone water harvesting reservoirs and city signboard'
    ],
    whatChangedTe: 'దక్షిణాసియాలో మొట్టమొదటి మహోన్నత నగర నాగరికత, శానిటేషన్ మరియు అంతర్జాతీయ వర్తకం ఉద్భవించాయి.',
    whatChangedEn: 'Pioneered South Asia’s first Bronze Age urban revolution, hygiene, and maritime commerce.',
    significanceTe: 'పరిశుభ్రత, సమానత్వం, వాస్తు ప్రణాళిక మరియు శాంతియుత సహజీవనంలో ప్రపంచానికి మార్గదర్శి.',
    significanceEn: 'A beacon of egalitarian urbanism, peaceful governance, and master civil engineering.',
    relatedImage: './images/indian_history/grand_overview/epoch_01_indus_valley.jpg'
  },
  {
    id: 'mahabharata_kuru_empire',
    order: 4,
    spokeNumber: 4,
    titleTe: 'మహాభారత యుగం – కురు వంశం & ధర్మయుద్ధం',
    titleEn: 'Mahabharata Era – Kuru Dynasty & Gita',
    periodTe: 'ద్వాపర-కలి సంధికాలం (క్రీ.పూ. 3102 • కలి ప్రవేశం)',
    periodEn: 'Dwapara-Kali Sandhi (3102 BCE • Kali Yuga Start)',
    category: 'ancient',
    categoryTe: 'ఇతిహాస యుగం (ద్వాపర-కలి)',
    categoryEn: 'Epic Era (Dwapara-Kali)',
    icon: '🕉️',
    color: '#B71C1C',
    accentColor: '#E53935',
    tagTe: 'భగవద్గీత & ధర్మసంస్థాపన',
    tagEn: 'Bhagavad Gita & Dharma',
    startAngleDeg: -10.00,
    endAngleDeg: 8.00,
    midAngleDeg: -1.00,
    spanDeg: 18.00,
    yugaEquivalentTe: 'ద్వాపర-కలి సంధికాలం (క్రీ.పూ. 3102)',
    yugaEquivalentEn: 'Dwapara-Kali Sandhi (3102 BCE)',
    rulersTe: ['భగవాన్ శ్రీకృష్ణుడు (జగద్గురువు & ధర్మ రక్షకుడు)', 'ధర్మరాజు (యుధిష్ఠిరుడు)', 'అర్జునుడు (గాండీవధారి)', 'భీష్మ పితామహుడు', 'చక్రవర్తి పరీక్షిత్తు', 'జనమేజయుడు'],
    rulersEn: ['Bhagavan Sri Krishna (Jagadguru & Protector of Dharma)', 'Dharmaraja Yudhishthira', 'Arjuna (The Great Archer)', 'Bhishma Pitamaha', 'Emperor Parikshit', 'Janamejaya'],
    capitalsTe: ['హస్తినాపురం (కురు రాజ్యం)', 'ఇంద్రప్రస్థం (పాండవ రాజధాని)', 'కురుక్షేత్రం (ధర్మక్షేత్రం)', 'ద్వారక (శ్రీకృష్ణ సామ్రాజ్యం)'],
    capitalsEn: ['Hastinapur (Kuru Realm)', 'Indraprastha (Pandava Capital)', 'Kurukshetra (Battleground of Dharma)', 'Dwaraka (Sri Krishna’s Golden Realm)'],
    keyEventsTe: [
      'రాజసూయ యాగం మరియు మయసభ అద్భుత వాస్తు శిల్పం',
      'కురుసభలో ద్యూతక్రీడ మరియు ద్రౌపదీ వస్త్రాపహరణ ఘట్టం',
      'కురుక్షేత్ర ధర్మక్షేత్రంలో 18 అక్షౌహిణుల మహా సంగ్రామం',
      'యుద్ధరంగంలో విషాదగ్రస్తుడైన అర్జునునికి భగవాన్ శ్రీకృష్ణుని భగవద్గీతోపదేశం',
      'ధర్మరాజ పట్టాభిషేకం, శ్రీకృష్ణావతార పరిసమాప్తి మరియు కలియుగ ప్రవేశం (క్రీ.పూ. 3102)'
    ],
    keyEventsEn: [
      'Rajasuya Yajna and the architectural marvel of Maya Sabha in Indraprastha',
      'Dice game in Hastinapur court and disrobing attempt of Draupadi',
      'The epic 18-day Kurukshetra War involving 18 Akshauhinis of warriors',
      'Revelation of the divine Srimad Bhagavad Gita by Sri Krishna to despairing Arjuna',
      'Coronation of Dharmaraja Yudhishthira, departure of Sri Krishna and Kaliyuga inception (3102 BCE)'
    ],
    cultureAchievementsTe: [
      'మహర్షి వేదవ్యాస ప్రణీత ‘మహాభారతం’ (లక్ష శ్లోకాలతో ప్రపంచంలోనే అతిపెద్ద ఇతిహాస కావ్యం)',
      '‘శ్రీమద్భగవద్గీత’ (700 శ్లోకాలు - కర్మ, భక్తి, జ్ఞాన, రాజయోగాల సమగ్ర జీవన వేదం)',
      'భీష్మ పితామహుడు అంపశయ్యపై ఉపదేశించిన ‘శ్రీ విష్ణు సహస్రనామ స్తోత్రం’ మరియు రాజధర్మం',
      'కలియుగ కాలగణనారంభం: శ్రీకృష్ణ నిర్యాణం ఆధారంగా క్రీ.పూ. 3102 ఫిబ్రవరి 18 నుండి కలియుగం లెక్కించబడుతోంది'
    ],
    cultureAchievementsEn: [
      'Maharshi Veda Vyasa’s monumental Mahabharata (100,000 verses—world’s longest epic poetry)',
      'Srimad Bhagavad Gita: The immortal 700 verses synthesizing Karma, Bhakti, and Jnana Yoga',
      'Sri Vishnu Sahasranama Stotram revealed by Bhishma Pitamaha from the bed of arrows',
      'Astronomical inception of the Kali Yuga epoch fixed to February 18, 3102 BCE following Krishna’s departure'
    ],
    whatChangedTe: 'ద్వాపర యుగం ముగిసి కలియుగం ఆరంభమైంది; మానవాళికి ధర్మ సంక్షోభాలలో మార్గదర్శనం చేసే భగవద్గీతామృతం లభించింది.',
    whatChangedEn: 'Marked the transition from Dwapara to Kali Yuga, bestowing the eternal compass of the Gita for all righteous dilemmas.',
    significanceTe: 'సనాతన ధర్మ తాత్విక సారానికి మకుటాయమానమైన భగవద్గీత మరియు ధర్మవిజయానికి ప్రతీక.',
    significanceEn: 'The supreme philosophical crown of Sanatana Dharma and the eternal victory of Dharma over Adharma.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  },
  {
    id: 'early_vedic_period',
    order: 5,
    spokeNumber: 5,
    titleTe: 'తొలి వేద నాగరికత & సప్తసింధు',
    titleEn: 'Early Vedic Age & Rigveda',
    periodTe: 'క్రీ.పూ. 1500 – 1000',
    periodEn: '1500 – 1000 BCE',
    category: 'vedic',
    categoryTe: 'వేద యుగం',
    categoryEn: 'Vedic Civilization',
    icon: '🕉️',
    color: '#C05621',
    accentColor: '#DD6B20',
    startAngleDeg: 8,
    endAngleDeg: 18,
    midAngleDeg: 13,
    spanDeg: 10,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 1)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 1)',
    tagTe: 'ఋగ్వేద సూక్తాలు',
    tagEn: 'Hymns of the Rigveda',
    rulersTe: ['సుదాస మహారాజు (భరత వంశం)', 'దివోదాసుడు', 'పురుకుత్సుడు', 'విశ్వామిత్ర, వశిష్ట మహర్షులు'],
    rulersEn: ['King Sudas (Bharata Tribe)', 'Divodasa', 'Purukutsa', 'Sage Vishvamitra & Vashistha'],
    capitalsTe: ['సప్తసింధు ప్రాంతం (పంజాబ్, హర్యానా, సరస్వతీ నదీ పరీవాహక ప్రాంతం)'],
    capitalsEn: ['Sapta Sindhu Region (Punjab, Saraswati-Drishadvati Valleys)'],
    keyEventsTe: [
      'ప్రపంచంలోనే అత్యంత ప్రాచీన గ్రంథమైన ఋగ్వేద సంహిత సంకలనం (1,028 సూక్తాలు)',
      'చారిత్రక దాశరాజ్ఞ యుద్ధం (పదిమంది రాజుల సమరం) - సుదాసుని విజయం',
      'సభ, సమితి, విదథ ప్రజాస్వామ్య ప్రజా మండళ్ళ నిర్వహణ',
      'పవిత్ర సరస్వతీ నదీ తీరాన అగ్నిహోత్ర క్రతువులు'
    ],
    keyEventsEn: [
      'Oral codification of the Rigveda Samhita (1,028 hymns in sacred Sanskrit)',
      'Historic Battle of the Ten Kings (Dasharajna) on the banks of Parushni (Ravi)',
      'Democratic governance assemblies: Sabha (elders) and Samiti (general folk)',
      'Spiritual ceremonies and Soma rituals along the divine Saraswati river'
    ],
    cultureAchievementsTe: [
      'గాయత్రీ మహా మంత్రం (విశ్వామిత్ర మహర్షి దర్శనం)',
      'నాసదీయ సూక్తం (సృష్టి ఆరంభ రహస్య తాత్విక చింతన)',
      'ప్రకృతి శక్తుల దైవారాధన (ఇంద్ర, అగ్ని, వరుణ, సూర్య, ఉషస్సు)',
      'గో సంరక్షణ మరియు సరళ సమానత్వ సామాజిక జీవనం'
    ],
    cultureAchievementsEn: [
      'The sacred Gayatri Mantra revealed through Sage Vishvamitra',
      'Nasadiya Sukta (Hymn of Creation - profound metaphysical cosmogony)',
      'Veneration of cosmic natural powers (Indra, Agni, Varuna, Surya, Ushas)',
      'Pastoral agro-economy with cattle veneration and fluid egalitarian society'
    ],
    whatChangedTe: 'వేద మంత్ర విజ్ఞానం, సంస్కృత భాషా సౌందర్యం మరియు సనాతన ధర్మ తాత్విక బీజాలు స్థిరపడ్డాయి.',
    whatChangedEn: 'Established the sacred foundations of Sanskrit phonetics, poetic meters, and Sanatana cosmology.',
    significanceTe: 'సమస్త భారతీయ ఆత్మకు, ఆధ్యాత్మికతకు మరియు వేదాంతానికి మూలస్తంభం.',
    significanceEn: 'The eternal philosophical, poetic, and spiritual root of Indian civilization.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  },
  {
    id: 'later_vedic_upanishads',
    order: 6,
    spokeNumber: 6,
    titleTe: 'మలి వేద యుగం & ఉపనిషత్తులు',
    titleEn: 'Later Vedic Age & Upanishads',
    periodTe: 'క్రీ.పూ. 1000 – 600',
    periodEn: '1000 – 600 BCE',
    category: 'vedic',
    categoryTe: 'తాత్విక యుగం',
    categoryEn: 'Upanishadic Era',
    icon: '📜',
    color: '#9C4221',
    accentColor: '#C53030',
    startAngleDeg: 18,
    endAngleDeg: 28,
    midAngleDeg: 23,
    spanDeg: 10,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 1)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 1)',
    tagTe: 'బ్రహ్మవిద్య & వేదాంతం',
    tagEn: 'Vedanta & Philosophy',
    rulersTe: ['జనక మహారాజు (విదేహ)', 'పరీక్షిత్ మహారాజు', 'జనమేజయుడు (కురు వంశం)', 'యాజ్ఞవల్క్య మహర్షి'],
    rulersEn: ['King Janaka of Videha', 'King Parikshit', 'Janamejaya of Kuru', 'Sage Yajnavalkya'],
    capitalsTe: ['హస్తినాపురం', 'కౌశాంబి', 'మిథిల (విదేహ)', 'అయోధ్య', 'ఇంద్రప్రస్థం'],
    capitalsEn: ['Hastinapur', 'Kaushambi', 'Mithila (Videha)', 'Ayodhya', 'Indraprastha'],
    keyEventsTe: [
      'యజుర్వేదం, సామవేదం, అధర్వణవేద సంహితల సంకలనం',
      'ఇనుము (శ్యామ అయస్) వినియోగంతో గంగా మైదాన అడవుల నరికివేత & విస్తార వ్యవసాయం',
      'జనక చక్రవర్తి రాజసభలో బ్రహ్మవిద్యా సదస్సులు',
      'గార్గి వాచక్నవి, మైత్రేయిల అద్భుత తాత్విక వాదనలు'
    ],
    keyEventsEn: [
      'Codification of Yajurveda, Samaveda, and Atharvaveda along with Brahmanas',
      'Widespread use of iron (Shyama Ayas) clearing dense Gangetic forests for agriculture',
      'King Janaka’s grand philosophical symposiums in Mithila',
      'Epic debates by celebrated female philosophers Gargi Vachaknavi and Maitreyi'
    ],
    cultureAchievementsTe: [
      'ముఖ్య 108 ఉపనిషత్తులు (ఈశ, కేన, కఠ, బృహదారణ్యక, ఛాందోగ్య)',
      'అహం బ్రహ్మాస్మి, తత్త్వమసి మహావాక్యాల ఆవిష్కరణ',
      'షడ్దర్శనాలు (సాంఖ్య, యోగ, న్యాయ, వైశేషిక, మీమాంస, వేదాంత) బీజాలు',
      'చతురాశ్రమ ధర్మాలు (బ్రహ్మచర్య, గృహస్థ, వానప్రస్థ, సన్యాస)'
    ],
    cultureAchievementsEn: [
      'The Principal Upanishads formulating non-dual Brahman and Atman',
      'Immortal Mahavakyas: "Aham Brahmasmi" and "Tat Tvam Asi"',
      'Formulation of the 6 orthodox schools of Indian philosophy (Shaddarshana)',
      'Institutionalization of the 4 Ashramas and Varna-Ashrama duties'
    ],
    whatChangedTe: 'బాహ్య యజ్ఞ క్రతువుల నుండి అంతర్గత జ్ఞానం, మోక్ష సాధన మరియు అద్వైత తాత్వికత వైపు పరివర్తన.',
    whatChangedEn: 'Transformed ritual sacrificial worship into profound inward introspection and Moksha pursuit.',
    significanceTe: 'భారతీయ అధ్యాత్మ విజ్ఞానానికి పరాకాష్ఠ అయిన ఉపనిషత్ జ్ఞాన భాండాగారం సమకూరింది.',
    significanceEn: 'The intellectual pinnacle of humanity’s mystical and metaphysical literature.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  },
  {
    id: 'mahajanapadas_shramana',
    order: 7,
    spokeNumber: 7,
    titleTe: '16 మహాజనపదాలు & శ్రమణ యుగం',
    titleEn: '16 Mahajanapadas & Shramana Era',
    periodTe: 'క్రీ.పూ. 600 – 345',
    periodEn: '600 – 345 BCE',
    category: 'ancient',
    categoryTe: 'రాజ్యాల ఆవిర్భావం',
    categoryEn: 'Second Urbanization',
    icon: '☸️',
    color: '#2B6CB0',
    accentColor: '#3182CE',
    startAngleDeg: 28,
    endAngleDeg: 35,
    midAngleDeg: 31.5,
    spanDeg: 7,
    yugaEquivalentTe: 'మధ్యమ కలి సంధి',
    yugaEquivalentEn: 'Mid-Kali Sandhi',
    tagTe: 'బుద్ధుడు & మహావీరుడు',
    tagEn: 'Buddha & Mahavira',
    rulersTe: ['గౌతమ బుద్ధుడు', 'వర్ధమాన మహావీరుడు', 'ప్రసేనజిత్ (కోసల)', 'ప్రద్యోతుడు (అవంతి)', 'ఉదయనుడు (వత్స)'],
    rulersEn: ['Gautama Buddha', 'Vardhamana Mahavira', 'Prasenajit of Kosala', 'Pradyota of Avanti', 'Udayana of Vatsa'],
    capitalsTe: ['రాజగృహం (మగధ)', 'శ్రావస్తి (కోసల)', 'ఉజ్జయిని (అవంతి)', 'వైశాలి (వజ్జి గణతంత్రం)', 'తక్షశిల (గాంధార)'],
    capitalsEn: ['Rajgir (Magadha)', 'Shravasti (Kosala)', 'Ujjain (Avanti)', 'Vaishali (Vajji Republic)', 'Taxila (Gandhara)'],
    keyEventsTe: [
      'భారతదేశంలో 16 మహాజనపదాల (రాచరికాలు & గణతంత్రాలు) ఆవిర్భావం',
      'గౌతమ బుద్ధుని జ్ఞానోదయం (బోధగయ) మరియు ధర్మచక్ర ప్రవర్తనం (సారనాథ్)',
      '24వ తీర్థంకరుడు వర్ధమాన మహావీరుని అహింసా, సత్య ప్రబోధం',
      'తక్షశిల విశ్వవిద్యాలయం అంతర్జాతీయ విద్యా కేంద్రంగా విలసిల్లడం'
    ],
    keyEventsEn: [
      'Consolidation of 16 great territorial states (monarchies and Sangha-Ganas)',
      'Gautama Buddha’s enlightenment at Bodh Gaya and First Sermon at Sarnath',
      'Vardhamana Mahavira preaching Jain Anekantavada, Aparigraha & Ahimsa',
      'Taxila University flourishing as the epicenter of medicine, statecraft, and arts'
    ],
    cultureAchievementsTe: [
      'బౌద్ధ అష్టాంగ మార్గం, చతురార్య సత్యాలు & జైన త్రిరత్నాలు',
      'వైశాలి లిచ్ఛవి ప్రపంచంలోనే తొలి సమాఖ్య ప్రజాస్వామ్య గణతంత్రం',
      'పంచ్-మార్క్డ్ వెండి నాణేల (కార్షాపణలు) ఆరంభం',
      'నల్లని మెరుగైన మట్టిపాత్రల సంస్కృతి (NBPW)'
    ],
    cultureAchievementsEn: [
      'Noble Eightfold Path, Four Noble Truths, and Jain Triratnas',
      'Vajji confederacy in Vaishali pioneering early republican democracy',
      'Introduction of metallic punch-marked silver currency (Karshapanas)',
      'Northern Black Polished Ware (NBPW) marking high ceramic sophistication'
    ],
    whatChangedTe: 'రెండో నగర విప్లవం, అహింస, కరుణ, తాత్విక సమన్వయం మరియు నాణేల ఆర్థిక వ్యవస్థ మొదలయ్యాయి.',
    whatChangedEn: 'Sparked the Second Urbanization, monetary economy, and compassionate ethical renaissance.',
    significanceTe: 'ప్రపంచానికి అహింస, శాంతి మరియు మానవతా ధర్మాన్ని ప్రసాదించిన అమూల్య శకం.',
    significanceEn: 'Gifted humanity the timeless principles of non-violence, ethical inquiry, and enlightenment.',
    relatedImage: './images/indian_history/grand_overview/epoch_03_mahajanapadas.jpg'
  },
  {
    id: 'magadha_dynasties',
    order: 8,
    spokeNumber: 8,
    titleTe: 'మగధ సామ్రాజ్యోదయము',
    titleEn: 'Rise of Magadha (Haryanka to Nanda)',
    periodTe: 'క్రీ.పూ. 544 – 322',
    periodEn: '544 – 322 BCE',
    category: 'empire',
    categoryTe: 'మహా సామ్రాజ్యం',
    categoryEn: 'Early Imperial Rise',
    icon: '🏰',
    color: '#2C5282',
    accentColor: '#3182CE',
    startAngleDeg: 35,
    endAngleDeg: 40,
    midAngleDeg: 37.5,
    spanDeg: 5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'పాటలీపుత్ర వైభవం',
    tagEn: 'Imperial Dominance',
    rulersTe: ['బింబిసారుడు', 'అజాతశత్రువు (హర్యంక)', 'శిశునాగుడు', 'కాలశోకుడు', 'మహాపద్మనందుడు (సర్వక్షత్రాంతక)'],
    rulersEn: ['Bimbisara', 'Ajatashatru (Haryanka)', 'Shishunaga', 'Kalashoka', 'Mahapadma Nanda (First Empire Builder)'],
    capitalsTe: ['గిరివ్రజం / రాజగృహం', 'పాటలీపుత్రం (గంగా-శోణ్ నదీ సంగమం)'],
    capitalsEn: ['Girivraja / Rajgir', 'Pataliputra (Patna - Ganga confluence)'],
    keyEventsTe: [
      'మగధ ప్రాంతపు అపార ఇనుప గనులు, ఏనుగుల బలంతో మహా సైన్యం ఏర్పాటు',
      'అజాతశత్రువు రాజగృహంలో ప్రథమ బౌద్ధ సంగీతిని నిర్వహించడం (483 BCE)',
      'పాటలీపుత్ర నగర నిర్మాణం - అఖండ భారతావని రాజకీయ కేంద్రంగా మార్పు',
      'నంద వంశపు మహా సైన్య పరాక్రమాన్ని విని అలెగ్జాండర్ సైనికులు వెనుదిరగడం'
    ],
    keyEventsEn: [
      'Exploitation of rich iron deposits in Chota Nagpur & war elephant regiments',
      'Ajatashatru patronizing the First Buddhist Council at Rajgir (483 BCE)',
      'Foundation of fortified Pataliputra as the permanent imperial capital',
      'The colossal Nanda standing army forcing Alexander’s troops to mutiny at the Hyphasis'
    ],
    cultureAchievementsTe: [
      'రథముసల (బ్లేడ్లతో తిరిగే రథం) మరియు మహాశిలాకంటక (రాళ్ళు విసిరే యంత్రం) ఆవిష్కరణ',
      'కఠిన కేంద్రీకృత పన్నుల వసూలు వ్యవస్థ',
      'కాలశోకుని కాలంలో వైశాలిలో రెండో బౌద్ధ సంగీతి'
    ],
    cultureAchievementsEn: [
      'Military innovations: Rathamusala (scythed chariot) and Mahashilakantaka (catapult)',
      'Creation of the first continental standing army and standardized treasury',
      'Second Buddhist Council at Vaishali under King Kalashoka'
    ],
    whatChangedTe: 'ప్రాంతీయ చిన్న రాజ్యాలు కనుమరుగై ఒకే కేంద్రం నుండి పాలించే భారీ సామ్రాజ్యాల సంస్కృతి మొదలైంది.',
    whatChangedEn: 'Merged fragmented city-kingdoms into South Asia’s first militarized centralized super-state.',
    significanceTe: 'మౌర్య మహా సామ్రాజ్య స్థాపనకు రాజకీయ, సైనిక మరియు ఆర్థిక వేదికను సిద్ధం చేసింది.',
    significanceEn: 'Built the imperial infrastructure and standing army inherited by Chandragupta Maurya.',
    relatedImage: './images/indian_history/grand_overview/epoch_03_mahajanapadas.jpg'
  },
  {
    id: 'maurya_empire',
    order: 9,
    spokeNumber: 9,
    titleTe: 'మౌర్య మహా సామ్రాజ్యం',
    titleEn: 'The Mauryan Empire',
    periodTe: 'క్రీ.పూ. 322 – 185',
    periodEn: '322 – 185 BCE',
    category: 'empire',
    categoryTe: 'అఖండ సామ్రాజ్యం',
    categoryEn: 'Pan-Indian Empire',
    icon: '🦁',
    color: '#285E61',
    accentColor: '#319795',
    startAngleDeg: 40,
    endAngleDeg: 45,
    midAngleDeg: 42.5,
    spanDeg: 5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'చాణక్యుడు & అశోకుడు',
    tagEn: 'Chanakya & Ashoka',
    rulersTe: ['చంద్రగుప్త మౌర్యుడు', 'ఆచార్య చాణక్యుడు (కౌటిల్యుడు)', 'బిందుసారుడు', 'దేవానాంప్రియ అశోక చక్రవర్తి'],
    rulersEn: ['Chandragupta Maurya', 'Acharya Chanakya (Kautilya)', 'Bindusara Amitraghata', 'Ashoka the Great (Devanampriya)'],
    capitalsTe: ['పాటలీపుత్రం (ప్రధాన రాజధాని)', 'తక్షశిల (వాయువ్యం)', 'ఉజ్జయిని (పశ్చిమం)', 'సువర్ణగిరి (దక్షిణం)', 'తోసలి (తూర్పు)'],
    capitalsEn: ['Pataliputra', 'Taxila (NW)', 'Ujjain (West)', 'Suvarnagiri (South)', 'Tosali (East)'],
    keyEventsTe: [
      'చాణక్యుని మార్గదర్శకత్వంలో నందులను కూల్చి అఖండ భారత సామ్రాజ్య స్థాపన (322 BCE)',
      'సెల్యూకస్ నికేటర్‌ను ఓడించి కాబూల్, కాందహార్, బలూచిస్తాన్‌లను విలీనం చేయడం',
      'కళింగ యుద్ధం (261 BCE) - రక్తపాతం చూసి అశోకుని హృదయ పరివర్తన & బౌద్ధ స్వీకారం',
      'ధర్మ స్తంభాలు, రాతి శాసనాల ద్వారా ప్రజా సంక్షేమ సందేశాలు మరియు మూడో బౌద్ధ సంగీతి'
    ],
    keyEventsEn: [
      'Overthrow of Nandas by Chandragupta & Chanakya to unite northern subcontinent',
      'Defeat of Seleucus I Nicator ceding Arachosia, Gedrosia, and Gandhara to Maurya',
      'The Kalinga War (261 BCE) leading to Ashoka’s remorse and adoption of Dhamma',
      'Erection of monumental Pillars of Ashoka and convocation of Third Buddhist Council'
    ],
    cultureAchievementsTe: [
      'కౌటిల్యుని రాజనీతి శాస్త్రం ‘అర్థశాస్త్రం’ & మెగస్తనీస్ ‘ఇండికా’ గ్రంథం',
      'సారనాథ్ అశోక స్తంభపు నాలుగు సింహాల చిహ్నం (భారత జాతీయ చిహ్నం) & ధర్మచక్రం',
      'సాంచి మహాస్తూపం, బారాబర్ గుహాలయాల తొలి రాతి మలిచిన వాస్తుకళ',
      'శ్రీలంక, గ్రీస్, ఈజిప్టు, సిరియాలకు శాంతి, ధర్మ దూతల పంపకం'
    ],
    cultureAchievementsEn: [
      'Kautilya’s masterpiece "Arthashastra" on statecraft and espionage, Megasthenes’ "Indica"',
      'Lion Capital of Ashoka at Sarnath (National Emblem of India) and Ashoka Chakra',
      'Construction of the Great Sanchi Stupa and rock-cut architecture at Barabar Caves',
      'Global peace missions sent to Sri Lanka, Syria, Egypt, Macedonia, and Cyrene'
    ],
    whatChangedTe: 'భారత ఉపఖండం మొత్తాన్నీ హిందూకుష్ పర్వతాల నుండి కర్ణాటక వరకు ఒకే పరిపాలనా ఛత్రం కింద ఏకం చేసింది.',
    whatChangedEn: 'Unified virtually the entire subcontinent under a single administrative and moral realm.',
    significanceTe: 'రాజనీతి, ప్రజా సంక్షేమం, శాంతి సందేశం మరియు అఖండ భారత భావనకు అసలైన మార్గదర్శి.',
    significanceEn: 'A golden benchmark in governance, ethical diplomacy, and pan-Indian statehood.',
    relatedImage: './images/indian_history/grand_overview/epoch_04_mauryan_empire.jpg'
  },
  {
    id: 'shunga_kanva_revival',
    order: 10,
    spokeNumber: 10,
    titleTe: 'శుంగ & కాణ్వ వంశాలు',
    titleEn: 'Shunga & Kanva Dynasties',
    periodTe: 'క్రీ.పూ. 185 – 28',
    periodEn: '185 – 28 BCE',
    category: 'classical',
    categoryTe: 'పునరుజ్జీవనం',
    categoryEn: 'Brahmanical Revival',
    icon: '🏛️',
    color: '#234E52',
    accentColor: '#285E61',
    startAngleDeg: 45,
    endAngleDeg: 49,
    midAngleDeg: 47,
    spanDeg: 4,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'వైదిక పునరుద్ధరణ',
    tagEn: 'Vedic Renaissance',
    rulersTe: ['పుష్యమిత్ర శుంగుడు', 'అగ్నిమిత్రుడు (కాళిదాసు మాళవికాగ్నిమిత్ర నాయకుడు)', 'భాగభద్రుడు', 'వాసుదేవ కాణ్వుడు'],
    rulersEn: ['Pushyamitra Shunga', 'Agnimitra (Hero of Kalidasa’s play)', 'Bhagabhadra', 'Vasudeva Kanva'],
    capitalsTe: ['పాటలీపుత్రం', 'విదిశ (మధ్యప్రదేశ్)'],
    capitalsEn: ['Pataliputra', 'Vidisha (Madhya Pradesh)'],
    keyEventsTe: [
      'మౌర్య చివరి పాలకుడైన బృహద్రథుని తొలగించి పుష్యమిత్రుడు శుంగ సామ్రాజ్యాన్ని స్థాపించడం',
      'పాటలీపుత్రం వరకు చొచ్చుకువచ్చిన ఇండో-గ్రీకు సైన్యాలను (డెమెట్రియస్) తరిమికొట్టడం',
      'రెండు చారిత్రక అశ్వమేధ యాగాల నిర్వహణ - వైదిక ధర్మ పునరుద్ధరణ',
      'గ్రీకు రాయబారి హెలియోడోరస్ విదిశలో గరుడ స్తంభం స్థాపించి భాగవత మతాన్ని స్వీకరించడం'
    ],
    keyEventsEn: [
      'Pushyamitra Shunga overthrowing Brihadratha to inaugurate the Shunga dynasty',
      'Repelling Indo-Greek invasions by Demetrius/Menander back beyond the Indus',
      'Revival of classical Vedic horse sacrifices (Ashvamedha Yajna)',
      'Heliodorus Pillar at Vidisha recording Greek ambassador embracing Bhagavata Vaishnavism'
    ],
    cultureAchievementsTe: [
      'పతంజలి మహర్షి సంస్కృత వ్యాకరణ అద్భుతం ‘మహాభాష్యం’ రచించడం',
      'సాంచి స్తూపానికి అందమైన రాతి తోరణాల (గేట్‌వేలు) అమరిక',
      'భార్హుత్ బౌద్ధ స్తూప శిల్ప కళా వికాసం మరియు యక్ష-యక్షిణి విగ్రహాల మలుపు',
      'మనుస్మృతి న్యాయ సూత్రాల సంకలనం'
    ],
    cultureAchievementsEn: [
      'Patanjali composing the celebrated Sanskrit grammatical treatise "Mahabhasya"',
      'Stone railings and ornate gateways added to Sanchi Stupa',
      'Intricate narrative bas-reliefs and Yakshi sculptures at Bharhut Stupa',
      'Formal codification of classical Hindu civil jurisprudence'
    ],
    whatChangedTe: 'విదేశీ దాడులను తిప్పికొట్టి సంస్కృత భాష, వ్యాకరణం మరియు ప్రాచీన ఆలయ శిల్పకళను పునరుజ్జీవింపజేసింది.',
    whatChangedEn: 'Defended central India from Hellenistic encroachment and rejuvenated classical Sanskrit arts.',
    significanceTe: 'భారతీయ ఆలయ శిల్పకళకు, యోగ-వ్యాకరణ శాస్త్రాలకు అత్యంత కీలకమైన పరివర్తన దశ.',
    significanceEn: 'A pivotal era of cultural resilience, artistic stone-carving, and Vedic intellectual renaissance.',
    relatedImage: './images/indian_history/grand_overview/epoch_05_post_mauryan.jpg'
  },
  {
    id: 'satavahana_empire',
    order: 11,
    spokeNumber: 11,
    titleTe: 'శాతవాహన మహా సామ్రాజ్యం',
    titleEn: 'The Satavahana Empire',
    periodTe: 'క్రీ.పూ. 230 – క్రీ.శ. 220',
    periodEn: '230 BCE – 220 CE',
    category: 'classical',
    categoryTe: 'దక్షిణాపథ సార్వభౌమత్వం',
    categoryEn: 'Lords of the Deccan',
    icon: '🚢',
    color: '#1A365D',
    accentColor: '#2B6CB0',
    startAngleDeg: 49,
    endAngleDeg: 53,
    midAngleDeg: 51,
    spanDeg: 4,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'గౌతమీపుత్ర శాతకర్ణి',
    tagEn: 'Dakshinapatha Glory',
    rulersTe: ['శ్రీముఖుడు (సిముక)', 'మొదటి శాతకర్ణి', 'హాలుడు (కవివత్సలుడు)', 'గౌతమీపుత్ర శాతకర్ణి (త్రిసముద్రతోయపీతవాహన)', 'యజ్ఞశ్రీ శాతకర్ణి'],
    rulersEn: ['Simuka', 'Satakarni I', 'Hala (Poet-King)', 'Gautamiputra Satakarni', 'Yajna Sri Satakarni'],
    capitalsTe: ['ప్రతిష్ఠానపురం (పైఠాన్, మహారాష్ట్ర)', 'ధాన్యకటకం / అమరావతి (ఆంధ్రప్రదేశ్)', 'కోటిలింగాల (తెలంగాణ)'],
    capitalsEn: ['Pratishthana (Paithan)', 'Dhanyakataka / Amaravati', 'Kotilingala (Telangana)'],
    keyEventsTe: [
      'దక్షిణాపథం మొత్తాన్ని మరియు మధ్య భారతదేశాన్ని ఏకఛత్రాధిపత్యంగా పాలించడం',
      'శక పాలకుడు నహపాణుడిని ఓడించి క్షహరాట వంశాన్ని నాశనం చేసిన గౌతమీపుత్ర శాతకర్ణి',
      'రోమన్ సామ్రాజ్యంతో అపార సముద్ర వాణిజ్యం - వేలాది బంగారు రోమన్ దినారాల రాక',
      'తల్లుల పేర్లను బిరుదులుగా పెట్టుకునే మాతృస్వామ్య సంప్రదాయ గౌరవం (గౌతమీపుత్ర, వాసిష్ఠీపుత్ర)'
    ],
    keyEventsEn: [
      'Consolidation of the entire Deccan plateau and central India across three oceans',
      'Gautamiputra Satakarni crushing the Western Kshatrapas and Nahapana',
      'Booming maritime trade with Imperial Rome yielding massive gold coinage inflows',
      'Pioneering matronymic titles honoring royal mothers (Gautamiputra, Vashishtiputra)'
    ],
    cultureAchievementsTe: [
      'అమరావతి మరియు నాగార్జునకొండ బౌద్ధ శిల్పకళా అద్భుతాలు (పాలరాతి శిల్ప శైలి)',
      'హాలుడు ప్రాకృతంలో సంకలనం చేసిన ప్రసిద్ధ శృంగార కావ్యం ‘గాథాసప్తశతి’',
      'గుణాఢ్యుని ‘బృహత్కథ’ (పైశాచీ ప్రాకృతం)',
      'ఓడల బొమ్మలతో నాణేల జారీ - సముద్ర వాణిజ్యానికి ప్రతీక'
    ],
    cultureAchievementsEn: [
      'Flourishing of Amaravati school of art and marble relief stupas',
      'King Hala compiling the celebrated Prakrit poetry anthology "Gaha Sattasai"',
      'Gunadhya composing the legendary epic "Brihatkatha" in Paishachi Prakrit',
      'Minting bilingual coins featuring double-masted ships celebrating naval power'
    ],
    whatChangedTe: 'ఉత్తర-దక్షిణ భారతాలను అనుసంధానిస్తూ తెలుగు మరియు మహారాష్ట్ర నేలల్లో తొలి మహా సామ్రాజ్య వైభవం నిలిచింది.',
    whatChangedEn: 'Bridged North and South India, inaugurating monumental Deccan urbanism and oceanic commerce.',
    significanceTe: 'తెలుగు జాతి చరిత్రకు, సాహిత్యానికి మరియు అంతర్జాతీయ వాణిజ్యానికి ఉజ్వల శకం.',
    significanceEn: 'The pride of Telugu and Deccan history, epitomizing tolerance, art, and seafaring prowess.',
    relatedImage: './images/indian_history/grand_overview/epoch_05_post_mauryan.jpg'
  },
  {
    id: 'kushan_silk_road',
    order: 12,
    spokeNumber: 12,
    titleTe: 'కుషాణ సామ్రాజ్యం & సిల్క్ రోడ్',
    titleEn: 'Kushan Empire & Silk Road',
    periodTe: 'క్రీ.శ. 30 – 375',
    periodEn: '30 – 375 CE',
    category: 'classical',
    categoryTe: 'అంతర్జాతీయ వాణిజ్యం',
    categoryEn: 'Silk Road Nexus',
    icon: '🪙',
    color: '#2A4365',
    accentColor: '#3182CE',
    startAngleDeg: 53,
    endAngleDeg: 57,
    midAngleDeg: 55,
    spanDeg: 4,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'కనిష్కుడు & గాంధార కళ',
    tagEn: 'Kanishka & Gandhara Art',
    rulersTe: ['కుజుల కడ్ఫిసిస్', 'విమ కడ్ఫిసిస్', 'కనిష్క మహారాజు (మహా చక్రవర్తి)', 'హువిష్కుడు', 'వాసుదేవ I'],
    rulersEn: ['Kujula Kadphises', 'Vima Kadphises', 'Kanishka the Great', 'Huvishka', 'Vasudeva I'],
    capitalsTe: ['పురుషపురం (పెషావర్ - ప్రధాన శీతాకాల రాజధాని)', 'మథుర (భారతీయ సాంస్కృతిక రాజధాని)', 'బేగ్రామ్ (వేసవి రాజధాని)', 'తక్షశిల'],
    capitalsEn: ['Purushapura (Peshawar)', 'Mathura (Gangetic Capital)', 'Begram (Afghanistan)', 'Taxila'],
    keyEventsTe: [
      'చైనా నుండి రోమ్ వరకు సాగే ప్రసిద్ధ ‘సిల్క్ రోడ్’ (పట్టు రహదారి) పై సంపూర్ణ నియంత్రణ',
      'క్రీ.శ. 78 లో కనిష్కుని సింహాసనారోహణతో ‘శక శకము’ (Saka Era - భారత జాతీయ క్యాలెండర్) ఆరంభం',
      'కాశ్మీర్‌లోని కుండలవనంలో నాల్గవ బౌద్ధ సంగీతి నిర్వహణ - మహాయాన బౌద్ధం ఆవిర్భావం',
      'భారతీయ సంస్కృతి, బౌద్ధ ధర్మం చైనా, కొరియా, జపాన్‌లకు ప్రసరించడం'
    ],
    keyEventsEn: [
      'Mastery of transcontinental Silk Road routes connecting China, Rome, and India',
      'Accession of Kanishka in 78 CE inaugurating the historic Saka Era (Indian National Calendar)',
      'Fourth Buddhist Council in Kashmir codifying the Mahayana Buddhist canon',
      'Transmission of Indian culture, scriptures, and Buddhism into Central Asia and China'
    ],
    cultureAchievementsTe: [
      'గ్రీకు-భారతీయ సమ్మేళనంతో గాంధార శిల్పకళ & అచ్చమైన స్వదేశీ మథుర శిల్పకళ',
      'ఆయుర్వేద పితామహుడు చరకుడు రచించిన ‘చరక సంహిత’ (వైద్య గ్రంథం)',
      'అశ్వఘోషుని సంస్కృత మహాకావ్యాలు ‘బుద్ధచరితం’, ‘సౌందరనందం’',
      'రోమన్ నాణేలతో సమానమైన స్వచ్ఛమైన బంగారు దీనారాల జారీ'
    ],
    cultureAchievementsEn: [
      'Synthesis of Greco-Roman realism and Indian spirituality in Gandhara and Mathura art schools',
      'Charaka authoring the foundational Ayurveda medical treatise "Charaka Samhita"',
      'Ashvaghosha composing the Sanskrit dramatic masterpiece "Buddhacharita"',
      'Massive issuance of high-purity gold dinars depicting Hindu, Buddhist, and Persian deities'
    ],
    whatChangedTe: 'భారతదేశం మధ్య ఆసియా, చైనా మరియు రోమ్ సామ్రాజ్యాలతో వ్యాపార, తాత్విక సమన్వయం సాధించింది.',
    whatChangedEn: 'Integrated North India into global Silk Road trade networks and synthesized diverse aesthetic traditions.',
    significanceTe: 'వైద్యం, సాహిత్యం, అంతర్జాతీయ వర్తకం మరియు భారతీయ సంస్కృతి విశ్వవ్యాప్తమైన శకం.',
    significanceEn: 'A golden epoch of internationalism, classical medicine, and cross-continental cultural synthesis.',
    relatedImage: './images/indian_history/grand_overview/epoch_05_post_mauryan.jpg'
  },
  {
    id: 'sangam_era_chola_cheras_pandyas',
    order: 13,
    spokeNumber: 13,
    titleTe: 'సంగం తమిళ యుగం',
    titleEn: 'Classical Sangam Era',
    periodTe: 'క్రీ.పూ. 300 – క్రీ.శ. 300',
    periodEn: '300 BCE – 300 CE',
    category: 'classical',
    categoryTe: 'క్లాసికల్ తమిళ వైభవం',
    categoryEn: 'Tamil Classical Age',
    icon: '⛵',
    color: '#44337A',
    accentColor: '#553C9A',
    startAngleDeg: 57,
    endAngleDeg: 61,
    midAngleDeg: 59,
    spanDeg: 4,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'చేర, చోళ, పాండ్యులు',
    tagEn: 'Chera, Chola, Pandya',
    rulersTe: ['కరికాల చోళుడు (కల్లణై ఆనకట్ట నిర్మాత)', 'నెడుంజెలియన్ (పాండ్య)', 'చేరన్ సెంగుట్టువన్', 'తిరువళ్ళువర్'],
    rulersEn: ['Karikala Chola (Kallanai Dam)', 'Nedunjeliyan (Pandya)', 'Cheran Senguttuvan', 'Thiruvalluvar'],
    capitalsTe: ['మదురై (పాండ్యుల రాజధాని - సంగం కేంద్రం)', 'ఉరైయూర్ & పుహార్ (కావేరిపట్టణం - చోళులు)', 'వంజి (చేర రాజధాని)'],
    capitalsEn: ['Madurai (Pandya)', 'Uraiyur & Puhar (Chola)', 'Vanji / Karur (Chera)'],
    keyEventsTe: [
      'మదురైలో తమిళ కవులు, విద్వాంసులతో మూడు మహా సంగం సభల నిర్వహణ',
      'కావేరి నదిపై ప్రపంచంలోనే అత్యంత పురాతనమైన రాతి ఆనకట్ట ‘కల్లణై’ (గ్రాండ్ అనికట్) నిర్మాణం',
      'ముజిరిస్ ఓడరేవు ద్వారా రోమన్ సామ్రాజ్యంతో అపార మిరియాలు, ముత్యాలు, రత్నాల వాణిజ్యం',
      'చేరన్ సెంగుట్టువన్ హిమాలయాల నుండి రాతిని తెప్పించి కన్నగి (పతివ్రత) దేవాలయం నిర్మించడం'
    ],
    keyEventsEn: [
      'Three legendary Sangam literary academies hosted at Madurai under Pandya patronage',
      'Karikala Chola constructing Kallanai (Grand Anicut), world’s oldest operational water-diversion dam',
      'Flourishing trade in black pepper ("black gold"), pearls, and beryl via the port of Muziris to Rome',
      'Cheran Senguttuvan establishing the Kannagi (Pattini) cult with Himalayan stone'
    ],
    cultureAchievementsTe: [
      'తిరువళ్ళువర్ రచించిన సార్వకాలిక నీతి శాస్త్ర గ్రంథం ‘తిరుక్కురళ్’',
      'తమిళ పంచ మహా కావ్యాలు: ‘శిలప్పదికారం’ (ఇళంగో అడిగళ్), ‘మణిమేకలై’',
      'తోల్కాప్పియం (ప్రాచీన తమిళ వ్యాకరణ గ్రంథం) & అహనానూరు, పురనానూరు కవితలు',
      'శివుడు, మురుగన్, కోట్రవై ఆరాధన మరియు సముద్ర జీవన వర్ణనలు'
    ],
    cultureAchievementsEn: [
      'Thiruvalluvar authoring the timeless ethical compendium "Thirukkural"',
      'Twin classical epics: "Silappatikaram" by Ilango Adigal and "Manimekalai"',
      'Tolkappiyam (foundational Tamil grammar) and Eight Anthologies (Ettuttokai)',
      'Rich poetic classification of landscape and emotions into 5 Thinai ecological zones'
    ],
    whatChangedTe: 'భారతీయ సాహిత్యంలో సంస్కృతంతో సమానమైన ప్రాచీన తమిళ క్లాసికల్ గ్రంథ సంపద శాశ్వతంగా నిలిచింది.',
    whatChangedEn: 'Enshrined classical Tamil poetry alongside Sanskrit as the twin civilizational voices of ancient India.',
    significanceTe: 'దక్షిణ భారతీయ ప్రజాస్వామిక సాహిత్యం, నౌకా వర్తకం మరియు సంస్కృతికి స్వర్ణ యుగం.',
    significanceEn: 'A magnificent heritage of humanistic poetry, advanced hydraulic engineering, and oceanic trade.',
    relatedImage: './images/indian_history/grand_overview/epoch_05_post_mauryan.jpg'
  },
  {
    id: 'gupta_golden_age',
    order: 14,
    spokeNumber: 14,
    titleTe: 'గుప్త మహా సామ్రాజ్యం',
    titleEn: 'Gupta Empire (The Golden Age)',
    periodTe: 'క్రీ.శ. 319 – 550',
    periodEn: '319 – 550 CE',
    category: 'golden_age',
    categoryTe: 'భారత స్వర్ణయుగం',
    categoryEn: 'Classical Golden Age',
    icon: '👑',
    color: '#7B1113',
    accentColor: '#D4AF37',
    startAngleDeg: 61,
    endAngleDeg: 66,
    midAngleDeg: 63.5,
    spanDeg: 5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'ఆర్యభట్టు & కాళిదాసు',
    tagEn: 'Aryabhata & Kalidasa',
    rulersTe: ['మొదటి చంద్రగుప్తుడు', 'సముద్రగుప్తుడు (కవిరాజు & భారత నెపోలియన్)', 'చంద్రగుప్త II విక్రమాదిత్యుడు', 'కుమారగుప్తుడు (నలందా స్థాపకుడు)'],
    rulersEn: ['Chandragupta I', 'Samudragupta (Kaviraja & Military Genius)', 'Chandragupta II Vikramaditya', 'Kumaragupta I (Founder of Nalanda)'],
    capitalsTe: ['పాటలీపుత్రం (ప్రధాన రాజధాని)', 'ఉజ్జయిని (సాంస్కృతిక రాజధాని)', 'ప్రయాగ (అలహాబాద్)'],
    capitalsEn: ['Pataliputra', 'Ujjain (Cultural Capital)', 'Prayaga (Allahabad)'],
    keyEventsTe: [
      'సముద్రగుప్తుడు ఉత్తర, దక్షిణ భారతాలను జయించి అఖండ సామ్రాజ్యాన్ని నెలకొల్పడం (అలహాబాద్ ప్రశస్తి)',
      'విక్రమాదిత్యుడు శక పాలకులను అంతం చేసి ఉజ్జయినిలో నవరత్న విద్వత్సభను నెలకొల్పడం',
      'కుమారగుప్తుని చేత ప్రపంచ ప్రఖ్యాతి గాంచిన నలందా అంతర్జాతీయ విశ్వవిద్యాలయ స్థాపన (427 CE)',
      'చైనా యాత్రికుడు ఫాహియాన్ పర్యటించి దేశంలోని శాంతిభద్రతలు, ఐశ్వర్యాన్ని కొనియాడడం'
    ],
    keyEventsEn: [
      'Samudragupta’s brilliant digvijaya campaigns recorded on the Allahabad Pillar by Harishena',
      'Chandragupta II defeating the Shakas and patronizing the legendary Navaratnas (Nine Gems)',
      'Establishment of Nalanda Mahavihara (world’s premier residential university) by Kumaragupta I',
      'Chinese pilgrim Faxian documenting an era of unparalleled peace, wealth, and low taxation'
    ],
    cultureAchievementsTe: [
      'ఆర్యభట్టు ‘ఆర్యభటీయం’ - సున్నా (0), దశాంశ వ్యవస్థ, పై (π) విలువ, భూమి తన చుట్టూ తాను తిరుగుతుందనే సిద్ధాంతం',
      'మహాకవి కాళిదాసు సంస్కృత కావ్యాలు: ‘అభిజ్ఞాన శాకుంతలం’, ‘మేఘదూతం’, ‘రఘువంశం’',
      'వరాహమిహిరుని ‘బృహత్సంహిత’, బ్రహ్మగుప్తుని గణిత సూత్రాలు, విష్ణుశర్మ ‘పంచతంత్రం’ కథలు',
      'అజంతా గుహల రంగుల వర్ణచిత్రాలు మరియు 1600 ఏళ్ళుగా తుప్పుపట్టని మెహ్రౌలీ ఇనుప స్తంభం'
    ],
    cultureAchievementsEn: [
      'Aryabhata calculating π, earth’s circumference, zero concept, and heliocentric planetary motion',
      'Mahakavi Kalidasa composing masterpieces "Abhijnanashakuntalam", "Meghaduta", and "Raghuvamsha"',
      'Varahamihira’s "Brihat Samhita", Vishnu Sharma compiling the timeless fables of "Panchatantra"',
      'Ajanta Caves mural masterpieces and the rust-resistant metallurgy of the Delhi Iron Pillar'
    ],
    whatChangedTe: 'భారతదేశంలో శాస్త్రాలు, గణితం, ఖగోళం, శిల్పం, సాహిత్యం మరియు సంస్కృతి అత్యున్నత శిఖరాలను తాకాయి.',
    whatChangedEn: 'Marked the zenith of ancient Indian classical sciences, mathematics, arts, and metaphysical harmony.',
    significanceTe: 'భారతీయ నాగరికత యొక్క క్లాసికల్ స్వర్ణయుగంగా ప్రపంచ చరిత్రలో సువర్ణాక్షరాలతో లిఖించబడింది.',
    significanceEn: 'Universally recognized as the Classical Golden Age of India, illuminating world civilization.',
    relatedImage: './images/indian_history/grand_overview/epoch_06_gupta_age.jpg'
  },
  {
    id: 'harsha_chalukya_pallava',
    order: 15,
    spokeNumber: 15,
    titleTe: 'హర్షవర్ధనుడు, బాదామి చాళుక్యులు & పల్లవులు',
    titleEn: 'Harsha, Badami Chalukyas & Pallavas',
    periodTe: 'క్రీ.శ. 550 – 750',
    periodEn: '550 – 750 CE',
    category: 'medieval',
    categoryTe: 'ఉత్తర-దక్షిణ సమతుల్యత',
    categoryEn: 'Post-Gupta Powers',
    icon: '🛕',
    color: '#6B46C1',
    accentColor: '#805AD5',
    startAngleDeg: 66,
    endAngleDeg: 70,
    midAngleDeg: 68,
    spanDeg: 4,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'నర్మదా యుద్ధం & మహాబలిపురం',
    tagEn: 'Narmada Duel & Rock Temples',
    rulersTe: ['హర్షవర్ధన చక్రవర్తి (పుష్యభూతి వంశం)', 'రెండవ పులకేశి (బాదామి చాళుక్య చక్రవర్తి)', 'మహేంద్రవర్మ I', 'నరసింహవర్మ I మామల్ల (పల్లవ)'],
    rulersEn: ['Emperor Harsha Vardhana', 'Pulakeshin II (Badami Chalukya)', 'Mahendravarman I', 'Narasimhavarman I Mamalla (Pallava)'],
    capitalsTe: ['కనౌజ్ (హర్షుని రాజధాని)', 'వాతాపి / బాదామి (కర్ణాటక - చాళుక్యులు)', 'కాంచీపురం & మహాబలిపురం (పల్లవులు)'],
    capitalsEn: ['Kannauj', 'Vatapi / Badami (Karnataka)', 'Kanchipuram & Mahabalipuram (Tamil Nadu)'],
    keyEventsTe: [
      'హర్షవర్ధనుని దక్షిణ దండయాత్రను నర్మదా నదీ తీరాన అడ్డుకుని ఓడించిన రెండవ పులకేశి',
      'చైనా యాత్రికుడు హుయాన్ త్సాంగ్ (యువాన్ చాంగ్) కనౌజ్, నలందా, వాతాపి, కాంచీపురాలను సందర్శించడం',
      'పల్లవ రాజు నరసింహవర్మ వాతాపిని జయించి ‘వాతాపికొండ’ బిరుదును పొందడం',
      'కనౌజ్ వద్ద హర్షవర్ధనుడు నిర్వహించిన మహోన్నత సర్వమత మహా పరిషత్తు'
    ],
    keyEventsEn: [
      'Epic Battle of Narmada (~618 CE) where Pulakeshin II decisively halted Harsha’s southward advance',
      'Chinese pilgrim Xuanzang spending 15 years studying at Nalanda and visiting Harsha, Pulakeshin & Pallavas',
      'Narasimhavarman I capturing Vatapi in 642 CE earning the title "Vatapikonda"',
      'Harsha’s grand multi-faith assemblies at Kannauj and Prayag giving away royal treasures'
    ],
    cultureAchievementsTe: [
      'మహాబలిపురం సముద్ర తీర ఏకశిలా పంచరథాలు & భగీరథుని తపస్సు శిల్ప ఫలకం',
      'బాదామి, ఐహోల్, పట్టడకల్ లో చాళుక్యుల ఆలయ వాస్తు పరిశోధనలు (భారతీయ ఆలయ వాస్తు పాఠశాల)',
      'బాణభట్టు రచించిన ప్రసిద్ధ సంస్కృత గ్రంథాలు ‘హర్షచరితం’, ‘కాదంబరి’',
      'హర్షవర్ధనుడు స్వయంగా రచించిన నాటకాలు: ‘రత్నావళి’, ‘ప్రియదర్శిక’, ‘నాగానందం’'
    ],
    cultureAchievementsEn: [
      'Mahabalipuram rock-cut monolithic Rathas and the colossal "Descent of the Ganga" bas-relief',
      'Aihole and Pattadakal temples synthesizing Nagara and Dravida styles into Vesara architecture',
      'Banabhatta composing "Harshacharita" (first Sanskrit biography) and romantic prose "Kadambari"',
      'Emperor Harsha himself penning celebrated Sanskrit plays "Ratnavali", "Priyadarsika" & "Nagananda"'
    ],
    whatChangedTe: 'దక్షిణ భారతదేశంలో ద్రావిడ మరియు వేసర ఆలయ వాస్తు శైలులు శాశ్వతంగా రూపుదిద్దుకున్నాయి.',
    whatChangedEn: 'Solidified southern regional kingdoms as equal geopolitical peers to the northern plains.',
    significanceTe: 'రాతిని మలచి ప్రాణం పోసిన అద్భుత శిల్పకళకు, నాటక సాహిత్యానికి ప్రసిద్ధి చెందిన అధ్యాయం.',
    significanceEn: 'A golden era of monumental rock-cut architecture, vibrant scholasticism, and geopolitical parity.',
    relatedImage: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg'
  },
  {
    id: 'tripartite_rashtrakuta_pala',
    order: 16,
    spokeNumber: 16,
    titleTe: 'రాష్ట్రకూట, ప్రతిహార & పాల సామ్రాజ్యాలు',
    titleEn: 'Rashtrakutas & Tripartite Era',
    periodTe: 'క్రీ.శ. 750 – 1000',
    periodEn: '750 – 1000 CE',
    category: 'medieval',
    categoryTe: 'త్రైపాక్షిక పోరు',
    categoryEn: 'Tripartite Struggle',
    icon: '⛰️',
    color: '#742A2A',
    accentColor: '#9B2C2C',
    startAngleDeg: 70,
    endAngleDeg: 73.5,
    midAngleDeg: 71.75,
    spanDeg: 3.5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'ఎల్లోరా కైలాసాలయం',
    tagEn: 'Kailasa Monolith & Palas',
    rulersTe: ['దంతిదుర్గుడు', 'మొదటి కృష్ణుడు', 'అమోఘవర్షుడు (రాష్ట్రకూట)', 'మిహిర భోజుడు (గుర్జర-ప్రతిహార)', 'ధర్మపాలుడు (పాల వంశం)'],
    rulersEn: ['Dantidurga', 'Krishna I', 'Amoghavarsha I (Rashtrakuta)', 'Mihira Bhoja (Pratihara)', 'Dharmapala (Pala)'],
    capitalsTe: ['మాన్యఖేతం (మాల్ఖేడ్, కర్ణాటక)', 'కనౌజ్ (ఉత్తర ప్రదేశ్)', 'గౌడ / పాటలీపుత్రం (బెంగాల్)'],
    capitalsEn: ['Manyakheta (Karnataka)', 'Kannauj (UP)', 'Pataliputra / Gauda (Bengal)'],
    keyEventsTe: [
      'ఉత్తర భారతదేశపు ప్రతీక అయిన కనౌజ్ నగరం కోసం 200 సంవత్సరాల త్రైపాక్షిక పోరాటం',
      'గుర్జర-ప్రతిహారులు మరియు రాష్ట్రకూటులు అరబ్ దండయాత్రలను పశ్చిమ సరిహద్దుల్లోనే తిప్పికొట్టడం',
      'అరబ్ యాత్రికుడు సులేమాన్ అమోఘవర్షుని ప్రపంచంలోని నలుగురు మహా చక్రవర్తులలో ఒకడిగా కొనియాడడం',
      'ధర్మపాలుడు నలందాకు నూతన జీవం పోయడంతో పాటు విక్రమశిల విశ్వవిద్యాలయాన్ని స్థాపించడం'
    ],
    keyEventsEn: [
      '200-year Tripartite Struggle for mastery over Kannauj, the historic heart of northern hegemony',
      'Gurjara-Pratiharas fiercely shielding India’s northwestern frontiers against early Umayyad incursions',
      'Arab merchant Sulaiman ranking the Rashtrakuta Emperor among the world’s four great monarchs',
      'Pala king Dharmapala reviving Nalanda and founding the renowned Vikramashila University'
    ],
    cultureAchievementsTe: [
      'ఎల్లోరాలోని కైలాస దేవాలయం (గుహ 16) - ఒకే పర్వతాన్ని పై నుండి కిందకు చెక్కిన ప్రపంచ ఇంజనీరింగ్ అద్భుతం',
      'అమోఘవర్షుని ఆస్థానంలో కన్నడ తొలి గ్రంథం ‘కవిరాజమార్గం’ రచన',
      'పాల రాజుల కాలంలో విలసిల్లిన బౌద్ధ వజ్రయాన తాంత్రిక విద్య మరియు టిబెట్‌కు బౌద్ధ వ్యాప్తి (అతీశ దీపంకరుడు)',
      'మహావీరాచార్యుని గణిత గ్రంథం ‘గణితసారసంగ్రహం’'
    ],
    cultureAchievementsEn: [
      'Ellora Kailasa Temple (Cave 16) - the world’s greatest top-down monolithic rock-cut monument',
      'Amoghavarsha patronizing the earliest landmark work in Kannada literature, "Kavirajamarga"',
      'Pala patronage of Tantric Buddhist art and sending master scholars (Atisha Dipankara) to Tibet',
      'Jain mathematician Mahaviracharya composing "Ganitasarasangraha"'
    ],
    whatChangedTe: 'భారతదేశంలో ఏకశిలా నిర్మాణ కళ పరాకాష్ఠను చేరింది; అరబ్ దాడులను అడ్డుకుని దేశ సంస్కృతి పరిరక్షించబడింది.',
    whatChangedEn: 'Pushed rock engineering beyond human imagination and effectively buffered against external invaders.',
    significanceTe: 'శిల్పకళలో అసాధ్యమైన శిఖరాలను అధిరోహించిన మహా ఇంజనీరింగ్ అద్భుతాల యుగం.',
    significanceEn: 'A glorious era of monolithic architecture, trans-Himalayan scholasticism, and imperial might.',
    relatedImage: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg'
  },
  {
    id: 'imperial_chola_navy',
    order: 17,
    spokeNumber: 17,
    titleTe: 'మహా చోళ సామ్రాజ్యం',
    titleEn: 'The Imperial Chola Empire',
    periodTe: 'క్రీ.శ. 848 – 1279',
    periodEn: '848 – 1279 CE',
    category: 'medieval',
    categoryTe: 'నౌకాదళ సార్వభౌమత్వం',
    categoryEn: 'Maritime Superpower',
    icon: '⚓',
    color: '#975A16',
    accentColor: '#B7791F',
    startAngleDeg: 73.5,
    endAngleDeg: 77,
    midAngleDeg: 75.25,
    spanDeg: 3.5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'రాజరాజ & రాజేంద్ర చోళులు',
    tagEn: 'Rajaraja & Rajendra Chola',
    rulersTe: ['విజయాలయుడు', 'మొదటి రాజరాజ చోళుడు (శివపాదశేఖర)', 'రాజేంద్ర చోళుడు I (గంగైకొండ చోళుడు)', 'కులోత్తుంగ చోళుడు I'],
    rulersEn: ['Vijayalaya', 'Rajaraja Chola I', 'Rajendra Chola I (Gangaikonda Chola)', 'Kulottunga Chola I'],
    capitalsTe: ['తంజావూరు', 'గంగైకొండ చోళపురం'],
    capitalsEn: ['Thanjavur', 'Gangaikonda Cholapuram'],
    keyEventsTe: [
      'బంగాళాఖాతాన్ని ‘చోళ సరస్సు’గా మార్చిన అజేయ సముద్ర నౌకాదళం నిర్మాణం',
      'రాజేంద్ర చోళుని ఆగ్నేయాసియా దిగ్విజయం - శ్రీవిజయ సామ్రాజ్యం (ఇండోనేషియా, మలేషియా, సుమత్రా) లొంగుబాటు',
      'గంగా నది వరకు సైన్యాన్ని నడిపించి గంగైకొండ చోళపురం రాజధాని మరియు భారీ సరస్సు నిర్మాణం',
      'ఉత్తరమేరూరు శాసనాలు - గ్రామస్థాయిలో కుడవోలై (లాటరీ) పద్ధతి ద్వారా ప్రపంచ తొలి ప్రజాస్వామ్య ఎన్నికలు'
    ],
    keyEventsEn: [
      'Creating an invincible blue-water oceanic navy, turning the Bay of Bengal into a "Chola Lake"',
      'Rajendra Chola’s naval expedition subjugating the maritime empire of Srivijaya (Indonesia/Malaysia)',
      'Victorious expedition to the holy Ganga river founding Gangaikonda Cholapuram and its grand reservoir',
      'Uttiramerur inscriptions documenting hyper-detailed democratic local village council elections'
    ],
    cultureAchievementsTe: [
      'తంజావూరు బృహదీశ్వర దేవాలయం (పెరియ కోవిల్) - 216 అడుగుల ఎత్తైన విమానం, 80 టన్నుల ఏకశిలా శిఖరం',
      'ప్రపంచ ప్రసిద్ధ కాంస్య నటరాజ విగ్రహాలు (లాస్ట్-వాక్స్ కాస్టింగ్ శిల్ప కళా పరాకాష్ఠ)',
      'కంబన్ రచించిన తమిళ రామాయణం ‘రామావతారం’',
      'చైనాలోని సాంగ్ రాజవంశంతో దౌత్య మరియు వ్యాపార రాయబారాలు'
    ],
    cultureAchievementsEn: [
      'Brihadisvara Temple at Thanjavur with its 216-foot granite vimana crowned by an 80-tonne monolith',
      'Iconic bronze sculptures of Nataraja (Cosmic Dance of Shiva) celebrated worldwide for sacred geometry',
      'Kamban composing the celebrated epic Tamil "Ramavatharam" (Kamba Ramayanam)',
      'Extensive diplomatic and trade missions sent to the Song Dynasty court in China'
    ],
    whatChangedTe: 'భారతీయ హైందవ సంస్కృతి, దేవాలయాలు మరియు సంప్రదాయాలు ఆగ్నేయాసియా దేశాల్లో చిరస్థాయిగా నాటుకుపోయాయి.',
    whatChangedEn: 'Projected Indian maritime power across the Indian Ocean, deeply influencing Southeast Asian civilization.',
    significanceTe: 'భారతదేశానికి అజేయమైన నావికా దళాన్ని, అద్భుత ప్రజాస్వామ్య ఎన్నికల వ్యవస్థను చూపించిన చరిత్రాత్మక శకం.',
    significanceEn: 'A maritime superpower that wedded ocean mastery, sublime granite temple art, and village democracy.',
    relatedImage: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg'
  },
  {
    id: 'delhi_sultanate_kakatiyas',
    order: 18,
    spokeNumber: 18,
    titleTe: 'ఢిల్లీ సుల్తానేట్ & కాకతీయులు, హోయసల',
    titleEn: 'Delhi Sultanate & Regional Resistance',
    periodTe: 'క్రీ.శ. 1206 – 1526',
    periodEn: '1206 – 1526 CE',
    category: 'medieval',
    categoryTe: 'మధ్యయుగ పరివర్తన',
    categoryEn: 'Sultanate & Southern Resistance',
    icon: '⚔️',
    color: '#702459',
    accentColor: '#97266D',
    startAngleDeg: 77,
    endAngleDeg: 80,
    midAngleDeg: 78.5,
    spanDeg: 3,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'రాణీ రుద్రమదేవి & రామప్ప',
    tagEn: 'Rudrama Devi & Ramappa',
    rulersTe: ['కుతుబుద్దీన్ ఐబక్, అల్లావుద్దీన్ ఖిల్జీ, ముహమ్మద్ బిన్ తుగ్లక్', 'రాణీ రుద్రమదేవి, ప్రతాపరుద్రుడు (కాకతీయులు)', 'విష్ణువర్ధనుడు, వీర బల్లాల III (హోయసల)'],
    rulersEn: ['Qutb-ud-din Aibak, Alauddin Khilji, Muhammad bin Tughlaq', 'Rani Rudrama Devi, Prataparudra (Kakatiyas)', 'Vishnuvardhana, Veera Ballala III (Hoysala)'],
    capitalsTe: ['ఢిల్లీ (కుతుబ్ కాంప్లెక్స్, సిరి, తుగ్లకాబాద్)', 'ఓరుగల్లు / వరంగల్ (కాకతీయ రాజధాని)', 'ద్వారసముద్రం / హళేబీడు (హోయసల)'],
    capitalsEn: ['Delhi (Qutb, Siri, Tughlaqabad)', 'Orugallu / Warangal (Kakatiya)', 'Dvarasamudra / Halebidu (Hoysala)'],
    keyEventsTe: [
      'ఢిల్లీ సుల్తానేట్ (బానిస, ఖిల్జీ, తుగ్లక్, సయ్యద్, లోడి వంశాలు) స్థాపన',
      'ఖిల్జీ సైన్యాలు దక్షిణ భారతదేశంపై దండయాత్రలు - మాలిక్ కాఫూర్ ముట్టడులు',
      'వీరనారి కాకతీయ రాణీ రుద్రమదేవి వీరోచిత పరిపాలన & కోహినూర్ వజ్ర ప్రస్తావన',
      'కాకతీయుల గొలుసుకట్టు చెరువుల వ్యవస్థ (రామప్ప సరస్సు, పాకాల చెరువు) - తెలంగాణ వ్యవసాయ విప్లవం'
    ],
    keyEventsEn: [
      'Establishment of the Delhi Sultanate through Slave, Khilji, Tughlaq, Sayyid, and Lodi dynasties',
      'Malik Kafur’s devastating military raids into the Deccan and southern capitals',
      'The heroic reign of Kakatiya warrior queen Rani Rudrama Devi and recovery of the Koh-i-Noor diamond',
      'Kakatiya engineering genius in cascading tank irrigation systems (Ramappa, Pakhal lakes)'
    ],
    cultureAchievementsTe: [
      'యునెస్కో ప్రపంచ వారసత్వ కట్టడమైన రామప్ప దేవాలయం (నీటిలో తేలియాడే ఇటుకల నిర్మాణం)',
      'ఓరుగల్లు రాతి తోరణాలు (కీర్తి తోరణాలు - తెలంగాణ రాష్ట్ర అధికారిక చిహ్నం)',
      'హళేబీడు, బేలూరులలోని హోయసల ఆలయాల సూక్ష్మ రాతి శిల్ప నగిషీలు',
      'కుతుబ్ మినార్ మరియు అలై దర్వాజా ద్వారా ఇండో-ఇస్లామిక్ వాస్తు శైలి ప్రవేశం'
    ],
    cultureAchievementsEn: [
      'UNESCO World Heritage Ramappa Temple constructed using lightweight floating sandbox bricks',
      'Warangal Kakatiya Kala Thoranam (State Emblem of Telangana)',
      'Hoysala soapstone marvels at Belur and Halebidu featuring breathtaking microscopic ornamentation',
      'Evolution of Indo-Islamic arch and dome architecture exemplified by Qutb Minar'
    ],
    whatChangedTe: 'భారతదేశంలో ఇస్లామిక్ పరిపాలనా వ్యవస్థ ప్రవేశించింది; దక్షిణాన ప్రాంతీయ రాజ్యాల తీవ్ర ప్రతిఘటన వెల్లివిరిసింది.',
    whatChangedEn: 'Introduced central Sultanate administration while galvanizing fierce Deccan resistance.',
    significanceTe: 'గొలుసుకట్టు నీటిపారుదల సాంకేతికతకు, హోయసల శిల్పకళకు మరియు పోరాట పటిమకు నిదర్శనం.',
    significanceEn: 'A dynamic crucible of hydraulic irrigation mastery, Hoysala art, and defensive martial spirit.',
    relatedImage: './images/indian_history/grand_overview/epoch_08_delhi_sultanate.jpg'
  },
  {
    id: 'vijayanagara_empire',
    order: 19,
    spokeNumber: 19,
    titleTe: 'విజయనగర మహా సామ్రాజ్యం',
    titleEn: 'The Vijayanagara Empire',
    periodTe: 'క్రీ.శ. 1336 – 1646',
    periodEn: '1336 – 1646 CE',
    category: 'empire',
    categoryTe: 'హిందూ ధర్మ రక్షణ',
    categoryEn: 'City of Victory',
    icon: '💎',
    color: '#9C4221',
    accentColor: '#C05621',
    startAngleDeg: 80,
    endAngleDeg: 82.5,
    midAngleDeg: 81.25,
    spanDeg: 2.5,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'శ్రీకృష్ణదేవరాయలు & హంపి',
    tagEn: 'Krishnadevaraya & Hampi',
    rulersTe: ['హరిహర రాయలు & బుక్క రాయలు (సంగమ వంశం)', 'సాళువ నరసింహరాయలు', 'శ్రీకృష్ణదేవరాయలు (తుళువ వంశ వైభవం)', 'రామరాయలు (అరవీడు వంశం)'],
    rulersEn: ['Harihara I & Bukka Raya I (Sangama)', 'Saluva Narasimha', 'Sri Krishnadevaraya (Golden Zenith)', 'Aliya Rama Raya (Aravidu)'],
    capitalsTe: ['హంపి / విజయనగరం (తుంగభద్రా తీరం)', 'పెనుకొండ', 'చంద్రగిరి'],
    capitalsEn: ['Hampi / Vijayanagara', 'Penukonda', 'Chandragiri'],
    keyEventsTe: [
      'విద్యారణ్య స్వామి ఆశీస్సులతో సనాతన ధర్మ రక్షణార్థం హరిహర, బుక్కరాయల చేత సామ్రాజ్య స్థాపన (1336)',
      'శ్రీకృష్ణదేవరాయల దిగ్విజయ యాత్రలు - ఉదయగిరి, కొండవీడు, కళింగ మరియు బహమనీ సుల్తానులపై విజయాలు',
      'విదేశీ యాత్రికులు డొమింగో పేస్, అబ్దుల్ రజాక్ లచే ప్రపంచంలోనే అత్యంత సంపన్న నగరంగా ప్రశంస',
      'తాళికోట యుద్ధం (రాక్షస తంగడి - 1565) - దక్కన్ సుల్తానుల సంయుక్త దాడి'
    ],
    keyEventsEn: [
      'Founded in 1336 under Sage Vidyaranya’s blessings to safeguard Sanatana Dharma',
      'Sri Krishnadevaraya’s glorious military campaigns capturing Udayagiri, Kondaveedu, and Kalinga',
      'Travelers Domingo Paes & Abdur Razzak hailing Hampi as one of the world’s grandest metropolitan capitals',
      'Catastrophic Battle of Talikota (Rakshasi-Tangadi, 1565) against the unified Deccan Sultanates'
    ],
    cultureAchievementsTe: [
      'హంపి విరూపాక్ష దేవాలయం, రాతి రథం, సంగీత స్తంభాలు గల విజయ విఠ్ఠల ఆలయం',
      'శ్రీకృష్ణదేవరాయల ఆస్థానంలో ‘భువనవిజయం’ - అల్లసాని పెద్దన, తెనాలి రామకృష్ణుల అష్టదిగ్గజ వైభవం',
      'రాయల తెలుగు ప్రబంధం ‘ఆముక్తమాల్యద’ & సంస్కృత నాటకం ‘జాంబవతీ కళ్యాణం’',
      'వీధుల్లో రత్నాలు, వజ్రాలు, ముత్యాలను కొలతపాత్రలతో కుప్పలుగా పోసి అమ్మిన అపార ఐశ్వర్యం'
    ],
    cultureAchievementsEn: [
      'Hampi’s iconic Stone Chariot, musical pillared halls of Vijaya Vittala temple, and Hazara Rama murals',
      'The "Bhuvanavijayam" royal court patronizing the Ashta Diggaja poets including Tenali Ramakrishna',
      'Krishnadevaraya authoring the Telugu literary crown jewel "Amuktamalyada"',
      'Open bazaars overflowing with diamonds, rubies, and pearls traded by volume baskets'
    ],
    whatChangedTe: 'దక్షిణ భారతదేశంలో సనాతన ధర్మం, దేవాలయాలు, శాస్త్రీయ సంగీతం, నాట్యం మరియు తెలుగు సాహిత్యం పరిరక్షించబడ్డాయి.',
    whatChangedEn: 'Shielded Peninsular India’s sacred temples, Carnatic music, Sanskrit and Telugu culture from extinction.',
    significanceTe: 'దేశైశ్వర్యం, శిల్పకళ మరియు సాహిత్యాలలో భారతదేశం సాధించిన శిఖరాగ్ర స్వర్ణ శిఖరం.',
    significanceEn: 'A dazzling beacon of Hindu sovereignty, oceanic prosperity, and literary brilliance.',
    relatedImage: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg'
  },
  {
    id: 'mughal_empire',
    order: 20,
    spokeNumber: 20,
    titleTe: 'మొఘల్ సామ్రాజ్యం',
    titleEn: 'The Mughal Empire',
    periodTe: 'క్రీ.శ. 1526 – 1857',
    periodEn: '1526 – 1857 CE',
    category: 'medieval',
    categoryTe: 'మహా మొఘల్ శకం',
    categoryEn: 'Imperial Mughals',
    icon: '🕌',
    color: '#1C4532',
    accentColor: '#22543D',
    startAngleDeg: 82.5,
    endAngleDeg: 84.5,
    midAngleDeg: 83.5,
    spanDeg: 2,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'అక్బర్ & తాజ్ మహల్',
    tagEn: 'Akbar & Taj Mahal',
    rulersTe: ['బాబర్', 'హుమాయున్', 'అక్బర్ చక్రవర్తి', 'జహంగీర్', 'షాజహాన్', 'ఔరంగజేబు'],
    rulersEn: ['Babur', 'Humayun', 'Akbar the Great', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
    capitalsTe: ['ఆగ్రా', 'ఫతేపూర్ సిక్రీ', 'ఢిల్లీ (షాజహానాబాద్)', 'లాహోర్'],
    capitalsEn: ['Agra', 'Fatehpur Sikri', 'Delhi (Shahjahanabad)', 'Lahore'],
    keyEventsTe: [
      'మొదటి పానిపట్ యుద్ధం (1526) - తుపాకులు, ఫిరంగులతో బాబర్ ఇబ్రహీం లోడిని ఓడించడం',
      'అక్బర్ చక్రవర్తి మన్సబ్దారీ వ్యవస్థ, సుల్హ్-ఇ-కుల్ (సర్వమత సామరస్యం) విధానాలు',
      'హల్దీఘాటి యుద్ధం (1576) - మహారాణా ప్రతాప్ సింగ్ అచంచల స్వాతంత్ర్య ప్రతిఘటన',
      'ఔరంగజేబు కాలంలో దక్కన్ యుద్ధాలు మరియు మొఘల్ సామ్రాజ్య విస్తరణ పతాకస్థాయి & పతనం'
    ],
    keyEventsEn: [
      'First Battle of Panipat (1526) where Babur used gunpowder field artillery to crush Ibrahim Lodi',
      'Akbar implementing administrative Mansabdari reforms and interfaith harmony (Sulh-i-Kul)',
      'Battle of Haldighati (1576) showcasing Maharana Pratap’s immortal defiance for Mewar freedom',
      'Aurangzeb’s prolonged 27-year Deccan wars stretching the empire to exhaustion and eventual decay'
    ],
    cultureAchievementsTe: [
      'షాజహాన్ నిర్మించిన తెల్లని పాలరాతి అద్భుతం ‘తాజ్ మహల్’ (ప్రపంచ ఏడు వింతల్లో ఒకటి)',
      'ఢిల్లీ ఎర్రకోట, జామా మసీదు, ఫతేపూర్ సిక్రీ బులంద్ దర్వాజా',
      'తాన్‌సేన్ హిందుస్తానీ సంగీతం, అబుల్ ఫజల్ ‘అక్బర్ నామా’ & ‘ఐన్-ఇ-అక్బరీ’',
      'మొఘల్ సూక్ష్మ చిత్రలేఖనం (మినియేచర్ పెయింటింగ్స్) మరియు గ్రాండ్ ట్రంక్ రోడ్ అభివృద్ధి'
    ],
    cultureAchievementsEn: [
      'The Taj Mahal at Agra - Shah Jahan’s pristine white marble mausoleum and World Wonder',
      'Red Fort at Delhi, Jama Masjid, and Buland Darwaza at Fatehpur Sikri',
      'Tansen revolutionizing Hindustani classical music, Abul Fazl’s "Akbarnama"',
      'Exquisite Mughal miniature paintings and rebuilding the Grand Trunk Road'
    ],
    whatChangedTe: 'భారత ఉపఖండంలో కేంద్రీకృత పన్నుల వసూలు, పర్షియన్-భారతీయ వాస్తు మరియు ఉర్దూ భాషా వికాసం జరిగాయి.',
    whatChangedEn: 'Consolidated agrarian land revenues and birthed a rich Indo-Persian courtly and artistic culture.',
    significanceTe: 'వాస్తు శిల్పం, గాంధార-హిందుస్తానీ సంగీతం మరియు సూక్ష్మ చిత్రలేఖనంలో ప్రత్యేక అధ్యాయం.',
    significanceEn: 'Known for architectural grandeur, economic centralization, and artistic refinement.',
    relatedImage: './images/indian_history/grand_overview/epoch_09_mughal_empire.jpg'
  },
  {
    id: 'maratha_empire',
    order: 21,
    spokeNumber: 21,
    titleTe: 'మరాఠా మహా సామ్రాజ్యం',
    titleEn: 'The Maratha Empire (Hindavi Swarajya)',
    periodTe: 'క్రీ.శ. 1674 – 1818',
    periodEn: '1674 – 1818 CE',
    category: 'empire',
    categoryTe: 'హిందూ స్వరాజ్యం',
    categoryEn: 'Hindavi Swarajya',
    icon: '🚩',
    color: '#C05621',
    accentColor: '#DD6B20',
    startAngleDeg: 84.5,
    endAngleDeg: 86.2,
    midAngleDeg: 85.35,
    spanDeg: 1.7,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'ఛత్రపతి శివాజీ & పీష్వాలు',
    tagEn: 'Chhatrapati Shivaji Maharaj',
    rulersTe: ['ఛత్రపతి శివాజీ మహారాజ్', 'ఛత్రపతి శంభాజీ', 'తారాబాయి రాణి', 'పీష్వా బాజీరావ్ I (అపరాజిత యోధుడు)', 'మాధవరావ్ పీష్వా'],
    rulersEn: ['Chhatrapati Shivaji Maharaj', 'Chhatrapati Sambhaji', 'Maharani Tarabai', 'Peshwa Baji Rao I', 'Madhavrao I'],
    capitalsTe: ['రాయ్‌గఢ్ (శివాజీ రాజధాని)', 'సతారా', 'పూణే (శనివార్ వాడ - పీష్వాలు)'],
    capitalsEn: ['Raigad (Shivaji’s Capital)', 'Satara', 'Pune (Shaniwar Wada - Peshwas)'],
    keyEventsTe: [
      'రాయ్‌గఢ్ కోటపై ఛత్రపతి శివాజీ మహారాజ్ పట్టాభిషేకం (1674) - హిందూ స్వరాజ్య స్థాపన',
      'గనిమి కావా (కొండ గుహలు, కోటల గొరిల్లా యుద్ధ తంత్రం) ద్వారా మొఘలులను నిలువరించడం',
      'పీష్వా బాజీరావ్ 41 యుద్ధాలు చేసి ఒక్కటి కూడా ఓడిపోకుండా ఢిల్లీపై కాషాయ జెండా ఎగురవేయడం',
      'అటక్ (ప్రస్తుత పాకిస్తాన్) నుండి కటక్ (ఒడిశా) వరకు అఖండ భారత సమాఖ్య స్థాపన'
    ],
    keyEventsEn: [
      'Coronation of Chhatrapati Shivaji Maharaj at Raigad (1674) proclaiming Hindavi Swarajya',
      'Pioneering "Ganim Kava" guerrilla warfare utilizing Sahyadri hill forts to shatter Mughal armies',
      'Peshwa Baji Rao I fighting 41 battles undefeated and planting the Maratha saffron flag at Delhi',
      'Maratha Confederacy expanding from Attock (now Pakistan) in the north to Cuttack in the east'
    ],
    cultureAchievementsTe: [
      'భారత నౌకాదళ పితామహుడు శివాజీ చేత సముద్ర దుర్గాల (సింధుదుర్గ్, విజయదుర్గ్) నిర్మాణం మరియు నావికాదళం',
      'సంత్ తుకారాం, సమర్థ రామదాసుల ఆధ్యాత్మిక మార్గదర్శకత్వంలో భక్తి వికాసం',
      'సంస్కృత రాజ్యవ్యవహార కోశం సంకలనం ద్వారా పరిపాలనలో మాతృభాష పునరుద్ధరణ',
      'అష్టప్రధాన్ మంత్రిమండలి ద్వారా సమగ్ర ప్రజా సంక్షేమ పాలన'
    ],
    cultureAchievementsEn: [
      'Father of Indian Navy - Shivaji constructing coastal forts (Sindhudurg, Vijaydurg) and naval fleets',
      'Spiritual renaissance guided by Saint Tukaram and Samarth Ramdas',
      'Commissioning the "Rajyavyavahara Kosha" to purge foreign vocabulary from Marathi administration',
      'Ashta Pradhan council of ministers establishing righteous, merit-based governance'
    ],
    whatChangedTe: 'మొఘల్ నిరంకుశ ఆధిపత్యానికి ముగింపు పలికి దేశవ్యాప్తంగా భారతీయ స్వరాజ్యాన్ని పునరుద్ధరించింది.',
    whatChangedEn: 'Dismantled Mughal hegemony across India, restoring indigenous self-rule and religious freedom.',
    significanceTe: 'దేశభక్తి, వ్యూహాత్మక పరాక్రమం మరియు ప్రజాస్వామిక స్వపరిపాలనకు అమర స్ఫూర్తి.',
    significanceEn: 'An immortal saga of indigenous valor, naval innovation, and uncompromising freedom.',
    relatedImage: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg'
  },
  {
    id: 'british_rule_1857',
    order: 22,
    spokeNumber: 22,
    titleTe: 'బ్రిటిష్ వలస పాలన & 1857 ప్రథమ సంగ్రామం',
    titleEn: 'British Colonial Rule & 1857 Revolt',
    periodTe: 'క్రీ.శ. 1757 – 1858',
    periodEn: '1757 – 1858 CE',
    category: 'modern',
    categoryTe: 'వలస దాస్యం & తిరుగుబాటు',
    categoryEn: 'Colonial Exploitation',
    icon: '⛓️',
    color: '#744210',
    accentColor: '#975A16',
    startAngleDeg: 86.2,
    endAngleDeg: 87.5,
    midAngleDeg: 86.85,
    spanDeg: 1.3,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'ఝాన్సీ లక్ష్మీబాయి & 1857',
    tagEn: 'Rani Lakshmibai & 1857',
    rulersTe: ['ఈస్ట్ ఇండియా కంపెనీ గవర్నర్ జనరల్స్ (క్లైవ్, వెల్లెస్లీ, డల్హౌసీ)', 'మంగళ్ పాండే', 'ఝాన్సీ రాణీ లక్ష్మీబాయి', 'తాంతియా తోపే', 'బహదూర్ షా జఫర్'],
    rulersEn: ['East India Company (Clive, Wellesley, Dalhousie)', 'Mangal Pandey', 'Rani Lakshmibai of Jhansi', 'Tatya Tope', 'Bahadur Shah Zafar'],
    capitalsTe: ['కలకత్తా (ఫోర్ట్ విలియం - కంపెనీ ప్రధాన కేంద్రం)', 'మీరట్, ఢిల్లీ, ఝాన్సీ, కాన్పూర్, లక్నో (విప్లవ కేంద్రాలు)'],
    capitalsEn: ['Calcutta (Fort William)', 'Meerut, Delhi, Jhansi, Kanpur, Lucknow (Revolt Centers)'],
    keyEventsTe: [
      'ప్లాసీ యుద్ధం (1757) మరియు బక్సార్ యుద్ధం (1764) ద్వారా కంపెనీ బెంగాల్ ఆక్రమణ',
      'సైన్యసహకార పద్ధతి మరియు రాజ్యసంక్రమణ సిద్ధాంతం (డాక్ట్రిన్ ఆఫ్ లాప్స్) ద్వారా సంస్థానాల కబళింపు',
      '1857 మార్చి 29న బారక్‌పూర్‌లో మంగళ్ పాండే తొలి తిరుగుబాటు రణభేరి',
      '1857 ప్రథమ భారత స్వాతంత్ర్య సంగ్రామం - ఝాన్సీ లక్ష్మీబాయి వీరోచిత పోరాటం మరియు ప్రాణత్యాగం'
    ],
    keyEventsEn: [
      'Battle of Plassey (1757) and Buxar (1764) ceding administrative Diwani rights of Bengal to Company',
      'Exploitative Subsidiary Alliance and Doctrine of Lapse illegally annexing princely kingdoms',
      'Sepoy Mangal Pandey firing the first shot of open mutiny at Barrackpore on March 29, 1857',
      'The Great Revolt of 1857 uniting Hindus and Muslims under Rani Lakshmibai and Bahadur Shah Zafar'
    ],
    cultureAchievementsTe: [
      'రైల్వేలు (1853 ముంబై-థానే), టెలిగ్రాఫ్ మరియు తపాలా వ్యవస్థల ప్రవేశం',
      'రాజా రామ్మోహన్ రాయ్ సతీ సహగమన నిషేధం (1829) & ఆధునిక విద్యా సంస్కరణలు',
      'ఈస్ట్ ఇండియా కంపెనీ పాలన రద్దయి బ్రిటిష్ రాణి విక్టోరియా ప్రత్యక్ష పాలనలోకి రావడం (1858 చట్టం)'
    ],
    cultureAchievementsEn: [
      'Introduction of Indian Railways (1853 Bombay-Thane), telegraph network, and postal system',
      'Raja Ram Mohan Roy abolishing Sati (1829) and spearheading the Bengal Renaissance',
      'Government of India Act 1858 abolishing East India Company and transferring rule to the British Crown'
    ],
    whatChangedTe: 'భారతదేశ సంపద దోపిడీకి గురైంది; కానీ జాతీయ సమైక్యతా చైతన్యం మరియు స్వాతంత్ర్య కాంక్ష రగిలాయి.',
    whatChangedEn: 'Drained India’s immense wealth to Britain while igniting the nascent flame of Indian nationalism.',
    significanceTe: 'దాస్య శృంఖలాలను తెంచడానికి భారత ప్రజలు తొలిసారి ప్రాణాలర్పించి పోరాడిన వీర ఘట్టం.',
    significanceEn: 'The First War of Independence that shook the foundations of the British Empire.',
    relatedImage: './images/indian_history/grand_overview/epoch_10_british_rule.jpg'
  },
  {
    id: 'national_freedom_struggle',
    order: 23,
    spokeNumber: 23,
    titleTe: 'భారత స్వాతంత్ర్య సమర పోరాటం',
    titleEn: 'National Freedom Struggle',
    periodTe: 'క్రీ.శ. 1885 – 1947',
    periodEn: '1885 – 1947 CE',
    category: 'modern',
    categoryTe: 'స్వాతంత్ర్య విప్లవం',
    categoryEn: 'Freedom Movement',
    icon: '🇮🇳',
    color: '#DD6B20',
    accentColor: '#ED8936',
    startAngleDeg: 87.5,
    endAngleDeg: 88.5,
    midAngleDeg: 88,
    spanDeg: 1,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'గాంధీ, నేతాజీ, భగత్ సింగ్',
    tagEn: 'Gandhi, Bose, Bhagat Singh',
    rulersTe: ['మహాత్మా గాంధీ', 'నేతాజీ సుభాష్ చంద్రబోస్', 'భగత్ సింగ్', 'సర్దార్ వల్లభభాయ్ పటేల్', 'బాలగంగాధర తిలక్', 'లాలా లజపతిరాయ్'],
    rulersEn: ['Mahatma Gandhi', 'Netaji Subhas Chandra Bose', 'Bhagat Singh', 'Sardar Vallabhbhai Patel', 'Bal Gangadhar Tilak', 'Lala Lajpat Rai'],
    capitalsTe: ['సమగ్ర భారతదేశం (సబర్మతి, వార్ధా, ఢిల్లీ, అమృత్‌సర్, కోల్‌కతా)'],
    capitalsEn: ['Pan-India (Sabarmati, Wardha, Delhi, Amritsar, Kolkata)'],
    keyEventsTe: [
      'భారత జాతీయ కాంగ్రెస్ స్థాపన (1885) మరియు వందేమాతరం ఉద్యమం (1905)',
      'జలియన్ వాలాబాగ్ దురంతం (1919) - దేశవ్యాప్త రణరంగం',
      'ఉప్పు సత్యాగ్రహం / దండి యాత్ర (1930) & క్విట్ ఇండియా ఉద్యమం (1942)',
      'నేతాజీ సుభాష్ చంద్రబోస్ ఆజాద్ హింద్ ఫౌజ్ (INA) సైన్యం ద్వారా బ్రిటిష్‌పై సాయుధ సమరం'
    ],
    keyEventsEn: [
      'Founding of Indian National Congress (1885) and Swadeshi/Vande Mataram movement (1905)',
      'Jallianwala Bagh Massacre (1919) shocking the global conscience',
      'Dandi Salt Satyagraha (1930) and the thunderous Quit India Movement (1942)',
      'Netaji Subhas Chandra Bose leading the Indian National Army (INA) on the battlefront'
    ],
    cultureAchievementsTe: [
      'సత్యం, అహింస, శాసనోల్లంఘన - ప్రపంచ విముక్తి పోరాటాలకు మార్గదర్శకమైన సిద్ధాంతాలు',
      'రవీంద్రనాథ్ ఠాగూర్ నోబెల్ పురస్కారం (గీతాంజలి 1913) & జాతీయ గీతాల రచన',
      'బంకించంద్ర ఛటర్జీ ‘వందేమాతరం’ గేయం జాతీయ సమర నినాదంగా మారడం'
    ],
    cultureAchievementsEn: [
      'Satyagraha and Ahimsa becoming universal blueprints for civil rights movements worldwide',
      'Rabindranath Tagore winning the Nobel Prize in Literature (1913) for "Gitanjali"',
      'Bankim Chandra Chattopadhyay’s "Vande Mataram" uniting millions under one patriotic anthem'
    ],
    whatChangedTe: '1947 ఆగస్టు 15న బ్రిటిష్ యూనియన్ జాక్ దించబడి మువ్వన్నెల భారత జెండా రెపరెపలాడింది.',
    whatChangedEn: 'Ended nearly two centuries of British imperial rule on August 15, 1947, restoring sovereign freedom.',
    significanceTe: 'ప్రపంచంలోనే అతిపెద్ద ప్రజాస్వామ్య ప్రజా ఉద్యమం ద్వారా స్వాతంత్ర్యం సాధించిన మహోన్నత అధ్యాయం.',
    significanceEn: 'A triumph of moral courage, non-violent mass resistance, and revolutionary sacrifice.',
    relatedImage: './images/indian_history/grand_overview/freedom_fighters_banner.jpg'
  },
  {
    id: 'independent_republic',
    order: 24,
    spokeNumber: 24,
    titleTe: 'స్వతంత్ర భారత ఆవిర్భావం & రాజ్యాంగం',
    titleEn: 'Independent India & Constitution',
    periodTe: 'క్రీ.శ. 1947 – 1999',
    periodEn: '1947 – 1999 CE',
    category: 'contemporary',
    categoryTe: 'గణతంత్ర నిర్మాణం',
    categoryEn: 'Birth of Republic',
    icon: '⚖️',
    color: '#2C7A7B',
    accentColor: '#319795',
    startAngleDeg: 88.5,
    endAngleDeg: 89.5,
    midAngleDeg: 89,
    spanDeg: 1,
    yugaEquivalentTe: 'అవరోహణ కలియుగం (భాగం 2)',
    yugaEquivalentEn: 'Descending Kali Yuga (Part 2)',
    tagTe: 'రాజ్యాంగం & హరిత విప్లవం',
    tagEn: 'Constitution & Science',
    rulersTe: ['డా. బి.ఆర్. అంబేద్కర్', 'బాబూ రాజేంద్ర ప్రసాద్', 'సర్దార్ వల్లభభాయ్ పటేల్', 'జవహర్‌లాల్ నెహ్రూ', 'లాల్ బహదూర్ శాస్త్రి', 'అటల్ బిహారీ వాజ్‌పేయి'],
    rulersEn: ['Dr. B. R. Ambedkar', 'Dr. Rajendra Prasad', 'Sardar Vallabhbhai Patel', 'Jawaharlal Nehru', 'Lal Bahadur Shastri', 'Atal Bihari Vajpayee'],
    capitalsTe: ['న్యూఢిల్లీ & సమైక్య రాష్ట్రాలు'],
    capitalsEn: ['New Delhi & Federated States'],
    keyEventsTe: [
      'సర్దార్ పటేల్ ఉక్కు సంకల్పంతో 565 స్వదేశీ సంస్థానాల ఏకీకరణ',
      '1950 జనవరి 26న డా. బాబాసాహెబ్ అంబేద్కర్ రూపొందించిన భారత రాజ్యాంగం అమలు - గణతంత్ర భారత్ ఆవిర్భావం',
      'హరిత విప్లవం (ఎం.ఎస్. స్వామినాథన్) & శ్వేత విప్లవం (వర్గీస్ కురియన్) ద్వారా ఆహార స్వయంసమృద్ధి',
      'పోఖ్రాన్ అణు పరీక్షలు (1974 ‘స్మైలింగ్ బుద్ధ’ & 1998 ‘ఆపరేషన్ శక్తి’) - అణుశక్తిగా భారత్'
    ],
    keyEventsEn: [
      'Iron Man Sardar Patel integrating 565 princely states into one united republic',
      'Adoption of the Constitution of India drafted under Dr. B. R. Ambedkar on January 26, 1950',
      'Green Revolution (M. S. Swaminathan) and White Revolution transforming India into an agro-surplus nation',
      'Pokhran nuclear tests (1974 & 1998) establishing India as a responsible nuclear weapons power'
    ],
    cultureAchievementsTe: [
      'భారత అంతరిక్ష పరిశోధనా సంస్థ (ISRO స్థాపన 1969 - విక్రమ్ సారాభాయ్)',
      'ఐఐటీలు, ఐఐఎంలు, ఎయిమ్స్ మరియు అటామిక్ ఎనర్జీ కమిషన్ (హోమీ బాభా) స్థాపన',
      'సార్వత్రిక వయోజన ఓటు హక్కు ద్వారా ప్రపంచంలోనే అతిపెద్ద ప్రజాస్వామ్యం స్థిరపడటం'
    ],
    cultureAchievementsEn: [
      'Foundation of Indian Space Research Organisation (ISRO, 1969) under Vikram Sarabhai',
      'Establishing world-class institutions: IITs, IIMs, AIIMS, and BARC under Homi Bhabha',
      'Conducting peaceful general elections with universal adult franchise across linguistic lines'
    ],
    whatChangedTe: 'వలస పాలనలో పేదరికంలో కూరుకుపోయిన దేశం సార్వభౌమ శాస్త్రీయ, పారిశ్రామిక శక్తిగా నిలదొక్కుకుంది.',
    whatChangedEn: 'Transformed an impoverished colony into a self-reliant constitutional nuclear republic.',
    significanceTe: 'సమగ్ర ప్రజాస్వామిక విలువలు, వైవిధ్యంలో ఏకత్వం మరియు శాస్త్రీయ దృక్పథానికి గట్టి పునాది.',
    significanceEn: 'A testament to constitutional resilience, pluralistic democracy, and scientific self-reliance.',
    relatedImage: './images/indian_history/grand_overview/epoch_11_independent_india.jpg'
  },
  {
    id: 'digital_economic_rise',
    order: 25,
    spokeNumber: 25,
    titleTe: 'డిజిటల్ విప్లవం & ఆర్థిక వికాసం',
    titleEn: 'Digital Revolution & Space Triumphs',
    periodTe: 'క్రీ.శ. 2000 – 2025',
    periodEn: '2000 – 2025 CE',
    category: 'contemporary',
    categoryTe: 'ఆధునిక వికాసం',
    categoryEn: 'Digital Millennium',
    icon: '🚀',
    color: '#2B6CB0',
    accentColor: '#3182CE',
    startAngleDeg: 89.5,
    endAngleDeg: 90.5,
    midAngleDeg: 90,
    spanDeg: 1,
    yugaEquivalentTe: 'అవరోహణ కలి ముగింపు',
    yugaEquivalentEn: 'End of Descending Kali',
    tagTe: 'చంద్రయాన్ & ఐటీ విప్లవం',
    tagEn: 'Chandrayaan & Digital Bharat',
    rulersTe: ['డా. ఏ.పి.జె. అబ్దుల్ కలాం (మిస్సైల్ మ్యాన్)', 'భారత శాస్త్రవేత్తలు & ఐటీ నిపుణులు', 'మన్మోహన్ సింగ్', 'నరేంద్ర మోదీ'],
    rulersEn: ['Dr. A. P. J. Abdul Kalam', 'ISRO & Tech Pioneers', 'Dr. Manmohan Singh', 'Narendra Modi'],
    capitalsTe: ['న్యూఢిల్లీ', 'బెంగళూరు (సిలికాన్ వ్యాలీ)', 'హైదరాబాద్ (హైటెక్ సిటీ)', 'ముంబై (ఆర్థిక రాజధాని)'],
    capitalsEn: ['New Delhi', 'Bengaluru (Silicon Valley)', 'Hyderabad (Cyberabad)', 'Mumbai (Financial Hub)'],
    keyEventsTe: [
      'చంద్రయాన్-3 చంద్రుని దక్షిణ ధ్రువంపై కాలుమోపిన మొట్టమొదటి దేశంగా భారతదేశం చరిత్ర (2023)',
      'మంగళయాన్ (MOM) మొదటి ప్రయత్నంలోనే అంగారక కక్ష్యను చేరి ప్రపంచ రికార్డు',
      'యూపీఐ (UPI) డిజిటల్ చెల్లింపుల విప్లవం - ప్రపంచంలోనే 46% డిజిటల్ లావాదేవీలు భారత్‌లోనే',
      'ప్రపంచంలో 5వ అతిపెద్ద ఆర్థిక వ్యవస్థగా భారత్ అవతరణ'
    ],
    keyEventsEn: [
      'Chandrayaan-3 making India the first nation to soft-land near the lunar south pole (2023)',
      'Mars Orbiter Mission (Mangalyaan) entering Martian orbit on maiden attempt at fractional cost',
      'UPI revolutionizing digital micro-payments handling over 46% of all global real-time digital transactions',
      'Surpassing major global economies to become the world’s 5th largest economy'
    ],
    cultureAchievementsTe: [
      'ఐక్యరాజ్యసమితి చేత జూన్ 21న ‘అంతర్జాతీయ యోగా దినోత్సవం’ గుర్తింపు - 190+ దేశాల భాగస్వామ్యం',
      'ఆధార్ మరియు డిజిటల్ పబ్లిక్ ఇన్‌ఫ్రాస్ట్రక్చర్ (DPI) ప్రపంచ దేశాలకు ఆదర్శం',
      'వ్యాక్సిన్ మైత్రి ద్వారా ప్రపంచంలోని 100+ దేశాలకు ప్రాణరక్షక కొవిడ్ వ్యాక్సిన్ల సరఫరా'
    ],
    cultureAchievementsEn: [
      'UN declaring June 21 as International Day of Yoga celebrated across 190+ countries',
      'Aadhaar and India Stack serving as global models for Digital Public Infrastructure',
      'Vaccine Maitri delivering hundreds of millions of life-saving vaccines to developing nations'
    ],
    whatChangedTe: 'సేవా రంగం, సాఫ్ట్‌వేర్, స్టార్టప్‌లు మరియు అంతరిక్ష పరిశోధనలలో భారత్ ప్రపంచ అగ్రగామిగా ఎదిగింది.',
    whatChangedEn: 'Elevated India into a global software powerhouse, leading spacefaring nation, and economic engine.',
    significanceTe: 'ప్రాచీన విజ్ఞానాన్ని ఆధునిక శాస్త్ర సాంకేతికతతో అనుసంధానించిన నవభారత వికాసం.',
    significanceEn: 'A spectacular fusion of ancient civilizational heritage with frontier scientific leadership.',
    relatedImage: './images/indian_history/grand_overview/soul_architecture.jpg'
  },
  {
    id: 'current_time_bharat',
    order: 26,
    spokeNumber: 26,
    titleTe: 'ప్రస్తుత సమయం: సమకాలీన భారత్',
    titleEn: 'CURRENT TIME: Contemporary Bharat',
    periodTe: '2026 క్రీ.శ. (కలియుగాబ్దం 5127 • నేటి దినం)',
    periodEn: '2026 CE (Kaliyuga Year 5127 • Present Day)',
    category: 'present',
    categoryTe: 'ప్రస్తుత కాలం',
    categoryEn: 'Current Time & Era',
    icon: '📍',
    color: '#00838F',
    accentColor: '#00ACC1',
    isCurrentTime: true,
    startAngleDeg: 90.5,
    endAngleDeg: 98.37,
    midAngleDeg: 94.44,
    spanDeg: 7.87,
    yugaEquivalentTe: 'ఎక్పైరోసిస్ (అగ్ని పరివర్తన కాలం) • వర్తమాన క్షణం',
    yugaEquivalentEn: 'Ekpyrosis (Nadir Turning Point) • PRESENT NOW',
    tagTe: '🔴 ప్రస్తుత సమయ సూచిక',
    tagEn: 'LIVE CURRENT TIME',
    rulersTe: ['140+ కోట్ల భారతీయ పౌరులు (సార్వభౌమ ప్రజాస్వామ్య పౌర సమాజం)', 'భారత రాజ్యాంగ ప్రభుత్వం & స్వతంత్ర న్యాయవ్యవస్థ'],
    rulersEn: ['1.4+ Billion Sovereign Indian Citizens', 'Constitutional Democratic Government & Judiciary'],
    capitalsTe: ['న్యూఢిల్లీ (నవ సంసద్ భవన్ / సెంట్రల్ విస్తా)', 'సమగ్ర భారతావని & విశ్వవేదిక'],
    capitalsEn: ['New Delhi (New Parliament House)', 'Pan-India & Global Stage'],
    keyEventsTe: [
      '🎯 ఈ క్షణంలో మీరు వీక్షిస్తున్న వర్తమాన కాలం: క్రీ.శ. 2026 (కలియుగ సంవత్సరం 5,127)',
      'వికసిత్ భారత్ 2047 లక్ష్యం - స్వయంసమృద్ధ సంపూర్ణ అభివృద్ధి సంకల్పం',
      'గగన్‌యాన్ మానవసహిత అంతరిక్ష యాత్ర సన్నాహాలు & సూర్య పరిశోధన నౌక ఆదిత్య-L1',
      'సెమీకండక్టర్ మిషన్, గ్రీన్ హైడ్రోజన్ మరియు ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI) లో ముందంజ',
      'గ్లోబల్ సౌత్ నాయకత్వం & ‘వసుధైక కుటుంబకం’ (ఒకే భూమి, ఒకే కుటుంబం, ఒకే భవిష్యత్తు) సందేశం'
    ],
    keyEventsEn: [
      '🎯 THE EXACT POINT YOU ARE VIEWING NOW: 2026 CE (Kaliyuga Year 5,127)',
      'Viksit Bharat 2047 roadmap toward a fully developed, prosperous, and sustainable India',
      'Gaganyaan manned orbital spaceflight mission and Aditya-L1 continuous solar observation',
      'National Semiconductor Mission, Green Hydrogen transition, and Sovereign AI innovation',
      'Leadership of the Global South upholding "Vasudhaiva Kutumbakam" (One Earth, One Family, One Future)'
    ],
    cultureAchievementsTe: [
      '5,000 సంవత్సరాల నిరంతర సనాతన సంస్కృతి మరియు ఆధునిక హైటెక్ సమాజాల అద్భుత సంగమం',
      'కాశీ విశ్వనాథ్ కారిడార్, మహాకాల్ లోక్, అయోధ్య ధామం మరియు ప్రాచీన ఆలయాల పునరుద్ధరణ',
      'భారతీయ సాంస్కృతిక వారసత్వం డిజిటల్ రూపంలో విశ్వవ్యాప్తం కావడం',
      'శాంతి, పర్యావరణ పరిరక్షణ (మిషన్ LiFE) మరియు సర్వజన హితం కోసం అంతర్జాతీయ పిలుపు'
    ],
    cultureAchievementsEn: [
      'Living continuous confluence of 5,000 years of unbroken spiritual heritage with cutting-edge tech',
      'Revitalization of grand sacred temple circuits and classical cultural heritage centers',
      'Preservation and global digital cataloging of ancient Sanskrit manuscripts and scriptures',
      'Pioneering Mission LiFE (Lifestyle for Environment) and global humanitarian leadership'
    ],
    whatChangedTe: 'చరిత్ర గత కాలం కాదు; 5,000 ఏళ్ళ అనుభవాలతో వర్తమానంలో విశ్వగురువుగా ఎదిగే చైతన్యవంతమైన సజీవ ప్రయాణం.',
    whatChangedEn: 'History is not merely the past; it is the living continuous pulse shaping today’s vibrant Bharat.',
    significanceTe: 'కాలచక్రంలో ఈ క్షణమే వర్తమానం. ప్రాచీన రుషుల ఆశీస్సులు, వీరుల త్యాగాల పునాదులపై నేడు మనం నిలబడి ఉన్నాం!',
    significanceEn: 'The exact marker of NOW on the cosmic wheel—where five millennia of resilience meet tomorrow’s vision.',
    relatedImage: './images/indian_history/grand_overview/india_land_map.jpg'
  },
  {
    id: 'ascending_science_space',
    order: 27,
    spokeNumber: 27,
    titleTe: 'ఆరోహణ రోదసి & విజ్ఞాన యుగం',
    titleEn: 'Ascending Space & Advanced Science',
    periodTe: 'క్రీ.శ. 3225 – 5925',
    periodEn: '3,225 – 5,925 CE',
    category: 'contemporary',
    categoryTe: 'ఆరోహణ యుగం (ద్వాపర)',
    categoryEn: 'Ascending Era (Dwapara)',
    icon: '🚀',
    color: '#0277BD',
    accentColor: '#0288D1',
    tagTe: 'శక్తి & రోదసి వికాసం',
    tagEn: 'Subtle Energy & Cosmos',
    startAngleDeg: 98.37,
    endAngleDeg: 140.23,
    midAngleDeg: 119.30,
    spanDeg: 41.86,
    yugaEquivalentTe: 'ఆరోహణ ద్వాపర యుగం',
    yugaEquivalentEn: 'Ascending Dwapara Yuga',
    rulersTe: ['విశ్వ శాస్త్రవేత్తలు & ధర్మ సాంకేతిక మార్గదర్శకులు'],
    rulersEn: ['Global Scientists & Dharmic Scientific Pioneers'],
    capitalsTe: ['భూమి & అంతరిక్ష నివాస కేంద్రాలు'],
    capitalsEn: ['Earth & Interplanetary Habitats'],
    keyEventsTe: [
      'భౌతిక పరిమితుల నుండి సూక్ష్మ శక్తి, క్వాంటమ్ ప్రాణ విజ్ఞాన వికాసం',
      'కాలుష్య రహిత స్వచ్ఛంద ఇంధన విప్లవం మరియు గ్రహాంతర ప్రయాణాలు',
      'భారతీయ యోగ, ధ్యాన శాస్త్రాల ద్వారా మానసిక సామర్థ్యాల విస్తరణ'
    ],
    keyEventsEn: [
      'Mastery of subtle atomic and etheric energies transcending fossil limitations',
      'Zero-emission energy revolution and interplanetary exploration',
      'Awakening of higher cognitive potential through Vedic science and meditation'
    ],
    cultureAchievementsTe: [
      'ప్రాణాయామ మరియు క్వాంటమ్ శక్తి విజ్ఞాన సమన్వయం',
      'విశ్వవ్యాప్త శాంతి మరియు పర్యావరణ పునరుజ్జీవనం'
    ],
    cultureAchievementsEn: [
      'Harmonization of subtle bio-energies and cosmic physics',
      'Global ecological restoration and universal planetary peace'
    ],
    whatChangedTe: 'భౌతిక స్థూల బంధాల నుండి విముక్తి చెంది సూక్ష్మ శక్తి విజ్ఞానం వైపు చైతన్యం ఆరోహణ చేసింది.',
    whatChangedEn: 'Consciousness ascended from gross material bonds into subtle energy comprehension.',
    significanceTe: 'మానవాళి భౌతిక బానిసత్వాన్ని దాటి విశ్వ చైతన్యంలోకి అడుగుపెట్టిన ఆరోహణ ఘట్టం.',
    significanceEn: 'Humanity awakens to subtle electro-etheric reality and planetary unity.',
    relatedImage: './images/indian_history/grand_overview/epoch_06_modern_republic.jpg'
  },
  {
    id: 'ascending_mental_ramarajya',
    order: 28,
    spokeNumber: 28,
    titleTe: 'ఆరోహణ మనోశక్తి & రామరాజ్య యుగం',
    titleEn: 'Ascending Intuition & Ramarajya Era',
    periodTe: 'క్రీ.శ. 5925 – 8925',
    periodEn: '5,925 – 8,925 CE',
    category: 'golden_age',
    categoryTe: 'ఆరోహణ యుగం (త్రేతా)',
    categoryEn: 'Ascending Era (Treta)',
    icon: '🧘',
    color: '#E65100',
    accentColor: '#F57C00',
    tagTe: 'దివ్య సంకల్పం & రామరాజ్యం',
    tagEn: 'Direct Intuition & Ramarajya',
    startAngleDeg: 140.23,
    endAngleDeg: 182.09,
    midAngleDeg: 161.16,
    spanDeg: 41.86,
    yugaEquivalentTe: 'ఆరోహణ త్రేతాయుగం',
    yugaEquivalentEn: 'Ascending Treta Yuga',
    rulersTe: ['బ్రహ్మర్షులు & ధర్మపాలకులు'],
    rulersEn: ['Brahmarshis & Righteous Dharmic Stewards'],
    capitalsTe: ['విశ్వ ధర్మ కేంద్రాలు & పవిత్ర ఆశ్రమాలు'],
    capitalsEn: ['Global Spiritual Sanctuaries & Sacred Hermitages'],
    keyEventsTe: [
      'టెలిపతి, అంతఃచేతనా వికాసం, ఆలోచనా తరంగాలతో సమాచార వినిమయం',
      'సమాజంలో నేరాలు, అసమానతలు లేని పరిపూర్ణ రామరాజ్య ధర్మపాలన',
      'ప్రకృతి శక్తులతో సంపూర్ణ సామరస్యం మరియు దివ్య సంకల్ప శక్తి'
    ],
    keyEventsEn: [
      'Universal direct intuition, telepathic communication, and thought-manifestation',
      'Global realization of Ramarajya without crime, poverty, or disease',
      'Harmonic resonance with planetary ecology and nature spirits'
    ],
    cultureAchievementsTe: [
      'మానసిక తపశ్శక్తి ద్వారా సృష్టి శక్తుల నియంత్రణ',
      'ధర్మం మూడు పాదములతో నడిచే దివ్య సామాజిక జీవనం'
    ],
    cultureAchievementsEn: [
      'Direct spiritual mastery of mental and elemental powers',
      'Dharma established firmly on three pillars of righteousness'
    ],
    whatChangedTe: 'బాహ్య యంత్రాల అవసరం లేకుండా మనోశక్తితో సకల కార్యాలు సిద్ధించే దివ్య స్థాయికి మానవుడు చేరాడు.',
    whatChangedEn: 'Humanity elevated beyond physical tools to direct mind-consciousness capabilities.',
    significanceTe: 'మానవ మేధస్సు దివ్య ఆధ్యాత్మిక సంకల్ప శక్తిగా రూపాంతరం చెందిన కాలం.',
    significanceEn: 'The flowering of divine mental power and global righteousness.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  },
  {
    id: 'ascending_satya_apex',
    order: 29,
    spokeNumber: 29,
    titleTe: 'ఆరోహణ సత్యయుగ స్వర్ణ శిఖరం',
    titleEn: 'Ascending Satya Golden Age Apex',
    periodTe: 'క్రీ.శ. 8925 – 14,625 / 10,876 క్రీ.పూ.',
    periodEn: '8,925 – 14,625 CE / 10,876 BCE',
    category: 'golden_age',
    categoryTe: 'సత్యయుగం (శిఖరం)',
    categoryEn: 'Satya Yuga (Apex)',
    icon: '🪷',
    color: '#F57F17',
    accentColor: '#FBC02D',
    tagTe: 'బ్రహ్మజ్ఞానం & స్వర్ణయుగం',
    tagEn: 'Supreme God-Consciousness',
    startAngleDeg: 182.09,
    endAngleDeg: 261.63,
    midAngleDeg: 221.86,
    spanDeg: 79.54,
    yugaEquivalentTe: 'ఆరోహణ సత్యయుగం',
    yugaEquivalentEn: 'Ascending Satya Yuga',
    rulersTe: ['జీవన్ముక్తులు, మహర్షులు & పరమహంసలు'],
    rulersEn: ['Jivanmuktas, Maharshis & Paramahamsas'],
    capitalsTe: ['బ్రహ్మలోక సమన్వయ భూమండలం'],
    capitalsEn: ['Terrestrial Heaven & Enlightened Earth'],
    keyEventsTe: [
      'బ్రహ్మజ్ఞానం, సకల ప్రాణులలో భగవద్దర్శనం మరియు జీవన్ముక్తి స్థితి',
      'సత్యం, తపస్సు, దయ, దానం నాలుగు పాదాలతో నిలిచే పరిపూర్ణ సత్యయుగం',
      '25,800 సంవత్సరాల మహా కాలచక్రం తన పరమ శిఖరాన్ని చేరుకోవడం'
    ],
    keyEventsEn: [
      'Omnipresent God-consciousness, universal enlightened liberation (Jivanmukti)',
      'Dharma standing whole and complete upon all four divine pillars',
      'The 25,800-year Great Year reaching its transcendent cosmic pinnacle'
    ],
    cultureAchievementsTe: [
      'సత్యం మరియు అమృతత్వం ప్రత్యక్షానుభవం',
      'సమస్త లోకాలతో సంభాషణ మరియు విశ్వాత్మైక్యత'
    ],
    cultureAchievementsEn: [
      'Living embodiment of Satya, Tapas, Daya, and Dana in daily life',
      'Seamless communion of physical, astral, and causal dimensions'
    ],
    whatChangedTe: 'మానవాత్మ పరమాత్మతో లీనమై సర్వత్రా దివ్య స్వర్ణ కాంతి ప్రసరించింది.',
    whatChangedEn: 'Complete union of individual soul with the Supreme Paramatman.',
    significanceTe: 'సృష్టి కాలచక్రపు పరమ శిఖరం మరియు విశ్వ చైతన్య పరిపూర్ణత.',
    significanceEn: 'The supreme pinnacle of the 25,800-year cycle.',
    relatedImage: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg'
  }
];

export const CHAKRA_CATEGORIES = [
  { id: 'all', labelTe: 'అన్ని యుగాలు & సామ్రాజ్యాలు (29)', labelEn: 'All Eras & Dynasties (29)' },
  { id: 'ancient', labelTe: 'ప్రాచీన & ఇతిహాసాలు', labelEn: 'Ancient & Epics' },
  { id: 'vedic', labelTe: 'వేద & తాత్విక యుగం', labelEn: 'Vedic & Philosophy' },
  { id: 'classical', labelTe: 'క్లాసికల్ & రీజినల్', labelEn: 'Classical Kingdoms' },
  { id: 'golden_age', labelTe: 'భారత స్వర్ణయుగం', labelEn: 'Golden Age' },
  { id: 'medieval', labelTe: 'మధ్యయుగం & సామ్రాజ్యాలు', labelEn: 'Medieval Empires' },
  { id: 'modern', labelTe: 'స్వాతంత్ర్య సమరం', labelEn: 'Freedom Struggle' },
  { id: 'contemporary', labelTe: 'గణతంత్ర భారత్', labelEn: 'Republic & Rise' },
  { id: 'present', labelTe: '📍 ప్రస్తుత సమయం (2026)', labelEn: '📍 Current Time (2026)' },
];
