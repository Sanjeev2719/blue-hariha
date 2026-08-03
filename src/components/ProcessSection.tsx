import { useState } from 'react';
import { Compass, Hammer, Paintbrush, Award, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'I. Spatial Drafting & Feasibility',
      icon: <Compass size={24} />,
      subtitle: 'Mapping concepts, structural drafting, and material schedules',
      description: 'We align your aesthetic vision with site zoning rules, environmental constraints, and structural parameters. This phase delivers high-fidelity 3D renderings, exact wood and stone procurement schedules, and guaranteed cost estimations.',
      duration: '6 Weeks (Month 1)',
      deliverables: ['Digital 3D BIM Walkthroughs', 'Full Material and Hardware Schedules', 'Civil Engineering Permits & Approvals']
    },
    {
      title: 'II. Civil Shell & Structural Engineering',
      icon: <Hammer size={24} />,
      subtitle: 'Earthworks, deep foundations, structural steel, and framing',
      description: 'The foundation of absolute structural durability. We execute heavy civil work including soil compaction, steel reinforcement rebar setup, post-tension concrete pours, and structural framing that guarantees decades of load stability.',
      duration: '20 Weeks (Months 2–6)',
      deliverables: ['Tested Concrete Pour Certifications', 'Premium Steel and Timber Framing', 'Underground Utility & Geothermal Piping']
    },
    {
      title: 'III. Architectural Enclosure & Interior',
      icon: <Paintbrush size={24} />,
      subtitle: 'Weatherproofing, custom marble fabrication, and bespoke millwork',
      description: 'Where structural shell meets classic elegance. We wrap the building in high-performance insulation before laying premium stucco, stone veneers, and triple-pane glass facades. Inside, our master craftsmen fit custom walnut cabinetry, marble countertops, and ambient lighting arrays.',
      duration: '22 Weeks (Months 7–11)',
      deliverables: ['Full Waterproofing Certification', 'Italian Marble Counter & Bath Installs', 'Concealed Smart HVAC & Acoustic Balancing']
    },
    {
      title: 'IV. Precision Commissioning & Handover',
      icon: <Award size={24} />,
      subtitle: 'Net-zero testing, safety checks, and 1-Year guaranteed builder handover',
      description: 'A structural masterpiece is not complete until every single subsystem is fine-tuned. We perform professional thermal leak audits, smart home system synclinking, pressure checks, and handover full legal permits alongside our signature 10-year structural warranty pack within exactly 12 months.',
      duration: '4 Weeks (Month 12 - Key Handover)',
      deliverables: ['Certified Home Energy Rating (HERS)', 'Smart System Hub Diagnostics', '10-Year Builder Structural Warranty Pack & Key Handover']
    }
  ];

  const handleWhatsAppProcessInquiry = () => {
    const text = `Hello Hariha Infra, I have read through your 4-Phase Construction Process and would like to schedule a Phase I Spatial Drafting Consultation for my upcoming project.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="process" className="py-24 bg-[#F4F7FC]/25 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block">
              STRATEGIC SEQUENCE
            </span>
            <span className="bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#0052FF] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              1-Year Handover Guaranteed
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
            The Architectural Path <br />
            <span className="font-serif italic text-[#475569] font-normal">Aligned for Complete Handover Within 1 Year</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed max-w-xl">
            From raw soil and blueprint schematics to turnkey key handovers, our transparent 4-phase sequence guarantees your build is completed and handed over in exactly 12 months (52 weeks).
          </p>
        </motion.div>

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vertical Step selectors (5 columns) with entry animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {steps.map((step, idx) => (
              <button
                id={`process-step-tab-${idx}`}
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 border transition-all duration-500 flex items-center space-x-5 cursor-pointer relative rounded-2xl ${
                  activeStep === idx
                    ? 'bg-white/60 border-white/80 shadow-[0_10px_30px_rgba(181,148,110,0.06)]'
                    : 'bg-white/30 border-white/45 hover:bg-white/50 hover:border-white/60 border-white/40'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeStep === idx && (
                  <motion.div
                    layoutId="activeProcessBar"
                    className="absolute left-0 top-4 bottom-4 w-[4px] bg-[#0052FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}

                <div className={`p-3.5 border transition-all duration-300 rounded-xl ${
                  activeStep === idx
                    ? 'bg-[#0F172A] text-[#F4F7FC] border-[#0F172A] scale-105 shadow-sm'
                    : 'bg-[#F4F7FC]/40 text-[#475569] border-white/50'
                }`}>
                  {step.icon}
                </div>

                <div>
                  <h3 className={`font-serif text-base tracking-tight font-semibold transition-colors duration-300 ${
                    activeStep === idx ? 'text-[#0F172A]' : 'text-[#475569]'
                  }`}>
                    {step.title}
                  </h3>
                  <span className="block text-[10px] text-[#0052FF] uppercase tracking-wider mt-0.5 font-sans font-medium">
                    Duration: {step.duration}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right Column: Step details display (7 columns) with fade & slide */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/45 backdrop-blur-md border border-white/60 p-8 md:p-12 text-left relative overflow-hidden min-h-[480px] flex flex-col justify-between rounded-3xl shadow-[0_15px_35px_rgba(78,67,47,0.02)]"
              >
                {/* Ambient background decoration */}
                <div className="absolute top-10 right-10 text-[120px] font-serif font-bold text-[#D2DFEE]/20 leading-none pointer-events-none select-none">
                  0{activeStep + 1}
                </div>

                <div className="relative z-10 space-y-6">
                  <span className="text-[10px] uppercase font-semibold text-[#0052FF] tracking-[0.25em] block">
                    PHASE 0{activeStep + 1} • {steps[activeStep].duration}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-[#0F172A] tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#334155] italic leading-relaxed">
                    "{steps[activeStep].subtitle}"
                  </p>

                  <p className="text-xs md:text-sm text-[#475569] font-light leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-6 border-t border-white/50">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#0F172A] mb-4">
                      Key Milestones & Handouts
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {steps[activeStep].deliverables.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2.5 text-xs font-light text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA action buttons inside Process */}
                <div className="relative z-10 pt-8 border-t border-white/50 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div className="text-left w-full sm:w-auto">
                    <span className="block text-[9px] text-[#475569] uppercase tracking-wider font-medium">Estimated Timeline</span>
                    <span className="block text-sm font-bold text-[#0F172A] font-display">{steps[activeStep].duration}</span>
                  </div>

                  <button
                    id="process-whatsapp-consult-btn"
                    onClick={handleWhatsAppProcessInquiry}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#0F172A] hover:bg-[#0052FF] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer border border-white/10"
                  >
                    <MessageSquare size={14} className="text-[#0052FF]" />
                    <span>Discuss Phase 0{activeStep + 1} Details</span>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
