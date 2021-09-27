-- DROP DATABASE IF EXISTS projet_portfolio;
CREATE DATABASE IF NOT EXISTS projet_portfolio;
USE projet_portfolio;

-- DROP TABLE IF EXISTS categorie;
CREATE TABLE IF NOT EXISTS categorie (
    id_categorie INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom_categorie VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id_categorie)
);

INSERT INTO categorie (nom_categorie) VALUES ("Graphisme");
INSERT INTO categorie (nom_categorie) VALUES ("Web Design");

-- DROP TABLE IF EXISTS projet;
CREATE TABLE IF NOT EXISTS projet (
    id_projet INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_categorie INT UNSIGNED NOT NULL,
    nom_projet VARCHAR(100) NOT NULL UNIQUE,
    description_projet VARCHAR(100),
    lien_image_projet VARCHAR(255),
    lien_projet VARCHAR (255),
    lien_github VARCHAR (255),
    PRIMARY KEY (id_projet),
    CONSTRAINT fk_categorie FOREIGN KEY (id_categorie)
        REFERENCES categorie (id_categorie)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- DROP TABLE IF EXISTS techno;
CREATE TABLE IF NOT EXISTS techno (
    id_techno INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom_techno VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id_techno)
);

-- DROP TABLE IF EXISTS techno_projet;
CREATE TABLE IF NOT EXISTS techno_projet (
    id_techno INT UNSIGNED NOT NULL,
    id_projet INT UNSIGNED NOT NULL,
    CONSTRAINT fk_techno FOREIGN KEY (id_techno)
        REFERENCES techno (id_techno)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_projet FOREIGN KEY (id_projet)
        REFERENCES projet (id_projet)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);