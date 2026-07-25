import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const ingredients = [
    'Flour',
    'Butter',
    'Sugar',
    'Flavour',
    'Salt',
    'Yeast',
    'Milk',
    'Improver',
    'Preservative',
    'Water',
  ];

  const reasons = [
    {
      title: "Freshly Baked Every Day",
      description: "All our breads are baked fresh daily using time-honored techniques and modern equipment."
    },
    {
      title: "Premium Quality Ingredients",
      description: "We source only the finest flour, grains, and natural ingredients for exceptional taste and nutrition."
    },
    {
      title: "Soft, Delicious & Nutritious",
      description: "Every loaf is crafted to perfection, delivering softness, flavor, and nutritional value in every bite."
    },
    {
      title: "Hygienic Production",
      description: "Our bakery maintains the highest hygiene and food safety standards to ensure your health and safety."
    },
    {
      title: "Affordable Pricing",
      description: "Premium quality bread at fair, competitive prices that work for families and businesses alike."
    },
    {
      title: "Trusted by Many",
      description: "Families, businesses, and institutions across the country trust OLAOSEBIKAN Breads for their daily needs."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-500">OLAOSEBIKAN Breads?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference that quality, dedication, and care make.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-lg bg-gradient-to-br from-orange-50 to-white p-8 shadow-lg ring-1 ring-orange-100 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-orange-500 shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-orange-50 p-8 ring-1 ring-orange-100">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Ingredients Used in Our Bread
            </h3>
            <p className="mb-6 text-gray-600">
              Our bread is baked with carefully selected ingredients for softness, taste, and quality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-sm ring-1 ring-orange-100"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
