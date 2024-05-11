// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(() => {
    app.on("error",()=>{
        console.log("Error");
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("Error is there",err);
})

/* 1 Approach 
import express from "express"
const app =express()
(async()=>{
    try {
        await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERR:");
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listenining on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERR",error);
        throw error;
    }
})()
*/