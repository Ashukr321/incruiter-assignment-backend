import express from 'express';
const router = express.Router();
import { login, register } from '../controllers/userController.js';
// defined route
router.post('/register', register)
router.post('/login', login)

export default router;