import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'WhatsApp',
        href: 'https://wa.me/919021652937',
        icon: <FaWhatsapp size={18} />,
        color: 'hover:text-[#25D366] hover:border-[#25D366]/40',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/damini-more-889553256',
        icon: <FaLinkedinIn size={18} />,
        color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/YOUR_INSTAGRAM', // replace with actual
        icon: <FaInstagram size={18} />,
        color: 'hover:text-[#E1306C] hover:border-[#E1306C]/40',
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/YOUR_TWITTER', // replace with actual
        icon: <FaTwitter size={18} />,
        color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Daminimore9021',
        icon: <FaGithub size={18} />,
        color: 'hover:text-white hover:border-white/40',
    },
];

const Footer = () => {
    return (
        <footer
            className="py-10 border-t"
            style={{ borderColor: 'var(--border-color)', background: 'var(--bg-color)' }}
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

                {/* Brand */}
                <p className="text-xl font-bold font-display tracking-wider"
                    style={{ background: 'linear-gradient(90deg,#06b6d4,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    DAMINI DIMENSION
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={s.name}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${s.color}`}
                            style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

                {/* Bottom text */}
                <div className="text-center text-xs space-y-1" style={{ color: 'var(--text-secondary)' }}>
                    <p>© {new Date().getFullYear()} Damini Dimension. All rights reserved.</p>
                    <p className="flex items-center justify-center gap-1.5">
                        Made with <span className="text-red-500">❤</span> using <span className="text-cyan-400">React</span> & <span className="text-purple-400">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
