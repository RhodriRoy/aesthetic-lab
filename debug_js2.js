const fs = require('fs');
const content = fs.readFileSync('D:\\\\01_Projects\\\\01-Coding\\\\ui-ux-pro-max-reference\\\\arch-mood-board-reference\\\\index.html', 'utf8');
const m = content.match(/<script>([\s\S]*?)<\/script>/);
const js = m[1];

// Find the exact line with syntax error using binary search
const lines = js.split('\n');
let low = 0, high = lines.length;
let errorLine = -1;

while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const testCode = lines.slice(0, mid + 1).join('\n');
    try {
        new Function(testCode);
        low = mid + 1;
    } catch (e) {
        high = mid;
        errorLine = mid;
    }
}

if (errorLine >= 0) {
    console.log('Error around line ' + (errorLine + 1));
    for (let i = Math.max(0, errorLine - 5); i <= Math.min(lines.length - 1, errorLine + 5); i++) {
        const marker = i === errorLine ? ' >>> ' : '     ';
        console.log(marker + (i + 1) + ': ' + lines[i].substring(0, 120));
    }
} else {
    console.log('No syntax error found');
}
