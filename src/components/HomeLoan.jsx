import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  FileCheck,
  Calculator,
  BadgePercent,
  MessageCircle,
  HelpCircle,
  IndianRupee,
  Calendar,
  Percent,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { HOME_LOAN_CONFIG, getLoanWhatsAppUrl } from "../data/siteConfig";
import "./HomeLoan.css";

// Helper to format currency in Indian numbering system
const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const iconMap = {
  Building2,
  FileCheck,
  Calculator,
  BadgePercent,
};

export default function HomeLoan() {
  const { calculatorDefaults, features, disclaimer } = HOME_LOAN_CONFIG;

  const [loanAmount, setLoanAmount] = useState(calculatorDefaults.defaultAmount);
  const [interestRate, setInterestRate] = useState(calculatorDefaults.defaultRate);
  const [tenureYears, setTenureYears] = useState(calculatorDefaults.defaultTenure);

  // EMI Calculation
  const { emi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    let calculatedEmi = 0;
    if (r > 0) {
      calculatedEmi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    } else {
      calculatedEmi = Math.round(P / n);
    }

    const calculatedTotalPayment = calculatedEmi * n;
    const calculatedTotalInterest = Math.max(0, calculatedTotalPayment - P);

    const pPercent = calculatedTotalPayment > 0 ? (P / calculatedTotalPayment) * 100 : 50;
    const iPercent = 100 - pPercent;

    return {
      emi: calculatedEmi,
      totalInterest: calculatedTotalInterest,
      totalPayment: calculatedTotalPayment,
      principalPercent: pPercent,
      interestPercent: iPercent,
    };
  }, [loanAmount, interestRate, tenureYears]);

  const handleWhatsAppInquiry = () => {
    const url = getLoanWhatsAppUrl({
      amount: loanAmount,
      rate: interestRate,
      tenure: tenureYears,
      emi: emi,
    });
    window.open(url, "_blank");
  };

  // SVG Donut Chart Constants
  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  const principalStroke = (principalPercent / 100) * circumference;
  const interestStroke = (interestPercent / 100) * circumference;

  return (
    <section id="loan" className="section-padding bg-surface-alt/70 relative overflow-hidden">
      <div className="container-max relative z-10">
        <SectionHeading
          label="Financing Made Simple"
          title={HOME_LOAN_CONFIG.title}
          subtitle={HOME_LOAN_CONFIG.subtitle}
        />

        {/* 4 Feature Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Building2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="card-luxury p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4 shadow-sm">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-lighter text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                  <ShieldCheck size={13} />
                  <span>Verified Support</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive EMI Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-luxury border border-black/10 overflow-hidden"
        >
          <div className="bg-primary text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Plan Your Investment
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Home Loan EMI Calculator
              </h3>
            </div>
            <div className="text-xs text-white/70 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              Estimate only &bull; Customizable sliders
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <IndianRupee size={15} className="text-accent" />
                    <span>Loan Amount</span>
                  </label>
                  <span className="font-display font-bold text-base sm:text-lg text-primary">
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={calculatorDefaults.minAmount}
                  max={calculatorDefaults.maxAmount}
                  step={calculatorDefaults.stepAmount}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="loan-slider"
                  aria-label="Loan Amount Slider"
                />
                <div className="flex justify-between text-[11px] text-charcoal-muted mt-1 font-mono">
                  <span>₹10 Lakh</span>
                  <span>₹50 Lakh</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <Percent size={15} className="text-accent" />
                    <span>Expected Interest Rate</span>
                  </label>
                  <span className="font-display font-bold text-base sm:text-lg text-primary">
                    {interestRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={calculatorDefaults.minRate}
                  max={calculatorDefaults.maxRate}
                  step={calculatorDefaults.stepRate}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="loan-slider"
                  aria-label="Interest Rate Slider"
                />
                <div className="flex justify-between text-[11px] text-charcoal-muted mt-1 font-mono">
                  <span>7.0%</span>
                  <span>10.5%</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <Calendar size={15} className="text-accent" />
                    <span>Loan Tenure</span>
                  </label>
                  <span className="font-display font-bold text-base sm:text-lg text-primary">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={calculatorDefaults.minTenure}
                  max={calculatorDefaults.maxTenure}
                  step={calculatorDefaults.stepTenure}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="loan-slider"
                  aria-label="Loan Tenure Slider"
                />
                <div className="flex justify-between text-[11px] text-charcoal-muted mt-1 font-mono">
                  <span>5 Yrs</span>
                  <span>15 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Bank Tie-up Partners Pill */}
              <div className="bg-surface rounded-2xl p-4 border border-black/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-2">
                  Partner Banks for Shivparvati Apartments
                </span>
                <div className="flex flex-wrap gap-2">
                  {["State Bank of India", "HDFC Bank", "ICICI Bank", "Bank of Maharashtra", "Axis Bank"].map(
                    (bank) => (
                      <span
                        key={bank}
                        className="px-2.5 py-1 bg-white rounded-lg border border-black/10 text-xs font-semibold text-primary shadow-xs"
                      >
                        {bank}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Results & Donut Chart Column */}
            <div className="lg:col-span-5 bg-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-black/5">
              {/* Monthly EMI Highlight Banner */}
              <div className="text-center bg-primary text-white rounded-2xl p-5 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Estimated Monthly EMI
                </span>
                <h4 className="font-display text-3xl sm:text-4xl font-bold mt-1 text-white tracking-tight">
                  {formatINR(emi)}
                  <span className="text-xs font-normal text-white/70 block mt-0.5">per month</span>
                </h4>
              </div>

              {/* Donut Chart & Breakdown */}
              <div className="flex items-center justify-around my-6 gap-4">
                {/* SVG Donut */}
                <div className="relative w-32 h-32 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background track */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                    />
                    {/* Principal slice (Gold) */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke="#C9A84C"
                      strokeWidth="12"
                      strokeDasharray={`${principalStroke} ${circumference}`}
                      strokeDashoffset="0"
                      className="transition-all duration-300"
                    />
                    {/* Interest slice (Navy) */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke="#1B2A4A"
                      strokeWidth="12"
                      strokeDasharray={`${interestStroke} ${circumference}`}
                      strokeDashoffset={-principalStroke}
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] uppercase font-bold text-charcoal-muted">Total</span>
                    <span className="text-xs font-bold text-primary">{tenureYears} Yrs</span>
                  </div>
                </div>

                {/* Legend & Breakdown */}
                <div className="space-y-3 text-xs flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-charcoal-muted">
                      <span className="w-3 h-3 rounded-full bg-accent inline-block" />
                      <span>Principal Amount</span>
                    </div>
                    <p className="font-bold text-primary text-sm pl-4">
                      {formatINR(loanAmount)} ({principalPercent.toFixed(0)}%)
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-charcoal-muted">
                      <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                      <span>Total Interest</span>
                    </div>
                    <p className="font-bold text-primary text-sm pl-4">
                      {formatINR(totalInterest)} ({interestPercent.toFixed(0)}%)
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10">
                    <span className="text-charcoal-muted block">Total Payment (P + I):</span>
                    <span className="font-bold text-primary text-sm">
                      {formatINR(totalPayment)}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Call to Action */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="btn-whatsapp w-full !py-3.5 !rounded-xl !text-xs sm:!text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>Check Eligibility on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Statutory Disclaimer */}
          <div className="bg-surface px-6 py-4 border-t border-black/5 flex items-center gap-2 text-xs text-charcoal-muted">
            <HelpCircle size={15} className="text-accent flex-shrink-0" />
            <span>{disclaimer}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
