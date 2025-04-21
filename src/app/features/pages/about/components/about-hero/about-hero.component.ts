import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutCanvasComponent } from '../about-canvas/about-canvas.component';

@Component({
  selector: 'app-about-hero',
  imports: [AboutCanvasComponent],
  templateUrl: './about-hero.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHeroComponent {}
