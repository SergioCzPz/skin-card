import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { AboutCanvasComponent } from '../about-canvas/about-canvas.component';
import { isPlatformBrowser } from '@angular/common';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';

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
export class AboutHeroComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#about-section', -1);
  }
}
