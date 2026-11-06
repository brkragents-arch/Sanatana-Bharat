// Comprehensive Family of Brahma (బ్రహ్మ వంశవృక్షము)
// Extracted and curated faithfully from sacred Pothana Bhagavatam and Classical Puranic genealogies

export interface BrahmaFamilyMember {
  id: string;
  nameTe: string;
  nameEn: string;
  sublabelTe?: string;
  sublabelEn?: string;
  badge?: string;
  badgeEn?: string;
  icon?: string;
  isSpecial?: boolean; // Highlighted (e.g. Rishabha in red, Avatars)
  descriptionTe?: string;
  descriptionEn?: string;
  children?: BrahmaFamilyMember[];
}

export interface BrahmaMainBranch {
  id: string;
  titleTe: string;
  titleEn: string;
  countBadge?: string;
  badgeColor?: string;
  descriptionTe: string;
  descriptionEn: string;
  members: BrahmaFamilyMember[];
}

export const DAKSHA_24_DAUGHTERS: { te: string; en: string; meaningTe: string; meaningEn: string }[] = [
  { te: 'శ్రద్ధ', en: 'Shraddha', meaningTe: 'ధర్మనిష్ఠ, విశ్వాసము', meaningEn: 'Faith & Devotion' },
  { te: 'లక్ష్మి', en: 'Lakshmi', meaningTe: 'ఐశ్వర్యము, దివ్యశోభ', meaningEn: 'Prosperity & Divine Grace' },
  { te: 'ధృతి', en: 'Dhrti', meaningTe: 'ధైర్యము, చిత్తస్థైర్యము', meaningEn: 'Steadfastness & Fortitude' },
  { te: 'తుష్టి', en: 'Tushti', meaningTe: 'సంతృప్తి, ఆనందము', meaningEn: 'Resignation & Contentment' },
  { te: 'పుష్టి', en: 'Pushti', meaningTe: 'పరిపూర్ణత, బలాభివృద్ధి', meaningEn: 'Fulfilment & Nourishment' },
  { te: 'మేధ', en: 'Medhaa', meaningTe: 'ధారణాశక్తి, సూక్ష్మబుద్ధి', meaningEn: 'Intelligence & Memory Retention' },
  { te: 'క్రియ', en: 'Kriya', meaningTe: 'సత్కర్మాచరణ, శీలము', meaningEn: 'Action & Righteous Deeds' },
  { te: 'బుద్ధి', en: 'Buddhi', meaningTe: 'వివేకము, తత్త్వబోధ', meaningEn: 'Intellect & Discretion' },
  { te: 'లజ్జ', en: 'Lajja', meaningTe: 'వినయశీలత, సిగ్గు', meaningEn: 'Modesty & Humility' },
  { te: 'వపువు', en: 'Vapu', meaningTe: 'దేహసౌందర్యము, తేజస్సు', meaningEn: 'Form & Bodily Beauty' },
  { te: 'శాంతి', en: 'Shanti', meaningTe: 'ప్రశాంతత, ఉపశమనము', meaningEn: 'Expiation & Inner Peace' },
  { te: 'సిద్ధి', en: 'Siddhi', meaningTe: 'కార్యసాధన, సంపూర్ణత', meaningEn: 'Perfection & Accomplishment' },
  { te: 'కీర్తి', en: 'Keerti', meaningTe: 'యశస్సు, సుకీర్తి', meaningEn: 'Fame & Renown' },
  { te: 'ఖ్యాతి', en: 'Khyati', meaningTe: 'ప్రసిద్ధి (భృగు మహర్షి పత్ని)', meaningEn: 'Celebrity & Distinction' },
  { te: 'సతి', en: 'Sati', meaningTe: 'సత్యస్వరూపిణి (పరమశివుని అర్థాంగి)', meaningEn: 'Truth (Consort of Lord Shiva)' },
  { te: 'సంభూతి', en: 'Sambhuti', meaningTe: 'యోగ్యత, సంపన్నత (అత్రి పత్ని)', meaningEn: 'Fitness & Worthiness' },
  { te: 'స్మృతి', en: 'Smriti', meaningTe: 'స్మరణశక్తి, వేదజ్ఞానము (అంగిరస పత్ని)', meaningEn: 'Memory & Retention of Truth' },
  { te: 'ప్రీతి', en: 'Preeti', meaningTe: 'అనురాగము, దయ (పులస్త్య పత్ని)', meaningEn: 'Affection & Pure Love' },
  { te: 'క్షమ', en: 'Kshama', meaningTe: 'సహనము, ఓర్పు (పులహ పత్ని)', meaningEn: 'Patience & Forgiveness' },
  { te: 'సన్నతి', en: 'Sannati', meaningTe: 'వినమ్రత, అణకువ (క్రతు పత్ని)', meaningEn: 'Humility & Reverence' },
  { te: 'అనసూయ', en: 'Anasuya', meaningTe: 'ఈర్ష్యా రహిత, పతివ్రత (దత్తాత్రేయ మాత)', meaningEn: 'Faultlessness & Charity' },
  { te: 'ఊర్జ', en: 'Urja', meaningTe: 'దివ్య శక్తి, ప్రాణశక్తి (వసిష్ఠ పత్ని)', meaningEn: 'Energy & Vitality' },
  { te: 'స్వాహా', en: 'Svaha', meaningTe: 'హవిస్సు, యజ్ఞాహుతి (అగ్నిదేవుని పత్ని)', meaningEn: 'Sacred Offering (Consort of Agni)' },
  { te: 'స్వధా', en: 'Svadha', meaningTe: 'పితృతర్పణము, హవ్యకవ్యాలు (పితృదేవతల పత్ని)', meaningEn: 'Sacred Oblation (Consort of Pitrus)' },
];

export const PRIYAVRATA_LINEAGE: { nameTe: string; nameEn: string; isSpecial?: boolean; titleTe?: string; titleEn?: string }[] = [
  { nameTe: 'ప్రియవ్రతుడు', nameEn: 'Priyavrata', titleTe: 'మనువు ప్రథమ పుత్రుడు • సప్తద్వీపాధిపతి', titleEn: 'First son of Manu • Ruler of 7 oceans' },
  { nameTe: 'అగ్నీధ్రుడు', nameEn: 'Agnidhra', titleTe: 'జంబూద్వీప పాలకుడు', titleEn: 'Ruler of Jambu-dvipa' },
  { nameTe: 'నాభి', nameEn: 'Nabhi', titleTe: 'మేరుదేవి పతి • సత్యధర్మ పరాయణుడు', titleEn: 'Consort of Merudevi' },
  { nameTe: 'ఋషభదేవుడు', nameEn: 'Rishabha', isSpecial: true, titleTe: 'శ్రీహరి అంసావతారము • పరమహంస ప్రవర్తకుడు', titleEn: 'Divine Avatar of Vishnu • Paramahamsa path' },
  { nameTe: 'భరతుడు', nameEn: 'Bharata', titleTe: 'జడభరతుడు • మన భారతదేశానికి మూలపురుషుడు', titleEn: 'Jada Bharata • Sovereign who named Bharatavarsha' },
  { nameTe: 'సుమతి', nameEn: 'Sumati' },
  { nameTe: 'ఇంద్రద్యుమ్నుడు', nameEn: 'Indradyumna' },
  { nameTe: 'పరమేష్ఠి', nameEn: 'Parameshthin' },
  { nameTe: 'ప్రతిహారుడు', nameEn: 'Pratihara' },
  { nameTe: 'ప్రతిహర్త', nameEn: 'Pratihartta' },
  { nameTe: 'భవుడు', nameEn: 'Bhava' },
  { nameTe: 'ఉద్గీథుడు', nameEn: 'Udgita' },
  { nameTe: 'ప్రస్తారకుడు', nameEn: 'Prastara' },
  { nameTe: 'పృథువు', nameEn: 'Prithu' },
  { nameTe: 'నక్తుడు', nameEn: 'Nakta' },
  { nameTe: 'గయుడు', nameEn: 'Gaya', titleTe: 'గయాక్షేత్ర మహిమోపేతుడు', titleEn: 'Renowned king of Gaya pilgrimage' },
  { nameTe: 'నరుడు', nameEn: 'Nara' },
  { nameTe: 'విరాటుడు', nameEn: 'Virat' },
  { nameTe: 'ధీమంతుడు', nameEn: 'Dhimat' },
  { nameTe: 'మహంతుడు', nameEn: 'Mahaanta' },
  { nameTe: 'మనస్యుడు', nameEn: 'Manasyu' },
  { nameTe: 'త్వష్ట', nameEn: 'Twashta' },
  { nameTe: 'విరజుడు', nameEn: 'Viraja' },
  { nameTe: 'రాజు', nameEn: 'Raja' },
  { nameTe: 'శతజిత్తు', nameEn: 'Shatajit' },
  { nameTe: 'విశ్వగ్జ్యోతి', nameEn: 'Vishvagjyoti' }
];

export const UTTANAPADA_PRACHETASAS_LINEAGE: { nameTe: string; nameEn: string; noteTe?: string; noteEn?: string }[] = [
  { nameTe: 'ఉత్తానపాదుడు', nameEn: 'Uttanapada', noteTe: 'సునీతి-సురుచుల పతి', noteEn: 'Husband of Suniti and Suruchi' },
  { nameTe: 'ధ్రువుడు', nameEn: 'Dhruva', noteTe: 'నిశ్చల విష్ణుభక్తుడు • ధ్రువ మండల అధిపతి', noteEn: 'Supreme devotee • Lord of the Pole Star' },
  { nameTe: 'శ్లిష్టి & భవ్యుడు', nameEn: 'Shlishti & Bhavya', noteTe: 'ధ్రువుని కుమారులు', noteEn: 'Sons of Dhruva' },
  { nameTe: 'రిపువు', nameEn: 'Ripu', noteTe: 'శ్లిష్టి పుత్రుడు', noteEn: 'Son of Shlishti' },
  { nameTe: 'చాక్షుషుడు', nameEn: 'Chakshusha' },
  { nameTe: 'చాక్షుష మనువు', nameEn: 'Manu Chakshusha', noteTe: 'ఆరవ మనువు', noteEn: 'The 6th Manu' },
  { nameTe: 'పూరువు / రురువు', nameEn: 'Puru / Ruru' },
  { nameTe: 'అంగుడు', nameEn: 'Anga', noteTe: 'ధర్మాత్ముడైన మహారాజు', noteEn: 'Virtuous King' },
  { nameTe: 'వేనుడు', nameEn: 'Vena', noteTe: 'అధర్మవర్తనుడు (ఋషులచే హతుడు)', noteEn: 'Tyranical king neutralized by rishis' },
  { nameTe: 'పృథు చక్రవర్తి', nameEn: 'King Prithu', noteTe: 'వేనుని భుజాల మధనం నుండి ఉద్భవించిన విష్ణు అంశావతారుడు • భూమిని దోహనం చేసినవాడు', noteEn: 'Incarnation of Vishnu who milked the Earth' },
  { nameTe: 'అంతర్ద్ధి (మరియు పాలి)', nameEn: 'Antarddhi (and Pali)', noteTe: 'పృథువు పుత్రుడు', noteEn: 'Son of King Prithu' },
  { nameTe: 'హవిర్ధానుడు', nameEn: 'Havirdhana' },
  { nameTe: 'ప్రాచీనబర్హి', nameEn: 'Prachinavarhi', noteTe: 'యజ్ఞకర్త • సముద్రతీరాన దర్భలతో యజ్ఞాలు చేసినవాడు', noteEn: 'Great sacrificer whose sacrificial grass covered the earth' },
  { nameTe: '10 మంది ప్రచేతసులు', nameEn: '10 Prachetasas', noteTe: 'సముద్ర జలాల్లో రుద్రగీతం జపించి 10,000 ఏళ్ళు తపస్సు చేసినవారు', noteEn: '10 brother princes who meditated under water with Rudra Gita' },
  { nameTe: 'దక్ష ప్రజాపతి (పునర్జన్మ)', nameEn: 'Daksha Prajapati (Rebirth)', noteTe: 'పూర్వజన్మలో బ్రహ్మ పుత్రుడైన దక్షుడే ప్రచేతసుల పుత్రునిగా పునర్జన్మ పొందెను', noteEn: 'Born as Brahma\'s son in a former life, now reborn through Prachetasas' }
];

export const KASHYAPA_WIVES_AND_PROGENY = [
  {
    wifeTe: 'అదితి',
    wifeEn: 'Aditi',
    titleTe: 'దేవమాత • ద్వాదశ ఆదిత్యుల జనని',
    titleEn: 'Mother of the Devas & 12 Adityas',
    icon: '☀️',
    badgeTe: '12 మంది ఆదిత్యులు',
    badgeEn: '12 Adityas',
    progenyTe: [
      'శ్రీ విష్ణువు (వామనుడు)',
      'శక్రుడు (దేవేంద్రుడు)',
      'అర్యముడు',
      'ధాత / ధూతి',
      'త్వష్ట',
      'పూషుడు',
      'వివస్వంతుడు (సూర్యుడు)',
      'సవిత',
      'మిత్రుడు',
      'వరుణుడు',
      'అంశుడు / అంగుడు',
      'భగుడు'
    ],
    progenyEn: [
      'Vishnu (Vamana Avatar)',
      'Sakra (Indra)',
      'Aryaman',
      'Dhuti / Dhatri',
      'Tvashtri',
      'Pushan',
      'Vivasvat (Surya)',
      'Savitur',
      'Mitra',
      'Varuna',
      'Anga / Amsha',
      'Bhaga'
    ]
  },
  {
    wifeTe: 'దితి',
    wifeEn: 'Diti',
    titleTe: 'దైత్యమాత • హిరణ్యాక్ష, హిరణ్యకశిపుల జనని',
    titleEn: 'Mother of Daityas',
    icon: '⚔️',
    badgeTe: 'దైత్యులు',
    badgeEn: 'Daityas',
    progenyTe: [
      'సింహిక (రాహువు తల్లి)',
      'హిరణ్యాక్షుడు (వరాహావతారమున హతుడు)',
      'హిరణ్యకశిపుడు (నృసింహావతారమున హతుడు) ➔ భక్త ప్రహ్లాదుడు ➔ విరోచనుడు ➔ బలి చక్రవర్తి ➔ బాణాసురుడు'
    ],
    progenyEn: [
      'Simhika (Mother of Rahu)',
      'Hiranyaksha (Vanquished by Varaha)',
      'Hiranyakashyapu (Vanquished by Narasimha) ➔ Prahlada ➔ Virochana ➔ King Bali ➔ Banasura'
    ]
  },
  {
    wifeTe: 'దనువు',
    wifeEn: 'Danu',
    titleTe: 'దానవమాత',
    titleEn: 'Mother of Danavas',
    icon: '🛡️',
    badgeTe: 'దానవులు',
    badgeEn: 'Danavas',
    progenyTe: [
      'ద్విమూర్ధుడు',
      'శంకరుడు',
      'అయోముఖుడు',
      'శంకుశిరసుడు',
      'కపిలుడు',
      'శంబరుడు',
      'ఏకచక్రుడు',
      'తారకుడు',
      'స్వర్భానుడు',
      'వృషపర్వుడు',
      'పులోముడు',
      'విప్రచిత్తి'
    ],
    progenyEn: [
      'Dvimurddha',
      'Shankara',
      'Ayomukha',
      'Shankushiras',
      'Kapila',
      'Samvara',
      'Ekachakra',
      'Taraka',
      'Svarbhanu',
      'Vrshaparva',
      'Puloma',
      'Viprachitti'
    ]
  },
  {
    wifeTe: 'వినత',
    wifeEn: 'Vinata',
    titleTe: 'పక్షిజాతి మాత',
    titleEn: 'Mother of Divine Birds',
    icon: '🦅',
    badgeTe: 'పక్షులు',
    badgeEn: 'Celestial Birds',
    progenyTe: [
      'గరుత్మంతుడు (శ్రీహరి దివ్య వాహనం, పక్షిరాజు)',
      'అరుణుడు (సూర్య భగవానుని రథసారథి)'
    ],
    progenyEn: [
      'Garuda (Vehicle of Lord Vishnu, King of Birds)',
      'Aruna (Charioteer of Surya / Dawn)'
    ]
  },
  {
    wifeTe: 'కద్రువ',
    wifeEn: 'Kadru',
    titleTe: 'నాగమాత • సర్పజాతి జనని',
    titleEn: 'Mother of Serpents (Nagas)',
    icon: '🐍',
    badgeTe: 'సర్పములు',
    badgeEn: 'Snakes & Nagas',
    progenyTe: [
      'ఆదిశేషుడు (శ్రీహరి శయన శేషుడు)',
      'వాసుకి (క్షీరసాగర మథన త్రాడు, శివుని కంఠాభరణం)',
      'తక్షకుడు (పరీక్షిత్తు శాప కారణమైన సర్పరాజు)',
      'కర్కోటకుడు (నలోపాఖ్యాన సర్పరాజు)',
      'మహా పద్మ, శంఖ, కాళియ మొదలైన సకల నాగములు'
    ],
    progenyEn: [
      'Sesha (The Ananta serpent couch of Lord Vishnu)',
      'Vasuki (Churning rope of Ocean of Milk & Shiva\'s adornment)',
      'Takshaka (Serpent king involved in King Parikshit\'s curse)',
      'Karkotaka',
      'Naga hosts (Kaliya, Shankha, Mahapadma...)'
    ]
  },
  {
    wifeTe: '+ ఇతర 55 మంది కుమార్తెలు (సహా 27 నక్షత్రాలు)',
    wifeEn: '+ 55 Other Daughters (including 27 Nakshatras)',
    titleTe: 'చంద్రుని 27 భార్యలు (అశ్విని, భరణి, కృత్తిక...) మరియు అరిష్ట, కాష్ఠ, సురభి మొదలైన పుత్రికలు',
    titleEn: '27 Lunar Nakshatras wedded to Chandra, plus Arishta, Kashtha, Surabhi, etc.',
    icon: '✨',
    badgeTe: 'నక్షత్రాలు & విశ్వసృష్టి',
    badgeEn: 'Nakshatras & Cosmos',
    progenyTe: [
      'అశ్విని నుండి రేవతి వరకు 27 నక్షత్రాలు (చంద్రుని ధర్మపత్నులు)',
      'సురభి (కామధేనువు మరియు గోజాతి మాత)',
      'ముని, అరిష్ట (గంధర్వ, అప్సరసల మాతలు)',
      'తామ్ర, ఇల, క్రోధవశ మొదలైన వారి సంతతి'
    ],
    progenyEn: [
      '27 Nakshatras (Ashwini to Revati wedded to Chandra)',
      'Surabhi (Mother of Kamadhenu & sacred kine)',
      'Muni, Arishta (Mothers of Gandharvas & Apsaras)',
      'Tamra, Ila, Krodhavasha and universal lineages'
    ]
  }
];

export const BRAHMA_8_RUDRAS: { te: string; en: string; meaningTe: string; meaningEn: string }[] = [
  { te: 'రుద్రుడు', en: 'Rudra', meaningTe: 'రోదనమును తొలగించువాడు • పరమశాంత-రౌద్రమూర్తి', meaningEn: 'Remover of sorrow & primal cosmic force' },
  { te: 'భవుడు', en: 'Bhava', meaningTe: 'సర్వ సృష్టికి ఉద్భవ స్థానమైనవాడు (జల తత్త్వము)', meaningEn: 'Source of existence (Water principle)' },
  { te: 'శర్వుడు', en: 'Sarva', meaningTe: 'సర్వపాప వినాశకుడు (పృథ్వీ తత్త్వము)', meaningEn: 'Dissolver of sins (Earth principle)' },
  { te: 'ఈశానుడు', en: 'Ishana', meaningTe: 'సర్వ విద్యాధిపతి (సూర్య/ఆకాశ తత్త్వము)', meaningEn: 'Ruler of all knowledge (Sun/Ether principle)' },
  { te: 'పశుపతి', en: 'Pashupati', meaningTe: 'జీవులను సంసార పాశముల నుండి విముక్తి చేయువాడు (వాయు తత్త్వము)', meaningEn: 'Lord of all souls freeing them from bondage (Air)' },
  { te: 'భీముడు', en: 'Bhima', meaningTe: 'భయంకరుడు • దుష్టశిక్షకుడు (ఆకాశ తత్త్వము)', meaningEn: 'Formidable destroyer of evil (Ether)' },
  { te: 'ఉగ్రుడు', en: 'Ugra', meaningTe: 'తీవ్ర తేజోవంతుడు (వాయు/అగ్ని తత్త్వము)', meaningEn: 'Fierce & intensely radiant force' },
  { te: 'మహాదేవుడు', en: 'Mahadeva', meaningTe: 'దేవాదిదేవుడు • చంద్రమండల తేజస్సు (సోమ తత్త్వము)', meaningEn: 'Supreme God among gods (Moon principle)' }
];

export const BRAHMA_4_KUMARAS: { te: string; en: string; titleTe: string; titleEn: string }[] = [
  { te: 'సనకుడు', en: 'Sanaka', titleTe: 'నిత్యబ్రహ్మచారి • నివృత్తి మార్గ దర్శకుడు', titleEn: 'Eternal Celibate • Sage of Renunciation' },
  { te: 'సనాతనుడు', en: 'Sanatana', titleTe: 'శాశ్వత సత్య ప్రవర్తకుడు', titleEn: 'Propounder of Eternal Truth' },
  { te: 'సనందుడు', en: 'Sanananda', titleTe: 'నిత్యానంద స్వరూపుడు', titleEn: 'Embodiment of Divine Bliss' },
  { te: 'సనత్కుమారుడు', en: 'Sanatkumara', titleTe: 'సనత్కుమార సంహిత ప్రవక్త • నారద గురువు', titleEn: 'Preceptor of Narada • Sanatkumara Samhita' }
];

export const BRAHMARISHIS_LIST: { id: string; te: string; en: string; originTe: string; originEn: string; subDescTe?: string }[] = [
  { id: 'bhrigu', te: 'భృగు మహర్షి', en: 'Bhrigu', originTe: 'బ్రహ్మ హృదయము / చర్మము నుండి', originEn: 'From Brahma\'s heart / skin' },
  { id: 'pulastya', te: 'పులస్త్యుడు', en: 'Pulastya', originTe: 'బ్రహ్మ కర్ణములు (చెవుల) నుండి', originEn: 'From Brahma\'s ears' },
  { id: 'pulaha', te: 'పులహుడు', en: 'Pulaha', originTe: 'బ్రహ్మ నాభి నుండి', originEn: 'From Brahma\'s navel' },
  { id: 'kratu', te: 'క్రతువు', en: 'Kratu', originTe: 'బ్రహ్మ చేతుల నుండి', originEn: 'From Brahma\'s hands' },
  { id: 'angiras', te: 'అంగిరసుడు', en: 'Angiras', originTe: 'బ్రహ్మ ముఖము / నోటి నుండి', originEn: 'From Brahma\'s mouth' },
  { id: 'marichi', te: 'మరీచి మహర్షి', en: 'Marichi', originTe: 'బ్రహ్మ మనస్సు నుండి', originEn: 'From Brahma\'s mind', subDescTe: 'కశ్యప ప్రజాపతి తండ్రి (Father of Kashyapa)' },
  { id: 'atri', te: 'అత్రి మహర్షి', en: 'Atri', originTe: 'బ్రహ్మ నేత్రముల (కళ్ళ) నుండి', originEn: 'From Brahma\'s eyes' },
  { id: 'vasishta', te: 'వసిష్ఠ మహర్షి', en: 'Vasishta', originTe: 'బ్రహ్మ ప్రాణము నుండి', originEn: 'From Brahma\'s vital breath' },
  { id: 'narada', te: 'దేవర్షి నారదుడు', en: 'Narada', originTe: 'బ్రహ్మ తొడల నుండి', originEn: 'From Brahma\'s lap / thigh' },
  { id: 'ruci', te: 'రుచి ప్రజాపతి', en: 'Ruci', originTe: 'బ్రహ్మ దేహము నుండి', originEn: 'From Brahma\'s body', subDescTe: 'ఆకూతి భర్త (యజ్ఞావతార పిత)' },
  { id: 'daksha', te: 'దక్ష ప్రజాపతి', en: 'Daksha Prajapati', originTe: 'బ్రహ్మ కుడి బొటనవేలి నుండి', originEn: 'From Brahma\'s right thumb', subDescTe: '24 మంది పుత్రికల పిత (Father of 24 daughters)' }
];

export const KASHYAPA_CHILDREN_POSTER_DETAILS = {
  titleEn: 'Children of Kashyapa Prajapati',
  titleTe: 'కశ్యప ప్రజాపతి సంతానం (సకల జీవకోటి ఆవిర్భావం)',
  subtitleEn: 'From one source, many beings. From diversity, balance of creation.',
  subtitleTe: 'ఒకే మూలం నుండి అనేక జీవరాశులు • వైవిధ్యం నుండే సృష్టి సమతుల్యత',
  introEn: 'Kashyapa Rishi, one of the Prajapatis (son of Marichi created by Lord Brahma), is the father of countless beings through his wives (the daughters of Daksha Prajapati). Each lineage plays a unique role in sustaining the cosmic balance.',
  introTe: 'బ్రహ్మ మానస పుత్రుడైన మరీచి మహర్షి కుమారుడు కశ్యప ప్రజాపతి. దక్ష ప్రజాపతి పుత్రికలైన తన ధర్మపత్నుల ద్వారా దేవతలు, అసురులు, నాగులు, గరుడులు, యక్షులు, గంధర్వులు మొదలైన సకల జీవరాశులకు ఆవిర్భావ పిత అయ్యాడు. విశ్వ సమతుల్యతను కాపాడటంలో ప్రతి వంశం ఒక ప్రత్యేక పాత్ర పోషిస్తుంది.',
  sealQuoteEn: 'DIVERSITY IS THE DESIGN OF THE DIVINE.',
  sealQuoteTe: 'వైవిధ్యమే భగవంతుని దివ్య సృష్టి రూపకల్పన.',
  posterImg: './images/kashyapa_children/kashyapa_children_poster.jpg',
  kashyapaPortraitImg: './images/kashyapa_children/kashyapa_rishi_portrait.jpg',
  sealImg: './images/kashyapa_children/diversity_divine_seal.jpg',
  footerQuoteEn: 'From Devas to Asuras, from Nagas to Gandharvas – all are children of Kashyapa. Together, they sustain the vast tapestry of creation.',
  footerQuoteTe: 'దేవతల నుండి అసురుల వరకు, నాగుల నుండి గంధర్వుల వరకు — అందరూ కశ్యప మహర్షి సంతానమే. వీరందరూ కలిసి అనంతమైన సృష్టి వస్త్రాన్ని నిలబెడుతున్నారు.',
  harmonyBannerEn: 'UNDERSTAND • RESPECT • LIVE IN HARMONY',
  harmonyBannerTe: 'అర్థం చేసుకోండి • గౌరవించండి • సామరస్యంతో జీవించండి',
  lineages: [
    {
      number: 1,
      id: 'devas',
      titleEn: '1. Devas',
      titleTe: '1. దేవతలు (Devas)',
      subtitleEn: '(Celestial Beings)',
      subtitleTe: '(దివ్య లోక వాసులు • అదితి సంతానం)',
      motherEn: 'Mother: Aditi (hence called Adityas)',
      motherTe: 'తల్లి: అదితి (ఆదిత్యులు)',
      bannerBg: 'from-[#4C1D95] via-[#6D28D9] to-[#4C1D95]',
      borderColor: '#7C3AED',
      cardBg: '#F5F3FF',
      icon: '☀️',
      img: './images/kashyapa_children/1_devas_celestial.jpg',
      descEn: 'The Devas are divine beings who uphold Rta (cosmic order) and manage the forces of nature for the welfare of all.',
      descTe: 'దేవతలు విశ్వ ధర్మాన్ని (ఋతమును) నిలబెట్టే దివ్య స్వరూపులు మరియు లోక కల్యాణం కోసం ప్రకృతి శక్తులను నిర్వహిస్తారు.',
      includesEn: 'Indra, Agni, Varuna, Surya, Vayu, Vamana and many more (12 Adityas).',
      includesTe: 'ఇంద్రుడు, అగ్ని, వరుణుడు, సూర్యుడు, వాయువు, వామనుడు మొదలైన ద్వాదశ ఆదిత్యులు.'
    },
    {
      number: 2,
      id: 'asuras',
      titleEn: '2. Asuras',
      titleTe: '2. అసురులు (Asuras)',
      subtitleEn: '(Anti-Divine / Mighty Beings)',
      subtitleTe: '(మహా శక్తివంతులు • దితి & దనువు సంతానం)',
      motherEn: 'Mothers: Diti (Daityas) & Danu (Danavas)',
      motherTe: 'తల్లులు: దితి (దైత్యులు) & దనువు (దానవులు)',
      bannerBg: 'from-[#7F1D1D] via-[#991B1B] to-[#7F1D1D]',
      borderColor: '#DC2626',
      cardBg: '#FEF2F2',
      icon: '⚔️',
      img: './images/kashyapa_children/2_asuras_powerful.jpg',
      descEn: 'The Asuras are powerful beings with great knowledge and strength, but dominated by ego and desire. They are not evil by birth.',
      descTe: 'అసురులు గొప్ప జ్ఞానం, తపోబలం మరియు శక్తి కలిగినవారు; కానీ అహంకారం, కోరికలకు లోనైనవారు. వీరు పుట్టుకతో చెడ్డవారు కారు (ఉదాహరణకు భక్త ప్రహ్లాదుడు, మహాబలి).',
      includesEn: 'Hiranyakashipu, Hiranyaksha, Prahlada, Mahabali, Virochana, Ravana and others.',
      includesTe: 'హిరణ్యకశిపుడు, హిరణ్యాక్షుడు, భక్త ప్రహ్లాదుడు, మహాబలి చక్రవర్తి, విరోచనుడు, రావణుడు మొదలైనవారు.'
    },
    {
      number: 3,
      id: 'nagas',
      titleEn: '3. Nagas',
      titleTe: '3. నాగులు (Nagas)',
      subtitleEn: '(Serpent Beings)',
      subtitleTe: '(దివ్య సర్ప జాతి • కద్రువ సంతానం)',
      motherEn: 'Mother: Kadru (Nagamaata)',
      motherTe: 'తల్లి: కద్రువ (నాగమాత)',
      bannerBg: 'from-[#14532D] via-[#166534] to-[#14532D]',
      borderColor: '#16A34A',
      cardBg: '#F0FDF4',
      icon: '🐍',
      img: './images/kashyapa_children/3_nagas_serpents.jpg',
      descEn: 'The Nagas are serpent beings who dwell in Patala Lokas. They possess great wisdom, wealth and mystical powers.',
      descTe: 'నాగులు పాతాళ లోకాలలో నివసించే దివ్య సర్ప జాతి వారు. వీరు అపారమైన జ్ఞానం, సంపద మరియు యోగ/మాయా శక్తులను కలిగి ఉంటారు.',
      includesEn: 'Ananta (Adi Shesha), Vasuki, Takshaka, Karkotaka, Kaliya, Padma.',
      includesTe: 'అనంతుడు (ఆదిశేషుడు), వాసుకి, తక్షకుడు, కర్కోటకుడు, కాళియుడు, మహాపద్ముడు మొదలైనవారు.'
    },
    {
      number: 4,
      id: 'garudas',
      titleEn: '4. Garudas',
      titleTe: '4. గరుడులు (Garudas)',
      subtitleEn: '(Divine Birds)',
      subtitleTe: '(దివ్య పక్షి జాతి • వినత సంతానం)',
      motherEn: 'Mother: Vinata',
      motherTe: 'తల్లి: వినత (పక్షిజాతి మాత)',
      bannerBg: 'from-[#134E4A] via-[#0F766E] to-[#134E4A]',
      borderColor: '#0D9488',
      cardBg: '#F0FDFA',
      icon: '🦅',
      img: './images/kashyapa_children/4_garudas_birds.jpg',
      descEn: 'The Garudas are divine bird beings, natural enemies of serpents and celestial carriers of Lord Vishnu.',
      descTe: 'గరుడులు మహా వేగం, తేజస్సు గల దివ్య పక్షి జాతి వారు; సర్పాలకు సహజ శత్రువులు మరియు శ్రీమహావిష్ణువు యొక్క దివ్య వాహన స్వరూపులు.',
      includesEn: 'Garuda (Vahana of Vishnu), Aruna (Charioteer of Surya), Jatayu and Sampati.',
      includesTe: 'గరుత్మంతుడు (విష్ణు వాహనం), అరుణుడు (సూర్య రథసారథి), జటాయువు మరియు సంపాతి.'
    },
    {
      number: 5,
      id: 'yakshas',
      titleEn: '5. Yakshas',
      titleTe: '5. యక్షులు (Yakshas)',
      subtitleEn: '(Nature Spirits)',
      subtitleTe: '(ప్రకృతి & నిధి రక్షకులు • ఖస/సురస సంతానం)',
      motherEn: 'Cosmic Guardians of Treasures & Forests',
      motherTe: 'వనములు, పర్వతాలు & నవనిధుల రక్షకులు',
      bannerBg: 'from-[#78350F] via-[#B45309] to-[#78350F]',
      borderColor: '#D97706',
      cardBg: '#FFFBEB',
      icon: '🏺',
      img: './images/kashyapa_children/5_yakshas_spirits.jpg',
      descEn: 'The Yakshas are nature spirits and protectors of treasures, forests and hidden realms.',
      descTe: 'యక్షులు ప్రకృతి ఆత్మలు మరియు భూగర్భ నిధులు, అడవులు, పర్వతాలు మరియు రహస్య లోకాలకు సంరక్షకులు.',
      includesEn: 'Kubera (Lord of Wealth), Manibhadra, Nalakubara, Manigriva and more.',
      includesTe: 'కుబేరుడు (ధనాధిపతి), మణిభద్రుడు, నలకుబరుడు, మణిగ్రీవుడు మొదలైనవారు.'
    },
    {
      number: 6,
      id: 'gandharvas',
      titleEn: '6. Gandharvas',
      titleTe: '6. గంధర్వులు (Gandharvas)',
      subtitleEn: '(Celestial Musicians)',
      subtitleTe: '(దేవలోక గాయకులు • అరిష్ట/ముని సంతానం)',
      motherEn: 'Mothers: Arishta & Muni',
      motherTe: 'తల్లులు: అరిష్ట & ముని',
      bannerBg: 'from-[#1E3A8A] via-[#1D4ED8] to-[#1E3A8A]',
      borderColor: '#2563EB',
      cardBg: '#EFF6FF',
      icon: '🎵',
      img: './images/kashyapa_children/6_gandharvas_musicians.jpg',
      descEn: 'The Gandharvas are celestial musicians and singers who create divine melodies and inspire arts and culture.',
      descTe: 'గంధర్వులు దేవలోక సంగీతకారులు మరియు గాయకులు; దివ్య రాగాలను సృష్టిస్తూ లలిత కళలు మరియు సంస్కృతికి స్ఫూర్తినిస్తారు.',
      includesEn: 'Tumburu, Chitrasena, Vishvavasu, Hahaa, Huhu and others.',
      includesTe: 'తుంబురుడు, చిత్రసేనుడు, విశ్వావసువు, హాహా, హూహూ మొదలైన దేవగాయకులు.'
    }
  ]
};

export interface KashmirLegendStep {
  stepNumber: number;
  id: string;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  descEn: string;
  descTe: string;
  img: string;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  actionNoteEn?: string;
  actionNoteTe?: string;
}

export interface KashmirTimelineStage {
  stage: number;
  id: string;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  descEn: string;
  descTe: string;
  icon: string;
}

export const KASHYAP_RISHI_KASHMIR_LEGEND = {
  titleEn: 'Kashyap Rishi & Jammu and Kashmir',
  titleTe: 'కశ్యప మహర్షి & జమ్మూ కశ్మీర్',
  subtitleEn: 'The Legendary Founder of Kashmir • How Kashmir was Born from Lake Satisar',
  subtitleTe: 'కశ్మీర పుణ్యభూమి పౌరాణిక రూపకర్త • సతీసర మహా సరస్సు నుండి కశ్మీర ఆవిర్భావ గాథ',
  authorities: [
    {
      sourceEn: 'Nilamata Purana',
      sourceTe: 'నీలమత పురాణం',
      quoteEn: 'The Kashmir Valley was once a vast lake called Satisar.',
      quoteTe: 'ప్రాచీన యుగంలో కశ్మీర లోయ మొత్తం సతీసరము అనే అపారమైన దివ్య సరస్సుగా ఉండేది.'
    },
    {
      sourceEn: 'Rajatarangini (Kalhana)',
      sourceTe: 'రాజతరంగిణి (కల్హణుడు)',
      quoteEn: 'Kashyapa cleared the waters by cleaving the mountain at Baramulla (Varahamula).',
      quoteTe: 'కశ్యప మహర్షి వరాహమూల (బారాముల్లా) వద్ద పర్వతాన్ని ఛేదించి సతీసర జలాలను సముద్రం వైపు మళ్లించారు.'
    }
  ],
  seatedPortraitImg: './images/kashyapa_children/kashyap_portrait_seated.png',
  fullPosterImg: './images/kashyapa_children/kashyap_rishi_kashmir_legend.jpg',
  originNameCardImg: './images/kashyapa_children/kashyap_origin_name_card.png',
  timelinePanelImg: './images/kashyapa_children/kashyap_timeline_panel.png',
  historicalImportanceImg: './images/kashyapa_children/kashyap_historical_importance.png',
  sageBioEn: 'Kashyap Rishi was one of the most revered sages in Hindu tradition. He is mentioned in the Vedas, Puranas and epics and is considered one of the foremost Saptarishis (Seven Great Sages) and cosmic Prajapati.',
  sageBioTe: 'కశ్యప మహర్షి సనాతన వైదిక సంప్రదాయంలో అత్యంత పూజనీయులైన సప్తర్షులలో ప్రధానులు. వేదాలు, పురాణాలు, ఇతిహాసాలలో సకల ప్రాణికోటికి ఆవిర్భావ పితగా, దివ్య ప్రజాపతిగా పూజలందుకుంటున్నారు.',
  steps: [
    {
      stepNumber: 1,
      id: 'step1_satisar',
      titleEn: '1. A Lake Called Satisar',
      titleTe: '1. సతీసర మహా సరస్సు',
      subtitleEn: 'Vast Prehistoric Glacial Lake',
      subtitleTe: 'పర్వతాల నడుమ విస్తరించిన మహా జలాశయం',
      descEn: 'Long ago, the entire Kashmir Valley was an enormous lake named Satisar (Lake of Sati). Snow-capped Himalayas cradled these pristine yet impassable waters.',
      descTe: 'యుగాల పూర్వం, నేటి కశ్మీర లోయ హిమాలయ పర్వతాల మధ్య "సతీసరము" (సతీదేవి దివ్య సరస్సు) అనే అగాధమైన, అపారమైన మహా సరస్సుగా ఉండేది.',
      img: './images/kashyapa_children/kashyap_step1_satisar.png',
      accentColor: '#0284C7',
      borderColor: '#38BDF8',
      bgColor: '#F0F9FF'
    },
    {
      stepNumber: 2,
      id: 'step2_jalodbhava',
      titleEn: '2. The Demon Jalodbhava',
      titleTe: '2. జలోద్భవ రాక్షసుని ఉత్పాతం',
      subtitleEn: 'Water-Dwelling Tyrant',
      subtitleTe: 'నీటిలో నివసించే అజేయ రాక్షసుడు',
      descEn: 'A terrifying demon named Jalodbhava ("born of water") dwelled inside the deep lake. Protected under water, he terrorized surrounding ascetics and villagers.',
      descTe: 'ఆ సరస్సులో "జలోద్భవుడు" అనే భయంకర రాక్షసుడు నివసించేవాడు. నీటిలో ఉన్నంత కాలం అతనికి చావు లేకపోవడంతో సమీప గ్రామాల ప్రజలను, తపస్సు చేసే సాధువులను నిరంతరం హింసించేవాడు.',
      img: './images/kashyapa_children/kashyap_step2_jalodbhava.png',
      accentColor: '#DC2626',
      borderColor: '#F87171',
      bgColor: '#FEF2F2'
    },
    {
      stepNumber: 3,
      id: 'step3_penance',
      titleEn: '3. Penance & Divine Help',
      titleTe: '3. కశ్యపుని ఘోర తపస్సు & దేవతల ప్రార్థన',
      subtitleEn: 'Intercession of the Trimurti',
      subtitleTe: 'త్రిమూర్తుల సాక్షాత్కారం & అభయం',
      descEn: 'Moved by the people’s suffering, Kashyap Rishi undertook rigorous penance on Hari Parbat and implored Lord Shiva, Brahma, and Vishnu to intervene.',
      descTe: 'ప్రజల ఆర్తనాదాలు చూసిన కశ్యప మహర్షి పర్వతంపై తీవ్ర తపస్సు ఆచరించి త్రిమూర్తులను (బ్రహ్మ, విష్ణు, మహేశ్వరులను) మరియు దేవతలను ప్రార్థించి రక్షణ కోరారు.',
      img: './images/kashyapa_children/kashyap_step3_penance.png',
      accentColor: '#D97706',
      borderColor: '#FBBF24',
      bgColor: '#FFFBEB'
    },
    {
      stepNumber: 4,
      id: 'step4_draining',
      titleEn: '4. The Lake is Drained, Valley Emerges',
      titleTe: '4. పర్వత ఛేదనం & జల నిర్గమనం',
      subtitleEn: 'Breaching at Varahamula (Baramulla)',
      subtitleTe: 'వరాహరూపంలో పర్వతాన్ని ఛేదించిన దైవశక్తి',
      descEn: 'By divine command, the mountain rim was cut open (at Baramulla / ancient Varahamula). The torrential waters rushed out, leaving the demon vulnerable and slain.',
      descTe: 'దైవానుగ్రహంతో పర్వత శ్రేణులను (నేటి బారాముల్లా / ప్రాచీన వరాహమూల వద్ద) ఛేదించి, సతీసర జలాలన్నింటినీ జలపాతంలా బయటకు మళ్లించారు. నీరు ఎండిపోవడంతో జలోద్భవుడు సంహరించబడ్డాడు.',
      img: './images/kashyapa_children/kashyap_step4_draining.png',
      accentColor: '#0D9488',
      borderColor: '#2DD4BF',
      bgColor: '#F0FDFA'
    },
    {
      stepNumber: 5,
      id: 'step5_valley',
      titleEn: '5. Kashmir Valley is Born',
      titleTe: '5. సుందర కశ్మీర లోయ ఆవిర్భావం',
      subtitleEn: 'Flourishing Civilization & Abode of Rishis',
      subtitleTe: 'మానవ నివాసయోగ్యమైన శారదా పీఠం & భూతల స్వర్గం',
      descEn: 'The fertile basin that emerged became Kashmir — a majestic, resource-rich land where Kashyap Rishi settled learned sages, householders, and founded civilization.',
      descTe: 'జలాల నిష్క్రమణ తరువాత రమణీయమైన, సారవంతమైన పచ్చని లోయ బయటపడింది. అదే కశ్మీర లోయ. కశ్యప మహర్షి ఇక్కడ వేద ఋషులను, పండితులను, ప్రజా సమూహాలను స్థిరపరచి మహోన్నత సంస్కృతిని స్థాపించారు.',
      img: './images/kashyapa_children/kashyap_step5_valley.png',
      accentColor: '#16A34A',
      borderColor: '#4ADE80',
      bgColor: '#F0FDF4'
    }
  ],
  etymology: {
    titleEn: 'Origin of the Name "Kashmir"',
    titleTe: '"కశ్మీర్" అనే నామోత్పత్తి విశేషం',
    termsEn: '"Kashyapa-Mira" or "Kashyapa-Mar"',
    termsTe: '"కశ్యప-మీర" (కశ్యపుని సరస్సు) లేదా "కశ్యప-మరు" (కశ్యపుని నివాస భూమి)',
    meaningEn: 'Meaning the "Lake of Kashyapa" or the "Land/Abode of Kashyapa". Over centuries, Kashyapa-mir became Kashmir.',
    meaningTe: 'సంస్కృతంలో "మీర" అనగా సరస్సు లేదా సముద్రం; "మరు" అనగా నివాస భూమి. "కశ్యపుని సరస్సు/నేల" అనే భావనతో కాలక్రమేణా "కశ్మీర్"గా రూపాంతరం చెందింది.',
    quoteEn: 'Kashmir is often called "Kashyap\'s Land" in honour of the great sage.',
    quoteTe: 'మహర్షి తపోమహిమకు గౌరవంగా కశ్మీర భూమిని తరతరాలుగా "కశ్యపుని పుణ్యభూమి" (Kashyap\'s Land) అని పిలుస్తారు.',
    ancientSayingEn: '“Kashmir was created by Kashyap Rishi”',
    ancientSayingTe: '“కశ్మీరాన్ని సృష్టించింది కశ్యప మహర్షి”'
  },
  historicalImportance: {
    titleEn: 'Historical & Geological Importance',
    titleTe: 'చారిత్రక & భూగర్భ శాస్త్ర నిరూపణ',
    points: [
      {
        icon: '🏛️',
        titleEn: 'Mythological Founder',
        titleTe: 'పౌరాణిక వ్యవస్థాపకుడు',
        descEn: 'Kashyap Rishi is revered as the mythological founder and cultural architect of the entire Kashmir Valley.',
        descTe: 'కశ్యప మహర్షిని కశ్మీర లోయ యొక్క పౌరాణిక పితగా, సమగ్ర సంస్కృతికి రూపకర్తగా శతాబ్దాలుగా కీర్తిస్తున్నారు.'
      },
      {
        icon: '⛰️',
        titleEn: 'Symbolizes Geological Transformation',
        titleTe: 'భూగర్భ పరివర్తనకు ప్రతీక',
        descEn: 'The legend vividly encapsulates the ancient drying up and drainage of a prehistoric alpine lake into a habitable fertile valley.',
        descTe: 'హిమనీనదాలు కరిగి ఏర్పడిన ప్రాచీన సరస్సు క్రమంగా నదుల ద్వారా సముద్రానికి చేరి, సారవంతమైన లోయగా రూపాంతరం చెందిన పరిణామానికి ఈ పురాణ గాథ ప్రతీక.'
      },
      {
        icon: '🔬',
        titleEn: 'Modern Geological Scientific Validation',
        titleTe: 'ఆధునిక భూగర్భ శాస్త్ర ఆధారాలు (Karewa Beds)',
        descEn: 'Geological research confirms the Kashmir Valley was indeed filled by an immense Pleistocene lake (evidenced by the Karewa lacustrine sediment formations), fully corroborating the Nilamata Purana legend.',
        descTe: 'భూగర్భ శాస్త్రవేత్తలు కశ్మీర లోయలో కనుగొన్న "కరేవా (Karewa) అవక్షేపాలు" వేల ఏళ్ళ క్రితం ఇక్కడ భారీ సరస్సు ఉండేదని శాస్త్రీయంగా నిరూపించాయి; ఇది నీలమత పురాణ గాథకు నిజమైన భౌతిక సాక్ష్యం.'
      }
    ]
  },
  timeline: [
    {
      stage: 1,
      id: 't1_lake',
      titleEn: 'Ancient Era',
      titleTe: 'ప్రాచీన యుగం',
      subtitleEn: 'Lake Satisar',
      subtitleTe: 'సతీసర సరస్సు',
      descEn: 'Kashmir Valley was a vast lake (Satisar) enclosed by mountains.',
      descTe: 'కశ్మీర లోయ హిమవత్పర్వతాల నడుమ సతీసరమనే అపార సరస్సుగా ఉండేది.',
      icon: '🌊'
    },
    {
      stage: 2,
      id: 't2_penance',
      titleEn: 'Kashyap Rishi Performs Penance',
      titleTe: 'కశ్యప మహర్షి తపస్సు',
      subtitleEn: 'Seeking Divine Grace',
      subtitleTe: 'దేవతల మొర & త్రిమూర్తుల అనుగ్రహం',
      descEn: 'He seeks divine help from Lord Shiva, Vishnu & Brahma to free people from demon Jalodbhava.',
      descTe: 'జలోద్భవ రాక్షసుని పీడ వదిలించి ప్రజలను రక్షించడానికి కశ్యపుడు తపస్సు ఆచరించెను.',
      icon: '🧘‍♂️'
    },
    {
      stage: 3,
      id: 't3_drained',
      titleEn: 'Lake Satisar is Drained',
      titleTe: 'పర్వత ఛేదనం & జల విముక్తి',
      subtitleEn: 'Breach at Baramulla',
      subtitleTe: 'వరాహమూల వద్ద నీటి నిష్క్రమణ',
      descEn: 'Mountains are cut open at Baramulla and the waters drain away rapidly.',
      descTe: 'బారాముల్లా వద్ద పర్వతం ఛేదించబడి సరస్సులోని జలాలు వేగంగా బయటకు ప్రవహించెను.',
      icon: '🏞️'
    },
    {
      stage: 4,
      id: 't4_valley',
      titleEn: 'Kashmir Valley Emerges',
      titleTe: 'కశ్మీర లోయ సాక్షాత్కారం',
      subtitleEn: 'Fertile Beautiful Land',
      subtitleTe: 'సారవంతమైన ప్రకృతి స్వర్గం',
      descEn: 'Fertile land appears, breathtakingly beautiful and rich in natural resources.',
      descTe: 'సారవంతమైన, నదులతో కూడిన మనోహర లోయ ప్రత్యక్షమైంది.',
      icon: '🌸'
    },
    {
      stage: 5,
      id: 't5_settlement',
      titleEn: 'Settlement of People',
      titleTe: 'మానవ నివాసం & వేద సంస్కృతి',
      subtitleEn: 'Civilization Flourishes',
      subtitleTe: 'శారదా పీఠం & నాగరికత వికాసం',
      descEn: 'People settle in the fertile valley, and a glorious spiritual & cultural civilization flourishes.',
      descTe: 'ప్రజలు, ఋషులు స్థిరపడి కశ్మీర శారదా సంస్కృతిని, వైదిక విజ్ఞానాన్ని విశ్వవ్యాప్తం చేశారు.',
      icon: '👥'
    }
  ]
};


