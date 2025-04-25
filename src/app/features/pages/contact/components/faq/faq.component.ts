import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { faqs } from '@constants/constants';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';

@Component({
  selector: 'app-faq',
  imports: [AccordionComponent, BtnSecondaryComponent],
  templateUrl: './faq.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  public faqs = faqs;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#faq-section', 'top center');
  }
}
