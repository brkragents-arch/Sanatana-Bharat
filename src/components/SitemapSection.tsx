import React, { useState, useMemo } from 'react';
import { useMythology } from '../context/MythologyContext';
import type { ViewMode } from '../types/mythology';
import {
  Search,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Layers,
  FolderTree
} from 'lucide-react';

export interface SitemapItem {
  id: string;
  titleTe: string;
  titleEn: string;
  descTe: string;
  descEn: string;
  viewMode?: ViewMode;
  targetId?: string; // Anchor or element ID to scroll to
  isModal?: 'adityas' | 'search' | 'admin';
  badgeTe: string;
  badgeEn: string;
  badgeColor?: string;
  subItems?: {
    titleTe: string;
    titleEn: string;
    descTe?: string;
    descEn?: string;
    viewMode?: ViewMode;
    targetId?: string;
    isModal?: 'adityas' | 'search' | 'admin';
  }[];
}

export interface SitemapCategory {
  id: string;
  titleTe: string;
  titleEn: string;
  descTe: string;
  descEn: string;
  icon: string;
  color: string;
  borderColor: string;
  bgGradient: string;
  items: SitemapItem[];
}

export const SitemapSection: React.FC<{ fullPage?: boolean }> = ({ fullPage = false }) => {
  const { 
    language, 
    setViewMode, 
    setIsAdityasOpen, 
    setIsSearchOpen, 
    setIsAdminOpen 
  } = useMythology();

  const isEn = language === 'en';
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'srushti_rahasyam': true,
    'sanatana_chronology': true,
    'indian_history': true,
    'brahma_family': true,
    'jyotishya_shastram': true
  });

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavigate = (viewMode?: ViewMode, isModal?: 'adityas' | 'search' | 'admin', targetId?: string) => {
    if (isModal === 'adityas') {
      setIsAdityasOpen(true);
      return;
    }
    if (isModal === 'search') {
      setIsSearchOpen(true);
      return;
    }
    if (isModal === 'admin') {
      setIsAdminOpen(true);
      return;
    }

    if (viewMode) {
      setViewMode(viewMode);
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  // Comprehensive Catalog of all pages, submodules, and tools
  const categories: SitemapCategory[] = useMemo(() => [
    {
      id: 'creation_philosophy',
      titleTe: 'సృష్టి తత్త్వము & ఆదిమ విజ్ఞానము',
      titleEn: 'Cosmic Creation & Spiritual Philosophy',
      descTe: 'పరమాత్మ సంకల్పం, 24 తత్త్వాలు, 13 సృష్టి సోపానాలు మరియు 10 సృష్టి క్రమ ఘట్టాలు',
      descEn: 'Supreme Divine Will, 24 Tattvas, 13 Causal Ontological Steps, and 10 Creation Epochs',
      icon: '✨',
      color: '#7B1113',
      borderColor: '#D4AF37',
      bgGradient: 'from-[#FFFDF7] to-[#FFF9E6]',
      items: [
        {
          id: 'srushti_rahasyam',
          titleTe: 'సృష్టి రహస్యం (సంకల్పం నుండి మోక్షం వరకు)',
          titleEn: 'Secret of Creation (Paramatma to Moksha)',
          descTe: 'పరమాత్మ సంకల్పం, ప్రకృతి-గుణాలు, మహత్తత్త్వము, అహంకారం, 24 తత్త్వాలు, ప్రాణశక్తులు మరియు 6 కర్మ చక్ర సోపానాలు.',
          descEn: 'The profound revelation of cosmic evolution: from Divine Will, Prakriti, 24 Tattvas, Pranas to Moksha and the 6-stage Karma Cycle.',
          viewMode: 'srushti_rahasyam',
          badgeTe: 'ప్రత్యేక పేజీ',
          badgeEn: 'Core Page',
          badgeColor: 'bg-[#7B1113] text-[#FFE082]',
          subItems: [
            { titleTe: '1. పరమాత్మ సంకల్పము (The Supreme Divine Will)', titleEn: '1. The Supreme Divine Will', descTe: 'సృష్టికి పూర్వం ఏకైక పరబ్రహ్మ సంకల్పం', descEn: 'Primordial unmanifest consciousness before creation' },
            { titleTe: '2. మూల ప్రకృతి & త్రిగుణములు (Prakriti & 3 Gunas)', titleEn: '2. Prakriti & 3 Gunas', descTe: 'సత్వ, రజస్, తమో గుణముల సమతుల్యత & విక్షేపం', descEn: 'Equilibrium and manifestation of Sattva, Rajas, Tamas' },
            { titleTe: '3. మహత్తత్త్వము & అహంకారము (Mahat & Ahankara)', titleEn: '3. Mahat & Ahankara', descTe: 'విశ్వ బుద్ధి మరియు సాత్విక, రాజస, తామస అహంకారాలు', descEn: 'Cosmic Intelligence and threefold ego' },
            { titleTe: '4. పంచ తన్మాత్రలు (5 Subtle Essences)', titleEn: '4. 5 Subtle Essences', descTe: 'శబ్ద, స్పర్శ, రూప, రస, గంధ తన్మాత్రలు', descEn: 'Sound, Touch, Form, Taste, and Smell' },
            { titleTe: '5. పంచ మహాభూతాలు (5 Gross Elements)', titleEn: '5. 5 Gross Elements', descTe: 'ఆకాశం, వాయువు, అగ్ని, జలము, పృథ్వి', descEn: 'Ether, Air, Fire, Water, and Earth' },
            { titleTe: '6. విరాట్ పురుషుడు (Universal Cosmic Being)', titleEn: '6. Universal Cosmic Being', descTe: 'సహస్రశీర్షా పురుషుడు & బ్రహ్మాండ పిండ ఆవిర్భావం', descEn: 'The cosmic macrocosmic embodiment' },
            { titleTe: '7. చతుర్ముఖ బ్రహ్మ జననం (Birth of Brahma)', titleEn: '7. Emergence of Brahma', descTe: 'శ్రీహరి నాభీకమలంలో ఉద్భవించిన సృష్టికర్త', descEn: 'Manifestation on the navel lotus of Vishnu' },
            { titleTe: '8. దశవిధ సృష్టి క్రమము (10-fold Creation)', titleEn: '8. 10-fold Creation Sequence', descTe: '6 ప్రాకృత, 3 వైకృత మరియు 1 కౌమార సృష్టి', descEn: '6 primary, 3 secondary, and 1 Kaumara creation' },
            { titleTe: '9. కర్మ చక్రము (6-Stage Wheel of Karma)', titleEn: '9. 6-Stage Wheel of Karma', descTe: 'అవిద్య ➔ కామము ➔ కర్మ ➔ సంస్కారము ➔ పునర్జన్మ ➔ భోగము', descEn: 'Avidya ➔ Kama ➔ Karma ➔ Samskara ➔ Rebirth ➔ Experience' },
            { titleTe: '10. సృష్టి విజ్ఞాన వృక్షం (24 Tattvas Tree)', titleEn: '10. 24 Tattvas Interactive Tree', descTe: 'ఇంటరాక్టివ్ 24 తత్త్వ జ్ఞాన దర్శిని', descEn: 'Interactive 24 Tattvas ontological knowledge diagram' }
          ]
        },
        {
          id: 'sanatana_chronology',
          titleTe: 'సనాతన ధర్మ ఆవిర్భావము (13 సోపానాలు)',
          titleEn: 'Sanatana Chronology (13 Steps of Creation)',
          descTe: 'సర్వేశ్వరుని నుండి బ్రహ్మ మరియు సమస్త సృష్టి క్రమం వరకు గల 13 కాలానుక్రమ సోపానములు.',
          descEn: 'The exact 13-stage causal evolution: Sarveshvara ➔ Kala/Svabhava ➔ Prakriti ➔ Mahat ➔ Ahankara ➔ Tanmatras ➔ Bhutas ➔ Virat ➔ Brahma.',
          viewMode: 'sanatana_chronology',
          badgeTe: 'హోమ్ దర్శిని',
          badgeEn: 'Chronology Hub',
          badgeColor: 'bg-[#D84315] text-white',
          subItems: [
            { titleTe: '13 సృష్టి సోపానాల వరుసక్రమ దర్శనం', titleEn: '13 Chronological Causal Steps' },
            { titleTe: 'వైదిక ఇతిహాస కాలగణన (యుగాలు, మన్వంతరాలు, కల్పాలు)', titleEn: 'Vedic Itihasa Chronology (Yugas, Manvantaras, Kalpas)' },
            { titleTe: 'సమకాలీన ప్రాచీన నాగరికతలు (ఈజిప్ట్, మెసొపొటేమియా, గ్రీస్, రోమ్, చైనా)', titleEn: 'Contemporary Ancient Civilizations (Egypt, Mesopotamia, Greece, Rome, China)' },
            { titleTe: 'ప్రాచీన భారతీయ విజ్ఞాన శాస్త్రాలు & విశ్వవిద్యాలయాలు', titleEn: 'Ancient Indian Sciences & Universities (Nalanda, Takshashila, Aryabhata, Sushruta)' },
            { titleTe: '5000 ఏళ్ల భారతీయ చారిత్రక ప్రస్థాన దర్శనం', titleEn: '5,000-Year Indian Civilizational Heritage' },
            { titleTe: 'త్రయస్త్రింశత్ దేవాః (33 కోట్ల వేద దేవతల మూలములు)', titleEn: 'Trayastrimshat Devas (33 Primary Vedic Deities)' },
            { titleTe: 'సప్తర్షి మండల దర్శనం (ప్రతి మన్వంతర సప్తర్షులు)', titleEn: 'Saptarishi Mandala (Seven Great Seers across Manvantaras)' },
            { titleTe: 'శ్రీమద్భాగవత ద్వాదశ స్కంధ వృక్షం (12 స్కంధాలు)', titleEn: 'Srimad Bhagavatam 12 Skandhas Tree' }
          ]
        },
        {
          id: 'creation_flow',
          titleTe: 'సృష్టి క్రమము (10 ఘట్టాల ప్రవాహం)',
          titleEn: 'Creation Sequence Flow (10 Stages)',
          descTe: 'మహత్తత్త్వ సృష్టి మొదలుకొని మానవ సృష్టి మరియు దేవతల వరకు దశవిధ సృష్టి క్రమ విశ్లేషణ.',
          descEn: 'Detailed analytical flow of the 10 creation epochs: 6 Prakrita (Elemental), 3 Vaikrita (Manifest), and 1 Kaumara.',
          viewMode: 'flow',
          badgeTe: '10 ఘట్టాలు',
          badgeEn: '10 Stages',
          badgeColor: 'bg-[#C99700] text-stone-950',
          subItems: [
            { titleTe: '1. మహత్తత్త్వ సృష్టి (Mahat Tattva Creation)', titleEn: '1. Mahat Tattva Creation' },
            { titleTe: '2. అహంకార సృష్టి (Ahankara Creation)', titleEn: '2. Ahankara Creation' },
            { titleTe: '3. భూత సృష్టి - తన్మాత్రలు (Bhuta & Tanmatra Creation)', titleEn: '3. Bhuta & Tanmatra Creation' },
            { titleTe: '4. ఇంద్రియ సృష్టి (Indriya / Sense Organs Creation)', titleEn: '4. Indriya Sense Organs Creation' },
            { titleTe: '5. దేవతా సృష్టి (Devata / Presiding Deities Creation)', titleEn: '5. Devata Presiding Deities Creation' },
            { titleTe: '6. తామిస్రాది అవిద్య సృష్టి (Tamisa / Ignorance Creation)', titleEn: '6. Avidya Creation' },
            { titleTe: '7. వృక్ష లతాది వనస్పతి సృష్టి (Vegetation & Flora Creation)', titleEn: '7. Flora & Vegetation Creation' },
            { titleTe: '8. తిర్యక్ / జంతు పశు పక్షి సృష్టి (Fauna & Animals Creation)', titleEn: '8. Animals & Birds Creation' },
            { titleTe: '9. మనుష్య సృష్టి (Human Race Creation)', titleEn: '9. Human Race Creation' },
            { titleTe: '10. కౌమార / దేవగణ సృష్టి (Kaumara & Sage Creation)', titleEn: '10. Kaumara Sage Creation' }
          ]
        }
      ]
    },
    {
      id: 'genealogies_puranas',
      titleTe: 'పౌరాణిక వంశపరంపర & వంశవృక్షాలు',
      titleEn: 'Sacred Genealogies & Puranic Lineages',
      descTe: 'చతుర్ముఖ బ్రహ్మ సంతతి, స్వాయంభువ మనువు, దక్ష ప్రజాపతి 16 మంది కుమార్తెలు & దివ్య వంశాలు',
      descEn: 'Brahma\'s Progeny, Swayambhuva Manu, Daksha\'s 16 Daughters, and Divine Lineages',
      icon: '🌳',
      color: '#D84315',
      borderColor: '#FFD54F',
      bgGradient: 'from-[#FFFDF7] to-[#FFF3E0]',
      items: [
        {
          id: 'brahma_family',
          titleTe: 'బ్రహ్మ వంశము (Family of Brahma)',
          titleEn: 'Family of Brahma (Complete Lineage)',
          descTe: 'చతుర్ముఖ బ్రహ్మ, సరస్వతి, 10 మంది మానసపుత్రులు (నవ బ్రహ్మలు), స్వాయంభువ మనువు-శతరూప దంపతులు.',
          descEn: 'Comprehensive genealogical panorama of Chaturmukha Brahma, Saraswati, 10 Mind-born Sons (Navabrahmas), Manu & Shatarupa.',
          viewMode: 'brahma_family',
          badgeTe: 'సంపూర్ణ వంశం',
          badgeEn: 'Full Lineage',
          badgeColor: 'bg-[#D84315] text-white',
          subItems: [
            { titleTe: 'చతుర్ముఖ బ్రహ్మ & సరస్వతీ దేవి (Brahma & Saraswati)', titleEn: 'Brahma & Saraswati' },
            { titleTe: '10 మంది బ్రహ్మ మానసపుత్రులు (మరీచి, అత్రి, అంగిరసుడు, పులస్త్యుడు, పులహుడు, క్రతువు, భృగువు, వశిష్ఠుడు, దక్షుడు, నారదుడు)', titleEn: '10 Mind-Born Sons (Marichi, Atri, Angirasa, Pulastya, Pulaha, Kratu, Bhrigu, Vasistha, Daksha, Narada)' },
            { titleTe: 'స్వాయంభువ మనువు & శతరూపా దేవి (Swayambhuva Manu & Shatarupa)', titleEn: 'Swayambhuva Manu & Shatarupa' },
            { titleTe: 'ప్రియవ్రతుడు & ఉత్తానపాదుడు - ధ్రువ మహారాజు వంశము', titleEn: 'Priyavrata & Uttanapada - Dhruva Lineage' },
            { titleTe: 'ఆకూతి (రుచి ప్రజాపతి భార్య), దేవహూతి (కర్దమ ప్రజాపతి భార్య), ప్రసూతి (దక్ష ప్రజాపతి భార్య)', titleEn: '3 Daughters of Manu: Akuti, Devahuti, Prasuti' },
            { titleTe: 'భగవాన్ కపిల మహర్షి & సాంఖ్య శాస్త్ర ప్రవర్తన', titleEn: 'Sage Kapila & Sankhya Philosophy' }
          ]
        },
        {
          id: 'family_tree',
          titleTe: 'సంపూర్ణ ఇంటరాక్టివ్ వంశవృక్షము (Family Tree)',
          titleEn: 'Interactive Hierarchical Family Tree',
          descTe: 'తరాల వారీగా, వంశాల వారీగా అన్వేషించగల పూర్తి ఇంటరాక్టివ్ ప్రజాపతి వంశవృక్ష పటం.',
          descEn: 'Explore 5+ generations from Lord Vishnu to Brahma, Prajapatis, Manu, and the 16 Daughters with real-time ancestry traversal.',
          viewMode: 'tree',
          badgeTe: 'ఇంటరాక్టివ్ ట్రీ',
          badgeEn: 'Interactive Tree',
          badgeColor: 'bg-[#7B1113] text-[#FFE082]',
          subItems: [
            { titleTe: 'తరం 0: శ్రీమహావిష్ణువు (Supreme Cosmic Origin)', titleEn: 'Gen 0: Sri Maha Vishnu' },
            { titleTe: 'తరం 1: చతుర్ముఖ బ్రహ్మ (The Creator)', titleEn: 'Gen 1: Chaturmukha Brahma' },
            { titleTe: 'తరం 2: బ్రహ్మ మానసపుత్రులు & స్వాయంభువ మనువు', titleEn: 'Gen 2: Mind-born Sons & Manu' },
            { titleTe: 'తరం 3: దక్ష ప్రజాపతి & ప్రసూతి దేవి', titleEn: 'Gen 3: Daksha Prajapati & Prasuti' },
            { titleTe: 'తరం 4: దక్ష-ప్రసూతి 16 మంది కుమార్తెలు', titleEn: 'Gen 4: 16 Daughters of Daksha' },
            { titleTe: 'తరం 5: నర-నారాయణులు, అగ్నులు, పితృదేవతలు & లోక సంతతి', titleEn: 'Gen 5: Nara-Narayana, Agnis, Pitrus & World Offspring' },
            { titleTe: 'నోడ్ క్లిక్ వివరణ డ్రాయర్ (పూర్తి పద్యాలు & పురాణ ఆధారాలు)', titleEn: 'Node Click Drawer (Verses & Puranic Evidence)' }
          ]
        },
        {
          id: 'daksha_vamsa',
          titleTe: 'దక్ష-ప్రసూతి వంశము (16 మంది కుమార్తెలు)',
          titleEn: 'Daksha-Prasuti 16 Daughters Lineage',
          descTe: 'ధర్మదేవుని 10 మంది భార్యలు, అగ్ని భార్య స్వాహా, పితృదేవతల భార్య స్వధా, శివుని భార్య సతీదేవి వంశాలు.',
          descEn: 'The extensive matrix of Daksha and Prasuti\'s 16 daughters: Dharma\'s 10 wives, Agni\'s Svaha, Pitrus\' Svadha, Shiva\'s Sati, and their progeny.',
          viewMode: 'daksha_vamsa',
          badgeTe: '16 కుమార్తెలు',
          badgeEn: '16 Daughters',
          badgeColor: 'bg-[#BF360C] text-white',
          subItems: [
            { titleTe: 'ధర్మదేవుని 10 మంది భార్యలు: మూర్తి (నరనారాయణుల తల్లి), శ్రద్ధ, మైత్రి, దయ, శాంతి, తుష్టి, పుష్టి, క్రియ, ఉన్నతి, బుద్ధి', titleEn: 'Dharma\'s 10 Wives (Murti mother of Nara-Narayana, Shraddha, Maitri, Daya, Shanti, Tushti, Pushti, Kriya, Unnati, Buddhi)' },
            { titleTe: 'స్వాహా దేవి (అగ్ని భార్య): పావకుడు, పవమానుడు, శుచి అను ముగ్గురు అగ్ని పుత్రులు', titleEn: 'Svaha Devi (Agni\'s Wife): Pavaka, Pavamana, Shuchi (49 Fires)' },
            { titleTe: 'స్వధా దేవి (పితృదేవతల భార్య): వయున & ధారిణి అను ఇద్దరు కన్యలు', titleEn: 'Svadha Devi (Pitrus\' Wife): Vayuna & Dharini' },
            { titleTe: 'సతీదేవి (పరమశివుని భార్య): దక్షాధ్వరం, యజ్ఞ ధ్వంసం & పార్వతీదేవిగా పునర్జన్మ', titleEn: 'Sati Devi (Lord Shiva\'s Consort): Daksha Yajna & Rebirth as Parvati' },
            { titleTe: 'ఖ్యాతి (భృగువు భార్య): ధాత, విధాత & శ్రీలక్ష్మీదేవి', titleEn: 'Khyati (Bhrigu\'s Wife): Dhata, Vidhata & Lakshmi' },
            { titleTe: 'అనసూయ (అత్రి భార్య): దత్తాత్రేయుడు, దుర్వాసుడు, చంద్రుడు', titleEn: 'Anasuya (Atri\'s Wife): Dattatreya, Durvasa, Chandra' }
          ]
        },
        {
          id: 'mindmap',
          titleTe: 'మైండ్ మ్యాప్స్ (Radial Mind Maps)',
          titleEn: 'Radial Mind Map of Creation',
          descTe: 'చతుర్ముఖ బ్రహ్మ కేంద్రంగా నాలుగు వేదాలు, దిక్కులు, మానసపుత్రులు మరియు యజ్ఞ క్రమ విస్తరణ.',
          descEn: 'Radial interactive diagram expanding from Chaturmukha Brahma to the 4 Vedas, cardinal directions, Saptarishis, and sacrificial sciences.',
          viewMode: 'mindmap',
          badgeTe: 'రేడియల్ మ్యాప్',
          badgeEn: 'Radial Map',
          badgeColor: 'bg-[#7B1113] text-[#FFE082]',
          subItems: [
            { titleTe: 'తూర్పు ముఖము: ఋగ్వేదము & గాయత్రీ ఛందస్సు', titleEn: 'East Face: Rigveda & Gayatri Metre' },
            { titleTe: 'దక్షిణ ముఖము: యజుర్వేదము & త్రిష్టుప్ ఛందస్సు', titleEn: 'South Face: Yajurveda & Trishtubh Metre' },
            { titleTe: 'పశ్చిమ ముఖము: సామవేదము & జగతీ ఛందస్సు', titleEn: 'West Face: Samaveda & Jagati Metre' },
            { titleTe: 'ఉత్తర ముఖము: అథర్వణవేదము & అనుష్టుప్ ఛందస్సు', titleEn: 'North Face: Atharvaveda & Anushtubh Metre' },
            { titleTe: 'ఉపవేదాలు & వేదాంగాలు (ఆయుర్వేద, ధనుర్వేద, గాంధర్వ, స్థాపత్య)', titleEn: 'Upavedas & Vedangas (Ayurveda, Dhanurveda, Gandharva, Sthapatya)' }
          ]
        },
        {
          id: 'divine_family',
          titleTe: 'దివ్య వంశ దర్శనం & 27 నక్షత్రాలు',
          titleEn: 'Divine Family Tree & 27 Nakshatras',
          descTe: 'త్రిమూర్తులు, త్రిదేవీలు మరియు 27 నక్షత్ర రాశి మండల ఖగోళ చక్రం.',
          descEn: 'The Supreme Divine Trinity (Trimurthi), Tridevis, and the 27 Nakshatras Celestial Mandala.',
          viewMode: 'intro',
          targetId: 'divine-family-section',
          badgeTe: 'ఖగోళ మండలము',
          badgeEn: 'Cosmic Mandala',
          badgeColor: 'bg-[#1976D2] text-white',
          subItems: [
            { titleTe: 'శ్రీమహావిష్ణువు - శ్రీలక్ష్మీదేవి (వైకుంఠ దివ్య వంశం)', titleEn: 'Sri Maha Vishnu - Sri Lakshmi Devi' },
            { titleTe: 'చతుర్ముఖ బ్రహ్మ - శ్రీసరస్వతీ దేవి (సత్యలోక సృష్టి వంశం)', titleEn: 'Chaturmukha Brahma - Sri Saraswati Devi' },
            { titleTe: 'పరమశివుడు - శ్రీపార్వతీ దేవి (కైలాస దివ్య వంశం)', titleEn: 'Parama Shiva - Sri Parvati Devi' },
            { titleTe: '27 నక్షత్రాల మండలము (అశ్విని నుండి రేవతి వరకు అధిదేవతలు & రాశులు)', titleEn: '27 Nakshatras Mandala (Ashvini to Revati Deities & Rashis)' }
          ]
        }
      ]
    },
    {
      id: 'indian_history',
      titleTe: 'భారతీయ సమగ్ర చరిత్ర (5,000+ ఏళ్లు)',
      titleEn: 'Indian History (5,000+ Years Chronology)',
      descTe: 'ప్రాచీన శిలాయుగం, సింధు లోయ, వేద కాలం, మౌర్య, గుప్త, దక్షిణ భారత సామ్రాజ్యాలు, విజయనగరం & ఆధునిక యుగం',
      descEn: 'Pre-history, Indus Valley Civilization, Vedic Era, Maurya, Gupta, South Indian Dynasties, Vijayanagara Empire & Modern Era',
      icon: '🏛️',
      color: '#7B1113',
      borderColor: '#D4AF37',
      bgGradient: 'from-[#FFFDF7] to-[#FFF9E6]',
      items: [
        {
          id: 'indian_history_main',
          titleTe: 'భారతీయ చరిత్ర కాలానుక్రమణిక (Indian History View)',
          titleEn: 'Complete Indian History Chronology Hub',
          descTe: 'ప్రాచీన శిలాయుగం నుండి స్వాతంత్ర్య పోరాటం మరియు ఆధునిక భారతదేశం వరకు సమగ్ర చారిత్రక ఘట్టాలు.',
          descEn: 'Comprehensive chronological portal of Indian history from Paleolithic origins through classical empires to freedom movement and independence.',
          viewMode: 'indian_history',
          badgeTe: 'ప్రధాన చరిత్ర పేజీ',
          badgeEn: 'History Hub',
          badgeColor: 'bg-[#7B1113] text-[#FFE082]',
          subItems: [
            { titleTe: '1. ప్రాచీన శిలాయుగం & రాతియుగం (Paleolithic, Mesolithic, Neolithic)', titleEn: '1. Stone Age Pre-history (Paleolithic to Neolithic)' },
            { titleTe: '2. సింధు లోయ నాగరికత (Indus Valley Civilization - 3300-1300 BCE)', titleEn: '2. Indus Valley Civilization (Harappa, Mohenjodaro, Lothal)' },
            { titleTe: '3. తొలి & మలి వేద నాగరికత (Vedic Period - 1500-600 BCE)', titleEn: '3. Vedic Period & Vedic Literature (1500-600 BCE)' },
            { titleTe: '4. 16 ప్రాచీన మహాజనపదాలు (16 Ancient Mahajanapadas)', titleEn: '4. 16 Mahajanapadas & Magadha Rise' },
            { titleTe: '5. మగధ సామ్రాజ్యము & మౌర్య వంశము (Maurya Empire - Chandragupta, Chanakya, Ashoka)', titleEn: '5. Maurya Dynasty (Chandragupta, Chanakya, Ashoka the Great)' },
            { titleTe: '6. గుప్త సామ్రాజ్య స్వర్ణయుగం (Gupta Empire Golden Age - 320-550 CE)', titleEn: '6. Gupta Empire Golden Age (Samudragupta, Chandragupta II, Kalidasa, Aryabhata)' },
            { titleTe: '7. దక్షిణ భారత సామ్రాజ్యాలు (చోళ, పల్లవ, చాళుక్య సామ్రాజ్యాలు)', titleEn: '7. South Indian Dynasties (Cholas, Pallavas, Chalukyas)' },
            { titleTe: '8. విజయనగర సామ్రాజ్యం (హరిహర, బుక్క, దేవరాయలు, శ్రీకృష్ణదేవరాయలు, అచ్యుతరాయలు)', titleEn: '8. Vijayanagara Empire (Harihara I, Bukka I, Deva Raya I & II, Krishnadevaraya, Achyuta Raya)' },
            { titleTe: '9. మొఘల్ సామ్రాజ్య యుగం & ఛత్రపతి శివాజీ మరాఠా స్వరాజ్యం', titleEn: '9. Mughal Era & Chhatrapati Shivaji Maratha Swarajya' },
            { titleTe: '10. బ్రిటిష్ వలస పాలన & భారత స్వాతంత్ర్య ఉద్యమ ప్రస్థానం (1857-1947)', titleEn: '10. British Colonial Rule & Indian National Movement (1857 to 1947)' }
          ]
        },
        {
          id: 'vijayanagara_spotlight',
          titleTe: 'విజయనగర సామ్రాజ్య ప్రముఖ చక్రవర్తులు (1336–1542 CE)',
          titleEn: 'Vijayanagara Empire Prominent Emperors',
          descTe: 'సామ్రాజ్య స్థాపకులు హరిహర రాయలు, బుక్క రాయలు, దేవరాయలు, సాహితీ సమరాంగణ సార్వభౌముడు శ్రీకృష్ణదేవరాయలు & అచ్యుత దేవరాయల ప్రామాణిక చిత్రపటాలు & ఘనతలు.',
          descEn: 'Authentic historical portraits, reigns, and monumental achievements of Harihara I, Bukka I, Deva Raya I, Deva Raya II, Sri Krishnadeva Raya, and Achyuta Deva Raya.',
          viewMode: 'indian_history',
          targetId: 'vijayanagara-section',
          badgeTe: 'చక్రవర్తుల శీర్షిక',
          badgeEn: 'Emperors Gallery',
          badgeColor: 'bg-[#C99700] text-stone-950',
          subItems: [
            { titleTe: 'మొదటి హరిహర రాయలు (క్రీ.శ. 1336–1356) - సామ్రాజ్య సహ-వ్యవస్థాపకుడు', titleEn: 'Harihara I (1336–1356 CE) - Empire Co-founder' },
            { titleTe: 'మొదటి బుక్క రాయలు (క్రీ.శ. 1356–1377) - చతుర్వేద భాష్య పోషకుడు', titleEn: 'Bukka Raya I (1356–1377 CE) - Four Vedas Patron' },
            { titleTe: 'మొదటి దేవరాయలు (క్రీ.శ. 1406–1422) - తుంగభద్ర ఆనకట్టల నిర్మాత', titleEn: 'Deva Raya I (1406–1422 CE) - Tungabhadra Aqueduct Builder' },
            { titleTe: 'రెండవ దేవరాయలు / ప్రౌఢ దేవరాయలు (క్రీ.శ. 1424–1446) - గజబేటెకార బిరుదాంకితుడు', titleEn: 'Deva Raya II / Proudha Devaraya (1424–1446 CE) - Gajabetekara' },
            { titleTe: 'శ్రీకృష్ణదేవరాయలు (క్రీ.శ. 1509–1529) - స్వర్ణయుగ సార్వభౌముడు', titleEn: 'Sri Krishnadeva Raya (1509–1529 CE) - Golden Zenith Emperor' },
            { titleTe: 'అచ్యుత దేవరాయలు (క్రీ.శ. 1529–1542) - అచ్యుతరాయ ఆలయ నిర్మాత', titleEn: 'Achyuta Deva Raya (1529–1542 CE) - Temple Builder' }
          ]
        }
      ]
    },
    {
      id: 'astrology_sciences',
      titleTe: 'జ్యోతిష్య శాస్త్రము & ప్రాచీన విజ్ఞానము',
      titleEn: 'Astrology Science & Ancient Indian Sciences',
      descTe: '4 శిరో చక్రాలు, 12 రాశులు, 12 గ్రహాలు, 324 కర్మలు, 5-స్థాయి దశా కాలిక్యులేటర్ & ప్రాచీన విశ్వవిద్యాలయాలు',
      descEn: '4 Head Chakras, 12 Rashis, 12 Grahas, 324 Karmas, 5-Tier Dasha Calculator & Ancient Universities',
      icon: '🔮',
      color: '#4A0012',
      borderColor: '#D4AF37',
      bgGradient: 'from-[#FFFDF7] to-[#FCE4EC]',
      items: [
        {
          id: 'jyotishya_shastram',
          titleTe: 'జ్యోతిష్య శాస్త్రము (4 చక్రాలు • 12 గ్రహాలు • 324 కర్మలు)',
          titleEn: 'Comprehensive Jyotishya Shastram Portal',
          descTe: 'కర్మ చక్రము, కాల చక్రము, గుణ చక్రము, బ్రహ్మ చక్రము, 12 రాశులు-గ్రహాలు, 48 అధ్యాయాల వేద జ్యోతిష్యం.',
          descEn: '4 Head Chakras, 12 Grahas, 12 Rashis, 324 Karmic combinations, and comprehensive 5-tier Dasha calculator.',
          viewMode: 'jyotishya_shastram',
          badgeTe: 'ప్రత్యేక శాస్త్ర పేజీ',
          badgeEn: 'Full Science Hub',
          badgeColor: 'bg-[#4A0012] text-[#FFE082]',
          subItems: [
            { titleTe: '1. కర్మ చక్రము (Karma Chakra - 12 స్వరూపాలు)', titleEn: '1. Karma Chakra (12 Prarabdha Formations)' },
            { titleTe: '2. కాల చక్రము (Kala Chakra - కాలానుగమన చక్రం)', titleEn: '2. Kala Chakra (Planetary Transits & Epochs)' },
            { titleTe: '3. గుణ చక్రము (Guna Chakra - 324 కర్మ విభాగాలు)', titleEn: '3. Guna Chakra (324 Karma Combinations)' },
            { titleTe: '4. బ్రహ్మ చక్రము (Brahma Chakra - సర్వోన్నత మోక్ష చక్రం)', titleEn: '4. Brahma Chakra (Supreme Transcendental Chakra)' },
            { titleTe: '12 రాశులు & 12 గ్రహముల సంపూర్ణ అధిదేవతా విశ్లేషణ', titleEn: '12 Rashis & 12 Grahas Presiding Deities' },
            { titleTe: '5-స్థాయి దశా కాలిక్యులేటర్ (మహా, అంతర, ప్రత్యంతర, సూక్ష్మ, ప్రాణ దశా)', titleEn: '5-Tier Dasha Calculator (Maha, Antar, Pratyantar, Sookshma, Prana)' },
            { titleTe: '48 అధ్యాయాల సంపూర్ణ శాస్త్ర గ్రంథ విశ్లేషణ', titleEn: '48 Classical Jyotishya Chapters Directory' }
          ]
        },
        {
          id: 'ancient_sciences',
          titleTe: 'ప్రాచీన భారతీయ విశ్వవిద్యాలయాలు & శాస్త్రవేత్తలు',
          titleEn: 'Ancient Indian Universities & Scientists',
          descTe: 'నలంద, తక్షశిల, విక్రమశిల, వల్లభి విశ్వవిద్యాలయాలు మరియు ఆర్యభట్ట, సుశ్రుత, చరక, కణాదుల శాస్త్ర గ్రంథాలు.',
          descEn: 'The world\'s earliest universities: Nalanda, Takshashila, Vikramashila, Valabhi; and pioneer masters of surgery, medicine, astronomy, and atomic theory.',
          viewMode: 'sanatana_chronology',
          targetId: 'ancient-universities-section',
          badgeTe: 'విద్యాపీఠాలు',
          badgeEn: 'Seat of Learning',
          badgeColor: 'bg-[#1976D2] text-white',
          subItems: [
            { titleTe: 'తక్షశిల విశ్వవిద్యాలయం (Takshashila University - క్రీ.పూ. 700)', titleEn: 'Takshashila University (c. 700 BCE)' },
            { titleTe: 'నలంద మహావిహార విశ్వవిద్యాలయం (Nalanda University - క్రీ.శ. 427)', titleEn: 'Nalanda Mahavihara (c. 427 CE)' },
            { titleTe: 'విక్రమశిల & వల్లభి విశ్వవిద్యాలయాలు (Vikramashila & Valabhi)', titleEn: 'Vikramashila & Valabhi Universities' },
            { titleTe: 'ఆర్యభట్టు (Aryabhata) - ఖగోళ శాస్త్రం, శూన్య సిద్ధాంతం & పై (π) విలువ', titleEn: 'Aryabhata - Astronomy, Concept of Zero & Pi' },
            { titleTe: 'సుశ్రుతుడు (Sushruta) - ప్లాస్టిక్ సర్జరీ & శస్త్ర చికిత్సా పితామహుడు', titleEn: 'Sushruta - Father of Surgery & Rhinoplasty' },
            { titleTe: 'చరకుడు (Charaka) - ఆయుర్వేద సంహిత & కాయచికిత్స', titleEn: 'Charaka - Charaka Samhita & Internal Medicine' },
            { titleTe: 'కణాద మహర్షి (Kanada) - వైశేషిక పరమాణు సిద్ధాంతం (Atomic Theory)', titleEn: 'Sage Kanada - Vaisheshika Atomic Theory' },
            { titleTe: 'వరాహమిహిరుడు & భాస్కరాచార్య (Varahamihira & Bhaskara)', titleEn: 'Varahamihira & Bhaskaracharya (Calculus & Lilavati)' }
          ]
        }
      ]
    },
    {
      id: 'scriptures_tools',
      titleTe: 'భాగవత మూల ఆధారాలు & ఇంటరాక్టివ్ సాధనాలు',
      titleEn: 'Scriptural Sources & Interactive Tools',
      descTe: 'బమ్మెర పోతన తెలుగు భాగవత పద్య నిధి, ద్విభాషా శోధన, 12 ఆదిత్యుల విండో, ప్రణవ నాదము & అడ్మిన్ CMS',
      descEn: 'Bammera Pothana Telugu Bhagavatam Verses, Bilingual Search, 12 Adityas Modal, Cosmic OM & Admin CMS',
      icon: '📖',
      color: '#C99700',
      borderColor: '#7B1113',
      bgGradient: 'from-[#FFFDF7] to-[#FFF8E1]',
      items: [
        {
          id: 'scriptures_library',
          titleTe: 'భాగవత ఆధారాలు (Scripture Library)',
          titleEn: 'Bhagavatam Scripture Verses Library',
          descTe: 'బమ్మెర పోతన తెలుగు భాగవత మూల పద్యాలు, ప్రతిపదార్థ తాత్పర్యములు మరియు ఆధికారిక స్కంధ సూచిక.',
          descEn: 'Authentic Bammera Pothana Telugu Bhagavatam verses with word-by-word meanings, Canto citations, and direct reference links.',
          viewMode: 'scriptures',
          badgeTe: 'మూల పద్య నిధి',
          badgeEn: 'Verses Library',
          badgeColor: 'bg-[#C99700] text-stone-950',
          subItems: [
            { titleTe: 'తృతీయ స్కంధము - విదుర-మైత్రేయ సంవాదం మూల పద్యాలు', titleEn: 'Canto 3: Vidura-Maitreya Dialogue Core Verses' },
            { titleTe: 'చతుర్థ స్కంధము - దక్ష ప్రజాపతి సంతతి & శివ-సతీ ఉపాఖ్యానం', titleEn: 'Canto 4: Daksha Lineage & Shiva-Sati Episode' },
            { titleTe: 'ప్రతి పద్యానికి ప్రతిపదార్థ భావం & ఆంగ్ల అనువాదం', titleEn: 'Word-by-word meanings & English translations' },
            { titleTe: 'ప్రమాణ బద్ధత వర్గీకరణ (భాగవత మూలము vs పురాణాంతర సమన్వయం)', titleEn: 'Puranic Source Confidence Verification' }
          ]
        },
        {
          id: 'interactive_modals',
          titleTe: 'ఇంటరాక్టివ్ సాధనాలు & పాప్-అప్ మోడల్స్',
          titleEn: 'Interactive Utilities & Modals',
          descTe: 'ద్వాదశ ఆదిత్యుల పాప్-అప్, తెలుగు/ఇంగ్లీష్ శోధన, ప్రణవ నాదము (ఓం) మరియు నిర్వాహక వ్యవస్థ.',
          descEn: 'One-click launchable utilities including Dvadasha Adityas Pop-up, Full-text Search, 136.1 Hz OM Sound, and CMS.',
          badgeTe: 'సాధనాలు',
          badgeEn: 'Utilities',
          badgeColor: 'bg-[#2E7D32] text-white',
          subItems: [
            { titleTe: '☀️ 12 మంది ఆదిత్యులు (Dvadasha Adityas Pop-up)', titleEn: '☀️ 12 Adityas Pop-up Window', isModal: 'adityas', descTe: '12 నెలల సూర్య భగవానుని రూపాలు, తేజస్సు & శ్లోకాలు' },
            { titleTe: '🔍 ద్విభాషా శోధన వ్యవస్థ (Search Modal)', titleEn: '🔍 Bilingual Search Engine', isModal: 'search', descTe: 'పేర్లు, వంశాలు, పద్యాలు & భావాల తక్షణ శోధన' },
            { titleTe: '🎵 ప్రణవ నాదము (136.1 Hz Cosmic OM Audio)', titleEn: '🎵 Cosmic OM Sound Player (136.1 Hz)', descTe: 'భూమి వార్షిక భ్రమణ ఆధారిత సహజ ప్రణవ ధ్వని' },
            { titleTe: '⚙️ నిర్వాహక వ్యవస్థ (Admin CMS Modal)', titleEn: '⚙️ Admin CMS & Data Backup', isModal: 'admin', descTe: 'పౌరాణిక పాత్రల సవరణ, చేరిక & JSON ఎగుమతి/దిగుమతి' }
          ]
        }
      ]
    }
  ], []);

  // Filter items based on category and search query
  const filteredCategories = useMemo(() => {
    return categories.map(cat => {
      // If category tab is selected and doesn't match, return empty items
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return { ...cat, items: [] };
      }

      if (!searchFilter.trim()) {
        return cat;
      }

      const q = searchFilter.toLowerCase().trim();
      const matchingItems = cat.items.filter(item => {
        const matchTitle = item.titleTe.toLowerCase().includes(q) || item.titleEn.toLowerCase().includes(q);
        const matchDesc = item.descTe.toLowerCase().includes(q) || item.descEn.toLowerCase().includes(q);
        const matchSub = item.subItems?.some(s => 
          s.titleTe.toLowerCase().includes(q) || 
          s.titleEn.toLowerCase().includes(q) ||
          (s.descTe && s.descTe.toLowerCase().includes(q)) ||
          (s.descEn && s.descEn.toLowerCase().includes(q))
        );
        return matchTitle || matchDesc || matchSub;
      });

      return {
        ...cat,
        items: matchingItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [categories, selectedCategory, searchFilter]);

  // Overall Statistics
  const stats = useMemo(() => {
    let totalPages = 0;
    let totalSubtopics = 0;
    categories.forEach(c => {
      totalPages += c.items.length;
      c.items.forEach(i => {
        totalSubtopics += i.subItems?.length || 0;
      });
    });
    return {
      categoriesCount: categories.length,
      pagesCount: totalPages,
      subtopicsCount: totalSubtopics
    };
  }, [categories]);

  return (
    <section 
      id="sitemap-section" 
      className={`rounded-3xl border-2 border-[#D4AF37] bg-[#FFFDF7] shadow-md transition-all ${
        fullPage ? 'p-4 sm:p-8 max-w-7xl mx-auto my-6' : 'p-4 sm:p-6 my-6'
      }`}
    >
      {/* Header Banner */}
      <div className="border-b-2 border-[#D4AF37]/30 pb-5 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B1113] to-[#D84315] border-2 border-[#FFD54F] flex items-center justify-center text-2xl shadow-sm text-white">
              🗺️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-2xl font-bold text-[#7B1113] font-telugu-serif tracking-tight">
                  {isEn ? 'Sanatana Bharat: Complete Project Sitemap' : 'సనాతన భారత్: సమగ్ర ప్రాజెక్ట్ సైట్‌మ్యాప్ & విషయ సూచిక'}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FAF7F0] text-[#7B1113] border border-[#D4AF37]">
                  {isEn ? 'Universal Directory' : 'సర్వతోముఖ దర్శిని'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5D4037] mt-0.5">
                {isEn 
                  ? 'Interactive hierarchical index of all 11 major pages, 50+ modules, scriptures, and sacred lineages with 1-click direct navigation.'
                  : 'ప్రాజెక్టులోని 11 ప్రధాన విభాగాలు, 50+ ఉప-విభాగాలు, ప్రాచీన విజ్ఞాన శాస్త్రాలు & సాధనాల సమగ్ర సూచిక (ఒకే క్లిక్‌తో ప్రవేశించండి).'}
              </p>
            </div>
          </div>

          {/* Metrics Pill Badges */}
          <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
            <span className="px-3 py-1 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] text-[#7B1113] flex items-center gap-1.5 shadow-2xs">
              <FolderTree className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{stats.categoriesCount} {isEn ? 'Major Categories' : 'ప్రధాన విభాగాలు'}</span>
            </span>
            <span className="px-3 py-1 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] text-[#7B1113] flex items-center gap-1.5 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#C99700]" />
              <span>{stats.pagesCount} {isEn ? 'Modules' : 'మాడ్యూల్స్'}</span>
            </span>
            <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37] text-[#7B1113] font-bold flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{stats.subtopicsCount}+ {isEn ? 'Subtopics & Chapters' : 'అంశాలు & అధ్యాయాలు'}</span>
            </span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Instant Search Bar */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-[#7B1113] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={isEn ? 'Search any page, topic, emperor, chakra...' : 'ఏదైనా పేజీ, అంశం, చక్రవర్తి, చక్రం కోసం వెతకండి...'}
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-white border border-[#D4AF37] text-[#2C1810] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-inner"
            />
            {searchFilter && (
              <button 
                onClick={() => setSearchFilter('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8D6E63] hover:text-[#7B1113]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="md:col-span-7 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                  : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFF3E0] border border-[#E8DCC4]'
              }`}
            >
              {isEn ? '✨ All Sections' : '✨ అన్నీ'}
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? 'bg-[#7B1113] text-[#FFE082] shadow-xs ring-1 ring-[#D4AF37]'
                    : 'bg-[#FAF7F0] text-[#5D4037] hover:bg-[#FFF3E0] border border-[#E8DCC4]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{isEn ? cat.titleEn.split(' ')[0] : cat.titleTe.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Hierarchical Sitemap Content */}
      <div className="space-y-6">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-10 bg-[#FAF7F0] rounded-2xl border border-dashed border-[#D4AF37]">
            <span className="text-3xl block mb-2">🔍</span>
            <p className="text-sm font-bold text-[#7B1113]">
              {isEn ? 'No topics found matching your query.' : 'మీ శోధనకు తగిన అంశాలు లభించలేదు.'}
            </p>
            <button
              onClick={() => { setSearchFilter(''); setSelectedCategory('all'); }}
              className="mt-2 text-xs font-bold text-[#D84315] underline cursor-pointer"
            >
              {isEn ? 'Clear filters & show all' : 'ఫిల్టర్లు తొలగించి అన్నీ చూపించు'}
            </button>
          </div>
        ) : (
          filteredCategories.map(category => (
            <div 
              key={category.id} 
              className={`rounded-2xl border-2 border-[#E8DCC4] overflow-hidden bg-gradient-to-br ${category.bgGradient} shadow-xs transition-all hover:border-[#D4AF37]`}
            >
              {/* Category Header */}
              <div className="px-4 py-3 bg-[#FFFFFF]/80 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{category.icon}</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                      {isEn ? category.titleEn : category.titleTe}
                    </h3>
                    <p className="text-[11px] text-[#5D4037]">
                      {isEn ? category.descEn : category.descTe}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#8D6E63] px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E8DCC4]">
                  {category.items.length} {isEn ? 'Core Modules' : 'ప్రధాన విభాగాలు'}
                </span>
              </div>

              {/* Items Grid */}
              <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {category.items.map(item => {
                  const isExpanded = !!expandedItems[item.id];
                  const hasSubItems = item.subItems && item.subItems.length > 0;

                  return (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-xl border border-[#E8DCC4] hover:border-[#D4AF37] p-3 sm:p-3.5 space-y-2.5 transition-all shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        {/* Title and Badges */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="font-bold text-xs sm:text-sm text-[#7B1113]">
                              {isEn ? item.titleEn : item.titleTe}
                            </h4>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor || 'bg-[#7B1113] text-[#FFE082]'}`}>
                            {isEn ? item.badgeEn : item.badgeTe}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[11px] text-[#5D4037] leading-relaxed">
                          {isEn ? item.descEn : item.descTe}
                        </p>
                      </div>

                      {/* Sub-items toggle and Direct Action */}
                      <div className="pt-2 border-t border-[#F0E6D2] space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          {hasSubItems ? (
                            <button
                              onClick={() => toggleExpand(item.id)}
                              className="text-[11px] font-bold text-[#D84315] hover:text-[#7B1113] flex items-center gap-1 cursor-pointer"
                            >
                              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                              <span>
                                {isExpanded 
                                  ? (isEn ? 'Hide subtopics' : 'వివరాలు దాచు') 
                                  : (isEn ? `View ${item.subItems?.length} chapters/topics` : `${item.subItems?.length} అధ్యాయాలు/అంశాలు చూడు`)}
                              </span>
                            </button>
                          ) : (
                            <span className="text-[11px] text-[#8D6E63] italic">
                              {isEn ? 'Direct Access' : 'ప్రత్యక్ష దర్శనం'}
                            </span>
                          )}

                          {/* Action Button */}
                          <button
                            onClick={() => handleNavigate(item.viewMode, item.isModal, item.targetId)}
                            className="px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-[#FFF8E1] to-[#FFE082] hover:from-[#FFE082] hover:to-[#FFD54F] text-[#7B1113] border border-[#D4AF37] flex items-center gap-1 transition-all cursor-pointer shadow-2xs hover:scale-102"
                            title={isEn ? `Open ${item.titleEn}` : `${item.titleTe} తెరవండి`}
                          >
                            <span>{isEn ? 'Open' : 'తెరవండి'}</span>
                            <ExternalLink className="w-3 h-3 text-[#D84315]" />
                          </button>
                        </div>

                        {/* Expandable Sub-items Tree */}
                        {hasSubItems && isExpanded && (
                          <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DCC4] space-y-1.5 animate-fadeIn">
                            <span className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-wider block border-b border-[#E8DCC4] pb-1">
                              {isEn ? 'Key Topics & Sub-modules:' : 'ముఖ్య అంశాలు & అధ్యాయాలు:'}
                            </span>
                            <ul className="space-y-1 text-[11px] text-[#5D4037]">
                              {item.subItems?.map((sub, sIdx) => (
                                <li 
                                  key={sIdx}
                                  className="flex items-start justify-between gap-1.5 hover:text-[#7B1113] group py-0.5"
                                >
                                  <div className="flex items-start gap-1.5">
                                    <span className="text-[#D84315] mt-0.5">▪</span>
                                    <div>
                                      <span className="font-medium group-hover:font-semibold">
                                        {isEn ? sub.titleEn : sub.titleTe}
                                      </span>
                                      {(sub.descEn || sub.descTe) && (
                                        <span className="block text-[10px] text-[#8D6E63]">
                                          {isEn ? sub.descEn : sub.descTe}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {(sub.viewMode || sub.isModal || item.viewMode) && (
                                    <button
                                      onClick={() => handleNavigate(sub.viewMode || item.viewMode, sub.isModal || item.isModal, sub.targetId || item.targetId)}
                                      className="text-[10px] text-[#D84315] hover:text-[#7B1113] hover:underline font-bold shrink-0 ml-1 cursor-pointer flex items-center gap-0.5"
                                    >
                                      <span>{isEn ? 'Visit' : 'చూడు'}</span>
                                      <ChevronRight className="w-2.5 h-2.5" />
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Helper Note */}
      <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between flex-wrap gap-2 text-xs text-[#5D4037]">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D84315]" />
          <span>
            {isEn 
              ? 'Clicking on any "Open" or "Visit" link instantly loads the respective interactive section.'
              : 'ఏదైనా విభాగంపై "తెరవండి" లేదా "చూడు" క్లిక్ చేయడం ద్వారా సంబంధిత పేజీ లేదా విండో వెంటనే తెరవబడుతుంది.'}
          </span>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-bold text-[#7B1113] hover:text-[#D84315] hover:underline cursor-pointer flex items-center gap-1"
        >
          <span>↑</span> <span>{isEn ? 'Back to top' : 'పైకి వెళ్ళండి'}</span>
        </button>
      </div>
    </section>
  );
};
