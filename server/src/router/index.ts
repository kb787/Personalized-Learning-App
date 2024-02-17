import {Router} from "express" ;

import authRouter from "../features/auth/routers/auth-router";
import profileRouter from "../features/profile/routers/profile-router";
import dotenv from 'dotenv'
const router = Router() ;
export default () : Router => {
    router.use('/auth',authRouter) ;
    router.use('/profile',profileRouter) ;
    return router ;
}