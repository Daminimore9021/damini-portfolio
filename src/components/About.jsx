import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiCplusplus, SiOpenai, SiMake, SiN8N } from 'react-icons/si';
import { BrainCircuit, Workflow, Zap, Settings, Shield, Users, MessageSquare, Cog } from 'lucide-react';
import daminiImg from '../assets/images/damini.jpeg';

const skillGroups = [
    {
        title: "Programming Languages",
        icon: <Cog className="w-5 h-5" />,
        skills: [
            { name: "Python", icon: <FaPython className="text-blue-400" /> },
            { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        ]
    },
    {
        title: "AI & Automation",
        icon: <BrainCircuit className="w-5 h-5" />,
        skills: [
            { name: "AI Workflow Automation", icon: <Workflow className="text-emerald-400" /> },
            { name: "AI Agents", icon: <Settings className="text-cyan-400" /> },
            { name: "LLMs", icon: <BrainCircuit className="text-gray-400" /> },
            { name: "RAG", icon: <SiOpenai className="text-purple-400" /> },
        ]
    },
    {
        title: "No-Code/Low-Code",
        icon: <Settings className="w-5 h-5" />,
        skills: [
            {
                name: "Pucho.ai",
                icon: <img src="https://app.pucho.ai/favicon.ico" alt="Pucho.ai" className="w-6 h-6 object-contain" />
            },
            {
                name: "Make.com",
                icon: <SiMake className="text-purple-500" />
            },
            {
                name: "n8n",
                icon: <SiN8N className="text-red-500" />
            },
            {
                name: "Activepieces",
                icon: <img
                    src="https://www.google.com/s2/favicons?domain=activepieces.com&sz=128"
                    alt="Activepieces"
                    className="w-6 h-6 object-contain rounded-sm"
                    onError={(e) => { e.target.src = 'https://raw.githubusercontent.com/activepieces/activepieces/main/packages/ui/common/src/assets/img/logo.svg'; }}
                />
            },
            {
                name: "Lindy.ai",
                icon: <img
                    src="https://www.google.com/s2/favicons?domain=lindy.ai&sz=128"
                    alt="Lindy.ai"
                    className="w-6 h-6 object-contain rounded-sm"
                    onError={(e) => { e.target.src = 'https://lindy.ai/wp-content/uploads/2023/04/lindy-logo-1.png'; }}
                />
            },
        ]
    },
    {
        title: "Tools & Professional",
        icon: <Users className="w-5 h-5" />,
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "Leadership", icon: <Users className="text-emerald-500" /> },
            { name: "Communication", icon: <MessageSquare className="text-blue-400" /> },
            { name: "Problem Solving", icon: <Shield className="text-orange-400" /> },
        ]
    }
];

const About = () => {
    return (
        <section id="about-me" className="py-24 px-6 max-w-7xl mx-auto">
            {/* Extended About Section with Photo */}
            <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <img
                        src={daminiImg}
                        alt="Damini More"
                        className="relative rounded-[2rem] w-full max-w-md mx-auto aspect-[4/5] object-cover border border-white/10 transition-all duration-700 shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                        Who <span className="text-gradient">I Am</span>
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        I'm <span className="text-white font-semibold">Damini More</span>, a <span className="text-cyan-400 font-medium">2025 BBA-CA graduate</span> from Modern College of Arts, Science and Commerce, Pune. I'm passionate about Artificial Intelligence, automation, and building smart systems that solve real business problems.
                    </p>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Currently, I'm working in <span className="text-purple-400 font-medium">AI Workflow Automation</span> at NITI.AI (Ahmedabad), where I build intelligent no-code/low-code workflows on the Pucho.ai platform. I integrate AI agents, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) to create autonomous systems for CRM, email, and productivity automation.
                    </p>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        With hands-on experience in Python, SQL, and tools like Make.com, n8n, and Lindy.ai, I love turning complex processes into simple, efficient automations. I believe in <span className="text-white font-semibold">“Efficient Simplicity”</span> — using the best tools to deliver maximum impact with minimum effort.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gradient">400+</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">Workflows Built</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 mx-4" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gradient">BBA-CA</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">Class of 2025</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                id="skills"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Technical <span className="text-gradient">Skills</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    My digital arsenal. A comprehensive overview of the technologies I use to build scalable, high-performance solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroups.map((group, groupIndex) => (
                    <motion.div
                        key={groupIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: groupIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 rounded-lg bg-white/5 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
                        </div>

                        <ul className="space-y-6">
                            {group.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center gap-4 group/item">
                                    <div className="text-2xl opacity-80 group-hover/item:opacity-100 transition-opacity">
                                        {skill.icon}
                                    </div>
                                    <span className="font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
