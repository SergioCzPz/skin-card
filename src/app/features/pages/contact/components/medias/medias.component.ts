import { ChangeDetectionStrategy, Component } from '@angular/core';
import { medias } from '@constants/constants';

@Component({
  selector: 'app-medias',
  imports: [],
  templateUrl: './medias.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediasComponent {
  public medias = medias;
}
