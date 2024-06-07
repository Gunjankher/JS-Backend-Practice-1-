import { asyncHandlar } from "../utilis/asyncHandlar.js";


const registerUser = asyncHandlar(async(req,res)=>{

res.status(200).json({
    message : "This is a First Response"
})

})

export {registerUser}