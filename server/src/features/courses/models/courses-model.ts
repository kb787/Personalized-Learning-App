import { I_ObjectId } from "../../../types/http"; 
import {InferSchemaType,Schema,model} from "mongoose" ;

const coursesSchema = new Schema(
    {
        courseName : {
            type:String
        } ,
        courseCategory : {
            type:String ,
            enum : ['web-dev','app-dev','dev-ops','data-science','machine-learning','cloud-computing','blockchain','frontend-dev','backend-dev','fullstack-java','mern-stack','python-fullstack','python','javascript','java','c#','game-dev'] 
        } ,
        courseDifficultyLevel : {
            type:String ,
            enum : ['beginner','intermediate','advanced'] 
        } 

    } 
)

export type courses = InferSchemaType<typeof coursesSchema> & I_ObjectId ;
const CoursesModel = model("courses",coursesSchema) ;
export default CoursesModel ;

