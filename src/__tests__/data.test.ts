import { togafData, getPhaseById, getAllTags, getPrinciplesByTag } from '../data';

describe('TOGAF Data', () => {
  it('should have 10 phases', () => {
    expect(togafData.phases).toHaveLength(10);
  });

  it('should have all required phases', () => {
    const phaseIds = togafData.phases.map(p => p.id);
    expect(phaseIds).toContain('preliminary');
    expect(phaseIds).toContain('architecture-vision');
    expect(phaseIds).toContain('business-architecture');
    expect(phaseIds).toContain('information-systems-architecture');
    expect(phaseIds).toContain('technology-architecture');
    expect(phaseIds).toContain('opportunities-solutions');
    expect(phaseIds).toContain('migration-planning');
    expect(phaseIds).toContain('implementation-governance');
    expect(phaseIds).toContain('architecture-change-management');
    expect(phaseIds).toContain('requirements-management');
  });

  it('should have unique phase IDs', () => {
    const ids = togafData.phases.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('each phase should have required fields', () => {
    togafData.phases.forEach(phase => {
      expect(phase.id).toBeDefined();
      expect(phase.name).toBeDefined();
      expect(phase.shortName).toBeDefined();
      expect(phase.description).toBeDefined();
      expect(phase.purpose).toBeDefined();
      expect(phase.color).toBeDefined();
      expect(Array.isArray(phase.roles)).toBe(true);
      expect(Array.isArray(phase.principles)).toBe(true);
      expect(Array.isArray(phase.guidelines)).toBe(true);
      expect(Array.isArray(phase.links)).toBe(true);
    });
  });

  it('each phase should have at least one principle', () => {
    togafData.phases.forEach(phase => {
      expect(phase.principles.length).toBeGreaterThan(0);
    });
  });

  it('each principle should have tags', () => {
    togafData.phases.forEach(phase => {
      phase.principles.forEach(principle => {
        expect(principle.title).toBeDefined();
        expect(principle.description).toBeDefined();
        expect(Array.isArray(principle.tags)).toBe(true);
        expect(principle.tags.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('getPhaseById', () => {
  it('should return phase when ID exists', () => {
    const phase = getPhaseById('preliminary');
    expect(phase).toBeDefined();
    expect(phase?.id).toBe('preliminary');
    expect(phase?.name).toBe('Preliminary Phase');
  });

  it('should return undefined when ID does not exist', () => {
    const phase = getPhaseById('non-existent-phase');
    expect(phase).toBeUndefined();
  });

  it('should return correct phase for all valid IDs', () => {
    const ids = [
      'preliminary',
      'architecture-vision',
      'business-architecture',
      'information-systems-architecture',
      'technology-architecture',
      'opportunities-solutions',
      'migration-planning',
      'implementation-governance',
      'architecture-change-management',
      'requirements-management'
    ];

    ids.forEach(id => {
      const phase = getPhaseById(id);
      expect(phase).toBeDefined();
      expect(phase?.id).toBe(id);
    });
  });
});

describe('getAllTags', () => {
  it('should return an array of tags', () => {
    const tags = getAllTags();
    expect(Array.isArray(tags)).toBe(true);
    expect(tags.length).toBeGreaterThan(0);
  });

  it('should return unique tags', () => {
    const tags = getAllTags();
    const uniqueTags = new Set(tags);
    expect(uniqueTags.size).toBe(tags.length);
  });

  it('should return sorted tags', () => {
    const tags = getAllTags();
    const sortedTags = [...tags].sort();
    expect(tags).toEqual(sortedTags);
  });

  it('should include common tags', () => {
    const tags = getAllTags();
    expect(tags).toContain('governance');
    expect(tags).toContain('security');
  });
});

describe('getPrinciplesByTag', () => {
  it('should return principles for a valid tag', () => {
    const principles = getPrinciplesByTag('governance');
    expect(Array.isArray(principles)).toBe(true);
    expect(principles.length).toBeGreaterThan(0);
  });

  it('should return empty array for non-existent tag', () => {
    const principles = getPrinciplesByTag('non-existent-tag');
    expect(Array.isArray(principles)).toBe(true);
    expect(principles.length).toBe(0);
  });

  it('should return principles with correct structure', () => {
    const principles = getPrinciplesByTag('governance');
    principles.forEach(item => {
      expect(item.phase).toBeDefined();
      expect(item.phaseName).toBeDefined();
      expect(item.principle).toBeDefined();
      expect(item.principle.title).toBeDefined();
      expect(item.principle.description).toBeDefined();
      expect(Array.isArray(item.principle.tags)).toBe(true);
      expect(item.principle.tags).toContain('governance');
    });
  });

  it('should return principles from multiple phases', () => {
    const principles = getPrinciplesByTag('governance');
    const phases = new Set(principles.map(p => p.phase));
    expect(phases.size).toBeGreaterThan(1);
  });
});
