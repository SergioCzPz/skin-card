import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';

@Component({
  selector: 'app-features',
  imports: [BtnPrimaryComponent, RouterLink, NgOptimizedImage],
  templateUrl: './features.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {}
