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
  | 'linkedin';

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
}

export interface TimelineItem {
  when: string;
  org: string;
  badge?: string;
  role: string;
  blurb: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export const content = {
  meta: {
    name: 'Brian Yip',
    handle: '~/sde @ aws',
    initials: 'BY',
    email: 'brian@example.com', // PLACEHOLDER: your real contact email
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Résumé', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    availability: 'Currently building agentic AI at AWS',
    titleLead: 'I build systems that make hard things',
    titleGradient: 'reliable and automatic.',
    // Rich lede: {b: "..."} segments render bold/emphasized.
    lede: [
      "I'm ",
      { b: 'Brian Yip' },
      ', a Software Development Engineer at AWS. Right now I build ',
      { b: 'agentic AI systems' },
      ' that automate enterprise cloud migration — and before that I shipped protocol, backend, and console features for managed ',
      { b: 'B2B file transfer' },
      '.',
    ] as Array<string | { b: string }>,
    stats: [
      { value: 'AI agents', label: 'built on Bedrock' },
      { value: '20+', label: 'AWS regions shipped to' },
      { value: 'Python · Java · TS', label: 'primary stack' },
    ],
    // The hero code card (illustrative). Rendered as a small Python snippet.
    codeCard: {
      path: '~/brian/profile.py',
      comment: '# what I optimize for',
      typeName: 'Engineer',
      fields: [
        { key: 'focus', value: '"agentic AI + reliable systems"' },
        { key: 'cares', value: '["correctness", "clarity", "shipping"]' },
        { key: 'ships', value: '"small, reversible, observable"' },
        { key: 'now', value: '"AWS Transform"' },
      ],
      call: 'Engineer().reply()',
    },
  },

  about: {
    // Rich lead paragraph: {hl: "..."} segments get the gradient highlight.
    lead: [
      'I build the software that makes complex enterprise workflows ',
      { hl: 'reliable and automatic' },
      ' — from AI agents that replace weeks of manual analysis to file-transfer protocols that resume instead of starting over.',
    ] as Array<string | { hl: string }>,
    sub: 'I like going deep — chasing a bug down to a single byte at a protocol boundary — and shipping full-stack, from a React console to the CDK infrastructure under it. I care about correctness, honest engineering, and systems a teammate can reason about at 3 a.m.',
    interests: [
      'agentic AI',
      'Amazon Bedrock',
      'B2B protocols',
      'event-driven systems',
      'full-stack',
      'developer experience',
    ],
    glance: [
      { k: 'role', v: 'SDE II · AWS' },
      { k: 'focus', v: 'Agentic AI · cloud migration' },
      { k: 'previously', v: 'Transfer Family · B2B' },
      { k: 'writes', v: 'Python, Java, TypeScript' },
      { k: 'builds with', v: 'Bedrock · Lambda · CDK' },
    ],
  },

  work: {
    tag: 'Selected work',
    title: "Systems I've designed and shipped",
    intro: 'A few projects that show how I think about automation, reliability, and developer experience.',
    projects: [
      {
        name: 'AWS Transform',
        badge: 'current',
        role: 'Compute & Cloud Economics AI agents',
        blurb:
          'Two core AI agents in an agentic platform that turns weeks of manual solutions-architect analysis into an automated pipeline — right-sizing compute across On-Demand / RI / BYOL pricing models and projecting on-prem→AWS migration ROI for enterprises weighing multi-million-dollar moves.',
        stack: ['Python', 'Amazon Bedrock', 'strands-agents', 'EC2'],
        year: '2026 — present',
        icon: 'orbit',
      },
      {
        name: 'AS2 Restart Protocol',
        role: 'Transfer Family · protocol + data plane',
        blurb:
          "Added restart support to AWS Transfer Family's AS2 so large enterprise transfers resume from an interruption instead of restarting at byte zero — ETag-based negotiation and partial S3 reads. Tracked a subtle boundary bug down to a single byte with protocol-level instrumentation.",
        stack: ['Java', 'AS2', 'Amazon S3'],
        year: '2025',
        icon: 'pulse',
      },
    ] as Project[],
  },

  experience: {
    tag: 'Experience & stack',
    title: "Where I've been, what I reach for",
    intro: 'Two teams at AWS — managed file transfer & B2BI, then agentic AI for cloud migration.',
    timeline: [
      {
        when: '2026 — now',
        org: 'Amazon Web Services',
        badge: 'current',
        role: 'SDE II · AWS Transform',
        blurb:
          'Own two core AI agents — Compute and Cloud Economics — in an agentic platform that automates enterprise VMware-to-AWS migration assessments. Built the executive-report output pipeline (PPTX / PDF / XLSX) across thousands of servers per assessment.',
      },
      {
        when: '2026',
        org: 'Amazon Web Services',
        badge: 'promoted in 3 mo',
        role: 'SDE I · AWS Transform',
        blurb:
          'Joined a greenfield migration-assessment platform and built the Compute and Cloud Economics agents from scratch — ramping on multi-agent architecture and cloud economics from zero.',
      },
      {
        when: '2022 — 2025',
        org: 'Amazon Web Services',
        role: 'SDE I · Transfer Family & B2BI',
        blurb:
          'Full-stack feature ownership across managed file transfer and B2B Data Interchange — AS2 / SFTP / EDI protocol design, React consoles, CDK infrastructure, and rollouts across 20+ AWS regions. Mentored two interns to return offers.',
      },
    ] as TimelineItem[],
    skills: {
      title: 'Toolbox',
      subtitle: 'What I reach for day to day.',
      groups: [
        { label: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript'] },
        { label: 'AI & data', items: ['Amazon Bedrock', 'strands-agents', 'DynamoDB', 'EventBridge'] },
        { label: 'Build & ship', items: ['React', 'AWS CDK', 'Lambda', 'S3', 'CloudFormation'] },
      ] as SkillGroup[],
    },
  },

  resume: {
    tag: 'Résumé',
    title: 'The full story, on one page.',
    intro: 'The highlights are here — the résumé has the dates, scope, and detail.',
    highlights: [
      { k: 'role', v: 'SDE II · AWS' },
      { k: 'focus', v: 'Agentic AI · distributed systems' },
      { k: 'experience', v: 'Full-stack: protocol → infra → console' },
      { k: 'stack', v: 'Python · Java · TypeScript' },
    ],
    // PLACEHOLDER: drop a PDF in public/ and set this to '/Portfolio/resume.pdf'
    downloadHref: '#top',
    downloadLabel: 'Download résumé (PDF)',
  },

  contact: {
    tag: 'Contact',
    titleLead: "Let's build something",
    titleGradient: 'worth shipping.',
    blurb:
      "If you're working on agentic AI, hard backend systems, or making enterprise software genuinely reliable — I'd love to compare notes.",
    methods: [
      // PLACEHOLDER: real email
      { label: 'Email', value: 'brian@example.com', href: 'mailto:brian@example.com', icon: 'mail' },
      // PLACEHOLDER: real LinkedIn URL
      { label: 'LinkedIn', value: '/in/brianyip', href: '#top', icon: 'linkedin' },
      {
        label: 'GitHub',
        value: '@GreenNovaStar',
        href: 'https://github.com/GreenNovaStar',
        icon: 'github',
      },
    ] as ContactMethod[],
  },

  footer: {
    copyright: '© 2026 Brian Yip · built from scratch.',
    socials: [
      { label: 'GitHub', href: 'https://github.com/GreenNovaStar', icon: 'github' },
      { label: 'LinkedIn', href: '#top', icon: 'linkedin' }, // PLACEHOLDER: your LinkedIn URL
      { label: 'Email', href: 'mailto:brian@example.com', icon: 'mail' }, // PLACEHOLDER
    ] as SocialLink[],
  },
} as const;

export type Content = typeof content;
