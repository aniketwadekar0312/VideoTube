import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "/.env"
})

const port=process.env.PORT || 8000

connectDB()
.then(()=>{
  app.on((error)=>{
    console.error("MongoDB Connection Failed",error)
  })
  app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
  })
})
.catch((error)=>{
  console.log("MongoDB Connection Failed",error);
})























// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import dotenv from "dotenv";
// import express from "express";

// dotenv.config();

// const app=express()
// const port=process.env.PORT 

// ;(async () => {
//   try {
//     // console.log(process.env.PORT);
//     // console.log(process.env.MONGODB_URI);
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error)=>{
//       console.log("MongoDB connection",error);
//     })

//     app.listen(port,()=>{
//       console.log("Server is listening on port",port);
//     })

//   } catch (error) {
//     console.error("MongoDB Connection Failed ", error);
//     throw error;
//   }
// })()


