import express from 'express';
import {
    createVideoController,
    deleteVideoController, findVideoController,
    getVideoController,
    updateVideoController
} from "../controllers/videoController";
const router = express.Router();

router.route('/').get(getVideoController).post(createVideoController)
router.route('/:id').delete(deleteVideoController).put(updateVideoController).get(findVideoController)

export default router;
