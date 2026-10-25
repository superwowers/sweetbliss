import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailto = `mailto:${personalInfo.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652] bg-[#EDE0DC]/40 dark:bg-[#261219]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Let's build something durable together.
            </h2>

            <p className="text-sm sm:text-base text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
              Whether you are looking to hire a dedicated full-stack developer, integrate AI vision models into your product, or collaborate on specialized open-source tools, I welcome thoughtful conversations.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">Direct Email</div>
                  <div className="text-xs sm:text-sm text-[#3A1E26] dark:text-[#FDF7F5] font-semibold truncate">
                    {personalInfo.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#EDE0DC] hover:bg-[#D9BBAF]/50 dark:bg-[#341A23] dark:hover:bg-[#43222C] text-[#3A1E26] dark:text-[#FDF7F5] text-xs flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#BF5670] dark:text-[#D9B0C3]" />
                      <span className="text-[#BF5670] dark:text-[#D9B0C3] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#734652] dark:text-[#D9BBAF]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] flex items-center justify-between gap-3 group transition-colors"
              >
                <div>
                  <div className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">GitHub Profile</div>
                  <div className="text-xs sm:text-sm text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">
                    github.com/{personalInfo.handle}
                  </div>
                </div>
                <span className="text-xs text-[#BF5670] dark:text-[#D9B0C3] font-semibold flex items-center gap-1">
                  <span>Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

            </div>
          </div>

          {/* Right Column: Direct Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#734652] dark:text-[#D9C5CE] mb-6">
                Direct transmission via local mail handler.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#734652] dark:text-[#D9BBAF] mb-1.5" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] text-sm text-[#3A1E26] dark:text-[#FDF7F5] placeholder-[#734652]/50 dark:placeholder-[#D9BBAF]/40 focus:outline-none focus:border-[#BF5670] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#734652] dark:text-[#D9BBAF] mb-1.5" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] text-sm text-[#3A1E26] dark:text-[#FDF7F5] placeholder-[#734652]/50 dark:placeholder-[#D9BBAF]/40 focus:outline-none focus:border-[#BF5670] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#734652] dark:text-[#D9BBAF] mb-1.5" htmlFor="contact-message">
                    Project Brief or Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] text-sm text-[#3A1E26] dark:text-[#FDF7F5] placeholder-[#734652]/50 dark:placeholder-[#D9BBAF]/40 focus:outline-none focus:border-[#BF5670] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-medium text-xs sm:text-sm tracking-wide transition-colors active:scale-95"
                  >
                    Transmit Message
                  </button>

                  {sent && (
                    <span className="text-xs text-[#BF5670] dark:text-[#D9B0C3] flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      <span>Mail client dispatched</span>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
