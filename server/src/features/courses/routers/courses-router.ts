import { Router } from "express"; 
import {handleSearchingAllCourses,handleSearchFilteredCourses,handleCreateNewCourse,handleUpdateCoursesById,handleDeleteCourseById } from "../controllers/courses-controllers"; 
import { validateCookiePresent} from "../../../helpers/cookieValidation";
import { handleAdminValidation } from "../../../helpers/adminValidator";
const router = Router() ;

export default () : Router => {
    router.get("/get-all-courses",validateCookiePresent,handleSearchingAllCourses) ;
    router.get("/get-filtered-courses",validateCookiePresent,handleSearchFilteredCourses) ;
    router.post("/publish-new-course",handleAdminValidation,handleCreateNewCourse) ;
    router.patch("/update-prev-course/:id",handleAdminValidation,handleUpdateCoursesById) ;
    router.delete("/delete-prev-course/:id",handleAdminValidation,handleDeleteCourseById) ;   
    return router ;
}