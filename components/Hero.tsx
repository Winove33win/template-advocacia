import React from 'react';
import { ShieldCheck, CheckCircle, ArrowDown, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "5519982403845";
  const heroMessage = "Olá, estou entrando em contato pelo site. Gostaria de uma análise do meu caso.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(heroMessage)}`, '_blank');
  };

  const handleScrollToAreas = () => {
    const element = document.getElementById('areas-de-atuacao');
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-brand-900 overflow-hidden pt-20 pb-12 lg:py-0">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center space-x-2 bg-brand-800/80 px-4 py-1.5 rounded-full border border-brand-700/50 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="text-brand-gold w-4 h-4" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-gray-200">Excelência e Sigilo Absoluto</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              Defesa Estratégica para Proteger o Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 italic">Patrimônio</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 italic">Família</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Não deixe seus direitos em mãos inexperientes. Fale agora diretamente com um especialista através do nosso plantão de atendimento.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              {/* Primary Action Button */}
              <button 
                onClick={handleWhatsAppClick}
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out skew-x-12" />
                <div className="relative flex items-center justify-center gap-3 font-bold text-lg whitespace-nowrap">
                  <MessageCircle className="w-6 h-6" />
                  <span>Falar com Advogado</span>
                </div>
              </button>

              {/* Secondary Action Button */}
              <button 
                onClick={handleScrollToAreas}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-brand-gold/50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg whitespace-nowrap"
              >
                <span>Ver Especialidades</span>
                <ArrowDown className="w-5 h-5 text-brand-gold group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              *Resposta média em menos de 15 minutos.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-y-4 gap-x-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-gold w-5 h-5" />
                <span>Plantão 24h (Urgências)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-gold w-5 h-5" />
                <span>Atendimento Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-gold w-5 h-5" />
                <span>Alta Taxa de Êxito</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Focus */}
          <div className="hidden lg:block relative animate-in slide-in-from-right duration-1000 delay-200">
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
             
             <div className="relative rounded-lg overflow-hidden border border-brand-700/50 shadow-2xl bg-brand-800/80 backdrop-blur-sm">
               <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                 alt="Reunião com advogado"
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-lg">
                    <p className="text-white font-serif italic text-xl leading-relaxed">"A justiça não consiste em ser neutro entre o certo e o errado, mas em descobrir o certo e sustentá-lo."</p>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};