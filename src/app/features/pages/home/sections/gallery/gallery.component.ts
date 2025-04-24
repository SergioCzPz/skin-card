import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#gallery-section', '-45%');
    staggerAnimation('.gallery', '#gallery-section', 'top 30%');
  }
}
