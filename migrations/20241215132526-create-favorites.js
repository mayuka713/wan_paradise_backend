'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'users', 
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'stores',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'), 
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'), 
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favorites'); 
  },
};
