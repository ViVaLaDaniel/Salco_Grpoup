import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-salco-navy)] text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                SALCO
              </span>
              <span className="text-sm font-medium tracking-widest uppercase mt-1 text-[var(--color-salco-gold)]">
                Group
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8 font-serif italic text-white/80">
              "Wir bauen Zukunft"
            </p>
            <div className="space-y-2 text-sm">
              <p>Bahnstraße 26</p>
              <p>63225 Langen (Hessen)</p>
              <p className="pt-2">+49 (0) 6103 903830</p>
              <p>office@salco-group.com</p>
            </div>
          </div>

          {/* Projekte */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Projekte</h4>
            <ul className="space-y-4">
              <li><Link to="/projekte?stadt=Langen" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Langen</Link></li>
              <li><Link to="/projekte?stadt=Lampertheim" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Lampertheim</Link></li>
              <li><Link to="/projekte?stadt=Friedrichsdorf" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Friedrichsdorf</Link></li>
              <li><Link to="/projekte?stadt=Egelsbach" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Egelsbach</Link></li>
            </ul>
          </div>

          {/* Themen */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Themen</h4>
            <ul className="space-y-4">
              <li><Link to="/makler" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Haus verkaufen</Link></li>
              <li><Link to="/makler" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Wohnung kaufen</Link></li>
              <li><Link to="/ankaufsprofil" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Grundstück anbieten</Link></li>
              <li><Link to="/projekte" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Neubauprojekte</Link></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Unternehmen</h4>
            <ul className="space-y-4">
              <li><Link to="/unternehmen" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Über uns</Link></li>
              <li><Link to="/jobs" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Karriere</Link></li>
              <li><Link to="/impressum" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-[var(--color-salco-gold)] transition-colors text-sm">Datenschutz</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wider text-white/60">
            &copy; {new Date().getFullYear()} SALCO Group — Gesellschaft für Projektentwicklung und Baumanagement mbH
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-[var(--color-salco-gold)] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--color-salco-gold)] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--color-salco-gold)] transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
