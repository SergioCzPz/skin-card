import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Testimonial } from '@shared/types/testimonial';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styles: `
    :host {
      display: block;
      flex: 1 1 0%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
  public testimonial = input.required<Testimonial>();
}
