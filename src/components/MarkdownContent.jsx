import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const MarkdownContent = ({ content }) => {
    return (
        <div className="blog-prose">
            <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-4xl font-bold font-display mb-6 mt-10 first:mt-0 text-gradient">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold font-display mb-4 mt-10 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-bold mb-3 mt-8" style={{ color: '#00f0ff' }}>{children}</h3>
                    ),
                    p: ({ children }) => (
                        <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="mb-5 space-y-2 pl-1">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="mb-5 space-y-2 pl-5 list-decimal" style={{ color: 'var(--text-secondary)' }}>{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="flex items-start gap-2 text-base" style={{ color: 'var(--text-secondary)' }}>
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00f0ff' }} />
                            <span>{children}</span>
                        </li>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-bold" style={{ color: 'var(--text-primary)' }}>{children}</strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic opacity-90">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote
                            className="my-6 pl-5 py-2 border-l-4 italic rounded-r-lg"
                            style={{ borderColor: '#a855f7', background: 'rgba(168,85,247,0.06)', color: 'var(--text-secondary)' }}
                        >
                            {children}
                        </blockquote>
                    ),
                    code: ({ inline, children, ...props }) =>
                        inline ? (
                            <code
                                className="px-1.5 py-0.5 rounded text-sm font-mono"
                                style={{ background: 'rgba(0,240,255,0.1)', color: '#00f0ff', border: '1px solid rgba(0,240,255,0.2)' }}
                                {...props}
                            >
                                {children}
                            </code>
                        ) : (
                            <code {...props}>{children}</code>
                        ),
                    pre: ({ children }) => (
                        <pre className="my-6 rounded-2xl overflow-x-auto p-5 text-sm" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                            {children}
                        </pre>
                    ),
                    a: ({ href, children }) => (
                        <a href={href} className="underline underline-offset-2 transition-opacity hover:opacity-80" style={{ color: '#00f0ff' }} target={href?.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">{children}</a>
                    ),
                    hr: () => (
                        <hr className="my-10 border-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,240,255,0.3), rgba(168,85,247,0.3), transparent)' }} />
                    ),
                    table: ({ children }) => (
                        <div className="my-6 overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-color)' }}>
                            <table className="w-full text-sm">{children}</table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider" style={{ background: 'rgba(0,240,255,0.06)', color: '#00f0ff', borderBottom: '1px solid var(--border-color)' }}>{children}</th>
                    ),
                    td: ({ children }) => (
                        <td className="px-4 py-3 border-b text-sm" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>{children}</td>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownContent;
