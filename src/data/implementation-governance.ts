import { ADMPhaseData } from '../models/ADMPhase';

export const implementationGovernancePhase: ADMPhaseData = {
  id: 'implementation-governance',
  name: 'Phase G: Implementation Governance',
  shortName: 'G: Governance',
  description: 'Provide architectural oversight of the implementation to ensure it conforms to the Target Architecture.',
  purpose: 'To ensure that implementation projects conform to the Target Architecture through architectural oversight.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Provides architecture oversight'
    },
    {
      name: 'Architecture Board',
      description: 'Reviews and approves changes'
    },
    {
      name: 'Compliance Officer',
      description: 'Ensures regulatory compliance'
    }
  ],
  principles: [
    {
      title: 'Architecture Compliance',
      description: 'All implementations must comply with the approved Target Architecture.',
      tags: ['governance', 'compliance']
    },
    {
      title: 'Controlled Change',
      description: 'Changes to the architecture must follow governance processes.',
      tags: ['governance', 'change']
    },
    {
      title: 'Continuous Review',
      description: 'Regularly review implementation progress against architecture principles.',
      tags: ['governance', 'review']
    },
    {
      title: 'Documentation Standards',
      description: 'Maintain consistent documentation standards across all implementations.',
      tags: ['documentation', 'standards']
    }
  ],
  guidelines: [
    'Confirm scope and priorities for deployment',
    'Identify deployment resources and skills',
    'Guide development of solutions',
    'Perform Enterprise Architecture compliance reviews',
    'Sign off on completed implementations'
  ],
  links: [
    {
      title: 'TOGAF Phase G',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap12.html',
      description: 'Official TOGAF documentation for Implementation Governance'
    }
  ],
  color: '#fee140'
};
