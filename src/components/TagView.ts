import { getPrinciplesByTag } from '../data';

export class TagView {
  private container: HTMLElement;
  private tag: string;

  constructor(container: HTMLElement, tag: string) {
    this.container = container;
    this.tag = tag;
  }

  render(): void {
    const principles = getPrinciplesByTag(this.tag);

    this.container.innerHTML = `
      <div class="tag-view">
        <div class="tag-view-header">
          <button class="back-btn" id="back-to-home">← Back to ADM Overview</button>
          <h1>Principles tagged with: <span class="tag-highlight">${this.tag}</span></h1>
          <p class="subtitle">${principles.length} principle(s) across all ADM phases</p>
        </div>

        <div class="tag-view-content">
          ${this.renderPrinciples(principles)}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderPrinciples(
    principles: Array<{
      phase: string;
      phaseName: string;
      principle: { title: string; description: string; tags: string[] };
    }>
  ): string {
    return principles
      .map(
        (item) => `
        <div class="tag-principle-card">
          <div class="principle-phase-badge">${item.phaseName}</div>
          <h2>${item.principle.title}</h2>
          <p>${item.principle.description}</p>
          <div class="principle-tags">
            ${item.principle.tags
              .map(
                (tag) => `
              <span class="tag ${tag === this.tag ? 'tag-active' : ''}">${tag}</span>
            `
              )
              .join('')}
          </div>
          <button class="view-phase-link" data-phase-id="${item.phase}">
            View ${item.phaseName} Details →
          </button>
        </div>
      `
      )
      .join('');
  }

  private attachEventListeners(): void {
    const backBtn = this.container.querySelector('#back-to-home');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '';
      });
    }

    const phaseLinks = this.container.querySelectorAll('.view-phase-link');
    phaseLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const phaseId = (e.target as HTMLElement).dataset.phaseId;
        if (phaseId) {
          window.location.hash = `phase/${phaseId}`;
        }
      });
    });
  }
}
