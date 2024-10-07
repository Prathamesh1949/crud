import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRouts.js";
// const route = require("./routes/userRouts.js");

const app = express();


app.use(bodyParser.json());
dotenv.config();

// app.get("/",(req,res)=>{
//     res.send("Hii, I am live here...");
// })

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;


mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully.");
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
}).catch((error)=>console.log(error));


app.use("/api/user",route);