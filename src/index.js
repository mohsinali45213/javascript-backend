import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

//database function call and server is created

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MongoDB Connection failed",err);
})