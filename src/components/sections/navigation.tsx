"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { TailwindConnectButton } from '@/components/ui/tailwind-connect-button';

const navItems = [
  { label: 'HOME', href: '/' },
  {
    label: 'SOLUTIONS',
    href: '/#solutions',
    isDropdown: true,
    dropdownItems: [{ label: 'GhostHost™', href: '/ghosthost' }],
  },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CLIENT SUCCESS', href: '/client-success' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={mobile ? 'flex flex-col items-center space-y-6' : 'hidden lg:flex items-center gap-8'}>
      {navItems.map((item, index) =>
        item.isDropdown ? (
          <div 
            key={item.label} 
            className="relative group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Link 
              href={item.href} 
              className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.05em] text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {item.label}
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 hidden group-hover:block bg-card rounded-md shadow-lg w-40 z-10 border border-border animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="py-2">
                {item.dropdownItems?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.label}
                    href={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition-all duration-200 whitespace-nowrap hover:translate-x-1"
                  >
                    {dropdownItem.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium uppercase tracking-[0.05em] text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            onClick={() => mobile && setIsMenuOpen(false)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {item.label}
          </Link>
        )
      )}
      {mobile && (
        <TailwindConnectButton
          href="/submit-form"
          className="text-base font-semibold leading-none tracking-[0.02em] py-2 px-6"
        >
          Book a call
        </TailwindConnectButton>
      )}
    </nav>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-primary shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-[0_8px_24px_rgba(0,0,0,0.6)]' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-20">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-20' : 'h-28'
        }`}>
          <Link 
            href="/" 
            aria-label="home" 
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Logo className={`h-auto transition-all duration-300 ease-in-out ${
              isScrolled ? 'w-[140px] sm:w-[160px] md:w-[180px]' : 'w-[160px] sm:w-[200px] md:w-[220px]'
            }`} />
          </Link>

          <NavLinks />

          <div className="hidden lg:block">
            <TailwindConnectButton
              href="/submit-form"
              className="text-base md:text-lg font-extrabold leading-none tracking-[0.02em] py-2 md:py-2.5 lg:py-3 px-6 md:px-8 lg:px-10"
            >
              Book a call
            </TailwindConnectButton>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden absolute left-0 w-full bg-card py-8 border-t-4 border-primary shadow-[0_4px_16px_rgba(0,0,0,0.5)] animate-in slide-in-from-top-2 fade-in duration-300 ${
          isScrolled ? 'top-20' : 'top-28'
        }`}>
           <NavLinks mobile />
        </div>
      )}
    </header>
  );
}