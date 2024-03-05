import mongoose from "mongoose"
import {Video} from "../models/video.model.js"
import {Subscription} from "../models/subscription.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
    const {userId} = req.query

    const subscribers = await Subscription.aggregate(
        [
            {
                $match:{
                    channel:new mongoose.Types.ObjectId(userId)
                }

            }
            
        ]      
)
console.log(subscribers)
    subscribers.map(sub => sub);
    const count= subscribers.length
    console.log(count)
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            count,
            "subscribers fetched successfully"
        )
    )
        })

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel

    const {ownerId} = req.query

    const videos = await Video.aggregate(
        [
            {
                $match:{
                    owner:new mongoose.Types.ObjectId(ownerId)
                }
            },
            {
                $project:{
                    videoFile:1,
                    title:1,
                    description:1,
                    duration:1,
                    views:1,
                    owner:1

                }
            }
        ]
    )
    const allvideos = videos.map(video => video);
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            allvideos,
            "Videos fetched successfully"
        )
    )
    

})

export {
    getChannelStats, 
    getChannelVideos
    }