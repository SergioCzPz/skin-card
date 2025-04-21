import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { injectGLTF } from 'angular-three-soba/loaders';
import { NgtArgs } from 'angular-three';

@Component({
  selector: 'app-astronaut',
  imports: [NgtArgs],
  templateUrl: './astronaut.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AstronautComponent {
  private gltf = injectGLTF(() => 'assets/3D-cards/3D-card-1.glb');
  protected model = computed(() => {
    const gltf = this.gltf();
    if (!gltf) return null;
    return gltf.scene;
  });
}
