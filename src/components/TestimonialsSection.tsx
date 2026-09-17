import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F4F7FC]/25 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      <div id="reviews" className="absolute -top-20" />
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
            Trusted by Elite Partners <br />
            <span className="text-[#475569] font-normal">Endorsements of Construction Rigor</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed max-w-xl">
            We partner with renowned architectural houses and private equity developers to deliver landmark structures. Read about our client-focused build journeys.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(78,67,47,0.02)] hover:shadow-[0_20px_50px_rgba(181,148,110,0.12)] transition-all duration-500 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center space-x-1 mb-6 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>

                <p className="font-sans text-sm md:text-base text-[#334155] leading-relaxed mb-8">
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
                  <h4 className="font-display text-sm font-bold text-[#0F172A]">
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

      </div>
    </section>
  );
}
