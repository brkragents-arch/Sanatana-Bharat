// ============================================================================
// COMBINED PLANETARY RASI PHALALU ENGINE (సంయుక్త గోచార వార/దిన ఫలాలు)
// Calculates Positive, Precaution, and Remedy predictions for all 12 Rasis
// based on combined real-time sidereal planetary positions, distinct for Weekly & Daily.
// ============================================================================

import type { CompletePlanetInfo, RasiDef } from './planetaryEngine';
import { RASIS_DATA } from './planetaryEngine';

export type PredictionMode = 'weekly' | 'daily';

export interface RasiPrediction {
  rasi: RasiDef;
  housePositionOfPlanets: { [key: string]: number }; // planetKey -> house (1..12)
  beneficPlanets: string[]; // Telugu names of favorable planets
  challengingPlanets: string[]; // Telugu names of planets needing precaution
  positiveTe: string; // శుభ ఫలితాలు (Positive)
  precautionTe: string; // జాగ్రత్తలు (Precautions)
  remedyTe: string; // పరిహారాలు (Remedies)
  favorabilityScore: number; // 0 to 100%
  statusBadgeTe: string; // 'అత్యంత అనుకూలం' | 'అనుకూలం' | 'మధ్యస్థం' | 'జాగ్రత్త'
  keyHighlights: string; // సంక్షిప్త గోచార ప్రభావం
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
const DAY_LORDS: { nameTe: string; lordTe: string; remedyTe: string }[] = [
  { nameTe: 'ఆదివారం', lordTe: 'రవి (సూర్యుడు)', remedyTe: 'సూర్యోదయ సమయంలో గాయత్రి మంత్ర జపం లేదా ఆదిత్య హృదయ స్తోత్ర పారాయణ.' },
  { nameTe: 'సోమవారం', lordTe: 'చంద్రుడు', remedyTe: 'శివార్చన లేదా ఓం నమఃశివాయ జపం, పేదలకు అన్నదానం.' },
  { nameTe: 'మంగళవారం', lordTe: 'కుజుడు (అంగారకుడు)', remedyTe: 'హనుమాన్ చాలీసా లేదా సుబ్రహ్మణ్యాష్టకం పఠనం, నెయ్యితో దీపారాధన.' },
  { nameTe: 'బుధవారం', lordTe: 'బుధుడు', remedyTe: 'శ్రీ విష్ణు సహస్రనామ స్తోత్ర పారాయణ, గోవులకు పచ్చిగడ్డి తినిపించడం.' },
  { nameTe: 'గురువారం', lordTe: 'గురువు (బృహస్పతి)', remedyTe: 'దక్షిణామూర్తి స్తోత్రం లేదా గురు చరిత్ర పారాయణ, పెద్దల ఆశీస్సులు.' },
  { nameTe: 'శుక్రవారం', lordTe: 'శుక్రుడు', remedyTe: 'శ్రీ లక్ష్మీ అష్టోత్తరం లేదా కనకధారా స్తోత్ర పఠనం, శ్వేత పుష్పాలతో పూజ.' },
  { nameTe: 'శనివారం', lordTe: 'శనైశ్చరుడు', remedyTe: 'హనుమాన్ ఆరాధన, నువ్వుల నూనెతో దీపారాధన, నవగ్రహ ఆలయ ప్రదక్షిణలు.' }
];

// Moon house daily significance in Vedic Astrology
const MOON_HOUSE_DAILY: Record<number, { pos: string; prec: string; scoreBoost: number }> = {
  1: {
    pos: 'నేడు జన్మ చంద్రుని వల్ల నూతన ఆలోచనలు, ఉల్లాసం, ఆత్మగౌరవం పెరుగుతాయి.',
    prec: 'మానసిక చంచలత్వం, అహంకారం దరిచేరకుండా నిగ్రహం పాటించాలి.',
    scoreBoost: 5
  },
  2: {
    pos: 'నేడు ధన స్థానంలో చంద్ర సంచారము చేత ఆకస్మిక ధనలాభం, విందువినోదాలు, కుటుంబ సౌఖ్యం.',
    prec: 'ఆవేశపూరిత ఖర్చులు, కుటుంబీకులతో మాట్లాడేటప్పుడు సంయమనం అవసరం.',
    scoreBoost: 8
  },
  3: {
    pos: 'నేడు తృతీయ చంద్రుని వల్ల ధైర్యం, కార్యసాధన, తోబుట్టువుల సహకారం లభిస్తుంది.',
    prec: 'అనవసర ప్రయాణాలలో బడలిక రాకుండా తగిన విశ్రాంతి తీసుకోవాలి.',
    scoreBoost: 10
  },
  4: {
    pos: 'నేడు చతుర్థ స్థానంలో చంద్రుడు ఉన్నందున గృహ సౌఖ్యం, మాతృ ఆశీస్సులు లభిస్తాయి.',
    prec: 'అర్ధాష్టమ చంద్ర ప్రభావంతో మనశ్శాంతి లోపించవచ్చు; గృహ చికాకులకు దూరంగా ఉండండి.',
    scoreBoost: -3
  },
  5: {
    pos: 'నేడు పంచమ చంద్రుని వల్ల మేధోబలం, సృజనాత్మక ఆలోచనలు, విద్యార్థులకు ఏకాగ్రత పెరుగుతాయి.',
    prec: 'ఊహాజనిత పెట్టుబడులు, తొందరపాటు నిర్ణయాలు చేయకపోవడం మంచిది.',
    scoreBoost: 7
  },
  6: {
    pos: 'నేడు షష్ఠమ చంద్రుని వల్ల శత్రువులపై పైచేయి, రుణ సమస్యల నివారణ, పోటీ పరీక్షల్లో విజయం.',
    prec: 'ఆరోగ్యం పట్ల కొద్దిపాటి శ్రద్ధ వహించండి, అజీర్ణ ఆహారాలు మానివేయండి.',
    scoreBoost: 12
  },
  7: {
    pos: 'నేడు సప్తమ చంద్రుని వల్ల వ్యాపార చర్చలు ఫలిస్తాయి, దాంపత్య అనుబంధం బలపడుతుంది.',
    prec: 'భాగస్వాములతో అనవసర వాగ్వివాదాలు రాకుండా మృదువుగా వ్యవహరించండి.',
    scoreBoost: 9
  },
  8: {
    pos: 'నేడు అంతర్ముఖ ఆలోచనలు, వేదాంత సాధన, ఆధ్యాత్మిక ధ్యానానికి అనుకూల సమయం.',
    prec: '⚠️ నేడు చంద్రాష్టమం! ముఖ్యమైన ఒప్పందాలు, నూతన పనులు, ప్రయాణాలు వాయిదా వేయాలి. వివాదాలకు దూరంగా ఉండండి.',
    scoreBoost: -18
  },
  9: {
    pos: 'నేడు భాగ్య చంద్రుని వల్ల దైవదర్శనం, పెద్దల ఆశీర్వాదం, పనులలో అదృష్టం తోడవుతుంది.',
    prec: 'ధర్మకార్యాలకు ఖర్చులు పెరుగుతాయి; సమయాన్ని సద్వినియోగం చేసుకోండి.',
    scoreBoost: 10
  },
  10: {
    pos: 'నేడు దశమ చంద్రుని వల్ల ఉద్యోగంలో అధికారుల మన్ననలు, పనులలో ప్రశంసలు దక్కుతాయి.',
    prec: 'పని ఒత్తిడి పెరిగే సూచన ఉన్నందున ప్రణాళికాబద్ధంగా పనులు ముగించండి.',
    scoreBoost: 11
  },
  11: {
    pos: 'నేడు ఏకాదశ చంద్రుని వల్ల సర్వకార్య సిద్ధి, వ్యాపార లాభాలు, మిత్రుల సహకారం లభిస్తుంది.',
    prec: 'అతి ఆశకు పోకుండా వచ్చిన అవకాశాలను సద్వినియోగం చేసుకోండి.',
    scoreBoost: 14
  },
  12: {
    pos: 'నేడు ఆత్మీయులతో ఆధ్యాత్మిక చర్చలు, దానధర్మాలు చేయడానికి అనుకూలం.',
    prec: 'వ్యయ చంద్రుని వల్ల ఊహించని ఖర్చులు, నిద్రలేమి లేదా అలసట రావచ్చు; సంయమనం ముఖ్యం.',
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
    const challengingPlanets: string[] = [];
    let positiveWeight = 0;
    let totalWeight = 0;

    // Weightage per planet:
    // In Daily mode, Moon and Day Lord have much higher impact.
    // In Weekly mode, Jupiter, Saturn, Sun, Mars have prime weight.
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
      // Calculate house of planet relative to this rasi (1 to 12)
      const house = ((p.rasiIndex - rasi.index + 12) % 12) + 1;
      houseMap[p.key] = house;

      const isBeneficHouse = (BENEFIC_HOUSES[p.key] || []).includes(house);
      const isExaltedOrOwn = p.dignity === 'exalted' || p.dignity === 'own';
      const weight = planetWeights[p.key] || 10;
      totalWeight += weight;

      if (isBeneficHouse || isExaltedOrOwn) {
        positiveWeight += weight;
        beneficPlanets.push(p.meta.nameTe.split(' ')[0]);
      } else {
        challengingPlanets.push(p.meta.nameTe.split(' ')[0]);
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
        rawScore = Math.min(rawScore, 50); // Cap Chandrashtama score
      }
    }

    rawScore = Math.max(45, Math.min(96, rawScore));

    let statusBadgeTe = 'అనుకూలం';
    if (isChandrashtama && mode === 'daily') {
      statusBadgeTe = '⚠️ చంద్రాష్టమం';
    } else if (rawScore >= 80) {
      statusBadgeTe = mode === 'daily' ? 'నేడు అత్యంత శుభం' : 'ఈ వారం అత్యంత అనుకూలం';
    } else if (rawScore >= 65) {
      statusBadgeTe = mode === 'daily' ? 'నేడు అనుకూలం' : 'ఈ వారం శుభప్రదం';
    } else if (rawScore >= 52) {
      statusBadgeTe = mode === 'daily' ? 'నేడు మధ్యస్థం' : 'ఈ వారం మధ్యస్థం';
    } else {
      statusBadgeTe = mode === 'daily' ? 'నేడు జాగ్రత్త అవసరం' : 'ఈ వారం జాగ్రత్త';
    }

    // Generate distinctly tailored text based on mode (Weekly vs Daily)
    const { positiveTe, precautionTe, remedyTe, keyHighlights } = mode === 'weekly'
      ? generateWeeklyPredictions(
          rasi.nameTe,
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
      challengingPlanets,
      positiveTe,
      precautionTe,
      remedyTe,
      favorabilityScore: rawScore,
      statusBadgeTe,
      keyHighlights,
      isChandrashtama
    };
  });
}

/**
 * 1. WEEKLY PREDICTIONS (వార ఫలాలు)
 * Synthesizes comprehensive 7-day forecast from major transits across financial,
 * career, relationship, health, and weekly spiritual remedy.
 */
function generateWeeklyPredictions(
  rasiName: string,
  jupHouse: number,
  satHouse: number,
  sunHouse: number,
  marsHouse: number,
  venHouse: number,
  merHouse: number,
  rahuHouse: number,
  ketuHouse: number,
  moonHouse: number
): { positiveTe: string; precautionTe: string; remedyTe: string; keyHighlights: string } {
  const positiveParts: string[] = [];

  // Weekly Positive Highlights
  if ([2, 5, 7, 9, 11].includes(jupHouse)) {
    if (jupHouse === 2) positiveParts.push('ఈ వారం గురుబలంతో విశేష ధనలాభం, కుటుంబంలో శుభకార్య చర్చలు సఫలమవుతాయి.');
    else if (jupHouse === 5) positiveParts.push('ఈ వారం సంతాన సౌఖ్యం, విద్యా వికాసం, మేధోపరమైన నిర్ణయాలలో సంపూర్ణ విజయం.');
    else if (jupHouse === 7) positiveParts.push('ఈ వారం వ్యాపార విస్తరణ, భాగస్వామ్య లాభాలు, దాంపత్యంలో అనుకూల వాతావరణం ఉంటుంది.');
    else if (jupHouse === 9) positiveParts.push('ఈ వారం భాగ్య గురువు వల్ల పిత్రార్జితాలు, ధర్మకార్యాలు, అదృష్ట యోగాలు కలసివస్తాయి.');
    else if (jupHouse === 11) positiveParts.push('ఈ వారం 11వ ఇంట గురు సంచారం సర్వకార్య సిద్ధిని, బృహత్తర ఆదాయ వృద్ధిని చేకూరుస్తుంది.');
  }

  if ([3, 6, 11].includes(satHouse)) {
    if (satHouse === 11) positiveParts.push('శని 11వ ఇంట ఉన్నందున స్థిరాస్తుల క్రయవిక్రయాలు, దీర్ఘకాలిక పెట్టుబడులు లాభిస్తాయి.');
    else if (satHouse === 6) positiveParts.push('శత్రుజయ శని అనుకూలతతో కోర్టు పనులు, రుణ విముక్తి ప్రయత్నాలు ఫలిస్తాయి.');
    else if (satHouse === 3) positiveParts.push('తృతీయ శని వల్ల నూతన ఉద్యోగ ప్రయత్నాలు, సోదరుల సహాయం లభిస్తాయి.');
  }

  if ([3, 6, 10, 11].includes(sunHouse)) {
    positiveParts.push('రవి గోచార బలంతో ప్రభుత్వ వ్యవహారాలు, ఉన్నతాధికారుల మన్ననలు లభిస్తాయి.');
  } else if ([1, 2, 4, 5, 9, 11].includes(venHouse)) {
    positiveParts.push('శుక్రుని అనుకూలత వల్ల నూతన వస్త్ర, వాహన, ఆభరణ ప్రాప్తి, ఆహ్లాదకర వాతావరణం నెలకొంటుంది.');
  }

  if ([3, 6, 11].includes(marsHouse)) {
    positiveParts.push('కుజ బలంతో భూసంబంధిత లావాదేవీలు మరియు కాంట్రాక్టులలో ఆశించిన ఫలితాలు ఉంటాయి.');
  }

  if ([2, 4, 6, 8, 10, 11].includes(merHouse)) {
    positiveParts.push('వ్యాపార సంబంధిత చర్చలు, సమాచార మార్పిడిలో వేగం పుంజుకుంటుంది.');
  }

  if ([1, 3, 6, 7, 10, 11].includes(moonHouse)) {
    positiveParts.push('వారం ఆరంభంలో అనుకూల చంద్రబలం కలిగి ఉంటుంది.');
  }

  if (positiveParts.length === 0) {
    positiveParts.push(`ఈ వారం ${rasiName} రాశి వారికి స్వయంకృషితో పనులు పూర్తవుతాయి; స్నేహితులు, ఆత్మీయుల మద్దతు లభిస్తుంది.`);
  }

  // Weekly Precaution Highlights
  const precautionParts: string[] = [];

  if ([12, 1, 2].includes(satHouse)) {
    precautionParts.push('ఈ వారం ఏలినాటి శని ప్రభావం వల్ల పని ఒత్తిడి, ఆలోచనల్లో అలసట రావచ్చు; ఓర్పు అవసరం.');
  } else if (satHouse === 8) {
    precautionParts.push('ఈ వారం అష్టమ శని రీత్యా ఆరోగ్య విషయాలలోను, వాహనాలు నడిపేటప్పుడు అత్యంత జాగ్రత్త వహించాలి.');
  } else if (satHouse === 4) {
    precautionParts.push('అర్ధాష్టమ శని వలన గృహ సంబంధిత చికాకులు, తల్లిగారి ఆరోగ్యంపై శ్రద్ధ అవసరం.');
  }

  if (jupHouse === 8) {
    precautionParts.push('అష్టమ గురువు వల్ల పెద్దలతో మాట్లాడేటప్పుడు సంయమనం, అనవసర ఖర్చులను నియంత్రించుకోవడం ముఖ్యం.');
  } else if (jupHouse === 12) {
    precautionParts.push('12వ ఇంట గురువు వల్ల శుభకార్యాల నిమిత్తం ఖర్చులు అధికమవుతాయి; బడ్జెట్ ప్రణాళిక పాటించండి.');
  }

  if ([8, 12, 4].includes(marsHouse)) {
    precautionParts.push('కుజ సంచార దోషం చేత ఆవేశపూరిత నిర్ణయాలు, కుటుంబంలో వాదనలకు దూరంగా ఉండాలి.');
  }

  if ([1, 2, 8, 12].includes(rahuHouse) || [1, 7, 8, 12].includes(ketuHouse)) {
    precautionParts.push('అపరిచితులను అతిగా నమ్మకపోవడం, ప్రయాణాలలో వస్తువులను జాగ్రత్తగా చూసుకోవడం శ్రేయస్కరం.');
  }

  if (precautionParts.length === 0) {
    precautionParts.push('వారమంతా సమయపాలన పాటిస్తూ, అనవసర వివాదాలకు దూరంగా ప్రశాంతంగా గడపండి.');
  }

  // Weekly Remedy
  let remedyTe = '';
  if ([12, 1, 2, 4, 8].includes(satHouse)) {
    remedyTe = 'ఈ వారం ప్రతిరోజూ హనుమాన్ చాలీసా పారాయణ, శనివారం నవగ్రహ ఆలయ ప్రదక్షిణ లేదా పేదలకు అన్నదానం చేయండి.';
  } else if ([8, 12].includes(jupHouse)) {
    remedyTe = 'ఈ వారం గురువారం దక్షిణామూర్తి స్తోత్రం లేదా గురు చరిత్ర పారాయణ, గురువులను సేవించడం శ్రేయస్కరం.';
  } else if ([8, 12].includes(marsHouse)) {
    remedyTe = 'ఈ వారం మంగళవారం సుబ్రహ్మణ్యాష్టకం లేదా రుద్రాభిషేకం, దీపారాధన చేయడం ఉత్తమ ఫలితాలను ఇస్తుంది.';
  } else {
    remedyTe = 'ఈ వారం శ్రీ లక్ష్మీ నారాయణ ధ్యానము, నిత్య సూర్య నమస్కారాలు, ఆచార్యుల వేదాంత బోధల స్మరణ ఆత్మబలాన్ని ఇస్తాయి.';
  }

  const keyHighlights = `వారపు గోచారం: గురు: ${jupHouse}వ ఇల్లు • శని: ${satHouse}వ ఇల్లు • రవి: ${sunHouse}వ ఇల్లు`;

  return {
    positiveTe: positiveParts.slice(0, 2).join(' '),
    precautionTe: precautionParts.slice(0, 2).join(' '),
    remedyTe,
    keyHighlights
  };
}

/**
 * 2. DAILY PREDICTIONS (దిన ఫలాలు)
 * Strongly governed by Today's Moon Transit, Chandrashtama, and Today's Day Lord.
 */
function generateDailyPredictions(
  rasiName: string,
  dayLordInfo: { nameTe: string; lordTe: string; remedyTe: string },
  moonHouse: number,
  jupHouse: number,
  satHouse: number,
  marsHouse: number,
  sunHouse: number
): { positiveTe: string; precautionTe: string; remedyTe: string; keyHighlights: string } {
  const moonData = MOON_HOUSE_DAILY[moonHouse] || MOON_HOUSE_DAILY[1];
  const isChandrashtama = moonHouse === 8;

  // Daily Positive
  const posParts: string[] = [];
  posParts.push(`${rasiName} రాశి వారికి ${moonData.pos}`);

  if ([2, 5, 7, 9, 11].includes(jupHouse)) {
    posParts.push(`నేడు గురుబలం తోడై ముఖ్యమైన పనులలో అనుకూలత లభిస్తుంది.`);
  } else if ([3, 6, 10, 11].includes(sunHouse)) {
    posParts.push(`నేడు అధికారుల నుండి అనుకూల స్పందన వస్తుంది.`);
  } else if ([3, 6, 11].includes(satHouse)) {
    posParts.push(`నేడు శని అనుకూలతతో శ్రమకు తగిన ప్రతిఫలం దక్కుతుంది.`);
  }

  // Daily Precaution
  const precParts: string[] = [];
  precParts.push(moonData.prec);

  if (isChandrashtama) {
    precParts.push('ముఖ్యమైన పత్రాలపై సంతకాలు చేయడం గాని, ఎవరితోనూ వాదనలు పెట్టుకోవడం గాని చేయకండి.');
  } else if ([8, 12, 4].includes(marsHouse)) {
    precParts.push('నేడు వాహనాలు నడిపేటప్పుడు, పదునైన వస్తువులతో పనిచేసేటప్పుడు జాగ్రత్త అవసరం.');
  }

  // Daily Remedy
  let remedyTe = '';
  if (isChandrashtama) {
    remedyTe = 'నేడు చంద్రాష్టమ శాంతికై శివార్చన చేయడం లేదా “ఓం నమఃశివాయ” జపం, పక్షులకు దాణా వేయడం శ్రేయస్కరం.';
  } else {
    remedyTe = `నేడు ${dayLordInfo.nameTe} (${dayLordInfo.lordTe}): ${dayLordInfo.remedyTe}`;
  }

  const keyHighlights = `నేడు (${dayLordInfo.nameTe}): చంద్రుడు ${moonHouse}వ ఇల్లు ${isChandrashtama ? '• ⚠️ చంద్రాష్టమం' : ''} • వారాధిపతి: ${dayLordInfo.lordTe}`;

  return {
    positiveTe: posParts.slice(0, 2).join(' '),
    precautionTe: precParts.slice(0, 2).join(' '),
    remedyTe,
    keyHighlights
  };
}
