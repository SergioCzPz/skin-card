import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { injectStore, NgtArgs } from 'angular-three';
import { MoonComponent } from '../card-models/moon/moon.component';

@Component({
  imports: [NgtArgs, MoonComponent],
  templateUrl: './scene-graph.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraphComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
}
