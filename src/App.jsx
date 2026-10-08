import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgress } from './components/ScrollProgress';

export function PortfolioContent() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0A0F1D] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500/20 selection:text-brand-500">
      {/* Scroll-Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Ambient Canvas Mesh & Aurora Background */}
      <AnimatedBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onCopyToast={(msg) => showToast(msg, 'info')} />

        {/* Engineering Philosophy / About */}
        <About />

        {/* Technical Skills Category Cards & Search */}
        <Skills />

        {/* Professional Experience Timeline */}
        <Experience />

        {/* Featured Projects with Category Tabs */}
        <Projects />

        {/* Academic Credentials & Core Ethics */}
        <Education />

        {/* Contact Form & Quick Copy Chips */}
        <Contact onToast={(msg) => showToast(msg, 'success')} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Toast Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
