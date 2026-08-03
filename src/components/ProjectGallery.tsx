import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS_DATA, COMPANY_CONTACTS } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Layers, X, MessageSquare, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

function ProjectCardTile({ project, idx, onSelect, isPaused }: { project: Project; idx: number; onSelect: (project: Project) => void; isPaused?: boolean; key?: string }) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1 || isPaused || project.video) return;
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isPaused, project.video]);

  return (
    <motion.div
      id={`project-card-${project.id}`}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onClick={() => onSelect(project)}
      className="group relative overflow-hidden border border-white/60 shadow-[0_10px_30px_rgba(78,67,47,0.02)] hover:shadow-[0_20px_50px_rgba(181,148,110,0.12)] transition-all duration-500 bg-white/45 backdrop-blur-md rounded-3xl cursor-pointer flex flex-col justify-between transform-gpu"
    >
      {/* Video Tour Badge */}
      {project.video ? (
        <span className="absolute top-4 left-4 z-20 bg-[#0052FF] text-white text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/30 shadow-lg flex items-center space-x-1.5 backdrop-blur-md">
          <Play size={10} className="fill-current" />
          <span>Video Tour</span>
        </span>
      ) : null}

      {/* Status Badge for Ongoing Builds */}
      {project.status ? (
        <span className="absolute top-4 right-4 z-20 bg-green-600/90 text-white text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/30 shadow-lg flex items-center space-x-1.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
          <span>{project.status}</span>
        </span>
      ) : images.length > 1 ? (
        <span className="absolute top-4 right-4 z-20 bg-black/50 text-white text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
          {images.length} Photos
        </span>
      ) : null}

      {/* Image or Video Container */}
      <div className="aspect-4/3 w-full overflow-hidden relative rounded-t-3xl bg-[#0F172A]">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu"
          />
        ) : (
          images.map((imgUrl, i) => (
            <motion.img
              key={imgUrl}
              src={imgUrl}
              alt={project.title}
              initial={false}
              animate={{
                opacity: i === currentImgIdx ? 1 : 0,
                scale: i === currentImgIdx ? 1 : 1.04
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
              referrerPolicy="no-referrer"
            />
          ))
        )}

        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-[#0F172A]/10 group-hover:bg-[#0F172A]/50 transition-colors duration-500" />

        {/* Slideshow Progress Dots */}
        {!project.video && images.length > 1 && (
          <div className="absolute bottom-3 left-4 z-20 flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
            {images.slice(0, 8).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentImgIdx % Math.min(images.length, 8) === dotIdx ? 'w-4 bg-[#00D2FF]' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover Floating Details Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <span className="self-start bg-[#F4F7FC] text-[#0F172A] text-[9px] font-sans font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 shadow-sm rounded-full border border-[#D2DFEE]/50">
            {project.category === 'onsite' ? 'On-Site Progress' : project.category === 'interiors' ? 'Bespoke Interiors' : project.category}
          </span>
          <div className="text-left text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="flex items-center space-x-1.5 text-[10px] text-[#0052FF] font-semibold uppercase tracking-widest mb-1">
              <MapPin size={10} />
              <span>{project.location}</span>
            </span>
            <h3 className="font-serif text-xl tracking-tight text-[#F4F7FC] mb-2">{project.title}</h3>
            <span className="text-[10px] text-white/90 tracking-widest uppercase font-semibold group-hover:text-[#0052FF] transition-colors flex items-center space-x-1">
              <span>{project.video ? 'Play 4K Video Tour' : images.length > 1 ? `View Gallery (${images.length} Photos)` : 'Read Case Study'}</span>
              <ArrowRight size={10} />
            </span>
          </div>
        </div>
      </div>

      {/* Constant Card Footer */}
      <div className="p-6 text-left border-t border-white/50 bg-white/20 group-hover:bg-white/60 transition-colors duration-300 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-widest text-[#0052FF] font-bold">
            {project.category === 'onsite' ? 'On-Site Progress' : project.category === 'interiors' ? 'Bespoke Interiors' : project.category}
          </span>
          {project.video ? (
            <span className="text-[9px] uppercase tracking-wider text-[#0052FF] font-bold flex items-center space-x-1">
              <Play size={10} className="fill-current" />
              <span>Video Walkthrough</span>
            </span>
          ) : images.length > 1 ? (
            <span className="text-[9px] uppercase tracking-wider text-[#475569] font-medium">
              Photo {currentImgIdx + 1} of {images.length}
            </span>
          ) : null}
        </div>
        <h4 className="font-serif text-base text-[#0F172A] tracking-tight mt-1">{project.title}</h4>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#D2DFEE]/40 text-[10px] text-[#475569] font-light font-sans uppercase tracking-wider">
          <span>{project.location}</span>
          <span className="font-semibold text-[#0F172A]">{project.size}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<number>(0);

  // Lock body scroll and preload selected project images when modal lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      if (selectedProject.images) {
        selectedProject.images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories = [
    { label: 'All Projects', id: 'all' },
    { label: 'On-Site Progress (Live)', id: 'onsite' },
    { label: 'Completed Masterpieces', id: 'completed' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : activeCategory === 'onsite'
    ? PROJECTS_DATA.filter(project => project.category === 'onsite' || project.id.includes('ongoing'))
    : PROJECTS_DATA.filter(project => project.video || project.status === 'Completed Masterpiece');

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveLightboxImg(0);
  };

  const handleWhatsAppProjectInquiry = (project: Project) => {
    const text = `Hi Hariha Infra, I am deeply impressed by your portfolio project: "${project.title}" in ${project.location} (${project.size}, built in ${project.year}). I would like to enquire about constructing a similar premium structure.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <section id="projects" className="py-24 bg-[#F4F7FC]/25 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl text-left">
            <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
              PRECISE EXECUTION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Our Completed & Ongoing Masterpieces <br />
              <span className="font-serif italic text-[#475569] font-normal">Timeless Living Architecture</span>
            </h2>
          </div>

          {/* Filter Navigation - Kept strictly on a single horizontal row */}
          <div className="flex items-center space-x-2 md:space-x-6 border-b border-[#D2DFEE]/50 pb-2 md:pb-0 shrink-0 whitespace-nowrap overflow-x-auto">
            {categories.map((cat) => (
              <button
                id={`portfolio-filter-tab-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 md:px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer relative shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-[#0052FF]'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0052FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCardTile
                key={project.id}
                project={project}
                idx={idx}
                onSelect={handleSelectProject}
                isPaused={selectedProject !== null}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>

      {/* Detailed Case Study Lightbox Overlay rendered via Portal to document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (() => {
            const projectImages = selectedProject.images && selectedProject.images.length > 0
              ? selectedProject.images
              : [selectedProject.image];

            return (
              <motion.div
                id="portfolio-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6 overflow-hidden bg-[#0F172A]/90 backdrop-blur-md transform-gpu"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#F4F7FC] w-[94vw] md:w-[86vw] max-w-[1550px] h-[90vh] md:h-[86vh] border border-white/60 shadow-[0_25px_70px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col md:flex-row rounded-3xl my-auto z-10 transform-gpu"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    id="lightbox-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-[#0052FF] hover:text-white text-[#0F172A] p-2.5 rounded-full transition-all duration-300 focus:outline-none border border-white/50 shadow-md backdrop-blur-sm cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>

                  {/* Left Side: Hardware-Accelerated Instant Media Viewer */}
                  <div className="w-full md:w-[62%] relative bg-[#0F172A] flex flex-col justify-center items-center overflow-hidden min-h-[300px] md:min-h-full h-1/2 md:h-full">
                    {selectedProject.video ? (
                      <video
                        src={selectedProject.video}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain md:object-cover transform-gpu relative z-10"
                      />
                    ) : (
                      projectImages.map((imgUrl, imgIdx) => (
                        <motion.img
                          key={imgUrl}
                          src={imgUrl}
                          alt={selectedProject.title}
                          initial={false}
                          animate={{
                            opacity: imgIdx === activeLightboxImg ? 1 : 0,
                            scale: imgIdx === activeLightboxImg ? 1 : 1.02
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 w-full h-full object-contain md:object-cover transform-gpu pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                      ))
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0F172A]/10 pointer-events-none" />

                  {/* Multi-photo slider controls */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveLightboxImg((prev) => (prev > 0 ? prev - 1 : selectedProject.images!.length - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#0052FF] text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer z-20 shadow-lg"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveLightboxImg((prev) => (prev < selectedProject.images!.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#0052FF] text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer z-20 shadow-lg"
                        aria-label="Next photo"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Thumbnail strip */}
                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-center space-x-2 bg-black/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 overflow-x-auto">
                        {selectedProject.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveLightboxImg(i);
                            }}
                            className={`w-11 h-8 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                              activeLightboxImg === i ? 'border-[#00D2FF] scale-105 shadow-lg' : 'border-white/30 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right Side: Case Study Details */}
                <div className="w-full md:w-[38%] h-1/2 md:h-full p-6 md:p-8 flex flex-col justify-between text-left overflow-y-auto">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="bg-[#0052FF]/15 text-[#0052FF] text-[10px] font-sans font-semibold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-[#0052FF]/10">
                        {selectedProject.category === 'onsite' ? 'On-Site Progress' : selectedProject.category === 'interiors' ? 'Bespoke Interiors' : selectedProject.category}
                      </span>
                      {selectedProject.status && (
                        <span className="bg-green-600/15 text-green-700 border border-green-600/30 text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {selectedProject.status}
                        </span>
                      )}
                      <span className="text-[#475569] text-xs font-light tracking-wide font-sans">
                        {selectedProject.category === 'onsite' ? 'Active Build' : `Completed in ${selectedProject.year}`}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#0F172A] tracking-tight mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#475569] font-light leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata list */}
                    <div className="grid grid-cols-3 gap-2 border-y border-[#D2DFEE]/60 py-4 mb-6">
                      <div className="text-left">
                        <span className="flex items-center text-[9px] uppercase tracking-wider text-[#475569] font-semibold">
                          <MapPin size={10} className="mr-1 text-[#0052FF]" />
                          Location
                        </span>
                        <span className="block text-xs font-bold text-[#0F172A] mt-0.5 font-display truncate">
                          {selectedProject.location}
                        </span>
                      </div>
                      <div className="text-left">
                        <span className="flex items-center text-[9px] uppercase tracking-wider text-[#475569] font-semibold">
                          <Layers size={10} className="mr-1 text-[#0052FF]" />
                          {selectedProject.category === 'onsite' ? 'Stage Scope' : 'Area Size'}
                        </span>
                        <span className="block text-xs font-bold text-[#0F172A] mt-0.5 font-display">
                          {selectedProject.size}
                        </span>
                      </div>
                      <div className="text-left">
                        <span className="flex items-center text-[9px] uppercase tracking-wider text-[#475569] font-semibold">
                          <Calendar size={10} className="mr-1 text-[#0052FF]" />
                          {selectedProject.category === 'onsite' ? 'Work Status' : 'Year'}
                        </span>
                        <span className="block text-xs font-bold text-[#0F172A] mt-0.5 font-display">
                          {selectedProject.status || selectedProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Architectural highlights */}
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest font-semibold text-[#0F172A] mb-3">
                        {selectedProject.category === 'onsite' ? 'On-Site Technical Execution' : 'Integrated Engineering Schemes'}
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-xs font-light text-[#334155] leading-relaxed">
                            <span className="text-[#0052FF] mr-2 font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#D2DFEE]/60 flex flex-col space-y-3">
                    <button
                      id="lightbox-whatsapp-inquiry-btn"
                      onClick={() => handleWhatsAppProjectInquiry(selectedProject)}
                      className="w-full flex items-center justify-center space-x-2 bg-[#334155] hover:bg-[#0052FF] text-[#F4F7FC] py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer border border-white/10"
                    >
                      <MessageSquare size={14} />
                      <span>Enquire About Similar Build</span>
                    </button>
                    <button
                      id="lightbox-close-text-btn"
                      onClick={() => setSelectedProject(null)}
                      className="text-center text-[10px] uppercase tracking-widest font-semibold text-[#475569] hover:text-[#0F172A] transition-colors py-1 cursor-pointer"
                    >
                      Close Project Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>,
        document.body
      )}
    </>
  );
}
