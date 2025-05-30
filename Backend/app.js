
import express from "express";
const app=express();
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
dotenv.config("./.env")

import short_url from "./src/routes/short_url.route.js";
import connectDB from "./src/config/mongo.config.js"
import urlSchema from "./src/models/short_url.model.js"


app.use(express.json()) //body parser 
app.use(express.urlencoded({extended:true}))

// app.post("/api/create",(req,res)=>{
//     const {url}=req.body
//     // console.log(url);
//     const shortUrl=nanoid(7);
//     const newUrl=new urlSchema({
//         full_url:url,
//         short_url:shortUrl
//     })
//     newUrl.save()
//     res.send(nanoid(7));
// })
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)
app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on port http://localhost:3000");
})

//get -redirection 

//post-create short url