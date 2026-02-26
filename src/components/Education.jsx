import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
    {
        degree: "Bachelor of Business Administration & Computer Application (BBA-CA)",
        institution: "Modern College of Arts, Science and Commerce",
        location: "Pune, Maharashtra",
        year: "2025",
        percentage: "68.46%",
        icon: "🎓",
        color: "from-cyan-500/20 to-purple-500/20",
        border: "border-cyan-500/30",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Eklavya Vidyalay & J. G. Natawadkarn Jr. College",
        location: "Nandurbar, Maharashtra",
        year: "2022",
        percentage: "82.33%",
        icon: "📚",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Shivdarshan Vidyalaya Bhaler",
        location: "Tal. & Dist. Nandurbar, Maharashtra",
        year: "2020",
        percentage: "83.40%",
        icon: "🏫",
        color: "from-indigo-500/20 to-cyan-500/20",
        border: "border-indigo-500/30",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    My <span className="text-gradient">Education</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    Academic foundation that shaped my technical and analytical skills.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical timeline line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                    style={{ background: 'linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(139,92,246,0.2), transparent)' }}
                />

                <div className="space-y-10">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-16 md:pl-24"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[18px] md:left-[26px] top-8 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#0f0f1a] shadow-[0_0_12px_rgba(6,182,212,0.5)]" />

                            <div className={`glass-card rounded-2xl p-8 border ${edu.border} bg-gradient-to-br ${edu.color} transition-all hover:scale-[1.01] duration-300`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">{edu.icon}</span>
                                            <h3 className="text-lg md:text-xl font-bold font-display leading-snug" style={{ color: 'var(--text-primary)' }}>
                                                {edu.degree}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <GraduationCap size={15} className="text-cyan-400 flex-shrink-0" />
                                            <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <p className="text-xs ml-5" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                                            {edu.location}
                                        </p>
                                    </div>

                                    <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0">
                                        {/* Year badge */}
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
                                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                                            <Calendar size={12} />
                                            {edu.year}
                                        </div>
                                        {/* Percentage badge */}
                                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold"
                                            style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.3)' }}>
                                            <Award size={14} />
                                            {edu.percentage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
