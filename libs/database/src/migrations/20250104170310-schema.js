'use strict';
const tableName = 'shopping_history';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      commodities: Sequelize.JSON,
      amount: Sequelize.INTEGER,
      payment_id: {
        type: Sequelize.UUID,
        references: {
          model: 'payment',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
      modify_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(tableName);
  },
};
