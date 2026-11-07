const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Copy 1-6 to new epoch filenames
const mapGen = [
  { src: 'timeline_indus_valley.jpg', dest: 'epoch_01_indus_valley.jpg' },
  { src: 'timeline_vedic_age.jpg', dest: 'epoch_02_vedic_age.jpg' },
  { src: 'timeline_mahajanapadas.jpg', dest: 'epoch_03_mahajanapadas.jpg' },
  { src: 'timeline_mauryan_empire.jpg', dest: 'epoch_04_mauryan_empire.jpg' },
  { src: 'timeline_post_mauryan.jpg', dest: 'epoch_05_post_mauryan.jpg' },
  { src: 'timeline_gupta_age.jpg', dest: 'epoch_06_gupta_age.jpg' }
];

mapGen.forEach(m => {
  const src = path.join('public/images/indian_history/grand_overview', m.src);
  const dest = path.join('public/images/indian_history/grand_overview', m.dest);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${m.src} -> ${m.dest}`);
});

// 2. Download and process 7-11
const downloads = [
  {
    dest: 'epoch_07_early_medieval.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/MN331_Temple_of_Tanjore%2C_Southern_India.jpg'
  },
  {
    dest: 'epoch_08_delhi_sultanate.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/QUTB_MINAR_DSC_0655.jpg'
  },
  {
    dest: 'epoch_09_mughal_empire.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg'
  },
  {
    dest: 'epoch_10_british_rule.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg'
  },
  {
    dest: 'epoch_11_independent_india.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/India_Gate%2C_New_Delhi.jpg'
  }
];

async function downloadAndProcess() {
  for (const item of downloads) {
    try {
      console.log(`Downloading ${item.dest}...`);
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'SanatanaBharatApp/1.0 (contact@sanatanabharat.org)' }
      });
      const buffer = Buffer.from(await res.arrayBuffer());
      const destPath = path.join('public/images/indian_history/grand_overview', item.dest);
      await sharp(buffer)
        .resize(1280, 720, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 88 })
        .toFile(destPath);
      console.log(`Saved ${item.dest}`);
    } catch (err) {
      console.error(`Failed ${item.dest}:`, err.message);
    }
  }
}

downloadAndProcess();
