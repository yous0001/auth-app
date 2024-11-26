import express from 'express';
import { connectDB } from './DB/connection.js';
import { config } from 'dotenv';

config('.env')
const app = express();
const port =3000;


app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
});


