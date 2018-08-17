const http = require("http");
const url = require("url");

function start(route) {
    function onRequest(req, res) {
        const { pathname } = url.parse(req.url);
        route(pathname);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("hello world");
        res.end();
    }
    const server = http.createServer(onRequest);
    server.listen(8081);
}

exports.start = start;
