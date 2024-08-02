import { Video } from "../models/video.model";
import { ApiError } from "../utilis/ApiError";
import { ApiResponse } from "../utilis/ApiResponse";
import { asyncHandlar } from "../utilis/asyncHandlar";
import { uploadOnCloudinary } from "../utilis/cloudinary";




const publishVideo = asyncHandlar(async(req,res)=>{

const {title,description} = req.body

if([title,description].some((field)=>field.trim()===0)){
    throw new ApiError(401,`All Fields are Required`)
}

 const videoFileLocalPath = req.files?.videoFile[0].path
const thumbnailLocalPath = req.files?.thumbnail[0].path

if(!videoFileLocalPath){
throw new ApiError(400, `videoLocalpath is required`)
}
if(!thumbnailLocalPath){
throw new ApiError(400, `thumbnailLocalPath is required`)
}



  const videoFile = await uploadOnCloudinary(videoFileLocalPath)
  const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)

  if(!videoFile){
    throw new ApiError(400, `videoFile is required`)
  }
  if(!thumbnail){
    throw new ApiError(400, ` thumbnail is required`)
  }


 const video = await Video.create({
    title,
    description,
    duration :videoFile.duration,
    videoFile :{
        url :videoFile.url,
        public_id : videoFile.public_id
    },
    thumbnail :{
        url :thumbnail.url,
        public_id :thumbnail.public_id
    },
    owner : req.user?._id,
    isPublished : false
})

 const videoUploaded = await Video.findById(video._id)


if(!videoUploaded){
    throw new ApiError(400, `Uploading failed please try again`)
}

return res
        .status(200)
        .json(new ApiResponse(200, video, "Video uploaded successfully"));

})