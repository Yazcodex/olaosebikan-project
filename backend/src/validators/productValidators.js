import { body, query } from 'express-validator';

export const productListValidator = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive number.'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1 to 100.'),
  query('search').optional().trim(),
  query('category').optional().trim(),
];

export const productCreateValidator = [
  body('name').trim().notEmpty().withMessage('Name is required.'),
  body('description').trim().notEmpty().withMessage('Description is required.'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be zero or greater.'),
  body('category').trim().notEmpty().withMessage('Category is required.'),
  body('imageUrl').optional().isURL().withMessage('Image URL must be valid.'),
  body('stockQuantity').isInt({ min: 0 }).withMessage('Stock quantity must be zero or greater.'),
  body('lowStockThreshold').optional().isInt({ min: 0 }).withMessage('Low stock threshold must be zero or greater.'),
  body('isAvailable').optional().isBoolean().withMessage('Availability status must be true or false.'),
];

export const productUpdateValidator = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty.'),
  body('description').optional().trim().notEmpty().withMessage('Description cannot be empty.'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be zero or greater.'),
  body('category').optional().trim().notEmpty().withMessage('Category cannot be empty.'),
  body('imageUrl').optional().isURL().withMessage('Image URL must be valid.'),
  body('stockQuantity').optional().isInt({ min: 0 }).withMessage('Stock quantity must be zero or greater.'),
  body('lowStockThreshold').optional().isInt({ min: 0 }).withMessage('Low stock threshold must be zero or greater.'),
  body('isAvailable').optional().isBoolean().withMessage('Availability status must be true or false.'),
];
