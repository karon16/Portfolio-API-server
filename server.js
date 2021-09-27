import express, { json } from "express";
import cors from "cors";
import projectRouter from "./src/Routes/projectRoute.js";
import categoriesRouter from "./src/Routes/categories.route.js";
import paths from "./src/config/path.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

server.use(cors());
server.use(json({ limit: "50mb" }));
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(paths.portfoliosBaseURI, projectRouter);
server.use(paths.portfoliosBaseURI, categoriesRouter);

server.listen(PORT, () =>
  console.log(`Le serveur écoute sur http://localhost:${PORT}`)
);
