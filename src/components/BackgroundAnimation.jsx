import React from 'react';

/**
 * Fixed background layer with animated gradient orbs.
 * Uses CSS transform/opacity only — fully GPU-accelerated, zero JS cost.
 */
const BackgroundAnimation = () => (
    <div
        aria-hidden="true"
        style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
        }}
    >
        {/* Orb 1 — top-left cyan */}
        <div style={{
            position: 'absolute',
            top: '-10%',
            left: '-8%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,240,255,0.13) 0%, transparent 70%)',
            animation: 'orb-drift-1 18s ease-in-out infinite',
            willChange: 'transform',
        }} />

        {/* Orb 2 — top-right purple */}
        <div style={{
            position: 'absolute',
            top: '5%',
            right: '-10%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            animation: 'orb-drift-2 22s ease-in-out infinite',
            willChange: 'transform',
        }} />

        {/* Orb 3 — mid blue */}
        <div style={{
            position: 'absolute',
            top: '40%',
            left: '35%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            animation: 'orb-drift-3 26s ease-in-out infinite',
            willChange: 'transform',
        }} />

        {/* Orb 4 — bottom-left purple */}
        <div style={{
            position: 'absolute',
            bottom: '5%',
            left: '-5%',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)',
            animation: 'orb-drift-2 20s ease-in-out infinite reverse',
            willChange: 'transform',
        }} />

        {/* Orb 5 — bottom-right cyan */}
        <div style={{
            position: 'absolute',
            bottom: '-8%',
            right: '-8%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,240,255,0.09) 0%, transparent 70%)',
            animation: 'orb-drift-1 24s ease-in-out infinite reverse',
            willChange: 'transform',
        }} />

        {/* Aurora bar — horizontal sweep at top */}
        <div style={{
            position: 'absolute',
            top: '18%',
            left: '10%',
            width: '80%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.25), rgba(168,85,247,0.25), transparent)',
            animation: 'aurora 8s ease-in-out infinite',
            willChange: 'transform, opacity',
            filter: 'blur(1px)',
        }} />
        <div style={{
            position: 'absolute',
            bottom: '22%',
            left: '15%',
            width: '70%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), rgba(0,240,255,0.2), transparent)',
            animation: 'aurora 11s ease-in-out infinite reverse',
            willChange: 'transform, opacity',
            filter: 'blur(1px)',
        }} />

        {/* Subtle grid overlay */}
        <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
        }} />
    </div>
);

export default BackgroundAnimation;
