// Central affiliate program registry — single source of truth.
//
// After you join each program, paste your referral/affiliate URL into `url`.
// While `url` is '#', the AffiliateCTA component renders the card without an
// outbound link (no broken links, no untagged traffic leaking value).
//
// All outbound affiliate links are rendered with rel="sponsored nofollow"
// and target="_blank" by the AffiliateCTA component.

export interface AffiliateProgram {
  name: string;
  url: string;
  /** Short tagline shown on the CTA card. */
  tagline: string;
  /** Optional join URL, for your own reference (not rendered). */
  joinUrl?: string;
}

export const AFFILIATES = {
  wise: {
    name: 'Wise',
    url: '#',
    tagline: 'Pay suppliers at the real exchange rate — ~0.5% all-in, no markup.',
    joinUrl: 'https://wise.com/partners',
  },
  payoneer: {
    name: 'Payoneer',
    url: '#',
    tagline: 'Cross-border payments many Chinese factories already accept.',
    joinUrl: 'https://www.payoneer.com/about/affiliate-program/',
  },
  helium10: {
    name: 'Helium 10',
    url: '#',
    tagline: 'Product research and keyword tools for Amazon FBA sellers.',
    joinUrl: 'https://www.helium10.com/affiliates/',
  },
  junglescout: {
    name: 'Jungle Scout',
    url: '#',
    tagline: 'Validate product demand and estimate sales before you source.',
    joinUrl: 'https://affiliate.junglescout.com/',
  },
  qima: {
    name: 'QIMA',
    url: '#',
    tagline: 'Book third-party factory audits and pre-shipment inspections.',
    joinUrl: 'https://www.qima.com/',
  },
  freightos: {
    name: 'Freightos',
    url: '#',
    tagline: 'Compare and book freight from China — instant online quotes.',
    joinUrl: 'https://www.freightos.com/',
  },
} as const satisfies Record<string, AffiliateProgram>;

export type AffiliateKey = keyof typeof AFFILIATES;
