const http = require('http');
const querystring = require('querystring');

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
    const [path, queryString] = req.url.split('?');

    if (path === '/color') {
        const query = querystring.parse(queryString);
        let resultColor;

        if (query.variant) {
            resultColor = colors.find(color => color.variant.toLowerCase() === query.variant.toLowerCase());
        }

        if (!resultColor) {
            resultColor = colors[Math.floor(Math.random() * colors.length)];
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<div style="color:${resultColor.hex} ">${resultColor.hex}</div>`);
    } else if (path == "/get-colors") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(`
                <h1>Colores Disponibles</h1>
                <ul>
                   ${colors.map(c => `<li>${c.variant}</li>`).join("")}
                </ul>
                `)
        res.end();

    } else if (path == "/get-animal") {
        const query = querystring.parse(queryString);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        // Acces to file files/animals.json and retrieve the animal related with the variant parameter
        const jsonAnimals = require('./files/animals.json');
        const animal = jsonAnimals.find(a => a.variant.toLowerCase() === query.variant.toLowerCase());
        if (animal) {
            res.write(`<h1>${animal.animalName}</h1>`);
            res.write(`<img width="300" src="${animal.urlImage}" alt="${animal.animalName}">`);
        } else {
            res.write("<h1>Animal no encontrado</h1>");
        }

        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(`
            <h1>Bienvenidos a la base de datos de colores de NetMind!</h1>
            <p>Para obtener un color aleatorio, haz una petición GET al endpoint <strong>/color</strong>.</p>
            <p>Para obtener un color específico, usa el parámetro de consulta <strong>?variant=[color]</strong> (por ejemplo, <strong>?variant=Vermillion</strong>).</p>
            <p>Para obtener la lista de colores disponibles, haz una petición GET al endpoint <strong>/get-colors</strong>.</p>
            <p>Para obtener un animal relacionado con el color, haz una petición GET al endpoint <strong>/get-animal</strong> y usa el parámetro de consulta <strong>?variant=[color]</strong> (por ejemplo, <strong>?variant=Vermillion</strong>).</p>
        `);
        res.end();
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
