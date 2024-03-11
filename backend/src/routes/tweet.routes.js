import { Router } from 'express';
import {
    createTweet,
    deleteTweet,
    getUserTweets,
    updateTweet,
} from "../controllers/tweet.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/create").post(createTweet);
router.route("/user/tweets").get(getUserTweets);
router.route("/deletetweet").delete(deleteTweet);
router.route("/updatetweet").patch(updateTweet);


export default router