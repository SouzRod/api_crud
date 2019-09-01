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

module.exports = { getProduto, postProduto }