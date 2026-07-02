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
    email: 'brianyip5@gmail.com',
    resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
    terminalUrl: 'https://terminal.brianyip.dev',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    availability: 'Currently building agentic AI at AWS',
    titleLead: 'I build across the stack:',
    titleGradient: 'protocol internals to AI agents.',
    // Rich lede: {b: "..."} segments render bold/emphasized.
    lede: [
      "I'm ",
      { b: 'Brian Yip' },
      ', a Software Development Engineer at AWS with 4+ years shipping end-to-end for enterprise customers — from ',
      { b: 'AS2 protocol internals and B2BI consoles' },
      ' to the ',
      { b: 'agentic AI systems' },
      ' I build today on AWS Transform.',
    ] as Array<string | { b: string }>,
    stats: [
      { value: '4+ yrs', label: 'shipping at AWS' },
      { value: 'Full-stack', label: 'protocol → AI agents' },
      { value: 'Python · Java · TS', label: 'primary stack' },
    ],
    // The hero code card (illustrative). Rendered as a small Python snippet.
    codeCard: {
      path: '~/brian/profile.py',
      comment: '# what I optimize for',
      typeName: 'Engineer',
      fields: [
        { key: 'focus', value: '"agentic AI + reliable systems"' },
        { key: 'stack', value: '["Python", "Java", "TypeScript"]' },
        { key: 'ships', value: '"end-to-end, enterprise scale"' },
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
      'Strands Agents',
      'AS2 / EDI protocols',
      'distributed systems',
      'full-stack',
      'developer experience',
    ],
    glance: [
      { k: 'role', v: 'SDE II · AWS' },
      { k: 'focus', v: 'Agentic AI · cloud migration' },
      { k: 'previously', v: 'Transfer Family · B2BI' },
      { k: 'writes', v: 'Python, Java, TypeScript' },
      { k: 'builds with', v: 'Strands Agents · Lambda · CDK' },
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
        stack: ['Python', 'Strands Agents', 'EC2', 'pytest'],
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
      {
        name: 'AS2 Interop Test Infra',
        role: 'Transfer Family · certification & reliability',
        blurb:
          'Owned the in-situ testing that keeps AS2 certified with external trading partners each quarter (Drummond). Split reliability and interoperability testing into isolated ECS services so a reliability failure no longer blocks interop certification — reworking the CDK, image builds, and a test executor that routes through a fault-injecting proxy or straight to partners.',
        stack: ['Java', 'AWS CDK', 'ECS', 'Docker'],
        year: '2023 — 2025',
        icon: 'node',
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
        team: 'AWS Transform',
        badge: 'current',
        role: 'SDE II · Amazon Web Services',
        location: 'Boston, MA',
        blurb:
          'Architecting AI-powered migration-assessment agents (Strands Agents) that automate VMware-to-AWS planning: an EC2 compute agent for rightsizing, pricing, and licensing analysis, and a cloud-economics agent that quantifies migration ROI. Built the agent evaluation framework — 100% pass rate across 60 scenarios.',
      },
      {
        when: '2022 — 2025',
        team: 'AWS Transfer Family',
        role: 'SDE I · Amazon Web Services',
        location: 'Santa Monica, CA',
        blurb:
          'Owned AS2 protocol and B2B Data Interchange features end-to-end: transfer recovery via partial S3 fetch, the React/Redux B2BI console (team frontend SME), AI-powered EDI Generative Mapping, and five Drummond interoperability certifications across 21 trading partners.',
      },
    ] as TimelineItem[],
    skills: {
      title: 'Toolbox',
      subtitle: 'What I reach for day to day.',
      groups: [
        { label: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
        { label: 'Frontend', items: ['React', 'Redux'] },
        {
          label: 'Cloud & infra',
          items: ['Lambda', 'DynamoDB', 'ECS Fargate', 'EventBridge', 'CDK', 'CloudFormation'],
        },
        { label: 'Tools', items: ['Strands Agents', 'Docker', 'pytest', 'Jest', 'JUnit'] },
      ] as SkillGroup[],
    },
  },

  contact: {
    tag: 'Contact',
    titleLead: "Let's build something",
    titleGradient: 'worth shipping.',
    blurb:
      "If you're working on agentic AI, hard backend systems, or making enterprise software genuinely reliable — I'd love to compare notes.",
    methods: [
      {
        label: 'Email',
        value: 'brianyip5@gmail.com',
        href: 'mailto:brianyip5@gmail.com',
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
    copyright: '© 2026 Brian Yip · built from scratch.',
  },
} as const;

export type Content = typeof content;
