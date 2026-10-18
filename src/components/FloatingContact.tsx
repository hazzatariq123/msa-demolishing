import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT, TEL_HREF, WHATSAPP_HREF } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

/** Sticky WhatsApp + call buttons, bottom-right, mobile only. */
export const FloatingContact: React.FC = () => (
  <div
    className="md:hidden fixed right-4 z-40 flex flex-col gap-3"
    style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
  >
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${CONTACT.phoneDisplay}`}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 active:scale-95 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
    <a
      href={TEL_HREF}
      aria-label={`Call ${CONTACT.phoneDisplay}`}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-black/30 active:scale-95 transition-transform"
    >
      <Phone className="h-7 w-7" aria-hidden="true" />
    </a>
  </div>
);
