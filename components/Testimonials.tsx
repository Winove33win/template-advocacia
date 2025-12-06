import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Empresário",
    content: "A equipe do Dr. Roberto salvou minha empresa de um processo trabalhista injusto que poderia ter nos falido. A estratégia foi impecável e a comunicação transparente o tempo todo.",
  },
  {
    id: 2,
    name: "Ana Paula Souza",
    role: "Cliente Direito de Família",
    content: "Passei por um divórcio muito difícil, mas me senti acolhida e protegida. Conseguiram resolver tudo de forma rápida e garantiram o futuro dos meus filhos.",
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    role: "Diretor Comercial",
    content: "Profissionalismo raro de encontrar hoje em dia. Não prometem milagres, prometem trabalho duro e técnica jurídica, e foi exatamente isso que entregaram com vitória no final.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">O Que Nossos Clientes Dizem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-800 p-8 rounded-lg border border-brand-700 relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-brand-gold opacity-20 w-10 h-10" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.content}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-brand-gold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};