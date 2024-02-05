import { Router } from "express";
import { handleUserRegistration,handleUserLogin } from "../controllers/auth-controllers";
const router = Router() ;

export default (): Router => {
    router.post('/reg-user',handleUserRegistration) ;
    router.post('/login-user',handleUserLogin) ;
} 