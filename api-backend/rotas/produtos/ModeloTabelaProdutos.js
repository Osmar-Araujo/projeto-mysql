const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    name: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    countInStock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numReviews: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName:'products'
}

module.exports = instancia.define('products', colunas, opcoes);