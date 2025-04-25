import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { designs } from '@constants/constants';
import { DesignCardComponent } from '@shared/components/design-card/design-card.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';
import { cleanScrollTriggers } from 'src/app/shared/utils/clean-trigger.util';

@Component({
  selector: 'app-shop',
  imports: [DesignCardComponent],
  templateUrl: './shop.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private title = inject(Title);
  private meta = inject(Meta);

  protected designs = designs;

  ngOnInit(): void {
    const pageTitle = 'Shop';
    const image = 'assets/images/stickers.jpg';
    const description = 'Explore Our Unique Designs For Your Cards!';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:title',
      content: pageTitle,
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:image',
      content: image,
    });
    this.meta.updateTag({
      name: 'og:image:width',
      content: '300',
    });
    this.meta.updateTag({
      name: 'og:image:height',
      content: '200',
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#shop-section', -1);
    staggerAnimation('app-design-card', '#shop-section', 'top bottom');
  }

  ngOnDestroy(): void {
    cleanScrollTriggers();
  }
}
