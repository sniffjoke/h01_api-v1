import {db} from "../db/db";
import {Request, Response} from 'express'


export const getVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos

    res
        .status(200)
        .json(videos)
}

// createVideoController
// findVideoController
// deleteVideoController
