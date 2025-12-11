import { ADMPhaseData, Principle, Role, Link } from '../models/ADMPhase';
import { preliminaryPhase } from '../data/preliminary';
import { architectureVisionPhase } from '../data/architecture-vision';

describe('ADMPhase Model', () => {
  describe('Phase Structure', () => {
    const testPhase = (phase: ADMPhaseData, expectedName: string) => {
      expect(phase.id).toBeDefined();
      expect(phase.name).toBe(expectedName);
      expect(phase.shortName).toBeDefined();
      expect(phase.description).toBeDefined();
      expect(phase.purpose).toBeDefined();
      expect(phase.color).toMatch(/^#[0-9a-f]{6}$/i);
      expect(Array.isArray(phase.roles)).toBe(true);
      expect(Array.isArray(phase.principles)).toBe(true);
      expect(Array.isArray(phase.guidelines)).toBe(true);
      expect(Array.isArray(phase.links)).toBe(true);
    };

    it('should have valid structure for Preliminary Phase', () => {
      testPhase(preliminaryPhase, 'Preliminary Phase');
      expect(preliminaryPhase.id).toBe('preliminary');
    });

    it('should have valid structure for Architecture Vision Phase', () => {
      testPhase(architectureVisionPhase, 'Phase A: Architecture Vision');
      expect(architectureVisionPhase.id).toBe('architecture-vision');
    });
  });

  describe('Principles', () => {
    it('should have valid principle structure', () => {
      const principle: Principle = preliminaryPhase.principles[0];
      expect(principle.title).toBeDefined();
      expect(principle.description).toBeDefined();
      expect(Array.isArray(principle.tags)).toBe(true);
      expect(principle.tags.length).toBeGreaterThan(0);
    });

    it('should have non-empty principle titles', () => {
      preliminaryPhase.principles.forEach(principle => {
        expect(principle.title.length).toBeGreaterThan(0);
      });
    });

    it('should have non-empty principle descriptions', () => {
      preliminaryPhase.principles.forEach(principle => {
        expect(principle.description.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Roles', () => {
    it('should have valid role structure', () => {
      const role: Role = preliminaryPhase.roles[0];
      expect(role.name).toBeDefined();
      expect(role.name.length).toBeGreaterThan(0);
    });

    it('should have at least one role per phase', () => {
      expect(preliminaryPhase.roles.length).toBeGreaterThan(0);
      expect(architectureVisionPhase.roles.length).toBeGreaterThan(0);
    });
  });

  describe('Links', () => {
    it('should have valid link structure', () => {
      const link: Link = preliminaryPhase.links[0];
      expect(link.title).toBeDefined();
      expect(link.url).toBeDefined();
      expect(link.url).toMatch(/^https?:\/\//);
    });

    it('should have TOGAF documentation links', () => {
      preliminaryPhase.links.forEach(link => {
        expect(link.url).toContain('pubs.opengroup.org');
      });
    });
  });

  describe('Guidelines', () => {
    it('should have at least one guideline per phase', () => {
      expect(preliminaryPhase.guidelines.length).toBeGreaterThan(0);
      expect(architectureVisionPhase.guidelines.length).toBeGreaterThan(0);
    });

    it('should have non-empty guidelines', () => {
      preliminaryPhase.guidelines.forEach(guideline => {
        expect(guideline.length).toBeGreaterThan(0);
      });
    });
  });
});
