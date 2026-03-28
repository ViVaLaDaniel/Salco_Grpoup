import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, ProjectStatus, ProjectType } from '../lib/projects';

export default function Projects() {
  const [filterStatus, setFilterStatus] = useState<ProjectStatus | 'Alle'>('Alle');
  const [filterType, setFilterType] = useState<ProjectType | 'Alle'>('Alle');

  const filteredProjects = projects.filter((project) => {
    const statusMatch = filterStatus === 'Alle' || project.status === filterStatus;
    const typeMatch = filterType === 'Alle' || project.type === filterType;
    return statusMatch && typeMatch;
  });

  return (
    <div className="bg-[var(--color-salco-bg)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-salco-navy)] mb-6"
          >
            Unsere Projekte
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-[var(--color-salco-gold)] origin-left"
          ></motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2 uppercase tracking-wider">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {['Alle', 'In Bau', 'Verfügbar', 'Verkauft'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status as any)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    filterStatus === status
                      ? 'bg-[var(--color-salco-navy)] text-white border-[var(--color-salco-navy)]'
                      : 'bg-white text-[var(--color-salco-navy)] border-slate-200 hover:border-[var(--color-salco-navy)]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2 uppercase tracking-wider">
              Typ
            </label>
            <div className="flex flex-wrap gap-2">
              {['Alle', 'Wohnung', 'Gewerbe', 'Gemischt'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as any)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    filterType === type
                      ? 'bg-[var(--color-salco-navy)] text-white border-[var(--color-salco-navy)]'
                      : 'bg-white text-[var(--color-salco-navy)] border-slate-200 hover:border-[var(--color-salco-navy)]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white border border-slate-100 flex flex-col h-full"
            >
              <Link to={`/projekte/${project.slug}`} className="block relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-white text-[var(--color-salco-navy)] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-[var(--color-salco-navy)] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {project.type}
                  </span>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-[var(--color-salco-navy)] mb-3 group-hover:text-[var(--color-salco-gold)] transition-colors">
                  <Link to={`/projekte/${project.slug}`}>{project.title}</Link>
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--color-salco-muted)] mb-4">
                  <MapPin size={16} />
                  {project.city}
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-sm font-medium text-[var(--color-salco-text)]">
                    {project.units}
                  </div>
                  <Link
                    to={`/projekte/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--color-salco-navy)] hover:text-[var(--color-salco-gold)] transition-colors"
                  >
                    Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-[var(--color-salco-muted)]">Keine Projekte gefunden, die Ihren Kriterien entsprechen.</p>
            <button
              onClick={() => { setFilterStatus('Alle'); setFilterType('Alle'); }}
              className="mt-6 px-6 py-3 bg-[var(--color-salco-navy)] text-white font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
