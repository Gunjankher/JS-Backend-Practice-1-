import { asyncHandlar } from "../utilis/asyncHandlar.js";
import {ApiError} from '../utilis/ApiError.js'
import {User} from '../models/user.model.js'


const registerUser = asyncHandlar(async(req,res)=>{
 // get user details from frontend
 // validation- not empty 
 // check if user already exits
 // check for images and avatar 
 // upload them at cloudinary 
 // create user object - create entry in db 
 // remove password and refresh token from response 
 // check for user creation 
 // return response 

//    (1) getting the data from user 
const{fullName,email,username,password} = req.body
console.log("email" , email);

 

// (2)  validation - not empty 
if(
[fullName,email,username,password].some((field)=>field.trim() === "")
){
throw new ApiError(400, "All Fields are required")
}


// (3) check if user already exits 
User.findone({
    
})



})

export {registerUser}