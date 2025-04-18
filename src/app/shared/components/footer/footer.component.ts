import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnSecondaryComponent } from '../btn-secondary/btn-secondary.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BtnSecondaryComponent],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
