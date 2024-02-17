import { Types } from "mongoose"; 
import userProfileModel from "../models/profile";

export const getUserProfileById = async(id:Types.ObjectId) => {
   const reqUser = await userProfileModel.findById({id}) ; 
   return reqUser ;
}

export const deleteUserProfileById = async(id:Types.ObjectId) => {
    const reqUser = await userProfileModel.findByIdAndDelete({id}) ;
    await reqUser?.save() ;
    return reqUser ; 
}

export const updateUserProfileById = async(id:Types.ObjectId) => {
    const reqUser = await userProfileModel.findByIdAndUpdate({id}) ;
    await reqUser?.save() ;
    return reqUser ;
}

export const createUserProfile = async(values:any) => {
    await userProfileModel.create(values) ;
}