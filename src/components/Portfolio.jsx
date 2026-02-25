import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "SMS (Student Management System)",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        desc: "A high-performance student management system designed for seamless data handling and administrative efficiency.",
        achievement: "Engineered a robust system that works perfectly for large-scale student data operations.",
        tags: ["React", "Vite", "Node.js", "Database"],
        github: "https://github.com/Daminimore9021"
    },
    {
        id: 2,
        title: "Habit Tracker",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
        desc: "A comprehensive habit tracking application with daily planning, routines, and task management. Features an AI-powered assistant.",
        achievement: "Created a full-featured productivity app with AI assistance and seamless user experience.",
        tags: ["Next.js", "TypeScript", "React", "Prisma", "Tailwind CSS"],
        github: "https://github.com/Daminimore9021/Habit-Tracker.git"
    },
    {
        id: 3,
        title: "Car Pooling Platform",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
        desc: "A comprehensive car rental and pooling management system designed to reduce costs and environmental impact.",
        achievement: "Designed a scalable architecture capable of handling concurrent ride requests efficiently.",
        tags: ["PHP", "MySQL", "JavaScript", "CSS"],
        github: "https://github.com/Daminimore9021/Car-Pooling.git"
    },
    {
        id: 4,
        title: "Personal Expense Tracker",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
        desc: "An intuitive daily expense management application helping users track expenditures and manage budgets effectively.",
        achievement: "Achieved 100% data persistence using optimized LocalStorage-based state management.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Daminimore9021/personal-expense-tracker.git"
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                    Digital <span className="text-gradient">Showcase</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                    A curation of immersive web experiences and powerful applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl overflow-hidden border transition-all group flex flex-col h-full"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-4 font-display" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                            <p className="text-sm mb-6 leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                                {project.desc}
                            </p>

                            <div className="bg-white/5 border rounded-xl p-4 mb-6 relative group/achievement" style={{ borderColor: 'var(--border-color)' }}>
                                <div className="flex items-start gap-3">
                                    <Trophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <p className="text-xs italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                        {project.achievement}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-white/10 border text-[10px] font-medium transition-all"
                                        style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-neon-teal hover:underline mt-auto"
                                >
                                    View Source Code →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
