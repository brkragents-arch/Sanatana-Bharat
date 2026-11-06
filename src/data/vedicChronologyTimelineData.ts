// ============================================================================
// VEDIC & ITIHASA CHRONOLOGICAL TIMELINE DATA (వైదిక & ఇతిహాస చారిత్రక కాలరేఖ)
// Source: Vedic-Ramayan Astronomical & Archaeological Research by Dr. P.V. Vartak
// Cross-verified with Rigveda, Taittiriya Samhita, Epics and Archaeological excavations
// ============================================================================

export interface RamayanaTimelineEvent {
  order: number;
  dateBCE: string;
  gregorianDate: string;
  titleTe: string;
  titleEn: string;
  panchangaDetailsTe: string;
  panchangaDetailsEn: string;
  descriptionTe: string;
  descriptionEn: string;
  icon: string;
  imageSrc: string;
  phaseBadgeTe: string;
  phaseBadgeEn: string;
}

export interface RamayanaAstronomicalTimelineData {
  imageSrc: string;
  mantra: string;
  titleTe: string;
  titleEn: string;
  subtitleTe: string;
  subtitleEn: string;
  introTe: string;
  introEn: string;
  events: RamayanaTimelineEvent[];
}

export interface RamaCallerRelation {
  order: number;
  callerEn: string;
  callerTe: string;
  relationshipEn: string;
  relationshipTe: string;
  shlokaWord: string;
  shlokaWordTelugu: string;
  calledName: string;
  calledNameTelugu: string;
  meaningEn: string;
  meaningTe: string;
  spiritualSignificanceTe: string;
  spiritualSignificanceEn: string;
  avatarSrc?: string;
  rowImageSrc?: string;
}

export interface RamaShlokaOriginData {
  shlokaSanskrit: string;
  shlokaTelugu: string;
  shlokaIAST: string;
  shlokaMeaningTe: string;
  shlokaMeaningEn: string;
  titleTe: string;
  titleEn: string;
  subtitleTe: string;
  subtitleEn: string;
  posterImageSrc: string;
  bannerImageSrc?: string;
  callers: RamaCallerRelation[];
  concludingWordTe: string;
  concludingWordEn: string;
  concludingSignificanceTe: string;
  concludingSignificanceEn: string;
}

export interface RamayanaFamilyMember {
  nameEn: string;
  nameTe: string;
  roleEn: string;
  roleTe: string;
  spouseEn?: string;
  spouseTe?: string;
  childrenEn?: string[];
  childrenTe?: string[];
  notesEn?: string;
  notesTe?: string;
  avatarIcon?: string;
}

export interface RamayanaFamilyBranch {
  branchId: string;
  branchTitleEn: string;
  branchTitleTe: string;
  originEn: string;
  originTe: string;
  color: string;
  accentBg: string;
  members: RamayanaFamilyMember[];
}

export interface RamayanaFamilyTreeData {
  imageSrc: string;
  titleTe: string;
  titleEn: string;
  subtitleTe: string;
  subtitleEn: string;
  descriptionTe: string;
  descriptionEn: string;
  branches: RamayanaFamilyBranch[];
}

export interface PreciseTimelineMilestone {
  yearBCE: string;
  yearEn: string;
  yearTe: string;
  eventEn: string;
  eventTe: string;
  detailsEn?: string;
  detailsTe?: string;
  icon: string;
  category: 'veda' | 'buddhism_jainism' | 'epic' | 'invasion_empire' | 'philosophy' | 'law';
}

export interface VedicTimelineEra {
  id: string;
  order: number;
  dateRange: string;
  dateRangeTe: string;
  titleTe: string;
  titleEn: string;
  subtitleTe: string;
  subtitleEn: string;
  badgeTe: string;
  badgeEn: string;
  accentColor: string;
  borderColor: string;
  bgGradient: string;
  icon: string;
  iconImage?: string;
  shortSummaryTe: string;
  shortSummaryEn: string;
  astronomicalDatingTe: string;
  astronomicalDatingEn: string;
  archaeologicalEvidenceTe: string;
  archaeologicalEvidenceEn: string;
  societalNormsTe: string[];
  societalNormsEn: string[];
  keyFiguresTe: string[];
  keyFiguresEn: string[];
  milestoneEventsTe: string[];
  milestoneEventsEn: string[];
  scripturalReferencesTe: string[];
  scripturalReferencesEn: string[];
  sourceReference: string;
  ramayanaAstronomicalTimeline?: RamayanaAstronomicalTimelineData;
  ramaShlokaOrigin?: RamaShlokaOriginData;
  ramayanaFamilyTree?: RamayanaFamilyTreeData;
  timelineMilestones?: PreciseTimelineMilestone[];
}

// ----------------------------------------------------------------------------
// RAMAYANA ASTRONOMICAL TIMELINE (12,240 BCE to 12,208 BCE)
// Verified through Valmiki Ramayana planetary almanac calculations
// ----------------------------------------------------------------------------
export const RAMAYANA_ASTRONOMICAL_TIMELINE: RamayanaAstronomicalTimelineData = {
  imageSrc: './images/indian_history/ramayana_astronomical_timeline.jpg',
  mantra: '!! तन्नो रामः प्रचोदयात् !!',
  titleTe: 'వాల్మీకి రామాయణ ఖగోళ కాలరేఖ (క్రీ.పూ. 12,240 – 12,208)',
  titleEn: 'Valmiki Ramayana Astronomical Timeline (12,240 BCE – 12,208 BCE)',
  subtitleTe: 'శ్రీరామ జననం నుండి పట్టాభిషేకం వరకు ఖగోళ తిథి, నక్షత్ర, మాస గణనల ఆధారిత కాలక్రమం',
  subtitleEn: 'Chronological timeline from the birth of Lord Rama to his coronation established through planetary positions',
  introTe: 'వాల్మీకి రామాయణంలో వివరించబడిన ఖగోళ గ్రహ స్థితులు, ఋతువులు, తిథులు మరియు నక్షత్రాలను ఆధునిక ప్లానిటోరియం సాఫ్ట్‌వేర్ ద్వారా విశ్లేషించగా స్థిరపడిన నిర్దిష్ట కాలరేఖ (క్రీ.పూ. 12240 నుండి 12208 వరకు).',
  introEn: 'Comprehensive chronological timeline of the Ramayana established through computer-simulated planetary astronomy based on specific Tithis, Nakshatras, and planetary alignments recorded by Sage Valmiki.',
  events: [
    {
      order: 1,
      dateBCE: '12,240 BCE',
      gregorianDate: '29th November, 12240 BCE',
      titleTe: 'శ్రీరామచంద్రుని దివ్య జన్మ దినం',
      titleEn: 'Birth of Shri Rāma',
      panchangaDetailsTe: 'ఋతువు: శరత్ • మాసం: చైత్ర • పక్షం: శుక్ల • తిథి: నవమి • నక్షత్రం: పునర్వసు',
      panchangaDetailsEn: 'Ritu: Sharada • Māsa: Chaitra • Paksha: Shukla • Tithi: Navami • Nakshatra: Punarvasu',
      descriptionTe: 'అయోధ్యా నగరంలో కౌసల్యా దశరథులకు శ్రీరాముని దివ్య ఆవిర్భావం. కర్కాటక లగ్నంలో ఐదు ప్రధాన గ్రహాలు ఉచ్ఛస్థితిలో ఉండగా, పునర్వసు నక్షత్రంలో చైత్ర శుక్ల నవమినాడు భగవానుని జననం.',
      descriptionEn: 'Divine birth of Lord Sri Rama in Ayodhya to Queen Kausalya and King Dasharatha. Five heavenly bodies stood exalted with Cancer (Karka) ascendant and Moon in Punarvasu nakshatra.',
      icon: '🏹',
      imageSrc: './images/indian_history/ramayana_crops/ev1_birth_rama.png',
      phaseBadgeTe: 'దివ్య జననం',
      phaseBadgeEn: 'Divine Birth'
    },
    {
      order: 2,
      dateBCE: '12,224 BCE',
      gregorianDate: 'December 12224 BCE',
      titleTe: 'విశ్వామిత్ర మహర్షి అయోధ్య రాక',
      titleEn: 'Rishi Vishvamitra at Ayodhya',
      panchangaDetailsTe: 'దశరథ మహారాజు రాజసభకు విశ్వామిత్రుని ఆగమనం',
      panchangaDetailsEn: 'Rishi Vishvamitra arrives in Dasharatha\'s Court',
      descriptionTe: 'విశ్వామిత్ర మహర్షి దశరథుని కొలువుకు వచ్చి తన యజ్ఞాన్ని రాక్షసుల నుండి కాపాడేందుకు శ్రీరామ-లక్ష్మణులను కోరడం; తాటక సంహారము మరియు సిద్ధాశ్రమ యాగ సంరక్షణ.',
      descriptionEn: 'Sage Vishvamitra arrives at King Dasharatha\'s court in Ayodhya, seeking young Rama and Lakshmana to protect his sacred Vedic yajna from demonic desecration and defeat Tataka.',
      icon: '🧘',
      imageSrc: './images/indian_history/ramayana_crops/ev2_vishvamitra.png',
      phaseBadgeTe: 'యాగ సంరక్షణ',
      phaseBadgeEn: 'Yajna Guard'
    },
    {
      order: 3,
      dateBCE: '12,223 BCE',
      gregorianDate: '4/5th January, 12223 BCE',
      titleTe: 'శ్రీ సీతారాముల కల్యాణ మహోత్సవం',
      titleEn: 'Marriage of Rāma & Sītā',
      panchangaDetailsTe: 'మాసం: వైశాఖ • పక్షం: శుక్ల • తిథి: ఏకాదశి/ద్వాదశి • నక్షత్రం: ఉత్తర ఫాల్గుణి',
      panchangaDetailsEn: 'Māsa: Vaishākha • Paksha: Shukla • Tithi: Ekadashi/Dvadashi • Nakshatra: Uttara Phālguni',
      descriptionTe: 'మిథిలలో శివధనుర్భంగం అనంతరం జనక మహారాజు సమక్షంలో ఉత్తర ఫాల్గుణీ నక్షత్రంలో సీతారాముల కల్యాణం; భార్గవ రాముని (పరశురాముని) విష్ణుధనుః పరీక్ష.',
      descriptionEn: 'Breaking of Lord Shiva\'s Pinaka bow in Mithila, followed by the celestial wedding of Sri Rama and Sita Devi under the auspices of Uttara Phalguni Nakshatra.',
      icon: '💍',
      imageSrc: './images/indian_history/ramayana_crops/ev3_marriage.png',
      phaseBadgeTe: 'సీతారామ కల్యాణం',
      phaseBadgeEn: 'Sacred Wedding'
    },
    {
      order: 4,
      dateBCE: '12,223 BCE',
      gregorianDate: '21 December, 12223 BCE',
      titleTe: 'శ్రీరాముని వనవాస గమనం',
      titleEn: 'Rama Left for Vanavasa',
      panchangaDetailsTe: 'మాసం: చైత్ర • పక్షం: శుక్ల • తిథి: నవమి • నక్షత్రం: పునర్వసు',
      panchangaDetailsEn: 'Māsa: Chaitra • Paksha: Shukla • Tithi: Navami • Nakshatra: Punarvasu',
      descriptionTe: 'కైకేయి కోరిన వరాల ప్రకారం పితృవాక్య పరిపాలనకై శ్రీరాముడు సీతాదేవి, లక్ష్మణులతో కలిసి అయోధ్యను విడిచి 14 సంవత్సరాల అరణ్యవాస ప్రయాణం ప్రారంభించడం.',
      descriptionEn: 'To honor King Dasharatha\'s pledge to Kaikeyi, Sri Rama embarks on the 14-year forest exile accompanied by Sita Devi and Lakshmana on Chaitra Shukla Navami.',
      icon: '🌲',
      imageSrc: './images/indian_history/ramayana_crops/ev4_vanavasa.png',
      phaseBadgeTe: 'వనవాస ప్రస్థానం',
      phaseBadgeEn: 'Forest Exile'
    },
    {
      order: 5,
      dateBCE: '12,222 BCE',
      gregorianDate: '10 April, 12222 BCE',
      titleTe: 'చిత్రకూటం వద్ద భరతుని కలయిక & పాదుకా పట్టాభిషేకం',
      titleEn: 'Bharata Meets Rāma',
      panchangaDetailsTe: 'ఆషాఢ మాస అమావాస్య దినం (Amāvasya day of Ashadha month)',
      panchangaDetailsEn: 'Amāvasya day of Ashadha month',
      descriptionTe: 'చిత్రకూట పర్వతం వద్ద భరతుడు శ్రీరాముని దర్శించుకోవడం; అయోధ్యకు తిరిగి రావాలని ప్రార్థించినా, పితృవాక్య గౌరవార్థం శ్రీరాముడు పాదుకలను ప్రసాదించగా భరతుడు నందిగ్రామం నుండి పాలన చేయడం.',
      descriptionEn: 'Bharata meets Rama at Chitrakoota on Ashadha Amavasya. Bharata reverently receives Rama\'s holy Padukas (sandals) and takes a vow to rule as a regent from Nandigram.',
      icon: '🤝',
      imageSrc: './images/indian_history/ramayana_crops/ev5_bharata_meets.png',
      phaseBadgeTe: 'పాదుకా పట్టాభిషేకం',
      phaseBadgeEn: 'Paduka Reign'
    },
    {
      order: 6,
      dateBCE: '12,210 BCE',
      gregorianDate: '22 September, 12210 BCE',
      titleTe: 'వాలి వధ & సుగ్రీవ పట్టాభిషేకం',
      titleEn: 'Rāma Kills Vāli',
      panchangaDetailsTe: 'గ్రీష్మ ఋతువు ముగింపు • వర్ష ఋతువు ఆరంభ కాలం',
      panchangaDetailsEn: 'End of Grishma season • Beginning of Varsha season',
      descriptionTe: 'కిష్కింధలో సుగ్రీవునికి అభయమిచ్చి అధర్మపరుడైన వాలిని సంహరించడం; సుగ్రీవునికి కిష్కింధా రాజ్యాభిషేకం మరియు సీతాన్వేషణకై వానర సైన్యాన్ని సన్నద్ధం చేయడం.',
      descriptionEn: 'Slaying of Vali at Kishkindha and coronation of Sugriva at the transition from summer into the monsoon season, preparing the Vanara search expeditions for Devi Sita.',
      icon: '🎯',
      imageSrc: './images/indian_history/ramayana_crops/ev6_kills_vali.png',
      phaseBadgeTe: 'కిష్కింధ సంధి',
      phaseBadgeEn: 'Kishkindha Alliance'
    },
    {
      order: 7,
      dateBCE: '12,209 BCE',
      gregorianDate: '30 August 12209 BCE',
      titleTe: 'లంక నుండి హనుమంతుని పునరాగమనం',
      titleEn: 'Hanumāna Returns from Lanka',
      panchangaDetailsTe: 'లంకలో 3 రోజులు గడిపిన అనంతరం హనుమంతుని తిరుగు ప్రయాణం',
      panchangaDetailsEn: 'Hanumana left Lanka after spending three days there',
      descriptionTe: 'సముద్ర లంఘనం, అశోకవనంలో సీతా దర్శనం, చూడామణి స్వీకరణ మరియు లంకాదహనం అనంతరం 3 రోజులకు తిరిగి వచ్చి "చూచితిని సీతను" అని శ్రీరామునికి నివేదించడం.',
      descriptionEn: 'Hanuman returns victorious from Lanka after crossing the southern ocean and discovering Mother Sita in the Ashoka Vatika, delivering her Choodamani to Sri Rama.',
      icon: '🐒',
      imageSrc: './images/indian_history/ramayana_crops/ev7_hanuman.png',
      phaseBadgeTe: 'సుందరకాండ విజయం',
      phaseBadgeEn: 'Sundarakanda Triumph'
    },
    {
      order: 8,
      dateBCE: '12,209 BCE',
      gregorianDate: '25 December 12209 BCE',
      titleTe: 'లంకా మహా సంగ్రామం - ప్రథమ దినం',
      titleEn: '1st Day of Lanka War',
      panchangaDetailsTe: 'యుద్ధ ప్రారంభ దినం • సుమారు పక్షం రోజుల (14 రోజులు) భీకర పోరాటం',
      panchangaDetailsEn: 'First day of war • War continued for almost a fortnight',
      descriptionTe: 'సేతు నిర్మాణానంతరం వానర సైన్యం లంకను చేరింది. రావణ సైన్యంతో తుది ధర్మయుద్ధం ప్రారంభమై సుమారు 14 రోజుల పాటు నిరంతరాయంగా సాగింది.',
      descriptionEn: 'Following the construction of the Rama Setu, the epic war against Ravana commences in Lanka, continuing with divine astras for almost a fortnight.',
      icon: '⚔️',
      imageSrc: './images/indian_history/ramayana_crops/ev8_first_day_war.png',
      phaseBadgeTe: 'యుద్ధ ప్రారంభం',
      phaseBadgeEn: 'Battle Commences'
    },
    {
      order: 9,
      dateBCE: '12,208 BCE',
      gregorianDate: '7 January 12208 BCE',
      titleTe: 'రావణ సంహారము & లంకా విజయం',
      titleEn: 'Rāma Kills Rāvana',
      panchangaDetailsTe: 'రావణ అంత్యక్రియలు • సీతారాముల కలయిక • విభీషణ పట్టాభిషేకం • పుష్పక విమాన ప్రయాణం',
      panchangaDetailsEn: 'Final rites of Ravana • Reunion with Devi Sita • Coronation of Vibhishana • Aerial journey via Pushpaka Vimana',
      descriptionTe: 'బ్రహ్మాస్త్రంతో రావణాసురుని సంహారం. రావణుని అంత్యక్రియలు, విభీషణ పట్టాభిషేకం, సీతాదేవి అగ్నిపరీక్షల అనంతరం పుష్పక విమానంలో అయోధ్యకు తిరుగు ప్రయాణం.',
      descriptionEn: 'Sri Rama vanquishes Ravana using the divine Brahmastra. Vibhishana is crowned king of Lanka, Sita Devi reunites with Rama, and they board the Pushpaka Vimana for Ayodhya.',
      icon: '🔱',
      imageSrc: './images/indian_history/ramayana_crops/ev9_kills_ravana.png',
      phaseBadgeTe: 'ధర్మ విజయం',
      phaseBadgeEn: 'Victory over Evil'
    },
    {
      order: 10,
      dateBCE: '12,208 BCE',
      gregorianDate: '12 January 12208 BCE',
      titleTe: 'భరద్వాజ మహర్షి ఆశ్రమానికి శ్రీరాముని రాక',
      titleEn: 'Rāma at Rishi Bhāradvāja\'s Āshrama',
      panchangaDetailsTe: '14 సంవత్సరాల అరణ్యవాస ముగింపులో ప్రయాగ సమీపాన ఆశ్రమానికి రాక',
      panchangaDetailsEn: 'Shri Rama along with Devi Sita reached at Rishi Bharadvaja\'s Ashrama',
      descriptionTe: 'పుష్పక విమానంలో ప్రయాణించి ప్రయాగలోని భరద్వాజ ఆశ్రమానికి చేరి మునుల ఆశీస్సులు పొందడం; హనుమంతుని ముందుగా నందిగ్రామానికి పంపి భరతునికి రాకను తెలియజేయడం.',
      descriptionEn: 'Sri Rama and Sita Devi arrive at Sage Bharadvaja\'s hermitage near Prayagraj at the conclusion of 14 years exile, sending Hanuman ahead to inform Bharata.',
      icon: '🔥',
      imageSrc: './images/indian_history/ramayana_crops/ev10_bharadvaja.png',
      phaseBadgeTe: 'అయోధ్య చేరువలో',
      phaseBadgeEn: 'Arrival at Hermitage'
    },
    {
      order: 11,
      dateBCE: '12,208 BCE',
      gregorianDate: '13 January 12208 BCE',
      titleTe: 'శ్రీరామ పట్టాభిషేక మహోత్సవం (రామరాజ్యం)',
      titleEn: 'Shri Rāma\'s Coronation (Pattabhishekam)',
      panchangaDetailsTe: 'అయోధ్యా సింహాసనంపై శ్రీరామ పట్టాభిషేకం • రామరాజ్య పాలన ప్రారంభం',
      panchangaDetailsEn: 'Grand Vedic Coronation of Lord Sri Rama in Ayodhya',
      descriptionTe: 'వసిష్ఠ మహర్షి ఆధ్వర్యంలో సమస్త పుణ్య నదీ జలాలతో శ్రీరామచంద్రుని మహా పట్టాభిషేకం. అఖండ భారతదేశంలో ఆదర్శవంతమైన ధర్మ రాజ్య స్థాపన (రామరాజ్యం).',
      descriptionEn: 'The solemn Vedic Coronation (Pattabhishekam) of Lord Sri Rama in Ayodhya officiated by Sage Vasishta, marking the immortal commencement of Ramarajya.',
      icon: '👑',
      imageSrc: './images/indian_history/ramayana_crops/ev11_coronation.png',
      phaseBadgeTe: 'మహా పట్టాభిషేకం',
      phaseBadgeEn: 'Coronation'
    }
  ]
};

// ----------------------------------------------------------------------------
// RAMA SHLOKA ORIGIN DATA ("రామాయ రామభద్రాయ..." శ్లోక రహస్యం)
// Source: How Sri Rama is called by each one in Treta Yuga
// ----------------------------------------------------------------------------
export const RAMA_SHLOKA_ORIGIN_DATA: RamaShlokaOriginData = {
  shlokaSanskrit: 'रामाय रामभद्राय रामचंद्राय वेधसे ।\nरघुनाथाय नाथाय सीतायाः पतये नमः ॥',
  shlokaTelugu: 'రామాయ రామభద్రాయ రామచంద్రాయ వేధసే ।\nరఘునాథాయ నాథాయ సీతాయాః పతయే నమః ॥',
  shlokaIAST: 'Rāmāya Rāmabhadrāya Rāmachandrāya Vedhase |\nRaghunāthāya Nāthāya Sītāyāḥ Pataye Namaḥ ||',
  titleTe: 'ఎవరు రాముని ఏమని సంబోధించారు? • "రామాయ రామభద్రాయ..." శ్లోక రహస్యం',
  titleEn: 'How Rama is Called by Each One • The Origin of the Divine Shloka',
  subtitleTe: 'దశరథుడు, కౌసల్య, కైకేయి, వసిష్ఠుడు, విశ్వామిత్రాది ఋషులు, సీతమ్మ మరియు జనకుల అమృత సంబోధనల సమ్మేళనం',
  subtitleEn: 'The 7 Divine Invocations by Parents, Preceptors, Sages & Beloved Spouse Concluding in Universal Surrender',
  shlokaMeaningTe: 'రాముడు, రామభద్రుడు, రామచంద్రుడు, వేధసుడు (సృష్టికర్త), రఘునాథుడు, జగన్నాథుడు, సీతాపతి అయిన భగవానునికి నా యొక్క భక్తిపూర్వక నమస్కారములు.',
  shlokaMeaningEn: 'Salutations to Lord Rama, to Ramabhadra the auspicious, to Ramachandra the radiant moon, to the supreme creator (Vedhase), to Raghunatha the dynastic savior, to Natha the beloved master, and to the divine spouse of Sita.',
  posterImageSrc: './images/indian_history/ramaya_ramabhadraya_shloka.jpg',
  bannerImageSrc: './images/indian_history/rama_shloka_crops/shloka_banner.jpg',
  callers: [
    {
      order: 1,
      callerEn: 'Dasaratha',
      callerTe: 'దశరథ మహారాజు',
      relationshipEn: 'Loving Father (King of Ayodhya)',
      relationshipTe: 'ప్రాణసమానుడైన జ్యేష్ఠ కుమారునిగా ప్రేమించిన కన్నతండ్రి',
      shlokaWord: 'रामाय',
      shlokaWordTelugu: 'రామాయ',
      calledName: 'RAMA',
      calledNameTelugu: 'రామ (ఆనందకరుడు)',
      meaningEn: '"Ramayati iti Ramah" — He who delights all beings and fills his father\'s heart with supreme bliss.',
      meaningTe: '"రమయతీతి రామః" — సమస్త జనులను, తండ్రి హృదయాన్ని అమితానందంలో ముంచెత్తే ఆనందస్వరూపుడు.',
      spiritualSignificanceTe: 'దశరథునికి రాముడు కేవలం కొడుకు మాత్రమే కాదు; తన సర్వస్వం, ప్రాణవాదం. అందుకే వాత్సల్యంతో ఎప్పుడూ "రామా!" అని పిలిచేవాడు.',
      spiritualSignificanceEn: 'King Dasharatha cherished Rama as his very breath of life, affectionately addressing Him as "Rama" in boundless paternal love.',
      avatarSrc: './images/indian_history/rama_shloka_crops/dasaratha_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/dasaratha_row.jpg'
    },
    {
      order: 2,
      callerEn: 'Kausalya',
      callerTe: 'కౌసల్యా దేవి',
      relationshipEn: 'Caring Mother (Chief Queen of Ayodhya)',
      relationshipTe: 'నిత్యం సర్వమంగళాలు కలగాలని కాంక్షించిన కన్నతల్లి',
      shlokaWord: 'रामभद्राय',
      shlokaWordTelugu: 'రామభద్రాయ',
      calledName: 'RAMABHADRA',
      calledNameTelugu: 'రామభద్ర (మంగళప్రదాత)',
      meaningEn: '"Bhadram karoti iti Bhadrah" — He who brings all auspiciousness, protection, and blessed welfare.',
      meaningTe: '"భద్రం కరోతీతి భద్రః" — సమస్త శుభాలను, రక్షణను, సకల కల్యాణాలను ప్రసాదించే రక్షణామూర్తి.',
      spiritualSignificanceTe: 'కన్నతల్లి కౌసల్య నిత్యం తన పుత్రునికి సకల శుభాలు, మంగళాలు కలగాలని "రామభద్ర!" అని ఆశీర్వదపూర్వకంగా పిలిచేది.',
      spiritualSignificanceEn: 'Queen Kausalya continuously prayed for her son\'s auspicious protection and happiness, addressing Him lovingly as "Ramabhadra".',
      avatarSrc: './images/indian_history/rama_shloka_crops/kausalya_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/kausalya_row.jpg'
    },
    {
      order: 3,
      callerEn: 'Kaikeyi',
      callerTe: 'కైకేయీ దేవి',
      relationshipEn: 'Stepmother (Queen captivated by His beauty)',
      relationshipTe: 'కౌసల్య కన్నా మిన్నగా రాముని ముఖ వర్చస్సుకు ముగ్ధురాలైన పినతల్లి',
      shlokaWord: 'रामचंद्राय',
      shlokaWordTelugu: 'రామచంద్రాయ',
      calledName: 'RAMACHANDRA',
      calledNameTelugu: 'రామచంద్ర (చంద్రసమాన ఆహ్లాదమూర్తి)',
      meaningEn: 'As soothing, charming, and peaceful as the full moon, dispelling the heat of worldly sorrows.',
      meaningTe: 'పూర్ణచంద్రుని వంటి ఆహ్లాదకరమైన, చల్లని తేజస్సుతో అందరి మనస్సులను రంజింపజేసే పరమ సౌందర్యమూర్తి.',
      spiritualSignificanceTe: 'కైకేయి రాముని చంద్రసమాన ముఖారవిందాన్ని చూసి కౌసల్య కంటే మిన్నగా మురిపెంతో "రామచంద్ర" అని పిలిచింది.',
      spiritualSignificanceEn: 'Kaikeyi was deeply enchanted by Rama\'s cool moon-like charm and gentle radiance, adoringly calling Him "Ramachandra".',
      avatarSrc: './images/indian_history/rama_shloka_crops/kaikeyi_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/kaikeyi_row.jpg'
    },
    {
      order: 4,
      callerEn: 'Vasishta',
      callerTe: 'వసిష్ఠ మహర్షి',
      relationshipEn: 'Royal Kulaguru & Brahmarshi',
      relationshipTe: 'రాముని లీలామానుష రూపం వెనుకనున్న పరబ్రహ్మ తత్త్వాన్ని గుర్తించిన కులగురువు',
      shlokaWord: 'वेधसे',
      shlokaWordTelugu: 'వేధసే',
      calledName: 'VEDASE',
      calledNameTelugu: 'వేధస్ (జగత్ సృష్టికర్త / పరబ్రహ్మ)',
      meaningEn: '"Vidadhati iti Vedhah" — The Supreme Cosmic Creator, Architect of the Universe, and Transcendent Parabrahman.',
      meaningTe: '"విదధాతీతి వేధాః" — సమస్త జగత్తును సృష్టించి, పాలించే సర్వజ్ఞుడు, సాక్షాత్ పరబ్రహ్మ స్వరూపుడు.',
      spiritualSignificanceTe: 'కులగురువైన వసిష్ఠ మహర్షి రాముని సామాన్య రాజకుమారునిగా కాక, సమస్త బ్రహ్మాండాల సృష్టికర్తయైన పరబ్రహ్మగా దర్శించి "వేధస్" అని కీర్తించాడు.',
      spiritualSignificanceEn: 'Brahmarshi Vasishta knew Rama\'s divine identity as the primordial creator of cosmic law and adored Him as "Vedhas" (Supreme Creator).',
      avatarSrc: './images/indian_history/rama_shloka_crops/vasishta_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/vasishta_row.jpg'
    },
    {
      order: 5,
      callerEn: 'Rishi',
      callerTe: 'విశ్వామిత్రాది మహర్షులు',
      relationshipEn: 'Forest Hermits & Vedic Seers',
      relationshipTe: 'యాగాలను, ధర్మాన్ని రాక్షసుల నుండి రక్షించిన రఘువంశ వీరునిగా కొలిచిన మునులు',
      shlokaWord: 'रघुनाथाय',
      shlokaWordTelugu: 'రఘునాథాయ',
      calledName: 'RAGHUNATHA',
      calledNameTelugu: 'రఘునాథ (యాగరక్షకుడు & రఘుకుల తిలకుడు)',
      meaningEn: 'The sovereign hero of the Raghu lineage, protector of righteous seers and vanquisher of demons.',
      meaningTe: 'రఘువంశ అధినాథుడు, యాగరక్షకుడు, దుష్ట దానవులను తుదముట్టించి ఆర్తులను కాపాడే రక్షకుడు.',
      spiritualSignificanceTe: 'తాటక, సుబాహు వధలతో యాగాలను కాపాడి, దండకారణ్య మునులకు అభయమిచ్చిన శ్రీరాముని మహర్షులు "రఘునాథా!" అని ప్రస్తుతించారు.',
      spiritualSignificanceEn: 'The hermits whose sacred yajnas were defended by Rama hailed Him reverently as "Raghunatha", the valorous savior of the Raghu dynasty.',
      avatarSrc: './images/indian_history/rama_shloka_crops/rishi_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/rishi_row.jpg'
    },
    {
      order: 6,
      callerEn: 'Sita',
      callerTe: 'సీతాదేవి',
      relationshipEn: 'Mother Sita (Divine Consort, Janaki)',
      relationshipTe: 'శ్రీరాముని తన ఏకైక ప్రాణనాథునిగా, సర్వస్వంగా ఆరాధించిన ధర్మపత్ని',
      shlokaWord: 'नाथाय',
      shlokaWordTelugu: 'నాథాయ',
      calledName: 'NATHA',
      calledNameTelugu: 'నాథ (ప్రాణేశ్వరుడు)',
      meaningEn: 'Beloved Husband, soul protector, and eternal master of her heart.',
      meaningTe: 'ప్రాణనాథుడు, హృదయేశ్వరుడు, సర్వస్వమైన ఏకపత్నీవ్రతుడు, జీవాత్మకు పరమాత్మ అయిన రక్షకుడు.',
      spiritualSignificanceTe: 'సీతాదేవి శ్రీరాముని తప్ప అన్యం ఎరుగక, సర్వకాల సర్వావస్థలలో తన ప్రాణనాథుడైన రాముని "నాథా!" అని అత్యంత భక్తిప్రేమలతో సంబోధించింది.',
      spiritualSignificanceEn: 'Mother Sita embraced Rama as her very heart and eternal soul-mate, addressing Him with pure surrender as "Natha" (My Lord).',
      avatarSrc: './images/indian_history/rama_shloka_crops/sita_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/sita_row.jpg'
    },
    {
      order: 7,
      callerEn: 'Janaka',
      callerTe: 'జనక మహారాజు',
      relationshipEn: 'King Janaka of Mithila (Father-in-law)',
      relationshipTe: 'శివధనుర్భంగం చేసి తన గారాల పట్టి సీతను చేపట్టిన జగత్కల్యాణ అల్లుడు',
      shlokaWord: 'सीतायाः पतये',
      shlokaWordTelugu: 'సీతాయాః పతయే',
      calledName: 'SEETHAPATHI',
      calledNameTelugu: 'సీతాపతి (జానకీ ప్రాణేశ్వరుడు)',
      meaningEn: 'The worthy divine lord and husband of Mother Sita ("Iyam Sita mama suta sahadharmachari tava").',
      meaningTe: 'సీతాదేవి యొక్క ప్రాణపతి ("ఇయం సీతా మమ సుతా సహధర్మచరీ తవ"), జగత్కల్యాణ దైవం.',
      spiritualSignificanceTe: 'జనక మహారాజు తన ప్రాణతుల్యమైన పుత్రిక సీతకు తగిన సాటిలేని వీరుడైన రాముని "సీతాపతి" అని పరమానందంతో కీర్తించి కన్యాదానం చేశాడు.',
      spiritualSignificanceEn: 'King Janaka praised Rama as the ideal divine consort of his daughter Sita, forever cementing His glory as "Sitapati".',
      avatarSrc: './images/indian_history/rama_shloka_crops/janaka_portrait.jpg',
      rowImageSrc: './images/indian_history/rama_shloka_crops/janaka_row.jpg'
    }
  ],
  concludingWordTe: 'నమః (NAMAḤ)',
  concludingWordEn: 'Namaḥ (Salutations & Total Surrender)',
  concludingSignificanceTe: '"న మమ" (నాది కాదు) అనే నిస్వార్థ శరణాగతి తత్త్వంతో భక్తులందరూ సమర్పించే సాష్టాంగ ప్రణామాలు. అందుకే ఈ 7 దివ్య సంబోధనలకు "నమః" చేర్చడం ద్వారా ఈ పవిత్ర శ్లోకం ఆవిర్భవించింది.',
  concludingSignificanceEn: '"Not mine, but Thine" — The concluding word signifies total surrender by all devotees, uniting the 7 divine relationships into one immortal salutation.'
};

// ----------------------------------------------------------------------------
// RAMAYANA FAMILY TREE DATA (రామాయణ సంపూర్ణ వంశవృక్షం)
// Covers: Ikshvaku/Raghu Solar Line, Nimi/Mithila Line, Vanara Line & Lanka Line
// ----------------------------------------------------------------------------
export const RAMAYANA_FAMILY_TREE_DATA: RamayanaFamilyTreeData = {
  imageSrc: './images/indian_history/ramayana_family_tree.png',
  titleTe: 'రామాయణ సంపూర్ణ వంశవృక్షం (Ramayana Family Tree)',
  titleEn: 'Comprehensive Ramayana Family Tree',
  subtitleTe: 'అయోధ్యా రఘువంశం, మిథిలా నిమివంశం, కిష్కింధా వానరవంశం & లంకా పౌలస్త్యవంశాల సమగ్ర వృక్షం',
  subtitleEn: 'The 4 Major Lineages of Treta Yuga: Ayodhya Raghu, Mithila Janaka, Kishkindha Vanara & Lanka Rakshasa',
  descriptionTe: 'శ్రీరామాయణ యుగంలోని ప్రధాన వంశాలైన ఇక్ష్వాకు రఘువంశం (దశరథుడు, నలుగురు సోదరులు, వారి ఎనిమిది మంది కుమారులు), మిథిలా జనక-కుశధ్వజ వంశం (సీత, ఊర్మిళ, మాండవి, శ్రుతకీర్తి), కిష్కింధా వానర వంశం (హనుమంతుడు, వాలి, సుగ్రీవుడు, అంగదుడు) మరియు లంకా పౌలస్త్య వంశం (రావణ, విభీషణ, కుంభకర్ణ, ఇంద్రజిత్తు)ల సంపూర్ణ బాంధవ్యాల చిత్రం.',
  descriptionEn: 'Complete genealogical tree depicting the interrelated dynasties of Treta Yuga: the Solar Ikshvaku-Raghu line of Ayodhya, the Nimi-Janaka line of Mithila, the Vanara lineage of Kishkindha, and the Paulastya line of Lanka.',
  branches: [
    {
      branchId: 'raghu_ayodhya',
      branchTitleTe: 'అయోధ్యా రఘువంశం (Raghu Dynasty of Ayodhya)',
      branchTitleEn: 'Ayodhya Raghu Dynasty (Solar Race)',
      originTe: 'మూలపురుషుడు: ఇక్ష్వాకు ➔ రఘు చక్రవర్తి',
      originEn: 'Ancestry: Ikshvaku ➔ King Raghu',
      color: '#7B1113',
      accentBg: 'from-amber-50 to-orange-50',
      members: [
        {
          nameTe: 'దశరథ మహారాజు',
          nameEn: 'King Dasharatha',
          roleTe: 'అయోధ్యా చక్రవర్తి (రఘుకుల తిలకుడు)',
          roleEn: 'King of Ayodhya',
          spouseTe: 'కౌసల్య, కైకేయి, సుమిత్ర',
          spouseEn: 'Kausalya, Kaikeyi, Sumitra',
          childrenTe: ['శ్రీరాముడు (కౌసల్య పుత్రుడు)', 'భరతుడు (కైకేయి పుత్రుడు)', 'లక్ష్మణుడు (సుమిత్ర పుత్రుడు)', 'శత్రుఘ్నుడు (సుమిత్ర పుత్రుడు)'],
          childrenEn: ['Lord Rama (son of Kausalya)', 'Bharata (son of Kaikeyi)', 'Lakshmana (son of Sumitra)', 'Shatrughna (son of Sumitra)'],
          avatarIcon: '👑'
        },
        {
          nameTe: 'శ్రీరామచంద్రుడు & సీతాదేవి',
          nameEn: 'Lord Rama & Sita Devi',
          roleTe: 'మర్యాదా పురుషోత్తముడు & జనకనందిని',
          roleEn: '7th Avatara of Vishnu & Devi Lakshmi incarnation',
          spouseTe: 'సీతాదేవి (జనక మహారాజు ప్రథమ పుత్రిక)',
          spouseEn: 'Sita Devi (Eldest daughter of King Janaka)',
          childrenTe: ['లవుడు (శ్రావస్తి నిర్మాత)', 'కుశుడు (కుశావతి నిర్మాత)'],
          childrenEn: ['Lava (Founder of Shravasti)', 'Kusha (Founder of Kushavati)'],
          avatarIcon: '🏹'
        },
        {
          nameTe: 'భరతుడు & మాండవి',
          nameEn: 'Bharata & Mandavi',
          roleTe: 'త్యాగశీలి, నందిగ్రామ పాలకుడు',
          roleEn: 'Righteous Regent & Queen Mandavi',
          spouseTe: 'మాండవి (కుశధ్వజుని ప్రథమ పుత్రిక)',
          spouseEn: 'Mandavi (Eldest daughter of Kushadhwaja)',
          childrenTe: ['తక్షుడు (తక్షశిల - Taxila నిర్మాత)', 'పుష్కలుడు (పుష్కలావతి నిర్మాత)'],
          childrenEn: ['Taksha (Founder of Takshashila/Taxila)', 'Pushkala (Founder of Pushkalavati)'],
          avatarIcon: '🤝'
        },
        {
          nameTe: 'లక్ష్మణుడు & ఊర్మిళ',
          nameEn: 'Lakshmana & Urmila',
          roleTe: 'శ్రీరామ అనుజుడు & మహాపతివ్రత ఊర్మిళ',
          roleEn: 'Devoted Brother & Princess Urmila',
          spouseTe: 'ఊర్మిళ (జనక మహారాజు ద్వితీయ పుత్రిక)',
          spouseEn: 'Urmila (Second daughter of King Janaka)',
          childrenTe: ['అంగదుడు (లక్ష్మణుని పుత్రుడు)', 'చంద్రకేతు (చంద్రావతి పాలకుడు)'],
          childrenEn: ['Angada (Son of Lakshmana)', 'Chandraketu (Ruler of Chandravati)'],
          avatarIcon: '⚔️'
        },
        {
          nameTe: 'శత్రుఘ్నుడు & శ్రుతకీర్తి',
          nameEn: 'Shatrughna & Shrutakirti',
          roleTe: 'మధురానగర విజేత (లవణాసుర సంహారకుడు)',
          roleEn: 'Vanquisher of Lavanasura & Ruler of Mathura',
          spouseTe: 'శ్రుతకీర్తి (కుశధ్వజుని ద్వితీయ పుత్రిక)',
          spouseEn: 'Shrutakirti (Second daughter of Kushadhwaja)',
          childrenTe: ['సుబాహు (మధురా పాలకుడు)', 'శత్రుఘాతి (విదిశా పాలకుడు)'],
          childrenEn: ['Subahu (Ruler of Mathura)', 'Shatrughati (Ruler of Vidisha)'],
          avatarIcon: '🛡️'
        }
      ]
    },
    {
      branchId: 'nimi_mithila',
      branchTitleTe: 'మిథిలా నిమివంశం (Nimi Dynasty of Mithila)',
      branchTitleEn: 'Mithila Nimi/Janaka Dynasty',
      originTe: 'మూలపురుషుడు: ఇక్ష్వాకు ➔ నిమి చక్రవర్తి',
      originEn: 'Ancestry: Ikshvaku ➔ King Nimi',
      color: '#15803D',
      accentBg: 'from-emerald-50 to-teal-50',
      members: [
        {
          nameTe: 'జనక మహారాజు & సునయనా దేవి',
          nameEn: 'King Janaka & Queen Sunaina',
          roleTe: 'విదేహ రాజర్షి & మిథిలా పట్టమహిషి',
          roleEn: 'Rajarshi of Videha & Chief Queen',
          spouseTe: 'సునయనా దేవి',
          spouseEn: 'Queen Sunaina',
          childrenTe: ['సీతాదేవి (శ్రీరాముని పత్ని)', 'ఊర్మిళ (లక్ష్మణుని పత్ని)'],
          childrenEn: ['Sita Devi (Wife of Sri Rama)', 'Urmila (Wife of Lakshmana)'],
          avatarIcon: '📜'
        },
        {
          nameTe: 'కుశధ్వజ మహారాజు & చంద్రాభాగ',
          nameEn: 'King Kushadhwaja & Chandra Abhaga',
          roleTe: 'సాంకాశ్య నగర పాలకుడు (జనకుని సోదరుడు)',
          roleEn: 'Ruler of Sankasya (Brother of Janaka)',
          spouseTe: 'చంద్రాభాగ దేవి',
          spouseEn: 'Chandra Abhaga',
          childrenTe: ['మాండవి (భరతుని పత్ని)', 'శ్రుతకీర్తి (శత్రుఘ్నుని పత్ని)'],
          childrenEn: ['Mandavi (Wife of Bharata)', 'Shrutakirti (Wife of Shatrughna)'],
          avatarIcon: '🏛️'
        }
      ]
    },
    {
      branchId: 'vanara_kishkindha',
      branchTitleTe: 'కిష్కింధా వానర వంశం (Vanara Lineage of Kishkindha)',
      branchTitleEn: 'Kishkindha Vanara Dynasty',
      originTe: 'మూలపురుషుడు: ఋక్షరజస్సు & బ్రహ్మ మానస సంకల్పం',
      originEn: 'Ancestry: Riksharaj & Divine Deva origins',
      color: '#C2410C',
      accentBg: 'from-amber-50 to-yellow-50',
      members: [
        {
          nameTe: 'కేసరి & అంజనా దేవి ➔ శ్రీ హనుమంతుడు',
          nameEn: 'Kesari ~ Anjana ➔ Lord Hanuman',
          roleTe: 'రుద్రావతార మహావీరుడు, రామభక్త శిఖామణి',
          roleEn: 'Incarnation of Shiva & Supreme Devotee of Rama',
          spouseTe: 'బ్రహ్మచారి (నిత్య సేవకుడు)',
          spouseEn: 'Celibate (Nitya Sevaka)',
          notesTe: 'వాయుదేవుని అనుగ్రహంతో అంజనాదేవి గర్భాన ఉద్భవించిన చిరంజీవి.',
          notesEn: 'Immortal hero born of Anjana Devi through the grace of Vayu Deva.',
          avatarIcon: '🐒'
        },
        {
          nameTe: 'ఋక్షరజస్సు ➔ వాలి & తార ➔ అంగదుడు',
          nameEn: 'Riksharaj ➔ Vali ~ Tara ➔ Angad',
          roleTe: 'కిష్కింధాధినాథుడు వాలి & యువరాజు అంగదుడు',
          roleEn: 'Mighty King Vali & Crown Prince Angada',
          spouseTe: 'తార (వాలి పత్ని, బృహస్పతి అంశ)',
          spouseEn: 'Queen Tara',
          childrenTe: ['అంగదుడు (యువరాజు, లంకా రాయబారి)'],
          childrenEn: ['Angada (Crown Prince of Kishkindha & Emissary to Lanka)'],
          avatarIcon: '👑'
        },
        {
          nameTe: 'సుగ్రీవుడు & రుమ',
          nameEn: 'Sugreev & Ruma',
          roleTe: 'సూర్యపుత్రుడు, కిష్కింధా మహారాజు',
          roleEn: 'Son of Surya & Crowned King of Kishkindha',
          spouseTe: 'రుమ',
          spouseEn: 'Ruma',
          notesTe: 'శ్రీరామునితో అగ్నిసాక్షిగా మైత్రి నెరపి సీతాన్వేషణకు సమస్త వానర సైన్యాన్ని పంపిన ధర్మాత్ముడు.',
          notesEn: 'Righteous ally of Sri Rama who mobilized the global Vanara search for Mother Sita.',
          avatarIcon: '☀️'
        }
      ]
    },
    {
      branchId: 'rakshasa_lanka',
      branchTitleTe: 'లంకా పౌలస్త్య వంశం (Paulastya Rakshasa Line of Lanka)',
      branchTitleEn: 'Lanka Paulastya Dynasty',
      originTe: 'మూలపురుషుడు: పులస్త్య మహర్షి ➔ విశ్రవసుడు',
      originEn: 'Ancestry: Sage Pulastya ➔ Sage Vishrava ~ Kaikesi',
      color: '#4C1D95',
      accentBg: 'from-purple-50 to-indigo-50',
      members: [
        {
          nameTe: 'విశ్రవస మహర్షి & కైకసి',
          nameEn: 'Sage Vishrava & Kaikesi',
          roleTe: 'లంకా రాక్షస చక్రవర్తుల జననీజనకులు',
          roleEn: 'Brahmarshi Father & Daitya Mother',
          childrenTe: ['రావణుడు', 'కుంభకర్ణుడు', 'విభీషణుడు', 'శూర్పణఖ'],
          childrenEn: ['Ravana', 'Kumbhakarna', 'Vibhishana', 'Shurpanakha'],
          avatarIcon: '🔱'
        },
        {
          nameTe: 'రావణాసురుడు & మండోదరి',
          nameEn: 'Ravana & Mandodari',
          roleTe: 'లంకాధిపతి (దశకంఠుడు) & మయసభాపతి పుత్రి మండోదరి',
          roleEn: 'Ten-headed Sovereign of Lanka & Queen Mandodari',
          spouseTe: 'మండోదరి (మయపుత్రి)',
          spouseEn: 'Mandodari (Daughter of Maya Danava)',
          childrenTe: ['మేఘనాథుడు / ఇంద్రజిత్తు', 'అక్షయకుమారుడు'],
          childrenEn: ['Meghnath / Indrajit (Conqueror of Indra)', 'Akshayakumar'],
          avatarIcon: '👹'
        },
        {
          nameTe: 'విభీషణుడు',
          nameEn: 'Vibhishana',
          roleTe: 'రామభక్తుడు, ధర్మమూర్తి, నూతన లంకాధిపతి',
          roleEn: 'Righteous Devotee of Rama & Consecrated King of Lanka',
          notesTe: 'రావణుని అధర్మాన్ని నిరసించి శ్రీరాముని శరణుజొచ్చిన చిరంజీవి; రావణ సంహారానంతరం లంకా సింహాసనం అధిష్టించాడు.',
          notesEn: 'Immortal devotee who surrendered to Rama and was crowned righteous sovereign of Lanka.',
          avatarIcon: '📿'
        },
        {
          nameTe: 'కుంభకర్ణుడు & శూర్పణఖ',
          nameEn: 'Kumbhakarna & Shurpanakha',
          roleTe: 'మహాబలుడు కుంభకర్ణుడు & రావణుని సోదరి శూర్పణఖ',
          roleEn: 'Colossal Warrior Kumbhakarna & Princess Shurpanakha',
          notesTe: 'కుంభకర్ణుడు ఆరు నెలల నిద్ర కలవాడు, యుద్ధరంగంలో వీరమరణం పొందాడు.',
          notesEn: 'Kumbhakarna was a colossal warrior whose heroic demise shook the demon army.',
          avatarIcon: '⚔️'
        }
      ]
    }
  ]
};

export const VEDIC_CHRONOLOGY_TIMELINES: VedicTimelineEra[] = [
  // --------------------------------------------------------------------------
  // ERA 1: 10,000 – 7,000 BC
  // --------------------------------------------------------------------------
  {
    id: 'era_10000_7000_bc',
    order: 1,
    dateRange: '10,000 – 7,000 BC',
    dateRangeTe: 'క్రీ.పూ. 10,000 – 7,000',
    titleTe: 'మనువు, తొలి వేదాలు & మెహర్‌గఢ్ యుగము',
    titleEn: 'Era of Manu, Early Rigveda & Mehrgarh Urban Roots',
    subtitleTe: 'సృష్టి ఆరంభం • మను పరంపర • మత్స్యావతార జలప్రళయం • ప్రాచీన మెహర్‌గఢ్ నాగరికత',
    subtitleEn: 'Primeval Era of Manu • Matsya Flood • Composition of Early Veda • Mehrgarh City (8,000 BC)',
    badgeTe: '10,000 BC • వైదిక ఆవిర్భావం',
    badgeEn: '10,000 BC • Vedic Genesis',
    accentColor: '#D84315',
    borderColor: 'border-[#D84315]',
    bgGradient: 'from-[#FFFDF7] via-[#FFF3E0] to-[#FFE0B2]/30',
    icon: '🕉️',
    shortSummaryTe: 'మనువు యుగంలో వేదాల రచన ఆరంభం. తైత్తిరీయ ప్రాతిశాఖ్యలో క్రీ.పూ. 10,000 నాటి ఖగోళ ఆధారాలు లభ్యం. బోలాన్ నదీ తీరంలో 8,000 BC నాటి మెహర్‌గఢ్ పురాతన నగరం వెలుగుచూసింది.',
    shortSummaryEn: 'The era of Manu witnessed the earliest composition of the Vedas. Taittiriya Pratishakhya records stellar positions as early as 10,000 BC. Earliest excavated city Mehrgarh on Bolan river is carbon-dated to 8,000 BC.',
    astronomicalDatingTe: 'తైత్తిరీయ ప్రాతిశాఖ్య మరియు ప్రాచీన వైదిక శ్లోకాలలో పేర్కొన్న నక్షత్ర సంపాత స్థానాల (Precession of Equinoxes) ఆధారంగా వేద మంత్రాల ఆవిర్భావ కాలం క్రీ.పూ. 10,000 వరకు ఉన్నట్లు ఖగోళ గణనలు నిరూపిస్తున్నాయి.',
    astronomicalDatingEn: 'Stellar precession data recorded in the Taittiriya Pratishakhya demonstrates vernal equinox observations dating as early as 10,000 BC.',
    archaeologicalEvidenceTe: 'బలూచిస్తాన్‌లోని బోలాన్ నదీ తీరాన గల మెహర్‌గఢ్ (Mehrgarh) పురావస్తు త్రవ్వకాలలో క్రీ.పూ. 8,000 నాటికే వ్యవస్థీకృత వ్యవసాయం, ఇళ్ల నిర్మాణం, మట్టిపాత్రల తయారీ మరియు దంతవైద్యం ఉన్నట్లు నిరూపితమైంది.',
    archaeologicalEvidenceEn: 'The Mehrgarh excavation on the banks of Bolan River confirms sophisticated farming, mud-brick architecture, and granaries carbon-dated to 8,000 BC.',
    societalNormsTe: [
      'మనువును సమస్త మానవ సమాజానికి ఆది పితృమూర్తిగా పూజించారు.',
      'ఋగ్వేద ప్రథమ సూక్తాల ఆవిర్భావం మరియు యజ్ఞ సంస్కృతి ఆరంభం.',
      'దేవతలు, దానవులు, గంధర్వులు, నాగులు సంయుక్తంగా సముద్ర మథనం వంటి బృహత్ కార్యాలలో పాల్గొన్నారు.'
    ],
    societalNormsEn: [
      'Manu revered as the progenitor of mankind and first law-giver.',
      'Earliest Rigvedic hymns composed around sacred fire altars.',
      'Collaborative ventures between Devas, Asuras, Nagas, and Gandharvas recorded (Samudra Manthan).'
    ],
    keyFiguresTe: [
      'మనువు (బర్హి 15వ వంశీయుడు, మత్స్యావతార రక్షితుడు)',
      'కశ్యప మహర్షి & దక్ష ప్రజాపతి 13 మంది కుమార్తెలు (అదితి, దితి, కద్రువ, వినత మొదలైనవారు)',
      'వివస్వానుడు, శ్రీ మహావిష్ణువు (మత్స్య & వామనావతారాలు)',
      'గరుడుడు, అరుణుడు, తక్షకుడు, ఇక్ష్వాకు, పురూరవుడు',
      'హిరణ్యకశిపుడు, భక్త ప్రహ్లాదుడు, విరోచనుడు, బలి చక్రవర్తి'
    ],
    keyFiguresEn: [
      'Manu (15th descendant of Barhi, saved by Matsya Avatara from deluge)',
      'Sage Kashyapa & Daksha Prajapati\'s 13 daughters (Aditi, Diti, Kadru, Vinata, etc.)',
      'Vivasvan (Sun Deity), Lord Vishnu (Matsya & Vamana Avataras)',
      'Garuda, Aruna, Takshaka Naga, King Ikshvaku, Pururava',
      'Hiranyakashyapu, Bhakta Prahlada, Virochana, King Bali'
    ],
    milestoneEventsTe: [
      'మత్స్యావతారం: మహా జలప్రళయం నుండి మనువును, ఔషధులను, సప్తర్షులను నౌక ద్వారా రక్షించడం.',
      'వామనావతారం: బలి చక్రవర్తి యజ్ఞం వద్ద త్రివిక్రమ రూపంతో భూమి, ఆకాశాలను కొలిచి బలిని సుతల/పాతాళ లోకానికి పాలకునిగా నియమించడం.',
      'ఇక్ష్వాకు మరియు చంద్రవంశ మూలకర్త పురూరవుని వంశాల విస్తరణ.'
    ],
    milestoneEventsEn: [
      'Matsya Avatara: Rescuing Manu, the Saptarshis, and seed-germs in a cosmic boat during the deluge.',
      'Vamana Avatara: Transcendental measuring of heaven and earth at King Bali\'s sacrifice, consecrating Bali as sovereign of Sutala.',
      'Establishment of the primary Ikshvaku (Solar) and Pururava (Lunar) dynastic lines.'
    ],
    scripturalReferencesTe: [
      'తైత్తిరీయ ప్రాతిశాఖ్య • ఋగ్వేద సంహిత 10.129',
      'శ్రీమద్భాగవతం స్కంధం 8 (మత్స్య & వామనావతారాలు)',
      'మత్స్య పురాణం • వాయు పురాణం'
    ],
    scripturalReferencesEn: [
      'Taittiriya Pratishakhya • Rigveda 10.129',
      'Srimad Bhagavatam Canto 8 (Matsya & Vamana Avataras)',
      'Matsya Purana • Vayu Purana'
    ],
    sourceReference: "Vedic-Ramayan Research by Dr. P.V. Vartak (Page 1-12)"
  },

  // --------------------------------------------------------------------------
  // ERA 2: 8,200 – 5,500 BC
  // --------------------------------------------------------------------------
  {
    id: 'era_8200_5500_bc',
    order: 2,
    dateRange: '8,200 – 5,500 BC',
    dateRangeTe: 'క్రీ.పూ. 8,200 – 5,500',
    titleTe: 'హరిశ్చంద్ర, సగర, భరత & పరశురామ యుగము',
    titleEn: 'Era of Harishchandra, Sagara, King Bharata & Parashurama',
    subtitleTe: 'అనరణ్యుడు • గాయత్రీ మంత్ర ఆవిర్భావం • భరత చక్రవర్తి • గంగావతరణం • పరశురామ అవతారం',
    subtitleEn: 'King Anaranya • Gayatri Mantra by Vishwamitra • King Bharata • Ganga Canal by Bhagiratha • Parashurama',
    badgeTe: '8,200 BC • తైత్తిరీయ సంహిత',
    badgeEn: '8,200 BC • Taittiriya Samhita',
    accentColor: '#B71C1C',
    borderColor: 'border-[#B71C1C]',
    bgGradient: 'from-[#FFFDF7] via-[#FFEBEE] to-[#FFCDD2]/30',
    icon: '🏹',
    shortSummaryTe: 'అనరణ్యుడు, హరిశ్చంద్రుడు, సగరుడు, భగీరథుడు, భరత చక్రవర్తుల కాలం. తైత్తిరీయ సంహితలో 8,200 BC ఖగోళ ప్రమాణాలు కలవు. మహిళా ఋషులు వేద మంత్రాలను రచించారు. వర్ణం పుట్టుకతో కాక గుణ-కర్మల ఆధారంగా ఉండేది.',
    shortSummaryEn: 'Era of Kings Anaranya, Harishchandra, Sagara, Bhagiratha, and Emperor Bharata. Taittiriya Samhita notes astronomical dates of 8,200 BC. Women scholars composed Vedic suktas. Varna was determined strictly by merit and work.',
    astronomicalDatingTe: 'తైత్తిరీయ సంహిత (Taittiriya Samhita) యందలి కృత్తికా నక్షత్ర విషువత్ కాలగణన (Krittika Equinox) క్రీ.పూ. 8,200 నుండి 8,500 నాటి ఖగోళ స్థానాన్ని స్పష్టంగా నమోదు చేసింది.',
    astronomicalDatingEn: 'Astronomical configurations of Krittika (Pleiades) at the vernal equinox recorded in Taittiriya Samhita pinpoint dates between 8,200 and 8,500 BC.',
    archaeologicalEvidenceTe: 'సరస్వతీ-సింధు లోయలలో ప్రాచీన కాలపు రాగి, కంచు లోహ తయారీ కేంద్రాలు మరియు కురుక్షేత్ర సమీపాన కునాల్ (Kunal) వద్ద లభించిన 6,000 BC నాటి కిరీటాలు, ఆభరణాలు ఈ యుగాన్ని బలపరుస్తున్నాయి.',
    archaeologicalEvidenceEn: 'Excavations at Kunal, Haryana unearth silver tiaras, steatite beads, and copper artifacts dated to ~6,000 BC matching the early metallurgy of this period.',
    societalNormsTe: [
      'వర్ణ వ్యవస్థ పుట్టుకతో కాక, వ్యక్తి యొక్క విద్య, గుణములు మరియు చేసే పని (Guna-Karma) ఆధారంగా మాత్రమే నిర్ణయించబడేది.',
      'మహిళా ఋషులు (గార్గి, మైత్రేయి, లోపాముద్ర, విశ్వవార) వేద మంత్రాలను ఆవిష్కరించారు మరియు యజ్ఞాలలో సమాన భాగస్వామ్యం పొందారు.',
      'రాజులు తమ కన్న సంతానం అసమర్థులైతే వారిని కాదని, ప్రతిభావంతులైన ఇతర బాలురను దత్తత తీసుకుని పట్టాభిషేకం చేసేవారు (ఉదా: భరత చక్రవర్తి).'
    ],
    societalNormsEn: [
      'Social classification was based on character, virtue, and profession, never by birth.',
      'Eminent women scholars (Brahmavadinis) composed Vedic verses and conducted solemn sacrifices.',
      'Emperors prioritized merit over dynasty; King Bharata set aside his biological sons to adopt a virtuous successor.'
    ],
    keyFiguresTe: [
      'అనరణ్యుడు (మనువు నుండి 18వ తరపు చక్రవర్తి)',
      'సత్యహరిశ్చంద్రుడు, సగర చక్రవర్తి (నౌకాదళ నిర్మాత), భగీరథుడు',
      'రఘు మహారాజు, దశరథ మహారాజు, రుతుపర్ణుడు',
      'విశ్వామిత్ర మహర్షి (గాయత్రీ మంత్ర ద్రష్ట), వసిష్ఠ మహర్షి, జమదగ్ని-రేణుక',
      'శ్రీ పరశురాముడు (విష్ణువు 6వ అవతారము), సహస్రార్జునుడు',
      'దుష్యంతుడు-శకుంతల, భరత చక్రవర్తి (భారతదేశానికి నామకారకుడు), హస్తి (హస్తినాపుర నిర్మాత), కురు రాజు'
    ],
    keyFiguresEn: [
      'King Anaranya (18th king in succession from Manu)',
      'Truthful Harishchandra, King Sagara (Commander of ocean navy), Bhagiratha',
      'King Raghu, King Dasharatha, King Rutuparna',
      'Sage Vishwamitra (Seer of Gayatri Mantra), Sage Vasishta, Jamadagni & Renuka',
      'Lord Parashurama (6th incarnation of Vishnu), Sahasrarjuna (Kartavirya)',
      'Dushyanta ~ Shakuntala, Emperor Bharata (Eponym of Bharatavarsha), King Hasti (Founder of Hastinapur), King Kuru'
    ],
    milestoneEventsTe: [
      'సగర చక్రవర్తి బృహత్ నౌకాదళం ద్వారా సముద్రాలపై ఆధిపత్యం సాధించడం (అందువల్ల సముద్రానికి "సాగరం" అని పేరు వచ్చింది).',
      'భగీరథుడు హిమాలయ జలాలను భారతదేశ మైదానాలకు తీసుకువచ్చి గంగా కాలువ వ్యవస్థను సృష్టించడం ("భాగీరథి").',
      'భరత చక్రవర్తి సమగ్ర భారతదేశాన్ని ఏకచ్ఛత్రాధిపత్యంగా పాలించడం; మన దేశానికి "భారతదేశం" అని నామకరణం కావడం.',
      'హస్తి రాజు హస్తినాపురాన్ని, కురు రాజు కురుక్షేత్రాన్ని నిర్మించడం.'
    ],
    milestoneEventsEn: [
      'Emperor Sagara building a mighty naval force dominating oceans (hence the sea became known as Sagara).',
      'Bhagiratha engineering the course of Himalayan waters into the Gangetic plains (Bhagirathi).',
      'Emperor Bharata unifying the subcontinent under righteous rule, bestowing the immortal name "Bharatavarsha".',
      'Foundation of legendary capitals: Hastinapur by King Hasti, and Kurukshetra by King Kuru.'
    ],
    scripturalReferencesTe: [
      'ఋగ్వేదం 3.62.10 (గాయత్రీ మంత్రం)',
      'తైత్తిరీయ సంహిత • వాల్మీకి రామాయణం (బాలకాండ - సగర-భగీరథ ఉపాఖ్యానం)',
      'మహాభారతం ఆది పర్వం (దుష్యంత-శకుంతల-భరత చరిత్ర)'
    ],
    scripturalReferencesEn: [
      'Rigveda 3.62.10 (Gayatri Mantra by Vishwamitra)',
      'Taittiriya Samhita • Valmiki Ramayana (Balakanda - Sagara & Bhagiratha)',
      'Mahabharata Adi Parva (Dushyanta, Shakuntala & Bharata)'
    ],
    sourceReference: "Vedic-Ramayan Research by Dr. P.V. Vartak (Page 13-35)"
  },

  // --------------------------------------------------------------------------
  // ERA 3: 7,000 – 4,500 BC
  // --------------------------------------------------------------------------
  {
    id: 'era_7000_4500_bc',
    order: 3,
    dateRange: '7,000 – 4,500 BC',
    dateRangeTe: 'క్రీ.పూ. 7,000 – 4,500',
    titleTe: 'రామాయణ యుగము & త్రేతాయుగ చక్రవర్తులు',
    titleEn: 'Ramayana Era, Sri Rama & Treta Yuga Dynasties',
    subtitleTe: 'శ్రీరామచంద్రుడు • సీతాదేవి • లవ-కుశులు • తక్షశిల నిర్మాణం • వానర సైన్యం • భీష్మ పితామహ పూర్వీకులు',
    subtitleEn: 'Lord Sri Ramachandra • Sita Devi • Lava-Kusha • Taxila Founded by Taksha • Shantanu & Bhishma Line',
    badgeTe: '7,000 BC • రామాయణ కాలం',
    badgeEn: '7,000 BC • Ramayana Epoch',
    accentColor: '#7B1113',
    borderColor: 'border-[#7B1113]',
    bgGradient: 'from-[#FFFDF7] via-[#FFF8E1] to-[#FFE082]/30',
    icon: '🏹',
    iconImage: './images/indian_history/sita_rama_lakshmana_square_icon.jpg',
    shortSummaryTe: 'అనరణ్యుని నుండి 40వ తరపు రాజు శ్రీరాముడు. రావణ వధ, ధర్మ రాజ్య స్థాపన. లవ-కుశులు శ్రావస్తి, కుశావతి నగరాలను, తక్ష-పుష్కలులు తక్షశిల, పుష్కలావతి నగరాలను నిర్మించారు. శాంతనుడు, భీష్ముని పూర్వీకుల వంశ ఆవిర్భావం.',
    shortSummaryEn: 'Sri Rama was the 40th king in line from Anaranya. Conquered Lanka and established Ramarajya. Lava and Kusha built Shravasti and Kushavati. Taksha built the world-renowned university city Takshashila (Taxila).',
    astronomicalDatingTe: 'వాల్మీకి రామాయణ బాలకాండ (సర్గ 18) లోని శ్రీరామ జనన గ్రహ స్థితులు (పునర్వసు నక్షత్రం, కర్కాటక లగ్నం, ఐదు గ్రహాల ఉచ్ఛస్థితి) ను ఆధునిక ప్లానిటోరియం సాఫ్ట్‌వేర్ ద్వారా విశ్లేషించగా క్రీ.పూ. 7,323 లేదా క్రీ.పూ. 5,041 నాటి ఖగోళ అమరికతో సరిపోతుంది.',
    astronomicalDatingEn: 'Planetary configurations recorded at Rama\'s birth in Valmiki Ramayana Balakanda (5 planets in exaltation, Cancer ascendant, Punarvasu nakshatra) match astronomical dates between 5,000 and 7,300 BC.',
    archaeologicalEvidenceTe: 'రామసేతు (ఆడమ్స్ బ్రిడ్జ్) సున్నపురాయి దిబ్బల శాస్త్రీయ కార్బన్ డేటింగ్, మరియు అయోధ్య-సరయూ పరివాహక ప్రాంతాల్లో లభించిన ప్రాచీన జనావాస అవశేషాలు రామాయణ చారిత్రకతను ధృవీకరిస్తున్నాయి.',
    archaeologicalEvidenceEn: 'Geological core-drilling and carbon dating of the Rama Setu (submerged calcarenite limestone chain) corroborate human engineering in this era.',
    societalNormsTe: [
      'మహిళలకు సంపూర్ణ విద్యా హక్కు, వేద మంత్ర పఠన మరియు యజ్ఞ నిర్వహణ అధికారాలు ఉండేవి.',
      'భర్త మరణించిన సందర్భంలో సమాజం అంగీకారంతో దేవర న్యాయం (పునర్వివాహం/నియోగం) గౌరవప్రదంగా ఆచరించబడింది.',
      'ధర్మమే సర్వోన్నత రాజనీతిగా "రామరాజ్య" పాలనా సూత్రాలు అమలయ్యాయి.'
    ],
    societalNormsEn: [
      'Women held full spiritual authority, actively participating in public homas and philosophical debates.',
      'Compassionate societal norms honored widows through lawful remarriage or Niyoga.',
      'Governance founded on public welfare, absolute justice, and righteous service (Ramarajya).'
    ],
    keyFiguresTe: [
      'శ్రీరామచంద్రుడు (విష్ణువు 7వ అవతారము), సీతాదేవి (జనకపుత్రి)',
      'లక్ష్మణుడు, భరతుడు, శత్రుఘ్నుడు',
      'లవుడు & కుశుడు (శ్రావస్తి, కుశావతి నగరాల నిర్మాతలు)',
      'తక్షుడు & పుష్కలుడు (తక్షశిల - Taxila, పుష్కలావతి నగరాల నిర్మాతలు)',
      'వాలి, సుగ్రీవుడు, అంగదుడు, జాంబవంతుడు, హనుమంతుడు',
      'రావణుడు-II (లంకాధిపతి)',
      'శంతనుడు ~ సత్యవతి, భీష్మ పితామహుడు, చిత్రాంగదుడు, విచిత్రవీర్యుడు'
    ],
    keyFiguresEn: [
      'Lord Sri Rama (7th incarnation of Vishnu) & Sita Devi (Daughter of Janaka)',
      'Lakshmana, Bharata, Shatrughna',
      'Lava & Kusha (Founders of Shravasti and Kushavati in North-East Ayodhya)',
      'Taksha & Pushkala (Founders of the twin capitals Takshashila/Taxila & Pushkalavati in Gandhara)',
      'Vali, Sugriva, Angada, Jambavan, Hanuman',
      'Ravana-II (Sovereign of Lanka)',
      'King Shantanu ~ Queen Satyavati, Bhishma Pitamaha, Chitrangada, Vichitravirya'
    ],
    milestoneEventsTe: [
      'రావణ సంహారము మరియు లంకపై ధర్మవిజయం.',
      'తక్షశిల (Takshashila / Taxila) నగర నిర్మాణం: భరతుని కుమారుడు తక్షుడు ప్రపంచ ప్రసిద్ధ విద్యాలయ నగరమైన తక్షశిలను నిర్మించాడు.',
      'లవ-కుశులచే అయోధ్య ఈశాన్య సరిహద్దులలో శ్రావస్తి మరియు కుశావతి రాజధానుల స్థాపన.',
      'కురు వంశంలో శంతనుడు మరియు భీష్మ పితామహుని జననం.'
    ],
    milestoneEventsEn: [
      'Defeat of Ravana and liberation of Lanka, cementing ethical governance across the subcontinent.',
      'Foundation of Taxila (Takshashila) by Bharata\'s son Taksha, which later evolved into the world\'s premiere university.',
      'Lava and Kusha establishing the twin administrative metropolises Shravasti and Kushavati.',
      'Birth of the great patriarch Bhishma and transition of the Kuru dynasty towards the Mahabharata era.'
    ],
    scripturalReferencesTe: [
      'వాల్మీకి రామాయణం (సంపూర్ణ కాండలు)',
      'శ్రీమద్భాగవతం స్కంధం 9, అధ్యాయాలు 10-11',
      'విష్ణు పురాణం 4వ అంశం'
    ],
    scripturalReferencesEn: [
      'Valmiki Ramayana (All 7 Kandas)',
      'Srimad Bhagavatam Canto 9, Chapters 10-11',
      'Vishnu Purana Book 4'
    ],
    sourceReference: "Vedic-Ramayan Research by Dr. P.V. Vartak (Page 36-65)",
    ramayanaAstronomicalTimeline: RAMAYANA_ASTRONOMICAL_TIMELINE,
    ramaShlokaOrigin: RAMA_SHLOKA_ORIGIN_DATA,
    ramayanaFamilyTree: RAMAYANA_FAMILY_TREE_DATA
  },

  // --------------------------------------------------------------------------
  // ERA 4: 5,000 – 3,100 BC
  // --------------------------------------------------------------------------
  {
    id: 'era_5000_3100_bc',
    order: 4,
    dateRange: '5,000 – 3,100 BC',
    dateRangeTe: 'క్రీ.పూ. 5,000 – 3,100',
    titleTe: 'మహాభారత యుగము, శ్రీకృష్ణుడు & వేదవ్యాస సంహితలు',
    titleEn: 'Mahabharata War, Sri Krishna & Standardization of Vedas',
    subtitleTe: 'కురుక్షేత్ర మహాసంగ్రామం (35 లక్షల వీరులు) • భగవద్గీత • వేదవ్యాసుని చతుర్వేద సంకలనం • పరీక్షిత్తు • కలియుగ ప్రవేశం',
    subtitleEn: '18-Day Kurukshetra War (3.5M Casualties) • Bhagavad Gita • 4 Vedas Codified by Vyasa • Kaliyuga Transition (3,102 BC)',
    badgeTe: '3,102 BC • కలియుగాబ్దం',
    badgeEn: '3,102 BC • Kaliyuga Epoch',
    accentColor: '#1B5E20',
    borderColor: 'border-[#1B5E20]',
    bgGradient: 'from-[#FFFDF7] via-[#E8F5E9] to-[#C8E6C9]/30',
    icon: '⚔️',
    shortSummaryTe: 'శ్రీరాముని నుండి 60వ తరపు రాజు పరీక్షిత్తు. కురుక్షేత్రంలో 18 రోజుల మహాభారత యుద్ధం (35 లక్షల మంది మరణం). వేదవ్యాసుడు వేదాలను 4 సంహితలుగా విభజించి ప్రామాణీకరించారు. క్రీ.పూ. 3102 లో కలియుగ ఆరంభం.',
    shortSummaryEn: 'King Parikshit was the 60th king since Rama. The 18-day Mahabharata war saw 3.5 million warriors perish. Sage Veda Vyasa compiled and standardized the 4 Vedas into existing Samhitas. Kaliyuga began in 3,102 BC.',
    astronomicalDatingTe: 'మహాభారత ఉద్యోగ పర్వం మరియు భీష్మ పర్వాలలో వ్యాసుడు నమోదు చేసిన గ్రహణ శృంఖల (13 రోజులలో రెండు గ్రహణాలు), శని-బృహస్పతుల స్థానాలు, మరియు ఐహోళే శాసనం (క్రీ.శ. 634) ఆధారంగా మహాభారత యుద్ధం క్రీ.పూ. 3,138 / 3,102 మధ్య జరిగింది.',
    astronomicalDatingEn: 'The twin eclipses within 13 days, Saturn-Jupiter retrograde positions in Mahabharata Udyoga Parva, and the Aihole Inscription of Pulakeshin II scientifically establish 3,138 / 3,102 BC for the Kurukshetra War.',
    archaeologicalEvidenceTe: 'హర్యానాలోని కురుక్షేత్ర, తిల్‌పత్, పానిపట్, సోనిపట్ మరియు హస్తినాపురాలలో లభించిన పెయింటెడ్ గ్రే వేర్ (PGW), ఐరన్ బాణపు మొనలు, మరియు ద్వారక వద్ద నీటమునిగిన ప్రాచీన రాతి కోటగోడలు (Marine Archaeology) ఈ కాలానికి ప్రత్యక్ష సాక్ష్యాలు.',
    archaeologicalEvidenceEn: 'Marine archaeological discovery of submerged fortified city structures at Bet Dwarka along with Iron tools and PGW ware across 5 Pandava villages date precisely to this epoch.',
    societalNormsTe: [
      'ఈ యుగం చివరి నాటికి వర్ణ వ్యవస్థ క్రమంగా పుట్టుకతో అనుసంధానించబడటం ప్రారంభమైంది.',
      'ఉపనిషత్తుల తాత్విక అధ్యయనం మరియు వేదాంత విచారణ తారస్థాయికి చేరింది.',
      'మహాభారత యుద్ధానంతరం అపారమైన ప్రాణ నష్టం వలన సమాజంలో శాంతి, అహింస, యోగ సాధనలకు ప్రాధాన్యత పెరిగింది.'
    ],
    societalNormsEn: [
      'Social roles gradually solidified into birth-based lineages towards the conclusion of the war.',
      'Composition of primary philosophical Upanishads attained intellectual zenith.',
      'Massive wartime devastation led to deep spiritual introspection, elevating ahimsa and bhakti.'
    ],
    keyFiguresTe: [
      'శ్రీకృష్ణ పరమాత్మ (విష్ణువు 8వ పూర్ణావతారము), బలరాముడు',
      'పాండవులు (ధర్మరాజు, భీముడు, అర్జునుడు, నకులుడు, సహదేవుడు) & ద్రౌపది (ఇంద్రప్రస్థ స్థాపన)',
      'కౌరవులు (దుర్యోధనుడు, కర్ణుడు, భీష్ముడు, ద్రోణుడు)',
      'మహర్షి వేదవ్యాసుడు (చతుర్వేద విభజనకర్త, మహాభారత కర్త)',
      'అభిమన్యుడు ~ ఉత్తర, పరీక్షిత్తు మహారాజు (హస్తినాపుర పాలకుడు)',
      'జనమేజయ మహారాజు (సర్పయాగం నిర్వహించినవాడు)'
    ],
    keyFiguresEn: [
      'Lord Sri Krishna (8th Purna Avatara of Vishnu), Balarama',
      'The 5 Pandavas (Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva) & Queen Draupadi',
      'The Kauravas (Duryodhana, Karna, Bhishma, Dronacharya)',
      'Maharshi Veda Vyasa (Editor of 4 Vedas, Author of Mahabharata & Puranas)',
      'Abhimanyu ~ Uttara, King Parikshit (Ruler of Hastinapur)',
      'King Janamejaya (Performer of the Sarpa Satra)'
    ],
    milestoneEventsTe: [
      'కురుక్షేత్ర మహాభారత యుద్ధం: 18 రోజుల వ్యవధిలో సుమారు 35,00,000 (35 లక్షల) మంది సైనికులు వీరమరణం పొందారు. (పోలిక: రెండవ ప్రపంచ యుద్ధంలో 6 సంవత్సరాలలో 5.5 కోట్ల మంది మరణించారు).',
      'భగవద్గీతా ప్రబోధం: కురుక్షేత్ర రణరంగంలో అర్జునునికి శ్రీకృష్ణుని విశ్వరూప దర్శనం మరియు గీతాబోధ.',
      'వేదాల విభజన: వేదవ్యాసుడు సమస్త వేద జ్ఞానాన్ని ఋక్, యజుస్, సామ, అథర్వ అనే నాలుగు ప్రామాణిక సంహితలుగా విభజించి తన శిష్యులైన పైల, వైశంపాయన, జైమిని, సుమంతులకు అందించడం.',
      'క్రీ.పూ. 3102 లో శ్రీకృష్ణ నిర్యాణం మరియు కలియుగ ఆరంభం.'
    ],
    milestoneEventsEn: [
      'The 18-Day Kurukshetra War: Around 3,500,000 warriors died in 18 days with the use of astras. (For comparison, World War II claimed 55 million lives over 6 years).',
      'Revelation of the Srimad Bhagavad Gita on the battleground of Kurukshetra.',
      'Standardization of Vedas: Vyasa codified the single Vedic corpus into 4 distinct Samhitas (Rig, Yajur, Sama, Atharva) taught to disciples Paila, Vaishampayana, Jaimini, and Sumantu.',
      'Kaliyuga Epoch begins in 3,102 BC with the departure of Lord Sri Krishna.'
    ],
    scripturalReferencesTe: [
      'మహాభారతం (18 పర్వాలు) • శ్రీమద్ భగవద్గీత',
      'శ్రీమద్భాగవతం స్కంధాలు 1, 10, 11 & 12',
      'ఐహోళే శాసనం (క్రీ.శ. 634 - పులకేశి II)'
    ],
    scripturalReferencesEn: [
      'Mahabharata (All 18 Parvas) • Srimad Bhagavad Gita',
      'Srimad Bhagavatam Cantos 1, 10, 11 & 12',
      'Aihole Inscription of Ravikirti (634 CE)'
    ],
    sourceReference: "Vedic-Ramayan Research by Dr. P.V. Vartak (Page 66-95)",
    timelineMilestones: [
      {
        yearBCE: '< 1500 BCE',
        yearEn: '< 1500 BCE',
        yearTe: 'క్రీ.పూ. 1500 కంటే పూర్వం',
        eventEn: 'Rig Veda is Composed & Chanted',
        eventTe: 'ఋగ్వేద సూక్తాల సంకలనం & గానం',
        detailsEn: 'Earliest sacred hymns of the Rigveda composed, preserved and chanted in the Sapta-Sindhu river valley.',
        detailsTe: 'సప్తసింధు నదీ పరీవాహక ప్రాంతంలో ఋగ్వేద మంత్రాలు దృష్టమై, పవిత్ర యజ్ఞ వేదికల వద్ద గానం చేయబడ్డాయి.',
        icon: '📜',
        category: 'veda'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 5: ~2,000 BC (Water Management & Dams)
  // --------------------------------------------------------------------------
  {
    id: 'era_2000_bc',
    order: 5,
    dateRange: '~2,000 BC',
    dateRangeTe: 'క్రీ.పూ. ~2,000',
    titleTe: 'ప్రాచీన జలనిర్వహణ, రాతి డ్యామ్‌లు & కాలువల నిర్మాణం',
    titleEn: 'Ancient Hydraulic Engineering, Dams & Water Storage Systems',
    subtitleTe: 'వ్యవసాయానికి నీటి నిల్వ కొరకు రాతి ఆనకట్టలు • ధోలవీరాలో 16 బృహత్ రాతి రిజర్వాయర్లు • సరస్వతీ-సింధు నదీ కాలువలు',
    subtitleEn: 'Massive stone dams for irrigation • 16 cascading stone reservoirs at Dholavira • Saraswati-Indus water canals',
    badgeTe: '2,000 BC • జల సాంకేతికత',
    badgeEn: '2,000 BC • Water Technology',
    accentColor: '#0284C7',
    borderColor: 'border-[#0284C7]',
    bgGradient: 'from-[#FFFDF7] via-[#E0F2FE] to-[#BAE6FD]/30',
    icon: '🌊',
    shortSummaryTe: 'వ్యవసాయ సాగునీరు మరియు వరద నియంత్రణ కొరకు రాతి డ్యామ్‌లు, నదీకాలువలు, నీటి నిల్వ రిజర్వాయర్ల నిర్మాణం. గుజరాత్‌లోని ధోలవీరాలో 16 బృహత్ రాతి రిజర్వాయర్లతో కూడిన ప్రపంచ ప్రసిద్ధ వాటర్ హార్వెస్టింగ్ వ్యవస్థ వెలుగుచూసింది.',
    shortSummaryEn: 'Civil engineers constructed massive stone dams, river canals, and storage reservoirs for irrigation and drought mitigation. Dholavira in Gujarat revealed a world-renowned urban network of 16 interconnected stone reservoirs.',
    astronomicalDatingTe: 'క్రీ.పూ. 2000 ప్రాంతంలో రుతుపవనాల క్షీణత మరియు సరస్వతీ నదీ ప్రవాహం క్షీణించడం ప్రారంభమైనట్లు ప్రాచీన వైదిక జల ప్రార్థనలు మరియు పాలియో-క్లైమేటాలజీ నిర్ధారించాయి.',
    astronomicalDatingEn: 'Paleo-climatological and astronomical observations confirm monsoonal shifts around 2,000 BC, spurring sophisticated water retention and reservoir construction across northwestern India.',
    archaeologicalEvidenceTe: 'ధోలవీరా (Dholavira, కచ్) వద్ద కనుగొన్న భారీ రాతి ఆనకట్టలు, సున్నపురాయితో నిర్మించిన కాలువలు, మరియు బలూచిస్తాన్ వద్ద ఉన్న గబర్బంద్ (Gabarband) రాతి డ్యామ్ గోడలు ఈ కాలపు అద్భుత ఇంజనీరింగ్‌కు ప్రత్యక్ష సాక్ష్యాలు.',
    archaeologicalEvidenceEn: 'Dholavira excavations unearth 16 monumental stone-cut reservoirs storing over 250,000 cubic meters of water, alongside stone-masonry check dams and canals at Gabarband.',
    societalNormsTe: [
      'జల సంపదను సమష్టి సమాజ బాధ్యతగా మరియు దివ్యమైనదిగా భావించారు (ఆపః సూక్తం).',
      'పట్టణ ప్రణాళికలో నీటి నిల్వ వ్యవస్థలు మరియు స్నానశాలలు అంతర్భాగంగా మారాయి.',
      'నదీ తీరాల నుండి వ్యవసాయ ఆధారిత విస్తృత పంట సాగు పద్ధతులు అభివృద్ధి చెందాయి.'
    ],
    societalNormsEn: [
      'Water was consecrated as divine in Vedic hymns (Apah Sukta) and conserved collectively.',
      'Urban civil design integrated water storage and drainage seamlessly into municipal governance.',
      'Agricultural communities expanded multi-cropping networks supported by reservoir canals.'
    ],
    keyFiguresTe: [
      'సరస్వతీ లోయ ఇంజనీర్లు & శిల్పులు',
      'ధోలవీరా మరియు లోథాల్ నగర పాలకులు',
      'ప్రాచీన స్థపతులు మరియు జలశాస్త్రజ్ఞులు'
    ],
    keyFiguresEn: [
      'Saraswati-Indus Master Masons & Hydraulic Engineers',
      'Civic Rulers of Dholavira, Lothal and Kalibangan',
      'Ancient Sthapatis (Architects) and Hydrologists'
    ],
    milestoneEventsTe: [
      'డ్యామ్‌ల నిర్మాణం: సాగునీరు మరియు తాగునీటి నిల్వ కొరకు భారతదేశంలో తొలిసారిగా భారీ రాతి ఆనకట్టలు మరియు బ్యారేజీల నిర్మాణం.',
      'ధోలవీరా రిజర్వాయర్ల నెట్‌వర్క్: కొండ చరియల నుండి వర్షపు నీటిని ఒడిసిపట్టి 16 అనుసంధానిత రాతి కొలనులలో దాచే వ్యవస్థ.',
      'నదీ మళ్లింపు: కాలువల ద్వారా వరద నీటిని పొలాలకు మళ్లించే ప్రాచీన జలనిర్వహణ విప్లవం.'
    ],
    milestoneEventsEn: [
      'Dams are built for water storage and irrigation across northwest and central India.',
      'Construction of Dholavira\'s 16 interconnected stone reservoirs with settling basins.',
      'River-water harvesting and canal engineering mitigating dry seasons and climatic aridification.'
    ],
    scripturalReferencesTe: [
      'ఋగ్వేద ఆపః సూక్తము (10.9) • జలస్తుతి',
      'శుక్ల యజుర్వేద శాంతి మంత్రములు',
      'ప్రాచీన శిల్పశాస్త్రములు & జలప్రబంధ గ్రంథములు'
    ],
    scripturalReferencesEn: [
      'Rigveda Apah Suktam (10.9) • Praise of Waters',
      'Yajurveda Shanti Mantras for natural balance',
      'Ancient Shilpa Shastra & Vastu treaties on waterbodies'
    ],
    sourceReference: "Vedic-Ramayan Research by Dr. P.V. Vartak & Archaeological Survey of India (Dholavira)",
    timelineMilestones: [
      {
        yearBCE: '~ 2000 BCE',
        yearEn: '~ 2000 BCE',
        yearTe: 'క్రీ.పూ. ~2,000',
        eventEn: 'Dams Built for Water Storage & Irrigation',
        eventTe: 'నీటి నిల్వ మరియు సాగు కొరకు ప్రాచీన రాతి డ్యామ్‌ల నిర్మాణం',
        detailsEn: 'Engineers across Dholavira and the Saraswati-Indus basin constructed massive stone dams and 16 cascading reservoirs.',
        detailsTe: 'ధోలవీరా మరియు సరస్వతీ-సింధు లోయలో వ్యవసాయం కొరకు రాతి డ్యామ్‌లు, కాలువలు, మరియు 16 బృహత్ రిజర్వాయర్లు నిర్మించబడ్డాయి.',
        icon: '🌊',
        category: 'invasion_empire'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 6: ~500 BC (1,500 – 500 BC) - Samhitas, Upanishads, Buddha, Mahavira, Vyasa
  // --------------------------------------------------------------------------
  {
    id: 'era_1500_500_bc',
    order: 6,
    dateRange: '~500 BC (1500–500 BCE)',
    dateRangeTe: 'క్రీ.పూ. ~500 (1500–500)',
    titleTe: 'చతుర్వేద సంహితలు, ఉపనిషత్తులు & బుద్ధుడు-మహావీరుల యుగం',
    titleEn: 'Vedic Samhitas, Upanishads & Spiritual Renaissance (Buddha & Mahavira)',
    subtitleTe: 'ఋగ్వేదం (<1500 BCE) • యజుర్, సామ, అథర్వణ (<900 BCE) • ఉపనిషత్తులు (<650 BCE) • బుద్ధుని నిర్యాణం (483 BCE) • మహావీరుడు (468 BCE) • మహాభారత గ్రంథస్థం (400 BCE) • ధర్మ సూత్రాలు (~300 BCE)',
    subtitleEn: 'Rigveda (<1500 BCE) • Later Vedas (<900 BCE) • Upanishads (<650 BCE) • Nirvana of Buddha (483 BCE) & Mahavira (468 BCE) • Vyasa\'s Mahabharata (400 BCE) • Dharma Sutras (~300 BCE)',
    badgeTe: '500 BC • తాత్విక విప్లవం',
    badgeEn: '500 BC • Spiritual Era',
    accentColor: '#9333EA',
    borderColor: 'border-[#9333EA]',
    bgGradient: 'from-[#FFFDF7] via-[#F3E8FF] to-[#E9D5FF]/30',
    icon: '🪷',
    shortSummaryTe: 'వేదాల ప్రామాణిక సంకలనం, ఉపనిషత్తుల గంభీర తాత్విక చింతన, గౌతమ బుద్ధుడు మరియు వర్ధమాన మహావీరుల ఆధ్యాత్మిక విప్లవం. రాతియుగ ఆచారాల నుండి అహింస, సత్యం, ధర్మ సూత్రాలు మరియు సంస్కృత గ్రంథాల ప్రామాణిక రూపం ఈ యుగంలో పరిపూర్ణమయ్యాయి.',
    shortSummaryEn: 'A golden epoch of deep metaphysical philosophy and ethical renaissance. Saw the codification of the 4 Vedas, early Upanishadic wisdom, the parinirvana of Gautama Buddha and Mahavira, Vyasa\'s monumental Mahabharata, and foundational Dharma Sutras.',
    astronomicalDatingTe: 'బౌద్ధ గ్రంథాలలో నమోదైన వైశాఖ పూర్ణిమ ఖగోళ స్థితులు మరియు సమకాలీన మగధ గ్రహణ రికార్డులు గౌతమ బుద్ధుని మహా పరినిర్వాణాన్ని క్రీ.పూ. 483 నాటిగా ఖచ్చితంగా స్థిరపరిచాయి.',
    astronomicalDatingEn: 'Planetary alignments and lunar eclipse records during Vaishakha Purnima in Pali canon and Magadha chronicles confirm the Parinirvana of Gautama Buddha at 483 BCE and Mahavira at 468 BCE.',
    archaeologicalEvidenceTe: 'కౌశాంబి, ఉజ్జయిని, రాజగృహ, వైశాలి మరియు సారనాథ్‌లలో లభించిన నార్తర్న్ బ్లాక్ పాలిష్డ్ వేర్ (NBPW), ఇనుప నాణాలు (Punch-marked coins), మరియు బౌద్ధ స్తూపాల పునాదులు ఈ కాలానికి బలమైన చారిత్రక ఆధారాలు.',
    archaeologicalEvidenceEn: 'Northern Black Polished Ware (NBPW), early punch-marked silver coins, and pre-Ashokan stupa strata at Rajgir, Vaishali, and Sarnath substantiate this vibrant era.',
    societalNormsTe: [
      'అహింస, కరుణ, మానవ సమానత్వం అత్యున్నత సామాజిక విలువలయ్యాయి.',
      'ఉపనిషత్తుల జ్ఞానకాండ బ్రాహ్మణ ఆధిపత్య కర్మకాండలను అధిగమించి ఆత్మ విచారణను ప్రాచుర్యంలోకి తెచ్చింది.',
      'మహాజనపదాల నగరాలలో వర్తక శ్రేణులు (Guilds) మరియు గణతంత్ర రాజ్యాలు (Republics) వర్ధిల్లాయి.'
    ],
    societalNormsEn: [
      'Ahimsa (non-violence), universal compassion, and ethical living became paramount virtues.',
      'Upanishadic Jnana Kanda prioritized direct self-realization (Atman/Brahman) over ritualism.',
      'Urban merchant guilds (Shrenis) and democratic tribal republics (Ganasanghas) flourished.'
    ],
    keyFiguresTe: [
      'గౌతమ బుద్ధుడు (శాక్యముని, బౌద్ధ ధర్మ స్థాపకుడు - నిర్యాణం 483 BCE)',
      'వర్ధమాన మహావీరుడు (24వ జైన తీర్థంకరుడు - నిర్యాణం 468 BCE)',
      'మహర్షి వేదవ్యాసుడు (మహాభారత కర్త 400 BCE)',
      'ఆపస్తంబ, గౌతమ, బౌధాయన (ధర్మ సూత్రాల కర్తలు ~300 BCE)',
      'బింబిసారుడు & అజాతశత్రు (హర్యాంక వంశం, మగధ)'
    ],
    keyFiguresEn: [
      'Gautama Buddha (The Enlightened One - Parinirvana 483 BCE)',
      'Vardhamana Mahavira (24th Tirthankara of Jainism - Nirvana 468 BCE)',
      'Maharshi Veda Vyasa (Composer of Mahabharata 400 BCE)',
      'Apastamba, Gautama & Baudhayana (Authors of Dharma Sutras ~300 BCE)',
      'King Bimbisara & Ajatashatru of Magadha'
    ],
    milestoneEventsTe: [
      '< 1500 BCE: ఋగ్వేద సంహితల ప్రామాణిక కూర్పు.',
      '< 900 BCE: యజుర్వేదం, సామవేదం, అథర్వణవేద సంహితల సంకలనం.',
      '< 650 BCE: బృహదారణ్యక, ఛాందోగ్య మొదలైన ప్రాచీన వేదాంత ఉపనిషత్తుల ఆవిర్భావం.',
      '483 BCE: గౌతమ బుద్ధుని మహా పరినిర్వాణం (కుశీనగరం).',
      '468 BCE: వర్ధమాన మహావీరుని నిర్వాణం (పావాపురి).',
      '400 BCE: మహర్షి వేదవ్యాసునిచే మహాభారత గ్రంథ ప్రమాణీకరణ.',
      '~ 300 BCE: ఆపస్తంబ, గౌతమ, బౌధాయన ధర్మ సూత్రాల కూర్పు.'
    ],
    milestoneEventsEn: [
      '< 1500 BCE: Rig Veda is composed and standardized into 10 Mandalas.',
      '< 900 BCE: Yajur, Atharva and Sama Veda Samhitas codified.',
      '< 650 BCE: Early philosophical Upanishads composed (Brihadaranyaka, Chandogya).',
      '483 BCE: Mahaparinirvana of Gautama Buddha at Kushinagar.',
      '468 BCE: Nirvana of Bhagavan Mahavira at Pavapuri.',
      '400 BCE: Mahabharata epic composed and standardized by Sage Vyasa.',
      '~ 300 BCE: Foundational Dharma Sutras compiled across Vedic schools.'
    ],
    scripturalReferencesTe: [
      'చతుర్వేద సంహితలు & ప్రధాన 10 ఉపనిషత్తులు',
      'బౌద్ధ త్రిపీటకములు (వినయ, సుత్త, అభిధమ్మ పిటకాలు)',
      'జైన ఆగమములు & ద్వాదశాంగములు',
      'మహాభారతం & ఆపస్తంబ ధర్మసూత్రములు'
    ],
    scripturalReferencesEn: [
      'The 4 Vedic Samhitas & Mukhya Upanishads',
      'Buddhist Tipitaka (Vinaya, Sutta, Abhidhamma)',
      'Jain Agamas and Angas',
      'Vyasa Mahabharata & Apastamba Dharma Sutras'
    ],
    sourceReference: "Historical Timeline Slides, Archaeological Survey of India & Epigraphical Records",
    timelineMilestones: [
      {
        yearBCE: '< 1500 BCE',
        yearEn: '< 1500 BCE',
        yearTe: 'క్రీ.పూ. 1500 కంటే పూర్వం',
        eventEn: 'Rig Veda is Composed',
        eventTe: 'ఋగ్వేదం సంకలనం చేయబడింది',
        detailsEn: 'Earliest sacred hymns of Rig Veda compiled across Sapta-Sindhu.',
        detailsTe: 'సప్తసింధు తీరాలలో ఋగ్వేద సూక్తాల సంకలనం.',
        icon: '📜',
        category: 'veda'
      },
      {
        yearBCE: '< 900 BCE',
        yearEn: '< 900 BCE',
        yearTe: 'క్రీ.పూ. 900 కంటే పూర్వం',
        eventEn: 'Yajur, Atharva and Sama Veda',
        eventTe: 'యజుర్, అథర్వణ & సామ వేదాల కూర్పు',
        detailsEn: 'The remaining 3 Vedas structured for ritual yajnas, melodies, and sciences.',
        detailsTe: 'యజ్ఞ విధానాలు, సంగీతం మరియు విజ్ఞాన సంబంధిత 3 వేదాల క్రోడీకరణ.',
        icon: '🕉️',
        category: 'veda'
      },
      {
        yearBCE: '< 650 BCE',
        yearEn: '< 650 BCE',
        yearTe: 'క్రీ.పూ. 650 కంటే పూర్వం',
        eventEn: 'Early Upanishads Composed',
        eventTe: 'తొలి వేదాంత ఉపనిషత్తుల రచన',
        detailsEn: 'Brihadaranyaka, Chandogya, and Katha Upanishads ushering in non-dual philosophy.',
        detailsTe: 'బృహదారణ్యక, ఛాందోగ్య తదితర తొలి తాత్విక ఉపనిషత్తుల ఆవిర్భావం.',
        icon: '🪷',
        category: 'veda'
      },
      {
        yearBCE: '483 BCE',
        yearEn: '483 BCE',
        yearTe: 'క్రీ.పూ. 483',
        eventEn: 'Death of Gautama, The Buddha',
        eventTe: 'గౌతమ బుద్ధుని మహా పరినిర్వాణం',
        detailsEn: 'Siddhartha Gautama Buddha attained Mahaparinirvana at Kushinagar at age 80.',
        detailsTe: 'కుశీనగరంలో 80వ ఏట గౌతమ బుద్ధుని నిర్యాణం.',
        icon: '☸️',
        category: 'buddhism_jainism'
      },
      {
        yearBCE: '468 BCE',
        yearEn: '468 BCE',
        yearTe: 'క్రీ.పూ. 468',
        eventEn: 'Death of Mahavira',
        eventTe: 'వర్ధమాన మహావీరుని నిర్వాణం',
        detailsEn: '24th Tirthankara Vardhamana Mahavira attained Nirvana at Pavapuri at age 72.',
        detailsTe: 'పావాపురిలో 72వ ఏట 24వ జైన తీర్థంకరుడు వర్ధమాన మహావీరుని నిర్వాణం.',
        icon: '✨',
        category: 'buddhism_jainism'
      },
      {
        yearBCE: '400 BCE',
        yearEn: '400 BCE',
        yearTe: 'క్రీ.పూ. 400',
        eventEn: 'Mahabharata Composed by Vyasa',
        eventTe: 'వేదవ్యాసునిచే మహాభారత గ్రంథ రచన & సంకలనం',
        detailsEn: 'Sage Veda Vyasa and disciples formalized the 100,000-verse epic text.',
        detailsTe: 'మహర్షి వేదవ్యాస ప్రోక్త మహాభారత శ్లోక సంపుటి శాశ్వత ప్రమాణీకరణ.',
        icon: '⚔️',
        category: 'epic'
      },
      {
        yearBCE: '~ 300 BCE',
        yearEn: '~ 300 BCE',
        yearTe: 'క్రీ.పూ. ~300',
        eventEn: 'Dharma Sutras Composed',
        eventTe: 'ధర్మ సూత్రాల కూర్పు',
        detailsEn: 'Foundational legal and ethical treatises (Apastamba, Gautama, Baudhayana) drafted.',
        detailsTe: 'ఆపస్తంబ, గౌతమ, బౌధాయన ధర్మసూత్రాల ద్వారా సామాజిక-నైతిక విధివిధానాల క్రోడీకరణ.',
        icon: '⚖️',
        category: 'law'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 7: ~330 – 232 BC - Maurya Empire, Alexander, Chanakya, Ashoka
  // --------------------------------------------------------------------------
  {
    id: 'era_330_232_bc',
    order: 7,
    dateRange: '~330 – 232 BC',
    dateRangeTe: 'క్రీ.పూ. ~330 – 232',
    titleTe: 'మౌర్య సామ్రాజ్యం, గ్రీకు దండయాత్రలు, చాణక్యుడు & అశోక చక్రవర్తి',
    titleEn: 'Mauryan Empire, Greek Invasions, Chanakya & Emperor Ashoka',
    subtitleTe: 'అలెగ్జాండర్ & గ్రీకు దండయాత్రలు (325–25 BCE) • చంద్రగుప్తుని పట్టాభిషేకం & చాణక్యుడు (324 BCE) • అశోకుని పాలన (265–232 BCE) • మెగస్తనీస్ గ్రంథం',
    subtitleEn: 'Alexander\'s Invasions (325–25 BCE) • Chandragupta & Chanakya (324 BCE) • Ashoka\'s Reign (265–232 BCE) • Megasthenes Records 138 Kings',
    badgeTe: '330 BC • మౌర్య సామ్రాజ్యం',
    badgeEn: '330 BC • Imperial Era',
    accentColor: '#059669',
    borderColor: 'border-[#059669]',
    bgGradient: 'from-[#FFFDF7] via-[#ECFDF5] to-[#D1FAE5]/30',
    icon: '🏛️',
    shortSummaryTe: 'అఖండ భారత తొలి సమైక్య సామ్రాజ్య స్థాపన. అలెగ్జాండర్ దాడిని తిప్పికొట్టి, చాణక్యుని మార్గదర్శకత్వంలో చంద్రగుప్త మౌర్యుడు పాటలీపుత్రంలో చక్రవర్తిగా పట్టాభిషిక్తుడయ్యాడు. గ్రీకు రాయబారి మెగస్తనీస్ శ్రీకృష్ణుని నుండి చంద్రగుప్తుని వరకు 138 తరాల రాజుల రికార్డును నమోదు చేశారు. చక్రవర్తి అశోకుని ధర్మ పరిపాలన ప్రపంచవ్యాప్తమైంది.',
    shortSummaryEn: 'The first continental unification of India. Following Alexander\'s campaign, Chandragupta Maurya and Chanakya founded the Mauryan Empire at Pataliputra. Greek Ambassador Megasthenes recorded 138 kings descending since Sri Krishna. Emperor Ashoka unified the subcontinent under Dhamma.',
    astronomicalDatingTe: 'క్రీ.పూ. 326 లో జీలం నదీ తీరాన అలెగ్జాండర్-పోరస్ యుద్ధ ఖగోళ ఆధారాలు మరియు క్రీ.పూ. 324 నాటి చంద్రగుప్తుని పట్టాభిషేక కాలం గ్రీకు మరియు భారతీయ శాసనాల ద్వారా సమన్వయించబడింది.',
    astronomicalDatingEn: 'Greco-Roman historical synchronisms (Seleucus Nicator, Ptolemy) and Ashokan rock edict planetary dates firmly synchronize 325–25 BCE invasions, Chandragupta\'s coronation in 324 BCE, and Ashoka\'s reign in 265–232 BCE.',
    archaeologicalEvidenceTe: 'సారనాథ్ అశోక సింహ స్తంభం (భారత జాతీయ చిహ్నం), రుమ్మిందేయి, గిర్నార్, ధౌలి, బ్రహ్మగిరి బండరాతి శాసనాలు (Edicts of Ashoka) మరియు పాటలీపుత్రంలో లభించిన మౌర్య రాతి స్తంభాల రాజప్రాసాదం.',
    archaeologicalEvidenceEn: 'The Ashokan Lion Capital at Sarnath, bilingual Greek-Aramaic edicts at Kandahar, rock edicts at Girnar and Dhauli, and the 80-pillared Mauryan hypostyle hall at Kumrahar (Pataliputra).',
    societalNormsTe: [
      'కౌటిల్యుని అర్థశాస్త్రం ఆధారంగా అత్యంత సమర్థవంతమైన కేంద్రీకృత పౌర పాలన.',
      'అశోకుని ధర్మం (ధమ్మం): జంతుబలి నిషేధం, శాకాహారం, వైద్యశాలలు, దయాగుణం.',
      'భారతదేశం నుండి శ్రీలంక, గ్రీస్, ఈజిప్ట్, సిరియాలకు దౌత్య మరియు సాంస్కృతిక బృందాల పంపకం.'
    ],
    societalNormsEn: [
      'Rigorous civic and economic administration codified in Kautilya\'s Arthashastra.',
      'Ashoka\'s Dhamma: Moral governance, hospitals for humans & animals, non-violence.',
      'Diplomatic and cultural missions dispatched to Sri Lanka, Greece, Egypt, and Syria.'
    ],
    keyFiguresTe: [
      'చంద్రగుప్త మౌర్యుడు (శ్రీకృష్ణుని నుండి 138వ చక్రవర్తి, సామ్రాజ్య స్థాపకుడు 324 BCE)',
      'ఆచార్య చాణక్యుడు / కౌటిల్యుడు (అర్థశాస్త్ర కర్త, రాజనీతిజ్ఞుడు)',
      'అలెగ్జాండర్ ది గ్రేట్ (గ్రీకు దండయాత్ర 325 BCE) & సెల్యూకస్ నికేటర్',
      'మెగస్తనీస్ (గ్రీకు రాయబారి, "ఇండికా" గ్రంథ రచయిత)',
      'అశోక చక్రవర్తి (దేవానాంప్రియ ప్రియదర్శి - పాలన 265–232 BCE)'
    ],
    keyFiguresEn: [
      'Chandragupta Maurya (138th King since Sri Krishna, Empire Founder 324 BCE)',
      'Acharya Chanakya / Kautilya (Author of Arthashastra, Prime Minister)',
      'Alexander the Great (Greek Invasions 325 BCE) & Seleucus I Nicator',
      'Megasthenes (Greek Ambassador to Pataliputra, Author of "Indica")',
      'Emperor Ashoka the Great (Reign 265–232 BCE, Architect of Dhamma)'
    ],
    milestoneEventsTe: [
      '325 – 25 BCE: అలెగ్జాండర్ భారత దండయాత్ర (326/325 BCE) మరియు ఇండో-గ్రీక్ సంపర్కం.',
      '324 BCE: పాటలీపుత్రంలో చంద్రగుప్త మౌర్యుని పట్టాభిషేకం • చాణక్యుని రాజనీతి.',
      '~ 300 BCE: మెగస్తనీస్ గ్రీకు రాయబారి పాటలీపుత్రంలో ఉంటూ, శ్రీకృష్ణుని నుండి చంద్రగుప్తుని వరకు 138 మంది రాజుల రికార్డును ధ్రువీకరించడం.',
      '265 – 232 BCE: చక్రవర్తి అశోకుని సువర్ణ పాలన • కళింగ యుద్ధం అనంతరం ధర్మవిజయ ప్రస్థానం • 84,000 స్తూపాలు & స్తంభ శాసనాలు.'
    ],
    milestoneEventsEn: [
      '325 – 25 BCE: Alexander the Great campaigns in northwest India (326/325 BCE) followed by Indo-Greek kingdoms.',
      '324 BCE: Chandragupta Maurya ascends the throne at Pataliputra with mentor Chanakya.',
      '~ 300 BCE: Greek Ambassador Megasthenes records 138 kings reigning from Sri Krishna to Chandragupta Maurya.',
      '265 – 232 BCE: Golden reign of Emperor Ashoka; renunciation of war, rock edicts, and propagation of Dhamma worldwide.'
    ],
    scripturalReferencesTe: [
      'కౌటిల్యుని అర్థశాస్త్రము',
      'మెగస్తనీస్ "ఇండికా" (గ్రీకు చారిత్రక రికార్డు)',
      'అశోకుని 14 ముఖ్య శిలాశాసనాలు & 7 స్తంభ శాసనాలు',
      'దీపవంశము & మహావంశము (సింహళ బౌద్ధ గ్రంథాలు)'
    ],
    scripturalReferencesEn: [
      'Kautilya\'s Arthashastra',
      'Megasthenes\' "Indica" (Fragmentary Greek Historical Record)',
      'Ashoka\'s Major Rock Edicts (1–14) & Pillar Inscriptions (1–7)',
      'Dipavamsa and Mahavamsa Chronicles'
    ],
    sourceReference: "Historical Timeline Slides, Ashokan Epigraphs & Megasthenes' Indica",
    timelineMilestones: [
      {
        yearBCE: '325 – 25 BCE',
        yearEn: '325 – 25 BCE',
        yearTe: 'క్రీ.పూ. 325 – 25',
        eventEn: 'Alexander & Greek Invasions',
        eventTe: 'అలెగ్జాండర్ & గ్రీకు దండయాత్రలు',
        detailsEn: 'Alexander invaded northwest India in 326/325 BCE, followed by Indo-Greek Hellenistic kingdoms.',
        detailsTe: 'అలెగ్జాండర్ దండయాత్ర మరియు తర్వాతి ఇండో-గ్రీక్ రాజ్యాల సాంస్కృతిక సంపర్కం.',
        icon: '🛡️',
        category: 'invasion_empire'
      },
      {
        yearBCE: '324 BCE',
        yearEn: '324 BCE',
        yearTe: 'క్రీ.పూ. 324',
        eventEn: 'Chandragupta Maurya Ascends. Chanakya',
        eventTe: 'చంద్రగుప్త మౌర్యుని పట్టాభిషేకం • చాణక్యుడు',
        detailsEn: 'Chandragupta overthrew Nanda rule with Chanakya and established the Mauryan Empire.',
        detailsTe: 'చాణక్యుని మార్గదర్శకత్వంలో చంద్రగుప్తుడు మౌర్య సామ్రాజ్యాన్ని స్థాపించెను.',
        icon: '👑',
        category: 'invasion_empire'
      },
      {
        yearBCE: '265 – 232 BCE',
        yearEn: '265 – 232 BCE',
        yearTe: 'క్రీ.పూ. 265 – 232',
        eventEn: 'Ashoka Reigns',
        eventTe: 'అశోక చక్రవర్తి సువర్ణ పాలన',
        detailsEn: 'Emperor Ashoka ruled the subcontinent, embraced Dhamma after Kalinga, and erected rock edicts.',
        detailsTe: 'అశోకుని ధర్మ పరిపాలన, కళింగ పరివర్తన మరియు శాశ్వత శిలాశాసనాల నిర్మాణం.',
        icon: '🦁',
        category: 'invasion_empire'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 8: 200 BCE – 200 CE (Classical Epics & Valmiki Ramayana Written Recension)
  // --------------------------------------------------------------------------
  {
    id: 'era_200bc_200ce',
    order: 8,
    dateRange: '200 BCE – 200 CE',
    dateRangeTe: 'క్రీ.పూ. 200 – క్రీ.శ. 200',
    titleTe: 'శాస్త్రీయ ఇతిహాస గ్రంథస్థ యుగము (వాల్మీకి రామాయణం)',
    titleEn: 'Classical Epics & Textual Tradition: Valmiki Ramayana Written Recension',
    subtitleTe: 'వాల్మీకి రామాయణ శ్లోక సంపుటి శాశ్వత గ్రంథస్థం (200 BCE – 200 CE) • శాతవాహన, శుంగ రాజ్యాలు • సంస్కృత మహాకావ్యాలు',
    subtitleEn: 'Valmiki Ramayana Written Textual Redaction (200 BCE – 200 CE) • Shunga & Satavahana Dynasties • Sanskrit Grammatical Renaissance',
    badgeTe: '200 BCE–200 CE • ఇతిహాస గ్రంథస్థం',
    badgeEn: '200 BCE–200 CE • Epics Era',
    accentColor: '#B45309',
    borderColor: 'border-[#B45309]',
    bgGradient: 'from-[#FFFDF7] via-[#FEF3C7] to-[#FDE68A]/30',
    icon: '📜',
    shortSummaryTe: 'మౌఖికంగా పరంపరాగతంగా వచ్చిన వాల్మీకి రామాయణం మరియు మహాభారత గ్రంథాలు తాళపత్రాలపై శాశ్వత శ్లోక సంపుటులుగా లిఖితబద్ధమైన సువర్ణ కాలం. మౌర్యోత్తర కాలంలో శుంగులు, శాతవాహనులు, కుషాణులు సంస్కృత సాహిత్యానికి, కళలకు విశేష ఆదరణ కల్పించారు.',
    shortSummaryEn: 'The monumental era of classical textual compilation where the orally transmitted Valmiki Ramayana and epics were meticulously penned down into definitive manuscript recensions. Post-Mauryan kingdoms (Shungas, Satavahanas, Kushans) sponsored a grand renaissance of Sanskrit poetics and grammar.',
    astronomicalDatingTe: 'వాల్మీకి రామాయణంలోని శ్లోక రీతులు మరియు పతంజలి మహాభాష్య కాల నిర్ధారణలు క్రీ.పూ. 200 నుండి క్రీ.శ. 200 మధ్య ప్రామాణిక లిఖిత ప్రతుల వ్యాప్తిని ధ్రువీకరిస్తున్నాయి.',
    astronomicalDatingEn: 'Linguistic, metrical analysis and Patanjali\'s Mahabhasya references firmly place the wide textual formalization and manuscript transcription of the Ramayana within 200 BCE – 200 CE.',
    archaeologicalEvidenceTe: 'హెలియోడోరస్ గరుడ స్తంభం (విదిశ, క్రీ.పూ. 113), అమరావతి బౌద్ధ శిల్పాలు, కార్లే మరియు భజా గుహ శాసనాలు, శాతవాహనుల నాణేలు ఈ యుగానికి సజీవ సాక్ష్యాలు.',
    archaeologicalEvidenceEn: 'The Heliodorus Pillar inscription at Vidisha (113 BCE) venerating Vasudeva, Amaravati sculptures, and Satavahana inscriptions across Maharashtra and Andhra.',
    societalNormsTe: [
      'సంస్కృతం రాజభాషగా మరియు మహాకావ్య భాషగా విశ్వవ్యాప్త గౌరవం పొందింది.',
      'దక్షిణాన శాతవాహనుల కాలంలో వేద యజ్ఞాలు మరియు బౌద్ధ చైత్యాలు రెండూ సమానంగా ఆదరించబడ్డాయి.',
      'గురుకుల విద్యా విధానంలో ఇతిహాసాలు, పురాణాలు విద్యార్థులకు నిత్య పాఠ్యాంశాలుగా మారాయి.'
    ],
    societalNormsEn: [
      'Classical Sanskrit flourished as the premier language of royal courts and epic literature.',
      'The Satavahanas in Deccan patronized both Vedic yajnas and Buddhist rock-cut monasteries.',
      'Epics became central to family, ethical upbringing, and temple performing arts.'
    ],
    keyFiguresTe: [
      'మహర్షి వాల్మీకి (ఆదికవి, రామాయణ ప్రవక్త)',
      'మహర్షి పతంజలి (మహాభాష్య కర్త, యోగ సూత్రాలు)',
      'పుష్యమిత్ర శుంగుడు (శుంగ వంశ స్థాపకుడు)',
      'గౌతమీపుత్ర శాతకర్ణి (శాతవాహన చక్రవర్తి)',
      'కనిష్కుడు (కుషాణ చక్రవర్తి)'
    ],
    keyFiguresEn: [
      'Maharshi Valmiki (The Adi Kavi, immortal author of Ramayana)',
      'Maharshi Patanjali (Author of Mahabhasya on Panini Grammar & Yoga Sutras)',
      'Pushyamitra Shunga (Founder of Shunga Dynasty)',
      'Gautamiputra Satakarni (Greatest Satavahana Ruler)',
      'Kanishka the Great (Kushan Emperor)'
    ],
    milestoneEventsTe: [
      '200 BCE – 200 CE: వాల్మీకి రామాయణ శ్లోక సంపుటి శాశ్వత గ్రంథస్థ రూపం మరియు ప్రతుల వ్యాప్తి.',
      'క్రీ.పూ. 185: మౌర్యానంతర శుంగ వంశ స్థాపన మరియు వేద యజ్ఞాల పునరుద్ధరణ.',
      'క్రీ.పూ. 1వ శతాబ్దం: దక్కన్‌లో శాతవాహన సామ్రాజ్య విజృంభణ మరియు అమరావతి శిల్పకళా వికాసం.'
    ],
    milestoneEventsEn: [
      '200 BCE – 200 CE: Valmiki Ramayana written down into permanent manuscript recensions.',
      '185 BCE: Establishment of Shunga dynasty and patronage of Vedic ceremonies.',
      '1st Century BCE: Rise of Satavahana Empire in Deccan and flowering of Amaravati stupa art.'
    ],
    scripturalReferencesTe: [
      'వాల్మీకి రామాయణము (బాలకాండ నుండి ఉత్తరకాండ వరకు)',
      'పతంజలి మహాభాష్యము',
      'మనుస్మృతి ప్రామాణిక ప్రతులు',
      'హెలియోడోరస్ గరుడధ్వజ శాసనం (విదిశ)'
    ],
    scripturalReferencesEn: [
      'Valmiki Ramayana (All 7 Kandas in classical recension)',
      'Patanjali\'s Mahabhasya on Ashtadhyayi',
      'Manusmriti Classical Manuscripts',
      'Heliodorus Pillar Inscription (Vidisha)'
    ],
    sourceReference: "Historical Timeline Slides, Archaeological Survey of India & Oriental Institute Records",
    timelineMilestones: [
      {
        yearBCE: '200 BCE – 200 CE',
        yearEn: '200 BCE – 200 CE',
        yearTe: 'క్రీ.పూ. 200 – క్రీ.శ. 200',
        eventEn: 'Ramayana Written by Valmiki',
        eventTe: 'వాల్మీకి రామాయణం గ్రంథస్థం చేయబడింది',
        detailsEn: 'Classical textual redaction and permanent manuscript inscription of Sage Valmiki\'s 24,000-verse epic.',
        detailsTe: 'మహర్షి వాల్మీకి రచించిన 24,000 శ్లోకాల దివ్య రామాయణ మహాకావ్య గ్రంథస్థ ప్రతుల వ్యాప్తి.',
        icon: '📜',
        category: 'epic'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 9: 320 – 550 CE (Gupta Dynasty - The Classical Golden Age)
  // --------------------------------------------------------------------------
  {
    id: 'era_320_550_ce',
    order: 9,
    dateRange: '320 – 550 CE',
    dateRangeTe: 'క్రీ.శ. 320 – 550',
    titleTe: 'గుప్త సామ్రాజ్యము: ప్రాచీన భారతదేశ స్వర్ణయుగము',
    titleEn: 'Gupta Dynasty: The Classical Golden Age of India',
    subtitleTe: 'గుప్త వంశ స్థాపన (320 CE) • మొదటి చంద్రగుప్తుడు & విక్రమాదిత్యుడు • కాళిదాసు, ఆర్యభట్ట (సున్నా, దశాంశం) • నలంద విశ్వవిద్యాలయం',
    subtitleEn: 'Rise of Gupta Dynasty (320 CE) • Chandragupta I & Vikramaditya • Kalidasa, Aryabhata & Varahamihira • Flourishing of Mathematics, Astronomy & Nalanda',
    badgeTe: '320 CE • గుప్త స్వర్ణయుగం',
    badgeEn: '320 CE • Golden Age',
    accentColor: '#C2410C',
    borderColor: 'border-[#C2410C]',
    bgGradient: 'from-[#FFFDF7] via-[#FFEDD5] to-[#FED7AA]/30',
    icon: '👑',
    shortSummaryTe: 'భారతీయ విజ్ఞాన, శాస్త్ర, గణిత, కళా రంగాలలో మహోన్నత స్వర్ణయుగం. క్రీ.శ. 320 లో మొదటి చంద్రగుప్తునితో గుప్త సామ్రాజ్యం ఆరంభమైంది. ఆర్యభట్ట సున్నా (Zero) మరియు దశాంశ పద్ధతిని కనిపెట్టారు; భూమి సూర్యుని చుట్టూ తిరుగుతుందని నిరూపించారు. మహాకవి కాళిదాసు దివ్య నాటకాలు, నలంద విశ్వవిద్యాలయం ఈ యుగపు కీర్తి శిఖరాలు.',
    shortSummaryEn: 'The classical Golden Age of ancient India. Commencing in 320 CE under Chandragupta I, it produced extraordinary breakthroughs in mathematics, astronomy, and literature. Aryabhata formulated the decimal system, zero, and Earth\'s heliocentric rotation, while Kalidasa authored immortal Sanskrit poetry. Nalanda University welcomed scholars worldwide.',
    astronomicalDatingTe: 'క్రీ.శ. 319-320 లో ఆరంభమైన గుప్త శకం (Gupta Era) ఖగోళ గణనలు, మరియు ఆర్యభట్ట రచించిన ఆర్యభటీయంలో పేర్కొన్న కలియుగ 3600వ సంవత్సరం (క్రీ.శ. 499) ఖచ్చితమైన తేదీ ఆధారాలు.',
    astronomicalDatingEn: 'The commencement of the Gupta Era (319–320 CE) verified by Alberuni and Aryabhata\'s astronomical epoch calculation (Kaliyuga year 3600 = 499 CE when Aryabhata was 23 years old).',
    archaeologicalEvidenceTe: 'ఢిల్లీలోని మెహ్రౌలీ ఉక్కు స్తంభం (Iron Pillar - 1600 ఏళ్ళుగా తుప్పుపట్టని లోహశాస్త్ర అద్భుతం), అలహాబాద్ ప్రశస్తి శాసనం (సముద్రగుప్తుడు), మరియు అజంతా గుహల కుడ్యచిత్రాలు.',
    archaeologicalEvidenceEn: 'The rust-resistant Iron Pillar of Delhi (Mehrauli), the Allahabad Pillar Inscription of Samudragupta composed by Harishena, and the sublime frescoes of Ajanta Caves.',
    societalNormsTe: [
      'శాంతిభద్రతలు, సుపరిపాలనతో ప్రజలు పన్నుల భారం లేకుండా సుఖసంతోషాలతో జీవించారని చైనా యాత్రికుడు ఫాహియాన్ నమోదు చేశారు.',
      'సైన్స్, గణితం, లోహశాస్త్రం మరియు అంతర్జాతీయ సముద్ర వాణిజ్యం శిఖరాగ్రానికి చేరాయి.',
      'దేవాలయ నిర్మాణ వాస్తుకళ (శిఖర దేవాలయాలు) ఈ యుగంలోనే తొలిసారిగా రూపుదిద్దుకుంది.'
    ],
    societalNormsEn: [
      'Chinese pilgrim Faxian documented an exceptionally peaceful, tax-light society without capital punishment.',
      'Science, trigonometry, metallurgic smelting, and maritime trade reached unprecedented heights.',
      'Structural stone temple architecture (Nagara style with shikhara) was born.'
    ],
    keyFiguresTe: [
      'మొదటి చంద్రగుప్తుడు (గుప్త శక ఆరంభకుడు 320 CE)',
      'సముద్రగుప్తుడు (భారతీయ నెపోలియన్, దిగ్విజేత)',
      'రెండవ చంద్రగుప్తుడు విక్రమాదిత్యుడు (నవరత్నాల పోషకుడు)',
      'మహాకవి కాళిదాసు (అభిజ్ఞాన శాకుంతలము, మేఘదూతము)',
      'ఆర్యభట్ట (ఖగోళ-గణిత మేధావి - ఆర్యభటీయము 499 CE)',
      'వరాహమిహిరుడు (బృహత్సంహిత) & ధన్వంతరి (ఆయుర్వేదం)'
    ],
    keyFiguresEn: [
      'Chandragupta I (Founder of Gupta Era in 320 CE)',
      'Samudragupta (Universal conqueror and poet-king)',
      'Chandragupta II Vikramaditya (Patron of the Nine Gems)',
      'Mahakavi Kalidasa (Author of Abhijnanashakuntalam, Meghaduta)',
      'Aryabhata (Mathematician-Astronomer, Author of Aryabhatiya in 499 CE)',
      'Varahamihira (Brihat Samhita) & Dhanvantari (Ayurveda)'
    ],
    milestoneEventsTe: [
      '320 CE: మొదటి చంద్రగుప్తుని పట్టాభిషేకంతో గుప్త సామ్రాజ్య ఆవిర్భావం (గుప్త శకం ఆరంభం).',
      'క్రీ.శ. 375 – 415: విక్రమాదిత్యుని కొలువులో నవరత్నాలు మరియు సంస్కృత సాహిత్య స్వర్ణయుగం.',
      'క్రీ.శ. 499: ఆర్యభట్ట సున్నా (0), పై (π) విలువ (3.1416), మరియు భూభ్రమణాన్ని నిరూపించడం.',
      'క్రీ.శ. 5వ శతాబ్దం: నలంద బౌద్ధ విశ్వవిద్యాలయ స్థాపన (కుమారగుప్తుడు).'
    ],
    milestoneEventsEn: [
      '320 CE: Coronation of Chandragupta I establishing the Gupta Dynasty and Gupta Era calendar.',
      '375 – 415 CE: Golden court of Vikramaditya harboring the Navaratnas (Nine Gems).',
      '499 CE: Aryabhata perfects the zero/decimal system, calculates Pi to 4 places, and defines Earth\'s axial rotation.',
      '5th Century CE: Foundation of Nalanda Mahavihara University under Kumaragupta I.'
    ],
    scripturalReferencesTe: [
      'ఆర్యభటీయము & సూర్యసిద్ధాంతము',
      'కాళిదాస మహాకావ్యాలు (రఘువంశము, కుమారసంభవము)',
      'అలహాబాద్ ప్రశస్తి (హరిషేణుడు)',
      'ఫాహియాన్ యాత్రా చరిత్ర (ఫో-కువో-కి)'
    ],
    scripturalReferencesEn: [
      'Aryabhatiya & Surya Siddhanta',
      'Kalidasa\'s Epics (Raghuvamsha, Kumarasambhava)',
      'Allahabad Prashasti Inscription of Harishena',
      'Faxian\'s Travelogues ("Record of Buddhist Kingdoms")'
    ],
    sourceReference: "Historical Timeline Slides, Archaeological Survey of India & Gupta Epigraphy",
    timelineMilestones: [
      {
        yearBCE: '320 CE',
        yearEn: '320 CE',
        yearTe: 'క్రీ.శ. 320',
        eventEn: 'Gupta Dynasty Founded',
        eventTe: 'గుప్త సామ్రాజ్య స్థాపన',
        detailsEn: 'Chandragupta I ascended the throne, inaugurating the glorious Gupta Dynasty and Golden Age of India.',
        detailsTe: 'మొదటి చంద్రగుప్తుని పట్టాభిషేకంతో ప్రాచీన భారతదేశ స్వర్ణయుగమైన గుప్త సామ్రాజ్య స్థాపన జరిగింది.',
        icon: '👑',
        category: 'invasion_empire'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ERA 10: 788 – 820 CE (Age of Philosophers - Birth of Adi Shankaracharya)
  // --------------------------------------------------------------------------
  {
    id: 'era_788_ce',
    order: 10,
    dateRange: '788 – 820 CE',
    dateRangeTe: 'క్రీ.శ. 788 – 820',
    titleTe: 'తాత్విక పునరుజ్జీవన యుగము: జగద్గురు ఆది శంకరాచార్యుల ఆవిర్భావం',
    titleEn: 'Age of Philosophers: Birth of Jagadguru Adi Shankaracharya',
    subtitleTe: 'ఆది శంకరాచార్యుల దివ్య జననం (788 CE) • అద్వైత వేదాంత పునరుద్ధరణ • ప్రస్థానత్రయ భాష్యాలు • చతుర్ధామ పీఠాల స్థాపన',
    subtitleEn: 'Birth of Adi Shankara (788 CE) • Revival of Advaita Vedanta • Commentary on Prasthanatrayi • Establishment of 4 Amnaya Peethas across India',
    badgeTe: '788 CE • ఆది శంకరులు',
    badgeEn: '788 CE • Adi Shankara',
    accentColor: '#7C2D12',
    borderColor: 'border-[#7C2D12]',
    bgGradient: 'from-[#FFFDF7] via-[#FEF2F2] to-[#FEE2E2]/30',
    icon: '🚩',
    shortSummaryTe: 'సనాతన ధర్మాన్ని సమైక్యం చేసిన జగద్గురు ఆది శంకరాచార్యుల దివ్య ఆవిర్భావం. క్రీ.శ. 788 లో కేరళలోని కాలడి గ్రామంలో జన్మించి, 32 సంవత్సరాల అతి స్వల్ప జీవితంలో అఖండ భారతదేశాన్ని కాలినడకన పర్యటించి (దిగ్విజయం), అద్వైత వేదాంత సిద్ధాంతాన్ని ప్రతిష్టించారు. భారతదేశపు నాలుగు దిక్కులా 4 ఆమ్నాయ పీఠాలను స్థాపించి ధర్మాన్ని శాశ్వతం చేశారు.',
    shortSummaryEn: 'The supreme philosophical revival of Sanatana Dharma spearheaded by Jagadguru Adi Shankaracharya. Born in 788 CE at Kalady (Kerala), he completed an all-India Digvijaya on foot within his brief 32 years of life, consolidated Advaita Vedanta, authored foundational commentaries on the Upanishads, Gita, and Brahma Sutras, and established the 4 Amnaya Mathas guarding India\'s four directions.',
    astronomicalDatingTe: 'శంకర విజయ గ్రంథాలలో నమోదైన కాలడి జన్మ గ్రహస్థితులు (వైశాఖ శుక్ల పంచమి, పునర్వసు నక్షత్రం) ఆధునిక ఖగోళ పరిశోధనల ప్రకారం క్రీ.శ. 788 మే నెలను ఖచ్చితంగా ధ్రువీకరిస్తున్నాయి.',
    astronomicalDatingEn: 'Planetary alignments recorded in Madhaviya Shankara Digvijayam for Vaishakha Shukla Panchami in Punarvasu nakshatra historically converge upon 788 CE for Adi Shankara\'s advent.',
    archaeologicalEvidenceTe: 'శృంగేరి శారదా పీఠం, పూరీ గోవర్ధన పీఠం, ద్వారకా శారదా పీఠం, జ్యోతిర్మఠ్లలో గల ప్రాచీన గురుపరంపర శాసనాలు, కేదార్‌నాథ్ మహాసమాధి స్థలం, మరియు కాంచీపుర కామాక్షి శాసనాలు.',
    archaeologicalEvidenceEn: 'The unbroken epigraphical Guru-Parampara records across the 4 Cardinal Mathas (Sringeri, Puri, Dwaraka, Jyotirmath) and the ancient samadhi shrine at Kedarnath.',
    societalNormsTe: [
      'షణ్మత స్థాపన: శైవ, వైష్ణవ, శాక్త, సౌర, గాణపత్య, కౌమార సంప్రదాయాలను సమన్వయం చేసి పరబ్రహ్మ తత్త్వంగా ఏకతా త్రాటిపైకి తెచ్చారు.',
      'కుల వివక్షలను అధిగమించి మనీషాపంచకం ద్వారా జ్ఞానమే ఆత్మ స్వరూపమని ప్రబోధించారు.',
      'దశనామి సన్న్యాసి సంప్రదాయం ద్వారా దేశవ్యాప్తంగా ఆధ్యాత్మిక క్రమశిక్షణను నెలకొల్పారు.'
    ],
    societalNormsEn: [
      'Shanmata Sthapana: Harmonized Shaiva, Vaishnava, Shakta, Saura, Ganapatya, and Kaumara worship into one Supreme Brahman.',
      'Overcame social barriers through Manisha Panchakam, proclaiming universal divine oneness in all souls.',
      'Organized the Dashanami monastic order to perpetually protect spiritual wisdom across India.'
    ],
    keyFiguresTe: [
      'జగద్గురు ఆది శంకరాచార్యులు (అద్వైత వేదాంత ప్రతిష్టాపకుడు - జననం 788 CE)',
      'గోవింద భగవత్పాదులు (శంకరాచార్యుల సద్గురువు)',
      'గౌడపాదులు (మాండూక్య కారికా కర్త, పరమగురువు)',
      'పద్మపాదుడు, సురేశ్వరాచార్యుడు, తోటకాచార్యుడు, హస్తామలకుడు (నలుగురు ప్రధాన శిష్యులు)',
      'మండన మిశ్రుడు & ఉభయభారతి (ప్రసిద్ధ శాస్త్రార్థ పండితులు)'
    ],
    keyFiguresEn: [
      'Jagadguru Adi Shankaracharya (Consolidator of Advaita Vedanta - Born 788 CE)',
      'Govinda Bhagavatpada (Preceptor of Adi Shankara)',
      'Gaudapada (Grand-preceptor, Author of Mandukya Karika)',
      'Padmapada, Sureshwara, Totaka, Hastamalaka (Four Chief Disciples)',
      'Mandana Mishra & Ubhaya Bharati (Celebrated Scholars of Mimamsa)'
    ],
    milestoneEventsTe: [
      '788 CE: కేరళలోని కాలడి గ్రామంలో శివగురు-ఆర్యాంబ దంపతులకు ఆది శంకరుల దివ్య జననం.',
      'క్రీ.శ. 800 – 815: ప్రస్థానత్రయ భాష్యాలు: 10 ఉపనిషత్తులు, భగవద్గీత, బ్రహ్మసూత్రాలకు అద్వైత భాష్య రచన మరియు అఖండ భారత దిగ్విజయం.',
      'క్రీ.శ. 815 – 820: నాలుగు దిక్కులా 4 ఆమ్నాయ పీఠాల స్థాపన (దక్షిణాన శృంగేరి, తూర్పున పూరీ, పశ్చిమాన ద్వారక, ఉత్తరాన బదరీ-జ్యోతిర్మఠ్).',
      'క్రీ.శ. 820: 32వ ఏట కేదార్‌నాథ్ పర్వతాల వద్ద విదేహ ముక్తి (మహాసమాధి).'
    ],
    milestoneEventsEn: [
      '788 CE: Divine birth of Adi Shankara to Shivaguru and Aryamba in Kalady, Kerala.',
      '800 – 815 CE: Composition of Prasthanatrayi Bhashyas (Upanishads, Gita, Brahma Sutras) and victory in debates across Kashmir to Kanyakumari.',
      '815 – 820 CE: Establishment of 4 Amnaya Mathas (Sringeri, Puri, Dwaraka, Jyotirmath) anchoring Vedic traditions in India\'s 4 quadrants.',
      '820 CE: Attained Mahasamadhi at Kedarnath in the Himalayas at the age of 32.'
    ],
    scripturalReferencesTe: [
      'ప్రస్థానత్రయ భాష్యములు (ఉపనిషత్తులు, గీత, బ్రహ్మసూత్రములు)',
      'వివేకచూడామణి, ఆత్మబోధ, ఉపదేశసాహస్రి',
      'సౌందర్యలహరి, భజగోవిందం, కనకధారా స్తోత్రము',
      'మాధవీయ శంకర దిగ్విజయము'
    ],
    scripturalReferencesEn: [
      'Prasthanatrayi Bhashyas (Commentaries on 10 Upanishads, Gita, Brahma Sutras)',
      'Vivekachudamani, Atmabodha, and Upadeshasahasri',
      'Saundarya Lahari, Bhaja Govindam, and Kanakadhara Stotram',
      'Madhaviya Shankara Digvijayam'
    ],
    sourceReference: "Historical Timeline Slides, Madhaviya Shankara Digvijaya & Sringeri Epigraphical Records",
    timelineMilestones: [
      {
        yearBCE: '788 CE',
        yearEn: '788 CE',
        yearTe: 'క్రీ.శ. 788',
        eventEn: 'Adi Shanaka is Born (Adi Shankara)',
        eventTe: 'జగద్గురు ఆది శంకరాచార్యుల జననం',
        detailsEn: 'Advent of Jagadguru Adi Shankaracharya at Kalady, Kerala, revitalizing Advaita Vedanta and Sanatana Dharma.',
        detailsTe: 'కేరళలోని కాలడిలో ఆది శంకరాచార్యుల దివ్య జననం; అద్వైత వేదాంత పునరుద్ధరణ మరియు చతుర్ధామ పీఠాల స్థాపన.',
        icon: '🚩',
        category: 'philosophy'
      }
    ]
  }
];
