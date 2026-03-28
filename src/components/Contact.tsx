import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-4">
              Kontaktieren Sie uns
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              Lassen Sie uns über <br />
              <span className="text-slate-400">Ihr neues Zuhause</span> sprechen.
            </h3>
            <p className="text-lg text-slate-300 mb-12 font-light max-w-md leading-relaxed">
              Haben Sie Fragen zu unseren aktuellen Projekten oder interessieren Sie sich für eine Immobilie? 
              Wir freuen uns auf Ihre Nachricht.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Besuchen Sie uns</h4>
                  <p className="text-slate-400 leading-relaxed">
                    SALCO Group GmbH<br />
                    Musterstraße 123<br />
                    60311 Frankfurt am Main
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rufen Sie an</h4>
                  <p className="text-slate-400 leading-relaxed">
                    +49 (0) 69 123 456 78<br />
                    Mo-Fr, 09:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Schreiben Sie uns</h4>
                  <p className="text-slate-400 leading-relaxed">
                    info@salco-group.com<br />
                    vertrieb@salco-group.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-300 uppercase tracking-wider">Vorname</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Max"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-300 uppercase tracking-wider">Nachname</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 uppercase tracking-wider">E-Mail Adresse</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="max@beispiel.de"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-slate-300 uppercase tracking-wider">Interesse an Projekt</label>
                <select
                  id="project"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Bitte wählen...</option>
                  <option value="wilhelm" className="bg-slate-900">Das Wilhelm Quartier, Lampertheim</option>
                  <option value="friedrichsdorf" className="bg-slate-900">Neubau, Friedrichsdorf</option>
                  <option value="balu" className="bg-slate-900">Ba'Lu Gemütlichkeit, Langen</option>
                  <option value="amselpark" className="bg-slate-900">Der Amselpark, Lampertheim</option>
                  <option value="stadtquartier" className="bg-slate-900">SALCO Stadtquartier, Langen</option>
                  <option value="altepost" className="bg-slate-900">B26...Die alte Post, Langen</option>
                  <option value="t1" className="bg-slate-900">T1 - Wohnen, Egelsbach</option>
                  <option value="waldrand" className="bg-slate-900">Wohnen am Waldrand, Langen</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 uppercase tracking-wider">Ihre Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Nachricht senden
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
