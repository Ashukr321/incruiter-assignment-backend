import express, { Router } from 'express';
const router = express.Router();

// defined route
router.get('/', (req, res) => {
  return res.json({ message: 'headf' })
})

export default router;