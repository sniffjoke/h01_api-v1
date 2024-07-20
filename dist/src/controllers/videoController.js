"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoController = exports.getVideoController = void 0;
const db_1 = require("../../db/db");
const getVideoController = (req, res) => {
    const videos = db_1.db.videos;
    res
        .status(200)
        .json(videos);
};
exports.getVideoController = getVideoController;
const createVideoController = (req, res) => {
    const newVideo = Object.assign(Object.assign({}, req.body), { id: Date.now() + Math.random() });
    return res.status(200).json(newVideo);
};
exports.createVideoController = createVideoController;
// findVideoController
// deleteVideoController
