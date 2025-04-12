import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }

    .menu {
      transition: height .5s ease;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public displayMenu = input.required<WritableSignal<boolean>>();
  public headerHeight = input.required<number>();

  public ulEl = viewChild.required<ElementRef<HTMLUListElement>>('ulEl');

  public navHeight = computed(() =>
    this.displayMenu()() ? window.innerHeight - this.headerHeight() : '0'
  );

  closeNav(): void {
    this.displayMenu().set(false);
  }
}
