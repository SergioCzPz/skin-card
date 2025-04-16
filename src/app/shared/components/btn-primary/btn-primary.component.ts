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
  public isFill = input<boolean>(false);
  public href = input<string>();
  public haveIcon = input<boolean>(false);

  protected iconSrc = computed(() =>
    this.isFill()
      ? 'assets/images/icons/sell-blue.svg'
      : 'assets/images/icons/sell-white.svg'
  );
  protected isBtn = computed(() => this.href() === undefined);
  protected classes = computed(() =>
    this.isDark()
      ? 'bg-extend-primary-900 border-extend-primary-900 text-extend-backgroud-50'
      : this.isFill()
      ? 'bg-extend-backgroud-50 border-extend-backgroud-300 text-extend-text-black'
      : 'bg-transparent border-extend-backgroud-300 text-extend-backgroud-50'
  );
}
