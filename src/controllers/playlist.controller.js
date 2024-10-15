import { Playlist } from "../models/playlist.model.js";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse";
import { asyncHandlar } from "../utilis/asyncHandlar.js";



const createPlaylist = asyncHandlar(async(req,res)=>{
    // get name and description from rew.body
    // check if name and description is there or not 
    // create playlist  with name ,descripiton, owner, check it 
    // return the response 
})



const updatePlaylist  = asyncHandlar(async(req,res)=>{
    // get the playlist id and get the name and des from req.body 
    // check the valid the objectid 
    // get the playlist id by the find by id
    // check if user is owner or not 
    // find by id and update with $set with name and descripiton 
    // return the response 
})


const deletePlaylist = asyncHandlar(async(req,res)=>{
    // get the playlist id from params 
    // find if it is a valid object id 
    // find the playlist id by findbyId
    // check if the user is owner or not
    // find by id and delete
    // return the res
})


const addVideoToPlaylist = asyncHandlar(async(req,res)=>{
    // get the playlist and videoid from req.params
    // check both object id if is it valid or not 
    // find the id for both 
    // check if the user is owner 
    // update the playlist by findbyId and update (and use $addToSet and video : videoId)
    // return res
})


const removeVideoFromPlayList = asyncHandlar(async(req,res)=>{
     // get the playlist and videoid from req.params
    // check both object id if is it valid or not 
    // find the id for both 
    // check if the user is owner 
    // update the playlist by findbyId and update (and use $pull and video : videoId)
    // return res
})

const getPlaylistById = asyncHandlar(async(req,res)=>{
    // get the playlist id from req.params
    // is vlaidObjectid 
    // find the playlist by Id 
    // now aggretatePipelIne 

})


const getuserPlaylists = asyncHandlar(async(req,res)=>{
       // get the userId from req.params
    // is vlaidObjectid 
    // now aggretatePipelIne  
})

export {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlayList,
    getPlaylistById,
    getuserPlaylists,
}