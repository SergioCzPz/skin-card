import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [BtnPrimaryComponent, RouterLink, NavbarComponent],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public headerEl = viewChild.required<ElementRef<HTMLElement>>('headerEl');
  public headerHeight = computed(
    () => this.headerEl().nativeElement.scrollHeight
  );

  public displayMenu = signal(false);
  public btnSrc = computed(() =>
    this.displayMenu()
      ? 'assets/images/icons/close.svg'
      : 'assets/images/icons/menu.svg'
  );

  toggleMenu(): void {
    this.displayMenu.update(value => !value);
  }
}
