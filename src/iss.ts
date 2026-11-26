const API = 'https://api.wheretheiss.at/v1';
const ISS_NORAD_ID = 25544;

interface IssPosition {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: 'daylight' | 'eclipsed' | 'visible';
}

/**
 * Name the open water at a point, roughly. The ISS's orbit stays within about
 * 52° of the equator, so the polar oceans never come up.
 */
function oceanAt(lat: number, lon: number): string {
  if (lat > 30 && lat < 46 && lon > -6 && lon < 36) return 'the Mediterranean';
  if (lat > 0 && lat < 23 && lon > 105 && lon < 121) return 'the South China Sea';
  const half = lat >= 0 ? 'North' : 'South';
  const indian = (lon > 20 && lon < 120 && lat < 25) || (lon >= 120 && lon < 147 && lat < -10);
  if (indian) return 'the Indian Ocean';
  // The Atlantic reaches further west in the north, around the Caribbean.
  const atlantic = lat >= 10 ? lon > -98 && lon < 0 : lon > -70 && lon < 20;
  if (atlantic) return `the ${half} Atlantic`;
  return `the ${half} Pacific`;
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} from ${url}`);
  return res.json() as Promise<T>;
}

// Country names that read as "over the …".
const WITH_THE = new Set([
  'AE',
  'BS',
  'CD',
  'CF',
  'DO',
  'GB',
  'GM',
  'MH',
  'MV',
  'NL',
  'PH',
  'SB',
  'US',
]);

/** A one-line description of where the ISS is right now. */
export async function whereIsTheIss(): Promise<string> {
  const iss = await getJson<IssPosition>(`${API}/satellites/${ISS_NORAD_ID}`);
  const { country_code: code } = await getJson<{ country_code: string }>(
    `${API}/coordinates/${iss.latitude.toFixed(3)},${iss.longitude.toFixed(3)}`,
  );
  let place = oceanAt(iss.latitude, iss.longitude);
  if (code && code !== '??') {
    const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code;
    place = WITH_THE.has(code) ? `the ${name}` : name;
  }
  const light = iss.visibility === 'eclipsed' ? "in Earth's shadow" : 'in sunlight';
  const km = (n: number) => Math.round(n).toLocaleString('en-US');
  return `The ISS is over ${place}, ${km(iss.altitude)} km up and ${light}, moving at ${km(iss.velocity)} km/h.`;
}
