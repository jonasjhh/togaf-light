import { ADMPhaseData } from '../models/ADMPhase';

export const requirementsManagementPhase: ADMPhaseData = {
  id: 'requirements-management',
  name: 'Requirements Management',
  shortName: 'Requirements',
  description: 'A continuous process throughout all phases to identify, store, and manage requirements.',
  purpose: 'To provide a dynamic process for managing architecture requirements throughout all ADM phases.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Manages architecture requirements'
    },
    {
      name: 'Business Analyst',
      description: 'Elicits and documents requirements'
    },
    {
      name: 'Stakeholders',
      description: 'Provide and validate requirements'
    }
  ],
  principles: [
    {
      title: 'Requirements Traceability',
      description: 'All requirements must be traceable to business objectives and architecture deliverables.',
      tags: ['requirements', 'traceability']
    },
    {
      title: 'Change Impact Analysis',
      description: 'Analyze the impact of requirement changes on the architecture.',
      tags: ['requirements', 'change']
    },
    {
      title: 'Stakeholder Validation',
      description: 'Regularly validate requirements with stakeholders throughout the ADM cycle.',
      tags: ['requirements', 'stakeholder']
    },
    {
      title: 'Requirements Repository',
      description: 'Maintain a centralized repository of all architecture requirements.',
      tags: ['requirements', 'repository']
    }
  ],
  guidelines: [
    'Identify and document requirements throughout all ADM phases',
    'Maintain requirements repository',
    'Monitor baseline requirements',
    'Identify changed requirements and record priorities',
    'Assess impact of changes on current and previous ADM phases'
  ],
  links: [
    {
      title: 'TOGAF Requirements Management',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap15.html',
      description: 'Official TOGAF documentation for Requirements Management'
    }
  ],
  color: '#2bcbba'
};
