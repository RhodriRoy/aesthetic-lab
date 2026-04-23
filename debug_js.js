const fs = require('fs');
const content = fs.readFileSync('D:\\\\01_Projects\\\\01-Coding\\\\ui-ux-pro-max-reference\\\\arch-mood-board-reference\\\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');
for (let i = 0; i < 30; i++) {
    console.log((i+1) + ': ' + lines[i].substring(0, 100));
}
