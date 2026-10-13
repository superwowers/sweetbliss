import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <section id="contact" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652] bg-[#EDE0DC]/40 dark:bg-[#261219]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Let's build something remarkable together.
            </h2>

            <p className="text-[#5C3340] dark:text-[#D9C5CE] text-sm leading-relaxed">
              Have an opening, an interesting project, or want to discuss full-stack & AI solutions? Reach out directly—I am always open to meaningful collaborations.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-[#BF5670]/15 dark:bg-[#BF5670]/30 text-[#BF5670] shrink-0 border border-[#BF5670]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-[#734652] dark:text-[#D9BBAF]">Direct Email</div>
                    <div className="text-xs font-mono text-[#3A1E26] dark:text-[#FDF7F5] font-semibold truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#F5E9E5] hover:bg-[#EDE0DC] border border-[#D9BBAF] dark:bg-[#341A23] dark:hover:bg-[#3f202b] dark:border-[#734652] text-[#3A1E26] dark:text-[#FDF7F5] text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#BF5670] dark:text-[#D9B0C3]" />
                      <span className="text-[#BF5670] dark:text-[#D9B0C3] font-bold">Copied!</span>
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
                className="p-4 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] flex items-center justify-between gap-3 group transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#BF5670]/15 dark:bg-[#BF5670]/30 text-[#BF5670] border border-[#BF5670]/40">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#734652] dark:text-[#D9BBAF]">GitHub Profile</div>
                    <div className="text-xs font-mono text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">
                      github.com/{personalInfo.handle}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#BF5670] dark:text-[#D9B0C3] font-semibold group-hover:translate-x-0.5 duration-200">
                  Visit ↗
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] shadow-xl">
              <h3 className="text-lg font-bold text-[#3A1E26] dark:text-[#FDF7F5] mb-2">
                Send a Direct Note
              </h3>
              <p className="text-xs text-[#734652] dark:text-[#D9C5CE] mb-6">
                Fill in the details below to start the conversation directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#734652] dark:text-[#D9BBAF] mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF] dark:border-[#734652] text-[#3A1E26] dark:text-[#FDF7F5] text-sm focus:outline-none focus:border-[#BF5670] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#734652] dark:text-[#D9BBAF] mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF] dark:border-[#734652] text-[#3A1E26] dark:text-[#FDF7F5] text-sm focus:outline-none focus:border-[#BF5670] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#734652] dark:text-[#D9BBAF] mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF] dark:border-[#734652] text-[#3A1E26] dark:text-[#FDF7F5] text-sm focus:outline-none focus:border-[#BF5670] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#BF5670]/30 active:scale-[0.99]"
                >
                  {sent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Opening Mail Client...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
