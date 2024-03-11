import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { upload } from "../middlewares/multer.middleware.js"


const getAllVideos = asyncHandler(async (req, res) => {
    const {userId } = req.query
    //TODO: get all videos based on query, sort, pagination

    const videos = await Video.findOne({owner:new mongoose.Types.ObjectId(userId)})

    res.send(
        new ApiResponse(200,videos,"videos fetched!")
    )
})

const publishAVideo =asyncHandler(async (req, res) => {
    const { title, description} = req.body
    console.log(title)
    console.log(req.body)
    if(!title){
        throw new ApiError(400,"No title and description")
    }
    // TODO: get video, upload to cloudinary, create video
    console.log(req.file)
    const videofiles = req.file && req.file;
    console.log(videofiles)
    const videolocalpath = videofiles ? videofiles?.path : null;
    console.log(videolocalpath)
    const owner = req.user._id

    const video=await uploadOnCloudinary(videolocalpath);
    console.log("Cloudinary response:",video);
    const user=await Video.create({
          //thumbnail:video.thumbnail,
          title,
          description,
          videoFile:video.url,
          duration:video.duration,
          owner:req.user._id

    })
    console.log(user);

    res.send(new ApiResponse(200,user,"video uploaded successfully!"))
})

const getVideoById = asyncHandler(async (req, res) => {
    const { _id } = req.query
    const video = await Video.findById(_id).select()

    res.send(
        new ApiResponse(200,video,"video fetched successfully!")
    )

    console.log(video)

    
    //TODO: get video by id
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.query
    const {title,description} = req.body
   
    const video = await Video.findByIdAndUpdate(
        {_id:new mongoose.Types.ObjectId(videoId)},
        {title:title,
        description:description
       }
    )
    await video.save()

    res.send(
        new ApiResponse(200,video,"video updated successfully!")
    )

    console.log(video)

    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const {_id} = req.query

    if(!_id){
        throw new ApiError(500,"_id is required")
    }

    const video = await Video.findByIdAndDelete(_id)
   

    res.send(
        new ApiResponse(200,video,"video deleted successfully!")
    )

    console.log(tweet)

    
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.query

    const video = await Video.findById({
        _id:new mongoose.Types.ObjectId(videoId)
    })

    if (video.isPublished){

        await Video.findByIdAndUpdate({
            _id:new mongoose.Types.ObjectId(videoId)
        },
        {isPublished:false})
    }
    if (!video.isPublished){

        await Video.findByIdAndUpdate({
            _id:new mongoose.Types.ObjectId(videoId)
        },
        {isPublished:true})
    }


    res.send(
        new ApiResponse(200,!video.isPublished,"publish toggled!")
    )

})



export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
