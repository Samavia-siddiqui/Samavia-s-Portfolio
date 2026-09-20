import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      className="relative w-full bg-surface py-20 lg:py-28 overflow-hidden"
      id="testimonials"
    >
      {/* Angled Chevron Lines Accent Bottom-Left (Angle: -55°) */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0], rotate: [-55, -52, -55] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-8 left-8 w-64 h-36 pointer-events-none opacity-20 z-0 hidden md:block"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 260 150">
          <path
            d="M20 120 L130 25 L240 120"
            stroke="#E3A87C"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M40 135 L130 50 L220 135"
            stroke="#82542f"
            strokeDasharray="4 4"
            strokeWidth="1.2"
          />
        </svg>
      </motion.div>

      {/* Decorative Dot-Grid Accent Top-Right */}
      <div
        aria-hidden="true"
        className="absolute top-8 right-12 w-48 h-40 pointer-events-none opacity-20 z-0 hidden lg:block"
      >
        <svg
          className="text-primary-container"
          fill="none"
          height="160"
          viewBox="0 0 190 160"
          width="190"
        >
          <pattern
            height="18"
            id="dot-grid-testimonials"
            patternUnits="userSpaceOnUse"
            width="18"
          >
            <circle cx="2.5" cy="2.5" fill="currentColor" r="2" />
          </pattern>
          <rect fill="url(#dot-grid-testimonials)" height="160" width="190" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-label-lg text-label-lg tracking-widest text-primary uppercase mb-2 block font-semibold">
            Endorsements
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight">
            Client Experiences
          </h2>
        </motion.div>

        {/* Warm Inviting Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="max-w-3xl mx-auto bg-surface-container-high rounded-3xl p-10 lg:p-14 text-center relative shadow-sm border border-outline-variant/30 hover:shadow-[0_12px_32px_-8px_rgba(43,36,32,0.08)] transition-all duration-300"
        >
          {/* Large Quote Icon Motif */}
          <div
            aria-hidden="true"
            className="text-primary-container/40 flex justify-center mb-6"
          >
            <Quote className="w-16 h-16 fill-current rotate-180" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low mb-5 border border-outline-variant/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
              Founding Client Cohort
            </span>
          </div>

          <h3 className="font-headline-md text-headline-sm md:text-headline-md font-bold text-on-surface mb-4">
            What Clients Will Say
          </h3>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
            Currently onboarding our founding cohort of brands for web development and
            high-authority link outreach. Check back soon for firsthand feedback and verified growth
            metrics.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold"
          >
            <span>Be Our Next Success Story</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
