const { compareSync } = require('bcryptjs');
const TabelaUsuarios = require('./TabelaUsuarios');
const roteador = require('express').Router();
const Usuario = require('./Usuario.js');
const expressAsyncHandler = require('express-async-handler');

roteador.get('/', async (req, res) => {
    const usuarios = await TabelaUsuarios.listar();
    res.send(
        JSON.stringify(usuarios)
    );
});

roteador.get('/:id', async (req,res) =>{
    const usuario = await TabelaUsuarios.buscaPorId();
    res.send(JSON.stringify(usuario)
    );
});


roteador.post('/signin', expressAsyncHandler(async (req, res) => {
    const email = req.body.email;
    const user = await TabelaUsuarios.buscaPorEmail(email);
    if (user) {
        if (compareSync(req.body.password, user.password)) {
            res.send({
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
            return;
        }
    }
    res.status(401).send({ message: 'E-mail ou Senha Invalido(os)!' });
})

);

roteador.post('/register', async (req, res) => {
    const dadosRecebidos = req.body
    const usuario = new Usuario(dadosRecebidos)
    await usuario.criar()
    res.send(
        JSON.stringify(usuario)
    )
});




module.exports = roteador;