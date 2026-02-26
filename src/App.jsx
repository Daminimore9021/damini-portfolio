import React, { useState } from 'react';
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
import Education from './components/Education';
import Chatbot from './components/Chatbot';
import AvatarIntro from './components/AvatarIntro';
import BackgroundAnimation from './components/BackgroundAnimation';
import { motion } from 'framer-motion';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>

      {/* Animated background orbs — fixed, behind everything */}
      <BackgroundAnimation />

      {/* Avatar Intro — fixed overlay, unmounts after complete */}
      {!introComplete && (
        <AvatarIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main portfolio — always rendered in background, fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-white min-h-screen relative z-10"
        style={{ pointerEvents: introComplete ? 'auto' : 'none' }}
      >
        <ScrollProgress />
        <CustomCursor />
        <Navbar onResumeClick={() => setShowResume(true)} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Portfolio />
          <Services />
          <Features />
          <Feedback />
          <Contact />
        </main>
        <Chatbot />
        <Footer />
      </motion.div>

      {/* Resume modal — triggered from Navbar, shown above everything */}
      <Resume isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}

export default App;
