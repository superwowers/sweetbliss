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
    <section id="contact" className="py-24 border-t border-ferra-200 dark:border-ferra-800/80 bg-ferra-50/40 dark:bg-brandDark-950/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mulberry dark:text-bloom font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-mulberry" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ferra-950 dark:text-white">
              Let's build something remarkable together.
            </h2>

            <p className="text-ferra-700 dark:text-cancan/80 text-sm leading-relaxed">
              Have an opening, an interesting project, or want to discuss full-stack & AI solutions? Reach out directly—I am always open to meaningful collaborations.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 flex items-center justify-between gap-3 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-ferra-100 dark:bg-ferra/40 text-mulberry shrink-0 border border-ferra-200 dark:border-ferra-700/50">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-ferra-600 dark:text-cancan/60">Direct Email</div>
                    <div className="text-xs font-mono text-ferra-900 dark:text-cancan-100 font-medium truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-ferra-50 hover:bg-ferra-100 border border-ferra-200 dark:bg-brandDark-850 dark:hover:bg-brandDark-800 dark:border-ferra-800 text-ferra-800 dark:text-cancan-200 text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-mulberry dark:text-bloom" />
                      <span className="text-mulberry dark:text-bloom font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ferra-500 dark:text-cancan/70" />
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
                className="p-4 rounded-xl bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 hover:border-mulberry/50 flex items-center justify-between gap-3 group transition-all shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-ferra-100 dark:bg-ferra/40 text-ferra-700 dark:text-cancan-200 group-hover:text-mulberry transition-colors border border-ferra-200 dark:border-ferra-700/50">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-ferra-600 dark:text-cancan/60">GitHub Profile</div>
                    <div className="text-xs font-mono text-ferra-900 dark:text-cancan-100 font-medium">
                      github.com/{personalInfo.handle}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-mulberry dark:text-bloom group-hover:translate-x-0.5 duration-200">
                  Visit ↗
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 shadow-xl shadow-ferra-950/5 dark:shadow-2xl">
              <h3 className="text-lg font-bold text-ferra-950 dark:text-white mb-2">
                Send a Direct Note
              </h3>
              <p className="text-xs text-ferra-600 dark:text-cancan/70 mb-6">
                Fill in the details below to start the conversation directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ferra-600 dark:text-cancan/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ferra-50/60 dark:bg-brandDark-950 border border-ferra-200 dark:border-ferra-800 text-ferra-900 dark:text-cancan-100 text-sm focus:outline-none focus:border-mulberry transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ferra-600 dark:text-cancan/70 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ferra-50/60 dark:bg-brandDark-950 border border-ferra-200 dark:border-ferra-800 text-ferra-900 dark:text-cancan-100 text-sm focus:outline-none focus:border-mulberry transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ferra-600 dark:text-cancan/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ferra-50/60 dark:bg-brandDark-950 border border-ferra-200 dark:border-ferra-800 text-ferra-900 dark:text-cancan-100 text-sm focus:outline-none focus:border-mulberry transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-mulberry hover:bg-mulberry-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-mulberry/30 active:scale-[0.99]"
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
