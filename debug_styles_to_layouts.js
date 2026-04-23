const fs = require('fs');
const js = fs.readFileSync('D:\\tmp_full_script.js', 'utf8');

const start = js.indexOf('function renderStyles');
const end = js.indexOf('function drawLayoutPreview');
const segment = js.substring(start, end);

try {
    new Function(segment);
    console.log('renderStyles->renderLayouts OK');
} catch(e) {
    console.log('ERROR: ' + e.message);
    // Find the problematic area
    const lines = segment.split('\n');
    let low = 0, high = lines.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const testCode = lines.slice(0, mid + 1).join('\n');
        try {
            new Function(testCode);
            low = mid + 1;
        } catch (err) {
            high = mid;
        }
    }
    console.log('Error at line ' + (low + 1) + ' of segment');
    for (let i = Math.max(0, low - 3); i <= Math.min(lines.length - 1, low + 2); i++) {
        const marker = i === low ? ' >>> ' : '     ';
        console.log(marker + (i + 1) + ': ' + lines[i].substring(0, 120));
    }
}
