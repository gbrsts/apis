const http = require("http");

http.createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "application/json"});
    
    if (request.url === "/product") {
        response.end(
            JSON.stringify({
                mensage: "Product route"
            })
        )
    }
    
    if (request.url === "/user") {
        response.end(
            JSON.stringify({
                mensage: "User route"
            })
        )
    }

}).listen(4001, () => console.log("Server on port 4001"))