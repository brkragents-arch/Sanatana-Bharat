import type { SanatanaChronologyStep, ChronologicalSourceEntry } from '../types/mythology';

// 13-stage Sanatana Dharma Emergence Chronological Order directly transcribed from the user's uploaded manuscript
export const SANATANA_CHRONOLOGY_STEPS: SanatanaChronologyStep[] = [
  {
    step: 1,
    sourceTextTe: 'సర్వేశ్వరుని యొక్క అభివ్యక్తత – వలన కాలము, స్వభావము',
    sourceTextEn: 'Manifestation of the Supreme Divine (Sarveshvara) ➔ Time (Kala) & Inherent Cosmic Nature (Svabhava)',
    causeTe: 'సర్వేశ్వరుని యొక్క అభివ్యక్తత (భగవత్సంకల్పము)',
    causeEn: 'Manifestation & Divine Will of the Supreme Lord (Sarveshvara)',
    effectTe: 'కాలము మరియు స్వభావము',
    effectEn: 'Cosmic Time (Kala) & Innate Nature (Svabhava)',
    philosophicalDetailTe: 'నిర్గుణ నిరాకార పరబ్రహ్మము సృష్టి సంకల్పముతో సగుణ ఆదిపురుషునిగా అభివ్యక్తమవగా, ప్రాణుల పూర్వకర్మలను మేల్కొలుపు "కాలము" మరియు జీవుల సహజ గుణమైన "స్వభావము" ప్రారంభమైనవి.',
    philosophicalDetailEn: 'When the unmanifest Supreme Divine wills to manifest creation, Cosmic Time (Kala) awakens to ripen past karmas, and the innate nature (Svabhava) of all entities is set into motion.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – ద్వితీయ స్కంధము 5వ అధ్యాయము & తృతీయ స్కంధము 5వ అధ్యాయము',
    icon: '🕉️'
  },
  {
    step: 2,
    sourceTextTe: 'కాలస్వభావములు – వలన ప్రకృతి',
    sourceTextEn: 'Time & Inherent Nature ➔ Primordial Material Nature (Prakriti / Pradhana)',
    causeTe: 'కాలము మరియు స్వభావముల ప్రేరణ',
    causeEn: 'Impulsion of Cosmic Time and Inherent Nature',
    effectTe: 'ప్రకృతి (మూల ప్రకృతి / ప్రధానము)',
    effectEn: 'Primordial Nature (Prakriti / Pradhana)',
    philosophicalDetailTe: 'కాలము యొక్క చలనము మరియు స్వభావము యొక్క అంతర్గత క్షోభ వలన గుణ సామ్యావస్థలో నున్న అవ్యక్త మూల ప్రకృతి సృష్టి విస్తరణకై సక్రియాత్మకమైనది.',
    philosophicalDetailEn: 'Under the agitation of Time and Svabhava, the primordial unmanifest nature (Prakriti/Pradhana), previously in equilibrium of the three gunas, becomes active for creation.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 5వ & 26వ అధ్యాయములు',
    icon: '🌀'
  },
  {
    step: 3,
    sourceTextTe: 'ప్రకృతి – వలన మహత్తత్త్వము',
    sourceTextEn: 'Primordial Nature ➔ Cosmic Universal Intelligence (Mahat-Tattva)',
    causeTe: 'ప్రకృతి యందు పరమపురుషుని వీక్షణము (సంయోగము)',
    causeEn: 'Interaction of Divine Consciousness with Primordial Nature',
    effectTe: 'మహత్తత్త్వము (విశ్వవ్యాప్త బుద్ధి / హిరణ్మయ తత్త్వము)',
    effectEn: 'Mahat-Tattva (Universal Cosmic Intelligence & Light)',
    philosophicalDetailTe: 'ప్రకృతి భగవత్కళా ప్రేరితమై "మహత్" అను ఆదిమ బుద్ధి తత్త్వముగా వికసించెను. ఇది సమస్త జగద్విజ్ఞానమునకు, జ్ఞానశక్తికి పునాది.',
    philosophicalDetailEn: 'Prakriti transforms into the Mahat-Tattva, the universal cosmic intellect, the luminous cosmic seed harboring the totality of conscious intelligence.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 19-21)',
    icon: '✨'
  },
  {
    step: 4,
    sourceTextTe: 'మహత్తత్త్వము – వలన అహంకారతత్త్వము, సత్వ, రాజస, తమో అహంకారములు',
    sourceTextEn: 'Cosmic Intelligence ➔ Cosmic Ego (Ahankara) in Three Modes: Sattva, Rajas, and Tamas',
    causeTe: 'మహత్తత్త్వము యొక్క పరిణామము',
    causeEn: 'Evolutionary transformation of Mahat-Tattva',
    effectTe: 'అహంకారతత్త్వము (సాత్విక, రాజస, తామస అహంకారములు)',
    effectEn: 'Ego Principle (Ahankara) in 3 Gunas: Vaikarika (Sattva), Taijasa (Rajas), and Tamasa (Tamas)',
    philosophicalDetailTe: 'మహత్తత్త్వము నుండి "నేను", "నాది" అను అహంకార తత్త్వము ఉద్భవించెను. ఇది జ్ఞానశక్తి (సాత్విక), క్రియాశక్తి (రాజస), మరియు ద్రవ్యశక్తి (తామస) అను మూడు భేదాలుగా విడిపోయెను.',
    philosophicalDetailEn: 'From Mahat arises Ahankara (the self-identifying principle), which bifurcates into three cosmic potencies: Sattvic (Vaikarika - mental/divine), Rajasic (Taijasa - energetic/sensory), and Tamasic (Tamasa - physical matter).',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 23-24)',
    icon: '🔱'
  },
  {
    step: 5,
    sourceTextTe: 'రాజసాహంకారము – వలన ఇంద్రియాలు',
    sourceTextEn: 'Rajasic Ego (Taijasa Ahankara) ➔ Ten Senses (Indriyas: Sensory & Motor)',
    causeTe: 'రాజసాహంకారము (క్రియాశక్తి ప్రకోపము)',
    causeEn: 'Dynamic active energy of Rajasic Ahankara',
    effectTe: 'ఏకాదశ ఇంద్రియములు (5 జ్ఞానేంద్రియాలు + 5 కర్మేంద్రియాలు)',
    effectEn: 'Ten Senses: 5 Cognition Senses (Hearing, Touch, Sight, Taste, Smell) & 5 Action Organs (Speech, Hands, Feet, Evacuation, Procreation)',
    philosophicalDetailTe: 'క్రియాశీలకమైన రాజసాహంకారము నుండి కర్మేంద్రియాలు (వాక్, పాణి, పాద, పాయు, ఉపస్థ) మరియు జ్ఞానేంద్రియాలు (శ్రోత్ర, త్వక్, చక్షు, జిహ్వ, ఘ్రాణ) ఆవిర్భవించెను.',
    philosophicalDetailEn: 'Rajasic Ahankara produces the ten active and cognitive sensory faculties through which living entities perceive and interact with existence.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 30-31)',
    icon: '👁️'
  },
  {
    step: 6,
    sourceTextTe: 'సత్వాహంకారము – వలన ఇంద్రియాధిదేవతలు',
    sourceTextEn: 'Sattvic Ego (Vaikarika Ahankara) ➔ Presiding Deities of the Senses & Cosmic Mind',
    causeTe: 'సాత్వికాహంకారము (ప్రకాశ జ్ఞానశక్తి)',
    causeEn: 'Luminous cognitive mode of Sattvic Ahankara',
    effectTe: 'ఇంద్రియాధిదేవతలు మరియు మనస్సు',
    effectEn: 'Presiding Deities of the Senses (Sun, Moon, Indra, Varuna, Agni, etc.) and Cosmic Mind (Manas)',
    philosophicalDetailTe: 'సాత్వికాహంకారము నుండి ఇంద్రియములను నడిపించే దివ్య అధిదేవతలు (దిక్కులు, వాయువు, సూర్యుడు, వరుణుడు, అశ్వినులు, అగ్ని, ఇంద్రుడు, ఉపేంద్రుడు, మిత్రుడు, ప్రజాపతి) మరియు మనస్సు ప్రభవించెను.',
    philosophicalDetailEn: 'Sattvic Ahankara generates the presiding cosmic deities that govern sensory perception (the Sun for sight, Wind for touch, Disas for hearing, etc.) along with the Mind.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 27-29)',
    icon: '☀️'
  },
  {
    step: 7,
    sourceTextTe: 'తమోహంకారము – వలన పంచతన్మాత్రలు',
    sourceTextEn: 'Tamasic Ego (Tamasa Ahankara) ➔ Five Subtle Sense Objects (Pancha Tanmatras)',
    causeTe: 'తామసాహంకారము (ద్రవ్యశక్తి / స్థూల పదార్థ మూలము)',
    causeEn: 'Inertial matter-producing mode of Tamasic Ahankara',
    effectTe: 'పంచతన్మాత్రలు (శబ్ద, స్పర్శ, రూప, రస, గంధములు)',
    effectEn: 'Five Subtle Elements (Tanmatras: Sound, Touch, Form, Taste, Odor)',
    philosophicalDetailTe: 'తామసాహంకార వికారము వలన శబ్ద తన్మాత్ర, స్పర్శ తన్మాత్ర, రూప తన్మాత్ర, రస తన్మాత్ర, మరియు గంధ తన్మాత్రలు క్రమముగా జన్మించెను.',
    philosophicalDetailEn: 'From Tamasic Ahankara emerge the subtle sonic, tactile, visual, gustatory, and olfactory vibrational matrices of material reality.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 32-48)',
    icon: '🎵'
  },
  {
    step: 8,
    sourceTextTe: 'పంచతన్మాత్రలు – వలన పంచమహాభూతములు',
    sourceTextEn: 'Five Subtle Elements ➔ Five Gross Elements (Pancha Maha Bhutas)',
    causeTe: 'పంచతన్మాత్రల ఘనీభవన పరిణామము',
    causeEn: 'Condensation of subtle tanmatras into gross cosmic elements',
    effectTe: 'పంచమహాభూతములు (ఆకాశము, వాయువు, తేజస్సు, జలము, పృథ్వి)',
    effectEn: 'Five Great Cosmic Elements: Ether/Space (Akasha), Air (Vayu), Fire (Tejas), Water (Jala), and Earth (Prithvi)',
    philosophicalDetailTe: 'శబ్దము నుండి ఆకాశము, స్పర్శ నుండి వాయువు, రూపము నుండి అగ్ని/తేజస్సు, రసము నుండి జలము, గంధము నుండి పృథ్వి (భూమి) క్రమముగా స్థూల రూపము దాల్చెను.',
    philosophicalDetailEn: 'From sound ether manifests; from touch, air; from form, fire/light; from taste, water; from odor, earth. Thus the physical universe materializes.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 34-47)',
    icon: '🌍'
  },
  {
    step: 9,
    sourceTextTe: 'పంచమహాభూతములు – వలన దేహేంద్రియములు, మనసు',
    sourceTextEn: 'Five Great Elements ➔ Physical Embodied Organs, Physical Bodies & Mind',
    causeTe: 'పంచమహాభూతముల పంజ్రీకరణము & సంయోగము',
    causeEn: 'Combination and quintuplication (Panchikarana) of five gross elements',
    effectTe: 'సమస్త భౌతిక దేహములు, దేహేంద్రియములు మరియు మనస్సు',
    effectEn: 'Living Physical Bodies, Physiological Organ Systems, and Mind',
    philosophicalDetailTe: 'పంచభూతములు పరస్పరం కలిసి శరీర పిండములుగా రూపుదిద్దుకొనగా, జీవుల కర్మానుభవమునకై దేహేంద్రియములు మరియు మనస్సు సమన్వయము చెందెను.',
    philosophicalDetailEn: 'The gross elements merge to form physical somatic structures, organic vessels, and the physiological foundation for embodied conscious experience.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 26వ అధ్యాయము (శ్లోకములు 50-52)',
    icon: '🧬'
  },
  {
    step: 10,
    sourceTextTe: 'దేహేంద్రి- వలన విశ్వవ్యాపక విరాట్పురుషుడు',
    sourceTextEn: 'Embodied Organs & Elements ➔ All-Pervading Cosmic Universal Person (Virat Purusha)',
    causeTe: 'ఈశ్వర చైతన్య ప్రవేశము వలన సమస్త తత్త్వముల ఏకీకరణ',
    causeEn: 'Divine animation uniting all elements into the Golden Cosmic Egg (Brahmanda)',
    effectTe: 'విశ్వవ్యాపక విరాట్పురుషుడు (సమస్త భువన రూపుడు)',
    effectEn: 'All-Pervading Universal Virat Purusha (Cosmic Form embodying all worlds)',
    philosophicalDetailTe: 'పంచభూతాలు, ఇంద్రియాలు పరస్పరం కలసి సమగ్ర బ్రహ్మాండ అండమును నిర్మించగా, శ్రీమహావిష్ణువు దానిలో ప్రవేశించి సహస్ర శీర్షుడైన విరాట్పురుషునిగా నిలిచెను.',
    philosophicalDetailEn: 'When the cosmic elements unite into the golden egg of the universe, the Supreme Lord enters it, manifesting as the omni-present Virat Purusha whose limbs comprise all 14 planetary spheres.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – ద్వితీయ స్కంధము 1వ & 5వ అధ్యాయములు; తృతీయ స్కంధము 26వ అధ్యాయము',
    icon: '🌌'
  },
  {
    step: 11,
    sourceTextTe: 'విరాట్పురుషుడు – స్వరాట్టు',
    sourceTextEn: 'Universal Virat Purusha ➔ Svarat (Self-Effulgent Sovereign Manifestation)',
    causeTe: 'విరాట్పురుషుని దివ్య నాభీ మండల సంకల్పము',
    causeEn: 'Will of the Virat Purusha manifesting autonomous sovereign vitality',
    effectTe: 'స్వరాట్టు (స్వయం ప్రభావిత సృష్టి కేంద్రము / కారణోదక విష్ణు సంకల్పము)',
    effectEn: 'Svarat (Autonomous Self-Effulgent Cosmic Center / Garbhodakashayi Vishnu)',
    philosophicalDetailTe: 'విరాట్పురుషుని దివ్య చైతన్యము నుండి స్వరాట్టు (స్వయం ప్రకాశక అధిపతి) ఆవిర్భవించి, సృష్టి విస్తరణకు ఆధారభూతమైన హిరణ్మయ నాభీకమలమును వికసింపజేసెను.',
    philosophicalDetailEn: 'From the Virat emerges Svarat, the self-luminous sovereign consciousness, who sustains cosmic order and causes the golden lotus of creation to bloom.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – ద్వితీయ స్కంధము 6వ అధ్యాయము & తృతీయ స్కంధము 8వ అధ్యాయము',
    icon: '👑'
  },
  {
    step: 12,
    sourceTextTe: 'స్వరాట్టు – బ్రహ్మ',
    sourceTextEn: 'Svarat / Golden Lotus ➔ Chaturmukha Brahma (Four-Faced Creator)',
    causeTe: 'నాభీకమల కర్ణిక యందు స్వయంభూ ఆవిర్భావము',
    causeEn: 'Emergence within the pericarp of the thousand-petaled Golden Lotus',
    effectTe: 'చతుర్ముఖ బ్రహ్మ (సృష్టికర్త, కమలాసనుడు, వేదపురుషుడు)\nస్వరాట్టు నుండి జగత్తు ఆవిర్భవించాయి. ఆ జగత్తు నుండి విష్ణువు, హిరణ్యగర్భుడు, రుద్రులతో పాటు చతుర్ముఖ బ్రహ్మ ఆవిర్భవించారు.',
    effectEn: 'Chaturmukha Brahma (The Four-Faced Demiurge and Vedic Architect)\nFrom Svarat, the cosmos manifested. From that cosmos, along with Vishnu, Hiranyagarbha, and Rudra, Chaturmukha Brahma manifested.',
    philosophicalDetailTe: 'స్వరాట్ స్వరూపుడైన శ్రీహరి నాభీకమలమున స్వయంభూవుగా నాలుగు ముఖాలతో బ్రహ్మదేవుడు ఆవిర్భవించెను. స్వరాట్టు నుండి జగత్తు ఆవిర్భవించాయి. ఆ జగత్తు నుండి విష్ణువు, హిరణ్యగర్భుడు, రుద్రులతో పాటు చతుర్ముఖ బ్రహ్మ ఆవిర్భవించారు. వేయి దివ్యవర్షాల తపస్సుతో వేదజ్ఞానమును, చతుశ్శ్లోకీ భాగవతమును పొందెను.',
    philosophicalDetailEn: 'Within the golden lotus blooming from the navel of the Lord, Chaturmukha Brahma is born. After a millennium of deep tapas, he receives the Vedic wisdom and divine mandate to construct creation.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 8వ & 9వ అధ్యాయములు',
    icon: '🪷'
  },
  {
    step: 13,
    sourceTextTe: 'బ్రహ్మ – విశ్వసృష్టి, వైరాగ్యతత్వము, రుద్రుడు – చతుర్విధ సృష్టి',
    sourceTextEn: 'Chaturmukha Brahma ➔ Cosmic Creation, Renunciation (Sanat-Kumaras), Rudra, Prajapatis (Daksha), and Fourfold Life (Chaturvidha Srushti)',
    causeTe: 'బ్రహ్మదేవుని తపోజ్ఞానము & అంగోద్భవ సంకల్పము',
    causeEn: 'Brahma\'s tapas, Vedic resonance, and bodily projections',
    effectTe: 'సమస్త విశ్వసృష్టి, వైరాగ్య స్వరూప సనకాదులు, రుద్రుడు, నవ ప్రజాపతులు, దక్ష ప్రజాపతి, మరియు చతుర్విధ జీవరాశులు (అండజ, స్వేదజ, ఉద్భిజ్జ, జరాయుజ)',
    effectEn: 'Universal Cosmos, Sanaka Kumaras (Nivritti), Rudra, Prajapatis (including Daksha Prajapati), Prasuti, 16 Daughters, and Fourfold Beings (oviparous, sweat-born, earth-sprouted, viviparous)',
    philosophicalDetailTe: 'బ్రహ్మదేవుని నుండి తొలిగా వైరాగ్య స్వరూపులైన సనకాదులు, భ్రూమధ్యం నుండి రుద్రుడు, కుడి బొటనవేలి నుండి దక్ష ప్రజాపతి, కాయ విభజన ద్వారా స్వాయంభువ మనువు-శతరూప, వారి పుత్రిక ప్రసూతి మరియు 16 మంది దివ్య కన్యల ద్వారా సమస్త బ్రహ్మాండ సంతతి విస్తరించెను.',
    philosophicalDetailEn: 'Brahma manifests the path of renunciation through the four Kumaras, dissolution through Rudra, propagation through the Prajapatis (with Daksha Prajapati from his right thumb), Swayambhuva Manu & Prasuti, expanding across the 14 planetary systems and 8.4 million lifeforms.',
    bhagavatamRef: 'శ్రీమద్భాగవతము – తృతీయ స్కంధము 12వ అధ్యాయము & చతుర్థ స్కంధము 1వ అధ్యాయము',
    icon: '🌳'
  }
];

// Chronological Scriptural Sources from Srimad Bhagavatam (Canto 2 -> Canto 3 -> Canto 4 -> Canto 6)
export const CHRONOLOGICAL_SOURCES_LIST: ChronologicalSourceEntry[] = [
  {
    chronologicalOrder: 1,
    canto: 'ద్వితీయ స్కంధము',
    cantoEn: 'Canto 2',
    chapter: '5 మరియు 9వ అధ్యాయములు',
    chapterEn: 'Chapters 5 & 9',
    themeTe: 'సృష్టి ఆదిమ స్థితి & చతుశ్శ్లోకీ భాగవతోపదేశము',
    themeEn: 'Origin of Cosmic Creation & Revelation of Chatus-Shloki Bhagavatam',
    summaryTe: 'నారదునికి బ్రహ్మదేవుడు పరమాత్మ నుండి కాలము, స్వభావము, మహత్తత్త్వము, అహంకారము, పంచభూతముల ఆవిర్భావ క్రమాన్ని వివరించుట. శ్రీహరి బ్రహ్మకు చతుశ్శ్లోకీ భాగవతమును ప్రసాదించి సృష్టి సంకల్పం చేయించుట.',
    summaryEn: 'Chaturmukha Brahma explains to Narada how the Supreme Lord activates Time, Nature, Mahat-tattva, Ahankara, and the elements. Lord Hari reveals the essence of all wisdom in the 4 seed verses of Srimad Bhagavatam.',
    primaryPassages: 'ద్వితీయ స్కంధము: "ససర్గ ప్రథమం దేవో మహదాదీంశ్చ కర్మభిః..." & "అహమేవాసమేవాగ్రే నాన్యద్యత్ సదసత్పరమ్..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 2,
    canto: 'తృతీయ స్కంధము',
    cantoEn: 'Canto 3',
    chapter: '8వ అధ్యాయము',
    chapterEn: 'Chapter 8',
    themeTe: 'కారణోదకము, శేషశయనము & నాభీకమలంలో బ్రహ్మోద్భవము',
    themeEn: 'Karanodaka Ocean, Sheshashayana & Emergence of Brahma in Lotus',
    summaryTe: 'మహాప్రళయానంతరం శ్రీమహావిష్ణువు యోగనిద్రలో ఉండగా, నాభి నుండి సహస్రదళ హిరణ్మయ పద్మము ఉద్భవించుట. ఆ కమల కర్ణిక యందు స్వయంభూవుగా నాలుగు ముఖాలతో బ్రహ్మదేవుడు జన్మించుట.',
    summaryEn: 'After cosmic dissolution, Lord Vishnu lies in divine yoga-nidra upon Ananta Shesha in the causal waters. From His navel blooms the golden thousand-petaled lotus, in which Chaturmukha Brahma self-manifests.',
    primaryPassages: 'తృతీయ స్కంధము: "కరమరుదైన యోగనిధి గానగ నైక్యము నొంది యున్న యా హరి యుదరంబు లోపలి..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 3,
    canto: 'తృతీయ స్కంధము',
    cantoEn: 'Canto 3',
    chapter: '9వ అధ్యాయము',
    chapterEn: 'Chapter 9',
    themeTe: 'బ్రహ్మదేవుని తపస్సు, విష్ణు సాక్షాత్కారము & బ్రహ్మ స్తుతి',
    themeEn: 'Brahma\'s Millennial Tapas, Divine Darshan & Prayer to Lord Vishnu',
    summaryTe: 'కమలనాళంలో మూలము కనబడక, ఆకాశవాణి "తప... తప..." విని వేయి దివ్యవర్షాలు తపస్సు చేయుట. శ్రీహరి ప్రత్యక్షమై బ్రహ్మకు లోకనిర్మాణ సంకల్పమును అనుగ్రహించుట.',
    summaryEn: 'Unable to discover his origin in the lotus stalk, Brahma hears the cosmic voice say "Tapa... Tapa..." and meditates for 1,000 celestial years. Lord Hari manifests and bestows the cosmic blueprint of creation.',
    primaryPassages: 'తృతీయ స్కంధము: "తామరలోన బుట్టితిని తత్పరతన్ గనిపించ దిందులో..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 4,
    canto: 'తృతీయ స్కంధము',
    cantoEn: 'Canto 3',
    chapter: '10వ అధ్యాయము',
    chapterEn: 'Chapter 10',
    themeTe: 'దశవిధ సృష్టి విభాగములు (ప్రాకృత, వైకృత, కౌమార)',
    themeEn: 'Tenfold Divisions of Creation (Prakrita, Vaikrita, and Kaumara)',
    summaryTe: 'ప్రాకృత సృష్టి (మహత్ నుండి పిండ సృష్టి వరకు 6 దశలు), వైకృత సృష్టి (స్థావర, తిర్యక్, దేవ, మానుష 4 దశలు), మరియు కౌమార సృష్టి (సనక సనందనాదులు) అను దశవిధ సృష్టి క్రమ నిర్ణయము.',
    summaryEn: 'Maitreya Muni delineates the 10 categories of creation: 6 primary natural stages (Prakrita), 4 secondary embodied stages (plants, animals, devas, humans), and the divine Kaumara creation of the Kumara rishis.',
    primaryPassages: 'తృతీయ స్కంధము: "సర్గో నవవిధస్తస్య ప్రాకృతో వైకృతశ్చ యః..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 5,
    canto: 'తృతీయ స్కంధము',
    cantoEn: 'Canto 3',
    chapter: '12వ అధ్యాయము',
    chapterEn: 'Chapter 12',
    themeTe: 'చతుర్వేదములు, నవ ప్రజాపతులు, దక్షుడు & స్వాయంభువ మనువు',
    themeEn: 'Four Vedas, Navaprajapatis, Daksha\'s Birth & Swayambhuva Manu',
    summaryTe: 'బ్రహ్మ చతుర్ముఖాల నుండి 4 వేదములు; అవయవాల నుండి మరీచి, అత్రి, అంగిరస, పులస్త్య, పులహ, క్రతు, భృగు, వసిష్ఠ, నారదులు; కుడి అంగుష్ఠము నుండి దక్ష ప్రజాపతి; మరియు కాయ విభజన ద్వారా స్వాయంభువ మనువు-శతరూపల ఆవిర్భావము.',
    summaryEn: 'Manifestation of Rig, Yajur, Sama, Atharva from Brahma\'s 4 faces; 9 Prajapatis from his limbs; Daksha Prajapati from his right thumb; and Swayambhuva Manu & Shatarupa from his divided body.',
    primaryPassages: 'తృతీయ స్కంధము: "అంగుష్ఠంబున బుట్టె దక్షుడు జగత్ఖ్యాత ప్రతాపుండు..." & "తనదు దేహము నొక వింతగా విభజించెన్..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 6,
    canto: 'చతుర్థ స్కంధము',
    cantoEn: 'Canto 4',
    chapter: '1వ అధ్యాయము',
    chapterEn: 'Chapter 1',
    themeTe: 'దక్ష ప్రజాపతి – ప్రసూతి వివాహము & 16 మంది దివ్య పుత్రికల సంతతి',
    themeEn: 'Daksha Prajapati & Prasuti\'s Marriage & Lineage of 16 Daughters',
    summaryTe: 'స్వాయంభువ మనువు పుత్రిక ప్రసూతిని దక్ష ప్రజాపతి పరిణయమాడుట. వారికి జన్మించిన 16 మంది కన్యలు: ధర్మదేవునికి 13 మంది (శ్రద్ధ, మూర్తి మొదలైనవారు - శ్రీ నరనారాయణావతారము), అగ్నికి స్వాహా (పావకాదులు), పితృలకు స్వధా (వయున, ధారిణి), పరమశివునికి సతీదేవి.',
    summaryEn: 'Daksha marries Prasuti, daughter of Swayambhuva Manu. They beget 16 auspicious daughters: 13 to Dharma (Murti gives birth to Lord Nara-Narayana), Swaha to Agni (Pavaka, Pavamana, Shuchi), Swadha to Pitrus (Vayuna, Dharini), and Sati to Lord Shiva.',
    primaryPassages: 'చతుర్థ స్కంధము: "ప్రసూతి యందు దక్షునకుం బదునారువురు కన్యకలు జనియించిరి..." & "మూర్తి యందున బుట్టె మునివరుల్ నరనారాయణాఖ్యులై..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 7,
    canto: 'చతుర్థ స్కంధము',
    cantoEn: 'Canto 4',
    chapter: '2 నుండి 7వ అధ్యాయములు',
    chapterEn: 'Chapters 2 to 7',
    themeTe: 'దక్షాధ్వరము, సతీదేవి యోగాగ్ని త్యాగము & వీరభద్ర ధ్వంసము',
    themeEn: 'Daksha Yajna, Sati\'s Sacrificial Self-Immolation & Veerabhadra',
    summaryTe: 'దక్షుని అహంకార పూరిత బృహస్పతిసవ యజ్ఞము. పతినింద సహింపక సతీదేవి యోగాగ్నియందు దేహత్యాగము చేయుట. శివుని జట నుండి వీరభద్రుని ఉద్భవము, యజ్ఞ ధ్వంసము, దక్షునికి మేక శిరస్సు అమర్చి జ్ఞానోపదేశము చేయుట.',
    summaryEn: 'Daksha offends Lord Shiva; Sati gives up her body in yogic fire at the sacrificial arena; Veerabhadra destroys the sacrifice; Shiva mercifully restores Daksha with a goat head and brings enlightenment.',
    primaryPassages: 'చతుర్థ స్కంధము: "హరు నవమానించి దక్షుం డజ్ఞానమునన్ బెరిపి యాగంబు సేయంగ..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  },
  {
    chronologicalOrder: 8,
    canto: 'షష్ఠ స్కంధము',
    cantoEn: 'Canto 6',
    chapter: '6వ అధ్యాయము',
    chapterEn: 'Chapter 6',
    themeTe: 'ద్వితీయ దక్ష జన్మము (ప్రచేతసుల పుత్రుడు) & 60 మంది కన్యల వంశము',
    themeEn: 'Second Daksha (Son of Prachetas) & 60 Daughters Genealogy',
    summaryTe: 'చాక్షుష మన్వంతరంలో దక్షుడు ప్రచేతసుల పుత్రునిగా పునర్జన్మించుట. పంచజని (అసిక్ని)తో వివాహము, 60 మంది కుమార్తెలను కశ్యపుడు, ధర్మదేవుడు, చంద్రునికిచ్చి సమస్త చరాచర సృష్టిని విస్తరింపజేయుట.',
    summaryEn: 'In Chakshusha Manvantara, Daksha reincarnates as the son of the 10 Prachetas. He marries Asikni (Panchajani) and begets 60 daughters given to Kashyapa, Dharma, Chandra, expanding all cosmic species.',
    primaryPassages: 'షష్ఠ స్కంధము: "ప్రచేతసో మహాతేజా దక్షః ప్రాచేతసోభవత్..."',
    teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha'
  }
];


// Comprehensive Philosophical & Scriptural Introduction before Step 1 (సోపానం 1)
export const SANATANA_CREATION_INTRODUCTION = {
  badgeTe: 'ఉపోద్ఘాతము • సృష్టి రహస్య పీఠిక (సోపానం 1 కి ముందు)',
  badgeEn: 'Philosophical Introduction • Prelude to Step 1',
  whyCreationSection: {
    titleTe: 'సర్వేశ్వరుడు అసలు సృష్టిని ఎందుకు ప్రారంభించాలనుకున్నాడు? (Why did the Supreme Divine desire to create?)',
    titleEn: 'Why Did the Supreme Divine (Sarveshvara) Desire to Begin Creation?',
    openingTe: 'సర్వేశ్వరుడు అసలు సృష్టిని ఎందుకు ప్రారంభించాలనుకున్నాడు? (Why did the Supreme Divine desire to create?) అనే ప్రశ్న హిందూ వేదాంతంలో అత్యంత ప్రాథమికమైన మరియు లోతైన ప్రశ్న. దేవునికి ఎలాంటి కోరికలు, కొరతలు లేనప్పుడు సృష్టి ఎందుకు జరిగింది అనేదానికి మన ఉపనిషత్తులు, పురాణాలు నాలుగు ముఖ్య కారణాలను చెప్పాయి:',
    openingEn: 'The question "Why did the Supreme Divine desire to create?" is one of the most foundational and profound questions in Hindu Vedanta. Since the Supreme Lord has no unfulfilled desires or deficiencies whatsoever, the Upanishads and Puranas explain four primary reasons why creation took place:',
    fourReasons: [
      {
        num: 1,
        titleTe: '1. లీలా విలాసం (The Divine Play - Leela)',
        titleEn: '1. The Divine Play (Leela Vilasam)',
        introTe: 'వేదాంత సూత్రాల ప్రకారం సృష్టి అనేది భగవంతుని యొక్క "లీల" (ఆట).',
        introEn: 'According to the Vedanta Sutras, creation is the spontaneous "Leela" (divine sport/play) of the Supreme Lord.',
        bulletsTe: [
          'ఒక సంపూర్ణమైన శక్తి కలిగిన వ్యక్తి కేవలం ఆనందం కోసం, కాలక్షేపం కోసం ఎలాగైతే ఆటలు ఆడతాడో, అలాగే సర్వేశ్వరుడు తన సంతోషం కోసం ఈ సృష్టి అనే నాటకాన్ని రచిస్తాడు.',
          'దీనినే "లోకవత్తు లీలాకైవల్యమ్" అంటారు. అంటే, దేవునికి ఈ సృష్టి వల్ల వచ్చే లాభం కానీ, రాకపోతే వచ్చే నష్టం కానీ ఏమీ లేదు. ఇది కేవలం ఆయన ఆనంద ఉల్లాసం (Pure joy).'
        ],
        bulletsEn: [
          'Just as a completely self-fulfilled person plays a game purely out of joy and delight, Sarveshvara composes this cosmic drama out of His own bliss.',
          'The Brahma Sutras (2.1.33) declare this as "Lokavat tu lila-kaivalyam" — the Lord gains no personal profit from creating nor suffers any loss by not creating; it is purely an overflow of His innate joy (Pure Joy).'
        ]
      },
      {
        num: 2,
        titleTe: '2. ఏకత్వం నుండి బహుత్వ ఆనందం (The Desire for Variety)',
        titleEn: '2. The Joy of Becoming Many from One (The Desire for Variety)',
        introTe: 'సృష్టికి ముందు భగవంతుడు ఒక్కడే ఉన్నాడు, అక్కడ వేరే ఏ వస్తువు, జీవి లేవు.',
        introEn: 'Prior to creation, the Supreme Lord existed alone as the One without a second; no other object or living entity existed.',
        bulletsTe: [
          'ఉపనిషత్తులలో "ఏకోహం బహుస్యామ్" అనే వాక్యం వస్తుంది. అంటే—"నేను ఒక్కడినే ఉన్నాను, అనేక రూపాలుగా మారి నన్ను నేను ఆనందించుకుంటాను" అని భగవంతుడు సంకల్పించాడు.',
          'ఒక వ్యక్తి అద్దంలో తన రూపాన్ని చూసుకుని మురిసిపోయినట్లు, పరమాత్మ తనలోని అనంతమైన శక్తులను రకరకాల జీవులుగా, ప్రకృతిగా మార్చి, ఆ వైవిధ్యాన్ని చూసి ఆనందించడానికి సృష్టిని ప్రారంభించాడు.'
        ],
        bulletsEn: [
          'The Upanishads proclaim "Ekoham Bahusyam" — the Lord willed, "I am One; may I become Many and delight in My manifold expressions."',
          'Just as a person delights in beholding their own reflection in a mirror, the Supreme Spirit manifested His infinite potencies into diverse beings and nature to rejoice in that cosmic variety.'
        ]
      },
      {
        num: 3,
        titleTe: '3. జీవులకు కర్మఫలాలు అనుభవించే అవకాశం ఇవ్వడానికి (Compassion for Jivas)',
        titleEn: '3. To Grant Souls the Opportunity to Experience Karma & Attain Liberation (Compassion for Jivas)',
        introTe: 'సృష్టి లయమైనప్పుడు (ప్రళయ కాలంలో) సమస్త జీవులు పరమాత్మలోనే నిద్రాణంగా ఉండిపోతాయి, కానీ వాటి పూర్వ జన్మల కర్మలు (పాపపుణ్యాలు) ఇంకా మిగిలే ఉంటాయి.',
        introEn: 'During cosmic dissolution (Pralaya), all souls rest dormantly within the Supreme Spirit, yet their accumulated karmas (merits and demerits) from previous births remain unexhausted.',
        bulletsTe: [
          'భగవంతుని కారుణ్యం: ఆ కర్మలను అనుభవించి, జీవులు క్రమంగా జ్ఞానాన్ని పొంది, మోక్షాన్ని సాధించడానికి భగవంతుడు వారికి ఒక వేదికను (భూమి/విశ్వం) ఇవ్వాలనుకున్నాడు.',
          'ఒక తండ్రి తన పిల్లలు తప్పులు చేసినా, వారు బాగుపడటానికి మళ్లీ మళ్లీ అవకాశాలు ఇచ్చినట్లు, సర్వేశ్వరుడు తన సంకల్పం ద్వారా కాలాన్ని, స్వభావాన్ని మేల్కొలిపి జీవులకు పరిణామం చెందే అవకాశం కల్పిస్తాడు.'
        ],
        bulletsEn: [
          'Divine Compassion: Out of supreme grace, the Lord provides a cosmic stage (the earth and universe) so that souls may work out their karmas, gradually acquire spiritual wisdom, and attain Moksha (liberation).',
          'Like a loving father who gives his erring children repeated opportunities to reform and grow, Sarveshvara awakens Time and Nature through His Will so souls can spiritually evolve.'
        ]
      },
      {
        num: 4,
        titleTe: '4. ప్రేమానుభూతి కోసం (To Experience Love/Devotion)',
        titleEn: '4. For the Exchange of Divine Love and Devotion (To Experience Love/Devotion)',
        introTe: 'ప్రేమ లేదా భక్తి అనేది ఒంటరిగా ఉన్నప్పుడు సాధ్యం కాదు. ప్రేమించడానికి ఒకరు, ప్రేమను స్వీకరించడానికి మరొకరు ఉండాలి.',
        introEn: 'Love or devotion cannot be experienced in solitary isolation; there must be a lover and a beloved to share and receive love.',
        bulletsTe: [
          'భగవంతుడు తనపై భక్తిని, ప్రేమను ప్రకటించే భక్తులను సృష్టించి, వారితో ప్రేమ తత్త్వాన్ని పంచుకోవడానికి ఈ సృష్టిని ప్రారంభించాడు.',
          'జీవుడు (ఆత్మ) పరమాత్మ వైపు ప్రయాణించి, ఆయనలో లీనమయ్యే ఆ తపనలోనే సృష్టి యొక్క అసలు అందం దాగి ఉంది.'
        ],
        bulletsEn: [
          'The Supreme Lord initiated creation to bring forth devotees who express pure love and Bhakti toward Him, thereby sharing the nectar of divine love.',
          'The true beauty of creation lies in the soul’s (Atman’s) sacred yearning and journey back toward union with the Supreme Spirit (Paramatman).'
        ]
      }
    ],
    summaryLabelTe: 'సారాంశం:',
    summaryLabelEn: 'Essence:',
    summaryTextTe: 'సర్వేశ్వరునికి ఏ లోటు ఉండి సృష్టిని చేయలేదు. కేవలం తన నిరతిశయ ఆనందాన్ని (Infinite Bliss) పంచడానికి, లీలాపూర్వకంగా ఈ జగత్తును వ్యక్తపరిచాడు.',
    summaryTextEn: 'Sarveshvara did not create out of any lack or deficiency; solely to share His Infinite Bliss (Niratishaya Ananda), He playfully manifested this universe.'
  },
  mainTitleTe: 'సర్వేశ్వరుని సంకల్పం వల్లనే కాలం మరియు స్వభావం ఎందుకు వ్యక్తమవుతాయి?',
  mainTitleEn: 'Why Do Time (Kala) and Inherent Nature (Svabhava) Manifest from the Divine Will of Sarveshvara?',
  openingPara1Te: 'సర్వేశ్వరుని సంకల్పం వల్లనే కాలం మరియు స్వభావం ఎందుకు వ్యక్తమవుతాయి అనే ప్రశ్న వెనుక సనాతన ధర్మం మరియు వేదాంత శాస్త్రం అత్యంత లోతైన సమాధానాన్ని ఇచ్చాయి.',
  openingPara1En: 'Sanatana Dharma and Vedanta Shastra provide a profound explanation behind the question of why Time (Kala) and Inherent Nature (Svabhava) manifest solely through the Divine Will of the Supreme Lord (Sarveshvara).',
  openingPara2Te: 'సృష్టి అనేది శూన్యం నుండి అకస్మాత్తుగా పుట్టింది కాదు; అది పరమాత్మ యొక్క సంకల్పం (Divine Will) ద్వారా జరిగిన ఒక క్రమానుగత ప్రక్రియ. దీనికి గల ముఖ్య కారణాలు ఇక్కడ ఉన్నాయి:',
  openingPara2En: 'Creation did not arise accidentally out of a void; it is an orderly, sequential process initiated by the Divine Will (Sankalpa) of the Supreme Spirit. The primary reasons for this are as follows:',
  threeReasons: [
    {
      num: 1,
      titleTe: '1. ప్రకృతిని మేల్కొల్పడానికి (To Awaken Material Nature)',
      titleEn: '1. To Awaken Material Nature (Prakriti)',
      introTe: "సృష్టికి ముందు విశ్వమంతా 'ప్రకృతి' (లేదా మాయ) రూపంలో నిద్రాణంగా (సుప్తచేతనావస్థలో) ఉంటుంది. ఇందులో సత్వ, రజ, తమో గుణాలు ఏ మార్పూ లేకుండా ప్రశాంతంగా ఉంటాయి.",
      introEn: "Prior to creation, the entire universe remains dormant in the form of 'Prakriti' (or Maya), where the three modes — Sattva, Rajas, and Tamas — rest in undisturbed equilibrium.",
      bulletsTe: [
        'నిర్గుణ పరమాత్మ సృష్టిని ప్రారంభించాలనుకున్నప్పుడు, ఆయన చేసే మొదటి సంకల్పమే ప్రకృతిలో చలనాన్ని తెస్తుంది.',
        'ఆ సంకల్పం వల్లనే కాలం (Time) అనే శక్తి పుట్టి, నిశ్చలంగా ఉన్న ప్రకృతి గుణాలను కదిలిస్తుంది.'
      ],
      bulletsEn: [
        'When the transcendent Parabrahman wills to initiate creation, His very first Sankalpa (Divine Will) introduces motion into Prakriti.',
        'Through that Divine Will, the potency of Time (Kala) emerges and stirs the quiescent modes (gunas) of Prakriti.'
      ]
    },
    {
      num: 2,
      titleTe: '2. కర్మ ఫలాలను అందించడానికి (To Manifest Karma)',
      titleEn: '2. To Manifest the Fruits of Karma (To Manifest Karma)',
      introTe: 'గత కల్పంలో (పూర్వ సృష్టిలో) జీవులు చేసిన పుణ్య-పాప కర్మలు సృష్టి లయమైనప్పుడు నశించవు. అవి సూక్ష్మ రూపంలో పరమాత్మలో దాగి ఉంటాయి.',
      introEn: 'The meritorious and sinful karmas performed by living beings in the previous Kalpa (prior cosmic cycle) are not destroyed at cosmic dissolution; they remain latent in subtle seed form within the Supreme Lord.',
      bulletsTe: [
        "కాలం పాత్ర: జీవుల కర్మలు పక్వానికి రావడానికి (అనుభవంలోకి రావడానికి) సమయం కావాలి. అందుకే సర్వేశ్వరుడు తన సంకల్పంతో 'కాలాన్ని' సృష్టిస్తాడు.",
        "స్వభావం పాత్ర: ప్రతి జీవి యొక్క పూర్వ కర్మల ఆధారంగా వారి అంతర్గత స్వభావం (Inherent Nature) నిర్ణయించబడుతుంది. సర్వేశ్వరుని సంకల్పం లేకపోతే, ఈ కర్మలు మరియు స్వభావాలు కేవలం విత్తనాలలాగే ఉండిపోతాయి కానీ మొలకెత్తవు."
      ],
      bulletsEn: [
        "Role of Time (Kala): Time is required for the latent karmas of souls to ripen and come into experience; hence Sarveshvara manifests 'Time' through His Will.",
        "Role of Nature (Svabhava): Based on each soul's past karmas, its inherent disposition (Svabhava) is determined. Without the Lord's Sankalpa, these karmas and dispositions would remain dormant like ungerminated seeds."
      ]
    },
    {
      num: 3,
      titleTe: '3. ఏకత్వం నుండి బహుత్వాన్ని సాధించడానికి (From One to Many)',
      titleEn: '3. To Achieve Multiplicity from Unity (From One to Many)',
      introTe: 'ఉపనిషత్తులు "ఏకోహం బహుస్యామ్" (నేను ఒక్కడినే, అనేక రూపాలుగా మారుదును గాక) అనే పరమాత్మ సంకల్పం గురించి చెబుతాయి.',
      introEn: 'The Upanishads declare the primordial Divine Will: "Ekoham Bahusyam" ("I am One; may I become Many").',
      bulletsTe: [
        'పరమాత్మ ఒక్కడే అయినప్పటికీ, ఈ అనంత విశ్వంలో వైవిధ్యాన్ని (జంతువులు, పక్షులు, మనుషులు, పంచభూతాలు) సృష్టించాలంటే ఒక నియమం కావాలి.',
        'సర్వేశ్వరుని సంకల్పం వల్ల పుట్టిన కాలం సృష్టికి ఒక క్రమాన్ని (మార్పును) ఇస్తే, స్వభావం అనేది ప్రతి వస్తువుకి ఒక ప్రత్యేక లక్షణాన్ని (ఉదాహరణకు: అగ్నికి కాల్చే స్వభావం, నీటికి ప్రవహించే స్వభావం) ఇస్తుంది.'
      ],
      bulletsEn: [
        'Although the Supreme Spirit is One, a cosmic principle is required to bring forth vast diversity (animals, birds, humans, and the five elements) across the infinite universe.',
        'While Time (Kala) born of the Lord’s Will imparts sequential order and change to creation, Svabhava imparts a distinct intrinsic property to every entity (e.g., the burning nature of fire, the flowing nature of water).'
      ]
    }
  ],
  bhagavatamPramanam: {
    headingTe: 'శాస్త్ర ప్రమాణం (ఉదాహరణ):',
    headingEn: 'Scriptural Authority (Srimad Bhagavatam Citation):',
    sourceLineTe: 'శ్రీమద్భాగవతం (3వ స్కంధం, 26వ అధ్యాయం) లో కపిల మహర్షి దేవహూతికి సాంఖ్య యోగాన్ని వివరిస్తూ ఇలా అంటారు:',
    sourceLineEn: 'In Srimad Bhagavatam (Canto 3, Chapter 26), Sage Kapila Maharshi explains Sankhya Yoga to Mother Devahuti thus:',
    quoteTe: '"సర్వేశ్వరుడైన పరమపురుషుడి సంకల్పం (ఈక్షణం) వల్ల, కాలం అనే శక్తి ప్రకృతిని క్షోభింపజేస్తుంది. ఆ సమయంలో జీవుల పూర్వ కర్మల ప్రభావంతో \'స్వభావం\' అనేది వ్యక్తమవుతుంది."',
    quoteEn: '"Through the Divine Glance and Will (Ikshanam) of the Supreme Purusha (Sarveshvara), the potency of Time agitates Prakriti. At that moment, through the influence of the past karmas of living beings, \'Svabhava\' (inherent nature) becomes manifest."',
    summaryLabelTe: 'సారాంశం:',
    summaryLabelEn: 'Essence:',
    summaryTextTe: 'సర్వేశ్వరుడు ఒక రాజు అయితే, కాలం ఆయన ఆజ్ఞను అమలు చేసే మంత్రి లాంటిది. స్వభావం అనేది ఆ ఆజ్ఞ ప్రకారం రూపుదిద్దుకునే వ్యవస్థ లాంటిది. సృష్టి చక్రం నిరంతరం సాగడానికి పరమాత్మ సంకల్పమే ఈ రెండింటినీ నడిపిస్తుంది.',
    summaryTextEn: 'If Sarveshvara is the King, Time (Kala) is like the Minister executing His command, and Inherent Nature (Svabhava) is the administrative system shaped according to that command. The Divine Will alone drives both to keep the wheel of creation turning.'
  },
  gitaPramanam: {
    headingTe: 'భగవద్గీతలో శ్రీకృష్ణ పరమాత్మ ప్రమాణాలు — దైవీ ప్రకృతి (Divine Nature) & కాల స్వరూపం (Time)',
    headingEn: 'Supreme Authority in the Bhagavad Gita — Divine Nature (Daivi Prakriti) & Cosmic Time (Kala)',
    introTe: 'భగవద్గీతలో శ్రీకృష్ణ పరమాత్మ తన దైవీ ప్రకృతి (Divine Nature) మరియు కాల స్వరూపం (Time) గురించి అత్యంత స్పష్టమైన మరియు గంభీరమైన వివరణ ఇచ్చారు. సర్వేశ్వరుని సంకల్పం వల్ల కాలం, స్వభావాలు ఎలా పనిచేస్తాయో అర్థం చేసుకోవడానికి ఆయన చెప్పిన ఈ రెండు అంశాలు పరమ ప్రమాణాలు.',
    introEn: 'In the Bhagavad Gita, Lord Sri Krishna gives a crystal-clear and profound exposition of His Divine Nature (Daivi Prakriti) and Cosmic Time (Kala). These two teachings stand as the supreme authority for understanding how Time and Nature operate under the Lord’s Will.',
    kalaSection: {
      titleTe: '1. కాల స్వరూపం: "కాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో" (గీత 11.32)',
      titleEn: '1. The Form of Time: "Kalo\'smi Loka-kshaya-krit Pravriddho" (Gita 11.32)',
      contextTe: 'మహాభారత యుద్ధ రంగంలో అర్జునుడు శ్రీకృష్ణుని విశ్వరూపాన్ని చూసి భయకంపితుడై, "ఉగ్రరూపంలో ఉన్న నువ్వు అసలు ఎవరివి?" అని ప్రశ్నించినప్పుడు, భగవానుడు ఇచ్చిన సమాధానం ఇది:',
      contextEn: 'On the battlefield of Kurukshetra, when Arjuna beheld Lord Krishna’s awe-inspiring Vishwaroopam and asked in trembling reverence, "Who are You in this fierce form?", the Supreme Lord replied:',
      shlokaTe: '"కాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో లోకాన్సమాహర్తుమిహ ప్రవృత్తః"',
      shlokaEn: '"Kālo\'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ"',
      refTe: '(భగవద్గీత - 11వ అధ్యాయం, 32వ శ్లోకం)',
      refEn: '(Bhagavad Gita – Chapter 11, Verse 32)',
      bhavamTe: 'భావం: "నేను లోకాలను నాశనం చేసే మహాత్ముడైన కాలాన్ని. ఇప్పుడు ఈ లోకాలను ఉపసంహరించడానికే (లయం చేయడానికే) ఇక్కడ ప్రవృద్ధుడనై ఉన్నాను."',
      bhavamEn: 'Meaning: "I am mighty World-Destroying Time, now engaged here in withdrawing and dissolving the worlds."',
      antararthamTe: 'అంతరార్థం: భగవంతుడే కాల స్వరూపుడు. కాలం దేనికీ ఆగదు, అందరినీ తనలో లయం చేసుకుంటుంది. సర్వేశ్వరుని సంకల్పం ప్రకారం సృష్టిని నడిపించేది, కాలం వచ్చినప్పుడు తిరిగి లయం చేసేది ఈ కాల శక్తియే. అర్జునుడు యుద్ధం చేసినా చేయకపోయినా, కాల రూపంలో ఉన్న భగవంతుని సంకల్పం వల్ల అక్కడ ఉన్న అధర్మపరుల వినాశనం అప్పటికే నిర్ణయించబడింది.',
      antararthamEn: 'Inner Significance: The Supreme Lord Himself is the embodiment of Time. Time stops for none and absorbs all beings into itself. It is this power of Time that drives creation according to Sarveshvara’s Will and dissolves it when the hour arrives.'
    },
    prakritiSection: {
      titleTe: '2. దైవీ ప్రకృతి మరియు స్వభావం (గీత 9.10 & 7.14)',
      titleEn: '2. Divine Nature (Daivi Prakriti) and Inherent Disposition (Gita 9.10 & 7.14)',
      introTe: 'భగవంతుడు తన సంకల్పం ద్వారా ప్రకృతిని, జీవుల స్వభావాలను ఎలా నియంత్రిస్తాడో గీతలో రెండు ముఖ్యమైన శ్లోకాల ద్వారా వివరించారు:',
      introEn: 'Through two foundational verses in the Gita, the Lord explains how He governs Prakriti and the dispositions of living beings by His Will:',
      subSections: [
        {
          headingTe: 'ఎ) ప్రకృతి భగవంతుని అధ్యక్షతన పనిచేస్తుంది:',
          headingEn: 'a) Prakriti Works Under the Supreme Lord’s Superintendence:',
          shlokaTe: '"మయాధ్యక్షేణ ప్రకృతిః సూయతే సచరాచరమ్ ।"',
          shlokaEn: '"Mayādhyakṣeṇa prakṛtiḥ sūyate sa-carācaram |"',
          refTe: '(భగవద్గీత - 9వ అధ్యాయం, 10వ శ్లోకం)',
          refEn: '(Bhagavad Gita – Chapter 9, Verse 10)',
          bhavamTe: 'భావం: "నా అధ్యక్షతన (నా సంకల్పం మరియు సాన్నిధ్యం వల్లనే) ఈ ప్రకృతి చరాచర జగత్తును (స్థావర జంగమాలను) సృష్టిస్తోంది."',
          bhavamEn: 'Meaning: "Under My superintendence (through My Will and Presence alone), material nature brings forth this entire moving and non-moving creation."',
          noteTe: 'ఈ శ్లోకం ద్వారా ప్రకృతికి స్వయంగా సృష్టించే శక్తి లేదని, సర్వేశ్వరుని సంకల్పం (అధ్యక్షత) తోనే అది కాలక్రమేణా సమస్త సృష్టిని, జీవుల స్వభావాలను బయటకు తీస్తుందని స్పష్టమవుతోంది.',
          noteEn: 'This verse makes it clear that Prakriti has no independent power to create; only under the presiding Will (Adhyakshata) of Sarveshvara does it bring forth the cosmos and the inherent natures of souls over time.'
        },
        {
          headingTe: 'బి) గుణమయమైన దైవీ ప్రకృతి:',
          headingEn: 'b) The Three-Mode Divine Maya (Daivi Prakriti):',
          shlokaTe: '"దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా ।"',
          shlokaEn: '"Daivī hy eṣā guṇa-mayī mama māyā duratyayā |"',
          refTe: '(భగవద్గీత - 7వ అధ్యాయం, 14వ శ్లోకం)',
          refEn: '(Bhagavad Gita – Chapter 7, Verse 14)',
          bhavamTe: 'భావం: "త్రిగుణాత్మకమైన (సత్వ, రజ, తమో గుణాలతో కూడిన) నా ఈ దైవీ మాయ (ప్రకృతి) దాటడానికి వీలు లేనిది."',
          bhavamEn: 'Meaning: "This divine energy (Maya / Prakriti) of Mine, consisting of the three modes of material nature (Sattva, Rajas, Tamas), is very difficult to overcome."',
          noteTe: "సర్వేశ్వరుని ఈ దైవీ ప్రకృతిలోనే కాలం ప్రవేశించినప్పుడు, జీవుల 'స్వభావం' (గుణాలు) వ్యక్తమై వారిని కర్మల వైపు నడిపిస్తాయి.",
          noteEn: "When Time enters this Divine Prakriti of Sarveshvara, the 'Svabhava' (qualities/dispositions) of living beings manifests and propels them toward their respective actions."
        }
      ]
    },
    synthesis: {
      headingTe: 'సారాంశం (సమన్వయం) — శ్రీకృష్ణుడు చెప్పిన దాని ప్రకారం:',
      headingEn: 'Synthesis (Samanvayam) — According to Lord Sri Krishna:',
      pointsTe: [
        '1. సర్వేశ్వరుడు: పరబ్రహ్మ మూల కేంద్రం (అధ్యక్షుడు).',
        '2. కాలం: ఆయనే కాల స్వరూపుడై సృష్టి, స్థితి, లయాల క్రమాన్ని శాసిస్తాడు.',
        '3. స్వభావం/ప్రకృతి: ఆయనకు ఆధీనమైన దైవీ ప్రకృతి ద్వారా జీవుల గుణాలను వ్యక్తపరుస్తూ ఈ జగన్నాటకాన్ని నడిపిస్తాడు.'
      ],
      pointsEn: [
        '1. Sarveshvara (The Supreme Lord): Parabrahman is the primordial center and presiding Superintendent (Adhyaksha).',
        '2. Kala (Time): As the embodiment of Time, He ordains the sequence of creation, maintenance, and dissolution.',
        '3. Svabhava / Prakriti (Nature): Through His subordinate Divine Prakriti, He manifests the gunas of living beings and directs the cosmic drama.'
      ]
    }
  }
};
