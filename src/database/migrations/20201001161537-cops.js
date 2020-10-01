'use strict';

const {TABLE_NAME_COPS} = require(`../../configs/const.config`)
const {DataTypes} = require(`sequelize`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME_COPS, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status:{
        type:DataTypes.STRING,
        defaultValue: `smocking marlboro`
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      worked_from: {
        type: DataTypes.STRING,
        defaultValue: new Date().toISOString()
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME_COPS)
  }
};
