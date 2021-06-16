import { updatedTable } from "../Controller/projectController.js";

export const checkProject = (req, res, next) => {
  const id = req.params.id;
  const project = updatedTable.portfolios.find((project) => project.id == id);
  if (!project)
    return res.status(404).json({ status: 404, message: "Project not fund" });
  req.project = project;
  next();
};

export const validateBody = (
  { body: { nom, tech, imagesPreview } },
  res,
  next
) => {
  const values = [nom, tech, imagesPreview];
  if (values.some((value) => value.length === 0)) {
    return res
      .status(422)
      .json({ message: "Veuillez bien remplir les champs" });
  }
  next();
};
