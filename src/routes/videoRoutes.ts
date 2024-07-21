import express from 'express';
import {
    createVideoController,
    deleteVideoController,
    getVideoController,
    updateVideoController
} from "../controllers/videoController";
const router = express.Router();

router.route('/').get(getVideoController).post(createVideoController);
router.route('/:id').delete(deleteVideoController).put(updateVideoController);

export default router;
