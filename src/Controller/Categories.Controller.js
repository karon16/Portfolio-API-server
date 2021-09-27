import { connection } from "../config/db.connection.js";

export const getCategories = (req, res) => {
  connection.query("SELECT * FROM categorie", (error, result) => {
    if (error) throw error;
    res.send(result);
  });
};
