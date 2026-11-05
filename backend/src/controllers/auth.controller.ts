import {TryCatch} from '../middlewares/TryCatch'

export const Login = TryCatch(async(req,res)=>{
    const {code} = req.body;
    

}