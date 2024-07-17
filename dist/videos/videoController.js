"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoController = void 0;
const db_1 = require("../db/db");
const getVideoController = (req, res) => {
    const videos = db_1.db.videos;
    res
        .status(200)
        .json(videos);
};
exports.getVideoController = getVideoController;
// createVideoController
// findVideoController
// deleteVideoController
