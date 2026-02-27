/**
 * posts.js — loads all blog markdown files and parses frontmatter.
 * Uses Vite's import.meta.glob with { as: 'raw' } to get raw file strings,
 * then gray-matter parses the frontmatter.
 */
import matter from 'gray-matter';

// Vite eager glob import of all .md files as raw strings
const rawFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts() {
    const posts = Object.entries(rawFiles).map(([filepath, raw]) => {
        const slug = filepath.replace('/content/blog/', '').replace('.md', '');
        const { data, content } = matter(raw);
        return {
            slug,
            content,
            title: data.title || slug,
            date: data.date || '',
            excerpt: data.excerpt || '',
            tags: data.tags || [],
        };
    });

    // Sort newest first
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
    return getAllPosts().find(p => p.slug === slug) || null;
}

export function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}
