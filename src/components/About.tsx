import { motion } from 'motion/react';
import { Building2, Users, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Building2 size={32} />,
    title: 'Exklusive Architektur',
    description: 'Wir entwerfen Gebäude, die nicht nur funktional sind, sondern auch ästhetisch überzeugen und sich harmonisch in ihre Umgebung einfügen.',
  },
  {
    icon: <Users size={32} />,
    title: 'Für Menschen geplant',
    description: 'Unsere Projekte stellen die Bedürfnisse der zukünftigen Bewohner in den Mittelpunkt. Wir schaffen Lebensräume, keine reinen Wohnflächen.',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Nachhaltiges Bauen',
    description: 'Ökologische Verantwortung ist uns wichtig. Wir setzen auf energieeffiziente Konzepte und nachhaltige Materialien für eine grüne Zukunft.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Höchste Qualität',
    description: 'Von der Planung bis zur Schlüsselübergabe garantieren wir höchste Qualitätsstandards und eine transparente, zuverlässige Umsetzung.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern Office Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 z-0" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50 z-0" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-12 bottom-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl">
                  20+
                </div>
                <div className="font-bold text-slate-900 leading-tight">
                  Jahre <br /> Erfahrung
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Vertrauen Sie auf unsere Expertise in der Entwicklung exklusiver Immobilienprojekte.
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">
              Wir bauen Zukunft
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Wir planen für Menschen, <br className="hidden lg:block" />
              <span className="text-slate-500">nicht um Sie herum.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-12 font-light leading-relaxed">
              Die SALCO Group steht für innovative Immobilienentwicklung im Rhein-Main-Gebiet. 
              Unser Fokus liegt auf der Schaffung von hochwertigem Wohnraum, der moderne 
              Architektur mit höchstem Wohnkomfort verbindet. Jedes unserer Projekte ist 
              einzigartig und wird mit größter Sorgfalt und Liebe zum Detail realisiert.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-amber-500 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
