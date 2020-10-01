const {DB_NAME, DB_USER, DB_PASS, HOST, DIALECT} = require(`./const.config`)

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": HOST,
    "dialect": DIALECT
  }
}
