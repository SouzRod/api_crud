const service = require('../services/Produto')

const getProduto = (req, res) => {
    let id = req.params.id
    const result = service.getProduto(id)
    res.send(result)
}

const postProduto = (req, res) => {
    const body = req.body
    const result = service.postProduto(body)
    res.send(result)
}

const deleteProduto = (req, res) => {
    // let id = req.params.id
    const { id } = req.params
    const result = service.deleteProduto(id)

    res.send(result)

}

const alterarProduto = (req, res) => {
    let id = req.params.id
    let body = req.body

    const result = service.alterarProduto(id, body)

    res.send(result)
}

module.exports = { getProduto, postProduto, deleteProduto, alterarProduto }