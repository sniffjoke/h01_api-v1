import express from 'express';
import {createVideoController, getVideoController} from "../controllers/videoController";
const router = express.Router();

router.route('/').get(getVideoController).post(createVideoController);

export default router;
