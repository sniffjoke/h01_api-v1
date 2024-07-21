import {db} from "../../db/db";
import {Request, Response} from 'express'
import {IVideoDto} from "./types/IVideo.dto";

const findVideoById = (videoId: number) => {
    return db.videos.find((video: IVideoDto) => videoId === video.id)
}

export const getVideoController = (req: Request, res: Response) => {
    const videos = db.videos
    res
        .status(200)
        .json(videos)
}

export const createVideoController = (req: Request, res: Response) => {
    const {title, author, availableResolution} = req.body
    if (!title || !author || !availableResolution) {
        res.status(400).json({
            "errorsMessages": [
                {
                    "message": "Все поля обязательны для заполнения",
                    "field": "string"
                }
            ]
        })
        return
    }
    const newVideo = {
        ...req.body,
        id: Date.now() + Math.random(),
        title,
        author,
        availableResolution,
        createdAd: new Date().toISOString(),
    }
    db.videos = [...db.videos, newVideo]
    res.status(201).send(newVideo)
}

export const findVideoController = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const video = db.videos.find((video: IVideoDto) => id === video.id)
    res.status(200).send(video)
}

export const updateVideoController = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const video: IVideoDto = findVideoById(id)
    if (video) {
        video.title = req.body.title
    }
    res.status(201).send(video)
}

export const deleteVideoController = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    db.videos = db.videos.filter((video: IVideoDto) => id !== video.id)
    res.status(204)
}





// findVideoController
