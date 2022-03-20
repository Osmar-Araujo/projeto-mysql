//const bcrypt = require ('bcryptjs');


const TabelaUsuarios = require('./TabelaUsuarios');


class Usuario{
    constructor({id, name, dtNasc, genero, cpf, tipoTel, tel, email, password, isAdmin}){
        this.id = id
        this.name = name
        this.dtNasc = dtNasc
        this.genero = genero
        this.cpf = cpf
        this.tipoTel = tipoTel
        this.tel = tel
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
    }

    

    async criar(){
        const resultado = await TabelaUsuarios.inserir({
            name: this.name,
            dtNasc: this.dtNasc,
            genero: this.genero,
            cpf: this.cpf,
            tipoTel: this.tipoTel,
            tel: this.tel,
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin
        })
        this.id = resultado.id
    }
}

module.exports = Usuario;