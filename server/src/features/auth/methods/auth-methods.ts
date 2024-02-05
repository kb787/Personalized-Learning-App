import { Types } from "mongoose" ;
import { AuthRequestBody } from "../types/auth" ; 
import userAuthModel, {userAuth} from "../models/auth" ;

export const getUserAuthByEmail = async (email:string) => {
    const requiredUser = await userAuthModel.findOne({email}) ;  
    return requiredUser ;                                       
}

export const getUserAuthById = async (id:Types.ObjectId) => {
   const requiredUser = await userAuthModel.findById({id}) ;
   return requiredUser ;
}

export const deleteUserAuthById = async (id:Types.ObjectId) => {
   await userAuthModel.findByIdAndDelete({id}) ;  
}

export const createUserAuth = async (values:any) => {
   await userAuthModel.create(values) ; 
}

export const updateUserAuthById = async(id:Types.ObjectId,values:Partial<userAuth>) => {
   await userAuthModel.findByIdAndUpdate(id) ;
}
