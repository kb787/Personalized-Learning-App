import { Request } from "express";
import { AuthRequestBody } from "../types/auth";
import TryCatch from "../../../helpers/tryCatch";
import { getUserAuthByEmail,getUserAuthById,updateUserAuthById,deleteUserAuthById,createUserAuth} from "../methods/auth-methods";
import bcryptjs from 'bcryptjs' ; 
import { connectDatabaseAndInsertData } from "../../../helpers/cookieHandler";

export const handleUserRegistration = TryCatch(
    async(req:Request<{},{},AuthRequestBody>,res,next) => {
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
            return res.json({message:'User created successfully',status:201}) ;
        }
        else {
             return res.json({message:'User Already exists'}) ;
        }
    }
)



export const handleUserLogin = TryCatch(
    async(req:Request<{},{},AuthRequestBody>,res,next) => {
        const {userEmail,userPassword} = req.body ;
        if((!userEmail) || (!userPassword) )
        {
            return res.json({message:'Entering all fields is mandatory',status:400}) ;
        }
        else {
            const reqUser = await getUserAuthByEmail(userEmail) ;
            if(!reqUser){
                 return res.json({message:'No account found',status:400}) ; 
            } 
            const comparisonOutput = await bcryptjs.compare(userPassword,reqUser.userPassword as string) ;

            if(comparisonOutput !== true){
                return res.json({message:'Invalid credentials',status:400}) ; 
            }
            connectDatabaseAndInsertData(reqUser.userName as string,reqUser.userEmail as string) ;
            return res.json({message:'Login successfull',status:201}) ;

            
        }
    }
)

