import { Router } from 'express';
import {
    addComment,
    deleteComment,
    getVideoComments,
    updateComment,
} from "../controllers/comment.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/getcomments").get(getVideoComments);
router.route("/addcomment").post(addComment);
router.route("/deletecomment").delete(deleteComment).patch(updateComment);
router.route("/updatecomment").patch(updateComment);

export default router