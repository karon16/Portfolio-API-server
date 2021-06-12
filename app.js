import express, { json } from "express";
import cors from "cors";
import routes from "./src/Routes/routes.js";

const server = express();

const PORT = 4000;

server.use(cors());
server.use(json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
routes(server);

server.listen(PORT, () =>
  console.log(`Le serveur écoute sur http://localhost:${PORT}`)
);
