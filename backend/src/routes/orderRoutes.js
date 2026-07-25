import express from 'express';
import {
  createOrder,
  getOrderById,
  getOrders,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import validateRequest from '../middleware/validateRequest.js';
import {
  orderCreateValidator,
  orderListValidator,
  statusUpdateValidator,
} from '../validators/orderValidators.js';

const router = express.Router();

router.post('/', orderCreateValidator, validateRequest, createOrder);
router.get('/', protect, orderListValidator, validateRequest, getOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/status', protect, statusUpdateValidator, validateRequest, updateOrderStatus);

export default router;
