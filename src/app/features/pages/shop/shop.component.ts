import { ChangeDetectionStrategy, Component } from '@angular/core';
import { designs } from '@constants/constants';
import { DesignCardComponent } from '@shared/components/design-card/design-card.component';

@Component({
  selector: 'app-shop',
  imports: [DesignCardComponent],
  templateUrl: './shop.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
  protected designs = designs;
}
