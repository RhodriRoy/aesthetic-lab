const fs = require('fs');
const js = fs.readFileSync('D:\\tmp_full_script.js', 'utf8');

// Try parsing segments
const markerFuncs = [
    'function seededRandom',
    'function generateIrregularCSS',
    'function updateEffectParams',
    'function randomizeEffectParams',
    'function newEffectSeed',
    'function resetEffectParams',
    'function updateEffectSliders',
    'function saveState',
    'function loadState',
    'function resetState',
    'function getComboKey',
    'function isFavorite',
    'function toggleFavorite',
    'function updateFavoriteBtn',
    'function randomCombo',
    'function exportConfig',
    'function applyColorScheme',
    'function renderStyles',
    'function renderLayouts',
    'function drawLayoutPreview',
    'function renderDrawings',
    'function renderColors',
    'function renderMaterials',
    'function renderPreview',
    'function renderPreviewA0',
    'function renderPreviewA3',
    'function renderPreviewSquare',
    'function renderPreviewMood',
    'function renderPrompts',
    'function generateCombinedPrompt',
    'function copyPrompt',
    'function selectStyle',
    'function selectLayout',
    'function selectDrawing',
    'function selectColorScheme',
    'function selectMaterial',
    'function updateActiveCards',
    'function switchTab',
    'function switchPreviewMode',
    'function filterStyles',
    'function filterLayouts',
    'function filterDrawings',
    'function filterColorsCategory',
    'function filterMaterials',
    'function showToast',
    'function renderEffects',
    'function selectEffect',
    'function applyArtEffect',
    'function filterEffects',
    'function filterEffectsCategory'
];

let lastGood = 0;
for (let i = 1; i < markerFuncs.length; i++) {
    const start = js.indexOf(markerFuncs[i-1]);
    const end = js.indexOf(markerFuncs[i]);
    if (start === -1 || end === -1) continue;
    const segment = js.substring(start, end);
    try {
        new Function(segment);
    } catch(e) {
        console.log('BAD: ' + markerFuncs[i-1] + ' -> ' + e.message);
        console.log('Segment preview: ' + segment.substring(0, 150));
    }
}

// Also check the last segment
const lastStart = js.indexOf(markerFuncs[markerFuncs.length-1]);
const lastSegment = js.substring(lastStart);
try {
    new Function(lastSegment);
} catch(e) {
    console.log('BAD last: ' + markerFuncs[markerFuncs.length-1] + ' -> ' + e.message);
}

console.log('Segment check done');
