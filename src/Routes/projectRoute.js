import express from "express";
import {
  getPortfolios,
  postProject,
  getProject,
  modifyProject,
  deleteProject,
} from "../Controller/projectController.js";
import {
  checkProject,
  validateBody,
} from "../middleware/portfoliosMiddleware.js";

const router = express.Router();

router.get("/", getPortfolios);
router.post(`/project`, validateBody, postProject);
router.get(`/project/:id`, checkProject, getProject);
router.put(`/project/:id`, validateBody, checkProject, modifyProject);
router.delete(`/project/:id`, checkProject, deleteProject);

export default router;
