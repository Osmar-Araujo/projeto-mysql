
const TabelaEndereco = require('./TabelaEndereco');
const roteador = require('express').Router();
const Endereco = require('./Endereco.js');

roteador.get('/', async (req, res) => {
    const enderecos = await TabelaEndereco.listar();
    res.send(
        JSON.stringify(enderecos)
    );
});

roteador.get('/:idUsuario', async (req, res) => {
    const enderecos = await TabelaEndereco.buscarPorIdUsuario();
    res.send(
        JSON.stringify(enderecos)
    );
})

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

