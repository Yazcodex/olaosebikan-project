function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.02L2.2 22l5.1-1.34A9.93 9.93 0 1 0 12.04 2Zm0 18.2a8.28 8.28 0 0 1-4.22-1.16l-.3-.18-3.03.8.81-2.96-.2-.31a8.24 8.24 0 1 1 6.94 3.81Zm4.52-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.56.12-.16.25-.64.81-.78.98-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.57.13.16 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm.23 2L12 12.45 19.27 7H4.73ZM4 8.75v7.75c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.75l-8 6-8-6Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://wa.me/2348062346890?text=Hello%21%20I%20am%20interested%20in%20ordering%20bread%20from%20OLAOSEBIKAN%20Breads.',
    icon: <FacebookIcon />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348062346890?text=Hello%21%20I%20am%20interested%20in%20ordering%20bread%20from%20OLAOSEBIKAN%20Breads.',
    icon: <WhatsAppIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/deepoint200/',
    icon: <InstagramIcon />,
  },
  {
    label: 'Gmail',
    href: 'https://wa.me/2348062346890?text=Hello%21%20I%20am%20interested%20in%20ordering%20bread%20from%20OLAOSEBIKAN%20Breads.',
    icon: <GmailIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-orange-500">OLAOSEBIKAN</span> Breads
            </h3>
            <p className="text-sm leading-6 text-gray-400">
              Freshly baked bread made with hygiene and quality every single day.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#home" className="transition hover:text-orange-500">Home</a></li>
              <li><a href="/#about" className="transition hover:text-orange-500">About Us</a></li>
              <li><a href="/#products" className="transition hover:text-orange-500">Our Bread</a></li>
              <li><a href="/locate-us" className="transition hover:text-orange-500">Locate Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/contact" className="transition hover:text-orange-500">Contact Us</a></li>
              <li><a href="/#products" className="transition hover:text-orange-500">Bulk Orders</a></li>
              <li><a href="/contact" className="transition hover:text-orange-500">Delivery Enquiries</a></li>
              <li><a href="/contact" className="transition hover:text-orange-500">Customer Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="rounded-full bg-orange-500 p-3 transition hover:bg-orange-600"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-400 md:text-left">
              Copyright 2026 OLAOSEBIKAN Breads. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              NAFDAC REG NO: 0G/0083BFFF. Store in a cool, dry place.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
