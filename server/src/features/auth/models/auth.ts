import { I_ObjectId } from "../../../types/http";
import { InferSchemaType,Schema,model } from "mongoose";

const userAuthSchema = new Schema(
    {
        userName : {
           type:String,
           required:true,
           unique:true 
        },
        userEmail : {
            type:String ,
            unique:true
        } ,
        userPassword : {
             type:String ,
        } ,
        sessionToken : {
             type:String ,
             unique:true
        } ,
        profileId : {
             type:Schema.Types.ObjectId ,
             ref:"Profile"  
        }
    }
)

export type userAuth = InferSchemaType<typeof userAuthSchema> & I_ObjectId ;

const userAuthModel = model("userauth",userAuthSchema) ;
export default userAuthModel ;