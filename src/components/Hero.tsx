import { ArrowRight, MessageSquare, Shield, Award, CheckCircle, Flame, Gift } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreProjects, onOpenContact }: HeroProps) {
  const openWhatsApp = () => {
    const encodedText = encodeURIComponent(
      "Hello! I am viewing your HARIHA INFRA website and would like to request an immediate construction package consultation & quote."
    );
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const trustBadges = [
    { 
      icon: <Award className="text-[#0052FF]" size={22} />, 
      title: '10 Years Promise', 
      desc: 'Complete Post-Handover Warranty' 
    },
    { 
      icon: <CheckCircle className="text-[#0052FF]" size={22} />, 
      title: '1024 Quality Checks', 
      desc: 'Tested block work & concrete' 
    },
    { 
      icon: <Flame className="text-[#0052FF]" size={22} />, 
      title: 'Timeline Guarantee', 
      desc: 'Or 2% Project Refund Back' 
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F4F7FC] via-white to-[#F4F7FC]/40 pt-24 pb-16">
      
      {/* Premium BMW Laserlight Blue & Cyan Decorative Ambient Blur Circles */}
      <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute left-[-15%] bottom-[-10%] w-[45vw] h-[45vw] bg-[#00D2FF]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid line pattern background for structural blueprint aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D2DFEE_1px,transparent_1px),linear-gradient(to_bottom,#D2DFEE_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative vertical blueprint coordinate line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#0052FF]/20 via-transparent to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left text column - 7 Columns for spacious typography */}
        <div className="lg:col-span-7 text-left space-y-8">
          
          {/* Animated top micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2.5 bg-white border border-[#D2DFEE] px-4.5 py-2 rounded-full shadow-[0_4px_15px_rgba(0,82,255,0.05)]"
          >
            <span className="w-2 h-2 bg-[#0052FF] rounded-full animate-ping" />
            <span className="text-[9px] md:text-[10px] font-sans font-bold text-[#334155] uppercase tracking-[0.25em]">
              BENGALURU’S PREMIER BUILDING SOLUTIONS — SINCE 2002
            </span>
          </motion.div>

          {/* Majestic Serif Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#0F172A] tracking-tight leading-tight lg:leading-[1.05]">
              Building Quality. <br />
              <span className="font-serif italic text-[#0052FF] font-normal">Delivering Trust.</span>
            </h1>
          </motion.div>

          {/* Professional Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-[#475569] font-light max-w-xl leading-relaxed"
          >
            Hariha Infra Private Limited provides elite turnkey residential construction, custom home interiors, and structural renovation works across Bengaluru. We guarantee an ironclad 10-Year Promise and exactly 1024 quality checkpoints before delivery.
          </motion.p>

          {/* Your Timeline is Our Deadline Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l-2 border-[#0052FF] pl-4 text-xs font-light text-[#475569] max-w-md bg-white/70 backdrop-blur-xs py-3 pr-3 rounded-r-xl"
          >
            <strong className="text-[#0F172A] font-semibold">Your Timeline is Our Deadline:</strong> If we fail to meet your scheduled handover date, we will refund <strong className="text-[#0052FF]">2% of the project amount</strong>, no questions asked.
          </motion.div>

          {/* Custom CTA Action Row with hover micro-animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              id="hero-explore-cta-light"
              onClick={onExploreProjects}
              className="group flex items-center justify-center space-x-3 bg-[#0052FF] hover:bg-[#0040D0] text-white px-8 py-4.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-whatsapp-cta-light"
              onClick={openWhatsApp}
              className="flex items-center justify-center space-x-3 bg-white hover:bg-[#F4F7FC] text-[#0F172A] border border-[#D2DFEE] hover:border-[#0052FF] px-8 py-4.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl shadow-sm hover:shadow-md cursor-pointer"
            >
              {/* Custom SVG logo representing authentic styled WhatsApp Logo */}
              <svg className="w-4 h-4 fill-current text-green-600" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.388 2.016 13.921 1.01 11.29 1.01c-5.443 0-9.869 4.371-9.873 9.8-.001 1.724.456 3.41 1.32 4.904l-.991 3.616 3.738-.967zm12.355-6.848c-.347-.171-2.052-.997-2.37-1.11-.318-.113-.55-.171-.78.171-.231.341-.89 1.11-1.092 1.333-.202.223-.404.25-.751.079-.347-.171-1.464-.53-2.788-1.687-1.03-.902-1.725-2.016-1.927-2.358-.202-.341-.022-.526.15-.696.155-.153.347-.398.52-.596.173-.199.231-.341.347-.568.116-.228.058-.427-.029-.597-.087-.171-.78-1.844-1.07-2.522-.281-.663-.566-.573-.78-.584-.2-.01-.43-.01-.66-.01-.23 0-.606.085-.923.427-.317.341-1.21 1.166-1.21 2.842 0 1.677 1.24 3.298 1.414 3.525.173.228 2.44 3.664 5.912 5.127.826.348 1.47.556 1.973.713.83.259 1.585.223 2.181.136.665-.098 2.052-.823 2.34-1.62.289-.797.289-1.48.202-1.62-.087-.14-.318-.228-.665-.398z"/>
              </svg>
              <span>Get PDF Brochure via WhatsApp</span>
            </button>
          </motion.div>

        </div>

        {/* Right high-end image container - 5 Columns with parallax entry and hover overlay */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Elegant Solid Laser Blue Frame Behind Image */}
            <div className="absolute -inset-4 border border-[#0052FF]/30 rounded-3xl translate-x-3 translate-y-3 pointer-events-none z-0" />
            
            {/* Main Image Frame */}
            <div className="overflow-hidden border border-[#D2DFEE] rounded-3xl shadow-[0_20px_50px_rgba(0,82,255,0.08)] aspect-[4/5] relative z-10 bg-white group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Hariha Premium Villa"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Floating warranty marker inside image */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-20 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-2xl">
                <span className="text-[9px] uppercase tracking-widest text-[#00D2FF] font-bold block mb-1">
                  100% Turnkey Delivery
                </span>
                <p className="font-serif text-lg leading-tight text-[#F4F7FC]">
                  G+3 Residential Projects Handed Over In Bengaluru
                </p>
              </div>
            </div>

            {/* Float Badge 1 - Quality Checks */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -left-8 top-12 bg-[#0F172A] text-white border border-[#0052FF]/30 p-4 rounded-2xl shadow-lg text-left hidden sm:block z-20"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#00D2FF]">1,024</span>
                <span className="text-[8px] uppercase tracking-widest font-bold text-white/70 block">QC Audits</span>
              </div>
              <p className="text-[9px] text-white/50 font-light mt-1">Conducted per property</p>
            </motion.div>

            {/* Float Badge 2 - Referral Incentive */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -right-8 bottom-20 bg-white text-[#0F172A] border border-[#D2DFEE] p-4.5 rounded-2xl shadow-lg text-left hidden sm:block z-20"
            >
              <div className="flex items-center space-x-2 text-[#0052FF]">
                <Gift size={16} />
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#0F172A]">Refer & Earn</span>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mt-1">Up to ₹1,00,000</p>
              <p className="text-[8px] text-[#475569] font-light mt-0.5">For successful leads</p>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Trust Badges Bar - Full Grid Alignment */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-[#F4F7FC] border-t border-[#D2DFEE] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-center space-x-4 justify-start text-left"
            >
              <div className="w-10 h-10 bg-white border border-[#D2DFEE] flex items-center justify-center rounded-xl shadow-sm text-[#0052FF] shrink-0">
                {badge.icon}
              </div>
              <div>
                <span className="block text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                  {badge.title}
                </span>
                <span className="block text-[10px] text-[#475569] font-light mt-0.5 leading-none">
                  {badge.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
