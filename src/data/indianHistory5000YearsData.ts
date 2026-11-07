// Complete Bilingual Dataset for "Indian History: 5,000 Years of Civilization, Power & Change"
// Extracted and structured directly from the uploaded master infographic poster

export interface TimelineEpoch {
  id: string;
  yearsEn: string;
  yearsTe: string;
  titleEn: string;
  titleTe: string;
  subtitleEn?: string;
  subtitleTe?: string;
  image: string;
  headerBg: string;
  keyFeaturesEn: string;
  keyFeaturesTe: string;
  whatChangedEn: string;
  whatChangedTe: string;
}

export interface FreedomFighter {
  id: string;
  nameEn: string;
  nameTe: string;
  roleEn: string;
  roleTe: string;
  image: string;
}

export interface IndependenceMilestone {
  year: string;
  titleEn: string;
  titleTe: string;
  detailEn: string;
  detailTe: string;
  icon: string;
}

export const INDIAN_HISTORY_5000_YEARS = {
  header: {
    superTitleEn: 'A JOURNEY OF CIVILIZATIONS, EMPIRES & IDEAS',
    superTitleTe: 'నాగరికతలు, సామ్రాజ్యాలు & భావజాలాల మహోన్నత ప్రస్థానం',
    titleEn: 'INDIAN HISTORY: 5,000 YEARS OF CIVILIZATION, POWER & CHANGE',
    titleTe: 'భారతీయ చరిత్ర: 5,000 సంవత్సరాల నాగరికత, సామ్రాజ్యాలు & పరివర్తన',
    descriptionEn: "From ancient river valley cities to the world's largest democracy—a story of people, ideas, faiths, conquests, resilience and a timeless culture.",
    descriptionTe: 'ప్రాచీన సింధు నదీ లోయ నగరాల నుండి నేటి ప్రపంచపు అతిపెద్ద ప్రజాస్వామ్యం వరకు—ప్రజలు, భావాలు, విశ్వాసాలు, ప్రతిఘటనలు మరియు సనాతన సంస్కృతి యొక్క అపురూప కథనం.',
    posterImage: './images/indian_history/indian_history_5000_years_poster.jpg'
  },

  // SECTION 1: THE GRAND TIMELINE (11 Epochs)
  timeline: [
    {
      id: 'indus_valley',
      yearsEn: '3300–1300 BCE',
      yearsTe: 'క్రీ.పూ. 3300–1300',
      titleEn: 'INDUS VALLEY CIVILIZATION',
      titleTe: 'సింధు లోయ నాగరికత',
      image: './images/indian_history/grand_overview/epoch_01_indus_valley.jpg',
      headerBg: '#C28938',
      keyFeaturesEn: 'Urban planning, drainage, trade, crafts, seals, script (undeciphered)',
      keyFeaturesTe: 'గ్రిడ్ నగర ప్రణాళిక, భూగర్భ డ్రైనేజీ, వాణిజ్యం, హస్తకళలు, ముద్రికలు, అస్పష్ట చిత్రలిపి',
      whatChangedEn: 'First urban civilization in South Asia',
      whatChangedTe: 'దక్షిణాసియాలో మొట్టమొదటి నగర నాగరికత ఆవిర్భావం'
    },
    {
      id: 'vedic_age',
      yearsEn: '1500–600 BCE',
      yearsTe: 'క్రీ.పూ. 1500–600',
      titleEn: 'Vedic Age (Early & Later Vedic)',
      titleTe: 'వేద యుగం (తొలి & మలి)',
      image: './images/indian_history/grand_overview/epoch_02_vedic_age.jpg',
      headerBg: '#D87A29',
      keyFeaturesEn: 'Vedas composed (< 1500 BCE Rig Veda, < 900 BCE Later Vedas, < 650 BCE Early Upanishads), varnas, yajnas, Aryan cultural spread',
      keyFeaturesTe: 'వేదాల సంకలనం (< 1500 BCE ఋగ్వేదం, < 900 BCE మలి వేదాలు, < 650 BCE ఉపనిషత్తులు), వర్ణ వ్యవస్థ, యజ్ఞయాగాలు',
      whatChangedEn: 'Shift from urban to rural-agrarian society and philosophical codification',
      whatChangedTe: 'నగరాల నుండి గ్రామీణ-వ్యవసాయ సమాజంగా మరియు తాత్విక క్రోడీకరణగా పరివర్తన'
    },
    {
      id: 'mahajanapadas',
      yearsEn: '600–322 BCE',
      yearsTe: 'క్రీ.పూ. 600–322',
      titleEn: 'Mahajanapadas & Rise of New Ideas',
      titleTe: 'మహాజనపదాలు & నూతన ఆలోచనలు',
      image: './images/indian_history/grand_overview/epoch_03_mahajanapadas.jpg',
      headerBg: '#8DA633',
      keyFeaturesEn: '16 Mahajanapadas, Nirvana of Buddha (483 BCE) & Mahavira (468 BCE), Mahabharata by Vyasa (400 BCE), Dharma Sutras (~300 BCE)',
      keyFeaturesTe: '16 మహాజనపదాలు, గౌతమ బుద్ధుని నిర్వాణం (483 BCE), మహావీరుడు (468 BCE), వేదవ్యాస మహాభారతం (400 BCE), ధర్మ సూత్రాలు (~300 BCE)',
      whatChangedEn: 'State formation, urbanization & profound spiritual-ethical renaissance',
      whatChangedTe: 'రాజ్యాల ఏర్పాటు, రెండో పట్టణ విప్లవం మరియు తాత్విక-నైతిక విప్లవం'
    },
    {
      id: 'mauryan_empire',
      yearsEn: '322–185 BCE',
      yearsTe: 'క్రీ.పూ. 322–185',
      titleEn: 'Mauryan Empire',
      titleTe: 'మౌర్య సామ్రాజ్యం',
      image: './images/indian_history/grand_overview/epoch_04_mauryan_empire.jpg',
      headerBg: '#2E8B75',
      keyFeaturesEn: "Alexander's invasion (325–25 BCE), Chandragupta & Chanakya (324 BCE), Ashoka reigns (265–232 BCE), Dhamma & administration",
      keyFeaturesTe: 'అలెగ్జాండర్ దండయాత్ర (325–25 BCE), చంద్రగుప్తుడు & చాణక్యుడు (324 BCE), అశోకుని పాలన (265–232 BCE), ధమ్మం & కేంద్రీకృత పరిపాలన',
      whatChangedEn: 'Political unification & organized continental administration',
      whatChangedTe: 'రాజకీయ సమగ్రత మరియు క్రమబద్ధ అఖండ పాలనా వ్యవస్థ'
    },
    {
      id: 'post_mauryan',
      yearsEn: '185 BCE–250 CE',
      yearsTe: 'క్రీ.పూ. 185 – క్రీ.శ. 250',
      titleEn: 'Post-Mauryan & Regional Kingdoms',
      titleTe: 'మౌర్యోత్తర & ప్రాంతీయ రాజ్యాలు',
      image: './images/indian_history/grand_overview/epoch_05_post_mauryan.jpg',
      headerBg: '#337E9E',
      keyFeaturesEn: 'Ramayana written by Valmiki (200 BCE – 200 CE), Shungas, Satavahanas, Indo-Greeks, Kushans, Sangam kingdoms in South',
      keyFeaturesTe: 'వాల్మీకి రామాయణ గ్రంథస్థం (200 BCE – 200 CE), శుంగులు, శాతవాహనులు, ఇండో-గ్రీకులు, కుషాణులు, దక్షిణాన సంగం రాజ్యాలు',
      whatChangedEn: 'Classical epic formalization, cultural exchange with Hellenistic world & regional diversity',
      whatChangedTe: 'ఇతిహాస గ్రంథస్థ ప్రామాణీకరణ, గ్రీకులతో సాంస్కృతిక మార్పిడి మరియు ప్రాంతీయ వైవిధ్యం'
    },
    {
      id: 'gupta_age',
      yearsEn: '320–550 CE',
      yearsTe: 'క్రీ.శ. 320–550',
      titleEn: 'Gupta Age (The Golden Age)',
      titleTe: 'గుప్త యుగం (స్వర్ణయుగం)',
      image: './images/indian_history/grand_overview/epoch_06_gupta_age.jpg',
      headerBg: '#704684',
      keyFeaturesEn: "Gupta dynasty founded (320 CE), science (Aryabhata), literature (Kalidasa), metallurgy, international trade, Hinduism's flourishing",
      keyFeaturesTe: 'గుప్త వంశ స్థాపన (320 CE), విజ్ఞాన శాస్త్రం (ఆర్యభట్ట), కాళిదాస సాహిత్యం, నలంద, లోహశాస్త్రం, హిందూ సంస్కృతి శిఖరాగ్రం',
      whatChangedEn: 'Age of classical Indian culture & scientific zenith',
      whatChangedTe: 'భారతదేశ శాస్త్రీయ సంస్కృతి మరియు విజ్ఞాన స్వర్ణయుగం'
    },
    {
      id: 'early_medieval',
      yearsEn: '600–1200 CE',
      yearsTe: 'క్రీ.శ. 600–1200',
      titleEn: 'Early Medieval Period',
      titleTe: 'తొలి మధ్యయుగ కాలం',
      image: './images/indian_history/grand_overview/epoch_07_early_medieval.jpg',
      headerBg: '#8C4351',
      keyFeaturesEn: 'Regional powers (Harsha, Chalukyas, Cholas, Rashtrakutas), Birth of Adi Shankara (788 CE) & Advaita revival, monumental temples',
      keyFeaturesTe: 'ప్రాంతీయ శక్తులు (హర్షుడు, చాళుక్యులు, చోళులు, రాష్ట్రకూటులు), జగద్గురు ఆది శంకరాచార్యుల జననం (788 CE) & అద్వైత వేదాంతం, ఆలయ శిల్పకళ',
      whatChangedEn: 'Growth of regional identities, temple culture & philosophical revival',
      whatChangedTe: 'ప్రాంతీయ అస్తిత్వాల పెరుగుదల, ఆలయ సంస్కృతి మరియు తాత్విక సమన్వయం'
    },
    {
      id: 'delhi_sultanate',
      yearsEn: '1200–1526 CE',
      yearsTe: 'క్రీ.శ. 1200–1526',
      titleEn: 'Delhi Sultanate',
      titleTe: 'ఢిల్లీ సుల్తానేట్',
      image: './images/indian_history/grand_overview/epoch_08_delhi_sultanate.jpg',
      headerBg: '#B04B46',
      keyFeaturesEn: 'Turkic rule, new admin systems, Indo-Islamic culture begins',
      keyFeaturesTe: 'టర్కిక్ పాలన, సరికొత్త పరిపాలనా పద్ధతులు, ఇండో-ఇస్లామిక్ సంస్కృతి ప్రారంభం',
      whatChangedEn: 'Introduction of Islamic rule in North India',
      whatChangedTe: 'ఉత్తర భారతదేశంలో ఇస్లామిక్ రాజ్య వ్యవస్థల ప్రవేశం'
    },
    {
      id: 'mughal_empire',
      yearsEn: '1526–1857 CE',
      yearsTe: 'క్రీ.శ. 1526–1857',
      titleEn: 'Mughal Empire',
      titleTe: 'మొఘల్ సామ్రాజ్యం',
      image: './images/indian_history/grand_overview/epoch_09_mughal_empire.jpg',
      headerBg: '#8A3232',
      keyFeaturesEn: 'Strong central empire, art, architecture, composite culture',
      keyFeaturesTe: 'బలమైన కేంద్ర సామ్రాజ్యం, తాజ్‌మహల్ వాస్తుశిల్పం, సమన్వయ సంస్కృతి (గంగా-జమునీ)',
      whatChangedEn: 'Cultural synthesis & economic expansion',
      whatChangedTe: 'సాంస్కృతిక సంశ్లేషణ మరియు ప్రపంచ వాణిజ్య విస్తరణ'
    },
    {
      id: 'british_rule',
      yearsEn: '1757–1947 CE',
      yearsTe: 'క్రీ.శ. 1757–1947',
      titleEn: 'British Rule (East India Co. to Raj)',
      titleTe: 'బ్రిటిష్ పాలన (ఈస్టిండియా కంపెనీ - రాజ్)',
      image: './images/indian_history/grand_overview/epoch_10_british_rule.jpg',
      headerBg: '#2E5077',
      keyFeaturesEn: 'Colonial rule, economic exploitation, modern education, reforms & resistance',
      keyFeaturesTe: 'వలస పాలన, ఆర్థిక దోపిడీ, ఆధునిక విద్య, సాంఘిక సంస్కరణలు, స్వాతంత్ర్య పోరాటం',
      whatChangedEn: 'Modern state systems but colonial exploitation',
      whatChangedTe: 'ఆధునిక రాజ్య యంత్రాంగం కానీ తీవ్ర వలసవాద దోపిడీ'
    },
    {
      id: 'independent_india',
      yearsEn: '1947–Present',
      yearsTe: '1947 – ప్రస్తుతం',
      titleEn: 'Independent India',
      titleTe: 'స్వతంత్ర భారతదేశం',
      image: './images/indian_history/grand_overview/epoch_11_independent_india.jpg',
      headerBg: '#3E8357',
      keyFeaturesEn: 'Democracy, Constitution, economic development, social progress',
      keyFeaturesTe: 'ప్రపంచపు అతిపెద్ద ప్రజాస్వామ్యం, సర్వోన్నత రాజ్యాంగం, ఆర్థిక ప్రగతి, సామాజిక వికాసం',
      whatChangedEn: 'Sovereignty & nation-building continues',
      whatChangedTe: 'సార్వభౌమాధికారం మరియు సమగ్ర జాతి పునర్నిర్మాణం'
    }
  ] as TimelineEpoch[],

  // SECTION 2: THE LAND & ITS DIVERSITY
  landAndDiversity: {
    titleEn: 'THE LAND & ITS DIVERSITY',
    titleTe: 'భారత భూభాగం & భౌగోళిక వైవిధ్యం',
    mapImage: './images/indian_history/grand_overview/india_land_map.jpg',
    regions: [
      {
        nameEn: 'HIMALAYAS',
        nameTe: 'హిమాలయాలు',
        descEn: 'Natural barrier & source of perennial rivers',
        descTe: 'సహజ రక్షణ గోడ & జీవనదుల శాశ్వత జన్మస్థలం',
        icon: '🏔️'
      },
      {
        nameEn: 'INDUS-GANGA PLAINS',
        nameTe: 'సింధు-గంగా మైదానాలు',
        descEn: 'Fertile heartland of civilizations & empires',
        descTe: 'నాగరికతలు, మహా సామ్రాజ్యాలు వర్ధిల్లిన సారవంతమైన నేలలు',
        icon: '🌾'
      },
      {
        nameEn: 'THAR DESERT',
        nameTe: 'థార్ ఎడారి',
        descEn: 'Arid west, shaped overland trade & rugged kingdoms',
        descTe: 'శుష్క పశ్చిమ ఎడారి, వర్తక మార్గాలు & వీర రాజ్యాల నిలయం',
        icon: '🏜️'
      },
      {
        nameEn: 'PENINSULAR PLATEAU',
        nameTe: 'ద్వీపకల్ప పీఠభూమి (దక్కన్)',
        descEn: 'Rich in minerals, forests & ancient cultures',
        descTe: 'ఖనిజ సంపద, దట్టమైన అరణ్యాలు & ప్రాచీన సంస్కృతుల గడ్డ',
        icon: '⛰️'
      },
      {
        nameEn: 'COASTLINES',
        nameTe: 'తీరప్రాంతాలు',
        descEn: 'Connected India to the world through maritime trade',
        descTe: 'సముద్ర వాణిజ్యం ద్వారా ప్రపంచాన్ని అనుసంధానించిన తీరరేఖ',
        icon: '⛵'
      }
    ],
    summaryEn: "India's geography created both unity (cultural zones) and diversity (languages, traditions, lifestyles).",
    summaryTe: "భారతదేశ భౌగోళిక విస్తృతి ఒకవైపు సమగ్ర సాంస్కృతిక ఐక్యతను, మరోవైపు విభిన్న భాషలు, సంప్రదాయాలు మరియు జీవన వైవిధ్యాన్ని అందించింది."
  },

  // SECTION 3: THE SOUL OF INDIA: CULTURE, IDEAS & ACHIEVEMENTS
  soulOfIndia: {
    titleEn: 'THE SOUL OF INDIA: CULTURE, IDEAS & ACHIEVEMENTS',
    titleTe: 'భారతీయ ఆత్మ: సంస్కృతి, దర్శనాలు & ఘన విజయాలు',
    quadrants: [
      {
        titleEn: 'SPIRITUAL & PHILOSOPHICAL TRADITIONS',
        titleTe: 'ఆధ్యాత్మిక & తాత్విక దర్శనాలు',
        image: './images/indian_history/grand_overview/soul_traditions.jpg',
        symbols: '🕉️ ☸️ ☬ ✝️ ☪️',
        descEn: 'Hinduism, Buddhism, Jainism, Sikhism and later Islam, Christianity, Zoroastrianism—India embraced, absorbed and harmonized.',
        descTe: 'హిందూ, బౌద్ధ, జైన, సిక్కు మరియు అనంతరం ఇస్లాం, క్రైస్తవ, జొరాస్ట్రియన్ ధర్మాలు—భారతం ప్రతి భావననూ హృదయపూర్వకంగా స్వీకరించి సమన్వయపరిచింది.'
      },
      {
        titleEn: 'LANGUAGES & LITERATURE',
        titleTe: 'భాషలు & మహోన్నత సాహిత్యం',
        image: './images/indian_history/grand_overview/soul_literature.jpg',
        symbols: '📜 ✍️ 📚',
        descEn: 'Sanskrit, Pali, Prakrit, Tamil classical literature, Persian, Urdu, regional languages rich in poetry, epics, philosophy & stories.',
        descTe: 'సంస్కృతం, పాళీ, ప్రాకృతం, తమిళం, పర్షియన్, ఉర్దూ మరియు భారతీయ ప్రాంతీయ భాషల్లో రచించబడిన రామాయణ, మహాభారత కావ్యాలు, తత్వాలు.'
      },
      {
        titleEn: 'ART, ARCHITECTURE & SCIENCE',
        titleTe: 'కళలు, వాస్తుశిల్పం & విజ్ఞాన శాస్త్రం',
        image: './images/indian_history/grand_overview/soul_architecture.jpg',
        symbols: '🏛️ 🔭 📐',
        descEn: 'From Harappan seals to Ajanta caves, Khajuraho temples, Taj Mahal, Indian mathematics (Zero, Decimal), ayurveda, astronomy & metallurgy.',
        descTe: 'సింధు ముద్రికల నుండి అజంతా గుహలు, ఖజురహో, తాజ్‌మహల్, భారతీయ గణితం (సున్నా, దశాంశం), ఆయుర్వేదం, ఖగోళం మరియు తుప్పుపట్టని ఉక్కు లోహశాస్త్రం.'
      },
      {
        titleEn: 'SOCIETY & VALUES',
        titleTe: 'సమాజం & శాశ్వత విలువలు',
        image: './images/indian_history/grand_overview/soul_society.jpg',
        symbols: '🤝 🧘 ⚖️',
        descEn: 'Family, respect for elders, duty (dharma), ahimsa (non-violence), truth, compassion, seva (service)—timeless values at the core.',
        descTe: 'కుటుంబ వ్యవస్థ, పెద్దల గౌరవం, ధర్మం, అహింస, సత్యం, కరుణ, నిస్వార్థ సేవ—యుగయుగాలుగా భారతీయ జీవితాన్ని నడిపించే ప్రాథమిక మూల సూత్రాలు.'
      }
    ],
    powers: [
      {
        titleEn: 'Trade & Economy',
        titleTe: 'వాణిజ్యం & ఆర్థికం',
        descEn: 'From Indus trade with Mesopotamia to spice trade, Silk Route & Indian Ocean networks.',
        descTe: 'సింధు మెసపటోమియా వాణిజ్యం నుండి సుగంధ ద్రవ్యాల సముద్ర మార్గం, సిల్క్ రూట్ నెట్‌వర్క్.',
        icon: '⛵'
      },
      {
        titleEn: 'Agriculture',
        titleTe: 'వ్యవసాయం & నీటిపారుదల',
        descEn: 'Monsoon-based farming, river valleys & irrigation built settlements & prosperity.',
        descTe: 'ఋతుపవన వ్యవసాయం, నదీ లోయలు మరియు కాలువలు అందించిన శాశ్వత సుభిక్షం.',
        icon: '🌾'
      },
      {
        titleEn: 'Ideas & Faiths',
        titleTe: 'భావజాలాలు & విశ్వాసాలు',
        descEn: 'New ideas traveled freely—Buddhism to Asia, knowledge across continents.',
        descTe: 'విజ్ఞానం ఖండాతరాలకు పయనించింది—ఆసియా అంతటా బౌద్ధం, గణిత తత్వాలు విస్తరణ.',
        icon: '💡'
      },
      {
        titleEn: 'Conquests & Migrations',
        titleTe: 'వలసలు & సమన్వయం',
        descEn: 'Persians, Greeks, Scythians, Huns, Turks, Mughals, Europeans—each left a mark.',
        descTe: 'పర్షియన్లు, గ్రీకులు, శకులు, హూణులు, టర్కులు, మొఘలులు, యూరోపియన్ల ప్రభావాల సమ్మిళితం.',
        icon: '⚔️'
      },
      {
        titleEn: 'Resistance & Resilience',
        titleTe: 'ప్రతిఘటన & పోరాటం',
        descEn: 'People of India repeatedly united to protect their land, culture & freedom.',
        descTe: 'స్వదేశం, సంస్కృతి, స్వేచ్ఛ పరిరక్షణ కోసం భారతీయులు ప్రదర్శించిన అపురూప సమైక్యత.',
        icon: '🛡️'
      }
    ]
  },

  // SECTION 4: THE ROAD TO INDEPENDENCE (1757–1947)
  roadToIndependence: [
    {
      year: '1757',
      titleEn: 'Battle of Plassey',
      titleTe: 'ప్లాసీ యుద్ధం',
      detailEn: 'British East India Company gains political power in Bengal.',
      detailTe: 'ఈస్టిండియా కంపెనీ బెంగాల్‌లో రాజకీయ ఆధిపత్యాన్ని హస్తగతం చేసుకుంది.',
      icon: '⚔️'
    },
    {
      year: '1857',
      titleEn: 'First War of Independence',
      titleTe: 'ప్రథమ స్వాతంత్ర్య సంగ్రామం',
      detailEn: 'Sepoy uprising spreads across North India.',
      detailTe: 'సిపాయిల తిరుగుబాటు ఉత్తర భారతదేశం అంతటా జాతీయ సంగ్రామంగా వ్యాపించింది.',
      icon: '🔥'
    },
    {
      year: '1885',
      titleEn: 'Indian National Congress formed',
      titleTe: 'భారత జాతీయ కాంగ్రెస్ ఆవిర్భావం',
      detailEn: 'Platform for political dialogue & reforms.',
      detailTe: 'జాతీయ స్థాయిలో రాజకీయ చర్చలు మరియు సంస్కరణల కోసం మొదటి వేదిక.',
      icon: '🤝'
    },
    {
      year: '1905',
      titleEn: 'Partition of Bengal',
      titleTe: 'బెంగాల్ విభజన',
      detailEn: 'Triggers Swadeshi movement & boycott of British goods.',
      detailTe: 'స్వదేశీ ఉద్యమం మరియు విదేశీ వస్తువుల బహిష్కరణకు నాంది పలికింది.',
      icon: '☸️'
    },
    {
      year: '1919',
      titleEn: 'Jallianwala Bagh Massacre',
      titleTe: 'జలియన్‌వాలా బాగ్ మారణకాండ',
      detailEn: 'Turning point in freedom struggle.',
      detailTe: 'స్వాతంత్ర్య ఉద్యమాన్ని తీవ్రతరం చేసిన అత్యంత బాధాకరమైన కీలక మలుపు.',
      icon: '🩸'
    },
    {
      year: '1920–22',
      titleEn: 'Non-Cooperation Movement',
      titleTe: 'సహాయ నిరాకరణ ఉద్యమం',
      detailEn: 'Led by Mahatma Gandhi.',
      detailTe: 'మహాత్మా గాంధీ నేతృత్వంలో దేశవ్యాప్త శాంతియుత ప్రజా ఉద్యమం.',
      icon: '🚶'
    },
    {
      year: '1930',
      titleEn: 'Civil Disobedience Movement',
      titleTe: 'శాసనోల్లంఘన ఉద్యమం',
      detailEn: 'Salt March to Dandi.',
      detailTe: 'గాంధీజీ చారిత్రక దండి ఉప్పు సత్యాగ్రహం.',
      icon: '🧂'
    },
    {
      year: '1942',
      titleEn: 'Quit India Movement',
      titleTe: 'క్విట్ ఇండియా ఉద్యమం',
      detailEn: '"Do or Die" call for complete freedom.',
      detailTe: '"డూ ఆర్ డై (సాధించండి లేదా మరణించండి)" పిలుపుతో తుది పోరాటం.',
      icon: '✊'
    },
    {
      year: '1947',
      titleEn: 'Independence & Partition',
      titleTe: 'స్వాతంత్ర్యం & దేశ విభజన',
      detailEn: '15 August — India becomes free, but Partition brings pain.',
      detailTe: '1947 ఆగస్టు 15న దేశానికి స్వాతంత్ర్యం సిద్ధించింది; విభజన తీవ్ర వేదన మిగిల్చింది.',
      icon: '🇮🇳'
    }
  ] as IndependenceMilestone[],

  // SECTION 5: DID YOU KNOW?
  didYouKnow: {
    titleEn: 'DID YOU KNOW?',
    titleTe: 'మీకు తెలుసా?',
    facts: [
      {
        factEn: 'India is one of the world\'s oldest continuous civilizations.',
        factTe: 'భారతదేశం ప్రపంచంలోనే అత్యంత పురాతన అవిచ్ఛిన్న నిరంతర నాగరికత.'
      },
      {
        factEn: 'The decimal system, zero, yoga, chess, ayurveda originated in India.',
        factTe: 'దశాంశ పద్ధతి, సున్నా, యోగా, చదరంగం, ఆయుర్వేదం భారతదేశంలోనే పుట్టాయి.'
      },
      {
        factEn: 'Nalanda University (5th century) was one of the world\'s first residential universities.',
        factTe: '5వ శతాబ్దానికి చెందిన నలంద విశ్వవిద్యాలయం ప్రపంచపు మొట్టమొదటి రెసిడెన్షియల్ యూనివర్సిటీలలో ఒకటి.'
      },
      {
        factEn: 'India has 22 officially recognized languages & hundreds of dialects.',
        factTe: 'భారతదేశంలో 22 అధికారిక గుర్తింపు పొందిన భాషలు మరియు వందలాది జీవద్భాషలు/మాండలికాలు ఉన్నాయి.'
      }
    ]
  },

  // SECTION 6: FREEDOM FIGHTERS WHO INSPIRED A NATION
  freedomFighters: {
    titleEn: 'FREEDOM FIGHTERS WHO INSPIRED A NATION',
    titleTe: 'దేశానికి స్ఫూర్తినిచ్చిన స్వాతంత్ర్య సమరయోధులు',
    bannerImage: './images/indian_history/grand_overview/freedom_fighters_banner.jpg',
    quoteEn: 'They came from different backgrounds, but dreamed of one India—free, just & equal.',
    quoteTe: 'వారు విభిన్న ప్రాంతాలు, నేపథ్యాల నుండి వచ్చారు, కానీ స్వేచ్ఛాయుత, న్యాయబద్ధమైన సమగ్ర భారతదేశాన్ని స్వప్నించారు.',
    fighters: [
      {
        id: 'gandhi',
        nameEn: 'Mahatma Gandhi',
        nameTe: 'మహాత్మా గాంధీ',
        roleEn: 'Father of the Nation (Truth & Non-Violence)',
        roleTe: 'జాతిపిత (సత్యం & అహింసా మార్గం)',
        image: './images/indian_history/grand_overview/fighter_gandhi.jpg'
      },
      {
        id: 'bose',
        nameEn: 'Subhas Chandra Bose',
        nameTe: 'సుభాష్ చంద్రబోస్',
        roleEn: 'Netaji (Indian National Army - Azad Hind Fauj)',
        roleTe: 'నేతాజీ (ఆజాద్ హింద్ ఫౌజ్ సైన్యం)',
        image: './images/indian_history/grand_overview/fighter_bose.jpg'
      },
      {
        id: 'bhagat_singh',
        nameEn: 'Bhagat Singh',
        nameTe: 'భగత్ సింగ్',
        roleEn: 'Shaheed-e-Azam (Courage & Revolutionary Spirit)',
        roleTe: 'షహీద్-ఎ-ఆజమ్ (విప్లవ స్ఫూర్తి & ఆత్మబలిదానం)',
        image: './images/indian_history/grand_overview/fighter_bhagat_singh.jpg'
      },
      {
        id: 'patel',
        nameEn: 'Sardar Vallabhbhai Patel',
        nameTe: 'సర్దార్ వల్లభభాయ్ పటేల్',
        roleEn: 'Iron Man of India (Integration of 565 Princely States)',
        roleTe: 'భారత ఉక్కు మనిషి (565 సంస్థానాల విలీనం)',
        image: './images/indian_history/grand_overview/fighter_patel.jpg'
      },
      {
        id: 'sarojini_naidu',
        nameEn: 'Sarojini Naidu',
        nameTe: 'సరోజినీ నాయుడు',
        roleEn: 'Nightingale of India (Poet, Freedom Fighter & Governor)',
        roleTe: 'భారత కోకిల (కవయిత్రి, ఉద్యమ నాయకురాలు)',
        image: './images/indian_history/grand_overview/fighter_sarojini_naidu.jpg'
      },
      {
        id: 'ambedkar',
        nameEn: 'B. R. Ambedkar',
        nameTe: 'డా. బి. ఆర్. అంబేద్కర్',
        roleEn: 'Architect of Indian Constitution & Social Justice Pioneer',
        roleTe: 'భారత రాజ్యాంగ నిర్మాత & సామాజిక న్యాయ ప్రదాత',
        image: './images/indian_history/grand_overview/fighter_ambedkar.jpg'
      }
    ] as FreedomFighter[]
  },

  // SECTION 7: MODERN INDIA: THE JOURNEY CONTINUES
  modernIndia: {
    titleEn: 'MODERN INDIA: THE JOURNEY CONTINUES',
    titleTe: 'ఆధునిక భారతదేశం: ప్రగతి ప్రస్థానం కొనసాగుతోంది',
    points: [
      { titleEn: "World's Largest Democracy", titleTe: 'ప్రపంచపు అతిపెద్ద ప్రజాస్వామ్యం', icon: '🗳️' },
      { titleEn: 'Diverse, Young & Dynamic Population', titleTe: 'వైవిధ్యభరిత, యువ & శక్తిమంతమైన మానవ వనరులు', icon: '👥' },
      { titleEn: 'Growing Economy & Global Influence', titleTe: 'వేగంగా ఎదుగుతున్న ఆర్థిక వ్యవస్థ & ప్రపంచ నాయకత్వం', icon: '📈' },
      { titleEn: 'Challenges: Poverty, Education, Environment, Unity', titleTe: 'ఎదుర్కొంటున్న సవాళ్లు: విద్య, పర్యావరణం, సమగ్ర ఐక్యత', icon: '🌱' },
      { titleEn: 'Vision: Viksit Bharat (Developed India by 2047)', titleTe: 'లక్ష్యం: వికసిత్ భారత్ (2047 నాటికి అభివృద్ధి చెందిన దేశం)', icon: '🇮🇳' }
    ]
  }
};
