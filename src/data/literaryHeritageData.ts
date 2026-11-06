export interface LiteraryItem {
  titleEn: string;
  titleTe: string;
  detailEn: string;
  detailTe: string;
}

export interface LiteraryBranch {
  id: string;
  number: number;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  color: string;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
  primaryImage: string;
  primaryImageCaptionEn: string;
  primaryImageCaptionTe: string;
  secondaryImage?: string;
  secondaryImageCaptionEn?: string;
  secondaryImageCaptionTe?: string;
  items: LiteraryItem[];
  footerNoteEn?: string;
  footerNoteTe?: string;
  languagesList?: {
    nameEn: string;
    nameTe: string;
    highlightsEn: string;
    highlightsTe: string;
  }[];
}

export interface LearningCentre {
  id: string;
  nameEn: string;
  nameTe: string;
  locationEn: string;
  locationTe: string;
  descriptionEn: string;
  descriptionTe: string;
  subjectsEn: string[];
  subjectsTe: string[];
  image: string;
}

export interface ImportancePillar {
  iconImage: string;
  titleEn: string;
  titleTe: string;
  detailEn: string;
  detailTe: string;
}

export const LITERARY_HERITAGE_OVERVIEW = {
  titleEn: 'Literary Heritage of India',
  titleTe: 'భారతీయ సాహిత్య వారసత్వం',
  chapterBadgeEn: 'ANCIENT TO MODERN LITERARY TREASURY',
  chapterBadgeTe: 'ప్రాచీన వేద వాఙ్మయం నుండి ఆధునిక సాహిత్యం వరకు',
  quoteEn: '“India’s literature is a mirror of its rich culture, wisdom and values.”',
  quoteTe: '“భారతీయ సాహిత్యం మన సుసంపన్నమైన సంస్కృతికి, విజ్ఞానానికి మరియు సనాతన విలువలకు నిలువెత్తు అద్దం.”',
  fullPosterImage: './images/indian_history/literary_heritage_of_india.jpg?v=2',
  headerBooksImage: './images/indian_history/literary_heritage/header_books_quill.jpg',
  centralScrollImage: './images/indian_history/literary_heritage/central_scroll.jpg?v=2',
  bottomBuddhaImage: './images/indian_history/literary_heritage/bottom_buddha_wisdom.jpg',
  bottomScrollBooksImage: './images/indian_history/literary_heritage/bottom_scroll_books.jpg'
};

export const LITERARY_HERITAGE_BRANCHES: LiteraryBranch[] = [
  {
    id: 'ancient_literature',
    number: 1,
    titleEn: 'Ancient Literature',
    titleTe: 'ప్రాచీన వైదిక & ఇతిహాస సాహిత్యం',
    subtitleEn: 'Vedas, Upanishads, Epics, Puranas & Divine Sanskrit',
    subtitleTe: 'వేదాలు, ఉపనిషత్తులు, ఇతిహాసాలు, పురాణాలు & సంస్కృత భాష',
    color: '#C2410C',
    bgColor: '#FFF7ED',
    borderColor: '#FB923C',
    badgeBg: '#EA580C',
    primaryImage: './images/indian_history/literary_heritage/ancient_scroll.jpg',
    primaryImageCaptionEn: 'Ancient Palm-Leaf & Birch-Bark Manuscript Scroll',
    primaryImageCaptionTe: 'ప్రాచీన తాళపత్ర మరియు భూర్జపత్ర గ్రంథ చుట్ట',
    secondaryImage: './images/indian_history/literary_heritage/ancient_oil_lamp.jpg',
    secondaryImageCaptionEn: 'Sacred Lamp of Eternal Vedic Wisdom',
    secondaryImageCaptionTe: 'జ్ఞాన జ్యోతికి ప్రతీక అయిన సాంప్రదాయ దీపం',
    items: [
      {
        titleEn: 'Vedas',
        titleTe: 'చతుర్వేదాలు (Vedas)',
        detailEn: 'Rigveda, Samaveda, Yajurveda, Atharvaveda — the oldest sacred hymns and supreme fountainhead of Indian knowledge.',
        detailTe: 'ఋగ్వేదం, సామవేదం, యజుర్వేదం, అథర్వణవేదం — మానవ జాతి అత్యంత ప్రాచీన జ్ఞాన సంపద.'
      },
      {
        titleEn: 'Upanishads',
        titleTe: 'ఉపనిషత్తులు (Upanishads)',
        detailEn: 'Profound philosophical teachings exploring the nature of the Universe, Brahman (Ultimate Reality), and Atman (Self).',
        detailTe: 'ఆత్మజ్ఞానం, బ్రహ్మతత్వం, మోక్ష స్వరూపాన్ని విశ్లేషించే లోతైన తాత్విక బోధనలు (వేదాంత సారం).'
      },
      {
        titleEn: 'Ramayana',
        titleTe: 'శ్రీమద్రామాయణం (Ramayana)',
        detailEn: 'Composed by Maharshi Valmiki (Adi Kavya); exemplifies the ideal of human life, righteous duty (Dharma), and family values.',
        detailTe: 'వాల్మీకి మహర్షి రచించిన ఆదికావ్యం; ఆదర్శ జీవనం, పితృవాక్య పరిపాలన, ధర్మం మరియు కుటుంబ విలువల ప్రతీక.'
      },
      {
        titleEn: 'Mahabharata',
        titleTe: 'మహాభారతం (Mahabharata)',
        detailEn: 'Composed by Maharshi Ved Vyasa; the world’s grandest epic encompassing timeless life lessons and the sacred Bhagavad Gita.',
        detailTe: 'వేదవ్యాస మహర్షి రచించిన పంచమ వేదం; సకల ధర్మ సూక్ష్మాలు మరియు శ్రీమద్భగవద్గీత బోధనల మహా ఇతిహాసం.'
      },
      {
        titleEn: 'Puranas',
        titleTe: 'పురాణాలు (Puranas)',
        detailEn: '18 Mahapuranas chronicling stories of gods, goddesses, cosmic creation cycles, rishis, and ancient royal lineages.',
        detailTe: 'సృష్టి క్రమం, దేవతలు, మహర్షులు మరియు సూర్య-చంద్ర వంశ రాజుల చరిత్రను వివరించే 18 మహాపురాణాలు.'
      },
      {
        titleEn: 'Sanskrit',
        titleTe: 'సంస్కృతం (Sanskrit)',
        detailEn: 'The classical language of India ("Devabhasha"), celebrated for Panini’s scientific grammar and literary perfection.',
        detailTe: 'భారతదేశ శాస్త్రీయ దేవభాష; పాణిని అష్టాధ్యాయి వ్యాకరణంతో కూడిన అత్యంత శాస్త్రీయ భాష.'
      }
    ]
  },
  {
    id: 'classical_literature',
    number: 2,
    titleEn: 'Classical Literature',
    titleTe: 'శాస్త్రీయ కావ్య & నాటక సాహిత్యం',
    subtitleEn: 'Immortal Sanskrit Dramas, Lyric Poetry & Biographies',
    subtitleTe: 'మహాకవి కాళిదాసు, బాణభట్టుని కావ్యాలు మరియు నాటకాలు',
    color: '#1D4ED8',
    bgColor: '#EFF6FF',
    borderColor: '#60A5FA',
    badgeBg: '#2563EB',
    primaryImage: './images/indian_history/literary_heritage/classical_quill.jpg',
    primaryImageCaptionEn: 'Classical Golden Feather Quill & Inkpot',
    primaryImageCaptionTe: 'శాస్త్రీయ కావ్య రచనకు ప్రతీక అయిన కలం మరియు సిరా బుడ్డి',
    secondaryImage: './images/indian_history/literary_heritage/classical_books.jpg',
    secondaryImageCaptionEn: 'Treasury of Classical Sanskrit Treatises',
    secondaryImageCaptionTe: 'సంస్కృత మహాకావ్యాల గ్రంథ సంపుటి',
    items: [
      {
        titleEn: 'Kalidasa',
        titleTe: 'మహాకవి కాళిదాసు (Kalidasa)',
        detailEn: 'Greatest Sanskrit poet and playwright ("Kavikulaguru"), crown jewel of India’s classical Golden Age.',
        detailTe: 'కవికులగురువుగా కీర్తించబడిన సంస్కృత మహాకవి మరియు విశ్వవిఖ్యాత నాటకకర్త.'
      },
      {
        titleEn: 'Abhijnanashakuntalam',
        titleTe: 'అభిజ్ఞాన శాకుంతలం',
        detailEn: 'World-renowned Sanskrit drama by Kalidasa depicting the immortal love and reunion of Dushyanta and Shakuntala.',
        detailTe: 'దుష్యంతుడు మరియు శకుంతలల ప్రణయ గాథను ఆవిష్కరించిన కాళిదాసు జగత్ప్రసిద్ధ సంస్కృత నాటకం.'
      },
      {
        titleEn: 'Meghadutam',
        titleTe: 'మేఘదూతం (Meghadutam)',
        detailEn: 'A masterpiece lyrical poem (Khandakavya) by Kalidasa where an exiled Yaksha sends a love message via a cloud.',
        detailTe: 'మేఘాన్ని దూతగా పంపి తన ప్రియురాలికి సందేశం పంపే యక్షుని విరహ గాథ (మనోహర ఖండకావ్యం).'
      },
      {
        titleEn: 'Raghuvamsham',
        titleTe: 'రఘువంశం (Raghuvamsham)',
        detailEn: 'Grand epic poem (Mahakavya) by Kalidasa chronicling the noble Solar Dynasty kings from Dilipa to Lord Rama.',
        detailTe: 'దిలీప మహారాజు నుండి శ్రీరామచంద్రుని వరకు రఘువంశ రాజుల పరాక్రమాన్ని, ధర్మాన్ని వర్ణించే మహాకావ్యం.'
      },
      {
        titleEn: 'Banabhatta',
        titleTe: 'బాణభట్టుడు (Banabhatta)',
        detailEn: '7th-century Sanskrit prose master and court poet of Emperor Harsha; author of the celebrated romantic novel Kadambari.',
        detailTe: 'హర్షవర్ధన చక్రవర్తి ఆస్థాన కవి; సంస్కృత గద్య సాహిత్యంలో ప్రసిద్ధమైన "కాదంబరి" నవల రచయిత.'
      },
      {
        titleEn: 'Harshacharita',
        titleTe: 'హర్షచరిత (Harshacharita)',
        detailEn: 'Historical biography of Emperor Harshavardhana written by Banabhatta, the first great historical chronicle in Sanskrit.',
        detailTe: 'బాణభట్టుడు రచించిన శ్రీ హర్షవర్ధనుని జీవిత చరిత్ర; సంస్కృతంలో తొలి చారిత్రక గద్య కావ్యం.'
      }
    ]
  },
  {
    id: 'bhakti_sufi_literature',
    number: 3,
    titleEn: 'Bhakti & Sufi Literature',
    titleTe: 'భక్తి మరియు సూఫీ సాహిత్యం',
    subtitleEn: 'Devotional Hymns of Love, Equality & Universal Brotherhood',
    subtitleTe: 'ప్రేమ, భక్తి, సమానత్వం & విశ్వ సోదరభావాన్ని చాటిన తత్వ కవులు',
    color: '#15803D',
    bgColor: '#F0FDF4',
    borderColor: '#4ADE80',
    badgeBg: '#16A34A',
    primaryImage: './images/indian_history/literary_heritage/bhakti_saint.jpg',
    primaryImageCaptionEn: 'Bhakti Saint Singing Devotional Bhajans with Ektara',
    primaryImageCaptionTe: 'ఏక్‌తారా వాయిస్తూ భక్తి గీతాలు ఆలపిస్తున్న సంత్ కవి',
    secondaryImage: './images/indian_history/literary_heritage/bhakti_veena.jpg',
    secondaryImageCaptionEn: 'Traditional Devotional Lute (Ektara / Tumbi)',
    secondaryImageCaptionTe: 'భక్తి సంగీత వాయిద్యం (ఏక్‌తారా / తంబుర)',
    items: [
      {
        titleEn: 'Kabir',
        titleTe: 'సంత్ కబీర్ (Kabir)',
        detailEn: 'Mystic poet-saint whose Dohas (couplets) taught the unity of God and humanity above all sectarian divisions.',
        detailTe: 'భగవంతుడు ఒక్కడేనని, మానవత్వమే అత్యున్నత ధర్మమని తన దోహాల ద్వారా బోధించిన విప్లవ తత్వవేత్త.'
      },
      {
        titleEn: 'Tulsidas',
        titleTe: 'గోస్వామి తులసీదాసు (Tulsidas)',
        detailEn: 'Composed the immortal epic Ramcharitmanas in Awadhi, making the story of Lord Rama accessible to the common people.',
        detailTe: 'అవధి భాషలో "రామచరితమానస్" మహాకావ్యాన్ని రచించి రామభక్తిని సామాన్య ప్రజల గుండెల్లో నిలిపిన భక్తకవి.'
      },
      {
        titleEn: 'Surdas',
        titleTe: 'సూర్‌దాస్ (Surdas)',
        detailEn: 'Ardent devotee of Lord Krishna whose poetic anthology Sursagar celebrates Krishna’s divine childhood leelas.',
        detailTe: 'శ్రీకృష్ణుని పరమ భక్తుడు; "సూర్ సాగర్" కీర్తనలతో బాలకృష్ణుని లీలలను కళ్ళకు కట్టినట్లు గానం చేసిన వాగ్గేయకారుడు.'
      },
      {
        titleEn: 'Mirabai',
        titleTe: 'మీరాబాయి (Mirabai)',
        detailEn: 'Rajput princess and saint-poetess whose soulful Bhajans expressed supreme, fearless devotion to Lord Krishna.',
        detailTe: 'రాజభోగాలను త్యజించి గిరిధర గోపాలునిపై అనన్య భక్తితో మధురమైన భజనలు రచించిన భక్త కవయిత్రి.'
      },
      {
        titleEn: 'Guru Nanak',
        titleTe: 'గురు నానక్ దేవ్ (Guru Nanak)',
        detailEn: 'Founder of Sikhism; composed spiritual hymns in simple people’s language preaching truth, equality, and service.',
        detailTe: 'సిక్కు మత వ్యవస్థాపకులు; ప్రజల సరళ భాషలో సత్యం, సమానత్వం మరియు నిస్వార్థ సేవను బోధించిన మహాగురువు.'
      },
      {
        titleEn: 'Amir Khusrau',
        titleTe: 'అమీర్ ఖుస్రో (Amir Khusrau)',
        detailEn: 'Sufi poet, scholar, and musician ("Tuti-e-Hind") who wrote in Hindavi and Persian, enriching composite culture.',
        detailTe: 'హిందీ (హిందవీ) మరియు పర్షియన్ భాషలలో రచనలు చేసి భారతీయ సంగీత, సూఫీ సాహిత్యాలను సుసంపన్నం చేసిన కవి.'
      }
    ],
    footerNoteEn: 'Core Message: Love, Devotion, Equality & Universal Brotherhood',
    footerNoteTe: 'ప్రధాన సందేశం: ప్రేమ, భక్తి, సమానత్వం మరియు విశ్వ మానవ సోదరభావం'
  },
  {
    id: 'regional_literature',
    number: 4,
    titleEn: 'Regional Literature',
    titleTe: 'ప్రాంతీయ భాషా సాహిత్య వికాసం',
    subtitleEn: 'Blossoming of Poetry, Drama, Proverbs & Folk Literature across India',
    subtitleTe: 'భారతీయ ప్రాంతీయ భాషలలో వికసించిన పద్య, గద్య, నాటక మరియు జానపద సాహిత్యం',
    color: '#7E22CE',
    bgColor: '#FAF5FF',
    borderColor: '#C084FC',
    badgeBg: '#9333EA',
    primaryImage: './images/indian_history/literary_heritage/regional_dancer.jpg',
    primaryImageCaptionEn: 'Classical Cultural Expression & Regional Literary Traditions',
    primaryImageCaptionTe: 'ప్రాంతీయ సాంస్కృతిక మరియు సాహిత్య కళా వైభవం',
    secondaryImage: './images/indian_history/literary_heritage/regional_books.jpg',
    secondaryImageCaptionEn: 'Multilingual Literary Anthologies',
    secondaryImageCaptionTe: 'బహుభాషా సాహిత్య గ్రంథాలు',
    items: [
      {
        titleEn: 'Development of Regional Languages',
        titleTe: 'ప్రాంతీయ భాషల ఆవిర్భావం & వికాసం',
        detailEn: 'Literature flourished across diverse regional languages, bringing classical wisdom and local ethos to every region.',
        detailTe: 'దేశంలోని వివిధ ప్రాంతీయ భాషలలో సాహిత్యం వికసించి, పురాణ జ్ఞానాన్ని మరియు స్థానిక సంస్కృతిని ప్రజలకు చేరువ చేసింది.'
      },
      {
        titleEn: 'Rich Literary Forms',
        titleTe: 'వైవిధ్యభరిత సాహిత్య ప్రక్రియలు',
        detailEn: 'Enriched with epic poems (Prabandhas), moral stories, dramas, proverbs, philosophical Vachanas, and folk songs.',
        detailTe: 'ప్రబంధ కావ్యాలు, నీతి కథలు, నాటకాలు, సామెతలు, వచనాలు మరియు జానపద గీతాలతో ప్రాంతీయ సాహిత్యం సుసంపన్నమైంది.'
      }
    ],
    languagesList: [
      {
        nameEn: 'Telugu (తెలుగు)',
        nameTe: 'తెలుగు (Telugu)',
        highlightsEn: 'Kavitrayam (Nannaya, Tikkana, Errana), Potana Bhagavatam, Sri Krishnadevaraya (Amuktamalyada), Ashtadiggajas',
        highlightsTe: 'కవిత్రయం (నన్నయ, తిక్కన, ఎర్రన), పోతన భాగవతం, శ్రీకృష్ణదేవరాయల ఆముక్తమాల్యద, అష్టదిగ్గజ కవులు'
      },
      {
        nameEn: 'Tamil (తమిళం)',
        nameTe: 'తమిళం (Tamil)',
        highlightsEn: 'Ancient Sangam Literature, Thiruvalluvar’s Tirukkural, Silappatikaram, Kamba Ramayanam',
        highlightsTe: 'ప్రాచీన సంగం సాహిత్యం, తిరువళ్ళువర్ తిరుక్కుறள், శిలప్పదికారం, కంబ రామాయణం'
      },
      {
        nameEn: 'Kannada (కన్నడ)',
        nameTe: 'కన్నడ (Kannada)',
        highlightsEn: 'Ratnatraya (Pampa, Ponna, Ranna), Basavanna’s Vachana Sahitya, Kumaravyasa Bharata',
        highlightsTe: 'రత్నత్రయం (పంప, పొన్న, రన్న), బసవన్న వచన సాహిత్యం, కుమారవ్యాస భారతం'
      },
      {
        nameEn: 'Gujarati (గుజరాతీ)',
        nameTe: 'గుజరాతీ (Gujarati)',
        highlightsEn: 'Narsinh Mehta ("Vaishnava Jana To"), Bhalan, Premanand Bhatt, Hemachandra',
        highlightsTe: 'నర్సింహ్ మెహతా ("వైష్ణవ జన తో"), ప్రేమానంద్ భట్, ఆచార్య హేమచంద్రుడు'
      },
      {
        nameEn: 'Bengali (బెంగాలీ)',
        nameTe: 'బెంగాలీ (Bengali)',
        highlightsEn: 'Charyapada, Krittivasi Ramayana, Chandidas, Chaitanya Charitamrita, Mangalkavya',
        highlightsTe: 'కృత్తివాస రామాయణం, చండీదాస్ గీతాలు, చైతన్య చరితామృతం, మంగళకావ్యాలు'
      },
      {
        nameEn: 'Marathi (మరాఠీ)',
        nameTe: 'మరాఠీ (Marathi)',
        highlightsEn: 'Sant Dnyaneshwar (Dnyaneshwari), Sant Namdev, Eknath, Sant Tukaram’s Abhangas',
        highlightsTe: 'సంత్ జ్ఞానేశ్వర్ (జ్ఞానేశ్వరి), నామదేవ్, ఏక్‌నాథ్, తుకారాం అభంగాలు'
      },
      {
        nameEn: 'Malayalam (మలయాళం)',
        nameTe: 'మలయాళం (Malayalam)',
        highlightsEn: 'Thunchaththu Ezhuthachan (Adhyatma Ramayanam), Cherusseri, Kunchan Nambiar',
        highlightsTe: 'తుంచత్తు ఎഴുతచ్చన్ (ఆధ్యాత్మ రామాయణం), చెరుശ്ശేరి, కుంచన్ నంబియార్'
      }
    ]
  },
  {
    id: 'modern_literature',
    number: 5,
    titleEn: 'Modern Literature',
    titleTe: 'ఆధునిక సాహిత్యం & జాతీయోద్యమం',
    subtitleEn: 'Awakening Nationalism, Freedom Struggle & Social Reform',
    subtitleTe: 'జాతీయతా భావం, స్వాతంత్ర్య పోరాటం మరియు సామాజిక సంస్కరణల సాహిత్యం',
    color: '#B45309',
    bgColor: '#FFFBEB',
    borderColor: '#FBBF24',
    badgeBg: '#D97706',
    primaryImage: './images/indian_history/literary_heritage/modern_tagore.jpg',
    primaryImageCaptionEn: 'Gurudev Rabindranath Tagore (Nobel Laureate, 1913)',
    primaryImageCaptionTe: 'విశ్వకవి రవీంద్రనాథ్ ఠాగూర్ (నోబెల్ గ్రహీత, 1913)',
    secondaryImage: './images/indian_history/literary_heritage/modern_flag.jpg',
    secondaryImageCaptionEn: 'Nationalism & Patriotic Awakening',
    secondaryImageCaptionTe: 'జాతీయ జెండా మరియు స్వరాజ్య స్ఫూర్తి',
    items: [
      {
        titleEn: 'Bankim Chandra Chattopadhyay',
        titleTe: 'బంకించంద్ర ఛటోపాధ్యాయ',
        detailEn: 'Author of the landmark novel Anandamath and composer of Vande Mataram, the immortal anthem of India’s freedom movement.',
        detailTe: 'ప్రసిద్ధ "ఆనందమఠం" నవల రచయిత మరియు భారత స్వాతంత్ర్య సమరానికి శంఖారావమైన "వందేమాతరం" గీత సృష్టికర్త.'
      },
      {
        titleEn: 'Rabindranath Tagore',
        titleTe: 'రవీంద్రనాథ్ ఠాగూర్',
        detailEn: 'Author of Gitanjali; became Asia’s first Nobel Laureate in Literature (1913) and composed India’s National Anthem.',
        detailTe: '"గీతాంజలి" కావ్య రచయిత; సాహిత్యంలో ఆసియా తొలి నోబెల్ పురస్కార గ్రహీత (1913) మరియు జనగణమన జాతీయ గీత రచయిత.'
      },
      {
        titleEn: 'Munshi Premchand',
        titleTe: 'మున్షీ ప్రేమ్‌చంద్',
        detailEn: 'Celebrated Hindi & Urdu writer ("Upanyas Samrat"); authored Godan, illuminating peasant life and social reform.',
        detailTe: 'హిందీ నవలా సామ్రాట్; "గోదాన్" వంటి మహా నవలలతో గ్రామీణ రైతుల కష్టాలను, సామాజిక సంస్కరణలను ఆవిష్కరించిన రచయిత.'
      },
      {
        titleEn: 'Mahatma Gandhi',
        titleTe: 'మహాత్మా గాంధీ',
        detailEn: 'Profoundly influential writings in journals Young India and Harijan, alongside his autobiography My Experiments with Truth.',
        detailTe: '"యంగ్ ఇండియా", "హరిజన్" పత్రికల సంపాదకీయాలు మరియు "సత్యశోధన" ఆత్మకథ ద్వారా సత్యాగ్రహం, అహింసలను ప్రబోధించిన జాతిపిత.'
      }
    ],
    footerNoteEn: 'Impact: Literature played a key role in spreading Nationalism and Social Reform across India.',
    footerNoteTe: 'ప్రభావం: ప్రజలలో జాతీయతా భావాన్ని రగిలించడంలో మరియు సాంఘిక సంస్కరణలను వ్యాప్తి చేయడంలో ఆధునిక సాహిత్యం కీలక పాత్ర పోషించింది.'
  }
];

export const LITERARY_IMPORTANCE_PILLARS: ImportancePillar[] = [
  {
    iconImage: './images/indian_history/literary_heritage/imp_icon_1_culture.jpg',
    titleEn: 'Preserves our rich culture and traditions',
    titleTe: 'మన సుసంపన్నమైన సంస్కృతి & సంప్రదాయాలను పరిరక్షిస్తుంది',
    detailEn: 'Safeguards ancient rituals, festivals, arts, and civilizational memory across millennia.',
    detailTe: 'వేలాది ఏళ్ల భారతీయ ఆచారాలు, కళలు, పండుగలు మరియు నాగరికత జ్ఞాపకాలను సజీవంగా కాపాడుతుంది.'
  },
  {
    iconImage: './images/indian_history/literary_heritage/imp_icon_2_values.jpg',
    titleEn: 'Teaches moral values and ethics',
    titleTe: 'నైతిక విలువలు మరియు ధర్మ సూత్రాలను బోధిస్తుంది',
    detailEn: 'Instills Satya (truth), Dharma (righteousness), Ahimsa (non-violence), and compassion.',
    detailTe: 'సత్యం, ధర్మం, అహింస, కరుణ మరియు పెద్దల పట్ల గౌరవం వంటి నైతిక విలువలను నేర్పుతుంది.'
  },
  {
    iconImage: './images/indian_history/literary_heritage/imp_icon_3_history.jpg',
    titleEn: 'Provides knowledge about our past and history',
    titleTe: 'మన గతాన్ని మరియు చారిత్రక జ్ఞానాన్ని అందిస్తుంది',
    detailEn: 'Chronicles dynasties, scientific discoveries, governance systems, and philosophical debates.',
    detailTe: 'ప్రాచీన రాజవంశాలు, శాస్త్రీయ ఆవిష్కరణలు, పరిపాలనా పద్ధతులు మరియు తాత్విక చర్చల చరిత్రను తెలియజేస్తుంది.'
  },
  {
    iconImage: './images/indian_history/literary_heritage/imp_icon_4_unity.jpg',
    titleEn: 'Strengthens national unity and cultural identity',
    titleTe: 'జాతీయ సమైక్యతను & సాంస్కృతిక అస్తిత్వాన్ని బలోపేతం చేస్తుంది',
    detailEn: 'Unites diverse languages and regions through shared epics, spiritual ethos, and common heritage.',
    detailTe: 'భిన్న భాషలు, ప్రాంతాలను ఉమ్మడి ఇతిహాసాలు మరియు సాంస్కృతిక బంధంతో ఏకం చేస్తుంది.'
  },
  {
    iconImage: './images/indian_history/literary_heritage/imp_icon_5_inspire.jpg',
    titleEn: 'Inspires and guides individuals and society',
    titleTe: 'వ్యక్తులకు మరియు సమాజానికి నిరంతరం స్ఫూర్తినిస్తుంది',
    detailEn: 'Provides timeless wisdom to overcome life’s challenges and build a harmonious society.',
    detailTe: 'జీవిత సవాళ్లను ఎదుర్కొనే ఆత్మస్థైర్యాన్ని అందిస్తూ ఆదర్శ సమాజ నిర్మాణానికి మార్గనిర్దేశం చేస్తుంది.'
  }
];

export const FAMOUS_CENTRES_OF_LEARNING: LearningCentre[] = [
  {
    id: 'nalanda',
    nameEn: 'Nalanda University',
    nameTe: 'నలందా విశ్వవిద్యాలయం',
    locationEn: 'Situated in Bihar',
    locationTe: 'బీహార్ రాష్ట్రం',
    descriptionEn: 'A great world-renowned Buddhist learning centre (5th–12th century CE) with a 9-story library (Dharmagunj) attracting scholars from China, Korea, Tibet, and Central Asia.',
    descriptionTe: 'బీహార్‌లో వెలసిన ప్రపంచ ప్రసిద్ధ బౌద్ధ మరియు విశ్వ విద్యా కేంద్రం. ఇక్కడి 9 అంతస్తుల "ధర్మగంజ్" గ్రంథాలయం దేశవిదేశాల పండితులను ఆకర్షించింది.',
    subjectsEn: ['Buddhism', 'Philosophy', 'Medicine (Ayurveda)', 'Astronomy', 'Logic (Hetuvidya)', 'Grammar'],
    subjectsTe: ['బౌద్ధ తత్వశాస్త్రం', 'తత్వశాస్త్రం (Philosophy)', 'వైద్య శాస్త్రం (ఆయుర్వేదం)', 'ఖగోళ శాస్త్రం', 'తర్క శాస్త్రం'],
    image: './images/indian_history/literary_heritage/centre_nalanda.jpg'
  },
  {
    id: 'takshashila',
    nameEn: 'Takshashila University',
    nameTe: 'తక్షశిల విశ్వవిద్యాలయం',
    locationEn: 'Situated in present-day Pakistan (Gandhara)',
    locationTe: 'గాంధార ప్రాంతం (నేటి పాకిస్తాన్)',
    descriptionEn: 'One of the earliest centres of higher learning in ancient India where legends like Chanakya (Kautilya), Panini, Charaka, and Jivaka studied and taught.',
    descriptionTe: 'ప్రాచీన భారతదేశపు తొలి అత్యున్నత విశ్వవిద్యాలయం. చాణక్యుడు, పాణిని, చరకుడు, జీవకుడు వంటి మహామేధావులు ఇక్కడే విద్యాభ్యాసం చేశారు.',
    subjectsEn: ['Vedas', 'Politics (Arthashastra)', 'Economics', 'Surgery & Medicine', 'Military Arts', '64 Kalas'],
    subjectsTe: ['వేదాలు', 'రాజనీతి శాస్త్రం', 'అర్థశాస్త్రం (Economics)', 'శస్త్రచికిత్స (Surgery)', 'యుద్ధ కళలు & 64 కళలు'],
    image: './images/indian_history/literary_heritage/centre_takshashila.jpg'
  },
  {
    id: 'varanasi',
    nameEn: 'Varanasi (Kashi)',
    nameTe: 'వారణాసి (కాశీ విద్యాక్షేత్రం)',
    locationEn: 'Banks of River Ganga, Uttar Pradesh',
    locationTe: 'గంగా నదీ తీరం, ఉత్తర ప్రదేశ్',
    descriptionEn: 'One of the oldest living cities in the world and the supreme timeless seat of Sanskrit learning, Upanishadic philosophy, Nyaya, and religion.',
    descriptionTe: 'ప్రపంచంలోనే అత్యంత ప్రాచీన సజీవ నగరం; వేల సంవత్సరాలుగా సంస్కృత విద్య, వేదాంతం, దర్శన శాస్త్రాలు మరియు ఆధ్యాత్మిక జ్ఞానానికి పరమ కేంద్రం.',
    subjectsEn: ['Sanskrit Grammar', 'Vedanta Philosophy', 'Religion & Dharma', 'Music & Arts', 'Jyotisha'],
    subjectsTe: ['సంస్కృత సాహిత్యం & వ్యాకరణం', 'వేదాంత తత్వశాస్త్రం', 'సనాతన ధర్మం', 'శాస్త్రీయ సంగీతం'],
    image: './images/indian_history/literary_heritage/centre_varanasi.jpg'
  },
  {
    id: 'vallabhi',
    nameEn: 'Vallabhi Vidhya Pith',
    nameTe: 'వల్లభి విద్యాపీఠం',
    locationEn: 'Situated in Saurashtra, Gujarat',
    locationTe: 'సౌరాష్ట్ర ప్రాంతం, గుజరాత్',
    descriptionEn: 'Flourished under the Maitraka dynasty in Gujarat; celebrated alongside Nalanda for secular governance studies, economics, law, and Buddhist philosophy.',
    descriptionTe: 'గుజరాత్‌లో మైత్రక రాజుల పోషణలో వర్ధిల్లిన మహా విద్యాపీఠం. రాజనీతి, వాణిజ్యం, న్యాయశాస్త్రం మరియు బౌద్ధ అధ్యయనాలకు ప్రసిద్ధి చెందింది.',
    subjectsEn: ['Arts & Humanities', 'Sciences', 'Commerce & Accounting', 'Law (Niti Shastra)', 'Buddhist Studies'],
    subjectsTe: ['కళలు (Arts)', 'విజ్ఞాన శాస్త్రాలు (Sciences)', 'వాణిజ్యం (Commerce)', 'న్యాయ శాస్త్రం (Law)', 'బౌద్ధ అధ్యయనాలు'],
    image: './images/indian_history/literary_heritage/centre_vallabhi.jpg'
  }
];

export const LITERARY_KEY_POINTS = {
  pointsEn: [
    'Indian literature is extraordinarily old, continuous, and richly diverse.',
    'It has evolved organically from ancient Vedic hymns to modern nationalist and reformist works.',
    'It reflects the deepest thoughts, spiritual values, and noble aspirations of our people.',
    'It is a timeless treasure of universal knowledge, ethical wisdom, and artistic creativity.',
    'We must respect, preserve, study, and promote our priceless literary heritage for future generations.'
  ],
  pointsTe: [
    'భారతీయ సాహిత్యం అత్యంత ప్రాచీనమైనది, నిరంతరాయమైనది మరియు ఎంతో వైవిధ్యభరితమైనది.',
    'ఇది ప్రాచీన వేద కాలం నుండి ఆధునిక యుగం వరకు కాలానుగుణంగా పరిణామం చెందుతూ వచ్చింది.',
    'ఇది మన ప్రజల ఆలోచనలు, నైతిక విలువలు మరియు ఉన్నత ఆశయాలను ప్రతిబింబిస్తుంది.',
    'ఇది అపారమైన జ్ఞానం, వివేకం మరియు సృజనాత్మకతల అమూల్య నిధి.',
    'మన మహోన్నత సాహిత్య వారసత్వాన్ని గౌరవించడం, రక్షించడం మరియు భావి తరాలకు అందించడం మనందరి బాధ్యత.'
  ]
};
