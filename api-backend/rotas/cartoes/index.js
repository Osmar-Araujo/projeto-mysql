const TabelaCartoes = require('./TabelaCartoes');
const roteador = require('express').Router();
const Cartao = require('./Cartao');

roteador.post('/cadastrar', async (req, res) => {
  try {
    const dadosRecebidos = req.body
    const cartao = new Cartao(dadosRecebidos)
    await cartao.criar()
    res.send(
      JSON.stringify(cartao)
    );
  } catch (err) {
    console.log(err)
  }
});
module.exports = roteador;