import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { CanvasComponent } from 'src/app/features/components/canvas/canvas.component';

import { fromTo } from 'src/app/shared/animations/fromTo.animation';

@Component({
  selector: 'app-hero',
  imports: [BtnPrimaryComponent, BtnSecondaryComponent, CanvasComponent],
  templateUrl: './hero.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#home-hero', -1);
  }
}
