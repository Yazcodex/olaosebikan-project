import { ShoppingCart } from 'lucide-react';

export default function BreadCard({ product, addToCart }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-orange-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-md">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">{product.price}</span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full bg-orange-500 p-3 text-white transition hover:scale-110 hover:bg-orange-600"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
