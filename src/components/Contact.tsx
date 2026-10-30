import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendViaMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subjectEncoded = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleCopyMessage = () => {
    if (!validate()) return;

    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Interesting Problem to Solve?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm always interested in exploring ideas, learning new technologies, and building meaningful technical projects. Feel free to connect with me.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-400 transition-colors break-all">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone</div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {personalInfo.phone}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800 shadow-sm">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all text-xs font-semibold"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form with real validation & client-side mail draft */}
          <div className="lg:col-span-7 bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSendViaMailto} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Collaboration on AI Project / Research Discussion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Share details about the problem, project, or collaboration idea..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors resize-y"
                />
                {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
              </div>

              {/* Transparent connection notice */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  Clicking <strong className="text-slate-300">Launch in Email Client</strong> opens your pre-filled email client directly addressed to <span className="font-mono text-cyan-400">{personalInfo.email}</span>. You can also copy your formatted message to clipboard.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch in Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-colors border border-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
