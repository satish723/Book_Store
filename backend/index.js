import express from "express";
import mongoose from 'mongoose';
import {PORT,mongoDbUrl} from "./config.js"
import route from './routes/bookroute.js'
const app=express();
app.get('/',(req,res)=>
{
    res.status(200).send("route page");
})
app.use(express.json());
app.use('/book',route)
async function main(){
    try{
        await mongoose.connect(mongoDbUrl);
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