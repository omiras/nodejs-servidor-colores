const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy


var http = require('http');


var servidor = http.createServer( (req, res) => {


    if (req.url.includes("color"))
    {
        let id = req.url.split('variant=')[1];
        if (!id) 
        {
            res.write((colors[Math.floor(Math.random()*colors.length)]));
            return res.end();
        }

        switch(id)
        {
            case 'red':
            res.write(colors[0]);
            break;
            case 'green':
            res.write(colors[1]);
            break;
            case 'blue':
            res.write(colors[2]);
            break;
        }

        return res.end();

        
    } else
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.write("<h1>Bienvenido</h1> <p>Haz la petición a /color</p>");
        res.end();
    }
}
)


servidor.listen(3000);