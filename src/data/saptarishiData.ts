export interface SaptarishiCouple {
  id: string;
  order: number;
  rishiNameTe: string;
  rishiNameEn: string;
  rishiTitleTe: string;
  rishiTitleEn: string;
  wivesTe: string;
  wivesEn: string;
  imageSrc: string; // Source 2 couple portrait
  s1ImageSrc?: string; // Source 1 individual portrait
  vedicRoleTe: string;
  vedicRoleEn: string;
  keyContributionsTe: string[];
  keyContributionsEn: string[];
  lineageAndProgenyTe: string;
  lineageAndProgenyEn: string;
  scientificAndSpiritualEssenceTe: string;
  scientificAndSpiritualEssenceEn: string;
  quoteTe?: string;
  quoteEn?: string;
}

export interface ManasaPutraRishi {
  id: string;
  order: number;
  nameTe: string;
  nameEn: string;
  brahmaOriginTe: string;
  brahmaOriginEn: string;
  imageSrc: string; // Source 1
  roleTe: string;
  roleEn: string;
  keyLegendsTe: string[];
  keyLegendsEn: string[];
  gotraTe: string;
  gotraEn: string;
}

// 1. Current (7th Vaivasvata Manvantara) Saptarishis & Wives (Sources 2 & 3)
export const VAIVASVATA_SAPTARISHIS_DATA: SaptarishiCouple[] = [
  {
    id: 'kashyapa',
    order: 1,
    rishiNameTe: 'కశ్యప మహర్షి',
    rishiNameEn: 'Maharshi Kashyapa',
    rishiTitleTe: 'సకల ప్రాణి సృష్టికారకుడు • ఋగ్వేద మంత్ర ద్రష్ట',
    rishiTitleEn: 'Universal Progenitor • Rigvedic Seer',
    wivesTe: 'దితి మరియు అదితి (మరియు దక్ష ప్రజాపతి 13 మంది కన్యలు: దను, కాలక, కద్రువ, వినత మున్నగువారు)',
    wivesEn: 'Diti and Aditi (along with Daksha’s daughters: Danu, Kalaka, Kadru, Vinata, etc.)',
    imageSrc: './images/saptarishis/c1_kashyapa.png',
    s1ImageSrc: './images/saptarishis/s1_marichi.png', // Son of Marichi
    vedicRoleTe: 'సమస్త విశ్వంలో దేవ, దానవ, మానవ, పక్షి, సర్ప సృష్టికి మూలకారకుడు; ఋగ్వేద సూక్త రచయిత.',
    vedicRoleEn: 'Father of gods, demons, humans, eagles, and serpent species; author in the Rigveda.',
    keyContributionsTe: [
      'ఋగ్వేద మంత్రాల ద్రష్ట (Rigvedic Author)',
      'దేవతలు (ఆదిత్యులు), దైత్యులు, దానవులు, యక్షులు, నాగజాతి, గరుడ జాతులకు జనకుడు',
      'భారతదేశ ఆధ్యాత్మిక మరియు భౌతిక సృష్టి విస్తరణకు ఆద్యుడు (కాశ్యప గోత్ర ప్రవర్తకుడు)',
      'కశ్మీర్ నామకరణానికి మూలకారకుడు (కశ్యప మీర / కశ్యపపురం)'
    ],
    keyContributionsEn: [
      'Composer and seer of several Rigvedic hymns',
      'Father of Gods (12 Adityas), Asuras (Daityas & Danavas), Yakshas, Nagas, Garuda, and Aruna',
      'Progenitor of the celebrated Kashyapa Gotra spanning across humanity',
      'Legendary founder associated with the geographical realm of Kashmir (Kashyapa-pura)'
    ],
    lineageAndProgenyTe: 'మరీచి మహర్షి మరియు కళాదేవిల పుత్రుడు. దక్షుని కుమార్తెలు అదితి, దితి, దను, వినత, కద్రువలను వివాహమాడారు. అదితి ద్వారా ఇంద్రుడు, ఉపేంద్రుడు (వామనుడు), సూర్యుడు మొదలైన 12 మంది ఆదిత్యులు జన్మించారు.',
    lineageAndProgenyEn: 'Son of Brahmarshi Marichi and Kala. Wedded Daksha’s 13 daughters. Through Devi Aditi, he fathered Indra, Lord Vamana (Upendra), Surya, and the 12 Adityas.',
    scientificAndSpiritualEssenceTe: 'సృష్టిలోని జీవ వైవిధ్యాన్ని (Biodiversity) మానవ, జంతు, సరీసృప, ఖగోళ శక్తులుగా వర్గీకరించిన మహోన్నత ప్రాచీన జన్యు మరియు జీవశాస్త్ర పితామహుడు.',
    scientificAndSpiritualEssenceEn: 'The Vedic pioneer of biological categorization and lineage sciences, representing the harmonic cosmic balance between Devas (forces of light) and Asuras (forces of material desire).'
  },
  {
    id: 'atri',
    order: 2,
    rishiNameTe: 'అత్రి మహర్షి',
    rishiNameEn: 'Maharshi Atri',
    rishiTitleTe: 'బ్రహ్మ నేత్ర సంభవుడు • వేద మంత్ర ద్రష్ట',
    rishiTitleEn: 'Mind-born Vedic Seer • Rigveda Mandala 5 Author',
    wivesTe: 'సతీ అనసూయ దేవి (పతివ్రతా శిరోమణి)',
    wivesEn: 'Sati Anasuya Devi (Epitome of Chastity & Spiritual Purity)',
    imageSrc: './images/saptarishis/c2_atri.png',
    s1ImageSrc: './images/saptarishis/s1_atri.png',
    vedicRoleTe: 'ఋగ్వేద 5వ మండలానికి ప్రధాన ద్రష్ట; అగ్ని, ఇంద్ర, అశ్వినీ దేవతల దివ్య మంత్రోపాసకుడు.',
    vedicRoleEn: 'Principal seer of Rigveda Mandala 5 (Atri Mandala); consecrated sage of Agni and Indra.',
    keyContributionsTe: [
      'ఋగ్వేదంలో అత్యంత పవిత్రమైన 5వ మండల మంత్ర ద్రష్ట (Mandala 5 of Rigveda)',
      'పతివ్రతా శిరోమణి అనసూయా దేవి భర్త',
      'త్రిమూర్తుల అంశలైన భగవాన్ దత్తాత్రేయుడు, దుర్వాస మహర్షి, చంద్రులకు (సోముడు) దివ్య పితామహుడు',
      'శ్రీరామ, సీతా, లక్ష్మణులను వనవాస కాలంలో ఆశీర్వదించిన పరమ పూజ్య గురువు'
    ],
    keyContributionsEn: [
      'Composer of the revered 5th Mandala of the Rigveda',
      'Conjugal partner to Sati Anasuya, whose power transformed the Trimurtis into infants',
      'Father of Lord Dattatreya (Trimurti Avatar), fiery Sage Durvasa, and Chandra (Soma)',
      'Blessed Shri Rama, Sita Devi, and Lakshmana at their hermitage during Vanavasa'
    ],
    lineageAndProgenyTe: 'చతుర్ముఖ బ్రహ్మ నేత్రాల నుండి ఉద్భవించిన మానసపుత్రుడు. కర్దమ ప్రజాపతి పుత్రిక అయిన అనసూయా దేవితో కలసి అనన్య తపస్సు ఆచరించి త్రిమూర్తులను పుత్రులుగా పొందారు.',
    lineageAndProgenyEn: 'Born from the eyes/mind of Lord Brahma. Consecrated his spiritual penance alongside Anasuya, daughter of Kardama Prajapati, giving birth to the divine triumvirate.',
    scientificAndSpiritualEssenceTe: 'ఖగోళంలో సూర్యగ్రహణాలను శాస్త్రీయంగా పరిశీలించి పరిష్కరించిన ప్రథమ వేద శాస్త్రవేత్తగా ఋగ్వేదంలో అత్రి మహర్షి కీర్తించబడ్డారు.',
    scientificAndSpiritualEssenceEn: 'Honored in the Rigveda as the first astronomical observer who shielded and restored solar light during a total solar eclipse (Svarbhanu episode).'
  },
  {
    id: 'vishvamitra',
    order: 3,
    rishiNameTe: 'విశ్వామిత్ర మహర్షి',
    rishiNameEn: 'Brahmarshi Vishvamitra',
    rishiTitleTe: 'గాయత్రీ మంత్ర ద్రష్ట • క్షత్రియ తేజస్సు నుండి బ్రహ్మర్షి',
    rishiTitleEn: 'Seer of Gayatri Mantra • King Transformed into Brahmarshi',
    wivesTe: 'కుముద్వతీ దేవి (మరియు మేనక సహచర్యము)',
    wivesEn: 'Kumudvati Devi (along with the legendary celestial union with Menaka)',
    imageSrc: './images/saptarishis/c3_vishwamitra.png',
    vedicRoleTe: 'విశ్వజనీన మహా మంత్రమైన "గాయత్రీ మంత్రం" (ఋగ్వేదం 3.62.10) లోకానికి ప్రసాదించిన మంత్రద్రష్ట.',
    vedicRoleEn: 'Revealer of the supreme Gayatri Mantra (Rigveda 3.62.10) to all mankind.',
    keyContributionsTe: [
      'గాయత్రీ మహా మంత్ర ప్రదాత (Revealer of Gayatri Mantra)',
      'శకుంతల తండ్రి; భారతదేశ నామకారకుడైన చక్రవర్తి భరతునికి మాతామహుడు (తాత)',
      'శ్రీరామ లక్ష్మణులకు బల-అతిబల విద్యలు, దివ్యాస్త్రాలను ఉపదేశించిన గురువు',
      'త్రిశంకు స్వర్గాన్ని సృష్టించిన అపూర్వ తపోశక్తి సంపన్నుడు'
    ],
    keyContributionsEn: [
      'Seer of the sacred Rigvedic Gayatri Mantra',
      'Father of Shakuntala and maternal grandfather of Emperor Bharata, after whom India is named Bharat',
      'Spiritual preceptor who trained Shri Rama and Lakshmana with Bala-Atibala vidyas and divine astras',
      'Architect of Trishanku Svarga, displaying supreme creative tapas'
    ],
    lineageAndProgenyTe: 'గాధి మహారాజు పుత్రుడు; కుశ వంశీయుడు. కౌశిక గోత్ర ప్రవర్తకుడు. వశిష్ఠునితో ఆధ్యాత్మిక పోటీలో తపస్సు ద్వారా క్షత్రియ రాచరికం వీడి బ్రహ్మర్షి పదవిని అధిరోహించారు.',
    lineageAndProgenyEn: 'Son of King Gadhi, scion of the Kaushika royal lineage. Through supreme asceticism and willpower, transformed his Kshatriya energy into absolute Brahmarshi illumination.',
    scientificAndSpiritualEssenceTe: 'మానవుడు సంకల్ప శక్తి, క్రమశిక్షణ మరియు తీవ్ర సాధన ద్వారా పరిమిత స్థానం నుండి అనంత దివ్య చైతన్యాన్ని అందుకోగలడని నిరూపించిన ప్రయోగాత్మక మార్గదర్శి.',
    scientificAndSpiritualEssenceEn: 'The ultimate exemplar that divine wisdom and spiritual authority are achieved through self-mastery, tapas, and evolution rather than birthright alone.'
  },
  {
    id: 'bharadwaja',
    order: 4,
    rishiNameTe: 'భరద్వాజ మహర్షి',
    rishiNameEn: 'Maharshi Bharadwaja',
    rishiTitleTe: 'వైదిక విజ్ఞాన వేత్త • ఆయుర్వేద & యంత్ర శాస్త్ర ప్రవర్తకుడు',
    rishiTitleEn: 'Vedic Polymath • Master of Ayurveda & Vimana Shastra',
    wivesTe: 'సుశీలా దేవి',
    wivesEn: 'Susheela Devi',
    imageSrc: './images/saptarishis/c4_bharadwaja.png',
    vedicRoleTe: 'ఋగ్వేదం 6వ మండలానికి ప్రధాన ద్రష్ట; రామాయణ మరియు మహాభారత ఉభయ గ్రంథాలలో పూజితుడైన మహర్షి.',
    vedicRoleEn: 'Principal seer of Rigveda Mandala 6; revered in both the Ramayana and Mahabharata epics.',
    keyContributionsTe: [
      'ఋగ్వేద 6వ మండల మంత్ర ద్రష్ట',
      'ప్రయాగరాజ్ (త్రివేణి సంగమం) వద్ద మహా విశ్వవిద్యాలయ ఆశ్రమాన్ని నడిపిన గురుకుల పిత',
      'గార్గ్య మహర్షి మరియు వీర ధనుర్ధారి ద్రోణాచార్యుల తండ్రి; కుబేరుని పితామహుడు',
      'దేవేంద్రుని వద్దకు వెళ్లి ఆయుర్వేద విజ్ఞానాన్ని మానవాళి ఆరోగ్య రక్షణకై భూమికి తెచ్చిన వైద్య గురువు'
    ],
    keyContributionsEn: [
      'Composer of Rigveda Mandala 6 (Bharadwaja Mandala)',
      'Presided over the famed university hermitage at the confluence of Ganga and Yamuna (Prayagraj)',
      'Father of Sage Garga and Acharya Dronacharya; grandfather of Yaksha King Kubera',
      'Ascended to Svarga to master Ayurveda from Lord Indra and transmitted medicine to mankind'
    ],
    lineageAndProgenyTe: 'దేవగురు బృహస్పతి పుత్రుడు; ఆంగీరస గోత్రానికి చెందిన పరమోత్కృష్ట ఋషి. భరద్వాజ గోత్ర మూలపురుషుడు.',
    lineageAndProgenyEn: 'Son of Brihaspati (preceptor of the Devas); foremost scion of the Angirasa clan. Progenitor of the prominent Bharadwaja Gotra.',
    scientificAndSpiritualEssenceTe: 'ప్రాచీన యంత్ర సర్వస్వం, విమాన శాస్త్రము మరియు ఆయుర్వేద సంహితలలో శాస్త్రీయ పద్ధతులను క్రోడీకరించిన వేద విజ్ఞాన శాస్త్రవేత్త.',
    scientificAndSpiritualEssenceEn: 'Venerated in ancient treatises for monumental works on aviation mechanics (Yantra Sarvasva/Vaimanika) and foundational Ayurvedic pharmacology.'
  },
  {
    id: 'jamadagni',
    order: 5,
    rishiNameTe: 'జమదగ్ని మహర్షి',
    rishiNameEn: 'Maharshi Jamadagni',
    rishiTitleTe: 'ధనుర్వేద నిధి • పరశురాముని దివ్య పితామహుడు',
    rishiTitleEn: 'Master of Dhanurveda • Divine Father of Parashurama',
    wivesTe: 'రేణుకా దేవి (ఏకవీరా / ఎల్లమ్మ దేవి రూపం)',
    wivesEn: 'Renuka Devi (Revered as divine mother form)',
    imageSrc: './images/saptarishis/c5_jamadagni.png',
    vedicRoleTe: 'భృగు వంశీయుడు; ఋగ్వేద మంత్ర ద్రష్ట, సకల ఆయుధ-ధనుర్వేద శాస్త్ర రహస్య జ్ఞాని.',
    vedicRoleEn: 'Scion of Bhrigu lineage; Rigvedic seer and custodian of martial science (Dhanurveda).',
    keyContributionsTe: [
      'శ్రీమహావిష్ణువు 6వ అవతారమైన భగవాన్ పరశురాముని తండ్రి',
      'సూర్యుని తాపాన్ని ఉపశమింపజేసేందుకు గొడుగు (ఛత్రము) మరియు పాదుకలను ఆవిష్కరించిన ఆద్యుడు',
      'కామధేనువును రక్షించి, సత్య-ధర్మ రక్షణకై ప్రాణత్యాగం చేసిన ధర్మమూర్తి',
      'భార్గవ వంశానికి మరియు జామదగ్న్య గోత్రానికి ప్రధాన గురువు'
    ],
    keyContributionsEn: [
      'Father of Lord Parashurama, the 6th incarnation of Lord Vishnu',
      'Inventor of the parasol (chhatra) and footwear (padukas) in Vedic lore',
      'Steadfast guardian of Kamadhenu and patron of moral duty (Dharma)',
      'Foremost preceptor of the illustrious Bhargava and Jamadagnya Gotras'
    ],
    lineageAndProgenyTe: 'ఋచీక మహర్షి మరియు సత్యవతి (గాధి కుమార్తె)ల కుమారుడు. రేణుకా దేవితో వివాహమై రుమణ్వంతుడు, సుషేణుడు, వసువు, విశ్వావసువు మరియు పరశురాముడు అనే ఐదుగురు పుత్రులు కలిగారు.',
    lineageAndProgenyEn: 'Son of Sage Richika and Satyavati (daughter of King Gadhi). Wedded Renuka Devi, producing five sons including Lord Parashurama.',
    scientificAndSpiritualEssenceTe: 'శాంతి మరియు శక్తిల సమతుల్యతకు ప్రతీక. వైదిక తపోబలం మరియు ఆత్మరక్షణ ధనుర్వేదం రెండూ ధర్మసంస్థాపనకే అని చాటిన మార్గదర్శి.',
    scientificAndSpiritualEssenceEn: 'Embodies the union of spiritual austerity (Brahma Tejas) and righteous physical valor (Kshatra Tejas) necessary for societal equilibrium.'
  },
  {
    id: 'gautama',
    order: 6,
    rishiNameTe: 'గౌతమ మహర్షి',
    rishiNameEn: 'Maharshi Gautama',
    rishiTitleTe: 'న్యాయశాస్త్ర ప్రవర్తకుడు • దక్షిణ గంగా గోదావరి ప్రదాత',
    rishiTitleEn: 'Author of Nyaya Sutras • Bringer of the Godavari River',
    wivesTe: 'అహల్యా దేవి (సృష్టిలో అత్యంత సుందరమైన రూపవతి)',
    wivesEn: 'Ahalya Devi (Created by Brahma as the archetype of pristine beauty)',
    imageSrc: './images/saptarishis/c6_gautama.png',
    vedicRoleTe: 'ఋగ్వేదంలో అనేక మంత్రాల ద్రష్ట; భారతీయ తర్క శాస్త్రమైన న్యాయ దర్శన మూలకర్త.',
    vedicRoleEn: 'Seer in the Rigveda; founder of Nyaya school of Indian logic and epistemology.',
    keyContributionsTe: [
      'దక్షిణ భారతదేశానికి జీవనది అయిన గోదావరి నదిని (గౌతమీ గంగ) ధరణికి రప్పించిన పరమ తపస్వి',
      'నాసిక్ సమీపంలోని పవిత్ర త్రయంబకేశ్వర జ్యోతిర్లింగ ఆవిర్భావానికి మూలకారకుడు',
      'తార్కిక వేదాంతమైన "న్యాయ సూత్రాలు" (Nyaya Sutras) రచించిన తత్వవేత్త',
      'మిథిలా రాజపురోహితుడైన శతానంద మహర్షికి తండ్రి'
    ],
    keyContributionsEn: [
      'Brought the sacred Godavari River (Gautami Ganga) to peninsular India through arduous tapasya',
      'Instrumental in the manifestation of the holy Triyambakeshwar Jyotirlinga at Nashik',
      'Author of the monumental "Nyaya Sutras", laying down foundational epistemology and logic',
      'Father of Shatananda, the revered royal preceptor of King Janaka at Mithila'
    ],
    lineageAndProgenyTe: 'రాహుగణ పుత్రుడు; ఆంగీరస వంశోద్భవుడు. బ్రహ్మదేవుని మానసపుత్రిక అయిన అహల్యా దేవిని వివాహమాడారు. గౌతమ గోత్ర ప్రవర్తకుడు.',
    lineageAndProgenyEn: 'Son of Rahugana, descending from the Angirasa line. Consecrated in marriage to Ahalya Devi by Lord Brahma himself. Progenitor of the Gautama Gotra.',
    scientificAndSpiritualEssenceTe: 'నీటి నిర్వహణ, వ్యవసాయ వికాసం మరియు తార్కిక ఆధారాల ద్వారా సత్యాన్వేషణను మేళవించిన వేద శాస్త్ర పితామహుడు.',
    scientificAndSpiritualEssenceEn: 'A legendary master of hydrological conservation and systematic logical inquiry (Pramana shastra) that shaped ancient Indian philosophical thought.'
  },
  {
    id: 'vasistha',
    order: 7,
    rishiNameTe: 'వశిష్ఠ మహర్షి',
    rishiNameEn: 'Brahmarshi Vashistha',
    rishiTitleTe: 'రఘువంశ కులగురువు • యోగవాసిష్ఠ ప్రదాత • కామధేను సంరక్షకుడు',
    rishiTitleEn: 'Ayodhya Royal Preceptor • Teacher of Yoga Vasistha • Guardian of Kamadhenu',
    wivesTe: 'అరుంధతీ దేవి (పతివ్రతా నక్షత్ర శిరోమణి)',
    wivesEn: 'Arundhati Devi (Revered cosmic celestial star of fidelity)',
    imageSrc: './images/saptarishis/c7_vasistha.png',
    s1ImageSrc: './images/saptarishis/s1_vasistha.png',
    vedicRoleTe: 'ఋగ్వేదం 7వ మండలానికి ప్రధాన ద్రష్ట; అయోధ్యా సూర్యవంశ చక్రవర్తులకు వంశపారంపర్య కులగురువు.',
    vedicRoleEn: 'Principal seer of Rigveda Mandala 7; hereditary spiritual preceptor of the Solar Dynasty.',
    keyContributionsTe: [
      'శ్రీరామచంద్రునికి పరమ అద్వైత విజ్ఞానాన్ని ఉపదేశించిన "యోగవాసిష్ఠం" (Yoga Vasistha) కర్త',
      'దివ్య గోవు కామధేనువు మరియు నందినిలను ధర్మబద్ధంగా సంరక్షించిన మహర్షి',
      'శ్రీరాముడు, లక్ష్మణ, భరత, శత్రుఘ్నులకు నామకరణం, విద్యాభ్యాసం చేయించిన కులగురువు',
      'ఖగోళంలో అరుంధతీ-వశిష్ఠ జంట నక్షత్రాల (Alcor & Mizar) రూపంలో శాశ్వతంగా విలసిల్లుతున్న ఆదర్శ దంపతులు'
    ],
    keyContributionsEn: [
      'Narrator of "Yoga Vasistha", the profound treatise on non-dual consciousness and cosmic mind',
      'Righteous protector of the wish-fulfilling divine cows Kamadhenu and Nandini',
      'Royal preceptor who named and educated Shri Rama, Lakshmana, Bharata, and Shatrughna',
      'Immortalized with wife Arundhati as the celestial double-star system (Mizar & Alcor) in Ursa Major'
    ],
    lineageAndProgenyTe: 'బ్రహ్మ మానసపుత్రుడు (మరియు మిత్రావరుణుల నుండి పునర్జన్మ). పతివ్రతా శిరోమణి అరుంధతీ దేవి భర్త. శక్తి మహర్షి తండ్రి; పరాశర మహర్షి పితామహుడు; వేదవ్యాస మహర్షి ప్రపితామహుడు (ముత్తాత).',
    lineageAndProgenyEn: 'Mind-born son of Brahma (re-manifested from Mitra-Varuna). Wedded Arundhati Devi. Father of Sage Shakti, grandfather of Parashara, and great-grandfather of Maharshi Veda Vyasa.',
    scientificAndSpiritualEssenceTe: 'సత్యం, సహనం మరియు సంపూర్ణ అద్వైత స్థితికి నిలువెత్తు రూపం. విశ్వామిత్రుని అస్త్రాలన్నింటినీ తన బ్రహ్మదండంతో క్షమతో నిలువరించిన శాంతమూర్తి.',
    scientificAndSpiritualEssenceEn: 'The pinnacle of spiritual equilibrium (Brahma-varchas), demonstrating that transcendent peace and wisdom outmatch any physical weapon or astral force.'
  }
];

// 2. Brahma's 1st Manvantara Mind-Born Sapta Rishis (Source 1)
export const MANASA_PUTRA_SAPTARISHIS: ManasaPutraRishi[] = [
  {
    id: 's1_marichi',
    order: 1,
    nameTe: 'మరీచి మహర్షి',
    nameEn: 'Maharshi Marichi',
    brahmaOriginTe: 'చతుర్ముఖ బ్రహ్మ మనస్సు / తేజస్సు నుండి ఉద్భవించిన ప్రథమ మానసపుత్రుడు',
    brahmaOriginEn: 'First mind-born son emerged from Lord Brahma’s spiritual radiance',
    imageSrc: './images/saptarishis/s1_marichi.png',
    roleTe: 'కశ్యప మహర్షి తండ్రి; సకల ప్రాణుల ఆవిర్భావానికి మూలపురుషుడు.',
    roleEn: 'Father of Maharshi Kashyapa; grandfather of all Devas, Asuras, and living lineages.',
    keyLegendsTe: [
      'కర్దమ ప్రజాపతి పుత్రిక కళాదేవి భర్త',
      'సకల విశ్వ ప్రాణిసృష్టికి మూలమైన కశ్యపుని కన్న దివ్య పితామహుడు',
      'సప్తర్షి మండలంలో (Ursa Major) మొదటి నక్షత్ర ప్రతీక'
    ],
    keyLegendsEn: [
      'Husband of Kala, daughter of Kardama Prajapati',
      'Father of Kashyapa who populated all cosmological realms',
      'Represented as the first celestial star in the Saptarishi constellation'
    ],
    gotraTe: 'మారీచ గోత్రం / కాశ్యప వంశ మూలం',
    gotraEn: 'Maricha Gotra & Root of Kashyapa Lineage'
  },
  {
    id: 's1_atri',
    order: 2,
    nameTe: 'అత్రి మహర్షి',
    nameEn: 'Maharshi Atri',
    brahmaOriginTe: 'చతుర్ముఖ బ్రహ్మ నేత్రాల నుండి ఉద్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Mind-born son born from the luminous eyes of Lord Brahma',
    imageSrc: './images/saptarishis/s1_atri.png',
    roleTe: 'సతీ అనసూయ పతి; దత్తాత్రేయ, దుర్వాస, చంద్రుల దివ్య జనకుడు.',
    roleEn: 'Consort of Sati Anasuya; father of Dattatreya, Durvasa, and Soma.',
    keyLegendsTe: [
      'ఋగ్వేదం 5వ మండల మంత్ర ద్రష్ట',
      'త్రిమూర్తులను తన ఆశ్రమంలో పసిపాపలుగా మార్చిన పతివ్రతా ప్రభావ సంరక్షకుడు',
      'సప్తర్షి మండలంలో రెండవ నక్షత్రం (Megrez / Merak)'
    ],
    keyLegendsEn: [
      'Composer of Rigveda Mandala 5',
      'Ascetic partner of Anasuya, invoking the divine grace of the Trimurtis',
      'Identified as the second star of Ursa Major'
    ],
    gotraTe: 'ఆత్రేయ గోత్రం',
    gotraEn: 'Atreya Gotra'
  },
  {
    id: 's1_angiras',
    order: 3,
    nameTe: 'అంగీరస మహర్షి',
    nameEn: 'Maharshi Angiras',
    brahmaOriginTe: 'బ్రహ్మదేవుని ముఖం / యజ్ఞాగ్ని జ్వాలల నుండి ఉద్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Born from the sacred sacrificial mouth/fire embers of Lord Brahma',
    imageSrc: './images/saptarishis/s1_angiras.png',
    roleTe: 'దేవగురు బృహస్పతి తండ్రి; అథర్వణ-ఆంగీరస వేద మంత్ర ప్రవర్తకుడు.',
    roleEn: 'Father of Brihaspati (Guru of Devas); primary seer of Atharvaveda and Rigveda.',
    keyLegendsTe: [
      'అగ్నిదేవ ఆరాధన మరియు యజ్ఞవిధానాలను లోకానికి అందించిన ఆద్యుడు',
      'భరద్వాజ, గౌతమ మొదలైన ప్రముఖ ఋషుల వంశ మూలపురుషుడు',
      'సప్తర్షి మండలంలో మూడవ నక్షత్రం (Alioth)'
    ],
    keyLegendsEn: [
      'Pioneer of sacred fire rituals and cosmic invocation in the Atharvaveda',
      'Ancestral root of monumental rishis including Bharadwaja and Gautama',
      'Identified as the third celestial star of the Great Bear'
    ],
    gotraTe: 'ఆంగీరస గోత్రం',
    gotraEn: 'Angirasa Gotra'
  },
  {
    id: 's1_pulastya',
    order: 4,
    nameTe: 'పులస్త్య మహర్షి',
    nameEn: 'Maharshi Pulastya',
    brahmaOriginTe: 'బ్రహ్మదేవుని కర్ణముల (చెవుల) నుండి ఆవిర్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Manifested from the ears (auditory senses) of Lord Brahma',
    imageSrc: './images/saptarishis/s1_pulastya.png',
    roleTe: 'విశ్రవసుని తండ్రి; ధనాధిపతి కుబేరుడు మరియు లంకాధిపతి రావణునికి పితామహుడు (తాత).',
    roleEn: 'Father of Sage Vishrava; grandfather of Lord Kubera and King Ravana.',
    keyLegendsTe: [
      'కర్దమ ప్రజాపతి పుత్రిక హవిర్భువు భర్త',
      'పులస్త్యుని ద్వారానే పరాశర మహర్షికి విష్ణు పురాణ జ్ఞానం అనుగ్రహించబడింది',
      'సప్తర్షి మండలంలో నాల్గవ నక్షత్రం'
    ],
    keyLegendsEn: [
      'Husband of Havirbhu, daughter of Kardama Prajapati',
      'Conferred the sacred revelation of Vishnu Purana upon Sage Parashara',
      'Identified with the fourth celestial beacon in the constellation'
    ],
    gotraTe: 'పౌలస్త్య గోత్రం',
    gotraEn: 'Paulastya Gotra'
  },
  {
    id: 's1_pulaha',
    order: 5,
    nameTe: 'పులహ మహర్షి',
    nameEn: 'Maharshi Pulaha',
    brahmaOriginTe: 'బ్రహ్మదేవుని నాభి కమల తేజస్సు నుండి ఉద్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Born from the spiritual navel center of Lord Brahma',
    imageSrc: './images/saptarishis/s1_pulaha.png',
    roleTe: 'కింపురుషులు, పిశాచాలు, వ్యాఘ్ర జాతుల జన్యు ఆవిర్భావానికి సాక్షియైన తపోనిధి.',
    roleEn: 'Guardian sage associated with primordial wilderness and celestial asceticism.',
    keyLegendsTe: [
      'దక్ష ప్రజాపతి పుత్రిక క్షమ మరియు కర్దమ పుత్రిక గతిల భర్త',
      'శాలగ్రామ క్షేత్రమైన గండకీ నదీ తీరంలో గొప్ప తపస్సు ఆచరించిన ముని',
      'సప్తర్షి మండలంలో ఐదవ నక్షత్రం'
    ],
    keyLegendsEn: [
      'Husband of Kshama (Daksha’s daughter) and Gati (Kardama’s daughter)',
      'Performed legendary tapas at the sacred Shalagrama kshetra along the Gandaki River',
      'Fifth star in the Great Bear constellation'
    ],
    gotraTe: 'పౌలహ గోత్రం',
    gotraEn: 'Paulaha Gotra'
  },
  {
    id: 's1_kratu',
    order: 6,
    nameTe: 'క్రతు మహర్షి',
    nameEn: 'Maharshi Kratu',
    brahmaOriginTe: 'బ్రహ్మదేవుని కరతలాల (చేతుల) నుండి ఉద్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Born from the hands/sacrificial palms of Lord Brahma',
    imageSrc: './images/saptarishis/s1_kratu.png',
    roleTe: '60,000 మంది వాలఖిల్య మహర్షులకు ఆధ్యాత్మిక పితామహుడు.',
    roleEn: 'Spiritual progenitor of the 60,000 sun-chariot ascending Valakhilya sages.',
    keyLegendsTe: [
      'దక్షుని కుమార్తె సన్నతి (క్రియ) భర్త',
      'సూర్య భగవానుని రథాన్ని అనుసరిస్తూ వేదగానం చేసే చిటికెన వేలంత పరిమాణంగల వాలఖిల్యుల జనకుడు',
      'సప్తర్షి మండలంలో ఆరవ నక్షత్రం (Dubhe)'
    ],
    keyLegendsEn: [
      'Wedded Sannati (Kriya), daughter of Prajapati Daksha',
      'Progenitor of the thumb-sized 60,000 Valakhilya sages who escort the Sun God’s chariot',
      'Sixth star in the Saptarishi constellation'
    ],
    gotraTe: 'క్రతు గోత్రం',
    gotraEn: 'Kratu Gotra'
  },
  {
    id: 's1_vasistha',
    order: 7,
    nameTe: 'వశిష్ఠ మహర్షి',
    nameEn: 'Maharshi Vashistha',
    brahmaOriginTe: 'బ్రహ్మదేవుని ప్రాణవాయువు / శ్వాస నుండి ఉద్భవించిన మానసపుత్రుడు',
    brahmaOriginEn: 'Manifested from the vital life-breath (Prana) of Lord Brahma',
    imageSrc: './images/saptarishis/s1_vasistha.png',
    roleTe: 'రఘువంశ కులగురువు; అరుంధతీ పతి; వేద ధర్మ రక్షకుడు.',
    roleEn: 'Royal preceptor of the Solar Dynasty; consort of Arundhati; pillar of Sanatana Dharma.',
    keyLegendsTe: [
      'సప్తర్షి మండలంలో ఏడవ నక్షత్రం; అరుంధతీ నక్షత్రంతో అవిభాజ్యంగా తిరిగే దివ్య జంట',
      'బ్రహ్మ మానసపుత్రులలో ప్రధాన స్థానం వహించి, వైవస్వత మన్వంతరంలోనూ సప్తర్షిగా కొనసాగిన ఏకైక మహర్షి',
      'కామధేను సంరక్షకుడు మరియు అహింసా-బ్రహ్మతేజో నిధి'
    ],
    keyLegendsEn: [
      'Seventh star in Ursa Major, orbiting perpetually with Arundhati (Mizar-Alcor system)',
      'The unique Maharshi revered among both Brahma’s first mind-born sons and the current 7th Manvantara',
      'Guardian of Kamadhenu and master of supreme non-violent spiritual force'
    ],
    gotraTe: 'వాసిష్ఠ గోత్రం',
    gotraEn: 'Vashistha Gotra'
  }
];

// Master Source Images Metadata
export const SAPTARISHI_SOURCE_POSTERS = {
  source1: {
    titleTe: 'మూల సచిత్ర పటం 1: సప్తర్షులు (బ్రహ్మ మానసపుత్రులు)',
    titleEn: 'Source Poster 1: Sapta Rishis (Brahma Mind-Born Lineage)',
    path: './images/saptarishis/saptarishis_source1.jpg',
    descriptionTe: 'చతుర్ముఖ బ్రహ్మ నుండి ఉద్భవించిన సప్తర్షుల (మరీచి, అత్రి, అంగీరస, పులస్త్య, పులహ, క్రతు, వశిష్ఠ) అసలు మూల సచిత్ర పటం.',
    descriptionEn: 'Original artistic portrait representing the 7 mind-born Prajapati Saptarishis created by Lord Brahma.'
  },
  source2: {
    titleTe: 'మూల సచిత్ర పటం 2: సప్త ఋషులు పత్నులు సమేత (దివ్య దంపతులు)',
    titleEn: 'Source Poster 2: Sapta Rishis with their Consecrated Wives',
    path: './images/saptarishis/saptarishis_couples_source2.jpg',
    descriptionTe: 'వైవస్వత మన్వంతర సప్తర్షులు వారి పత్నులైన అదితి-దితి, అనసూయ, కుముద్వతి, సుశీల, రేణుక, అహల్య, అరుంధతీ సమేతంగా కొలువైన దివ్య కుటుంబ పటం.',
    descriptionEn: 'Classical traditional framed family portrait of the 7 Saptarishis alongside their consecrated divine consorts (Dharmapatnis).'
  },
  source3: {
    titleTe: 'మూల చార్ట్ 3: సప్తర్షులు – ప్రథమ అన్వేషకులు & శాస్త్రవేత్తలు',
    titleEn: 'Source Chart 3: Who are Saptarishis? The Original Seekers & First Scientists',
    path: './images/saptarishis/saptarishis_details_source3.jpg',
    descriptionTe: 'సప్తర్షుల వేద విశేషాలు, గోత్రాలు, పత్నులు, సంతతి మరియు శాస్త్రీయ ఆవిష్కరణలను వివరించే సమగ్ర ఆంగ్ల చార్ట్.',
    descriptionEn: 'Detailed analytical infographic detailing Vedic authorship, parentage, divine weapons, and astronomical legacy.'
  }
};
