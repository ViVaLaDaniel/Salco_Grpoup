import { motion } from 'motion/react';
import { Handshake, Search, Home, Key } from 'lucide-react';

export default function Makler() {
  const services = [
    { icon: <Search size={32} />, title: 'Marktwertermittlung', description: 'Fundierte und realistische Einschätzung Ihrer Immobilie.' },
    { icon: <Home size={32} />, title: 'Vermarktung', description: 'Professionelle Präsentation und zielgruppengenaue Ansprache.' },
    { icon: <Handshake size={32} />, title: 'Verhandlung', description: 'Sichere Führung von Verkaufsgesprächen bis zum Notartermin.' },
    { icon: <Key size={32} />, title: 'Übergabe', description: 'Reibungslose Abwicklung und Betreuung auch nach dem Verkauf.' },
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
            Maklerservice
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
            Vertrauen Sie auf unsere Expertise beim Verkauf oder der Vermietung Ihrer Immobilie. 
            Wir kennen den Markt im Rhein-Main-Gebiet wie kaum ein anderer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border-t-4 border-[var(--color-salco-gold)] shadow-sm text-center"
            >
              <div className="text-[var(--color-salco-navy)] mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-salco-navy)] mb-4">{service.title}</h3>
              <p className="text-[var(--color-salco-muted)]">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[var(--color-salco-navy)] text-white p-12 md:p-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Sie möchten Ihre Immobilie verkaufen?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch und eine kostenlose Marktwertermittlung.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-4 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] font-medium uppercase tracking-wider hover:bg-white transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
}
