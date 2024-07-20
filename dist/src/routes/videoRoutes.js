"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videoController_1 = require("../controllers/videoController");
const router = express_1.default.Router();
router.route('/').get(videoController_1.getVideoController).post(videoController_1.createVideoController);
exports.default = router;
