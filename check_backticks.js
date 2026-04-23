const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];

let backtickCount = 0;
let escape = false;
for (let i = 0; i < js.length; i++) {
    const ch = js[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === '`') backtickCount++;
}
console.log('Backtick count: ' + backtickCount);
console.log('Backtick balanced: ' + (backtickCount % 2 === 0 ? 'YES' : 'NO'));

// Find the line with the last backtick
const lines = js.split('\n');
let lastBacktickLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('`')) lastBacktickLine = i;
}
console.log('Last backtick at line: ' + (lastBacktickLine + 1));
console.log('That line: ' + lines[lastBacktickLine].substring(0, 120));
