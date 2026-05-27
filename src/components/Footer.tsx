import { TabType } from '../types';
import { Heart } from 'lucide-react';
import KickLogo from './KickLogo';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Core footer layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-neutral-200 bg-white flex items-center justify-center p-1 shrink-0 shadow-xs">
              <KickLogo className="w-full h-full" fillColor="#171717" ribbonColor="#eab308" />
            </div>
            <div className="flex flex-col select-none leading-none">
              <span className="text-[14px] font-black uppercase tracking-wider text-neutral-950">
                K.I.C.K
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-550">
                CANCER
              </span>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6 justify-center text-sm font-semibold text-neutral-500">
            <button id="footer-link-home" onClick={() => setActiveTab('home')} className="hover:text-yellow-550 transition-colors cursor-pointer">Home</button>
            <button id="footer-link-about" onClick={() => setActiveTab('about')} className="hover:text-yellow-550 transition-colors cursor-pointer">Our Shared Mission</button>
            <button id="footer-link-info" onClick={() => setActiveTab('information')} className="hover:text-yellow-550 transition-colors cursor-pointer">Information</button>
            <button id="footer-link-volunteer" onClick={() => setActiveTab('volunteer')} className="hover:text-yellow-550 transition-colors cursor-pointer">Volunteer</button>
          </nav>
        </div>

        {/* Informative legal & tag message */}
        <div className="border-t border-neutral-50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-400">
          <p>© {currentYear} K.I.C.K. CANCER Initiative. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Our Shared Mission</span>
            <Heart className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
