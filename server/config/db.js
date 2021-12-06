const config = require("./config.json");
const mysql = require("mysql");

const db = mysql.createPool({
  host: config.db_info.LOCALHOST,
  port: config.db_info.PORT,
  user: config.db_info.USER,
  password: config.db_info.PASSWORD,
  database: config.db_info.DATABASE,
});
module.exports = db;
