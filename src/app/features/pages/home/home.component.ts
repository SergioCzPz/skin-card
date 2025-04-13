import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { CanvasComponent } from '../../components/canvas/canvas.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    CanvasComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
