import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Database, Cpu, Sparkles, ChevronRight, Brain, Zap } from 'lucide-react';

const workflowStages = [
    {
        step: "01",
        icon: <MessageSquare size={28} />,
        title: "Input Data",
        desc: "Unstructured data from Email, Chat, PDFs, and APIs is ingested and normalized.",
        color: "#3b82f6",
        glow: "rgba(59, 130, 246, 0.5)",
        tags: ["Email", "Docs", "APIs", "Chat"]
    },
    {
        step: "02",
        icon: <Database size={28} />,
        title: "RAG Layer",
        desc: "Vector search retrieves pinpoint relevant context from the knowledge base.",
        color: "#a855f7",
        glow: "rgba(168, 85, 247, 0.5)",
        tags: ["Vector DB", "Embeddings", "Context"]
    },
    {
        step: "03",
        icon: <Brain size={28} />,
        title: "LLM Reasoning",
        desc: "AI agent analyzes context, reasons through the problem and determines action.",
        color: "#00f0ff",
        glow: "rgba(0, 240, 255, 0.5)",
        tags: ["GPT-4", "Claude", "Gemini", "Agents"]
    },
    {
        step: "04",
        icon: <Sparkles size={28} />,
        title: "Autonomous Action",
        desc: "Workflow executes tasks, sends responses, or triggers downstream integrations.",
        color: "#10b981",
        glow: "rgba(16, 185, 129, 0.5)",
        tags: ["CRM", "n8n", "Make.com", "Pucho.ai"]
    },
];

const techPills = ["Next.js", "TypeScript", "Framer Motion", "Pucho.ai", "n8n", "Make.com", "LLMs", "RAG"];

const Services = () => {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#00f0ff' }}>✦ How I Work</p>
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-4" style={{ color: 'var(--text-primary)' }}>
                    AI Workflow <span className="text-gradient">Mastery</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    From raw data to autonomous action — the 4-step pipeline I use to build intelligent AI systems.
                </p>
            </motion.div>

            {/* Flowchart */}
            <div className="relative">
                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-[68px] left-[12.5%] right-[12.5%] h-[2px] z-0"
                        style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7, #00f0ff, #10b981)' }}>
                        <div className="absolute inset-0 animate-pulse" style={{ filter: 'blur(2px)' }} />
                    </div>

                    {workflowStages.map((stage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            onClick={() => setActiveStep(activeStep === index ? null : index)}
                            className="glass-card p-7 rounded-2xl flex flex-col items-center text-center group cursor-pointer transition-all relative z-10"
                            style={{
                                borderColor: activeStep === index ? `${stage.color}60` : 'var(--border-color)',
                                boxShadow: activeStep === index ? `0 0 30px ${stage.glow}` : '',
                            }}
                        >
                            {/* Step number */}
                            <div
                                className="text-[10px] font-mono font-bold tracking-[0.2em] mb-4 px-2 py-1 rounded-full border"
                                style={{
                                    color: stage.color,
                                    borderColor: `${stage.color}30`,
                                    background: `${stage.color}10`,
                                }}
                            >
                                STEP {stage.step}
                            </div>

                            {/* Icon */}
                            <motion.div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all"
                                style={{
                                    color: stage.color,
                                    border: `1px solid ${stage.color}40`,
                                    background: `${stage.color}12`,
                                    boxShadow: `0 0 20px ${stage.glow}`,
                                }}
                                whileHover={{ scale: 1.12, rotate: 6 }}
                            >
                                {stage.icon}
                            </motion.div>

                            <h3 className="text-xl font-bold font-display mb-3" style={{ color: 'var(--text-primary)' }}>
                                {stage.title}
                            </h3>

                            <div className="w-full h-px mb-3" style={{ background: `linear-gradient(to right, transparent, ${stage.color}40, transparent)` }} />

                            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                {stage.desc}
                            </p>

                            {/* Tags */}
                            <AnimatePresence>
                                {(activeStep === index) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-wrap gap-1.5 justify-center mt-1"
                                    >
                                        {stage.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] px-2.5 py-1 rounded-full border font-medium"
                                                style={{
                                                    color: stage.color,
                                                    borderColor: `${stage.color}35`,
                                                    background: `${stage.color}10`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Arrow indicator for desktop */}
                            {index < workflowStages.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-[68px] z-20">
                                    <ChevronRight size={18} style={{ color: stage.color, filter: `drop-shadow(0 0 4px ${stage.color})` }} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech pills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mt-14"
            >
                <span className="text-xs font-semibold tracking-widest uppercase mr-2 self-center" style={{ color: 'var(--text-secondary)' }}>
                    Powered by:
                </span>
                {techPills.map((tech, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-105 cursor-default"
                        style={{
                            borderColor: 'rgba(0, 240, 255, 0.25)',
                            color: '#00f0ff',
                            background: 'rgba(0, 240, 255, 0.06)',
                        }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
