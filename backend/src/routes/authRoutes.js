import express from 'express';
import { login, logout } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import validateRequest from '../middleware/validateRequest.js';
import { loginValidator } from '../validators/authValidators.js';

const router = express.Router();

router.post('/login', loginValidator, validateRequest, login);
router.post('/logout', protect, logout);

export default router;
