// ============================================================================
// ASTRONOMICAL PLANETARY TRANSIT ENGINE (లాహిరి అయనాంశ సిద్ధాంత సహిత దక్షిణ భారత గోచార దర్శిని)
// ============================================================================

import { getPlanetInRasiEffect } from './transitEffectsData';
import type { TransitEffectInfo } from './transitEffectsData';

export type { TransitEffectInfo };
export { getPlanetInRasiEffect };

export type PlanetKey = 'sun' | 'moon' | 'mars' | 'mercury' | 'jupiter' | 'venus' | 'saturn' | 'rahu' | 'ketu';

export interface PlanetMeta {
  key: PlanetKey;
  nameTe: string;
  nameEn: string;
  sanskritName: string;
  symbol: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  natureTe: string;
}

export const PLANETS_META: Record<PlanetKey, PlanetMeta> = {
  sun: {
    key: 'sun',
    nameTe: 'రవి (సూర్యుడు)',
    nameEn: 'Sun (Surya)',
    sanskritName: 'సూర్యః',
    symbol: '☀️',
    color: '#D97706',
    bgColor: '#FEF3C7',
    borderColor: '#F59E0B',
    textColor: '#92400E',
    natureTe: 'ఆత్మకారకుడు, పితృకారకుడు'
  },
  moon: {
    key: 'moon',
    nameTe: 'చంద్రుడు',
    nameEn: 'Moon (Chandra)',
    sanskritName: 'చంద్రః',
    symbol: '🌙',
    color: '#475569',
    bgColor: '#F1F5F9',
    borderColor: '#94A3B8',
    textColor: '#1E293B',
    natureTe: 'మనఃకారకుడు, మాతృకారకుడు'
  },
  mars: {
    key: 'mars',
    nameTe: 'కుజుడు (అంగారకుడు)',
    nameEn: 'Mars (Mangal)',
    sanskritName: 'మంగళః',
    symbol: '♂️',
    color: '#DC2626',
    bgColor: '#FEE2E2',
    borderColor: '#EF4444',
    textColor: '#991B1B',
    natureTe: 'భ్రాతృకారకుడు, ధైర్యసాహసాలు'
  },
  mercury: {
    key: 'mercury',
    nameTe: 'బుధుడు',
    nameEn: 'Mercury (Budha)',
    sanskritName: 'బుధః',
    symbol: '☿',
    color: '#059669',
    bgColor: '#D1FAE5',
    borderColor: '#10B981',
    textColor: '#065F46',
    natureTe: 'బుద్ధికారకుడు, విద్యావ్యాపారాలు'
  },
  jupiter: {
    key: 'jupiter',
    nameTe: 'గురువు (బృహస్పతి)',
    nameEn: 'Jupiter (Guru)',
    sanskritName: 'బృహస్పతిః',
    symbol: '♃',
    color: '#D97706',
    bgColor: '#FFFBEB',
    borderColor: '#FBBF24',
    textColor: '#B45309',
    natureTe: 'జ్ఞానకారకుడు, సంతానకారకుడు'
  },
  venus: {
    key: 'venus',
    nameTe: 'శుక్రుడు',
    nameEn: 'Venus (Shukra)',
    sanskritName: 'శుక్రః',
    symbol: '♀',
    color: '#DB2777',
    bgColor: '#FCE7F3',
    borderColor: '#F472B6',
    textColor: '#9D174D',
    natureTe: 'కళాత్రకారకుడు, భోగభాగ్యాలు'
  },
  saturn: {
    key: 'saturn',
    nameTe: 'శని (శనైశ్చరుడు)',
    nameEn: 'Saturn (Shani)',
    sanskritName: 'శనిః',
    symbol: '♄',
    color: '#1E3A8A',
    bgColor: '#DBEAFE',
    borderColor: '#3B82F6',
    textColor: '#1E40AF',
    natureTe: 'ఆయుష్కారకుడు, కర్మఫల ప్రదాత'
  },
  rahu: {
    key: 'rahu',
    nameTe: 'రాహువు',
    nameEn: 'Rahu (North Node)',
    sanskritName: 'రాహుః',
    symbol: '☊',
    color: '#4B5563',
    bgColor: '#E5E7EB',
    borderColor: '#6B7280',
    textColor: '#1F2937',
    natureTe: 'ఛాయాగ్రహం, మాయాకారకుడు'
  },
  ketu: {
    key: 'ketu',
    nameTe: 'కేతువు',
    nameEn: 'Ketu (South Node)',
    sanskritName: 'కేతుః',
    symbol: '☋',
    color: '#7C2D12',
    bgColor: '#FFEDD5',
    borderColor: '#EA580C',
    textColor: '#9A3412',
    natureTe: 'మోక్షకారకుడు, జ్ఞానవైరాగ్యాలు'
  }
};

export interface RasiDef {
  index: number;
  nameTe: string;
  nameEn: string;
  symbol: string;
  lordKey: PlanetKey;
  lordTe: string;
  elementTe: string;
  qualityTe: string;
  southGridRow: number;
  southGridCol: number;
}

export const RASIS_DATA: RasiDef[] = [
  { index: 0, nameTe: 'మేషం', nameEn: 'Aries', symbol: '♈', lordKey: 'mars', lordTe: 'కుజుడు', elementTe: 'అగ్ని', qualityTe: 'చర', southGridRow: 1, southGridCol: 2 },
  { index: 1, nameTe: 'వృషభం', nameEn: 'Taurus', symbol: '♉', lordKey: 'venus', lordTe: 'శుక్రుడు', elementTe: 'పృథ్వి', qualityTe: 'స్థిర', southGridRow: 1, southGridCol: 3 },
  { index: 2, nameTe: 'మిథునం', nameEn: 'Gemini', symbol: '♊', lordKey: 'mercury', lordTe: 'బుధుడు', elementTe: 'వాయు', qualityTe: 'ద్విస్వభావ', southGridRow: 1, southGridCol: 4 },
  { index: 3, nameTe: 'కర్కాటకం', nameEn: 'Cancer', symbol: '♋', lordKey: 'moon', lordTe: 'చంద్రుడు', elementTe: 'జల', qualityTe: 'చర', southGridRow: 2, southGridCol: 4 },
  { index: 4, nameTe: 'సింహం', nameEn: 'Leo', symbol: '♌', lordKey: 'sun', lordTe: 'రవి', elementTe: 'అగ్ని', qualityTe: 'స్థిర', southGridRow: 3, southGridCol: 4 },
  { index: 5, nameTe: 'కన్య', nameEn: 'Virgo', symbol: '♍', lordKey: 'mercury', lordTe: 'బుధుడు', elementTe: 'పృథ్వి', qualityTe: 'ద్విస్వభావ', southGridRow: 4, southGridCol: 4 },
  { index: 6, nameTe: 'తుల', nameEn: 'Libra', symbol: '♎', lordKey: 'venus', lordTe: 'శుక్రుడు', elementTe: 'వాయు', qualityTe: 'చర', southGridRow: 4, southGridCol: 3 },
  { index: 7, nameTe: 'వృశ్చికం', nameEn: 'Scorpio', symbol: '♏', lordKey: 'mars', lordTe: 'కుజుడు/కేతు', elementTe: 'జల', qualityTe: 'స్థిర', southGridRow: 4, southGridCol: 2 },
  { index: 8, nameTe: 'ధనుస్సు', nameEn: 'Sagittarius', symbol: '♐', lordKey: 'jupiter', lordTe: 'గురువు', elementTe: 'అగ్ని', qualityTe: 'ద్విస్వభావ', southGridRow: 4, southGridCol: 1 },
  { index: 9, nameTe: 'మకరం', nameEn: 'Capricorn', symbol: '♑', lordKey: 'saturn', lordTe: 'శని', elementTe: 'పృథ్వి', qualityTe: 'చర', southGridRow: 3, southGridCol: 1 },
  { index: 10, nameTe: 'కుంభం', nameEn: 'Aquarius', symbol: '♒', lordKey: 'saturn', lordTe: 'శని/రాహు', elementTe: 'వాయు', qualityTe: 'స్థిర', southGridRow: 2, southGridCol: 1 },
  { index: 11, nameTe: 'మీనం', nameEn: 'Pisces', symbol: '♓', lordKey: 'jupiter', lordTe: 'గురువు', elementTe: 'జల', qualityTe: 'ద్విస్వభావ', southGridRow: 1, southGridCol: 1 }
];

export const NAKSHATRAS_TE = [
  'అశ్విని', 'భరణి', 'కృత్తిక', 'రోహిణి', 'మృగశిర', 'ఆరుద్ర',
  'పునర్వసు', 'పుష్యమి', 'ఆశ్లేష', 'మఖ', 'పుబ్బ (పూర్వఫల్గుణి)', 'ఉత్తర (ఉత్తరఫల్గుణి)',
  'హస్త', 'చిత్త', 'స్వాతి', 'విశాఖ', 'అనూరాధ', 'జ్యేష్ఠ',
  'మూల', 'పూర్వాషాఢ', 'ఉత్తరాషాఢ', 'శ్రవణం', 'ధనిష్ఠ', 'శతభిషం',
  'పూర్వాభాద్ర', 'ఉత్తరాభాద్ర', 'రేవతి'
];

export const NAKSHATRAS_EN = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushyami', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Moola', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

// ----------------------------------------------------------------------------
// ASTRONOMICAL COMPUTATION PRIMITIVES
// ----------------------------------------------------------------------------

function toRad(deg: number): number { return deg * Math.PI / 180; }
function toDeg(rad: number): number { return rad * 180 / Math.PI; }
function normalize360(deg: number): number {
  let d = deg % 360;
  if (d < 0) d += 360;
  return d;
}

export function getJulianDay(date: Date): number {
  return 2440587.5 + date.getTime() / 86400000;
}

export function getLahiriAyanamsha(T: number): number {
  return 23.858072 + 1.396971 * T;
}

function solveKepler(M: number, e: number): number {
  let E = M;
  for (let i = 0; i < 15; i++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-7) break;
  }
  return E;
}

const PLANET_ELEMENTS: Record<string, {
  a: number;
  e: [number, number];
  I: [number, number];
  L: [number, number];
  longPeri: [number, number];
  longNode: [number, number];
}> = {
  mercury: {
    a: 0.38709927,
    e: [0.20563593, 0.000020407],
    I: [7.00497902, -0.0059474],
    L: [252.2503235, 149472.67411175],
    longPeri: [77.45779628, 0.16047689],
    longNode: [48.33076593, -0.12534081]
  },
  venus: {
    a: 0.72333566,
    e: [0.00677672, -0.00004107],
    I: [3.39467605, -0.0007889],
    L: [181.9790995, 58517.81538729],
    longPeri: [131.60246718, 0.00268329],
    longNode: [76.67984255, -0.27769418]
  },
  earth: {
    a: 1.00000261,
    e: [0.01671123, -0.00004392],
    I: [0.00001531, -0.01294668],
    L: [100.46457166, 35999.37244981],
    longPeri: [102.93768193, 0.32327364],
    longNode: [0.0, 0.0]
  },
  mars: {
    a: 1.52371034,
    e: [0.09339410, 0.00007882],
    I: [1.84969142, -0.00813131],
    L: [-4.55343205, 19140.30268499],
    longPeri: [-23.94362959, 0.44441088],
    longNode: [49.55953891, -0.29257343]
  },
  jupiter: {
    a: 5.20288700,
    e: [0.04838624, -0.00013253],
    I: [1.30439695, -0.00183714],
    L: [34.39644051, 3034.74612775],
    longPeri: [14.72847983, 0.21252668],
    longNode: [100.47390909, 0.20469106]
  },
  saturn: {
    a: 9.53667594,
    e: [0.05386179, -0.00050991],
    I: [2.48599187, 0.00193609],
    L: [49.95424423, 1222.49362201],
    longPeri: [92.59887831, -0.41897216],
    longNode: [113.66242448, -0.28867794]
  }
};

function getHeliocentric(name: string, T: number): { x: number; y: number; z: number } {
  const el = PLANET_ELEMENTS[name];
  const a = el.a;
  const e = el.e[0] + el.e[1] * T;
  const I = toRad(el.I[0] + el.I[1] * T);
  const L = normalize360(el.L[0] + el.L[1] * T);
  const peri = normalize360(el.longPeri[0] + el.longPeri[1] * T);
  const node = normalize360(el.longNode[0] + el.longNode[1] * T);

  const M = toRad(normalize360(L - peri));
  const E = solveKepler(M, e);

  const xPrime = a * (Math.cos(E) - e);
  const yPrime = a * Math.sqrt(1 - e * e) * Math.sin(E);

  const periRad = toRad(peri);
  const nodeRad = toRad(node);
  const w = periRad - nodeRad;

  const x = (Math.cos(w) * Math.cos(nodeRad) - Math.sin(w) * Math.sin(nodeRad) * Math.cos(I)) * xPrime +
            (-Math.sin(w) * Math.cos(nodeRad) - Math.cos(w) * Math.sin(nodeRad) * Math.cos(I)) * yPrime;
  const y = (Math.cos(w) * Math.sin(nodeRad) + Math.sin(w) * Math.cos(nodeRad) * Math.cos(I)) * xPrime +
            (-Math.sin(w) * Math.sin(nodeRad) + Math.cos(w) * Math.cos(nodeRad) * Math.cos(I)) * yPrime;
  const z = (Math.sin(w) * Math.sin(I)) * xPrime + (Math.cos(w) * Math.sin(I)) * yPrime;

  return { x, y, z };
}

export function getPlanetSiderealLongitude(planetKey: PlanetKey, date: Date): number {
  const JD = getJulianDay(date);
  const T = (JD - 2451545.0) / 36525;
  const ayanamsha = getLahiriAyanamsha(T);

  if (planetKey === 'sun') {
    const earth = getHeliocentric('earth', T);
    const tropLon = normalize360(toDeg(Math.atan2(-earth.y, -earth.x)));
    return normalize360(tropLon - ayanamsha);
  }

  if (planetKey === 'moon') {
    const d = JD - 2451545.0;
    const moonL0 = normalize360(218.316 + 13.176396 * d);
    const moonM = normalize360(134.963 + 13.064993 * d);
    const sunM = normalize360(357.529 + 0.98560028 * d);
    const moonF = normalize360(93.272 + 13.229350 * d);
    const moonD = normalize360(297.850 + 12.190749 * d);

    const moonTropLon = normalize360(
      moonL0 +
      6.289 * Math.sin(toRad(moonM)) +
      1.274 * Math.sin(toRad(2 * moonD - moonM)) +
      0.658 * Math.sin(toRad(2 * moonD)) +
      0.214 * Math.sin(toRad(2 * moonM)) -
      0.186 * Math.sin(toRad(sunM)) -
      0.114 * Math.sin(toRad(2 * moonF))
    );
    return normalize360(moonTropLon - ayanamsha);
  }

  if (planetKey === 'rahu') {
    const rahuTropLon = normalize360(125.04452 - 1934.136261 * T);
    return normalize360(rahuTropLon - ayanamsha);
  }

  if (planetKey === 'ketu') {
    const rahuTropLon = normalize360(125.04452 - 1934.136261 * T);
    return normalize360(normalize360(rahuTropLon - ayanamsha) + 180);
  }

  const earth = getHeliocentric('earth', T);
  const helio = getHeliocentric(planetKey, T);
  const geoX = helio.x - earth.x;
  const geoY = helio.y - earth.y;
  const tropLon = normalize360(toDeg(Math.atan2(geoY, geoX)));
  return normalize360(tropLon - ayanamsha);
}

// Dignity evaluation
function getDignity(planetKey: PlanetKey, rasiIdx: number): { dignity: 'exalted' | 'own' | 'debilitated' | 'friendly' | 'enemy' | 'neutral'; labelTe: string } {
  // Exaltation (ఉచ్ఛ) and Debilitation (నీచ)
  const exaltations: Partial<Record<PlanetKey, number>> = {
    sun: 0,      // మేషం
    moon: 1,     // వృషభం
    mars: 9,     // మకరం
    mercury: 5,  // కన్య
    jupiter: 3,  // కర్కాటకం
    venus: 11,   // మీనం
    saturn: 6,   // తుల
    rahu: 1,     // వృషభం/మిథునం
    ketu: 7      // వృశ్చికం/ధనుస్సు
  };

  const debilitations: Partial<Record<PlanetKey, number>> = {
    sun: 6,      // తుల
    moon: 7,     // వృశ్చికం
    mars: 3,     // కర్కాటకం
    mercury: 11, // మీనం
    jupiter: 9,  // మకరం
    venus: 5,    // కన్య
    saturn: 0,   // మేషం
    rahu: 7,     // వృశ్చికం
    ketu: 1      // వృషభం
  };

  const ownSigns: Record<PlanetKey, number[]> = {
    sun: [4],
    moon: [3],
    mars: [0, 7],
    mercury: [2, 5],
    jupiter: [8, 11],
    venus: [1, 6],
    saturn: [9, 10],
    rahu: [10],
    ketu: [7]
  };

  if (exaltations[planetKey] === rasiIdx) return { dignity: 'exalted', labelTe: 'ఉచ్ఛ క్షేత్రం (Exalted)' };
  if (debilitations[planetKey] === rasiIdx) return { dignity: 'debilitated', labelTe: 'నీచ క్షేత్రం (Debilitated)' };
  if (ownSigns[planetKey].includes(rasiIdx)) return { dignity: 'own', labelTe: 'స్వక్షేత్రం (Own Sign)' };

  // Common friendly signs
  if (planetKey === 'sun' && [0, 3, 7, 8, 11].includes(rasiIdx)) return { dignity: 'friendly', labelTe: 'మిత్ర క్షేత్రం (Friendly)' };
  if (planetKey === 'moon' && [0, 4, 2, 5].includes(rasiIdx)) return { dignity: 'friendly', labelTe: 'మిత్ర క్షేత్రం (Friendly)' };
  if (planetKey === 'jupiter' && [0, 4, 7].includes(rasiIdx)) return { dignity: 'friendly', labelTe: 'మిత్ర క్షేత్రం (Friendly)' };
  if (planetKey === 'saturn' && [1, 2, 5, 6].includes(rasiIdx)) return { dignity: 'friendly', labelTe: 'మిత్ర క్షేత్రం (Friendly)' };

  return { dignity: 'neutral', labelTe: 'సమ క్షేత్రం (Neutral)' };
}

// ----------------------------------------------------------------------------
// TRANSITION BOUNDARY SEARCH (START & END DATES)
// ----------------------------------------------------------------------------

export interface TransitionBounds {
  currentRasi: number;
  entryDate: Date;
  exitDate: Date;
  nextRasi: number;
  durationDays: number;
  daysRemaining: number;
  daysElapsed: number;
  progressPercent: number;
}

export function findPlanetTransitionDates(planetKey: PlanetKey, targetDate: Date): TransitionBounds {
  const currentLon = getPlanetSiderealLongitude(planetKey, targetDate);
  const currentRasi = Math.floor(currentLon / 30);

  const stepDays = (planetKey === 'moon') ? 0.25 :
                   (planetKey === 'sun' || planetKey === 'mercury' || planetKey === 'venus') ? 1 :
                   (planetKey === 'mars') ? 2 :
                   (planetKey === 'jupiter') ? 10 :
                   (planetKey === 'saturn') ? 20 : 15;

  const tStart = targetDate.getTime();
  const step = stepDays * 86400000;
  const maxBackward = (planetKey === 'saturn') ? 4 * 365 * 86400000 :
                      (planetKey === 'rahu' || planetKey === 'ketu') ? 2.5 * 365 * 86400000 :
                      (planetKey === 'jupiter') ? 2 * 365 * 86400000 :
                      (planetKey === 'mars') ? 300 * 86400000 :
                      (planetKey === 'moon') ? 4 * 86400000 : 70 * 86400000;

  // Search backward
  const limit = tStart - maxBackward;
  let prevTime = tStart;
  let currTime = tStart - step;

  while (currTime >= limit) {
    const rasi = Math.floor(getPlanetSiderealLongitude(planetKey, new Date(currTime)) / 30);
    if (rasi !== currentRasi) break;
    prevTime = currTime;
    currTime -= step;
  }

  let low = currTime;
  let high = prevTime;
  for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2;
    const rasi = Math.floor(getPlanetSiderealLongitude(planetKey, new Date(mid)) / 30);
    if (rasi === currentRasi) {
      high = mid;
    } else {
      low = mid;
    }
  }
  const entryDate = new Date(high);

  // Search forward
  const fLimit = tStart + maxBackward;
  let fPrev = tStart;
  let fCurr = tStart + step;
  let nextRasi = currentRasi;

  while (fCurr <= fLimit) {
    const rasi = Math.floor(getPlanetSiderealLongitude(planetKey, new Date(fCurr)) / 30);
    if (rasi !== currentRasi) {
      nextRasi = rasi;
      break;
    }
    fPrev = fCurr;
    fCurr += step;
  }

  let fLow = fPrev;
  let fHigh = fCurr;
  for (let i = 0; i < 20; i++) {
    const mid = (fLow + fHigh) / 2;
    const rasi = Math.floor(getPlanetSiderealLongitude(planetKey, new Date(mid)) / 30);
    if (rasi === currentRasi) {
      fLow = mid;
    } else {
      fHigh = mid;
    }
  }
  const exitDate = new Date(fHigh);

  const durationDays = Math.max(0.1, Number(((exitDate.getTime() - entryDate.getTime()) / 86400000).toFixed(1)));
  const daysElapsed = Math.max(0, Number(((tStart - entryDate.getTime()) / 86400000).toFixed(1)));
  const daysRemaining = Math.max(0, Number(((exitDate.getTime() - tStart) / 86400000).toFixed(1)));
  const progressPercent = Math.min(100, Math.max(0, Math.round((daysElapsed / durationDays) * 100)));

  return {
    currentRasi,
    entryDate,
    exitDate,
    nextRasi,
    durationDays,
    daysRemaining,
    daysElapsed,
    progressPercent
  };
}

// ----------------------------------------------------------------------------
// COMPLETE PLANET RECORD BUILDER
// ----------------------------------------------------------------------------

export interface CompletePlanetInfo {
  meta: PlanetMeta;
  key: PlanetKey;
  siderealLongitude: number;
  rasiIndex: number;
  rasiNameTe: string;
  rasiNameEn: string;
  rasiDegree: number;
  degreeFormatted: string;
  nakshatraIndex: number;
  nakshatraNameTe: string;
  nakshatraNameEn: string;
  nakshatraPada: number;
  isRetrograde: boolean;
  dailySpeedDeg: number;
  dignity: 'exalted' | 'own' | 'debilitated' | 'friendly' | 'enemy' | 'neutral';
  dignityLabelTe: string;
  entryDate: Date;
  exitDate: Date;
  durationDays: number;
  daysRemaining: number;
  daysElapsed: number;
  progressPercent: number;
  nextRasiIndex: number;
  nextRasiNameTe: string;
  nextRasiNameEn: string;
  significanceTe: string;
  effect: TransitEffectInfo;
}

export function calculateAllPlanets(targetDate: Date): {
  planets: CompletePlanetInfo[];
  houses: { rasi: RasiDef; planets: CompletePlanetInfo[] }[];
  ayanamsha: number;
  nextMajorTransition: { planetNameTe: string; nextRasiNameTe: string; date: Date; daysRemaining: number } | null;
} {
  const JD = getJulianDay(targetDate);
  const T = (JD - 2451545.0) / 36525;
  const ayanamsha = getLahiriAyanamsha(T);

  const planetKeys: PlanetKey[] = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'];
  const planets: CompletePlanetInfo[] = [];

  // Next 1 day for retrograde detection
  const nextDay = new Date(targetDate.getTime() + 86400000);

  for (const k of planetKeys) {
    const meta = PLANETS_META[k];
    const lon = getPlanetSiderealLongitude(k, targetDate);
    const lonNext = getPlanetSiderealLongitude(k, nextDay);

    // Speed and retrograde
    let diff = lonNext - lon;
    if (diff < -180) diff += 360;
    if (diff > 180) diff -= 360;
    const isRetrograde = k === 'rahu' || k === 'ketu' ? true : diff < 0;

    const rasiIndex = Math.floor(lon / 30);
    const rasiDegree = lon % 30;
    const degInt = Math.floor(rasiDegree);
    const minInt = Math.floor((rasiDegree - degInt) * 60);
    const degreeFormatted = `${degInt}° ${minInt.toString().padStart(2, '0')}'`;

    // Nakshatra and Pada
    const nakshatraExact = lon / (360 / 27); // 13.3333 deg per nakshatra
    const nakshatraIndex = Math.floor(nakshatraExact);
    const nakshatraRemainder = lon % (360 / 27);
    const nakshatraPada = Math.floor(nakshatraRemainder / (360 / 108)) + 1; // 3.3333 deg per pada

    const { dignity, labelTe } = getDignity(k, rasiIndex);
    const bounds = findPlanetTransitionDates(k, targetDate);

    const rasi = RASIS_DATA[rasiIndex];
    const nextRasi = RASIS_DATA[bounds.nextRasi];

    let significance = '';
    if (k === 'saturn') significance = 'శని సంచారం 2.5 సం||లు. ఏలినాటి శని, అర్ధాష్టమ, అష్టమ శని ప్రభావము.';
    else if (k === 'jupiter') significance = 'గురు సంచారం 1 సం||రం. గురు బలం, శుభకార్యాలు, భాగ్యోదయం.';
    else if (k === 'rahu') significance = 'రాహు సంచారం 1.5 సం||లు. ఆకస్మిక మార్పులు, విదేశీ యోగం.';
    else if (k === 'ketu') significance = 'కేతు సంచారం 1.5 సం||లు. ఆధ్యాత్మిక వికాసం, జ్ఞానోదయం.';
    else if (k === 'sun') significance = 'రవి సంక్రమణం (ప్రతినెలా సంక్రాంతి). ప్రభుత్వ, పితృ, ఆరోగ్య లాభాలు.';
    else if (k === 'mars') significance = 'కుజ సంచారం ~45 రోజులు. భూమి, సోదర, రియల్ ఎస్టేట్ లావాదేవీలు.';
    else if (k === 'mercury') significance = 'బుధ సంచారం ~1 నెల. వ్యాపార, విద్యా, మేధో వికాసం.';
    else if (k === 'venus') significance = 'శుక్ర సంచారం ~1 నెల. వైవాహిక, కళా, విలాస వస్తు ప్రాప్తి.';
    else if (k === 'moon') significance = 'చంద్ర సంచారం 2.25 రోజులు. దినవారీ మనఃస్థితి, చంద్రబలం.';

    planets.push({
      meta,
      key: k,
      siderealLongitude: lon,
      rasiIndex,
      rasiNameTe: rasi.nameTe,
      rasiNameEn: rasi.nameEn,
      rasiDegree,
      degreeFormatted,
      nakshatraIndex,
      nakshatraNameTe: NAKSHATRAS_TE[nakshatraIndex],
      nakshatraNameEn: NAKSHATRAS_EN[nakshatraIndex],
      nakshatraPada,
      isRetrograde,
      dailySpeedDeg: Math.abs(diff),
      dignity,
      dignityLabelTe: labelTe,
      entryDate: bounds.entryDate,
      exitDate: bounds.exitDate,
      durationDays: bounds.durationDays,
      daysRemaining: bounds.daysRemaining,
      daysElapsed: bounds.daysElapsed,
      progressPercent: bounds.progressPercent,
      nextRasiIndex: bounds.nextRasi,
      nextRasiNameTe: nextRasi.nameTe,
      nextRasiNameEn: nextRasi.nameEn,
      significanceTe: significance,
      effect: getPlanetInRasiEffect(k, rasiIndex)
    });
  }

  // Group planets by house/rasi
  const houses = RASIS_DATA.map(r => ({
    rasi: r,
    planets: planets.filter(p => p.rasiIndex === r.index)
  }));

  // Find next upcoming transition (excluding moon which changes every 2 days, or including next major)
  const majorTransitions = planets
    .filter(p => p.key !== 'moon')
    .sort((a, b) => a.exitDate.getTime() - b.exitDate.getTime());

  const nextMajor = majorTransitions.length > 0 ? {
    planetNameTe: majorTransitions[0].meta.nameTe,
    nextRasiNameTe: majorTransitions[0].nextRasiNameTe,
    date: majorTransitions[0].exitDate,
    daysRemaining: majorTransitions[0].daysRemaining
  } : null;

  return {
    planets,
    houses,
    ayanamsha,
    nextMajorTransition: nextMajor
  };
}
