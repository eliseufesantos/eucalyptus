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
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-semibold text-secondary mb-3 sm:mb-4">Eucalyptus</div>
          <p className="text-tertiary/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Transformando clínicas odontológicas em negócios digitais de sucesso
          </p>
          
          <nav className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 flex-wrap">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-tertiary/80 hover:text-secondary hover:opacity-100 transition-all duration-300 text-sm sm:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-secondary/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
            <p className="text-tertiary/60 text-xs sm:text-sm">
              © {currentYear} Eucalyptus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;