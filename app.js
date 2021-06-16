import express, { json } from "express";
import cors from "cors";
import projectRouter from "./src/Routes/projectRoute.js";
import paths from "./src/config/path.js";

const server = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

server.use(cors());
server.use(json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(paths.portfoliosBaseURI, projectRouter);

server.listen(PORT, () =>
  console.log(`Le serveur écoute sur http://localhost:${PORT}`)
);
