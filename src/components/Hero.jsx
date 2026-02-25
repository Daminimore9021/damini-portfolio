import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Need to install this or implement custom
// Since we didn't add react-type-animation to install list, I'll implement a simple CSS/state based one or use Framer Motion
// Actually, Framer Motion can do staggering. For typing, it's easier to simulate or just use a static tagline for now to save complexity, 
// OR I can quickly add `react-type-animation` to dependencies. I'll add the dependency.

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=400"
                        alt="Damini"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 shadow-lg mx-auto object-cover"
                    />
                </motion.div>

                <motion.h1
                    id="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold font-display mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Hi, I'm <span className="text-gradient hover:animate-glow transition-all">Damini More</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl font-light mb-8 h-20 md:h-auto"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <TypeAnimation
                        sequence={[
                            'AI Workflow Automation Specialist',
                            1000,
                            'LLM & RAG Systems Integrator',
                            1000,
                            'Intern @ NITI.AI',
                            1000,
                            'Building Intelligent Systems',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <br />
                    <span className="text-neon-teal text-base md:text-lg mt-2 block italic">
                        Architecting Intelligent AI Workflows for Modern Efficiency
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a
                        href="#portfolio"
                        className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 backdrop-blur-sm transition-all hover:border-neon-teal"
                        style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                    >
                        Book Free Audit
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                style={{ color: 'var(--text-secondary)' }}
            >
                <span className="text-sm tracking-widest uppercase opacity-40">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
