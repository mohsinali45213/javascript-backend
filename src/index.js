import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config()
connectDB();

console.log(process.env.MONGODB_URL);
console.log(process.env.PORT);

// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants.js";
// const app = express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Application not able to talk",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR:",error);

//     }
// })();
