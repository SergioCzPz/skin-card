import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Member } from '@shared/types/member.interface';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCardComponent {
  public member = input.required<Member>();
  public bgOrange = input<boolean>(false);
  public bgColor = computed(() =>
    this.bgOrange() ? 'bg-extend-orange' : 'bg-extend-backgroud-500'
  );
}
