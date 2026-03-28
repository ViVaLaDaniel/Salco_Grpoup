import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                SALCO
              </span>
              <span className="text-sm font-medium tracking-widest uppercase mt-1 text-amber-500">
                Group
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              Ihr Partner für exklusive Immobilien rund um Frankfurt. 
              Wir planen für Menschen, nicht um Sie herum.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Unternehmen</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-amber-500 transition-colors text-sm">Über uns</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors text-sm">Projekte</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors text-sm">Karriere</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors text-sm">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Rechtliches</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors text-sm">Impressum</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors text-sm">Datenschutz</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors text-sm">AGB</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors text-sm">Cookie-Richtlinie</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wider">
            &copy; {new Date().getFullYear()} SALCO Group GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs tracking-wider flex items-center gap-1">
            Designed with <span className="text-amber-500">♥</span> in Frankfurt
          </p>
        </div>
      </div>
    </footer>
  );
}
