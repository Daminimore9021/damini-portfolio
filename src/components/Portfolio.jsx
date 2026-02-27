import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Student Management System",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        desc: "A high-performance student management system designed for seamless data handling and administrative efficiency in academic institutions.",
        tags: [
            { label: "React", cls: "badge-react" },
            { label: "Vite", cls: "badge-vite" },
            { label: "Node.js", cls: "badge-node" },
        ],
        github: "https://github.com/Daminimore9021",
        live: null,
        accent: "#61dbfb",
    },
    {
        id: 2,
        title: "Habit Tracker",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
        desc: "Full-featured productivity app with daily planning, routines, AI-powered assistant, and seamless user experience for building better habits.",
        tags: [
            { label: "Next.js", cls: "badge-next" },
            { label: "TypeScript", cls: "badge-ts" },
            { label: "Prisma", cls: "badge-prisma" },
            { label: "Tailwind", cls: "badge-tailwind" },
        ],
        github: "https://github.com/Daminimore9021/Habit-Tracker.git",
        live: null,
        accent: "#a855f7",
    },
    {
        id: 3,
        title: "Car Pooling Platform",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
        desc: "Comprehensive car rental & pooling management system designed to reduce costs and environmental impact with concurrent ride request handling.",
        tags: [
            { label: "PHP", cls: "badge-php" },
            { label: "MySQL", cls: "badge-mysql" },
            { label: "JavaScript", cls: "badge-js" },
            { label: "CSS", cls: "badge-css" },
        ],
        github: "https://github.com/Daminimore9021/Car-Pooling.git",
        live: null,
        accent: "#10b981",
    },
    {
        id: 4,
        title: "Personal Expense Tracker",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
        desc: "Intuitive daily expense management app with budget tracking, category analytics, and 100% data persistence via optimized LocalStorage.",
        tags: [
            { label: "HTML", cls: "badge-html" },
            { label: "CSS", cls: "badge-css" },
            { label: "JavaScript", cls: "badge-js" },
        ],
        github: "https://github.com/Daminimore9021/personal-expense-tracker.git",
        live: null,
        accent: "#f59e0b",
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, scale: 1.01 }}
        className="glass-card rounded-2xl overflow-hidden border flex flex-col h-full group transition-all duration-300"
        style={{ borderColor: 'var(--border-color)' }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${project.accent}40`;
            e.currentTarget.style.boxShadow = `0 0 35px ${project.accent}20, 0 20px 40px rgba(0,0,0,0.3)`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = '';
        }}
    >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
            {/* Color overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                style={{ background: `linear-gradient(135deg, ${project.accent}60, transparent)` }}
            />
            {/* Gradient fade to card */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-60" />
            {/* Accent top bar */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
            />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-display mb-3 transition-colors"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={e => e.currentTarget.style.color = project.accent}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >
                {project.title}
            </h3>

            <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: 'var(--text-secondary)' }}>
                {project.desc}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className={`neon-badge ${tag.cls}`}
                    >
                        {tag.label}
                    </motion.span>
                ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mt-auto">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
                        style={{
                            borderColor: `${project.accent}40`,
                            color: project.accent,
                            background: `${project.accent}10`,
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = `${project.accent}25`;
                            e.currentTarget.style.boxShadow = `0 0 15px ${project.accent}30`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = `${project.accent}10`;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <Github size={15} />
                        Source Code
                    </a>
                )}
                <button
                    disabled
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all cursor-not-allowed"
                    style={{
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)',
                        opacity: 0.45,
                    }}
                    title="Live demo coming soon"
                >
                    <ExternalLink size={14} />
                    Live Demo
                </button>
            </div>
        </div>
    </motion.div>
);

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
            {/* Background glow */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative"
            >
                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#a855f7' }}>✦ My Work</p>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Digital <span className="text-gradient">Showcase</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    A curated selection of immersive web experiences and powerful applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* CTA to GitHub */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-14"
            >
                <a
                    href="https://github.com/Daminimore9021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold border transition-all hover:scale-105"
                    style={{
                        borderColor: 'rgba(168, 85, 247, 0.4)',
                        color: '#a855f7',
                        background: 'rgba(168, 85, 247, 0.08)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(168, 85, 247, 0.3)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                    <Github size={18} />
                    View All on GitHub
                </a>
            </motion.div>
        </section>
    );
};

export default Portfolio;
