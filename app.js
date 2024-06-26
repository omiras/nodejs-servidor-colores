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

function arrayIteration(arr) {
    const iteratedArrayForHtml = arr.map(el => `<li>${el.variant}</li>`);
    return iteratedArrayForHtml;
}

function createUnorderedListString(array) {
    arrayToString = array.join('');
    return `<ul>
            ${arrayToString}
            </ul>`
}


// Módulo interno
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

//cargar lodash, al estar instalado, se puede importar como si fuera un módulo interno

const _ = require('lodash');
console.log('de lodash: ',_.sample(colors))
const randomColor = _.sample(colors);

// Creamos servidor y lo asigno a una variable
const server = http.createServer((req, res) => {

    // Nos quedamos con la propiedad url del objeto req (request)
    // Para obtener la URL del objeto request usaremos el operador de desestructuración de objetos
    const { url } = req;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Caso que tiene ?variant
    if (url.startsWith("/color?")) {
        // Usamos el operador de desestructuración para asignar a la variable path la primera posición del array y a la variable queryString la segunda posición del array
        const [path, queryString] = req.url.split('?');
        const qs = querystring.parse(queryString);
        console.log("🚀 ~ file: app.js:39 ~ server ~ qs:", qs);

        // 1. Utilizar el método de array adecuado para buscar la variante del color en el array 'colors'

        const userColor = colors.find(c => c.variant.toLowerCase() == qs.variant.toLowerCase()) 
        // 2. Si encuentra el color, devolverlo tal y cómo lo hacemos aquí         res.end(`<p style="color: ${hex}">${hex}</p>`)

        if (userColor) {
            console.log(`The user has asked for the following color: ${qs.variant}`)
            res.end(`<p style="color: ${userColor.hex}">${userColor.hex}</p>`)
        }
        // 3. Si NO encuentra el color, mandarle uno al azar.  Mandarle también un mensaje diciendo que la variante de color elegida NO EXiste. Opcionalmente podéis enviarle el array de colores que puede usar

        // Si usas un map para hacer el bonus
          // 1. hacer un forEach y para cada elemento del array puedes hacer un res.write()
          // 2. Otra forma seria crear un array de string con <li>, y luego jutnarlos todos con un método de array que te permite transformar un array en un string
        else {
            const arrayColorsVariants = arrayIteration(colors);
            console.log('arrayColorsVariants: ', arrayColorsVariants);
            const htmlColorUnorderedList = createUnorderedListString(arrayColorsVariants);
            res.write(`<p>El color <strong>${qs.variant}</strong>, seleccionado por el usuario no existe en nuestra base de datos.</p>`);
            res.write('<p>Puedes escoger entre los siguientes colores: </p>');
            res.write(`${htmlColorUnorderedList}`)
            res.end();

        }

    }

    else if (url == "/color") {

        // Iteración 3: Comprobar si me han pasado una queryString o no. En caso de que si: obtener el color en función del ?variant=Vermillion. En caso contrario obtener un color aleatório

        // obtener un color aleatório
        const indexRandomColor = Math.floor(Math.random() * colors.length);
        const randomColor = colors[indexRandomColor];

        // me quedo con la propiedad .hex del color
        const { hex } = randomColor;
        res.statusCode = 200;
        res.end(`<p style="color: ${hex}">${hex}</p>`)

    } else if (url == "/") {

        // Especificar que vamos a enviar un html
        // Tenemos que especificar que la codificación es utf-8


        res.write('<h1>Bienvenido al servidor de colores</h1>');
        res.write('<p>Haz una petición a /color para obtener un color aleatório</p>');
        res.end();
    } else {
        // el recurso/endpoint/ruta que intentas acceder no existe
        res.statusCode = 404;
        // le enviamos el fichero 404.html
        // Voy a leer el fichero con un método síncrono
        const htmlContent = fs.readFileSync("./404.html");
        res.end(htmlContent);
    }
});

// levantamos el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Server running in port 3000');
});
