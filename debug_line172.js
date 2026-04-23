const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');

console.log('Line 172 length: ' + lines[171].length);
console.log('Line 172 last 100 chars: ' + JSON.stringify(lines[171].slice(-100)));
console.log('Line 172 full: ' + lines[171]);
