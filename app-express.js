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

const express = require('express');
const _ = require('lodash'); // underscore

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a Express, ahora empieza lo bueno</h1>");
});

// definir el endpoint de manera sencilla
app.get("/color", (req, res) => {

    // Obtener el valor del parámetro "Variant" de la query string
    const variant = req.query.variant; // const { variant } = req.query;

    // si nos estan pasando algún valor en la query string, vamos a buscar el color correspondiente en el array de colores
    if (variant) {
        const foundColor = colors.find(c => c.variant == variant);
        return res.send(`<p style="color:${foundColor.hex}">${foundColor.hex}</p>`);
    }


    // módulo de terceros para obtener un elemento aleatório de un array
    const randomColor = _.sample(colors);

    // Enviar una respuesta al cliente sin tener que especificar content-type, charset utf-8, etc etc
    res.send(`<p style="color:${randomColor.hex}">${randomColor.hex}</p>`);
});


app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
});

// Inicializar proyecto con NPM. En el terminal escribir "npm init -y"
// Instalar express: "npm install express"
// Iniciar el servidor: "node --watch app-express.js"

// Corregir requisito 2 a las 21.20