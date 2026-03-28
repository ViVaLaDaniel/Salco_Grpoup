import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Chatbot from './Chatbot';
import CookieBanner from './CookieBanner';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-salco-gold)] selection:text-[var(--color-salco-navy)]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <CookieBanner />
    </div>
  );
}
