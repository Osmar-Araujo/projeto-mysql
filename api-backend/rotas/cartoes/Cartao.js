const TabelaCartoes = require('./TabelaCartoes');

class Cartao {
  constructor({ id, idUsuario, number, cardHolderName, cvc, dueData }) {
    this.id = id,
      this.idUsuario = idUsuario,
      this.number = number,
      this.cardHolderName = cardHolderName,
      this.cvc = cvc,
      this.dueData = dueData
  }

  async criar() {
    const resultado = await TabelaCartoes.inserir({
      idUsuario: this.idUsuario,
      number: this.number,
      cardHolderName: this.cardHolderName,
      cvc: this.cvc,
      dueData: this.dueData
    })
    this.id = resultado.id
  }
}

module.exports = Cartao;