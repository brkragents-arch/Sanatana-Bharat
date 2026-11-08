const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve('public/images/gurus');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const posterPath = path.resolve('public/images/gurus/guru_parampara_poster.png');

async function extractGurus() {
  const image = sharp(posterPath);
  const metadata = await image.metadata();

  const guruCrops = [
    // ROW 1: సదాశివ సమారంభాం (Sadashiva Samarambham)
    {
      id: 'guru_01_dakshinamurthy',
      nameTe: 'గురు దక్షిణామూర్తి',
      nameEn: 'Guru Sri Dakshinamurthy',
      titleTe: 'ఆది గురు స్వరూపం • జ్ఞాన ప్రదాత',
      titleEn: 'Primordial Guru • Embodiment of Divine Knowledge',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 1,
      rect: { left: 8, top: 2, width: 80, height: 142 }
    },
    {
      id: 'guru_02_vedavyasa',
      nameTe: 'గురు వేదవ్యాస మహర్షి',
      nameEn: 'Guru Veda Vyasa Maharshi',
      titleTe: 'చతుర్వేద విభాగకర్త • అష్టాదశ పురాణ కర్త',
      titleEn: 'Compiler of the 4 Vedas & 18 Puranas',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 2,
      rect: { left: 120, top: 18, width: 82, height: 122 }
    },
    {
      id: 'guru_03_shuka_maharshi',
      nameTe: 'గురు శుక మహర్షి',
      nameEn: 'Guru Shuka Maharshi',
      titleTe: 'శ్రీమద్భాగవత ఉపదేశకులు (పరీక్షిత్ సంవాదం)',
      titleEn: 'Revealer of Srimad Bhagavatam to King Parikshit',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 3,
      rect: { left: 218, top: 8, width: 154, height: 130 }
    },
    {
      id: 'guru_04_narada_maharshi',
      nameTe: 'గురు నారద మహర్షి',
      nameEn: 'Guru Narada Maharshi',
      titleTe: 'దేవర్షి • భక్తి సూత్ర ప్రవర్తకులు',
      titleEn: 'Devarshi • Master of Bhakti Sutras & Divine Music',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 4,
      rect: { left: 378, top: 8, width: 72, height: 124 }
    },
    {
      id: 'guru_05_valmiki_maharshi',
      nameTe: 'గురు వాల్మీకి మహర్షి',
      nameEn: 'Guru Valmiki Maharshi',
      titleTe: 'ఆదికవి • శ్రీమద్రామాయణ కర్త',
      titleEn: 'Adi Kavi • Author of the Epic Srimad Ramayana',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 5,
      rect: { left: 454, top: 18, width: 94, height: 118 }
    },
    {
      id: 'guru_06_sri_krishna',
      nameTe: 'గురు శ్రీకృష్ణ పరమాత్మ',
      nameEn: 'Guru Sri Krishna (Jagadguru)',
      titleTe: 'కృష్ణం వందే జగద్గురుమ్ • శ్రీమద్భగవద్గీతా ప్రబోధకులు',
      titleEn: 'Krishnam Vande Jagadgurum • Speaker of Bhagavad Gita',
      section: 'sadashiva',
      sectionTe: 'సదాశివ సమారంభాం',
      sectionEn: 'Sadashiva Samarambham',
      order: 6,
      rect: { left: 564, top: 0, width: 114, height: 140 }
    },

    // ROW 2: శంకరాచార్య మధ్యమాం (Shankaracharya Madhyamam Part 1)
    {
      id: 'guru_07_dattatreya',
      nameTe: 'గురు దత్తాత్రేయ',
      nameEn: 'Guru Dattatreya',
      titleTe: 'త్రిమూర్తి స్వరూప అవధూత గురువు',
      titleEn: 'Trimurti Incarnation • Supreme Avadhuta Guru',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 7,
      rect: { left: 2, top: 176, width: 94, height: 124 }
    },
    {
      id: 'guru_08_babaji',
      nameTe: 'గురు బాబాజీ (మహావతార్ బాబాజీ)',
      nameEn: 'Guru Mahavatar Babaji',
      titleTe: 'క్రియాయోగ పునరుద్ధారకులు • అమర గురువు',
      titleEn: 'Reviver of Kriya Yoga • Deathless Master of Himalayas',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 8,
      rect: { left: 106, top: 182, width: 82, height: 116 }
    },
    {
      id: 'guru_09_gautama_buddha',
      nameTe: 'గురు గౌతమ బుద్ధ',
      nameEn: 'Guru Gautama Buddha',
      titleTe: 'జ్ఞానోదయ ప్రదాత • అహింసా పరమో ధర్మః',
      titleEn: 'The Awakened One • Tathagata & Lord of Compassion',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 9,
      rect: { left: 216, top: 174, width: 92, height: 120 }
    },
    {
      id: 'guru_10_adi_shankaracharya',
      nameTe: 'గురు ఆదిశంకరాచార్య',
      nameEn: 'Jagadguru Adi Shankaracharya',
      titleTe: 'అద్వైత సిద్ధాంత స్థాపకులు • చతురామ్నాయ పీఠాధిపతులు',
      titleEn: 'Propounder of Advaita Vedanta • Founder of 4 Amnaya Peethams',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 10,
      rect: { left: 338, top: 172, width: 90, height: 126 }
    },
    {
      id: 'guru_11_ramanujacharya',
      nameTe: 'గురు రామానుజాచార్యులు',
      nameEn: 'Jagadguru Ramanujacharya',
      titleTe: 'విశిష్టాద్వైత సిద్ధాంత ప్రవర్తకులు • శ్రీవైష్ణవ సంప్రదాయం',
      titleEn: 'Propounder of Vishishtadvaita Vedanta • Sri Vaishnavism',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 11,
      rect: { left: 456, top: 180, width: 96, height: 126 }
    },
    {
      id: 'guru_12_dnyaneshwar',
      nameTe: 'గురు జ్ఞానేశ్వర్',
      nameEn: 'Sant Jnaneshwar (Dnyaneshwar)',
      titleTe: 'జ్ఞానేశ్వరి కర్త • వర్కారీ సంప్రదాయ పితామహులు',
      titleEn: 'Author of Jnaneshwari • Luminary of Varkari Tradition',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం',
      sectionEn: 'Shankaracharya Madhyamam',
      order: 12,
      rect: { left: 584, top: 180, width: 90, height: 124 }
    },

    // ROW 3: భక్తి సంతులు & మహర్షులు (Row 3)
    {
      id: 'guru_13_ravidas',
      nameTe: 'గురు రవిదాస్',
      nameEn: 'Sant Guru Ravidas',
      titleTe: 'భక్తి ఉద్యమ మార్గదర్శి • బేగంపుర ఆదర్శ సమాజం',
      titleEn: 'Bhakti Luminary • Visionary of Begampura',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 13,
      rect: { left: 10, top: 320, width: 78, height: 122 }
    },
    {
      id: 'guru_14_kabir_das',
      nameTe: 'గురు కబీర్ దాస్',
      nameEn: 'Sant Kabir Das',
      titleTe: 'నిర్గుణ భక్తి ప్రవర్తకులు • కబీర్ దోహావళి',
      titleEn: 'Mystic Poet-Saint • Master of Nirguna Bhakti & Dohas',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 14,
      rect: { left: 98, top: 320, width: 68, height: 116 }
    },
    {
      id: 'guru_15_chaitanya_mahaprabhu',
      nameTe: 'గురు చైతన్య మహాప్రభువు',
      nameEn: 'Guru Chaitanya Mahaprabhu',
      titleTe: 'గౌడీయ వైష్ణవ ప్రవర్తకులు • హరినామ సంకీర్తనామృతం',
      titleEn: 'Father of Harinama Sankirtan Movement • Gaudiya Vaishnavism',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 15,
      rect: { left: 172, top: 312, width: 86, height: 122 }
    },
    {
      id: 'guru_16_guru_nanak',
      nameTe: 'గురు నానక్ దేవ్ జీ',
      nameEn: 'Guru Nanak Dev Ji',
      titleTe: 'సిక్కు ధర్మ స్థాపకులు • ఏకేశ్వరోపాసన & సమానత్వం',
      titleEn: 'Founder of Sikh Dharma • Ik Onkar & Universal Harmony',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 16,
      rect: { left: 266, top: 324, width: 98, height: 102 }
    },
    {
      id: 'guru_17_raghavendra_swami',
      nameTe: 'గురు రాఘవేంద్ర స్వామి',
      nameEn: 'Guru Raghavendra Swami',
      titleTe: 'మంత్రాలయ నివాసి • ద్వైత వేదాంత మార్గదర్శి',
      titleEn: 'Saint of Mantralayam • Dvaita Vedanta Master & Brindavan',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 17,
      rect: { left: 370, top: 320, width: 88, height: 118 }
    },
    {
      id: 'guru_18_veerabrahmendra_swami',
      nameTe: 'గురు వీరబ్రహ్మేంద్ర స్వామి',
      nameEn: 'Guru Sri Potuluri Veerabrahmendra Swami',
      titleTe: 'కాలజ్ఞాన కర్త • బ్రహ్మంగారి మఠం',
      titleEn: 'Author of Kalajnana (Prophecies) • Master of Advaita Siddhi',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 18,
      rect: { left: 464, top: 312, width: 118, height: 124 }
    },
    {
      id: 'guru_19_yogi_vemana',
      nameTe: 'యోగి వేమన',
      nameEn: 'Yogi Vemana',
      titleTe: 'ఆచల సిద్ధాంత యోగి • వేమన శతక కర్త',
      titleEn: 'Jnana Yogi • Author of Immortal Vemana Shatakam',
      section: 'shankaracharya',
      sectionTe: 'శంకరాచార్య మధ్యమాం (భక్తి యోగం)',
      sectionEn: 'Shankaracharya Madhyamam (Bhakti Yoga)',
      order: 19,
      rect: { left: 588, top: 316, width: 86, height: 114 }
    },

    // ROW 4: అస్మదాచార్య పర్యంతాం (Asmadacharya Paryantam Part 1)
    {
      id: 'guru_20_trailanga_swami',
      nameTe: 'గురు త్రైలింగ స్వామి',
      nameEn: 'Guru Trailanga Swami',
      titleTe: 'కాశీ సజీవ విశ్వనాథుడు • సిద్ధ యోగిరాజ్',
      titleEn: 'Walking Shiva of Varanasi • Great Siddha Yogi of Bengal/Kashi',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 20,
      rect: { left: 16, top: 472, width: 94, height: 122 }
    },
    {
      id: 'guru_21_lahiri_mahasaya',
      nameTe: 'గురు లాహిరి మహాశయ',
      nameEn: 'Yogiraj Lahiri Mahasaya',
      titleTe: 'క్రియాయోగ గురుపరంపర • గృహస్థ యోగి మార్గదర్శి',
      titleEn: 'Yogiraj of Kriya Yoga • Divine Ideal of Householder Yogi',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 21,
      rect: { left: 124, top: 472, width: 90, height: 120 }
    },
    {
      id: 'guru_22_ramakrishna_sharada',
      nameTe: 'గురు రామకృష్ణ పరమహంస & అమ్మ శారదా దేవి',
      nameEn: 'Sri Ramakrishna Paramahamsa & Sri Sarada Devi',
      titleTe: 'యుగావతార స్వరూపులు • దక్షిణేశ్వర దివ్య దంపతులు',
      titleEn: 'Divine Avatara of Dakshineswar & Holy Mother Sri Sarada Devi',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 22,
      rect: { left: 230, top: 466, width: 188, height: 126 }
    },
    {
      id: 'guru_23_vivekananda',
      nameTe: 'గురు స్వామి వివేకానంద',
      nameEn: 'Swami Vivekananda',
      titleTe: 'భారతీయ సనాతన ధర్మ విశ్వవిజేత • వేదాంత ప్రబోధకులు',
      titleEn: 'Lion of Vedanta • Global Ambassador of Sanatana Dharma',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 23,
      rect: { left: 430, top: 466, width: 76, height: 124 }
    },
    {
      id: 'guru_24_sai_baba',
      nameTe: 'గురు షిరిడీ సాయిబాబా',
      nameEn: 'Guru Shirdi Sai Baba',
      titleTe: 'శ్రద్ధా & సబూరి • సబ్ కా మాలిక్ ఏక్',
      titleEn: 'Shraddha & Saburi • Universal Saint of Shirdi',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 24,
      rect: { left: 504, top: 466, width: 92, height: 128 }
    },
    {
      id: 'guru_25_aurobindo',
      nameTe: 'గురు శ్రీ అరవిందో',
      nameEn: 'Sri Aurobindo Ghosh',
      titleTe: 'పూర్ణ యోగ ప్రవర్తకులు • పాండిచ్చేరి ఆశ్రమం',
      titleEn: 'Master of Integral Yoga • Spiritual Visionary of Pondicherry',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం',
      sectionEn: 'Asmadacharya Paryantam',
      order: 25,
      rect: { left: 604, top: 480, width: 74, height: 108 }
    },

    // ROW 5: ఆధునిక యుగ మహర్షులు & ఆచార్యులు (Row 5)
    {
      id: 'guru_26_ramana_maharshi',
      nameTe: 'గురు రమణ మహర్షి',
      nameEn: 'Bhagavan Sri Ramana Maharshi',
      titleTe: 'ఆత్మ విచారణ మార్గదర్శి (నేనెవరు?) • అరుణాచల శివ',
      titleEn: 'Sage of Arunachala • Master of Self-Enquiry (Who Am I?)',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 26,
      rect: { left: 16, top: 602, width: 92, height: 130 }
    },
    {
      id: 'guru_27_yogananda',
      nameTe: 'గురు పరమహంస యోగానంద',
      nameEn: 'Paramahansa Yogananda',
      titleTe: 'ఒక యోగి ఆత్మకథ కర్త • పాశ్చాత్య జగతిలో క్రియాయోగ దివిటీ',
      titleEn: 'Author of Autobiography of a Yogi • Kriya Yoga to the World',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 27,
      rect: { left: 132, top: 628, width: 84, height: 106 }
    },
    {
      id: 'guru_28_bhaktivedanta_prabhupada',
      nameTe: 'గురు ఏ.సి. భక్తివేదాంత స్వామి ప్రభుపాద',
      nameEn: 'A.C. Bhaktivedanta Swami Prabhupada',
      titleTe: 'ఇస్కాన్ (ISKCON) సంస్థాపకాచార్యులు • హరేకృష్ణ ఉద్యమం',
      titleEn: 'Founder-Acharya of ISKCON • Global Harinama Movement',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 28,
      rect: { left: 234, top: 608, width: 114, height: 130 }
    },
    {
      id: 'guru_29_malayala_swami',
      nameTe: 'గురు మలయాళ స్వామి',
      nameEn: 'Sadguru Sri Malayala Swami',
      titleTe: 'శ్రీ వ్యాసాశ్రమ స్థాపకులు (ఏర్పేడు) • శుష్క వేదాంత తమోభాస్కరం',
      titleEn: 'Founder of Sri Vyasashram (Yerpedu) • Light of Sanatana Dharma',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 29,
      rect: { left: 378, top: 612, width: 88, height: 126 }
    },
    {
      id: 'guru_30_vidyaprakashanandagiri',
      nameTe: 'గురు శ్రీ విద్యాప్రకాశానందగిరి స్వామి',
      nameEn: 'Sri Vidyaprakashanandagiri Swamy',
      titleTe: 'శ్రీ శుకబ్రహ్మాశ్రమ స్థాపకులు (శ్రీకాళహస్తి) • గీతా మకరందం కర్త',
      titleEn: 'Founder of Sri Sukabrahma Ashram • Author of Gita Makarandam',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 30,
      rect: { left: 480, top: 622, width: 104, height: 116 }
    },
    {
      id: 'guru_31_chandrashekhara_paramacharya',
      nameTe: 'గురు చంద్రశేఖరేంద్ర సరస్వతీ పరమాచార్య',
      nameEn: 'Kanchi Paramacharya Sri Chandrashekharendra Saraswati',
      titleTe: 'కంచి కామకోటి పీఠాధిపతులు • నడిచే దైవం (మహాపెరియవ)',
      titleEn: '68th Shankaracharya of Kanchi Kamakoti Peetham • Mahaperiyava',
      section: 'asmadacharya',
      sectionTe: 'అస్మదాచార్య పర్యంతాం (యుగ గురువులు)',
      sectionEn: 'Asmadacharya Paryantam (Modern Yuga Gurus)',
      order: 31,
      rect: { left: 590, top: 596, width: 98, height: 142 }
    }
  ];

  console.log(`Starting extraction of ${guruCrops.length} gurus...`);

  for (const guru of guruCrops) {
    const filename = `${guru.id}.png`;
    const dest = path.join(outDir, filename);

    // Crop directly from source image with exact bounds
    await sharp(posterPath)
      .extract({
        left: guru.rect.left,
        top: guru.rect.top,
        width: guru.rect.width,
        height: guru.rect.height
      })
      .png({ quality: 100 })
      .toFile(dest);

    guru.imageSrc = `/images/gurus/${filename}`;
  }

  // Also write the metadata as JSON data file for the application
  const dataPath = path.resolve('src/data/guruParamparaData.ts');
  const fileContent = `// Autogenerated Sanatana Guru Parampara Data extracted directly from source poster
export interface GuruParamparaItem {
  id: string;
  nameTe: string;
  nameEn: string;
  titleTe: string;
  titleEn: string;
  section: 'sadashiva' | 'shankaracharya' | 'asmadacharya';
  sectionTe: string;
  sectionEn: string;
  order: number;
  imageSrc: string;
}

export const GURU_PARAMPARA_SHLOKA = {
  sanskrit: 'सदाशिव समारम्भां शङ्कराचार्य मध्यमाम् ।\\nअस्मदाचार्य पर्यन्तां वन्दे गुरुपरम्पराम् ॥',
  telugu: 'సదాశివ సమారంభాం శంకరాచార్య మధ్యమామ్ |\\nఅస్మదాచార్య పర్యంతాం వందే గురుపరంపరామ్ ||',
  english: 'Sadashiva Samarambham Shankaracharya Madhyamam |\\nAsmadacharya Paryantam Vande Guru Paramparam ||',
  meaningTe: 'ఆదిదేవుడైన సదాశివునితో ప్రారంభమై, జగద్గురు ఆదిశంకరాచార్యులు మధ్యలో నిలిచి, మన ప్రస్తుత గురువుల వరకు కొనసాగుతున్న దివ్య గురుపరంపరకు నా భక్తిపూర్వక ప్రణామాలు.',
  meaningEn: 'Beginning with Lord Sadashiva, with Sri Shankaracharya in the middle, and extending up to our own revered Guru, I bow to this sacred lineage of Gurus.',
  sourcePosterSrc: '/images/gurus/guru_parampara_poster.png'
};

export const GURU_PARAMPARA_DATA: GuruParamparaItem[] = ${JSON.stringify(guruCrops, null, 2)};
`;

  fs.writeFileSync(dataPath, fileContent, 'utf-8');
  console.log(`Successfully extracted ${guruCrops.length} images and wrote src/data/guruParamparaData.ts!`);
}

extractGurus().catch(console.error);
