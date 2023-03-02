const express = require("express")

const { randomUUID } = require("crypto")

const fs = require("fs")

const app = express()

app.use(express.json())

let products = []


fs.readFile("products.json", "utf-8", (error, data) => {
	if (error) {
		console.log(error)
	} else {
		products = JSON.parse(data)
	}
})

function newFile() {
	fs.writeFile("products.json", JSON.stringify(products), (error) => {
		if (error) {
			console.log(error)
		} else {
			console.log("Produto cadastrado")
		}
	})
}

app.post("/products", (request, response) => {
	
	const { name, price } = request.body

	const product = {
		name,
		price,
		id: randomUUID()
	}

	products.push(product)

	newFile()

	return response.json(product)
})

app.get("/products", (request, response) => {
	return response.json(products)
})

app.get("/products/:id", (request, response) => {
	const { id } = request.params
	const product = products.find((product) => product.id === id)
	return response.json(product)
})

app.put("/products/:id", (request, response) => {
	const { id } = request.params
	const { name, price } = request.body

	const productIndex = products.findIndex((product) => product.id === id)
	products[productIndex] = {
		...products[productIndex],
		name,
		price
	}

	newFile()

	return response.json({ message: "Produto alterado com sucesso" })
})

app.delete("/products/:id", (request, response) => {
	const { id } = request.params

	const productIndex = products.findIndex((product) => product.id === id)

	products.splice(productIndex, 1)

	newFile()

	return response.json({ message: "Produto excluido com sucesso" })
})


app.listen(4002, () => console.log("Server on port 4002"))