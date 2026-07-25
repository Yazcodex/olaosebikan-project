import { useEffect, useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Bread' },
    { label: 'Locate Us', path: '/locate-us' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/admin/login' },
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    if (window.location.pathname !== '/') {
      setIsOpen(false);
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const goToPage = (path) => {
    window.location.href = path;
    setIsOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.path) {
      goToPage(item.path);
      return;
    }

    goToSection(item.id);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => goToSection('home')}
            className="shrink-0 flex items-center gap-2 text-left"
            aria-label="Go to home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-500 text-sm font-black text-white">
              OB
            </span>
            <span className="leading-tight">
              <span className="block text-lg sm:text-xl font-black tracking-wide text-gray-900">OLAOSEBIKAN</span>
              <span className="block text-xs font-bold tracking-[0.24em] text-orange-500">Breads</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path || item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className="text-sm font-extrabold text-gray-800 transition hover:text-orange-500"
              >
                {item.label}
              </button>
            ))}
            <button 
              type="button"
              onClick={() => goToPage('/contact')}
              className="rounded-lg bg-orange-500 px-5 py-2.5 font-extrabold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600"
            >
              Order Now
            </button>
            <button
              type="button"
              onClick={() => goToPage('/cart')}
              className="relative rounded-lg p-2.5 text-gray-800 ring-1 ring-orange-100 transition hover:bg-orange-50 hover:text-orange-500"
              aria-label={`Go to cart with ${cartCount} items`}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => goToPage('/cart')}
              className="relative rounded-lg p-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              aria-label={`Go to cart with ${cartCount} items`}
            >
              <ShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden space-y-2 border-t border-orange-100 bg-white pb-4 pt-3">
            {navItems.map((item) => (
              <button
                key={item.path || item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className="block w-full rounded-lg px-4 py-3 text-left font-extrabold text-gray-800 hover:bg-orange-50"
              >
                {item.label}
              </button>
            ))}
            <button 
              type="button"
              onClick={() => goToPage('/contact')}
              className="block w-full rounded-lg bg-orange-500 px-4 py-3 font-extrabold text-white hover:bg-orange-600 text-2xl"
            >
            Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
