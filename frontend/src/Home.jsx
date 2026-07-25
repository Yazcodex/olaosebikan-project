import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

export default function Home({ cartItems, cartCount, addToCart, updateCartQuantity, removeFromCart }) {
  return (
    <div className="bg-white">
      <Navbar
        cartItems={cartItems}
        cartCount={cartCount}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
      />
      <Hero />
      <About />
      <Products addToCart={addToCart} />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
