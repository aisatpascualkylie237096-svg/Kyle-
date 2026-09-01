import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Mail, Github, Linkedin, Send, Check, Copy, ExternalLink, MessageSquare, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    
    // Open default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Spider-web & ambient lighting */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E21B2D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#123A73]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Comic Section Number */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center justify-center w-14 h-14 bg-[#07111F] border-2 border-[#E21B2D] shadow-[0_0_15px_rgba(226,27,45,0.4)] rounded-lg">
            <span className="font-comic font-black text-2xl text-[#E21B2D]">05</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest block font-bold">
              TRANSMISSION // INQUIRIES
            </span>
            <h2
              id="contact-section-heading"
              className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
            >
              LET'S CONNECT
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Communication Channels & Web Network */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 sm:p-8 relative transition-all duration-300 shadow-[0_0_20px_rgba(18,58,115,0.2)]">
              {/* Comic corner notch */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#E21B2D] comic-cut-corner" />

              <p
                id="contact-intro-quote"
                className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed mb-6 font-sans"
              >
                &ldquo;I'm open to opportunities where I can continue learning, contribute to meaningful projects, and grow as a software developer.&rdquo;
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-[#123A73]/60">
                {/* Verified Email */}
                <div className="p-4 rounded-lg bg-[#050505] border border-[#123A73] hover:border-[#E21B2D] transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] text-[#E21B2D] uppercase font-bold tracking-wider">
                      PRIMARY EMAIL
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded hover:bg-[#123A73] text-[#D9D9D9] hover:text-white transition-colors text-xs flex items-center gap-1"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <a
                    id="contact-email-link"
                    href={`mailto:${portfolio.email}`}
                    className="font-mono text-sm sm:text-base text-white font-bold hover:text-[#E21B2D] transition-colors break-all"
                  >
                    {portfolio.email}
                  </a>
                </div>

                {/* GitHub */}
                <div className="p-4 rounded-lg bg-[#050505] border border-[#123A73] hover:border-[#E21B2D] transition-colors">
                  <span className="font-mono text-[11px] text-[#D9D9D9] uppercase font-bold tracking-wider block mb-1">
                    GITHUB PROFILE
                  </span>
                  <a
                    id="contact-github-link"
                    href={portfolio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-white font-bold hover:text-[#E21B2D] transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#E21B2D]" />
                    <span className="break-all">{portfolio.github}</span>
                    <ExternalLink className="w-3 h-3 text-[#D9D9D9]" />
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="p-4 rounded-lg bg-[#050505] border border-[#123A73] hover:border-[#E21B2D] transition-colors">
                  <span className="font-mono text-[11px] text-[#D9D9D9] uppercase font-bold tracking-wider block mb-1">
                    LINKEDIN PROFILE
                  </span>
                  <a
                    id="contact-linkedin-link"
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-white font-bold hover:text-[#E21B2D] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#E21B2D]" />
                    <span className="break-all">{portfolio.linkedin}</span>
                    <ExternalLink className="w-3 h-3 text-[#D9D9D9]" />
                  </a>
                </div>
              </div>

              {/* Spider-Web Social Connections Indicator */}
              <div className="mt-6 pt-4 border-t border-[#123A73]/60 flex items-center justify-between text-xs font-mono text-[#D9D9D9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>DIRECT TRANSMISSION READY</span>
                </div>
                <span className="text-[#E21B2D] font-bold">MANILA, PH</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#07111F] border-2 border-[#E21B2D] rounded-xl p-6 sm:p-8 relative shadow-[0_0_30px_rgba(226,27,45,0.3)]">
              {/* Form Title */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#123A73]">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#E21B2D]" />
                  <h3 className="font-comic font-black text-2xl text-white tracking-wider uppercase">
                    TRANSMIT DISPATCH
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#D9D9D9]">DIRECT FORM</span>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-[#050505] border border-[#123A73] rounded-lg space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#E21B2D] text-white flex items-center justify-center mx-auto shadow-[0_0_15px_#E21B2D]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-comic font-black text-2xl text-white uppercase tracking-wider">
                    TRANSMISSION PREPARED!
                  </h4>
                  <p className="font-sans text-sm text-[#D9D9D9] max-w-md mx-auto">
                    Your email client has been launched with your inquiry for Kyle ({portfolio.email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2 rounded bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] font-comic text-sm uppercase tracking-wider text-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-xs font-bold text-[#D9D9D9] uppercase tracking-wider block mb-1.5"
                    >
                      YOUR NAME <span className="text-[#E21B2D]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-3 rounded bg-[#050505] text-white font-mono text-sm border ${
                        errors.name ? 'border-[#E21B2D]' : 'border-[#123A73]'
                      } focus:border-[#E21B2D] focus:outline-none focus:ring-2 focus:ring-[#123A73] transition-all placeholder:text-[#555]`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-xs text-[#E21B2D]">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-xs font-bold text-[#D9D9D9] uppercase tracking-wider block mb-1.5"
                    >
                      YOUR EMAIL <span className="text-[#E21B2D]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded bg-[#050505] text-white font-mono text-sm border ${
                        errors.email ? 'border-[#E21B2D]' : 'border-[#123A73]'
                      } focus:border-[#E21B2D] focus:outline-none focus:ring-2 focus:ring-[#123A73] transition-all placeholder:text-[#555]`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-xs text-[#E21B2D]">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-xs font-bold text-[#D9D9D9] uppercase tracking-wider block mb-1.5"
                    >
                      MESSAGE <span className="text-[#E21B2D]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kyle, I'd like to discuss a software development opportunity..."
                      className={`w-full px-4 py-3 rounded bg-[#050505] text-white font-mono text-sm border ${
                        errors.message ? 'border-[#E21B2D]' : 'border-[#123A73]'
                      } focus:border-[#E21B2D] focus:outline-none focus:ring-2 focus:ring-[#123A73] transition-all placeholder:text-[#555]`}
                    />
                    {errors.message && (
                      <p className="mt-1 font-mono text-xs text-[#E21B2D]">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#E21B2D] hover:bg-[#8B0A16] text-white font-comic text-xl tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(226,27,45,0.45)] hover:shadow-[0_0_28px_rgba(226,27,45,0.7)] hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
