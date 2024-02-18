
import { I_ObjectId } from "../../../types/http";
import {InferSchemaType,Schema,model} from "mongoose" ;

const cookieSchema = new Schema(
    {
        userName : {
            type:String
        } ,
        userEmail:{
            type:String
        } 
    }
)

export type cookies = InferSchemaType<typeof cookieSchema> & I_ObjectId ;
const CookiesModel = model("cookies",cookieSchema) ;
export default CookiesModel ; 



