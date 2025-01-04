'use strict';
const tableName = 'payment';

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
      type_code: {
        type: Sequelize.ENUM,
        values: ['cash', 'line_pay', 'jko_pay', 'google_pay', 'apple_pay'],
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
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_payment_type_code";',
    );
  },
};
