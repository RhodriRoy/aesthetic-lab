const fs = require('fs');
const js = fs.readFileSync('D:\\tmp_full_script.js', 'utf8');

const start = js.indexOf('function renderLayouts');
const end = js.indexOf('function drawLayoutPreview');
const segment = js.substring(start, end);

console.log('Segment length: ' + segment.length);
console.log('Full segment:');
console.log(segment);

// Check parens
let paren = 0, brace = 0;
let inString = null, escape = false;
for (let i = 0; i < segment.length; i++) {
    const ch = segment[i];
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
    if (ch === '{') brace++;
    if (ch === '}') brace--;
}
console.log('\nParen: ' + paren + ' Brace: ' + brace);
