import React from 'react';
import { m as motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, TEL_HREF, MAILTO_HREF } from '../data/contact';

const CARDS = [
  {
    id: 'message',
    Icon: Mail,
    title: 'Send a Message',
    text: "Tell us the reason for your query and we'll give you an answer.",
    link: { label: CONTACT.email, href: MAILTO_HREF }
  },
  {
    id: 'call',
    Icon: Phone,
    title: 'Make a Call',
    text: 'If you have any questions, just call us and our manager will help you.',
    link: { label: CONTACT.phoneDisplay, href: TEL_HREF }
  },
  {
    id: 'visit',
    Icon: MapPin,
    title: 'Visit Showroom',
    text: 'Our showroom is open 24/7',
    link: { label: CONTACT.addressLine, href: undefined as string | undefined }
  }
];

export const ContactInfoSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-info-heading"
      className="w-full bg-[#FAF9F5] border-t border-neutral-200/80 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2
            id="contact-info-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#162859] mb-3"
          >
            Contact Info
          </h2>
          <p className="text-base text-neutral-600">
            Reach the MSA team by message, phone or in person.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map(({ id, Icon, title, text, link }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-lg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18)] px-6 py-9 text-center flex flex-col items-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white mb-6">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162859] mb-3">{title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-2 max-w-xs">{text}</p>
              {link.href ? (
                <a
                  href={link.href}
                  className="font-bold text-orange-600 hover:underline underline-offset-2 break-all"
                >
                  {link.label}
                </a>
              ) : (
                <span className="font-bold text-orange-600">{link.label}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
