export interface BhagavatamHierarchyNode {
  id: string;
  name: string;
  nameEn: string;
  role?: string;
  spouse?: string;
  image?: string;
  canto?: string;
  color?: 'gold' | 'blue' | 'amber' | 'green' | 'crimson' | 'purple' | 'slate';
  isSpecial?: boolean;
  isHexagon?: boolean;
  children?: BhagavatamHierarchyNode[];
}

export const BHAGAVATAM_TREE_ROOT: BhagavatamHierarchyNode = {
  id: 'parabrahma',
  name: 'పరబ్రహ్మ',
  nameEn: 'Parabrahma',
  role: 'ఏకైక పరమాత్మ • సృష్టి మూలకారకుడు',
  canto: 'సకల సృష్టి మూలతత్త్వం',
  image: './images/divine/parabrahma.jpg',
  color: 'gold',
  isSpecial: true,
  isHexagon: true,
  children: [
    {
      id: 'mahavishnu',
      name: 'శ్రీ మహావిష్ణువు',
      nameEn: 'Mahāviṣṇu',
      role: 'కారణోదకశాయి • ప్రథమ పురుషావతారము',
      canto: 'స్కంధం 2 & 3',
      image: './images/bhagavatam/mahavishnu_karanodaka.jpg',
      color: 'purple',
      isSpecial: true,
      children: [
        {
          id: 'garbhodakasayi-vishnu',
          name: 'గర్భోదకశాయి విష్ణువు',
          nameEn: 'Garbhodakaśāyī Viṣṇu',
          role: 'ద్వితీయ పురుషావతారము • నాభికమల ప్రభువు',
          canto: 'స్కంధం 2 & 3',
          image: './images/bhagavatam/garbhodakasayi_vishnu.jpg',
          color: 'blue',
          isSpecial: true,
          children: [
            {
              id: 'brahma',
              name: 'చతుర్ముఖ బ్రహ్మదేవుడు',
              nameEn: 'Lord Brahmā',
              role: 'సృష్టికర్త • వేద ప్రదాత',
              canto: 'స్కంధం 3 & 4',
              image: './images/bhagavatam/brahma_lotus.jpg',
              color: 'amber',
              isSpecial: true,
              children: [
                // ==========================================
                // BRANCH 1: CHANDRA VAMSA (చంద్ర వంశము)
                // ==========================================
                {
                  id: 'chandra-vamsa-root',
                  name: 'చంద్ర వంశము',
                  nameEn: 'Chandra Vamśa (Lunar Dynasty)',
                  role: 'అత్రి, సోముడు & యయాతి దివ్య పరంపర',
                  color: 'blue',
                  isSpecial: true,
                  children: [
                    {
                      id: 'atri',
                      name: 'అత్రి మహర్షి',
                      nameEn: 'Atri Maharṣi',
                      spouse: 'అనసూయ (Anasūyā)',
                      role: 'బ్రహ్మ మానసపుత్రుడు',
                      color: 'blue',
                      children: [
                        {
                          id: 'narada',
                          name: 'దేవర్షి నారదుడు',
                          nameEn: 'Nārada Muni',
                          role: 'హరినామ సంకీర్తనాచార్యుడు • వీణాపాణి',
                          image: './images/bhagavatam/narada_muni.jpg',
                          color: 'amber',
                          isSpecial: true
                        },
                        {
                          id: 'siva-parivara',
                          name: 'పరమశివుడు (రుద్రుడు)',
                          nameEn: 'Lord Śiva',
                          spouse: 'సతీ/పార్వతి (గణేశ, కార్తికేయ)',
                          role: 'వైష్ణవానాం యథా శంభుః',
                          image: './images/bhagavatam/siva_parivara.jpg',
                          color: 'purple',
                          isSpecial: true
                        },
                        {
                          id: 'soma',
                          name: 'సోముడు (చంద్ర దేవుడు)',
                          nameEn: 'Soma (Chandra)',
                          role: 'చంద్ర వంశ మూలకర్త • ఓషధీపతి',
                          color: 'blue',
                          isSpecial: true,
                          children: [
                            {
                              id: 'budha',
                              name: 'బుధుడు',
                              nameEn: 'Budha',
                              spouse: 'ఇళా దేవి (Iḷā)',
                              role: 'గ్రహాధిపతి',
                              color: 'blue',
                              children: [
                                {
                                  id: 'pururava',
                                  name: 'పురూరవుడు',
                                  nameEn: 'Purūrava',
                                  spouse: 'ఊర్వశి (Urvaśī)',
                                  role: 'చంద్రవంశ సార్వభౌముడు',
                                  color: 'blue',
                                  children: [
                                    // Split 1: Vijaya -> Gadhi -> Parasurama & Visvamitra
                                    {
                                      id: 'vijaya-branch',
                                      name: 'విజయ శాఖ (గాధి పరంపర)',
                                      nameEn: 'Vijaya & Gādhi Lineage',
                                      role: 'గాధి రాజు $\\rightarrow$ జమదగ్ని & విశ్వామిత్ర',
                                      color: 'crimson',
                                      children: [
                                        {
                                          id: 'parasurama-line',
                                          name: 'సత్యవతి $\\rightarrow$ జమదగ్ని మహర్షి',
                                          nameEn: 'Satyavatī & Jamadagni',
                                          spouse: 'రేణుకా దేవి (Reṇukā)',
                                          color: 'crimson',
                                          children: [
                                            {
                                              id: 'parasurama',
                                              name: 'శ్రీ పరశురాముడు',
                                              nameEn: 'Lord Paraśurāma',
                                              role: 'భార్గవ రాముడు • శ్రీహరి అవతారం',
                                              image: './images/bhagavatam/parasurama.jpg',
                                              color: 'crimson',
                                              isSpecial: true
                                            }
                                          ]
                                        },
                                        {
                                          id: 'visvamitra',
                                          name: 'విశ్వామిత్ర మహర్షి',
                                          nameEn: 'Viśvāmitra Muni',
                                          spouse: 'మేనక (Menakā)',
                                          role: 'గాయత్రీ మంత్ర ప్రకాశకుడు',
                                          color: 'amber',
                                          children: [
                                            {
                                              id: 'sakuntala',
                                              name: 'శకుంతలా దేవి',
                                              nameEn: 'Śakuntalā',
                                              spouse: 'దుష్యంతుడు (Duṣyanta)',
                                              role: 'భరత చక్రవర్తి తల్లి',
                                              color: 'amber'
                                            }
                                          ]
                                        },
                                        {
                                          id: 'saunaka-rsi',
                                          name: 'శౌనక మహర్షి',
                                          nameEn: 'Śaunaka Ṛṣi',
                                          role: 'నైమిశారణ్య సత్రయాగ ప్రముఖుడు',
                                          color: 'slate'
                                        }
                                      ]
                                    },
                                    // Split 2: Ayu -> Nahusa -> Yayati
                                    {
                                      id: 'ayu-branch',
                                      name: 'ఆయువు శాఖ',
                                      nameEn: 'Āyu Dynasty',
                                      color: 'blue',
                                      children: [
                                        {
                                          id: 'ksattravrddha',
                                          name: 'క్షత్రవృద్ధుడు & సోదరులు',
                                          nameEn: 'Kṣattravṛddha & 3 Brothers',
                                          role: 'క్షత్రియ వంశ విస్తరణ',
                                          color: 'slate'
                                        },
                                        {
                                          id: 'nahusa-yayati',
                                          name: 'నహుషుడు $\\rightarrow$ యయాతి మహారాజు',
                                          nameEn: 'Nahuṣa $\\rightarrow$ Yayāti',
                                          spouse: 'దేవయాని & శర్మిష్ఠ (5 సోదరులు)',
                                          role: 'యాదవ & పౌరవ వంశముల జనకుడు',
                                          color: 'blue',
                                          isSpecial: true,
                                          children: [
                                            // YADU DYNASTY
                                            {
                                              id: 'yadu-lineage',
                                              name: 'యదు శాఖ (యాదవ వంశము)',
                                              nameEn: 'Yadava Lineage (Yadu Dynasty)',
                                              role: 'క్రోష్ట $\\rightarrow$ సాత్వత $\\rightarrow$ వృష్ణి $\\rightarrow$ శూరసేనుడు',
                                              color: 'gold',
                                              isSpecial: true,
                                              children: [
                                                {
                                                  id: 'vrsni-branch',
                                                  name: 'వృష్ణి శాఖ (శూరసేనుడు)',
                                                  nameEn: 'Vṛṣṇi & Śūrasena Lineage',
                                                  role: 'శూరసేన మహారాజు వంశము',
                                                  color: 'gold',
                                                  children: [
                                                    {
                                                      id: 'kunti',
                                                      name: 'కుంతీదేవి (పృథ)',
                                                      nameEn: 'Kuntī Devī',
                                                      spouse: 'పాండురాజు (Pāṇḍu)',
                                                      role: 'పాండవుల తల్లి • కర్ణుని తల్లి (సూర్య ప్రసాదం)',
                                                      color: 'amber'
                                                    },
                                                    {
                                                      id: 'vasudeva',
                                                      name: 'వసుదేవ మహారాజు (ఆనకదుందుభి)',
                                                      nameEn: 'King Vasudeva',
                                                      spouse: 'దేవకీదేవి & రోహిణీదేవి',
                                                      role: 'శ్రీకృష్ణ-బలరాముల దివ్య జనకుడు',
                                                      color: 'gold',
                                                      children: [
                                                        {
                                                          id: 'lord-krsna-leela',
                                                          name: 'భగవాన్ శ్రీకృష్ణుడు',
                                                          nameEn: 'Lord Śrī Kṛṣṇa',
                                                          spouse: 'రుక్మిణి, సత్యభామ & 16,108 రాణులు',
                                                          role: 'యదునందనుడు • ద్వారకాధీశుడు • పూర్ణావతారము',
                                                          canto: 'స్కంధం 10',
                                                          image: './images/bhagavatam/lord_krsna_leela.jpg',
                                                          color: 'gold',
                                                          isSpecial: true
                                                        },
                                                        {
                                                          id: 'lord-balarama',
                                                          name: 'భగవాన్ బలరాముడు',
                                                          nameEn: 'Lord Balarāma',
                                                          spouse: 'రేవతీ దేవి (Revatī)',
                                                          role: 'శ్రీహరి ప్రథమ విస్తరణ • హలాధరుడు • శేషావతారము',
                                                          canto: 'స్కంధం 10',
                                                          image: './images/bhagavatam/lord_balarama.jpg',
                                                          color: 'gold',
                                                          isSpecial: true
                                                        },
                                                        {
                                                          id: 'subhadra',
                                                          name: 'సుభద్రా దేవి',
                                                          nameEn: 'Subhadrā Devī',
                                                          spouse: 'అర్జునుడు (Arjuna)',
                                                          role: 'అభిమన్యుని తల్లి • జగన్నాథ సోదరి',
                                                          color: 'blue'
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  id: 'andhaka-branch',
                                                  name: 'అంధక శాఖ (ఉగ్రసేన, దేవక)',
                                                  nameEn: 'Andhaka Lineage (Ugrasena & Devaka)',
                                                  role: 'మధుర సింహాసనాధీశులు',
                                                  color: 'slate',
                                                  children: [
                                                    {
                                                      id: 'ugrasena',
                                                      name: 'ఉగ్రసేనుడు $\\rightarrow$ కంసుడు',
                                                      nameEn: 'King Ugrasena $\\rightarrow$ Kaṁsa',
                                                      role: 'కంసుడు + 8 సోదరులు + 5 కన్యలు',
                                                      color: 'crimson'
                                                    },
                                                    {
                                                      id: 'devaka',
                                                      name: 'దేవకుడు $\\rightarrow$ దేవకీదేవి',
                                                      nameEn: 'Devaka $\\rightarrow$ Devakī',
                                                      role: 'శ్రీకృష్ణుని మాత దేవకి + 6 కన్యలు + 4 సోదరులు',
                                                      color: 'amber'
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            // PURU DYNASTY
                                            {
                                              id: 'puru-lineage',
                                              name: 'పూరు శాఖ (పౌరవ / కురు వంశము)',
                                              nameEn: 'Paurava / Kuru Dynasty',
                                              role: 'దుష్యంతుడు $\\rightarrow$ భరతుడు $\\rightarrow$ కురురాజు $\\rightarrow$ శంతనుడు',
                                              color: 'blue',
                                              isSpecial: true,
                                              children: [
                                                {
                                                  id: 'dushyanta-bharata',
                                                  name: 'దుష్యంతుడు $\\rightarrow$ భరత చక్రవర్తి',
                                                  nameEn: 'Duṣyanta $\\rightarrow$ King Bharata',
                                                  role: 'భారతదేశ నామకారకుడు (శకుంతలా పుత్రుడు)',
                                                  color: 'blue',
                                                  children: [
                                                    {
                                                      id: 'bharadvaja-manyu',
                                                      name: 'భరద్వాజుడు $\\rightarrow$ మన్యు $\rightarrow$ నర',
                                                      nameEn: 'Bharadvāja $\\rightarrow$ Manyu $\\rightarrow$ Nara',
                                                      color: 'slate',
                                                      children: [
                                                        {
                                                          id: 'rantideva',
                                                          name: 'గురు రంతిదేవుడు',
                                                          nameEn: 'Guru Rantideva',
                                                          role: 'సంకృతి పుత్రుడు • పరమ దానశీలి భాగవతోత్తముడు',
                                                          color: 'amber',
                                                          isSpecial: true
                                                        },
                                                        {
                                                          id: 'ajamidha-kuru',
                                                          name: 'అజమీఢుడు $\\rightarrow$ ఋక్ష $\rightarrow$ కురురాజు',
                                                          nameEn: 'Ajamīḍha $\\rightarrow$ Ṛkṣa $\\rightarrow$ King Kuru',
                                                          role: 'కురుక్షేత్ర నామకారకుడు • జాహ్ను పరంపర',
                                                          color: 'blue',
                                                          children: [
                                                            {
                                                              id: 'drupada-branch',
                                                              name: 'పాంచాల శాఖ (ద్రుపద మహారాజు)',
                                                              nameEn: 'Pañcāla Dynasty (King Drupada)',
                                                              color: 'crimson',
                                                              children: [
                                                                {
                                                                  id: 'draupadi',
                                                                  name: 'ద్రౌపదీ దేవి (పాంచాలి)',
                                                                  nameEn: 'Draupadī Devī',
                                                                  role: 'అనన్య శరణాగతి • అక్షయపాత్రధారిణి',
                                                                  image: './images/bhagavatam/draupadi_vastra.jpg',
                                                                  color: 'crimson',
                                                                  isSpecial: true
                                                                },
                                                                {
                                                                  id: 'dhrstadyumna',
                                                                  name: 'ధృష్టద్యుమ్నుడు & శిఖండి',
                                                                  nameEn: 'Dhṛṣṭadyumna & Śikhaṇḍī',
                                                                  role: 'పాండవ సేనాపతి',
                                                                  color: 'crimson'
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              id: 'santanu-lineage',
                                                              name: 'శంతను మహారాజు',
                                                              nameEn: 'King Śāntanu',
                                                              spouse: 'గంగాదేవి & సత్యవతి',
                                                              role: 'హస్తినాపుర చక్రవర్తి',
                                                              color: 'blue',
                                                              children: [
                                                                {
                                                                  id: 'bhishma',
                                                                  name: 'గంగాపుత్ర భీష్ముడు (దేవవ్రతుడు)',
                                                                  nameEn: 'Bhīṣma Pitāmaha',
                                                                  role: 'పరమ భాగవతోత్తముడు • భీష్మస్తుతి',
                                                                  canto: 'స్కంధం 1.9',
                                                                  image: './images/bhagavatam/bhishma_ganga.jpg',
                                                                  color: 'blue',
                                                                  isSpecial: true
                                                                },
                                                                {
                                                                  id: 'vicitravirya-branch',
                                                                  name: 'సత్యవతి పుత్రులు (విచిత్రవీర్య, చిత్రాంగద)',
                                                                  nameEn: 'Vicitravīrya & Citrāṅgada',
                                                                  spouse: 'అంబిక & అంబాలిక',
                                                                  color: 'blue',
                                                                  children: [
                                                                    {
                                                                      id: 'dhrtarastra',
                                                                      name: 'ధృతరాష్ట్ర మహారాజు',
                                                                      nameEn: 'King Dhṛtarāṣṭra',
                                                                      spouse: 'గాంధారీ దేవి (Gāndhārī)',
                                                                      role: 'దుర్యోధనుడు, 99 మంది కౌరవులు & దుశ్శల',
                                                                      color: 'slate'
                                                                    },
                                                                    {
                                                                      id: 'vidura',
                                                                      name: 'మహాత్మా విదురుడు',
                                                                      nameEn: 'Mahātmā Vidura',
                                                                      role: 'ధర్మ స్వరూపుడు • మైత్రేయ సంవాదం',
                                                                      color: 'amber',
                                                                      isSpecial: true
                                                                    },
                                                                    {
                                                                      id: 'pandu',
                                                                      name: 'పాండురాజు',
                                                                      nameEn: 'King Pāṇḍu',
                                                                      spouse: 'కుంతీదేవి & మాద్రీదేవి',
                                                                      role: 'పంచపాండవుల తండ్రి',
                                                                      color: 'blue',
                                                                      children: [
                                                                        {
                                                                          id: 'pandavas-brothers',
                                                                          name: 'ధర్మరాజ, భీమ, నకుల, సహదేవులు',
                                                                          nameEn: 'Yudhiṣṭhira, Bhīma, Nakula, Sahadeva',
                                                                          role: 'ధర్మ సంస్థాపకులు (ధర్మరాజు 2, భీముడు 3, నకుల 2, సహదేవ 2 పుత్రులు)',
                                                                          color: 'blue'
                                                                        },
                                                                        {
                                                                          id: 'pandavas-arjuna',
                                                                          name: 'అర్జునుడు (గాండీవధారి)',
                                                                          nameEn: 'Arjuna & Pāṇḍavas',
                                                                          spouse: 'సుభద్ర & ద్రౌపది',
                                                                          role: 'నర నారాయణ సఖుడు • గీతా శ్రోత',
                                                                          image: './images/bhagavatam/pandavas_arjuna.jpg',
                                                                          color: 'blue',
                                                                          isSpecial: true,
                                                                          children: [
                                                                            {
                                                                              id: 'abhimanyu',
                                                                              name: 'అభిమన్యుడు',
                                                                              nameEn: 'Abhimanyu',
                                                                              spouse: 'ఉత్తరా దేవి (Uttarā)',
                                                                              role: 'కురుక్షేత్ర వీరుడు',
                                                                              color: 'blue',
                                                                              children: [
                                                                                {
                                                                                  id: 'pariksit',
                                                                                  name: 'పరీక్షిత్ మహారాజు',
                                                                                  nameEn: 'Mahārāja Parīkṣit',
                                                                                  role: 'భాగవత శ్రోత • శుకదేవ అనుగ్రహ మోక్షగామి',
                                                                                  canto: 'స్కంధం 1 & 12',
                                                                                  image: './images/bhagavatam/pariksit_sukadeva.jpg',
                                                                                  color: 'amber',
                                                                                  isSpecial: true,
                                                                                  children: [
                                                                                    {
                                                                                      id: 'janamejaya',
                                                                                      name: 'జనమేజయుడు & 3 సోదరులు',
                                                                                      nameEn: 'Janamejaya (Beginning of Kaliyuga)',
                                                                                      role: 'సర్పయాగ కర్త • కలియుగ ఆరంభం',
                                                                                      color: 'slate'
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },

                // ==========================================
                // BRANCH 2: SURYA VAMSA (సూర్య వంశము)
                // ==========================================
                {
                  id: 'surya-vamsa-root',
                  name: 'సూర్య వంశము',
                  nameEn: 'Sūrya Vamśa (Solar Dynasty)',
                  role: 'మరీచి, వివస్వాన్, వైవస్వత మనువు & రఘువంశం',
                  color: 'amber',
                  isSpecial: true,
                  children: [
                    {
                      id: 'vivasvan',
                      name: 'వివస్వాన్ (సూర్యభగవానుడు)',
                      nameEn: 'Vivasvān (Sun God)',
                      spouse: 'సంజ్ఞాదేవి & ఛాయాదేవి',
                      role: 'సూర్య వంశ మూలము • కశ్యప-అదితి పుత్రుడు',
                      color: 'amber',
                      isSpecial: true,
                      children: [
                        {
                          id: 'vaivasvata-manu',
                          name: 'వైవస్వత మనువు (శ్రద్ధాదేవుడు)',
                          nameEn: 'Vaivasvata Manu',
                          spouse: 'శ్రద్ధా దేవి (Śraddhā)',
                          role: 'ప్రస్తుత 7వ మన్వంతరాధిపతి',
                          canto: 'స్కంధం 8.13 & స్కంధం 9',
                          color: 'amber',
                          isSpecial: true,
                          children: [
                            {
                              id: 'ila-nrga',
                              name: 'ఇళా దేవి (సుద్యుమ్నుడు) & నృగుడు',
                              nameEn: 'Iḷā (Sudyumna) & Nṛga',
                              role: 'మనువు తొలి సంతతి',
                              color: 'slate'
                            },
                            {
                              id: 'saryati-branch',
                              name: 'శర్యాతి మహారాజు',
                              nameEn: 'King Śaryāti',
                              role: '2 కుమారులు',
                              color: 'slate',
                              children: [
                                {
                                  id: 'sukanya',
                                  name: 'సుకన్యా దేవి',
                                  nameEn: 'Sukanyā',
                                  spouse: 'చ్యవన మహర్షి (Cyavana Muni)',
                                  role: 'పాతివ్రత్య రక్షిత',
                                  color: 'amber'
                                }
                              ]
                            },
                            {
                              id: 'nabhaga-branch',
                              name: 'నాభాగుడు శాఖ',
                              nameEn: 'Nābhāga Lineage',
                              color: 'amber',
                              children: [
                                {
                                  id: 'ambarisa',
                                  name: 'అంబరీష మహారాజు',
                                  nameEn: 'Mahārāja Ambarīṣa',
                                  role: 'సుదర్శన చక్ర రక్షితుడు • ఏకాదశీ వ్రత సాధకుడు',
                                  canto: 'స్కంధం 9.4-5',
                                  image: './images/bhagavatam/ambarisa_maharaja.jpg',
                                  color: 'amber',
                                  isSpecial: true
                                }
                              ]
                            },
                            {
                              id: 'anarta-branch',
                              name: 'ఆనర్తుడు $\\rightarrow$ రేవతుడు',
                              nameEn: 'Ānarta $\\rightarrow$ Revata $\\rightarrow$ Kakudmī',
                              color: 'slate',
                              children: [
                                {
                                  id: 'revati',
                                  name: 'రేవతీ దేవి',
                                  nameEn: 'Revatī',
                                  spouse: 'భగవాన్ బలరాముడు (Lord Balarāma)',
                                  role: 'కకుద్మి పుత్రిక',
                                  color: 'gold'
                                }
                              ]
                            },
                            {
                              id: 'ikshvaku',
                              name: 'ఇక్ష్వాకు మహారాజు',
                              nameEn: 'Mahārāja Ikṣvāku',
                              role: 'అయోధ్యా సామ్రాజ్య స్థాపకుడు • ఇక్ష్వాకు వంశకర్త',
                              color: 'amber',
                              isSpecial: true,
                              children: [
                                // Sub-branch: Nimi & Janaka -> Sita
                                {
                                  id: 'nimi-janaka',
                                  name: 'నిమి శాఖ (విదేహ / జనక వంశము)',
                                  nameEn: 'Nimi $\\rightarrow$ King Janaka (Mithila)',
                                  role: 'మిథిలా రాజవంశం',
                                  color: 'crimson',
                                  children: [
                                    {
                                      id: 'siradhvaja',
                                      name: 'సీరధ్వజ జనక మహారాజు',
                                      nameEn: 'Śīradhvaja Janaka',
                                      role: 'నాగటి చాలున సీతాదేవిని పొందిన తండ్రి',
                                      color: 'amber',
                                      children: [
                                        {
                                          id: 'sita-devi',
                                          name: 'జానకీ సీతాదేవి',
                                          nameEn: 'Sītā Devī (Janakanandini)',
                                          spouse: 'శ్రీరామచంద్రుడు (Lord Rāma)',
                                          role: 'లక్ష్మీదేవి అవతారము • రఘుకుల తిలకుని రాణి',
                                          canto: 'స్కంధం 9.10-11',
                                          image: './images/bhagavatam/sita_devi.jpg',
                                          color: 'crimson',
                                          isSpecial: true
                                        }
                                      ]
                                    }
                                  ]
                                },
                                // Sub-branch: Mandhata -> Sagara -> Bhagiratha -> Rama
                                {
                                  id: 'mandhata-sagara',
                                  name: 'మాంధాత $\\rightarrow$ సత్య హరిశ్చంద్ర $\\rightarrow$ సగరుడు',
                                  nameEn: 'Māndhātā $\\rightarrow$ Hariścandra $\\rightarrow$ Sāgara',
                                  role: 'రోహితుడు, అంశుమంతుడు',
                                  color: 'amber',
                                  children: [
                                    {
                                      id: 'dilipa-bhagiratha',
                                      name: 'దిలీపుడు $\\rightarrow$ భగీరథ మహారాజు',
                                      nameEn: 'Dilīpa $\\rightarrow$ King Bhagīratha',
                                      color: 'amber',
                                      children: [
                                        {
                                          id: 'bhagiratha',
                                          name: 'భగీరథ మహారాజు',
                                          nameEn: 'King Bhagīratha',
                                          role: 'గంగావతరణ కారకుడు • 60,000 సగర పుత్రుల ఉద్ధారకుడు',
                                          canto: 'స్కంధం 9.9',
                                          image: './images/bhagavatam/bhagiratha.jpg',
                                          color: 'amber',
                                          isSpecial: true,
                                          children: [
                                            {
                                              id: 'khatvanga-raghu',
                                              name: 'ఖట్వాంగుడు $\\rightarrow$ రఘు చక్రవర్తి $\\rightarrow$ అజుడు',
                                              nameEn: 'Khaṭvāṅga $\\rightarrow$ Raghu $\\rightarrow$ Aja',
                                              role: 'రఘువంశ కీర్తిప్రదాతలు',
                                              color: 'amber',
                                              children: [
                                                {
                                                  id: 'dasaratha',
                                                  name: 'దశరథ మహారాజు',
                                                  nameEn: 'King Daśaratha',
                                                  spouse: 'కౌసల్య, కైకేయి, సుమిత్ర',
                                                  role: 'అయోధ్యా చక్రవర్తి • పుత్రకామేష్టి యాగకర్త',
                                                  color: 'gold',
                                                  children: [
                                                    {
                                                      id: 'lord-ramacandra',
                                                      name: 'మర్యాదా పురుషోత్తమ శ్రీరామచంద్రుడు',
                                                      nameEn: 'Lord Śrī Rāmacandra',
                                                      spouse: 'జానకీ సీతాదేవి (Sītā Devī)',
                                                      role: 'రఘుకుల తిలకుడు • ధర్మ రక్షకుడు • రావణ సంహారకుడు',
                                                      canto: 'స్కంధం 9.10-11',
                                                      image: './images/bhagavatam/lord_ramacandra.jpg',
                                                      color: 'gold',
                                                      isSpecial: true,
                                                      children: [
                                                        {
                                                          id: 'lava-kusa',
                                                          name: 'లవ-కుశులు',
                                                          nameEn: 'Lava & Kuśa',
                                                          role: 'వాల్మీకి ఆశ్రమ శిష్యులు • రామాయణ గాయకులు',
                                                          color: 'amber'
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      id: 'laksmana-brothers',
                                                      name: 'లక్ష్మణ, భరత, శత్రుఘ్నులు',
                                                      nameEn: 'Lakṣmaṇa, Bharata, Śatrughna',
                                                      role: 'శ్రీరామ దివ్య సోదరులు (ఆదిశేష, శంఖ, చక్ర అంశలు)',
                                                      color: 'amber'
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },

                // ==========================================
                // BRANCH 3: SVAYAMBHUVA MANU (స్వాయంభువ మను)
                // ==========================================
                {
                  id: 'manu-vamsa-root',
                  name: 'స్వాయంభువ మను వంశము',
                  nameEn: 'Svāyambhuva Manu Dynasty',
                  spouse: 'శతరూపా దేవి (Śatarūpā)',
                  role: 'ప్రథమ మానవ సృష్టి • ప్రియవ్రత & ఉత్తానపాదుల జనకుడు',
                  canto: 'స్కంధం 3 & 4',
                  color: 'green',
                  isSpecial: true,
                  children: [
                    // PRIYAVRATA
                    {
                      id: 'priyavrata',
                      name: 'ప్రియవ్రత మహారాజు',
                      nameEn: 'King Priyavrata',
                      spouse: 'బర్హిష్మతి (Barhiṣmatī)',
                      role: '7 ద్వీపాల పాలకులు, 3 మనువులు (ఉత్తమ, తామస, రేవత) & 3 సన్న్యాసులు',
                      color: 'green',
                      children: [
                        {
                          id: 'agnidhra',
                          name: 'ఆగ్నీధ్రుడు $\\rightarrow$ నాభిరాజు',
                          nameEn: 'Āgnīdhra $\\rightarrow$ King Nābhi',
                          spouse: 'మేరుదేవి (Merudevī)',
                          role: 'జంబూద్వీప పాలకులు',
                          color: 'green',
                          children: [
                            {
                              id: 'lord-rsabhadeva',
                              name: 'భగవాన్ ఋషభదేవుడు',
                              nameEn: 'Lord Ṛṣabhadeva',
                              spouse: 'జయంతీ దేవి (Jayantī)',
                              role: 'పరమహంస ధర్మ ప్రబోధకుడు • విష్ణు అవతారము • 100 మంది పుత్రులు',
                              canto: 'స్కంధం 5.3-6',
                              image: './images/bhagavatam/lord_rsabhadeva.jpg',
                              color: 'green',
                              isSpecial: true,
                              children: [
                                {
                                  id: 'king-bharata',
                                  name: 'భరత మహారాజు (జడభరతుడు)',
                                  nameEn: 'King Bharata (Jaḍa Bharata)',
                                  spouse: 'పంచజని (Pañcajanī)',
                                  role: 'భారతదేశ నామకారకుడు • త్రిజన్మ సిద్ధుడు • గయుని పూర్వికుడు',
                                  canto: 'స్కంధం 5.7-14',
                                  image: './images/bhagavatam/king_bharata.jpg',
                                  color: 'green',
                                  isSpecial: true
                                },
                                {
                                  id: 'ninety-brothers',
                                  name: '90 మంది సోదరులు & 9 మంది యోగేంద్రులు',
                                  nameEn: '90 Sons & 9 Yogendrās (Kavi, Hari, etc.)',
                                  role: 'భాగవత ధర్మ ప్రచారకులు',
                                  color: 'green'
                                },
                                {
                                  id: 'barhisat-pracetas',
                                  name: 'బర్హిషత్ (ప్రాచీనబర్హి) $\\rightarrow$ 10 మంది ప్రాచేతసులు',
                                  nameEn: 'Barhiṣat $\\rightarrow$ 10 Pracetās',
                                  spouse: 'మారిష (Māriṣā)',
                                  role: 'సముద్రంలో వేయి సంవత్సరాల తపస్సు',
                                  color: 'green',
                                  children: [
                                    {
                                      id: 'daksha',
                                      name: 'దక్ష ప్రజాపతి (ప్రాచేతస దక్షుడు)',
                                      nameEn: 'Daksha Prajāpati',
                                      spouse: 'అసిక్ని (Asiknī)',
                                      role: 'సృష్టి విస్తారకుడు',
                                      canto: 'స్కంధం 4 & 6',
                                      image: './images/bhagavatam/daksha_prajapati.jpg',
                                      color: 'green',
                                      isSpecial: true,
                                      children: [
                                        {
                                          id: 'daksha-daughters',
                                          name: '60 మంది కన్యలు',
                                          nameEn: '60 Daughters of Dakṣa',
                                          role: 'కశ్యప, ధర్మ, చంద్రులకు సమర్పణ • సమస్త జీవకోటి మాతలు',
                                          color: 'amber'
                                        },
                                        {
                                          id: 'haryasva-savalasva',
                                          name: '10,000 హర్యశ్వులు + 10,000 శబలాశ్వులు',
                                          nameEn: '10,000 Haryaśvas & Savalāśvas',
                                          role: 'నారదోపదేశంతో సన్న్యాసం పొందిన బ్రహ్మచారులు',
                                          color: 'slate'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    // UTTANAPADA
                    {
                      id: 'uttanapada',
                      name: 'ఉత్తానపాద మహారాజు',
                      nameEn: 'King Uttānapāda',
                      spouse: 'సునీతి (Sunīti) & సురుచి (Suruci)',
                      role: 'ధ్రువుడు & ఉత్తముని తండ్రి',
                      color: 'amber',
                      children: [
                        {
                          id: 'dhruva',
                          name: 'ధ్రువ మహారాజు',
                          nameEn: 'Dhruva Mahārāja',
                          spouse: 'బ్రాహ్మి & ఇలా',
                          role: 'ధ్రువ మండల అధిపతి • అచంచల భక్తి సాధకుడు • వత్సర & ఉత్కలుల తండ్రి',
                          canto: 'స్కంధం 4.8-12',
                          image: './images/bhagavatam/dhruva_maharaja.jpg',
                          color: 'amber',
                          isSpecial: true,
                          children: [
                            {
                              id: 'caksusa-manu-line',
                              name: 'పుష్పార్ణ $\\rightarrow$ వ్యుష్ట $\\rightarrow$ చాక్షుష మనువు (6వ మనువు)',
                              nameEn: 'Puṣpārṇa $\\rightarrow$ Vyuṣṭa $\\rightarrow$ Cākṣuṣa Manu',
                              role: 'ఉల్ముకుడు $\\rightarrow$ అంగుడు & సునీథ',
                              color: 'amber',
                              children: [
                                {
                                  id: 'vena-king',
                                  name: 'వేన మహారాజు (మథన లీల)',
                                  nameEn: 'King Vena (Churned by sages)',
                                  role: 'తొడల నుండి నిషాదుడు (పాప జాతి)',
                                  color: 'crimson',
                                  children: [
                                    {
                                      id: 'king-prthu',
                                      name: 'పృథు చక్రవర్తి',
                                      nameEn: 'King Pṛthu',
                                      spouse: 'అర్చి దేవి (Arci)',
                                      role: 'భూమిని దోహనం చేసిన ఆదిరాజు • విష్ణు శక్త్యావేశావతారము',
                                      canto: 'స్కంధం 4.15-23',
                                      image: './images/bhagavatam/king_prthu.jpg',
                                      color: 'amber',
                                      isSpecial: true,
                                      children: [
                                        {
                                          id: 'vijitasva',
                                          name: 'విజితాశ్వుడు (అంతర్ధానుడు) + 4 సోదరులు',
                                          nameEn: 'Vijitāśva & 4 Brothers',
                                          role: 'హవిర్ధానుడు $\\rightarrow$ ప్రాచేతసులు',
                                          color: 'slate'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    // AKUTI
                    {
                      id: 'akuti',
                      name: 'ఆకూతి దేవి',
                      nameEn: 'Ākūti Devī',
                      spouse: 'రుచి ప్రజాపతి (Ruci Prajāpati)',
                      role: 'మనువు ప్రథమ పుత్రిక',
                      color: 'slate',
                      children: [
                        {
                          id: 'daksina-yajna',
                          name: 'యజ్ఞుడు & దక్షిణా దేవి',
                          nameEn: 'Yajña (Hari Avatara) & Dakṣiṇā',
                          role: 'శ్రీహరి యజ్ఞావతారము',
                          color: 'amber',
                          isSpecial: true
                        }
                      ]
                    },
                    // PRASUTI
                    {
                      id: 'prasuti',
                      name: 'ప్రసూతి దేవి',
                      nameEn: 'Prasūti Devī',
                      spouse: 'దక్ష ప్రజాపతి (Daksha)',
                      role: '16 మంది కన్యల మాత',
                      color: 'slate',
                      children: [
                        {
                          id: 'sati-devi',
                          name: 'సతీదేవి (దాక్షాయణి)',
                          nameEn: 'Satī Devī',
                          spouse: 'పరమశివుడు (Lord Śiva)',
                          role: 'దక్షయజ్ఞంలో దేహత్యాగం చేసిన ఆదిశక్తి',
                          color: 'purple',
                          isSpecial: true
                        },
                        {
                          id: 'murti-dharma',
                          name: 'మూర్తి దేవి',
                          nameEn: 'Mūrti Devī',
                          spouse: 'ధర్మ ప్రజాపతి (Dharma)',
                          color: 'amber',
                          children: [
                            {
                              id: 'nara-narayana',
                              name: 'శ్రీ నర-నారాయణ ఋషులు',
                              nameEn: 'Śrī Nara-Nārāyaṇa Ṛṣis',
                              role: 'బదరీవన తపస్వులు • ఊర్వశీ సృష్టికర్తలు • కృష్ణార్జునుల మూలరూపం',
                              canto: 'స్కంధం 4.1 & 11',
                              image: './images/bhagavatam/nara_narayana.jpg',
                              color: 'amber',
                              isSpecial: true
                            }
                          ]
                        },
                        {
                          id: 'other-daughters-prasuti',
                          name: 'స్వాహా (అగ్ని), స్వధా (పితృలు) & 12 కన్యలు',
                          nameEn: 'Svāhā (Agni), Svadhā (Pitṛs) & 12 others',
                          role: 'ధర్మ ప్రజాపతి పత్నులు',
                          color: 'slate'
                        }
                      ]
                    },
                    // DEVAHUTI
                    {
                      id: 'devahuti',
                      name: 'దేవహూతి దేవి',
                      nameEn: 'Devahūti Devī',
                      spouse: 'కర్దమ ప్రజాపతి (Kardama Muni)',
                      role: 'భగవాన్ కపిల & 9 మంది కన్యల మాత',
                      color: 'purple',
                      isSpecial: true,
                      children: [
                        {
                          id: 'lord-kapila',
                          name: 'భగవాన్ కపిల మహర్షి',
                          nameEn: 'Lord Kapila',
                          role: 'సాంఖ్య యోగ ప్రవర్తకుడు • విష్ణు అవతారము',
                          canto: 'స్కంధం 3.25-33',
                          image: './images/bhagavatam/lord_kapila.jpg',
                          color: 'purple',
                          isSpecial: true
                        },
                        {
                          id: 'anasuya-branch',
                          name: 'అనసూయా దేవి (అత్రి పత్ని)',
                          nameEn: 'Anasūyā (Wife of Sage Atri)',
                          role: 'పాతివ్రత్య శిఖామణి',
                          color: 'purple',
                          children: [
                            {
                              id: 'lord-dattatreya',
                              name: 'శ్రీ గురు దత్తాత్రేయుడు',
                              nameEn: 'Lord Dattātreya',
                              role: 'త్రిమూర్త్యాత్మక అవధూత గురువు • విష్ణు అంశావతారము',
                              canto: 'స్కంధం 4 & 11',
                              image: './images/bhagavatam/lord_dattatreya.jpg',
                              color: 'purple',
                              isSpecial: true
                            },
                            {
                              id: 'durvasa-muni',
                              name: 'దుర్వాస మహర్షి',
                              nameEn: 'Durvāsā Muni',
                              role: 'రుద్ర అంశ సంభూతుడు • మహాతపస్వి',
                              canto: 'స్కంధం 4 & 9',
                              image: './images/bhagavatam/durvasa_muni.jpg',
                              color: 'crimson',
                              isSpecial: true
                            }
                          ]
                        },
                        {
                          id: 'kala-branch',
                          name: 'కళా దేవి (మరీచి పత్ని)',
                          nameEn: 'Kalā (Wife of Sage Marīci)',
                          role: 'కశ్యప ప్రజాపతి & పూర్ణిమల మాత',
                          color: 'amber'
                        },
                        {
                          id: 'seven-sisters',
                          name: 'శ్రద్ధ, హవిర్భూ, గతి, క్రియ, అరుంధతి, తితిక్ష, శాంతి',
                          nameEn: '7 Other Daughters (Arundhatī, etc.)',
                          role: 'సప్తర్షుల పత్నులు',
                          color: 'slate'
                        }
                      ]
                    }
                  ]
                },

                // ==========================================
                // BRANCH 4: ASURA & PRAHLADA (దైత్య & భక్త)
                // ==========================================
                {
                  id: 'asura-vamsa-root',
                  name: 'దైత్య & భక్త శాఖ',
                  nameEn: 'Prahlāda & Asura Dynasty',
                  role: 'కశ్యప & దితి దంపతుల సంతతి',
                  color: 'crimson',
                  isSpecial: true,
                  children: [
                    {
                      id: 'maruts-hiranyaksa',
                      name: 'మరుత్తులు (49) & హిరణ్యాక్షుడు',
                      nameEn: 'Maruts (49) & Hiraṇyākṣa',
                      role: 'వరాహావతార లీల',
                      color: 'slate'
                    },
                    {
                      id: 'hiranyakasipu',
                      name: 'హిరణ్యకశిపుడు',
                      nameEn: 'King Hiraṇyakaśipu',
                      spouse: 'కయాధు (Kayādhu)',
                      role: 'నరసింహ లీలా పాత్రుడు',
                      color: 'crimson',
                      children: [
                        {
                          id: 'prahlada',
                          name: 'భక్త ప్రహ్లాద మహారాజు',
                          nameEn: 'Prahlāda Mahārāja',
                          role: 'పరమ భాగవతోత్తముడు • నరసింహ అనుగ్రహ పాత్రుడు',
                          canto: 'స్కంధం 7',
                          image: './images/bhagavatam/prahlada_maharaja.jpg',
                          color: 'amber',
                          isSpecial: true,
                          children: [
                            {
                              id: 'virocana',
                              name: 'విరోచనుడు',
                              nameEn: 'Virocana',
                              color: 'crimson',
                              children: [
                                {
                                  id: 'bali',
                                  name: 'బలి చక్రవర్తి',
                                  nameEn: 'Bali Mahārāja',
                                  spouse: 'వింధ్యావళి (Vindhyāvalī)',
                                  role: 'సుతల లోకాధిపతి • త్రైలోక్య దాత',
                                  canto: 'స్కంధం 8.18-23',
                                  image: './images/bhagavatam/bali_maharaja.jpg',
                                  color: 'amber',
                                  isSpecial: true,
                                  children: [
                                    {
                                      id: 'bana',
                                      name: 'బాణాసురుడు + 99 మంది సోదరులు',
                                      nameEn: 'Bāṇāsura & 99 Others',
                                      role: 'ఉషా-అనిరుద్ధ లీల',
                                      color: 'crimson'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 'vamana-deva',
                      name: 'భగవాన్ వామన దేవుడు',
                      nameEn: 'Lord Vāmana Deva (Trivikrama)',
                      role: 'కశ్యప-అదితి పుత్రుడు • ఉపేంద్రుడు • త్రివిక్రమ మూర్తి',
                      canto: 'స్కంధం 8.18-21',
                      image: './images/bhagavatam/vaman_deva.jpg',
                      color: 'amber',
                      isSpecial: true
                    }
                  ]
                },

                // ==========================================
                // BRANCH 5: RISHIS & GURUS (ఋషి పరంపర)
                // ==========================================
                {
                  id: 'rishis-vamsa-root',
                  name: 'ఋషి & గురు పరంపర',
                  nameEn: 'Rishi & Guru Parampara',
                  role: 'వ్యాస, శుకదేవ, బృహస్పతి & ఋషుల దివ్య పరంపర',
                  color: 'purple',
                  isSpecial: true,
                  children: [
                    {
                      id: 'four-kumaras',
                      name: 'సనకాది నలుగురు కుమారులు',
                      nameEn: 'The Four Kumāras',
                      role: 'సనక, సనాతన, సనందన, సనత్కుమారులు • నిత్య బాల బ్రహ్మచారులు',
                      canto: 'స్కంధం 3, 4, 7',
                      image: './images/bhagavatam/four_kumaras.jpg',
                      color: 'purple',
                      isSpecial: true
                    },
                    {
                      id: 'vasistha-branch',
                      name: 'వసిష్ఠ మహర్షి పరంపర (10,000 పుత్రులు)',
                      nameEn: 'Vasiṣṭha Lineage (10,000 Sons)',
                      role: 'శక్తి మహర్షి $\\rightarrow$ పరాశరుడు',
                      color: 'purple',
                      children: [
                        {
                          id: 'veda-vyasa',
                          name: 'శ్రీకృష్ణ ద్వైపాయన వేదవ్యాస మహర్షి',
                          nameEn: 'Śrīla Kṛṣṇa Dvaipāyana Veda Vyāsa',
                          role: 'వేద విభజకుడు • భాగవత గ్రంథకర్త • విష్ణు అవతారము',
                          canto: 'స్కంధం 1.4-7',
                          image: './images/bhagavatam/veda_vyasa.jpg',
                          color: 'purple',
                          isSpecial: true,
                          children: [
                            {
                              id: 'sukadeva',
                              name: 'శ్రీ శుకదేవ గోస్వామి',
                              nameEn: 'Śrī Śukadeva Goswāmī',
                              role: 'శ్రీమద్భాగవత ప్రథమ వక్త • నిత్య ముక్తుడు',
                              canto: 'స్కంధం 1 & 12',
                              image: './images/bhagavatam/sukadeva_goswami.jpg',
                              color: 'purple',
                              isSpecial: true
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 'angira-branch',
                      name: 'అంగీరస మహర్షి శాఖ',
                      nameEn: 'Aṅgira Sage Lineage',
                      role: 'బృహస్పతి, ఉతథ్యుడు & భరద్వాజుడు',
                      color: 'slate',
                      children: [
                        {
                          id: 'brhaspati',
                          name: 'బృహస్పతి (దేవగురువు)',
                          nameEn: 'Bṛhaspati (Guru of Demigods)',
                          role: 'జ్ఞాన ప్రదాత',
                          color: 'amber'
                        },
                        {
                          id: 'drona-line',
                          name: 'ద్రోణాచార్యుడు & కృపి',
                          nameEn: 'Droṇācārya & Kṛpī',
                          role: 'పుత్రుడు: అశ్వత్థామ (Aśvatthāmā)',
                          color: 'crimson'
                        },
                        {
                          id: 'krpacarya',
                          name: 'శరద్వానుడు $\\rightarrow$ కృపాచార్యుడు',
                          nameEn: 'Śaradvān $\\rightarrow$ Kṛpācārya',
                          role: 'కౌరవ-పాండవ రాజగురువు',
                          color: 'slate'
                        }
                      ]
                    },
                    {
                      id: 'bhrigu-branch',
                      name: 'భృగు మహర్షి శాఖ',
                      nameEn: 'Bhṛgu Sage Lineage',
                      role: 'శుక్రాచార్యుడు, చ్యవనుడు, మార్కండేయుడు, దధీచి',
                      color: 'slate',
                      children: [
                        {
                          id: 'sukracarya',
                          name: 'శుక్రాచార్యుడు (అసురగురువు)',
                          nameEn: 'Śukrācārya (Guru of Asuras)',
                          role: 'సంజీవనీ విద్యా ప్రదాత • పుత్రిక: దేవయాని (యయాతి పత్ని)',
                          color: 'amber'
                        },
                        {
                          id: 'markandeya-dadhici',
                          name: 'మార్కండేయుడు & దధీచి మహర్షి',
                          nameEn: 'Mārkaṇḍeya & Dadhīci Muni',
                          role: 'అథర్వుని పరంపర • చిరంజీవులు • అస్థి దానశీలి',
                          color: 'purple',
                          isSpecial: true
                        }
                      ]
                    },
                    {
                      id: 'pulastya-branch',
                      name: 'పులస్త్య మహర్షి శాఖ',
                      nameEn: 'Pulastya Sage Lineage',
                      role: 'విశ్రవసుడు & అగస్త్యుడు',
                      color: 'crimson',
                      children: [
                        {
                          id: 'ravana',
                          name: 'రావణాసురుడు (లంకేశ్వరుడు)',
                          nameEn: 'Rāvaṇa (King of Laṅkā)',
                          role: 'విశ్రవస-కైకసిల పుత్రుడు • ఇంద్రజిత్తు, కుంభకర్ణ, విభీషణ, శూర్పణఖ',
                          canto: 'స్కంధం 7 & 9',
                          image: './images/bhagavatam/ravana_lanka.jpg',
                          color: 'crimson'
                        },
                        {
                          id: 'kubera',
                          name: 'కుబేరుడు (యక్షరాజ)',
                          nameEn: 'Kuber (Lord of Wealth)',
                          role: 'విశ్రవస-ఇడావిడల పుత్రుడు • ఉత్తర దిక్పాలకుడు',
                          color: 'amber'
                        }
                      ]
                    },
                    {
                      id: 'other-prajapatis',
                      name: 'పులహ, క్రతు, ఆత్రేయ మహర్షులు',
                      nameEn: 'Pulaha, Kratu, Ātreya Munis',
                      role: 'బ్రహ్మ మానసపుత్రులు • ప్రజాపతులు',
                      color: 'slate'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


export interface BhagavatamNode {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  branch: 'cosmic' | 'chandra' | 'surya' | 'manu' | 'asura' | 'rishis';
  parents?: string[];
  spouse?: string;
  children?: string[];
  image?: string;
  canto?: string;
  description: string;
  descriptionEn: string;
  highlight?: boolean;
}

export const BHAGAVATAM_NODES: BhagavatamNode[] = [
  {
    id: 'parabrahma',
    name: 'పరబ్రహ్మ',
    nameEn: 'Parabrahma (Supreme Brahman)',
    title: 'ఏకైక పరమాత్మ • సృష్టి మూలకారకుడు',
    titleEn: 'The One Supreme Reality • Ultimate Source of All Creation',
    branch: 'cosmic',
    image: './images/divine/parabrahma.jpg',
    canto: 'సకల సృష్టి మూలతత్త్వం • నాసదీయ సూక్తం',
    description: 'సృష్టికి పూర్వము, సృష్టి సమయమున, సృష్టి లయమైన పిదప కూడా నిత్యముగా వెలుగొందే పరమ చైతన్యము. నిరాకార, నిర్గుణ, సర్వవ్యాపక పరతత్త్వము. సమస్త విశ్వానికి, అవతారములకు, జీవులకు మూలాధారమైన పరమాత్మ.',
    descriptionEn: 'The unmanifest, formless, timeless, and boundless absolute consciousness. Source from which the entire cosmos springs forth, exists, and into which it dissolves.',
    highlight: true
  },
  {
    id: 'krsna-supreme',
    name: 'శ్రీకృష్ణ పరబ్రహ్మ',
    nameEn: 'Lord Kṛṣṇa (The Supreme)',
    title: 'సర్వకారణ కారణుడు • భగవాన్ స్వయం',
    titleEn: 'The Supreme Personality of Godhead',
    branch: 'cosmic',
    image: './images/bhagavatam/krsna_supreme.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 3.28',
    description: '"ఏతే చాంశకలాః పుంసః కృష్ణస్తు భగవాన్ స్వయమ్" - సర్వ జగత్తులకు, సమస్త అవతారములకు మూల పరమాత్మ. శ్రీమద్భాగవత వంశవృక్షానికి ఆదిశక్తి.',
    descriptionEn: '"krsnas tu bhagavan svayam" - Srimad Bhagavatam 1.3.28. The primeval source of all creation, universes, and incarnations.',
    highlight: true
  },
  {
    id: 'mahavishnu',
    name: 'శ్రీ మహావిష్ణువు (కారణోదకశాయి)',
    nameEn: 'Mahāviṣṇu (Kāraṇodakaśāyī)',
    title: 'కారణ సాగర శయనుడు • ప్రథమ పురుషావతారము',
    titleEn: 'First Purusha Avatara resting on Causal Ocean',
    branch: 'cosmic',
    image: './images/bhagavatam/mahavishnu_karanodaka.jpg',
    canto: 'స్కంధం 2 & 3',
    description: 'కారణోదక సముద్రంలో యోగనిద్రలో ఉండే మొదటి పురుషావతారము. ఆయన ప్రతి శ్వాసలోనుండి అనంత కోటి బ్రహ్మాండములు ఉద్భవిస్తాయి.',
    descriptionEn: 'The First Purusa Avatara resting in the causal ocean, from whose skin pores countess cosmic universes emanate with each exhalation.',
    highlight: true
  },
  {
    id: 'garbhodakasayi-vishnu',
    name: 'గర్భోదకశాయి విష్ణువు',
    nameEn: 'Garbhodakaśāyī Viṣṇu',
    title: 'ద్వితీయ పురుషావతారము • బ్రహ్మాండ పాలకుడు',
    titleEn: 'Second Purusha Avatara inside each universe',
    branch: 'cosmic',
    image: './images/bhagavatam/garbhodakasayi_vishnu.jpg',
    canto: 'స్కంధం 2 & 3',
    description: 'ప్రతి విశ్వ గర్భోదక సాగరంలో శేషతల్పంపై శయనించే ప్రభువు. ఆయన నాభి కమలం నుండి చతుర్ముఖ బ్రహ్మ ఆవిర్భవించారు.',
    descriptionEn: 'The Second Purusa Avatara entered into each individual universe, from whose lotus navel Lord Brahma appeared.',
    highlight: true
  },
  {
    id: 'brahma',
    name: 'చతుర్ముఖ బ్రహ్మదేవుడు',
    nameEn: 'Lord Brahmā',
    title: 'సృష్టికర్త • వేద ప్రదాత',
    titleEn: 'Cosmic Creator & Giver of the Vedas',
    branch: 'cosmic',
    image: './images/bhagavatam/brahma_lotus.jpg',
    canto: 'స్కంధం 2, 3, 4',
    description: 'శ్రీహరి నాభికమలం నుండి ఉద్భవించిన సృష్టికర్త. తపస్సు ద్వారా దివ్యజ్ఞానం పొంది, ఋషులు, మనువులు, ప్రజాపతులను సృష్టించి విశ్వవంశవృక్షాన్ని విస్తరించారు.',
    descriptionEn: 'Born from the lotus stemming from Garbhodakasayi Vishnu. Empowered by penance and Vedic knowledge to generate the secondary creation.',
    highlight: true
  },
  {
    id: 'atri',
    name: 'అత్రి మహర్షి',
    nameEn: 'Atri Maharṣi',
    title: 'బ్రహ్మ మానస పుత్రుడు • సప్తర్షులలో ఒకరు',
    titleEn: 'Mind-born Son of Brahma',
    branch: 'chandra',
    spouse: 'అనసూయ (Anasūyā)',
    canto: 'స్కంధం 4, అధ్యాయం 1',
    description: 'బ్రహ్మ నేత్రాల నుండి జన్మించిన తపస్వి. అనసూయాదేవి భర్త. చంద్రుడు, దత్తాత్రేయుడు, దుర్వాసుడు వీరి పుత్రులు.',
    descriptionEn: 'Mind-born son of Brahma, husband of Anasuya; father of Soma (Chandra), Dattatreya, and Durvasa.'
  },
  {
    id: 'soma',
    name: 'సోముడు (చంద్ర దేవుడు)',
    nameEn: 'Soma (Chandra Deva)',
    title: 'చంద్ర వంశ మూలపురుషుడు • నక్షత్ర పాలకుడు',
    titleEn: 'Founder of the Lunar Dynasty (Chandra Vamśa)',
    branch: 'chandra',
    canto: 'స్కంధం 9, అధ్యాయం 14',
    description: 'అత్రి-అనసూయల కుమారుడు. ఓషధుల అధిపతి. చంద్ర వంశానికి మూలకారణుడు.',
    descriptionEn: 'Son of Atri and Anasuya; ruler of medicinal herbs and founder of the celebrated Chandra Vamsha.'
  },
  {
    id: 'budha',
    name: 'బుధుడు',
    nameEn: 'Budha',
    title: 'జ్ఞాన కారకుడు • గ్రహాధిపతి',
    titleEn: 'Son of Soma (Planetary deity Mercury)',
    branch: 'chandra',
    spouse: 'ఇళా (Iḷā)',
    canto: 'స్కంధం 9, అధ్యాయం 14',
    description: 'సోముడి పుత్రుడు. వైవస్వత మనువు పుత్రికయైన ఇళను వివాహమాడి పురూరవునికి జన్మనిచ్చాడు.',
    descriptionEn: 'Son of Soma and father of Pururava with Ila.'
  },
  {
    id: 'pururava',
    name: 'పురూరవుడు',
    nameEn: 'Purūrava',
    title: 'చంద్రవంశ చక్రవర్తి • ఊర్వశీ ప్రియుడు',
    titleEn: 'Emperor of Chandra Dynasty',
    branch: 'chandra',
    spouse: 'ఊర్వశి (Urvaśī)',
    canto: 'స్కంధం 9, అధ్యాయం 14-15',
    description: 'దివ్య అప్సరస ఊర్వశితో ప్రణయగాథ కలవాడు. ఇతని కుమారుడు ఆయువు, విజయ.',
    descriptionEn: 'Famed emperor united with the celestial nymph Urvasi; father of Ayu and Vijaya.'
  },
  {
    id: 'parasurama',
    name: 'శ్రీ పరశురాముడు',
    nameEn: 'Lord Paraśurāma',
    title: 'భార్గవ రాముడు • శ్రీహరి అవతారము',
    titleEn: 'Avatara of Vishnu (Son of Jamadagni)',
    branch: 'chandra',
    image: './images/bhagavatam/parasurama.jpg',
    canto: 'స్కంధం 9, అధ్యాయం 15-16',
    description: 'గాధి వంశంలో జమదగ్ని-రేణుకలకు జన్మించిన విష్ణు అవతారము. భూమిపై దుష్ట క్షత్రియ రాజులను 21 సార్లు నిర్మూలించిన పరమ తపస్వి.',
    descriptionEn: 'Incarnation of Sri Hari appearing in the lineage of Bhrigu-Richika-Jamadagni to rid the earth of oppressive tyrannical rulers.',
    highlight: true
  },
  {
    id: 'lord-krsna-leela',
    name: 'భగవాన్ శ్రీకృష్ణుడు',
    nameEn: 'Lord Śrī Kṛṣṇa',
    title: 'యదునందనుడు • ద్వారకాధీశుడు',
    titleEn: 'The Supreme Lord descended in Yadu Dynasty',
    branch: 'chandra',
    image: './images/bhagavatam/lord_krsna_leela.jpg',
    canto: 'స్కంధం 10 (దశమ స్కంధం సంపూర్ణము)',
    description: 'వసుదేవ-దేవకీల పుత్రునిగా, యశోదా-నందుల గారాలబిడ్డగా ధర్మసంస్థాపనకై అవతరించిన లీలామానుష విగ్రహుడు. శ్రీమద్భాగవత హృదయం.',
    descriptionEn: 'Appeared in the Yadu dynasty as the son of Vasudeva and Devaki; hero of the entire Tenth Canto of Srimad Bhagavatam.',
    highlight: true
  },
  {
    id: 'lord-balarama',
    name: 'భగవాన్ బలరాముడు',
    nameEn: 'Lord Balarāma',
    title: 'శ్రీహరి ప్రథమ విస్తరణ • హలాధరుడు',
    titleEn: 'Supreme elder brother & Ananta Sesha expansion',
    branch: 'chandra',
    image: './images/bhagavatam/lord_balarama.jpg',
    canto: 'స్కంధం 10',
    description: 'శ్రీకృష్ణుని అన్నగారు, ఆదిశేషుని పూర్ణావతారము. రేవతీపతి. దుష్టశిక్షణలో కృష్ణునికి అండగా నిలిచిన బలశాలి.',
    descriptionEn: 'The elder brother of Krishna, divine incarnation of Sankarshana/Ananta Sesha, bearer of the plow.',
    highlight: true
  },
  {
    id: 'bhishma',
    name: 'గంగాపుత్ర భీష్ముడు',
    nameEn: 'Bhīṣma Pitāmaha',
    title: 'శంతనుని పుత్రుడు • పరమ భాగవతోత్తముడు',
    titleEn: 'Son of Santanu & Ganga, Master of Dharma',
    branch: 'chandra',
    image: './images/bhagavatam/bhishma_ganga.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 9',
    description: 'శ్రీమద్భాగవతం 1వ స్కంధంలో భీష్మస్తుతి జగత్ ప్రసిద్ధి. అంపశయ్యపై శ్రీకృష్ణుని ఎదుట శరీరమును త్యజించిన మహాభక్తుడు.',
    descriptionEn: 'Revered elder of the Kurus who recited the transcendental Bhishma-stuti before Lord Krishna at Kurukshetra.',
    highlight: true
  },
  {
    id: 'draupadi',
    name: 'ద్రౌపదీ దేవి (పాంచాలి)',
    nameEn: 'Draupadī Devī',
    title: 'పాండవ పత్ని • అక్షయపాత్ర్రధారిణి • అనన్య శరణాగతి',
    titleEn: 'Heroine of Mahabharata & Supreme surrender',
    branch: 'chandra',
    image: './images/bhagavatam/draupadi_vastra.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 8, 15',
    description: 'కౌరవ సభలో మానభంగం వేళ "గోవిందా ద్వారకావాసిన్" అని శ్రీకృష్ణునికి సమర్పించిన అద్భుత శరణాగతి భాగవతంలో భక్తికి పరాకాష్ట.',
    descriptionEn: 'Embodiment of utter surrender to Sri Krishna during the vastra-harana assembly.',
    highlight: true
  },
  {
    id: 'pandavas-arjuna',
    name: 'పాండవులు & అర్జునుడు',
    nameEn: 'Pāṇḍavas & Arjuna',
    title: 'ధర్మరాజు, భీమ, అర్జున, నకుల, సహదేవులు',
    titleEn: 'Five Pandava Brothers; Krishna\'s eternal friends',
    branch: 'chandra',
    image: './images/bhagavatam/pandavas_arjuna.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 7-15',
    description: 'శ్రీకృష్ణుని ప్రియభక్తులు. కురుక్షేత్ర రణరంగంలో గీతోపదేశం పొందిన నర-నారాయణ తత్త్వాలు.',
    descriptionEn: 'Righteous sons of Pandu and Kunti; intimate eternal companions of Lord Krishna who upheld Dharma.',
    highlight: true
  },
  {
    id: 'pariksit',
    name: 'పరీక్షిత్ మహారాజు & శుకదేవుడు',
    nameEn: 'Mahārāja Parīkṣit & Śukadeva',
    title: 'భాగవత శ్రోత • అభిమన్యుని పుత్రుడు',
    titleEn: 'Listener of Srimad Bhagavatam & King of Hastinapura',
    branch: 'chandra',
    image: './images/bhagavatam/pariksit_sukadeva.jpg',
    canto: 'స్కంధం 1 & స్కంధం 12',
    description: 'గంగా తీరంలో శుకదేవ మహర్షి నుండి 7 రోజులు శ్రీమద్భాగవతాన్ని విని తరించిన మోక్షగామి. భాగవత ఆవిర్భావానికి ప్రధాన హేతువు.',
    descriptionEn: 'Grandson of Arjuna who sat on the bank of the Ganges for 7 days fasting unto death while drinking the nectar of Bhagavatam from Sukadeva.',
    highlight: true
  },
  {
    id: 'vivasvan',
    name: 'వివస్వాన్ (సూర్యదేవుడు)',
    nameEn: 'Vivasvān (The Sun God)',
    title: 'సూర్య వంశ మూలకారకుడు • కశ్యప-అదితి పుత్రుడు',
    titleEn: 'Father of Vaivasvata Manu; Root of Solar Dynasty',
    branch: 'surya',
    canto: 'స్కంధం 9, అధ్యాయం 1',
    description: 'కశ్యప ప్రజాపతి మరియు అదితిల పుత్రుడు. భగవద్గీతలో ప్రథమంగా యోగాన్ని ఉపదేశం పొందినవాడు. సూర్యవంశ ఆద్యుడు.',
    descriptionEn: 'Son of Kashyapa and Aditi; received the eternal science of yoga first and gave rise to the Solar Dynasty.'
  },
  {
    id: 'vaivasvata-manu',
    name: 'వైవస్వత మనువు',
    nameEn: 'Vaivasvata Manu',
    title: 'ప్రస్తుత 7వ మన్వంతరాధిపతి (శ్రద్ధాదేవుడు)',
    titleEn: 'Current 7th Manu of our Cosmic Era',
    branch: 'surya',
    canto: 'స్కంధం 8, అధ్యాయం 13 & స్కంధం 9',
    description: 'మత్స్యావతారంచే రక్షింపబడిన సత్యవ్రత మహారాజు. ప్రస్తుత శ్వేతవరాహ కల్పంలోని 7వ మన్వంతరానికి అధిపతి. ఇతని కుమారుడే ఇక్ష్వాకు.',
    descriptionEn: 'Formerly King Satyavrata, preserved by Matsya Avatara; the ruler of our current seventh Manvantara.'
  },
  {
    id: 'ikshvaku',
    name: 'ఇక్ష్వాకు మహారాజు',
    nameEn: 'Mahārāja Ikṣvāku',
    title: 'అయోధ్యా సింహాసనాధీశుడు • ఇక్ష్వాకు వంశకర్త',
    titleEn: 'Founder of the Ikshvaku dynasty at Ayodhya',
    branch: 'surya',
    canto: 'స్కంధం 9, అధ్యాయం 6',
    description: 'వైవస్వత మనువు తుమ్ము నుండి ఆవిర్భవించిన ప్రతాపశాలి. అయోధ్యను రాజధానిగా చేసి ఇక్ష్వాకు వంశాన్ని స్థాపించాడు.',
    descriptionEn: 'Eldest son of Vaivasvata Manu who made Ayodhya his capital and established the dynasty in which Sri Rama appeared.'
  },
  {
    id: 'ambarisa',
    name: 'అంబరీష మహారాజు',
    nameEn: 'Mahārāja Ambarīṣa',
    title: 'సుదర్శన చక్ర రక్షితుడు • ఏకాదశీ వ్రత సాధకుడు',
    titleEn: 'Foremost Vaishnava King protected by Sudarshana',
    branch: 'surya',
    image: './images/bhagavatam/ambarisa_maharaja.jpg',
    canto: 'స్కంధం 9, అధ్యాయం 4-5',
    description: 'దుర్వాస మహర్షి కోపానికి గురైనప్పుడు భగవంతుని సుదర్శన చక్రమే స్వయంగా కాపాడిన పరమ భాగవతోత్తముడు.',
    descriptionEn: 'Celebrated king who observed Ekadashi with pure devotion; Lord Vishnu\'s Sudarshana Chakra personally protected him from Durvasa\'s wrath.',
    highlight: true
  },
  {
    id: 'bhagiratha',
    name: 'భగీరథ మహారాజు',
    nameEn: 'King Bhagīratha',
    title: 'గంగావతరణ కారకుడు • సగర వంశోద్ధారకుడు',
    titleEn: 'Bringer of Holy River Ganga to Earth',
    branch: 'surya',
    image: './images/bhagavatam/bhagiratha.jpg',
    canto: 'స్కంధం 9, అధ్యాయం 9',
    description: 'కఠోర తపస్సుతో పరమశివుని మెప్పించి, గంగానదిని భువికి రప్పించి 60,000 మంది సగర పుత్రులకు మోక్షం ప్రసాదించిన పట్టుదల చక్రవర్తి.',
    descriptionEn: 'By untiring austerity, pleased Lord Shiva and brought Mother Ganga from heaven down to earth to liberate his 60,000 ancestors.',
    highlight: true
  },
  {
    id: 'sita-devi',
    name: 'జానకీ సీతాదేవి',
    nameEn: 'Sītā Devī (Janaka\'s Daughter)',
    title: 'జనకనందిని • లక్ష్మీదేవి అవతారము • రఘుపతి పత్ని',
    titleEn: 'Daughter of Janaka, divine consort of Rama',
    branch: 'surya',
    image: './images/bhagavatam/sita_devi.jpg',
    canto: 'స్కంధం 9, అధ్యాయం 10-11',
    description: 'నిమి వంశపు జనక మహారాజు భూమిని దున్నుతుండగా నాగటి చాలున ఉద్భవించిన అయోనిజ, సాక్షాత్తు లక్ష్మీదేవి.',
    descriptionEn: 'Born from the furrow of Mother Earth in the court of Videha King Janaka; eternal consort of Sri Rama.',
    highlight: true
  },
  {
    id: 'lord-ramacandra',
    name: 'మర్యాదా పురుషోత్తమ శ్రీరామచంద్రుడు',
    nameEn: 'Lord Śrī Rāmacandra',
    title: 'దశరథ నందనుడు • రఘుకుల తిలకుడు',
    titleEn: 'Supreme Personality appearing in Raghu Dynasty',
    branch: 'surya',
    image: './images/bhagavatam/lord_ramacandra.jpg',
    canto: 'స్కంధం 9, అధ్యాయం 10-11',
    description: 'దశరథుని జ్యేష్ఠ పుత్రుడు. ఏకపత్నీవ్రతుడు, పితృవాక్య పరిపాలకుడు, రావణ సంహారకుడు, ఆదర్శ పాలనకు మారుపేరైన రఘునాథుడు.',
    descriptionEn: 'The ideal righteous monarch, vanquisher of Ravana, whose reign established the golden age of Rama-rajya.',
    highlight: true
  },
  {
    id: 'svayambhuva-manu',
    name: 'స్వాయంభువ మనువు & శతరూప',
    nameEn: 'Svāyambhuva Manu & Śatarūpā',
    title: 'ప్రథమ మానవ దంపతులు • సృష్టి విస్తరణకర్తలు',
    titleEn: 'First Manu & Queen of Creation',
    branch: 'manu',
    canto: 'స్కంధం 3 & స్కంధం 4',
    description: 'బ్రహ్మదేవుని కాయము నుండి ఉద్భవించిన ప్రథమ స్త్రీ పురుషులు. ప్రియవ్రతుడు, ఉత్తానపాదుడు అనే కుమారులు; ఆకూతి, ప్రసూతి, దేవహూతి అనే ముగ్గురు పుత్రికలు జన్మించారు.',
    descriptionEn: 'Emanated from Brahma\'s body to begin human ancestry: two sons (Priyavrata & Uttanapada) and three daughters (Akuti, Prasuti, Devahuti).'
  },
  {
    id: 'dhruva',
    name: 'ధ్రువ మహారాజు',
    nameEn: 'Dhruva Mahārāja',
    title: 'ఉత్తానపాదుని పుత్రుడు • ధ్రువ మండల అధిపతి',
    titleEn: 'The determined boy-devotee who attained the Pole Star',
    branch: 'manu',
    image: './images/bhagavatam/dhruva_maharaja.jpg',
    canto: 'స్కంధం 4, అధ్యాయం 8-12',
    description: 'కేవలం ఐదేళ్ల ప్రాయంలో మధువనంలో నారదోపదేశంతో శ్రీహరిని ప్రత్యక్షం చేసుకుని, అచంచలమైన ధ్రువపదాన్ని పొందిన నిశ్చయ సాధకుడు.',
    descriptionEn: 'At the tender age of five, by resolute meditation on Om Namo Bhagavate Vasudevaya, attained the eternal Dhruvaloka.',
    highlight: true
  },
  {
    id: 'king-prthu',
    name: 'పృథు చక్రవర్తి',
    nameEn: 'King Pṛthu',
    title: 'భూమిని దోహనం చేసిన ఆదిరాజు • విష్ణు అంశావతారము',
    titleEn: 'Shaktyavesha-avatara of Vishnu; First crowned King',
    branch: 'manu',
    image: './images/bhagavatam/king_prthu.jpg',
    canto: 'స్కంధం 4, అధ్యాయం 15-23',
    description: 'దుష్టరాజు వేనుని దక్షిణ బాహువు నుండి ఋషుల మథనంచే జన్మించిన శ్రీహరి శక్త్యావేశావతారము. భూమిని ఆవుగా చేసి సమస్త ఓషధులను పితికి లోకాలను రక్షించాడు.',
    descriptionEn: 'Born from the right hand of King Vena churned by sages; milked Mother Earth in the form of a cow to sustain humankind.',
    highlight: true
  },
  {
    id: 'lord-rsabhadeva',
    name: 'భగవాన్ ఋషభదేవుడు',
    nameEn: 'Lord Ṛṣabhadeva',
    title: 'నాభి రాజ పుత్రుడు • పరమహంస ధర్మ ప్రబోధకుడు',
    titleEn: 'Avatara of Vishnu who taught detachment & yoga',
    branch: 'manu',
    image: './images/bhagavatam/lord_rsabhadeva.jpg',
    canto: 'స్కంధం 5, అధ్యాయం 3-6',
    description: 'ప్రియవ్రత వంశంలో నాభిరాజుకు జన్మించిన విష్ణు అవతారము. 100 మంది కుమారులకు ఆత్మవిద్యను ఉపదేశించి అవధూతగా సంచరించిన పరమహంస.',
    descriptionEn: 'Incarnation of Sri Vishnu who taught the path of divine renunciation and spiritual penance to his 100 sons.',
    highlight: true
  },
  {
    id: 'king-bharata',
    name: 'భరత మహారాజు (జడభరతుడు)',
    nameEn: 'King Bharata (Jaḍa Bharata)',
    title: 'ఋషభదేవుని జ్యేష్ఠపుత్రుడు • త్రిజన్మ సిద్ధుడు',
    titleEn: 'Renowned King who became Jada Bharata',
    branch: 'manu',
    image: './images/bhagavatam/king_bharata.jpg',
    canto: 'స్కంధం 5, అధ్యాయం 7-14',
    description: 'ఋషభదేవుని పెద్ద కుమారుడు. లేడిపై వ్యామోహంతో జింకగా జన్మించి, మూడవ జన్మలో జడభరతుడై రఘూగణ మహారాజుకు ఆత్మతత్త్వాన్ని ఉపదేశించాడు.',
    descriptionEn: 'Eldest son of Rsabhadeva whose kingdom was called Bharata; through lives as a king, a deer, and a silent mystic, demonstrated unattached Brahman consciousness.',
    highlight: true
  },
  {
    id: 'daksha',
    name: 'దక్ష ప్రజాపతి',
    nameEn: 'Daksha Prajāpati',
    title: 'ప్రాచేతస దక్షుడు • 60 మంది కన్యల తండ్రి',
    titleEn: 'Prajapati father of 60 daughters',
    branch: 'manu',
    image: './images/bhagavatam/daksha_prajapati.jpg',
    canto: 'స్కంధం 4 & స్కంధం 6',
    description: 'ప్రాచేతసుల పుత్రుడు. అసిక్నిని వివాహమాడి 60 మంది కుమార్తెలను కన్నాడు. వీరిని ధర్మ, కశ్యప, చంద్రులకు ఇచ్చి సకల చరాచర సృష్టిని విస్తరింపజేశాడు.',
    descriptionEn: 'Re-embodied as Prachetas\' son; fathered 60 celebrated daughters who became mothers of devas, asuras, humans, and living beings.',
    highlight: true
  },
  {
    id: 'lord-kapila',
    name: 'భగవాన్ కపిల మహర్షి',
    nameEn: 'Lord Kapila',
    title: 'సాంఖ్య యోగ ప్రవర్తకుడు • కర్దమ-దేవహూతి పుత్రుడు',
    titleEn: 'Incarnation of Vishnu, Founder of Sankhya Yoga',
    branch: 'manu',
    image: './images/bhagavatam/lord_kapila.jpg',
    canto: 'స్కంధం 3, అధ్యాయం 25-33',
    description: 'స్వాయంభువ మను పుత్రిక దేవహూతి, కర్దమ ప్రజాపతులకు జన్మించిన భగవంతుని అవతారము. తల్లికి భక్తియుత సాంఖ్య తత్త్వాన్ని బోధించి మోక్షమార్గం చూపించాడు.',
    descriptionEn: 'Son of Kardama Muni and Devahuti; taught his mother the sublime philosophy of devotional Sankhya yoga in the 3rd Canto.',
    highlight: true
  },
  {
    id: 'lord-dattatreya',
    name: 'శ్రీ గురు దత్తాత్రేయుడు',
    nameEn: 'Lord Dattātreya',
    title: 'త్రిమూర్త్యాత్మక అవతారము • అవధూత గురువు',
    titleEn: 'Combined incarnation of Brahma, Vishnu & Shiva',
    branch: 'manu',
    image: './images/bhagavatam/lord_dattatreya.jpg',
    canto: 'స్కంధం 4 & స్కంధం 11',
    description: 'అత్రి-అనసూయల తపస్సుకు ప్రసన్నులై త్రిమూర్తులు ఏకరూపమై జన్మించిన అవతారము. 24 గురువుల ద్వారా జ్ఞానార్జన చేసినట్లు భాగవత 11వ స్కంధంలో ప్రసిద్ధి.',
    descriptionEn: 'The supreme ascetic avatara born to Sage Atri and Anasuya; revealed the wisdom of the 24 natural gurus in Canto 11.',
    highlight: true
  },
  {
    id: 'durvasa-muni',
    name: 'దుర్వాస మహర్షి',
    nameEn: 'Durvāsā Muni',
    title: 'రుద్ర అంశ సంభూతుడు • మహాతపస్వి',
    titleEn: 'Powerful sage born of Shiva\'s portion',
    branch: 'manu',
    image: './images/bhagavatam/durvasa_muni.jpg',
    canto: 'స్కంధం 4 & స్కంధం 9',
    description: 'అత్రి-అనసూయల రెండవ కుమారుడు, సాక్షాత్తు శివుని కోపాంశ. అంబరీష మహారాజు భక్తిని పరీక్షించి సుదర్శన చక్రాన్ని దర్శించిన తపస్వి.',
    descriptionEn: 'Formidable sage born as an expansion of Rudra; his encounter with King Ambarisha illustrates the supreme power of Bhakti.',
    highlight: true
  },
  {
    id: 'nara-narayana',
    name: 'శ్రీ నర-నారాయణ ఋషులు',
    nameEn: 'Śrī Nara-Nārāyaṇa Ṛṣis',
    title: 'బదరీవన తపస్వులు • కృష్ణార్జునుల మూలరూపము',
    titleEn: 'Twin ascetics of Badarikashrama; prior forms of Krishna & Arjuna',
    branch: 'manu',
    image: './images/bhagavatam/nara_narayana.jpg',
    canto: 'స్కంధం 4, అధ్యాయం 1 & స్కంధం 11',
    description: 'ధర్మ ప్రజాపతి మరియు దక్షపుత్రి మూర్తిదేవిలకు జన్మించిన శ్రీహరి యుగళావతారము. ఊర్వశిని సృష్టించిన తపోమూర్తులు; ద్వాపరంలో కృష్ణార్జునులుగా అవతరించారు.',
    descriptionEn: 'Divine twin sages performing eternal penance in Badarikashrama who created Urvasi from their thigh; descended in Dvapara as Krishna and Arjuna.',
    highlight: true
  },
  {
    id: 'prahlada',
    name: 'భక్త ప్రహ్లాద మహారాజు',
    nameEn: 'Prahlāda Mahārāja',
    title: 'భాగవతోత్తముడు • నరసింహ అనుగ్రహ పాత్రుడు',
    titleEn: 'Paramahamsa Bhakta who beheld Lord Narasimha',
    branch: 'asura',
    image: './images/bhagavatam/prahlada_maharaja.jpg',
    canto: 'స్కంధం 7 (సప్తమ స్కంధం సంపూర్ణము)',
    description: 'దైత్యకులంలో జన్మించినా గర్భస్థ దశలోనే నారదోపదేశంతో శ్రీహరి భక్తిని సాధించిన అగ్రగణ్య భక్తుడు. ఇతని రక్షణార్థమే నరసింహావతారము సంభవించింది.',
    descriptionEn: 'The supreme devotee boy born to demon Hiranyakashipu; his unwavering faith summoned Lord Narasimhadeva from the stone pillar.',
    highlight: true
  },
  {
    id: 'bali',
    name: 'బలి చక్రవర్తి',
    nameEn: 'Bali Mahārāja',
    title: 'సుతల లోకాధిపతి • వామనునికి సర్వస్వం దానమిచ్చిన దాత',
    titleEn: 'Grandson of Prahlada who surrendered everything to Vamana',
    branch: 'asura',
    image: './images/bhagavatam/bali_maharaja.jpg',
    canto: 'స్కంధం 8, అధ్యాయం 18-23',
    description: 'ప్రహ్లాదుని పౌత్రుడు. వామనమూర్తికి తన శిరస్సునే మూడవ అడుగుగా సమర్పించి భగవత్ అనుగ్రహాన్ని పొందిన పరమ త్యాగశీలి.',
    descriptionEn: 'Grandson of Prahlada who offered his own head as the third step to Trivikrama, winning the Lord as his eternal door-keeper in Sutala.',
    highlight: true
  },
  {
    id: 'vamana-deva',
    name: 'భగవాన్ వామన దేవుడు (త్రివిక్రముడు)',
    nameEn: 'Lord Vāmana Deva (Trivikrama)',
    title: 'కశ్యప-అదితి పుత్రుడు • ఉపేంద్రుడు',
    titleEn: 'Fifth Avatara of Vishnu; Son of Kashyapa & Aditi',
    branch: 'asura',
    image: './images/bhagavatam/vaman_deva.jpg',
    canto: 'స్కంధం 8, అధ్యాయం 18-21',
    description: 'బ్రహ్మచారి రూపంలో బలి చక్రవర్తి యజ్ఞవాటికకు వచ్చి మూడడుగుల నేల అడిగి, త్రివిక్రమ రూపంతో విశ్వవ్యాప్తమైన లీల చూపిన శ్రీహరి.',
    descriptionEn: 'The charming dwarf Brahmana boy who expanded into the cosmic Trivikrama to reclaim the three worlds and bestow grace upon King Bali.',
    highlight: true
  },
  {
    id: 'four-kumaras',
    name: 'సనకాది నలుగురు కుమారులు',
    nameEn: 'The Four Kumāras',
    title: 'సనక, సనందన, సనాతన, సనత్కుమారులు',
    titleEn: 'Four eternal child-saints of Brahma',
    branch: 'rishis',
    image: './images/bhagavatam/four_kumaras.jpg',
    canto: 'స్కంధం 3, స్కంధం 4, స్కంధం 7',
    description: 'బ్రహ్మదేవుని తొలి మానసపుత్రులు. సదా ఐదేళ్ల బాలుర వలె ఉండే నైష్ఠిక బ్రహ్మచారులు. వైకుంఠ ద్వారపాలకులైన జయ-విజయులకు శాపమిచ్చి అవతార లీలకు కారణమయ్యారు.',
    descriptionEn: 'The four sublime ascetic sons of Brahma who travel the cosmos in perpetual five-year-old child forms meditating upon Lord Narayana.',
    highlight: true
  },
  {
    id: 'narada',
    name: 'దేవర్షి నారదుడు',
    nameEn: 'Nārada Muni',
    title: 'హరినామ సంకీర్తనాచార్యుడు • వీణాపాణి',
    titleEn: 'Celestial sage chanting Krishna\'s names across realms',
    branch: 'rishis',
    image: './images/bhagavatam/narada_muni.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 5-6',
    description: 'వ్యాస మహర్షికి శ్రీమద్భాగవతాన్ని రచించమని ప్రేరణనిచ్చిన జగద్గురువు. ప్రహ్లాద, ధ్రువులకు గురువు.',
    descriptionEn: 'The traveling musician sage whose divine advice inspired Veda Vyasa to compose the Srimad Bhagavatam.',
    highlight: true
  },
  {
    id: 'veda-vyasa',
    name: 'శ్రీకృష్ణ ద్వైపాయన వేదవ్యాసుడు',
    nameEn: 'Śrīla Kṛṣṇa Dvaipāyana Veda Vyāsa',
    title: 'భాగవత గ్రంథకర్త • వేద విభజకుడు',
    titleEn: 'Literary Incarnation of God; Author of Bhagavatam',
    branch: 'rishis',
    image: './images/bhagavatam/veda_vyasa.jpg',
    canto: 'స్కంధం 1, అధ్యాయం 4-7',
    description: 'వేదములను నాలుగు భాగాలుగా విభజించి, మహాభారతం, 18 పురాణాలు రచించిన తర్వాత నారదుని ఆదేశంతో అమృతతుల్యమైన శ్రీమద్భాగవతాన్ని 18,000 శ్లోకాలతో రచించారు.',
    descriptionEn: 'Literary incarnation of Vishnu who divided the Vedas, authored the Mahabharata and 18 Puranas, and composed Srimad Bhagavatam as his ripe fruit of wisdom.',
    highlight: true
  },
  {
    id: 'sukadeva',
    name: 'శ్రీ శుకదేవ గోస్వామి',
    nameEn: 'Śrī Śukadeva Goswāmī',
    title: 'శ్రీమద్భాగవత ప్రథమ వక్త • వ్యాసపుత్రుడు',
    titleEn: 'The Parrot-like Speaker of Bhagavatam to Parikshit',
    branch: 'rishis',
    image: './images/bhagavatam/sukadeva_goswami.jpg',
    canto: 'స్కంధం 1, 2, 10, 12',
    description: 'జన్మతః పరమహంస. వ్యాసుని నుండి భాగవత రసాన్ని ఆస్వాదించి, గంగాతీరంలో పరీక్షిత్ మహారాజుకు వినిపించి అమరత్వం ప్రసాదించిన అమృతవక్త.',
    descriptionEn: 'Liberated from birth, this supreme swan-like sage delivered the 18,000 verses of Srimad Bhagavatam to Emperor Parikshit.',
    highlight: true
  },
  {
    id: 'siva-parivara',
    name: 'పరమశివుడు (రుద్రుడు) & పార్వతి',
    nameEn: 'Lord Śiva & Pārvatī',
    title: 'వైష్ణవానాం యథా శంభుః • కైలాసపతి',
    titleEn: 'Greatest of Vaishnavas, Lord of Kailasa',
    branch: 'rishis',
    image: './images/bhagavatam/siva_parivara.jpg',
    canto: 'స్కంధం 3, స్కంధం 4 (దక్ష యజ్ఞం)',
    description: 'బ్రహ్మ భ్రూకుటి నుండి జన్మించిన రుద్రుడు. "వైష్ణవానాం యథా శంభుః" - పరమ విష్ణు భక్తుడు. గజేంద్ర మోక్షం, సముద్ర మథన కాలకూట విషపానం భాగవతంలో ముఖ్య ఘట్టాలు.',
    descriptionEn: 'Emanated from Brahma\'s brow; revered in Bhagavatam 12.13.16 as the supreme among all devotees of Sri Hari ("vaishnavanam yatha sambhuh").',
    highlight: true
  },
  {
    id: 'ravana',
    name: 'రావణాసురుడు (లంకేశ్వరుడు)',
    nameEn: 'Rāvaṇa (King of Laṅkā)',
    title: 'పులస్త్య పౌత్రుడు • విశ్రవసుని పుత్రుడు',
    titleEn: 'Grandson of Pulastya, Son of Vishrava',
    branch: 'rishis',
    image: './images/bhagavatam/ravana_lanka.jpg',
    canto: 'స్కంధం 7 & స్కంధం 9',
    description: 'వైకుంఠ ద్వారపాలకుడైన జయుని రెండవ జన్మ (త్రేతాయుగంలో రావణుడిగా). శ్రీరామచంద్రుని చేతిలో మరణించి ముక్తి సాధించాడు.',
    descriptionEn: 'Second birth of Jaya, fallen gatekeeper of Vaikuntha, slain by Lord Ramachandra in Treta Yuga as described in Canto 7.',
    highlight: false
  }
];
