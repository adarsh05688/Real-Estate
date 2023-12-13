import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv';
dotenv.config();
 
 
mongoose.connect("mongodb+srv://adarsh056880:12345@mern-estate.w2p0gjl.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err);
});
 
const app = express();

app.listen(3000,()=>{
    console.log("server is running in port 3000....");
})

app.use('/api/user', userRouter);