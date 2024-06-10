import { ApiError } from "../utilis/ApiError.js";
import { asyncHandlar } from "../utilis/asyncHandlar.js";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";



export const verifyJWT = asyncHandlar(async(req,res,next)=>{

try {
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
    
    
     if(!token){
        throw new ApiError(401, "Unatuhorized Request")
     }
    
      const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
      const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
      )
    
      if(!user){
        throw new ApiError(401, "Invalid Access Token")
      }
    
      req.user = user
      next()
    
} catch (error) {
    throw new ApiError(401 , error.message || "Inavalid Access Token ")
}
})