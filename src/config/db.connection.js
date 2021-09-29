/* eslint-disable no-undef */
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: "b5evv9k9bu7ogk79mdek-mysql.services.clever-cloud.com",
  user: "uskxya4l28bp2dvz",
  password: process.env.SQLPASSWORD,
  database: "b5evv9k9bu7ogk79mdek",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error("error connecting on port 4000");
    return;
  }
});
