const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');

// Print randomCombo function in detail
const start = lines.findIndex(l => l.includes('function randomCombo()'));
const end = lines.findIndex(l => l.includes('// Export'));
console.log('randomCombo spans lines ' + (start+1) + ' to ' + (end+1));
const fnLines = lines.slice(start, end);
for (let i = 0; i < fnLines.length; i++) {
    console.log((start + i + 1) + ': ' + fnLines[i]);
}

// Check paren balance in randomCombo
const fnText = fnLines.join('\n');
let paren = 0;
let inString = null, escape = false;
for (let i = 0; i < fnText.length; i++) {
    const ch = fnText[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (inString) {
        if (ch === inString) inString = null;
        continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
        inString = ch;
        continue;
    }
    if (ch === '(') paren++;
    if (ch === ')') paren--;
}
console.log('\nParen balance in randomCombo: ' + paren);
