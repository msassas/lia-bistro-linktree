import React, { useEffect } from 'react';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import ScheduleCard from './components/ScheduleCard';
import Footer from './components/Footer';
import { LINKS, RESTAURANT_INFO } from './constants';

function App() {
  useEffect(() => {
    document.title = `${RESTAURANT_INFO.name} - Delivery e Restaurante em Cajazeiras-PB`;
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 sm:py-10 sm:px-5">
      <div className="max-w-[380px] mx-auto w-full glass-card p-6 sm:p-8">
        <Header />
        
        <main className="space-y-3">
          {LINKS.map((link, index) => (
            <LinkButton 
              key={`link-${index}-${link.text}`}
              text={link.text}
              url={link.url}
              icon={link.icon}
              special={link.special}
              bgColorOnHover={link.bgColorOnHover}
            />
          ))}
          
          <ScheduleCard />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;