import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './server/routes/router.js';
import cors from 'cors';
import 'ejs'
import { comprobations } from './server/models/associations/associations.js';
dotenv.config();

const app = express();
app.use(cors());
app.set('view engine','ejs');
// Carpeta pública
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(router);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your actual origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT,async()=>{
    await comprobations();
    console.log(`Servidor funcionando en http://localhost:${PORT}/`);
});