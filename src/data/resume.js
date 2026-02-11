export const contact = {
  email: 'paulliu14@gmail.com',
  phone: '832-571-6667',
  location: '4215 Crescent Street, Long Island City, NY, 11101',
  github: 'PaulLiuEngineering',
  githubUrl: 'https://github.com/PaulLiuEngineering',
}

export const education = {
  school: 'University of Illinois Urbana Champaign',
  location: 'Champaign, IL',
  degree: 'Bachelor of Science in Mechanical Engineering, Computer Science Minor',
  period: 'August 2017 – May 2021',
}

export const experience = [
  {
    company: 'Capital One',
    location: 'New York, NY',
    title: 'Site Reliability Engineer (SRE, Senior Software Engineer)',
    period: 'February 2025 – Present',
    team: 'SRE Automation Team - Bank Tech',
    projects: [
      {
        name: 'AWS Failover Automation',
        tech: ['Python', 'AWS'],
        bullets: [
          'Built an enterprise platform that automated AWS Failover Process for over 600 AWS Accounts.',
          'Eliminated 100% of manual intervention for scheduled failover and disaster recovery.',
          'Reduced failover/disaster recovery time from a few hours to 15 min maximum.',
          'Standardized onboarding of AWS accounts to the enterprise platform for all AWS accounts in the enterprise.',
        ],
      },
    ],
  },
  {
    company: 'Goldman Sachs',
    location: 'Salt Lake City, UT',
    title: 'Software Engineer (Associate)',
    period: 'July 2021 – February 2025',
    team: 'Platform Team - Wealth Management',
    projects: [
      {
        name: 'Client Communication Automation',
        tech: ['Java', 'Spring Boot', 'React'],
        bullets: [
          'Proposed and implemented a new onboarding process to display documents on goldman.com. Time to onboard a new workflow to display documents was reduced from 2–3 weeks to less than 1 hr.',
          'Designed and developed a UI for Operations teams for all regular letters sent to the client to onboard onto the platform, saving the engineering team 2–3 hours per week and reducing manual errors.',
          'Reduced business cost for client experience digital transformation by simplifying the onboarding process.',
        ],
      },
      {
        name: 'Platform Feature Enhancement',
        tech: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'VisualVM'],
        bullets: [
          'Designed and built batch request feature that accommodates 100,000 requests at once to meet business requirements for high-volume document sending.',
          'Optimized 2 highly available, fault-tolerant, client-facing APIs by 95% on average; improved document load time for clients.',
          'Improved error handling to reduce repeating, non-actionable alerts in production; reduced alerts by 75% without affecting end users, saving the engineering team 4–6 hours per week.',
        ],
      },
      {
        name: 'Swiss Infrastructure Development',
        tech: ['Java', 'Spring Boot', 'Kafka'],
        bullets: [
          'Designed and built Swiss-only infrastructure (firewall & application) essential for Swiss-related business requirements complying with Swiss regulation for consumer identity data.',
          'Deployed large-scale structures for Swiss-related requests handling up to 200,000 documents per day.',
        ],
      },
      {
        name: 'GitLab Build Process Optimization',
        tech: ['Java', 'Gradle', 'GitLab'],
        bullets: [
          'Improved build tool/process; decreased build time by 33% for all applications.',
          'Upgraded Java/Spring version and decreased boilerplate code required for all testing units.',
        ],
      },
      {
        name: 'E-signature automation',
        tech: ['Java', 'Spring Boot', 'React', 'Kafka', 'MongoDB'],
        bullets: [
          'Proposed and built an automated e-signature process for clients; digitized 95% of trading paperwork and reduced time to close deals by 80%.',
          'Automated legal review process for trade documents; decreased cost for third-party legal review by 90%.',
          'Onboarded new workflows to the communication platform so clients can electronically sign account opening documents, shortening client onboarding from days to hours.',
        ],
      },
      {
        name: 'Migration automation',
        tech: ['Python', 'React', 'GitLab', 'AWS'],
        bullets: [
          'Designed and automated manual migration process to eliminate human error and free up developer time by up to 5 hours per week; helped deploy new e-sign processes to production with minimal risk.',
        ],
      },
    ],
  },
]

export const skills = {
  technical: [
    'Java', 'Spring Boot', 'SQL', 'Python', 'MongoDB', 'React', 'GitLab', 'Github', 'AWS', 'Cloud',
    'Jira', 'Cursor', 'Kafka', 'HTML', 'JavaScript', 'CSS', 'C++', 'TensorFlow', 'Pygame',
    'REST services', 'REST API', 'Django', 'Flask', 'VisualVM', 'Git', 'Version Control',
    'Confluence', 'Microservices', 'Distributed Systems', 'Database', 'NoSQL', 'Object Oriented Programming',
    'Linux', 'Shell', 'Agile',
  ],
  languages: ['English', 'Mandarin', 'Japanese'],
  certificate: 'AWS Cloud Certified Solutions Architect',
}
