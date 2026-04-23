const fs = require('fs');
const js = fs.readFileSync('D:\\tmp_full_script.js', 'utf8');

const start = js.indexOf('function renderStyles');
const end = js.indexOf('function renderLayouts');
const segment = js.substring(start, end);

console.log('Segment length: ' + segment.length);
console.log('Full segment:');
console.log(segment);

try {
    new Function(segment);
    console.log('\nrenderStyles syntax OK');
} catch(e) {
    console.log('\nrenderStyles ERROR: ' + e.message);
}
