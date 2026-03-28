import { motion } from 'motion/react';
import { MapPin, Home, Building, FileText } from 'lucide-react';

export default function Ankaufsprofil() {
  const criteria = [
    { icon: <MapPin size={32} />, title: 'Standorte', description: 'Rhein-Main-Gebiet, bevorzugt Frankfurt, Offenbach, Darmstadt, Wiesbaden, Mainz und Speckgürtel.' },
    { icon: <Home size={32} />, title: 'Grundstücke', description: 'Bebaute und unbebaute Grundstücke ab 500 m² für Wohn- und Gewerbebau.' },
    { icon: <Building size={32} />, title: 'Bestandsobjekte', description: 'Mehrfamilienhäuser, Wohnanlagen, Bürogebäude mit Entwicklungspotenzial oder Sanierungsbedarf.' },
    { icon: <FileText size={32} />, title: 'Projektentwicklungen', description: 'Projekte in allen Planungsphasen, auch mit bestehendem Baurecht.' },
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
            Ankaufsprofil
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
            Wir sind ständig auf der Suche nach neuen Grundstücken und Immobilien im Rhein-Main-Gebiet 
            zur Erweiterung unseres Portfolios und für neue Projektentwicklungen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 border border-slate-100 shadow-sm flex gap-6"
            >
              <div className="text-[var(--color-salco-gold)] shrink-0">
                {criterion.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[var(--color-salco-navy)] mb-4">{criterion.title}</h3>
                <p className="text-[var(--color-salco-muted)] leading-relaxed">{criterion.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[var(--color-salco-navy)] text-white p-12 md:p-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Sie haben ein passendes Angebot?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Wir garantieren eine schnelle, diskrete und professionelle Prüfung Ihres Angebots sowie eine zügige Kaufabwicklung.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-4 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] font-medium uppercase tracking-wider hover:bg-white transition-colors"
          >
            Angebot einreichen
          </a>
        </div>
      </div>
    </div>
  );
}
