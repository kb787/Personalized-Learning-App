import { I_ObjectId } from "../../../types/http"; 
import { InferSchemaType,Schema,model } from "mongoose";

const userProfileSchema = new Schema(
    {
        firstName : {
            type:String 
        } ,
        lastName : {
            type:String
        } ,
        skillSets : {
            type:Array
        },
        skillSetsLevel : {
            type:String,
            enum:['beginner','intermediate','advanced']      
        } ,
        degreeName : {
            type:String ,
        } ,
        degreeUniversity : {
            type:String
        } ,
        degreeSpecialization : {
            type:String
        }
    }
)

export type userProfile = InferSchemaType<typeof userProfileSchema> & I_ObjectId ;
const userProfileModel = model("user",userProfileSchema) ; 
export default userProfileModel ;
