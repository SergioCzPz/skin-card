import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  signal,
} from '@angular/core';

import { injectGLTF } from 'angular-three-soba/loaders';
import { NgtArgs, NgtVector3 } from 'angular-three';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { animateModel } from 'src/app/shared/animations/model.animation';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-moon',
  imports: [NgtArgs],
  templateUrl: './moon.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoonComponent {
  public readonly position = signal<NgtVector3>([10, 10, 10]);
  private gltf = injectGLTF(() => 'assets/3D-cards/3D-card-3.glb');
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

      animateModel('#moon-card', model, this.position);
    });
  }
}
