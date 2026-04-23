const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');
const scriptStart = content.indexOf('<script>') + 8;
const scriptEnd = content.lastIndexOf('</script>');
const js = content.substring(scriptStart, scriptEnd);

const lines = js.split('\n');
let count = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('`')) {
        count += (lines[i].match(/`/g) || []).length;
        console.log('Line ' + (i+1) + ' (count=' + count + '): ' + lines[i].substring(0, 120));
    }
}
console.log('\nTotal backticks: ' + count);
