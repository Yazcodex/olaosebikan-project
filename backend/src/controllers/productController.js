import Product from '../models/Product.js';
import AppError from '../utils/AppError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { uploadBufferToCloudinary } from '../utils/cloudinaryUpload.js';
import { buildPaginationMeta, getPagination } from '../utils/pagination.js';

function buildProductFilter(query) {
  const filter = {};
  if (query.search) filter.$text = { $search: query.search };
  if (query.category) filter.category = query.category;
  if (query.isAvailable !== undefined) filter.isAvailable = query.isAvailable === 'true';
  return filter;
}

async function resolveImagePayload(req, existingProduct = null) {
  if (req.file) {
    const uploaded = await uploadBufferToCloudinary(req.file.buffer);
    return { imageUrl: uploaded.secure_url, cloudinaryPublicId: uploaded.public_id };
  }

  if (req.body.imageUrl) return { imageUrl: req.body.imageUrl };
  if (existingProduct) return {};

  throw new AppError('Product image is required as image file or imageUrl.', 400);
}

export const getProducts = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const filter = buildProductFilter(req.query);
  const [products, total] = await Promise.all([
    Product.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Product.countDocuments(filter),
  ]);

  res.json({ success: true, data: products, pagination: buildPaginationMeta(total, page, limit) });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new AppError('Product not found.', 404);
  res.json({ success: true, data: product });
});

export const createProduct = asyncHandler(async (req, res) => {
  const imagePayload = await resolveImagePayload(req);
  const product = await Product.create({ ...req.body, ...imagePayload });
  res.status(201).json({ success: true, data: product });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new AppError('Product not found.', 404);

  const imagePayload = await resolveImagePayload(req, product);
  Object.assign(product, req.body, imagePayload);
  await product.save();

  res.json({ success: true, data: product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new AppError('Product not found.', 404);

  await product.deleteOne();
  res.json({ success: true, message: 'Product deleted.' });
});
