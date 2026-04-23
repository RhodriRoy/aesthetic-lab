const fs = require('fs');

const path = 'D:\\01_Projects\\01-Coding\\ui-ux-pro-max-reference\\arch-mood-board-reference\\index.html';
let content = fs.readFileSync(path, 'utf8');

const oldLowPolyOverlay = `            /* 7. Low Poly */
            #art-effect-overlay.art-effect-7 {
                background-image:
                    linear-gradient(
                        30deg,
                        rgba(78, 205, 196, 0.08) 12%,
                        transparent 12.5%,
                        transparent 87%,
                        rgba(78, 205, 196, 0.08) 87.5%
                    ),
                    linear-gradient(
                        150deg,
                        rgba(78, 205, 196, 0.08) 12%,
                        transparent 12.5%,
                        transparent 87%,
                        rgba(78, 205, 196, 0.08) 87.5%
                    ),
                    linear-gradient(
                        30deg,
                        rgba(255, 107, 107, 0.06) 12%,
                        transparent 12.5%,
                        transparent 87%,
                        rgba(255, 107, 107, 0.06) 87.5%
                    ),
                    linear-gradient(
                        150deg,
                        rgba(255, 107, 107, 0.06) 12%,
                        transparent 12.5%,
                        transparent 87%,
                        rgba(255, 107, 107, 0.06) 87.5%
                    );
                background-size: 40px 70px;
            }`;

const newLowPolyOverlay = `            /* 7. Low Poly */
            #art-effect-overlay.art-effect-7 .overlay-layer.texture {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpolygon points='40,0 80,40 40,80 0,40' fill='none' stroke='rgba(255,107,107,0.08)' stroke-width='0.5'/%3E%3Cpolygon points='40,0 80,40 40,40' fill='rgba(78,205,196,0.04)'/%3E%3Cpolygon points='0,40 40,40 40,80' fill='rgba(69,183,209,0.04)'/%3E%3C/svg%3E");
                background-size: 80px 80px;
            }

            #art-effect-overlay.art-effect-7 .overlay-layer.filter {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpolygon points='20,0 40,20 20,40 0,20' fill='none' stroke='rgba(255,107,107,0.12)' stroke-width='0.8'/%3E%3Ccircle cx='20' cy='0' r='1.5' fill='rgba(255,255,255,0.3)'/%3E%3Ccircle cx='40' cy='20' r='1.5' fill='rgba(255,255,255,0.3)'/%3E%3Ccircle cx='20' cy='40' r='1.5' fill='rgba(255,255,255,0.3)'/%3E%3Ccircle cx='0' cy='20' r='1.5' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E");
                background-size: 40px 40px;
            }

            #art-effect-overlay.art-effect-7 .overlay-layer.particles {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cpolygon points='80,0 160,80 80,160 0,80' fill='none' stroke='rgba(255,107,107,0.04)' stroke-width='0.3'/%3E%3Cpolygon points='80,0 160,80 80,80' fill='rgba(78,205,196,0.03)'/%3E%3Cpolygon points='0,80 80,80 80,160' fill='rgba(69,183,209,0.03)'/%3E%3C/svg%3E");
                background-size: 160px 160px;
            }`;

if (!content.includes(oldLowPolyOverlay)) {
    console.log('Old Low Poly overlay NOT found, trying alternative match...');
    const start = content.indexOf('/* 7. Low Poly */');
    const endMarker = 'body.art-effect-7 {';
    const end = content.indexOf(endMarker, start);
    if (start >= 0 && end > start) {
        const old = content.substring(start, end);
        content = content.substring(0, start) + newLowPolyOverlay + '\n\n            ' + content.substring(end);
        console.log('Replaced using index match. Old length=' + old.length);
    } else {
        console.log('Could not find Low Poly overlay!');
    }
} else {
    content = content.replace(oldLowPolyOverlay, newLowPolyOverlay);
    console.log('Replaced Low Poly overlay via exact match');
}

fs.writeFileSync(path, content, 'utf8');
