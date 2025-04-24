import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { testimonials } from '@constants/constants';
import { TestimonialCardComponent } from '@shared/components/testimonial-card/testimonial-card.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  protected testimonials = testimonials;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    fromTo('#testimonial-section', '-45%');
    staggerAnimation(
      'app-testimonial-card ',
      '#testimonial-section',
      'top 30%'
    );
  }
}
