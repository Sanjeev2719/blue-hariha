import { useState } from 'react';
import { Calculator, Layers, Table, Droplet, Paintbrush, Hammer, Wrench, Shield, Check, X, ArrowRight, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { PACKAGES_DATA, STRUCTURAL_EXCELLENCE, PROJECT_STANDARDS, OWNER_RESPONSIBILITIES, PACKAGE_EXCLUSIONS, COMPANY_CONTACTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function PackagesSection() {
  const [selectedPackageId, setSelectedPackageId] = useState('classic');
  const [plotArea, setPlotArea] = useState<number>(1500);
  const [activeTab, setActiveTab] = useState<'specs' | 'standards' | 'exclusions'>('specs');
  const [specCategory, setSpecCategory] = useState<'architecture' | 'structural' | 'flooring' | 'doors' | 'sanitary' | 'finishing'>('structural');

  const selectedPkg = PACKAGES_DATA.find(p => p.id === selectedPackageId) || PACKAGES_DATA[1];
  const estimatedCost = plotArea * selectedPkg.rate;

  const handleWhatsAppEstimate = () => {
    const text = `🏛️ *HARIHA INFRA ESTIMATE BRIEF* 🏛️\n\nI am requesting a formal construction brief:\n- Chosen Package: ${selectedPkg.name} (₹${selectedPkg.rate}/Sq.ft)\n- Built-up Area: ${plotArea} Sq.ft\n- Estimated Budget: ₹${estimatedCost.toLocaleString('en-IN')}\n\nPlease advise on plot verification and initial 2D floor plans.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-[#F4F7FC]/30 border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#F4F7FC]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0052FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
            HARIHA INFRA BUILD PACKAGES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
            Transparent Construction Packages <br />
            <span className="font-serif italic text-[#475569] font-normal">No Hidden Costs. Built to Last.</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed max-w-xl">
            We provide clear, itemized rates per square foot with strict material transparency. Design services are fully included at no extra cost in Classic & Premium tiers.
          </p>
        </div>

        {/* 3 Package Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PACKAGES_DATA.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <motion.div
                id={`pkg-card-${pkg.id}`}
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 md:p-10 text-left relative flex flex-col justify-between transition-all duration-500 rounded-3xl ${
                  isSelected 
                    ? 'bg-[#0F172A] text-white border-2 border-[#0052FF] shadow-[0_20px_50px_rgba(0,82,255,0.08)] scale-102 z-10' 
                    : 'bg-white/50 backdrop-blur-md border border-[#D2DFEE] hover:border-[#0052FF]/40 hover:bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.id === 'classic' && (
                  <span className="absolute top-4 right-4 bg-[#0052FF] text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-widest block mb-2 ${
                    isSelected ? 'text-[#00D2FF]' : 'text-[#475569]'
                  }`}>
                    {pkg.tagline}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight mb-4">
                    {pkg.name} Package
                  </h3>
                  
                  <div className="flex items-baseline space-x-2 my-6">
                    <span className={`text-4xl md:text-5xl font-serif tracking-tight ${
                      isSelected ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                      ₹{pkg.rate.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs uppercase tracking-wider ${
                      isSelected ? 'text-white/60' : 'text-[#475569]/80'
                    }`}>
                      / Sq.ft
                    </span>
                  </div>

                  <p className={`text-xs md:text-sm font-light leading-relaxed mb-8 ${
                    isSelected ? 'text-white/80' : 'text-[#475569]'
                  }`}>
                    {pkg.description}
                  </p>

                  <div className="border-t border-dashed my-6 opacity-30" />

                  {/* Highlights mini-list */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3 text-xs font-light">
                      <Check size={14} className="text-[#0052FF] shrink-0" />
                      <span>Block Work: <strong>{pkg.structural.blockWork}</strong></span>
                    </li>
                    <li className="flex items-center space-x-3 text-xs font-light">
                      <Check size={14} className="text-[#0052FF] shrink-0" />
                      <span>Steel: <strong>{pkg.structural.steelBrand}</strong></span>
                    </li>
                    <li className="flex items-center space-x-3 text-xs font-light">
                      <Check size={14} className="text-[#0052FF] shrink-0" />
                      <span>Sump: <strong>{pkg.structural.sumpCapacity}</strong></span>
                    </li>
                    <li className="flex items-center space-x-3 text-xs font-light">
                      <Check size={14} className="text-[#0052FF] shrink-0" />
                      <span>Living: <strong>{pkg.flooring.livingDining}</strong></span>
                    </li>
                  </ul>
                </div>

                <button
                  id={`pkg-select-btn-${pkg.id}`}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#0052FF] hover:bg-[#0040D0] text-white' 
                      : 'bg-white border border-[#D2DFEE] hover:border-[#0052FF] text-[#475569] hover:text-[#0052FF]'
                  }`}
                >
                  {isSelected ? 'Selected Active Package' : 'Select Package For Estimator'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-8 md:p-10 rounded-3xl mb-16 text-left border border-[#0052FF]/30 shadow-xl relative overflow-hidden"
        >
          {/* Subtle gold decoration */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 items-center">
            <div className="space-y-3">
              <span className="inline-block bg-[#0052FF] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                10-Year Promise & 1024 Quality Checks
              </span>
              <h4 className="font-serif text-2xl md:text-3xl text-white tracking-tight leading-snug">
                Every Handover is Backed by Structural Audits
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Our engineers execute exactly 1024 rigorous quality checkpoints—covering steel grade alignments, slump concrete testing, brick level tolerances, waterproofing seals, and post-curing. If any structural issue arises within 10 years, we resolve it at zero cost.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-4">
              <div className="flex items-center space-x-3 text-[#00D2FF]">
                <ShieldCheck size={24} />
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#F4F7FC]">
                  Timeline Delay Guarantee
                </h5>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                <strong>Your Timeline is Our Deadline:</strong> We plan with exact Gantt charting. If we do not meet your scheduled project handover date due to delays under our control, <strong>we will refund 2% of the entire project amount</strong>, no questions asked.
              </p>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#00D2FF] flex items-center space-x-1.5">
                <span>⚡ IRONCLAD & TRANSPARENT CONTRACTS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cost Estimator Panel */}
        <motion.div
          id="cost-estimator-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-md border border-[#D2DFEE] p-8 md:p-12 rounded-3xl mb-16 text-left shadow-[0_10px_30px_rgba(0,82,255,0.01)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Calculator Inputs - 6 Columns */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3 text-[#0052FF]">
                <Calculator size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Interactive Cost Estimator</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-[#0F172A] tracking-tight">
                Simulate Your Built-Up Cost
              </h3>
              <p className="text-xs md:text-sm text-[#475569] font-light leading-relaxed">
                Enter your proposed building built-up area (in Square Feet) to estimate the total execution cost including design, materials, civil works, and standard finishes.
              </p>

              <div className="space-y-4 pt-4">
                <label className="block text-[10px] uppercase tracking-wider font-bold text-[#0F172A]">
                  Built-Up Area (Sq.ft)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={plotArea}
                    onChange={(e) => setPlotArea(Number(e.target.value))}
                    className="w-full h-1 bg-[#D2DFEE] rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
                  />
                  <div className="relative shrink-0">
                    <input
                      type="number"
                      min="500"
                      max="20000"
                      value={plotArea}
                      onChange={(e) => setPlotArea(Number(e.target.value))}
                      className="bg-white border border-[#D2DFEE] px-4 py-2.5 rounded-xl text-xs font-semibold w-24 text-center focus:border-[#0052FF] focus:outline-none"
                    />
                    <span className="absolute right-2 top-2.5 text-[8px] text-[#475569]">SF</span>
                  </div>
                </div>

                <div className="flex justify-between text-[10px] text-[#475569] px-1 font-light">
                  <span>1,000 Sq.ft (Small Villa)</span>
                  <span>10,000+ Sq.ft (Large Complex)</span>
                </div>
              </div>
            </div>

            {/* Calculations Output - 6 Columns */}
            <div className="lg:col-span-6 bg-[#0F172A] text-white border border-[#0052FF]/20 p-8 rounded-2xl flex flex-col justify-between h-full shadow-lg">
              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#00D2FF] block">
                  ESTIMATED CONSTRUCTION ESTIMATE
                </span>
                
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs font-bold text-white/60">₹</span>
                  <span className="text-4xl md:text-5xl font-serif tracking-tight text-white">
                    {estimatedCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-white/60 uppercase font-light pl-2">
                    Total Estimated Cost
                  </span>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-light text-white/70">
                  <div className="flex justify-between">
                    <span>Selected Tier:</span>
                    <strong className="font-semibold text-white">{selectedPkg.name} (₹{selectedPkg.rate}/Sq.ft)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Proposed Area:</span>
                    <strong className="font-semibold text-white">{plotArea.toLocaleString()} Sq.ft</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sump Capacity Included:</span>
                    <strong className="font-semibold text-white">{selectedPkg.structural.sumpCapacity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Architectural services fee:</span>
                    <strong className="text-green-400 font-semibold uppercase tracking-wider text-[10px]">
                      {selectedPkg.id === 'standard' ? 'Extra' : 'Fully Included (₹0)'}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  id="estimator-whatsapp-inquiry"
                  onClick={handleWhatsAppEstimate}
                  className="w-full flex items-center justify-center space-x-3 bg-[#0052FF] hover:bg-[#0040D0] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageSquare size={14} className="text-white" />
                  <span>Get Formal Design-Build Quote</span>
                </button>
                <p className="text-[9px] text-white/40 text-center mt-3 font-light leading-relaxed">
                  *Estimates do not include Govt connection deposits, temporary power/water, or applicable GST.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Controls (Specs Matrix, Standards & Guarantee, Exclusions) */}
        <div className="border-b border-[#D2DFEE] mb-12">
          <div className="flex space-x-8">
            <button
              id="tab-specs"
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-xs font-semibold uppercase tracking-widest relative cursor-pointer ${
                activeTab === 'specs' ? 'text-[#0052FF]' : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <span>Detailed Specs Comparison</span>
              {activeTab === 'specs' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0052FF]" />
              )}
            </button>
            <button
              id="tab-standards"
              onClick={() => setActiveTab('standards')}
              className={`pb-4 text-xs font-semibold uppercase tracking-widest relative cursor-pointer ${
                activeTab === 'standards' ? 'text-[#0052FF]' : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <span>Structural Excellence & Standards</span>
              {activeTab === 'standards' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0052FF]" />
              )}
            </button>
            <button
              id="tab-exclusions"
              onClick={() => setActiveTab('exclusions')}
              className={`pb-4 text-xs font-semibold uppercase tracking-widest relative cursor-pointer ${
                activeTab === 'exclusions' ? 'text-[#0052FF]' : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <span>Responsibilities & Exclusions</span>
              {activeTab === 'exclusions' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0052FF]" />
              )}
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'specs' && (
            <motion.div
              key="specs-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Spec Subcategories Slider */}
              <div className="flex flex-wrap gap-2 justify-start pb-2">
                {[
                  { value: 'structural', label: 'Structural Specs', icon: <Hammer size={12} /> },
                  { value: 'architecture', label: 'Architecture & Design', icon: <Layers size={12} /> },
                  { value: 'flooring', label: 'Flooring Details', icon: <Table size={12} /> },
                  { value: 'doors', label: 'Doors & Windows', icon: <Wrench size={12} /> },
                  { value: 'sanitary', label: 'Sanitary & Plumbing', icon: <Droplet size={12} /> },
                  { value: 'finishing', label: 'Painting & Electrical', icon: <Paintbrush size={12} /> },
                ].map((cat) => (
                  <button
                    id={`cat-btn-${cat.value}`}
                    key={cat.value}
                    onClick={() => setSpecCategory(cat.value as any)}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                      specCategory === cat.value
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-white/50 border border-[#D2DFEE] text-[#475569] hover:bg-white hover:text-[#0F172A]'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Specification Table Grid */}
              <div className="border border-[#D2DFEE] rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm text-left">
                <div className="overflow-x-auto scrollbar-thin">
                  <div className="min-w-[800px]">
                    <div className="grid grid-cols-12 bg-[#0F172A] p-5 text-white text-xs uppercase tracking-widest font-semibold border-b border-[#D2DFEE]/10">
                      <div className="col-span-3">Specification Item</div>
                      <div className="col-span-3 border-l border-white/10 pl-4">Standard Package</div>
                      <div className="col-span-3 border-l border-white/10 pl-4 text-[#00D2FF]">Classic Package</div>
                      <div className="col-span-3 border-l border-white/10 pl-4">Premium Package</div>
                    </div>

                    {/* Render Rows Dynamically based on SpecCategory */}
                    <div className="divide-y divide-[#D2DFEE]/60 text-xs font-light text-[#334155]">
                      {specCategory === 'structural' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Block Work Type</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].structural.blockWork}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].structural.blockWork}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].structural.blockWork}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Cement Brand</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].structural.cementBrand}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].structural.cementBrand}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].structural.cementBrand}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Steel Brand</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].structural.steelBrand}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].structural.steelBrand}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].structural.steelBrand}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Sump Capacity</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].structural.sumpCapacity}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].structural.sumpCapacity}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].structural.sumpCapacity}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Lintel Height</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].structural.lintelHeight}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].structural.lintelHeight}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].structural.lintelHeight}</div>
                          </div>
                        </>
                      )}

                      {specCategory === 'architecture' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">2D Floor Plan</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].architecture.floorPlan}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].architecture.floorPlan}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].architecture.floorPlan}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">3D Elevation</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].architecture.elevation}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].architecture.elevation}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].architecture.elevation}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">3D Interior Visual</div>
                            <div className="col-span-3 pl-4 text-red-500">{PACKAGES_DATA[0].architecture.interior}</div>
                            <div className="col-span-3 pl-4 text-red-500 font-medium">{PACKAGES_DATA[1].architecture.interior}</div>
                            <div className="col-span-3 pl-4 text-green-600 font-medium">{PACKAGES_DATA[2].architecture.interior}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Plumbing & Electrical Maps</div>
                            <div className="col-span-3 pl-4 text-green-600 font-medium">{PACKAGES_DATA[0].architecture.plumbingElec}</div>
                            <div className="col-span-3 pl-4 text-green-600 font-semibold text-[#0052FF]">{PACKAGES_DATA[1].architecture.plumbingElec}</div>
                            <div className="col-span-3 pl-4 text-green-600 font-medium">{PACKAGES_DATA[2].architecture.plumbingElec}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Structural Design Drafts</div>
                            <div className="col-span-3 pl-4 text-green-600 font-medium">{PACKAGES_DATA[0].architecture.structural}</div>
                            <div className="col-span-3 pl-4 text-green-600 font-semibold text-[#0052FF]">{PACKAGES_DATA[1].architecture.structural}</div>
                            <div className="col-span-3 pl-4 text-green-600 font-medium">{PACKAGES_DATA[2].architecture.structural}</div>
                          </div>
                        </>
                      )}

                      {specCategory === 'flooring' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Living & Dining Areas</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].flooring.livingDining}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].flooring.livingDining}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].flooring.livingDining}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Rooms & Kitchen Flooring</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].flooring.roomsKitchen}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].flooring.roomsKitchen}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].flooring.roomsKitchen}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Staircase (Internal)</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].flooring.staircase}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].flooring.staircase}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].flooring.staircase}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Parking Tile Flooring</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].flooring.parking}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].flooring.parking}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].flooring.parking}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Waterproofing Seal</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].flooring.waterproofing}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].flooring.waterproofing}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].flooring.waterproofing}</div>
                          </div>
                        </>
                      )}

                      {specCategory === 'doors' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Main Entrance Door</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].doorsWindows.mainDoor}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].doorsWindows.mainDoor}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].doorsWindows.mainDoor}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Pooja Room Door</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].doorsWindows.poojaDoor}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].doorsWindows.poojaDoor}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].doorsWindows.poojaDoor}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Internal Door Frames</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].doorsWindows.intFrames}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].doorsWindows.intFrames}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].doorsWindows.intFrames}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Windows Frame Type</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].doorsWindows.windows}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].doorsWindows.windows}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].doorsWindows.windows}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Safety Hex Rod Grills</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].doorsWindows.safety}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].doorsWindows.safety}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].doorsWindows.safety}</div>
                          </div>
                        </>
                      )}

                      {specCategory === 'sanitary' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Ceramic Toilet Tiles</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].sanitaryPlumbing.ceramicTiles}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].sanitaryPlumbing.ceramicTiles}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].sanitaryPlumbing.ceramicTiles}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Bath Fixture Allowance</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].sanitaryPlumbing.bathAllowance}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].sanitaryPlumbing.bathAllowance}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].sanitaryPlumbing.bathAllowance}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Sanitary Ware Brand</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].sanitaryPlumbing.brands}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].sanitaryPlumbing.brands}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].sanitaryPlumbing.brands}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Waterline Pipework</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].sanitaryPlumbing.waterline}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].sanitaryPlumbing.waterline}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].sanitaryPlumbing.waterline}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Overhead Ganga Tank</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[0].sanitaryPlumbing.overheadTank}</div>
                            <div className="col-span-3 pl-4 font-medium text-[#0052FF]">{PACKAGES_DATA[1].sanitaryPlumbing.overheadTank}</div>
                            <div className="col-span-3 pl-4">{PACKAGES_DATA[2].sanitaryPlumbing.overheadTank}</div>
                          </div>
                        </>
                      )}

                      {specCategory === 'finishing' && (
                        <>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Interior Wall Painting</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[0].finishing?.interiorPainting}</div>
                            <div className="col-span-3 pl-4 text-xs font-medium text-[#0052FF]">{PACKAGES_DATA[1].finishing?.interiorPainting}</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[2].finishing?.interiorPainting}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Exterior Wall Protection</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[0].finishing?.exteriorPainting}</div>
                            <div className="col-span-3 pl-4 text-xs font-medium text-[#0052FF]">{PACKAGES_DATA[1].finishing?.exteriorPainting}</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[2].finishing?.exteriorPainting}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center bg-white/40">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Electrical Wire Quality</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[0].finishing?.electricalWires}</div>
                            <div className="col-span-3 pl-4 text-xs font-medium text-[#0052FF]">{PACKAGES_DATA[1].finishing?.electricalWires}</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[2].finishing?.electricalWires}</div>
                          </div>
                          <div className="grid grid-cols-12 p-5 items-center">
                            <div className="col-span-3 font-semibold text-[#0F172A]">Switches & Plates Type</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[0].finishing?.switchesPlates}</div>
                            <div className="col-span-3 pl-4 text-xs font-medium text-[#0052FF]">{PACKAGES_DATA[1].finishing?.switchesPlates}</div>
                            <div className="col-span-3 pl-4 text-xs font-light">{PACKAGES_DATA[2].finishing?.switchesPlates}</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'standards' && (
            <motion.div
              key="standards-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
            >
              {/* Structural Excellence Card */}
              <div className="bg-[#F4F7FC]/40 backdrop-blur-md border border-[#D2DFEE] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 text-[#0052FF]">
                  <ShieldCheck size={22} />
                  <h3 className="font-serif text-xl md:text-2xl text-[#0F172A]">Structural Excellence</h3>
                </div>
                <p className="text-xs text-[#475569] font-light leading-relaxed">
                  Every structure we build adheres to rigid structural engineering calculations, utilizing solid masonry and heavy-duty concrete pouring:
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start space-x-3">
                    <span className="bg-[#0052FF]/10 p-1 text-[#0052FF] rounded-md mt-0.5 font-bold text-[9px] w-5 h-5 flex items-center justify-center">1</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">Pillar Depth</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{STRUCTURAL_EXCELLENCE.pillarDepth}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-[#0052FF]/10 p-1 text-[#0052FF] rounded-md mt-0.5 font-bold text-[9px] w-5 h-5 flex items-center justify-center">2</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">Concrete Mix Design</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{STRUCTURAL_EXCELLENCE.concreteMix}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-[#0052FF]/10 p-1 text-[#0052FF] rounded-md mt-0.5 font-bold text-[9px] w-5 h-5 flex items-center justify-center">3</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">Steel Reinforcement</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{STRUCTURAL_EXCELLENCE.steelQuality}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-[#0052FF]/10 p-1 text-[#0052FF] rounded-md mt-0.5 font-bold text-[9px] w-5 h-5 flex items-center justify-center">4</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">Masonry Composition</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{STRUCTURAL_EXCELLENCE.masonry}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Project Standards Card */}
              <div className="bg-[#F4F7FC]/40 backdrop-blur-md border border-[#D2DFEE] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 text-[#0052FF]">
                  <Shield size={22} />
                  <h3 className="font-serif text-xl md:text-2xl text-[#0F172A]">Operational Guarantees</h3>
                </div>
                <p className="text-xs text-[#475569] font-light leading-relaxed">
                  We guarantee clear operational timelines, spacious height standards, and pre-construction treatments to safeguard your property value:
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start space-x-3">
                    <span className="bg-green-100 text-green-700 p-1 rounded-full mt-0.5"><Check size={12} /></span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">12-Month Structural Delivery</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{PROJECT_STANDARDS.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-green-100 text-green-700 p-1 rounded-full mt-0.5"><Check size={12} /></span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">10' 6" Spacious Roof Height</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{PROJECT_STANDARDS.roofHeight}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-green-100 text-green-700 p-1 rounded-full mt-0.5"><Check size={12} /></span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">Anti-Termite Treatment</h4>
                      <p className="text-xs text-[#475569] font-light mt-0.5">{PROJECT_STANDARDS.termiteTreatment}</p>
                    </div>
                  </li>
                </ul>
                <div className="p-4 bg-white/80 border border-dashed border-[#D2DFEE] rounded-2xl text-xs font-light text-[#475569] leading-relaxed">
                  *All G+3 villas are fully warranted. We provide structured slab casting audits after every major floor layout completion.
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'exclusions' && (
            <motion.div
              key="exclusions-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
            >
              {/* Owner Responsibilities Card */}
              <div className="bg-[#F4F7FC]/40 backdrop-blur-md border border-[#D2DFEE] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 text-[#0052FF]">
                  <HelpCircle size={22} />
                  <h3 className="font-serif text-xl md:text-2xl text-[#0F172A]">Client Responsibilities</h3>
                </div>
                <p className="text-xs text-[#475569] font-light leading-relaxed">
                  As the property owner, the following items remain outside standard build package scopes and must be provided by the client:
                </p>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {OWNER_RESPONSIBILITIES.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-[#334155] font-light leading-relaxed">
                      <span className="text-[#0052FF] font-semibold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Exclusions Card */}
              <div className="bg-[#F4F7FC]/40 backdrop-blur-md border border-[#D2DFEE] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 text-[#475569]">
                  <X size={20} className="text-red-500 shrink-0" />
                  <h3 className="font-serif text-xl md:text-2xl text-[#0F172A]">Standard Package Exclusions</h3>
                </div>
                <p className="text-xs text-[#475569] font-light leading-relaxed">
                  The following finishing, appliances, or decorative parameters are explicitly excluded from standard building package pricing:
                </p>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {PACKAGE_EXCLUSIONS.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-[#475569] font-light leading-relaxed">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
