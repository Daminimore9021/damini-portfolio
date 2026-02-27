import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rss, ArrowLeft, BookOpen } from 'lucide-react';
import BlogCard from '../components/BlogCard.jsx';
import BackgroundAnimation from '../components/BackgroundAnimation.jsx';
import { getAllPosts } from '../utils/posts.js';

const BlogList = () => {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <BackgroundAnimation />

            {/* Blog Navbar */}
            <nav className="fixed top-0 left-0 w-full z-[100] py-4 px-6 backdrop-blur-md border-b" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border-color)' }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity text-sm" style={{ color: 'var(--text-primary)' }}>
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <Link to="/" className="text-xl font-bold font-display text-gradient">
                        DAMINI DIMENSION
                    </Link>
                    <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: '#f59e0b' }} title="RSS Feed">
                        <Rss size={18} />
                    </a>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-sm font-semibold"
                        style={{ borderColor: 'rgba(0,240,255,0.25)', color: '#00f0ff', background: 'rgba(0,240,255,0.06)' }}>
                        <BookOpen size={14} />
                        AI Insights & Learnings
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        The <span className="text-gradient">Blog</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                        Thoughts on AI automation, no-code tools, RAG systems, and building{' '}
                        <span style={{ color: '#00f0ff' }}>intelligent workflows</span> that actually work.
                    </p>
                </motion.div>

                {/* Post Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-8 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00f0ff' }} />
                    {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
                </motion.div>

                {/* Grid */}
                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.map((post, i) => (
                            <BlogCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 opacity-40">
                        <BookOpen className="mx-auto mb-4" size={48} />
                        <p style={{ color: 'var(--text-secondary)' }}>No posts yet. Check back soon!</p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <div className="text-center pb-12 text-xs opacity-40" style={{ color: 'var(--text-secondary)' }}>
                © 2026 Damini More ·{' '}
                <a href="/rss.xml" className="hover:underline" style={{ color: '#f59e0b' }}>RSS Feed</a>
            </div>
        </div>
    );
};

export default BlogList;
