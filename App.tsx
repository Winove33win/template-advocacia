import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  const whatsappNumber = "5519982403845";
  const defaultMessage = "Olá, gostaria de falar com um advogado.";

  return (
    <div className="font-sans text-brand-900 bg-white selection:bg-brand-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group border-2 border-white"
        aria-label="Falar no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-lg">
          Falar com Advogado
        </span>
      </a>
    </div>
  );
}

export default App;
