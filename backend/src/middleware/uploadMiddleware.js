import multer from 'multer';
import AppError from '../utils/AppError.js';

const storage = multer.memoryStorage();

const fileFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image/')) return callback(null, true);
  callback(new AppError('Only image uploads are allowed.', 400), false);
};

export const uploadProductImage = multer({
  storage,
  fileFilter,
  limits: { fileSize: 3 * 1024 * 1024 },
}).single('image');
