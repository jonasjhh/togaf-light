export type ADMPhase =
  | 'preliminary'
  | 'architecture-vision'
  | 'business-architecture'
  | 'information-systems-architecture'
  | 'technology-architecture'
  | 'opportunities-solutions'
  | 'migration-planning'
  | 'implementation-governance'
  | 'architecture-change-management'
  | 'requirements-management';

export interface Principle {
  title: string;
  description: string;
  tags: string[];
}

export interface Role {
  name: string;
  description?: string;
}

export interface Link {
  title: string;
  url: string;
  description?: string;
}

export interface ADMPhaseData {
  id: ADMPhase;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  roles: Role[];
  principles: Principle[];
  guidelines: string[];
  links: Link[];
  color: string;
}

export interface TOGAFData {
  phases: ADMPhaseData[];
}
