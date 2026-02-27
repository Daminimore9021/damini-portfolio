import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Sparkles } from 'lucide-react';

const experiences = [
    {
        title: "AI Workflow Automation",
        company: "NITI AI Pvt Ltd",
        location: "Ahmedabad (Remote/In-office)",
        duration: "08/2025 – Present",
        tag: "Current",
        color: "#00f0ff",
        bullets: [
            "Building 400+ intelligent no-code/low-code workflows on Pucho.ai platform.",
            "Integrating AI agents for reasoning and autonomous task execution using LLMs and RAG.",
            "Automating real-world CRM, email, and productivity business processes.",
            "Exploring agentic AI trends and enterprise automation for scalability.",
        ]
    },
    {
        title: "Data Procedures Specialist",
        company: "EnFuse Solution Pvt Ltd",
        location: "Pune",
        duration: "08/2024 – 10/2024",
        tag: "Internship",
        color: "#a855f7",
        bullets: [
            "Accurately entered and processed data into a custom-built database application.",
            "Ensured data consistency, accuracy, integrity, and compliance.",
            "Generated actionable reports for NABARD stakeholders.",
            "Resolved data-related issues and troubleshooting end-to-end.",
        ]
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#00f0ff' }}>✦ My Journey</p>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Professional <span className="text-gradient">Journey</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Transforming ideas into digital reality through code and collaboration.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Animated neon timeline line */}
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] origin-top"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #00f0ff 20%, #a855f7 80%, transparent)',
                        boxShadow: '0 0 8px rgba(0, 240, 255, 0.4)',
                    }}
                />

                <div className="space-y-14">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative pl-12 md:pl-24 group"
                        >
                            {/* Pulsing neon dot */}
                            <div className="absolute left-[9px] md:left-[25px] top-10">
                                <div
                                    className="w-4 h-4 rounded-full border-2 border-white z-10 relative"
                                    style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                                />
                                <div
                                    className="absolute inset-0 rounded-full animate-ping"
                                    style={{ backgroundColor: exp.color, opacity: 0.3 }}
                                />
                                <div
                                    className="absolute -inset-2 rounded-full border animate-pulse"
                                    style={{ borderColor: `${exp.color}40` }}
                                />
                            </div>

                            <div
                                className="glass-card p-8 md:p-10 rounded-2xl shimmer-card transition-all group-hover:translate-y-[-2px]"
                                style={{ borderLeft: `3px solid ${exp.color}60` }}
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-7">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                                {exp.title}
                                            </h3>
                                            <span
                                                className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                                                style={{
                                                    color: exp.color,
                                                    borderColor: `${exp.color}40`,
                                                    background: `${exp.color}12`,
                                                    boxShadow: `0 0 8px ${exp.color}20`
                                                }}
                                            >
                                                {exp.tag}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                            <Building2 size={14} style={{ color: exp.color }} />
                                            <span className="text-sm font-semibold">{exp.company}</span>
                                            <span className="opacity-40">·</span>
                                            <span className="text-xs opacity-60">{exp.location}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium shrink-0 border"
                                        style={{
                                            color: 'var(--text-secondary)',
                                            borderColor: 'var(--border-color)',
                                            background: 'var(--glass-bg)',
                                        }}
                                    >
                                        <Calendar size={13} />
                                        {exp.duration}
                                    </div>
                                </div>

                                {/* Bullet points */}
                                <ul className="space-y-3">
                                    {exp.bullets.map((bullet, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15 + i * 0.07 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 text-sm leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            <Sparkles size={12} className="mt-1.5 flex-shrink-0" style={{ color: exp.color }} />
                                            {bullet}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
