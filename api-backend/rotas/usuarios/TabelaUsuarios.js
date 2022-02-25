const Modelo = require('./ModeloTabelaUsuarios')

module.exports = {
    listar (){
        return Modelo.findAll()
    },

    inserir (usuario){
        return Modelo.create(usuario)
    }
}