
const TabelaEndereco = require('./TabelaEndereco');
const roteador = require('express').Router();
const Endereco = require('./Endereco.js');


roteador.post('/cadastrar', async (req, res) => {
    try {
        const dadosRecebidos = req.body
        const endereco = new Endereco(dadosRecebidos)
        await endereco.criar()
        res.send(
            JSON.stringify(endereco)
        )
    } catch (err) {
        console.log(err);
    }

});
module.exports = roteador;

