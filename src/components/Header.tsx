import { TabType } from '../types';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import KickLogo from './KickLogo';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { id: TabType; label: string; desc: string }[] = [
    { id: 'home', label: 'Home', desc: 'Welcome page & core mission' },
    { id: 'about', label: 'Our Shared Mission', desc: 'Who we are and our background' },
    { id: 'information', label: 'Information', desc: 'Childhood cancer information resources' },
    { id: 'volunteer', label: 'Volunteer', desc: 'Dedicate your time & get involved' },
  ];

  const activeItem = navItems.find((item) => item.id === activeTab) || navItems[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Active Tab Dropdown Selector (Top Left) */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="active-section-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 -ml-3 rounded-xl hover:bg-neutral-50 active:bg-neutral-100 transition-all text-left focus:outline-hidden group cursor-pointer select-none"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider leading-none mb-0.5">
                  Section
                </span>
                <span className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight flex items-center gap-1.5 leading-none">
                  {activeItem.label}
                  <ChevronDown className={`w-5 h-5 text-neutral-400 group-hover:text-yellow-500 transition-transform duration-250 ${dropdownOpen ? 'rotate-180 text-yellow-500' : ''}`} />
                </span>
              </div>
            </button>

            {/* Floating Dropdown Navigation Menu */}
            {dropdownOpen && (
              <>
                {/* Backdrop to dismiss on click anywhere */}
                <div 
                  className="fixed inset-0 z-40 bg-transparent" 
                  onClick={() => setDropdownOpen(false)} 
                />
                
                <div className="absolute left-0 mt-3 w-72 rounded-2xl bg-white border border-neutral-150 shadow-xl py-2.5 z-50 animate-fade-in origin-top-left overflow-hidden">
                  <div className="px-4 py-2 border-b border-neutral-50 flex items-center justify-between bg-neutral-50/50">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Navigation Menu</span>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                  </div>
                  <div className="p-1 px-2 space-y-1">
                    {navItems.map((item) => {
                      const isActive = item.id === activeTab;
                      return (
                        <button
                          key={item.id}
                          id={`dropdown-item-${item.id}`}
                          onClick={() => {
                            setActiveTab(item.id);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-xl flex flex-col transition-all cursor-pointer ${
                            isActive
                              ? 'bg-yellow-400/15 text-neutral-950 border border-yellow-400/35'
                              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="font-extrabold text-sm">{item.label}</span>
                            {isActive && (
                              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            )}
                          </div>
                          <span className="text-[11px] text-neutral-400 group-hover:text-neutral-500 font-normal leading-normal mt-0.5">
                            {item.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Logo & Branding (Top Right) */}
          <button 
            onClick={() => { setActiveTab('home'); setDropdownOpen(false); }}
            className="flex items-center gap-3 group focus:outline-hidden text-right focus:ring-0 cursor-pointer"
            id="logo-brand-btn"
          >
            <div className="flex flex-col select-none leading-none pt-0.5">
              <span className="text-[17px] font-black uppercase tracking-wider text-neutral-950 text-right">
                K.I.C.K
              </span>
              <span className="text-[14px] font-bold uppercase tracking-widest text-yellow-550 text-right">
                CANCER
              </span>
            </div>
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-neutral-200 group-hover:border-yellow-400 transition-colors bg-white flex items-center justify-center p-1 shrink-0 shadow-xs">
              <KickLogo className="w-full h-full" fillColor="#171717" ribbonColor="#eab308" />
            </div>
          </button>

        </div>
      </div>
    </header>
  );
}
