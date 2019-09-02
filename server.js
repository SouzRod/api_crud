const express = require('express')
const bodyParser = require('body-parser')

const controller = require('./controllers/Produto')
const port = 8081
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/produtos', controller.getProduto)

app.get('/produtos/:id', controller.getProduto)

app.post('/produtos', controller.postProduto)

app.delete('/produtos/:id', controller.deleteProduto)

app.put('/produtos/:id', controller.alterarProduto)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

