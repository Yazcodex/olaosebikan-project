import AppError from '../utils/AppError.js';

export function notFound(req, res, next) {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404));
}

export function errorHandler(error, req, res, next) {
  const statusCode = error.statusCode || 500;
  const response = {
    success: false,
    message: error.isOperational ? error.message : 'Server error',
  };

  if (process.env.NODE_ENV !== 'production') {
    response.stack = error.stack;
  }

  if (error.name === 'ValidationError') {
    response.message = Object.values(error.errors).map((item) => item.message).join(', ');
    return res.status(400).json(response);
  }

  if (error.code === 11000) {
    response.message = 'Duplicate value already exists.';
    return res.status(409).json(response);
  }

  return res.status(statusCode).json(response);
}
