import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { asyncHandlar } from "../utilis/asyncHandlar.js";


const toggleSubscription = asyncHandlar(async(req,res)=>{
    // get the channel id for params
    // check object id 
    // find the channel by findone  subscriber , channel 
    // find find by id and delete subsciebed 
    // return res
    
})


getUserChannelSubscribers = asyncHandlar(async(req,res)=>{
    // get the channel id 
    // check if that is valid obj id
    // aggregate the subscirbers 

})



const getSubscribedChannels = asyncHandlar(async(req,res)=>{

})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels,
}