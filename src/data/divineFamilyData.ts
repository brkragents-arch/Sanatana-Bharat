export interface DivineDeity {
  id: string;
  nameTe: string;
  nameEn: string;
  roleTe: string;
  roleEn: string;
  descTe: string;
  descEn: string;
  vedicRef?: string;
  vedicVerse?: string;
  symbolsTe?: string[];
  symbolsEn?: string[];
  image: string;
  badge?: string;
  badgeTe?: string;
  category: 'supreme' | 'trimurti' | 'rishi' | 'avatar' | 'shiva_family' | 'devi' | 'vedic_god';
  infographicImage?: string;
  detailedPoints?: {
    headingTe: string;
    headingEn: string;
    bodyTe: string;
    bodyEn: string;
  }[];
}

export interface DivineTier {
  tierNumber: number;
  titleTe: string;
  titleEn: string;
  subtitleTe: string;
  subtitleEn: string;
  conceptTe: string;
  conceptEn: string;
  deities: DivineDeity[];
}

export const DIVINE_FAMILY_TIERS: DivineTier[] = [
  // Tier 1: The Supreme Reality
  {
    tierNumber: 1,
    titleTe: 'పరమ సత్యం / పరతత్త్వము',
    titleEn: 'THE SUPREME REALITY',
    subtitleTe: 'పరబ్రహ్మ, ఆత్మన్ & మాయ (మూడు పరమ తత్త్వాలు)',
    subtitleEn: 'PARABRAHMA, ĀTMAN & MĀYĀ (The Three Supreme Realities)',
    conceptTe: 'నామ, రూప, గుణములకు అతీతమైన పరమ సత్యం. సకల సృష్టికి మూలమైన శుద్ధ చైతన్య పరమాత్మ స్వరూపం, జీవ సాక్షి ఆత్మ మరియు జగన్నిర్మాణ మాయా శక్తి.',
    conceptEn: 'Beyond name, form & attributes. The ultimate cosmic consciousness (Brahman), the inner witness self (Ātman), and the creative divine potency (Māyā).',
    deities: [
      {
        id: 'parabrahma',
        nameTe: 'పరబ్రహ్మ',
        nameEn: 'Parabrahma (Brahman)',
        roleTe: 'ఏకైక పరమాత్మ • సృష్టి మూలకారకుడు',
        roleEn: 'The One Supreme Reality • Ultimate Consciousness',
        descTe: 'సృష్టికి పూర్వము, సృష్టి సమయమున, సృష్టి లయమైన పిదప కూడా నిత్యముగా వెలుగొందే పరమ చైతన్యము. నిరాకార, నిర్గుణ, సర్వవ్యాపక పరతత్త్వము.',
        descEn: 'The unmanifest, formless, timeless, and boundless absolute consciousness. Source from which the entire cosmos springs forth, exists, and into which it dissolves.',
        vedicRef: 'నాసదీయ సూక్తం (ఋగ్వేదం 10.129), తైత్తిరీయ ఉపనిషత్తు (3.1.1), పురుష సూక్తం (ఋగ్వేదం 10.90)',
        vedicVerse: 'ఏకం సద్విప్రా బహుధా వదంతి — "సత్యము ఒక్కటే, విద్వాంసులు దానిని పలు పేర్లతో కొలుస్తారు." (ఋగ్వేదం 1.164.46)',
        symbolsTe: ['నిరాకార జ్యోతి', 'ప్రణవ నాదం (ఓం)', 'అనంత సచ్చిదానందం', 'హిరణ్యగర్భ తేజస్సు'],
        symbolsEn: ['Formless Light', 'Sacred Omkara', 'Sat-Chit-Ananda', 'Cosmic Golden Womb'],
        image: './images/divine/parabrahma.jpg',
        badgeTe: 'నిరాకార • అనంత • శాశ్వత',
        badge: 'Formless • Infinite • Eternal',
        category: 'supreme',
        infographicImage: './images/divine/brahman_infographic.jpg',
        detailedPoints: [
          {
            headingTe: 'బ్రహ్మన్ ≠ చతుర్ముఖ బ్రహ్మ',
            headingEn: 'Brahman ≠ Brahmā',
            bodyTe: 'చతుర్ముఖ బ్రహ్మ విశ్వసృష్టి కర్త, కమలంలో కాలబద్ధంగా జన్మించిన ప్రజాపతి. బ్రహ్మన్ అనాది, అనంతం, కాలాతీతం. సృష్టి, స్థితి, లయాలు ఏ పరతత్త్వంలో జరుగుతాయో అదే బ్రహ్మన్.',
            bodyEn: 'Brahmā is the cosmic creator deity within the universe, born from the cosmic lotus. Brahman is not a creator among many, but that eternal non-dual reality beyond time by which creation, sustenance, and dissolution are possible.'
          },
          {
            headingTe: 'నిర్గుణ మరియు సగుణ బ్రహ్మ',
            headingEn: 'Nirguṇa & Saguṇa Brahman',
            bodyTe: 'నిర్గుణ బ్రహ్మ: నామ-రూప-గుణ రహితం, శుద్ధ చైతన్య అస్తిత్వం. సగుణ బ్రహ్మ (ఈశ్వరుడు): భక్తి, ఉపాసన కొరకు నారాయణ, శివ, దేవి తదితర దివ్య రూపాలతో భాసించే మూర్తిమంత పరమాత్మ.',
            bodyEn: 'Nirguna Brahman is without attributes, beyond concepts, pure existence-consciousness. Saguna Brahman is conceived with divine attributes for meditation and devotion as Ishvara, Narayana, Shiva, Devi.'
          },
          {
            headingTe: 'సత్ - చిత్ - ఆనంద స్వరూపం',
            headingEn: 'Sat – Cit – Ānanda',
            bodyTe: 'సత్: త్రికాలాలలో నిలిచే శాశ్వత సత్యం. చిత్: స్వయంప్రకాశక శుద్ధ చైతన్య జ్ఞానం. ఆనందం: దేనిపైనా ఆధారపడని పరిపూర్ణ దివ్య ప్రశాంతత.',
            bodyEn: 'Sat: that which eternally is. Cit: pure self-luminous consciousness. Ananda: infinite unconditioned fullness, not dependent on any external object.'
          },
          {
            headingTe: 'సకల సృష్టికి మూల ఆధారం',
            headingEn: 'Brahman & Manifestation',
            bodyTe: 'సముద్రంలో తరంగాల వలె సమస్త లోకాలు బ్రహ్మము నందే పుట్టి, లయమవుతాయి. మట్టి మారినా పాత్రల రూపాలు మారినట్లు, రూపనామాలు మారుతున్నా పరబ్రహ్మ తత్త్వము అచంచలంగా ఉంటుంది.',
            bodyEn: 'The world is not outside Brahman; it appears like waves on the ocean. Names and forms arise and dissolve, yet the underlying reality remains unchanged, just as clay remains clay in all pots.'
          }
        ]
      },
      {
        id: 'atman',
        nameTe: 'ఆత్మన్ (నేను ఎవరు?)',
        nameEn: 'Ātman (Who Am I?)',
        roleTe: 'శుద్ధ సాక్షి చైతన్యం • అంతరాత్మ పరమార్థం',
        roleEn: 'The True Self • Pure Witness Consciousness',
        descTe: 'దేహము, మనస్సు, అహంకారములను దాటి ఉన్న అచంచల సాక్షి చైతన్యమే ఆత్మ. జనన మరణములు లేని, నిత్య సత్యమైన స్వస్వరూపము.',
        descEn: 'Beyond the physical body, fluctuating mind, and changing ego lies Ātman—the changeless, self-luminous witness consciousness that is never born and never dies.',
        vedicRef: 'మాండూక్య ఉపనిషత్తు (1.2), ఛాందోగ్య ఉపనిషత్తు (6.8.7), బృహదారణ్యక ఉపనిషత్తు',
        vedicVerse: 'అయమాత్మా బ్రహ్మ — "ఈ ఆత్మయే పరబ్రహ్మము" (మాండూక్య 1.2) • "తత్త్వమసి" (ఛాందోగ్య 6.8.7)',
        symbolsTe: ['సాక్షి చైతన్యం', 'స్వయం ప్రకాశ జ్యోతి', 'అహంకారాతీతం', 'మోక్ష ప్రాప్తి'],
        symbolsEn: ['Witness Consciousness', 'Self-Luminous Self', 'Beyond Ego', 'Liberation (Moksha)'],
        image: './images/divine/atman_avatar.jpg',
        badgeTe: 'నిత్య శుద్ధ • సాక్షి చైతన్యం',
        badge: 'Eternal Witness • Pure Consciousness',
        category: 'supreme',
        infographicImage: './images/divine/atman_infographic.jpg',
        detailedPoints: [
          {
            headingTe: 'మూల ప్రశ్న: నేను ఎవరు?',
            headingEn: 'The Core Question: Who Am I?',
            bodyTe: 'శరీరం, మనస్సు, భావోద్వేగాలు పుట్టుక నుండి మరణం వరకు మారుతూనే ఉంటాయి. వీటన్నింటి మార్పును గమనిస్తున్న "నేను" ఎవరు? ఆ మారని స్థిర చైతన్య సాక్ష్యమే ఆత్మ.',
            bodyEn: 'From birth to death, the body changes, the mind changes, emotions come and go. Yet there is a constant sense of "I" present through all of it. That changeless presence is Ātman.'
          },
          {
            headingTe: 'ఆత్మ vs దేహము & మనస్సు',
            headingEn: 'Ātman vs Body & Mind',
            bodyTe: '"నా శరీరం, నా మనస్సు" అంటున్నాం. అనగా మనం శరీరం కంటే భిన్నమైన ద్రష్టలం. శరీరం ఒక వాహనము మాత్రమే; మనస్సు ఆలోచనల ప్రవాహం. ఆత్మ మనస్సును చూసే జ్ఞానజ్యోతి.',
            bodyEn: 'You say "my body, my mind". That means you are the knower, not the known. The body is an instrument, a temporary vehicle. The mind is a stream of movement. Ātman is the seer, not the seen.'
          },
          {
            headingTe: 'సాక్షి చైతన్యం & అవస్థాత్రయ విచారణ',
            headingEn: 'Witness Consciousness (Sākṣin)',
            bodyTe: 'జాగ్రత్ (మెలకువ), స్వప్న (కల), సుషుప్తి (గాఢ నిద్ర) – ఈ మూడు స్థితులలోనూ నిరంతరం వెలిగేదే సాక్షి (సాక్షిన్). గాఢ నిద్రలో ఏ ఆలోచనా లేకున్నా "హాయిగా నిద్రించాను" అని తెలిపే చైతన్యమే ఆత్మ.',
            bodyEn: 'Ātman silently illumines waking, dream, and deep sleep. In deep sleep, thoughts and perceptions are absent, yet on waking you say "I slept well." What is continuous through all states is this witness.'
          },
          {
            headingTe: 'ఆత్మా-బ్రహ్మ ఐక్యము (మహావాక్యాలు)',
            headingEn: 'Ātman-Brahman: Not Two',
            bodyTe: 'దేహాభిమానం తొలగిపోయినప్పుడు ఆత్మయే పరబ్రహ్మ అని విదితమవుతుంది. "తత్త్వమసి" (నీవే అది), "అహం బ్రహ్మాస్మి" (నేనే బ్రహ్మను). ఆత్మను తెలుసుకోవడమే బ్రహ్మసాక్షాత్కారం.',
            bodyEn: 'The Upanishads declare: Ātman and Brahman are not two. When mistaken identity with body-mind falls away, what remains is the infinite: "Tat Tvam Asi" (Thou Art That) and "Aham Brahmāsmi" (I Am Brahman).'
          }
        ]
      },
      {
        id: 'maya',
        nameTe: 'మాయ (దివ్య శక్తి)',
        nameEn: 'Māyā (The Divine Potency)',
        roleTe: 'సృష్టి, స్థితి, లయ కారక జగన్మోహినీ శక్తి',
        roleEn: 'Cosmic Potency & Projective Power of the Divine',
        descTe: 'నిరాకార బ్రహ్మము నుండి అనంత విశ్వాలను సృజించి, ప్రాణుల కర్మలకై ప్రపంచాన్ని అభివ్యక్తీకరించే పరమేశ్వరుని అద్భుత సృష్టి శక్తి.',
        descEn: 'The mysterious creative power of the Divine that projects the cosmos, weaves cosmic order (Rta), and veils the ultimate non-dual Truth for the cosmic play of evolution.',
        vedicRef: 'శ్వేతాశ్వతర ఉపనిషత్తు (4.10), భగవద్గీత (7.14), దేవీ మాహాత్మ్యం',
        vedicVerse: 'దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా | మామేవ యే ప్రపద్యంతే మాయామేతాం తరంతి తే || (భగవద్గీత 7.14)',
        symbolsTe: ['యోగమాయ', 'ప్రకృతి శక్తి', 'త్రిగుణాత్మిక (సత్త్వ-రజస్-తమస్)', 'మోహ నివృత్తి'],
        symbolsEn: ['Yogamaya', 'Cosmic Prakriti', 'Three Gunas (Sattva-Rajas-Tamas)', 'Transcendence'],
        image: './images/divine/maya_avatar.jpg',
        badgeTe: 'జగన్నిర్మాణ • దివ్య శక్తి',
        badge: 'Cosmic Creative Power • Divine Potency',
        category: 'supreme',
        infographicImage: './images/divine/maya_infographic.jpg',
        detailedPoints: [
          {
            headingTe: 'మాయ అనగా ఏమిటి?',
            headingEn: 'What is Māyā?',
            bodyTe: 'మాయ కేవలం భ్రమ మాత్రమే కాదు; ఏకైక పరమాత్మ అనేక రూపాలుగా కనిపించేటట్లు చేసే ఈశ్వర శక్తి. ఇది వ్యవహారిక సత్యము. పరమార్థ సత్యమైన బ్రహ్మమునకు భిన్నమైనది కాదు.',
            bodyEn: 'Māyā is the mysterious divine power making the One appear as many. It is not an empty hallucination, but a dependent transactional reality (vyavaharika). It is the cosmic principle of projection, concealment, and manifestation.'
          },
          {
            headingTe: 'ఆవరణ & విక్షేప శక్తులు',
            headingEn: 'Avarana (Veiling) & Vikshepa (Projection)',
            bodyTe: 'అద్వైత వేదాంతంలో మాయకు రెండు శక్తులు: 1. ఆవరణ శక్తి (సత్యాన్ని కప్పిపుచ్చుట), 2. విక్షేప శక్తి (జగత్తును అనేక రూపాలుగా సృష్టించి విస్తరించుట).',
            bodyEn: 'Advaita Vedanta reveals two powers of Māyā: Avarana (veiling the true Self from awareness) and Vikshepa (projecting the manifold universe of names, forms, time, space, and causality).'
          },
          {
            headingTe: 'మాయను అధిగమించే 7 మార్గాలు',
            headingEn: '7 Ways to Go Beyond Māyā',
            bodyTe: '1. వివేకము (సత్య-అసత్య విచారణ), 2. వైరాగ్యము (అనాసక్తి), 3. ధర్మాచరణ, 4. భక్తి (ఈశ్వర శరణాగతి), 5. ధ్యానము, 6. ఆత్మవిచారము, 7. ఈశ్వర కృప.',
            bodyEn: '1. Viveka (discrimination), 2. Vairagya (detachment), 3. Dharma (ethical living), 4. Bhakti (devotion), 5. Dhyana (meditation), 6. Atma-vichara (self-inquiry), 7. Grace of the Divine.'
          },
          {
            headingTe: 'శాక్త సంప్రదాయంలో మహామాయ',
            headingEn: 'Māyā in the Shakta Tradition',
            bodyTe: 'శాక్తంలో మాయను జగన్మాత అయిన "మహామాయ"గా ఆరాధిస్తారు. సృష్టిని కల్పించేది, పరిపాలించేది, జీవులను బంధించేది మరియు మోక్షాన్ని ప్రసాదించేది ఆ పరాశక్తియే.',
            bodyEn: 'In the Shakta tradition, Māyā is worshipped as the Divine Mother Mahamaya. She is the living divine power that manifests, sustains, and withdraws the universe. She enthralls the soul, and She also liberates it.'
          }
        ]
      }
    ]
  },

  // Tier 2: The Trimurti
  {
    tierNumber: 2,
    titleTe: 'త్రిమూర్తులు (మూడు ప్రధాన శక్తులు)',
    titleEn: "THE 'TRIMURTI' (Three Primary Forms)",
    subtitleTe: 'సృష్టి, స్థితి, లయ కారక దివ్య త్రిత్వము',
    subtitleEn: 'The Cosmic Triad: Creation, Preservation, and Transformation',
    conceptTe: 'పరమ చైతన్యం నుండి విశ్వ సంరక్షణ, పరిపాలనకై ఈ మూడు మహా శక్తులు విలసిల్లాయి.',
    conceptEn: 'From the supreme consciousness, these three primordial forces emerged to orchestrate cosmic creation, preservation, and dissolution.',
    deities: [
      {
        id: 'brahma',
        nameTe: 'చతుర్ముఖ బ్రహ్మ',
        nameEn: 'Lord Brahma',
        roleTe: 'సృష్టికర్త (Creator)',
        roleEn: 'Cosmic Creator & Architect of Manifestation',
        descTe: 'శ్రీమహావిష్ణువు నాభీకమలమున ఉద్భవించి, పరమేశ్వరుని తపస్సుతో దర్శించి, నాలుగు వేదాలను ప్రకటించి సమస్త బ్రహ్మాండాన్ని సృష్టించిన ప్రజాపతి.',
        descEn: 'Manifested from the golden navel lotus of Lord Vishnu. Recipient and synthesizer of the four Vedas, who envisioned and crafted all universal realms.',
        vedicRef: 'ఋగ్వేదం 10.121 (హిరణ్యగర్భ సూక్తం) & పోతన భాగవతం తృతీయ స్కంధం',
        vedicVerse: 'హిరణ్యగర్భః సమవర్తతాగ్రే భూతస్య జాతః పతిరేక ఆసీత్ | (ఋగ్వేదం 10.121.1)',
        symbolsTe: ['చతుర్వేదాలు', 'అక్షమాల (జపమాల)', 'కమండలువు', 'హంస వాహనం'],
        symbolsEn: ['Four Vedas', 'Akshamala (Rosary)', 'Kamandalu', 'Hamsa (Swan)'],
        image: './images/divine/brahma.jpg',
        badgeTe: 'సృష్టికర్త • వేద ప్రదాత',
        badge: 'Creator • Lord of Vedas',
        category: 'trimurti'
      },
      {
        id: 'vishnu',
        nameTe: 'శ్రీమహావిష్ణువు',
        nameEn: 'Lord Vishnu (Narayana)',
        roleTe: 'స్థితికారుడు (Preserver)',
        roleEn: 'Cosmic Preserver & Sustainer of Dharma',
        descTe: 'క్షీరసాగర శయనంలో శేషతల్పముపై యోగనిద్రలో ఉంటూ, సమస్త సృష్టిని తన అమృత దృష్టితో పోషించి, అధర్మ నిర్మూలనకై యుగయుగాలలో అవతరించే సర్వేశ్వరుడు.',
        descEn: 'The all-pervading protector reclining on the serpent Shesha upon the Ocean of Milk. Sustains universal order and incarnates across ages to restore Dharma.',
        vedicRef: 'ఋగ్వేదం 1.154 (విష్ణు సూక్తం) & పురుష సూక్తం',
        vedicVerse: 'విష్ణోర్ను కం వీర్యాణి ప్రవోచం యః పార్థివాని విమమే రజాంసి | (ఋగ్వేదం 1.154.1)',
        symbolsTe: ['సుదర్శన చక్రం', 'పాంచజన్య శంఖం', 'కౌమోదకీ గద', 'పద్మము', 'గరుత్మంతుడు'],
        symbolsEn: ['Sudarshana Chakra', 'Panchajanya Conch', 'Kaumodaki Mace', 'Padma Lotus', 'Garuda'],
        image: './images/divine/vishnu.jpg',
        badgeTe: 'స్థితికారుడు • రక్షకుడు',
        badge: 'Preserver • Sustainer',
        category: 'trimurti'
      },
      {
        id: 'shiva',
        nameTe: 'పరమశివుడు (రుద్రుడు)',
        nameEn: 'Lord Shiva (Mahadeva / Rudra)',
        roleTe: 'లయకారకుడు / పరివర్తకుడు (Destroyer / Transformer)',
        roleEn: 'Cosmic Transformer, Lord of Yoga & Liberation',
        descTe: 'కైలాస పర్వతమున నిత్య ధ్యానమగ్నుడై, గంగాధరుడై, విషాన్ని గొంతున దాచి నీలకంఠుడై, జీవులకు అజ్ఞాన విముక్తిని, మోక్షాన్ని అనుగ్రహించే పరమేశ్వరుడు.',
        descEn: 'The supreme ascetic of Mount Kailash with the crescent moon and sacred Ganga in his locks. Transformer of the cosmos who dissolves ignorance and bestows liberation.',
        vedicRef: 'ఋగ్వేదం 7.59.12 (మహా మృత్యుంజయ సూక్తం), శ్రీ రుద్రం (యజుర్వేదం)',
        vedicVerse: 'ఓం త్ర్యంబకం యజామహే సుగంధిం పుష్టివర్ధనం | ఉర్వారుకమివ బంధనాన్మృత్యోర్ముక్షీయ మామృతాత్ ||',
        symbolsTe: ['త్రిశూలము', 'డమరుకము', 'చంద్రవంక', 'గంగా ప్రవాహము', 'నంది'],
        symbolsEn: ['Trident (Trishula)', 'Damaru', 'Crescent Moon', 'Sacred Ganga', 'Nandi Bull'],
        image: './images/divine/shiva.jpg',
        badgeTe: 'లయకారకుడు • మోక్ష ప్రదాత',
        badge: 'Transformer • Lord of Yoga',
        category: 'trimurti'
      }
    ]
  },

  // Tier 3: From Brahma - Mind-born Sons (Prajapatis)
  {
    tierNumber: 3,
    titleTe: 'బ్రహ్మ మానస పుత్రులు (సప్తర్షులు / ప్రజాపతులు)',
    titleEn: 'FROM BRAHMA (CREATOR) - Mind-born Sons (Prajapatis)',
    subtitleTe: 'సమస్త విశ్వ వంశాల మూల పురుషులైన దివ్య ఋషులు',
    subtitleEn: 'Progenitors of all beings, sages, divine lineages, and humans',
    conceptTe: 'వీరి నుండే సమస్త జీవకోటి, దేవతలు, దైత్యులు, పవిత్ర ఋషి పరంపర మరియు మానవ జాతి విస్తరించింది.',
    conceptEn: 'From their ascetic tapas and divine lineages emerged the devas, asuras, humans, and every living species in creation.',
    deities: [
      {
        id: 'marichi',
        nameTe: 'మరీచి మహర్షి',
        nameEn: 'Sage Marichi',
        roleTe: 'తేజోమూర్తి • కశ్యప ప్రజాపతి తండ్రి',
        roleEn: 'Ray of Light • Father of Kashyapa Prajapati',
        descTe: 'బ్రహ్మదేవుని కంటి కాంతి నుండి ఉద్భవించినవాడు. ఇతని కుమారుడే సమస్త దేవతలు, దైత్యులకు తండ్రి అయిన కశ్యప ప్రజాపతి.',
        descEn: 'Born from Brahma’s eyes. Father of Maharshi Kashyapa, making him the prime ancestor of Adityas, Daityas, and humanity.',
        symbolsTe: ['సూర్యతేజస్సు', 'జ్ఞానముద్ర'],
        symbolsEn: ['Solar Radiance', 'Jnana Mudra'],
        image: './images/divine/marichi.jpg',
        category: 'rishi'
      },
      {
        id: 'atri',
        nameTe: 'అత్రి మహర్షి',
        nameEn: 'Sage Atri',
        roleTe: 'మంత్రద్రష్ట • అనసూయాపతి',
        roleEn: 'Vedic Seer • Consort of Anasuya',
        descTe: 'బ్రహ్మదేవుని నేత్రాల నుండి జన్మించిన వేదద్రష్ట. త్రిమూర్తుల అంశలైన దత్తాత్రేయ, దుర్వాస, చంద్రులకు పూజ్య పితృపాదుడు. ఋగ్వేద ఐదవ మండల కర్త.',
        descEn: 'Born from Brahma’s eyes. Husband of Sati Anasuya. Father of Dattatreya, Durvasa, and Chandra. Author of Rigveda Mandala 5.',
        symbolsTe: ['వేద గ్రంథము', 'అక్షమాల'],
        symbolsEn: ['Vedic Scripture', 'Rosary'],
        image: './images/divine/atri.jpg',
        category: 'rishi'
      },
      {
        id: 'angiras',
        nameTe: 'అంగిరస మహర్షి',
        nameEn: 'Sage Angiras',
        roleTe: 'అగ్నిపుత్రుడు • బృహస్పతి పిత',
        roleEn: 'Fiery Seer • Father of Brihaspati',
        descTe: 'బ్రహ్మదేవుని ముఖము నుండి వెలువడిన తేజోమూర్తి. దేవగురువైన బృహస్పతికి జనకుడు. అధర్వణ వేద మూల ప్రవక్తలలో ప్రథముడు.',
        descEn: 'Born from Brahma’s mouth. Father of Brihaspati (Guru of Devas) and primary seer of Atharvaveda.',
        symbolsTe: ['యజ్ఞ అగ్ని', 'కమండలువు'],
        symbolsEn: ['Sacred Fire', 'Kamandalu'],
        image: './images/divine/angiras.jpg',
        category: 'rishi'
      },
      {
        id: 'pulastya',
        nameTe: 'పులస్త్య మహర్షి',
        nameEn: 'Sage Pulastya',
        roleTe: 'విశ్రవసుని తండ్రి • కుబేరుని తాత',
        roleEn: 'Father of Vishrava • Grandfather of Kubera',
        descTe: 'బ్రహ్మదేవుని కర్ణముల (చెవుల) నుండి జన్మించినవాడు. ఇతని సంతతియే విశ్రవసుడు, అతని ద్వారా కుబేరుడు మరియు పౌలస్త్య వంశం ఉద్భవించింది.',
        descEn: 'Born from Brahma’s ears. Progenitor of Sage Vishrava, Kubera (Lord of Wealth), and the Paulastya dynasty.',
        symbolsTe: ['ధ్యానదండము', 'రుద్రాక్ష'],
        symbolsEn: ['Dhyana Staff', 'Rudraksha'],
        image: './images/divine/pulastya.jpg',
        category: 'rishi'
      },
      {
        id: 'pulaha',
        nameTe: 'పులహ మహర్షి',
        nameEn: 'Sage Pulaha',
        roleTe: 'దివ్య ప్రాణుల సృష్టికర్త',
        roleEn: 'Father of Celestial & Sacred Beings',
        descTe: 'బ్రహ్మదేవుని నాభి నుండి ఆవిర్భవించిన మహాతేజస్వి. కిన్నరులు, కింపురుషులు, మృగములు మొదలైన పవిత్ర జీవజాతుల వంశకర్త.',
        descEn: 'Born from Brahma’s navel. Progenitor of celestial beings, kinnaras, and sacred creatures in the universe.',
        symbolsTe: ['కమండలువు', 'దర్భాసనం'],
        symbolsEn: ['Water Vessel', 'Kusha Grass'],
        image: './images/divine/pulaha.jpg',
        category: 'rishi'
      },
      {
        id: 'kratu',
        nameTe: 'క్రతు మహర్షి',
        nameEn: 'Sage Kratu',
        roleTe: 'వాలఖిల్యుల తండ్రి • యజ్ఞకర్త',
        roleEn: 'Father of 60,000 Valakhilya Sages',
        descTe: 'బ్రహ్మదేవుని బాహువుల నుండి జన్మించినవాడు. సూర్యరథాన్ని ఆరాధించే బొటనవేలంత పరిమాణం గల 60,000 మంది వాలఖిల్య మహర్షుల తండ్రి.',
        descEn: 'Born from Brahma’s hands. Father to 60,000 Valakhilya ascetics who accompany the chariot of Surya Bhagavan.',
        symbolsTe: ['యజ్ఞ స్రువము (గరిటె)', 'జపమాల'],
        symbolsEn: ['Sacrificial Ladle', 'Japamala'],
        image: './images/divine/kratu.jpg',
        category: 'rishi'
      },
      {
        id: 'vashishtha',
        nameTe: 'వశిష్ఠ మహర్షి',
        nameEn: 'Sage Vashishtha',
        roleTe: 'సూర్యవంశ కులగురువు • అరుంధతీపతి',
        roleEn: 'Solar Dynasty Guru • Husband of Arundhati',
        descTe: 'బ్రహ్మదేవుని ప్రాణము నుండి ఆవిర్భవించిన పరమ పవిత్ర ఋషి. సూర్యవంశ చక్రవర్తులకు కులగురువు. ఋగ్వేద ఏడవ మండల కర్త, కామధేను రక్షకుడు.',
        descEn: 'Born from Brahma’s vital breath. Royal preceptor to Lord Rama and Ikshvaku kings. Author of Rigveda Mandala 7.',
        symbolsTe: ['కామధేనువు', 'దండము', 'వేదగ్రంథం'],
        symbolsEn: ['Kamadhenu Cow', 'Holy Staff', 'Vedic Palm-leaf'],
        image: './images/divine/vashishtha.jpg',
        category: 'rishi'
      }
    ]
  },

  // Tier 4: From Vishnu - Major Incarnations (Dashavatar)
  {
    tierNumber: 4,
    titleTe: 'శ్రీమహావిష్ణువు ప్రధాన అవతారాలు (దశావతారములు)',
    titleEn: 'FROM VISHNU (PRESERVER) - Major Incarnations (Dashavatar)',
    subtitleTe: 'ధర్మ సంస్థాపనార్థం యుగయుగాలలో శ్రీహరి ధరించిన దివ్య రూపాలు',
    subtitleEn: 'Divine Avatars manifest in every cosmic cycle to restore balance and protect the virtuous',
    conceptTe: '"పరిత్రాణాయ సాధూనాం వినాశాయ చ దుష్కృతామ్ | ధర్మసంస్థాపనార్థాయ సంభవామి యుగే యుగే ||"',
    conceptEn: 'To protect the righteous, destroy wickedness, and establish Dharma firmly, the Supreme Lord descends age after age.',
    deities: [
      {
        id: 'matsya',
        nameTe: 'మత్స్య అవతారం',
        nameEn: 'Matsya Avatar',
        roleTe: 'ప్రథమ మీన రూపం • వేద రక్షకుడు',
        roleEn: 'Fish Incarnation • Savior of Vedas',
        descTe: 'ప్రళయ జలధి నుండి సత్యవ్రత మనువును, సప్తర్షులను, వేదములను రక్షించి హయగ్రీవాసురుని సంహరించిన దివ్య మత్స్య రూపం.',
        descEn: 'Rescued Manu, the Saptarshis, and sacred seeds in the cosmic ark, saving the Vedas from the deluge.',
        symbolsTe: ['వేద రక్షణ', 'నావ'],
        symbolsEn: ['Saved Vedas', 'Sacred Ark'],
        image: './images/divine/matsya.jpg',
        category: 'avatar'
      },
      {
        id: 'kurma',
        nameTe: 'కూర్మ అవతారం',
        nameEn: 'Kurma Avatar',
        roleTe: 'దివ్య కచ్ఛప రూపం • మందర పర్వత ధారి',
        roleEn: 'Tortoise Incarnation • Mandara Base',
        descTe: 'దేవాసురులు అమృతం కోసం క్షీరసాగరాన్ని మథిస్తున్నప్పుడు మునిగిపోతున్న మందర పర్వతాన్ని తన వీపున మోసిన మహోన్నత తాబేలు రూపం.',
        descEn: 'Supported Mount Mandara on His sturdy back during the churning of the Ocean of Milk (Samudra Manthan).',
        symbolsTe: ['క్షీరసాగర మథనం', 'అమృతం'],
        symbolsEn: ['Ocean Churning', 'Nectar of Immortality'],
        image: './images/divine/kurma.jpg',
        category: 'avatar'
      },
      {
        id: 'varaha',
        nameTe: 'వరాహ అవతారం',
        nameEn: 'Varaha Avatar',
        roleTe: 'భూదేవి ఉద్ధారకుడు • హిరణ్యాక్ష సంహారి',
        roleEn: 'Boar Incarnation • Earth Rescuer',
        descTe: 'రసాతలంలో దాచబడిన భూదేవిని తన కోరల కొనపై నిలిపి పైకి తెచ్చి, హిరణ్యాక్షుని వధించి లోకాలను రక్షించిన శ్వేతవరాహ మూర్తి.',
        descEn: 'Rescued Mother Earth (Bhudevi) from the cosmic depths and vanquished the demon Hiranyaksha.',
        symbolsTe: ['భూదేవి రక్షణ', 'తీవ్ర కోరలు'],
        symbolsEn: ['Earth on Tusk', 'Divine Tusks'],
        image: './images/divine/varaha.jpg',
        category: 'avatar'
      },
      {
        id: 'narasimha',
        nameTe: 'నరసింహ అవతారం',
        nameEn: 'Narasimha Avatar',
        roleTe: 'భక్త ప్రహ్లాద రక్షకుడు • హిరణ్యకశిపు సంహారి',
        roleEn: 'Half-Man Half-Lion • Demon Slayer',
        descTe: 'భక్తుని మాట నిలబెట్టడానికి స్తంభాన్ని చీల్చుకుని నర-సింహ రూపంలో ఉద్భవించి సంధ్యా సమయంలో హిరణ్యకశిపుని ఉదరాన్ని చీల్చిన ఉగ్ర నరహరి.',
        descEn: 'Emerged from the palace pillar to protect Bhakta Prahlada and slay Hiranyakashipu at twilight on the threshold.',
        symbolsTe: ['సింహ ముఖం', 'ఉగ్ర చక్రం', 'ప్రహ్లాద వరదం'],
        symbolsEn: ['Lion Head', 'Fiery Discus', 'Grace to Prahlada'],
        image: './images/divine/narasimha.jpg',
        category: 'avatar'
      },
      {
        id: 'vamana',
        nameTe: 'వామన అవతారం',
        nameEn: 'Vamana Avatar',
        roleTe: 'త్రివిక్రమ మూర్తి • బలిదర్పహరుడు',
        roleEn: 'Dwarf Brahmin to Trivikrama',
        descTe: 'చిన్ని బ్రహ్మచారిగా వచ్చి బలి చక్రవర్తిని మూడు అడుగుల నేల అడిగి, త్రివిక్రముడై భూమి, ఆకాశం కొలిచి మూడవ అడుగును బలి శిరస్సుపై ఉంచిన రూపం.',
        descEn: 'Asked King Bali for three paces of land, expanded to measure heaven and earth, bestowing grace upon Bali.',
        symbolsTe: ['ఛత్రం (గొడుగు)', 'కమండలువు', 'త్రివిక్రమ పాదం'],
        symbolsEn: ['Umbrella', 'Water Pot', 'Cosmic Stride'],
        image: './images/divine/vamana.jpg',
        category: 'avatar'
      },
      {
        id: 'parashurama',
        nameTe: 'పరశురామ అవతారం',
        nameEn: 'Parashurama Avatar',
        roleTe: 'భార్గవ రాముడు • గండ్రగొడ్డలిధారి',
        roleEn: 'Axe-Wielding Warrior Sage',
        descTe: 'జమదగ్ని-రేణుకల పుత్రుడు. అహంకారపూరిత దుష్ట క్షత్రియులను 21 సార్లు దండించి ధర్మాన్ని నిలిపిన చిరంజీవి అయిన తపస్వి.',
        descEn: 'Immortal warrior sage who rid the world of tyrannical rulers 21 times with his divine battle-axe.',
        symbolsTe: ['పరశువు (గొడ్డలి)', 'ధనుర్బాణాలు'],
        symbolsEn: ['Battle Axe (Parashu)', 'Bow & Arrows'],
        image: './images/divine/parashurama.jpg',
        category: 'avatar'
      },
      {
        id: 'rama',
        nameTe: 'శ్రీరామ అవతారం',
        nameEn: 'Lord Rama',
        roleTe: 'మర్యాదా పురుషోత్తముడు • కోదండపాణి',
        roleEn: 'Ideal King & Embodiment of Righteousness',
        descTe: 'దశరథ నందనుడు, సీతాపతి. ఏకపత్నీవ్రతుడు, సత్యవాక్పరిపాలకుడు, రావణ సంహారి. ఆదర్శ మానవునిగా ధర్మాన్ని ఆచరించి చూపిన భగవంతుడు.',
        descEn: 'The Seventh Avatar, embodiment of virtue, duty, and truth. Defeated Ravana and established Ramarajya.',
        symbolsTe: ['కోదండ ధనుస్సు', 'బాణం', 'కిరీటం'],
        symbolsEn: ['Kodanda Bow', 'Divine Arrows', 'Royal Crown'],
        image: './images/divine/rama.jpg',
        category: 'avatar'
      },
      {
        id: 'krishna',
        nameTe: 'శ్రీకృష్ణ అవతారం',
        nameEn: 'Lord Krishna',
        roleTe: 'గీతాచార్యుడు • సంపూర్ణావతారము',
        roleEn: 'Supreme Cosmic Teacher & Guide of Gita',
        descTe: 'వాసుదేవ-దేవకిల నందనుడు. గోపాలకృష్ణుడు, గీతోపదేశం గావించిన జగద్గురువు. అధర్మ నిర్మూలనకై మహాభారత రథసారథియైన పూర్ణావతారం.',
        descEn: 'The supreme teacher who revealed the Bhagavad Gita on Kurukshetra. The Purna Avatar of divine joy and wisdom.',
        symbolsTe: ['మురళీ (వేణువు)', 'నెమలి పించం', 'సుదర్శన చక్రం'],
        symbolsEn: ['Divine Flute', 'Peacock Feather', 'Sudarshana Discus'],
        image: './images/divine/krishna.jpg',
        category: 'avatar'
      },
      {
        id: 'buddha',
        nameTe: 'బుద్ధ అవతారం',
        nameEn: 'Gautama Buddha',
        roleTe: 'అహింసా ప్రవక్త • కరుణామూర్తి',
        roleEn: 'Enlightened Master of Compassion & Non-Violence',
        descTe: 'జీవహింసను నివారించి, సర్వ ప్రాణుల పట్ల దయ, కరుణ, అహింస, శాంతి మార్గాలను లోకానికి ప్రబోధించిన జ్ఞానావతారం.',
        descEn: 'Teacher of supreme compassion and non-violence (Ahimsa), guiding souls toward inner tranquility and truth.',
        symbolsTe: ['ధ్యాన ముద్ర', 'కమలాసనం', 'ధర్మచక్రం'],
        symbolsEn: ['Dhyana Mudra', 'Lotus Seat', 'Dharmachakra'],
        image: './images/divine/buddha.jpg',
        category: 'avatar'
      },
      {
        id: 'kalki',
        nameTe: 'కల్కి అవతారం',
        nameEn: 'Kalki Avatar',
        roleTe: 'భవిష్యత్ అవతారం • సత్యయుగ స్థాపకుడు',
        roleEn: 'Future Avatar & Inaugurator of Satya Yuga',
        descTe: 'కలియుగాంతంలో శంభల గ్రామంలో విష్ణుయశస్సుని ఇంట అవతరించి, తెల్లని అశ్వంపై మెరుపులాంటి ఖడ్గముతో అధర్మాన్ని నశింపజేసే అవతారం.',
        descEn: 'The prophetic tenth avatar who will arrive on the divine white horse Devadatta to restore the Golden Age.',
        symbolsTe: ['శ్వేతాశ్వం (తెల్లని గుర్రం)', 'తేజో ఖడ్గం'],
        symbolsEn: ['White Stallion', 'Blazing Sword'],
        image: './images/divine/kalki.jpg',
        category: 'avatar'
      }
    ]
  },

  // Tier 5: From Shiva - Divine Offsprings & Parivaram
  {
    tierNumber: 5,
    titleTe: 'పరమశివుని నుండి (శివ పరివారం & దివ్య సంతతి)',
    titleEn: 'FROM SHIVA (DESTROYER) - Divine Offsprings & Parivaram',
    subtitleTe: 'కైలాస నిలయుడైన మహాదేవుని దివ్య సంతతి మరియు పరివార గణాలు',
    subtitleEn: 'The divine household of Shiva: sons, consorts, eternal mount, and guardians',
    conceptTe: 'లయకారకుడైన పరమశివుడు జ్ఞాన, శక్తి, ఆనంద స్వరూపమైన తన పరివారంతో విశ్వ సమతౌల్యాన్ని రక్షిస్తాడు.',
    conceptEn: 'Lord Shiva, together with His divine family and attendants, embodies cosmic power, wisdom, and auspicious harmony.',
    deities: [
      {
        id: 'ganesha',
        nameTe: 'శ్రీ గణేశుడు (వినాయకుడు)',
        nameEn: 'Lord Ganesha (Vinayaka)',
        roleTe: 'ప్రథమ పూజ్యుడు • విఘ్నహర్త',
        roleEn: 'Lord of Beginnings & Remover of Obstacles',
        descTe: 'పార్వతీదేవి తన శరీర లేపనముతో సృష్టించిన ప్రాణపుత్రుడు. గజాననుడై, సర్వ విఘ్నాలను తొలగించి జ్ఞానాన్ని, బుద్ధిని ప్రసాదించే ప్రథమ ఆరాధ్య దైవం.',
        descEn: 'First-worshipped son of Parvati and Shiva. Elephant-headed lord who dispels obstacles and bestows intellect and fortune.',
        symbolsTe: ['ఏకదంతం', 'మోదకం', 'పాశ-అంకుశాలు', 'మూషిక వాహనం'],
        symbolsEn: ['Single Tusk', 'Modaka Sweet', 'Pasha & Ankusha', 'Mouse Vahana'],
        image: './images/divine/ganesha.jpg',
        category: 'shiva_family'
      },
      {
        id: 'kartikeya',
        nameTe: 'కార్తికేయుడు (సుబ్రహ్మణ్యుడు)',
        nameEn: 'Lord Kartikeya (Murugan / Skanda)',
        roleTe: 'దేవ సేనాధిపతి • జ్ఞానశక్తి ధరుడు',
        roleEn: 'Commander of Divine Armies & Master of Wisdom',
        descTe: 'శివుని మూడవ కంటి అగ్ని తేజస్సు నుండి జన్మించి, శరవణ సరస్సున ఆరుగురు కృత్తికలచే పెంచబడిన కుమారస్వామి. తారకాసుర సంహారి.',
        descEn: 'Born of Shiva’s blazing third eye in the Saravana reeds. Slew Tarakasura and commands the celestial hosts.',
        symbolsTe: ['శక్తి ఆయుధం (వేల్)', 'మయూర వాహనం (నెమలి)', 'కుక్కుట ధ్వజం'],
        symbolsEn: ['Vel (Sacred Spear)', 'Peacock Mount', 'Rooster Banner'],
        image: './images/divine/kartikeya.jpg',
        category: 'shiva_family'
      },
      {
        id: 'andhakasura',
        nameTe: 'అంధకాసురుడు (భృంగిగా మారినవాడు)',
        nameEn: 'Andhakasura (Later Bhakta / Bhringi)',
        roleTe: 'శివుని అంశ సంభూతుడు • పరివర్తిత భక్తుడు',
        roleEn: 'Born of Shiva • Redeemed Devotee',
        descTe: 'పార్వతీదేవి శివుని కన్నులు మూసినప్పుడు ఉద్భవించిన చెమట బిందువు నుండి పుట్టినవాడు. అహంకారంతో పోరాడి, పిమ్మట శివుని మహిమ తెలుసుకుని పరమ భక్తుడైనవాడు.',
        descEn: 'Born from Shiva’s divine perspiration. Transformed from delusion into one of Shiva’s most ardent and ascetic devotees.',
        symbolsTe: ['శివ భక్తి', 'ప్రాయశ్చిత్త తపస్సు'],
        symbolsEn: ['Total Devotion', 'Ascetic Penance'],
        image: './images/divine/andhakasura.jpg',
        category: 'shiva_family'
      },
      {
        id: 'nandi',
        nameTe: 'నందీశ్వరుడు',
        nameEn: 'Nandi (The Sacred Bull)',
        roleTe: 'శివ వాహనం • ప్రథమ గణపతి',
        roleEn: 'Shiva’s Divine Mount & Gatekeeper of Kailash',
        descTe: 'శిలాద మహర్షికి శివానుగ్రహంతో పుట్టిన పుత్రుడు. పరమశివునికి నిత్య వాహనమై, కైలాస సింహద్వార రక్షకుడై, సకల ప్రమథ గణాలకు నాయకుడైనవాడు.',
        descEn: 'Incarnation of unshakeable patience, dharma, and devotion. Eternal vehicle and chief attendant of Lord Shiva.',
        symbolsTe: ['దివ్య వృషభం', 'గంటల హారము', 'శివాభిముఖ దర్శనం'],
        symbolsEn: ['Sacred Bull', 'Bells Garland', 'Gaze towards Linga'],
        image: './images/divine/nandi.jpg',
        category: 'shiva_family'
      },
      {
        id: 'bhuta_ganas',
        nameTe: 'భూత గణాలు (ప్రమథ గణాలు)',
        nameEn: 'Bhuta-Ganas (Shiva’s Retinue)',
        roleTe: 'శివ సైన్యం • కైలాస రక్షకులు',
        roleEn: 'Guardians of Kailash & Divine Attendants',
        descTe: 'శివుని ఆనంద తాండవంలో పాల్గొనే దివ్య పరిచారకులు. ప్రకృతి మూల శక్తులను, పంచభూతాలను శాసించే శివాజ్ఞాపాలకులు.',
        descEn: 'The celestial attendants of Rudra who uphold cosmic discipline and dance in ecstasy during Shiva’s Tandava.',
        symbolsTe: ['డమరుక నాదం', 'రుద్ర శక్తులు'],
        symbolsEn: ['Damaru Beats', 'Mystic Powers'],
        image: './images/divine/bhuta_ganas.jpg',
        category: 'shiva_family'
      },
      {
        id: 'sati',
        nameTe: 'సతీదేవి (దాక్షాయణి)',
        nameEn: 'Goddess Sati',
        roleTe: 'శివుని ప్రథమ అర్ధాంగి • దక్ష పుత్రిక',
        roleEn: 'Shiva’s First Consort • Daughter of Daksha',
        descTe: 'దక్ష ప్రజాపతికి పుత్రికగా జన్మించి, కఠిన తపస్సుతో శివుని పతిగా పొందింది. తండ్రి చేసిన శివనిందను సహించలేక యజ్ఞగుండంలో అగ్నికి శరీరం అర్పించిన పరమ పతివ్రత.',
        descEn: 'First divine consort of Lord Shiva. Sacrificed Her body in Daksha’s yajna to defend Shiva’s honor, manifesting the 18 Shakti Peethas.',
        symbolsTe: ['యజ్ఞ అగ్ని', 'దివ్య పాతివ్రత్యం'],
        symbolsEn: ['Sacrificial Flame', 'Eternal Purity'],
        image: './images/divine/sati.jpg',
        category: 'shiva_family'
      },
      {
        id: 'parvati_shiva',
        nameTe: 'పార్వతీదేవి (గిరిజ)',
        nameEn: 'Goddess Parvati (Gauri / Uma)',
        roleTe: 'శివుని నిత్య సహచరిణి • జగన్మాత',
        roleEn: 'Divine Consort, Shakti & Mother of the Universe',
        descTe: 'హిమవంతుని కుమార్తెగా పునర్జన్మ ఎత్తి, పంచాగ్ని తపస్సుతో పరమశివుని మనస్సును గెలుచుకుని అర్ధనారీశ్వరిగా నిలిచిన ఆదిపరాశక్తి స్వరూపం.',
        descEn: 'Daughter of the Himalayas, who won Shiva’s heart through supreme austerity. Forms the Ardhanarishvara union of Shakti and Shiva.',
        symbolsTe: ['కమలం', 'అభయ హస్తం', 'త్రిశూలం', 'సింహ వాహనం'],
        symbolsEn: ['Lotus', 'Abhaya Mudra', 'Trident', 'Lion Mount'],
        image: './images/divine/parvati.jpg',
        category: 'shiva_family'
      }
    ]
  },

  // Tier 6: From Shakti - Goddess Forms (Mahavidyas & Devis)
  {
    tierNumber: 6,
    titleTe: 'ఆదిపరాశక్తి నుండి (దేవీ స్వరూపాలు - మహావిద్యలు & దేవతలు)',
    titleEn: 'FROM SHAKTI (THE DIVINE FEMININE) - Goddess Forms',
    subtitleTe: 'సకల సృష్టికి మూలమైన పరాశక్తి విస్తార స్వరూపాలు',
    subtitleEn: 'Goddess manifestations embodying supreme power, wealth, knowledge, and compassion',
    conceptTe: 'సకల సృష్టి, స్థితి, లయల వెనుక కార్యకలాపాలను నడిపించే మూల శక్తియే ఆదిపరాశక్తి. "శక్తిః సమస్త జగతాం పాలికా".',
    conceptEn: 'Shakti is the dynamic energy underlying all manifestation, cosmic balance, grace, and divine consciousness.',
    deities: [
      {
        id: 'durga',
        nameTe: 'శ్రీ దుర్గాదేవి',
        nameEn: 'Goddess Durga',
        roleTe: 'దుష్టసంహారిణి • మహిషాసుర మర్దిని',
        roleEn: 'Supreme Warrior Goddess & Destroyer of Evil',
        descTe: 'సమస్త దేవతల తేజస్సుల నుండి ఉద్భవించిన అజేయ శక్తి. సింహవాహినియై, అష్టాదశ ఆయుధాలతో దుర్గతిని నాశనం చేసి లోకాలను రక్షించే జగన్మాత.',
        descEn: 'Invincible goddess assembled from the combined effulgence of all deities. Rides the lion to vanquish Mahishasura and all inner demons.',
        symbolsTe: ['సింహ వాహనం', 'త్రిశూలం', 'చక్రం', 'ఖడ్గం'],
        symbolsEn: ['Lion Mount', 'Trishula', 'Discus', 'Sword'],
        image: './images/divine/durga.jpg',
        category: 'devi'
      },
      {
        id: 'lakshmi',
        nameTe: 'శ్రీ మహాలక్ష్మి',
        nameEn: 'Goddess Lakshmi',
        roleTe: 'సౌభాగ్య ప్రదాయిని • విష్ణుపత్ని',
        roleEn: 'Goddess of Wealth, Grace & Prosperity',
        descTe: 'క్షీరసాగర మథనంలో ఆవిర్భవించిన ఐశ్వర్య దేవత. కమలాసనురాలై, భక్తులకు అష్టైశ్వర్యాలు, ధర్మబద్ధమైన సంపద, శాంతి ప్రసాదించే శ్రీదేవి.',
        descEn: 'Emerged from the churning of the milky ocean as the embodiment of beauty, auspiciousness, and spiritual-material prosperity.',
        symbolsTe: ['కమల పుష్పాలు', 'స్వర్ణ వర్షం', 'గజరాజులు'],
        symbolsEn: ['Pink Lotuses', 'Shower of Gold', 'Royal Elephants'],
        image: './images/divine/lakshmi.jpg',
        category: 'devi'
      },
      {
        id: 'saraswati',
        nameTe: 'శ్రీ సరస్వతీదేవి',
        nameEn: 'Goddess Saraswati',
        roleTe: 'విద్యా-వాగ్దేవి • బ్రహ్మపత్ని',
        roleEn: 'Goddess of Wisdom, Music, Arts & Vedas',
        descTe: 'శ్వేతాంబరధారిణి, వీణాపాణి. నాలుగు చేతులలో వీణ, వేద గ్రంథము, అక్షమాలను ధరించి సమస్త విజ్ఞానాన్ని, జ్ఞానాన్ని అనుగ్రహించే వేదమాత.',
        descEn: 'Goddess of speech, arts, and transcendental learning. Holds the Veena and palm-leaf scriptures, riding the pure white swan.',
        symbolsTe: ['వీణ', 'వేదగ్రంథము', 'శ్వేత హంస', 'స్పటిక మాల'],
        symbolsEn: ['Veena (Lute)', 'Sacred Manuscript', 'White Swan', 'Crystal Rosary'],
        image: './images/divine/saraswati.jpg',
        category: 'devi'
      },
      {
        id: 'kali',
        nameTe: 'శ్రీ మహాకాళి',
        nameEn: 'Goddess Kali',
        roleTe: 'కాల స్వరూపిణి • దుష్టభయంకరి',
        roleEn: 'Goddess of Time, Change, and Liberation',
        descTe: 'అధర్మాన్ని, అహంకారాన్ని సమూలంగా నాశనం చేసే ఉగ్రరూపిణి. కపాల మాలికాధారిణియై, భక్తులను భయాల నుండి కాపాడి ఆత్మజ్ఞానాన్ని ప్రసాదిస్తుంది.',
        descEn: 'Fierce aspect of the divine mother who destroys time and illusion. Bestows instant liberation upon sincere devotees.',
        symbolsTe: ['ఖడ్గం', 'కపాలమాల', 'అభయ ముద్ర'],
        symbolsEn: ['Divine Scythe', 'Garland of Skulls', 'Abhaya Mudra'],
        image: './images/divine/kali.jpg',
        category: 'devi'
      },
      {
        id: 'parvati_devi',
        nameTe: 'శ్రీ పార్వతీదేవి (అన్నపూర్ణ)',
        nameEn: 'Goddess Parvati (Annapurna)',
        roleTe: 'అమృతభోజన ప్రదాయిని • సృష్టి పోషకి',
        roleEn: 'Provider of Sustenance, Nutrition & Bliss',
        descTe: 'కాశీక్షేత్రాధీశ్వరియై, పరమశివునికే భిక్షను అనుగ్రహించిన అన్నపూర్ణా దేవి. సమస్త జీవుల క్షుద్బాధలను నివారించి మోక్షాన్ని చేకూర్చే మాత.',
        descEn: 'Bestower of spiritual and physical nourishment who served food to Lord Shiva Himself in Varanasi.',
        symbolsTe: ['బంగారు గరిటె', 'అన్నపాత్ర'],
        symbolsEn: ['Golden Ladle', 'Vessel of Nectar Grain'],
        image: './images/divine/annapurna.jpg',
        category: 'devi'
      },
      {
        id: 'radha',
        nameTe: 'శ్రీ రాధారాణి',
        nameEn: 'Sri Radharani',
        roleTe: 'హ్లాదినీ శక్తి • పరమ భక్తి స్వరూపిణి',
        roleEn: 'Divine Joy & Ultimate Devotional Surrender',
        descTe: 'శ్రీకృష్ణుని ఆనందకారక అంతరంగిక శక్తి (హ్లాదినీ శక్తి). బృందావన రాణి, దివ్య ప్రేమకు పరాకాష్ఠయైన నిష్కామ భక్తి మూర్తి.',
        descEn: 'The supreme pleasure potency (Hladini Shakti) of Krishna. Embodies the pinnacle of pure, unconditional devotional love.',
        symbolsTe: ['నీలోత్పలం', 'శ్యామసుందర హారము'],
        symbolsEn: ['Blue Lotus', 'Garland of Krishna'],
        image: './images/divine/radha.jpg',
        category: 'devi'
      },
      {
        id: 'sita',
        nameTe: 'శ్రీ సీతాదేవి',
        nameEn: 'Goddess Sita',
        roleTe: 'భూమిపుత్రి • పాతివ్రత్య శిఖామణి',
        roleEn: 'Daughter of Mother Earth & Queen of Ayodhya',
        descTe: 'జనక మహారాజు యజ్ఞభూమిలో హలం దున్నుతుండగా లభించిన అయోనిజ. శ్రీరాముని ధర్మపత్ని. త్యాగము, ఓర్పు, పవిత్రతలకు సజీవ ప్రతిరూపం.',
        descEn: 'Emerged from the furrow of the golden plough. Embodiment of patience, loyalty, courage, and unconditional virtue.',
        symbolsTe: ['పద్మము', 'భూదేవి తేజస్సు'],
        symbolsEn: ['Lotus', 'Radiance of Mother Earth'],
        image: './images/divine/sita.jpg',
        category: 'devi'
      },
      {
        id: 'rukmini',
        nameTe: 'శ్రీ రుక్మిణీదేవి',
        nameEn: 'Goddess Rukmini',
        roleTe: 'శ్రీకృష్ణ పట్టమహిషి • ద్వారకాధీశ్వరి',
        roleEn: 'Principal Queen of Krishna & Lakshmi Incarnate',
        descTe: 'విదర్భ రాజకుమారి. శ్రీకృష్ణుని గుణగణాలను విని మనసులోనే వరించి ప్రేమలేఖ రాసి పంపిన మహాసాధ్వి. సాక్షాత్ శ్రీమహాలక్ష్మి అవతారం.',
        descEn: 'First and chief queen of Krishna in Dwaraka. Sent the famous seven-sloka devotional letter choosing Krishna as Her eternal Lord.',
        symbolsTe: ['తులసీమాల', 'రత్న కిరీటం'],
        symbolsEn: ['Tulasi Garland', 'Jeweled Crown'],
        image: './images/divine/rukmini.jpg',
        category: 'devi'
      }
    ]
  },

  // Tier 7: Primordial Vedic Gods (వేదాలలో మూల దేవతలు)
  {
    tierNumber: 7,
    titleTe: 'మూల వైదిక దేవతలు (ఋగ్వేద ప్రధాన దేవతా స్వరూపాలు)',
    titleEn: 'PRIMORDIAL VEDIC GODS (The Rigvedic Pantheon)',
    subtitleTe: 'ఋగ్వేద సూక్తాలలో ప్రతిష్ఠించబడిన ఆదిమ వైదిక దేవతలు',
    subtitleEn: 'The foundational deities praised in the ancient Vedic hymns',
    conceptTe: 'ఋగ్వేదంలో ప్రకృతి శక్తులు, యజ్ఞ నిర్వహణ, మరియు విశ్వ న్యాయం (ఋతం) ఆధారంగా పరమాత్మ ఈ దివ్య రూపాలలో దర్శనమిచ్చాడు.',
    conceptEn: 'In the Vedas, the divine manifests as cosmic cosmic forces: Fire, Storm, Cosmic Order, Light, and Sacred Nectar.',
    deities: [
      {
        id: 'agni',
        nameTe: 'అగ్నిదేవుడు (Agni)',
        nameEn: 'Lord Agni (God of Sacred Fire)',
        roleTe: 'యజ్ఞ పురోహితుడు • దేవదూత',
        roleEn: 'Sacred Fire & Divine Messenger',
        descTe: 'ఋగ్వేదపు ప్రప్రథమ మంత్రంలో స్తుతించబడిన దేవత. భూలోక యజ్ఞాలను స్వర్గంలోని దేవతలకు చేర్చే పరమ పవిత్ర దైవ దూత.',
        descEn: 'The first word of the Rigveda invokes Agni: "Agnim ile purohitam". Priest of sacrifice and carrier of oblations to heaven.',
        vedicRef: 'ఋగ్వేదం 1.1.1 (అగ్ని సూక్తం)',
        vedicVerse: 'అగ్నిమీళే పురోహితం యజ్ఞస్య దేవమృత్విజమ్ | హోతారం రత్నధాతమమ్ ||',
        symbolsTe: ['జ్వాలా కేశాలు', 'మేష (గొర్రె) వాహనం', 'యజ్ఞ స్రువము'],
        symbolsEn: ['Flaming Hair', 'Ram Mount', 'Sacrificial Ladle'],
        image: './images/divine/agni.jpg',
        category: 'vedic_god'
      },
      {
        id: 'indra',
        nameTe: 'దేవేంద్రుడు (Indra)',
        nameEn: 'Lord Indra (King of Devas)',
        roleTe: 'స్వర్గాధిపతి • వృత్రాసుర సంహారి',
        roleEn: 'King of Heavens, Thunder & Rain',
        descTe: 'ఋగ్వేదంలో అత్యధిక సూక్తాలు (సుమారు నాలుగో వంతు) ఇంద్రునికే అంకితం. వజ్రాయుధంతో మేఘాలను నిరోధించిన వృత్రుని వధించి జలాలను విడిపించిన వీరుడు.',
        descEn: 'Supreme warrior deity of the Rigveda. Wielder of the Vajra thunderbolt who slayed the drought-dragon Vritra to release cosmic waters.',
        vedicRef: 'ఋగ్వేదం 2.12 (ఇంద్ర సూక్తం)',
        vedicVerse: 'యో జాత ఏవ ప్రథమో మనస్వాన్ దేవో దేవాన్ క్రతునా పర్యభూషత్ | (ఋగ్వేదం 2.12.1)',
        symbolsTe: ['వజ్రాయుధం', 'ఐరావతం (శ్వేత గజం)', 'సోమరసం'],
        symbolsEn: ['Vajra Thunderbolt', 'Airavata White Elephant', 'Soma Cup'],
        image: './images/divine/indra.jpg',
        category: 'vedic_god'
      },
      {
        id: 'varuna',
        nameTe: 'వరుణదేవుడు (Varuna)',
        nameEn: 'Lord Varuna (Guardian of Cosmic Order)',
        roleTe: 'ఋతం (విశ్వ నియమ) రక్షకుడు • జలాధిపతి',
        roleEn: 'Guardian of Rita (Moral Order) & Waters',
        descTe: 'విశ్వ నైతిక నియమమైన "ఋతం"ను పాలించే సర్వదర్శి. సహస్ర నేత్రాలతో సర్వ ప్రాణుల కర్మలను గమనిస్తూ పాపపాశాల నుండి విముక్తినిచ్చే దేవత.',
        descEn: 'Supreme upholder of Rita (truth, cosmic and moral law). Oversees the cosmos, bonds injustice, and purifies hearts.',
        vedicRef: 'ఋగ్వేదం 7.86 (వరుణ సూక్తం)',
        vedicVerse: 'ధీరా త్వస్య మహినా జనూంషి వి యస్తస్తంభ రోదసీ చిదుర్వీ | (ఋగ్వేదం 7.86.1)',
        symbolsTe: ['పాశము (తాడు)', 'మకర వాహనం', 'జల పాత్ర'],
        symbolsEn: ['Pasha (Cosmic Noose)', 'Makara Mount', 'Water Urn'],
        image: './images/divine/varuna.jpg',
        category: 'vedic_god'
      },
      {
        id: 'surya',
        nameTe: 'సూర్యభగవానుడు / సవితృ (Surya / Savitr)',
        nameEn: 'Lord Surya / Savitr (Solar Deity)',
        roleTe: 'జగచ్చక్షువు • గాయత్రీ అధిదేవత',
        roleEn: 'Soul of the Universe & Light of Consciousness',
        descTe: 'చరాచర జగత్తుకు ప్రాణప్రదాత. ఏడు గుర్రాల రథంపై విశ్వాన్ని వెలిగించే సూర్యుడు. గాయత్రీ మంత్రం ద్వారా సవితృ రూపంలో బుద్ధిని ప్రేరేపించే దైవం.',
        descEn: 'The radiant eye of Mitra and Varuna, soul of all that moves and stands. Savitr who inspires intellect via Gayatri Mantra.',
        vedicRef: 'ఋగ్వేదం 1.115 (సూర్య సూక్తం) & 3.62.10 (గాయత్రీ మంత్రం)',
        vedicVerse: 'సూర్య ఆత్మా జగతస్తస్థుషశ్చ | తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియో యో నః ప్రచోదయాత్ ||',
        symbolsTe: ['సప్త అశ్వాల రథం', 'పద్మములు', 'సువర్ణ కిరణాలు'],
        symbolsEn: ['Seven-Horse Chariot', 'Lotuses', 'Golden Rays'],
        image: './images/divine/surya.jpg',
        category: 'vedic_god'
      },
      {
        id: 'soma',
        nameTe: 'సోమదేవుడు (Soma)',
        nameEn: 'Lord Soma (Divine Nectar & Moon)',
        roleTe: 'ఓషధీపతి • అమృత స్వరూపుడు',
        roleEn: 'Lord of Sacred Elixir, Healing & Moon',
        descTe: 'ఋగ్వేద తొమ్మిదవ మండలం (పవమాన మండలం) మొత్తం సోమునికే అంకితం. దివ్య అమృతాన్ని, ఆనందాన్ని, కవితా ప్రేరణను ఇచ్చే వైద్యులలో అగ్రగణ్యుడు.',
        descEn: 'An entire book of Rigveda (Mandala 9) praises Soma, the sacred elixir of vitality, divine vision, and spiritual ecstasy.',
        vedicRef: 'ఋగ్వేదం 9.1 (పవమాన సూక్తం)',
        vedicVerse: 'స్వాదిష్ఠయా మదిష్ఠయా పవస్వ సోమ ధారయా | ఇంద్రాయ పాతవే సుతః ||',
        symbolsTe: ['అమృత కలశం', 'చంద్ర కిరణాలు', 'మృగ వాహనం'],
        symbolsEn: ['Amrita Vessel', 'Lunar Rays', 'Antelope Mount'],
        image: './images/divine/soma.jpg',
        category: 'vedic_god'
      },
      {
        id: 'rudra_vedic',
        nameTe: 'రుద్రదేవుడు (Vedic Rudra)',
        nameEn: 'Vedic Rudra (Lord of Storm & Healing)',
        roleTe: 'భీషజం భిషక్తమం • మరుత్తుల పిత',
        roleEn: 'Divine Physician & Celestial Archer',
        descTe: 'ఋగ్వేదంలో రుద్రుడు భయంకరుడైనప్పటికీ "భిషక్తముడు" (వైద్యులలో అగ్రగణ్యుడు). విషజ్వరాలను, వ్యాధులను తన దివ్య ఔషధాలతో నివారించే శివపూర్వ రూపం.',
        descEn: 'The Vedic roaring archer deity who is also called the greatest of healers (Bhisaktama), keeping thousands of healing balms.',
        vedicRef: 'ఋగ్వేదం 2.33 (రుద్ర సూక్తం)',
        vedicVerse: 'గాథపతిం మేధపతిం రుద్రం జలాషభేషజమ్ | తచ్ఛంయోః సుమ్నమీమహే ||',
        symbolsTe: ['ధనుర్బాణాలు', 'దివ్య మూలికలు', 'పింగళ వర్ణం'],
        symbolsEn: ['Bow & Arrows', 'Healing Herbs', 'Golden-Tawny Hue'],
        image: './images/divine/rudra.jpg',
        category: 'vedic_god'
      }
    ]
  }
];
