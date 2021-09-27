import { connection } from "../config/db.connection.js";

export class Project {
  constructor(
    id_categorie,
    nom_projet,
    description_projet,
    lien_image_projet,
    lien_projet,
    lien_github
  ) {
    this.id_categorie = id_categorie;
    this.nom_projet = nom_projet;
    this.description_projet = description_projet;
    this.lien_image_projet = lien_image_projet;
    this.lien_github = lien_github;
    this.lien_projet = lien_projet;
  }

  static index(callback) {
    connection.query("SELECT * FROM projet", callback);
  }

  static create(data, callback) {
    connection.query(
      "INSERT INTO projet(id_categorie,nom_projet,description_projet,lien_image_projet,lien_projet,lien_github) VALUES (?,?,?,?,?,?)",
      [
        data.categorie,
        data.nom,
        data.description,
        data.imagesPreview,
        data.lien_projet,
        data.lien_github_projet,
      ],
      callback
    );
  }

  static findProject(id, callback) {
    connection.query(`SELECT * FROM projet WHERE id_projet = ${id}`, callback);
  }

  static deleteProject(id, callback) {
    connection.query(`DELETE FROM projet WHERE id_projet = ${id}`, callback);
  }

  static updateProject(id, data, callback) {
    connection.query(
      `UPDATE projet SET id_categorie =? ,nom_projet =? ,description_projet =? ,lien_image_projet =? ,lien_projet =? ,lien_github = ? WHERE id_projet = ${id}`,
      [
        data.id_categorie,
        data.nom_projet,
        data.description_projet,
        data.lien_image_projet,
        data.lien_projet,
        data.lien_github,
      ],
      callback
    );
  }
}
