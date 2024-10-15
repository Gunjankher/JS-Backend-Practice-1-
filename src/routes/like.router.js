import { Router } from "express"
import {verifyJWT} from '../middlewares/auth.middleware'
import { getLikedVideos, toggleCommentLike, toggleTweetLike, toggleVideoLike } from "../controllers/like.controller"




const router = Router()
router.use(verifyJWT) // apply verify jwt for all routes in this file 

router.route("/toggle/v/:videoId").post(toggleVideoLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/t/:tweetId").post(toggleTweetLike);
router.route("/videos").get(getLikedVideos);



export default router