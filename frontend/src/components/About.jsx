export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/worker2.jpg"
              alt="Baking Process"
              className="w-full h-96 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">OLAOSEBIKAN Breads</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              OLAOSEBIKAN Breads is dedicated to producing fresh, high-quality bread every single day. We believe that every loaf tells a story of dedication, craftsmanship, and passion for excellence.
            </p>

            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Our commitment to quality is unwavering. We carefully select premium ingredients, maintain the highest hygiene standards, and bake fresh loaves daily to ensure that every bite delivers exceptional taste and nutrition.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Whether you're a family looking for nutritious daily bread or a business requiring bulk orders, OLAOSEBIKAN Breads is your trusted partner for freshness, quality, and reliability.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600 text-sm">Premium ingredients and careful craftsmanship</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Fresh Daily</h3>
                <p className="text-gray-600 text-sm">Baked fresh every morning</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Hygienic</h3>
                <p className="text-gray-600 text-sm">Highest standards of cleanliness</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Affordable</h3>
                <p className="text-gray-600 text-sm">Premium quality at fair prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
