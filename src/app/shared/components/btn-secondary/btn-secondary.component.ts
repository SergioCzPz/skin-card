import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-secondary',
  imports: [],
  templateUrl: './btn-secondary.component.html',
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnSecondaryComponent {
  public text = input.required<string>();
  public isDark = input<boolean>(false);
  public href = input<string>();
}
