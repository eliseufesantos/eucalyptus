import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Contato', href: '#contato' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-4">Eucalyptus</div>
          <p className="opacity-80 mb-8">
            Transformando clínicas odontológicas em negócios digitais de sucesso
          </p>
          
          <nav className="flex justify-center gap-8 mb-8 flex-wrap">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="opacity-60">
              © {currentYear} Eucalyptus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;