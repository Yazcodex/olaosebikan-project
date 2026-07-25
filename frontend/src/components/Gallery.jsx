import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a peek into our bakery and see the freshness and quality we deliver every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <span className="text-white text-center opacity-0 group-hover:opacity-100 transition font-semibold px-4">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:bg-white hover:text-black p-2 rounded-full transition"
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
