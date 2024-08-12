import express from 'express';
import { register,login,getUserStatus } from '../Controller/userController.js'; 

const router = express.Router();

router.post('/register', register);
router.post('/login',login);
router.get('/getUserStatus',getUserStatus)

export default router;






