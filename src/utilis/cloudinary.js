  import {v2 as cloudinary} from 'cloudinary'
import { log } from 'console';
  import fs from 'fs'

          
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
  });



  const uploadOnCloudinary = async(localFilePath)=>{
try {
    if(!localFilePath) return null
    // upload on cloudnary
    if(localFilePath){
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type :'auto'
    })
//file has been uploded sucessfully 
//console.log("File has been Uploaded on Cloudinary", response.url);
fs.unlinkSync(localFilePath)

return response

    }
    
} catch (error) {
    fs.unlinkSync(localFilePath) //remove the filepath if the upload failed
    return null
}

  }

  export {uploadOnCloudinary}