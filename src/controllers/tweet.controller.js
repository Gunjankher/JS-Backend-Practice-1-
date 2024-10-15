import { Tweet } from "../models/tweet.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse";
import { asyncHandlar } from "../utilis/asyncHandlar.js";


const createTweet = asyncHandlar(async(req,res)=>{
    // get the content  from req.body
    // check the content
    // create the tweet 
    // return the response



})



const updateTweet = asyncHandlar(async(req,res)=>{
    // get the tweet id
    // get the content from body
    // find the id from the findbyId,
    // check if the user is owner
    // findby id and update the tweet
    // return the response
})


const deleteTweet = asyncHandlar(async(req,res)=>{
    //get the tweet id
    // check the tweet id
    // check if the user is owner or not 
    // find by id and delete the tweet 
    // delete the like by delete many 
})


const getUserTweets = asyncHandlar(async(req,res)=>{

    // get the userId
    // check if it is a valid userId not 
    // join the pipeline 
    // return the response 


})


export {
    createTweet,
    updateTweet,
    deleteTweet,
    getUserTweets,
}