// Data source for "సృష్టి రహస్యం – సర్వేశ్వరుని సంకల్పం నుండి మోక్షం వరకు"
// Primary Authoritative Source: "సర్వేశ్వరుడు అసలు సృష్టిని ఎందుకు ప్రారంభించాలనుకున్నాడు?"
// Vedanta, Upanishads, Bhagavad Gita & Srimad Bhagavatam integration

export interface CreationReason {
  id: string;
  code: string;
  titleTe: string;
  titleEn: string;
  sanskritQuote: string;
  sanskritQuoteDevanagari: string;
  sourceScripture: string;
  summaryTe: string;
  summaryEn: string;
  keyPointsTe: string[];
  keyPointsEn: string[];
  philosophicalDepthTe: string;
  philosophicalDepthEn: string;
  analogyTe: string;
  analogyEn: string;
  icon: string;
  accentColor: string;
}

export interface CreationFlowStep {
  id: string;
  stepNumber: number;
  stageTe: string;
  stageEn: string;
  titleTe: string;
  titleEn: string;
  keyConceptTe: string;
  keyConceptEn: string;
  explanationTe: string;
  explanationEn: string;
  scriptureReference: string;
  scriptureVerseSanskrit?: string;
  scriptureVerseMeaningTe?: string;
  icon: string;
  cosmicColor: string;
  illustrationHint: string;
}

export interface GunaInfo {
  id: 'satva' | 'rajas' | 'tamas';
  nameTe: string;
  nameEn: string;
  sanskritName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  symbol: string;
  elementAssociation: string;
  characteristicsTe: string[];
  characteristicsEn: string[];
  cosmicRoleTe: string;
  cosmicRoleEn: string;
  equilibriumStateTe: string; // సృష్టికి పూర్వ స్థితి (సామ్యావస్థ)
  manifestationStateTe: string; // సృష్టి ఆవిర్భావ సమయంలో చలనం
  spiritualOutcomeTe: string;
}

export interface GitaVerseItem {
  id: string;
  chapterVerse: string;
  chapterNameTe: string;
  chapterNameEn: string;
  verseSanskrit: string;
  verseDevanagari: string;
  verseTeluguTransliteration: string;
  wordMeaningTe: { word: string; meaning: string }[];
  simpleMeaningTe: string;
  simpleMeaningEn: string;
  philosophicalInterpretationTe: string;
  philosophicalInterpretationEn: string;
  audioText: string;
  topicTe: string;
  topicEn: string;
  icon: string;
}

export interface KarmaCycleStep {
  id: string;
  order: number;
  nameTe: string;
  nameEn: string;
  subtitleTe: string;
  subtitleEn: string;
  type: 'past' | 'present' | 'future' | 'transcendence';
  descriptionTe: string;
  descriptionEn: string;
  keyPointsTe: { heading: string; detail: string }[];
  philosophicalDepthTe: string;
  sanskritShlokaTe: string;
  shlokaMeaningTe: string;
  analogyTe: string;
  pdfSlideRefTe: string;
  sourceNoteTe: string;
  icon: string;
}

export interface MokshaPath {
  id: string;
  nameTe: string;
  nameEn: string;
  coreQuestionTe: string;
  coreQuestionEn: string;
  philosophyTe: string;
  philosophyEn: string;
  keyConceptsTe: string[];
  keyConceptsEn: string[];
  practiceMethodTe: string;
  practiceMethodEn: string;
  intendedOutcomeTe: string;
  intendedOutcomeEn: string;
  gitaReference: string;
  limbsTe?: string[];
  icon: string;
  accentColor: string;
}

export interface DailySadhanaPractice {
  id: string;
  titleTe: string;
  titleEn: string;
  pathAssociation: string;
  practiceRuleTe: string;
  practiceRuleEn: string;
  benefitTe: string;
  benefitEn: string;
  actionChecklistTe: string[];
  icon: string;
}

export interface VedantaTreeNode {
  id: string;
  order: number;
  titleTe: string;
  titleEn: string;
  category: 'divine_origin' | 'cosmic_laws' | 'manifestation' | 'soul_journey' | 'liberation';
  subtitleTe: string;
  subtitleEn: string;
  descTe: string;
  descEn: string;
  keyScripture: string;
  connectedTo: string[]; // IDs of children/connected nodes
  icon: string;
  color: string;
}

export interface VedanticGlossaryItem {
  id: string;
  termTe: string;
  termEn: string;
  sanskritRoot?: string;
  shortDefTe: string;
  shortDefEn: string;
  detailedContextTe: string;
  scriptureCategory: 'వేదాంతం' | 'సాంఖ్యశాస్త్రం' | 'భగవద్గీత' | 'ఉపనిషత్తులు' | 'భాగవతం';
}

// ==========================================
// 1. BRANDING & HERO DATA
// ==========================================
export const SRUSHTI_BRANDING = {
  mainTitleTe: 'సృష్టి రహస్యం',
  mainTitleEn: 'The Secret of Creation',
  subtitleTe: 'సర్వేశ్వరుని సంకల్పం – కాలం – స్వభావం – ప్రకృతి – కర్మ – మోక్షం',
  subtitleEn: 'Supreme Divine Will – Time – Inherent Nature – Prakriti – Karma – Moksha',
  taglineTe: 'సృష్టి ఎందుకు ఆవిర్భవించింది? జీవుడు ఎందుకు జన్మిస్తున్నాడు? పరమాత్మను ఎలా చేరుకోవాలి?',
  taglineEn: 'Why did creation manifest? Why is the soul born? How to attain the Supreme Divine?',
  heroHeadlineTe: 'సర్వేశ్వరుడు అసలు సృష్టిని ఎందుకు ప్రారంభించాలనుకున్నాడు?',
  heroHeadlineEn: 'Why Did the Supreme Divine Desire to Initiate Creation?',
  heroSupportingTextTe:
    'భగవంతునికి ఏ లోటూ లేదు. ఏ కోరికా లేదు. అయినప్పటికీ ఈ అనంతమైన విశ్వం ఎందుకు ఆవిర్భవించింది? సనాతన ధర్మం, ఉపనిషత్తులు, భగవద్గీత మరియు శ్రీమద్భాగవతం అందించే శాశ్వత వేదాంత సత్యాలను సమగ్రంగా తెలుసుకుందాం.',
  heroSupportingTextEn:
    'The Supreme Lord has no deficiency, no desires, and no unmet cravings. Yet, why did this infinite cosmos manifest? Discover the authoritative answers revealed by Sanatana Dharma, the Upanishads, Bhagavad Gita, and Srimad Bhagavatam.',
  cosmicJourneySteps: [
    { label: 'పరమాత్మ', en: 'Paramatma' },
    { label: 'సంకల్పం', en: 'Sankalpam' },
    { label: 'ప్రకృతి', en: 'Prakriti' },
    { label: 'కాలం', en: 'Kalam' },
    { label: 'స్వభావం', en: 'Svabhavam' },
    { label: 'సృష్టి', en: 'Srushti' },
    { label: 'కర్మ', en: 'Karma' },
    { label: 'జీవాత్మ', en: 'Jivatma' },
    { label: 'మోక్షం', en: 'Moksha' },
  ],
  heroHighlights: [
    {
      id: 'highlight-purpose',
      titleTe: 'సృష్టి యొక్క ఉద్దేశం',
      titleEn: 'Divine Purpose of Creation',
      descTe: 'భగవంతుని దివ్య లీల, ఏకోహం బహుస్యామ్ సంకల్పం మరియు జీవులపై అపారమైన కారుణ్యం.',
      descEn: 'The divine sport (Leela), cosmic expansion ("Ekoham Bahusyam"), and parental compassion for Jivas.',
      icon: '✨',
      targetSection: 'module-why',
    },
    {
      id: 'highlight-will',
      titleTe: 'పరమాత్మ సంకల్పం',
      titleEn: 'Divine Will (Ikshanam)',
      descTe: 'నిర్గుణ పరమాత్మ కేవలం ఒక దివ్య సంకల్పం (ఈక్షణం) ద్వారా సుప్తచేతనావస్థలో ఉన్న ప్రకృతిని మేల్కొల్పడం.',
      descEn: 'The Transcendental Reality awakening dormant primordial Nature through a single conscious glance.',
      icon: '👁️',
      targetSection: 'module-how',
    },
    {
      id: 'highlight-time-nature',
      titleTe: 'కాలం మరియు స్వభావం',
      titleEn: 'Time & Inherent Nature',
      descTe: 'కాలం రాజ ప్రతినిధి మంత్రి వంటిది; స్వభావం రాజు ఆజ్ఞ ప్రకారం పనిచేసే జగద్వ్యవస్థ.',
      descEn: 'Time functions as the royal minister, and inherent nature as the cosmic self-executing framework.',
      icon: '⏳',
      targetSection: 'module-time-nature',
    },
    {
      id: 'highlight-karma-jiva',
      titleTe: 'కర్మ మరియు జీవుడు',
      titleEn: 'Karma & Individual Soul',
      descTe: 'ప్రళయంలో నిద్రాణమైన పూర్వకర్మలు కాలం ద్వారా పక్వానికి వచ్చి జీవి అనుభవంలోకి రావడం.',
      descEn: 'Past latent karmas carried over from deluge, ripening in time to provide progressive spiritual experience.',
      icon: '☸️',
      targetSection: 'module-karma',
    },
    {
      id: 'highlight-four-paths',
      titleTe: 'మోక్షానికి నాలుగు మార్గాలు',
      titleEn: 'Four Paths to Moksha',
      descTe: 'జ్ఞాన మార్గం, భక్తి మార్గం, నిష్కామ కర్మ మార్గం మరియు అష్టాంగ రాజయోగ మార్గాలు.',
      descEn: 'Jnana Marga, Bhakti Marga, Nishkama Karma Marga, and Ashtanga Raja Yoga for ultimate liberation.',
      icon: '🕉️',
      targetSection: 'module-moksha',
    },
  ],
};

// ==========================================
// 2. MODULE 1: FOUR REASONS FOR CREATION
// ==========================================
export const CREATION_REASONS: CreationReason[] = [
  {
    id: 'leela-vilasam',
    code: 'A',
    titleTe: 'లీలా విలాసం (దివ్య క్రీడ)',
    titleEn: 'The Divine Play (Leela Vilasam)',
    sanskritQuote: 'లోకవత్తు లీలాకైవల్యమ్',
    sanskritQuoteDevanagari: 'लोकवत्तु लीलाकैवल्यम्',
    sourceScripture: 'బ్రహ్మ సూత్రాలు (2.1.33) & వేదాంత దర్శనం',
    summaryTe:
      'సృష్టి అనేది ఏ స్వార్థ ప్రయోజనం కోసం కాక, కేవలం సర్వేశ్వరుని నిరతిశయ ఆనంద విలాసమైన ఒక దివ్య లీల (ఆట). ఒక పరిపూర్ణ చక్రవర్తి లేదా సంపూర్ణ శక్తివంతుడు కాలక్షేపానికై, ఆనందం కొరకై ఆటలాడినట్లు పరమాత్మ ఈ విశ్వరంగస్థలాన్ని నిర్మించాడు.',
    summaryEn:
      'Creation is not driven by any selfish gain or void in God, but is purely the effortless sport (Leela) of the Supreme Being manifesting infinite bliss.',
    keyPointsTe: [
      'సృష్టి భగవంతుని సహజ సిద్ధమైన దివ్య లీల (ఆట).',
      'సర్వేశ్వరునికి ఈ సృష్టి వల్ల వచ్చే లాభం కానీ, జరగకపోతే వచ్చే నష్టం కానీ ఏమీ లేదు.',
      'దేవునికి ఎలాంటి కొరత లేదా అసంతృప్తి లేదు; ఇది ఆయన నిరతిశయ ఆనంద ప్రకటన (Pure Infinite Joy).',
      'బ్రహ్మసూత్ర వాక్యం "లోకవత్తు లీలాకైవల్యమ్" ఈ లీలా తత్వాన్ని నిరూపిస్తుంది.',
    ],
    keyPointsEn: [
      'Creation is the spontaneous, joyful sport (Leela) of the Supreme.',
      'God gains neither profit nor loss from the cosmic manifestation.',
      'He lacks nothing and desires nothing; creation is the radiant overflow of His infinite bliss.',
      'Brahma Sutra 2.1.33 ("Lokavattu Leelakaivalyam") establishes this eternal truth.',
    ],
    philosophicalDepthTe:
      'ఒక రాజు లేదా సార్వభౌముడు తన కోరికలన్నింటినీ తీర్చుకున్న పిమ్మట కేవలం ఆనందక్రీడ కొరకు ఎలా ప్రవర్తిస్తాడో, సమస్త విశ్వాన్ని తనలోనే ఉంచుకున్న నిర్గుణ-సగుణ పరమాత్మ తన నిరతిశయానందాన్ని జగద్రూపంలో ప్రసరింపజేస్తాడు. ఇందులో స్వార్థం, స్వప్రయోజనం, లోటు ఏమాత్రం లేవు.',
    philosophicalDepthEn:
      'Just as a sovereign who has fulfilled all desires engages in playful recreations purely out of sheer delight, the Supreme Lord radiates His unbounded bliss as the cosmic stage.',
    analogyTe: 'పూర్ణ కాముడైన మహారాజు ఆనందం కోసం చేసే క్రీడ వంటిది; చిన్న పిల్లవాడు తన ఉత్సాహంతో ఇసుక గూళ్ళు కట్టి ఆనందించినట్లు పరమాత్మ లీల.',
    analogyEn: 'Like an all-powerful king sporting out of pure joy, or an innocent child delightedly sculpting sandcastles by the shore.',
    icon: '🎭',
    accentColor: '#D4AF37',
  },
  {
    id: 'ekatvam-bahutvam',
    code: 'B',
    titleTe: 'ఏకత్వం నుండి బహుత్వ ఆనందం (వైవిధ్య సంకల్పం)',
    titleEn: 'From One to Many (The Desire for Variety)',
    sanskritQuote: 'ఏకోహం బహుస్యామ్ ప్రజాయేయేతి',
    sanskritQuoteDevanagari: 'एकोऽहं बहु स्यां प्रजायेयेति',
    sourceScripture: 'ఛాందోగ్యోపనిషత్ (6.2.3) & తైత్తిరీయోపనిషత్',
    summaryTe:
      'సృష్టికి పూర్వం పరమాత్మ ఒక్కడే ఉన్నాడు. అక్కడ నామరూపాలు, ద్వంద్వాలు లేవు. "నేను ఒక్కడినే ఉన్నాను, అనేక రూపాలుగా మారి నన్ను నేను ఆనందించుకుంటాను" అని ఆయన సంకల్పించాడు. ఒక వ్యక్తి అద్దంలో తన రూపాన్ని చూసుకుని మురిసిపోయినట్లు, పరమాత్మ తనలోని అనంత శక్తులను వివిధ జీవరాశులుగా, ప్రకృతిగా వ్యక్తపరిచాడు.',
    summaryEn:
      'Before creation, God existed as the Singular Absolute. He willed: "I am One; let Me become many and rejoice in diversity." Just like gazing into a cosmic mirror to experience one’s manifold potential.',
    keyPointsTe: [
      'సృష్టికి ముందు వేరే ఏ వస్తువూ, జీవీ లేకుండా ఒక్క పరమాత్మ మాత్రమే సత్యంగా ఉన్నాడు.',
      'ఉపనిషత్తులలోని "ఏకోహం బహుస్యామ్" అనే వాక్యమే సృష్టి సంకల్పానికి మూల బీజం.',
      'ఒకే బంగారం అనేక ఆభరణాలుగా మారినట్లు, ఒకే పరమాత్మ ప్రకృతిలోని వైవిధ్య రూపాలుగా విస్తరించాడు.',
      'ఒకే పరమాత్మ → ప్రకృతి → పంచభూతాలు → అనేక జీవరాశులు → అనంత విశ్వం అనే క్రమానుగత పరిణామం జరిగింది.',
    ],
    keyPointsEn: [
      'Prior to manifestation, the Supreme alone existed beyond names and forms.',
      'The Upanishadic declaration "Ekoham Bahusyam" is the primeval seed of cosmic manifestation.',
      'Like gold becoming diverse ornaments, the One Absolute expands into manifold names and forms.',
      'Sequential manifestation: Paramatma → Prakriti → Five Elements → Countless Jivas → Infinite Multiverse.',
    ],
    philosophicalDepthTe:
      'పరమాత్మ స్వయంగా సచ్చిదానంద స్వరూపుడు. తనలోని చిచ్ఛక్తిని, మాయాశక్తిని విక్షేపించి అనేక జీవరాశులుగా, జంతు-పక్షి-మానవ-దేవతా రూపాలుగా విస్తరింపజేసి ఆ వైవిధ్యాన్ని చూసి తనలోని ఆనందాన్ని ఆస్వాదిస్తాడు. అద్వైతంలో కనిపించే భేదం కేవలం నామరూపాల కల్పనయే కానీ మూలతత్వం ఒక్కటే.',
    philosophicalDepthEn:
      'The Sat-Chit-Ananda Reality projects its own conscious power to revel in the sheer richness of variegated forms. Diversity is the glorious ornamentation of the non-dual Truth.',
    analogyTe: 'ఒక వ్యక్తి అద్దంలో తన అందాన్ని చూసుకుని మురిసిపోయినట్లు; ఒకే సూర్యకిరణం పట్టకము (prism) గుండా ప్రసరించి సప్తవర్ణాలుగా విరబూసినట్లు.',
    analogyEn: 'Like a person looking into a crystal mirror to behold their own radiant reflections, or a single white sunbeam refracting into seven wondrous colors.',
    icon: '🪞',
    accentColor: '#E65100',
  },
  {
    id: 'karmanu-bhavanam',
    code: 'C',
    titleTe: 'జీవులకు కర్మఫల అనుభవ అవకాశం (ఈశ్వర కారుణ్యం)',
    titleEn: 'Compassion for Jivas (Platform for Karmic Evolution)',
    sanskritQuote: 'యథాపూర్వమకల్పయత్ (ఋగ్వేదం 10.190.3)',
    sanskritQuoteDevanagari: 'यथापूर्वमकल्पयत्',
    sourceScripture: 'ఋగ్వేదం (నాసదీయ సూక్తం) & శ్రీమద్భాగవతం 3వ స్కంధం',
    summaryTe:
      'మహాప్రళయ సమయంలో సమస్త జీవులు పరమాత్మలోనే నిద్రాణమై సూక్ష్మ స్థితిలో ఉంటాయి. కానీ వాటి పూర్వజన్మ కర్మలు (పాపపుణ్యాలు) నశించక దాగి ఉంటాయి. ఆ కర్మలను అనుభవించి, క్రమంగా జ్ఞానాన్ని పొంది, మోక్షాన్ని సాధించడానికి భగవంతుడు తన అపారమైన కారుణ్యంతో ఈ భూమి/విశ్వమనే మహా వేదికను ప్రసాదించాడు.',
    summaryEn:
      'During cosmic dissolution (Pralaya), souls remain dormant in the Supreme with their accumulated karmas intact. Out of immense fatherly compassion, the Lord creates the cosmic arena so Jivas can exhaust karmas, cultivate wisdom, and attain liberation.',
    keyPointsTe: [
      'సృష్టి లయమైనప్పుడు (ప్రళయ కాలంలో) జీవులు సూక్ష్మ రూపంలో పరమాత్మలో నిద్రాణంగా ఉంటాయి.',
      'పూర్వ జన్మల పుణ్య-పాప కర్మలు నశించవు; అవి పక్వానికి రాని విత్తనాల్లా సుప్తచేతనలో ఉండిపోతాయి.',
      'భగవంతుని కారుణ్యం: తండ్రి తన పిల్లలు తప్పులు చేసినా వారు బాగుపడటానికి మళ్లీ మళ్లీ అవకాశాలు ఇచ్చినట్లు, ఈశ్వరుడు జీవులకు పరిణామం చెందే అవకాశం కల్పిస్తాడు.',
      'ఈ విశ్వం కేవలం విహార స్థలం మాత్రమే కాదు; అది ఆత్మ విచారణ మరియు మోక్ష సాధనకై నిర్మించబడిన కర్మభూమి.',
    ],
    keyPointsEn: [
      'During Pralaya, all souls remain latent within the Supreme like dormant seeds.',
      'Accumulated karmas of previous kalpas never perish; they await conditions to sprout.',
      'Divine Compassion: Like a loving father giving repeated chances to errant children to reform, God provides this cosmic stage.',
      'The universe is a sacred laboratory for spiritual evolution and ultimate self-realization.',
    ],
    philosophicalDepthTe:
      'జీవులు కర్మఫలాలను అనుభవించకుండా ముక్తిని పొందలేవు. నిద్రాణంగా ఉండిపోతే జీవుడికి ప్రగతి శూన్యం. అందుకే సర్వేశ్వరుడు తన సంకల్పం ద్వారా కాలం మరియు స్వభావాలను మేల్కొలిపి, కర్మ క్షేత్రమైన జగత్తును పునఃసృష్టి చేసి జీవుడిని సంసార చక్రం నుండి శాశ్వత మోక్షం వైపు నడిపిస్తాడు.',
    philosophicalDepthEn:
      'Without an arena to exhaust karmas and awaken wisdom, souls would remain forever stagnant in slumber. God stirs Time and Inherent Nature to rekindle the voyage toward final beatitude.',
    analogyTe: 'తండ్రి పిల్లలు బాగుపడేందుకు పాఠశాల, పరీక్షా వేదికలను నిర్మించినట్లు; రైతు విత్తనాలు మొలకెత్తేందుకు భూమిని దున్ని నీరు పెట్టినట్లు.',
    analogyEn: 'Like a father building a school and examination hall for his children to learn and graduate; like a farmer preparing soil so dormant seeds can bear fruit.',
    icon: '🌱',
    accentColor: '#10B981',
  },
  {
    id: 'prema-bhakti',
    code: 'D',
    titleTe: 'ప్రేమానుభూతి మరియు భక్తి (దివ్య అనుసంధానం)',
    titleEn: 'To Experience Love & Devotion (Divine Union)',
    sanskritQuote: 'ఆత్మా వా అరే ద్రష్టవ్యః శ్రోతవ్యో మంతవ్యో నిదిధ్యాసితవ్యః',
    sanskritQuoteDevanagari: 'आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यः',
    sourceScripture: 'బృహదారణ్యకోపనిషత్ (2.4.5) & భగవద్గీత (12వ అధ్యాయం)',
    summaryTe:
      'ప్రేమ లేదా భక్తి అనేది కేవలం ఒంటరిగా ఉన్నప్పుడు సాధ్యం కాదు. ప్రేమించడానికి ఒకరు, ప్రేమను స్వీకరించడానికి మరొకరు ఉండాలి. భగవంతుడు తనపై అనన్య భక్తిని, ప్రేమను ప్రకటించే భక్తులను సృష్టించి, వారితో దివ్య ప్రేమ తత్వాన్ని పంచుకోవడానికి ఈ సృష్టిని విస్తరించాడు. జీవుడు పరమాత్మ వైపు ప్రయాణించి ఆయనలో లీనమయ్యే ఆ తపనలోనే సృష్టి యొక్క అసలైన అందం దాగి ఉంది.',
    summaryEn:
      'Love and devotion require reciprocity—one who loves and one who receives love. The Lord brought forth devotees to experience the supreme nectar of Divine Love, where the finite soul longs for and dissolves in the Infinite.',
    keyPointsTe: [
      'ప్రేమ లేదా భక్తి అనుభవానికి సంబంధం మరియు ఆత్మీయత అవసరం.',
      'జీవాత్మ మరియు పరమాత్మల మధ్య సహజమైన ప్రేమ, అనురాగ సంబంధం ఉంది.',
      'భగవంతుడు భక్తుల ప్రేమకు దాసుడు; భక్తుల ఆరాధనను స్వీకరించడానికి ఆయన తపిస్తాడు.',
      'జీవుడు ప్రాపంచిక బంధాల నుండి విముక్తుడై పరమాత్మతో ఏకమవ్వడమే (Divine Union) సృష్టి లీలలో మహోన్నత పరిసమాప్తి.',
    ],
    keyPointsEn: [
      'Love and devotion inherently call for conscious relational reciprocity.',
      'Between Jivatma and Paramatma exists an eternal, unbreakable bond of spiritual affinity.',
      'The Supreme Lord voluntarily becomes bound by the love of His pure devotees.',
      'The soul’s joyful return journey and dissolution into Divine Consciousness is the crowning glory of creation.',
    ],
    philosophicalDepthTe:
      'భక్తిరసంలో జీవుడు పరమాత్మను తండ్రిగా, తల్లిగా, సఖునిగా, ప్రభువుగా, ప్రియునిగా భావిస్తాడు. ఈ ప్రేమ ప్రవాహమే సృష్టిని సుందరం చేస్తుంది. ఆత్మ పరమాత్మతో సంగమించే దివ్య ముహూర్తమే మోక్షానందం.',
    philosophicalDepthEn:
      'Through Bhakti, the soul relates to the Divine as parent, companion, sovereign, or beloved. The sacred yearning of the individual consciousness to unite with Universal Consciousness turns the cosmos into a temple of bliss.',
    analogyTe: 'నది అడ్డంకులన్నీ దాటుకుంటూ సముద్రం వైపు పరుగులు తీసి చివరకు సముద్రంలో లీనమైనట్లు; తల్లి ఒడిని చేరుకునే చిన్నారి తపన వంటిది.',
    analogyEn: 'Like a rushing mountain river overcoming every rock to merge blissfully into the roaring ocean; like an infant rushing with outstretched arms into the embrace of its mother.',
    icon: '💖',
    accentColor: '#EC4899',
  },
];

// ==========================================
// 3. MODULE 2: CREATION SEQUENCE FLOWCHART
// ==========================================
export const CREATION_FLOW_STEPS: CreationFlowStep[] = [
  {
    id: 'step-1-will',
    stepNumber: 1,
    stageTe: 'మొదటి సోపానం',
    stageEn: 'Step 1',
    titleTe: 'సర్వేశ్వరుని సంకల్పం (ఈక్షణం)',
    titleEn: 'Supreme Divine Will (Ikshanam)',
    keyConceptTe: 'నిర్గుణ పరమాత్మ యొక్క ఏకత్వ సంకల్పం',
    keyConceptEn: 'The Primal Glance and Will of the Transcendent',
    explanationTe:
      'సృష్టి శూన్యం నుండి అకస్మాత్తుగా పుట్టలేదు. సృష్టికి పూర్వం ఏ మార్పూ లేకుండా నిశ్చలంగా ఉన్న నిర్గుణ పరమాత్మ "ఏకోహం బహుస్యామ్" అని సంకల్పించాడు. ఈ దివ్య సంకల్పమే (ఈక్షణమే) సమస్త సృష్టి పరిణామానికి ఆది ప్రేరణ.',
    explanationEn:
      'Creation did not originate from absolute void. The unmanifest Absolute willed: "May I become many." This primal conscious glance (Ikshana) activates the entire manifestation process.',
    scriptureReference: 'శ్రీమద్భాగవతం 3.26.17 & ఛాందోగ్యోపనిషత్ 6.2.3',
    scriptureVerseSanskrit: 'तदैक्षत बहु स्यां प्रजायेयेति तत्तेजोऽसृजत',
    scriptureVerseMeaningTe: 'పరమాత్మ సంకల్పించాడు: నేను అనేక రూపాలుగా మారుదును గాక అని.',
    icon: '✨',
    cosmicColor: '#D4AF37',
    illustrationHint: 'Cosmic Golden Seed (Hiranyagarbha) radiating infinite divine light',
  },
  {
    id: 'step-2-prakriti',
    stepNumber: 2,
    stageTe: 'రెండవ సోపానం',
    stageEn: 'Step 2',
    titleTe: 'ప్రకృతిలో చలనం (సుప్తచేతన మేల్కొలుపు)',
    titleEn: 'Awakening of Primordial Nature (Prakriti)',
    keyConceptTe: 'నిద్రాణమైన మూలప్రకృతిలో ప్రాథమిక స్పందన',
    keyConceptEn: 'Vibration in the Latent Matrix of Nature',
    explanationTe:
      'సృష్టికి ముందు విశ్వమంతా "ప్రకృతి" (మాయ) రూపంలో సుప్తచేతనావస్థలో నిద్రాణంగా ఉంటుంది. భగవంతుని దివ్య సంకల్ప సాన్నిధ్యం చేత నిశ్చలంగా ఉన్న ప్రకృతిలో ప్రథమ చలనం (Spiritual Kinetic Impulse) ప్రారంభమవుతుంది.',
    explanationEn:
      'Before creation, primordial Nature (Prakriti/Maya) remains in deep cosmic sleep. Under the superintendence and glance of the Divine, the very first pulse of vibration begins.',
    scriptureReference: 'భగవద్గీత 9.10 ("మయాధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్")',
    scriptureVerseSanskrit: 'मयाध्यक्षेण प्रकृतिः सूयते सचराचरम्',
    scriptureVerseMeaningTe: 'నా అధ్యక్షతన మాత్రమే ఈ ప్రకృతి చరాచర జగత్తును సృష్టిస్తోంది.',
    icon: '🌌',
    cosmicColor: '#3B82F6',
    illustrationHint: 'Vibrant indigo cosmic nebulae stirring from primordial stillness',
  },
  {
    id: 'step-3-kalam',
    stepNumber: 3,
    stageTe: 'మూడవ సోపానం',
    stageEn: 'Step 3',
    titleTe: 'కాలం వ్యక్తీకరణ (సమయ శక్తి ఆవిర్భావం)',
    titleEn: 'Manifestation of Cosmic Time (Kala Shakti)',
    keyConceptTe: 'నియమబద్ధమైన పరిణామానికి ఆధారమైన కాలశక్తి',
    keyConceptEn: 'Time Emerges as the Catalyst for Change & Ripening',
    explanationTe:
      'పరమాత్మ సంకల్పం వల్లనే "కాలం" అనే శక్తి వ్యక్తమవుతుంది. నిశ్చలంగా ఉన్న గుణాలను కదిలించడానికి, జీవుల కర్మలు పక్వానికి రావడానికి కాలమే సాధనం. కాలం సృష్టికి ఒక దివ్య క్రమాన్ని, మార్పును ప్రసాదిస్తుంది.',
    explanationEn:
      'Through divine will, the power of Time is manifested. Time creates sequence, stirs dormant attributes, and allows karmic seeds to ripen in orderly fruition.',
    scriptureReference: 'శ్రీమద్భాగవతం 3.26.16 & గీత 11.32',
    scriptureVerseSanskrit: 'प्रकृतेर्गुणसाम्यस्य निर्विशेषस्य मानवि । चेष्टा यतः स भगवान् काल इत्युपलक्षितः ॥',
    scriptureVerseMeaningTe: 'ప్రకృతి యొక్క గుణ సామ్యావస్థలో ఏ శక్తి వల్ల చలనం కలుగుతుందో అదే కాలము అని పిలువబడుతుంది.',
    icon: '⏳',
    cosmicColor: '#8B5CF6',
    illustrationHint: 'Eternal Wheel of Cosmic Time rotating amidst star clusters',
  },
  {
    id: 'step-4-trigunas',
    stepNumber: 4,
    stageTe: 'నాల్గవ సోపానం',
    stageEn: 'Step 4',
    titleTe: 'త్రిగుణాల చలనం (సామ్యావస్థ భంగం)',
    titleEn: 'Excitement of the Three Gunas',
    keyConceptTe: 'సత్వ, రజో, తమో గుణాల సమతుల్యత వీడి క్రియాశీలమవ్వడం',
    keyConceptEn: 'Equilibrium of Satva, Rajas, and Tamas Breaks into Motion',
    explanationTe:
      'ప్రళయంలో సత్వ, రజ, తమో గుణాలు ఏ భేదమూ లేకుండా సమతుల్యంగా (సామ్యావస్థలో) ఉంటాయి. కాల ప్రభావంతో ఈ మూడు గుణాలలో చలనం పుట్టి, పరస్పరం కలవడం ద్వారా సమస్త పదార్థ, మానసిక వికారాలు రూపుదిద్దుకుంటాయి.',
    explanationEn:
      'During cosmic dissolution, the three Gunas rest in perfect balance. When touched by Time, their equilibrium is disturbed, initiating the generation of thoughts, elements, and sensations.',
    scriptureReference: 'భగవద్గీత 7.14 & 14వ అధ్యాయం (గుణత్రయ విభాగ యోగం)',
    scriptureVerseSanskrit: 'दैवी ह्येषा गुणमयी मम माया दुरत्यया',
    scriptureVerseMeaningTe: 'త్రిగుణాత్మకమైన నా దైవీ మాయ అతిక్రమించడానికి వీలులేనిది.',
    icon: '🔺',
    cosmicColor: '#F59E0B',
    illustrationHint: 'Dynamic Trinity Triangle with White (Satva), Red (Rajas), Dark (Tamas) energies',
  },
  {
    id: 'step-5-poorva-karma',
    stepNumber: 5,
    stageTe: 'ఐదవ సోపానం',
    stageEn: 'Step 5',
    titleTe: 'పూర్వకర్మల ప్రభావం (సంచిత కర్మల ప్రేరణ)',
    titleEn: 'Activation of Latent Karmas (Sanchita Karma)',
    keyConceptTe: 'గత కల్పాల పాపపుణ్య విత్తనాలు మొలకెత్తడం',
    keyConceptEn: 'Dormant Impressions from Previous Cycles Awaken',
    explanationTe:
      'గత కల్పంలో జీవులు చేసిన పుణ్య-పాప కర్మలు ప్రళయంలో నశించక పరమాత్మలో సూక్ష్మంగా దాగి ఉంటాయి. కాలం, త్రిగుణాల చలనంతో ఆ పూర్వకర్మలు మేల్కొని, జీవుల పునర్జన్మలకు బీజాలుగా పనిచేస్తాయి.',
    explanationEn:
      'The merits and demerits accumulated in past aeons do not vanish during dissolution. As Time stirs the Gunas, these karmic impressions awaken to dictate individual embodiment.',
    scriptureReference: 'బ్రహ్మ సూత్రాలు 2.1.34-35 (వైషమ్య నైర్ఘృణ్యే న సాపేక్షత్వాత్)',
    scriptureVerseSanskrit: 'वैषम्यनैर्घृण्ये न सापेक्षत्वात्तथाहि दर्शयति',
    scriptureVerseMeaningTe: 'భగవంతుడు పక్షపాతి కాడు; జీవుల పూర్వకర్మల ఆధారంగానే వైవిధ్యమైన ఫలితాలు లభిస్తాయి.',
    icon: '📜',
    cosmicColor: '#EC4899',
    illustrationHint: 'Golden karmic scrolls and seeds unfurling into living destinies',
  },
  {
    id: 'step-6-svabhavam',
    stepNumber: 6,
    stageTe: 'ఆరవ సోపానం',
    stageEn: 'Step 6',
    titleTe: 'స్వభావాల వ్యక్తీకరణ (అంతర్గత ధర్మాలు)',
    titleEn: 'Awakening of Inherent Nature (Svabhava)',
    keyConceptTe: 'ప్రతి జీవి, వస్తువులో ప్రత్యేక లక్షణం స్థిరపడటం',
    keyConceptEn: 'Inherent Qualities & Cosmic Laws Anchor into Beings',
    explanationTe:
      'పూర్వకర్మల ప్రభావంతో ప్రతి జీవికి అంతర్గత "స్వభావం" (Inherent Nature) వ్యక్తమవుతుంది. అలాగే పంచభూతాలకు ప్రత్యేక ధర్మాలు లభిస్తాయి (అగ్నికి కాల్చే స్వభావం, నీటికి ప్రవహించే స్వభావం, గాలికి వీచే స్వభావం). సర్వేశ్వరుని ఆజ్ఞ ప్రకారం స్వభావమే సమస్త కార్యాలను నడిపిస్తుంది.',
    explanationEn:
      'Guided by past karmas, each soul receives its inherent temperament. Likewise, natural elements acquire their intrinsic laws—fire to consume, water to flow, air to move.',
    scriptureReference: 'శ్రీమద్భాగవతం 3.26.18 & గీత 18.40-41',
    scriptureVerseSanskrit: 'स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा',
    scriptureVerseMeaningTe: 'జీవుడు తన పూర్వకర్మల ద్వారా ఉత్పన్నమైన స్వభావంచేత బద్ధుడై ఉంటాడు.',
    icon: '🔥',
    cosmicColor: '#EF4444',
    illustrationHint: 'Elemental manifestations of Fire, Water, Wind, Earth and Inherent Instincts',
  },
  {
    id: 'step-7-multiverse',
    stepNumber: 7,
    stageTe: 'ఏడవ సోపానం',
    stageEn: 'Step 7',
    titleTe: 'వైవిధ్యమైన సృష్టి (చరాచర బహుళ జగత్తు)',
    titleEn: 'Multiverse of Diverse Beings & Cosmos',
    keyConceptTe: 'అనంత విశ్వాలు, 84 లక్షల జీవరాశులు వ్యక్తమవ్వడం',
    keyConceptEn: 'Full Manifestation of Countless Worlds & Life Forms',
    explanationTe:
      'సంకల్పం, కాలం, త్రిగుణాలు, కర్మలు, స్వభావాలు పరస్పరం అనుసంధానమై అనంతమైన బ్రహ్మాండాలు, 84 లక్షల జీవరాశులు, నవగ్రహాలు, దేవ-మానవ-తిర్యక్ జన్మలతో కూడిన వైవిధ్య సృష్టి అద్భుతంగా ఆవిర్భవిస్తుంది.',
    explanationEn:
      'The cosmic synthesis of Divine Will, Time, the three Gunas, Karma, and Inherent Nature manifests the multi-layered cosmos with countless galaxies, dimensions, and life forms.',
    scriptureReference: 'శ్రీమద్భాగవతం 2.5 (సృష్టి వర్ణన) & పురుష సూక్తం',
    scriptureVerseSanskrit: 'यतो वा इमानि भूतानि जायन्ते येन जातानि जीवन्ति',
    scriptureVerseMeaningTe: 'ఎవరి నుండి ఈ సమస్త భూతములు పుడుతున్నాయో, ఎవరి వలన జీవిస్తున్నాయో ఆయనే పరబ్రహ్మ.',
    icon: '🌸',
    cosmicColor: '#10B981',
    illustrationHint: 'Sri Krishna Vishwaroopa & cosmic lotus with infinite solar systems',
  },
];

// ==========================================
// 4. MODULE 3: PRAKRITI & THREE GUNAS
// ==========================================
export const THREE_GUNAS_DATA: GunaInfo[] = [
  {
    id: 'satva',
    nameTe: 'సత్వ గుణం',
    nameEn: 'Sattva Guna (Purity & Harmony)',
    sanskritName: 'सत्त्वगुण',
    color: '#D4AF37',
    bgColor: 'rgba(212, 175, 55, 0.1)',
    borderColor: '#D4AF37',
    symbol: '⚪',
    elementAssociation: 'ప్రకాశం, జ్ఞానం, శాంతి, నిర్మలత్వం',
    characteristicsTe: [
      'నిర్మలమైనది, ప్రకాశవంతమైనది, దుఃఖరహితమైనది.',
      'జీవుడిని సుఖం మరియు జ్ఞానంతో బంధిస్తుంది.',
      'శాంతం, దయ, సత్యం, ధర్మం, నిగ్రహం, ఆధ్యాత్మిక ఆసక్తిని పెంపొందిస్తుంది.',
      'సత్వ గుణంలో చేసిన కర్మలు నిర్మలమైన పుణ్యాన్ని, అంతఃకరణ శుద్ధిని అందిస్తాయి.',
    ],
    characteristicsEn: [
      'Luminous, untainted, serene, and free from distress.',
      'Binds the soul through attachment to happiness and knowledge.',
      'Fosters compassion, truthfulness, equanimity, self-restraint, and spiritual aspiration.',
      'Actions born of Sattva yield pure spiritual merit and inner clarity.',
    ],
    cosmicRoleTe: 'సృష్టిలో స్థితికారకమైనది; జగత్తులో ధర్మం, జ్ఞాన ప్రకాశం నిలబడటానికి సత్వగుణమే ఆధారం.',
    cosmicRoleEn: 'The sustaining force of harmony, virtue, and illumination in the universe.',
    equilibriumStateTe: 'సృష్టికి ముందు రజస్, తమస్సులతో కలిసి సమస్థితిలో ప్రశాంతంగా ఉంటుంది.',
    manifestationStateTe: 'సృష్టి ఆరంభంలో కాలశక్తి చేత ప్రేరేపితమై జ్ఞాన, ప్రకాశ శక్తులను వెలువరిస్తుంది.',
    spiritualOutcomeTe: 'సత్వ గుణ సాధన ద్వారా క్రమంగా గుణాతీత స్థితి (మోక్షం) లభిస్తుంది.',
  },
  {
    id: 'rajas',
    nameTe: 'రజో గుణం',
    nameEn: 'Rajas Guna (Passion & Activity)',
    sanskritName: 'रजोगुण',
    color: '#E65100',
    bgColor: 'rgba(230, 81, 0, 0.1)',
    borderColor: '#E65100',
    symbol: '🔴',
    elementAssociation: 'రాగం, తృష్ణ, చలనం, అహంకారం, కర్మ తీవ్రత',
    characteristicsTe: [
      'కోరికలు, ఆశలు, తృష్ణల నుండి పుడుతుంది.',
      'జీవుడిని కర్మల పట్ల తీవ్రమైన అనురక్తితో, ఫలాపేక్షతో బంధిస్తుంది.',
      'శ్రమ, ఆరాటం, ప్రాపంచిక లాభాల కోసం పరిగెత్తడం, స్వార్థ ప్రవృత్తిని పెంచుతుంది.',
      'రజో గుణ ప్రేరణ వల్ల పుణ్య-పాప మిశ్రమ కర్మలు ఉత్పన్నమవుతాయి.',
    ],
    characteristicsEn: [
      'Born of passionate desires, intense cravings, and unquenched ambitions.',
      'Binds the soul through attachment to restless action and thirst for results.',
      'Drives ceaseless striving, material accumulation, competitive instinct, and ego.',
      'Actions born of Rajas generate mixed karmic results of joy and sorrow.',
    ],
    cosmicRoleTe: 'సృష్టిలో చలనకారకమైనది; నూతన సృష్టి, పరిణామం, క్రియాశీలతకు రజోగుణమే ఇంధనం.',
    cosmicRoleEn: 'The dynamic kinetic force driving motion, evolution, creation, and ambition.',
    equilibriumStateTe: 'ప్రళయ కాలంలో నిద్రాణమై క్రియాశూన్యంగా ఉంటుంది.',
    manifestationStateTe: 'కాలస్పర్శతో అత్యంత తీవ్రంగా క్షోభించి సమస్త జగత్తును కర్మల వైపు నడిపిస్తుంది.',
    spiritualOutcomeTe: 'రజస్సును నిష్కామ కర్మ ద్వారా శుద్ధి చేసి సత్వంగా పరివర్తనం చెందించాలి.',
  },
  {
    id: 'tamas',
    nameTe: 'తమో గుణం',
    nameEn: 'Tamas Guna (Inertia & Ignorance)',
    sanskritName: 'तमोगुण',
    color: '#6B7280',
    bgColor: 'rgba(107, 114, 128, 0.1)',
    borderColor: '#4B5563',
    symbol: '⚫',
    elementAssociation: 'అజ్ఞానం, బద్ధకం, నిద్ర, మోహం, ప్రమాదం',
    characteristicsTe: [
      'అజ్ఞానం నుండి పుట్టి సమస్త జీవులను భ్రమింపజేస్తుంది.',
      'ప్రమాదం (మతిమరుపు), ఆలస్యం, మితిమీరిన నిద్రతో జీవుడిని కట్టివేస్తుంది.',
      'యథార్థాన్ని గ్రహించకుండా విపరీత బుద్ధిని, జడత్వాన్ని, మొండితనాన్ని కలిగిస్తుంది.',
      'తమో గుణ ప్రేరిత పనుల వల్ల కఠినమైన పాప కర్మలు, అధోగతి కలుగుతాయి.',
    ],
    characteristicsEn: [
      'Born of primal ignorance, veiling discrimination and casting delusion over beings.',
      'Binds the soul through heedlessness, sloth, lethargy, and excessive sleep.',
      'Obscures perception of truth, producing inertia, confusion, and stubborn obstinacy.',
      'Actions born of Tamas generate demerit, regression, and downward bondage.',
    ],
    cosmicRoleTe: 'సృష్టిలో లయకారకమైనది; రాత్రి విశ్రాంతికి, ప్రళయంలో జగదుపసంహారానికి తమోగుణం అవసరం.',
    cosmicRoleEn: 'The disintegrating and resting force responsible for nocturnal sleep and cosmic dissolution.',
    equilibriumStateTe: 'సృష్టికి ముందు ఇతర గుణాలతో నిశ్చల బంధంలో లీనమై ఉంటుంది.',
    manifestationStateTe: 'సృష్టిలో స్థూల పదార్థాలకు రూపం ఇవ్వడానికి, నిద్ర మరియు విరామాలకు తోడ్పడుతుంది.',
    spiritualOutcomeTe: 'తమస్సును సత్కర్మలు మరియు రజోగుణ ఉత్సాహంతో జయించి, సత్వంలోకి ఎదగాలి.',
  },
];

// ==========================================
// 5. MODULE 4: KALA & SVABHAVA WITH ROYAL ANALOGY
// ==========================================
export const KALA_SVABHAVA_ANALOGY = {
  titleTe: 'కాలం మరియు స్వభావం – రాజ రూపకం',
  titleEn: 'Time and Inherent Nature – The Royal Analogy',
  explanationTe:
    'సృష్టిలో సర్వేశ్వరుడు, కాలం, స్వభావాల సంబంధాన్ని అర్థం చేసుకోవడానికి ప్రాచీన వేదాంతం ఒక అద్భుతమైన రాజదర్బారు రూపకాన్ని ఉపదేశిస్తుంది:',
  explanationEn:
    'To comprehend how the Divine Will, Cosmic Time, and Inherent Nature collaborate, Vedanta provides the classical analogy of a Royal Sovereign:',
  analogyParts: [
    {
      roleTe: 'సర్వేశ్వరుడు (The King)',
      symbol: '👑',
      analogyRoleTe: 'రాజ్యానికి ఏకైక అధిపతి అయిన సార్వభౌమ రాజు',
      descTe: 'సమస్త సృష్టికి మూల కేంద్రం, అధ్యక్షుడు. రాజ్య నిర్వహణపై స్వయంగా అలసిపోకుండా తన సంకల్పం (ఈక్షణం) ద్వారా రాజ్యాన్ని పాలిస్తాడు.',
      descEn: 'The Supreme Sovereign and Center who presides effortlessly over the entire realm through His Divine Will.',
      color: '#D4AF37',
    },
    {
      roleTe: 'కాలం (The Minister)',
      symbol: '📜',
      analogyRoleTe: 'రాజు ఆజ్ఞను తు.చ. తప్పకుండా అమలుపరిచే సమర్థుడైన ప్రధానమంత్రి',
      descTe: 'రాజు (సర్వేశ్వరుని) సంకల్పించిన సమయానికి తగినట్లుగా పనులను ప్రారంభించడం, నడిపించడం, లయం చేయడం మంత్రి అయిన కాలం బాధ్యత. ఇది ఎవరికీ ఆగదు.',
      descEn: 'The chief minister who meticulously enforces the king’s decree across all corners of time and circumstance without hesitation.',
      color: '#3B82F6',
    },
    {
      roleTe: 'స్వభావం (The Administrative System)',
      symbol: '⚙️',
      analogyRoleTe: 'ఆజ్ఞ ప్రకారం స్వయంప్రతిపత్తితో నడిచే సంపూర్ణ రాజ్యాంగ వ్యవస్థ',
      descTe: 'మంత్రి ఆజ్ఞ ప్రకారం వ్యవస్థలోని ప్రతి అంగమూ తన సహజ ధర్మాన్ని నెరవేరుస్తుంది. అగ్ని కాల్చడం, నీరు ప్రవహించడం, జీవుడు తన పూర్వకర్మల గుణాలతో ప్రవర్తించడం స్వభావం వల్లనే జరుగుతుంది.',
      descEn: 'The inherent self-operating infrastructure wherein every element and soul functions according to its embedded constitution.',
      color: '#EC4899',
    },
  ],
  deepInsightTe:
    'సర్వేశ్వరుని సంకల్పం లేకపోతే కాలం పుట్టదు. కాలం పుట్టకపోతే ప్రకృతిలోని విత్తనాలైన కర్మలు మొలకెత్తవు. కర్మలు మొలకెత్తకపోతే జీవుడి స్వభావం వ్యక్తం కాదు. ఈ ముగ్గురి కలయికతోనే విశ్వ చక్రం అవిశ్రాంతంగా తిరుగుతోంది.',
  deepInsightEn:
    'Without Divine Will, Time does not manifest. Without Time, karmic seeds remain unsprouted. Without awakening karmas, inherent nature remains dormant. This harmonious trinity drives the cosmic wheel.',
};

// ==========================================
// 6. MODULE 5: BHAGAVAD GITA VERSES
// ==========================================
export const GITA_CREATION_VERSES: GitaVerseItem[] = [
  {
    id: 'gita-11-32',
    chapterVerse: 'భగవద్గీత 11.32',
    chapterNameTe: 'విశ్వరూప సందర్శన యోగము',
    chapterNameEn: 'The Yoga of the Vision of the Cosmic Form',
    verseSanskrit: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्त: ।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिता: प्रत्यनीकेषु योधा: ॥',
    verseDevanagari: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्त: ।',
    verseTeluguTransliteration: 'కాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో లోకాన్సమాహర్తుమిహ ప్రవృత్తః ।\nఋతేఽపి త్వాం న భవిష్యంతి సర్వే యేఽవస్థితాః ప్రత్యనీకేషు యోధాః ॥',
    wordMeaningTe: [
      { word: 'కాలః అస్మి', meaning: 'నేను కాలాన్ని అయి ఉన్నాను' },
      { word: 'లోకక్షయకృత్', meaning: 'సమస్త లోకాలను వినాశనం/లయం చేసేవాడను' },
      { word: 'ప్రవృద్ధః', meaning: 'అమితంగా ప్రవృద్ధుడనైన' },
      { word: 'లోకాన్ సమాహర్తుమ్', meaning: 'లోకాలను ఉపసంహరించడానికై' },
      { word: 'ఇహ ప్రవృత్తః', meaning: 'ఇక్కడ సిద్ధపడి ఉన్నాను' },
    ],
    simpleMeaningTe:
      '"నేను లోకాలను లయం చేసే మహాత్ముడైన కాలాన్ని. ఇప్పుడు ఈ లోకాలను ఉపసంహరించడానికే (లయం చేయడానికే) ఇక్కడ ప్రవృద్ధుడనై ప్రవర్తిస్తున్నాను."',
    simpleMeaningEn:
      '"Time I am, the great destroyer of the worlds, and I have come here to destroy all people. Even without you, none of the warriors assembled in the enemy ranks shall survive."',
    philosophicalInterpretationTe:
      'శ్రీకృష్ణ పరమాత్ముడే కాలస్వరూపుడు. కాలం దేనికీ ఆగదు; అందరినీ తనలో లయం చేసుకుంటుంది. సర్వేశ్వరుని సంకల్పం ప్రకారం సృష్టిని నడిపించేది, సమయం వచ్చినప్పుడు తిరిగి లయం చేసేది ఈ కాలశక్తియే. అర్జునుడు యుద్ధం చేసినా చేయకపోయినా, కాలరూపంలో ఉన్న భగవంతుని సంకల్పం వల్ల అధర్మపరుల లయం అప్పటికే నిర్ణయించబడింది.',
    philosophicalInterpretationEn:
      'The Supreme Divine is Himself the embodiment of Cosmic Time. Time is invincible; it orchestrates emergence, sustenance, and final cosmic withdrawal according to the transcendent Will.',
    audioText: 'కాలోస్మి లోక క్షయ కృత్ ప్రవృద్ధో లోకాన్ సమాహర్తుం ఇహ ప్రవృత్తః',
    topicTe: 'కాల స్వరూపుడైన శ్రీకృష్ణుడు (Lord Krishna as Cosmic Time)',
    topicEn: 'Sri Krishna Manifest as Cosmic Time',
    icon: '⌛',
  },
  {
    id: 'gita-9-10',
    chapterVerse: 'భగవద్గీత 9.10',
    chapterNameTe: 'రాజవిద్యా రాజగుహ్య యోగము',
    chapterNameEn: 'The Yoga of Sovereign Science & Secret',
    verseSanskrit: 'मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् ।\nहेतुनानेन कौन्तेय जगद्विपरिवर्तते ॥',
    verseDevanagari: 'मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् ।',
    verseTeluguTransliteration: 'మయాధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్ ।\nహేతునానేన కౌంతేయ జగద్విపరివర్తతే ॥',
    wordMeaningTe: [
      { word: 'మయా అధ్యక్షేణ', meaning: 'నా అధ్యక్షతన (నా సంకల్పం మరియు సాన్నిధ్యం వల్ల)' },
      { word: 'ప్రకృతిః', meaning: 'ఈ భౌతిక ప్రకృతి' },
      { word: 'సూయతే', meaning: 'సృష్టిస్తోంది / కంటోంది' },
      { word: 'స చర అచరమ్', meaning: 'కదిలే మరియు కదలని సమస్త జగత్తును' },
      { word: 'అనేన హేతునా', meaning: 'ఈ కారణం చేతనే' },
      { word: 'జగత్ విపరివర్తతే', meaning: 'జగత్తు నిరంతరం చక్రంలా పరివర్తన చెందుతోంది' },
    ],
    simpleMeaningTe:
      '"ఓ కౌంతేయా! నా అధ్యక్షతన (నా సంకల్పం మరియు సాన్నిధ్యం వల్లనే) ఈ ప్రకృతి చరాచర సమస్త జగత్తును సృష్టిస్తోంది. ఈ హేతువు చేతనే విశ్వం నిరంతరం పరివర్తన చెందుతోంది."',
    simpleMeaningEn:
      '"O son of Kunti, under My superintendence, material Nature produces all moving and non-moving beings. For this reason, the cosmos revolves in cycles."',
    philosophicalInterpretationTe:
      'ఈ శ్లోకం ద్వారా ప్రకృతికి స్వతంత్రంగా సృష్టించే శక్తి లేదని స్పష్టమవుతుంది. సర్వేశ్వరుని సంకల్పం మరియు అధ్యక్షత (Divine Presidency) తోనే జడప్రకృతి చైతన్యవంతమై కాలక్రమేణా సమస్త సృష్టిని, జీవుల గుణస్వభావాలను బయటకు తీస్తుంది. భగవంతుడే మూలకర్త; ప్రకృతి ఆయన అధికారంలో పనిచేసే కారకశక్తి.',
    philosophicalInterpretationEn:
      'Primordial Nature has no independent consciousness or generative potency of its own. It is animated solely under the overarching presence and conscious gaze of the Supreme Lord.',
    audioText: 'మయా అధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్ హేతునా అనేన కౌంతేయ జగద్ విపరివర్తతే',
    topicTe: 'భగవంతుని అధ్యక్షతన ప్రకృతి కార్యనిర్వహణ (Nature Operating Under Divine Superintendence)',
    topicEn: 'Material Nature Guided by Divine Superintendence',
    icon: '👑',
  },
  {
    id: 'gita-7-14',
    chapterVerse: 'భగవద్గీత 7.14',
    chapterNameTe: 'జ్ఞాన విజ్ఞాన యోగము',
    chapterNameEn: 'The Yoga of Knowledge and Discernment',
    verseSanskrit: 'दैवी ह्येषा गुणमयी मम माया दुरत्यया ।\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥',
    verseDevanagari: 'दैवी ह्येषा गुणमयी मम माया दुरत्यया ।',
    verseTeluguTransliteration: 'దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా ।\nమామేవ యే ప్రపద్యంతే మాయామేతాం తరంతి తే ॥',
    wordMeaningTe: [
      { word: 'దైవీ హి', meaning: 'దివ్యమైనది మరియు అద్భుతమైనది' },
      { word: 'ఏషా గుణమయీ', meaning: 'సత్వ రజో తమో త్రిగుణాత్మకమైన' },
      { word: 'మమ మాయా', meaning: 'నా యొక్క ఈ ప్రకృతి/మాయ' },
      { word: 'దురత్యయా', meaning: 'దాటడానికి అత్యంత కష్టసాధ్యమైనది' },
      { word: 'మామ్ ఏవ', meaning: 'నన్ను మాత్రమే' },
      { word: 'యే ప్రపద్యంతే', meaning: 'ఎవరైతే శరణు వేడుదురో' },
      { word: 'ఏతాం మాయాం', meaning: 'ఈ మాయను' },
      { word: 'తరంతి తే', meaning: 'వారు సులభంగా దాటగలరు' },
    ],
    simpleMeaningTe:
      '"త్రిగుణాత్మకమైన (సత్వ, రజ, తమో గుణాలతో కూడిన) నా ఈ దైవీ మాయ దాటడానికి చాలా కష్టమైనది. కానీ నన్నే అనన్య భావంతో శరణు వేడినవారు మాత్రమే ఈ మాయను అవలీలగా దాటగలుగుతారు."',
    simpleMeaningEn:
      '"This divine energy of Mine, consisting of the three Gunas (Maya), is exceedingly difficult to overcome. But those who surrender unto Me alone cross beyond it effortlessly."',
    philosophicalInterpretationTe:
      'సర్వేశ్వరుని దైవీ ప్రకృతిలోనే కాలం ప్రవేశించినప్పుడు జీవుల స్వభావం వ్యక్తమై వారిని కర్మల వైపు నడిపిస్తుంది. త్రిగుణాల చక్రంలో చిక్కుకున్న జీవాత్మ తన స్వంత బలంతో మాయను దాటలేదు. భగవంతునిపై శరణాగతి, భక్తి, జ్ఞాన సాధనల ద్వారా మాత్రమే ఈ ప్రకృతి బంధాలను ఛేదించి పరమపదాన్ని చేరగలడు.',
    philosophicalInterpretationEn:
      'Maya is God’s own veil of attributes. The individual soul, entrapped within the interplay of Sattva, Rajas, and Tamas, cannot cross this ocean by mere egoic effort; total spiritual surrender to the Supreme is the master key.',
    audioText: 'దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా మామేవ యే ప్రపద్యంతే మాయామేతాం తరంతి తే',
    topicTe: 'త్రిగుణమయమైన దైవీ ప్రకృతి & మాయాతరణం (The Insurmountable Divine Maya and Crossing It)',
    topicEn: 'Transcendence Over the Threefold Divine Maya',
    icon: '🌊',
  },
];

// ==========================================
// 7. MODULE 6: DOCTRINE OF KARMA (KARMA SIDDHANTAM)
// ==========================================
export const KARMA_CYCLE_STEPS: KarmaCycleStep[] = [
  {
    id: 'kc-1',
    order: 1,
    nameTe: 'పూర్వజన్మ కర్మలు (సంచితం)',
    nameEn: 'Past Karmas (Sanchita Karma)',
    subtitleTe: 'ప్రళయంలో నిద్రాణమైన కర్మల నిల్వ & సూక్ష్మ బీజ స్థితి',
    subtitleEn: 'Dormant Cosmic Storehouse of Past Actions in Seed State',
    type: 'past',
    descriptionTe:
      'గత జన్మలలో మరియు గత కల్పాలలో జీవుడు సంపాదించుకున్న కర్మల మొత్తం నిల్వ. మహాప్రళయ సమయంలో సకల శరీరాలు నశించినా ఈ సంచిత కర్మలు నశించకుండా పరమాత్మలో సూక్ష్మ విత్తనాల వలె సుప్తచేతనావస్థలో దాగి ఉంటాయి.',
    descriptionEn:
      'The vast cosmic storehouse of past actions and latent impressions accumulated over countless lifetimes, resting in a dormant seed state within the Supreme during cosmic dissolution.',
    keyPointsTe: [
      {
        heading: 'కర్మలు నశించవు (Indestructible Karmic Impressions)',
        detail: 'మహాప్రళయం సంభవించినప్పుడు సకల జీవులు, స్థూల శరీరాలు నశిస్తాయి గానీ, వారు గత కల్పాలలో చేసిన సంచిత కర్మలు (పాపపుణ్యాలు) నశించవు.'
      },
      {
        heading: 'సూక్ష్మ బీజ స్థితి (Subtle Seed State)',
        detail: 'భూమిలో విత్తనం వర్షం కోసం వేచి చూసినట్లు, జీవుల కర్మ వాసనలు పరమాత్మలోనే సుప్త చేతనావస్థలో నిద్రాణమై ఉంటాయి.'
      },
      {
        heading: 'న్యాయబద్ధమైన అవకాశం (Just Cosmic Opportunity)',
        detail: 'కర్మలు అనుభవించకుండా లేదా జ్ఞానాగ్ని చేత దగ్ధం కాకుండా మోక్షం సాధ్యం కాదు. కాబట్టి ఆ కర్మలను అనుభవించి జీవుడు ముక్తి పొందడానికి సృష్టి వేదిక అవసరం.'
      },
      {
        heading: 'నిశ్చల ప్రకృతిలో గుప్త స్థితి (Dormant in Equilibrium)',
        detail: 'సృష్టికి పూర్వం సత్వ, రజ, తమో గుణాలు సామ్యావస్థలో ఉన్నప్పుడు ఈ కర్మ బీజాలు ప్రకృతిలో కదలిక లేకుండా నిశ్శబ్దంగా నిక్షిప్తమై ఉంటాయి.'
      }
    ],
    philosophicalDepthTe:
      'వేదాంత శాస్త్రం ప్రకారం సృష్టి ఆకస్మికంగా శూన్యం నుండి పుట్టలేదు. గత కల్పంలో అపరిపక్వంగా మిగిలిపోయిన కోట్లాది జీవుల సంచిత కర్మ వాసనలు పరమాత్మ సంకల్పం (ఈక్షణం) కోసం వేచి ఉంటాయి. భగవంతుని కారుణ్యం వల్లనే ఈ నిద్రాణ కర్మలకు మళ్లీ వ్యక్తమయ్యే అవకాశం లభిస్తుంది.',
    sanskritShlokaTe: '॥ కర్మణా బధ్యతే జంతుః విద్యయా చ విముచ్యతే ॥',
    shlokaMeaningTe: 'జీవుడు తాను ఆచరించిన కర్మల చేతనే బంధింపబడతాడు మరియు ఆత్మవిద్య (జ్ఞానం) చేతనే ఆ కర్మబంధాల నుండి విముక్తుడవుతాడు.',
    analogyTe: 'వేసవి కాలంలో ఎండిన భూమి లోపల నిద్రాణంగా దాగి ఉండి, తొలకరి వర్షం కోసం ఎదురుచూసే విత్తనాల వంటిది సంచిత కర్మ.',
    pdfSlideRefTe: 'PDF స్లైడ్ 6 & 8: ప్రళయంలో నిద్రాణమైన కర్మలు – సూక్ష్మ బీజ స్థితి',
    sourceNoteTe: 'మూల గ్రంథం: "గత కల్పంలో జీవులు చేసిన పుణ్య-పాప కర్మలు సృష్టి లయమైనప్పుడు నశించవు. అవి సూక్ష్మ రూపంలో పరమాత్మలో దాగి ఉంటాయి."',
    icon: '🏺',
  },
  {
    id: 'kc-2',
    order: 2,
    nameTe: 'సృష్టి & జన్మ (ప్రారబ్ధం)',
    nameEn: 'Creation & Incarnation (Prarabdha Karma)',
    subtitleTe: 'తండ్రి వంటి పరమాత్మ కారుణ్యం & ఆధ్యాత్మిక పాఠశాలగా పునఃసృష్టి',
    subtitleEn: 'Divine Parental Compassion & Allocation of Ripe Karma for Current Birth',
    type: 'present',
    descriptionTe:
      'సంచిత కర్మల రాశి నుండి ఈ జన్మలో అనుభవించడానికై కేటాయించబడిన నిర్దిష్ట కర్మల భాగాన్ని "ప్రారబ్ధం" అంటారు. దీని ఆధారంగానే జీవి యొక్క జన్మ, శరీరం, ఆయుష్షు మరియు పరిసరాలు నిర్ణయించబడతాయి.',
    descriptionEn:
      'The specific portion of Sanchita karma allocated to be experienced in the current physical embodiment—determining parentage, bodily constitution, lifespan, and life environment.',
    keyPointsTe: [
      {
        heading: 'ప్రేమతో ఇచ్చే అవకాశం (Parental Compassion of God)',
        detail: 'ఒక తండ్రి తన పిల్లలు తప్పులు చేసినప్పటికీ, వారు తీర్చిదిద్దుకుని బాగుపడటానికి మళ్లీ మళ్లీ అవకాశాలు ఇస్తాడు.'
      },
      {
        heading: 'సృష్టి ఒక ఆధ్యాత్మిక పాఠశాల (Universe as Spiritual University)',
        detail: 'భూమి మరియు ఈ భౌతిక విశ్వం అనేది జీవుల ఆధ్యాత్మిక పరిణామ క్రమానికి (Spiritual Evolution) నిర్మించబడిన దివ్య విశ్వ విద్యాలయం.'
      },
      {
        heading: 'పునఃసృష్టి సంకల్పం (Re-creation by Divine Will)',
        detail: 'సర్వేశ్వరుడు తన సంకల్పం (ఈక్షణం) ద్వారా కాలాన్ని మేల్కొలిపి, జీవుల కర్మానుగుణంగా నూతన శరీరాలను, తగిన పరిసరాలను ప్రసాదిస్తాడు.'
      },
      {
        heading: 'ప్రారబ్ధ నియతి (Unfolding of Prarabdha)',
        detail: 'విల్లు నుండి వదిలిన బాణం లక్ష్యాన్ని తాకే వరకు ఆగనట్లే, ఈ జన్మకు కేటాయించబడిన ప్రారబ్ధ కర్మ భౌతిక శరీర అనుభవం ద్వారా తీరుతుంది.'
      }
    ],
    philosophicalDepthTe:
      'సంచిత కర్మలనే మహా గోదాము నుండి ఈ ఒక్క జన్మలో అనుభవానికి అనువైన కొన్ని కర్మ ఫలాలను మాత్రమే కాలశక్తి బయటకు తీస్తుంది; దానినే "ప్రారబ్ధ కర్మ" అంటారు. ఇది శిక్ష కాదు—జీవుడు తన లోపాలను సవరించుకుని, వివేకాన్ని పొంది మోక్షం వైపు ఎదగడానికి భగవంతుడు కరుణతో ఇచ్చిన వేదిక.',
    sanskritShlokaTe: '॥ మయాధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్ । హేతునానేన కౌన్తేయ జగద్విపరివర్తతే ॥ (భగవద్గీత 9.10)',
    shlokaMeaningTe: '"ఓ అర్జునా! నా అధ్యక్షతన (నా సంకల్పం మరియు సాన్నిధ్యం చేతనే) ఈ ప్రకృతి చరాచర జగత్తును సృష్టిస్తోంది. ఈ కారణం చేతనే జగత్తు పునఃపునః చక్రంలా పరివర్తన చెందుతోంది."',
    analogyTe: 'పిల్లలు పరీక్షలో తప్పినా తండ్రి వాత్సల్యంతో మళ్లీ చదువుకుని ఉత్తీర్ణులయ్యేందుకు పాఠశాలకు పంపినట్లు, భగవంతుడు జీవులకు పునర్జన్మ అనే అవకాశాన్ని ఇస్తాడు.',
    pdfSlideRefTe: 'PDF స్లైడ్ 6, 8 & 15: తండ్రి వంటి పరమాత్మ కారుణ్యం – పునఃసృష్టి సంకల్పం',
    sourceNoteTe: 'మూల గ్రంథం: "ఆ కర్మలను అనుభవించి, జీవులు క్రమంగా జ్ఞానాన్ని పొంది, మోక్షాన్ని సాధించడానికి భగవంతుడు వారికి ఒక వేదికను (భూమి/విశ్వం) ఇవ్వాలనుకున్నాడు."',
    icon: '🌱',
  },
  {
    id: 'kc-3',
    order: 3,
    nameTe: 'కాలం మరియు స్వభావం అనుసంధానం',
    nameEn: 'Interplay of Time & Inherent Nature',
    subtitleTe: 'కపిల మహర్షి సాంఖ్య వేదాంత దర్శనం (శ్రీమద్భాగవతం 3.26) & సమన్వయ సూత్రం',
    subtitleEn: 'Time as Dynamic Force & Inherent Nature (Svabhava) as Blueprint',
    type: 'present',
    descriptionTe:
      'జీవి జన్మించిన తరువాత కాలం (Time) మరియు జీవి యొక్క అంతర్గత గుణ స్వభావం (Svabhava) కర్మను కార్యరూపంలోకి తెస్తాయి. కాలం కర్మలను సమయానుకూలంగా పక్వానికి తెస్తే, స్వభావం పూర్వ వాసనలను మేల్కొలిపి ఆలోచనలను, ప్రవర్తనను ప్రేరేపిస్తుంది.',
    descriptionEn:
      'As the soul lives, Cosmic Time ripens past karmas at the appointed moment, while Inherent Nature (Svabhava) awakens latent tendencies to shape thoughts, desires, and actions.',
    keyPointsTe: [
      {
        heading: 'కాలం (Time) పాత్ర – కర్మల పరిపక్వత (PDF స్లైడ్ 10)',
        detail: 'విత్తనం చెట్టుగా ఎదగడానికి సమయం ఎంత అవసరమో, జీవుల పూర్వ కర్మలు ఫలితంగా రూపుదిద్దుకోవడానికి కాలమే సాధనం. కాలాగ్ని స్వరూపమైన కాలం భగవంతుని అదృశ్య సంకల్ప సాధనం (ప్రధాన మంత్రి).'
      },
      {
        heading: 'స్వభావం (Inherent Nature) – అంతర్గత గుణ నిర్మాణం (PDF స్లైడ్ 11)',
        detail: 'ప్రతి జీవి పూర్వ జన్మలలో ఆర్జించిన సంస్కారాలు, వాసనల సమాహారమే వారి సహజ స్వభావం. అగ్నికి దహించే శక్తి, నీటికి ప్రవహించే శీతలత ఉన్నట్లే ప్రతి జీవికీ ప్రత్యేక స్వభావం ఉంటుంది.'
      },
      {
        heading: 'కపిల మహర్షి సాంఖ్య దర్శనం (శ్రీమద్భాగవతం 3.26 – PDF స్లైడ్ 13)',
        detail: '1. పురుషుని ఈక్షణం (Glance) ➔ 2. కాలం యొక్క ఆవిర్భావం (త్రిగుణాల సమతుల్యతను కదిలించే ఉత్ప్రేరకం) ➔ 3. స్వభావ వ్యక్తీకరణ (పూర్వ కర్మ వాసనల ప్రకారం ప్రత్యేక స్వభావాలు, అంతఃకరణాలు వ్యక్తమవుతాయి).'
      },
      {
        heading: 'సమన్వయ సూత్రం (Concept Diagram – PDF స్లైడ్ 12)',
        detail: '"సంకల్పం విత్తనాన్ని నాటితే, కాలం దానిని మొలకెత్తిస్తుంది, స్వభావం దానికి రూపమిస్తుంది, కర్మ ఫలితాన్ని అందిస్తుంది!"'
      }
    ],
    philosophicalDepthTe:
      'ప్రపంచంలో ఏ ఇద్దరు వ్యక్తులూ ఒకేలా ఉండరు; ప్రతి ఒక్కరి స్వభావం వారి అనంత పూర్వజన్మల కర్మఫలాల సమ్మేళనం. సర్వేశ్వరుడు చక్రవర్తి అయితే, కాలం రాజు ఆజ్ఞను అమలు చేసే ప్రధాన మంత్రి, స్వభావం ఆ ఆజ్ఞ ప్రకారం నడిచే రాజ్య పాలనా వ్యవస్థ. పరమాత్మ సంకల్పం లేకుండా ఈ కర్మలు, స్వభావాలు నిద్రాణమైన విత్తనాలలాగే ఉండిపోతాయి కానీ మొలకెత్తవు.',
    sanskritShlokaTe: '॥ ప్రభావం పౌరుషం ప్రాహుః కాలమేకే యతో భయమ్ । అహంకారవిమూఢస్య కర్తుః ప్రకృతిమీయుషః ॥ (శ్రీమద్భాగవతం 3.26.16)',
    shlokaMeaningTe: '"సర్వేశ్వరుడైన పరమపురుషుడి సంకల్పం (ఈక్షణం) వల్ల కాలం అనే శక్తి ప్రకృతిని క్షోభింపజేస్తుంది. ఆ సమయంలో జీవుల పూర్వ కర్మల ప్రభావంతో స్వభావం అనేది వ్యక్తమవుతుంది."',
    analogyTe: 'సర్వేశ్వరుడు ఒక రాజు (King) అయితే, కాలం ఆయన ఆజ్ఞను అమలు చేసే మంత్రి (Minister) లాంటిది; స్వభావం అనేది ఆ ఆజ్ఞ ప్రకారం రూపుదిద్దుకునే పాలనా వ్యవస్థ (System) లాంటిది.',
    pdfSlideRefTe: 'PDF స్లైడ్ 10, 11, 12, 13 & 17: కాలం, స్వభావం, కర్మల సమగ్ర సమన్వయం & భాగవత ప్రమాణం',
    sourceNoteTe: 'మూల గ్రంథం (భాగవతం 3.26): "సంకల్పం విత్తనాన్ని నాటితే, కాలం దానిని మొలకెత్తిస్తుంది, స్వభావం దానికి రూపమిస్తుంది, కర్మ ఫలితాన్ని అందిస్తుంది!"',
    icon: '⚙️',
  },
  {
    id: 'kc-4',
    order: 4,
    nameTe: 'కర్మఫల అనుభవం (సుఖ-దుఃఖాలు)',
    nameEn: 'Experiencing Fruits of Action (Pleasure & Pain)',
    subtitleTe: 'జగన్నాటకంలో ద్వంద్వాల అనుభవం, త్రివిధ తాపాలు & సంసార బంధం',
    subtitleEn: 'Experiencing Dualities, Threefold Afflictions & Karmic Bondage',
    type: 'present',
    descriptionTe:
      'చేసిన పుణ్యాల వల్ల సుఖాలు, సంతోషం; పాపాల వల్ల దుఃఖాలు, కష్టాలు అనుభవంలోకి వస్తాయి. మాయా ప్రభావం చేత జీవుడు శరీరాभिమానంతో మళ్లీ స్వార్థ కర్మలు చేస్తూ సంసార చక్రంలో చిక్కుకుంటాడు లేదా వివేకంతో గుణపాఠం నేర్చుకుంటాడు.',
    descriptionEn:
      'Merit yields joy and prosperity; demerit manifests distress and hardship. Entrapped by egoic identification, the soul either creates new karmic bondage or awakens to spiritual discrimination.',
    keyPointsTe: [
      {
        heading: 'అవిద్య మరియు అహంకారం (Ignorance & Ego – PDF స్లైడ్ 18)',
        detail: '"నేను ఈ శరీరాన్ని మాత్రమే" అనే భ్రమ (అవిద్య) వల్ల జీవుడు అహంకారం, మమకారాలలో చిక్కుకుంటాడు.'
      },
      {
        heading: 'కర్మ చక్రం & ఆగామి కర్మలు (Cycle of Re-birth)',
        detail: 'స్వార్థంతో, ఫలాపేక్షతో చేసే కర్మలు కొత్త పాపపుణ్యాలను (ఆగామి కర్మలను) ఉత్పత్తి చేస్తాయి. వాటి ఫలితాలను అనుభవించడానికి మళ్లీ మళ్లీ జన్మలు ఎత్తాల్సి వస్తుంది.'
      },
      {
        heading: 'త్రివిధ తాపాలు (Threefold Afflictions – PDF స్లైడ్ 18)',
        detail: 'ఆధ్యాత్మిక (శారీరక, మానసిక వ్యాధులు), ఆదిభౌతిక (ఇతర ప్రాణుల వల్ల కలిగే బాధలు), ఆదిదైవిక (ప్రకృతి వైపరీత్యాల వల్ల కలిగే బాధలు) తాపాలతో జీవుడు సంసారంలో అశాంతిని అనుభవిస్తాడు.'
      },
      {
        heading: 'కష్టసుఖాల తత్వం (Dualities as Evolutionary Lessons – PDF స్లైడ్ 4)',
        detail: 'నాటకంలో వివిధ సన్నివేశాలు ఉన్నట్లే, జగన్నాటకంలో జీవుల కర్మలననుసరించి సుఖదుఃఖాలనే ద్వంద్వాలు ఏర్పడతాయి. ఇవి జీవిని అంతర్ముఖుడిని చేసే గుణపాఠాలు.'
      }
    ],
    philosophicalDepthTe:
      'సత్వ, రజ, తమో గుణాల సమ్మేళనంతో కూడిన భగవంతుని దైవీ మాయ (ప్రకృతి) దాటడానికి అత్యంత కష్టతరమైనది (దురత్యయా). ఈ మాయ ప్రభావం వల్లనే జీవులు తమ నిత్యశుద్ధ ఆత్మస్వరూపాన్ని మరచి, తామే శరీరమని భ్రమించి కష్టసుఖాలకు కుంగిపోతూ లేదా పొంగిపోతూ కర్మబంధాలలో చిక్కుకుంటారు.',
    sanskritShlokaTe: '॥ దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా । మామేవ యే ప్రపద్యన్తే మాయామేతాం తరన్తి తే ॥ (భగవద్గీత 7.14)',
    shlokaMeaningTe: '"త్రిగుణాత్మకమైన నా ఈ దైవీ మాయ (ప్రకృతి) దాటడానికి అత్యంత కష్టమైనది. కానీ ఎవరైతే నన్ను మాత్రమే అనన్య భక్తితో శరణువేడుతారో, వారు ఈ మాయను సులభంగా దాటగలరు."',
    analogyTe: 'పట్టుపురుగు తాను సృష్టించిన దారాలతోనే తన చుట్టూ గూడు కట్టుకుని బందీ అయినట్లు, జీవుడు స్వార్థ కర్మల వాసనలతో సంసార బంధంలో చిక్కుకుంటాడు.',
    pdfSlideRefTe: 'PDF స్లైడ్ 4, 16, 17 & 18: బంధం అంటే ఏమిటి? త్రివిధ తాపాలు & మాయా తత్వం',
    sourceNoteTe: 'మూల గ్రంథం (PDF స్లైడ్ 18): "అవిద్య, అహంకారం మరియు స్వార్థ కర్మల వల్ల జీవుడు త్రివిధ తాపాలతో సంసార చక్రంలో మళ్లీ మళ్లీ జన్మలు ఎత్తుతాడు."',
    icon: '⚖️',
  },
  {
    id: 'kc-5',
    order: 5,
    nameTe: 'జ్ఞాన సాధన & నిష్కామ కర్మ',
    nameEn: 'Spiritual Inquiry & Selfless Action',
    subtitleTe: 'ఈశ్వరార్పణ బుద్ధి, సమత్వం, భక్తి శరణాగతి & సాక్షి భావ సాధన',
    subtitleEn: 'Selfless Duty, Equanimity, Devotional Surrender & Witness Consciousness',
    type: 'transcendence',
    descriptionTe:
      'కష్టసుఖాల తాకిడికి చలించక "నేను కేవలం శరీరమా? లేక శాశ్వత ఆత్మనా?" అనే ఆత్మవిచారణ చేయడం; చేసే ప్రతి పనినీ ఫలాపేక్ష లేకుండా ఈశ్వరార్పణ బుద్ధితో, భక్తి సమన్వయంతో ఆచరించడం.',
    descriptionEn:
      'Awakening to self-inquiry ("Who am I?"), performing all worldly duties without selfish attachment as an offering to God, and abiding in witness consciousness.',
    keyPointsTe: [
      {
        heading: 'కర్మ త్యాగం కాదు – ఫల త్యాగం (PDF స్లైడ్ 21 & 25)',
        detail: 'పనులను వదిలివేయడం కర్మయోగం కాదు; పనుల ఫలితంపై స్వార్థ ఆశను వదిలి, ఉద్యోగం/వ్యాపారం/కుటుంబ సేవను దేవుడిచ్చిన పవిత్ర బాధ్యతగా (ఈశ్వరార్పణంగా) నిర్వహించడం.'
      },
      {
        heading: 'ప్రసాద బుద్ధి & సమత్వం (Equanimity – PDF స్లైడ్ 21 & 25)',
        detail: 'మీ వంతు ప్రయత్నాన్ని నిబద్ధతతో చేసి, ఫలితం అనుకూలమైనా ప్రతికూలమైనా (విజయం లేదా ఓటమి) భగవంతుని "దివ్య ప్రసాదం"గా సమభావంతో స్వీకరించడం.'
      },
      {
        heading: 'చేతులు పనిలో – మనస్సు దేవునిలో (PDF స్లైడ్ 24)',
        detail: 'తామరాకుపై నీటిబొట్టులా (పద్మపత్రమివాంభసా) సంసారంలో ఉంటూనే, బాహ్యంగా విధులను నిర్వహిస్తూ అంతర్గతంగా పరమాత్మను స్మరించడం (భక్తియుక్త కర్మ సమన్వయం).'
      },
      {
        heading: 'ఆత్మ విచారణ & సాక్షి భావం (PDF స్లైడ్ 19 & 25)',
        detail: 'శ్రవణ, మనన, నిదిధ్యాసనల ద్వారా "నేను మరణించే శరీరం కాదు, మనస్సు కాదు; ఆలోచనలను గమనించే సాక్షి చైతన్యాన్ని (అహం బ్రహ్మాస్మి)" అని నిరంతరం విచారణ చేయడం.'
      }
    ],
    philosophicalDepthTe:
      'స్వార్థంతో చేసే కర్మ మాత్రమే జీవుడిని బంధిస్తుంది; నిస్వార్థంగా లోక కళ్యాణం కోసం యజ్ఞార్థంగా చేసే కర్మ కొత్త బంధాలను సృష్టించకపోగా అంతఃకరణాన్ని (చిత్తాన్ని) నిర్మలంగా శుద్ధి చేస్తుంది. రాజసిక, తామసిక స్వభావాలను సాత్వికంగా మార్చుకోవడమే మోక్షానికి రాజమార్గం.',
    sanskritShlokaTe: '॥ కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన । మా కర్మఫలహేతుర్భూః మా తే సంగోఽస్త్వకర్మణి ॥ (భగవద్గీత 2.47)',
    shlokaMeaningTe: '"కర్మలను ఆచరించడంలోనే నీకు అధికారం ఉంది, కానీ వాటి ఫలితాలపై ఎప్పుడూ అధికారం లేదు. కర్మఫలానికి నీవు కారణం కాకు; అలాగని కర్మలు మానివేయడంలోనూ ఆసక్తి చూపకు."',
    analogyTe: 'నీటిలోనే పుట్టి పెరిగినా నీటి తడి అంటని తామరాకు (పద్మపత్రం) వలె, సంసారంలో కర్మలు చేస్తూనే కర్మబంధం అంటకుండా జీవించడం.',
    pdfSlideRefTe: 'PDF స్లైడ్ 19, 20, 21, 24 & 25: చతుర్విధ మోక్ష మార్గాలు & ఆచరణాత్మక సమన్వయం',
    sourceNoteTe: 'మూల గ్రంథం (PDF స్లైడ్ 21 & 24): "చేసే ప్రతి పనినీ ఒక పూజగా, సమాజ హిత యజ్ఞంగా మార్చుకుంటే ఆ పని కర్మబంధం కాకుండా మోక్ష సాధనమవుతుంది."',
    icon: '🔥',
  },
  {
    id: 'kc-6',
    order: 6,
    nameTe: 'కర్మక్షయం & మోక్ష ప్రాప్తి',
    nameEn: 'Destruction of Karmas & Supreme Liberation',
    subtitleTe: 'జ్ఞానాగ్ని దగ్ధ కర్మ, జనన-మరణ చక్ర విముక్తి & జీవాత్మ-పరమాత్మ ఐక్యం',
    subtitleEn: 'Incineration of All Karmas in the Fire of Knowledge & Eternal Union with the Divine',
    type: 'transcendence',
    descriptionTe:
      'భగవద్గీత 4.37 లో చెప్పినట్లు జ్ఞానాగ్ని ద్వారా సమస్త సంచిత కర్మలు భస్మమైపోతాయి. ప్రారబ్ధం అనుభవంతో తీరిపోతుంది, కొత్త ఆగామి కర్మలు అంటవు. జీవాత్మ పరమాత్మతో లీనమై శాశ్వత మోక్షాన్ని పొందుతుంది.',
    descriptionEn:
      'As declared in Gita 4.37, the fire of Self-Knowledge burns the entire stock of karmas into ashes. Prarabdha dissolves, no fresh bondage clings, and the Jiva attains eternal liberation.',
    keyPointsTe: [
      {
        heading: 'జ్ఞానాగ్ని చేత సంచిత కర్మల దహనం (Gita 4.37)',
        detail: 'మండే అగ్ని కట్టెలన్నింటినీ బూడిద చేసినట్లే, ఆత్మజ్ఞానమనే అగ్ని అనంత జన్మల సంచిత కర్మల రాశిని నిశ్శేషంగా భస్మం చేస్తుంది.'
      },
      {
        heading: 'శాశ్వత దుఃఖ నివృత్తి & బ్రహ్మానంద ప్రాప్తి (PDF స్లైడ్ 18)',
        detail: 'ఆధ్యాత్మిక, ఆదిభౌతిక, ఆదిదైవిక త్రివిధ తాపాల శాశ్వత నివృత్తి మరియు పరిపూర్ణ సచ్చిదానంద బ్రహ్మానంద ప్రాప్తినే "మోక్షం" అంటారు.'
      },
      {
        heading: 'అవిద్య నాశనం & కైవల్య ముక్తి (PDF స్లైడ్ 19)',
        detail: 'దీపం వెలిగించగానే వేల ఏళ్ల చీకటి పటాపంచలైనట్లు, ఆత్మజ్ఞానం కలగగానే అనాది కాలపు అజ్ఞానం తొలగిపోయి జీవుడే పరబ్రహ్మమనే సత్యం అనుభవమవుతుంది.'
      },
      {
        heading: 'సముద్రంలో నది సంగమం (Non-Dual Union – PDF స్లైడ్ 18 & 26)',
        detail: 'నది సముద్రంలో సంగమించి తన ప్రత్యేక పరిమిత నామరూపాలను కోల్పోయి సముద్రమే అయినట్లు, జీవాత్మ అహంకార బంధాలను వీడి పరమాత్మలో శాశ్వతంగా ఐక్యమవుతుంది.'
      }
    ],
    philosophicalDepthTe:
      'సర్వేశ్వరుని లీలగా సృష్టి ఆవిర్భవిస్తుంది; జీవుడు కర్మ, భక్తి, ధ్యాన, జ్ఞాన మార్గాల సమన్వయంతో ప్రయాణించి ఆ పరమాత్మ తత్వాన్ని తెలుసుకున్నప్పుడు సంచిత కర్మలు జ్ఞానాగ్నిలో కాలిపోతాయి, ఆగామి కర్మలు అంటవు. విత్తనాన్ని వేయించిన తర్వాత అది మళ్లీ మొలకెత్తనట్లే, జ్ఞాని యొక్క కర్మలు పునర్జన్మను ఇవ్వవు. ఇదే జీవాత్మ ప్రయాణపు పరమ గమ్యం!',
    sanskritShlokaTe: '॥ యథైధాంసి సమిద్ధోఽగ్నిర్బస్మసాత్కురుతేఽర్జున । జ్ఞానాగ్నిః సర్వకర్మాణి భస్మసాత్కురుతే తథా ॥ (భగవద్గీత 4.37)',
    shlokaMeaningTe: '"ఓ అర్జునా! ప్రజ్వలించే అగ్ని ఇంధనాన్ని (కట్టెలను) ఎలా బూడిద చేస్తుందో, అలాగే ఆత్మజ్ఞానమనే అగ్ని సమస్త కర్మలను భస్మం చేస్తుంది."',
    analogyTe: 'నది సముద్రంలో కలిసిన తర్వాత తన వేరు నామరూపాలను వదిలి మహాసముద్రమే అయినట్లు, ముక్తజీవుడు పరమాత్మ ఆనంద సాగరంలో ఏకమవుతాడు.',
    pdfSlideRefTe: 'PDF స్లైడ్ 18, 19, 23 & 26: మోక్షం – పరమ ప్రాప్తి & సృష్టి నుండి మోక్షం వరకు జీవాత్మ ప్రయాణం',
    sourceNoteTe: 'ముగింపు సందేశం (PDF స్లైడ్ 26): "సర్వేశ్వరుని లీలగా సృష్టి ఆవిర్భవిస్తుంది. జీవుడు జ్ఞాన, భక్తి, కర్మ, ధ్యాన మార్గాల ద్వారా ఆ పరమాత్మ తత్వాన్ని తెలుసుకుని శాశ్వత ఆనందాన్ని పొందుతాడు."',
    icon: '🕉️',
  },
];

// ==========================================
// 8. MODULE 7: FOUR PATHS TO MOKSHA
// ==========================================
export const FOUR_MOKSHA_PATHS: MokshaPath[] = [
  {
    id: 'jnana-marga',
    nameTe: 'జ్ఞాన మార్గము',
    nameEn: 'Path of Knowledge (Jnana Yoga)',
    coreQuestionTe: 'నేను ఎవరు? (Who am I?)',
    coreQuestionEn: 'Who am I? (Koham? Atma Vichara)',
    philosophyTe:
      'జీవుడు తనను తాను ఈ శరీరం, మనస్సు లేదా గుణాలు (సత్వ, రజ, తమో) అని భ్రమపడతాడు. దీనినే అజ్ఞానం లేదా మాయ అంటారు. వేదాంత శ్రవణం, మననం, నిదిధ్యాసనం ద్వారా "నేను ప్రకృతి స్వభావానికి అతీతుడనైన శుద్ధ ఆత్మను" అని తెలుసుకున్నప్పుడు అజ్ఞానం నశిస్తుంది. నది సముద్రంలో కలిసినట్లు, జీవాత్మ పరమాత్మతో ఒకటవుతుంది (అద్వైత సిద్ధి).',
    philosophyEn:
      'The soul mistakenly identifies itself with the perishable body, mind, and the three Gunas. Through philosophical inquiry, study, contemplation, and meditative absorption, ignorance dissolves and the individual soul realizes non-dual oneness with Brahman.',
    keyConceptsTe: [
      'ఆత్మ విచారణ ("నేను ఎవరు?")',
      'మహావాక్య సాధన ("అహం బ్రహ్మాస్మి")',
      'శ్రవణం (వేదాంతం వినడం), మననం (చింతన చేయడం), నిదిధ్యాసనం (ధ్యానస్థితి)',
      'దేహాభిమానం తొలగి శుద్ధ ఆత్మ స్వరూప అనుభవం పొందడం',
    ],
    keyConceptsEn: [
      'Self-Inquiry ("Who am I? / Koham?")',
      'Realizing Upanishadic Mahavakyas ("Aham Brahmasmi")',
      'Sravana (listening), Manana (reflective reasoning), Nididhyasana (deep meditation)',
      'Transcending bodily identification to experience the pure, unattached Self',
    ],
    practiceMethodTe: 'వివేకం మరియు వైరాగ్యంతో కూడిన నిరంతర ఆత్మ విచారణ, సాక్షి భావన మరియు ధ్యానం.',
    practiceMethodEn: 'Continuous self-inquiry with discrimination (Viveka) and dispassion (Vairagya).',
    intendedOutcomeTe: 'జీవ-బ్రహ్మ ఐక్యానుభూతి; సర్వ భ్రమల నివృత్తి మరియు కైవల్య ముక్తి.',
    intendedOutcomeEn: 'Direct non-dual realization of Brahman; cessation of all illusions.',
    gitaReference: 'భగవద్గీత 4వ అధ్యాయం (జ్ఞాన కర్మ సన్యాస యోగం)',
    icon: '💡',
    accentColor: '#3B82F6',
  },
  {
    id: 'bhakti-marga',
    nameTe: 'భక్తి మార్గము',
    nameEn: 'Path of Devotion (Bhakti Yoga)',
    coreQuestionTe: 'సర్వేశ్వరునిపై అనన్య ప్రేమను ఎలా నిలపాలి?',
    coreQuestionEn: 'How to cultivate unconditional love for the Supreme?',
    philosophyTe:
      'శ్రీకృష్ణ పరమాత్మ భగవద్గీతలో అత్యంత సులువైనదిగా, మధురమైనదిగా ప్రశంసించిన మార్గం ఇది. భగవంతునిపై అనన్యమైన ప్రేమను పెంచుకోవడం, సర్వమూ ఆ సర్వేశ్వరుని రూపమేనని భావించడం. భక్తుడు తన అహాన్ని భగవంతునికి పూర్తిగా శరణాగతి (Surrender) చేస్తాడు. భక్తి పరాకాష్ఠకు చేరినప్పుడు, భక్తుడికి మరియు భగవంతునికి మధ్య ఉన్న దూరం తొలగిపోయి, జీవుడు పరమాత్మ దైవీ ఆనందంలో ఓలలాడుతాడు.',
    philosophyEn:
      'Praised by Lord Krishna as the most direct and affectionate path for all beings. Cultivating intense love for God and beholding the Divine in all creation. Complete surrender (Saranagati) dissolves individual ego into divine ecstasy.',
    keyConceptsTe: [
      'భగవంతునిపై అనన్య ప్రేమ మరియు శ్రద్ధ',
      'సర్వాత్మ భావన (అందరిలోనూ భగవంతుని దర్శించడం)',
      'సంపూర్ణ శరణాగతి (ఆత్మ సమర్పణ)',
      'ఈశ్వరునితో ఆత్మీయ సంబంధం (నవవిధ భక్తి మార్గాలు)',
    ],
    keyConceptsEn: [
      'Unswerving, pure love and trust in the Divine',
      'Universal vision (seeing God in every living creature)',
      'Total surrender of personal ego at the lotus feet of the Supreme',
      'Sweet relational intimacy with the Divine (Nine limbs of Bhakti)',
    ],
    practiceMethodTe: 'నామస్మరణ, కీర్తన, పూజ, ఈశ్వర గుణ గానం మరియు హృదయపూర్వక శరణాగతి.',
    practiceMethodEn: 'Namasmarana (sacred chanting), Kirtan, prayer, contemplation, and unconditional surrender.',
    intendedOutcomeTe: 'ఈశ్వర సాన్నిధ్యం, సాయుజ్య ముక్తి మరియు శాశ్వత నిరతిశయానందం.',
    intendedOutcomeEn: 'Eternal divine communion, blissful union with the Supreme Lord.',
    gitaReference: 'భగవద్గీత 12వ అధ్యాయం (భక్తి యోగం) & శ్రీమద్భాగవతం (7.5.23)',
    limbsTe: [
      '1. శ్రవణం: భగవత్ లీలలు వినడం (పరీక్షిత్తు మహారాజు)',
      '2. కీర్తనం: దివ్య నామ గానం (నారద మహర్షి)',
      '3. స్మరణం: నిరంతర భగవత్ ధ్యానం (భక్త ప్రహ్లాదుడు)',
      '4. పాదసేవనం: శ్రీచరణ సేవ (లక్ష్మీదేవి)',
      '5. అర్చనం: భక్తితో పూజించడం (పృథు చక్రవర్తి)',
      '6. వందనం: భక్తిపూర్వక నమస్కారం (అక్రూరుడు)',
      '7. దాస్యం: నిష్కల్మష సేవక భావం (ఆంజనేయ స్వామి)',
      '8. సఖ్యం: ఆత్మీయ మిత్రభావం (అర్జునుడు)',
      '9. ఆత్మనివేదనం: సంపూర్ణ సర్వసమర్పణ (బలి చక్రవర్తి)',
    ],
    icon: '🪷',
    accentColor: '#EC4899',
  },
  {
    id: 'karma-marga',
    nameTe: 'కర్మ మార్గము (నిష్కామ కర్మ)',
    nameEn: 'Path of Selfless Action (Karma Yoga)',
    coreQuestionTe: 'సంసారంలో ఉంటూనే కర్మ బంధాల నుండి ఎలా విముక్తి పొందాలి?',
    coreQuestionEn: 'How to act dynamically in the world without incurring bondage?',
    philosophyTe:
      'సృష్టిలో ఉంటూనే బంధాల నుండి విముక్తి పొందే అద్భుతమైన మార్గం ఇది. కర్మలు చేయడం మానవ స్వభావం; శ్వాసించడం నుండి పనిచేయడం వరకు ఎవరూ క్షణమైనా కర్మలు చేయకుండా ఉండలేరు. అయితే, ఆ కర్మలను ఫలాపేక్ష లేకుండా (ఆశించకుండా), ఈశ్వరార్పణ బుద్ధితో చేయడం "నిష్కామ కర్మ". కర్మల వెనుక స్వార్థం లేనప్పుడు కొత్త కర్మఫలాలు చుట్టుకోవు. చిత్తశుద్ధి కలిగి, హృదయం పవిత్రమవ్వడం ద్వారా జీవుడు క్రమంగా పరమాత్మ తత్వాన్ని పొందుతాడు.',
    philosophyEn:
      'The sublime art of working in the world without bondage. Action is unavoidable for embodied beings. But performing duties selflessly, surrendering all fruits to the Supreme as divine offering, burns selfish desires and yields spotless purity of mind.',
    keyConceptsTe: [
      'నిష్కామ కర్మ (ఫలితంపై స్వార్థ ఆశ లేకుండా పనిచేయడం)',
      'ఈశ్వరార్పణ బుద్ధి (చేసే ప్రతి పనిని దైవార్పణ చేయడం)',
      'సమత్వ బుద్ధి (విజయ-అపజయాలలో సమభావం)',
      'చిత్తశుద్ధి సాధించడం ద్వారా మోక్షార్హత పొందడం',
    ],
    keyConceptsEn: [
      'Nishkama Karma (acting without selfish craving for results)',
      'Ishwararpana Buddhi (dedicating all actions as sacred offerings)',
      'Samatva Buddhi (equanimity amidst success and failure)',
      'Purification of inner consciousness (Chitta Suddhi) leading to liberation',
    ],
    practiceMethodTe: 'రోజువారీ విధులు, బాధ్యతలను భగవత్ సేవగా నిర్వహించడం, ఫలితాలను ప్రసాద బుద్ధితో స్వీకరించడం.',
    practiceMethodEn: 'Fulfilling occupational and family duties as worship, receiving results with serene gratitude.',
    intendedOutcomeTe: 'కర్మ బంధాల నుండి విడుదల; చిత్తశుద్ధి ద్వారా జ్ఞానోదయం మరియు మోక్షం.',
    intendedOutcomeEn: 'Freedom from the cycle of karmic bondage, inner sanctity, and eventual liberation.',
    gitaReference: 'భగవద్గీత 3వ అధ్యాయం (కర్మ యోగం) & 2.47',
    icon: '⚖️',
    accentColor: '#F59E0B',
  },
  {
    id: 'raja-yoga',
    nameTe: 'రాజయోగము / ధ్యాన మార్గము',
    nameEn: 'Path of Meditation (Raja Yoga / Dhyana Yoga)',
    coreQuestionTe: 'మనస్సును మరియు ప్రాణాన్ని నియంత్రించి సమాధి స్థితిని ఎలా చేరాలి?',
    coreQuestionEn: 'How to master the mind and senses to abide in stillness?',
    philosophyTe:
      'మనస్సును, ప్రాణాన్ని నియంత్రించి అంతర్ముఖం అయ్యే శాస్త్రీయ యోగ మార్గం. పతంజలి మహర్షి ప్రతిపాదించిన అష్టాంగ యోగం ద్వారా మనస్సులోని చంచలత్వాన్ని (చిత్తవృత్తులను) పూర్తిగా నిరోధించడం. సమాధి స్థితిలో బాహ్య ప్రపంచం, శరీరం అనే స్పృహ పూర్తిగా పోతుంది. కేవలం అంతరాత్మ మాత్రమే మిగులుతుంది. ఆ స్థితిలో జీవాత్మ, పరమాత్మల మధ్య ఉన్న పరదా తొలగిపోయి ఏకత్వం సిద్ధిస్తుంది.',
    philosophyEn:
      'The systematic scientific path of inner discipline. Through the eightfold path (Ashtanga Yoga), mental fluctuations are stilled. In Samadhi, bodily identification vanishes, the veil drops, and the pure Self shines in pristine union with the Divine.',
    keyConceptsTe: [
      'చిత్తవృత్తి నిరోధం (మనస్సులోని ఆలోచనా తరంగాలను శాంతింపజేయడం)',
      'అంతర్ముఖ ప్రయాణం (బాహ్య ఇంద్రియాలను ఉపసంహరించడం)',
      'అష్టాంగ సాధన (యమ నుండి సమాధి వరకు)',
      'నిర్వికల్ప సమాధి స్థితిలో పరమాత్మతో లయమవ్వడం',
    ],
    keyConceptsEn: [
      'Chitta Vritti Nirodha (stilling mental modifications)',
      'Inward journey withdrawing senses from outer distractions',
      'Gradual mastery across the eight limbs from Yama to Samadhi',
      'Nirvikalpa Samadhi: absorption of the individual witness into Supreme Reality',
    ],
    practiceMethodTe: 'నియమబద్ధమైన ఆసన, ప్రాణాయామ, ప్రత్యాహార, ధారణ మరియు ధ్యాన సాధనలు.',
    practiceMethodEn: 'Systematic practice of posture, breath control, sense-withdrawal, concentration, and meditation.',
    intendedOutcomeTe: 'కైవల్యం; మనస్సు సమసిపోయి నిత్య శుద్ధ ఆత్మ స్థితిలో స్థిరపడటం.',
    intendedOutcomeEn: 'Kaivalya: absolute freedom and transcendence of the mind.',
    gitaReference: 'భగవద్గీత 6వ అధ్యాయం (ఆత్మసంయమ యోగం)',
    limbsTe: [
      '1. యమ (అహింస, సత్యం, అస్తేయం, బ్రహ్మచర్యం, అపరిగ్రహం)',
      '2. నియమ (శౌచం, సంతోషం, తపస్సు, స్వాధ్యాయం, ఈశ్వరప్రణిధానం)',
      '3. ఆసన (స్థిరమైన, సుఖకరమైన శరీర స్థితి)',
      '4. ప్రాణాయామ (శ్వాస నిశ్వాసాల లయబద్ధ నియంత్రణ)',
      '5. ప్రత్యాహార (ఇంద్రియాలను బాహ్య విషయాల నుండి లోపలికి మరల్చడం)',
      '6. ధారణ (మనస్సును ఒకే దివ్య బిందువుపై నిలపడం)',
      '7. ధ్యాన (నిరంతరాయమైన తైలధార వంటి ఏకాగ్ర చింతన)',
      '8. సమాధి (ధ్యానం చేసేవాడు, ధ్యేయవస్తువు ఒకటయ్యే దివ్య ఏకత్వ స్థితి)',
    ],
    icon: '🧘',
    accentColor: '#8B5CF6',
  },
];

// ==========================================
// 9. MODULE 8: PRACTICAL DAILY SPIRITUALITY
// ==========================================
export const DAILY_SADHANA_PRACTICES: DailySadhanaPractice[] = [
  {
    id: 'practice-1',
    titleTe: '1. ఈశ్వరార్పణం (నిష్కామ కర్మ)',
    titleEn: '1. Ishwararpanam (Offering Deeds to God)',
    pathAssociation: 'నిష్కామ కర్మ మార్గం (Karma Yoga)',
    practiceRuleTe:
      'మీరు చేసే ఉద్యోగం, వ్యాపారం, చదువు లేదా గృహ నిర్వహణ పనులను కేవలం స్వార్థ ప్రయోజనం కోసం కాక, లోక శ్రేయస్సు కొరకు భగవంతుడు మీకు అప్పగించిన దివ్య కర్తవ్యంగా భావించి చేయండి.',
    practiceRuleEn:
      'Perform your daily work, career, studies, or home duties not out of petty selfishness, but as a sacred trust assigned by the Divine for the welfare of all.',
    benefitTe: '"నేను చేస్తున్నాను" అనే అహంకారం తగ్గి, మానసిక ఒత్తిడి, ఆందోళన దూరమై మనస్సు ప్రశాంతమౌతుంది.',
    benefitEn: 'Reduces the egoic delusion "I am the doer", dissolving performance anxiety and mental strain.',
    actionChecklistTe: [
      'ఉదయం పని ప్రారంభించే ముందు "ఈ కార్యం ఈశ్వరార్పణం" అని స్మరించుకోండి.',
      'కార్యాలయంలో నీతిగా, నిష్పక్షపాతంగా మీ వంతు బాధ్యతను పూర్తి చేయండి.',
      'పని ముగిశాక "కృష్ణార్పణమస్తు" అని ఫలాపేక్ష లేకుండా పరమాత్మకు నివేదించండి.',
    ],
    icon: '🤲',
  },
  {
    id: 'practice-2',
    titleTe: '2. సమత్వ బుద్ధి (ప్రసాద బుద్ధి)',
    titleEn: '2. Samatva Buddhi (Equanimous Prasada Mindset)',
    pathAssociation: 'జ్ఞాన-కర్మ సమన్వయం (Gita 2.48)',
    practiceRuleTe:
      'మీ వంతు ప్రయత్నాన్ని శ్రద్ధగా పూర్తి చేయండి. ఫలితం మీరు ఆశించినట్లు వచ్చినా, రాకపోయినా దాన్ని భగవంతుని పవిత్ర ప్రసాదంగా నిశ్చల మనస్సుతో స్వీకరించడం అలవాటు చేసుకోండి.',
    practiceRuleEn:
      'Put forth your sincere effort. Whether the outcome aligns with expectations or not, accept it serenely as God’s wise Prasada.',
    benefitTe: 'గెలుపోటములకు, లాభనష్టాలకు కుంగిపోకుండా స్థితప్రజ్ఞత అలవడుతుంది; భావోద్వేగాల స్థిరత్వం లభిస్తుంది.',
    benefitEn: 'Cultivates the unwavering composure of a Sthitaprajna, free from elation in gain or depression in loss.',
    actionChecklistTe: [
      'విజయాలు వచ్చినప్పుడు పొంగిపోక కృతజ్ఞతతో వినయం చూపండి.',
      'ఆటంకాలు ఎదురైనప్పుడు ధైర్యం వీడక "ఇది కూడా నా పరిణామానికే" అని భావించండి.',
      'ఇతరుల తీర్పులకు అతిగా స్పందించక అంతర్గత శాంతిని కాపాడుకోండి.',
    ],
    icon: '⚖️',
  },
  {
    id: 'practice-3',
    titleTe: '3. నిత్య నామస్మరణ & ధ్యానం (భక్తి మార్గం)',
    titleEn: '3. Daily Namasmarana & Contemplation',
    pathAssociation: 'భక్తి మార్గం (Bhakti Yoga)',
    practiceRuleTe:
      'పూజా గదిలోనే గంటల తరబడి కూర్చోవాల్సిన అవసరం లేదు. ఉదయం నిద్ర లేవగానే, రాత్రి పడుకునే ముందు 5–10 నిమిషాలు ప్రశాంతంగా కూర్చుని ధ్యానం చేయడం లేదా ఇష్టదైవ నామాన్ని మనస్సులో తలుచుకోవడం చేయండి.',
    practiceRuleEn:
      'One need not sit for hours in elaborate rituals. Upon waking and before rest, spend 5 to 10 quiet minutes chanting a sacred mantra or resting the mind in devotion.',
    benefitTe: 'రోజంతా మనస్సుకు ఒక సత్సంకల్పం, రక్షణ కవచం లభిస్తాయి; ఏకాగ్రత మరియు ఆత్మవిశ్వాసం పెరుగుతాయి.',
    benefitEn: 'Endows the mind with a shield of divine protection, mental stamina, and continuous peace.',
    actionChecklistTe: [
      'రోజూ కనీసం 5 నిమిషాలు నిశ్శబ్దంగా కూర్చుని ఓంకార లేదా ఇష్టనామ జపం చేయండి.',
      'ప్రయాణాలలో, ఖాళీ సమయాలలో మనస్సు వ్యర్థ ఆలోచనల్లోకి వెళ్లకుండా నామస్మరణ చేయండి.',
      'రాత్రి పడుకునే ముందు కృతజ్ఞతా భావంతో ప్రార్థన ముగించండి.',
    ],
    icon: '📿',
  },
  {
    id: 'practice-4',
    titleTe: '4. సాక్షి భావం (ఆత్మ స్పర్శ)',
    titleEn: '4. Sakshi Bhavam (Witness Consciousness)',
    pathAssociation: 'జ్ఞాన / రాజయోగం (Jnana / Raja Yoga)',
    practiceRuleTe:
      'రోజులో కనీసం కొద్ది నిమిషాల పాటు బాహ్య ప్రపంచాన్ని, మీ మనస్సులోని ఆలోచనలను ఒక నిష్పాక్షిక "సాక్షి" లాగా గమనించండి. "నేను కేవలం ఈ ఆలోచనలను చూసే నిత్య చైతన్యాన్ని (ఆత్మను)" అని గుర్తుచేసుకోండి.',
    practiceRuleEn:
      'Take mindful moments during the day to step back as an impartial witness. Observe thoughts, sensations, and emotions without becoming entangled, affirming your true identity as pure Awareness.',
    benefitTe: 'కోపం, క్రోధం, అసూయ వంటి తామసిక, రాజసిక గుణాల తీవ్రత తగ్గి, సాత్విక శాంత స్వభావం విస్తరిస్తుంది.',
    benefitEn: 'Dissolves anger, jealousy, and mental turbulence, establishing steady Sattvic clarity.',
    actionChecklistTe: [
      'కోపం లేదా అసహనం వచ్చినప్పుడు వెంటనే స్పందించక, ఆ భావోద్వేగాన్ని సాక్షిగా గమనించండి.',
      '"నేను ఈ కోపం కాదు, నేను దీన్ని చూసే చైతన్యాన్ని" అని అంతరంగాన్ని మేల్కొలపండి.',
      'రాత్రివేళ 3 నిమిషాలు రోజంతా జరిగిన విషయాలను ఒక చలనచిత్రంలా సాక్షిగా సమీక్షించుకోండి.',
    ],
    icon: '👁️',
  },
];

// ==========================================
// 10. MODULE 9: INTERACTIVE VEDANTA KNOWLEDGE TREE
// ==========================================
export const VEDANTA_KNOWLEDGE_TREE_NODES: VedantaTreeNode[] = [
  {
    id: 'node-paramatma',
    order: 1,
    titleTe: 'పరమాత్మ',
    titleEn: 'Paramatma (Supreme Absolute)',
    category: 'divine_origin',
    subtitleTe: 'సచ్చిదానంద నిర్గుణ-నిరాకార సత్యం',
    subtitleEn: 'Transcendental Non-Dual Reality',
    descTe:
      'సృష్టికి పూర్వం, సృష్టి సమయంలో, లయం తరువాత కూడా నిత్యమై, స్వయంప్రకాశకమై, జన్మ-మరణాలకు అతీతమై వెలిగే అఖండ చైతన్యమే పరమాత్మ. ఆయనకు ఏ లోటూ లేదు, ఏ కోరికా లేదు.',
    descEn:
      'The immutable, beginningless, and endless Supreme Consciousness. All-pervading, ever-blissful, and self-luminous.',
    keyScripture: 'ఉపనిషత్తులు: "సత్యం జ్ఞానమనంతం బ్రహ్మ"',
    connectedTo: ['node-sankalpam'],
    icon: '☀️',
    color: '#D4AF37',
  },
  {
    id: 'node-sankalpam',
    order: 2,
    titleTe: 'దైవ సంకల్పం',
    titleEn: 'Divine Will (Ikshanam)',
    category: 'divine_origin',
    subtitleTe: '"ఏకోహం బహుస్యామ్" – లీలా సంకల్పం',
    subtitleEn: 'The Primal Impulse for Multiplicity',
    descTe:
      'నేను ఒక్కడినే అనేక రూపాలుగా మారి నా ఆనందాన్ని వైవిధ్యంగా అనుభవింతును గాక అని పరమాత్మ చేసిన ప్రథమ దివ్య సంకల్పం. ఇది నిర్గుణం నుండి సగుణ సృష్టి వైపు మొదటి అడుగు.',
    descEn:
      'The transcendent will: "I am One; may I become many." The divine impulse giving rise to the cosmic manifestation.',
    keyScripture: 'ఛాందోగ్యోపనిషత్ 6.2.3: "తదైక్షత బహు స్యాం ప్రజాయేయేతి"',
    connectedTo: ['node-prakriti'],
    icon: '✨',
    color: '#F59E0B',
  },
  {
    id: 'node-prakriti',
    order: 3,
    titleTe: 'ప్రకృతి (మాయ)',
    titleEn: 'Prakriti / Maya (Primordial Nature)',
    category: 'cosmic_laws',
    subtitleTe: 'నిద్రాణమైన మూలశక్తి మేల్కొలుపు',
    subtitleEn: 'The Cosmic Matrix Awakened',
    descTe:
      'ప్రళయంలో నిద్రాణంగా ఉన్న ప్రకృతి, సర్వేశ్వరుని దివ్య సంకల్ప మరియు సాన్నిధ్య ప్రభావం చేత స్పందించి సృష్టి నిర్మాణానికి సిద్ధమవుతుంది. భగవంతుని అధ్యక్షతన మాత్రమే ఇది పనిచేస్తుంది.',
    descEn:
      'Primordial cosmic matrix stirred into activity under the divine superintendence of the Supreme.',
    keyScripture: 'భగవద్గీత 9.10: "మయాధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్"',
    connectedTo: ['node-kalam-gunas'],
    icon: '🌌',
    color: '#3B82F6',
  },
  {
    id: 'node-kalam-gunas',
    order: 4,
    titleTe: 'కాలం + త్రిగుణాలు',
    titleEn: 'Kala (Time) & Trigunas (3 Attributes)',
    category: 'cosmic_laws',
    subtitleTe: 'పరివర్తన శక్తి & సత్వ-రజో-తమో గుణాలు',
    subtitleEn: 'Cosmic Catalyst of Change and Energetic Polarities',
    descTe:
      'కాలం పరివర్తనకు క్రమాన్ని నిర్దేశిస్తే, త్రిగుణాలైన సత్వ, రజో, తమో గుణాలు పదార్థ, మానసిక వికారాలకు రూపకల్పన చేస్తాయి. సమతుల్యత వీడిన గుణాలు సృష్టికి రంగులద్దుతాయి.',
    descEn:
      'Time acts as the dynamic catalyst, while the threefold Gunas weave the fabric of mental and physical diversities.',
    keyScripture: 'శ్రీమద్భాగవతం 3.26.16: కాల తత్వ విచారణ',
    connectedTo: ['node-svabhavam'],
    icon: '⏳',
    color: '#8B5CF6',
  },
  {
    id: 'node-svabhavam',
    order: 5,
    titleTe: 'స్వభావం',
    titleEn: 'Svabhava (Inherent Nature)',
    category: 'cosmic_laws',
    subtitleTe: 'రాజాజ్ఞ ప్రకారం నడిచే ప్రాకృతిక వ్యవస్థ',
    subtitleEn: 'Embedded Cosmic Laws and Temperaments',
    descTe:
      'పంచభూతాల ప్రత్యేక గుణాలు మరియు పూర్వకర్మల ఆధారంగా ప్రతి జీవికి ఏర్పడే సహజ అంతర్గత ధర్మమే స్వభావం. అగ్నికి కాల్చడం, నీటికి ప్రవహించడం లాంటివి స్వభావ సిద్ధాలు.',
    descEn:
      'The intrinsic nature imprinted into elements and souls, directing their spontaneous behaviors and duties.',
    keyScripture: 'గీత 18.40-41 & భాగవతం 3.26.18',
    connectedTo: ['node-srushti'],
    icon: '🔥',
    color: '#EF4444',
  },
  {
    id: 'node-srushti',
    order: 6,
    titleTe: 'సృష్టి ఆవిర్భావం',
    titleEn: 'Manifested Cosmos (Srushti)',
    category: 'manifestation',
    subtitleTe: 'పంచభూతాలు, బ్రహ్మాండాలు, నవగ్రహాలు',
    subtitleEn: 'The Physical and Subtle Multiverse',
    descTe:
      'ఆకాశం, వాయువు, అగ్ని, జలం, పృథ్వి అనే పంచభూతాలు కలిసి సమస్త భువనాలు, లోకాలు, శరీరాలు మరియు నవగ్రహ మండలాలను నిర్మించాయి. ఇదంతా జీవుల కర్మక్షేత్రం.',
    descEn:
      'The multi-dimensional cosmos comprising the gross and subtle elements, celestial bodies, and planetary realms.',
    keyScripture: 'శ్రీమద్భాగవతం ద్వితీయ స్కంధం: సృష్టి క్రమ వర్ణన',
    connectedTo: ['node-jeevulu-karmalu'],
    icon: '🪐',
    color: '#10B981',
  },
  {
    id: 'node-jeevulu-karmalu',
    order: 7,
    titleTe: 'జీవులు + కర్మలు',
    titleEn: 'Souls & Karma Cycle (Jivas & Karmas)',
    category: 'manifestation',
    subtitleTe: '84 లక్షల జీవరాశులు – సంసార చక్రం',
    subtitleEn: 'Embodied Souls and Transmigration Cycle',
    descTe:
      'దేహాలలో ప్రవేశించిన జీవాత్మలు అజ్ఞాన మాయతో తమను తాము శరీరంగా భావించి, గుణాల ప్రేరణతో కర్మలు చేస్తూ, పుణ్యపాప సుఖదుఃఖాల చక్రంలో జనన-మరణాలను పొందుతాయి.',
    descEn:
      'Souls entering bodies, veiled by Maya, performing actions under the influence of the Gunas and cycling through birth and death.',
    keyScripture: 'భగవద్గీత 2.22 & 15.7-9',
    connectedTo: ['node-atma-vichara'],
    icon: '🔄',
    color: '#6366F1',
  },
  {
    id: 'node-atma-vichara',
    order: 8,
    titleTe: 'ఆత్మ విచారణ',
    titleEn: 'Self-Inquiry (Atma Vichara)',
    category: 'soul_journey',
    subtitleTe: '"నేను ఎవరు?" – ఆధ్యాత్మిక మేల్కొలుపు',
    subtitleEn: 'Spiritual Awakening and Discernment',
    descTe:
      'కష్టసుఖాల అశాశ్వతత్వాన్ని గమనించిన వివేకి, "నేను ఈ నశించే శరీరమా? కదిలే మనస్సునా? లేక శాశ్వత ఆత్మనా?" అని ఆత్మ విచారణను ప్రారంభిస్తాడు. ఇదే మోక్షమార్గ ప్రథమ ద్వారం.',
    descEn:
      'The awakening of spiritual discrimination questioning the transient nature of the world and seeking the eternal witness within.',
    keyScripture: 'బృహదారణ్యకోపనిషత్: "ఆత్మా వా అరే ద్రష్టవ్యః..."',
    connectedTo: ['node-four-paths'],
    icon: '🧭',
    color: '#EC4899',
  },
  {
    id: 'node-four-paths',
    order: 9,
    titleTe: 'మోక్షానికి నాలుగు మార్గాలు',
    titleEn: 'Four Paths to Liberation',
    category: 'soul_journey',
    subtitleTe: 'జ్ఞానం – భక్తి – నిష్కామ కర్మ – రాజయోగం',
    subtitleEn: 'Jnana, Bhakti, Karma, and Raja Yoga',
    descTe:
      'జీవుడు తన రుచి, సంస్కార, స్వభావాలకు అనుగుణంగా ఏదో ఒక మార్గాన్ని లేదా సమన్వయ మార్గాన్ని ఎంచుకుని సాధన చేస్తాడు. జ్ఞానాగ్ని ద్వారా సమస్త కర్మలు భస్మమవుతాయి.',
    descEn:
      'The four authenticated pathways customized to human temperaments for transcending the ego and burning karmic bondage.',
    keyScripture: 'భగవద్గీత సమగ్ర యోగ సమన్వయం',
    connectedTo: ['node-moksha'],
    icon: '🛤️',
    color: '#06B6D4',
  },
  {
    id: 'node-moksha',
    order: 10,
    titleTe: 'మోక్షం (పరమ పదం)',
    titleEn: 'Moksha (Supreme Liberation)',
    category: 'liberation',
    subtitleTe: 'పునర్జన్మ రాహిత్యం – పరమాత్మతో ఏకత్వం',
    subtitleEn: 'Freedom from Rebirth & Supreme Beatitude',
    descTe:
      'సకల కర్మల క్షయం జరిగి, అజ్ఞాన పరదా తొలగి, జీవాత్మ పరమాత్మలో సంపూర్ణంగా లీనమైపోవడం. పునరావృత్తి లేని శాశ్వత సచ్చిదానంద స్థితియే మోక్షం. సృష్టి లీలకు పరమ లక్ష్యం.',
    descEn:
      'The ultimate culmination where the individual drops all illusions, merges back into Paramatma, and abides in non-dual, infinite peace.',
    keyScripture: 'భగవద్గీత 8.16 & 15.6: "న తద్భాసయతే సూర్యో... యద్గత్వా న నివర్తన్తే"',
    connectedTo: [],
    icon: '🕉️',
    color: '#D4AF37',
  },
];

// ==========================================
// 11. VEDANTIC GLOSSARY
// ==========================================
export const VEDANTIC_GLOSSARY: VedanticGlossaryItem[] = [
  {
    id: 'glossary-paramatma',
    termTe: 'పరమాత్మ (Paramatma)',
    termEn: 'The Supreme Self / Absolute Divine',
    sanskritRoot: 'परम + आत्मा',
    shortDefTe: 'సృష్టికి మూలమైన అఖండ, సర్వవ్యాపక, నిర్గుణ-సగుణ పరబ్రహ్మ తత్వం.',
    shortDefEn: 'The Transcendent, All-Pervading Supreme Consciousness beyond birth and decay.',
    detailedContextTe:
      'సృష్టికి పూర్వం, స్థితిలో, లయం తరువాత కూడా ఏకైక నిత్య సత్యంగా వెలిగే అఖండ చైతన్య స్వరూపం. ఆయనకు ఎటువంటి కొరత, కోరికలు లేవు.',
    scriptureCategory: 'వేదాంతం',
  },
  {
    id: 'glossary-ikshanam',
    termTe: 'ఈక్షణం / సంకల్పం (Ikshanam / Sankalpam)',
    termEn: 'Divine Primal Glance / Will',
    sanskritRoot: 'ईक्ष् (చూచుట, సంకల్పించుట)',
    shortDefTe: 'నిర్గుణ పరమాత్మ సృష్టిని ఆరంభించడానికి చేసిన ప్రథమ దివ్య సంకల్పం ("ఏకోహం బహుస్యామ్").',
    shortDefEn: 'The primordial conscious glance and will of the Supreme that stirs dormant Nature into creation.',
    detailedContextTe:
      'శూన్యం నుండి కాక, పరమాత్మ తన దివ్య సంకల్పం చేతనే ప్రకృతిలో ప్రాథమిక స్పందనను, కాలాన్ని మేల్కొలిపాడు. ఉపనిషత్తులలో "తదైక్షత" అని వర్ణించబడింది.',
    scriptureCategory: 'ఉపనిషత్తులు',
  },
  {
    id: 'glossary-prakriti',
    termTe: 'ప్రకృతి / మాయ (Prakriti / Maya)',
    termEn: 'Primordial Nature / Divine Energy Matrix',
    sanskritRoot: 'प्र + कृ (ముందుకు నడుపునది)',
    shortDefTe: 'సమస్త భౌతిక, సూక్ష్మ జగత్తును నిర్మించే త్రిగుణాత్మకమైన భగవంతుని అద్భుత శక్తి.',
    shortDefEn: 'The primordial energetic womb and matrix composed of the three Gunas, functioning under God’s will.',
    detailedContextTe:
      'ప్రకృతి జడమైనది; దానికి స్వయంగా సృష్టించే చేతన లేదు. గీత 9.10 ప్రకారం పరమాత్మ అధ్యక్షతన మాత్రమే ప్రకృతి చరాచర సృష్టిని కంటుంది.',
    scriptureCategory: 'భగవద్గీత',
  },
  {
    id: 'glossary-kalam',
    termTe: 'కాలం (Kala)',
    termEn: 'Cosmic Time / Divine Chronology',
    sanskritRoot: 'कलनात् कालः (లెక్కించునది, పరివర్తించునది)',
    shortDefTe: 'సృష్టిలో మార్పుకు, పరిణామానికి, కర్మఫలాల పక్వతకు కారణమైన భగవత్ శక్తి.',
    shortDefEn: 'The dynamic aspect of God that measures sequence, ripens karmas, and brings about manifestation and dissolution.',
    detailedContextTe:
      'కాలం కేవలం గడియారం కాదు; భాగవతంలో కపిల మహర్షి చెప్పినట్లు నిర్విశేష ప్రకృతిలో చలనాన్ని పుట్టించి కర్మలను అనుభవంలోకి తెచ్చే దైవ శక్తి.',
    scriptureCategory: 'భాగవతం',
  },
  {
    id: 'glossary-svabhavam',
    termTe: 'స్వభావం (Svabhava)',
    termEn: 'Inherent Nature / Intrinsic Constitution',
    sanskritRoot: 'स्व + भाव (స్వకీయ స్థితి)',
    shortDefTe: 'పూర్వకర్మల ఆధారంగా ప్రతి జీవికి, ప్రతి మూలకానికి ఏర్పడే సహజ అంతర్గత ధర్మం.',
    shortDefEn: 'The inborn psychological and physical constitution rooted in past karmas; elemental laws of nature.',
    detailedContextTe:
      'అగ్నికి కాల్చడం, నీటికి ప్రవహించడం స్వభావం. అలాగే జీవుడు తన పూర్వ జన్మల కర్మల ద్వారా ఏర్పడిన గుణ స్వభావం ప్రకారమే ప్రాపంచిక కార్యాలలో ప్రవర్తిస్తాడు.',
    scriptureCategory: 'సాంఖ్యశాస్త్రం',
  },
  {
    id: 'glossary-leela',
    termTe: 'లీల / లీలాకైవల్యమ్ (Leela)',
    termEn: 'Divine Cosmic Sport',
    sanskritRoot: 'లీలా (ఆట, విలాసం)',
    shortDefTe: 'ఏ లాభాపేక్షా లేకుండా కేవలం పరమానంద ప్రకటనగా పరమాత్మ చేసే జగద్రచన.',
    shortDefEn: 'The effortless, spontaneous play of the Divine, manifesting universes out of sheer unconditioned bliss.',
    detailedContextTe:
      'బ్రహ్మసూత్రం "లోకవత్తు లీలాకైవల్యమ్" ప్రకారం భగవంతునికి సృష్టి వల్ల కలిగే కొత్త లాభం కానీ నష్టం కానీ లేదు; ఇది ఆయన నిరతిశయానంద విలాసం.',
    scriptureCategory: 'వేదాంతం',
  },
  {
    id: 'glossary-sanchita',
    termTe: 'సంచిత కర్మ (Sanchita Karma)',
    termEn: 'Accumulated Latent Karma',
    sanskritRoot: 'సంచిత (పోగుచేయబడినది)',
    shortDefTe: 'కోట్లాది జన్మల నుండి నిల్వ ఉన్న సమస్త పుణ్య-పాప కర్మల మహా భాండాగారం.',
    shortDefEn: 'The total storehouse of all unripened past actions accumulated across endless lifetimes.',
    detailedContextTe:
      'ప్రళయంలో కూడా నశించకుండా పరమాత్మలో దాగి ఉండే కర్మల నిల్వ. జ్ఞానాగ్ని చేత మాత్రమే సంచిత కర్మ సంపూర్ణంగా భస్మమవుతుంది.',
    scriptureCategory: 'వేదాంతం',
  },
  {
    id: 'glossary-prarabdha',
    termTe: 'ప్రారబ్ద కర్మ (Prarabdha Karma)',
    termEn: 'Allotted Fated Karma for Current Life',
    sanskritRoot: 'ప్ర + ఆరబ్ధ (ప్రారంభమైనది)',
    shortDefTe: 'సంచితం నుండి ప్రస్తుత జన్మలో అనుభవించడానికై పక్వానికి వచ్చిన కర్మ భాగం.',
    shortDefEn: 'The specific portion of past karma that has begun to bear fruit in this current incarnation.',
    detailedContextTe:
      'ధనుస్సు నుండి వదిలిన బాణం వంటిది. ఇది శరీరం ఉన్నంతవరకు అనుభవం ద్వారా మాత్రమే తీరుతుంది; అయితే జ్ఞాన సాధన వల్ల దీని బాధ తీవ్రత నశిస్తుంది.',
    scriptureCategory: 'వేదాంతం',
  },
  {
    id: 'glossary-agami',
    termTe: 'ఆగామి కర్మ (Agami / Kriyamana Karma)',
    termEn: 'Present Actions Generating Future Karma',
    sanskritRoot: 'ఆగామి (రాబోవునది)',
    shortDefTe: 'ప్రస్తుత జన్మలో మానవుడు స్వేచ్ఛా సంకల్పంతో చేసే పనుల వల్ల భవిష్యత్తు కోసం తయారయ్యే నూతన కర్మ.',
    shortDefEn: 'Fresh actions performed in the present life that generate future karmic consequences.',
    detailedContextTe:
      'నిష్కామ కర్మ మరియు భగవదర్పణ బుద్ధి ద్వారా ఆగామి కర్మలను అంటకుండా చేసుకోవచ్చు (తామరాకుపై నీటిబొట్టు వలె).',
    scriptureCategory: 'భగవద్గీత',
  },
  {
    id: 'glossary-nishkama',
    termTe: 'నిష్కామ కర్మ (Nishkama Karma)',
    termEn: 'Selfless Action Without Attachment',
    sanskritRoot: 'నిః + కామ (కోరిక లేని)',
    shortDefTe: 'ఫలితంపై స్వార్థ ఆశ లేకుండా, ఈశ్వరార్పణ భావంతో కర్తవ్యాన్ని నిర్వహించడం.',
    shortDefEn: 'Performing duties with dedication and skill, completely detached from selfish longing for outcomes.',
    detailedContextTe:
      'గీతాచార్యుని ప్రధాన సందేశం: "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన". ఈ సాధన ద్వారా అంతఃకరణ శుద్ధి కలిగి జ్ఞానోదయం సిద్ధిస్తుంది.',
    scriptureCategory: 'భగవద్గీత',
  },
  {
    id: 'glossary-sthitaprajna',
    termTe: 'స్థితప్రజ్ఞుడు (Sthitaprajna)',
    termEn: 'One of Unshakable Wisdom and Equanimity',
    sanskritRoot: 'స్థిత + ప్రజ్ఞ (స్థిరమైన బుద్ధి)',
    shortDefTe: 'సుఖాలలో ఉప్పొంగక, దుఃఖాలలో కుంగిపోక, సర్వదా ఆత్మానందంలో స్థిరపడిన మహాత్ముడు.',
    shortDefEn: 'A sage whose intellect is firmly anchored in the Self, untroubled by sorrow and unattached to pleasure.',
    detailedContextTe:
      'గీత 2వ అధ్యాయంలో వర్ణించబడిన ఆదర్శ ఆధ్యాత్మిక స్థితి. తాబేలు తన అవయవాలను లోపలికి లాక్కున్నట్లు ఇంద్రియాలను నియంత్రించేవాడు.',
    scriptureCategory: 'భగవద్గీత',
  },
  {
    id: 'glossary-sakshi',
    termTe: 'సాక్షి భావం (Sakshi Bhava)',
    termEn: 'Witness Consciousness',
    sanskritRoot: 'సాక్షిన్ (ప్రత్యక్షంగా చూచువాడు)',
    shortDefTe: 'శరీర, మనో, బుద్ధి వికారాలను వాటికి అంటకుండా నిశ్శబ్దంగా గమనించే శుద్ధ ఆత్మ స్థితి.',
    shortDefEn: 'The meditative stance of detached awareness observing the mind, body, and emotions as an untouched witness.',
    detailedContextTe:
      'ఒకే చెట్టుపై ఉన్న రెండు పక్షుల ఉపనిషత్ రూపకం: ఒక పక్షి పండ్లను తింటూ సుఖదుఃఖాలు పొందుతుంటే, రెండవ పక్షి కేవలం సాక్షిగా ప్రశాంతంగా చూస్తూ ఉంటుంది.',
    scriptureCategory: 'ఉపనిషత్తులు',
  },
  {
    id: 'glossary-moksha',
    termTe: 'మోక్షము / ముక్తి (Moksha / Mukti)',
    termEn: 'Supreme Liberation / Final Emancipation',
    sanskritRoot: 'ముచ్ (విముక్తి పొందుట)',
    shortDefTe: 'జనన-మరణ సంసార చక్రం నుండి శాశ్వత విడుదల మరియు పరమాత్మతో నిరంతర ఏకత్వం.',
    shortDefEn: 'Ultimate liberation from the cycle of birth and death, returning to eternal identity with Brahman.',
    detailedContextTe:
      'మానవ జీవిత పరమ పురుషార్థం. సమస్త అజ్ఞానం, కర్మ బంధాలు తొలగిపోవడమే మోక్షం. నది సముద్రంలో లీనమైనట్లు ఆత్మ పరమాత్మతో సంగమిస్తుంది.',
    scriptureCategory: 'వేదాంతం',
  },
  {
    id: 'glossary-samadhi',
    termTe: 'సమాధి (Samadhi)',
    termEn: 'Superconscious Absorption / Total Trance',
    sanskritRoot: 'సమ్ + ఆ + ధా (సమగ్రంగా స్థిరపరుచుట)',
    shortDefTe: 'ధ్యానం చేసేవాడు, ధ్యాన వస్తువు ఒకటైపోయే అష్టాంగ యోగపు అంతిమ ఉన్నత స్థితి.',
    shortDefEn: 'The highest state of meditative absorption where the meditator and the meditated merge into unitary consciousness.',
    detailedContextTe:
      'సవికల్ప సమాధి మరియు నిర్వికల్ప సమాధి అని రెండు రకాలు. నిర్వికల్ప సమాధిలో ద్వైత భావన పూర్తిగా సమసిపోయి శుద్ధ బ్రహ్మానుభవం కలుగుతుంది.',
    scriptureCategory: 'సాంఖ్యశాస్త్రం',
  },
  {
    id: 'glossary-saranagati',
    termTe: 'శరణాగతి / ప్రపత్తి (Saranagati)',
    termEn: 'Total Divine Surrender',
    sanskritRoot: 'శరణమ్ + ఆగతి (రక్షణ కోరి చేరుట)',
    shortDefTe: 'తమ అహాన్ని, సర్వభారాలను భగవంతుని పాదాల వద్ద సమర్పించి ఆయనపై సంపూర్ణ భరోసా ఉంచడం.',
    shortDefEn: 'Complete, unreserved self-surrender to the grace and will of the Supreme Divine.',
    detailedContextTe:
      'భగవద్గీత చరమ శ్లోకం (18.66): "సర్వధర్మాన్ పరిత్యజ్య మామేకం శరణం వ్రజ...". భక్తి మార్గంలో అత్యున్నత సోపానం.',
    scriptureCategory: 'భగవద్గీత',
  },
];

// ==========================================
// 12. SACRED JAPA MANTRAS FOR MEDITATION TRACKER
// ==========================================
export const JAPA_MANTRAS = [
  {
    id: 'om-namo-narayanaya',
    nameTe: 'ఓం నమో నారాయణాయ',
    nameEn: 'Om Namo Narayanaya',
    meaningTe: 'సమస్త విశ్వానికి ఆశ్రయుడైన సర్వేశ్వరునికి నా నమస్కారములు.',
    target: 108,
  },
  {
    id: 'om-namah-shivaya',
    nameTe: 'ఓం నమః శివాయ',
    nameEn: 'Om Namah Shivaya',
    meaningTe: 'మంగళకరుడు, పరమశాంతి స్వరూపుడైన పరమశివునికి ప్రణామాలు.',
    target: 108,
  },
  {
    id: 'hare-krishna',
    nameTe: 'హరే కృష్ణ హరే కృష్ణ కృష్ణ కృష్ణ హరే హరే | హరే రామ హరే రామ రామ రామ హరే హరే',
    nameEn: 'Maha Mantra (Hare Krishna)',
    meaningTe: 'సర్వాకర్షకుడైన పరమాత్మ ప్రేమ నామస్మరణ.',
    target: 108,
  },
  {
    id: 'gayatri-mantra',
    nameTe: 'ఓం భూర్భువః స్వః తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియో యో నః ప్రచోదయాత్',
    nameEn: 'Gayatri Mantra',
    meaningTe: 'దివ్య ప్రకాశ స్వరూపుడైన పరమాత్మ మా బుద్ధిని సత్యమార్గంలో నడుపుగాక.',
    target: 108,
  },
  {
    id: 'ekoham-brahma',
    nameTe: 'అహం బ్రహ్మాస్మి / ఏకోహం బహుస్యామ్',
    nameEn: 'Aham Brahmasmi / Ekoham Bahusyam',
    meaningTe: 'నేను పరబ్రహ్మ స్వరూపుడను – ఆత్మ విచారణ ప్రణవ నాదం.',
    target: 108,
  },
];
