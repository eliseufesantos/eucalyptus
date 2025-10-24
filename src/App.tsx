import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load componentes pesados para melhor performance
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const PainSection = lazy(() => import('./components/PainSection'));
const Solution = lazy(() => import('./components/Solution'));
const Authority = lazy(() => import('./components/Authority'));
const CTA = lazy(() => import('./components/CTA'));

// Loading fallback simples e leve
const LoadingFallback = () => (
  <div className="py-12 text-center">
    <div className="inline-block w-8 h-8 border-4 border-terracotta border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <ROICalculator />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <PainSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Solution />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Authority />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CTA />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;