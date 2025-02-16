"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const settings_1 = require("./settings");
const videoController_1 = require("./controllers/videoController");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use('/', (req, res) => {
    res.status(200).json({ version: '1.0' });
});
exports.app.get(settings_1.SETTINGS.PATH.VIDEOS, videoController_1.getVideoController);
// app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
