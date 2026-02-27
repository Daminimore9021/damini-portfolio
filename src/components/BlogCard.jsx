import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { formatDate } from '../utils/posts';

const tagColors = {
    AI: '#00f0ff',
    RAG: '#a855f7',
    'No-Code': '#10b981',
    'Pucho.ai': '#3b82f6',
    'Make.com': '#f59e0b',
    n8n: '#ef4444',
    Automation: '#6366f1',
    Tools: '#10b981',
    default: '#a855f7',
};

const BlogCard = ({ post, index }) => {
    const accentColor = tagColors[post.tags?.[0]] || tagColors.default;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
            style={{ borderColor: `${accentColor}20` }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${accentColor}50`;
                e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}25, 0 12px 40px rgba(0,0,0,0.3)`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${accentColor}20`;
                e.currentTarget.style.boxShadow = '';
            }}
        >
            {/* Accent top bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}40)` }} />

            <div className="p-7 flex flex-col flex-1 gap-4">
                {/* Tags */}
                {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map(tag => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full border tracking-wide uppercase"
                                style={{ color: tagColors[tag] || tagColors.default, borderColor: `${tagColors[tag] || tagColors.default}30`, background: `${tagColors[tag] || tagColors.default}10` }}
                            >
                                <Tag size={8} />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold font-display leading-snug group-hover:opacity-90 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                </p>

                {/* Meta + CTA */}
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {formatDate(post.date)}
                        </span>
                    </div>
                    <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                        style={{ color: accentColor }}
                    >
                        Read More
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
