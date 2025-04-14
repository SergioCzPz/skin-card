import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturesComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
