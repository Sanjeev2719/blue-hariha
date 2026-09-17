import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone, Instagram } from 'lucide-react';
import { COMPANY_CONTACTS, SOCIAL_LINKS } from '../data';
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

  // Reordered per client notes: Services -> Projects -> Reviews -> Process -> Packages -> Enquiry
  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Process', id: 'process' },
    { label: 'Packages', id: 'packages' },
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
      className={`group fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-4 w-[94%] max-w-7xl py-2.5 px-5 md:px-8 rounded-full bg-white/75 hover:bg-white/90 backdrop-blur-xl hover:backdrop-blur-3xl border border-white/80 hover:border-white shadow-[0_12px_40px_rgba(0,82,255,0.08),_inset_0_1px_2px_rgba(255,255,255,0.9)] hover:scale-[1.005]'
          : 'top-4 w-[94%] max-w-7xl py-3 px-5 md:px-8 rounded-full bg-white/50 hover:bg-white/85 backdrop-blur-lg hover:backdrop-blur-3xl border border-white/70 hover:border-white shadow-[0_8px_30px_rgba(15,23,42,0.05),_inset_0_1px_2px_rgba(255,255,255,0.8)] hover:scale-[1.005]'
      }`}
    >
      {/* iOS Liquid Glass Specular Reflection & Light Shimmer Sweep */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/80 via-white/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-24 -left-full w-1/2 h-[300%] bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
      </div>

      <div className="w-full relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Logo with Enhanced Highlight Badge */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2.5 text-left group/logo cursor-pointer focus:outline-none py-1 px-2 -ml-2 rounded-2xl hover:bg-white/60 transition-all duration-300"
          >
            {/* Illuminated Geometric Emblem */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-[#0052FF] via-[#0040D0] to-[#00D2FF] p-[1.5px] shadow-[0_4px_16px_rgba(0,82,255,0.35)] flex items-center justify-center shrink-0 group-hover/logo:shadow-[0_6px_22px_rgba(0,82,255,0.5)] group-hover/logo:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-black text-white text-base md:text-lg tracking-wider">H</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-lg md:text-xl tracking-[0.14em] font-black bg-gradient-to-r from-[#0052FF] via-[#0A1128] to-[#0052FF] bg-clip-text text-transparent group-hover/logo:from-[#0040D0] group-hover/logo:to-[#00D2FF] transition-all duration-300">
                  HARIHA INFRA
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0052FF] animate-pulse" />
              </div>
              <span className="text-[7.5px] md:text-[8px] tracking-[0.28em] font-sans text-[#475569] uppercase font-bold">
                Premier Building Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 bg-white/50 group-hover:bg-white/70 backdrop-blur-md py-1.5 px-6 rounded-full border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300">
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

          {/* Action CTAs: Phone, Instagram Link & WhatsApp */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Direct Phone link */}
            <a
              id="navbar-phone-link"
              href={`tel:${COMPANY_CONTACTS.phone}`}
              className="flex items-center space-x-1.5 text-[11px] font-semibold text-[#475569] hover:text-[#0F172A] transition-colors py-1.5 px-3 rounded-full hover:bg-white/50"
            >
              <Phone size={12} className="text-[#0052FF]" />
              <span className="tracking-wider">{COMPANY_CONTACTS.phone}</span>
            </a>

            {/* Instagram Hyperlink in Navigation Bar */}
            <a
              id="navbar-instagram-link"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-sm hover:shadow-[0_4px_12px_rgba(230,104,60,0.4)] hover:scale-110 transition-all duration-300"
              title="Follow Hariha Infra on Instagram"
              aria-label="Instagram Profile"
            >
              <Instagram size={14} />
            </a>

            {/* WhatsApp CTA */}
            <button
              id="navbar-whatsapp-cta"
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-[#0052FF] hover:bg-[#0040D0] text-white px-4.5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_4px_14px_rgba(0,82,255,0.2)] hover:shadow-[0_8px_25px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 cursor-pointer border border-white/20"
            >
              <MessageSquare size={12} />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>

          {/* Mobile Right Controls: Instagram Icon + Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              id="mobile-navbar-instagram-link"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-sm"
              aria-label="Instagram Profile"
            >
              <Instagram size={14} />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] hover:text-[#0052FF] p-2 transition-colors focus:outline-none bg-white/70 backdrop-blur-md rounded-full border border-white/60 shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

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
              {/* Drawer Brand Header */}
              <div className="flex items-center space-x-3 border-b border-[#D2DFEE]/50 pb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center text-white font-serif font-bold text-lg shadow-md">
                  H
                </div>
                <div>
                  <span className="font-serif text-xl tracking-[0.14em] text-[#0052FF] font-bold">HARIHA INFRA</span>
                  <p className="text-[8px] tracking-[0.25em] font-sans text-[#475569] uppercase mt-0.5 font-semibold">Premier Building Solutions</p>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#334155] hover:text-[#0052FF] py-2 transition-colors duration-300 border-b border-[#D2DFEE]/30"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="flex flex-col space-y-4 border-t border-[#D2DFEE]/50 pt-6">
              {/* Instagram Profile Link */}
              <a
                id="drawer-instagram-link"
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <Instagram size={16} />
                <span>Follow on Instagram</span>
              </a>

              <a
                id="mobile-phone-link"
                href={`tel:${COMPANY_CONTACTS.phone}`}
                className="flex items-center justify-center space-x-3 text-sm font-semibold text-[#475569] hover:text-[#0F172A] py-2"
              >
                <Phone size={16} className="text-[#0052FF]" />
                <span className="tracking-wide">{COMPANY_CONTACTS.phone}</span>
              </a>

              <button
                id="mobile-whatsapp-cta"
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center space-x-2 bg-[#0052FF] hover:bg-[#0040D0] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_4px_14px_rgba(0,82,255,0.2)] cursor-pointer border border-white/10"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
