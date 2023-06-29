const mysql2 = require("mysql2");
const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "PnK@12345#raJ",
  port: 3306,
  database: "ecommerce1",
  waitForConnection: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
