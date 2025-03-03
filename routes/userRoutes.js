import express from 'express';
const router = express.Router();
import { login, register, logout } from '../controllers/userController.js';
// defined route
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

export default router;