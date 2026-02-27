import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, Heart, Star, Quote } from 'lucide-react';

const StarRating = ({ count = 5 }) => (
    <div className="flex gap-1 mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
        ))}
    </div>
);

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({ name: '', role: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const seedFeedbacks = [
        {
            id: 'seed-1',
            name: "Rahul Sharma",
            role: "Full Stack Developer",
            message: "Damini's workflow automation skills are top-notch. She helped me automate my lead generation process beautifully — 10x faster results!",
            date: new Date().toLocaleDateString()
        },
        {
            id: 'seed-2',
            name: "Priya Varma",
            role: "Product Manager",
            message: "Extremely professional and tech-savvy. Her Student Management System project is quite impressive. Highly recommend her for any AI automation work.",
            date: new Date().toLocaleDateString()
        }
    ];

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('damini_feedbacks') || '[]');
        setFeedbacks(saved.length === 0 ? seedFeedbacks : saved);
        if (saved.length === 0) localStorage.setItem('damini_feedbacks', JSON.stringify(seedFeedbacks));
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

    // Gradient colors for avatar
    const avatarGradients = [
        'linear-gradient(135deg, #00f0ff, #6366f1)',
        'linear-gradient(135deg, #a855f7, #ec4899)',
        'linear-gradient(135deg, #10b981, #06b6d4)',
        'linear-gradient(135deg, #f59e0b, #ef4444)',
    ];

    return (
        <section id="feedback" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#a855f7' }}>✦ Kind Words</p>
                    <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                        Wall of <span className="text-gradient">Love</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                        Honest words from people I've had the pleasure of working with.
                    </p>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 rounded-3xl self-start sticky top-28"
                    style={{ borderColor: 'rgba(168, 85, 247, 0.2)' }}
                >
                    <h3 className="text-2xl font-bold mb-7 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                        <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center border border-red-500/20">
                            <Heart className="text-red-500" fill="currentColor" size={18} />
                        </div>
                        Share Your Experience
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {[
                            { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your Name', required: true },
                            { key: 'role', label: 'Role / Headline (Optional)', type: 'text', placeholder: 'e.g. Recruiter, Client, Developer', required: false },
                        ].map(field => (
                            <div key={field.key} className="space-y-1.5">
                                <label className="text-xs font-semibold ml-1 tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    required={field.required}
                                    value={formData[field.key]}
                                    onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                    placeholder={field.placeholder}
                                    className="w-full bg-white/5 border rounded-2xl px-5 py-3.5 neon-input transition-all"
                                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                                />
                            </div>
                        ))}

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold ml-1 tracking-wide" style={{ color: 'var(--text-secondary)' }}>Your Message</label>
                            <textarea
                                required
                                rows="4"
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Share your thoughts..."
                                className="w-full bg-white/5 border rounded-2xl px-5 py-3.5 neon-input transition-all resize-none"
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                            style={{
                                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                                boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)',
                                color: 'white',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(168, 85, 247, 0.5)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(168, 85, 247, 0.3)'}
                        >
                            {isSubmitting ? 'Posting...' : (<><Send size={16} /> Share Feedback</>)}
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

                {/* Testimonial Cards */}
                <div className="space-y-5 max-h-[720px] overflow-y-auto pr-2 scrollbar-hide">
                    <AnimatePresence mode="popLayout">
                        {feedbacks.map((fb, idx) => (
                            <motion.div
                                key={fb.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass-card p-7 rounded-3xl relative group overflow-hidden"
                                style={{ borderColor: 'var(--border-color)' }}
                                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                            >
                                {/* Decorative quote */}
                                <div
                                    className="absolute top-4 right-5 text-6xl font-serif leading-none opacity-10 group-hover:opacity-20 transition-opacity select-none"
                                    style={{ color: '#a855f7' }}
                                >
                                    "
                                </div>

                                {/* Holographic shimmer overlay */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{ background: 'linear-gradient(125deg, transparent 30%, rgba(0,240,255,0.03) 50%, transparent 70%)' }} />

                                {/* Stars */}
                                <StarRating />

                                {/* Quote */}
                                <p
                                    className="text-base leading-relaxed mb-6 italic relative z-10"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    "{fb.message}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg flex-shrink-0"
                                        style={{
                                            background: avatarGradients[idx % avatarGradients.length],
                                            boxShadow: `0 0 15px rgba(168, 85, 247, 0.3)`
                                        }}
                                    >
                                        {fb.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                            {fb.name}
                                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#00f0ff' }} />
                                            <span className="text-[10px] uppercase tracking-wider font-normal opacity-40">{fb.date}</span>
                                        </h4>
                                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{fb.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {feedbacks.length === 0 && (
                        <div className="text-center py-20 opacity-30">
                            <MessageCircle className="mx-auto mb-4" size={48} />
                            <p style={{ color: 'var(--text-secondary)' }}>No feedbacks yet. Be the first!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
