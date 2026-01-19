import express from 'express';
import {book} from '../models/schema.js';
const route=express.Router();
route.post('/',async (req,res)=>
{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear)
        {
            return res.status(400).send({
            message:"unsuccesfully created"
        });
        }
        let newbook={
            title:req.body.title , author:req.body.author,publishYear:req.body.publishYear
        }
        await book.create(newbook);
        res.status(201).send({
            message:"succesfully created"
        })
    }
    catch(err)
    {
        res.status(500).send({message:err.message});
    }
})
route.get('/',async (req,res)=>
{
try{
    const result=await book.find({});
    res.status(200).send(result)
}catch(err)
{
    res.status(500).send({message:err.message});
}
})
export default route;