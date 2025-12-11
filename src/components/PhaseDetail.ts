import { ADMPhaseData } from '../models/ADMPhase';

export class PhaseDetail {
  private container: HTMLElement;
  private phase: ADMPhaseData;

  constructor(container: HTMLElement, phase: ADMPhaseData) {
    this.container = container;
    this.phase = phase;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="phase-detail" style="--phase-color: ${this.phase.color}">
        <div class="phase-detail-header">
          <button class="back-btn" id="back-to-home">← Back to ADM Overview</button>
          <h1>${this.phase.name}</h1>
        </div>

        <div class="phase-detail-content">
          <section class="detail-section">
            <h2>Description</h2>
            <p>${this.phase.description}</p>
          </section>

          <section class="detail-section">
            <h2>Purpose</h2>
            <p>${this.phase.purpose}</p>
          </section>

          <section class="detail-section">
            <h2>Key Roles</h2>
            <div class="roles-grid">
              ${this.renderRoles()}
            </div>
          </section>

          <section class="detail-section">
            <h2>Principles</h2>
            <div class="principles-list">
              ${this.renderPrinciples()}
            </div>
          </section>

          <section class="detail-section">
            <h2>Guidelines</h2>
            <ul class="guidelines-list">
              ${this.phase.guidelines.map((g) => `<li>${g}</li>`).join('')}
            </ul>
          </section>

          ${this.phase.links.length > 0 ? this.renderLinks() : ''}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderRoles(): string {
    return this.phase.roles
      .map(
        (role) => `
        <div class="role-card">
          <h3>${role.name}</h3>
          ${role.description ? `<p>${role.description}</p>` : ''}
        </div>
      `
      )
      .join('');
  }

  private renderPrinciples(): string {
    return this.phase.principles
      .map(
        (principle) => `
        <div class="principle-card">
          <h3>${principle.title}</h3>
          <p>${principle.description}</p>
          <div class="principle-tags">
            ${principle.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `
      )
      .join('');
  }

  private renderLinks(): string {
    return `
      <section class="detail-section">
        <h2>Related Documentation</h2>
        <div class="links-list">
          ${this.phase.links
            .map(
              (link) => `
            <div class="link-card">
              <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                <h3>${link.title}</h3>
                ${link.description ? `<p>${link.description}</p>` : ''}
              </a>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `;
  }

  private attachEventListeners(): void {
    const backBtn = this.container.querySelector('#back-to-home');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '';
      });
    }
  }
}
