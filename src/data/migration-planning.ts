import { ADMPhaseData } from '../models/ADMPhase';

export const migrationPlanningPhase: ADMPhaseData = {
  id: 'migration-planning',
  name: 'Phase F: Migration Planning',
  shortName: 'F: Migration',
  description: 'Finalize the Architecture Roadmap and detailed Implementation and Migration Plan.',
  purpose: 'To develop a detailed Implementation and Migration Plan that realizes the Target Architecture.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Oversees migration planning'
    },
    {
      name: 'Project Managers',
      description: 'Develop detailed project plans'
    },
    {
      name: 'Change Manager',
      description: 'Plans organizational change management'
    }
  ],
  principles: [
    {
      title: 'Risk-Based Prioritization',
      description: 'Prioritize implementation activities based on business value and risk.',
      tags: ['risk', 'planning']
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize use of available resources across implementation projects.',
      tags: ['resources', 'efficiency']
    },
    {
      title: 'Change Management',
      description: 'Plan for organizational change management alongside technical changes.',
      tags: ['change', 'people']
    }
  ],
  guidelines: [
    'Confirm Architecture Roadmap with stakeholders',
    'Assign business value to each work package',
    'Estimate resource requirements and costs',
    'Assess dependencies and risks',
    'Finalize Implementation and Migration Plan'
  ],
  links: [
    {
      title: 'TOGAF Phase F',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap11.html',
      description: 'Official TOGAF documentation for Migration Planning'
    }
  ],
  color: '#fa709a'
};
