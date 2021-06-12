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

const updatedTable = parseJsonFile();
const BASE_URL = "/portfolios";

const checkProject = (req, res, next) => {
  const id = req.params.id;
  const project = updatedTable.portfolios.find((project) => project.id == id);
  if (!project)
    return res.status(404).json({ status: 404, message: "Project not fund" });
  req.project = project;
  next();
};

const routes = (server) => {
  server.route(BASE_URL).get((req, res) => {
    try {
      res.send(updatedTable);
    } catch (err) {
      console.log(err);
    }
  });

  server
    .route(`${BASE_URL}/project`)
    .post(async ({ body: { nom, tech, imagesPreview } }, res) => {
      try {
        const uploadedRessource = await cloudinary.uploader.upload(
          imagesPreview,
          {
            upload_preset: "projet_porfolio",
          }
        );
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
    });

  server
    .route(`${BASE_URL}/project/:id`)
    .get(checkProject, ({ project }, res) => {
      res.send(project);
    })
    .put(checkProject, ({ body: { nom, tech }, project }, res) => {
      project.projectName = nom;
      project.tech = tech;
      overRideJson();
      res.send(parseJsonFile());
    })
    .delete(checkProject, ({ project }, res) => {
      const projectIndex = updatedTable.portfolios.indexOf(project);
      updatedTable.portfolios.splice(projectIndex, 1);
      overRideJson();
      res.send(parseJsonFile());
    });
};

export default routes;
