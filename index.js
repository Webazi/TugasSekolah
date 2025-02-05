import express from 'express';
import router from '../routes/index.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';


const app = express();


const port = 6001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload());
app.use(router);


app.listen(port, () => console.log(`http://localhost:${port}`));
