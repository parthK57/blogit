import mysql from "mysql2/promise";
import bluebird from "bluebird";

const db = mysql.createPool({
  host: "localhost",
  password: "Password@2603",
  database: "blogs",
  user: "root",
  Promise: bluebird,
});

export default db;
