import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Jobs() {
  const jobs = [
    { title: 'Bauleiter (m/w/d)', type: 'Vollzeit', location: 'Langen', department: 'Bauleitung' },
    { title: 'Projektentwickler (m/w/d)', type: 'Vollzeit', location: 'Langen', department: 'Projektentwicklung' },
    { title: 'Architekt (m/w/d)', type: 'Vollzeit', location: 'Langen', department: 'Planung' },
    { title: 'Immobilienkaufmann (m/w/d)', type: 'Vollzeit', location: 'Langen', department: 'Vertrieb' },
  ];

  return (
    <div className="bg-[var(--color-salco-bg)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-salco-navy)] mb-6"
          >
            Karriere bei SALCO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-[var(--color-salco-gold)] mx-auto mb-8 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[var(--color-salco-muted)] leading-relaxed"
          >
            Werden Sie Teil eines dynamischen Teams und gestalten Sie mit uns die Immobilienlandschaft 
            im Rhein-Main-Gebiet. Wir suchen engagierte Talente, die unsere Leidenschaft für Immobilien teilen.
          </motion.p>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-[var(--color-salco-navy)] mb-8">Offene Stellen</h2>
          
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[var(--color-salco-gold)] transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-medium text-[var(--color-salco-navy)] mb-2 group-hover:text-[var(--color-salco-gold)] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-salco-muted)]">
                    <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--color-salco-navy)] group-hover:text-[var(--color-salco-gold)] transition-colors">
                  Details ansehen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--color-salco-navy)] text-white p-12 md:p-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Initiativbewerbung</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Keine passende Stelle dabei? Wir sind immer auf der Suche nach talentierten und motivierten Mitarbeitern.
          </p>
          <a
            href="mailto:karriere@salco-group.com"
            className="inline-block px-8 py-4 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] font-medium uppercase tracking-wider hover:bg-white transition-colors"
          >
            Jetzt bewerben
          </a>
        </div>
      </div>
    </div>
  );
}
