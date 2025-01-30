import express from "express";
import { Datass } from "/workspaces/TugasSekolah/backend/Azy/controllers/controllers.js";

const router = express.Router();

router.get('/',Datass);

export default router;
