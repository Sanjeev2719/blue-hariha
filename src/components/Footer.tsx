import { COMPANY_CONTACTS } from '../data';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppInquiry = () => {
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONTACTS.whatsappText)}`, '_blank');
  };

  return (
    <footer id="main-footer" className="bg-[#0B0F19] text-[#F4F7FC] border-t border-[#0052FF]/20 pt-20 pb-10 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#F4F7FC]/10">
          
          {/* Brand Info Column */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-xl tracking-[0.15em] text-[#0052FF] font-bold">HARIHA INFRA</span>
              <p className="text-[9px] tracking-[0.2em] font-sans text-[#F4F7FC]/70 uppercase mt-1">Premier Building Solutions</p>
            </div>
            
            <p className="text-xs text-[#F4F7FC]/70 font-light leading-relaxed">
              Quality solid block construction and turnkey project specialists based in Bengaluru. Delivering trusted structures across residential, custom home interiors, and luxury renovation projects since 2002.
            </p>

            <button
              id="footer-whatsapp-button"
              onClick={handleWhatsAppInquiry}
              className="flex items-center space-x-2 border border-[#F4F7FC]/20 hover:border-[#0052FF] hover:bg-[#F4F7FC]/5 px-4 py-2.5 text-[10px] uppercase tracking-wider font-medium transition-all"
            >
              <MessageSquare size={12} className="text-[#0052FF]" />
              <span>Direct WhatsApp Desk</span>
            </button>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#0052FF]">Build Specifications</h4>
            <ul className="space-y-3">
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => onNavigate('packages')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Standard (₹1,899/Sq.ft)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-classic"
                  onClick={() => onNavigate('packages')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Classic (₹2,199/Sq.ft)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-renovation"
                  onClick={() => onNavigate('packages')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Premium (₹2,399/Sq.ft)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-architectural"
                  onClick={() => onNavigate('services')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Architectural Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Access Corporate anchors */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#0052FF]">Direct Access</h4>
            <ul className="space-y-3">
              <li>
                <button
                  id="footer-nav-portfolio"
                  onClick={() => onNavigate('projects')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Completed Project Gallery
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-process"
                  onClick={() => onNavigate('process')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Our 4-Phase Delivery Process
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-testimonials"
                  onClick={() => onNavigate('testimonials')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Verified Partner Endorsements
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faqs"
                  onClick={() => onNavigate('faqs')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-refer"
                  onClick={() => onNavigate('refer')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Refer & Earn Program
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="text-xs text-[#F4F7FC]/70 hover:text-[#0052FF] transition-colors cursor-pointer"
                >
                  Schedule Private Site Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts info column */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#0052FF]">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-xs text-[#F4F7FC]/70">
                <MapPin size={14} className="text-[#0052FF] mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_CONTACTS.address}
                </address>
              </li>
              <li className="flex items-center space-x-3 text-xs text-[#F4F7FC]/70">
                <Phone size={14} className="text-[#0052FF] shrink-0" />
                <a href={`tel:${COMPANY_CONTACTS.phone}`} className="hover:text-[#0052FF] transition-colors">
                  {COMPANY_CONTACTS.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-xs text-[#F4F7FC]/70">
                <Mail size={14} className="text-[#0052FF] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="hover:text-[#0052FF] transition-colors truncate">
                  {COMPANY_CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#F4F7FC]/40 font-light font-sans tracking-wider uppercase gap-4">
          <span>© {currentYear} Hariha Infra Private Limited. All Rights Reserved.</span>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-[#0052FF] transition-colors">Privacy Charter</a>
            <a href="#terms" className="hover:text-[#0052FF] transition-colors">Terms of Operations</a>
            <a href="#compliance" className="hover:text-[#0052FF] transition-colors">OSHA Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
