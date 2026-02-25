import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-background text-white min-h-screen">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Experience />
        <Portfolio />
        <Resume />
        <About />
        <Feedback />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
