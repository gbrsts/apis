const http = require("http")

http.createServer((request, response) => {
  
  response.writeHead(200, {"Content-Type": "application/json"})

  if (request.url === "/route-1"){
    response.end(
      JSON.stringify({
        mensage: "Route-1"
      })
    )
  }

  if (request.url === "/route-2"){
    response.end(
      JSON.stringify({
        mensage: "Route-2"
      })
    )
  }

}).listen(3001, () => console.log("Server on port 3001"))