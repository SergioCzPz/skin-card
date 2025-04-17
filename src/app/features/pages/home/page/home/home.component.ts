import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';
import { BenefitComponent } from '../../sections/benefit/benefit.component';
import { StatsComponent } from '../../sections/stats/stats.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { CtaComponent } from '../../sections/cta/cta.component';
import { JoinComponent } from '../../sections/join/join.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FeaturesComponent,
    GalleryComponent,
    BenefitComponent,
    StatsComponent,
    TestimonialsComponent,
    CtaComponent,
    JoinComponent,
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
