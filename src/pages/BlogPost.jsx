import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Home } from 'lucide-react';
import { getPostBySlug, getAllPosts, formatDate } from '../utils/posts.js';
import MarkdownContent from '../components/MarkdownContent.jsx';
import BackgroundAnimation from '../components/BackgroundAnimation.jsx';

function readingTime(text) {
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const mins = Math.ceil(words / wpm);
    return `${mins} min read`;
}

const tagColors = {
    AI: '#00f0ff', RAG: '#a855f7', 'No-Code': '#10b981',
    'Pucho.ai': '#3b82f6', 'Make.com': '#f59e0b', n8n: '#ef4444',
    Automation: '#6366f1', Tools: '#10b981', default: '#a855f7',
};

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getPostBySlug(slug);
    const allPosts = getAllPosts();
    const postIndex = allPosts.findIndex(p => p.slug === slug);
    const prevPost = allPosts[postIndex + 1] || null;
    const nextPost = allPosts[postIndex - 1] || null;

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6" style={{ background: 'var(--bg-primary)' }}>
                <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Post not found</h1>
                <Link to="/blog" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7)' }}>
                    <ArrowLeft size={16} /> Back to Blog
                </Link>
            </div>
        );
    }

    const accentColor = tagColors[post.tags?.[0]] || tagColors.default;

    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <BackgroundAnimation />

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-[100] py-4 px-6 backdrop-blur-md border-b" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border-color)' }}>
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity text-sm"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <ArrowLeft size={16} />
                        All Articles
                    </button>
                    <Link to="/" className="text-lg font-bold font-display text-gradient">DAMINI DIMENSION</Link>
                    <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                        <Home size={18} />
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    {/* Tags */}
                    {post.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider"
                                    style={{ color: tagColors[tag] || tagColors.default, borderColor: `${tagColors[tag] || tagColors.default}30`, background: `${tagColors[tag] || tagColors.default}10` }}>
                                    <Tag size={8} />{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} style={{ color: accentColor }} />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={14} style={{ color: accentColor }} />
                            {readingTime(post.content)}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="mt-8 h-px" style={{ background: `linear-gradient(to right, ${accentColor}60, transparent)` }} />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <MarkdownContent content={post.content} />
                </motion.div>

                {/* Prev / Next navigation */}
                {(prevPost || nextPost) && (
                    <div className="mt-16 pt-8 border-t grid grid-cols-2 gap-6" style={{ borderColor: 'var(--border-color)' }}>
                        {prevPost ? (
                            <Link to={`/blog/${prevPost.slug}`} className="glass-card p-5 rounded-2xl group hover:border-cyan-500/30 transition-all">
                                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-50" style={{ color: 'var(--text-secondary)' }}>← Previous</p>
                                <p className="text-sm font-semibold group-hover:opacity-80 leading-snug" style={{ color: 'var(--text-primary)' }}>{prevPost.title}</p>
                            </Link>
                        ) : <div />}
                        {nextPost ? (
                            <Link to={`/blog/${nextPost.slug}`} className="glass-card p-5 rounded-2xl text-right group hover:border-purple-500/30 transition-all">
                                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-50" style={{ color: 'var(--text-secondary)' }}>Next →</p>
                                <p className="text-sm font-semibold group-hover:opacity-80 leading-snug" style={{ color: 'var(--text-primary)' }}>{nextPost.title}</p>
                            </Link>
                        ) : <div />}
                    </div>
                )}

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                    <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                        style={{ background: 'rgba(0,240,255,0.08)', color: '#00f0ff', border: '1px solid rgba(0,240,255,0.2)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,240,255,0.14)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,240,255,0.08)'}
                    >
                        <ArrowLeft size={16} />
                        Back to All Articles
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default BlogPost;
