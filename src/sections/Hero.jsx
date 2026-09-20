import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Terminal } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-surface py-16 md:py-24 lg:py-28"
      id="hero"
    >
      {/* Decorative Subtle Radial Dot-Grid Texture Top-Right */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-12 w-64 h-64 pointer-events-none opacity-25 z-0"
      >
        <svg
          className="text-primary-container"
          fill="none"
          height="240"
          viewBox="0 0 240 240"
          width="240"
        >
          <pattern
            height="20"
            id="dot-grid-hero"
            patternUnits="userSpaceOnUse"
            width="20"
            x="0"
            y="0"
          >
            <circle cx="3" cy="3" fill="currentColor" r="2.5"></circle>
          </pattern>
          <rect fill="url(#dot-grid-hero)" height="240" width="240"></rect>
        </svg>
      </div>

      {/* Architectural Chevron SVG stroke lines with gentle low-amplitude drift */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 left-8 w-80 h-40 pointer-events-none opacity-15 z-0 hidden lg:block"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 380 180">
          <path
            d="M0 160 L140 40 L280 160"
            stroke="#E3A87C"
            strokeLinecap="round"
            strokeWidth="2"
          ></path>
          <path
            d="M40 180 L160 70 L280 180"
            stroke="#82542f"
            strokeDasharray="6 6"
            strokeWidth="1.5"
          ></path>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Circular Portrait (45%) with initial scale + fade */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Peach Ring Border Framing with Ring Offset */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-surface shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary-container ring-offset-4 ring-offset-surface bg-surface-container-high">
                  <img
                    alt="Samavia Siddiqui"
                    src={avatarImg}
                    className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-700 group-hover:scale-110"
                    style={{
                      objectPosition: '50% 20%',
                      transform: 'scale(1.35)',
                      transformOrigin: '50% 25%',
                    }}
                  />
                </div>
              </div>

              {/* Decorative Floating Tag */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-3 right-4 sm:right-8 bg-surface-container-lowest px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2.5 border border-outline-variant/30 select-none"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                  Available for Projects
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typography (55%) with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-[55%] flex flex-col items-start text-left"
          >
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-surface-container-high mb-6 border border-outline-variant/30 select-none">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wide">
                SEO Link Building &amp; Full Stack Web Dev
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-headline-lg lg:text-display font-bold text-on-surface tracking-tight leading-[1.05] mb-5">
              Samavia Siddiqui
            </h1>

            {/* Supporting Pitch */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-6 leading-relaxed">
              Helping brands grow online — through smart link building and custom web development.
              Crafting modern, accessible applications and high-impact digital authority.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-8 py-2 px-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <MapPin className="text-primary w-4 h-4 shrink-0" />
              <span>Karachi, Pakistan</span>
              <span className="text-outline-variant">•</span>
              <span className="text-on-surface font-medium">Front-end AI Engineering Intern</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-surface-container-low text-on-surface font-label-lg text-label-lg font-bold px-6 py-3.5 rounded-xl hover:bg-surface-container-high transition-all duration-200 border border-outline-variant/30"
              >
                <span>View My Work</span>
                <Terminal className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
