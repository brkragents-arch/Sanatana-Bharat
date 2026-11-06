const sharp = require('sharp');
const fs = require('fs');

const medallions = [
  // 1-4: Cosmic Expansions
  { name: 'krsna_supreme.jpg', x: 255, y: 92, r: 68 },
  { name: 'mahavishnu_karanodaka.jpg', x: 462, y: 84, r: 58 },
  { name: 'garbhodakasayi_vishnu.jpg', x: 647, y: 84, r: 58 },
  { name: 'brahma_lotus.jpg', x: 814, y: 84, r: 58 },

  // 5-9: Sages & Brahma Sons
  { name: 'narada_muni.jpg', x: 106, y: 246, r: 21 },
  { name: 'siva_parivara.jpg', x: 147, y: 270, r: 23 },
  { name: 'four_kumaras.jpg', x: 191, y: 245, r: 21 },
  { name: 'veda_vyasa.jpg', x: 244, y: 272, r: 21 },
  { name: 'sukadeva_goswami.jpg', x: 185, y: 337, r: 21 },

  // 10-12: Prahlada, Bali, Vamana
  { name: 'prahlada_maharaja.jpg', x: 228, y: 355, r: 23 },
  { name: 'bali_maharaja.jpg', x: 318, y: 402, r: 21 },
  { name: 'vaman_deva.jpg', x: 395, y: 338, r: 21 },

  // 13-16: Ravana, Dhruva, Kapila, Ambarisha
  { name: 'ravana_lanka.jpg', x: 868, y: 270, r: 21 },
  { name: 'dhruva_maharaja.jpg', x: 622, y: 422, r: 24 },
  { name: 'lord_kapila.jpg', x: 885, y: 410, r: 23 },
  { name: 'ambarisa_maharaja.jpg', x: 478, y: 507, r: 23 },

  // 17-23: Chandra Dynasty / Pandavas
  { name: 'parasurama.jpg', x: 48, y: 540, r: 24 },
  { name: 'lord_balarama.jpg', x: 40, y: 765, r: 28 },
  { name: 'lord_krsna_leela.jpg', x: 160, y: 715, r: 46 },
  { name: 'bhishma_ganga.jpg', x: 180, y: 810, r: 20 },
  { name: 'draupadi_vastra.jpg', x: 220, y: 825, r: 20 },
  { name: 'pandavas_arjuna.jpg', x: 104, y: 920, r: 20 },
  { name: 'pariksit_sukadeva.jpg', x: 120, y: 975, r: 22 },

  // 24-26: Solar Dynasty
  { name: 'sita_devi.jpg', x: 308, y: 685, r: 24 },
  { name: 'bhagiratha.jpg', x: 388, y: 715, r: 22 },
  { name: 'lord_ramacandra.jpg', x: 350, y: 920, r: 35 },

  // 27-30: Manu Dynasty Kings
  { name: 'lord_rsabhadeva.jpg', x: 483, y: 643, r: 23 },
  { name: 'king_bharata.jpg', x: 445, y: 868, r: 23 },
  { name: 'king_prthu.jpg', x: 693, y: 710, r: 23 },
  { name: 'daksha_prajapati.jpg', x: 597, y: 880, r: 23 },

  // 31-33: Ascetics & Incarnations
  { name: 'lord_dattatreya.jpg', x: 816, y: 580, r: 23 },
  { name: 'durvasa_muni.jpg', x: 895, y: 615, r: 21 },
  { name: 'nara_narayana.jpg', x: 767, y: 735, r: 40 }
];

async function extractAll() {
  const size = 300;
  const svgMask = `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2 - 3}" fill="white"/></svg>`;
  const circleMask = Buffer.from(svgMask);

  for (const m of medallions) {
    const left = Math.max(0, Math.min(916 - m.r * 2, Math.round(m.x - m.r)));
    const top = Math.max(0, Math.min(1024 - m.r * 2, Math.round(m.y - m.r)));
    const w = m.r * 2;
    const h = m.r * 2;

    const base = await sharp('public/images/srimad_bhagavatam_tree_full.jpg')
      .extract({ left, top, width: w, height: h })
      .resize(size, size, { fit: 'cover' })
      .sharpen({ sigma: 1.1, m1: 1.4, m2: 0.7 })
      .modulate({ contrast: 1.12, saturation: 1.08 })
      .toBuffer();

    const circle = await sharp(base)
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png()
      .toBuffer();

    const finalMedallion = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{ input: circle, left: 0, top: 0 }])
    .jpeg({ quality: 95 })
    .toBuffer();

    fs.writeFileSync('public/images/bhagavatam/' + m.name, finalMedallion);
    if (fs.existsSync('dist/images/bhagavatam')) {
      fs.writeFileSync('dist/images/bhagavatam/' + m.name, finalMedallion);
    }
  }
  console.log('Successfully generated all ' + medallions.length + ' pixel-perfect medallions!');
}

extractAll();
