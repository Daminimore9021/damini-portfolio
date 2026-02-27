import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ onResumeClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Initialize theme
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about-me' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];
    // Resume handled separately via modal trigger

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'py-4 bg-[var(--nav-bg)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-display tracking-wider text-gradient">
                    DAMINI DIMENSION
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="relative text-sm font-medium opacity-60 hover:opacity-100 transition-all group"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300" style={{ background: 'linear-gradient(to right, #00f0ff, #a855f7)' }} />
                        </a>
                    ))}
                    {/* Resume button — opens modal */}
                    <button
                        onClick={onResumeClick}
                        className="relative text-sm font-medium opacity-60 hover:opacity-100 transition-all group"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Resume
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300" style={{ background: 'linear-gradient(to right, #00f0ff, #a855f7)' }} />
                    </button>
                    {/* Blog link */}
                    <Link
                        to="/blog"
                        className="relative text-sm font-medium opacity-60 hover:opacity-100 transition-all group"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300" style={{ background: 'linear-gradient(to right, #a855f7, #00f0ff)' }} />
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                            boxShadow: '0 0 18px rgba(0, 240, 255, 0.25)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.5)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 18px rgba(0, 240, 255, 0.25)'}
                    >
                        Let's Connect
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="opacity-70 hover:opacity-100 hover:text-neon-teal py-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link
                                to="/blog"
                                onClick={() => setIsOpen(false)}
                                className="opacity-70 hover:opacity-100 py-2 font-medium"
                                style={{ color: '#a855f7' }}
                            >
                                ✦ Blog
                            </Link>
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="text-center py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg font-medium mt-2"
                                style={{ color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                            >
                                Let's Connect
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
};

export default Navbar;
