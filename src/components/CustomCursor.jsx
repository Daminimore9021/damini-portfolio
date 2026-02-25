import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkMobile();
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-teal pointer-events-none z-[9999] mix-blend-difference"
            animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute inset-0 bg-neon-teal opacity-20 blur-md rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;
