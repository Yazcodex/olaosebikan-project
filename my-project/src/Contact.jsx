import Navbar from './components/Navbar';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

export default function Contact({ cartItems, cartCount, updateCartQuantity, removeFromCart }) {
  return (
    <div className="bg-orange-50">
      <Navbar
        cartItems={cartItems}
        cartCount={cartCount}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
      />
      <main className="pt-16">
        <ContactSection cartItems={cartItems} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
