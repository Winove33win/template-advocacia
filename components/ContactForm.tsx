import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Direito Civil',
    message: ''
  });

  const whatsappNumber = "5519982403845";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const text = `*Nova Solicitação via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Interesse:* ${formData.subject}\n*Caso:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">Entre em Contato</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-900 mb-6">Vamos Analisar o Seu Caso</h3>
            <p className="text-gray-600 mb-10 text-lg">
              A maneira mais rápida de obter uma resposta é nos enviando uma mensagem. Nossa equipe jurídica analisa previamente seu relato e retorna com a orientação inicial.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">WhatsApp Direto</h4>
                  <p className="text-gray-600 cursor-pointer hover:text-brand-gold" onClick={() => window.open(`https://wa.me/${whatsappNumber}`)}>
                    (19) 98240-3845
                  </p>
                  <p className="text-green-600 text-sm font-semibold mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online Agora
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Email</h4>
                  <p className="text-gray-600">contato@silvaadvocacia.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Escritório</h4>
                  <p className="text-gray-600">Av. Paulista, 1000 - Conj. 101</p>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-50 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form that redirects to WhatsApp */}
          <div className="bg-brand-900 p-8 md:p-10 rounded-2xl shadow-xl border border-brand-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                 <h4 className="text-2xl font-bold text-white mb-2">Plantão de Atendimento</h4>
                 <p className="text-gray-400 text-sm">Preencha para iniciar o atendimento via WhatsApp imediatamente.</p>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-brand-700 bg-brand-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-brand-700 bg-brand-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="(DDD) 00000-0000"
                  />
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Área de Interesse</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-700 bg-brand-800 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  >
                    <option>Direito Civil</option>
                    <option>Direito de Família</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito Previdenciário</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Relate brevemente seu caso</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-brand-700 bg-brand-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Ex: Gostaria de saber como proceder com um divórcio..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center transition-all transform hover:-translate-y-1 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                Iniciar Conversa no WhatsApp
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp do advogado.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};