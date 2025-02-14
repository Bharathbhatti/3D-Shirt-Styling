import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bhattiRoutes from './routes/bhatti.routes.js';

dotenv.config();


const app=express();
app.use(cors());
app.use(express.json({limit:"50mb"}))

app.use('/api/v1/bhatti',bhattiRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from Bhatti"})
})


app.listen(8080,()=>console.log('server has started on port 8080'));