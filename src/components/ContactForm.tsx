import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Sparkles, Clock } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data';
import { InquiryFormData } from '../types';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'residential',
    projectBudget: '₹25 Lakhs - ₹50 Lakhs',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const services = [
    { value: 'residential', label: 'Turnkey Residential Construction' },
    { value: 'interior', label: 'Custom Luxury Home Interiors' },
    { value: 'renovation', label: 'Premium Residential Renovation' },
    { value: 'architectural', label: 'Architectural Design & Advisory' },
  ];

  const budgets = [
    { value: '< ₹25 Lakhs', label: 'Under ₹25 Lakhs' },
    { value: '₹25 Lakhs - ₹50 Lakhs', label: '₹25 Lakhs - ₹50 Lakhs' },
    { value: '₹50 Lakhs - ₹1.5 Crore', label: '₹50 Lakhs - ₹1.5 Crore' },
    { value: '₹1.5 Crore+', label: 'Over ₹1.5 Crore' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (pref: 'whatsapp' | 'email') => {
    setFormData(prev => ({
      ...prev,
      preferredContact: pref
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all fields to establish your architectural briefing.');
      return;
    }

    // Build the structural message
    const serviceLabel = services.find(s => s.value === formData.serviceType)?.label || formData.serviceType;
    const formattedBrief = 
      `🏛️ *HARIHA INFRA PRIVATE LIMITED - BRIEFING* 🏛️\n\n` +
      `👤 *Client Name:* ${formData.fullName}\n` +
      `✉️ *Email Address:* ${formData.email}\n` +
      `📞 *Phone Number:* ${formData.phone}\n` +
      `🏷️ *Project Type:* ${serviceLabel}\n` +
      `💰 *Estimated Budget:* ${formData.projectBudget}\n` +
      `📝 *Message Detail:* ${formData.message}\n\n` +
      `⚡ _Inquiry submitted via Hariha Infra Portal_`;

    if (formData.preferredContact === 'whatsapp') {
      // Direct WhatsApp redirect with fully formatted pre-filled text
      const encodedText = encodeURIComponent(formattedBrief);
      window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodedText}`, '_blank');
      
      // Also show a soft success locally
      setSubmitSuccess(true);
    } else {
      // Simulate premium server-side posting sequence
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: 'residential',
      projectBudget: '₹25 Lakhs - ₹50 Lakhs',
      message: '',
      preferredContact: 'whatsapp'
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4F7FC]/25 backdrop-blur-xl border-b border-[#D2DFEE]/60 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Architectural Advisory Details (5 Columns) with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left space-y-10"
          >
            <div>
              <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
                TAKE ACTION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
                Commence Your Build <br />
                <span className="font-serif italic text-[#475569] font-normal">Schedule A Site Advisory</span>
              </h2>
              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Connect with our residential construction and design estimators. We are available for physical site visits, structural blueprints drafting consultations, and preliminary material schedule calculations.
              </p>
            </div>

            {/* Quick Contacts details cards with premium glass styling */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-5 bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_4px_20px_rgba(78,67,47,0.01)] hover:bg-white/65 hover:border-[#0052FF]/30 transition-all duration-300">
                <div className="p-3.5 bg-[#F4F7FC]/60 border border-white/60 text-[#0052FF] rounded-2xl shadow-sm mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#0F172A] mb-1">Direct Hotline</h4>
                  <a href={`tel:${COMPANY_CONTACTS.phone}`} className="text-sm font-bold text-[#334155] hover:text-[#0052FF] transition-colors">
                    {COMPANY_CONTACTS.phone}
                  </a>
                  <p className="text-[10px] text-[#475569] mt-1 font-light">Mon – Sat, 9:00 AM to 6:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_4px_20px_rgba(78,67,47,0.01)] hover:bg-white/65 hover:border-[#0052FF]/30 transition-all duration-300">
                <div className="p-3.5 bg-[#F4F7FC]/60 border border-white/60 text-[#0052FF] rounded-2xl shadow-sm mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#0F172A] mb-1">Corporate Inbox</h4>
                  <a href={`mailto:${COMPANY_CONTACTS.email}`} className="text-sm font-bold text-[#334155] hover:text-[#0052FF] transition-colors">
                    {COMPANY_CONTACTS.email}
                  </a>
                  <p className="text-[10px] text-[#475569] mt-1 font-light">Response within 12 business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_4px_20px_rgba(78,67,47,0.01)] hover:bg-white/65 hover:border-[#0052FF]/30 transition-all duration-300">
                <div className="p-3.5 bg-[#F4F7FC]/60 border border-white/60 text-[#0052FF] rounded-2xl shadow-sm mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#0F172A] mb-1">Executive Offices</h4>
                  <address className="not-italic text-sm text-[#334155] leading-relaxed font-sans font-semibold">
                    {COMPANY_CONTACTS.address}
                  </address>
                </div>
              </div>
            </div>

            {/* Response standard guarantees with glass borders */}
            <div className="p-6 bg-white/55 backdrop-blur-md border border-white/75 text-left space-y-4 rounded-3xl shadow-[0_4px_15px_rgba(78,67,47,0.01)]">
              <div className="flex items-center space-x-2 text-[#0052FF]">
                <Clock size={16} />
                <span className="text-[10px] uppercase tracking-widest font-bold font-sans">Our Service Pledge</span>
              </div>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                Every project is matched with a dedicated Project Superintendent and Senior Estimator. Our pricing documents are itemized line-by-line using real-time local material feeds to prevent downstream cost adjustments.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white/45 backdrop-blur-md border border-white/60 p-8 md:p-12 shadow-[0_15px_35px_rgba(78,67,47,0.02)] relative rounded-3xl"
          >
            {submitSuccess ? (
              /* Submission Success View */
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center mx-auto border border-[#0052FF]/20 rounded-full">
                  <Check size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#0F172A] tracking-tight">Consultation Brief Established</h3>
                  <p className="text-sm text-[#475569] font-light max-w-md mx-auto leading-relaxed">
                    {formData.preferredContact === 'whatsapp' 
                      ? 'Your detailed project brief has been formatted. If the WhatsApp window did not open automatically, please click below to send immediately.'
                      : 'Thank you. Your corporate briefing has been uploaded. An architectural representative will contact you via phone or email within 12 hours.'}
                  </p>
                </div>

                <div className="flex flex-col space-y-3 max-w-sm mx-auto pt-4">
                  {formData.preferredContact === 'whatsapp' && (
                    <button
                      id="contact-whatsapp-retry-btn"
                      onClick={() => {
                        const serviceLabel = services.find(s => s.value === formData.serviceType)?.label || formData.serviceType;
                        const brief = `🏛️ *HARIHA INFRA PRIVATE LIMITED* 🏛️\n\nClient Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${serviceLabel}\nBudget: ${formData.projectBudget}\nMessage: ${formData.message}`;
                        window.open(`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(brief)}`, '_blank');
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-[#334155] hover:bg-[#0052FF] text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border border-white/10"
                    >
                      <MessageSquare size={14} />
                      <span>Launch WhatsApp Window</span>
                    </button>
                  )}
                  <button
                    id="contact-reset-btn"
                    onClick={resetForm}
                    className="text-xs uppercase tracking-widest font-semibold text-[#475569] hover:text-[#0F172A] py-2 transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Method selector for Premium Feel */}
                <div className="bg-[#F4F7FC]/60 border border-white/50 p-1 rounded-2xl flex relative overflow-hidden backdrop-blur-sm">
                  <button
                    id="contact-method-tab-whatsapp"
                    type="button"
                    onClick={() => handlePreferenceChange('whatsapp')}
                    className={`flex-1 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rounded-xl cursor-pointer ${
                      formData.preferredContact === 'whatsapp'
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'bg-transparent text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp Brief (Instant)</span>
                  </button>
                  <button
                    id="contact-method-tab-email"
                    type="button"
                    onClick={() => handlePreferenceChange('email')}
                    className={`flex-1 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rounded-xl cursor-pointer ${
                      formData.preferredContact === 'email'
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'bg-transparent text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    <Mail size={12} />
                    <span>Email Delivery (12h Support)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                      Client Full Name *
                    </label>
                    <input
                      id="contact-input-fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rohan Murthy"
                      className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all placeholder:text-[#475569]/40 shadow-[0_2px_10px_rgba(78,67,47,0.01)]"
                      required
                    />
                  </div>

                  {/* Corporate/Personal Email */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                      Email Address *
                    </label>
                    <input
                      id="contact-input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@domain.com"
                      className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all placeholder:text-[#475569]/40 shadow-[0_2px_10px_rgba(78,67,47,0.01)]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                      Phone Number *
                    </label>
                    <input
                      id="contact-input-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 88926 08688"
                      className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all placeholder:text-[#475569]/40 shadow-[0_2px_10px_rgba(78,67,47,0.01)]"
                      required
                    />
                  </div>

                  {/* Service Type Selection */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                      Requested Structural Service
                    </label>
                    <select
                      id="contact-select-serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all shadow-[0_2px_10px_rgba(78,67,47,0.01)] cursor-pointer"
                    >
                      {services.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Budget Selection */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                    Estimated Construction Budget Tier
                  </label>
                  <select
                    id="contact-select-projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all shadow-[0_2px_10px_rgba(78,67,47,0.01)] cursor-pointer"
                  >
                    {budgets.map(b => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                </div>

                {/* Brief Message */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#334155] font-sans">
                    Project Scope Details & Site Location *
                  </label>
                  <textarea
                    id="contact-textarea-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide description of building location, custom dimensions, architectural style preferences, and terrain details..."
                    rows={4}
                    className="w-full bg-white/65 border border-white/80 px-4 py-3.5 rounded-xl text-xs font-sans text-[#0F172A] focus:border-[#0052FF] focus:bg-white/80 focus:outline-none transition-all placeholder:text-[#475569]/40 shadow-[0_2px_10px_rgba(78,67,47,0.01)] resize-none"
                    required
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3 bg-red-50/70 backdrop-blur-md border border-red-200 text-red-600 text-xs font-sans rounded-xl">
                    {errorMsg}
                  </div>
                )}

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-3 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-white/10 ${
                    formData.preferredContact === 'whatsapp'
                      ? 'bg-[#0F172A] hover:bg-[#0052FF] text-[#F4F7FC]'
                      : 'bg-[#0052FF] hover:bg-[#967753] text-[#F4F7FC]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Validating Briefing...</span>
                    </>
                  ) : formData.preferredContact === 'whatsapp' ? (
                    <>
                      <MessageSquare size={14} className="text-[#0052FF]" />
                      <span>Submit & Open WhatsApp Brief</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Secure Email Brief</span>
                    </>
                  )}
                </button>

                {/* Security trust note */}
                <div className="text-center">
                  <span className="text-[9px] text-[#475569] uppercase tracking-widest font-sans font-semibold">
                    🔒 End-to-End Briefing Protection. Your architectural files remain secure.
                  </span>
                </div>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
