const TabelaUsuarios = require('./TabelaUsuarios');
const roteador = require ('express').Router();
const Usuario = require('./Usuario');

roteador.get('/', async (req, res) => {
    const usuarios = await TabelaUsuarios.listar();
    res.send(
        JSON.stringify(usuarios)
    );
});

roteador.post('/register', async (req,res) => {
    const dadosRecebidos = req.body
    const usuario = new Usuario(dadosRecebidos)
    await usuario.criar()
    res.send(
        JSON.stringify(usuario)
    )
});

module.exports = roteador;