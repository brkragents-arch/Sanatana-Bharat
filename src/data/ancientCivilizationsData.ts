// Comprehensive dataset for Ancient Civilizations: Indus Valley, Mesopotamia, and Egypt
// Includes rich bilingual descriptions, extracted imagery, timeline periods, excavated sites, and comparative matrix.

export interface CivilizationSite {
  id: string;
  nameEn: string;
  nameTe: string;
  locationEn: string;
  locationTe: string;
  image: string;
  keyFeaturesEn: string[];
  keyFeaturesTe: string[];
}

export interface CivilizationData {
  id: string;
  nameEn: string;
  nameTe: string;
  subtitleEn: string;
  subtitleTe: string;
  periodEn: string;
  periodTe: string;
  riverEn: string;
  riverTe: string;
  geographyEn: string;
  geographyTe: string;
  bannerImage: string;
  mapImage?: string;
  overviewEn: string;
  overviewTe: string;
  timelinePhases: Array<{
    periodEn: string;
    periodTe: string;
    datesEn: string;
    datesTe: string;
    descEn: string;
    descTe: string;
  }>;
  urbanPlanning?: {
    titleEn: string;
    titleTe: string;
    image?: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  societyAndCulture: {
    titleEn: string;
    titleTe: string;
    image?: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  economyAndTrade: {
    titleEn: string;
    titleTe: string;
    image?: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  scienceAndInventions: {
    titleEn: string;
    titleTe: string;
    image?: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  religionAndBeliefs: {
    titleEn: string;
    titleTe: string;
    image?: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  majorSitesOrPlaces: CivilizationSite[];
  declineAndLegacy: {
    declineEn: string[];
    declineTe: string[];
    legacyEn: string[];
    legacyTe: string[];
    image?: string;
  };
  quickRevision: Array<{
    labelEn: string;
    labelTe: string;
    valueEn: string;
    valueTe: string;
  }>;
}

// 1. INDUS VALLEY CIVILIZATION (హరప్పా / సింధు లోయ నాగరికత)
export const INDUS_VALLEY_CIVILIZATION: CivilizationData = {
  id: 'indus_valley',
  nameEn: 'Indus Valley Civilization',
  nameTe: 'సింధు లోయ నాగరికత (హరప్పా నాగరికత)',
  subtitleEn: "One of the World's Earliest Urban Civilizations (c. 3300 – 1300 BCE)",
  subtitleTe: 'ప్రపంచపు అత్యంత పురాతన ప్రణాళికాబద్ధ నగర నాగరికత (క్రీ.పూ. 3300 – 1300)',
  periodEn: 'c. 3300 – 1300 BCE (Mature: 2600 – 1900 BCE)',
  periodTe: 'క్రీ.పూ. 3300 – 1300 (స్వర్ణయుగం: క్రీ.పూ. 2600 – 1900)',
  riverEn: 'Indus (Sindhu) and Ghaggar-Hakra (Saraswati) river basin',
  riverTe: 'సింధు నది మరియు సరస్వతి (ఘగ్గర్-హాక్రా) నదీ పరీవాహక ప్రాంతం',
  geographyEn: 'Spanned over 1.25 million sq km covering present-day Pakistan, northwestern India (Gujarat, Rajasthan, Punjab, Haryana), and parts of Afghanistan.',
  geographyTe: 'సుమారు 12.5 లక్షల చదరపు కి.మీ. విస్తీర్ణంలో ప్రస్తుత పాకిస్తాన్, వాయవ్య భారతదేశం (గుజరాత్, రాజస్థాన్, పంజాబ్, హర్యానా) మరియు ఆఫ్ఘనిస్తాన్ వరకు విస్తరించింది.',
  bannerImage: './images/indian_history/civilization_portraits/ivc_great_bath_panorama.jpg',
  mapImage: './images/indian_history/civilization_portraits/ivc_geographical_map.jpg',
  overviewEn: 'The Indus Valley Civilization (also called the Harappan Civilization) was renowned for its sophisticated grid-planned cities, subterranean drainage systems, advanced metallurgy, standardised weights, and peaceful trading culture.',
  overviewTe: 'ప్రపంచ చరిత్రలోనే అద్భుతమైన గ్రిడ్ నగర ప్రణాళిక, అధునాతన భూగర్భ మురుగునీటి పారుదల వ్యవస్థ, ప్రామాణిక కొలతలు మరియు అంతర్జాతీయ వాణిజ్యానికి సింధు లోయ నాగరికత మారుపేరుగా నిలిచింది.',
  timelinePhases: [
    {
      periodEn: 'Early Harappan Phase',
      periodTe: 'తొలి హరప్పా దశ',
      datesEn: '3300 – 2600 BCE',
      datesTe: 'క్రీ.పూ. 3300 – 2600',
      descEn: 'Formation of agricultural settlements, rudimentary fortifications, pottery evolution, and emergence of specialized crafts.',
      descTe: 'వ్యవసాయ గ్రామీణ స్థావరాల ఏర్పాటు, ప్రాథమిక రక్షణ గోడలు, మట్టి పాత్రల వికాసం మరియు కుటీర పరిశ్రమల ప్రారంభం.'
    },
    {
      periodEn: 'Mature Harappan Phase',
      periodTe: 'పరిపక్వ హరప్పా దశ (స్వర్ణయుగం)',
      datesEn: '2600 – 1900 BCE',
      datesTe: 'క్రీ.పూ. 2600 – 1900',
      descEn: 'Peak of urban civilization: sprawling brick-built metropolises, dockyards, standardized weights, maritime trade with Mesopotamia (Meluha).',
      descTe: 'నగర నాగరికత ఉచ్ఛస్థితి: బేక్డ్ ఇటుకల మహా నగరాలు, లోథాల్ రేవు, ప్రామాణిక తూనికలు, మెసపటోమియాతో అంతర్జాతీయ సముద్ర వాణిజ్యం.'
    },
    {
      periodEn: 'Late Harappan Phase',
      periodTe: 'మలి హరప్పా దశ (పరివర్తన)',
      datesEn: '1900 – 1300 BCE',
      datesTe: 'క్రీ.పూ. 1900 – 1300',
      descEn: 'Gradual de-urbanization, abandonment of major cities, climate shifts, and migration toward the Gangetic plains.',
      descTe: 'నగరాల క్షీణత, వాతావరణ మార్పులు, సరస్వతీ నది ఇంకిపోవడం, మరియు గంగా మైదానాల వైపు జన వలసలు.'
    }
  ],
  urbanPlanning: {
    titleEn: 'Urban Planning & Engineering Marvels',
    titleTe: 'నగర ప్రణాళిక & ఇంజనీరింగ్ అద్భుతాలు',
    image: './images/indian_history/civilization_portraits/ivc_great_bath.jpg',
    pointsEn: [
      'Well-planned Grid Pattern: Streets intersected at precise 90-degree right angles running strictly North-South and East-West.',
      'Advanced Covered Drainage: Every house connected to brick-lined street drains with inspection manholes and soak pits.',
      'Citadel and Lower Town: Divided into an elevated Citadel (public buildings/granaries) and Lower Town (residential quarters).',
      'Standardized Baked Bricks: Uniform dimensional ratio of 1:2:4 (thickness:width:length) maintained across thousands of kilometers.',
      'The Great Bath of Mohenjo-daro: Masterpiece of waterproof engineering lined with gypsum mortar and natural bitumen (tar).',
      'Public Reservoirs & Wells: Over 700 freshwater wells in Mohenjo-daro alone, alongside massive stone reservoirs in Dholavira.'
    ],
    pointsTe: [
      'ఖచ్చితమైన గ్రిడ్ నమూనా: వీధులు సరిగ్గా 90 డిగ్రీల లంబకోణంలో ఉత్తర-దక్షిణ, తూర్పు-పడమర దిశలలో నిర్మించబడ్డాయి.',
      'భూగర్భ మురుగునీటి డ్రైనేజీ: ప్రతి ఇంటికి డ్రైనేజ్ కనెక్షన్, మూతలు వేసిన మురుగు కాలువలు, మరియు శుభ్రపరిచే మ్యాన్‌హోల్స్.',
      'సిటాడెల్ మరియు దిగువ నగరం: పాలకుల/ప్రజా భవనాల కోసం ఎత్తైన సిటాడెల్, సామాన్య ప్రజల కోసం విశాలమైన దిగువ పట్టణం.',
      'ప్రామాణిక కాల్చిన ఇటుకలు: వేలాది కిలోమీటర్ల వ్యాప్తంగా ఖచ్చితమైన 1:2:4 పరిమాణ నిష్పత్తి గల దృఢమైన కాల్చిన ఇటుకల వినియోగం.',
      'మొహెంజొదారో మహా స్నానవాటిక: సహజ తారు (బిటుమెన్) మరియు జిప్సమ్‌తో లీక్ కాకుండా నిర్మించిన ప్రపంచ తొలి వాటర్‌ప్రూఫ్ స్విమ్మింగ్ పూల్.',
      'ప్రజా బావులు & రిజర్వాయర్లు: మొహెంజొదారోలోనే 700కి పైగా మంచి నీటి బావులు, ధోలావీరాలో భారీ రాతి రిజర్వాయర్లు.'
    ]
  },
  societyAndCulture: {
    titleEn: 'People, Society & Housing',
    titleTe: 'ప్రజలు, సమాజం & నివాస గృహాలు',
    image: './images/indian_history/civilization_portraits/ivc_people_society.jpg',
    pointsEn: [
      'Cosmopolitan Urban Population: Thriving communities of artisans, merchants, civic administrators, farmers, and sailors.',
      'Egalitarian Society: Absence of lavish royal palaces, ostentatious monarch tombs, or grand military monuments.',
      'Multi-Storeyed Brick Homes: Houses featured central courtyards, private baths, upper floors, and flat terraced roofs.',
      'Clothing & Grooming: Cotton and wool garments, elaborate coiffures, bronze mirrors, vanity cases, and ivory combs.'
    ],
    pointsTe: [
      'వైవిధ్యభరిత నగర సమాజం: చేతివృత్తుల కళాకారులు, వర్తకులు, పరిపాలకులు, రైతులు మరియు నావికులతో కూడిన నాగరిక జీవనం.',
      'సమానత్వ సమాజం: రాచరిక ఆడంబరాలు, భారీ రాజభవనాలు లేదా యుద్ధ స్మారకాలు కనిపించని శాంతియుత ప్రజా జీవనం.',
      'బహుళ అంతస్తుల గృహాలు: మధ్యలో విశాలమైన ప్రాంగణం (నడిమిల్లు), ప్రత్యేక స్నానపు గదులు, ప్రైవేట్ బావులు మరియు పై అంతస్తులు.',
      'వస్త్రధారణ & అలంకరణ: పత్తి మరియు ఉన్ని వస్త్రాలు, వినూత్న కేశాలంకరణలు, కంచు అద్దాలు, మరియు దంతపు దువ్వెనలు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Economy, Trade & Lothal Maritime Dock',
    titleTe: 'ఆర్థిక వ్యవస్థ, వాణిజ్యం & లోథాల్ ఓడరేవు',
    image: './images/indian_history/civilization_portraits/ivc_dockyard_lothal.jpg',
    pointsEn: [
      'Agricultural Abundance: Cultivated wheat, barley, sesame, mustard, peas, and the earliest recorded cotton in the world.',
      'Lothal Tidal Dockyard: World’s earliest engineered tidal dockyard connecting to the Sabarmati river and Arabian Sea.',
      'International Maritime Trade: Regular sea trade with Mesopotamia (recorded as "Meluha"), Oman (Magan), and Dilmun (Bahrain).',
      'Standardized Binary Weight System: Binary scale based on 1, 2, 4, 8, 16, 32, 64 (16 was the standard unit), with chert cube weights.',
      'Crafts & Bead Factories: Massive workshops for carnelian beads, shell bangles, steatite seals, and bronze metallurgy.'
    ],
    pointsTe: [
      'సుసంపన్న వ్యవసాయం: గోధుమలు, బార్లీ, నువ్వులు, ఆవాలు, బఠానీలు మరియు ప్రపంచంలోనే మొట్టమొదటిసారి పత్తి సాగు.',
      'లోథాల్ నౌకాశ్రయం: సబర్మతీ నది మరియు అరేబియా సముద్రంతో అనుసంధానించబడిన ప్రపంచ తొలి టైడల్ ఓడరేవు.',
      'మెసపటోమియాతో వాణిజ్యం: మెసపటోమియన్ గ్రంథాలలో "మెలూహా"గా వర్ణించబడిన భారతీయ సింధు లోయ వాణిజ్య వర్తకం.',
      'ద్వియాంశ (బైనరీ) తూనికల వ్యవస్థ: 1, 2, 4, 8, 16, 32, 64 నిష్పత్తిలో ఆధారపడిన అత్యంత కచ్చితమైన క్యూబ్ బరువుల వ్యవస్థ.',
      'పూసల పరిశ్రమ & లోహ శాస్త్రం: కార్నెలియన్ రత్న పూసలు, శంఖపు గాజులు, ముద్రలు మరియు కంచు శిల్పాల తయారీ.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Writing System, Art & Metallurgy',
    titleTe: 'లిపి, కళలు & కాంస్య లోహ శిల్పాలు',
    image: './images/indian_history/civilization_portraits/ivc_dancing_girl.jpg',
    pointsEn: [
      'Undeciphered Indus Script: 400 to 600 pictographic glyphs written right-to-left (boustrophedon), found on seals, pottery, and copper tablets.',
      'Lost-Wax Bronze Casting: Masterpieces like the iconic "Dancing Girl" of Mohenjo-daro crafted using the cire perdue technique.',
      'Stone Sculpture: Majestic soapstone statuette of the bearded "Priest-King" draped in an embroidered trefoil robe.',
      'Terracotta Art: Lifelike terracotta toys, wheeled carts, whistling birds, mother goddesses, and bull figurines.'
    ],
    pointsTe: [
      'అస్పష్ట సింధు లిపి: ముద్రలు, రాగి రేకులు మరియు కుండలపై కనిపించే 400 నుండి 600 బొమ్మల గుర్తులు (కుడి నుండి ఎడమకు రాసే విధానం).',
      'లాస్ట్-వాక్స్ కాంస్య శిల్ప కళ: మొహెంజొదారోలో లభించిన జగత్ప్రసిద్ధ "నాట్యగత్తె" (Dancing Girl) కంచు విగ్రహం.',
      'గడ్డం పూజారి శిల్పం: త్రిపత్రాల శాలువా ధరించిన శాంత గంభీర "పూజారి రాజు" (Priest-King) స్టీటైట్ రాతి విగ్రహం.',
      'టెర్రకోట బొమ్మలు: చక్రాల ఎద్దుల బండ్లు, ఈల వేసే పక్షులు, మాతృదేవత విగ్రహాలు మరియు పశువుల మట్టి బొమ్మలు.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Spiritual Beliefs & Religious Veneration',
    titleTe: 'ఆధ్యాత్మిక నమ్మకాలు & ఆరాధనా పద్ధతులు',
    image: './images/indian_history/civilization_portraits/ivc_pashupati_seal.jpg',
    pointsEn: [
      'Pashupati Seal (Proto-Shiva): Seated yogic figure with horned headdress surrounded by elephant, tiger, rhino, buffalo, and deer.',
      'Mother Goddess Cult: Abundant terracotta figurines symbolizing fertility, life renewal, and nature reverence.',
      'Nature & Tree Worship: Sacred Peepal tree veneration, serpent motifs, and humped bull veneration.',
      'Fire Altars (Agni Vedis): Discovered at Kalibangan and Lothal, signifying ritual fire offerings.',
      'Burial Traditions: Extended inhumation in brick graves, urn burials, accompanied by pottery vessels and personal ornaments for the afterlife.'
    ],
    pointsTe: [
      'పశుపతి ముద్ర (ఆది శివుడు): కొమ్ముల కిరీటంతో యోగాసనంలో కూర్చుని ఏనుగు, పులి, ఖడ్గమృగం, దున్నపోతులతో చుట్టుముట్టబడిన ఆదిదేవుడు.',
      'మాతృదేవత ఆరాధన: సృష్టికి, సంతానోత్పత్తికి చిహ్నంగా పూజించబడిన మట్టి మాతృమూర్తి విగ్రహాలు.',
      'ప్రకృతి & రావి చెట్టు పూజ: రావి చెట్టు, నాగులు, వృషభం (మూపురం గల ఎద్దు) మరియు జంతువులను దైవ సమానంగా ఆరాధించడం.',
      'అగ్ని వేదికలు: కాళీబంగన్ మరియు లోథాల్‌లలో లభించిన పవిత్ర అగ్ని గుండాలు (హోమ వేదికలు).',
      'సమాధి ఆచారాలు: పరలోక నమ్మకంతో మట్టి పాత్రలు, ఆభరణాలతో పాటు నిర్వహించిన పద్ధతిబద్ధ దహన/ఖనన సంస్కారాలు.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'mohenjodaro',
      nameEn: 'Mohenjo-daro ("Mound of the Dead")',
      nameTe: 'మొహెంజొదారో ("మృతుల దిబ్బ")',
      locationEn: 'Larkana District, Sindh, Pakistan (Indus River)',
      locationTe: 'లర్కానా జిల్లా, సింధు రాష్ట్రం, పాకిస్తాన్',
      image: './images/indian_history/civilization_portraits/ivc_site_mohenjodaro.jpg',
      keyFeaturesEn: ['The Great Bath', 'The Great Granary', 'Priest-King Statue', 'Bronze Dancing Girl', 'Pashupati Seal'],
      keyFeaturesTe: ['మహా స్నానవాటిక', 'భారీ ధాన్యాగారం', 'పూజారి రాజు విగ్రహం', 'కంచు నాట్యగత్తె', 'పశుపతి ముద్ర']
    },
    {
      id: 'harappa',
      nameEn: 'Harappa (First Discovered Site in 1921)',
      nameTe: 'హరప్పా (1921లో బయల్పడిన తొలి నగరం)',
      locationEn: 'Sahiwal District, Punjab, Pakistan (Ravi River)',
      locationTe: 'సాహివాల్ జిల్లా, పంజాబ్ ప్రావిన్స్, పాకిస్తాన్',
      image: './images/indian_history/civilization_portraits/ivc_site_harappa.jpg',
      keyFeaturesEn: ['Six Granaries in two rows', 'Workmen quarters', 'Red sandstone male torso', 'Coffin burials (R-37 cemetery)'],
      keyFeaturesTe: ['రెండు వరుసలలో 6 ధాన్యాగారాలు', 'కార్మికుల గృహాలు', 'ఎరుపు ఇసుకరాయి పురుష శిల్పం', 'చెక్క శవపేటిక సమాధులు']
    },
    {
      id: 'dholavira',
      nameEn: 'Dholavira (UNESCO World Heritage Site)',
      nameTe: 'ధోలావీరా (యునెస్కో ప్రపంచ వారసత్వ సంపద)',
      locationEn: 'Khadir Bet, Kutch District, Gujarat, India',
      locationTe: 'ఖదిర్ బెట్, కచ్ జిల్లా, గుజరాత్, భారతదేశం',
      image: './images/indian_history/civilization_portraits/ivc_site_dholavira.jpg',
      keyFeaturesEn: ['Tripartite city layout', '16 Giant stepped water reservoirs', 'Famous 10-character Signboard inscription', 'Polished stone architecture'],
      keyFeaturesTe: ['మూడు అంచెల నగర విభజన', '16 భారీ రాతి నీటి రిజర్వాయర్లు', '10 అక్షరాల సైన్‌బోర్డు శిలాఫలకం', 'నునుపైన రాతి కట్టడాలు']
    },
    {
      id: 'rakhigarhi',
      nameEn: 'Rakhigarhi (Largest Indus Valley Site)',
      nameTe: 'రాఖీగఢీ (అత్యంత విస్తారమైన సింధు క్షేత్రం)',
      locationEn: 'Hisar District, Haryana, India (Ghaggar Basin)',
      locationTe: 'హిసార్ జిల్లా, హర్యానా, భారతదేశం',
      image: './images/indian_history/civilization_portraits/ivc_site_rakhigarhi.jpg',
      keyFeaturesEn: ['Over 550 hectares area', 'Ancient DNA research confirming indigenous continuity', 'Extensive cemetery', 'Multi-layer habitation mounds'],
      keyFeaturesTe: ['550 హెక్టార్ల మహా వైశాల్యం', 'భారతీయ జన్యు నిరంతరతను నిరూపించిన DNA పరిశోధనలు', 'విశాల స్మశాన వాటిక', 'బహుళ కాలాల స్థావరాలు']
    },
    {
      id: 'kalibangan',
      nameEn: 'Kalibangan ("Black Bangles")',
      nameTe: 'కాళీబంగన్ ("నల్లటి గాజుల క్షేత్రం")',
      locationEn: 'Hanumangarh District, Rajasthan, India (Ghaggar River)',
      locationTe: 'హనుమాన్‌గఢ్ జిల్లా, రాజస్థాన్, భారతదేశం',
      image: './images/indian_history/civilization_portraits/ivc_site_kalibangan.jpg',
      keyFeaturesEn: ['World’s earliest ploughed agricultural field', 'Series of ritual fire altars', 'Bones of domesticated camels', 'Earthquake evidence'],
      keyFeaturesTe: ['ప్రపంచంలోనే మొట్టమొదటి దున్నిన పొలం ఆనవాళ్లు', 'వరుస యజ్ఞ అగ్ని వేదికలు', 'ఒంటెల ఎముకలు', 'ప్రాచీన భూకంప ఆధారాలు']
    },
    {
      id: 'lothal',
      nameEn: 'Lothal ("Mound of the Dead" in Gujarati)',
      nameTe: 'లోథాల్ (ప్రాచీన అంతర్జాతీయ ఓడరేవు)',
      locationEn: 'Ahmedabad District, Gujarat, India (Bhogava River / Gulf of Khambhat)',
      locationTe: 'అహ్మదాబాద్ జిల్లా, గుజరాత్, భారతదేశం',
      image: './images/indian_history/civilization_portraits/ivc_site_lothal.jpg',
      keyFeaturesEn: ['Tidal dockyard with sluice gate', 'Bead manufacturing factory', 'Persian Gulf button seal', 'Rice cultivation evidence'],
      keyFeaturesTe: ['అలల ఆధారిత టైడల్ డాక్‌యార్డ్', 'రత్న పూసల కర్మాగారం', 'పర్షియన్ గల్ఫ్ వ్యాపార ముద్ర', 'వరి సాగు తొలి ఆధారాలు']
    }
  ],
  declineAndLegacy: {
    declineEn: [
      'Climatic drying and shifts in the monsoon rainfall patterns.',
      'Drying up and shifting course of the sacred Saraswati (Ghaggar-Hakra) river network.',
      'Deforestation, resource exhaustion, and increased salinization of arable soil.',
      'Decline in overseas trade with Mesopotamia around 1900 BCE.',
      'Peaceful transformation and eastward migration of populations into the fertile Ganga-Yamuna Doab.'
    ],
    declineTe: [
      'రుతుపవనాల క్షీణత మరియు దీర్ఘకాలిక తీవ్ర వర్షాభావ పరిస్థితులు.',
      'పవిత్ర సరస్వతీ (ఘగ్గర్-హాక్రా) నదీ ప్రవాహం ఇంకిపోవడం మరియు నదుల మార్గం మారడం.',
      'భూసార క్షీణత మరియు పంట భూములలో ఉప్పు పెరిగిపోవడం.',
      'క్రీ.పూ. 1900 ప్రాంతంలో మెసపటోమియాతో సముద్ర వాణిజ్యం మందగించడం.',
      'యుద్ధ విధ్వంసం వల్ల కాకుండా, శాంతియుతంగా గంగా-యమునా మైదానాల వైపు ప్రజలు వలస వెళ్లడం.'
    ],
    legacyEn: [
      'Laid the unbreakable bedrock of Indian urban planning, engineering standards, and sanitation.',
      'Standardized weight ratios (16) persisted into modern Indian currency and measurement systems.',
      'Spiritual continuity of Shiva/Pashupati, Mother Goddess, Peepal worship, and ritual bath purification into Sanatana Dharma.'
    ],
    legacyTe: [
      'భారతీయ నగర నిర్మాణం, పారిశుద్ధ్యం మరియు ప్రామాణిక కొలతలకు శాశ్వత పునాది వేసింది.',
      '16 ఆధారిత బరువుల నిష్పత్తి ఆధునిక భారతదేశపు అణా/రూపాయి కొలతల్లో శతాబ్దాల పాటు కొనసాగింది.',
      'శివారాధన (పశుపతి), మాతృదేవత పూజ, రావి చెట్టు ఆరాధన మరియు పవిత్ర స్నాన సంప్రదాయాలు హిందూ ధర్మంలో నిరంతరంగా కొనసాగుతున్నాయి.'
    ]
  },
  quickRevision: [
    { labelEn: 'River / Lifeline', labelTe: 'జీవనది', valueEn: 'Indus (Sindhu) & Saraswati', valueTe: 'సింధు & సరస్వతి' },
    { labelEn: 'Peak Period', labelTe: 'స్వర్ణ యుగం', valueEn: 'c. 2600 – 1900 BCE', valueTe: 'క్రీ.పూ. 2600 – 1900' },
    { labelEn: 'Major Achievement', labelTe: 'ప్రధాన ఘనత', valueEn: 'Grid-Planned Cities & Drainage', valueTe: 'గ్రిడ్ నగర ప్రణాళిక & అండర్‌గ్రౌండ్ డ్రైనేజీ' },
    { labelEn: 'Writing System', labelTe: 'లిపి', valueEn: 'Indus Script (Pictographic, Undeciphered)', valueTe: 'సింధు చిత్రలిపి (ఇంకా పరిష్కరింపబడనిది)' },
    { labelEn: 'Famous Artifacts', labelTe: 'ప్రసిద్ధ కళాఖండాలు', valueEn: 'Dancing Girl, Priest-King, Pashupati Seal', valueTe: 'కంచు నాట్యగత్తె, పూజారి శిల్పం, పశుపతి ముద్ర' },
    { labelEn: 'Primary Port', labelTe: 'ప్రధాన ఓడరేవు', valueEn: 'Lothal Tidal Dockyard', valueTe: 'లోథాల్ టైడల్ డాక్‌యార్డ్' }
  ]
};

// 2. MESOPOTAMIAN CIVILIZATION (మెసపటోమియా నాగరికత)
export const MESOPOTAMIAN_CIVILIZATION: CivilizationData = {
  id: 'mesopotamia',
  nameEn: 'Mesopotamian Civilization',
  nameTe: 'మెసపటోమియా నాగరికత ("నాగరికతల ఉయ్యాల")',
  subtitleEn: 'The Cradle of Civilization: Cuneiform, City-States & Hammurabi’s Code (c. 5000 – 539 BCE)',
  subtitleTe: 'నగరాలు, లిపి, న్యాయ సూత్రాలు మరియు జగ్గురాత్‌ల ఆవిర్భావ కేంద్రం (క్రీ.పూ. 5000 – 539)',
  periodEn: 'c. 5000 – 539 BCE (Early settlements from 7000 BCE)',
  periodTe: 'క్రీ.పూ. 5000 – 539 (తొలి స్థావరాలు క్రీ.పూ. 7000 నుండి)',
  riverEn: 'Tigris and Euphrates Rivers (The Fertile Crescent)',
  riverTe: 'టైగ్రిస్ (దజ్లా) మరియు యూఫ్రటీస్ (ఫురాత్) నదుల పరీవాహక ప్రాంతం',
  geographyEn: 'Situated in the Fertile Crescent between the Tigris and Euphrates rivers, corresponding to modern-day Iraq, Kuwait, eastern Syria, and southeastern Turkey.',
  geographyTe: 'ఆసియాలోని సారవంతమైన అర్ధచంద్రాకార లోయలో (ప్రస్తుత ఇరాక్, కువైట్, తూర్పు సిరియా మరియు ఆగ్నేయ టర్కీ) విస్తరించింది.',
  bannerImage: './images/indian_history/civilization_portraits/meso_ziggurat_cityscape.jpg',
  mapImage: './images/indian_history/civilization_portraits/meso_fertile_crescent_map.jpg',
  overviewEn: 'Known as the "Cradle of Civilization", Mesopotamia gave humanity the world’s first cities, the earliest writing system (cuneiform), codified laws (Code of Hammurabi), the sexagesimal (base 60) mathematics system, and monumental stepped temples called Ziggurats.',
  overviewTe: 'ప్రపంచ నాగరికతలకు ఉయ్యాలగా పిలవబడే మెసపటోమియా మానవాళికి తొలి నగరాలు, క్యూనిఫామ్ లిపి, హమ్మురాబి చట్టాల సంహిత, 60 ఆధారిత గణిత విధానం మరియు ఆకాశాన్ని తాకే జిగ్గురాత్ దేవాలయాలను అందించింది.',
  timelinePhases: [
    {
      periodEn: 'Early Settlements & Ubaid Period',
      periodTe: 'తొలి స్థావరాలు & ఉబైద్ కాలం',
      datesEn: 'c. 7000 – 3100 BCE',
      datesTe: 'క్రీ.పూ. 7000 – 3100',
      descEn: 'Farming communities develop in the Fertile Crescent; early villages, pottery, irrigation canals, and trade networks form.',
      descTe: 'వ్యవసాయ స్థావరాలు, తొలి గ్రామాలు, మట్టి పాత్రలు, కాలువల నీటిపారుదల మరియు వర్తక కూడళ్ల ఏర్పాటు.'
    },
    {
      periodEn: 'Uruk & Early Dynastic Period (Sumerian Era)',
      periodTe: 'ఉరుక్ & తొలి రాజవంశాల కాలం (సుమేరియన్ యుగం)',
      datesEn: 'c. 3100 – 2350 BCE',
      datesTe: 'క్రీ.పూ. 3100 – 2350',
      descEn: 'Birth of world’s first true cities (Uruk, Eridu, Ur); invention of cuneiform writing on clay tablets; rise of independent city-states.',
      descTe: 'ప్రపంచ తొలి నిజమైన నగరాల ఆవిర్భావం; బంకమట్టి పలకలపై క్యూనిఫామ్ లిపి ఆవిష్కరణ; స్వతంత్ర నగర-రాజ్యాల పాలన.'
    },
    {
      periodEn: 'Akkadian Empire (First Empire)',
      periodTe: 'అక్కాడియన్ సామ్రాజ్యం (తొలి సామ్రాజ్యం)',
      datesEn: 'c. 2350 – 2150 BCE',
      datesTe: 'క్రీ.పూ. 2350 – 2150',
      descEn: 'Sargon the Great unites Sumer and Akkad into the world’s first multi-city centralized empire.',
      descTe: 'మహా చక్రవర్తి సార్గాన్ మెసపటోమియా మొత్తాన్ని ఏకం చేసి ప్రపంచ తొలి కేంద్రీకృత సామ్రాజ్యాన్ని స్థాపించాడు.'
    },
    {
      periodEn: 'Ur III & Old Babylonian Empire',
      periodTe: 'ఊర్ III & ప్రాచీన బాబిలోనియన్ సామ్రాజ్యం',
      datesEn: 'c. 2000 – 1000 BCE',
      datesTe: 'క్రీ.పూ. 2000 – 1000',
      descEn: 'Golden age of law, literature, and mathematics under King Hammurabi (c. 1754 BCE) with the famous Code of Hammurabi.',
      descTe: 'హమ్మురాబి చక్రవర్తి పరిపాలన; జగత్ప్రసిద్ధ 282 చట్టాల "హమ్మురాబి కోడ్", సాహిత్యం మరియు గణిత శాస్త్ర స్వర్ణయుగం.'
    },
    {
      periodEn: 'Assyrian & Neo-Babylonian Empires',
      periodTe: 'అస్సీరియన్ & నయా-బాబిలోనియన్ సామ్రాజ్యాలు',
      datesEn: 'c. 1000 – 539 BCE',
      datesTe: 'క్రీ.పూ. 1000 – 539',
      descEn: 'Mighty Assyrian military empire and Library of Ashurbanipal; followed by Nebuchadnezzar II’s Babylon and Hanging Gardens.',
      descTe: 'అస్సీరియన్ల సైనిక పరాక్రమం, అషుర్‌బనిపాల్ గ్రంథాలయం; నెబుకద్నెజార్ నిర్మించిన బాబిలోన్ వేలాడే తోటలు మరియు ఇష్తార్ ద్వారం.'
    }
  ],
  societyAndCulture: {
    titleEn: 'City-States, Society & Daily Life',
    titleTe: 'నగర-రాజ్యాలు, సమాజం & జీవన విధానం',
    image: './images/indian_history/civilization_portraits/meso_life_society.jpg',
    pointsEn: [
      'Independent City-States: Autonomous walled cities (Ur, Uruk, Babylon) governed by Ensi (priest-kings) and Lugal (monarchs).',
      'Social Pyramid: Upper class (nobles, high priests), Middle class (scribes, merchants, artisans), Lower class (laborers, slaves).',
      'Women’s Legal Rights: Women could own property, engage in business trade, and act as official witnesses in contracts.',
      'Scribal Elite: Scribes held prestige by undergoing years of training at the Edubba (tablet house).'
    ],
    pointsTe: [
      'స్వతంత్ర నగర-రాజ్యాలు: పూజారి-రాజులు (ఎన్సీ) మరియు చక్రవర్తుల (లుగాల్) పాలనలో కోట గోడలతో సురక్షితమైన స్వయంప్రతిపత్తి నగరాలు.',
      'సామాజిక వర్గాలు: ఉన్నత వర్గం (పురోహితులు, ప్రభువులు), మధ్య తరగతి (రచయితలు, వర్తకులు, శిల్పులు), దిగువ వర్గం (రైతులు, బానిసలు).',
      'మహిళల చట్టబద్ధ హక్కులు: మహిళలకు ఆస్తి హక్కు, సొంత వ్యాపారం చేసుకునే వెసులుబాటు మరియు ఒప్పందాలలో సాక్షులుగా ఉండే అధికారం.',
      'రచయితల (స్క్రైబ్స్) గౌరవం: ఎడుబ్బా (పాఠశాల)లలో ఏళ్ల తరబడి క్యూనిఫామ్ లిపి నేర్చుకున్న రచయితలకు అత్యున్నత సామాజిక గౌరవం.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Agriculture, Canal Networks & Long-Distance Trade',
    titleTe: 'వ్యవసాయం, కాలువలు & అంతర్జాతీయ వర్తకం',
    image: './images/indian_history/civilization_portraits/meso_lamassu_tablet.jpg',
    pointsEn: [
      'Canal Irrigation: Controlled the turbulent annual flooding of the Tigris and Euphrates through vast dike and canal networks.',
      'Primary Crops: Barley, wheat, date palms, sesame, alongside sheep and goat farming for prized wool and dairy.',
      'Extensive Overland & River Trade: Traded grains, textiles, and sesame oil in exchange for copper, tin, lapis lazuli, and timber.',
      'Maritime Connection to India: Imported exotic carnelian beads, timber, and copper from Meluha (Indus Valley Civilization).'
    ],
    pointsTe: [
      'కాలువల నీటిపారుదల: టైగ్రిస్-యూఫ్రటీస్ నదుల వరదలను నియంత్రించడానికి నిర్మించిన భారీ ఆనకట్టలు మరియు కాలువల నెట్‌వర్క్.',
      'ప్రధాన పంటలు: బార్లీ, గోధుమలు, ఖర్జూరం, నువ్వులు; ఉన్ని మరియు పాల ఉత్పత్తుల కోసం గొర్రెలు, మేకల పెంపకం.',
      'విస్తృత అంతర్జాతీయ వాణిజ్యం: వస్త్రాలు, ధాన్యం ఎగుమతి చేసి రాగి, తగరం, లాపిస్ లాజులి రత్నాలు మరియు కలపను దిగుమతి చేసుకున్నారు.',
      'సింధు లోయతో వర్తక సంబంధం: "మెలూహా" (హరప్పా నాగరికత) నుండి రత్న పూసలు, శంఖాలు, దంతం మరియు నాణ్యమైన కలప దిగుమతి.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Great Inventions, Writing & Law Code',
    titleTe: 'గొప్ప ఆవిష్కరణలు, క్యూనిఫామ్ లిపి & హమ్మురాబి కోడ్',
    image: './images/indian_history/civilization_portraits/meso_hammurabi_stele.jpg',
    pointsEn: [
      'Cuneiform Script: Wedge-shaped writing pressed into soft clay tablets using reed styluses, preserved for millennia.',
      'Code of Hammurabi (c. 1754 BCE): 282 codified laws inscribed on a black diorite stele, establishing the principle of "an eye for an eye".',
      'Sexagesimal (Base 60) Mathematics: Divided the hour into 60 minutes, the minute into 60 seconds, and the circle into 360 degrees.',
      'Astronomy & Astrology: Mapped planetary movements, predicted eclipses, and laid the foundations of the 12 zodiac constellations.',
      'The Wheel & The Plow: First civilization to utilize wheeled transport chariots and animal-drawn seed plows.'
    ],
    pointsTe: [
      'క్యూనిఫామ్ లిపి: రెల్లు గడ్డి కలంతో పచ్చి బంకమట్టి పలకలపై ముద్రించిన చీలిక ఆకారపు అక్షరాలు (ప్రపంచ ప్రాచీన లిపి).',
      'హమ్మురాబి చట్టాల కోడ్ (క్రీ.పూ. 1754): నల్లటి డయోరైట్ శిలాస్తంభంపై చెక్కబడిన 282 చట్టాలు ("కంటికి కన్ను, పంటికి పన్ను").',
      '60 ఆధారిత (సెక్సాజెసిమల్) గణితం: గంటకు 60 నిమిషాలు, నిమిషానికి 60 సెకన్లు, మరియు వృత్తానికి 360 డిగ్రీల విభజనను అందించిన ఘనత.',
      'ఖగోళ శాస్త్రం & రాశిచక్రం: గ్రహాల గతులను లెక్కించడం, గ్రహణాలను ఊహించడం మరియు 12 రాశుల చక్రానికి ప్రాథమిక పునాది.',
      'చక్రం మరియు నాగలి: రవాణా కోసం చక్రాల బండ్లు మరియు వ్యవసాయం కోసం ఎద్దులతో లాగే విత్తన నాగలిని రూపొందించిన తొలి నాగరికత.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Polytheism, Gods & Monumental Ziggurats',
    titleTe: 'బహుదేవతారాధన & ఆకాశాన్నంటే జిగ్గురాత్ గోపురాలు',
    image: './images/indian_history/civilization_portraits/meso_ziggurat_cityscape.jpg',
    pointsEn: [
      'Stepped Ziggurats: Massive pyramid-like mudbrick temple towers built as earthly stairways for gods to descend.',
      'Major Deities: Anu (sky god), Enlil (storm/wind god), Enki (god of wisdom and fresh waters), Ishtar/Inanna (goddess of love and war), and Marduk (patron of Babylon).',
      'Epic of Gilgamesh: World’s oldest epic literary poem exploring king Gilgamesh’s quest for immortality and the Great Deluge myth.'
    ],
    pointsTe: [
      'మెట్ల జిగ్గురాత్ దేవాలయాలు: దేవతలు భూమిపైకి దిగివచ్చే సోపానాలుగా మట్టి ఇటుకలతో నిర్మించిన భారీ పిరమిడ్ తరహా గోపురాలు.',
      'ప్రధాన దేవతలు: అను (ఆకాశ దేవుడు), ఎన్లిల్ (తుఫాను దేవుడు), ఎంకి (జ్ఞాన దేవుడు), ఇష్తార్ (ప్రేమ & యుద్ధ దేవత), మర్దుక్ (బాబిలోన్ ప్రధాన దైవం).',
      'గిల్గమేష్ మహాకావ్యం: అమరత్వం కోసం అన్వేషించిన గిల్గమేష్ రాజు సాహసాలు మరియు మహా జలప్రళయాన్ని వివరించే ప్రపంచపు తొలి మహాకావ్యం.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'ur',
      nameEn: 'Ur',
      nameTe: 'ఊర్',
      locationEn: 'Dhi Qar Governorate, southern Iraq',
      locationTe: 'దక్షిణ ఇరాక్',
      image: './images/indian_history/civilization_portraits/meso_place_ur.jpg',
      keyFeaturesEn: ['Great Ziggurat of Ur', 'Royal Tombs with golden lyres and treasures', 'Traditional birthplace of Patriarch Abraham'],
      keyFeaturesTe: ['ఊర్ మహా జిగ్గురాత్ దేవాలయం', 'బంగారు వీణలు, కిరీటాలతో కూడిన రాచరిక సమాధులు', 'అబ్రహం ప్రవక్త జన్మస్థలంగా ప్రసిద్ధి']
    },
    {
      id: 'babylon',
      nameEn: 'Babylon ("Gate of the Gods")',
      nameTe: 'బాబిలోన్ ("దైవ ద్వారము")',
      locationEn: 'Hillah, Babil Governorate, central Iraq (Euphrates River)',
      locationTe: 'మధ్య ఇరాక్ (యూఫ్రటీస్ నదీ తీరం)',
      image: './images/indian_history/civilization_portraits/meso_place_babylon.jpg',
      keyFeaturesEn: ['Capital of Hammurabi', 'Hanging Gardens of Babylon (Seven Ancient Wonders)', 'Ishtar Gate of glazed blue bricks'],
      keyFeaturesTe: ['హమ్మురాబి సామ్రాజ్య రాజధాని', 'ప్రపంచ వింతలలో ఒకటైన బాబిలోన్ వేలాడే తోటలు', 'నీలిరంగు మెరిసే ఇటుకలతో కూడిన ఇష్తార్ ద్వారం']
    },
    {
      id: 'nineveh',
      nameEn: 'Nineveh',
      nameTe: 'నినెవెహ్',
      locationEn: 'Opposite modern Mosul, northern Iraq (Tigris River)',
      locationTe: 'ఉత్తర ఇరాక్ (మోసుల్ ఎదురుగా, టైగ్రిస్ తీరం)',
      image: './images/indian_history/civilization_portraits/meso_place_nineveh.jpg',
      keyFeaturesEn: ['Magnificent capital of the Neo-Assyrian Empire', 'Royal Library of Ashurbanipal containing over 30,000 clay tablets', 'Massive stone wall palaces'],
      keyFeaturesTe: ['నయా-అస్సీరియన్ సామ్రాజ్య వైభవోపేత రాజధాని', '30,000కి పైగా మట్టి పలకలతో కూడిన అషుర్‌బనిపాల్ రాజ గ్రంథాలయం', 'భారీ రాతి కోటలు']
    },
    {
      id: 'nippur',
      nameEn: 'Nippur',
      nameTe: 'నిప్పుర్',
      locationEn: 'Afak, Al-Qādisiyyah Governorate, Iraq',
      locationTe: 'అల్-ఖాదిసియా ప్రాంతం, ఇరాక్',
      image: './images/indian_history/civilization_portraits/meso_place_nippur.jpg',
      keyFeaturesEn: ['Holy religious center of ancient Sumer', 'Sacred temple of storm god Enlil (Ekur)', 'Vast scribal school producing literature'],
      keyFeaturesTe: ['ప్రాచీన సుమేరియన్ల పవిత్ర మత రాజధాని', 'తుఫాను దేవుడు ఎన్లిల్ ప్రధాన దేవాలయం (ఎకుర్)', 'సాహిత్య గ్రంథాలను సృష్టించిన స్క్రైబ్ పాఠశాలలు']
    },
    {
      id: 'uruk',
      nameEn: 'Uruk (Erech)',
      nameTe: 'ఉరుక్ (ప్రపంచ తొలి నగరం)',
      locationEn: 'Al-Muthanna Governorate, southern Iraq',
      locationTe: 'దక్షిణ ఇరాక్',
      image: './images/indian_history/civilization_portraits/meso_place_uruk.jpg',
      keyFeaturesEn: ['World’s first true city-state (over 50,000 residents by 3000 BCE)', 'Birthplace of Cuneiform writing', 'Reign of legendary King Gilgamesh'],
      keyFeaturesTe: ['ప్రపంచంలోనే మొట్టమొదటి నగర-రాజ్యం (క్రీ.పూ. 3000 నాటికే 50,000 జనాభా)', 'క్యూనిఫామ్ లిపి పుట్టిన స్థలం', 'రాజ గిల్గమేష్ పాలించిన ప్రదేశం']
    }
  ],
  declineAndLegacy: {
    declineEn: [
      'Centuries of continuous canal irrigation led to severe soil salinization and desertification.',
      'Internal civil wars among rival city-states for regional hegemony.',
      'Foreign invasions by Elamites, Hittites, and Kassites.',
      'Final absorption into the Persian Achaemenid Empire under Cyrus the Great in 539 BCE.'
    ],
    declineTe: [
      'శతాబ్దాల కాలువల నీటిపారుదల వల్ల భూమిలో ఉప్పు పేరుకుపోయి పంట పొలాలు ఎడారులుగా మారడం.',
      'నగర-రాజ్యాల మధ్య ఆధిపత్యం కోసం జరిగిన అంతర్యుద్ధాలు.',
      'ఎలమైట్స్, హిటైట్స్ మరియు కాసైట్స్ వంటి విదేశీయుల దండయాత్రలు.',
      'క్రీ.పూ. 539లో సైరస్ చక్రవర్తి నేతృత్వంలో పర్షియన్ అకెమెనిడ్ సామ్రాజ్యంలో విలీనం కావడం.'
    ],
    legacyEn: [
      'Invented writing, contracts, and legal codes that anchor modern civil jurisprudence.',
      'Sexagesimal system continues to measure global time (60s/60m) and circular angles (360°).',
      'Pioneered irrigation engineering, urban fortifications, and monumental architectural arches.'
    ],
    legacyTe: [
      'లిపి, న్యాయ సూత్రాలు మరియు లిఖితపూర్వక ఒప్పందాలతో ఆధునిక న్యాయ వ్యవస్థకు నాంది పలికింది.',
      'కాల గణన (60 సెకన్లు / 60 నిమిషాలు) మరియు వృత్త కోణాలు (360 డిగ్రీలు) నేటికీ సెక్సాజెసిమల్ విధానంలోనే ఉన్నాయి.',
      'నీటిపారుదల ఇంజనీరింగ్, కోట నిర్మాణాలు మరియు చాప కమానుల (ఆర్చ్‌ల) రూపకల్పనలో అగ్రగామిగా నిలిచింది.'
    ]
  },
  quickRevision: [
    { labelEn: 'Rivers', labelTe: 'నదులు', valueEn: 'Tigris & Euphrates', valueTe: 'టైగ్రిస్ & యూఫ్రటీస్' },
    { labelEn: 'Nickname', labelTe: 'విశేషణం', valueEn: 'The Cradle of Civilization', valueTe: 'నాగరికతల ఉయ్యాల' },
    { labelEn: 'Writing System', labelTe: 'లిపి', valueEn: 'Cuneiform (Wedge-shaped clay script)', valueTe: 'క్యూనిఫామ్ (బంకమట్టి పలకలపై చీలిక లిపి)' },
    { labelEn: 'Law Code', labelTe: 'చట్టాల సంహిత', valueEn: 'Code of Hammurabi (282 laws)', valueTe: 'హమ్మురాబి కోడ్ (282 చట్టాలు)' },
    { labelEn: 'Mathematics', labelTe: 'గణిత పద్ధతి', valueEn: 'Sexagesimal Base 60 System (Time & Angles)', valueTe: '60 ఆధారిత సెక్సాజెసిమల్ విధానం' },
    { labelEn: 'Signature Architecture', labelTe: 'ప్రత్యేక నిర్మాణం', valueEn: 'Stepped Ziggurat Temples & Ishtar Gate', valueTe: 'మెట్ల జిగ్గురాత్ గోపురాలు & ఇష్తార్ ద్వారం' }
  ]
};

// 3. EGYPTIAN CIVILISATION (ప్రాచీన ఈజిప్ట్ నాగరికత)
export const EGYPTIAN_CIVILIZATION: CivilizationData = {
  id: 'egypt',
  nameEn: 'Egyptian Civilisation',
  nameTe: 'ప్రాచీన ఈజిప్ట్ నాగరికత ("నైలు నది వరప్రసాదం")',
  subtitleEn: 'Pyramids, Pharaohs, Mummification & 365-Day Solar Calendar (c. 3100 – 30 BCE)',
  subtitleTe: 'పిరమిడ్‌లు, ఫారోలు, మమ్మీలు & 365 రోజుల సౌర క్యాలెండర్ వైభవం (క్రీ.పూ. 3100 – 30)',
  periodEn: 'c. 3100 – 30 BCE (Unification under Narmer to Cleopatra VII)',
  periodTe: 'క్రీ.పూ. 3100 – 30 (నార్మర్ ఏకీకరణ నుండి క్లియోపాత్రా వరకు)',
  riverEn: 'River Nile ("Gift of the Nile")',
  riverTe: 'నైలు నది ("నైలు నది వరప్రసాదం")',
  geographyEn: 'Thrived along the fertile banks and delta of the River Nile in North-East Africa, protected by surrounding deserts (Sahara and Eastern Desert).',
  geographyTe: 'ఈశాన్య ఆఫ్రికాలో సహారా ఎడారుల రక్షణలో నైలు నదీ లోయ మరియు సారవంతమైన డెల్టా వెంట విలసిల్లింది.',
  bannerImage: './images/indian_history/civilization_portraits/egypt_pyramids_top.jpg',
  mapImage: './images/indian_history/civilization_portraits/egypt_nile_map.jpg',
  overviewEn: 'Ancient Egypt flourished for over 3,000 years along the sacred Nile river. Known as the "Gift of the Nile", Egypt is celebrated for monumental pyramids, the Great Sphinx, hieroglyphic writing on papyrus, mummification rituals, and the creation of the 365-day solar calendar.',
  overviewTe: 'పవిత్ర నైలు నదీ తీరాన మూడు వేల సంవత్సరాలకు పైగా వెలుగొందిన ప్రాచీన ఈజిప్ట్ నాగరికత గిజా పిరమిడ్‌లు, స్ఫింక్స్ విగ్రహం, పాపిరస్ కాగితంపై హైరోగ్లిఫిక్ లిపి, మమ్మీల సంరక్షణ మరియు 365 రోజుల సౌర క్యాలెండర్ ఆవిష్కరణకు ప్రసిద్ధి చెందింది.',
  timelinePhases: [
    {
      periodEn: 'Old Kingdom ("Age of the Pyramids")',
      periodTe: 'పాత సామ్రాజ్యం ("పిరమిడ్‌ల యుగం")',
      datesEn: 'c. 2686 – 2181 BCE',
      datesTe: 'క్రీ.పూ. 2686 – 2181',
      descEn: 'Unprecedented monumental architecture: Great Pyramid of Giza (Khufu), Khafre, Menkaure, and the Great Sphinx.',
      descTe: 'అపూర్వ పిరమిడ్ నిర్మాణాలు: గిజా మహా పిరమిడ్ (ఖుఫు), ఖఫ్రే, మెన్‌కౌరే మరియు మహా స్ఫింక్స్ విగ్రహాల నిర్మాణం.'
    },
    {
      periodEn: 'Middle Kingdom ("Period of Reunification")',
      periodTe: 'మధ్య సామ్రాజ్యం ("పునరేకీకరణ యుగం")',
      datesEn: 'c. 2055 – 1650 BCE',
      datesTe: 'క్రీ.పూ. 2055 – 1650',
      descEn: 'Flourishing arts, classical literature, international trade expansion to Nubia and Levant, and agricultural reclamation in Faiyum.',
      descTe: 'కళలు, సాహిత్యం, నూబియా మరియు లెవాంట్‌లతో వర్తక విస్తరణ, మరియు ఫైయుమ్ లోయలో వ్యవసాయ అభివృద్ధి.'
    },
    {
      periodEn: 'New Kingdom ("The Egyptian Empire")',
      periodTe: 'కొత్త సామ్రాజ్యం ("ఈజిప్ట్ సామ్రాజ్య స్వర్ణయుగం")',
      datesEn: 'c. 1550 – 1069 BCE',
      datesTe: 'క్రీ.పూ. 1550 – 1069',
      descEn: 'Peak of military superpower: Reign of Queen Hatshepsut, Thutmose III, Akhenaten, Tutankhamun, and Ramesses II; construction of Karnak and Luxor temples.',
      descTe: 'ఈజిప్ట్ సైనిక అగ్రరాజ్యంగా ఎదిగిన కాలం: రాణి హాట్షెప్సుట్, తుట్మోస్ III, అఖెనాటెన్, టుటంఖామూన్, రామెసెస్ II; కర్నాక్, లక్సార్ దేవాలయాలు.'
    },
    {
      periodEn: 'Ptolemaic & Roman Conquest',
      periodTe: 'టోలెమిక్ పాలన & రోమన్ విలీనం',
      datesEn: '332 – 30 BCE',
      datesTe: 'క్రీ.పూ. 332 – 30',
      descEn: 'Conquered by Alexander the Great; Ptolemaic dynasty ruled until death of Cleopatra VII in 30 BCE when Egypt became a Roman province.',
      descTe: 'అలెగ్జాండర్ ది గ్రేట్ చేతిలో విజయం; రాణి క్లియోపాత్రా మరణం (క్రీ.పూ. 30)తో ఈజిప్ట్ రోమన్ సామ్రాజ్యంలో విలీనమైంది.'
    }
  ],
  urbanPlanning: {
    titleEn: 'Town Planning & Architecture',
    titleTe: 'పట్టణ ప్రణాళిక & వాస్తు శిల్ప కళ',
    image: './images/indian_history/civilization_portraits/egypt_town_planning.jpg',
    pointsEn: [
      'Elevated Town Construction: Towns and settlements built on higher ground to avoid seasonal annual Nile flood surges.',
      'Surrounded by Boundary Walls: Cities and temple enclosures enclosed with massive mudbrick defensive boundary walls.',
      'Orthogonal Street Layout: Major planned avenues and residential alleyways crossed each other at neat right angles.',
      'Separation of Sacred & Secular: Grand stone temples for eternity alongside functional sun-dried mudbrick civilian dwellings.'
    ],
    pointsTe: [
      'వరద ముప్పు లేని ఎత్తైన నిర్మాణాలు: ప్రతి ఏటా వచ్చే నైలు నది వరదల నుండి రక్షణగా పట్టణాలను ఎత్తైన నేలలపై నిర్మించారు.',
      'రక్షణ ప్రాకారాలు: పట్టణాలు మరియు దేవాలయ ప్రాంగణాల చుట్టూ బలమైన మట్టి ఇటుకల రక్షణ గోడలు.',
      'లంబకోణ వీధులు: ప్రధాన రహదారులు మరియు నివాస సందులు ఒకదానికొకటి లంబకోణంలో కూడళ్లుగా ఉండే ప్రణాళిక.',
      'శాశ్వత & తాత్కాలిక విభజన: దేవతలు, రాజుల సమాధుల కోసం శాశ్వత రాతి కట్టడాలు; ప్రజల నివాసాల కోసం ఎండబెట్టిన మట్టి ఇటుకల ఇళ్లు.'
    ]
  },
  societyAndCulture: {
    titleEn: 'Pharaoh, Social Hierarchy & Recreation',
    titleTe: 'ఫారో, సామాజిక వర్గాలు & వినోదం',
    image: './images/indian_history/civilization_portraits/egypt_pharaoh_throne.jpg',
    pointsEn: [
      'Living God Kingship: Pharaoh was revered as the political ruler and living incarnation of god Horus on earth.',
      'Upper Class: Priests, viziers, noble courtiers, and high royal military commanders.',
      'Middle Class: Scribes, merchants, master artisans, royal physicians, and temple architects.',
      'Lower Class: Farmers, quarry laborers, and servants who sustained the state economy.',
      'Recreation & Pastimes: Passionate players of Senet (ancient board chess), harp music, singing, dancing, boating, and waterfowl hunting.'
    ],
    pointsTe: [
      'ఫారో దైవ సమానత్వం: ఈజిప్ట్ చక్రవర్తి (ఫారో) కేవలం రాజు మాత్రమే కాకుండా హోరస్ దేవుని జీవద్స్వరూపంగా పూజింపబడ్డాడు.',
      'ఉన్నత వర్గం: ప్రధాన పురోహితులు, వజీర్లు (మంత్రులు), ప్రభువులు మరియు సైన్యాధ్యక్షులు.',
      'మధ్య తరగతి: రచయితలు (స్క్రైబ్స్), వర్తకులు, శిల్పులు, వైద్యులు మరియు దేవాలయ వాస్తుశిల్పులు.',
      'దిగువ వర్గం: వ్యవసాయదారులు, రాతి క్వారీ కార్మికులు, పడవ నడిపేవారు మరియు సేవకులు.',
      'వినోదం & క్రీడలు: సెనెట్ (ప్రాచీన చదరంగం ఆట), వీణ (హార్ప్) సంగీతం, నృత్యం, బోటింగ్ మరియు పక్షుల వేట.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Agriculture, Linen Textiles & Nile Navigation',
    titleTe: 'వ్యవసాయం, లినెన్ వస్త్రాలు & నైలు నౌకాయానం',
    image: './images/indian_history/civilization_portraits/egypt_nile_boat.jpg',
    pointsEn: [
      'Annual Inundation (Akhet): Nile floodwaters deposited nutrient-rich black silt creating immensely fertile agricultural soil.',
      'Key Agricultural Harvests: Emmer wheat, barley, flax (for fine linen), lentils, onions, figs, and grapes.',
      'Nile as National Highway: Wooden reed boats and sailboats transported heavy stone monoliths, grain, and people across Egypt.',
      'Foreign Trade Networks: Exported linen cloth, wheat, and papyrus; imported Lebanese cedar timber, Nubian gold, and Aegean copper.'
    ],
    pointsTe: [
      'నైలు నది వార్షిక వరదలు (అఖెట్): ప్రతి ఏటా నైలు నది తెచ్చే సారవంతమైన నల్ల రేగడి మట్టి అద్భుతమైన పంటలను ఇచ్చింది.',
      'ప్రధాన పంటలు: గోధుమలు, బార్లీ, అవిసె (లినెన్ వస్త్రాల కోసం), కాయధాన్యాలు, ఉల్లిపాయలు, అత్తి పండ్లు మరియు ద్రాక్ష.',
      'నైలు నౌకాయానం: భారీ రాతి స్తంభాలు, ధాన్యం మరియు ప్రజల రవాణాకు నైలు నదే ప్రధాన జలరవాణా మార్గంగా ఉపయోగపడింది.',
      'విదేశీ వాణిజ్యం: లినెన్ వస్త్రాలు, గోధుమలు, పాపిరస్ కాగితం ఎగుమతి చేసి లెబనాన్ దేవదారు కలప, నూబియా బంగారం దిగుమతి.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Mathematics, Astronomy, Medicine & Hieroglyphics',
    titleTe: 'గణితం, ఖగోళం, వైద్యం & హైరోగ్లిఫిక్ లిపి',
    image: './images/indian_history/civilization_portraits/egypt_astronomy_zodiac.jpg',
    pointsEn: [
      '365-Day Solar Calendar: Developed the 365-day calendar based on the helical rising of Sirius (Sirius/Sothis) aligned with the Nile flood.',
      'Hieroglyphics & Papyrus: Sacred pictographic writing system preserved on papyrus scrolls made from marshland reed stalks.',
      'Practical Mathematics & Geometry: Mastered arithmetic, fractions, volume calculations, and precise right-angle survey geometry for land redistribution after floods.',
      'Advanced Medicine & Surgery: Practiced bone setting, surgical stitching, dentistry, herbal pharmacopoeia, and anatomy through embalming.'
    ],
    pointsTe: [
      '365 రోజుల సౌర క్యాలెండర్: సిరియస్ (లుబ్ధక నక్షత్రం) ఉదయం మరియు నైలు నది వరదల ఆధారంగా 365 రోజుల ఖచ్చితమైన క్యాలెండర్ రూపకల్పన.',
      'హైరోగ్లిఫిక్స్ & పాపిరస్: నైలు తీరపు రెల్లు మొక్కలతో తయారు చేసిన పాపిరస్ కాగితాలపై రాసిన పవిత్ర చిత్రలిపి.',
      'గణితం & రేఖాగణితం: వరదల తర్వాత పొలాల సరిహద్దులను సరిచేయడానికి ఖచ్చితమైన త్రిభుజాలు, వైశాల్యం, ఘనపరిమాణాల లెక్కింపు.',
      'వైద్యం & శస్త్రచికిత్స: ఎముకల అమరిక, కుట్లు వేయడం, దంత వైద్యం, మూలికా ఔషధాలు మరియు శరీరావయవాల అవగాహన.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Pantheon of Gods, Afterlife & Mummification',
    titleTe: 'దేవతా మండలి, మరణానంతర జీవితం & మమ్మీకరణ',
    image: './images/indian_history/civilization_portraits/egypt_mummification.jpg',
    pointsEn: [
      'Mummification: Elaboration ritual preserving the corpse so the spiritual soul (Ka and Ba) could recognize it in eternity.',
      'Canopic Jars: Internal organs (liver, lungs, stomach, intestines) placed in consecrated alabaster jars under protection of Horus’s sons.',
      'Major Gods: Ra (Sun god), Osiris (Lord of afterlife), Isis (goddess of magic/motherhood), Horus (falcon god), and Anubis (god of embalming).',
      'The Book of the Dead: Magic spells and funerary papyrus scrolls placed in tombs to assist the deceased through the Hall of Ma’at (weighing of the heart).'
    ],
    pointsTe: [
      'మమ్మీ సంరక్షణ: మరణానంతర జీవితంలో ఆత్మ (కా మరియు బా) తన శరీరాన్ని గుర్తించడానికి సహజ లవణాలు (నేట్రాన్)తో భద్రపరిచిన మమ్మీలు.',
      'కెనోపిక్ జాడీలు: శరీరం నుండి వేరు చేసిన కాలేయం, ఊపిరితిత్తులు, జీర్ణాశయం మొదలైన అవయవాలను భద్రపరిచే ప్రత్యేక జాడీలు.',
      'ప్రధాన దేవతలు: రా (సూర్య దేవుడు), ఒసిరిస్ (మరణానంతర లోకాధిపతి), ఐసిస్ (మాతృత్వ దేవత), హోరస్ (గరుడ దేవుడు), అనుబిస్ (మమ్మీ దేవుడు).',
      'బుక్ ఆఫ్ ది డెడ్: పరలోక ప్రయాణంలో హృదయాన్ని సత్యపు ఈకతో తూచే న్యాయస్థానంలో ఆత్మకు రక్షణగా సమాధిలో ఉంచిన పవిత్ర గ్రంథం.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'giza',
      nameEn: 'Giza Necropolis (Pyramids & Sphinx)',
      nameTe: 'గిజా పిరమిడ్‌లు & మహా స్ఫింక్స్',
      locationEn: 'Giza Plateau, near modern Cairo, Egypt',
      locationTe: 'కైరో సమీపంలో, ఈజిప్ట్',
      image: './images/indian_history/civilization_portraits/egypt_pyramids_top.jpg',
      keyFeaturesEn: ['Great Pyramid of Khufu (Cheops)', 'Pyramid of Khafre and Menkaure', 'Monolithic Great Sphinx with lion body and pharaoh head'],
      keyFeaturesTe: ['ఖుఫు మహా పిరమిడ్ (గీజా)', 'ఖఫ్రే మరియు మెన్‌కౌరే పిరమిడ్‌లు', 'సింహపు శరీరం, ఫారో ముఖం గల ఏకశిలా స్ఫింక్స్ విగ్రహం']
    },
    {
      id: 'karnak_luxor',
      nameEn: 'Thebes (Karnak & Luxor Temples)',
      nameTe: 'థీబ్స్ (కర్నాక్ & లక్సార్ దేవాలయాలు)',
      locationEn: 'Luxor, Upper Egypt',
      locationTe: 'లక్సార్, ఎగువ ఈజిప్ట్',
      image: './images/indian_history/civilization_portraits/egypt_gods_pantheon.jpg',
      keyFeaturesEn: ['Vast temple complex of Amun-Ra at Karnak', 'Hypostyle Hall with 134 towering sandstone columns', 'Avenue of Sphinxes connecting temples'],
      keyFeaturesTe: ['అమున్-రా దేవుని కర్నాక్ మహా దేవాలయం', '134 భారీ రాతి స్తంభాలతో కూడిన హైపోస్టైల్ హాల్', 'స్ఫింక్స్ విగ్రహాల రాజమార్గం']
    },
    {
      id: 'valley_of_kings',
      nameEn: 'Valley of the Kings',
      nameTe: 'రాజుల లోయ (వ్యాలీ ఆఫ్ ది కింగ్స్)',
      locationEn: 'West bank of the Nile, Luxor, Egypt',
      locationTe: 'నైలు నది పశ్చిమ తీరం, లక్సార్, ఈజిప్ట్',
      image: './images/indian_history/civilization_portraits/egypt_tutankhamun_mask.jpg',
      keyFeaturesEn: ['Rock-cut subterranean royal tombs', 'Intact tomb of King Tutankhamun discovered in 1922', 'Brilliant polychrome fresco wall murals'],
      keyFeaturesTe: ['కొండలను తొలిచి నిర్మించిన రహస్య రాచరిక సమాధులు', '1922లో చెక్కుచెదరకుండా బయటపడిన టుటంఖామూన్ బంగారు సమాధి', 'రంగుల గోడ కుడ్యచిత్రాలు']
    },
    {
      id: 'alexandria',
      nameEn: 'Alexandria',
      nameTe: 'అలెగ్జాండ్రియా',
      locationEn: 'Mediterranean coast of northern Egypt',
      locationTe: 'మధ్యధరా సముద్ర తీరం, ఉత్తర ఈజిప్ట్',
      image: './images/indian_history/civilization_portraits/egypt_cleopatra.jpg',
      keyFeaturesEn: ['Founded by Alexander the Great in 331 BCE', 'Great Library of Alexandria (ancient center of learning)', 'Pharos Lighthouse (Ancient Wonder)', 'Seat of Queen Cleopatra VII'],
      keyFeaturesTe: ['క్రీ.పూ. 331లో అలెగ్జాండర్ చేత స్థాపించబడింది', 'జగత్ప్రసిద్ధ అలెగ్జాండ్రియా గ్రంథాలయం', 'ఫారోస్ లైట్‌హౌస్ (ప్రపంచ వింత)', 'రాణి క్లియోపాత్రా రాజధాని నగరం']
    }
  ],
  declineAndLegacy: {
    declineEn: [
      'Internal political fragmentation and costly military campaigns.',
      'Invasions and occupations by Libyans, Nubians, and Assyrians.',
      'Persian conquest of Egypt in 525 BCE by Cambyses II.',
      'Final Hellenistic rule under Ptolemies, culminating in Cleopatra VII’s defeat by Rome in 30 BCE.'
    ],
    declineTe: [
      'అంతర్గత రాజకీయ బలహీనతలు మరియు ఖరీదైన యుద్ధాలు.',
      'లిబియన్లు, నూబియన్లు మరియు అస్సీరియన్ల వరుస దండయాత్రలు.',
      'క్రీ.పూ. 525లో పర్షియన్ల దండయాత్ర.',
      'క్రీ.పూ. 30లో రాణి క్లియోపాత్రా ఓటమితో రోమన్ సామ్రాజ్యంలో ఈజిప్ట్ శాశ్వతంగా విలీనం కావడం.'
    ],
    legacyEn: [
      'The 365-day solar calendar became the direct ancestor of the Julian and modern Gregorian calendars.',
      'Monumental stone architecture, column hypostyle halls, and obelisks influenced Mediterranean civilization.',
      'Papyrus paper technology revolutionized human record-keeping and literacy across the ancient world.'
    ],
    legacyTe: [
      'ఈజిప్షియన్ల 365 రోజుల సౌర క్యాలెండర్ నేటి ఆధునిక గ్రెగోరియన్ క్యాలెండర్‌కు ప్రత్యక్ష పునాదిగా నిలిచింది.',
      'రాతి స్తంభాల హాల్స్, స్థూపాలు (ఒబెలిస్క్స్) మరియు పిరమిడ్ వాస్తుశిల్పం ప్రపంచవ్యాప్తంగా ప్రసిద్ధి చెందాయి.',
      'పాపిరస్ కాగితం తయారీ ప్రాచీన ప్రపంచంలో మానవ రాత, గ్రంథాల భద్రతలో విప్లవాత్మక మార్పు తెచ్చింది.'
    ]
  },
  quickRevision: [
    { labelEn: 'River / Lifeline', labelTe: 'జీవనది', valueEn: 'River Nile ("Gift of the Nile")', valueTe: 'నైలు నది ("వరప్రసాదం")' },
    { labelEn: 'Supreme Ruler', labelTe: 'పాలకులు', valueEn: 'Pharaoh (Considered a living god)', valueTe: 'ఫారో (దైవ సమానుడైన చక్రవర్తి)' },
    { labelEn: 'Writing System', labelTe: 'లిపి & కాగితం', valueEn: 'Hieroglyphics on Papyrus scrolls', valueTe: 'పాపిరస్ కాగితంపై హైరోగ్లిఫిక్స్ లిపి' },
    { labelEn: 'Great Inventions', labelTe: 'ప్రధాన ఆవిష్కరణలు', valueEn: '365-Day Solar Calendar, Geometry, Medicine', valueTe: '365 రోజుల సౌర క్యాలెండర్, రేఖాగణితం, శస్త్రచికిత్స' },
    { labelEn: 'Iconic Monuments', labelTe: 'ప్రసిద్ధ కట్టడాలు', valueEn: 'Pyramids of Giza & The Great Sphinx', valueTe: 'గిజా మహా పిరమిడ్ & స్ఫింక్స్ విగ్రహం' },
    { labelEn: 'Sacred Ritual', labelTe: 'పవిత్ర ఆచారం', valueEn: 'Mummification & Burial with Treasures', valueTe: 'మమ్మీకరణ & పరలోక నిధుల భద్రత' }
  ]
};

// 4. COMPARATIVE MATRIX (సింధు vs మెసపటోమియా vs ఈజిప్ట్ తులనాత్మక పట్టిక)
export interface CivilizationComparisonRow {
  aspectEn: string;
  aspectTe: string;
  indusEn: string;
  indusTe: string;
  mesoEn: string;
  mesoTe: string;
  egyptEn: string;
  egyptTe: string;
}

export const CIVILIZATIONS_COMPARISON_MATRIX: CivilizationComparisonRow[] = [
  {
    aspectEn: 'River / Lifeline',
    aspectTe: 'జీవనది & పరీవాహక ప్రాంతం',
    indusEn: 'Indus (Sindhu) and Saraswati (Ghaggar-Hakra)',
    indusTe: 'సింధు మరియు సరస్వతి (ఘగ్గర్-హాక్రా) నదులు',
    mesoEn: 'Tigris and Euphrates (Fertile Crescent)',
    mesoTe: 'టైగ్రిస్ మరియు యూఫ్రటీస్ (సారవంతమైన నెలవంక)',
    egyptEn: 'River Nile (Gift of the Nile)',
    egyptTe: 'నైలు నది ("నైలు నది వరప్రసాదం")'
  },
  {
    aspectEn: 'Peak Historical Period',
    aspectTe: 'చారిత్రక కాలం (స్వర్ణ యుగం)',
    indusEn: 'c. 2600 – 1900 BCE (Urban Mature Harappan)',
    indusTe: 'క్రీ.పూ. 2600 – 1900 (పరిపక్వ నగర దశ)',
    mesoEn: 'c. 3500 – 539 BCE (Sumer, Akkad, Babylon, Assyria)',
    mesoTe: 'క్రీ.పూ. 3500 – 539 (సుమేర్, బాబిలోన్, అస్సీరియా)',
    egyptEn: 'c. 3100 – 30 BCE (Old, Middle, New Kingdoms)',
    egyptTe: 'క్రీ.పూ. 3100 – 30 (పాత, మధ్య, కొత్త సామ్రాజ్యాలు)'
  },
  {
    aspectEn: 'Writing Script & Medium',
    aspectTe: 'రాత లిపి & మాధ్యమం',
    indusEn: 'Indus Script (Pictographic, undeciphered; on steatite seals)',
    indusTe: 'సింధు చిత్రలిపి (ఇంకా అస్పష్టమైనది; రాతి ముద్రలు, రాగి రేకులు)',
    mesoEn: 'Cuneiform (Wedge-shaped script; on soft clay tablets)',
    mesoTe: 'క్యూనిఫామ్ (బంకమట్టి పలకలపై చీలిక లిపి)',
    egyptEn: 'Hieroglyphics (Sacred carvings) & Hieratic on Papyrus reed paper',
    egyptTe: 'హైరోగ్లిఫిక్స్ (చిత్రలిపి) & పాపిరస్ కాగితపు చుట్టలు'
  },
  {
    aspectEn: 'Signature Architecture',
    aspectTe: 'ప్రత్యేక వాస్తుశిల్ప నిర్మాణాలు',
    indusEn: 'The Great Bath, Tidal Dockyard (Lothal), Grid cities with sewers',
    indusTe: 'మహా స్నానవాటిక, లోథాల్ ఓడరేవు, గ్రిడ్ నగరాలు & భూగర్భ డ్రైనేజీ',
    mesoEn: 'Stepped Ziggurat temple towers, Ishtar Gate, Hanging Gardens',
    mesoTe: 'మెట్ల జిగ్గురాత్ గోపురాలు, ఇష్తార్ ద్వారం, బాబిలోన్ వేలాడే తోటలు',
    egyptEn: 'Monumental stone Pyramids, Great Sphinx, Hypostyle temple halls',
    egyptTe: 'గిజా రాతి పిరమిడ్‌లు, స్ఫింక్స్ విగ్రహం, రాతి స్తంభాల కర్నాక్ దేవాలయాలు'
  },
  {
    aspectEn: 'Building Materials',
    aspectTe: 'నిర్మాణ సామాగ్రి',
    indusEn: 'Standardized Kiln-baked Bricks (1:2:4 ratio), gypsum mortar',
    indusTe: 'ప్రామాణిక కాల్చిన ఇటుకలు (1:2:4 నిష్పత్తి), జిప్సమ్ మోర్టార్',
    mesoEn: 'Sun-dried mudbricks, bitumen mortar, glazed decorative tiles',
    mesoTe: 'ఎండబెట్టిన మట్టి ఇటుకలు, సహజ తారు, మెరిసే పింగాణీ టైల్స్',
    egyptEn: 'Massive quarried limestone & granite blocks, mudbrick for homes',
    egyptTe: 'భారీ సున్నపురాయి, గ్రానైట్ రాతి దిమ్మలు; ఇళ్ల కోసం మట్టి ఇటుకలు'
  },
  {
    aspectEn: 'Government & Ruler',
    aspectTe: 'పరిపాలనా వ్యవస్థ & పాలకులు',
    indusEn: 'Civic Merchant Councils / Oligarchy; no royal tombs or palaces found',
    indusTe: 'పౌర వర్తక మండళ్లు / శాంతియుత పాలన; రాజభవనాలు, సమాధులు లేవు',
    mesoEn: 'Priest-Kings (Ensi) & Military Monarchs (Lugal); city-state rivalry',
    mesoTe: 'పూజారి-రాజులు మరియు చక్రవర్తులు; స్వతంత్ర నగర-రాజ్యాల పాలన',
    egyptEn: 'Pharaoh (Divine autocratic monarch; considered living god Horus)',
    egyptTe: 'ఫారో (దైవాంశసంభూతుడైన చక్రవర్తి; హోరస్ దేవుని జీవద్స్వరూపం)'
  },
  {
    aspectEn: 'Mathematics & Science',
    aspectTe: 'గణితం & విజ్ఞాన శాస్త్రాలు',
    indusEn: 'Binary weight ratio (1,2,4,8,16..), precision rulers, metallurgy',
    indusTe: 'ద్వియాంశ బరువులు (1,2,4,8,16..), దంతపు స్కేల్స్, కంచు శిల్ప కళ',
    mesoEn: 'Sexagesimal (Base 60) system, 360° circle, 60s/60m, wheel & plow',
    mesoTe: '60 ఆధారిత గణితం, 360 డిగ్రీల వృత్తం, గంటకు 60 నిమిషాలు, చక్రం & నాగలి',
    egyptEn: '365-day solar calendar, practical geometry for surveying, surgery',
    egyptTe: '365 రోజుల సౌర క్యాలెండర్, సర్వేయింగ్ రేఖాగణితం, శస్త్రచికిత్స'
  },
  {
    aspectEn: 'Religion & Afterlife Beliefs',
    aspectTe: 'మతం & మరణానంతర ఆచారాలు',
    indusEn: 'Pashupati (Proto-Shiva), Mother Goddess, Peepal tree, ritual baths',
    indusTe: 'పశుపతి (ఆది శివుడు), మాతృదేవత, రావి చెట్టు, పవిత్ర స్నానాలు',
    mesoEn: 'Polytheism (Anu, Enlil, Ishtar); gloomy underworld (Kur)',
    mesoTe: 'బహుదేవతారాధన (అను, ఎన్లిల్, ఇష్తార్); చీకటి పాతాళ లోక నమ్మకం',
    egyptEn: 'Polytheism (Ra, Osiris, Isis, Anubis); elaborate Mummification & Book of Dead',
    egyptTe: 'బహుదేవతారాధన (రా, ఒసిరిస్, ఐసిస్); మమ్మీకరణ & అమరత్వ పరలోక నమ్మకం'
  },
  {
    aspectEn: 'Connectivity & Mutual Trade',
    aspectTe: 'పరస్పర వాణిజ్య సంబంధాలు',
    indusEn: 'Maritime exporter to Mesopotamia ("Meluha"): carnelian, lapis, cotton',
    indusTe: 'మెసపటోమియాకు ("మెలూహా") రత్న పూసలు, పత్తి, దంతం, కలప ఎగుమతి',
    mesoEn: 'Imported Indian carnelian & timber; traded textiles and grains',
    mesoTe: 'భారతీయ రత్న పూసలు, నాణ్యమైన కలప దిగుమతి; వస్త్రాల ఎగుమతి',
    egyptEn: 'Trade networks via Red Sea and Sinai for copper, incense, and gold',
    egyptTe: 'ఎర్ర సముద్రం, సినాయ్ ద్వారా బంగారం, ధూపం, రాగి అంతర్జాతీయ వర్తకం'
  },
  {
    aspectEn: 'Primary Cause of Decline',
    aspectTe: 'క్షీణతకు ప్రధాన కారణాలు',
    indusEn: 'Climate shifts, drying of Saraswati river, eastward migration',
    indusTe: 'వాతావరణ మార్పులు, సరస్వతీ నది అంతర్ధానం, గంగా మైదానాలకు వలస',
    mesoEn: 'Severe soil salinization from irrigation, civil strife, Persian invasion',
    mesoTe: 'భూమిలో ఉప్పు పెరిగిపోవడం, అంతర్యుద్ధాలు, పర్షియన్ల దండయాత్ర',
    egyptEn: 'Internal corruption, foreign invasions (Assyrian, Persian, Roman)',
    egyptTe: 'అంతర్గత కుమ్ములాటలు, అస్సీరియన్, పర్షియన్, రోమన్ దండయాత్రలు'
  }
];


// =========================================================================
// SOURCE POSTER OVERVIEW SUMMARY: 10 ANCIENT CIVILIZATIONS
// "Different places. Unique people. Timeless legacies."
// =========================================================================
export interface SourceCivilizationSummary {
  id: string;
  nameEn: string;
  nameTe: string;
  subtitleEn: string;
  subtitleTe: string;
  summaryEn: string;
  summaryTe: string;
  knownForEn: string[];
  knownForTe: string[];
  landscapeImage: string;
  artifactImage: string;
  cardImage: string;
  accentColor: string;
  icon: string;
}

export const TEN_ANCIENT_CIVILIZATIONS_SUMMARY: SourceCivilizationSummary[] = [
  {
    id: 'mesopotamia',
    nameEn: 'Mesopotamia',
    nameTe: 'మెసపటోమియా',
    subtitleEn: 'The Cradle of Civilization',
    subtitleTe: 'నాగరికతల ఉయ్యాల',
    summaryEn: 'Between the Tigris and Euphrates rivers, people built the first cities and wrote the first stories.',
    summaryTe: 'టైగ్రిస్ మరియు యూఫ్రటీస్ నదుల మధ్య మానవాళి తొలి నగరాలను నిర్మించి, తొలి కథలను లిఖించింది.',
    knownForEn: ['Cuneiform Writing', 'Code of Hammurabi', 'Ziggurats'],
    knownForTe: ['క్యూనిఫామ్ లిపి', 'హమ్మురాబి చట్టాలు', 'జిగ్గురాత్ గోపురాలు'],
    landscapeImage: './images/indian_history/civilization_portraits/meso_ziggurat_cityscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/meso_hammurabi_stele.jpg',
    cardImage: './images/indian_history/civilization_portraits/meso_famous_places_banner.jpg',
    accentColor: '#B7791F',
    icon: '🏛️'
  },
  {
    id: 'egypt',
    nameEn: 'Egypt',
    nameTe: 'ప్రాచీన ఈజిప్ట్',
    subtitleEn: 'Gifts of the Nile',
    subtitleTe: 'నైలు నది వరప్రసాదం',
    summaryEn: 'Along the life-giving Nile, Egyptians built wonders and honored their gods and pharaohs.',
    summaryTe: 'జీవనది నైలు తీరాన అద్భుత కట్టడాలను నిర్మించి, తమ దేవుళ్లను మరియు ఫారోలను పూజించారు.',
    knownForEn: ['Pyramids', 'Hieroglyphics', 'Mummification'],
    knownForTe: ['గిజా పిరమిడ్‌లు', 'హైరోగ్లిఫిక్ చిత్రలిపి', 'మమ్మీకరణ & అమరత్వం'],
    landscapeImage: './images/indian_history/civilization_portraits/egypt_pyramids_top.jpg',
    artifactImage: './images/indian_history/civilization_portraits/egypt_tutankhamun_mask.jpg',
    cardImage: './images/indian_history/civilization_portraits/egypt_mummification.jpg',
    accentColor: '#C05621',
    icon: '🔺'
  },
  {
    id: 'indus_valley',
    nameEn: 'Indus Valley',
    nameTe: 'సింధు లోయ (హరప్పా)',
    subtitleEn: 'Innovators of the Indus',
    subtitleTe: 'సింధు తీరపు విప్లవాత్మక ఆవిష్కర్తలు',
    summaryEn: 'Planned cities, advanced plumbing, and trade made the Indus Valley truly ahead of its time.',
    summaryTe: 'ప్రణాళికాబద్ధ నగరాలు, అధునాతన భూగర్భ డ్రైనేజీ మరియు వాణిజ్యంతో తమ కాలానికంటే ఎంతో ముందంజలో నిలిచింది.',
    knownForEn: ['City Planning', 'Drainage Systems', 'Seals & Trade'],
    knownForTe: ['గ్రిడ్ నగర ప్రణాళిక', 'డ్రైనేజ్ వ్యవస్థ', 'ముద్రలు & అంతర్జాతీయ వాణిజ్యం'],
    landscapeImage: './images/indian_history/civilization_portraits/ivc_banner_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/ivc_unicorn_seal.jpg',
    cardImage: './images/indian_history/civilization_portraits/ivc_great_bath.jpg',
    accentColor: '#2B6CB0',
    icon: '🏺'
  },
  {
    id: 'china',
    nameEn: 'China (Shang)',
    nameTe: 'చైనా (షాంగ్ రాజవంశం)',
    subtitleEn: 'Builders of Dynasties',
    subtitleTe: 'రాజవంశాల మహోన్నత నిర్మాతలు',
    summaryEn: 'The Shang ruled with bronze, built early writing, and laid the foundation for thousands of years of Chinese history.',
    summaryTe: 'కాంస్య లోహ శాస్త్రం, ఒరాకిల్ ఎముకలపై తొలి లిపితో వేలాది ఏళ్ల చైనా సామ్రాజ్య చరిత్రకు పునాది వేసింది.',
    knownForEn: ['Oracle Bones (Early Writing)', 'Bronze Casting', 'Ancestor Worship'],
    knownForTe: ['ఒరాకిల్ ఎముకల లిపి', 'కాంస్య పాత్రల తయారీ', 'పూర్వీకుల ఆరాధన'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_china_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_china_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_china_card.jpg',
    accentColor: '#9B2C2C',
    icon: '🐉'
  },
  {
    id: 'greece',
    nameEn: 'Greece',
    nameTe: 'ప్రాచీన గ్రీస్',
    subtitleEn: 'The Birthplace of Ideas',
    subtitleTe: 'ఆలోచనలు, ప్రజాస్వామ్యం & తత్వశాస్త్ర జన్మభూమి',
    summaryEn: 'Greeks questioned, created, and competed—giving the world ideas that still inspire us today.',
    summaryTe: 'ప్రశ్నించడం, సృష్టించడం, పోటీతత్వంతో నేటికీ ప్రపంచాన్ని ప్రభావితం చేసే ప్రజాస్వామ్యం, తత్వశాస్త్రాన్ని అందించింది.',
    knownForEn: ['Democracy', 'Philosophy', 'The Olympics'],
    knownForTe: ['ప్రజాస్వామ్యం (డెమోక్రసీ)', 'తత్వశాస్త్రం (సోక్రటీస్, ప్లేటో)', 'ఒలింపిక్ క్రీడలు'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_greece_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_greece_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_greece_card.jpg',
    accentColor: '#2C5282',
    icon: '🏛️'
  },
  {
    id: 'rome',
    nameEn: 'Rome',
    nameTe: 'ప్రాచీన రోమ్',
    subtitleEn: 'Builders of an Empire',
    subtitleTe: 'ప్రపంచ మహా సామ్రాజ్య నిర్మాతలు',
    summaryEn: 'From a small city to a vast empire, Rome built roads, laws, and a legacy that shaped the world.',
    summaryTe: 'చిన్న నగరం నుండి విస్తారమైన సామ్రాజ్యంగా ఎదిగి రాతి రోడ్లు, న్యాయ సూత్రాలు, ఇంజనీరింగ్‌తో ప్రపంచాన్ని తీర్చిదిద్దింది.',
    knownForEn: ['Roman Law', 'Engineering (Roads, Aqueducts)', 'Republic to Empire'],
    knownForTe: ['రోమన్ న్యాయ చట్టాలు', 'ఇంజనీరింగ్ (అక్విడక్ట్స్, రోడ్లు)', 'గణతంత్రం నుండి సామ్రాజ్యం'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_rome_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_rome_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_rome_card.jpg',
    accentColor: '#7B1113',
    icon: '⚔️'
  },
  {
    id: 'persia',
    nameEn: 'Persia',
    nameTe: 'ప్రాచీన పర్షియా (అకెమెనిడ్)',
    subtitleEn: 'United by the King',
    subtitleTe: 'మహా చక్రవర్తి సైరస్ ఆధ్వర్యంలో ఐక్య సామ్రాజ్యం',
    summaryEn: "Persia's strong leaders built a vast empire known for its tolerance, art, and amazing royal roads.",
    summaryTe: 'మత, సాంస్కృతిక సహనం, అద్భుత శిల్పకళ మరియు రాచరిక రహదారుల నెట్‌వర్క్‌తో మహా సామ్రాజ్యాన్ని నిర్మించింది.',
    knownForEn: ['Cyrus the Great', 'Royal Road', 'Tolerance of Cultures'],
    knownForTe: ['సైరస్ ది గ్రేట్', 'రాయల్ రోడ్ & తపాలా వ్యవస్థ', 'వివిధ సంస్కృతుల పట్ల సహనం'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_persia_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_persia_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_persia_card.jpg',
    accentColor: '#744210',
    icon: '🦅'
  },
  {
    id: 'maya',
    nameEn: 'Maya',
    nameTe: 'మాయా నాగరికత',
    subtitleEn: 'Masters of Time and the Stars',
    subtitleTe: 'సమయం, నక్షత్రాలు & ఖగోళ శాస్త్ర దిగ్గజాలు',
    summaryEn: 'The Maya built cities in the jungle, tracked the stars, and created one of the most advanced calendars.',
    summaryTe: 'దట్టమైన అడవుల్లో మహానగరాలను నిర్మించి, నక్షత్రాల గతులను లెక్కించి అత్యంత ఖచ్చితమైన క్యాలెండర్‌ను రూపొందించింది.',
    knownForEn: ['Astronomical Calendar', 'Hieroglyphic Writing', 'Pyramids & Temples'],
    knownForTe: ['సౌర క్యాలెండర్', 'మాయన్ చిత్రలిపి', 'అడవుల్లో మెట్ల పిరమిడ్లు'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_maya_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_maya_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_maya_card.jpg',
    accentColor: '#234E52',
    icon: '☀️'
  },
  {
    id: 'inca',
    nameEn: 'Inca',
    nameTe: 'ఇంకా సామ్రాజ్యం',
    subtitleEn: 'Builders of the Andes',
    subtitleTe: 'ఆకాశాన్నంటే అండీస్ పర్వతాల నిర్మాతలు',
    summaryEn: 'High in the Andes, the Inca built a mighty empire connected by roads, terraces, and teamwork.',
    summaryTe: 'ఎత్తైన అండీస్ పర్వతాలలో రాతి రహదారులు, అంచెల మెట్ల వ్యవసాయం మరియు ఉమ్మడి శ్రమతో శక్తివంతమైన సామ్రాజ్యాన్ని నిర్మించింది.',
    knownForEn: ['Road System (Qhapaq Ñan)', 'Terrace Farming', 'Community & Quipus'],
    knownForTe: ['పర్వత రహదారుల వ్యవస్థ', 'మెట్ల వ్యవసాయం (టెర్రస్ ఫార్మింగ్)', 'కిపుస్ దారాల రికార్డులు'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_inca_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_inca_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_inca_card.jpg',
    accentColor: '#285E61',
    icon: '🏔️'
  },
  {
    id: 'indigenous_americas',
    nameEn: 'Indigenous Civilizations of the Americas',
    nameTe: 'అమెరికా స్థానిక ప్రాచీన సంస్కృతులు',
    subtitleEn: 'Deep Roots, Rich Cultures',
    subtitleTe: 'ప్రకృతితో మమేకమైన ప్రాచీన జీవనం',
    summaryEn: 'Long before Europeans arrived, many cultures thrived across the Americas with deep traditions and knowledge.',
    summaryTe: 'యూరోపియన్ల రాకకు శతాబ్దాల ముందే అమెరికా వ్యాప్తంగా ప్రకృతితో సామరస్యంగా జీవిస్తూ సమృద్ధ సంస్కృతులను వికసింపజేసింది.',
    knownForEn: ['Farming & Innovation (Three Sisters)', 'Art & Storytelling', 'Respect for Nature'],
    knownForTe: ['మొక్కజొన్న వ్యవసాయం & ఆవిష్కరణలు', 'చిత్రకళ & కథా సాంప్రదాయం', 'భూమాత & ప్రకృతి పట్ల గౌరవం'],
    landscapeImage: './images/indian_history/civilization_portraits/civ_indigenous_landscape.jpg',
    artifactImage: './images/indian_history/civilization_portraits/civ_indigenous_artifact.jpg',
    cardImage: './images/indian_history/civilization_portraits/civ_indigenous_card.jpg',
    accentColor: '#702459',
    icon: '🪶'
  }
];

// 4. CHINA (SHANG DYNASTY) DEEP DIVE
export const CHINA_SHANG_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_china_map.jpg',
  id: 'china',
  nameEn: 'Ancient China (Shang Dynasty)',
  nameTe: 'ప్రాచీన చైనా నాగరికత (షాంగ్ రాజవంశం)',
  subtitleEn: 'Builders of Dynasties: Bronze Metallurgy, Oracle Bones & Yellow River (c. 1600 – 1046 BCE)',
  subtitleTe: 'రాజవంశాల నిర్మాతలు: కాంస్య లోహకళ, ఒరాకిల్ ఎముకల లిపి & పసుపు నది వైభవం (క్రీ.పూ. 1600 – 1046)',
  periodEn: 'c. 1600 – 1046 BCE (Shang Dynasty)',
  periodTe: 'క్రీ.పూ. 1600 – 1046 (షాంగ్ రాజవంశం)',
  riverEn: 'Yellow River (Huang He) and Yangtze River',
  riverTe: 'పసుపు నది (హువాంగ్ హే) మరియు యాంగ్జీ నది',
  geographyEn: 'Centred in the fertile North China Plain along the Yellow River basin, modern Henan, Hebei, and Shandong provinces.',
  geographyTe: 'సారవంతమైన ఉత్తర చైనా మైదానంలో పసుపు నదీ పరీవాహక ప్రాంతంలో (ప్రస్తుత హెనాన్, హెబీ ప్రావిన్సులు) విలసిల్లింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_china_landscape.jpg',
  overviewEn: 'The Shang Dynasty marked the dawn of Chinese historical record-keeping with oracle bones script, monumental bronze casting, walled administrative capitals like Anyang, and profound ancestor worship.',
  overviewTe: 'షాంగ్ రాజవంశం ఎముకలపై తొలి చిత్రలిపి రాతలతో చైనా లిఖిత చరిత్రకు నాంది పలికింది. కాంస్య త్రిపాద పాత్రల నిర్మాణం, ప్రాకార నగరాలు మరియు పూర్వీకుల పూజకు ప్రసిద్ధి చెందింది.',
  timelinePhases: [
    {
      periodEn: 'Erligang Phase',
      periodTe: 'ఎర్లిగాంగ్ తొలి దశ',
      datesEn: 'c. 1600 – 1400 BCE',
      datesTe: 'క్రీ.పూ. 1600 – 1400',
      descEn: 'Expansion of walled cities (Zhengzhou) and early standardized bronze vessel production.',
      descTe: 'భారీ ప్రాకార నగరాల నిర్మాణం మరియు కాంస్య పాత్రల ప్రామాణిక తయారీ ప్రారంభం.'
    },
    {
      periodEn: 'Anyang / Yinxu Golden Age',
      periodTe: 'అన్యాంగ్ / యిన్ క్షు స్వర్ణయుగం',
      datesEn: 'c. 1400 – 1046 BCE',
      datesTe: 'క్రీ.పూ. 1400 – 1046',
      descEn: 'Capital at Anyang (Yin); prolific oracle bone divination, royal tombs of Lady Fu Hao, and climax of bronze art.',
      descTe: 'అన్యాంగ్ రాజధానిగా వేలాది ఒరాకిల్ ఎముకలపై లిపి నమోదు, లేడీ ఫు హావో రాచరిక సమాధి మరియు కాంస్య శిల్పకళా పరాకాష్ట.'
    }
  ],
  societyAndCulture: {
    titleEn: 'King, Nobility & Ancestor Reverence',
    titleTe: 'చక్రవర్తి, ప్రభువులు & పూర్వీకుల పూజ',
    image: './images/indian_history/civilization_portraits/civ_china_card.jpg',
    pointsEn: [
      'The King (Wang) was the supreme military commander and chief high priest connecting earth with heaven.',
      'Aristocratic warrior nobility held hereditary land estates and provided charioteers for defense.',
      'Ancestor Worship: Believed ancestors wielded power over weather, harvest, health, and imperial fortune.'
    ],
    pointsTe: [
      'చక్రవర్తి (వాంగ్) సర్వ సైన్యాధ్యక్షుడిగా మరియు భూమిని స్వర్గాన్ని కలిపే ప్రధాన పూజారిగా పరిపాలించాడు.',
      'యుద్ధ రథాలను నడిపే కులీన ప్రభువులు భూములను పొంది రాజ్యంలో శాంతిభద్రతలు కాపాడేవారు.',
      'పూర్వీకుల ఆరాధన: పూర్వీకుల ఆత్మలు పంటలు, వర్షాలు, ఆరోగ్యం మరియు రాజవంశ అదృష్టాన్ని నిర్దేశిస్తాయని విశ్వసించారు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Millet Agriculture & Silk Production',
    titleTe: 'మిల్లెట్ వ్యవసాయం & పట్టు ఉత్పత్తి',
    pointsEn: [
      'Grew foxtail millet, wheat, barley, and rice in the loess soils of the Yellow River.',
      'Early Sericulture: Domesticated silkworms (Bombyx mori) producing fine silk textiles.',
      'Extensive trade using cowrie shells as an early currency medium.'
    ],
    pointsTe: [
      'పసుపు నది ఒండ్రు మట్టిలో చిరుధాన్యాలు (మిల్లెట్), గోధుమలు, బార్లీ మరియు వరి సమృద్ధిగా సాగు చేశారు.',
      'పట్టు పరిశ్రమ (సెరికల్చర్): పట్టు పురుగులను పెంచి మేలైన పట్టు వస్త్రాల తయారీని ప్రారంభించారు.',
      'కౌరీ గవ్వలను ప్రాథమిక మారక ద్రవ్యంగా ఉపయోగించి సుదూర వర్తకం సాగించారు.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Oracle Bones Writing & Master Bronze Metallurgy',
    titleTe: 'ఒరాకిల్ ఎముకల లిపి & కాంస్య లోహ శాస్త్రం',
    image: './images/indian_history/civilization_portraits/civ_china_artifact.jpg',
    pointsEn: [
      'Oracle Bone Inscriptions: Glyphs carved on turtle plastrons and ox shoulder blades—the direct ancestor of modern Chinese Hanzi characters.',
      'Piece-Mold Bronze Casting: Advanced metallurgical techniques crafting monumental ding tripods and ritual wine vessels.',
      'Astronomical Lunar Calendar with leap intercalary months.'
    ],
    pointsTe: [
      'ఒరాకిల్ ఎముకల లిపి: తాబేలు పెంకులు, ఎద్దు భుజపు ఎముకలపై చెక్కిన చిత్రలిపి — ఆధునిక చైనీస్ అక్షరాలకు ఇది ప్రత్యక్ష మూలం.',
      'పీస్-మోల్డ్ కాంస్య పోత: విశిష్ట లోహ శాస్త్రంతో బలిష్టమైన త్రిపాద డింగ్ పాత్రలు మరియు దైవిక పాత్రల తయారీ.',
      'సౌర-చాంద్రమాన క్యాలెండర్ మరియు గ్రహణాల ఖగోళ పరిశీలన.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Shangdi Supreme Deity & Royal Divination',
    titleTe: 'షాంగ్డీ పరమ దైవం & జ్యోతిష విధానం',
    pointsEn: [
      'Shangdi was revered as the supreme transcendent god who ruled supreme over nature and dynasties.',
      'Diviners applied heated metal rods to oracle bones and interpreted the resulting stress cracks as divine answers.'
    ],
    pointsTe: [
      'షాంగ్డీ (స్వర్గాధిపతి) ప్రకృతి శక్తులను, విశ్వాన్ని నడిపించే అత్యున్నత దైవంగా పూజింపబడ్డాడు.',
      'వేడి రాడ్లతో ఎముకలపై పగుళ్లు సృష్టించి, భవిష్యత్ యుద్ధాలు, వర్షాల ఫలితాలను అంచనా వేసేవారు.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'anyang',
      nameEn: 'Yinxu (Anyang)',
      nameTe: 'యిన్ క్షు (అన్యాంగ్ రాజధాని)',
      locationEn: 'Henan Province, China',
      locationTe: 'హెనాన్ ప్రావిన్స్, చైనా',
      image: './images/indian_history/civilization_portraits/civ_china_landscape.jpg',
      keyFeaturesEn: ['Capital of late Shang dynasty', 'Over 150,000 oracle bones discovered', 'Tomb of Lady Fu Hao intact with bronze treasures'],
      keyFeaturesTe: ['షాంగ్ రాజవంశపు ప్రధాన రాజధాని', '1,50,000కి పైగా ఒరాకిల్ ఎముకల లిపి పలకలు లభ్యం', 'యోధురాలైన రాణి ఫు హావో సమాధి']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Corrupt reign of last king Di Xin led to uprising by King Wu of Zhou at Battle of Muye (1046 BCE).'],
    declineTe: ['చివరి రాజు డి జిన్ దుర్మార్గ పాలన వల్ల జౌ వంశపు వూ రాజు చేతిలో ముయే యుద్ధంలో (క్రీ.పూ. 1046) ఓటమి.'],
    legacyEn: ['Created the continuous logographic Chinese writing system and established imperial dynastic rule.'],
    legacyTe: ['నేటికీ వాడుకలో ఉన్న చైనీస్ లిపికి శాశ్వత పునాది వేసింది మరియు రాజవంశ సంప్రదాయాన్ని స్థాపించింది.']
  },
  quickRevision: [
    { labelEn: 'Rivers', labelTe: 'నదులు', valueEn: 'Yellow River (Huang He) & Yangtze', valueTe: 'పసుపు నది & యాంగ్జీ' },
    { labelEn: 'Signature Inventions', labelTe: 'ప్రధాన ఘనత', valueEn: 'Oracle Bone Script & Bronze Ding', valueTe: 'ఒరాకిల్ ఎముకల లిపి & కాంస్య పాత్రలు' }
  ]
};

// 5. ANCIENT GREECE DEEP DIVE
export const GREECE_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_greece_map.jpg',
  id: 'greece',
  nameEn: 'Ancient Greece',
  nameTe: 'ప్రాచీన గ్రీస్ నాగరికత',
  subtitleEn: 'The Birthplace of Ideas: Democracy, Philosophy, Parthenon & The Olympics (c. 800 – 146 BCE)',
  subtitleTe: 'ప్రజాస్వామ్యం, తత్వశాస్త్రం, పార్థినన్ & ఒలింపిక్స్ జన్మస్థలి (క్రీ.పూ. 800 – 146)',
  periodEn: 'c. 800 – 146 BCE (Archaic, Classical & Hellenistic Eras)',
  periodTe: 'క్రీ.పూ. 800 – 146 (క్లాసికల్ & హెలెనిస్టిక్ యుగాలు)',
  riverEn: 'Aegean, Ionian & Mediterranean Seas',
  riverTe: 'ఏజియన్ మరియు మధ్యధరా సముద్ర తీరం',
  geographyEn: 'Mountainous Greek peninsula, Peloponnese, hundreds of Aegean islands, and coastal colonies across the Mediterranean.',
  geographyTe: 'పర్వతాలతో కూడిన గ్రీక్ ద్వీపకల్పం, పెలోపొన్నీస్ మరియు ఏజియన్ సముద్ర ద్వీపాలలో స్వతంత్ర నగర-రాజ్యాలుగా ఏర్పడింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_greece_landscape.jpg',
  overviewEn: 'Ancient Greece gave the world direct democracy in Athens, immortal philosophy from Socrates, Plato, and Aristotle, epic Homeric literature, theatrical tragedy, the Olympic Games, and monumental marble architecture like the Parthenon.',
  overviewTe: 'ప్రాచీన గ్రీస్ ప్రపంచానికి ప్రజాస్వామ్య వ్యవస్థను, సోక్రటీస్-ప్లేటో-అరిస్టాటిల్ తత్వశాస్త్రాన్ని, హోమర్ మహాకావ్యాలను, నాటక రంగాన్ని, ఒలింపిక్ క్రీడలను మరియు పార్థినన్ వంటి అద్భుత పాలరాతి కట్టడాలను అందించింది.',
  timelinePhases: [
    {
      periodEn: 'Archaic Period',
      periodTe: 'ఆర్కాయిక్ కాలం',
      datesEn: 'c. 800 – 500 BCE',
      datesTe: 'క్రీ.పూ. 800 – 500',
      descEn: 'Rise of poleis (city-states), first Olympic Games (776 BCE), Homer composes Iliad and Odyssey.',
      descTe: 'నగర-రాజ్యాల (పోలీస్) ఆవిర్భావం, క్రీ.పూ. 776లో తొలి ఒలింపిక్ క్రీడలు, హోమర్ కావ్యాల రచన.'
    },
    {
      periodEn: 'Classical Golden Age',
      periodTe: 'శాస్త్రీయ స్వర్ణయుగం',
      datesEn: 'c. 500 – 323 BCE',
      datesTe: 'క్రీ.పూ. 500 – 323',
      descEn: 'Athenian democracy under Pericles; Persian Wars victory; building of Parthenon; age of Socrates, Plato, Aristotle; conquests of Alexander the Great.',
      descTe: 'ఏథెన్స్ ప్రజాస్వామ్యం; పర్షియన్లపై విజయం; పార్థినన్ నిర్మాణం; సోక్రటీస్-ప్లేటో-అరిస్టాటిల్ తత్వశాస్త్రం; అలెగ్జాండర్ దండయాత్రలు.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Polis (City-States), Democracy & The Olympics',
    titleTe: 'నగర-రాజ్యాలు, ప్రజాస్వామ్యం & ఒలింపిక్స్',
    image: './images/indian_history/civilization_portraits/civ_greece_card.jpg',
    pointsEn: [
      'Independent Poleis: Fiercely independent city-states, famously democratic Athens and militaristic Sparta.',
      'Birth of Direct Democracy: Citizens voted directly on laws, foreign policy, and trials in the Athenian Assembly (Ekklesia).',
      'The Olympic Games: Founded in 776 BCE at Olympia to honor Zeus, uniting all Greek states in athletic peace.'
    ],
    pointsTe: [
      'స్వతంత్ర నగర-రాజ్యాలు: ప్రజాస్వామ్య సంస్కృతి గల ఏథెన్స్ మరియు సైనిక క్రమశిక్షణ కలిగిన స్పార్టా ప్రధాన నగరాలు.',
      'ప్రత్యక్ష ప్రజాస్వామ్యం: చట్టాలు, యుద్ధ విధానాలపై పౌరులందరూ నేరుగా అసెంబ్లీలో ఓటు వేసే ప్రజాస్వామ్య వ్యవస్థ.',
      'ఒలింపిక్ క్రీడలు: క్రీ.పూ. 776లో జ్యూస్ దేవుని గౌరవార్థం ప్రారంభమై ప్రతి 4 ఏళ్లకు నగర-రాజ్యాల మధ్య శాంతియుత క్రీడా పోటీలు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Maritime Trade, Olive Oil & Wine',
    titleTe: 'సముద్ర వాణిజ్యం, ఆలివ్ నూనె & ద్రాక్ష సారాయి',
    pointsEn: [
      'Seafaring merchants traded olive oil, wine, and pottery for grains, timber, and metals across the Mediterranean.',
      'Standardized silver coinage (Athenian "Owl" drachmas) became the international trade currency.'
    ],
    pointsTe: [
      'మధ్యధరా సముద్రం వెంట ఆలివ్ నూనె, ద్రాక్ష సారాయి, కుండల ఎగుమతి మరియు ధాన్యం, లోహాల దిగుమతి.',
      'ఏథెన్స్ ముద్రించిన వెండి "గుడ్లగూబ" డ్రాచ్మా నాణాలు ప్రాచీన అంతర్జాతీయ మారక ద్రవ్యంగా చలామణి అయ్యాయి.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Philosophy, Mathematics & Theatrical Arts',
    titleTe: 'తత్వశాస్త్రం, గణితం & రంగస్థల నాటకాలు',
    image: './images/indian_history/civilization_portraits/civ_greece_artifact.jpg',
    pointsEn: [
      'Trio of Philosophy: Socrates (critical questioning), Plato (The Republic & Academy), Aristotle (logic, biology, politics).',
      'Mathematics & Science: Pythagoras (geometry), Euclid (Elements), Archimedes (calculus, levers, buoyancy).',
      'Birth of Drama: Aeschylus, Sophocles, and Euripides invented tragedy and comedy in open-air stone amphitheaters.'
    ],
    pointsTe: [
      'తత్వశాస్త్ర త్రిమూర్తులు: సోక్రటీస్ (ప్రశ్నించే పద్ధతి), ప్లేటో (ది రిపబ్లిక్), అరిస్టాటిల్ (తర్కం, శాస్త్రాలు).',
      'గణితం & భౌతిక శాస్త్రం: పైథాగరస్ సిద్ధాంతం, యూక్లిడ్ రేఖాగణితం, ఆర్కిమెడిస్ సూత్రాలు.',
      'నాటక రంగం: రాతి యాంఫిథియేటర్లలో విషాదాంత (ట్రాజెడీ), హాస్య నాటకాల ఆవిష్కరణ.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Olympian Gods & Mythological Epics',
    titleTe: 'ఒలింపియన్ దేవతలు & పౌరాణిక కావ్యాలు',
    pointsEn: [
      'Twelve Olympian Deities: Zeus (sky/thunder king), Hera, Poseidon (seas), Athena (wisdom & patron of Athens), Apollo, and Ares.',
      'Oracle of Delphi: High priestess Pythia delivered enigmatic prophecies believed to come directly from Apollo.'
    ],
    pointsTe: [
      '12 మంది ఒలింపియన్ దేవతలు: జ్యూస్ (దేవతల రాజు), పోసిడాన్ (సముద్ర దేవుడు), ఎథీనా (జ్ఞాన దేవత), అపోలో (సూర్య దేవుడు).',
      'డెల్ఫీ జ్యోతిషం: అపోలో దేవుని ఆదేశాలుగా నమ్మిన డెల్ఫీ పూజారిణి ప్రవచనాల ఆధారంగా యుద్ధాలు, రాజకీయ నిర్ణయాలు.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'athens_acropolis',
      nameEn: 'Athens & The Acropolis',
      nameTe: 'ఏథెన్స్ & అక్రోపోలిస్',
      locationEn: 'Attica, Greece',
      locationTe: 'అట్టికా, గ్రీస్',
      image: './images/indian_history/civilization_portraits/civ_greece_landscape.jpg',
      keyFeaturesEn: ['Parthenon temple dedicated to Athena', 'Theater of Dionysus', 'Cradle of Western democracy'],
      keyFeaturesTe: ['ఎథీనా దేవి కొరకు నిర్మించిన పార్థినన్ దేవాలయం', 'డయోనిసస్ నాటక రంగస్థలం', 'పాశ్చాత్య ప్రజాస్వామ్య రాజధాని']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Peloponnesian War between Athens and Sparta exhausted Greek strength, paving the way for Macedonian and Roman conquest (146 BCE).'],
    declineTe: ['ఏథెన్స్-స్పార్టా మధ్య జరిగిన అంతర్యుద్ధాలు (పెలోపొన్నీసియన్ యుద్ధాలు) గ్రీస్‌ను బలహీనపరిచి రోమన్ల ఆక్రమణకు దారితీశాయి.'],
    legacyEn: ['Foundations of modern democracy, scientific method, Western philosophy, and competitive Olympic sports.'],
    legacyTe: ['ఆధునిక ప్రజాస్వామ్యం, శాస్త్రీయ దృక్పథం, పాశ్చాత్య తత్వశాస్త్రం మరియు ప్రపంచ ఒలింపిక్ క్రీడలకు గ్రీస్ జన్మభూమి.']
  },
  quickRevision: [
    { labelEn: 'Geography', labelTe: 'భౌగోళికం', valueEn: 'Mediterranean & Aegean Seas', valueTe: 'మధ్యధరా & ఏజియన్ సముద్రాలు' },
    { labelEn: 'Key Contributions', labelTe: 'ప్రధాన ఘనత', valueEn: 'Democracy, Philosophy & The Olympics', valueTe: 'ప్రజాస్వామ్యం, తత్వశాస్త్రం & ఒలింపిక్స్' }
  ]
};

// 6. ANCIENT ROME DEEP DIVE
export const ROME_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_rome_map.jpg',
  id: 'rome',
  nameEn: 'Ancient Rome',
  nameTe: 'ప్రాచీన రోమన్ నాగరికత & సామ్రాజ్యం',
  subtitleEn: 'Builders of an Empire: Roman Law, Colosseum, Aqueducts & Pax Romana (c. 753 BCE – 476 CE)',
  subtitleTe: 'ప్రపంచ మహా సామ్రాజ్య నిర్మాతలు: రోమన్ చట్టాలు, కొలోసియం, రోడ్లు & అక్విడక్ట్‌లు (క్రీ.పూ. 753 – క్రీ.శ. 476)',
  periodEn: 'c. 753 BCE – 476 CE (Kingdom, Republic & Imperial Empire)',
  periodTe: 'క్రీ.పూ. 753 – క్రీ.శ. 476 (రాజరికం, రిపబ్లిక్ & మహా సామ్రాజ్యం)',
  riverEn: 'Tiber River (Italy) and Mediterranean Basin ("Mare Nostrum")',
  riverTe: 'టైబర్ నది (ఇటలీ) మరియు మధ్యధరా సముద్రం',
  geographyEn: 'Originating on the seven hills of Rome beside the Tiber River, expanding to encompass all of southern Europe, Britain, North Africa, and the Near East.',
  geographyTe: 'ఇటలీలోని రోమ్ నగర ఏడు కొండలపై ఆరంభమై ఐరోపా, బ్రిటన్, ఉత్తర ఆఫ్రికా మరియు మధ్యప్రాచ్యం వరకు వ్యాపించింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_rome_landscape.jpg',
  overviewEn: 'From a humble settlement on the Tiber, Rome built a legendary legal code (Twelve Tables), colossal concrete architectural marvels (the Colosseum, Pantheon, Aqueducts), and an empire that governed over 50 million people.',
  overviewTe: 'రోమ్ మానవాళికి న్యాయ సూత్రాలు, కాంక్రీట్ ఆర్చ్ వాస్తుశిల్పం, కొలోసియం, వేలాది కిలోమీటర్ల రాతి రహదారులు మరియు విస్తారమైన ప్రజాపరిపాలనా వ్యవస్థను అందించింది.',
  timelinePhases: [
    {
      periodEn: 'The Roman Republic',
      periodTe: 'రోమన్ రిపబ్లిక్ కాలం',
      datesEn: '509 – 27 BCE',
      datesTe: 'క్రీ.పూ. 509 – 27',
      descEn: 'Ruled by elected Consuls and the Senate; expansion through Punic Wars defeating Carthage; rise and assassination of Julius Caesar.',
      descTe: 'సెనేట్ మరియు ఎన్నికైన కాన్సుల్స్ పాలన; కార్తేజ్‌పై విజయాలు; జూలియస్ సీజర్ ఎదుగుదల.'
    },
    {
      periodEn: 'The Roman Empire (Pax Romana)',
      periodTe: 'రోమన్ మహా సామ్రాజ్యం (స్వర్ణయుగం)',
      datesEn: '27 BCE – 476 CE',
      datesTe: 'క్రీ.పూ. 27 – క్రీ.శ. 476',
      descEn: 'Augustus becomes first Emperor; 200 years of imperial peace, extensive road networks, construction of the Colosseum and aqueducts.',
      descTe: 'అగస్టస్ తొలి చక్రవర్తి కావడం; 200 ఏళ్ల అంతర్గత శాంతి (పాక్స్ రొమానా); కొలోసియం, భారీ అక్విడక్ట్‌ల నిర్మాణం.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Patricians, Plebeians & Roman Law',
    titleTe: 'పాట్రీషియన్లు, ప్లెబియన్లు & రోమన్ చట్టాలు',
    image: './images/indian_history/civilization_portraits/civ_rome_card.jpg',
    pointsEn: [
      'Social Classes: Wealthy aristocratic Patricians and common citizen Plebeians.',
      'The Twelve Tables (450 BCE): First codified written public laws protecting citizen rights against arbitrary tyranny.',
      'Gladiatorial Games & Circus Maximus: Public mass spectacles of combat and chariot racing in monumental arenas.'
    ],
    pointsTe: [
      'సామాజిక వర్గాలు: ఉన్నత వర్గ ప్రభువులు (పాట్రీషియన్లు) మరియు సాధారణ పౌరులు (ప్లెబియన్లు).',
      'ట్వెల్వ్ టేబుల్స్ చట్టాలు: పౌర హక్కులను కాపాడటానికి బహిరంగంగా లిఖించిన తొలి రోమన్ న్యాయ సూత్రాలు.',
      'గ్లాడియేటర్ యుద్ధాలు & రథ పందేలు: కొలోసియం మరియు సర్కస్ మాక్సిమస్‌లలో నిర్వహించిన ప్రజా వినోదాలు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Roman Roads & Mediterranean Sea Commerce',
    titleTe: 'రోమన్ రాతి రహదారులు & మధ్యధరా వాణిజ్యం',
    pointsEn: [
      '"All Roads Lead to Rome": Over 80,000 kilometers of paved stone military and commercial superhighways.',
      'Trade with Ancient India: Imported silk, spices (black pepper), diamonds, and cotton from India in exchange for gold and wine.'
    ],
    pointsTe: [
      '"అన్ని దారులూ రోమ్‌కే": సైనిక మరియు వాణిజ్య రవాణా కోసం నిర్మించిన 80,000 కి.మీ.లకు పైగా పటిష్ట రాతి రహదారులు.',
      'ప్రాచీన భారతదేశంతో వాణిజ్యం: భారతదేశం నుండి నల్ల మిరియాలు, సుగంధ ద్రవ్యాలు, వజ్రాలు, పట్టు వస్త్రాలు దిగుమతి చేసుకుని బంగారాన్ని చెల్లించారు.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Architectural Concrete, Aqueducts & Arches',
    titleTe: 'కాంక్రీట్, అక్విడక్ట్‌లు & ఆర్చ్ ఇంజనీరింగ్',
    image: './images/indian_history/civilization_portraits/civ_rome_artifact.jpg',
    pointsEn: [
      'Volcanic Pozzolanic Concrete: Durable underwater-setting concrete that allowed the construction of the Pantheon’s unreinforced dome.',
      'Gravity-Fed Aqueducts: Elevated stone bridges carrying millions of gallons of freshwater to city public baths and fountains.',
      'The Julian Calendar: 365.25-day reformed calendar introduced by Julius Caesar in 45 BCE.'
    ],
    pointsTe: [
      'అగ్నిపర్వత కాంక్రీట్: నీటిలో కూడా దృఢంగా ఉండే కాంక్రీట్‌తో పాంథియాన్ గుమ్మటం, కొలోసియంల నిర్మాణం.',
      'నీటి అక్విడక్ట్‌లు: పర్వతాల నుండి నగరాలకు తాగునీటిని తెచ్చే భారీ రాతి వంతెనల కాలువలు.',
      'జూలియన్ క్యాలెండర్: జూలియస్ సీజర్ ప్రవేశపెట్టిన 365 రోజుల సౌర క్యాలెండర్ విధానం.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Roman Pantheon to Christianity',
    titleTe: 'దేవతా మండలి నుండి క్రైస్తవ మతం వరకు',
    pointsEn: [
      'Polytheistic pantheon headed by Jupiter (king of gods), Mars (god of war), Venus, and Apollo.',
      'Christianity emerged in Judea and became the official imperial state religion under Emperor Constantine (313 CE).'
    ],
    pointsTe: [
      'జ్యుపిటర్ (దేవతల రాజు), మార్స్ (యుద్ధ దేవుడు), వీనస్ దేవతల బహుదేవతారాధన.',
      'క్రీ.శ. 4వ శతాబ్దంలో చక్రవర్తి కాన్‌స్టాంటైన్ కాలంలో క్రైస్తవ మతం అధికారిక సామ్రాజ్య మతంగా మారింది.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'colosseum_rome',
      nameEn: 'The Colosseum (Flavian Amphitheatre)',
      nameTe: 'కొలోసియం (ఫ్లేవియన్ యాంఫిథియేటర్)',
      locationEn: 'Rome, Italy',
      locationTe: 'రోమ్ నగరం, ఇటలీ',
      image: './images/indian_history/civilization_portraits/civ_rome_landscape.jpg',
      keyFeaturesEn: ['Held over 50,000 spectators', 'Gladiatorial combats and naval mock battles', 'Engineering marvel of arches and vaults'],
      keyFeaturesTe: ['50,000 మంది కూర్చునే మహా రంగస్థలం', 'గ్లాడియేటర్ యుద్ధాలు', 'రోమన్ ఆర్చ్ ఇంజనీరింగ్ అద్భుతం']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Economic inflation, civil wars, division into Western and Eastern Empires, and Germanic barbarian migrations sacked Rome in 476 CE.'],
    declineTe: ['ఆర్థిక సంక్షోభం, అంతర్యుద్ధాలు మరియు జెర్మానిక్ తెగల దండయాత్రల వల్ల క్రీ.శ. 476లో పశ్చిమ రోమన్ సామ్రాజ్యం కూలిపోయింది.'],
    legacyEn: ['Civil Law systems, Latin roots in European languages, republican representative ideals, and concrete architecture.'],
    legacyTe: ['ఆధునిక న్యాయ వ్యవస్థలు, లాటిన్ భాషా మూలాలు, ప్రజాప్రతినిధి రిపబ్లిక్ విధానం మరియు వాస్తుశిల్ప కళలు.']
  },
  quickRevision: [
    { labelEn: 'Epoch', labelTe: 'కాలం', valueEn: '753 BCE – 476 CE', valueTe: 'క్రీ.పూ. 753 – క్రీ.శ. 476' },
    { labelEn: 'Hallmarks', labelTe: 'ప్రధాన ఘనత', valueEn: 'Roman Law, Colosseum, Aqueducts & Roads', valueTe: 'రోమన్ చట్టాలు, కొలోసియం, రోడ్లు & అక్విడక్ట్‌లు' }
  ]
};

// 7. PERSIAN EMPIRE DEEP DIVE
export const PERSIA_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_persia_map.jpg',
  id: 'persia',
  nameEn: 'Persian Empire (Achaemenid)',
  nameTe: 'ప్రాచీన పర్షియన్ సామ్రాజ్యం (అకెమెనిడ్)',
  subtitleEn: 'United by the King: Cyrus the Great, Royal Road & Persepolis (c. 550 – 330 BCE)',
  subtitleTe: 'మహా చక్రవర్తి సైరస్, రాయల్ రోడ్ & పెర్సెపోలిస్ వైభవం (క్రీ.పూ. 550 – 330)',
  periodEn: 'c. 550 – 330 BCE (Achaemenid Empire)',
  periodTe: 'క్రీ.పూ. 550 – 330 (అకెమెనిడ్ వంశం)',
  riverEn: 'Iranian Plateau, Tigris-Euphrates & Indus Valley border',
  riverTe: 'ఇరానియన్ పీఠభూమి, సింధు నది సరిహద్దు వరకు',
  geographyEn: 'The largest empire the ancient world had yet seen, spanning from the Indus River in India across Egypt, Babylon, and Anatolia to the borders of Greece.',
  geographyTe: 'ప్రాచీన ప్రపంచంలోనే అత్యంత విస్తారమైన సామ్రాజ్యం; భారతదేశపు సింధు లోయ నుండి ఈజిప్ట్, బాబిలోన్ మరియు గ్రీస్ సరిహద్దుల వరకు విస్తరించింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_persia_landscape.jpg',
  overviewEn: 'Founded by Cyrus the Great, the Achaemenid Persian Empire was celebrated for human rights tolerance, the Cyrus Cylinder, autonomous satrapy governorships, the 2,700-km Royal Road, and the grand stone palaces of Persepolis.',
  overviewTe: 'సైరస్ ది గ్రేట్ స్థాపించిన పర్షియన్ సామ్రాజ్యం మానవ హక్కుల సైరస్ సిలిండర్, విభిన్న మతాల పట్ల సహనం, సత్రప్ ప్రాంతీయ పరిపాలన, 2,700 కి.మీ.ల రాయల్ రోడ్ మరియు పెర్సెపోలిస్ రాతి మహళ్లకు ప్రసిద్ధి చెందింది.',
  timelinePhases: [
    {
      periodEn: 'Rise under Cyrus the Great',
      periodTe: 'సైరస్ ది గ్రేట్ ఆవిర్భావం',
      datesEn: '559 – 530 BCE',
      datesTe: 'క్రీ.పూ. 559 – 530',
      descEn: 'Cyrus conquers Media, Lydia, and Babylon; frees the Jewish people from captivity; issues the famous Cyrus Cylinder.',
      descTe: 'సైరస్ బాబిలోన్‌ను జయించి బానిసలుగా ఉన్న యూదులను విడుదల చేశాడు; తొలి మానవ హక్కుల సైరస్ సిలిండర్ జారీ చేశాడు.'
    },
    {
      periodEn: 'Zenith under Darius I & Xerxes',
      periodTe: 'మొదటి డారియస్ & జెర్క్సెస్ కాలం',
      datesEn: '522 – 465 BCE',
      datesTe: 'క్రీ.పూ. 522 – 465',
      descEn: 'Darius reorganizes 20 Satrapies; builds the Royal Road, standardized Daric gold coins, and the ceremonial capital Persepolis.',
      descTe: 'సామ్రాజ్యాన్ని 20 సత్రపీలుగా విభజన; రాయల్ రోడ్ నిర్మాణం, బంగారు డారిక్ నాణాలు మరియు పెర్సెపోలిస్ రాజధాని నిర్మాణం.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Imperial Satrapies & Cultural Tolerance',
    titleTe: 'సత్రపీల పరిపాలన & సంస్కృతుల సహనం',
    image: './images/indian_history/civilization_portraits/civ_persia_card.jpg',
    pointsEn: [
      'Provincial Satrapy System: Governed through regional governors (Satraps) supervised by imperial inspectors called "The King’s Eyes and Ears".',
      'The Cyrus Cylinder: Celebrated as the world’s first declaration of human rights, guaranteeing religious freedom and repatriation of displaced peoples.',
      'Elite Immortals: Feared core imperial guard of exactly 10,000 elite soldiers, always replaced immediately if fallen.'
    ],
    pointsTe: [
      'సత్రపీల వ్యవస్థ: 20 ప్రావిన్సులను సత్రప్‌లు పాలించేవారు; చక్రవర్తి పంపిన గూఢచారులు ("రాజు కళ్ళు మరియు చెవులు") పర్యవేక్షించేవారు.',
      'సైరస్ సిలిండర్: ప్రపంచ తొలి మానవ హక్కుల ప్రకటనగా ప్రసిద్ధి; మత స్వేచ్ఛను, స్థానిక సంప్రదాయాలను రక్షించింది.',
      'ఇమ్మోర్టల్స్ సైన్యం: ఎల్లప్పుడూ ఖచ్చితంగా 10,000 మందితో కూడిన అత్యున్నత రాచరిక అంగరక్షక సైన్యం.'
    ]
  },
  economyAndTrade: {
    titleEn: 'The Royal Road & Chapar Khaneh Postal Relay',
    titleTe: 'రాయల్ రోడ్ & చాపర్ ఖానా తపాలా వ్యవస్థ',
    pointsEn: [
      'The 2,700-Kilometer Royal Road: Connected Susa to Sardis with 111 postal relay stations.',
      'First Courier Postal System: Couriers changed horses at stations, delivering imperial decrees in 7 days across continents ("Neither snow, nor rain... stays these couriers").'
    ],
    pointsTe: [
      '2,700 కి.మీ.ల సుదీర్ఘ రాయల్ రోడ్: సూసా నుండి సార్డిస్ వరకు 111 విశ్రాంతి కేంద్రాలతో కూడిన ప్రపంచ తొలి హైవే.',
      'తొలి పోస్టల్ వ్యవస్థ: గుర్రపు స్వారీ చేసే దూతల ద్వారా 7 రోజుల్లోనే ఖండాల వ్యాప్తంగా రాజ ఆజ్ఞలను చేరవేసే అద్భుత వ్యవస్థ.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Qanat Subterranean Aqueducts & Persepolis Art',
    titleTe: 'ఖానాత్ భూగర్భ కాలువలు & పెర్సెపోలిస్ వాస్తు',
    image: './images/indian_history/civilization_portraits/civ_persia_artifact.jpg',
    pointsEn: [
      'Qanat Irrigation: Ingenious subterranean gently sloping channels bringing mountain aquifer water to desert settlements without evaporative loss.',
      'Apadana Palace at Persepolis: Majestic hypostyle audience hall supported by 72 seventy-foot marble columns topped with double-bull capitals.'
    ],
    pointsTe: [
      'ఖానాత్ భూగర్భ నీటిపారుదల: ఎడారిలో నీరు ఆవిరి కాకుండా పర్వతాల నుండి మైదానాలకు నీటిని తెచ్చే భూగర్భ కాలువల టెక్నాలజీ.',
      'పెర్సెపోలిస్ అపదాన హాల్: 72 భారీ పాలరాతి స్తంభాలతో ప్రపంచ దేశాల రాయబారులను ఆహ్వానించిన మహా సభామండపం.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Zoroastrianism & The Faravahar',
    titleTe: 'జొరాస్ట్రియన్ మతం & ఫరవహర్ చిహ్నం',
    pointsEn: [
      'Zoroastrianism: Ancient monotheistic/dualistic religion founded by prophet Zarathustra worshipping Ahura Mazda (Lord of Wisdom).',
      'The Faravahar: Sacred winged sun-disk motif symbolizing the guardian spirit and guiding human soul toward good thoughts, good words, and good deeds.'
    ],
    pointsTe: [
      'జొరాస్ట్రియన్ మతం: అహుర మజ్దా (జ్ఞాన దేవుడు)ను ఆరాధించే ప్రాచీన పవిత్ర అగ్ని ఆరాధనా ధర్మం.',
      'ఫరవహర్ రెక్కల చిహ్నం: మంచి ఆలోచనలు, మంచి మాటలు, మంచి పనుల ద్వారా ఆత్మ విముక్తిని సూచించే పవిత్ర చిహ్నం.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'persepolis',
      nameEn: 'Persepolis ("City of the Persians")',
      nameTe: 'పెర్సెపోలిస్',
      locationEn: 'Fars Province, Iran',
      locationTe: 'ఫార్స్ ప్రావిన్స్, ఇరాన్',
      image: './images/indian_history/civilization_portraits/civ_persia_landscape.jpg',
      keyFeaturesEn: ['Ceremonial capital built by Darius the Great', 'Gate of All Nations', 'Reliefs of 23 tributary nations offering gifts'],
      keyFeaturesTe: ['డారియస్ చక్రవర్తి నిర్మించిన ఉత్సవ రాజధాని', 'గేట్ ఆఫ్ ఆల్ నేషన్స్', '23 దేశాల రాయబారులు కానుకలు సమర్పించే రాతి శిల్పాలు']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Defeated by Alexander the Great in 330 BCE, who captured and burned Persepolis.'],
    declineTe: ['క్రీ.పూ. 330లో అలెగ్జాండర్ చేతిలో పరాజయం; పెర్సెపోలిస్ దహనం.'],
    legacyEn: ['Model for multicultural empire governance, early postal delivery, and underground irrigation engineering.'],
    legacyTe: ['వివిధ జాతులను ఐక్యంగా పాలించే విధానం, పోస్టల్ వ్యవస్థ మరియు మానవ హక్కుల స్పృహ.']
  },
  quickRevision: [
    { labelEn: 'Key Ruler', labelTe: 'మహా చక్రవర్తి', valueEn: 'Cyrus the Great & Darius I', valueTe: 'సైరస్ ది గ్రేట్ & మొదటి డారియస్' },
    { labelEn: 'Hallmarks', labelTe: 'ప్రత్యేకత', valueEn: 'Cyrus Cylinder, Royal Road & Persepolis', valueTe: 'సైరస్ సిలిండర్, రాయల్ రోడ్ & పెర్సెపోలిస్' }
  ]
};

// 8. MAYA CIVILIZATION DEEP DIVE
export const MAYA_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_maya_map.jpg',
  id: 'maya',
  nameEn: 'Maya Civilization',
  nameTe: 'మాయా నాగరికత (మెసోఅమెరికా)',
  subtitleEn: 'Masters of Time and the Stars: Hieroglyphics, Step Pyramids & Astronomy (c. 2000 BCE – 1500 CE)',
  subtitleTe: 'సమయం & నక్షత్రాల దిగ్గజాలు: ఖగోళ క్యాలెండర్, అడవుల్లో మెట్ల పిరమిడ్లు (క్రీ.పూ. 2000 – క్రీ.శ. 1500)',
  periodEn: 'c. 2000 BCE – 1500 CE (Classic Peak: 250 – 900 CE)',
  periodTe: 'క్రీ.పూ. 2000 – క్రీ.శ. 1500 (స్వర్ణయుగం: క్రీ.శ. 250 – 900)',
  riverEn: 'Usumacinta River & Cenotes (Rainforest Mesoamerica)',
  riverTe: 'ఉసుమాసింటా నది మరియు సహజ సున్నపురాయి బావులు (సెనోట్స్)',
  geographyEn: 'Spanned southeastern Mexico (Yucatán Peninsula, Chiapas), Guatemala, Belize, and western parts of Honduras and El Salvador.',
  geographyTe: 'మధ్య అమెరికాలోని దట్టమైన ఉష్ణమండల అడవులలో (యుకటాన్ ద్వీపకల్పం, గ్వాటెమాలా, బెలిజ్) విలసిల్లింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_maya_landscape.jpg',
  overviewEn: 'Deep in the Central American rainforests, the Maya built soaring limestone stepped pyramids (Tikal, Chichen Itza), mapped planetary orbits with uncanny accuracy, invented the mathematical zero independently, and wrote in intricate hieroglyphic glyphs.',
  overviewTe: 'మధ్య అమెరికా అడవులలో ఆకాశాన్నంటే రాతి మెట్ల పిరమిడ్‌లను నిర్మించి, గ్రహాల గతులను ఖచ్చితంగా లెక్కించి, సున్నాను స్వతంత్రంగా ఆవిష్కరించిన అద్భుత నాగరికత.',
  timelinePhases: [
    {
      periodEn: 'Preclassic Maya',
      periodTe: 'తొలి మాయా కాలం',
      datesEn: 'c. 2000 BCE – 250 CE',
      datesTe: 'క్రీ.పూ. 2000 – క్రీ.శ. 250',
      descEn: 'Early agricultural villages, monumental architecture at El Mirador, early hieroglyphs.',
      descTe: 'వ్యవసాయ గ్రామాలు, ఎల్ మిరాడోర్ భారీ కట్టడాలు మరియు తొలి చిత్రలిపి ఆవిర్భావం.'
    },
    {
      periodEn: 'Classic Period (Golden Zenith)',
      periodTe: 'క్లాసిక్ స్వర్ణయుగం',
      datesEn: 'c. 250 – 900 CE',
      datesTe: 'క్రీ.శ. 250 – 900',
      descEn: 'Dozens of thriving city-states (Tikal, Calakmul, Palenque, Copán); master astronomical tracking; apex of art and stele inscriptions.',
      descTe: 'టికాల్, పలెంక్వే వంటి డజన్ల కొద్దీ నగర-రాజ్యాల వెలుగు; ఖగోళ పరిశోధనలు మరియు శిల్పకళా పరాకాష్ట.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Divine Kings (K’uhul Ajaw) & The Sacred Ballgame',
    titleTe: 'దైవ సమాన రాజులు & పవిత్ర బంతి ఆట (పోక్-ఎ-టోక్)',
    image: './images/indian_history/civilization_portraits/civ_maya_card.jpg',
    pointsEn: [
      'Independent City-States: Ruled by holy kings (K’uhul Ajaw) who acted as mediators between mortals and the cosmos.',
      'Pok-a-tok Sacred Ballgame: Ritual contest bouncing heavy solid rubber balls through high stone hoops without using hands.',
      'Scribes & Nobles: Literate scribal elite carved monumental stone stelae documenting dynastic lineages.'
    ],
    pointsTe: [
      'స్వతంత్ర నగర-రాజ్యాలు: దైవ సమానులైన రాజులు (అజావ్) విశ్వానికి, ప్రజలకు మధ్య వారధులుగా పాలించేవారు.',
      'పోక్-ఎ-టోక్ బంతి ఆట: చేతులు ఉపయోగించకుండా శరీర భాగాలతో రబ్బరు బంతిని రాతి వలయాల్లోకి వేసే పవిత్ర క్రీడ.',
      'రచయితలు & శిల్పులు: రాతి స్తంభాలపై (స్టేలా) రాజుల వంశవృక్షాలను, ఖగోళ లెక్కలను చిత్రలిపిలో చెక్కేవారు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Milpa Agriculture, Cacao Currency & Jade',
    titleTe: 'మిల్పా వ్యవసాయం, కొకోవా మారక ద్రవ్యం & జేడ్ రత్నాలు',
    pointsEn: [
      'Raised-field & Terrace Agriculture: Cultivated maize (corn), beans, squash, and chili peppers.',
      'Cacao Beans as Money: Cocoa seeds were treasured so highly they functioned as universal commercial currency.',
      'Extensive overland and coastal canoe trade routes exchanging jade, quetzal feathers, and obsidian volcanic glass.'
    ],
    pointsTe: [
      'టెర్రస్ & ఎత్తైన పంట భూములు: మొక్కజొన్న, బీన్స్, గుమ్మడి మరియు మిరపకాయల సాగు.',
      'కొకోవా గింజలే కరెన్సీ: చాక్లెట్ తయారయ్యే కొకోవా గింజలను అత్యంత విలువైన మారక ద్రవ్యంగా వాడేవారు.',
      'జేడ్ రత్నాలు, పచ్చటి క్విట్జల్ పక్షుల ఈకలు మరియు పదునైన అబ్సిడియన్ అగ్నిపర్వత గాజుల వ్యాపారం.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Advanced Calendars, Concept of Zero & Astronomy',
    titleTe: 'ఖగోళ క్యాలెండర్లు, సున్నా ఆవిష్కరణ & ఖగోళం',
    image: './images/indian_history/civilization_portraits/civ_maya_artifact.jpg',
    pointsEn: [
      "The Long Count & Calendar Round: Interlocking cycles of the 365-day solar year (Haab') and 260-day sacred almanac (Tzolk'in).",
      'Independent Invention of Zero: Positional base-20 (vigesimal) mathematics utilizing a shell glyph for zero centuries before Europe.',
      'Astronomical Observatories: Caracol observatory at Chichen Itza aligned with the cycles of planet Venus and solar equinoxes.'
    ],
    pointsTe: [
      'లాంగ్ కౌంట్ క్యాలెండర్: 365 రోజుల సౌర క్యాలెండర్ మరియు 260 రోజుల పవిత్ర చక్రాల సమన్వయం.',
      'సున్నా ఆవిష్కరణ: ఐరోపా కంటే శతాబ్దాల ముందే శంఖం గుర్తుతో సున్నాను 20-ఆధారిత గణితంలో ఉపయోగించారు.',
      'ఖగోళ వేధశాలలు: శుక్ర గ్రహం (వీనస్) గతులను, సూర్య గ్రహణాలను లెక్కించడానికి కారకోల్ అబ్జర్వేటరీల నిర్మాణం.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Cosmic Order, Cenotes & Feathered Serpent Kukulkan',
    titleTe: 'విశ్వ క్రమం, పవిత్ర సెనోట్స్ & కుకుల్కాన్ సర్ప దేవుడు',
    pointsEn: [
      'Kukulkan (Quetzalcoatl): Feathered serpent deity associated with wind, rain, and resurrection.',
      'Cenotes: Natural limestone sinkholes revered as sacred portals to Xibalba (the underworld).'
    ],
    pointsTe: [
      'కుకుల్కాన్: వర్షాలు, గాలికి అధిపతియైన ఈకలు గల దివ్య సర్ప దేవుడు.',
      'పవిత్ర సెనోట్స్: భూగర్భ సున్నపురాయి బావులను పాతాళ లోక ప్రవేశ ద్వారాలుగా భావించి పూజలు నిర్వహించారు.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'chichen_itza',
      nameEn: 'Chichen Itza & El Castillo',
      nameTe: 'చిచెన్ ఇట్జా & ఎల్ కాస్టిల్లో పిరమిడ్',
      locationEn: 'Yucatán, Mexico',
      locationTe: 'యుకటాన్, మెక్సికో',
      image: './images/indian_history/civilization_portraits/civ_maya_landscape.jpg',
      keyFeaturesEn: ['El Castillo 365-stepped pyramid', 'Equinox shadow illusion resembling a descending serpent', 'Great Ball Court'],
      keyFeaturesTe: ['365 మెట్ల ఎల్ కాస్టిల్లో పిరమిడ్', 'విషువత్తు రోజున సర్పం దిగివస్తున్నట్లు కనిపించే నీడల అద్భుతం', 'మహా బంతి ఆట మైదానం']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Prolonged severe megadroughts and environmental overexploitation led to the abandonment of major southern cities around 900 CE.'],
    declineTe: ['తీవ్ర వర్షాభావం, కరువు కాటకాలు మరియు అంతర్గత యుద్ధాల వల్ల క్రీ.శ. 900 నాటికి దక్షిణ నగరాలు అడవుల్లో కలిసిపోయాయి.'],
    legacyEn: ['High architectural mastery, mathematical zero, and living indigenous Maya communities across Guatemala and Mexico.'],
    legacyTe: ['ఖగోళ శాస్త్రం, గణితంలో సున్నా, మరియు నేటికీ గ్వాటెమాలా, మెక్సికోలలో నివసిస్తున్న 60 లక్షల మాయా వారసులు.']
  },
  quickRevision: [
    { labelEn: 'Location', labelTe: 'ప్రాంతం', valueEn: 'Mesoamerica (Mexico & Guatemala)', valueTe: 'మెసోఅమెరికా (మెక్సికో & గ్వాటెమాలా)' },
    { labelEn: 'Key Marvels', labelTe: 'విశేషాలు', valueEn: 'Calendar, Concept of Zero & Step Pyramids', valueTe: 'క్యాలెండర్, సున్నా ఆవిష్కరణ & మెట్ల పిరమిడ్లు' }
  ]
};

// 9. INCA CIVILIZATION DEEP DIVE
export const INCA_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_inca_map.jpg',
  id: 'inca',
  nameEn: 'Inca Empire (Tawantinsuyu)',
  nameTe: 'ఇంకా సామ్రాజ్యం (తవాంతిన్‌సుయు)',
  subtitleEn: 'Builders of the Andes: Machu Picchu, Qhapaq Ñan Roads & Terrace Farming (c. 1438 – 1533 CE)',
  subtitleTe: 'అండీస్ పర్వతాల నిర్మాతలు: మాచూ పిచ్చూ, 40,000 కి.మీ.ల రోడ్లు & మెట్ల వ్యవసాయం (క్రీ.శ. 1438 – 1533)',
  periodEn: 'c. 1438 – 1533 CE (The Four United Regions)',
  periodTe: 'క్రీ.శ. 1438 – 1533 (నాలుగు దిక్కుల ఐక్య సామ్రాజ్యం)',
  riverEn: 'Urubamba River & Sacred Valley of the Andes',
  riverTe: 'ఉరుబాంబ నది మరియు అండీస్ పర్వత పవిత్ర లోయ',
  geographyEn: 'Stretching nearly 4,000 kilometers along the spine of the high Andes Mountains, encompassing modern Peru, western Bolivia, Ecuador, and northern Chile.',
  geographyTe: 'దక్షిణ అమెరికాలోని అండీస్ పర్వత శ్రేణుల వెంట పెరూ, బొలీవియా, ఈక్వెడార్, చిలీల వరకు 4,000 కి.మీ. విస్తరించింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_inca_landscape.jpg',
  overviewEn: 'The Inca forged the largest empire in pre-Columbian America high in the clouds of the Andes, connecting rugged mountains through the 40,000-km Qhapaq Ñan highway, earthquake-proof mortarless stone masonry, and quipus accounting cords without writing.',
  overviewTe: 'అండీస్ పర్వత శిఖరాలపై నిర్మితమైన మాచూ పిచ్చూ, సిమెంట్ లేకుండా రాళ్లను చెక్కి నిర్మించిన భూకంప నిరోధక భవనాలు, 40,000 కి.మీ.ల రాతి రహదారులు మరియు కిపుస్ దారాల గణాంకాలతో అద్భుత సామ్రాజ్యాన్ని నెలకొల్పింది.',
  timelinePhases: [
    {
      periodEn: 'Rise under Pachacuti',
      periodTe: 'పచాకుటి చక్రవర్తి ఎదుగుదల',
      datesEn: '1438 – 1471 CE',
      datesTe: 'క్రీ.శ. 1438 – 1471',
      descEn: 'Pachacuti transforms Cusco into imperial capital; commissions construction of Machu Picchu; establishes Tawantinsuyu.',
      descTe: 'కుస్కో రాజధానిగా మాచూ పిచ్చూ కోట నిర్మాణం; నాలుగు దిక్కులను కలుపుతూ తవాంతిన్‌సుయు సామ్రాజ్య స్థాపన.'
    },
    {
      periodEn: 'Imperial Climax & Spanish Conquest',
      periodTe: 'సామ్రాజ్య పరాకాష్ట & స్పానిష్ ఆక్రమణ',
      datesEn: '1471 – 1533 CE',
      datesTe: 'క్రీ.శ. 1471 – 1533',
      descEn: 'Empire doubles under Topa Inca; succession war between brothers Atahualpa and Huáscar; conquest by Francisco Pizarro in 1533 CE.',
      descTe: 'అతాహువాల్పా కాలంలో అంతర్యుద్ధం; క్రీ.శ. 1533లో స్పానిష్ సైన్యాధ్యక్షుడు పిజారో చేతిలో సామ్రాజ్య పతనం.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Ayllu Community, Mita Labor & Sapa Inca',
    titleTe: 'ఐల్లు సమాజం, మితా ఉమ్మడి శ్రమ & సాపా ఇంకా',
    image: './images/indian_history/civilization_portraits/civ_inca_card.jpg',
    pointsEn: [
      'Sapa Inca: Absolute emperor revered as the living son of Inti (the Sun god).',
      'The Ayllu Community: Kinship groups collectively owning land and farming together.',
      'The Mita System: Mandatory public service labor system where every citizen contributed time to building roads, terraces, and forts in lieu of taxes.'
    ],
    pointsTe: [
      'సాపా ఇంకా: సూర్య భగవానుడైన ఇంకీ దేవుని పుత్రుడిగా పూజించబడిన చక్రవర్తి.',
      'ఐల్లు సమాజం: భూములను ఉమ్మడిగా పంచుకుని పంటలు పండించే కుటుంబ సమూహాలు.',
      'మితా ఉమ్మడి శ్రమ: పన్నులకు బదులుగా ప్రతి పౌరుడూ రాతి రోడ్లు, ఆనకట్టలు, కోటల నిర్మాణంలో పాల్గొనే సమాజ శ్రమదాన విధానం.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Terrace Farming, Potatoes & Llama Caravans',
    titleTe: 'అంచెల మెట్ల వ్యవసాయం, బంగాళాదుంపలు & లామాలు',
    pointsEn: [
      'Terraced Agriculture (Andenes): Carved mountain slopes into stair-stepped terraces retaining heat and preventing erosion.',
      'Potato & Quinoa Capital: Domesticated over 3,000 varieties of potatoes, quinoa, and maize.',
      "Llama and Alpaca Caravans transported goods, prized wool, and dried meats (ch'arki)."
    ],
    pointsTe: [
      'మెట్ల వ్యవసాయం (ఆండెన్స్): పర్వత వాలులను సోపానాలుగా మలిచి నేల కోతను ఆపి పంటలు పండించే టెక్నాలజీ.',
      '3,000 రకాల బంగాళాదుంపలు: నేడు ప్రపంచం తినే బంగాళాదుంపలు, క్వినోవా ధాన్యం, మొక్కజొన్నల ప్రాథమిక సాగు.',
      'లామా మరియు అల్పాకా జంతువులతో వస్త్రాల ఉన్ని మరియు సరుకుల రవాణా.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'The Qhapaq Ñan Road System & Quipu Cords',
    titleTe: 'కాపాక్ న్యాన్ రాతి రహదారులు & కిపుస్ రికార్డింగ్',
    image: './images/indian_history/civilization_portraits/civ_inca_artifact.jpg',
    pointsEn: [
      '40,000-km Qhapaq Ñan Highway: Stone-paved road network traversing snow-capped Andean peaks and suspended grass-rope bridges.',
      'Chasqui Runners: Relay messenger runners carrying oral dispatches and quipus up to 240 kilometers in a single day.',
      'Quipu Accounting: Knotted, color-coded strings recording census data, tax inventories, and historical records without written script.'
    ],
    pointsTe: [
      '40,000 కి.మీ.ల రాతి రహదారులు: హిమ శిఖరాలను, లోయలను కలుపుతూ గడ్డి తాళ్లతో వేలాడే వంతెనల అద్భుత నిర్మాణం.',
      'చాస్కీ రన్నర్స్: రోజుకు 240 కి.మీ. దూరం వేగంగా పరుగెత్తి సమాచారాన్ని చేరవేసే దూతల వ్యవస్థ.',
      'కిపుస్ ముడుల రికార్డులు: అక్షర లిపి లేకుండానే రంగుల దారాలపై వేసే ముడులతో జనాభా, ధాన్యం నిల్వలను లెక్కించిన గణాంక విధానం.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Inti the Sun God & Pachamama Earth Mother',
    titleTe: 'ఇంటీ సూర్య భగవానుడు & పచమామ భూమాత',
    pointsEn: [
      'Inti (Sun God): Supreme solar deity celebrated during the annual winter solstice Inti Raymi festival.',
      'Pachamama (Mother Earth): Goddess of fertility, harvesting, and sacred mountain peaks (Apus).'
    ],
    pointsTe: [
      'ఇంటీ (సూర్య దేవుడు): సామ్రాజ్య ప్రధాన దైవం; ప్రతి ఏటా నిర్వహించే ఇంకీ రాయిమి సూర్య ఉత్సవం.',
      'పచమామ (భూమాత): ప్రకృతికి, పంటలకు ప్రాణం పోసే పవిత్ర తల్లిగా ఆరాధన.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'machu_picchu',
      nameEn: 'Machu Picchu (Citadel in the Clouds)',
      nameTe: 'మాచూ పిచ్చూ (మేఘాల నగర కోట)',
      locationEn: 'Cusco Region, Peru (2,430 meters altitude)',
      locationTe: 'కుస్కో ప్రాంతం, పెరూ (సముద్ర మట్టానికి 2,430 మీ. ఎత్తున)',
      image: './images/indian_history/civilization_portraits/civ_inca_landscape.jpg',
      keyFeaturesEn: ['Built by Emperor Pachacuti c. 1450 CE', 'Dry-stone mortarless masonry fitting together seamlessly', 'UNESCO World Wonder'],
      keyFeaturesTe: ['క్రీ.శ. 1450లో నిర్మించిన అండీస్ పర్వతాల రాతి నగరం', 'సిమెంట్ లేకుండా ఒకదానికొకటి బిగుసుకునే రాతి శిల్ప చాతుర్యం', 'ప్రపంచ వింతలలో ఒకటి']
    }
  ],
  declineAndLegacy: {
    declineEn: ['European smallpox epidemic devastated the population; Spanish conquistador Francisco Pizarro ambushed Emperor Atahualpa in 1532 CE.'],
    declineTe: ['యూరోపియన్ల ద్వారా వ్యాపించిన వ్యాధులు మరియు క్రీ.శ. 1532లో స్పానిష్ సేనాని పిజారో కుట్రతో సామ్రాజ్య విధ్వంసం.'],
    legacyEn: ['Terrace farming resilience, potato domestication, and millions of Quechua-speaking descendants living in the Andes.'],
    legacyTe: ['పర్వత మెట్ల వ్యవసాయం, బంగాళాదుంపలు మరియు నేటికీ పెరూ, బొలీవియాలలో నివసిస్తున్న కోట్ల మంది క్వెచువా ప్రజలు.']
  },
  quickRevision: [
    { labelEn: 'Geography', labelTe: 'భౌగోళికం', valueEn: 'Andes Mountains, South America', valueTe: 'అండీస్ పర్వతాలు, దక్షిణ అమెరికా' },
    { labelEn: 'Signature Feats', labelTe: 'విశేషాలు', valueEn: 'Machu Picchu, 40,000km Roads & Quipu', valueTe: 'మాచూ పిచ్చూ, 40,000 కి.మీ.ల రోడ్లు & కిపుస్' }
  ]
};

// 10. INDIGENOUS CIVILIZATIONS OF THE AMERICAS DEEP DIVE
export const INDIGENOUS_AMERICAS_CIVILIZATION: CivilizationData = {
  mapImage: './images/indian_history/civilization_portraits/civ_indigenous_map.jpg',
  id: 'indigenous_americas',
  nameEn: 'Indigenous Civilizations of the Americas',
  nameTe: 'అమెరికా ఖండపు స్థానిక ప్రాచీన సంస్కృతులు',
  subtitleEn: 'Deep Roots, Rich Cultures: Cliff Dwellings, Three Sisters Farming & Earth Mounds (c. 1000 BCE – 1500 CE)',
  subtitleTe: 'ప్రకృతితో మమేకమైన జీవనం: క్లిఫ్ డ్వెల్లింగ్స్, త్రీ సిస్టర్స్ వ్యవసాయం & మట్టి స్థూపాలు',
  periodEn: 'c. 1000 BCE – 1500 CE (Pueblo, Mississippian, Mound Builders)',
  periodTe: 'క్రీ.పూ. 1000 – క్రీ.శ. 1500 (ప్యూబ్లో, మిస్సిసిప్పియన్ నాగరికతలు)',
  riverEn: 'Mississippi, Colorado & Rio Grande River Basins',
  riverTe: 'మిస్సిసిప్పి, కొలరాడో మరియు రియో గ్రాండే నదుల పరీవాహకం',
  geographyEn: 'Thrived across North America: the canyon cliff dwellings of the Southwest (Mesa Verde, Chaco), the giant earth mounds of the Mississippi (Cahokia), and Plains woodlands.',
  geographyTe: 'ఉత్తర అమెరికా వ్యాప్తంగా నైరుతి ప్రాంత రాతి లోయల ఇళ్లు (మెసా వెర్డే), మిస్సిసిప్పి లోయలోని కాహోకియా మట్టి స్థూప నగరాలలో విస్తరించింది.',
  bannerImage: './images/indian_history/civilization_portraits/civ_indigenous_landscape.jpg',
  overviewEn: 'Long before European arrival, diverse sovereign native cultures thrived across North America—mastering ecological agroforestry, the "Three Sisters" companion planting, multi-story sandstone cliff dwellings, and ceremonial mound metropolises.',
  overviewTe: 'యూరోపియన్లు రాకముందే ఉత్తర అమెరికాలో ప్రకృతితో సామరస్యంగా జీవిస్తూ రాతి కొండలను తొలిచి బహుళ అంతస్తుల భవనాలు, మట్టి నగరాలు మరియు త్రీ సిస్టర్స్ వ్యవసాయాన్ని సాధించిన ఘన సంస్కృతులు.',
  timelinePhases: [
    {
      periodEn: 'Ancestral Puebloan Era',
      periodTe: 'ప్రాచీన ప్యూబ్లో కాలం',
      datesEn: 'c. 600 – 1300 CE',
      datesTe: 'క్రీ.శ. 600 – 1300',
      descEn: 'Construction of multi-story cliff canyon palaces at Mesa Verde and astronomical great houses at Chaco Canyon.',
      descTe: 'మెసా వెర్డే రాతి లోయలలో బహుళ అంతస్తుల భవనాలు మరియు చాకో కాన్యన్‌లో ఖగోళ అమరికల గృహాల నిర్మాణం.'
    },
    {
      periodEn: 'Mississippian Metropolis (Cahokia)',
      periodTe: 'మిస్సిసిప్పియన్ కాహోకియా నగరం',
      datesEn: 'c. 1000 – 1400 CE',
      datesTe: 'క్రీ.శ. 1000 – 1400',
      descEn: 'Urban metropolis of Cahokia housing over 30,000 residents around Monks Mound, the largest earthwork pyramid in North America.',
      descTe: 'ఉత్తర అమెరికాలోనే అతిపెద్ద మాంక్స్ మట్టి పిరమిడ్ చుట్టూ 30,000 జనాభాతో వెలసిన కాహోకియా మహానగరం.'
    }
  ],
  societyAndCulture: {
    titleEn: 'Clan Matrilineality, Oral Storytelling & Community Councils',
    titleTe: 'మాతృస్వామ్య సమాజం, మౌఖిక గాథలు & గ్రామ సభలు',
    image: './images/indian_history/civilization_portraits/civ_indigenous_card.jpg',
    pointsEn: [
      'Matrilineal Lineage: Clan identity, ancestral homes, and agricultural plots often inherited through the mother’s line.',
      'Oral Tradition: Sacred histories, herbal medicinal knowledge, and cosmic legends passed verbally through generations.',
      'Consensus Governance: Decisions reached through deliberative council discussions guided by tribal elders and clan mothers.'
    ],
    pointsTe: [
      'మాతృస్వామ్య వంశ క్రమం: వంశ గుర్తింపు, ఆస్తులు మరియు నివాసాలు తల్లి ద్వారా సంక్రమించే సంప్రదాయం.',
      'మౌఖిక కథా సాంప్రదాయం: మూలికా వైద్యం, చరిత్ర మరియు ఆధ్యాత్మిక గాథలను తరం నుండి తరానికి నోటి మాటగా అందించడం.',
      'ఏకాభిప్రాయ పరిపాలన: తెగల పెద్దలు, మహిళా మాతృమూర్తుల సలహాలతో అందరి ఆమోదంతో సాగే సామూహిక నిర్ణయాలు.'
    ]
  },
  economyAndTrade: {
    titleEn: 'The "Three Sisters" Agriculture & Continental Trade',
    titleTe: '"త్రీ సిస్టర్స్" వ్యవసాయం & ప్రకృతి సమతుల్యత',
    pointsEn: [
      'The "Three Sisters" Companion Planting: Corn (structure), beans (nitrogen fixing), and squash (ground cover weed prevention) planted together in symbiotic harmony.',
      'Vast Continental Trade: Marine shells from the Gulf, copper from Lake Superior, and mica from the Appalachians traded across thousands of miles.'
    ],
    pointsTe: [
      '"త్రీ సిస్టర్స్" పరస్పర వ్యవసాయం: మొక్కజొన్న (ఆసరా), బీన్స్ (నత్రజని ఎరువు), గుమ్మడి (నేల తేమ కాపాడే ఆకులు) మూడింటినీ కలిపి సాగు చేసే విజ్ఞానం.',
      'ఖండాంతర వాణిజ్యం: గల్ఫ్ సముద్ర శంఖాలు, సుపీరియర్ సరస్సు రాగి మరియు ఖనిజాలను వేలాది మైళ్ల దూరం రవాణా చేసిన వర్తకం.'
    ]
  },
  scienceAndInventions: {
    titleEn: 'Sandstone Cliff Palaces, Solar Alignments & Pottery',
    titleTe: 'రాతి లోయల భవనాలు, సూర్య వేధశాలలు & కుండల కళ',
    image: './images/indian_history/civilization_portraits/civ_indigenous_artifact.jpg',
    pointsEn: [
      'Cliff Palace at Mesa Verde: Magnificent 150-room sandstone masonry city built sheltered inside high canyon alcoves.',
      'Sun Dagger Observatory (Fajada Butte): Stone slabs focusing dagger-shaped light beams marking summer/winter solstices and lunar standstill cycles.',
      'Polychrome Pottery & Woven Baskets: Intricate geometric coil-woven water-tight baskets and painted ceramic vessels.'
    ],
    pointsTe: [
      'మెసా వెర్డే క్లిఫ్ ప్యాలెస్: రాతి కొండల అంచులలో నిర్మించిన 150 గదుల బహుళ అంతస్తుల రాతి నగరం.',
      'సూర్య ఖడ్గ వేధశాల (సన్ డాగర్): రాతి చీలికల గుండా వచ్చే సూర్యకిరణాల ద్వారా ఉత్తరాయణ, దక్షిణాయన రోజులను ఖచ్చితంగా గుర్తించే విధానం.',
      'రంగుల కుండలు & బుట్టల కళ: నీరు కారకుండా అల్లిన ప్రత్యేక బుట్టలు మరియు రేఖాగణిత డిజైన్లతో కూడిన మట్టి పాత్రలు.'
    ]
  },
  religionAndBeliefs: {
    titleEn: 'Spiritual Oneness with Nature & The Sacred Kiva',
    titleTe: 'ప్రకృతితో ఆధ్యాత్మిక ఏకత్వం & పవిత్ర కివా మందిరాలు',
    pointsEn: [
      'Reverence for Mother Earth and all living beings as interconnected relatives ("All My Relations").',
      'The Sacred Kiva: Subterranean circular ceremonial chambers used for spiritual rituals, dances, and cosmic renewal.'
    ],
    pointsTe: [
      'భూమాతను, సమస్త జీవరాశులను బంధువులుగా భావించే పవిత్ర ప్రకృతి ధర్మం.',
      'భూగర్భ కివా మందిరాలు: ఆధ్యాత్మిక నృత్యాలు, పూజలు మరియు ప్రార్థనల కోసం భూమి లోపల నిర్మించిన గుండ్రటి మందిరాలు.'
    ]
  },
  majorSitesOrPlaces: [
    {
      id: 'mesa_verde',
      nameEn: 'Mesa Verde National Park',
      nameTe: 'మెసా వెర్డే రాతి నగరాలు',
      locationEn: 'Colorado, USA',
      locationTe: 'కొలరాడో, అమెరికా',
      image: './images/indian_history/civilization_portraits/civ_indigenous_landscape.jpg',
      keyFeaturesEn: ['Cliff Palace with 150 rooms and 23 kivas', 'Spectacular preservation inside canyon cliffs', 'Ancestral Puebloan engineering'],
      keyFeaturesTe: ['150 గదులు, 23 కివాలతో కూడిన క్లిఫ్ ప్యాలెస్', 'రాతి కొండల మధ్య చెక్కుచెదరని నిర్మాణం', 'యునెస్కో ప్రపంచ వారసత్వ సంపద']
    }
  ],
  declineAndLegacy: {
    declineEn: ['Prolonged megadroughts in the late 13th century led Ancestral Puebloans to migrate south into modern Hopi, Zuni, and Rio Grande Pueblos.'],
    declineTe: ['13వ శతాబ్దపు తీవ్ర కరువుల వల్ల ప్రజలు దక్షిణం వైపు వలస వెళ్లి నేటి హోపీ, జునీ తెగలుగా స్థిరపడ్డారు.'],
    legacyEn: ['Companion planting principles, sustainable water management, and living sovereign Native American tribal nations.'],
    legacyTe: ['సహజ వ్యవసాయ పద్ధతులు, స్థిరమైన నీటి యాజమాన్యం మరియు ప్రకృతితో మమేకమైన శాశ్వత జీవన వారసత్వం.']
  },
  quickRevision: [
    { labelEn: 'Geography', labelTe: 'భౌగోళికం', valueEn: 'North America (Southwest & Mississippi)', valueTe: 'ఉత్తర అమెరికా (నైరుతి & మిస్సిసిప్పి)' },
    { labelEn: 'Hallmarks', labelTe: 'విశేషాలు', valueEn: 'Cliff Dwellings, Three Sisters & Nature Harmony', valueTe: 'క్లిఫ్ డ్వెల్లింగ్స్, త్రీ సిస్టర్స్ వ్యవసాయం' }
  ]
};

// Full Infographics for Lightbox Gallery
export const CIVILIZATION_GALLERY_INFOGRAPHICS = [
  {
    id: 'ancient_civilizations_world_poster',
    titleEn: 'Ancient Civilizations of the World (10 Great Civilizations)',
    titleTe: 'ప్రపంచపు 10 ప్రాచీన నాగరికతలు – సమగ్ర పరిశోధనా పటం',
    subtitleEn: 'Mesopotamia, Egypt, Indus Valley, China, Greece, Rome, Persia, Maya, Inca, Indigenous Americas',
    subtitleTe: 'మెసపటోమియా, ఈజిప్ట్, సింధు, చైనా, గ్రీస్, రోమ్, పర్షియా, మాయా, ఇంకా, అమెరికా స్థానిక నాగరికతలు',
    src: './images/indian_history/ancient_civilizations_world.jpg',
    image: './images/indian_history/ancient_civilizations_world.jpg',
    category: 'civilizations'
  },
  {
    id: 'harappan_civilization_poster',
    titleEn: 'Harappan Civilization (2600 – 1900 BCE) – Cities, Drainage & Sites',
    titleTe: 'హరప్పా నాగరికత (క్రీ.పూ. 2600 – 1900) – నగరాలు, డ్రైనేజీ & తవ్వకాలు',
    subtitleEn: 'Planned Cities, Drainage System, Seals & Script, Trade & Major Excavation Sites',
    subtitleTe: 'ప్రణాళికాబద్ధ నగరాలు, భూగర్భ డ్రైనేజ్, ముద్రికలు & ప్రధాన తవ్వకాల స్థలాలు',
    src: './images/indian_history/harappan_civilization_poster.jpg',
    image: './images/indian_history/harappan_civilization_poster.jpg',
    category: 'civilizations'
  },
  {
    id: 'indus_valley_civilization_full',
    titleEn: 'Rise of the Indus Valley Civilization (c. 3300 – 1300 BCE)',
    titleTe: 'సింధు లోయ నాగరికత సమగ్ర ఇన్ఫోగ్రాఫిక్ (క్రీ.పూ. 3300 – 1300)',
    subtitleEn: 'Urban Planning, Great Bath, Major Sites, Script, Art & Metallurgy',
    subtitleTe: 'నగర ప్రణాళిక, మహా స్నానవాటిక, ప్రముఖ స్థావరాలు, లిపి & కళలు',
    src: './images/indian_history/indus_valley_civilization.jpg',
    image: './images/indian_history/indus_valley_civilization.jpg',
    category: 'civilizations'
  },
  {
    id: 'mesopotamian_civilization_full',
    titleEn: 'Mesopotamian Civilization – Complete Timeline & Important Facts',
    titleTe: 'మెసపటోమియా నాగరికత – సంపూర్ణ కాలక్రమం & విశేషాలు',
    subtitleEn: 'Cradle of Civilization, Cuneiform, Hammurabi Code & Ziggurats',
    subtitleTe: 'నాగరికతల ఉయ్యాల, క్యూనిఫామ్ లిపి, హమ్మురాబి కోడ్ & జిగ్గురాత్ గోపురాలు',
    src: './images/indian_history/mesopotamian_civilization.jpg',
    image: './images/indian_history/mesopotamian_civilization.jpg',
    category: 'civilizations'
  },
  {
    id: 'egyptian_civilisation_full',
    titleEn: 'Egyptian Civilisation – Monuments, Society & Science',
    titleTe: 'ఈజిప్ట్ నాగరికత – పిరమిడ్‌లు, సమాజం & విజ్ఞాన శాస్త్రం',
    subtitleEn: 'Gift of the Nile, Pyramids, Mummification, Gods & 365-Day Solar Calendar',
    subtitleTe: 'నైలు నది వరప్రసాదం, పిరమిడ్‌లు, మమ్మీలు, దేవతలు & 365 రోజుల క్యాలెండర్',
    src: './images/indian_history/egyptian_civilisation.jpg',
    image: './images/indian_history/egyptian_civilisation.jpg',
    category: 'civilizations'
  }
];

export const ALL_CIVILIZATIONS_DATA: CivilizationData[] = [
  INDUS_VALLEY_CIVILIZATION,
  MESOPOTAMIAN_CIVILIZATION,
  EGYPTIAN_CIVILIZATION,
  CHINA_SHANG_CIVILIZATION,
  GREECE_CIVILIZATION,
  ROME_CIVILIZATION,
  PERSIA_CIVILIZATION,
  MAYA_CIVILIZATION,
  INCA_CIVILIZATION,
  INDIGENOUS_AMERICAS_CIVILIZATION
];
