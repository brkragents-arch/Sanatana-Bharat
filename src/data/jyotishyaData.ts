// Comprehensive Data for "జ్యోతిష్య శాస్త్రము (శాస్త్రమా - అశాస్త్రమా?)"
// Authoritative Source: త్రిమత ఏకైక గురువు, ఇందూ జ్ఞాన ధర్మప్రదాత, త్రైత సిద్ధాంత ఆదికర్త
// శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరులు (ఇందూ జ్ఞానవేదిక, 48 అధ్యాయములు + 34 ప్రశ్నలు-జవాబులు)

export interface GrahaMasterRecord {
  id: string;
  lagnaNumber: number; // 1 to 12 (Own House in Kala Chakra)
  ownLagnaTe: string;
  ownLagnaEn: string;
  nameTe: string;
  nameEn: string;
  titleTe: string;
  party: 'గురు వర్గము' | 'శని వర్గము';
  partyEn: 'Guru Party' | 'Shani Party';
  pairCodeTe: string;
  speedPerLagnaTe: string;
  speedFullCircleTe: string;
  motionDirectionTe: string;
  handsCount: 2 | 4;
  handsHouses: number[];
  handsExplanationTe: string;
  dashaYears: number;
  dashaOrder: number;
  dashaNakshatraPadasTe: string;
  baddhaShatruTe: string; // 1x7 opposite enemy
  baddhaShatruLagnaTe: string;
  casteReligionTe: string;
  colorTe: string;
  tasteTe: string;
  genderTe: 'పురుష' | 'స్త్రీ' | 'నపుంసక';
  karakatvamTe: string;
  diseasesTe: string;
  gemstoneTe: string;
  directionTe: string;
  grainTe: string;
  weekdayTe: string;
  portfolioTe: string;
  specialDiscoveryNoteTe?: string;
  icon: string;
  accentColor: string;
}

export interface KarmaHouseRecord {
  houseNumber: number;
  sanskritNameTe: string;
  popularNameTe: string;
  sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)' | 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)';
  kendraStatusTe: string;
  konaStatusTe: 'పుణ్య కోణము (కేవలం పుణ్యము మాత్రమే)' | 'పాప కోణము (కేవలం పాపము మాత్రమే)' | 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)';
  oppositeHouse: number;
  oppositeRelationTe: string;
  significationsTe: string[];
  deepSecretTe: string;
}

export interface JyotishyaChapterSummary {
  chapterNumber: number;
  titleTe: string;
  categoryTe: 'మూల సిద్ధాంతము' | 'చక్రములు & కర్మ రహస్యము' | 'ద్వాదశ గ్రహములు & వర్గములు' | 'రాశులు, లగ్నములు & దశలు' | 'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు';
  keyTeachingsTe: string[];
  summaryTe: string;
}

export interface JyotishyaQAItem {
  qNumber: number;
  questionTe: string;
  answerTe: string;
  topicTagTe: string;
}

export interface KundaliCaseStudy {
  id: string;
  nameTe: string;
  birthDetailsTe: string;
  janmaLagnaTe: string;
  lagnaPartyTe: 'గురు వర్గము' | 'శని వర్గము';
  keyPlacementsTe: string[];
  analysisTe: string;
  spiritualLessonTe: string;
}

export const JYOTISHYA_BOOK_METADATA = {
  titleTe: 'జ్యోతిష్య శాస్త్రము (శాస్త్రమా - అశాస్త్రమా?)',
  titleEn: 'Jyotishya Shastram — True Science of Internal Karma, 4 Chakras & 12 Grahas',
  authorTe: 'శ్రీశ్రీశ్రీ ఆచార్య ప్రబోధానంద యోగీశ్వరులు',
  authorTitlesTe: 'త్రిమత ఏకైక గురువు • ఆధ్యాత్మిక సామ్రాజ్య చక్రవర్తి • శతాధిక గ్రంథకర్త • ఇందూ జ్ఞాన ధర్మప్రదాత • త్రైత సిద్ధాంత ఆదికర్త',
  publisherTe: 'ఇందూ జ్ఞానవేదిక (Estd in 1978 - Regd.No.: 168/2004), త్రైత శకము - 39',
  coreMaximsTe: [
    '“భాషలో పాండిత్యమును విడిచి, భావములో పాండిత్యమును చూచువాడు నిజమైన జ్ఞాని.”',
    '“అసత్యమును వేయిమంది చెప్పినా అది సత్యము కాదు, సత్యమును వేయిమంది కాదనినా అది అసత్యము కాదు.”',
    '“జ్యోతి (జ్ఞానము / వెలుగు) + ఇష్యము (శరీరాంతర్గత కర్మలోని పాపపుణ్యములను తెలుసుకోవడము) = జ్యోతిష్యము.”',
    '“గ్రహచారములో ప్రారబ్ధ కర్మను త్రిమూర్తులు కూడా తప్పించలేరు; దశాచారములో ఆత్మజ్ఞానాగ్ని చేత మాత్రమే కర్మ దగ్ధమవుతుంది!”'
  ],
  etymologyCards: [
    {
      termTe: '1. జ్యోతిష్యము (జ్యోతి + ఇష్యము)',
      meaningTe:
        'జ్యోతి అనగా వెలుగు (ఆత్మజ్ఞానము); ఇష్యము అనగా మనిషి శరీరాంతర్గత కర్మచక్రములో నిల్వ ఉన్న పాప-పుణ్యములను తెలుసుకోవడము. బాహ్య భౌతిక పందెములు (ఎన్నికలలో ఎవరు గెలుస్తారు, గుప్పెట్లో ఏముంది, పెట్టెలో ఏముంది) చెప్పుట జ్యోతిష్యము కాదు. వాస్తు అనేది అసలు శాస్త్రమే కాదు; దానికి జ్యోతిష్యముతో ఏ సంబంధమూ లేదు.'
    },
    {
      termTe: '2. జాఫతకము ➔ జాతకము',
      meaningTe:
        'అసలు ఐదు అక్షరముల మూల పదము “జాఫతకము” (జా = పుట్టుక + ఫతకము = పథకము). మనిషి చనిపోయే చివరి క్షణంలో (సెకను కంటే తక్కువ సమయంలో) సంచిత కర్మ నుండి తరువాతి జన్మ కొరకు కేటాయించబడిన ప్రారబ్ధ కర్మ ప్రణాళికనే జాఫతకము అంటారు. కాలక్రమేణా “ఫ” అనే అక్షరము లోపించి “జాతకము”గా మారింది.'
    },
    {
      termTe: '3. త్రి + రా = రాత్రి (సూర్య కుటుంబ నియమము)',
      meaningTe:
        '“త్రి” అనగా మూడు గుణములు (తామస, రాజస, సాత్త్విక); “రా” అనగా రాకుండా ఆగిపోవుట. రాత్రి నిద్రలో 12 గ్రహాలకు రాజైన సూర్యుడు తన కిరణాలను కర్మచక్రంపై ప్రసరింపజేయడం ఆపివేస్తాడు. కుటుంబ పెద్ద ఆగిపోగానే మిగిలిన 11 గ్రహాలు కూడా పనిచేయవు; అందుకే నిద్రలో 3 గుణాలు పనిచేయక సుఖదుఃఖాలు తెలియవు.'
    },
    {
      termTe: '4. ఇందూ = జ్ఞాని / చంద్రుడు (ఇందూ దేశము)',
      meaningTe:
        'ఇందూ అనగా జ్ఞాని మరియు చంద్రుడు. శివుని తలపై నెలవంక జ్ఞానానికి చిహ్నం. పూర్వము జ్ఞానులు నివసించిన పుణ్యభూమి కావున మన దేశమునకు “ఇందూ దేశము” అని పేరు వచ్చింది (అదే కాలక్రమేణా హిందూ దేశముగా పిలువబడింది).'
    }
  ],
  shatShastrasTe: [
    { rank: 1, nameTe: '1. బ్రహ్మవిద్యా శాస్త్రము (యోగశాస్త్రము)', descTe: 'దేవునిచే చెప్పబడిన మొదటి శాస్త్రము. ఆగామి కర్మ అంటకుండా ఉండే మార్గాన్ని, దశాచారములో జ్ఞానాగ్ని చేత కర్మలను భస్మం చేసే మోక్ష మార్గాన్ని తెలుపుతుంది.' },
    { rank: 2, nameTe: '2. జ్యోతిష్య శాస్త్రము', descTe: 'షట్శాస్త్రములలో రెండవ శాస్త్రము. మనిషి ప్రారబ్ధ కర్మలోని (జాఫతకములోని) పాప-పుణ్య అనుభవాలను, గ్రహచారమును వివరంగా తెలుపుతుంది.' },
    { rank: 3, nameTe: '3. ఖగోళ శాస్త్రము', descTe: 'బాహ్య అంతరిక్షములోని గ్రహ-నక్షత్ర గమనములను, శూన్య మండలమును వివరించు మూడవ శాస్త్రము.' },
    { rank: 4, nameTe: '4. భౌతిక శాస్త్రము', descTe: 'పంచభూతముల స్థూల ధర్మములను, శక్తి-చలన నియమములను వివరించు నాల్గవ శాస్త్రము.' },
    { rank: 5, nameTe: '5. రసాయన శాస్త్రము', descTe: 'పదార్థముల సంయోగములను, రసాయన మార్పులను వివరించు ఐదవ శాస్త్రము.' },
    { rank: 6, nameTe: '6. గణిత శాస్త్రము', descTe: 'సంఖ్యా గణనమును, కొలతలను వివరించు ఆరవ శాస్త్రము.' }
  ],
  threeEyesForThreeTimesTe: [
    { timeTe: '1. భూతకాలము (గడిచిపోయిన కాలము)', eyeTe: 'మనోనేత్రము (జ్ఞాపకశక్తి)', descTe: 'గతంలో జరిగిన విషయాలను మనస్సు అనే కన్ను (జ్ఞాపకశక్తి) తో చూడగలము.' },
    { timeTe: '2. వర్తమానకాలము (ప్రస్తుత కాలము)', eyeTe: 'బాహ్య ప్రత్యక్ష నేత్రము (చర్మ నేత్రములు)', descTe: 'ప్రస్తుతం ఎదురుగా జరుగుతున్న విషయాలను శరీరపు రెండు కళ్ళతో చూడగలము.' },
    { timeTe: '3. భవిష్యత్ కాలము (రాబోవు కాలము)', eyeTe: 'జ్ఞాననేత్రము (మూడవ కన్ను / ఆత్మజ్ఞాన దృష్టి)', descTe: 'రాబోవు కర్మ ఫలితాలను కేవలం పంచాంగం చదివితే తెలియదు; తలలోని చక్రాల రహస్యం తెలిసిన “జ్ఞాననేత్రము” ఉన్నవాడే నిజమైన జ్యోతిష్యుడు!' }
  ]
};

export interface HeadChakraRecord {
  order: number;
  id: string;
  nameTe: string;
  nameEn: string;
  divisionsTe: string;
  roleTe: string;
  rashiVsLagnaNoteTe: string;
  color: string;
  imageUrl: string;
  sourceImageUrl: string;
  sourceFigNumberTe: string;
  sourcePageNumber: number;
  tagTe: string;
}

// ==========================================
// THE 4 INTERNAL CHAKRAS IN THE HEAD (బ్రహ్మనాడిపై గల 4 చక్రములు)
// ==========================================
export const FOUR_HEAD_CHAKRAS_DATA: HeadChakraRecord[] = [
  {
    order: 1,
    id: 'brahma-chakra',
    nameTe: '1. బ్రహ్మచక్రము (అన్నిటికంటే పైన ఉండునది)',
    nameEn: '1. Brahma Chakra (Topmost Chakra)',
    divisionsTe: '2 భాగములు (పరమాత్మ / అక్షర ఆత్మ సంధాన స్థానము)',
    roleTe: 'నాలుగు చక్రములలో అన్నిటికంటే పైన ఉంటూ, క్రింది మూడు చక్రములకు చైతన్య ఆధారముగా ఉండును.',
    rashiVsLagnaNoteTe: 'ఇది కర్మలకు అతీతమైన దైవ చైతన్య స్థానము.',
    color: '#D4AF37',
    imageUrl: './images/jyotishya/brahma_chakra.jpg',
    sourceImageUrl: './images/jyotishya/source_four_chakras_head_wide.png',
    sourceFigNumberTe: 'గ్రంథ పటము 2 (శిఖర స్థానము)',
    sourcePageNumber: 21,
    tagTe: 'పరమాత్మ & అక్షరాత్మ స్థానము'
  },
  {
    order: 2,
    id: 'kala-chakra',
    nameTe: '2. కాలచక్రము (రెండవ చక్రము — 12 లగ్నములు & 12 గ్రహములు)',
    nameEn: '2. Kala Chakra (12 Lagnas & 12 Grahas)',
    divisionsTe: '12 లగ్నములు: మేషం, వృషభం, మిథునం, కర్కాటకం, సింహం, కన్య, తుల, వృశ్చికం, ధనస్సు, మకరం, కుంభం, మీనం',
    roleTe: 'ఈ కాలచక్రములో 12 లగ్నములు మరియు వాటిలో తిరిగే 12 గ్రహములు (ఫోకస్ లైట్ల వలె) ఉంటాయి. కాలచక్రము తన చుట్టూ తాను ఒక్కసారి తిరగడానికి 43,20,000 సంవత్సరములు (ఒక మహాయుగము) పడుతుంది!',
    rashiVsLagnaNoteTe: 'ముఖ్య సవరణ: మేషాది 12 విభాగాలను "లగ్నములు" అనాలి గానీ "రాశులు" అనకూడదు! లగ్నము అనగా గ్రహములు అంటిపెట్టుకొని తిరిగే కాలచక్ర భాగము.',
    color: '#2563EB',
    imageUrl: './images/jyotishya/kala_chakra.jpg',
    sourceImageUrl: './images/jyotishya/source_kala_chakra.png',
    sourceFigNumberTe: 'గ్రంథ పటము 3 (కాలచక్రము)',
    sourcePageNumber: 21,
    tagTe: '12 లగ్నములు • 12 గ్రహాలు'
  },
  {
    order: 3,
    id: 'karma-chakra',
    nameTe: '3. కర్మచక్రము (మూడవ చక్రము — 12 రాశులు / స్థానములు)',
    nameEn: '3. Karma Chakra (12 Rashi Compartments / Houses 1–12)',
    divisionsTe: '12 రాశులు (స్థానములు): 1వ స్థానము (ప్రథమ) నుండి 12వ స్థానము (ద్వాదశ) వరకు — మధ్యలో గురువు ఉండును',
    roleTe: 'మనిషి సంపాదించిన పాప-పుణ్య కర్మల కుప్పలు (రాశులు) నిల్వ ఉండే చక్రము. అడుగున సంచిత కర్మ, పైన ప్రారబ్ధ కర్మ (రంగు పేపరు వలె) ఉంటాయి. కాలచక్రంలోని గ్రహ కిరణాలు ఈ కర్మచక్రం గుండా ప్రసరించి క్రింది గుణచక్రంపై కర్మ ఛాయను వేస్తాయి.',
    rashiVsLagnaNoteTe: 'ముఖ్య సవరణ: రాశి అనగా "కుప్ప" (కర్మల కుప్ప). కావున కర్మచక్రములోని 1 నుండి 12 స్థానములను మాత్రమే "రాశులు" అనాలి!',
    color: '#DC2626',
    imageUrl: './images/jyotishya/karma_chakra.jpg',
    sourceImageUrl: './images/jyotishya/source_karma_chakra.png',
    sourceFigNumberTe: 'గ్రంథ పటము 4 (కర్మచక్రము)',
    sourcePageNumber: 23,
    tagTe: '12 రాశులు • సంచిత-ప్రారబ్ధ కర్మ'
  },
  {
    order: 4,
    id: 'guna-chakra',
    nameTe: '4. గుణచక్రము / మాయచక్రము (నాలుగవ చక్రము — 324 గుణములు)',
    nameEn: '4. Guna Chakra / Maya Chakra (324 Gunas + Central Atma Space)',
    divisionsTe: '4 భాగములు: 1) తామస భాగము (108), 2) రాజస భాగము (108), 3) సాత్త్విక భాగము (108) + 4) మధ్యలో ఆత్మ భాగము (బ్రహ్మయోగ స్థానము)',
    roleTe: 'ప్రతి గుణ భాగములో 6 చెడు గుణములు (కామ, క్రోధ, లోభ, మోహ, మద, మత్సర) × 9 పరిమాణములు = 54 పాప గుణములు; 6 మంచి గుణములు (దాన, దయ, ఔదార్య, వైరాగ్య, వినయ, ప్రేమ) × 9 పరిమాణములు = 54 పుణ్య గుణములు = 108 గుణములు (మాయ). 3 గుణ భాగములలో 108 × 3 = 324 గుణముల నుండి 324 రకాల కర్మలు పుడతాయి!',
    rashiVsLagnaNoteTe: 'బుద్ధి, చిత్తము, అహము అనే 3 పొరలలో బంధింపబడిన జీవుడు ఈ గుణచక్రములో తిరుగుతూ కర్మలను అనుభవిస్తాడు. మధ్యలోని ఆత్మ భాగములో చేరితే కర్మ ఉండదు.',
    color: '#059669',
    imageUrl: './images/jyotishya/guna_chakra.jpg',
    sourceImageUrl: './images/jyotishya/source_guna_chakra.png',
    sourceFigNumberTe: 'గ్రంథ పటము 8 (గుణచక్రము)',
    sourcePageNumber: 32,
    tagTe: '324 గుణములు • జీవాత్మ స్థానము'
  }
];

// ==========================================
// THE 12 GRAHAS MASTER DATA (ద్వాదశ గ్రహములు - భూమి, మిత్ర, చిత్రలతో కలిపి)
// ==========================================
export const TWELVE_GRAHAS_MASTER_DATA: GrahaMasterRecord[] = [
  {
    id: 'kuja',
    lagnaNumber: 1,
    ownLagnaTe: '1. మేష లగ్నము',
    ownLagnaEn: '1. Mesha (Aries)',
    nameTe: 'కుజుడు (అంగారకుడు)',
    nameEn: 'Kuja (Mars)',
    titleTe: 'గురు వర్గ సేనాని • 4 చేతుల బలగ్రహము',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 1: మీనం (12 - సరి) + మేషం (1 - బేసి) = గురువు & కుజుడు',
    speedPerLagnaTe: '1½ నెలలు (45 రోజులు)',
    speedFullCircleTe: '1½ సంవత్సరములు (18 నెలలు)',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 4,
    handsHouses: [1, 4, 7, 8],
    handsExplanationTe: 'కుజునికి 4 చేతులు (గ్రాహిత శక్తులు) కలవు: తాను ఉన్న 1వ స్థానముతో పాటు 4, 7, 8 స్థానములలో ఉన్న కర్మను పట్టుకొని అనుభవింపజేయును.',
    dashaYears: 7,
    dashaOrder: 3,
    dashaNakshatraPadasTe: 'మృగశిర 3,4 పాదాలు • ఆరుద్ర 1,2,3,4 • పునర్వసు 1,2,3 (మిథున లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'శుక్రుడు (తుల - 7వ స్థానం)',
    baddhaShatruLagnaTe: 'మేషం (1) × తుల (7) — కుజునికి శుక్రుడు బద్ధశత్రువు (భార్యాభర్తల కలహ కారకులు)',
    casteReligionTe: 'నాయిబ్రాహ్మణ (మంగలి)',
    colorTe: 'ఎరుపు రంగు (Red)',
    tasteTe: 'వేప చేదు (Neem Bitter)',
    genderTe: 'పురుష',
    karakatvamTe: 'సోదరులు (Brothers)',
    diseasesTe: 'రక్తపోటు (BP), రక్తస్రావము, గాయాలు, ఆపరేషన్లు, అగ్ని ప్రమాదాలు, కణితులు',
    gemstoneTe: 'పగడము (Coral)',
    directionTe: 'దక్షిణ దిశ (South)',
    grainTe: 'కందులు (Red Gram)',
    weekdayTe: 'మంగళవారము',
    portfolioTe: 'భూములు, స్థిరాస్తులు, పోలీసు/మిలిటరీ రక్షణ, శస్త్రచికిత్స, సోదర బలము, ధైర్యసాహసములు, రోడ్డు/భూమి వివాదములు.',
    icon: '🔴',
    accentColor: '#DC2626'
  },
  {
    id: 'mitra',
    lagnaNumber: 2,
    ownLagnaTe: '2. వృషభ లగ్నము',
    ownLagnaEn: '2. Vrishabha (Taurus)',
    nameTe: 'మిత్ర గ్రహము (చీకటి గ్రహము)',
    nameEn: 'Mitra (Dark Planet - 11th Graha)',
    titleTe: 'శని వర్గ అంతర్గత గ్రహము • కాంతిని మింగు నల్లని గ్రహము',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 2: వృషభం (2 - సరి) + మిథునం (3 - బేసి) = మిత్ర & చిత్ర',
    speedPerLagnaTe: '1½ సంవత్సరములు (18 నెలలు)',
    speedFullCircleTe: '18 సంవత్సరములు',
    motionDirectionTe: 'సవ్యము (Clockwise — కేతువు కంటే ఎల్లప్పుడూ 1 నక్షత్ర పాదము క్రింద ఉండును)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'మిత్ర గ్రహమునకు 2 చేతులు కలవు: తాను ఉన్న 1వ స్థానము మరియు దానికి ఎదురుగా ఉన్న 7వ స్థానము.',
    dashaYears: 7,
    dashaOrder: 11,
    dashaNakshatraPadasTe: 'ధనిష్ఠ 3,4 పాదాలు • శతభిషం 1,2,3,4 • పూర్వాభాద్ర 1,2,3 (కుంభ లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'భూమి (వృశ్చికం - 8వ స్థానం)',
    baddhaShatruLagnaTe: 'వృషభం (2) × వృశ్చికం (8) — మిత్ర గ్రహమునకు భూమి బద్ధశత్రువు',
    casteReligionTe: 'క్రైస్తవులు (Christians)',
    colorTe: 'వక్క / పోక రంగు (Areca Nut Brown-Red)',
    tasteTe: 'లేత తీపి (Mild Sweet)',
    genderTe: 'స్త్రీ',
    karakatvamTe: 'మిత్రుడు (True Friend)',
    diseasesTe: 'అంతుచిక్కని రోగములు, రోగనిరోధక శక్తి క్షీణత, నరముల బలహీనత',
    gemstoneTe: 'ఎర్రరాయి (Red Stone)',
    directionTe: 'పైకి / ఊర్ధ్వ దిశ (Upward - కేతువుతో పాటు)',
    grainTe: 'రాగులు (Finger Millet)',
    weekdayTe: 'శుక్రవారము',
    portfolioTe: 'మైత్రి, స్నేహ సంబంధములు, దానధర్మములు, రహస్య సహాయము, ఆధ్యాత్మిక నిబంధన.',
    specialDiscoveryNoteTe: 'బ్రహ్మనాడి అంతరంగ పరిశోధన ద్వారా బయల్పడిన 11వ గ్రహము. ఇది కాంతిని పూర్తిగా తనలోనికి పీల్చుకొనే చీకటి గ్రహము కావున బాహ్య టెలిస్కోపులకు కనిపించదు. వృషభ లగ్నము శుక్రునిది కాదు; మిత్ర గ్రహము యొక్క స్వంత ఇల్లు!',
    icon: '🌑',
    accentColor: '#78350F'
  },
  {
    id: 'chitra',
    lagnaNumber: 3,
    ownLagnaTe: '3. మిథున లగ్నము',
    ownLagnaEn: '3. Mithuna (Gemini)',
    nameTe: 'చిత్ర గ్రహము (అదృశ్య రంగుల గ్రహము)',
    nameEn: 'Chitra (Invisible Multicolored Planet - 12th Graha)',
    titleTe: 'శని వర్గ అంతర్గత గ్రహము • అదృశ్య విచిత్ర గ్రహము',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 2: వృషభం (2 - సరి) + మిథునం (3 - బేసి) = మిత్ర & చిత్ర',
    speedPerLagnaTe: '1½ సంవత్సరములు (18 నెలలు)',
    speedFullCircleTe: '18 సంవత్సరములు',
    motionDirectionTe: 'సవ్యము (Clockwise — రాహువు కంటే ఎల్లప్పుడూ 1 నక్షత్ర పాదము క్రింద ఉండును)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'చిత్ర గ్రహమునకు 2 చేతులు కలవు: తాను ఉన్న 1వ స్థానము మరియు ఎదురుగా ఉన్న 7వ స్థానము.',
    dashaYears: 7,
    dashaOrder: 12,
    dashaNakshatraPadasTe: 'పూర్వాభాద్ర 4వ పాదం • ఉత్తరాభాద్ర 1,2,3,4 • రేవతి 1,2,3,4 (మీన లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'కేతువు (ధనస్సు - 9వ స్థానం)',
    baddhaShatruLagnaTe: 'మిథునం (3) × ధనస్సు (9) — చిత్ర గ్రహమునకు కేతువు బద్ధశత్రువు',
    casteReligionTe: 'సిక్కులు (Sikhs)',
    colorTe: 'లేత పసుపు రంగు (Light Yellow)',
    tasteTe: 'చింత పులుపు (Tamarind Sour)',
    genderTe: 'నపుంసక',
    karakatvamTe: 'శత్రువు (Enemy / Sudden Opposition)',
    diseasesTe: 'చర్మ వికారములు, అలర్జీలు, ఆకస్మిక మానసిక భ్రమలు',
    gemstoneTe: 'తెల్లరాయి (White Stone)',
    directionTe: 'క్రిందికి / అధో దిశ (Downward - భూమితో పాటు)',
    grainTe: 'అలసందలు / బొబ్బర్లు (Cowpea)',
    weekdayTe: 'శనివారము',
    portfolioTe: 'విచిత్ర కళలు, ఊహాশক্তি, ఆకస్మిక మార్పులు, రహస్య శత్రుత్వము, బహుముఖ ప్రజ్ఞ.',
    specialDiscoveryNoteTe: 'బ్రహ్మనాడి అంతరంగ పరిశోధన ద్వారా బయల్పడిన 12వ గ్రహము. ఇది అనేక రంగులతో మెరుస్తూ 24 గంటలలో కొన్ని నిమిషములు మాత్రమే కనిపించి మాయమయ్యే అదృశ్య గ్రహము. మిథున లగ్నము బుధునిది కాదు; చిత్ర గ్రహము యొక్క స్వంత ఇల్లు!',
    icon: '🌈',
    accentColor: '#D97706'
  },
  {
    id: 'chandra',
    lagnaNumber: 4,
    ownLagnaTe: '4. కర్కాటక లగ్నము',
    ownLagnaEn: '4. Karkataka (Cancer)',
    nameTe: 'చంద్రుడు (సోముడు / ఇందుడు)',
    nameEn: 'Chandra (Moon)',
    titleTe: 'గురు వర్గ మంత్రి • మనో & జల కారకుడు',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 3: కర్కాటకం (4 - సరి) + సింహం (5 - బేసి) = చంద్రుడు & సూర్యుడు',
    speedPerLagnaTe: '2½ దినములు (60 గంటలు)',
    speedFullCircleTe: '1 నెల (30 రోజులు)',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'చంద్రునికి 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 10,
    dashaOrder: 2,
    dashaNakshatraPadasTe: 'కృత్తిక 2,3,4 పాదాలు • రోహిణి 1,2,3,4 • మృగశిర 1,2 (వృషభ లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'రాహువు (మకరం - 10వ స్థానం)',
    baddhaShatruLagnaTe: 'కర్కాటకం (4) × మకరం (10) — చంద్రునికి రాహువు బద్ధశత్రువు (గ్రహణ వైరము)',
    casteReligionTe: 'బ్రాహ్మణ',
    colorTe: 'తెల్లని రంగు (Pure White)',
    tasteTe: 'చౌడుప్పు (Saline / Alkaline Salt)',
    genderTe: 'స్త్రీ',
    karakatvamTe: 'తల్లి (Mother)',
    diseasesTe: 'జలుబు, శ్లేష్మము, ఊపిరితిత్తుల వ్యాధులు, జల గండములు, మానసిక చంచలత్వము',
    gemstoneTe: 'ముత్యము (Pearl)',
    directionTe: 'వాయువ్య దిశ (North-West)',
    grainTe: 'బియ్యము / వడ్లు (Rice)',
    weekdayTe: 'సోమవారము',
    portfolioTe: 'తల్లి ప్రేమ, మనస్సు, జల వనరులు (బోర్లు/బావులలో నీరు పడుట), వ్యవసాయం, ప్రయాణములు, శాంతి.',
    icon: '🌕',
    accentColor: '#0284C7'
  },
  {
    id: 'surya',
    lagnaNumber: 5,
    ownLagnaTe: '5. సింహ లగ్నము',
    ownLagnaEn: '5. Simha (Leo)',
    nameTe: 'రవి / సూర్యుడు',
    nameEn: 'Surya (Sun)',
    titleTe: 'గ్రహ రాజు • సూర్య కుటుంబ పెద్ద',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 3: కర్కాటకం (4 - సరి) + సింహం (5 - బేసి) = చంద్రుడు & సూర్యుడు',
    speedPerLagnaTe: '1 నెల (30 రోజులు)',
    speedFullCircleTe: '1 సంవత్సరము (12 నెలలు)',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'సూర్యునికి 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 10,
    dashaOrder: 1,
    dashaNakshatraPadasTe: 'అశ్విని 1,2,3,4 • భరణి 1,2,3,4 • కృత్తిక 1వ పాదం (మేష లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'శని (కుంభం - 11వ స్థానం)',
    baddhaShatruLagnaTe: 'సింహం (5) × కుంభం (11) — సూర్యునికి శని బద్ధశత్రువు',
    casteReligionTe: 'క్షత్రియ (రాజులు)',
    colorTe: 'గోధుమ రంగు (Wheatish / Golden Brown)',
    tasteTe: 'మిరప కారం (Chilli Pungent)',
    genderTe: 'పురుష',
    karakatvamTe: 'తండ్రి (Father)',
    diseasesTe: 'గుండె జబ్బులు, కంటి వ్యాధులు, తీవ్ర జ్వరము, తలనొప్పి, ఎముకల బలహీనత',
    gemstoneTe: 'కెంపు (Ruby)',
    directionTe: 'తూర్పు దిశ (East)',
    grainTe: 'గోధుమలు (Wheat)',
    weekdayTe: 'ఆదివారము',
    portfolioTe: 'రాజకీయ అధికారము, ప్రభుత్వ ఉద్యోగము, తండ్రి ఆస్తి, ఆత్మవిశ్వాసము, తేజస్సు, సూర్య కుటుంబ నియంత్రణ.',
    icon: '☀️',
    accentColor: '#EA580C'
  },
  {
    id: 'budha',
    lagnaNumber: 6,
    ownLagnaTe: '6. కన్యా లగ్నము',
    ownLagnaEn: '6. Kanya (Virgo)',
    nameTe: 'బుధుడు',
    nameEn: 'Budha (Mercury)',
    titleTe: 'శని వర్గ విద్యా & వాణిజ్య గ్రహము',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 4: కన్య (6 - సరి) + తుల (7 - బేసి) = బుధుడు & శుక్రుడు',
    speedPerLagnaTe: '1 నెల (30 రోజులు)',
    speedFullCircleTe: '1 సంవత్సరము (12 నెలలు)',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'బుధునికి 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 10,
    dashaOrder: 8,
    dashaNakshatraPadasTe: 'విశాఖ 4వ పాదం • అనూరాధ 1,2,3,4 • జ్యేష్ఠ 1,2,3,4 (వృశ్చిక లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'గురువు (మీనం - 12వ స్థానం)',
    baddhaShatruLagnaTe: 'కన్య (6) × మీనం (12) — బుధునికి గురువు బద్ధశత్రువు',
    casteReligionTe: 'వైశ్య (కోమటి / వ్యాపారులు)',
    colorTe: 'ఆకుపచ్చ రంగు (Green)',
    tasteTe: 'వగరు (Astringent)',
    genderTe: 'నపుంసక',
    karakatvamTe: 'మేనమామ (Maternal Uncle)',
    diseasesTe: 'నరాల బలహీనత, మాట తడబాటు/మూగతనము, చర్మ వ్యాధులు, జీర్ణకోశ వ్యాధులు',
    gemstoneTe: 'పచ్చ / మరకతము (Emerald)',
    directionTe: 'ఉత్తర దిశ (North)',
    grainTe: 'పెసలు (Green Gram)',
    weekdayTe: 'బుధవారము',
    portfolioTe: 'వ్యాపారము, గణితము, లౌకిక చదువు, రచనా శక్తి, వాక్చాతుర్యము, కమీషన్ వ్యాపారము, వైద్య వృత్తి.',
    icon: '🟢',
    accentColor: '#16A34A'
  },
  {
    id: 'shukra',
    lagnaNumber: 7,
    ownLagnaTe: '7. తులా లగ్నము',
    ownLagnaEn: '7. Tula (Libra)',
    nameTe: 'శుక్రుడు (భృగువు)',
    nameEn: 'Shukra (Venus)',
    titleTe: 'శని వర్గ కళత్ర & భోగ గ్రహము',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 4: కన్య (6 - సరి) + తుల (7 - బేసి) = బుధుడు & శుక్రుడు',
    speedPerLagnaTe: '1 నెల (30 రోజులు)',
    speedFullCircleTe: '1 సంవత్సరము (12 నెలలు)',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'శుక్రునికి 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 13,
    dashaOrder: 10,
    dashaNakshatraPadasTe: 'ఉత్తరాషాఢ 2,3,4 • శ్రవణం 1,2,3,4 • ధనిష్ఠ 1,2 (మకర లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'కుజుడు (మేషం - 1వ స్థానం)',
    baddhaShatruLagnaTe: 'తుల (7) × మేషం (1) — శుక్రునికి కుజుడు బద్ధశత్రువు',
    casteReligionTe: 'నంభీబ్రాహ్మణ / అర్చకులు',
    colorTe: 'తెలుపు / మెరిసే తెలుపు (Bright White)',
    tasteTe: 'నిమ్మ పులుపు (Lemon Sour)',
    genderTe: 'స్త్రీ',
    karakatvamTe: 'భార్య / భర్త (Spouse)',
    diseasesTe: 'సుఖరోగములు, మూత్రపిండ/జననేంద్రియ వ్యాధులు, మధుమేహము (షుగర్), కంటి పువ్వు',
    gemstoneTe: 'వజ్రము (Diamond)',
    directionTe: 'ఆగ్నేయ దిశ (South-East)',
    grainTe: 'బొబ్బర్లు / అలసందలు',
    weekdayTe: 'శుక్రవారము',
    portfolioTe: 'వివాహము, దాంపత్య సుఖము, వాహన సౌఖ్యము, బంగారు ఆభరణములు, సంగీత-సాహిత్య కళలు, అలంకారము.',
    icon: '💎',
    accentColor: '#EC4899'
  },
  {
    id: 'bhoomi',
    lagnaNumber: 8,
    ownLagnaTe: '8. వృశ్చిక లగ్నము',
    ownLagnaEn: '8. Vrischika (Scorpio)',
    nameTe: 'భూమి (పృథ్వి - 10వ గ్రహము)',
    nameEn: 'Bhoomi (Earth - 10th Graha)',
    titleTe: 'గురు వర్గ అంతర్గత గ్రహము • అజ్ఞాన & స్థూల ఆధార కారకుడు',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 5: వృశ్చికం (8 - సరి) + ధనస్సు (9 - బేసి) = భూమి & కేతువు',
    speedPerLagnaTe: '1 నెల (30 రోజులు)',
    speedFullCircleTe: '1 సంవత్సరము (12 నెలలు)',
    motionDirectionTe: 'సవ్యము (Clockwise — సూర్యునికి ఎల్లప్పుడూ సరిగ్గా 7వ స్థానములో / 52 నక్షత్ర పాదముల దూరములో ఎదురుగా ఉండును)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'భూమికి 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 13,
    dashaOrder: 6,
    dashaNakshatraPadasTe: 'ఉత్తర 2,3,4 పాదాలు • హస్త 1,2,3,4 • చిత్త 1,2 (కన్యా లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'మిత్ర (వృషభం - 2వ స్థానం)',
    baddhaShatruLagnaTe: 'వృశ్చికం (8) × వృషభం (2) — భూమికి మిత్ర గ్రహము బద్ధశత్రువు',
    casteReligionTe: 'జైనులు (Jains)',
    colorTe: 'నీలి రంగు (Blue)',
    tasteTe: 'బీరకాయ చేదు (Ridge Gourd Bitter)',
    genderTe: 'పురుష',
    karakatvamTe: 'అజ్ఞానము / దేహాభిమానము (Worldly Ignorance)',
    diseasesTe: 'వాపులు, కీళ్ల నొప్పులు, ఉదర సంబంధ వ్యాధులు, జడత్వము',
    gemstoneTe: 'నల్లరాయి (Black Stone)',
    directionTe: 'క్రిందికి / అధో దిశ (Downward)',
    grainTe: 'జొన్నలు (Sorghum / Jowar)',
    weekdayTe: 'మంగళవారము',
    portfolioTe: 'భూమి ఆస్తులు, వ్యవసాయ క్షేత్రములు, గనులు, స్థిర నివాసము, న్యాయవాద/తీర్పు శక్తి, ప్రాపంచిక పట్టుదల.',
    specialDiscoveryNoteTe: 'మనము భూమిపై నివసిస్తూ ఆకాశంలో గ్రహాలను వెతకడం వల్ల భూమిని గ్రహాల జాబితాలో మరచిపోయారు! కానీ తలలోని కాలచక్రములో భూమి 8వ లగ్నమైన వృశ్చిక లగ్నమునకు స్వంత అధిపతి (వృశ్చికం కుజునిది కాదు, భూమిది!). సూర్యుడు ఏ లగ్నంలో ఉంటే దానికి సరిగ్గా 7వ లగ్నంలో భూమి ఉంటుంది.',
    icon: '🌍',
    accentColor: '#0D9488'
  },
  {
    id: 'ketu',
    lagnaNumber: 9,
    ownLagnaTe: '9. ధనుస్సు లగ్నము',
    ownLagnaEn: '9. Dhanussu (Sagittarius)',
    nameTe: 'కేతువు',
    nameEn: 'Ketu',
    titleTe: 'గురు వర్గ ఇన్‌స్పెక్టర్ • నిరాకార భక్తి & మోక్ష కారకుడు',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 5: వృశ్చికం (8 - సరి) + ధనస్సు (9 - బేసి) = భూమి & కేతువు',
    speedPerLagnaTe: '1½ సంవత్సరములు (18 నెలలు)',
    speedFullCircleTe: '18 సంవత్సరములు',
    motionDirectionTe: 'అపసవ్యము (Anti-clockwise — వెనుకకు తిరుగును)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'కేతువుకు 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 7,
    dashaOrder: 9,
    dashaNakshatraPadasTe: 'మూల 1,2,3,4 • పూర్వాషాఢ 1,2,3,4 • ఉత్తరాషాఢ 1వ పాదం (ధనుస్సు లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'చిత్ర (మిథునం - 3వ స్థానం)',
    baddhaShatruLagnaTe: 'ధనస్సు (9) × మిథునం (3) — కేతువుకు చిత్ర గ్రహము బద్ధశత్రువు',
    casteReligionTe: 'ఇస్లామీయులు (Muslims)',
    colorTe: 'కొన్ని కలిసిన రంగులు (Multi-spotted / Mixed Color)',
    tasteTe: 'ఉప్పు (Salt)',
    genderTe: 'నపుంసక',
    karakatvamTe: 'నిరాకార జ్ఞానము / నిరాకార భక్తి (Formless Devotion & Liberation)',
    diseasesTe: 'విష జంతు కాటు, అంటువ్యాధులు, పుండ్లు, ఆకస్మిక భయములు',
    gemstoneTe: 'వైఢూర్యము (Cat’s Eye)',
    directionTe: 'పైకి / ఊర్ధ్వ దిశ (Upward)',
    grainTe: 'ఉలవలు (Horse Gram)',
    weekdayTe: 'గురువారము',
    portfolioTe: 'నిరాకార భక్తి (నమాజ్/ధ్యానము), వైరాగ్యము, తత్త్వచింతన, ఆధ్యాత్మిక పరిశోధన, మోక్ష మార్గ ఆసక్తి.',
    specialDiscoveryNoteTe: 'ధనుస్సు లగ్నము గురువుది కాదు; కేతువు యొక్క స్వంత ఇల్లు! రాహు-కేతువులు ఛాయాగ్రహాలు కారు; తలలోని కాలచక్రములో నిజమైన శక్తి గ్రహాలు.',
    icon: '☄️',
    accentColor: '#9333EA'
  },
  {
    id: 'rahu',
    lagnaNumber: 10,
    ownLagnaTe: '10. మకర లగ్నము',
    ownLagnaEn: '10. Makara (Capricorn)',
    nameTe: 'రాహువు',
    nameEn: 'Rahu',
    titleTe: 'శని వర్గ ఇన్‌స్పెక్టర్ • భౌతిక ఆకర్షణ & సాహస కారకుడు',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 6: మకరం (10 - సరి) + కుంభం (11 - బేసి) = రాహువు & శని',
    speedPerLagnaTe: '1½ సంవత్సరములు (18 నెలలు)',
    speedFullCircleTe: '18 సంవత్సరములు',
    motionDirectionTe: 'అపసవ్యము (Anti-clockwise — వెనుకకు తిరుగును)',
    handsCount: 2,
    handsHouses: [1, 7],
    handsExplanationTe: 'రాహువుకు 2 చేతులు కలవు: 1వ మరియు 7వ స్థానములు.',
    dashaYears: 10,
    dashaOrder: 4,
    dashaNakshatraPadasTe: 'పునర్వసు 4వ పాదం • పుష్యమి 1,2,3,4 • ఆశ్లేష 1,2,3,4 (కర్కాటక లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'చంద్రుడు (కర్కాటకం - 4వ స్థానం)',
    baddhaShatruLagnaTe: 'మకరం (10) × కర్కాటకం (4) — రాహువుకు చంద్రుడు బద్ధశత్రువు',
    casteReligionTe: 'వాల్మీకి / బోయ',
    colorTe: 'సిమెంటు రంగు (Cement Grey)',
    tasteTe: 'మిరియాల కారం (Black Pepper Spicy)',
    genderTe: 'స్త్రీ',
    karakatvamTe: 'చోరులు / రహస్య వ్యూహములు (Thieves / Secret Strategy)',
    diseasesTe: 'విష ప్రయోగములు, క్యాన్సర్, ఉబ్బసము, దీర్ఘకాలిక గుప్త వ్యాధులు',
    gemstoneTe: 'గోమేధికము (Hessonite)',
    directionTe: 'నైరుతి దిశ (South-West)',
    grainTe: 'మినుములు (Black Gram)',
    weekdayTe: 'బుధవారము',
    portfolioTe: 'రాజకీయ తంత్రములు, విదేశీ యానము, ఆకస్మిక ధనలాభము, రహస్య వ్యాపారములు, సాహస కృత్యములు.',
    specialDiscoveryNoteTe: 'మకర లగ్నము శనిది కాదు; రాహువు యొక్క స్వంత ఇల్లు! రాహువు శని వర్గములోని గ్రహమైనప్పటికీ గురు వర్గపు కర్కాటక లగ్న నక్షత్ర పాదాలలో దశను పర్యవేక్షించు ఇన్‌స్పెక్టర్‌గా పనిచేస్తాడు.',
    icon: '🐉',
    accentColor: '#475569'
  },
  {
    id: 'shani',
    lagnaNumber: 11,
    ownLagnaTe: '11. కుంభ లగ్నము',
    ownLagnaEn: '11. Kumbha (Aquarius)',
    nameTe: 'శని (మందుడు)',
    nameEn: 'Shani (Saturn)',
    titleTe: 'శని వర్గ నాయకుడు • ఆయుష్షు కారకుడు • 4 చేతుల బలగ్రహము',
    party: 'శని వర్గము',
    partyEn: 'Shani Party',
    pairCodeTe: 'జత 6: మకరం (10 - సరి) + కుంభం (11 - బేసి) = రాహువు & శని',
    speedPerLagnaTe: '2½ సంవత్సరములు (30 నెలలు)',
    speedFullCircleTe: '30 సంవత్సరములు',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 4,
    handsHouses: [1, 3, 7, 10],
    handsExplanationTe: 'శనికి 4 చేతులు (గ్రాహిత శక్తులు) కలవు: తాను ఉన్న 1వ స్థానముతో పాటు 3, 7, 10 స్థానములలో ఉన్న కర్మను పట్టుకొని అనుభవింపజేయును.',
    dashaYears: 13,
    dashaOrder: 7,
    dashaNakshatraPadasTe: 'చిత్త 3,4 పాదాలు • స్వాతి 1,2,3,4 • విశాఖ 1,2,3 (తులా లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'సూర్యుడు (సింహం - 5వ స్థానం)',
    baddhaShatruLagnaTe: 'కుంభం (11) × సింహం (5) — శనికి సూర్యుడు బద్ధశత్రువు',
    casteReligionTe: 'మాదిగ / మాల (శ్రమజీవులు)',
    colorTe: 'నలుపు రంగు (Black)',
    tasteTe: 'కరక్కాయ వగరు (Myrobalan Astringent)',
    genderTe: 'నపుంసక',
    karakatvamTe: 'ఆయువు / ఆయుష్షు (Lifespan & Longevity)',
    diseasesTe: 'పక్షవాతము (Paralysis), వాత రోగములు, కాళ్ళు-కీళ్ల నొప్పులు, దీర్ఘకాలిక వృద్ధాప్య వ్యాధులు',
    gemstoneTe: 'నీలము (Blue Sapphire)',
    directionTe: 'పడమర దిశ (West)',
    grainTe: 'నువ్వులు (Sesame Seeds)',
    weekdayTe: 'శనివారము',
    portfolioTe: 'ఆయుష్షు నిర్ధారణ, కఠిన శ్రమ, ఇనుము/యంత్ర పరిశ్రమలు, న్యాయ నిష్ఠ, ప్రజాసేవ, కర్మ ఫల శిక్షకుడు.',
    icon: '🪐',
    accentColor: '#1E293B'
  },
  {
    id: 'guru',
    lagnaNumber: 12,
    ownLagnaTe: '12. మీన లగ్నము',
    ownLagnaEn: '12. Meena (Pisces)',
    nameTe: 'గురువు (బృహస్పతి)',
    nameEn: 'Guru (Jupiter)',
    titleTe: 'గురు వర్గ నాయకుడు • కర్మచక్ర కేంద్ర అధిపతి • 4 చేతుల బలగ్రహము',
    party: 'గురు వర్గము',
    partyEn: 'Guru Party',
    pairCodeTe: 'జత 1: మీనం (12 - సరి) + మేషం (1 - బేసి) = గురువు & కుజుడు',
    speedPerLagnaTe: '1 సంవత్సరము (12 నెలలు)',
    speedFullCircleTe: '12 సంవత్సరములు',
    motionDirectionTe: 'సవ్యము (Clockwise)',
    handsCount: 4,
    handsHouses: [1, 5, 7, 9],
    handsExplanationTe: 'గురువుకు 4 చేతులు (గ్రాహిత శక్తులు) కలవు: తాను ఉన్న 1వ స్థానముతో పాటు 5, 7, 9 (పుణ్య కోణ) స్థానములలో ఉన్న కర్మను పట్టుకొని అనుభవింపజేయును.',
    dashaYears: 13,
    dashaOrder: 5,
    dashaNakshatraPadasTe: 'మఖ 1,2,3,4 • పుబ్బ 1,2,3,4 • ఉత్తర 1వ పాదం (సింహ లగ్న 9 పాదాలు)',
    baddhaShatruTe: 'బుధుడు (కన్య - 6వ స్థానం)',
    baddhaShatruLagnaTe: 'మీనం (12) × కన్య (6) — గురువుకు బుధుడు బద్ధశత్రువు',
    casteReligionTe: 'బ్రాహ్మణ (బ్రహ్మజ్ఞానులు)',
    colorTe: 'పసుపు రంగు (Yellow / Gold)',
    tasteTe: 'పూర్తి తీపి (Pure Sweet)',
    genderTe: 'పురుష',
    karakatvamTe: 'పుత్రుడు / సంతానము & ఆత్మజ్ఞాన గురువు',
    diseasesTe: 'కామెర్లు (Jaundice), కాలేయ వ్యాధులు, ఊబకాయము, కఫ వ్యాధులు',
    gemstoneTe: 'పుష్యరాగము (Yellow Sapphire)',
    directionTe: 'ఈశాన్య దిశ (North-East)',
    grainTe: 'సెనగలు (Bengal Gram / Chickpeas)',
    weekdayTe: 'గురువారము',
    portfolioTe: 'బ్రహ్మజ్ఞానము, ఆధ్యాత్మిక గురుత్వము, పుత్ర సంతానము, ధర్మకార్యములు, కీర్తి ప్రతిష్ఠలు, కర్మచక్ర కేంద్ర నియంత్రణ.',
    icon: '🟡',
    accentColor: '#CA8A04'
  }
];

// ==========================================
// THE 12 KARMA CHAKRA HOUSES (కర్మచక్రములోని 12 స్థానములు / రాశులు)
// ==========================================
export const TWELVE_KARMA_HOUSES_DATA: KarmaHouseRecord[] = [
  {
    houseNumber: 1,
    sanskritNameTe: 'ప్రథమ స్థానము (తను స్థానము)',
    popularNameTe: '1వ రాశి / శరీర ప్రారంభ స్థానము',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'అంగీ భాగపు ఆరంభ స్థానము',
    konaStatusTe: 'పుణ్య కోణము (కేవలం పుణ్యము మాత్రమే)',
    oppositeHouse: 7,
    oppositeRelationTe: '1వ స్థానము (పుణ్య కోణము) × 7వ స్థానము (పాప కోణము / కళత్ర స్థానము)',
    significationsTe: [
      'శరీర ప్రారంభము (జననము), ఆత్మ స్వభావము, శరీర ఆకృతి & రంగు',
      'అంగ సౌష్టవము, శారీరక అవయవాల ఆరోగ్యము',
      '1, 5, 9 పుణ్య కోణములలో మొదటిది కావున ఇందులో కేవలం పుణ్య కర్మ మాత్రమే నిల్వ ఉండును!'
    ],
    deepSecretTe: 'కర్మచక్రములో 1వ స్థానము (పుట్టుక) 12వ స్థానమునకు (మరణమునకు) ఆనుకొని ఉంటుంది — పుట్టుకతోనే మరణ ప్రయాణం మొదలవుతుంది.'
  },
  {
    houseNumber: 2,
    sanskritNameTe: 'ద్వితీయ స్థానము (ధన / వాక్ స్థానము)',
    popularNameTe: '2వ రాశి / కుటుంబ & వాక్కు స్థానము',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'సరి సంఖ్య మిశ్రమ స్థానము',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 8,
    oppositeRelationTe: '2వ స్థానము (అజ్ఞాన జీవిత ఆయుష్షు) × 8వ స్థానము (జ్ఞాన ప్రపంచ ఆయుష్షు)',
    significationsTe: [
      'వాక్కు (మాట తీరు), కుటుంబము, కుడి కన్ను, ముఖ వర్చస్సు',
      'అజ్ఞాన ప్రపంచములో మనిషి ఎంత కాలము జీవిస్తాడో తెలుపు ఆయుష్షు స్థానము',
      'సరి సంఖ్య (2) కావున ఇందులో పాపము మరియు పుణ్యము రెండునూ నిల్వ ఉంటాయి.'
    ],
    deepSecretTe: '2వ స్థానము అజ్ఞాన జీవిత కాలాన్ని తెలిపితే, దానికి ఎదురుగా ఉన్న 8వ స్థానము జ్ఞాన జీవిత కాలాన్ని (మొత్తం ఆయుష్షును) తెలుపుతుంది.'
  },
  {
    houseNumber: 3,
    sanskritNameTe: 'తృతీయ స్థానము (సోదర / పరాక్రమ స్థానము)',
    popularNameTe: '3వ రాశి / కనిష్ట సోదర & ప్రపంచ ధన చలామణి స్థానము',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'పాప త్రికోణ ఆరంభ స్థానము',
    konaStatusTe: 'పాప కోణము (కేవలం పాపము మాత్రమే)',
    oppositeHouse: 9,
    oppositeRelationTe: '3వ స్థానము (పాప కోణము / ధన చలామణి) × 9వ స్థానము (పుణ్య కోణము / ధన నిల్వ)',
    significationsTe: [
      'కనిష్ట సోదరులు (తమ్ముళ్లు, చెల్లెండ్రు), దాయాదులు, ధైర్యసాహసములు',
      'ప్రపంచ ధనము (డబ్బు చేతిలో ఆడుతూ చలామణి అగుట)',
      '3, 7, 11 పాప కోణములలో మొదటిది కావున ఇందులో కేవలం పాప కర్మ మాత్రమే నిల్వ ఉండును!'
    ],
    deepSecretTe: '3వ స్థానము డబ్బు చలామణిని (Cash Flow) తెలిపితే, దానికి ఎదురుగా ఉన్న 9వ స్థానము డబ్బు నిల్వను (Bank Balance / పితృ ధనము) తెలుపుతుంది.'
  },
  {
    houseNumber: 4,
    sanskritNameTe: 'చతుర్థ స్థానము (మాతృ & స్థిరాస్తి కేంద్రము)',
    popularNameTe: '4వ రాశి / అంగీ కేంద్ర స్థానము (మొదటి కేంద్రము)',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'మొదటి కేంద్ర స్థానము (2, 3, [4], 5, 6 స్థానములకు సరిగ్గా మధ్య కేంద్రము!)',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 10,
    oppositeRelationTe: '4వ స్థానము (కనిపించే స్థూల స్థిరాస్తి) × 10వ స్థానము (కనిపించని సూక్ష్మ ఆస్తి / కీర్తి)',
    significationsTe: [
      'తల్లి (మాతృ స్థానము), కనిపించే స్థూల స్థిరాస్తులు (భూములు, ఇండ్లు, తోటలు, బావులు)',
      'వాహనములు, పశుసంపద, బంధుబలము, గృహ సౌఖ్యము',
      'శాస్త్రీయంగా కర్మచక్రములో ఉన్న 2 కేంద్రములలో ఇది మొదటి కేంద్రము!'
    ],
    deepSecretTe: 'సాంప్రదాయ జ్యోతిష్యులు 1, 4, 7, 10 నాలుగు కేంద్రాలని పొరపాటు పడ్డారు; కానీ 1 ప్రారంభం, 7 అర్ధాంగి ప్రారంభం. మిగిలిన 2,3,[4],5,6 లకు 4వ స్థానము మాత్రమే నిజమైన కేంద్రము!'
  },
  {
    houseNumber: 5,
    sanskritNameTe: 'పంచమ స్థానము (విద్యా & సంతాన కోణము)',
    popularNameTe: '5వ రాశి / ప్రపంచ జ్ఞాన & బుద్ధి స్థానము',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'పుణ్య త్రికోణ మధ్య స్థానము',
    konaStatusTe: 'పుణ్య కోణము (కేవలం పుణ్యము మాత్రమే)',
    oppositeHouse: 11,
    oppositeRelationTe: '5వ స్థానము (పుణ్య కోణము / లౌకిక విద్య) × 11వ స్థానము (పాప కోణము / గ్రాహిత శక్తి)',
    significationsTe: [
      'ప్రపంచ జ్ఞానము (భౌతిక చదువు, డిగ్రీలు), బుద్ధిబలము, జ్ఞాపకశక్తి',
      'సంతాన ప్రాప్తి (5 మరియు 11 స్థానముల సమన్వయముతో), మంత్రి పదవి, గ్రంథ రచన',
      '1, 5, 9 పుణ్య కోణములలో రెండవది కావున ఇందులో కేవలం పుణ్య కర్మ మాత్రమే ఉండును.'
    ],
    deepSecretTe: '5వ స్థానములో మిత్ర గ్రహములుంటే మంచి చదువు, సంతాన సౌఖ్యము కలుగుతాయి; శత్రు గ్రహములుంటే సంతాన నష్టము లేదా బుద్ధి మందగింపు కలుగును.'
  },
  {
    houseNumber: 6,
    sanskritNameTe: 'షష్ఠమ స్థానము (శత్రు • ఋణ • రోగ స్థానము)',
    popularNameTe: '6వ రాశి / శత్రు, అప్పులు & వ్యాధుల స్థానము',
    sectionTe: 'అంగీ భాగము (1–6 స్థానములు: అజ్ఞాన / ప్రపంచ భాగము)',
    kendraStatusTe: 'అంగీ భాగపు చివరి (6వ) స్థానము',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 12,
    oppositeRelationTe: '6వ స్థానము (రోగము / ఋణము) × 12వ స్థానము (వ్యయము / శరీర అంత్యము)',
    significationsTe: [
      'శత్రు భయము, ఋణములు (అప్పులు ఇచ్చుట/తీసుకొనుట), శారీరక రోగములు',
      'వడ్డీ వ్యాపారము, వైద్య వృత్తి (డాక్టర్లు), కోర్టు తగాదాలు',
      'ఇందులో పాపము ఎక్కువైతే తీరని రోగాలు, అప్పుల బాధలు కలుగుతాయి.'
    ],
    deepSecretTe: '6వ స్థానములో మిత్ర గ్రహము బలముగా ఉంటే వడ్డీ వ్యాపారము, వైద్య వృత్తిలో రాణిస్తారు; శత్రు గ్రహము ఉంటే తమ సొమ్మే అప్పులపాలై రోగాలతో బాధపడతారు.'
  },
  {
    houseNumber: 7,
    sanskritNameTe: 'సప్తమ స్థానము (కళత్ర / అర్ధాంగీ స్థానము)',
    popularNameTe: '7వ రాశి / భార్యాభర్తల & దాంపత్య స్థానము',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'అర్ధాంగీ భాగపు ఆరంభ స్థానము',
    konaStatusTe: 'పాప కోణము (కేవలం పాపము మాత్రమే)',
    oppositeHouse: 1,
    oppositeRelationTe: '7వ స్థానము (అర్ధాంగి / పాప కోణము) × 1వ స్థానము (అంగి / పుణ్య కోణము)',
    significationsTe: [
      'భార్య లేదా భర్త (కళత్రము / అర్ధాంగి), వివాహ బంధము, కామ సౌఖ్యము',
      'భాగస్వామ్య వ్యాపారము, పరస్త్రీ / పరపురుష సాంగత్యము',
      '3, 7, 11 పాప కోణములలో రెండవది కావున ఇందులో పాప కర్మ నిల్వ ఉండును!'
    ],
    deepSecretTe: '1 నుండి 6 వరకు భర్త (అంగీ) భాగమైతే, 7 నుండి 12 వరకు భార్య (అర్ధాంగీ) భాగము! అందుకే వివాహమైన తర్వాత భార్య జాతక బలము భర్త జీవితాన్ని మార్చివేస్తుంది.'
  },
  {
    houseNumber: 8,
    sanskritNameTe: 'అష్టమ స్థానము (ఆయుష్షు స్థానము)',
    popularNameTe: '8వ రాశి / ఆయుర్దాయ & ప్రమాద స్థానము',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'సరి సంఖ్య మిశ్రమ స్థానము',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 2,
    oppositeRelationTe: '8వ స్థానము (జ్ఞాన జీవిత ఆయుష్షు) × 2వ స్థానము (అజ్ఞాన జీవిత ఆయుష్షు)',
    significationsTe: [
      'పూర్ణ ఆయుష్షు నిర్ధారణ, జ్ఞాన ప్రపంచ జీవిత కాలము',
      'అకాల మరణము, రోడ్డు/అగ్ని ప్రమాదములు, శస్త్రచికిత్సలు, గండములు',
      'దీర్ఘనాడి, స్పర్శనాడి, మధ్యనాడి రహస్యములు'
    ],
    deepSecretTe: 'మనిషికి 3 రకాల మరణాలు (సహజ/కాల మరణము, అకాల మరణము, తాత్కాలిక మరణము) ఉంటాయి. 8వ స్థానము మరియు శని బలము ఆయుష్షును నిర్ణయిస్తాయి.'
  },
  {
    houseNumber: 9,
    sanskritNameTe: 'నవమ స్థానము (పితృ • భాగ్య • ధర్మ కోణము)',
    popularNameTe: '9వ రాశి / తండ్రి ఆస్తి, ధన నిల్వ & దైవభక్తి స్థానము',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'పుణ్య త్రికోణ శిఖర స్థానము',
    konaStatusTe: 'పుణ్య కోణము (కేవలం పుణ్యము మాత్రమే)',
    oppositeHouse: 3,
    oppositeRelationTe: '9వ స్థానము (పుణ్య కోణము / ధన నిల్వ) × 3వ స్థానము (పాప కోణము / ధన చలామణి)',
    significationsTe: [
      'తండ్రి (పితృ స్థానము), పూర్వీకుల ఆస్తి, పరమాత్మ ధనము & ప్రపంచ ధన నిల్వ',
      'భక్తి, దానధర్మములు, తపస్సు, సద్గురు భక్తి, ఆధ్యాత్మిక పుణ్య సంపద',
      '1, 5, 9 పుణ్య కోణములలో మూడవది కావున ఇందులో కేవలం పుణ్య కర్మ మాత్రమే నిల్వ ఉండును!'
    ],
    deepSecretTe: '9వ స్థానము బలముగా ఉన్నవారికి తండ్రి ఆస్తి, తరగని ధన నిల్వ మరియు దైవభక్తి లభిస్తాయి.'
  },
  {
    houseNumber: 10,
    sanskritNameTe: 'దశమ స్థానము (జీవన • రాజ్య • కీర్తి కేంద్రము)',
    popularNameTe: '10వ రాశి / అర్ధాంగీ కేంద్ర స్థానము (రెండవ కేంద్రము)',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'రెండవ కేంద్ర స్థానము (8, 9, [10], 11, 12 స్థానములకు సరిగ్గా మధ్య కేంద్రము!)',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 4,
    oppositeRelationTe: '10వ స్థానము (కనిపించని సూక్ష్మ ఆస్తి / కీర్తి) × 4వ స్థానము (కనిపించే స్థూల స్థిరాస్తి)',
    significationsTe: [
      'కనిపించని సూక్ష్మ ఆస్తి అయిన కీర్తి ప్రతిష్ఠలు (Fame & Reputation)',
      'జీవనోపాధి, ఉద్యోగము, వృత్తి, వ్యాపారము, రాజకీయ పాలనాధికారము',
      'గ్రంథ ముద్రణాధికారము, సమాజములో శాశ్వత గౌరవము'
    ],
    deepSecretTe: '4వ స్థానము కనిపించే భూమి/ఇల్లు వంటి స్థూల ఆస్తిని తెలిపితే, 10వ స్థానము మరణానంతరం కూడా నిలిచే "కీర్తి" అనే కనిపించని సూక్ష్మ ఆస్తిని తెలుపుతుంది (ఉదా: మహాత్మా గాంధీ, ముహమ్మద్ ప్రవక్త జాతకాలలో 10వ స్థాన బలము).'
  },
  {
    houseNumber: 11,
    sanskritNameTe: 'ఏకాదశ స్థానము (లాభ & ప్రవృత్తి కోణము)',
    popularNameTe: '11వ రాశి / ఆకస్మిక లాభ & జ్ఞాన గ్రాహిత స్థానము',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'పాప త్రికోణ శిఖర స్థానము',
    konaStatusTe: 'పాప కోణము (కేవలం పాపము మాత్రమే)',
    oppositeHouse: 5,
    oppositeRelationTe: '11వ స్థానము (పాప కోణము / గ్రాహిత శక్తి) × 5వ స్థానము (పుణ్య కోణము / విద్యా స్థానము)',
    significationsTe: [
      'పరమాత్మ జ్ఞానము మరియు ప్రపంచ జ్ఞానమును గ్రహించు శక్తి (Grasping Power)',
      'కట్నకానుకలు, లాటరీలు, డొనేషన్లు, లంచము, కమీషన్లు, అయాచిత లాభములు',
      '3, 7, 11 పాప కోణములలో మూడవది కావున ఇందులో పాప కర్మ నిల్వ ఉండును.'
    ],
    deepSecretTe: '5వ స్థానములో అక్షర జ్ఞానము లేకపోయినా, 11వ స్థానములో మిత్ర గ్రహ బలముంటే అద్భుతమైన గ్రాహిత శక్తి (తెలివితేటలు) మరియు ఆధ్యాత్మిక జ్ఞాన గ్రహణ శక్తి ఉంటాయి.'
  },
  {
    houseNumber: 12,
    sanskritNameTe: 'ద్వాదశ స్థానము (వ్యయ • మోక్ష • శరీర అంత్య స్థానము)',
    popularNameTe: '12వ రాశి / మరణ & మోక్ష చింతనా స్థానము',
    sectionTe: 'అర్ధాంగీ భాగము (7–12 స్థానములు: భార్య / జ్ఞాన భాగము)',
    kendraStatusTe: 'అర్ధాంగీ భాగపు చివరి (12వ) స్థానము',
    konaStatusTe: 'మిశ్రమ స్థానము (పాపము + పుణ్యము రెండునూ నిల్వ ఉండును)',
    oppositeHouse: 6,
    oppositeRelationTe: '12వ స్థానము (వ్యయము / మోక్షము) × 6వ స్థానము (ఋణము / శత్రువు)',
    significationsTe: [
      'శరీర అంత్యము (చివరి దశ / మరణ స్థితి), ధన వ్యయము (ఖర్చులు)',
      'సద్గ్రంథ పఠనము (భగవద్గీత, ఖుర్ఆన్, బైబిలు మొదలగు పవిత్ర గ్రంథముల అధ్యయనము)',
      'మోక్ష చింతన, అంతిమ సంస్కారములు, పరలోక ప్రయాణము'
    ],
    deepSecretTe: '12వ స్థానములో మిత్ర గ్రహములుంటే మరణ సమయాన భగవత్ స్మరణ, సద్గ్రంథ జ్ఞానము మరియు ప్రశాంత నిష్క్రమణ కలుగుతాయి.'
  }
];

// ==========================================
// 27 NAKSHATRAS DIVIDED BY 3 ATMAS (జీవాత్మ • ఆత్మ • పరమాత్మ నక్షత్రములు)
// ==========================================
export const NAKSHATRA_THREE_ATMAS_GROUPING = [
  {
    groupNameTe: '1. జీవాత్మ నక్షత్రములు (క్షర ఆత్మ — 9 నక్షత్రములు)',
    groupCodeTe: 'సంఖ్య 3 (జీవాత్మ కోడ్) • ప్రతి లగ్నములో మొదటి నక్షత్రము',
    nakshatrasTe: [
      '1. అశ్విని (4 పాదాలు - మేషం)',
      '4. రోహిణి (4 పాదాలు - వృషభం)',
      '7. పునర్వసు (3 పాదాలు మిథునం + 1 పాదం కర్కాటకం)',
      '10. మఖ (4 పాదాలు - సింహం)',
      '13. హస్త (4 పాదాలు - కన్య)',
      '16. విశాఖ (3 పాదాలు తుల + 1 పాదం వృశ్చికం)',
      '19. మూల (4 పాదాలు - ధనస్సు)',
      '22. శ్రవణం (4 పాదాలు - మకరం)',
      '25. పూర్వాభాద్ర (3 పాదాలు కుంభం + 1 పాదం మీనం)'
    ],
    color: '#D97706'
  },
  {
    groupNameTe: '2. ఆత్మ నక్షత్రములు (అక్షర ఆత్మ — 9 నక్షత్రములు)',
    groupCodeTe: 'సంఖ్య 6 (ఆత్మ కోడ్) • ప్రతి 3 నక్షత్రములలో రెండవ నక్షత్రము',
    nakshatrasTe: [
      '2. భరణి (4 పాదాలు - మేషం)',
      '5. మృగశిర (2 పాదాలు వృషభం + 2 పాదాలు మిథునం)',
      '8. పుష్యమి (4 పాదాలు - కర్కాటకం)',
      '11. పుబ్బ / పూర్వফల్గుణి (4 పాదాలు - సింహం)',
      '14. చిత్త (2 పాదాలు కన్య + 2 పాదాలు తుల)',
      '17. అనూరాధ (4 పాదాలు - వృశ్చికం)',
      '20. పూర్వాషాఢ (4 పాదాలు - ధనస్సు)',
      '23. ధనిష్ఠ (2 పాదాలు మకరం + 2 పాదాలు కుంభం)',
      '26. ఉత్తరాభాద్ర (4 పాదాలు - మీనం)'
    ],
    color: '#2563EB'
  },
  {
    groupNameTe: '3. పరమాత్మ నక్షత్రములు (పురుషోత్తమ ఆత్మ — 9 నక్షత్రములు)',
    groupCodeTe: 'సంఖ్య 9 (పరమాత్మ కోడ్) • ప్రతి 3 నక్షత్రములలో మూడవ నక్షత్రము',
    nakshatrasTe: [
      '3. కృత్తిక (1 పాదం మేషం + 3 పాదాలు వృషభం)',
      '6. ఆరుద్ర (4 పాదాలు - మిథునం)',
      '9. ఆశ్లేష (4 పాదాలు - కర్కాటకం)',
      '12. ఉత్తర (1 పాదం సింహం + 3 పాదాలు కన్య)',
      '15. స్వాతి (4 పాదాలు - తుల)',
      '18. జ్యేష్ఠ (4 పాదాలు - వృశ్చికం)',
      '21. ఉత్తరాషాఢ (1 పాదం ధనస్సు + 3 పాదాలు మకరం)',
      '24. శతభిషం (4 పాదాలు - కుంభం)',
      '27. రేవతి (4 పాదాలు - మీనం)'
    ],
    color: '#7C3AED'
  }
];

// ==========================================
// HISTORICAL & PRACTICAL KUNDALI CASE STUDIES (Chapters 46–48)
// ==========================================
export const KUNDALI_CASE_STUDIES: KundaliCaseStudy[] = [
  {
    id: 'case-gandhi',
    nameTe: '1. మహాత్మా గాంధీ (Mahatma Gandhi)',
    birthDetailsTe: 'జననము: 02-10-1869 • ఉదయం 7:45 • పోరుబందర్ (గుజరాత్)',
    janmaLagnaTe: 'తులా లగ్నము (7) — శని వర్గము',
    lagnaPartyTe: 'శని వర్గము',
    keyPlacementsTe: [
      '1వ స్థానము (తుల - జన్మ లగ్నము): శుక్రుడు (స్వంత ఇల్లు), బుధుడు, కుజుడు, చిత్ర',
      '2వ స్థానము (వృశ్చికం): శని',
      '4వ స్థానము (మకరం - కేంద్రము): కేతువు, మిత్ర',
      '6వ స్థానము (మీనం): భూమి',
      '10వ స్థానము (కర్కాటకం - అర్ధాంగీ కేంద్రము): చంద్రుడు, రాహువు (10వ స్థానముపై శని 3వ చేయి, శుక్ర/బుధ/చిత్ర దృష్టి)',
      '12వ స్థానము (కన్య): సూర్యుడు'
    ],
    analysisTe:
      'తులా లగ్న జాతకుడైన గాంధీజీకి శని వర్గ గ్రహాలైన శుక్రుడు, బుధుడు, శని, రాహువు, మిత్ర, చిత్ర మిత్రులు. 1వ స్థానములో శుక్రుడు స్వంత ఇంట్లో బుధ, చిత్రలతో కలిసి ఉండటము మరియు 10వ స్థానమైన కీర్తి కేంద్రములో రాహువు + శని యొక్క 3వ చేయి బలముగా ఉండటము వల్ల రాజ్యాధికారము లేకపోయినా ప్రపంచవ్యాప్త శాశ్వత కీర్తి (జాతిపిత) లభించింది. అయితే 1వ స్థానములో బద్ధశత్రువైన కుజుడు మరియు 8వ స్థానముపై శత్రు దృష్టి వల్ల తుపాకీ గుండ్లతో అకాల మరణం సంభవించింది.',
    spiritualLessonTe: '10వ స్థానము (దశమ కేంద్రము) కనిపించని సూక్ష్మ ఆస్తి అయిన "శాశ్వత కీర్తి"ని ఇస్తుందని గాంధీజీ జాతకం నిరూపిస్తోంది.'
  },
  {
    id: 'case-muhammad',
    nameTe: '2. ముహమ్మద్ ప్రవక్త (Prophet Muhammad)',
    birthDetailsTe: 'జననము: 20-04-571 AD • మక్కా (సৌదీ అరేబియా)',
    janmaLagnaTe: 'కుంభ లగ్నము (11) — శని వర్గము',
    lagnaPartyTe: 'శని వర్గము',
    keyPlacementsTe: [
      '10వ స్థానము (వృశ్చికం - కీర్తి కేంద్రము): శని, కేతువు (నిరాకార భక్తి కారకుడు), మిత్ర గ్రహము',
      '3వ స్థానము (మేషం): సూర్యుడు, బుధుడు',
      '9వ స్థానము (తుల - భాగ్య కోణము): భూమి'
    ],
    analysisTe:
      'కుంభ లగ్నమునకు అధిపతి శని. 10వ స్థానమైన కీర్తి కేంద్రములో శని తన మిత్రుడైన మిత్ర గ్రహముతో మరియు నిరాకార భక్తి కారకుడైన కేతువుతో కలిసి ఉన్నాడు. కేతువు ఇస్లాం ధర్మమునకు, నిరాకార భక్తికి (నమాజ్) కారకుడు కావున, 10వ స్థాన బలము వల్ల ముహమ్మద్ ప్రవక్త విగ్రహారాధన లేని నిరాకార భక్తిని స్థాపించి ప్రపంచవ్యాప్తంగా కోట్లాది ప్రజలచే కొలువబడే శాశ్వత కీర్తిని పొందారు.',
    spiritualLessonTe: 'కేతువు నిరాకార భక్తికి కారకుడని, 10వ స్థానంలో శని-మిత్ర-కేతువుల కలయిక అఖండ ఆధ్యాత్మిక కీర్తిని ఇస్తుందని ఈ జాతకం స్పష్టం చేస్తోంది.'
  },
  {
    id: 'case-rajiv-gandhi',
    nameTe: '3. రాజీవ్ గాంధీ (Rajiv Gandhi — గ్రహచార మరణ విశ్లేషణ)',
    birthDetailsTe: 'జననము: 20-08-1944 • మరణము: 21-05-1991 (శ్రీపెరుంబుదూర్)',
    janmaLagnaTe: 'తులా లగ్నము (7) — శని వర్గము',
    lagnaPartyTe: 'శని వర్గము',
    keyPlacementsTe: [
      'జన్మ లగ్నము తుల (శని వర్గము) — గురు వర్గ గ్రహాలైన కుజుడు, గురువు, సూర్యుడు, చంద్రుడు, భూమి, కేతువు శత్రువులు.',
      'మరణ దినం (21-05-1991) నాడు గ్రహచారములో: మకర లగ్నములో (4వ స్థానంలో) ఆయుష్షు కారకుడైన శని ఒంటరిగా ఉన్నాడు.',
      'దానికి ఎదురుగా కర్కాటక లగ్నములో (10వ స్థానంలో) శత్రు వర్గపు కుజుడు (బాంబులు/రక్తపాతం), గురువు, సూర్యుడు ముగ్గురూ కలిసి తమ చేతులతో మకరంలోని శనిని బంధించారు!'
    ],
    analysisTe:
      'తులా లగ్న జాతకుడైన రాజీవ్ గాంధీకి ఆయుష్షు కారకుడైన శని మిత్రుడు. కానీ 21-05-1991 నాడు గ్రహచారములో శని మకరంలో ఉండగా, ఎదురుగా కర్కాటకంలో చేరిన ముగ్గురు బలమైన శత్రు గ్రహాలు (కుజుడు, గురువు, సూర్యుడు) తమ 7వ చేతితో శనిని చుట్టుముట్టి నొక్కివేశారు. కుజుడు ప్రేలుడు పదార్థాలకు, రక్తపాతానికి కారకుడు కావున బాంబు ప్రేలుడులో శరీరం ఛిద్రమై అకాల మరణం సంభవించింది.',
    spiritualLessonTe: 'గ్రహచారములో ఆయుష్షు కారకుడైన శనిని శత్రు గ్రహాలు బంధించినప్పుడు గండములు, అకాల మరణము సంభవిస్తాయి.'
  },
  {
    id: 'case-jagan',
    nameTe: '4. వై.ఎస్. జగన్మోహన్ రెడ్డి (Y.S. Jagan Mohan Reddy)',
    birthDetailsTe: 'జననము: 21-12-1972 • ఉదయం 1:30',
    janmaLagnaTe: 'కన్యా లగ్నము (6) — శని వర్గము',
    lagnaPartyTe: 'శని వర్గము',
    keyPlacementsTe: [
      'జన్మ లగ్నము కన్య (శని వర్గము) — బుధుడు, శుక్రుడు, శని, రాహువు, మిత్ర, చిత్ర మిత్ర గ్రహములు.',
      '3వ స్థానము (వృశ్చికం): బుధుడు, శుక్రుడు, కుజుడు',
      '4వ స్థానము (ధనస్సు - కేంద్రము): సూర్యుడు, గురువు, రాహువు',
      '9వ స్థానము (వృషభం - పితృ/భాగ్య కోణము): శని బలముగా ఉండి 10వ చేతితో కుంభమును (6వ స్థానమును) చూచుట'
    ],
    analysisTe:
      'కన్యా లగ్న జాతకునికి శని వర్గ గ్రహాలు మిత్రులు. పితృ స్థానమైన 9వ స్థానములో శని బలముగా ఉండటము వల్ల తండ్రి ఆస్తి, రాజకీయ వారసత్వము మరియు ప్రజలలో ఆదరణ లభించాయి. 4వ స్థానములో శత్రు గ్రహాలైన సూర్య-గురువులతో రాహువు పోరాటం వల్ల జైలు/కేసుల కష్టాలు ఎదురైనా శని వర్గ బలము వల్ల మరలా అధికార యోగము కలిగింది.',
    spiritualLessonTe: '9వ స్థానములో మిత్ర గ్రహమైన శని ఉంటే పితృ వారసత్వం మరియు రాజకీయ పట్టు లభిస్తాయి.'
  },
  {
    id: 'case-vrischika-judge',
    nameTe: '5. వృశ్చిక లగ్న పబ్లిక్ ప్రాసిక్యూటర్ / జడ్జి (5వ & 11వ స్థాన రహస్యము)',
    birthDetailsTe: 'గ్రంథ ఉదాహరణ జాతకము (అధ్యాయము 46)',
    janmaLagnaTe: 'వృశ్చిక లగ్నము (8) — గురు వర్గము (భూమి స్వంత ఇల్లు)',
    lagnaPartyTe: 'గురు వర్గము',
    keyPlacementsTe: [
      '1వ స్థానము (వృశ్చికం): భూమి, కుజుడు (మిత్రులు)',
      '10వ స్థానము (సింహం - కీర్తి/ఉద్యోగ కేంద్రము): సూర్యుడు (స్వంత ఇల్లు), గురువు (4 చేతులతో 2, 4, 6 స్థానములపై దృష్టి)',
      '11వ స్థానము (కన్య - గ్రాహిత శక్తి): చంద్రుడు'
    ],
    analysisTe:
      'ఈ జాతకునికి 5వ స్థానము (మీనం) ఖాళీగా ఉన్నప్పటికీ, గురువు తన 4 చేతులతో మరియు 11వ స్థానములో మిత్రుడైన చంద్రుడు తన 7వ చేతితో 5వ స్థానమును పట్టుకోవడం వల్ల న్యాయశాస్త్ర విద్య (Law) చదివి పబ్లిక్ ప్రాసిక్యూటర్ మరియు జడ్జిగా ఉన్నత పదవిని పొందాడు.',
    spiritualLessonTe: 'ఒక స్థానములో గ్రహము లేకపోయినా, మిత్ర గ్రహముల చేతులు (దృష్టులు) ఆ స్థానముపై పడితే ఆ స్థాన ఫలితము సంపూర్ణముగా అందుతుంది!'
  },
  {
    id: 'case-sai-baba',
    nameTe: '6. పుట్టపర్తి సత్యసాయిబాబా (దశాచారములో కర్మ దహన ఉదాహరణ)',
    birthDetailsTe: 'ఆయుష్షు రహస్య విశ్లేషణ (అధ్యాయము 43)',
    janmaLagnaTe: 'ఆధ్యాత్మిక ప్రబోధ విశ్లేషణ',
    lagnaPartyTe: 'గురు వర్గము',
    keyPlacementsTe: [
      'ప్రకటించిన ఆయుష్షు: 92 సంవత్సరములు (ప్రారబ్ధ లెక్క ప్రకారము)',
      'నిర్యాణము: 86వ ఏట (6 సంవత్సరముల ముందే శరీర త్యాగము)'
    ],
    analysisTe:
      'సత్యసాయిబాబా తాను 92 ఏళ్లు జీవిస్తానని చెప్పారు, కానీ 86 ఏళ్లకే మరణించారు. కారణమేమనగా — ఆయన ఆధ్యాత్మిక ప్రబోధము, భగవద్గీత ప్రచారము మరియు సేవా కార్యముల వల్ల దశాచారములో జ్ఞానాగ్ని చేత 6 సంవత్సరముల ప్రారబ్ధ కర్మ ముందే కాలిపోయింది! కర్మ తగ్గిపోవడం వల్ల 6 ఏళ్ల ముందే శరీర త్యాగం జరిగింది.',
    spiritualLessonTe: 'దైవజ్ఞానము ఆచరిస్తే దశాచారములో కర్మ కాలిపోయి ఆయుష్షు తగ్గవచ్చును; అలాగే దైవదూషణ / జ్ఞానదూషణ చేస్తే పాపకర్మ పెరిగి ఆయుష్షు మారవచ్చును (గీత 16.18–19).'
  }
];

// ==========================================
// ALL 48 CHAPTERS OF "జ్యోతిష్య శాస్త్రము (శాస్త్రమా - అశాస్త్రమా?)"
// ==========================================
export const ALL_48_CHAPTERS_DATA: JyotishyaChapterSummary[] = [
  {
    chapterNumber: 1,
    titleTe: '1. జ్యోతిష్యము అంటే ఏమిటి?',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'జ్యోతి (ఆత్మజ్ఞాన వెలుగు) + ఇష్యము (శరీరాంతర్గత కర్మలోని పాపపుణ్యములను తెలుసుకోవడము) = జ్యోతిష్యము.',
    keyTeachingsTe: [
      'జ్యోతిష్యము అనగా మనిషి లోపల నిల్వ ఉన్న పాప-పుణ్య కర్మలను ఆత్మజ్ఞాన దృష్టితో తెలుసుకోవడము.',
      'ఎన్నికలలో ఎవరు గెలుస్తారు, గుప్పిట్లో ఏముంది, పెట్టెలో ఏముంది అని పందెములు వేయుట జ్యోతిష్యము కాదు.',
      'వాస్తు అనేది అసలు శాస్త్రమే కాదు; వాస్తుకు జ్యోతిష్య శాస్త్రమునకు ఏ సంబంధమూ లేదు.'
    ]
  },
  {
    chapterNumber: 2,
    titleTe: '2. జ్యోతిష్యము శాస్త్రమా?',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'షట్శాస్త్రములలో బ్రహ్మవిద్యా శాస్త్రము మొదటిది కాగా, జ్యోతిష్య శాస్త్రము రెండవ స్థానమును ఆక్రమించిన ప్రామాణిక శాస్త్రము.',
    keyTeachingsTe: [
      'ఆరు శాస్త్రములు (షట్శాస్త్రములు): 1) బ్రహ్మవిద్యా శాస్త్రము, 2) జ్యోతిష్య శాస్త్రము, 3) ఖగోళ శాస్త్రము, 4) భౌతిక శాస్త్రము, 5) రసాయన శాస్త్రము, 6) గణిత శాస్త్రము.',
      'ఆత్మజ్ఞాని నోటి నుండి వచ్చిన శాపము/దీవెన శాసనమై, ఆ శాసనమే శాస్త్రముగా నిలిచింది.'
    ]
  },
  {
    chapterNumber: 3,
    titleTe: '3. ఎవడు జ్యోతిష్యుడు?',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'మూడు కాలములను చూచు మూడు నేత్రములు: మనోనేత్రము (భూతకాలము), బాహ్యనేత్రము (వర్తమానము), జ్ఞాననేత్రము (భవిష్యత్తు).',
    keyTeachingsTe: [
      'భూతకాలమును మనోనేత్రము (జ్ఞాపకశక్తి) తో, వర్తమానమును చర్మనేత్రములతో చూడవచ్చును.',
      'భవిష్యత్ కాలమును కేవలం జ్ఞాననేత్రము (ఆత్మజ్ఞాన దృష్టి) ఉన్నవాడే చూడగలడు; కేవలం పంచాంగం చదివేవాడు జ్యోతిష్యుడు కాడు.'
    ]
  },
  {
    chapterNumber: 4,
    titleTe: '4. జ్యోతిష్యము మనుషులకేనా జంతువులకు కూడా వర్తిస్తుందా?',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'కర్మ ఉన్న ప్రతి ప్రాణికి (అండజ, పిండజ, ఉద్భిజ, జంతు, పక్షి, మనుష్య, స్త్రీ, పురుష, స్థూల, సూక్ష్మ శరీరులకు) జ్యోతిష్యము వర్తిస్తుంది.',
    keyTeachingsTe: [
      'తలలోని చక్రములు మరియు కర్మ సమస్త జీవరాశులకు ఉంటాయి కావున జ్యోతిష్యము సర్వప్రాణులకూ వర్తిస్తుంది.'
    ]
  },
  {
    chapterNumber: 5,
    titleTe: '5. జాతకము అంటే ఏమిటి? (జాఫతకము)',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'అసలు మూల పదము "జాఫతకము" (జా = పుట్టుక + ఫతకము = పథకము). మరణ సమయాన సెకనులోపు తయారయ్యే పుట్టుక పథకమే జాతకము.',
    keyTeachingsTe: [
      'జ (పుట్టుక) నుండి గతి (మరణము) వరకు నడిచేది జగతి (జీవితము).',
      'మనిషి చనిపోయే చివరి క్షణంలో సంచిత కర్మ నుండి తరువాతి జన్మకు కేటాయించబడే ప్రారబ్ధ కర్మ ప్రణాళికే జాఫతకము.'
    ]
  },
  {
    chapterNumber: 6,
    titleTe: '6. కాలచక్రము - కర్మచక్రము',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'మనిషి తలలోని ఫాలభాగమున (నుదుటిలో) బ్రహ్మచక్రము, కాలచక్రము, కర్మచక్రము, గుణచక్రము అను 4 చక్రములు కలవు.',
    keyTeachingsTe: [
      'బాహ్య ఆకాశములో ఉన్న గ్రహాల కంటే ముందుగా మనిషి తలలోనే సూక్ష్మ కాలచక్రము, కర్మచక్రము కలవు.',
      'కాలచక్రము తిరుగుతూ కర్మచక్రములోని ప్రారబ్ధ కర్మను గుణచక్రము ద్వారా అనుభవింపజేస్తుంది.'
    ]
  },
  {
    chapterNumber: 7,
    titleTe: '7. కర్మంటే ఏమిటి?',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: '“మర్మముగా ఉన్నది కర్మము” — ప్రతి పనికి కనిపించే ఫలితము (కూలి/జీతము) మరియు కనిపించని ఫలితము (కర్మ) అని రెండు ఉంటాయి.',
    keyTeachingsTe: [
      'కనిపించే ఫలితము జేబులోకి వెళితే, కనిపించని పాప-పుణ్య ఫలితము నుదుటిలోని కర్మచక్రములోకి వెళుతుంది.',
      'అందుకే మనిషి కష్టం వచ్చినప్పుడు తనకు తెలియకుండానే నుదుటిపై చేయి వేసుకుని "ఇది నా తలవ్రాత / నా కర్మ" అంటాడు.'
    ]
  },
  {
    chapterNumber: 8,
    titleTe: '8. కర్మ పుట్టుక - కర్మ నిలువ - కర్మ ఖర్చు (324 కర్మలు)',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'గుణచక్రములోని 324 గుణముల నుండి కర్మ పుడుతుంది; ఆగామి కర్మ 69 సం|| 5 నెలల 10 రోజులకు సంచిత కర్మగా మారుతుంది.',
    keyTeachingsTe: [
      '6 చెడు గుణములు (కామ, క్రోధ, లోభ, మోహ, మద, మత్సర) × 9 = 54 పాప గుణములు; 6 మంచి గుణములు (దాన, దయ, ఔదార్య, వైరాగ్య, వినయ, ప్రేమ) × 9 = 54 పుణ్య గుణములు = 108 గుణములు (మాయ).',
      'తామస, రాజస, సాత్త్విక అను 3 గుణ భాగములలో 108 × 3 = 324 గుణముల నుండి 324 రకాల కర్మలు పుడతాయి.',
      'ఆగామి కర్మ (ఈ జన్మ సంపాదన) 69 సం|| 5 నెలల 10 దినములకు సంచిత కర్మగా (నిల్వ కర్మగా) మారుతుంది.'
    ]
  },
  {
    chapterNumber: 9,
    titleTe: '9. కర్మను అనుభవించువాడు ఎవడు?',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'బుద్ధి, చిత్తము, అహము అనే మూడు పొరలచే బంధింపబడిన జీవుడే గుణచక్రములో తిరుగుతూ కర్మను అనుభవిస్తాడు.',
    keyTeachingsTe: [
      'జీవుడు తామస భాగములో ఉంటే తామసుడు, రాజస భాగములో ఉంటే రాజసుడు, సాత్త్విక భాగములో ఉంటే సాత్త్వికుడు అనబడును.',
      'గుణచక్రం మధ్యలో ఉన్న 4వ భాగమైన "ఆత్మ భాగము (బ్రహ్మయోగ స్థానము)" లోనికి జీవుడు ప్రవేశిస్తే ఏ కర్మమూ అంటదు.'
    ]
  },
  {
    chapterNumber: 10,
    titleTe: '10. గ్రహములు 9 కావు 12 (ద్వాదశ గ్రహములు)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: '12 గుణములు, 12 రాశులు, 12 లగ్నములు ఉన్నట్లే గ్రహములు కూడా 9 కావు, 12 గ్రహములు!',
    keyTeachingsTe: [
      'నవగ్రహములతో పాటు భూమి (10వ గ్రహము), మిత్ర (11వ చీకటి గ్రహము), చిత్ర (12వ అదృశ్య రంగుల గ్రహము) కలిపి మొత్తం 12 గ్రహములు కలవు.'
    ]
  },
  {
    chapterNumber: 11,
    titleTe: '11. 12 లగ్నములలో 12 గ్రహముల స్వంత స్థానములు',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'ప్రతి లగ్నమునకు ఒకే ఒక్క స్వంత గ్రహము కలదు; ఒక గ్రహమునకు రెండు ఇండ్లు ఉండవు!',
    keyTeachingsTe: [
      'మేషం-కుజ, వృషభం-మిత్ర, మిథునం-చిత్ర, కర్కాటకం-చంద్ర, సింహం-సూర్య, కన్య-బుధ, తుల-శుక్ర, వృశ్చికం-భూమి, ధనస్సు-కేతు, మకరం-రాహు, కుంభం-శని, మీనం-గురువు.'
    ]
  },
  {
    chapterNumber: 12,
    titleTe: '12. రాహు-కేతువులకు స్వంత స్థానములు',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'రాహు-కేతువులు ఛాయాగ్రహాలు కారు; ధనస్సు కేతువు స్వంత ఇల్లు, మకరం రాహువు స్వంత ఇల్లు.',
    keyTeachingsTe: [
      'రాహువు, కేతువులు అపసవ్యముగా (Anti-clockwise) తిరిగే పూర్తి శక్తి గల గ్రహములు.'
    ]
  },
  {
    chapterNumber: 13,
    titleTe: '13. 2:1 (సరి-బేసి) సూత్రము & మిత్ర-శత్రు విభజన',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'త్రైత సిద్ధాంత 2:1 (2 కర్మలేని ఆత్మలు : 1 కర్మవున్న జీవాత్మ) సూత్రము ప్రకారం సరి-బేసి జతలుగా గ్రహ వర్గాలు ఏర్పడ్డాయి.',
    keyTeachingsTe: [
      'మీనం(12)-మేషం(1), వృషభం(2)-మిథునం(3), కర్కాటకం(4)-సింహం(5), కన్య(6)-తుల(7), వృశ్చికం(8)-ధనస్సు(9), మకరం(10)-కుంభం(11) అను 6 జతలు ఏర్పడును.'
    ]
  },
  {
    chapterNumber: 14,
    titleTe: '14. గురు వర్గము - శని వర్గము (రెండు పార్టీలు)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: '12 గ్రహములు గురు వర్గము (6 గ్రహాలు) మరియు శని వర్గము (6 గ్రహాలు) అని రెండు శాశ్వత వర్గాలుగా విభజించబడ్డాయి.',
    keyTeachingsTe: [
      'గురు వర్గము: గురువు, కుజుడు, చంద్రుడు, సూర్యుడు, భూమి, కేతువు.',
      'శని వర్గము: శని, రాహువు, మిత్ర, చిత్ర, బుధుడు, శుక్రుడు.',
      'గురు వర్గమునకు శని వర్గము శత్రువు; శని వర్గమునకు గురు వర్గము శత్రువు. సముడు (Neutral) అనే గ్రహమే లేదు!'
    ]
  },
  {
    chapterNumber: 15,
    titleTe: '15. గురు వర్గ లగ్న జాతకులకు మిత్ర-శత్రువులు',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'మీనం, మేషం, కర్కాటకం, సింహం, వృశ్చికం, ధనస్సు లగ్నములలో పుట్టినవారికి గురు వర్గ 6 గ్రహాలు శుభులు/మిత్రులు.',
    keyTeachingsTe: [
      'వీరికి శని వర్గ 6 గ్రహాలు (శని, రాహు, మిత్ర, చిత్ర, బుధ, శుక్ర) పాపులు / అశుభులు / క్రూరులు / శత్రువులు.'
    ]
  },
  {
    chapterNumber: 16,
    titleTe: '16. శని వర్గ లగ్న జాతకులకు మిత్ర-శత్రువులు',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'వృషభం, మిథునం, కన్య, తుల, మకరం, కుంభం లగ్నములలో పుట్టినవారికి శని వర్గ 6 గ్రహాలు శుభులు/మిత్రులు.',
    keyTeachingsTe: [
      'వీరికి గురు వర్గ 6 గ్రహాలు (గురు, కుజ, చంద్ర, సూర్య, భూమి, కేతు) పాపులు / అశుభులు / క్రూరులు / శత్రువులు.'
    ]
  },
  {
    chapterNumber: 17,
    titleTe: '17. శాశ్వత మిత్రులు - శాశ్వత శత్రువులు',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'సాంప్రదాయ జ్యోతిష్యులు చెప్పే తాత్కాలిక మైత్రి, సమ గ్రహములు అనేవి అశాస్త్రీయము.',
    keyTeachingsTe: [
      'జన్మ లగ్నమును బట్టి మిత్ర గ్రహములు ఎల్లప్పుడూ పుణ్య ఫలితాన్ని (మంచిని), శత్రు గ్రహములు పాప ఫలితాన్ని (చెడును) ఇస్తాయి.'
    ]
  },
  {
    chapterNumber: 18,
    titleTe: '18. సౌమ్యులు - క్రూరులు, శుభులు - అశుభులు ఎవరు?',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'శని, రాహు, కుజులను అందరికీ క్రూరులని, గురు, శుక్రులను అందరికీ సౌమ్యులని చెప్పుట తప్పు.',
    keyTeachingsTe: [
      'శని వర్గ లగ్న జాతకులకు శని, రాహువులే పరమ శుభులు మరియు సౌమ్యులు! గురు వర్గ లగ్న జాతకులకు గురువు, కుజుడు, కేతువులే సౌమ్యులు!'
    ]
  },
  {
    chapterNumber: 19,
    titleTe: '19. 1×7 బద్ధశత్రు సూత్రము (ఎదురెదురు లగ్నముల వైరము)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'కాలచక్రములో 1వ స్థానమునకు 7వ స్థానము ఎదురుగా ఉండును కావున ఆ రెండు లగ్నాధిపతులు బద్ధశత్రువులు.',
    keyTeachingsTe: [
      '6 బద్ధశత్రు జతలు: కుజ × శుక్ర (1×7), మిత్ర × భూమి (2×8), చిత్ర × కేతు (3×9), చంద్ర × రాహు (4×10), సూర్య × శని (5×11), బుధ × గురు (6×12).'
    ]
  },
  {
    chapterNumber: 20,
    titleTe: '20. ద్వాదశ గ్రహ వర్గ సమన్వయ పట్టిక',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: '12 లగ్నములు, 12 గ్రహములు, గురు-శని వర్గాలు మరియు 1×7 బద్ధశత్రువుల సమగ్ర నిరూపణ.',
    keyTeachingsTe: [
      'ఈ ఒక్క పట్టిక అర్థమైతే జ్యోతిష్య శాస్త్రములో సగం రహస్యం అర్థమైనట్లే.'
    ]
  },
  {
    chapterNumber: 21,
    titleTe: '21. గుణచక్రము (మాయచక్రము) నిర్మాణ రహస్యము',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'గుణచక్రములోని 3 గుణ వలయాలు (తామస, రాజస, సాత్త్విక), 12 పెద్ద గుణములు × 9 పరిమాణములు = 108 × 3 = 324 గుణములు.',
    keyTeachingsTe: [
      'ఆత్మ భాగము (బ్రహ్మయోగ స్థానము) గుణచక్రం మధ్యలో ఉంటుంది; అందులో కర్మ ఉండదు.'
    ]
  },
  {
    chapterNumber: 22,
    titleTe: '22. ఫోకస్ లైట్ (Focus Light) సిద్ధాంతము & చక్రాల పనితీరు',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'కాలచక్రంలోని గ్రహాలు ఫోకస్ లైట్ల వలె కిరణాలను ప్రసరింపజేస్తే, కర్మచక్రంలోని కర్మ (రంగు పేపరు) గుండా ఆ ఛాయ గుణచక్రంపై పడుతుంది.',
    keyTeachingsTe: [
      'గ్రహ కిరణము కర్మచక్రములోని పాప/పుణ్య కర్మను తాకినప్పుడే గుణచక్రములో సంబంధిత గుణము మేల్కొని మనిషి చేత కర్మను అనుభవింపజేస్తుంది.'
    ]
  },
  {
    chapterNumber: 23,
    titleTe: '23. బ్రహ్మచక్రము & బ్రహ్మనాడి రహస్యము',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'తలలోని 4 చక్రములు బ్రహ్మనాడి అనే సూక్ష్మ నాడిపై అమర్చబడి మెడ మరియు వెన్నెముక గుండా వ్రేలాడుతున్నాయి.',
    keyTeachingsTe: [
      'బ్రహ్మచక్రము కర్మ రహితమైన ఆత్మ-పరమాత్మ సంధాన కేంద్రము.'
    ]
  },
  {
    chapterNumber: 24,
    titleTe: '24. మూడు మత గ్రంథాలలో (గీత, ఖుర్ఆన్, బైబిలు) కర్మపత్ర సాక్ష్యం',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'భగవద్గీత (8, 14, 15 అధ్యాయాలు), ఖుర్ఆన్ (17వ సురా 13వ ఆయత్: మెడలో వ్రేలాడే కర్మపత్రము), బైబిలు (666 vs 9-6-3) సమన్వయము.',
    keyTeachingsTe: [
      'మూడు మత గ్రంథాలూ మనిషి తలలోని ఈ చక్రముల సముదాయమునే (కర్మపత్రమునే) గూర్చి చెప్పాయి.'
    ]
  },
  {
    chapterNumber: 25,
    titleTe: '25. కర్మచక్రములోని 12 స్థానములు: అంగీ (1–6) & అర్ధాంగీ (7–12)',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: '1 నుండి 6 స్థానములు అంగీ (పురుష/అజ్ఞాన ప్రపంచ భాగము); 7 నుండి 12 స్థానములు అర్ధాంగీ (భార్య/జ్ఞాన భాగము).',
    keyTeachingsTe: [
      'వివాహమైన తర్వాత భార్యను అర్ధాంగి అంటారు కావున 7 నుండి 12 స్థానములు ఆమె భాగముగా పనిచేస్తాయి.'
    ]
  },
  {
    chapterNumber: 26,
    titleTe: '26. కేంద్ర స్థానములు 4 కావు, 2 మాత్రమే (4వ & 10వ స్థానములు)',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'అంగీ భాగములో 2,3,[4],5,6 లకు 4వ స్థానము కేంద్రము; అర్ధాంగీ భాగములో 8,9,[10],11,12 లకు 10వ స్థానము కేంద్రము.',
    keyTeachingsTe: [
      '4వ స్థానము కనిపించే స్థూల స్థిరాస్తులకు కేంద్రమైతే, 10వ స్థానము కనిపించని సూక్ష్మ ఆస్తి అయిన కీర్తి/ఉద్యోగమునకు కేంద్రము.'
    ]
  },
  {
    chapterNumber: 27,
    titleTe: '27. పుణ్య కోణములు (1, 5, 9) & పాప కోణములు (3, 7, 11)',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: '1, 5, 9 స్థానములలో కేవలం పుణ్యము మాత్రమే నిల్వ ఉండును; 3, 7, 11 స్థానములలో కేవలం పాపము మాత్రమే నిల్వ ఉండును.',
    keyTeachingsTe: [
      'సరి సంఖ్య స్థానములైన 2, 4, 6, 8, 10, 12 స్థానములలో పాపము మరియు పుణ్యము రెండునూ నిల్వ ఉంటాయి.'
    ]
  },
  {
    chapterNumber: 28,
    titleTe: '28. కర్మచక్రములో గురువు కేంద్ర స్థానము',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'కర్మచక్రము యొక్క ఇరుసు (మధ్య కేంద్రము) నందు గురువు ఉండి 12 రాశులలోని కర్మను సమన్వయం చేస్తాడు.',
    keyTeachingsTe: [
      'అందుకే గురువుకు బ్రహ్మజ్ఞాన ఆధిపత్యము ఇవ్వబడింది.'
    ]
  },
  {
    chapterNumber: 29,
    titleTe: '29. గ్రహములకు ఉచ్చ - నీచ స్థానములు లేవు!',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'గ్రహములకు తమ స్వంత ఇల్లు (స్వస్థానము) మాత్రమే ఉంటుంది; ఉచ్చ, నీచ, మూలత్రికోణములు అనేవి కల్పితములు.',
    keyTeachingsTe: [
      'మనిషికి తన స్వంత ఇంట్లోనే పూర్తి అధికారము ఉన్నట్లు, గ్రహమునకు తన స్వంత లగ్నములోనే పూర్తి బలము ఉంటుంది.'
    ]
  },
  {
    chapterNumber: 30,
    titleTe: '30. గ్రహముల గ్రాహిత శక్తి — చేతులు (2 చేతులు vs 4 చేతులు)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: '9 గ్రహములకు 2 చేతులు (1, 7) ఉండగా, కుజుడు (1,4,7,8), గురువు (1,5,7,9), శని (1,3,7,10) అను 3 గ్రహములకు 4 చేతులు కలవు.',
    keyTeachingsTe: [
      'మొత్తం 12 గ్రహముల చేతులు: (9 × 2) + (3 × 4) = 18 + 12 = 30 చేతులు (జాతక చక్రంలో 30 గ్రహ స్థానాలు ఏర్పడతాయి!).'
    ]
  },
  {
    chapterNumber: 31,
    titleTe: '31. రాశికి - లగ్నమునకు గల భేదము',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'కాలచక్రములోని మేషాది 12 భాగములను "లగ్నములు" అనాలి; కర్మచక్రములోని 1–12 కర్మ నిల్వ స్థానములను "రాశులు" అనాలి.',
    keyTeachingsTe: [
      'రాశి అనగా కుప్ప (కర్మల కుప్ప). లగ్నము అనగా గ్రహములు అంటిపెట్టుకొని తిరిగే కాలచక్ర భాగము.'
    ]
  },
  {
    chapterNumber: 32,
    titleTe: '32. 12 గ్రహముల గమన వేగములు (Speeds of 12 Grahas)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'చంద్రుడు (2½ రోజులు/లగ్నం) నుండి శని (2½ ఏళ్లు/లగ్నం) వరకు 12 గ్రహముల ఖచ్చితమైన వేగముల పట్టిక.',
    keyTeachingsTe: [
      'సూర్య, బుధ, శుక్ర, భూమి: నెలకు 1 లగ్నం; కుజుడు: 1½ నెలలు; గురువు: 1 ఏడాది; రాహు, కేతు, మిత్ర, చిత్ర: 1½ ఏళ్లు; శని: 2½ ఏళ్లు.'
    ]
  },
  {
    chapterNumber: 33,
    titleTe: '33. గుండ్రని చక్రము vs చతురస్ర కుండలి',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'తలలోని చక్రములు గుండ్రముగా ఉంటాయి; కాగితంపై సులభంగా గీయుటకు పెద్దలు చతురస్ర కుండలిగా మార్చారు.',
    keyTeachingsTe: [
      'చతురస్ర చక్రంలో 12 లగ్నాల లోపల జన్మ లగ్నం నుండి 1–12 రాశి సంఖ్యలను వేసి గణించాలి.'
    ]
  },
  {
    chapterNumber: 34,
    titleTe: '34. త్రి + రా = రాత్రి (నిద్రలో కర్మ ఎందుకు పనిచేయదు?)',
    categoryTe: 'చక్రములు & కర్మ రహస్యము',
    summaryTe: 'రాత్రి నిద్రలో 3 గుణములు (త్రి) రాకుండా (రా) ఆగిపోతాయి కావున దానిని "రాత్రి" అన్నారు.',
    keyTeachingsTe: [
      'నిద్రలో సూర్యుడు తన కిరణాలను కర్మచక్రంపై వేయడు కావున మనిషికి సుఖదుఃఖాల అనుభవం ఉండదు.'
    ]
  },
  {
    chapterNumber: 35,
    titleTe: '35. సూర్య కుటుంబ నియమము',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: '12 గ్రహములకు సూర్యుడు కుటుంబ పెద్ద (రాజు); చంద్రుడు మంత్రి.',
    keyTeachingsTe: [
      'సూర్యుడు మేల్కొంటేనే మిగిలిన 11 గ్రహాలు పనిచేస్తాయి; సూర్యుడు విశ్రాంతి తీసుకుంటే 11 గ్రహాలూ కిరణాలను ఆపివేస్తాయి.'
    ]
  },
  {
    chapterNumber: 36,
    titleTe: '36. లగ్న ప్రమాణము — 24 గంటలలో 12 లగ్నముల తిరుగుదల',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'రోజుకు 24 గంటలలో (60 గడియలలో) సగటున 2 గంటలకు ఒక లగ్నము చొప్పున 12 లగ్నములు తిరుగుతాయి.',
    keyTeachingsTe: [
      'శిశువు భూమిపై పడిన సమయానికి తూర్పున ఉదయించే లగ్నమే ఆ శిశువు యొక్క "జన్మ లగ్నము" మరియు 1వ రాశి స్థానము అవుతుంది.'
    ]
  },
  {
    chapterNumber: 37,
    titleTe: '37. 27 నక్షత్రములు - 108 పాదములు - 3 ఆత్మల విభజన',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: '27 నక్షత్రములు జీవాత్మ (9), ఆత్మ (9), పరమాత్మ (9) నక్షత్రములుగా విభజించబడ్డాయి; 27 × 4 = 108 పాదములు.',
    keyTeachingsTe: [
      'ప్రతి లగ్నములో 9 నక్షత్ర పాదములు (2¼ నక్షత్రములు) చొప్పున 12 × 9 = 108 పాదములు ఉంటాయి.'
    ]
  },
  {
    chapterNumber: 38,
    titleTe: '38. 120 సంవత్సరముల దశా విధానము (12 దశలు)',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: '9 గ్రహాల దశలు కావు; 12 గ్రహాల దశలు కలిపి మొత్తం 120 సంవత్సరములు (గురు వర్గము 60 సం|| + శని వర్గము 60 సం||).',
    keyTeachingsTe: [
      'సూర్య 10, చంద్ర 10, కుజ 7, రాహు 10, గురు 13, భూమి 13, శని 13, బుధ 10, కేతు 7, శుక్ర 13, మిత్ర 7, చిత్ర 7 = 120 సంవత్సరములు.'
    ]
  },
  {
    chapterNumber: 39,
    titleTe: '39. రాహు-కేతువుల ఇన్‌స్పెక్టర్ పాత్ర & దశల మార్పిడి',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: 'కర్కాటక లగ్న నక్షత్ర పాదాలలో రాహు దశ (10 సం||), ధనస్సు లగ్న పాదాలలో కేతు దశ (7 సం||) ఇన్‌స్పెక్టర్లుగా నడుస్తాయి.',
    keyTeachingsTe: [
      'ఈ మార్పిడి వల్ల గురు వర్గ దశలు 63 సం||, శని వర్గ దశలు 57 సం|| (మొత్తం 120 సం||) అవుతాయి.'
    ]
  },
  {
    chapterNumber: 40,
    titleTe: '40. నక్షత్ర పాద అక్షరములు & నామకరణ రహస్యము',
    categoryTe: 'రాశులు, లగ్నములు & దశలు',
    summaryTe: '27 నక్షత్రముల 108 పాదములకు నిర్దేశించబడిన తెలుగు అక్షరములు మరియు జన్మ నక్షత్ర ప్రకారం పేరు పెట్టుట.',
    keyTeachingsTe: [
      'పుట్టిన నక్షత్ర పాద అక్షరముతో పిలిచే పేరు పెట్టుకుంటే ఆ గ్రహ తరంగాలతో సమన్వయం కలుగుతుంది.'
    ]
  },
  {
    chapterNumber: 41,
    titleTe: '41. ద్వాదశ గ్రహముల అధికార పరిధి (Portfolios of 12 Grahas)',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'సూర్యుని నుండి చిత్ర గ్రహము వరకు 12 గ్రహములు మనిషి జీవితంలో ఏయే రంగాలను పాలిస్తాయో విశదీకరించు అధ్యాయము.',
    keyTeachingsTe: [
      'ప్రతి గ్రహమునకు ప్రత్యేక వృత్తి, ఆస్తి, బంధుత్వము మరియు ఆరోగ్య శాఖలు కలవు.'
    ]
  },
  {
    chapterNumber: 42,
    titleTe: '42. 12 గ్రహముల 9 గుణ-లక్షణ పట్టికలు & యోగ-కరణ రహస్యము',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'కులములు/మతములు, రంగులు, రుచులు, లింగభేదము, కారకత్వము, రోగములు, రత్నములు, 10 దిశలు, ధాన్యములు & వారములు.',
    keyTeachingsTe: [
      'శత్రు గ్రహము యొక్క రత్నమును (ఉంగరమును) ఎన్నడూ ధరించరాదు; మిత్ర గ్రహ రత్నమునే ధరించాలి!',
      'యోగము అనగా రెండు మిత్ర గ్రహముల కలయిక (లేదా ఆత్మ-జీవాత్మల కలయిక); కరణము అనగా కర్మ చేయువాడు.'
    ]
  },
  {
    chapterNumber: 43,
    titleTe: '43. 12 స్థానముల సమగ్ర ఫలితములు & ఆయుష్షు రహస్యము (3 రకాల మరణాలు)',
    categoryTe: 'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు',
    summaryTe: '1 నుండి 12 రాశుల సవివర ఫలితములు మరియు సహజ మరణము, అకాల మరణము, తాత్కాలిక మరణము.',
    keyTeachingsTe: [
      'ఆత్మజ్ఞానము వల్ల దశాచారములో కర్మ కాలిపోయి ఆయుష్షు మారవచ్చును (సత్యసాయిబాబా ఉదాహరణ); దైవదూషణ వల్ల పాపం పెరిగి అధోగతి కలుగును.'
    ]
  },
  {
    chapterNumber: 44,
    titleTe: '44. ఇందూ అనగా జ్ఞాని (ఇందూ దేశ చరిత్ర)',
    categoryTe: 'మూల సిద్ధాంతము',
    summaryTe: 'ఇందూ అనగా చంద్రుడు మరియు ఆత్మజ్ఞాని; జ్ఞానుల దేశము కావున మన దేశమునకు ఇందూ దేశము అని పేరు వచ్చినది.',
    keyTeachingsTe: [
      'శివుని తలపై ఉన్న చంద్రవంక జ్ఞాననేత్రమునకు ప్రతీక.'
    ]
  },
  {
    chapterNumber: 45,
    titleTe: '45. సూర్యుడు - భూమి ఎదురెదురు (1×7) గమన రహస్యము',
    categoryTe: 'ద్వాదశ గ్రహములు & వర్గములు',
    summaryTe: 'కాలచక్రములో సూర్యుడు ఏ లగ్నములో ఉంటాడో దానికి సరిగ్గా 7వ లగ్నములో (52 నక్షత్ర పాదముల దూరములో) భూమి ఉంటుంది.',
    keyTeachingsTe: [
      'సూర్యుడు మేషంలో ఉంటే భూమి తులలో ఉంటుంది; సూర్యుడు సింహంలో ఉంటే భూమి కుంభంలో ఉంటుంది.'
    ]
  },
  {
    chapterNumber: 46,
    titleTe: '46. జాతక చక్ర నిర్మాణము, అంతర్దశ గణన & ఉదాహరణ జాతకములు',
    categoryTe: 'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు',
    summaryTe: 'అంతర్దశ సూత్రము: (మహాదశ సంఖ్య × అంతర్దశ సంఖ్య × 3) ÷ 30 = నెలలు, శేషము = రోజులు. రంగయ్య మరియు వృశ్చిక లగ్న జడ్జి జాతక విశ్లేషణ.',
    keyTeachingsTe: [
      '30 గ్రహ చేతులను (2 చేతులు + 4 చేతులు) కుండలిలో వేసి పాప-పుణ్య బలములను లెక్కించే విధానము.'
    ]
  },
  {
    chapterNumber: 47,
    titleTe: '47. ప్రముఖుల జాతక విశ్లేషణలు (గాంధీజీ, రాజీవ్ గాంధీ, జగన్, ముహమ్మద్ ప్రవక్త)',
    categoryTe: 'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు',
    summaryTe: 'గ్రహచారము మరియు దశాచారము ప్రకారం చారిత్రక వ్యక్తుల కుండలి విశ్లేషణ.',
    keyTeachingsTe: [
      '10వ స్థాన కీర్తి బలము, 8వ స్థాన ఆయుష్షు బలము మరియు గ్రహచారములో శత్రు గ్రహాల బంధనము ప్రత్యక్ష ఉదాహరణలతో నిరూపించబడ్డాయి.'
    ]
  },
  {
    chapterNumber: 48,
    titleTe: '48. జ్యోతిష్యములో 34 ప్రశ్నలు - జవాబులు',
    categoryTe: 'జాతక విశ్లేషణ & ప్రశ్నోత్తరములు',
    summaryTe: 'ముహూర్తములు, వివాహ పొంతన, రెండవ పెండ్లి, సంతానము, బోరుబావులలో నీరు, రోడ్డు ప్రమాదాలు, రత్నధారణ మొదలగు 34 ప్రశ్నలకు సమాధానములు.',
    keyTeachingsTe: [
      'సామాన్య మానవుని నిత్యజీవిత సందేహాలన్నింటికీ శాస్త్రీయ జ్యోతిష్య సమాధానములు.'
    ]
  }
];

// ==========================================
// ALL 34 Q&As FROM CHAPTER 48 ("జ్యోతిష్యములో ప్రశ్నలు - జవాబులు")
// ==========================================
export const JYOTISHYA_34_QA_DATA: JyotishyaQAItem[] = [
  {
    qNumber: 1,
    topicTagTe: 'ముహూర్తము',
    questionTe: 'ప్రశ్న 1: పెండ్లికి గానీ, గృహప్రవేశమునకు గానీ మంచి ముహూర్తము పెట్టినా ఎందుకు కష్టాలు వస్తున్నాయి?',
    answerTe: 'మనిషి తన ప్రారబ్ధ కర్మ (జాఫతకము) ప్రకారమే ఫలితాలను అనుభవిస్తాడు గానీ బాహ్య ముహూర్తములను బట్టి కాదు! జాతకంలో 7వ స్థానంలో శత్రు గ్రహాలుంటే ఎంత గొప్ప ముహూర్తం పెట్టినా దాంపత్య కలహాలు తప్పవు. కావున ముహూర్తము కంటే జాతక పరిశీలనయే ముఖ్యము.'
  },
  {
    qNumber: 2,
    topicTagTe: 'నామకరణము',
    questionTe: 'ప్రశ్న 2: జన్మ నక్షత్ర పాద అక్షరముతోనే పేరు పెట్టాలా? వేరే పేరు పెడితే ఏమవుతుంది?',
    answerTe: 'జన్మ నక్షత్ర పాద అక్షరము ఆ మనిషి తలలోని కాలచక్ర గ్రహ తరంగాలతో అనుసంధానమై ఉంటుంది. కావున పిలిచే పేరు జన్మ నక్షత్ర అక్షరముతో ఉండుట ఉత్తమము.'
  },
  {
    qNumber: 3,
    topicTagTe: 'వివాహము',
    questionTe: 'ప్రశ్న 3: ఒకరికి రెండు పెండ్లిళ్లు (ద్విభార్యత్వము) ఎందుకు జరుగుతాయి?',
    answerTe: 'జాతకములో 7వ స్థానము (కళత్ర స్థానము) నందు బలమైన శత్రు గ్రహములు ఉండి, శుక్రుడు కూడా శత్రు గ్రహముల చేత బంధింపబడినప్పుడు మొదటి వివాహము విచ్ఛిన్నమై రెండవ వివాహము జరుగుతుంది.'
  },
  {
    qNumber: 4,
    topicTagTe: 'దాంపత్య కలహాలు',
    questionTe: 'ప్రశ్న 4: భార్యాభర్తలు ఇద్దరూ మంచివారే అయినా నిత్యం ఎందుకు తగవులాడుకుంటారు?',
    answerTe: 'కాలచక్రములో కుజుడు (మేషం-1) మరియు శుక్రుడు (తుల-7) బద్ధశత్రువులు (1×7). ఒకరి జాతకంలో 7వ స్థానంలో కుజుడు లేదా శత్రు గ్రహాలు ఉన్నప్పుడు, ఎదుటివారితో కారణం లేకుండానే కోపతాపాలు, ఘర్షణలు పుడతాయి.'
  },
  {
    qNumber: 5,
    topicTagTe: 'తెలివితేటలు (బుద్ధి)',
    questionTe: 'ప్రశ్న 5: పాఠశాలలో చదువు రానివాడు కూడా వ్యాపారంలో, జీవితంలో గొప్ప తెలివితేటలు ఎలా చూపుతాడు?',
    answerTe: '5వ స్థానము పాఠశాల చదువును (అక్షర జ్ఞానమును) తెలిపితే, 11వ స్థానము గ్రాహిత శక్తిని (విషయాన్ని పట్టే తెలివిని) తెలుపుతుంది. 5వ స్థానం బలహీనంగా ఉండి 11వ స్థానంలో మిత్ర గ్రహాలుంటే చదువు లేకపోయినా అపారమైన తెలివితేటలు ఉంటాయి!'
  },
  {
    qNumber: 6,
    topicTagTe: 'చక్ర దర్శనము',
    questionTe: 'ప్రశ్న 6: తలలో ఉండే బ్రహ్మ, కాల, కర్మ, గుణ చక్రాలు డాక్టర్లకు ఆపరేషన్లలో లేదా స్కానింగ్‌లో కనిపిస్తాయా?',
    answerTe: 'కనిపించవు! అవి సూక్ష్మ శరీరానికి సంబంధించిన చక్రములు. భౌతిక కంటికి గానీ, ఎక్స్-రే/ఎంఆర్ఐ యంత్రాలకు గానీ కనిపించవు; కేవలం ఆత్మజ్ఞాన నేత్రమునకు (యోగదృష్టికి) మాత్రమే కనిపిస్తాయి.'
  },
  {
    qNumber: 7,
    topicTagTe: 'సౌమ్య - క్రూర గ్రహాలు',
    questionTe: 'ప్రశ్న 7: శని, రాహు, కేతువులు అందరికీ కష్టాలనే ఇస్తారా?',
    answerTe: 'ఇవ్వరు! వృషభ, మిథున, కన్య, తుల, మకర, కుంభ లగ్న జాతకులకు శని, రాహువులే పరమ మిత్రులు మరియు శుభ ప్రదాతలు. అలాగే గురు వర్గ లగ్న జాతకులకు కేతువు మిత్రుడు.'
  },
  {
    qNumber: 8,
    topicTagTe: 'బోరుబావులు / జలము',
    questionTe: 'ప్రశ్న 8: ఒక రైతు పొలంలో బోరు వేస్తే నీరు పడుతుందో లేదో జ్యోతిష్యము ద్వారా చెప్పవచ్చా?',
    answerTe: 'చెప్పవచ్చును! 4వ స్థానము (భూమి/బావి స్థానము) లో జల కారకుడైన చంద్రుడు ఆ రైతు జన్మ లగ్నమునకు మిత్రుడై ఉంటే పుష్కలంగా తియ్యని నీరు పడుతుంది. శత్రు గ్రహమైన కుజుడు/శని ఉంటే రాళ్లు పడి నీరు పడదు.'
  },
  {
    qNumber: 9,
    topicTagTe: 'గృహ / రోడ్డు వివాదాలు',
    questionTe: 'ప్రశ్న 9: ఇంటి ప్రక్కవారితో లేదా దక్షిణం వైపు రోడ్డు/సరిహద్దు తగాదాలు ఎందుకు వస్తాయి?',
    answerTe: '4వ స్థానము (గృహ స్థానము) లో దక్షిణ దిశకు అధిపతి అయిన కుజుడు శత్రువై ఉన్నప్పుడు, దక్షిణ భాగమున సరిహద్దు తగాదాలు, కోర్టు కేసులు వస్తాయి. ఇది వాస్తు దోషం కాదు, 4వ స్థాన కర్మ ఫలితం!'
  },
  {
    qNumber: 10,
    topicTagTe: 'రోడ్డు ప్రమాదాలు',
    questionTe: 'ప్రశ్న 10: జాతీయ రహదారులపై ఆకస్మిక రోడ్డు ప్రమాదాలు ఏ గ్రహముల వల్ల జరుగుతాయి?',
    answerTe: '8వ స్థానము (ఆయుష్షు/ప్రమాద స్థానము) పై శత్రువైన కుజుని (రక్తపాతం) మరియు రాహు/కేతువుల చేతులు పడినప్పుడు, లేదా గ్రహచారములో ఆయుష్షు కారకుడైన శనిని శత్రు గ్రహాలు బంధించినప్పుడు రోడ్డు ప్రమాదాలు జరుగుతాయి.'
  },
  {
    qNumber: 11,
    topicTagTe: 'రత్న ధారణ',
    questionTe: 'ప్రశ్న 11: ఏ రాయి (రత్నము) పడితే ఆ రాయి ఉంగరముగా పెట్టుకోవచ్చా?',
    answerTe: 'పెట్టుకోకూడదు! తన జన్మ లగ్నమునకు శత్రువైన గ్రహము యొక్క రాయిని పెట్టుకుంటే ఆ శత్రు గ్రహ బలము పెరిగి కష్టాలు రెట్టింపు అవుతాయి. కేవలం మిత్ర గ్రహము యొక్క రత్నమును మాత్రమే ధరించాలి.'
  },
  {
    qNumber: 12,
    topicTagTe: '2:1 సూత్రము',
    questionTe: 'ప్రశ్న 12: లగ్నముల జతలను మీనం (12) - మేషం (1) నుండే ఎందుకు ప్రారంభించాలి?',
    answerTe: 'కాలచక్రములో 12వ లగ్నమైన మీనం (సరి సంఖ్య - 2) ఆత్మకు, 1వ లగ్నమైన మేషం (బేసి సంఖ్య - 1) జీవాత్మకు ప్రతీక. త్రైత సిద్ధాంతపు 2:1 సూత్రము ప్రకారం సరి-బేసి జతలు (12-1, 2-3, 4-5, 6-7, 8-9, 10-11) ఏర్పడతాయి.'
  },
  {
    qNumber: 13,
    topicTagTe: 'సంతానము',
    questionTe: 'ప్రశ్న 13: వివాహమైన ఎన్నో ఏళ్లకు గానీ సంతానం కలగకపోవడానికి కారణం ఏమిటి?',
    answerTe: '5వ స్థానము మరియు 11వ స్థానము సంతాన స్థానములు. అందులో శత్రు గ్రహాలు ఉండి, గ్రహచారములో మిత్ర గ్రహాల దృష్టి పడే వరకు సంతానం ఆలస్యమవుతుంది. పుత్ర కారకుడైన గురువు (గురు వర్గానికి) లేదా శుక్ర/బుధులు (శని వర్గానికి) అనుకూలించినప్పుడే సంతానం కలుగుతుంది.'
  },
  {
    qNumber: 14,
    topicTagTe: 'దత్తత (Adoption)',
    questionTe: 'ప్రశ్న 14: సంతానం లేనివారు పిల్లలను దత్తత తీసుకుంటే వారితో సుఖం ఉంటుందా?',
    answerTe: 'జాతకంలో 5వ స్థానంలో కేవలం శత్రు గ్రహాలే ఉంటే కన్న సంతానం కలగదు; దత్తత తీసుకున్న పిల్లల వల్ల కూడా చివరికి మనశ్శాంతి ఉండదు. 5వ స్థానంపై మిత్ర గ్రహ దృష్టి ఉంటేనే దత్తత సఫలమవుతుంది.'
  },
  {
    qNumber: 15,
    topicTagTe: 'వడ్డీ వ్యాపారము',
    questionTe: 'ప్రశ్న 15: కొందరు వడ్డీ వ్యాపారం చేస్తే కోట్లు సంపాదిస్తారు, మరికొందరు అసలుకే మోసపోతారు. ఎందుకు?',
    answerTe: '6వ స్థానము ఋణ (అప్పుల) స్థానము. 6వ స్థానములో మిత్ర గ్రహము బలముగా ఉంటే వడ్డీ వ్యాపారము, ఫైనాన్స్ వ్యాపారము కలిసివస్తాయి. 6వ స్థానములో శత్రు గ్రహము ఉంటే ఇచ్చిన డబ్బు తిరిగి రాదు.'
  },
  {
    qNumber: 16,
    topicTagTe: 'వైద్య వృత్తి',
    questionTe: 'ప్రశ్న 16: ఒక వ్యక్తి మంచి డాక్టరు (వైద్యుడు) కావాలంటే ఏ స్థానము బలముగా ఉండాలి?',
    answerTe: '6వ స్థానము రోగ స్థానము మరియు 10వ స్థానము వృత్తి స్థానము. 6 మరియు 10 స్థానములలో మిత్ర గ్రహములు (ముఖ్యంగా కుజుడు శస్త్రచికిత్సకు, బుధుడు/గురువు వైద్యమునకు) బలముగా ఉంటే హస్తవాసి గల గొప్ప వైద్యుడవుతాడు.'
  },
  {
    qNumber: 17,
    topicTagTe: 'రాజకీయ అధికారము',
    questionTe: 'ప్రశ్న 17: రాజకీయాలలో ఎమ్మెల్యే, మంత్రి, ముఖ్యమంత్రి పదవులు ఎవరికి వస్తాయి?',
    answerTe: '5వ స్థానము (మంత్రి/ఆలోచనా స్థానము), 9వ స్థానము (ప్రజాదరణ/భాగ్యము), 10వ స్థానము (రాజ్యాధికార/కీర్తి కేంద్రము) లలో మిత్ర గ్రహాలు బలముగా ఉండి, ఆ దశ నడిచినప్పుడే రాజకీయ పదవులు లభిస్తాయి.'
  },
  {
    qNumber: 18,
    topicTagTe: 'గ్రంథ రచన & ముద్రణ',
    questionTe: 'ప్రశ్న 18: గ్రంథ రచన చేయుటకు, ముద్రణాధికారము పొందుటకు ఏ స్థానాలు కారకము?',
    answerTe: '5వ స్థానము రచనా బుద్ధిని ఇస్తే, 10వ స్థానము ముద్రణాధికారమును మరియు ఆ గ్రంథముల ద్వారా లోకములో కీర్తిని ఇస్తుంది.'
  },
  {
    qNumber: 19,
    topicTagTe: 'లాటరీ / ఆకస్మిక ధనము',
    questionTe: 'ప్రశ్న 19: కష్టపడకుండా వచ్చే లాటరీలు, కట్నకానుకలు, డొనేషన్లు ఏ స్థానం వల్ల వస్తాయి?',
    answerTe: '11వ స్థానము (ఏకాదశ లాభ స్థానము) వల్ల వస్తాయి. 11వ స్థానము పాప కోణము (3, 7, 11) కావున, పూర్వజన్మ కర్మల అనుసంధానంగా అయాచిత ధనలాభం కలుగుతుంది.'
  },
  {
    qNumber: 20,
    topicTagTe: 'మోక్ష చింతన',
    questionTe: 'ప్రశ్న 20: ఒక మనిషికి భగవద్గీత, ఖుర్ఆన్, బైబిలు వంటి సద్గ్రంథాలను చదవాలనే ఆసక్తి ఎప్పుడు కలుగుతుంది?',
    answerTe: '12వ స్థానము (ద్వాదశ స్థానము) సద్గ్రంథ పఠన మరియు మోక్ష చింతనా స్థానము. 12వ స్థానములో మిత్ర గ్రహ సంబంధం ఏర్పడినప్పుడు మనిషికి ఆత్మజ్ఞాన గ్రంథాలపై ఆసక్తి కలుగుతుంది.'
  },
  {
    qNumber: 21,
    topicTagTe: 'కవల పిల్లలు (Twins)',
    questionTe: 'ప్రశ్న 21: కొద్ది నిమిషాల తేడాతో పుట్టిన కవల పిల్లల జాతకాలు ఒకేలా ఉంటాయా?',
    answerTe: 'ఉండవు! గర్భంలో శిశువు తయారయ్యేటప్పుడే వారి వారి సంచిత కర్మను బట్టి వేర్వేరు ప్రారబ్ధ కర్మలు (జాఫతకములు) కేటాయించబడతాయి. లగ్న సంధిలో లేదా నక్షత్ర పాద సంధిలో పుట్టడం వల్ల వారి అదృష్టాలు వేర్వేరుగా ఉంటాయి.'
  },
  {
    qNumber: 22,
    topicTagTe: 'గ్రహ శాంతులు',
    questionTe: 'ప్రశ్న 22: గుడిలో నవగ్రహ ప్రదక్షిణలు చేస్తే, హోమాలు చేస్తే ప్రారబ్ధ కర్మ పోతుందా?',
    answerTe: 'పోదు! గ్రహాలు లంచగొండులు కారు. ప్రారబ్ధ కర్మను గ్రహచారములో ఎవరూ మార్చలేరు; కేవలం దశాచారములో ఆత్మజ్ఞానము (బ్రహ్మవిద్య) నేర్చుకొని ఆచరించినప్పుడే జ్ఞానాగ్ని చేత కర్మ కాలిపోతుంది (గీత 4.37).'
  },
  {
    qNumber: 23,
    topicTagTe: 'వాస్తు భ్రమ',
    questionTe: 'ప్రశ్న 23: ఇంటి గుమ్మం మార్చితే లేదా వాస్తు మార్పులు చేస్తే కష్టాలు పోతాయా?',
    answerTe: 'పోవు! కర్మ మనిషి తలలోని కర్మచక్రంలో ఉంది గానీ ఇంటి గోడలలో, ఇటుకలలో లేదు. ఒకే ఇంట్లో అద్దెకు ఉన్న ఇద్దరిలో ఒకరు ధనవంతులై మరొకరు నష్టపోవడమే వాస్తు అబద్ధమనడానికి సాక్ష్యం.'
  },
  {
    qNumber: 24,
    topicTagTe: 'భూమి గ్రహము',
    questionTe: 'ప్రశ్న 24: పంచాంగములలో భూమిని గ్రహముగా ఎందుకు వ్రాయలేదు?',
    answerTe: 'ఖగోళ శాస్త్రవేత్తలు భూమిపై నిలబడి ఆకాశం వైపు చూశారు కాబట్టి కాళ్ల క్రింద ఉన్న భూమిని మరచిపోయారు. కానీ తలలోని కాలచక్రములో 8వ లగ్నమైన వృశ్చిక లగ్నమునకు భూమియే స్వంత అధిపతి!'
  },
  {
    qNumber: 25,
    topicTagTe: 'మిత్ర & చిత్ర గ్రహాలు',
    questionTe: 'ప్రశ్న 25: మిత్ర (11వ గ్రహం), చిత్ర (12వ గ్రహం) ఆకాశంలో ఎందుకు కనిపించవు?',
    answerTe: 'మిత్ర గ్రహము తనపై పడిన సూర్య కిరణాలను పూర్తిగా పీల్చుకునే చీకటి గ్రహము (Dark Planet). చిత్ర గ్రహము 24 గంటలలో కొద్ది నిమిషాలు మాత్రమే మెరిసి అదృశ్యమయ్యే గ్రహము. ఇవి యోగదృష్టి (బ్రహ్మనాడి పరిశోధన) ద్వారా కనుగొనబడ్డాయి.'
  },
  {
    qNumber: 26,
    topicTagTe: 'గ్రహముల చేతులు',
    questionTe: 'ప్రశ్న 26: కుజుడు, గురువు, శనికి మాత్రమే 4 చేతులు ఎందుకు ఉన్నాయి?',
    answerTe: 'గురు వర్గములో గురువు (1,5,7,9), కుజుడు (1,4,7,8) ఇద్దరికీ 4 చేతులు ఉండగా, శని వర్గములో శనికి (1,3,7,10) 4 చేతులు కలవు. మిగిలిన 9 గ్రహములకు 1, 7 అనే 2 చేతులు మాత్రమే ఉంటాయి.'
  },
  {
    qNumber: 27,
    topicTagTe: 'రాహు - కేతు గమనము',
    questionTe: 'ప్రశ్న 27: 10 గ్రహాలు సవ్యముగా (Clockwise) తిరిగితే, రాహు-కేతువులు మాత్రమే ఎందుకు వెనుకకు (అపసవ్యముగా) తిరుగుతారు?',
    answerTe: 'కాలచక్రములో రాహువు, కేతువులు తనిఖీ చేయు ఇన్‌స్పెక్టర్ల వంటివారు. ఎదురుగా వస్తూ కర్మలను తనిఖీ చేయుట కొరకు సృష్టి నియమములోనే వారికి అపసవ్య గమనము ఏర్పడినది.'
  },
  {
    qNumber: 28,
    topicTagTe: '120 ఏళ్ల దశలు',
    questionTe: 'ప్రశ్న 28: మనిషి ఆయుష్షు 100 ఏళ్లే కదా, మరి దశలు 120 సంవత్సరాలు ఎందుకు ఉన్నాయి?',
    answerTe: 'కాలచక్రములోని 12 లగ్నముల × 10 = 120 సంవత్సరముల ప్రమాణము. గురు వర్గ 6 గ్రహాలకు 60 ఏళ్లు, శని వర్గ 6 గ్రహాలకు 60 ఏళ్లు (వెరసి 120 ఏళ్లు) సమన్యాయముగా పంచబడ్డాయి.'
  },
  {
    qNumber: 29,
    topicTagTe: 'అంగీ - అర్ధాంగీ',
    questionTe: 'ప్రశ్న 29: పెండ్లి అయిన తర్వాత అప్పటివరకు బీదవాడుగా ఉన్న వ్యక్తి హఠాత్తుగా ధనవంతుడు ఎలా అవుతాడు?',
    answerTe: 'పెండ్లికి ముందు 1–6 స్థానములు (అంగీ భాగము) మాత్రమే ప్రధానముగా పనిచేస్తాయి. వివాహమైన క్షణం నుండి భార్య (అర్ధాంగీ) యొక్క 7–12 స్థానముల పుణ్య బలము భర్తకు తోడవుతుంది!'
  },
  {
    qNumber: 30,
    topicTagTe: 'ధన చలామణి vs నిల్వ',
    questionTe: 'ప్రశ్న 30: కొందరి చేతిలో కోట్ల రూపాయలు తిరుగుతున్నా బ్యాంకులో ఒక్క రూపాయి నిల్వ ఉండదు. ఎందుకు?',
    answerTe: '3వ స్థానము ధన చలామణి స్థానము, 9వ స్థానము ధన నిల్వ స్థానము. 3వ స్థానం బలంగా ఉండి 9వ స్థానం బలహీనంగా ఉంటే చేతిలో డబ్బు ప్రవాహంలా తిరిగినా నిల్వ ఉండదు.'
  },
  {
    qNumber: 31,
    topicTagTe: '3 రకాల మరణాలు',
    questionTe: 'ప్రశ్న 31: సహజ మరణము, అకాల మరణము, తాత్కాలిక మరణము అంటే ఏమిటి?',
    answerTe: 'ప్రారబ్ధ ఆయుష్షు పూర్తిగా తీరి చనిపోవుట "సహజ (కాల) మరణము"; 8వ స్థానంలో శత్రు గ్రహాల దాడి వల్ల నడివయస్సులో ప్రమాదాలలో చనిపోవుట "అకాల మరణము"; కోమాలోకి వెళ్లి లేదా గుండె ఆగి మరలా బ్రతుకుట "తాత్కాలిక మరణము".'
  },
  {
    qNumber: 32,
    topicTagTe: 'దైవదూషణ పాపము',
    questionTe: 'ప్రశ్న 32: జ్ఞానాగ్ని చేత అన్ని కర్మలు కాలిపోతాయి కదా, మరి కాలిపోని కర్మ ఏదైనా ఉందా?',
    answerTe: 'ఉంది! భగవద్గీత 16వ అధ్యాయం 18, 19 శ్లోకాల ప్రకారం — సత్యమైన ఆత్మజ్ఞానాన్ని, పరమాత్మను ద్వేషించి దూషించే "జ్ఞానదూషణ / దైవదూషణ" పాపకర్మ జ్ఞానాగ్ని చేత కూడా కాలిపోదు; అది క్రూర జన్మలలో పడవేస్తుంది.'
  },
  {
    qNumber: 33,
    topicTagTe: 'గ్రహచారము vs దశాచారము',
    questionTe: 'ప్రశ్న 33: గ్రహచారమునకు, దశాచారమునకు తేడా ఏమిటి?',
    answerTe: 'రోజువారీ ఆకాశంలో/కాలచక్రంలో గ్రహాలు తిరుగుతూ ఇచ్చే ఫలితము "గ్రహచారము" (ఇందులో కర్మ తప్పదు). పుట్టిన నక్షత్ర పాదాన్ని బట్టి నడిచే మహాదశ-అంతర్దశల కాలము "దశాచారము" (ఇందులో ఆత్మజ్ఞాన సాధన ద్వారా కర్మను కాల్చుకోవచ్చును).'
  },
  {
    qNumber: 34,
    topicTagTe: 'జ్యోతిష్య పరమ ప్రయోజనము',
    questionTe: 'ప్రశ్న 34: జ్యోతిష్య శాస్త్రము తెలుసుకోవడం వల్ల మనిషికి కలిగే అంతిమ ప్రయోజనం ఏమిటి?',
    answerTe: 'కష్టసుఖాలు మన పూర్వజన్మ కర్మఫలాలేనని గుర్తించి, ఇతరులను నిందించడం మాని, కొత్త పాపకర్మలు (ఆగామి కర్మ) చేయకుండా మొదటి శాస్త్రమైన "బ్రహ్మవిద్యా శాస్త్రము" వైపు మళ్లి మోక్షం పొందడమే జ్యోతిష్య శాస్త్రపు పరమ ప్రయోజనం!'
  }
];
