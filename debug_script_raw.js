const fs = require('fs');
const content = fs.readFileSync('D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html', 'utf8');

const scriptStart = content.indexOf('<script>') + 8;
const scriptEnd = content.lastIndexOf('</script>');
const js = content.substring(scriptStart, scriptEnd);

console.log('Script length: ' + js.length);
console.log('Script start: ' + scriptStart);
console.log('Script end: ' + scriptEnd);

const lines = js.split('\n');
console.log('Total lines: ' + lines.length);

// Check first few chars and last few chars
console.log('First 100 chars: ' + JSON.stringify(js.substring(0, 100)));
console.log('Last 100 chars: ' + JSON.stringify(js.substring(js.length - 100)));

// Try syntax check
try {
    fs.writeFileSync('D:\\tmp_full_script.js', js);
    require('child_process').execSync('node --check D:\\tmp_full_script.js', { encoding: 'utf8' });
    console.log('Syntax OK');
} catch(e) {
    console.log('Syntax check failed: ' + e.stderr);
}
