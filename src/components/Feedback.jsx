import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle, Heart, Star } from 'lucide-react';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({ name: '', role: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    // Pre-populated seed feedback
    const seedFeedbacks = [
        {
            id: 'seed-1',
            name: "Rahul Sharma",
            role: "Full Stack Developer",
            message: "Damini's workflow automation skills are top-notch. She helped me automate my lead generation process beautifully!",
            date: new Date().toLocaleDateString()
        },
        {
            id: 'seed-2',
            name: "Priya Varma",
            role: "Product Manager",
            message: "Extremely professional and tech-savvy. Her Student Management System project is quite impressive.",
            date: new Date().toLocaleDateString()
        }
    ];

    useEffect(() => {
        const savedFeedbacks = JSON.parse(localStorage.getItem('damini_feedbacks') || '[]');
        if (savedFeedbacks.length === 0) {
            setFeedbacks(seedFeedbacks);
            localStorage.setItem('damini_feedbacks', JSON.stringify(seedFeedbacks));
        } else {
            setFeedbacks(savedFeedbacks);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) return;

        setIsSubmitting(true);

        const newFeedback = {
            id: Date.now().toString(),
            ...formData,
            role: formData.role || 'Visitor',
            date: new Date().toLocaleDateString()
        };

        setTimeout(() => {
            const updated = [newFeedback, ...feedbacks];
            setFeedbacks(updated);
            localStorage.setItem('damini_feedbacks', JSON.stringify(updated));
            setFormData({ name: '', role: '', message: '' });
            setIsSubmitting(false);
            setStatus('Feedback shared! Thank you ❤️');
            setTimeout(() => setStatus(''), 3000);
        }, 800);
    };

    return (
        <section id="feedback" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold font-display mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Wall of <span className="text-gradient">Love</span>
                </motion.h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Share your experience or words of encouragement. Your feedback powers my journey!
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl self-start sticky top-32"
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                        <Heart className="text-red-500" fill="currentColor" size={24} />
                        Leave a Feedback
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your Name"
                                className="w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Role / Headline (Optional)</label>
                            <input
                                type="text"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                placeholder="e.g. Recruiter, Client, Fellow Developer"
                                className="w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Your Message</label>
                            <textarea
                                required
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Share your thoughts..."
                                className="w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? 'Posting...' : (
                                <>
                                    Share Feedback <Send size={18} />
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center text-emerald-400 font-medium text-sm"
                                >
                                    {status}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

                {/* Display Feedbacks */}
                <div className="space-y-6 max-h-[700px] overflow-y-auto pr-4 scrollbar-hide">
                    <AnimatePresence mode="popLayout">
                        {feedbacks.map((fb) => (
                            <motion.div
                                key={fb.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass-card p-8 rounded-3xl border relative group"
                                style={{ borderColor: 'var(--border-color)' }}
                            >
                                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <MessageCircle size={48} />
                                </div>
                                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--text-primary)' }}>
                                    "{fb.message}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
                                        {fb.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                            {fb.name}
                                            <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                            <span className="text-[10px] uppercase tracking-wider font-normal opacity-50">{fb.date}</span>
                                        </h4>
                                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{fb.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {feedbacks.length === 0 && (
                        <div className="text-center py-20 opacity-30">
                            <MessageCircle className="mx-auto mb-4" size={48} />
                            <p>No feedbacks yet. Be the first!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
