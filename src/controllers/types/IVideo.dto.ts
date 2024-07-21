import {ResolutionType} from "./CreateVideo.dto";

export type IVideoDto = {
    id?: number
    title: string
    author: string
    canBeDownloaded?: boolean
    minAgeRestriction?: number
    createdAd?: string
    publicationDate?: string
    availableResolution: ResolutionType
}
