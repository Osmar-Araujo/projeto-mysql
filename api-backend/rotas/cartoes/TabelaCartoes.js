const Modelo = require('./ModeloTabelaCartoes')

module.exports = {
  listar() {
    return Modelo.findAll();
  },
  inserir(paymentCards) {
    return Modelo.create(paymentCards);
  }
}