import express from "express";
import mongoose from 'mongoose';
import {PORT} from "./config.js"
import route from './routes/bookroute.js'
import cors from 'cors';
import dotenv from 'dotenv';    
dotenv.config();
const app=express();
app.get('/',(req,res)=>
    {
        res.status(200).send("route page");
    })
    app.use(express.json());
    app.use(cors())
    app.use('/book',route)
async function main(){
    try{
        await mongoose.connect(process.env.mongoDbUrl);
        console.log("success in connection")
        app.listen(PORT,()=>
        {
            console.log("sever running on http://localhost:3000");
        })
        }
        catch(err)
        {
            console.log(err.message);
        }
}
main();