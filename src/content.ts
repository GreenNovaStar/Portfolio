/**
 * All site copy lives here so you can edit text without touching components.
 *
 * Content is kept at (or below) the level of detail already public on your
 * LinkedIn — public AWS product names + problem/approach/tech, no internal
 * architecture.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  /** One line: what it is. */
  blurb: string;
  stack: string[];
  year: string;
  link?: Link;
}

export interface Role {
  when: string;
  team: string;
  title: string;
  location: string;
  /**
   * Short lines describing what you worked on. `[text](url)` renders as an
   * inline link, used to point at public AWS docs and announcements.
   */
  notes: string[];
  stack: string[];
}

export const content = {
  meta: {
    name: 'Brian Yip',
    title: 'Software Engineer at Amazon',
    tagline: 'Satellite network testing, AI agents, and B2B file transfer.',
    email: 'contact@brianyip.dev',
    resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
    terminalUrl: 'https://terminal.brianyip.dev',
    // Drop an image in public/ and reference it via BASE_URL. Leave '' to hide.
    photo: `${import.meta.env.BASE_URL}photo.jpg`,
  },

  intro: [
    "I'm a software engineer at Amazon. I'm currently on the Amazon Leo team in Northridge, CA, where I work on test automation for the satellite network.",
    'Before that I spent four years at AWS, first on the AS2 protocol for AWS Transfer Family and then building migration assessment agents for AWS Transform.',
    'Outside of work I make small browser games and a MyAnimeList app in Flutter.',
  ],

  work: [
    {
      when: '2026 –',
      team: 'Amazon Leo',
      title: 'Software I&T Engineer II',
      location: 'Northridge, CA',
      notes: [
        'Scaling the serverless test orchestration pipeline (Step Functions, SQS, Lambda) from one antenna to four.',
        'Automating IXIA network tests in Python so the full suite runs without manual setup.',
      ],
      stack: ['Python', 'Step Functions', 'Lambda', 'SQS', 'CDK', 'IXIA'],
    },
    {
      when: '2026',
      team: 'AWS Transform',
      title: 'Software Development Engineer II',
      location: 'Boston, MA',
      notes: [
        'Built the [compute](https://docs.aws.amazon.com/transform/latest/userguide/transform-app-assessments-compute.html) and [cloud economics](https://docs.aws.amazon.com/transform/latest/userguide/transform-app-assessments-business-value.html) agents (Strands Agents) for VMware-to-AWS assessments.',
        'Wrote the evaluation gate that scores agent output across 60 scenarios and blocks regressions.',
      ],
      stack: ['Python', 'Strands Agents', 'Amazon Bedrock', 'LLM evaluation', 'CDK'],
    },
    {
      when: '2022 – 25',
      team: 'AWS Transfer Family',
      title: 'Software Development Engineer I',
      location: 'Santa Monica, CA',
      notes: [
        'Added transfer recovery to AS2, which let us remove the 1 GB file size limit.',
        'Raised AS2 send throughput from 3 to 100 TPS per connector by moving to per-connector rate limits.',
        'Unblocked partners on locked-down networks with [static IP addresses](https://docs.aws.amazon.com/transfer/latest/userguide/configure-as2-connector.html) for firewall allowlisting and support for [self-signed partner TLS certificates](https://docs.aws.amazon.com/transfer/latest/userguide/managing-as2-partners.html#configure-as2-certificate).',
        'Added CloudFormation support for AS2 [custom directory locations](https://aws.amazon.com/about-aws/whats-new/2025/01/aws-transfer-family-custom-directory-locations-as2-files/), which let inbound files, MDNs, and status files each land in their own folder.',
        'Led five [Drummond AS2 certifications](https://aws.amazon.com/about-aws/whats-new/2023/06/aws-transfer-family-drummond-group-as2-certification/) from 2023 to 2025, testing interoperability against 21 partner vendors. AWS Transfer Family is on [Drummond’s certified products list](https://www.drummondgroup.com/certified-products/b2b-interoperability/#AS2).',
        'Built the [AWS B2B Data Interchange](https://docs.aws.amazon.com/b2bi/latest/userguide/what-is-b2bi.html) console in React and Redux, and shipped [Generative Mapping](https://docs.aws.amazon.com/b2bi/latest/userguide/generative-ai-assisted-mapping.html) on Amazon Bedrock.',
      ],
      stack: [
        'Java',
        'TypeScript',
        'React',
        'Redux',
        'Lambda',
        'ECS Fargate',
        'SQS',
        'S3',
        'DynamoDB',
        'EventBridge',
        'Amazon Bedrock',
        'CDK',
      ],
    },
  ] as Role[],

  projects: [
    {
      name: 'MyAnimeList Client',
      blurb: 'An unofficial MyAnimeList app for Android, iOS, and web.',
      stack: ['Flutter', 'Dart'],
      year: '2021 –',
      link: { label: 'source', href: 'https://github.com/GreenNovaStar/MyAnimeList_Client' },
    },
    {
      name: 'TastEZ',
      blurb: 'A recipe and drink pairing app. My CSUN senior capstone.',
      stack: ['Flutter', 'Dart'],
      year: '2022',
      link: { label: 'source', href: 'https://github.com/GreenNovaStar/TastEZ' },
    },
    {
      name: 'MoChinko',
      blurb: 'A pachinko game that runs in the browser.',
      stack: ['JavaScript', 'Phaser'],
      year: '2021',
      link: { label: 'play', href: 'https://greennovastar.github.io/MoChinko/' },
    },
  ] as Project[],

  education: {
    when: '2015 – 21',
    school: 'California State University, Northridge',
    degree: 'B.S. Computer Science',
    detail: 'GPA 3.70',
  },

  // {year} is replaced with the current year at render time.
  copyright: '© {year} Brian Yip',
} as const;

export type Content = typeof content;
