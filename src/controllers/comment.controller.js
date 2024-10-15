import { Comment } from "../models/comment.model";
import { ApiError } from "../utilis/ApiError";
import { ApiResponse } from "../utilis/ApiResponse";
import { asyncHandlar } from "../utilis/asyncHandlar";

const getVideoComments = asyncHandlar(async(req,res)=>{

})


export {
    getVideoComments
}