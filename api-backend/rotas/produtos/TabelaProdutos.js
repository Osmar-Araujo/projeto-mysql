const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    listar(){
        return Modelo.findAll();
    },

    inserir(product){
        return Modelo.create(product);
    }
}