import dotenv from "dotenv"  ;
import {Request,Response,NextFunction } from "express";
import { AuthRequestBody } from "../features/auth/types/auth";
import TryCatch from "./tryCatch";
dotenv.config() ;

export const handleAdminValidation = TryCatch(async(req:Request<{},{},AuthRequestBody>,res:Response,next:NextFunction) => {
    const adminEmail = process.env.admin_email ;
    const adminPassword = process.env.admin_password ;
     const {userEmail,userPassword} = req.body ;
     if((!userEmail) || (!userPassword)){
         return res.json({message:'Entering all fields is mandatory',status:409,success:false}) ;
     }
     else if((userEmail === adminEmail) && (userPassword === adminPassword)){
        return res.json({message:'Login successfull',status:201,success:true})
     }
    else {
         return res.json({message:'Invalid credentials',status:401,success:false}) ; 
     }          
})