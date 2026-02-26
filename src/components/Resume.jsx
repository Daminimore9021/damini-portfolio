import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, Download, X } from 'lucide-react';

const Resume = ({ isOpen, onClose }) => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const resumeUrl = "/resume/resume.pdf";

    const handleClose = () => {
        setIsPreviewOpen(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    <AnimatePresence mode="wait">

                        {/* Step 1 — Card */}
                        {!isPreviewOpen && (
                            <motion.div
                                key="card"
                                initial={{ scale: 0.92, opacity: 0, y: 16 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.92, opacity: 0, y: 16 }}
                                transition={{ duration: 0.18 }}
                                className="relative z-10 w-full max-w-3xl rounded-[2.5rem] p-12 text-center overflow-hidden"
                                style={{
                                    background: '#13131f',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
                                }}
                            >
                                {/* Close */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-xl transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Icon */}
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-xl">
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
                                        style={{ color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.12)' }}
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
                            </motion.div>
                        )}

                        {/* Step 2 — Full PDF Viewer */}
                        {isPreviewOpen && (
                            <motion.div
                                key="preview"
                                initial={{ scale: 0.92, opacity: 0, y: 16 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.92, opacity: 0, y: 16 }}
                                transition={{ duration: 0.18 }}
                                className="relative z-10 w-full max-w-5xl flex flex-col"
                                style={{
                                    height: '90vh',
                                    background: '#13131f',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '1.5rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
                                }}
                            >
                                {/* Header */}
                                <div className="p-5 border-b flex items-center justify-between flex-shrink-0"
                                    style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 opacity-60" style={{ color: 'var(--text-primary)' }} />
                                        <h3 className="text-xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                                            Resume Preview
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setIsPreviewOpen(false)}
                                            className="text-sm px-4 py-1.5 rounded-xl border transition-colors hover:bg-white/5"
                                            style={{ color: 'var(--text-secondary)', borderColor: 'rgba(255,255,255,0.1)' }}
                                        >
                                            ← Back
                                        </button>
                                        <button
                                            onClick={handleClose}
                                            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                {/* PDF */}
                                <div className="flex-grow overflow-hidden p-4">
                                    <iframe
                                        src={`${resumeUrl}#toolbar=0`}
                                        className="w-full h-full rounded-xl"
                                        style={{ border: 'none' }}
                                        title="Resume Preview"
                                    />
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Resume;
