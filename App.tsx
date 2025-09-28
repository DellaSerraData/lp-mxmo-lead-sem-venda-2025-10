
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromiseSection from './components/PromiseSection';
import ProofSection from './components/ProofSection';
import ProcessSection from './components/ProcessSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-azul-petroleo font-montserrat antialiased">
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <ProofSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
