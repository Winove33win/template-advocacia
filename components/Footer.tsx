import React from 'react';
import { Scale, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-brand-gold">
              <Scale size={32} />
              <span className="font-serif text-xl font-bold text-white">Silva & Associados</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Comprometidos com a excelência jurídica e a defesa intransigente dos direitos de nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Início</button></li>
              <li><button onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Sobre o Escritório</button></li>
              <li><button onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Áreas de Atuação</button></li>
              <li><button onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Áreas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Direito Civil</button></li>
              <li><button onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Direito de Família</button></li>
              <li><button onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Trabalhista</button></li>
              <li><button onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Previdenciário</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li className="text-xs pt-4 text-gray-500">
                OAB/SP 00.000
                <br />
                Este site não presta consultoria jurídica direta, servindo apenas para apresentação profissional.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silva & Associados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};