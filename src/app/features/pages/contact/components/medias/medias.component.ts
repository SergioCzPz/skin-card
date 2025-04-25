import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { medias } from '@constants/constants';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';

@Component({
  selector: 'app-medias',
  imports: [],
  templateUrl: './medias.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediasComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  public medias = medias;
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#medias-section', 'top bottom');
    staggerAnimation('.media', '#medias-section', 'top center');
  }
}
