import { body, param, query } from 'express-validator';
import { ORDER_STATUSES } from '../models/Order.js';

export const orderListValidator = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive number.'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1 to 100.'),
  query('search').optional().trim(),
  query('status').optional().isIn(ORDER_STATUSES).withMessage('Invalid order status.'),
];

export const orderCreateValidator = [
  body('customerName').trim().notEmpty().withMessage('Customer name is required.'),
  body('phoneNumber').trim().notEmpty().withMessage('Phone number is required.'),
  body('deliveryAddress').trim().notEmpty().withMessage('Delivery address is required.'),
  body('orderNote').optional().trim(),
  body('items').isArray({ min: 1 }).withMessage('At least one ordered item is required.'),
  body('items.*.product').optional().isMongoId().withMessage('Each product id must be valid.'),
  body('items.*.name').optional().trim().notEmpty().withMessage('Each item name is required.'),
  body('items.*.price').optional().isFloat({ min: 0 }).withMessage('Each item price must be 0 or more.'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Each item quantity must be at least 1.'),
];

export const statusUpdateValidator = [
  param('id').isMongoId().withMessage('Valid order id is required.'),
  body('status').isIn(ORDER_STATUSES).withMessage('Invalid order status.'),
];
