import { ADMPhaseData } from '../models/ADMPhase';

export const technologyArchitecturePhase: ADMPhaseData = {
  id: 'technology-architecture',
  name: 'Phase D: Technology Architecture',
  shortName: 'D: Technology',
  description: 'Develop the Target Technology Architecture that enables the logical and physical application and data components.',
  purpose: 'To develop the Target Technology Architecture describing the infrastructure required to support the deployment of business, data, and application services.',
  roles: [
    {
      name: 'Technology Architect',
      description: 'Develops the Technology Architecture'
    },
    {
      name: 'Infrastructure Architect',
      description: 'Designs infrastructure components'
    },
    {
      name: 'Security Architect',
      description: 'Ensures security requirements are met'
    }
  ],
  principles: [
    {
      title: 'Cloud-First',
      description: 'Prefer cloud-based solutions unless there is a compelling reason otherwise.',
      tags: ['cloud', 'infrastructure']
    },
    {
      title: 'Scalability',
      description: 'Systems must be designed to scale with business growth.',
      tags: ['performance', 'scalability']
    },
    {
      title: 'Resilience',
      description: 'Infrastructure must be resilient to failures and disasters.',
      tags: ['reliability', 'resilience']
    },
    {
      title: 'Zero Trust Security',
      description: 'Implement zero trust principles for all technology components.',
      tags: ['security', 'network']
    }
  ],
  guidelines: [
    'Develop Baseline Technology Architecture',
    'Develop Target Technology Architecture',
    'Perform gap analysis',
    'Identify major technology building blocks',
    'Consider non-functional requirements (performance, security, etc.)'
  ],
  links: [
    {
      title: 'TOGAF Phase D',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap09.html',
      description: 'Official TOGAF documentation for Technology Architecture'
    }
  ],
  color: '#00f2fe'
};
