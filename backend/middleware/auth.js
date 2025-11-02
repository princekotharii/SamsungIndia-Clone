import jwt from "jsonwebtoken"
import { user } from "../models/userModel.js"
export async function authMiddleware(req ,res ,next) {
    
try {
    const Token= req?.cookies?.accessToken

    if(!Token){    
        return res.status(401)
        .json({
            message:'Cookies not found',
            error:true,
            success:false
        })
    }
    const varifyToken=jwt.verify(Token,Process.env.JWT_SECRETS)
    console.log(varifyToken);
    if(!varifyToken){
        return res.status(401)
        .json({
            message:'invalid token',
            error:true,
            success:false
        })
    }
    
    const User = await user.findById(varifyToken._id)
    req.user=User
    console.log(User);
    
    next()
} catch (error) {
    console.log(error);
    
}

}
         
