const TabelaEndereco = require('./TabelaEndereco');

class Endereco {
    constructor({ id, apelido, idUsuario, address, city, postalCode, state, numero, bairro }) {
        this.id = id
        this.apelido = apelido
        this.idUsuario = idUsuario
        this.address = address
        this.city = city
        this.postalCode = postalCode
        this.state = state
        this.numero = numero
        this.bairro = bairro
    }

    async criar() {
        const resultado = await TabelaEndereco.inserir({
            apelido: this.apelido,
            idUsuario: this.idUsuario,
            address: this.address,
            city: this.city,
            postalCode: this.postalCode,
            state: this.state,
            numero: this.numero,
            bairro: this.bairro
        })
        this.id = resultado.id
    }
}


module.exports = Endereco;