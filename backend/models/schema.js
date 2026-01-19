import mongoose from "mongoose";
const schema=mongoose.Schema({
   title:{ 
    type:String,
    required:true,
   },
   author:{
    type:String,
    required:true,
   },
   publishYear:{
    type:Number,
    required:true,
   }
},{timestamp:true});
export const book=mongoose.model('book',schema);