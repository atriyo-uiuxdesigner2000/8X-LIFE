export interface Operator {
  id: string;
  code: string;
  name: string;
  role: string;
  vertical: 'Research' | 'Social' | 'LinkedIn' | 'Sales' | 'Systems';
  city: string;
  coordinates: string;
  tier: string;
  status: 'DEPLOYED' | 'STANDBY' | 'MOBILIZING_48H' | 'ALLOCATED';
  clientCohort: string;
  metric: string;
  metricLabel: string;
  bio: string;
  image: string;
  verifiedTransactionValue: string;
  credentials: string[];
  recentDeployments: string[];
}

export interface VerticalData {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  pipelineInfluenced: string;
  profilesOrAccounts: string;
  clientCohort: string;
  registerTitle: string;
  registerAudit: string;
  registerStat1: string;
  registerStat1Label: string;
  registerStat2: string;
  registerStat2Label: string;
  penetration: string;
  turnaround: string;
  confidenceBenchmark: string;
  deliverables: string[];
  caseStudy: {
    client: string;
    challenge: string;
    action: string;
    result: string;
  };
}

export const OPERATORS: Operator[] = [
  {
    id: 'op-01',
    code: 'LON-01',
    name: 'Dr. Julian Vance',
    role: 'CHIEF OF RESEARCH',
    vertical: 'Research',
    city: 'London',
    coordinates: '51.5074° N',
    tier: 'TIER 0 VERIFIED',
    status: 'DEPLOYED',
    clientCohort: 'Tier-1 Sovereign Wealth & DeepTech',
    metric: '$420M',
    metricLabel: 'Competitive Diligence Orchestrated',
    bio: 'Former macro-econometric modeler and proprietary research director. Deconstructs asymmetric market shifts and technological vectors with sub-18hr turnaround.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$1.4B+',
    credentials: ['Ph.D. Quantitative Economics (Oxford)', 'Ex-Partner Global Macro Strategy', '12 Peer-Reviewed Papers'],
    recentDeployments: ['Project Hyperion (Autonomous AI Infrastructure)', 'Cross-Border Decacorn M&A', 'Lithium Supply Chain Sovereign Audit']
  },
  {
    id: 'op-02',
    code: 'NYC-04',
    name: 'Elena Rostova',
    role: 'LEAD STRATEGIST',
    vertical: 'LinkedIn',
    city: 'New York',
    coordinates: '40.7128° N',
    tier: 'TIER 0 VERIFIED',
    status: 'DEPLOYED',
    clientCohort: 'Fortune 500 CEOs & Decacorn Founders',
    metric: '480+',
    metricLabel: 'Institutional Executive Memos Produced',
    bio: 'Architect of institutional authority for 18 Fortune 100 executives. Directly orchestrates narrative market capture, securing $88M+ pipeline through bespoke positioning.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$320M',
    credentials: ['Former White House Speechwriter', 'B2B Narrative Pioneer', 'Advisor to 4 Decacorns'],
    recentDeployments: ['Enterprise Cloud Re-platforming Narrative', 'Series D $200M Capital Announcement', 'Fortune 50 CEO Crisis Defense']
  },
  {
    id: 'op-03',
    code: 'SFO-09',
    name: 'Marcus Chen',
    role: 'HEAD OF DISTRIBUTION',
    vertical: 'Social',
    city: 'San Francisco',
    coordinates: '37.7749° N',
    tier: 'TIER 0 VERIFIED',
    status: 'DEPLOYED',
    clientCohort: 'Category Defining AI & Frontier Tech',
    metric: '+4.2B',
    metricLabel: 'Organic Algorithmic Reach Orchestrated',
    bio: 'Pioneered dark-social algorithmic propagation and high-velocity zeitgeist capture. Eliminates paid ad drag in favor of pure non-linear virality.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$650M',
    credentials: ['Built 3 Media Properties to 10M+ Readers', 'Algorithmic Distribution Architect', 'Angel Investor in 12 Frontier Startups'],
    recentDeployments: ['LLM Breakthrough Viral Infiltration', 'Autonomous Agent Platform Launch', 'Decentralized Compute Global Campaign']
  },
  {
    id: 'op-04',
    code: 'TYO-02',
    name: 'Naomi Tanaka',
    role: 'PRINCIPAL DEAL ARCHITECT',
    vertical: 'Sales',
    city: 'Tokyo',
    coordinates: '35.6762° N',
    tier: 'TIER 0 VERIFIED',
    status: 'STANDBY',
    clientCohort: 'Enterprise Semiconductor & Robotics',
    metric: '$42M',
    metricLabel: 'ARR Closed in FY24',
    bio: 'Orchestrating high-velocity enterprise deal cycles across APAC and North America. Specializes in 8-figure ACVs with unyielding stakeholder consensus engineering.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$210M',
    credentials: ['President Club 6x Consecutive', 'Top 0.001% Enterprise Outbound', 'Stanford MS MS&E'],
    recentDeployments: ['Global Foundries $14M Multi-Year License', 'Automotive OEM Core OS Contract', 'Japan Conglomerate Cloud Migration']
  },
  {
    id: 'op-05',
    code: 'ZRH-07',
    name: 'David K. Lindqvist',
    role: 'SOVEREIGN SYSTEMS ARCHITECT',
    vertical: 'Systems',
    city: 'Zurich',
    coordinates: '47.3769° N',
    tier: 'TIER 0 VERIFIED',
    status: 'DEPLOYED',
    clientCohort: 'Tier-1 Defense & High-Throughput Fintech',
    metric: '99.999%',
    metricLabel: 'Fault Tolerance & Determinism Metric',
    bio: 'Designs uncompromised distributed systems architectures. Operates without middle management or technical debt compromises.',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$480M',
    credentials: ['Ex-CERN Distributed Systems Fellow', 'Rust Foundation Contributor', 'ETH Zurich Computer Science'],
    recentDeployments: ['Low-Latency HFT Mesh Overhaul', 'Zero-Knowledge Sovereign Identity Fabric', 'Autonomous Logistics Dispatch Engine']
  },
  {
    id: 'op-06',
    code: 'BOS-08',
    name: 'Dr. Clara Voss',
    role: 'MACRO SYNTHESIS LEAD',
    vertical: 'Research',
    city: 'Boston',
    coordinates: '42.3601° N',
    tier: 'TIER 0 VERIFIED',
    status: 'MOBILIZING_48H',
    clientCohort: 'Global Sovereign Funds & Family Offices',
    metric: '18 HR',
    metricLabel: 'Mean Turnaround on Deep Due Diligence',
    bio: 'Synthesizes cross-disciplinary geopolitical, technical, and supply chain inputs into decisive board-level actionable directives.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$890M',
    credentials: ['Harvard Kennedy School Fellow', 'MIT Tech Review Reviewer', 'Former National Security Advisor to Trade Council'],
    recentDeployments: ['Rare Earth Extraction Geopolitical Risk Memo', 'Next-Gen Nuclear Fusion Commercial Viability Audit']
  },
  {
    id: 'op-07',
    code: 'SGP-03',
    name: 'Kaelen Thorne',
    role: 'ENTERPRISE EXPANSION DIRECTOR',
    vertical: 'Sales',
    city: 'Singapore',
    coordinates: '1.3521° N',
    tier: 'TIER 0 VERIFIED',
    status: 'ALLOCATED',
    clientCohort: 'Cross-Border FinTech & Web3 Infrastructure',
    metric: '41.8%',
    metricLabel: 'Enterprise Win Rate (3x Industry Benchmark)',
    bio: 'Transforms complex procurement hurdles into single-meeting executive consensus. Zero reliance on SDR spam; pure sovereign deal positioning.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$175M',
    credentials: ['Closed $100M+ in 4 Years', 'Keynote Speaker at Enterprise Summit', 'INSEAD MBA'],
    recentDeployments: ['Sovereign Wealth Fund API Infrastructure Deal', 'APAC Banking Consortium Protocol Integration']
  },
  {
    id: 'op-08',
    code: 'BER-05',
    name: 'Sarah Sterling',
    role: 'VIRAL NARRATIVE SPECIALIST',
    vertical: 'Social',
    city: 'Berlin',
    coordinates: '52.5200° N',
    tier: 'TIER 0 VERIFIED',
    status: 'DEPLOYED',
    clientCohort: 'Next-Gen Consumer Tech & AI Collectives',
    metric: '14',
    metricLabel: 'Sovereign Brand Accounts Cultivated',
    bio: 'Designs subversive, high-affinity viral campaigns that dominate conversation without appearing corporate or calculated.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$140M',
    credentials: ['Architect behind 4 of 2024’s largest tech memes', 'Culture Critic & Author', 'Viral Growth Pioneer'],
    recentDeployments: ['Open-Source LLM Global Awareness Campaign', 'Hardware Token Sold-Out Drop (100k Units in 38 Mins)']
  },
  {
    id: 'op-09',
    code: 'PAR-11',
    name: 'Arthur Pendelton',
    role: 'EXECUTIVE BRAND CONSUL',
    vertical: 'LinkedIn',
    city: 'Paris',
    coordinates: '48.8566° N',
    tier: 'TIER 0 VERIFIED',
    status: 'STANDBY',
    clientCohort: 'European Decacorns & Luxury Conglomerates',
    metric: '99.4%',
    metricLabel: 'Empirical Tone & Argument Confidence',
    bio: 'Translates high-stakes strategic boardroom decisions into peerless thought leadership read by global policymakers and investors.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop&sat=-100',
    verifiedTransactionValue: '$290M',
    credentials: ['Former Chief Speechwriter for CAC 40 Chairmen', 'Sorbonne Philosophy Degree', 'B2B Publishing Veteran'],
    recentDeployments: ['Decarbonization Global Broadside', 'Billion-Dollar IPO Executive Narrative Arch']
  }
];

export const VERTICALS: VerticalData[] = [
  {
    id: 'social',
    number: '01',
    tag: 'NARRATIVE CAPITAL',
    title: '8x Social',
    subtitle: 'Sovereign media distribution networks and viral narrative architects.',
    description: 'Engineering cultural zeitgeists and non-linear attention capture for category creators. We eliminate paid ad fatigue and replace it with concentrated cultural resonance.',
    pipelineInfluenced: '$128M',
    profilesOrAccounts: '88 FOUNDER PROFILES MANAGED',
    clientCohort: 'FORTUNE 500 / DECACORNS',
    registerTitle: 'IMPACT REGISTER',
    registerAudit: 'Q4 AUDITED',
    registerStat1: '+4.2B',
    registerStat1Label: 'VERIFIED IMPRESSIONS',
    registerStat2: '14',
    registerStat2Label: 'SOVEREIGN ACCOUNTS',
    penetration: 'TOP 0.01% GLOBAL',
    turnaround: '48 HR ZERO TO ZEIYGEIST',
    confidenceBenchmark: '100% ORGANIC VIRALITY',
    deliverables: [
      'Algorithmic Resonance Playbook',
      'Dark-Social Channel Infiltration Matrix',
      'Cultural Memo Drafting & Meme Architecture',
      'Daily Audience Retention & Retargeting Protocols'
    ],
    caseStudy: {
      client: 'Frontier AI Foundation (Valuation: $12B)',
      challenge: 'Struggling with commoditized PR announcements drowned out by Big Tech releases.',
      action: '8x deployed a 3-person sovereign social cell to construct an unbranded technical thesis broadsheet and subversive counter-narrative.',
      result: '42M organic views in 72 hours, resulting in 4,800 enterprise waitlist signups and $34M pipeline attribution.'
    }
  },
  {
    id: 'linkedin',
    number: '02',
    tag: 'B2B AUTHORITY',
    title: '8x LinkedIn',
    subtitle: 'Executive ghostwriting and B2B narrative dominance.',
    description: 'Transforming individual executive authority into commercial velocity for Fortune 500 CEOs and decacorn founders. Moving markets through disciplined intellectual publishing.',
    pipelineInfluenced: '$210M',
    profilesOrAccounts: '32 ELITE CHAIRMEN MANAGED',
    clientCohort: 'ENTERPRISE TECH & SOVEREIGN FUNDS',
    registerTitle: 'DELIVERY SPEED',
    registerAudit: 'RIGOR VERIFIED',
    registerStat1: '480+',
    registerStat1Label: 'INSTITUTIONAL MEMOS',
    registerStat2: '18 HR',
    registerStat2Label: 'AVG. TURNAROUND',
    penetration: '99.4% EMPIRICAL CONFIDENCE',
    turnaround: 'SUB-24 HR DRAFTING',
    confidenceBenchmark: 'ZERO JARGON GUARANTEE',
    deliverables: [
      'Fortnightly CEO Strategic Broadsides',
      'Executive Commentary & Market Positioning',
      'High-Stakes Policy Response Frameworks',
      'Inbound Capital & Partner Sourcing Funnels'
    ],
    caseStudy: {
      client: 'Decacorn Logistics Infrastructure Group',
      challenge: 'CEO held critical market insights but lacked bandwidth for public positioning against entrenched incumbents.',
      action: 'Embedded 8x Tier-0 narrative consul conducting 20-minute voice memo synthesis weekly.',
      result: 'Grew CEO network from 14k to 280k verified institutional operators; directly originated 3 Fortune 50 supply contracts.'
    }
  },
  {
    id: 'research',
    number: '03',
    tag: 'INTELLIGENCE',
    title: '8x Research',
    subtitle: 'Deep-dive competitive intelligence and macroeconomic synthesis.',
    description: 'Technical due diligence executed by specialized domain experts at instantaneous turnaround. We replace generic consultant decks with uncompromising empirical reality.',
    pipelineInfluenced: '$42M ARR CLOSED FY24',
    profilesOrAccounts: '41.8% ENTERPRISE WIN RATE',
    clientCohort: '7-FIGURE MINIMUM ACV',
    registerTitle: 'DELIVERY SPEED',
    registerAudit: 'RIGOR VERIFIED',
    registerStat1: '480+',
    registerStat1Label: 'INSTITUTIONAL MEMOS',
    registerStat2: '18 HR',
    registerStat2Label: 'AVG. TURNAROUND',
    penetration: '99.4% EMPIRICAL CONFIDENCE',
    turnaround: '18 HR RAPID DEPLOYMENT',
    confidenceBenchmark: 'CITATION-CHECKED VERACITY',
    deliverables: [
      'Comprehensive Threat & Vector Mapping',
      'Reverse-Engineered Competitor Unit Economics',
      'Geopolitical Supply Vulnerability Teardowns',
      'Executive Board Dossiers & M&A Briefs'
    ],
    caseStudy: {
      client: 'Global Sovereign Wealth Allocation Desk',
      challenge: 'Required rapid technical audit on a $500M datacenter compute cluster deal within 72 hours before term sheet expiry.',
      action: 'Mobilized London and Zurich research cells to analyze hardware reliability, thermal latency, and power interconnect limits.',
      result: 'Identified critical thermal throttling risks; renegotiated valuation down by $65M.'
    }
  },
  {
    id: 'sales',
    number: '04',
    tag: 'REVENUE ORCHESTRATION',
    title: '8x Sales',
    subtitle: 'High-velocity enterprise outbound operators and deal architects.',
    description: 'Closing 7-figure ACVs. Eliminating friction in complex global commercial cycles. Autonomous dealmakers who partner directly with founders to rewrite industry dynamics.',
    pipelineInfluenced: '$380M',
    profilesOrAccounts: '100% UNBROKEN RECORD',
    clientCohort: 'ENTERPRISE INFRASTRUCTURE',
    registerTitle: 'CONVERSION DISCIPLINE',
    registerAudit: 'CAPITAL VELOCITY',
    registerStat1: '$42M',
    registerStat1Label: 'ARR CLOSED FY24',
    registerStat2: '41.8%',
    registerStat2Label: 'ENTERPRISE WIN RATE',
    penetration: '7-FIGURE MINIMUM ACV',
    turnaround: '48 HR PIPELINE MOBILIZATION',
    confidenceBenchmark: '100% TIED TO DELIVERED IMPACT',
    deliverables: [
      'Whale Account Sovereign Penetration',
      'Executive-to-Executive Alignment Architecture',
      'Contract Structuring & Risk Mitigation',
      'Multi-Million Dollar Procurement De-risking'
    ],
    caseStudy: {
      client: 'Autonomous Aerospace Systems Co.',
      challenge: 'Sales cycle stalled in tier-1 defense contractor committee for 11 months.',
      action: 'Assigned Tokyo and New York deal architects who re-engineered the ROI framework into a mandated defense procurement directive.',
      result: 'Signed $28M 4-year sole-source commitment within 34 calendar days.'
    }
  }
];

export const CODEX_CLAUSES = [
  {
    id: '01',
    tag: 'VALUE_FILTER',
    label: 'ABSOLUTE',
    title: 'MERITOCRACY IS NOT NEGOTIABLE.',
    content: 'We reject participation trophies. Outputs are tracked with mathematical rigor. If you are not in the 99th percentile of your craft, you will naturally be rotated out.',
    statLabel: 'RETENTION RATE',
    statValue: '14.2%',
    subtext: 'Survival in the 8x network is dictated purely by commercial and intellectual momentum. No tenure protection. No political capital.'
  },
  {
    id: '02',
    tag: 'GOVERNANCE',
    label: 'SOVEREIGN',
    title: 'RADICAL AUTONOMY, TOTAL ACCOUNTABILITY.',
    content: 'Zero micromanagement. Zero daily standups. You are given an audacious business objective and carte blanche on methodology. Results are binary: it shipped, or it didn\'t.',
    statLabel: 'DAILY STANDUPS',
    statValue: '0.00 MIN',
    subtext: 'We do not inspect timesheets or monitor activity logs. We inspect the delivered state of reality against the promised mandate.'
  },
  {
    id: '03',
    tag: 'INTENSITY',
    label: 'UNREASONABLE',
    title: 'OBSESSION AS A VIRTUE.',
    content: 'Work-life balance is a personal choice, but exceptional outcomes demand unreasonable commitment. We do not apologize for expecting intensity, speed, and uncompromising taste.',
    statLabel: 'EXECUTION SPEED',
    statValue: '8X ACCEL',
    subtext: 'The best talent in the world does not look for a comfortable 9-to-5; they look for an uninhibited arena where their capacity is not throttled.'
  },
  {
    id: '04',
    tag: 'ENGAGEMENT',
    label: 'DIRECT',
    title: 'DIRECT ORCHESTRATION OVER SUPPLY CHAINS.',
    content: 'You are never a "resource" or a commodity billable hour. You are an autonomous sovereign talent partnered directly with tier-1 founders to rewrite industry dynamics.',
    statLabel: 'TIER-1 PLACEMENT',
    statValue: '100% UNBROKEN',
    subtext: 'Agencies extract margin by sandwiching layers of useless account managers. 8x orchestrates direct peer-to-peer impact with zero middlemen.'
  }
];
