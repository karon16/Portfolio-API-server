import { connection } from "../config/db.connection.js";

export const findByName = (req, res, next) => {
  connection.query(
    "SELECT * FROM projet WHERE nom_projet=? LIMIT 1",
    [req.body.nom],
    (err, result) => {
      console.log("result", result);
      if (err) throw err;
      else if (result.length === 1) {
        return res.status(409).send("le projet existe deja");
      }
      req.projet = result;
    }
  );
  next();
};

export const checkProject = (req, res, next) => {
  connection.query(
    "SELECT * FROM projet WHERE id_projet=? LIMIT 1",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      else if (result.length <= 0)
        return res.status(404).send("le projet n'existe pas");
      req.projet = result;
    }
  );
  next();
};

export const validateBody = (
  {
    body: {
      categorie,
      nom,
      description,
      imagesPreview,
      lien_projet,
      lien_github_projet,
    },
  },
  res,
  next
) => {
  const values = [
    categorie,
    nom,
    description,
    imagesPreview,
    lien_projet,
    lien_github_projet,
  ];

  if (values.some((value) => value.length === 0)) {
    return res
      .status(422)
      .json({ message: "Veuillez bien remplir les champs" });
  }
  next();
};
