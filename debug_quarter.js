const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];
const lines = js.split('\n');

// Binary search in first half
let low = 0, high = Math.floor(lines.length / 2);
while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const testCode = lines.slice(0, mid + 1).join('\n');
    try {
        new Function(testCode);
        low = mid + 1;
    } catch (e) {
        high = mid;
    }
}

const errorLine = low;
console.log('Error at line ' + (errorLine + 1));
for (let i = Math.max(0, errorLine - 5); i <= Math.min(lines.length - 1, errorLine + 2); i++) {
    const marker = i === errorLine ? ' >>> ' : '     ';
    console.log(marker + (i + 1) + ': ' + lines[i].substring(0, 120));
}
