import TryCatch from "../../../helpers/tryCatch";
import {Request,Response,NextFunction} from "express" ;
import { CoursesBody } from "../types/courses";
import {findAllCourses,findCoursesCriteria,publishNewCourse,updateCourseById,deleteCourseById} from "../methods/courses-methods";
import { ObjectId } from "mongodb";

export const handleSearchingAllCourses = TryCatch(async(req:Request<{},{},CoursesBody>,res:Response,next:NextFunction) => {
     const response = await findAllCourses() ;
     if(!response){
         return res.json(404).json({message:'Unable to find courses',status:404}) ;
     }
     else {
         return res.json(response) ;
     }
}
)

export const handleSearchFilteredCourses = TryCatch(async(req:Request<{},{},CoursesBody>,res:Response,next:NextFunction) => {
       const {courseName,courseCategory,courseDifficultyLevel} = req.body ;
       const result = await findCoursesCriteria(courseName,courseCategory,courseDifficultyLevel) ;
       if(!result){
          return res.json({message:'Courses not found',status:404}) ;
       }
       else {
         return res.json(result) ;
       }
}
)

export const handleCreateNewCourse = TryCatch(async(req:Request<{},{},CoursesBody>,res:Response,next:NextFunction) => {
      const {courseName,courseCategory,courseDifficultyLevel} = req.body ;
      const coursesObject = {
          courseName:courseName ,
          courseCategory:courseCategory ,
          courseDifficultyLevel:courseDifficultyLevel 
      }
      const resAnswer = await publishNewCourse(coursesObject) ;
      if(resAnswer === null){
           return res.json({message:'Unable to publish your course',status:409}) ;
      } 
      else {
           return res.json({message:'Successfully published your course',status:201}) ;
      }
}
)

export const handleUpdateCoursesById = TryCatch(async(req:Request<{},{},CoursesBody>,res:Response,next:NextFunction) => {
       const id = req.params ;
       const answerResponse = await updateCourseById(id as ObjectId) ;
       if(!answerResponse){
          return res.json({message:'Course with mentioned id not found',status:404}) ;
       }
       else {
          return res.json({message:'Successfully updated the course details',status:201}) ;
       }
 }
)

export const handleDeleteCourseById = TryCatch(async(req:Request<{},{},CoursesBody>,res:Response,next:NextFunction) => {
      const id = req.params ;
      const answerResponse = await deleteCourseById(id as ObjectId) ;
      if(!answerResponse){
         return res.json({message:'Coure with mentioned id not found',status:404}) ;
      }
      else {
         return res.json(answerResponse) ;
      }
}
)


