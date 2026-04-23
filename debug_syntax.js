const fs = require('fs');

const path = 'D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html';
const content = fs.readFileSync(path, 'utf8');

const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const js = scriptMatch[1];

// Try to find the error by line
const lines = js.split('\n');
let accumulated = '';
for (let i = 0; i < lines.length; i++) {
    accumulated += lines[i] + '\n';
    try {
        new Function(accumulated);
    } catch (e) {
        if (e.message.includes('Unexpected token')) {
            console.log(`Error around line ${i + 1}: ${e.message}`);
            console.log('Context:');
            for (let j = Math.max(0, i - 3); j <= Math.min(lines.length - 1, i + 3); j++) {
                console.log(`${j + 1}: ${lines[j].substring(0, 120)}`);
            }
            break;
        }
    }
}
