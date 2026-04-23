const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];

// Binary search for syntax error
const lines = js.split('\n');
let low = 0, high = lines.length;
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
for (let i = Math.max(0, errorLine - 3); i <= Math.min(lines.length - 1, errorLine + 1); i++) {
    const marker = i === errorLine ? ' >>> ' : '     ';
    console.log(marker + (i + 1) + ': ' + lines[i].substring(0, 120));
}

// Now try with the line before to see what's wrong
if (errorLine > 0) {
    const badCode = lines.slice(0, errorLine + 1).join('\n');
    try {
        new Function(badCode);
    } catch (e) {
        console.log('\nError message: ' + e.message);
    }
}
