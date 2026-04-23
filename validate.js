const fs = require('fs');

const path = 'D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html';
const content = fs.readFileSync(path, 'utf8');

// Extract JS from script tags
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
    console.log('No script tag found');
    process.exit(1);
}

const js = scriptMatch[1];

// Check for required functions
const required = [
    'function seededRandom',
    'function generateIrregularCSS',
    'function updateEffectParams',
    'function randomizeEffectParams',
    'function newEffectSeed',
    'function resetEffectParams',
    'function updateEffectSliders',
    'function applyArtEffect',
    'function renderEffects',
    'artEffectParams',
    'overlay-layer texture',
    'overlay-layer filter',
    'overlay-layer particles',
    'fauvism-tremor',
    'body.art-effect-9 h1',
    'body.art-effect-9 h2',
    'body.art-effect-9 h3',
    'ae-intensity',
    'ae-irregularity',
    'ae-filter'
];

let allGood = true;
for (const r of required) {
    if (!content.includes(r)) {
        console.log('MISSING: ' + r);
        allGood = false;
    }
}

if (allGood) {
    console.log('All required elements found!');
}

// Try basic JS syntax check by wrapping in a function
try {
    new Function(js);
    console.log('JS syntax: OK');
} catch (e) {
    console.log('JS SYNTAX ERROR: ' + e.message);
}

// Count lines
const lines = content.split('\n');
console.log('Total lines: ' + lines.length);
console.log('Total size: ' + content.length + ' bytes');
