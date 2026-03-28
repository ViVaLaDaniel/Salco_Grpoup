import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('salco_cookie_consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('salco_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('salco_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white border-t-4 border-[var(--color-salco-gold)] shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-[var(--color-salco-muted)] hover:text-[var(--color-salco-navy)] transition-colors"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
            
            <div className="flex-1 pr-8">
              <h3 className="font-serif text-xl text-[var(--color-salco-navy)] mb-2">Ihre Privatsphäre ist uns wichtig</h3>
              <p className="text-sm text-[var(--color-salco-muted)] leading-relaxed">
                Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis auf unserer Website zu bieten. 
                Einige davon sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
                Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="underline hover:text-[var(--color-salco-gold)]">Datenschutzerklärung</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 border border-slate-200 text-[var(--color-salco-navy)] text-sm font-medium uppercase tracking-wider hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                Nur essenzielle
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-[var(--color-salco-navy)] text-white text-sm font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
