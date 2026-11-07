import React, { useState, useRef, useMemo } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { VEDAS_DATA, VEDAS_PRESERVATION_CHART_DATA, VEDIC_INDIAN_SCRIPTURES_DATA } from '../../data/vedasData';
import type { VedaInfo } from '../../data/vedasData';
import { VedicScripturesHierarchy } from './VedicScripturesHierarchy';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Compass, 
  Info,
  BookOpen,
  Table,
  Image as ImageIcon,
  Sparkles,
  Music,
  Flame,
  Scroll,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

interface MindMapNode {
  id: string;
  label: string;
  category: 'center' | 'origin' | 'aspect' | 'creation' | 'prajapati' | 'daksha' | 'descendants';
  angle: number; // in degrees
  distance: number; // radius from center
  icon: string;
  charId?: string;
  vedaId?: string;
  parentId?: string;
  isSubNode?: boolean;
  subType?: 'deities' | 'upanishads' | 'divisions' | 'yajnas' | 'music' | 'branches' | 'ayurveda' | 'structure' | 'mantra';
  summary: string;
  color: string;
}

// Fixed dimensions for bounding box collision calculation
const CARD_W = 226;
const CARD_H = 120;
const MIN_GAP_X = 26;
const MIN_GAP_Y = 22;

// Automatic Overlap-Prevention & Separation Solver
function resolveOverlap(
  items: { id: string; x: number; y: number }[],
  iterations = 100
) {
  const pos = items.map(n => ({ ...n }));
  const reqX = CARD_W + MIN_GAP_X;
  const reqY = CARD_H + MIN_GAP_Y;

  for (let it = 0; it < iterations; it++) {
    let maxOverlap = 0;
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        const a = pos[i];
        const b = pos[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;

        const overlapX = reqX - Math.abs(dx);
        const overlapY = reqY - Math.abs(dy);

        if (overlapX > 0 && overlapY > 0) {
          maxOverlap = Math.max(maxOverlap, overlapX, overlapY);
          // Push apart along the axis of minimum displacement needed
          if (overlapX / reqX < overlapY / reqY) {
            const shift = (overlapX / 2 + 1) * (dx >= 0 ? 1 : -1);
            b.x += shift;
            a.x -= shift;
          } else {
            const shift = (overlapY / 2 + 1) * (dy >= 0 ? 1 : -1);
            b.y += shift;
            a.y -= shift;
          }
        }
      }
    }
    if (maxOverlap === 0) break;
  }
  return pos;
}

export const MindMapView: React.FC = () => {
  const { selectCharacter, selectedCharacterId, language } = useMythology();
  const isEn = language === 'en';

  // Sub-view mode inside MindMapView
  const [activeTab, setActiveTab] = useState<'graph' | 'vedas_explorer' | 'comparison' | 'sources'>('graph');
  const [selectedVedaId, setSelectedVedaId] = useState<string>('rigveda');

  // By default, sub-topics of all Vedas are COLLAPSED. Only expand when user clicks a specific Veda!
  const [expandedVedaId, setExpandedVedaId] = useState<string | null>(null);

  // Canvas zoom/pan controls
  const [scale, setScale] = useState(0.68);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const containerRef = useRef<HTMLDivElement>(null);

  // Center coordinate of Mind Map canvas (2000 x 1600 coordinate plane)
  const centerX = 1000;
  const centerY = 800;

  // Complete Radial Mind Map Node Positions with Hierarchical Veda Sub-Branches
  const nodes: MindMapNode[] = [
    // =======================================================================
    // BRANCH A: ఆవిర్భావము (Origin: 204° to 228°)
    // =======================================================================
    {
      id: 'node-vishnu',
      label: isEn ? 'Sri Maha Vishnu (Origin)' : 'శ్రీమహావిష్ణువు (మూలం)',
      category: 'origin',
      angle: 204,
      distance: 490,
      icon: '🌊',
      charId: 'sri-vishnu',
      summary: isEn ? 'Ocean of milk, cosmic yoganidra • Cause of all existence' : 'క్షీరసాగర శేషశయన యోగనిద్ర • జగత్కారణుడు',
      color: '#1976D2'
    },
    {
      id: 'node-padma',
      label: isEn ? 'Lotus & 1000 Celestial Years Penance' : 'నాభీకమలము & తపస్సు',
      category: 'origin',
      angle: 228,
      distance: 430,
      icon: '🪷',
      charId: 'chaturmukha-brahma',
      summary: isEn ? 'Golden 1000-petal lotus • Awakening through cosmic tapas' : 'సహస్రదళ సువర్ణ పద్మము • వేయి దివ్యవర్షాల తపస్సు',
      color: '#0288D1'
    },

    // =======================================================================
    // BRANCH B: చతుర్వేదములు & చతుర్ముఖములు (Vedas: 252° to 338°)
    // =======================================================================

    // 1. RIGVEDA ROOT & SUB-NODES
    {
      id: 'node-rigveda',
      label: isEn ? 'East Face: Rigveda' : 'పూర్వ ముఖం: ఋగ్వేదము',
      category: 'aspect',
      angle: 252,
      distance: 480,
      icon: '📜',
      charId: 'brahma-rigveda',
      vedaId: 'rigveda',
      summary: isEn ? 'Gayatri Meter • First & Oldest Veda • 10 Mandalas, 10,600 Mantras' : 'గాయత్రీ ఛందస్సు • ప్రథమ వేదము • 10 మండలాలు, 10,600 మంత్రాలు',
      color: '#D84315'
    },
    {
      id: 'node-rigveda-deities',
      label: isEn ? 'Principal Deities' : 'ప్రధాన దేవతలు',
      category: 'aspect',
      angle: 240,
      distance: 720,
      icon: '⚡',
      parentId: 'node-rigveda',
      charId: 'brahma-rigveda',
      vedaId: 'rigveda',
      isSubNode: true,
      subType: 'deities',
      summary: isEn ? 'Agni (Fire/Yajna chief), Indra, Varuna (Rta), Surya, Ushas' : 'అగ్ని (యజ్ఞాధిపతి), ఇంద్రుడు, వరుణుడు (ఋతం), సూర్యుడు, ఉషస్సు',
      color: '#D84315'
    },
    {
      id: 'node-rigveda-upanishads',
      label: isEn ? 'Aitareya & Kaushitaki' : 'ఐతరేయ & కౌషీతకి ఉపనిషత్తులు',
      category: 'aspect',
      angle: 252,
      distance: 750,
      icon: '📖',
      parentId: 'node-rigveda',
      charId: 'brahma-rigveda',
      vedaId: 'rigveda',
      isSubNode: true,
      subType: 'upanishads',
      summary: isEn ? 'Atman, Brahman & cosmic origin • "Prajnanam Brahma" Mahavakya' : 'ఆత్మ, పరబ్రహ్మ, సృష్టి ఆవిర్భావం • "ప్రజ్ఞానం బ్రహ్మ" మహావాక్యం',
      color: '#D84315'
    },
    {
      id: 'node-rigveda-gayatri',
      label: isEn ? 'Gayatri Mantra & Culture' : 'గాయత్రీ మంత్రం & వేద సంస్కృతి',
      category: 'aspect',
      angle: 264,
      distance: 710,
      icon: '🔱',
      parentId: 'node-rigveda',
      charId: 'brahma-rigveda',
      vedaId: 'rigveda',
      isSubNode: true,
      subType: 'mantra',
      summary: isEn ? 'Mandala 3.62.10 Gayatri Mantra • Bedrock of Indian culture & science' : 'మండల 3.62.10 గాయత్రీ మంత్రం • భారతీయ సంస్కృతి, తత్త్వ, ఖగోళ మూలం',
      color: '#D84315'
    },

    // 2. YAJURVEDA ROOT & SUB-NODES
    {
      id: 'node-yajurveda',
      label: isEn ? 'South Face: Yajurveda' : 'దక్షిణ ముఖం: యజుర్వేదము',
      category: 'aspect',
      angle: 280,
      distance: 440,
      icon: '🔥',
      charId: 'brahma-yajurveda',
      vedaId: 'yajurveda',
      summary: isEn ? 'Trishtubh Meter • Ritual Action (Karma Yoga) • Prose & Verse' : 'త్రిష్టుప్ ఛందస్సు • యజ్ఞ కర్మకాండ • గద్య-పద్య మిశ్రమము',
      color: '#E65100'
    },
    {
      id: 'node-yajur-branches',
      label: isEn ? 'Shukla & Krishna Recensions' : 'శుక్ల & కృష్ణ యజుర్వేదాలు',
      category: 'aspect',
      angle: 272,
      distance: 720,
      icon: '⚖️',
      parentId: 'node-yajurveda',
      charId: 'brahma-yajurveda',
      vedaId: 'yajurveda',
      isSubNode: true,
      subType: 'divisions',
      summary: isEn ? 'Shukla (Vajasaneyi - text & rites separate) • Krishna (Taittiriya - merged)' : 'శుక్ల (వాజసనేయి - వివరణలు వేరు) • కృష్ణ (తైత్తిరీయ - కలగలిసినవి)',
      color: '#E65100'
    },
    {
      id: 'node-yajur-yajnas',
      label: isEn ? 'Sacred Yajnas' : 'ప్రముఖ యజ్ఞ క్రతువులు',
      category: 'aspect',
      angle: 282,
      distance: 750,
      icon: '🪔',
      parentId: 'node-yajurveda',
      charId: 'brahma-yajurveda',
      vedaId: 'yajurveda',
      isSubNode: true,
      subType: 'yajnas',
      summary: isEn ? 'Agnihotra, Darsha-Purnamasa, Somayajna, Ashvamedha • Adhvaryu priests' : 'అగ్నిహోత్రం, దర్శ-పూర్ణమాస, సోమయాగం, అశ్వమేధం • అధ్వర్యు విధి',
      color: '#E65100'
    },
    {
      id: 'node-yajur-upanishads',
      label: isEn ? '4 Great Upanishads' : 'యజుర్వేద 4 మహా ఉపనిషత్తులు',
      category: 'aspect',
      angle: 294,
      distance: 720,
      icon: '📜',
      parentId: 'node-yajurveda',
      charId: 'brahma-yajurveda',
      vedaId: 'yajurveda',
      isSubNode: true,
      subType: 'upanishads',
      summary: isEn ? 'Isha (Isha Vasyam), Taittiriya (Satyam Vada), Brihadaranyaka, Katha' : 'ఈశావాస్య, తైత్తిరీయ (సత్యం వద), బృహదారణ్యక (అసతోమా), కఠ (నచికేత)',
      color: '#E65100'
    },

    // 3. SAMAVEDA ROOT & SUB-NODES
    {
      id: 'node-samaveda',
      label: isEn ? 'West Face: Samaveda' : 'పశ్చిమ ముఖం: సామవేదము',
      category: 'aspect',
      angle: 308,
      distance: 480,
      icon: '🎵',
      charId: 'brahma-samaveda',
      vedaId: 'samaveda',
      summary: isEn ? 'Jagati Meter • 1,875 Melodic Chants • "Vedanam Samavedo\'smi"' : 'జగతీ ఛందస్సు • 1,875 గాన మంత్రాలు • "వేదానాం సామవేదోఽస్మి"',
      color: '#C2185B'
    },
    {
      id: 'node-sama-swaras',
      label: isEn ? '7 Notes: Sa Re Ga Ma Pa Dha Ni' : 'సప్తస్వరాలు (స రి గ మ ప ద ని)',
      category: 'aspect',
      angle: 300,
      distance: 720,
      icon: '🎶',
      parentId: 'node-samaveda',
      charId: 'brahma-samaveda',
      vedaId: 'samaveda',
      isSubNode: true,
      subType: 'music',
      summary: isEn ? 'Fountainhead of Indian classical music • Samagana sacred patterns' : 'భారతీయ సంగీత స్వరాల జనని • సామగానం • నాదబ్రహ్మ భక్తి రసం',
      color: '#C2185B'
    },
    {
      id: 'node-sama-shakhas',
      label: isEn ? '3 Shakhas & Udgatri' : '3 ప్రధాన శాఖలు & ఉద్గాత',
      category: 'aspect',
      angle: 310,
      distance: 750,
      icon: '📿',
      parentId: 'node-samaveda',
      charId: 'brahma-samaveda',
      vedaId: 'samaveda',
      isSubNode: true,
      subType: 'branches',
      summary: isEn ? 'Kauthuma, Ranayaniya, Jaiminiya recensions • Soma Yajna chants' : 'కౌథుమ, రాణాయనీయ, జైమినీయ శాఖలు • సోమయాగాలలో ఉద్గాతృ గానం',
      color: '#C2185B'
    },
    {
      id: 'node-sama-upanishads',
      label: isEn ? 'Chandogya & Kena' : 'ఛాందోగ్య & కేన ఉపనిషత్తులు',
      category: 'aspect',
      angle: 322,
      distance: 720,
      icon: '🪷',
      parentId: 'node-samaveda',
      charId: 'brahma-samaveda',
      vedaId: 'samaveda',
      isSubNode: true,
      subType: 'upanishads',
      summary: isEn ? 'Mahavakya "Tat Tvam Asi" • OM Udgitha meditation • Nature of consciousness' : '"తత్త్వమసి" మహావాక్యం • ఓంకార ఉద్గీథ ఉపాసన • కేనేషితం పరమాత్మ విచారణ',
      color: '#C2185B'
    },

    // 4. ATHARVAVEDA ROOT & SUB-NODES
    {
      id: 'node-atharva',
      label: isEn ? 'North Face: Atharvaveda' : 'ఉత్తర ముఖం: అధర్వణవేదము',
      category: 'aspect',
      angle: 338,
      distance: 450,
      icon: '🌿',
      charId: 'brahma-atharvaveda',
      vedaId: 'atharvaveda',
      summary: isEn ? 'Anushtubh Meter • Daily Living & Healing • Brahma Priest Rite' : 'అనుష్టుప్ ఛందస్సు • నిత్య జీవిత & చికిత్సా వేదం • బ్రహ్మ క్రియ',
      color: '#2E7D32'
    },
    {
      id: 'node-atharva-ayurveda',
      label: isEn ? 'Foundation of Ayurveda' : 'ఆయుర్వేద మూల గంగ',
      category: 'aspect',
      angle: 330,
      distance: 720,
      icon: '🪴',
      parentId: 'node-atharva',
      charId: 'brahma-atharvaveda',
      vedaId: 'atharvaveda',
      isSubNode: true,
      subType: 'ayurveda',
      summary: isEn ? 'Natural herbal pharmacology, holistic healing, disease prevention' : 'దివ్య వనమూలికల శాస్త్రం, రోగ నివారణ, శారీరక-మానసిక స్వస్థత',
      color: '#2E7D32'
    },
    {
      id: 'node-atharva-structure',
      label: isEn ? '20 Kandas & Everyday Life' : '20 కాండలు & నిత్య శాంతి',
      category: 'aspect',
      angle: 340,
      distance: 750,
      icon: '📚',
      parentId: 'node-atharva',
      charId: 'brahma-atharvaveda',
      vedaId: 'atharvaveda',
      isSubNode: true,
      subType: 'structure',
      summary: isEn ? '730 Hymns, 6,000 Mantras • Social harmony, family welfare, protection' : '730 సూక్తాలు, 6,000 మంత్రాలు • కుటుంబ సామరస్యం, శాంతి, రక్షణ',
      color: '#2E7D32'
    },
    {
      id: 'node-atharva-upanishads',
      label: isEn ? 'Mundaka, Mandukya, Prashna' : 'ముండక, మాండూక్య, ప్రశ్నోపనిషత్తులు',
      category: 'aspect',
      angle: 350,
      distance: 720,
      icon: '✨',
      parentId: 'node-atharva',
      charId: 'brahma-atharvaveda',
      vedaId: 'atharvaveda',
      isSubNode: true,
      subType: 'upanishads',
      summary: isEn ? '"Satyameva Jayate" motto • OM 4 states • Sage Pippalada discourses' : '"సత్యమేవ జయతే" నినాదం • ఓంకార జాగ్రత్-స్వప్న-తురీయాలు • పిప్పలాద సంవాదం',
      color: '#2E7D32'
    },

    // =======================================================================
    // BRANCH C: సృష్టి క్రమము (Creation: 358° to 24°)
    // =======================================================================
    {
      id: 'node-prakrita',
      label: isEn ? 'Prakrita 10-fold Creation' : 'ప్రాకృత దశవిధ సృష్టి',
      category: 'creation',
      angle: 358,
      distance: 490,
      icon: '🌌',
      charId: 'chaturmukha-brahma',
      summary: isEn ? 'Mahat-tattva, Tanmatras, Panchabhutas & 14 Cosmic Planetary Realms' : 'మహత్తత్త్వము నుండి పంచభూతములు & 14 లోకాలు',
      color: '#7B1FA2'
    },
    {
      id: 'node-vaikrita',
      label: isEn ? 'Vaikrita & Organic Species' : 'వైకృత & జీవ సృష్టి',
      category: 'creation',
      angle: 24,
      distance: 480,
      icon: '🌱',
      charId: 'chaturmukha-brahma',
      summary: isEn ? 'Immobile plants, beasts, celestial devas, and human kingdoms' : 'స్థావర, తిర్యక్, దేవ, మానుష చతుర్విధ జన్మలు',
      color: '#512DA8'
    },

    // =======================================================================
    // BRANCH D: ప్రజాపతులు & మనువు (Prajapatis: 54° to 116°)
    // =======================================================================
    {
      id: 'node-sanaka',
      label: isEn ? 'Sanaka Kumaras (Nivritti)' : 'సనకాది మునులు (నివృత్తి)',
      category: 'prajapati',
      angle: 54,
      distance: 480,
      icon: '🧘',
      charId: 'sanaka-adi',
      summary: isEn ? 'First mind-born sons of Brahma • Eternal celibate sages' : 'బ్రహ్మ తొలి మానసపుత్రులు • నిత్య బ్రహ్మచారులు',
      color: '#F57C00'
    },
    {
      id: 'node-marichi',
      label: isEn ? 'Marichi & Saptarshis' : 'మరీచి & సప్తర్షులు',
      category: 'prajapati',
      angle: 85,
      distance: 500,
      icon: '✨',
      charId: 'marichi',
      summary: isEn ? 'Mind-born progenitors: Marichi, Atri, Angirasa, Pulastya, etc.' : 'మనస్సు నుండి మరీచి, అత్రి, అంగిరసాది ప్రజాపతులు',
      color: '#C99700'
    },
    {
      id: 'node-manu',
      label: isEn ? 'Swayambhuva Manu & Shatarupa' : 'స్వాయంభువ మనువు & శతరూప',
      category: 'prajapati',
      angle: 116,
      distance: 480,
      icon: '👑',
      charId: 'swayambhuva-manu',
      summary: isEn ? 'Brahma\'s split form • Parents of Prasuti, Devahuti, Akuti' : 'బ్రహ్మ కాయ విభజన • ప్రసూతి తల్లిదండ్రులు',
      color: '#795548'
    },

    // =======================================================================
    // BRANCH E: దక్ష ప్రజాపతి – ప్రసూతి (Daksha: 144° to 186°)
    // =======================================================================
    {
      id: 'node-daksha',
      label: isEn ? 'Daksha Prajapati (Right Thumb)' : 'దక్ష ప్రజాపతి (అంగుష్ఠోద్భవుడు)',
      category: 'daksha',
      angle: 144,
      distance: 470,
      icon: '👑',
      charId: 'daksha-prajapati',
      summary: isEn ? 'Born from right thumb • Sovereign king of all Prajapatis' : 'కుడి బొటనవేలి నుండి జననం • ప్రజాపతుల అధిపతి',
      color: '#D84315'
    },
    {
      id: 'node-prasuti',
      label: isEn ? 'Prasuti Devi (Manu\'s Daughter)' : 'ప్రసూతి దేవి (మను పుత్రిక)',
      category: 'daksha',
      angle: 166,
      distance: 440,
      icon: '🌺',
      charId: 'prasuti',
      summary: isEn ? 'Daughter of Swayambhuva Manu • Beloved queen of Daksha' : 'స్వాయంభువ మనువు కుమార్తె • దక్షుని పత్ని',
      color: '#E91E63'
    },
    {
      id: 'node-daughters',
      label: isEn ? '16 Divine Daughters' : '16 మంది దివ్య దుహిత్రులు',
      category: 'daksha',
      angle: 186,
      distance: 480,
      icon: '💐',
      charId: 'shraddha',
      summary: isEn ? '13 to Dharma, Swaha to Agni, Swadha to Pitris, Sati to Shiva' : 'ధర్మునికి 13, అగ్నికి స్వాహా, పితృలకు స్వధా, శివునికి సతీ',
      color: '#AD1457'
    },

    // =======================================================================
    // BRANCH F: సంతతి & అవతారములు (Descendants: Outer Orbit: 132° to 186°)
    // =======================================================================
    {
      id: 'node-naranarayana',
      label: isEn ? 'Sri Nara-Narayana Sages' : 'శ్రీ నర-నారాయణ మహర్షులు',
      category: 'descendants',
      angle: 132,
      distance: 720,
      icon: '🏔️',
      charId: 'nara-narayana',
      summary: isEn ? 'Sons of Murti Devi & Dharma • Twin Vishnu Avatars in Badrikashrama' : 'మూర్తీదేవి & ధర్ముని పుత్రులు • శ్రీహరి ప్రత్యక్షావతారాలు',
      color: '#C99700'
    },
    {
      id: 'node-satidevi',
      label: isEn ? 'Sati Devi (Dakshayani)' : 'సతీదేవి (దాక్షాయని)',
      category: 'descendants',
      angle: 160,
      distance: 720,
      icon: '🔱',
      charId: 'sati-devi',
      summary: isEn ? 'Consort of Shiva • Yogic immolation at Daksha\'s Yajna' : 'పరమశివుని పత్ని • దక్షాధ్వర యోగాగ్ని త్యాగము',
      color: '#C62828'
    },
    {
      id: 'node-pavaka',
      label: isEn ? 'Pavaka & 49 Sacred Fires' : 'పావకాది 49 అగ్నులు',
      category: 'descendants',
      angle: 186,
      distance: 730,
      icon: '🔥',
      charId: 'swaha',
      summary: isEn ? 'Offspring of Swaha & Agni • Triple and 49 sacrificial fires' : 'స్వాహా-అగ్నిదేవుల సంతతి • యజ్ఞాగ్ని విస్తరణ',
      color: '#BF360C'
    }
  ];

  // Dynamic collision-free coordinate resolver
  const nodePositions = useMemo(() => {
    const visibleNodes = nodes.filter(node => {
      const isFiltered = activeFilter === 'all' || activeFilter === node.category;
      if (node.isSubNode) {
        return node.vedaId === expandedVedaId && isFiltered;
      }
      return isFiltered;
    });

    const raw = visibleNodes.map(node => {
      const rad = (node.angle * Math.PI) / 180;
      return {
        id: node.id,
        x: centerX + node.distance * Math.cos(rad),
        y: centerY + node.distance * Math.sin(rad)
      };
    });

    const relaxed = resolveOverlap(raw);
    const map = new Map<string, { x: number; y: number }>();
    relaxed.forEach(p => map.set(p.id, { x: p.x, y: p.y }));

    // Fallback for non-rendered nodes so connectors don't fail
    nodes.forEach(node => {
      if (!map.has(node.id)) {
        const rad = (node.angle * Math.PI) / 180;
        map.set(node.id, {
          x: centerX + node.distance * Math.cos(rad),
          y: centerY + node.distance * Math.sin(rad)
        });
      }
    });

    return map;
  }, [nodes, activeFilter, expandedVedaId, centerX, centerY]);

  // Pan event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setScale(prev => Math.min(Math.max(prev * zoomFactor, 0.45), 2.2));
  };

  const resetView = () => {
    setScale(0.68);
    setPan({ x: 0, y: 0 });
  };

  const setZoom100 = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  // Modal for Vedas Preservation & Loss Chart
  const [isPreservationModalOpen, setIsPreservationModalOpen] = useState<boolean>(false);
  const [preservationZoom, setPreservationZoom] = useState<number>(1);

  // Modal for Vedic Indian Scriptures Hierarchy Chart
  const [isScripturesModalOpen, setIsScripturesModalOpen] = useState<boolean>(false);
  const [scripturesZoom, setScripturesZoom] = useState<number>(1);

  // Currently focused Veda in the Knowledge Explorer tab
  const currentVeda: VedaInfo = VEDAS_DATA.find(v => v.id === selectedVedaId) || VEDAS_DATA[0];

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[780px] relative">
      
      {/* =================================================================== */}
      {/* TOP HEADER & MULTI-VIEW NAVIGATION BAR */}
      {/* =================================================================== */}
      <div className="bg-[#FFFFFF] px-4 py-3 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2.5 z-10 shadow-2xs">
        
        {/* Title & Description */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37] shadow-xs">
            <Compass className="w-5 h-5 text-[#7B1113]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[#7B1113] font-telugu-serif">
                {isEn ? 'Universal Vedic Mind Map (చతుర్వేద రహస్య దర్శిని)' : 'రహస్య దర్శిని మైండ్ మ్యాప్ & చతుర్వేద విజ్ఞాన కోశం'}
              </h3>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] tracking-wider">
                {isEn ? '4 Vedas Extracted' : 'మూల ఆధారాలు సమగ్రం'}
              </span>
            </div>
            <p className="text-xs text-[#5D4037]">
              {isEn 
                ? 'Lord Brahma at center branching into Rig, Yajur, Sama, and Atharva Vedas with all deities, shakhas, and Upanishads' 
                : 'చతుర్ముఖ బ్రహ్మ కేంద్రంగా సమగ్ర చతుర్వేదాలు, ప్రధాన దేవతలు, శాఖలు, ఉపనిషత్తులు, యజ్ఞాలు & సంగీత మూలాలు'}
            </p>
          </div>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center bg-[#FAF7F0] p-1 rounded-xl border border-[#D4AF37]/60 shadow-xs gap-1 flex-wrap">
          <button
            onClick={() => setActiveTab('graph')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'graph'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'text-[#5D4037] hover:bg-[#F4EEDF]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{isEn ? 'Radial Mind Map' : 'కేంద్ర వలయ మైండ్ మ్యాప్'}</span>
          </button>

          <button
            onClick={() => setActiveTab('vedas_explorer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vedas_explorer'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'text-[#5D4037] hover:bg-[#F4EEDF]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isEn ? 'Vedas Deep Dive' : 'చతుర్వేద విజ్ఞాన నిధి'}</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'text-[#5D4037] hover:bg-[#F4EEDF]'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>{isEn ? 'Comparative Matrix' : 'తులనాత్మక పట్టిక'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'sources'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'text-[#5D4037] hover:bg-[#F4EEDF]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{isEn ? 'Source Infographics' : 'మూల చిత్రాలు'}</span>
          </button>
        </div>

      </div>

      {/* =================================================================== */}
      {/* 0. VEDIC INDIAN SCRIPTURES HIERARCHY (SHRUTI & SMRITI HIERARCHICAL TREE) */}
      {/* User requested: include this at the starting of this page */}
      {/* =================================================================== */}
      <VedicScripturesHierarchy
        onSelectVeda={(vedaId) => {
          setSelectedVedaId(vedaId);
          setActiveTab('vedas_explorer');
        }}
        defaultExpanded={true}
      />

      {/* =================================================================== */}
      {/* 1. RADIAL MIND MAP CANVAS VIEW */}
      {/* =================================================================== */}
      {activeTab === 'graph' && (
        <div className="flex-1 flex flex-col relative">
          
          {/* Controls Strip: Filters & Zoom */}
          <div className="bg-[#FFFDF7] px-4 py-2 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 z-10 text-xs">
            {/* Branch Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#7B1113] mr-1 hidden sm:inline">
                {isEn ? 'Branches:' : 'శాఖలు:'}
              </span>
              {[
                { id: 'all', label: isEn ? '✨ All Branches' : '✨ అన్ని శాఖలు' },
                { id: 'aspect', label: isEn ? '📜 4 Vedas' : '📜 చతుర్వేదాలు' },
                { id: 'origin', label: isEn ? '🌊 Cosmic Origin' : '🌊 ఆవిర్భావం' },
                { id: 'creation', label: isEn ? '⏳ Creation Stages' : '⏳ సృష్టి క్రమం' },
                { id: 'prajapati', label: isEn ? '🧘 Prajapatis & Manu' : '🧘 ప్రజాపతులు' },
                { id: 'daksha', label: isEn ? '👑 Daksha & Prasuti' : '👑 దక్ష-ప్రసూతి' },
                { id: 'descendants', label: isEn ? '🌟 Descendants' : '🌟 సంతతి' }
              ].map(pill => (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                    activeFilter === pill.id
                      ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                      : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}

              {/* Sub-topics Collapse All Quick Button */}
              {expandedVedaId && (
                <button
                  onClick={() => setExpandedVedaId(null)}
                  className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] hover:bg-[#FFE082] transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
                  title={isEn ? 'Collapse all Veda subtopics' : 'వేద ఉపశాఖలను మూయండి'}
                >
                  <span>✖</span>
                  <span>{isEn ? 'Collapse Subtopics' : 'ఉపశాఖలు మూయండి'}</span>
                </button>
              )}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setScale(prev => Math.min(prev + 0.15, 2.2))}
                className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
                title={isEn ? 'Zoom In' : 'జూమ్ ఇన్'}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <span className="font-semibold text-[#5D4037] w-12 text-center text-xs">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale(prev => Math.max(prev - 0.15, 0.35))}
                className="p-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
                title={isEn ? 'Zoom Out' : 'జూమ్ అవుట్'}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={resetView}
                className="px-2 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer text-xs font-bold flex items-center gap-1"
                title={isEn ? 'Fit View (68%)' : 'ఫిట్ వ్యూ (68%)'}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isEn ? 'Fit' : 'పూర్తి'}</span>
              </button>
              <button
                onClick={setZoom100}
                className="px-2 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#E8DCC4] cursor-pointer text-xs font-bold flex items-center gap-1"
                title={isEn ? '100% Zoom' : '100% జూమ్'}
              >
                <Maximize2 className="w-3 h-3" />
                <span>100%</span>
              </button>
            </div>
          </div>

          {/* Interactive Viewport */}
          <div 
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            className={`flex-1 overflow-hidden relative cursor-grab select-none bg-[radial-gradient(#D4AF37_0.8px,transparent_0.8px)] [background-size:24px_24px] min-h-[720px] ${
              isDragging ? 'cursor-grabbing' : ''
            }`}
          >
            <div
              className="absolute left-1/2 top-1/2 w-[2000px] h-[1600px] -ml-[1000px] -mt-[800px] transition-transform duration-75 origin-center"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              }}
            >
              <svg className="w-[2000px] h-[1600px] absolute inset-0 pointer-events-none">
                {/* Concentric Golden Orbit Guides */}
                <circle cx={centerX} cy={centerY} r={220} fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <circle cx={centerX} cy={centerY} r={460} fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.35" />
                <circle cx={centerX} cy={centerY} r={725} fill="none" stroke="#C99700" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />

                {/* Connecting Lines for ALL Nodes (Primary & Sub-Nodes) */}
                {nodes.map(node => {
                  const pos = nodePositions.get(node.id);
                  if (!pos) return null;
                  const isFiltered = activeFilter === 'all' || activeFilter === node.category;

                  // If node is a sub-node branching out from its parent Veda:
                  if (node.parentId) {
                    if (node.vedaId !== expandedVedaId) {
                      return null;
                    }
                    const parentPos = nodePositions.get(node.parentId);
                    if (parentPos) {
                      return (
                        <path
                          key={`branch-${node.id}`}
                          d={`M ${parentPos.x} ${parentPos.y} Q ${(parentPos.x + pos.x) / 2} ${(parentPos.y + pos.y) / 2} ${pos.x} ${pos.y}`}
                          fill="none"
                          stroke={isFiltered ? node.color : '#E8DCC4'}
                          strokeWidth={isFiltered ? 2.5 : 1}
                          strokeDasharray={isFiltered ? 'none' : '3 3'}
                          opacity={isFiltered ? 0.9 : 0.2}
                        />
                      );
                    }
                    return null;
                  }

                  // Primary Root Ray from Central Lord Brahma
                  return (
                    <path
                      key={`line-${node.id}`}
                      d={`M ${centerX} ${centerY} Q ${(centerX + pos.x) / 2 + 10} ${(centerY + pos.y) / 2 - 10} ${pos.x} ${pos.y}`}
                      fill="none"
                      stroke={isFiltered ? node.color : '#E8DCC4'}
                      strokeWidth={isFiltered ? 2 : 1}
                      strokeDasharray={isFiltered ? 'none' : '2 2'}
                      opacity={isFiltered ? 0.7 : 0.25}
                    />
                  );
                })}
              </svg>

              {/* ============================================================ */}
              {/* CENTRAL ROOT NODE: CHATURMUKHA BRAHMA */}
              {/* ============================================================ */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  selectCharacter('chaturmukha-brahma', true);
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-30"
                style={{ left: `${centerX}px`, top: `${centerY}px` }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB300] to-[#FF8F00] blur-md opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all animate-pulse" />
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFF8E1] via-[#FFE082] to-[#FFB300] p-1 border-3 border-[#7B1113] shadow-xl flex flex-col items-center justify-center text-center">
                  <span className="text-3xl filter drop-shadow">🪷</span>
                  <h2 className="text-sm font-bold text-[#7B1113] font-telugu-serif leading-tight mt-0.5">
                    {isEn ? 'Chaturmukha Brahma' : 'చతుర్ముఖ బ్రహ్మ'}
                  </h2>
                  <span className="text-[10px] bg-[#7B1113] text-[#FFE082] px-2 py-0.5 rounded-full font-bold mt-1 shadow-2xs">
                    {isEn ? 'Center Root' : 'కేంద్ర మూల బిందువు'}
                  </span>
                  <span className="text-[9px] text-[#5D4037] font-semibold mt-0.5">
                    {isEn ? 'Creator • Veda Purusha' : 'సృష్టికర్త • వేదపురుషుడు'}
                  </span>
                </div>
              </div>

              {/* ============================================================ */}
              {/* RADIAL MIND MAP NODES (PRIMARY & VEDA SUB-BRANCHES) */}
              {/* ============================================================ */}
              {nodes.map(node => {
                const pos = nodePositions.get(node.id);
                if (!pos) return null;
                const isFiltered = activeFilter === 'all' || activeFilter === node.category;
                const isSelected = selectedCharacterId === node.charId;

                // Handle Sub-Nodes vs Primary Nodes styling
                if (node.isSubNode) {
                  if (node.vedaId !== expandedVedaId) {
                    return null;
                  }

                  return (
                    <div
                      key={node.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (node.vedaId) {
                          setSelectedVedaId(node.vedaId);
                        }
                        if (node.charId) {
                          selectCharacter(node.charId, true);
                        }
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 ${
                        isFiltered ? 'opacity-100' : 'opacity-20 pointer-events-none'
                      }`}
                      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
                    >
                      <div
                        className="w-[210px] p-2.5 rounded-xl bg-[#FFFFFF] border-2 shadow-md hover:shadow-xl hover:scale-105 transition-all text-left"
                        style={{ borderLeftColor: node.color, borderLeftWidth: '4px' }}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-base">{node.icon}</span>
                          <h5 className="text-[11px] font-bold text-[#7B1113] truncate font-telugu-serif flex-1">
                            {node.label}
                          </h5>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#FFF8E1] text-[#D84315] font-bold border border-[#D4AF37]/50">
                            {isEn ? 'Sub' : 'ఉపశాఖ'}
                          </span>
                        </div>
                        <p className="text-[9.5px] text-[#5D4037] line-clamp-2 leading-tight">
                          {node.summary}
                        </p>
                        <div className="mt-1 flex items-center justify-between text-[8.5px] font-bold text-[#D84315]">
                          <span>{isEn ? 'Scripture Details' : 'ఆధారాలు & కథ'}</span>
                          <span>➔</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Primary Node Card
                const isThisVedaExpanded = node.vedaId && expandedVedaId === node.vedaId;

                return (
                  <div
                    key={node.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (node.vedaId) {
                        setExpandedVedaId(prev => prev === node.vedaId ? null : (node.vedaId ?? null));
                        setSelectedVedaId(node.vedaId);
                      } else if (node.charId) {
                        selectCharacter(node.charId, true);
                      }
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-20 ${
                      isFiltered ? 'opacity-100' : 'opacity-25 pointer-events-none'
                    }`}
                    style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
                  >
                    <div
                      className={`w-[226px] p-2.5 rounded-xl bg-[#FFFFFF] border-2 shadow-md hover:shadow-xl hover:scale-105 transition-all text-left ${
                        isSelected || isThisVedaExpanded
                          ? 'border-[#D84315] ring-3 ring-[#D84315]/30 bg-[#FFFDF7]'
                          : 'border-[#E8DCC4] hover:border-[#D4AF37]'
                      }`}
                      style={{ borderLeftColor: node.color, borderLeftWidth: '4px' }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base">{node.icon}</span>
                        <h4 className="text-xs font-bold text-[#7B1113] truncate font-telugu-serif flex-1">
                          {node.label}
                        </h4>
                        {node.vedaId && (
                          <button
                            type="button"
                            onClick={(ev) => {
                              ev.stopPropagation();
                              setSelectedVedaId(node.vedaId!);
                              setActiveTab('vedas_explorer');
                            }}
                            className="p-1 rounded bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] text-[9px] font-bold border border-[#D4AF37] cursor-pointer"
                            title={isEn ? 'Vedas Deep Dive Explorer' : 'విజ్ఞాన నిధి'}
                          >
                            📖
                          </button>
                        )}
                      </div>
                      <p className="text-[10.5px] text-[#5D4037] line-clamp-2 leading-snug">
                        {node.summary}
                      </p>

                      {/* Veda Sub-topics Toggle Bar */}
                      {node.vedaId ? (
                        <div className="mt-2 pt-1.5 border-t border-[#E8DCC4] flex items-center justify-between gap-1">
                          <button
                            type="button"
                            onClick={(ev) => {
                              ev.stopPropagation();
                              setExpandedVedaId(prev => prev === node.vedaId ? null : (node.vedaId ?? null));
                              setSelectedVedaId(node.vedaId!);
                            }}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                              isThisVedaExpanded
                                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                                : 'bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37]'
                            }`}
                          >
                            <span>{isThisVedaExpanded ? '▲' : '▼'}</span>
                            <span>
                              {isThisVedaExpanded
                                ? (isEn ? 'Collapse' : 'శాఖలు మూయండి')
                                : (isEn ? '+ 3 Sub-Topics' : '+ 3 ఉపశాఖలు')}
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={(ev) => {
                              ev.stopPropagation();
                              if (node.charId) selectCharacter(node.charId, true);
                            }}
                            className="text-[9.5px] font-semibold text-[#D84315] hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>{isEn ? 'Details' : 'కథ & వివరాలు'}</span>
                            <span>➔</span>
                          </button>
                        </div>
                      ) : (
                        <div className="mt-1 flex items-center justify-between text-[9px] font-semibold text-[#D84315]">
                          <span>{isEn ? 'Full Scripture & Details' : 'కథ & వివరాలు'}</span>
                          <span>➔</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Hint Pill */}
            <div className="absolute bottom-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs text-[#7B1113] font-medium shadow-sm flex items-center gap-2 pointer-events-none">
              <Info className="w-4 h-4 text-[#D84315]" />
              <span>
                {isEn 
                  ? 'Drag to pan • Scroll to zoom • Click any Veda to expand/collapse its 3 sub-topics' 
                  : 'డ్రాగ్ చేసి జరపండి • స్క్రోల్ చేసి జూమ్ చేయండి • ఉపశాఖలకై వేదంపై క్లిక్ చేయండి (+ 3 ఉపశాఖలు)'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 2. DEDICATED VEDAS KNOWLEDGE EXPLORER (EXTRACTED SOURCE CONTENT) */}
      {/* =================================================================== */}
      {activeTab === 'vedas_explorer' && (
        <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">

          {/* Master Infographic Banner: How Much of the Vedas has been Lost! */}
          <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E7] to-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] p-4 sm:p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#D4AF37]/40 pb-3">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-2xl bg-[#7B1113] text-[#FFE082] text-2xl shrink-0 shadow-xs">
                  📜
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-black text-[#7B1113] font-telugu-serif">
                      {isEn ? VEDAS_PRESERVATION_CHART_DATA.titleEn : VEDAS_PRESERVATION_CHART_DATA.titleTe}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B71C1C] text-white text-[10px] font-black uppercase tracking-wider">
                      {isEn ? '~98.9% Lost / కాలగర్భంలో లుప్తం' : '~98.9% నశించిన వాఙ్మయం'}
                    </span>
                  </div>
                  <p className="text-xs text-[#5D4037] mt-0.5">
                    {isEn ? VEDAS_PRESERVATION_CHART_DATA.subtitleEn : VEDAS_PRESERVATION_CHART_DATA.subtitleTe}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Grand Vedic Preservation Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs space-y-0.5">
                <span className="text-[10px] font-bold text-[#8B0000] uppercase block">
                  📖 {isEn ? 'Original Scope' : 'మూల వేద పరిమాణం'}
                </span>
                <span className="text-sm font-black text-[#7B1113] block">
                  {isEn ? VEDAS_PRESERVATION_CHART_DATA.totalVerses : VEDAS_PRESERVATION_CHART_DATA.totalVersesTe}
                </span>
                <span className="text-[10.5px] text-[#5D4037] block font-medium">
                  {isEn ? 'Organized by: Krishna Dvaipayana (Veda Vyasa)' : 'క్రోడీకరణ: శ్రీ వేదవ్యాస మహర్షి'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xs space-y-0.5">
                <span className="text-[10px] font-bold text-[#1B5E20] uppercase block">
                  🏛️ {isEn ? 'Total Shakhas (Original)' : 'వ్యాస విభజిత మొత్తం శాఖలు'}
                </span>
                <span className="text-sm font-black text-[#1B5E20] block">
                  1,180 {isEn ? 'Shakhas' : 'శాఖలు'}
                </span>
                <span className="text-[10.5px] text-[#2E7D32] font-bold block">
                  ✅ {isEn ? 'Available: 10 - 15 only (~1.1%)' : 'లభ్యం: కేవలం 10 - 15 మాత్రమే'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FFF5F5] border border-red-200 shadow-2xs space-y-0.5">
                <span className="text-[10px] font-bold text-[#B71C1C] uppercase block">
                  ⚠️ {isEn ? 'Lost Shakhas & Samhitas' : 'లుప్తమైన శాఖలు & సంహితలు'}
                </span>
                <span className="text-sm font-black text-[#B71C1C] block">
                  1,165+ {isEn ? 'Shakhas Lost' : 'శాఖలు నష్టం'}
                </span>
                <span className="text-[10.5px] text-[#C62828] font-bold block">
                  {isEn ? 'Samhitas: 19-20 Preserved / 1,111+ Lost' : 'సంహితలు: 19-20 లభ్యం / 1,111+ నష్టం'}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FFF8E1] border border-amber-300 shadow-2xs space-y-0.5">
                <span className="text-[10px] font-bold text-[#D84315] uppercase block">
                  📜 {isEn ? 'Upanishads Canon' : 'ఉపనిషత్తుల స్థితి'}
                </span>
                <span className="text-sm font-black text-[#D84315] block">
                  108 {isEn ? 'Available (Muktika)' : 'మాత్రమే లభ్యం (ముక్తిక)'}
                </span>
                <span className="text-[10.5px] text-[#5D4037] font-medium block">
                  {isEn ? '1,121+ Lost (1 per Shakha originally)' : '1,121+ లుప్తం (శాఖకు ఒకటి చొప్పున)'}
                </span>
              </div>
            </div>

            {/* Quick Breakdown Bar for the 4 Vedas */}
            <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="font-bold text-[#7B1113] flex items-center gap-1">
                <span>⚡</span>
                <span>{isEn ? 'Vedas Shakhas At a Glance:' : 'చతుర్వేద శాఖల నిష్పత్తి:'}</span>
              </span>
              <div className="flex items-center gap-2 flex-wrap text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setSelectedVedaId('rigveda')}
                  className={`px-2.5 py-0.5 rounded-lg border transition-all cursor-pointer ${selectedVedaId === 'rigveda' ? 'bg-[#D84315] text-white' : 'bg-white text-[#D84315] border-[#D84315]'}`}
                >
                  📜 ఋగ్వేదం: 1 లభ్యం / 20+ నష్టం (21+)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVedaId('yajurveda')}
                  className={`px-2.5 py-0.5 rounded-lg border transition-all cursor-pointer ${selectedVedaId === 'yajurveda' ? 'bg-[#E65100] text-white' : 'bg-white text-[#E65100] border-[#E65100]'}`}
                >
                  🔥 యజుర్వేదం: 3-4 లభ్యం / 97+ నష్టం (101+)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVedaId('samaveda')}
                  className={`px-2.5 py-0.5 rounded-lg border transition-all cursor-pointer ${selectedVedaId === 'samaveda' ? 'bg-[#C2185B] text-white' : 'bg-white text-[#C2185B] border-[#C2185B]'}`}
                >
                  🎵 సామవేదం: 3 లభ్యం / 997+ నష్టం (1000+)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVedaId('atharvaveda')}
                  className={`px-2.5 py-0.5 rounded-lg border transition-all cursor-pointer ${selectedVedaId === 'atharvaveda' ? 'bg-[#2E7D32] text-white' : 'bg-white text-[#2E7D32] border-[#2E7D32]'}`}
                >
                  🌿 అథర్వణవేదం: 2 లభ్యం / 7+ నష్టం (9+)
                </button>
              </div>
            </div>

            {/* మూల సచిత్ర పటాలు at the bottom of the section (just text and link) */}
            <div className="pt-2.5 mt-2 border-t border-amber-300/80 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="font-bold text-[#7B1113] font-telugu-serif flex items-center gap-1.5">
                <span>🖼️</span>
                <span>{isEn ? 'మూల సచిత్ర పటం:' : 'మూల సచిత్ర పటం:'}</span>
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setPreservationZoom(1);
                    setIsPreservationModalOpen(true);
                  }}
                  className="text-[#7B1113] hover:text-[#D84315] font-bold underline flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-2xs hover:shadow-xs transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Vedas Preservation Master Chart (Click to View & Zoom)' : '1,180 వేద శాఖల పరిరక్షణ మూల సచిత్ర పటం (వీక్షించండి)'}</span>
                </button>
                <a
                  href={VEDAS_PRESERVATION_CHART_DATA.chartImageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#7B1113] hover:text-[#D84315] font-bold flex items-center gap-1 text-[11px] border border-amber-300 shadow-2xs transition-all cursor-pointer"
                  title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#D84315]" />
                  <span>{isEn ? 'Picture Link' : 'చిత్రం లింక్'}</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Veda Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {VEDAS_DATA.map(veda => (
              <button
                key={veda.id}
                onClick={() => setSelectedVedaId(veda.id)}
                className={`p-3 rounded-xl border-2 transition-all flex flex-col text-left cursor-pointer ${
                  selectedVedaId === veda.id
                    ? 'border-[#7B1113] shadow-md bg-[#FFFDF7] ring-2 ring-[#7B1113]/20'
                    : 'border-[#E8DCC4] bg-[#FFFFFF] hover:border-[#D4AF37]'
                }`}
                style={{ borderTopColor: veda.color, borderTopWidth: '4px' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">{veda.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF7F0] border border-[#E8DCC4] text-[#5D4037]">
                    {veda.sanskritName}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                  {isEn ? veda.title : veda.titleTe}
                </h4>
                <p className="text-[11px] text-[#5D4037] truncate mt-0.5">
                  {isEn ? veda.subtitle : veda.subtitleTe}
                </p>
              </button>
            ))}
          </div>

          {/* Active Veda Showcase Header */}
          <div 
            className="p-5 rounded-2xl border-2 shadow-sm text-[#2C1810] relative overflow-hidden"
            style={{ backgroundColor: currentVeda.accentBg, borderColor: currentVeda.color }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-2xl">{currentVeda.icon}</span>
                  <h2 className="text-2xl font-bold font-telugu-serif text-[#7B1113]">
                    {isEn ? currentVeda.title : currentVeda.titleTe}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D4AF37] font-bold text-[#7B1113]">
                    {currentVeda.sanskritName}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] font-semibold">
                    {isEn ? currentVeda.faceOfBrahma : currentVeda.faceOfBrahmaTe}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#D84315]">
                  {isEn ? currentVeda.subtitle : currentVeda.subtitleTe}
                </p>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed max-w-4xl pt-1">
                  {isEn ? currentVeda.overview : currentVeda.overviewTe}
                </p>
              </div>

              {/* View Full Drawer Button */}
              <button
                onClick={() => selectCharacter(currentVeda.charId, true)}
                className="px-4 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
              >
                <span>{isEn ? 'Bhagavatam & Full Story' : 'భాగవత మూల కథనం & ఆధారాలు'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Core Inspiring Quote Callout */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border-l-4 border-[#7B1113] border-y border-r border-[#E8DCC4] shadow-xs flex items-center gap-3">
            <span className="text-2xl text-[#D84315]">❝</span>
            <p className="text-sm sm:text-base font-medium italic text-[#4A0012] font-telugu-serif leading-relaxed flex-1">
              {isEn ? currentVeda.coreQuote : currentVeda.coreQuoteTe}
            </p>
            <span className="text-2xl text-[#D84315]">❞</span>
          </div>

          {/* Key Facts & Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block mb-1">
                📖 {isEn ? 'Meaning / Etymology' : 'నామధేయ అర్ధము'}
              </span>
              <p className="text-xs font-semibold text-[#2C1810]">
                {isEn ? currentVeda.keyFacts.meaning : currentVeda.keyFacts.meaningTe}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block mb-1">
                📍 {isEn ? 'Position & Language' : 'స్థానం & భాష'}
              </span>
              <p className="text-xs font-semibold text-[#2C1810]">
                {isEn ? currentVeda.keyFacts.position : currentVeda.keyFacts.positionTe}
              </p>
              <span className="text-[11px] text-[#5D4037] block mt-0.5">
                {isEn ? currentVeda.keyFacts.language : currentVeda.keyFacts.languageTe}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block mb-1">
                🏛️ {isEn ? 'Structure & Verses' : 'సంరచన & మంత్ర సంఖ్య'}
              </span>
              <p className="text-xs font-semibold text-[#2C1810]">
                {isEn ? currentVeda.keyFacts.formOrStructure : currentVeda.keyFacts.formOrStructureTe}
              </p>
              <span className="text-[11px] text-[#D84315] font-bold block mt-0.5">
                {isEn ? currentVeda.keyFacts.versesOrMantras : currentVeda.keyFacts.versesOrMantrasTe}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs">
              <span className="text-[11px] font-bold text-[#7B1113] uppercase tracking-wider block mb-1">
                📿 {isEn ? 'Meter & Priest Role' : 'ఛందస్సు & ఋత్విక్ క్రియ'}
              </span>
              <p className="text-xs font-semibold text-[#2C1810]">
                {isEn ? currentVeda.meter : currentVeda.meterTe}
              </p>
              <span className="text-[10px] text-[#5D4037] block mt-0.5 leading-tight">
                {isEn ? currentVeda.priestRole : currentVeda.priestRoleTe}
              </span>
            </div>
          </div>

          {/* Shakhas Preservation & Loss Analysis Box for the Selected Veda (From Uploaded Chart) */}
          {currentVeda.shakhaLossStats && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#D4AF37] shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#E8DCC4] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-xl shrink-0">
                    🏛️
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                      {isEn 
                        ? `${currentVeda.title}: Shakhas Preservation & Loss Analysis` 
                        : `${currentVeda.titleTe}: శాఖల పరిరక్షణ & నష్ట విశ్లేషణ`}
                    </h3>
                    <p className="text-[11px] text-[#5D4037]">
                      {isEn 
                        ? `Historical branch breakdown out of ${currentVeda.shakhaLossStats.totalShakhas} compiled by Veda Vyasa`
                        : `శ్రీ వేదవ్యాస మహర్షి క్రోడీకరించిన మొత్తం ${currentVeda.shakhaLossStats.totalShakhas} లో నేటి పరిస్థితి`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#A5D6A7] text-xs font-bold flex items-center gap-1 shadow-2xs">
                    <span>✅</span>
                    <span>{isEn ? `Available: ${currentVeda.shakhaLossStats.availableShakhas}` : `లభ్యం: ${currentVeda.shakhaLossStats.availableShakhas}`}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFEBEE] text-[#B71C1C] border border-[#EF9A9A] text-xs font-bold flex items-center gap-1 shadow-2xs">
                    <span>⚠️</span>
                    <span>{isEn ? `Lost: ${currentVeda.shakhaLossStats.lostShakhas}` : `నష్టం: ${currentVeda.shakhaLossStats.lostShakhas}`}</span>
                  </span>
                </div>
              </div>

              {/* Surviving & Lost Shakhas Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                {/* Surviving */}
                <div className="p-3.5 rounded-xl bg-[#F1F8E9] border border-[#C5E1A5] space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2E7D32]">
                    <span>🌿</span>
                    <span>{isEn ? 'Surviving Shakhas (Available Today):' : 'నేడు సజీవంగా ఉన్న శాఖలు:'}</span>
                  </div>
                  <ul className="space-y-1 text-[#1B5E20] font-medium pt-0.5">
                    {(isEn ? currentVeda.shakhaLossStats.survivingNames : currentVeda.shakhaLossStats.survivingNamesTe).map((name, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <span className="font-bold text-[#2E7D32]">✓</span>
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lost */}
                <div className="p-3.5 rounded-xl bg-[#FFF8F6] border border-[#FFCDD2] space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#C62828]">
                    <span>📜</span>
                    <span>{isEn ? 'Historical Lost Branches (Examples):' : 'కాలగర్భంలో కలిసిపోయిన ప్రముఖ శాఖలు:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {(isEn ? currentVeda.shakhaLossStats.lostExamples : currentVeda.shakhaLossStats.lostExamplesTe).map((ex, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-[#FFCDD2] text-[#B71C1C] text-[11px] font-semibold">
                        {ex}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#8C6D46] italic pt-1">
                    {isEn 
                      ? 'Lost over millennia due to destructions of ancient libraries (Nalanda/Takshashila) and extinction of oral lineages.' 
                      : 'ప్రాచీన గ్రంథాలయాల దహనం మరియు నోటిమాటగా వచ్చే శ్రుతి పరంపర తెగిపోవడం వలన ఇవి లుప్తమైనవి.'}
                  </p>
                </div>
              </div>

              {/* 4-Fold Division Structure (Samhita, Brahmana, Aranyaka, Upanishad) */}
              <div className="space-y-2 pt-1 border-t border-stone-200">
                <div className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1.5">
                  <span>📚</span>
                  <span>{isEn ? '4-Fold Structural Division per Shakha (చతుర్విధ విభాగములు):' : 'ప్రతి శాఖలోని 4 ప్రధాన విభాగాలు:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 space-y-1 shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-[#7B1113] text-[#FFE082] text-[10px] font-bold">1. సంహిత (Samhita)</span>
                    <p className="text-[11.5px] text-[#4E342E] leading-snug">
                      {isEn ? currentVeda.shakhaLossStats.structure.samhita : currentVeda.shakhaLossStats.structure.samhitaTe}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 space-y-1 shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-[#D84315] text-white text-[10px] font-bold">2. బ్రాహ్మణము (Brahmana)</span>
                    <p className="text-[11.5px] text-[#4E342E] leading-snug">
                      {isEn ? currentVeda.shakhaLossStats.structure.brahmana : currentVeda.shakhaLossStats.structure.brahmanaTe}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 space-y-1 shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-[#C2185B] text-white text-[10px] font-bold">3. అరణ్యకము (Aranyaka)</span>
                    <p className="text-[11.5px] text-[#4E342E] leading-snug">
                      {isEn ? currentVeda.shakhaLossStats.structure.aranyaka : currentVeda.shakhaLossStats.structure.aranyakaTe}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 space-y-1 shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-[#2E7D32] text-white text-[10px] font-bold">4. ఉపనిషత్తు (Upanishad)</span>
                    <p className="text-[11.5px] text-[#4E342E] leading-snug">
                      {isEn ? currentVeda.shakhaLossStats.structure.upanishad : currentVeda.shakhaLossStats.structure.upanishadTe}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VEDA-SPECIFIC SPECIAL SECTIONS */}

          {/* 1. Rigveda: Principal Deities */}
          {currentVeda.principalDeities && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D84315]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? 'Principal Deities Extolled in the Hymns' : 'ఋగ్వేద ప్రధాన దేవతా స్వరూపాలు'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentVeda.principalDeities.map((deity, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] flex items-start gap-2.5">
                    <span className="text-2xl">{deity.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#7B1113]">
                        {isEn ? deity.name : deity.nameTe}
                      </h4>
                      <p className="text-[11px] text-[#5D4037] leading-snug mt-0.5">
                        {isEn ? deity.role : deity.roleTe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Yajurveda: Divisions & Yajnas */}
          {currentVeda.divisions && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#E65100]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? 'Two Main Divisions (Samhitas)' : 'యజుర్వేద రెండు ప్రధాన విభాగాలు (సంహితలు)'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentVeda.divisions.map((div, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/60 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#7B1113]">
                        {isEn ? div.name : div.nameTe}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#FFF8E1] text-[#D84315] font-bold border border-[#D4AF37]">
                        {isEn ? div.samhita : div.samhitaTe}
                      </span>
                    </div>
                    <p className="text-xs text-[#5D4037] leading-relaxed">
                      {isEn ? div.description : div.descriptionTe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentVeda.examplesOfYajnas && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#D84315]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? 'Examples of Sacred Yajnas Mentioned' : 'యజుర్వేదంలో ప్రస్తావించబడిన ప్రముఖ యజ్ఞములు'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentVeda.examplesOfYajnas.map((yajna, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] space-y-1">
                    <h4 className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5">
                      <span>🔥</span>
                      <span>{isEn ? yajna.name : yajna.nameTe}</span>
                    </h4>
                    <p className="text-[10.5px] text-[#5D4037] leading-snug">
                      {isEn ? yajna.purpose : yajna.purposeTe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Samaveda: Branches, Music Swaras & Did You Know */}
          {currentVeda.branches && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-[#C2185B]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? 'Main Branches (Shakhas) of Samaveda' : 'సామవేద మూడు ప్రధాన శాఖలు (శాఖా సంప్రదాయము)'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentVeda.branches.map((branch, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] space-y-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C2185B] text-white font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-[#7B1113] pt-1">
                      {isEn ? branch.name : branch.nameTe}
                    </h4>
                    <p className="text-[10.5px] text-[#5D4037] leading-snug">
                      {isEn ? branch.regions : branch.regionsTe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentVeda.didYouKnow && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FCE4EC] border-2 border-[#D4AF37] shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wide font-telugu-serif">
                  {isEn ? currentVeda.didYouKnow.title : currentVeda.didYouKnow.titleTe}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                {isEn ? currentVeda.didYouKnow.content : currentVeda.didYouKnow.contentTe}
              </p>
              {currentVeda.didYouKnow.musicalScale && (
                <div className="pt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-[#7B1113]">
                    {isEn ? 'Indian Musical Scale:' : 'సప్తస్వర మాలిక:'}
                  </span>
                  {currentVeda.didYouKnow.musicalScale.map((note, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-lg bg-[#FFFFFF] border border-[#C2185B] text-xs font-bold text-[#C2185B] shadow-2xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Atharvaveda: Main Subjects */}
          {currentVeda.mainSubjects && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? '5 Main Subjects & Healing Sciences' : 'అథర్వణవేద 5 ముఖ్య విషయాలు & ఆయుర్వేద మూలాలు'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentVeda.mainSubjects.map((subj, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] flex items-start gap-2.5">
                    <span className="text-2xl">{subj.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#2E7D32]">
                        {isEn ? subj.title : subj.titleTe}
                      </h4>
                      <p className="text-[10.5px] text-[#5D4037] leading-snug mt-0.5">
                        {isEn ? subj.description : subj.descriptionTe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Associated Major Upanishads */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scroll className="w-4 h-4 text-[#7B1113]" />
                <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                  {isEn ? `Associated Major Upanishads (${currentVeda.associatedUpanishads.length})` : `అనుసంధానమైన ప్రఖ్యాత ఉపనిషత్తులు (${currentVeda.associatedUpanishads.length})`}
                </h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#FFF8E1] border border-[#D4AF37] font-bold text-[#7B1113]">
                {isEn ? 'Vedic Crown' : 'వేదాంత శిరోభూషణం'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {currentVeda.associatedUpanishads.map((upanishad, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-2xs space-y-1">
                  <h4 className="text-xs font-bold text-[#7B1113] flex items-center gap-1.5">
                    <span>📖</span>
                    <span>{isEn ? upanishad.name : upanishad.nameTe}</span>
                  </h4>
                  <p className="text-xs text-[#5D4037] leading-relaxed">
                    {isEn ? (upanishad.description || '') : (upanishad.descriptionTe || '')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Construction & Significance Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Construction & Features */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs space-y-2.5">
              <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wide flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{isEn ? 'Key Structural Features' : 'సంరచనా విశేషాలు'}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5D4037]">
                {(isEn ? currentVeda.constructionOrFeatures : currentVeda.constructionOrFeaturesTe).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D84315] font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Significance */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DCC4] shadow-2xs space-y-2.5">
              <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
                <span>{isEn ? 'Vedic & Cultural Significance' : 'పౌరాణిక & సాంస్కృతిక ప్రాముఖ్యత'}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5D4037]">
                {(isEn ? currentVeda.significance : currentVeda.significanceTe).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2E7D32] font-bold">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      )}

      {/* =================================================================== */}
      {/* 3. COMPARATIVE MATRIX VIEW */}
      {/* =================================================================== */}
      {activeTab === 'comparison' && (
        <div className="flex-1 p-4 sm:p-6 overflow-x-auto space-y-4">
          <div className="border border-[#E8DCC4] rounded-2xl overflow-hidden bg-[#FFFFFF] shadow-sm">
            <table className="w-full text-left text-xs text-[#2C1810]">
              <thead className="bg-[#7B1113] text-[#FFE082] uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-3.5 border-b border-[#D4AF37]">
                    {isEn ? 'Feature / Dimension' : 'విషయం / విశేషం'}
                  </th>
                  {VEDAS_DATA.map(veda => (
                    <th key={veda.id} className="p-3.5 border-b border-[#D4AF37]">
                      <div className="flex items-center gap-1.5">
                        <span>{veda.icon}</span>
                        <span>{isEn ? veda.title : veda.titleTe}</span>
                      </div>
                      <span className="text-[10px] text-[#FFE082]/80 normal-case block">
                        ({veda.sanskritName})
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DCC4]">
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0] w-48">
                    {isEn ? 'Meaning' : 'నామధేయ అర్ధం'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3 font-medium">
                      {isEn ? v.keyFacts.meaning : v.keyFacts.meaningTe}
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Position' : 'స్థానం'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      {isEn ? v.keyFacts.position : v.keyFacts.positionTe}
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Brahma\'s Face & Meter' : 'బ్రహ్మ ముఖం & ఛందస్సు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      <strong>{isEn ? v.faceOfBrahma : v.faceOfBrahmaTe}</strong>
                      <span className="block text-[11px] text-[#5D4037]">
                        {isEn ? v.meter : v.meterTe}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Structure & Verses' : 'సంరచన & మంత్రాలు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      <span className="block font-semibold">
                        {isEn ? v.keyFacts.formOrStructure : v.keyFacts.formOrStructureTe}
                      </span>
                      <span className="text-[11px] text-[#D84315] font-bold">
                        {isEn ? v.keyFacts.versesOrMantras : v.keyFacts.versesOrMantrasTe}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Priest & Ritual Function' : 'ప్రధాన పురోహితుడు (ఋత్విక్)'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      {isEn ? v.priestRole : v.priestRoleTe}
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Associated Major Upanishads' : 'ప్రముఖ ఉపనిషత్తులు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {v.associatedUpanishads.map((u, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-[#FFF8E1] border border-[#D4AF37] text-[10px] font-semibold text-[#7B1113]">
                            {isEn ? u.name : u.nameTe}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Special Crown Contribution' : 'ప్రత్యేక విశిష్టత'}
                  </td>
                  <td className="p-3">
                    {isEn 
                      ? 'Gayatri Mantra • 10 Mandalas • Hymns to Agni, Indra, Varuna' 
                      : 'గాయత్రీ మంత్రం • అగ్ని, ఇంద్ర, వరుణాది స్తుతులు'}
                  </td>
                  <td className="p-3">
                    {isEn 
                      ? 'Shukla & Krishna divisions • Agnihotra, Somayajna, Ashvamedha' 
                      : 'శుక్ల & కృష్ణ విభాగాలు • అగ్నిహోత్ర, సోమయాగ, అశ్వమేధాలు'}
                  </td>
                  <td className="p-3">
                    {isEn 
                      ? 'Origin of Indian Musical Scale (Sa Re Ga Ma Pa Dha Ni) • 3 Shakhas' 
                      : 'సప్తస్వరాల మూలం (స రి గ మ ప ద ని) • 3 శాఖలు • సామగానం'}
                  </td>
                  <td className="p-3">
                    {isEn 
                      ? 'Root of Ayurveda • "Satyameva Jayate" • 20 Kandas on health & peace' 
                      : 'ఆయుర్వేద మూలం • "సత్యమేవ జయతే" • 20 కాండల చికిత్సా విజ్ఞానం'}
                  </td>
                </tr>

                {/* Total Shakhas Row */}
                <tr className="hover:bg-[#FFFDF7] bg-[#FFFDF7]/60">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    🏛️ {isEn ? 'Total Shakhas (Original)' : 'వ్యాస విభజిత మొత్తం శాఖలు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3 font-black text-[#7B1113]">
                      {v.shakhaLossStats?.totalShakhas || '—'}
                    </td>
                  ))}
                </tr>

                {/* Available vs Lost Row */}
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    ⚖️ {isEn ? 'Available vs. Lost Shakhas' : 'లభ్యమవుతున్న శాఖలు vs నష్టం'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3 space-y-1">
                      <span className="block px-2 py-0.5 rounded bg-[#E8F5E9] text-[#1B5E20] font-bold text-[11px] border border-[#A5D6A7]">
                        ✅ {isEn ? `Available: ${v.shakhaLossStats?.availableShakhas}` : `లభ్యం: ${v.shakhaLossStats?.availableShakhas}`}
                      </span>
                      <span className="block px-2 py-0.5 rounded bg-[#FFEBEE] text-[#B71C1C] font-bold text-[11px] border border-[#EF9A9A]">
                        ⚠️ {isEn ? `Lost: ${v.shakhaLossStats?.lostShakhas}` : `నష్టం: ${v.shakhaLossStats?.lostShakhas}`}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Surviving Recensions Names */}
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    🌿 {isEn ? 'Surviving Recensions' : 'లభ్యమవుతున్న శాఖల పేర్లు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3 text-[11px] text-[#2C1810]">
                      <ul className="space-y-0.5">
                        {(isEn ? v.shakhaLossStats?.survivingNames : v.shakhaLossStats?.survivingNamesTe)?.map((sn, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-[#2E7D32] font-bold">•</span>
                            <span>{sn}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* 4-Fold Division per Shakha */}
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    📚 {isEn ? '4-Fold Structural Division' : 'శాఖ చతుర్విధ విభాగాలు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3 text-[10.5px] text-[#4E342E] space-y-1">
                      <div><strong className="text-[#7B1113]">1. సంహిత:</strong> {isEn ? v.shakhaLossStats?.structure.samhita : v.shakhaLossStats?.structure.samhitaTe}</div>
                      <div><strong className="text-[#D84315]">2. బ్రాహ్మణం:</strong> {isEn ? v.shakhaLossStats?.structure.brahmana : v.shakhaLossStats?.structure.brahmanaTe}</div>
                      <div><strong className="text-[#C2185B]">3. అరణ్యకం:</strong> {isEn ? v.shakhaLossStats?.structure.aranyaka : v.shakhaLossStats?.structure.aranyakaTe}</div>
                      <div><strong className="text-[#2E7D32]">4. ఉపనిషత్తు:</strong> {isEn ? v.shakhaLossStats?.structure.upanishad : v.shakhaLossStats?.structure.upanishadTe}</div>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#7B1113] bg-[#FAF7F0]">
                    {isEn ? 'Action' : 'వివరాలు'}
                  </td>
                  {VEDAS_DATA.map(v => (
                    <td key={v.id} className="p-3">
                      <button
                        onClick={() => {
                          setSelectedVedaId(v.id);
                          setActiveTab('vedas_explorer');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] font-bold text-[11px] cursor-pointer"
                      >
                        {isEn ? 'Explore Veda ➔' : 'వేద దర్శనం ➔'}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. SOURCE INFOGRAPHICS GALLERY */}
      {/* =================================================================== */}
      {activeTab === 'sources' && (
        <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
          <div className="bg-[#FFFDF7] p-4 rounded-xl border border-[#D4AF37] shadow-2xs">
            <h3 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
              {isEn ? 'Original Source Manuscript & Infographics' : 'మూల చిత్ర పటాలు & సంపూర్ణ సమాచార సంగ్రహం'}
            </h3>
            <p className="text-xs text-[#5D4037] mt-0.5">
              {isEn 
                ? 'High-resolution source charts for Rigveda, Yajurveda, Samaveda, Atharvaveda, and the 1,180 Shakhas Preservation Master Chart.' 
                : 'యజుర్వేదం, సామవేదం, ఋగ్వేదం, అథర్వణవేదాలు మరియు 1,180 వేద శాఖల పరిరక్షణ-నష్ట మూల చార్టులు.'}
            </p>
          </div>

          {/* Featured Grand Master Chart 1: Vedic Indian Scriptures (Shruti & Smriti) */}
          <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-md overflow-hidden flex flex-col">
            <div className="p-4 bg-gradient-to-r from-[#D84315] via-[#C2185B] to-[#7B1113] text-[#FFE082] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📜</span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-telugu-serif">
                    {isEn ? VEDIC_INDIAN_SCRIPTURES_DATA.titleEn : VEDIC_INDIAN_SCRIPTURES_DATA.titleTe}
                  </h4>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    {isEn ? 'Shruti (Vedas, Vedangas, UpaVedas) & Smriti (Puranas, Itihasas, Gita, Saints)' : 'శ్రుతులు (వేదాలు, వేదాంగాలు, ఉపవేదాలు) & స్మృతులు (పురాణాలు, ఇతిహాసాలు, గీత, భక్తులు)'}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setScripturesZoom(1);
                  setIsScripturesModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#FFE082] text-[#7B1113] text-xs font-black flex items-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#FFD54F] transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Full-Screen Zoom' : 'పూర్తి స్క్రీన్ జూమ్'}</span>
              </button>
            </div>

            <div 
              onClick={() => {
                setScripturesZoom(1);
                setIsScripturesModalOpen(true);
              }}
              className="p-4 bg-[#FAF7F0] flex justify-center items-center cursor-pointer group"
            >
              <img 
                src={VEDIC_INDIAN_SCRIPTURES_DATA.imageSrc} 
                alt="Vedic Indian Scriptures Chart" 
                className="max-h-[520px] w-auto rounded-lg shadow-md border border-[#D4AF37] object-contain group-hover:scale-[1.01] transition-transform" 
              />
            </div>
          </div>

          {/* Featured Grand Master Chart: How Much Vedas has been Lost! */}
          <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-md overflow-hidden flex flex-col">
            <div className="p-4 bg-gradient-to-r from-[#7B1113] to-[#991B1B] text-[#FFE082] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📜</span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-telugu-serif">
                    {isEn ? VEDAS_PRESERVATION_CHART_DATA.titleEn : VEDAS_PRESERVATION_CHART_DATA.titleTe}
                  </h4>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    {isEn ? '1,180 Shakhas Organized by Krishna Dvaipayana Veda Vyasa' : 'శ్రీ కృష్ణద్వైపాయన వేదవ్యాస మహర్షి క్రోడీకరించిన 1,180 శాఖల విశ్లేషణ'}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setPreservationZoom(1);
                  setIsPreservationModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#FFE082] text-[#7B1113] text-xs font-black flex items-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#FFD54F] transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Full-Screen Zoom' : 'పూర్తి స్క్రీన్ జూమ్'}</span>
              </button>
            </div>

            <div 
              onClick={() => {
                setPreservationZoom(1);
                setIsPreservationModalOpen(true);
              }}
              className="p-4 bg-[#FAF7F0] flex justify-center items-center cursor-pointer group"
            >
              <img 
                src={VEDAS_PRESERVATION_CHART_DATA.chartImageSrc} 
                alt="How Much of Vedas has been Lost Chart" 
                className="max-h-[520px] w-auto rounded-lg shadow-md border border-[#D4AF37] object-contain group-hover:scale-[1.01] transition-transform" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VEDAS_DATA.map(veda => (
              <div 
                key={veda.id}
                className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E8DCC4] hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="p-3.5 bg-gradient-to-r from-[#FAF7F0] to-[#FFF8E1] border-b border-[#E8DCC4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{veda.icon}</span>
                    <h4 className="text-sm font-bold text-[#7B1113] font-telugu-serif">
                      {isEn ? veda.title : veda.titleTe} ({veda.sanskritName})
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7B1113] text-[#FFE082] font-bold">
                    {isEn ? veda.faceOfBrahma : veda.faceOfBrahmaTe}
                  </span>
                </div>

                <div className="p-3 bg-[#FAF7F0] flex justify-center items-center">
                  <img 
                    src={veda.imageSrc} 
                    alt={veda.title} 
                    className="max-h-[500px] w-auto rounded-lg shadow-md border border-[#E8DCC4] object-contain hover:scale-[1.02] transition-transform" 
                  />
                </div>

                <div className="p-4 bg-[#FFFFFF] border-t border-[#E8DCC4] flex items-center justify-between">
                  <p className="text-xs text-[#5D4037] line-clamp-1 flex-1 mr-3 italic font-telugu-serif">
                    ❝ {isEn ? veda.coreQuote : veda.coreQuoteTe} ❞
                  </p>
                  <button
                    onClick={() => {
                      setSelectedVedaId(veda.id);
                      setActiveTab('vedas_explorer');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] text-xs font-bold whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    {isEn ? 'View Data' : 'వివరాలు చూడండి'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. DEDICATED POP-UP MODAL: HOW MUCH VEDAS HAS BEEN LOST! (ZOOMABLE) */}
      {/* =================================================================== */}
      {isPreservationModalOpen && (
        <div 
          onClick={() => setIsPreservationModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 overflow-y-auto animate-fadeIn"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-[#FAF7F0] rounded-3xl border-2 border-[#D4AF37] max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#7B1113] via-[#8B0000] to-[#5C0D0E] text-[#FFE082] p-4 sm:p-5 flex items-center justify-between sticky top-0 z-10 border-b border-[#D4AF37]/50">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📜</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-telugu-serif">
                    {isEn ? VEDAS_PRESERVATION_CHART_DATA.titleEn : VEDAS_PRESERVATION_CHART_DATA.titleTe}
                  </h3>
                  <p className="text-xs text-[#FFE57F]/90">
                    {isEn ? VEDAS_PRESERVATION_CHART_DATA.subtitleEn : VEDAS_PRESERVATION_CHART_DATA.subtitleTe}
                  </p>
                </div>
              </div>

              {/* Zoom & Close Controls */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <a
                  href={VEDAS_PRESERVATION_CHART_DATA.chartImageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-bold transition-colors flex items-center gap-1 shadow-xs cursor-pointer mr-1"
                  title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEn ? "Picture Link" : "చిత్రం లింక్"}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreservationZoom(prev => Math.min(prev + 0.25, 3))}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE082]"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setPreservationZoom(prev => Math.max(prev - 0.25, 0.5))}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE082]"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setPreservationZoom(1)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE082]"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#FFE082] px-1.5">
                  {Math.round(preservationZoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setIsPreservationModalOpen(false)}
                  className="p-1.5 ml-1 rounded-xl bg-white/10 hover:bg-red-600/80 text-white cursor-pointer transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
              {/* Grand Key Insights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#8B0000] uppercase block">మొత్తం మంత్రాలు</span>
                  <span className="text-xs font-black text-[#7B1113]">1,00,000 శ్లోకాలు</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/50 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#1B5E20] uppercase block">మొత్తం శాఖలు</span>
                  <span className="text-xs font-black text-[#1B5E20]">1,180 శాఖలు</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF5F5] border border-red-200 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#B71C1C] uppercase block">నేడు లభ్యం</span>
                  <span className="text-xs font-black text-[#B71C1C]">10 - 15 మాత్రమే (~1%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF8E1] border border-amber-300 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#D84315] uppercase block">ఉపనిషత్తులు</span>
                  <span className="text-xs font-black text-[#D84315]">108 లభ్యం / 1,121+ లుప్తం</span>
                </div>
              </div>

              {/* Zoomable Image Container */}
              <div className="w-full min-h-[420px] max-h-[600px] overflow-auto bg-stone-900 rounded-2xl border-2 border-[#D4AF37] p-3 flex items-center justify-center">
                <div
                  style={{
                    transform: `scale(${preservationZoom})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.2s ease-out'
                  }}
                  className="shadow-2xl rounded-xl overflow-hidden max-w-2xl"
                >
                  <img
                    src={VEDAS_PRESERVATION_CHART_DATA.chartImageSrc}
                    alt="How Much of the Vedas has been Lost Chart"
                    className="w-full h-auto block select-none"
                  />
                </div>
              </div>

              {/* Historical Reasons for Loss Banner */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-1.5">
                <h4 className="font-bold text-[#7B1113] flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-[#D84315]" />
                  <span>{isEn ? 'Historical Reasons for Massive Loss of Vedic Shakhas:' : 'వేద శాఖలు నశించిపోవడానికి చారిత్రక కారణాలు:'}</span>
                </h4>
                <ul className="space-y-1 text-[#4E342E] pl-2">
                  {(isEn ? VEDAS_PRESERVATION_CHART_DATA.historicalReasonsEn : VEDAS_PRESERVATION_CHART_DATA.historicalReasonsTe).map((reason, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#D84315] font-bold">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPreservationModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* VEDIC SCRIPTURES CHART FULL-SCREEN MODAL */}
      {/* =================================================================== */}
      {isScripturesModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-[#D84315] via-[#C2185B] to-[#7B1113] text-[#FFE082] flex items-center justify-between border-b border-[#D4AF37]">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">📜</span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base font-telugu-serif">
                    {isEn ? VEDIC_INDIAN_SCRIPTURES_DATA.titleEn : VEDIC_INDIAN_SCRIPTURES_DATA.titleTe}
                  </h3>
                  <span className="text-[11px] text-[#FFE57F]/90">
                    {isEn ? 'Shruti & Smriti Hierarchical Visual Classification' : 'శ్రుతి మరియు స్మృతి మూల వర్గీకరణ పటం'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={VEDIC_INDIAN_SCRIPTURES_DATA.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#FFE082] hover:bg-white text-[#7B1113] text-xs font-bold transition-colors flex items-center gap-1 shadow-xs cursor-pointer mr-1"
                  title={isEn ? "Open full picture directly in new tab" : "చిత్రాన్ని నేరుగా కొత్త ట్యాబ్‌లో తెరవండి"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEn ? "Picture Link" : "చిత్రం లింక్"}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setScripturesZoom(prev => Math.min(prev + 0.25, 2.8))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors"
                  title={isEn ? 'Zoom In' : 'జూమ్ ఇన్'}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setScripturesZoom(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors"
                  title={isEn ? 'Zoom Out' : 'జూమ్ అవుట్'}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setScripturesZoom(1)}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors"
                  title={isEn ? 'Reset Zoom' : 'రీసెట్'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsScripturesModalOpen(false)}
                  className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-[#FFE082] transition-colors ml-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center">
              <div className="w-full min-h-[420px] max-h-[620px] overflow-auto bg-stone-900 rounded-2xl border-2 border-[#D4AF37] p-3 flex items-center justify-center">
                <div
                  style={{
                    transform: `scale(${scripturesZoom})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.2s ease-out'
                  }}
                  className="shadow-2xl rounded-xl overflow-hidden max-w-2xl"
                >
                  <img
                    src={VEDIC_INDIAN_SCRIPTURES_DATA.imageSrc}
                    alt="Vedic Indian Scriptures Chart"
                    className="w-full h-auto block select-none"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsScripturesModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#7B1113] text-[#FFE082] text-xs font-bold hover:bg-[#5C0D0E] transition-colors cursor-pointer"
              >
                {isEn ? 'Close Window' : 'మూసివేయండి'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
