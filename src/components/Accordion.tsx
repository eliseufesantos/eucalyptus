import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Types
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

// FAQ Accordion - Custom implementation with accessibility
export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  value,
  onValueChange,
}) => {
  const [expandedKeys, setExpandedKeys] = React.useState<string[]>(value ? [value] : []);

  React.useEffect(() => {
    if (value) {
      setExpandedKeys([value]);
    }
  }, [value]);

  const handleToggle = (itemId: string) => {
    const newExpandedKeys = expandedKeys.includes(itemId) 
      ? [] 
      : [itemId];
    setExpandedKeys(newExpandedKeys);
    onValueChange?.(newExpandedKeys[0] || '');
  };

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: window.innerWidth < 768 ? 0.4 : 0.8, 
        delay: window.innerWidth < 768 ? 0.05 : 0.1 
      }}
    >
      <div className="space-y-3 sm:space-y-4" role="tablist">
        {items.map((item) => {
          const isExpanded = expandedKeys.includes(item.id.toString());
          
          return (
            <motion.div
              key={item.id}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                delay: window.innerWidth < 768 ? 0.05 : 0.1 
              }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between group"
                onClick={() => handleToggle(item.id.toString())}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
                role="tab"
                aria-expanded={isExpanded}
                aria-controls={`faq-content-${item.id}`}
                id={`faq-trigger-${item.id}`}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-terracotta to-gold rounded-lg flex items-center justify-center text-cream shadow-lg flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-charcoal leading-tight">
                    {item.question}
                  </h4>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-charcoal/60 flex-shrink-0 ml-2"
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: window.innerWidth < 768 ? 0.3 : 0.5, 
                      ease: "easeInOut" 
                    }}
                    className="overflow-hidden"
                    role="tabpanel"
                    id={`faq-content-${item.id}`}
                    aria-labelledby={`faq-trigger-${item.id}`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                      <div className="pl-0 text-left">
                        <p className="text-sm sm:text-base text-taupe leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Premium Accordion - Custom implementation with original golden plate design
interface PremiumAccordionProps {
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  subtitle: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export const PremiumAccordion: React.FC<PremiumAccordionProps> = ({
  isExpanded,
  onToggle,
  title,
  subtitle,
  badge,
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      {/* Original Golden Plate Design - Fully Restored */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden border-2 border-gold/60" style={{
        background: 'linear-gradient(145deg, #f4e4bc, #d4c4a8, #b8a082)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
      }}>
        {/* Metallic shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl pointer-events-none" />
        {/* Gold plate texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }} />
        
        {/* Clickable Header - Enhanced */}
        <motion.button 
          className={`relative p-4 sm:p-6 lg:p-8 cursor-pointer select-none z-10 w-full ${
            isExpanded ? 'bg-gradient-to-r from-gold/15 to-terracotta/15' : ''
          }`}
          onClick={onToggle}
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          role="button"
          aria-expanded={isExpanded}
          aria-controls="premium-content"
          id="premium-trigger"
        >
          {/* Hover effect overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gold/8 to-terracotta/8 opacity-0 rounded-2xl"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative flex items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="text-left flex-1 min-w-0">
              {/* Premium Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-charcoal to-charcoal/80 text-gold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider shadow-lg mb-3 sm:mb-4 border border-gold/40"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                  delay: window.innerWidth < 768 ? 0.1 : 0.2, 
                  type: "spring", 
                  stiffness: 150 
                }}
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full animate-pulse" />
                {badge}
              </motion.div>
              
              {/* Title and Subtitle */}
              <motion.h4 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                  delay: window.innerWidth < 768 ? 0.15 : 0.3 
                }}
              >
                {title}
              </motion.h4>
              
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-charcoal font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8, 
                  delay: window.innerWidth < 768 ? 0.2 : 0.4 
                }}
              >
                {subtitle}
              </motion.p>
              
              {/* Click hint */}
              <div className="mt-2 sm:mt-3 flex items-center gap-2 text-charcoal/90 text-xs sm:text-sm font-medium">
                <span className="hidden sm:inline">Clique para ver os benefícios</span>
                <span className="sm:hidden">Clique aqui</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </div>
            </div>
            
            {/* Enhanced Expand/Collapse Icon */}
            <motion.div
              className={`ml-2 sm:ml-6 p-3 sm:p-4 rounded-full flex-shrink-0 ${
                isExpanded 
                  ? 'bg-charcoal text-cream shadow-2xl border-2 border-charcoal' 
                  : 'bg-charcoal/80 text-cream shadow-xl border-2 border-charcoal/60'
              }`}
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                scale: isExpanded ? 1.1 : 1
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.button>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ 
            duration: window.innerWidth < 768 ? 0.4 : 0.8, 
            ease: "easeInOut" 
          }}
          className="overflow-hidden relative z-10"
          role="region"
          id="premium-content"
          aria-labelledby="premium-trigger"
          aria-hidden={!isExpanded}
        >
          <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
            <div className="border-t border-gold/20 pt-4 sm:pt-6">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQAccordion;