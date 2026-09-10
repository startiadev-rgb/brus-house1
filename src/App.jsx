import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import GiftList from './components/GiftList';
import MessagesWall from './components/MessagesWall';
import Footer from './components/Footer';
import PixModal from './components/PixModal';
import PixConfigModal from './components/PixConfigModal';
import { INITIAL_MESSAGES, GIFTS_DATA } from './data/gifts';

export default function App() {
  // PIX Config State with localStorage
  const [pixConfig, setPixConfig] = useState(() => {
    const saved = localStorage.getItem('cha_casa_nova_pix_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      key: 'casanova.brunaepedro@gmail.com',
      holder: 'Bru & Cat'
    };
  });

  // Messages State with localStorage (v3 key to instantly refresh user's cache to Lorena, Luiza & Malu)
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('cha_casa_nova_messages_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If parsed messages contain old data, fallback to INITIAL_MESSAGES
        if (parsed.some(m => m.name === 'Ana & Marcelo' || m.name === 'Tia Clarice')) {
          return INITIAL_MESSAGES;
        }
        return parsed;
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_MESSAGES;
  });

  // Modals state
  const [selectedGift, setSelectedGift] = useState(null);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [isPixConfigOpen, setIsPixConfigOpen] = useState(false);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('cha_casa_nova_pix_v2', JSON.stringify(pixConfig));
  }, [pixConfig]);

  useEffect(() => {
    localStorage.setItem('cha_casa_nova_messages_v3', JSON.stringify(messages));
  }, [messages]);

  const handleOpenGiftModal = (giftItem) => {
    setSelectedGift(giftItem);
    setIsPixModalOpen(true);
  };

  const handleOpenCustomGift = () => {
    const customGiftObj = GIFTS_DATA.find((g) => g.isCustom) || {
      id: 'custom-amount',
      title: 'Mandar o Valor que Quiser',
      isCustom: true,
      price: null,
      badge: 'Valor Livre'
    };
    setSelectedGift(customGiftObj);
    setIsPixModalOpen(true);
  };

  const handleGiftSuccess = (newEntry) => {
    setMessages((prev) => [newEntry, ...prev]);
  };

  const handleSavePixConfig = (newConfig) => {
    setPixConfig(newConfig);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2B2A27] font-sans flex flex-col selection:bg-[#C86D51] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCustomGift={handleOpenCustomGift} />

      {/* Main Content (Centered & Mobile-First) */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenCustomGift={handleOpenCustomGift} />

        {/* Story & Timeline */}
        <Timeline />

        {/* Gift Registry Grid */}
        <GiftList onSelectGift={handleOpenGiftModal} />

        {/* Messages & Love Wall (Bru & Cat focus) */}
        <MessagesWall messages={messages} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPixConfig={() => setIsPixConfigOpen(true)}
        pixKey={pixConfig.key}
      />

      {/* PIX Payment Modal */}
      {isPixModalOpen && selectedGift && (
        <PixModal
          gift={selectedGift}
          pixKey={pixConfig.key}
          pixHolder={pixConfig.holder}
          onClose={() => {
            setIsPixModalOpen(false);
            setSelectedGift(null);
          }}
          onSuccess={handleGiftSuccess}
          onOpenPixConfig={() => setIsPixConfigOpen(true)}
        />
      )}

      {/* PIX Settings Admin Modal */}
      {isPixConfigOpen && (
        <PixConfigModal
          currentKey={pixConfig.key}
          currentHolder={pixConfig.holder}
          onClose={() => setIsPixConfigOpen(false)}
          onSave={handleSavePixConfig}
        />
      )}
    </div>
  );
}
