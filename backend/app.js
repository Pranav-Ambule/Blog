//USmGOenD8l3WCIYm
import express  from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app =express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router); 
app.use("/api/blog",blogRouter); 
// http://localhost:5000/api/user/

mongoose
    .connect(
        'mongodb+srv://admin:USmGOenD8l3WCIYm@cluster0.z7lszun.mongodb.net/Blog?retryWrites=true&w=majority')
        .then(()=>app.listen(5000))
        .then(()=>
        console.log("Connected to database and listening to Localhost 5000"))
        .catch((err)=>console.log(err));