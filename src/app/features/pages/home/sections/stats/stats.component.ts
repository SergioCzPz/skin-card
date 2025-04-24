import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#stats-section', '-45%');
    staggerAnimation('.stats', '#stats-section', 'top 30%');
  }
}
