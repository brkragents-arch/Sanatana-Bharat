import React from 'react';
import { useMythology } from '../context/MythologyContext';
import { 
  Sparkles, 
  GitFork, 
  Compass, 
  Users, 
  BookOpen, 
  BookMarked, 
  ShieldCheck, 
  Flame, 
  HeartHandshake,
  Layers
} from 'lucide-react';

interface DashboardSection {
  number: number;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  icon: React.ReactNode;
  badge: string;
  badgeEn: string;
  action: () => void;
}

export const DashboardCards: React.FC = () => {
  const { setViewMode, selectCharacter, language } = useMythology();
  const isEn = language === 'en';

  const sections: DashboardSection[] = [
    {
      number: 1,
      title: 'పరిచయం',
      titleEn: 'Introduction',
      subtitle: 'భాగవత సృష్టి తత్త్వ విజ్ఞాన దర్శనం',
      subtitleEn: 'Ontology of Cosmic Creation',
      description: 'బమ్మెర పోతన తెలుగు భాగవతమునందు విదుర-మైత్రేయ సంవాదము ద్వారా వివరించబడిన ఆదిమ సృష్టి రహస్యాల సమాహారము.',
      descriptionEn: 'The profound cosmic creation revelation transmitted through the Vidura-Maitreya dialogue in Srimad Bhagavatam.',
      icon: <Sparkles className="w-5 h-5 text-[#D84315]" />,
      badge: 'ఆదిమ విజ్ఞానము',
      badgeEn: 'Cosmic Wisdom',
      action: () => {
        selectCharacter('sri-vishnu', true);
      }
    },
    {
      number: 2,
      title: 'సనాతన ధర్మ ఆవిర్భావము',
      titleEn: 'Cosmic Chronology (13 Steps)',
      subtitle: 'సర్వేశ్వరుని నుండి బ్రహ్మ & సృష్టి క్రమము',
      subtitleEn: 'Exact Chronological Ontological Descent',
      description: 'సర్వేశ్వరుని అభివ్యక్తత, కాలము, ప్రకృతి, మహత్తత్త్వము, అహంకారము, పంచభూతములు, విరాట్పురుషుడు, బ్రహ్మ, రుద్రుడు వరకు 13 సోపానాలు.',
      descriptionEn: 'The exact 13-stage causal evolution: Sarveshvara ➔ Kala/Svabhava ➔ Prakriti ➔ Mahat ➔ Ahankara ➔ Tanmatras ➔ Bhutas ➔ Virat ➔ Brahma.',
      icon: <Layers className="w-5 h-5 text-[#E65100]" />,
      badge: '13 సృష్టి సోపానాలు',
      badgeEn: '13 Causal Steps',
      action: () => {
        setViewMode('sanatana_chronology');
      }
    },
    {
      number: 3,
      title: 'చతుర్ముఖ బ్రహ్మ ఆవిర్భావము',
      titleEn: 'Emergence of Brahma',
      subtitle: 'శ్రీహరి నాభీకమలంలో ఉద్భవం',
      subtitleEn: 'Golden Lotus Manifestation',
      description: 'ప్రళయ జలములలో అనంత శేషునిపై యోగనిద్రలో ఉన్న శ్రీమహావిష్ణువు నాభి నుండి సహస్రదళ సువర్ణ పద్మములో బ్రహ్మ జననం.',
      descriptionEn: 'Chaturmukha Brahma emerges within the lotus blooming from Lord Vishnu\'s navel upon the causal ocean.',
      icon: <span className="text-xl">🪷</span>,
      badge: 'స్వయంభూ జననము',
      badgeEn: 'Self-Emergence',
      action: () => {
        selectCharacter('chaturmukha-brahma', true);
      }
    },
    {
      number: 4,
      title: 'బ్రహ్మదేవుని నాలుగు ముఖాలు',
      titleEn: 'Four Countenances of Brahma',
      subtitle: 'నాలుగు వేదాలు, ఛందస్సులు & దిక్కులు',
      subtitleEn: 'The Four Vedas & Metrical Hymns',
      description: 'తూర్పు ముఖమున ఋగ్వేదము, దక్షిణ ముఖమున యజుర్వేదము, పశ్చిమ ముఖమున సామవేదము, ఉత్తర ముఖమున అథర్వణవేదముల ఆవిర్భావము.',
      descriptionEn: 'East Face (Rigveda), South Face (Yajurveda), West Face (Samaveda), and North Face (Atharvaveda).',
      icon: <BookOpen className="w-5 h-5 text-[#1976D2]" />,
      badge: 'చతుర్వేద రాశి',
      badgeEn: 'Four Vedas',
      action: () => {
        selectCharacter('brahma-rigveda', true);
      }
    },
    {
      number: 5,
      title: 'సృష్టి క్రమము',
      titleEn: 'Creation Sequence Flow',
      subtitle: 'దశవిధ ప్రాకృత, వైకృత & కౌమార సృష్టి',
      subtitleEn: 'Tenfold Stages of Creation',
      description: 'మహత్తత్వము నుండి పంచభూతముల వరకు ప్రాకృత సృష్టి; స్థావర, తిర్యక్, దేవ, మానుష వైకృత సృష్టి మరియు 14 లోకాల నిర్మాణం.',
      descriptionEn: 'The 10 stages: 6 primary natural (Prakrita) and 4 secondary embodied (Vaikrita) stages, plus the 14 cosmic planetary planes.',
      icon: <Compass className="w-5 h-5 text-[#388E3C]" />,
      badge: '10 సృష్టి దశలు',
      badgeEn: '10 Stages',
      action: () => {
        setViewMode('flow');
      }
    },
    {
      number: 6,
      title: 'ప్రజాపతుల ఆవిర్భావము',
      titleEn: 'Emergence of Prajapatis',
      subtitle: 'బ్రహ్మ అంగోద్భవ మానసపుత్రులు',
      subtitleEn: 'Mind-Born Sons & Progenitors',
      description: 'మరీచి, అత్రి, అంగిరస, పులస్త్య, పులహ, క్రతు, భృగు, వసిష్ఠ, నారద మరియు కుడి బొటనవేలి నుండి దక్ష ప్రజాపతుల ఆవిర్భావము.',
      descriptionEn: 'Marichi, Atri, Angirasa, Pulastya, Pulaha, Kratu, Bhrigu, Vasistha, Narada, and Daksha from Brahma\'s right thumb.',
      icon: <Users className="w-5 h-5 text-[#7B1113]" />,
      badge: '10 ప్రజాపతులు',
      badgeEn: '10 Prajapatis',
      action: () => {
        selectCharacter('marichi', true);
      }
    },
    {
      number: 7,
      title: 'దక్ష ప్రజాపతి – ప్రసూతి',
      titleEn: 'Daksha & Prasuti',
      subtitle: 'బ్రహ్మ-మను వంశముల పవిత్ర దాంపత్యం',
      subtitleEn: 'Sacred Matrimonial Alliance',
      description: 'బ్రహ్మ కుడి అంగుష్ఠోద్భవుడైన దక్షుడు, స్వాయంభువ మనువు కుమార్తె ప్రసూతిని వివాహమాడి సకల ప్రజాపతులకు అధిపతియై వెలుగొందుట.',
      descriptionEn: 'Daksha Prajapati marries Prasuti, daughter of Swayambhuva Manu, becoming supreme leader of all Prajapatis.',
      icon: <HeartHandshake className="w-5 h-5 text-[#E91E63]" />,
      badge: 'కేంద్ర దంపతులు',
      badgeEn: 'Central Couple',
      action: () => {
        setViewMode('daksha_vamsa');
        selectCharacter('daksha-prajapati', true);
      }
    },
    {
      number: 8,
      title: 'కుమార్తెలు & వివాహాలు',
      titleEn: '16 Daughters & Marriages',
      subtitle: '16 మంది దివ్య కన్యలు & వారి భర్తలు',
      subtitleEn: 'Dharma, Agni, Pitrus & Shiva',
      description: 'ధర్మదేవునికి 13 మంది (శ్రద్ధ, మూర్త్యాదులు), అగ్నికి స్వాహాదేవి, పితృదేవతలకు స్వధాదేవి, పరమశివునికి జగన్మాత సతీదేవి సమర్పణ.',
      descriptionEn: '13 daughters wedded to Dharma (Shraddha, Murti, etc.), Swaha to Agni, Swadha to Pitrus, and Sati Devi to Lord Shiva.',
      icon: <Flame className="w-5 h-5 text-[#D84315]" />,
      badge: '16 దివ్య కన్యలు',
      badgeEn: '16 Daughters',
      action: () => {
        setViewMode('daksha_vamsa');
      }
    },
    {
      number: 9,
      title: 'బ్రహ్మ వంశము',
      titleEn: 'Family of Brahma',
      subtitle: 'బ్రహ్మ 5 ప్రధాన శాఖలు & కశ్యప సంతతి',
      subtitleEn: '5 Branches, 24 Daughters & 26 Kings',
      description: 'బ్రహ్మర్షులు (దక్షుని 24 కన్యలు), అష్ట రుద్రులు, చతుఃకుమారులు, ధర్మదేవుడు, మనువు (ఉత్తానపాద & ప్రియవ్రత 26 తరాలు), కశ్యపుని సంతతి (12 ఆదిత్యులు, దైత్య, దానవ, పక్షి, సర్పములు).',
      descriptionEn: 'The full Vedic diagram: Brahmarishis (24 daughters), 8 Rudras, 4 Kumaras, Dharma, Manu (Priyavrata 26 kings & Uttanapada/Prithu/Prachetasas), and Kashyapa\'s wives & lineages.',
      icon: <span className="text-xl">🪷</span>,
      badge: 'బ్రహ్మ వంశం',
      badgeEn: 'Family of Brahma',
      action: () => {
        setViewMode('brahma_family');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    },
    {
      number: 10,
      title: 'సంపూర్ణ వంశవృక్షము',
      titleEn: 'Full Genealogical Tree',
      subtitle: 'ఇంటరాక్టివ్ బహుళ తరాల వంశ విస్తరణ',
      subtitleEn: 'Multi-Generational Tree',
      description: 'శ్రీమహావిష్ణువు నుండి బ్రహ్మ, మనువు, ప్రజాపతులు, దక్ష-ప్రసూతులు, 16 కన్యలు మరియు శ్రీ నరనారాయణ, పావకాది సంతతి సమగ్ర వృక్ష దర్శనం.',
      descriptionEn: 'Interactive hierarchical generations from Lord Vishnu to Brahma, Prajapatis, Daksha, and descendants like Nara-Narayana.',
      icon: <GitFork className="w-5 h-5 text-[#7B1113]" />,
      badge: 'బహుళ తరాలు',
      badgeEn: 'Generations',
      action: () => {
        setViewMode('tree');
      }
    },
    {
      number: 11,
      title: 'భాగవత పురాణ ఆధారాలు',
      titleEn: 'Scriptural Sources in Order',
      subtitle: 'పోతన తెలుగు భాగవత పద్యాలు & ప్రమాణాలు',
      subtitleEn: 'Chronological Passages & Verses',
      description: 'స్కంధము, అధ్యాయము, పద్యములు, తాత్పర్యములు మరియు telugubhagavatam.org మూల సూచనల భాండాగారము.',
      descriptionEn: 'Comprehensive repository of Pothana Bhagavatam verses, meanings, and direct citations organized chronologically.',
      icon: <BookMarked className="w-5 h-5 text-[#5D4037]" />,
      badge: 'ప్రామాణిక గ్రంథం',
      badgeEn: 'Scriptures',
      action: () => {
        setViewMode('scriptures');
      }
    }
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8E1] border border-[#D4AF37] text-xs font-bold text-[#7B1113] uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4 text-[#D84315]" />
          <span>{isEn ? 'Primary Table of Contents • 11 Core Modules' : 'ప్రధాన విషయ సూచిక • 11 విభాగాలు'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#7B1113] font-telugu-serif">
          {isEn ? 'Srimad Bhagavatam Creation & Lineage Encyclopedia' : 'భాగవత సృష్టి రహస్యాల దర్శిని'}
        </h2>
        <p className="text-xs sm:text-sm text-[#5D4037] max-w-xl mx-auto mt-1">
          {isEn
            ? 'Click any module below to open its corresponding family tree, chronological flow, or scriptural narrative.'
            : 'దిగువన ఉన్న ఏ కార్డుపై క్లిక్ చేసినా సంబంధిత వంశవృక్ష విభాగాన్ని, పౌరాణిక కథనాన్ని నేరుగా తెరవవచ్చు'}
        </p>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {sections.map((sec) => (
          <div
            key={sec.number}
            onClick={sec.action}
            className="group relative bg-[#FFFFFF] rounded-2xl p-4 border-1.5 border-[#E8DCC4] hover:border-[#D84315] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#D84315] to-[#7B1113] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#FFF8E1] border border-[#D4AF37] text-[11px] font-bold text-[#7B1113] flex items-center justify-center">
                  {sec.number}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF7F0] text-[#5D4037] border border-[#E8DCC4]">
                  {isEn ? sec.badgeEn : sec.badge}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1.5 rounded-lg bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-2xs group-hover:scale-110 transition-transform">
                  {sec.icon}
                </div>
                <h3 className="text-sm font-bold text-[#7B1113] group-hover:text-[#D84315] transition-colors leading-tight font-telugu-serif">
                  {isEn ? sec.titleEn : sec.title}
                </h3>
              </div>

              <h4 className="text-[11px] font-bold text-[#D84315] mb-1 leading-snug">
                {isEn ? sec.subtitleEn : sec.subtitle}
              </h4>

              <p className="text-[11px] text-[#5D4037] leading-relaxed line-clamp-3">
                {isEn ? sec.descriptionEn : sec.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-[#F0E6D2] flex items-center justify-between text-[11px] font-semibold text-[#7B1113] group-hover:text-[#D84315]">
              <span>{isEn ? 'Explore Section' : 'వివరాలు చూడండి'}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">➔</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
