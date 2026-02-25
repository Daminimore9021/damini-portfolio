import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t text-sm bg-black/5" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
            <p>&copy; {new Date().getFullYear()} Damini. All rights reserved.</p>
            <p className="mt-2 flex items-center justify-center gap-2">
                Made with <span className="text-red-500">❤</span> in Mumbai using <span className="text-neon-teal">React</span> & <span className="text-neon-purple">Tailwind</span>
            </p>
        </footer>
    );
};

export default Footer;
