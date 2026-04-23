const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');

console.log('Line 174: ' + lines[173]);
console.log('Line 175: ' + lines[174].substring(0, 200));
console.log('Line 176: ' + lines[175].substring(0, 200));
console.log('Line 177: ' + lines[176].substring(0, 200));
console.log('Line 178: ' + lines[177].substring(0, 200));
console.log('Line 179: ' + lines[178].substring(0, 200));

// Check if exportConfig has balanced braces
const fnText = lines.slice(173, 179).join('\n');
let brace = 0;
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
    if (ch === '{') brace++;
    if (ch === '}') brace--;
}
console.log('\nexportConfig brace balance: ' + brace);
