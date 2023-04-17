import mysql from "mysql2/promise";
import bluebird from "bluebird";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  password: `${process.env.DB_PASSWORD}`,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  Promise: bluebird,
});

export default db;
