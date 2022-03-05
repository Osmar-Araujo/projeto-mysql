const TabelaCartoes = require('./TabelaCartoes');

class Cartao {
  constructor({ id, idUsuario, number, cardHolderName, Cvc, dueData }) {
    this.id = id,
      this.idUsuario = idUsuario,
      this.number = number,
      this.cardHolderName = cardHolderName,
      this.Cvc = Cvc,
      this.dueData = dueData
  }

  async criar() {
    const resultado = await TabelaCartoes.inserir({
      idUsuario: this.idUsuario,
      number: this.number,
      cardHolderName: this.cardHolderName,
      Cvc: this.Cvc,
      dueData: this.dueData
    })
    this.id = resultado.id
  }
}

module.exports = Cartao;