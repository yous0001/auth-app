import express from 'express';
import { connectDB } from './DB/connection.js';
import { config } from 'dotenv';
import authRouter from './SRC/modules/User/auth.routes.js';

config('.env')

const app = express();
const port =process.env.PORT || 5000;

app.use(express.json())
app.use('/auth',authRouter)


app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
});


