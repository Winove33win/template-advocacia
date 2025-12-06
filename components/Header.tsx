import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const whatsappNumber = "5519982403845";
  const headerMessage = "Olá, vi o site e gostaria de agendar um atendimento.";

  // Lista de navegação com IDs explícitos para evitar erros de acentuação
  const navItems = [
    { label: 'Áreas de Atuação', id: 'areas-de-atuacao' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(headerMessage)}`, '_blank');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-brand-900 text-brand-gold' : 'bg-brand-gold text-brand-900'} mr-3`}>
              <Scale size={24} />
            </div>
            <div>
              <h1 className={`font-serif text-xl font-bold leading-tight transition-colors ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
                Silva & Associados
              </h1>
              <p className={`text-xs tracking-wider uppercase transition-colors ${isScrolled ? 'text-brand-700' : 'text-gray-300 group-hover:text-white'}`}>
                Advocacia Especializada
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-brand-gold' : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-brand-gold' : 'bg-white'}`}></span>
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="bg-brand-gold hover:bg-brand-goldHover text-white px-6 py-2.5 rounded text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              Atendimento Online
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-brand-900' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-brand-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col space-y-2 border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-brand-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 active:bg-green-700 text-white px-6 py-4 rounded-lg text-center font-bold w-full flex items-center justify-center gap-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};