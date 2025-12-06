import React from 'react';
import { LawyerProfile } from '../types';
import { Award, Clock, MapPin, Scale } from 'lucide-react';

const profile: LawyerProfile = {
  name: "Dr. Roberto Silva",
  title: "Sócio Fundador & Especialista em Direito Civil",
  bio: [
    "Com mais de 15 anos de atuação nos tribunais superiores, Dr. Roberto Silva consolidou sua carreira defendendo interesses complexos com ética inegociável.",
    "Graduado pela USP com Mestrado em Direito Processual, ele acredita que cada cliente merece uma estratégia única, desenhada sob medida para garantir justiça e tranquilidade.",
    "Sua abordagem combina conhecimento técnico profundo com uma visão humanizada, entendendo que por trás de cada processo existem vidas e patrimônios que precisam ser protegidos."
  ],
  stats: [
    { label: "Anos de Experiência", value: "+15" },
    { label: "Casos Conduzidos", value: "+1.200" },
    { label: "Milhões em Causas", value: "R$ 50mi+" },
  ]
};

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-gold rounded-lg z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Dr. Roberto Silva" 
              className="relative z-10 w-full rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-8 right-8 z-20 bg-brand-900 text-white p-6 rounded shadow-xl max-w-xs hidden md:block">
              <p className="font-serif italic text-lg">"O direito não socorre aos que dormem. Aja agora."</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">Quem Lhe Representa</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-900 mb-6">{profile.name}</h3>
            <p className="text-xl text-brand-700 font-medium mb-6">{profile.title}</p>
            
            <div className="space-y-4 text-gray-600 mb-8 leading-relaxed text-justify">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              {profile.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Section: Why Choose Us / Infrastructure */}
        <div id="diferenciais" className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-brand-900">Por que escolher nosso escritório?</h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Mais do que advogados, somos parceiros estratégicos na defesa dos seus interesses. Nossa estrutura permite atendimento ágil e global.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-4 rounded-full inline-block mb-4 text-brand-gold shadow-sm">
                <Clock size={28} />
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Agilidade Processual</h4>
              <p className="text-sm text-gray-600">Utilizamos tecnologia de ponta para acompanhamento em tempo real dos processos.</p>
            </div>

            <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-4 rounded-full inline-block mb-4 text-brand-gold shadow-sm">
                <Award size={28} />
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Reconhecimento</h4>
              <p className="text-sm text-gray-600">Histórico comprovado de vitórias em casos de alta complexidade.</p>
            </div>

            <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-4 rounded-full inline-block mb-4 text-brand-gold shadow-sm">
                <Scale size={28} />
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Ética e Transparência</h4>
              <p className="text-sm text-gray-600">Você saberá a verdade sobre as chances do seu caso, sem promessas vazias.</p>
            </div>

            <div className="bg-brand-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-4 rounded-full inline-block mb-4 text-brand-gold shadow-sm">
                <MapPin size={28} />
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Localização e Online</h4>
              <p className="text-sm text-gray-600">Atendimento presencial em SP ou 100% digital para todo o Brasil.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};