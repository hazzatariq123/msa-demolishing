import React, { useState } from 'react';
import { m as motion } from 'motion/react';
import { Check, User, Phone, Mail, MapPin, ClipboardList } from 'lucide-react';
import { sendToWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

const SERVICE_OPTIONS = [
  'Building Demolition',
  'Industrial Demolition',
  'Interior Demolition',
  'Infrastructure Demolition',
  'Other / Not sure yet'
];

const BENEFITS = [
  'Site visit and structural assessment by certified engineers',
  'Municipal permits and approvals handled for you',
  'Written quote and method statement within 24 hours'
];

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  service: SERVICE_OPTIONS[0],
  location: '',
  message: ''
};

const fieldClass =
  'w-full bg-white border border-neutral-300 rounded-lg pl-10 pr-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/15 transition';
const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5';

interface HomeEnquirySectionProps {
  /** Pre-selects the service dropdown (used on the individual service pages). */
  defaultService?: string;
}

export const HomeEnquirySection: React.FC<HomeEnquirySectionProps> = ({ defaultService }) => {
  const initialForm = {
    ...EMPTY_FORM,
    service:
      defaultService && SERVICE_OPTIONS.includes(defaultService)
        ? defaultService
        : EMPTY_FORM.service
  };
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update =
    (key: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Opens WhatsApp with every field below pre-filled and addressed to the business number.
    sendToWhatsApp('New Quote Request', {
      Name: form.name,
      Phone: form.phone,
      Email: form.email,
      Service: form.service,
      Location: form.location,
      Details: form.message
    });
    setSubmitted(true);
  };

  return (
    <section
      id="get-quote"
      aria-labelledby="home-enquiry-heading"
      className="relative w-full overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-neutral-950 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-black/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="home-enquiry-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.08] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4),0_2px_14px_rgba(0,0,0,0.3)] mb-6"
            >
              Planning a demolition? Get your quote in 24 hours.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white max-w-xl mb-8">
              Tell us about your site and our Class A licensed engineers will assess access,
              structure and permit requirements, then send a clear scope, method and price.
            </p>
            <ul className="space-y-3.5">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm sm:text-base font-semibold text-white"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-2xl shadow-black/25 p-6 sm:p-8 lg:p-10"
          >
            {!submitted ? (
              <>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-1">
                  Request a Free Quote
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Fields marked * are required. We reply within one working day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enq-name" className={labelClass}>
                        Full name *
                      </label>
                      <div className="relative">
                        <User
                          className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                          aria-hidden="true"
                        />
                        <input
                          id="enq-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={update('name')}
                          className={fieldClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="enq-phone" className={labelClass}>
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone
                          className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                          aria-hidden="true"
                        />
                        <input
                          id="enq-phone"
                          type="tel"
                          required
                          minLength={5}
                          autoComplete="tel"
                          placeholder="+971 50 000 0000"
                          value={form.phone}
                          onChange={update('phone')}
                          className={fieldClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enq-email" className={labelClass}>
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                          aria-hidden="true"
                        />
                        <input
                          id="enq-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={update('email')}
                          className={fieldClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="enq-location" className={labelClass}>
                        Site location
                      </label>
                      <div className="relative">
                        <MapPin
                          className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                          aria-hidden="true"
                        />
                        <input
                          id="enq-location"
                          type="text"
                          placeholder="e.g. Dubai, JAFZA"
                          value={form.location}
                          onChange={update('location')}
                          className={fieldClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enq-service" className={labelClass}>
                      Service needed
                    </label>
                    <div className="relative">
                      <ClipboardList
                        className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                        aria-hidden="true"
                      />
                      <select
                        id="enq-service"
                        value={form.service}
                        onChange={update('service')}
                        className={`${fieldClass} cursor-pointer`}
                      >
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enq-message" className={labelClass}>
                      Project details
                    </label>
                    <textarea
                      id="enq-message"
                      rows={3}
                      placeholder="Building type, size, timeline, anything we should know"
                      value={form.message}
                      onChange={update('message')}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/15 transition resize-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-base transition-all active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Opens WhatsApp with your details filled in. Just press send.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-10 text-center" role="status">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-9 w-9" strokeWidth={3} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-neutral-950 mb-2">
                  WhatsApp is opening
                </h3>
                <p className="text-neutral-600 max-w-sm mx-auto mb-6">
                  Your enquiry is filled in and ready. Press send in WhatsApp and our engineering
                  team will reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
