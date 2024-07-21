import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import {SETTINGS} from "./settings";
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

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status ? res.status : res.status(500)
    res.json(error)
})
