import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

/* Authentic brand SVG icons */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.98-1.002 1.23-.226.25-.451.276-.752.126-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.234-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.577-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.429-.075-.126-.276-.201-.577-.351z" />
      <path d="M12.004 2C6.48 2 2 6.478 2 12c0 1.765.46 3.488 1.332 5.006L2 22l5.13-1.345c1.472.802 3.13 1.345 4.874 1.345 5.523 0 10.003-4.478 10.003-10S17.527 2 12.004 2zm0 18.283c-1.547 0-3.06-.416-4.38-1.202l-.314-.187-3.255.854.869-3.173-.205-.328c-.86-1.373-1.314-2.969-1.314-4.607 0-4.664 3.794-8.458 8.458-8.458 4.665 0 8.459 3.794 8.459 8.458 0 4.664-3.794 8.458-8.459 8.458z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GithubBrandIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function EmailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'link-building',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

    if (!formspreeUrl) {
      setStatus('error');
      setErrorMessage('Formspree endpoint URL is not configured.');
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('service', formData.service);
      data.append('message', formData.message);

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          errorData.errors
            ? errorData.errors.map((err) => err.message).join(', ')
            : 'Something went wrong. Please try again or reach out via WhatsApp.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    }
  };

  return (
    <section
      className="relative w-full bg-surface-container-high py-20 lg:py-28 overflow-hidden"
      id="contact"
    >
      {/* Decorative Dot Grid Texture */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 w-64 h-64 pointer-events-none opacity-25 z-0"
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
            id="dot-grid-contact"
            patternUnits="userSpaceOnUse"
            width="20"
            x="0"
            y="0"
          >
            <circle cx="3" cy="3" fill="currentColor" r="2.5"></circle>
          </pattern>
          <rect fill="url(#dot-grid-contact)" height="240" width="240"></rect>
        </svg>
      </div>

      {/* Angled Floating Chevron Motif Top-Right (Angle: 38°) */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0], rotate: [38, 41, 38] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-10 w-72 h-44 pointer-events-none opacity-20 z-0 hidden md:block"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 300 160">
          <path
            d="M20 130 L150 25 L280 130"
            stroke="#E3A87C"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M45 150 L150 55 L255 150"
            stroke="#82542f"
            strokeDasharray="5 5"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-label-lg text-label-lg tracking-widest text-primary uppercase mb-2 block font-semibold">
            Initiate Collaboration
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-3 leading-relaxed">
            Have an engineering project in mind or need authoritative guest blog outreach? Send a
            message or connect directly via WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface rounded-2xl p-8 lg:p-10 shadow-sm border border-outline-variant/30">
            {status === 'success' ? (
              <div className="py-12 px-6 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-primary-container/30 text-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">
                  Message Delivered!
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                  Thanks! I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      service: 'link-building',
                      message: '',
                    });
                  }}
                  className="mt-8 inline-flex items-center justify-center font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold hover:underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="form-name"
                    className="block font-label-sm text-label-sm text-on-surface uppercase mb-2 font-semibold"
                  >
                    Your Name / Company
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-surface-container-low text-on-surface rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-container border border-outline-variant/30 transition-all placeholder:text-on-surface-variant/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-email"
                    className="block font-label-sm text-label-sm text-on-surface uppercase mb-2 font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-surface-container-low text-on-surface rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-container border border-outline-variant/30 transition-all placeholder:text-on-surface-variant/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-service"
                    className="block font-label-sm text-label-sm text-on-surface uppercase mb-2 font-semibold"
                  >
                    Service Interest
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low text-on-surface rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-container border border-outline-variant/30 transition-all font-medium cursor-pointer"
                  >
                    <option value="link-building">SEO Link Building &amp; Guest Posts (GBOB)</option>
                    <option value="mern-app">Full Stack Web Development (MERN)</option>
                    <option value="landing-page">Landing Page / UI Redesign</option>
                    <option value="general">Other Inquiries</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block font-label-sm text-label-sm text-on-surface uppercase mb-2 font-semibold"
                  >
                    Project Scope &amp; Goals
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your tech requirements, target metrics, or timeline..."
                    className="w-full bg-surface-container-low text-on-surface rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-container border border-outline-variant/30 transition-all placeholder:text-on-surface-variant/50 leading-relaxed"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-error-container/40 text-on-error-container text-body-sm flex items-start gap-3 border border-error/30 animate-in fade-in">
                    <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                    <span>{errorMessage || 'Failed to submit form. Please try again.'}</span>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 rounded-xl bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Direct Message'}</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>

          {/* Right: Stacked Contact Info & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct WhatsApp Channel Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant/30 hover:border-primary-container/50"
            >
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold block mb-2 tracking-wider">
                Fastest Response
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">
                Direct WhatsApp Chat
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Connect instantly for real-time outreach inquiries, pricing quotes, or development sprints.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/923130080742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-label-lg text-label-lg py-3.5 px-6 rounded-xl shadow-xs hover:shadow-md hover:bg-[#20ba5a] transition-all font-bold"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>+92 313 0080742</span>
              </motion.a>
            </motion.div>

            {/* Email & Social Channels Card */}
            <div className="bg-surface rounded-2xl p-8 shadow-sm space-y-6 border border-outline-variant/30">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold block mb-2 tracking-wider">
                  Email Address
                </span>
                <a
                  href="mailto:samaviasiddiqui3@gmail.com"
                  className="font-body-lg text-body-lg text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-2.5 break-all group"
                >
                  <span className="p-2 rounded-lg bg-surface-container text-primary group-hover:scale-110 transition-transform">
                    <EmailIcon className="w-4 h-4" />
                  </span>
                  <span>samaviasiddiqui3@gmail.com</span>
                </a>
              </div>

              <div className="pt-4 border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold block mb-3 tracking-wider">
                  Professional Profiles
                </span>

                <div className="flex flex-col gap-3">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="https://linkedin.com/in/samavia-siddiqui-398322381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-body-sm group border border-outline-variant/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#0A66C2]">
                        <LinkedInIcon className="w-5 h-5" />
                      </span>
                      <span className="font-medium">LinkedIn Profile</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href="https://github.com/Samavia-siddiqui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-body-sm group border border-outline-variant/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#1e1b16]">
                        <GithubBrandIcon className="w-5 h-5" />
                      </span>
                      <span className="font-medium">GitHub Repositories</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href="https://www.instagram.com/samavia_speaks/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-body-sm group border border-outline-variant/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#E4405F]">
                        <InstagramIcon className="w-5 h-5" />
                      </span>
                      <span className="font-medium">Instagram</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
