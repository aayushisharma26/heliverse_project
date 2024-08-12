import express from 'express';
import { createClassroom, getClassrooms } from '../Controller/classroomController.js';
import { protect, principalOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createClassroom); 

router.get('/', protect, getClassrooms);

export default router;
