import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-surface text-on-surface flex flex-col overflow-x-clip">
      {/* Subtle Living Ambient Background Animation */}
      <BackgroundEffect />

      <Navbar />
      <main className="pt-20 flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
