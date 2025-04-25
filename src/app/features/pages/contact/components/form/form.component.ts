import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';

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
export class FormComponent {}
