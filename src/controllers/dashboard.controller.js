import { Video } from "../models/video.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { asyncHandlar } from "../utilis/asyncHandlar.js";



const getChannelStats = asyncHandlar(async(req,res)=>{
    // aggregte
})

const getChannelVideos = asyncHandlar(async(req,res)=>{
// aggregate
})



export {
    getChannelStats,
    getChannelVideos
}