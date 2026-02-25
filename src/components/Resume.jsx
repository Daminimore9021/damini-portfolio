import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, Download, X } from 'lucide-react';

const Resume = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const resumeUrl = "/resume/resume.pdf";

    return (
        <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card max-w-3xl mx-auto rounded-[2.5rem] p-12 border relative overflow-hidden text-center transition-all"
            >
                {/* Decorative background text */}
                <div className="absolute inset-0 -z-10 opacity-[0.03] select-none pointer-events-none font-bold text-9xl flex items-center justify-center gap-8 overflow-hidden" style={{ color: 'var(--text-primary)' }}>
                    <span className="rotate-12">git</span>
                    <span className="-rotate-12">npm</span>
                    <span className="rotate-45">&&</span>
                    <span className="-rotate-45">{ }</span>
                </div>

                <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-xl" style={{ borderColor: 'var(--border-color)' }}>
                        <FileText className="w-10 h-10" style={{ color: 'var(--text-primary)' }} />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold font-display mb-6" style={{ color: 'var(--text-primary)' }}>
                        My <span className="text-gradient opacity-80">Resume</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Explore my professional journey, skills, and technical expertise in detail.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => setIsPreviewOpen(true)}
                            className="flex items-center justify-center gap-3 px-10 py-4 bg-black/5 border rounded-2xl font-bold transition-all active:scale-[0.98] group"
                            style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                        >
                            <Eye className="w-5 h-5 group-hover:text-neon-teal" />
                            Preview
                        </button>

                        <a
                            href={resumeUrl}
                            download="Damini_More_Resume.pdf"
                            className="flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-bold hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] transition-all active:scale-[0.98]"
                        >
                            <Download className="w-5 h-5" />
                            Download
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Resume Preview Modal */}
            <AnimatePresence>
                {isPreviewOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                    >
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsPreviewOpen(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-5xl h-full rounded-3xl border overflow-hidden flex flex-col shadow-2xl transition-all"
                            style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b flex items-center justify-between bg-white/5" style={{ borderColor: 'var(--border-color)' }}>
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 opacity-60" style={{ color: 'var(--text-primary)' }} />
                                    <h3 className="text-xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>Resume Preview</h3>
                                </div>
                                <button
                                    onClick={() => setIsPreviewOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Body - PDF Viewer */}
                            <div className="flex-grow p-2 md:p-6 overflow-hidden bg-black/5">
                                <iframe
                                    src={`${resumeUrl}#toolbar=0`}
                                    className="w-full h-full rounded-xl border-none shadow-inner"
                                    title="Resume Preview"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Resume;
