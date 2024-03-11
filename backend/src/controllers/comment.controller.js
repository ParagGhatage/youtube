import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"
import {Video} from "../models/video.model.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.query

    const comments = await Comment.aggregate(
        [
            {
                $match:{
                    video:new mongoose.Types.ObjectId(videoId)
                }
            },
            {
                $project:{
                    content:1
                }
            }
        ]
    )
    const allCommentsContent = comments.map(comment => comment.content);
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            allCommentsContent,
            "Comments fetched successfully"
        )
    )
    

})

const addComment = asyncHandler(async (req, res) => {
    const {content} = req.body

    //const {_id:owner} = req.user
   // console.log(content)
    if(!content){
        throw new ApiError(500,"content is required")
    }

    const {id,video_owner} = req.query
    
    const comment_owner = req.user._id
   
    const video = id;

    const comment = await Comment.create({content,comment_owner,video_owner,video})
    res.send(
        new ApiResponse(200,comment,"commented successfully!")
    )

    console.log(comment)

    // TODO: add a comment to a video
})

const updateComment = asyncHandler(async (req, res) => {
    const {commentId} = req.query
    const {content} = req.body
    const comment = await Comment.findByIdAndUpdate(commentId,{
      content:content
    })

    res.send(
        new ApiResponse(200,comment,"Comment updated successfully!")
    )

    console.log(comment)
    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    const {_id} = req.query

    if(!_id){
        throw new ApiError(500,"_id is required")
    }

    const comment = await Comment.findByIdAndDelete(_id)
   

    res.send(
        new ApiResponse(200,comment,"commented deleted successfully!")
    )

    console.log(comment)


    // TODO: delete a comment
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
    deleteComment
    }
