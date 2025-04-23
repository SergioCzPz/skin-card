import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ContactHeroComponent } from '../components/contact-hero/contact-hero.component';
import { MediasComponent } from '../components/medias/medias.component';
import { FormComponent } from '../components/form/form.component';
import { FaqComponent } from '../components/faq/faq.component';
import { Meta, Title } from '@angular/platform-browser';

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
export class ContactComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const pageTitle = 'Contact';
    const image = 'assets/images/newspaper.jpg';
    const description =
      'We’re here to answer your questions and help you with your decal needs.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:title',
      content: pageTitle,
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:image',
      content: image,
    });
    this.meta.updateTag({
      name: 'og:image:width',
      content: '300',
    });
    this.meta.updateTag({
      name: 'og:image:height',
      content: '200',
    });
  }
}
