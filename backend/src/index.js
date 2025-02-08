//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectdb from "./db/index.js";


dotenv.config({
    path: './env'
})


connectdb()
.then(()=>{
    app.listen(process.env.port||8000,()=>{
        console.log('server is running at: $
            {process.env.port}');
    })
})
.catch((err) => {
    console.log("mongodb connection failed !!",err);
})


























/*
import express from "express";

const app=express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.mongodb_uri}/${db_name}`)
app.on("error",(error)=>{
    console.log("error: ",error)
    throw error
})
    app.listen(process.env.port,()=>{
        console.log(`app is listning on port ${process.env.port}`)
    })
    } catch (error) {
        console.error("error :",error)
        throw error
    }
})()
    */