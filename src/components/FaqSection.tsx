import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/faqs';

/** Visible FAQ for a page. Uses native <details> so it works without JavaScript and stays crawlable. */
export const FaqSection: React.FC<{ pageId: string }> = ({ pageId }) => {
  const faq = FAQS[pageId];
  if (!faq) return null;

  return (
    <section
      id="faq"
      aria-labelledby={`faq-heading-${pageId}`}
      className="w-full bg-white border-t border-neutral-200/80 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2
          id={`faq-heading-${pageId}`}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-8 sm:mb-10"
        >
          {faq.title}
        </h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-950 leading-snug">
                  {item.question}
                </h3>
                <ChevronDown
                  className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                {item.answer.map((part, index) =>
                  typeof part === 'string' ? (
                    <React.Fragment key={index}>{part}</React.Fragment>
                  ) : part.href.startsWith('/') ? (
                    <a
                      key={index}
                      href={part.href}
                      className="font-medium text-amber-700 underline underline-offset-2"
                    >
                      {part.text}
                    </a>
                  ) : (
                    <a
                      key={index}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-amber-700 underline underline-offset-2"
                    >
                      {part.text}
                    </a>
                  )
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
