import express from 'express';
import router from './backend/Azy/routes/routes.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';


const app = express();




app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload());
app.use(router);

const PORT = process.env.PORT || 6000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});