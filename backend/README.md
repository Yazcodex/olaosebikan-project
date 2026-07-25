# Olaosebikan Bread Backend

Production-ready REST API for managing Olaosebikan Bread products, anonymous customer orders, inventory, admin authentication, and dashboard analytics.

## Stack

- Node.js and Express.js
- MongoDB with Mongoose
- JWT authentication
- bcrypt password hashing
- express-validator request validation
- Cloudinary image uploads
- Swagger API documentation

## Setup

```bash
cd backend
npm install
copy .env.example .env
npm run seed
npm run dev
```

Update `.env` with your MongoDB URI, JWT secret, and Cloudinary credentials before using uploads.

## Default Seed Admin

```text
email: olaosebikan2212@gmail.com
password: Sebikan2212##
```

## API Docs

After starting the server, open:

```text
http://localhost:5000/api/docs
```

## Main Routes

Auth:

- `POST /api/auth/login`
- `POST /api/auth/logout`

Products:

- `GET /api/products?page=1&limit=10&search=sweet&category=Sweet Bread`
- `GET /api/products/:id`
- `POST /api/products` protected, supports `multipart/form-data` field `image` or JSON `imageUrl`
- `PUT /api/products/:id` protected
- `DELETE /api/products/:id` protected

Orders:

- `POST /api/orders`
- `GET /api/orders?page=1&limit=10&search=customer&status=Pending` protected
- `GET /api/orders/:id` protected
- `PUT /api/orders/:id/status` protected

Dashboard:

- `GET /api/dashboard/stats` protected

Use the login token as:

```text
Authorization: Bearer <token>
```

## Order Statuses

- Pending
- Accepted
- Baking
- Ready for Pickup
- Out for Delivery
- Delivered
- Cancelled

## Example Order Payload

```json
{
  "customerName": "Amina Yusuf",
  "phoneNumber": "+2348061234567",
  "deliveryAddress": "25 Market Street, Lagos",
  "items": [
    {
      "product": "replace-with-product-id",
      "quantity": 3
    }
  ]
}
```

## Folder Structure

```text
backend/
  src/
    config/
    controllers/
    docs/
    middleware/
    models/
    routes/
    seed/
    utils/
    validators/
    app.js
    server.js
```
