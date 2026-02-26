import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatarVideo from '../../my-image/damini-dimenssion.mp4';

const AvatarIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('enter'); // enter → exit → done
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    // Sync progress bar with actual video playback
    const handleTimeUpdate = () => {
        const vid = videoRef.current;
        if (!vid || vid.duration === 0) return;
        setProgress((vid.currentTime / vid.duration) * 100);
    };

    // When video finishes → start exit fade, then call onComplete
    const handleEnded = () => {
        setProgress(100);
        setPhase('exit');
        setTimeout(() => {
            onComplete();
        }, 700); // wait for fade-out animation
    };

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    key="avatar-intro"
                    initial={{ opacity: 1 }}
                    animate={phase === 'exit' ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: 'radial-gradient(ellipse at 50% 40%, #0e0b1a 0%, #050510 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    {/* Animated background blobs */}
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                        <div style={{
                            position: 'absolute', top: '20%', left: '20%',
                            width: '420px', height: '420px',
                            background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'pulse 3s ease-in-out infinite',
                        }} />
                        <div style={{
                            position: 'absolute', bottom: '20%', right: '20%',
                            width: '380px', height: '380px',
                            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'pulse 3s ease-in-out infinite 1s',
                        }} />
                        {/* Grid overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                        }} />
                    </div>

                    {/* Outer ring + Avatar Video */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'backOut' }}
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '220px',
                            height: '220px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* Rotating gradient ring */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4)',
                                animation: 'spin 3s linear infinite',
                                opacity: 0.8,
                            }} />
                            {/* Mask ring */}
                            <div style={{
                                position: 'absolute',
                                inset: '4px',
                                borderRadius: '50%',
                                background: '#0e0b1a',
                            }} />
                            {/* Avatar video — plays once, no loop */}
                            <video
                                ref={videoRef}
                                src={avatarVideo}
                                autoPlay
                                muted
                                playsInline
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={handleEnded}
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    width: '190px',
                                    height: '190px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '3px solid rgba(255,255,255,0.15)',
                                    boxShadow: '0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(139,92,246,0.15)',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ marginTop: '28px', textAlign: 'center', zIndex: 1 }}
                    >
                        <h1 style={{
                            fontSize: '1.8rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: '-0.5px',
                            lineHeight: 1.3,
                            marginBottom: '4px',
                        }}>
                            Hi, I am Damini.
                        </h1>
                        <h2 style={{
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: '-0.3px',
                            lineHeight: 1.3,
                        }}>
                            Welcome to{' '}
                            <span style={{
                                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Damini's Dimensions
                            </span>
                        </h2>
                    </motion.div>

                    {/* Progress bar — synced to video */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ marginTop: '32px', zIndex: 1, width: '240px', textAlign: 'center' }}
                    >
                        <p style={{
                            fontSize: '0.7rem',
                            color: 'rgba(255,255,255,0.35)',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            Entering Damini's Dimensions...
                        </p>
                        <div style={{
                            width: '100%',
                            height: '3px',
                            background: 'rgba(255,255,255,0.08)',
                            borderRadius: '2px',
                            overflow: 'hidden',
                        }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${progress}%`,
                                    background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                                    borderRadius: '2px',
                                    boxShadow: '0 0 10px rgba(6,182,212,0.5)',
                                    transition: 'width 0.1s linear',
                                }}
                            />
                        </div>
                    </motion.div>

                    <style>{`
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); opacity: 0.8; }
                            50% { transform: scale(1.1); opacity: 1; }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AvatarIntro;
