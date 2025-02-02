import express from "express";
import { create, Datass, Search, SignUp } from "/workspaces/TugasSekolah/backend/Azy/controllers/controllers.js";
import multer from "multer";


const router = express.Router();
router.get('/',Datass);
router.post('/search',Search, );
router.post('/post',create,);
router.post('/form',SignUp,);


export default router;
