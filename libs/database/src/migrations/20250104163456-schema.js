'use strict';
const tableName = 'commodity';

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
      name: Sequelize.STRING,
      amount: Sequelize.INTEGER,
      remaining_quantity: Sequelize.INTEGER,
      description: Sequelize.STRING,
      photo: Sequelize.STRING,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  },
};
