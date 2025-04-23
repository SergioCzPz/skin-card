import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { designs } from '@constants/constants';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { BtnDisableComponent } from '@shared/components/btn-disable/btn-disable.component';
import { BtnPrimaryComponent } from '@shared/components/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { Design } from '@shared/types/design.interface';

@Component({
  selector: 'app-product',
  imports: [
    RouterLink,
    BtnDisableComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    AccordionComponent,
  ],
  templateUrl: './product.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly route = inject(ActivatedRoute);
  private readonly designs = designs;
  public product!: WritableSignal<Design | undefined>;

  ngOnInit(): void {
    const product = this.route.snapshot.paramMap.get('product');
    this.product = signal(this.designs.find(item => item.url === product));

    const pageTitle = `${this.product()?.name} Card`;
    const image = this.product()!.imageUrl;
    const description = `Explore Our Unique Design ${this.product()?.name}`;

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
}
