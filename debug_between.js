const fs = require('fs');
const js = fs.readFileSync('D:\\tmp_full_script.js', 'utf8');

const start = js.indexOf('function renderLayouts');
const end = js.indexOf('function drawLayoutPreview');
const segment = js.substring(start, end);

// Print last 200 chars of segment
console.log('Last 300 chars of renderLayouts segment:');
console.log(JSON.stringify(segment.substring(segment.length - 300)));
