import express from "express";
import * as dotenv from "dotenv";
import   OpenAI from 'openai';


dotenv.config();

const router=express.Router();

const config =new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai=new OpenAI(config);


router.route('/').get(async(req,res)=>{
    
    res.status(200).json({messgae:"Hello Bhatti"})
})

router.route('/').post(async(req,res)=>{
    try {
        console.log(req.body)
        const {prompt}=req.body;
        const response=await openai.chat.completions({
            model:"dall-e-2",
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        });

        const image=response.data.data[0].b64_json;

        res.status(200).json({photo:image})
    } catch (error) {
        console.error(error);
        res.status(500).json({messgae:"Something went wrong"})
        
    }
})

export default router;