import { ADMPhaseData } from '../models/ADMPhase';

export const architectureVisionPhase: ADMPhaseData = {
  id: 'architecture-vision',
  name: 'Phase A: Architecture Vision',
  shortName: 'A: Vision',
  description: 'Develop a high-level aspirational vision of the capabilities and business value to be delivered as a result of the proposed Enterprise Architecture.',
  purpose: 'To develop a high-level vision of the Target Architecture that addresses stakeholder concerns and demonstrates business value.',
  roles: [
    {
      name: 'Lead Architect',
      description: 'Develops the Architecture Vision'
    },
    {
      name: 'Business Stakeholders',
      description: 'Provide business requirements and validate vision'
    },
    {
      name: 'Project Sponsor',
      description: 'Approves the vision and provides resources'
    }
  ],
  principles: [
    {
      title: 'Business Value Focus',
      description: 'All architecture work must demonstrate clear business value and ROI.',
      tags: ['business', 'value']
    },
    {
      title: 'Stakeholder Buy-in',
      description: 'Secure commitment from key stakeholders before proceeding with detailed architecture work.',
      tags: ['stakeholder', 'governance']
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and assess key risks early in the architecture process.',
      tags: ['risk', 'security']
    }
  ],
  guidelines: [
    'Establish the architecture project and define scope',
    'Identify stakeholders and their concerns',
    'Confirm and elaborate business goals, drivers, and constraints',
    'Define the Target Architecture value propositions and KPIs',
    'Secure approval to proceed with architecture work'
  ],
  links: [
    {
      title: 'TOGAF Phase A',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap06.html',
      description: 'Official TOGAF documentation for Architecture Vision'
    }
  ],
  color: '#764ba2'
};
