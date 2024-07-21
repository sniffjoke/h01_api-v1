export const Resolution = {
    "P144": "P144",
    "P240": "P240",
    "P360": "P360",
    "P480": "P480",
    "P720": "P720",
    "P1080": "P1080",
    "P1440": "P1440",
    "P2160": "P2160"
} as const;

export type ResolutionType = keyof typeof Resolution;

export interface CreateVideoDto {
    id?: number
    title: string
    author: string
    canBeDownloaded?: boolean
    minAgeRestriction?: number
    createdAd?: string
    publicationDate?: string
    // availableResolution: Record<keyof Resolution, any>
    // availableResolution: `${Resolution}`
    availableResolution: ResolutionType
}
