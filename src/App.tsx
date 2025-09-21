import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MethodSection from './components/MethodSection';
import ResultsSection from './components/ResultsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <MethodSection />
        <ResultsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;