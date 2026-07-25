import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

const locations = [
  {
    name: 'Bakery 1',
    address: '15, Banjo Street, Vespa Bus-stop, Ifo, Ogun State',
    hours: 'Monday - Sunday: 6:00 AM - 8:00 PM',
    phone: '+234 (0) 8062346890',
  },
  {
    name: 'Bakery 2',
    address: '13, Ewenla Street, Near Town Hall, Ifo, Ogun State',
    hours: 'Monday - Saturday: 7:00 AM - 6:00 PM',
    phone: '+234 (0) 8062346890',
  },
  {
    name: 'Bakery 3',
    address: 'Aderele Primary School Street, Beside Glory Church, Ifo, Ogun State',
    hours: 'Monday - Sunday: 6:30 AM - 7:30 PM',
    phone: '+234 (0) 8062346890',
  },
  {
    name: 'Bakery 4',
    address: '3B, Omoroga Street, Power line Off Ekoro Road, Meiran Lagos State, Nigeria',
    hours: 'Monday - Sunday: 6:30 AM - 7:30 PM',
    phone: '+234 (0) 8062346890',
  },
];

export default function LocateUs({ cartItems, cartCount, updateCartQuantity, removeFromCart }) {
  return (
    <div className="bg-orange-50">
      <Navbar
        cartItems={cartItems}
        cartCount={cartCount}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
      />
      <main className="pt-16">
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-500">
                Locate Us
              </p>
              <h1 className="mb-4 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
                Find OLAOSEBIKAN Bread near you.
              </h1>
              <p className="text-lg leading-8 text-gray-600">
                Visit our bakery or stop by one of our local bread locations for fresh loaves, pickup orders, and daily supplies.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[420px] overflow-hidden rounded-lg bg-gray-200 shadow-lg ring-1 ring-orange-100">
                <iframe
                  title="OLAOSEBIKAN Breads locations map"
                  src="https://www.google.com/maps?q=Ifo%2C%20Ogun%20State%2C%20Nigeria&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid gap-4">
                {locations.map((location) => (
                  <article key={location.name} className="rounded-lg bg-white p-5 shadow-lg ring-1 ring-orange-100">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-orange-100 text-orange-500">
                        <MapPin size={22} />
                      </span>
                      <div>
                        <h2 className="text-xl font-black text-gray-900">{location.name}</h2>
                        <p className="mt-1 text-gray-600">{location.address}</p>
                      </div>
                    </div>

                    <div className="grid gap-2 text-sm font-semibold text-gray-600">
                      <p className="flex items-center gap-2">
                        <Clock className="text-orange-500" size={18} />
                        {location.hours}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="text-orange-500" size={18} />
                        {location.phone}
                      </p>
                    </div>
                  </article>
                ))}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ifo%2C%20Ogun%20State%2C%20Nigeria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
                >
                  <Navigation size={20} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
