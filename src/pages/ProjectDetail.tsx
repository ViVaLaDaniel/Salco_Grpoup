import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Calendar, Building, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { projects } from '../lib/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-salco-bg)] pt-32">
        <h1 className="text-4xl font-serif text-[var(--color-salco-navy)] mb-4">Projekt nicht gefunden</h1>
        <p className="text-[var(--color-salco-muted)] mb-8">Das gesuchte Projekt existiert leider nicht.</p>
        <Link
          to="/projekte"
          className="px-6 py-3 bg-[var(--color-salco-navy)] text-white font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-salco-bg)] min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end overflow-hidden bg-[var(--color-salco-dark)]">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-salco-dark)] via-[var(--color-salco-dark)]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors uppercase tracking-wider text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Alle Projekte
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] text-xs font-bold uppercase tracking-widest shadow-sm">
              {project.status}
            </span>
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-sm">
              {project.type}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight"
          >
            {project.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2 text-lg text-white/80"
          >
            <MapPin size={20} className="text-[var(--color-salco-gold)]" />
            {project.city}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-6">
                Projektbeschreibung
              </h2>
              <div className="w-16 h-1 bg-[var(--color-salco-gold)] mb-8"></div>
              
              <div className="prose prose-lg prose-slate text-[var(--color-salco-text)] max-w-none">
                <p className="lead text-xl text-[var(--color-salco-muted)] mb-6">
                  Das Projekt {project.title} in {project.city} repräsentiert moderne Architektur und höchste Bauqualität. 
                  Mit {project.units} schaffen wir neuen, lebenswerten Raum in attraktiver Lage.
                </p>
                <p className="mb-6">
                  Unsere Philosophie bei SALCO Group ist es, nicht nur Gebäude zu errichten, sondern nachhaltige Lebensräume 
                  zu gestalten. Dieses Projekt zeichnet sich durch eine durchdachte Raumaufteilung, hochwertige Materialien 
                  und eine energieeffiziente Bauweise aus.
                </p>
                <p>
                  Die zentrale Lage in {project.city} bietet eine hervorragende Infrastruktur. Einkaufsmöglichkeiten, 
                  Schulen und öffentliche Verkehrsmittel sind in wenigen Minuten erreichbar. Gleichzeitig lädt die 
                  Umgebung zur Erholung im Grünen ein.
                </p>
              </div>

              <div className="mt-16">
                <h3 className="font-serif text-2xl text-[var(--color-salco-navy)] mb-6">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Hochwertige Ausstattung',
                    'Energieeffiziente Bauweise (KfW 55)',
                    'Tiefgaragenstellplätze',
                    'Fußbodenheizung',
                    'Elektrische Rollläden',
                    'Moderne Bäder mit bodengleichen Duschen'
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--color-salco-text)]">
                      <CheckCircle2 className="text-[var(--color-salco-gold)] shrink-0 mt-0.5" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 border-t-4 border-[var(--color-salco-gold)] shadow-sm sticky top-32"
            >
              <h3 className="font-serif text-2xl text-[var(--color-salco-navy)] mb-8">Projektdetails</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                  <div className="bg-[var(--color-salco-bg)] p-3 rounded-full text-[var(--color-salco-navy)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-salco-muted)] uppercase tracking-wider mb-1">Standort</p>
                    <p className="text-lg font-medium text-[var(--color-salco-navy)]">{project.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                  <div className="bg-[var(--color-salco-bg)] p-3 rounded-full text-[var(--color-salco-navy)]">
                    <Building size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-salco-muted)] uppercase tracking-wider mb-1">Einheiten</p>
                    <p className="text-lg font-medium text-[var(--color-salco-navy)]">{project.units}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                  <div className="bg-[var(--color-salco-bg)] p-3 rounded-full text-[var(--color-salco-navy)]">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-salco-muted)] uppercase tracking-wider mb-1">Fertigstellung</p>
                    <p className="text-lg font-medium text-[var(--color-salco-navy)]">{project.completion}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/kontakt"
                  className="block w-full text-center px-6 py-4 bg-[var(--color-salco-navy)] text-white font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors"
                >
                  Interesse wecken
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-8">Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] bg-slate-200 overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${i}`}
                alt={`Galerie Bild ${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
