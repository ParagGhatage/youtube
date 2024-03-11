import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.query
    
  const existingsubscription = await Subscription.findOne({
    channel: channelId,
    subscriber:req.user._id,
  });
  console.log(existingsubscription);
  if (existingsubscription) {
    await existingsubscription.deleteOne();

    res.send(
        new ApiResponse(200,"Unsubscribed the channel!")
    )
  }

  if (!existingsubscription) {
    const subscription = await Subscription.create({
      channel:channelId,
      subscriber: req.user._id,
    });
    console.log("new subscription created!");
    console.log(subscription);
    res.send(
        new ApiResponse(200,"Subscribed the channel successfully!")
    )
  }
    // TODO: toggle subscription
})

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const {channelId} = req.query

    const subscribers = await Subscription.aggregate([
      {$match:{
        channel:new mongoose.Types.ObjectId(channelId)
      }},
      {$project:{
        _id:1,
        subscriber:1,
        channel:1,
        createdAt:1
      }}
    ])
    res.send(
      new ApiResponse(200,subscribers,"subscribers fetched!")
    )
})

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.query

    const subscribedChannels = await Subscription.aggregate([
      {$match:{
        subscriber:new mongoose.Types.ObjectId(subscriberId)
      }},
      {$project:{
        _id:1,
        subscriber:1,
        channel:1,
        createdAt:1
      }}
    ])
    res.send(
      new ApiResponse(200,subscribedChannels,"subscribers fetched!")
    )
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}