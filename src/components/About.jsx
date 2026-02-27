import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiCplusplus, SiOpenai, SiMake, SiN8N } from 'react-icons/si';
import { BrainCircuit, Workflow, Zap, Settings, Shield, Users, MessageSquare, Cog, Code2 } from 'lucide-react';
import daminiImg from '../assets/images/damini.jpeg';

const skillGroups = [
    {
        title: "Programming",
        icon: <Code2 className="w-6 h-6" />,
        color: "#3b82f6",
        glow: "rgba(59, 130, 246, 0.4)",
        skills: [
            { name: "Python", icon: <FaPython className="text-blue-400" />, level: 85 },
            { name: "SQL", icon: <SiMysql className="text-blue-500" />, level: 80 },
            { name: "C/C++", icon: <SiCplusplus className="text-blue-600" />, level: 70 },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, level: 85 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 75 },
        ]
    },
    {
        title: "AI & Automation",
        icon: <BrainCircuit className="w-6 h-6" />,
        color: "#00f0ff",
        glow: "rgba(0, 240, 255, 0.4)",
        skills: [
            { name: "AI Workflows", icon: <Workflow className="text-emerald-400" />, level: 95 },
            { name: "AI Agents", icon: <Settings className="text-cyan-400" />, level: 90 },
            { name: "LLMs", icon: <BrainCircuit className="text-purple-400" />, level: 88 },
            { name: "RAG Systems", icon: <SiOpenai className="text-pink-400" />, level: 85 },
        ]
    },
    {
        title: "No-Code / Low-Code",
        icon: <Zap className="w-6 h-6" />,
        color: "#a855f7",
        glow: "rgba(168, 85, 247, 0.4)",
        skills: [
            {
                name: "Pucho.ai",
                icon: <img src="https://app.pucho.ai/favicon.ico" alt="Pucho.ai" className="w-5 h-5 object-contain" />,
                level: 97
            },
            { name: "Make.com", icon: <SiMake className="text-purple-500" />, level: 85 },
            { name: "n8n", icon: <SiN8N className="text-red-400" />, level: 80 },
            {
                name: "Lindy.ai",
                icon: <img src="https://www.google.com/s2/favicons?domain=lindy.ai&sz=128" alt="Lindy.ai" className="w-5 h-5 object-contain rounded-sm" />,
                level: 75
            },
            {
                name: "Activepieces",
                icon: <img src="https://www.google.com/s2/favicons?domain=activepieces.com&sz=128" alt="Activepieces" className="w-5 h-5 object-contain rounded-sm" />,
                level: 75
            },
        ]
    },
    {
        title: "Tools & Soft Skills",
        icon: <Users className="w-6 h-6" />,
        color: "#10b981",
        glow: "rgba(16, 185, 129, 0.4)",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 78 },
            { name: "Leadership", icon: <Users className="text-emerald-400" />, level: 85 },
            { name: "Communication", icon: <MessageSquare className="text-blue-400" />, level: 90 },
            { name: "Problem Solving", icon: <Shield className="text-orange-400" />, level: 92 },
        ]
    }
];

/* Skill Card Component — hover glow, no 3D flip */
const FlipSkillCard = ({ group, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.12, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="glass-card rounded-2xl p-7 flex flex-col gap-5 group transition-all duration-300 cursor-default"
        style={{ borderColor: `${group.color}20`, minHeight: '280px' }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${group.color}55`;
            e.currentTarget.style.boxShadow = `0 0 32px ${group.glow}, 0 12px 40px rgba(0,0,0,0.25)`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = `${group.color}20`;
            e.currentTarget.style.boxShadow = '';
        }}
    >
        {/* Icon + Title */}
        <div className="flex items-center gap-4">
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                    color: group.color,
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}35`,
                    boxShadow: `0 0 16px ${group.glow}`,
                }}
            >
                {group.icon}
            </div>
            <h3 className="text-lg font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                {group.title}
            </h3>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${group.color}40, transparent)` }} />

        {/* Skill list */}
        <ul className="space-y-3 flex-1">
            {group.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 group/item">
                    <span className="text-xl flex-shrink-0 transition-all duration-200 group-hover/item:scale-110">
                        {skill.icon}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                    </span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const About = () => {
    return (
        <section id="about-me" className="py-24 px-6 max-w-7xl mx-auto">

            {/* ─── Who I Am ─── */}
            <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Glow ring behind photo */}
                    <div className="absolute -inset-6 rounded-[3rem] opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-2xl"
                        style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.3), rgba(168,85,247,0.3))' }} />
                    <img
                        src={daminiImg}
                        alt="Damini More"
                        className="relative rounded-[2rem] w-full max-w-md mx-auto aspect-[4/5] object-cover border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        style={{ borderColor: 'rgba(0, 240, 255, 0.2)' }}
                    />
                    {/* Floating badge */}
                    <div
                        className="absolute bottom-6 right-0 px-4 py-3 rounded-2xl border backdrop-blur-md"
                        style={{
                            background: 'rgba(15,15,26,0.8)',
                            borderColor: 'rgba(0,240,255,0.25)',
                            boxShadow: '0 0 20px rgba(0,240,255,0.12)'
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-semibold text-emerald-400">Available for projects</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#00f0ff' }}>
                            ✦ About Me
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                            Who <span className="text-gradient">I Am</span>
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        I'm <span className="text-white font-semibold">Damini More</span>, a{' '}
                        <span className="text-cyan-400 font-medium">2025 BBA-CA graduate</span> from Modern College of Arts, Science and Commerce, Pune. Passionate about AI, automation, and building smart systems that solve real problems.
                    </p>

                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Currently at <span className="text-purple-400 font-medium">NITI.AI (Ahmedabad)</span>, I build 400+ intelligent no-code/low-code workflows on the Pucho.ai platform — integrating AI agents, LLMs, and RAG to create autonomous CRM, email, and productivity systems.
                    </p>

                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        With expertise in Python, SQL, Make.com, n8n, and Lindy.ai, I live by the philosophy of{' '}
                        <span className="text-white font-semibold italic">"Efficient Simplicity"</span>{' '}
                        — maximum impact, minimum complexity.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 pt-4">
                        {[
                            { value: '400+', label: 'Workflows Built', color: '#00f0ff' },
                            { value: 'BBA-CA', label: 'Class of 2025', color: '#a855f7' },
                            { value: '2+', label: 'Years in AI', color: '#10b981' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-start">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="text-2xl md:text-3xl font-bold font-display"
                                    style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-[10px] uppercase tracking-widest opacity-50"
                                    style={{ color: 'var(--text-secondary)' }}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ─── Skills ─── */}
            <motion.div
                id="skills"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#a855f7' }}>✦ My Arsenal</p>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Technical <span className="text-gradient">Skills</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Hover each card to explore proficiency levels. My stack covers the full AI automation spectrum.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroups.map((group, i) => (
                    <FlipSkillCard key={i} group={group} index={i} />
                ))}
            </div>
        </section>
    );
};

export default About;
