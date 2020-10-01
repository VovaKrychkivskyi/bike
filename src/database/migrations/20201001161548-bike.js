'use strict';

const {TABLE_NAME_BIKE} = require(`../../configs/const.config`)
const {DataTypes} = require(`sequelize`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME_BIKE, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status:{
        type:DataTypes.STRING,
        defaultValue: `pending`
      },
      bike_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner_bike: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stolen_from: {
        type: DataTypes.STRING,
        defaultValue: new Date().toISOString()
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME_BIKE)
  }
};
