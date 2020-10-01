const Sequelize = require(`sequelize`);

const {DB_NAME, DB_USER, DB_PASS, HOST, DIALECT} = require(`./const.config`)

module.exports = new Sequelize(
  DB_NAME, DB_USER, DB_PASS,
  {
    host: HOST,
    dialect: DIALECT
  }
)