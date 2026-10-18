import { CONTACT } from '../data/contact';

/**
 * Opens WhatsApp with a pre-filled message to the business number containing every detail the visitor
 * entered. Must be called synchronously from a click/submit handler so browsers don't block the tab.
 */
export function sendToWhatsApp(title: string, fields: Record<string, string | undefined>): void {
  const details = Object.entries(fields)
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `*${label}:* ${value!.trim()}`)
    .join('\n');
  const source =
    typeof window !== 'undefined' ? `${window.location.origin}/${window.location.hash}` : '';
  const text = `*${title}*\n${details}${source ? `\n\n_Sent from ${source}_` : ''}`;
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

  const opened = window.open(url, '_blank');
  if (opened) {
    opened.opener = null;
  } else {
    // Pop-up blocked: continue in this tab instead.
    window.location.href = url;
  }
}
