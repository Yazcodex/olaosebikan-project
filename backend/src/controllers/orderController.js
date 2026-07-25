import mongoose from 'mongoose';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import AppError from '../utils/AppError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { buildPaginationMeta, getPagination } from '../utils/pagination.js';
import { notifyLowStock } from '../utils/stockNotifier.js';

function buildOrderFilter(query) {
  const filter = {};
  if (query.search) filter.$text = { $search: query.search };
  if (query.status) filter.status = query.status;
  return filter;
}

export const createOrder = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  let order;
  let lowStockProducts = [];

  await session.withTransaction(async () => {
    const productIds = req.body.items.map((item) => item.product).filter(Boolean);
    const products = await Product.find({ _id: { $in: productIds } }).session(session);
    const productMap = new Map(products.map((product) => [product._id.toString(), product]));

    const orderItems = req.body.items.map((item) => {
      if (!item.product) {
        if (!item.name || item.price === undefined) {
          throw new AppError('Each ordered item needs a product id or name and price.', 400);
        }

        return {
          name: item.name,
          price: Number(item.price),
          quantity: item.quantity,
        };
      }

      const product = productMap.get(item.product);
      if (!product) throw new AppError(`Product not found: ${item.product}`, 404);
      if (!product.isAvailable) throw new AppError(`${product.name} is currently unavailable.`, 400);
      if (product.stockQuantity < item.quantity) {
        throw new AppError(`Insufficient stock for ${product.name}.`, 400);
      }

      product.stockQuantity -= item.quantity;
      product.isAvailable = product.stockQuantity > 0;
      return {
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
      };
    });

    await Promise.all(products.map((product) => product.save({ session })));

    const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    [order] = await Order.create(
      [{ ...req.body, items: orderItems, totalPrice, orderDate: new Date() }],
      { session }
    );
    lowStockProducts = notifyLowStock(products);
  });

  await session.endSession();
  res.status(201).json({ success: true, data: order, lowStockProducts });
});

export const getOrders = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = buildOrderFilter(req.query);
  const [orders, total] = await Promise.all([
    Order.find(filter).sort({ orderDate: -1 }).skip(skip).limit(limit),
    Order.countDocuments(filter),
  ]);

  res.json({ success: true, data: orders, pagination: buildPaginationMeta(total, page, limit) });
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('items.product');
  if (!order) throw new AppError('Order not found.', 404);
  res.json({ success: true, data: order });
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!order) throw new AppError('Order not found.', 404);
  res.json({ success: true, data: order });
});
