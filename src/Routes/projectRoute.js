import express from "express";
import { projectController } from "../Controller/projectController.js";
import {
  findByName,
  checkProject,
  validateBody,
} from "../middleware/portfoliosMiddleware.js";

const router = express.Router();

router.get("/projects", projectController.get);
router.post(`/project`, validateBody, findByName, projectController.post);
router.get(`/project/:id`, checkProject, projectController.getProject);
router.put(`/project/:id`, checkProject, projectController.update);
router.delete(`/project/:id`, checkProject, projectController.deleteProject);

export default router;
