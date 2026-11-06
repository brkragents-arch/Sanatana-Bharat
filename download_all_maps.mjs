import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const mapTargets = [
  {
    id: 'china',
    filename: 'civ_china_map.jpg',
    query: 'Shang dynasty map en',
    fallbackQuery: 'Shang dynasty territory'
  },
  {
    id: 'greece',
    filename: 'civ_greece_map.jpg',
    query: 'Map of ancient Greece and Aegean',
    fallbackQuery: 'Ancient Greece map en'
  },
  {
    id: 'rome',
    filename: 'civ_rome_map.jpg',
    query: 'Roman Empire map 117 AD',
    fallbackQuery: 'Roman Empire map en'
  },
  {
    id: 'persia',
    filename: 'civ_persia_map.jpg',
    query: 'Achaemenid Empire detailed map',
    fallbackQuery: 'Achaemenid Empire map en'
  },
  {
    id: 'maya',
    filename: 'civ_maya_map.jpg',
    query: 'Maya civilization map Mesoamerica',
    fallbackQuery: 'Maya civilization map en'
  },
  {
    id: 'inca',
    filename: 'civ_inca_map.jpg',
    query: 'Inca Empire map Tawantinsuyu',
    fallbackQuery: 'Inca Empire map en'
  },
  {
    id: 'indigenous',
    filename: 'civ_indigenous_map.jpg',
    query: 'Ancestral Puebloan culture map',
    fallbackQuery: 'Four Corners region Anasazi map'
  }
];

const outDir = 'public/images/indian_history/civilization_portraits';

async function fetchThumbnailUrl(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=1000&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'MythologyCivilizationApp/1.0 (historical-educational)' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  for (const k of Object.keys(pages)) {
    const info = pages[k].imageinfo?.[0];
    const thumb = info?.thumburl || info?.url;
    if (thumb) return { title: pages[k].title, url: thumb };
  }
  return null;
}

async function processAll() {
  for (const target of mapTargets) {
    console.log(`Searching map for ${target.id}...`);
    let result = await fetchThumbnailUrl(target.query);
    if (!result) {
      result = await fetchThumbnailUrl(target.fallbackQuery);
    }
    if (result) {
      console.log(`Found ${result.title} -> ${result.url}`);
      try {
        const imgRes = await fetch(result.url, { headers: { 'User-Agent': 'MythologyCivilizationApp/1.0' } });
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        const outPath = path.join(outDir, target.filename);
        await sharp(buffer)
          .resize(800, 520, { fit: 'cover', position: 'center' })
          .sharpen({ sigma: 1.0 })
          .jpeg({ quality: 92 })
          .toFile(outPath);
        console.log(`Successfully saved ${outPath}!`);
      } catch (err) {
        console.error(`Error saving ${target.filename}:`, err.message);
      }
    } else {
      console.warn(`No map found for ${target.id}`);
    }
  }
}

processAll().catch(console.error);
