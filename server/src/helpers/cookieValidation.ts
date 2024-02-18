import TryCatch from "./tryCatch";
import { CookieBody } from "../features/cookies/types/cookie";
import CookiesModel from "../features/cookies/models/cookie-model";
import {Request,Response,NextFunction } from "express";

export const validateCookiePresent = TryCatch(async(req:Request<{},{},CookieBody>,res:Response,next:NextFunction) => {
      const {userName,userEmail} = req.body ;
      if((!userName) || (!userEmail)) {
          return res.json({message:'Entering all fields is mandatory',status:409}) 
      }
      else {
         const answerFinding = await CookiesModel.findOne({userName}) ;
         if(!answerFinding){
             return res.json({message:'User does not exists',status:404}) ;
         }
         else if(answerFinding.userEmail !== req.body.userEmail){
             return res.json({message:'Cookie mismatch',status:404}) ;
         }
         else {
             return res.json({message:'Successfully got the cookie',status:201}) ; 
         }  
      }  
}  
)
