import { useState, useEffect } from 'react';
import { X, Send, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

// Authentic WhatsApp SVG Logo icon component
function WhatsAppLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.388 2.016 13.921 1.01 11.29 1.01c-5.443 0-9.869 4.371-9.873 9.8-.001 1.724.456 3.41 1.32 4.904l-.991 3.616 3.738-.967zm12.355-6.848c-.347-.171-2.052-.997-2.37-1.11-.318-.113-.55-.171-.78.171-.231.341-.89 1.11-1.092 1.333-.202.223-.404.25-.751.079-.347-.171-1.464-.53-2.788-1.687-1.03-.902-1.725-2.016-1.927-2.358-.202-.341-.022-.526.15-.696.155-.153.347-.398.52-.596.173-.199.231-.341.347-.568.116-.228.058-.427-.029-.597-.087-.171-.78-1.844-1.07-2.522-.281-.663-.566-.573-.78-.584-.2-.01-.43-.01-.66-.01-.23 0-.606.085-.923.427-.317.341-1.21 1.166-1.21 2.842 0 1.677 1.24 3.298 1.414 3.525.173.228 2.44 3.664 5.912 5.127.826.348 1.47.556 1.973.713.83.259 1.585.223 2.181.136.665-.098 2.052-.823 2.34-1.62.289-.797.289-1.48.202-1.62-.087-.14-.318-.228-.665-.398z"/>
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  // Show a little notification badge shortly after load to prompt engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const quickPrompts = [
    { text: 'Get Best Quote', msg: 'Hi Hariha Infra, I would like to get the best quote for my upcoming construction project.' },
    { text: 'Free Site Visit & Consultation', msg: 'Hello! I own a plot in Bengaluru and would like to schedule a free site visit and consultation.' },
    { text: 'Construction Packages Enquiry', msg: 'Hi Hariha Infra, I would like to request details regarding your Standard, Classic, or Premium construction packages.' },
  ];

  const handlePromptClick = (msg: string) => {
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsOpen(false);
  };

  const handleGeneralChat = () => {
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONTACTS.whatsappText)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Box Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#EBE2D5] shadow-2xl w-[320px] md:w-[360px] rounded-3xl overflow-hidden mb-4 text-left"
          >
            {/* Header with WhatsApp Logo Background Accent */}
            <div className="bg-[#2D2821] p-5 text-[#FAF6F0] flex items-center justify-between border-b border-[#B5946E]/30 relative overflow-hidden">
              <div className="absolute right-[-10px] top-[-10px] text-white/5 opacity-10 pointer-events-none">
                <WhatsAppLogo className="w-24 h-24" />
              </div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="relative">
                  {/* Estimator Avatar placeholder */}
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Hariha Lead Engineer"
                    className="w-10 h-10 object-cover border border-[#B5946E] rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  {/* Styled Green Pulsing Online Status */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2D2821] rounded-full" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-xs font-serif font-bold tracking-wide">N. Swamy</h4>
                    <span className="bg-green-600/20 text-green-400 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                      Online
                    </span>
                  </div>
                  <p className="text-[9px] uppercase tracking-wider text-[#B5946E] font-sans font-medium">Chief Engineer & Founder</p>
                </div>
              </div>
              
              <button
                id="whatsapp-widget-close"
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white p-1.5 transition-colors focus:outline-none rounded-full hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conversation Window */}
            <div className="p-5 bg-[#FAF6F0] space-y-4 max-h-[300px] overflow-y-auto">
              <div className="bg-white border border-[#EBE2D5] p-4 text-xs font-light text-[#4E432F] leading-relaxed shadow-sm relative rounded-2xl">
                <div className="flex items-center space-x-2 text-green-600 mb-2 font-semibold text-[10px] uppercase tracking-wider">
                  <WhatsAppLogo className="w-3.5 h-3.5" />
                  <span>Official Chat Support</span>
                </div>
                <p className="mb-2">
                  Welcome to Hariha Infra Private Limited. We have been delivering premier building solutions in Bengaluru since 2002.
                </p>
                <p>
                  Click any option below to pre-populate your inquiry on WhatsApp, or start a live chat with our engineering desk directly!
                </p>
                <span className="block text-[8px] text-[#706555] uppercase mt-2 text-right">Instant Reply Desk</span>
              </div>

              {/* Quick Prompt Selection */}
              <div className="space-y-2 pt-1">
                <span className="block text-[8px] uppercase tracking-wider text-[#706555] font-semibold">Select an Enquiry Topic</span>
                {quickPrompts.map((prompt, idx) => (
                  <button
                    id={`whatsapp-prompt-btn-${idx}`}
                    key={idx}
                    onClick={() => handlePromptClick(prompt.msg)}
                    className="w-full text-left bg-white border border-[#EBE2D5] hover:border-[#B5946E] p-3 text-xs font-medium text-[#4E432F] hover:text-[#B5946E] transition-all duration-300 shadow-sm flex items-center justify-between cursor-pointer rounded-xl hover:shadow"
                  >
                    <span className="truncate pr-2 font-light">{prompt.text}</span>
                    <Send size={10} className="shrink-0 text-[#B5946E]" />
                  </button>
                ))}
              </div>
            </div>

            {/* General Direct Chat CTA Footer */}
            <div className="p-4 bg-white border-t border-[#EBE2D5] rounded-b-3xl">
              <button
                id="whatsapp-widget-general-chat"
                onClick={handleGeneralChat}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer rounded-xl shadow-md hover:shadow-lg"
              >
                <WhatsAppLogo className="w-4 h-4 fill-current text-white" />
                <span>Start Direct Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle Floating Trigger Button - Official WhatsApp Styled Green (25% reduced) */}
      <button
        id="whatsapp-floating-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        className="w-[84px] h-[84px] bg-green-600 hover:bg-green-700 text-[#FAF6F0] flex items-center justify-center shadow-2xl hover:shadow-[0_15px_40px_rgba(34,197,94,0.45)] border-2 border-white/20 relative transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none cursor-pointer rounded-full"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppLogo className="w-[42px] h-[42px] text-white fill-current drop-shadow-md" />
        
        {/* Pulsing Notification Badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B5946E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-[#B5946E] text-[10px] font-sans font-bold text-white items-center justify-center border-2 border-white shadow-md">
              1
            </span>
          </span>
        )}
      </button>

    </div>
  );
}
