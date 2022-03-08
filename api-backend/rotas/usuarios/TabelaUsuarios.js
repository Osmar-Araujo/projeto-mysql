const Modelo = require('./ModeloTabelaUsuarios')

module.exports = {
    listar() {
        return Modelo.findAll()
    },

    inserir(usuario) {
        return Modelo.create(usuario)
    },

    async buscaPorEmail(email) {
        const encontrado = await Modelo.findOne({
            where: {
                email: email
            }
        })

        if (!encontrado) {
            throw new Error('E-mail fornecido inválido!')
        }
        console.log(encontrado)
        return encontrado;
    },

    async detalhes(id){
        let SQL = "select u.id, u.name, u.dtNasc, u.genero, u.cpf, u.tipoTel, u.tel, u.email, e.id, e.apelido, e.address, e.numero, e.city, e.bairro, e.state, e.postalCode, c.id, c.number, c.cardHolderName, c.cvc, c.dueData from usuarios u join enderecos e join cartoes c on  = e.idUsuario and u.id = c.idUsuario ";
        Modelo.query(SQL, (error, resultado) => {
            if(error) console.log(error);
            else return resultado;
        })
    }
}