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



const toggleCommentLike = asyncHandlar(async(req,res)=>{

// take id from params
// check if it is valid object id 
// check if comment is already liked 
// put the if  conditon to remove comment like and return 
// create like instance 
// return res


const {commentId} = req.params

if(!isValidObjectId(commentId)){
    throw new ApiError(400,"Invalid CommentId")
}


const likedAlready = await Like.findOne({
    comment :commentId,
    likedBy : req.user?._id,
})



if(likedAlready){
    await Like.findByIdAndDelete(likedAlready?._id)

return res
.status(200)
.json(new ApiResponse(200, {isLiked :false}))


}

await Like.create({
    comment :commentId,
    likedBy :req.user?._id
})



return res
.status(200)
.json(400, new ApiResponse(200), {isLiked :true})

})


const toggleTweetLike = asyncHandlar(async(req,res)=>{
    const {tweetId} = req.params

if(!isValidObjectId(tweetId)){
    throw new ApiError(400,`Invlaid TweetId`)
}


const likedAlready = await Like.findOne({
    tweet: tweetId,
    likedBy: req.user?._id,
});

if (likedAlready) {
    await Like.findByIdAndDelete(likedAlready?._id);

    return res
        .status(200)
        .json(new ApiResponse(200, { tweetId, isLiked: false }));
}

await Like.create({
    tweet: tweetId,
    likedBy: req.user?._id,
});

return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }));


})




export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,

}

