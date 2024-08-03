import {Router} from 'express'
import { publishVideo, updateVideo } from '../controllers/video.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.middleware.js'




const router = Router()

router.route('/new').post(
upload.fields([
    verifyJWT,
    {
        name :"videoFile",
        maxCount :1
    },
{
    name :"thumbnail",
    maxCount :"1"
}

]),

publishVideo

)
router.route(`/v/:videoId`)
.patch(verifyJWT,upload.single("thumbnail"),updateVideo)




export default router