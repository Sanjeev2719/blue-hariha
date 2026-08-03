import { Gift, MessageSquare, ArrowRight, DollarSign, Award, Users } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { motion } from 'motion/react';

export default function ReferAndEarn() {
  const handleWhatsAppReferral = () => {
    const text = `Hi Hariha Infra! I would like to refer a family member or friend for a residential construction or interior design project in Bengaluru. Please contact me with the referral enrollment details.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const steps = [
    {
      icon: <Users className="text-[#0052FF]" size={20} />,
      title: '1. Share the Lead',
      desc: 'Introduce us to anyone in Bengaluru looking to build a house, villa, or renovate their interior space.'
    },
    {
      icon: <Award className="text-[#0052FF]" size={20} />,
      title: '2. Contract Execution',
      desc: 'Once they select our Standard, Classic, or Premium package and execute the official construction agreement.'
    },
    {
      icon: <DollarSign className="text-[#0052FF]" size={20} />,
      title: '3. Receive up to ₹1,00,000',
      desc: 'Get your successful referral bonus directly credited to your bank account with zero questions asked.'
    }
  ];

  return (
    <section id="refer" className="py-24 bg-[#F4F7FC]/40 border-b border-[#D2DFEE]/60 relative overflow-hidden text-left">
      {/* Background radial soft light */}
      <div className="absolute right-[-10%] top-1/4 w-80 h-80 bg-[#0052FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block">
              PARTNERSHIP OPPORTUNITY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Refer a Friend & Earn <br />
              <span className="font-serif italic text-[#475569] font-normal">Up to ₹1,00,000 Cash</span>
            </h2>
            <p className="text-xs md:text-sm text-[#475569] font-light leading-relaxed max-w-xl">
              Do you know someone planning to construct a home, villa, or execute premium interiors in Bengaluru? Introduce them to Hariha Infra Private Limited. We reward successful client partnerships with high-value cash bonuses.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white/60 border border-[#D2DFEE]/80 p-5 rounded-2xl space-y-3"
                >
                  <div className="w-10 h-10 bg-[#F4F7FC] flex items-center justify-center rounded-xl border border-[#D2DFEE]">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-[#0F172A] tracking-wide uppercase">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-[#475569] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Aesthetic Voucher Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#0052FF]/40 rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden"
            >
              {/* Ticket cut-outs on sides for voucher design */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F4F7FC] rounded-full border-r border-[#0052FF]/30 hidden sm:block" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F4F7FC] rounded-full border-l border-[#0052FF]/30 hidden sm:block" />

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Gift className="text-[#0052FF]" size={14} />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#F4F7FC]">
                    PARTNER BONUS PROGRAM
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#0052FF] font-bold">
                    MAXIMUM REWARD VALUE
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl tracking-tight text-white font-semibold">
                    ₹1,00,000
                  </h3>
                  <p className="text-[10px] text-white/50 font-light tracking-wide uppercase">
                    For Turnkey Villa Agreements
                  </p>
                </div>

                <div className="border-t border-dashed border-white/20 my-4" />

                <ul className="space-y-2 text-[11px] font-light text-[#F4F7FC]/80 text-left list-none pl-0 max-w-xs mx-auto">
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#0052FF] font-bold">✓</span>
                    <span>₹25k – ₹1L based on final built contract size</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#0052FF] font-bold">✓</span>
                    <span>Direct bank transfer on contract execution</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#0052FF] font-bold">✓</span>
                    <span>No limit on number of successful referrals</span>
                  </li>
                </ul>

                <button
                  id="referral-whatsapp-btn"
                  onClick={handleWhatsAppReferral}
                  className="w-full flex items-center justify-center space-x-3 bg-[#0052FF] hover:bg-[#0040D0] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageSquare size={14} />
                  <span>Submit Referral via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
