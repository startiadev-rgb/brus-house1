import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GiftList from './components/GiftList';
import MessagesWall from './components/MessagesWall';
import Footer from './components/Footer';
import PixModal from './components/PixModal';
import CartDrawer from './components/CartDrawer';
import { GIFTS_DATA, INITIAL_MESSAGES } from './data/gifts';

const PIX_CONFIG = {
  key: '63.066.276/0001-92',
  holder: 'Bru & Cat',
  cardLink: '',
};

export default function App() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('cha_casa_nova_messages_v5');
    if (!saved) return INITIAL_MESSAGES;

    try {
      return JSON.parse(saved);
    } catch {
      return INITIAL_MESSAGES;
    }
  });
  const [selectedGift, setSelectedGift] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cha_casa_nova_cart_v1')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cha_casa_nova_messages_v5', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('cha_casa_nova_cart_v1', JSON.stringify(cart));
  }, [cart]);

  const cartItems = cart.map((entry) => {
    const gift = GIFTS_DATA.find((item) => item.id === entry.id);
    return gift ? { ...gift, quantity: entry.quantity } : null;
  }).filter(Boolean);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartQuantities = Object.fromEntries(cart.map((item) => [item.id, item.quantity]));

  const addToCart = (gift) => setCart((current) => {
    const existing = current.find((item) => item.id === gift.id);
    return existing
      ? current.map((item) => item.id === gift.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { id: gift.id, quantity: 1 }];
  });

  const decreaseCartItem = (id) => setCart((current) => current
    .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
    .filter((item) => item.quantity > 0));

  const checkoutCart = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (!total) return;
    setIsCartOpen(false);
    setSelectedGift({ id: 'cart', title: 'Seu carrinho', price: total, items: cartItems, isCart: true });
  };

  const saveSuccess = (entry) => {
    setMessages((current) => [entry, ...current]);
    if (selectedGift?.isCart) setCart([]);
  };

  return (
    <div className="site-shell">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <GiftList onSelectGift={setSelectedGift} onAddToCart={addToCart} cartQuantities={cartQuantities} />
        <MessagesWall messages={messages} />
      </main>
      <Footer />

      {selectedGift && (
        <PixModal
          gift={selectedGift}
          pixKey={PIX_CONFIG.key}
          pixHolder={PIX_CONFIG.holder}
          cardLink={PIX_CONFIG.cardLink}
          onClose={() => setSelectedGift(null)}
          onSuccess={saveSuccess}
        />
      )}
      {isCartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onDecrease={decreaseCartItem}
          onIncrease={(id) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))}
          onRemove={(id) => setCart((current) => current.filter((item) => item.id !== id))}
          onCheckout={checkoutCart}
        />
      )}
    </div>
  );
}
