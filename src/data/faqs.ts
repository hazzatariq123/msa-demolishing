/**
 * Visible FAQ content per page. The same data feeds the FAQPage structured data, so the markup always
 * matches what visitors can read. Answers can include links: { text, href }.
 */
export type FaqPart = string | { text: string; href: string };

export interface FaqItem {
  question: string;
  answer: FaqPart[];
}

const DM = { text: 'Dubai Municipality', href: 'https://www.dm.gov.ae/' };
const RTA = { text: 'Roads and Transport Authority (RTA)', href: 'https://www.rta.ae/' };
const CONTACT = { text: 'contact page', href: '/contact' };

export const FAQS: Record<string, { title: string; items: FaqItem[] }> = {
  home: {
    title: 'Demolition in Dubai: Frequently Asked Questions',
    items: [
      {
        question: 'Do I need a permit to demolish a building in Dubai?',
        answer: [
          'Yes. Demolition work in Dubai needs approval from ',
          DM,
          ' before it starts, and usually no-objection certificates from authorities such as DEWA and Dubai Civil Defence. Sites in free zones may also need approval from the zone authority. MSA prepares and submits these applications for you as part of the project.'
        ]
      },
      {
        question: 'How much does demolition cost in Dubai?',
        answer: [
          'The cost depends on the size and height of the structure, how it was built, site access, any hazardous materials and how much debris has to be removed. We visit the site for free and send a written quote with the scope and method within 24 hours.'
        ]
      },
      {
        question: 'How long does a demolition project take?',
        answer: [
          'A small interior strip-out can take a few days, while a multi-storey building can take several weeks. The exact programme depends on permits, access and the demolition method, and is set out in the method statement after our site survey.'
        ]
      },
      {
        question: 'Which areas of the UAE do you cover?',
        answer: [
          'We are based in Al Qusais Industrial Area, Dubai, and work across all seven emirates, including Abu Dhabi, Sharjah, Ajman and Ras Al Khaimah.'
        ]
      },
      {
        question: 'What happens to the demolition waste?',
        answer: [
          'Materials are separated on site. Concrete is crushed for reuse as aggregate, steel and other metals go for recycling, and the remaining waste is taken to licensed facilities.'
        ]
      },
      {
        question: 'How do I get a demolition quote?',
        answer: [
          'Call or WhatsApp us on +971 55 434 8690, fill in the quote form, or visit our ',
          CONTACT,
          '. We will arrange a free site visit and send a written quote.'
        ]
      }
    ]
  },
  'building-demolition': {
    title: 'Building Demolition in Dubai: Common Questions',
    items: [
      {
        question: 'What does a building demolition project in Dubai involve?',
        answer: [
          'It starts with a structural and hazardous-materials survey, followed by permits from ',
          DM,
          ', utility disconnection, site hoarding and dust control. The building is then taken down top-down with high-reach excavators, the waste is sorted and removed, and the cleared site is handed over.'
        ]
      },
      {
        question: 'Can you demolish a building next to occupied properties?',
        answer: [
          'Yes. On tight urban sites we use controlled top-down mechanical demolition, diamond wire sawing where needed, dust suppression and vibration monitoring to protect neighbouring buildings and roads.'
        ]
      },
      {
        question: 'Do you also remove foundations and basements?',
        answer: [
          'Yes. Foundations, basement slabs and shoring can be removed as part of the same contract, so the plot is ready for the next construction stage.'
        ]
      },
      {
        question: 'How soon can building demolition start?',
        answer: [
          'Work can start once the permits and utility disconnections are approved. We prepare the applications straight after the site survey to keep this time as short as possible.'
        ]
      }
    ]
  },
  'industrial-demolition': {
    title: 'Industrial Demolition: Common Questions',
    items: [
      {
        question: 'Can you dismantle part of a plant while the rest keeps operating?',
        answer: [
          'Yes. Live-facility work is planned with the plant operator, with isolation of the affected systems, permits-to-work and exclusion zones so the rest of the site can keep running.'
        ]
      },
      {
        question: 'How do you deal with asbestos and other hazardous materials?',
        answer: [
          'Hazardous materials are identified in the pre-demolition survey and removed by licensed specialists under approved procedures before any structural demolition starts.'
        ]
      },
      {
        question: 'What happens to the steel and equipment?',
        answer: [
          'Structural steel, metals and reusable equipment are salvaged and recycled. Their value can help offset part of the demolition cost.'
        ]
      },
      {
        question: 'Do you work in free zones such as JAFZA and KIZAD?',
        answer: [
          'Yes. We work in industrial areas and free zones across the UAE and arrange the approvals each zone authority requires.'
        ]
      }
    ]
  },
  'interior-stripout': {
    title: 'Interior Strip-Out in Dubai: Common Questions',
    items: [
      {
        question: 'Can strip-out work be done at night or outside business hours?',
        answer: [
          'Yes. Malls and occupied office towers often require night shifts, and we plan the work around the building’s permitted hours.'
        ]
      },
      {
        question: 'How do you control dust and noise in an occupied building?',
        answer: [
          'We seal the work area, use dust extraction and low-noise tools, and protect lifts, corridors and finishes along the debris route.'
        ]
      },
      {
        question: 'Do I need approval from the building management?',
        answer: [
          'Usually yes. Most buildings require a landlord or management approval in addition to any authority permits. We prepare the method statement and documents they ask for.'
        ]
      },
      {
        question: 'What condition is the unit left in?',
        answer: [
          'The unit is stripped back to the agreed level, usually shell and core, cleared of debris and left clean and ready for the next fit-out.'
        ]
      }
    ]
  },
  'infrastructure-demolition': {
    title: 'Infrastructure & Bridge Demolition: Common Questions',
    items: [
      {
        question: 'Can bridges and roads stay open during demolition?',
        answer: [
          'Often, yes. Work on roads and bridges is staged under traffic management plans approved by the ',
          RTA,
          ', with lane closures and night work where needed.'
        ]
      },
      {
        question: 'How do you remove concrete near live structures?',
        answer: [
          'We use low-vibration methods such as diamond wire sawing, hydro-demolition and hydraulic crushers, so sections can be cut and lifted out without damaging the structure that stays in place.'
        ]
      },
      {
        question: 'Do you demolish marine structures?',
        answer: [
          'Yes. We remove wharves, quay walls and jetties, with environmental controls such as silt curtains to protect the water.'
        ]
      },
      {
        question: 'Is the concrete from infrastructure demolition recycled?',
        answer: [
          'Yes. Concrete is crushed into aggregate that can be reused, and reinforcing steel is separated and sent for recycling.'
        ]
      }
    ]
  },
  contact: {
    title: 'Before You Contact Us',
    items: [
      {
        question: 'How quickly will you reply?',
        answer: [
          'We aim to reply within one working day. For urgent requests, call or WhatsApp +971 55 434 8690.'
        ]
      },
      {
        question: 'Is the site survey free?',
        answer: [
          'Yes. The site visit and the written quote are free, with no obligation to go ahead.'
        ]
      },
      {
        question: 'What details should I send with my enquiry?',
        answer: [
          'The site location, the type and size of the structure, your preferred timeline and a few photos if you have them. Photos can be sent on WhatsApp.'
        ]
      }
    ]
  }
};

export const faqPlainText = (parts: FaqPart[]): string =>
  parts.map((part) => (typeof part === 'string' ? part : part.text)).join('');
