#!/usr/bin/env node
/**
 * generate-rss.js — generates /public/rss.xml from content/blog/*.md
 * Run via: node scripts/generate-rss.js
 * Hooked into `npm run build` via package.json
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '../content/blog');
const OUTPUT = join(__dirname, '../public/rss.xml');
const SITE_URL = 'https://damini-portfolio-xi.vercel.app';

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return { data: {}, content: raw };
    const lines = match[1].split('\n');
    const data = {};
    lines.forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length) {
            let val = rest.join(':').trim().replace(/^["']|["']$/g, '');
            if (val.startsWith('[')) {
                val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
            }
            data[key.trim()] = val;
        }
    });
    return { data, content: raw.replace(/^---[\s\S]*?---\n/, '') };
}

const files = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const posts = files.map(file => {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf-8');
    const slug = file.replace('.md', '');
    const { data } = parseFrontmatter(raw);
    return { slug, ...data };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

const items = posts.map(p => `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${SITE_URL}/blog/${p.slug}</link>
    <guid>${SITE_URL}/blog/${p.slug}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description><![CDATA[${p.excerpt || ''}]]></description>
  </item>`).join('');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Damini More — AI Workflow Insights</title>
    <link>${SITE_URL}</link>
    <description>Thoughts on AI automation, RAG systems, and no-code tools by Damini More.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

writeFileSync(OUTPUT, rss);
console.log(`✅ RSS feed generated → public/rss.xml (${posts.length} posts)`);
