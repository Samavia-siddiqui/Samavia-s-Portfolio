import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <section
      className="relative w-full bg-surface-container-high py-20 lg:py-28 overflow-hidden"
      id="about"
    >
      {/* Subtle Layered Chevron Lines Motif with slow drift */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 200 200">
          <path d="M30 0 L150 120 L30 240" stroke="#82542f" strokeWidth="2"></path>
          <path d="M70 0 L190 120 L70 240" stroke="#e3a87c" strokeWidth="2"></path>
        </svg>
      </motion.div>

      <div className="max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Decorative Typography & Precision Card (5 cols) */}
          <div className="lg:col-span-5 relative select-none">
            <div className="relative p-8 md:p-10 rounded-2xl bg-surface shadow-sm border border-outline-variant/30">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-on-surface/10 leading-none block uppercase tracking-tighter mb-4">
                MERN Stack
                <br />
                + SEO Growth
              </span>

              <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <div className="flex items-center gap-3 mb-2">
                  <BadgeCheck className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Precision &amp; Scale
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Bridging robust JavaScript backends with modern UI performance and white-hat
                  domain authority tactics.
                </p>
              </div>

              {/* Angular Decorative Accent */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary-container"></div>
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase font-bold">
                  Code • Authority • Impact
                </span>
              </div>
            </div>
          </div>

          {/* Right: Focused Editorial Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-label-lg text-label-lg tracking-widest text-primary uppercase mb-3 font-semibold">
              About Samavia Siddiqui
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-bold tracking-tight mb-6">
              Crafting digital experiences &amp; high-authority organic growth.
            </h2>

            <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              <p>
                I am a Full Stack Developer and Front-end AI Engineering intern based in Karachi,
                Pakistan, specializing in the modern MERN stack. My passion lies at the intersection
                of high-velocity web engineering and strategic digital discoverability.
              </p>
              <p>
                Alongside software engineering, I run GBOB — an editorial guest blogging and
                authoritative link-building service helping Finance and Tech brands grow their
                organic presence through meticulously vetted, high-authority placements that last.
              </p>
            </div>

            {/* Highlight Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {[
                { label: 'MERN Stack', subtitle: 'Specialist', primary: false },
                { label: 'DA 40–75', subtitle: 'Vetted Outreach', primary: true },
                { label: 'Front-End AI', subtitle: 'Engineering Intern', primary: false },
                { label: '100%', subtitle: 'White-Hat / 0% PBN', primary: true },
              ].map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -4 }}
                  className="p-3.5 bg-surface rounded-xl shadow-xs text-center flex flex-col items-center border border-outline-variant/30 cursor-default"
                >
                  <span
                    className={`font-label-sm text-label-sm font-bold ${
                      metric.primary ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    {metric.label}
                  </span>
                  <span className="text-xs text-on-surface-variant mt-0.5">
                    {metric.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
