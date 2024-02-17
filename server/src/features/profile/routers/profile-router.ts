import { Router } from "express";
import {userProfileCreationController,userProfileUpdationController,userProfileDeletionController,userProfileRetreivalController} from "../controllers/profile-controllers" ;
const router = Router() ;

export default ():Router => {
  router.get("/get-user-profile/:id",userProfileRetreivalController) ;
  router.post("/post-user-profile",userProfileCreationController) ;
  router.patch("/update-user-profile/:id",userProfileUpdationController) ;
  router.delete("/delete-user-profile/:id",userProfileDeletionController) ;
  return router ;  
}