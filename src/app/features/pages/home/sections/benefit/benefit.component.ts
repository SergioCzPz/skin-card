import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-benefit',
  imports: [],
  templateUrl: './benefit.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitComponent { }
