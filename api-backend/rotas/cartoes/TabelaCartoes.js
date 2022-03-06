const Modelo = require('./ModeloTabelaCartoes')

module.exports = {
  listar() {
    return Modelo.findAll();
  },
  inserir(cartao) {
    return Modelo.create(cartao);
  }
}