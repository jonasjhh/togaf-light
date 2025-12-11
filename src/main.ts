import { ADMCycle } from './components/ADMCycle';
import { PhaseDetail } from './components/PhaseDetail';
import { TagView } from './components/TagView';
import { getPhaseById } from './data';

class TOGAFApp {
  private container: HTMLElement;

  constructor() {
    const container = document.getElementById('app-container');
    if (!container) {
      throw new Error('App container element not found');
    }
    this.container = container;
    this.setupRouter();
  }

  init(): void {
    this.render();
    window.addEventListener('hashchange', () => this.render());
  }

  private setupRouter(): void {
    if (!window.location.hash) {
      window.location.hash = '';
    }
  }

  private render(): void {
    const hash = window.location.hash.slice(1);

    if (!hash) {
      this.renderHome();
    } else if (hash.startsWith('phase/')) {
      const phaseId = hash.replace('phase/', '');
      this.renderPhase(phaseId);
    } else if (hash.startsWith('tag/')) {
      const tag = hash.replace('tag/', '');
      this.renderTag(tag);
    } else {
      this.renderHome();
    }
  }

  private renderHome(): void {
    const cycle = new ADMCycle(this.container);
    cycle.render();
  }

  private renderPhase(phaseId: string): void {
    const phase = getPhaseById(phaseId);
    if (!phase) {
      this.container.innerHTML = `
        <div class="error-view">
          <h1>Phase not found</h1>
          <button class="back-btn" onclick="window.location.hash=''">← Back to ADM Overview</button>
        </div>
      `;
      return;
    }

    const phaseDetail = new PhaseDetail(this.container, phase);
    phaseDetail.render();
  }

  private renderTag(tag: string): void {
    const tagView = new TagView(this.container, tag);
    tagView.render();
  }
}

if (typeof window !== 'undefined') {
  const app = new TOGAFApp();
  app.init();
}
