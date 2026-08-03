import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import ProjectGallery from './components/ProjectGallery';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import BankingPartners from './components/BankingPartners';
import FAQSection from './components/FAQSection';
import ReferAndEarn from './components/ReferAndEarn';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { motion } from 'motion/react';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hariha-applet" className="min-h-screen bg-[#F4F7FC] font-sans antialiased text-[#0F172A] selection:bg-[#0052FF]/20 selection:text-[#0A1128] relative overflow-x-hidden">
      {/* Background Ambient iOS 26-style Glowing Lights (BMW Headlight/Laserlight Blue & Cyan theme) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0052FF]/6 blur-[130px] animate-pulse duration-[9000ms] ease-in-out" />
        <div className="absolute top-[45%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#00D2FF]/4 blur-[120px] animate-pulse duration-[14000ms] ease-in-out delay-2000" />
        <div className="absolute bottom-[15%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#0052FF]/8 blur-[100px] animate-pulse duration-[11000ms] ease-in-out delay-1000" />
      </div>

      {/* Sticky Premium Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Layout sections with scroll-reveal animations */}
      <main id="main-content" className="relative z-10">
        {/* Hero Banner Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* Dynamic Service Pages Directory */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ServicesSection />
        </motion.div>

        {/* Detailed Construction Packages & Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <PackagesSection />
        </motion.div>

        {/* High-Resolution Project Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectGallery />
        </motion.div>

        {/* Architectural 4-Phase Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProcessSection />
        </motion.div>

        {/* Client Endorsements and Verified Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TestimonialsSection />
        </motion.div>

        {/* Approved Banking & Construction Finance Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <BankingPartners />
        </motion.div>

        {/* Interactive FAQ Directory */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <FAQSection />
        </motion.div>

        {/* Client Partnership & Referral Voucher Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ReferAndEarn />
        </motion.div>

        {/* Integrated Briefing & Quote Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </main>

      {/* Footer component */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive WhatsApp Desk Widget */}
      <WhatsAppWidget />
    </div>
  );
}
