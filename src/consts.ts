// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'China Market Guide';
export const SITE_DESCRIPTION = 'Your insider guide to sourcing from China — real talk on 1688, Alibaba, Yiwu market, Canton Fair, and the messy bits no one else writes about.';
export const SITE_AUTHOR = 'China Market Guide';

// Google AdSense
export const ADSENSE_CLIENT = 'ca-pub-7664558227847589';
// Ad unit slot IDs — create display ad units in the AdSense dashboard and paste
// the numeric data-ad-slot values here. While a slot is empty, the AdUnit
// component renders nothing (no blank ad box).
export const ADSENSE_SLOTS = {
  inArticle: '',     // responsive in-article unit, near top of post body
  articleBottom: '', // unit after the article body
  listInline: '',    // in-feed unit on the blog index list
} as const;
