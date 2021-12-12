const TabelaProdutos = require('./TabelaProdutos');
const roteador = require ('express').Router();
const Produto = require('./Produto');


roteador.get('/', async (req, res) => {
    const products = await TabelaProdutos.listar();
    res.send(
        JSON.stringify(products)
    );
});

roteador.post('/', async (req,res) => {
    const dadosRecebidos = req.body
    const product = new Produto(dadosRecebidos)
    await product.criar()
    res.send(
        JSON.stringify(product)
    )
})

module.exports = roteador;