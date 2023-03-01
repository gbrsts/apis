const express = require("express");
const { randomUUID } = require("crypto")
const app = express();
app.use(express.json());
const products = [];

app.post("/products", (request, response) => {
    const { name, price } = request.body;

    const product = {
        name,
        price,
        id: randomUUID()
    }

    products.push(product)

    return response.json(product)
})

app.listen(4002, () => console.log("Server on port 4002"));