import {Router} from "express" ;
import { handleAdminValidation } from "../../../helpers/adminValidator";
const router = Router() ;
export default () : Router => {
    router.post('/validate-admin',handleAdminValidation) ;
    return router ;
}