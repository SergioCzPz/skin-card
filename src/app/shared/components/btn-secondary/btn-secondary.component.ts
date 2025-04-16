import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

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
  protected classes = computed(() =>
    this.isDark()
      ? 'border-2 border-extend-primary-900 text-extend-text-black'
      : 'border-2 border-extend-backgroud-300 text-extend-backgroud-300 bg-transparent'
  );
}
