import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  OnDestroy,
  signal,
} from '@angular/core';

import { injectGLTF } from 'angular-three-soba/loaders';
import { NgtArgs, NgtVector3 } from 'angular-three';
import { animateModel } from 'src/app/shared/animations/model.animation';

import { cleanScrollTriggers } from 'src/app/shared/utils/clean-trigger.util';
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
export class AstronautComponent implements OnDestroy {
  public readonly position = signal<NgtVector3>([10, 10, 10]);
  private gltf = injectGLTF(() => 'assets/3D-cards/3D-card-1.glb');
  protected model = computed(() => {
    const gltf = this.gltf();
    if (!gltf) return null;
    return gltf.scene;
  });

  constructor() {
    effect(() => {
      if (this.model() === null) return;
      const model = this.model();
      if (model === null) return;

      animateModel('#astronaut-card', model, this.position);
    });
  }
  ngOnDestroy(): void {
    cleanScrollTriggers();
  }
}
