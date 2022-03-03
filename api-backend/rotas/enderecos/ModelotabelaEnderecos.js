const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    apelido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:'usuarios',
            key: 'id'
        },
        onDelete: 'CASCADE' 
    }, 
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    city: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    postalCode: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
}
const opcoes = {
    freezeTableName: true,
    tableName:'enderecos'
}

module.exports = instancia.define('enderecos', colunas, opcoes);