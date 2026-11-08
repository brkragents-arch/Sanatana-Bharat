// ============================================================================
// COMBINED PLANETARY RASI PHALALU ENGINE (సంయుక్త గోచార వార/దిన ఫలాలు)
// Calculates Positive, Precaution, and Remedy predictions for all 12 Rasis
// based on combined real-time sidereal planetary positions.
// ============================================================================

import type { CompletePlanetInfo, RasiDef } from './planetaryEngine';
import { RASIS_DATA } from './planetaryEngine';

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

// House names in Vedic Astrology
export const HOUSE_NAMES_TE: Record<number, string> = {
  1: 'జన్మ రాశి (తను భావం)',
  2: 'ధన-కుటుంబ స్థానం',
  3: 'భ్రాతృ-పరాక్రమ స్థానం',
  4: 'మాతృ-సుఖ స్థానం',
  5: 'సంతాన-విద్యా స్థానం',
  6: 'శత్రు-రోగ నివారణ స్థానం',
  7: 'కళత్ర-భాగస్వామ్య స్థానం',
  8: 'ఆయుష్షు-పరివర్తన స్థానం',
  9: 'భాగ్య-ధర్మ స్థానం',
  10: 'రాజ్య-కర్మ స్థానం',
  11: 'లాభ-సౌభాగ్య స్థానం',
  12: 'వ్యయ-మోక్ష స్థానం'
};

/**
 * Computes combined weekly/daily predictions for all 12 Rasis
 * given the calculated planetary transit state.
 */
export function calculateAllRasiPhalalu(planets: CompletePlanetInfo[]): RasiPrediction[] {
  return RASIS_DATA.map((rasi) => {
    const houseMap: { [key: string]: number } = {};
    const beneficPlanets: string[] = [];
    const challengingPlanets: string[] = [];
    let positiveWeight = 0;
    let totalWeight = 0;

    // Weightage per planet: Jupiter and Saturn have highest weight, followed by Sun, Mars, etc.
    const planetWeights: Record<string, number> = {
      jupiter: 25,
      saturn: 25,
      sun: 15,
      mars: 12,
      venus: 12,
      mercury: 10,
      rahu: 10,
      ketu: 8,
      moon: 8
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

    // Calculate favorability percentage (normalized 50% - 95%)
    let rawScore = Math.round((positiveWeight / (totalWeight || 1)) * 100);
    rawScore = Math.max(48, Math.min(96, rawScore));

    let statusBadgeTe = 'అనుకూలం';
    if (rawScore >= 80) statusBadgeTe = 'అత్యంత అనుకూలం';
    else if (rawScore >= 65) statusBadgeTe = 'శుభప్రదం';
    else if (rawScore >= 52) statusBadgeTe = 'మధ్యస్థం';
    else statusBadgeTe = 'జాగ్రత్త అవసరం';

    // Tailored synthesized predictions based on combined planetary positions
    const { positiveTe, precautionTe, remedyTe, keyHighlights } = generateTailoredPredictions(
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
      keyHighlights
    };
  });
}

/**
 * Authentic Vedic synthesis of positive gains, precautions, and remedies
 * considering key houses of Jupiter, Saturn, Sun, Mars, Venus, Mercury, Moon, and Nodes.
 */
function generateTailoredPredictions(
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
  // 1. Positive synthesis
  const positiveParts: string[] = [];

  if ([2, 5, 7, 9, 11].includes(jupHouse)) {
    if (jupHouse === 2) positiveParts.push('గురుబలంతో విశేష ధనలాభం, కుటుంబంలో శుభకార్య చర్చలు.');
    else if (jupHouse === 5) positiveParts.push('పంచమ గురువు వల్ల బుద్ధిబలం, సంతాన సౌఖ్యం, విద్యా వికాసం.');
    else if (jupHouse === 7) positiveParts.push('సప్తమ గురు దృష్టితో వ్యాపార భాగస్వామ్యాలు, దాంపత్య సుఖం.');
    else if (jupHouse === 9) positiveParts.push('భాగ్య గురువు వల్ల పితృ అనుగ్రహం, ధర్మకార్యాలు, భాగ్యోదయం.');
    else if (jupHouse === 11) positiveParts.push('లాభ స్థానంలో గురువు సర్వకార్య సిద్ధిని, బృహత్తర ఆదాయాన్ని ఇచ్చును.');
  }

  if ([3, 6, 11].includes(satHouse)) {
    if (satHouse === 11) positiveParts.push('11వ ఇంట శని సంచారం స్థిరాస్తుల వృద్ధికి, దీర్ఘకాలిక లాభాలకు అత్యంత అనుకూలం.');
    else if (satHouse === 6) positiveParts.push('శత్రుజయ శని వల్ల కోర్టు కేసులు, రుణాల నుండి విముక్తి, వృత్తి విజయం.');
    else if (satHouse === 3) positiveParts.push('3వ ఇంట శని వల్ల ఆత్మవిశ్వాసం, సోదరుల సహాయం, నూతన ఉద్యోగ యోగం.');
  }

  if ([3, 6, 10, 11].includes(sunHouse)) {
    positiveParts.push('రవి అనుకూలతతో అధికారుల మన్ననలు, సమాజంలో విశేష కీర్తి ప్రతిష్టలు.');
  } else if ([1, 2, 4, 5, 9, 11].includes(venHouse)) {
    positiveParts.push('శుక్రుని అనుకూలతతో నూతన వస్త్ర, వాహన, ఆభరణ ప్రాప్తి, సంతోషకర వాతావరణం.');
  }

  if ([3, 6, 11].includes(marsHouse)) {
    positiveParts.push('కుజుని బలంతో స్థిరాస్తి, భూసంబంధ క్రయవిక్రయాలలో లాభాలు.');
  }

  if ([2, 4, 6, 8, 10, 11].includes(merHouse)) {
    positiveParts.push('బుధ అనుకూలతతో వ్యాపార చర్చలు, మేధో నిర్ణయాలు అనుకూలిస్తాయి.');
  }

  if ([1, 3, 6, 7, 10, 11].includes(moonHouse)) {
    positiveParts.push('చంద్రబలం వల్ల మనఃశాంతి, కార్యసిద్ధి కలుగుతాయి.');
  }

  if (positiveParts.length === 0) {
    positiveParts.push(`${rasiName} రాశి వారికి స్వయంకృషితో పనులు పూర్తవుతాయి; స్నేహితులు, ఆత్మీయుల మద్దతు లభిస్తుంది.`);
  }

  // 2. Precaution synthesis
  const precautionParts: string[] = [];

  // Sade Sati / Ashtama / Ardhashtama Saturn checks
  if ([12, 1, 2].includes(satHouse)) {
    precautionParts.push('ఏలినాటి శని ప్రభావం వల్ల శారీరక శ్రమ, అనవసర ఖర్చులు, ఆలోచనల్లో అలసట రావచ్చు.');
  } else if (satHouse === 8) {
    precautionParts.push('అష్టమ శని ప్రభావంతో ఆరోగ్య విషయాలలోను, వాహనాలు నడిపేటప్పుడు అత్యంత జాగ్రత్త వహించాలి.');
  } else if (satHouse === 4) {
    precautionParts.push('అర్ధాష్టమ శని కారణంగా గృహంలో చికాకులు, తల్లిగారి ఆరోగ్యంపై శ్రద్ధ అవసరం.');
  }

  // Jupiter in 8 or 12
  if (jupHouse === 8) {
    precautionParts.push('అష్టమ గురువు వల్ల పెద్దలతో మాట్లాడేటప్పుడు సంయమనం, ధన విషయాలలో జాగ్రత్త ముఖ్యం.');
  } else if (jupHouse === 12) {
    precautionParts.push('12వ ఇంట గురువు వల్ల శుభ ఖర్చులు అధికమవుతాయి; బడ్జెట్ ప్రణాళిక పాటించండి.');
  }

  // Mars / Rahu tension
  if ([8, 12, 4].includes(marsHouse)) {
    precautionParts.push('కుజ సంచార దోషం వల్ల కోపం, తొందరపాటు నిర్ణయాలు, కుటుంబ కలహాలకు దూరంగా ఉండాలి.');
  }

  if ([1, 2, 8, 12].includes(rahuHouse)) {
    precautionParts.push('రాహు గోచార రీత్యా అనుకోని ప్రయాణాలు, అపరిచితులను అతిగా నమ్మకపోవడం శ్రేయస్కరం.');
  }

  if ([1, 7, 8, 12].includes(ketuHouse)) {
    precautionParts.push('కేతు ప్రభావం వల్ల శారీరక అస్వస్థత రాకుండా ఆహారంలో పరిశుభ్రత పాటించాలి.');
  }

  if (precautionParts.length === 0) {
    precautionParts.push('అనవసర వాగ్వివాదాలకు దూరంగా ఉండండి, ఆహార నియమాలు పాటిస్తూ ప్రశాంతంగా గడపండి.');
  }

  // 3. Remedy synthesis (spiritual & practical)
  let remedyTe = '';
  if ([12, 1, 2, 4, 8].includes(satHouse)) {
    remedyTe = 'శని గాయత్రి జపం లేదా హనుమాన్ చాలీసా పఠనం, నవగ్రహ ఆలయ ప్రదక్షిణలు, పేదలకు అన్నదానం.';
  } else if ([8, 12].includes(jupHouse)) {
    remedyTe = 'దక్షిణామూర్తి స్తోత్రం లేదా గురు చరిత పారాయణం, బ్రాహ్మణ/గురుసేవ చేయడం శ్రేయస్కరం.';
  } else if ([8, 12].includes(marsHouse)) {
    remedyTe = 'సుబ్రహ్మణ్యాష్టకం లేదా రుద్రాభిషేకం, మంగళవారం దీపారాధన చేయడం ఉత్తమ ఫలితాలను ఇస్తుంది.';
  } else if ([1, 7, 8].includes(rahuHouse) || [1, 7, 8].includes(ketuHouse)) {
    remedyTe = 'దుర్గా సప్తశతి లేదా మహామృత్యుంజయ మంత్ర జపము, పక్షులకు లేదా ఆవులకు ఆహారం ఇవ్వడం మంచిది.';
  } else {
    remedyTe = 'ఇష్టదైవ ప్రార్థన, సూర్య నమస్కారాలు, ఆచార్యుల వేదాంత ప్రబోధాల ధ్యానం ఆత్మబలాన్ని ఇస్తాయి.';
  }

  const keyHighlights = `గురు: ${jupHouse}వ ఇల్లు • శని: ${satHouse}వ ఇల్లు • రవి: ${sunHouse}వ ఇల్లు`;

  return {
    positiveTe: positiveParts.slice(0, 2).join(' '),
    precautionTe: precautionParts.slice(0, 2).join(' '),
    remedyTe,
    keyHighlights
  };
}
