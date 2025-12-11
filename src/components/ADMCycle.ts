import { togafData } from '../data';

export class ADMCycle {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="adm-header">
        <h1>TOGAF ADM Navigator</h1>
        <p class="subtitle">Architecture Development Method - Phase Guide</p>
      </div>
      <div class="adm-cycle-container">
        <div class="adm-phases-grid">
          ${this.renderPhases()}
        </div>
      </div>
      <div class="adm-views-section">
        <h2>View Principles by Tag</h2>
        <div class="tag-buttons">
          ${this.renderTagButtons()}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderPhases(): string {
    return togafData.phases
      .map(
        (phase) => `
        <div class="adm-phase-card" data-phase-id="${phase.id}" style="--phase-color: ${phase.color}">
          <div class="phase-card-header">
            <h3>${phase.shortName}</h3>
          </div>
          <div class="phase-card-content">
            <p class="phase-description">${phase.description}</p>
            <div class="phase-stats">
              <span class="stat">${phase.principles.length} Principles</span>
              <span class="stat">${phase.roles.length} Roles</span>
            </div>
          </div>
          <div class="phase-card-footer">
            <button class="view-phase-btn" data-phase-id="${phase.id}">
              View Details →
            </button>
          </div>
        </div>
      `
      )
      .join('');
  }

  private renderTagButtons(): string {
    const tags = this.getAllTags();
    return tags
      .map(
        (tag) => `
        <button class="tag-btn" data-tag="${tag}">
          ${tag}
        </button>
      `
      )
      .join('');
  }

  private getAllTags(): string[] {
    const tagSet = new Set<string>();
    togafData.phases.forEach((phase) => {
      phase.principles.forEach((principle) => {
        principle.tags.forEach((tag) => tagSet.add(tag));
      });
    });
    return Array.from(tagSet).sort();
  }

  private attachEventListeners(): void {
    const phaseButtons = this.container.querySelectorAll('.view-phase-btn');
    phaseButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const phaseId = (e.target as HTMLElement).dataset.phaseId;
        if (phaseId) {
          window.location.hash = `phase/${phaseId}`;
        }
      });
    });

    const tagButtons = this.container.querySelectorAll('.tag-btn');
    tagButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const tag = (e.target as HTMLElement).dataset.tag;
        if (tag) {
          window.location.hash = `tag/${tag}`;
        }
      });
    });
  }
}
