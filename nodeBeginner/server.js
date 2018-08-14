var http = require("http");

var server = http.createServer(serverFunction);

function serverFunction(request, response) {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode = 200;
    response.writeHead(200, {"Content-Type": "text/html","char-set": "utf-8"});
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('name','aliveAmy');
    response.write(new Date().toString());
    response.end();
}
server.listen(8080, 'localhost')
// server.listen(8080);