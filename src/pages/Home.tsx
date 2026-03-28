import { motion } from 'motion/react';
import { ArrowRight, Building2, HardHat, MapPin, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../lib/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const stats = [
    { label: 'Jahre Erfahrung', value: '30+' },
    { label: 'Wohneinheiten realisiert', value: '300+' },
    { label: 'ImmoScout24', value: '4,8★' },
    { label: 'Jahre Garantie', value: '5' },
    { label: 'Experten im Team', value: '30+' },
  ];

  const features = [
    {
      icon: <Building2 size={32} />,
      title: 'Vom Grundstück bis zum Schlüssel',
      description: 'Wir begleiten den gesamten Lebenszyklus einer Immobilie. Von der ersten Idee bis zur schlüsselfertigen Übergabe.',
    },
    {
      icon: <HardHat size={32} />,
      title: 'Eigene Architekten & Bauingenieure',
      description: 'Unser In-House-Team garantiert höchste Präzision und nahtlose Kommunikation in jeder Bauphase.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Ausgezeichnete Lage im Rhein-Main-Gebiet',
      description: 'Wir bauen dort, wo das Leben spielt. Perfekt angebunden, zukunftssicher und wertstabil.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: '5 Jahre SALCO-Garantie',
      description: 'Qualität, auf die Sie sich verlassen können. Wir stehen auch nach dem Einzug an Ihrer Seite.',
    },
  ];

  return (
    <div className="bg-[var(--color-salco-bg)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-salco-dark)]">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="SALCO Architektur"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-salco-dark)]/80 via-transparent to-[var(--color-salco-dark)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-[80px] text-white mb-6 leading-tight"
          >
            Wir bauen Zukunft
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 font-light"
          >
            Seit 1994 entwickeln wir hochwertige Immobilien im Rhein-Main-Gebiet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projekte"
              className="px-8 py-4 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] rounded-sm font-medium uppercase tracking-wider hover:bg-white transition-colors w-full sm:w-auto text-center"
            >
              Aktuelle Projekte
            </Link>
            <Link
              to="/unternehmen"
              className="px-8 py-4 border border-white text-white rounded-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[var(--color-salco-navy)] transition-colors w-full sm:w-auto text-center"
            >
              Über SALCO
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-salco-navy)] py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl md:text-4xl font-serif text-[var(--color-salco-gold)] mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Was uns auszeichnet */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-salco-navy)] mb-4">
              Was uns auszeichnet
            </h2>
            <div className="w-16 h-1 bg-[var(--color-salco-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 border-t-2 border-[var(--color-salco-gold)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[var(--color-salco-navy)] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-[var(--color-salco-navy)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-salco-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-salco-navy)] mb-4">
                Ausgewählte Projekte
              </h2>
              <div className="w-16 h-1 bg-[var(--color-salco-gold)]"></div>
            </div>
            <Link
              to="/projekte"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--color-salco-navy)] hover:text-[var(--color-salco-gold)] transition-colors"
            >
              Alle Projekte ansehen
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white text-[var(--color-salco-navy)] text-xs font-bold uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif text-[var(--color-salco-navy)] mb-2 group-hover:text-[var(--color-salco-gold)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-salco-muted)] mb-1">
                    <MapPin size={14} />
                    {project.city}
                  </div>
                  <p className="text-sm text-[var(--color-salco-text)] font-medium">
                    {project.units}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[var(--color-salco-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-6">
              4,8 Sterne auf ImmoScout24
            </h2>
            <div className="flex justify-center gap-1 text-[var(--color-salco-gold)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { text: "Sehr professionelle Abwicklung und hervorragende Bauqualität. Wir fühlen uns in unserer neuen Wohnung sehr wohl.", author: "Familie M., Langen" },
              { text: "Kompetente Beratung von Anfang an. Sonderwünsche wurden problemlos umgesetzt. Absolute Weiterempfehlung.", author: "Thomas K., Frankfurt" },
              { text: "Termingerechte Fertigstellung und transparente Kommunikation während der gesamten Bauphase.", author: "Sarah W., Lampertheim" }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-slate-100"
              >
                <div className="flex gap-1 text-[var(--color-salco-gold)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[var(--color-salco-muted)] italic mb-6">"{review.text}"</p>
                <p className="text-sm font-medium text-[var(--color-salco-navy)]">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 bg-[var(--color-salco-dark)] text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
              "Wir alle haben Träume und Ziele. Bei uns sind Ihre Träume in den besten Händen."
            </p>
            <footer className="text-[var(--color-salco-gold)] tracking-wider uppercase text-sm">
              Adrian Khalifé, Geschäftsführer SALCO Group
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-salco-navy)] mb-4">
              Sprechen Sie mit uns
            </h2>
            <p className="text-[var(--color-salco-muted)]">
              Hinterlassen Sie uns eine Nachricht oder schreiben Sie uns direkt per WhatsApp.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Name</label>
                <input type="text" className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">E-Mail</label>
                <input type="email" className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Telefon</label>
                <input type="tel" className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Interesse</label>
                <select className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)] bg-white">
                  <option>Wohnung kaufen</option>
                  <option>Wohnung mieten</option>
                  <option>Grundstück verkaufen</option>
                  <option>Allgemeine Anfrage</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Nachricht (optional)</label>
              <textarea rows={4} className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)] resize-none"></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="submit" className="flex-1 bg-[var(--color-salco-navy)] text-white py-4 font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors">
                Anfrage senden
              </button>
              <a href="https://wa.me/496103903830" target="_blank" rel="noopener noreferrer" className="flex-1 border border-[#25D366] text-[#25D366] py-4 font-medium uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors text-center flex items-center justify-center gap-2">
                Auf WhatsApp schreiben
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
