import express from "express";
import cors from "cors";
import {SETTINGS} from "./settings";
import {getVideoController} from "../videos/getVideoController";

export const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.get(SETTINGS.PATH.VIDEOS, getVideoController)
