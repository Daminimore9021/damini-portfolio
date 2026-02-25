import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Cpu, Sparkles } from 'lucide-react';

const workflowStages = [
    {
        icon: <MessageSquare size={32} />,
        title: "Input Data",
        desc: "Unstructured data from various sources (Email, Chat, Docs)",
        color: "text-blue-400"
    },
    {
        icon: <Database size={32} />,
        title: "RAG Layer",
        desc: "Vector search retrieves relevant context from knowledge base",
        color: "text-purple-400"
    },
    {
        icon: <Cpu size={32} />,
        title: "LLM Reasoning",
        desc: "Agent analyzes context and determines the best action",
        color: "text-cyan-400"
    },
    {
        icon: <Sparkles size={32} />,
        title: "Autonomous Action",
        desc: "Workflow executes tasks or provides intelligent responses",
        color: "text-emerald-400"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-4" style={{ color: 'var(--text-primary)' }}>
                    AI Workflow <span className="text-gradient">Mastery</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    How I transform complex business requirements into autonomous AI systems.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflowStages.map((stage, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl border flex flex-col items-center text-center group transition-all"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <div className={`p-4 rounded-full ${stage.color} mb-6 group-hover:scale-110 transition-transform`} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
                            {stage.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 font-display" style={{ color: 'var(--text-primary)' }}>{stage.title}</h3>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {stage.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section >
    );
};

export default Services;
