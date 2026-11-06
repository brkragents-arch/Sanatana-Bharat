export interface VedaDeity {
  name: string;
  nameTe: string;
  role: string;
  roleTe: string;
  icon: string;
}

export interface VedaDivision {
  name: string;
  nameTe: string;
  samhita: string;
  samhitaTe: string;
  description: string;
  descriptionTe: string;
}

export interface VedaUpanishad {
  name: string;
  nameTe: string;
  description?: string;
  descriptionTe?: string;
  highlight?: string;
}

export interface VedaYajna {
  name: string;
  nameTe: string;
  purpose: string;
  purposeTe: string;
}

export interface VedaShakhaLossStats {
  totalShakhas: string;
  availableShakhas: string;
  lostShakhas: string;
  survivingNames: string[];
  survivingNamesTe: string[];
  lostExamples: string[];
  lostExamplesTe: string[];
  structure: {
    samhita: string;
    samhitaTe: string;
    brahmana: string;
    brahmanaTe: string;
    aranyaka: string;
    aranyakaTe: string;
    upanishad: string;
    upanishadTe: string;
  };
}

export interface VedasPreservationMaster {
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  totalVerses: string;
  totalVersesTe: string;
  compilerEn: string;
  compilerTe: string;
  totalShakhas: number;
  availableShakhas: string;
  availableShakhasTe: string;
  lostShakhas: string;
  lostShakhasTe: string;
  preservationPercentage: string;
  samhitaStats: {
    available: string;
    availableTe: string;
    lost: string;
    lostTe: string;
  };
  upanishadStats: {
    available: string;
    availableTe: string;
    lost: string;
    lostTe: string;
  };
  historicalReasonsEn: string[];
  historicalReasonsTe: string[];
  chartImageSrc: string;
}

export const VEDAS_PRESERVATION_CHART_DATA: VedasPreservationMaster = {
  titleEn: 'How Much of the Vedas has been Lost!',
  titleTe: 'వేదాలు ఎంత నశించిపోయాయి? – 1,180 శాఖల విశ్లేషణ',
  subtitleEn: 'Comprehensive statistical analysis of Vedic Shakhas compiled by Sage Veda Vyasa vs. surviving texts today',
  subtitleTe: 'శ్రీ వేదవ్యాస మహర్షి క్రోడీకరించిన 1,180 వేద శాఖలలో నేడు లభ్యమవుతున్నవి కేవలం 10-15 మాత్రమే (~98% నష్టం)',
  totalVerses: '1,00,000 Verses',
  totalVersesTe: '1,00,000 శ్లోకాలు / మంత్రాలు',
  compilerEn: 'Krishna Dvaipayana (Maharshi Veda Vyasa)',
  compilerTe: 'శ్రీ కృష్ణద్వైపాయనుడు (వేదవ్యాస మహర్షి)',
  totalShakhas: 1180,
  availableShakhas: '10 - 15 Shakhas Available',
  availableShakhasTe: '10 - 15 శాఖలు మాత్రమే లభ్యం',
  lostShakhas: '1,165+ Shakhas Lost',
  lostShakhasTe: '1,165+ శాఖలు కాలగర్భంలో కలిసిపోయాయి',
  preservationPercentage: '~1.1%',
  samhitaStats: {
    available: '19 - 20 Samhitas',
    availableTe: '19 - 20 సంహితలు మాత్రమే లభ్యం',
    lost: '1,111+ / 1,160+ Lost',
    lostTe: '1,111+ సంహితలు నశించిపోయాయి'
  },
  upanishadStats: {
    available: '108 Upanishads (Muktika Canon)',
    availableTe: '108 ఉపనిషత్తులు (ముక్తిక సంప్రదాయం)',
    lost: '1,121+ Lost (Originally 1,180, one per Shakha)',
    lostTe: '1,121+ ఉపనిషత్తులు లుప్తమైనవి (శాఖకు ఒకటి చొప్పున 1,180 ఉండెడివి)'
  },
  historicalReasonsEn: [
    'Destruction of ancient library-universities like Nalanda, Takshashila, and Vikramashila during medieval invasions',
    'Severing of traditional Gurukula parampara and oral transmission (Veda Pathashalas)',
    'Loss of palm-leaf manuscripts to natural decay, fire, and plunder over millennia',
    'Strict oral-only transmission (Shruti) causing entire shakhas to vanish when all practitioners of a lineage perished'
  ],
  historicalReasonsTe: [
    'మధ్యయుగ దండయాత్రలలో నలంద, తక్షశిల, విక్రమశిల మొదలైన ప్రాచీన విశ్వవిద్యాలయ గ్రంథాలయాల దహనం',
    'గురుకుల విద్యా విధానం మరియు వేద పాఠశాలల పరంపర ధ్వంసం కావడం',
    'తాళపత్ర గ్రంథాలు అగ్నిప్రమాదాలు, చెదలు, కాలగర్భంలో కలిసిపోవడం',
    'కేవలం గురుముఖతః వినే శ్రుతి పరంపర కావడంతో, ఒక శాఖను పఠించే వేదపండితులు అంతరించినప్పుడు ఆ శాఖే పూర్తిగా లుప్తమైపోవడం'
  ],
  chartImageSrc: './images/vedas/how_much_vedas_lost_chart.jpg'
};

export interface VedaInfo {
  id: string;
  charId: string;
  title: string;
  titleTe: string;
  subtitle: string;
  subtitleTe: string;
  sanskritName: string;
  faceOfBrahma: string;
  faceOfBrahmaTe: string;
  meter: string;
  meterTe: string;
  priestRole: string;
  priestRoleTe: string;
  overview: string;
  overviewTe: string;
  keyFacts: {
    meaning: string;
    meaningTe: string;
    position: string;
    positionTe: string;
    language: string;
    languageTe: string;
    mainThemeOrNature: string;
    mainThemeOrNatureTe: string;
    formOrStructure: string;
    formOrStructureTe: string;
    versesOrMantras: string;
    versesOrMantrasTe: string;
  };
  principalDeities?: VedaDeity[];
  divisions?: VedaDivision[];
  branches?: {
    name: string;
    nameTe: string;
    regions: string;
    regionsTe: string;
  }[];
  mainSubjects?: {
    title: string;
    titleTe: string;
    icon: string;
    description: string;
    descriptionTe: string;
  }[];
  associatedUpanishads: VedaUpanishad[];
  constructionOrFeatures: string[];
  constructionOrFeaturesTe: string[];
  significance: string[];
  significanceTe: string[];
  examplesOfYajnas?: VedaYajna[];
  didYouKnow?: {
    title: string;
    titleTe: string;
    content: string;
    contentTe: string;
    musicalScale?: string[];
  };
  characteristics?: string;
  characteristicsTe?: string;
  shakhaLossStats?: VedaShakhaLossStats;
  coreQuote: string;
  coreQuoteTe: string;
  color: string;
  accentBg: string;
  icon: string;
  imageSrc: string;
}

export const VEDAS_DATA: VedaInfo[] = [
  // =========================================================================
  // 1. RIGVEDA (ऋग्वेद) - The Veda of Knowledge & Hymns
  // =========================================================================
  {
    id: 'rigveda',
    charId: 'brahma-rigveda',
    title: 'Rigveda',
    titleTe: 'ఋగ్వేదము',
    subtitle: 'The Veda of Knowledge, the Veda of Hymns',
    subtitleTe: 'జ్ఞాన వేదము • స్తోత్రముల మూల నిధి',
    sanskritName: 'ऋग्वेद',
    faceOfBrahma: 'Eastern Face (పూర్వ ముఖము)',
    faceOfBrahmaTe: 'తూర్పు ముఖము (పూర్వ ముఖము)',
    meter: 'Gayatri Meter (గాయత్రీ ఛందస్సు)',
    meterTe: 'గాయత్రీ ఛందస్సు',
    priestRole: 'Hotra / Hotr (హోతృ క్రియ - ఆహ్వానము & స్తోత్ర పఠనం)',
    priestRoleTe: 'హోతా (దేవతలను యజ్ఞమునకు ఆహ్వానించి స్తుతించు పురోహితుడు)',
    overview: 'The Rigveda is the most ancient and important among the four Vedas of Hinduism. It contains a collection of mantras and suktas (hymns) composed in praise of deities. This Veda is the foundation of our ancient Vedic culture, thoughts, and knowledge.',
    overviewTe: 'హిందూ ధర్మంలోని నాలుగు వేదాలలో ఋగ్వేదము అత్యంత ప్రాచీనమైనది మరియు ప్రధానమైనది. దేవతల స్తుతులతో కూడిన మంత్రాలు, సూక్తాల సమాహారమిది. మన ప్రాచీన వైదిక సంస్కృతి, ఆలోచనలు మరియు దివ్య జ్ఞానానికి ఇది మూలపునాది.',
    keyFacts: {
      meaning: "'Rik' = Hymn/Mantra, 'Veda' = Knowledge",
      meaningTe: "'ఋక్' = స్తుతి / మంత్రం, 'వేదం' = జ్ఞానం",
      position: 'First and oldest Veda among the four Vedas',
      positionTe: 'చతుర్వేదాలలో ప్రథమ మరియు అత్యంత ప్రాచీన వేదము',
      language: 'Vedic Sanskrit',
      languageTe: 'వైదిక సంస్కృతం',
      mainThemeOrNature: 'Praises of cosmic deities, cosmology, spiritual contemplation',
      mainThemeOrNatureTe: 'దివ్య దేవతా స్తుతులు, విశ్వ సృష్టి రహస్యాలు, ఆధ్యాత్మిక చింతన',
      formOrStructure: '10 Mandalas (Books), approx. 1,028 Suktas (hymns)',
      formOrStructureTe: '10 మండలాలు (గ్రంథాలు), దాదాపు 1,028 సూక్తాలు',
      versesOrMantras: 'Approximately 10,600 mantras',
      versesOrMantrasTe: 'సుమారు 10,600 మంత్రములు'
    },
    principalDeities: [
      {
        name: 'Agni',
        nameTe: 'అగ్నిదేవుడు',
        role: 'Deity of fire, Chief deity of Yajna (sacrifice) — First hymn begins with Agni',
        roleTe: 'యజ్ఞాధిపతి, ముఖ్యాతిథి, హవ్యవాహనుడు (ఋగ్వేద ప్రథమ సూక్తం "అగ్నిమీళే పురోహితం")',
        icon: '🔥'
      },
      {
        name: 'Indra',
        nameTe: 'ఇంద్రుడు',
        role: 'Deity of rain, thunderbolt, and war; champion of cosmic order',
        roleTe: 'వర్షం, వజ్రాయుధము, శౌర్యము మరియు దేవతల అధిపతి',
        icon: '⚡'
      },
      {
        name: 'Varuna',
        nameTe: 'వరుణుడు',
        role: 'Deity of cosmic waters, sky, and Rta (universal cosmic moral order)',
        roleTe: 'జలములు, అంతరిక్షం మరియు విశ్వ నైతిక చట్టం (ఋతం) రక్షకుడు',
        icon: '🌊'
      },
      {
        name: 'Surya',
        nameTe: 'సూర్యుడు',
        role: 'Deity of light, illumination, energy, and universal life-giver',
        roleTe: 'జగచ్చక్షువు, తేజస్సు, ప్రాణశక్తి మరియు సర్వలోక ప్రదాత',
        icon: '☀️'
      },
      {
        name: 'Ushas',
        nameTe: 'ఉషస్సు',
        role: 'Deity of dawn, radiance, and the auspicious symbol of new beginnings',
        roleTe: 'ప్రాతఃకాల కాంతి, నూతన ప్రారంభాల సంకేతమైన దివ్య దేవత',
        icon: '🌅'
      }
    ],
    associatedUpanishads: [
      {
        name: 'Aitareya Upanishad',
        nameTe: 'ఐతరేయ ఉపనిషత్తు',
        description: 'Gives profound knowledge about the soul (Atman), supreme Brahman, and the cosmological origin of creation. Contains the Mahavakya: "Prajnanam Brahma" (Consciousness is Brahman).',
        descriptionTe: 'ఆత్మ, పరబ్రహ్మ మరియు సృష్టి ఆవిర్భావం గురించి విశదీకరిస్తుంది. "ప్రజ్ఞానం బ్రహ్మ" అనే దివ్య మహావాక్యానికి మూలం.'
      },
      {
        name: 'Kaushitaki Upanishad',
        nameTe: 'కౌషీతకి ఉపనిషత్తు',
        description: 'Explains the nature of life (Prana), journey of the soul after death, and Brahman as the ultimate reality.',
        descriptionTe: 'ప్రాణ తత్త్వము, పునర్జన్మ గమనము, ఆత్మ స్వరూపం మరియు బ్రహ్మ ప్రాప్తి మార్గాన్ని వివరిస్తుంది.'
      }
    ],
    constructionOrFeatures: [
      'Rigveda is systematically divided into 10 Mandalas (books).',
      'It contains a total of 1,028 hymns (Suktas) and approximately 10,600 mantras.',
      "Mandalas 2 to 7 are known as the ancient 'Family Books' (revealed through lineages of seers: Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vashistha).",
      'Most hymns were revealed to and composed by the revered Rishis (Drashtas - seers of cosmic truth).'
    ],
    constructionOrFeaturesTe: [
      'ఋగ్వేదం 10 మండలాలుగా (గ్రంథాలు) విభజించబడింది.',
      'మొత్తం 1,028 సూక్తాలు మరియు దాదాపు 10,600 మంత్రాలను కలిగి ఉంది.',
      '2 నుండి 7 వరకు గల మండలాలను ప్రాచీన "కుటుంబ గ్రంథాలు" (ఋషి వంశ మండలాలు) అంటారు.',
      'ఈ దివ్య మంత్రాలన్నీ మహర్షులైన ద్రష్టల అంతర్నేత్రమునకు సాక్షాత్కరించిన అపౌరుషేయ జ్ఞానము.'
    ],
    significance: [
      "It is one of the world's most ancient sacred religious texts.",
      'It is considered the bedrock and foundation of Indian culture, philosophy, and Vedic traditions.',
      'It contains timeless descriptions of nature, sacrificial rituals, society, astronomy, and spiritual thoughts.',
      'The supreme Gayatri Mantra (Tat Savitur Varenyam...) is revealed in Rigveda (Mandala 3.62.10).'
    ],
    significanceTe: [
      'మానవ చరిత్రలోనే అత్యంత పురాతనమైన పవిత్ర వాఙ్మయ గ్రంథము.',
      'భారతీయ సనాతన సంస్కృతి, తత్త్వశాస్త్రం, వైదిక ధర్మానికి మూలస్తంభము.',
      'ప్రకృతి శక్తులు, యజ్ఞానుష్ఠానాలు, నక్షత్ర మండల విజ్ఞానం, సామాజిక జీవన శైలి ఇందులో నిక్షిప్తమై ఉన్నాయి.',
      'విశ్వవిఖ్యాత దివ్య "గాయత్రీ మంత్రము" ఋగ్వేద తృతీయ మండలము (3.62.10) లోనిదే.'
    ],
    characteristics: 'Rigveda is not just a religious text, but it also provides a rich glimpse into the society, science, nature, politics, economy, medicine, astronomy, and philosophy of that Vedic era.',
    characteristicsTe: 'ఋగ్వేదము కేవలం ఆధ్యాత్మిక గ్రంథం మాత్రమే కాదు; ఆనాటి సమాజం, విజ్ఞానశాస్త్రం, ఖగోళం, రాజనీతి, వైద్యం, ప్రకృతి నియమాలు మరియు తత్త్వశాస్త్రాలను ఆవిష్కరించే అద్భుత దర్పణం.',
    shakhaLossStats: {
      totalShakhas: '21+ Shakhas',
      availableShakhas: '1 Shakha (~4.7% Preserved)',
      lostShakhas: '20+ Shakhas (~95.3% Lost)',
      survivingNames: ['Shakala Shakha (prevalent worldwide today)'],
      survivingNamesTe: ['శాకల శాఖ (నేడు లభ్యమవుతున్న ఏకైక సంపూర్ణ ఋగ్వేద శాఖ)'],
      lostExamples: ['Bashkala', 'Ashvalayana', 'Shankhayana', 'Mandukayana'],
      lostExamplesTe: ['బాష్కల', 'ఆశ్వలాయన', 'సాంఖ్యాయన', 'మాండూకాయన మున్నగు 20+ శాఖలు'],
      structure: {
        samhita: 'Shakala Samhita (10,600 mantras, 1,028 suktas)',
        samhitaTe: 'శాకల సంహిత (10,600 మంత్రాలు, 1,028 సూక్తాలు)',
        brahmana: 'Aitareya & Kaushitaki Brahmanas',
        brahmanaTe: 'ఐతరేయ మరియు కౌషీతకి బ్రాహ్మణములు',
        aranyaka: 'Aitareya & Kaushitaki Aranyakas',
        aranyakaTe: 'ఐతరేయ మరియు కౌషీతకి అరణ్యకములు',
        upanishad: 'Aitareya, Kaushitaki, Bahvricha, Nadabindu Upanishads',
        upanishadTe: 'ఐతరేయ, కౌషీతకి, బహ్వృచ, నాదబిందు ఉపనిషత్తులు'
      }
    },
    coreQuote: "The Rigveda is the world's most ancient Veda, which contains the invaluable treasure of praises to the deities, knowledge, and Vedic culture.",
    coreQuoteTe: "ఋగ్వేదము సకల వేదములలో అత్యంత పురాతనమైనది; దేవతా స్తుతులు, విశ్వ విజ్ఞానము మరియు వైదిక సంస్కృతీ భాండాగారము.",
    color: '#D84315',
    accentBg: '#FBE9E7',
    icon: '📜',
    imageSrc: './images/vedas/rigveda.jpg'
  },

  // =========================================================================
  // 2. YAJURVEDA (यजुर्वेद) - The Veda of Sacrifice and Rituals
  // =========================================================================
  {
    id: 'yajurveda',
    charId: 'brahma-yajurveda',
    title: 'Yajurveda',
    titleTe: 'యజుర్వేదము',
    subtitle: 'The Veda of Sacrifice and Rituals',
    subtitleTe: 'యజ్ఞ కర్మ వేదము • కార్యాచరణ & ధర్మ సాధన',
    sanskritName: 'यजुर्वेद',
    faceOfBrahma: 'Southern Face (దక్షిణ ముఖము)',
    faceOfBrahmaTe: 'దక్షిణ ముఖము',
    meter: 'Trishtubh Meter (త్రిష్టుప్ ఛందస్సు)',
    meterTe: 'త్రిష్టుప్ ఛందస్సు',
    priestRole: 'Adhvaryu (అధ్వర్యుడు - కర్మకాండ నిర్వహణ & వేది నిర్మాణం)',
    priestRoleTe: 'అధ్వర్యుడు (యజ్ఞ వేదిక నిర్మాణం, ఆహుతులు సమర్పించు ప్రధాన ఋత్విక్కు)',
    overview: 'Yajurveda is the second of the four Vedas. It contains mantras and detailed instructions for performing yajnas (sacrificial rituals) and various religious ceremonies. It is known as the Veda of rituals and practical wisdom.',
    overviewTe: 'యజుర్వేదము చతుర్వేదములలో రెండవది. యజ్ఞయాగాదులు, షోడశ సంస్కారాలు, దివ్య కర్మకాండలను శాస్త్రీయంగా ఆచరించుటకు అవసరమైన మంత్రాలు మరియు మార్గదర్శకాలను అందిస్తుంది. ఇది కర్మ జ్ఞానానికి మూల వేదిక.',
    keyFacts: {
      meaning: "'Yajus' = related to worship/sacrifice, 'Veda' = knowledge",
      meaningTe: "'యజుస్' = పూజ / యజ్ఞ సంబంధితము, 'వేదం' = జ్ఞానం",
      position: 'Second among the four Vedas',
      positionTe: 'చతుర్వేదాలలో రెండవ స్థానం',
      language: 'Vedic Sanskrit',
      languageTe: 'వైదిక సంస్కృతం',
      mainThemeOrNature: 'Yajnas, rituals, ceremonies, cosmic action (Karma)',
      mainThemeOrNatureTe: 'యజ్ఞాలు, క్రతువులు, వైదిక సంస్కారాలు, కర్మయోగం',
      formOrStructure: 'Composed in both prose and verse (గద్య-పద్య మిశ్రమము)',
      formOrStructureTe: 'గద్యము మరియు పద్యము (శ్లోకములు) రెండింటిలోనూ రచింపబడినది',
      versesOrMantras: 'Approx. 1,975 to 2,000+ mantras across recensions',
      versesOrMantrasTe: 'శాఖల వారీగా సుమారు 1,975 నుండి 2,000 పైచిలుకు మంత్రాలు'
    },
    divisions: [
      {
        name: 'Shukla Yajurveda',
        nameTe: 'శుక్ల యజుర్వేదము',
        samhita: 'Vajasaneyi Samhita (వాజసనేయి సంహిత)',
        samhitaTe: 'వాజసనేయి సంహిత (యాజ్ఞవల్క్య మహర్షి ప్రణీతం)',
        description: 'The mantras and their detailed theological explanations (Brahmanas) are found separated into distinct sections, hence termed Shukla (pure/clear).',
        descriptionTe: 'మంత్రాలు మరియు వాటి వివరణాత్మక బ్రాహ్మణాలు స్పష్టంగా వేరువేరుగా విభజించబడి ఉంటాయి. అందుకే దీనిని "శుక్ల" (నిర్మలమైన) అంటారు.'
      },
      {
        name: 'Krishna Yajurveda',
        nameTe: 'కృష్ణ యజుర్వేదము',
        samhita: 'Taittiriya Samhita (తైత్తిరీయ సంహిత)',
        samhitaTe: 'తైత్తిరీయ సంహిత (తిత్తిరి ఋషి పరంపర)',
        description: 'The original mantras and prose commentary/explanations are woven closely together throughout the text.',
        descriptionTe: 'మంత్రాలు మరియు వాటి వ్యాఖ్యాన గద్యాలు కలగలిసి కలిసి ఉంటాయి; అందుకే దీనిని "కృష్ణ" (మిశ్రమ) యజుర్వేదం అంటారు.'
      }
    ],
    associatedUpanishads: [
      {
        name: 'Isha Upanishad',
        nameTe: 'ఈశావాస్యోపనిషత్తు',
        description: 'Crown of Shukla Yajurveda (Chapter 40): "Isha vasyam idam sarvam" — declares that everything is enveloped by the Divine.',
        descriptionTe: 'శుక్ల యజుర్వేద 40వ అధ్యాయము. "ఈశా వాస్యమిదం సర్వం" - సమస్త జగత్తు పరమాత్మ చేత వ్యాపించబడి ఉందని ఉద్బోధిస్తుంది.'
      },
      {
        name: 'Taittiriya Upanishad',
        nameTe: 'తైత్తిరీయోపనిషత్తు',
        description: 'Krishna Yajurveda treasure containing Pancha Koshas, Anandavalli, and eternal ethical injunctions: "Satyam Vada, Dharmam Chara".',
        descriptionTe: 'కృష్ణ యజుర్వేద మణిహారం. పంచకోశాలు, ఆనందవల్లి, "సత్యం వద • ధర్మం చర" అనే జీవన సూత్రాలను అందిస్తుంది.'
      },
      {
        name: 'Brihadaranyaka Upanishad',
        nameTe: 'బృహదారణ్యకోపనిషత్తు',
        description: 'The monumental Upanishad with Sage Yajnavalkya: "Asato ma sadgamaya, tamaso ma jyotirgamaya, mrityor ma amritam gamaya".',
        descriptionTe: 'అతిపెద్ద ఉపనిషత్తు. "అసతోమా సద్గమయ, తమసోమా జ్యోతిర్గమయ, మృత్యోర్మా అమృతం గమయ" అనే సార్వకాలిక ప్రార్థనకు మూలం.'
      },
      {
        name: 'Katha Upanishad',
        nameTe: 'కఠోపనిషత్తు',
        description: 'The unforgettable dialogue between young Nachiketa and Yama (Lord of Death) revealing the immortality of the soul (Atman).',
        descriptionTe: 'నచికేతుడు మరియు యమధర్మరాజుల మధ్య అమృతత్వ రహస్య సంవాదము; రథ రూపక ఆత్మ విద్య.'
      }
    ],
    examplesOfYajnas: [
      {
        name: 'Agnihotra',
        nameTe: 'అగ్నిహోత్రము',
        purpose: 'Daily morning and evening sacred fire offerings for environmental purification and family spiritual welfare',
        purposeTe: 'ప్రతిరోజూ ప్రాతః-సాయంకాలాలలో నిత్యం ఆచరించే పవిత్ర హోమం; గృహ శాంతి, వాతావరణ శుద్ధి'
      },
      {
        name: 'Darsha-Purnamasa',
        nameTe: 'దర్శ-పూర్ణమాస యాగములు',
        purpose: 'Fortnightly rituals performed on New Moon (Amavasya) and Full Moon (Purnima) aligning human consciousness with lunar cosmic rhythms',
        purposeTe: 'అమావాస్య (దర్శ) మరియు పౌర్ణమి (పూర్ణమాస) రోజులలో ఆచరించే పక్ష క్రతువులు'
      },
      {
        name: 'Somayajna',
        nameTe: 'సోమయాగము',
        purpose: 'Sacred ceremonies invoking cosmic deities with consecrated Soma libations for world prosperity and rains',
        purposeTe: 'లోక కళ్యాణం, వర్షాలు, సమస్త లోక సమృద్ధి కొరకు సోమరస ఆహుతులతో కూడిన మహా క్రతువు'
      },
      {
        name: 'Ashvamedha Yajna',
        nameTe: 'అశ్వమేధ యాగము',
        purpose: 'Imperial sacrifice undertaken by righteous sovereigns to establish dharma, sovereign integrity, and universal harmony',
        purposeTe: 'సార్వభౌమ చక్రవర్తులు లోక సంక్షేమం, ధర్మ ప్రతిష్ఠాపన కొరకు నిర్వహించే సార్వజనీన మహా యాగము'
      }
    ],
    constructionOrFeatures: [
      'Provides the complete manual and practical procedures for yajnas and sacrificial rituals.',
      'Explains rules and sacred methods of religious ceremonies, festivals, and 16 samskaras (life sacraments).',
      'Strongly emphasizes Karma Yoga (selfless dedicated duty and righteous cosmic action).',
      'Contains practical instructions for the priests (Adhvaryu) for measuring altars and chanting.',
      'Guides individuals towards righteous living, self-discipline, and social harmony.'
    ],
    constructionOrFeaturesTe: [
      'యజ్ఞయాగాదుల నిర్వహణకు సమగ్ర శాస్త్రీయ పద్ధతులను మరియు నియమాలను సమకూరుస్తుంది.',
      'షోడశ సంస్కారాలు మరియు ధర్మబద్ధమైన పూజా విధానాలను విపులంగా వివరిస్తుంది.',
      'నిష్కామ కర్మయోగం మరియు కర్తవ్య నిర్వహణను బలంగా నొక్కిచెబుతుంది.',
      'యజ్ఞవేదికల నిర్మాణం (శుల్బ సూత్రాలు) మరియు హోమ ద్రవ్యాల సమర్పణకు అధ్వర్యునికి మార్గదర్శి.',
      'మానవుడిని సదాచారము, క్రమశిక్షణ మరియు సాంఘిక సామరస్యం వైపు నడిపిస్తుంది.'
    ],
    significance: [
      'It is the foundational bedrock of all Vedic rituals and yajnas.',
      'Teaches the critical importance of duty, discipline, and right action in human life.',
      'Describes timeless methods of worship, domestic rites, and lifelong samskaras.',
      'Plays a vital role in preserving Indian spiritual culture and Vedic heritage.',
      'Remains actively chanted and performed in temples and Vedic ceremonies across India today.'
    ],
    significanceTe: [
      'సకల వైదిక క్రతువులు మరియు యజ్ఞాలకు ప్రధాన ఆధారభూతము.',
      'మానవ జీవితంలో ధర్మం, క్రమశిక్షణ మరియు కర్తవ్య పాలనల ప్రాధాన్యతను బోధిస్తుంది.',
      'పూజా విధానాలు, నిత్య కర్మలు మరియు సంస్కారాల శాస్త్ర ప్రమాణము.',
      'భారతీయ సాంస్కృతిక వైభవాన్ని, సంప్రదాయాన్ని యుగయుగాలుగా సజీవంగా నిలిపింది.',
      'నేటికీ ఆలయాలలో, గృహ పూజలలో అత్యధికంగా ఉపయోగించబడుతున్న వేదము.'
    ],
    shakhaLossStats: {
      totalShakhas: '101+ Shakhas',
      availableShakhas: '3 - 4 Shakhas (~3.5% Preserved)',
      lostShakhas: '97+ Shakhas (~96.5% Lost)',
      survivingNames: [
        'Shukla Yajurveda: Madhyandina & Kanva Shakhas',
        'Krishna Yajurveda: Taittiriya & Maitrayani (with Katha/Kapisthala fragments)'
      ],
      survivingNamesTe: [
        'శుక్ల యజుర్వేదం: వాజసనేయి మాధ్యాందిన & కాణ్వ శాఖలు',
        'కృష్ణ యజుర్వేదం: తైత్తిరీయ, మైత్రాయణి (మరియు కఠ, కపిష్ఠల ఖండికలు)'
      ],
      lostExamples: ['Jabala', 'Charaka', 'Shvetashvatara branch', 'Ahvara'],
      lostExamplesTe: ['జాబాల', 'చరక', 'శ్వేతాశ్వతర మూలశాఖ', 'ఆహ్వార మున్నగు 97+ శాఖలు'],
      structure: {
        samhita: 'Vajasaneyi Samhita (Shukla), Taittiriya Samhita (Krishna)',
        samhitaTe: 'వాజసనేయి సంహిత (శుక్ల), తైత్తిరీయ సంహిత (కృష్ణ)',
        brahmana: 'Shatapatha Brahmana (100 chapters), Taittiriya Brahmana',
        brahmanaTe: 'శతపథ బ్రాహ్మణము (100 అధ్యాయాలు), తైత్తిరీయ బ్రాహ్మణము',
        aranyaka: 'Brihadaranyaka, Taittiriya Aranyaka',
        aranyakaTe: 'బృహదారణ్యకము, తైత్తిరీయ అరణ్యకము',
        upanishad: 'Isha, Brihadaranyaka, Katha, Taittiriya, Shvetashvatara, Maitri',
        upanishadTe: 'ఈశావాస్య, బృహదారణ్యక, కఠ, తైత్తిరీయ, శ్వేతాశ్వతర, మైత్రి'
      }
    },
    coreQuote: "Yajurveda is the 'Veda of Sacrifice and Rituals' that teaches us how to perform righteous actions and live a disciplined life.",
    coreQuoteTe: "యజుర్వేదము యజ్ఞ కర్మల దివ్య నిధి; ధర్మబద్ధమైన కార్యాలు చేస్తూ క్రమశిక్షణాయుత జీవితాన్ని ఎలా గడపాలో ఇది మానవాళికి నేర్పుతుంది.",
    color: '#E65100',
    accentBg: '#FFF3E0',
    icon: '🔥',
    imageSrc: './images/vedas/yajurveda.jpg'
  },

  // =========================================================================
  // 3. SAMAVEDA (सामवेद) - The Veda of Melodies & Music
  // =========================================================================
  {
    id: 'samaveda',
    charId: 'brahma-samaveda',
    title: 'Samaveda',
    titleTe: 'సామవేదము',
    subtitle: 'The Veda of Melodies',
    subtitleTe: 'గాన వేదము • భారతీయ సంగీత మూల గంగ',
    sanskritName: 'सामवेद',
    faceOfBrahma: 'Western Face (పశ్చిమ ముఖము)',
    faceOfBrahmaTe: 'పశ్చిమ ముఖము',
    meter: 'Jagati Meter (జగతీ ఛందస్సు)',
    meterTe: 'జగతీ ఛందస్సు',
    priestRole: 'Udgatri / Udgātṛ (ఉద్గాత - సామగాన ప్రవక్తలు)',
    priestRoleTe: 'ఉద్గాత (యజ్ఞ వేదికపై మధుర స్వరాలతో సామగానం ఆలపించు గాయకుడు)',
    overview: 'Samaveda is one of the four Vedas of Hinduism. It is a collection of hymns meant to be sung in melodious tunes during Vedic rituals and sacrifices. In the Bhagavad Gita, Lord Krishna reveals: "Among the Vedas, I am the Samaveda" (వేదానాం సామవేదోఽస్మి).',
    overviewTe: 'సామవేదము హిందూ ధర్మంలోని చతుర్వేదాలలో నాదమయమైనది. యజ్ఞయాగాదులలో మధురమైన స్వరాలతో గానం చేయబడే స్తోత్రాల సమాహారమిది. భగవద్గీతలో శ్రీకృష్ణ పరమాత్మ "వేదములలో నేను సామవేదాన్ని" అని స్వయంగా ప్రకటించెను.',
    keyFacts: {
      meaning: "'Sāma' = melody / song, 'Veda' = knowledge",
      meaningTe: "'సామ' = గానము / మధుర స్వరము, 'వేదం' = జ్ఞానం",
      position: 'Third among the four Vedas',
      positionTe: 'చతుర్వేదాలలో మూడవ స్థానము',
      language: 'Vedic Sanskrit with musical notations (swaras)',
      languageTe: 'వైదిక సంస్కృతం (స్వర సప్తక గుర్తులు కలది)',
      mainThemeOrNature: 'Collection of sacred hymns set to sublime musical chants (Samagana)',
      mainThemeOrNatureTe: 'దివ్య గాన రూపంలో ఆలపించే పవిత్ర స్తోత్రముల సంపుటి (సామగానము)',
      formOrStructure: 'Archika and Gana divisions; set to musical swaras',
      formOrStructureTe: 'ఆర్చిక మరియు గాన భాగాలు; గాన యోగ్యమైన స్వర పద్ధతులు',
      versesOrMantras: 'About 1,875 mantras (Only ~75 are unique; rest from Rigveda set to melody)',
      versesOrMantrasTe: 'సుమారు 1,875 మంత్రాలు (వీటిలో ~75 మాత్రమే ప్రత్యేకమైనవి; మిగిలినవి ఋగ్వేద సూక్తాలే గానీ సంగీత స్వరాలతో కూర్చబడ్డాయి)'
    },
    branches: [
      {
        name: 'Kauthuma Shakha',
        nameTe: 'కౌథుమ శాఖ',
        regions: 'Most widely practiced; prevalent in Gujarat, Rajasthan, Tamil Nadu, and Andhra Pradesh',
        regionsTe: 'అత్యంత ప్రసిద్ధ శాఖ; గుజరాత్, రాజస్థాన్, తమిళనాడు మరియు ఆంధ్రప్రదేశ్‌లలో ప్రాచుర్యం'
      },
      {
        name: 'Ranayaniya Shakha',
        nameTe: 'రాణాయనీయ శాఖ',
        regions: 'Preserved by traditional scholars in Karnataka, Maharashtra, and parts of Odisha',
        regionsTe: 'కర్ణాటక, మహారాష్ట్ర మరియు ఒడిశా ప్రాంతాలలో నిష్ణాతులైన వైదికులచే సంరక్షించబడుతోంది'
      },
      {
        name: 'Jaiminiya (Talavakara) Shakha',
        nameTe: 'జైమినీయ (తలవకార) శాఖ',
        regions: 'Rare and ancient recension preserved chiefly in Kerala and Tamil Nadu',
        regionsTe: 'అత్యంత ప్రాచీనమైనది; కేరళ మరియు తమిళనాడు ప్రాంతాలలో సంప్రదాయబద్ధంగా పఠించబడుతోంది'
      }
    ],
    associatedUpanishads: [
      {
        name: 'Chandogya Upanishad',
        nameTe: 'ఛాందోగ్యోపనిషత్తు',
        description: 'One of the oldest and most profound Upanishads. Details the cosmic meditation on OM (Udgitha) and contains the great Mahavakya: "Tat Tvam Asi" (That Thou Art).',
        descriptionTe: 'అత్యంత ప్రాచీన మహోపనిషత్తు. ఓంకార ఉద్గీథ ఉపాసన మరియు "తత్త్వమసి" (నీవే ఆ పరబ్రహ్మవు) అనే జగత్ప్రసిద్ధ మహావాక్య నిలయము.'
      },
      {
        name: 'Kena Upanishad',
        nameTe: 'కేనోపనిషత్తు',
        description: 'Belongs to the Jaiminiya/Talavakara recension. Contemplates the ultimate source behind sight, hearing, mind, and speech: "Keneshitam patati preshitam manah".',
        descriptionTe: 'జైమినీయ శాఖకు చెందినది. కన్ను, చెవి, మనస్సు, వాక్కుల వెనుక ఉండి నడిపించే చైతన్య ప్రభువు ఎవరు? ("కేనేషితం...") అని విచారిస్తుంది.'
      }
    ],
    didYouKnow: {
      title: 'Foundation of Indian Classical Music & the 7 Notes',
      titleTe: 'భారతీయ సప్తస్వరాల జనని సామవేదం',
      content: 'The 7 basic musical notes of India (Sa, Re, Ga, Ma, Pa, Dha, Ni) evolved directly from the Vedic swaras (Krushta, Prathama, Dvitiya, Tritiya, Chaturtha, Mandra, Atiswarya) used in Samavedic singing.',
      contentTe: 'భారతీయ సంగీతంలోని "స - రి - గ - మ - ప - ద - ని" అనే సప్తస్వరాలు సామవేద గానంలోని వైదిక స్వరాల నుండే ఉద్భవించాయి.',
      musicalScale: ['స (Sa)', 'రి (Re)', 'గ (Ga)', 'మ (Ma)', 'ప (Pa)', 'ద (Dha)', 'ని (Ni)']
    },
    constructionOrFeatures: [
      'Transforms Vedic hymns into divine, uplifting musical chants.',
      "Preserves one of the world's oldest living oral traditions of sacred music.",
      'Greatly influenced the development of Indian classical music (Carnatic and Hindustani) and devotional singing.',
      "Its chants follow precise sacred swaras (notes) and melodious patterns collectively termed 'Sāmagāna' (సామగానము)."
    ],
    constructionOrFeaturesTe: [
      'వైదిక ఋక్కులను భక్తిప్రపత్తులతో కూడిన గానామృతంగా మారుస్తుంది.',
      'ప్రపంచంలోనే అత్యంత పురాతనమైన సంగీత వాఙ్మయ సంప్రదాయాన్ని పరిరక్షిస్తోంది.',
      'భారతీయ శాస్త్రీయ సంగీత వ్యవస్థ (కర్ణాటక & హిందుస్తానీ) మరియు సంకీర్తన పద్ధతులన్నింటికీ ఇది మూలబీజం.',
      '"సామగానము" అనబడే నిర్దిష్ట ఉచ్ఛారణ, స్వరారోహణ-అవరోహణ సూత్రాలను కచ్చితంగా పాటిస్తుంది.'
    ],
    significance: [
      'Chanted prominently during Soma Yajnas and major Vedic sacrifices to invoke divine bliss.',
      'Chanted by Udgātṛ priests who bring peaceful, transcendental resonance to ritual spaces.',
      'Considered the undisputed fountainhead and foundation of Indian classical music.',
      'Emphasizes ecstatic devotion (Bhakti), universal harmony, and spiritual elevation through music.'
    ],
    significanceTe: [
      'సోమయాగాలలో మరియు విశేష క్రతువులలో దేవతలను ఆహ్లాదపరచుటకు ప్రముఖంగా గానం చేయబడుతుంది.',
      'ఉద్గాతృ పురోహితులు పవిత్ర నాదంతో యజ్ఞ ప్రాంగణాన్ని దివ్య చైతన్యంతో నింపుతారు.',
      'భారతీయ శాస్త్రీయ సంగీత కళకు మాతృకగా పరిగణించబడుతుంది.',
      'సంగీత నాదోపాసన ద్వారా భగవత్ ప్రాప్తి, మానసిక ప్రశాంతత, ఆధ్యాత్మిక ఉన్నతిని సాధించవచ్చని నిరూపిస్తుంది.'
    ],
    shakhaLossStats: {
      totalShakhas: '1,000+ Shakhas (Sahasra Vartma)',
      availableShakhas: '3 Shakhas (~0.3% Preserved)',
      lostShakhas: '997+ Shakhas (~99.7% Lost)',
      survivingNames: [
        'Kauthuma Shakha (Gujarat, Rajasthan, Tamil Nadu, Andhra Pradesh)',
        'Ranayaniya Shakha (Karnataka, Maharashtra, Odisha)',
        'Jaiminiya / Talavakara Shakha (Kerala, Tamil Nadu)'
      ],
      survivingNamesTe: [
        'కౌథుమ శాఖ (గుజరాత్, రాజస్థాన్, తమిళనాడు, ఆంధ్రప్రదేశ్)',
        'రాణాయణీయ శాఖ (కర్ణాటక, మహారాష్ట్ర, ఒడిశా)',
        'జైమినీయ / తలవకార శాఖ (కేరళ, తమిళనాడు)'
      ],
      lostExamples: ['Bhallavi', 'Kalabavit', 'Shaityayana', 'Vamadevya'],
      lostExamplesTe: ['భల్లవి', 'కాలబవిత్', 'శైత్యాయన', 'వామదేవ్య మున్నగు 997+ శాఖలు'],
      structure: {
        samhita: 'Purvarchika & Uttararchika (1,875 musical mantras)',
        samhitaTe: 'పూర్వార్చిక మరియు ఉత్తరార్చిక (1,875 గేయ మంత్రాలు)',
        brahmana: 'Panchavimsha (Tandya), Shadvimsha, Jaiminiya Brahmanas',
        brahmanaTe: 'పంచవింశ (తాండ్య), షడ్వింశ, జైమినీయ బ్రాహ్మణములు',
        aranyaka: 'Aranya Gana, Talavakara Aranyaka',
        aranyakaTe: 'ఆరణ్య గానం, తలవకార అరణ్యకము',
        upanishad: 'Chandogya Upanishad, Kena Upanishad',
        upanishadTe: 'ఛాందోగ్య ఉపనిషత్తు, కేనోపనిషత్తు'
      }
    },
    coreQuote: "Samaveda is the 'Veda of Music and Melodies,' containing hymns sung during Vedic rituals and forming the earliest foundation of India's musical tradition.",
    coreQuoteTe: "సామవేదము గాన-సంగీత వేదము; యజ్ఞ క్రతువులలో మధురంగా ఆలపింపబడుతూ భారతీయ సంగీత విజ్ఞానానికి ఆద్య పునాదిగా విరాజిల్లుతోంది.",
    color: '#C2185B',
    accentBg: '#FCE4EC',
    icon: '🎵',
    imageSrc: './images/vedas/samaveda.jpg'
  },

  // =========================================================================
  // 4. ATHARVAVEDA (अथर्ववेद) - The Veda of Everyday Life and Healing
  // =========================================================================
  {
    id: 'atharvaveda',
    charId: 'brahma-atharvaveda',
    title: 'Atharvaveda',
    titleTe: 'అథర్వణవేదము',
    subtitle: 'The Veda of Everyday Life and Healing',
    subtitleTe: 'నిత్య జీవిత & చికిత్సా వేదము • ఆయుర్వేద మూల గంగ',
    sanskritName: 'अथर्ववेद',
    faceOfBrahma: 'Northern Face (ఉత్తర ముఖము)',
    faceOfBrahmaTe: 'ఉత్తర ముఖము',
    meter: 'Anushtubh Meter (అనుష్టుప్ ఛందస్సు)',
    meterTe: 'అనుష్టుప్ ఛందస్సు',
    priestRole: 'Brahma Priest (బ్రహ్మ - యజ్ఞ సంరక్షకుడు & సర్వాధ్యక్షుడు)',
    priestRoleTe: 'బ్రహ్మ (మౌనంగా సర్వ యజ్ఞ కర్మలను పర్యవేక్షించి, లోపాలు సంభవిస్తే ప్రాయశ్చిత్త మంత్రాలతో రక్షించు ప్రధానాచార్యుడు)',
    overview: 'The Atharvaveda is the fourth and final Veda of Hinduism. It contains hymns, prayers, healing practices, and knowledge related to daily living, health, peace, protection, and prosperity.',
    overviewTe: 'అథర్వణవేదము హిందూ ధర్మంలోని నాల్గవ మరియు చివరి వేదము. నిత్య జీవితం, ఆరోగ్యం, శాంతి, రక్షణ, కుటుంబ సామరస్యం మరియు ఐశ్వర్య సాధనకు సంబంధించిన దివ్య మంత్రాలు, చికిత్సా పద్ధతులు ఇందులో విస్తారంగా ఉన్నాయి.',
    keyFacts: {
      meaning: "'Atharvan' (name of an ancient sage / priest of fire) + 'Veda' (knowledge)",
      meaningTe: "'అథర్వన్' (ప్రాచీన అగ్ని ఉపాసక మహర్షి నామం) + 'వేదం' (జ్ఞానం)",
      position: 'Fourth among the four Vedas',
      positionTe: 'చతుర్వేదాలలో నాల్గవ వేదము',
      language: 'Vedic Sanskrit',
      languageTe: 'వైదిక సంస్కృతం',
      mainThemeOrNature: 'Practical holistic life, healing sciences, peace, societal protection, philosophy',
      mainThemeOrNatureTe: 'లౌకిక ఆయురారోగ్య రక్షణ, చికిత్సలు, శాంతి కర్మలు, సమాజ శ్రేయస్సు, బ్రహ్మజ్ఞానం',
      formOrStructure: '20 Kandas (Books), divided into Prapathakas and Suktas',
      formOrStructureTe: '20 కాండలు (గ్రంథాలు), ప్రపాఠకాలు మరియు సూక్తములు',
      versesOrMantras: 'About 730 hymns and approximately 6,000 mantras',
      versesOrMantrasTe: 'సుమారు 730 సూక్తాలు మరియు దాదాపు 6,000 మంత్రములు'
    },
    mainSubjects: [
      {
        title: 'Health and Healing',
        titleTe: 'ఆరోగ్యం మరియు వైద్య చికిత్సలు',
        icon: '🌿',
        description: 'Comprehensive natural remedies, physical cures, psychological balance, and disease prevention techniques.',
        descriptionTe: 'వ్యాధి నివారణ, శారీరక-మానసిక స్వస్థత మరియు ప్రకృతి సహజ ఔషధ ప్రయోగ పద్ధతులు.'
      },
      {
        title: 'Ayurveda and Medicinal Herbs',
        titleTe: 'ఆయుర్వేద వనమూలికల విజ్ఞానం',
        icon: '🪴',
        description: 'Extensive botanical taxonomy, identification of medicinal plants, and early foundations of pharmacology.',
        descriptionTe: 'దివ్య వనస్పతులు, మూలికా రసాయనాలు మరియు రోగనిరోధక ఔషధాల ప్రాచీన విజ్ఞాన భాండాగారం.'
      },
      {
        title: 'Peace, Prosperity and Protection',
        titleTe: 'శాంతి, సంపద మరియు రక్షా మంత్రాలు',
        icon: '🪷',
        description: 'Shanti and Paushtika rites for overcoming obstacles, neutralizing negative energies, and invoking abundance.',
        descriptionTe: 'విఘ్న నివారణ, దుష్టశక్తుల నుండి రక్షణ, గ్రహ శాంతి మరియు సకల ఐశ్వర్య ప్రాప్తి మంత్రాలు.'
      },
      {
        title: 'Family Life and Social Harmony',
        titleTe: 'కుటుంబ జీవనం మరియు సాంఘిక ఐక్యత',
        icon: '👨‍👩‍👧‍👦',
        description: 'Prayers for marital harmony, noble progeny, communal brotherhood (Sammanasya Suktas), and societal peace.',
        descriptionTe: 'దాంపత్య అనురాగం, సత్సంతానం, సామాజిక ఐక్యమత్యం మరియు సోదరభావ సాధనకు సూక్తాలు.'
      },
      {
        title: 'Spiritual Knowledge and Philosophy',
        titleTe: 'ఆధ్యాత్మిక బ్రహ్మ విజ్ఞానం',
        icon: '🧘',
        description: 'Sublime philosophical contemplations on Skambha (cosmic pillar), Kala (Time), Prana, and ultimate Brahman.',
        descriptionTe: 'స్కంభ సూక్తం (విశ్వాధార స్తంభం), కాల సూక్తం, ప్రాణ సూక్తం మరియు పరబ్రహ్మ తత్త్వ వివేచన.'
      }
    ],
    associatedUpanishads: [
      {
        name: 'Mundaka Upanishad',
        nameTe: 'ముండకోపనిషత్తు',
        description: 'Famous source of the Indian national motto "Satyameva Jayate" (Truth Alone Triumphs) and the iconic two-birds allegory symbolizing Jivatma and Paramatma.',
        descriptionTe: 'భారత జాతీయ నినాదమైన "సత్యమేవ జయతే" (సత్యమే జయించును) కి జన్మస్థానము; జీవాత్మ-పరమాత్మల ద్వా సుపర్ణా రూపక ఉపనిషత్తు.'
      },
      {
        name: 'Mandukya Upanishad',
        nameTe: 'మాండూక్యోపనిషత్తు',
        description: 'Twelve terse verses exploring the totality of consciousness through the sacred syllable OM: Jagrat (waking), Swapna (dream), Sushupti (deep sleep), and Turiya (transcendental state). Contains "Ayam Atma Brahma".',
        descriptionTe: 'ఓంకార ప్రణవ నాదం ద్వారా నాలుగు చేతనావస్థలను (జాగ్రత్, స్వప్న, సుషుప్తి, తురీయం) విశ్లేషించే అద్భుత వేదాంత గ్రంథం. "అయమాత్మా బ్రహ్మ" మూలం.'
      },
      {
        name: 'Prashna Upanishad',
        nameTe: 'ప్రశ్నోపనిషత్తు',
        description: 'Six seeker disciples approach Sage Pippalada with fundamental existential questions regarding creation, Prana, mind, and the Supreme Person.',
        descriptionTe: 'పిప్పలాద మహర్షిని ఆరుగురు శిష్యులు అడిగిన సృష్టి, ప్రాణ, అమృతత్త్వ సంబంధిత ఆరు గంభీర ప్రశ్నలు-సమాధానాలు.'
      }
    ],
    constructionOrFeatures: [
      'Harmoniously addresses both mundane worldly prosperity and sublime transcendental spiritual wisdom.',
      'Includes specialized hymns for universal peace, vibrant health, agricultural prosperity, and community well-being.',
      'Contains ancient surgical insights, herbal recipes, and holistic therapies establishing the roots of Ayurveda.',
      'Offers invaluable ethical guidance for living a balanced, healthy, peaceful, and dharmic human life.'
    ],
    constructionOrFeaturesTe: [
      'లౌకిక జీవన శ్రేయస్సును మరియు పారమార్థిక ముక్తిని రెంటినీ సమన్వయపరుస్తుంది.',
      'విశ్వ శాంతి, అద్భుత ఆరోగ్యం, పాడిపంటల సమృద్ధి మరియు సమాజ క్షేమం కొరకైన ప్రార్థనలు కలిగి ఉంది.',
      'ఆయుర్వేదానికి ఆద్యమైన సహజ ఔషధ చికిత్సలు మరియు ఆరోగ్య సూత్రాలను అందిస్తుంది.',
      'సమతుల్యమైన, వ్యాధిరహితమైన మరియు సామరస్యపూర్వకమైన నిత్య జీవితాన్ని ఎలా నడపాలో దారి చూపుతుంది.'
    ],
    significance: [
      'Considered the mother and fountainhead of Ayurveda and ancient Indian healing and medicinal systems.',
      'Describes potent prayers and practices for longevity, health, mental resilience, and spiritual defense.',
      'Reflects the advanced social, cultural, civic, and scientific knowledge of ancient Indian civilization.',
      'Bridged the sacred altar with everyday human life, solving real-world challenges through divine alignment.'
    ],
    significanceTe: [
      'ఆయుర్వేదానికి మరియు ప్రాచీన భారతీయ చికిత్సా సంప్రదాయాలకు మూల జన్మస్థానము.',
      'దీర్ఘాయుష్షు (ఆయుష్య సూక్తులు), ఆరోగ్యం, భయ నివారణ మరియు సంరక్షణకు దివ్య కవచం.',
      'ప్రాచీన భారతదేశ సాంఘిక, సాంస్కృతిక మరియు శాస్త్రీయ విజ్ఞానాన్ని స్పష్టంగా ప్రతిబింబిస్తుంది.',
      'యాజ్ఞిక క్రతువులను మాత్రమే గాక, ప్రతి సామాన్య గృహస్థు నిత్య జీవిత కష్టాలను పరిష్కరించే వేదము.'
    ],
    shakhaLossStats: {
      totalShakhas: '9+ Shakhas',
      availableShakhas: '2 Shakhas (~22.2% Preserved)',
      lostShakhas: '7+ Shakhas (~77.8% Lost)',
      survivingNames: [
        'Shaunaka Shakha (widely chanted across India)',
        'Paippalada Shakha (preserved in Odisha and Gujarat)'
      ],
      survivingNamesTe: [
        'శౌనక శాఖ (భారతదేశమంతటా విస్తృతంగా పఠించబడుతున్నది)',
        'పైప్పలాద శాఖ (ఒడిశా మరియు గుజరాత్‌లోని కొద్దిమంది పండితుల వద్ద లభ్యం)'
      ],
      lostExamples: ['Tauda', 'Mauda', 'Jalada', 'Brahmavada', 'Devadarsha', 'Charanavaidya'],
      lostExamplesTe: ['స్తౌద', 'మౌద', 'జలాద', 'బ్రహ్మవద', 'దేవదర్శ', 'చారణవైద్య మున్నగు 7 శాఖలు'],
      structure: {
        samhita: 'Shaunaka Samhita (20 Kandas, 730 suktas, ~6,000 mantras)',
        samhitaTe: 'శౌనక సంహిత (20 కాండలు, 730 సూక్తాలు, దాదాపు 6,000 మంత్రాలు)',
        brahmana: 'Gopatha Brahmana (Purva & Uttara Gopatha)',
        brahmanaTe: 'గోపథ బ్రాహ్మణము (పూర్వ మరియు ఉత్తర గోపథము)',
        aranyaka: 'Mostly lost / Integrated into Gopatha',
        aranyakaTe: 'దాదాపు లుప్తమైనది / గోపథ బ్రాహ్మణంలో మిళితమైనది',
        upanishad: 'Prashna, Mundaka, Mandukya Upanishads (Origin of Satyam Eva Jayate)',
        upanishadTe: 'ప్రశ్న, ముండక, మాండూక్య ఉపనిషత్తులు ("సత్యమేవ జయతే" మూల నిలయం)'
      }
    },
    coreQuote: "Atharvaveda is the 'Veda of Daily Life and Healing,' combining spiritual wisdom with practical knowledge about health, peace and human well-being.",
    coreQuoteTe: "అథర్వణవేదము నిత్య జీవిత మరియు ఆరోగ్య చికిత్సా వేదము; ఆధ్యాత్మిక జ్ఞానాన్ని ఆరోగ్యం, శాంతి మరియు మానవ సంక్షేమంతో సమన్వయించే దివ్య సంపద.",
    color: '#2E7D32',
    accentBg: '#E8F5E9',
    icon: '🌿',
    imageSrc: './images/vedas/atharvaveda.jpg'
  }
];

// =========================================================================
// VEDIC INDIAN SCRIPTURES HIERARCHY TREE (శ్రుతి & స్మృతి వాఙ్మయ వృక్షం)
// Extracted from authentic Indian manuscript infographic
// =========================================================================

export interface VedicScriptureNode {
  titleEn: string;
  titleTe: string;
  sanskritName: string;
  meaningEn: string;
  meaningTe: string;
  descriptionEn: string;
  descriptionTe: string;
}

export interface VedicIndianScripturesData {
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  imageSrc: string;
  shruti: {
    titleEn: string;
    titleTe: string;
    sanskritName: string;
    meaningEn: string;
    meaningTe: string;
    descriptionEn: string;
    descriptionTe: string;
    fourVedas: {
      id: string;
      nameEn: string;
      nameTe: string;
      sanskrit: string;
      summaryEn: string;
      summaryTe: string;
      color: string;
      icon: string;
    }[];
    sectionsOfVedas: {
      nameEn: string;
      nameTe: string;
      roleEn: string;
      roleTe: string;
      icon: string;
    }[];
    vedanga: {
      nameEn: string;
      nameTe: string;
      meaningEn: string;
      meaningTe: string;
      icon: string;
    }[];
    upaveda: {
      nameEn: string;
      nameTe: string;
      subjectEn: string;
      subjectTe: string;
      associatedVedaEn: string;
      associatedVedaTe: string;
      icon: string;
    }[];
  };
  smriti: {
    titleEn: string;
    titleTe: string;
    sanskritName: string;
    meaningEn: string;
    meaningTe: string;
    descriptionEn: string;
    descriptionTe: string;
    branches: {
      id: string;
      titleEn: string;
      titleTe: string;
      icon: string;
      color: string;
      itemsEn: string[];
      itemsTe: string[];
      descriptionEn: string;
      descriptionTe: string;
      isHighlighted?: boolean;
    }[];
  };
}

export const VEDIC_INDIAN_SCRIPTURES_DATA: VedicIndianScripturesData = {
  titleEn: 'Vedic Indian Scriptures',
  titleTe: 'భారతీయ వైదిక వాఙ్మయ విజ్ఞాన సర్వస్వం',
  subtitleEn: 'Comprehensive Tree of Sanatana Dharma: Shruti (That which was heard) & Smriti (That which is remembered)',
  subtitleTe: 'సనాతన ధర్మ మూల ప్రమాణాలైన శ్రుతి (అపౌరుషేయ దివ్య జ్ఞానం) మరియు స్మృతి (మహర్షుల స్మృతి వాఙ్మయం) సమగ్ర విభజన',
  imageSrc: './images/vedas/vedic_indian_scriptures.jpg',
  shruti: {
    titleEn: "Shruti's",
    titleTe: 'శ్రుతి వాఙ్మయం',
    sanskritName: 'श्रुती',
    meaningEn: 'That which was heard (Revealed, Apaurusheya, Eternal)',
    meaningTe: 'విన్నది (పరమాత్మ దివ్య వాణిగా ఋషులచే దర్శింపబడి వినబడిన అపౌరుషేయ జ్ఞానం)',
    descriptionEn: 'The primary, eternal, authorless canonical fountainhead of Sanatana Dharma heard by realized seers during deep cosmic meditation.',
    descriptionTe: 'పరమేశ్వరుని నిశ్వాసముగా ఋషుల అంతర్నేత్రములకు సాక్షాత్కరించిన పరమ ప్రమాణమైన ప్రథమ వాఙ్మయము.',
    fourVedas: [
      {
        id: 'rigveda',
        nameEn: 'Rigveda',
        nameTe: 'ఋగ్వేదము',
        sanskrit: 'ऋग्वेद',
        summaryEn: 'Veda of Hymns & Praise • 10 Mandalas, 1,028 Suktas • Gayatri Mantra',
        summaryTe: 'స్తుతి జ్ఞాన వేదము • 10 మండలాలు, 1,028 సూక్తాలు • గాయత్రీ మంత్ర మూలం',
        color: '#D84315',
        icon: '📜'
      },
      {
        id: 'yajurveda',
        nameEn: 'Yajurveda',
        nameTe: 'యజుర్వేదము',
        sanskrit: 'यजुर्वेद',
        summaryEn: 'Veda of Rituals & Action • Shukla & Krishna • Agnihotra, Somayajna',
        summaryTe: 'యజ్ఞ కర్మ వేదము • శుక్ల & కృష్ణ విభాగాలు • కర్మయోగం & షోడశ సంస్కారాలు',
        color: '#E65100',
        icon: '🔥'
      },
      {
        id: 'samaveda',
        nameEn: 'Samaveda',
        nameTe: 'సామవేదము',
        sanskrit: 'सामवेद',
        summaryEn: 'Veda of Melodies • Indian Classical Music Scale (Sa Re Ga Ma Pa Dha Ni)',
        summaryTe: 'గాన వేదము • భారతీయ సంగీత సప్తస్వరాల మూల జనని • ఉద్గాతృ సామగానం',
        color: '#C2185B',
        icon: '🎵'
      },
      {
        id: 'atharvaveda',
        nameEn: 'Atharvaveda',
        nameTe: 'అథర్వణవేదము',
        sanskrit: 'अथर्ववेद',
        summaryEn: 'Veda of Daily Living & Healing • 20 Kandas • Foundation of Ayurveda',
        summaryTe: 'నిత్య జీవిత & చికిత్సా వేదము • 20 కాండలు • ఆయుర్వేద మూల గంగ',
        color: '#2E7D32',
        icon: '🌿'
      }
    ],
    sectionsOfVedas: [
      {
        nameEn: 'Samhita',
        nameTe: 'సంహిత',
        roleEn: 'Core metrical mantras, hymns, and cosmic invocations chanted in worship',
        roleTe: 'దేవతా స్తుతులు, ప్రార్థనలు మరియు దివ్య మంత్రాల మూల సమాహారము',
        icon: '📖'
      },
      {
        nameEn: 'Brahman',
        nameTe: 'బ్రాహ్మణము',
        roleEn: 'Detailed prose commentaries explaining the meaning, symbols, and procedures of yajnas',
        roleTe: 'యజ్ఞయాగాదుల విధివిధానాలు, కర్మకాండ వివరణలు మరియు ఆధ్యాత్మిక అర్థాల వివరణ',
        icon: '🏛️'
      },
      {
        nameEn: 'Aranyak',
        nameTe: 'ఆరణ్యకము',
        roleEn: 'Forest texts contemplating inner meditative sacrifices, symbolism, and metaphysics',
        roleTe: 'వనాలలో నివసించే సాధకులకై ఉద్దేశించిన అంతర్ముఖ ఉపాసనలు, ధ్యాన రహస్యాలు',
        icon: '🌳'
      }
    ],
    vedanga: [
      {
        nameEn: 'Vyakarana',
        nameTe: 'వ్యాకరణము',
        meaningEn: 'Grammar (Language structure & linguistic science)',
        meaningTe: 'భాషా వ్యాకరణము, ధాతు రూప విశ్లేషణ (పాణిని ప్రణీతం)',
        icon: '✍️'
      },
      {
        nameEn: 'Jyotisha',
        nameTe: 'జ్యోతిషము',
        meaningEn: 'Astronomy & Astrology (Celestial calendar & auspicious time)',
        meaningTe: 'ఖగోళ శాస్త్రం, గ్రహ గతులు & శుభ ముహూర్త కాల గణన',
        icon: '✨'
      },
      {
        nameEn: 'Nirukta',
        nameTe: 'నిరుక్తము',
        meaningEn: 'Etymology & Semantics (Deciphering root origins of Vedic words by Yaska)',
        meaningTe: 'వేద పద వ్యుత్పత్తి, నిఘంటువు & అంతరార్థ పరిశోధన (యాస్కాచార్యుడు)',
        icon: '📚'
      },
      {
        nameEn: 'Shiksha',
        nameTe: 'శిక్ష',
        meaningEn: 'Phonetics & Pronunciation (Sacred swaras, rhythm, accentuation)',
        meaningTe: 'వర్ణోచ్చారణా శాస్త్రం, స్వర విజ్ఞానం, ఉదాత్త-అనుదాత్త-స్వరితాలు',
        icon: '🗣️'
      },
      {
        nameEn: 'Chanda',
        nameTe: 'ఛందస్సు',
        meaningEn: 'Poetic Meter (Prosody, Gayatri, Trishtubh, Jagati, Anushtubh)',
        meaningTe: 'పద్య ఛందోరీతులు, మాత్రలు, అక్షర గణాల వ్యవస్థ (పింగళ ముని)',
        icon: '🎼'
      },
      {
        nameEn: 'KalpSutra',
        nameTe: 'కల్ప సూత్రములు',
        meaningEn: 'Ritual Codes (Shrauta, Grihya, Dharma, and Shulba geometry manuals)',
        meaningTe: 'క్రతు, గృహ్య, ధర్మ మరియు యజ్ఞవేది నిర్మాణ రేఖాగణిత సూత్రాలు',
        icon: '📐'
      }
    ],
    upaveda: [
      {
        nameEn: 'Arthaveda',
        nameTe: 'అర్థవేదము',
        subjectEn: 'Statecraft, public administration, diplomacy, economics, and civil governance',
        subjectTe: 'రాజనీతి, ప్రజాపాలన, దౌత్యనీతి మరియు ఆర్థిక శాస్త్రం',
        associatedVedaEn: 'Attached to Atharvaveda / Rigveda',
        associatedVedaTe: 'అథర్వణవేదము / ఋగ్వేద అనుబంధము',
        icon: '👑'
      },
      {
        nameEn: 'Dhanurveda',
        nameTe: 'ధనుర్వేదము',
        subjectEn: 'Martial science, archery, defense tactics, warfare ethics, and weaponry',
        subjectTe: 'ధనుర్విద్య, రక్షణ శాస్త్రం, యుద్ధ వ్యూహాలు మరియు ఆత్మరక్షణ కళ',
        associatedVedaEn: 'Attached to Yajurveda',
        associatedVedaTe: 'యజుర్వేద అనుబంధము',
        icon: '🏹'
      },
      {
        nameEn: 'Gandharvaveda',
        nameTe: 'గాంధర్వవేదము',
        subjectEn: 'Musicology, rhythm, dance, aesthetics, theater, and classical fine arts',
        subjectTe: 'సంగీతం, నాట్యం, నాట్యశాస్త్రం మరియు లలిత కళల విజ్ఞానం',
        associatedVedaEn: 'Attached to Samaveda',
        associatedVedaTe: 'సామవేద అనుబంధము',
        icon: '🎻'
      },
      {
        nameEn: 'Ayurveda',
        nameTe: 'ఆయుర్వేదము',
        subjectEn: 'Holistic health, botany, pharmacology, surgery, and science of longevity',
        subjectTe: 'సంపూర్ణ ఆరోగ్య విజ్ఞానం, వనమూలికా వైద్యం, రసాయనం మరియు దీర్ఘాయుష్షు',
        associatedVedaEn: 'Attached to Atharvaveda',
        associatedVedaTe: 'అథర్వణవేద అనుబంధము',
        icon: '🌿'
      }
    ]
  },
  smriti: {
    titleEn: "Smriti's",
    titleTe: 'స్మృతి వాఙ్మయం',
    sanskritName: 'स्मृती',
    meaningEn: 'That which is remembered (Authored, Preserved, Traditional tradition)',
    meaningTe: 'స్మరించబడినది (మహర్షులు మానవాళి సంక్షేమం కొరకు స్మరించి అందించిన పౌరుషేయ ధర్మ గ్రంథాలు)',
    descriptionEn: 'The extensive secondary canon authored by realized sages, clarifying cosmic principles for daily conduct, ethics, devotion, history, and statecraft.',
    descriptionTe: 'శ్రుతి మూలాలను లోక వ్యవహారంలో ఆచరించుటకు మహర్షులు, ఆచార్యులు స్మరించి రచించిన విశాల ధర్మ విజ్ఞాన సాగరం.',
    branches: [
      {
        id: 'puranas',
        titleEn: '18 Puranas & Bhagavatam',
        titleTe: 'అష్టాదశ పురాణాలు & శ్రీమద్భాగవతము',
        icon: '🪷',
        color: '#D84315',
        descriptionEn: '18 Great Mahapuranas compiled by Sage Veda Vyasa detailing cosmology, royal genealogies, divine incarnations, and bhakti.',
        descriptionTe: 'వేదవ్యాస మహర్షి ప్రణీతమైన 18 మహాపురాణాలు; సృష్టి క్రమం, వంశవృక్షాలు, భగవదవతారాలు మరియు భక్తి రస ప్రవాహం.',
        itemsEn: [
          'Vishnu, Bhagavata, Shiva, Padma, Brahma, Agni, Bhavishya, Skanda, etc.',
          'Puranas translate profound Vedic truths into relatable moral narratives',
          'Srimad Bhagavatam is crowned as the mature fruit of all Vedic wisdom'
        ],
        itemsTe: [
          'విష్ణు, భాగవత, శివ, పద్మ, బ్రహ్మ, అగ్ని, భవిష్య, స్కాందాది 18 మహాపురాణాలు',
          'వేద రహస్యాలను సామాన్యులకు కథల రూపంలో అందించే అమృత కలశం',
          'శ్రీమద్భాగవతము సమస్త వేద కల్పవృక్షపు పరిపక్వ దివ్య ఫలముగా ప్రశంసించబడింది'
        ]
      },
      {
        id: 'dharma-shastra',
        titleEn: 'Dharma-Shastra',
        titleTe: 'ధర్మశాస్త్రములు',
        icon: '⚖️',
        color: '#795548',
        descriptionEn: 'Codes of ethics, law, civic conduct, duties of the individual, family ethics, and judicial principles.',
        descriptionTe: 'వ్యక్తి, కుటుంబ మరియు సాంఘిక ధర్మ నియమావళి, నైతిక బాధ్యతలు మరియు న్యాయ సూత్రాలు.',
        itemsEn: [
          'Manu Smriti, Yajnavalkya Smriti, Parashara Smriti, Narada Smriti',
          'Varnashrama Dharma & moral conduct across the 4 stages of life',
          'Guides societal equilibrium and dharmic justice'
        ],
        itemsTe: [
          'మను స్మృతి, యాజ్ఞవల్క్య స్మృతి, పరాశర స్మృతి, నారద స్మృతి మొదలైనవి',
          'చతురాశ్రమ ధర్మాలు, వర్ణాశ్రమ విధులు మరియు ఆచార కాండ',
          'సామాజిక శాంతి మరియు సార్వత్రిక న్యాయ వ్యవస్థకు ఆధారం'
        ]
      },
      {
        id: 'tantras',
        titleEn: 'Tantras & Agamas',
        titleTe: 'తంత్ర & ఆగమ శాస్త్రాలు',
        icon: '🔱',
        color: '#C2185B',
        descriptionEn: 'Sacred practical manuals for temple consecration, sculpture, yantras, rituals, mudras, and direct devotional invocation.',
        descriptionTe: 'దేవాలయ ప్రతిష్ఠాపన, విగ్రహ శిల్పకళ, యంత్ర పూజ, ముద్రలు మరియు విశేష ఉపాసనా విధివిధానాలు.',
        itemsEn: [
          'Vaishnava (Pancharatra, Vaikhanasa), Shaiva, and Shakta Agamas',
          'Architecture of sanctum sanctorums (Pratishtha Vidhi) & idol worship',
          'Yantras, mantras, and practical methods of divine communion'
        ],
        itemsTe: [
          'వైష్ణవ (పాంచరాత్ర, వైఖానస), శైవ మరియు శాక్తేయ ఆగమ గ్రంథాలు',
          'ఆలయ నిర్మాణం, విగ్రహ ప్రాణప్రతిష్ఠ మరియు నిత్యోత్సవ క్రతువులు',
          'యంత్రములు, బీజాక్షర మంత్రములు మరియు ఉపాసనా రహస్యాలు'
        ]
      },
      {
        id: 'itihasa',
        titleEn: 'Itihasa (Sacred Epics)',
        titleTe: 'ఇతిహాసములు (రామాయణ, భారతాలు)',
        icon: '🏹',
        color: '#E65100',
        descriptionEn: 'Living historical scriptures ("Thus verily it happened") presenting supreme Dharma through divine biographical journeys.',
        descriptionTe: '"ఇలా నిజంగా జరిగింది" అని నిరూపించే సజీవ చారిత్రక ధర్మ కావ్యాలు; మానవతా శిఖరాలను ఆవిష్కరించే పవిత్ర గ్రంథాలు.',
        itemsEn: [
          'Ramayana (Valmiki) — Maryada Purushottama Lord Rama\'s embodiment of Dharma',
          'Mahabharata (Vyasa) — Encompassing all 4 Purusharthas (Dharma, Artha, Kama, Moksha)',
          'Extolled as the Fifth Veda (Panchama Veda) illuminating practical righteousness'
        ],
        itemsTe: [
          'శ్రీమద్రామాయణము (వాల్మీకి) — మర్యాదా పురుషోత్తముడైన శ్రీరాముని ఆదర్శ ధర్మ జీవనం',
          'మహాభారతము (వేదవ్యాస) — ధర్మార్ధకామమోక్షాల సమగ్ర సాగరం; పంచమ వేదంగా ప్రసిద్ధి',
          'యుద్ధరంగంలోనూ ధర్మ విజయమే అంతిమమని నిరూపించే సార్వకాలిక సత్యం'
        ]
      },
      {
        id: 'gita',
        titleEn: 'Shrimad Bhagavad Gita',
        titleTe: 'శ్రీమద్భగవద్గీత (గీతామృతం)',
        icon: '🪷',
        color: '#7B1113',
        isHighlighted: true,
        descriptionEn: 'The celestial song delivered by Lord Sri Krishna to Arjuna on the battlefield of Kurukshetra; the essence of all 108 Upanishads.',
        descriptionTe: 'కురుక్షేత్ర రణరంగంలో శ్రీకృష్ణ పరమాత్మ అర్జునునికి ఉపదేశించిన పరమ దివ్య గీతామృతం; సర్వోపనిషత్తుల సారాంశం.',
        itemsEn: [
          '700 Verses in 18 Chapters harmonizing Karma Yoga, Jnana Yoga, and Bhakti Yoga',
          '"Sarvopanishado gavo dogdha gopala-nandana" — The cow of Upanishads milked by Krishna',
          'Universal manual for overcoming dejection, mastering the mind, and realizing God'
        ],
        itemsTe: [
          '18 అధ్యాయాలు, 700 శ్లోకాలలో కర్మ, జ్ఞాన, భక్తి, రాజయోగాల దివ్య సమన్వయం',
          '"సర్వోపనిషదో గావో దోగ్ధా గోపాలనందనః" — ఉపనిషత్ గోవులను పితికి కృష్ణుడు ఇచ్చిన అమృతం',
          'మానసిక విషాదాన్ని దూరం చేసి, నిష్కామ కర్మతో మోక్షాన్ని పొందే విశ్వ మార్గదర్శి'
        ]
      },
      {
        id: 'acharyas',
        titleEn: 'Writings of Acharyas & Jagadgurus',
        titleTe: 'ఆచార్య & జగద్గురు భాష్య వాఙ్మయం',
        icon: '🧘',
        color: '#1565C0',
        descriptionEn: 'Rigorous philosophical commentaries (Bhashyas) on the Prasthanatrayi (Upanishads, Brahma Sutras, Bhagavad Gita).',
        descriptionTe: 'ప్రస్థానత్రయి (ఉపనిషత్తులు, బ్రహ్మసూత్రాలు, భగవద్గీత) లపై మహోన్నత ఆచార్యులు రచించిన తత్త్వ భాష్యాలు.',
        itemsEn: [
          'Adi Shankaracharya (Advaita Vedanta — Non-dualism & Jnana)',
          'Sri Ramanujacharya (Vishishtadvaita — Qualified Non-dualism & Saranagati)',
          'Sri Madhvacharya (Dvaita — Dualism & supreme sovereignty of Vishnu)',
          'Nimbarka, Vallabha, and Chaitanya Mahaprabhu (Achintya Bhedabheda)'
        ],
        itemsTe: [
          'శ్రీ ఆదిశంకరాచార్యులు (అద్వైత వేదాంతం — జీవ-బ్రహ్మ ఐక్యత & జ్ఞాన మార్గం)',
          'శ్రీ రామానుజాచార్యులు (విశిష్టాద్వైతం — భక్తి, శరణాగతి & విశేష తత్త్వం)',
          'శ్రీ మధ్వాచార్యులు (ద్వైత దర్శనం — నిత్య భేదం & హరి సర్వోత్తమత)',
          'నింబార్క, వల్లభాచార్య మరియు చైతన్య మహాప్రభు సంప్రదాయ గ్రంథాలు'
        ]
      },
      {
        id: 'saints',
        titleEn: 'Writings of Rasik, Bhakt & Saints',
        titleTe: 'భక్త, రసిక & సంతుల వాఙ్మయం',
        icon: '🪕',
        color: '#6A1B9A',
        descriptionEn: 'Sublime devotional compositions, kirtanas, padas, and poetry composed in Indian regional languages by realized saint-poets.',
        descriptionTe: 'భారతీయ ప్రాంతీయ భాషలలో భక్తశిఖామణులు పరవశంతో ఆలపించిన సంకీర్తనలు, పద్యాలు మరియు భక్తి కావ్యాలు.',
        itemsEn: [
          'Pothana (Telugu Bhagavata Puranam — "Palikedidi Bhagavatamata...")',
          'Tallapaka Annamacharya (32,000 Sankeertanas for Lord Venkateswara)',
          'Sant Tulsidas (Ramcharitmanas), Surdas, Mirabai, Kabir, Tukaram',
          'Namdev, Guru Nanak, Purandara Dasa, Tyagaraja, Bhadrachala Ramadasu'
        ],
        itemsTe: [
          'బమ్మెర పోతన (శ్రీమదాంధ్ర భాగవతము — "పలికెడిది భాగవతమట...")',
          'తాళ్ళపాక అన్నమాచార్యులు (శ్రీ వేంకటేశ్వరుని 32 వేల దివ్య సంకీర్తనలు)',
          'తులసీదాస్ (రామచరితమానస్), సూరదాస్, మీరాబాయి, సంత్ కబీర్, తుకారాం',
          'పురందరదాసు, త్యాగరాజు, భద్రాచల రామదాసు, క్షేత్రయ్య మొదలైన నాదోపాసకులు'
        ]
      }
    ]
  }
};

