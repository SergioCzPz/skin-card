import { ChangeDetectionStrategy, Component } from '@angular/core';
import { testimonials } from '@constants/constants';
import { TestimonialCardComponent } from '@shared/components/testimonial-card/testimonial-card.component';

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
export class TestimonialsComponent {
  protected testimonials = testimonials;
}
