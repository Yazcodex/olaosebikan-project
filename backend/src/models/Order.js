import mongoose from 'mongoose';

export const ORDER_STATUSES = [
  'Pending',
  'Accepted',
  'Baking',
  'Ready for Pickup',
  'Out for Delivery',
  'Delivered',
  'Cancelled',
];

const orderItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true, index: true },
    deliveryAddress: { type: String, required: true, trim: true },
    orderNote: { type: String, trim: true, default: '' },
    items: { type: [orderItemSchema], required: true, validate: (items) => items.length > 0 },
    totalPrice: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ORDER_STATUSES, default: 'Pending', index: true },
    orderDate: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

orderSchema.index({
  customerName: 'text',
  phoneNumber: 'text',
  deliveryAddress: 'text',
  orderNote: 'text',
});

export default mongoose.model('Order', orderSchema);
