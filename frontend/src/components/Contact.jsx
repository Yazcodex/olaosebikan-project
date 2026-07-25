import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or want to place an order? Chat with us directly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+234 (0) 8062346890</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <a href="https://wa.me/2348062346890" className="text-green-500 hover:text-green-600 font-semibold">
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@olaosebikanbread.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600"> 15, Banjo Street, Vespa Bus-stop<br />Ifo, Ogun State Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Sunday: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 overflow-hidden rounded-lg bg-gray-200 shadow-lg ring-1 ring-orange-100">
              <iframe
                title="OLAOSEBIKAN Breads location in Ogun State"
                src="https://www.google.com/maps?q=Ogun%20State%2C%20Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-orange-100 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Order on WhatsApp</h3>
            <p className="text-gray-600 leading-7">
              Send us your bread order, delivery details, and any special request on WhatsApp. We will reply there to confirm availability and delivery.
            </p>
            <a
              href="https://wa.me/2348062346890?text=Hello%2C%20I%20want%20to%20place%20a%20bread%20order."
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-bold text-white transition hover:bg-green-600"
            >
                <Send size={20} />
                Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
