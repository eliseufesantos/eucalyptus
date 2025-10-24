import React from 'react';

const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('hero');

  const navItems = [
    { id: 'hero', label: 'Início', href: '#hero' },
    { id: 'calculadora-roi', label: 'ROI', href: '#calculadora-roi' },
    { id: 'dores', label: 'Dores', href: '#dores' },
    { id: 'solution', label: 'RADIX', href: '#solution' },
    { id: 'beta', label: 'Beta', href: '#beta' },
    { id: 'cta', label: 'Ação', href: '#cta' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="bg-charcoal/90 backdrop-blur-lg rounded-full px-6 py-3 border border-gold/20 shadow-lg shadow-charcoal/50">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? 'text-charcoal bg-gradient-to-r from-gold to-terracotta'
                      : 'text-cream/70 hover:text-cream hover:bg-cream/10'
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
