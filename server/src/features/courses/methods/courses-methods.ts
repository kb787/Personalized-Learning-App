import { Types } from "mongoose"; 
import CoursesModel from "../models/courses-model"; 
import  {CoursesBody} from "../types/courses" ;

export const findAllCourses = async() => {
     const reqObject = await CoursesModel.find() ;
     return reqObject ; 
}

export const findCoursesCriteria = async(myCourseName:any,myCourseCategory:any,myCourseDifficultyLevel:any) => {
    let answerFind = await findAllCourses() ;
    const filteredItems = answerFind.filter((item) => ((item.courseName === myCourseName) && (item.courseCategory === myCourseCategory) && (item.courseDifficultyLevel === myCourseDifficultyLevel))) ;
    return filteredItems ;
}

export const publishNewCourse = async(values:any) => {
     await CoursesModel.create(values) ; 
}

export const deleteCourseById = async(id:Types.ObjectId) => {
     const reqObject = await CoursesModel.findByIdAndDelete({id}) ;
     return reqObject ;
} 

export const updateCourseById = async(id:Types.ObjectId) => {
    const reqObject = await CoursesModel.findByIdAndUpdate({id}) ;
    return reqObject ;
}