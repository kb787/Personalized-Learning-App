import { Request,Response,NextFunction } from "express";
import { AuthRequestBody } from "../types/auth";
import TryCatch from "../../../helpers/tryCatch";
import { getUserAuthByEmail,getUserAuthById,updateUserAuthById,deleteUserAuthById,createUserAuth} from "../methods/auth-methods";
import bcryptjs from 'bcryptjs' ; 
import { connectDatabaseAndInsertData } from "../../../helpers/cookieHandler";

export const handleUserRegistration = TryCatch(
    async(req:Request<{},{},AuthRequestBody>,res:Response,next:NextFunction) => {
        const {userName,userEmail,userPassword} = req.body ;
        if((!userName) || (!userEmail) || (!userPassword)){
            return res.json({message:'Entering all fields is mandatory',status:404}) ;
        } 
        const prevUser = await getUserAuthByEmail(userEmail) ;
        if(!prevUser){
            const password = req.body.userPassword ;
            const salt = await bcryptjs.genSalt(10) ;
            const hashedPassword = await bcryptjs.hash(password,salt) ;
            createUserAuth({userName,userEmail,userPassword:hashedPassword}) ;
            connectDatabaseAndInsertData(userName,userEmail) ;
            return res.json({message:'User created successfully',status:201}) ;
        }
        else {
             return res.json({message:'User Already exists'}) ;
        }
    }
)

export const handleUserLogin = TryCatch(
    async(req:Request<{},{},AuthRequestBody>,res:Response,next:NextFunction) => {
        const {userEmail,userPassword} = req.body ;
        if((!userEmail) || (!userPassword) )
        {
            return res.json({message:'Entering all fields is mandatory',status:409}) ;
        }
        else {
            const reqUser = await getUserAuthByEmail(userEmail) ;
            if(!reqUser){
                 return res.json({message:'No account found',status:404}) ; 
            } 
            const comparisonOutput = await bcryptjs.compare(userPassword,reqUser.userPassword!) ;
            if(!comparisonOutput){
                return res.json({message:'Invalid credentials',status:400}) ; 
            }
            return res.json({message:'Login successfull',status:201}) ;
        }
    }
)

