import React, { useState, useEffect } from 'react';
import { Home, Building2, Sparkles, Compass, Check, Calendar, Layers, ArrowRight, MessageSquare, ArrowLeft } from 'lucide-react';
import { SERVICES_DATA, COMPANY_CONTACTS } from '../data';
import { Service } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const IconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Building2,
  Sparkles,
  Compass,
};

function ServiceCardTile({
  service,
  idx,
  onSelect
}: {
  service: Service;
  idx: number;
  onSelect: (service: Service) => void;
  key?: string;
}) {
  const Icon = IconMap[service.iconName] || Home;
  const imageList = service.images && service.images.length > 0 ? service.images : [service.image];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageList]);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <motion.div
      id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 text-left"
    >
      {/* Background Image Slideshow with preloaded stacked crossfade */}
      {imageList.map((imgUrl, i) => (
        <motion.img
          key={imgUrl}
          src={imgUrl}
          alt={service.title}
          initial={false}
          animate={{
            opacity: i === currentImgIndex ? 1 : 0,
            scale: i === currentImgIndex ? 1 : 1.05
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      ))}

      {/* Dark Overlay Gradient to ensure photo colors shine through while text is 100% visible & legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/75 to-[#0F172A]/50 z-0 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Slide Dot Indicators (3s rotation indicator) */}
      {imageList.length > 1 && (
        <div className="absolute top-6 right-6 z-10 flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          {imageList.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentImgIndex ? 'w-4 bg-[#00D2FF]' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Decorative Icon Accent */}
      <div className="absolute right-[-25px] bottom-[-25px] text-white/5 group-hover:text-white/10 group-hover:scale-110 transition-all duration-500 z-0 pointer-events-none">
        <Icon size={200} />
      </div>

      {/* Card Content - Top */}
      <div className="relative z-10 text-left">
        <div className="w-12 h-12 bg-[#0052FF] text-white flex items-center justify-center mb-6 border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon size={20} />
        </div>

        <span className="inline-block text-[10px] uppercase font-sans tracking-[0.2em] text-[#00D2FF] font-bold bg-[#0052FF]/30 border border-[#0052FF]/50 px-2.5 py-1 rounded-full mb-3 backdrop-blur-sm">
          {service.scope}
        </span>

        <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1 mb-3 group-hover:text-[#00D2FF] transition-colors duration-300 font-bold drop-shadow-sm">
          {service.title}
        </h3>

        <p className="text-xs md:text-sm text-white/85 font-light leading-relaxed mb-6 max-w-md drop-shadow">
          {service.description}
        </p>
      </div>

      {/* Card Content - Bottom */}
      <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/20 mt-auto">
        <div className="text-left">
          <span className="block text-[10px] text-white/70 uppercase tracking-wider font-medium">
            Typical Duration
          </span>
          <span className="block text-xs font-bold text-white font-display">
            {service.timeline}
          </span>
        </div>

        <button
          id={`service-learn-more-${service.id}`}
          onClick={() => onSelect(service)}
          className="flex items-center space-x-2 text-xs uppercase font-semibold tracking-widest text-white hover:text-[#00D2FF] bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md"
        >
          <span>Explore Capability</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleWhatsAppQuote = (service: Service) => {
    const text = `Hello Hariha Infra, I would like to request a bespoke quote for "${service.title}". Scope: ${service.scope}. Estimated Timeline: ${service.timeline}. Please advise on the next steps.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#F4F7FC]/40 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedService ? (
            /* Main Grid View (Service Directory) */
            <motion.div
              key="services-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header with scroll reveal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mb-16 text-left"
              >
                <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
                  OUR STRUCTURAL PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
                  Custom Building Solutions <br />
                  <span className="font-serif italic text-[#475569] font-normal">Executed With Absolute Mastery</span>
                </h2>
                <p className="text-sm md:text-base text-[#475569] font-light max-w-xl leading-relaxed">
                  We blend structural engineering integrity with bespoke material finishes. Explore our primary architectural works below.
                </p>
              </motion.div>

              {/* Grid Layout with 3s background slideshow cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SERVICES_DATA.map((service, idx) => (
                  <ServiceCardTile
                    key={service.id}
                    service={service}
                    idx={idx}
                    onSelect={setSelectedService}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            /* Immersive Service Page / Detail View with animated entry */
            <motion.div
              key="service-detail"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-transparent"
            >
              {/* Back Button */}
              <button
                id="back-to-services-btn"
                onClick={() => setSelectedService(null)}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] mb-12 border border-[#D2DFEE] px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md hover:bg-white transition-colors cursor-pointer shadow-sm"
              >
                <ArrowLeft size={14} />
                <span>Back to Services</span>
              </button>

              {/* Detail Hero Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Images and Metrics - 7 columns */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="overflow-hidden border border-white/60 shadow-xl relative aspect-video rounded-3xl">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-left">
                      <span className="text-[10px] tracking-widest uppercase text-[#00D2FF] font-semibold">
                        Operational Standard
                      </span>
                      <p className="text-2xl font-serif mt-1">{selectedService.scope}</p>
                    </div>
                  </div>

                  {/* Project Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/55 backdrop-blur-md border border-[#D2DFEE] p-6 rounded-2xl text-left shadow-sm">
                      <div className="flex items-center space-x-3 text-[#0052FF] mb-2">
                        <Calendar size={18} />
                        <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#475569]">
                          Project Timeline
                        </span>
                      </div>
                      <span className="block text-base md:text-lg font-display font-semibold text-[#0F172A]">
                        {selectedService.timeline}
                      </span>
                      <span className="block text-[10px] text-[#475569] mt-1 font-light leading-relaxed">
                        Varies per site terrain & custom scope requirements.
                      </span>
                    </div>

                    <div className="bg-white/55 backdrop-blur-md border border-[#D2DFEE] p-6 rounded-2xl text-left shadow-sm">
                      <div className="flex items-center space-x-3 text-[#0052FF] mb-2">
                        <Layers size={18} />
                        <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#475569]">
                          Service Tier
                        </span>
                      </div>
                      <span className="block text-base md:text-lg font-display font-semibold text-[#0F172A]">
                        Bespoke Turnkey
                      </span>
                      <span className="block text-[10px] text-[#475569] mt-1 font-light leading-relaxed">
                        Full site setup, civil engineering, and bespoke millwork.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope Description - 5 columns */}
                <div className="lg:col-span-5 text-left space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#0052FF] font-semibold block mb-2">
                      DETAILED FOCUS
                    </span>
                    <h1 className="font-serif text-3xl md:text-4xl text-[#0F172A] tracking-tight leading-tight">
                      {selectedService.title}
                    </h1>
                    <div className="w-12 h-[2.5px] bg-[#0052FF] mt-4 mb-6 rounded-full" />
                    <p className="text-sm text-[#475569] font-light leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  {/* Specific Capabilities Checklist */}
                  <div className="bg-white/40 backdrop-blur-md border border-[#D2DFEE] p-6 rounded-2xl">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-[#0F172A] mb-4">
                      Core Construction Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-1 bg-[#0052FF]/15 p-1 text-[#0052FF] rounded-md">
                            <Check size={12} />
                          </span>
                          <span className="text-xs text-[#334155] font-light leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action box */}
                  <div className="p-6 bg-[#0F172A] text-white rounded-2xl text-left space-y-4 shadow-lg border border-[#0052FF]/25 shadow-[0_10px_30px_rgba(0,82,255,0.06)]">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#00D2FF]">
                      Ready to Discuss Plans?
                    </h4>
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      Speak immediately with our estimator to receive custom structural pricing parameters and site planning recommendations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        id="service-whatsapp-quote-btn"
                        onClick={() => handleWhatsAppQuote(selectedService)}
                        className="flex-1 flex items-center justify-center space-x-2 bg-[#0052FF] hover:bg-[#0040D0] text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                      >
                        <MessageSquare size={14} />
                        <span>WhatsApp Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
