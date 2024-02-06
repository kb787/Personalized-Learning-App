import {Router} from "express" ;

import authRouter from "../features/auth/routers/auth-router";
import dotenv from 'dotenv'
const router = Router() ;
export default () : Router => {
    router.use('/auth',authRouter) ;
    return router ;
}