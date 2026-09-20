import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShoppingBag,
  UtensilsCrossed,
  Store,
  Footprints,
  Images,
  Code2,
  ArrowRight,
  Database,
} from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: 'HerDailyFinds',
    category: 'Curated Commerce',
    description:
      'Sleek lifestyle curation interface built with smooth fluid motion interactions and accessible components.',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
    icon: ShoppingBag,
    liveUrl: 'https://her-daily-finds.vercel.app',
    githubUrl: 'https://github.com/Samavia-siddiqui/HerDailyFinds',
  },
  {
    title: 'CraveBite',
    category: 'Food & Dining',
    description:
      'Fast food culinary experience website offering interactive menus, animated dish highlights, and dynamic cart preview.',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
    icon: UtensilsCrossed,
    liveUrl: 'https://fast-food-website-vr2g.vercel.app',
    githubUrl: 'https://github.com/Samavia-siddiqui/CraveBite',
  },
  {
    title: 'Ecommerce Store',
    category: 'Storefront UI',
    description:
      'Comprehensive modern digital store application with product sorting, dynamic pricing calculators, and responsive checkout layout.',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
    icon: Store,
    liveUrl: 'https://ecommerce-store-chi-five.vercel.app',
    githubUrl: 'https://github.com/Samavia-siddiqui/Ecommerce-Store',
  },
  {
    title: 'Shoe Web',
    category: 'Product Showcase',
    description:
      'Modern footwear interactive landing page focusing on bold typographic alignments and product feature reveals.',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
    icon: Footprints,
    liveUrl: 'https://shoe-web-two.vercel.app',
    githubUrl: 'https://github.com/Samavia-siddiqui/Shoe-web',
  },
  {
    title: 'Image Gallery',
    category: 'Interactive Media',
    description:
      'Interactive masonry-style responsive lightbox gallery created with pure vanilla DOM scripting and performance-first CSS.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    icon: Images,
    liveUrl: 'https://image-gallery-lilac-rho.vercel.app',
    githubUrl: 'https://github.com/Samavia-siddiqui/image-gallery',
  },
];

export default function Portfolio() {
  return (
    <section
      className="relative w-full bg-surface-container-high py-20 lg:py-28 overflow-hidden"
      id="work"
    >
      {/* Angled Chevron Lines Accent Mid-Left (Angle: 55°) */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0], rotate: [55, 58, 55] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-12 w-72 h-44 pointer-events-none opacity-20 z-0 hidden lg:block"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 300 160">
          <path
            d="M20 130 L150 25 L280 130"
            stroke="#82542f"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M45 150 L150 55 L255 150"
            stroke="#E3A87C"
            strokeDasharray="5 5"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Decorative Dot-Grid Pattern Top-Right */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-10 w-56 h-48 pointer-events-none opacity-20 z-0 hidden md:block"
      >
        <svg
          className="text-primary-container"
          fill="none"
          height="190"
          viewBox="0 0 220 190"
          width="220"
        >
          <pattern
            height="20"
            id="dot-grid-portfolio"
            patternUnits="userSpaceOnUse"
            width="20"
          >
            <circle cx="2.5" cy="2.5" fill="currentColor" r="2.5" />
          </pattern>
          <rect fill="url(#dot-grid-portfolio)" height="190" width="220" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-label-lg text-label-lg tracking-widest text-primary uppercase mb-2 block font-semibold">
            Selected Projects
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight">
            Featured Work &amp; Case Studies
          </h2>
        </motion.div>

        {/* Featured Hackathon Hero Project with whileHover glow and lift */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="bg-surface rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-[0_12px_32px_-8px_rgba(43,36,32,0.08)] transition-all duration-300 mb-14 border border-outline-variant/30 hover:border-primary-container/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Interactive CRM Project Mockup (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-surface-container to-surface-container-low rounded-2xl p-5 sm:p-6 shadow-md border border-outline-variant/30 flex flex-col gap-3.5 overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]/85"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/85"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]/85"></span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-surface border border-outline-variant/20 text-[11px] font-mono text-primary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  api/tickets/live
                </div>
              </div>

              {/* Simulated CRM Interface Cards */}
              <div className="space-y-2.5">
                {/* Simulated Ticket Row 1 */}
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/25 shadow-xs flex items-center justify-between gap-3 transition-transform duration-200 group-hover:translate-x-1">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#27c93f] shrink-0"></span>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-on-surface truncate">#1082 · Auth Handshake Resolved</p>
                      <p className="text-[11px] text-on-surface-variant">MongoDB Cluster · 1.2m triage</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-surface-container-high text-primary shrink-0">Resolved</span>
                </div>

                {/* Simulated Ticket Row 2 */}
                <div className="p-3 bg-surface rounded-xl border border-outline-variant/25 shadow-xs flex items-center justify-between gap-3 transition-transform duration-200 group-hover:translate-x-1 delay-75">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-on-surface truncate">#1083 · Webhook Queue Active</p>
                      <p className="text-[11px] text-on-surface-variant">Express Microservice · Live</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-primary-container/25 text-on-surface shrink-0">Active</span>
                </div>
              </div>

              {/* CRM Key Metrics Footer Bar */}
              <div className="pt-2 grid grid-cols-3 gap-2 border-t border-outline-variant/20 text-center">
                <div className="p-2 bg-surface rounded-lg border border-outline-variant/20">
                  <span className="block text-[10px] uppercase font-bold text-on-surface-variant">Resolution</span>
                  <span className="text-xs font-bold text-primary">98.4%</span>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-outline-variant/20">
                  <span className="block text-[10px] uppercase font-bold text-on-surface-variant">Latency</span>
                  <span className="text-xs font-bold text-on-surface">&lt;45ms</span>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-outline-variant/20">
                  <span className="block text-[10px] uppercase font-bold text-on-surface-variant">Stack</span>
                  <span className="text-xs font-bold text-primary">MERN</span>
                </div>
              </div>
            </div>

            {/* Project Information & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-block px-3.5 py-1 rounded-xl bg-primary-container text-on-primary-fixed font-label-sm text-label-sm font-bold tracking-wide mb-4">
                Full Stack — MERN
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                Orbit Support Flow
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Complete working full-stack hackathon project built with React, Node.js, Express, and
                MongoDB. Streamlined ticket triage and customer support workflow system engineered
                under competitive hackathon timelines.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-surface-container text-xs font-medium text-on-surface border border-outline-variant/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://orbit-support-flow-final-hackathon.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://github.com/Samavia-siddiqui/Orbit-Support-Flow-Final-Hackathon-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface-container text-on-surface font-label-lg text-label-lg font-bold px-5 py-3 rounded-xl hover:bg-surface-container-low transition-all duration-200 border border-outline-variant/30"
                >
                  <span>GitHub Repo</span>
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Projects Grid + GitHub Hub Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((proj) => {
            const IconComponent = proj.icon;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-surface rounded-2xl p-6 shadow-xs hover:shadow-[0_12px_28px_-8px_rgba(43,36,32,0.08)] transition-all duration-300 flex flex-col justify-between border border-outline-variant/30 hover:border-primary-container/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-sm text-label-sm text-primary font-bold tracking-wide">
                      {proj.category}
                    </span>
                    <IconComponent className="w-5 h-5 text-outline" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                    {proj.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-surface-container text-on-surface border border-outline-variant/15 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15 gap-2">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container/20 hover:bg-primary-container/35 text-on-surface font-semibold text-xs transition-all border border-primary-container/30"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-primary" />
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-xs transition-all border border-outline-variant/30"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-on-surface" />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* Section GitHub Hub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-container rounded-2xl p-6 shadow-xs flex flex-col justify-center items-center text-center border border-outline-variant/20 hover:border-primary-container/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
              Explore All Code
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 max-w-xs leading-relaxed">
              Discover experiments, hackathon modules, and open source frontend prototypes on my
              GitHub profile.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Samavia-siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface px-5 py-2.5 rounded-xl text-on-surface font-label-lg text-label-lg font-bold shadow-xs hover:shadow-md hover:bg-surface-container-lowest transition-all border border-outline-variant/30"
            >
              <span>Visit @Samavia-siddiqui</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Sub-section: GBOB Case Studies Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/30"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm tracking-wide text-primary font-bold">
                GBOB Outreach Operations
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
              Building Our First Case Studies
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Currently working with select Finance &amp; Tech clients to deliver DA 40–75 guest post
              placements and backlink acquisition campaigns. In-depth rankings and traffic case
              studies coming soon.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed px-6 py-3 rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all shrink-0 font-bold"
          >
            <span>Inquire for Outreach</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
