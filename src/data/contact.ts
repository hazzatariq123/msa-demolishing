// Single source of truth for contact details used across the site.
export const CONTACT = {
  phoneDisplay: '+971 55 434 8690',
  phoneTel: '+971554348690',
  whatsappNumber: '971554348690',
  whatsappMessage: 'Hello MSA, I need a demolition quote for a project in Dubai.',
  email: 'info@msadimolition.com',
  addressLine: 'Al Qusais Industrial 1 Plot 11-0, Dubai.',
  addressFull: 'Al Qusais Industrial 1, Plot 11-0, Dubai, UAE'
} as const;

export const TEL_HREF = `tel:${CONTACT.phoneTel}`;
export const MAILTO_HREF = `mailto:${CONTACT.email}`;
export const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;
