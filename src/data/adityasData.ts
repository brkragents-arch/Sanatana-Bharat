export interface AdityaItem {
  id: number;
  nameTe: string;
  nameEn: string;
  monthTe: string;
  monthEn: string;
  roleTe: string;
  roleEn: string;
  icon: string;
}

export interface AdityaSignificance {
  titleTe: string;
  titleEn: string;
  descTe: string;
  descEn: string;
  icon: string;
}

export const ADITYAS_INTRO_TE = `హిందూ పురాణాలు మరియు వేదాల ప్రకారం ద్వాదశ ఆదిత్యులు (12 మంది ఆదిత్యులు) సూర్య భగవానుని యొక్క పన్నెండు రూపాలు, ఇవి సంవత్సరంలోని 12 నెలలకు మరియు కాల చక్రానికి ప్రతిరూపాలు. కశ్యప ప్రజాపతి మరియు అదితి దంపతులకు జన్మించినందున వీరికి 'ఆదిత్యులు' అనే పేరు వచ్చింది. ద్వాదశ ఆదిత్యుల ప్రాముఖ్యత మరియు వారి విశిష్టత కింద పేర్కొనబడింది:`;

export const ADITYAS_INTRO_EN = `According to Hindu Puranas and the Vedas, the Dvadasha Adityas (12 Adityas) are twelve divine forms of Lord Surya (Sun God), representing the 12 months of the year and the Cosmic Wheel of Time (Kala Chakra). Born to Sage Kashyapa Prajapati and Aditi, they earned the revered title 'Adityas'. Below is the deep spiritual and temporal significance of the 12 Adityas:`;

export const TWELVE_ADITYAS_LIST: AdityaItem[] = [
  {
    id: 1,
    nameTe: 'ధాత',
    nameEn: 'Dhata / Dhatri',
    monthTe: 'చైత్ర మాసం',
    monthEn: 'Chaitra (March - April)',
    roleTe: 'సృష్టి కార్యాన్ని, జీవుల ఉత్పత్తిని పర్యవేక్షిస్తాడు',
    roleEn: 'Oversees cosmic genesis, life-generation, and reproduction of all species',
    icon: '🌱'
  },
  {
    id: 2,
    nameTe: 'అర్యముడు',
    nameEn: 'Aryama',
    monthTe: 'వైశాఖ మాసం',
    monthEn: 'Vaisakha (April - May)',
    roleTe: 'సమాజంలో ధర్మాన్ని, న్యాయాన్ని మరియు పితృదేవతల శక్తులను నియంత్రిస్తాడు',
    roleEn: 'Governs righteous societal order, nobility, justice, and ancestral powers (Pitrus)',
    icon: '⚖️'
  },
  {
    id: 3,
    nameTe: 'మిత్రుడు',
    nameEn: 'Mitra',
    monthTe: 'జ్యేష్ఠ మాసం',
    monthEn: 'Jyeshtha (May - June)',
    roleTe: 'స్నేహం, శాంతి, విశ్వాసం మరియు సార్వత్రిక కల్యాణానికి ప్రతీక',
    roleEn: 'Embodiment of universal friendship, harmony, trustworthiness, and cosmic goodwill',
    icon: '🤝'
  },
  {
    id: 4,
    nameTe: 'వరుణుడు',
    nameEn: 'Varuna',
    monthTe: 'ఆషాఢ మాసం',
    monthEn: 'Ashadha (June - July)',
    roleTe: 'నీరు, సముద్రాలు మరియు వర్షాలను శాసిస్తూ జీవకోటికి ప్రాణాధారంగా నిలుస్తాడు',
    roleEn: 'Rules oceanic waters, clouds, and celestial showers that sustain all living existence',
    icon: '🌊'
  },
  {
    id: 5,
    nameTe: 'ఇంద్రుడు',
    nameEn: 'Indra',
    monthTe: 'శ్రావణ మాసం',
    monthEn: 'Shravana (July - August)',
    roleTe: 'దేవతల రాజుగా, శత్రువులను సంహరించే శక్తిగా మరియు వర్షకారకుడిగా ఉంటాడు',
    roleEn: 'King of celestials, invincible protector against darkness, and bringer of seasonal monsoons',
    icon: '⚡'
  },
  {
    id: 6,
    nameTe: 'వివస్వాన్',
    nameEn: 'Vivasvan',
    monthTe: 'భాద్రపద మాసం',
    monthEn: 'Bhadrapada (August - September)',
    roleTe: 'అగ్ని తేజస్సుతో, సూర్యుని ప్రఖర కాంతితో జగత్తును ప్రకాశింపజేస్తాడు',
    roleEn: 'Illuminates the universe with blinding radiance, solar power, and primal fire',
    icon: '🔥'
  },
  {
    id: 7,
    nameTe: 'పూషుడు',
    nameEn: 'Pushan',
    monthTe: 'ఆశ్వయుజ మాసం',
    monthEn: 'Ashwayuja (September - October)',
    roleTe: 'పోషణకు అధిపతి. పంటలను, పశువులను మరియు ప్రయాణికులను రక్షిస్తాడు',
    roleEn: 'Lord of nourishment, bounty, harvest, guardian of cattle, pathways, and travelers',
    icon: '🌾'
  },
  {
    id: 8,
    nameTe: 'పర్జన్యుడు',
    nameEn: 'Parjanya',
    monthTe: 'కార్తీక మాసం',
    monthEn: 'Karthika (October - November)',
    roleTe: 'మేఘాలకు అధిపతిగా ఉండి, వర్షాలు కురిపించి భూమిని సస్యశ్యామలం చేస్తాడు',
    roleEn: 'Sovereign of rainclouds; blesses mother Earth with vegetation and agricultural richness',
    icon: '🌧️'
  },
  {
    id: 9,
    nameTe: 'అంశుమంతుడు',
    nameEn: 'Amshuman',
    monthTe: 'మార్గశిర మాసం',
    monthEn: 'Margashirsha (November - December)',
    roleTe: 'కిరణాల ద్వారా జీవులలో చైతన్యాన్ని, ఆరోగ్యాన్ని నింపుతాడు',
    roleEn: 'Infuses vital prana, vigor, radiant warmth, and healing energy into living beings',
    icon: '✨'
  },
  {
    id: 10,
    nameTe: 'భగుడు',
    nameEn: 'Bhaga',
    monthTe: 'పుష్య మాసం',
    monthEn: 'Pushya (December - January)',
    roleTe: 'ఐశ్వర్యం, భాగ్యం మరియు సమృద్ధిని ప్రసాదించేవాడు',
    roleEn: 'Dispenser of good fortune, wealth, matrimonial harmony, and divine prosperity',
    icon: '💰'
  },
  {
    id: 11,
    nameTe: 'త్వష్ట',
    nameEn: 'Tvashta',
    monthTe: 'మాఘ మాసం',
    monthEn: 'Magha (January - February)',
    roleTe: 'శిల్పకళ, సృజనాత్మకత మరియు విశ్వకర్మ రూపంలో నూతన వస్తువుల సృష్టికి కారకుడు',
    roleEn: 'Master architect of sacred form; inspires creative crafts, divine geometry, and invention',
    icon: '⚒️'
  },
  {
    id: 12,
    nameTe: 'విష్ణువు',
    nameEn: 'Vishnu',
    monthTe: 'ఫాల్గుణ మాసం',
    monthEn: 'Phalguna (February - March)',
    roleTe: 'జగత్ రక్షకుడిగా, అంతిమ సత్యంగా మరియు ధర్మ సంస్థాపకుడిగా నిలుస్తాడు',
    roleEn: 'Supreme cosmic preserver, ultimate reality, and eternal restorer of cosmic balance',
    icon: '🪷'
  }
];

export const ADITYAS_SIGNIFICANCE: AdityaSignificance[] = [
  {
    titleTe: 'కాల చక్ర నియంత్రణ',
    titleEn: 'Kala Chakra (Time Cycle) Governance',
    descTe: 'వీరు పన్నెండు మంది కలిసి కాలానికి (Time), రుతువుల మార్పులకు మరియు పగలు-రాత్రి చక్రానికి కారణమవుతారు.',
    descEn: 'Together, the twelve Adityas regulate time itself, guiding seasonal shifts and the diurnal cosmic rhythm of day and night.',
    icon: '⏳'
  },
  {
    titleTe: 'ఆరోగ్యం మరియు శక్తి',
    titleEn: 'Pranic Health & Vital Energy',
    descTe: 'మానవ శరీరంలోని ప్రాణశక్తికి, కంటి చూపుకు మరియు బుద్ధి వికాసానికి ఆదిత్యుల అనుగ్రహం అవసరం.',
    descEn: 'The grace of the Adityas sustains vital life energy (Prana), ocular health and vision, and mental enlightenment.',
    icon: '👁️'
  },
  {
    titleTe: 'సూర్య నమస్కారాలు',
    titleEn: 'Surya Namaskaras Alignment',
    descTe: 'యోగాలో చేసే 12 సూర్య నమస్కారాల భంగిమలు ఈ 12 మంది ఆదిత్యుల శక్తులను, గుణాలను సూచిస్తాయి.',
    descEn: 'The 12 postures of yogic Surya Namaskara invoke and channel the sacred attributes and energies of the 12 Adityas.',
    icon: '🧘‍♂️'
  }
];

export const ADITYAS_RAW_TELUGU_TEXT = `12 మంది ఆదిత్యులు: హిందూ పురాణాలు మరియు వేదాల ప్రకారం ద్వాదశ ఆదిత్యులు (12 మంది ఆదిత్యులు) సూర్య భగవానుని యొక్క పన్నెండు రూపాలు, ఇవి సంవత్సరంలోని 12 నెలలకు మరియు కాల చక్రానికి ప్రతిరూపాలు. కశ్యప ప్రజాపతి మరియు అదితి దంపతులకు జన్మించినందున వీరికి 'ఆదిత్యులు' అనే పేరు వచ్చింది.
ద్వాదశ ఆదిత్యుల ప్రాముఖ్యత మరియు వారి విశిష్టత కింద పేర్కొనబడింది:

12 రూపాలు మరియు వాటి ప్రాముఖ్యత

సంవత్సరంలోని ఒక్కో నెలకు ఒక్కో ఆదిత్యుడు అధిపతిగా ఉంటూ ఈ సృష్టిని నడిపిస్తుంటాడు:
• ధాత: సృష్టి కార్యాన్ని, జీవుల ఉత్పత్తిని పర్యవేక్షిస్తాడు (చైత్ర మాసం).
• అర్యముడు: సమాజంలో ధర్మాన్ని, న్యాయాన్ని మరియు పితృదేవతల శక్తులను నియంత్రిస్తాడు (వైశాఖ మాసం).
• మిత్రుడు: స్నేహం, శాంతి, విశ్వాసం మరియు సార్వత్రిక కల్యాణానికి ప్రతీక (జ్యేష్ఠ మాసం).
• వరుణుడు: నీరు, సముద్రాలు మరియు వర్షాలను శాసిస్తూ జీవకోటికి ప్రాణాధారంగా నిలుస్తాడు (ఆషాఢ మాసం).
• ఇంద్రుడు: దేవతల రాజుగా, శత్రువులను సంహరించే శక్తిగా మరియు వర్షకారకుడిగా ఉంటాడు (శ్రావణ మాసం).
• వివస్వాన్: అగ్ని తేజస్సుతో, సూర్యుని ప్రఖర కాంతితో జగత్తును ప్రకాశింపజేస్తాడు (భాద్రపద మాసం).
• పూషుడు: పోషణకు అధిపతి. పంటలను, పశువులను మరియు ప్రయాణికులను రక్షిస్తాడు (ఆశ్వయుజ మాసం).
• పర్జన్యుడు: మేఘాలకు అధిపతిగా ఉండి, వర్షాలు కురిపించి భూమిని సస్యశ్యామలం చేస్తాడు (కార్తీక మాసం).
• అంశుమంతుడు: కిరణాల ద్వారా జీవులలో చైతన్యాన్ని, ఆరోగ్యాన్ని నింపుతాడు (మార్గశిర మాసం).
• భగుడు: ఐశ్వర్యం, భాగ్యం మరియు సమృద్ధిని ప్రసాదించేవాడు (పుష్య మాసం).
• త్వష్ట: శిల్పకళ, సృజనాత్మకత మరియు విశ్వకర్మ రూపంలో నూతన వస్తువుల సృష్టికి కారకుడు (మాఘ మాసం).
• విష్ణువు: జగత్ రక్షకుడిగా, అంతిమ సత్యంగా మరియు ధర్మ సంస్థాపకుడిగా నిలుస్తాడు (ఫాల్గుణ మాసం).

ఆధ్యాత్మిక మరియు లౌకిక ప్రాముఖ్యత

• కాల చక్ర నియంత్రణ: వీరు పన్నెండు మంది కలిసి కాలానికి (Time), రుతువుల మార్పులకు మరియు పగలు-రాత్రి చక్రానికి కారణమవుతారు.
• ఆరోగ్యం మరియు శక్తి: మానవ శరీరంలోని ప్రాణశక్తికి, కంటి చూపుకు మరియు బుద్ధి వికాసానికి ఆదిత్యుల అనుగ్రహం అవసరం.
• సూర్య నమస్కారాలు: యోగాలో చేసే 12 సూర్య నమస్కారాల భంగిమలు ఈ 12 మంది ఆదిత్యుల శక్తులను, గుణాలను సూచిస్తాయి.`;
