const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');

const half = Math.floor(lines.length / 2);
const firstHalf = lines.slice(0, half).join('\n');
const secondHalf = lines.slice(half).join('\n');

try {
    new Function(firstHalf);
    console.log('First half syntax OK');
} catch(e) {
    console.log('First half ERROR: ' + e.message);
}

try {
    new Function(secondHalf);
    console.log('Second half syntax OK');
} catch(e) {
    console.log('Second half ERROR: ' + e.message);
}
