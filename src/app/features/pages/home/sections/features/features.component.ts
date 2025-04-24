import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';

@Component({
  selector: 'app-features',
  imports: [BtnPrimaryComponent, RouterLink],
  templateUrl: './features.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#features', 'top center');
  }
}
