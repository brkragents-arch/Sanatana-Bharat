// ============================================================================
// COMBINED PLANETARY RASI PHALALU ENGINE (సంయుక్త గోచార వార/దిన ఫలాలు)
// Calculates Positive, Precaution, and Remedy predictions for all 12 Rasis
// in both Telugu and English based on real-time sidereal planetary transits.
// ============================================================================

import type { CompletePlanetInfo, RasiDef } from './planetaryEngine';
import { RASIS_DATA } from './planetaryEngine';

export type PredictionMode = 'weekly' | 'daily';

export interface RasiPrediction {
  rasi: RasiDef;
  housePositionOfPlanets: { [key: string]: number }; // planetKey -> house (1..12)
  beneficPlanets: string[]; // Telugu names
  beneficPlanetsEn: string[]; // English names
  challengingPlanets: string[];
  challengingPlanetsEn: string[];
  positiveTe: string;
  positiveEn: string;
  precautionTe: string;
  precautionEn: string;
  remedyTe: string;
  remedyEn: string;
  favorabilityScore: number; // 0 to 100%
  statusBadgeTe: string;
  statusBadgeEn: string;
  keyHighlights: string; // Telugu
  keyHighlightsEn: string; // English
  isChandrashtama?: boolean;
}

// Auspicious transit houses for each planet in Vedic Astrology (గోచార శుభ స్థానాలు)
const BENEFIC_HOUSES: Record<string, number[]> = {
  sun: [3, 6, 10, 11],
  moon: [1, 3, 6, 7, 10, 11],
  mars: [3, 6, 11],
  mercury: [2, 4, 6, 8, 10, 11],
  jupiter: [2, 5, 7, 9, 11],
  venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
  saturn: [3, 6, 11],
  rahu: [3, 6, 10, 11],
  ketu: [3, 6, 9, 11]
};

// Day Lord metadata for Day Predictions
const DAY_LORDS: { nameTe: string; nameEn: string; lordTe: string; lordEn: string; remedyTe: string; remedyEn: string }[] = [
  { 
    nameTe: 'ఆదివారం', 
    nameEn: 'Sunday',
    lordTe: 'రవి (సూర్యుడు)', 
    lordEn: 'Sun (Surya)',
    remedyTe: 'సూర్యోదయ సమయంలో గాయత్రి మంత్ర జపం లేదా ఆదిత్య హృదయ స్తోత్ర పారాయణ.',
    remedyEn: 'Chant Gayatri Mantra or recite Aditya Hrudaya Stotram at sunrise.'
  },
  { 
    nameTe: 'సోమవారం', 
    nameEn: 'Monday',
    lordTe: 'చంద్రుడు', 
    lordEn: 'Moon (Chandra)',
    remedyTe: 'శివార్చన లేదా ఓం నమఃశివాయ జపం, పేదలకు అన్నదానం.',
    remedyEn: 'Offer worship to Lord Shiva, chant Om Namah Shivaya, and donate food.'
  },
  { 
    nameTe: 'మంగళవారం', 
    nameEn: 'Tuesday',
    lordTe: 'కుజుడు (అంగారకుడు)', 
    lordEn: 'Mars (Mangal)',
    remedyTe: 'హనుమాన్ చాలీసా లేదా సుబ్రహ్మణ్యాష్టకం పఠనం, నెయ్యితో దీపారాధన.',
    remedyEn: 'Recite Hanuman Chalisa or Subramanya Ashtakam, light a ghee lamp.'
  },
  { 
    nameTe: 'బుధవారం', 
    nameEn: 'Wednesday',
    lordTe: 'బుధుడు', 
    lordEn: 'Mercury (Budha)',
    remedyTe: 'శ్రీ విష్ణు సహస్రనామ స్తోత్ర పారాయణ, గోవులకు పచ్చిగడ్డి తినిపించడం.',
    remedyEn: 'Chant Sri Vishnu Sahasranama Stotram and feed green grass to cows.'
  },
  { 
    nameTe: 'గురువారం', 
    nameEn: 'Thursday',
    lordTe: 'గురువు (బృహస్పతి)', 
    lordEn: 'Jupiter (Guru)',
    remedyTe: 'దక్షిణామూర్తి స్తోత్రం లేదా గురు చరిత్ర పారాయణ, పెద్దల ఆశీస్సులు.',
    remedyEn: 'Recite Dakshinamurthy Stotram or Guru Charitra, seek blessings of elders.'
  },
  { 
    nameTe: 'శుక్రవారం', 
    nameEn: 'Friday',
    lordTe: 'శుక్రుడు', 
    lordEn: 'Venus (Shukra)',
    remedyTe: 'శ్రీ లక్ష్మీ అష్టోత్తరం లేదా కనకధారా స్తోత్ర పఠనం, శ్వేత పుష్పాలతో పూజ.',
    remedyEn: 'Recite Sri Lakshmi Ashtottaram or Kanakadhara Stotram with white flowers.'
  },
  { 
    nameTe: 'శనివారం', 
    nameEn: 'Saturday',
    lordTe: 'శనైశ్చరుడు', 
    lordEn: 'Saturn (Shani)',
    remedyTe: 'హనుమాన్ ఆరాధన, నువ్వుల నూనెతో దీపారాధన, నవగ్రహ ఆలయ ప్రదక్షిణలు.',
    remedyEn: 'Worship Lord Hanuman, light a sesame oil lamp, and circumambulate Navagrahas.'
  }
];

// Moon house daily significance in Vedic Astrology (Telugu + English)
const MOON_HOUSE_DAILY: Record<number, { posTe: string; posEn: string; precTe: string; precEn: string; scoreBoost: number }> = {
  1: {
    posTe: 'నేడు జన్మ చంద్రుని వల్ల నూతన ఆలోచనలు, ఉల్లాసం, ఆత్మగౌరవం పెరుగుతాయి.',
    posEn: 'Today brings fresh creative vitality, enthusiasm, and elevated self-confidence.',
    precTe: 'మానసిక చంచలత్వం, అహంకారం దరిచేరకుండా నిగ్రహం పాటించాలి.',
    precEn: 'Avoid mental restlessness and pride; maintain humility and patience.',
    scoreBoost: 5
  },
  2: {
    posTe: 'నేడు ధన స్థానంలో చంద్ర సంచారము చేత ఆకస్మిక ధనలాభం, విందువినోదాలు, కుటుంబ సౌఖ్యం.',
    posEn: 'Today favors sudden monetary gains, pleasant dining, and joyous family bonding.',
    precTe: 'ఆవేశపూరిత ఖర్చులు, కుటుంబీకులతో మాట్లాడేటప్పుడు సంయమనం అవసరం.',
    precEn: 'Refrain from impulsive spending and exercise restraint in family talks.',
    scoreBoost: 8
  },
  3: {
    posTe: 'నేడు తృతీయ చంద్రుని వల్ల ధైర్యం, కార్యసాధన, తోబుట్టువుల సహకారం లభిస్తుంది.',
    posEn: 'Today bestows courage, successful execution of tasks, and sibling support.',
    precTe: 'అనవసర ప్రయాణాలలో బడలిక రాకుండా తగిన విశ్రాంతి తీసుకోవాలి.',
    precEn: 'Take adequate rest during short travels to avoid physical exhaustion.',
    scoreBoost: 10
  },
  4: {
    posTe: 'నేడు చతుర్థ స్థానంలో చంద్రుడు ఉన్నందున గృహ సౌఖ్యం, మాతృ ఆశీస్సులు లభిస్తాయి.',
    posEn: 'Today grants domestic comforts, maternal blessings, and property focus.',
    precTe: 'అర్ధాష్టమ చంద్ర ప్రభావంతో మనశ్శాంతి లోపించవచ్చు; గృహ చికాకులకు దూరంగా ఉండండి.',
    precEn: 'Minor domestic friction may test your peace of mind; stay calm.',
    scoreBoost: -3
  },
  5: {
    posTe: 'నేడు పంచమ చంద్రుని వల్ల మేధోబలం, సృజనాత్మక ఆలోచనలు, విద్యార్థులకు ఏకాగ్రత పెరుగుతాయి.',
    posEn: 'Today stimulates sharp intellect, creative inspiration, and educational success.',
    precTe: 'ఊహాజనిత పెట్టుబడులు, తొందరపాటు నిర్ణయాలు చేయకపోవడం మంచిది.',
    precEn: 'Avoid speculative financial risks and hasty emotional decisions.',
    scoreBoost: 7
  },
  6: {
    posTe: 'నేడు షష్ఠమ చంద్రుని వల్ల శత్రువులపై పైచేయి, రుణ సమస్యల నివారణ, పోటీ పరీక్షల్లో విజయం.',
    posEn: 'Today guarantees victory over obstacles, debt resolution, and competitive success.',
    precTe: 'ఆరోగ్యం పట్ల కొద్దిపాటి శ్రద్ధ వహించండి, అజీర్ణ ఆహారాలు మానివేయండి.',
    precEn: 'Pay mindful attention to digestion and dietary hygiene.',
    scoreBoost: 12
  },
  7: {
    posTe: 'నేడు సప్తమ చంద్రుని వల్ల వ్యాపార చర్చలు ఫలిస్తాయి, దాంపత్య అనుబంధం బలపడుతుంది.',
    posEn: 'Today favors business discussions, fruitful collaborations, and marital warmth.',
    precTe: 'భాగస్వాములతో అనవసర వాగ్వివాదాలు రాకుండా మృదువుగా వ్యవహరించండి.',
    precEn: 'Adopt a diplomatic stance to prevent minor disagreements with partners.',
    scoreBoost: 9
  },
  8: {
    posTe: 'నేడు అంతర్ముఖ ఆలోచనలు, వేదాంత సాధన, ఆధ్యాత్మిక ధ్యానానికి అనుకూల సమయం.',
    posEn: 'Today is favorable for introspective study, meditation, and spiritual contemplation.',
    precTe: '⚠️ నేడు చంద్రాష్టమం! ముఖ్యమైన ఒప్పందాలు, నూతన పనులు, ప్రయాణాలు వాయిదా వేయాలి. వివాదాలకు దూరంగా ఉండండి.',
    precEn: '⚠️ Chandrashtama Alert! Postpone major agreements, new ventures, and travel. Avoid arguments.',
    scoreBoost: -18
  },
  9: {
    posTe: 'నేడు భాగ్య చంద్రుని వల్ల దైవదర్శనం, పెద్దల ఆశీర్వాదం, పనులలో అదృష్టం తోడవుతుంది.',
    posEn: 'Today brings divine blessings, fortune in endeavors, and auspicious guidance.',
    precTe: 'ధర్మకార్యాలకు ఖర్చులు పెరుగుతాయి; సమయాన్ని సద్వినియోగం చేసుకోండి.',
    precEn: 'Expenditures on charitable causes may rise; organize time efficiently.',
    scoreBoost: 10
  },
  10: {
    posTe: 'నేడు దశమ చంద్రుని వల్ల ఉద్యోగంలో అధికారుల మన్ననలు, పనులలో ప్రశంసలు దక్కుతాయి.',
    posEn: 'Today yields workplace acclaim, support from superiors, and productive gains.',
    precTe: 'పని ఒత్తిడి పెరిగే సూచన ఉన్నందున ప్రణాళికాబద్ధంగా పనులు ముగించండి.',
    precEn: 'Structure your schedule carefully to manage rising occupational responsibilities.',
    scoreBoost: 11
  },
  11: {
    posTe: 'నేడు ఏకాదశ చంద్రుని వల్ల సర్వకార్య సిద్ధి, వ్యాపార లాభాలు, మిత్రుల సహకారం లభిస్తుంది.',
    posEn: 'Today fulfills cherished desires, brings financial profits, and peer support.',
    precTe: 'అతి ఆశకు పోకుండా వచ్చిన అవకాశాలను సద్వినియోగం చేసుకోండి.',
    precEn: 'Do not overextend ambitions; capitalize realistically on present gains.',
    scoreBoost: 14
  },
  12: {
    posTe: 'నేడు ఆత్మీయులతో ఆధ్యాత్మిక చర్చలు, దానధర్మాలు చేయడానికి అనుకూలం.',
    posEn: 'Today is suitable for charity, philanthropic discussions, and spiritual research.',
    precTe: 'వ్యయ చంద్రుని వల్ల ఊహించని ఖర్చులు, నిద్రలేమి లేదా అలసట రావచ్చు; సంయమనం ముఖ్యం.',
    precEn: 'Expenses may rise unexpectedly; avoid fatigue and ensure adequate rest.',
    scoreBoost: -8
  }
};

/**
 * Computes combined predictions for all 12 Rasis, distinctly tailored
 * for Weekly mode vs Daily mode based on planetary positions and target date.
 */
export function calculateAllRasiPhalalu(
  planets: CompletePlanetInfo[],
  mode: PredictionMode = 'weekly',
  targetDate: Date = new Date()
): RasiPrediction[] {
  const dayOfWeek = targetDate.getDay(); // 0: Sunday, 1: Monday, ...
  const dayLordInfo = DAY_LORDS[dayOfWeek] || DAY_LORDS[0];

  return RASIS_DATA.map((rasi) => {
    const houseMap: { [key: string]: number } = {};
    const beneficPlanets: string[] = [];
    const beneficPlanetsEn: string[] = [];
    const challengingPlanets: string[] = [];
    const challengingPlanetsEn: string[] = [];
    let positiveWeight = 0;
    let totalWeight = 0;

    const planetWeights: Record<string, number> = mode === 'daily'
      ? {
          moon: 25,
          jupiter: 18,
          saturn: 16,
          sun: 12,
          mars: 10,
          mercury: 8,
          venus: 8,
          rahu: 6,
          ketu: 5
        }
      : {
          jupiter: 25,
          saturn: 25,
          sun: 15,
          mars: 12,
          venus: 12,
          mercury: 10,
          rahu: 10,
          ketu: 8,
          moon: 6
        };

    planets.forEach((p) => {
      const house = ((p.rasiIndex - rasi.index + 12) % 12) + 1;
      houseMap[p.key] = house;

      const isBeneficHouse = (BENEFIC_HOUSES[p.key] || []).includes(house);
      const isExaltedOrOwn = p.dignity === 'exalted' || p.dignity === 'own';
      const weight = planetWeights[p.key] || 10;
      totalWeight += weight;

      if (isBeneficHouse || isExaltedOrOwn) {
        positiveWeight += weight;
        beneficPlanets.push(p.meta.nameTe.split(' ')[0]);
        beneficPlanetsEn.push(p.meta.nameEn.split(' ')[0]);
      } else {
        challengingPlanets.push(p.meta.nameTe.split(' ')[0]);
        challengingPlanetsEn.push(p.meta.nameEn.split(' ')[0]);
      }
    });

    const jupHouse = houseMap['jupiter'] || 1;
    const satHouse = houseMap['saturn'] || 1;
    const sunHouse = houseMap['sun'] || 1;
    const marsHouse = houseMap['mars'] || 1;
    const venHouse = houseMap['venus'] || 1;
    const merHouse = houseMap['mercury'] || 1;
    const rahuHouse = houseMap['rahu'] || 1;
    const ketuHouse = houseMap['ketu'] || 1;
    const moonHouse = houseMap['moon'] || 1;
    const isChandrashtama = moonHouse === 8;

    let rawScore = Math.round((positiveWeight / (totalWeight || 1)) * 100);

    if (mode === 'daily') {
      const moonBoost = (MOON_HOUSE_DAILY[moonHouse]?.scoreBoost) || 0;
      rawScore += moonBoost;
      if (isChandrashtama) {
        rawScore = Math.min(rawScore, 50);
      }
    }

    rawScore = Math.max(45, Math.min(96, rawScore));

    let statusBadgeTe = 'అనుకూలం';
    let statusBadgeEn = 'Favorable';
    if (isChandrashtama && mode === 'daily') {
      statusBadgeTe = '⚠️ చంద్రాష్టమం';
      statusBadgeEn = '⚠️ Chandrashtama';
    } else if (rawScore >= 80) {
      statusBadgeTe = mode === 'daily' ? 'నేడు అత్యంత శుభం' : 'ఈ వారం అత్యంత అనుకూలం';
      statusBadgeEn = mode === 'daily' ? 'Highly Auspicious Today' : 'Highly Favorable This Week';
    } else if (rawScore >= 65) {
      statusBadgeTe = mode === 'daily' ? 'నేడు అనుకూలం' : 'ఈ వారం శుభప్రదం';
      statusBadgeEn = mode === 'daily' ? 'Favorable Today' : 'Auspicious This Week';
    } else if (rawScore >= 52) {
      statusBadgeTe = mode === 'daily' ? 'నేడు మధ్యస్థం' : 'ఈ వారం మధ్యస్థం';
      statusBadgeEn = mode === 'daily' ? 'Moderate Today' : 'Moderate This Week';
    } else {
      statusBadgeTe = mode === 'daily' ? 'నేడు జాగ్రత్త అవసరం' : 'ఈ వారం జాగ్రత్త';
      statusBadgeEn = mode === 'daily' ? 'Caution Needed Today' : 'Caution Advised This Week';
    }

    const { 
      positiveTe, positiveEn, 
      precautionTe, precautionEn, 
      remedyTe, remedyEn, 
      keyHighlights, keyHighlightsEn 
    } = mode === 'weekly'
      ? generateWeeklyPredictions(
          rasi.nameTe,
          rasi.nameEn,
          jupHouse,
          satHouse,
          sunHouse,
          marsHouse,
          venHouse,
          merHouse,
          rahuHouse,
          ketuHouse,
          moonHouse
        )
      : generateDailyPredictions(
          rasi.nameTe,
          rasi.nameEn,
          dayLordInfo,
          moonHouse,
          jupHouse,
          satHouse,
          marsHouse,
          sunHouse
        );

    return {
      rasi,
      housePositionOfPlanets: houseMap,
      beneficPlanets,
      beneficPlanetsEn,
      challengingPlanets,
      challengingPlanetsEn,
      positiveTe,
      positiveEn,
      precautionTe,
      precautionEn,
      remedyTe,
      remedyEn,
      favorabilityScore: rawScore,
      statusBadgeTe,
      statusBadgeEn,
      keyHighlights,
      keyHighlightsEn,
      isChandrashtama
    };
  });
}

/**
 * 1. WEEKLY PREDICTIONS (వార ఫలాలు - Telugu & English)
 */
function generateWeeklyPredictions(
  rasiNameTe: string,
  rasiNameEn: string,
  jupHouse: number,
  satHouse: number,
  sunHouse: number,
  marsHouse: number,
  venHouse: number,
  merHouse: number,
  rahuHouse: number,
  ketuHouse: number,
  moonHouse: number
): { 
  positiveTe: string; positiveEn: string;
  precautionTe: string; precautionEn: string;
  remedyTe: string; remedyEn: string;
  keyHighlights: string; keyHighlightsEn: string;
} {
  const posTe: string[] = [];
  const posEn: string[] = [];

  // Jupiter weekly
  if ([2, 5, 7, 9, 11].includes(jupHouse)) {
    if (jupHouse === 2) {
      posTe.push('ఈ వారం గురుబలంతో విశేష ధనలాభం, కుటుంబంలో శుభకార్య చర్చలు సఫలమవుతాయి.');
      posEn.push('This week brings notable financial inflow and auspicious family discussions through benefic Jupiter.');
    } else if (jupHouse === 5) {
      posTe.push('ఈ వారం సంతాన సౌఖ్యం, విద్యా వికాసం, మేధోపరమైన నిర్ణయాలలో సంపూర్ణ విజయం.');
      posEn.push('Intellectual brilliance, joy through children, and success in educational and creative pursuits.');
    } else if (jupHouse === 7) {
      posTe.push('ఈ వారం వ్యాపార విస్తరణ, భాగస్వామ్య లాభాలు, దాంపత్యంలో అనుకూల వాతావరణం ఉంటుంది.');
      posEn.push('Favorable partnerships, business expansion, and harmony in marital life.');
    } else if (jupHouse === 9) {
      posTe.push('ఈ వారం భాగ్య గురువు వల్ల పిత్రార్జితాలు, ధర్మకార్యాలు, అదృష్ట యోగాలు కలసివస్తాయి.');
      posEn.push('Fortunate developments, blessings of elders, and spiritual growth.');
    } else if (jupHouse === 11) {
      posTe.push('ఈ వారం 11వ ఇంట గురు సంచారం సర్వకార్య సిద్ధిని, బృహత్తర ఆదాయ వృద్ధిని చేకూరుస్తుంది.');
      posEn.push('11th house Jupiter bestows fulfillment of desires and prominent career/financial gains.');
    }
  }

  // Saturn weekly
  if ([3, 6, 11].includes(satHouse)) {
    if (satHouse === 11) {
      posTe.push('శని 11వ ఇంట ఉన్నందున స్థిరాస్తుల క్రయవిక్రయాలు, దీర్ఘకాలిక పెట్టుబడులు లాభిస్తాయి.');
      posEn.push('Saturn in 11th house is exceptionally favorable for real estate and steady long-term investments.');
    } else if (satHouse === 6) {
      posTe.push('శత్రుజయ శని అనుకూలతతో కోర్టు పనులు, రుణ విముక్తి ప్రయత్నాలు ఫలిస్తాయి.');
      posEn.push('Victory over competitors, resolution of debts, and professional triumph.');
    } else if (satHouse === 3) {
      posTe.push('తృతీయ శని వల్ల నూతన ఉద్యోగ ప్రయత్నాలు, సోదరుల సహాయం లభిస్తాయి.');
      posEn.push('Courage, sibling support, and new job opportunities.');
    }
  }

  if ([3, 6, 10, 11].includes(sunHouse)) {
    posTe.push('రవి గోచార బలంతో ప్రభుత్వ వ్యవహారాలు, ఉన్నతాధికారుల మన్ననలు లభిస్తాయి.');
    posEn.push('Recognition from superiors, government support, and enhanced social prestige.');
  } else if ([1, 2, 4, 5, 9, 11].includes(venHouse)) {
    posTe.push('శుక్రుని అనుకూలత వల్ల నూతన వస్త్ర, వాహన, ఆభరణ ప్రాప్తి, ఆహ్లాదకర వాతావరణం నెలకొంటుంది.');
    posEn.push('Joyful atmosphere, artistic pursuits, luxuries, and pleasant domestic life.');
  }

  if ([3, 6, 11].includes(marsHouse)) {
    posTe.push('కుజ బలంతో భూసంబంధిత లావాదేవీలు మరియు కాంట్రాక్టులలో ఆశించిన ఫలితాలు ఉంటాయి.');
    posEn.push('Success in land, engineering, or real estate negotiations.');
  }

  if ([2, 4, 6, 8, 10, 11].includes(merHouse)) {
    posTe.push('వ్యాపార సంబంధిత చర్చలు, సమాచార మార్పిడిలో వేగం పుంజుకుంటుంది.');
    posEn.push('Productive business discussions and swift communication flow.');
  }

  if ([1, 3, 6, 7, 10, 11].includes(moonHouse)) {
    posTe.push('వారం ఆరంభంలో అనుకూల చంద్రబలం కలిగి ఉంటుంది.');
    posEn.push('Auspicious lunar strength inaugurates the week.');
  }

  if (posTe.length === 0) {
    posTe.push(`ఈ వారం ${rasiNameTe} రాశి వారికి స్వయంకృషితో పనులు పూర్తవుతాయి; స్నేహితులు, ఆత్మీయుల మద్దతు లభిస్తుంది.`);
    posEn.push(`This week brings fruitful results through dedicated self-effort for ${rasiNameEn} natives; friends and well-wishers provide support.`);
  }

  // Weekly Precautions
  const precTe: string[] = [];
  const precEn: string[] = [];

  if ([12, 1, 2].includes(satHouse)) {
    precTe.push('ఈ వారం ఏలినాటి శని ప్రభావం వల్ల పని ఒత్తిడి, ఆలోచనల్లో అలసట రావచ్చు; ఓర్పు అవసరం.');
    precEn.push('Under Sade Sati influences, manage stress and avoid haste in financial decisions; maintain patience.');
  } else if (satHouse === 8) {
    precTe.push('ఈ వారం అష్టమ శని రీత్యా ఆరోగ్య విషయాలలోను, వాహనాలు నడిపేటప్పుడు అత్యంత జాగ్రత్త వహించాలి.');
    precEn.push('Exercise utmost caution in health and while driving under 8th house Saturn.');
  } else if (satHouse === 4) {
    precTe.push('అర్ధాష్టమ శని వలన గృహ సంబంధిత చికాకులు, తల్లిగారి ఆరోగ్యంపై శ్రద్ధ అవసరం.');
    precEn.push('Guard against domestic misunderstandings and attend to maternal wellness.');
  }

  if (jupHouse === 8) {
    precTe.push('అష్టమ గురువు వల్ల పెద్దలతో మాట్లాడేటప్పుడు సంయమనం, అనవసర ఖర్చులను నియంత్రించుకోవడం ముఖ్యం.');
    precEn.push('Exercise restraint in communication with elders and budget finances carefully.');
  } else if (jupHouse === 12) {
    precTe.push('12వ ఇంట గురువు వల్ల శుభకార్యాల నిమిత్తం ఖర్చులు అధికమవుతాయి; బడ్జెట్ ప్రణాళిక పాటించండి.');
    precEn.push('Expenses on auspicious ceremonies rise; plan budget wisely.');
  }

  if ([8, 12, 4].includes(marsHouse)) {
    precTe.push('కుజ సంచార దోషం చేత ఆవేశపూరిత నిర్ణయాలు, కుటుంబంలో వాదనలకు దూరంగా ఉండాలి.');
    precEn.push('Avoid aggressive impatience and disputes with family or partners.');
  }

  if ([1, 2, 8, 12].includes(rahuHouse) || [1, 7, 8, 12].includes(ketuHouse)) {
    precTe.push('అపరిచితులను అతిగా నమ్మకపోవడం, ప్రయాణాలలో వస్తువులను జాగ్రత్తగా చూసుకోవడం శ్రేయస్కరం.');
    precEn.push('Avoid blindly trusting strangers and safeguard valuables during journeys.');
  }

  if (precTe.length === 0) {
    precTe.push('వారమంతా సమయపాలన పాటిస్తూ, అనవసర వివాదాలకు దూరంగా ప్రశాంతంగా గడపండి.');
    precEn.push('Maintain steady discipline throughout the week and steer clear of unnecessary arguments.');
  }

  // Weekly Remedy
  let remedyTe = '';
  let remedyEn = '';
  if ([12, 1, 2, 4, 8].includes(satHouse)) {
    remedyTe = 'ఈ వారం ప్రతిరోజూ హనుమాన్ చాలీసా పారాయణ, శనివారం నవగ్రహ ఆలయ ప్రదక్షిణ లేదా పేదలకు అన్నదానం చేయండి.';
    remedyEn = 'Recite Hanuman Chalisa daily, visit Navagraha shrine on Saturday, or sponsor food for the needy.';
  } else if ([8, 12].includes(jupHouse)) {
    remedyTe = 'ఈ వారం గురువారం దక్షిణామూర్తి స్తోత్రం లేదా గురు చరిత్ర పారాయణ, గురువులను సేవించడం శ్రేయస్కరం.';
    remedyEn = 'Chant Dakshinamurthy Stotram on Thursday, seek blessings of teachers and elders.';
  } else if ([8, 12].includes(marsHouse)) {
    remedyTe = 'ఈ వారం మంగళవారం సుబ్రహ్మణ్యాష్టకం లేదా రుద్రాభిషేకం, దీపారాధన చేయడం ఉత్తమ ఫలితాలను ఇస్తుంది.';
    remedyEn = 'Chant Subramanya Ashtakam or Rudra prayer, light a ghee lamp on Tuesday.';
  } else {
    remedyTe = 'ఈ వారం శ్రీ లక్ష్మీ నారాయణ ధ్యానము, నిత్య సూర్య నమస్కారాలు, ఆచార్యుల వేదాంత బోధల స్మరణ ఆత్మబలాన్ని ఇస్తాయి.';
    remedyEn = 'Meditate on Lord Lakshmi Narayana, practice morning Surya Namaskar, and contemplate Vedantic wisdom.';
  }

  const keyHighlights = `వారపు గోచారం: గురు: ${jupHouse}వ ఇల్లు • శని: ${satHouse}వ ఇల్లు • రవి: ${sunHouse}వ ఇల్లు`;
  const keyHighlightsEn = `Weekly Transit: Jupiter in H${jupHouse} • Saturn in H${satHouse} • Sun in H${sunHouse}`;

  return {
    positiveTe: posTe.slice(0, 2).join(' '),
    positiveEn: posEn.slice(0, 2).join(' '),
    precautionTe: precTe.slice(0, 2).join(' '),
    precautionEn: precEn.slice(0, 2).join(' '),
    remedyTe,
    remedyEn,
    keyHighlights,
    keyHighlightsEn
  };
}

/**
 * 2. DAILY PREDICTIONS (దిన ఫలాలు - Telugu & English)
 */
function generateDailyPredictions(
  rasiNameTe: string,
  rasiNameEn: string,
  dayLordInfo: { nameTe: string; nameEn: string; lordTe: string; lordEn: string; remedyTe: string; remedyEn: string },
  moonHouse: number,
  jupHouse: number,
  satHouse: number,
  marsHouse: number,
  sunHouse: number
): { 
  positiveTe: string; positiveEn: string;
  precautionTe: string; precautionEn: string;
  remedyTe: string; remedyEn: string;
  keyHighlights: string; keyHighlightsEn: string;
} {
  const moonData = MOON_HOUSE_DAILY[moonHouse] || MOON_HOUSE_DAILY[1];
  const isChandrashtama = moonHouse === 8;

  // Daily Positive
  const posTe: string[] = [];
  const posEn: string[] = [];
  posTe.push(`${rasiNameTe} రాశి వారికి ${moonData.posTe}`);
  posEn.push(`For ${rasiNameEn} natives: ${moonData.posEn}`);

  if ([2, 5, 7, 9, 11].includes(jupHouse)) {
    posTe.push(`నేడు గురుబలం తోడై ముఖ్యమైన పనులలో అనుకూలత లభిస్తుంది.`);
    posEn.push(`Benefic Jupiter supports important tasks today.`);
  } else if ([3, 6, 10, 11].includes(sunHouse)) {
    posTe.push(`నేడు అధికారుల నుండి అనుకూల స్పందన వస్తుంది.`);
    posEn.push(`Positive feedback from superiors today.`);
  } else if ([3, 6, 11].includes(satHouse)) {
    posTe.push(`నేడు శని అనుకూలతతో శ్రమకు తగిన ప్రతిఫలం దక్కుతుంది.`);
    posEn.push(`Steady rewards for diligent efforts today.`);
  }

  // Daily Precaution
  const precTe: string[] = [];
  const precEn: string[] = [];
  precTe.push(moonData.precTe);
  precEn.push(moonData.precEn);

  if (isChandrashtama) {
    precTe.push('ముఖ్యమైన పత్రాలపై సంతకాలు చేయడం గాని, ఎవరితోనూ వాదనలు పెట్టుకోవడం గాని చేయకండి.');
    precEn.push('Postpone signing crucial papers, and avoid getting into heated debates.');
  } else if ([8, 12, 4].includes(marsHouse)) {
    precTe.push('నేడు వాహనాలు నడిపేటప్పుడు, పదునైన వస్తువులతో పనిచేసేటప్పుడు జాగ్రత్త అవసరం.');
    precEn.push('Exercise extra alertness while driving or handling sharp objects today.');
  }

  // Daily Remedy
  let remedyTe = '';
  let remedyEn = '';
  if (isChandrashtama) {
    remedyTe = 'నేడు చంద్రాష్టమ శాంతికై శివార్చన చేయడం లేదా “ఓం నమఃశివాయ” జపం, పక్షులకు దాణా వేయడం శ్రేయస్కరం.';
    remedyEn = 'To mitigate Chandrashtama, chant Om Namah Shivaya, worship Lord Shiva, and feed birds.';
  } else {
    remedyTe = `నేడు ${dayLordInfo.nameTe} (${dayLordInfo.lordTe}): ${dayLordInfo.remedyTe}`;
    remedyEn = `Today is ${dayLordInfo.nameEn} (${dayLordInfo.lordEn}): ${dayLordInfo.remedyEn}`;
  }

  const keyHighlights = `నేడు (${dayLordInfo.nameTe}): చంద్రుడు ${moonHouse}వ ఇల్లు ${isChandrashtama ? '• ⚠️ చంద్రాష్టమం' : ''} • వారాధిపతి: ${dayLordInfo.lordTe}`;
  const keyHighlightsEn = `Today (${dayLordInfo.nameEn}): Moon in House ${moonHouse} ${isChandrashtama ? '• ⚠️ Chandrashtama' : ''} • Day Lord: ${dayLordInfo.lordEn}`;

  return {
    positiveTe: posTe.slice(0, 2).join(' '),
    positiveEn: posEn.slice(0, 2).join(' '),
    precautionTe: precTe.slice(0, 2).join(' '),
    precautionEn: precEn.slice(0, 2).join(' '),
    remedyTe,
    remedyEn,
    keyHighlights,
    keyHighlightsEn
  };
}
