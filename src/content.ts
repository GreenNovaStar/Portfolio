/**
 * All site copy lives here so you can edit text without touching components.
 * Replace the PLACEHOLDER values below with your real details.
 *
 * Tip: anything in `hero.titleLead` / `hero.titleGradient` renders as the big
 * headline; the gradient part gets the accent treatment.
 */

export type IconName =
  | 'orbit'
  | 'pulse'
  | 'node'
  | 'mail'
  | 'arrow'
  | 'arrowUpRight'
  | 'github'
  | 'linkedin';

export interface Project {
  name: string;
  badge?: string;
  role: string;
  blurb: string;
  stack: string[];
  year: string;
  icon: IconName;
  href: string;
  /** Link label, e.g. "Case study" or "View project". */
  linkLabel: string;
  /** Feature project renders large with the topology diagram. */
  feature?: boolean;
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
    email: 'brian@brianyip.dev', // PLACEHOLDER
    resumeHref: '#top', // PLACEHOLDER: link to a résumé PDF (e.g. /resume.pdf)
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    availability: 'Open to staff / senior IC conversations',
    titleLead: 'Software that keeps its',
    titleGradient: 'promises under load.',
    // Rich lede: {b: "..."} segments render bold/emphasized.
    lede: [
      "I'm ",
      { b: 'Brian Yip' },
      ', a Software Development Engineer at AWS working on ',
      { b: 'distributed systems and cloud infrastructure' },
      ' — control planes, failover, and the unglamorous plumbing that makes "it just works" true.',
    ] as Array<string | { b: string }>,
    stats: [
      { value: '6+', label: 'years shipping' },
      { value: '4', label: 'regions on-call' },
      { value: 'Go · Rust', label: 'primary stack' },
    ],
    // The hero code card. Kept generic; edit freely.
    codeCard: {
      path: '~/brian/profile.go',
      comment: '// what I optimize for',
      typeName: 'Engineer',
      fields: [
        { key: 'Focus', value: '"resilient control planes"' },
        { key: 'Cares', value: '["correctness", "latency", "blast radius"]' },
        { key: 'Ships', value: '"small, reversible, observable"' },
        { key: 'OnCall', value: '"calm"' },
      ],
      call: 'brian.Reply()',
    },
  },

  about: {
    // Rich lead paragraph: {hl: "..."} segments get the gradient highlight.
    lead: [
      'I build the layer most people never see and everyone depends on — the ',
      { hl: 'coordination, state, and failover' },
      ' that lets a fleet behave like one predictable system.',
    ] as Array<string | { hl: string }>,
    sub: "My work sits where design docs meet 3 a.m. pages: partial failures, consistency trade-offs, and rollout safety. I care about instrumentation before features, and I'd rather ship a smaller change I can reason about than a clever one I can't.",
    interests: ['consensus', 'control planes', 'observability', 'chaos testing', 'API design'],
    glance: [
      { k: 'role', v: 'SDE II · AWS' },
      { k: 'domain', v: 'Distributed systems / infra' },
      { k: 'based', v: 'Seattle, WA · remote-friendly' },
      { k: 'writes', v: 'Go, Rust, Java, TypeScript' },
      { k: 'runs on', v: 'Kubernetes · gRPC · Terraform' },
    ],
  },

  work: {
    tag: 'Selected work',
    title: "Systems I've designed and shipped",
    intro: 'A few projects that show how I think about failure, coordination, and developer experience.',
    projects: [
      {
        name: 'Helios',
        badge: 'flagship',
        role: 'Lead engineer · regional failover control plane',
        blurb:
          'A control plane that orchestrates safe, staged failover across regions — turning a manual runbook into a reviewed, reversible workflow with pre-flight checks and automatic rollback on health regression.',
        stack: ['Go', 'etcd', 'gRPC', 'Kubernetes', 'OpenTelemetry'],
        year: '2023 — present',
        icon: 'orbit',
        href: '#work',
        linkLabel: 'Case study',
        feature: true,
      },
      {
        name: 'Driftless',
        role: 'Config drift detection for infra fleets',
        blurb:
          'A schema-aware diff engine that compares declared vs. observed infrastructure state and surfaces meaningful drift — grouping noise, ranking risk, and opening pre-filled remediation PRs.',
        stack: ['Rust', 'Terraform', 'Postgres'],
        year: '2022',
        icon: 'pulse',
        href: '#work',
        linkLabel: 'View project',
      },
      {
        name: 'Quorum',
        role: 'Deterministic chaos harness',
        blurb:
          'A fault-injection framework for consensus code that replays deterministic partition and clock-skew scenarios, so a flaky race becomes a repeatable test you can bisect and fix.',
        stack: ['Go', 'Raft', 'Docker'],
        year: '2021',
        icon: 'node',
        href: '#work',
        linkLabel: 'View project',
      },
    ] as Project[],
    // Region labels for the feature card's topology diagram.
    topologyNodes: ['us-west-2', 'eu-west-1', 'us-east-1', 'ap-south-1'],
    topologyCore: 'helios-cp',
  },

  experience: {
    tag: 'Experience & stack',
    title: "Where I've been, what I reach for",
    intro: 'Roughly six years across infrastructure teams — startup breadth, then depth at scale.',
    timeline: [
      {
        when: '2023 — now',
        org: 'Amazon Web Services',
        badge: 'current',
        role: 'Software Development Engineer II',
        blurb:
          'Own components of a multi-region control plane; lead failover safety work and mentor two engineers through design reviews.',
      },
      {
        when: '2021 — 2023',
        org: 'Amazon Web Services',
        role: 'Software Development Engineer I',
        blurb:
          'Built internal tooling for config integrity and rollout safety across a large service fleet.',
      },
      {
        when: '2019 — 2021',
        org: 'Northlink Systems',
        badge: 'startup',
        role: 'Backend Engineer',
        blurb:
          'Early infra hire — designed the event pipeline and on-call practice as the platform grew from prototype to production.',
      },
    ] as TimelineItem[],
    skills: {
      title: 'Toolbox',
      subtitle: "Things I'm currently productive in.",
      groups: [
        { label: 'Languages', items: ['Go', 'Rust', 'Java', 'TypeScript', 'Python'] },
        { label: 'Systems', items: ['Kubernetes', 'gRPC', 'etcd', 'Kafka', 'Postgres'] },
        { label: 'Operate', items: ['Terraform', 'OpenTelemetry', 'Prometheus'] },
      ] as SkillGroup[],
    },
  },

  contact: {
    titleLead: "Let's build something",
    titleGradient: 'that stays up.',
    blurb:
      "If you're hiring for hard infrastructure problems — or just want to compare notes on failover — I'd love to talk.",
  },

  footer: {
    copyright: '© 2026 Brian Yip · built from scratch, no template.',
    socials: [
      { label: 'GitHub', href: 'https://github.com/GreenNovaStar', icon: 'github' },
      { label: 'LinkedIn', href: '#top', icon: 'linkedin' }, // PLACEHOLDER
      { label: 'Email', href: 'mailto:brian@brianyip.dev', icon: 'mail' }, // PLACEHOLDER
    ] as SocialLink[],
  },
} as const;

export type Content = typeof content;
