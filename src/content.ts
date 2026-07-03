/**
 * All site copy lives here so you can edit text without touching components.
 *
 * Content is kept at (or below) the level of detail already public on your
 * LinkedIn — public AWS product names + problem/approach/tech, no internal
 * architecture. Items marked PLACEHOLDER are things your notes didn't contain;
 * fill those in before going live.
 */

export type IconName =
  | 'orbit'
  | 'pulse'
  | 'node'
  | 'mail'
  | 'arrow'
  | 'arrowUpRight'
  | 'download'
  | 'github'
  | 'linkedin'
  | 'cpu'
  | 'transfer'
  | 'shield'
  | 'mobile'
  | 'spark'
  | 'terminal'
  | 'code';

export interface ContactMethod {
  label: string;
  /** Display text under the label, e.g. an email or handle. */
  value: string;
  href: string;
  icon: IconName;
}

export interface Project {
  name: string;
  badge?: string;
  role: string;
  blurb: string;
  stack: string[];
  year: string;
  icon: IconName;
  /** Optional external link (e.g. a public repo). Renders a link on the card. */
  link?: { label: string; href: string };
}

export interface TimelineItem {
  when: string;
  /** Team name — the headline of the entry. */
  team: string;
  badge?: string;
  /** Role + org + location, shown as the subtitle. */
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
    handle: '~/sde @ aws',
    email: 'contact@brianyip.dev',
    resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
    terminalUrl: 'https://terminal.brianyip.dev',
    // Hero photo: drop an image in public/ (e.g. photo.jpg) and set this to
    // `${import.meta.env.BASE_URL}photo.jpg`. Leave '' to show the placeholder.
    photo: '',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    availability: 'Currently building agentic AI at AWS',
    titleLead: 'I build across the stack:',
    titleGradient: 'protocol internals to AI agents.',
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
    stats: [
      { value: '4+ yrs', label: 'shipping at AWS' },
      { value: 'Full-stack', label: 'AS2 protocol → AI agents' },
      { value: 'TS · Java · Python', label: 'Languages' },
    ],
  },

  about: {
    // Rich lead paragraph: {hl: "..."} segments get the gradient highlight.
    lead: [
      'I build the software that makes complex enterprise workflows ',
      { hl: 'reliable and automatic' },
      ', from AI agents that replace weeks of manual analysis to file-transfer protocols that resume instead of starting over.',
    ] as Array<string | { hl: string }>,
    sub: 'I like going deep, chasing a bug down to a single byte at a protocol boundary, then shipping full-stack from a React console to the CDK infrastructure under it. I care about correctness, honest engineering, and systems a teammate can reason about at 3 a.m.',
    interests: [
      'Agentic AI',
      'Strands Agents',
      'AS2 / EDI protocols',
      'Distributed systems',
      'Full-stack',
      'Developer experience',
    ],
    glance: [
      { k: 'What I do', v: 'SDE II · AWS' },
      { k: 'Building on the side', v: 'A MyAnimeList mobile app (Flutter)' },
      { k: 'Before this', v: 'AWS Transfer Family (+ AWS B2BI away-team)' },
      { k: 'Languages', v: 'Dart, Java, TypeScript, JavaScript, Python' },
      { k: 'Tools', v: 'Strands Agents · Lambda · CDK' },
    ],
  },

  work: {
    tag: 'Projects',
    title: 'Things I build on my own time',
    intro: 'Side projects and coursework — the stuff you can actually go poke at.',
    projects: [
      {
        name: 'TastEZ',
        role: 'Recipe & pairing mobile app',
        blurb:
          'A cross-platform Flutter app that helps home cooks decide what to make: it pulls recipes from the Spoonacular API and pairs them with drinks and nearby ingredient sources via Google Maps. Built as a CSUN senior capstone.',
        stack: ['Flutter', 'Dart', 'Spoonacular API', 'Google Maps API'],
        year: '2021',
        icon: 'mobile',
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
        year: '2021',
        icon: 'spark',
        link: {
          label: 'View on GitHub',
          href: 'https://github.com/GreenNovaStar/MyAnimeList_Client',
        },
      },
      {
        name: 'MoChinko',
        role: 'Browser Pachinko game',
        blurb:
          'A playable browser Pachinko game built with Phaser.js: drop a ball, watch it bounce through the pins, and land in a scoring pocket. Runs entirely in the browser with a live demo.',
        stack: ['JavaScript', 'Phaser.js', 'HTML', 'CSS'],
        year: '2021',
        icon: 'node',
        link: {
          label: 'Play the demo',
          href: 'https://greennovastar.github.io/MoChinko/',
        },
      },
    ] as Project[],
  },

  experience: {
    tag: 'Experience & stack',
    title: "Where I've been, what I reach for",
    intro: 'Two teams at AWS: managed file transfer, then agentic AI for cloud migration.',
    // Show this many timeline entries; the rest collapse behind "View more".
    visibleCount: 3,
    timeline: [
      {
        when: '2026 — now',
        team: 'AWS Transform',
        role: 'SDE II · Amazon Web Services',
        location: 'Boston, MA',
        blurb:
          'Architecting AI-powered migration-assessment agents (Strands Agents) that automate VMware-to-AWS planning: an EC2 compute agent for rightsizing, pricing, and licensing analysis, and a cloud-economics agent that quantifies migration ROI.',
      },
      {
        when: '2022 — 2025',
        team: 'AWS Transfer Family',
        role: 'SDE I · Amazon Web Services',
        location: 'Santa Monica, CA',
        blurb:
          'Owned AS2 protocol features end-to-end: transfer recovery via partial S3 fetch and five Drummond interoperability certifications across 21 trading partners. As an away-team contributor to the sister B2B Data Interchange team, built the React/Redux console (frontend SME) and shipped AI-powered EDI Generative Mapping.',
      },
      {
        when: '2021',
        team: 'California State University, Northridge',
        role: 'B.S. Computer Science',
        location: 'GPA 3.70',
        blurb:
          'Graduated December 2021. Focused on systems, algorithms, and software engineering fundamentals.',
      },
    ] as TimelineItem[],
    skills: {
      title: 'Toolbox',
      subtitle: 'What I reach for day to day.',
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

  contact: {
    tag: 'Contact',
    titleLead: "Let's build something",
    titleGradient: 'worth shipping.',
    blurb:
      "If you're working on agentic AI, hard backend systems, or making enterprise software genuinely reliable, I'd love to compare notes.",
    methods: [
      {
        label: 'Email',
        value: 'contact@brianyip.dev',
        href: 'mailto:contact@brianyip.dev',
        icon: 'mail',
      },
      {
        label: 'LinkedIn',
        value: '/in/brian-yip-dev',
        href: 'https://linkedin.com/in/brian-yip-dev',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        value: '@GreenNovaStar',
        href: 'https://github.com/GreenNovaStar',
        icon: 'github',
      },
    ] as ContactMethod[],
  },

  footer: {
    // {year} is replaced with the current year at render time.
    copyright: '© {year} Brian Yip',
  },
} as const;

export type Content = typeof content;
