import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F4F7FC]/25 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
            VERIFIED VOICES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
            Trusted by Elite Partners <br />
            <span className="font-serif italic text-[#475569] font-normal">Endorsements of Construction Rigor</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed max-w-xl">
            We partner with renowned architectural houses and private equity developers to deliver landmark structures. Read about our client-focused build journeys.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white/45 backdrop-blur-md border border-white/60 p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(181,148,110,0.12)] hover:bg-white/60 hover:border-[#0052FF]/40 transition-all duration-500 text-left rounded-3xl shadow-[0_10px_30px_rgba(78,67,47,0.01)]"
            >
              <div>
                {/* Five Star rating */}
                <div className="flex items-center space-x-1.5 text-[#0052FF] mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="currentColor" />
                  ))}
                </div>

                <p className="font-serif text-sm md:text-base text-[#334155] italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/50 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-white/80 object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#0F172A]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-[#475569] uppercase tracking-wider mt-1">
                    {testimonial.role} • <span className="font-semibold text-[#0052FF]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Co-Branding Logotypes section for prestige look */}
        <div className="mt-20 pt-12 border-t border-[#D2DFEE]/50 text-center">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#475569] font-semibold block mb-8">
            COMPLIANCE AND STRUCTURAL CERTIFICATION BY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
            <span className="font-serif text-lg tracking-[0.3em] text-[#0F172A] font-bold">A.I.A.</span>
            <span className="font-sans text-sm tracking-[0.4em] text-[#0F172A] font-extrabold uppercase">U.S.G.B.C.</span>
            <span className="font-serif text-lg tracking-[0.2em] text-[#0F172A] italic">LEED® Platinum</span>
            <span className="font-sans text-sm tracking-[0.3em] text-[#0F172A] font-black uppercase">O.S.H.A. Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
