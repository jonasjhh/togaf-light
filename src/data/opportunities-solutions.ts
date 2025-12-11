import { ADMPhaseData } from '../models/ADMPhase';

export const opportunitiesSolutionsPhase: ADMPhaseData = {
  id: 'opportunities-solutions',
  name: 'Phase E: Opportunities and Solutions',
  shortName: 'E: Opportunities',
  description: 'Conduct initial implementation planning and identify delivery vehicles for the architecture.',
  purpose: 'To evaluate implementation options, identify major work packages, and create an initial Architecture Roadmap.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Coordinates solution planning'
    },
    {
      name: 'Project Manager',
      description: 'Plans implementation projects'
    },
    {
      name: 'Portfolio Manager',
      description: 'Aligns with portfolio strategy'
    }
  ],
  principles: [
    {
      title: 'Incremental Delivery',
      description: 'Deliver architecture changes incrementally to minimize risk and demonstrate value early.',
      tags: ['delivery', 'agile']
    },
    {
      title: 'Reuse Before Buy Before Build',
      description: 'Prioritize reusing existing solutions, then buying COTS, then building custom.',
      tags: ['efficiency', 'cost']
    },
    {
      title: 'Transition Architecture',
      description: 'Define clear transition states between baseline and target architectures.',
      tags: ['planning', 'transition']
    }
  ],
  guidelines: [
    'Determine implementation constraints and target state',
    'Review and consolidate gap analysis results',
    'Identify and group major work packages',
    'Identify transition architectures',
    'Create Architecture Roadmap and Implementation Factor Assessment'
  ],
  links: [
    {
      title: 'TOGAF Phase E',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap10.html',
      description: 'Official TOGAF documentation for Opportunities and Solutions'
    }
  ],
  color: '#43e97b'
};
