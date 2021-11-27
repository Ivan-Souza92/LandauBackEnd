const con = require('../database/db')
const { DataTypes } = require('sequelize')
const Categoria = require('./Categoria')

const Produto = con.sequelize.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao:{
      type: DataTypes.STRING,
      allowNull: false
    },
    preco:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    categoria_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Categoria',
        key: 'id'
      }
    }
})

module.exports = Produto
