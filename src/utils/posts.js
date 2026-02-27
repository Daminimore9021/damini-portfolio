/**
 * posts.js — loads all blog markdown files and parses frontmatter.
 * Browser-safe: no gray-matter / Node.js dependencies.
 */

// Vite eager glob import of all .md files as raw strings
const rawFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

/**
 * Tiny browser-safe YAML frontmatter parser.
 * Handles: strings (quoted/unquoted), simple arrays ["a","b"].
 */
function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!match) return { data: {}, content: raw };

    const yamlBlock = match[1];
    const content = raw.slice(match[0].length);
    const data = {};

    yamlBlock.split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (!key) return;

        if (val.startsWith('[') && val.endsWith(']')) {
            data[key] = val.slice(1, -1)
                .split(',')
                .map(s => s.trim().replace(/^["']|["']$/g, ''))
                .filter(Boolean);
        } else {
            data[key] = val.replace(/^["']|["']$/g, '');
        }
    });

    return { data, content };
}

export function getAllPosts() {
    const posts = Object.entries(rawFiles).map(([filepath, raw]) => {
        const slug = filepath.replace('/content/blog/', '').replace('.md', '');
        const { data, content } = parseFrontmatter(raw);
        return {
            slug,
            content,
            title: data.title || slug,
            date: data.date || '',
            excerpt: data.excerpt || '',
            tags: Array.isArray(data.tags) ? data.tags : [],
        };
    });

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
