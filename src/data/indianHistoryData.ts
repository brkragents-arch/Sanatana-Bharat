import type { IndianHistoryPeriod, VedicComparisonDimension } from '../types/mythology';

export const INDIAN_HISTORY_PERIODS: IndianHistoryPeriod[] = [
  {
    id: 'prehistory',
    order: 1,
    titleEn: 'Pre-History: Stone Age & Chalcolithic Age',
    titleTe: 'చరిత్రపూర్వ యుగము: రాతియుగము మరియు తామ్రశిలా యుగము',
    timelineEn: 'Earlier than 2500 BCE',
    timelineTe: 'క్రీ.పూ. 2500 కంటే పూర్వము',
    subtitleEn: 'The Earliest Human Settlements, Tool Evolution & Early Metallurgy',
    subtitleTe: 'మానవ సమాజ ఆదిమ అడుగుజాడలు, రాతి పనిముట్ల వికాసము & తొలి లోహ సంస్కృతి',
    category: 'prehistory',
    icon: '🪨',
    bannerColor: 'from-[#5D4037] to-[#3E2723]',
    borderColor: '#8D6E63',
    summaryEn: 'Pre-history represents the vast span of human existence before written records. In India, it progressed through the Stone Age (Paleolithic, Mesolithic, Neolithic) into the Chalcolithic (Copper-Stone) Age, setting the foundational stage for urban civilization.',
    summaryTe: 'లిఖిత ఆధారాలు లభ్యంకాని సుదీర్ఘ మానవ చరిత్ర తొలి దశ. ప్రాచీన రాతియుగం, మధ్య రాతియుగం, నవీన రాతియుగం మరియు తామ్రశిలా యుగాల (రాగి-రాయి) ద్వారా వ్యవసాయం, స్థిర నివాసాలు ఏర్పడి తర్వాతి నగర నాగరికతలకు పునాది పడింది.',
    sourcesEn: [
      'Archaeological excavations (Bhimbetka rock shelters, Mehrgarh, Burzahom, Hunsgi)',
      'Lithic stone tools (hand-axes, cleavers, microliths, polished celts)',
      'Rock paintings, cave art, ceramic potsherds, and copper implements'
    ],
    sourcesTe: [
      'పురావస్తు తవ్వకాలు (భీంబేట్కా గుహలు, మెహర్‌గఢ్, బూర్జహోమ్, హున్స్గీ)',
      'రాతి పనిముట్లు (చేతి గొడ్డళ్ళు, చిన్నరాతి సూక్ష్మ పనిముట్లు - మైక్రోలిత్స్, మెరుగుపెట్టిన గొడ్డళ్ళు)',
      'గుహ వర్ణచిత్రాలు, మట్టి పాత్రల అవశేషాలు, తామ్ర (రాగి) ఉపకరణాలు'
    ],
    societyEn: [
      'Nomadic hunter-gatherers in Paleolithic living in natural caves and river valleys',
      'Mesolithic communities started domesticating dogs, cattle, and sheep',
      'Neolithic marked settled village life, pottery making, and community living',
      'Chalcolithic established small rural farming villages with regional distinct cultures'
    ],
    societyTe: [
      'ప్రాచీన రాతియుగంలో ఆహార సేకరణ, వేటపై ఆధారపడిన సంచార జీవనం (గుహల్లో నివాసం)',
      'మధ్య రాతియుగంలో జంతువులను (కుక్క, పశువులు, గొర్రెలు) మచ్చిక చేసుకోవడం ప్రారంభం',
      'నవీన రాతియుగంలో గ్రామీణ స్థిర జీవనం, మట్టి పాత్రల తయారీ, కుటుంబ వ్యవస్థ ఆరంభం',
      'తామ్రశిలా యుగంలో స్వతంత్ర గ్రామీణ వ్యవసాయ సమాజాలు విస్తరించాయి'
    ],
    economyEn: [
      'Hunting, gathering, and fishing in early phases',
      'Advent of agriculture in Neolithic (Mehrgarh: cultivation of wheat and barley)',
      'Invention of potter’s wheel and basketry',
      'Copper-stone metallurgy: crafting copper axes, beads, and painted earthenware'
    ],
    economyTe: [
      'తొలి దశలో వేట, అటవీ ఆహార సేకరణ మరియు చేపల వేట',
      'నవీన రాతియుగంలో వ్యవసాయ విప్లవం (మెహర్‌గఢ్‌లో గోధుమ, బార్లీ సాగు ప్రారంభం)',
      'కుమ్మరి చక్రం ఆవిష్కరణ, కుండలు మరియు గూళ్ళ తయారీ',
      'తామ్రశిలా యుగంలో రాగి లోహ కరిగించి గొడ్డళ్ళు, పూసలు, చిత్రిత మృణ్మయ పాత్రల వ్యాప్తి'
    ],
    religionEn: [
      'Animism, totemic beliefs, and nature worship',
      'Ritual burials with grave goods (tools, ornaments, food for afterlife)',
      'Terracotta Mother Goddess figurines in Neolithic and Chalcolithic sites'
    ],
    religionTe: [
      'ప్రకృతి శక్తులు, జంతువుల పూజ మరియు విశ్వాసాలు',
      'మరణానంతర జీవిత విశ్వాసంతో శవాలను పనిముట్లు, ఆభరణాలతో పూడ్చిపెట్టే ఆచారాలు',
      'మాతృదేవత (మదర్ గాడెస్) మట్టి విగ్రహాల ఆరాధన'
    ],
    keyFeaturesEn: [
      'Stone Age Trilogy: Paleolithic (Old), Mesolithic (Middle), Neolithic (New)',
      'Chalcolithic Age (Copper-Stone Age) pioneered metal usage alongside stone',
      'Invention of agriculture and wheel transformed nomadic bands into village cultures',
      'Directly paved the path for the bronze-age Indus Valley Civilization'
    ],
    keyFeaturesTe: [
      'రాతియుగ త్రయం: ప్రాచీన రాతియుగం, మధ్య రాతియుగం, నవీన రాతియుగం',
      'తామ్రశిలా యుగం (Copper-Stone Age): రాతితో పాటు తొలిసారిగా రాగి లోహ వినియోగం',
      'వ్యవసాయం మరియు చక్రం ఆవిష్కరణ మానవ చరిత్రను మలుపు తిప్పాయి',
      'సింధు లోయ పట్టణ నాగరికత ఆవిర్భావానికి గట్టి పునాది వేసింది'
    ],
    legacyEn: 'Laid down the bedrock of agriculture, pottery, metallurgy, and community settlement across the Indian subcontinent.',
    legacyTe: 'భారత ఉపఖండంలో వ్యవసాయం, కుమ్మరి కళ, లోహశాస్త్రం మరియు స్థిర సమాజ జీవనానికి శాశ్వత అంకురార్పణ చేసింది.',
    infographicImage: './images/indian_history/ancient_india_flowchart.jpg',
    imageCaptionEn: 'Original Flowchart: Pre-History (Stone Age & Chalcolithic) leading to Indus Valley Civilization',
    imageCaptionTe: 'మూల మ్యాప్: చరిత్రపూర్వ యుగం (రాతియుగం & తామ్రశిలా యుగం) నుండి సింధు లోయ నాగరికత వరకు',
    subDivisions: [
      {
        nameEn: 'Paleolithic Age (Old Stone Age)',
        nameTe: 'ప్రాచీన రాతియుగము (పేలియోలిథిక్)',
        periodEn: '500,000 – 10,000 BCE',
        periodTe: 'క్రీ.పూ. 5,00,000 – 10,000',
        descriptionEn: 'Hunter-gatherers using unpolished, large quartzite stone implements (hand-axes, cleavers). Lived in rock shelters like Bhimbetka.',
        descriptionTe: 'పెద్ద గరుకు రాతి పనిముట్లతో ఆహార సేకరణ, వేట చేసిన సంచారులు. భీంబేట్కా వంటి గుహలలో నివాసం.',
        keyPointsEn: ['Hunter-gatherer lifestyle', 'Quartzite rough stone tools', 'Cave rock art (Bhimbetka)'],
        keyPointsTe: ['వేట & ఆహార సేకరణ', 'క్వార్ట్జైట్ రాతి గొడ్డళ్ళు', 'గుహ వర్ణచిత్రాలు']
      },
      {
        nameEn: 'Mesolithic Age (Middle Stone Age)',
        nameTe: 'మధ్య రాతియుగము (మీసోలిథిక్)',
        periodEn: '10,000 – 6,000 BCE',
        periodTe: 'క్రీ.పూ. 10,000 – 6,000',
        descriptionEn: 'Transitional phase characterized by tiny, delicate stone tools called microliths (1-5 cm). Early animal domestication and fishing.',
        descriptionTe: 'మైక్రోలిత్స్ అనబడే సూక్ష్మ రాతి పనిముట్లను ఉపయోగించిన పరివర్తన కాలం. జంతువుల మచ్చిక మరియు చేపల వేట ఆరంభం.',
        keyPointsEn: ['Microlithic stone tools', 'Early domestication of animals', 'Semi-permanent camps'],
        keyPointsTe: ['మైక్రోలిత్స్ (సూక్ష్మ రాళ్ళు)', 'జంతువులను మచ్చిక చేసుకోవడం', 'తాత్కాలిక ఆవాసాలు']
      },
      {
        nameEn: 'Neolithic Age (New Stone Age)',
        nameTe: 'నవీన రాతియుగము (నియోలిథిక్)',
        periodEn: '6,000 – 2,500 BCE',
        periodTe: 'క్రీ.పూ. 6,000 – 2,500',
        descriptionEn: 'The Agricultural Revolution! Polished stone tools, food production (wheat, barley), pottery invention, and established villages (Mehrgarh).',
        descriptionTe: 'వ్యవసాయ విప్లవ యుగం! మెరుగుపెట్టిన రాతి పనిముట్లు, ఆహార ధాన్యాల సాగు, కుండల తయారీ, గ్రామాల స్థాపన (మెహర్‌గఢ్).',
        keyPointsEn: ['Invention of agriculture & wheel', 'Polished celts and stone mortars', 'Permanent mud-brick huts'],
        keyPointsTe: ['వ్యవసాయం & చక్రం ఆవిష్కరణ', 'మెరుగుపెట్టిన రాతి గొడ్డళ్ళు', 'మట్టి ఇళ్ళతో కూడిన గ్రామాలు']
      },
      {
        nameEn: 'Chalcolithic Age (Copper-Stone Age)',
        nameTe: 'తామ్రశిలా యుగము (చాల్కోలిథిక్)',
        periodEn: '2,500 – 1,000 BCE',
        periodTe: 'క్రీ.పూ. 2,500 – 1,000',
        descriptionEn: 'First era of metallurgy in India where copper tools were utilized alongside stone implements. Painted black-and-red pottery and flourishing craft traditions.',
        descriptionTe: 'భారతదేశంలో తొలి లోహ యుగము. రాతితో పాటు రాగి లోహంతో పనిముట్లు, వర్ణచిత్రాలు గల కుండలు, నైపుణ్య కళలు విస్తరించాయి.',
        keyPointsEn: ['First use of metal (Copper / Tamra)', 'Painted black and red ware', 'Bridge to Bronze Age cities'],
        keyPointsTe: ['తొలి లోహ వినియోగం (రాగి)', 'నలుపు-ఎరుపు వర్ణ పాత్రలు', 'కంచు యుగ నగరాలకు వారధి']
      }
    ]
  },
  {
    id: 'indus_valley',
    order: 2,
    titleEn: 'Indus Valley Civilization (IVC)',
    titleTe: 'సింధు లోయ నాగరికత (హరప్పా సంస్కృతి)',
    timelineEn: '3300 – 1300 BCE (Mature: 2600 – 1900 BCE)',
    timelineTe: 'క్రీ.పూ. 3300 – 1300 (స్వర్ణదశ: 2600 – 1900)',
    subtitleEn: 'Bronze Age Urban Wonder – Town Planning, Drainage & Global Commerce',
    subtitleTe: 'ప్రపంచ ప్రసిద్ధ కంచుయుగ నగర నాగరికత – అద్భుత పట్టణ ప్రణాళిక & అంతర్జాతీయ వాణిజ్యం',
    category: 'protohistory',
    icon: '🏛️',
    bannerColor: 'from-[#8D6E63] to-[#4E342E]',
    borderColor: '#A1887F',
    summaryEn: 'One of the world’s three earliest cradles of civilization alongside Mesopotamia and Ancient Egypt. Spanning modern India and Pakistan along the Indus and Ghaggar-Hakra river basins, it is celebrated for its grid-pattern towns, baked-brick architecture, covered underground drainage, standardize weights, and maritime trade.',
    summaryTe: 'మెసపటోమియా, ఈజిప్ట్ నాగరికతలతో సమానమైన ప్రాచీన భారతీయ నగర సంస్కృతి. ఆధునిక భారతదేశం మరియు పాకిస్తాన్‌లోని సింధు, సరస్వతీ (ఘగ్గర్-హాక్రా) నదీ పరీవాహక ప్రాంతాలలో విస్తరించింది. గ్రిడ్ విధానంలో రోడ్లు, కాల్చిన ఇటుకలు, భూగర్భ మురుగునీటి పారుదల, క్రమబద్ధమైన తూనికలు-కొలతలకు ప్రసిద్ధి.',
    sourcesEn: [
      'Excavations at Harappa, Mohenjo-Daro, Lothal, Dholavira, Kalibangan, Rakhigarhi',
      'Steatite seals (Pashupati seal, Unicorn seal, Humpless bull)',
      'Terracotta toys, Bronze Dancing Girl, Priest-King bust',
      'Undeciphered Indus Script (written right to left / Boustrophedon)'
    ],
    sourcesTe: [
      'హరప్పా, మొహెంజొదారో, లోథాల్, ధోలవీర, కాళీబంగన్, రాఖీగఢీ తవ్వకాలు',
      'స్టీటైట్ ముద్రికలు (పశుపతి ముద్ర, ఏకశృంగ జంతువు, వృషభం)',
      'కంచుతో చేసిన నర్తకి విగ్రహం, గడ్డం గల పూజారి రాజు ప్రతిమ',
      'ఇంకా పరిష్కరింపబడని సింధు లిపి (కుడి నుండి ఎడమకు / బోస్ట్రోఫెడన్)'
    ],
    societyEn: [
      'Urban and cosmopolitan middle class of traders, artisans, and administrators',
      'High degree of civic organization, cleanliness, and public health awareness',
      'No evidence of large military barracks or hereditary monarchies; likely governed by merchant councils',
      'Distinct Citadel (upper town) and Lower Town residential zones'
    ],
    societyTe: [
      'నగరవాసులు, వర్తకులు, చేతివృత్తుల కళాకారులు మరియు అధికారులతో కూడిన ఉన్నత సమాజం',
      'పౌర పారిశుద్ధ్యం, ప్రజారోగ్యం మరియు స్నానఘట్టాలకు అత్యంత ప్రాధాన్యత',
      'భారీ సైనిక దళాలు లేదా రాజుల దౌర్జన్యపు ఆనవాళ్ళు లేవు; వర్తక మండళ్ళు పాలించినట్లు భావన',
      'ఎత్తైన కోట (సిటడెల్) మరియు దిగువ పట్టణ నివాస ప్రాంతాల విభజన'
    ],
    economyEn: [
      'Advanced agriculture: wheat, barley, mustard, sesamum, and cotton (world’s first cotton producers)',
      'Granaries for state grain reserve (Great Granary at Harappa and Mohenjo-Daro)',
      'Tidal dockyard at Lothal enabling international sea trade with Mesopotamia (Meluhha) and Oman',
      'Exquisite bead-making (carnelian, lapis lazuli) and standardized chert cubic weights'
    ],
    economyTe: [
      'అభివృద్ధి చెందిన వ్యవసాయం: గోధుమలు, బార్లీ, ఆవాలు, పత్తి (ప్రపంచంలో తొలి పత్తి సాగుదారులు)',
      'భారీ ధాన్యాగారాలు (మొహెంజొదారో, హరప్పాల్లోని గ్రేట్ గ్రానరీ)',
      'లోథాల్‌లోని కృత్రిమ ఓడరేవు (డాక్‌యార్డ్) ద్వారా మెసపటోమియా (మెలుహా), ఒమన్‌లతో సముద్ర వ్యాపారం',
      'విలువైన పూసల తయారీ, కంచు పనిముట్లు, ఖచ్చితమైన ఘనపు రాతి తూనికలు'
    ],
    religionEn: [
      'Proto-Shiva / Pashupati seal seated in yogic posture surrounded by animals',
      'Mother Goddess terracotta cult (fertility symbols, Yoni and Linga representations)',
      'Sacred trees (Peepal tree worship), animal totems (humped bull)',
      'Ritual bathing in the Great Bath of Mohenjo-Daro for ceremonial purification'
    ],
    religionTe: [
      'ఆది శివుడు / పశుపతి ముద్ర (యోగాసనంలో జంతువుల మధ్య కూర్చున్న రూపం)',
      'మాతృదేవత ఆరాధన (సంతానోత్పత్తి ప్రతీకలు, లింగ-యోని పూజలు)',
      'పవిత్ర వృక్షాల పూజ (రావి చెట్టు), మూపురం గల ఎద్దుల పవిత్రత',
      'మొహెంజొదారో మహాస్నానవాటిక (గ్రేట్ బాత్) లో ఆచారబద్ధ పవిత్ర స్నానాలు'
    ],
    keyFeaturesEn: [
      'Pioneering 90-degree grid layout for city streets and avenues',
      'Covered underground drainage in every home connected to street sewers',
      'World’s first artificial tidal dockyard at Lothal (Gujarat)',
      'Water harvesting and reservoirs system at Dholavira'
    ],
    keyFeaturesTe: [
      'రోడ్లన్నీ 90 డిగ్రీల లంబకోణంలో కలిసే గ్రిడ్ విధానపు నగర ప్రణాళిక',
      'ప్రతి ఇంటి నుండి వీధికి కలిసే భూగర్భ కప్పబడిన మురుగునీటి కాలువలు',
      'ప్రపంచంలోనే తొలి నౌకాశ్రయం/డాక్‌యార్డ్ (లోథాల్, గుజరాత్)',
      'ధోలవీరలోని అద్భుతమైన రాతి నీటి రిజర్వాయర్లు మరియు వర్షపు నీటి నిల్వ వ్యవస్థ'
    ],
    legacyEn: 'Set enduring Indian standards of town planning, public sanitation, cotton weaving, and spiritual motifs that echoed into later Indian culture.',
    legacyTe: 'భారతదేశానికి పట్టణ ప్రణాళిక, పారిశుద్ధ్యం, పత్తి నేత మరియు యోగ-పశుపతి వంటి ఆధ్యాత్మిక బీజాలను అందించిన మహోన్నత వారసత్వం.',
    infographicImage: './images/indian_history/civilizations_and_empires.jpg',
    imageCaptionEn: 'Ancient India: Indus Valley Civilization (3300–1300 BCE) Timeline Entry',
    imageCaptionTe: 'ప్రాచీన భారతదేశం: సింధు లోయ నాగరికత కాలమాన పట్టిక'
  },
  {
    id: 'vedic_period',
    order: 3,
    titleEn: 'Vedic Period: The Foundation of Indian Civilization',
    titleTe: 'వేద కాలము: భారతీయ సంస్కృతికి మూల పునాది',
    timelineEn: '1500 – 500 BCE',
    timelineTe: 'క్రీ.పూ. 1500 – 500',
    subtitleEn: 'From Rigvedic Hymns & Pastoral Tribes to Upanishadic Philosophy & Kingdoms',
    subtitleTe: 'ఋగ్వేద స్తోత్రాలు, గోపాలక తెగల నుండి ఉపనిషత్ తత్త్వచింతన మరియు జనపద రాజ్యాల వరకు',
    category: 'vedic',
    icon: '🕉️',
    bannerColor: 'from-[#D84315] to-[#7B1113]',
    borderColor: '#D4AF37',
    summaryEn: 'The Vedic period marks the beginning of recorded history in India, known for its rich culture, religion, philosophy, and social system. Spanning the Early Vedic (Rigvedic) and Later Vedic eras, it laid the perennial philosophical and societal foundations of Sanatana Dharma.',
    summaryTe: 'భారతీయ లిఖిత చరిత్రకు ప్రారంభ ఘట్టం. సంపన్నమైన సంస్కృతి, ధర్మం, వేదాంత తత్త్వశాస్త్రం మరియు సాంఘిక వ్యవస్థకు వేదిక. తొలి వేద (ఋగ్వేద) కాలం నుండి మలి వేద కాలం వరకు విస్తరించి, సనాతన ధర్మానికి మరియు భారతీయ ఆత్మకు శాశ్వత పునాది వేసింది.',
    sourcesEn: [
      'The 4 Sacred Vedas: Rigveda, Yajurveda, Samaveda, Atharvaveda',
      'Brahmanas (Prose commentaries on Vedic rituals)',
      'Aranyakas (Forest treatises for meditation and hermits)',
      'Upanishads (Vedanta – Pinnacle of mystical philosophy on Brahman and Atman)'
    ],
    sourcesTe: [
      'చతుర్వేదాలు: ఋగ్వేదము, యజుర్వేదము, సామవేదము, అథర్వణవేదము',
      'బ్రాహ్మణములు (యజ్ఞయాగాది కర్మకాండల వివరణ గ్రంథాలు)',
      'ఆరణ్యకములు (అరణ్యాలలో మునులు ధ్యానించే అంతర్గత రహస్యాలు)',
      'ఉపనిషత్తులు (వేదాంతం – బ్రహ్మము, ఆత్మ మరియు మోక్ష తత్త్వ విజ్ఞాన శిఖరాలు)'
    ],
    societyEn: [
      'Organized into tribes (Jana) and clans (Vish); family (Kula) was basic unit',
      'Varna system took shape – Brahmins, Kshatriyas, Vaishyas, Shudras',
      'In Early Vedic: Varna was occupational and flexible; women enjoyed respectable status (Gargi, Maitreyi, Apala)',
      'In Later Vedic: Varna became rigid and hereditary; role of women declined; joint families and permanent towns developed'
    ],
    societyTe: [
      'తెగలు (జన), వంశాలు (విశ్) లగా సమాజం ఏర్పడింది; కుటుంబం (కుల) ప్రాథమిక విభాగం',
      'వర్ణ వ్యవస్థ రూపుదిద్దుకుంది – బ్రాహ్మణ, క్షత్రియ, వైశ్య, శూద్రులు',
      'తొలి వేదంలో: వర్ణం వృత్తి ఆధారితం, స్వేచ్ఛాయుతం; స్త్రీలకు సభలలో, విద్యలో ఉన్నత స్థానం (గార్గి, మైత్రేయి)',
      'మలి వేదంలో: వర్ణం జన్మతః కఠినమైంది; స్త్రీల అధికారం తగ్గింది; ఉమ్మడి కుటుంబాలు, నగరాలు విస్తరించాయి'
    ],
    economyEn: [
      'Early Vedic: Pastoral economy centered on cattle rearing; cattle was symbol of wealth (Gavisti)',
      'Agriculture: Barley (Yava), wheat, rice (Vrihi) grown along river plains',
      'Later Vedic: Agriculture became primary occupation; revolution brought by iron tools (Shyama Ayas)',
      'Rise of trade, commerce, metal currency (Nishka, Satamana), and craft guilds'
    ],
    economyTe: [
      'తొలి వేదంలో: పశుపోషణ ప్రధానం; ఆవులే సంపదకు మూల ప్రతీక (గవిష్టి – ఆవుల రక్షణ/అన్వేషణ)',
      'వ్యవసాయం: బార్లీ (యవ), గోధుమలు, వరి (వ్రీహి) సాగు',
      'మలి వేదంలో: వ్యవసాయం ప్రధాన వృత్తిగా మారింది; ఇనుప పనిముట్ల (శ్యామ అయస్) రాకతో అటవీ నిర్మూలన, విస్తార సాగు',
      'వర్తకం, వ్యాపారం, నాణేలు (నిష్క, శతమాన) మరియు చేతివృత్తుల శ్రేణుల ఆవిర్భావం'
    ],
    religionEn: [
      'Early Vedic: Polytheistic nature worship (Indra, Agni, Varuna, Soma, Surya, Usha)',
      'Yajna (fire sacrifice) was the central ritual conducted by the householder',
      'Later Vedic: Sacrifices became more complex and ritualistic (Rajasuya, Ashvamedha, Vajapeya)',
      'Upanishadic revolution introduced deep philosophies of Brahman, Atman, Karma, Rebirth, and Moksha'
    ],
    religionTe: [
      'తొలి వేదంలో: ప్రకృతి శక్తుల ఆరాధన (ఇంద్రుడు, అగ్ని, వరుణుడు, సోముడు, సూర్యుడు, ఉష)',
      'యజ్ఞం ప్రధాన ధర్మ కార్యం; యజమాని స్వయంగా నిష్టతో నెరవేర్చే విధానం',
      'మలి వేదంలో: రాజసూయ, అశ్వమేధ, వాజపేయ వంటి భారీ, సంక్లిష్టమైన కర్మకాండలు',
      'ఉపనిషత్తుల ద్వారా కర్మ సిద్ధాంతం, పునర్జన్మ, మరియు బ్రహ్మ-ఆత్మ-మోక్ష తత్త్వాల ఆవిష్కరణ'
    ],
    keyFeaturesEn: [
      'Development of sacred Sanskrit language and rich metrical prosody (Chhandas)',
      'Institution of the Guru, Gurukul system of holistic residential education',
      'Transition from tribal assemblies (Sabha, Samiti) to hereditary kingdoms (Janapadas)',
      'Birth of the four Vedas and early foundations of Indian philosophy (Darshanas)'
    ],
    keyFeaturesTe: [
      'సంస్కృత భాష, వైదిక ఛందస్సుల ఉన్నత వికాసము',
      'గురు-శిష్య పరంపర, గురుకుల విద్యా విధాన ఆరంభం',
      'సభ, సమితి వంటి ప్రజాస్వామిక తెగల నుండి వంశపారంపర్య రాచరిక రాజ్యాల (జనపదాలు) ఆవిర్భావం',
      'చతుర్వేదాల సంకలనం మరియు భారతీయ షడ్దర్శనాలకు బీజాలు'
    ],
    legacyEn: 'Laid the eternal foundation of Indian culture, philosophy, rituals, and ethical thought, profoundly influencing Hinduism, Buddhism, and Jainism.',
    legacyTe: 'భారతీయ సంస్కృతి, జీవన విధానం, ఆధ్యాత్మిక ఆలోచనలకు మూలస్తంభమై నిలిచి హిందూ, బౌద్ధ, జైన సంప్రదాయాలను లోతుగా ప్రభావితం చేసింది.',
    infographicImage: './images/indian_history/vedic_period_overview.jpg',
    imageCaptionEn: 'Original Infographic: Vedic Period – The Foundation of Indian Civilization (1500–600 BCE)',
    imageCaptionTe: 'మూల సమాచార చిత్రం: వేద కాలము – భారతీయ సంస్కృతికి మూల పునాది (క్రీ.పూ. 1500–600)',
    subDivisions: [
      {
        nameEn: 'Early Vedic / Rigvedic Period',
        nameTe: 'తొలి వేద కాలము (ఋగ్వేద యుగము)',
        periodEn: '< 1500 – 1000 BCE',
        periodTe: 'క్రీ.పూ. < 1500 – 1000',
        descriptionEn: 'The era of the Rigveda Samhita composed in the Sapta Sindhu region. Characterized by pastoral tribal clans, nature worship, democratic assemblies, and dynamic social flexibility.',
        descriptionTe: 'సప్తసింధు ప్రాంతంలో ఋగ్వేదం ఆవిర్భవించిన కాలం. పశుపోషణ, ఇంద్ర-అగ్ని-వరుణుల ఆరాధన, సభ-సమితి సభలు మరియు మహిళలకు సమాన గౌరవం.',
        keyPointsEn: [
          '< 1500 BCE: Rig Veda is composed and chanted across Sapta Sindhu (1,028 hymns in 10 Mandalas)',
          'Nature deities: Indra (Thunder), Agni (Fire), Varuna (Cosmic Order/Water), Soma',
          'Pastoral society with cattle (Gavisti) as prime wealth',
          'Women enjoyed high spiritual and social status (participated in assemblies)'
        ],
        keyPointsTe: [
          '< 1500 BCE: సప్తసింధు తీరంలో ఋగ్వేదం సంకలనం చేయబడింది (1,028 సూక్తాలు, 10 మండలాలు)',
          'ప్రకృతి దేవతలు: ఇంద్రుడు, అగ్ని, వరుణుడు, సోముడు',
          'ఆవుల రక్షణ, పశుపోషణే సంపద (గవిష్టి)',
          'స్త్రీలకు వేదాధ్యయనం, సభలలో భాగస్వామ్యం, అత్యున్నత గౌరవం'
        ]
      },
      {
        nameEn: 'Later Vedic Age / Brahmana Period',
        nameTe: 'మలి వేద కాలము (బ్రాహ్మణ-ఉపనిషత్ యుగము)',
        periodEn: '< 900 – 600 BCE',
        periodTe: 'క్రీ.పూ. < 900 – 600',
        descriptionEn: 'Expansion into the fertile Ganga-Yamuna Doab. Discovery and use of iron tools revolutionized agriculture, giving birth to large kingdoms, four rigid varnas, and Upanishadic wisdom.',
        descriptionTe: 'గంగా-యమునా మైదానాలకు విస్తరణ. ఇనుప పనిముట్లతో వ్యవసాయ విప్లవం, పెద్ద రాజ్యాలు (జనపదాలు), వర్ణ వ్యవస్థ కఠినతరం మరియు ఉపనిషత్తుల ఆవిర్భావం.',
        keyPointsEn: [
          '< 900 BCE: Yajur, Atharva and Sama Veda Samhitas codified for yajnas, melodies, and sciences',
          '< 650 BCE: Early philosophical Upanishads composed (Brihadaranyaka, Chandogya, Katha)',
          'Agriculture became primary occupation fueled by iron tools (Shyama Ayas)',
          'Kingship became hereditary; powerful monarchs assisted by ministers (Ratnins)',
          'Sacrifices grew complex; Upanishads introduced Brahman, Atman, and Moksha'
        ],
        keyPointsTe: [
          '< 900 BCE: యజుర్, అథర్వణ మరియు సామ వేదాల కూర్పు (యజ్ఞాలు, సంగీతం, విజ్ఞాన సంహితలు)',
          '< 650 BCE: బృహదారణ్యక, ఛాందోగ్య తదితర తొలి తాత్విక ఉపనిషత్తుల రచన',
          'ఇనుము వినియోగంతో వ్యవసాయం ప్రధాన వృత్తిగా స్థిరపడింది',
          'వంశపారంపర్య రాచరికాలు, రత్నులు (మంత్రులు), పురోహితుల అధికార వ్యవస్థ',
          'కర్మకాండలు పెరిగాయి; ఉపనిషత్తులు బ్రహ్మ-ఆత్మ-మోక్ష తత్త్వాలను ప్రతిపాదించాయి'
        ]
      }
    ]
  },
  {
    id: 'mahajanapadas',
    order: 4,
    titleEn: 'Age of 16 Mahajanapadas & Shramana Movements',
    titleTe: '16 మహాజనపదాల యుగము & శ్రమణ ఉద్యమాలు',
    timelineEn: '600 – 300 BCE',
    timelineTe: 'క్రీ.పూ. 600 – 300',
    subtitleEn: 'The Second Urbanization, Rise of Republics, Buddhism & Jainism',
    subtitleTe: 'రెండవ పట్టణ విప్లవం, గణరాజ్యాలు, బౌద్ధ మరియు జైన ధర్మాల ఆవిర్భావం',
    category: 'mahajanapadas',
    icon: '☸️',
    bannerColor: 'from-[#C2185B] to-[#880E4F]',
    borderColor: '#F48FB1',
    summaryEn: 'Marks the Second Urbanization in Indian history centered in the fertile Gangetic plain. Sixteen great territorial kingdoms and republics (Mahajanapadas) competed for supremacy. Concurrently, profound intellectual revolutions arose in the form of Buddhism (Gautama Buddha) and Jainism (Vardhamana Mahavira), preaching non-violence (Ahimsa) and questioning rigid ritualism.',
    summaryTe: 'గంగా నదీ పరీవాహక ప్రాంతంలో రెండవ పట్టణీకరణ విప్లవం. 16 మహాజనపదాలు (మగధ, కోసల, వత్స, అవంతి, వజ్జి మొదలైనవి) అవతరించి రాజ్య విస్తరణకు పోటీ పడ్డాయి. అదే సమయంలో గౌతమ బుద్ధుని బౌద్ధ ధర్మం మరియు వర్ధమాన మహావీరుని జైన ధర్మం ఆవిర్భవించి అహింస, నైతికత, సమానత్వాన్ని ప్రబోధించాయి.',
    sourcesEn: [
      'Buddhist canonical texts (Anguttara Nikaya listing the 16 Mahajanapadas, Digha Nikaya)',
      'Jain texts (Bhagavati Sutra)',
      'Sanskrit grammatical treatises of Panini (Ashtadhyayi)',
      'Northern Black Polished Ware (NBPW) archaeological layer and punch-marked coins'
    ],
    sourcesTe: [
      'బౌద్ధ గ్రంథాలు (16 మహాజనపదాలను పేర్కొన్న అంగుత్తర నికాయ, దీఘ నికాయ)',
      'జైన గ్రంథాలు (భగవతీ సూత్ర)',
      'పాణిని సంస్కృత వ్యాకరణ గ్రంథం (అష్టాధ్యాయి)',
      'ఉత్తర నల్లని మెరుగుపెట్టిన మృణ్మయ పాత్రలు (NBPW) మరియు తొలి ముద్రిత నాణేలు (Punch-marked coins)'
    ],
    societyEn: [
      'Cosmopolitan urban centers (Rajagriha, Varanasi, Shravasti, Kaushambi, Vaishali)',
      'Flourishing merchant guilds (Sreshthins) gaining tremendous economic influence',
      'Emergence of republican states (Ganasanghas like Vajji/Lichchhavis) alongside monarchies',
      'Challenging of hereditary caste privilege through ascetic Shramana movements'
    ],
    societyTe: [
      'రాజగృహ, వారణాసి, శ్రావస్తి, కౌశాంబి, వైశాలి వంటి మహా నగరాలు వెలిశాయి',
      'శ్రేష్ఠులు (వర్తక సంఘాల నాయకులు) ఆర్థికంగా బలపడి సమాజంలో గౌరవం పొందారు',
      'రాచరిక రాజ్యాలతో పాటు ప్రజాస్వామ్య గణరాజ్యాలు (వజ్జి, లిచ్ఛవి) విలసిల్లాయి',
      'శ్రమణ ఉద్యమాల ద్వారా కుల ప్రాధాన్యతలను సవాలు చేసి సదాచారానికి ప్రాధాన్యత'
    ],
    economyEn: [
      'Widespread use of iron plowshares and sickle, tripling agricultural yield in Gangetic basin',
      'Introduction of metallic punch-marked silver and copper coins (Kharshapana)',
      'Long-distance overland and riverine trade routes (Uttarapatha and Dakshinapatha)',
      'Specialized craft guilds (metal smiths, weavers, ivory carvers)'
    ],
    economyTe: [
      'ఇనుప నాగళ్ళు, కొడవళ్ళ విస్తృత వినియోగంతో వ్యవసాయ దిగుబడి మూడింతలు పెరిగింది',
      'వెండి, రాగితో కూడిన తొలి ముద్రిత నాణేల (కర్షాపణ) ప్రవేశం',
      'ఉత్తరాపథం, దక్షిణాపథం వంటి అంతర్జాతీయ సుదూర వర్తక మార్గాలు',
      'చేతివృత్తుల శ్రేణులు (లోహ నిపుణులు, నేతకారులు, దంతపు కళాకారులు)'
    ],
    religionEn: [
      'Gautama Buddha preached Four Noble Truths and Eightfold Path (Arya Ashtangika Marga)',
      'Vardhamana Mahavira organized Jainism around Triratnas and extreme Ahimsa',
      'Focus shifted from animal sacrifices and ritual dogma to compassion, meditation, and ethical conduct',
      'Flourishing of Vedic philosophical traditions (Upanishadic debates)'
    ],
    religionTe: [
      'గౌతమ బుద్ధుడు చతురార్య సత్యాలు మరియు ఆర్య అష్టాంగ మార్గాన్ని బోధించాడు',
      'వర్ధమాన మహావీరుడు త్రిరత్నాలు మరియు పరిపూర్ణ అహింసా సిద్ధాంతాన్ని పునరుద్ధరించాడు',
      'జంతు బలుల నుండి దయ, అహింస, ధ్యానం, సత్ప్రవర్తన వైపు ప్రజల మనస్సు మళ్లింది',
      'ఉపనిషత్తుల బ్రహ్మవిద్య మరియు తాత్త్విక చర్చలు కూడా కొనసాగాయి'
    ],
    keyFeaturesEn: [
      '483 BCE: Mahaparinirvana of Gautama Buddha at Kushinagar',
      '468 BCE: Nirvana of Bhagavan Mahavira (24th Tirthankara) at Pavapuri',
      '400 BCE: Mahabharata composed and standardized into 100,000 verses by Sage Veda Vyasa',
      '~ 300 BCE: Foundational Dharma Sutras (Apastamba, Gautama, Baudhayana) compiled',
      'Transition from 16 disparate states toward centralized imperial power in Magadha',
      'Rise of historical world religions (Buddhism and Jainism)',
      'World’s earliest functioning republics (Vajji confederacy)',
      'Invention of metallic coinage and dense commercial networks'
    ],
    keyFeaturesTe: [
      '483 BCE: కుశీనగరంలో గౌతమ బుద్ధుని మహా పరినిర్వాణం',
      '468 BCE: పావాపురిలో 24వ జైన తీర్థంకరుడు వర్ధమాన మహావీరుని నిర్వాణం',
      '400 BCE: మహర్షి వేదవ్యాసునిచే లక్ష శ్లోకాల మహాభారత గ్రంథ సంకలనం & ప్రమాణీకరణ',
      '~ 300 BCE: ఆపస్తంబ, గౌతమ, బౌధాయన ధర్మ సూత్రాల కూర్పు',
      '16 రాజ్యాల నుండి మగధ నేతృత్వంలో కేంద్రీకృత సామ్రాజ్య నిర్మాణం ఆరంభం',
      'ప్రపంచ ప్రసిద్ధ బౌద్ధ, జైన ధర్మాల ఆవిర్భావం',
      'ప్రపంచంలోనే తొలి ప్రజాస్వామ్య గణరాజ్యాలు (వజ్జి సమైక్య)',
      'నాణేల ముద్రణ మరియు విస్తృత వాణిజ్య వ్యవస్థల పురోగతి'
    ],
    legacyEn: 'Transformed Indian ethos forever with the ideals of Ahimsa (non-violence), ethical inquiry, and gave rise to the mighty Magadhan empire.',
    legacyTe: 'అహింస, కరుణ, సదాచారం వంటి శాశ్వత విలువలను భారతీయ ఆత్మకు అందించి, మగధ సామ్రాజ్య విస్తరణకు మార్గం సుగమం చేసింది.',
    infographicImage: './images/indian_history/mahajanapadas_map.jpg',
    imageCaptionEn: '16 Ancient Mahajanapadas & Capitals Historical Map',
    imageCaptionTe: '16 ప్రాచీన మహాజనపదాలు & వాటి రాజధానుల చారిత్రక పటం'
  },
  {
    id: 'magadha_dynasties',
    order: 5,
    titleEn: 'Rise of Magadha: Haryanka, Shishunaga & Nanda Dynasties',
    titleTe: 'మగధ సామ్రాజ్యోదయము: హర్యాంక, శిశునాగ & నంద వంశాలు',
    timelineEn: '544 – 321 BCE',
    timelineTe: 'క్రీ.పూ. 544 – 321',
    subtitleEn: 'The Crucible of Imperial Power in Bihar – Strategic Wealth & Unification',
    subtitleTe: 'బీహార్ కేంద్రంగా సామ్రాజ్య విస్తరణ – అపార సంపద, ఇనుప గనులు & సైనిక శక్తి',
    category: 'empires',
    icon: '⚔️',
    bannerColor: 'from-[#BF360C] to-[#4E342E]',
    borderColor: '#FF7043',
    summaryEn: 'Magadha emerged as the supreme political power in ancient India due to its strategic geography (surrounded by hills at Rajagriha and rivers at Pataliputra), abundant rich iron ores, fertile soil, and use of war elephants. Three successive dynasties paved the way for India’s first pan-Indian empire.',
    summaryTe: 'సహజసిద్ధ కొండలతో రక్షించబడిన రాజగృహం, గంగా-శోణ నదుల సంగమమైన పాటలీపుత్రం, అపార ఇనుప నిక్షేపాలు, ఏనుగుల సైన్యం మగధను తిరుగులేని శక్తిగా మార్చాయి. హర్యాంక, శిశునాగ, నంద వంశాల ద్వారా భారతదేశపు తొలి మహోన్నత సామ్రాజ్యానికి పునాది పడింది.',
    sourcesEn: [
      'Buddhist chronicles (Mahavamsa, Dipavamsa)',
      'Puranic genealogies of Magadha kings',
      'Greek accounts of Megasthenes, Arrian, and Curtius regarding the vast Nanda army',
      'Excavations at Rajgir (ancient Rajagriha) and Pataliputra (Patna)'
    ],
    sourcesTe: [
      'బౌద్ధ చారిత్రక గ్రంథాలు (మహావంశ, దీపవంశ)',
      'పురాణాలలో పేర్కొన్న మగధ రాజవంశాల వంశానుక్రమణిక',
      'నందుల అపార సైన్యం గురించి ప్రస్తావించిన గ్రీకు యాత్రికుల రాతలు (మెగస్తనీస్, కర్టియస్)',
      'రాజ్‌గిర్ మరియు పాటలీపుత్ర (పాట్నా) తవ్వకాలు'
    ],
    societyEn: [
      'Shift of capital from Rajagriha to Pataliputra, establishing a world metropolis',
      'Increasing centralization and royal authority over judicial and military matters',
      'Patronage of both orthodox Vedic rituals and rising heterodox faiths (Buddhism, Jainism)',
      'Cosmopolitan mingling of people across India'
    ],
    societyTe: [
      'రాజధాని రాజగృహం నుండి పాటలీపుత్రానికి మారడం; అంతర్జాతీయ మహానగరంగా వికాసం',
      'రాజ్యంలో న్యాయ, సైనిక విభాగాలపై రాజు కేంద్రీకృత నియంత్రణ',
      'వైదిక యజ్ఞాలతో పాటు బౌద్ధ, జైన మునులకు రాజుల ఆశ్రయం',
      'వివిధ ప్రాంతాల ప్రజలతో కూడిన వైవిధ్యభరిత సమాజం'
    ],
    economyEn: [
      'State monopoly over iron mines (Chota Nagpur plateau), equipping massive armies with superior weaponry',
      'Heavy agrarian taxation systematically collected by royal treasurers',
      'Control of riverine trade along the entire stretch of River Ganga',
      'Immense royal wealth accumulated under the Nanda emperors (treasury of 990 million gold coins in legends)'
    ],
    economyTe: [
      'ఛోటానాగ్‌పూర్ ఇనుప గనులపై ప్రభుత్వ గుత్తాధిపత్యం – శ్రేష్ఠమైన ఆయుధాల తయారీ',
      'వ్యవసాయంపై క్రమబద్ధమైన పన్నుల వసూలు వ్యవస్థ',
      'గంగా నదీ జలరవాణా వర్తకంపై సంపూర్ణ నియంత్రణ',
      'నంద రాజుల వద్ద అపారమైన స్వర్ణ భాండాగారాలు, సంపద'
    ],
    religionEn: [
      'Bimbisara and Ajatashatru were patrons of both Gautama Buddha and Mahavira',
      'First Buddhist Council convened at Rajagriha (483 BCE) under King Ajatashatru',
      'Second Buddhist Council convened at Vaishali (383 BCE) under King Kalashoka',
      'Nanda kings were known patrons of Jain scholars'
    ],
    religionTe: [
      'బింబిసారుడు, అజాతశత్రువు బుద్ధుడికి మరియు మహావీరునికి సన్నిహిత పోషకులు',
      'అజాతశత్రుని ఆధ్వర్యంలో రాజగృహంలో ప్రథమ బౌద్ధ సంగీతి (క్రీ.పూ. 483)',
      'కాలాశోకుని ఆధ్వర్యంలో వైశాలిలో రెండవ బౌద్ధ సంగీతి (క్రీ.పూ. 383)',
      'నంద చక్రవర్తులు జైన పండితులను, మతాన్ని ఆదరించారు'
    ],
    keyFeaturesEn: [
      'Haryanka Dynasty (Bimbisara, Ajatashatru) established military expansion and fortified Pataliputra',
      'Shishunaga Dynasty annexed the ancient rival kingdom of Avanti',
      'Nanda Dynasty (Mahapadma Nanda) united Northern India under one umbrella ("Ekarat")',
      'The terrifying military reputation of the Nandas halted Alexander the Great’s army at the River Beas (326 BCE)'
    ],
    keyFeaturesTe: [
      'హర్యాంక వంశం (బింబిసారుడు, అజాతశత్రువు) మగధను విస్తరించి పాటలీపుత్ర కోటను నిర్మించింది',
      'శిశునాగ వంశం శతాబ్దాల శత్రురాజ్యమైన అవంతిని జయించి విలీనం చేసింది',
      'నంద వంశం (మహాపద్మనందుడు) ఉత్తర భారత దేశాన్ని ఏకఛత్రాధిపత్యం కిందకు తెచ్చింది ("ఏకరాట్")',
      'నందుల అపార సైనిక బలాన్ని చూసి అలెగ్జాండర్ సైనికులు బియాస్ నది దాటడానికి నిరాకరించారు (క్రీ.పూ. 326)'
    ],
    legacyEn: 'Created the political blueprint, infrastructure, and military engine that Chanakya and Chandragupta Maurya harnessed to forge the pan-Indian Maurya Empire.',
    legacyTe: 'చాణక్యుడు మరియు చంద్రగుప్త మౌర్యుడు భారత ఏకీకరణ సాధించడానికి అవసరమైన రాజకీయ, సైనిక యంత్రాంగాన్ని నిర్మించింది.',
    infographicImage: './images/indian_history/ancient_india_flowchart.jpg',
    imageCaptionEn: 'Flowchart: MAGADHA Dynasties – Haryanka → Shishunag → Nanda',
    imageCaptionTe: 'కాలక్రమ పట్టిక: మగధ వంశాలు – హర్యాంక → శిశునాగ → నంద'
  },
  {
    id: 'maurya_empire',
    order: 6,
    titleEn: 'Maurya Empire & Post-Mauryan Era',
    titleTe: 'మౌర్య సామ్రాజ్యము & మౌర్యోనంతర యుగము',
    timelineEn: '321 – 185 BCE (Post-Mauryan to ~300 CE)',
    timelineTe: 'క్రీ.పూ. 321 – 185 (మౌర్యోనంతరం క్రీ.శ. 300 వరకు)',
    subtitleEn: 'Pan-Indian Imperial Unification, Chanakya’s Arthashastra & Ashoka’s Dhamma',
    subtitleTe: 'అఖండ భారత ఏకీకరణ, చాణక్యుని అర్థశాస్త్రం & అశోకుని ధర్మ విజయము',
    category: 'empires',
    icon: '🦁',
    bannerColor: 'from-[#E65100] to-[#B71C1C]',
    borderColor: '#FFA726',
    summaryEn: 'Founded by Chandragupta Maurya with the master guidance of Acharya Chanakya (Kautilya), the Maurya Empire unified almost the entire Indian subcontinent under one administration. Emperor Ashoka the Great transformed after the Kalinga War, adopting Dhamma, patronizing Buddhism across Asia, and erecting majestic Lion Pillars that stand today as India’s national emblem.',
    summaryTe: 'ఆచార్య చాణక్యుని రాజనీతితో చంద్రగుప్త మౌర్యుడు స్థాపించిన అఖండ సామ్రాజ్యం. కళింగ యుద్ధం అనంతరం అశోక చక్రవర్తి హృదయ పరివర్తన చెంది, ధర్మ విజయ మార్గాన్ని ఎంచుకుని బౌద్ధాన్ని విశ్వవ్యాప్తం చేశాడు. ఆయన ప్రతిష్టించిన సింహాల స్తంభమే నేడు భారత జాతీయ చిహ్నము.',
    sourcesEn: [
      'Edicts of Ashoka (Major Rock Edicts, Pillar Edicts in Brahmi, Kharosthi, Greek, Aramaic)',
      'Kautilya’s Arthashastra (Master treatise on statecraft, espionage, and economics)',
      'Megasthenes’ Indica (Account of Seleucid ambassador at Pataliputra court)',
      'Buddhist texts: Ashokavadana and Divyavadana'
    ],
    sourcesTe: [
      'అశోకుని శాసనాలు (శిలా శాసనాలు, స్తంభ శాసనాలు – బ్రాహ్మీ, ఖరోష్ఠీ, గ్రీకు లిపులలో)',
      'కౌటిల్యుని అర్థశాస్త్రం (రాజనీతి, గూఢచర్య, ఆర్థిక శాస్త్ర గ్రంథం)',
      'మెగస్తనీస్ రచించిన ఇండికా (మౌర్య రాజధాని పాటలీపుత్ర వర్ణన)',
      'బౌద్ధ గ్రంథాలు: అశోకావదాన, దివ్యావదాన'
    ],
    societyEn: [
      'Highly organized bureaucracy with central departments overseeing public works, census, and morality',
      'Megasthenes recorded a peaceful 7-caste division and absence of chattel slavery',
      'Dhamma Mahamattas appointed by Ashoka to promote moral harmony, respect for parents, and compassion to animals',
      'Post-Mauryan period saw vibrant cultural amalgamation with Indo-Greeks, Scythians, and Kushans'
    ],
    societyTe: [
      'ప్రజా సంక్షేమం, జనగణన, ధర్మ పరిరక్షణ కోసం పటిష్టమైన ఉద్యోగస్వామ్య వ్యవస్థ',
      'మెగస్తనీస్ ప్రకారం మౌర్య సమాజంలో శాంతిభద్రతలు, దొంగతనాల లేమి, బానిసత్వ రాహిత్యం',
      'ధర్మ మహామాత్రుల నియామకం ద్వారా తల్లిదండ్రుల గౌరవం, ప్రాణికోటిపై దయ వ్యాప్తి',
      'మౌర్యోనంతర యుగంలో ఇండో-గ్రీకులు, శకులు, కుషాణులతో సాంస్కృతిక సమ్మేళనం'
    ],
    economyEn: [
      'Vast state infrastructure: Royal highway (precursor of Grand Trunk Road), irrigation dams (Sudarshana Lake in Saurashtra)',
      'Standardized punch-marked silver coins circulating from Gandhara to Tamil borders',
      'Active international silk, spice, and gemstone trade across Central Asia and the Mediterranean',
      'Post-Mauryan boom: Roman trade via South Indian ports (Arikamedu, Muziris) bringing gold coins'
    ],
    economyTe: [
      'విశాల మౌర్య రహదారులు (గ్రాండ్ ట్రంక్ రోడ్డుకు పూర్వరూపం), సుదర్శన సరస్సు వంటి నీటిపారుదల ప్రాజెక్టులు',
      'గాంధారం నుండి దక్షిణ భారతం వరకు చెల్లుబాటయ్యే వెండి ముద్రిత నాణేలు',
      'మధ్య ఆసియా, రోమన్ సామ్రాజ్యాలతో పట్టు, సుగంధ ద్రవ్యాల వ్యాపారం',
      'మౌర్యోనంతర కాలంలో శాతవాహనులు, రోమన్ వర్తకం (అరికమేడు, ముజిరిస్) ద్వారా అపార బంగారు రాక'
    ],
    religionEn: [
      'Chandragupta Maurya embraced Jainism, retired to Shravanabelagola with Acharya Bhadrabahu',
      'Ashoka embraced Buddhism after Kalinga War (261 BCE); convened Third Buddhist Council at Pataliputra',
      'Ashoka dispatched peace emissaries to Sri Lanka (Mahinda & Sanghamitta), Greece, Egypt, and Burma',
      'Universal religious tolerance declared in Major Rock Edict XII'
    ],
    religionTe: [
      'చంద్రగుప్త మౌర్యుడు జైన మతాన్ని స్వీకరించి శ్రావణబెళగొళలో సల్లేఖన వ్రతం ఆచరించాడు',
      'కళింగ యుద్ధం (క్రీ.పూ. 261) తర్వాత అశోకుడు బౌద్ధాన్ని స్వీకరించి పాటలీపుత్రంలో తృతీయ బౌద్ధ సంగీతి నిర్వహించాడు',
      'శ్రీలంక (మహేంద్ర, సంఘమిత్ర), గ్రీస్, ఈజిప్ట్, బర్మా దేశాలకు ధర్మ రాయబారులను పంపాడు',
      '12వ శిలాశాసనంలో సర్వమత సామరస్యాన్ని అధికారికంగా ప్రకటించాడు'
    ],
    keyFeaturesEn: [
      '325 – 25 BCE: Alexander the Great & Greek invasions into northwest India and Hellenistic contact',
      '324 BCE: Chandragupta Maurya ascends the throne at Pataliputra, guided by Acharya Chanakya',
      '265 – 232 BCE: Emperor Ashoka reigns across the subcontinent; propagates Dhamma and non-violence',
      '200 BCE – 200 CE: Post-Mauryan classical redaction & Ramayana written by Sage Valmiki',
      'First political unification of the Indian subcontinent (over 5 million sq. km)',
      'The Sarnath Lion Capital – chosen as modern Republic of India’s official emblem',
      'The Ashoka Chakra (Wheel of Law) on the Indian national tricolor flag',
      'Post-Mauryan developments: Shungas, Satavahanas (Deccan), and Kushan Emperor Kanishka (Gandhara art)'
    ],
    keyFeaturesTe: [
      '325 – 25 BCE: అలెగ్జాండర్ & గ్రీకు దండయాత్రలు (వాయవ్య భారతదేశ దండయాత్ర & ఇండో-గ్రీక్ రాజ్యాలు)',
      '324 BCE: ఆచార్య చాణక్యుని మార్గదర్శకత్వంలో చంద్రగుప్త మౌర్యుని పట్టాభిషేకం',
      '265 – 232 BCE: అశోక చక్రవర్తి సువర్ణ పాలన; కళింగ పరివర్తన, ధర్మ స్తంభ శాసనాలు',
      '200 BCE – 200 CE: మౌర్యోత్తర యుగం & మహర్షి వాల్మీకి రామాయణ శ్లోక సంపుటి శాశ్వత గ్రంథస్థం',
      'భారత ఉపఖండంలో మొట్టమొదటి రాజకీయ ఏకీకరణ (50 లక్షల చ.కి.మీ పైగా)',
      'సారనాథ్ చతుర్ముఖ సింహ స్తంభం – భారత ప్రభుత్వ అధికారిక జాతీయ చిహ్నం',
      'భారత జాతీయ త్రివర్ణ పతాకంలోని ధర్మ చక్రం (అశోక చక్రం)',
      'మౌర్యోనంతర కాలంలో శాతవాహనులు (దక్షిణాపథం), కుషానుల కనిష్కుడు (గాంధార శిల్పకళ)'
    ],
    legacyEn: 'Gave India its indelible national symbols (Lion Capital, Ashoka Chakra), established non-violence as state policy, and carried Indian wisdom across the globe.',
    legacyTe: 'భారతదేశానికి సింహ చిహ్నం, ధర్మ చక్రాన్ని ప్రసాదించి, ప్రపంచానికి శాంతి, అహింసలను రాజ్య విధానంగా అందించిన చరిత్రాత్మక సామ్రాజ్యం.',
    infographicImage: './images/indian_history/civilizations_and_empires.jpg',
    imageCaptionEn: 'Ancient India: Maurya Empire (321–185 BCE) with Lion Capital of Ashoka',
    imageCaptionTe: 'ప్రాచీన భారతదేశం: మౌర్య సామ్రాజ్యం (క్రీ.పూ. 321–185) & సారనాథ్ సింహ స్తంభం'
  },
  {
    id: 'gupta_empire',
    order: 7,
    titleEn: 'Gupta Empire: The Golden Age of India',
    titleTe: 'గుప్త సామ్రాజ్యము: భారత స్వర్ణయుగము',
    timelineEn: '320 – 550 CE',
    timelineTe: 'క్రీ.శ. 320 – 550',
    subtitleEn: 'The Classical Zenith – Science, Astronomy, Mathematics, Literature & Temples',
    subtitleTe: 'శాస్త్రీయ శిఖరాగ్రం – గణితం, ఖగోళం, శిల్పకళ, కాళిదాసు సాహిత్యం & ఆలయ నిర్మాణం',
    category: 'classical',
    icon: '👑',
    bannerColor: 'from-[#C99700] to-[#7B1113]',
    borderColor: '#FFD54F',
    summaryEn: 'Universally hailed as the "Golden Age of India". Under visionary monarchs like Chandragupta I, Samudragupta, and Chandragupta II (Vikramaditya), ancient India witnessed extraordinary summits in science, mathematics (Aryabhata, discovery of zero and decimal system), Sanskrit literature (Kalidasa), metallurgy (rust-free Iron Pillar of Delhi), and Hindu temple architecture.',
    summaryTe: 'భారతదేశ చరిత్రలో సర్వసమ్మతమైన "స్వర్ణయుగము". మొదటి చంద్రగుప్తుడు, సముద్రగుప్తుడు, రెండవ చంద్రగుప్తుడు (విక్రమాదిత్యుడు) కాలంలో గణితం (ఆర్యభట్ట – సున్నా, దశాంశ పద్ధతి), ఖగోళం, కాళిదాసు సంస్కృత సాహిత్యం, తుప్పు పట్టని ఢిల్లీ ఇనుప స్తంభం, ఆలయ శిల్పకళలు శిఖర స్థాయికి చేరాయి.',
    sourcesEn: [
      'Prayag Prashasti (Allahabad Pillar Inscription composed in Sanskrit by Harishena)',
      'Coins of the Gupta emperors (magnificent gold Dinars depicting lyre-playing kings and horse sacrifices)',
      'Literary works of Kalidasa (Shakuntala, Meghaduta, Raghuvamsha), Vishakhadatta, and Sudraka',
      'Travelogues of Chinese Buddhist pilgrim Faxian (Fa-Hien)'
    ],
    sourcesTe: [
      'ప్రయాగ ప్రశస్తి (హరిషేణుడు రచించిన సంస్కృత అలహాబాద్ స్తంభ శాసనం)',
      'గుప్త చక్రవర్తుల అపురూప స్వర్ణ నాణేలు (వీణ వాయిస్తున్న రాజు, అశ్వమేధ చిత్రాలు)',
      'మహాకవి కాళిదాసు రచనలు (శాకుంతలం, మేఘదూతం, రఘువంశం), విశాఖదత్తుడు, శూద్రకుడు',
      'చైనా బౌద్ధ యాత్రికుడు ఫాహియాన్ (ఫా-హీన్) పర్యటన రికార్డులు'
    ],
    societyEn: [
      'Faxian reported peace, low crime, vegetarianism, absence of capital punishment, and charitable free hospitals',
      'Flourishing Sanskrit classical renaissance in court and academia',
      'Rise of devotional Hinduism (Puranic bhakti movement dedicated to Vishnu and Shiva)',
      'High patronage of universities, notably Nalanda University founded by Kumaragupta I'
    ],
    societyTe: [
      'ఫాహియాన్ వర్ణన ప్రకారం ప్రజలు సంతోషంగా, శాంతియుతంగా ఉండేవారు; ఉరిశిక్షలు లేవు; ఉచిత వైద్యశాలలు ఉండేవి',
      'రాజదర్బారులలో, విద్యాపీఠాలలో సంస్కృత భాషకు స్వర్ణ దశ',
      'భక్తి ఉద్యమం – విష్ణు, శివ ఆరాధనలతో కూడిన పౌరాణిక హిందూ మత వికాసం',
      'కుమారగుప్తునిచే నలందా విశ్వవిద్యాలయ స్థాపన – అంతర్జాతీయ విద్యార్థులకు నిలయం'
    ],
    economyEn: [
      'Prolific circulation of pure gold coins (Dinaras) and silver coins',
      'Bustling maritime trade with Southeast Asia, China, Ceylon, and Byzantine Empire',
      'Prosperous agriculture, iron and steel guilds, diamond mining, and textile manufacturing',
      'Decentralized provincial administration with powerful urban merchant guilds (Nigama)'
    ],
    economyTe: [
      'స్వచ్ఛమైన బంగారు నాణేలు (దీనారాలు), వెండి నాణేల విస్తార చలామణి',
      'ఆగ్నేయాసియా, చైనా, శ్రీలంక, బైజాంటైన్ సామ్రాజ్యాలతో సాగర వ్యాపారం',
      'వ్యవసాయం, ఉక్కు-ఇనుప పరిశ్రమలు, వజ్రాల తవ్వకాలు, వస్త్ర పరిశ్రమల వృద్ధి',
      'నగరాలలో వర్తక శ్రేణులకు (నిగమ) స్వపరిపాలన అధికారాలు'
    ],
    religionEn: [
      'Revival of Vedic rituals combined with Puranic Hindu devotion (Bhagavata and Shaiva traditions)',
      'Emperors carried title of "Parama Bhagavata" (devout worshippers of Lord Vishnu)',
      'Total harmony and state patronage extended to Buddhism and Jainism',
      'Great artistic masterpieces created at Ajanta Caves (caves 16, 17, 19) and Ellora'
    ],
    religionTe: [
      'వేద కర్మలతో పాటు పౌరాణిక భక్తి మార్గాల (వైష్ణవ, శైవ) సమన్వయ పునరుజ్జీవనం',
      'రాజులు "పరమ భాగవత" (శ్రీమహావిష్ణువు పరమ భక్తులు) బిరుదులు ధరించారు',
      'బౌద్ధ, జైన మతాలకు కూడా సమానమైన రాజపోషణ, గౌరవం లభించాయి',
      'అజంతా గుహలలోని ప్రపంచ ప్రఖ్యాత చిత్రాలు, శిల్పాలు ఈ కాలంలోనే రూపుదిద్దుకున్నాయి'
    ],
    keyFeaturesEn: [
      'Aryabhata (b. 476 CE): Aryabhatiya – invented zero, decimal system, calculated Pi (3.1416), proved Earth rotates on its axis',
      'Navaratnas (Nine Gems) in Vikramaditya’s court including poet Kalidasa and astronomer Varahamihira',
      'The Iron Pillar of Delhi: 1600+ years of rustless metallurgical wizardry',
      'Genesis of free-standing structural stone Hindu temples (Deogarh Dashavatara temple)'
    ],
    keyFeaturesTe: [
      'ఆర్యభట్ట (క్రీ.శ. 476): ఆర్యభట్టీయం – సున్నా, దశాంశ పద్ధతి ఆవిష్కరణ, పై (π) విలువ, భూభ్రమణ నిరూపణ',
      'విక్రమాదిత్యుని దర్బారులోని నవరత్నాలు – మహాకవి కాళిదాసు, ఖగోళవేత్త వరాహమిహిరుడు మొదలైనవారు',
      'ఢిల్లీ ఇనుప స్తంభం: 1600 సంవత్సరాలైనా నేటికీ తుప్పు పట్టని లోహ సాంకేతిక అద్భుతం',
      'స్వతంత్ర రాతి దేవాలయాల నిర్మాణ శైలి ఆవిర్భావం (దేవ్‌గఢ్ దశాavatar ఆలయం)'
    ],
    legacyEn: 'Defined the golden template of Indian classical genius in mathematics, science, medicine, Sanskrit poetry, and Hindu temple architecture that shaped civilization for millenniums.',
    legacyTe: 'గణితం, ఖగోళం, వైద్యం, సంస్కృత కవిత్వం మరియు దేవాలయ నిర్మాణాలలో ప్రపంచానికి దిక్సూచిగా నిలిచిన అసమాన స్వర్ణయుగం.',
    infographicImage: './images/indian_history/gupta_empire_manuscript.jpg',
    imageCaptionEn: 'The GUPTA EMPIRE (c. 320 - 550 CE) Golden Age Illustrated Manuscript',
    imageCaptionTe: 'గుప్త సామ్రాజ్యము (క్రీ.శ. 320 – 550) భారత స్వర్ణయుగ సచిత్ర చారిత్రక పత్రం'
  },
  {
    id: 'post_gupta_north_south',
    order: 8,
    titleEn: 'Post-Gupta Era: Harsha (North) & Pallava / Chalukya (South)',
    titleTe: 'గుప్తోత్తర యుగము: ఉత్తరాన హర్షవర్ధనుడు & దక్షిణాన పల్లవ / చాళుక్యులు',
    timelineEn: '600 – 750 CE',
    timelineTe: 'క్రీ.శ. 600 – 750',
    subtitleEn: 'Imperial Kannauj in the North & The Dawn of Dravidian Temple Glory in the South',
    subtitleTe: 'ఉత్తరాన కనౌజ్ వైభవము & దక్షిణాన ద్రావిడ ఆలయ శిల్పకళా ప్రభాతము',
    category: 'classical',
    icon: '🏛️',
    bannerColor: 'from-[#4A0012] to-[#2C1810]',
    borderColor: '#D4AF37',
    summaryEn: 'Following the decline of the Guptas, Emperor Harshavardhana of the Vardhana dynasty unified Northern India from Kannauj, while South India rose to epochal cultural heights under the great rival powers: the Pallavas of Kanchipuram and the Chalukyas of Badami.',
    summaryTe: 'గుప్తుల పతనం అనంతరం ఉత్తర భారతదేశాన్ని కనౌజ్ కేంద్రంగా వర్ధన వంశ చక్రవర్తి శ్రీ హర్షవర్ధనుడు ఏకం చేశాడు. అదే సమయంలో దక్షిణ భారతదేశంలో కాంచీపురం పల్లవులు మరియు బాదామి చాళుక్యులు పరస్పర పోటీతో మహోన్నత ఆలయ నిర్మాణాలకు, సాంస్కృతిక వికాసానికి నాంది పలికారు.',
    sourcesEn: [
      'Banabhatta’s Harshacharita (First formal biography of an Indian king in Sanskrit)',
      'Travels of Chinese Master Xuanzang (Hiuen Tsang) who stayed at Harsha’s court and Nalanda',
      'Aihole Inscription of Ravikirti recording Pulakeshin II’s famous victory over Harsha at Narmada',
      'Monolithic rock temples and inscriptions at Mamallapuram and Badami'
    ],
    sourcesTe: [
      'బాణభట్టుని హర్షచరితము (సంస్కృతంలో తొలి రాజ జీవిత చరిత్ర కావ్యము)',
      'చైనా యాత్రికుడు యువాన్ చాంగ్ (హుయాన్ త్సాంగ్) యాత్రా విశేషాలు',
      'నర్మదా నదీ తీరాన హర్షునిపై పులకేశి II విజయాన్ని చాటిన రవికీర్తి ఐహోల్ శాసనం',
      'మహాబలిపురం మరియు బాదామిలోని ఏకశిలా రాతి రథాలు, గుహాలయ శాసనాలు'
    ],
    societyEn: [
      'Harsha ruled with benevolent personal supervision, traveling continuously across his empire',
      'Great assemblies at Kannauj and Prayag Mahamoksha Parishad every 5 years where Harsha gave away all royal treasures in charity',
      'South India: Emergence of devotional Bhakti renaissance through Tamil Shaiva Nayanars and Vaishnava Alvars',
      'Nalanda University reached peak glory hosting 10,000 Buddhist and Hindu scholars under Harsha’s patronage'
    ],
    societyTe: [
      'హర్షుడు నిరంతరం రాజ్యంలో పర్యటిస్తూ స్వయంగా ప్రజా సంక్షేమాన్ని పర్యవేక్షించేవాడు',
      'ప్రతి 5 సంవత్సరాలకు ప్రయాగలో మహామోక్ష పరిషత్తు – సర్వ రాజకోశ సంపదను దానం చేసిన హర్షుడు',
      'దక్షిణ భారతదేశంలో నాయనార్లు, ఆళ్వారుల ద్వారా భక్తి విప్లవ ఆరంభం',
      'నలందా విశ్వవిద్యాలయం హర్షుని ఆదరణలో 10,000 మంది విద్యార్థులతో ప్రపంచ విద్యా కేంద్రంగా విరాజిల్లింది'
    ],
    economyEn: [
      'Growing feudalization (Samanta system) with land grants made to temples, monasteries, and officials',
      'Flourishing overseas trade from South Indian ports to Southeast Asia (Sri Vijaya, Java, Cambodia)',
      'Agricultural expansion through state-sponsored irrigation tanks (Eri system in Tamil country)',
      'Kannauj became the supreme geopolitical and commercial hub of Northern India'
    ],
    economyTe: [
      'సామంత వ్యవస్థ (భూదానాలు) విస్తరించింది; ఆలయాలకు, పండితులకు బ్రహ్మదేయ భూములు',
      'దక్షిణ భారత ఓడరేవుల ద్వారా ఆగ్నేయాసియా దేశాలతో (శ్రీవిజయ, జావా, కంబోడియా) సాగర వాణిజ్యం',
      'తమిళనాడులో చెరువులు (ఏరి వ్యవస్థ), కాలువల ద్వారా విస్తార సాగునీటి వసతి',
      'కనౌజ్ నగరం ఉత్తర భారతదేశంలో ప్రధాన రాజకీయ, వాణిజ్య కేంద్రంగా మారింది'
    ],
    religionEn: [
      'Harsha patronized Buddhism while revering Lord Shiva and Surya; author of 3 Sanskrit plays: Ratnavali, Priyadarsika, and Nagananda',
      'Pallava kings (Mahendravarman I, Narasimhavarman I) built timeless rock-cut shrines at Mamallapuram',
      'Chalukyas built cave temples and stone structural temples at Badami, Aihole, and Pattadakal',
      'Birth of classical South Indian temple architectures: Dravida and Vesara styles'
    ],
    religionTe: [
      'హర్షుడు శివ, సూర్య భక్తుడై బౌద్ధాన్ని అమితంగా ఆదరించాడు; స్వయంగా రత్నావళి, ప్రియదర్శిక, నాగానంద నాటకకర్త',
      'పల్లవ రాజులు (మహేంద్రవర్మ I, నరసింహవర్మ I) మహాబలిపురంలో ఏకశిలా రథాలు నిర్మించారు',
      'బాదామి చాళుక్యులు ఐహోల్, పట్టడకల్, బాదామిలలో అద్భుత దేవాలయాలను నిర్మించారు',
      'ద్రావిడ మరియు వేసర ఆలయ నిర్మాణ శైలుల అపురూప ఆవిర్భావం'
    ],
    keyFeaturesEn: [
      '788 CE: Birth of Jagadguru Adi Shankaracharya at Kalady, Kerala, revitalizing Advaita Vedanta and establishing 4 Amnaya Peethas across India',
      'North: Vardhana / Harsha Empire (606–647 CE) – Last great Hindu emperor to unite North India before Islamic invasions',
      'The Battle of Narmada (618 CE): Chalukya King Pulakeshin II checked Harsha’s southward expansion',
      'South: Pallavas established maritime empire and rock-cut architectural genius at Mahabalipuram (UNESCO)',
      'Chalukyas made Aihole the "Cradle of Indian Temple Architecture"'
    ],
    keyFeaturesTe: [
      '788 CE: కేరళలోని కాలడి గ్రామంలో జగద్గురు ఆది శంకరాచార్యుల దివ్య జననం; అద్వైత వేదాంత సిద్ధాంత పునరుద్ధరణ మరియు చతుర్ధామ పీఠాల స్థాపన',
      'ఉత్తరాన: వర్ధన / హర్ష సామ్రాజ్యం (క్రీ.శ. 606–647) – ఉత్తర భారత దేశాన్ని ఏకఛత్రాధిపత్యం కింద పాలించిన ఆఖరి చక్రవర్తి',
      'నర్మదా నదీ సంగ్రామం (క్రీ.శ. 618): బాదామి చాళుక్య పులకేశి II హర్షుని దక్షిణ దండయాత్రను నిలువరించాడు',
      'దక్షిణాన: పల్లవుల మహాబలిపురం ఏకశిలా రథాలు (యునెస్కో వారసత్వ సంపద)',
      'చాళుక్యుల ఐహోల్ నగరం – "భారతీయ ఆలయ నిర్మాణ శైలుల ఉయ్యాల" (Cradle of Temple Architecture)'
    ],
    legacyEn: 'Ushered in the medieval classical era characterized by glorious Dravidian temple architecture, international university scholarship at Nalanda, and enduring regional dynasties.',
    legacyTe: 'నలందా అంతర్జాతీయ విద్యా వికాసము, అద్భుత ద్రావిడ ఆలయ శిల్పకళ మరియు స్వతంత్ర ప్రాంతీయ సంస్కృతులకు ద్వారాలు తెరిచిన చారిత్రక పరివర్తన యుగము.',
    infographicImage: './images/indian_history/ancient_india_flowchart.jpg',
    imageCaptionEn: 'Flowchart: Gupta → North (Vardhan / Harsha) & South (Pallava / Chalukya)',
    imageCaptionTe: 'కాలక్రమ పట్టిక: గుప్తులు → ఉత్తరాన వర్ధనుడు (హర్షుడు) & దక్షిణాన పల్లవ / చాళుక్యులు'
  }
];

// Deep-Dive Comparative Analysis: Early Vedic vs Later Vedic
// Based directly on uploaded Infographics 2 & 3
export const VEDIC_COMPARISON_DATA: VedicComparisonDimension[] = [
  {
    dimensionEn: 'Time Period & Core Geography',
    dimensionTe: 'కాలము మరియు భౌగోళిక సరిహద్దులు',
    earlyVedicEn: '1500 BCE – 1000 BCE. Concentrated in the Sapta Sindhu (land of 7 rivers: Indus, Saraswati, Jhelum, Chenab, Ravi, Beas, Sutlej).',
    earlyVedicTe: 'క్రీ.పూ. 1500 – 1000. సప్తసింధు నదీ ప్రాంతం (సింధు, సరస్వతి, జీలం, చీనాబ్, రావి, బియాస్, సట్లెజ్).',
    laterVedicEn: '1000 BCE – 600 BCE. Shifted eastwards into the fertile Ganga-Yamuna Doab (Kuru-Panchala, Kosala, Videha).',
    laterVedicTe: 'క్రీ.పూ. 1000 – 600. తూర్పుగా గంగా-యమునా మైదానాలకు విస్తరణ (కురు, పాంచాల, కోసల, విదేహ ప్రాంతాలు).',
    icon: '🗺️'
  },
  {
    dimensionEn: 'Sacred Literature & Primary Texts',
    dimensionTe: 'పవిత్ర గ్రంథాలు & సాహిత్య ఆధారాలు',
    earlyVedicEn: 'Rigveda Samhita (10 Mandalas, 1,028 hymns) celebrating gods and nature.',
    earlyVedicTe: 'ఋగ్వేద సంహిత (10 మండలాలు, 1,028 సూక్తాలు) – ప్రకృతి శక్తులు, దేవతల స్తోత్రాలు.',
    laterVedicEn: 'Yajurveda (rituals), Samaveda (musical chants), Atharvaveda (healing/spells), Brahmanas, Aranyakas, and Upanishads.',
    laterVedicTe: 'యజుర్వేదము (కర్మలు), సామవేదము (గానము), అథర్వణవేదము (వైద్యం/మంత్రాలు), బ్రాహ్మణములు, ఆరణ్యకములు, ఉపనిషత్తులు.',
    icon: '📖'
  },
  {
    dimensionEn: 'Social Order & Varna System',
    dimensionTe: 'సాంఘిక వ్యవస్థ & వర్ణ విభజన',
    earlyVedicEn: 'Varna was occupational, fluid, and flexible. No hereditary rigidity; individuals could change professions freely.',
    earlyVedicTe: 'వర్ణ విభజన వృత్తి ఆధారితం మరియు సులభ పరివర్తన గలది. పుట్టుక ఆధారంగా కుల కఠినత లేదు; స్వేచ్ఛాయుత సమాజం.',
    laterVedicEn: 'Strict four hereditary varnas (Brahmin, Kshatriya, Vaishya, Shudra). Birth determined status; social mobility sharply curtailed.',
    laterVedicTe: 'జన్మతః నిర్ణయించబడే నాలుగు కఠిన వర్ణాలు (బ్రాహ్మణ, క్షత్రియ, వైశ్య, శూద్ర). వర్ణ పరివర్తన నిషిద్ధమైంది.',
    icon: '👥'
  },
  {
    dimensionEn: 'Status of Women',
    dimensionTe: 'సమాజంలో మహిళల స్థానము',
    earlyVedicEn: 'High respect and dignity. Participated in tribal assemblies (Sabha, Vidatha), received Upanayana education; scholarly women like Gargi, Maitreyi, Apala.',
    earlyVedicTe: 'అత్యున్నత గౌరవం, సమానత్వం. సభ, విదథ వంటి ప్రజా సభలలో పాల్గొన్నారు; ఉపనయన సంస్కారం, విద్యా హక్కు (గార్గి, మైత్రేయి).',
    laterVedicEn: 'Substantial decline. Excluded from assemblies and rituals; early child marriages began; status confined to domestic sphere.',
    laterVedicTe: 'గణనీయమైన క్షీణత. సభలలో పాల్గొనే హక్కు కోల్పోయారు; కర్మకాండలలో ప్రాధాన్యం తగ్గింది; గృహానికే పరిమితమయ్యారు.',
    icon: '👩'
  },
  {
    dimensionEn: 'Economy & Primary Livelihood',
    dimensionTe: 'ఆర్థిక వ్యవస్థ & ప్రధాన జీవనాధారము',
    earlyVedicEn: 'Predominantly pastoral. Cattle rearing was central; cattle (Go) was the measure of wealth; barley (Yava) was chief crop.',
    earlyVedicTe: 'ప్రధానంగా పశుపోషణ ఆధారితం. ఆవులే అసలైన సంపదకు మూలం (గవిష్టి); బార్లీ (యవ) ప్రధాన ఆహార పంట.',
    laterVedicEn: 'Agriculture became primary occupation. Cultivation of wheat and rice (Vrihi); emergence of urban crafts and trade centers.',
    laterVedicTe: 'వ్యవసాయం ప్రధాన వృత్తిగా మారింది. వరి (వ్రీహి), గోధుమల సాగు; నగరాలు, వాణిజ్య కేంద్రాలు, చేతివృత్తుల వికాసం.',
    icon: '🌾'
  },
  {
    dimensionEn: 'Use of Metals & Metallurgy',
    dimensionTe: 'లోహాల వినియోగం & పనిముట్లు',
    earlyVedicEn: 'Copper/Bronze (Ayas) was primarily known. Iron was not yet utilized.',
    earlyVedicTe: 'రాగి, కంచు (అయస్) మాత్రమే తెలుసు. ఇనుము ఇంకా ఉపయోగంలోకి రాలేదు.',
    laterVedicEn: 'Revolutionized by Iron (\'Shyama Ayas\'). Heavy iron plows and axes cleared dense Gangetic rainforests for deep agriculture.',
    laterVedicTe: 'ఇనుము (\'శ్యామ అయస్\') విప్లవం తెచ్చింది. భారీ ఇనుప నాగళ్ళు, గొడ్డళ్ళతో గంగా మైదానపు దట్టమైన అడవులను కొట్టి వ్యవసాయం విస్తరించారు.',
    icon: '⚒️'
  },
  {
    dimensionEn: 'Political Structure & Kingship',
    dimensionTe: 'రాజకీయ వ్యవస్థ & రాచరికము',
    earlyVedicEn: 'Tribal chief (Rajan) chosen by people. Power checked by democratic tribal councils: Sabha (elders) and Samiti (general assembly).',
    earlyVedicTe: 'తెగ నాయకుడు (రాజన్). అధికారాన్ని ప్రజాస్వామిక ప్రజా సభలైన సభ (పెద్దల సభ), సమితి (ప్రజా పరిషత్) నియంత్రించేవి.',
    laterVedicEn: 'Territorial kingdoms (Janapadas) with powerful hereditary monarchs (Samrats/Maharajas). Council of royal ministers (Ratnins) assisted the king.',
    laterVedicTe: 'విశాల ప్రాదేశిక రాజ్యాలు (జనపదాలు), వంశపారంపర్య చక్రవర్తులు. రాజుకు సహాయంగా మంత్రులు (రత్నులు), పురోహితులు, సేనాని.',
    icon: '👑'
  },
  {
    dimensionEn: 'Deities & Religious Worship',
    dimensionTe: 'దేవతలు & ఆరాధనా పద్ధతులు',
    earlyVedicEn: 'Nature gods: Indra (Thunder/War, 250 hymns), Agni (Fire/Messenger, 200 hymns), Varuna (Cosmic Truth - Rta), Soma, Surya.',
    earlyVedicTe: 'ప్రకృతి శక్తులు: ఇంద్రుడు (యుద్ధం/వర్షం, 250 సూక్తాలు), అగ్ని (హవిస్సులను మోసే దూత, 200 సూక్తాలు), వరుణుడు (ఋతమ్/సత్యం), సోముడు.',
    laterVedicEn: 'Earlier gods receded; rise of Prajapati (Brahma the creator), Rudra (Shiva), and Vishnu (Preserver).',
    laterVedicTe: 'తొలి దేవతల స్థానంలో ప్రజాపతి (సృష్టికర్త బ్రహ్మ), రుద్రుడు (శివుడు), విష్ణువు (రక్షకుడు) ప్రధాన ఆరాధ్య దైవాలుగా నిలిచారు.',
    icon: '🔥'
  },
  {
    dimensionEn: 'Sacrifices & Ritualism',
    dimensionTe: 'యజ్ఞాలు & కర్మకాండలు',
    earlyVedicEn: 'Simple personal and community fire prayers offering milk, ghee, and grains for peace, victory, and cattle.',
    earlyVedicTe: 'సాధారణ అగ్ని ప్రార్థనలు; నెయ్యి, పాలు, ధాన్యంతో కుటుంబ క్షేమం, గోసంపద కోసం నిరాడంబర యజ్ఞాలు.',
    laterVedicEn: 'Extremely elaborate royal sacrifices: Rajasuya (consecration), Ashvamedha (horse sacrifice), Vajapeya (chariot race) performed with animal offerings.',
    laterVedicTe: 'అత్యంత సంక్లిష్టమైన రాచరిక క్రతువులు: రాజసూయ, అశ్వమేధ, వాజపేయ యజ్ఞాలు; పూజారుల ఆధిపత్యం పెరిగింది.',
    icon: '🪔'
  },
  {
    dimensionEn: 'Spiritual & Philosophical Ideas',
    dimensionTe: 'ఆధ్యాత్మిక & తాత్త్విక ఆలోచనలు',
    earlyVedicEn: 'Focus on material prosperity, earthly boons, harmony with nature, and cosmic order (Rta).',
    earlyVedicTe: 'ఇహలోక సుఖాలు, పశు సంపద, విజయం, మరియు ప్రకృతితో సమతుల్యత (ఋతమ్) సాధించడం పైనే దృష్టి.',
    laterVedicEn: 'Upanishadic revolution: deep inquiries into Brahman (Ultimate Reality), Atman (Soul), Karma (Action), Punarjanma (Reincarnation), and Moksha.',
    laterVedicTe: 'ఉపనిషత్తుల విప్లవం: బ్రహ్మము (పరమాత్మ), ఆత్మ, కర్మ సిద్ధాంతము, పునర్జన్మ మరియు మోక్ష సాధనల గంభీర తాత్త్విక ఆవిష్కరణ.',
    icon: '✨'
  }
];

// Master 16 Mahajanapadas and Capitals Data
export interface MahajanapadaItem {
  number: number;
  nameTe: string;
  nameEn: string;
  capitalTe: string;
  capitalEn: string;
  locationTe: string;
  locationEn: string;
  typeTe: 'రాచరికము' | 'గణరాజ్యము';
  typeEn: 'Monarchy' | 'Republic';
}

export const SIXTEEN_MAHAJANAPADAS_LIST: MahajanapadaItem[] = [
  { number: 1, nameTe: 'గాంధార', nameEn: 'Gandhara', capitalTe: 'తక్షశిల', capitalEn: 'Taxila', locationTe: 'రావల్పిండి/పెషావర్ (పాకిస్తాన్)', locationEn: 'Rawalpindi / Peshawar (Pakistan)', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 2, nameTe: 'కాంబోజ', nameEn: 'Kamboja', capitalTe: 'రాజపుర / పూంచ్', capitalEn: 'Rajapura / Poonch', locationTe: 'పామిర్ పీఠభూమి / కశ్మీర్ సరిహద్దు', locationEn: 'Pamir / Kashmir border', typeTe: 'గణరాజ్యము', typeEn: 'Republic' },
  { number: 3, nameTe: 'మద్ర', nameEn: 'Madra', capitalTe: 'సాకల (సియాల్‌కోట్)', capitalEn: 'Sakala (Sialkot)', locationTe: 'పంజాబ్ (రావి-చీనాబ్ నదుల మధ్య)', locationEn: 'Punjab (between Ravi & Chenab)', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 4, nameTe: 'కురు', nameEn: 'Kuru', capitalTe: 'హస్తినాపురం / ఇంద్రప్రస్థ', capitalEn: 'Hastinapur / Indraprastha', locationTe: 'ఢిల్లీ, హర్యానా, పశ్చిమ ఉత్తర ప్రదేశ్', locationEn: 'Delhi, Haryana, Western UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 5, nameTe: 'పాంచాల', nameEn: 'Panchala', capitalTe: 'అహిచ్ఛత్ర / కాంపిల్య', capitalEn: 'Ahichchhatra / Kampilya', locationTe: 'రోహిల్‌ఖండ్ (ఉత్తర ప్రదేశ్)', locationEn: 'Rohilkhand, Western UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 6, nameTe: 'శూరసేన', nameEn: 'Surasena', capitalTe: 'మధుర', capitalEn: 'Mathura', locationTe: 'యమునా తీర బ్రజ్ ప్రాంతం (ఉత్తర ప్రదేశ్)', locationEn: 'Braj region, UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 7, nameTe: 'కోసల', nameEn: 'Kosala', capitalTe: 'శ్రావస్తి / అయోధ్య', capitalEn: 'Shravasti / Ayodhya', locationTe: 'అవధ్ ప్రాంతం (ఉత్తర ప్రదేశ్)', locationEn: 'Awadh region, UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 8, nameTe: 'మల్ల', nameEn: 'Malla', capitalTe: 'కుశీనగరం / పావా', capitalEn: 'Kusinara / Pawa', locationTe: 'దేవరియా, గోరఖ్‌పూర్ (ఉత్తర ప్రదేశ్)', locationEn: 'Deoria, Gorakhpur, UP', typeTe: 'గణరాజ్యము', typeEn: 'Republic' },
  { number: 9, nameTe: 'వత్స', nameEn: 'Vatsa', capitalTe: 'కౌశాంబి', capitalEn: 'Kaushambi', locationTe: 'అలహాబాద్ (ప్రయాగ్‌రాజ్)', locationEn: 'Prayagraj / Allahabad, UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 10, nameTe: 'చేది', nameEn: 'Chedi', capitalTe: 'శుక్తిమతి (సోత్థివతి)', capitalEn: 'Shuktimati', locationTe: 'బుందేల్‌ఖండ్ (మధ్య ప్రదేశ్)', locationEn: 'Bundelkhand, MP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 11, nameTe: 'కాశి', nameEn: 'Kasi', capitalTe: 'వారణాసి', capitalEn: 'Varanasi', locationTe: 'వారణాసి గంగా తీరం (ఉత్తర ప్రదేశ్)', locationEn: 'Varanasi region, UP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 12, nameTe: 'మగధ', nameEn: 'Magadha', capitalTe: 'రాజగృహం / పాటలీపుత్ర', capitalEn: 'Rajagriha / Pataliputra', locationTe: 'దక్షిణ బీహార్ (పాట్నా, గయ)', locationEn: 'South Bihar (Patna, Gaya)', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 13, nameTe: 'అంగ', nameEn: 'Anga', capitalTe: 'చంపా', capitalEn: 'Champa', locationTe: 'భాగల్పూర్, మోంఘీర్ (బీహార్)', locationEn: 'Bhagalpur, Bihar', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 14, nameTe: 'మత్స్య', nameEn: 'Matsya', capitalTe: 'విరాటనగరం (బైరాట్)', capitalEn: 'Viratnagar (Bairat)', locationTe: 'జైపూర్, ఆల్వార్ (రాజస్థాన్)', locationEn: 'Jaipur, Alwar (Rajasthan)', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 15, nameTe: 'అవంతి', nameEn: 'Avanti', capitalTe: 'ఉజ్జయిని / మహిష్మతి', capitalEn: 'Ujjayini / Mahishmati', locationTe: 'మాల్వా ప్రాంతం (మధ్య ప్రదేశ్)', locationEn: 'Malwa region, MP', typeTe: 'రాచరికము', typeEn: 'Monarchy' },
  { number: 16, nameTe: 'అశ్మక / అస్సక', nameEn: 'Assaka (Asmaka)', capitalTe: 'పోతలి / బోధన్', capitalEn: 'Potali / Bodhan', locationTe: 'గోదావరి నదీ తీరం (తెలంగాణ / మహారాష్ట్ర - దక్షిణ భారతదేశంలో ఏకైక మహాజనపదం)', locationEn: 'Godavari Valley (Telangana / Maharashtra - Only southern Mahajanapada)', typeTe: 'రాచరికము', typeEn: 'Monarchy' }
];

// Medieval India Timeline Milestones (6th – 16th Century)
export interface MedievalTimelineMilestone {
  order: number;
  yearEn: string;
  yearTe: string;
  titleEn: string;
  titleTe: string;
  detailEn: string;
  detailTe: string;
  side: 'left' | 'right';
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const MEDIEVAL_INDIA_TIMELINE: MedievalTimelineMilestone[] = [
  {
    order: 1,
    yearEn: '6th Century',
    yearTe: '6వ శతాబ్దము',
    titleEn: 'Fall of the Gupta Empire',
    titleTe: 'గుప్త సామ్రాజ్య పతనము',
    detailEn: 'Marks the end of India’s classical age and the rise of regional dynasties across North and South.',
    detailTe: 'భారతదేశ శాస్త్రీయ స్వర్ణయుగ ముగింపును మరియు స్వతంత్ర ప్రాంతీయ రాజవంశాల ఆవిర్భావాన్ని సూచిస్తుంది.',
    side: 'left',
    icon: '👑',
    color: '#7B1113',
    bgColor: '#FFF8E1',
    borderColor: '#D4AF37'
  },
  {
    order: 2,
    yearEn: '712 CE',
    yearTe: 'క్రీ.శ. 712',
    titleEn: 'Arab Invasion of Sindh',
    titleTe: 'సింధుపై అరబ్బుల దండయాత్ర',
    detailEn: 'Muhammad bin Qasim leads the first major Islamic incursion into the Indian subcontinent, conquering Sindh.',
    detailTe: 'మహమ్మద్ బిన్ ఖాసిం నేతృత్వంలో భారత ఉపఖండంలోకి తొలి ప్రధాన ఇస్లామిక్ దండయాత్ర జరిగి సింధు ఆక్రమణ జరిగింది.',
    side: 'right',
    icon: '⛵',
    color: '#0284C7',
    bgColor: '#F0F9FF',
    borderColor: '#38BDF8'
  },
  {
    order: 3,
    yearEn: '9th Century',
    yearTe: '9వ శతాబ్దము',
    titleEn: 'Rise of the Chola Empire',
    titleTe: 'మహోన్నత చోళ సామ్రాజ్యోదయము',
    detailEn: 'Becomes a dominant military and naval power across South India and Southeast Asia (Rajaraja & Rajendra Chola).',
    detailTe: 'దక్షిణ భారతదేశం మరియు ఆగ్నేయాసియాలో తిరుగులేని సైనిక, నౌకాదళ శక్తిగా ఎదిగిన సామ్రాజ్యము (రాజరాజ & రాజేంద్ర చోళులు).',
    side: 'left',
    icon: '🚢',
    color: '#B45309',
    bgColor: '#FFFBEB',
    borderColor: '#FBBF24'
  },
  {
    order: 4,
    yearEn: '1000 – 1027 CE',
    yearTe: 'క్రీ.శ. 1000 – 1027',
    titleEn: 'Invasions of Mahmud of Ghazni',
    titleTe: 'మహమూద్ గజనీ దండయాత్రలు',
    detailEn: 'Multiple raids for wealth (17 expeditions, Somnath temple sack) that exposed defensive vulnerabilities in North India.',
    detailTe: 'భారత సంపదను కొల్లగొట్టడానికి 17 దండయాత్రలు (సోమనాథ ఆలయ దాడి), ఉత్తర భారత రక్షణ బలహీనతల బహిర్గతం.',
    side: 'right',
    icon: '⚔️',
    color: '#DC2626',
    bgColor: '#FEF2F2',
    borderColor: '#F87171'
  },
  {
    order: 5,
    yearEn: '1192 CE',
    yearTe: 'క్రీ.శ. 1192',
    titleEn: 'Battle of Tarain (Second)',
    titleTe: 'రెండవ తరైన్ యుద్ధము',
    detailEn: 'Muhammad Ghori defeats Prithviraj Chauhan, paving the way for the establishment of Islamic rule in North India.',
    detailTe: 'మహమ్మద్ ఘోరీ పృథ్వీరాజ్ చౌహాన్‌ను ఓడించి, ఉత్తర భారతదేశంలో ఇస్లామిక్ పాలనకు రాజమార్గాన్ని వేశాడు.',
    side: 'left',
    icon: '🗡️',
    color: '#991B1B',
    bgColor: '#FFF1F2',
    borderColor: '#FB7185'
  },
  {
    order: 6,
    yearEn: '1206 CE',
    yearTe: 'క్రీ.శ. 1206',
    titleEn: 'Establishment of the Delhi Sultanate',
    titleTe: 'ఢిల్లీ సల్తనత్ స్థాపన',
    detailEn: 'Qutbuddin Aibak founds the Mamluk (Slave) Dynasty, the first of five reigning dynasties ruling from Delhi.',
    detailTe: 'కుతుబుద్దీన్ ఐబక్ బానిస వంశాన్ని స్థాపించాడు; ఢిల్లీ కేంద్రంగా పాలించిన 5 సల్తనత్ వంశాల శకారంభం.',
    side: 'right',
    icon: '🕌',
    color: '#065F46',
    bgColor: '#ECFDF5',
    borderColor: '#34D399'
  },
  {
    order: 7,
    yearEn: '1336 CE',
    yearTe: 'క్రీ.శ. 1336',
    titleEn: 'Foundation of the Vijayanagara Empire',
    titleTe: 'విజయనగర సామ్రాజ్య స్థాపన',
    detailEn: 'Established by Harihara I and Bukka Raya I under Sage Vidyaranya’s guidance to resist Sultanate expansion and safeguard Sanatana Dharma.',
    detailTe: 'విద్యారణ్య స్వామి మార్గదర్శకత్వంలో హరిహర రాయలు, బుక్క రాయలు తుంగభద్ర తీరాన సనాతన ధర్మ రక్షణకు స్థాపించిన మహోన్నత సామ్రాజ్యము.',
    side: 'left',
    icon: '🏛️',
    color: '#7B1113',
    bgColor: '#FFF8E1',
    borderColor: '#D4AF37'
  },
  {
    order: 8,
    yearEn: '1347 CE',
    yearTe: 'క్రీ.శ. 1347',
    titleEn: 'Rise of the Bahmani Sultanate',
    titleTe: 'బహమనీ సల్తనత్ ఆవిర్భావము',
    detailEn: 'Alauddin Bahman Shah founds the first major Islamic kingdom in the Deccan region, becoming Vijayanagara’s chief rival.',
    detailTe: 'అల్లావుద్దీన్ బహమన్ షా దక్కన్ ప్రాంతంలో తొలి ప్రధాన ఇస్లామిక్ రాజ్యాన్ని స్థాపించాడు; విజయనగరానికి ప్రధాన ప్రత్యర్థి.',
    side: 'right',
    icon: '🏰',
    color: '#1E40AF',
    bgColor: '#EFF6FF',
    borderColor: '#60A5FA'
  },
  {
    order: 9,
    yearEn: '1398 CE',
    yearTe: 'క్రీ.శ. 1398',
    titleEn: 'Timur’s Invasion of Delhi',
    titleTe: 'తైమూర్ ఢిల్లీ దండయాత్ర',
    detailEn: 'The sacking and devastation of Delhi by Central Asian conqueror Timur severely crippled the Delhi Sultanate.',
    detailTe: 'మధ్య ఆసియా విజేత తైమూర్ ఢిల్లీని దోపిడీ చేసి విధ్వంసం చేశాడు; తుగ్లక్ వంశం మరియు సల్తనత్ శక్తి తీవ్రంగా దెబ్బతిన్నాయి.',
    side: 'left',
    icon: '🔥',
    color: '#C2410C',
    bgColor: '#FFF7ED',
    borderColor: '#FB923C'
  },
  {
    order: 10,
    yearEn: '1526 CE',
    yearTe: 'క్రీ.శ. 1526',
    titleEn: 'First Battle of Panipat',
    titleTe: 'మొదటి పానిపట్ యుద్ధము',
    detailEn: 'Babur defeats Ibrahim Lodi using firearms and gunpowder tactics, ending the Delhi Sultanate and founding the Mughal Empire.',
    detailTe: 'బాబర్ ఫిరంగులు, తుపాకులతో ఇబ్రహీం లోడిని ఓడించి, ఢిల్లీ సల్తనత్‌ను అంతం చేసి మొఘల్ సామ్రాజ్యాన్ని స్థాపించాడు.',
    side: 'right',
    icon: '💣',
    color: '#431407',
    bgColor: '#FAF5FF',
    borderColor: '#C084FC'
  },
  {
    order: 11,
    yearEn: '1565 CE',
    yearTe: 'క్రీ.శ. 1565',
    titleEn: 'Battle of Talikota (Rakkasa Tangadi)',
    titleTe: 'తళ్ళికోట యుద్ధము (రాక్షస తంగడి)',
    detailEn: 'A grand coalition of Deccan Sultanates defeats the Vijayanagara army (Aliya Rama Raya), leading to the tragic destruction of Hampi.',
    detailTe: 'దక్కన్ నలుగురు సుల్తానుల ఉమ్మడి సైన్యం విజయనగర సేనలను ఓడించి హంపీ వైభవాన్ని నేలమట్టం చేసింది; సామ్రాజ్య క్షీణతకు కారణమైంది.',
    side: 'left',
    icon: '🛡️',
    color: '#831843',
    bgColor: '#FDF2F8',
    borderColor: '#F472B6'
  }
];

// Complete Mughal Empire Timeline (1526–1857 CE) with Extracted & Enhanced Images
export interface MughalTimelineEraItem {
  order: number;
  rulerEn: string;
  rulerTe: string;
  reignEn: string;
  reignTe: string;
  badgeColor: string;
  borderColor: string;
  bgColor: string;
  portrait?: {
    src: string;
    captionEn: string;
    captionTe: string;
    tagEn: string;
    tagTe: string;
  };
  eventsEn: string[];
  eventsTe: string[];
  images: Array<{
    src: string;
    captionEn: string;
    captionTe: string;
  }>;
}

export const MUGHAL_EMPIRE_TIMELINE: MughalTimelineEraItem[] = [
  {
    order: 1,
    rulerEn: 'BABUR',
    rulerTe: '1. బాబర్ (Babur – మొఘల్ సామ్రాజ్య స్థాపకుడు)',
    reignEn: '1526 – 1530 CE',
    reignTe: 'క్రీ.శ. 1526 – 1530',
    badgeColor: '#6D2812',
    borderColor: '#C99700',
    bgColor: '#FFFDF7',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_babur.jpg',
      captionEn: 'Emperor Babur (1526–1530)',
      captionTe: 'చక్రవర్తి బాబర్ (1526–1530)',
      tagEn: 'Founder of the Mughal Empire',
      tagTe: 'మొఘల్ సామ్రాజ్య స్థాపకుడు'
    },
    eventsEn: [
      'First Battle of Panipat (1526): Defeated Ibrahim Lodi and established Mughal rule in India.',
      'Battle of Khanwa (1527) against Rana Sanga, Battle of Chanderi (1528), and Battle of Ghaghra (1529).',
      'Introduced symmetrical Persian Charbagh garden layout.',
      'Authored his famous autobiography “Baburnama” (Tuzuk-i-Baburi).'
    ],
    eventsTe: [
      'మొదటి పానిపట్ యుద్ధం (1526): ఇబ్రహీం లోడిని ఓడించి భారతదేశంలో మొఘల్ పాలనను స్థాపించాడు.',
      'ఖాన్వా యుద్ధం (1527 - రాణా సంగ్రామ సింహునితో), చందేరి యుద్ధం (1528), మరియు ఘాఘ్రా యుద్ధం (1529).',
      'పర్షియన్ శైలి "చార్‌బాగ్" (Charbagh) ఉద్యానవన నిర్మాణ పద్ధతిని ప్రవేశపెట్టాడు.',
      'తన ప్రసిద్ధ స్వీయచరిత్ర "బాబర్‌నామా" (తుజుక్-ఇ-బాబరీ) గ్రంథాన్ని రచించాడు.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_babur.jpg',
        captionEn: 'Babur – Founder of the Mughal Empire',
        captionTe: 'బాబర్ – మొఘల్ సామ్రాజ్య స్థాపకుడు'
      },
      {
        src: './images/indian_history/mughal_timeline/babur_panipat_battle.jpg',
        captionEn: 'First Battle of Panipat (1526)',
        captionTe: 'మొదటి పానిపట్ యుద్ధం (1526)'
      },
      {
        src: './images/indian_history/mughal_timeline/babur_khanwa_battle.jpg',
        captionEn: 'Battle of Khanwa (1527) & Chanderi (1528)',
        captionTe: 'ఖాన్వా (1527) & చందేరి (1528) యుద్ధాలు'
      },
      {
        src: './images/indian_history/mughal_timeline/early_mughals_map.jpg',
        captionEn: 'Early Mughals Territory Map',
        captionTe: 'తొలి మొఘలుల సామ్రాజ్య విస్తరణ పటం'
      }
    ]
  },
  {
    order: 2,
    rulerEn: 'HUMAYUN & SHER SHAH SURI (INTERREGNUM)',
    rulerTe: '2. హుమాయూన్ & షేర్ షా సూరి (మధ్యంతర పాలన)',
    reignEn: '1530 – 1540 CE; Restored 1555 – 1556 CE',
    reignTe: 'క్రీ.శ. 1530 – 1540; పునరుద్ధరణ 1555 – 1556',
    badgeColor: '#5B1A18',
    borderColor: '#D4AF37',
    bgColor: '#FAF7F0',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_humayun.jpg',
      captionEn: 'Emperor Humayun (1530–1540, 1555–1556)',
      captionTe: 'చక్రవర్తి హుమాయూన్ (1530–1540, 1555–1556)',
      tagEn: 'Brief Exile & Return',
      tagTe: 'తాత్కాలిక ప్రవాసం & సింహాసన పునరుద్ధరణ'
    },
    eventsEn: [
      'Defeated by Sher Shah Suri (Sur Empire Interregnum, 1540–1555 CE) and forced into exile in Persia.',
      'Restored the Mughal throne in 1555–1556 CE with Persian support.',
      'Cultural synthesis blending Persian artistic traditions and Indian architectural styles.',
      'Humayun’s Tomb in Delhi (commissioned by Hamida Banu Begum) became the grand prototype for Mughal garden-tombs.'
    ],
    eventsTe: [
      'షేర్ షా సూరి చేతిలో ఓటమి చెంది (సూర్ వంశ మధ్యంతర పాలన: 1540–1555) పర్షియాకు ప్రవాసం వెళ్ళాడు.',
      'క్రీ.శ. 1555–1556లో తిరిగి ఢిల్లీ సింహాసనాన్ని పునరుద్ధరించుకున్నాడు.',
      'పర్షియన్ చిత్రకళ మరియు భారతీయ వాస్తు సంప్రదాయాల సాంస్కృతిక సమ్మేళనానికి నాంది పలికాడు.',
      'ఢిల్లీలోని "హుమాయూన్ సమాధి" (Humayun’s Tomb) మొఘల్ వాస్తుశిల్ప పరిణామంలో మైలురాయిగా నిలిచింది.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_humayun.jpg',
        captionEn: 'Humayun – Brief Exile & Return',
        captionTe: 'హుమాయూన్ – ప్రవాసం & సింహాసన పునరుద్ధరణ'
      },
      {
        src: './images/indian_history/mughal_timeline/humayun_tomb.jpg',
        captionEn: 'Humayun’s Tomb (Delhi)',
        captionTe: 'హుమాయూన్ సమాధి (ఢిల్లీ)'
      },
      {
        src: './images/indian_history/mughal_timeline/second_battle_panipat.jpg',
        captionEn: 'Second Battle of Panipat (1556) & Restoration',
        captionTe: 'రెండవ పానిపట్ యుద్ధం (1556) & పునరుద్ధరణ'
      }
    ]
  },
  {
    order: 3,
    rulerEn: 'AKBAR',
    rulerTe: '3. అక్బర్ (Akbar – సామ్రాజ్య విస్తరణ & సంస్కరణలు)',
    reignEn: '1556 – 1605 CE',
    reignTe: 'క్రీ.శ. 1556 – 1605',
    badgeColor: '#7B1113',
    borderColor: '#D84315',
    bgColor: '#FFFDF7',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_akbar.jpg',
      captionEn: 'Emperor Akbar (1556–1605)',
      captionTe: 'చక్రవర్తి అక్బర్ (1556–1605)',
      tagEn: 'Golden Age of the Mughals',
      tagTe: 'మొఘలుల స్వర్ణయుగం'
    },
    eventsEn: [
      'Second Battle of Panipat (1556): Consolidated and vastly expanded the Mughal Empire across Northern and Central India.',
      'Administrative & Revenue Reforms: Introduced the Mansabdari military-civil ranking system and Raja Todar Mal’s Zabti (Dahsala) land revenue system.',
      'Proclaimed Sulh-i-Kul (Universal Peace / Religious Harmony) and founded Din-i-Ilahi.',
      'Built the red sandstone masterpieces of Agra Fort, Fatehpur Sikri, and Buland Darwaza.',
      'Commissioned the official court chronicle “Akbarnama” (and Ain-i-Akbari) by Abul Fazl.'
    ],
    eventsTe: [
      'రెండవ పానిపట్ యుద్ధం (1556): సామ్రాజ్యాన్ని సుస్థిరపరిచి ఉత్తర, మధ్య భారతదేశమంతటా విస్తరించాడు.',
      'పరిపాలనా & రెవెన్యూ సంస్కరణలు: "మన్సబ్‌దారీ" సైనిక-పాలనా విధానం మరియు రాజా తోడర్‌మల్ "జబ్తీ" (దహసాల) భూమిశిస్తు పద్ధతిని ప్రవేశపెట్టాడు.',
      '"సుల్హ్-ఇ-కుల్" (సర్వమత సహనం) విధానాన్ని మరియు "దీన్-ఇ-ఇలాహీ"ని ప్రకటించాడు.',
      'ఎర్ర చలువరాతితో ఆగ్రా కోట (Agra Fort), ఫతేపూర్ సిక్రీ (Fatehpur Sikri) మరియు బులంద్ దర్వాజా (Buland Darwaza) నిర్మించాడు.',
      'అబుల్ ఫజల్ చేత "అక్బర్‌నామా" (మరియు ఐన్-ఇ-అక్బరీ) చారిత్రక గ్రంథాన్ని రచింపజేశాడు.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_akbar.jpg',
        captionEn: 'Akbar – Golden Age of the Mughals',
        captionTe: 'అక్బర్ – మొఘలుల స్వర్ణయుగ చక్రవర్తి'
      },
      {
        src: './images/indian_history/mughal_timeline/akbar_agra_fort.jpg',
        captionEn: 'Agra Fort (Red Sandstone Fortress)',
        captionTe: 'ఆగ్రా కోట (Agra Fort)'
      },
      {
        src: './images/indian_history/mughal_timeline/akbar_fatehpur_buland.jpg',
        captionEn: 'Fatehpur Sikri & Buland Darwaza',
        captionTe: 'ఫతేపూర్ సిక్రీ & బులంద్ దర్వాజా'
      }
    ]
  },
  {
    order: 4,
    rulerEn: 'JAHANGIR',
    rulerTe: '4. జహంగీర్ (Jahangir – చిత్రకళా పోషణ)',
    reignEn: '1605 – 1627 CE',
    reignTe: 'క్రీ.శ. 1605 – 1627',
    badgeColor: '#1E3A8A',
    borderColor: '#60A5FA',
    bgColor: '#F8FAFC',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_jahangir.jpg',
      captionEn: 'Emperor Jahangir (1605–1627)',
      captionTe: 'చక్రవర్తి జహంగీర్ (1605–1627)',
      tagEn: 'Era of Cultural Flourishing',
      tagTe: 'సాంస్కృతిక & చిత్రకళా వికాస యుగం'
    },
    eventsEn: [
      'Great patron of art, nature, flora, and fauna; Mughal Miniature Painting reached its zenith during his reign.',
      'Completed Akbar’s grand mausoleum (Akbar’s Tomb) at Sikandra, Agra.',
      'Commissioned Itmad-ud-Daulah’s Tomb in Agra – the first Mughal structure built completely in white marble with Pietra Dura semi-precious stone inlay.'
    ],
    eventsTe: [
      'కళలు మరియు ప్రకృతికి గొప్ప పోషకుడు; ఆయన పాలనలో మొఘల్ "మినియేచర్ పెయింటింగ్" (సూక్ష్మ చిత్రలేఖనం) అత్యున్నత శిఖరాలకు చేరింది.',
      'ఆగ్రా సమీపంలోని సికంద్రాలో "అక్బర్ సమాధి" (Akbar’s Tomb) నిర్మాణాన్ని పూర్తి చేశాడు.',
      'తెల్ల పాలరాయిపై "పియెట్రా దురా" (Pietra Dura) రత్నాల తాపడంతో కూడిన "ఇత్మాద్-ఉద్-దౌలా సమాధి"ని నిర్మింపజేశాడు.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_jahangir.jpg',
        captionEn: 'Jahangir – Era of Cultural Flourishing',
        captionTe: 'జహంగీర్ – సాంస్కృతిక & చిత్రకళా పోషకుడు'
      },
      {
        src: './images/indian_history/mughal_timeline/jahangir_akbar_tomb.jpg',
        captionEn: 'Akbar’s Tomb (Sikandra)',
        captionTe: 'అక్బర్ సమాధి (సికంద్రా)'
      },
      {
        src: './images/indian_history/mughal_timeline/jahangir_painting.jpg',
        captionEn: 'Jahangir Miniature Painting',
        captionTe: 'జహంగీర్ కాలం నాటి మినియేచర్ చిత్రకళ'
      },
      {
        src: './images/indian_history/mughal_timeline/jahangir_itmad_tomb.jpg',
        captionEn: 'Itmad-ud-Daulah’s Tomb',
        captionTe: 'ఇత్మాద్-ఉద్-దౌలా సమాధి'
      }
    ]
  },
  {
    order: 5,
    rulerEn: 'SHAH JAHAN',
    rulerTe: '5. షాజహాన్ (Shah Jahan – వాస్తుశిల్ప స్వర్ణయుగం)',
    reignEn: '1628 – 1658 CE',
    reignTe: 'క్రీ.శ. 1628 – 1658',
    badgeColor: '#0F5257',
    borderColor: '#2DD4BF',
    bgColor: '#F0FDFA',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_shah_jahan.jpg',
      captionEn: 'Emperor Shah Jahan (1628–1658)',
      captionTe: 'చక్రవర్తి షాజహాన్ (1628–1658)',
      tagEn: 'Built the Taj Mahal',
      tagTe: 'తాజ్ మహల్ నిర్మాత – వాస్తుశిల్ప స్వర్ణయుగం'
    },
    eventsEn: [
      'Golden Age of Mughal Architecture marked by unmatched white marble grandeur and geometric symmetry.',
      'Built the world-renowned Taj Mahal at Agra, the Red Fort (Lal Qila) and Jama Masjid at Shahjahanabad (Delhi).',
      'Commissioned the legendary jewel-studded Peacock Throne (Takht-i-Taus).'
    ],
    eventsTe: [
      'మొఘల్ వాస్తుశిల్ప స్వర్ణయుగం: తెల్ల పాలరాయి నిర్మాణాలు, అద్భుత సౌష్ఠవం మరియు వైభవానికి పరాకాష్ట.',
      'ఆగ్రాలో ప్రపంచ ప్రసిద్ధ "తాజ్ మహల్", ఢిల్లీలో "ఎర్రకోట" (Red Fort) మరియు "జామా మసీదు"లను నిర్మించాడు.',
      'వజ్ర వైడూర్యాలు పొదిగిన జగత్ప్రసిద్ధ "నెమలి సింహాసనం" (Peacock Throne / తఖ్త్-ఇ-తౌస్) తయారు చేయించాడు.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_shah_jahan.jpg',
        captionEn: 'Shah Jahan – Built the Taj Mahal',
        captionTe: 'షాజహాన్ – తాజ్ మహల్ నిర్మించిన చక్రవర్తి'
      },
      {
        src: './images/indian_history/mughal_timeline/shahjahan_peacock_throne.jpg',
        captionEn: 'The Peacock Throne (Takht-i-Taus)',
        captionTe: 'నెమలి సింహాసనం (Peacock Throne)'
      },
      {
        src: './images/indian_history/mughal_timeline/shahjahan_taj_mahal.jpg',
        captionEn: 'Taj Mahal (Agra)',
        captionTe: 'తాజ్ మహల్ (ఆగ్రా)'
      },
      {
        src: './images/indian_history/mughal_timeline/shahjahan_red_fort.jpg',
        captionEn: 'Red Fort (Lal Qila, Delhi)',
        captionTe: 'ఎర్రకోట (Red Fort, ఢిల్లీ)'
      }
    ]
  },
  {
    order: 6,
    rulerEn: 'AURANGZEB',
    rulerTe: '6. ఔరంగజేబు (Aurangzeb – గరిష్ట విస్తరణ & పతనారంభం)',
    reignEn: '1658 – 1707 CE',
    reignTe: 'క్రీ.శ. 1658 – 1707',
    badgeColor: '#5C4033',
    borderColor: '#A1887F',
    bgColor: '#FFFDF7',
    eventsEn: [
      'Prolonged Deccan campaigns pushed the Mughal Empire to its greatest territorial extent across the subcontinent.',
      'Enforced religious orthodoxy and reintroduced the Jizya tax in 1679 CE.',
      'Built Bibi Ka Maqbara in Aurangabad; Death of Aurangzeb in 1707 CE marked the decline of the Empire.'
    ],
    eventsTe: [
      'సుదీర్ఘ దక్కన్ దండయాత్రల ద్వారా మొఘల్ సామ్రాజ్య భౌగోళిక సరిహద్దులను గరిష్ట స్థాయికి విస్తరించాడు.',
      'మత ఛాందసవాదాన్ని అనుసరించి, క్రీ.శ. 1679లో "జిజియా" (Jizya) పన్నును తిరిగి విధించాడు.',
      'ఔరంగాబాద్‌లో "బీబీ కా మక్బరా" నిర్మించాడు; క్రీ.శ. 1707లో ఔరంగజేబు మరణంతో సామ్రాజ్య పతనం మొదలైంది.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/aurangzeb_peak_map.jpg',
        captionEn: 'Territorial Peak Map under Aurangzeb',
        captionTe: 'ఔరంగజేబు పాలనలో గరిష్ట విస్తరణ పటం'
      },
      {
        src: './images/indian_history/mughal_timeline/aurangzeb_jama_masjid.jpg',
        captionEn: 'Imperial Mosque Architecture',
        captionTe: 'జామా మసీదు / బాద్‌షాహీ వాస్తుశిల్పం'
      },
      {
        src: './images/indian_history/mughal_timeline/aurangzeb_bibi_maqbara.jpg',
        captionEn: 'Bibi Ka Maqbara (Aurangabad)',
        captionTe: 'బీబీ కా మక్బరా (ఔరంగాబాద్)'
      }
    ]
  },
  {
    order: 7,
    rulerEn: 'LATER MUGHALS & BAHADUR SHAH II (FORMAL END)',
    rulerTe: '7. మలి మొఘలులు & రెండవ బహదూర్ షా (సామ్రాజ్య ముగింపు)',
    reignEn: '1707 – 1857 CE',
    reignTe: 'క్రీ.శ. 1707 – 1857',
    badgeColor: '#4A0012',
    borderColor: '#D4AF37',
    bgColor: '#FAF3E0',
    portrait: {
      src: './images/indian_history/mughal_timeline/portrait_bahadur_shah_ii.jpg',
      captionEn: 'Bahadur Shah II – Last Mughal Emperor',
      captionTe: 'రెండవ బహదూర్ షా – చివరి మొఘల్ చక్రవర్తి',
      tagEn: 'Last Emperor • Exiled by the British (1857)',
      tagTe: 'చివరి చక్రవర్తి • బ్రిటిష్ వారిచే ప్రవాసం (1857)'
    },
    eventsEn: [
      'Gradual decline after Aurangzeb’s death in 1707 CE and rapid weakening of central imperial authority.',
      'Rise of powerful autonomous regional powers (Maratha Empire, Sikhs, Nawabs of Bengal, Awadh & Hyderabad) alongside British East India Company expansion.',
      'Indian Rebellion of 1857 (First War of Independence): Deposition and exile of the last Mughal Emperor Bahadur Shah II (Bahadur Shah Zafar) by the British, marking the formal end of the Mughal Empire.'
    ],
    eventsTe: [
      'క్రీ.శ. 1707లో ఔరంగజేబు మరణానంతరం కేంద్ర అధికారం బలహీనపడి సామ్రాజ్యం క్రమంగా పతనమైంది.',
      'మరాఠా సామ్రాజ్యం, సిక్కులు, ప్రాంతీయ నవాబులు (బెంగాల్, అవధ్, హైదరాబాద్) స్వతంత్ర శక్తులుగా ఎదగడం మరియు బ్రిటిష్ ఈస్టిండియా కంపెనీ విస్తరణ.',
      '1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం: చివరి మొఘల్ చక్రవర్తి రెండవ బహదూర్ షా (బహదూర్ షా జఫర్)ను బ్రిటిష్ వారు పదవీచ్యుతుడిని చేసి రంగూన్‌కు ప్రవాసం పంపడంతో మొఘల్ సామ్రాజ్యం ముగిసింది.'
    ],
    images: [
      {
        src: './images/indian_history/mughal_timeline/portrait_bahadur_shah_ii.jpg',
        captionEn: 'Bahadur Shah II – Last Emperor (Exiled by the British)',
        captionTe: 'రెండవ బహదూర్ షా – చివరి మొఘల్ చక్రవర్తి'
      },
      {
        src: './images/indian_history/mughal_timeline/rebellion_1857_battle.jpg',
        captionEn: 'Indian Rebellion of 1857 – End of the Mughal Empire',
        captionTe: '1857 తిరుగుబాటు పోరాటం – మొఘల్ సామ్రాజ్య ముగింపు'
      },
      {
        src: './images/indian_history/mughal_timeline/later_mughals_india_map.jpg',
        captionEn: 'Fragmentation & Rise of Regional Powers (1707–1857)',
        captionTe: 'ప్రాంతీయ శక్తుల ఆవిర్భావం & విచ్ఛిన్నత పటం (1707–1857)'
      },
      {
        src: './images/indian_history/mughal_timeline/later_mughals_1857_end.jpg',
        captionEn: '1857 Uprising & Deposition of Bahadur Shah II',
        captionTe: '1857 తిరుగుబాటు & బహదూర్ షా II పదవీచ్యుతి'
      }
    ]
  }
];

export const MUGHAL_REVISION_STRIP = [
  { year: '1526–1530', labelEn: 'First Battle of Panipat & Baburnama', labelTe: 'మొదటి పానిపట్ యుద్ధం & బాబర్ పాలన' },
  { year: '1530–1540', labelEn: 'Humayun’s Early Reign & Exile', labelTe: 'హుమాయూన్ తొలి పాలన & ప్రవాసం' },
  { year: '1540–1555', labelEn: 'Sher Shah Suri (Interregnum)', labelTe: 'షేర్ షా సూరి మధ్యంతర పాలన' },
  { year: '1555–1556', labelEn: 'Humayun Restored & Tomb', labelTe: 'హుమాయూన్ పునరుద్ధరణ' },
  { year: '1556', labelEn: 'Second Battle of Panipat', labelTe: 'రెండవ పానిపట్ యుద్ధం' },
  { year: '1556–1605', labelEn: 'Akbar: Mansabdari, Sulh-i-Kul & Fatehpur Sikri', labelTe: 'అక్బర్: మన్సబ్‌దారీ, సుల్హ్-ఇ-కుల్ & ఫతేపూర్ సిక్రీ' },
  { year: '1605–1627', labelEn: 'Jahangir: Miniature Painting & Itmad-ud-Daulah', labelTe: 'జహంగీర్: చిత్రకళా వికాసం' },
  { year: '1628–1658', labelEn: 'Shah Jahan: Taj Mahal, Red Fort & Peacock Throne', labelTe: 'షాజహాన్: తాజ్ మహల్, ఎర్రకోట & నెమలి సింహాసనం' },
  { year: '1658–1707', labelEn: 'Aurangzeb: Territorial Peak, Jizya & Bibi Ka Maqbara', labelTe: 'ఔరంగజేబు: గరిష్ట విస్తరణ & బీబీ కా మక్బరా' },
  { year: '1707–1857', labelEn: 'Later Mughals & Imperial Decline', labelTe: 'మలి మొఘలులు & సామ్రాజ్య క్షీణత' },
  { year: '1857', labelEn: '1857 Uprising, Deposition of Bahadur Shah II & Formal End', labelTe: '1857 సంగ్రామం, బహదూర్ షా II పదవీచ్యుతి & ముగింపు' }
];

// Detailed Gupta Empire Illustrated Manuscript Data
export interface GuptaEmpireManuscriptData {
  titleEn: string;
  titleTe: string;
  periodEn: string;
  periodTe: string;
  taglineEn: string;
  taglineTe: string;
  founderEn: string;
  founderTe: string;
  capitalEn: string;
  capitalTe: string;
  supremeDeityEn: string;
  supremeDeityTe: string;
  religionEn: string;
  religionTe: string;
  ironPillarEn: string;
  ironPillarTe: string;
  templeArchitecture?: {
    titleEn: string;
    titleTe: string;
    descEn: string;
    descTe: string;
  };
  buddhaArt?: {
    titleEn: string;
    titleTe: string;
    descEn: string;
    descTe: string;
  };
  importantRulers: Array<{
    nameEn: string;
    nameTe: string;
    periodEn: string;
    periodTe: string;
    titleEn: string;
    titleTe: string;
    descEn: string;
    descTe: string;
  }>;
  administration: {
    systemEn: string;
    systemTe: string;
    provincesEn: string;
    provincesTe: string;
  };
  coins: {
    titleEn: string;
    titleTe: string;
    descEn: string;
    descTe: string;
  };
  nalanda: {
    titleEn: string;
    titleTe: string;
    descEn: string;
    descTe: string;
  };
  navaratnas: Array<{
    nameEn: string;
    nameTe: string;
    fieldEn: string;
    fieldTe: string;
    majorWorksEn: string;
    majorWorksTe: string;
  }>;
  goldenAgePoster: {
    posterImage: string;
    emperorPortraitImage: string;
    headerTempleImage: string;
    extentMapImage: string;
    goldCoinsPairImage: string;
    kalidasaTempleImage: string;
    subtitleBannerEn: string;
    subtitleBannerTe: string;
    introductionEn: string[];
    introductionTe: string[];
    extentLocationsEn: string[];
    extentLocationsTe: string[];
    administrationPointsEn: string[];
    administrationPointsTe: string[];
    achievements: Array<{
      id: string;
      iconImage: string;
      titleEn: string;
      titleTe: string;
      descEn: string;
      descTe: string;
    }>;
    cultureAndSocietyEn: string[];
    cultureAndSocietyTe: string[];
    famousCoinsNoteEn: string;
    famousCoinsNoteTe: string;
    declinePointsEn: string[];
    declinePointsTe: string[];
    legacyQuoteEn: string;
    legacyQuoteTe: string;
  };
}

export const GUPTA_EMPIRE_MANUSCRIPT_DETAILS: GuptaEmpireManuscriptData = {
  titleEn: 'The GUPTA EMPIRE (c. 320 – 550 CE)',
  titleTe: 'గుప్త సామ్రాజ్యము (క్రీ.శ. 320 – 550)',
  periodEn: 'c. 320 – 550 CE',
  periodTe: 'క్రీ.శ. 320 – 550',
  taglineEn: 'Golden Age of Ancient India',
  taglineTe: 'ప్రాచీన భారతదేశ స్వర్ణయుగము',
  founderEn: 'Sri Gupta',
  founderTe: 'శ్రీ గుప్తుడు (మహారాజ శ్రీగుప్త)',
  capitalEn: 'Pataliputra (modern Patna, Bihar)',
  capitalTe: 'పాటలీపుత్రము (ప్రస్తుత పాట్నా, బీహార్)',
  supremeDeityEn: 'Lord Vishnu (Emperors bore title "Parama Bhagavata")',
  supremeDeityTe: 'శ్రీమహావిష్ణువు (చక్రవర్తులు "పరమ భాగవత" బిరుదు ధరించారు)',
  religionEn: 'Hinduism (revival of Bhagavata & Shaiva traditions); flourished Buddhism & Jainism peacefully',
  religionTe: 'హిందూ మత పునరుజ్జీవనం (భాగవత & శైవ భక్తి); బౌద్ధ, జైన ధర్మాలకు సమాన రాజపోషణ',
  ironPillarEn: 'Famous Iron Pillar at Mehrauli (Delhi) – 1600+ years of rust-free metallurgical wizardry',
  ironPillarTe: 'మెహ్రౌలీ (ఢిల్లీ) ప్రసిద్ధ ఇనుప స్తంభం – 1600 సంవత్సరాలైనా తుప్పు పట్టని అసమాన ప్రాచీన లోహ సాంకేతిక అద్భుతం',
  templeArchitecture: {
    titleEn: 'Classical Hindu Temple Architecture',
    titleTe: 'శాస్త్రీయ హిందూ దేవాలయ శిల్పకళ (నగర శైలి)',
    descEn: 'Pioneered structural stone and brick temples with sanctum (Garbhagriha), ornate doorframes, and rising Shikhara (e.g. Dashavatara Temple at Deogarh, Bhitargaon brick temple).',
    descTe: 'గర్భగృహం, శిల్పకళా తోరణాలు, శిఖర నిర్మాణాలతో కూడిన రాతి మరియు ఇటుక ఆలయాలకు పునాది (ఉదా: దేవ్‌గఢ్ దశావతార ఆలయం, కాన్పూర్ భితర్‌గావ్ ఇటుక దేవాలయం).'
  },
  buddhaArt: {
    titleEn: 'Lord Buddha & Flourishing Traditions',
    titleTe: 'భగవాన్ గౌతమ బుద్ధుడు & అహింసా ధర్మాలు',
    descEn: 'Serene classical Buddhist masterpieces (Sarnath Buddha in Dharmachakra Mudra, Ajanta murals) flourished alongside Hindu traditions with royal harmony.',
    descTe: 'సారనాథ్ ధర్మచక్ర ప్రవర్తన బుద్ధ విగ్రహం మరియు అజంతా గుహా కుడ్యచిత్రాలు (గుహలు 16, 17, 19) వంటి మహోన్నత కళాఖండాలు రాజపోషణలో విలసిల్లాయి.'
  },
  importantRulers: [
    {
      nameEn: 'Chandragupta I',
      nameTe: 'మొదటి చంద్రగుప్తుడు',
      periodEn: '319 – 335 CE',
      periodTe: 'క్రీ.శ. 319 – 335',
      titleEn: 'Maharajadhiraja (King of Kings)',
      titleTe: 'మహారాజాధిరాజ (రాజులకు మహారాజు)',
      descEn: 'Started the Gupta Era (319-320 CE), married Licchavi princess Kumaradevi, issuing prestigious commemorative gold coins.',
      descTe: 'గుప్త శకం (క్రీ.శ. 319-320) స్థాపకుడు; లిచ్ఛవి యువరాణి కుమారదేవిని వివాహం చేసుకుని సంయుక్త స్వర్ణ నాణేలను ముద్రించాడు.'
    },
    {
      nameEn: 'Samudragupta',
      nameTe: 'సముద్రగుప్తుడు',
      periodEn: '335 – 380 CE',
      periodTe: 'క్రీ.శ. 335 – 380',
      titleEn: 'Napoleon of India (by V.A. Smith)',
      titleTe: 'ఇండియన్ నెపోలియన్ (విన్సెంట్ స్మిత్ చే ప్రశంస)',
      descEn: 'Undefeated conqueror praised in the Prayag Prashasti (Allahabad Pillar) by court poet Harishena; performed Ashvamedha, master lyre player.',
      descTe: 'అపజయమెరుగని అద్భుత దిగ్విజయ చక్రవర్తి; అలహాబాద్ ప్రయాగ ప్రశస్తిలో హరిషేణునిచే కీర్తింపబడ్డాడు; అశ్వమేధ యాగం నిర్వహించాడు, వీణానాద ప్రవీణుడు.'
    },
    {
      nameEn: 'Chandragupta II',
      nameTe: 'రెండవ చంద్రగుప్తుడు',
      periodEn: '375 – 415 CE',
      periodTe: 'క్రీ.శ. 375 – 415',
      titleEn: 'Vikramaditya (Sun of Valour)',
      titleTe: 'విక్రమాదిత్యుడు (సాహసాంక)',
      descEn: 'Reached the empire’s greatest extent; defeated the Western Sakas, annexed Arabian Sea ports, made Ujjain cultural capital, and patronized the Nine Gems (Navaratnas).',
      descTe: 'సామ్రాజ్యాన్ని గరిష్ట స్థాయికి విస్తరించాడు; శక క్షత్రపులను ఓడించి గుజరాత్ ఓడరేవులను చేజిక్కించుకున్నాడు; ఉజ్జయినిని సాంస్కృతిక రాజధానిగా చేసి నవరత్న సభను పోషించాడు.'
    },
    {
      nameEn: 'Kumaragupta I',
      nameTe: 'మొదటి కుమారగుప్తుడు',
      periodEn: '415 – 455 CE',
      periodTe: 'క్రీ.శ. 415 – 455',
      titleEn: 'Mahendraditya (Founder of Nalanda)',
      titleTe: 'మహేంద్రాదిత్యుడు (నలందా విశ్వవిద్యాలయ స్థాపకుడు)',
      descEn: 'Continued the peace and golden prosperity for 40 years; founded the world-famous Nalanda University in Bihar and issued Kartikeya/peacock gold coins.',
      descTe: '40 ఏళ్ల పాటు అఖండ శాంతి సౌభాగ్యాలను కొనసాగించాడు; జగత్ప్రసిద్ధ నలందా మహా విశ్వవిద్యాలయాన్ని స్థాపించాడు మరియు నెమలి వాహన కార్తికేయ బంగారు నాణేలను ముద్రించాడు.'
    },
    {
      nameEn: 'Skandagupta',
      nameTe: 'స్కందగుప్తుడు',
      periodEn: '455 – 467 CE',
      periodTe: 'క్రీ.శ. 455 – 467',
      titleEn: 'Kramaditya (Saviour of Bharat from Hunas)',
      titleTe: 'క్రమాదిత్యుడు (హూణుల దండయాత్రల నుండి రక్షకుడు)',
      descEn: 'Heroically defended the empire from fierce foreign invasions by the Central Asian Hunas (Huns) and restored the historic Sudarshana Lake dam in Saurashtra.',
      descTe: 'మధ్య ఆసియా నుండి దండెత్తిన భయంకర హూణుల (Huns) దాడులను వీరోచితంగా తిప్పికొట్టి భారతదేశాన్ని రక్షించాడు; సౌరాష్ట్రలోని సుదర్శన తటాకాన్ని పునర్నిర్మించాడు.'
    }
  ],
  administration: {
    systemEn: 'Centralized Administration governed by the Emperor and royal council (Mantriparishad)',
    systemTe: 'చక్రవర్తి మరియు మంత్రుల పరిషత్తు నియంత్రణలో సమర్థవంతమైన కేంద్రీకృత పాలన',
    provincesEn: 'Empire divided into provinces called "Bhuktis" governed by royal officials called "Uparikas"',
    provincesTe: 'సామ్రాజ్యం "భుక్తులు" (Bhuktis) అనబడే రాష్ట్రాలుగా విభజించబడింది; వాటిని "ఉపరికులు" (Uparikas) పాలించారు'
  },
  coins: {
    titleEn: 'Gupta Gold Coins (Dinaras)',
    titleTe: 'గుప్త స్వర్ణ నాణేలు (దీనారాలు)',
    descEn: 'Exquisite, high-purity gold dinars depicting emperors performing horse sacrifices, playing the veena, hunting lions, and bearing goddess Lakshmi.',
    descTe: 'అత్యున్నత స్వచ్ఛమైన బంగారు దీనారాలు; రాజు వీణ వాయిస్తున్నట్లు, అశ్వమేధ యాగం, సింహాలను వేటాడుతున్నట్లు, మరియు లక్ష్మీదేవి చిత్రాలతో కళాత్మకంగా ముద్రించబడ్డాయి.'
  },
  nalanda: {
    titleEn: 'Nalanda University – Famous Centre of Learning',
    titleTe: 'నలందా విశ్వవిద్యాలయము – జగత్ప్రసిద్ధ విద్యాపీఠం',
    descEn: 'Founded by Gupta Emperor Kumaragupta I (Mahendraditya) in 5th century CE. Attracted thousands of international scholars in philosophy, astronomy, medicine, and mathematics.',
    descTe: '5వ శతాబ్దంలో గుప్త చక్రవర్తి కుమారగుప్తుడు (మహేంద్రాదిత్య) స్థాపించాడు. ఖగోళం, తత్త్వశాస్త్రం, వైద్యం, గణితాలలో వేలాది మంది ప్రపంచ విద్యార్థులకు ఉచిత వసతితో కూడిన అంతర్జాతీయ జ్ఞాన కేంద్రం.'
  },
  navaratnas: [
    {
      nameEn: 'Kalidasa',
      nameTe: 'మహాకవి కాళిదాసు',
      fieldEn: 'Classical Sanskrit Poetry & Drama',
      fieldTe: 'సంస్కృత మహాకావ్యాలు & నాటక కళ',
      majorWorksEn: 'Abhijnanasakuntalam, Meghaduta, Raghuvamsha, Kumarasambhava',
      majorWorksTe: 'అభిజ్ఞాన శాకుంతలము, మేఘదూతము, రఘువంశము, కుమారసంభవము'
    },
    {
      nameEn: 'Aryabhata',
      nameTe: 'ఆర్యభట్ట (ఖగోళ-గణిత మేధావి)',
      fieldEn: 'Mathematics & Astronomy',
      fieldTe: 'గణిత శాస్త్రం & ఖగోళ విజ్ఞానం',
      majorWorksEn: 'Aryabhatiya – Invented zero, decimal place value, Pi = 3.1416, Earth rotation on axis',
      majorWorksTe: 'ఆర్యభట్టీయం – సున్నా, దశాంశ పద్ధతి, పై (π) ఖచ్చిత విలువ, భూమి తన అక్షంపై తాను తిరుగుతుందని నిరూపణ'
    },
    {
      nameEn: 'Varahamihira',
      nameTe: 'వరాహమిహిరుడు',
      fieldEn: 'Astronomy, Astrology & Natural Sciences',
      fieldTe: 'ఖగోళ శాస్త్రం, జ్యోతిషం & భౌతిక విజ్ఞానం',
      majorWorksEn: 'Brihat Samhita, Panchasiddhantika (astronomical treatises)',
      majorWorksTe: 'బృహత్సంహిత, పంచసిద్ధాంతిక (సూర్య, రోమక, పౌలిశ సిద్ధాంతాల విశ్లేషణ)'
    },
    {
      nameEn: 'Amarasimha',
      nameTe: 'అమరసింహుడు',
      fieldEn: 'Lexicography & Sanskrit Linguistics',
      fieldTe: 'సంస్కృత నిఘంటువు & భాషాశాస్త్రం',
      majorWorksEn: 'Amarakosha (Namalinganushasana – premier Sanskrit thesaurus)',
      majorWorksTe: 'అమరకోశము (నామలింగానుశాసనము – అత్యంత ప్రసిద్ధ సంస్కృత నిఘంటువు)'
    },
    {
      nameEn: 'Dhanvantari',
      nameTe: 'ధన్వంతరి',
      fieldEn: 'Ayurvedic Medicine & Surgery',
      fieldTe: 'ఆయుర్వేద వైద్య శాస్త్రము',
      majorWorksEn: 'Pioneered advanced therapeutic Ayurveda and herbal remedies',
      majorWorksTe: 'దివ్య ఔషధ విజ్ఞానం, ఆయుర్వేద చికిత్సా పద్ధతుల పునరుద్ధరణ'
    },
    {
      nameEn: 'Shanku, Kshapanaka, Vetalabhatta, Ghatakarpara, Vararuchi',
      nameTe: 'శంకు, క్షపణక, బేతాళభట్టు, ఘటకర్పర, వరరుచి',
      fieldEn: 'Architecture, Grammar, Occult sciences & Poetry',
      fieldTe: 'వాస్తు శిల్పం, వ్యాకరణం, కవిత్వం',
      majorWorksEn: 'Prakrit Prakasha (Vararuchi), Shilpa Shastra, court poetry',
      majorWorksTe: 'ప్రాకృత ప్రకాశ (వరరుచి), శిల్ప వాస్తు రచనలు, నీతి సూక్తులు'
    }
  ],
  goldenAgePoster: {
    posterImage: './images/indian_history/gupta_golden_age_poster.jpg',
    emperorPortraitImage: './images/indian_history/gupta_golden_age/gupta_emperor_portrait.jpg',
    headerTempleImage: './images/indian_history/gupta_golden_age/gupta_header_temple.jpg',
    extentMapImage: './images/indian_history/gupta_golden_age/gupta_empire_map.jpg',
    goldCoinsPairImage: './images/indian_history/gupta_golden_age/gupta_gold_coins_pair.jpg',
    kalidasaTempleImage: './images/indian_history/gupta_golden_age/gupta_kalidasa_temple.jpg',
    subtitleBannerEn: 'Prosperity • Culture • Science • Legacy',
    subtitleBannerTe: 'సౌభాగ్యం • సంస్కృతి • విజ్ఞానశాస్త్రం • శాశ్వత వారసత్వం',
    introductionEn: [
      'The Gupta Empire was one of the most important and powerful empires in Indian history.',
      'It lasted from about 320 CE to 550 CE.',
      'It is often called the “Golden Age of India” due to its achievements in art, literature, science, and culture.'
    ],
    introductionTe: [
      'భారతదేశ చరిత్రలో అత్యంత శక్తివంతమైన, మహోన్నత సామ్రాజ్యాలలో గుప్త సామ్రాజ్యం ఒకటి.',
      'ఇది సుమారు క్రీ.శ. 320 నుండి క్రీ.శ. 550 వరకు వర్ధిల్లింది.',
      'కళలు, సాహిత్యం, విజ్ఞాన శాస్త్రం, గణితం మరియు సంస్కృతి రంగాలలో సాధించిన అద్భుత ప్రగతి కారణంగా ఈ కాలాన్ని "భారతదేశ స్వర్ణయుగం" (Golden Age of India) అని పిలుస్తారు.'
    ],
    extentLocationsEn: ['Pataliputra (Imperial Capital)', 'Magadha (Core Heartland)', 'Ujjain (Cultural & Trade Capital)', 'Punjab & Indus-Gangetic Plains', 'Coast to Coast: Arabian Sea to Bay of Bengal'],
    extentLocationsTe: ['పాటలీపుత్రం (సామ్రాజ్య రాజధాని)', 'మగధ (మూల కేంద్రం)', 'ఉజ్జయిని (సాంస్కృతిక & వాణిజ్య రాజధాని)', 'పంజాబ్ & గంగా-సింధు మైదానాలు', 'అరేబియా సముద్రం నుండి బంగాళాఖాతం వరకు విస్తరణ'],
    administrationPointsEn: [
      'The empire was well-organized with a central government.',
      'The king was the supreme authority.',
      'Provinces were ruled by viceroys, and the empire was divided into smaller administrative units (Bhuktis and Vishayas).',
      'A system of officials and a strong army helped maintain peace and stability.'
    ],
    administrationPointsTe: [
      'పటిష్టమైన కేంద్ర ప్రభుత్వంతో సామ్రాజ్యం ఎంతో క్రమబద్ధంగా నిర్వహించబడింది.',
      'రాజు (చక్రవర్తి) సర్వాధికారిగా, ధర్మ రక్షకుడిగా వ్యవహరించేవాడు.',
      'రాష్ట్రాలు (భుక్తులు) రాజప్రతినిధుల (ఉపరికులు) చేత పాలించబడ్డాయి; సామ్రాజ్యం చిన్న పాలనా విభాగాలుగా (విషయాలు, గ్రామాలు) విభజించబడింది.',
      'సమర్థులైన అధికారుల వ్యవస్థ మరియు శక్తివంతమైన సైన్యం దేశంలో శాంతి, స్థిరత్వాలను కాపాడాయి.'
    ],
    achievements: [
      {
        id: 'economy',
        iconImage: './images/indian_history/gupta_golden_age/ach_1_economy.jpg',
        titleEn: 'Economy',
        titleTe: 'ఆర్థిక వ్యవస్థ (Economy)',
        descEn: 'Agriculture, internal & maritime trade, and gold coins (Gupta Dinaras) flourished.',
        descTe: 'వ్యవసాయం, దేశ-విదేశీ వాణిజ్యం మరియు బంగారు నాణేల (గుప్త దీనారాలు) చలామణితో ఆర్థిక రంగం ఉచ్ఛస్థితికి చేరింది.'
      },
      {
        id: 'science_math',
        iconImage: './images/indian_history/gupta_golden_age/ach_2_science.jpg',
        titleEn: 'Science & Mathematics',
        titleTe: 'విజ్ఞానం & గణిత శాస్త్రం (Science & Mathematics)',
        descEn: 'Aryabhata (zero, decimal system, Pi, solar eclipses), Varahamihira (astronomy, Brihat Samhita).',
        descTe: 'ఆర్యభట్టు (సున్నా, దశాంశ పద్ధతి, భూభ్రమణం), వరాహమిహిరుడు (ఖగోళ శాస్త్రం, బృహత్సంహిత) ప్రపంచ విజ్ఞానాన్ని సుసంపన్నం చేశారు.'
      },
      {
        id: 'literature',
        iconImage: './images/indian_history/gupta_golden_age/ach_3_literature.jpg',
        titleEn: 'Literature',
        titleTe: 'సాహిత్యం (Literature)',
        descEn: 'Kalidasa (Abhijnana Shakuntalam, Meghaduta, Raghuvamsha), Vishakhadatta (Mudrarakshasa), Panchatantra.',
        descTe: 'మహాకవి కాళిదాసు (శాకుంతలం, మేఘదూతం, రఘువంశం), విశాఖదత్తుడు (ముద్రారాక్షసం), విష్ణుశర్మ (పంచతంత్రం) వంటి అజరామర రచనలు వెలువడ్డాయి.'
      },
      {
        id: 'art_architecture',
        iconImage: './images/indian_history/gupta_golden_age/ach_4_art.jpg',
        titleEn: 'Art & Architecture',
        titleTe: 'కళలు & వాస్తుశిల్పం (Art & Architecture)',
        descEn: 'Magnificent stone & brick temples (Deogarh, Bhitargaon), Sarnath sculptures, and Ajanta cave frescoes.',
        descTe: 'అద్భుతమైన రాతి మరియు ఇటుక దేవాలయాలు (దేవ్‌గఢ్ దశావతార ఆలయం), సారనాథ్ శిల్పాలు మరియు అజంతా చిత్రలేఖనాలు.'
      },
      {
        id: 'education',
        iconImage: './images/indian_history/gupta_golden_age/ach_5_education.jpg',
        titleEn: 'Education',
        titleTe: 'విద్యా రంగం (Education)',
        descEn: 'Nalanda University founded under Gupta patronage became the premier global centre of higher learning.',
        descTe: 'గుప్తుల ఆదరణలో స్థాపించబడిన నలందా విశ్వవిద్యాలయం ప్రపంచంలోనే అత్యున్నత విద్యా కేంద్రంగా విలసిల్లింది.'
      }
    ],
    cultureAndSocietyEn: [
      'Sanskrit became the main language of literature, royal inscriptions, and higher learning.',
      'Hinduism was widely practiced and patronized, while Buddhism and Jainism also flourished in harmony.',
      'Art, painting, sculpture, and Nagara temple architecture reached new classical heights.',
      'The period saw remarkable progress in classical music, dance, drama, and fine arts.'
    ],
    cultureAndSocietyTe: [
      'సంస్కృత భాష సాహిత్యానికి, రాజ శాసనాలకు మరియు ఉన్నత విద్యకు ప్రధాన భాషగా మారింది.',
      'హిందూ ధర్మం విస్తృతంగా ఆచరించబడింది; అదే సమయంలో బౌద్ధ, జైన మతాలు కూడా పూర్తి సామరస్యంతో వర్ధిల్లాయి.',
      'చిత్రలేఖనం (అజంతా), శిల్పకళ మరియు దేవాలయ నిర్మాణ శైలి అత్యున్నత శిఖరాలకు చేరుకున్నాయి.',
      'శాస్త్రీయ సంగీతం, నాట్యం, నాటక కళలలో అపూర్వ పురోగతి కనిపించింది.'
    ],
    famousCoinsNoteEn: 'Gupta coins were made of gold, silver and copper, and were of exceptionally high artistic and metallic quality.',
    famousCoinsNoteTe: 'గుప్తుల నాణేలు బంగారం, వెండి మరియు రాగితో తయారు చేయబడ్డాయి; ఇవి అత్యున్నత నాణ్యతకు, కళా నైపుణ్యానికి నిదర్శనాలు.',
    declinePointsEn: [
      'After the death of Emperor Skandagupta (467 CE), the central authority gradually became weak.',
      'Internal succession conflicts, economic strain, and repeated foreign invasions by the Huns (Hunas) led to its decline.',
      'By 550 CE, the Gupta Empire had lost its imperial power and fragmented into regional kingdoms.'
    ],
    declinePointsTe: [
      'స్కందగుప్తుని మరణానంతరం (క్రీ.శ. 467) కేంద్ర అధికారం క్రమంగా బలహీనపడింది.',
      'అంతర్గత వారసత్వ కలహాలు, ఆర్థిక సమస్యలు మరియు విదేశీ హూణుల (Huns) నిరంతర దండయాత్రల వల్ల సామ్రాజ్యం క్షీణించింది.',
      'క్రీ.శ. 550 నాటికి గుప్త సామ్రాజ్యం తన ఆధిపత్యాన్ని కోల్పోయింది.'
    ],
    legacyQuoteEn: 'The Gupta Empire may have ended, but its legacy continues to inspire India even today.',
    legacyQuoteTe: 'గుప్త సామ్రాజ్యం అంతరించి ఉండవచ్చు, కానీ దాని మహోన్నత వారసత్వం నేటికీ భారతదేశానికి స్ఫూర్తినిస్తూనే ఉంది.'
  }
};

// Master Infographic Gallery Cards
export const INDIAN_HISTORY_GALLERY_IMAGES = [
  {
    id: 'indian_history_5000_years_poster',
    titleEn: 'Indian History: 5,000 Years of Civilization, Power & Change',
    titleTe: 'భారతీయ చరిత్ర: 5,000 సంవత్సరాల నాగరికత, సామ్రాజ్యాలు & పరివర్తన',
    subtitleEn: 'The Grand Timeline (11 Epochs), The Land & Its Diversity, The Soul of India, The Road to Independence (1757-1947), Freedom Fighters',
    subtitleTe: 'మహా కాలక్రమం (11 యుగాలు), భారత భూభాగ వైవిధ్యం, భారతీయ ఆత్మ & సంస్కృతి, స్వాతంత్ర్య ప్రస్థానం (1757-1947), సమరయోధులు',
    src: './images/indian_history/indian_history_5000_years_poster.jpg'
  },
  {
    id: 'gupta_manuscript',
    titleEn: 'The GUPTA EMPIRE (c. 320 – 550 CE) Illustrated Manuscript',
    titleTe: 'గుప్త సామ్రాజ్యము (క్రీ.శ. 320 – 550) భారత స్వర్ణయుగ సచిత్ర పత్రం',
    subtitleEn: 'Golden Age of Ancient India: Sri Gupta, Samudragupta, Vikramaditya, Navaratnas, Nalanda, Mehrauli Iron Pillar',
    subtitleTe: 'శ్రీగుప్తుడు, సముద్రగుప్తుడు, విక్రమాదిత్యుడు, నవరత్నాలు (కాళిదాసు, ఆర్యభట్ట), నలందా, మెహ్రౌలీ ఇనుప స్తంభం',
    src: './images/indian_history/gupta_empire_manuscript.jpg'
  },
  {
    id: 'medieval_timeline',
    titleEn: 'The Timeline of Medieval India (6th – 16th Century)',
    titleTe: 'మధ్యయుగ భారతదేశ చరిత్ర కాలక్రమ పట్టిక (6వ – 16వ శతాబ్దము)',
    subtitleEn: 'Fall of Guptas, Arab Invasion, Cholas, Ghazni, Tarain, Delhi Sultanate, Vijayanagara, Bahmani, Panipat, Talikota',
    subtitleTe: 'గుప్తుల పతనం, అరబ్బుల దాడి, చోళులు, గజనీ, తరైన్, ఢిల్లీ సల్తనత్, విజయనగరం, బహమనీ, పానిపట్, తళ్ళికోట',
    src: './images/indian_history/medieval_india_timeline.jpg'
  },
  {
    id: 'mahajanapadas_map',
    titleEn: '16 Ancient Mahajanapadas & Capitals Historical Map',
    titleTe: '16 ప్రాచీన మహాజనపదాలు & వాటి రాజధానుల చారిత్రక పటం',
    subtitleEn: 'Gandhara, Kamboja, Kuru, Panchala, Kosala, Magadha, Avanti, Matsya, Vatsa, Assaka, etc.',
    subtitleTe: 'గాంధార, కాంబోజ, కురు, పాంచాల, కోసల, మగధ, అవంతి, మత్స్య, వత్స, అశ్మక మొదలైన 16 మహాజనపదాల భౌగోళిక సరిహద్దులు',
    src: './images/indian_history/mahajanapadas_map.jpg'
  },
  {
    id: 'flowchart',
    titleEn: 'Comprehensive Chronological Flowchart of Indian History',
    titleTe: 'భారతీయ చరిత్ర సమగ్ర కాలానుక్రమణిక చార్ట్',
    subtitleEn: 'Pre-History → Stone Age & Chalcolithic → IVC → Vedic → Mahajanapadas → Magadha → Maurya → Gupta → Harsha & South',
    subtitleTe: 'చరిత్రపూర్వ యుగం → రాతి & తామ్ర యుగం → సింధు → వేద → మహాజనపదాలు → మగధ → మౌర్య → గుప్త → హర్ష & దక్షిణ రాజ్యాలు',
    src: './images/indian_history/ancient_india_flowchart.jpg'
  },
  {
    id: 'vedic_overview',
    titleEn: 'Vedic Period: The Foundation of Indian Civilization',
    titleTe: 'వేద కాలము: భారతీయ సంస్కృతికి మూల పునాది (1500–600 BCE)',
    subtitleEn: 'Sources, Society, Economy, Religion, Literature, Features & Eternal Legacy',
    subtitleTe: 'మూలాలు, సమాజం, ఆర్థిక రంగం, మతం, వేద వాఙ్మయం, ముఖ్యాంశాలు మరియు వారసత్వం',
    src: './images/indian_history/vedic_period_overview.jpg'
  },
  {
    id: 'later_vedic',
    titleEn: 'Later Vedic Age (c. 1000 BCE – 600 BCE)',
    titleTe: 'మలి వేద యుగము (క్రీ.పూ. 1000 – 600)',
    subtitleEn: 'From Rituals to Society, From Tribes to Kingdoms – Settled Ganga-Yamuna Life',
    subtitleTe: 'కర్మల నుండి సమాజం వరకు, తెగల నుండి రాజ్యాల వరకు – గంగా-యమునా మైదాన స్థిర జీవనం',
    src: './images/indian_history/later_vedic_age.jpg'
  },
  {
    id: 'empires_timeline',
    titleEn: 'Ancient India: Civilizations & Empires Timeline',
    titleTe: 'ప్రాచీన భారతదేశం: నాగరికతలు & సామ్రాజ్యాల కాలమాన పట్టిక',
    subtitleEn: '3300 BCE to 647 CE: Indus Valley, Vedic, Mahajanapadas, Maurya, Gupta, Harsha',
    subtitleTe: 'క్రీ.పూ. 3300 నుండి క్రీ.శ. 647 వరకు: సింధు, వేద, మహాజనపదాలు, మౌర్య, గుప్త, హర్ష సామ్రాజ్యాలు',
    src: './images/indian_history/civilizations_and_empires.jpg'
  },
  {
    id: 'vijayanagara_empire_full',
    titleEn: 'The Vijayanagara Empire: Rise, Culture & Decline (c. 1336 – 1565 CE)',
    titleTe: 'విజయనగర సామ్రాజ్యము: ఆవిర్భావం, సంస్కృతి & క్షీణత (క్రీ.శ. 1336 – 1565)',
    subtitleEn: 'A Glorious Kingdom of South India – Centre of Power, Culture, Art and Trade',
    subtitleTe: 'దక్షిణ భారతదేశపు మహోన్నత హిందూ సామ్రాజ్యం – అధికారం, సంస్కృతి, దేవాలయాలు, సాహిత్యం & వాణిజ్యం',
    src: './images/indian_history/vijayanagara_empire_infographic.jpg'
  },
  {
    id: 'early_human_migration_map',
    titleEn: 'Early Human Migration Map (~200,000 – 15,000 Years Ago)',
    titleTe: 'ఆదిమ మానవ వలసల ప్రపంచ పటము (2,00,000 – 15,000 సం॥ క్రితం)',
    subtitleEn: 'Global migration routes from Africa across Middle East, Europe, Asia, Australia & the Americas via Bering Land Bridge',
    subtitleTe: 'ఆఫ్రికా నుండి మధ్యప్రాచ్యం, యూరప్, ఆసియా (భారత్), ఆస్ట్రేలియా మరియు బెరింగ్ భూ వంతెన మీదుగా అమెరికా ఖండాలకు మానవ వలస మార్గాలు',
    src: './images/indian_history/early_human_migration_map.jpg'
  }
];

// -------------------------------------------------------------
// VIJAYANAGARA EMPIRE INFOGRAPHIC DATASET (FOR INTERACTIVE POPUP)
// -------------------------------------------------------------
export interface VijayanagaraEmpireDetails {
  titleEn: string;
  titleTe: string;
  periodEn: string;
  periodTe: string;
  taglineEn: string;
  taglineTe: string;
  foundersEn: string;
  foundersTe: string;
  capitalEn: string;
  capitalTe: string;
  riverEn: string;
  riverTe: string;
  bannerImage: string;
  hampiCapitalImage: string;
  territoryMapImage: string;
  stoneChariotImage: string;
  originAndRise: {
    titleEn: string;
    titleTe: string;
    pointsEn: string[];
    pointsTe: string[];
  };
  importantRulers: Array<{
    nameEn: string;
    nameTe: string;
    reignEn: string;
    reignTe: string;
    achievementEn: string;
    achievementTe: string;
    image: string;
  }>;
  administration: {
    titleEn: string;
    titleTe: string;
    pointsEn: string[];
    pointsTe: string[];
    image: string;
  };
  economyAndTrade: {
    titleEn: string;
    titleTe: string;
    pointsEn: string[];
    pointsTe: string[];
    image: string;
    tradeGoods: Array<{ nameEn: string; nameTe: string; icon: string }>;
  };
  artAndArchitecture: {
    titleEn: string;
    titleTe: string;
    pointsEn: string[];
    pointsTe: string[];
    famousMonumentsEn: string[];
    famousMonumentsTe: string[];
    image: string;
  };
  literatureAndLearning: {
    titleEn: string;
    titleTe: string;
    pointsEn: string[];
    pointsTe: string[];
    image: string;
    ashtadiggajasEn: string[];
    ashtadiggajasTe: string[];
  };
  foreignAccounts: {
    titleEn: string;
    titleTe: string;
    travellersEn: string[];
    travellersTe: string[];
    highlightsEn: string[];
    highlightsTe: string[];
    image: string;
  };
  decline: {
    titleEn: string;
    titleTe: string;
    battleEn: string;
    battleTe: string;
    pointsEn: string[];
    pointsTe: string[];
    image: string;
  };
  legacyQuoteEn: string;
  legacyQuoteTe: string;
}

export const VIJAYANAGARA_EMPIRE_DETAILS: VijayanagaraEmpireDetails = {
  titleEn: 'The VIJAYANAGARA EMPIRE (c. 1336 – 1565 CE)',
  titleTe: 'విజయనగర సామ్రాజ్యము (క్రీ.శ. 1336 – 1565)',
  periodEn: 'c. 1336 CE – 1565 CE (Rise, Culture & Decline)',
  periodTe: 'క్రీ.శ. 1336 – 1565 (ఆవిర్భావం, సంస్కృతి & క్షీణత)',
  taglineEn: 'A Glorious Kingdom of South India – Centre of Power, Culture, Art and Trade',
  taglineTe: 'దక్షిణ భారతదేశపు మహోన్నత హిందూ సామ్రాజ్యం – అధికారం, సంస్కృతి, కళలు మరియు అంతర్జాతీయ వాణిజ్య కేంద్రం',
  foundersEn: 'Harihara I & Bukka Raya I (Sangama Dynasty, guided by Sage Vidyaranya)',
  foundersTe: 'హరిహర రాయలు & బుక్క రాయలు (సంగమ వంశం, శ్రీ శృంగేరీ పీఠాధిపతి విద్యారణ్య స్వామి మార్గదర్శకత్వం)',
  capitalEn: 'Vijayanagara (Hampi), Bellary District, Karnataka',
  capitalTe: 'విజయనగరము (హంపి), బళ్ళారి జిల్లా, కర్ణాటక',
  riverEn: 'Tungabhadra River',
  riverTe: 'తుంగభద్ర నది',
  bannerImage: './images/indian_history/vijayanagara_portraits/vj_krishnadevaraya_top.jpg',
  hampiCapitalImage: './images/indian_history/vijayanagara_portraits/vj_hampi_capital.jpg',
  territoryMapImage: './images/indian_history/vijayanagara_portraits/vj_territory_map.jpg',
  stoneChariotImage: './images/indian_history/vijayanagara_portraits/vj_stone_chariot_vitthala.jpg',
  originAndRise: {
    titleEn: 'Origin and Rise',
    titleTe: 'ఆవిర్భావం & రాజ్య స్థాపన',
    pointsEn: [
      'Founded in 1336 CE by brothers Harihara I and Bukka Raya I of the Sangama dynasty.',
      'Established in the wake of the decline and destabilization caused by the Delhi Sultanate in South India.',
      'Divinely mentored and sanctified by Sage Vidyaranya, the revered head of Sringeri Sharada Peetham.',
      'Solemnly dedicated to safeguarding Sanatana Dharma, Hindu culture, languages, and traditional polity.',
      'Magnificent capital established at Vijayanagara ("City of Victory", modern Hampi) on the rocky banks of the Tungabhadra River.'
    ],
    pointsTe: [
      'క్రీ.శ. 1336లో సంగమ వంశానికి చెందిన సోదరులు మొదటి హరిహర రాయలు మరియు బుక్క రాయలు స్థాపించారు.',
      'దక్షిణ భారతదేశంలో ఢిల్లీ సల్తనత్ దండయాత్రల వల్ల ఏర్పడిన అనిశ్చితి, అరాచకాల తర్వాత వెలసింది.',
      'శృంగేరీ శారదా పీఠాధిపతి, జగద్గురు విద్యారణ్య స్వామి ఆశీస్సులు మరియు మార్గదర్శకత్వంలో రూపుదిద్దుకుంది.',
      'దక్షిణాదిన సనాతన ధర్మం, వేద సంస్కృతి, దేవాలయాలు మరియు భారతీయ జీవన విధానాన్ని రక్షించడమే ప్రధాన లక్ష్యం.',
      'తుంగభద్ర నదీ తీరాన సహజ రాతి కొండల మధ్య "హంపి" (విజయనగరం - విజయనగరి)ని రాజధానిగా నిర్మించారు.'
    ]
  },
  importantRulers: [
    {
      nameEn: 'Harihara I',
      nameTe: 'మొదటి హరిహర రాయలు',
      reignEn: '1336 – 1356 CE',
      reignTe: 'క్రీ.శ. 1336 – 1356',
      achievementEn: 'Co-founder of the empire; laid the initial territorial foundations.',
      achievementTe: 'సామ్రాజ్య సహ-వ్యవస్థాపకుడు; తొలి సరిహద్దులను సురక్షితం చేశాడు.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_harihara_1.jpg?v=2'
    },
    {
      nameEn: 'Bukka Raya I',
      nameTe: 'మొదటి బుక్క రాయలు',
      reignEn: '1356 – 1377 CE',
      reignTe: 'క్రీ.శ. 1356 – 1377',
      achievementEn: 'Consolidated the kingdom; patronized Sayana for writing commentaries on all Four Vedas.',
      achievementTe: 'రాజ్యాన్ని సుస్థిరం చేశాడు; సాయణాచార్యుల చేత చతుర్వేదాలకు భాష్యం రచింపజేశాడు.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_bukka_1.jpg?v=2'
    },
    {
      nameEn: 'Deva Raya I',
      nameTe: 'మొదటి దేవరాయలు',
      reignEn: '1406 – 1422 CE',
      reignTe: 'క్రీ.శ. 1406 – 1422',
      achievementEn: 'Expanded the empire; engineered massive barrages & canals on Tungabhadra for city water.',
      achievementTe: 'రాజ్యాన్ని విస్తరించాడు; తుంగభద్ర నదిపై ఆనకట్టలు కట్టి హంపికి తాగునీరు తెచ్చాడు.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_deva_raya_1.jpg?v=2'
    },
    {
      nameEn: 'Deva Raya II (Proudha Deva Raya)',
      nameTe: 'రెండవ దేవరాయలు (ప్రౌఢ దేవరాయలు)',
      reignEn: '1424 – 1446 CE',
      reignTe: 'క్రీ.శ. 1424 – 1446',
      achievementEn: 'Strengthened military; recruited skilled archers & cavalry; expanded rule across South India & Sri Lanka.',
      achievementTe: 'సైన్యాన్ని ఆధునీకరించాడు; విలుకాండ్రు, అశ్వదళాన్ని బలోపేతం చేసి శ్రీలంక వరకు కప్పం వసూలు చేశాడు.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_deva_raya_2.jpg?v=2'
    },
    {
      nameEn: 'Sri Krishnadeva Raya',
      nameTe: 'శ్రీకృష్ణదేవరాయలు',
      reignEn: '1509 – 1529 CE',
      reignTe: 'క్రీ.శ. 1509 – 1529',
      achievementEn: 'The greatest emperor; golden zenith of military victory, arts, Telugu literature & architectural splendors.',
      achievementTe: 'విజయనగర సామ్రాజ్య చక్రవర్తులలో అగ్రగణ్యుడు; సాహితీ సమరాంగణ సార్వభౌముడు, స్వర్ణయుగ నిర్మాత.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_krishnadeva_raya.jpg?v=2'
    },
    {
      nameEn: 'Achyuta Raya',
      nameTe: 'అచ్యుత దేవరాయలు',
      reignEn: '1529 – 1542 CE',
      reignTe: 'క్రీ.శ. 1529 – 1542',
      achievementEn: 'Maintained imperial stability; patronized grand temple construction and music.',
      achievementTe: 'సామ్రాజ్య స్థిరత్వాన్ని కాపాడాడు; తిరుమల వేంకటేశ్వరుని భక్తుడు, అచ్యుతరాయ ఆలయ నిర్మాత.',
      image: './images/indian_history/vijayanagara_portraits/vj_ruler_achyuta_raya.jpg?v=2'
    }
  ],
  administration: {
    titleEn: 'Administrative System & Royal Governance',
    titleTe: 'పరిపాలనా వ్యవస్థ & రాజ్య విభజన',
    image: './images/indian_history/vijayanagara_portraits/vj_royal_inscription.jpg',
    pointsEn: [
      'Monarchical Form of Governance: The king ruled as supreme commander, advised by a council of high ministers (Mantriparishad).',
      'Territorial Division: Empire divided into provinces (Rajyas/Mandalas), districts (Nadus), and sub-districts (Sthalas).',
      'The Nayankara System: Military commanders (Nayakas/Poligars) were granted land rights (amaram) in exchange for maintaining troops and paying annual tribute.',
      'Efficient Land Revenue: Scientific land measurement and taxation system based on soil fertility (usually 1/6th of produce).',
      'Village Self-Government: Autonomous Ayagar village council of 12 officials managed local justice, crafts, and irrigation.',
      'Four-Fold Military Might: Vast standing army comprising infantry, heavy cavalry (Arabian horses), war elephants, cannons, and a coastal navy.'
    ],
    pointsTe: [
      'కేంద్రీకృత రాచరిక పరిపాలన: మంత్రుల పరిషత్ సలహాతో చక్రవర్తి సర్వాధికారిగా, ధర్మబద్ధంగా పరిపాలన సాగించాడు.',
      'ప్రాంతీయ విభజన: సామ్రాజ్యాన్ని రాజ్యాలు/మండలాలు, నాడులు (జిల్లాలు), మరియు స్థలాలుగా (తాలూకాలు) విభజించారు.',
      'నాయంకర విధానం: సైన్యాధిపతులకు (నాయకులకు) భూములను (అమరం) ఇచ్చి, సైన్యాన్ని పోషించి శాంతిభద్రతలు కాపాడే బాధ్యత అప్పగించారు.',
      'సమర్థవంతమైన భూమిశిస్తు: భూసార ఆధారంగా భూములను కొలిచి 1/6 వంతు న్యాయమైన పన్ను విధానం అమలు చేశారు.',
      'అయ్యంగార్ల గ్రామ స్వపరిపాలన: 12 మంది గ్రామోద్యోగులతో కూడిన అయ్యంగార్ వ్యవస్థ గ్రామీణ న్యాయం, వ్యవసాయం చూసేది.',
      'చతురంగ బలాల మహా సైన్యం: కాలిబలము, మేలుజాతి అరబ్బు గుర్రాల అశ్వదళం, గజబలం, ఫిరంగులు మరియు తీరప్రాంత నౌకాదళం.'
    ]
  },
  economyAndTrade: {
    titleEn: 'Economy, Agriculture & International Maritime Trade',
    titleTe: 'ఆర్థిక వ్యవస్థ, వ్యవసాయం & అంతర్జాతీయ వాణిజ్యం',
    image: './images/indian_history/vijayanagara_portraits/vj_trade_goods_horse.jpg',
    pointsEn: [
      'Agricultural Prosperity: Extensive canal networks supported bumper crops of rice, sugarcane, millets, spices, cotton, and betel leaves.',
      'Global Export Leader: Exported black pepper, cardamom, fine muslin textiles, diamonds (from legendary Krishna-Tungabhadra mines), rubies, and sandalwood.',
      'Strategic Import Network: Imported prized Arabian and Persian warhorses, European artillery firearms, raw silk, and luxury velvet.',
      'International Trading Ports: Key maritime harbor ports at Bhatkal, Calicut, Honnavar, Mangalore, and Goa connecting to Arabia, Persia, Venice, and China.',
      'Open Gem Bazaars: Foreign chroniclers witnessed pearls, rubies, and diamonds sold openly by the heap in Hampi’s bustling street markets (Pan-Supari bazaar).'
    ],
    pointsTe: [
      'సుసంపన్న వ్యవసాయం: కాలువల ద్వారా వరి, చెరకు, చిరుధాన్యాలు, సుగంధ ద్రవ్యాలు, పత్తి మరియు తమలపాకుల సమృద్ధి సాగు.',
      'ప్రపంచ ప్రఖ్యాత ఎగుమతులు: నల్ల మిరియాలు, యాలకులు, సన్నని నూలు వస్త్రాలు, కృష్ణా-తుంగభద్ర లోయల వజ్రాలు, కెంపులు మరియు గంధపు చెక్క.',
      'వ్యూహాత్మక దిగుమతులు: అరేబియా, పర్షియా నుండి మేలుజాతి యుద్ధ అశ్వాలు, ఐరోపా ఫిరంగులు, చైనా పట్టు మరియు విలాస వస్తువులు.',
      'అంతర్జాతీయ ఓడరేవులు: భత్కల్, కాలికట్, మంగళూరు మరియు గోవా రేవుల ద్వారా అరేబియా, పర్షియా, పోర్చుగల్, చైనాలతో నిరంతర సముద్ర వాణిజ్యం.',
      'వీధుల్లో వజ్రాల బజార్లు: హంపి వీధుల్లో రత్నాలు, ముత్యాలు, కెంపులను పోతపోసి త్రాసులతో తూచి అమ్మేవారని విదేశీ యాత్రికులు లిఖించారు.'
    ],
    tradeGoods: [
      { nameEn: 'Spices (Pepper, Cardamom)', nameTe: 'సుగంధ ద్రవ్యాలు (మిరియాలు, యాలకులు)', icon: '🌶️' },
      { nameEn: 'Fine Cotton & Silk Textiles', nameTe: 'సన్నని నూలు & పట్టు వస్త్రాలు', icon: '🧵' },
      { nameEn: 'Diamonds & Gems (Golconda/Hampi)', nameTe: 'వజ్రాలు, రత్నాలు & కెంపులు', icon: '💎' },
      { nameEn: 'Arabian & Persian Warhorses', nameTe: 'అరబ్బు & పర్షియన్ మేలుజాతి అశ్వాలు', icon: '🐎' }
    ]
  },
  artAndArchitecture: {
    titleEn: 'Art, Dravidian Architecture & Hampi Monuments',
    titleTe: 'కళలు, ద్రావిడ వాస్తుశిల్పం & హంపి కట్టడాలు',
    image: './images/indian_history/vijayanagara_portraits/vj_virupaksha_temple.jpg',
    pointsEn: [
      'Distinct Vijayanagara Dravidian Style: Introduced soaring multi-tiered entrance towers called "Raya Gopurams".',
      'Kalyana Mandapas & Carved Pillars: Magnificent ceremonial halls supported by monolithic pillars carved with galloping yalis, hippogryphs, and mythological deities.',
      'Musical Stone Pillars: The pillared ranga mandapa of Vitthala Temple producing distinct musical notes (Sa-Re-Ga-Ma) when tapped.',
      'Iconic Stone Chariot (Garuda Shrine): Monolithic granite chariot in Vitthala temple complex, standing as an enduring symbol of Indian heritage.',
      'Secular Palace Architecture: Indo-Islamic architectural fusion in monuments like Lotus Mahal, Elephant Stables, and Queen’s Bath.',
      'Cultural Zenith: Flourishing of Carnatic classical music led by Saint Purandara Dasa ("Father of Carnatic Music") and Kanaka Dasa.'
    ],
    pointsTe: [
      'విశిష్ట విజయనగర ద్రావిడ శైలి: ఆకాశాన్నంటే భారీ ప్రవేశ గోపురాలు ("రాయ గోపురాలు") నిర్మించిన నూతన శైలి.',
      'కళ్యాణ మండపాలు & శిల్ప స్తంభాలు: దూకే యాళీలు, అశ్వాలు, పురాణ దేవీదేవతల శిల్పాలతో చెక్కిన ఏకశిలా స్తంభాల అద్భుత సభామండపాలు.',
      'సప్తస్వరాల సంగీత స్తంభాలు: విఠల దేవాలయంలోని రాతి స్తంభాలను మెల్లగా మీటితే స-రి-గ-మ సప్తస్వరాలు ధ్వనించే శిల్ప శాస్త్ర అద్భుతం.',
      'ప్రసిద్ధ రాతి రథం (గరుడ గుడి): విఠల ఆలయ ప్రాంగణంలో గ్రానైట్ రాతితో నిర్మించిన జగత్ప్రసిద్ధ రథం (భారతీయ వారసత్వ చిహ్నం).',
      'రాజభవనాలు & వాస్తు సమన్వయం: లక్ష్మీ నరసింహ విగ్రహం, లోటస్ మహల్, ఏనుగుల శాలలు మరియు రాణుల స్నానఘట్టం.',
      'కర్ణాటక సంగీత వికాసం: "కర్ణాటక సంగీత పితామహుడు" శ్రీ పురందర దాసు, కనక దాసుల భక్తి కీర్తనలతో వెల్లివిరిసిన ఆధ్యాత్మిక సంగీతం.'
    ],
    famousMonumentsEn: [
      'Virupaksha Temple (Towering Raya Gopuram, Pampapati shrine)',
      'Vitthala Temple Complex (Stone Chariot & 56 Musical Pillars)',
      'Hazara Rama Temple (Entire Ramayana sculpted on stone walls)',
      'Monolithic Lakshmi Narasimha & Badavilinga',
      'Lotus Mahal & The Grand Elephant Stables',
      'Mahanavami Dibba (Platform for Vijayadashami royal pageantry)'
    ],
    famousMonumentsTe: [
      'విరూపాక్ష దేవాలయం (ఎత్తైన రాయగోపురం, పంపాపతి క్షేత్రం)',
      'విఠల ఆలయ సముదాయం (రాతి రథం & 56 సంగీత స్తంభాలు)',
      'హజార రామాలయం (గోడలపై సంపూర్ణ రామాయణ శిల్పాలు)',
      'ఏకశిలా లక్ష్మీ నరసింహ & బడవలింగం',
      'లోటస్ మహల్ & గజశాల (ఏనుగుల దళం కోసం)',
      'మహానవమి దిబ్బ (దసరా ఉత్సవాల రాచరిక వేదిక)'
    ]
  },
  literatureAndLearning: {
    titleEn: 'Literature, Telugu Golden Age & Ashtadiggajas',
    titleTe: 'సాహిత్య స్వర్ణయుగం, అష్టదిగ్గజాలు & వేద భాష్యాలు',
    image: './images/indian_history/vijayanagara_portraits/vj_amuktamalyada_literature.jpg',
    pointsEn: [
      'Golden Age of Telugu Literature: Emperor Krishnadeva Raya coined the eternal adage "Desa Bhashalandu Telugu Lessa" (Among country languages, Telugu is supreme).',
      'Imperial Masterpiece "Amuktamalyada": Penned by Krishnadeva Raya in Telugu, detailing the divine life of Goda Devi (Andal) and sophisticated statecraft (Rajaniti).',
      'Patron of the Ashtadiggajas: The legendary royal assembly "Bhuvana Vijayam" patronized eight immortal Telugu poets.',
      'Sanskrit Renaissance: Krishnadeva Raya wrote "Jambavati Kalyanam", and royal minister Vidyaranya supported classical philosophy.',
      'Definitive Vedic Commentaries: Prime Minister Madhavacharya (Sage Vidyaranya) and brother Sayana composed the monumental Bhashyas on all Four Vedas.'
    ],
    pointsTe: [
      'తెలుగు సాహిత్య స్వర్ణయుగం: శ్రీకృష్ణదేవరాయలు స్వయంగా "దేశభాషలందు తెలుగు లెస్స" అని కొనియాడి తెలుగు భాషకు ప్రాణం పోశారు.',
      'ఆముక్తమాల్యద మహాకావ్యం: గోదాదేవి (ఆండాళ్) భక్తి చరిత్రను, అద్భుత రాజనీతి సూత్రాలను వర్ణిస్తూ కృష్ణదేవరాయలు రచించిన పంచకావ్యాలలో ఒకటి.',
      'భువన విజయ సభ & అష్టదిగ్గజాలు: రాయల ఆస్థానంలో ఎనిమిది మంది దిగ్గజ కవులు తెలుగు సాహిత్యాన్ని జగజ్జేగీయమానం చేశారు.',
      'సంస్కృత సాహిత్య వికాసం: కృష్ణదేవరాయల "జాంబవతీ కళ్యాణం", గంగాదేవి రచించిన "మధురా విజయం" వంటి అమూల్య గ్రంథాలు.',
      'చతుర్వేద సంపూర్ణ భాష్యాలు: సాయణాచార్యులు, మాధవాచార్యుల నేతృత్వంలో చతుర్వేదాలకు రచింపబడిన జగత్ప్రసిద్ధ వేద భాష్యాలు.'
    ],
    ashtadiggajasEn: [
      'Allasani Peddana (Andhra Kavita Pitamaha - Manucharitra)',
      'Nandi Timmana (Parijatapaharanam)',
      'Tenali Ramakrishna (Panduranga Mahatmyam & Legendary Wit)',
      'Dhurjati (Kalahasti Mahatmyam)',
      'Madayyagari Mallana (Rajashekhara Charitra)',
      'Ayyalaraju Ramabhadrudu (Ramabhyudayam)',
      'Pingali Surana (Kalapurnodayam & Prabhavati Pradyumnam)',
      'Ramarajabhushanudu (Vasucharitra)'
    ],
    ashtadiggajasTe: [
      'అల్లసాని పెద్దన ("ఆంధ్ర కవితా పితామహుడు" - మనుచరిత్ర)',
      'నంది తిమ్మన (పారిజాతాపహరణం)',
      'తెనాలి రామకృష్ణుడు (పాండురంగ మాహాత్మ్యము & అసమాన హాస్య విద్వాంసుడు)',
      'ధూర్జటి (కాళహస్తి మాహాత్మ్యము & శతకము)',
      'మాదయ్యగారి మల్లన (రాజశేఖర చరిత్ర)',
      'అయ్యలరాజు రామభద్రుడు (రామాభ్యుదయము)',
      'పింగళి సూరన (కళాపూర్ణోదయము, ప్రభావతీ ప్రద్యుమ్నము)',
      'రామరాజభూషణుడు / భట్టుమూర్తి (వసుచరిత్ర)'
    ]
  },
  foreignAccounts: {
    titleEn: 'Foreign Chronicle Accounts & Global Prestige',
    titleTe: 'విదేశీ యాత్రికుల కళ్ళలో విజయనగర వైభవం',
    image: './images/indian_history/vijayanagara_portraits/vj_domingo_paes.jpg',
    travellersEn: [
      'Niccolò de’ Conti (Italian merchant - visited 1420 CE under Deva Raya I)',
      'Abdur Razzak (Persian Ambassador of Shah Rukh - visited 1443 CE under Deva Raya II)',
      'Domingo Paes (Portuguese chronicler - visited 1520 CE under Krishnadeva Raya)',
      'Fernão Nunes (Portuguese horse merchant - documented history & warfare 1535 CE)'
    ],
    travellersTe: [
      'నికోలో డి కాంటీ (ఇటలీ వర్తకుడు - క్రీ.శ. 1420లో మొదటి దేవరాయల కాలంలో సందర్శించాడు)',
      'అబ్దుర్ రజాక్ (పర్షియన్ రాయబారి - క్రీ.శ. 1443లో రెండవ దేవరాయల కాలంలో వచ్చాడు)',
      'డొమింగో పేస్ (పోర్చుగీస్ యాత్రికుడు - క్రీ.శ. 1520లో శ్రీకృష్ణదేవరాయల వైభవాన్ని ప్రత్యక్షంగా చూశాడు)',
      'ఫెర్నావో న్యూనిజ్ (పోర్చుగీస్ గుర్రాల వ్యాపారి - 1535లో సామ్రాజ్య చరిత్ర, యుద్ధాలను లిఖించాడు)'
    ],
    highlightsEn: [
      'Abdur Razzak wrote: "The city of Vijayanagara is such that the eye has not seen nor the ear heard of any place to resemble it upon the whole earth! It is surrounded by seven concentric fortified walls."',
      'Domingo Paes praised: "The city is as large as Rome and very beautiful to the sight... full of charm and wonder, with great wealth and markets flowing with rubies, diamonds and pearls."',
      'Foreign visitors noted the absolute safety of trade routes, immense public granaries, hundreds of war elephants adorned with gold, and disciplined city watchmen.'
    ],
    highlightsTe: [
      'అబ్దుర్ రజాక్ వర్ణన: "భూప్రపంచం మీద కన్ను చూడని, చెవి వినని అద్భుత నగరం విజయనగరం! ఇది ఏడు వరుసల పటిష్ట రక్షణ ప్రాకారాలతో రక్షించబడుతోంది."',
      'డొమింగో పేస్ వర్ణన: "ఈ నగరం వైశాల్యంలో రోమ్ నగరంతో సమానమైనది, అత్యంత సుందరమైనది... సంపదలు తొణికిసలాడే ఈ నగర బజార్లలో రత్నాలు, ముత్యాలు, వజ్రాలు గుట్టలుగా అమ్మబడుతున్నాయి."',
      'యాత్రికులు రాజ్యంలో వర్తక భద్రతను, పటిష్ట న్యాయపాలనను మరియు బంగారు తొడుగులు ధరించిన వేలాది గజబలాన్ని ఆశ్చర్యంతో ప్రశంసించారు.'
    ]
  },
  decline: {
    titleEn: 'Decline & The Tragic Battle of Talikota (1565 CE)',
    titleTe: 'సామ్రాజ్య క్షీణత & తళ్ళికోట యుద్ధం (క్రీ.శ. 1565)',
    battleEn: 'Battle of Talikota (Rakkasa-Tangadi), 23 January 1565 CE',
    battleTe: 'తళ్ళికోట యుద్ధము (రక్కసి-తంగడి యుద్ధం), 23 జనవరి 1565',
    image: './images/indian_history/vijayanagara_portraits/vj_battle_of_talikota.jpg',
    pointsEn: [
      'Internal succession instability emerged following the death of Emperor Krishnadeva Raya in 1529 CE.',
      'Aliya Rama Raya, the de facto regent, engaged in complex diplomatic balancing among the rival Deccan Sultanates.',
      'United Confederacy: Sensed opportunity, the four rival Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar) set aside their feuds and united against Vijayanagara.',
      'Catastrophic Betrayal & Defeat: On 23 January 1565 at the Battle of Talikota, sudden betrayal of two Muslim mercenary commanders led to Rama Raya’s capture and defeat.',
      'Destruction of Hampi: The victorious Sultanate armies sacked, burned, and pillaged the glorious capital of Hampi for six continuous months, reducing its marble and stone palaces to ruins.',
      'Aravidu Dynasty Continuity: The empire retreated to Penukonda and Chandragiri under Tirumala Raya, continuing rule in reduced glory until the mid-17th century.'
    ],
    pointsTe: [
      'క్రీ.శ. 1529లో శ్రీకృష్ణదేవరాయల మరణానంతరం వారసత్వ పోరు మరియు రాజకీయ అనిశ్చితి మొదలైంది.',
      'అళియ రామరాయలు దక్కన్ సుల్తానుల మధ్య వైరుధ్యాలను ఉపయోగించుకుని దౌత్యం నడిపాడు.',
      'సుల్తానుల కూటమి: ఉమ్మడి శత్రువుగా మారిన విజయనగరంపై దాడి చేయడానికి నాలుగు దక్కన్ సల్తనత్‌లు (బీజాపూర్, గోల్కొండ, అహ్మద్‌నగర్, బీదర్) ఏకమయ్యాయి.',
      'ద్రోహం & ఘోర పరాజయం: 1565 జనవరి 23న జరిగిన తళ్ళికోట (రక్కసి-తంగడి) యుద్ధంలో సైన్యంలోని కొందరు సైన్యాధ్యక్షుల ద్రోహం వల్ల రామరాయలు పట్టుబడి వీరమరణం పొందాడు.',
      'హంపి విధ్వంసం: విజయం సాధించిన సుల్తానుల సైన్యం ఆరు నెలల పాటు నిరంతరంగా హంపి నగర సంపదను కొల్లగొట్టి, సుందర రాజభవనాలను దహనం చేసి శిథిలాల కుప్పగా మార్చింది.',
      'ఆరవీడు వంశం: తిరుమల రాయలు రాజధానిని పెనుకొండ, చంద్రగిరిలకు మార్చి 17వ శతాబ్దం వరకు పాలనను కొనసాగించాడు.'
    ]
  },
  legacyQuoteEn: 'The Vijayanagara Empire left a lasting legacy in the history of South India through its remarkable achievements in polity, culture, art, literature and economic prosperity.',
  legacyQuoteTe: 'విజయనగర సామ్రాజ్యం తన అద్భుతమైన రాజకీయ వ్యవస్థ, సంస్కృతి, కళలు, సాహిత్యం మరియు ఆర్థిక సుసంపన్నత ద్వారా దక్షిణ భారతదేశ చరిత్రలో చెరిగిపోని శాశ్వత వారసత్వాన్ని మిగిల్చింది.'
};

// ============================================================================
// MAURYAN DYNASTY (322 – 185 BCE) — COMPLETE ILLUSTRATED DETAILS FOR POP-UP MODAL
// ============================================================================
export const MAURYAN_DYNASTY_DETAILS = {
  titleEn: 'The Mauryan Dynasty — A Turning Point in Indian History',
  titleTe: 'మౌర్య సామ్రాజ్యము (క్రీ.పూ. 321–185) — భారతదేశ చరిత్రలో ఒక మహా మలుపు',
  periodEn: 'c. 322 – 185 BCE',
  periodTe: 'క్రీ.పూ. 322 – 185',
  taglineEn: 'From a regional kingdom to one of the largest empires in the ancient world.',
  taglineTe: 'ఒక ప్రాంతీయ రాజ్యం నుండి ప్రాచీన ప్రపంచంలోనే అతిపెద్ద సామ్రాజ్యాలలో ఒకటిగా ఎదిగిన మహా సామ్రాజ్యం.',
  headerQuoteEn: '“A great empire is not built by force alone, but by vision, administration and the welfare of its people.”',
  headerQuoteTe: '“ఒక గొప్ప సామ్రాజ్యం కేవలం భుజబలంతో మాత్రమే నిర్మించబడదు; దార్శనికత, సమర్థవంతమైన పరిపాలన మరియు ప్రజల సంక్షేమంతో నిర్మించబడుతుంది.”',
  posterSrc: './images/indian_history/maurya_dynasty/maurya_dynasty_poster.jpg',
  panoramaSrc: './images/indian_history/maurya_dynasty/pataliputra_panorama.jpg',
  keyRulers: [
    {
      nameEn: 'Chandragupta Maurya',
      nameTe: 'చంద్రగుప్త మౌర్యుడు',
      reignEn: 'c. 322 – 298 BCE',
      reignTe: 'క్రీ.పూ. 322 – 298',
      image: './images/indian_history/maurya_dynasty/chandragupta_maurya.jpg',
      pointsEn: [
        'Founded the Mauryan Empire after overthrowing the Nanda Dynasty.',
        'Ruled with the strategic guidance of Acharya Chanakya (Kautilya).',
        'Unified much of the Indian subcontinent under a single imperial rule.'
      ],
      pointsTe: [
        'నంద వంశాన్ని అంతం చేసి మౌర్య సామ్రాజ్యాన్ని స్థాపించాడు.',
        'ఆచార్య చాణక్యుని (కౌటిల్యుని) వ్యూహాత్మక మార్గదర్శకత్వంలో పాలన సాగించాడు.',
        'భారత ఉపఖండంలో సింహభాగాన్ని ఒకే సార్వభౌమ పాలన కింద ఏకీకృతం చేశాడు.'
      ]
    },
    {
      nameEn: 'Bindusara',
      nameTe: 'బిందుసారుడు',
      reignEn: 'c. 298 – 273 BCE',
      reignTe: 'క్రీ.పూ. 298 – 273',
      image: './images/indian_history/maurya_dynasty/bindusara.jpg',
      pointsEn: [
        'Expanded the Mauryan Empire further south into the Deccan plateau.',
        'Maintained a strong centralized administration and diplomatic ties with Hellenistic kingdoms.',
        'Known as “Amitrochates” (Amitraghata – Slayer of Foes) by the Greeks.'
      ],
      pointsTe: [
        'సామ్రాజ్యాన్ని దక్కన్ పీఠభూమి మరియు దక్షిణాది ప్రాంతాల వరకు మరింత విస్తరించాడు.',
        'పటిష్టమైన పరిపాలనా వ్యవస్థను మరియు విదేశీ రాజ్యాలతో దౌత్య సంబంధాలను కొనసాగించాడు.',
        'గ్రీకులచే "అమిత్రోచెట్స్" (అమిత్రఘాత — శత్రు సంహారకుడు) అని పిలువబడ్డాడు.'
      ]
    },
    {
      nameEn: 'Ashoka the Great',
      nameTe: 'అశోక చక్రవర్తి (దేవానాంప్రియ ప్రియదర్శి)',
      reignEn: 'c. 273 – 232 BCE',
      reignTe: 'క్రీ.పూ. 273 – 232',
      image: './images/indian_history/maurya_dynasty/ashoka_the_great.jpg',
      pointsEn: [
        'Expanded the empire to its greatest geographical extent across South Asia.',
        'After witnessing the devastation of the Kalinga War (261 BCE), embraced Buddhism.',
        'Promoted peace, non-violence (Ahimsa), morality (Dhamma) and public welfare.'
      ],
      pointsTe: [
        'మౌర్య సామ్రాజ్యాన్ని దాని గరిష్ట భౌగోళిక పరిమితికి విస్తరించాడు.',
        'కళింగ యుద్ధం (క్రీ.పూ. 261) అనంతరం హింసను విడనాడి బౌద్ధ ధర్మాన్ని స్వీకరించాడు.',
        'శాంతి, అహింస, నైతిక విలువలు (ధమ్మం) మరియు ప్రజా సంక్షేమాన్ని విశ్వవ్యాప్తం చేశాడు.'
      ]
    },
    {
      nameEn: 'Chanakya (Kautilya)',
      nameTe: 'ఆచార్య చాణక్యుడు (కౌటిల్యుడు / విష్ణుగుప్తుడు)',
      reignEn: 'c. 4th Century BCE',
      reignTe: 'క్రీ.పూ. 4వ శతాబ్దం',
      image: './images/indian_history/maurya_dynasty/chanakya_kautilya.jpg',
      pointsEn: [
        'A great strategist, philosopher, economist and royal statesman (Acharya of Takshashila).',
        'Author of the renowned treatise on statecraft and political economy, “Arthashastra”.',
        'Played a crucial role in establishing and organizing the Mauryan Empire.'
      ],
      pointsTe: [
        'గొప్ప వ్యూహకర్త, తత్త్వవేత్త, ఆర్థికవేత్త మరియు రాజనీతిజ్ఞుడు (తక్షశిల ఆచార్యుడు).',
        'రాజనీతి, ఆర్థిక శాస్త్ర గ్రంథమైన ప్రఖ్యాత "అర్థశాస్త్రం" రచయిత.',
        'మౌర్య సామ్రాజ్య స్థాపనలో మరియు సువ్యవస్థీకృత పాలనా నిర్మాణంలో అత్యంత కీలక పాత్ర పోషించాడు.'
      ]
    }
  ],
  extentOfEmpire: {
    titleEn: 'Extent of the Empire',
    titleTe: 'మౌర్య సామ్రాజ్య విస్తరణ పటం',
    subtitleEn: 'One of the largest empires in the ancient world.',
    subtitleTe: 'ప్రాచీన ప్రపంచంలోనే అతిపెద్ద సామ్రాజ్యాలలో ఒకటి.',
    mapImage: './images/indian_history/maurya_dynasty/maurya_empire_map.jpg',
    descriptionEn: 'The empire stretched from Afghanistan (Hindukush) in the west to parts of Karnataka (Suvarnagiri) in the south, and from the Himalayas in the north to Bengal in the east.',
    descriptionTe: 'పశ్చిమాన ఆఫ్ఘనిస్తాన్ (హిందూకుష్ పర్వతాలు) నుండి దక్షిణాన కర్ణాటక (సువర్ణగిరి) వరకు, ఉత్తరాన హిమాలయాల నుండి తూర్పున బెంగాల్ వరకు మౌర్య సామ్రాజ్యం విస్తరించింది.',
    keyCentersEn: ['Pataliputra (Imperial Capital)', 'Taxila (North-Western Province)', 'Ujjain (Western Province)', 'Tosali (Eastern / Kalinga Province)', 'Suvarnagiri (Southern Province)', 'Sanchi (Major Buddhist Centre)'],
    keyCentersTe: ['పాటలీపుత్రం (సామ్రాజ్య రాజధాని)', 'తక్షశిల (వాయువ్య రాష్ట్ర రాజధాని)', 'ఉజ్జయిని (పశ్చిమ రాష్ట్ర రాజధాని)', 'తోసలి (తూర్పు / కళింగ రాజధాని)', 'సువర్ణగిరి (దక్షిణ రాష్ట్ర రాజధాని)', 'సాంచి (ప్రముఖ బౌద్ధ క్షేత్రం)']
  },
  administration: {
    titleEn: 'Administration — A Well-Organized System for a Vast Empire',
    titleTe: 'పరిపాలనా వ్యవస్థ — విస్తార సామ్రాజ్యం కోసం సువ్యవస్థీకృత విధానం',
    items: [
      {
        icon: '🏛️',
        titleEn: 'Centralized Governance',
        titleTe: 'కేంద్రీకృత పరిపాలన (Centralized Governance)',
        descEn: 'King at the centre assisted by a Council of Ministers (Mantriparishad), provincial rulers and a detailed bureaucracy guided by Kautilya’s Arthashastra.',
        descTe: 'రాజు కేంద్రంగా మంత్రిపరిషత్తు, ప్రాంతీయ పాలకులు మరియు కౌటిల్యుని అర్థశాస్త్రం ఆధారిత విస్తృత అధికార యంత్రాంగం.'
      },
      {
        icon: '🗺️',
        titleEn: 'Administrative Divisions',
        titleTe: 'పరిపాలనా విభాగాలు (Divisions)',
        descEn: 'The vast empire was systematically divided into Provinces (Chakras governed by Kumaras/Aryaputras), Districts (Aharas/Vishayas) and Villages (Gramas).',
        descTe: 'సామ్రాజ్యం ప్రావిన్సులు (రాష్ట్రాలు/చక్రాలు — కుమారులు లేదా ఆర్యపుత్రుల పాలనలో), జిల్లాలు (ఆహారాలు/విషయాలు) మరియు గ్రామాలుగా విభజించబడింది.'
      },
      {
        icon: '📜',
        titleEn: 'Key Imperial Officials',
        titleTe: 'ముఖ్య ఉన్నతాధికారులు (Officials)',
        descEn: 'Amatyas (civil servants), Mahamatras (high commissioners), Rajukas (rural land & justice officers) and Yuktas (subordinate revenue officers) managed administration, revenue and justice.',
        descTe: 'పరిపాలన, రెవెన్యూ మరియు న్యాయ నిర్వహణ కోసం అమాత్యులు, మహామాత్రులు, రజ్జుకులు మరియు యుక్తులు అనే ఉన్నతాధికారులు నియమించబడ్డారు.'
      },
      {
        icon: '🪙',
        titleEn: 'Revenue System',
        titleTe: 'ఆదాయ వనరులు & పన్నులు (Revenue)',
        descEn: 'State treasury collected revenue from land tax (Bhaga – typically 1/6th of produce), internal/external trade, agriculture, mining and state monopolies.',
        descTe: 'భూమి శిస్తు (భాగ — పంటలో 1/6వ వంతు), వాణిజ్య సుంకాలు, వ్యవసాయం, గనులు మరియు ప్రభుత్వ గుత్తాధిపత్య పరిశ్రమల నుండి ఆదాయం సేకరించబడింది.'
      },
      {
        icon: '⚖️',
        titleEn: 'Law, Order & Intelligence',
        titleTe: 'శాంతిభద్రతలు & గూఢచారి వ్యవస్థ (Law and Order)',
        descEn: 'Network of secret spies (Gudhapurushas), regular inspections and a strong judicial system (Dharmasthiya & Kantakashodhana courts) maintained discipline.',
        descTe: 'క్రమశిక్షణ మరియు రాజ్య భద్రత కోసం గూఢచారులు (గూఢపురుషులు), తనిఖీలు మరియు పటిష్ట న్యాయస్థానాలు (ధర్మస్థీయ, కంటకశోధన) పనిచేశాయి.'
      }
    ]
  },
  economyAndSociety: {
    titleEn: 'Economy and Society',
    titleTe: 'ఆర్థిక వ్యవస్థ మరియు సమాజం',
    items: [
      {
        icon: '🌾',
        titleEn: 'Agriculture',
        titleTe: 'వ్యవసాయం (Agriculture)',
        descEn: 'Mainstay of the Mauryan economy, supported by state-built irrigation reservoirs (like Sudarshana Lake) and systematic land development.',
        descTe: 'నీటిపారుదల సౌకర్యాలు (సుదర్శన తటాకం వంటి జలాశయాలు) మరియు భూ అభివృద్ధితో కూడిన వ్యవసాయం ఆర్థిక వ్యవస్థకు ప్రధాన ఆధారం.'
      },
      {
        icon: '⛵',
        titleEn: 'Internal & Maritime Trade',
        titleTe: 'వాణిజ్యం (Trade)',
        descEn: 'Extensive internal and external trade along the Uttarapatha & Dakshinapatha routes, with active links to Greece, Central Asia and Southeast Asia.',
        descTe: 'ఉత్తరాపథం, దక్షిణాపథం మార్గాల ద్వారా విస్తృత అంతర్గత మరియు విదేశీ వాణిజ్యం — గ్రీస్, మధ్య ఆసియా మరియు ఆగ్నేయాసియా దేశాలతో వర్తక సంబంధాలు.'
      },
      {
        icon: '⚙️',
        titleEn: 'Crafts and Industries',
        titleTe: 'చేతివృత్తులు & పరిశ్రమలు (Crafts & Industries)',
        descEn: 'Flourishing guilds in textiles, metallurgy, ivory carving, Northern Black Polished Ware (NBPW) pottery and mirror-polished stone work.',
        descTe: 'వస్త్ర పరిశ్రమ, లోహపు పనులు, దంతపు చెక్కడాలు, మెరుగుపెట్టిన మృణ్మయ పాత్రలు (NBPW) మరియు రాతి శిల్పకళా పరిశ్రమలు వర్ధిల్లాయి.'
      },
      {
        icon: '🏥',
        titleEn: 'Social Welfare',
        titleTe: 'సామాజిక సంక్షేమం (Social Welfare)',
        descEn: 'Public hospitals for both humans and animals, stepwells, rest houses (Dharmashalas) and shade-giving trees planted along imperial highways.',
        descTe: 'మనుషులు మరియు జంతువుల కోసం వైద్యశాలలు, బావులు, విశ్రాంతి గృహాలు, రహదారుల వెంట నీడనిచ్చే చెట్లు నాటించడం వంటి సంక్షేమ కార్యక్రమాలు.'
      }
    ]
  },
  ashokasDhamma: {
    titleEn: 'Ashoka’s Dhamma (Dharma)',
    titleTe: 'అశోకుని ధమ్మం (ధర్మ సిద్ధాంతం)',
    pointsEn: [
      'Emphasized universal moral values, non-violence (Ahimsa), compassion and mutual tolerance.',
      'Engraved inscriptions on rocks and polished sandstone pillars across the length and breadth of the empire.',
      'Preached respect and harmony toward all religions and sects (Brahmanas, Shramanas, Ajivikas, Buddhists, Jains).',
      'Instituted welfare measures for citizens, prisoners, travellers and animals.',
      'Sent Buddhist missionaries (including Mahendra and Sanghamitra) to Sri Lanka, Central Asia and West Asia.'
    ],
    pointsTe: [
      'నైతిక విలువలు, అహింస, భూతదయ, పెద్దల పట్ల గౌరవం మరియు సహనానికి పెద్దపీట వేసింది.',
      'సామ్రాజ్యమంతటా ప్రాకృత, బ్రాహ్మీ, ఖరోష్ఠీ లిపులలో శిలాశాసనాలు మరియు స్తంభ శాసనాలపై ధర్మ సందేశాలను చెక్కించాడు.',
      'అన్ని మతాలు మరియు సంప్రదాయాల పట్ల గౌరవం, సమన్వయం ఉండాలని బోధించాడు.',
      'ప్రజలు, బాటసారులు మరియు పశుపక్ష్యాదుల సంక్షేమం కోసం ప్రత్యేక ధర్మ మహామాత్రులను నియమించాడు.',
      'తన కుమారుడు మహేంద్రుడు, కుమార్తె సంఘమిత్రలతో సహా బౌద్ధ ధర్మ ప్రచారకులను శ్రీలంక మరియు ఇతర దేశాలకు పంపాడు.'
    ],
    quoteEn: '“True conquest is not the conquest of others, but the conquest of the self.” — Ashoka the Great',
    quoteTe: '“నిజమైన విజయం ఇతరులను జయించడం కాదు, తనను తాను (ఆత్మను) జయించడమే.” — అశోక చక్రవర్తి'
  },
  monuments: [
    {
      nameEn: 'Sanchi Stupa',
      nameTe: 'సాంచి మహాస్తూపం (Sanchi Stupa)',
      captionEn: 'A symbol of Buddhist heritage.',
      captionTe: 'బౌద్ధ వారసత్వానికి శాశ్వత ప్రతీక.',
      image: './images/indian_history/maurya_dynasty/sanchi_stupa.jpg'
    },
    {
      nameEn: 'Ashokan Pillar (Lion Capital)',
      nameTe: 'అశోకుని సింహ తలాటం (Ashokan Pillar)',
      captionEn: 'A mark of imperial legacy (National Emblem of India).',
      captionTe: 'మౌర్య సామ్రాజ్య వైభవానికి ప్రతీక (భారత జాతీయ చిహ్నం).',
      image: './images/indian_history/maurya_dynasty/ashokan_pillar.jpg'
    },
    {
      nameEn: 'Ashokan Rock Edicts',
      nameTe: 'అశోకుని శిలాశాసనాలు (Rock Edicts)',
      captionEn: 'Messages of Dhamma engraved in stone for the people.',
      captionTe: 'ప్రజల కోసం రాతిపై చెక్కిన ధర్మ సందేశాలు.',
      image: './images/indian_history/maurya_dynasty/rock_edicts.jpg'
    }
  ],
  legacy: {
    titleEn: 'Legacy of the Mauryas',
    titleTe: 'మౌర్య సామ్రాజ్య శాశ్వత వారసత్వం',
    pointsEn: [
      'Unified much of the Indian subcontinent under a single sovereign administration.',
      'Set an enduring model of efficient public administration, diplomacy and welfare governance.',
      'Catalyzed the spread of Buddhism across India, Sri Lanka, Central Asia and East Asia.',
      'Profound influence on classical Indian art, monolithic stone architecture and literature.',
      'Ideals of public welfare, religious tolerance and ethical governance (Dharmavijaya) remain relevant today.'
    ],
    pointsTe: [
      'భారత ఉపఖండంలో సింహభాగాన్ని ఒకే సార్వభౌమ పాలన కిందకు తెచ్చి సమైక్యపరిచింది.',
      'సమర్థవంతమైన పరిపాలన, దౌత్యం మరియు సంక్షేమ రాజ్యానికి ఆదర్శ నమూనాగా నిలిచింది.',
      'భారతదేశంలో మరియు ఆసియా ఖండమంతటా బౌద్ధ ధర్మ వ్యాప్తికి పునాది వేసింది.',
      'భారతీయ కళలు, ఏకశిలా స్తంభ వాస్తుశిల్పం మరియు సాహిత్యంపై చెరగని ముద్ర వేసింది.',
      'ప్రజా సంక్షేమం, మత సహనం మరియు నైతిక పాలన (ధర్మవిజయం) ఆదర్శాలు నేటికీ ఆచరణీయంగా నిలిచాయి.'
    ],
    closingQuoteEn: '“The Mauryan Dynasty laid the foundations of a connected and culturally rich India.”',
    closingQuoteTe: '“మౌర్య సామ్రాజ్యం పరస్పర అనుసంధానమైన మరియు సాంస్కృతికంగా సుసంపన్నమైన భారతదేశానికి పునాదులు వేసింది.”'
  }
};

// ============================================================================
// MAHAJANAPADA ERA (c. 600 BCE – 322 BCE) — COMPLETE ILLUSTRATED DETAILS
// ============================================================================
export const MAHAJANAPADA_ERA_DETAILS = {
  titleEn: 'MAHAJANAPADA ERA — The Age of Sixteen Great Kingdoms',
  titleTe: '16 మహాజనపదాల యుగము — పదహారు మహా రాజ్యాల కాలం',
  periodEn: 'c. 600 BCE – 322 BCE',
  periodTe: 'క్రీ.పూ. 600 – 322',
  overviewEn: 'The Mahajanapada Era marks the rise of large territorial states, Second Urbanization, monetization (punch-marked coins), growth of trade and economy, and emergence of new religious and philosophical ideas (Buddhism & Jainism).',
  overviewTe: 'మహాజనపదాల యుగం పెద్ద ప్రాదేశిక రాజ్యాల ఆవిర్భావం, రెండవ నగరీకరణ, నాణేల ముద్రణ (కర్షాపణాలు), వాణిజ్య-ఆర్థికాభివృద్ధి మరియు నూతన మత-తాత్త్విక భావాల (బౌద్ధ, జైన ధర్మాలు) ఉదయాన్ని సూచిస్తుంది.',
  posterSrc: './images/indian_history/mahajanapada_era/mahajanapada_era_poster.jpg',
  originalMapSrc: './images/indian_history/mahajanapadas_map.jpg',
  colorMapSrc: './images/indian_history/mahajanapada_era/mj_color_map.jpg',
  lionChakraImg: './images/indian_history/mahajanapada_era/mj_lion_chakra.jpg',
  chariotArmyImg: './images/indian_history/mahajanapada_era/mj_chariot_army.jpg',
  whatIsMahajanapada: {
    titleEn: 'What is a Mahajanapada?',
    titleTe: 'మహాజనపదం అంటే ఏమిటి?',
    coinImg: './images/indian_history/mahajanapada_era/mj_punch_marked_coin.jpg',
    pointsEn: [
      'Mahajanapadas (“Great Realms / Footholds of a People”) were 16 large kingdoms or oligarchic republics that emerged in the post-Vedic period.',
      'The 16 Mahajanapadas are prominently mentioned in early Buddhist texts (Anguttara Nikaya) and Jain texts (Bhagavati Sutra).',
      'This period witnessed the transition from semi-nomadic Vedic tribal polities (Janas) to permanent territorial states (Janapadas & Mahajanapadas).'
    ],
    pointsTe: [
      'మలి వేద కాలం చివరిలో ఆవిర్భవించిన 16 పెద్ద రాచరిక రాజ్యాలు లేదా గణతంత్ర రాజ్యాలనే "మహాజనపదాలు" (మహా + జన + పదం) అంటారు.',
      'బౌద్ధ గ్రంథమైన "అంగుత్తర నికాయ" మరియు జైన గ్రంథమైన "భగవతీ సూత్రం"లో ఈ 16 మహాజనపదాల ప్రస్తావన ఉంది.',
      'ఈ కాలంలో వేదకాలపు తెగల వ్యవస్థ (జన) నుండి నిర్దిష్ట భౌగోళిక సరిహద్దులు కలిగిన స్థిర ప్రాదేశిక రాజ్యాలు ఏర్పడ్డాయి.'
    ]
  },
  geographicalDistribution: {
    titleEn: 'Geographical Distribution of 16 Mahajanapadas',
    titleTe: '16 మహాజనపదాల భౌగోళిక విస్తరణ',
    regions: [
      {
        zoneEn: 'North-West Frontier',
        zoneTe: 'వాయువ్య ప్రాంతం (North-West)',
        statesEn: 'Gandhara, Kamboja',
        statesTe: 'గాంధార, కాంబోజ'
      },
      {
        zoneEn: 'Western & Upper Doab',
        zoneTe: 'పశ్చిమ ప్రాంతం (West)',
        statesEn: 'Kuru, Panchala, Matsya, Surasena',
        statesTe: 'కురు, పాంచాల, మత్స్య, శూరసేన'
      },
      {
        zoneEn: 'Eastern & Gangetic Plains',
        zoneTe: 'తూర్పు / గంగా మైదానం (East)',
        statesEn: 'Anga, Magadha, Kashi, Kosala, Vajji (Vrji), Malla, Chedi, Vatsa',
        statesTe: 'అంగ, మగధ, కాశీ, కోసల, వజ్జి, మల్ల, చేది, వత్స'
      },
      {
        zoneEn: 'Southern India (Deccan)',
        zoneTe: 'దక్షిణ భారత / దక్కన్ (South)',
        statesEn: 'Assaka / Asmaka (on the banks of River Godavari)',
        statesTe: 'అశ్మక / అస్సక (గోదావరి నదీ తీరం – దక్షిణ భారత్‌లోని ఏకైక మహాజనపదం)'
      },
      {
        zoneEn: 'Central India (Malwa)',
        zoneTe: 'మధ్య భారత ప్రాంతం (Central)',
        statesEn: 'Avanti (Ujjain & Mahishmati)',
        statesTe: 'అవంతి (ఉజ్జయిని & మహిష్మతి)'
      }
    ]
  },
  importantFeatures: {
    titleEn: 'Important Features of the Era',
    titleTe: 'మహాజనపద యుగ ముఖ్య లక్షణాలు',
    items: [
      {
        icon: '👑',
        en: 'Emergence of large territorial states with well-defined geographical boundaries.',
        te: 'నిర్దిష్ట భౌగోళిక సరిహద్దులతో కూడిన పెద్ద ప్రాదేశిక రాజ్యాల ఆవిర్భావం.'
      },
      {
        icon: '🏙️',
        en: 'Second Urbanization: Growth of great cities (Rajagriha, Vaishali, Ujjain, Kashi, Shravasti, Taxila, Kaushambi).',
        te: 'రెండవ నగరీకరణ: రాజగృహ, వైశాలి, ఉజ్జయిని, కాశీ, శ్రావస్తి, తక్షశిల, కౌశాంబి వంటి మహా నగరాల అభివృద్ధి.'
      },
      {
        icon: '🪙',
        en: 'Introduction and widespread circulation of silver & copper punch-marked coins (Karshapanas).',
        te: 'వెండి, రాగితో కూడిన తొలి ముద్రిత నాణేల (Punch-marked coins / కర్షాపణాలు) ప్రవేశం మరియు విస్తృత చలామణి.'
      },
      {
        icon: '⚖️',
        en: 'Expansion of inland and overseas trade; development of major highways (Uttarapatha & Dakshinapatha).',
        te: 'వాణిజ్య విస్తరణ మరియు సుదూర వర్తక రహదారుల (ఉత్తరాపథం, దక్షిణాపథం) అభివృద్ధి.'
      },
      {
        icon: '👥',
        en: 'Rise of powerful new social classes – Gahapatis (landowners), Shreshthis (merchant-bankers), and Artisan guilds (Shrenis).',
        te: 'కొత్త సామాజిక వర్గాల ఆవిర్భావం — గహపతులు (భూస్వాములు), శ్రేష్ఠులు (వర్తక ప్రముఖులు), చేతివృత్తుల శ్రేణులు.'
      },
      {
        icon: '🧘',
        en: 'Rise of Sramana traditions – Buddhism (Gautama Buddha), Jainism (Mahavira), and Ajivikas.',
        te: 'శ్రమణ సంప్రదాయాల ఆవిర్భావం — బౌద్ధ ధర్మం, జైన ధర్మం మరియు అజీవిక శాఖలు.'
      },
      {
        icon: '⚔️',
        en: 'Development of permanent standing armies and advanced iron weapon technology.',
        te: 'శాశ్వత సిద్ధ సైన్యాల (Standing Armies) ఏర్పాటు మరియు మెరుగైన ఇనుప ఆయుధ సాంకేతికత.'
      }
    ]
  },
  politicalSystem: {
    titleEn: 'Political System — Monarchies vs. Republics',
    titleTe: 'రాజకీయ వ్యవస్థ — రాచరిక రాజ్యాలు & గణతంత్ర రాజ్యాలు',
    monarchies: {
      titleEn: '1. Monarchies (Rajyas)',
      titleTe: '1. రాచరిక రాజ్యాలు (Monarchies / రాజ్యాలు)',
      descEn: 'Most Mahajanapadas such as Magadha, Kosala, Avanti, Vatsa, and Kashi were hereditary monarchies ruled by powerful kings claiming divine authority.',
      descTe: 'మగధ, కోసల, అవంతి, వత్స, కాశీ మొదలైన అత్యధిక మహాజనపదాలు వంశపారంపర్య రాజుల పాలనలో ఉండేవి.'
    },
    republics: {
      titleEn: '2. Republics / Oligarchies (Ganarajyas / Sanghas)',
      titleTe: '2. గణతంత్ర / ప్రజాస్వామ్య రాజ్యాలు (Ganarajyas / గణరాజ్యాలు)',
      descEn: 'States like Vajji (confederacy of 8 clans including Lichchhavis), Malla, Kuru, Panchala, and Kamboja had republican governance.',
      descTe: 'వజ్జి (లిచ్ఛవి, విదేహ మొదలైన 8 తెగల సమైక్య), మల్ల, కురు, పాంచాల మొదలైనవి గణతంత్ర పాలనా విధానాన్ని కలిగి ఉండేవి.'
    },
    institutionsEn: [
      'Sabha – General assembly of clan representatives (Rajas) meeting in the Santhagara (Assembly Hall).',
      'Samiti – Executive council managing state affairs.',
      'Gana / Sangha – Sovereign political community governed collectively.',
      'Decisions taken by debate and majority ballot voting (Salaka-grahapaka).'
    ],
    institutionsTe: [
      'సభ (సంథాగారం) — గణరాజ్య ప్రతినిధులందరూ సమావేశమయ్యే సాధారణ అసెంబ్లీ హాల్.',
      'సమితి — రాజ్య వ్యవహారాలను నిర్వహించే కార్యనిర్వాహక మండలి.',
      'గణ / సంఘ — సమిష్టిగా పాలించుకునే రాజకీయ సముదాయం.',
      'చర్చలు మరియు మెజారిటీ ఓటింగ్ (శలాక గ్రహపక) ద్వారా ప్రజాస్వామ్యబద్ధంగా నిర్ణయాలు.'
    ]
  },
  economy: {
    titleEn: 'Economy',
    titleTe: 'ఆర్థిక వ్యవస్థ',
    pointsEn: [
      'Agriculture was the main occupation; iron ploughshares and wet paddy transplantation multiplied crop surplus.',
      'Animal husbandry, fishing, hunting, and forestry supported rural livelihoods.',
      'Specialized crafts and industries (textiles, ironworking, ivory carving, NBPW pottery) flourished under guilds (Shrenis).',
      'Trade expanded rapidly across both inland river/land routes and overseas maritime ports (Bharukachchha, Tamralipti).',
      'Widespread use of silver and copper punch-marked coins called Karshapanas.'
    ],
    pointsTe: [
      'వ్యవసాయం ప్రధాన వృత్తి; ఇనుప నాగళ్ళు మరియు వరి నాట్లు వేసే పద్ధతితో వ్యవసాయ దిగుబడి భారీగా పెరిగింది.',
      'పశుపోషణ, చేపల వేట, అటవీ ఉత్పత్తులు గ్రామీణ ఆర్థిక వ్యవస్థకు ఊతమిచ్చాయి.',
      'చేతివృత్తులు మరియు పరిశ్రమలు (వస్త్రాలు, ఇనుప పరికరాలు, దంతపు కళలు, NBPW కుమ్మరి పాత్రలు) శ్రేణుల కింద వర్ధిల్లాయి.',
      'అంతర్గత నదీ/భూ మార్గాలు మరియు విదేశీ సముద్ర రేవుల (భరుకచ్ఛ, తామ్రలిప్తి) ద్వారా వాణిజ్యం విస్తరించింది.',
      'వెండి మరియు రాగితో తయారైన ముద్రిత నాణేల (కర్షాపణ - Karshapana) విస్తృత వినియోగం.'
    ]
  },
  society: {
    titleEn: 'Society',
    titleTe: 'సామాజిక వ్యవస్థ',
    pointsEn: [
      'The four-fold Varna system became more structured: Brahmanas, Kshatriyas, Vaishyas, and Shudras.',
      'Emergence of wealthy and influential socio-economic groups like Gahapatis (landed householders) and Shreshthis (bankers).',
      'Patriarchal family structure, though the status of women was relatively better in republican clans and ascetic orders (Bhikkhuni Sanghas).'
    ],
    pointsTe: [
      'చాతుర్వర్ణ వ్యవస్థ మరింత వ్యవస్థీకృతమైంది: బ్రాహ్మణ, క్షత్రియ, వైశ్య మరియు శూద్ర వర్ణాలు.',
      'గహపతులు (సంపన్న భూస్వాములు) మరియు శ్రేష్ఠులు (వడ్డీ వ్యాపారులు/వర్తక ప్రముఖులు) అనే ప్రభావవంతమైన వర్గాల ఉదయం.',
      'పితృస్వామ్య సమాజం; అయితే గణతంత్ర రాజ్యాలలో మరియు బౌద్ధ/జైన భిక్షుణీ సంఘాలలో స్త్రీలకు మెరుగైన గౌరవం లభించింది.'
    ]
  },
  religionAndPhilosophy: {
    titleEn: 'Religion and Philosophy',
    titleTe: 'మతము మరియు తత్త్వశాస్త్రం',
    buddhaImg: './images/indian_history/mahajanapada_era/mj_buddha_meditating.jpg',
    riseOfIdeasEn: [
      'Questioning of elaborate Vedic animal sacrifices and rigid ritualism.',
      'Emphasis on personal ethics, morality, non-violence (Ahimsa), Karma and liberation (Nirvana/Moksha).',
      'Deepening of Upanishadic philosophical inquiry (Atman & Brahman).',
      'Growth of heterodox, materialistic and rationalist philosophical schools.'
    ],
    riseOfIdeasTe: [
      'సంక్లిష్ట యజ్ఞయాగాదులు మరియు జంతు బలులను ప్రశ్నించడం.',
      'సదాచారం, నైతిక విలువలు, అహింస, కర్మ సిద్ధాంతం మరియు మోక్షం/నిర్వాణంపై ప్రధాన దృష్టి.',
      'ఉపనిషత్తుల ఆత్మ-బ్రహ్మ తత్త్వ విచారణ వికాసం.',
      'భౌతికవాద మరియు హేతువాద తత్త్వ పాఠశాలల పెరుగుదల.'
    ],
    majorTraditionsEn: [
      'Buddhism – Founded by Gautama Buddha (Four Noble Truths & Eightfold Path).',
      'Jainism – Revitalized by 24th Tirthankara Vardhamana Mahavira (Triratnas & Ahimsa).',
      'Ajivikas – Founded by Makkhali Gosala (Philosophy of Niyati / Fatalism).',
      'Upanishadic Thought – Vedantic spiritual philosophy.',
      'Charvaka / Lokayata – School of Indian Materialism and empiricism.'
    ],
    majorTraditionsTe: [
      'బౌద్ధ ధర్మం — గౌతమ బుద్ధుడు (చతురార్య సత్యాలు & అష్టాంగ మార్గం).',
      'జైన ధర్మం — 24వ తీర్థంకరుడు వర్ధమాన మహావీరుడు (త్రిరత్నాలు & అహింస).',
      'అజీవిక శాఖ — మక్కలి గోశాలుడు (నియతివాదం / విధి సిద్ధాంతం).',
      'ఉపనిషత్తుల చింతన — అద్వైత/వేదాంత తాత్త్విక జ్ఞానం.',
      'చార్వాక / లోకాయత దర్శనం — ప్రత్యక్ష ప్రమాణాన్ని మాత్రమే నమ్మే భౌతికవాద తత్త్వం.'
    ]
  },
  urbanization: {
    titleEn: 'Urbanization (Second Urbanization in India)',
    titleTe: 'నగరీకరణ (భారతదేశంలో రెండవ పట్టణీకరణ)',
    cityImg: './images/indian_history/mahajanapada_era/mj_fortified_city.jpg',
    pointsEn: [
      'Well-planned cities protected by massive stone/mud-brick fortifications, deep moats and grand gateways.',
      'Rajagriha (Magadha), Vaishali (Vajji), Ujjain (Avanti), Taxila (Gandhara), Shravasti (Kosala) and Kashi were premier urban centres.',
      'Development of paved roads, bustling markets (Nigamas), royal warehouses, ring-wells and craft quarters.'
    ],
    pointsTe: [
      'భారీ కోట గోడలు, లోతైన కందకాలు మరియు ప్రవేశ ద్వారాలతో ప్రణాళికాబద్ధంగా నిర్మించబడిన నగరాలు.',
      'రాజగృహ (మగధ), వైశాలి (వజ్జి), ఉజ్జయిని (అవంతి), తక్షశిల (గాంధార), శ్రావస్తి (కోసల) మరియు కాశీ ప్రధాన మహానగరాలుగా విలసిల్లాయి.',
      'రహదారులు, వాణిజ్య సంతలు (నిగమాలు), గిడ్డంగులు, రింగ్-వెల్స్ (బావులు) మరియు చేతివృత్తుల వాడల అభివృద్ధి.'
    ]
  },
  importantRulers: {
    titleEn: 'Important Rulers of the Mahajanapada Era',
    titleTe: 'మహాజనపద యుగ ప్రముఖ పాలకులు',
    rulerImg: './images/indian_history/mahajanapada_era/mj_chanakya_ruler.jpg',
    rulers: [
      {
        nameEn: 'Bimbisara (Magadha – Haryanka Dynasty)',
        nameTe: 'బింబిసారుడు (మగధ — హర్యాంక వంశం)',
        descEn: 'First powerful ruler of Magadha; annexed Anga, built matrimonial alliances with Kosala, Vaishali & Madra, and patronized Gautama Buddha.',
        descTe: 'మగధ తొలి శక్తివంతమైన రాజు; అంగ రాజ్యాన్ని జయించాడు, వివాహ సంబంధాల ద్వారా రాజ్యాన్ని బలోపేతం చేశాడు మరియు బుద్ధుని సమకాలికుడు.'
      },
      {
        nameEn: 'Ajatashatru (Magadha – Haryanka Dynasty)',
        nameTe: 'అజాతశత్రువు (మగధ — హర్యాంక వంశం)',
        descEn: 'Conquered Kashi and the Vajji (Videha/Lichchhavi) confederacy using war engines (Rathamusala & Mahashilakantaka); patron of First Buddhist Council.',
        descTe: 'రథముసల, మహాశిలాకంటక అనే నూతన ఆయుధాలతో వజ్జి గణరాజ్య సమైక్యను జయించాడు; మొదటి బౌద్ధ సంగీతికి పోషకుడు.'
      },
      {
        nameEn: 'Prasenajit / Pasenadi (Kosala)',
        nameTe: 'ప్రసేనజిత్తు (కోసల రాజ్యం)',
        descEn: 'Illustrious king of Kosala (capital Shravasti), educated at Taxila and a devoted contemporary follower of Gautama Buddha.',
        descTe: 'కోసల రాజ్య ప్రసిద్ధ పాలకుడు (రాజధాని శ్రావస్తి); తక్షశిలలో విద్యాభ్యాసం చేశాడు మరియు బుద్ధుని సమకాలికుడు.'
      },
      {
        nameEn: 'Udayin / Udayabhadra (Magadha)',
        nameTe: 'ఉదయిన్ (మగధ)',
        descEn: 'Founded and shifted the Magadhan capital from Rajagriha to Pataliputra (Kusumapura) at the strategic confluence of the Ganga and Son rivers.',
        descTe: 'గంగా-సోన్ నదుల సంగమ ప్రదేశంలో "పాటలీపుత్రం" నగరాన్ని నిర్మించి మగధ రాజధానిని రాజగృహ నుండి పాటలీపుత్రానికి మార్చాడు.'
      },
      {
        nameEn: 'Chandragupta Maurya (Magadha)',
        nameTe: 'చంద్రగుప్త మౌర్యుడు (మగధ)',
        descEn: 'With Acharya Chanakya’s guidance, overthrew the Nanda Dynasty, united the Mahajanapadas and founded the pan-Indian Maurya Empire (322 BCE).',
        descTe: 'ఆచార్య చాణక్యుని మార్గదర్శకత్వంలో నంద వంశాన్ని అంతం చేసి, మహాజనపదాలను ఏకం చేసి మౌర్య సామ్రాజ్యాన్ని (క్రీ.పూ. 322) స్థాపించాడు.'
      }
    ]
  },
  decline: {
    titleEn: 'Decline of Independent Mahajanapadas & Rise of Magadha',
    titleTe: 'మహాజనపదాల ముగింపు & మగధ సామ్రాజ్య ఆధిపత్యం',
    warriorImg: './images/indian_history/mahajanapada_era/mj_warrior.jpg',
    pointsEn: [
      'Frequent interstate wars and rivalries among the 16 kingdoms (eventually narrowing down to 4 major powers: Magadha, Kosala, Vatsa, Avanti).',
      'Expansionist policy and unmatched strategic advantages of Magadha (rich Chota Nagpur iron ore deposits, alluvial Gangetic plains, river transport & forest elephants).',
      'Culminated in the rise of the Maurya Empire under Chandragupta Maurya in 322 BCE, marking the gradual end of independent Mahajanapadas and the birth of imperial India.'
    ],
    pointsTe: [
      '16 మహాజనపదాల మధ్య ఆధిపత్యం కోసం నిరంతర యుద్ధాలు జరిగి చివరకు 4 ప్రధాన శక్తులుగా (మగధ, కోసల, వత్స, అవంతి) మిగిలాయి.',
      'మగధ సామ్రాజ్య విస్తరణ విధానం మరియు భౌగోళిక అనుకూలతలు (ఇనుప గనులు, సారవంతమైన గంగా మైదానం, నదీ రవాణా, అటవీ గజబలం).',
      'క్రీ.పూ. 322లో చంద్రగుప్త మౌర్యుని ఆధ్వర్యంలో మౌర్య సామ్రాజ్య ఆవిర్భావంతో స్వతంత్ర మహాజనపదాల యుగం ముగిసి అఖిల భారత సామ్రాజ్య యుగం మొదలైంది.'
    ]
  }
};

// -------------------------------------------------------------
// EUROPEANS ARRIVE IN INDIA DATASET (FOR INTERACTIVE POPUP)
// -------------------------------------------------------------
export const EUROPEANS_ARRIVAL_DETAILS = {
  titleEn: 'EUROPEANS ARRIVE IN INDIA (1498 – 1731 CE)',
  titleTe: 'భారతదేశంలో యూరోపియన్ల రాక (క్రీ.శ. 1498 – 1731)',
  subtitleEn: 'The Beginning of a New Era — Maritime Trade, Settlements & Colonial Foundations',
  subtitleTe: 'ఒక నూతన శకానికి నాంది — సముద్ర వాణిజ్యం, వర్తక స్థావరాలు & వలస పాలన ఆరంభం',
  introEn: 'In the 15th century, European countries started coming to India by sea in search of trade, wealth and new lands. Their arrival changed the political, economic and social life of India.',
  introTe: '15వ శతాబ్దం చివరిలో యూరోపియన్ దేశాలు వ్యాపారం, సంపద మరియు నూతన భూభాగాల అన్వేషణలో సముద్ర మార్గాన భారతదేశానికి రావడం ప్రారంభించాయి. వారి రాక భారతదేశ రాజకీయ, ఆర్థిక మరియు సామాజిక జీవనాన్ని సమూలంగా మార్చివేసింది.',
  posterImg: './images/indian_history/europeans_arrival/europeans_arrive_poster.jpg',
  caravelShipImg: './images/indian_history/europeans_arrival/caravel_ship.jpg',
  compassIndiaMapImg: './images/indian_history/europeans_arrival/compass_india_map.jpg',
  spicesSilkCrossImg: './images/indian_history/europeans_arrival/spices_silk_cross.jpg',
  seaRouteMapImg: './images/indian_history/europeans_arrival/sea_route_map.jpg',
  coastalSettlementsImg: './images/indian_history/europeans_arrival/coastal_settlements.jpg',
  britishSoldierImg: './images/indian_history/europeans_arrival/british_soldier.jpg',
  globeAndBooksImg: './images/indian_history/europeans_arrival/globe_and_books.jpg',
  treasureChestImg: './images/indian_history/europeans_arrival/treasure_chest.jpg',
  arrivalTimeline: [
    {
      year: '1498',
      yearTe: 'క్రీ.శ. 1498',
      nameEn: 'Vasco da Gama (Portugal)',
      nameTe: 'వాస్కోడిగామా (పోర్చుగల్)',
      flag: '🇵🇹',
      color: '#C62828',
      bgColor: '#FFEBEE',
      borderColor: '#EF9A9A',
      descEn: 'He was the first European to reach India by sea. He reached Calicut (Kozhikode) in Kerala on 20 May 1498 (welcomed by King Zamorin).',
      descTe: 'సముద్ర మార్గాన భారతదేశానికి చేరుకున్న తొలి యూరోపియన్. ఇతడు మే 20, 1498న కేరళలోని కాలికట్ (కోజికోడ్) తీరానికి చేరుకున్నాడు (జామొరిన్ రాజు స్వాగతించాడు).'
    },
    {
      year: '1500',
      yearTe: 'క్రీ.శ. 1500',
      nameEn: 'Pedro Álvares Cabral (Portugal)',
      nameTe: 'పెడ్రో అల్వారెస్ కాబ్రల్ (పోర్చుగల్)',
      flag: '🇵🇹',
      color: '#E65100',
      bgColor: '#FFF3E0',
      borderColor: '#FFCC80',
      descEn: 'Reached Calicut in April 1500 and established friendly relations and early trading posts for spice trade.',
      descTe: 'ఏప్రిల్ 1500లో కాలికట్ చేరుకుని వాణిజ్యం కొరకు స్నేహపూర్వక సంబంధాలను, తొలి వర్తక కేంద్రాన్ని ఏర్పరిచాడు.'
    },
    {
      year: '1600',
      yearTe: 'క్రీ.శ. 1600',
      nameEn: 'British East India Company (England)',
      nameTe: 'బ్రిటిష్ ఈస్టిండియా కంపెనీ (ఇంగ్లాండ్)',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      color: '#2E7D32',
      bgColor: '#E8F5E9',
      borderColor: '#A5D6A7',
      descEn: 'Queen Elizabeth I granted a Royal Charter on 31 Dec 1600 to trade in the East. Captain William Hawkins was the first Englishman to reach India (Surat / Jahangir’s court) in 1608.',
      descTe: 'ఇంగ్లాండ్ రాణి ఎలిజబెత్-I డిసెంబర్ 31, 1600న తూర్పు దేశాలతో వ్యాపారానికి రాజశాసనం (Charter) జారీ చేసింది. 1608లో కెప్టెన్ విలియం హాకిన్స్ భారతదేశానికి (జహంగీర్ దర్బారుకు) చేరిన తొలి ఆంగ్లేయుడు.'
    },
    {
      year: '1602',
      yearTe: 'క్రీ.శ. 1602',
      nameEn: 'Dutch East India Company (Netherlands)',
      nameTe: 'డచ్ ఈస్టిండియా కంపెనీ (నెదర్లాండ్స్ / హాలండ్)',
      flag: '🇳🇱',
      color: '#1565C0',
      bgColor: '#E3F2FD',
      borderColor: '#90CAF9',
      descEn: 'The Dutch came for spice and textile trade and established their first factory in India at Masulipatnam (Machilipatnam, Andhra Pradesh) in 1605.',
      descTe: 'డచ్ వారు వ్యాపారం కోసం వచ్చి క్రీ.శ. 1605లో ఆంధ్రప్రదేశ్‌లోని మచిలీపట్నం (మసులీపట్నం) వద్ద తమ తొలి వర్తక స్థావరాన్ని (Factory) స్థాపించారు.'
    },
    {
      year: '1664',
      yearTe: 'క్రీ.శ. 1664',
      nameEn: 'French East India Company (France)',
      nameTe: 'ఫ్రెంచ్ ఈస్టిండియా కంపెనీ (ఫ్రాన్స్)',
      flag: '🇫🇷',
      color: '#6A1B9A',
      bgColor: '#F3E5F5',
      borderColor: '#CE93D8',
      descEn: 'Colbert, the finance minister of King Louis XIV of France, established this company. They set up their first settlement at Surat in 1668 and later made Pondicherry their headquarters.',
      descTe: 'ఫ్రాన్స్ ఆర్థిక మంత్రి కోల్‌బర్ట్ (Colbert) ఈ కంపెనీని స్థాపించాడు. వీరు 1668లో సూరత్‌లో తొలి స్థావరాన్ని, ఆ తర్వాత పాండిచ్చేరిలో ప్రధాన కేంద్రాన్ని ఏర్పరుచుకున్నారు.'
    },
    {
      year: '1731',
      yearTe: 'క్రీ.శ. 1731',
      nameEn: 'Danish East India Company (Denmark)',
      nameTe: 'డేనిష్ ఈస్టిండియా కంపెనీ (డెన్మార్క్)',
      flag: '🇩🇰',
      color: '#AD1457',
      bgColor: '#FCE4EC',
      borderColor: '#F48FB1',
      descEn: 'The Danes came for trade and established their key settlements at Tranquebar (Tharangambadi, Tamil Nadu) and Serampore (Bengal).',
      descTe: 'డెన్మార్క్ వారు వాణిజ్యం కోసం వచ్చి తమిళనాడులోని ట్రాంకెబార్ (తరంగంబాడి) మరియు బెంగాల్‌లోని శ్రీరాంపూర్ (సెరాంపూర్) వద్ద తమ స్థావరాలను ఏర్పరిచారు.'
    }
  ],
  reasonsEn: [
    'To find a direct sea route to India (bypassing Ottoman-controlled land routes).',
    'To trade in prized Indian spices (black pepper, cardamom, cinnamon), silk, fine cotton, indigo and other goods.',
    'To acquire immense wealth and expand their empires and kingdoms.',
    'To spread Christianity in the East.',
    'To defeat their rival European countries in maritime trade and monopoly.'
  ],
  reasonsTe: [
    'భారతదేశానికి నేరుగా నూతన సముద్ర మార్గాన్ని కనుగొనడం.',
    'సుగంధ ద్రవ్యాలు (మిరియాలు, యాలకులు, దాల్చినచెక్క), పట్టు, సన్నని పత్తి వస్త్రాలు, నీలిమందు మొదలైన వస్తువుల వాణిజ్యం చేయడం.',
    'అపార సంపదను ఆర్జించడం మరియు తమ రాజ్యాలను విస్తరించుకోవడం.',
    'క్రైస్తవ మతాన్ని ప్రచారం చేయడం.',
    'వాణిజ్య రంగంలో తమ ప్రత్యర్థి యూరోపియన్ దేశాలను ఓడించి గుత్తాధిపత్యం సాధించడం.'
  ],
  settlements: [
    {
      powerEn: 'Portuguese',
      powerTe: 'పోర్చుగీసు వారు (Portuguese)',
      flag: '🇵🇹',
      placesEn: 'Goa, Cochin (Kochi), Daman, Diu',
      placesTe: 'గోవా (ప్రధాన రాజధాని), కొచ్చిన్, డామన్, డయ్యూ'
    },
    {
      powerEn: 'British',
      powerTe: 'బ్రిటిష్ వారు (British)',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      placesEn: 'Surat, Madras (Chennai), Bombay (Mumbai), Calcutta (Kolkata)',
      placesTe: 'సూరత్, మద్రాసు (చెన్నై), బొంబాయి (ముంబై), కలకత్తా (కోల్‌కతా)'
    },
    {
      powerEn: 'Dutch',
      powerTe: 'డచ్ వారు (Dutch)',
      flag: '🇳🇱',
      placesEn: 'Pulicat, Nagapattinam, Cochin, Masulipatnam',
      placesTe: 'పులికాట్, నాగపట్నం, కొచ్చిన్, మచిలీపట్నం'
    },
    {
      powerEn: 'French',
      powerTe: 'ఫ్రెంచ్ వారు (French)',
      flag: '🇫🇷',
      placesEn: 'Pondicherry (Puducherry), Chandernagore, Mahe, Karaikal, Yanam',
      placesTe: 'పాండిచ్చేరి (పుదుచ్చేరి), చందర్‌నగర్, మాహే, కారైకాల్, యానాం'
    },
    {
      powerEn: 'Danish',
      powerTe: 'డేనిష్ వారు (Danish)',
      flag: '🇩🇰',
      placesEn: 'Tranquebar (Tharangambadi), Serampore (Frederiksnagore)',
      placesTe: 'ట్రాంకెబార్ (తరంగంబాడి - తమిళనాడు), శ్రీరాంపూర్ (సెరాంపూర్ - బెంగాల్)'
    }
  ],
  impactsEn: [
    'Maritime trade increased rapidly and new goods and crops came to India.',
    'Traditional Indian economy and indigenous weavers/artisans were severely affected.',
    'European trading companies slowly intervened in Indian internal politics and succession disputes.',
    'Intense power struggles and wars (such as the Carnatic Wars, Battle of Plassey & Battle of Wandiwash) took place among European powers in India.',
    'Finally, the British defeated their rivals and became the paramount rulers of India.'
  ],
  impactsTe: [
    'సముద్ర వాణిజ్యం పెరిగింది మరియు భారతదేశానికి కొత్త వస్తువులు, పంటలు వచ్చాయి.',
    'భారతీయ సంప్రదాయ ఆర్థిక వ్యవస్థ మరియు చేతివృత్తుల పరిశ్రమ తీవ్రంగా దెబ్బతిన్నాయి.',
    'యూరోపియన్ వ్యాపార కంపెనీలు నెమ్మదిగా భారతీయ రాజుల అంతర్గత రాజకీయాలలో జోక్యం చేసుకున్నాయి.',
    'భారతదేశంలో యూరోపియన్ దేశాల మధ్య ఆధిపత్య పోరు (కర్ణాటక యుద్ధాలు, ప్లాసీ, వందవాసి యుద్ధాలు) జరిగింది.',
    'చివరకు బ్రిటిష్ వారు ఇతర యూరోపియన్లను ఓడించి భారతదేశ పాలకులుగా మారారు.'
  ],
  pointsToRememberEn: [
    'Vasco da Gama was the first European to reach India by sea (20 May 1498 at Calicut).',
    'The Portuguese (under Alfonso de Albuquerque) were the first to establish territorial rule in Goa in 1510 CE.',
    'The main aim of all Europeans was trade first, and then political dominance ("Flag followed the Trade").',
    'The arrival of Europeans marked the beginning of colonial rule in India.'
  ],
  pointsToRememberTe: [
    'భారతదేశానికి సముద్ర మార్గాన చేరుకున్న తొలి యూరోపియన్ వాస్కోడిగామా (మే 20, 1498 - కాలికట్).',
    'క్రీ.శ. 1510లో గోవాలో తమ పాలనను స్థాపించిన తొలి యూరోపియన్లు పోర్చుగీసు వారు (అల్బుకర్క్).',
    'యూరోపియన్లందరి ప్రధాన లక్ష్యం మొదట వ్యాపారం, ఆపై రాజకీయ ఆధిపత్యం ("వర్తకం వెనుక జెండా").',
    'యూరోపియన్ల రాక భారతదేశంలో వలస పాలనకు (Colonial Rule) నాంది పలికింది.'
  ],
  footerQuoteEn: 'Their arrival was not just a journey across the seas, but the beginning of a change in India’s history.',
  footerQuoteTe: 'వారి రాక కేవలం సముద్రాల మీదుగా సాగిన ప్రయాణం మాత్రమే కాదు, భారతదేశ చరిత్రను మలుపు తిప్పిన మార్పునకు ఆరంభం.',
  frenchAdvent: {
    titleEn: 'FRENCH – ADVENT OF EUROPEANS IN INDIA 🇫🇷',
    titleTe: 'భారతదేశంలో ఫ్రెంచ్ వారి ఆగమనం & కర్ణాటక యుద్ధాలు 🇫🇷',
    posterImg: './images/indian_history/europeans_arrival/french_advent_poster.jpg',
    frenchShipImg: './images/indian_history/europeans_arrival/french_ship.jpg',
    pondicherryPortImg: './images/indian_history/europeans_arrival/french_pondicherry_port.jpg',
    tradeGoodsImg: './images/indian_history/europeans_arrival/french_trade_goods.jpg',
    settlementsMapImg: './images/indian_history/europeans_arrival/french_settlements_map.jpg',
    politicalAmbitionsImg: './images/indian_history/europeans_arrival/french_political_ambitions.jpg',
    carnaticBattle1Img: './images/indian_history/europeans_arrival/french_carnatic_battle_1.jpg',
    carnaticBattle2Img: './images/indian_history/europeans_arrival/french_carnatic_battle_2.jpg',
    declineFortImg: './images/indian_history/europeans_arrival/french_decline_fort.jpg',
    arrivalAndEstablishmentEn: [
      '1664 CE – Formation of the French East India Company (Compagnie des Indes Orientales) under Jean-Baptiste Colbert (Minister to King Louis XIV).',
      '1668 CE – First French trading factory established at Surat by François Caron.',
      '1674 CE – Establishment of Pondicherry (Puducherry) by François Martin, which became the nerve centre of French power in India.'
    ],
    arrivalAndEstablishmentTe: [
      'క్రీ.శ. 1664 – ఫ్రాన్స్ రాజు లూయీ-XIV ఆర్థిక మంత్రి కోల్‌బర్ట్ ఆధ్వర్యంలో "ఫ్రెంచ్ ఈస్టిండియా కంపెనీ" స్థాపన.',
      'క్రీ.శ. 1668 – ఫ్రాంకోయిస్ కరోన్ ఆధ్వర్యంలో సూరత్‌లో తొలి ఫ్రెంచ్ వర్తక స్థావరం ఏర్పాటు.',
      'క్రీ.శ. 1674 – ఫ్రాంకోయిస్ మార్టిన్ చేత "పాండిచ్చేరి" (పుదుచ్చేరి) స్థాపన; ఇది భారతదేశంలో ఫ్రెంచ్ వారి ప్రధాన రాజధానిగా మారింది.'
    ],
    keyAspects: {
      tradeEn: 'Spices, silk, fine cotton textiles, ivory and luxury goods exported across Europe.',
      tradeTe: 'సుగంధ ద్రవ్యాలు, పట్టు, మస్లిన్ వస్త్రాలు, దంతం మరియు విలువైన వస్తువుల వాణిజ్యం.',
      settlementsListEn: ['Pondicherry (Headquarters)', 'Mahe (Malabar Coast)', 'Karaikal (Coromandel Coast)', 'Chandernagore (Bengal)', 'Yanam (Andhra Coast)'],
      settlementsListTe: ['పాండిచ్చేరి (ప్రధాన రాజధాని)', 'మాహే (మలబార్ తీరం - కేరళ)', 'కారైకాల్ (కోరమాండల్ తీరం - తమిళనాడు)', 'చందర్‌నగర్ (బెంగాల్)', 'యానాం (ఆంధ్ర తీరం)'],
      politicalEn: 'Under Governor Joseph François Dupleix, the French pioneered the strategy of intervening in Indian succession disputes (Hyderabad & Carnatic) to build political empire.',
      politicalTe: 'గవర్నర్ డూప్లే (Dupleix) నేతృత్వంలో భారతీయ రాజుల అంతర్గత వారసత్వ తగాదాలలో (హైదరాబాద్ & కర్ణాటక నవాబుల) జోక్యం చేసుకుని రాజకీయ ఆధిపత్యానికి ప్రయత్నించారు.'
    },
    majorBattles: {
      subtitleEn: 'Carnatic Wars (1746 – 1763 CE): Anglo-French Struggle for Supremacy',
      subtitleTe: 'కర్ణాటక యుద్ధాలు (క్రీ.శ. 1746 – 1763): ఆంగ్లో-ఫ్రెంచ్ ఆధిపత్య పోరు',
      battles: [
        {
          year: '1749 CE',
          yearTe: 'క్రీ.శ. 1749',
          nameEn: 'Battle of Ambur (1749)',
          nameTe: 'అంబూర్ యుద్ధము (1749 - రెండవ కర్ణాటక యుద్ధం)',
          descEn: 'Combined forces of Dupleix (French), Chanda Sahib and Muzaffar Jung defeated and killed Nawab Anwaruddin of Carnatic at Ambur.',
          descTe: 'డూప్లే (ఫ్రెంచ్), చందా సాহেబ్, ముజఫర్ జంగ్‌ల ఉమ్మడి సైన్యం కర్ణాటక నవాబు అన్వరుద్దీన్‌ను అంబూర్ వద్ద ఓడించింది.'
        },
        {
          year: '1757 CE',
          yearTe: 'క్రీ.శ. 1757',
          nameEn: 'Battle of Plassey (1757) & Fall of Chandernagore',
          nameTe: 'ప్లాసీ యుద్ధము (1757) & చందర్‌నగర్ పతనం',
          descEn: 'Robert Clive captured the French settlement of Chandernagore and defeated Siraj-ud-Daulah (who had French artillery support) at Plassey.',
          descTe: 'రాబర్ట్ క్లైవ్ బెంగాల్‌లోని ఫ్రెంచ్ స్థావరమైన చందర్‌నగర్‌ను ఆక్రమించి, ఫ్రెంచ్ మద్దతు ఉన్న సిరాజుద్దౌలాను ప్లాసీ యుద్ధంలో ఓడించాడు.'
        },
        {
          year: '1760 CE',
          yearTe: 'క్రీ.శ. 1760',
          nameEn: 'Battle of Wandiwash (1760)',
          nameTe: 'వందవాసి యుద్ధము (Battle of Wandiwash - 1760)',
          descEn: 'Decisive battle of the Third Carnatic War: British General Sir Eyre Coote decisively defeated French General Count de Lally on 22 January 1760, shattering French political dreams in India.',
          descTe: 'మూడవ కర్ణాటక యుద్ధంలో నిర్ణయాత్మక పోరు: బ్రిటిష్ సేనాని సర్ ఐర్ కూట్ (Eyre Coote) ఫ్రెంచ్ సేనాని కౌంట్ డి లాలీని చిత్తుగా ఓడించి భారత్‌లో ఫ్రెంచ్ రాజకీయ ఆధిపత్యానికి తెరదించాడు.'
        }
      ]
    },
    declineAndEndEn: [
      '1763 CE – Treaty of Paris: Ended the Third Carnatic War (Seven Years’ War); Pondicherry and other enclaves were returned to France only as unfortified trading posts (loss of political & military territories).',
      '1760s – 1840s – Gradual commercial and political decline under British hegemony across India.',
      '1795 – 1815 CE – Repeated British occupation of French enclaves during the French Revolutionary and Napoleonic Wars.'
    ],
    declineAndEndTe: [
      'క్రీ.శ. 1763 – పారిస్ ఒప్పందం (Treaty of Paris): మూడవ కర్ణాటక యుద్ధం ముగిసింది; ఫ్రెంచ్ వారికి పాండిచ్చేరి మొదలైన స్థావరాలు తిరిగి ఇవ్వబడినప్పటికీ సైనిక కోటలు నిర్మించరాదని, కేవలం వ్యాపారానికే పరిమితం కావాలని షరతు విధించబడింది.',
      'క్రీ.శ. 1760–1840 దశకాలు – బ్రిటిష్ ఆధిపత్యం ముందు ఫ్రెంచ్ వారి ప్రభావం క్రమంగా క్షీణించింది.',
      'క్రీ.శ. 1795–1815 – నెపోలియన్ యుద్ధాల కాలంలో భారతదేశంలోని ఫ్రెంచ్ స్థావరాలను బ్రిటిష్ వారు ఆక్రమించారు.'
    ]
  }
};

export const BRITISH_CONSOLIDATION_DETAILS = {
  titleEn: 'Consolidation of British Power in India (NCERT Summary)',
  titleTe: 'భారతదేశంలో బ్రిటిష్ అధికారం సుస్థిరీకరణ (NCERT సారాంశం)',
  subtitleEn: 'From Trading Company to Paramount Colonial Power (1757 – 1856 CE)',
  subtitleTe: 'వ్యాపార సంస్థ నుండి సార్వభౌమ వలస పాలన వరకు (క్రీ.శ. 1757 – 1856)',
  posterImg: './images/indian_history/british_consolidation/british_consolidation_poster.jpg',
  headerPalaceImg: './images/indian_history/british_consolidation/colonial_palace.jpg',
  headerArtilleryImg: './images/indian_history/british_consolidation/artillery_india_map.jpg',
  introEn: 'Between the Battle of Plassey (1757) and the annexation of Awadh (1856), the British East India Company systematically transformed itself from a commercial trading body into the paramount political and military power across the Indian subcontinent through decisive battles, diplomatic treaties, revenue systems, and annexation policies.',
  introTe: 'ప్లాసీ యుద్ధం (1757) నుండి అవధ్ విలీనం (1856) వరకు గల వందేళ్ల కాలంలో బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ నిర్ణయాత్మక యుద్ధాలు, దౌత్య ఒప్పందాలు, భూమిశిస్తు విధానాలు మరియు రాజ్య విలీన విధానాల ద్వారా ఒక సాధారణ వ్యాపార సంస్థ స్థాయి నుండి భారత ఉపఖండంపై తిరుగులేని రాజకీయ, సైనిక శక్తిగా ఎదిగింది.',
  battles: [
    {
      id: 'plassey',
      year: '1757 CE',
      yearTe: 'క్రీ.శ. 1757',
      titleEn: 'Battle of Plassey (1757)',
      titleTe: 'ప్లాసీ యుద్ధము (Battle of Plassey – 1757)',
      bannerColor: '#8B1E1E',
      img: './images/indian_history/british_consolidation/battle_of_plassey_1757.jpg',
      pointsEn: [
        'Fought between the British East India Company and Siraj-ud-Daulah (Nawab of Bengal).',
        'Robert Clive defeated Siraj-ud-Daulah (due to the conspiracy and betrayal of Mir Jafar).',
        'Marked the beginning of British political dominance in India.'
      ],
      pointsTe: [
        'బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ మరియు బెంగాల్ నవాబు సిరాజుద్దౌలా (Siraj-ud-Daulah) మధ్య జరిగింది.',
        'రాబర్ట్ క్లైవ్ (Robert Clive) సిరాజుద్దౌలాను ఓడించాడు (మీర్ జాఫర్ వెన్నుపోటు/కుట్ర కారణంగా).',
        'భారతదేశంలో బ్రిటిష్ రాజకీయ ఆధిపత్యానికి మరియు వలస పాలనకు ఇది పునాది వేసింది.'
      ]
    },
    {
      id: 'buxar',
      year: '1764 CE',
      yearTe: 'క్రీ.శ. 1764',
      titleEn: 'Battle of Buxar (1764)',
      titleTe: 'బక్సర్ యుద్ధము (Battle of Buxar – 1764)',
      bannerColor: '#0E5A36',
      img: './images/indian_history/british_consolidation/battle_of_buxar_1764.jpg',
      pointsEn: [
        'Fought between the British (led by Hector Munro) and the combined forces of Mir Qasim (Bengal), Shuja-ud-Daulah (Awadh), and Mughal Emperor Shah Alam II.',
        'British victory firmly strengthened their military and political control in India.',
        'Diwani Rights (right to collect revenue) of Bengal, Bihar, and Orissa were granted to the British in 1765 (Treaty of Allahabad).'
      ],
      pointsTe: [
        'బ్రిటిష్ సైన్యానికి (హెక్టర్ మన్రో నేతృత్వంలో) మరియు మీర్ ఖాసిం (బెంగాల్), షుజా-ఉద్-దౌలా (అవధ్), మొఘల్ చక్రవర్తి షా ఆలం II ల కూటమికి మధ్య జరిగింది.',
        'ఈ నిర్ణయాత్మక విజయం భారతదేశంలో బ్రిటిష్ వారి నిజమైన సైనిక, రాజకీయ ఆధిపత్యాన్ని సుస్థిరం చేసింది.',
        'క్రీ.శ. 1765 అలహాబాద్ ఒప్పందం ప్రకారం బెంగాల్, బీహార్, ఒరిస్సా ప్రాంతాల దివానీ హక్కులు (పన్ను వసూలు హక్కులు) బ్రిటిష్ వారికి లభించాయి.'
      ]
    }
  ],
  policies: [
    {
      id: 'subsidiary_alliance',
      year: '1798 CE',
      yearTe: 'క్రీ.శ. 1798',
      titleEn: 'Subsidiary Alliance (1798)',
      titleTe: 'సైనిక సహకార పద్ధతి (Subsidiary Alliance – 1798)',
      headerColor: '#3B1E6D',
      img: './images/indian_history/british_consolidation/subsidiary_alliance_shield.jpg',
      pointsEn: [
        'Introduced by Lord Wellesley.',
        'Indian rulers had to maintain British troops in their territories at their own expense.',
        'Could not form alliances or wage war against any other state without British permission.',
        'Accepted a British Resident at their royal court.',
        'Helped the British expand their empire and control without direct war costs.'
      ],
      pointsTe: [
        'లార్డ్ వెల్లస్లీ (Lord Wellesley) దీనిని ప్రవేశపెట్టాడు (తొలిసారిగా 1798లో హైదరాబాద్ నిజాం సంతకం చేశాడు).',
        'భారతీయ రాజులు తమ రాజ్యంలో బ్రిటిష్ సైన్యాన్ని ఉంచుకుని, దాని పోషణ ఖర్చులను వారే భరించాలి.',
        'బ్రిటిష్ వారి అనుమతి లేకుండా ఇతర రాజ్యాలతో పొత్తులు పెట్టుకోరాదు లేదా యుద్ధాలు చేయరాదు.',
        'తమ రాజదర్బారులో ఒక బ్రిటిష్ రెసిడెంట్ (British Resident) ను నియమించుకోవాలి.',
        'భారతదేశంలో బ్రిటిష్ సామ్రాజ్య విస్తరణకు ఇది అత్యంత కీలక సాధనంగా తోడ్పడింది.'
      ]
    },
    {
      id: 'doctrine_of_lapse',
      year: '1848 CE',
      yearTe: 'క్రీ.శ. 1848',
      titleEn: 'Doctrine of Lapse (1848)',
      titleTe: 'రాజ్య సంక్రమణ సిద్ధాంతం (Doctrine of Lapse – 1848)',
      headerColor: '#C84B11',
      img: './images/indian_history/british_consolidation/doctrine_of_lapse_scroll.jpg',
      pointsEn: [
        'Introduced by Lord Dalhousie.',
        'Indian princely states without a natural male biological heir could be annexed directly by the British (adopted sons were denied the throne).',
        'Examples of annexed states: Satara (1848), Sambalpur & Jaitpur (1849), Udaipur (1852), Jhansi (1853), and Nagpur (1854).'
      ],
      pointsTe: [
        'లార్డ్ డల్హౌసీ (Lord Dalhousie) ఈ విధానాన్ని ప్రవేశపెట్టాడు.',
        'సహజ పుత్ర సంతానం (వారసుడు) లేని భారతీయ స్వదేశీ రాజుల దత్తపుత్రులకు రాజ్యాధికారం నిరాకరించి, ఆ రాజ్యాలను బ్రిటిష్ సామ్రాజ్యంలో విలీనం చేసుకున్నారు.',
        'ఉదాహరణలు: సతారా (1848 - తొలి రాజ్యం), ఝాన్సీ (Jhansi), నాగ్‌పూర్ (Nagpur), సంబల్‌పూర్, ఉదయ్‌పూర్.'
      ]
    },
    {
      id: 'permanent_settlement',
      year: '1793 CE',
      yearTe: 'క్రీ.శ. 1793',
      titleEn: 'Permanent Settlement (1793)',
      titleTe: 'శాశ్వత భూమిశిస్తు విధానం (Permanent Settlement – 1793)',
      headerColor: '#0A4B8F',
      img: './images/indian_history/british_consolidation/permanent_settlement_bag.jpg',
      pointsEn: [
        'Introduced by Lord Cornwallis in 1793 (in Bengal, Bihar, and Orissa).',
        'Zamindars were recognized as hereditary landowners responsible for revenue collection.',
        'Fixed land revenue (10/11th share) payable permanently to the British East India Company.'
      ],
      pointsTe: [
        'లార్డ్ కారన్ వాలీస్ (Lord Cornwallis) క్రీ.శ. 1793లో (బెంగాల్, బీహార్, ఒరిస్సాలలో) ప్రవేశపెట్టాడు.',
        'జమీందారులను భూమికి వంశపారంపర్య యజమానులుగా గుర్తించి పన్ను వసూలు బాధ్యత అప్పగించారు.',
        'బ్రిటిష్ కంపెనీకి చెల్లించాల్సిన భూమిశిస్తును శాశ్వతంగా నిర్ణయించారు (వసూలు చేసిన శిస్తులో 10/11 వంతు కంపెనీకి, 1/11 వంతు జమీందారుకు).'
      ]
    }
  ],
  regionalWars: [
    {
      id: 'anglo_mysore',
      period: '1767 – 1799 CE',
      periodTe: 'క్రీ.శ. 1767 – 1799',
      titleEn: 'Anglo-Mysore Wars (1767–1799)',
      titleTe: 'ఆంగ్లో-మైసూర్ యుద్ధాలు (Anglo-Mysore Wars: 1767–1799)',
      headerColor: '#0C3B5E',
      img: './images/indian_history/british_consolidation/tipu_sultan.jpg',
      captionEn: 'Tipu Sultan (Tiger of Mysore)',
      captionTe: 'టిప్పు సుల్తాన్ (మైసూర్ పులి)',
      pointsEn: [
        'Four wars were fought between the British and the Kingdom of Mysore between 1767 and 1799.',
        'Main rulers of Mysore: Hyder Ali and his son Tipu Sultan.',
        'Tipu Sultan died heroically defending Srirangapatna in the Fourth Anglo-Mysore War (1799).',
        'Mysore came under British control (restored to the Wadiyar dynasty under Subsidiary Alliance).'
      ],
      pointsTe: [
        'క్రీ.శ. 1767 మరియు 1799 మధ్య బ్రిటిష్ వారికి, మైసూర్ రాజ్యానికి మధ్య 4 ఆంగ్లో-మైసూర్ యుద్ధాలు జరిగాయి.',
        'మైసూర్ ప్రధాన పాలకులు: హైదర్ అలీ (Hyder Ali) మరియు అతని కుమారుడు టిప్పు సుల్తాన్ (Tipu Sultan).',
        'నాలుగవ ఆంగ్లో-మైసూర్ యుద్ధంలో (1799) శ్రీరంగపట్నం కోటను రక్షిస్తూ టిప్పు సుల్తాన్ వీరమరణం పొందాడు.',
        'మైసూర్ రాజ్యం బ్రిటిష్ నియంత్రణలోకి (సైనిక సహకార పద్ధతి కింద ఒడయార్ వంశానికి) వచ్చింది.'
      ]
    },
    {
      id: 'anglo_maratha',
      period: '1775 – 1818 CE',
      periodTe: 'క్రీ.శ. 1775 – 1818',
      titleEn: 'Anglo-Maratha Wars (1775–1818)',
      titleTe: 'ఆంగ్లో-మరాఠా యుద్ధాలు (Anglo-Maratha Wars: 1775–1818)',
      headerColor: '#8B1E3F',
      img: './images/indian_history/british_consolidation/maratha_warrior.jpg',
      captionEn: 'Maratha Cavalry Warrior',
      captionTe: 'మరాఠా అশ্বిక యోధుడు',
      pointsEn: [
        'Three wars were fought between the British and the Maratha Confederacy between 1775 and 1818.',
        'The British decisively defeated the Marathas in the Third Anglo-Maratha War (1817–1818).',
        'Ended Maratha supremacy, abolished the Peshwaship, and established British dominance across India.'
      ],
      pointsTe: [
        'క్రీ.శ. 1775 మరియు 1818 మధ్య బ్రిటిష్ వారికి, మరాఠా సమాఖ్యకు మధ్య 3 ఆంగ్లో-మరాఠా యుద్ధాలు జరిగాయి.',
        'మూడవ ఆంగ్లో-మరాఠా యుద్ధంలో (1817–1818) బ్రిటిష్ వారు మరాఠాలను నిర్ణయాత్మకంగా ఓడించారు.',
        'దీనితో మరాఠా ఆధిపత్యం, పీష్వా పదవి అంతమై భారతదేశం అంతటా బ్రిటిష్ సార్వభౌమాధికారం స్థాపించబడింది.'
      ]
    }
  ],
  governorGenerals: [
    {
      nameEn: 'Warren Hastings',
      nameTe: 'వారన్ హేస్టింగ్స్ (Warren Hastings)',
      period: '1772 – 1785',
      periodTe: 'క్రీ.శ. 1772 – 1785',
      img: './images/indian_history/british_consolidation/gg_warren_hastings.jpg?v=2',
      color: '#1E3A8A',
      pointsEn: [
        'First Governor-General of Bengal (Regulating Act of 1773).',
        'Ended Dual Government in Bengal; introduced judicial and revenue reforms.',
        'Founded the Asiatic Society of Bengal in 1784 (with Sir William Jones).'
      ],
      pointsTe: [
        'బెంగాల్ తొలి గవర్నర్-జనరల్ (1773 రెగ్యులేటింగ్ చట్టం ప్రకారం).',
        'బెంగాల్‌లో ద్వంద్వ పాలనను రద్దు చేసి, న్యాయ మరియు రెవెన్యూ సంస్కరణలు ప్రవేశపెట్టాడు.',
        'క్రీ.శ. 1784లో సర్ విలియం జోన్స్‌తో కలిసి కలకత్తాలో "ఆసియాటిక్ సొసైటీ" (Asiatic Society) స్థాపించాడు.'
      ]
    },
    {
      nameEn: 'Lord Cornwallis',
      nameTe: 'లార్డ్ కారన్ వాలీస్ (Lord Cornwallis)',
      period: '1786 – 1793',
      periodTe: 'క్రీ.శ. 1786 – 1793',
      img: './images/indian_history/british_consolidation/gg_cornwallis.jpg?v=2',
      color: '#14532D',
      pointsEn: [
        'Introduced the Permanent Settlement of Bengal (1793).',
        'Formulated the Cornwallis Code (separation of revenue and judicial administration).',
        'Reforms in Civil Services (Father of Indian Civil Services).'
      ],
      pointsTe: [
        'క్రీ.శ. 1793లో శాశ్వత భూమిశిస్తు విధానాన్ని (Permanent Settlement) ప్రవేశపెట్టాడు.',
        'కారన్ వాలీస్ కోడ్ (Cornwallis Code) ద్వారా న్యాయ, రెవెన్యూ పాలనను వేరు చేశాడు.',
        'సివిల్ సర్వీసులలో సంస్కరణలు తెచ్చాడు (భారత సివిల్ సర్వీసుల పితామహుడు).'
      ]
    },
    {
      nameEn: 'Lord Wellesley',
      nameTe: 'లార్డ్ వెల్లస్లీ (Lord Wellesley)',
      period: '1798 – 1805',
      periodTe: 'క్రీ.శ. 1798 – 1805',
      img: './images/indian_history/british_consolidation/gg_wellesley.jpg?v=2',
      color: '#9A3412',
      pointsEn: [
        'Introduced the Subsidiary Alliance System (1798).',
        'Defeated Tipu Sultan in the Fourth Anglo-Mysore War (1799).',
        'Expanded British territories extensively across India.'
      ],
      pointsTe: [
        'క్రీ.శ. 1798లో సైనిక సహకార పద్ధతిని (Subsidiary Alliance) ప్రవేశపెట్టాడు.',
        'నాలుగవ ఆంగ్లో-మైసూర్ యుద్ధంలో (1799) టిప్పు సుల్తాన్‌ను ఓడించాడు.',
        'భారతదేశంలో బ్రిటిష్ భూభాగాలను విస్తృతంగా విస్తరించాడు.'
      ]
    },
    {
      nameEn: 'Lord Hastings',
      nameTe: 'లార్డ్ హేస్టింగ్స్ (Lord Hastings)',
      period: '1813 – 1823',
      periodTe: 'క్రీ.శ. 1813 – 1823',
      img: './images/indian_history/british_consolidation/gg_lord_hastings.jpg?v=2',
      color: '#312E81',
      pointsEn: [
        'Defeated the Marathas in the Third Anglo-Maratha War (1817–1818).',
        'Ended Peshwa rule and crushed the Pindaris.',
        'Established British Paramountcy (supremacy) over most of India.'
      ],
      pointsTe: [
        'మూడవ ఆంగ్లో-మరాఠా యుద్ధంలో (1817–1818) మరాఠాలను ఓడించాడు.',
        'పీష్వా పాలనను రద్దు చేశాడు మరియు పిండారీలను అణచివేశాడు.',
        'భారతదేశం అంతటా బ్రిటిష్ సార్వభౌమాధికారాన్ని (Paramountcy) స్థాపించాడు.'
      ]
    },
    {
      nameEn: 'Lord William Bentinck',
      nameTe: 'లార్డ్ విలియం బెంటింక్ (Lord William Bentinck)',
      period: '1828 – 1835',
      periodTe: 'క్రీ.శ. 1828 – 1835',
      img: './images/indian_history/british_consolidation/gg_william_bentinck.jpg?v=2',
      color: '#0F766E',
      pointsEn: [
        'First Governor-General of India (Charter Act of 1833).',
        'Abolished Sati (1829) with the efforts of Raja Ram Mohan Roy.',
        'Suppressed Thuggee (with Colonel Sleeman) and promoted English Education (Macaulay Minute, 1835).'
      ],
      pointsTe: [
        'భారతదేశపు తొలి గవర్నర్-జనరల్ (1833 చార్టర్ చట్టం ప్రకారం).',
        'రాజా రామ్మోహన్ రాయ్ కృషితో 1829లో సతీసహగమనాన్ని (Sati) నిషేధించాడు.',
        'థగ్గులను (Thuggee) అణచివేశాడు మరియు 1835లో ఆంగ్ల విద్యను (మెకాలే నివేదిక) ప్రవేశపెట్టాడు.'
      ]
    },
    {
      nameEn: 'Lord Dalhousie',
      nameTe: 'లార్డ్ డల్హౌసీ (Lord Dalhousie)',
      period: '1848 – 1856',
      periodTe: 'క్రీ.శ. 1848 – 1856',
      img: './images/indian_history/british_consolidation/gg_dalhousie.jpg?v=2',
      color: '#881337',
      pointsEn: [
        'Introduced the Doctrine of Lapse (1848) and annexed several Indian states.',
        'Introduced Indian Railways (first train Bombay to Thane, 1853), Telegraph, and Postal reforms.',
        'Established Public Works Department (PWD) and Wood’s Despatch (1854) on education.'
      ],
      pointsTe: [
        'రాజ్య సంక్రమణ సిద్ధాంతాన్ని (Doctrine of Lapse - 1848) ప్రవేశపెట్టి అనేక రాజ్యాలను విలీనం చేసుకున్నాడు.',
        'భారతదేశంలో తొలి రైలు మార్గం (1853 - బొంబాయి నుండి థానే), టెలిగ్రాఫ్ మరియు తపాలా సంస్కరణలు ప్రవేశపెట్టాడు.',
        'ప్రజా పనుల శాఖ (PWD) మరియు విద్యా రంగంలో వుడ్స్ డిస్పాచ్ (1854) ప్రవేశపెట్టాడు.'
      ]
    }
  ],
  importantTimeline: [
    { year: '1757', labelEn: 'Battle of Plassey', labelTe: 'ప్లాసీ యుద్ధము', color: '#8B1E1E', icon: '⚔️' },
    { year: '1764', labelEn: 'Battle of Buxar', labelTe: 'బక్సర్ యుద్ధము', color: '#0E5A36', icon: '⚔️' },
    { year: '1765', labelEn: 'Diwani Rights', labelTe: 'దివానీ హక్కులు', color: '#B45309', icon: '📜' },
    { year: '1793', labelEn: 'Permanent Settlement', labelTe: 'శాశ్వత భూమిశిస్తు', color: '#1E3A8A', icon: '₹' },
    { year: '1798', labelEn: 'Subsidiary Alliance', labelTe: 'సైనిక సహకార పద్ధతి', color: '#3B1E6D', icon: '🤝' },
    { year: '1818', labelEn: 'Third Anglo-Maratha War Ends', labelTe: '3వ ఆంగ్లో-మరాఠా యుద్ధం ముగింపు', color: '#881337', icon: '🚩' },
    { year: '1829', labelEn: 'Abolition of Sati', labelTe: 'సతీసహగమన నిషేధం', color: '#0F766E', icon: '🪔' },
    { year: '1848', labelEn: 'Doctrine of Lapse', labelTe: 'రాజ్య సంక్రమణ సిద్ధాంతం', color: '#C84B11', icon: '👑' },
    { year: '1853', labelEn: 'First Railway', labelTe: 'తొలి రైలు మార్గం', color: '#1D4ED8', icon: '🚂' },
    { year: '1856', labelEn: 'Annexation of Awadh', labelTe: 'అవధ్ రాజ్య విలీనం', color: '#7F1D1D', icon: '🏛️' }
  ],
  quickRevision: [
    {
      icon: '⚔️',
      termEn: 'Plassey (1757)',
      termTe: 'ప్లాసీ యుద్ధం (1757)',
      descEn: 'Beginning of British Rule in India (Robert Clive defeated Siraj-ud-Daulah).',
      descTe: 'భారతదేశంలో బ్రిటిష్ పాలనకు నాంది (రాబర్ట్ క్లైవ్ సిరాజుద్దౌలాను ఓడించాడు).'
    },
    {
      icon: '⚔️',
      termEn: 'Buxar (1764)',
      termTe: 'బక్సర్ యుద్ధం (1764)',
      descEn: 'Diwani Rights (1765) gave the British financial and administrative control over Bengal, Bihar & Orissa.',
      descTe: 'దివానీ హక్కుల (1765) ద్వారా బ్రిటిష్ వారికి ఆర్థిక, పరిపాలనా నియంత్రణ లభించింది.'
    },
    {
      icon: '🤝',
      termEn: 'Subsidiary Alliance (1798)',
      termTe: 'సైనిక సహకార పద్ధతి (1798)',
      descEn: 'Introduced by Lord Wellesley — important diplomatic and military tool for British expansion.',
      descTe: 'లార్డ్ వెల్లస్లీ ప్రవేశపెట్టాడు — బ్రిటిష్ సామ్రాజ్య విస్తరణకు ప్రధాన ఆయుధం.'
    },
    {
      icon: '👑',
      termEn: 'Doctrine of Lapse (1848)',
      termTe: 'రాజ్య సంక్రమణ సిద్ధాంతం (1848)',
      descEn: 'Introduced by Lord Dalhousie — used to annex Indian states without a natural male heir (Satara, Jhansi, Nagpur).',
      descTe: 'లార్డ్ డల్హౌసీ ప్రవేశపెట్టాడు — వారసులు లేని భారతీయ రాజ్యాల విలీనానికి ఉపయోగించబడింది.'
    },
    {
      icon: '₹',
      termEn: 'Permanent Settlement (1793)',
      termTe: 'శాశ్వత భూమిశిస్తు విధానం (1793)',
      descEn: 'Introduced by Lord Cornwallis — fixed land revenue collected through hereditary Zamindars.',
      descTe: 'లార్డ్ కారన్ వాలీస్ ప్రవేశపెట్టాడు — జమీందారుల ద్వారా స్థిరమైన భూమిశిస్తు వసూలు.'
    }
  ]
};

export const MODERATE_PHASE_DETAILS = {
  titleEn: 'Freedom Movement: Moderate Phase (1885–1905)',
  titleTe: 'భారత స్వాతంత్ర్య ఉద్యమం: మితవాద యుగము (1885–1905)',
  subtitleEn: 'The Early Struggle Through Constitutional Methods',
  subtitleTe: 'రాజ్యాంగబద్ధమైన పద్ధతుల ద్వారా తొలి దశ జాతీయ పోరాటం',
  posterImg: './images/indian_history/moderate_phase/moderate_phase_poster.jpg',
  headerIncImg: './images/indian_history/moderate_phase/inc_session_header.jpg',
  headerPetitionImg: './images/indian_history/moderate_phase/petition_quill_flag.jpg',
  introEn: 'The period from 1885 to 1905 is often referred to as the Moderate Phase in Indian history. This was the early phase of the Indian National Congress (INC), where the leaders believed that they could bring about political and administrative reforms by working within the framework of British rule. Their approach was to seek reforms through peaceful means like discussions, petitions, and resolutions.',
  introTe: 'భారత స్వాతంత్ర్యోద్యమ చరిత్రలో క్రీ.శ. 1885 నుండి 1905 వరకు గల కాలాన్ని "మితవాద యుగము" (Moderate Phase) అని పిలుస్తారు. ఇది భారత జాతీయ కాంగ్రెస్ (INC) యొక్క తొలి దశ. బ్రిటిష్ పాలనా చట్రంలోనే ఉంటూ చర్చలు, వినతిపత్రాలు (Petitions), సమావేశాలు మరియు తీర్మానాల (Resolutions) వంటి శాంతియుత, రాజ్యాంగబద్ధమైన పద్ధతుల ద్వారా రాజకీయ మరియు పరిపాలనా సంస్కరణలు సాధించవచ్చని మితవాద నాయకులు విశ్వసించారు.',
  keyLeaders: [
    {
      nameEn: 'Dadabhai Naoroji',
      nameTe: 'దాదాభాయ్ నౌరోజీ (Dadabhai Naoroji)',
      img: './images/indian_history/moderate_phase/dadabhai_naoroji.jpg',
      pointsEn: [
        'Known for his "Drain of Wealth Theory" (in his book Poverty and Un-British Rule in India), which exposed the economic exploitation of India by Britain.',
        'Known as the "Grand Old Man of India" and was the first Indian to become a British MP (Member of Parliament).'
      ],
      pointsTe: [
        '"సంపద తరలింపు సిద్ధాంతం" (Drain of Wealth Theory) ద్వారా బ్రిటన్ భారతదేశాన్ని ఆర్థికంగా ఎలా దోచుకుంటుందో ప్రపంచానికి చాటిచెప్పారు ("Poverty and Un-British Rule in India" గ్రంథకర్త).',
        '"భారతదేశపు కురువృద్ధుడు" (Grand Old Man of India) గా ప్రసిద్ధి చెందారు మరియు బ్రిటిష్ పార్లమెంటుకు (MP) ఎన్నికైన తొలి భారతీయుడు.'
      ]
    },
    {
      nameEn: 'Gopal Krishna Gokhale',
      nameTe: 'గోపాలకృష్ణ గోఖలే (Gopal Krishna Gokhale)',
      img: './images/indian_history/moderate_phase/gopal_krishna_gokhale.jpg',
      pointsEn: [
        'Social reformer, educator, and prominent Moderate leader.',
        'Founded the "Servants of India Society" in 1905.',
        'Advocated political & social reforms, compulsory education, and poverty alleviation.',
        'Political Mentor of Mahatma Gandhi.'
      ],
      pointsTe: [
        'ప్రముఖ సంఘ సంస్కర్త, విద్యావేత్త మరియు మితవాద అగ్రనాయకుడు.',
        'క్రీ.శ. 1905లో "సర్వెంట్స్ ఆఫ్ ఇండియా సొసైటీ" (Servants of India Society) ని స్థాపించారు.',
        'రాజకీయ, సామాజిక సంస్కరణలు, ప్రాథమిక విద్య మరియు పేదరిక నిర్మూలనకై కృషి చేశారు.',
        'మహాత్మా గాంధీకి రాజకీయ గురువు (Mentor of Mahatma Gandhi).'
      ]
    },
    {
      nameEn: 'Surendranath Banerjee',
      nameTe: 'సురేంద్రనాథ్ బెనర్జీ (Surendranath Banerjee)',
      img: './images/indian_history/moderate_phase/surendranath_banerjee.jpg',
      pointsEn: [
        'Founded the Indian National Association in 1876 for political reforms & representation.',
        'Strong advocate of education, Indian languages, and national culture.',
        'Renowned journalist & nationalist; founder-editor of the newspaper "The Bengalee".',
        'Supported social reforms and women’s upliftment.'
      ],
      pointsTe: [
        'రాజకీయ సంస్కరణలు మరియు ప్రాతినిధ్యం కోసం క్రీ.శ. 1876లో "ఇండియన్ నేషనల్ అసోసియేషన్" స్థాపించారు.',
        'విద్య, భారతీయ భాషలు మరియు సంస్కృతి పరిరక్షణకు విశేష కృషి చేశారు.',
        'ప్రముఖ జర్నలిస్ట్ మరియు జాతీయవాది; "ది బెంగాలీ" (The Bengalee) పత్రిక సంపాదకులు.',
        'సామాజిక సంస్కరణలు మరియు స్త్రీల అభ్యున్నతికి మద్దతు ఇచ్చారు.'
      ]
    }
  ],
  atAGlance: [
    {
      icon: '📅',
      categoryEn: 'Time-Period',
      categoryTe: 'కాలపరిమితి (Time-Period)',
      detailsEn: '1885 – 1905 CE',
      detailsTe: 'క్రీ.శ. 1885 – 1905'
    },
    {
      icon: '👥',
      categoryEn: 'Key Leaders',
      categoryTe: 'ప్రధాన నాయకులు (Key Leaders)',
      detailsEn: 'Dadabhai Naoroji, Gopal Krishna Gokhale, Surendranath Banerjee, Pherozeshah Mehta',
      detailsTe: 'దాదాభాయ్ నౌరోజీ, గోపాలకృష్ణ గోఖలే, సురేంద్రనాథ్ బెనర్జీ, ఫిరోజ్‌షా మెహతా'
    },
    {
      icon: '🎯',
      categoryEn: 'Aims',
      categoryTe: 'లక్ష్యాలు (Aims)',
      detailsEn: 'Constitutional reforms, self-governance within the Empire, demand for Indian representation in legislative councils',
      detailsTe: 'రాజ్యాంగ సంస్కరణలు, స్వపరిపాలన, చట్టసభలలో భారతీయులకు ప్రాతినిధ్యం కల్పించడం'
    },
    {
      icon: '📝',
      categoryEn: 'Methods',
      categoryTe: 'అనుసరించిన పద్ధతులు (Methods)',
      detailsEn: 'Petitions, peaceful meetings, speeches, resolutions, and appeals to the British sense of justice (3Ps: Prayer, Petition, Protest)',
      detailsTe: 'వినతిపత్రాలు (Petitions), సభలు, ప్రసంగాలు, తీర్మానాలు మరియు బ్రిటిష్ వారి న్యాయబుద్ధికి విజ్ఞప్తి చేయడం'
    },
    {
      icon: '🛡️',
      categoryEn: 'Beliefs',
      categoryTe: 'విశ్వాసాలు (Beliefs)',
      detailsEn: 'Faith in British fairness and gradual political reforms through constitutional methods',
      detailsTe: 'బ్రిటిష్ వారి నిష్పాక్షికతపై నమ్మకం మరియు రాజ్యాంగ పద్ధతుల ద్వారా క్రమంగా సంస్కరణల సాధన'
    },
    {
      icon: '⭐',
      categoryEn: 'Major Events',
      categoryTe: 'ముఖ్య సంఘటనలు (Major Events)',
      detailsEn: '• Formation of Indian National Congress (INC) in 1885\n• Dadabhai Naoroji’s theory of the "Drain of Wealth"\n• Demand for representation in Legislative Councils',
      detailsTe: '• 1885లో భారత జాతీయ కాంగ్రెస్ (INC) స్థాపన\n• దాదాభాయ్ నౌరోజీ "సంపద తరలింపు సిద్ధాంతం"\n• శాసన మండళ్లలో ప్రాతినిధ్యం'
    },
    {
      icon: '📢',
      categoryEn: 'Major Demands',
      categoryTe: 'ప్రధాన డిమాండ్లు (Major Demands)',
      detailsEn: '• Indianization of Civil Services (simultaneous ICS exams)\n• Reduction in military expenditure\n• Economic reforms (tax reductions, free trade)',
      detailsTe: '• సివిల్ సర్వీసుల భారతీకరణ (ICS పరీక్షల నిర్వహణ)\n• సైనిక ఖర్చుల తగ్గింపు\n• ఆర్థిక సంస్కరణలు (పన్నుల తగ్గింపు)'
    },
    {
      icon: '👎',
      categoryEn: 'Criticism',
      categoryTe: 'విమర్శలు (Criticism)',
      detailsEn: 'Lack of direct mass action, slow progress, and excessive reliance on British goodwill (called "Political Mendicancy" by Extremists)',
      detailsTe: 'ప్రత్యక్ష కార్యాచరణ లేకపోవడం, నెమ్మదైన పురోగతి, బ్రిటిష్ వారి దయపై ఆధారపడటం ("రాజకీయ భిక్షాటన" అని అతివాదుల విమర్శ)'
    },
    {
      icon: '🏆',
      categoryEn: 'Achievements',
      categoryTe: 'విజయాలు (Achievements)',
      detailsEn: '• Raised national political consciousness\n• Laid strong foundation for future mass struggle\n• Economic critiques like "Poverty and Un-British Rule in India"',
      detailsTe: '• ప్రజలలో జాతీయ చైతన్యాన్ని రగిలించారు\n• భవిష్యత్ స్వాతంత్ర్య పోరాటానికి గట్టి పునాది వేశారు\n• బ్రిటిష్ ఆర్థిక దోపిడీని బట్టబయలు చేశారు'
    },
    {
      icon: '⏳',
      categoryEn: 'End of Phase',
      categoryTe: 'దశ ముగింపు (End of Phase)',
      detailsEn: '1905 – Partition of Bengal (by Lord Curzon) and the Rise of Extremists (Lal-Bal-Pal)',
      detailsTe: '1905 – బెంగాల్ విభజన (లార్డ్ కర్జన్) మరియు అతివాద యుగ ఆవిర్భావం (లాల్-బాల్-పాల్)'
    }
  ],
  majorEventsBox: [
    {
      year: '1885',
      titleEn: 'Formation of the Indian National Congress (INC)',
      titleTe: 'భారత జాతీయ కాంగ్రెస్ (INC) స్థాపన (1885)',
      descEn: 'The INC was established (by A.O. Hume, with W.C. Bonnerjee as first President at Bombay) to promote Indian political interests within the British Empire.',
      descTe: 'బ్రిటిష్ సామ్రాజ్యంలో భారతీయుల ప్రయోజనాలను ప్రోత్సహించేందుకు 1885 డిసెంబర్‌లో బొంబాయిలో భారత జాతీయ కాంగ్రెస్ (INC) స్థాపించబడింది (స్థాపకుడు: ఎ.ఒ. హ్యూమ్, తొలి అధ్యక్షుడు: డబ్ల్యూ.సి. బెనర్జీ).'
    },
    {
      year: '1905',
      titleEn: 'Partition of Bengal',
      titleTe: 'బెంగాల్ విభజన (Partition of Bengal – 1905)',
      descEn: 'Lord Curzon’s decision to divide Bengal based on religion led to widespread opposition (Swadeshi Movement) and marked a critical turning point in Indian nationalism, leading to the rise of the Extremist phase.',
      descTe: 'మత ప్రాతిపదికన బెంగాల్‌ను విభజించాలన్న లార్డ్ కర్జన్ నిర్ణయం దేశవ్యాప్త వ్యతిరేకతకు (స్వదేశీ ఉద్యమానికి) దారితీసి, అతివాద దశ (Extremist Phase) ఆవిర్భావానికి కారణమైంది.'
    }
  ],
  councilsAct1892: {
    titleEn: 'Indian Councils Act, 1892',
    titleTe: 'భారత కౌన్సిళ్ల చట్టం, 1892 (Indian Councils Act, 1892)',
    pointsEn: [
      'Increased the number of additional (non-official) members in Central and Provincial Legislative Councils.',
      'Allowed a system of indirect elections and discussion on the annual budget.',
      'Provided an official platform for Indians to raise their grievances and participate in governance.',
      '(Limited in scope, but an important early step towards constitutional political participation).'
    ],
    pointsTe: [
      'కేంద్ర మరియు రాష్ట్ర శాసన మండళ్లలో (Legislative Councils) సభ్యుల సంఖ్యను పెంచింది.',
      'పరోక్ష ఎన్నికల విధానాన్ని మరియు బడ్జెట్‌పై చర్చించే హక్కును కల్పించింది.',
      'భారతీయులు తమ సమస్యలను వినిపించడానికి మరియు పరిపాలనలో పాల్గొనడానికి ఒక వేదికను అందించింది.',
      '(పరిమితమైనప్పటికీ, రాజకీయ భాగస్వామ్యం వైపు ఇది ఒక ముఖ్యమైన తొలి అడుగు).'
    ]
  },
  moderatesVsExtremists: [
    {
      icon: '⚖️',
      moderateEn: 'Believed in constitutional methods and gradual reforms',
      moderateTe: 'రాజ్యాంగబద్ధమైన పద్ధతులు మరియు క్రమబద్ధమైన సంస్కరణలను విశ్వసించారు',
      extremistEn: 'Believed in direct mass action and immediate Swaraj',
      extremistTe: 'ప్రత్యక్ష కార్యాచరణ మరియు తక్షణ స్వరాజ్యాన్ని (Swaraj) విశ్వసించారు'
    },
    {
      icon: '🤝',
      moderateEn: 'Faith in British sense of justice and cooperation',
      moderateTe: 'బ్రిటిష్ వారి న్యాయబుద్ధిపై మరియు సహకారంపై నమ్మకం ఉంచారు',
      extremistEn: 'Lacked faith in British intentions and fairness',
      extremistTe: 'బ్రిటిష్ వారి ఉద్దేశాలపై ఎలాంటి నమ్మకం ఉంచలేదు'
    },
    {
      icon: '📜',
      moderateEn: 'Used petitions, resolutions, speeches, and appeals',
      moderateTe: 'వినతిపత్రాలు, తీర్మానాలు, ప్రసంగాలు మరియు విజ్ఞప్తులను ఉపయోగించారు',
      extremistEn: 'Used boycott, Swadeshi, national education & public protests',
      extremistTe: 'విదేశీ వస్తు బహిష్కరణ (Boycott), స్వదేశీ, బహిరంగ నిరసనలను ఆయుధాలుగా వాడారు'
    },
    {
      icon: '🎯',
      moderateEn: 'Goal: Administrative reforms and self-government within the Empire',
      moderateTe: 'లక్ష్యం: బ్రిటిష్ సామ్రాజ్య పరిధిలో సంస్కరణలు మరియు స్వపరిపాలన',
      extremistEn: 'Goal: Complete Independence (Swaraj as birthright)',
      extremistTe: 'లక్ష్యం: సంపూర్ణ స్వరాజ్యం (స్వాతంత్ర్యం)'
    }
  ]
};

export const ASSERTIVE_PHASE_DETAILS = {
  titleEn: 'Second Phase of the Indian National Movement (1905–1916)',
  titleTe: 'భారత జాతీయోద్యమ రెండవ దశ: అతివాద యుగము (1905–1916)',
  subtitleEn: 'The Assertive or Extremist Phase — A New Spirit, A New Assertive India!',
  subtitleTe: 'అతివాద (Assertive / Extremist) జాతీయవాద యుగం — నూతన స్ఫూర్తి, నూతన భారతదేశం!',
  posterImg: './images/indian_history/assertive_phase/assertive_phase_poster.jpg',
  bengalMapImg: './images/indian_history/assertive_phase/bengal_partition_map.jpg',
  swadeshiBonfireImg: './images/indian_history/assertive_phase/swadeshi_bonfire.jpg',
  tagorePortraitImg: './images/indian_history/assertive_phase/rabindranath_tagore_portrait.jpg',
  rakhiImg: './images/indian_history/assertive_phase/rakhi_unity.jpg',
  suratSplitImg: './images/indian_history/assertive_phase/surat_split_signpost.jpg',
  lalBalPalImg: './images/indian_history/assertive_phase/lal_bal_pal_trio.jpg',
  introEn: 'The second phase of the Indian National Movement, commonly known as the Assertive or Extremist Phase, lasted from 1905 to 1916. It was marked by a shift from mild constitutional petitions to active resistance against British rule.',
  introTe: 'భారత జాతీయోద్యమ చరిత్రలో క్రీ.శ. 1905 నుండి 1916 వరకు గల రెండవ దశను "అతివాద యుగము" (Assertive / Extremist Phase) అని పిలుస్తారు. మితవాదుల సాధారణ వినతిపత్రాల విధానం నుండి బ్రిటిష్ పాలనపై "ప్రత్యక్ష ప్రతిఘటన" (Active Resistance) వైపు మళ్లిన చారిత్రక ఘట్టమిది.',
  partitionIntroEn: 'The Partition of Bengal in 1905 was a territorial reorganization of the Bengal Presidency in British India, implemented by the authorities of the British Raj (Lord Curzon). The reorganization separated the largely Muslim eastern areas (East Bengal) from the largely Hindu western areas (West Bengal).',
  partitionIntroTe: 'క్రీ.శ. 1905లో జరిగిన బెంగాల్ విభజన (Partition of Bengal) బ్రిటిష్ రాజ్ (లార్డ్ కర్జన్) చేసిన ప్రాదేశిక పునర్వ్యవస్థీకరణ. ఇది ముస్లిం జనాభా అధికంగా ఉన్న తూర్పు బెంగాల్ (East Bengal) ప్రాంతాన్ని, హిందూ జనాభా అధికంగా ఉన్న పశ్చిమ బెంగాల్ (West Bengal) ప్రాంతం నుండి వేరు చేసింది.',
  causesOfPartition: [
    {
      icon: '⚡',
      titleEn: 'Divide and Rule',
      titleTe: 'విభజించు - పాలించు (Divide and Rule)',
      descEn: 'The British aimed to create a Hindu-minority West Bengal and a Muslim-majority East Bengal to fuel communal divides.',
      descTe: 'మతపరమైన విభేదాలను రెచ్చగొట్టేందుకు హిందూ మెజారిటీ పశ్చిమ బెంగాల్ మరియు ముస్లిం మెజారిటీ తూర్పు బెంగాల్‌ను సృష్టించడం బ్రిటిష్ వారి ప్రధాన ఉద్దేశం.'
    },
    {
      icon: '✊',
      titleEn: 'Crush Nationalism',
      titleTe: 'జాతీయవాదాన్ని అణచివేయడం (Crush Nationalism)',
      descEn: 'Bengal was the nerve center of the freedom struggle, with leaders like Aurobindo Ghosh and Surendranath Banerjee; the partition was designed to weaken this intellectual hub.',
      descTe: 'అరబిందో ఘోష్, సురేంద్రనాథ్ బెనర్జీ వంటి నాయకులతో బెంగాల్ స్వాతంత్ర్య పోరాటానికి ప్రధాన కేంద్రంగా ఉండేది; ఈ మేధో కేంద్రాన్ని బలహీనపరిచేందుకే విభజన జరిగింది.'
    },
    {
      icon: '🏛️',
      titleEn: 'Administrative Control',
      titleTe: 'పరిపాలనా నియంత్రణ సాకు (Administrative Control)',
      descEn: 'The government officially claimed the province was too large for efficient management, aiming in reality to split the Bengali-speaking population into smaller, easier-to-control groups.',
      descTe: 'బెంగాల్ ప్రావిన్స్ చాలా పెద్దదిగా ఉందని పరిపాలనా సౌలభ్యం పేరుతో సాకు చూపి, బెంగాలీ మాట్లాడే ప్రజలను చీల్చి సులభంగా నియంత్రించాలని భావించారు.'
    },
    {
      icon: '🤝',
      titleEn: 'Securing Muslim Support',
      titleTe: 'ముస్లింల మద్దతు పొందడం (Securing Muslim Support)',
      descEn: 'The British intended to appease the Muslim population in Eastern Bengal by promising a new capital at Dhaka, fostering a separate political identity.',
      descTe: 'ఢాకా (Dhaka) రాజధానిగా కొత్త ప్రావిన్స్‌ను వాగ్దానం చేయడం ద్వారా తూర్పు బెంగాల్‌లోని ముస్లిం జనాభాను ఆకర్షించి ప్రత్యేక రాజకీయ గుర్తింపును ప్రోత్సహించారు.'
    }
  ],
  nationalistPerspective: [
    {
      icon: '⭐',
      titleEn: 'Deliberate Partition',
      titleTe: 'ఉద్దేశపూర్వక దాడి (Deliberate Partition)',
      descEn: 'Nationalists viewed the partition not as administrative, but as a direct attack on the unity and national movement of India.',
      descTe: 'జాతీయవాదులు ఈ విభజనను పరిపాలనా చర్యగా కాకుండా, భారత ఐక్యత మరియు జాతీయోద్యమంపై జరిగిన ప్రత్యక్ష దాడిగా పరిగణించారు.'
    },
    {
      icon: '⭐',
      titleEn: 'Cultural Disruption',
      titleTe: 'సాంస్కృతిక విచ్ఛిన్నం (Cultural Disruption)',
      descEn: 'The Bengali community felt humiliated, as it made them a linguistic minority in their own province (due to the inclusion of Hindi and Odia-speaking areas in West Bengal).',
      descTe: 'హిందీ, ఒడియా మాట్లాడే ప్రాంతాలను పశ్చిమ బెంగాల్‌లో కలపడం ద్వారా బెంగాలీలను తమ సొంత రాష్ట్రంలోనే మైనారిటీలుగా మార్చడాన్ని తీవ్ర అవమానంగా భావించారు.'
    },
    {
      icon: '🔥',
      titleEn: 'Reactionary Action (Swadeshi & Boycott)',
      titleTe: 'స్వదేశీ & బహిష్కరణ ఉద్యమం (Swadeshi & Boycott)',
      descEn: 'Nationalists observed the partition day (16 Oct 1905) as a "Day of Mourning". It sparked the Swadeshi Movement, where protestors boycotted British goods, burned foreign textiles, and promoted indigenous industries.',
      descTe: 'విభజన దినాన్ని "సంతాప దినం" (Day of Mourning) గా పాటించారు. విదేశీ వస్త్రాలను తగలబెట్టి, బ్రిటిష్ వస్తువులను బహిష్కరించి స్వదేశీ పరిశ్రమలను ప్రోత్సహించారు.'
    },
    {
      icon: '🇮🇳',
      titleEn: 'United Resistance & 1911 Annulment',
      titleTe: 'ఐక్య పోరాటం & 1911లో విభజన రద్దు (United Resistance)',
      descEn: 'Despite British attempts to divide, the partition united Indians across the country, fostering a stronger sense of national identity and leading to the eventual reversal (annulment) of the partition in 1911.',
      descTe: 'బ్రిటిష్ వారి విభజన కుట్రలకు వ్యతిరేకంగా భారతీయులందరూ ఏకమయ్యారు; ఈ ఉధృత పోరాట ఫలితంగా 1911లో బ్రిటిష్ ప్రభుత్వం బెంగాల్ విభజనను రద్దు చేసింది.'
    }
  ],
  tagoreHighlight: {
    titleEn: 'Rabindranath Tagore & Raksha Bandhan Unity',
    titleTe: 'రవీంద్రనాథ్ ఠాగూర్ — "అమర్ సోనార్ బంగ్లా" & రాఖీ ఐక్యతా వేడుక',
    descEn: 'Key leader Rabindranath Tagore protested by organizing marches, composing the patriotic song "Amar Sonar Bangla," and encouraging Hindu-Muslim brotherhood through the ritual of tying Rakhis on each other’s wrists.',
    descTe: 'విశ్వకవి రవీంద్రనాథ్ ఠాగూర్ నిరసనలకు నాయకత్వం వహించి, "అమర్ సోనార్ బంగ్లా" గీతాన్ని రచించారు మరియు హిందూ-ముస్లిం ఐక్యతకు చిహ్నంగా ఒకరికొకరు "రాఖీ" (Rakhi) కట్టుకునే సంప్రదాయాన్ని ప్రోత్సహించారు.'
  },
  suratSplit1907: {
    titleEn: 'Surat Split of 1907 (INC Division)',
    titleTe: '1907 సూరత్ చీలిక (Surat Split of 1907)',
    pointsEn: [
      'The Assertive Nationalists wanted to extend the Swadeshi and Boycott movement to the rest of India and make it a full-scale political mass struggle leading to Swaraj.',
      'The Early Nationalists (Moderates), however, did not approve it for the whole of India and wanted it confined to Bengal only, opposing open support to total boycott.',
      'The Assertive Nationalists proposed the name of Lala Lajpat Rai as President of the 1907 Surat Session, whereas the Early Nationalists proposed Rashbehari Ghosh.',
      'Highlight: The Surat Split divided the Congress into Moderates and Extremists and temporarily weakened the national movement.'
    ],
    pointsTe: [
      'అతివాద నాయకులు స్వదేశీ మరియు బహిష్కరణ ఉద్యమాన్ని బెంగాల్‌కే పరిమితం చేయకుండా దేశవ్యాప్త ప్రజా పోరాటంగా మార్చి స్వరాజ్యం సాధించాలని కోరారు.',
      'మితవాద నాయకులు మాత్రం దీనిని బెంగాల్‌కే పరిమితం చేయాలని, సంపూర్ణ బహిష్కరణకు బహిరంగ మద్దతు ఇవ్వరాదని భావించారు.',
      '1907 సూరత్ కాంగ్రెస్ సమావేశానికి అధ్యక్షుడిగా అతివాదులు లాలా లజపతిరాయ్ పేరును ప్రతిపాదించగా, మితవాదులు రాస్‌బిహారీ ఘోష్ పేరును ప్రతిపాదించారు.',
      'ముఖ్య ఫలితం: ఈ సూరత్ చీలిక కాంగ్రెస్‌ను మితవాదులు, అతివాదులుగా విభజించి జాతీయోద్యమాన్ని కొంతకాలం బలహీనపరిచింది.'
    ]
  },
  assertiveNationalists: {
    titleEn: 'The Assertive Nationalists (Lal–Bal–Pal Trio)',
    titleTe: 'అతివాద జాతీయవాదులు (లాల్ – బాల్ – పాల్ త్రయం)',
    pointsEn: [
      'A new and younger group of leaders within the Congress who did not agree with the slow petition methods and ideology of the Early Nationalist leaders. These "angry young men" stood for complete Swaraj and believed in mass movement.',
      'This group came to be known as Assertive Nationalists because they advocated active political resistance to British imperialism.',
      'Three prominent leaders of this group were Bal Gangadhar Tilak (Maharashtra), Lala Lajpat Rai (Punjab), and Bipin Chandra Pal (Bengal) — famous across India as the "Lal-Bal-Pal" trio (along with Aurobindo Ghosh).'
    ],
    pointsTe: [
      'తొలి దశ మితవాద నాయకుల నెమ్మదైన వినతిపత్రాల విధానాలతో ఏకీభవించని యువ నాయకుల బృందం కాంగ్రెస్‌లో ఆవిర్భవించింది. వీరు సంపూర్ణ స్వరాజ్యం మరియు ప్రజా ఉద్యమాలను విశ్వసించారు.',
      'బ్రిటిష్ సామ్రాజ్యవాదాన్ని క్రియాశీలకంగా, ధైర్యంగా ఎదిరించే దృక్పథం కలిగినందున వీరిని "అతివాద జాతీయవాదులు" (Assertive Nationalists) అని పిలిచారు.',
      'ఈ వర్గంలో ముగ్గురు ప్రధాన అగ్రనాయకులు: బాలగంగాధర తిలక్ (మహారాష్ట్ర), లాలా లజపతిరాయ్ (పంజాబ్), బిపిన్ చంద్ర పాల్ (బెంగాల్) — వీరు "లాల్-బాల్-పాల్" (Lal-Bal-Pal) త్రయంగా ప్రసిద్ధి చెందారు.'
    ],
    mainObjectiveEn: 'MAIN OBJECTIVE: Immediate "Attainment of Swaraj" meaning Complete Independence.',
    mainObjectiveTe: 'ప్రధాన లక్ష్యం (MAIN OBJECTIVE): తక్షణ "స్వరాజ్య సాధన" — అనగా సంపూర్ణ స్వాతంత్ర్యం (Complete Independence).',
    bottomQuoteEn: '⭐ They did not just dream of freedom, they dared to demand it!',
    bottomQuoteTe: '⭐ వారు స్వాతంత్ర్యం గురించి కేవలం కలలు కనలేదు, దానిని మా జన్మహక్కుగా డిమాండ్ చేసే సాహసం చేశారు!'
  }
};

export const NATIONALISM_TIMELINE_DETAILS = {
  titleEn: 'Timeline: Nationalism in India (Gandhian Era: 1915–1942)',
  titleTe: 'భారతదేశంలో జాతీయోద్యమ కాలక్రమం: గాంధీ శకము (1915–1942)',
  subtitleEn: 'From Mahatma Gandhi’s Return (1915) to the Quit India Movement ("Do or Die", 1942)',
  subtitleTe: 'మహాత్మా గాంధీ రాక (1915) నుండి క్విట్ ఇండియా ఉద్యమం ("విజయం లేదా వీరమరణం", 1942) వరకు',
  posterImg: './images/indian_history/nationalism_timeline/nationalism_timeline_poster.jpg',
  introEn: 'The third and final mass phase of the Indian National Movement (from 1915 onwards) is known as the Gandhian Era. Armed with the moral weapons of Satya (Truth), Ahimsa (Non-Violence), Satyagraha, and Swadeshi (Charkha), Mahatma Gandhi transformed the freedom struggle into a nationwide mass movement uniting millions of Indians.',
  introTe: 'క్రీ.శ. 1915 నుండి ప్రారంభమైన భారత జాతీయోద్యమ మూడవ మరియు నిర్ణయాత్మక దశను "గాంధీ శకము" (Gandhian Era) అని పిలుస్తారు. సత్యం, అహింస, సత్యాగ్రహం మరియు స్వదేశీ (చరఖా) అనే నైతిక ఆయుధాలతో మహాత్మా గాంధీ భారత స్వాతంత్ర్య పోరాటాన్ని కోట్లాది మంది సామాన్య ప్రజలు పాల్గొనే మహా ప్రజా ఉద్యమంగా మలిచారు.',
  events: [
    {
      order: 1,
      side: 'left' as const,
      year: '1915',
      yearTe: 'క్రీ.శ. 1915',
      titleEn: '1915: Gandhi Returns to India',
      titleTe: '1915: భారతదేశానికి మహాత్మా గాంధీ రాక',
      color: '#0284C7',
      borderColor: '#38BDF8',
      bgLight: '#F0F9FF',
      img: './images/indian_history/nationalism_timeline/1915_gandhi_returns.jpg',
      summaryEn: 'Mahatma Gandhi returned to India from South Africa on 9 January 1915 (celebrated as Pravasi Bharatiya Divas) after successfully leading non-violent Satyagraha against racial discrimination.',
      summaryTe: 'దక్షిణాఫ్రికాలో జాతి వివక్షకు వ్యతిరేకంగా అహింసాత్మక సత్యాగ్రహాన్ని విజయవంతంగా నడిపిన అనంతరం మహాత్మా గాంధీ 1915 జనవరి 9న భారతదేశానికి తిరిగి వచ్చారు (ప్రవాసీ భారతీయ దివస్).',
      highlightsEn: [
        'Established Sabarmati Ashram (Ahmedabad) and popularized the Charkha (spinning wheel) for self-reliance.',
        'Led early successful Satyagrahas at Champaran (1917), Kheda (1918), and Ahmedabad Mill Strike (1918).'
      ],
      highlightsTe: [
        'సబర్మతీ ఆశ్రమాన్ని స్థాపించి, స్వయం సమృద్ధికి ప్రతీకగా "చరఖా" (రాట్నం) ను ప్రజలలోకి తీసుకెళ్లారు.',
        'చంపారన్ (1917), ఖేడా (1918) మరియు అహ్మదాబాద్ మిల్లు కార్మికుల సత్యాగ్రహాలను (1918) విజయవంతంగా నడిపించారు.'
      ]
    },
    {
      order: 2,
      side: 'right' as const,
      year: '1919',
      yearTe: 'క్రీ.శ. 1919',
      titleEn: '1919: Jallianwala Bagh Massacre',
      titleTe: '1919: జలియన్ వాలాబాగ్ దురంతం (ఏప్రిల్ 13, 1919)',
      color: '#B45309',
      borderColor: '#F59E0B',
      bgLight: '#FFFBEB',
      img: './images/indian_history/nationalism_timeline/1919_jallianwala_bagh.jpg',
      summaryEn: 'On 13 April 1919 (Baisakhi day) in Amritsar, British Brigadier-General Reginald Dyer blocked the only exit of Jallianwala Bagh and ordered troops to open fire on an unarmed peaceful gathering protesting the Rowlatt Act.',
      summaryTe: 'రౌలట్ చట్టానికి (Rowlatt Act) వ్యతిరేకంగా 1919 ఏప్రిల్ 13న (వైశాఖి పండుగ నాడు) అమృత్‌సర్‌లోని జలియన్ వాలాబాగ్‌లో శాంతియుతంగా సమావేశమైన నిరాయుధ ప్రజలపై జనరల్ డయ్యర్ కాల్పులు జరిపించాడు.',
      highlightsEn: [
        'Hundreds of innocent Indians were martyred; Rabindranath Tagore renounced his British Knighthood in protest.',
        'Became a major turning point that galvanized nationwide anger against British rule.'
      ],
      highlightsTe: [
        'వందలాది మంది అమాయకులు ప్రాణాలు కోల్పోయారు; దీనికి నిరసనగా రవీంద్రనాథ్ ఠాగూర్ బ్రిటిష్ వారు ఇచ్చిన "నైట్‌హుడ్" (Sir) బిరుదును త్యజించారు.',
        'ఈ ఘటన దేశవ్యాప్తంగా బ్రిటిష్ పాలనపై తీవ్ర ఆగ్రహాన్ని రగిలించింది.'
      ]
    },
    {
      order: 3,
      side: 'left' as const,
      year: '1920',
      yearTe: 'క్రీ.శ. 1920',
      titleEn: '1920: Non-Cooperation Movement Launched',
      titleTe: '1920: సహాయ నిరాకరణ ఉద్యమం ప్రారంభం (Non-Cooperation Movement)',
      color: '#0369A1',
      borderColor: '#0EA5E9',
      bgLight: '#E0F2FE',
      img: './images/indian_history/nationalism_timeline/1920_non_cooperation.jpg',
      summaryEn: 'Launched in August 1920 by Mahatma Gandhi (alongside the Khilafat Movement) demanding redressal of the Punjab wrongs, Khilafat injustice, and the attainment of Swaraj through peaceful non-cooperation.',
      summaryTe: 'జలియన్ వాలాబాగ్ దురంతం, ఖిలాఫత్ సమస్య పరిష్కారం మరియు "స్వరాజ్య" సాధన లక్ష్యంగా 1920 ఆగస్టులో మహాత్మా గాంధీ సహాయ నిరాకరణ ఉద్యమాన్ని ప్రారంభించారు.',
      highlightsEn: [
        'Boycott of British titles, government schools, courts, legislative councils, and foreign cloth.',
        'Public bonfires of foreign textiles and massive adoption of Khadi across India.'
      ],
      highlightsTe: [
        'బ్రిటిష్ బిరుదులు, ప్రభుత్వ పాఠశాలలు, న్యాయస్థానాలు, చట్టసభలు మరియు విదేశీ వస్తువుల బహిష్కరణ (Boycott).',
        'విదేశీ వస్త్రాల దహనం మరియు ఖాదీ (Khadi) వస్త్రధారణ దేశవ్యాప్తంగా ఉధృతమైంది.'
      ]
    },
    {
      order: 4,
      side: 'right' as const,
      year: '1922',
      yearTe: 'క్రీ.శ. 1922',
      titleEn: '1922: Chauri Chaura Incident (Movement Suspended)',
      titleTe: '1922: చౌరీ చౌరా సంఘటన (ఉద్యమ విరమణ)',
      color: '#C2410C',
      borderColor: '#F97316',
      bgLight: '#FFF7ED',
      img: './images/indian_history/nationalism_timeline/1922_chauri_chaura.jpg',
      summaryEn: 'On 4–5 February 1922 at Chauri Chaura (Gorakhpur district, UP), a violent clash occurred when police fired on protestors, and the enraged crowd set fire to the police station, killing 22 policemen.',
      summaryTe: '1922 ఫిబ్రవరి 5న ఉత్తరప్రదేశ్‌లోని గోరఖ్‌పూర్ జిల్లా "చౌరీ చౌరా" వద్ద పోలీసులు కాల్పులు జరపడంతో ఆగ్రహించిన నిరసనకారులు పోలీస్ స్టేషన్‌కు నిప్పు పెట్టారు (22 మంది పోలీసులు మరణించారు).',
      highlightsEn: [
        'Strictly committed to Ahimsa (non-violence), Mahatma Gandhi immediately suspended the Non-Cooperation Movement in February 1922.',
        'Led to constructive village work and the formation of the Swaraj Party (1923) by C.R. Das and Motilal Nehru.'
      ],
      highlightsTe: [
        'అహింసా సిద్ధాంతానికి కట్టుబడిన మహాత్మా గాంధీ ఈ హింసాత్మక ఘటనతో ఆవేదన చెంది ఫిబ్రవరి 1922లో సహాయ నిరాకరణ ఉద్యమాన్ని నిలిపివేశారు.',
        'అనంతరం 1923లో సి.ఆర్. దాస్, మోతీలాల్ నెహ్రూ "స్వరాజ్ పార్టీ"ని స్థాపించారు.'
      ]
    },
    {
      order: 5,
      side: 'left' as const,
      year: '1928',
      yearTe: 'క్రీ.శ. 1928',
      titleEn: "1928: Simon Commission Arrives ('Simon Go Back')",
      titleTe: "1928: సైమన్ కమిషన్ రాక ('Simon Go Back')",
      color: '#1D4ED8',
      borderColor: '#60A5FA',
      bgLight: '#EFF6FF',
      img: './images/indian_history/nationalism_timeline/1928_simon_commission.jpg',
      summaryEn: 'The British government appointed the 7-member Indian Statutory Commission under Sir John Simon to review constitutional reforms, without including a single Indian member.',
      summaryTe: 'భారత రాజ్యాంగ సంస్కరణలను సమీక్షించేందుకు సర్ జాన్ సైమన్ నేతృత్వంలో ఒక్క భారతీయుడు కూడా లేని 7 గురు ఆంగ్లేయుల కమిషన్ 1928 ఫిబ్రవరిలో భారత్‌కు వచ్చింది.',
      highlightsEn: [
        'Greeted nationwide with black flags, hartals, and the thunderous slogan "Simon Go Back!".',
        'Lala Lajpat Rai suffered fatal lathi blows while leading the anti-Simon protest in Lahore (1928).'
      ],
      highlightsTe: [
        'దేశవ్యాప్తంగా నల్లజెండాలతో, "సైమన్ గో బ్యాక్!" (Simon Go Back!) నినాదాలతో ప్రజలు తీవ్ర నిరసన తెలిపారు.',
        'లాహోర్‌లో జరిగిన నిరసనలో పోలీసుల లాఠీఛార్జ్‌లో తీవ్రంగా గాయపడి "పంజాబ్ కేసరి" లాలా లజపతిరాయ్ వీరమరణం పొందారు.'
      ]
    },
    {
      order: 6,
      side: 'right' as const,
      year: '1930',
      yearTe: 'క్రీ.శ. 1930',
      titleEn: '1930: Dandi March (Salt Satyagraha Begins)',
      titleTe: '1930: దండి యాత్ర (ఉప్పు సత్యాగ్రహం ప్రారంభం)',
      color: '#9A3412',
      borderColor: '#FB923C',
      bgLight: '#FFF7ED',
      img: './images/indian_history/nationalism_timeline/1930_dandi_march.jpg',
      summaryEn: 'Following the Purna Swaraj declaration (Lahore Congress, 1929), Mahatma Gandhi marched 240 miles from Sabarmati Ashram to the coastal village of Dandi (12 March – 6 April 1930) with 78 followers.',
      summaryTe: '1929 లాహోర్ కాంగ్రెస్ "పూర్ణ స్వరాజ్" తీర్మానం అనంతరం, మహాత్మా గాంధీ 78 మంది అనుచరులతో సబర్మతీ ఆశ్రమం నుండి దండి సముద్ర తీరం వరకు 240 మైళ్ల పాదయాత్ర చేశారు (1930 మార్చి 12 – ఏప్రిల్ 6).',
      highlightsEn: [
        'On 6 April 1930, Gandhi picked up a handful of natural sea salt at Dandi, defying the British Salt Monopoly.',
        'Marked the formal launch of the nationwide Civil Disobedience Movement (శాసన ఉల్లంఘన ఉద్యమం).'
      ],
      highlightsTe: [
        '1930 ఏప్రిల్ 6న దండి సముద్ర తీరాన గుప్పెడు ఉప్పును తయారుచేసి బ్రిటిష్ ఉప్పు చట్టాన్ని ఉల్లంఘించారు.',
        'దీనితో దేశవ్యాప్తంగా "శాసన ఉల్లంఘన ఉద్యమం" (Civil Disobedience Movement) ప్రారంభమైంది.'
      ]
    },
    {
      order: 7,
      side: 'left' as const,
      year: '1931',
      yearTe: 'క్రీ.శ. 1931',
      titleEn: '1931: Gandhi-Irwin Pact Signed',
      titleTe: '1931: గాంధీ-ఇర్విన్ ఒప్పందం (మార్చి 5, 1931)',
      color: '#0F766E',
      borderColor: '#2DD4BF',
      bgLight: '#F0FDFA',
      img: './images/indian_history/nationalism_timeline/1931_gandhi_irwin_pact.jpg',
      summaryEn: 'Signed on 5 March 1931 between Mahatma Gandhi and Viceroy Lord Irwin in Delhi, placing the Indian National Congress on an equal negotiating footing with the British Government.',
      summaryTe: '1931 మార్చి 5న మహాత్మా గాంధీ మరియు వైస్రాయ్ లార్డ్ ఇర్విన్ మధ్య ఢిల్లీలో చారిత్రక ఒప్పందం కుదిరింది.',
      highlightsEn: [
        'British agreed to release non-violent political prisoners and allow coastal villagers to make salt for personal use.',
        'Congress agreed to suspend the Civil Disobedience Movement and participate in the Second Round Table Conference in London.'
      ],
      highlightsTe: [
        'అహింసాత్మక రాజకీయ ఖైదీల విడుదల మరియు తీరప్రాంత ప్రజలు సొంత అవసరాలకు ఉప్పు తయారుచేసుకునేందుకు బ్రిటిష్ ప్రభుత్వం అంగీకరించింది.',
        'శాసన ఉల్లంఘన ఉద్యమాన్ని నిలిపివేసి లండన్‌లో జరిగే రెండవ రౌండ్ టేబుల్ సమావేశంలో పాల్గొనేందుకు కాంగ్రెస్ అంగీకరించింది.'
      ]
    },
    {
      order: 8,
      side: 'right' as const,
      year: '1942',
      yearTe: 'క్రీ.శ. 1942',
      titleEn: "1942: Quit India Movement ('Do or Die')",
      titleTe: "1942: క్విట్ ఇండియా ఉద్యమం ('Do or Die' — ఆగస్టు 8, 1942)",
      color: '#15803D',
      borderColor: '#4ADE80',
      bgLight: '#F0FDF4',
      img: './images/indian_history/nationalism_timeline/1942_quit_india.jpg',
      summaryEn: 'On 8 August 1942 at the Gowalia Tank Maidan (Bombay), the All India Congress Committee passed the historic Quit India Resolution demanding an immediate end to British rule in India.',
      summaryTe: 'క్రిప్స్ రాయబారం విఫలమైన తర్వాత 1942 ఆగస్టు 8న బొంబాయిలోని గొవాలియా ట్యాంక్ మైదానంలో బ్రిటిష్ వారు తక్షణమే భారత్ విడిచి వెళ్లాలని "క్విట్ ఇండియా" (భారత్ ఛోడో) తీర్మానాన్ని ఆమోదించారు.',
      highlightsEn: [
        'Mahatma Gandhi delivered his immortal call to the nation: "Do or Die" (Karo ya Maro — విజయం లేదా వీరమరణం).',
        'Shook the foundations of the British Raj and paved the final road to Indian Independence on 15 August 1947.'
      ],
      highlightsTe: [
        'మహాత్మా గాంధీ దేశ ప్రజలకు "డు ఆర్ డై" (Do or Die — కరో యా మరో / సాధించండి లేదా వీరమరణం పొందండి) అనే చారిత్రక పిలుపునిచ్చారు.',
        'ఈ ఉధృత పోరాటం బ్రిటిష్ పాలన పునాదులను కదిలించి 1947 ఆగస్టు 15న భారత స్వాతంత్ర్య సిద్ధికి బాటలు వేసింది.'
      ]
    }
  ]
};

export const CONSTITUTIONAL_EVOLUTION_DETAILS = {
  titleEn: 'Historical Evolution of British Constitutional Development in India',
  titleTe: 'భారతదేశంలో బ్రిటిష్ రాజ్యాంగ పరిణామ చరిత్ర',
  subtitleEn: 'Phase 2: British Crown Rule (1858–1947)',
  subtitleTe: '2వ దశ: బ్రిటిష్ రాచరిక పాలన (1858–1947) — కంపెనీ పాలన ముగింపు నుండి సంపూర్ణ స్వాతంత్ర్యం వరకు',
  posterImg: './images/indian_history/constitutional_evolution/constitutional_evolution_poster.jpg',
  crownEmblemImg: './images/indian_history/constitutional_evolution/crown_emblem_header.jpg',
  summaryQuoteEn: "These Acts mark India's constitutional evolution — from Company regulation (1773), to Crown governance (1858), to representative reforms (1909–1935), and finally independence (1947).",
  summaryQuoteTe: 'ఈ చట్టాలు భారతదేశ రాజ్యాంగ పరిణామ క్రమాన్ని సూచిస్తాయి — కంపెనీ నియంత్రణ (1773) నుండి, బ్రిటిష్ రాచరిక పాలన (1858), ప్రాతినిధ్య సంస్కరణలు (1909–1935), మరియు చివరికి సంపూర్ణ స్వాతంత్ర్యం (1947) వరకు సాగిన చారిత్రక ప్రస్థానం.',
  acts: [
    {
      id: 'act_1858',
      year: '1858',
      yearTe: 'క్రీ.శ. 1858',
      titleEn: 'Government of India Act, 1858',
      titleTe: 'భారత ప్రభుత్వ చట్టం, 1858 (విక్టోరియా మహారాణి ప్రకటన)',
      categoryEn: 'Direct Crown Rule',
      categoryTe: 'బ్రిటిష్ కిరీట ప్రత్యక్ష పాలన',
      bannerColor: '#7F1D1D',
      borderColor: '#DC2626',
      bgLight: '#FEF2F2',
      isFocusPoint: false,
      focusBadgeImg: undefined as string | undefined,
      illustrationImg: './images/indian_history/constitutional_evolution/company_to_crown_1858.jpg',
      illustrationCaptionEn: 'East India Company Seal → British Imperial Crown',
      illustrationCaptionTe: 'ఈస్ట్ ఇండియా కంపెనీ ముద్ర → బ్రిటిష్ రాచరిక కిరీటం',
      pointsEn: [
        'Ended East India Company rule following the Revolt of 1857; India was brought under direct British Crown control.',
        'Created the office of Secretary of State for India (assisted by a 15-member Council of India) and redesignated the Governor-General as Viceroy of India (Lord Canning became the first Viceroy).'
      ],
      pointsTe: [
        '1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం తర్వాత ఈస్ట్ ఇండియా కంపెనీ పాలనను రద్దు చేసి, భారతదేశాన్ని నేరుగా బ్రిటిష్ రాణి/కిరీటం (Crown) నియంత్రణలోకి తెచ్చింది.',
        'లండన్‌లో 15 మంది సభ్యుల కౌన్సిల్ సహాయంతో "సెక్రటరీ ఆఫ్ స్టేట్ ఫర్ ఇండియా" (భారత రాజ్య కార్యదర్శి) పదవిని సృష్టించింది; గవర్నర్-జనరల్‌కు "వైస్రాయ్" అనే బిరుదు ఇచ్చింది (తొలి వైస్రాయ్: లార్డ్ కానింగ్).'
      ]
    },
    {
      id: 'act_1861',
      year: '1861',
      yearTe: 'క్రీ.శ. 1861',
      titleEn: 'Indian Councils Act, 1861',
      titleTe: 'భారత కౌన్సిళ్ల చట్టం, 1861',
      categoryEn: 'Decentralization & Representation',
      categoryTe: 'వికేంద్రీకరణ & శాసన మండళ్ల ఆరంభం',
      bannerColor: '#881337',
      borderColor: '#E11D48',
      bgLight: '#FFF1F2',
      isFocusPoint: false,
      focusBadgeImg: undefined as string | undefined,
      illustrationImg: './images/indian_history/constitutional_evolution/legislative_council_1861.jpg',
      illustrationCaptionEn: 'Imperial Legislative Council Chamber in Session',
      illustrationCaptionTe: 'శాసన మండలి సమావేశ మందిరం (1861)',
      pointsEn: [
        'Introduced legislative councils with limited Indian representation (Lord Canning nominated the Raja of Benaras, Maharaja of Patiala, and Sir Dinkar Rao in 1862).',
        'Began the process of legislative decentralization by restoring legislative powers to the Bombay and Madras Presidencies and recognized the Portfolio System.'
      ],
      pointsTe: [
        'పరిమిత భారతీయ ప్రాతినిధ్యంతో కూడిన శాసన మండళ్లను (Legislative Councils) ప్రవేశపెట్టింది (1862లో బెనారస్ రాజు, పాటియాలా మహారాజు, సర్ దినకర్ రావులను నామినేట్ చేశారు).',
        'బాంబే మరియు మద్రాసు ప్రెసిడెన్సీలకు తిరిగి శాసనాధికారాలను కల్పించడం ద్వారా అధికార వికేంద్రీకరణ ప్రక్రియను ప్రారంభించింది మరియు పోర్ట్‌ఫోలియో (శాఖల కేటాయింపు) విధానాన్ని గుర్తించింది.'
      ]
    },
    {
      id: 'act_1892',
      year: '1892',
      yearTe: 'క్రీ.శ. 1892',
      titleEn: 'Indian Councils Act, 1892',
      titleTe: 'భారత కౌన్సిళ్ల చట్టం, 1892',
      categoryEn: 'Council Expansion & Budget Debate',
      categoryTe: 'మండళ్ల విస్తరణ & బడ్జెట్ చర్చా హక్కు',
      bannerColor: '#9A3412',
      borderColor: '#EA580C',
      bgLight: '#FFF7ED',
      isFocusPoint: false,
      focusBadgeImg: undefined as string | undefined,
      illustrationImg: undefined as string | undefined,
      illustrationCaptionEn: '',
      illustrationCaptionTe: '',
      pointsEn: [
        'Expanded central and provincial legislative councils; empowered members to discuss the annual budget and address questions to the Executive.',
        'Nominated non-official Indian members into legislative councils on the recommendation of provincial councils, universities, municipalities, and chambers of commerce (indirect election principle).'
      ],
      pointsTe: [
        'కేంద్ర మరియు రాష్ట్ర శాసన మండళ్లను విస్తరించింది; వార్షిక బడ్జెట్‌పై చర్చించే అధికారాన్ని మరియు కార్యనిర్వాహక వర్గాన్ని ప్రశ్నించే హక్కును సభ్యులకు కల్పించింది.',
        'విశ్వవిద్యాలయాలు, మున్సిపాలిటీలు, జమీందారులు మరియు వాణిజ్య మండళ్ల సిఫార్సుపై భారతీయులను శాసన మండళ్లలోకి నామినేట్ చేసే (పరోక్ష ఎన్నికల) విధానానికి నాంది పలికింది.'
      ]
    },
    {
      id: 'act_1909',
      year: '1909',
      yearTe: 'క్రీ.శ. 1909',
      titleEn: 'Indian Councils Act, 1909 (Morley-Minto Reforms)',
      titleTe: 'భారత కౌన్సిళ్ల చట్టం, 1909 (మార్లే-మింటో సంస్కరణలు)',
      categoryEn: 'Representative Reforms',
      categoryTe: 'ప్రాతినిధ్య సంస్కరణలు & ప్రత్యేక నియోజకవర్గాలు',
      bannerColor: '#1E3A8A',
      borderColor: '#2563EB',
      bgLight: '#EFF6FF',
      isFocusPoint: false,
      focusBadgeImg: undefined as string | undefined,
      illustrationImg: './images/indian_history/constitutional_evolution/morley_minto_1909.jpg',
      illustrationCaptionEn: 'Lord Morley (Secretary of State) & Lord Minto (Viceroy)',
      illustrationCaptionTe: 'లార్డ్ మార్లే (రాజ్య కార్యదర్శి) & లార్డ్ మింటో (వైస్రాయ్)',
      pointsEn: [
        'Introduced separate electorates for Muslims (communal representation), legalizing the policy of divide and rule.',
        'Expanded legislative councils with more Indian members (from 16 to 60 in the Central Council) and appointed Satyendra Prasad Sinha as the first Indian member of the Viceroy’s Executive Council.'
      ],
      pointsTe: [
        'ముస్లింలకు "ప్రత్యేక నియోజకవర్గాలను" (Separate Electorates) ప్రవేశపెట్టి మతపరమైన ప్రాతినిధ్యానికి చట్టబద్ధత కల్పించింది (లార్డ్ మింటోను మత నియోజకవర్గాల పితామహుడిగా పేర్కొంటారు).',
        'శాసన మండళ్లలో భారతీయ సభ్యుల సంఖ్యను గణనీయంగా పెంచింది (కేంద్ర మండలిలో 16 నుండి 60కి); వైస్రాయ్ కార్యనిర్వాహక మండలిలో చేరిన తొలి భారతీయుడు సత్యేంద్ర ప్రసాద్ సిన్హా.'
      ]
    },
    {
      id: 'act_1919',
      year: '1919',
      yearTe: 'క్రీ.శ. 1919',
      titleEn: 'Government of India Act, 1919 (Montagu-Chelmsford Reforms)',
      titleTe: 'భారత ప్రభుత్వ చట్టం, 1919 (మాంటేగు-చెమ్స్‌ఫర్డ్ సంస్కరణలు)',
      categoryEn: 'Provincial Dyarchy & Bicameralism',
      categoryTe: 'రాష్ట్రాలలో ద్వంద్వ పాలన & ద్విసభా విధానం',
      bannerColor: '#065F46',
      borderColor: '#059669',
      bgLight: '#ECFDF5',
      isFocusPoint: false,
      focusBadgeImg: undefined as string | undefined,
      illustrationImg: './images/indian_history/constitutional_evolution/dyarchy_1919.jpg',
      illustrationCaptionEn: 'Dyarchy: Division of Provincial Subjects into Reserved & Transferred',
      illustrationCaptionTe: 'ద్వంద్వ పాలన (Dyarchy): రిజర్వ్‌డ్ & ట్రాన్స్‌ఫర్డ్ అంశాల విభజన',
      pointsEn: [
        'Introduced "Dyarchy" (Dual Governance) in provinces — dividing provincial subjects into "Transferred" (administered by Governor with ministers responsible to legislature) and "Reserved" (administered by Governor with Executive Council).',
        'Expanded legislative councils with directly elected Indian members and introduced Bicameralism (Council of State and Legislative Assembly) at the Centre.'
      ],
      pointsTe: [
        'రాష్ట్రాలలో "ద్వంద్వ పాలన" (Dyarchy) ప్రవేశపెట్టింది — రాష్ట్ర జాబితాలోని అంశాలను "రిజర్వ్‌డ్" (గవర్నర్ & కార్యనిర్వాహక మండలి ఆధీనంలో) మరియు "ట్రాన్స్‌ఫర్డ్" (శాసనసభకు బాధ్యత వహించే భారతీయ మంత్రుల ఆధీనంలో) గా విభజించింది.',
        'ఎన్నికైన భారతీయ సభ్యులతో శాసన మండళ్లను విస్తరించింది మరియు కేంద్రంలో తొలిసారిగా ద్విసభా విధానాన్ని (Bicameralism — ఎగువ సభ, దిగువ సభ) ప్రవేశపెట్టింది.'
      ]
    },
    {
      id: 'act_1935',
      year: '1935',
      yearTe: 'క్రీ.శ. 1935',
      titleEn: 'Government of India Act, 1935',
      titleTe: 'భారత ప్రభుత్వ చట్టం, 1935 (రాజ్యాంగ మైలురాయి)',
      categoryEn: 'FOCUS POINT • Blueprint of the Constitution',
      categoryTe: 'ప్రధాన ఘట్టం (FOCUS POINT) • భారత రాజ్యాంగానికి మూలాధారం',
      bannerColor: '#92400E',
      borderColor: '#D97706',
      bgLight: '#FFFBEB',
      isFocusPoint: true,
      focusBadgeImg: './images/indian_history/constitutional_evolution/focus_pillar_1935.jpg',
      illustrationImg: './images/indian_history/constitutional_evolution/provincial_autonomy_1935.jpg',
      illustrationCaptionEn: 'Provincial Autonomy & Federal Legislature Framework (1935)',
      illustrationCaptionTe: 'రాష్ట్ర స్వయంప్రతిపత్తి (Provincial Autonomy) & సమాఖ్య నిర్మాణం (1935)',
      pointsEn: [
        'Most comprehensive act of British rule (321 Sections and 10 Schedules); proposed an All-India Federal structure with Three Lists (Federal, Provincial, and Concurrent).',
        'Abolished Dyarchy in provinces and introduced "Provincial Autonomy" (responsible governments formed in provinces in 1937); established the Reserve Bank of India (RBI) and Federal Court.',
        'Served as the structural basis for many fundamental administrative provisions in free India’s Constitution (1950).'
      ],
      pointsTe: [
        'బ్రిటిష్ పాలనలో అత్యంత సమగ్రమైన చట్టం (321 అధికరణలు, 10 షెడ్యూళ్లు); మూడు జాబితాలతో (ఫెడరల్, ప్రావిన్షియల్, ఉమ్మడి జాబితా) అఖిల భారత సమాఖ్య నిర్మాణాన్ని ప్రతిపాదించింది.',
        'రాష్ట్రాలలో ద్వంద్వ పాలనను రద్దు చేసి "రాష్ట్ర స్వయంప్రతిపత్తి" (Provincial Autonomy) ప్రవేశపెట్టింది; రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా (RBI) మరియు ఫెడరల్ కోర్టు ఏర్పాటుకు మార్గం సుగమం చేసింది.',
        'స్వతంత్ర భారత రాజ్యాంగంలోని (1950) అనేక పరిపాలనా నిబంధనలకు మరియు సమాఖ్య వ్యవస్థకు ఈ చట్టమే ప్రధాన మూలాధారం.'
      ]
    },
    {
      id: 'act_1947',
      year: '1947',
      yearTe: 'క్రీ.శ. 1947',
      titleEn: 'Indian Independence Act, 1947',
      titleTe: 'భారత స్వాతంత్ర్య చట్టం, 1947 (సంపూర్ణ స్వాతంత్ర్య సిద్ధి)',
      categoryEn: 'FOCUS POINT • End of British Rule',
      categoryTe: 'ప్రధాన ఘట్టం (FOCUS POINT) • బ్రిటిష్ పాలన ముగింపు & అధికార బదిలీ',
      bannerColor: '#9A3412',
      borderColor: '#EA580C',
      bgLight: '#FFF7ED',
      isFocusPoint: true,
      focusBadgeImg: './images/indian_history/constitutional_evolution/focus_map_1947.jpg',
      illustrationImg: './images/indian_history/constitutional_evolution/independence_flags_1947.jpg',
      illustrationCaptionEn: 'Transfer of Sovereign Power to the Constituent Assembly (15 August 1947)',
      illustrationCaptionTe: 'రాజ్యాంగ పరిషత్తుకు సార్వభౌమాధికార బదిలీ (1947 ఆగస్టు 15)',
      pointsEn: [
        'Enacted on the basis of the Mountbatten Plan; partitioned British India into two independent sovereign dominions — India and Pakistan — effective 15 August 1947.',
        'Ended nearly two centuries of British rule in India, abolished the office of Secretary of State for India, and transferred full sovereign legislative and constitution-making power to the Constituent Assemblies.'
      ],
      pointsTe: [
        'మౌంట్‌బాటన్ ప్రణాళిక ఆధారంగా రూపొందించబడిన ఈ చట్టం ద్వారా 1947 ఆగస్టు 15న బ్రిటిష్ ఇండియా "భారత్" మరియు "పాకిస్తాన్" అనే రెండు స్వతంత్ర సార్వభౌమ డొమినియన్లుగా ఏర్పడింది.',
        'భారతదేశంలో దాదాపు రెండు శతాబ్దాల బ్రిటిష్ పాలనకు ముగింపు పలికింది; రెండు దేశాల రాజ్యాంగ పరిషత్తులకు (Constituent Assemblies) సంపూర్ణ సార్వభౌమాధికారాలను బదిలీ చేసింది.'
      ]
    }
  ]
};









