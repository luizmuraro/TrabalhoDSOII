const http = require('http')

const port = 80

const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    res.end("<h1>Hello World!</h1>");

});

server.listen(port);

console.log("Server running! Press CTRL+C to close");