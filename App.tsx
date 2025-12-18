import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AILab } from './components/AILab';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { MusicSection } from './components/MusicSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-midnight text-white selection:bg-acid selection:text-midnight overflow-x-hidden">
      <div className="noise-bg"></div>
      <Navigation />
      
      {/* 1. HERO */}
      <Hero />
      
      {/* 2. MANIFESTO (ABOUT) */}
      <AboutSection />
      
      {/* 3. WORK (CASE STUDIES) */}
      <WorkSection />
      
      {/* 4. SERVICES */}
      <ServicesSection />
      
      {/* 5. LAB (PLAYGROUND) */}
      <AILab />

      {/* 6. BLOG (NEW) */}
      <BlogSection />
      
      {/* 7. PLAY (EXTRAS) */}
      <div id="play" className="relative bg-navy pt-12">
        <MusicSection />
      </div>

      {/* 8. FOOTER */}
      <Footer />
    </main>
  );
}

export default App;