import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-disable',
  imports: [],
  templateUrl: './btn-disable.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnDisableComponent {
  public text = input.required<string>();
}
