import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faqs } from '@constants/constants';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';

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
export class FaqComponent {
  public faqs = faqs;
}
