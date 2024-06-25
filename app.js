const http = require('http');
const url = require('url');

const colors = [
    { variant: "Vermillion", hex: "#2E191B" },
    { variant: "Forest", hex: "#0B6623" },
    { variant: "Navy", hex: "#000080" },
    { variant: "Crimson", hex: "#DC143C" },
    { variant: "Sky Blue", hex: "#87CEEB" },
    { variant: "Lime", hex: "#00FF00" },
    { variant: "Gold", hex: "#FFD700" },
    { variant: "Lavender", hex: "#E6E6FA" },
    { variant: "Tangerine", hex: "#F28500" },
    { variant: "Magenta", hex: "#FF00FF" },
    { variant: "Cyan", hex: "#00FFFF" },
    { variant: "Olive", hex: "#808000" },
    { variant: "Teal", hex: "#008080" },
    { variant: "Maroon", hex: "#800000" },
    { variant: "Coral", hex: "#FF7F50" }
];

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/color') {
        const query = parsedUrl.query;
        let resultColor;

        if (query.variant) {
            resultColor = colors.find(color => color.variant.toLowerCase() === query.variant.toLowerCase());
        }

        if (!resultColor) {
            resultColor = colors[Math.floor(Math.random() * colors.length)];
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resultColor));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(`
            <h1>Bienvenidos a la base de datos de colores de NetMind!</h1>
            <p>Para obtener un color aleatorio, haz una petición GET al endpoint <strong>/color</strong>.</p>
            <p>Para obtener un color específico, usa el parámetro de consulta <strong>?variant=[color]</strong> (por ejemplo, <strong>?variant=Vermillion</strong>).</p>
        `);
        res.end();
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
