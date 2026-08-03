import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Percent, Calendar, Landmark, CheckCircle2, Calculator, Info, ArrowRight, Sparkles } from 'lucide-react';

interface BankPartner {
  name: string;
  interestRate: string;
  processingFee: string;
  tenure: string;
  logoColor: string;
  logoBg: string;
  benefits: string[];
  contactRm: string;
}

const BANK_PARTNERS: BankPartner[] = [
  {
    name: 'State Bank of India',
    interestRate: '8.40% - 8.65%',
    processingFee: 'Nil (Special Offer)',
    tenure: 'Up to 30 Years',
    logoColor: '#00BFFF',
    logoBg: 'bg-[#0052FF]/5 border-[#0052FF]/20',
    benefits: ['Lowest Interest Rates', 'No Hidden Charges', 'Special Concession for Women'],
    contactRm: 'Dedicated SBI Builder RM Assigned'
  },
  {
    name: 'HDFC Bank',
    interestRate: '8.50% - 8.75%',
    processingFee: 'Flat ₹3,000 + GST',
    tenure: 'Up to 30 Years',
    logoColor: '#002E6E',
    logoBg: 'bg-blue-50 border-blue-100',
    benefits: ['Pre-approved Project Status', 'Super Fast Digital Sanction', 'Flexible Repayment Schemes'],
    contactRm: 'VIP Priority Processing channel'
  },
  {
    name: 'ICICI Bank',
    interestRate: '8.55% - 8.80%',
    processingFee: '0.25% of Loan Amount',
    tenure: 'Up to 30 Years',
    logoColor: '#FF6F00',
    logoBg: 'bg-orange-50 border-orange-100',
    benefits: ['Pre-approved Property Valuation', 'Minimal Documentation', 'Overdraft Facility Available'],
    contactRm: 'Direct ICICI Relationship Desk'
  },
  {
    name: 'Axis Bank',
    interestRate: '8.60% - 8.95%',
    processingFee: '₹4,999 + GST',
    tenure: 'Up to 30 Years',
    logoColor: '#970030',
    logoBg: 'bg-rose-50 border-rose-100',
    benefits: ['12 EMI Waivers on Select Loans', 'Balance Transfer Special Pricing', 'Dedicated Doorstep Service'],
    contactRm: 'Axis Builder Relationship Desk'
  }
];

export default function BankingPartners() {
  // Loan Estimator State
  const [propertyCost, setPropertyCost] = useState<number>(10000000); // 1 Crore default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20% down payment
  const [loanTenure, setLoanTenure] = useState<number>(20); // 20 years
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%

  const downPaymentAmount = (propertyCost * downPaymentPercent) / 100;
  const loanAmount = propertyCost - downPaymentAmount;

  // Monthly EMI Calculation formula: [P x R x (1+R)^N]/[((1+R)^N)-1]
  const calculateEMI = (): number => {
    const P = loanAmount;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = loanTenure * 12; // Monthly tenure
    if (r === 0) return P / n;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * loanTenure * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="banking-partners" className="py-24 bg-[#F4F7FC] relative overflow-hidden">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052FF06_1px,transparent_1px),linear-gradient(to_bottom,#0052FF06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold text-[#0052FF] uppercase tracking-[0.4em] block mb-3">
            CONSTRUCTION FINANCE PARTNERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#0F172A] tracking-tight leading-tight mb-6">
            Approved Banking Partners <br />
            <span className="font-serif italic text-[#475569] font-normal">Hassle-Free Construction Loans</span>
          </h2>
          <p className="text-xs md:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto font-light">
            Hariha Infra is a fully pre-approved developer with leading financial institutions. Our clients benefit from expedited file verification, processing fee waivers, and door-to-door loan processing.
          </p>
        </div>

        {/* Dynamic Dual Grid: Estimator & Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Calculator: Left column (7 cols) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-md rounded-3xl border border-[#D2DFEE] p-6 md:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-[#0052FF]/10 text-[#0052FF] rounded-xl">
                <Calculator size={18} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#0F172A] font-medium">Home & Construction Loan Estimator</h3>
                <p className="text-[10px] text-[#475569]">Estimate your monthly repayments based on property budget</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Property Cost Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#334155] font-medium">Estimated Construction & Plot Cost</span>
                  <span className="font-semibold text-[#0052FF] text-sm">{formatCurrency(propertyCost)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="50000000"
                  step="500000"
                  value={propertyCost}
                  onChange={(e) => setPropertyCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#D2DFEE] rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
                />
                <div className="flex justify-between text-[9px] text-[#475569]">
                  <span>₹20 Lakh</span>
                  <span>₹5.0 Crore</span>
                </div>
              </div>

              {/* Down Payment Percent Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#334155] font-medium">Down Payment Contribution ({downPaymentPercent}%)</span>
                  <span className="font-semibold text-[#475569] text-xs">
                    {formatCurrency(downPaymentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#D2DFEE] rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
                />
                <div className="flex justify-between text-[9px] text-[#475569]">
                  <span>10% (Min)</span>
                  <span>80% (Max)</span>
                </div>
              </div>

              {/* Loan Amount Display Box */}
              <div className="p-4 bg-[#F4F7FC] rounded-2xl border border-[#D2DFEE]/50 flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#475569] font-medium block">Total Loan Requirement</span>
                  <span className="text-sm font-bold text-[#0F172A]">{formatCurrency(loanAmount)}</span>
                </div>
                <span className="text-[10px] text-[#0052FF] bg-[#0052FF]/10 font-semibold px-2.5 py-1 rounded-full">
                  {(100 - downPaymentPercent)}% Financed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#334155] font-medium">Loan Tenure</span>
                    <span className="font-semibold text-[#0052FF]">{loanTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#D2DFEE] rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
                  />
                  <div className="flex justify-between text-[9px] text-[#475569]">
                    <span>5 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#334155] font-medium">Interest Rate</span>
                    <span className="font-semibold text-[#0052FF]">{interestRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="12.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#D2DFEE] rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
                  />
                  <div className="flex justify-between text-[9px] text-[#475569]">
                    <span>7.5%</span>
                    <span>12%</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Results Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D2DFEE]/50">
                <div className="bg-[#0052FF] text-white rounded-2xl p-4 flex flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-white/70 font-semibold">Monthly EMI</span>
                  <div className="mt-2">
                    <span className="text-xl font-bold">₹{monthlyEMI.toLocaleString('en-IN')}</span>
                    <span className="text-[9px] text-white/80 block mt-0.5">per month</span>
                  </div>
                </div>

                <div className="bg-white border border-[#D2DFEE] rounded-2xl p-4 flex flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-[#475569] font-semibold">Principal Amount</span>
                  <div className="mt-2">
                    <span className="text-base font-bold text-[#0F172A]">{formatCurrency(loanAmount)}</span>
                    <span className="text-[9px] text-[#475569]/80 block mt-0.5">
                      {((loanAmount / totalPayment) * 100).toFixed(0)}% of total payment
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-[#D2DFEE] rounded-2xl p-4 flex flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-[#475569] font-semibold">Total Interest Payable</span>
                  <div className="mt-2">
                    <span className="text-base font-bold text-[#0F172A]">{formatCurrency(totalInterest)}</span>
                    <span className="text-[9px] text-[#475569]/80 block mt-0.5">
                      {((totalInterest / totalPayment) * 100).toFixed(0)}% of total payment
                    </span>
                  </div>
                </div>
              </div>

              {/* Calculator Footnote */}
              <div className="flex items-start space-x-2.5 p-3 bg-blue-50/50 rounded-xl border border-blue-100/50">
                <Info size={14} className="text-[#0052FF] shrink-0 mt-0.5" />
                <p className="text-[10px] text-[#475569] leading-relaxed">
                  *This estimation tool provides approximate values for planning purposes. Actual EMI and loan eligibility will be determined by respective partner banks based on individual customer credit profile.
                </p>
              </div>

            </div>
          </div>

          {/* Approved Partners List: Right column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/40 border border-[#D2DFEE] rounded-2xl p-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider">PRE-APPROVED BANK DIRECTORY</span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles size={10} /> Active Tie-ups
              </span>
            </div>

            <div className="space-y-4 max-h-[510px] overflow-y-auto pr-1 scrollbar-thin">
              {BANK_PARTNERS.map((bank) => (
                <div
                  key={bank.name}
                  className="bg-white border border-[#D2DFEE] hover:border-[#0052FF]/40 rounded-2xl p-5 transition-all hover:shadow-md group relative overflow-hidden"
                >
                  {/* Bank Header Row */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl border ${bank.logoBg} transition-all`}>
                        <Landmark size={18} style={{ color: bank.logoColor }} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#0052FF] transition-colors">
                          {bank.name}
                        </h4>
                        <span className="text-[9px] text-[#475569] block mt-0.5 font-light">
                          {bank.contactRm}
                        </span>
                      </div>
                    </div>
                    
                    {/* Rate pill */}
                    <div className="text-right">
                      <span className="text-[10px] text-[#0052FF] bg-[#0052FF]/5 border border-[#0052FF]/10 font-bold px-2 py-0.5 rounded-md">
                        {bank.interestRate}
                      </span>
                      <span className="text-[8px] text-[#475569] block mt-1">Starting Rate</span>
                    </div>
                  </div>

                  {/* Benefit Checklist */}
                  <div className="mt-4 space-y-2 pt-3 border-t border-[#D2DFEE]/40">
                    <div className="grid grid-cols-1 gap-1.5">
                      {bank.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 size={11} className="text-[#0052FF] shrink-0" />
                          <span className="text-[10px] text-[#334155] font-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processing Details Footer */}
                  <div className="mt-4 bg-[#F4F7FC]/80 p-2.5 rounded-xl flex justify-between items-center text-[9px] text-[#475569]">
                    <span>Fee: <strong className="font-semibold text-[#0F172A]">{bank.processingFee}</strong></span>
                    <span>Max Tenure: <strong className="font-semibold text-[#0F172A]">{bank.tenure}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Trigger */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center justify-between p-4 bg-[#0F172A] hover:bg-[#0052FF] text-white rounded-2xl transition-all shadow-sm group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Building2 size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-wider uppercase">Submit Finance Inquiry</h4>
                  <p className="text-[9px] text-white/60">Connect directly with priority bank representatives</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-white transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
