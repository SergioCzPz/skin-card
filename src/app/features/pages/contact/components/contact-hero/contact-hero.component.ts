import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { ContactCanvasComponent } from '../contact-canvas/about-canvas.component';

@Component({
  selector: 'app-contact-hero',
  imports: [BtnPrimaryComponent, BtnSecondaryComponent, ContactCanvasComponent],
  templateUrl: './contact-hero.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHeroComponent {}
