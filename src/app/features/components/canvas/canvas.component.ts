import { ChangeDetectionStrategy, Component } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  AmbientLight,
  SpotLight,
  PointLight,
  MeshStandardMaterial,
  GridHelper,
  Group,
} from 'three';
import { OrbitControls } from 'three-stdlib';
import { SceneGraphComponent } from '../scene-graph/scene-graph.component';

extend({
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  AmbientLight,
  SpotLight,
  PointLight,
  MeshStandardMaterial,
  OrbitControls,
  GridHelper,
  Group,
});

@Component({
  selector: 'app-canvas',
  imports: [NgtCanvas],
  templateUrl: './canvas.component.html',
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { ngSkipHydration: 'true' },
})
export class CanvasComponent {
  protected sceneGraph = SceneGraphComponent;
}
