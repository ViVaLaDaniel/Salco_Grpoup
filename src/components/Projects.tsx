import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Das Wilhelm Quartier',
    location: 'Lampertheim',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Aktuell',
  },
  {
    id: 2,
    title: 'Neubau',
    location: 'Friedrichsdorf',
    image: 'https://images.unsplash.com/photo-1600607687931-cebf0746e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'In Planung',
  },
  {
    id: 3,
    title: "Ba'Lu Gemütlichkeit",
    location: 'Langen',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Aktuell',
  },
  {
    id: 4,
    title: 'Der Amselpark',
    location: 'Lampertheim',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Abgeschlossen',
  },
  {
    id: 5,
    title: 'SALCO Stadtquartier',
    location: 'Langen',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Aktuell',
  },
  {
    id: 6,
    title: 'B26...Die alte Post',
    location: 'Langen',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'In Planung',
  },
  {
    id: 7,
    title: 'T1 - Wohnen',
    location: 'Egelsbach',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Abgeschlossen',
  },
  {
    id: 8,
    title: 'Wohnen am Waldrand',
    location: 'Langen',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    status: 'Aktuell',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">
              Unsere Projekte
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Eine Auswahl unserer <br />
              <span className="text-slate-500">aktuellen Projekte</span>
            </h3>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors"
          >
            Alle Projekte ansehen
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {project.location}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
