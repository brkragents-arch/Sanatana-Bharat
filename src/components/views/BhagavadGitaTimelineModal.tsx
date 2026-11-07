import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, RotateCcw, Clock, BookOpen, Layers, Sparkles, Filter, Search, Heart, ShieldAlert, Maximize2, ExternalLink } from 'lucide-react';
import { useMythology } from '../../context/MythologyContext';

interface BhagavadGitaTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BhagavadGitaTimelineModal: React.FC<BhagavadGitaTimelineModalProps> = ({
  isOpen,
  onClose
}) => {
  const { language } = useMythology();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'chapters_lessons' | 'cosmic_timeline' | 'acharyas_commentaries' | 'problems_solutions'>('chapters_lessons');
  const [shatkaFilter, setShatkaFilter] = useState<'all' | 'karma' | 'bhakti' | 'jnana'>('all');
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number | null>(null);
  const [solutionSearch, setSolutionSearch] = useState<string>('');
  const [solutionFilter, setSolutionFilter] = useState<'all' | 'emotion' | 'mind' | 'action' | 'peace'>('all');
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);
  const [enlargedPoster, setEnlargedPoster] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [posterZoom, setPosterZoom] = useState<number>(1);

  if (!isOpen) return null;

  // =========================================================================
  // 18 CHAPTERS & 18 LIFE LESSONS (COMBINED UNIFIED DATA FROM BOTH SOURCES)
  // Source 1: "18 Chapters of Bhagavad Gita" (Verses & Sanskrit Titles)
  // Source 2: "All Lessons from Bhagwat Geeta" (Core Life Lessons & Wisdom)
  // =========================================================================
  const chaptersWithLessons = [
    {
      chapter: 1,
      nameEn: 'Arjuna Vishada Yoga',
      nameTe: 'అర్జున విషాద యోగము',
      verses: 47,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: 'Know Your True Self',
      lessonTe: 'నీ నిజ స్వరూపాన్ని తెలుసుకో',
      icon: '🪷',
      explanationEn: 'You are not the body or mind. You are the eternal soul.',
      explanationTe: 'నీవు కేవలం భౌతిక శరీరానివో, మనస్సువో కావు; నీవు జనన మరణాలు లేని శాశ్వత ఆత్మవు.',
      bgVerse: 'BG 2.13: देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||'
    },
    {
      chapter: 2,
      nameEn: 'Sankhya Yoga',
      nameTe: 'సాంఖ్య యోగము (గీతా సారం)',
      verses: 72,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: 'Do Your Duty',
      lessonTe: 'నీ కర్తవ్యాన్ని నిష్కామంగా ఆచరించు',
      icon: '☸️',
      explanationEn: 'Focus on your karma, not on the results. Work selflessly without anxiety of fruit.',
      explanationTe: 'కర్మ నాచరించుట యందే నీకు అధికారము కలదు కానీ, ఫలితములపై ఎన్నడూ లేదు.',
      bgVerse: 'BG 2.47: कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||'
    },
    {
      chapter: 3,
      nameEn: 'Karma Yoga',
      nameTe: 'కర్మ యోగము',
      verses: 43,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: 'Control Your Mind',
      lessonTe: 'నీ మనస్సును అదుపులో ఉంచుకో',
      icon: '🧘',
      explanationEn: 'A calm mind leads to wisdom and peace. Selfless work purifies the heart and stills passions.',
      explanationTe: 'నిశ్చలమైన మనస్సు వివేకాన్ని, శాంతిని ఇస్తుంది. నిస్వార్థ కర్మలతో మనస్సు పవిత్రమవుతుంది.',
      bgVerse: 'BG 3.19: तस्मादसक्तः सततं कार्यं कर्म समाचर | असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||'
    },
    {
      chapter: 4,
      nameEn: 'Jnana Karma Sanyasa Yoga',
      nameTe: 'జ్ఞాన కర్మ సన్యాస యోగము',
      verses: 42,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: 'Be Steady in Success and Failure',
      lessonTe: 'గెలుపోటములలో స్థితప్రజ్ఞుడవై ఉండు',
      icon: '⚖️',
      explanationEn: 'Stay balanced in both joy and sorrow. Spiritual knowledge burns all binding karmas into ashes.',
      explanationTe: 'సుఖదుఃఖాలు, లాభనష్టాలు, జయాపజయాలలో సమభావంతో స్థిరంగా ఉండు; జ్ఞానాగ్ని సమస్త కర్మలను భస్మం చేస్తుంది.',
      bgVerse: 'BG 4.37: यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन | ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ||'
    },
    {
      chapter: 5,
      nameEn: 'Karma Sanyasa Yoga',
      nameTe: 'కర్మ సన్యాస యోగము',
      verses: 29,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: 'Offer Everything to God',
      lessonTe: 'నీ సమస్త కర్మలను భగవంతునికి అర్పించు',
      icon: '👑',
      explanationEn: 'Dedicate your actions to the Divine. Like a lotus leaf untouched by water, sins touch not such a soul.',
      explanationTe: 'తామరాకుపై నీటిబొట్టులా కర్మలు చేస్తూనే ఫలితాలను ఈశ్వరునికి అర్పించేవారికి పాపపుణ్యాలు అంటవు.',
      bgVerse: 'BG 5.10: ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः | लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ||'
    },
    {
      chapter: 6,
      nameEn: 'Dhyana Yoga (Atma Samyama Yoga)',
      nameTe: 'ధ్యాన యోగము (ఆత్మసంయమ యోగము)',
      verses: 47,
      shatka: 'karma',
      shatkaLabelEn: 'Karma Shatka (1-6)',
      shatkaLabelTe: 'కర్మ షట్కం (1-6)',
      lessonEn: "Detach, Don't Become Indifferent",
      lessonTe: 'ఆసక్తిని త్యజించు, కానీ ఉదాసీనుడవు కాకు',
      icon: '🤍',
      explanationEn: 'Love deeply, but without selfish attachment. Steady practice and dispassion master the restless mind.',
      explanationTe: 'అందరినీ ప్రేమించు, కానీ స్వార్థ బంధాలకు లొంగకు; అభ్యాస వైరాగ్యాల ద్వారా చంచల మనస్సును వశపరుచుకో.',
      bgVerse: 'BG 6.35: असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||'
    },
    {
      chapter: 7,
      nameEn: 'Jnana Vijnana Yoga',
      nameTe: 'జ్ఞాన విజ్ఞాన యోగము',
      verses: 30,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'Seek Knowledge',
      lessonTe: 'నిజమైన జ్ఞానాన్ని అన్వేషించు',
      icon: '👳‍♂️',
      explanationEn: 'Right knowledge is the ultimate solution. Comprehending both matter and spirit dissolves delusion.',
      explanationTe: 'నిజమైన జ్ఞానమే సమస్త మానసిక సంక్షోభాలకు అంతిమ పరిష్కారం; సృష్టిలోని సమస్తము ఈశ్వర మయమని గ్రహించు.',
      bgVerse: 'BG 7.19: बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते | वासुदेवः सर्वमिति स महात्मा सुदुर्लभः ||'
    },
    {
      chapter: 8,
      nameEn: 'Akshara Brahma Yoga',
      nameTe: 'అక్షర పరబ్రహ్మ యోగము',
      verses: 28,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'Overcome Desire and Anger',
      lessonTe: 'కామక్రోధాలను జయించు',
      icon: '🛡️',
      explanationEn: 'They are the greatest enemies of wisdom. Constant remembrance of the Eternal leads to liberation.',
      explanationTe: 'కామక్రోధాలు ఆత్మ వివేకానికి పరమ శత్రువులు. అంత్యకాలంలో నిశ్చల చిత్తంతో పరమాత్మను స్మరించినవాడు మోక్షాన్ని పొందును.',
      bgVerse: 'BG 8.5: अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् | यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ||'
    },
    {
      chapter: 9,
      nameEn: 'Raja Vidya Raja Guhya Yoga',
      nameTe: 'రాజవిద్య రాజగుహ్య యోగము',
      verses: 34,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'Have Faith',
      lessonTe: 'పరమాత్మ యందు, నీ ఆత్మశక్తి యందు సంపూర్ణ విశ్వాసం ఉంచు',
      icon: '⭐',
      explanationEn: 'Faith in God and in yourself is the first step to success. The Lord carries the burden of those who surrender.',
      explanationTe: 'ఈశ్వరుని యందు దృఢమైన విశ్వాసం ఉంచు; అనన్యభావంతో శరణువేడిన భక్తుల యోగక్షేమాలను పరమాత్మే స్వయంగా వహించును.',
      bgVerse: 'BG 9.22: अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||'
    },
    {
      chapter: 10,
      nameEn: 'Vibhuti Yoga',
      nameTe: 'విభూతి యోగము',
      verses: 42,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'Surrender to God',
      lessonTe: 'ఈశ్వర చరణాలకు సంపూర్ణ శరణాగతి చెయ్యి',
      icon: '🙏',
      explanationEn: 'Complete surrender brings peace and divine protection. See Divine majesty in all extraordinary glories.',
      explanationTe: 'సంపూర్ణ శరణాగతి జీవితంలో శాశ్వత శాంతిని, అభయాన్ని ప్రసాదిస్తుంది; సృష్టిలోని సమస్త తేజస్సు భగవంతుని అంశయే.',
      bgVerse: 'BG 10.41: यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा | तत्तदेवावगच्छ त्वं मम तेजोऽंशसम्भवम् ||'
    },
    {
      chapter: 11,
      nameEn: 'Vishwarupa Darshana Yoga',
      nameTe: 'విశ్వరూప దర్శన యోగము',
      verses: 55,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'See God in Everything',
      lessonTe: 'సమస్త సృష్టిలో, ప్రతి జీవిలో ఈశ్వరుని దర్శించు',
      icon: '🕉️',
      explanationEn: 'The Divine is present in every being and every form. Become an instrument (Nimitta-matram) of the cosmic will.',
      explanationTe: 'సమస్త జగత్తు, కాలం, మరణం, జీవం అంతా భగవంతుని అనంత విశ్వరూపమే; ఈశ్వర సంకల్పానికి నిమిత్తమాత్రుడవై నడువు.',
      bgVerse: 'BG 11.33: तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम् | मयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन् ||'
    },
    {
      chapter: 12,
      nameEn: 'Bhakti Yoga',
      nameTe: 'భక్తి యోగము',
      verses: 20,
      shatka: 'bhakti',
      shatkaLabelEn: 'Bhakti Shatka (7-12)',
      shatkaLabelTe: 'భక్తి షట్కం (7-12)',
      lessonEn: 'Live a Simple Life',
      lessonTe: 'నిరాడంబరమైన, పవిత్రమైన జీవితాన్ని గడుపు',
      icon: '🌿',
      explanationEn: 'Simplicity brings clarity and happiness. Loving devotion with compassion for all beings is dearest to God.',
      explanationTe: 'సరళత, నిష్కపటమైన భక్తి స్వచ్ఛమైన ఆనందాన్ని ఇస్తాయి; ఎవరినీ ద్వేషించక, అందరిపట్ల దయగలిగి ఉండు.',
      bgVerse: 'BG 12.13: अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||'
    },
    {
      chapter: 13,
      nameEn: 'Kshetra Kshetrajna Vibhaga Yoga',
      nameTe: 'క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము',
      verses: 35,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Respect All Paths',
      lessonTe: 'అన్ని సన్మార్గాలను, జీవుల భావాలను గౌరవించు',
      icon: '♾️',
      explanationEn: 'All genuine paths lead to the same Truth. Discern the difference between the perishable field (body) and Knower (soul).',
      explanationTe: 'సత్యం ఒక్కటే, మార్గాలు వేరైనా లక్ష్యం పరమాత్మయే; దేహం (క్షేత్రం) వేరు, దేహాన్ని తెలుసుకునే ఆత్మ (క్షేత్రజ్ఞుడు) వేరని తెలుసుకో.',
      bgVerse: 'BG 13.28: समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् | न हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ||'
    },
    {
      chapter: 14,
      nameEn: 'Gunatraya Vibhaga Yoga',
      nameTe: 'గుణత్రయ విభాగ యోగము',
      verses: 27,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Understand the Three Gunas',
      lessonTe: 'త్రిగుణాలను (సత్వ, రజస్, తమస్) గ్రహించి అతీతుడవు కా',
      icon: '💡',
      explanationEn: 'Sattva (clarity), Rajas (passion), and Tamas (inertia) influence nature. Transcend them to attain immortality.',
      explanationTe: 'ప్రకృతి జనితమైన సత్వ, రజో, తమో గుణాలే మానవుడిని బంధిస్తాయి; గుణాతీతుడైనప్పుడే పరమ శాంతి సిద్ధిస్తుంది.',
      bgVerse: 'BG 14.20: गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् | जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ||'
    },
    {
      chapter: 15,
      nameEn: 'Purushottama Yoga',
      nameTe: 'పురుషోత్తమ ప్రాప్తి యోగము',
      verses: 20,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Rise Above Illusions',
      lessonTe: 'మాయాబంధాలు, భ్రాంతుల నుండి పైకి లేవు',
      icon: '👁️',
      explanationEn: 'The world is temporary; the soul is eternal. Cut the deeply rooted tree of samsara with the axe of non-attachment.',
      explanationTe: 'భౌతిక సంసార వృక్షం అశ్వత్థం వంటిది; దృఢమైన అసంగత్వమనెడి (వైరాగ్య) గొడ్డలితో అజ్ఞాన బంధాలను తెగనరుకుము.',
      bgVerse: 'BG 15.3-4: असङ्गशस्त्रेण दृढेन छित्त्वा | ततः पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूयः ||'
    },
    {
      chapter: 16,
      nameEn: 'Daivasura Sampad Vibhaga Yoga',
      nameTe: 'దైవాసుర సంపద్విభాగ యోగము',
      verses: 24,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Strive for Self-Mastery',
      lessonTe: 'ఆత్మనిగ్రహాన్ని సాధించి దైవీ సంపదను పెంచుకో',
      icon: '📈',
      explanationEn: 'Master yourself before you try to master the world. Cultivate fearlessness, purity, non-violence, and truth.',
      explanationTe: 'జగాన్ని గెలవబోయే ముందు నీ అంతరంగాన్ని గెలువు; అభయం, సత్వసంశుద్ధి, అహింస, సత్యం వంటి దైవీ గుణాలను పెంపొందించుకో.',
      bgVerse: 'BG 16.1-3: अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः | दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ||'
    },
    {
      chapter: 17,
      nameEn: 'Shraddhatraya Vibhaga Yoga',
      nameTe: 'శ్రద్ధాత్రయ విభాగ యోగము',
      verses: 28,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Serve Selflessly',
      lessonTe: 'నిస్వార్థ సేవాభావంతో జీవితాన్ని పవిత్రం చేసుకో',
      icon: '👥',
      explanationEn: 'Selfless service (Yajna, Dana, Tapas) purifies the heart when performed with pure faith (Shraddha).',
      explanationTe: 'నిష్కామంగా చేసే యజ్ఞ దాన తపస్సులు హృదయాన్ని పవిత్రం చేస్తాయి; సాత్విక శ్రద్ధతో కూడిన పనులే సత్ఫలితాలనిస్తాయి.',
      bgVerse: 'BG 17.28: अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् | असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ||'
    },
    {
      chapter: 18,
      nameEn: 'Moksha Sanyasa Yoga',
      nameTe: 'మోక్ష సన్యాస యోగము',
      verses: 78,
      shatka: 'jnana',
      shatkaLabelEn: 'Jnana Shatka (13-18)',
      shatkaLabelTe: 'జ్ఞాన షట్కం (13-18)',
      lessonEn: 'Be Free',
      lessonTe: 'సంపూర్ణ ఆధ్యాత్మిక విముక్తిని, మోక్షాన్ని అందుకో',
      icon: '🔆',
      explanationEn: 'Freedom comes from living in alignment with Dharma and total surrender to the Supreme: "Abandon all fear, I shall liberate you."',
      explanationTe: 'సకల ధర్మాలను పరమాత్మకు అర్పించి శరణు వేడినప్పుడు సమస్త బంధనాలు తొలగి పరమ శాంతి, మోక్షం లభిస్తాయి.',
      bgVerse: 'BG 18.66: सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||'
    }
  ];

  const filteredChapters = chaptersWithLessons.filter(ch => {
    if (shatkaFilter === 'all') return true;
    return ch.shatka === shatkaFilter;
  });

  // =========================================================================
  // 20 PROBLEMS & SPIRITUAL SOLUTIONS FROM BHAGAVAD GITA
  // Source: "Find Solutions for your problems in Bhagavad Gita" poster
  // =========================================================================
  const gitaSolutionsData = [
    {
      id: 'anger',
      nameEn: 'Anger',
      nameTe: 'కోపం / క్రోధం',
      category: 'emotion',
      icon: '🔥',
      shlokas: [
        { chapter: 2, verse: '56', label: 'Ch 2: 56', note: 'Free from passion, fear and anger (వీతరాగ భయక్రోధః)' },
        { chapter: 2, verse: '62', label: 'Ch 2: 62', note: 'Attachment breeds lust; from lust anger arises (कामात्सञ्जायते क्रोधः)' },
        { chapter: 2, verse: '63', label: 'Ch 2: 63', note: 'From anger delusion arises, destroying intellect and ruin follows (क्रोधाद्भवति संमोहः)' },
        { chapter: 5, verse: '26', label: 'Ch 5: 26', note: 'Liberation is assured for those free from desire and anger (कामक्रोधवियुक्तानां)' },
        { chapter: 16, verse: '1-3', label: 'Ch 16: 1-3', note: 'Freedom from anger (Akrodha) is a divine asset (दैवी सम्पद्)' },
        { chapter: 16, verse: '21', label: 'Ch 16: 21', note: 'Anger is one of 3 gates to hell that ruin the soul (कामः क्रोधस्तथा लोभः)' }
      ],
      antidoteEn: 'Control desires and attachments before they boil into fury. Practice equanimity and patience to safeguard your intellect.',
      antidoteTe: 'కోరికలకు ఆటంకం కలిగినపుడే క్రోధం పుడుతుంది; క్రోధం బుద్ధిని నాశనం చేసి పతనానికి దారితీస్తుంది. కామక్రోధ రహితుడై అంతశ్శాంతిని సాధించు.',
      keyVerse: 'BG 2.63: क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः | स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||'
    },
    {
      id: 'confusion',
      nameEn: 'Confusion',
      nameTe: 'అయోమయం / గందరగోళం',
      category: 'mind',
      icon: '🌀',
      shlokas: [
        { chapter: 2, verse: '7', label: 'Ch 2: 7', note: 'Bewildered about duty, Arjuna surrenders to Krishna as guru (धर्मसंमूढचेताः)' },
        { chapter: 3, verse: '2', label: 'Ch 3: 2', note: 'Arjuna asks for decisive clarity: Tell me surely that one path (तदेकं वद निश्चित्य)' },
        { chapter: 18, verse: '61', label: 'Ch 18: 61', note: 'The Supreme Lord dwells in the hearts of all directing their destiny (ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति)' }
      ],
      antidoteEn: 'When paralyzed by dilemmas, surrender your doubts to divine wisdom and guru guidance; the inner divinity directs the path of righteousness.',
      antidoteTe: 'ఏది ధర్మమో తెలియనప్పుడు సద్గురువును, ఈశ్వరుని శరణువేడి మార్గదర్శనం కోరండి; హృదయాంతర్గతుడైన భగవంతుడే సత్యమార్గాన్ని చూపుతాడు.',
      keyVerse: 'BG 2.7: कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसंमूढचेताः | यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ||'
    },
    {
      id: 'envy',
      nameEn: 'Dealing with Envy',
      nameTe: 'ఈర్ష్య / అసూయతో పోరాటం',
      category: 'emotion',
      icon: '🐍',
      shlokas: [
        { chapter: 12, verse: '13-14', label: 'Ch 12: 13,14', note: 'Free from malice, friendly and compassionate to all beings (अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च)' },
        { chapter: 16, verse: '19', label: 'Ch 16: 19', note: 'The envious and malicious are hurled into degraded wombs (तानहं द्विषतः क्रूरान्)' },
        { chapter: 18, verse: '71', label: 'Ch 18: 71', note: 'Hearing sacred truth without cynicism or envy brings liberation (श्रद्धावाननसूयश्च)' }
      ],
      antidoteEn: 'Envy burns the soul within. Replace comparison with compassion, friendliness (Maitri), and gratitude for everyone’s divine journey.',
      antidoteTe: 'ఎవరిపైనా ద్వేషం, అసూయ లేకుండా అందరిపట్ల మైత్రి, కరుణ కలిగి ‘నేను, నాది’ అనే అహంకారాన్ని వీడడమే భగవత్ప్రీతికి మార్గం.',
      keyVerse: 'BG 12.13: अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||'
    },
    {
      id: 'death_loved_one',
      nameEn: 'Death of a Loved One',
      nameTe: 'ప్రియమైనవారి మరణం / వియోగం',
      category: 'peace',
      icon: '🕊️',
      shlokas: [
        { chapter: 2, verse: '13', label: 'Ch 2: 13', note: 'Just as boyhood, youth and old age pass, the soul receives another body (तथा देहान्तरप्राप्तिः)' },
        { chapter: 2, verse: '20', label: 'Ch 2: 20', note: 'The soul is never born nor does it ever die; it is eternal (न जायते म्रियते वा कदाचित्)' },
        { chapter: 2, verse: '22', label: 'Ch 2: 22', note: 'As one discards old garments and dons new ones, the soul puts on new bodies (वासांसि जीर्णानि यथा विहाय)' },
        { chapter: 2, verse: '25', label: 'Ch 2: 25', note: 'Knowing the soul is unmanifest and unchangeable, you should not grieve (तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि)' },
        { chapter: 2, verse: '27', label: 'Ch 2: 27', note: 'For what is born death is certain, and rebirth is certain for the dead (जातस्य हि ध्रुवो मृत्युः)' }
      ],
      antidoteEn: 'The body perishes, but the conscious soul is immortal. Grieving for the indestructible spirit is delusion; celebrate their eternal continuum.',
      antidoteTe: 'ఆత్మకు పుట్టుక, చావు లేవు. పాత వస్త్రాలు మార్చినట్లే ఆత్మ పాత దేహాన్ని వదిలి కొత్త దేహాన్ని ధరిస్తుంది. జ్ఞానులు మరణానికి శోకించరు.',
      keyVerse: 'BG 2.22: वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि | तथा शरीराणि विहाय जीर्णा-न्यन्यानि संयाति नवानि देही ||'
    },
    {
      id: 'demotivated',
      nameEn: 'Demotivated',
      nameTe: 'నిరుత్సాహం / అలసట',
      category: 'action',
      icon: '⚡',
      shlokas: [
        { chapter: 11, verse: '33', label: 'Ch 11: 33', note: 'Arise and win glory! Be merely an instrument of the cosmic will (निमित्तमात्रं भव सव्यसाचिन्)' },
        { chapter: 18, verse: '48', label: 'Ch 18: 48', note: 'One should not abandon one’s born duty even if flawed, like fire veiled by smoke (सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्)' },
        { chapter: 18, verse: '78', label: 'Ch 18: 78', note: 'Wherever is Krishna the Lord of Yoga and Partha the archer, victory and prosperity are assured (यत्र योगेश्वरः कृष्णो यत्र पार्थో ధనుర్ధరః)' }
      ],
      antidoteEn: 'Reignite your heroic spirit. You are an instrument of the Divine. Do your duty with full heart, and success is already scripted.',
      antidoteTe: '"లెమ్ము! కీర్తిని సంపాదించు! నా సంకల్పానికి నిమిత్తమాత్రుడవై ఉండు" అని పరమాత్ముడు కర్తవ్యోత్సాహాన్ని నింపుతాడు. ధర్మ ప్రయత్నంలో ఓటమి ఉండదు.',
      keyVerse: 'BG 11.33: तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम् | मयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन् ||'
    },
    {
      id: 'depression',
      nameEn: 'Depression',
      nameTe: 'తీవ్ర విషాదం / కుంగుబాటు',
      category: 'emotion',
      icon: '🌧️',
      shlokas: [
        { chapter: 2, verse: '3', label: 'Ch 2: 3', note: 'Yield not to unmanliness, cast off petty weakness of heart and arise! (क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप)' },
        { chapter: 2, verse: '14', label: 'Ch 2: 14', note: 'Pleasure and pain come and go like seasons; bear them with fortitude (तांस्तितिक्षस्व भारत)' },
        { chapter: 5, verse: '21', label: 'Ch 5: 21', note: 'One detached from external senses finds unceasing joy in the inner Self (स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते)' }
      ],
      antidoteEn: 'Pleasure and sorrow are transient sensory ripples. Shed inner weakness, connect with the indwelling divinity, and experience indestructible peace.',
      antidoteTe: 'పిరికితనాన్ని, హృదయ దౌర్బల్యాన్ని వదిలి లేచి నిలబడు. సుఖదుఃఖాలు శీతోష్ణాల వలె తాత్కాలికమైనవి; వాటిని ఓర్పుతో భరించి ఆత్మానందాన్ని కనుగొను.',
      keyVerse: 'BG 2.3: क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते | क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||'
    },
    {
      id: 'discriminated',
      nameEn: 'Discriminated',
      nameTe: 'వివక్షకు గురైనప్పుడు / అసమానత',
      category: 'peace',
      icon: '🤝',
      shlokas: [
        { chapter: 5, verse: '18', label: 'Ch 5: 18', note: 'The wise look with equal eye upon a scholar, a cow, an elephant or a dog (पण्डिताः समदर्शिनः)' },
        { chapter: 5, verse: '19', label: 'Ch 5: 19', note: 'Those with mind established in equality conquer the world (निर्दोषं हि समं ब्रह्म)' },
        { chapter: 6, verse: '32', label: 'Ch 6: 32', note: 'The supreme yogi sees equality everywhere, feeling others pain as his own (आत्मौपम्येन सर्वत्र समं पश्यति)' },
        { chapter: 9, verse: '29', label: 'Ch 9: 29', note: 'I am equally disposed to all beings; to Me none is hateful or favored (समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः)' }
      ],
      antidoteEn: 'Human prejudice cannot taint the divine equality of the soul. God looks upon all beings with equal love; anchor yourself in spiritual dignity.',
      antidoteTe: 'సమస్త ప్రాణులలో పరమాత్మ సమానంగా ప్రకాశిస్తున్నాడు. భగవంతునికి ఎవరూ ద్వేష్యులు కారు; జ్ఞాని అందరిలోనూ దివ్య చైతన్యాన్ని సమభావంతో చూస్తాడు.',
      keyVerse: 'BG 5.18: विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि | शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||'
    },
    {
      id: 'fear',
      nameEn: 'Fear',
      nameTe: 'భయం / ప్రాణ భయం / అభద్రత',
      category: 'emotion',
      icon: '🛡️',
      shlokas: [
        { chapter: 4, verse: '10', label: 'Ch 4: 10', note: 'Freed from attachment, fear and anger, taking refuge in Me (वीतरागभयक्रोधा मन्मया मामुपाश्रिताः)' },
        { chapter: 11, verse: '50', label: 'Ch 11: 50', note: 'Krishna assumes His gentle, serene form to banish Arjuna’s fright (आश्वासयामास च भीतमेनम्)' },
        { chapter: 18, verse: '30', label: 'Ch 18: 30', note: 'Sattvic intellect clearly knows what is to be feared and what not (भयाभये बन्धं मोक्षं च या वेत्ति सा पार्थ सात्त्विकी)' }
      ],
      antidoteEn: 'Fear arises from identifying with the fragile body. By surrendering to the Supreme and holding onto truth, divine courage dissolves all dread.',
      antidoteTe: 'భయం, క్రోధం విడిచి భగవంతుని ఆశ్రయించినప్పుడు సమస్త భయాలు సమసిపోతాయి. సాత్విక బుద్ధితో వాస్తవాన్ని గ్రహించి అభయాన్ని పొందండి.',
      keyVerse: 'BG 4.10: वीतरागभयक्रोधा मन्मया मामुपाश्रिताः | बहवो ज्ञानतपसा पूता मद्भावमागताः ||'
    },
    {
      id: 'feeling_sinful',
      nameEn: 'Feeling Sinful',
      nameTe: 'పాప భావన / అపరాధ భావన',
      category: 'peace',
      icon: '🌊',
      shlokas: [
        { chapter: 4, verse: '36', label: 'Ch 4: 36', note: 'Even if you are the most sinful of all sinners, you shall cross all sins by the raft of knowledge (ज्ञानेनैव प्लवेनैव सर्वं ज्ञानप्लवेन संतरिष्यसि)' },
        { chapter: 4, verse: '37', label: 'Ch 4: 37', note: 'As a blazing fire turns fuel into ashes, the fire of knowledge burns all karmas (ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते)' },
        { chapter: 5, verse: '10', label: 'Ch 5: 10', note: 'Offering actions to the Divine, sin touches him not as water touches not a lotus leaf (लिप्यते न स पापेन पद्मपत्रमिवाम्भसा)' },
        { chapter: 9, verse: '30', label: 'Ch 9: 30', note: 'Even the most degraded who turns to Me with single-minded devotion is deemed righteous (अपि चेत्सुदुराचारो भजते मामनन्यभाक्)' },
        { chapter: 10, verse: '3', label: 'Ch 10: 3', note: 'Knowing Me as the unborn sovereign Lord, one is freed from all sins (प्रमुच्यते सर्वपापैः)' },
        { chapter: 14, verse: '6', label: 'Ch 14: 6', note: 'Sattva guna is luminous and free from disease and taint (तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्)' },
        { chapter: 18, verse: '66', label: 'Ch 18: 66', note: 'Surrender solely unto Me; I will deliver you from all sinful reactions, do not fear! (अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः)' }
      ],
      antidoteEn: 'No guilt is beyond redemption. The fire of spiritual wisdom and sincere surrender burns away past karmas instantaneously. Krishna promises: "Grieve not!"',
      antidoteTe: 'ఎంతటి పాపియైనా జ్ఞానమనెడి నావ ద్వారా పాప సాగరాన్ని దాటగలడు. "నన్ను శరణువేడుము, నేను నిన్ను సమస్త పాపాల నుండి విముక్తుడిని చేస్తాను" అని కృష్ణుని అభయం.',
      keyVerse: 'BG 18.66: सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||'
    },
    {
      id: 'forgetfulness',
      nameEn: 'Forgetfulness',
      nameTe: 'మతిమరుపు / కర్తవ్య విస్మృతి',
      category: 'mind',
      icon: '🧠',
      shlokas: [
        { chapter: 15, verse: '15', label: 'Ch 15: 15', note: 'I am seated in all hearts; from Me come memory, knowledge and their loss (मत्तः स्मृतिर्ज्ञानमपोहनं च)' },
        { chapter: 18, verse: '61', label: 'Ch 18: 61', note: 'The Lord dwells in the heart, causing all beings to act according to karma (भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया)' }
      ],
      antidoteEn: 'Memory and cognition flow from the indwelling Paramatman. Center your focus on selfless dharma, and divine clarity of recall returns.',
      antidoteTe: 'సమస్త ప్రాణుల హృదయాలలో నివసించే పరమాత్మ నుండే స్మృతి, జ్ఞానం కలుగుతాయి. ఈశ్వర స్మరణతో చిత్తైకాగ్రతను, కర్తవ్య స్మృతిని తిరిగి పొందవచ్చు.',
      keyVerse: 'BG 15.15: सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च | वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ||'
    },
    {
      id: 'greed',
      nameEn: 'Greed',
      nameTe: 'దురాశ / లోభం',
      category: 'action',
      icon: '🪙',
      shlokas: [
        { chapter: 14, verse: '17', label: 'Ch 14: 17', note: 'From Rajas springs greed, unrest and endless craving (रजसो लोभ एव च)' },
        { chapter: 16, verse: '21', label: 'Ch 16: 21', note: 'Lust, anger and greed are three gates leading to self-destruction (कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्)' },
        { chapter: 17, verse: '25', label: 'Ch 17: 25', note: 'Acts of sacrifice, austerity and charity performed without desire for fruit (तदित्यनभिसन्धाय फलं)' }
      ],
      antidoteEn: 'Greed is a bottomless abyss born of Rajas. Overcome it through generous charity (Dana), contentment, and dedicating possessions to the welfare of all.',
      antidoteTe: 'కామము, క్రోధము, లోభము (దురాశ) అనే మూడు ఆత్మవినాశకర నరక ద్వారాలు. సంతృప్తి, నిస్వార్థ దానగుణాలతో దురాశను జయించండి.',
      keyVerse: 'BG 16.21: त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः | कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ||'
    },
    {
      id: 'laziness',
      nameEn: 'Laziness',
      nameTe: 'బద్ధకం / ఆలస్యం / ప్రమత్తత',
      category: 'action',
      icon: '🛌',
      shlokas: [
        { chapter: 3, verse: '8', label: 'Ch 3: 8', note: 'Perform your prescribed duty; action is superior to inaction (कर्म ज्यायो ह्यकर्मणः)' },
        { chapter: 3, verse: '20', label: 'Ch 3: 20', note: 'Janaka and others attained perfection through action alone; act for world welfare (लोकसंग్రహमेवापि सम्पश्यन्कर्तुमर्हसि)' },
        { chapter: 6, verse: '16', label: 'Ch 6: 16', note: 'Yoga is not for one who eats too much or starves, nor for one who sleeps too much or stays awake (नात्यश्नतस्तु योगोऽस्ति)' },
        { chapter: 18, verse: '39', label: 'Ch 18: 39', note: 'Pleasure born of sleep, sloth and delusion is of the nature of Tamas (निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्)' }
      ],
      antidoteEn: 'Tamas manifests as lethargy and slumber. Break inertia by establishing a disciplined routine, moderate eating and sleep, and dynamic service.',
      antidoteTe: 'పని చేయకపోవడం కంటే కర్మ చేయడమే శ్రేష్ఠమైనది; పని చేయకపోతే శరీరయాత్ర కూడా సాగదు. ఆహార నిద్రలలో నియమం పాటిస్తూ బద్ధకాన్ని పారద్రోలండి.',
      keyVerse: 'BG 3.8: नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः | शरीरयात्रापि च ते न प्रसिद्ध్యేदकर्मणः ||'
    },
    {
      id: 'loneliness',
      nameEn: 'Loneliness',
      nameTe: 'ఒంటరితనం / ఏకాకితనం',
      category: 'peace',
      icon: '🌌',
      shlokas: [
        { chapter: 6, verse: '30', label: 'Ch 6: 30', note: 'He who sees Me everywhere and sees everything in Me is never separated from Me (यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति)' },
        { chapter: 9, verse: '29', label: 'Ch 9: 29', note: 'Those who worship Me with devotion abide in Me, and I in them (ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्)' },
        { chapter: 13, verse: '16', label: 'Ch 13: 16', note: 'Indivisible yet existing as if divided in all beings; close at hand yet far (अविभक्तं च भूतेषु विभक्तमिव च स्थितम्)' },
        { chapter: 13, verse: '18', label: 'Ch 13: 18', note: 'He is the Light of all lights, dwelling in the hearts of all (ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते)' }
      ],
      antidoteEn: 'You are never abandoned. The Eternal Companion dwells within your very breath and heartbeat. Turn loneliness into sacred communion with God.',
      antidoteTe: '"నన్ను సమస్త భూతాలలోనూ, సమస్త భూతాలను నా యందునూ చూసేవానికి నేను దూరం కాను, వాడు నాకు దూరం కాడు." పరమాత్మ నిరంతరం నీతోనే ఉన్నాడు.',
      keyVerse: 'BG 6.30: यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति | तस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||'
    },
    {
      id: 'losing_hope',
      nameEn: 'Losing Hope',
      nameTe: 'ఆశ కోల్పోవడం / నిరాశానిస్పృహలు',
      category: 'peace',
      icon: '🌅',
      shlokas: [
        { chapter: 4, verse: '11', label: 'Ch 4: 11', note: 'As people surrender unto Me, I reward them accordingly (ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्)' },
        { chapter: 9, verse: '22', label: 'Ch 9: 22', note: 'To those who meditate on Me with single-minded devotion, I bear their burdens (योगक्षेमं वहाम్యహమ్)' },
        { chapter: 9, verse: '34', label: 'Ch 9: 34', note: 'Engage your mind in Me, become My devotee; you will surely come to Me (मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु)' },
        { chapter: 18, verse: '66', label: 'Ch 18: 66', note: 'Surrender all duties unto Me alone; I will free you from sorrow, do not fear (मा शुचः)' },
        { chapter: 18, verse: '78', label: 'Ch 18: 78', note: 'Victory, opulence and eternal morality reside with Dharma (तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम)' }
      ],
      antidoteEn: 'Darkness is temporary; divine grace is eternal. When all earthly props fail, Lord Krishna guarantees to carry your welfare personally. Never despair.',
      antidoteTe: '"నన్ను నిరంతరం అనన్యభక్తితో స్మరించేవారి యోగక్షేమాలను నేనే స్వయంగా వహిస్తాను." ఈశ్వర విశ్వాసంతో ముందడుగు వేయండి, విజయం తథ్యం.',
      keyVerse: 'BG 9.22: अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||'
    },
    {
      id: 'lust',
      nameEn: 'Lust',
      nameTe: 'కామం / అనియంత్రిత కాంక్షలు',
      category: 'action',
      icon: '🔥',
      shlokas: [
        { chapter: 3, verse: '37', label: 'Ch 3: 37', note: 'Lust born of Rajas is the all-devouring, great sinful enemy (काम एष क्रोध एष रजोगुणसमुद्भवः महाशनो महापाप्मा)' },
        { chapter: 3, verse: '41', label: 'Ch 3: 41', note: 'Restrain senses from the beginning and slay this destroyer of knowledge (तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ)' },
        { chapter: 3, verse: '43', label: 'Ch 3: 43', note: 'Knowing the Self is superior to intellect, slay this formidable enemy lust (जहि शत्रुं महाबाहो कामरूपं दुरासदम्)' },
        { chapter: 5, verse: '22', label: 'Ch 5: 22', note: 'Pleasures born of sense-contact are nurseries of pain; the wise delight not in them (ये हि संस्पर्शजा भोगा दुःखयोनय एव ते)' },
        { chapter: 16, verse: '21', label: 'Ch 16: 21', note: 'Lust, anger and greed ruin the soul; renounce these three (कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्)' }
      ],
      antidoteEn: 'Sensual pleasures carry inherent pain. Realize your transcendent soul identity above senses and mind, and conquer cravings with spiritual discernment.',
      antidoteTe: 'రజోగుణం వల్ల పుట్టే కామమే జ్ఞానాన్ని దహించే మహా శత్రువు. ఇంద్రియాలు, మనస్సుల కంటే ఉన్నతమైన ఆత్మను ఆశ్రయించి అనియంత్రిత కాంక్షలను జయించండి.',
      keyVerse: 'BG 3.37: काम एष क्रोध एष रजोगुणसमुद्भवः | महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ||'
    },
    {
      id: 'forgiveness',
      nameEn: 'Practicing Forgiveness',
      nameTe: 'క్షమాగుణం / ఓర్పు సాధన',
      category: 'peace',
      icon: '🌸',
      shlokas: [
        { chapter: 11, verse: '44', label: 'Ch 11: 44', note: 'As a father pardons a son, a friend a friend, or lover a beloved, please forgive me (पितेव पुत्रस्य सखेव सख्युः प्रियः प्रियायार्हसि देव सोढुम्)' },
        { chapter: 12, verse: '13-14', label: 'Ch 12: 13,14', note: 'Free from malice, friendly, patient and forgiving in joy and grief (समदुःखसुखः क्षमी)' },
        { chapter: 16, verse: '1-3', label: 'Ch 16: 1-3', note: 'Forgiveness (Kshama), gentleness and modesty are divine virtues (तेजः क्षमा धృతిః శౌచమద్రోహో నాతిమానితా)' }
      ],
      antidoteEn: 'Forgiveness is the highest strength of noble minds. Free yourself from resentment and let divine compassion heal every wound.',
      antidoteTe: 'క్షమ అనేది దైవీ సంపదలలో అత్యున్నతమైనది. ఇతరుల తప్పులను ఓర్పుతో క్షమించే శాంత గుణాన్ని అలవర్చుకున్నప్పుడే అంతరంగ పవిత్రత లభిస్తుంది.',
      keyVerse: 'BG 11.44: तस्मात्प्रणम्य प्रणिधाय कायं प्रसादये त्वामहमीशमीड्यम् | पितेव पुत्रस्य सखेव सख्युः प्रियः प्रियायार्हसि देव सोढुम् ||'
    },
    {
      id: 'pride',
      nameEn: 'Pride',
      nameTe: 'గర్వం / అహంకారం',
      category: 'emotion',
      icon: '🦚',
      shlokas: [
        { chapter: 16, verse: '4', label: 'Ch 16: 4', note: 'Hypocrisy, arrogance, conceit, wrath and harshness belong to demonic nature (दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च)' },
        { chapter: 16, verse: '13-15', label: 'Ch 16: 13-15', note: 'Deluded egoist boasts: "I have gained this, I am wealthy and mighty" (इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्)' },
        { chapter: 18, verse: '26', label: 'Ch 18: 26', note: 'The sattvic actor is free from attachment and unegotistical (मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः)' },
        { chapter: 18, verse: '58', label: 'Ch 18: 58', note: 'If through pride you will not listen, you shall perish (अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि)' }
      ],
      antidoteEn: 'Ego blinds wisdom. Remember that all talents, breath, and destiny are loans from God. Humility is true strength.',
      antidoteTe: '"నేనే గొప్ప, నాకే అంతా తెలుసు" అనే అహంకారం సర్వనాశనానికి హేతువు. వినయం, నిరహంకార భావాలతో కర్తవ్యాన్ని నిర్వహించినప్పుడే ఉన్నతి లభిస్తుంది.',
      keyVerse: 'BG 18.58: मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि | अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि ||'
    },
    {
      id: 'seeking_peace',
      nameEn: 'Seeking Peace',
      nameTe: 'మానసిక శాంతి కోసం అన్వేషణ',
      category: 'peace',
      icon: '🕊️',
      shlokas: [
        { chapter: 2, verse: '66', label: 'Ch 2: 66', note: 'For the unintegrated there is no wisdom or peace; without peace how can there be happiness? (अशान्तस्य कुतः सुखम्)' },
        { chapter: 2, verse: '71', label: 'Ch 2: 71', note: 'One who abandons all cravings, free from possessiveness and ego, attains peace (स शान्तिमधिगच्छति)' },
        { chapter: 4, verse: '39', label: 'Ch 4: 39', note: 'One endowed with faith and controlled senses gains knowledge and supreme peace (परां शान्तिमचिरेणाधिगच्छति)' },
        { chapter: 5, verse: '29', label: 'Ch 5: 29', note: 'Knowing Me as receiver of sacrifices, Lord of all worlds and friend of all beings, one gains peace (ज्ञात्वा मां शान्तिमृच्छति)' },
        { chapter: 8, verse: '28', label: 'Ch 8: 28', note: 'Transcending merit of austerities, the yogi reaches the primal supreme abode (परं स्थानमुपैति चाद्यम्)' }
      ],
      antidoteEn: 'Peace is not found in external acquisition, but in inward release of cravings and knowing the Supreme Lord as your ever-loving Friend.',
      antidoteTe: 'సమస్త కోరికలను వదలి, ‘నేను, నాది’ అనే మమకారం లేకుండా నిరహంకారిగా ఉండేవాడే పరమ శాంతిని పొందుతాడు. చిత్త శాంతి లేనివానికి సుఖం ఎక్కడిది?',
      keyVerse: 'BG 2.71: विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः | निर्ममो निरहङ्कारः स शान्तिमधिगच्छति ||'
    },
    {
      id: 'temptation',
      nameEn: 'Temptation',
      nameTe: 'ప్రలోభం / ఇంద్రియ వ్యామోహం',
      category: 'mind',
      icon: '🎣',
      shlokas: [
        { chapter: 2, verse: '60', label: 'Ch 2: 60', note: 'The turbulent senses forcefully carry away the mind even of a striving wise person (इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः)' },
        { chapter: 2, verse: '61', label: 'Ch 2: 61', note: 'Restraining all senses, one should sit focused on Me (तानि सर्वाणि संयम्य युक्त आसीत मत्परः)' },
        { chapter: 2, verse: '70', label: 'Ch 2: 70', note: 'As rivers enter the steady ocean without disturbing it, desires enter the sage who attains peace (आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्)' },
        { chapter: 7, verse: '14', label: 'Ch 7: 14', note: 'This divine Maya of Mine is difficult to cross, but those who surrender to Me cross it easily (मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते)' }
      ],
      antidoteEn: 'Sensory lures are relentless waves. Stand rooted like the unmoving ocean; surrender to the Divine to easily transcend Maya’s alluring illusions.',
      antidoteTe: 'నదులు ఎన్ని చేరినా సముద్రం ఎలా నిశ్చలంగా ఉంటుందో, స్థితప్రజ్ఞుడు ప్రలోభాల మధ్య కూడా చలించడు. భగవంతుని శరణు వేడి మాయను దాటండి.',
      keyVerse: 'BG 2.70: आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् | तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ||'
    },
    {
      id: 'uncontrolled_mind',
      nameEn: 'Uncontrolled Mind',
      nameTe: 'చంచల మనస్సు / అదుపులేని చిత్తం',
      category: 'mind',
      icon: '🧘‍♂️',
      shlokas: [
        { chapter: 6, verse: '5', label: 'Ch 6: 5', note: 'One must elevate oneself by one’s own mind, for the mind alone is friend or foe (आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः)' },
        { chapter: 6, verse: '6', label: 'Ch 6: 6', note: 'For one who has conquered the mind, it is a friend; for the unconquered, it acts like an enemy (बन्धुरात्मात्मनस्तस्य येनैवात्मैवात्मना जितः)' },
        { chapter: 6, verse: '26', label: 'Ch 6: 26', note: 'Wherever the restless mind wanders, pull it back and bring it under control of the Self (यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्)' },
        { chapter: 6, verse: '35', label: 'Ch 6: 35', note: 'Undoubtedly the mind is restless and difficult to curb, but by practice (Abhyasa) and detachment (Vairagya) it is mastered (अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते)' }
      ],
      antidoteEn: 'The mind is either your greatest friend or worst enemy. Subdue its frantic restlessness through daily spiritual practice (Abhyasa) and dispassion (Vairagya).',
      antidoteTe: 'అదుపులో ఉన్న మనస్సు గొప్ప మిత్రుడు; అదుపు తప్పిన మనస్సు ప్రమాదకరమైన శత్రువు. నిరంతర అభ్యాసం, వైరాగ్యాల ద్వారానే చంచల చిత్తం స్థిరపడుతుంది.',
      keyVerse: 'BG 6.35: असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||'
    }
  ];

  // Filtering solutions
  const filteredSolutions = gitaSolutionsData.filter(sol => {
    // category filter
    if (solutionFilter !== 'all' && sol.category !== solutionFilter) return false;
    
    // search filter
    if (solutionSearch.trim() !== '') {
      const q = solutionSearch.toLowerCase().trim();
      const matchName = sol.nameEn.toLowerCase().includes(q) || sol.nameTe.toLowerCase().includes(q);
      const matchAntidote = sol.antidoteEn.toLowerCase().includes(q) || sol.antidoteTe.toLowerCase().includes(q);
      const matchShlokas = sol.shlokas.some(s => s.label.toLowerCase().includes(q) || s.note.toLowerCase().includes(q));
      return matchName || matchAntidote || matchShlokas;
    }
    return true;
  });

  // Cosmic Lineage Steps
  const cosmicSteps = [
    { step: 1, time: '~120,400,000 yrs ago', titleTe: 'శ్రీకృష్ణుడు సూర్యునికి గీతాబోధ', titleEn: 'Krishna teaches Sun-God Vivasvan', icon: '☀️' },
    { step: 2, time: 'Beginning of Treta (~2,005,000 yrs)', titleTe: 'వివస్వంతుడు మనువునకు ఉపదేశం', titleEn: 'Vivasvan passes Gita to Manu', icon: '🧘‍♂️' },
    { step: 3, time: '~2,005,000 yrs ago', titleTe: 'మనువు ఇక్ష్వాకు మహారాజునకు బోధ', titleEn: 'Manu teaches son Maharaja Ikshvaku', icon: '👑' },
    { step: 4, time: 'Raghu Dynasty', titleTe: 'రఘువంశ రాజర్షుల పరంపర పరిరక్షణ', titleEn: 'Preserved by Raghu Royal Lineage', icon: '🌳' },
    { step: 5, time: 'Birth of Sri Rama', titleTe: 'రఘువంశంలో శ్రీరామచంద్రుని జననం', titleEn: 'Shri Ramachandra born in Raghu Dynasty', icon: '🏹' },
    { step: 6, time: '~2 Million Years', titleTe: 'మానవ సమాజంలో 20 లక్షల సం. ప్రస్థానం', titleEn: 'Existed in human society for ~2M years', icon: '📜' },
    { step: 7, time: 'Over Time', titleTe: 'కాలక్రమంలో గీతాజ్ఞానం క్షీణించుట', titleEn: 'Knowledge becomes lost or diminished', icon: '⏳' },
    { step: 8, time: '~5,000 years ago', titleTe: 'కురుక్షేత్ర రథంపై అర్జునునికి పునఃప్రబోధం', titleEn: 'Krishna re-speaks Gita to Arjuna', icon: '🪷' }
  ];

  // Acharyas Lineage Steps
  const commentarySteps = [
    { step: 1, time: '~1,200 yrs (~800 CE)', nameTe: 'ఆది శంకరాచార్యులు', nameEn: 'Sankaracarya', work: 'Sankara-bhasya (అద్వైతం)', icon: '🕉️' },
    { step: 2, time: '~1,000 yrs (~1050 CE)', nameTe: 'శ్రీ రామానుజాచార్యులు', nameEn: 'Ramanujacarya', work: 'Bhagavad-gita bhasyam (విశిష్టాద్వైతం)', icon: '🪔' },
    { step: 3, time: '~750 yrs (~1250 CE)', nameTe: 'శ్రీ మధ్వాచార్యులు', nameEn: 'Madhvacarya', work: 'Gita-bhasya (ద్వైతం)', icon: '📜' },
    { step: 4, time: '~600 yrs (~1400 CE)', nameTe: 'శ్రీధర స్వామి', nameEn: 'Sridhara Svami', work: 'Subodhini (భక్తి-జ్ఞాన సమన్వయం)', icon: '✍️' },
    { step: 5, time: '~350 yrs (~1680 CE)', nameTe: 'విశ్వనాథ చక్రవర్తి ఠాకూర్', nameEn: 'Visvanatha Cakravarti', work: 'Sarartha Varsini Tikaa', icon: '🌸' },
    { step: 6, time: '~250 yrs (~1760 CE)', nameTe: 'బలదేవ విద్యాభూషణ', nameEn: 'Baladeva Vidyabhusana', work: 'Gita-bhusana (అచింత్య భేదాభేదం)', icon: '💎' },
    { step: 7, time: '1886 & 1891 AD', nameTe: 'భక్తివినోద ఠాకూర్', nameEn: 'Bhaktivinoda Thakura', work: 'Rasika-ranjana & Vidvad-ranjana', icon: '📖' },
    { step: 8, time: '1972 AD', nameTe: 'ఎ.సి. భక్తివేదాంత స్వామి ప్రభుపాద', nameEn: 'A.C. Bhaktivedanta Swami Prabhupada', work: 'Bhagavad-gita As It Is (విశ్వవ్యాప్తం)', icon: '🌍' }
  ];

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFDF8] rounded-3xl border-2 border-[#D4AF37] shadow-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-4 sm:px-6 py-4 flex items-center justify-between border-b-2 border-[#D4AF37] shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-1.5 rounded-2xl bg-white/10 border border-[#D4AF37]/50 shadow-xs">
              🪷
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black bg-[#FFE082] text-[#7B1113] uppercase tracking-wider">
                  {isEn ? 'BHAGAVAD GITA MASTER COMPENDIUM' : 'శ్రీమద్భగవద్గీత (గీతామృతం) సర్వస్వ దర్శిని'}
                </span>
                <span className="text-xs font-mono font-bold text-[#FFE57F]">
                  18 CHAPTERS • 700 VERSES • 20 LIFE SOLUTIONS
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold font-telugu-serif text-white tracking-tight mt-0.5">
                {isEn ? '18 Chapters, 18 Universal Lessons & 20 Life Problem Remedies' : 'భగవద్గీత 18 అధ్యాయాలు, జీవన పాఠాలు & 20 మానసిక సమస్యలకు దివ్య పరిష్కారాలు'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
            title={isEn ? 'Close' : 'మూసివేయి'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Navigation Tabs */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-[#FFF9EE] border-b border-[#E8DCC4] flex items-center justify-between gap-2 overflow-x-auto shrink-0 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('chapters_lessons')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'chapters_lessons'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-white text-[#5D4037] hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Layers className="w-4 h-4 text-[#FFD54F]" />
              <span>{isEn ? '1. 18 Chapters & 18 Lessons' : '1. 18 అధ్యాయాలు & 18 జీవన పాఠాలు'}</span>
            </button>

            <button
              onClick={() => setActiveTab('problems_solutions')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'problems_solutions'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-white text-[#5D4037] hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Heart className="w-4 h-4 text-[#FF5252]" />
              <span>{isEn ? '2. Life Solutions (20 Problems)' : '2. జీవిత సమస్యలకు పరిష్కారాలు (20 సమస్యలు)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('cosmic_timeline')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'cosmic_timeline'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-white text-[#5D4037] hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Clock className="w-4 h-4 text-[#D84315]" />
              <span>{isEn ? '3. Cosmic Timeline (~120M Yrs)' : '3. దైవిక కాలక్రమం (12 కోట్ల సం.)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('acharyas_commentaries')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'acharyas_commentaries'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-white text-[#5D4037] hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#1B5E20]" />
              <span>{isEn ? '4. Acharyas Lineage (Commentaries)' : '4. ఆచార్య భాష్య పరంపర (1200 సం. - 1972)'}</span>
            </button>
          </div>

          <span className="text-[11px] font-mono font-bold text-[#7B1113] bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300 ml-auto hidden md:inline">
            700 Verses • 20 Solutions
          </span>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* ================================================================= */}
          {/* TAB 1: 18 CHAPTERS & 18 CORE LIFE LESSONS (UNIFIED VIEW)          */}
          {/* ================================================================= */}
          {activeTab === 'chapters_lessons' && (
            <div className="space-y-4">
              {/* Shatka Filter Buttons */}
              <div className="flex items-center justify-between gap-2 flex-wrap bg-white p-2.5 rounded-2xl border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#7B1113] font-telugu-serif pl-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Filter by Shatka (Section):' : 'షట్క విభాగ ఫిల్టర్:'}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'all', labelTe: 'అన్ని 18 అధ్యాయాలు (All 18)', labelEn: 'All 18 Chapters (700 Verses)' },
                    { id: 'karma', labelTe: 'కర్మ షట్కం (అధ్యా. 1-6)', labelEn: 'Karma Shatka (Ch 1-6)' },
                    { id: 'bhakti', labelTe: 'భక్తి షట్కం (అధ్యా. 7-12)', labelEn: 'Bhakti Shatka (Ch 7-12)' },
                    { id: 'jnana', labelTe: 'జ్ఞాన షట్కం (అధ్యా. 13-18)', labelEn: 'Jnana Shatka (Ch 13-18)' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setShatkaFilter(tab.id as any)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        shatkaFilter === tab.id
                          ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                          : 'bg-amber-50 text-[#5D4037] hover:bg-amber-100'
                      }`}
                    >
                      {isEn ? tab.labelEn : tab.labelTe}
                    </button>
                  ))}
                </div>
              </div>

              {/* 18 Chapters Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredChapters.map(ch => (
                  <div
                    key={ch.chapter}
                    onClick={() => setSelectedChapterNumber(selectedChapterNumber === ch.chapter ? null : ch.chapter)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer bg-white ${
                      selectedChapterNumber === ch.chapter
                        ? 'border-[#7B1113] ring-2 ring-[#D4AF37] shadow-md bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE]'
                        : 'border-[#D4AF37]/50 hover:border-[#7B1113] shadow-2xs hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 border-b border-amber-100 pb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-lg shadow-2xs shrink-0">
                          {ch.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-[#7B1113] text-[#FFE082] text-[10.5px] font-black flex items-center justify-center shrink-0">
                              {ch.chapter}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                              {isEn ? ch.nameEn : ch.nameTe}
                            </h4>
                          </div>
                          <span className="text-[10px] text-[#5D4037] font-medium block mt-0.5">
                            {isEn ? ch.shatkaLabelEn : ch.shatkaLabelTe}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#7B1113] font-mono font-extrabold text-[10.5px] border border-amber-300 shrink-0">
                        {ch.verses} {isEn ? 'Verses' : 'శ్లోకాలు'}
                      </span>
                    </div>

                    {/* Core Life Lesson Banner */}
                    <div className="mt-2.5 p-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/80">
                      <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#D84315] font-telugu-serif">
                        <span>✨</span>
                        <span>{isEn ? `Lesson ${ch.chapter}: ${ch.lessonEn}` : `జీవన పాఠం ${ch.chapter}: ${ch.lessonTe}`}</span>
                      </div>
                      <p className="text-xs text-[#3E2723] leading-relaxed pt-1 font-medium">
                        {isEn ? ch.explanationEn : ch.explanationTe}
                      </p>
                    </div>

                    {/* Key Shloka Reference */}
                    <div className="mt-2 text-[10px] font-mono font-bold text-[#8B0000] bg-white px-2.5 py-1 rounded-lg border border-black/5 truncate">
                      📖 {ch.bgVerse}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] text-center space-y-1 shadow-sm">
                <span className="text-xs font-mono font-bold tracking-widest block text-[#FFD54F]">
                  !! యతో ధర్మస్తతో జయః • యత్ర యోగేశ్వరః కృష్ణో యత్ర పార్థో ధనుర్ధరః !!
                </span>
                <p className="text-sm font-serif italic text-white font-bold">
                  {isEn 
                    ? '"Whenever there is Dharma, I am there." — Bhagwat Geeta'
                    : '"ఎక్కడ ధర్మముండునో అక్కడ నేనుందును; ఎక్కడ కృష్ణార్జునులు ఉందురో అక్కడ నిశ్చయముగా విజయము, సంపద, నీతి ఉండును."'}
                </p>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 2: 20 PROBLEMS & SPIRITUAL REMEDIES IN BHAGAVAD GITA         */}
          {/* ================================================================= */}
          {activeTab === 'problems_solutions' && (
            <div className="space-y-4">
              {/* Introductory Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF8E1] via-[#FFF3E0] to-[#FFEBEE] border-2 border-[#D4AF37] shadow-xs">
                <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-lg bg-red-100 text-red-700 text-lg">❤️‍🩹</span>
                      <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                        {isEn ? 'Find Solutions for Your Problems in Bhagavad Gita' : 'జీవిత సమస్యలకు భగవద్గీతలో దివ్య నివారణలు (20 మానసిక పరిష్కారాలు)'}
                      </h4>
                    </div>
                    <p className="text-xs text-[#5D4037] mt-1 font-medium leading-relaxed">
                      {isEn 
                        ? 'Whatever struggle you face—anger, grief, anxiety, doubt, demotivation, or ego—Lord Krishna provides exact psychological and spiritual guidance in the holy Gita.'
                        : 'కోపం, విషాదం, భయం, బద్ధకం, కర్తవ్య అయోమయం లేదా ప్రియమైనవారి వియోగం వంటి మానసిక ఆందోళనలకు శ్రీకృష్ణ పరమాత్మ బోధించిన ఖచ్చితమైన శ్లోక సూత్రాలు.'}
                    </p>
                  </div>

                  <button
                    onClick={() => setEnlargedPoster({
                      src: './images/indian_history/find_solutions_in_bhagavad_gita.jpg',
                      title: isEn ? 'Find Solutions for your problems in Bhagavad Gita' : 'జీవిత సమస్యలకు భగవద్గీతలో దివ్య పరిష్కారాలు',
                      subtitle: isEn ? 'Original Master Reference Chart (20 Problems & Verses)' : '20 మానసిక సమస్యల మూల సూచిక పటం'
                    })}
                    className="px-3 py-1.5 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE082] text-xs font-bold transition-all shadow-2xs whitespace-nowrap cursor-pointer shrink-0 self-start sm:self-center"
                  >
                    🔍 {isEn ? 'View Original Poster' : 'మూల పటాన్ని చూడండి'}
                  </button>
                </div>

                {/* Search Bar & Category Filters */}
                <div className="mt-3.5 pt-3 border-t border-amber-200/80 flex flex-col sm:flex-row items-center gap-2.5">
                  {/* Search Input */}
                  <div className="relative w-full sm:w-72 shrink-0">
                    <Search className="w-4 h-4 text-amber-700 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={solutionSearch}
                      onChange={(e) => setSolutionSearch(e.target.value)}
                      placeholder={isEn ? "Search problem (e.g. Anger, Fear, Mind)..." : "సమస్యను వెతకండి (ఉదా: కోపం, భయం, మనస్సు)..."}
                      className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-amber-300 text-xs text-[#3E2723] placeholder-amber-600/60 focus:outline-hidden focus:ring-2 focus:ring-[#7B1113]"
                    />
                    {solutionSearch && (
                      <button 
                        onClick={() => setSolutionSearch('')} 
                        className="absolute right-2.5 top-2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0">
                    {[
                      { id: 'all', labelTe: 'అన్నీ (All 20)', labelEn: 'All (20)' },
                      { id: 'emotion', labelTe: 'భావోద్వేగాలు (Emotions)', labelEn: 'Emotions' },
                      { id: 'mind', labelTe: 'మనస్సు & సంకల్పం (Mind)', labelEn: 'Mind & Focus' },
                      { id: 'action', labelTe: 'కర్మ & ప్రవర్తన (Action)', labelEn: 'Duty & Action' },
                      { id: 'peace', labelTe: 'శాంతి & ఓదార్పు (Peace)', labelEn: 'Peace & Solace' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setSolutionFilter(f.id as any)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          solutionFilter === f.id
                            ? 'bg-[#7B1113] text-[#FFE082] shadow-2xs'
                            : 'bg-white/80 text-[#5D4037] hover:bg-amber-100 border border-amber-200'
                        }`}
                      >
                        {isEn ? f.labelEn : f.labelTe}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 20 Problems Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
                {filteredSolutions.map((sol) => {
                  const isSelected = selectedProblemId === sol.id;
                  return (
                    <div
                      key={sol.id}
                      onClick={() => setSelectedProblemId(isSelected ? null : sol.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer bg-white ${
                        isSelected 
                          ? 'border-[#7B1113] ring-2 ring-[#D4AF37] shadow-md bg-gradient-to-br from-[#FFFDF8] to-[#FFF8EE]'
                          : 'border-amber-200 hover:border-[#7B1113] shadow-2xs hover:shadow-xs'
                      }`}
                    >
                      {/* Top Header of Problem Card */}
                      <div className="flex items-start justify-between gap-2 pb-2 border-b border-amber-100">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-lg shadow-2xs shrink-0">
                            {sol.icon}
                          </span>
                          <div>
                            <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                              {sol.nameEn}
                            </h5>
                            <span className="text-xs font-bold text-[#D84315] font-telugu-serif block">
                              {sol.nameTe}
                            </span>
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-[#7B1113] border border-amber-300 shrink-0">
                          {sol.shlokas.length} {isEn ? 'Verses' : 'శ్లోక నిధులు'}
                        </span>
                      </div>

                      {/* Gita Guidance Antidote */}
                      <div className="mt-2.5 p-2 rounded-xl bg-amber-50/70 border border-amber-200/60">
                        <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#8B0000]">
                          <ShieldAlert className="w-3.5 h-3.5 text-[#D84315] shrink-0" />
                          <span>{isEn ? 'Gita Guidance / Antidote:' : 'భగవద్గీతా మార్గదర్శనం / నివారణ:'}</span>
                        </div>
                        <p className="text-xs text-[#3E2723] leading-relaxed pt-1 font-medium">
                          {isEn ? sol.antidoteEn : sol.antidoteTe}
                        </p>
                      </div>

                      {/* Exact Shloka Badges (From Poster) */}
                      <div className="mt-2.5 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                          {isEn ? 'Referenced Chapters & Shlokas:' : 'గీతా అధ్యాయాలు & శ్లోక సూచిక:'}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sol.shlokas.map((sh, idx) => (
                            <span
                              key={idx}
                              title={sh.note}
                              className="px-2 py-0.5 rounded-lg bg-white border border-[#D4AF37] text-[10.5px] font-mono font-bold text-[#7B1113] shadow-2xs hover:bg-[#7B1113] hover:text-[#FFE082] transition-colors"
                            >
                              📖 {sh.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expanded Key Verse if Selected */}
                      {isSelected && sol.keyVerse && (
                        <div className="mt-3 p-2.5 rounded-xl bg-gradient-to-r from-[#4A0012] to-[#7B1113] text-[#FFE082] border border-[#D4AF37] animate-in fade-in duration-200">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD54F] block">
                            {isEn ? 'Key Sanctified Shloka:' : 'ప్రధాన మూల శ్లోకం:'}
                          </span>
                          <p className="text-xs font-serif font-bold text-white mt-1 leading-relaxed">
                            {sol.keyVerse}
                          </p>
                          <div className="mt-2 space-y-1 pt-1.5 border-t border-amber-300/30 text-[11px] text-amber-100">
                            {sol.shlokas.map((s, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <span className="font-mono text-[#FFD54F] shrink-0 font-bold">• {s.label}:</span>
                                <span>{s.note}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Reassurance Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] border-2 border-[#D4AF37] text-center space-y-1.5 shadow-sm">
                <span className="text-xs font-mono font-bold tracking-widest block text-[#FFD54F]">
                  !! సర్వధర్మాన్ పరిత్యజ్య మామేకం శరణం వ్రజ | అహం త్వాం సర్వపాపేభ్యో మోక్షయిష్యామి మా శుచః !!
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-white font-medium">
                  {isEn 
                    ? '"Abandon all varieties of anxieties and simply surrender unto Me. I shall deliver you from all distress, fear not!" — Bhagavad Gita 18.66'
                    : '"సమస్త ఆందోళనలను, భయాలను విడిచి నన్ను మాత్రమే శరణువేడుము; నేను నిన్ను సమస్త దుఃఖాల నుండి విముక్తుడిని చేస్తాను, శోకించకు!" — భగవద్గీత 18.66'}
                </p>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 3: COSMIC & ANCIENT DESCENT (120M YRS ➔ KURUKSHETRA)          */}
          {/* ================================================================= */}
          {activeTab === 'cosmic_timeline' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300">
                <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? 'From Sun-God Vivasvan to Kurukshetra War (8 Cosmic Stages)' : 'సూర్యదేవుని నుండి కురుక్షేత్ర రణరంగం వరకు గీతా ప్రస్థానం (8 యుగాలు)'}
                </h4>
                <p className="text-xs text-[#5D4037] mt-0.5">
                  {isEn 
                    ? 'As revealed by Lord Sri Krishna in Chapter 4, Verses 1 to 3.' 
                    : 'భగవద్గీత 4వ అధ్యాయం (1-3 శ్లోకాల) నందు శ్రీకృష్ణ పరమాత్మ స్వయంగా వెల్లడించిన పరమ ప్రాచీన పరంపర.'}
                </p>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-3.5 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-3 sm:before:left-4 before:w-1 before:bg-gradient-to-b before:from-amber-400 before:via-orange-500 before:to-[#7B1113] before:rounded-full">
                {cosmicSteps.map(s => (
                  <div key={s.step} className="relative p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs flex items-center justify-between gap-3">
                    <div className="absolute -left-6 sm:-left-8 top-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#7B1113] border-2 border-[#FFE082] text-[#FFE082] text-[10px] font-black flex items-center justify-center">
                      {s.step}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl p-1 rounded-lg bg-amber-50 border border-amber-200">{s.icon}</span>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">{isEn ? s.titleEn : s.titleTe}</h5>
                        <span className="text-[10px] text-[#5D4037] font-semibold">{s.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 4: ACHARYAS & COMMENTARIES (1200 YRS ➔ 1972 AD)               */}
          {/* ================================================================= */}
          {activeTab === 'acharyas_commentaries' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-300">
                <h4 className="text-xs sm:text-sm font-bold text-[#1B5E20] font-telugu-serif">
                  {isEn ? 'History of the Bhagavad-gita: 8 Great Commentators' : 'చారిత్రక ఆచార్య భాష్య & వ్యాఖ్యాన పరంపర (శంకరుల నుండి ప్రభుపాదుల వరకు)'}
                </h4>
                <p className="text-xs text-[#5D4037] mt-0.5">
                  {isEn 
                    ? 'How the sacred wisdom was expounded through foundational philosophical commentaries and spread worldwide.' 
                    : 'వేదాంత ప్రస్థానత్రయి భాష్యాల ద్వారా ప్రపంచవ్యాప్తంగా వ్యాపించిన గీతా వైభవం.'}
                </p>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-3.5 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-3 sm:before:left-4 before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:via-blue-600 before:to-[#7B1113] before:rounded-full">
                {commentarySteps.map(a => (
                  <div key={a.step} className="relative p-3.5 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs flex items-center justify-between gap-3 flex-wrap">
                    <div className="absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1B5E20] border-2 border-[#FFE082] text-[#FFE082] text-[10px] font-black flex items-center justify-center">
                      {a.step}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl p-1 rounded-lg bg-emerald-50 border border-emerald-200">{a.icon}</span>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#7B1113] font-telugu-serif">{isEn ? a.nameEn : a.nameTe}</h5>
                        <span className="text-[11px] font-bold text-[#D84315] font-telugu-serif block">{a.work}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#1B5E20] font-mono font-bold text-[10px] border border-emerald-300">
                      {a.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
          <div className="pt-4 mt-2 border-t-2 border-[#D4AF37]/50 space-y-2.5 bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70 p-3.5 rounded-2xl border border-amber-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
                {isEn ? 'మూల సచిత్ర పటాలు (Original Illustrated Source Posters):' : 'మూల సచిత్ర పటాలు:'}
              </span>
              <span className="text-[10.5px] text-[#5D4037] font-medium">
                {isEn ? 'Click any title to view & zoom original poster' : 'పూర్తి పటాన్ని వీక్షించడానికి & జూమ్ చేయడానికి క్లిక్ చేయండి'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                {
                  src: './images/indian_history/bhagavad_gita_18_chapters.jpg',
                  icon: '📜',
                  titleEn: '18 Chapters & 700 Verses Chart',
                  titleTe: '18 అధ్యాయాలు & 700 శ్లోకాల మూల పటం',
                  subtitleEn: 'Sanskrit Chapter Names and Verse Counts (Total 700 Verses)',
                  subtitleTe: 'అధ్యాయాల పేర్లు & మొత్తం 700 శ్లోకాల మూల పటం'
                },
                {
                  src: './images/indian_history/bhagavad_gita_18_lessons.jpg',
                  icon: '🧘',
                  titleEn: '18 Core Life Lessons Chart',
                  titleTe: '18 జీవన పాఠాల మూల పటం',
                  subtitleEn: '18 Core Principles for Daily Life and Self-Mastery',
                  subtitleTe: 'జీవిత సాఫల్యానికి 18 ప్రధాన ఆధ్యాత్మిక సూత్రాలు'
                },
                {
                  src: './images/indian_history/find_solutions_in_bhagavad_gita.jpg',
                  icon: '💡',
                  titleEn: '20 Life Problem Remedies Chart',
                  titleTe: '20 మానసిక సమస్యల నివారణల మూల పటం',
                  subtitleEn: '20 Common Emotional & Life Struggles and Exact Gita Shloka Remedies',
                  subtitleTe: '20 మానసిక-జీవన సమస్యలకు గీతా శ్లోక నివారణల సమగ్ర పట్టిక'
                },
                {
                  src: './images/indian_history/timeline_of_bhagavad_gita.jpg',
                  icon: '⏳',
                  titleEn: 'Cosmic Timeline Chart',
                  titleTe: 'దైవిక కాలరేఖ మూల పటం',
                  subtitleEn: 'From Sun-God Vivasvan to Kurukshetra War (~120M to 5,000 Yrs)',
                  subtitleTe: '12 కోట్ల సంవత్సరాల పురాతన పరంపర'
                },
                {
                  src: './images/indian_history/history_of_the_bhagavad_gita_commentaries.jpg',
                  icon: '🏛️',
                  titleEn: 'History of Commentaries & Acharyas Chart',
                  titleTe: 'ఆచార్యుల భాష్య పరంపర మూల పటం',
                  subtitleEn: '8 Great Acharyas from 1200 Yrs ago to 1972 AD',
                  subtitleTe: 'ఆచార్యులు, వ్యాఖ్యానాలు & విశ్వవ్యాప్తి'
                }
              ].map((p, pIdx) => (
                <div key={pIdx} className="flex items-center rounded-xl bg-white border border-[#D4AF37] hover:border-[#7B1113] shadow-2xs overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => setEnlargedPoster({
                      src: p.src,
                      title: isEn ? p.titleEn : p.titleTe,
                      subtitle: isEn ? p.subtitleEn : p.subtitleTe
                    })}
                    className="px-3 py-1.5 text-xs font-bold text-[#7B1113] hover:text-[#D84315] hover:bg-[#FFF8E7] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>{p.icon}</span>
                    <span>{isEn ? p.titleEn : p.titleTe}</span>
                    <Maximize2 className="w-3 h-3 text-[#D84315]" />
                  </button>
                  <a
                    href={p.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 border-l border-[#D4AF37]/50 bg-amber-50 hover:bg-amber-100 text-[#7B1113] hover:text-[#D84315] flex items-center gap-1 text-[11px] font-bold transition-colors cursor-pointer"
                    title={isEn ? "Open picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                  >
                    <ExternalLink className="w-3 h-3 text-[#D84315]" />
                    <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F0] px-4 py-3 border-t border-[#E8DCC4] flex items-center justify-between text-xs text-[#5D4037] shrink-0">
          <span className="text-[11px] font-medium hidden sm:inline">
            {isEn ? 'Srimad Bhagavad Gita • 18 Chapters, 700 Verses & 20 Life Problem Remedies' : 'శ్రీమద్భగవద్గీత • 18 అధ్యాయాలు, 700 శ్లోకాలు & 20 మానసిక సమస్యలకు దివ్య పరిష్కారాలు'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE082] font-bold text-xs cursor-pointer shadow-xs ml-auto transition-colors"
          >
            {isEn ? 'Close Window' : 'ముగించు (Close)'}
          </button>
        </div>
      </div>

      {/* Built-in Poster Lightbox with Pan/Zoom */}
      {enlargedPoster && (
        <div 
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4"
          onClick={(e) => { e.stopPropagation(); setEnlargedPoster(null); }}
        >
          {/* Lightbox Controls Header */}
          <div 
            className="w-full max-w-3xl flex items-center justify-between gap-3 text-white mb-2 px-2"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🪷</span>
              <span className="text-xs sm:text-sm font-bold text-[#FFE57F]">
                {enlargedPoster.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={enlargedPoster.src}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="px-3 py-1.5 rounded-lg bg-[#FFE57F] hover:bg-[#FFF9C4] text-[#7B1113] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isEn ? "Picture Link" : "చిత్రం లింక్"}</span>
              </a>
              <button
                onClick={(e) => { e.stopPropagation(); setPosterZoom(prev => Math.min(prev + 0.25, 3)); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setPosterZoom(prev => Math.max(prev - 0.25, 0.5)); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setPosterZoom(1); }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors cursor-pointer"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#FFE57F] px-1">
                {Math.round(posterZoom * 100)}%
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setEnlargedPoster(null); }}
                className="p-2 rounded-lg bg-[#B71C1C] hover:bg-[#D32F2F] text-white transition-colors cursor-pointer ml-1"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container */}
          <div 
            className="overflow-auto max-h-[85vh] max-w-full flex items-center justify-center p-2"
            onClick={e => e.stopPropagation()}
          >
            <div 
              style={{ transform: `scale(${posterZoom})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
              className="shadow-2xl rounded-2xl overflow-hidden border-2 border-[#D4AF37]"
            >
              <img 
                src={enlargedPoster.src} 
                alt={enlargedPoster.title} 
                className="max-h-[80vh] w-auto block select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};
