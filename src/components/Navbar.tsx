import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projekte', href: '/projekte' },
    { name: 'Unternehmen', href: '/unternehmen' },
    { name: 'Maklerservice', href: '/makler' },
    { name: 'Ankaufsprofil', href: '/ankaufsprofil' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Determine if we are on a page where the hero is dark
  const isHome = location.pathname === '/';
  const isProjectDetail = location.pathname.startsWith('/projekte/');
  const isDarkBg = (isHome || isProjectDetail) && !isScrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(
              'text-2xl font-bold tracking-tighter',
              isDarkBg ? 'text-white' : 'text-[var(--color-salco-navy)]'
            )}>
              SALCO
            </span>
            <span className={cn(
              'text-sm font-medium tracking-widest uppercase mt-1',
              isDarkBg ? 'text-white/80' : 'text-[var(--color-salco-gold)]'
            )}>
              Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[var(--color-salco-gold)]',
                  isDarkBg ? 'text-white/90' : 'text-[var(--color-salco-text)]',
                  location.pathname === link.href && !isDarkBg && 'text-[var(--color-salco-navy)] font-semibold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isDarkBg ? 'text-white' : 'text-[var(--color-salco-navy)]'} size={24} />
            ) : (
              <Menu className={isDarkBg ? 'text-white' : 'text-[var(--color-salco-navy)]'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-4 text-base font-medium text-[var(--color-salco-text)] border-b border-slate-100 last:border-0 hover:text-[var(--color-salco-gold)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
