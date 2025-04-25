import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';

@Component({
  selector: 'app-form',
  imports: [BtnPrimaryComponent],
  templateUrl: './form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#form-section', 'top center');
  }
}
