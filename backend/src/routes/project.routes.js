import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createProject,
  listProjects,
   updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/projects", authMiddleware, createProject);
router.get("/projects", authMiddleware, listProjects);
router.put("/projects/:projectId", authMiddleware, updateProject);


export default router;
