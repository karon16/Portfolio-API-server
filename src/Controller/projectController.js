import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "../utils/cloudinary.js";

const parseJsonFile = () => {
  const dbFiles = readFileSync("./src/db/db.json", "utf8");
  const dbTable = JSON.parse(dbFiles);
  return dbTable;
};

const overRideJson = () => {
  const json = JSON.stringify(updatedTable);
  writeFileSync("./src/db/db.json", json, "utf8");
};

export const updatedTable = parseJsonFile();

export const getPortfolios = (req, res) => {
  try {
    res.send(updatedTable);
  } catch (err) {
    console.log(err);
  }
};

export const postProject = async (
  { body: { nom, tech, imagesPreview } },
  res
) => {
  try {
    const uploadedRessource = await cloudinary.uploader.upload(imagesPreview, {
      upload_preset: "projet_porfolio",
    });
    const newProject = await {
      id: uuidv4(),
      projectName: nom,
      tech: tech,
      image: uploadedRessource.public_id,
    };

    updatedTable.portfolios.push(newProject);
    overRideJson();
    res.send(parseJsonFile());
  } catch (error) {
    console.log("the error : ", error);
  }
};

export const getProject = ({ project }, res) => {
  res.send(project);
};

export const modifyProject = (
  { body: { nom, tech, imagesPreview }, project },
  res
) => {
  project.projectName = nom;
  project.tech = tech;
  project.image = imagesPreview;
  overRideJson();
  res.send(parseJsonFile());
};

export const deleteProject = ({ project }, res) => {
  const projectIndex = updatedTable.portfolios.indexOf(project);
  updatedTable.portfolios.splice(projectIndex, 1);
  overRideJson();
  res.send(parseJsonFile());
};
