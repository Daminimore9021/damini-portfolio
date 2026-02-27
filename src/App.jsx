import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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

const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <Routes>
      {/* ── Blog routes (standalone pages, no intro/navbar) ── */}
      <Route path="/blog" element={
        <Suspense fallback={<div style={{ background: '#0f0f1a', minHeight: '100vh' }} />}>
          <BlogList />
        </Suspense>
      } />
      <Route path="/blog/:slug" element={
        <Suspense fallback={<div style={{ background: '#0f0f1a', minHeight: '100vh' }} />}>
          <BlogPost />
        </Suspense>
      } />

      {/* ── Main portfolio (/) ── */}
      <Route path="*" element={
        <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>
          <BackgroundAnimation />
          {!introComplete && (
            <AvatarIntro onComplete={() => setIntroComplete(true)} />
          )}
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
          <Resume isOpen={showResume} onClose={() => setShowResume(false)} />
        </div>
      } />
    </Routes>
  );
}

export default App;

