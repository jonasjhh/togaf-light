import { preliminaryPhase } from './preliminary';
import { architectureVisionPhase } from './architecture-vision';
import { businessArchitecturePhase } from './business-architecture';
import { informationSystemsArchitecturePhase } from './information-systems-architecture';
import { technologyArchitecturePhase } from './technology-architecture';
import { opportunitiesSolutionsPhase } from './opportunities-solutions';
import { migrationPlanningPhase } from './migration-planning';
import { implementationGovernancePhase } from './implementation-governance';
import { architectureChangeManagementPhase } from './architecture-change-management';
import { requirementsManagementPhase } from './requirements-management';
import { TOGAFData } from '../models/ADMPhase';

export const togafData: TOGAFData = {
  phases: [
    preliminaryPhase,
    architectureVisionPhase,
    businessArchitecturePhase,
    informationSystemsArchitecturePhase,
    technologyArchitecturePhase,
    opportunitiesSolutionsPhase,
    migrationPlanningPhase,
    implementationGovernancePhase,
    architectureChangeManagementPhase,
    requirementsManagementPhase,
  ],
};

export const getPhaseById = (id: string) => {
  return togafData.phases.find((phase) => phase.id === id);
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  togafData.phases.forEach((phase) => {
    phase.principles.forEach((principle) => {
      principle.tags.forEach((tag) => tagSet.add(tag));
    });
  });
  return Array.from(tagSet).sort();
};

export const getPrinciplesByTag = (tag: string) => {
  const principles: Array<{
    phase: string;
    phaseName: string;
    principle: typeof togafData.phases[0]['principles'][0];
  }> = [];

  togafData.phases.forEach((phase) => {
    phase.principles.forEach((principle) => {
      if (principle.tags.includes(tag)) {
        principles.push({
          phase: phase.id,
          phaseName: phase.shortName,
          principle,
        });
      }
    });
  });

  return principles;
};
