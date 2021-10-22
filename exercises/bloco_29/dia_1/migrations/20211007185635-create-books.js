'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books'), {
      id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true, 
        type: Sequelize.INTEGER 
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        autoIncrement: true, 
        type: Sequelize.INTEGER 
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
