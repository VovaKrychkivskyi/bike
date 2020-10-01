const {Model, DataTypes} = require('sequelize');

const sequelize = require('../../configs/sequelize.config');
const {TABLE_NAME_COPS} = require(`../../configs/const.config`)

class CopModel extends Model {
}

CopModel.init({
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
}, {
  sequelize,
  modelName: TABLE_NAME_COPS,
  tableName: TABLE_NAME_COPS,
  timestamps: false
})

module.exports = CopModel;