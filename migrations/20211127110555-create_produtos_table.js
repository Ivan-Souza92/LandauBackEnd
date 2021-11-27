'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos',{

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categorias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      preco:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
