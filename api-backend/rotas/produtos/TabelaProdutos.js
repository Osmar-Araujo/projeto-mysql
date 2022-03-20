const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    listar(){
        return Modelo.findAll();
    },

    inserir(product){
        return Modelo.create(product);
    },

    async buscaPorId (id){
        const encontrado = await Modelo.findOne({
            where: {
                id:id
            }
        })

        if (!encontrado){
            throw new Error ('Ops!! Produto não encontrado!!')
        }
        return encontrado;
    }
}