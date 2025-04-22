import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { injectStore, NgtArgs } from 'angular-three';
import { PlanetsComponent } from '../card-models/planets/planets.component';

@Component({
  selector: 'app-contact-scene',
  imports: [NgtArgs, PlanetsComponent],
  templateUrl: './contact-scene-graph.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactSceneGraphComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
}
