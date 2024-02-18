import TryCatch from "../../../helpers/tryCatch" ;
import { UserProfileBody } from "../types/profile";
import {Request,Response,NextFunction} from "express" ;
import { getUserProfileById,deleteUserProfileById,updateUserProfileById,createUserProfile} from "../methods/profile-methods"; 
import { ObjectId } from "mongodb";

export const userProfileCreationController = TryCatch(async(req : Request<{}, {} , UserProfileBody>,res:Response,next:NextFunction) => {
     const {firstName,lastName,skillSets,skillSetsLevel,degreeName,degreeUniversity,degreeSpecialization} = req.body ;
     if((!firstName) || (!lastName) || (!skillSets) || (!skillSetsLevel) || (!degreeName) || (!degreeUniversity) || (!degreeSpecialization)){
          return res.json({message:'Entering all fields is mandatory',status:500}) ;
     }
     else {
         const values = {
            firstName:firstName,
            lastName:lastName,
            skillSets:skillSets,
            skillSetsLevel:skillSetsLevel,
            degreeName:degreeName,
            degreeUniversity:degreeName,
            degreeSpecialization:degreeSpecialization
         }
         const reqObject = await createUserProfile(values) ;
         return res.json({message:'Profile created successfully',status:201,reqObject}) ;
     }

}) 

export const userProfileUpdationController = TryCatch(async(req:Request<{},{},UserProfileBody>,res:Response,next:NextFunction) => {
    const id = req.params ;
    const reqObject = updateUserProfileById(id as ObjectId) ;
    if(!reqObject){
        return res.json({message:'Unable to get the profile',status:404}) ;
    }
    return res.json({message:'Profile updation successfull',status:201,reqObject}) ;
}
)

export const userProfileDeletionController = TryCatch(async(req:Request<{},{},UserProfileBody>,res:Response,next:NextFunction) => {
    const id = req.params ;
    const reqObject = deleteUserProfileById(id as ObjectId) ;
    if(!reqObject){
        return res.json({message:'Unable to get the profile',status:404}) ;
    }
    else {
        return res.json({message:'User deleted successfully',status:201}) ;
    }
}
)

export const userProfileRetreivalController = TryCatch(async(req:Request<{},{},UserProfileBody>,res:Response,next:NextFunction) => {
    const id = req.params ;
    const reqObject = getUserProfileById(id as ObjectId) ;
    if(!reqObject){
        return res.json({message:'Profile not found',status:404}) ;
    }
    else {
        return res.json(reqObject) ;
    }
})
              

       
