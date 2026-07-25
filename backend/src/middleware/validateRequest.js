import { validationResult } from 'express-validator';
import AppError from '../utils/AppError.js';

export default function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors.array().map((error) => error.msg).join(', ');
    return next(new AppError(message, 400));
  }

  next();
}
