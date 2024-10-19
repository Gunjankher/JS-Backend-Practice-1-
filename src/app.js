import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()


app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true , limit :"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



// router 

import userRouter from './routes/user.router.js'
import videoRouter from './routes/video.route.js'
import likeRouter from './routes/like.router.js'
 

// Route Declaraion 

app.use("/api/v1/users" , userRouter)
app.use("/api/v1/video", videoRouter)
app.use("/api/v1/likes", likeRouter)




export {app}