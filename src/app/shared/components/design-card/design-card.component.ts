import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Design } from '@shared/types/design.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-design-card',
  imports: [RouterLink],
  templateUrl: './design-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignCardComponent {
  public design = input.required<Design>();
  public cardUrl = computed(() => ['/', 'product', this.design().url]);
}
