/* eslint-disable no-undef */
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error(`error connecting on ${process.env.MYSQL_ADDON_HOST}`);
    return;
  }
});
