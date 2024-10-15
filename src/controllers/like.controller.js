import { isValidObjectId } from "mongoose";
import { ApiError } from "../utilis/ApiError";
import { ApiResponse } from "../utilis/ApiResponse";
import { asyncHandlar } from "../utilis/asyncHandlar";
import { Like } from "../models/like.model";


const toggleVideoLike  = asyncHandlar(async(req,res)=>{
    const {videoId} = req.params

if(!isValidObjectId(videoId)){
    throw new ApiError(400,"Invalid videoId")
}

const likedAlready = await Like.findOne({
    video :videoId,
    likedBy :req.user?._id,
})

if(likedAlready){
    await Like.findByIdAndUpdate(likedAlready?._id)

return res
.status(200)
.json(new ApiResponse(200,{isLiked :false}))


}

await Like.create({
    video:videoId,
    likedBy :req.user?._id
})


return res
.status(200)
.json(new ApiResponse(200,{isLiked :true}))


})






export {
    toggleVideoLike,

}

