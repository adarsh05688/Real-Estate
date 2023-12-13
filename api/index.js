import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js';
import AuthRouter from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});


const app = express();
app.use(express.json());
app.listen(3000, ()=>{
    console.log("app is running on port 3000.....");
});

app.use('/api/user' , UserRouter);
app.use('/api/auth', AuthRouter)