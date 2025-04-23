import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styles: `
    :host {
      display: block;
    }

    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
