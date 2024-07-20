import {db} from "../../db/db";
import {Request, Response} from 'express'
import {CreateVideoDto} from "./types/CreateVideo.dto";


export const getVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos
    res
        .status(200)
        .json(videos)
}

export const createVideoController = (req: Request, res: Response) => {
    const newVideo: CreateVideoDto = {
        ...req.body,
        id: Date.now() + Math.random(),
    }
    db.videos = [...db.videos, newVideo]
    res.status(201).send(newVideo)
}

// export const updateVideoController = (req: Request, res: Response) => {
//     const id = req.params.id
//     con
// }

// findVideoController
// deleteVideoController
