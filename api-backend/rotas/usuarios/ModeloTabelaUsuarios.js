const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');


const colunas = {
    name: {
        type: Sequelize.STRING,
        allowNull: false  
    }, 
    dtNasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }, 
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    tipoTel: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    tel: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName:'usuarios'
}

module.exports = instancia.define('usuarios', colunas, opcoes);