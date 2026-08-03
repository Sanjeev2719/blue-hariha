import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Packages', id: 'packages' },
    { label: 'Projects', id: 'projects' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Refer & Earn', id: 'refer' },
    { label: 'Enquiry', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    const encodedText = encodeURIComponent(COMPANY_CONTACTS.whatsappText);
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <motion.nav
      id="main-navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out cursor-pointer ${
        isScrolled
          ? 'top-4 w-[92%] max-w-7xl py-3 px-6 md:px-10 rounded-full bg-white/60 hover:bg-white/85 backdrop-blur-xl hover:backdrop-blur-3xl border border-white/70 hover:border-white shadow-[0_12px_40px_rgba(0,82,255,0.06),_inset_0_1px_2px_rgba(255,255,255,0.8)] hover:shadow-[0_22px_60px_rgba(0,82,255,0.18),_inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-1px_3px_rgba(0,0,0,0.04)] hover:scale-[1.01]'
          : 'top-4 w-[92%] max-w-7xl py-3.5 px-6 md:px-10 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-lg hover:backdrop-blur-3xl border border-white/60 hover:border-white shadow-[0_8px_30px_rgba(15,23,42,0.04),_inset_0_1px_2px_rgba(255,255,255,0.7)] hover:shadow-[0_20px_55px_rgba(0,82,255,0.15),_inset_0_2px_4px_rgba(255,255,255,1)] hover:scale-[1.01]'
      }`}
    >
      {/* iOS Liquid Glass Specular Reflection & Light Shimmer Sweep */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Top Rim Specular Gloss */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/80 via-white/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Dynamic Light Sheen Sweep on Hover */}
        <div className="absolute -top-24 -left-full w-1/2 h-[300%] bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
      </div>

      <div className="w-full relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick('hero')}
            className="flex flex-col items-start text-left group/logo cursor-pointer focus:outline-none"
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.15em] text-[#0052FF] group-hover/logo:opacity-85 transition-opacity duration-300 font-bold">
              HARIHA INFRA
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.3em] font-sans text-[#475569] uppercase mt-0.5 font-medium">
              Premier Building Solutions
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7 bg-white/40 group-hover:bg-white/60 backdrop-blur-md py-1.5 px-6 rounded-full border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] transition-all duration-300">
            {navItems.map((item) => (
              <button
                id={`desktop-nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#334155] hover:text-[#0052FF] transition-colors duration-300 relative py-1 group/link cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0052FF] transition-all duration-300 group-hover/link:w-full rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="navbar-phone-link"
              href={`tel:${COMPANY_CONTACTS.phone}`}
              className="flex items-center space-x-2 text-[11px] font-semibold text-[#475569] hover:text-[#0F172A] transition-colors"
            >
              <Phone size={12} className="text-[#0052FF]" />
              <span className="tracking-wider">{COMPANY_CONTACTS.phone}</span>
            </a>

            <button
              id="navbar-whatsapp-cta"
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-[#0052FF] hover:bg-[#0040D0] text-white px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_14px_rgba(0,82,255,0.2)] hover:shadow-[0_8px_25px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 cursor-pointer border border-white/20"
            >
              <MessageSquare size={12} />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0F172A] hover:text-[#0052FF] p-1.5 transition-colors focus:outline-none bg-white/60 backdrop-blur-md rounded-full border border-white/60"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F4F7FC]/95 backdrop-blur-2xl border-l border-[#D2DFEE]/50 shadow-2xl z-40 flex flex-col justify-between p-8"
            style={{ top: '0', height: '100vh' }}
          >
            <div className="flex flex-col space-y-8 mt-16">
              <div className="border-b border-[#D2DFEE]/50 pb-4">
                <span className="font-serif text-xl tracking-[0.15em] text-[#0052FF] font-bold">HARIHA INFRA</span>
                <p className="text-[8px] tracking-[0.3em] font-sans text-[#475569] uppercase mt-1 font-medium">Premier Building Solutions</p>
              </div>

              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-sm font-medium uppercase tracking-[0.2em] text-[#334155] hover:text-[#0052FF] py-2 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4 border-t border-[#D2DFEE]/50 pt-6">
              <a
                id="mobile-phone-link"
                href={`tel:${COMPANY_CONTACTS.phone}`}
                className="flex items-center space-x-3 text-sm text-[#475569] hover:text-[#0F172A]"
              >
                <Phone size={16} className="text-[#0052FF]" />
                <span className="tracking-wide">{COMPANY_CONTACTS.phone}</span>
              </a>

              <button
                id="mobile-whatsapp-cta"
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center space-x-2 bg-[#0052FF] hover:bg-[#0040D0] text-white py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_14px_rgba(0,82,255,0.15)] cursor-pointer border border-white/10"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
