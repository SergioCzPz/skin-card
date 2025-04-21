import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutHeroComponent } from '../components/about-hero/about-hero.component';
import { TeamComponent } from '../components/team/team.component';
import { BannerComponent } from '../components/banner/banner.component';
import { AboutCtaComponent } from '../components/about-cta/about-cta.component';

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
export class AboutComponent {}
