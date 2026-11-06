export interface ScriptureReference {
  skandha: string; // e.g. "తృతీయ స్కంధము"
  skandhaEn?: string; // "Canto 3"
  adhyaya: string; // e.g. "8వ అధ్యాయము"
  adhyayaEn?: string; // "Chapter 8"
  slokaPadyam?: string; // Original verse number or key Telugu padyam line
  pothanaVerse?: string; // Full Pothana padyam in Telugu
  verseMeaning?: string; // భావము / తాత్పర్యము
  verseMeaningEn?: string; // English translation of the verse
  teluguBhagavatamUrl: string; // Primary URL reference
  sourceConfidence: 'ప్రమాణ బద్ధము (భాగవత మూలము)' | 'పురాణాంతర సమన్వయము' | 'సాంప్రదాయక వివరణ';
  sourceConfidenceEn?: string;
}

export type NodeCategory = 
  | 'supreme'       // శ్రీమహావిష్ణువు
  | 'creator'       // చతుర్ముఖ బ్రహ్మ
  | 'aspect'        // నాలుగు ముఖాలు, వేదాలు
  | 'creation_step' // సృష్టి దశలు
  | 'prajapati'     // నవ ప్రజాపతులు / బ్రహ్మ మానసపుత్రులు
  | 'manu'          // స్వాయంభువ మనువు - శతరూప
  | 'daughter'      // దక్ష - ప్రసూతి 16 కుమార్తెలు
  | 'spouse'        // ధర్మదేవుడు, అగ్ని, పితృదేవతలు, పరమశివుడు
  | 'descendant'    // నరనారాయణులు, పావకుడు మొదలైన సంతతి
  | 'rishi';        // సప్తర్షులు, సనకాదులు

export interface MythologicalCharacter {
  id: string;
  name: string; // తెలుగు పేరు (ఉదా: దక్ష ప్రజాపతి)
  nameEn?: string; // English Name (e.g. "Daksha Prajapati")
  altNames: string[]; // ఇతర పేర్లు
  altNamesEn?: string[]; // English Alternative Names
  title: string; // బిరుదు / హోదా
  titleEn?: string; // English Title
  category: NodeCategory;
  generation: number; // 0 = విష్ణువు, 1 = బ్రహ్మ, 2 = ప్రజాపతులు/మనువు, 3 = దక్ష/ప్రసూతి, 4 = 16 కన్యలు, 5 = వారి సంతతి
  vamsam: string; // వంశము
  vamsamEn?: string;
  
  // Parental & Marital Lineage
  fatherId?: string;
  fatherName?: string;
  fatherNameEn?: string;
  motherId?: string;
  motherName?: string;
  motherNameEn?: string;
  spouseIds: string[];
  spouseNames: string[];
  spouseNamesEn?: string[];
  childrenIds: string[];
  childrenNames: string[];
  childrenNamesEn?: string[];
  
  // Rich Telugu & English Narratives
  intro: string; // సంక్షిప్త పరిచయం
  introEn?: string;
  birthStory: string; // జన్మ వృత్తాంతము
  birthStoryEn?: string;
  bhagavatamNarrative: string; // విస్తృత భాగవత కథనం
  bhagavatamNarrativeEn?: string;
  significance: string; // పౌరాణిక ప్రాముఖ్యత / తత్త్వ రహస్యము
  significanceEn?: string;
  keyEvents: string[]; // ముఖ్యమైన ఘట్టాలు
  keyEventsEn?: string[];
  
  // Source & Attribution
  scripture: ScriptureReference;
  
  // Associated / Connected nodes
  relatedPersonIds: string[];
  
  // UI & Design metadata
  icon?: string;
  badgeColor?: string;
  isCustom?: boolean; // Added via Admin CMS
}

export interface CreationMilestone {
  step: number;
  title: string;
  titleEn?: string;
  sanskritName: string;
  sanskritNameEn?: string;
  category: 'ప్రాకృత సృష్టి' | 'వైకృత సృష్టి' | 'కౌమార సృష్టి' | 'మానవ సృష్టి';
  categoryEn?: string;
  description: string;
  descriptionEn?: string;
  philosophicalMeaning: string;
  philosophicalMeaningEn?: string;
  elements: string[];
  elementsEn?: string[];
  scriptureCitation: string;
  scriptureCitationEn?: string;
  pothanaVerseSnippet: string;
  icon: string;
}

// 13-stage Sanatana Dharma Emergence Chronological Order from User's uploaded manuscript image
export interface SanatanaChronologyStep {
  step: number;
  sourceTextTe: string;
  sourceTextEn: string;
  causeTe: string;
  causeEn: string;
  effectTe: string;
  effectEn: string;
  philosophicalDetailTe: string;
  philosophicalDetailEn: string;
  bhagavatamRef: string;
  icon: string;
}

// Chronological Scriptural Sources Breakdown
export interface ChronologicalSourceEntry {
  chronologicalOrder: number;
  canto: string;
  cantoEn: string;
  chapter: string;
  chapterEn: string;
  themeTe: string;
  themeEn: string;
  summaryTe: string;
  summaryEn: string;
  primaryPassages: string;
  teluguBhagavatamUrl: string;
}

export type ViewMode = 
  | 'intro'               // పరిచయము (Introduction & Overview)
  | 'brahma_family'       // బ్రహ్మ వంశము (Family of Brahma)
  | 'sanatana_chronology' // సనాతన ధర్మ ఆవిర్భావము (Home: 13-step cosmic lineage)
  | 'indian_history'      // భారతీయ చరిత్ర (Indian History Chronological View)
  | 'flow'                // సృష్టి క్రమము (10-stage creation flow)
  | 'tree'                // సంపూర్ణ వంశవృక్షము (Hierarchical Family Tree)
  | 'mindmap'             // మైండ్ మ్యాప్ (Chaturmukha Brahma Radial Mind Map)
  | 'daksha_vamsa'        // దక్ష-ప్రసూతి వంశము (16 Daughters Lineage)
  | 'scriptures'          // భాగవత ఆధారాలు (Scripture Library)
  | 'admin';

export type AppLanguage = 'te' | 'en';

// Indian History Chronological Data Structures
export interface HistorySubDivision {
  nameEn: string;
  nameTe: string;
  periodEn?: string;
  periodTe?: string;
  descriptionEn: string;
  descriptionTe: string;
  keyPointsEn: string[];
  keyPointsTe: string[];
  icon?: string;
}

export interface VedicComparisonDimension {
  dimensionEn: string;
  dimensionTe: string;
  earlyVedicEn: string;
  earlyVedicTe: string;
  laterVedicEn: string;
  laterVedicTe: string;
  icon: string;
}

export interface IndianHistoryPeriod {
  id: string;
  order: number;
  titleEn: string;
  titleTe: string;
  timelineEn: string;
  timelineTe: string;
  subtitleEn: string;
  subtitleTe: string;
  category: 'prehistory' | 'protohistory' | 'vedic' | 'mahajanapadas' | 'empires' | 'classical';
  icon: string;
  bannerColor: string;
  borderColor: string;
  summaryEn: string;
  summaryTe: string;
  sourcesEn: string[];
  sourcesTe: string[];
  societyEn: string[];
  societyTe: string[];
  economyEn: string[];
  economyTe: string[];
  religionEn: string[];
  religionTe: string[];
  keyFeaturesEn: string[];
  keyFeaturesTe: string[];
  legacyEn: string;
  legacyTe: string;
  subDivisions?: HistorySubDivision[];
  infographicImage?: string;
  imageCaptionEn?: string;
  imageCaptionTe?: string;
}
