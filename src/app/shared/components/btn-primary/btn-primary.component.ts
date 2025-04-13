import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-primary',
  imports: [RouterLink],
  templateUrl: './btn-primary.component.html',
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnPrimaryComponent {
  public text = input.required<string>();
  public isDark = input<boolean>(false);
  public href = input<string>();
  public haveIcon = input<boolean>(false);
  protected isBtn = computed(() => this.href() === undefined);
  protected classes = computed(() =>
    this.isDark() ? 'bg-extend-primary-900' : 'bg-transparent '
  );
}
