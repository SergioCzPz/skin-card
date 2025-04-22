import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactHeroComponent } from '../components/contact-hero/contact-hero.component';
import { MediasComponent } from '../components/medias/medias.component';
import { FormComponent } from '../components/form/form.component';
import { FaqComponent } from '../components/faq/faq.component';

@Component({
  selector: 'app-contact',
  imports: [ContactHeroComponent, MediasComponent, FormComponent, FaqComponent],
  templateUrl: './contact.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
