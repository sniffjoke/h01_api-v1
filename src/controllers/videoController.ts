import {db} from "../../db/db";
import {Request, Response} from 'express'
import {IVideoDto, ResolutionType} from "./types/IVideo.dto";

type ErrorType = {
    message: string;
    field: string;
}

interface OutputErrorsType {
    errorsMessages: ErrorType[]
}

const findVideoById = (videoId: number) => {
    return db.videos.find((video: IVideoDto) => videoId === video.id)
}

export const getVideoController = (req: Request, res: Response) => {
    const videos = db.videos
    res
        .status(200)
        .json(videos)
}

const inputValidation = (video: IVideoDto) => {
    const errors: OutputErrorsType = { // объект для сбора ошибок
        errorsMessages: []
    }
    if (!Array.isArray(video.availableResolutions)
        || video.availableResolutions.find(p => !ResolutionType[p])
    ) {
        errors.errorsMessages.push({
            message: 'error!!!!',
            field: 'availableResolutions'
        })
    }
    if (typeof video.title !== 'string') {
        errors.errorsMessages.push({
            message: 'Название должно быть текстовым',
            field: 'title'
        })
    }
    if (Number(video.title) !== 0 && video.title !== null && !video.title || !video.author || !video.availableResolutions) {
        errors.errorsMessages.push({
            message: 'Название не может быть пустым',
            field: 'title'
        })
    }
    if (Number(video.title) === 0 && video.title !== null) {
        errors.errorsMessages.push({
            message: 'Название не может быть нолем',
            field: 'title'
        })
    }
    if (video.canBeDownloaded && typeof video.canBeDownloaded !== "boolean") {
        errors.errorsMessages.push({
            message: 'Нужно указать булевое значение',
            field: 'canBeDownloaded'
        })
    }
    if (typeof video.title === 'string' && video.title.length > 40) {
        errors.errorsMessages.push({
            message: 'Название не может быть более 40 символов',
            field: 'title'
        })
    }

    if (typeof video.author === 'string' && video.author.length > 20) {
        errors.errorsMessages.push({
            message: 'Поле "Автор" не может быть более 20 символов',
            field: 'author'
        })
    }

    if (video.minAgeRestriction && video.minAgeRestriction > 18 || video.minAgeRestriction && video.minAgeRestriction < 1) {
        errors.errorsMessages.push({
            message: 'Введите корректный возраст',
            field: 'minAgeRestriction'
        })
    }

    return errors
}

export const createVideoController = (req: Request<any, any, IVideoDto>, res: Response<any | OutputErrorsType>) => {
    const {title, author, availableResolutions} = req.body
    const errors = inputValidation(req.body)
    if (errors.errorsMessages.length) {
        res.status(400).json(errors)
        return
    }
    let dateCreate = new Date()
    const newVideo = {
        ...req.body,
        id: Date.now() + Math.random(),
        title,
        author,
        availableResolutions,
        createdAt: dateCreate.toISOString(),
        canBeDownloaded: false,
        minAgeRestriction: null,
        publicationDate: new Date(dateCreate.getTime() + 86400000).toISOString(),
    }
    db.videos = [...db.videos, newVideo]
    res.status(201).send(newVideo)
}

export const findVideoController = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const video = db.videos.find((video: IVideoDto) => id === video.id)
    res.status(200).send(video)
}

export const updateVideoController = (req: Request, res: Response<any | OutputErrorsType>) => {
    const errors = inputValidation(req.body)
    if (errors.errorsMessages.length) {
        res.status(400).json(errors)
        return
    }
    const id = Number(req.params.id)
    const video: IVideoDto = findVideoById(id)
    const {
        title,
        author,
        availableResolutions,
        createdAt,
        canBeDownloaded,
        minAgeRestriction,
        publicationDate
    } = req.body
    if (video) {
        video.title = title
        video.id = id
        video.author = author
        video.availableResolutions = availableResolutions
        video.createdAt = createdAt
        video.canBeDownloaded = canBeDownloaded
        video.minAgeRestriction = minAgeRestriction
        video.publicationDate = publicationDate
        res.status(204).send('Видео изменено')
    } else {
        res.status(404).send('Видео с данным id не найдено')
    }
}

export const deleteVideoController = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const video: IVideoDto = findVideoById(id)
    if (video) {
        db.videos = db.videos.filter((video: IVideoDto) => id !== video.id)
        res.status(204).send('Видео удалено')
    } else {
        res.status(404).send('Видео не найдено')
    }
}
