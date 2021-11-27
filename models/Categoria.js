const con = require('../database/db')
const { DataTypes } = require('sequelize')

const Categoria = con.sequelize.define('categorias', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

module.exports = Categoria
