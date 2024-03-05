import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {Comment} from '../models/comment.model.js'

const toggleVideoLike = asyncHandler(async (req, res) => {
    const { _id } = req.query;
 
  const existinglike = await Like.findOne({
    video: _id,
    likedBy: req.user._id,
  });
  console.log(existinglike);
  if (existinglike) {
    await existinglike.deleteOne();

    res.send(
        new ApiResponse(200,"Unliked the video!")
    )
  }

  if (!existinglike) {
    const like = await Like.create({
      video: _id,
      likedBy: req.user._id,
    });
    console.log("new like created!");
    console.log(like);
    res.send(
        new ApiResponse(200,"Liked the video successfully!")
    )
  }
    //TODO: toggle like on video
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const { _id } = req.query;
    if(! _id){
        throw new ApiError(500,"_id is required")
    }

    const existingcomment = await Like?.findOne({
      comment: _id,
      likedBy: req.user._id,
    });
    console.log()
    console.log(existingcomment, 1);
    if (existingcomment) {
      await existingcomment.deleteOne();
  
      res.send(
          new ApiResponse(200,"Removed the comment from video!")
      )
    }
  
    if (!existingcomment) {
      const comment = await Like.create({
        comment: _id,
        likedBy: req.user._id,
      });
      console.log("new comment created!");
      console.log(comment);
      res.send(
          new ApiResponse(200,"Commented on the video successfully!")
      )
    }
    //TODO: toggle like on comment

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const { _id } = req.query;
    if(! _id){
        throw new ApiError(500,"_id is required")
    }

    const existingtweet = await Like?.findOne({
      tweet: _id,
      likedBy: req.user._id,
    });
    console.log()
    console.log(existingtweet);
    if (existingtweet) {
      await existingtweet.deleteOne();
  
      res.send(
          new ApiResponse(200,"Removed the like from tweet!")
      )
    }
  
    if (!existingtweet) {
      const tweet = await Like.create({
        tweet: _id,
        likedBy: req.user._id,
      });
      console.log("new like added on tweet !");
      console.log(tweet);
      res.send(
          new ApiResponse(200,"liked the tweet successufully!")
      )
    }
        //TODO: toggle like on tweet
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}