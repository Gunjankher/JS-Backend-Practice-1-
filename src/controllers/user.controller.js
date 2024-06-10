import { asyncHandlar } from "../utilis/asyncHandlar.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js";
import { ApiResponse } from "../utilis/ApiResponse.js";


const generateAccessTokenAndRefeshToken = async(userId)=>{

try {
   const user = await User.findById(userId)
   const accessToken = user.generateAccessToken()
   const refershToken = user.generateRefreshToken()
   user.refershToken = refershToken
   await user.save({validateBeforeSave : false})
return {accessToken,refershToken}

} catch (error) {
  throw new ApiError(401, "Something went Wrong while Generating Access and Refesh Token ")
}


}
 



const registerUser = asyncHandlar(async (req, res) => {
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
  const { fullName, email, username, password } = req.body;
  console.log("email", email);

  // (2)  validation - not empty
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required");
  }

  // (3) check if user already exits
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or usename already exists");
  }

  // (4) check for images and avatar

  const avatarLocalPath = req.files?.avatar[0]?.path;
  //   const coverImageLocalPath = req.files?.coverImage[0]?.path
  //   console.log(req.files);

  // handling the coverImage

  let coverImageLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar Image is required");
  }

  //(5) upload them at cloudinary

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar Image is Must required");
  }

  // (6) create user object and create entry in Database
  // (7) remove password and refresh token field
  // (8) check for user Creation

  const user = await User.create({
    fullName,
    password,
    email,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something Went wrong while registering the  User");
  }

  // (9) return response

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});



const loginUser = asyncHandlar(async(req,res)=>{

// req data from body
// username or email 
// find the user 
// password check 
// access and refresh token 
// send cookie 





// (1) req data from body

const{email,username,password} = req.body 
if(!email || !username){
  throw new ApiError(400 , "Username or Email is required")
}



// (2) email or username
 const user = await User.findOne({
  $or:[{username}, {email}]
})



// (3) check for password
  const isPasswordValid = await user.isPasswordCorrect(password)
  if(isPasswordValid){
    throw new ApiError(400 , "Password is invalid ")
  }


// (4) Access and Refesh token  
const {accessToken,refershToken} = await generateAccessTokenAndRefeshToken(user._id)


})





export { 
  registerUser,
  loginUser, 

};
