#!/usr/bin/env node
/**
 * generate-rss.js — generates /public/rss.xml from content/blog/*.md
 * Run via: node scripts/generate-rss.js
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '../content/blog');
const OUTPUT = join(__dirname, '../public/rss.xml');
const SITE_URL = 'https://damini-portfolio-xi.vercel.app';

/**
 * Browser-safe YAML frontmatter parser — handles both LF and CRLF line endings.
 */
function parseFrontmatter(raw) {
  // Normalize line endings to \n
  const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, content: normalized };

  const yamlBlock = match[1];
  const content = normalized.slice(match[0].length);
  const data = {};

  yamlBlock.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    if (!key) return;

    // Array: ["a", "b"] or [a, b]
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

const files = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const posts = files.map(file => {
  const raw = readFileSync(join(BLOG_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');
  const { data } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
  };
}).filter(p => p.date).sort((a, b) => new Date(b.date) - new Date(a.date));

const items = posts.map(p => {
  const pubDate = new Date(p.date);
  return `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${SITE_URL}/blog/${p.slug}</link>
    <guid>${SITE_URL}/blog/${p.slug}</guid>
    <pubDate>${isNaN(pubDate) ? '' : pubDate.toUTCString()}</pubDate>
    <description><![CDATA[${p.excerpt}]]></description>
  </item>`;
}).join('');

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
posts.forEach(p => console.log(`   • [${p.date}] ${p.title}`));
