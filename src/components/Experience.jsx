import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';

const experiences = [
    {
        title: "AI Workflow Automation Intern",
        company: "NITI AI Pvt Ltd (Ahmedabad)",
        duration: "08/2025 - Present",
        location: "Remote/In-office",
        bullets: [
            "Building intelligent no-code/low-code workflows on Pucho.ai platform with 400+ integrations.",
            "Integrating AI agents for reasoning and autonomous task execution using LLMs and RAG.",
            "Worked on real-world projects automating business processes and developing custom AI assistants.",
            "Exploring trends in agentic AI and enterprise automation to improve scalability and efficiency."
        ]
    },
    {
        title: "Data Procedures",
        company: "NITI AI Pvt Ltd (Ahmedabad)",
        duration: "08/2024 - 10/2024",
        location: "Remote",
        bullets: [
            "Assisted in data organization and procedural workflows for AI model training preparation.",
            "Collaborated on small-scale automation scripts to streamline data validation.",
            "Gained foundational experience in enterprise-level AI ecosystems."
        ]
    }
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
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Professional <span className="text-gradient">Journey</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Transforming ideas into digital reality through code and collaboration.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent" style={{ backgroundColor: 'var(--border-color)', opacity: 0.3 }} />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-20 group"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-4px] md:left-[28px] top-8 w-2 h-2 rounded-full border-4 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                style={{ backgroundColor: 'var(--text-primary)', borderColor: 'var(--bg-color)' }}
                            />

                            <div className="glass-card p-10 rounded-2xl border transition-all" style={{ borderColor: 'var(--border-color)' }}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                            <Building2 size={16} />
                                            <span className="text-sm font-semibold">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="px-4 py-2 bg-black/5 border rounded-full flex items-center gap-2 text-xs font-medium"
                                            style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}
                                        >
                                            <Calendar size={14} />
                                            {exp.duration}
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-1.5 flex-shrink-0" />
                                            {bullet}
                                        </li>
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
