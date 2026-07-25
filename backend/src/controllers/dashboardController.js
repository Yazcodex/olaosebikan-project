import Order from '../models/Order.js';
import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';
import env from '../config/env.js';

export const getDashboardStats = asyncHandler(async (req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const monthStart = new Date(new Date().getFullYear(), 0, 1);

  const [
    totalOrders,
    ordersToday,
    revenueResult,
    mostOrderedResult,
    totalCustomersResult,
    recentOrders,
    monthlySales,
    lowStockProducts,
  ] = await Promise.all([
    Order.countDocuments(),
    Order.countDocuments({ orderDate: { $gte: todayStart } }),
    Order.aggregate([
      { $match: { status: { $ne: 'Cancelled' } } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } },
    ]),
    Order.aggregate([
      { $unwind: '$items' },
      { $group: { _id: '$items.product', name: { $first: '$items.name' }, quantity: { $sum: '$items.quantity' } } },
      { $sort: { quantity: -1 } },
      { $limit: 1 },
    ]),
    Order.aggregate([{ $group: { _id: '$phoneNumber' } }, { $count: 'total' }]),
    Order.find().sort({ orderDate: -1 }).limit(10),
    Order.aggregate([
      { $match: { orderDate: { $gte: monthStart }, status: { $ne: 'Cancelled' } } },
      {
        $group: {
          _id: { month: { $month: '$orderDate' }, year: { $year: '$orderDate' } },
          sales: { $sum: '$totalPrice' },
          orders: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ]),
    Product.find({
      $expr: { $lte: ['$stockQuantity', '$lowStockThreshold'] },
    }).select('name stockQuantity lowStockThreshold'),
  ]);

  res.json({
    success: true,
    data: {
      totalOrders,
      ordersToday,
      totalRevenue: revenueResult[0]?.total || 0,
      mostOrderedBread: mostOrderedResult[0] || null,
      totalCustomers: totalCustomersResult[0]?.total || 0,
      recentOrders,
      monthlySalesAnalytics: monthlySales,
      lowStockThresholdDefault: env.lowStockThreshold,
      lowStockProducts,
    },
  });
});
