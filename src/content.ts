/**
 * All site copy lives here so you can edit text without touching components.
 *
 * Content is kept at (or below) the level of detail already public on your
 * LinkedIn — public AWS product names + problem/approach/tech, no internal
 * architecture.
 */

export interface ContactMethod {
  label: string;
  /** Display text, e.g. an email or handle. */
  value: string;
  href: string;
}

export interface Project {
  name: string;
  role: string;
  blurb: string;
  stack: string[];
  year: string;
  /** Optional external link (e.g. a public repo). */
  link?: { label: string; href: string };
}

export interface TimelineItem {
  when: string;
  /** Team name — the headline of the entry. */
  team: string;
  /** Role + org, shown as the subtitle. */
  role: string;
  location: string;
  blurb: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const content = {
  meta: {
    name: 'Brian Yip',
    handle: 'Software Engineer · AWS',
    email: 'contact@brianyip.dev',
    resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
    terminalUrl: 'https://terminal.brianyip.dev',
    // Hero photo: drop an image in public/ and reference it via BASE_URL.
    // Leave '' to hide.
    photo: `${import.meta.env.BASE_URL}photo.jpg`,
  },

  nav: [
    { label: 'about', href: '#about' },
    { label: 'projects', href: '#projects' },
    { label: 'experience', href: '#experience' },
    { label: 'education', href: '#education' },
    { label: 'contact', href: '#contact' },
  ],

  hero: {
    availability: 'Currently building agentic AI at AWS',
    title: 'I build across the stack, from protocol internals to AI agents.',
    // Rich intro paragraph: {b: "..."} segments render bold/emphasized.
    intro: [
      "I'm ",
      { b: 'Brian Yip' },
      ', a Software Development Engineer at AWS with 4+ years shipping end-to-end for enterprise customers, from ',
      { b: 'AWS Transfer Family AS2' },
      ' to the ',
      { b: 'agentic AI systems' },
      ' I build today on AWS Transform.',
    ] as Array<string | { b: string }>,
  },

  about: {
    lead: 'I build the software that makes complex enterprise workflows reliable and automatic, from AI agents that replace weeks of manual analysis to file-transfer protocols that resume instead of starting over.',
    sub: 'I like going deep, chasing a bug down to a single byte at a protocol boundary, then shipping full-stack from a React console to the CDK infrastructure under it. I care about correctness, honest engineering, and systems a teammate can reason about at 3 a.m.',
    glance: [
      { k: 'Role', v: 'SDE II · AWS' },
      { k: 'Building on the side', v: 'A MyAnimeList mobile app (Flutter)' },
      { k: 'Before this', v: 'AWS Transfer Family (+ AWS B2BI away-team)' },
      { k: 'Languages', v: 'Dart, Java, TypeScript, JavaScript, Python' },
      { k: 'Tools', v: 'Strands Agents · Lambda · CDK' },
    ],
  },

  work: {
    title: 'Projects',
    intro: 'Side projects and coursework: the stuff you can actually go poke at.',
    projects: [
      {
        name: 'TastEZ',
        role: 'Recipe & pairing mobile app',
        blurb:
          'A cross-platform Flutter app that helps home cooks decide what to make: it pulls recipes from the Spoonacular API, suggests drink pairings, and finds nearby ingredient sources via Google Maps. Built as a CSUN senior capstone.',
        stack: ['Flutter', 'Dart', 'Spoonacular API', 'Google Maps API'],
        year: '2021 — 2022',
        link: {
          label: 'View on GitHub',
          href: 'https://github.com/GreenNovaStar/TastEZ',
        },
      },
      {
        name: 'MyAnimeList Client',
        role: 'Unofficial MyAnimeList mobile app',
        blurb:
          'A cross-platform Flutter client for MyAnimeList across Android, iOS, and Web. Browse trending and airing anime, search the catalog, and track a personal watchlist against the MyAnimeList API.',
        stack: ['Flutter', 'Dart', 'REST API'],
        year: '2021 — present',
        link: {
          label: 'View on GitHub',
          href: 'https://github.com/GreenNovaStar/MyAnimeList_Client',
        },
      },
      {
        name: 'MoChinko',
        role: 'Browser Pachinko game',
        blurb:
          'A playable Pachinko game built with Phaser.js: drop a ball, watch it bounce through the pins, and land in a scoring pocket. Runs entirely in the browser, with a live demo you can try right now.',
        stack: ['JavaScript', 'Phaser.js', 'HTML', 'CSS'],
        year: '2021',
        link: {
          label: 'Play the demo',
          href: 'https://greennovastar.github.io/MoChinko/',
        },
      },
    ] as Project[],
  },

  experience: {
    title: 'Experience',
    intro:
      'Managed file transfer, then agentic AI for cloud migration — and next, satellite software at Amazon Leo.',
    // Show this many timeline entries; the rest collapse behind "View more".
    visibleCount: 3,
    timeline: [
      {
        when: 'Aug 2026 — now',
        team: 'Amazon Leo (Kuiper)',
        role: 'Software I&T Engineer · Amazon',
        location: 'Northridge, CA',
        blurb:
          "Starting August 2026: software integration & test for Amazon Leo, Amazon's low-Earth-orbit satellite broadband constellation (formerly Project Kuiper).",
      },
      {
        when: 'Jan 2026 — Aug 2026',
        team: 'AWS Transform',
        role: 'SDE II · Amazon Web Services',
        location: 'Boston, MA',
        blurb:
          'Architecting AI-powered migration-assessment agents (Strands Agents) that automate VMware-to-AWS planning: an EC2 compute agent for rightsizing, pricing, and licensing analysis, and a cloud-economics agent that quantifies migration ROI.',
      },
      {
        when: 'Jul 2022 — Jan 2026',
        team: 'AWS Transfer Family',
        role: 'SDE I · Amazon Web Services',
        location: 'Santa Monica, CA',
        blurb:
          'Owned AS2 protocol features end-to-end: transfer recovery via partial S3 fetch and five Drummond interoperability certifications across 21 trading partners. As an away-team contributor to the sister B2B Data Interchange team, built the React/Redux console (frontend SME) and shipped AI-powered EDI Generative Mapping.',
      },
    ] as TimelineItem[],
    skills: {
      title: 'Toolbox',
      groups: [
        { label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python'] },
        { label: 'Frontend', items: ['React', 'Redux'] },
        {
          label: 'Cloud & infra',
          items: ['Lambda', 'DynamoDB', 'ECS Fargate', 'EventBridge', 'CDK', 'CloudFormation'],
        },
        { label: 'Tools', items: ['Strands Agents', 'Docker'] },
      ] as SkillGroup[],
    },
  },

  education: {
    school: 'California State University, Northridge',
    degree: 'B.S. Computer Science',
    detail: '2015 — 2021 · GPA 3.70',
  },

  contact: {
    title: 'Contact',
    blurb:
      "If you're working on agentic AI, hard backend systems, or enterprise software that has to stay reliable, I'd love to compare notes.",
    methods: [
      {
        label: 'Email',
        value: 'contact@brianyip.dev',
        href: 'mailto:contact@brianyip.dev',
      },
      {
        label: 'LinkedIn',
        value: '/in/brian-yip-dev',
        href: 'https://linkedin.com/in/brian-yip-dev',
      },
      {
        label: 'GitHub',
        value: '@GreenNovaStar',
        href: 'https://github.com/GreenNovaStar',
      },
    ] as ContactMethod[],
  },

  footer: {
    // {year} is replaced with the current year at render time.
    copyright: '© {year} Brian Yip',
  },
} as const;

export type Content = typeof content;
