import {Router} from "express" ;

import authRouter from "../features/auth/routers/auth-router";
import profileRouter from "../features/profile/routers/profile-router";
import coursesRouter from "../features/courses/routers/courses-router";
import adminRouter from "../features/admin-auth/routers/admin-router";
import dotenv from 'dotenv'
const router = Router() ;
export default () : Router => {
    router.use('/auth',authRouter()) ;
    router.use('/profile',profileRouter()) ;
    router.use('/course',coursesRouter()) ;
    router.use('/admin',adminRouter()) ;
    return router ;
}