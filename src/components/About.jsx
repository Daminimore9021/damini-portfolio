import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiCplusplus, SiOpenai, SiMake, SiN8N } from 'react-icons/si';
import { BrainCircuit, Workflow, Zap, Settings, Shield, Users, MessageSquare, Cog } from 'lucide-react';

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
                icon: <img src="https://asset.dashboardicons.com/activepieces/original.svg" alt="Activepieces" className="w-6 h-6 object-contain" />
            },
            {
                name: "Lindy.ai",
                icon: <Zap className="text-yellow-400" />
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
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
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
