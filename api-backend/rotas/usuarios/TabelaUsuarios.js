const Modelo = require('./ModeloTabelaUsuarios')

module.exports = {
    listar (){
        return Modelo.findAll()
    },

    inserir (usuario){
        return Modelo.create(usuario)
    },

    async buscaPorEmail (email){
        const encontrado = await Modelo.findOne({
            where: {
                email:email
            }
        })

        if (!encontrado){
            throw new Error ('E-mail fornecido inválido!')
        }
        console.log(encontrado)
        return encontrado;
    }

}