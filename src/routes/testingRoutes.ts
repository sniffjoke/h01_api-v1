import express from 'express';
import {deleteAllData} from "../controllers/testingController";
const router = express.Router();

router.route('/').delete(deleteAllData)

export default router;
