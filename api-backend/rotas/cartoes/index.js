const TabelaCartoes = require('./TabelaCartoes');
const roteador = require('express').Router();
const Cartao = require('./Cartao');

roteador.psot('/cartoes', async (req, res) => {
  const dadosRecebidos = req.body
  const cartao = new Cartao(dadosRecebidos)
  await endereco.criar()
  res.send(
    JSON.stringify(cartao)
  );
});