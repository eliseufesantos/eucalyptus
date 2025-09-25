import React, { useState } from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import CTA from './components/CTA';
import Header from './components/Header';
import Footer from './components/Footer';
import DiagnosticForm from './components/DiagnosticForm';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Header onOpenForm={() => setIsFormOpen(true)} />
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      <PainSection />
      <Solution />
      <Benefits />
      <Authority />
      <CTA onOpenForm={() => setIsFormOpen(true)} />
      <Footer />
      <DiagnosticForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default App;