import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body
    console.log(name,description)
    const {videoid} = req.query
    const existingplaylist = await Playlist?.findOne({
        name:name,
        owner: req.user._id,
      });
      console.log(existingplaylist)

    if(existingplaylist){
        throw new ApiError(500,"playlist already exists!")
    }
    if(!existingplaylist){
        const playlist = await Playlist.create({
            name:name,
            owner:req.user._id,
            videos:[videoid],
            description:description
        })

        res.send(
            new ApiResponse(200,"playlist created!")
        )
        console.log(playlist)
    }
       //TODO: create playlist
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists
})

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.query

    const playlist = await Playlist.findById(playlistId).select()

    res.send(
        new ApiResponse(200,"playlist fetched successfully!")
    )

    console.log(playlist)

    //TODO: get playlist by id
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.query
    console.log(playlistId,videoId)
    const playlist = await Playlist.findById(playlistId)

    if(!playlist){
        throw new ApiError(500,"playlist does not exist!")
    }

     const newplaylist = await playlist.videos.push(videoId)

    console.log(playlist)
    const save = await playlist.save()
    //console.log(newplaylist)
    res.send(
        new ApiResponse(200,"video added to the playlist successfully!")
    )


    
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.query
    console.log(playlistId,videoId)
    const playlist = await Playlist.findById(playlistId)

    if(!playlist){
        throw new ApiError(500,"playlist does not exist!")
    }

     const newplaylist = await playlist.videos.pop(videoId)

    console.log(playlist)
    const save = await playlist.save()
    //console.log(newplaylist)
    res.send(
        new ApiResponse(200,"video removed the playlist!")
    )

    // TODO: remove video from playlist

})

const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.query
    if(!playlistId){
        throw new ApiError(500,"playlistId is required")
    }

    const playlist = await Playlist.findByIdAndDelete(playlistId)
   

    res.send(
        new ApiResponse(200,"Playlist deleted successfully!")
    )

    console.log(playlist)
    // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.query
    const {name, description} = req.body
    const playlist = await Playlist.findByIdAndUpdate(playlistId,{
        name:name,
        description:description
    })

    res.send(
        new ApiResponse(200,"Playlist updated successfully!")
    )

    console.log(playlist)

    //TODO: update playlist
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}
