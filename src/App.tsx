import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProjectGallery from './components/ProjectGallery';
import TestimonialsSection from './components/TestimonialsSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import ReferAndEarn from './components/ReferAndEarn';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { motion } from 'motion/react';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    // Support aliases: 'reviews' -> 'reviews' or 'testimonials'
    const targetElement = document.getElementById(sectionId) || 
      (sectionId === 'reviews' ? document.getElementById('testimonials') : null) ||
      (sectionId === 'enquiry' ? document.getElementById('contact') : null);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hariha-applet" className="min-h-screen bg-[#F4F7FC] font-sans antialiased text-[#0F172A] selection:bg-[#0052FF]/20 selection:text-[#0A1128] relative overflow-x-hidden">
      {/* Background Ambient iOS-style Glowing Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0052FF]/6 blur-[130px] animate-pulse duration-[9000ms] ease-in-out" />
        <div className="absolute top-[45%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#00D2FF]/4 blur-[120px] animate-pulse duration-[14000ms] ease-in-out delay-2000" />
        <div className="absolute bottom-[15%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#0052FF]/8 blur-[100px] animate-pulse duration-[11000ms] ease-in-out delay-1000" />
      </div>

      {/* Sticky Premium Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Layout sections with scroll-reveal animations in confirmed order:
          Hero -> Services -> Projects -> Reviews -> Packages -> Process -> Refer & Earn -> Enquiry (Contact) */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Banner Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* 2. Dynamic Service Pages Directory */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ServicesSection />
        </motion.div>

        {/* 3. High-Resolution Project Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectGallery />
        </motion.div>

        {/* 4. Client Endorsements and Verified Testimonials (Reviews) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TestimonialsSection />
        </motion.div>

        {/* 5. Architectural 4-Phase Delivery Process (Above Packages) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProcessSection />
        </motion.div>

        {/* 6. Detailed Construction Packages & Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <PackagesSection />
        </motion.div>

        {/* 7. Integrated Briefing & Quote Request Form (Enquiry) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>

        {/* 8. Client Partnership & Referral Voucher Card (Last after Enquiry) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ReferAndEarn />
        </motion.div>
      </main>

      {/* Footer component */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive WhatsApp Desk Widget */}
      <WhatsAppWidget />
    </div>
  );
}
