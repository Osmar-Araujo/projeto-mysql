const Sequelize = require('sequelize');
const usuario = require('../usuarios/ModeloTabelaUsuarios')
const instancia = require('../../banco-de-dados/index.js');

const colunas = {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cardHolderName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Cvc: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dueData: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}


const opcoes = {
  freezeTableName: true,
  tableName: 'paymentCards',
}

module.exports = instancia.define('paymentCards', colunas, opcoes);