const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy
const http = require('http')
const url = require('url');

const app = http.createServer((req, res) => {


    if (req.url.includes('/color')) {

        // hay parámetros de QueryString
        const adr = req.host + req.url;
        const q = url.parse(adr, true)

        let resultColor;

        res.writeHead(200, { 'Content-Type': 'text/plain' })

        switch (q.query.variant) {
            case 'red':
                resultColor = colors[0]
                break;
            case 'green':
                resultColor = colors[1];
                break;
            case 'blue':
                resultColor = colors[2];
                break;
            default:
                resultColor = colors[Math.floor(Math.random() * colors.length)];
        }

        res.write(resultColor)
        res.end()

    }

    else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write(`
            <h1>Bienvenidos a la base de datos de colores de NetMind!</h1>
            <p>Para obtener un color aleatório; tan solo debes hacer una petición GET al endpoint <strong>/color'</strong> </p>
        `)
        res.end()
    }
})

app.listen(3000)