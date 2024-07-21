
export enum ResolutionType {
    "P144",
    "P240",
    "P360",
    "P480",
    "P720",
    "P1080",
    "P1440",
    "P2160",
}

export type IVideoDto = {
    id?: number
    title: string
    author: string
    canBeDownloaded?: boolean
    minAgeRestriction?: number
    createdAd?: string
    publicationDate?: string
    availableResolutions?: [ResolutionType]
}
