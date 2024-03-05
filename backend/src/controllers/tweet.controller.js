import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    const {content} = req.body
    //const {_id:owner} = req.user
    console.log(content)
    if(!content){
        throw new ApiError(500,"content is required")
    }
    const owner = req.user._id
    const tweet = await Tweet.create({content,owner})
    res.send(
        new ApiResponse(200,"tweeted successfully!")
    )
    //TODO: create tweet
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

const updateTweet = asyncHandler(async (req, res) => {
    const {tweetId} = req.query
    const {content} = req.body
    const tweet = await Tweet.findByIdAndUpdate(tweetId,{
        content:content
    })

    res.send(
        new ApiResponse(200,"Tweet updated successfully!")
    )

    console.log(tweet)
});
   

const deleteTweet = asyncHandler(async (req, res) => {
    const {_id} = req.query

    if(!_id){
        throw new ApiError(500,"_id is required")
    }

    const tweet = await Tweet.findByIdAndDelete(_id)
   

    res.send(
        new ApiResponse(200,"tweet deleted successfully!")
    )

    console.log(tweet)
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
