import { useState } from 'react';
import { FAQS_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACTS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppHelp = () => {
    const text = `Hi Hariha Infra! I have a custom question about your turnkey residential construction, material specifications, or process in Bengaluru. Let's discuss.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="faqs" className="py-24 bg-white border-b border-[#D2DFEE]/60 relative scroll-mt-20 text-left">
      {/* Background accents */}
      <div className="absolute left-[-10%] top-[-10%] w-96 h-96 bg-[#0052FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block">
            COMMON QUESTIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] tracking-tight leading-tight">
            Frequently Asked Queries <br />
            <span className="font-serif italic text-[#475569] font-normal">Everything You Need to Know</span>
          </h2>
          <p className="text-xs md:text-sm text-[#475569] font-light leading-relaxed">
            Transparent information about our G+3 construction guidelines, 10-year warranty parameters, 1024 audit checks, and payment schedules.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#0052FF] bg-[#F4F7FC]/50 shadow-[0_4px_25px_rgba(181,148,110,0.06)]' 
                    : 'border-[#D2DFEE] bg-white hover:border-[#0052FF]/40 hover:bg-[#F4F7FC]/20'
                }`}
              >
                {/* Accordion Header */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle size={18} className={`shrink-0 ${isOpen ? 'text-[#0052FF]' : 'text-[#475569]'}`} />
                    <span className="text-xs md:text-sm font-semibold text-[#0F172A] tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-[#475569]">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 pt-0 md:px-6 text-xs md:text-sm text-[#475569] font-light leading-relaxed border-t border-[#D2DFEE]/40 mt-1">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center max-w-xl mx-auto p-6 bg-[#F4F7FC] border border-[#D2DFEE] rounded-3xl space-y-4"
        >
          <h4 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide">
            Still Have Questions?
          </h4>
          <p className="text-xs text-[#475569] font-light leading-relaxed">
            Get an instant reply directly from our engineering panel on WhatsApp. We usually reply within 5 minutes.
          </p>
          <button
            id="faq-whatsapp-cta"
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center space-x-2.5 bg-[#0F172A] hover:bg-[#0052FF] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            <MessageSquare size={14} className="text-white" />
            <span>Chat Directly on WhatsApp</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
