import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';

let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.warn('Gemini API initialization failed. Chatbot may not work.', e);
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hallo! Ich bin Ihr digitaler Assistent der SALCO Group. Wie kann ich Ihnen bei der Suche nach Ihrer Traumimmobilie helfen?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current && ai) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-flash-lite-preview',
        config: {
          systemInstruction: 'Du bist ein hilfsbereiter, professioneller Immobilien-Assistent für die SALCO Group. Beantworte Fragen zu Immobilien, Projekten und Kontaktmöglichkeiten höflich und prägnant auf Deutsch. Fasse dich kurz.',
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    
    if (!chatRef.current) {
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, der AI-Dienst ist gerade nicht verfügbar.' }]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Anfrage. Bitte versuchen Sie es später noch einmal.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[var(--color-salco-gold)] text-[var(--color-salco-navy)] rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-[var(--color-salco-navy)] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--color-salco-gold)] rounded-full flex items-center justify-center text-[var(--color-salco-navy)] font-bold">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-sm">SALCO Assistent</h3>
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--color-salco-bg)]">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-salco-navy)] text-white rounded-l-lg rounded-tr-lg' 
                        : 'bg-white text-[var(--color-salco-text)] shadow-sm border border-slate-100 rounded-r-lg rounded-tl-lg'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-r-lg rounded-tl-lg shadow-sm border border-slate-100">
                    <Loader2 size={16} className="animate-spin text-[var(--color-salco-gold)]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ihre Frage..."
                className="flex-1 bg-[var(--color-salco-bg)] border border-slate-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-salco-navy)] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-[var(--color-salco-navy)] text-white rounded-sm flex items-center justify-center hover:bg-[var(--color-salco-dark)] disabled:opacity-50 transition-colors shrink-0"
              >
                <Send size={18} className="ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
