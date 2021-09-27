import express from "express";
import { getCategories } from "../Controller/Categories.Controller.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", getCategories);

export default categoriesRouter;
