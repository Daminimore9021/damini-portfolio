import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import daminiImg from '../assets/images/damini.jpeg';

/* ─── AI Particle Canvas ─────────────────────── */
const AIParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const count = 48;
        const nodes = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 2 + 1,
            pulse: Math.random() * Math.PI * 2,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += 0.03;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            });

            // Connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * 0.25;
                        const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                        grad.addColorStop(0, `rgba(0,240,255,${alpha})`);
                        grad.addColorStop(1, `rgba(168,85,247,${alpha})`);
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Nodes
            nodes.forEach(n => {
                const glow = Math.sin(n.pulse) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,240,255,${0.5 * glow})`;
                ctx.shadowBlur = 8 * glow;
                ctx.shadowColor = '#00f0ff';
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
};

/* ─── Hero Section ───────────────────────────── */
const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-300">

            {/* Background gradient orbs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-cyan-500/8 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[36rem] h-[36rem] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            {/* AI Particle Network */}
            <AIParticles />

            <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">

                {/* Avatar with neon rotating ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="mb-8 inline-block"
                >
                    <div className="relative inline-block">
                        {/* Outer spinning gradient ring */}
                        <div
                            className="absolute inset-0 rounded-full animate-spin-slow"
                            style={{
                                background: 'conic-gradient(from 0deg, #00f0ff, #a855f7, #3b82f6, #00f0ff)',
                                padding: '3px',
                                borderRadius: '50%',
                                filter: 'blur(1px)',
                            }}
                        />
                        {/* Pulse rings */}
                        <div className="absolute inset-[-8px] rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute inset-[-16px] rounded-full border border-purple-500/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                        {/* Photo */}
                        <div className="relative rounded-full p-[3px]"
                            style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7, #3b82f6)' }}>
                            <img
                                src={daminiImg}
                                alt="Damini More"
                                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover block"
                                style={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.2), inset 0 0 30px rgba(168, 85, 247, 0.1)' }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="text-5xl md:text-7xl font-bold font-display mb-3"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Hi, I'm{' '}
                    <span className="gradient-flow">Damini More</span>
                </motion.h1>

                {/* Subtitle badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
                    style={{
                        borderColor: 'rgba(0, 240, 255, 0.3)',
                        background: 'rgba(0, 240, 255, 0.07)',
                        color: '#00f0ff',
                        boxShadow: '0 0 18px rgba(0, 240, 255, 0.15)'
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    AI Workflow Automation Specialist
                </motion.div>

                {/* Typing animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl font-light mb-3 h-8"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <TypeAnimation
                        sequence={[
                            'LLM & RAG Systems Integrator',
                            1200,
                            'AI Workflow Automation @ NITI.AI',
                            1200,
                            'Building 400+ Intelligent Workflows',
                            1200,
                            'Crafting Autonomous AI Systems',
                            1200,
                        ]}
                        wrapper="span"
                        speed={52}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-sm md:text-base italic mb-10 tracking-wide"
                    style={{ color: 'rgba(0, 240, 255, 0.7)' }}
                >
                    ✦ Architecting Intelligent AI Workflows for Modern Efficiency ✦
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#portfolio"
                        className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
                            boxShadow: '0 0 25px rgba(6, 182, 212, 0.3)',
                        }}
                    >
                        <span className="relative z-10">View Projects →</span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href="#contact"
                        className="group px-8 py-4 rounded-full font-bold transition-all border backdrop-blur-sm"
                        style={{
                            borderColor: 'rgba(168, 85, 247, 0.4)',
                            color: 'var(--text-primary)',
                            background: 'rgba(168, 85, 247, 0.07)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 25px rgba(168, 85, 247, 0.3)'; e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)'; }}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
                <ChevronDown size={18} style={{ color: 'rgba(0, 240, 255, 0.5)' }} />
                <ChevronDown size={14} style={{ color: 'rgba(168, 85, 247, 0.4)', marginTop: '-8px' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
