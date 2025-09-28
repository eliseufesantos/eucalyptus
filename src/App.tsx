import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import CTA from './components/CTA';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <PainSection />
      <Solution />
      <Benefits />
      <Authority />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;