/* eslint-disable no-undef */
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SQLPASSWORD,
  database: "projet_portfolio",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error("error connecting on port 4000");
    return;
  }
});
