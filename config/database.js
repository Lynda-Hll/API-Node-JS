const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "sup",
  connectionLimit: 10,
});

module.exports = pool;
