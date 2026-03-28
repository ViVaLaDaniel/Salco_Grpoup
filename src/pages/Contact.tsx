import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[var(--color-salco-bg)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-salco-navy)] mb-6"
          >
            Kontakt
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
            Wir freuen uns auf Ihre Nachricht. Ob Sie eine Immobilie suchen, verkaufen möchten 
            oder Fragen zu unseren Projekten haben – wir sind für Sie da.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 border-t-4 border-[var(--color-salco-gold)] shadow-sm"
          >
            <h2 className="font-serif text-3xl text-[var(--color-salco-navy)] mb-8">Unsere Kontaktdaten</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-[var(--color-salco-gold)] shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-salco-navy)] mb-2">Adresse</h3>
                  <p className="text-[var(--color-salco-muted)]">
                    SALCO Group<br />
                    Südliche Ringstraße 175<br />
                    63225 Langen (Hessen)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-[var(--color-salco-gold)] shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-salco-navy)] mb-2">Telefon</h3>
                  <p className="text-[var(--color-salco-muted)]">
                    <a href="tel:+496103903830" className="hover:text-[var(--color-salco-gold)] transition-colors">
                      +49 (0) 6103 903 830
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-[var(--color-salco-gold)] shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-salco-navy)] mb-2">E-Mail</h3>
                  <p className="text-[var(--color-salco-muted)]">
                    <a href="mailto:info@salco-group.com" className="hover:text-[var(--color-salco-gold)] transition-colors">
                      info@salco-group.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-[var(--color-salco-gold)] shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-salco-navy)] mb-2">Öffnungszeiten</h3>
                  <p className="text-[var(--color-salco-muted)]">
                    Montag - Freitag<br />
                    09:00 - 18:00 Uhr
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 border border-slate-100 shadow-sm"
          >
            <h2 className="font-serif text-3xl text-[var(--color-salco-navy)] mb-8">Schreiben Sie uns</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Name *</label>
                  <input type="text" required className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">E-Mail *</label>
                  <input type="email" required className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Betreff</label>
                <input type="text" className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-salco-text)] mb-2">Nachricht *</label>
                <textarea required rows={6} className="w-full border border-slate-200 p-3 focus:outline-none focus:border-[var(--color-salco-navy)] resize-none"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy" required className="mt-1" />
                <label htmlFor="privacy" className="text-sm text-[var(--color-salco-muted)]">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. 
                  Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht.
                </label>
              </div>

              <button type="submit" className="w-full bg-[var(--color-salco-navy)] text-white py-4 font-medium uppercase tracking-wider hover:bg-[var(--color-salco-dark)] transition-colors">
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[500px] bg-slate-200 w-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.887854619358!2d8.66579331571501!3d49.9947669794154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sS%C3%BCdliche%20Ringstra%C3%9Fe%20175%2C%2063225%20Langen%20(Hessen)!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="SALCO Group Standort"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
