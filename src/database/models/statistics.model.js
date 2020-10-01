const {Model, DataTypes} = require('sequelize');

const sequelize = require('../../configs/sequelize.config');
const {TABLE_NAME_PROCESS} = require(`../../configs/const.config`)
const BikeModel = require(`./bike.model`)

class StatModel extends Model {
}

StatModel.init({
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
}, {
  sequelize,
  modelName: TABLE_NAME_PROCESS,
  tableName: TABLE_NAME_PROCESS,
  timestamps: false
})

StatModel.belongsTo(BikeModel, {foreignKey: `bike_id`})

module.exports = StatModel;