import { useState } from 'react';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { API_BASE_URL } from './config';

export default function Cart({ cartItems, cartCount, updateCartQuantity, removeFromCart }) {
  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [orderError, setOrderError] = useState('');

  const cartTotal = cartItems.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^\d.]/g, '')) || 0;
    return total + price * item.quantity;
  }, 0);

  const parsePrice = (price) => Number(String(price).replace(/[^\d.]/g, '')) || 0;
  const formatPrice = (amount) => `NGN ${amount.toLocaleString()}`;

  const buildWhatsAppOrderUrl = () => {
    const orderLines = cartItems.map((item) => `${item.quantity} x ${item.name} (${item.price})`);
    const message = [
      'Hello, I want to place a bread order:',
      ...orderLines,
      `Total: ${formatPrice(cartTotal)}`,
      '',
      'Delivery address:',
    ].join('\n');

    return `https://wa.me/2348062346890?text=${encodeURIComponent(message)}`;
  };

  const saveOrderAndOpenWhatsApp = async () => {
    setOrderError('');
    setIsSavingOrder(true);

    try {
      const orderNote = cartItems.map((item) => `${item.quantity} x ${item.name}`).join(', ');
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: 'WhatsApp Customer',
          phoneNumber: 'Pending on WhatsApp',
          deliveryAddress: 'Pending on WhatsApp',
          orderNote,
          items: cartItems.map((item) => ({
            name: item.name,
            price: parsePrice(item.price),
            quantity: item.quantity,
          })),
        }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || 'Unable to save order.');

      window.location.assign(buildWhatsAppOrderUrl());
    } catch (error) {
      setOrderError(`${error.message} Please contact us on WhatsApp to complete your order.`);
    } finally {
      setIsSavingOrder(false);
    }
  };

  const goToPage = (path) => {
    window.location.assign(path);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar cartCount={cartCount} />
      <main className="pt-16">
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-500">
                Your order
              </p>
              <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
                Bread Cart
              </h1>
            </div>

            {cartItems.length === 0 ? (
              <div className="grid min-h-[360px] place-items-center rounded-lg border border-orange-100 bg-orange-50 px-6 text-center">
                <div>
                  <ShoppingCart className="mx-auto mb-4 text-orange-300" size={56} />
                  <h2 className="text-2xl font-black text-gray-900">Your cart is empty</h2>
                  <p className="mt-2 text-base font-semibold text-gray-500">
                    Add bread from our selection to start an order.
                  </p>
                  <button
                    type="button"
                    onClick={() => goToPage('/#products')}
                    className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
                  >
                    Browse Bread
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <article key={item.id} className="rounded-lg border border-orange-100 bg-white p-4 shadow-sm">
                      <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-32 w-full rounded-lg object-cover"
                        />
                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h2 className="text-xl font-black text-gray-900">{item.name}</h2>
                              <p className="mt-1 text-sm font-bold text-orange-500">{item.price}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart?.(item.id)}
                              className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{item.description}</p>
                          <div className="mt-4 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity?.(item.id, item.quantity - 1)}
                              className="grid h-10 w-10 place-items-center rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100"
                              aria-label={`Reduce ${item.name} quantity`}
                            >
                              <Minus size={17} />
                            </button>
                            <span className="grid h-10 w-14 place-items-center rounded-lg border border-orange-100 text-sm font-black text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity?.(item.id, item.quantity + 1)}
                              className="grid h-10 w-10 place-items-center rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              <Plus size={17} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="h-fit rounded-lg border border-orange-100 bg-white p-5 shadow-sm">
                  <h2 className="text-xl font-black text-gray-900">Order Summary</h2>
                  <div className="mt-5 space-y-3 border-y border-orange-100 py-4 text-sm font-bold text-gray-600">
                    <div className="flex justify-between">
                      <span>Items</span>
                      <span>{cartCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="text-orange-500">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                  {orderError && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                      {orderError}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={saveOrderAndOpenWhatsApp}
                    disabled={isSavingOrder}
                    className="mt-5 w-full rounded-lg bg-orange-500 px-5 py-3 font-black text-white transition hover:bg-orange-600 disabled:bg-orange-300"
                  >
                    {isSavingOrder ? 'Saving Order...' : 'Order on WhatsApp'}
                  </button>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
