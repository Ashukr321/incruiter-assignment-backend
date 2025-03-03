import express from 'express';
const router = express.Router();
import { register } from '../controllers/userController.js';
// defined route
router.post('/register', register)

export default router;