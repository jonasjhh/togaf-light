import { ADMPhaseData } from '../models/ADMPhase';

export const architectureChangeManagementPhase: ADMPhaseData = {
  id: 'architecture-change-management',
  name: 'Phase H: Architecture Change Management',
  shortName: 'H: Change Mgmt',
  description: 'Ensure that architecture changes are managed in a cohesive manner and the architecture capability is maintained.',
  purpose: 'To ensure that the architecture lifecycle is maintained and that changes to the architecture are managed in a controlled manner.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Manages architecture changes'
    },
    {
      name: 'Architecture Board',
      description: 'Approves significant changes'
    },
    {
      name: 'Change Advisory Board',
      description: 'Reviews and coordinates changes'
    }
  ],
  principles: [
    {
      title: 'Continuous Improvement',
      description: 'The architecture should continuously evolve to meet changing business needs.',
      tags: ['improvement', 'evolution']
    },
    {
      title: 'Impact Assessment',
      description: 'Assess the impact of all proposed changes before implementation.',
      tags: ['change', 'assessment']
    },
    {
      title: 'Architecture Repository',
      description: 'Maintain a current and accurate architecture repository.',
      tags: ['repository', 'documentation']
    },
    {
      title: 'Lessons Learned',
      description: 'Capture and apply lessons learned from architecture implementations.',
      tags: ['learning', 'improvement']
    }
  ],
  guidelines: [
    'Establish value realization process',
    'Deploy monitoring tools',
    'Manage architecture governance',
    'Manage risks and issues',
    'Provide analysis for architecture change management'
  ],
  links: [
    {
      title: 'TOGAF Phase H',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap13.html',
      description: 'Official TOGAF documentation for Architecture Change Management'
    }
  ],
  color: '#fa8bff'
};
