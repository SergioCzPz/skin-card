import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { ContactCanvasComponent } from '../contact-canvas/about-canvas.component';
import { isPlatformBrowser } from '@angular/common';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';

@Component({
  selector: 'app-contact-hero',
  imports: [BtnPrimaryComponent, BtnSecondaryComponent, ContactCanvasComponent],
  templateUrl: './contact-hero.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHeroComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#contact-section', -1);
  }
}
