import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Loader2, 
  MessageSquare 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Contact = ({ onToast }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  // Copy helper
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    if (onToast) {
      onToast(`Copied ${label} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }

      if (onToast) {
        onToast('Message sent successfully! Mehtab will reply promptly.');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Viewport Entrance */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 text-xs font-mono font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>LET'S CONNECT</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Get In Touch & Explore Opportunities
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Open to senior engineering roles, architectural consultations, and high-impact web & mobile engineering discussions.
          </motion.p>
        </motion.div>

        {/* 2-Column Layout: Contact Chips & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Chips & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <SpotlightCard
              tiltMax={5}
              spotlightSize={280}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Click any chip to copy instantly or tap to initiate communication.
              </p>

              <div className="space-y-4">
                {/* Email Chip */}
                <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 group hover:border-brand-500 transition-colors">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold">
                        Email Address
                      </p>
                      <p className="text-sm font-bold font-mono tracking-tight">
                        {personal.email}
                      </p>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(personal.email, 'Email')}
                    type="button"
                    title="Copy Email"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                  >
                    {copiedItem === 'Email' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Chip */}
                <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 group hover:border-brand-500 transition-colors">
                  <a
                    href={`tel:${personal.phone}`}
                    className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold">
                        Phone / WhatsApp
                      </p>
                      <p className="text-sm font-bold font-mono tracking-tight">
                        {personal.phone}
                      </p>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(personal.phone, 'Phone')}
                    type="button"
                    title="Copy Phone Number"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                  >
                    {copiedItem === 'Phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Chip */}
                <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 group hover:border-brand-500 transition-colors">
                  <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold">
                        Location Base
                      </p>
                      <p className="text-sm font-bold tracking-tight">
                        {personal.location}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {personal.address}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.address, 'Address')}
                    type="button"
                    title="Copy Full Address"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                  >
                    {copiedItem === 'Address' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Networking Profile Cards */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                  Online Profiles:
                </span>
                <div className="flex items-center gap-2">
                  <MagneticButton
                    as="a"
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors inline-flex items-center justify-center cursor-pointer"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center justify-center cursor-pointer"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>

            </SpotlightCard>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              tiltMax={4}
              spotlightSize={320}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl"
            >
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3 animate-fade-in">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold">Message Dispatched!</p>
                    <p className="text-xs opacity-90">Thank you for reaching out. Mehtab will review your note and respond shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-800/80 border ${
                        errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-800/80 border ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Project Context <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Senior Frontend Engineer Opportunity at Acme Corp"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-800/80 border ${
                      errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500'
                    } text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 mt-1 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hi Mehtab, we were impressed by your work on the Indilink logistics portal and ProX PC configurator..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-800/80 border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500'
                    } text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button with Magnetic Pull */}
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 active:translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </MagneticButton>

              </form>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
