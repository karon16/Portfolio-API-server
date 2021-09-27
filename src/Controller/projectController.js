/* eslint-disable no-unused-vars */
import cloudinary from "../utils/cloudinary.js";
import { Project } from "../Model/project.model.js";

export const projectController = {
  get: (req, res) => {
    Project.index((error, result) => {
      if (error) throw error;
      res.send(result);
    });
  },
  post: async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    try {
      const uploadedRessource = await cloudinary.uploader.upload(
        req.body.imagesPreview,
        {
          upload_preset: "projet_porfolio",
        }
      );
      req.body.imagesPreview = uploadedRessource.public_id;
    } catch (error) {
      console.log("new erro", error);
    }
    await Project.create(req.body, (error) => {
      try {
        if (error) throw error;
        res.send("post sent");
      } catch (error) {
        console.log("myerror", error);
      }
    });
  },

  getProject: (req, res) => {
    Project.findProject(req.params.id, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  },

  deleteProject: (req, res) => {
    Project.deleteProject(req.params.id, (error, result) => {
      if (error) throw error;
      res.send("project deleted");
    });
  },

  update: (req, res) => {
    Project.updateProject(req.params.id, req.body, (error, result) => {
      if (error) throw error;
      res.send("Project updated");
    });
  },
};
