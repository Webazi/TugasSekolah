import express from 'express';
import router from '/workspaces/TugasSekolah/backend/Azy/routes/routes.js';



const app = express();
app.use(router)

const port = 6000;




app.listen(port, () => console.log(`http://localhost:${port}`));
