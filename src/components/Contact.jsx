import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStatus('success');
            setTimeout(() => setStatus(''), 5000);
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#10b981' }}>✦ Say Hello</p>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: 'var(--text-primary)' }}>Contact Information</h3>
                    <div className="glass-card rounded-[2rem] p-10 border space-y-10 flex-grow">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 rounded-2xl transition-all" style={{ background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)', color: '#00f0ff' }}>
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Email</p>
                                <a href="mailto:patildamini9021@gmail.com" className="text-sm hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                    patildamini9021@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 rounded-2xl transition-all" style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.2)', color: '#a855f7' }}>
                                <Phone size={22} />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Phone</p>
                                <a href="tel:+919021652937" className="text-sm hover:text-purple-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                    +91 9021652937
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 rounded-2xl transition-all" style={{ background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', color: '#3b82f6' }}>
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Location</p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Pune, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
                            <p className="text-sm font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Connect on WhatsApp</p>
                            <a
                                href="https://wa.me/919021652937"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#22c35e] text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-500/20 active:scale-[0.98]"
                            >
                                <MessageSquare size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Send a Message */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>
                    <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-10 border space-y-6 relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold ml-2 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="w-full bg-white/5 border rounded-2xl px-6 py-4 neon-input"
                                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold ml-2 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border rounded-2xl px-6 py-4 neon-input"
                                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold ml-2 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Mobile Number</label>
                            <input
                                type="tel"
                                placeholder="Your number"
                                className="w-full bg-white/5 border rounded-2xl px-6 py-4 neon-input"
                                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold ml-2 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                            <input
                                type="text"
                                placeholder="Project inquiry"
                                className="w-full bg-white/5 border rounded-2xl px-6 py-4 neon-input"
                                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold ml-2 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Message</label>
                            <textarea
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border rounded-2xl px-6 py-4 neon-input resize-none"
                                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            ></textarea>
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(168, 85, 247, 0.55)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)'}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                        </button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-20"
                                >
                                    <CheckCircle size={60} className="text-emerald-400" />
                                    <h4 className="text-2xl font-bold">Message Sent!</h4>
                                    <p className="text-gray-400">I'll get back to you personally very soon.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
