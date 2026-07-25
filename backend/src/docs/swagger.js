import swaggerJSDoc from 'swagger-jsdoc';

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Olaosebikan Bread API',
      version: '1.0.0',
      description: 'Bakery management REST API for products, orders, inventory, and dashboard analytics.',
    },
    servers: [{ url: 'http://localhost:5000', description: 'Local server' }],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
    },
  },
  apis: ['./src/routes/*.js', './src/docs/*.js'],
});

export default swaggerSpec;
