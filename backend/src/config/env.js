import dotenv from 'dotenv';

dotenv.config();

const requiredProductionVars = ['MONGO_URI', 'JWT_SECRET', 'CLIENT_URL'];

if (process.env.NODE_ENV === 'production') {
  const missingVars = requiredProductionVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/olaosebikan_bread',
  jwtSecret: process.env.JWT_SECRET || 'dev-only-secret-change-me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  clientUrls: (process.env.CLIENT_URL || 'http://localhost:5173')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),
  lowStockThreshold: Number(process.env.LOW_STOCK_THRESHOLD || 10),
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    folder: process.env.CLOUDINARY_FOLDER || 'olaosebikan-bread/products',
  },
};

export default env;
