import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GiftList from './components/GiftList';
import MessagesWall from './components/MessagesWall';
import Footer from './components/Footer';
import PixModal from './components/PixModal';
import { INITIAL_MESSAGES } from './data/gifts';

const PIX_CONFIG = {
  key: '63.066.276/0001-92',
  holder: 'Catarina',
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

  useEffect(() => {
    localStorage.setItem('cha_casa_nova_messages_v5', JSON.stringify(messages));
  }, [messages]);

  const saveSuccess = (entry) => {
    setMessages((current) => [entry, ...current]);
  };

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <GiftList onSelectGift={setSelectedGift} />
        <MessagesWall messages={messages} />
      </main>
      <Footer />

      {selectedGift && (
        <PixModal
          gift={selectedGift}
          pixKey={PIX_CONFIG.key}
          pixHolder={PIX_CONFIG.holder}
          onClose={() => setSelectedGift(null)}
          onSuccess={saveSuccess}
        />
      )}
    </div>
  );
}
