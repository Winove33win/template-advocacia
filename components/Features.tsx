import React from 'react';
import { Scale, Users, FileText, Briefcase, Gavel, ClipboardList, MessageSquare, Shield } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Direito Civil',
    description: 'Resolução de conflitos, indenizações, contratos e proteção de bens com estratégias preventivas e contenciosas.',
    icon: 'scale'
  },
  {
    id: 2,
    title: 'Direito de Família',
    description: 'Divórcios, guarda, pensão e inventários tratados com a sensibilidade e agilidade que você precisa.',
    icon: 'users'
  },
  {
    id: 3,
    title: 'Direito Trabalhista',
    description: 'Defesa incisiva de direitos trabalhistas, reversão de justa causa e indenizações por danos morais.',
    icon: 'briefcase'
  },
  {
    id: 4,
    title: 'Direito Previdenciário',
    description: 'Planejamento de aposentadoria, revisão de benefícios e auxílios para garantir o seu futuro.',
    icon: 'file'
  }
];

export const Features: React.FC = () => {
  const whatsappNumber = "5519982403845";

  const getIcon = (type: string) => {
    switch (type) {
      case 'scale': return <Scale className="w-8 h-8" />;
      case 'users': return <Users className="w-8 h-8" />;
      case 'briefcase': return <Briefcase className="w-8 h-8" />;
      case 'file': return <FileText className="w-8 h-8" />;
      default: return <Gavel className="w-8 h-8" />;
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    const message = `Olá, gostaria de tirar dúvidas sobre ${serviceTitle}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="areas-de-atuacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">Onde Podemos Ajudar</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Atuação Especializada e Multidisciplinar</h3>
          <p className="text-gray-600 text-lg">
            Nossa equipe é formada por especialistas dedicados a encontrar a melhor solução jurídica para o seu caso específico. Não atuamos como generalistas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-gold group flex flex-col h-full">
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center text-brand-900 mb-6 group-hover:bg-brand-900 group-hover:text-brand-gold transition-colors">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-brand-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <button 
                onClick={() => handleServiceClick(service.title)}
                className="mt-auto w-full py-2 bg-white border border-brand-gold text-brand-900 font-bold rounded hover:bg-brand-gold hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                Consultar Especialista
              </button>
            </div>
          ))}
        </div>

        {/* Methodology Section - Extra Content Requested */}
        <div className="bg-brand-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Nosso Método de Trabalho</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Entendemos que processos jurídicos podem ser estressantes. Por isso, desenvolvemos um método claro e transparente para que você saiba exatamente o que está acontecendo em cada etapa.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/20 p-2 rounded text-brand-gold mt-1">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-brand-gold">1. Atendimento Inicial</h5>
                    <p className="text-sm text-gray-400">Ouvimos sua história via WhatsApp ou presencialmente para entender os detalhes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/20 p-2 rounded text-brand-gold mt-1">
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-brand-gold">2. Análise de Viabilidade</h5>
                    <p className="text-sm text-gray-400">Estudamos a lei e a jurisprudência para traçar a melhor estratégia de vitória.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/20 p-2 rounded text-brand-gold mt-1">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-brand-gold">3. Ação Imediata</h5>
                    <p className="text-sm text-gray-400">Protocolamos as medidas necessárias com agilidade para garantir seus direitos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
               <img 
                 src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Método de advocacia" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-brand-900/40"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};