import app from './app.js';
import connectDB from './config/db.js';
import env from './config/env.js';

connectDB();

const server = app.listen(env.port, () => {
  console.log(`Olaosebikan Bread API running on port ${env.port}`);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
  server.close(() => process.exit(1));
});
