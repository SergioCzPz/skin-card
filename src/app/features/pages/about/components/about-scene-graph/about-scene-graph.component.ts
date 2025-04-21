import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { injectStore, NgtArgs } from 'angular-three';
import { AstronautComponent } from '../card-models/astronaut/astronaut.component';

@Component({
  selector: 'app-about-scene',
  imports: [NgtArgs, AstronautComponent],
  templateUrl: './about-scene-graph.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutSceneGraphComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
}
