// Mahabharata Kuru Chronology & Astronomical Timeline Data
// Sourced from astronomical dating and historical epigraphical chronology (BCE 3329 to BCE 3102)

export interface KuruTimelineEvent {
  id: string;
  yearBCE: number;
  yearDisplay: string;
  titleEn: string;
  titleTe: string;
  side: 'left' | 'right';
  category: 'birth' | 'milestone' | 'coronation' | 'exile' | 'war' | 'niryana';
  icon: string;
  descriptionEn: string;
  descriptionTe: string;
  characters: string[];
}

export const KURU_TIMELINE_METADATA = {
  titleEn: 'Chronological Timeline of the Mahabharata Era',
  titleTe: 'కురువంశ మహాభారత కాలరేఖ (ఖగోళ కాలగణన)',
  subtitleEn: 'From the Birth of Grandfather Bhishma (3329 BCE) to the Inception of Kali Yuga & Pandava Mahaprasthana (3102 BCE)',
  subtitleTe: 'కురు పితామహుడు భీష్ముని జననం (క్రీ.పూ. 3329) నుండి కురుక్షేత్ర సంగ్రామం (క్రీ.పూ. 3138) మరియు కలియుగారంభం (క్రీ.పూ. 3102) వరకు',
  spanEn: '227 Golden Years of Epic Vedic History',
  spanTe: '227 సంవత్సరాల సమగ్ర మహాభారత యుగ చారిత్రక కాల ప్రవాహం',
  imageSrc: './images/indian_history/mahabharata_timeline_chart.png'
};

export const KURU_TIMELINE_EVENTS: KuruTimelineEvent[] = [
  {
    id: 'kuru-ev-bhishma-birth',
    yearBCE: 3329,
    yearDisplay: 'BCE 3329',
    titleEn: 'Birth of Bhishma',
    titleTe: 'భీష్ముని జననం',
    side: 'right',
    category: 'birth',
    icon: '🛡️',
    descriptionEn: 'Devavrata, son of King Shantanu and Ganga Devi, was born. Known for his unbreakable lifelong celibacy vow (Bhishma Pratigya) and guardian of the Kuru dynasty.',
    descriptionTe: 'శంతనుడు మరియు గంగాదేవిల కుమారుడు దేవవ్రతుడు జన్మించెను. ఆజన్మ బ్రహ్మచర్య భీషణ ప్రతిజ్ఞ చేసి, కురు సామ్రాజ్య రక్షక పితామహుడిగా చరిత్రకెక్కెను.',
    characters: ['భీష్ముడు (దేవవ్రతుడు)', 'శంతనుడు', 'గంగాదేవి']
  },
  {
    id: 'kuru-ev-dhritarashtra-birth',
    yearBCE: 3263,
    yearDisplay: 'BCE 3263',
    titleEn: 'Birth of Dhritarashtra',
    titleTe: 'ధృతరాష్ట్రుని జననం',
    side: 'left',
    category: 'birth',
    icon: '👑',
    descriptionEn: 'Born to Sage Veda Vyasa and Queen Ambika. Born visually impaired, he became the elder brother of Pandu and Vidura, and future father of 100 Kauravas.',
    descriptionTe: 'మహర్షి వేదవ్యాసుడు మరియు అంబికల దివ్య అనుగ్రహంతో జన్మించెను. పుట్టుకతోనే నేత్రహీనుడు, పాండురాజు-విదురుల జ్యేష్ఠ సోదరుడు, 100 మంది కౌరవుల తండ్రి.',
    characters: ['ధృతరాష్ట్రుడు', 'వేదవ్యాసుడు', 'అంబిక']
  },
  {
    id: 'kuru-ev-shakuni-birth',
    yearBCE: 3258,
    yearDisplay: 'BCE 3258',
    titleEn: 'Birth of Shakuni',
    titleTe: 'శకుని జననం',
    side: 'right',
    category: 'birth',
    icon: '🎲',
    descriptionEn: 'Prince of the Gandhara kingdom (modern Kandahar/Afghanistan), brother of Queen Gandhari, and crafty uncle of the Kauravas.',
    descriptionTe: 'గాంధార రాజవంశంలో సుబలుని కుమారునిగా జన్మించెను. గాంధారి సోదరుడు, కౌరవుల మేనమామ, పాచికల జూద క్రీడలో అద్వితీయ నిపుణుడు.',
    characters: ['శకుని', 'సుబలుడు', 'గాంధారి']
  },
  {
    id: 'kuru-ev-karna-birth',
    yearBCE: 3245,
    yearDisplay: 'BCE 3245',
    titleEn: 'Birth of Karna',
    titleTe: 'కర్ణుని జననం',
    side: 'left',
    category: 'birth',
    icon: '☀️',
    descriptionEn: 'Born to maiden Princess Kunti through the invocation of the Sun God Surya Deva, endowed at birth with immortal golden armor (Kavacha) and earrings (Kundala).',
    descriptionTe: 'కన్యకావస్థలో ఉన్న కుంతీదేవి సూర్యోపాసనా మంత్ర ప్రభావంతో జన్మించిన ఆదిత్య సుతుడు. పుట్టుకతోనే సహజ కవచ కుండలాలను ధరించిన మహాదాత.',
    characters: ['కర్ణుడు', 'కుంతీదేవి', 'సూర్యదేవుడు']
  },
  {
    id: 'kuru-ev-yudhisthira-birth',
    yearBCE: 3229,
    yearDisplay: 'BCE 3229',
    titleEn: 'Birth of Yudhisthira',
    titleTe: 'యుధిష్ఠిరుని (ధర్మరాజు) జననం',
    side: 'right',
    category: 'birth',
    icon: '⚖️',
    descriptionEn: 'Eldest of the five Pandava brothers, born to Kunti by the blessing of Yama (Dharma Deva). The embodiment of righteousness, truth, and moral integrity.',
    descriptionTe: 'యమధర్మరాజు అనుగ్రహంతో కుంతీదేవికి జన్మించిన పాండవ జ్యేష్ఠుడు. సత్యసంధతకు, ధర్మనిష్ఠకు ప్రతీకగా నిలిచిన ధర్మనందనుడు.',
    characters: ['యుధిష్ఠిరుడు (ధర్మరాజు)', 'కుంతి', 'ధర్మదేవుడు']
  },
  {
    id: 'kuru-ev-krishna-duryodhana-birth',
    yearBCE: 3228,
    yearDisplay: 'BCE 3228',
    titleEn: 'Birth of Krishna & Duryodhana',
    titleTe: 'శ్రీకృష్ణుడు & దుర్యోధనుల జననం',
    side: 'left',
    category: 'birth',
    icon: '🪈',
    descriptionEn: 'Lord Sri Krishna incarnated in Mathura to Devaki and Vasudeva on Shravana Krishna Ashtami. Simultaneously, Duryodhana was born to Gandhari as the eldest of the 100 Kauravas in Hastinapur.',
    descriptionTe: 'శ్రావణ బహుళ అష్టమి రోహిణీ నక్షత్రంలో మథురలో శ్రీకృష్ణ పరమాత్ముని అవతార ఆవిర్భావం. అదే సంవత్సరంలో హస్తినాపురంలో గాంధారీ-ధృతరాష్ట్రులకు జ్యేష్ఠ కౌరవుడు దుర్యోధనుని జననం.',
    characters: ['శ్రీకృష్ణుడు', 'దుర్యోధనుడు', 'దేవకి', 'గాంధారి']
  },
  {
    id: 'kuru-ev-arjun-birth',
    yearBCE: 3227,
    yearDisplay: 'BCE 3227',
    titleEn: 'Birth of Arjun',
    titleTe: 'అర్జునుని జననం',
    side: 'right',
    category: 'birth',
    icon: '🏹',
    descriptionEn: 'Born to Kunti through Indra Deva (Lord of Heaven). Destined to become the greatest archer of the age, friend of Krishna, and receiver of the Bhagavad Gita.',
    descriptionTe: 'దేవేంద్రుని అనుగ్రహంతో కుంతీదేవికి జన్మించిన మధ్యమ పాండవుడు. గాండీవధారి, అజేయ ధనుర్విద్యా పారంగతుడు, శ్రీకృష్ణుని ప్రియసఖుడు.',
    characters: ['అర్జునుడు', 'కుంతీదేవి', 'ఇంద్రుడు']
  },
  {
    id: 'kuru-ev-nakul-sahadev-birth',
    yearBCE: 3226,
    yearDisplay: 'BCE 3226',
    titleEn: 'Birth of Nakul & Sahadev',
    titleTe: 'నకుల & సహదేవుల జననం',
    side: 'left',
    category: 'birth',
    icon: '🐎',
    descriptionEn: 'Twin sons born to Queen Madri through the divine celestial physicians Ashwini Kumaras. Nakula excelled in swordcraft and horses; Sahadeva in astrology and diplomacy.',
    descriptionTe: 'మాద్రీదేవికి అశ్వినీ దేవతల అనుగ్రహంతో జన్మించిన కవల సోదరులు. నకులుడు అశ్వశిక్షణ మరియు ఖడ్గవిద్యలో, సహదేవుడు జ్యోతిష్యం మరియు నీతిశాస్త్రంలో ఆరితేరిరి.',
    characters: ['నకులుడు', 'సహదేవుడు', 'మాద్రి', 'అశ్వినీ దేవతలు']
  },
  {
    id: 'kuru-ev-draupadi-birth',
    yearBCE: 3220,
    yearDisplay: 'BCE 3220',
    titleEn: 'Birth of Draupadi',
    titleTe: 'ద్రౌపది ఆవిర్భావం',
    side: 'right',
    category: 'birth',
    icon: '🔥',
    descriptionEn: 'Emerged as a fully grown maiden from the sacred sacrificial altar (Putrakameshti Yajna) of King Drupada of Panchala, along with her brother Dhrishtadyumna.',
    descriptionTe: 'పాంచాల మహారాజు ద్రుపదుడు నిర్వహించిన యజ్ఞకుండం నుండి ధృష్టద్యుమ్నునితో కలిసి ఆవిర్భవించిన యజ్ఞసేని (పాంచాలి). మహాభారత ధర్మసంస్థాపనలో కీలకరాలు.',
    characters: ['ద్రౌపది (యజ్ఞసేని)', 'ద్రుపదుడు', 'ధృష్టద్యుమ్నుడు']
  },
  {
    id: 'kuru-ev-pandavas-hastinapur',
    yearBCE: 3213,
    yearDisplay: 'BCE 3213',
    titleEn: 'Pandavas came to Hastinapur',
    titleTe: 'పాండవులు హస్తినాపురానికి రాక',
    side: 'left',
    category: 'milestone',
    icon: '🏰',
    descriptionEn: 'After the demise of King Pandu and Madri in the forest, forest Rishis escorted Kunti and the five young Pandavas back to the royal palace in Hastinapur.',
    descriptionTe: 'అరణ్యంలో పాండురాజు, మాద్రిల మరణానంతరం, అరణ్య ఋషుల రక్షణలో కుంతీదేవి ఐదుగురు పాండవ కుమారులతో కలిసి హస్తినాపుర రాజభవనంలో ప్రవేశించెను.',
    characters: ['కుంతీదేవి', 'పాండవులు', 'భీష్ముడు', 'ధృతరాష్ట్రుడు']
  },
  {
    id: 'kuru-ev-archery-exhibition',
    yearBCE: 3200,
    yearDisplay: 'BCE 3200',
    titleEn: 'Archery Exhibition (Rangabhoomi)',
    titleTe: 'అస్త్రవిద్యా ప్రదర్శన (రంగభూమి)',
    side: 'right',
    category: 'milestone',
    icon: '🎯',
    descriptionEn: 'Dronacharya conducted a grand public demonstration of weapon mastery by Kuru princes. Karna entered, matched Arjuna, and was crowned King of Anga by Duryodhana.',
    descriptionTe: 'ద్రోణాచార్యుల ఆధ్వర్యంలో కౌరవ-పాండవ రాజకుమారుల ఆయుధ నైపుణ్య ప్రదర్శన. రంగభూమిలోకి కర్ణుని ప్రవేశం, అర్జునునికి సమఉజ్జీగా సవాలు, దుర్యోధనుడు కర్ణునికి అంగరాజ్య పట్టాభిషేకం.',
    characters: ['ద్రోణాచార్యుడు', 'అర్జునుడు', 'కర్ణుడు', 'దుర్యోధనుడు']
  },
  {
    id: 'kuru-ev-yudhisthira-coronated',
    yearBCE: 3198,
    yearDisplay: 'BCE 3198',
    titleEn: 'Yudhisthira Coronated as Crown Prince',
    titleTe: 'యుధిష్ఠిరుని యువరాజ పట్టాభిషేకం',
    side: 'right',
    category: 'coronation',
    icon: '🪑',
    descriptionEn: 'Due to his unmatched virtue and people\'s admiration, Dhritarashtra reluctantly consecrated Yudhishthira as the Crown Prince (Yuvaraja) of Hastinapur.',
    descriptionTe: 'ప్రజాభిమానం మరియు శీలవంతుడైన ధర్మరాజును ధృతరాష్ట్రుడు హస్తినాపుర యువరాజుగా పట్టాభిషిక్తుని గావించెను. ఇది దుర్యోధనునిలో ప్రబల అసూయను రగిలించెను.',
    characters: ['యుధిష్ఠిరుడు', 'ధృతరాష్ట్రుడు', 'దుర్యోధనుడు']
  },
  {
    id: 'kuru-ev-varnavrata-lakshagriha',
    yearBCE: 3193,
    yearDisplay: 'BCE 3193',
    titleEn: 'Pandavs entered Varnavrata (Lakshagriha)',
    titleTe: 'వారణావత ప్రవేశం & లక్కఇంటి కుట్ర',
    side: 'left',
    category: 'exile',
    icon: '🪵',
    descriptionEn: 'Conspiracy by Duryodhana, Shakuni, and Purochana to burn Pandavas in a combustible palace of lac (Lakshagriha). Warned by Vidura, the Pandavas escaped through an underground tunnel.',
    descriptionTe: 'దుర్యోధనుని కుతంత్రంతో వారణావతంలో లక్కభవన నిర్మాణం. విదురుని రహస్య సంకేత హెచ్చరికతో భూగర్భ సొరంగం గుండా పాండవులు ప్రాణాలతో తప్పించుకొని అరణ్యాలకు వెడలిరి.',
    characters: ['పాండవులు', 'పురోచనుడు', 'విదురుడు', 'దుర్యోధనుడు']
  },
  {
    id: 'kuru-ev-arjuna-swayamvara',
    yearBCE: 3191,
    yearDisplay: 'BCE 3191',
    titleEn: 'Arjuna won Swayamvara',
    titleTe: 'ద్రౌపదీ స్వయంవరంలో అర్జునుని విజయము',
    side: 'left',
    category: 'milestone',
    icon: '🐟',
    descriptionEn: 'Disguised as young Brahmins, Arjuna lifted the divine bow in King Drupada\'s court, pierced the Matsya Yantra reflecting in oil, and won Princess Draupadi in marriage.',
    descriptionTe: 'బ్రాహ్మణ వేషంలో ఉన్న అర్జునుడు మత్స్యయంత్ర లక్ష్యాన్ని ఛేదించి ద్రౌపదిని వివాహమాడెను. కుంతీదేవి ఆజ్ఞతో ఐదుగురు పాండవులు ద్రౌపదిని ధర్మపత్నిగా స్వీకరించిరి.',
    characters: ['అర్జునుడు', 'ద్రౌపది', 'ద్రుపదుడు', 'శ్రీకృష్ణుడు']
  },
  {
    id: 'kuru-ev-back-to-hastinapur',
    yearBCE: 3190,
    yearDisplay: 'BCE 3190',
    titleEn: 'Back to Hastinapur & Indraprastha Founded',
    titleTe: 'హస్తినాపుర పునరాగమనం & ఇంద్రప్రస్థ నిర్మాణం',
    side: 'right',
    category: 'milestone',
    icon: '🏛️',
    descriptionEn: 'Pandavas made their public return. The Kuru kingdom was partitioned; Pandavas received Khandavaprastha, transforming it into the wondrous golden capital Indraprastha with Lord Krishna and Maya Danava.',
    descriptionTe: 'పాండవులు సజీవంగా ఉన్నారని తెలిసి హస్తినాపురానికి ఆహ్వానించిరి. రాజ్యం రెండుగా విభజించబడి, ఖాండవప్రస్థాన్ని విశ్వకర్మ-మయ నిర్మిత వైభవోపేత ఇంద్రప్రస్థ నగరంగా తీర్చిదిద్దిరి.',
    characters: ['పాండవులు', 'శ్రీకృష్ణుడు', 'మయదానవుడు', 'భీష్ముడు']
  },
  {
    id: 'kuru-ev-abhimanyu-birth',
    yearBCE: 3162,
    yearDisplay: 'BCE 3162',
    titleEn: 'Birth of Abhimanyu',
    titleTe: 'వీర అభిమన్యుని జననం',
    side: 'right',
    category: 'birth',
    icon: '⚡',
    descriptionEn: 'Born to Arjuna and Princess Subhadra (sister of Krishna and Balarama). Learned the art of penetrating the Chakravyuha while still in his mother\'s womb.',
    descriptionTe: 'అర్జునుడు మరియు సుభద్రల దివ్య కుమారుడు. గర్భస్థ శిశువుగా ఉన్నప్పుడే శ్రీకృష్ణుని ద్వారా పద్మవ్యూహ (చక్రవ్యూహ) ప్రవేశ రహస్యాన్ని గ్రహించిన వీరాధివీరుడు.',
    characters: ['అభిమన్యుడు', 'అర్జునుడు', 'సుభద్ర', 'శ్రీకృష్ణుడు']
  },
  {
    id: 'kuru-ev-forest-exile',
    yearBCE: 3142,
    yearDisplay: 'BCE 3142',
    titleEn: 'Pandavas Forest Exile (Dyuta & Vanavasa)',
    titleTe: 'ద్యూత క్రీడ & పాండవుల వనవాసం',
    side: 'left',
    category: 'exile',
    icon: '🌲',
    descriptionEn: 'Defeated in the deceitful dice game (Dyuta) and Draupadi\'s vastrapaharana, Pandavas were condemned to 12 years of forest exile (Vanavasa) and 1 year of incognito living (Agyatavasa).',
    descriptionTe: 'మాయా ద్యూతంలో ఓడిపోయి, ద్రౌపదీ వస్త్రాపహరణ అవమానం అనంతరం 12 ఏండ్ల అరణ్యవాసము, 1 ఏడు విరాట నగరంలో అజ్ఞాతవాసము ప్రారంభమైన కీలక ఘట్టం.',
    characters: ['పాండవులు', 'ద్రౌపది', 'శకుని', 'దుర్యోధనుడు']
  },
  {
    id: 'kuru-ev-kurukshetra-war',
    yearBCE: 3138,
    yearDisplay: 'BCE 3138',
    titleEn: 'Kurukshetra War (18-Day Battle)',
    titleTe: 'మహాభారత కురుక్షేత్ర మహాసంగ్రామం',
    side: 'right',
    category: 'war',
    icon: '⚔️',
    descriptionEn: 'The epic 18-day global battle at Kurukshetra. Lord Krishna delivered the Bhagavad Gita to Arjuna. Righteousness triumphed with the fall of Duryodhana and Kaurava forces.',
    descriptionTe: 'ధర్మసంస్థాపనార్థం 18 రోజుల పాటు సాగిన విశ్వ ప్రసిద్ధ కురుక్షేత్ర సంగ్రామం. యుద్ధభూమిలో గీతోపదేశం. 18 అక్షౌహిణుల సైన్యంతో జరిగిన సంగ్రామంలో పాండవుల విజయము.',
    characters: ['శ్రీకృష్ణుడు', 'అర్జునుడు', 'భీష్ముడు', 'ద్రోణుడు', 'కర్ణుడు', 'దుర్యోధనుడు']
  },
  {
    id: 'kuru-ev-end-of-pandavas',
    yearBCE: 3102,
    yearDisplay: 'BCE 3102',
    titleEn: 'End of Pandavas & Kali Yuga Inception',
    titleTe: 'పాండవుల మహాప్రస్థానం & కలియుగ ప్రారంభం',
    side: 'left',
    category: 'niryana',
    icon: '🏔️',
    descriptionEn: '36 years after the war, Lord Krishna departed to Vaikuntha (Feb 18, 3102 BCE), marking the start of Kali Yuga. Pandavas crowned King Parikshit and undertook their final ascent (Mahaprasthana) to the Himalayas.',
    descriptionTe: 'కురుక్షేత్ర యుద్ధం జరిగిన 36 ఏళ్లకు ప్రభాసతీర్థంలో శ్రీకృష్ణ నిర్యాణం, కలియుగ ఆవిర్భావం (క్రీ.పూ. 3102). పరీక్షిత్తు మహారాజుకు పట్టాభిషేకం చేసి పాండవులు హిమాలయాల వైపు మహాప్రస్థాన యాత్ర సాగించిరి.',
    characters: ['శ్రీకృష్ణుడు', 'ధర్మరాజు', 'పరీక్షిత్తు', 'పాండవులు']
  }
];
