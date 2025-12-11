import { ADMPhaseData } from '../models/ADMPhase';

export const preliminaryPhase: ADMPhaseData = {
  id: 'preliminary',
  name: 'Preliminary Phase',
  shortName: 'Preliminary',
  description: 'Preparation and initiation activities to prepare the organization to undertake successful Enterprise Architecture.',
  purpose: 'To determine the Architecture Capability desired by the organization. This includes defining the principles, frameworks, and tools that will guide architecture work.',
  roles: [
    {
      name: 'Enterprise Architect',
      description: 'Leads the establishment of architecture capability'
    },
    {
      name: 'Architecture Board',
      description: 'Provides oversight and governance'
    },
    {
      name: 'CIO/CTO',
      description: 'Sponsors and supports architecture initiatives'
    }
  ],
  principles: [
    {
      title: 'Architecture Governance',
      description: 'Establish clear governance processes and decision-making authority for architecture work.',
      tags: ['governance', 'process']
    },
    {
      title: 'Stakeholder Engagement',
      description: 'Identify and engage key stakeholders early in the architecture process.',
      tags: ['stakeholder', 'communication']
    },
    {
      title: 'Tailored Framework',
      description: 'Tailor TOGAF to meet the specific needs of the organization.',
      tags: ['framework', 'customization']
    }
  ],
  guidelines: [
    'Define the enterprise context and scope for architecture work',
    'Identify stakeholders and their concerns',
    'Establish the architecture team and governance structure',
    'Select and tailor architecture frameworks and tools'
  ],
  links: [
    {
      title: 'TOGAF Preliminary Phase',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap05.html',
      description: 'Official TOGAF documentation for Preliminary Phase'
    }
  ],
  color: '#667eea'
};
