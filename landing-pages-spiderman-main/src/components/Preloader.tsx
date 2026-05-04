import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Spider-Man SVG path ─── */
const SPIDER_PATH =
  "M54.874,31.044c-0.96,0.734-1.603,0.328-2.418-0.19l-0.284-0.178c-2.114-1.189-5.428-3.458-7.848-5.115c-2.084-1.427-2.626-1.788-2.842-1.875c-0.266-0.191-0.625-0.13-0.945-0.075c-0.135,0.023-0.271,0.048-0.393,0.048c-1.036,0-1.867-0.295-2.715-0.636c1.024-0.081,2.057-0.145,2.85-0.145c4.203,0,7.806,0.773,10.708,2.299l0.15,0.079l0.129-0.111c0.277-0.238,0.604-0.463,0.951-0.702c0.655-0.45,1.332-0.916,1.794-1.553l0.125-0.172l-0.15-0.151c-0.667-0.669-1.06-2.262-1.32-3.316l-0.108-0.429c-0.114-0.342-0.18-0.673-0.238-0.964c-0.082-0.41-0.152-0.763-0.303-1.012c-1.607-5.03-3.482-8.572-6.271-11.845l-0.405,0.29c2.941,4.947,5.564,9.976,5.386,17.015c-2.711-0.654-9.77-1.093-10.583-1.093c-0.625,0-1.354,0.09-2.06,0.176c-0.513,0.063-1.039,0.128-1.52,0.157c0.057-0.093,0.111-0.187,0.164-0.279c0.312-0.541,0.607-1.051,1.214-1.204c0.59-0.25,5.886-0.137,6.416,0.409l0.201,0.207l0.177-0.228c0.233-0.301,0.631-0.515,1.016-0.721c0.447-0.241,0.87-0.468,1.043-0.839l0.023-0.105c0-0.284-3.167-10.365-5.735-14.24l-0.541-0.699l-0.434,0.234c1.342,3.885,2.653,8.136,2.691,13.64h-5.443L37.29,17.77c-0.439,0.324-0.872,0.739-1.291,1.14c-0.34,0.326-0.667,0.64-0.975,0.883c-0.082-0.934-0.982-1.553-1.504-1.913l-0.358,0.332c0.249,0.428,0.761,1.428,0.511,2.019c-0.017-0.028-0.035-0.071-0.061-0.138c-0.069-0.178-0.197-0.509-0.639-0.509h-0.093l-0.07,0.061c-0.218,0.188-0.567,0.289-0.785,0.289c-0.392,0-0.553,0-0.75-0.252l-0.075-0.097h-0.123c-0.442,0-0.57,0.331-0.639,0.509c-0.026,0.067-0.044,0.11-0.061,0.138c-0.251-0.59,0.262-1.59,0.511-2.019l-0.341-0.342c-0.966,0.555-1.478,1.194-1.528,1.908c-0.239-0.2-0.487-0.447-0.744-0.702c-0.446-0.442-0.951-0.944-1.526-1.315l-0.062-0.04h-5.412c0.039-5.501,1.349-9.753,2.691-13.64l-0.434-0.234L22.97,4.582c-1.34,2.518-5.711,13.745-5.711,14.205l0.017,0.09c0.189,0.49,0.713,0.765,1.22,1.031c0.324,0.17,0.66,0.347,0.859,0.562l0.2,0.215l0.181-0.232c0.418-0.539,5.862-0.603,6.414-0.375c0.567,0.14,0.861,0.649,1.173,1.189c0.054,0.093,0.108,0.188,0.165,0.281c-0.48-0.029-1.006-0.094-1.52-0.157c-0.706-0.086-1.436-0.176-2.059-0.176c-0.814,0-7.873,0.438-10.584,1.093c-0.178-7.039,2.445-12.067,5.387-17.015l-0.405-0.29c-2.847,3.342-4.664,6.808-6.249,11.912c-0.183,0.313-0.252,0.652-0.34,1.083c-0.056,0.271-0.119,0.584-0.229,0.96l-0.104,0.415c-0.26,1.053-0.653,2.645-1.319,3.313l-0.176,0.176l0.176,0.176c0.427,0.428,0.952,0.818,1.459,1.194c0.477,0.354,0.927,0.687,1.245,1.016l0.13,0.135l0.166-0.087c2.9-1.526,6.503-2.3,10.708-2.3c0.753,0,1.808,0,2.935,0.11c-0.876,0.356-1.729,0.67-2.8,0.67c-0.177,0-0.34-0.028-0.498-0.056c-0.29-0.05-0.588-0.101-0.841,0.083c-0.216,0.088-0.759,0.449-2.838,1.873c-2.42,1.658-5.736,3.928-7.877,5.134c-1.025,0.757-1.655,1.152-2.689,0.459l-0.389,0.208c0,7.581,1.721,14.046,5.609,21.004c0.388,0.447,1.187,1.703,1.195,1.716l0.436-0.243c-2.381-4.895-4.256-18.919-4.05-19.828c0.406-0.816,11.101-8.174,11.771-8.473c0.202-0.086,0.769-0.207,1.37-0.334c0.515-0.109,1.1-0.233,1.63-0.372c-0.268,0.275-0.544,0.572-0.829,0.878c-0.831,0.893-1.689,1.815-2.568,2.437c-0.068,0.059-0.125,0.054-0.332,0.005c-0.123-0.029-0.276-0.065-0.452-0.065h-0.25v0.25c0,11.209,0.637,19.596,3.811,26.766c0.704,1.515,1.684,3.434,3.022,4.841l0.392-0.307c-4.082-6.386-4.052-16.594-4.024-26.466c0.002-0.836,0.005-1.672,0.005-2.505v-0.126l-0.102-0.075c-0.075-0.056-0.071-0.198-0.054-0.308c0.167-1.093,2.096-3.41,3.275-4.233c-0.089,0.239-0.206,0.521-0.31,0.771c-0.33,0.794-0.546,1.337-0.546,1.643c0,1.576,2.225,9.342,3.487,11.757l0.07,0.134h1.386l0.07-0.134c1.262-2.414,3.486-10.18,3.486-11.757c0-0.267-0.213-0.829-0.564-1.724c-0.082-0.207-0.176-0.449-0.257-0.665c1.179,0.94,3.153,3.449,3.244,4.429c0.006,0.059,0.008,0.162-0.039,0.191l-0.119,0.073v0.14c0,0.833,0.002,1.667,0.005,2.503c0.028,9.873,0.058,20.082-4.024,26.468l0.392,0.307c1.231-1.294,2.335-3.064,3.025-4.845c3.172-7.279,3.809-15.681,3.809-26.878v-0.25h-0.25c-0.243,0-0.438,0.042-0.581,0.073c-0.068,0.015-0.16,0.034-0.15,0.052l-0.072-0.079c-0.859-0.605-1.718-1.528-2.547-2.42c-0.285-0.306-0.562-0.604-0.831-0.879c0.53,0.139,1.116,0.263,1.63,0.372c0.601,0.127,1.168,0.248,1.37,0.334c0.671,0.299,11.365,7.657,11.772,8.474c0.161,0.693-1.5,14.859-4.048,19.823l0.433,0.248c0.008-0.013,0.819-1.292,1.224-1.991c3.858-6.916,5.579-13.381,5.579-20.961L54.874,31.044z";

/* ─── Spider web radial lines (from center outward) ─── */
const WEB_LINES = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180;
  return {
    x1: 50,
    y1: 50,
    x2: 50 + Math.cos(angle) * 50,
    y2: 50 + Math.sin(angle) * 50,
  };
});

/* ─── Spider web concentric rings ─── */
const WEB_RINGS = [15, 25, 35, 45];

/* ─── Floating particles ─── */
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
}

const particles = generateParticles(30);

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  const handleComplete = useCallback(() => {
    setTimeout(() => setShow(false), 400);
    setTimeout(onComplete, 1200);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [handleComplete]);

  // SVG viewBox = 64×64 → fillY from 64 (empty) → 0 (full)
  const fillY = 64 - (progress / 100) * 64;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #6b0f0f 0%, #3d0808 40%, #1a0304 80%, #0a0101 100%)",
          }}
        >
          {/* ═══════ ANIMATED SPIDER WEB BACKGROUND ═══════ */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            {/* Radial lines */}
            {WEB_LINES.map((line, i) => (
              <motion.line
                key={`line-${i}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="white"
                strokeWidth="0.15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
              />
            ))}
            {/* Concentric rings */}
            {WEB_RINGS.map((r, i) => (
              <motion.circle
                key={`ring-${i}`}
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="white"
                strokeWidth="0.12"
                strokeDasharray={`2 4`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8 + i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.svg>

          {/* ═══════ FLOATING RED PARTICLES ═══════ */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: `radial-gradient(circle, rgba(205,22,28,0.8) 0%, rgba(205,22,28,0) 70%)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 15 : -15, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ═══════ PULSING RED GLOW ═══════ */}
          <motion.div
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(205,22,28,0.2) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ═══════ SPIDER-MAN SVG WITH FILL ═══════ */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.8,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-72 h-72 md:w-96 md:h-96"
              style={{
                filter: `drop-shadow(0 0 ${8 + progress * 0.2}px rgba(205,22,28,${0.2 + progress * 0.006}))`,
              }}
            >
              <defs>
                <linearGradient id="red-gradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#ff2d2d" />
                  <stop offset="50%" stopColor="#cd161c" />
                  <stop offset="100%" stopColor="#8b0000" />
                </linearGradient>
                {/* Mask: white = visible, black = hidden */}
                <mask id="fill-mask">
                  <rect
                    x="0"
                    y={fillY}
                    width="64"
                    height="64"
                    fill="white"
                    style={{ transition: "y 0.3s ease-out" }}
                  />
                </mask>
              </defs>

              {/* Ghost outline — always visible at low opacity */}
              <path d={SPIDER_PATH} fill="white" opacity={0.15} />

              {/* Red fill rising from bottom using mask */}
              <path
                d={SPIDER_PATH}
                fill="url(#red-gradient)"
                mask="url(#fill-mask)"
              />

              {/* Thin white stroke for definition */}
              <path
                d={SPIDER_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.25"
              />
            </svg>
          </motion.div>

          {/* ═══════ WEB STRINGS from corners ═══════ */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Top-left web string */}
            <motion.line
              x1="0"
              y1="0"
              x2="50%"
              y2="50%"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            />
            {/* Top-right web string */}
            <motion.line
              x1="100%"
              y1="0"
              x2="50%"
              y2="50%"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            />
            {/* Bottom-left web string */}
            <motion.line
              x1="0"
              y1="100%"
              x2="50%"
              y2="50%"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
            />
            {/* Bottom-right web string */}
            <motion.line
              x1="100%"
              y1="100%"
              x2="50%"
              y2="50%"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            />
          </svg>

          {/* ═══════ BOTTOM PROGRESS BAR ═══════ */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <motion.div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #8b0000, #cd161c, #ff4444)",
                boxShadow: "0 0 12px rgba(205,22,28,0.6)",
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* ═══════ CORNER DECORATIONS ═══════ */}
          <motion.div
            className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/10 rounded-tl-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.div
            className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/10 rounded-tr-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/10 rounded-bl-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/10 rounded-br-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
