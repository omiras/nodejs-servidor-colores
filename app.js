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
//import built-in module http to create a server
const http = require('http');
//import built-in module queryString to work with the query string
const querystring = ('querystring');

/** To create a server, invoke the .createServer method of the http object. This function takes a callback function as a parameter, which will be executed each time the server receives a request. The callback has 2 parameters - request and response */

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    console.log('He recibido una petición.');
    res.write('<h1>Bienvenido a la web de los colores!</h1>');
    res.end();
})

//Start listening to the server, this is the connection with the client

server.listen(3000, ()=> {
    // la función de callback se ejecuta cuando NodeJS levanta (poner en funcionamiento) el servidor
    console.log("El servidor está corriendo.");
})