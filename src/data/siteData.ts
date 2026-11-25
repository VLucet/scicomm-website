/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'Birds On The Grid',
  url: 'https://example.com',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'valentin.lucet@mail.concordia.ca',
  phoneForTel: '',
  phoneFormatted: '',
  address: {
    lineOne: 'Concordia University',
    lineTwo: 'Department of Biology',
    city: 'Montreal',
    state: 'QC',
    zip: 'H4B 1R6',
    country: 'CAN',
    mapLink: 'https://maps.app.goo.gl/AaMbDn95nQY6NmLz5',
  },
  hours: [
    { days: '', time: '' },
    { days: '', time: '' },
    { days: '', time: '' },
  ],
  emergencyService: '',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: '',
    instagram: '',
    scholar: 'https://scholar.google.com/citations?hl=fr&user=cIHIw5IAAAAJ&view_op=list_works',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/research' },
    { label: 'Teaching', href: '/teaching' },
    // { label: 'Blog', href: '/blog' },
    // { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    // {
    //   title: 'General Repairs',
    //   description:
    //     'From leaky faucets to broken drywall, our team handles everyday repairs quickly and professionally. We diagnose the issue, explain your options, and get it fixed — no surprises on the bill.',
    // },
    // {
    //   title: 'Installations',
    //   description:
    //     'New fixtures, appliances, water heaters, ceiling fans, and more. We ensure every installation is up to code, properly tested, and backed by our workmanship guarantee.',
    // },
    // {
    //   title: 'Inspections',
    //   description:
    //     'Comprehensive property inspections for homebuyers, sellers, and proactive homeowners. We identify potential issues before they become expensive emergencies.',
    // }
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "They showed up on time, explained everything clearly, and finished the job faster than expected. Best service experience we've had.", name: 'Sarah M.', location: 'Denver, CO', rating: 5 },
    { quote: "Honest pricing and top-notch work. I've used them for three different projects now and they never disappoint.", name: 'James R.', location: 'Aurora, CO', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'As a ecologist and ornithologist, I am interested in bird movement through changing environments and in how anthropogenic forces shape avian populations.',
      'Passionate about open and reproducible science, I develop tools for researchers and managers, and teach computational methods.'
    ],
    team: [
      { name: 'Eric Pedersen', role: 'Co-Supervisor', image: '' },
      { name: 'Barbara Frei', role: 'Co-Supervisor', image: '' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Licensed' },
    { label: 'Fully Insured' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Jobs Completed', value: '2,500+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: '',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Research', href: '/research' },
        // { label: 'Services', href: '/services' },
        // { label: 'Reviews', href: '/reviews' },
        // { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: '',
      links: [
        { label: 'Teaching', href: '/teaching' },
        { label: 'Contact', href: '/contact' },
        // { label: 'Privacy', href: '/privacy' },
        // { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
