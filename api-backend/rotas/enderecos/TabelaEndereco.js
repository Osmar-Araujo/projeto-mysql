const Modelo = require('./ModeloTabelaEnderecos')

module.exports = {
    inserir (endereco){
        return Modelo.create(endereco)
    },
}
