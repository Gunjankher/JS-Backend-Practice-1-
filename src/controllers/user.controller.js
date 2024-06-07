import { asyncHandlar } from "../utilis/asyncHandlar.js";


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








})

export {registerUser}