// ─────────────────────────────────────────────────────────────────────────────
// src/content.js — Single source of truth for ALL portfolio copy.
//
// Edit values here; changes propagate automatically to every page & component.
// The only things NOT stored here are layout/style decisions baked into JSX.
//
// Anything still set to '#' is a placeholder waiting on a real URL / file.
// ─────────────────────────────────────────────────────────────────────────────

const content = {
  // ── SITE-WIDE ──────────────────────────────────────────────────────────────
  site: {
    name: 'Abdullah Attique', // footer copyright, about page h1
    logo: 'abdullah.attique', // nav logo text
    email: 'hafiz.abdullah641@gmail.com', // primary contact (nav, footer, CTA)
    phone: '+92 317 4922118', // footer direct column
    location: 'Lahore, Pakistan', // hero coordinates (clock appended in code)
    version: 'v3.0', // portfolio version label
    edition: 'Portfolio MMXXVI', // portfolio edition label
    cvUrl: '/assets/Resume-abdullah.pdf', // résumé PDF (downloads on click)
    socials: {
      linkedin: '#', // TODO: LinkedIn profile URL
      github: '#', // TODO: GitHub profile URL
      twitter: '#', // TODO: X / Twitter profile URL
      instagram: '#', // TODO: Instagram profile URL
      portfolio: '#', // TODO: portfolio domain
    },
  },

  // ── NAV ───────────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'Index', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Work', to: '/#work' },
    ],
  },

  // ── HOME ──────────────────────────────────────────────────────────────────
  home: {
    // Hero A — full-bleed portrait with stacked editorial type
    heroA: {
      meta: [
        { label: '① Index', value: 'Blockchain Engineer' },
        { label: '② Coordinates', value: 'Lahore, PK' }, // live clock appended automatically
        { label: '③ Edition', value: 'Portfolio MMXXVI — v3.0' },
      ],
      title: {
        strikeWord: 'Senior', // word shown with strikethrough
        mainWord: 'Full-stack',
        indentLine: 'Blockchain ', // indented italic second line
        line3: 'Engineer',
        emWord: '', // word shown in italic accent colour
      },
      tag: {
        eyebrow: 'On-chain → production',
        body: 'I build distributed systems  ',
      },
    },

    // Hero B — kinetic rolling-word animation
    heroB: {
      meta: [
        { label: 'Currently', value: 'Senior Blockchain Engineer' },
        { label: 'Based in', value: 'Lahore' }, // live clock appended automatically
        { label: 'Edition', value: 'v3.0 · 2026' },
      ],
      leadIn: 'I ship',
      rollingWords: ['protocols.', 'infrastructure.'],
      trailingLine: 'that fight.',
    },

    // Hero C — manifesto paragraph
    heroC: {
      meta: [
        { label: 'Author', value: 'Abdullah Attique' },
        { label: 'Role', value: 'Senior Blockchain Engineer' },
        { label: 'Statement N°', value: '001 / 2026' },
      ],
      manifesto: {
        name: 'abdullah',
        nameRef: '[01]',
        // Note: in the rendered paragraph the words 'failure', 'trust', and
        // 'correctness' appear in italic accent colour. If you rewrite this text,
        // keep those words present, or update the <em> tags in Home.jsx
        body: 'an engineer who designs for failure first — minimising trust assumptions and enforcing correctness at the protocol level.',
      },
    },

    // Scrolling marquee ticker
    marquee: [
      { text: 'Solidity', italic: false },
      { text: 'Foundry', italic: true },
      { text: 'EVM', italic: false },
      { text: 'Solana', italic: true },
      { text: 'TypeScript', italic: false },
      { text: 'JavaScript', italic: true },
      { text: 'Node.js', italic: false },
      { text: 'Kafka', italic: false },
      { text: 'NestJS', italic: true },
      { text: 'Hyperledger', italic: false },
      { text: 'AWS KMS', italic: true },
      { text: 'Hardhat', italic: false },
      { text: 'IPFS', italic: true },
      { text: 'Next.js', italic: true },
      { text: 'React', italic: false },
      { text: 'Docker', italic: false },
      { text: 'Kubernetes', italic: true },
    ],

    // Selected work list — each links to /project/{slug}
    work: [
      {
        num: '01',
        title: 'Escrowly',
        tag: 'Multi-chain Escrow',
        year: "'24",
        slug: 'escrowly',
      },
      {
        num: '02',
        title: 'TrAider',
        tag: 'AI Trading Agent',
        year: "'24",
        slug: 'traider',
      },
      {
        num: '03',
        title: 'Hestiya',
        tag: 'Tokenized Carbon Credits',
        year: "'23",
        slug: 'hestiya',
      },
      {
        num: '04',
        title: 'DocTracer',
        tag: 'Document Integrity trail',
        year: "'23",
        slug: 'doctracer',
      },
      {
        num: '05',
        title: 'Contract Optimization',
        tag: 'Gas / EVM',
        year: "'23",
        slug: 'contract-optimization',
      },
    ],

    // Services / capabilities grid (blockchain-native)

    services: [
      {
        num: '01 / Smart Contracts & Protocols',
        title: 'Contracts that survive audit.',
        desc: 'Solidity engineering from spec to mainnet: UUPS-upgradeable suites, EIP-compliant tokens, gas and bytecode optimisation, and test suites that chase 100% coverage in Hardhat and Foundry.',
        tools: ['Solidity', 'Foundry', 'Hardhat', 'UUPS / EIPs'],
      },
      {
        num: '02 / On-chain Infrastructure',
        title: 'Backends that keep the chain honest.',
        desc: 'The backend layer that makes products reliable: multi-chain indexing and event pipelines, resilient RPC, message-driven services and secure key management — keeping on-chain state consistent with the world off-chain.',
        tools: ['NestJS', 'Kafka', 'AWS KMS', 'Multi-RPC'],
      },
      {
        num: '03 / AI × Crypto',
        title: 'Natural language, on-chain execution.',
        desc: 'Conversational trading agents that turn intent into transactions: dual-LLM dispatch, multi-DEX best-execution routing across Solana and EVM, and a pipeline that stays cheap and fast under load.',
        tools: ['LLM dispatch', 'DEX routing', 'Solana', 'EVM'],
      },
      {
        num: '04 / Security & Correctness',
        title: 'Designed for the unhappy path.',
        desc: 'I treat every input as hostile and every dependency as fallible: threat modelling, encrypted custody, risk screening and adversarial, fuzz and edge-case testing across the stack — because on-chain, a quiet bug is a direct loss.',
        tools: ['Risk screening', 'Fuzzing', 'Threat modeling', 'KMS'],
      },
    ],

    // About teaser section (§ 04 on home page)
    aboutTeaser: {
      sectionLabel: '§ 04 — Profile',
      displayHeading:
        'A blockchain engineer who takes systems from protocol to production.',
      paragraphs: [
        "I'm Abdullah — a senior blockchain engineer with three-plus years designing smart contracts, custody and on-chain infrastructure that move real value. I've shipped across EVM chains and Solana, from upgradeable token systems to AI-driven trading.",
        'I care most about the parts nobody notices until they break — state correctness, key custody, failure handling and cost. Get the invisible layer right and the product simply works.',
      ],
      stats: [
        { num: '5', label: 'Chains shipped' },
        { num: '7', label: 'DEXs integrated' },
        { num: '120+', label: 'Contract tests' },
        { num: '~80%', label: 'RPC cost cut' },
      ],
      ctaText: 'Read the long version →',
    },

    // CTA / contact strip (§ 05 on home page)
    cta: {
      sectionLabel: '§ 05 — Get in touch',
      line1: 'Building on-chain?',
      line2: "Let's build.",
    },
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  about: {
    // Hero section at top of /about
    hero: {
      label: '§ About — N°001',
      firstName: 'Abdullah', // displayed in italic accent colour after "Hi, I'm"
      paragraphs: [
        "I'm a blockchain engineer based in Lahore, Pakistan, with 3+ years taking on-chain systems from protocol design all the way to production — smart contracts, custody and the infrastructure that ties them together.",
        "I work where mistakes are expensive — money movement, tokenized assets and custody. That's shaped how I build: failure-first, heavily tested, and sceptical of every trust assumption.",
      ],
    },

    // Portrait placeholder captions
    portrait: {
      caption1: 'Abdullah Attique — Lahore, PK',
      caption2: 'Senior Blockchain Engineer',
    },

    // Long bio (§ 01)
    bio: {
      sectionLabel: '§ 01 — The long version',
      displayHeading: 'How I got from first contract to flagship protocol.',
      // First paragraph gets the large drop-cap treatment
      paragraphs: [
        'I started in blockchain at WeiBlocks in 2022, building Hestiya — a platform for tokenizing carbon credits under Article 6 of the Paris Agreement. Modelling an entire regulatory asset lifecycle on-chain, on an upgradeable contract suite, taught me early that correctness and clear state transitions matter more than clever code.',
        "At Ahmad Software I went deeper on two fronts: enterprise permissioned ledgers with Hyperledger Fabric on DocTracer, and the EVM's hard limits — rescuing a contract that had outgrown the EIP-170 size ceiling by cutting its bytecode 60% without losing a single test.",
        'Back at WeiBlocks as a senior engineer, I put it all together on Escrowly: a multi-chain escrow platform with a 12-service backend, reorg-safe listeners across five chains, and AWS-KMS-backed custody. Alongside it I built TrAider, an AI agent that turns plain-English instructions into safe on-chain trades.',
        "The thread through all of it: I'm happiest in the unglamorous layer — state correctness, idempotent processing, key management and cost — where getting the details right is the difference between a product that works and one that loses money.",
      ],
    },

    // Work history / trajectory (§ 02)
    experience: [
      {
        year: "'24 — Now",
        role: 'Senior Blockchain Engineer',
        company: 'WeiBlocks',
        desc: 'Architected Escrowly (multi-chain escrow, 12-service NestJS backend, KMS custody) and TrAider (AI on-chain trading agent). Owned smart contracts, on-chain infrastructure and custody design.',
        loc: 'Lahore',
      },
      {
        year: "'23 — '24",
        role: 'Blockchain Engineer',
        company: 'Ahmad Software',
        desc: 'Built DocTracer on Hyperledger Fabric for document integrity, and led a contract-optimization effort that cut bytecode 60% to clear the EIP-170 limit with full test parity.',
        loc: 'Lahore',
      },
      {
        year: "'22 — '23",
        role: 'Blockchain Engineer',
        company: 'WeiBlocks',
        desc: 'Built Hestiya, an upgradeable contract suite for tokenizing Paris-Agreement carbon credits — full on-chain asset lifecycle with 120 tests at a 100% pass rate.',
        loc: 'Lahore',
      },
      {
        year: "'20 — '24",
        role: 'BSc Computer Science',
        company: 'COMSATS University Lahore',
        desc: 'Bachelor of Science in Computer Science. Foundations in distributed systems, cryptography and software engineering that I now apply on-chain.',
        loc: 'Lahore',
      },
    ],

    // Tech skills (§ 03)
    skills: [
      {
        category: 'Languages & Contracts',
        items: [
          'Solidity',
          'TypeScript',
          'JavaScript',
          'UUPS Upgradeable',
          'EIP Standards',
          'Chaincode (Go)',
        ],
      },
      {
        category: 'Backend & Infra',
        items: [
          'NestJS / Node',
          'Kafka',
          'AWS KMS',
          'Hyperledger Fabric',
          'Docker',
          'Multi-RPC failover',
        ],
      },
      {
        category: 'Chains & Tooling',
        items: [
          'Ethereum / EVM',
          'BSC · Polygon · Tron',
          'Solana',
          'Foundry · Hardhat',
          'Ethers.js / web3',
          'IPFS',
        ],
      },
    ],

    // "What I'm into right now" cards (§ 04)
    // italic: true → value is wrapped in <em>; after → text appended after the em
    now: [
      {
        label: 'Building',
        value: 'Resilient  infrastructure.',
        after: ' and the tooling that keeps it honest',
        italic: true,
      },
      {
        label: 'Exploring',
        value: 'Quantum ',
        after: ' Computing and  Post-Quantum Cryptography.',
        italic: true,
      },
      {
        label: 'Reading',
        value: 'Poetry',
        after: ' — the detox',
        italic: true,
      },
      {
        label: 'Avoiding',
        value: 'The Hype',
        after: ', of everything.',
        italic: true,
      },
    ],

    // CV download section (§ 05)
    cv: {
      sectionLabel: '§ 05 — Documentation',
      heading: 'Want the résumé?',
      downloadLabel: 'Download CV (PDF) →',
      emailLabel: 'Email me instead',
    },
  },

  // ── PROJECTS (case study pages, keyed by slug) ─────────────────────────────
  // projectOrder defines sequence and powers the "Next case" link (wraps around).
  projectOrder: [
    'escrowly',
    'traider',
    'hestiya',
    'doctracer',
    'contract-optimization',
  ],

  projects: {
    // ══ 01 ══ ESCROWLY ════════════════════════════════════════════════════════
    escrowly: {
      breadcrumb: 'Project N°01',
      titleLine1: 'Escrowly',
      titleLine2: 'on-chain.', // displayed in italic accent colour
      meta: {
        client: 'WeiBlocks',
        role: 'Senior Blockchain Engineer',
        year: '2024',
        stack: 'Solidity, NestJS, Kafka, AWS KMS',
      },
      links: [
        { label: 'Live ↗', href: '#' }, // TODO: Escrowly live URL
      ],

      // Hero shot (top of page) + gallery (Media section)
      hero: {
        type: 'image',
        src: '/assets/projects/escrowly.png',
        alt: 'Escrowly platform interface',
      },
      gallery: [
        {
          type: 'image',
          src: '/assets/projects/escrowly2.png',
          alt: 'Escrowly — deal flow',
          wide: true,
        },
        {
          type: 'image',
          src: '/assets/projects/escrowly3.png',
          alt: 'Escrowly — escrow detail',
        },
        {
          type: 'image',
          src: '/assets/projects/escrowly4.png',
          alt: 'Escrowly — dashboard',
        },
      ],

      overview: {
        sectionLabel: '§ 01 — Overview',
        displayHeading:
          'A multi-chain escrow platform that lets strangers trade crypto without trusting each other.',
        paragraphs: [
          'Peer-to-peer crypto deals have a trust problem: whoever moves first can get burned. Escrowly removes that risk by holding funds in programmatic escrow across five chains and only releasing them when both sides have met the terms.',
          'I led the engineering: a 12-service NestJS backend, a Kafka event mesh, reorg-safe on-chain listeners and AWS-KMS-backed custody — the machinery that lets the product treat on-chain money as safely as a bank treats a ledger.',
          'The result is a platform where a deposit is detected exactly once, survives chain reorganisations, and is custodied with hardware-grade key management from the moment it lands.',
        ],
      },

      pullQuote: {
        quote:
          '"The hard part of escrow isn\'t the happy path — it\'s being certain a deposit happened, exactly once, even when the chain rewrites itself underneath you."',
        attribution: '— Design principle behind Escrowly',
      },

      problem: {
        sectionNum: '§ 02 — Problem',
        heading: 'What was broken.',
        paragraphs: [
          'Cross-chain P2P trading forces one party to move funds first and hope. Existing escrow tools were single-chain, custodially opaque, or both. To be trustworthy, Escrowly had to solve several hard problems at once:',
        ],
        bullets: [
          'Detect deposits across five heterogeneous chains — exactly once, never double-counted.',
          'Stay correct through chain reorganisations, where a "confirmed" block can vanish.',
          'Custody user funds without a single hot key that could drain everything if leaked.',
        ],
        outro:
          'Each of these is a place where a quiet bug becomes a direct loss of user funds.',
      },

      approach: {
        sectionNum: '§ 03 — Approach',
        heading: 'What I did.',
        intro:
          'I treated Escrowly as an infrastructure problem first and a product second — the contracts are small; the reliability around them is where the work lives.',
        sections: [
          {
            heading: 'Service mesh',
            body: 'A 12-service NestJS backend split along clear domain boundaries — deposits, withdrawals, custody, disputes, notifications — communicating over a 6-topic Kafka mesh with a transactional outbox so events are never lost or duplicated.',
          },
          {
            heading: 'Reorg-safe listeners',
            body: 'Per-chain listeners with tuned confirmation depths and RPC failover. A deposit is only finalised after the chain-specific confirmation threshold, and the indexer reconciles against reorgs so a rolled-back block never releases funds.',
          },
          {
            heading: 'KMS-backed custody',
            body: 'A hot / funding / cold wallet hierarchy with signing brokered through AWS KMS. No raw private key ever touches application memory, which shrinks the blast radius of any single compromise to near zero.',
          },
          {
            heading: 'Cost & resilience',
            body: 'Aggressive RPC request batching, caching and provider failover cut RPC spend by roughly 80% while improving uptime — the difference between a demo and something you can run as a business.',
          },
        ],
      },

      stats: {
        heading: 'The numbers behind it.',
        items: [
          { num: '5', label: 'Chains supported', accent: true },
          { num: '~80%', label: 'RPC cost reduction', accent: false },
          { num: '12', label: 'Backend services', accent: true },
          { num: '1×', label: 'Exactly-once detection', accent: false },
        ],
      },

      outcome: {
        sectionNum: '§ 04 — Outcome',
        heading: 'What happened.',
        paragraphs: [
          'Escrowly shipped as a multi-chain platform with deposit detection that is correct under reorgs and custody hardened by KMS — with no loss of user funds.',
          'The ~80% cut in RPC costs turned a chatty, expensive architecture into one that scales economically across five chains at once.',
          'More than any single metric, the project proved a thesis I keep returning to: in on-chain money movement, the boring infrastructure layer is the product. Get reorg handling, idempotency and custody right and everything above it gets to be simple.',
        ],
      },
    },

    // ══ 02 ══ TRAIDER ═════════════════════════════════════════════════════════
    traider: {
      breadcrumb: 'Project N°02',
      titleLine1: 'TrAider,',
      titleLine2: 'trade as you speak.',
      meta: {
        client: 'WeiBlocks',
        role: 'Senior Blockchain Engineer',
        year: '2025',
        stack: 'Node.js, Next.js, LLMs, Solana, EVM, DEX aggregators',
      },
      links: [
        { label: 'Live ↗', href: '#' }, // TODO: TrAider URL if available
      ],

      hero: {
        type: 'video',
        src: '/assets/projects/traider.mp4',
        alt: 'TrAider agent demo',
      },
      gallery: [
        {
          type: 'video',
          src: '/assets/projects/traider2.mp4',
          alt: 'TrAider — conversational trade',
        },
        {
          type: 'video',
          src: '/assets/projects/traider3.mp4',
          alt: 'TrAider — routing & execution',
        },
      ],

      overview: {
        sectionLabel: '§ 01 — Overview',
        displayHeading:
          'An AI agent that turns "swap half my SOL into the best stablecoin route" into a real, safe trade.',
        paragraphs: [
          'TrAider lets people trade on-chain by talking to an agent instead of wrestling with DEX interfaces. You describe intent in natural language; it resolves that into concrete transactions across Solana and EVM, finds the best route, and screens for danger before it ever signs.',
          'I built the pipeline that sits between language and execution — a dual-LLM dispatch system, multi-DEX routing across seven integrations, and a pre-trade security screen that refuses to touch obvious traps.',
        ],
      },

      problem: {
        sectionNum: '§ 02 — Problem',
        heading: 'What was broken.',
        paragraphs: [
          'On-chain trading is powerful and hostile in equal measure. Natural-language UX makes it approachable — but a naïve "LLM that sends transactions" is a fast way to lose money.',
        ],
        bullets: [
          'Language is ambiguous; transactions are final. Misreading intent costs real funds.',
          'Best execution spans many DEXs and aggregators across different chains.',
          'The token a user names might be a honeypot, a rug, or a blacklisted scam.',
        ],
        outro:
          'The agent had to be conversational and adversarially cautious at the same time.',
      },

      approach: {
        sectionNum: '§ 03 — Approach',
        heading: 'What I did.',
        intro:
          'I split the system so that the language model proposes and deterministic code disposes — the LLM never holds the keys to an unchecked transaction.',
        sections: [
          {
            heading: 'Dual-LLM dispatch',
            body: 'A two-stage pipeline: one model classifies and structures intent, a second composes the reply and confirmation. Routing between them keeps each call cheap, fast and focused on one job.',
          },
          {
            heading: 'Multi-DEX routing',
            body: 'Seven DEX and aggregator integrations across Solana and EVM, compared for best execution before any swap. The agent picks the route, the user sees the trade in plain terms.',
          },
          {
            heading: 'Pre-trade security screen',
            body: 'Every target token passes a risk gate — honeypot, rug-pull and blacklist checks — before a transaction is ever built. If a token fails, the agent explains why and refuses, rather than silently executing.',
          },
        ],
      },

      stats: {
        heading: 'The numbers behind it.',
        items: [
          { num: '$ 3M', label: 'market cap at launch', accent: true },
          {
            num: '4',
            label: 'Chains (Ethereum, BSC, Polygon, Solana)',
            accent: false,
          },
          { num: '2-stage', label: 'LLM pipeline', accent: true },
          { num: '0', label: 'Unchecked trades', accent: false },
        ],
      },

      outcome: {
        sectionNum: '§ 04 — Outcome',
        heading: 'What happened.',
        paragraphs: [
          'Reaching $3M marketcap at launch, TrAider turned multi-step, multi-DEX trading into a conversation, with a security screen standing between intent and execution at all times.',
          'The dual-LLM split kept the agent responsive and affordable while letting deterministic code own anything that touches money — the pattern I now reach for whenever an LLM sits in front of irreversible actions.',
        ],
      },
    },

    // ══ 03 ══ HESTIYA ═════════════════════════════════════════════════════════
    hestiya: {
      breadcrumb: 'Project N°03',
      titleLine1: 'Hestiya',
      titleLine2: 'carbon, tokenized.',
      meta: {
        client: 'WeiBlocks',
        role: 'Blockchain Engineer',
        year: '2023',
        stack: 'Solidity, UUPS, Hardhat',
      },
      links: [
        { label: 'Live ↗', href: '#' }, // TODO: Hestiya live URL
      ],

      hero: {
        type: 'image',
        src: '/assets/projects/hestiya.png',
        alt: 'Hestiya carbon platform',
      },
      gallery: [
        {
          type: 'image',
          src: '/assets/projects/hestya2.png',
          alt: 'Hestiya — credit lifecycle',
          wide: true,
        },
      ],

      overview: {
        sectionLabel: '§ 01 — Overview',
        displayHeading:
          'A contract suite that puts the full lifecycle of a Paris-Agreement carbon credit on-chain.',
        paragraphs: [
          'Carbon credits are a multi-billion-dollar market run largely on registries and spreadsheets. Hestiya brings the lifecycle of an Article 6 credit — issuance, transfer, retirement — onto an upgradeable smart-contract suite, with verifiable on-chain state at every step.',
          'I engineered the contracts: a UUPS-upgradeable architecture modelling each stage of a regulated asset, backed by a test suite chasing 100% behavioural coverage so that an asset representing real climate value behaves exactly as specified.',
        ],
      },

      problem: {
        sectionNum: '§ 02 — Problem',
        heading: 'What was broken.',
        paragraphs: [
          'Carbon markets suffer from opacity and double-counting: the same credit can be claimed twice when records live in disconnected registries. Tokenizing them is only credible if the on-chain rules are airtight.',
        ],
        bullets: [
          'A regulated asset needs a precise, enforceable lifecycle — not ad-hoc transfers.',
          'Retirement must be final and publicly verifiable to prevent double-claiming.',
          'Regulations evolve, so the contracts had to be upgradeable without losing state.',
        ],
        outro:
          'Correctness here is not cosmetic — it underpins the environmental claim itself.',
      },

      approach: {
        sectionNum: '§ 03 — Approach',
        heading: 'What I did.',
        intro:
          'I modelled the credit as a state machine and made every transition explicit, tested and upgrade-safe.',
        sections: [
          {
            heading: 'Lifecycle modelling',
            body: 'Issuance, transfer and retirement modelled as enforced state transitions aligned with Article 6 of the Paris Agreement, so the contract — not a back-office process — is the source of truth.',
          },
          {
            heading: 'UUPS upgradeability',
            body: 'A UUPS-upgradeable architecture lets the protocol adapt to changing regulation while preserving existing balances and history — upgrade paths designed in from day one, not bolted on.',
          },
          {
            heading: 'Exhaustive testing',
            body: 'A suite of 120 tests at a 100% pass rate covering the happy path and the adversarial edges — because an asset standing in for real carbon offsets has to be right.',
          },
        ],
      },

      stats: {
        heading: 'The numbers behind it.',
        items: [
          { num: '120', label: 'Contract tests', accent: true },
          { num: '100%', label: 'Pass rate', accent: false },
          { num: '$50B+', label: 'Market context', accent: true },
          { num: 'UUPS', label: 'Upgrade pattern', accent: false },
        ],
      },

      outcome: {
        sectionNum: '§ 04 — Outcome',
        heading: 'What happened.',
        paragraphs: [
          'Hestiya delivered a fully on-chain, upgradeable representation of the carbon-credit lifecycle, verified by a 120-test suite passing in full.',
          'It was my first deep proof that clear state modelling and upgrade-safety beat clever code — a lesson that shaped everything I built afterwards, from DocTracer to Escrowly.',
        ],
      },
    },

    // ══ 04 ══ DOCTRACER ═══════════════════════════════════════════════════════
    doctracer: {
      breadcrumb: 'Project N°04',
      titleLine1: 'DocTracer',
      titleLine2: 'provably authentic.',
      meta: {
        client: 'Ahmad Software',
        role: 'Blockchain Engineer',
        year: '2023',
        stack: 'Hyperledger Fabric, Go, Node',
      },
      links: [
        { label: 'Code ↗', href: '#' }, // TODO: repo if public
      ],

      hero: {
        type: 'image',
        src: '/assets/projects/doctracer.png',
        alt: 'DocTracer verification view',
      },
      gallery: [
        {
          type: 'image',
          src: '/assets/projects/doctracer2.png',
          alt: 'DocTracer — integrity check',
        },
        {
          type: 'image',
          src: '/assets/projects/doctracer3.png',
          alt: 'DocTracer — evidence bundle',
        },
        {
          type: 'image',
          src: '/assets/projects/doctracer4.png',
          alt: 'DocTracer — verification trail',
          wide: true,
        },
        {
          type: 'image',
          src: '/assets/projects/doctracer5.png',
          alt: 'DocTracer — record detail',
        },
      ],

      overview: {
        sectionLabel: '§ 01 — Overview',
        displayHeading:
          "A permissioned-ledger system that makes a document's authenticity provable — and defensible in court.",
        paragraphs: [
          'DocTracer answers a deceptively hard question: is this document genuine and unaltered? Built on Hyperledger Fabric, it anchors document integrity to a permissioned ledger and produces evidence bundles strong enough to stand up in a legal setting.',
          "I built triple-source verification, PII-aware private data handling, and court-defensible PDF/ZIP evidence exports — designed so that proving a document's history never means leaking its contents.",
        ],
      },

      problem: {
        sectionNum: '§ 02 — Problem',
        heading: 'What was broken.',
        paragraphs: [
          'Document fraud is easy and expensive, and "trust me, it\'s the original" does not hold up under scrutiny. Enterprises needed verifiable integrity without publishing sensitive contents to a public chain.',
        ],
        bullets: [
          'Authenticity must be provable by multiple independent sources, not one.',
          'Documents carry PII that cannot be exposed on a shared ledger.',
          'Verification output has to be legally defensible, not just technically true.',
        ],
        outro:
          'A permissioned ledger was the right substrate — but only with privacy designed in.',
      },

      approach: {
        sectionNum: '§ 03 — Approach',
        heading: 'What I did.',
        intro:
          "I leaned on Hyperledger Fabric's enterprise primitives — channels, private data and endorsement — to make integrity provable while keeping contents confidential.",
        sections: [
          {
            heading: 'Triple-source verification',
            body: 'Document integrity cross-checked against three independent sources before a result is trusted, so no single point can be forged or silently corrupted.',
          },
          {
            heading: 'PII-aware private data',
            body: 'Sensitive fields kept in Fabric private data collections — hashes go on the shared ledger, raw PII stays restricted to authorised parties. Verifiable without being exposed.',
          },
          {
            heading: 'Court-defensible bundles',
            body: 'One-click PDF and ZIP evidence exports that package the verification trail into a coherent, legally usable artifact — turning ledger state into something a non-engineer can rely on.',
          },
        ],
      },

      stats: {
        heading: 'The numbers behind it.',
        items: [
          { num: '3×', label: 'Source verification', accent: true },
          { num: 'PII', label: 'Private data aware', accent: false },
          { num: 'PDF/ZIP', label: 'Evidence bundles', accent: true },
          { num: 'Fabric', label: 'Permissioned ledger', accent: false },
        ],
      },

      outcome: {
        sectionNum: '§ 04 — Outcome',
        heading: 'What happened.',
        paragraphs: [
          'DocTracer made document authenticity provable and exportable as court-defensible evidence — without ever putting private contents on a shared ledger.',
          'Working in permissioned-ledger constraints sharpened how I think about privacy and trust boundaries, which fed directly into the custody and confidentiality decisions on later projects.',
        ],
      },
    },

    // ══ 05 ══ CONTRACT OPTIMIZATION ═══════════════════════════════════════════
    'contract-optimization': {
      breadcrumb: 'Project N°05',
      titleLine1: 'Contract',
      titleLine2: 'optimization.',
      meta: {
        client: 'Ahmad Software',
        role: 'Blockchain Engineer',
        year: '2023',
        stack: 'Solidity, EVM, Hardhat',
      },
      links: [
        { label: 'Code ↗', href: '#' }, // TODO: repo / write-up link
      ],

      hero: {
        type: 'image',
        src: '/assets/projects/optimization1.png',
        alt: 'Contract size optimization results',
      },
      // single asset — no gallery / Media section for this one

      overview: {
        sectionLabel: '§ 01 — Overview',
        displayHeading:
          'Rescuing a contract that had grown too big to deploy — without changing what it does.',
        paragraphs: [
          'The EVM caps deployed contract size at 24 KiB (EIP-170). A feature-rich contract had blown past it and could no longer ship. I was brought in to make it deployable again — without dropping functionality or breaking a single test.',
          'I developed a seven-technique optimization framework and applied it methodically, cutting runtime bytecode by 60% (24.2 KiB → 9.7 KiB) and initcode by 58%, with 100% test parity throughout.',
        ],
      },

      problem: {
        sectionNum: '§ 02 — Problem',
        heading: 'What was broken.',
        paragraphs: [
          'A contract over the EIP-170 limit simply cannot be deployed — there is no negotiating with the protocol. The usual escape hatches all carry a cost.',
        ],
        bullets: [
          'Splitting the contract adds cross-call complexity and gas overhead.',
          "Removing features wasn't acceptable — the functionality had to stay intact.",
          'Any change risked altering behaviour, so the test suite had to keep passing exactly.',
        ],
        outro:
          'The goal: same behaviour, far smaller footprint, zero regressions.',
      },

      approach: {
        sectionNum: '§ 03 — Approach',
        heading: 'What I did.',
        intro:
          'I built a repeatable framework rather than ad-hoc trimming, so every byte saved was measured and every change was guarded by tests.',
        sections: [
          {
            heading: 'Seven-technique framework',
            body: 'A systematic toolkit — custom errors over revert strings, library extraction, storage packing, dead-code elimination, internal-function consolidation and more — applied in order and measured at each step.',
          },
          {
            heading: "Measure, don't guess",
            body: 'Bytecode and initcode size tracked after every change, so optimisation decisions were driven by real numbers rather than folklore about what "should" be cheaper.',
          },
          {
            heading: '100% test parity',
            body: 'The full existing test suite ran green after every transformation — proof that a 60% smaller contract behaved identically to the original.',
          },
        ],
      },

      stats: {
        heading: 'The numbers behind it.',
        items: [
          { num: '60%', label: 'Bytecode reduction', accent: true },
          { num: '58%', label: 'Initcode reduction', accent: false },
          { num: '9.7KiB', label: 'From 24.2 KiB', accent: true },
          { num: '100%', label: 'Test parity', accent: false },
        ],
      },

      outcome: {
        sectionNum: '§ 04 — Outcome',
        heading: 'What happened.',
        paragraphs: [
          'The contract dropped from 24.2 KiB to 9.7 KiB — well under the EIP-170 ceiling — and shipped, with its full feature set and every test intact.',
          'The seven-technique framework outlived the project: it became a reusable playbook for keeping later contracts lean and gas-efficient from the start.',
        ],
      },
    },
  },

  // ── FOOTER ────────────────────────────────────────────────────────────────
  // ── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    label: '§ Contact — N°001',
    line1: "Let's",
    line2: 'build.', // displayed in italic accent colour
    body: "Working on a protocol, on-chain infrastructure, or an idea that needs an engineer who sweats the details? The fastest way to reach me is email — or find me in any of the places below.",
  },

  // ── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    bigLinkText: 'Say hello', // large CTA at top of footer

    // Sitemap column — type: 'link' uses TransitionLink, 'download' uses <a download>
    sitemap: [
      { label: 'Index', to: '/', type: 'link' },
      { label: 'About', to: '/about', type: 'link' },
      { label: 'Selected work', to: '/#work', type: 'link' },
      { label: 'Contact', to: '/contact', type: 'link' },
      { label: 'Download CV (PDF)', href: '/assets/Resume-abdullah.pdf', type: 'download' },
    ],

    // Social / elsewhere column — TODO: replace '#' with real URLs
    social: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Twitter / X', href: '#' },
    ],

    // Colophon blurb (bottom-right column)
    colophon:
      'Set in Instrument Serif, Geist & JetBrains Mono. Built in React with Vite.',
  },
};

export default content;
