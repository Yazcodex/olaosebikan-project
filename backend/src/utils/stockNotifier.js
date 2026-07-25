export function notifyLowStock(products) {
  const lowStockProducts = products.filter(
    (product) => product.stockQuantity <= product.lowStockThreshold
  );

  if (lowStockProducts.length > 0) {
    console.warn(
      'Low stock alert:',
      lowStockProducts.map((product) => `${product.name} (${product.stockQuantity})`).join(', ')
    );
  }

  return lowStockProducts;
}
