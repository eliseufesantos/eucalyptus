import React from 'react';
import { 
  ArrowRight, 
  Users, 
  CheckCircle, 
  Database, 
  Zap, 
  Monitor, 
  Camera, 
  ChevronLeft, 
  ChevronRight,
  AlertTriangle,
  Star,
  Shield,
  Target,
  TrendingUp,
  Clock,
  Heart,
  Sparkles
} from 'lucide-react';

// Sistema de ícones padronizado para o projeto Eucalyptus
export const Icons = {
  // Navegação
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  
  // Social/Authority
  Users,
  Star,
  Heart,
  
  // Status
  CheckCircle,
  AlertTriangle,
  Shield,
  
  // Serviços
  Database,    // CRM
  Zap,        // Automação
  Monitor,    // Landing Pages
  Camera,     // Consultoria
  Target,     // Estratégia
  TrendingUp, // Crescimento
  Clock,      // Tempo
  Sparkles,   // Premium
};

// Componente de ícone com animações padrão
interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  animated?: boolean;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  animated = false 
}) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado`);
    return null;
  }

  const baseClasses = `w-${size} h-${size}`;
  const animationClasses = animated ? 'transition-transform duration-300 hover:scale-110' : '';
  
  return (
    <IconComponent 
      className={`${baseClasses} ${animationClasses} ${className}`}
    />
  );
};

// Ícones específicos para o projeto
export const ProjectIcons = {
  // Hero Section
  HeroArrow: () => <ArrowRight className="w-5 h-5" />,
  HeroUsers: () => <Users className="w-3 h-3 text-white" />,
  
  // Solution Section
  SolutionDatabase: () => <Database className="w-6 h-6 text-white" />,
  SolutionZap: () => <Zap className="w-6 h-6 text-white" />,
  SolutionMonitor: () => <Monitor className="w-6 h-6 text-white" />,
  SolutionCamera: () => <Camera className="w-6 h-6 text-white" />,
  
  // Navigation - Sophisticated arrows
  NavPrev: () => (
    <ChevronLeft 
      className="w-5 h-5 transition-all duration-300 ease-in-out" 
      strokeWidth={2.5}
    />
  ),
  NavNext: () => (
    <ChevronRight 
      className="w-5 h-5 transition-all duration-300 ease-in-out" 
      strokeWidth={2.5}
    />
  ),
  
  // Alerts
  Alert: () => <AlertTriangle className="w-5 h-5 text-red-500" />,
};

export default Icons;
