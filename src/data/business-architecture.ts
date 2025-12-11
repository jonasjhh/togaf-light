import { ADMPhaseData } from '../models/ADMPhase';

export const businessArchitecturePhase: ADMPhaseData = {
  id: 'business-architecture',
  name: 'Phase B: Business Architecture',
  shortName: 'B: Business',
  description: 'Develop the Target Business Architecture that addresses the Architecture Vision and stakeholder concerns.',
  purpose: 'To develop the Target Business Architecture describing how the enterprise operates to achieve its business goals.',
  roles: [
    {
      name: 'Business Architect',
      description: 'Develops the Business Architecture'
    },
    {
      name: 'Business Process Owners',
      description: 'Provide process knowledge and validate architecture'
    },
    {
      name: 'Domain Experts',
      description: 'Provide domain-specific knowledge'
    }
  ],
  principles: [
    {
      title: 'Business-driven',
      description: 'Architecture decisions must be driven by business requirements and outcomes.',
      tags: ['business', 'alignment']
    },
    {
      title: 'Process Optimization',
      description: 'Identify opportunities to optimize and streamline business processes.',
      tags: ['process', 'efficiency']
    },
    {
      title: 'Capability-based',
      description: 'Focus on business capabilities rather than organizational structure.',
      tags: ['business', 'capabilities']
    }
  ],
  guidelines: [
    'Develop Baseline Business Architecture Description',
    'Develop Target Business Architecture Description',
    'Perform gap analysis between baseline and target',
    'Define candidate Architecture Roadmap components',
    'Conduct formal stakeholder review'
  ],
  links: [
    {
      title: 'TOGAF Phase B',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap07.html',
      description: 'Official TOGAF documentation for Business Architecture'
    }
  ],
  color: '#f093fb'
};
