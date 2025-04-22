import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  public title = input.required<string>();
  public content = input.required<string>();
  public hasBorderTop = input<boolean>(true);
  protected paragraph =
    viewChild.required<ElementRef<HTMLParagraphElement>>('paragraph');
  protected isDisplayed = signal(false);
  protected height = computed(() =>
    this.isDisplayed() ? this.paragraph().nativeElement.scrollHeight : 0
  );
  public rotateClass = computed(() =>
    this.isDisplayed() ? 'rotate-90' : '-rotate-90'
  );

  public toggleDisplay(): void {
    this.isDisplayed.update(display => !display);
  }
}
