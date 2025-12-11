import { ADMPhaseData } from '../models/ADMPhase';

export const informationSystemsArchitecturePhase: ADMPhaseData = {
  id: 'information-systems-architecture',
  name: 'Phase C: Information Systems Architecture',
  shortName: 'C: Info Systems',
  description: 'Develop Target Information Systems (Data and Application) Architectures that enable the Business Architecture and Architecture Vision.',
  purpose: 'To develop Target Architectures for Data and Application domains that support the Business Architecture.',
  roles: [
    {
      name: 'Data Architect',
      description: 'Develops the Data Architecture'
    },
    {
      name: 'Application Architect',
      description: 'Develops the Application Architecture'
    },
    {
      name: 'Solution Architect',
      description: 'Integrates data and application architectures'
    }
  ],
  principles: [
    {
      title: 'Data is an Asset',
      description: 'Data is a valuable enterprise asset that must be managed and protected.',
      tags: ['data', 'governance']
    },
    {
      title: 'Single Source of Truth',
      description: 'Each piece of data should have a single authoritative source.',
      tags: ['data', 'quality']
    },
    {
      title: 'API-First Design',
      description: 'Applications should expose well-defined APIs for integration.',
      tags: ['integration', 'api']
    },
    {
      title: 'Security by Design',
      description: 'Security must be built into systems from the ground up.',
      tags: ['security', 'design']
    }
  ],
  guidelines: [
    'Develop Baseline Data and Application Architectures',
    'Develop Target Data and Application Architectures',
    'Perform gap analysis for both domains',
    'Define Architecture Roadmap components',
    'Ensure alignment with business capabilities'
  ],
  links: [
    {
      title: 'TOGAF Phase C',
      url: 'https://pubs.opengroup.org/togaf-standard/adm/chap08.html',
      description: 'Official TOGAF documentation for Information Systems Architecture'
    }
  ],
  color: '#4facfe'
};
