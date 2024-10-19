import { Router } from "express";
import { deleteVideo, isTogglePublished, publishVideo, updateVideo,getVideoById ,getAllVideos} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route("/new").post(
    verifyJWT,
  upload.fields([
    {
      name: "videoFile",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: "1",
    },
  ]),

  publishVideo,
);

router
    .route("/")
    .get(getAllVideos)
    .post(
        verifyJWT,
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1
            },
            {
                name: "thumbnail",
                maxCount: 1
            }
        ]),
        publishVideo
    );

router.route('/v/:videoId')
  .patch(
    verifyJWT,               
    upload.single('thumbnail'), 
    updateVideo
  )
  .delete(
    verifyJWT,               
    upload.none(),
    deleteVideo
  );

  router.route("/v/:videoId")
  router.get(verifyJWT, getVideoById)


  router.route(`/toggle/publish/:videoId`).patch(verifyJWT,isTogglePublished)


export default router;
