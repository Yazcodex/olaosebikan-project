import { useState } from 'react';
import BreadCard from './BreadCard';
import { products } from '../data/products';

export default function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Whole Wheat', 'White Bread', 'Multigrain', 'Artisanal', 'Sweet', 'Specialty'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Bread Selection</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our variety of fresh, premium breads baked daily with love and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition sm:text-base ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-gray-700 ring-1 ring-orange-100 hover:bg-orange-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <BreadCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
