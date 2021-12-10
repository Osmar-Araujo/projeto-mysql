const TabelaProdutos = require('./TabelaProdutos');
const roteador = require ('express').Router();


roteador.use('/', async(req, res) => {
    const products = await TabelaProdutos.listar();
    res.send(
        JSON.stringify(products)
    );
});

module.exports = roteador;