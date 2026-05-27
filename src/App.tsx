/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TabType } from './types';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import InformationSection from './components/InformationSection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Calculate and update the top scroll progress loading bar
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (window.scrollY / docHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Track which section is active as the user scrolls using IntersectionObserver
  useEffect(() => {
    const sections: TabType[] = ['home', 'about', 'information', 'volunteer'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(id);
          }
        },
        {
          // Triggers when section occupies the visual center third of screen
          rootMargin: '-25% 0px -25% 0px',
          threshold: 0.1,
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  // 3. Command a smooth scroll jump to clicked navigation ID
  const handleScrollToSection = (tab: TabType) => {
    // Temporarily set active tab highlight
    setActiveTab(tab);
    
    const element = document.getElementById(tab);
    if (element) {
      // Offset scrolling slightly to account for the sticky header height
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50/40 text-neutral-900 selection:bg-yellow-200 selection:text-neutral-950 relative">
      
      {/* 4. Top Scroll progress loading bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-yellow-300 to-yellow-500 z-[9999] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Modern sticky navigation header */}
      <Header activeTab={activeTab} setActiveTab={handleScrollToSection} />

      {/* Single-page scrollable stream */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        
        {/* Home Section */}
        <section id="home" className="scroll-mt-24">
          <HomeSection scrollToSection={handleScrollToSection} />
        </section>

        {/* About & Meet the Team Section */}
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        {/* Information Section */}
        <section id="information" className="scroll-mt-24">
          <InformationSection />
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="scroll-mt-24">
          <VolunteerSection />
        </section>

      </main>

      {/* Page Footer */}
      <Footer setActiveTab={handleScrollToSection} />
    </div>
  );
}
