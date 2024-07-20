import express from "express";
import cors from "cors";
import {SETTINGS} from "./settings";
import {getVideoController} from "./controllers/videoController";
import videoRoutes from "./routes/videoRoutes";

export const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})

// app.get(SETTINGS.PATH.VIDEOS, getVideoController)
app.use(express.urlencoded({extended: false}))
app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
