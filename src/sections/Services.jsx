import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Layout,
  Sparkles,
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('seo'); // 'seo' | 'web'

  return (
    <section className="relative w-full bg-surface py-20 lg:py-28 overflow-hidden" id="services">
      {/* Decorative Dot-Grid Pattern Top-Left */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-6 w-60 h-48 pointer-events-none opacity-20 z-0 hidden lg:block"
      >
        <svg
          className="text-primary-container"
          fill="none"
          height="190"
          viewBox="0 0 240 190"
          width="240"
        >
          <pattern
            height="20"
            id="dot-grid-services"
            patternUnits="userSpaceOnUse"
            width="20"
          >
            <circle cx="2.5" cy="2.5" fill="currentColor" r="2" />
          </pattern>
          <rect fill="url(#dot-grid-services)" height="190" width="240" />
        </svg>
      </div>

      {/* Angled Chevron Lines Accent Bottom-Right (Angle: -25°) */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0], rotate: [-25, -23, -25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 right-8 w-80 h-44 pointer-events-none opacity-25 z-0 hidden md:block"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 320 180">
          <path
            d="M20 140 L160 30 L300 140"
            stroke="#E3A87C"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M50 160 L160 65 L270 160"
            stroke="#82542f"
            strokeDasharray="6 6"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header with Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <span className="font-label-lg text-label-lg tracking-widest text-primary uppercase mb-2 block font-semibold">
              Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight">
              Services &amp; Expertise
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-xl bg-surface-container-high self-start md:self-auto border border-outline-variant/30">
            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              className={`px-5 py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'seo'
                  ? 'bg-surface shadow-sm text-on-surface font-bold scale-[1.02]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              SEO &amp; Link Building
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className={`px-5 py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-surface shadow-sm text-on-surface font-bold scale-[1.02]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Web Development
            </button>
          </div>
        </motion.div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'seo' ? (
            <motion.div
              key="seo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Flagship Card (7 Cols) */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="lg:col-span-7 bg-surface-container-high rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-primary-container/60 hover:shadow-[0_12px_32px_-8px_rgba(43,36,32,0.08)]"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        Flagship Offering
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Quote on Request
                      </span>
                    </div>

                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                      Guest Post Placement
                    </h3>

                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                      Specialized in high-authority Finance and Tech publications (DA 40–75). We execute
                      contextual, editorial outreach that drives organic rank jumps, indexable anchor
                      diversity, and referral traffic.
                    </p>

                    {/* Features Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>Strict Zero-PBN Policy</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>DA 40-75 Hand-Vetted Sites</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>Finance &amp; Tech Niche Focus</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>Permanent Do-Follow Placement</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto border-t border-outline-variant/20">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-surface transition-colors font-semibold group"
                    >
                      <span>Inquire for Outreach Openings</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>

                {/* Stacked Secondary Cards (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {/* Secondary 1 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface-container rounded-2xl p-8 shadow-sm flex flex-col justify-between flex-1 border border-outline-variant/20 hover:border-primary-container/40"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-5">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                        Link Building Strategy
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Comprehensive competitor gap audits, targeted anchor text distribution, and
                        custom quarterly growth roadmaps engineered for durable search positions.
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider font-semibold">
                        Custom Roadmap
                      </span>
                    </div>
                  </motion.div>

                  {/* Secondary 2 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface-container rounded-2xl p-8 shadow-sm flex flex-col justify-between flex-1 border border-outline-variant/20 hover:border-primary-container/40"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                        Vendor Sourcing &amp; Vetting
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        No automated link farms or expired spam domains. Manual vetting verifies
                        organic traffic trends, spam scores, backlink history, and healthy indexation.
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider font-semibold">
                        Manual Auditing
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Flagship Card (7 Cols) */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="lg:col-span-7 bg-surface-container-high rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-primary-container/60 hover:shadow-[0_12px_32px_-8px_rgba(43,36,32,0.08)]"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        MERN Core
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Bespoke Builds
                      </span>
                    </div>

                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                      Full Stack Web Applications
                    </h3>

                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                      Scalable architectures powered by React, Node.js, Express, and MongoDB. Secure user
                      authentication, resilient RESTful APIs, optimized database schemas, and intuitive UI designs.
                    </p>

                    {/* Features Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>React.js &amp; Modern UI Frameworks</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>Node.js &amp; Express API Backends</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>MongoDB Document Databases</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        <span>JWT Auth &amp; Role-based Security</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto border-t border-outline-variant/20">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-surface transition-colors font-semibold group"
                    >
                      <span>Discuss Your System Architecture</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>

                {/* Secondary Cards (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {/* Secondary 1 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface-container rounded-2xl p-8 shadow-sm flex flex-col justify-between flex-1 border border-outline-variant/20 hover:border-primary-container/40"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-5">
                        <Layout className="w-5 h-5" />
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                        Landing Pages &amp; Business Websites
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        High-converting, lightning-fast web experiences engineered with modern React,
                        Tailwind CSS, and smooth interaction states that captivate users.
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider font-semibold">
                        Fast Turnaround
                      </span>
                    </div>
                  </motion.div>

                  {/* Secondary 2 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface-container rounded-2xl p-8 shadow-sm flex flex-col justify-between flex-1 border border-outline-variant/20 hover:border-primary-container/40"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-5">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                        Website Redesign &amp; Modernization
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Upgrading outdated codebases, speeding up load times, ensuring pristine mobile
                        responsiveness, and implementing modern accessibility standards.
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider font-semibold">
                        Performance Focused
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
