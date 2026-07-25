import { useEffect, useMemo, useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import LocateUs from './LocateUs';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Cart from './Cart';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('breadCart')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('breadCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  };

  const cartProps = {
    cartItems,
    cartCount,
    addToCart,
    updateCartQuantity,
    removeFromCart,
  };

  if (window.location.pathname === '/admin/login') {
    return <AdminLogin />;
  }

  if (window.location.pathname === '/admin/dashboard') {
    return <AdminDashboard />;
  }

  if (window.location.pathname === '/contact') {
    return <Contact {...cartProps} />;
  }

  if (window.location.pathname === '/locate-us') {
    return <LocateUs {...cartProps} />;
  }

  if (window.location.pathname === '/cart') {
    return <Cart {...cartProps} />;
  }

  return <Home {...cartProps} />;
}
