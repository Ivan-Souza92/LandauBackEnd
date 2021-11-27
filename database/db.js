const Sequelize = require('sequelize');
const sequelize = new Sequelize('landau', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = {
     Sequelize: Sequelize,
     sequelize: sequelize
}