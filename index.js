import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './server/routes/router.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Servidor funcionando en http://localhost:${PORT}/`);
});