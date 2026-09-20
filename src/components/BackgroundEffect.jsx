import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* 1. Soft Ambient Color Glows */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-primary-container/20 to-primary/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.92, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -left-36 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary-fixed/30 to-surface-container-high/40 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, 20, -25, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.05, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-primary-container/15 to-secondary-container/20 blur-[130px]"
      />

      {/* 2. Global Dot-Grid Accents in Margins */}
      {/* Upper-Left Dot Grid */}
      <div className="absolute top-20 left-4 w-48 h-48 opacity-15 pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" fill="none">
          <pattern
            id="bg-dot-grid-1"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2.5" cy="2.5" r="2" fill="#E3A87C" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-dot-grid-1)" />
        </svg>
      </div>

      {/* Center-Right Dot Grid */}
      <div className="absolute top-1/2 right-6 w-56 h-40 opacity-15 pointer-events-none hidden md:block">
        <svg width="100%" height="100%" fill="none">
          <pattern
            id="bg-dot-grid-2"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2.5" cy="2.5" r="2" fill="#82542f" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-dot-grid-2)" />
        </svg>
      </div>

      {/* 3. Multi-Angle Drifting Chevron Lines */}
      {/* Top-Right Chevron (Angle: 45°) */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [45, 47, 45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-28 right-[12%] opacity-20 hidden lg:block"
      >
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
          <path
            d="M20 120 L90 30 L160 120"
            stroke="#E3A87C"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M35 135 L90 55 L145 135"
            stroke="#82542f"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
        </svg>
      </motion.div>

      {/* Mid-Left Chevron (Angle: -35°) */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [-35, -32, -35],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[45%] -left-8 opacity-20 hidden md:block"
      >
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
          <path
            d="M20 130 L110 30 L200 130"
            stroke="#82542f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M40 145 L110 60 L180 145"
            stroke="#E3A87C"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </motion.div>

      {/* Bottom-Center Diagonal Chevron (Angle: 125°) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          rotate: [125, 128, 125],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute bottom-48 left-[40%] opacity-15 hidden xl:block"
      >
        <svg width="200" height="140" viewBox="0 0 200 140" fill="none">
          <path
            d="M20 110 L100 25 L180 110"
            stroke="#E3A87C"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M35 125 L100 50 L165 125"
            stroke="#82542f"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Lower-Right Sideways Cut Chevron (Angle: -110°) */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [-110, -107, -110],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-20 right-4 opacity-15 hidden lg:block"
      >
        <svg width="190" height="150" viewBox="0 0 190 150" fill="none">
          <path
            d="M20 120 L95 30 L170 120"
            stroke="#82542f"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M40 135 L95 60 L150 135"
            stroke="#E3A87C"
            strokeWidth="1.4"
            strokeDasharray="5 5"
          />
        </svg>
      </motion.div>
    </div>
  );
}
