import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import { uploadProductImage } from '../middleware/uploadMiddleware.js';
import validateRequest from '../middleware/validateRequest.js';
import {
  productCreateValidator,
  productListValidator,
  productUpdateValidator,
} from '../validators/productValidators.js';

const router = express.Router();

router.get('/', productListValidator, validateRequest, getProducts);
router.get('/:id', getProductById);
router.post('/', protect, uploadProductImage, productCreateValidator, validateRequest, createProduct);
router.put('/:id', protect, uploadProductImage, productUpdateValidator, validateRequest, updateProduct);
router.delete('/:id', protect, deleteProduct);

export default router;
