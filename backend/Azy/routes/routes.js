import express from "express";
import { create, Datass, Delete, Search, SignUp } from "../controllers/controllers.js";
import multer from "multer";
import {verifyToken }from "../middleware/mid.js";


const router = express.Router();
router.get('/',Datass, verifyToken);
router.post('/search',Search, );
router.post('/post',create,);
router.post('/form',SignUp,);
router.delete('/delete/:id',Delete);


export default router;
