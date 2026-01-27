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
route.put('/:id',async (req,res)=>
{
    try{
        if(!req.body)
        {
            return res.status(400).send({
            message:"unsuccesfully created"
        });
        }
        const id=req.params.id;
        const f=await book.findById(id);
        if(f){
        await book.findByIdAndUpdate(id,req.body);
        res.status(201).send({
            message:"succesfully created"
        })
    }
    else{
        res.status(404).send("id is not found")
    }
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
    res.status(200).send({length:result.length , data:result})
}catch(err)
{
    res.status(500).send({message:err.message});
}
})
route.get('/:id',async (req,res)=>
{
try{
    let id=req.params.id;
    const result=await book.findById(id);
    res.status(200).send(result)
}catch(err)
{
    res.status(500).send({message:err.message});
}
}) 
route.delete('/:id',async (req,res)=>
{
try{
    const id=req.params.id;
    const deletebook = await book.findByIdAndDelete(id);
    if(!deletebook)
    {
        res.status(404).send({message:"not found"});
    }
    res.status(200).send({"message":"succesfully deleted"});
}catch(err)
{
    res.status(500).send({message:err.message});
}
})
export default route;