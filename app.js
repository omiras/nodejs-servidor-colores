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

const server = http.createServer((req, res) => {

    // Analizar la ruta de la petición el cliente
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname; // obtiene la ruta URL
    

    // Encabezado de la resputa HTTP. 200--> OK
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`
            <h1>Bienvenidos a la base de datos de colores de NetMind!</h1>
            <p>Para obtener un color aleatorio, haz una petición GET al endpoint <strong>/color</strong>.</p>
            <p>Para obtener un color específico, usa el parámetro de consulta <strong>?variant=[color]</strong> (por ejemplo, <strong>?variant=Vermillion</strong>).</p>
            <p>Para obtener la lista de colores disponibles, haz una petición GET al endpoint <strong>/get-colors</strong>.</p>
            <p>Para obtener un animal relacionado con el color, haz una petición GET al endpoint <strong>/get-animal</strong> y usa el parámetro de consulta <strong>?variant=[color]</strong> (por ejemplo, <strong>?variant=Vermillion</strong>).</p>
        `);
    res.end();

});



server.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});