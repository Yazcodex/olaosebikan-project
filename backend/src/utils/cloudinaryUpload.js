import { Readable } from 'stream';
import cloudinary from '../config/cloudinary.js';
import env from '../config/env.js';
import AppError from './AppError.js';

export function uploadBufferToCloudinary(buffer) {
  if (!env.cloudinary.cloudName || !env.cloudinary.apiKey || !env.cloudinary.apiSecret) {
    throw new AppError('Cloudinary environment variables are not configured.', 500);
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: env.cloudinary.folder, resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    Readable.from(buffer).pipe(stream);
  });
}
