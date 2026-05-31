#!/usr/bin/env node
/**
 * generate-icons.js
 * Generates all required PWA and Microsoft Store tile images
 * using Sharp + SVG source — fully original, no copyrighted imagery.
 *
 * Run: node scripts/generate-icons.js
 * Output: /public/icons/
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// ─── SVG source: dark bg + controller + gold star + "OWC" in neon cyan ───────
function makeSvg(width, height, fontSize = 48) {
  const cx = width / 2;
  const cy = height / 2;

  // Controller body proportional to canvas
  const scale = Math.min(width, height) / 512;
  const cw = 220 * scale;
  const ch = 140 * scale;
  const cr = 40 * scale;
  const lx = cx - cw / 2;
  const ty = cy - ch / 2 - 20 * scale;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#1E1E1E" rx="${Math.round(width * 0.08)}"/>

  <!-- Subtle grid texture -->
  <defs>
    <pattern id="grid" width="${20 * scale}" height="${20 * scale}" patternUnits="userSpaceOnUse">
      <path d="M ${20 * scale} 0 L 0 0 0 ${20 * scale}" fill="none" stroke="#2a2a2a" stroke-width="0.5"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00FFCC" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#00FFCC" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grid)" rx="${Math.round(width * 0.08)}"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${width * 0.4}" ry="${height * 0.4}" fill="url(#glow)"/>

  <!-- Game Controller (original geometric shape) -->
  <g transform="translate(${cx}, ${cy - 15 * scale})">
    <!-- Controller body -->
    <rect x="${-cw / 2}" y="${-ch / 2}" width="${cw}" height="${ch}" rx="${cr}" ry="${cr}"
          fill="none" stroke="#00FFCC" stroke-width="${3 * scale}" opacity="0.9"/>

    <!-- Left grip -->
    <path d="M ${-cw / 2 + 5 * scale},${ch / 4}
             Q ${-cw / 2 - 18 * scale},${ch / 2 + 10 * scale}
               ${-cw / 2 - 5 * scale},${ch / 2 + 30 * scale}
             Q ${-cw / 4},${ch / 2 + 45 * scale}
               ${-cw / 4 + 15 * scale},${ch / 4}"
          fill="none" stroke="#00FFCC" stroke-width="${3 * scale}" opacity="0.9"/>

    <!-- Right grip -->
    <path d="M ${cw / 2 - 5 * scale},${ch / 4}
             Q ${cw / 2 + 18 * scale},${ch / 2 + 10 * scale}
               ${cw / 2 + 5 * scale},${ch / 2 + 30 * scale}
             Q ${cw / 4},${ch / 2 + 45 * scale}
               ${cw / 4 - 15 * scale},${ch / 4}"
          fill="none" stroke="#00FFCC" stroke-width="${3 * scale}" opacity="0.9"/>

    <!-- D-pad -->
    <rect x="${-cw / 2 + 35 * scale}" y="${-8 * scale}" width="${16 * scale}" height="${16 * scale}"
          rx="${2 * scale}" fill="#00FFCC" opacity="0.7"/>
    <rect x="${-cw / 2 + 27 * scale}" y="${0}" width="${16 * scale}" height="${16 * scale}"
          rx="${2 * scale}" fill="#00FFCC" opacity="0.7" transform="rotate(-90, ${-cw / 2 + 35 * scale}, ${8 * scale})"/>

    <!-- Action buttons (circles) -->
    <circle cx="${cw / 2 - 35 * scale}" cy="${0}" r="${5 * scale}" fill="#ff6b00" opacity="0.85"/>
    <circle cx="${cw / 2 - 50 * scale}" cy="${-10 * scale}" r="${5 * scale}" fill="#00FFCC" opacity="0.85"/>
    <circle cx="${cw / 2 - 20 * scale}" cy="${-10 * scale}" r="${5 * scale}" fill="#8B5CF6" opacity="0.85"/>
    <circle cx="${cw / 2 - 35 * scale}" cy="${-20 * scale}" r="${5 * scale}" fill="#22C55E" opacity="0.85"/>

    <!-- Center home button -->
    <circle cx="0" cy="${-ch / 2 + 18 * scale}" r="${8 * scale}" fill="#00FFCC" opacity="0.5"
            stroke="#00FFCC" stroke-width="${1.5 * scale}"/>
  </g>

  <!-- Gold star (top-right accent) -->
  <g transform="translate(${width * 0.78}, ${height * 0.22})">
    <polygon points="0,-${12 * scale} ${3.5 * scale},-${4 * scale} ${12 * scale},-${4 * scale}
                     ${5.5 * scale},${2 * scale} ${8 * scale},${11 * scale} 0,${6 * scale}
                     ${-8 * scale},${11 * scale} ${-5.5 * scale},${2 * scale}
                     ${-12 * scale},-${4 * scale} ${-3.5 * scale},-${4 * scale}"
            fill="#FFD700" opacity="0.9"/>
  </g>

  <!-- "OWC" text -->
  <text x="${cx}" y="${height * 0.88}"
        font-family="monospace" font-weight="bold" font-size="${fontSize * scale}"
        fill="#00FFCC" text-anchor="middle" letter-spacing="${3 * scale}"
        opacity="0.95">OWC</text>
</svg>`;
}

// Wide 310x150 tile (landscape)
function makeWideSvg(width, height) {
  const scale = height / 150;
  const cx = width / 2;
  const cy = height / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#1E1E1E"/>
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a2a2a" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Controller icon left side -->
  <g transform="translate(${width * 0.22}, ${cy})">
    <rect x="-45" y="-28" width="90" height="56" rx="16" ry="16"
          fill="none" stroke="#00FFCC" stroke-width="2.5" opacity="0.9"/>
    <circle cx="-18" cy="0" r="8" fill="none" stroke="#00FFCC" stroke-width="2"/>
    <circle cx="-14" cy="-4" r="3" fill="#00FFCC" opacity="0.7"/>
    <circle cx="-22" cy="-4" r="3" fill="#00FFCC" opacity="0.7"/>
    <circle cx="-18" cy="4" r="3" fill="#00FFCC" opacity="0.7"/>
    <circle cx="18" cy="-8" r="4" fill="#ff6b00" opacity="0.85"/>
    <circle cx="26" cy="-2" r="4" fill="#00FFCC" opacity="0.85"/>
    <circle cx="10" cy="-2" r="4" fill="#8B5CF6" opacity="0.85"/>
    <circle cx="18" cy="4" r="4" fill="#22C55E" opacity="0.85"/>
  </g>

  <!-- Gold star -->
  <polygon points="${width * 0.44},-8 ${width * 0.44 + 4},-2 ${width * 0.44 + 13},-2
                   ${width * 0.44 + 6},3 ${width * 0.44 + 9},12 ${width * 0.44},7
                   ${width * 0.44 - 9},12 ${width * 0.44 - 6},3 ${width * 0.44 - 13},-2
                   ${width * 0.44 - 4},-2"
           fill="#FFD700" opacity="0.9" transform="translate(0, ${cy - 6})"/>

  <!-- App name text -->
  <text x="${width * 0.66}" y="${cy - 10}"
        font-family="monospace" font-weight="bold" font-size="28"
        fill="#00FFCC" text-anchor="middle" letter-spacing="2" opacity="0.95">OWC</text>
  <text x="${width * 0.66}" y="${cy + 14}"
        font-family="monospace" font-size="11"
        fill="#888" text-anchor="middle" letter-spacing="1">OPEN WORLD CHEATS</text>
</svg>`;
}

const specs = [
  { name: 'icon-192.png',    w: 192,  h: 192,  fs: 44 },
  { name: 'icon-512.png',    w: 512,  h: 512,  fs: 44 },
  { name: 'Square44x44.png', w: 44,   h: 44,   fs: 18 },
  { name: 'Square150x150.png', w: 150, h: 150, fs: 40 },
  { name: 'store-logo.png',  w: 300,  h: 300,  fs: 56 },
  { name: 'favicon-32.png',  w: 32,   h: 32,   fs: 14 },
];

async function main() {
  console.log('Generating Open World Cheats icons...\n');

  for (const spec of specs) {
    const svg = makeSvg(spec.w, spec.h, spec.fs);
    const outPath = path.join(outDir, spec.name);
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`✓ ${spec.name} (${spec.w}×${spec.h})`);
  }

  // Wide tile
  const wideSvg = makeWideSvg(310, 150);
  const widePath = path.join(outDir, 'Wide310x150.png');
  await sharp(Buffer.from(wideSvg)).png().toFile(widePath);
  console.log('✓ Wide310x150.png (310×150)');

  console.log('\n✅ All icons generated in /public/icons/');
  console.log('   No copyrighted imagery — original geometric designs only.');
}

main().catch(console.error);
