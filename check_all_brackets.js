const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const scriptStart = content.indexOf('<script>') + 8;
const scriptEnd = content.lastIndexOf('</script>');
const js = content.substring(scriptStart, scriptEnd);

let paren = 0, bracket = 0, brace = 0, backtick = 0;
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
        if (ch === '`') backtick++;
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
console.log('Backtick count: ' + backtick);
console.log('Backtick even: ' + (backtick % 2 === 0));

// Also check for regex literals that might confuse parser
// Find all occurrences of / followed by non-space
let slashCount = 0;
for (let i = 0; i < js.length - 1; i++) {
    if (js[i] === '/' && js[i+1] !== '/' && js[i+1] !== '*' && js[i+1] !== ' ' && js[i+1] !== '\n' && js[i+1] !== '\t') {
        slashCount++;
    }
}
console.log('Potential regex starts: ' + slashCount);
