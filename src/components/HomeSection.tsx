import { motion } from 'motion/react';
import { KICK_ACRONYM } from '../data';
import { TabType } from '../types';
import { ArrowRight, Heart, Award, Sparkles } from 'lucide-react';

interface HomeSectionProps {
  scrollToSection: (tab: TabType) => void;
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  // Container animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="space-y-24 py-4">
      {/* Centered Hero Header */}
      <section className="text-center max-w-4xl mx-auto space-y-8 px-4 sm:px-6 flex flex-col items-center justify-center">

        {/* Centered Title */}
        <div className="space-y-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight animate-fade-in"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-amber-500 to-amber-600">
                K.I.C.K. Cancer
              </span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-amber-400/25 -rotate-1 z-0 rounded-sm" />
            </span>
          </motion.h1>

          {/* Core Quote in the literal center */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 max-w-2xl mx-auto flex flex-col items-center justify-center"
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-neutral-700 leading-relaxed py-3">
              Kicking Cancer as a Community.
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="h-0.5 w-8 bg-amber-400 rounded-sm" />
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span className="h-0.5 w-8 bg-amber-400 rounded-sm" />
            </div>
          </motion.div>
        </div>

        {/* Center actions */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection('information')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-amber-400 text-neutral-950 transition-all hover:bg-amber-300 active:scale-98 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
          >
            Learn & Live
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-neutral-900 border border-neutral-200 transition-all hover:bg-neutral-50 hover:border-neutral-300 active:scale-98 cursor-pointer"
          >
            About & Team
          </button>
        </motion.div>
      </section>

      {/* Styled Ribbon Banner */}
      <section className="relative overflow-hidden rounded-3xl yellow-gradient bg-amber-400 text-neutral-950 p-8 sm:p-12 mx-4 sm:mx-6 lg:mx-8 yellow-glow">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12 scale-150">
          <Award className="w-96 h-96" />
        </div>
        <div className="relative max-w-3xl z-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">The Golden Ribbon Campaign</h2>
          <p className="text-neutral-900 text-base sm:text-lg max-w-2xl font-semibold leading-relaxed">
            Gold is the international color of childhood cancer awareness. Unlike adults, children cannot fight these battles on their own. Our gold ribbon symbolizes extreme strength, resilience, and the radiant hope of children facing treatments.
          </p>
        </div>
      </section>

      {/* Centered K.I.C.K. Acronym Display */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-neutral-150 rounded-3xl p-10 sm:p-14 text-center space-y-4 shadow-xs relative overflow-hidden flex flex-col items-center justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">What K.I.C.K. Stands For</span>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-2">
            <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 to-amber-500 select-none tracking-tight">
              K.I.C.K.
            </span>
            <div className="hidden md:block w-px h-14 bg-neutral-200" />
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight capitalize">
              Kids in chemo kits
            </span>
          </div>
        </div>
      </section>

      {/* Prominent Bottom Quote Display */}
      <section className="text-center pt-12 pb-4">
        <p className="font-serif italic text-3xl sm:text-4xl text-neutral-800 leading-relaxed font-semibold">
          Kicking Cancer as a Community.
        </p>
        <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mt-3 flex items-center justify-center gap-1.5">
          <span>Our Shared Mission</span>
        </p>
      </section>
    </div>
  );
}
