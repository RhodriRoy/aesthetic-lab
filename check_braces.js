const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];

let paren = 0, bracket = 0, brace = 0;
let inString = null, escape = false;
for (let i = 0; i < js.length; i++) {
    const ch = js[i];
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
    if (ch === '[') bracket++;
    if (ch === ']') bracket--;
    if (ch === '{') brace++;
    if (ch === '}') brace--;
}
console.log('Paren balance: ' + paren);
console.log('Bracket balance: ' + bracket);
console.log('Brace balance: ' + brace);
