'use strict';

const {TABLE_NAME_PROCESS} = require(`../../configs/const.config`)
const {DataTypes} = require(`sequelize`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME_PROCESS, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: `stolen`
      },
      bike_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      officer_id: {
        type: DataTypes.INTEGER,
      },
      officer_name: {
        type: DataTypes.STRING,
        defaultValue: `pending`
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME_PROCESS)
  }
};
