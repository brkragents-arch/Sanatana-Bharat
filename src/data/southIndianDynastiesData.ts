export interface PallavaRuler {
  nameEn: string;
  nameTe: string;
  reignEn: string;
  reignTe: string;
  highlightsEn: string;
  highlightsTe: string;
  portrait: string;
}

export interface CholaRuler {
  nameEn: string;
  nameTe: string;
  reignEn: string;
  reignTe: string;
  highlightsEn: string[];
  highlightsTe: string[];
  portrait: string;
}

export interface DynastyMonument {
  nameEn: string;
  nameTe: string;
  locationEn: string;
  locationTe: string;
  builderEn?: string;
  builderTe?: string;
  descriptionEn: string;
  descriptionTe: string;
  image: string;
}

export interface PallavaDynastyData {
  titleEn: string;
  titleTe: string;
  taglineEn: string;
  taglineTe: string;
  periodEn: string;
  periodTe: string;
  regionEn: string;
  regionTe: string;
  capitalEn: string;
  capitalTe: string;
  contemporariesEn: string;
  contemporariesTe: string;
  knownForEn: string[];
  knownForTe: string[];
  quoteEn: string;
  quoteTe: string;
  quoteAuthorEn: string;
  quoteAuthorTe: string;
  mapImage: string;
  headerSculptureImage: string;
  shoreTempleHeaderImage: string;
  lionSculptureImage: string;
  rulers: PallavaRuler[];
  architecturalContributionsEn: string[];
  architecturalContributionsTe: string[];
  monuments: DynastyMonument[];
  cultureAndLiteratureEn: string[];
  cultureAndLiteratureTe: string[];
  declineEn: string[];
  declineTe: string[];
  legacyEn: string[];
  legacyTe: string[];
  declineImage: string;
  legacyImage: string;
}

export interface CholaDynastyData {
  titleEn: string;
  titleTe: string;
  taglineEn: string;
  taglineTe: string;
  periodEn: string;
  periodTe: string;
  overviewEn: string;
  overviewTe: string;
  tigerBannerImage: string;
  brihadisvaraHeaderImage: string;
  natarajaImage: string;
  navalShipImage: string;
  maritimeMapImage: string;
  riseOfCholasEn: {
    founderEn: string;
    founderTe: string;
    captureThanjavurEn: string;
    captureThanjavurTe: string;
    rulersSummaryEn: string[];
    rulersSummaryTe: string[];
  };
  rulers: CholaRuler[];
  administrationHierarchy: {
    levelEn: string;
    levelTe: string;
    descriptionEn: string;
    descriptionTe: string;
  }[];
  localSelfGovernment: {
    titleEn: string;
    titleTe: string;
    inscriptionsEn: string;
    inscriptionsTe: string;
    assemblies: {
      nameEn: string;
      nameTe: string;
      descriptionEn: string;
      descriptionTe: string;
      icon: string;
    }[];
    kudavolaiEn: string;
    kudavolaiTe: string;
  };
  economyAndTradeEn: string[];
  economyAndTradeTe: string[];
  artAndArchitectureEn: string[];
  artAndArchitectureTe: string[];
  greatTemples: DynastyMonument[];
  keyPointsEn: string[];
  keyPointsTe: string[];
}

export const PALLAVA_DYNASTY_DATA: PallavaDynastyData = {
  titleEn: 'Pallava Dynasty',
  titleTe: 'పల్లవ రాజవంశము',
  taglineEn: 'Builders of a Glorious South India',
  taglineTe: 'మహోన్నత దక్షిణ భారత రథసారథులు',
  periodEn: 'c. 275 CE – 897 CE',
  periodTe: 'క్రీ.శ. 275 – 897',
  regionEn: 'Northern Tamil Nadu and parts of Andhra Pradesh',
  regionTe: 'ఉత్తర తమిళనాడు మరియు ఆంధ్రప్రదేశ్‌లోని కొన్ని తీర ప్రాంతాలు',
  capitalEn: 'Kanchipuram (major capital) & Mamallapuram (port)',
  capitalTe: 'కాంచీపురం (ప్రధాన రాజధాని) & మహాబలిపురం (రేవు పట్టణం)',
  contemporariesEn: 'Badami Chalukyas, Pandyas and early Rashtrakutas',
  contemporariesTe: 'బాదామి చాళుక్యులు, పాండ్యులు మరియు తొలి రాష్ట్రకూటులు',
  knownForEn: [
    'Pioneers of Dravidian rock-cut and structural architecture',
    'UNESCO World Heritage Monuments of Mamallapuram (Mahabalipuram)',
    'Flourishing of Sanskrit & Tamil literature (Dandin, Bharavi)',
    'Extensive maritime trade connecting South India to Southeast Asia'
  ],
  knownForTe: [
    'ద్రావిడ రాతి గుహాలయాలు మరియు ఏకశిలా రథాల ఆవిష్కర్తలు',
    'యునెస్కో ప్రపంచ వారసత్వ సంపద మహాబలిపురం శిల్పకళా సంపద',
    'సంస్కృత, తమిళ సాహిత్యాల మహోన్నత పోషణ (దండి, భారవి వంటి మహాకవులు)',
    'ఆగ్నేయాసియా దేశాలతో విస్తారమైన సముద్ర వాణిజ్య సంబంధాలు'
  ],
  quoteEn: '“In stone, they created an eternal legacy. The Pallavas turned stone into poetry.”',
  quoteTe: '“రాతిలో వారు శాశ్వత వారసత్వాన్ని సృష్టించారు. పల్లవులు శిలను సైతం కావ్యంగా మలిచారు.”',
  quoteAuthorEn: 'Art Historians on Pallava Architecture',
  quoteAuthorTe: 'పల్లవ శిల్పకళపై చరిత్రకారుల ప్రశంస',
  mapImage: './images/indian_history/south_indian_dynasties/pallava_map.jpg',
  headerSculptureImage: './images/indian_history/south_indian_dynasties/pallava_royal_sculpture.jpg',
  shoreTempleHeaderImage: './images/indian_history/south_indian_dynasties/pallava_shore_temple_header.jpg',
  lionSculptureImage: './images/indian_history/south_indian_dynasties/pallava_stone_lion.jpg',
  rulers: [
    {
      nameEn: 'Simhavishnu',
      nameTe: 'సింహవిష్ణువు',
      reignEn: 'c. 575 – 600 CE',
      reignTe: 'క్రీ.శ. 575 – 600',
      highlightsEn: 'Revived Pallava imperial power, conquered the Chola territory, and initiated the golden phase of the dynasty.',
      highlightsTe: 'పల్లవ సామ్రాజ్య శక్తిని పునరుద్ధరించి, చోళ భూభాగాలను జయించి వంశ వైభవానికి బలమైన పునాది వేశాడు.',
      portrait: './images/indian_history/south_indian_dynasties/ruler_pallava_simhavishnu.jpg'
    },
    {
      nameEn: 'Mahendravarman I',
      nameTe: 'మహేంద్రవర్మ I',
      reignEn: 'c. 600 – 630 CE',
      reignTe: 'క్రీ.శ. 600 – 630',
      highlightsEn: 'Pioneered rock-cut cave temples ("Vichitrachitta"), accomplished scholar, poet, musician, and author of Mattavilasa Prahasana.',
      highlightsTe: 'రాతిని తొలిచే గుహాలయ వాస్తుకు ఆద్యుడు ("విచిత్రచిత్త"), గొప్ప కవి, సంగీతజ్ఞుడు మరియు మత్తవిలాస ప్రహసన నాటక రచయిత.',
      portrait: './images/indian_history/south_indian_dynasties/ruler_pallava_mahendravarman.jpg'
    },
    {
      nameEn: 'Narasimhavarman I (Mamalla)',
      nameTe: 'నరసింహవర్మ I (మామల్ల)',
      reignEn: 'c. 630 – 668 CE',
      reignTe: 'క్రీ.శ. 630 – 668',
      highlightsEn: 'Defeated Chalukya Pulakeshin II (assumed title "Vatapikonda"), built Mamallapuram port and the famous monolithic Pancha Rathas.',
      highlightsTe: 'బాదామి చాళుక్య పులకేశి II ని ఓడించి "వాతాపికొండ" బిరుదు పొందాడు; మహాబలిపుర నగర స్థాపకుడు మరియు పంచ రథాల నిర్మాత.',
      portrait: './images/indian_history/south_indian_dynasties/ruler_pallava_narasimhavarman_mamalla.jpg'
    },
    {
      nameEn: 'Narasimhavarman II (Rajasimha)',
      nameTe: 'నరసింహవర్మ II (రాజసింహ)',
      reignEn: 'c. 690 – 728 CE',
      reignTe: 'క్రీ.శ. 690 – 728',
      highlightsEn: 'Ushered in an era of peace and built the iconic Kailasanatha Temple at Kanchipuram and the Shore Temple at Mamallapuram.',
      highlightsTe: 'శాంతియుత స్వర్ణయుగాన్ని నెలకొల్పి కాంచీపుర కైలాసనాథ ఆలయం మరియు మహాబలిపురం తీర దేవాలయం (Shore Temple) నిర్మించాడు.',
      portrait: './images/indian_history/south_indian_dynasties/ruler_pallava_narasimhavarman_rajasimha.jpg'
    },
    {
      nameEn: 'Nandivarman II (Pallavamalla)',
      nameTe: 'నందివర్మ II (పల్లవమల్ల)',
      reignEn: 'c. 731 – 796 CE',
      reignTe: 'క్రీ.శ. 731 – 796',
      highlightsEn: 'Strengthened the kingdom, built the Vaikunta Perumal Temple at Kanchi, and was a great patron of Vaishnava Alvar saint Tirumangai.',
      highlightsTe: 'సామ్రాజ్యాన్ని పటిష్టపరచి కాంచీపురంలో వైకుంఠ పెరుమాళ్ ఆలయాన్ని నిర్మించాడు; తిరుమంగై ఆళ్వార్ వంటి భక్తులను ఆదరించాడు.',
      portrait: './images/indian_history/south_indian_dynasties/ruler_pallava_nandivarman.jpg'
    }
  ],
  architecturalContributionsEn: [
    'Pioneers of Dravidian temple architecture, transitioning from rock-cut cave shrines to freestanding structural stone temples.',
    'Introduced monolithic rock-cut shrines (Pancha Rathas at Mamallapuram), carved out of single granite boulders.',
    'Sculpted colossal open-air bas-reliefs, celebrated globally for dynamic naturalistic animal and human figures.',
    'Built the Kailasanatha Temple at Kanchipuram, the earliest mature structural sandstone temple in Tamil Nadu.',
    'Pioneered distinctive lion-based pillars (Yali capitals) that became a hallmark of South Indian temple design.'
  ],
  architecturalContributionsTe: [
    'ద్రావిడ ఆలయ వాస్తుశిల్పానికి ఆద్యులు; రాతి గుహాలయాల నుండి స్వతంత్ర రాతి నిర్మాణ దేవాలయాల రూపకల్పన వరకు మార్గదర్శనం చేశారు.',
    'ఏకశిలా గ్రానైట్ బండల నుండి చెక్కబడిన అద్భుత రథాలయాలు (మహాబలిపురంలోని పంచ రథాలు) నిర్మించారు.',
    'ప్రపంచంలోనే అతిపెద్ద బహిరంగ రాతి శిల్ప ఫలకాలను జీవకళ ఉట్టిపడే జంతువులు, దేవతా మూర్తులతో చెక్కించారు.',
    'కాంచీపురంలో సంపూర్ణ ఇసుకరాయితో నిర్మితమైన తొలి మహా కట్టడం కైలాసనాథ ఆలయాన్ని సృష్టించారు.',
    'స్తంభాల కింద నిలబడిన గంభీరమైన సింహాల (యాళి) శిల్పకళను ప్రవేశపెట్టారు, ఇది దక్షిణ భారత ఆలయాల ప్రధాన చిహ్నంగా మారింది.'
  ],
  monuments: [
    {
      nameEn: 'Shore Temple',
      nameTe: 'తీర దేవాలయం (షోర్ టెంపుల్)',
      locationEn: 'Mamallapuram (Mahabalipuram)',
      locationTe: 'మహాబలిపురం',
      builderEn: 'Narasimhavarman II (Rajasimha)',
      builderTe: 'నరసింహవర్మ II (రాజసింహుడు)',
      descriptionEn: 'A UNESCO World Heritage Site; built right on the shore of the Bay of Bengal, an iconic pinnacle of early structural stone temples with dual spires dedicated to Shiva and Vishnu.',
      descriptionTe: 'యునెస్కో ప్రపంచ వారసత్వ సంపద; బంగాళాఖాత సముద్ర తీరాన నిర్మితమైన తొలి రాతి ఆలయం, శివుడు మరియు అనంతశయన విష్ణువు కొలువైన రెండు గోపురాల అద్భుత సముదాయం.',
      image: './images/indian_history/south_indian_dynasties/monument_shore_temple.jpg'
    },
    {
      nameEn: "Arjuna's Penance / Descent of the Ganges",
      nameTe: 'అర్జునుని తపస్సు / గంగావతరణం',
      locationEn: 'Mamallapuram',
      locationTe: 'మహాబలిపురం',
      builderEn: 'Narasimhavarman I (Mamalla)',
      builderTe: 'నరసింహవర్మ I (మామల్ల)',
      descriptionEn: 'One of the largest open-air rock reliefs in the world (96 x 43 ft); carved across two massive boulders depicting the descent of river Ganga, with celestial beings, yogis, and life-sized elephants.',
      descriptionTe: 'ప్రపంచంలోనే అతిపెద్ద బహిరంగ రాతి శిల్పకళా ఫలకం (96 x 43 అడుగులు); ఆకాశం నుండి గంగ దిగివచ్చే దృశ్యం, సిద్ధులు, గంధర్వులు మరియు సహజ పరిమాణపు ఏనుగుల సమూహం ఇందులో అద్భుతంగా చెక్కబడ్డాయి.',
      image: './images/indian_history/south_indian_dynasties/monument_arjunas_penance.jpg'
    },
    {
      nameEn: 'Varaha Cave Temple',
      nameTe: 'వరాహ గుహాలయము',
      locationEn: 'Mamallapuram',
      locationTe: 'మహాబలిపురం',
      builderEn: 'Mahendravarman I & Mamalla',
      builderTe: 'మహేంద్రవర్మ I & మామల్ల',
      descriptionEn: 'Rock-cut mandapa famous for exquisite high-relief sculptures, notably Lord Varaha lifting Bhudevi out of the cosmic ocean and Trivikrama stepping across the universe.',
      descriptionTe: 'భూదేవిని రక్షించి సముద్రం నుండి పైకెత్తే వరాహస్వామి మరియు విశ్వరూప త్రివిక్రమ అవతారాల అపురూప శిల్పాలకు ప్రసిద్ధి చెందిన రాతి తొలిచిన గుహాలయం.',
      image: './images/indian_history/south_indian_dynasties/monument_varaha_cave.jpg'
    },
    {
      nameEn: 'Kailasanatha Temple',
      nameTe: 'కైలాసనాథ దేవాలయము',
      locationEn: 'Kanchipuram',
      locationTe: 'కాంచీపురం',
      builderEn: 'Narasimhavarman II (Rajasimha)',
      builderTe: 'నరసింహవర్మ II (రాజసింహుడు)',
      descriptionEn: 'The oldest surviving structural temple in Kanchipuram, renowned for its pyramidal vimana, 58 sub-shrines adorned with Somaskanda murals, and intricate sandstone carvings.',
      descriptionTe: 'కాంచీపురంలోని అత్యంత ప్రాచీన రాతి దేవాలయం; పిరమిడ్ ఆకారపు విమాన గోపురం, 58 ఉపాలయాలు మరియు సోమస్కంద శిల్పాలతో అలరారే శైవ క్షేత్రం.',
      image: './images/indian_history/south_indian_dynasties/monument_kailasanatha.jpg'
    }
  ],
  cultureAndLiteratureEn: [
    'Patrons of Hinduism (Shaivism and Vaishnavism); the Bhakti movement blossomed with Shaivite Nayanars and Vaishnavite Alvars.',
    'Also patronized Jainism and Buddhism; Kanchipuram was home to Buddhist monasteries and renowned philosophers like Dharmapala.',
    'Royal court patronized Sanskrit literature (Dandin wrote Kavyadarsha; King Mahendravarman composed Mattavilasa Prahasana).',
    'Developed Grantha and Pallava scripts, which were carried across the sea and served as the direct root for Southeast Asian scripts (Khmer, Thai, Javanese, Balinese).',
    'Advanced South Indian music, architecture treatises, and dance as recorded in the Kudumiyanmalai rock musical inscription.'
  ],
  cultureAndLiteratureTe: [
    'హిందూ ధర్మ పోషకులు (శైవం మరియు వైష్ణవం); నయనార్లు మరియు ఆళ్వార్ల భక్తి ఉద్యమం పల్లవ కాలంలో దక్షిణాన విప్లవాత్మకంగా విస్తరించింది.',
    'జైన మరియు బౌద్ధ మతాలను కూడా ఆదరించారు; కాంచీపురం బౌద్ధ విద్యా కేంద్రంగా ఉండి ధర్మపాలుడు వంటి మేధావులను తీర్చిదిద్దింది.',
    'సంస్కృత సాహిత్యాన్ని విశేషంగా ప్రోత్సహించారు (మహాకవి దండి "కావ్యదర్శనం", మహేంద్రవర్మ "మత్తవిలాస ప్రహసనం" రచించారు).',
    'గ్రంథ లిపి మరియు పల్లవ లిపిని అభివృద్ధి చేశారు; ఇది సముద్రం దాటి ఆగ్నేయాసియా లిపులకు (థాయ్, ఖ్మేర్, జావానీస్, బాలి) మాతృకగా నిలిచింది.',
    'కుడుమియాన్‌మలై సంగీత శాసనంలో నమోదు చేయబడిన విధంగా శాస్త్రీయ సంగీత, నృత్య రీతులకు ప్రాణం పోశారు.'
  ],
  declineEn: [
    'Pallava supremacy weakened during the 9th century due to relentless two-front wars with the Pandyas in the south and Western Gangas/Rashtrakutas.',
    'Rising internal dynastic succession conflicts and revolts by feudatory chieftains eroded central authority.',
    'In c. 897 CE, the rising Imperial Chola ruler Aditya I defeated the last Pallava king Aparajita in battle, annexing Tondaimandalam and bringing the dynasty to an end.'
  ],
  declineTe: [
    '9వ శతాబ్దంలో దక్షిణాన పాండ్యులతో, పశ్చిమాన రాష్ట్రకూటులతో నిరంతరం జరిగిన యుద్ధాల వల్ల పల్లవ సైనిక శక్తి బలహీనపడింది.',
    'రాచరిక వారసత్వ పోరాటాలు మరియు సామంతుల తిరుగుబాట్లు కేంద్రీకృత పరిపాలనను దెబ్బతీశాయి.',
    'క్రీ.శ. 897 లో నవ చోళ శక్తి ఆదిత్య I ఆఖరి పల్లవ రాజు అపరాజితను యుద్ధంలో ఓడించి తొండైమండలాన్ని చోళ సామ్రాజ్యంలో విలీనం చేయడంతో పల్లవ పాలన ముగిసింది.'
  ],
  legacyEn: [
    'Laid the permanent structural and aesthetic foundations of the mature Dravidian style of temple architecture.',
    'Deeply inspired the great Imperial Chola architecture, including the world-famous Big Temple at Thanjavur.',
    'Monuments of Mamallapuram stand as a globally cherished UNESCO World Heritage Site.',
    'Remembered as South India’s greatest early visionary patrons of stone art, divine devotion, and maritime civilizational reach.'
  ],
  legacyTe: [
    'ద్రావిడ ఆలయ శిల్పకళకు శాశ్వత రూపకల్పన చేసి తరువాతి తరాలకు మార్గదర్శకత్వం వహించారు.',
    'తంజావూరు బృహదీశ్వరాలయం వంటి చోళుల మహోన్నత ఆలయ నిర్మాణాలకు పల్లవ వాస్తుశైలియే అసలైన పునాది.',
    'మహాబలిపురంలోని వీరి కట్టడాలు నేడు యావత్ ప్రపంచం గర్వించే యునెస్కో ప్రపంచ వారసత్వ సంపదగా వెలుగొందుతున్నాయి.',
    'శిలలో ప్రాణం పోసి, భక్తి విజ్ఞానాలను ఆగ్నేయాసియా వరకు వ్యాపింపజేసిన దక్షిణ భారత సంస్కృతికి శాశ్వత ప్రతీకలు.'
  ],
  declineImage: './images/indian_history/south_indian_dynasties/pallava_warrior_relief.jpg',
  legacyImage: './images/indian_history/south_indian_dynasties/pallava_pancha_rathas.jpg'
};

export const CHOLA_DYNASTY_DATA: CholaDynastyData = {
  titleEn: 'Chola Dynasty',
  titleTe: 'మహోన్నత చోళ సామ్రాజ్యము',
  taglineEn: 'The Architects of a Golden South',
  taglineTe: 'స్వర్ణ దక్షిణ భారత శిల్పులు',
  periodEn: '9th – 13th Century CE',
  periodTe: 'క్రీ.శ. 9వ – 13వ శతాబ్దము',
  overviewEn: 'The Cholas were one of the longest-ruling and most powerful South Indian dynasties, world-renowned for their revolutionary democratic village administration, colossal granite temples, invincible maritime navy, and thriving Indian Ocean trade.',
  overviewTe: 'చోళులు దక్షిణ భారతదేశ చరిత్రలోనే అత్యంత శక్తివంతమైన, దీర్ఘకాలిక సామ్రాజ్యాలలో అగ్రగణ్యులు. వారి విప్లవాత్మక గ్రామ స్వపరిపాలన (కుడవోలై), అద్భుత గ్రానైట్ దేవాలయాలు, తిరుగులేని సముద్ర నౌకాదళం మరియు ఆగ్నేయాసియా వాణిజ్య వైభవంతో ప్రపంచ ప్రసిద్ధి చెందారు.',
  tigerBannerImage: './images/indian_history/south_indian_dynasties/chola_tiger_banner.jpg',
  brihadisvaraHeaderImage: './images/indian_history/south_indian_dynasties/chola_brihadisvara_header.jpg',
  natarajaImage: './images/indian_history/south_indian_dynasties/chola_nataraja_bronze.jpg',
  navalShipImage: './images/indian_history/south_indian_dynasties/chola_naval_ship.jpg',
  maritimeMapImage: './images/indian_history/south_indian_dynasties/chola_maritime_trade_map.jpg',
  riseOfCholasEn: {
    founderEn: 'Imperial Chola dynasty was established by Vijayalaya Chola in the 9th century.',
    founderTe: '9వ శతాబ్దంలో విజయాలయ చోళుడు పల్లవులను, పాండ్యులను నిలువరించి సామ్రాజ్య పునరుజ్జీవనం చేశాడు.',
    captureThanjavurEn: 'He captured Thanjavur around 850 CE from the Muttaraiyars and established it as the glorious capital.',
    captureThanjavurTe: 'క్రీ.శ. 850 ప్రాంతంలో ముత్తరైయర్ల నుండి తంజావూరును స్వాధీనం చేసుకుని చోళుల శాశ్వత రాజధానిగా తీర్చిదిద్దాడు.',
    rulersSummaryEn: [
      'Vijayalaya Chola – Visionary Founder of the Imperial Chola Dynasty',
      'Rajaraja I – Great Expander, Naval Genius & Builder of the Big Temple',
      'Rajendra I – Overseas Conqueror (Srivijaya) & Victor of the Ganga',
      'Kulottunga I – Reformer, Diplomat & Patron of Global Maritime Trade'
    ],
    rulersSummaryTe: [
      'విజయాలయ చోళుడు – మహోన్నత సామ్రాజ్య వ్యవస్థాపకుడు',
      'రాజరాజ చోళ I – సామ్రాజ్య విస్తరణకర్త, నౌకాదళ పితామహుడు & బృహదీశ్వరాలయ నిర్మాత',
      'రాజేంద్ర చోళ I – సముద్రాల ఆవల శ్రీవిజయ జేత, ఉత్తరాన గంగా విజేత ("గంగైకొండ")',
      'కులోత్తుంగ చోళ I – పరిపాలనా సంస్కర్త మరియు అంతర్జాతీయ వాణిజ్య దూత'
    ]
  },
  rulers: [
    {
      nameEn: 'Rajaraja Chola I (Arulmozhi Varman)',
      nameTe: 'రాజరాజ చోళ I (అరుళ్‌మొళి వర్మ)',
      reignEn: '985 – 1014 CE',
      reignTe: 'క్రీ.శ. 985 – 1014',
      portrait: './images/indian_history/south_indian_dynasties/rajaraja_chola.jpg',
      highlightsEn: [
        'Expanded the Chola Empire across South India, Northern Sri Lanka (Anuradhapura), and the Maldives.',
        'Built the formidable Chola Navy that transformed the Bay of Bengal into a "Chola Lake".',
        'Constructed the architectural wonder of the world: Brihadisvara Temple (Big Temple) at Thanjavur in 1010 CE.',
        'Initiated a comprehensive land revenue survey (Tittis) and codified the Tamil Shaiva hymns (Tirumurai).'
      ],
      highlightsTe: [
        'దక్షిణ భారతదేశం, ఉత్తర శ్రీలంక మరియు మాల్దీవులను జయించి విశాల సామ్రాజ్యాన్ని స్థాపించాడు.',
        'బంగాళాఖాతాన్ని "చోళుల సరస్సు"గా మార్చిన అజేయ నౌకాదళాన్ని నిర్మించాడు.',
        'క్రీ.శ. 1010 లో ప్రపంచ వింత అయిన తంజావూరు "బృహదీశ్వర దేవాలయాన్ని" నిర్మించాడు.',
        'సమగ్ర భూమి సర్వేను చేపట్టి పన్నుల వ్యవస్థను, గ్రామ సభల పాలనను క్రమబద్ధీకరించాడు.'
      ]
    },
    {
      nameEn: 'Rajendra Chola I (Gangaikonda Chola)',
      nameTe: 'రాజేంద్ర చోళ I (గంగైకొండ చోళుడు)',
      reignEn: '1014 – 1044 CE',
      reignTe: 'క్రీ.శ. 1014 – 1044',
      portrait: './images/indian_history/south_indian_dynasties/rajendra_chola.jpg',
      highlightsEn: [
        'Marched north to the banks of the sacred River Ganga, defeating the Pala King Mahipala, and adopted the title "Gangaikonda Chola".',
        'Founded Gangaikondacholapuram as the magnificent new imperial capital and excavated the colossal Cholagangam lake.',
        'Launched unprecedented trans-oceanic naval expeditions against Srivijaya (Sumatra, Malay Peninsula, Java) in 1025 CE, securing sea trade to China.',
        'Annexed the entire island of Sri Lanka and maintained close diplomatic ties with the Song Dynasty of China.'
      ],
      highlightsTe: [
        'ఉత్తర భారతదేశంపై దండెత్తి పవిత్ర గంగా తీరంలో పాల వంశీయులను ఓడించి "గంగైకొండ చోళ" బిరుదు పొందాడు.',
        'తన విజయానికి ప్రతీకగా "గంగైకొండచోళపురం" నగరాన్ని మరియు "చోళగంగం" అనే మహా సరస్సును నిర్మించాడు.',
        'క్రీ.శ. 1025 లో ఆగ్నేయాసియాలోని శ్రీవిజయ సామ్రాజ్యం (సుమత్రా, మలయా, జావా) పై నౌకాదళ దండయాత్ర చేసి సముద్ర మార్గాలను తన ఆధీనంలోకి తెచ్చుకున్నాడు.',
        'శ్రీలంక మొత్తాన్ని వశపరచుకున్నాడు మరియు చైనా సాంగ్ చక్రవర్తులతో రాయబారాలు నెరిపాడు.'
      ]
    }
  ],
  administrationHierarchy: [
    {
      levelEn: 'Empire (Rajyam / Perur)',
      levelTe: 'సామ్రాజ్యము (రాజ్యం)',
      descriptionEn: 'The supreme realm governed by the Emperor (Chakravartigal) with advice from the royal council.',
      descriptionTe: 'చక్రవర్తి ఆధ్వర్యంలో మంత్రుల సలహాలతో నడిచే కేంద్రీకృత సామ్రాజ్య వ్యవస్థ.'
    },
    {
      levelEn: 'Mandalam (Provinces)',
      levelTe: 'మండలం (రాష్ట్రము)',
      descriptionEn: 'Major imperial provinces governed by royal princes or trusted senior governors.',
      descriptionTe: 'యువరాజులు లేదా విశ్వసనీయ రాజప్రతినిధులు పాలించే ప్రధాన ప్రావిన్సులు.'
    },
    {
      levelEn: 'Valanadu (Divisions)',
      levelTe: 'వలనాడు (జిల్లా స్థాయి)',
      descriptionEn: 'Administrative clusters of Nadus created for streamlined revenue collection and justice.',
      descriptionTe: 'పన్నుల వసూలు, సైనిక అవసరాల కొరకు ఏర్పడిన నాడుల సమూహం.'
    },
    {
      levelEn: 'Nadu (Districts)',
      levelTe: 'నాడు (తాలూకా స్థాయి)',
      descriptionEn: 'Territorial assemblies governed by local landed leaders (Nattar) overseeing agriculture and disputes.',
      descriptionTe: 'వ్యవసాయ భూములు, స్థానిక న్యాయ నిర్ణయాలు చూసే నట్టార్ నాయకుల కూటమి.'
    },
    {
      levelEn: 'Village (Grama / Kurram)',
      levelTe: 'గ్రామము (ప్రాథమిక పరిపాలనా విభాగం)',
      descriptionEn: 'The autonomous cornerstone of Chola governance, self-ruled through highly organized citizen committees.',
      descriptionTe: 'స్వతంత్ర ప్రజాస్వామిక పద్ధతిలో కమిటీల ద్వారా నడిచే ప్రాథమిక పరిపాలనా కేంద్రం.'
    }
  ],
  localSelfGovernment: {
    titleEn: 'Democratic Village Autonomy & Kudavolai System',
    titleTe: 'గ్రామ స్వపరిపాలన & కుడవోలై ఎన్నికల విధానం',
    inscriptionsEn: 'Recorded in exquisite detail on the walls of the Vaikunta Perumal Temple at Uttaramerur (dating to Parantaka I, 919 & 921 CE).',
    inscriptionsTe: 'ఉత్తరమేరూరు శాసనాలు (క్రీ.శ. 919 & 921) ద్వారా లభించిన ప్రపంచ ప్రసిద్ధ స్థానిక స్వపరిపాలనా నిబంధనావళి.',
    assemblies: [
      {
        nameEn: 'Ur',
        nameTe: 'ఊర్ (సాధారణ గ్రామీణ సభ)',
        descriptionEn: 'General village assembly of tax-paying landholders managing civic life and local tanks.',
        descriptionTe: 'సాధారణ రైతులు, భూయజమానులు పాల్గొనే పౌర నిర్వహణ మరియు చెరువుల రక్షణ సభ.',
        icon: '🏡'
      },
      {
        nameEn: 'Sabha / Mahasabha',
        nameTe: 'సభ / మహాసభ (అగ్రహారాల సభ)',
        descriptionEn: 'Assembly of learned scholars in Brahmadeya (tax-exempt gift) villages with highly structured executive sub-committees.',
        descriptionTe: 'బ్రహ్మదేయ అగ్రహార గ్రామాలలోని విద్వాంసుల సభ; వ్యవసాయం, న్యాయం, ఆలయాలను ప్రత్యేక కమిటీల ద్వారా నిర్వహించేవారు.',
        icon: '🏛️'
      },
      {
        nameEn: 'Nagaram',
        nameTe: 'నగరం (వాణిజ్య వ్యాపార మండలి)',
        descriptionEn: 'Assembly of merchants, artisans, and traders that governed commercial market towns and customs tariffs.',
        descriptionTe: 'వ్యాపారులు, శిల్పులు, వర్తక సంఘాలు నిర్వహించే మార్కెట్ పట్టణాల పాలక మండలి.',
        icon: '⚖️'
      }
    ],
    kudavolaiEn: 'The Kudavolai system was a transparent lottery: names of qualified eligible candidates were written on palm leaves, placed in an earthen pot ("Kudam"), and drawn in public view by a young innocent boy.',
    kudavolaiTe: 'కుడవోలై పద్ధతి అనగా పూర్తి పారదర్శక ఎన్నికల లాటరీ విధానం: నిబంధనలకు తగిన అభ్యర్థుల పేర్లను తాళపత్రాలపై రాసి ఒక మట్టి కుండలో వేసేవారు; ప్రజల సమక్షంలో ఒక అమాయక బాలుడి చేత చీటీలు తీయించి కమిటీ సభ్యులను ఎన్నుకునేవారు.'
  },
  economyAndTradeEn: [
    'Agriculture was the supreme economic backbone, powered by the perennial waters of the sacred Kaveri River.',
    'Engineered grand irrigation networks: the Grand Anicut (Kallanai) was expanded, and massive artificial lakes like Cholagangam were built.',
    'Powerful trans-regional merchant guilds such as "Ayyavole 500" and "Manigramam" operated extensive sea voyages.',
    'Exported textiles, fine spices, diamonds, pearls, and ivory to China, Arabia, Persia, and the Srivijaya Empire in Southeast Asia.'
  ],
  economyAndTradeTe: [
    'జీవనది కావేరి నదీ జలాలతో వర్ధిల్లిన వ్యవసాయమే చోళ సామ్రాజ్య ఆర్థిక పునాది.',
    'కల్లణై (గ్రాండ్ ఆనికట్) ను విస్తరించి, "చోళగంగం" వంటి భారీ కృత్రిమ సరస్సులు మరియు కాలువల వ్యవస్థను నిర్మించారు.',
    '"అయ్యవోలే 500", "మణిగ్రామం" వంటి శక్తివంతమైన అంతర్జాతీయ వ్యాపార గిల్డులు సముద్ర వాణిజ్యాన్ని శాసించాయి.',
    'చైనా, అరేబియా, పర్షియా మరియు ఆగ్నేయాసియా దేశాలకు పట్టు వస్త్రాలు, సుగంధ ద్రవ్యాలు, వజ్రాలు, ముత్యాలు ఎగుమతి చేశారు.'
  ],
  artAndArchitectureEn: [
    'Pinnacle of South Indian Dravidian stone architecture featuring soaring pyramidal vimanas that dominated the skyline.',
    'Pioneered the world-acclaimed lost-wax bronze casting technique (Cire-Perdue), capturing unmatched spiritual grace.',
    'The iconic bronze Nataraja (Lord Shiva in cosmic dance) was perfected under Chola royal patronage, becoming an eternal global art symbol.'
  ],
  artAndArchitectureTe: [
    'ఆకాశాన్ని తాకే భారీ విమాన గోపురాలతో ద్రావిడ ఆలయ శిల్పకళను అత్యున్నత శిఖరాలకు చేర్చారు.',
    '"లాస్ట్-వ్యాక్స్" (Lost-Wax) సాంకేతికతతో పోతపోసిన కాంస్య శిల్పకళలో ప్రపంచంలోనే అత్యుత్తమ కళాకారులుగా నిలిచారు.',
    'విశ్వసృష్టి-లయ కారకుడైన "నటరాజ స్వామి" కాంస్య శిల్పం చోళుల కాలంలోనే పరిపూర్ణత సంతరించుకుని అంతర్జాతీయ కళా ప్రపంచానికి గర్వకారణంగా మారింది.'
  ],
  greatTemples: [
    {
      nameEn: 'Brihadisvara Temple (Rajarajeswaram)',
      nameTe: 'తంజావూరు బృహదీశ్వరాలయం (పెద్ద కోవెల)',
      locationEn: 'Thanjavur, Tamil Nadu',
      locationTe: 'తంజావూరు',
      builderEn: 'Rajaraja Chola I (Completed 1010 CE)',
      builderTe: 'రాజరాజ చోళ I (క్రీ.శ. 1010)',
      descriptionEn: 'A UNESCO World Heritage Masterpiece; entirely built of granite with a soaring 216-foot vimana, crowned by an astounding 80-ton single granite monolithic dome (Kumbam).',
      descriptionTe: 'యునెస్కో ప్రపంచ వారసత్వ అద్భుతం; పూర్తిగా గ్రానైట్ రాయితో నిర్మితమై 216 అడుగుల ఎత్తున్న విమానం, పైభాగంలో 80 టన్నుల బరువైన ఏకశిలా శిఖర గుమ్మటం కలిగిన మహాద్భుతం.',
      image: './images/indian_history/south_indian_dynasties/temple_brihadisvara_thanjavur.jpg'
    },
    {
      nameEn: 'Brihadisvara Temple, Gangaikondacholapuram',
      nameTe: 'గంగైకొండచోళపురం బృహదీశ్వరాలయం',
      locationEn: 'Ariyalur District, Tamil Nadu',
      locationTe: 'గంగైకొండచోళపురం',
      builderEn: 'Rajendra Chola I (Completed 1035 CE)',
      builderTe: 'రాజేంద్ర చోళ I (క్రీ.శ. 1035)',
      descriptionEn: 'Built to commemorate the historic victory over the Northern Ganga kingdoms; celebrated for its graceful feminine curves, towering 182-foot vimana, and masterclass sculptural carvings.',
      descriptionTe: 'గంగా నదీ విజయానికి స్మారకంగా రాజేంద్రుడు నిర్మించిన ఆలయం; తంజావూరు కన్నా సున్నితమైన వంపులతో, 182 అడుగుల విమాన గోపురంతో అలరారే దివ్య క్షేత్రం.',
      image: './images/indian_history/south_indian_dynasties/temple_gangaikondacholapuram.jpg'
    },
    {
      nameEn: 'Airavatesvara Temple',
      nameTe: 'ఐరావతేశ్వర దేవాలయము',
      locationEn: 'Darasuram, Kumbakonam',
      locationTe: 'దారాసురం (కుంభకోణం)',
      builderEn: 'Rajaraja Chola II (12th Century CE)',
      builderTe: 'రాజరాజ చోళ II (12వ శతాబ్దం)',
      descriptionEn: 'A poem in stone; sculpted in the form of a celestial stone chariot drawn by galloping horses, renowned for musical stone steps, miniature bas-reliefs, and intricate pillars.',
      descriptionTe: 'శిలలో చెక్కిన సంగీత కావ్యం; గుర్రాలు లాగే దివ్య రథం ఆకారంలో నిర్మించబడింది, సప్తస్వరాలు పలికే రాతి మెట్లు మరియు సూక్ష్మ శిల్పాలకు నిలయం.',
      image: './images/indian_history/south_indian_dynasties/temple_airavatesvara.jpg'
    }
  ],
  keyPointsEn: [
    'Pioneers of democratic local self-government with rigorous checks on power (Kudavolai).',
    'Unrivaled maritime naval supremacy across the Bay of Bengal and Southeast Asia.',
    'Dravidian granite temple architecture and sublime lost-wax bronze sculptures (Nataraja).',
    'Historic conquests of Rajaraja I (Sri Lanka) and Rajendra I (Ganga, Srivijaya).',
    'Extensive irrigation engineering transforming the Kaveri delta into a prosperous granary.'
  ],
  keyPointsTe: [
    'ప్రజాస్వామిక స్థానిక స్వపరిపాలన, ఎన్నికల నియమావళి (కుడవోలై పద్ధతి) ని ప్రవేశపెట్టిన ఆద్యులు.',
    'బంగాళాఖాతం మరియు ఆగ్నేయాసియాలో తిరుగులేని సముద్ర నౌకాదళ శక్తి మరియు వాణిజ్య ఆధిపత్యం.',
    'ఆకాశాన్నంటే గ్రానైట్ దేవాలయాలు మరియు విశ్వ ప్రసిద్ధ కాంస్య శిల్పకళ (నటరాజ స్వామి).',
    'రాజరాజ I (శ్రీలంక దిగ్విజయం) మరియు రాజేంద్ర I (గంగా నది, శ్రీవిజయ నౌకాదళ విజయాలు).',
    'కావేరి డెల్టాలో అద్భుతమైన కాలువలు, సరస్సుల నిర్మాణంతో ధాన్య భాండాగారంగా తీర్చిదిద్దిన ఇంజనీరింగ్.'
  ]
};
