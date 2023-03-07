const express = require("express")
const app = express()

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/src/pages/index.html")
})

app.listen(3001, () => console.log("Server on port 3001"))