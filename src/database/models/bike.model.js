const {Model, DataTypes} = require('sequelize');

const sequelize = require('../../configs/sequelize.config');
const {TABLE_NAME_BIKE} = require(`../../configs/const.config`)

class BikeModel extends Model {
}

BikeModel.init({
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
}, {
  sequelize,
  modelName: TABLE_NAME_BIKE,
  tableName: TABLE_NAME_BIKE,
  timestamps: false
})
module.exports = BikeModel;