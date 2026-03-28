import { motion } from 'motion/react';
import { Building2, Users, Target, History } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '1994', title: 'Gründung', description: 'Die SALCO Group wird in Langen gegründet.' },
    { year: '2005', title: 'Expansion', description: 'Erweiterung des Portfolios auf Gewerbeimmobilien.' },
    { year: '2015', title: 'Meilenstein', description: 'Fertigstellung des 100. Bauprojekts im Rhein-Main-Gebiet.' },
    { year: 'Heute', title: 'Zukunft', description: 'Fokus auf nachhaltiges Bauen und smarte Wohnkonzepte.' },
  ];

  const values = [
    { icon: <Building2 size={32} />, title: 'Qualität', description: 'Kompromisslose Bauqualität und hochwertige Materialien.' },
    { icon: <Users size={32} />, title: 'Partnerschaft', description: 'Langfristige Beziehungen zu Kunden und Partnern.' },
    { icon: <Target size={32} />, title: 'Zuverlässigkeit', description: 'Termintreue und Kostensicherheit bei jedem Projekt.' },
  ];

  return (
    <div className="bg-[var(--color-salco-bg)] min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-salco-navy)] mb-6"
          >
            Über SALCO
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
            Seit über drei Jahrzehnten prägen wir die Immobilienlandschaft im Rhein-Main-Gebiet mit 
            innovativen Konzepten und zeitloser Architektur.
          </motion.p>
        </div>
      </section>

      {/* Image & Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="SALCO Bürogebäude"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[var(--color-salco-navy)] p-8 text-white hidden md:block">
              <p className="font-serif text-5xl text-[var(--color-salco-gold)] mb-2">30+</p>
              <p className="uppercase tracking-widest text-sm font-medium">Jahre Erfahrung</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-slate text-[var(--color-salco-text)]"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-6">
              Tradition trifft Innovation
            </h2>
            <p className="lead text-xl text-[var(--color-salco-muted)] mb-6">
              Als inhabergeführtes Familienunternehmen verbinden wir hanseatische Kaufmannstugenden 
              mit modernster Bautechnologie.
            </p>
            <p className="mb-6">
              Unser Anspruch ist es, nicht nur Wohnraum zu schaffen, sondern Werte für Generationen. 
              Jedes SALCO-Projekt ist ein Unikat, das sich harmonisch in seine Umgebung einfügt und 
              gleichzeitig architektonische Akzente setzt.
            </p>
            <p>
              Von der Grundstücksakquise über die Planung und Bauausführung bis hin zur schlüsselfertigen 
              Übergabe und anschließenden Verwaltung – wir bieten alle Leistungen aus einer Hand. 
              Das garantiert unseren Kunden höchste Qualität, Kostensicherheit und Termintreue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-salco-navy)] py-24 text-white mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Unsere Werte</h2>
            <div className="w-16 h-1 bg-[var(--color-salco-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[var(--color-salco-gold)] mb-6">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-6">
            Unsere Geschichte
          </h2>
          <div className="w-16 h-1 bg-[var(--color-salco-gold)] mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 bg-white border-4 border-[var(--color-salco-gold)] rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                <span className="font-serif text-3xl text-[var(--color-salco-navy)]">{item.year}</span>
                <h3 className="text-xl font-medium text-[var(--color-salco-text)]">{item.title}</h3>
              </div>
              <p className="text-[var(--color-salco-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
