import { Collection } from "../model/collection.model";

exports.createCollection=catchAsyncFunction(async(req,res)=>{
    const {name,image,message}=req.body
    const newCollection=await Collection.create({name,image,message})
    return res.status(201).json({message:"collection created successfully",newCollection})
})

