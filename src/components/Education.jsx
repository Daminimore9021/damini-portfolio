import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "Bachelor of Business Administration & Computer Application (BBA-CA)",
        institution: "Modern College of Arts, Science and Commerce",
        location: "Pune, Maharashtra",
        year: "2025",
        percentage: "68.46%",
        percentNum: 68.46,
        emoji: "🎓",
        accent: "#00f0ff",
        glow: "rgba(0, 240, 255, 0.3)",
        tagline: "AI & Technology",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Eklavya Vidyalay & J. G. Natawadkarn Jr. College",
        location: "Nandurbar, Maharashtra",
        year: "2022",
        percentage: "82.33%",
        percentNum: 82.33,
        emoji: "📚",
        accent: "#a855f7",
        glow: "rgba(168, 85, 247, 0.3)",
        tagline: "Science Stream",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Shivdarshan Vidyalaya Bhaler",
        location: "Tal. & Dist. Nandurbar, Maharashtra",
        year: "2020",
        percentage: "83.40%",
        percentNum: 83.40,
        emoji: "🏫",
        accent: "#3b82f6",
        glow: "rgba(59, 130, 246, 0.3)",
        tagline: "Foundation",
    },
];

const EduCard = ({ edu, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-16 md:pl-24 group"
        >
            {/* Pulsing dot */}
            <div className="absolute left-[13px] md:left-[24px] top-9">
                <div
                    className="w-5 h-5 rounded-full border-2 border-white z-10 relative flex items-center justify-center"
                    style={{ backgroundColor: edu.accent, boxShadow: `0 0 14px ${edu.glow}` }}
                >
                    <span className="text-[8px]">{edu.emoji}</span>
                </div>
                <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: edu.accent, opacity: 0.25 }} />
            </div>

            <div
                className="glass-card rounded-2xl p-7 md:p-9 holo-card transition-all group-hover:scale-[1.01] duration-300"
                style={{ borderColor: `${edu.accent}30`, borderLeft: `3px solid ${edu.accent}60` }}
            >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Left content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span
                                className="text-[10px] px-2 py-0.5 rounded-full border font-semibold tracking-widest uppercase"
                                style={{ color: edu.accent, borderColor: `${edu.accent}35`, background: `${edu.accent}10` }}
                            >
                                {edu.tagline}
                            </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-display leading-snug mb-3 mt-2" style={{ color: 'var(--text-primary)' }}>
                            {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mb-1">
                            <GraduationCap size={14} style={{ color: edu.accent }} />
                            <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={12} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
                            <p className="text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>{edu.location}</p>
                        </div>
                    </div>

                    {/* Right: Year + Score */}
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-3 shrink-0">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                            <Calendar size={11} />
                            {edu.year}
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                            style={{
                                background: `${edu.accent}15`,
                                color: edu.accent,
                                border: `1px solid ${edu.accent}35`,
                                boxShadow: `0 0 12px ${edu.glow}`,
                            }}
                        >
                            <Award size={14} />
                            {edu.percentage}
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-5">
                    <div className="flex justify-between text-[10px] mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="opacity-60">Score</span>
                        <span style={{ color: edu.accent }}>{edu.percentage}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${edu.percentNum}%` } : { width: 0 }}
                            transition={{ delay: index * 0.15 + 0.3, duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${edu.accent}, ${edu.accent}70)` }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#3b82f6' }}>✦ Academic Background</p>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    My <span className="text-gradient">Education</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Academic foundation that shaped my technical and analytical thinking.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute left-5 md:left-7 top-0 bottom-0 w-[2px] origin-top"
                    style={{
                        background: 'linear-gradient(to bottom, #00f0ff, #a855f7, #3b82f6)',
                        boxShadow: '0 0 8px rgba(0, 240, 255, 0.3)',
                    }}
                />

                <div className="space-y-10">
                    {educationData.map((edu, index) => (
                        <EduCard key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
