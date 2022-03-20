
const Modelo = require('./ModeloTabelaEnderecos')

module.exports = {

    listar(){
        return Modelo.findAll()
    },

    buscarPorIdUsuario(idUsuario){
        const enderecos =  Modelo.findAll({
            where: {
                idUsuario: Number.parseInt(idUsuario)
            }
        })
        return enderecos
    },

    inserir (endereco){
        return Modelo.create(endereco)
    },
}
