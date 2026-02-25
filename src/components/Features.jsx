import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Box, BrainCircuit } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="text-blue-400" />,
        title: "Clean Code",
        desc: "Scalable architecture built with Next.js and TypeScript. Performance optimized by default."
    },
    {
        icon: <Zap className="text-yellow-400" />,
        title: "Fluid Motion",
        desc: "Advanced animations powered by Framer Motion. Every interaction feels alive."
    },
    {
        icon: <Box className="text-blue-500" />,
        title: "3D Dimension",
        desc: "Immersive 3D experiences using React Three Fiber. Breaking the flat web."
    },
    {
        icon: <BrainCircuit className="text-cyan-400" />,
        title: "Agentic AI",
        desc: "Smart, context-aware AI integration capable of understanding intents and actions."
    }
];

const Features = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-2xl border border-white/5 flex flex-col items-start gap-4 hover:bg-white/5 transition-all"
                    >
                        <div className="mb-2">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white font-display">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
