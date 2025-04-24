import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';

@Component({
  selector: 'app-join',
  imports: [BtnPrimaryComponent],
  templateUrl: './join.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    staggerAnimation('.join', '#join-section', 'top 30%');
  }
}
