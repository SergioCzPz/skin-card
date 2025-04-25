import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AboutHeroComponent } from '../components/about-hero/about-hero.component';
import { TeamComponent } from '../components/team/team.component';
import { BannerComponent } from '../components/banner/banner.component';
import { AboutCtaComponent } from '../components/about-cta/about-cta.component';
import { Meta, Title } from '@angular/platform-browser';
import { cleanScrollTriggers } from 'src/app/shared/utils/clean-trigger.util';

@Component({
  selector: 'app-about',
  imports: [
    AboutHeroComponent,
    TeamComponent,
    BannerComponent,
    AboutCtaComponent,
  ],
  templateUrl: './about.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const pageTitle = 'About Us';
    const image = 'assets/images/workers/worker.jpg';
    const description =
      'At our company, we believe that your card should reflect your personality. Our wide range of customizable decals allows you to express yourself while enhancing the look of your credit or debit card.';

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

  ngOnDestroy(): void {
    cleanScrollTriggers();
  }
}
