import express from "express";
import { create, Datass, Delete, Search, SignUp } from "../controllers/controllers.js";
import multer from "multer";


const router = express.Router();
router.get('/',Datass);
router.post('/search',Search, );
router.post('/post',create,);
router.post('/form',SignUp,);
router.delete('/delete/:id',Delete);


export default router;
