import TryCatch from '../middlewares/TryCatch.js'
import oauth2client from '../config/googleauth.js'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import User from '../models/users.models.js';
import type { AuthenticatedRequest, userpayload } from '../middlewares/auth.middleware.js'

export const Login = TryCatch(async(req,res)=>{
    const {code} = req.body;
     console.log("Received code:", code);
    if (typeof code !== "string" || code.length === 0) {
        res.status(400).json({ message: "Google authorization code is required" })
        return
    }
    const googleRes = await oauth2client.getToken(code)
    oauth2client.setCredentials(googleRes.tokens)
    const UserRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
    console.log("User info from Google:", UserRes.data);
      const {name,email,picture} = UserRes.data
        let user = await User.findOne({email})
        const isNewUser = !user
        if(!user){
            user = await User.create({
                name,
                email,
                image:picture,
            })
        }
        const tokendata:userpayload = {_id:user._id.toString(),name:user.name,email:user.email,image:user.image}
         const token = jwt.sign(tokendata,process.env.SECRET as string,{
            expiresIn:'7d'
        })

      res.status(isNewUser ? 201 : 200).json({
            message: isNewUser ? "User Created" : "Login Successful",
            token:token,
            user
        })
        return

})

export const getme = TryCatch(async(req:AuthenticatedRequest,res)=>{
    const user = req.user
    if(!user){
        res.status(401).json({
            message:"Unauthorized"
        })
        return
    }
    res.status(200).json({
        message:"User Info",
        user
    })
})